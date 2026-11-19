const fs = require('fs');
const eg = fs.readFileSync('frontend/exam-guide.html', 'utf8');
const h2s = [...eg.matchAll(/<h[23][^>]*>(.*?)<\/h[23]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('Exam Guide headings:', h2s.slice(0, 20));
