const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');

const s = content.lastIndexOf('// Initialize Map');
const e = content.lastIndexOf('// Tab Switching Logic');
console.log(content.substring(s, e));
