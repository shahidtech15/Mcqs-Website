const fs = require('fs');

const html = fs.readFileSync('frontend/world-map.html', 'utf8');
const groupRegex = /<g[^>]+id="([^"]+)"/g;
let m;
const gIds = [];
while ((m = groupRegex.exec(html)) !== null) {
  gIds.push(m[1]);
}
console.log('Total group IDs:', gIds.length);
console.log('Sample group IDs:', gIds.filter(id => ['us', 'cn', 'ru', 'ca', 'fr', 'gb', 'jp', 'id'].includes(id)));
console.log('First 20 group IDs:', gIds.slice(0, 20));

// Also check all elements with class country or similar
const allClickable = [...new Set([...html.matchAll(/id="([a-z]{2}|_[a-z0-9_]+)"/g)].map(x => x[1]))];
console.log('Total 2-letter or underscore country codes:', allClickable.length);
