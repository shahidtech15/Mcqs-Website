const fs = require('fs');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');
const start = wm.indexOf('#mapCanvasContainer {');
console.log(wm.substring(start, start + 800));
