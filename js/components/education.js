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
  return section;
}

function renderEducationTile(edu) {
  return `
    <div class="relative tile-hover w-[350px] flex-shrink-0 rounded-md overflow-hidden cursor-pointer group border border-white/10"
         role="button" tabindex="0"
         onclick="openModal('education', ${edu.id})"
         onmouseenter="showHoverCard(event, ${edu.id}, 'education')"
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('education', ${edu.id}); }">

      <img src="${edu.image}" class="w-full h-40 object-cover" alt="${edu.school}" />

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
