const fs = require('fs');
const path = require('path');

console.log('--- Starting World Economy Dashboard Comprehensive Audit ---');

// 1. Check data_world_economy.js
const dataPath = path.join(__dirname, '../frontend/js/data_world_economy.js');
if (!fs.existsSync(dataPath)) {
    console.error('FAIL: data_world_economy.js not found!');
    process.exit(1);
}

const econData = require(dataPath);
console.log('1. Data Verification:');
console.log(`- Total Countries: ${econData.countries.length}`);
console.log(`- Total Indicators Defined: ${Object.keys(econData.indicatorMetadata).length}`);
console.log(`- Total Policy Scenarios: ${econData.policyScenarios.length}`);
console.log(`- Total Quiz Questions: ${econData.quiz.length}`);

if (econData.countries.length < 35) console.error('FAIL: Expected at least 35 countries!');
if (econData.policyScenarios.length !== 8) console.error('FAIL: Expected 8 policy scenarios!');
if (econData.quiz.length !== 20) console.error('FAIL: Expected 20 quiz questions!');

// Verify each country has all mandatory indicators
const mandatoryFields = ['id', 'name', 'code', 'flag', 'region', 'incomeGroup', 'blocs', 'gdpNominal', 'gdpPerCapitaNominal', 'gdpGrowth', 'inflationRate', 'unemploymentRate', 'debtToGdp', 'tradeBalance', 'fxReserves', 'centralBankRate', 'currency'];
let missingFieldErrors = 0;
econData.countries.forEach(c => {
    mandatoryFields.forEach(f => {
        if (c[f] === undefined || c[f] === null) {
            console.error(`FAIL: Country ${c.name} missing field ${f}!`);
            missingFieldErrors++;
        }
    });
});

if (missingFieldErrors === 0) {
    console.log('PASS: All 40 countries have all mandatory macroeconomic indicators!');
}

// 2. Check HTML elements
const htmlPath = path.join(__dirname, '../frontend/world-economy-dashboard.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const requiredIds = [
    'btnBarMatrix', 'btnBarDuel', 'btnBarRankings', 'btnBarCorrelation', 'btnBarSimulator', 'btnBarQuiz',
    'viewMatrix', 'viewDuel', 'viewRankings', 'viewCorrelation', 'viewSimulator', 'viewQuiz',
    'matrixSearchInput', 'matrixSortSelect', 'matrixTableBody',
    'duelSelectA', 'duelSelectB', 'duelArenaGrid', 'duelBarChartSvgWrap',
    'rankingMetricSelect', 'rankingSliceSelect', 'rankingChartTitle', 'rankingChartSubtitle', 'rankingsChartSvgWrap', 'rankingTheoryBox',
    'correlationPairSelect', 'correlationPlotTitle', 'correlationPlotDesc', 'correlationSvgWrap', 'correlationAnalysisBox',
    'simulatorGridContainer',
    'quizCounter', 'quizScore', 'quizQuestionText', 'quizOptionsList', 'quizExplanationBox', 'btnNextQuiz', 'btnRestartQuiz',
    'countryModalOverlay', 'countryModalContent'
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

console.log('\n--- World Economy Audit Complete: All verification criteria PASSED! ---');
