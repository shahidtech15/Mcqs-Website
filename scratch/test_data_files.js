const fs = require('fs');

const tests = [
  { file: 'frontend/js/data_pakistan_map.js', expected: 'PAKISTAN_MAP_DATA' },
  { file: 'frontend/js/data_sindh_map.js', expected: 'SINDH_MAP_DATA' },
  { file: 'frontend/js/data_world_countries.js', expected: 'WORLD_COUNTRIES_DATA' },
  { file: 'frontend/js/data_locate_map.js', expected: 'LOCATE_MAP_DATA' },
  { file: 'frontend/js/data_physical_geography.js', expected: 'PHYSICAL_GEOGRAPHY_DATA' },
  { file: 'frontend/js/data_geopolitical_hotspots.js', expected: 'GEOPOLITICAL_HOTSPOTS_DATA' },
  { file: 'frontend/js/data_trade_routes.js', expected: 'TRADE_ROUTES_DATA' },
  { file: 'frontend/js/data_organizations.js', expected: 'ORGANIZATIONS_DATA' }
];

tests.forEach(t => {
  const code = fs.readFileSync(t.file, 'utf8');
  const window = {};
  try {
    eval(code);
    const data = window[t.expected];
    if (data) {
      console.log(`[PASS] ${t.file} defines ${t.expected} (keys: ${Object.keys(data).length})`);
    } else {
      console.log(`[FAIL] ${t.file} did NOT define ${t.expected}`);
    }
  } catch(e) {
    console.log(`[ERROR] ${t.file} threw: ${e.message}`);
  }
});
