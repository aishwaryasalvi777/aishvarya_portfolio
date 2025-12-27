/**
 * Netflix-style About Modal Component
 * Handles opening/closing the fullscreen About Me modal with animations
 */

let aboutModalElement = null;
let isAboutModalOpen = false;

/**
 * Initialize the About modal (run once on page load)
 */
export function initAboutModal() {
  aboutModalElement = document.getElementById('about-modal');
  if (!aboutModalElement) {
    console.warn('About modal element not found in DOM');
    return;
  }

  // Close on backdrop click
  const backdrop = aboutModalElement.querySelector('.about-modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', closeAboutModal);
  }

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isAboutModalOpen) {
      closeAboutModal();
    }
  });
}

/**
 * Open the About modal with animation
 */
export function openAboutModal() {
  if (!aboutModalElement) {
    console.warn('About modal element not found');
    return;
  }

  // Remove hidden class to trigger animation
  aboutModalElement.classList.remove('hidden');
  
  // Add class to prevent background scroll
  document.body.classList.add('about-modal-open');
  
  // Mark as open
  isAboutModalOpen = true;

  // Reinitialize icons if lucide is available
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Announce to screen readers
  aboutModalElement.setAttribute('aria-hidden', 'false');
}

/**
 * Close the About modal with animation
 */
export function closeAboutModal() {
  if (!aboutModalElement) {
    console.warn('About modal element not found');
    return;
  }

  // Add hidden class to fade out
  aboutModalElement.classList.add('hidden');
  
  // Remove scroll prevention
  document.body.classList.remove('about-modal-open');
  
  // Mark as closed
  isAboutModalOpen = false;

  // Announce to screen readers
  aboutModalElement.setAttribute('aria-hidden', 'true');
}

/**
 * Check if modal is currently open
 */
export function isAboutModalVisible() {
  return isAboutModalOpen;
}
