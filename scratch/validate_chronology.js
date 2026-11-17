const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'frontend', 'arrange-chronologically.html');
const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_chronology.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const CHRONOLOGY_DATA = require(dataPath);

console.log('--- Checking CHRONOLOGY_DATA ---');
let totalItems = 0;
for (const [key, items] of Object.entries(CHRONOLOGY_DATA)) {
  console.log(`- [${key}] (${items.length} items)`);
  totalItems += items.length;
  // Verify items have required properties
  items.forEach((item, idx) => {
    if (!item.id || !item.title || typeof item.year !== 'number' || !item.dateDisplay || !item.summary || !item.examSignificance) {
      console.error(`Missing property in [${key}][${idx}]:`, item);
    }
  });
}
console.log(`Total chronology items: ${totalItems}`);

console.log('\n--- Checking DOM IDs referenced in script ---');
const regex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const usedIds = new Set();
while ((match = regex.exec(html)) !== null) {
  usedIds.add(match[1]);
}

let missing = [];
for (const id of usedIds) {
  const pattern1 = `id="${id}"`;
  const pattern2 = `id='${id}'`;
  if (!html.includes(pattern1) && !html.includes(pattern2)) {
    missing.push(id);
  }
}

if (missing.length > 0) {
  console.error('Missing IDs in arrange-chronologically.html:', missing);
  process.exit(1);
} else {
  console.log(`All ${usedIds.size} referenced IDs are present in the HTML!`);
}

