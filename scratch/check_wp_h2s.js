const fs = require('fs');
const wp = fs.readFileSync('frontend/written-prep.html', 'utf8');
const h2s = [...wp.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('written-prep headings:', h2s);
