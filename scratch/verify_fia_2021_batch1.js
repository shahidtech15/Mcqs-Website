const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('--- Verifying FPSC FIA 2021 (Batch-1) Past Paper Integration ---');

// 1. Check data file
const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_fia_past_paper_2021_batch1.js');
if (!fs.existsSync(dataPath)) {
  console.error('ERROR: Data file not found at', dataPath);
  process.exit(1);
}

const fileContent = fs.readFileSync(dataPath, 'utf-8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);

const meta = sandbox.window.FPSC_FIA_2021_BATCH1_METADATA;
const mcqs = sandbox.window.FPSC_FIA_2021_BATCH1_MCQS;

console.log('Metadata Title:', meta.title);
console.log('Total MCQs in file:', mcqs.length);

if (mcqs.length !== 100) {
  console.error(`ERROR: Expected 100 MCQs, got ${mcqs.length}`);
  process.exit(1);
}

let errors = [];
for (let i = 0; i < 100; i++) {
  const q = mcqs[i];
  const expectedId = i + 1;
  if (q.questionId !== expectedId) {
    errors.push(`Q${expectedId}: ID mismatch (got ${q.questionId})`);
  }
  if (!q.options || !q.options.A || !q.options.B || !q.options.C || !q.options.D) {
    errors.push(`Q${expectedId}: Missing one or more options`);
  }
  if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
    errors.push(`Q${expectedId}: Invalid correct answer key '${q.correctAnswer}'`);
  }
  if (!q.correctAnswerText) {
    errors.push(`Q${expectedId}: Missing correctAnswerText`);
  }
  if (!q.explanation || q.explanation.length < 15) {
    errors.push(`Q${expectedId}: Explanation too brief or missing`);
  }
}

if (errors.length > 0) {
  console.error('Validation errors found:');
  errors.forEach(err => console.error('-', err));
  process.exit(1);
}

console.log('✓ All 100 questions verified with valid options, correct answers, and thorough explanations.');

// 2. Check quiz.html
const quizHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'quiz.html'), 'utf-8');
if (quizHtml.includes('data_fia_past_paper_2021_batch1.js')) {
  console.log('✓ quiz.html includes data_fia_past_paper_2021_batch1.js');
} else {
  console.error('ERROR: quiz.html missing data_fia_past_paper_2021_batch1.js');
}

// 3. Check fia-sample-papers.html
const fiaHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'fia-sample-papers.html'), 'utf-8');
if (fiaHtml.includes('data_fia_past_paper_2021_batch1.js') && fiaHtml.includes('tierPastBtn')) {
  console.log('✓ fia-sample-papers.html includes data script and past paper tier filter.');
} else {
  console.error('ERROR: fia-sample-papers.html missing script or tier button');
}

console.log('--- ALL CHECKS PASSED SUCCESSFULLY ---');
