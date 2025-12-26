export function renderEducationSection(educationData) {
  const section = document.createElement("div");
  section.classList.add("animate-row", "carousel-container");
  section.innerHTML = `
    <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Education</h2>
    <div class="carousel-wrapper">
      <!-- Scroll Row (cards, hover previews) -->
      <div class="carousel-scroll flex gap-4 overflow-x-auto hide-scrollbar pb-4">
        ${educationData.map(renderEducationTile).join("")}
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
    educationData.forEach(edu => {
      const images = Array.isArray(edu.image) ? edu.image : [edu.image];
      if (images.length > 1) {
        startEducationSlideshow(`edu-tile-${edu.id}`);
      }
    });
  }, 100);
  
  return section;
}

function renderEducationTile(edu) {
  const images = Array.isArray(edu.image) ? edu.image : [edu.image];
  const hasMultipleImages = images.length > 1;
  
  return `
    <div class="relative tile-hover w-[350px] flex-shrink-0 rounded-md overflow-hidden cursor-pointer group border border-white/10"
         role="button" tabindex="0"
         onclick="openModal('education', ${edu.id})"
         onmouseenter="showHoverCard(event, ${edu.id}, 'education')"
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('education', ${edu.id}); }"
         id="edu-tile-${edu.id}">

      ${hasMultipleImages ? `
        <!-- Multi-image Slideshow -->
        <div class="slides-container relative w-full h-40 overflow-hidden">
          ${images.map((img, idx) => `
            <img 
              src="${img}" 
              alt="Slide ${idx + 1}" 
              class="slide absolute w-full h-40 object-cover transition-opacity duration-700 ease-in-out ${idx === 0 ? "opacity-100" : "opacity-0"}"
              loading="${idx > 0 ? 'lazy' : 'eager'}"
            />
          `).join("")}
        </div>
        <!-- Dots -->
        <div class="absolute top-2 right-2 flex gap-1 z-10">
          ${images.map((_, idx) => `
            <span 
              class="dot h-1 rounded-full cursor-pointer transition-all ${idx === 0 ? "w-4 bg-white" : "w-1 bg-gray-400"}" 
              data-slide="${idx}"
            ></span>
          `).join("")}
        </div>
      ` : `
        <img src="${images[0]}" class="w-full h-40 object-cover" alt="${edu.school}" />
      `}

      <div class="absolute inset-0 tile-overlay opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/80 to-transparent flex items-end p-3"
           onclick="openModal('education', ${edu.id});">
        <button class="bg-white text-black px-4 py-2 rounded font-bold text-sm shadow hover:bg-white/90"
                onclick="openModal('education', ${edu.id}); event.stopPropagation();">
          <i data-lucide="arrow-right" class="w-4 h-4"></i> Learn More
        </button>
      </div>

      <div class="p-3">
        <p class="text-xs text-gray-400">${edu.startYear} - ${edu.endYear}</p>
        <p class="text-white font-semibold truncate">${edu.school}</p>
        <p class="text-gray-400 text-xs truncate">${edu.degree} in ${edu.field}</p>
      </div>
    </div>
  `;
}

// Slideshow Functions
function startEducationSlideshow(tileId) {
  const tile = document.getElementById(tileId);
  if (!tile) return;

  const slides = tile.querySelectorAll(".slide");
  const dots = tile.querySelectorAll(".dot");
  
  if (slides.length <= 1) return;

  let currentSlide = 0;

  // Dot click handler
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      slides.forEach(slide => slide.classList.add("opacity-0"));
      dots.forEach(d => {
        d.classList.remove("w-4");
        d.classList.add("w-1");
        d.classList.remove("bg-white");
        d.classList.add("bg-gray-400");
      });

      currentSlide = idx;
      slides[currentSlide].classList.remove("opacity-0");
      dots[currentSlide].classList.remove("w-1", "bg-gray-400");
      dots[currentSlide].classList.add("w-4", "bg-white");
    });
  });

  // Auto-rotate every 3 seconds
  const slideInterval = setInterval(() => {
    slides[currentSlide].classList.add("opacity-0");
    dots[currentSlide].classList.remove("w-4");
    dots[currentSlide].classList.add("w-1");
    dots[currentSlide].classList.remove("bg-white");
    dots[currentSlide].classList.add("bg-gray-400");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove("opacity-0");
    dots[currentSlide].classList.remove("w-1");
    dots[currentSlide].classList.add("w-4");
    dots[currentSlide].classList.remove("bg-gray-400");
    dots[currentSlide].classList.add("bg-white");
  }, 3000);

  // Store interval ID for cleanup
  tile.dataset.slideInterval = slideInterval;
}

function stopEducationSlideshow(tileId) {
  const tile = document.getElementById(tileId);
  if (tile && tile.dataset.slideInterval) {
    clearInterval(tile.dataset.slideInterval);
  }
}
