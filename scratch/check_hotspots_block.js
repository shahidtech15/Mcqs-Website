const fs = require('fs');
const content = fs.readFileSync('frontend/geopolitical-hotspots-map.html', 'utf8');

const s = content.indexOf('function updateMapTiles()');
const e = content.indexOf('function selectHotspot(');
console.log(content.substring(s, e));
