const fs = require('fs');
const content = fs.readFileSync('frontend/sindh-map.html', 'utf8');
const s = content.indexOf('function focusDivision');
console.log(content.substring(s, s + 400));
