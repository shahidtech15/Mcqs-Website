const fs = require('fs');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');

const gMatches = wm.match(/<g[^>]*id="[^"]+"[^>]*>/g) || [];
console.log('g tags with id:', gMatches.length);
if (gMatches.length > 0) console.log('Sample g tags:', gMatches.slice(0, 5));

const pathWithoutId = wm.match(/<path(?![^>]*id=)[^>]*>/g) || [];
console.log('paths without id:', pathWithoutId.length);
