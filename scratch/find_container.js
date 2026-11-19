const fs = require('fs');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');
const matches = wm.match(/[^{}\n]*mapCanvasContainer[^{}\n]*/gi) || [];
console.log('mapCanvasContainer mentions:', matches);
