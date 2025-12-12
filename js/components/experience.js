export function renderExperienceRow(experienceData) {
  const section = document.createElement("div");
  section.classList.add("animate-row");
  section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-3 mt-10">Experience</h2>
        <div class="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
            ${experienceData.map(renderExperienceTile).join("")}
        </div>
    `;
  return section;
}

function renderExperienceTile(exp) {
  return `
    <div class="relative tile-hover w-[320px] rounded-md overflow-hidden cursor-pointer group border border-white/10"
         role="button" tabindex="0"
         onclick="openModal('experience', ${exp.id})"
         onmouseenter="showHoverCard(event, ${exp.id}, 'experience')"
         onmouseleave="hideHoverCard()"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('experience', ${exp.id}); }">

        <img src="${exp.image}" class="w-full h-40 object-cover" alt="${exp.title} image" />

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
