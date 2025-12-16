import { projectsData, loadProjectsFromGitHub } from "./data/projects.js";
import { experienceData } from "./data/experience.js";
import { skillsData } from "./data/skills.js";
import { loadRecommendationsFromCSV } from "./data/recommendations.js";
import { educationData } from "./data/education.js";

import { renderProjectsRow } from "./components/projects.js";
import { renderTopFiveProjectsRow } from "./components/topFiveProjects.js";
import { renderExperienceRow } from "./components/experience.js";
import { renderEducationSection } from "./components/education.js";
import { renderSkillsHeatmap } from "./components/skills.js";
import { renderRecommendationsRow } from "./components/recommendations.js";

import { showHoverCard, hideHoverCard, showRecommendationHoverCard, setRecommendationHoverData, setProjectsData as setHoverProjectsData } from "./components/hoverCard.js";
import { openModal, closeModal, initModalBackdrop, openRecommendationModal, closeRecommendationModal, setRecommendationsData, setProjectsData as setModalProjectsData } from "./components/modals.js";
import { handleSearch, clearSearch } from "./components/search.js";
import { enableTileAccessibility } from "./components/accessibility.js";
import { initAllCarousels } from "./utils/carousel.js";
import { initAllCarouselRows } from "./utils/carouselRow.js";

// Store loaded projects globally
let loadedProjects = [];

function renderRows(projects, recommendationsData) {
  const container = document.getElementById("rows-container");
  container.innerHTML = "";
  container.appendChild(renderProjectsRow(projects));
  container.appendChild(renderExperienceRow(experienceData));
  container.appendChild(renderEducationSection(educationData));
  container.appendChild(renderSkillsHeatmap(skillsData));
  container.appendChild(renderTopFiveProjectsRow(projects));
  if (recommendationsData && recommendationsData.length) {
    container.appendChild(renderRecommendationsRow(recommendationsData));
  }
  
  // Initialize carousels after rows are rendered
  setTimeout(() => {
    initAllCarousels();
    initAllCarouselRows();
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }, 100);
}

function openModalById(id) {
  const combined = [...loadedProjects, ...experienceData, ...skillsData, ...educationData];
  const item = combined.find(x => x.id === id);
  if (!item) return;
  const type = loadedProjects.find(x => x.id === id) ? "project" :
               experienceData.find(x => x.id === id) ? "experience" :
               skillsData.find(x => x.id === id) ? "skill" : "project";
  openModal(type, id);
}

function initNavbarScroll() {
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add("bg-[#141414]");
      navbar.classList.remove("bg-gradient-to-b");
    } else {
      navbar.classList.remove("bg-[#141414]");
      navbar.classList.add("bg-gradient-to-b");
    }
  });
}

function initAboutModalStub() {
  // Minimal placeholder to avoid missing handler; customize as needed.
  window.openAboutModal = () => alert("More info coming soon.");
}

document.addEventListener("DOMContentLoaded", async () => {
  // Load projects from GitHub
  let projects = [];
  try {
    projects = await loadProjectsFromGitHub();
    if (projects.length === 0) {
      console.warn('No GitHub repos found, using fallback');
      projects = projectsData;
    }
  } catch (err) {
    console.error("Failed to load GitHub projects, using fallback", err);
    projects = projectsData;
  }
  loadedProjects = projects;

  // Set projects data for hover cards and modals
  setHoverProjectsData(projects);
  setModalProjectsData(projects);

  // Load recommendations
  let recommendations = [];
  try {
    recommendations = await loadRecommendationsFromCSV();
  } catch (err) {
    console.error("Failed to load recommendations", err);
  }
  setRecommendationsData(recommendations);
  setRecommendationHoverData(recommendations);

  renderRows(projects, recommendations);
  enableTileAccessibility();
  initModalBackdrop();
  initNavbarScroll();
  initAboutModalStub();
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

// Expose needed functions for inline handlers and other modules
window.openModal = openModal;
window.closeModal = closeModal;
window.openModalById = openModalById;
window.handleSearch = handleSearch;
window.clearSearch = clearSearch;
window.showHoverCard = showHoverCard;
window.hideHoverCard = hideHoverCard;
window.showRecommendationHoverCard = showRecommendationHoverCard;
window.openRecommendationModal = openRecommendationModal;
window.closeRecommendationModal = closeRecommendationModal;

export { renderRows };
