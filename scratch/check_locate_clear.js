const fs = require('fs');
const content = fs.readFileSync('frontend/locate-on-map.html', 'utf8');

const s = content.indexOf('// Clear Markers');
console.log(content.substring(s, s + 300));
