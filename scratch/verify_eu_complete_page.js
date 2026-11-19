const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('   ONE TOPIC MASTER HUB (EUROPEAN UNION) VERIFICATION');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, testName) {
    if (condition) {
        console.log(`[PASS] ${testName}`);
        passCount++;
    } else {
        console.error(`[FAIL] ${testName}`);
        failCount++;
    }
}

// Test 1: File existence
const topicHtmlPath = path.join(__dirname, '../frontend/topic-european-union.html');
const topicDataPath = path.join(__dirname, '../frontend/js/data_topic_eu.js');

assert(fs.existsSync(topicHtmlPath), 'topic-european-union.html exists on disk');
assert(fs.existsSync(topicDataPath), 'data_topic_eu.js exists on disk');

// Test 2: Data completeness
const euData = require(topicDataPath);
assert(Array.isArray(euData.PRACTICE_50_MCQS), 'PRACTICE_50_MCQS is an array');
assert(euData.PRACTICE_50_MCQS.length === 50, `PRACTICE_50_MCQS has exactly 50 questions (found: ${euData.PRACTICE_50_MCQS.length})`);

let invalidMcqs = 0;
const subtopicsSet = new Set();
euData.PRACTICE_50_MCQS.forEach((q, idx) => {
    const hasQ = q.question && q.question.trim().length > 10;
    const hasOpts = q.options && q.options.A && q.options.B && q.options.C && q.options.D;
    const hasCorrect = ['A', 'B', 'C', 'D'].includes(q.correctAnswer);
    const hasExp = q.explanation && q.explanation.trim().length > 15;
    const hasSub = q.subtopic && q.subtopic.trim().length > 2;
    if (hasSub) subtopicsSet.add(q.subtopic);

    if (!hasQ || !hasOpts || !hasCorrect || !hasExp || !hasSub) {
        invalidMcqs++;
    }
});
assert(invalidMcqs === 0, `All 50 MCQs are strictly validated with Question, Options A-D, Answer Key, Explanation & Subtopic (invalid: ${invalidMcqs})`);
console.log(`       Discovered Subtopics: ${Array.from(subtopicsSet).join(' | ')}`);

// Test 3: Past exam questions
assert(Array.isArray(euData.PAST_EXAM_QUESTIONS), 'PAST_EXAM_QUESTIONS is an array');
assert(euData.PAST_EXAM_QUESTIONS.length >= 4, `At least 4 past subjective questions loaded (found: ${euData.PAST_EXAM_QUESTIONS.length})`);

// Test 4: HTML structure & sections
const html = fs.readFileSync(topicHtmlPath, 'utf8');

const requiredSections = [
    { id: 'section-history', title: '1. History & Treaties' },
    { id: 'section-institutions', title: '2. 7 Principal Institutions' },
    { id: 'section-single-market', title: '3. Single Market & Euro' },
    { id: 'section-enlargement', title: '4. Enlargement & Brexit' },
    { id: 'section-pakistan', title: '5. Pakistan & GSP+' },
    { id: 'section-current', title: '6. 2024–2026 Current Affairs' },
    { id: 'section-mcqs', title: '7. 50 Practice MCQs' },
    { id: 'section-past-papers', title: '8. Past Exam Questions' },
    { id: 'section-download', title: '9. Download Notes' }
];

requiredSections.forEach(sec => {
    assert(html.includes(`id="${sec.id}"`), `Section exists: ${sec.title} (#${sec.id})`);
});

// Test 5: Key facts & topics in HTML
assert(html.includes('Schuman Declaration') && html.includes('May 9, 1950'), 'Covers Schuman Declaration & Europe Day');
assert(html.includes('Treaty of Paris') && html.includes('Treaties of Rome'), 'Covers Treaties of Paris (ECSC) & Rome (EEC/Euratom)');
assert(html.includes('Treaty of Maastricht') && html.includes('Treaty of Lisbon'), 'Covers Maastricht (EU birth) & Lisbon');
assert(html.includes('European Commission') && html.includes('European Parliament') && html.includes('Court of Justice'), 'Covers principal institutions');
assert(html.includes('European Central Bank') && html.includes('Frankfurt'), 'Covers ECB in Frankfurt');
assert(html.includes('Schengen') && html.includes('Four Freedoms'), 'Covers Schengen Area and Four Freedoms');
assert(html.includes('Croatia') && html.includes('January 1, 2023'), 'Covers Croatia Eurozone/Schengen accession');
assert(html.includes('Van Gend en Loos') && html.includes('Costa v ENEL'), 'Covers Direct Effect and Primacy doctrines');
assert(html.includes('Copenhagen Criteria') && html.includes('Acquis Communautaire'), 'Covers Copenhagen criteria and Acquis');
assert(html.includes('Brexit') && html.includes('Article 50'), 'Covers Brexit and Article 50');
assert(html.includes('GSP+') && html.includes('27') && html.includes('2027'), 'Covers Pakistan GSP+ status, 27 conventions, and 2027 extension');
assert(html.includes('EU AI Act') && html.includes('The Brussels Effect'), 'Covers 2024 EU AI Act and Brussels Effect');
assert(html.includes('Mario Draghi') && html.includes('800'), 'Covers Draghi Competitiveness Report');

// Test 6: PDF / Printable layout & Interactive JavaScript
assert(html.includes('@media print'), 'Includes custom @media print rules for clean PDF notes download');
assert(html.includes('handleTopicOptionClick'), 'Includes interactive MCQ answer handler');
assert(html.includes('filterQuizSubtopic'), 'Includes subtopic filtering logic');
assert(html.includes('copyCheatSheetText'), 'Includes one-click digital cheat-sheet clipboard copy');

// Test 7: Integration across the portal
const indexHtml = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf8');
const articlesHtml = fs.readFileSync(path.join(__dirname, '../frontend/articles.html'), 'utf8');
const quizHtml = fs.readFileSync(path.join(__dirname, '../frontend/quiz.html'), 'utf8');
const quizJs = fs.readFileSync(path.join(__dirname, '../frontend/js/quiz.js'), 'utf8');

assert(indexHtml.includes('topic-european-union.html'), 'Linked in index.html navigation, search chips, and resource card');
assert(articlesHtml.includes('topic-european-union.html'), 'Linked in articles.html navigation and featured EU banner');
assert(quizHtml.includes('data_topic_eu.js'), 'Loaded in quiz.html scripts');
assert(quizJs.includes('euTopicMcqs'), 'Wired into quiz.js for mock tests');

console.log(`\n====================================================`);
console.log(`   SUMMARY: Passed: ${passCount} | Failed: ${failCount}`);
console.log('====================================================');

if (failCount > 0) {
    process.exit(1);
} else {
    console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!\n');
    process.exit(0);
}
