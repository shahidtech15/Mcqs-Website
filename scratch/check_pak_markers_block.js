const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');

const s = content.indexOf('function renderMarkers()');
const e = content.indexOf('function displayItemDossier(item)');
console.log(content.substring(s, e));
