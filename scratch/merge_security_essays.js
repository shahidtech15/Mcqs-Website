const fs = require('fs');
const path = require('path');

const b1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'security_batch1.json'), 'utf8'));
const b2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'security_batch2.json'), 'utf8'));
const b3 = JSON.parse(fs.readFileSync(path.join(__dirname, 'security_batch3.json'), 'utf8'));

const allEssays = [...b1, ...b2, ...b3].map((item, idx) => {
  const words = item.essayText.trim().split(/\s+/).length;
  return {
    topicNumber: item.topicNumber || (idx + 1),
    title: item.title,
    category: item.category || 'Global Security, Warfare & Conflict Studies',
    difficulty: item.difficulty || 'CSS / PMS / CCE / UPSC Advanced Standard',
    wordCount: words,
    thesisStatement: item.thesisStatement,
    outline: item.outline,
    essayText: item.essayText
  };
});

console.log(`Loaded ${allEssays.length} security essays.`);
allEssays.forEach(e => {
  console.log(`Topic ${e.topicNumber}: ${e.title} (${e.wordCount} words)`);
});

const fileHeader = `/**
 * Global Security, Warfare & Conflict Studies Master Essays
 * Comprehensive Model Solved Essays & Hierarchical Outlines for CSS, PMS, CCE & Competitive Examinations
 * Topics:
 *  1. The Russia–Ukraine War and the Future of European Security
 *  2. The Israel–Palestine Conflict: Challenges to International Law and Global Peace
 *  3. The Humanitarian Crisis in Gaza and the Failure of International Diplomacy
 *  4. The Middle East: A Region Trapped in Geopolitical Rivalries
 *  5. The Iran–Israel Rivalry and Its Implications for Regional Stability
 *  6. The Future of NATO in an Increasingly Uncertain World
 *  7. The Militarization of the Indo-Pacific Region
 *  8. The South China Sea Dispute: A Threat to International Peace and Trade
 *  9. Nuclear Deterrence in the 21st Century: Stability or Global Catastrophe?
 * 10. The Growing Threat of Cyber Warfare to National Security
 * 11. The Changing Nature of Warfare: From Conventional Battles to Drones and Artificial Intelligence
 * 12. The Decline of International Humanitarian Law in Modern Warfare
 */

const SECURITY_CONFLICT_ESSAYS_DATA = ${JSON.stringify(allEssays, null, 2)};

if (typeof window !== 'undefined') {
  window.SECURITY_CONFLICT_ESSAYS_DATA = SECURITY_CONFLICT_ESSAYS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SECURITY_CONFLICT_ESSAYS_DATA;
}
`;

const outputPath = path.join(__dirname, '..', 'frontend', 'js', 'data_security_conflict_essays.js');
fs.writeFileSync(outputPath, fileHeader, 'utf8');
console.log(`Successfully generated: ${outputPath}`);
