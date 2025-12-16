import { experienceData } from "../data/experience.js";
import { skillsData } from "../data/skills.js";
import { educationData } from "../data/education.js";

let projectsData = [];
let recommendationsData = [];

export function setProjectsData(data) {
  projectsData = Array.isArray(data) ? data : [];
}

export function setRecommendationHoverData(data) {
  recommendationsData = Array.isArray(data) ? data : [];
}

let hoverCardTimer = null;
let hoverCardEl = null;
let hoverPreviewRoot = null;

// Create global overlay root - MUST be outside any transformed elements
function ensureHoverPreviewRoot() {
  if (!hoverPreviewRoot) {
    hoverPreviewRoot = document.createElement("div");
    hoverPreviewRoot.id = "hover-preview-root";
    hoverPreviewRoot.style.cssText = `
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 10000;
    `;
    document.body.appendChild(hoverPreviewRoot);
  }
  return hoverPreviewRoot;
}

function ensureHoverCardExists() {
  const root = ensureHoverPreviewRoot();
  if (!hoverCardEl) {
    hoverCardEl = document.createElement("div");
    hoverCardEl.id = "hover-card";
    hoverCardEl.className = "hover-card";
    hoverCardEl.style.display = "none";

    hoverCardEl.onmouseenter = () => {
      clearTimeout(hoverCardTimer);
    };
    hoverCardEl.onmouseleave = hideHoverCard;

    // Make the entire hover card clickable, except action buttons
    hoverCardEl.addEventListener("click", (e) => {
      // If an inner element stopped propagation, do nothing
      // Otherwise, open the appropriate modal
      const type = hoverCardEl.dataset.itemType;
      const idStr = hoverCardEl.dataset.itemId;
      if (!type || !idStr) return;
      const id = parseInt(idStr, 10);
      if (Number.isNaN(id)) return;
      hideHoverCard();
      openHoverCardItem();
    });

    root.appendChild(hoverCardEl);
  }
}

