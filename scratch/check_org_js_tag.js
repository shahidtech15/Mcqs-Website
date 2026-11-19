const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');

const s = content.indexOf('unpkg.com/leaflet');
console.log(content.substring(s - 50, s + 150));
