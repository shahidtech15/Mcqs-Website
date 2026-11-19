const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');

const sStart = content.indexOf('function updateMapTiles()');
const sEnd = content.indexOf('function renderCategoryPills()');
console.log('Between updateMapTiles and renderCategoryPills:\n', content.substring(sStart, sEnd));
