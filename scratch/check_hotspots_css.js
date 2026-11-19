const fs = require('fs');
const content = fs.readFileSync('frontend/geopolitical-hotspots-map.html', 'utf8');

const s = content.indexOf('leaflet.css');
console.log(content.substring(s - 80, s + 60));
