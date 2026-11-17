const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const idx = dl.indexOf('// Tab Switching Logic');
console.log(dl.slice(idx, idx + 800));
