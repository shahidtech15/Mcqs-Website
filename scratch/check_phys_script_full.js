const fs = require('fs');
const content = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');

const s = content.indexOf('<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"></script>');
const e = content.indexOf('function selectFeature(');
console.log(content.substring(s, e));
