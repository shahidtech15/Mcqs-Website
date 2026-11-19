const fs = require('fs');
const html = fs.readFileSync('frontend/constitution-explorer.html', 'utf-8');
const scriptPart = html.substring(html.lastIndexOf('<script'));
const matches = [...scriptPart.matchAll(/document\.getElementById\(['"]([^'"]+)['"]\)/g)].map(m => m[1]);
console.log('Script getElementById calls count:', matches.length);
console.log('Unique IDs queried by script:', [...new Set(matches)]);

const missingInHtml = [...new Set(matches)].filter(id => !html.includes(`id="${id}"`) && !html.includes(`id='${id}'`));
console.log('IDs queried by script but missing in HTML:', missingInHtml);
