const fs = require('fs');

const checks = [
  { html: 'frontend/pakistan-map.html', lookFor: 'MAP_DATA' },
  { html: 'frontend/sindh-map.html', lookFor: 'MAP_DATA' },
  { html: 'frontend/physical-geography-map.html', lookFor: 'PHYSICAL_GEOGRAPHY_DATA' },
  { html: 'frontend/geopolitical-hotspots-map.html', lookFor: 'GEOPOLITICAL_HOTSPOTS_DATA' },
  { html: 'frontend/international-trade-routes-map.html', lookFor: 'TRADE_ROUTES_DATA' },
  { html: 'frontend/international-organizations-explorer.html', lookFor: 'ORGANIZATIONS' }
];

checks.forEach(c => {
  const content = fs.readFileSync(c.html, 'utf8');
  console.log(`\n=== In ${c.html} ===`);
  const lines = content.split('\n').filter(l => l.includes(c.lookFor));
  lines.forEach(l => console.log('  ' + l.trim()));
});
