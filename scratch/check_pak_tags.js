const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');

const linkIdx = content.indexOf('leaflet.css');
console.log('CSS link snippet:\n', content.substring(linkIdx - 40, linkIdx + 60));

const scriptIdx = content.indexOf('leaflet.js');
console.log('Script snippet:\n', content.substring(scriptIdx - 40, scriptIdx + 60));
