const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const mapDivStart = content.indexOf('id="pakistanMapContainer"');
console.log(content.substring(mapDivStart - 500, mapDivStart));
