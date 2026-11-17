const fs = require('fs');
const content = fs.readFileSync('frontend/admin.html', 'utf8');
const ids = [...content.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Total IDs:', ids.length);
console.log(ids.join('\n'));
