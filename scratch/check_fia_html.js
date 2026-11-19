const fs = require('fs');
const html = fs.readFileSync('frontend/fia-laws-explorer.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
    if (l.includes('tab-nav-btn') || l.includes('tab-pane') || l.includes('switchMainTab') || l.includes('id="view') || l.includes('btnTab')) {
        console.log(`${i+1}: ${l.trim()}`);
    }
});
