export function renderTopProjectsRow(projectsData) {
  // Define the top 5 projects in order
  const topProjectMatchers = [
    (p) => p.title.toLowerCase().includes('real') && p.title.toLowerCase().includes('analytics'),
    (p) => p.title.toLowerCase().includes('recommendation') || p.title.toLowerCase().includes('ecommerce'),
    (p) => p.title.toLowerCase().includes('heart'),
    (p) => p.title.toLowerCase().includes('dashboard') || p.title.toLowerCase().includes('powerbi'),
    (p) => p.title.toLowerCase().includes('portfolio')
  ];

  // Get top 5 projects
  const topProjects = [];
  const usedIndices = new Set();

  for (const matcher of topProjectMatchers) {
    const found = projectsData.findIndex((p, i) => !usedIndices.has(i) && matcher(p));
    if (found !== -1) {
      topProjects.push(projectsData[found]);
      usedIndices.add(found);
    }
  }

  // Fallback to first N projects if exact matches not found
  const finalTopProjects = topProjects.length >= 5 
    ? topProjects.slice(0, 5) 
    : [...topProjects, ...projectsData.filter((_, i) => !usedIndices.has(i))].slice(0, 5);

  const section = document.createElement("div");
  section.classList.add("animate-row", "top10-section");
  section.innerHTML = `
    <h2 class="text-white text-2xl md:text-3xl font-black mb-8 mt-10 px-4 md:px-12 tracking-wide">
      Top 5 in Your Portfolio Today
    </h2>
    <div class="top10-row px-4 md:px-12">
      ${finalTopProjects.map((project, index) => renderTopProjectItem(project, index + 1)).join("")}
    </div>
  `;
  return section;
}

function renderTopProjectItem(project, rank) {
  // Generate a gradient background if no image
  const gradients = [
    'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700',
    'bg-gradient-to-br from-red-900 via-red-800 to-red-700',
    'bg-gradient-to-br from-green-900 via-green-800 to-green-700',
    'bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700'
  ];

  const gradientClass = gradients[rank - 1] || gradients[0];
  
  // Poster image or gradient fallback
  const posterContent = project.image && project.image.trim()
    ? `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">`
    : `<div class="w-full h-full ${gradientClass} flex items-center justify-center p-3">
         <div class="text-center">
           <div class="text-white/90 text-xs font-semibold line-clamp-2">${project.title}</div>
         </div>
       </div>`;

  return `
    <div class="top10-item group cursor-pointer relative" 
         onclick="openModal('project', ${project.id});" 
         role="button" tabindex="0"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('project', ${project.id}); }">
      
      <!-- Large outlined number behind -->
      <span class="big-number">${rank}</span>
      
      <!-- Card content on top -->
      <div class="card-content">
        <div class="relative overflow-hidden rounded-sm border border-white/20 group-hover:border-white/40 transition-colors duration-300">
          ${posterContent}
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <button class="w-full bg-white text-black px-3 py-1.5 rounded text-xs font-bold hover:bg-white/90 transition-colors"
                    onclick="openModal('project', ${project.id}); event.stopPropagation();">
              <i data-lucide="play" class="w-3 h-3 inline mr-1"></i> View
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
