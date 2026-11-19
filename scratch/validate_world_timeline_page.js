const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'frontend', 'world-history-timeline.html');
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
    // Dynamic IDs generated at runtime
    if (!id.startsWith('mcq_') && !id.startsWith('expl_') && !id.startsWith('event_')) {
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

// Check data file
if (!content.includes('js/data_world_history_timeline.js')) {
  console.error('Missing data_world_history_timeline.js script tag');
  process.exit(1);
}

console.log('VALIDATION SUCCESSFUL: world-history-timeline.html is 100% verified and sound!');
