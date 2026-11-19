const fs = require('fs');

const html = fs.readFileSync('frontend/international-trade-routes-map.html', 'utf8');

const requiredIds = [
    'themeToggleBtn',
    'tradeMapContainer',
    'activeTradeTitle',
    'dossierSidebar',
    'dossierStatusBadge',
    'dossierStatusText',
    'dossierCategoryBadge',
    'dossierTitle',
    'dossierSubtype',
    'dossierCoords',
    'dossierMetricVolume',
    'dossierMetricVessels',
    'dossierMetricLimits',
    'dossierMetricStates',
    'dossierStrategicSig',
    'dossierCommodities',
    'dossierVulnerabilities',
    'dossierLaw',
    'dossierExamAnalysis',
    'dossierEssayBtn',
    'tradeSearchInput',
    'categoryPillsContainer',
    'simulatorModal',
    'quizBanner',
    'quizPromptTitle',
    'quizPromptQuestion',
    'quizScoreText',
    'btnToggleQuiz',
    'quizBtnText',
    'masterTradeTable',
    'masterTableBody'
];

let allPassed = true;
requiredIds.forEach(id => {
    if (!html.includes(`id="${id}"`)) {
        console.error(`Missing ID: ${id}`);
        allPassed = false;
    }
});

if (allPassed) {
    console.log(`All ${requiredIds.length} required UI elements exist in international-trade-routes-map.html!`);
}
