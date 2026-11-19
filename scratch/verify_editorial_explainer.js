const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
console.log('--- RUNNING FULL EDITORIAL EXPLAINER VERIFICATION ---');

// 1. Check data_editorial_explainers.js
global.window = {};
require('../frontend/js/data_editorial_explainers.js');
const editorials = window.EDITORIAL_EXPLAINERS_DATA;

console.log(`1. Total editorials loaded: ${editorials.length}`);

let issues = 0;
let totalMcqs = 0;
let totalVocab = 0;

editorials.forEach((ed, idx) => {
    if (!ed.title || !ed.newspaper || !ed.author || !ed.date || !ed.subject) {
        console.error(`Missing metadata in editorial #${idx + 1}`);
        issues++;
    }
    if (!ed.background || ed.background.length < 50) {
        console.error(`Missing or short background in editorial #${idx + 1}`);
        issues++;
    }
    if (!ed.keyArguments || ed.keyArguments.length < 3) {
        console.error(`Insufficient keyArguments in editorial #${idx + 1}`);
        issues++;
    }
    if (!ed.vocabulary || ed.vocabulary.length < 3) {
        console.error(`Insufficient vocabulary in editorial #${idx + 1}`);
        issues++;
    } else {
        totalVocab += ed.vocabulary.length;
    }
    if (!ed.analyticalPoints || !ed.analyticalPoints.theoreticalLens || !ed.analyticalPoints.counterPerspective || !ed.analyticalPoints.examRecommendations) {
        console.error(`Incomplete analyticalPoints in editorial #${idx + 1}`);
        issues++;
    }
    if (!ed.relatedMcqs || ed.relatedMcqs.length < 3) {
        console.error(`Insufficient relatedMcqs in editorial #${idx + 1}`);
        issues++;
    } else {
        totalMcqs += ed.relatedMcqs.length;
        ed.relatedMcqs.forEach((mcq, mIdx) => {
            if (!mcq.question || mcq.options.length !== 4 || typeof mcq.correct !== 'number' || !mcq.explanation) {
                console.error(`Malformed MCQ #${mIdx + 1} in editorial #${idx + 1}`);
                issues++;
            }
        });
    }
});

console.log(`   - Verified Total Vocabulary Words: ${totalVocab}`);
console.log(`   - Verified Total Editorial MCQs: ${totalMcqs}`);

if (issues === 0) {
    console.log('   [OK] All 10 editorials have complete Background, Key Arguments, Vocabulary, Analytical Points, and MCQs!');
}

// 2. Verify all HTML files link to editorial-explainer.html
console.log('\n2. Verifying cross-site navigation links:');
const htmlFiles = [
    'index.html',
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
    if (content.includes('editorial-explainer.html')) {
        console.log(`   [OK] ${f} links to editorial-explainer.html`);
    } else {
        console.error(`   [FAIL] ${f} does not link to editorial-explainer.html`);
        navMissing++;
    }
});

console.log('\n--- VERIFICATION SUMMARY ---');
if (issues === 0 && navMissing === 0) {
    console.log('ALL VERIFICATIONS PASSED 100%! Editorial Explainer is production ready.');
} else {
    console.log(`Failed with ${issues} editorial issues and ${navMissing} nav issues.`);
}
