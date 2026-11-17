const fs = require('fs');
const path = require('path');

console.log('--- STARTING VERIFICATION FOR IR ESSAYS HUB ---');

// 1. Verify data_ir_essays.js
const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_ir_essays.js');
if (!fs.existsSync(dataPath)) {
  console.error('ERROR: data_ir_essays.js does not exist!');
  process.exit(1);
}

const data = require(dataPath);
console.log(`[PASS] data_ir_essays.js loaded. Total essays: ${data.length}`);

if (data.length !== 12) {
  console.error(`ERROR: Expected 12 essays, found ${data.length}`);
  process.exit(1);
}

let totalWords = 0;
data.forEach((essay, idx) => {
  const expectedNum = idx + 1;
  if (essay.topicNumber !== expectedNum) {
    console.error(`ERROR: Topic number mismatch at index ${idx}: expected ${expectedNum}, got ${essay.topicNumber}`);
    process.exit(1);
  }
  if (!essay.title || essay.title.trim().length === 0) {
    console.error(`ERROR: Missing title for topic ${expectedNum}`);
    process.exit(1);
  }
  if (!essay.thesisStatement || essay.thesisStatement.trim().length === 0) {
    console.error(`ERROR: Missing thesis statement for topic ${expectedNum}`);
    process.exit(1);
  }
  if (!Array.isArray(essay.outline) || essay.outline.length < 5) {
    console.error(`ERROR: Insufficient outline points for topic ${expectedNum} (got ${essay.outline?.length})`);
    process.exit(1);
  }
  if (!essay.essayText || essay.essayText.trim().length < 500) {
    console.error(`ERROR: Insufficient essayText for topic ${expectedNum}`);
    process.exit(1);
  }
  totalWords += essay.wordCount;
  console.log(`  Topic ${essay.topicNumber}: "${essay.title.substring(0, 45)}..." | Words: ${essay.wordCount} | Outline items: ${essay.outline.length}`);
});

console.log(`[PASS] Total words across all 12 essays: ${totalWords}`);

// 2. Verify international-relations-essays.html
const htmlPath = path.join(__dirname, '..', 'frontend', 'international-relations-essays.html');
if (!fs.existsSync(htmlPath)) {
  console.error('ERROR: international-relations-essays.html does not exist!');
  process.exit(1);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
console.log(`[PASS] international-relations-essays.html size: ${(htmlContent.length / 1024).toFixed(1)} KB`);

for (let i = 1; i <= 12; i++) {
  if (!htmlContent.includes(`id="topic-${i}"`)) {
    console.error(`ERROR: Missing anchor id="topic-${i}" in HTML!`);
    process.exit(1);
  }
}
console.log('[PASS] All 12 topic anchors (#topic-1 to #topic-12) confirmed in HTML.');

// 3. Verify cross-links
const writtenPrepHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'written-prep.html'), 'utf8');
if (!writtenPrepHtml.includes('international-relations-essays.html')) {
  console.error('ERROR: written-prep.html does not link to international-relations-essays.html!');
  process.exit(1);
}
console.log('[PASS] written-prep.html has link to international-relations-essays.html');

const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'index.html'), 'utf8');
if (!indexHtml.includes('international-relations-essays.html')) {
  console.error('ERROR: index.html does not link to international-relations-essays.html!');
  process.exit(1);
}
console.log('[PASS] index.html has link to international-relations-essays.html');

const recPrepHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'recruitment-prep.html'), 'utf8');
if (!recPrepHtml.includes('international-relations-essays.html')) {
  console.error('ERROR: recruitment-prep.html does not link to international-relations-essays.html!');
  process.exit(1);
}
console.log('[PASS] recruitment-prep.html has link to international-relations-essays.html');

console.log('--- ALL IR ESSAYS VERIFICATION CHECKS PASSED PERFECTLY! ---');
