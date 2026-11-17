const fs = require('fs');
const fia = fs.readFileSync('frontend/fia-sample-papers.html', 'utf8');
console.log('fia-sample-papers.html length:', fia.length);
const h2s = [...fia.matchAll(/<h[123][^>]*>(.*?)<\/h[123]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('FIA headings:', h2s);
