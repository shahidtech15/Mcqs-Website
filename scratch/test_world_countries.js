const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('frontend/js/data_world_countries.js', 'utf8');
const context = { window: {} };
vm.runInNewContext(code, context);
const data = context.window.WORLD_COUNTRIES_DATA || context.WORLD_COUNTRIES_DATA;
const keys = Object.keys(data);
console.log('Total countries in WORLD_COUNTRIES_DATA:', keys.length);
console.log('Sample keys:', keys.slice(0, 10));
console.log('Sample country (pk):', JSON.stringify(data['pk'], null, 2));
console.log('Sample country (us):', JSON.stringify(data['us'], null, 2));
