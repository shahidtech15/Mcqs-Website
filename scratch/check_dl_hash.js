const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
console.log('Does digital-library.html check window.location.hash?');
console.log(dl.includes('location.hash'));
