const fs = require('fs');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');

const regex = /#world-map[\s\S]*?(?=\.|$)/g;
console.log(wm.match(/#world-map[\s\S]*?#worldMapSvgWrapper/)?.[0] || 'not matched');
const start = wm.indexOf('#world-map {');
console.log(wm.substring(start, start + 1200));
