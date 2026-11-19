const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf-8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('technology-explorer') || line.includes('climate-change') || line.includes('periodic-table') || line.includes('Constitution')) {
    console.log((i+1) + ': ' + line.trim().substring(0, 100));
  }
});
