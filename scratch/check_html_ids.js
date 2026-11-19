const fs = require('fs');
const html = fs.readFileSync('frontend/constitution-explorer.html', 'utf-8');
const idMatches = [...html.matchAll(/id=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Total IDs found:', idMatches.length);
console.log('Sample IDs:', [...new Set(idMatches)].slice(0, 30));
