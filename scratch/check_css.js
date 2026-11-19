const fs = require('fs');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');

const styleBlock = wm.match(/<style[^>]*>([\s\S]*?)<\/style>/i)[1];
const lines = styleBlock.split('\n');
const relevant = lines.filter(l => l.includes('svg') || l.includes('path') || l.includes('world') || l.includes('active-country') || l.includes('highlight'));
console.log('Relevant CSS lines:\n', relevant.join('\n'));
