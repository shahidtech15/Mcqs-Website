const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');

const s = content.indexOf('function renderMapMarkers(');
console.log(content.substring(s, s + 400));
