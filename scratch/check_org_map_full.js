const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');

const s = content.indexOf('// Initialize Map');
const e = content.indexOf('// Tab Switching Logic');
console.log(content.substring(s, e));
