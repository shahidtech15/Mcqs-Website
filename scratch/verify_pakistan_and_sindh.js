const fs = require('fs');

// Verify Pakistan Map
const pakHtml = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const pakRequiredIds = [
    'themeToggleBtn',
    'pakistanMapContainer',
    'activeFeatureTitle',
    'dossierSidebar',
    'dossierTypeBadge',
    'dossierTypeText',
    'dossierCategoryBadge',
    'dossierTitle',
    'dossierRegionText',
    'dossierCoords',
    'metricLabel1',
    'dossierMetric1',
    'metricLabel2',
    'dossierMetric2',
    'metricLabel3',
    'dossierMetric3',
    'metricLabel4',
    'dossierMetric4',
    'dossierSummary',
    'dossierEconomic',
    'dossierExamPoints',
    'pakSearchInput',
    'categoryPillsContainer',
    'quizBanner',
    'quizPromptTitle',
    'quizPromptQuestion',
    'quizScoreText',
    'btnToggleQuiz',
    'quizBtnText',
    'masterPakTable',
    'masterTableBody'
];

let pakPassed = true;
pakRequiredIds.forEach(id => {
    if (!pakHtml.includes(`id="${id}"`)) {
        console.error(`Missing ID in pakistan-map.html: ${id}`);
        pakPassed = false;
    }
});
if (pakPassed) console.log(`pakistan-map.html verified (${pakRequiredIds.length} IDs verified)!`);

// Verify Sindh Map
const sindhHtml = fs.readFileSync('frontend/sindh-map.html', 'utf8');
const sindhRequiredIds = [
    'themeToggleBtn',
    'sindhMapContainer',
    'activeSindhTitle',
    'dossierSidebar',
    'dossierTypeBadge',
    'dossierTypeText',
    'dossierCategoryBadge',
    'dossierTitle',
    'dossierRegionText',
    'dossierCoords',
    'metricLabel1',
    'dossierMetric1',
    'metricLabel2',
    'dossierMetric2',
    'metricLabel3',
    'dossierMetric3',
    'metricLabel4',
    'dossierMetric4',
    'dossierSummary',
    'dossierHighlights',
    'dossierExamPoints',
    'sindhSearchInput',
    'divisionPillsContainer',
    'quizBanner',
    'quizPromptTitle',
    'quizPromptQuestion',
    'quizScoreText',
    'btnToggleQuiz',
    'quizBtnText',
    'masterSindhTable',
    'masterTableBody'
];

let sindhPassed = true;
sindhRequiredIds.forEach(id => {
    if (!sindhHtml.includes(`id="${id}"`)) {
        console.error(`Missing ID in sindh-map.html: ${id}`);
        sindhPassed = false;
    }
});
if (sindhPassed) console.log(`sindh-map.html verified (${sindhRequiredIds.length} IDs verified)!`);
