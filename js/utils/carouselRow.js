export function initCarouselRow(rowEl) {
  const track = rowEl.querySelector('.carousel-track');
  const leftBtn = rowEl.querySelector('.carousel-arrow.left');
  const rightBtn = rowEl.querySelector('.carousel-arrow.right');
  if (!track || !leftBtn || !rightBtn) return;

  const dataWidth = parseInt(rowEl.getAttribute('data-card-width'), 10);
  const firstCard = track.querySelector('.carousel-card');
  const cardWidth = Number.isFinite(dataWidth) ? dataWidth : (firstCard?.offsetWidth || 350);
  const gap = 16; // keep in sync with CSS gap
  const scrollStep = cardWidth + gap;

  function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const x = track.scrollLeft;
    const atStart = x <= 2;
    const atEnd = x >= maxScroll - 2;
    leftBtn.style.display = atStart ? 'none' : 'flex';
    rightBtn.style.display = atEnd ? 'none' : 'flex';
  }

  function scrollByStep(direction) {
    const next = track.scrollLeft + (direction === 'left' ? -scrollStep : scrollStep);
    track.scrollTo({ left: next, behavior: 'smooth' });
  }

  leftBtn.addEventListener('click', () => scrollByStep('left'));
  rightBtn.addEventListener('click', () => scrollByStep('right'));
  track.addEventListener('scroll', updateButtons);

  // Keyboard accessibility
  rowEl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByStep('left'); }
    if (e.key === 'ArrowRight') { e.preventDefault(); scrollByStep('right'); }
  });

  // Optional touch swipe enhancement
  let startX = 0;
  let startScrollLeft = 0;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'touch') return;
    startX = e.clientX;
    startScrollLeft = track.scrollLeft;
  });
  track.addEventListener('pointerup', (e) => {
    if (e.pointerType !== 'touch') return;
    const dx = e.clientX - startX;
    const threshold = 40;
    if (dx > threshold) scrollByStep('left');
    else if (dx < -threshold) scrollByStep('right');
    else track.scrollTo({ left: startScrollLeft, behavior: 'smooth' });
  });

  updateButtons();
}

export function initAllCarouselRows() {
  document.querySelectorAll('.carousel-row').forEach(initCarouselRow);
}
