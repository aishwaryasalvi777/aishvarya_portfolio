export function renderProjectsRow(projectsData) {
  const section = document.createElement("div");
  section.classList.add("animate-row");
  section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Projects</h2>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
            ${projectsData.map(renderProjectTile).join("")}
        </div>
    `;
  return section;
}

function renderProjectTile(project) {
  return `
    <div class="relative tile-hover w-[350px] rounded-md overflow-hidden cursor-pointer group border border-white/10"
         role="button" tabindex="0"
         onclick="hideHoverCard(); openModal('project', ${project.id});"
         onmouseenter="showHoverCard(event, ${project.id}, 'project')" 
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('project', ${project.id}); }">

           <img src="${project.image}" class="w-full h-40 object-cover" alt="${project.title} preview"
               onclick="openModal('project', ${project.id});" />

        <div class="absolute inset-0 tile-overlay opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/70 to-transparent flex items-end p-3"
             onclick="openModal('project', ${project.id});">
            <button class="bg-white text-black px-4 py-2 rounded font-bold text-sm shadow hover:bg-white/90"
                    onclick="openModal('project', ${project.id}); event.stopPropagation();">
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
