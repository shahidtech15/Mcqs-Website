const fs = require('fs');
const content = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');

const s = content.indexOf('data_physical_geography.js');
console.log(content.substring(s - 120, s + 100));