export function showHoverCard(event, id, type) {
  ensureHoverCardExists();
  clearTimeout(hoverCardTimer);

  let item = null;
  if (type === "project") item = projectsData.find(x => x.id === id);
  if (type === "experience") item = experienceData.find(x => x.id === id);
  if (type === "skill") item = skillsData.find(x => x.id === id);
  if (type === "education") item = educationData.find(x => x.id === id);

  if (!item) return;

  const hoverContext = event.currentTarget?.dataset?.hoverContext || "";

  hoverCardEl.innerHTML = buildHoverCardHTML(item);
  // Store the item context for click-to-open
  hoverCardEl.dataset.itemType = type;
  hoverCardEl.dataset.itemId = String(id);
  hoverCardEl.dataset.hoverContext = hoverContext;
  hoverCardEl.classList.toggle("hover-card-top5", hoverContext === "top5");
  const tile = event.currentTarget;
  positionHoverCard(tile, hoverContext);
  hoverCardEl.style.display = "block";
  hoverCardEl.style.zIndex = "9999";
  requestAnimationFrame(() => hoverCardEl.classList.add("visible"));
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

function openHoverCardItem() {
  const type = hoverCardEl?.dataset?.itemType;
  const idStr = hoverCardEl?.dataset?.itemId;
  if (!type || !idStr) return;
  const id = parseInt(idStr, 10);
  if (Number.isNaN(id)) return;
  if (type === "project" || type === "experience" || type === "skill" || type === "education") {
    if (typeof openModal === "function") {
      openModal(type, id);
    }
  } else if (type === "recommendation") {
    if (typeof openRecommendationModal === "function") {
      openRecommendationModal(id);
    }
  }
}

// Expose globally for inline onclick handlers
window.openHoverCardItem = openHoverCardItem;

export function showRecommendationHoverCard(event, id) {
  ensureHoverCardExists();
  clearTimeout(hoverCardTimer);
  const rec = recommendationsData.find(r => r.id === id);
  if (!rec) return;
  hoverCardEl.innerHTML = buildRecommendationHoverHTML(rec);
  // Store context for click-to-open
  hoverCardEl.dataset.itemType = "recommendation";
  hoverCardEl.dataset.itemId = String(id);
  hoverCardEl.dataset.hoverContext = "recommendation";
  hoverCardEl.classList.remove("hover-card-top5");
  const tile = event.currentTarget;
  positionHoverCard(tile, "recommendation");
  hoverCardEl.style.display = "block";
  requestAnimationFrame(() => hoverCardEl.classList.add("visible"));
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

export function hideHoverCard() {
  clearTimeout(hoverCardTimer);
  hoverCardTimer = setTimeout(() => {
    if (!hoverCardEl) return;
    hoverCardEl.classList.remove("visible");
    setTimeout(() => {
      if (hoverCardEl) hoverCardEl.style.display = "none";
    }, 180);
  }, 180);
}

function positionHoverCard(tile, hoverContext) {
  const rect = tile.getBoundingClientRect();
  const isTopFive = hoverContext === "top5";
  const cardWidth = isTopFive ? 380 : 420;
  const margin = 16;

  let left = rect.left;
  let top = rect.top - 20;

  if (left + cardWidth + margin > window.innerWidth) {
    left = window.innerWidth - cardWidth - margin;
  }
  if (left < margin) left = margin;
  if (top < 80) top = rect.bottom + 10;

  // Critical: explicitly set position fixed and pointer-events
  hoverCardEl.style.position = "fixed";
  hoverCardEl.style.pointerEvents = "auto";
  hoverCardEl.style.left = `${left}px`;
  hoverCardEl.style.top = `${top}px`;
}

function buildHoverCardHTML(item) {
  const tags = item.tags ? item.tags.join(" • ") : "";
  const imageContent = item.image 
    ? (item.image.includes('.svg') || item.image.includes('devicon')
        ? `<div class="hover-card-image" style="display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.2);"><img src="${item.image}" alt="${item.title}" style="width: 120px; height: 120px; object-fit: contain;" /></div>`
        : `<div class="hover-card-image" style="background-image:url('${item.image}')"></div>`)
    : `<div class="hover-card-image"></div>`;
  
  return `
    ${imageContent}
    <div class="hover-card-content">
        <div class="hover-card-title">${item.title}</div>
        <div class="hover-card-meta">
            ${item.match ? `<span class="match">${item.match}</span>` : ""}
            ${item.year ? `<span>${item.year}</span>` : ""}
            <span>HD</span>
        </div>
        <div class="hover-card-description">${item.preview || item.desc || ""}</div>
        <div class="hover-card-actions" onclick="event.stopPropagation()">
          <button class="hover-card-btn play" onclick="hideHoverCard(); openHoverCardItem(); event.stopPropagation();">Play</button>
            <button class="hover-card-btn add"><i data-lucide="plus"></i></button>
            <button class="hover-card-btn like"><i data-lucide="thumbs-up"></i></button>
        </div>
        <div class="hover-card-tags">
            ${tags ? tags.split(" • ").map(t => `<span class="hover-card-tag">${t}</span>`).join("") : ""}
        </div>
    </div>
    `;
}

function buildRecommendationHoverHTML(rec) {
  return `
        <div class="hover-card-image" style="background-image:url('${rec.image}')"></div>
        <div class="hover-card-content">
            <div class="hover-card-title">${rec.reviewer}</div>
            <div class="hover-card-meta">
                <span>${rec.role}</span>
                <span>•</span>
                <span>${rec.company}</span>
                <span class="match">${rec.match}</span>
            </div>
            <div class="hover-card-description">${rec.excerpt}</div>
            <div class="hover-card-actions">
                <button class="hover-card-btn play" onclick="openRecommendationModal(${rec.id})">View</button>
                <a href="${rec.linkedinUrl}" target="_blank" class="hover-card-btn like"><i data-lucide="linkedin"></i></a>
            </div>
            <div class="hover-card-tags">${rec.tags.map(tag => `<span class="hover-card-tag">${tag}</span>`).join("")}</div>
        </div>
    `;
}
