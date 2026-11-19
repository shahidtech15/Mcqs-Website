const fs = require('fs');

const files = [
  'frontend/js/data_pakistan_map.js',
  'frontend/js/data_sindh_map.js',
  'frontend/js/data_physical_geography.js',
  'frontend/js/data_geopolitical_hotspots.js',
  'frontend/js/data_trade_routes.js',
  'frontend/js/data_organizations.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  const decl = content.match(/(?:const|let|var|window\.)\s*([A-Za-z0-9_]+)\s*=/g) || [];
  console.log('Declarations:', decl.slice(0, 3));
});
