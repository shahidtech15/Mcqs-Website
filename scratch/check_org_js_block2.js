const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');

const s = content.indexOf('<!-- Leaflet.js Library -->');
console.log(content.substring(s, s + 1800));
