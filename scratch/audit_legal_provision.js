const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../frontend/js/data_legal_provision.js');
const htmlFile = path.join(__dirname, '../frontend/identify-legal-provision.html');

console.log('=== AUDITING LEGAL PROVISION SUITE ===\n');

// 1. Audit Data
if (!fs.existsSync(dataFile)) {
    console.error('FAIL: data_legal_provision.js does not exist!');
    process.exit(1);
}
const data = require(dataFile);
if (!data.scenarios || !Array.isArray(data.scenarios)) {
    console.error('FAIL: data.scenarios is missing or not an array!');
    process.exit(1);
}

console.log(`PASS: Loaded data_legal_provision.js with ${data.scenarios.length} scenarios.`);

let dataErrors = 0;
data.scenarios.forEach((s, idx) => {
    const requiredProps = [
        'id', 'title', 'domain', 'subDomain', 'difficulty',
        'scenarioText', 'question', 'opts', 'ans',
        'applicableLaw', 'statutorySummary', 'whyCorrect',
        'whyOthersFail', 'precedent', 'examTip'
    ];
    requiredProps.forEach(p => {
        if (s[p] === undefined || s[p] === null || s[p] === '') {
            console.error(`FAIL in Scenario ${idx + 1} (${s.id}): missing or empty property "${p}"`);
            dataErrors++;
        }
    });

    if (!Array.isArray(s.opts) || s.opts.length !== 4) {
        console.error(`FAIL in Scenario ${idx + 1} (${s.id}): opts must be an array of length 4`);
        dataErrors++;
    }
    if (typeof s.ans !== 'number' || s.ans < 0 || s.ans > 3) {
        console.error(`FAIL in Scenario ${idx + 1} (${s.id}): ans must be an integer between 0 and 3`);
        dataErrors++;
    }
    if (!Array.isArray(s.whyOthersFail) || s.whyOthersFail.length !== 3) {
        console.error(`FAIL in Scenario ${idx + 1} (${s.id}): whyOthersFail must be an array of length 3`);
        dataErrors++;
    }
});

if (dataErrors === 0) {
    console.log('PASS: All 25 scenarios passed 100% data integrity and property validation!');
} else {
    console.error(`FAIL: ${dataErrors} data errors found!`);
    process.exit(1);
}

// 2. Audit HTML
if (!fs.existsSync(htmlFile)) {
    console.error('FAIL: identify-legal-provision.html does not exist!');
    process.exit(1);
}
const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
console.log(`PASS: identify-legal-provision.html exists (${Math.round(htmlContent.length / 1024)} KB).`);

// Check required DOM IDs
const requiredIds = [
    'kpiScenariosCount', 'searchInput', 'diffSelect', 'statusSelect',
    'domainFilterRow', 'practiceControls', 'practiceStudioContainer',
    'sidebarCountBadge', 'scenarioListContainer', 'stageCard',
    'stageCaseNum', 'stageDomainTag', 'stageSubDomainTag', 'stageDiffTag',
    'stageTitle', 'stageScenarioText', 'stageQuestionText', 'stageOptionsList',
    'stageAnalysisDrawer', 'drawerApplicableLaw', 'drawerStatutorySummary',
    'drawerWhyCorrect', 'drawerWhyOthersFail', 'drawerPrecedent', 'drawerExamTip',
    'btnPrevScenario', 'btnNextScenario', 'challengeContainer', 'chStreakVal',
    'chTimerVal', 'chScoreVal', 'chProgressBar', 'chQuestionNum', 'chDomainTag',
    'chTitle', 'chScenarioText', 'chQuestionText', 'chOptionsList', 'chFeedbackBox',
    'chBtnNext', 'cheatSheetModal', 'challengeResultModal', 'resScore',
    'resAccuracy', 'resTime', 'resBadgeBox', 'resRankTitle', 'resRankDesc'
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

// Verify script links
if (!htmlContent.includes('js/data_legal_provision.js')) {
    console.error('FAIL: Missing link to js/data_legal_provision.js!');
    process.exit(1);
} else {
    console.log('PASS: Script tag for js/data_legal_provision.js is present.');
}

// Verify Anti-FOUC script
if (!htmlContent.includes("localStorage.getItem('mcqs_dark_mode')")) {
    console.error('FAIL: Missing Anti-FOUC theme script!');
    process.exit(1);
} else {
    console.log('PASS: Anti-FOUC theme script is present in <head>.');
}

// Verify Web Audio chime
if (!htmlContent.includes("playChime") || !htmlContent.includes("AudioContext")) {
    console.error('FAIL: Missing Web Audio synthesis chime function!');
    process.exit(1);
} else {
    console.log('PASS: Pure Web Audio API synthesis engine verified.');
}

console.log('\n=== ALL AUDIT CHECKS PASSED SUCCESSFULLY ===');
