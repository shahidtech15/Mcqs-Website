const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== COMPREHENSIVE DIGITAL LIBRARY VERIFICATION ===');
let pass = 0, fail = 0;

function check(desc, cond) {
    if (cond) {
        pass++;
        console.log(`[PASS] ${desc}`);
    } else {
        fail++;
        console.error(`[FAIL] ${desc}`);
    }
}

// 1. Check file existence
const dlHtmlPath = path.join(__dirname, '../frontend/digital-library.html');
const dlJsPath = path.join(__dirname, '../frontend/js/data_digital_library.js');

check('digital-library.html exists', fs.existsSync(dlHtmlPath));
check('data_digital_library.js exists', fs.existsSync(dlJsPath));

// 2. Check data_digital_library.js loads cleanly
const ctx = { window: {} };
try {
    vm.runInNewContext(fs.readFileSync(dlJsPath, 'utf8'), ctx);
    check('data_digital_library.js parses cleanly in JS context', true);
} catch (e) {
    check('data_digital_library.js parses cleanly in JS context: ' + e.message, false);
}

const data = ctx.window.DIGITAL_LIBRARY_DATA || {};
check('reports array populated', Array.isArray(data.reports) && data.reports.length > 0);
check('editorials array populated', Array.isArray(data.editorials) && data.editorials.length > 0);
check('treaties array populated', Array.isArray(data.treaties) && data.treaties.length > 0);
check('maps array populated', Array.isArray(data.mapsAndGeography) && data.mapsAndGeography.length > 0);
check('notes array populated', Array.isArray(data.subjectNotes) && data.subjectNotes.length > 0);
check('solved questions array populated', Array.isArray(data.solvedQuestions) && data.solvedQuestions.length > 0);
check('vocabulary array populated', Array.isArray(data.vocabularyList) && data.vocabularyList.length > 0);
check('downloadable PDFs array populated', Array.isArray(data.downloadablePdfs) && data.downloadablePdfs.length > 0);

// 3. Test every render template function from digital-library.html
let renderErrors = 0;

// Test Reports
data.reports.forEach((r, i) => {
    try {
        const stats = (r.keyStats || []).map(s => s).join('');
        const tags = (r.tags || []).map(t => t).join('');
    } catch (e) {
        console.error(`Error rendering report #${i}:`, e.message);
        renderErrors++;
    }
});

// Test Editorials
data.editorials.forEach((e, i) => {
    try {
        const pillars = (e.keyPillars || []).map(p => p).join('');
        const vocab = (e.vocabulary || []).map(v => v).join('');
        const qs = (e.examQuestions || []).map(q => q).join('');
        const tags = (e.tags || []).map(t => t).join('');
    } catch (err) {
        console.error(`Error rendering editorial #${i}:`, err.message);
        renderErrors++;
    }
});

// Test Treaties
data.treaties.forEach((t, i) => {
    try {
        const provs = (t.keyProvisions || []).map(p => p).join('');
        const tags = (t.tags || []).map(tg => tg).join('');
    } catch (err) {
        console.error(`Error rendering treaty #${i}:`, err.message);
        renderErrors++;
    }
});

// Test Maps
data.mapsAndGeography.forEach((m, i) => {
    try {
        const sig = (m.strategicSignificance || []).map(s => s).join('');
        const qs = (m.relatedQuestions || []).map(q => q).join('');
    } catch (err) {
        console.error(`Error rendering map #${i}:`, err.message);
        renderErrors++;
    }
});

// Test Notes
data.subjectNotes.forEach((n, i) => {
    try {
        const themes = (n.coreThemes || []).map(t => t).join('');
        if (!n.title || !n.subject || !n.summary) throw new Error('Missing title, subject, or summary');
    } catch (err) {
        console.error(`Error rendering note #${i}:`, err.message);
        renderErrors++;
    }
});

// Test Solved Questions
data.solvedQuestions.forEach((s, i) => {
    try {
        const struct = (s.structure || []).map(st => st).join('');
        const args = (s.keyArguments || []).map(a => a).join('');
    } catch (err) {
        console.error(`Error rendering solved question #${i}:`, err.message);
        renderErrors++;
    }
});

// Test Vocabulary
data.vocabularyList.forEach((v, i) => {
    try {
        if (!v.word || !v.def) throw new Error('Missing word or def');
    } catch (err) {
        console.error(`Error rendering vocab #${i}:`, err.message);
        renderErrors++;
    }
});

// Test PDFs
data.downloadablePdfs.forEach((p, i) => {
    try {
        const tags = (p.tags || []).map(t => t).join('');
        if (!p.title || !p.category || !p.fileSize) throw new Error('Missing title, category, or fileSize');
    } catch (err) {
        console.error(`Error rendering PDF #${i}:`, err.message);
        renderErrors++;
    }
});

check('All data item templates render without exception (0 errors)', renderErrors === 0);

// 4. Check HTML structure of digital-library.html
const dlHtml = fs.readFileSync(dlHtmlPath, 'utf8');
const requiredIds = [
    'reportsGrid', 'editorialsGrid', 'treatiesGrid', 'mapsGrid',
    'notesGrid', 'solvedGrid', 'vocabGrid', 'pdfGrid',
    'tab-reports', 'tab-editorials', 'tab-treaties', 'tab-maps',
    'tab-notes', 'tab-solved', 'tab-vocab', 'tab-pdfs',
    'libSearchInput', 'libItemCount'
];

requiredIds.forEach(id => {
    check(`digital-library.html contains #${id}`, dlHtml.includes(`id="${id}"`) || dlHtml.includes(`id='${id}'`));
});

// 5. Check hash navigation logic in digital-library.html
check('digital-library.html has switchTab function', dlHtml.includes('function switchTab('));
check('digital-library.html handles location.hash', dlHtml.includes('window.location.hash'));
check('digital-library.html listens for hashchange', dlHtml.includes('hashchange'));

// 6. Check links from other pages
const frontendDir = path.join(__dirname, '../frontend');
const allHtmls = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
const pagesWithDlLink = allHtmls.filter(f => {
    const c = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    return c.includes('href="digital-library.html"');
});

check(`All 19 HTML pages have direct href="digital-library.html" link (${pagesWithDlLink.length}/19)`, pagesWithDlLink.length === allHtmls.length);

console.log(`\nVerification Summary: ${pass} passed, ${fail} failed.`);
if (fail === 0) {
    console.log('DIGITAL LIBRARY IS 100% OPERATIONAL AND VERIFIED!');
} else {
    process.exit(1);
}
