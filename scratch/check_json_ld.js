const fs = require('fs');
const indexHtml = fs.readFileSync('frontend/index.html', 'utf8');
const match = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
if (match) console.log(match[1]);
