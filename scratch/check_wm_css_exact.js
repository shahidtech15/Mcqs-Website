const fs = require('fs');
const content = fs.readFileSync('frontend/world-map.html', 'utf8');

const s = content.indexOf('/* Country SVG Styles */');
console.log(content.substring(s, s + 900));
