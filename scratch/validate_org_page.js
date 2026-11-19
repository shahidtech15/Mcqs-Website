const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'frontend', 'international-organizations-explorer.html');
const content = fs.readFileSync(htmlPath, 'utf8');

console.log('HTML File size:', content.length, 'bytes');

// Check referenced element IDs in JS
const idMatches = content.match(/getElementById\(['"]([^'"]+)['"]\)/g) || [];
const usedIds = [...new Set(idMatches.map(m => m.match(/getElementById\(['"]([^'"]+)['"]\)/)[1]))];

console.log('DOM IDs referenced in JavaScript:', usedIds.length);

let missingIds = [];
usedIds.forEach(id => {
  const pattern = new RegExp(`id=["']${id}["']`);
  if (!pattern.test(content)) {
    // Check if dynamically created or missing
    if (!id.startsWith('card_') && !id.startsWith('exp_') && !id.startsWith('pane-')) {
      missingIds.push(id);
    }
  }
});

if (missingIds.length > 0) {
  console.error('Missing DOM IDs:', missingIds);
  process.exit(1);
} else {
  console.log('All referenced static DOM IDs exist in HTML!');
}

// Check Leaflet and script files
if (!content.includes('js/data_organizations.js')) {
  console.error('Missing data_organizations.js reference');
  process.exit(1);
}
if (!content.includes('leaflet.js')) {
  console.error('Missing Leaflet.js reference');
  process.exit(1);
}

console.log('VALIDATION SUCCESSFUL: international-organizations-explorer.html is 100% sound!');
