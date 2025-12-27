// Netflix-style Experience Detail Modal
// Handles fullscreen modal rendering for experience cards

let experienceModal = null;
let experienceModalHeader = null;
let experienceModalContent = null;
let experienceCache = [];
let isExperienceModalOpen = false;

export function initExperienceDetailModal() {
  experienceModal = document.getElementById("experience-detail-modal");
  experienceModalHeader = document.getElementById("experience-detail-modal-header");
  experienceModalContent = document.getElementById("experience-detail-modal-content");
  if (!experienceModal || !experienceModalHeader || !experienceModalContent) {
    console.warn("Experience detail modal elements not found");
    return;
  }

  const backdrop = experienceModal.querySelector(".experience-modal-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeExperienceDetailModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isExperienceModalOpen) closeExperienceDetailModal();
  });
}

export function setExperienceDetailData(experiences) {
  if (Array.isArray(experiences)) {
    experienceCache = experiences;
  }
}

export function openExperienceDetailById(id) {
  const experience = experienceCache.find((e) => e.id === id);
  if (!experience) {
    console.warn("Experience not found for modal", id);
    return;
  }
  openExperienceDetail(experience);
}

export function openExperienceDetail(experience) {
  if (!experienceModal || !experienceModalHeader || !experienceModalContent) {
    console.warn("Experience detail modal not initialized");
    return;
  }

  const { header, content } = buildExperienceDetailHTML(experience);
  experienceModalHeader.innerHTML = header;
  experienceModalContent.innerHTML = content;
  experienceModal.classList.remove("hidden");
  document.body.classList.add("experience-modal-open");
  isExperienceModalOpen = true;
  if (typeof lucide !== "undefined") lucide.createIcons();
  experienceModal.setAttribute("aria-hidden", "false");
}

export function closeExperienceDetailModal() {
  if (!experienceModal) return;
  experienceModal.classList.add("hidden");
  document.body.classList.remove("experience-modal-open");
  isExperienceModalOpen = false;
  experienceModal.setAttribute("aria-hidden", "true");
}

function buildExperienceDetailHTML(experience) {
  const {
    title,
    image,
    match,
    year,
    desc,
    points = [],
    tags = [],
  } = experience;

  // Handle both single image and array of images
  const imageUrl = Array.isArray(image) ? image[0] : image;

  const badges = [
    match ? `<span class="badge">${match}</span>` : "",
    year ? `<span class="badge alt">${year}</span>` : "",
  ].filter(Boolean).join("");

  const tagsHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  const pointsHTML = points.map(p => `<li>${p}</li>`).join("");

  const header = `
    <div class="experience-modal-header">
      <div class="experience-modal-hero">
        <img src="${imageUrl || "assets/images/portfolio.png"}" alt="${title}" />
        <div class="experience-modal-hero-overlay"></div>
      </div>
      <div class="experience-modal-intro">
        <h2 class="experience-modal-title">${title || "Experience"}</h2>
        ${desc ? `<p class="experience-modal-subtitle">${desc}</p>` : ""}
        <div class="experience-modal-badges">${badges}</div>
      </div>
    </div>
  `;

  const content = `
    <div style="max-width: 900px; margin: 0 auto; padding: 24px 0;">
      ${desc ? `<section class="experience-section"><h3 class="experience-section-title">About</h3><p>${desc}</p></section>` : ""}
      ${points.length ? `<section class="experience-section"><h3 class="experience-section-title">Highlights</h3><ul class="experience-highlights">${pointsHTML}</ul></section>` : ""}
      ${tags.length ? `<section class="experience-section"><h3 class="experience-section-title">Skills</h3><div class="experience-tags">${tagsHTML}</div></section>` : ""}
    </div>
  `;

  return { header, content };
}
