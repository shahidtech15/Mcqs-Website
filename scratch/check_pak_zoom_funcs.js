const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const s = content.indexOf('function zoomInMap');
console.log(content.substring(s, s + 300));
