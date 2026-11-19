const fs = require('fs');
const content = fs.readFileSync('frontend/js/data_geopolitical_hotspots.js', 'utf8');
console.log(content.substring(content.length - 200));
