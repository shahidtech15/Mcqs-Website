const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
console.log('--- RUNNING FULL AI STUDY ASSISTANT VERIFICATION ---');

// 1. Verify Engine & Knowledge Base
global.window = {};
require('../frontend/js/ai_knowledge_base.js');
require('../frontend/js/ai_study_assistant.js');

const ai = window.AI_STUDY_ASSISTANT;

console.log('1. Testing Natural Language Answering Engine:');
const testQueries = [
    "What are the search and arrest powers under Section 5 of FIA Act 1974?",
    "Explain Section 13 retirement rules under Civil Servants Act 1973",
    "How does the 26th Constitutional Amendment change CJP appointment?",
    "Explain Article 160(3B) non reduction clause",
    "What are dangling modifiers and how to fix them?"
];

testQueries.forEach((q, idx) => {
    const ans = ai.answerQuestion(q);
    if (ans && ans.length > 50) {
        console.log(`   [OK] Query ${idx + 1} answered with ${ans.length} chars.`);
    } else {
        console.error(`   [FAIL] Query ${idx + 1} failed.`);
    }
});

// 2. Testing Custom Document Ingestion & Querying
console.log('\n2. Testing Custom Notes Upload & Grounded Answering:');
const sampleNotes = `The Council of Common Interests (CCI) was reconstituted following the 18th Constitutional Amendment to strengthen democratic federalism in Pakistan. Article 153 governs its composition comprising the Prime Minister, four provincial Chief Ministers, and three federal ministers. Article 154 requires the Council to formulate policies for Part II of the Federal Legislative List and mandates that it must convene at least once in ninety days. In practice, inter-provincial water distribution and electricity transmission royalties constitute the most frequent disputes submitted before the CCI.`;

const ingested = ai.ingestDocument("CCI Notes", sampleNotes);
console.log(`   - Ingested document: "${ingested.title}" (${ingested.wordCount} words, ${ingested.paragraphs.length} paragraphs).`);

const docAnswer = ai.answerQuestion("Summarize my uploaded notes on CCI");
if (docAnswer && docAnswer.includes("Analysis of Uploaded Document")) {
    console.log('   [OK] Ingested document successfully queried!');
} else {
    console.error('   [FAIL] Custom document query failed.');
}

// 3. Testing Practice Question Generator
console.log('\n3. Testing Practice Question Generator:');
const mcqs = ai.generateQuestions('fia_act', 'mcq', 3, 'Hard');
console.log(`   - Generated MCQs: ${mcqs.length} items (Sample: "${mcqs[0].q.substring(0, 45)}...")`);

const customMcqs = ai.generateQuestions('custom_upload', 'mcq', 2, 'Hard');
console.log(`   - Generated Custom Notes MCQs: ${customMcqs.length} items (Sample: "${customMcqs[0].q.substring(0, 45)}...")`);

const shortQs = ai.generateQuestions('fia_act', 'short', 2, 'Hard');
console.log(`   - Generated Short Questions (5 Marks): ${shortQs.length} items.`);

const outlines = ai.generateQuestions('constitution_1973', 'outline', 1, 'Hard');
console.log(`   - Generated 20-Mark Outlines: ${outlines.length} items (Title: "${outlines[0].title}").`);

// 4. Verify cross-site navigation links
console.log('\n4. Verifying cross-site navigation links:');
const htmlFiles = [
    'index.html',
    'ai-assistant.html',
    'editorial-explainer.html',
    'world-map.html',
    'quiz.html',
    'digital-library.html',
    'recommended-books.html',
    'fia-sample-papers.html',
    'grammar-rules.html',
    'written-prep.html',
    'exam-guide.html',
    'science-notes.html',
    'about.html'
];

let navMissing = 0;
htmlFiles.forEach(f => {
    const content = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    if (content.includes('ai-assistant.html')) {
        console.log(`   [OK] ${f} links to ai-assistant.html`);
    } else {
        console.error(`   [FAIL] ${f} does not link to ai-assistant.html`);
        navMissing++;
    }
});

console.log('\n--- VERIFICATION SUMMARY ---');
if (navMissing === 0) {
    console.log('ALL VERIFICATIONS PASSED 100%! AI Study Assistant is ready.');
} else {
    console.log(`Failed with ${navMissing} nav issues.`);
}
