const data = require('../frontend/js/data_periodic_table.js');

console.log('--- Verifying Periodic Table Data ---');
if (!data.elements || data.elements.length !== 118) {
  console.error(`ERROR: Expected 118 elements, got ${data.elements ? data.elements.length : 0}`);
  process.exit(1);
}

let errorCount = 0;
data.elements.forEach((el, idx) => {
  const z = idx + 1;
  if (el.z !== z) {
    console.error(`Element mismatch: index ${idx} has z=${el.z}`);
    errorCount++;
  }
  if (!el.s || !el.n || !el.cat || !el.catName || !el.blk || !el.config || !el.shells || !el.phase) {
    console.error(`Missing required fields on Z=${z} (${el.n})`);
    errorCount++;
  }
  if (!Array.isArray(el.uses) || el.uses.length === 0) {
    console.error(`Missing uses on Z=${z} (${el.n})`);
    errorCount++;
  }
  if (!el.exam) {
    console.error(`Missing exam note on Z=${z} (${el.n})`);
    errorCount++;
  }
  if (!data.categories[el.cat]) {
    console.error(`Unknown category '${el.cat}' on Z=${z}`);
    errorCount++;
  }
});

console.log(`Verified 118 elements. Errors: ${errorCount}`);
console.log(`Categories count: ${Object.keys(data.categories).length}`);
console.log(`Trends count: ${Object.keys(data.trends).length}`);
console.log(`MCQs count: ${data.mcqs.length}`);

if (errorCount === 0 && data.mcqs.length === 12) {
  console.log('✅ ALL PERIODIC TABLE DATA INTEGRITY CHECKS PASSED!');
} else {
  process.exit(1);
}
