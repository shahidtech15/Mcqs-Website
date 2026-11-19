const fs = require('fs');
const index = fs.readFileSync('frontend/index.html', 'utf8');
const lines = index.split('\n');
lines.forEach((line, i) => {
    if (line.includes('digital-library')) {
        console.log(`L${i+1}: ${line.trim()}`);
    }
});
