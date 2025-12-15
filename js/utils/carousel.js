export function initCarousel(container) {
  // Prefer the actual horizontal scroller nested inside the generic .carousel-scroll
  const outerScroll = container.querySelector('.carousel-scroll');
  const nestedScroller = outerScroll?.querySelector('.recommendations-scroll-container')
    || outerScroll?.querySelector('.projects-scroll-container')
    || outerScroll?.querySelector('.experience-scroll-container')
    || outerScroll?.querySelector('.skills-scroll-container');
  const scrollContainer = nestedScroller || outerScroll;
  const leftBtn = container.querySelector('.carousel-btn-left');
  const rightBtn = container.querySelector('.carousel-btn-right');
  
  if (!scrollContainer || !leftBtn || !rightBtn) return;

  const scrollAmount = 800; // pixels to scroll

  function updateButtons() {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    
    // Hide left button at start
    if (scrollLeft <= 0) {
      leftBtn.classList.add('hidden');
    } else {
      leftBtn.classList.remove('hidden');
    }
    
    // Hide right button at end
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      rightBtn.classList.add('hidden');
    } else {
      rightBtn.classList.remove('hidden');
    }
  }

  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  scrollContainer.addEventListener('scroll', updateButtons);
  
  // Initial button state
  updateButtons();
  
  // Update on window resize
  window.addEventListener('resize', updateButtons);
}

export function initAllCarousels() {
  const carousels = document.querySelectorAll('.carousel-container');
  carousels.forEach(carousel => initCarousel(carousel));
}
