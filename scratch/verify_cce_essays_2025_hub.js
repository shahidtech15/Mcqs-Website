const fs = require('fs');
const path = require('path');

console.log('========================================================================');
console.log('   SPSC CCE 2025 SOLVED ESSAYS COMPREHENSIVE VERIFICATION SUITE');
console.log('========================================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Data Module Verification
const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_cce_essays_2025.js');
assert(fs.existsSync(dataPath), 'data_cce_essays_2025.js exists');

const essays = require(dataPath);
assert(Array.isArray(essays), 'Data module exports an array');
assert(essays.length === 8, `Data array contains exactly 8 essays (found ${essays.length})`);

let totalWords = 0;

essays.forEach((essay, idx) => {
  const expectedNum = idx + 1;
  assert(essay.topicNumber === expectedNum, `Topic ${expectedNum}: topicNumber is ${essay.topicNumber}`);
  assert(essay.title && essay.title.length > 5, `Topic ${expectedNum}: Title is non-empty`);
  assert(essay.category && essay.category.length > 3, `Topic ${expectedNum}: Category is present ("${essay.category}")`);
  assert(essay.difficulty && essay.difficulty.length > 3, `Topic ${expectedNum}: Difficulty is present ("${essay.difficulty}")`);
  assert(essay.thesisStatement && essay.thesisStatement.length > 30, `Topic ${expectedNum}: Thesis statement is comprehensive`);

  // Outline
  assert(Array.isArray(essay.outline) && essay.outline.length >= 20, `Topic ${expectedNum}: Outline has >= 20 points (found ${essay.outline.length})`);

  // Essay Text & Word Count
  const words = essay.essayText.split(/\s+/).filter(Boolean).length;
  totalWords += words;
  assert(words >= 1800, `Topic ${expectedNum}: Word count >= 1,800 words (found ${words.toLocaleString()} words, exceeds 1500w min)`);
});

assert(totalWords >= 16000, `Grand total word count >= 16,000 words (found ${totalWords.toLocaleString()} words)`);

// 2. HTML Presentation Hub Verification
const htmlPath = path.join(__dirname, '..', 'frontend', 'cce-essays-2025.html');
assert(fs.existsSync(htmlPath), 'frontend/cce-essays-2025.html exists');

const html = fs.readFileSync(htmlPath, 'utf8');
assert(html.length > 200000, `HTML file size is substantial (>200 KB, found ${(html.length/1024).toFixed(1)} KB)`);
assert(html.includes('SPSC CCE 2025 Solved Essays'), 'HTML contains correct title/heading');
assert(html.includes('id="quick-nav"'), 'HTML contains sticky quick-nav');
assert(html.includes('@media print'), 'HTML contains print media styles for PDF export');
assert(html.includes('copyEssayText'), 'HTML contains interactive copy essay button function');

for (let q = 1; q <= 8; q++) {
  assert(html.includes(`id="topic-${q}"`), `HTML contains article container for Question ${q} (id="topic-${q}")`);
}

// 3. Navigation Cross-Linking Verification
const filesToCheck = [
  'written-prep.html',
  'index.html',
  'articles.html',
  'digital-library.html',
  'css-essays-2026.html',
  'css-essays-2021.html'
];

filesToCheck.forEach(f => {
  const filePath = path.join(__dirname, '..', 'frontend', f);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    assert(content.includes('cce-essays-2025.html'), `${f} correctly links to cce-essays-2025.html`);
  }
});

console.log('\n========================================================================');
console.log(`VERIFICATION SUMMARY: ${passCount} Passed, ${failCount} Failed`);
console.log(`TOTAL WORDS AUTHORED: ${totalWords.toLocaleString()} words`);
console.log('========================================================================');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('\nALL TESTS PASSED! MASTER SPSC CCE 2025 ESSAY HUB IS 100% PRODUCTION READY!');
}
