const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
console.log('--- RUNNING FULL SYSTEM VERIFICATION ---');

// 1. Check Data Files
global.window = {};
require('../frontend/js/data_digital_library.js');
require('../frontend/js/data_recommended_books.js');

const libData = window.DIGITAL_LIBRARY_DATA;
const booksData = window.RECOMMENDED_BOOKS_DATA;

console.log('1. Digital Library Data:');
console.log('   - Reports:', libData.reports.length);
console.log('   - Editorials:', libData.editorials.length);
console.log('   - Treaties:', libData.treaties.length);
console.log('   - Maps & Geography:', libData.mapsAndGeography.length);
console.log('   - Subject Notes:', libData.subjectNotes.length);
console.log('   - Solved Questions:', libData.solvedQuestions.length);
console.log('   - Vocabulary Words:', libData.vocabularyList.length);
console.log('   - Downloadable PDFs:', libData.downloadablePdfs.length);

console.log('\n2. Recommended Books Data:');
console.log('   - Total Books:', booksData.length);
const exams = [...new Set(booksData.map(b => b.exam))];
console.log('   - Exams Covered:', exams);

// 3. Verify Downloadable PDFs physically on disk
console.log('\n3. Verifying Downloadable PDF files on disk:');
let missingPdfs = 0;
libData.downloadablePdfs.forEach(pdf => {
    const pdfDiskPath = path.join(frontendDir, pdf.filePath);
    if (fs.existsSync(pdfDiskPath)) {
        const stats = fs.statSync(pdfDiskPath);
        console.log(`   [OK] ${pdf.fileName} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    } else {
        console.error(`   [MISSING] ${pdf.fileName} at ${pdfDiskPath}`);
        missingPdfs++;
    }
});

// 4. Verify HTML files exist and link to each other
console.log('\n4. Verifying HTML files & navigation links:');
const htmlFiles = [
    'index.html',
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

let navIssues = 0;
htmlFiles.forEach(f => {
    const p = path.join(frontendDir, f);
    if (!fs.existsSync(p)) {
        console.error(`   [FAIL] File missing: ${f}`);
        navIssues++;
        return;
    }
    const content = fs.readFileSync(p, 'utf8');
    const hasDigitalLib = content.includes('digital-library.html');
    const hasRecBooks = content.includes('recommended-books.html');

    if (hasDigitalLib && hasRecBooks) {
        console.log(`   [OK] ${f} links to both digital-library.html & recommended-books.html`);
    } else {
        console.warn(`   [WARN] ${f}: digital-library=${hasDigitalLib}, recommended-books=${hasRecBooks}`);
        navIssues++;
    }
});

console.log('\n--- VERIFICATION SUMMARY ---');
if (missingPdfs === 0 && navIssues === 0) {
    console.log('ALL CHECKS PASSED PERFECTLY! System is 100% ready.');
} else {
    console.log(`Completed with ${missingPdfs} missing PDFs and ${navIssues} navigation issues.`);
}
