const fs = require('fs');
const content = fs.readFileSync('frontend/sindh-map.html', 'utf8');

const s = content.indexOf('function renderMarkers()');
console.log(content.substring(s, s + 300));
