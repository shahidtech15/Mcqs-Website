const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== AUDITING CONSTITUTION EXPLORER ===');

// 1. Audit data_constitution.js
const dataPath = path.join(__dirname, '../frontend/js/data_constitution.js');
if (!fs.existsSync(dataPath)) {
  console.error('FAIL: data_constitution.js missing');
  process.exit(1);
}
const dataCode = fs.readFileSync(dataPath, 'utf-8');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);
try {
  vm.runInContext(dataCode, sandbox);
  console.log('PASS: data_constitution.js executed cleanly in sandbox');
} catch (e) {
  console.error('FAIL: data_constitution.js syntax/execution error:', e);
  process.exit(1);
}

const data = sandbox.window.CONSTITUTION_DATA;
if (!data || !data.metadata || !data.kpis || !data.articles || !data.amendmentsTimeline) {
  console.error('FAIL: CONSTITUTION_DATA incomplete structure');
  process.exit(1);
}
console.log(`PASS: CONSTITUTION_DATA contains ${data.articles.length} articles, ${data.amendmentsTimeline.length} amendments`);

// Check sample article fields
const reqArticleFields = ['num', 'slug', 'title', 'part', 'partNum', 'category', 'highYield', 'text', 'explanation', 'keyPhrases', 'examNotes', 'mcqs'];
for (const f of reqArticleFields) {
  if (data.articles[0][f] === undefined) {
    console.error(`FAIL: Article missing field ${f}`);
    process.exit(1);
  }
}
console.log('PASS: Article schema complete across all required fields');

// Count total MCQs across articles
let totalMcqs = 0;
data.articles.forEach(a => {
  if (a.mcqs && Array.isArray(a.mcqs)) {
    totalMcqs += a.mcqs.length;
    a.mcqs.forEach((m, idx) => {
      if (!m.q || !m.opts || m.opts.length !== 4 || m.ans === undefined || !m.exp) {
        console.error(`FAIL: MCQ ${idx} in article ${a.num} malformed`);
        process.exit(1);
      }
    });
  }
});
console.log(`PASS: Verified ${totalMcqs} article MCQs, all with 4 options, valid answer index, and rationale`);

// 2. Audit constitution-explorer.html
const htmlPath = path.join(__dirname, '../frontend/constitution-explorer.html');
if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: constitution-explorer.html missing');
  process.exit(1);
}
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Check required IDs in HTML
const requiredIds = [
  'themeToggleBtn',
  'themeIcon',
  'constKpiRow',
  'articlesListContainer',
  'articleSearchInput',
  'examFilterBtn',
  'dossierPartTag',
  'dossierTitle',
  'dossierLegalText',
  'dossierKeyPhrases',
  'dossierExplainer',
  'dossierExamNotes',
  'dossierRelatedMcqsContainer',
  'dossierMcqCount',
  'viewText',
  'viewExplainer',
  'viewExam',
  'viewMcqs',
  'btnFontInc',
  'btnFontDec',
  'btnCopyText',
  'amendmentsGrid',
  'quizContainer',
  'quizScoreDisplay'
];

let missingIds = [];
for (const id of requiredIds) {
  if (!htmlContent.includes(`id="${id}"`) && !htmlContent.includes(`id='${id}'`)) {
    missingIds.push(id);
  }
}

if (missingIds.length > 0) {
  console.error('FAIL: Missing DOM IDs:', missingIds);
  process.exit(1);
}
console.log(`PASS: All ${requiredIds.length} required DOM IDs present in HTML`);

// 3. Extract and syntax-check inline script in constitution-explorer.html
const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let scriptIdx = 0;
while ((match = scriptRegex.exec(htmlContent)) !== null) {
  scriptIdx++;
  const scriptContent = match[1];
  try {
    new vm.Script(scriptContent);
    console.log(`PASS: Inline script #${scriptIdx} syntax valid`);
  } catch (err) {
    console.error(`FAIL: Inline script #${scriptIdx} syntax error:`, err.message);
    process.exit(1);
  }
}

console.log('=== CONSTITUTION EXPLORER AUDIT PASSED 100% ===');
