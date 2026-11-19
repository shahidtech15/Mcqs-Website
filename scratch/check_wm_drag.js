const fs = require('fs');
const content = fs.readFileSync('frontend/world-map.html', 'utf8');

const s = content.indexOf('// Pan / Drag Handlers');
const e = content.indexOf('// Organization Highlight Logic');
console.log(content.substring(s, e));
