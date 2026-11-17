const fs = require('fs');
const content = fs.readFileSync('frontend/digital-library.html', 'utf8');
const tabs = [...content.matchAll(/data-tab="([^"]+)"/g)].map(m => m[1]);
console.log('Digital Library tabs:', tabs);
const headings = [...content.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Headings:', headings);
