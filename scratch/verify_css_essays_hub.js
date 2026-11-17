// scratch/verify_css_essays_hub.js
const fs = require('fs');
const path = require('path');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = [];

function assert(condition, message) {
    totalChecks++;
    if (condition) {
        passedChecks++;
        console.log(`[PASS] ${message}`);
    } else {
        failedChecks.push(message);
        console.error(`[FAIL] ${message}`);
    }
}

console.log('================================================================');
console.log('FPSC CSS 2021 SOLVED ESSAYS HUB — VERIFICATION TEST SUITE');
console.log('================================================================\n');

// 1. Check Data Module
const dataFile = path.join(__dirname, '../frontend/js/data_css_essays_2021.js');
assert(fs.existsSync(dataFile), 'frontend/js/data_css_essays_2021.js exists');

const data = require(dataFile);
assert(data && data.metadata, 'Data module has metadata header');
assert(Array.isArray(data.essays), 'data.essays is an array');
assert(data.essays.length === 10, `data.essays contains all 10 topics (found: ${data.essays.length})`);

// Verify individual essay compliance with conditions
const expectedTopics = [
    { num: 1, keyword: 'waste water' },
    { num: 2, keyword: 'purposive education' },
    { num: 3, keyword: 'COVID-19' },
    { num: 4, keyword: 'Human inventions' },
    { num: 5, keyword: 'equality is utopic' },
    { num: 6, keyword: 'Bureaucracy doldrums' },
    { num: 7, keyword: 'Gender equality' },
    { num: 8, keyword: 'globalization' },
    { num: 9, keyword: 'Intercultural communication' },
    { num: 10, keyword: 'thorns of life' }
];

let totalWords = 0;
data.essays.forEach((e, idx) => {
    const words = e.essayText.trim().split(/\s+/).length;
    totalWords += words;

    assert(e.topicNumber === idx + 1, `Essay ${idx + 1} has correct topicNumber ${e.topicNumber}`);
    assert(e.title && e.title.includes(expectedTopics[idx].keyword), `Essay ${e.topicNumber} title matches expected topic (${e.title})`);
    assert(e.thesisStatement && e.thesisStatement.length > 50, `Essay ${e.topicNumber} has a rigorous thesis statement`);
    assert(Array.isArray(e.outline) && e.outline.length >= 10, `Essay ${e.topicNumber} has a comprehensive outline (${e.outline.length} lines)`);
    assert(e.discoursesUsed && e.discoursesUsed.narration && e.discoursesUsed.exposition && e.discoursesUsed.argumentation && e.discoursesUsed.description, `Essay ${e.topicNumber} defines all 4 required discourses`);
    assert(words >= 2200, `Essay ${e.topicNumber} meets comprehensive length criteria (${words} words >= 2,200 words)`);
});

assert(totalWords > 24000, `Cumulative word count is substantial (found: ${totalWords.toLocaleString()} words)`);

// 2. Check HTML Page
const htmlFile = path.join(__dirname, '../frontend/css-essays-2021.html');
assert(fs.existsSync(htmlFile), 'frontend/css-essays-2021.html exists');

const htmlContent = fs.readFileSync(htmlFile, 'utf8');
assert(htmlContent.length > 100000, `css-essays-2021.html is substantive (${htmlContent.length.toLocaleString()} bytes)`);

for (let i = 1; i <= 10; i++) {
    assert(htmlContent.includes(`id="essay-topic-${i}"`), `HTML page contains anchor section for Topic ${i}`);
}

assert(htmlContent.includes('@media print'), 'Includes @media print styling for clean PDF notes download');
assert(htmlContent.includes('copyEssayText'), 'Includes copyEssayText JavaScript helper function');

// 3. Check Portal Integration
const wpContent = fs.readFileSync(path.join(__dirname, '../frontend/written-prep.html'), 'utf8');
assert(wpContent.includes('css-essays-2021.html'), 'frontend/written-prep.html links to css-essays-2021.html');

const indexContent = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf8');
assert(indexContent.includes('css-essays-2021.html'), 'frontend/index.html links to css-essays-2021.html');

const artContent = fs.readFileSync(path.join(__dirname, '../frontend/articles.html'), 'utf8');
assert(artContent.includes('css-essays-2021.html'), 'frontend/articles.html links to css-essays-2021.html');

const libContent = fs.readFileSync(path.join(__dirname, '../frontend/digital-library.html'), 'utf8');
assert(libContent.includes('css-essays-2021.html'), 'frontend/digital-library.html links to css-essays-2021.html');

console.log('\n================================================================');
console.log(`TEST SUMMARY: ${passedChecks}/${totalChecks} CHECKS PASSED`);
if (failedChecks.length === 0) {
    console.log('RESULT: ALL CHECKS PASSED PERFECTLY (100%)');
} else {
    console.error(`RESULT: ${failedChecks.length} CHECKS FAILED:`);
    failedChecks.forEach(f => console.error(`  - ${f}`));
}
console.log('================================================================');
process.exit(failedChecks.length === 0 ? 0 : 1);
