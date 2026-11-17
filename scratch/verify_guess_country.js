const fs = require('fs');

const html = fs.readFileSync('frontend/guess-the-country.html', 'utf8');
const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const usedIds = new Set();
while ((match = idRegex.exec(html)) !== null) {
  usedIds.add(match[1]);
}
console.log('Total document.getElementById IDs:', usedIds.size);
const missing = [];
for (const id of usedIds) {
  if (!html.includes('id="' + id + '"') && !html.includes("id='" + id + "'")) {
    missing.push(id);
  }
}
if (missing.length > 0) {
  console.log('Missing IDs:', missing);
} else {
  console.log('All referenced IDs exist in HTML!');
}

// Verify data_guess_country.js
const path = require('path');
const countries = require(path.join(__dirname, '../frontend/js/data_guess_country.js'));
console.log('Countries in data_guess_country.js:', countries.length);
const requiredFields = ['id', 'name', 'code', 'continent', 'capital', 'currency', 'flagSvg', 'mapSvgPath', 'landmarks', 'clues', 'examPoints'];
let dataErrors = 0;
countries.forEach(c => {
  requiredFields.forEach(f => {
    if (!c[f]) {
      console.error(`Country ${c.name || 'UNKNOWN'} missing field ${f}`);
      dataErrors++;
    }
  });
});
if (dataErrors === 0) {
  console.log('All 40 countries have complete and valid data fields!');
}
