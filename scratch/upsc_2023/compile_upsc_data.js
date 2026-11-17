const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname);
const t1_2 = JSON.parse(fs.readFileSync(path.join(dir, 'topics_1_2.json'), 'utf8'));
const t3_4 = JSON.parse(fs.readFileSync(path.join(dir, 'topics_3_4.json'), 'utf8'));
const t5_6 = JSON.parse(fs.readFileSync(path.join(dir, 'topics_5_6.json'), 'utf8'));
const t7_8 = JSON.parse(fs.readFileSync(path.join(dir, 'topics_7_8.json'), 'utf8'));

const allTopics = [...t1_2, ...t3_4, ...t5_6, ...t7_8];

console.log(`Total topics compiled: ${allTopics.length}`);
allTopics.forEach(t => {
  const words = t.essayText.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
  console.log(`Topic ${t.topicNumber} (${t.section}): "${t.title.substring(0, 40)}..." -> ${words} words`);
});

const outputJs = `/**
 * UPSC Civil Services (Main) Examination 2023 - Master Solved Essays Data File
 * Union Public Service Commission (UPSC CSE 2023)
 * Complete Solved Model Essays for All 8 Topics (1,100 - 1,250 words each)
 * Formats: Outline, Thesis Statement, Philosophical & Empirical Arguments, Policy Synthesis
 */

const UPSC_ESSAYS_2023_DATA = ${JSON.stringify(allTopics, null, 2)};

if (typeof window !== 'undefined') {
  window.UPSC_ESSAYS_2023_DATA = UPSC_ESSAYS_2023_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UPSC_ESSAYS_2023_DATA;
}
`;

const targetPath = path.join(__dirname, '..', '..', 'frontend', 'js', 'data_upsc_essays_2023.js');
fs.writeFileSync(targetPath, outputJs, 'utf8');
console.log(`Successfully generated ${targetPath}! Size: ${fs.statSync(targetPath).size} bytes`);
