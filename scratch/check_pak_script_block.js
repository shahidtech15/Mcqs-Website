const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');

const s = content.indexOf('leaflet.js');
const e = content.indexOf('function renderCategoryPills()');
console.log(content.substring(s - 20, e));
