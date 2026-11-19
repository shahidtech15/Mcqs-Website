const fs = require('fs');

function auditFile(file) {
  const content = fs.readFileSync('frontend/' + file, 'utf8');
  console.log(`\n=== Auditing ${file} ===`);
  
  // Find all getElementById calls
  const idRegex = /getElementById\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
  let match;
  let missingIds = [];
  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    const hasId = content.includes(`id="${id}"`) || content.includes(`id='${id}'`);
    if (!hasId) {
      missingIds.push(id);
    }
  }
  if (missingIds.length > 0) {
    console.error('MISSING IDs in ' + file + ':', missingIds);
  } else {
    console.log('All getElementById calls valid in ' + file);
  }
}

[
  'pakistan-map.html',
  'sindh-map.html',
  'world-map.html',
  'locate-on-map.html',
  'physical-geography-map.html',
  'geopolitical-hotspots-map.html',
  'international-trade-routes-map.html',
  'international-organizations-explorer.html'
].forEach(auditFile);
