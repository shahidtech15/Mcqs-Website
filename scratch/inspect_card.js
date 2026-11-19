const fs = require('fs');
const content = fs.readFileSync('frontend/index.html', 'utf-8');
const lines = content.split('\n');
console.log(lines.slice(815, 835).join('\n'));
