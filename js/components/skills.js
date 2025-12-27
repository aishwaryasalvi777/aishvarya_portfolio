export function renderSkillsHeatmap(skillsData) {
  const section = document.createElement("div");
  section.id = "skills";
    section.classList.add("animate-row", "carousel-container");

  section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Skills</h2>
        <div class="carousel-wrapper">
            <!-- Scroll Row (cards, hover previews) -->
            <div class="carousel-scroll flex gap-4 overflow-x-auto hide-scrollbar pb-4">
                ${skillsData.map(renderSkillTile).join("")}
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

function renderSkillTile(skill) {
  return `
    <div class="relative tile-hover w-[350px] flex-shrink-0 rounded-md overflow-hidden cursor-pointer group border border-white/10"
         role="button" tabindex="0"
         onclick="hideHoverCard(); openModal('skill', ${skill.id});"
         onmouseenter="showHoverCard(event, ${skill.id}, 'skill')" 
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('skill', ${skill.id}); }">

        <div class="h-40 flex items-center justify-center relative overflow-hidden bg-black/20">
            ${skill.image ? `<img src="${skill.image}" alt="${skill.title}" class="w-32 h-32 object-contain" />` : `<div class="text-6xl drop-shadow-lg">${skill.icon}</div>`}
        </div>

        <div class="absolute inset-0 tile-overlay opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 to-transparent flex items-end p-3"
             onclick="openModal('skill', ${skill.id});">
            <button class="bg-white text-black px-4 py-2 rounded font-bold text-sm shadow hover:bg-white/90"
                    onclick="openModal('skill', ${skill.id}); event.stopPropagation();">
                <i data-lucide="play" class="w-4 h-4"></i> View
            </button>
        </div>

        <div class="p-3">
            <p class="text-xs text-green-400 font-bold">${skill.match || ''}</p>
            <p class="text-white font-semibold truncate">${skill.title}</p>
            <p class="text-gray-400 text-xs">${skill.tags ? skill.tags.join(' • ') : ''}</p>
        </div>
    </div>
    `;
}
