const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const s = content.indexOf('zoomInBtn');
console.log(content.substring(s - 50, s + 400));
