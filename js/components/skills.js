export function renderSkillsHeatmap(skillsData) {
  const section = document.createElement("div");
  section.classList.add("animate-row");
  section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-5 mt-10">Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${skillsData.map(renderSkillTile).join("")}
        </div>
    `;
  return section;
}

function renderSkillTile(skill) {
  return `
    <div class="skill-heatmap-tile" role="button" tabindex="0"
         onclick="openModal('skill', ${skill.id})"
         onkeydown="if(event.key==='Enter' || event.key===' '){ event.preventDefault(); openModal('skill', ${skill.id}); }">

        <div class="skill-heatmap-header">
            <div class="skill-heatmap-icon">${skill.icon}</div>
            <div class="skill-heatmap-title">${skill.title}</div>
        </div>

        <div class="skill-heatmap-bars">
            <div class="skill-bar">
                <p class="skill-bar-label">Proficiency</p>
                <div class="skill-bar-container">
                    <div class="skill-bar-fill" style="--width: ${skill.level}%"></div>
                </div>
            </div>
            <div class="skill-bar">
                <p class="skill-bar-label">Years</p>
                <div class="skill-bar-container">
                    <div class="skill-bar-fill" style="--width: ${Math.min(skill.years * 20, 100)}%"></div>
                </div>
            </div>
            <div class="skill-bar">
                <p class="skill-bar-label">Usage</p>
                <div class="skill-bar-container">
                    <div class="skill-bar-fill" style="--width: ${skill.frequency}%"></div>
                </div>
            </div>
        </div>
    </div>
    `;
}
