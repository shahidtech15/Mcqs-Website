const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const frontendDir = path.join(rootDir, 'frontend');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  [PASS] ${message}`);
    } else {
        failedTests++;
        console.error(`  [FAIL] ${message}`);
    }
}

console.log('====================================================');
console.log('RECRUITMENT TEST PREPARATION HUB - VERIFICATION SUITE');
console.log('====================================================\n');

// 1. Verify Data Module
console.log('Section 1: Data Module (frontend/js/data_recruitment_prep.js)');
const dataPath = path.join(frontendDir, 'js', 'data_recruitment_prep.js');
assert(fs.existsSync(dataPath), 'data_recruitment_prep.js exists on disk');

const jobsData = require(dataPath);
assert(Array.isArray(jobsData), 'Exported data is an array');
assert(jobsData.length >= 6, `Contains at least 6 recruitment job profiles (found: ${jobsData.length})`);

const expectedJobIds = [
    'fia-ad-investigation',
    'fia-inspector',
    'customs-inspector',
    'aao-audit',
    'nab-ad',
    'mod-ad'
];

expectedJobIds.forEach(id => {
    const job = jobsData.find(j => j.id === id);
    assert(!!job, `Job profile '${id}' is defined`);
    if (job) {
        assert(!!job.title && job.title.length > 0, `Job '${id}' has a title: "${job.title}"`);
        assert(!!job.scale && job.scale.includes('BS-'), `Job '${id}' has valid scale: "${job.scale}"`);
        assert(!!job.department, `Job '${id}' has department: "${job.department}"`);
        assert(!!job.qualification, `Job '${id}' has eligibility qualification`);
        assert(!!job.ageLimit, `Job '${id}' has age limit`);
        assert(!!job.shortDescription, `Job '${id}' has role description`);
        assert(!!job.icon, `Job '${id}' has an icon`);

        // Syllabus checks
        assert(!!job.syllabus, `Job '${id}' has syllabus object`);
        assert(job.syllabus.totalMarks === 100, `Job '${id}' syllabus totalMarks is 100`);
        assert(job.syllabus.totalQuestions === 100, `Job '${id}' syllabus totalQuestions is 100`);
        assert(Array.isArray(job.syllabus.sections) && job.syllabus.sections.length >= 2, `Job '${id}' has at least 2 syllabus sections (found: ${job.syllabus.sections.length})`);

        // Subject Prep Material checks
        assert(Array.isArray(job.prepMaterial) && job.prepMaterial.length >= 2, `Job '${id}' has at least 2 structured study modules (found: ${job.prepMaterial ? job.prepMaterial.length : 0})`);
        if (job.prepMaterial) {
            job.prepMaterial.forEach((mod, mIdx) => {
                assert(!!mod.title, `Job '${id}' module ${mIdx + 1} has title: "${mod.title}"`);
                assert(!!mod.content && mod.content.length > 50, `Job '${id}' module ${mIdx + 1} has substantial study content`);
            });
        }

        // Recommended Resources checks
        assert(Array.isArray(job.recommendedResources) && job.recommendedResources.length >= 3, `Job '${id}' has at least 3 recommended resources (found: ${job.recommendedResources ? job.recommendedResources.length : 0})`);

        // Practice Quizzes checks
        assert(Array.isArray(job.practiceQuizzes) && job.practiceQuizzes.length >= 1, `Job '${id}' has interactive practice quizzes`);
        if (job.practiceQuizzes) {
            job.practiceQuizzes.forEach((qObj, qIdx) => {
                assert(Array.isArray(qObj.questions) && qObj.questions.length >= 5, `Job '${id}' quiz ${qIdx + 1} has at least 5 questions (found: ${qObj.questions.length})`);
                qObj.questions.forEach((q, i) => {
                    assert(!!q.q && Array.isArray(q.options) && q.options.length === 4 && typeof q.correct === 'number' && !!q.explanation, `Job '${id}' quiz ${qIdx + 1} Q${i + 1} has valid options, correct answer index, and explanation`);
                });
            });
        }

        // Checklist checks
        assert(Array.isArray(job.checklist) && job.checklist.length >= 5, `Job '${id}' has at least 5 readiness checklist items (found: ${job.checklist ? job.checklist.length : 0})`);
    }
});

// 2. Verify HTML Hub
console.log('\nSection 2: HTML Presentation Hub (frontend/recruitment-prep.html)');
const htmlPath = path.join(frontendDir, 'recruitment-prep.html');
assert(fs.existsSync(htmlPath), 'recruitment-prep.html exists on disk');

const htmlStats = fs.statSync(htmlPath);
assert(htmlStats.size > 35000, `HTML file size is substantial (size: ${htmlStats.size} bytes)`);

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Key UI Elements
assert(htmlContent.includes('<!DOCTYPE html>'), 'Valid HTML5 doctype present');
assert(htmlContent.includes('<title>Complete Recruitment Test Preparation Hub'), 'Includes descriptive title');
assert(htmlContent.includes('id="jobsCarousel"'), 'Contains job selection carousel container');
assert(htmlContent.includes('id="bannerTitle"'), 'Contains active job title banner element');
assert(htmlContent.includes('id="readinessVal"'), 'Contains live readiness score percentage element');

// 6 Required Tabs
const requiredTabs = [
    'tab-syllabus',
    'tab-material',
    'tab-resources',
    'tab-practice',
    'tab-mock',
    'tab-progress'
];
requiredTabs.forEach(tabId => {
    assert(htmlContent.includes(`data-tab="${tabId}"`), `Contains navigation button for tab '${tabId}'`);
    assert(htmlContent.includes(`id="${tabId}"`), `Contains tab pane for '${tabId}'`);
});

// Script integrations
assert(htmlContent.includes('src="js/data_recruitment_prep.js"'), 'Includes data_recruitment_prep.js script tag');
assert(htmlContent.includes('src="js/data_fia_sample_papers.js"'), 'Includes data_fia_sample_papers.js script tag');
assert(htmlContent.includes('function selectJob('), 'Defines selectJob function');
assert(htmlContent.includes('function checkQuizAnswer('), 'Defines checkQuizAnswer interactive quiz checker');
assert(htmlContent.includes('function toggleChecklistItem('), 'Defines toggleChecklistItem persistent checklist handler');
assert(htmlContent.includes('function calculateReadiness('), 'Defines calculateReadiness readiness calculator');
assert(htmlContent.includes('function startMockExam('), 'Defines startMockExam mock simulator launcher');

// 3. Verify Cross-Page Linking
console.log('\nSection 3: Global Cross-Page Navigation Linking');
const pagesToCheck = [
    'index.html',
    'written-prep.html',
    'articles.html',
    'digital-library.html',
    'cce-essays-2025.html',
    'css-essays-2026.html',
    'css-essays-2021.html',
    'fia-sample-papers.html'
];

pagesToCheck.forEach(page => {
    const pPath = path.join(frontendDir, page);
    assert(fs.existsSync(pPath), `${page} exists`);
    const content = fs.readFileSync(pPath, 'utf8');
    assert(content.includes('href="recruitment-prep.html"'), `${page} contains link to recruitment-prep.html`);
});

console.log('\n====================================================');
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
console.log('====================================================');

if (failedTests > 0) {
    process.exit(1);
} else {
    console.log('All recruitment test preparation hub tests PASSED successfully!');
}
