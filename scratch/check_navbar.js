const fs = require('fs');
const index = fs.readFileSync('frontend/index.html', 'utf8');
const navMatch = index.match(/<nav[\s\S]*?<\/nav>/);
if (navMatch) console.log(navMatch[0]);
