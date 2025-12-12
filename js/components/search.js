import { projectsData } from "../data/projects.js";
import { experienceData } from "../data/experience.js";
import { skillsData } from "../data/skills.js";
import { educationData } from "../data/education.js";

const searchInput = document.getElementById("search-input");
const searchModal = document.getElementById("search-results");
const searchContent = document.getElementById("search-results-content");

export function handleSearch(query) {
  if (!query || query.trim() === "") {
    clearSearch();
    return;
  }
  const q = query.toLowerCase();
  const results = {
    projects: projectsData.filter(item =>
      item.title.toLowerCase().includes(q) ||
      (item.desc && item.desc.toLowerCase().includes(q)) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    ),
    experience: experienceData.filter(item =>
      item.title.toLowerCase().includes(q) ||
      (item.desc && item.desc.toLowerCase().includes(q)) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    ),
    education: educationData.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.preview.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    ),
    skills: skillsData.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    )
  };
  renderSearchResults(query, results);
}

export function clearSearch() {
  if (searchInput) searchInput.value = "";
  if (searchModal) searchModal.classList.add("hidden");
}

function renderSearchResults(query, results) {
  searchModal.classList.remove("hidden");
  let html = `
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">
            Results for "<span class="text-red-500">${query}</span>"
        </h2>
    `;
  if (results.projects.length) html += buildSearchCategory("Projects", results.projects);
  if (results.experience.length) html += buildSearchCategory("Experience", results.experience);
  if (results.education.length) html += buildSearchCategory("Education", results.education);
  if (results.skills.length) html += buildSearchCategory("Skills", results.skills);
  const noResults = !results.projects.length && !results.experience.length && !results.education.length && !results.skills.length;
  if (noResults) {
    html += `<div class="text-center py-10"><p class="text-gray-400 text-lg">No matching results found.</p></div>`;
  }
  searchContent.innerHTML = html;
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function buildSearchCategory(name, items) {
  return `
        <div class="search-result-category mb-10">
            <h3 class="text-red-500 font-bold text-lg uppercase mb-3">${name}</h3>
            <div class="flex flex-wrap gap-4">
                ${items.map(buildSearchTile).join("")}
            </div>
        </div>
    `;
}

function buildSearchTile(item) {
  return `
        <div class="tile-hover w-[240px] rounded-md bg-[#181818] shadow-md overflow-hidden cursor-pointer"
             onclick="openModalById(${item.id}); clearSearch();">
             
            <div class="relative h-32 bg-cover bg-center"
                 style="background-image:url('${item.image || ""}')"></div>

            <div class="p-3">
                <p class="text-white font-bold text-sm truncate">${item.title}</p>
                <p class="text-gray-400 text-xs">${item.preview || item.desc || ""}</p>

                <div class="flex flex-wrap gap-1 mt-2">
                    ${(item.tags || []).slice(0, 3).map(t => `<span class="text-gray-300 text-[10px]">• ${t}</span>`).join("")}
                </div>
            </div>
        </div>
    `;
}
