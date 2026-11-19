const fs = require('fs');
const content = fs.readFileSync('frontend/index.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
    if (l.includes('physical-geography-map') || l.includes('world-map')) {
        console.log((i+1) + ': ' + l.trim());
    }
});
