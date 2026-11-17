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

    if (!content.includes('href="locate-on-map.html"')) {
        // 1. In switcher-links: add after guess-the-country button
        const switcherRegex = /(<a\s+href="guess-the-country\.html"[^>]*class="switcher-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/i;
        if (switcherRegex.test(content)) {
            content = content.replace(switcherRegex, `$1\n            <a href="locate-on-map.html" class="switcher-btn" style="color: #38bdf8;">\n                <i class="fas fa-crosshairs"></i> Locate on Map\n            </a>`);
        }

        // 2. In nav-links or secondary nav: add after guess-the-country
        const navRegex = /(<a\s+href="guess-the-country\.html"[^>]*>[\s\S]*?<\/a>)/i;
        if (navRegex.test(content)) {
            content = content.replace(navRegex, `$1\n                <a href="locate-on-map.html" style="color: #0284c7; font-weight: 700;"><i class="fas fa-crosshairs"></i> Locate on Map</a>`);
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file} with locate-on-map.html links`);
    } else {
        console.log(`${file} already has locate-on-map.html`);
    }
});
