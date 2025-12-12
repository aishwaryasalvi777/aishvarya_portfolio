export function enableTileAccessibility() {
  const tiles = document.querySelectorAll('.tile-hover, .skill-heatmap-tile');
  tiles.forEach(tile => {
    if (!tile.hasAttribute('tabindex')) tile.setAttribute('tabindex', '0');
    if (!tile.hasAttribute('role')) tile.setAttribute('role', 'button');
  });

  const container = document.getElementById('rows-container');
  if (container) {
    container.addEventListener('keydown', (event) => {
      const key = event.key;
      if (key !== 'Enter' && key !== ' ') return;
      const tile = event.target.closest('.tile-hover, .skill-heatmap-tile');
      if (!tile) return;
      event.preventDefault();
      tile.click();
    }, true);
  }
}
