const fs = require('fs');
const content = fs.readFileSync('frontend/sindh-map.html', 'utf8');
const matches = content.match(/function\s+focus[A-Za-z0-9_]*\s*\([^)]*\)\s*\{[\s\S]*?\}/g) || [];
console.log('Focus functions in sindh-map:', matches);
