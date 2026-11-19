const fs = require('fs');
const content = fs.readFileSync('frontend/sindh-map.html', 'utf8');

const s = content.indexOf('<!-- Leaflet JS & Sindh Geography Dataset -->');
console.log(content.substring(s, s + 500));
