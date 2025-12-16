export function renderTopFiveProjectsRow(projectsData) {
  const topMatchers = [
    (p) => includesAll(p.title, ['real', 'analytics']),
    (p) => includesAny(p.title, ['recommendation', 'ecommerce']),
    (p) => includesAny(p.title, ['heart']),
    (p) => includesAny(p.title, ['dashboard', 'powerbi', 'power bi']),
    (p) => includesAny(p.title, ['portfolio'])
  ];

  const selected = [];
  const used = new Set();
  for (const match of topMatchers) {
    const idx = projectsData.findIndex((p, i) => !used.has(i) && match(p));
    if (idx !== -1) {
      selected.push(projectsData[idx]);
      used.add(idx);
    }
  }
  const finalFive = (selected.length >= 5 ? selected : [...selected, ...projectsData.filter((_, i) => !used.has(i))]).slice(0, 5);

  const section = document.createElement('div');
  section.classList.add('animate-row', 'carousel-container');
  section.innerHTML = `
    <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Top 5 in Projects</h2>
    <div class="carousel-wrapper top5-carousel">
      <div class="carousel-scroll flex gap-56 overflow-x-auto hide-scrollbar pb-4 pl-72 pr-6">
        ${finalFive.map((project, index) => renderTopCard(project, index)).join('')}
      </div>
      <div class="carousel-nav" aria-hidden="false">
        <button class="carousel-btn carousel-btn-left hidden" aria-label="Scroll left"><i data-lucide="chevron-left"></i></button>
        <button class="carousel-btn carousel-btn-right" aria-label="Scroll right"><i data-lucide="chevron-right"></i></button>
      </div>
    </div>
  `;
  return section;
}

function renderTopCard(project, index) {
  const imageContent = project.image
    ? `<img src="${project.image}" class="w-full h-96 object-cover" alt="${project.title} preview" onclick="openModal('project', ${project.id});" />`
    : `<div class="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center" onclick="openModal('project', ${project.id});">
         <i data-lucide="github" class="w-16 h-16 text-gray-600"></i>
       </div>`;

  return `
    <div class="project-card tile-hover w-[350px] flex-shrink-0 rounded-md cursor-pointer group border border-white/10"
         data-hover-context="top5"
         role="button" tabindex="0"
         onclick="hideHoverCard(); openModal('project', ${project.id});"
         onmouseenter="showHoverCard(event, ${project.id}, 'project')"
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('project', ${project.id}); }">

      <span class="project-rank" aria-hidden="true">${index + 1}</span>

      <div class="project-content rounded-md overflow-hidden">
        ${imageContent}

        <div class="absolute inset-0 tile-overlay opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 to-transparent flex items-end p-3"
             onclick="openModal('project', ${project.id});">
          <button class="bg-white text-black px-4 py-2 rounded font-bold text-sm shadow hover:bg-white/90"
                  onclick="openModal('project', ${project.id}); event.stopPropagation();">
            <i data-lucide="play" class="w-4 h-4"></i> Play
          </button>
        </div>

        <div class="p-3">
          <p class="text-xs text-green-400 font-bold">${project.match || ''}</p>
          <p class="text-white font-semibold truncate">${project.title}</p>
          <p class="text-gray-400 text-xs">${project.year || ''}</p>
        </div>
      </div>
    </div>
  `;
}

function includesAll(title, parts) {
  const t = title.toLowerCase();
  return parts.every(p => t.includes(p));
}

function includesAny(title, parts) {
  const t = title.toLowerCase();
  return parts.some(p => t.includes(p));
}
