const fs = require('fs');
const content = fs.readFileSync('frontend/locate-on-map.html', 'utf8');

const s = content.indexOf('function initLeafletMap()');
const e = content.indexOf('function onMapClick(');
console.log(content.substring(s, e));
