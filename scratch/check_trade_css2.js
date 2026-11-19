const fs = require('fs');
const content = fs.readFileSync('frontend/international-trade-routes-map.html', 'utf8');

const sCss = content.indexOf('leaflet.css');
console.log('CSS block:\n', content.substring(sCss - 120, sCss + 80));
