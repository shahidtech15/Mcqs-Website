const fs = require('fs');
const content = fs.readFileSync('frontend/js/data_geopolitical_hotspots.js', 'utf8');

// evaluate the object safely
const match = content.match(/const GEOPOLITICAL_HOTSPOTS_DATA = ([\s\S]*?);/);
if (match) {
    const data = JSON.parse(match[1]);
    data.hotspots.forEach(h => {
        console.log(`${h.id.padEnd(28)} -> ${h.relatedEssayLink}`);
    });
}
