const fs = require('fs');

const files = [
  'frontend/js/data_pakistan_map.js',
  'frontend/js/data_sindh_map.js',
  'frontend/js/data_physical_geography.js',
  'frontend/js/data_geopolitical_hotspots.js',
  'frontend/js/data_trade_routes.js'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log('=== ' + f + ' ===');
  console.log(content.substring(content.length - 300).replace(/\n/g, ' '));
});
