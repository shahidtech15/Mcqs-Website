const fs = require('fs');
const content = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');
const s = content.match(/<script[\s\S]*?<\/script>/gi);
const lastScript = s[s.length - 1];
const start = lastScript.indexOf('L.map');
console.log(lastScript.substring(start - 200, start + 600));
