const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const tabMatches = [...dl.matchAll(/data-tab="([^"]+)"/g)].map(m => m[1]);
console.log('Tabs in header:', tabMatches);
const paneMatches = [...dl.matchAll(/<div[^>]*id="(tab-[^"]+)"/g)].map(m => m[1]);
console.log('Panes in DOM:', paneMatches);
