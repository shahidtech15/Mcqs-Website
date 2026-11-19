const fs = require('fs');
const content = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');
const s = content.indexOf('function initMap()');
console.log(content.substring(s, s + 1200));
