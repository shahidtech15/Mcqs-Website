const fs = require('fs');
const content = fs.readFileSync('frontend/sindh-map.html', 'utf8');

const s = content.indexOf('function updateMapTiles()');
const e = content.indexOf('function renderDivisionPills()');
console.log(content.substring(s, e));
