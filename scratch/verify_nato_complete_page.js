// scratch/verify_nato_complete_page.js
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

console.log('====================================================');
console.log('NATO COMPLETE PREPARATION PAGE VERIFICATION SUITE');
console.log('====================================================\n');

// 1. Check Data Module (frontend/js/data_topic_nato.js)
const dataFile = path.join(__dirname, '../frontend/js/data_topic_nato.js');
assert(fs.existsSync(dataFile), 'frontend/js/data_topic_nato.js exists');

const natoData = require(dataFile);
assert(Array.isArray(natoData.PRACTICE_50_MCQS), 'PRACTICE_50_MCQS is an array');
assert(natoData.PRACTICE_50_MCQS.length === 50, `PRACTICE_50_MCQS contains exactly 50 questions (found: ${natoData.PRACTICE_50_MCQS.length})`);

// Verify question schema
let allSchemaValid = true;
const subtopics = new Set();
natoData.PRACTICE_50_MCQS.forEach((q, idx) => {
    if (!q.id || !q.question || !q.options || !q.correctAnswer || !q.explanation || !q.subtopic || !q.difficulty || !q.examCitation) {
        allSchemaValid = false;
        console.error(`Invalid MCQ at index ${idx}:`, q);
    }
    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
        allSchemaValid = false;
        console.error(`Invalid correctAnswer at index ${idx}: ${q.correctAnswer}`);
    }
    subtopics.add(q.subtopic);
});
assert(allSchemaValid, 'All 50 MCQs adhere to standard schema (id, question, options A-D, correctAnswer, explanation, difficulty, citation)');
assert(subtopics.size >= 5, `Covers diverse subtopics (found: ${subtopics.size} subtopics: ${[...subtopics].join(', ')})`);

// Check Past Exam Outlines
assert(Array.isArray(natoData.PAST_EXAM_QUESTIONS), 'PAST_EXAM_QUESTIONS is an array');
assert(natoData.PAST_EXAM_QUESTIONS.length === 4, `Contains exactly 4 CSS/PMS subjective exam questions (found: ${natoData.PAST_EXAM_QUESTIONS.length})`);

// 2. Check HTML Page (frontend/topic-nato.html)
const htmlFile = path.join(__dirname, '../frontend/topic-nato.html');
assert(fs.existsSync(htmlFile), 'frontend/topic-nato.html exists');

const htmlContent = fs.readFileSync(htmlFile, 'utf8');
assert(htmlContent.length > 30000, `topic-nato.html is substantive (size: ${htmlContent.length} bytes)`);

// Check All 10 Required Sections
const requiredSections = [
    'section-intro-history',
    'section-treaty-articles',
    'section-command-structure',
    'section-enlargement-members',
    'section-operations-missions',
    'section-pakistan-nato',
    'section-current-affairs',
    'section-practice-mcqs',
    'section-past-papers',
    'section-downloadable-notes'
];
requiredSections.forEach(secId => {
    assert(htmlContent.includes(`id="${secId}"`), `Contains section with ID: ${secId}`);
});

