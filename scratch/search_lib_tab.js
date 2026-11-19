const fs = require('fs');
const dl = fs.readFileSync('frontend/digital-library.html', 'utf8');
const lines = dl.split('\n');
lines.forEach((line, i) => {
    if (line.includes('lib-tab') || line.includes('tab-pane') || line.includes('data-tab')) {
        console.log(`L${i+1}: ${line.trim().slice(0, 80)}`);
    }
});
