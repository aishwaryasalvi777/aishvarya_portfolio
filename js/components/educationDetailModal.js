// Netflix-style Education Detail Modal
// Handles fullscreen modal rendering for education cards

let educationModal = null;
let educationModalHeader = null;
let educationModalContent = null;
let educationCache = [];
let isEducationModalOpen = false;

export function initEducationDetailModal() {
  educationModal = document.getElementById("education-detail-modal");
  educationModalHeader = document.getElementById("education-detail-modal-header");
  educationModalContent = document.getElementById("education-detail-modal-content");
  if (!educationModal || !educationModalHeader || !educationModalContent) {
    console.warn("Education detail modal elements not found");
    return;
  }

  const backdrop = educationModal.querySelector(".education-modal-backdrop");
  if (backdrop) backdrop.addEventListener("click", closeEducationDetailModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isEducationModalOpen) closeEducationDetailModal();
  });
}

export function setEducationDetailData(education) {
  if (Array.isArray(education)) {
    educationCache = education;
  }
}

export function openEducationDetailById(id) {
  const edu = educationCache.find((e) => e.id === id);
  if (!edu) {
    console.warn("Education not found for modal", id);
    return;
  }
  openEducationDetail(edu);
}

export function openEducationDetail(education) {
  if (!educationModal || !educationModalHeader || !educationModalContent) {
    console.warn("Education detail modal not initialized");
    return;
  }

  const { header, content } = buildEducationDetailHTML(education);
  educationModalHeader.innerHTML = header;
  educationModalContent.innerHTML = content;
  educationModal.classList.remove("hidden");
  document.body.classList.add("education-modal-open");
  isEducationModalOpen = true;
  if (typeof lucide !== "undefined") lucide.createIcons();
  educationModal.setAttribute("aria-hidden", "false");
}

export function closeEducationDetailModal() {
  if (!educationModal) return;
  educationModal.classList.add("hidden");
  document.body.classList.remove("education-modal-open");
  isEducationModalOpen = false;
  educationModal.setAttribute("aria-hidden", "true");
}

function buildEducationDetailHTML(education) {
  const {
    school,
    degree,
    field,
    image,
    match,
    startYear,
    endYear,
    desc,
    points = [],
    tags = [],
  } = education;

  // Handle both single image and array of images
  const imageUrl = Array.isArray(image) ? image[0] : image;

  const badges = [
    match ? `<span class="badge">${match}</span>` : "",
    startYear && endYear ? `<span class="badge alt">${startYear} - ${endYear}</span>` : "",
  ].filter(Boolean).join("");

  const tagsHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  const pointsHTML = points.map(p => `<li>${p}</li>`).join("");

  const header = `
    <div class="education-modal-header">
      <div class="education-modal-hero">
        <img src="${imageUrl || "assets/images/portfolio.png"}" alt="${school}" />
        <div class="education-modal-hero-overlay"></div>
      </div>
      <div class="education-modal-intro">
        <h2 class="education-modal-title">${school || "Education"}</h2>
        <p class="education-modal-subtitle">${degree} in ${field}</p>
        ${desc ? `<p class="education-modal-desc">${desc}</p>` : ""}
        <div class="education-modal-badges">${badges}</div>
      </div>
    </div>
  `;

  const content = `
    <div style="max-width: 900px; margin: 0 auto; padding: 24px 0;">
      ${desc ? `<section class="education-section"><h3 class="education-section-title">Overview</h3><p>${desc}</p></section>` : ""}
      ${points.length ? `<section class="education-section"><h3 class="education-section-title">Coursework</h3><ul class="education-highlights">${pointsHTML}</ul></section>` : ""}
      ${tags.length ? `<section class="education-section"><h3 class="education-section-title">Focus Areas</h3><div class="education-tags">${tagsHTML}</div></section>` : ""}
    </div>
  `;

  return { header, content };
}
