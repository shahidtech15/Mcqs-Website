const fs = require('fs');
const path = require('path');

const b1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'ir_batch1.json'), 'utf8'));
const b2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'ir_batch2.json'), 'utf8'));
const b3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'ir_batch3.json'), 'utf8'));

const allEssays = [...b1, ...b2, ...b3].map((item, idx) => {
  const words = item.essayText.trim().split(/\s+/).length;
  return {
    topicNumber: item.topicNumber || (idx + 1),
    title: item.title,
    category: item.category || 'International Relations & Global Geopolitics',
    difficulty: item.difficulty || 'CSS / PMS / CCE / UPSC Advanced Standard',
    wordCount: words,
    thesisStatement: item.thesisStatement,
    outline: item.outline,
    essayText: item.essayText
  };
});

console.log(`Loaded ${allEssays.length} essays.`);
allEssays.forEach(e => {
  console.log(`Topic ${e.topicNumber}: ${e.title} (${e.wordCount} words)`);
});

const fileHeader = `/**
 * International Relations & Global Geopolitics Master Essays
 * Comprehensive Model Solved Essays & Detailed Outlines for CSS, PMS, CCE & Competitive Examinations
 * Topics:
 *  1. The Emergence of a Multipolar World: End of American Hegemony?
 *  2. The Rise of China and Its Challenge to the Existing World Order.
 *  3. The United States–China Rivalry and Its Implications for Global Stability.
 *  4. The New Cold War: Is the World Entering Another Era of Great Power Competition?
 *  5. The Declining Influence of Traditional Western Powers.
 *  6. The Rise of the Global South in International Politics.
 *  7. BRICS and the Transformation of the Global Economic Order.
 *  8. The Role of Middle Powers in Shaping Global Politics.
 *  9. Geopolitics of the Indo-Pacific: Strategic Competition between China and the United States.
 * 10. The Weaponization of Trade, Technology and Economic Interdependence.
 * 11. The Future of the Liberal International Order.
 * 12. Is the United Nations Still Relevant in a Changing World Order?
 */

const IR_ESSAYS_DATA = ${JSON.stringify(allEssays, null, 2)};

if (typeof window !== 'undefined') {
  window.IR_ESSAYS_DATA = IR_ESSAYS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IR_ESSAYS_DATA;
}
`;

const outputPath = path.join(__dirname, '..', 'frontend', 'js', 'data_ir_essays.js');
fs.writeFileSync(outputPath, fileHeader, 'utf8');
console.log(`Successfully generated: ${outputPath}`);
