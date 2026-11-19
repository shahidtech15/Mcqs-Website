const fs = require('fs');
const s = fs.readFileSync('./frontend/img/world-map.svg', 'utf8');
const idx = s.indexOf('id="pk"');
console.log(s.substring(idx - 20, idx + 150));
