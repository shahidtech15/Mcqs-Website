const fs = require('fs');

let content = fs.readFileSync('./scratch/essays_2026_part1.js', 'utf8');
const lines = content.split('\n');

// Let's identify the boundaries of each essayText.
// Topic 1 starts at 47. Ends before Topic 2 (around line 265).
// Let's check lines 260-295 and lines 500-540.
console.log('--- Lines 260-295 ---');
for (let i = 260; i < 295; i++) {
  if (lines[i]) console.log(`${i}: ${lines[i]}`);
}

console.log('--- Lines 510-535 ---');
for (let i = 510; i < 535; i++) {
  if (lines[i]) console.log(`${i}: ${lines[i]}`);
}

console.log('--- Lines 700-715 ---');
for (let i = 700; i < lines.length; i++) {
  if (lines[i]) console.log(`${i}: ${lines[i]}`);
}
