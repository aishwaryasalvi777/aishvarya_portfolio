// Netflix-style Project Detail Modal
// Handles fullscreen modal rendering for project cards

let projectModal = null;
let projectModalHeader = null;
let projectModalContent = null;
let projectsCache = [];
let isProjectModalOpen = false;

export function initProjectDetailModal() {
  projectModal = document.getElementById("project-detail-modal");
  projectModalHeader = document.getElementById("project-detail-modal-header");
  projectModalContent = document.getElementById("project-detail-modal-content");
  if (!projectModal || !projectModalHeader || !projectModalContent) {
    console.warn("Project detail modal elements not found");
    return;
  }

  const backdrop = projectModal.querySelector(".project-modal-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeProjectDetailModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isProjectModalOpen) closeProjectDetailModal();
  });
}

export function setProjectDetailData(projects) {
  if (Array.isArray(projects)) {
    projectsCache = projects;
  }
}

export function openProjectDetailById(id) {
  const project = projectsCache.find((p) => p.id === id);
  if (!project) {
    console.warn("Project not found for modal", id);
    return;
  }
  openProjectDetail(project);
}

export function openProjectDetail(project) {
  if (!projectModal || !projectModalHeader || !projectModalContent) {
    console.warn("Project detail modal not initialized");
    return;
  }

  const { header, content } = buildProjectDetailHTML(project);
  projectModalHeader.innerHTML = header;
  projectModalContent.innerHTML = content;
  projectModal.classList.remove("hidden");
  document.body.classList.add("project-modal-open");
  isProjectModalOpen = true;
  if (typeof lucide !== "undefined") lucide.createIcons();
  projectModal.setAttribute("aria-hidden", "false");
}

export function closeProjectDetailModal() {
  if (!projectModal) return;
  projectModal.classList.add("hidden");
  document.body.classList.remove("project-modal-open");
  isProjectModalOpen = false;
  projectModal.setAttribute("aria-hidden", "true");
}

function buildProjectDetailHTML(project) {
  const {
    title,
    image,
    match,
    year,
    category,
    desc,
    points = [],
    tags = [],
    links = [],
  } = project;

  const badges = [
    match ? `<span class="badge">${match}</span>` : "",
    year ? `<span class="badge alt">${year}</span>` : "",
    category ? `<span class="badge muted">${category}</span>` : "",
  ].filter(Boolean).join("");

  const linksHTML = links.map((link, idx) => {
    const primary = idx === 0;
    return `<a href="${link.url}" target="_blank" class="project-link-btn ${primary ? "primary" : "secondary"}">
        <i data-lucide="${primary ? "play" : "external-link"}"></i>
        ${link.label}
      </a>`;
  }).join("");

  const tagsHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  const pointsHTML = points.map(p => `<li>${p}</li>`).join("");

  const header = `
    <div class="project-modal-header">
      <div class="project-modal-hero">
        <img src="${image || "assets/images/portfolio.png"}" alt="${title}" />
        <div class="project-modal-hero-overlay"></div>
      </div>
      <div class="project-modal-intro">
        <h2 class="project-modal-title">${title || "Project"}</h2>
        ${desc ? `<p class="project-modal-subtitle">${desc}</p>` : ""}
        <div class="project-modal-badges">${badges}</div>
      </div>
    </div>
  `;

  const content = `
    <div style="max-width: 900px; margin: 0 auto; padding: 48px 0;">
      ${desc ? `<section class="project-section"><h3 class="project-section-title">Overview</h3><p>${desc}</p></section>` : ""}
      ${points.length ? `<section class="project-section"><h3 class="project-section-title">Highlights</h3><ul class="project-highlights">${pointsHTML}</ul></section>` : ""}
      ${tags.length ? `<section class="project-section"><h3 class="project-section-title">Stack</h3><div class="project-tags">${tagsHTML}</div></section>` : ""}
      ${links.length ? `<section class="project-section"><h3 class="project-section-title">Links</h3><div class="project-links">${linksHTML}</div></section>` : ""}
    </div>
  `;

  return { header, content };
}
