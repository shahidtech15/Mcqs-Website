const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');

const s = content.indexOf('leaflet.js');
console.log(content.substring(s - 30, s + 100));
