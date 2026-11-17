const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const lines = dl.split('\n');
console.log(lines.slice(1080, 1125).join('\n'));
