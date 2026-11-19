const fs = require('fs');
const content = fs.readFileSync('frontend/international-trade-routes-map.html', 'utf8');

const sCss = content.indexOf('leaflet.css');
console.log('CSS:\n', content.substring(sCss - 80, sCss + 60));

const sJs = content.indexOf('leaflet.js');
console.log('JS:\n', content.substring(sJs - 60, sJs + 60));
