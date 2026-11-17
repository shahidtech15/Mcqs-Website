const fs = require('fs');
const path = require('path');

console.log('=== STARTING LEADERBOARD & DAILY CHALLENGE VERIFICATION ===\n');

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

// 1. Check data_leaderboard.js
const dataPath = path.join(frontendDir, 'js/data_leaderboard.js');
check('js/data_leaderboard.js exists', fs.existsSync(dataPath));

if (fs.existsSync(dataPath)) {
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    check('Exports window.LEADERBOARD_ENGINE', dataContent.includes('window.LEADERBOARD_ENGINE'));
    check('Contains getTodayChallenge API', dataContent.includes('getTodayChallenge'));
    check('Contains submitDailyChallenge API', dataContent.includes('submitDailyChallenge'));
    check('Contains getUserProfile API', dataContent.includes('getUserProfile'));
    check('Contains updateUserProfile API', dataContent.includes('updateUserProfile'));
    check('Contains getLeaderboard API', dataContent.includes('getLeaderboard'));
    check('Contains getUserStanding API', dataContent.includes('getUserStanding'));
    check('Contains daily challenge question sets', dataContent.includes('DAILY_CHALLENGE_SETS'));
    check('Contains seeded provincial aspirants', dataContent.includes('SEEDED_LEADERBOARD'));
    check('Calculates negative marking (-0.25)', dataContent.includes('negativeMarking') || dataContent.includes('0.25'));
    check('Syncs with LEARNING_DASHBOARD', dataContent.includes('window.LEARNING_DASHBOARD'));
}

// 2. Check leaderboard.html
const lbPath = path.join(frontendDir, 'leaderboard.html');
check('leaderboard.html exists', fs.existsSync(lbPath));

if (fs.existsSync(lbPath)) {
    const lbContent = fs.readFileSync(lbPath, 'utf8');
    check('Contains Hero section with reset countdown', lbContent.includes('heroResetCountdown') || lbContent.includes('All-Pakistan Leaderboard'));
    check('Contains Candidate Standing Card with National Rank', lbContent.includes('kpiNationalRank') && lbContent.includes('kpiPercentile'));
    check('Contains Active Streak tracking', lbContent.includes('kpiStreak') || lbContent.includes('Consistency'));
    check('Contains Daily Challenge Arena', lbContent.includes('challenge-arena-card') && lbContent.includes('btnStartChallenge'));
    check('Contains in-page interactive quiz runner', lbContent.includes('quizRunnerArea') && lbContent.includes('runnerTimerDisplay'));
    check('Contains question navigation jump grid', lbContent.includes('runnerNavGrid'));
    check('Contains results scorecard panel', lbContent.includes('challengeResultArea') && lbContent.includes('resFinalScore'));
    check('Contains detailed question explanations', lbContent.includes('detailedExplanationsArea'));
    check('Contains Top 3 Podium display', lbContent.includes('podiumArea') && lbContent.includes('podium-slot'));
    check('Contains Leaderboard table with user highlight', lbContent.includes('leaderboardTable') && lbContent.includes('lb-table'));
    check('Contains Cadre filter select (CSS, FIA, PMS)', lbContent.includes('cadreFilter'));
    check('Contains Candidate Profile Edit Modal', lbContent.includes('profileModal') && lbContent.includes('modalInputName'));
    check('Contains Milestone Achievement Badges', lbContent.includes('badges-grid'));
    check('Loads data_leaderboard.js script', lbContent.includes('js/data_leaderboard.js'));
    check('Loads data_learning_dashboard.js script', lbContent.includes('js/data_learning_dashboard.js'));
}

// 3. Check All 16 HTML files link to leaderboard.html
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
check('16 HTML files present in frontend', htmlFiles.length === 16);

let allLinked = true;
htmlFiles.forEach(f => {
    const content = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    if (!content.includes('leaderboard.html')) {
        console.warn(`File ${f} is missing link to leaderboard.html`);
        allLinked = false;
    }
});
check('All 16 HTML pages include links to leaderboard.html', allLinked);

// 4. Check index.html hero chip and resources card
const indexPath = path.join(frontendDir, 'index.html');
if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    check('index.html contains hero chip for leaderboard.html', indexContent.includes("window.location.href='leaderboard.html'"));
    check('index.html contains feature card in resources-grid', indexContent.includes('🏆 All-Pakistan Leaderboard &amp; Daily Challenge'));
}

console.log(`\n=== RESULTS: ${passCount} / ${totalChecks} CHECKS PASSED ===`);
