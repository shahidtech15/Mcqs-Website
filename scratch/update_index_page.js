const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../frontend/index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// 1. Primary nav links in index.html
const oldPrimaryNav = `<nav class="nav-links">
                <a href="index.html" class="active">Home</a>
                <a href="#categories">Categories</a>
                <a href="#interesting-facts">Interesting Facts</a>
                <a href="science-notes.html">Science Notes</a>
                <a href="quiz.html">Take a Quiz</a>
                <a href="fia-sample-papers.html">FIA Sample Papers</a>
                <a href="grammar-rules.html">Grammar Rules</a>
                <a href="written-prep.html">Written Prep</a>
                <a href="exam-guide.html">Exam Guide</a>
                <a href="admin.html" class="admin-link">Admin Panel</a>
            </nav>`;

const newPrimaryNav = `<nav class="nav-links">
                <a href="index.html" class="active">Home</a>
                <a href="#categories">Categories</a>
                <a href="quiz.html">Take a Quiz</a>
                <a href="digital-library.html">Digital Library</a>
                <a href="recommended-books.html">Recommended Books</a>
                <a href="fia-sample-papers.html">FIA Sample Papers</a>
                <a href="grammar-rules.html">Grammar Rules</a>
                <a href="written-prep.html">Written Prep</a>
                <a href="exam-guide.html">Exam Guide</a>
                <a href="science-notes.html">Science Notes</a>
                <a href="admin.html" class="admin-link">Admin Panel</a>
            </nav>`;

if (content.includes(oldPrimaryNav)) {
    content = content.replace(oldPrimaryNav, newPrimaryNav);
    console.log('Updated primary nav in index.html');
} else {
    console.log('Warning: oldPrimaryNav not matched exactly in index.html');
}

// 2. Secondary nav links in index.html
const targetSecEntry = `<li><a href="fia-sample-papers.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-file-shield"></i> FIA AD 20 Sample Papers</a></li>`;
const newSecEntries = `<li><a href="digital-library.html" style="font-weight: 700; color: #10b981;"><i class="fa-solid fa-book-bookmark"></i> Digital Library &amp; Reports</a></li>
                <li><a href="recommended-books.html" style="font-weight: 700; color: #6366f1;"><i class="fa-solid fa-book"></i> Recommended Books</a></li>
                ${targetSecEntry}`;

if (content.includes(targetSecEntry)) {
    content = content.replace(targetSecEntry, newSecEntries);
    console.log('Updated secondary nav in index.html');
} else {
    console.log('Warning: targetSecEntry not found in index.html');
}

// 3. Hero suggestions chips in index.html
const targetHeroChip = `<button type="button" class="search-chip" onclick="window.location.href='fia-sample-papers.html'" style="font-weight:600; border-color:#0284c7; color:#0284c7;"><i class="fa-solid fa-file-shield"></i> FIA AD 20 Sample Papers (2,000 MCQs)</button>`;
const newHeroChips = `<button type="button" class="search-chip" onclick="window.location.href='digital-library.html'" style="font-weight:600; border-color:#10b981; color:#10b981;"><i class="fa-solid fa-book-bookmark"></i> Digital Library &amp; Reports</button>
                    <button type="button" class="search-chip" onclick="window.location.href='recommended-books.html'" style="font-weight:600; border-color:#6366f1; color:#6366f1;"><i class="fa-solid fa-book"></i> Recommended Books by Exam</button>
                    ${targetHeroChip}`;

if (content.includes(targetHeroChip)) {
    content = content.replace(targetHeroChip, newHeroChips);
    console.log('Updated hero suggestions chips in index.html');
} else {
    console.log('Warning: targetHeroChip not found in index.html');
}

// 4. Feature cards in study-resources section
const targetStudyGrid = `<div class="resources-grid">`;
const newFeatureCards = `<div class="resources-grid">
                <!-- Digital Library Card -->
                <div class="resource-card" style="border: 1px solid rgba(16, 185, 129, 0.4); background: linear-gradient(135deg, rgba(16, 185, 129, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(16, 185, 129, 0.2); color: #10b981;"><i class="fa-solid fa-book-bookmark"></i></div>
                    <div class="resource-content">
                        <h3>📚 Digital Library &amp; Academic Repository</h3>
                        <p>Complete civil service research portal: Official Government Reports (Economic Survey 2023–24, SBP, UNDP, IPCC), Dawn &amp; Foreign Affairs Editorial Summaries, International Treaties (UNCLOS, IWT, NPT), Strategic Chokepoints &amp; Maps, High-Yield CSS Vocabulary Bank, and Solved 20-Mark Analytical Answers.</p>
                        <div class="resource-meta"><span style="color:#10b981;"><i class="fa-solid fa-graduation-cap"></i> CSS / PMS / FIA Standard</span> <span>⭐ Reports &amp; Treaties</span></div>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <a href="digital-library.html" class="resource-btn" style="background: #10b981; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-book-open"></i> Enter Digital Library</a>
                            <a href="digital-library.html#tab-pdfs" class="resource-btn" style="background: #047857; color: #ffffff;"><i class="fa-solid fa-download"></i> 9 Downloadable PDFs</a>
                        </div>
                    </div>
                </div>

                <!-- Recommended Books by Examination Card -->
                <div class="resource-card" style="border: 1px solid rgba(99, 102, 241, 0.4); background: linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(99, 102, 241, 0.2); color: #6366f1;"><i class="fa-solid fa-book"></i></div>
                    <div class="resource-content">
                        <h3>📖 Recommended Books by Examination</h3>
                        <p>Curated reading roadmap for 6 competitive streams (CSS, PMS, FIA Assistant Director, NAB, Assistant Audit Officer, and Judicial Services). 22 syllabus-mapped authoritative textbooks, statutory bare acts, examiner advice, and the 3-Pass Reading Strategy to prevent book hoarding.</p>
                        <div class="resource-meta"><span style="color:#6366f1;"><i class="fa-solid fa-layer-group"></i> 22 Books Across 6 Exams</span> <span>⭐ Examiner Advised</span></div>
                        <a href="recommended-books.html" class="resource-btn" style="background: #6366f1; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-book-open-reader"></i> View Recommended Books</a>
                    </div>
                </div>`;

if (content.includes(targetStudyGrid)) {
    content = content.replace(targetStudyGrid, newFeatureCards);
    console.log('Updated study-resources grid in index.html');
} else {
    console.log('Warning: targetStudyGrid not found in index.html');
}

// 5. Script tags at bottom of index.html
const targetScripts = `<script src="js/data_fia_sample_papers.js"></script>`;
const newScripts = `<script src="js/data_digital_library.js"></script>
    <script src="js/data_recommended_books.js"></script>
    ${targetScripts}`;

if (content.includes(targetScripts) && !content.includes('data_digital_library.js')) {
    content = content.replace(targetScripts, newScripts);
    console.log('Added data_digital_library.js & data_recommended_books.js to index.html scripts');
}

fs.writeFileSync(indexPath, content, 'utf8');
console.log('index.html updated successfully!');
