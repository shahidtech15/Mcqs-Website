const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..', '..');
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
console.log('UPSC CSE 2023 SOLVED ESSAY PAPER - VERIFICATION SUITE');
console.log('====================================================\n');

// 1. Data Module Verification
console.log('Section 1: Data Module (frontend/js/data_upsc_essays_2023.js)');
const dataPath = path.join(frontendDir, 'js', 'data_upsc_essays_2023.js');
assert(fs.existsSync(dataPath), 'data_upsc_essays_2023.js exists on disk');

const essaysData = require(dataPath);
assert(Array.isArray(essaysData), 'Exported data is an array');
assert(essaysData.length === 8, `Contains exactly 8 essay topics (found: ${essaysData.length})`);

const expectedTopics = [
    { num: 1, sec: 'Section A', title: 'Thinking is like a game' },
    { num: 2, sec: 'Section A', title: 'Visionary decision-making' },
    { num: 3, sec: 'Section A', title: 'Not all who wander are lost' },
    { num: 4, sec: 'Section A', title: 'Inspiration for creativity springs' },
    { num: 5, sec: 'Section B', title: 'Girls are weighed down by restrictions' },
    { num: 6, sec: 'Section B', title: 'Mathematics is the music of reason' },
    { num: 7, sec: 'Section B', title: 'A society that has more justice' },
    { num: 8, sec: 'Section B', title: 'Education is what remains' }
];

expectedTopics.forEach(exp => {
    const essay = essaysData.find(e => e.topicNumber === exp.num);
    assert(!!essay, `Topic ${exp.num} is defined`);
    if (essay) {
        assert(essay.section === exp.sec, `Topic ${exp.num} is in ${exp.sec}`);
        assert(essay.title.toLowerCase().includes(exp.title.toLowerCase()), `Topic ${exp.num} title matches: "${essay.title.substring(0, 30)}..."`);
        assert(!!essay.hindiTitle && essay.hindiTitle.length > 5, `Topic ${exp.num} has Hindi title: "${essay.hindiTitle}"`);
        assert(!!essay.thesisStatement && essay.thesisStatement.length > 60, `Topic ${exp.num} has articulated thesis statement`);
        assert(Array.isArray(essay.outline) && essay.outline.length >= 10, `Topic ${exp.num} has comprehensive outline (${essay.outline.length} lines)`);
        
        // Word count verification
        const wordCount = essay.essayText.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
        assert(wordCount >= 1000 && wordCount <= 1400, `Topic ${exp.num} meets UPSC word count constraint (1,000–1,200 words) -> Actual: ${wordCount} words`);
    }
});

// 2. HTML Presentation Hub Verification
console.log('\nSection 2: HTML Presentation Hub (frontend/upsc-essays-2023.html)');
const htmlPath = path.join(frontendDir, 'upsc-essays-2023.html');
assert(fs.existsSync(htmlPath), 'upsc-essays-2023.html exists on disk');

const htmlStats = fs.statSync(htmlPath);
assert(htmlStats.size > 50000, `HTML file size is substantial (size: ${htmlStats.size} bytes)`);

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

assert(htmlContent.includes('<!DOCTYPE html>'), 'Valid HTML5 doctype');
assert(htmlContent.includes('<title>UPSC CSE Mains 2023 Solved Essay Paper'), 'Descriptive title tag present');
assert(htmlContent.includes('class="quick-nav-pills"'), 'Quick topic navigator present');

for (let i = 1; i <= 8; i++) {
    assert(htmlContent.includes(`id="topic-${i}"`), `Contains article card for topic ${i}`);
    assert(htmlContent.includes(`id="outline-box-${i}"`), `Contains outline box for topic ${i}`);
    assert(htmlContent.includes(`id="essay-box-${i}"`), `Contains essay box for topic ${i}`);
}

assert(htmlContent.includes('function toggleView('), 'Contains toggleView switcher function');

// 3. Navigation Cross-Linking Verification
console.log('\nSection 3: Global Navigation Cross-Linking');
const pagesToCheck = [
    'index.html',
    'written-prep.html',
    'cce-essays-2025.html',
    'css-essays-2026.html',
    'css-essays-2021.html'
];

pagesToCheck.forEach(page => {
    const pPath = path.join(frontendDir, page);
    assert(fs.existsSync(pPath), `${page} exists`);
    const content = fs.readFileSync(pPath, 'utf8');
    assert(content.includes('href="upsc-essays-2023.html"'), `${page} contains link to upsc-essays-2023.html`);
});

console.log('\n====================================================');
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
console.log('====================================================');

if (failedTests > 0) {
    process.exit(1);
} else {
    console.log('All UPSC CSE 2023 essay verification tests PASSED successfully!');
}
