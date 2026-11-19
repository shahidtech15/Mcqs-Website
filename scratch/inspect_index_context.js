const fs = require('fs');

const indexHtml = fs.readFileSync('frontend/index.html', 'utf8');
const lines = indexHtml.split('\n');

function showContext(lineNum) {
  console.log(`--- Context around line ${lineNum} ---`);
  const start = Math.max(0, lineNum - 5);
  const end = Math.min(lines.length, lineNum + 5);
  for (let i = start; i < end; i++) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}

showContext(115);
showContext(198);
showContext(301);
showContext(847);
