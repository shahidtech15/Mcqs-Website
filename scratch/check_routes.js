const fs = require('fs');
const content = fs.readFileSync('backend/routes/api.js', 'utf8');
const routes = [...content.matchAll(/router\.(get|post|put|delete)\(['"]([^'"]+)['"]/g)].map(m => `${m[1].toUpperCase()} ${m[2]}`);
console.log('Total routes:', routes.length);
console.log(routes.join('\n'));
