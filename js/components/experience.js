export function renderExperienceRow(experienceData) {
  const section = document.createElement("div");
  section.classList.add("animate-row", "carousel-container");
  section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Experience</h2>
        <div class="carousel-wrapper">
            <!-- Scroll Row (cards, hover previews) -->
            <div class="carousel-scroll flex gap-4 overflow-x-auto hide-scrollbar pb-4">
                ${experienceData.map(renderExperienceTile).join("")}
            </div>
            <!-- Navigation Layer (arrows in separate overlay) -->
            <div class="carousel-nav" aria-hidden="false">
                <button class="carousel-btn carousel-btn-left hidden" aria-label="Scroll left">
                    <i data-lucide="chevron-left"></i>
                </button>
                <button class="carousel-btn carousel-btn-right" aria-label="Scroll right">
                    <i data-lucide="chevron-right"></i>
                </button>
            </div>
        </div>
    `;
  
  // Initialize slideshows after DOM is ready
  setTimeout(() => {
    experienceData.forEach(exp => {
      const images = Array.isArray(exp.image) ? exp.image : [exp.image];
      if (images.length > 1) {
        startSlideshow(`exp-tile-${exp.id}`);
      }
    });
  }, 100);
  
  return section;
}

function renderExperienceTile(exp) {
  // Support both single image string and array of images for slideshow
  const images = Array.isArray(exp.image) ? exp.image : [exp.image];
  const isSlideshow = images.length > 1;
  const tileId = `exp-tile-${exp.id}`;

  return `
    <div class="relative tile-hover experience-card w-[350px] flex-shrink-0 rounded-md overflow-hidden cursor-pointer group border border-white/10"
         id="${tileId}"
         role="button" tabindex="0"
         onclick="openModal('experience', ${exp.id})"
         onmouseenter="showHoverCard(event, ${exp.id}, 'experience')"
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('experience', ${exp.id}); }">

        <div class="experience-image-container w-full h-48 relative" ${isSlideshow ? `data-slideshow='${JSON.stringify(images).replace(/'/g, "&apos;")}'` : ''}>
          ${images.map((img, idx) => `
            <img src="${img}" 
                 class="experience-slide w-full h-48 object-cover absolute inset-0 transition-opacity duration-500 ${idx === 0 ? 'opacity-100' : 'opacity-0'}" 
                 alt="${exp.title} image ${idx + 1}" 
                 data-index="${idx}" />
          `).join('')}
          ${isSlideshow ? `
            <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
              ${images.map((_, idx) => `<div class="w-2 h-2 rounded-full bg-white ${idx === 0 ? 'opacity-100' : 'opacity-40'} transition-opacity slideshow-dot" data-index="${idx}"></div>`).join('')}
            </div>
          ` : ''}
        </div>

        <div class="absolute inset-0 tile-overlay opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/80 to-transparent flex items-end p-3"
           onclick="openModal('experience', ${exp.id});">
          <button class="bg-white text-black px-4 py-2 rounded font-bold text-sm shadow hover:bg-white/90"
              onclick="openModal('experience', ${exp.id}); event.stopPropagation();">
            <i data-lucide="play" class="w-4 h-4"></i> View
          </button>
        </div>

        <div class="p-3">
            <p class="text-xs text-gray-400">${exp.year}</p>
            <p class="text-white font-semibold truncate">${exp.title}</p>
            <p class="text-gray-400 text-xs truncate">${exp.desc}</p>
        </div>
    </div>
    `;
}
// Slideshow management
const slideshows = {};

function startSlideshow(tileId) {
  const tile = document.getElementById(tileId);
  if (!tile) return;
  
  const container = tile.querySelector('.experience-image-container');
  if (!container || !container.dataset.slideshow) return;
  
  const images = JSON.parse(container.dataset.slideshow);
  if (images.length < 2) return;
  
  // Clear any existing interval
  if (slideshows[tileId]) clearInterval(slideshows[tileId]);
  
  let currentIndex = 0;
  
  slideshows[tileId] = setInterval(() => {
    const slides = tile.querySelectorAll('.experience-slide');
    const dots = tile.querySelectorAll('.slideshow-dot');
    
    slides.forEach((slide, idx) => {
      slide.classList.toggle('opacity-100', idx === currentIndex);
      slide.classList.toggle('opacity-0', idx !== currentIndex);
    });
    
    dots.forEach((dot, idx) => {
      dot.classList.toggle('opacity-100', idx === currentIndex);
      dot.classList.toggle('opacity-40', idx !== currentIndex);
    });
    
    currentIndex = (currentIndex + 1) % images.length;
  }, 3000); // Change image every 3 seconds
}

function stopSlideshow(tileId) {
  if (slideshows[tileId]) {
    clearInterval(slideshows[tileId]);
    delete slideshows[tileId];
  }
}

// Expose globally for inline handlers
window.startSlideshow = startSlideshow;
window.stopSlideshow = stopSlideshow;