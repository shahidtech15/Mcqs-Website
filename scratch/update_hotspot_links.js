const fs = require('fs');
const filePath = 'frontend/js/data_geopolitical_hotspots.js';
const data = require('../frontend/js/data_geopolitical_hotspots.js');

const linkMapping = {
    'russia-ukraine-war': 'global-security-conflict-essays.html#topic-1',
    'israel-palestine-gaza': 'global-security-conflict-essays.html#topic-2',
    'sudan-civil-war': 'global-security-conflict-essays.html#topic-12',
    'yemen-red-sea-crisis': 'geoeconomics-finance-essays.html#topic-12',
    'syrian-conflict': 'global-security-conflict-essays.html#topic-4',
    'jammu-kashmir': 'cce-essays-2025.html',
    'taiwan-strait': 'international-relations-essays.html#topic-3',
    'south-china-sea-dispute': 'global-security-conflict-essays.html#topic-8',
    'western-sahara': 'international-relations-essays.html#topic-12',
    'nato-alliance': 'global-security-conflict-essays.html#topic-6',
    'aukus-pact': 'global-security-conflict-essays.html#topic-7',
    'quad-dialogue': 'international-relations-essays.html#topic-9',
    'sco-pact': 'international-relations-essays.html#topic-7',
    'strait-of-hormuz-chokepoint': 'geoeconomics-finance-essays.html#topic-12',
    'bab-el-mandeb-chokepoint': 'geoeconomics-finance-essays.html#topic-12',
    'malacca-strait-chokepoint': 'international-relations-essays.html#topic-9',
    'suwalki-gap': 'global-security-conflict-essays.html#topic-6',
    'iran-israel-shadow-war': 'global-security-conflict-essays.html#topic-5',
    'korean-peninsula-dmz': 'global-security-conflict-essays.html#topic-9',
    'india-china-lac': 'international-relations-essays.html#topic-9',
    'arctic-sovereignty': 'geoeconomics-finance-essays.html#topic-8',
    'sahel-coup-belt': 'international-relations-essays.html#topic-5',
    'myanmar-civil-war': 'global-security-conflict-essays.html#topic-12',
    'drc-kivu-conflict': 'geoeconomics-finance-essays.html#topic-8',
    'golan-heights': 'global-security-conflict-essays.html#topic-2',
    'essequibo-dispute': 'international-relations-essays.html#topic-11',
    'senkaku-diaoyu': 'international-relations-essays.html#topic-3',
    'falkland-islands': 'international-relations-essays.html#topic-12',
    'brics-plus': 'international-relations-essays.html#topic-7',
    'five-eyes-alliance': 'global-security-conflict-essays.html#topic-10',
    'suez-canal-waterway': 'geoeconomics-finance-essays.html#topic-12',
    'panama-canal-waterway': 'geoeconomics-finance-essays.html#topic-8',
    'bosphorus-dardanelles-chokepoint': 'global-security-conflict-essays.html#topic-1',
    'us-china-tech-war': 'international-relations-essays.html#topic-10'
};

data.hotspots.forEach(h => {
    if (linkMapping[h.id]) {
        h.relatedEssayLink = linkMapping[h.id];
    }
});

const content = `/**
 * CSS PREP CENTRAL - GLOBAL GEOPOLITICAL HOTSPOTS DATASET
 * Authoritative, In-Depth Strategic Intelligence Database for CSS, PMS, FPSC, UPSC & International Relations Aspirants.
 * Categories: Active Conflicts, Disputed Territories, Military Alliances, Strategic Waterways, Ongoing Tensions.
 */

const GEOPOLITICAL_HOTSPOTS_DATA = ${JSON.stringify(data, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GEOPOLITICAL_HOTSPOTS_DATA;
}
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated hotspot essay links!');
