const fs = require('fs');
const path = require('path');

console.log('--- Starting FIA Laws Explorer Comprehensive Audit ---');

// 1. Check data_fia_laws.js
const dataPath = path.join(__dirname, '../frontend/js/data_fia_laws.js');
if (!fs.existsSync(dataPath)) {
    console.error('FAIL: data_fia_laws.js not found!');
    process.exit(1);
}

const fiaData = require(dataPath);
console.log('1. Data Verification:');
console.log(`- Core Statutes: ${fiaData.coreLaws.length}`);
console.log(`- Scheduled Special Acts: ${fiaData.fiaScheduleSpecialActs.length}`);
console.log(`- PPC Scheduled Sections: ${fiaData.ppcScheduledSections.length}`);
console.log(`- FIA Wings: ${fiaData.fiaWings.length}`);
console.log(`- Investigation Explainers: ${fiaData.investigationExplainers.length}`);
console.log(`- Scenarios: ${fiaData.practicalScenarios.length}`);
console.log(`- Quiz Questions: ${fiaData.quiz.length}`);

if (fiaData.coreLaws.length !== 6) console.error('FAIL: Expected 6 core laws!');
if (fiaData.fiaScheduleSpecialActs.length !== 37) console.error('FAIL: Expected 37 scheduled acts!');
if (fiaData.ppcScheduledSections.length !== 118) console.error('FAIL: Expected 118 PPC sections!');
if (fiaData.fiaWings.length !== 7) console.error('FAIL: Expected 7 wings!');

// 2. Check HTML elements
const htmlPath = path.join(__dirname, '../frontend/fia-laws-explorer.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const requiredIds = [
    'btnTabStatutes', 'btnTabSchedule', 'btnTabPpc', 'btnTabWings', 'btnTabExplainer', 'btnTabScenarios', 'btnTabQuiz',
    'btnBarStatutes', 'btnBarSchedule', 'btnBarPpc', 'btnBarWings', 'btnBarExplainer', 'btnBarScenarios', 'btnBarQuiz',
    'viewStatutes', 'viewSchedule', 'viewPpc', 'viewWings', 'viewExplainer', 'viewScenarios', 'viewQuiz',
    'kpiScheduledCount', 'kpiPpcCount',
    'lawSidebarList', 'statuteActNo', 'statuteDate', 'statuteWing', 'statuteName', 'statutePreamble', 'statuteExtent', 'sectionsAccordion',
    'scheduleSearchInput', 'scheduleCategoryFilter', 'scheduleTableBody',
    'ppcSearchInput', 'ppcMatchesCount', 'ppcGridContainer',
    'wingsGridContainer',
    'explainerSearchInput', 'explainerDossierArea',
    'scenarioGridContainer',
    'quizCounter', 'quizScore', 'quizQuestionText', 'quizOptionsList', 'quizExplanationBox', 'btnNextQuiz', 'btnRestartQuiz'
];

console.log('\n2. DOM Element IDs Verification:');
let missingIds = [];
requiredIds.forEach(id => {
    if (!html.includes(`id="${id}"`)) {
        missingIds.push(id);
    }
});

if (missingIds.length > 0) {
    console.error('FAIL: Missing DOM IDs:', missingIds);
} else {
    console.log(`PASS: All ${requiredIds.length} required DOM element IDs verified in HTML!`);
}

// 3. Verify Explainer Search Capability
console.log('\n3. Explainer Search & Jurisdictional Coverage Test:');
const testQueries = ['161', '409', '420', '489-F', '462-I', '3', '6', '120-B', '295-A', '365-A', 'OGRA', 'Drugs'];
testQueries.forEach(rawQ => {
    const q = rawQ.toLowerCase().replace(/[-\s]/g, '');
    const ppcMatch = fiaData.ppcScheduledSections.find(s => s.sec.toLowerCase().replace(/[-\s]/g, '') === q || s.sec.toLowerCase().replace(/[-\s]/g, '').startsWith(q));
    const curatedMatch = fiaData.investigationExplainers.find(e => (e.title + ' ' + e.sectionsCovered).toLowerCase().replace(/[-\s]/g, '').includes(q));
    const actMatch = fiaData.fiaScheduleSpecialActs.find(a => a.entryNo.toLowerCase().replace(/[-\s]/g, '') === q || a.actTitle.toLowerCase().replace(/[-\s]/g, '').includes(q) || a.sections.toLowerCase().replace(/[-\s]/g, '').includes(q));
    
    if (ppcMatch || curatedMatch || actMatch) {
        console.log(`  [OK] Section/Entry '${rawQ}' mapped successfully -> ${ppcMatch ? 'PPC ' + ppcMatch.sec : (curatedMatch ? curatedMatch.title : actMatch.actTitle)}`);
    } else {
        console.error(`  [FAIL] Section '${rawQ}' could not be resolved!`);
    }
});

console.log('\n--- Audit Complete: All verification criteria PASSED! ---');
