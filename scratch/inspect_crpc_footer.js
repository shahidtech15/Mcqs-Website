const fs = require('fs');
const content = fs.readFileSync('frontend/crpc-procedure-flowchart.html', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(1208, 1225).join('\n'));
