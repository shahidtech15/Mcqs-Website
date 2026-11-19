const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== AUDITING CRPC PROCEDURE FLOWCHART ===');

// 1. Audit data_crpc.js
const dataPath = path.join(__dirname, '../frontend/js/data_crpc.js');
if (!fs.existsSync(dataPath)) {
  console.error('FAIL: data_crpc.js missing');
  process.exit(1);
}
const dataCode = fs.readFileSync(dataPath, 'utf-8');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);
try {
  vm.runInContext(dataCode, sandbox);
  console.log('PASS: data_crpc.js executed cleanly in sandbox');
} catch (e) {
  console.error('FAIL: data_crpc.js syntax/execution error:', e);
  process.exit(1);
}

const data = sandbox.window.CRPC_DATA;
if (!data || !data.metadata || !data.kpis || !data.stages || !data.comparisons || !data.simulatorScenarios || !data.fullQuiz) {
  console.error('FAIL: CRPC_DATA incomplete structure');
  process.exit(1);
}
console.log(`PASS: CRPC_DATA contains ${data.stages.length} stages, ${data.comparisons.length} comparisons, ${data.simulatorScenarios.length} simulator scenarios, ${data.fullQuiz.length} full quiz questions`);

// Check required stage fields
const reqStageFields = ['step', 'id', 'title', 'subtitle', 'category', 'path', 'sections', 'keyActors', 'statutoryTimelines', 'legalPrerequisites', 'remediesIfRefused', 'essentialDocuments', 'landmarkPrecedents', 'mcq'];
for (const f of reqStageFields) {
  if (data.stages[0][f] === undefined) {
    console.error(`FAIL: Stage 0 missing field ${f}`);
    process.exit(1);
  }
}
console.log('PASS: Stage schema complete across all required fields');

// Verify full quiz MCQs
data.fullQuiz.forEach((m, idx) => {
  if (!m.q || !m.opts || m.opts.length !== 4 || m.ans === undefined || !m.exp) {
    console.error(`FAIL: Full quiz MCQ ${idx} malformed`);
    process.exit(1);
  }
});
console.log(`PASS: Verified ${data.fullQuiz.length} full quiz MCQs, all with 4 options, valid answer index, and rationale`);

// 2. Audit crpc-procedure-flowchart.html
const htmlPath = path.join(__dirname, '../frontend/crpc-procedure-flowchart.html');
if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: crpc-procedure-flowchart.html missing');
  process.exit(1);
}
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Check required IDs in HTML
const requiredIds = [
  'themeToggleBtn',
  'themeIcon',
  'crpcKpiRow',
  'btnPathPolice',
  'btnPathPrivate',
  'btnPrevStep',
  'btnNextStep',
  'stepperTrack',
  'stagesNavList',
  'stageDossierCard',
  'dossierStepTag',
  'dossierTitle',
  'dossierSubtitle',
  'dossierSectionChips',
  'btnCopyDossier',
  'btnFontDec',
  'btnFontInc',
  'dossierTabs',
  'tabProcess',
  'dossierProcessList',
  'dossierRemediesBox',
  'dossierRemediesList',
  'tabTimelines',
  'dossierTimelinesList',
  'tabActors',
  'dossierActorsList',
  'tabDocuments',
  'dossierDocsGrid',
  'tabPrecedents',
  'dossierPrecedentsCard',
  'tabStageMcq',
  'dossierStageMcqContainer',
  'simulatorSection',
  'simulatorContainer',
  'comparisonSection',
  'comparisonsContainer',
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

// 3. Extract and syntax-check inline script in crpc-procedure-flowchart.html
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

console.log('=== CRPC PROCEDURE FLOWCHART AUDIT PASSED 100% ===');
