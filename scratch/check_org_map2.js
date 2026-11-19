const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');
const s = content.indexOf("L.map('orgWorldMapCanvas'");
console.log(content.substring(s - 100, s + 1000));
