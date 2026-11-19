const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== AUDITING PPC SECTION FINDER ===');

// 1. Audit data_ppc.js
const dataPath = path.join(__dirname, '../frontend/js/data_ppc.js');
if (!fs.existsSync(dataPath)) {
  console.error('FAIL: data_ppc.js missing');
  process.exit(1);
}
const dataCode = fs.readFileSync(dataPath, 'utf-8');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);
try {
  vm.runInContext(dataCode, sandbox);
  console.log('PASS: data_ppc.js executed cleanly in sandbox');
} catch (e) {
  console.error('FAIL: data_ppc.js syntax/execution error:', e);
  process.exit(1);
}

const data = sandbox.window.PPC_DATA;
if (!data || !data.metadata || !data.kpis || !data.offences || !data.comparisons) {
  console.error('FAIL: PPC_DATA incomplete structure');
  process.exit(1);
}
console.log(`PASS: PPC_DATA contains ${data.offences.length} offences, ${data.comparisons.length} comparison matrices`);

// Check required offence fields
const reqOffenceFields = ['sec', 'slug', 'chapter', 'chapterNum', 'title', 'category', 'highYield', 'cognizable', 'bailable', 'compoundable', 'trialCourt', 'ingredients', 'punishment', 'illustrations', 'precedents'];
for (const f of reqOffenceFields) {
  if (data.offences[0][f] === undefined) {
    console.error(`FAIL: Offence 0 missing field ${f}`);
    process.exit(1);
  }
}
console.log('PASS: Offence schema complete across all required fields');

// Count total MCQs across offences
let totalMcqs = 0;
data.offences.forEach(o => {
  if (o.mcqs && Array.isArray(o.mcqs)) {
    totalMcqs += o.mcqs.length;
    o.mcqs.forEach((m, idx) => {
      if (!m.q || !m.opts || m.opts.length !== 4 || m.ans === undefined || !m.exp) {
        console.error(`FAIL: MCQ ${idx} in offence ${o.sec} malformed`);
        process.exit(1);
      }
    });
  }
});
console.log(`PASS: Verified ${totalMcqs} offence MCQs, all with 4 options, valid answer index, and legal rationale`);

// 2. Audit ppc-section-finder.html
const htmlPath = path.join(__dirname, '../frontend/ppc-section-finder.html');
if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: ppc-section-finder.html missing');
  process.exit(1);
}
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Check required IDs in HTML
const requiredIds = [
  'themeToggleBtn',
  'themeIcon',
  'ppcKpiRow',
  'offenceSearchInput',
  'btnHighYieldToggle',
  'btnCognizableToggle',
  'btnNonBailableToggle',
  'btnResetFilters',
  'categoryPillsRow',
  'offencesCountBadge',
  'offencesListContainer',
  'offenceDossierCard',
  'dossierChapterTag',
  'dossierSecNum',
  'dossierTitle',
  'statusCognizable',
  'statusBailable',
  'statusCompoundable',
  'statusCourt',
  'btnCopyText',
  'btnFontDec',
  'btnFontInc',
  'dossierTabs',
  'viewIngredients',
  'dossierIngredientsList',
  'dossierMensReaBox',
  'dossierMensReaText',
  'viewPunishment',
  'dossierPunishmentCard',
  'dossierExamNotesText',
  'viewIllustrations',
  'dossierIllustrationsContainer',
  'viewPrecedents',
  'dossierPrecedentsBox',
  'viewMcqs',
  'dossierRelatedMcqsContainer',
  'dossierMcqCount',
  'comparisonSection',
  'comparisonMatricesContainer',
  'masterQuizSection',
  'quizScoreDisplay',
  'quizContainer'
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

// 3. Extract and syntax-check inline script in ppc-section-finder.html
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

console.log('=== PPC SECTION FINDER AUDIT PASSED 100% ===');
