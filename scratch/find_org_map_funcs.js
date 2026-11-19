const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');

const matches = content.match(/function\s+[A-Za-z0-9_]*Map[A-Za-z0-9_]*\s*\(/g) || [];
console.log('Map functions in international-organizations-explorer:', matches);
