const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf-8');
const lines = content.split('\n');

console.log('--- Lines 95 to 115 ---');
console.log(lines.slice(95, 115).join('\n'));

console.log('--- Lines 170 to 185 ---');
console.log(lines.slice(170, 185).join('\n'));

console.log('--- Lines 265 to 275 ---');
console.log(lines.slice(265, 275).join('\n'));

console.log('--- Lines 800 to 820 ---');
console.log(lines.slice(800, 820).join('\n'));
