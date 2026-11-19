const fs = require('fs');
const content = fs.readFileSync('frontend/geopolitical-hotspots-map.html', 'utf8');

const s = content.indexOf('data_geopolitical_hotspots.js');
console.log(content.substring(s - 120, s + 100));
