const fs = require('fs');
const content = fs.readFileSync('frontend/index.html', 'utf-8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
    if (l.includes('crpc-procedure-flowchart.html')) {
        console.log(`Line ${idx + 1}: ${l.trim()}`);
    }
});
