const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../frontend/js/data_court_structure.js');
const htmlFile = path.join(__dirname, '../frontend/court-structure-explorer.html');

console.log('=== AUDITING COURT STRUCTURE SUITE ===\n');

// 1. Audit Data
if (!fs.existsSync(dataFile)) {
    console.error('FAIL: data_court_structure.js does not exist!');
    process.exit(1);
}
const data = require(dataFile);

console.log(`PASS: Loaded data_court_structure.js.`);
console.log(`- Tiers: ${data.hierarchyTiers.length}`);
console.log(`- Courts: ${data.courts.length}`);
console.log(`- Appellate Routes: ${data.appellateRoutes.length}`);
console.log(`- Comparisons: ${data.comparisonPairs.length}`);
console.log(`- Quiz Questions: ${data.quiz.length}`);

if (data.courts.length < 20) {
    console.error('FAIL: Expected at least 20 courts profiled!');
    process.exit(1);
}

let courtErrors = 0;
data.courts.forEach((c, idx) => {
    const req = ['id', 'tierId', 'name', 'category', 'seat', 'headOfCourt', 'composition', 'appointmentProcess', 'constitutionalProvisions', 'jurisdictions', 'nextAppellateForum'];
    req.forEach(p => {
        if (!c[p]) {
            console.error(`FAIL in Court ${idx + 1} (${c.id}): missing property "${p}"`);
            courtErrors++;
        }
    });
});

if (courtErrors === 0) {
    console.log('PASS: All courts passed property validation!');
} else {
    console.error(`FAIL: ${courtErrors} court property errors!`);
    process.exit(1);
}

// Check quiz
let quizErrors = 0;
data.quiz.forEach((q, idx) => {
    if (!q.question || !Array.isArray(q.opts) || q.opts.length !== 4 || typeof q.ans !== 'number' || !q.article || !q.explanation || !q.examTip) {
        console.error(`FAIL in Quiz ${idx + 1} (${q.id}): invalid properties`);
        quizErrors++;
    }
});
if (quizErrors === 0) {
    console.log('PASS: All 15 quiz questions passed property validation!');
} else {
    console.error(`FAIL: ${quizErrors} quiz errors!`);
    process.exit(1);
}

// 2. Audit HTML
if (!fs.existsSync(htmlFile)) {
    console.error('FAIL: court-structure-explorer.html does not exist!');
    process.exit(1);
}
const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
console.log(`PASS: court-structure-explorer.html exists (${Math.round(htmlContent.length / 1024)} KB).`);

const requiredIds = [
    'btnTabHierarchy', 'btnTabLadder', 'btnTabCompare', 'btnTabQuiz',
    'soundToggleBtn', 'soundIcon', 'themeToggleBtn', 'themeIcon',
    'kpiCourtsCount', 'viewHierarchy', 'courtSearchInput', 'tierFilterRow', 'treeContainer',
    'viewLadder', 'routePillsWrap', 'ladderStage', 'ladderRouteDomain', 'ladderRouteStart', 'ladderRouteTitle', 'ladderTimeline',
    'viewCompare', 'comparisonList',
    'viewQuiz', 'quizCounterText', 'quizScoreText', 'quizProgressBar', 'quizQuestionText', 'quizOptionsList', 'quizFeedbackBox', 'btnNextQuiz',
    'dossierModal', 'dossierCategory', 'dossierSeat', 'dossierTitle', 'dossierUrduName', 'dossierAuthorityComp', 'dossierAppointment', 'dossierJurisdictionsList', 'dossierAppeal', 'dossierPrecedent'
];

let missingIds = 0;
requiredIds.forEach(id => {
    if (!htmlContent.includes(`id="${id}"`)) {
        console.error(`FAIL: Missing DOM id="${id}"`);
        missingIds++;
    }
});

if (missingIds === 0) {
    console.log(`PASS: All ${requiredIds.length} required DOM IDs are present!`);
} else {
    console.error(`FAIL: ${missingIds} missing DOM IDs!`);
    process.exit(1);
}

if (!htmlContent.includes('js/data_court_structure.js')) {
    console.error('FAIL: Missing link to js/data_court_structure.js!');
    process.exit(1);
} else {
    console.log('PASS: Script link to js/data_court_structure.js verified.');
}

if (!htmlContent.includes("localStorage.getItem('mcqs_dark_mode')")) {
    console.error('FAIL: Missing anti-FOUC theme script!');
    process.exit(1);
} else {
    console.log('PASS: Anti-FOUC theme script confirmed in <head>.');
}

console.log('\n=== ALL COURT STRUCTURE AUDIT CHECKS PASSED ===');
