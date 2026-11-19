const fs = require('fs');

const files = [
  'frontend/pakistan-map.html',
  'frontend/sindh-map.html',
  'frontend/locate-on-map.html',
  'frontend/physical-geography-map.html',
  'frontend/geopolitical-hotspots-map.html',
  'frontend/international-trade-routes-map.html',
  'frontend/international-organizations-explorer.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n=================== ${f} ===================`);
  const tileMatches = content.match(/function\s+(?:updateMapTiles|setMapStyle|switchMapStyle|initMap|initLeafletMap)[\s\S]*?(?=function\s+[a-zA-Z]|\n\s*\/\/ [A-Z]|\s*<\/script>)/g) || [];
  tileMatches.slice(0, 2).forEach(m => {
    if (m.includes('tileLayer') || m.includes('tileUrl') || m.includes('TILE_URLS')) {
      console.log(m.substring(0, 600));
    }
  });
});
