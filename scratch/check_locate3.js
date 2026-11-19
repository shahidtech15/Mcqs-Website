const fs = require('fs');
const content = fs.readFileSync('frontend/locate-on-map.html', 'utf8');
const s3 = content.match(/<script[\s\S]*?<\/script>/gi)[3];
const start = s3.indexOf('function initMap');
console.log(s3.substring(start, start + 1200));
