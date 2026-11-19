const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const s3 = content.match(/<script[\s\S]*?<\/script>/gi)[3];
const start = s3.indexOf('L.map');
console.log(s3.substring(start - 200, start + 800));
