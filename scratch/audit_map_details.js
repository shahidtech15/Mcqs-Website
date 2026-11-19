const fs = require('fs');

const mapPages = [
  'frontend/pakistan-map.html',
  'frontend/sindh-map.html',
  'frontend/world-map.html',
  'frontend/locate-on-map.html',
  'frontend/physical-geography-map.html',
  'frontend/geopolitical-hotspots-map.html',
  'frontend/international-trade-routes-map.html',
  'frontend/international-organizations-explorer.html'
];

mapPages.forEach(file => {
  console.log(`\n=================== ${file} ===================`);
  const content = fs.readFileSync(file, 'utf8');

  // Check Leaflet links and scripts
  const leafletCss = content.match(/<link[^>]*leaflet[^>]*>/i);
  const leafletJs = content.match(/<script[^>]*leaflet[^>]*><\/script>/i);
  console.log('Leaflet CSS:', leafletCss ? leafletCss[0] : 'None');
  console.log('Leaflet JS:', leafletJs ? leafletJs[0] : 'None');

  // Check map element IDs
  const mapDiv = content.match(/<div[^>]*id="([^"]*map[^"]*)"[^>]*>/i);
  console.log('Map Container Div:', mapDiv ? mapDiv[0] : 'None');

  // Check L.map initialization
  const lMap = content.match(/L\.map\([^)]*\)/i);
  console.log('L.map call:', lMap ? lMap[0] : 'None');

  // Check try/catch around map init
  const hasTryCatch = /try\s*\{[\s\S]*?L\.map/i.test(content);
  console.log('Has try/catch around L.map:', hasTryCatch);

  // Check tile errors or fallbacks
  const hasTileError = /tileerror/i.test(content);
  console.log('Has tile error listener:', hasTileError);

  // Check invalidateSize
  const hasInvalidate = /invalidateSize/i.test(content);
  console.log('Has invalidateSize:', hasInvalidate);
});
