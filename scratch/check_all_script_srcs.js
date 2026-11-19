const fs = require('fs');

const pages = [
  'frontend/pakistan-map.html',
  'frontend/sindh-map.html',
  'frontend/world-map.html',
  'frontend/locate-on-map.html',
  'frontend/physical-geography-map.html',
  'frontend/geopolitical-hotspots-map.html',
  'frontend/international-trade-routes-map.html',
  'frontend/international-organizations-explorer.html'
];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  console.log('=== ' + p + ' ===');
  const scripts = content.match(/<script[^>]*src="([^"]+)"[^>]*>/gi) || [];
  scripts.forEach(s => console.log('  ' + s));
});
