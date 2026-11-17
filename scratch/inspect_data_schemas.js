const fs = require('fs');
const path = require('path');
const vm = require('vm');

const js = fs.readFileSync(path.join(__dirname, '../frontend/js/data_digital_library.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(js, sandbox);
const data = sandbox.window.DIGITAL_LIBRARY_DATA;

console.log('=== TREATIES ===');
data.treaties.forEach((t, i) => {
    console.log(`Treaty ${i} (${t.title}): keys =`, Object.keys(t));
});

console.log('=== MAPS ===');
data.mapsAndGeography.forEach((m, i) => {
    console.log(`Map ${i} (${m.title}): keys =`, Object.keys(m));
    if (m.keyItems) {
        console.log(`  keyItems[0] keys =`, Object.keys(m.keyItems[0]));
    }
});

console.log('=== SOLVED QUESTIONS ===');
data.solvedQuestions.forEach((q, i) => {
    console.log(`Question ${i} (${q.subject}): keys =`, Object.keys(q));
});

console.log('=== VOCABULARY ===');
data.vocabularyList.forEach((v, i) => {
    console.log(`Vocab ${i} (${v.word}): keys =`, Object.keys(v));
});

console.log('=== SUBJECT NOTES ===');
data.subjectNotes.forEach((n, i) => {
    console.log(`Note ${i} (${n.title}): keys =`, Object.keys(n));
});

console.log('=== DOWNLOADABLE PDFS ===');
data.downloadablePdfs.forEach((p, i) => {
    console.log(`PDF ${i} (${p.title}): keys =`, Object.keys(p));
});
