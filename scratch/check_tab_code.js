const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const idx = dl.indexOf("querySelectorAll('.lib-tab')");
console.log(dl.slice(idx - 100, idx + 600));
