// merge_master_math_mcqs.js - Master Combiner for 300 Solved Math MCQs
const fs = require('fs');

const d1 = JSON.parse(fs.readFileSync('scratch/doc1_mcqs.json', 'utf8'));
const d2 = JSON.parse(fs.readFileSync('scratch/doc2_mcqs.json', 'utf8'));
const d3 = JSON.parse(fs.readFileSync('scratch/doc3_mcqs.json', 'utf8'));
const d4 = JSON.parse(fs.readFileSync('scratch/doc4_mcqs.json', 'utf8'));
const extra = JSON.parse(fs.readFileSync('scratch/extra_mcqs.json', 'utf8'));

const all = [...d1, ...d2, ...d3, ...d4, ...extra];

// Re-index cleanly from 1 to all.length
all.forEach((q, idx) => {
  q.id = idx + 1;
});

console.log(`Total questions merged: ${all.length}`);

// Write JSON for backend
fs.writeFileSync('backend/data_math_mcqs.json', JSON.stringify(all, null, 2), 'utf8');
console.log('Saved backend/data_math_mcqs.json');

// Write JS file for frontend
const jsContent = `/**
 * CSS Prep Central - Master Mathematics & Quantitative Ability Solved MCQs Bank
 * Extracted from FPSC, PPSC, CSS, PMS, and NTS Past Examinations & Mathematical Handbooks.
 * Total Solved MCQs: ${all.length}
 */

const MATH_MCQS_DATA = ${JSON.stringify(all, null, 2)};

if (typeof window !== 'undefined') {
  window.MATH_MCQS_DATA = MATH_MCQS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MATH_MCQS_DATA;
}
`;

fs.writeFileSync('frontend/js/data_math_mcqs.js', jsContent, 'utf8');
console.log('Saved frontend/js/data_math_mcqs.js');
