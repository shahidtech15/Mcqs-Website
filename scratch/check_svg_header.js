const fs = require('fs');
const s = fs.readFileSync('./frontend/img/world-map.svg', 'utf8');

const first500 = s.substring(0, 500);
console.log('SVG opening:');
console.log(first500);
