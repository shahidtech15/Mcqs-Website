const fs = require('fs');
const html = fs.readFileSync('frontend/essay-pakistan-education-crisis.html', 'utf8');

const idx1 = html.indexOf('id="essayView"');
const idx2 = html.indexOf('id="outlineView"');

const essayStr = html.substring(idx1, idx2).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const words = essayStr.split(' ').length;
console.log('Pakistan Education Essay Pure Word Count:', words);

const outlineStr = html.substring(idx2).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
console.log('Outline Pure Word Count:', outlineStr.split(' ').length);
