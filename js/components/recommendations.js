export function renderRecommendationsRow(recommendationsData) {
  const section = document.createElement("div");
  section.classList.add("animate-row", "mt-10", "carousel-container");
  section.innerHTML = `
        <h2 class="text-white text-xl md:text-2xl font-bold mb-5">Recommendations</h2>

        <div class="carousel-wrapper">
            <div class="carousel-scroll recommendations-scroll-wrapper">
                <div class="recommendations-scroll-container">
                    <div class="recommendations-row">
                        ${recommendationsData.map(renderRecommendationTile).join("")}
                    </div>
                </div>
            </div>
            <div class="carousel-nav">
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

function renderRecommendationTile(rec) {
  return `
    <div class="recommendation-tile"
         style="--gradient-start:${rec.gradientStart}; --gradient-end:${rec.gradientEnd}"
                 onmouseenter="showRecommendationHoverCard(event, ${rec.id})"
                 onmouseleave="hideHoverCard()"
         onclick="openRecommendationModal(${rec.id})">

        <div class="recommendation-header">
            <div class="recommendation-avatar" style="background-image:url('${rec.image}')"></div>
            <div class="recommendation-reviewer-info">
                <p class="recommendation-reviewer-name">${rec.reviewer}</p>
                <p class="recommendation-reviewer-role">${rec.role}</p>
                <p class="recommendation-company">${rec.company} • ${rec.year}</p>
            </div>
        </div>

        <p class="recommendation-excerpt line-clamp-4">${rec.excerpt}</p>

        <div class="recommendation-footer">
            <div class="recommendation-rating">
                ${"★".repeat(rec.rating).split("").map(star =>
                  `<span class="recommendation-rating-star">★</span>`
                ).join("")}
            </div>

            <span class="recommendation-match">${rec.match}</span>
        </div>

        <div class="expand-info p-4 text-gray-300 text-xs">
            <p class="text-sm font-semibold mb-2">Tags:</p>
            <p>${rec.tags.join(", ")}</p>
        </div>
    </div>
    `;
}
