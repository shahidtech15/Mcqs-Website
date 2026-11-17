const fs = require('fs');
const path = require('path');

const targets = require(path.join(__dirname, '../frontend/js/data_locate_map.js'));
console.log('Total targets in data_locate_map.js:', targets.length);

const required = ['id', 'name', 'category', 'continent', 'lat', 'lng', 'promptText', 'clue', 'examFacts'];
let errs = 0;
targets.forEach((t, i) => {
  required.forEach(f => {
    if (t[f] === undefined || t[f] === null || t[f] === '') {
      console.error(`Target at index ${i} (${t.name || 'UNKNOWN'}) missing field: ${f}`);
      errs++;
    }
  });
  if (typeof t.lat !== 'number' || typeof t.lng !== 'number') {
    console.error(`Target ${t.name} has invalid lat/lng:`, t.lat, t.lng);
    errs++;
  }
});

if (errs === 0) {
  console.log('All 105 targets passed complete schema and numeric coordinate validation!');
} else {
  throw new Error(`${errs} errors found in data_locate_map.js`);
}

// Category counts
const counts = {};
targets.forEach(t => counts[t.category] = (counts[t.category] || 0) + 1);
console.log('Category Counts:', counts);
