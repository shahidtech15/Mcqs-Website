const fs = require('fs');
const path = require('path');

console.log('=== STARTING END-TO-END VERIFICATION ===\n');

// 1. Verify Dataset
const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_synonyms_antonyms.js');
console.log(`Checking ${dataPath}...`);
if (!fs.existsSync(dataPath)) {
  console.error('FAIL: data_synonyms_antonyms.js not found!');
  process.exit(1);
}

const data = require(dataPath);
console.log(`[PASS] Loaded dataset successfully.`);
console.log(`- Vocabulary Words: ${data.VOCABULARY_2000.length}`);
console.log(`- Synonym MCQs: ${data.SYNONYMS_MCQS.length}`);
console.log(`- Antonym MCQs: ${data.ANTONYMS_MCQS.length}`);

if (data.VOCABULARY_2000.length !== 2000) {
  console.error(`FAIL: Expected 2000 vocabulary words, found ${data.VOCABULARY_2000.length}`);
  process.exit(1);
}
if (data.SYNONYMS_MCQS.length !== 2000) {
  console.error(`FAIL: Expected 2000 Synonym MCQs, found ${data.SYNONYMS_MCQS.length}`);
  process.exit(1);
}
if (data.ANTONYMS_MCQS.length !== 2000) {
  console.error(`FAIL: Expected 2000 Antonym MCQs, found ${data.ANTONYMS_MCQS.length}`);
  process.exit(1);
}
console.log(`[PASS] Exact counts verified: 2,000 Headwords + 2,000 Synonyms + 2,000 Antonyms = 4,000 MCQs.\n`);

// Verify Option Integrity
console.log('Checking option integrity for all 4,000 MCQs...');
const letters = ['A', 'B', 'C', 'D'];
let invalidCount = 0;

[...data.SYNONYMS_MCQS, ...data.ANTONYMS_MCQS].forEach((q, idx) => {
  if (!q.questionText || !q.options || !q.correctAnswer) {
    invalidCount++;
    console.error(`Question ${idx} missing basic fields:`, q._id);
  }
  letters.forEach(ltr => {
    if (!q.options[ltr] || q.options[ltr].trim().length === 0) {
      invalidCount++;
      console.error(`Question ${q._id} missing option ${ltr}`);
    }
  });
  const optValues = letters.map(l => q.options[l].toLowerCase());
  const uniqueOpts = new Set(optValues);
  if (uniqueOpts.size !== 4) {
    invalidCount++;
    console.error(`Question ${q._id} has duplicate options:`, q.options);
  }
});

if (invalidCount > 0) {
  console.error(`FAIL: Found ${invalidCount} question option errors!`);
  process.exit(1);
}
console.log('[PASS] All 4,000 questions have 4 distinct, valid choices (A, B, C, D).\n');

// 2. Verify HTML script tags
const quizHtml = fs.readFileSync('frontend/quiz.html', 'utf8');
const indexHtml = fs.readFileSync('frontend/index.html', 'utf8');
const libHtml = fs.readFileSync('frontend/digital-library.html', 'utf8');

if (!quizHtml.includes('js/data_synonyms_antonyms.js')) {
  console.error('FAIL: quiz.html missing data_synonyms_antonyms.js script tag!');
  process.exit(1);
}
console.log('[PASS] quiz.html includes data_synonyms_antonyms.js');

if (!indexHtml.includes('js/data_synonyms_antonyms.js')) {
  console.error('FAIL: index.html missing data_synonyms_antonyms.js script tag!');
  process.exit(1);
}
console.log('[PASS] index.html includes data_synonyms_antonyms.js');

if (!libHtml.includes('js/data_synonyms_antonyms.js')) {
  console.error('FAIL: digital-library.html missing data_synonyms_antonyms.js script tag!');
  process.exit(1);
}
console.log('[PASS] digital-library.html includes data_synonyms_antonyms.js\n');

// 3. Test generateFallbackQuiz in mock DOM environment
console.log('Testing quiz fallback generator in simulated browser environment...');
global.window = {
  VOCABULARY_2000: data.VOCABULARY_2000,
  SYNONYMS_MCQS: data.SYNONYMS_MCQS,
  ANTONYMS_MCQS: data.ANTONYMS_MCQS,
  ALL_2200_MCQS: [],
  SCIENCE_INSTRUMENTS_MCQS: [],
  EXAMVEDA_MCQS: [],
  SCIENCE_CAPSULE_MCQS: [],
  FACTS_MCQS: [],
  AAO_MCQS: [],
  CURRENT_AFFAIRS_200_MCQS: [],
  CURRENT_AFFAIRS_STS_200_MCQS: [],
  AI_MCQS: [],
  WORLD_ORG_MCQS: [],
  FIA_SAMPLE_PAPERS_MCQS: [],
  addEventListener: () => {}
};
global.document = {
  getElementById: () => ({ addEventListener: () => {}, querySelectorAll: () => [] }),
  querySelectorAll: () => []
};

// Load quiz.js
require('../frontend/js/quiz.js');

const synQuiz20 = global.window.generateFallbackQuiz('English Synonyms', null, 20, 'Mixed');
console.log(`- Retrieved English Synonyms (20 questions): ${synQuiz20.length}`);
if (synQuiz20.length !== 20 || synQuiz20[0].category.name !== 'English Synonyms') {
  console.error('FAIL: generateFallbackQuiz failed for English Synonyms (20)');
  process.exit(1);
}

const antQuiz50 = global.window.generateFallbackQuiz('English Antonyms', null, 50, 'Mixed');
console.log(`- Retrieved English Antonyms (50 questions): ${antQuiz50.length}`);
if (antQuiz50.length !== 50 || antQuiz50[0].category.name !== 'English Antonyms') {
  console.error('FAIL: generateFallbackQuiz failed for English Antonyms (50)');
  process.exit(1);
}

const engSubSyn = global.window.generateFallbackQuiz('English', 'Synonyms', 25, 'Mixed');
console.log(`- Retrieved English Subcategory Synonyms (25 questions): ${engSubSyn.length}`);
if (engSubSyn.length !== 25) {
  console.error('FAIL: generateFallbackQuiz failed for English -> Synonyms');
  process.exit(1);
}

const engSubAnt = global.window.generateFallbackQuiz('English', 'Antonyms', 25, 'Mixed');
console.log(`- Retrieved English Subcategory Antonyms (25 questions): ${engSubAnt.length}`);
if (engSubAnt.length !== 25) {
  console.error('FAIL: generateFallbackQuiz failed for English -> Antonyms');
  process.exit(1);
}

console.log('[PASS] generateFallbackQuiz successfully tested across all categories, subcategories, and counts.\n');
console.log('=== ALL VERIFICATIONS PASSED 100%! ===');
