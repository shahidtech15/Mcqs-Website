const data = require('../frontend/js/data_geopolitical_hotspots.js');

data.hotspots.forEach(h => {
    console.log(`${h.id.padEnd(28)} | ${h.name.padEnd(35)} | ${h.relatedEssayLink}`);
});
