const fs = require('fs');
const path = require('path');

console.log('=== STARTING PERSONALIZED LEARNING DASHBOARD VERIFICATION ===\n');

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

// 1. Check data_learning_dashboard.js
const dataPath = path.join(frontendDir, 'js/data_learning_dashboard.js');
check('js/data_learning_dashboard.js exists', fs.existsSync(dataPath));

if (fs.existsSync(dataPath)) {
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    check('Contains LEARNING_DASHBOARD global export', dataContent.includes('window.LEARNING_DASHBOARD'));
    check('Contains getProfile API', dataContent.includes('getProfile'));
    check('Contains recordQuizResult API', dataContent.includes('recordQuizResult'));
    check('Contains addStudyTime API', dataContent.includes('addStudyTime'));
    check('Contains resetProfile API', dataContent.includes('resetProfile'));
    check('Contains seeded testHistory benchmark', dataContent.includes('FIA Assistant Director'));
    check('Contains weak subject detection logic', dataContent.includes('Weak Area') && dataContent.includes('weakTopicsPrescription'));
    check('Contains improvementTimeline tracking', dataContent.includes('improvementTimeline'));
}

// 2. Check dashboard.html
const dashPath = path.join(frontendDir, 'dashboard.html');
check('dashboard.html exists', fs.existsSync(dashPath));

if (fs.existsSync(dashPath)) {
    const dashContent = fs.readFileSync(dashPath, 'utf8');
    check('dashboard.html includes top KPI metric cards', dashContent.includes('metric-card'));
    check('dashboard.html includes completed tests count', dashContent.includes('Tests Completed') || dashContent.includes('testsCompleted'));
    check('dashboard.html includes accuracy display', dashContent.includes('Overall Accuracy') || dashContent.includes('accuracy'));
    check('dashboard.html includes study hours display', dashContent.includes('Study Hours') || dashContent.includes('studyHours'));
    check('dashboard.html includes subject mastery breakdown', dashContent.includes('Subject Mastery') || dashContent.includes('subject-bar'));
    check('dashboard.html includes weak area alert cards', dashContent.includes('Weak Area Remediation') || dashContent.includes('rx-card'));
    check('dashboard.html includes interactive study timer', dashContent.includes('studyTimer') || dashContent.includes('timerDisplay'));
    check('dashboard.html includes week-by-week improvement timeline', dashContent.includes('Improvement Trajectory') || dashContent.includes('timeline'));
    check('dashboard.html includes completed test history table', dashContent.includes('<table') && dashContent.includes('dash-table'));
    check('dashboard.html includes reset profile functionality', dashContent.includes('resetProfile'));
    check('dashboard.html loads data_learning_dashboard.js', dashContent.includes('js/data_learning_dashboard.js'));
}

// 3. Check quiz.js & quiz.html integration
const quizJsPath = path.join(frontendDir, 'js/quiz.js');
const quizHtmlPath = path.join(frontendDir, 'quiz.html');

if (fs.existsSync(quizJsPath)) {
    const quizJs = fs.readFileSync(quizJsPath, 'utf8');
    check('quiz.js contains LEARNING_DASHBOARD.recordQuizResult hook', quizJs.includes('LEARNING_DASHBOARD.recordQuizResult'));
}

if (fs.existsSync(quizHtmlPath)) {
    const quizHtml = fs.readFileSync(quizHtmlPath, 'utf8');
    check('quiz.html includes data_learning_dashboard.js script tag', quizHtml.includes('js/data_learning_dashboard.js'));
}

// 4. Check Navigation & Index.html updates
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
check('15 HTML files identified in frontend', htmlFiles.length === 15);

let allHaveDashLink = true;
htmlFiles.forEach(f => {
    const pageContent = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    if (!pageContent.includes('dashboard.html')) {
        console.warn(`Warning: ${f} missing dashboard.html link`);
        allHaveDashLink = false;
    }
});
check('All 15 HTML pages link to dashboard.html', allHaveDashLink);

const indexPath = path.join(frontendDir, 'index.html');
if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    check('index.html contains hero search chip for dashboard.html', indexContent.includes("window.location.href='dashboard.html'"));
    check('index.html contains feature card in resources-grid', indexContent.includes('📊 Personalized Learning Dashboard'));
}

console.log(`\n=== RESULTS: ${passCount} / ${totalChecks} CHECKS PASSED ===`);
