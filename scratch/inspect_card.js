const fs = require('fs');
const txt = fs.readFileSync('frontend/written-prep.html', 'utf8');
const target = 'href="global-security-conflict-essays.html"';
const first = txt.indexOf(target);
const second = txt.indexOf(target, first + 1);
const start = txt.lastIndexOf('<div style="background: linear-gradient', second);
console.log(txt.slice(start, second + 400));
