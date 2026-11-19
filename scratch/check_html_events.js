const fs = require('fs');
const content = fs.readFileSync('frontend/admin.html', 'utf8');
const onClicks = [...content.matchAll(/onclick=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Total onclicks:', onClicks.length);
console.log([...new Set(onClicks)].join('\n'));
