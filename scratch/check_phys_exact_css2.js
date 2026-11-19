const fs = require('fs');
const content = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');

const s = content.indexOf('leaflet.css');
console.log(content.substring(s - 120, s + 60));
