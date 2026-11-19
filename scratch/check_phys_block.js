const fs = require('fs');
const content = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');

const s = content.indexOf('function initMap()');
const e = content.indexOf('function selectFeature(');
console.log(content.substring(s, e));
