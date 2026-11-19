const fs = require('fs');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');
const svgMatch = wm.match(/<svg[^>]*>/i);
console.log('SVG tag match:', svgMatch ? svgMatch[0] : 'NO SVG TAG FOUND');
