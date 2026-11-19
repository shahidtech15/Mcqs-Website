const fs = require('fs');
const content = fs.readFileSync('frontend/sindh-map.html', 'utf8');

const s = content.indexOf('data_sindh_map.js');
console.log(content.substring(s - 150, s + 100));
