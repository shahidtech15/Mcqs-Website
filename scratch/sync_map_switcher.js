const fs = require('fs');
const path = require('path');

const mapFiles = [
    'physical-geography-map.html',
    'geopolitical-hotspots-map.html',
    'international-trade-routes-map.html',
    'pakistan-map.html',
    'sindh-map.html'
];

mapFiles.forEach(file => {
    const filePath = path.join(__dirname, '../frontend', file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. In switcher-links: add after Political World Map button if not already present
    if (!content.includes('href="guess-the-country.html"')) {
        // Regex match switcher button for world-map.html
        const switcherRegex = /(<a\s+href="world-map\.html"[^>]*class="switcher-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/i;
        if (switcherRegex.test(content)) {
            content = content.replace(switcherRegex, `$1\n            <a href="guess-the-country.html" class="switcher-btn" style="color: #8b5cf6;">\n                <i class="fas fa-gamepad"></i> Guess Country\n            </a>`);
        }

        // 2. In nav-links: add after Political Map link
        const navRegex = /(<a\s+href="world-map\.html"[^>]*><i\s+class="fas fa-globe"><\/i>\s*Political Map<\/a>)/i;
        if (navRegex.test(content)) {
            content = content.replace(navRegex, `$1\n                <a href="guess-the-country.html" style="color: #8b5cf6; font-weight: 700;"><i class="fas fa-gamepad"></i> Guess Country</a>`);
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file} with guess-the-country.html link`);
    } else {
        console.log(`${file} already has guess-the-country.html`);
    }
});
