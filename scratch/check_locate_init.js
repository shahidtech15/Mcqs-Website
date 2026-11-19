const fs = require('fs');
const content = fs.readFileSync('frontend/locate-on-map.html', 'utf8');
const s = content.indexOf('function initLeafletMap()');
console.log(content.substring(s, s + 1200));
