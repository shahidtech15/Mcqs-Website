const fs = require('fs');
const path = require('path');
const vm = require('vm');

const js = fs.readFileSync(path.join(__dirname, '../frontend/js/data_digital_library.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(js, sandbox);
const d = sandbox.window.DIGITAL_LIBRARY_DATA;

for (const key of Object.keys(d)) {
    console.log(`\n=============================`);
    console.log(`DATASET: ${key} (count: ${d[key].length})`);
    console.log(`=============================`);
    console.log(JSON.stringify(d[key][0], null, 2));
}
