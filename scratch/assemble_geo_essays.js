const fs = require('fs');
const path = require('path');

const p1 = require('./gen_geo_essays_p1.js');
const p2 = require('./gen_geo_essays_p2.js');
const p3 = require('./gen_geo_essays_p3.js');

const allEssays = [...p1, ...p2, ...p3];

console.log(`Total essays to assemble: ${allEssays.length}`);

// Verify all 12 are present and numbered 1..12
for (let i = 1; i <= 12; i++) {
  const essay = allEssays.find(e => e.topicNumber === i);
  if (!essay) {
    throw new Error(`Missing topic number ${i}`);
  }
  console.log(`Topic ${i}: "${essay.title}" (${essay.wordCount} words, outline lines: ${essay.outline.length})`);
}

const headerComment = `/**
 * Global Political Economy, Trade & Finance Master Essays
 * Comprehensive Model Solved Essays & Hierarchical Outlines for CSS, PMS, CCE & Competitive Examinations
 * Topics:
 *  1. Globalization in Retreat: Is Economic Nationalism Replacing Free Trade?
 *  2. The Weaponization of the US Dollar in International Politics
 *  3. The Future of the US Dollar as the World's Dominant Reserve Currency
 *  4. The Rise of Protectionism and Its Impact on the Global Economy
 *  5. The US–China Trade War and Its Consequences for Developing Countries
 *  6. The Global Debt Crisis: A Threat to Economic Development
 *  7. The Role of the IMF and World Bank in the Economic Development of Developing Countries
 *  8. The Future of Global Supply Chains in an Era of Geopolitical Rivalry
 *  9. Economic Sanctions as an Instrument of Foreign Policy: Effectiveness and Consequences
 * 10. The Digital Economy and the Future of Global Financial Systems
 * 11. Cryptocurrency and Central Bank Digital Currencies: The Future of Money?
 * 12. The Economic Consequences of Red Sea and Strait of Hormuz Disruptions
 */

const GEOECONOMICS_FINANCE_ESSAYS_DATA = `;

const footerCode = `;\n
if (typeof window !== 'undefined') {
  window.GEOECONOMICS_FINANCE_ESSAYS_DATA = GEOECONOMICS_FINANCE_ESSAYS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GEOECONOMICS_FINANCE_ESSAYS_DATA;
}
`;

const jsOutput = headerComment + JSON.stringify(allEssays, null, 2) + footerCode;
const jsFilePath = path.join(__dirname, '../frontend/js/data_geoeconomics_finance_essays.js');
fs.writeFileSync(jsFilePath, jsOutput, 'utf8');
console.log(`Saved JS data file: ${jsFilePath} (${(Buffer.byteLength(jsOutput) / 1024).toFixed(2)} KB)`);

const jsonFilePath = path.join(__dirname, '../backend/data_geoeconomics_finance_essays.json');
fs.writeFileSync(jsonFilePath, JSON.stringify(allEssays, null, 2), 'utf8');
console.log(`Saved JSON backend file: ${jsonFilePath} (${(Buffer.byteLength(JSON.stringify(allEssays)) / 1024).toFixed(2)} KB)`);
