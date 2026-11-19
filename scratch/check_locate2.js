const fs = require('fs');
const content = fs.readFileSync('frontend/locate-on-map.html', 'utf8');
const scriptMatches = content.match(/<script[\s\S]*?<\/script>/gi) || [];
const s3 = scriptMatches[3];
const start = s3.indexOf('const TILE_URLS =');
console.log(s3.substring(start, start + 1500));
