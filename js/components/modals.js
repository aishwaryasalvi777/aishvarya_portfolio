import { projectsData } from "../data/projects.js";
import { experienceData } from "../data/experience.js";
import { skillsData } from "../data/skills.js";
import { recommendationsData } from "../data/recommendations.js";

let mainModal = null;
let modalBackdrop = null;
let recommendationModal = null;

function ensureModalElements() {
  if (!mainModal) mainModal = document.getElementById("modal-content");
  if (!modalBackdrop) modalBackdrop = document.getElementById("modal-backdrop");
}

export function openModal(type, id) {
  ensureModalElements();
  let item = null;
  if (type === "project") item = projectsData.find(x => x.id === id);
  if (type === "experience") item = experienceData.find(x => x.id === id);
  if (type === "skill") item = skillsData.find(x => x.id === id);
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
  const background = item.image ? `background-image:url('${item.image}')` : item.gradient || "bg-gray-800";

  return `
    <button class="absolute top-4 right-4 p-2 rounded-full bg-[#222] hover:bg-[#333]" onclick="closeModal()">
        <i data-lucide="x" class="text-white w-6 h-6"></i>
    </button>
    <div class="h-[250px] w-full bg-cover bg-center relative" style="${background}">
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
        <div class="absolute bottom-4 left-6">
            <h2 class="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">${item.title}</h2>
        </div>
    </div>
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
