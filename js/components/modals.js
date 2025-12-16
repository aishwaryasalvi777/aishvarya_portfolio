import { experienceData } from "../data/experience.js";
import { skillsData } from "../data/skills.js";
import { educationData } from "../data/education.js";

let projectsData = [];
let recommendationsData = [];

export function setProjectsData(data) {
  projectsData = Array.isArray(data) ? data : [];
}

let mainModal = null;
let modalBackdrop = null;
let recommendationModal = null;

export function setRecommendationsData(data) {
  recommendationsData = Array.isArray(data) ? data : [];
}

function ensureModalElements() {
  if (!mainModal) mainModal = document.getElementById("modal-content");
  if (!modalBackdrop) modalBackdrop = document.getElementById("modal-backdrop");
}

export function openModal(type, id) {
  console.log('openModal called with:', type, id);
  ensureModalElements();
  let item = null;
  if (type === "project") item = projectsData.find(x => x.id === id);
  if (type === "experience") item = experienceData.find(x => x.id === id);
  if (type === "skill") item = skillsData.find(x => x.id === id);
  if (type === "education") item = educationData.find(x => x.id === id);
  console.log('Found item:', item);
  if (!item) return;

  mainModal.innerHTML = buildMainModalHTML(item);
  modalBackdrop.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

export function closeModal() {
  ensureModalElements();
  modalBackdrop.classList.add("hidden");
  document.body.style.overflow = "auto";
}

export function initModalBackdrop() {
  ensureModalElements();
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
}

function buildMainModalHTML(item) {
  const tagsHTML = item.tags ? item.tags.map(t => `<span class="bg-gray-700 px-2 py-1 text-xs rounded">${t}</span>`).join("") : "";
  const pointsHTML = item.points ? item.points.map(p => `<li class="text-gray-300 leading-relaxed">${p}</li>`).join("") : "";
  const linksHTML = item.links ? item.links.map((l, index) => `
        <a href="${l.url}" target="_blank" class="px-4 py-2 rounded font-semibold flex items-center gap-2 ${index === 0 ? "bg-white text-black" : "bg-gray-700 text-white"}">
            <i data-lucide="${index === 0 ? "play" : "file-text"}"></i>
            ${l.label}
        </a>`).join("") : "";
  
  // Check if this is a skill with SVG image
  const isSvgImage = item.image && (item.image.includes('.svg') || item.image.includes('devicon'));
  const headerContent = isSvgImage
    ? `<div class="h-[250px] w-full flex items-center justify-center relative" style="background: rgba(0,0,0,0.2);">
        <img src="${item.image}" alt="${item.title}" style="width: 200px; height: 200px; object-fit: contain;" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <div class="absolute bottom-4 left-6">
            <h2 class="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">${item.title}</h2>
        </div>
      </div>`
    : `<div class="h-[250px] w-full bg-cover bg-center relative" style="background-image:url('${item.image || ""}')">
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div class="absolute bottom-4 left-6">
            <h2 class="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">${item.title}</h2>
        </div>
      </div>`;

  return `
    <button class="modal-close-btn absolute top-4 right-4 p-3 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 transition-all" onclick="closeModal()" aria-label="Close">
        <i data-lucide="x" class="text-white w-6 h-6"></i>
    </button>
    ${headerContent}
    <div class="p-6 md:p-10 text-gray-300 leading-relaxed space-y-6">
        <div class="flex flex-wrap gap-3 text-xs md:text-sm">
            ${item.match ? `<span class="bg-green-600 px-3 py-1 font-bold rounded text-white">${item.match}</span>` : ""}
            ${item.year ? `<span class="bg-blue-600 px-3 py-1 rounded text-white">${item.year}</span>` : ""}
            ${item.category ? `<span class="bg-purple-700 px-3 py-1 rounded text-white">${item.category}</span>` : ""}
        </div>
        ${item.desc ? `<p class="text-base md:text-lg">${item.desc}</p>` : ""}
        ${linksHTML ? `<div class="flex flex-wrap gap-3 pt-2">${linksHTML}</div>` : ""}
        ${tagsHTML ? `<div class="flex flex-wrap gap-2 pt-3">${tagsHTML}</div>` : ""}
        ${pointsHTML ? `<div><h3 class="text-xl font-bold mb-3 text-white">Highlights</h3><ul class="list-disc list-inside space-y-2">${pointsHTML}</ul></div>` : ""}
        <div class="flex justify-end pt-4 border-t border-gray-700">
            <button class="modal-cancel-btn px-6 py-3 rounded-lg bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-all flex items-center gap-2" onclick="closeModal()">
                <i data-lucide="x-circle" class="w-5 h-5"></i>
                Cancel
            </button>
        </div>
    </div>
  `;
}

export function openRecommendationModal(id) {
  ensureModalElements();
  const rec = recommendationsData.find(r => r.id === id);
  if (!rec) return;
  if (!recommendationModal) {
    recommendationModal = createRecommendationModal();
  }
  const modalContent = recommendationModal.querySelector(".recommendation-modal-content");
  modalContent.innerHTML = buildRecommendationModalHTML(rec);
  recommendationModal.classList.add("visible");
  document.body.style.overflow = "hidden";
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

export function closeRecommendationModal() {
  ensureModalElements();
  if (recommendationModal) {
    recommendationModal.classList.remove("visible");
  }
  document.body.style.overflow = "auto";
}

function buildRecommendationModalHTML(rec) {
  const stars = Array(rec.rating).fill("★").join("");
  return `
        <div class="recommendation-modal-header">
            <div class="recommendation-modal-avatar" style="background-image:url('${rec.image}')"></div>
            <div class="recommendation-modal-info">
                <p class="recommendation-modal-name">${rec.reviewer}</p>
                <p class="recommendation-modal-role">${rec.role}</p>
                <p class="recommendation-modal-company">${rec.company}</p>
                <p class="recommendation-modal-year">Year: ${rec.year}</p>
                <p class="recommendation-modal-rating">${stars}</p>
            </div>
        </div>
        <p class="recommendation-modal-text">"${rec.fullReview}"</p>
        <div class="recommendation-modal-actions">
            <a href="${rec.linkedinUrl}" target="_blank" class="recommendation-linkedin-btn"><i data-lucide="linkedin"></i> View on LinkedIn</a>
            <button class="recommendation-close-btn" onclick="closeRecommendationModal()">Close</button>
        </div>
    `;
}

function createRecommendationModal() {
  ensureModalElements();
  const modal = document.createElement("div");
  modal.id = "recommendation-modal";
  modal.className = "recommendation-modal";
  modal.innerHTML = `<div class="recommendation-modal-content"></div>`;
  modal.addEventListener("click", e => { if (e.target === modal) closeRecommendationModal(); });
  document.body.appendChild(modal);
  return modal;
}
