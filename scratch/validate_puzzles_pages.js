const fs = require('fs');
const path = require('path');

function validateHtmlPage(filename) {
  const filePath = path.join(__dirname, '..', 'frontend', filename);
  const html = fs.readFileSync(filePath, 'utf8');

  console.log(`\n--- Validating ${filename} ---`);

  // Check referenced DOM IDs
  const regex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
  let match;
  const usedIds = new Set();
  while ((match = regex.exec(html)) !== null) {
    usedIds.add(match[1]);
  }

  const missing = [];
  for (const id of usedIds) {
    if (!html.includes(`id="${id}"`) && !html.includes(`id='${id}'`)) {
      missing.push(id);
    }
  }

  if (missing.length > 0) {
    console.error(`Missing IDs in ${filename}:`, missing);
    return false;
  } else {
    console.log(`✓ All ${usedIds.size} referenced IDs exist in HTML!`);
    return true;
  }
}

const v1 = validateHtmlPage('crossword.html');
const v2 = validateHtmlPage('word-search.html');

if (!v1 || !v2) {
  process.exit(1);
} else {
  console.log('\nBoth crossword.html and word-search.html are 100% valid!');
}
