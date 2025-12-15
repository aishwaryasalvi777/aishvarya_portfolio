const DEFAULT_GRADIENTS = [
  { start: "#1a3d3d", end: "#0f172a" },
  { start: "#3d1f2d", end: "#0f172a" },
  { start: "#2d1b3d", end: "#0f172a" },
  { start: "#1f2937", end: "#0f172a" },
  { start: "#3d2a1f", end: "#0f172a" },
  { start: "#1a2332", end: "#0f172a" },
];

function splitCSVLine(line) {
  const fields = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    const next = line[i + 1];
    if (ch === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) {
      fields.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  fields.push(current);
  return fields;
}

function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = splitCSVLine(lines[0]).map(h => h.trim());
  return lines
    .slice(1)
    .filter(l => l.trim())
    .map(line => {
      const cols = splitCSVLine(line);
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h] = (cols[idx] || "").replace(/^"|"$/g, "").trim();
      });
      return obj;
    });
}

function deriveYear(creationDate) {
  const match = (creationDate || "").match(/(\d{2})\/(\d{2})\/(\d{2})/);
  if (!match) return "";
  const [, , , yy] = match;
  return `20${yy}`;
}

function parseCreationDate(creationDate) {
  const match = (creationDate || "").match(/(\d{2})\/(\d{2})\/(\d{2})/);
  if (!match) return Number.POSITIVE_INFINITY;
  const [_, mm, dd, yy] = match;
  const fullYear = 2000 + parseInt(yy, 10);
  const month = parseInt(mm, 10) - 1;
  const day = parseInt(dd, 10);
  return new Date(fullYear, month, day).getTime();
}

function buildRecommendation(row, idx) {
  const reviewer = `${row["First Name"] || ""} ${row["Last Name"] || ""}`.trim();
  const role = row["Job Title"] || "Colleague";
  const company = row["Company"] || "";
  const fullReview = row["Text"] || "";
  const excerpt = fullReview.length > 260 ? `${fullReview.slice(0, 260)}...` : fullReview;
  const year = deriveYear(row["Creation Date"] || "");
  const status = (row["Status"] || "").toUpperCase();
  const gradient = DEFAULT_GRADIENTS[idx % DEFAULT_GRADIENTS.length];

  const imgMap = {
    "anirudh mhaske": "assets/images/recomm_Anirudh.png",
    "harshal patil": "assets/images/recomm_Harshal.png",
    "sneha parsekar": "assets/images/recomm_Sneha.png",
    "arjun gurung": "assets/images/recomm_Arjun.png",
    "prasanna wadekar": "assets/images/recomm_Prasanna.png",
    "vishal sonar": "assets/images/recomm_Vishal.png",
  };
  const normalizedName = reviewer.toLowerCase();
  const image = imgMap[normalizedName] || "";

  return {
    id: 300 + idx,
    reviewer: reviewer || "Anonymous",
    role,
    company,
    year,
    image,
    excerpt,
    fullReview,
    tags: [role, company].filter(Boolean),
    match: status === "VISIBLE" ? "Featured" : "Pending",
    gradientStart: gradient.start,
    gradientEnd: gradient.end,
    rating: 5,
    linkedinUrl: ""
  };
}

export async function loadRecommendationsFromCSV() {
  try {
    const response = await fetch("assets/Recommendations_Received.csv");
    if (!response.ok) throw new Error(`Failed to load CSV: ${response.status}`);
    const text = await response.text();
    const rows = parseCSV(text);
    const visibleRows = rows
      .filter(r => (r["Status"] || "").toUpperCase() === "VISIBLE")
      .sort((a, b) => parseCreationDate(a["Creation Date"]) - parseCreationDate(b["Creation Date"]));
    return visibleRows.map((row, idx) => buildRecommendation(row, idx));
  } catch (err) {
    console.error("Error loading recommendations CSV", err);
    return [];
  }
}

export { parseCSV };
