const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('   ONE TOPIC MASTER HUB (UNITED NATIONS) VERIFICATION');
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
const topicHtmlPath = path.join(__dirname, '../frontend/topic-united-nations.html');
const topicDataPath = path.join(__dirname, '../frontend/js/data_topic_un.js');

assert(fs.existsSync(topicHtmlPath), 'topic-united-nations.html exists on disk');
assert(fs.existsSync(topicDataPath), 'data_topic_un.js exists on disk');

// Test 2: Data completeness
const unData = require(topicDataPath);
assert(Array.isArray(unData.PRACTICE_50_MCQS), 'PRACTICE_50_MCQS is an array');
assert(unData.PRACTICE_50_MCQS.length === 50, `PRACTICE_50_MCQS has exactly 50 questions (found: ${unData.PRACTICE_50_MCQS.length})`);

let invalidMcqs = 0;
const subtopicsSet = new Set();
unData.PRACTICE_50_MCQS.forEach((q, idx) => {
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
assert(Array.isArray(unData.PAST_EXAM_QUESTIONS), 'PAST_EXAM_QUESTIONS is an array');
assert(unData.PAST_EXAM_QUESTIONS.length >= 4, `At least 4 past subjective questions loaded (found: ${unData.PAST_EXAM_QUESTIONS.length})`);

// Test 4: HTML structure & 8 mandatory sections
const html = fs.readFileSync(topicHtmlPath, 'utf8');

const requiredSections = [
    { id: 'section-history', title: '1. Introduction & Historical Evolution' },
    { id: 'section-structure', title: '2. Headquarters, Structure & Charter Anatomy' },
    { id: 'section-organs', title: '3. Principal Organs & Specialized Agencies' },
    { id: 'section-facts', title: '4. Important Facts, Chronology & Pakistan at the UN' },
    { id: 'section-current', title: '5. Related Current Affairs (2024–2026)' },
    { id: 'section-mcqs', title: '6. 50 Practice MCQs (Interactive Testing Engine)' },
    { id: 'section-past-papers', title: '7. Previous Examination Questions (CSS & PMS)' },
    { id: 'section-download', title: '8. Downloadable Notes & Rapid Revision Cheat-Sheet' }
];

requiredSections.forEach(sec => {
    assert(html.includes(`id="${sec.id}"`), `Section exists: ${sec.title} (#${sec.id})`);
});

// Test 5: Key topics and analytical elements present in HTML
assert(html.includes('League of Nations') && html.includes('Treaty of Versailles'), 'Covers League of Nations collapse');
assert(html.includes('San Francisco') && html.includes('October 24, 1945'), 'Covers San Francisco UNCIO and UN founding date');
assert(html.includes('Turtle Bay') && html.includes('Rockefeller'), 'Covers Headquarters in Turtle Bay and Rockefeller donation');
assert(html.includes('Article 103') && html.includes('Supremacy Clause'), 'Covers Charter supremacy (Article 103)');
assert(html.includes('Chapter VI') && html.includes('Chapter VII'), 'Covers distinction between Chapter VI (non-binding) and Chapter VII (binding)');
assert(html.includes('Article 51') && html.includes('Article 99'), 'Covers Article 51 (self-defence) and Article 99 (Secretary-General)');
assert(html.includes('General Assembly') && html.includes('Security Council') && html.includes('ECOSOC') && html.includes('ICJ'), 'Covers principal organs (UNGA, UNSC, ECOSOC, ICJ)');
assert(html.includes('WHO') && html.includes('ILO') && html.includes('UNESCO') && html.includes('IMF') && html.includes('World Bank'), 'Covers UN specialized agencies master table');
assert(html.includes('Trygve Lie') && html.includes('Dag Hammarskjöld') && html.includes('Kofi Annan') && html.includes('António Guterres'), 'Covers complete Secretaries-General chronology');
assert(html.includes('September 30, 1947') && html.includes('Zafarullah Khan') && html.includes('2025–2026'), 'Covers Pakistan admission, Sir Zafarullah Khan, and 2025-2026 UNSC term');
assert(html.includes('Summit of the Future') && html.includes('Pact for the Future') && html.includes('Global Digital Compact'), 'Covers 2024 Summit of the Future current affairs');
assert(html.includes('Uniting for Consensus') && html.includes('G4'), 'Covers UNSC reform debate: G4 vs Uniting for Consensus (Pakistan)');
assert(html.includes('Resolution 2728') && html.includes('South Africa v. Israel'), 'Covers Middle East / Gaza resolutions and ICJ proceedings');

// Test 6: PDF / Printable layout & Interactive JavaScript
assert(html.includes('@media print'), 'Includes custom @media print rules for one-click clean PDF notes download');
assert(html.includes('handleTopicOptionClick'), 'Includes interactive MCQ answer handler');
assert(html.includes('filterQuizSubtopic'), 'Includes subtopic filtering logic');
assert(html.includes('copyCheatSheetText'), 'Includes one-click digital cheat-sheet clipboard copy');

// Test 7: Integration in Navigation across site
const indexHtml = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf8');
const articlesHtml = fs.readFileSync(path.join(__dirname, '../frontend/articles.html'), 'utf8');
const quizHtml = fs.readFileSync(path.join(__dirname, '../frontend/quiz.html'), 'utf8');

assert(indexHtml.includes('topic-united-nations.html'), 'Linked in index.html navigation and search chips');
assert(articlesHtml.includes('topic-united-nations.html'), 'Linked in articles.html navigation and featured banner');
assert(quizHtml.includes('data_topic_un.js'), 'Loaded in quiz.html scripts');

console.log(`\n====================================================`);
console.log(`   SUMMARY: Passed: ${passCount} | Failed: ${failCount}`);
console.log('====================================================');

if (failCount > 0) {
    process.exit(1);
} else {
    console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!\n');
    process.exit(0);
}
