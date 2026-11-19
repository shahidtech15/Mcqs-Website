const fs = require('fs');
const content = fs.readFileSync('frontend/sindh-map.html', 'utf8');
const funcs = content.match(/function\s+([A-Za-z0-9_]+)\s*\(/g) || [];
console.log('Functions in sindh-map:', funcs);
