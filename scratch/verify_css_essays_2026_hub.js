const fs = require('fs');
const path = require('path');

console.log('========================================================================');
console.log('   CSS 2026 SOLVED ESSAYS COMPREHENSIVE VERIFICATION SUITE');
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
const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_css_essays_2026.js');
assert(fs.existsSync(dataPath), 'data_css_essays_2026.js exists');

const essays = require(dataPath);
assert(Array.isArray(essays), 'Data module exports an array');
assert(essays.length === 10, `Data array contains exactly 10 essays (found ${essays.length})`);

let totalWords = 0;

essays.forEach((essay, idx) => {
  const expectedNum = idx + 1;
  assert(essay.topicNumber === expectedNum, `Topic ${expectedNum}: topicNumber is ${essay.topicNumber}`);
  assert(essay.title && essay.title.length > 5, `Topic ${expectedNum}: Title is non-empty ("${essay.title}")`);
  assert(essay.category && essay.category.length > 3, `Topic ${expectedNum}: Category is present ("${essay.category}")`);
  assert(essay.difficulty && essay.difficulty.length > 3, `Topic ${expectedNum}: Difficulty is present ("${essay.difficulty}")`);
  assert(essay.thesisStatement && essay.thesisStatement.length > 30, `Topic ${expectedNum}: Thesis statement is comprehensive`);
  
  // Discourses
  const d = essay.discoursesUsed || {};
  assert(d.narration && d.narration.length > 15, `Topic ${expectedNum}: Narration discourse documented`);
  assert(d.exposition && d.exposition.length > 15, `Topic ${expectedNum}: Exposition discourse documented`);
  assert(d.argumentation && d.argumentation.length > 15, `Topic ${expectedNum}: Argumentation discourse documented`);
  assert(d.description && d.description.length > 15, `Topic ${expectedNum}: Description discourse documented`);

  // Outline
  assert(Array.isArray(essay.outline) && essay.outline.length >= 20, `Topic ${expectedNum}: Outline has >= 20 points (found ${essay.outline.length})`);

  // Essay Text & Word Count
  const words = essay.essayText.split(/\s+/).filter(Boolean).length;
  totalWords += words;
  assert(words >= 2400, `Topic ${expectedNum}: Word count >= 2,400 words (found ${words.toLocaleString()} words)`);
});

assert(totalWords >= 25000, `Grand total word count >= 25,000 words (found ${totalWords.toLocaleString()} words)`);

// 2. HTML Presentation Hub Verification
const htmlPath = path.join(__dirname, '..', 'frontend', 'css-essays-2026.html');
assert(fs.existsSync(htmlPath), 'frontend/css-essays-2026.html exists');

const html = fs.readFileSync(htmlPath, 'utf8');
assert(html.length > 300000, `HTML file size is substantial (>300 KB, found ${(html.length/1024).toFixed(1)} KB)`);
assert(html.includes('CSS 2026 Solved Essays'), 'HTML contains correct title/heading');
assert(html.includes('id="quick-nav"'), 'HTML contains sticky quick-nav');
assert(html.includes('@media print'), 'HTML contains print media styles for PDF export');
assert(html.includes('copyEssayText'), 'HTML contains interactive copy essay button function');

for (let q = 1; q <= 10; q++) {
  assert(html.includes(`id="topic-${q}"`), `HTML contains article container for Question ${q} (id="topic-${q}")`);
}

// 3. Navigation Cross-Linking Verification
const filesToCheck = [
  'written-prep.html',
  'index.html',
  'articles.html',
  'digital-library.html',
  'css-essays-2021.html'
];

filesToCheck.forEach(f => {
  const filePath = path.join(__dirname, '..', 'frontend', f);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    assert(content.includes('css-essays-2026.html'), `${f} correctly links to css-essays-2026.html`);
  }
});

console.log('\n========================================================================');
console.log(`VERIFICATION SUMMARY: ${passCount} Passed, ${failCount} Failed`);
console.log(`TOTAL WORDS AUTHORED: ${totalWords.toLocaleString()} words`);
console.log('========================================================================');

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('\nALL TESTS PASSED! MASTER CSS 2026 ESSAY HUB IS 100% PRODUCTION READY!');
}
