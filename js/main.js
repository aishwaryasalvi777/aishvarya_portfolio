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
import { initAboutModal, openAboutModal, closeAboutModal } from "./components/aboutModal.js";
import { initProjectDetailModal, openProjectDetailById, closeProjectDetailModal, setProjectDetailData } from "./components/projectDetailModal.js";
import { initExperienceDetailModal, openExperienceDetailById, closeExperienceDetailModal, setExperienceDetailData } from "./components/experienceDetailModal.js";
import { initEducationDetailModal, openEducationDetailById, closeEducationDetailModal, setEducationDetailData } from "./components/educationDetailModal.js";
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
  // ================================
  // NETFLIX-STYLE SIGNUP CONTACT FORM LOGIC
  // ================================
  function initSignupContactForm() {
    const form = document.getElementById('signup-contact-form');
    if (!form) return;
    const emailInput = form.querySelector('#signup-email');
    const nameInput = form.querySelector('#signup-name');
    const messageInput = form.querySelector('#signup-message');
    const submitBtn = form.querySelector('#signup-contact-submit');
    const statusEl = form.querySelector('#signup-contact-status');

    // Emphasize CTA when user types
    [emailInput, nameInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        if (
          (emailInput && emailInput.value.trim()) ||
          (nameInput && nameInput.value.trim()) ||
          (messageInput && messageInput.value.trim())
        ) {
          submitBtn.classList.add('active');
        } else {
          submitBtn.classList.remove('active');
        }
        if (statusEl) {
          statusEl.textContent = '';
          statusEl.classList.remove('success');
        }
        emailInput.classList.remove('input-error');
      });
    });

    // Simple validation and submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      if (!emailInput.value.trim() || !/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        if (statusEl) {
          statusEl.textContent = 'Please enter a valid email.';
          statusEl.classList.remove('success');
        }
        emailInput.focus();
        valid = false;
      }
      if (!valid) return;
      // Simulate success
      if (statusEl) {
        statusEl.textContent = 'Thanks! I’ll respond within 24–48 hours.';
        statusEl.classList.add('success');
      }
      form.reset();
      submitBtn.classList.remove('active');
    });
  }

  // ...existing code...
  }
  
  // Initialize carousels after rows are rendered
    initSignupContactForm();
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
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll('a[href^="#"]');
  const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(Boolean);

  // Scroll-aware navbar behavior
  window.addEventListener("scroll", () => {
    if (!navbar) return;
    
    // Add scrolled class for visual changes
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Update active nav link based on scroll position
    let currentSection = '';
    const scrollPosition = window.scrollY + 100; // Offset for navbar height

    sections.forEach(section => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      }
    });

    // Update active states
    navLinks.forEach(link => {
      link.classList.remove('active');
      const linkHref = link.getAttribute('href').substring(1);
      if (linkHref === currentSection) {
        link.classList.add('active');
      }
    });
  });

  // Profile dropdown toggle
  const profileTrigger = document.getElementById('profile-trigger');
  const profileDropdown = document.getElementById('profile-dropdown');
  
  if (profileTrigger && profileDropdown) {
    profileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!profileTrigger.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.classList.remove('show');
      }
    });

    // Close dropdown when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && profileDropdown.classList.contains('show')) {
        profileDropdown.classList.remove('show');
      }
    });
  }

  // My List dropdown toggle
  const myListTrigger = document.getElementById('my-list-trigger');
  const myListDropdown = document.getElementById('my-list-dropdown');
  
  if (myListTrigger && myListDropdown) {
    myListTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      myListDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking a link
    const dropdownLinks = myListDropdown.querySelectorAll('a');
    dropdownLinks.forEach(link => {
      link.addEventListener('click', () => {
        myListDropdown.classList.remove('show');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!myListTrigger.contains(e.target) && !myListDropdown.contains(e.target)) {
        myListDropdown.classList.remove('show');
      }
    });

    // Close dropdown when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && myListDropdown.classList.contains('show')) {
        myListDropdown.classList.remove('show');
      }
    });
  }
}
function initAboutModalStub() {
  // About modal is now handled by aboutModal.js component
  window.openAboutModal = openAboutModal;
  window.closeAboutModal = closeAboutModal;
}

document.addEventListener("DOMContentLoaded", async () => {
  // Initialize modal components
  initAboutModal();
  initProjectDetailModal();
  initExperienceDetailModal();
  initEducationDetailModal();
  
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

  // Set projects and experience data for detail modals
  setHoverProjectsData(projects);
  setModalProjectsData(projects);
  setProjectDetailData(projects);
  setExperienceDetailData(experienceData);
  setEducationDetailData(educationData);

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
window.openProjectDetailById = openProjectDetailById;
window.closeProjectDetailModal = closeProjectDetailModal;
window.openExperienceDetailById = openExperienceDetailById;
window.closeExperienceDetailModal = closeExperienceDetailModal;
window.openEducationDetailById = openEducationDetailById;
window.closeEducationDetailModal = closeEducationDetailModal;

export { renderRows };
