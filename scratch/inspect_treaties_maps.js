const fs = require('fs');
const path = require('path');
const vm = require('vm');

const js = fs.readFileSync(path.join(__dirname, '../frontend/js/data_digital_library.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(js, sandbox);
const d = sandbox.window.DIGITAL_LIBRARY_DATA;

console.log('--- ALL TREATIES ---');
d.treaties.forEach((t, i) => {
    console.log(`\nTreaty ${i}:`, JSON.stringify(t, null, 2));
});

console.log('\n--- ALL MAPS ---');
d.mapsAndGeography.forEach((m, i) => {
    console.log(`\nMap ${i}:`, JSON.stringify(m, null, 2));
});

console.log('\n--- ALL EDITORIALS ---');
d.editorials.forEach((e, i) => {
    console.log(`\nEditorial ${i}:`, JSON.stringify(e, null, 2));
});
