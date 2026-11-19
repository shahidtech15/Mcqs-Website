const fs = require('fs');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');
const start = wm.indexOf('.map-canvas-container');
console.log(wm.substring(start, start + 800));