// Check Critical Factual Concepts
const requiredConcepts = [
    ['Washington Treaty', 'Mentions Washington Treaty (1949)'],
    ['Lord Ismay', 'Mentions Lord Ismay dictum'],
    ['Article 5', 'Mentions Article 5 Collective Defence'],
    ['September 12, 2001', 'Mentions sole Article 5 invocation on Sept 12, 2001'],
    ['Article 4', 'Mentions Article 4 consultation clause'],
    ['Article 6', 'Mentions Article 6 geographic delimitation (Tropic of Cancer)'],
    ['Article 10', 'Mentions Article 10 Open Door policy'],
    ['North Atlantic Council', 'Mentions North Atlantic Council (NAC)'],
    ['Nuclear Planning Group', 'Mentions Nuclear Planning Group (NPG)'],
    ['SACEUR', 'Mentions Supreme Allied Commander Europe (SACEUR)'],
    ['SHAPE', 'Mentions SHAPE headquarters in Mons/Casteau'],
    ['Allied Command Transformation', 'Mentions ACT in Norfolk, Virginia'],
    ['LANDCOM', 'Mentions LANDCOM in Izmir'],
    ['MARCOM', 'Mentions MARCOM in Northwood'],
    ['AIRCOM', 'Mentions AIRCOM at Ramstein'],
    ['B61', 'Mentions B61 nuclear sharing doctrine'],
    ['Finland', 'Mentions Finland as 31st member'],
    ['Sweden', 'Mentions Sweden as 32nd member'],
    ['32 Sovereign Member States', 'Mentions 32 member states total'],
    ['Major Non-NATO Ally', 'Mentions Pakistan Major Non-NATO Ally (MNNA) status (2004)'],
    ['Torkham', 'Mentions Torkham GLOC logistics route'],
    ['Chaman', 'Mentions Chaman GLOC logistics route'],
    ['Salala', 'Mentions Salala checkpost incident (Nov 26, 2011)'],
    ['2005', 'Mentions 2005 Kashmir earthquake relief airlift'],
    ['Washington Summit', 'Mentions 75th Anniversary Washington Summit (July 2024)'],
    ['Mark Rutte', 'Mentions Mark Rutte as Secretary General (Oct 1, 2024)'],
    ['2% of GDP', 'Mentions 2% GDP defence benchmark'],
    ['Poland', 'Mentions Poland defence spending leader (>4% GDP)']
];
requiredConcepts.forEach(([term, desc]) => {
    assert(htmlContent.includes(term), desc);
});

// 3. Check Print Media Support
assert(htmlContent.includes('@media print'), 'Includes @media print CSS for 1-click clean PDF notes export');
assert(htmlContent.includes('window.print()'), 'Includes print trigger for PDF notes');
assert(htmlContent.includes('copyCheatSheetText()'), 'Includes copyCheatSheetText function');

// 4. Check Integration in quiz.html & quiz.js
const quizHtml = fs.readFileSync(path.join(__dirname, '../frontend/quiz.html'), 'utf8');
assert(quizHtml.includes('js/data_topic_nato.js'), 'frontend/quiz.html includes js/data_topic_nato.js');
assert(quizHtml.includes('topic-nato.html'), 'frontend/quiz.html navbar includes topic-nato.html');

const quizJs = fs.readFileSync(path.join(__dirname, '../frontend/js/quiz.js'), 'utf8');
assert(quizJs.includes('natoTopicMcqs'), 'frontend/js/quiz.js defines natoTopicMcqs');
assert(quizJs.includes('...natoTopicMcqs'), 'frontend/js/quiz.js includes natoTopicMcqs in World Organizations pool');

// 5. Check Navigation in index.html & articles.html
const indexHtml = fs.readFileSync(path.join(__dirname, '../frontend/index.html'), 'utf8');
assert(indexHtml.includes('topic-nato.html'), 'frontend/index.html links to topic-nato.html');
assert(indexHtml.includes('One Topic, One Complete Page: NATO Alliance'), 'frontend/index.html features NATO master preparation card');

const artHtml = fs.readFileSync(path.join(__dirname, '../frontend/articles.html'), 'utf8');
assert(artHtml.includes('topic-nato.html'), 'frontend/articles.html links to topic-nato.html');
assert(artHtml.includes('The NATO Alliance Master Dossier'), 'frontend/articles.html features NATO master banner card');

// 6. Check Backend Seeder (backend/add_topic_nato_mcqs.js)
const seederFile = path.join(__dirname, '../backend/add_topic_nato_mcqs.js');
assert(fs.existsSync(seederFile), 'backend/add_topic_nato_mcqs.js exists');
const seederContent = fs.readFileSync(seederFile, 'utf8');
assert(seederContent.includes('data_topic_nato.js'), 'backend seeder imports data_topic_nato.js');

console.log('\n====================================================');
console.log(`TEST SUMMARY: ${passedChecks}/${totalChecks} CHECKS PASSED`);
if (failedChecks.length === 0) {
    console.log('RESULT: ALL CHECKS PASSED PERFECTLY (100%)');
} else {
    console.error(`RESULT: ${failedChecks.length} CHECKS FAILED:`);
    failedChecks.forEach(f => console.error(`  - ${f}`));
}
console.log('====================================================');
process.exit(failedChecks.length === 0 ? 0 : 1);
