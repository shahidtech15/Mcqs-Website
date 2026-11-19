const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');

const sCss = content.indexOf('leaflet.css');
console.log('CSS block:\n', content.substring(sCss - 100, sCss + 100));

const sJs = content.indexOf('leaflet.js');
console.log('JS block:\n', content.substring(sJs - 100, sJs + 100));
