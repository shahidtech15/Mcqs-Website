const fs = require('fs');
const path = require('path');

console.log('=============================================');
console.log('       COMPREHENSIVE MAP AUDIT SUITE         ');
console.log('=============================================\n');

// 1. Verify Local Leaflet Assets
const requiredAssets = [
  'frontend/js/leaflet.js',
  'frontend/css/leaflet.css',
  'frontend/css/images/marker-icon.png',
  'frontend/css/images/marker-icon-2x.png',
  'frontend/css/images/marker-shadow.png'
];

let allAssetsOk = true;
requiredAssets.forEach(f => {
  if (fs.existsSync(f)) {
    const stat = fs.statSync(f);
    console.log(`[PASS] Asset exists: ${f} (${stat.size} bytes)`);
  } else {
    console.error(`[FAIL] Asset missing: ${f}`);
    allAssetsOk = false;
  }
});

// 2. Verify all Map Pages
const mapPages = [
  { file: 'frontend/pakistan-map.html', dataVar: 'PAKISTAN_MAP_DATA', isLeaflet: true },
  { file: 'frontend/sindh-map.html', dataVar: 'SINDH_MAP_DATA', isLeaflet: true },
  { file: 'frontend/world-map.html', dataVar: 'WORLD_COUNTRIES_DATA', isLeaflet: false },
  { file: 'frontend/locate-on-map.html', dataVar: 'LOCATE_MAP_DATA', isLeaflet: true },
  { file: 'frontend/physical-geography-map.html', dataVar: 'PHYSICAL_GEOGRAPHY_DATA', isLeaflet: true },
  { file: 'frontend/geopolitical-hotspots-map.html', dataVar: 'GEOPOLITICAL_HOTSPOTS_DATA', isLeaflet: true },
  { file: 'frontend/international-trade-routes-map.html', dataVar: 'TRADE_ROUTES_DATA', isLeaflet: true },
  { file: 'frontend/international-organizations-explorer.html', dataVar: 'ORGANIZATIONS_DATA', isLeaflet: true }
];

let allPagesOk = true;

mapPages.forEach(p => {
  console.log(`\n--- Auditing ${p.file} ---`);
  if (!fs.existsSync(p.file)) {
    console.error(`[FAIL] Page does not exist: ${p.file}`);
    allPagesOk = false;
    return;
  }

  const content = fs.readFileSync(p.file, 'utf8');

  if (p.isLeaflet) {
    // Check local Leaflet CSS
    const hasLocalCss = content.includes('href="css/leaflet.css"');
    console.log(`  Local Leaflet CSS: ${hasLocalCss ? '[PASS]' : '[FAIL]'}`);
    if (!hasLocalCss) allPagesOk = false;

    // Check local Leaflet JS
    const hasLocalJs = content.includes('src="js/leaflet.js"');
    console.log(`  Local Leaflet JS: ${hasLocalJs ? '[PASS]' : '[FAIL]'}`);
    if (!hasLocalJs) allPagesOk = false;

    // Check Tile fallback
    const hasTileFallback = content.includes('tile.openstreetmap.org');
    console.log(`  OpenStreetMap Tile Fallback: ${hasTileFallback ? '[PASS]' : '[FAIL]'}`);
    if (!hasTileFallback) allPagesOk = false;

    // Check InvalidateSize
    const hasInvalidate = content.includes('invalidateSize');
    console.log(`  Leaflet invalidateSize handling: ${hasInvalidate ? '[PASS]' : '[FAIL]'}`);
    if (!hasInvalidate) allPagesOk = false;
  } else {
    // SVG World Map specific checks
    const hasGroupPathHover = content.includes('#world-map g:hover path');
    const hasGroupActivePath = content.includes('#world-map g.active-country path');
    const hasPreserveAspect = content.includes('preserveAspectRatio="xMidYMid meet"');
    console.log(`  Multi-polygon group hover: ${hasGroupPathHover ? '[PASS]' : '[FAIL]'}`);
    console.log(`  Multi-polygon group active: ${hasGroupActivePath ? '[PASS]' : '[FAIL]'}`);
    console.log(`  SVG preserveAspectRatio: ${hasPreserveAspect ? '[PASS]' : '[FAIL]'}`);
    if (!hasGroupPathHover || !hasGroupActivePath || !hasPreserveAspect) allPagesOk = false;
  }

  // Check script syntax by extracting inline scripts and validating with Function constructor / vm
  const scripts = content.match(/<script(?![^>]*src=)[\s\S]*?<\/script>/gi) || [];
  console.log(`  Found ${scripts.length} inline script blocks.`);
  scripts.forEach((s, idx) => {
    const code = s.replace(/<\/?script[^>]*>/gi, '');
    try {
      new Function(code);
      console.log(`    Inline script ${idx}: [SYNTAX VALID]`);
    } catch(err) {
      console.error(`    Inline script ${idx}: [SYNTAX ERROR]`, err.message);
      allPagesOk = false;
    }
  });
});

console.log('\n=============================================');
if (allAssetsOk && allPagesOk) {
  console.log(' ALL MAP AUDITS PASSED WITH 100% SUCCESS! ');
} else {
  console.error(' SOME AUDITS FAILED - PLEASE INSPECT ABOVE. ');
}
console.log('=============================================\n');
