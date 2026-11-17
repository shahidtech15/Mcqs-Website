const fs = require('fs');
const html = fs.readFileSync('frontend/exam-guide.html', 'utf8');

console.log('HTML size:', html.length);
console.log('Total articles:', (html.match(/<article/g) || []).length);
console.log('Contains guide-fia:', html.includes('id="guide-fia"'));
console.log('Contains guide-nab:', html.includes('id="guide-nab"'));
console.log('Contains guide-css:', html.includes('id="guide-css"'));
console.log('Contains guide-pms:', html.includes('id="guide-pms"'));
console.log('Contains guide-customs:', html.includes('id="guide-customs"'));
console.log('Contains guide-audit:', html.includes('id="guide-audit"'));
console.log('Contains guide-one-paper:', html.includes('id="guide-one-paper"'));
console.log('Contains guide-comparison:', html.includes('id="guide-comparison"'));
