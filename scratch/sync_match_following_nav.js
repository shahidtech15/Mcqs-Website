const fs = require('fs');
const path = require('path');

const mapFiles = [
    'world-map.html',
    'physical-geography-map.html',
    'geopolitical-hotspots-map.html',
    'international-trade-routes-map.html',
    'pakistan-map.html',
    'sindh-map.html'
];

mapFiles.forEach(file => {
    const filePath = path.join(__dirname, '../frontend', file);
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('href="match-the-following.html"')) {
        // 1. In switcher-links: add after locate-on-map button
        const switcherRegex = /(<a\s+href="locate-on-map\.html"[^>]*class="switcher-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/i;
        if (switcherRegex.test(content)) {
            content = content.replace(switcherRegex, `$1\n            <a href="match-the-following.html" class="switcher-btn" style="color: #a78bfa;">\n                <i class="fas fa-puzzle-piece"></i> Match Items\n            </a>`);
        }

        // 2. In nav-links or secondary nav: add after locate-on-map
        const navRegex = /(<a\s+href="locate-on-map\.html"[^>]*>[\s\S]*?<\/a>)/i;
        if (navRegex.test(content)) {
            content = content.replace(navRegex, `$1\n                <a href="match-the-following.html" style="color: #8b5cf6; font-weight: 700;"><i class="fas fa-puzzle-piece"></i> Match Items</a>`);
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file} with match-the-following.html links`);
    } else {
        console.log(`${file} already has match-the-following.html`);
    }
});
