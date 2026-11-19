const fs = require('fs');
const txt = fs.readFileSync('frontend/global-security-conflict-essays.html', 'utf8');
const idx = txt.lastIndexOf('<footer');
console.log(txt.slice(idx, idx + 1000));
