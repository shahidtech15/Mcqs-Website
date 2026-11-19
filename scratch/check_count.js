const fs = require('fs');
const html = fs.readFileSync('frontend/essay-russia-ukraine-war.html', 'utf8');
const idx1 = html.indexOf('id="essayView"');
const idx2 = html.indexOf('id="outlineView"');
const text = html.substring(idx1, idx2).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
console.log('Essay pure word count:', text.split(' ').length);

const outText = html.substring(idx2).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
console.log('Outline pure word count:', outText.split(' ').length);
