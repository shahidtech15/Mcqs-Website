const fs = require('fs');
const content = fs.readFileSync('frontend/international-trade-routes-map.html', 'utf8');
const s = content.indexOf('function initMap()');
console.log(content.substring(s, s + 1200));
