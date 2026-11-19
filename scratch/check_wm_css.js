const fs = require('fs');
const content = fs.readFileSync('frontend/world-map.html', 'utf8');

const s = content.indexOf('.map-canvas-container');
console.log(content.substring(s - 100, s + 900));
