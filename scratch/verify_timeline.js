const fs = require('fs');
const path = require('path');

console.log('=== STARTING HISTORICAL TIMELINE VERIFICATION ===\n');

const frontendDir = path.join(__dirname, '../frontend');
let passCount = 0;
let totalChecks = 0;

function check(desc, condition) {
    totalChecks++;
    if (condition) {
        console.log(`[PASS] ${desc}`);
        passCount++;
    } else {
        console.error(`[FAIL] ${desc}`);
    }
}

// 1. Check data_timeline.js
const dataPath = path.join(frontendDir, 'js/data_timeline.js');
check('js/data_timeline.js exists', fs.existsSync(dataPath));

if (fs.existsSync(dataPath)) {
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    check('Exports window.HISTORICAL_TIMELINE_DATA', dataContent.includes('window.HISTORICAL_TIMELINE_DATA'));
    check('Contains getAllEvents API', dataContent.includes('getAllEvents'));
    check('Contains getEventsByCategory API', dataContent.includes('getEventsByCategory'));
    check('Contains getEventsByEra API', dataContent.includes('getEventsByEra'));
    check('Contains searchEvents API', dataContent.includes('searchEvents'));
    check('Contains Pakistan history milestones (712 to 2018/2024)', dataContent.includes('Muhammad bin Qasim') && dataContent.includes('Lahore Resolution') && dataContent.includes('1973 Constitution'));
    check('Contains World history milestones (1215 to 2024)', dataContent.includes('Magna Carta') && dataContent.includes('Peace of Westphalia') && dataContent.includes('United Nations'));
    check('All events include embedded exam MCQs', dataContent.includes('examMcq') && dataContent.includes('correctAnswer'));
}

// 2. Check timeline.html
const tlPath = path.join(frontendDir, 'timeline.html');
check('timeline.html exists', fs.existsSync(tlPath));

if (fs.existsSync(tlPath)) {
    const tlContent = fs.readFileSync(tlPath, 'utf8');
    check('Contains Hero header with historical scope', tlContent.includes('Interactive Historical Timeline') && tlContent.includes('timeline-hero'));
    check('Contains Category Track filter buttons', tlContent.includes('setCategoryFilter') && tlContent.includes('track-tab-btn'));
    check('Contains Real-time search bar', tlContent.includes('timelineSearchInput') && tlContent.includes('handleSearch'));
    check('Contains Era filter and Chronology sort select', tlContent.includes('eraFilterSelect') && tlContent.includes('sortOrderSelect'));
    check('Contains Quick Era Jump Bar', tlContent.includes('eraJumpBar') && tlContent.includes('jumpToYear'));
    check('Contains Timeline spine & alternating cards layout', tlContent.includes('timeline-spine-line') && tlContent.includes('timeline-spine-wrapper'));
    check('Contains interactive MCQ validation function', tlContent.includes('checkMcqAnswer') && tlContent.includes('mcq-explanation-panel'));
    check('Loads data_timeline.js script', tlContent.includes('js/data_timeline.js'));
    check('Includes Dark mode & mobile menu support', tlContent.includes('themeToggle') && tlContent.includes('mobile-menu'));
}

// 3. Check All 17 HTML files link to timeline.html
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
check('17 HTML files present in frontend', htmlFiles.length === 17);

let allLinked = true;
htmlFiles.forEach(f => {
    const content = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    if (!content.includes('timeline.html')) {
        console.warn(`File ${f} is missing link to timeline.html`);
        allLinked = false;
    }
});
check('All 17 HTML pages include links to timeline.html', allLinked);

// 4. Check index.html hero chip and resources card
const indexPath = path.join(frontendDir, 'index.html');
if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    check('index.html contains hero search chip for timeline.html', indexContent.includes("window.location.href='timeline.html'"));
    check('index.html contains feature card in resources-grid', indexContent.includes('⏳ Interactive Historical Timeline'));
}

console.log(`\n=== RESULTS: ${passCount} / ${totalChecks} CHECKS PASSED ===`);
