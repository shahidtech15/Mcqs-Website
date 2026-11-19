const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'frontend', 'unsc-simulator.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('--- Validating unsc-simulator.html ---');

// Check referenced DOM IDs
const regex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const usedIds = new Set();
while ((match = regex.exec(html)) !== null) {
  usedIds.add(match[1]);
}

const missing = [];
for (const id of usedIds) {
  // Allow dynamic IDs like seat- or seat-vote-pill- which are generated in loops
  if (id.startsWith('seat-') || id.startsWith('vote-seat-')) continue;
  if (!html.includes(`id="${id}"`) && !html.includes(`id='${id}'`)) {
    missing.push(id);
  }
}

if (missing.length > 0) {
  console.error('Missing IDs in unsc-simulator.html:', missing);
  process.exit(1);
} else {
  console.log(`✓ All ${usedIds.size} referenced IDs are accounted for in HTML!`);
}
