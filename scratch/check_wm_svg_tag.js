const fs = require('fs');
const content = fs.readFileSync('frontend/world-map.html', 'utf8');

const s = content.indexOf('<svg version="1.1"');
console.log(content.substring(s, s + 350));
