export function renderProjectsRow(projectsData) {
  const section = document.createElement("div");
  section.classList.add("animate-row", "carousel-container");
  section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Projects</h2>
        <div class="carousel-wrapper">
            <!-- Scroll Row (cards, hover previews) -->
            <div class="carousel-scroll flex gap-4 overflow-x-auto hide-scrollbar pb-4">
                ${projectsData.map(renderProjectTile).join("")}
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

function renderProjectTile(project) {
  // Handle empty images - show a placeholder or gradient
    const imageContent = project.image 
        ? `<img src="${project.image}" class="tile-image" alt="${project.title} preview" onclick="openProjectDetailById(${project.id});" />`
        : `<div class="tile-image tile-image-placeholder" onclick="openProjectDetailById(${project.id});">
                 <i data-lucide="github" class="w-16 h-16 text-gray-400"></i>
             </div>`;
  
  return `
    <div class="relative tile-hover w-[350px] flex-shrink-0 rounded-md overflow-hidden cursor-pointer group border border-white/10"
         role="button" tabindex="0"
         onclick="hideHoverCard(); openProjectDetailById(${project.id});"
         onmouseenter="showHoverCard(event, ${project.id}, 'project')" 
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openProjectDetailById(${project.id}); }">

           ${imageContent}

        <div class="absolute inset-0 tile-overlay opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 to-transparent flex items-end p-3"
             onclick="openProjectDetailById(${project.id});">
            <button class="bg-white text-black px-4 py-2 rounded font-bold text-sm shadow hover:bg-white/90"
                    onclick="openProjectDetailById(${project.id}); event.stopPropagation();">
                <i data-lucide="play" class="w-4 h-4"></i> Play
            </button>
        </div>

        <div class="p-3">
            <p class="text-xs text-green-400 font-bold">${project.match}</p>
            <p class="text-white font-semibold truncate">${project.title}</p>
            <p class="text-gray-400 text-xs">${project.year}</p>
        </div>
    </div>
    `;
}
