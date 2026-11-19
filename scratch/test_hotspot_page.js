const fs = require('fs');

const html = fs.readFileSync('frontend/geopolitical-hotspots-map.html', 'utf8');

const requiredIds = [
    'themeToggleBtn',
    'hotspotsMapContainer',
    'activeHotspotTitle',
    'dossierSidebar',
    'dossierStatusBadge',
    'dossierStatusText',
    'dossierCategoryBadge',
    'dossierTitle',
    'dossierRegion',
    'dossierCoords',
    'dossierSummary',
    'dossierParties',
    'dossierStrategicSig',
    'dossierFlashpoints',
    'dossierTreaties',
    'dossierExamAnalysis',
    'dossierEssayBtn',
    'hotspotSearchInput',
    'categoryPillsContainer',
    'threatPillsContainer',
    'quizBanner',
    'quizPromptQuestion',
    'quizScoreText',
    'btnToggleQuiz',
    'quizBtnText',
    'masterHotspotsTable',
    'masterTableBody'
];

let allPassed = true;
requiredIds.forEach(id => {
    if (!html.includes(`id="${id}"`)) {
        console.error(`Missing ID in HTML: ${id}`);
        allPassed = false;
    }
});

if (allPassed) {
    console.log(`All ${requiredIds.length} required UI elements exist in geopolitical-hotspots-map.html!`);
}
