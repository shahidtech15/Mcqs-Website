const fs = require('fs');
const content = fs.readFileSync('frontend/locate-on-map.html', 'utf8');

const s = content.lastIndexOf('DOMContentLoaded');
console.log(content.substring(s - 100, s + 400));
