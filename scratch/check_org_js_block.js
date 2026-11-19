const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');

const s = content.indexOf('<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"');
const e = content.indexOf('function renderOrgMap(');
console.log(content.substring(s, e));
