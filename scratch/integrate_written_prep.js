const fs = require('fs');

console.log('--- 1. Updating index.html ---');
let indexHtml = fs.readFileSync('frontend/index.html', 'utf8');

// Add written-prep.html to primary navbar in index.html
if (!indexHtml.includes('href="written-prep.html"')) {
  indexHtml = indexHtml.replace(
    '<a href="quiz.html">Take a Quiz</a>\n                <a href="exam-guide.html">Exam Guide</a>',
    '<a href="quiz.html">Take a Quiz</a>\n                <a href="written-prep.html">Written Prep</a>\n                <a href="exam-guide.html">Exam Guide</a>'
  );
}

// Add written-prep.html & How to Write to secondary navbar in index.html
if (!indexHtml.includes('href="written-prep.html"')) {
  indexHtml = indexHtml.replace(
    '<li><a href="exam-guide.html" style="font-weight: 700; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>',
    '<li><a href="written-prep.html" style="font-weight: 700; color: #38bdf8;"><i class="fa-solid fa-pen-nib"></i> Essay &amp; Written Prep</a></li>\n                <li><a href="exam-guide.html" style="font-weight: 700; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>'
  );
}

// Add search chip in hero of index.html
if (!indexHtml.includes('#written-exam-prep')) {
  indexHtml = indexHtml.replace(
    '<button type="button" class="search-chip" onclick="window.location.href=\'#exam-preparation-guide\'"',
    '<button type="button" class="search-chip" onclick="window.location.href=\'#written-exam-prep\'" style="font-weight:600; border-color:#38bdf8; color:#38bdf8;"><i class="fa-solid fa-pen-nib"></i> Essay &amp; Written Prep (CSS/PMS)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href=\'#exam-preparation-guide\'"'
  );
}

// Add written-exam-prep section before study-resources in index.html
if (!indexHtml.includes('id="written-exam-prep"')) {
  const targetStudy = '    <!-- Study Resources Section -->';
  const writtenSection = `    <!-- Essay Writing & Written Examination Preparation Section -->
    <section id="written-exam-prep" class="written-prep-section">
        <div class="container">
            <div class="section-title">
                <h2>✍️ Essay Writing &amp; Written Exam Preparation</h2>
                <div class="underline"></div>
                <p class="section-subtitle">
                    Essential written preparation for CSS, PMS and CCE candidates: Essay Outlines, Thesis Statements, Funnel Introductions, P.E.E.L. Argumentation, Précis Writing, and 20-Mark Analytical Answers.
                </p>
            </div>

            <div class="guide-sub-grid" style="margin-bottom: 30px;">
                <div class="guide-card-inner" style="border-top: 4px solid #2563eb;">
                    <h3><i class="fa-solid fa-list-ol" style="color: #2563eb;"></i> Essay Outlines &amp; Thesis Statements</h3>
                    <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-dark); margin-bottom: 14px;">
                        Master multi-tier hierarchical outlines (Roman numerals, primary claims, counter-perspectives) and formulate definitive thesis statements that command examiner respect.
                    </p>
                    <a href="written-prep.html#sec-outlines" class="btn-exam-outline" style="border-color:#2563eb; color:#2563eb;">
                        <i class="fa-solid fa-arrow-right"></i> View Outlines &amp; Models
                    </a>
                </div>

                <div class="guide-card-inner" style="border-top: 4px solid #10b981;">
                    <h3><i class="fa-solid fa-layer-group" style="color: #10b981;"></i> Argument Development (P.E.E.L.)</h3>
                    <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-dark); margin-bottom: 14px;">
                        Learn the Point, Explanation, Evidence &amp; Link (P.E.E.L.) paragraphing framework to transform unstructured facts into rigorous, high-scoring academic arguments.
                    </p>
                    <a href="written-prep.html#sec-argumentation" class="btn-exam-outline" style="border-color:#10b981; color:#10b981;">
                        <i class="fa-solid fa-arrow-right"></i> Learn P.E.E.L. Method
                    </a>
                </div>

                <div class="guide-card-inner" style="border-top: 4px solid #ec4899;">
                    <h3><i class="fa-solid fa-compress" style="color: #ec4899;"></i> Précis Writing &amp; Comprehension</h3>
                    <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-dark); margin-bottom: 14px;">
                        Master the 1/3rd word count rule, third-person indirect speech, title formulation, and answering comprehension questions in your own original words.
                    </p>
                    <a href="written-prep.html#sec-precis" class="btn-exam-outline" style="border-color:#ec4899; color:#ec4899;">
                        <i class="fa-solid fa-arrow-right"></i> Solved Précis Exercises
                    </a>
                </div>

                <div class="guide-card-inner" style="border-top: 4px solid #0d9488;">
                    <h3><i class="fa-solid fa-landmark" style="color: #0d9488;"></i> 20-Mark Analytical Model Answers</h3>
                    <p style="font-size: 0.92rem; line-height: 1.6; color: var(--text-dark); margin-bottom: 14px;">
                        Exemplary full-length model answers for Pakistan Affairs and Current Affairs, featuring analytical headings, constitutional articles, and policy recommendations.
                    </p>
                    <a href="written-prep.html#sec-pak-affairs" class="btn-exam-outline" style="border-color:#0d9488; color:#0d9488;">
                        <i class="fa-solid fa-arrow-right"></i> Read 20-Mark Models
                    </a>
                </div>
            </div>

            <div style="text-align: center; margin-top: 25px;">
                <a href="written-prep.html" class="facts-cta-btn" style="background: linear-gradient(135deg, #1e1b4b, #312e81);">
                    <i class="fa-solid fa-pen-nib"></i> Open Complete Essay &amp; Written Examination Portal
                </a>
            </div>
        </div>
    </section>

    <!-- Study Resources Section -->`;

  indexHtml = indexHtml.replace(targetStudy, writtenSection);
}

fs.writeFileSync('frontend/index.html', indexHtml, 'utf8');
console.log('index.html updated successfully.');

console.log('--- 2. Updating quiz.html ---');
let quizHtml = fs.readFileSync('frontend/quiz.html', 'utf8');
if (!quizHtml.includes('href="written-prep.html"')) {
  quizHtml = quizHtml.replace(
    '<a href="exam-guide.html">Exam Guide</a>',
    '<a href="written-prep.html">Written Prep</a>\n                <a href="exam-guide.html">Exam Guide</a>'
  );
  quizHtml = quizHtml.replace(
    '<li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>',
    '<li><a href="written-prep.html" style="font-weight: 600; color: #38bdf8;"><i class="fa-solid fa-pen-nib"></i> Written Prep</a></li>\n                <li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>'
  );
  fs.writeFileSync('frontend/quiz.html', quizHtml, 'utf8');
  console.log('quiz.html updated.');
}

console.log('--- 3. Updating science-notes.html ---');
let sciHtml = fs.readFileSync('frontend/science-notes.html', 'utf8');
if (!sciHtml.includes('href="written-prep.html"')) {
  sciHtml = sciHtml.replace(
    '<a href="exam-guide.html">Exam Guide</a>',
    '<a href="written-prep.html">Written Prep</a>\n                <a href="exam-guide.html">Exam Guide</a>'
  );
  sciHtml = sciHtml.replace(
    '<li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>',
    '<li><a href="written-prep.html" style="font-weight: 600; color: #38bdf8;"><i class="fa-solid fa-pen-nib"></i> Written Prep</a></li>\n                <li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>'
  );
  fs.writeFileSync('frontend/science-notes.html', sciHtml, 'utf8');
  console.log('science-notes.html updated.');
}

console.log('--- 4. Updating about.html ---');
let aboutHtml = fs.readFileSync('frontend/about.html', 'utf8');
if (!aboutHtml.includes('href="written-prep.html"')) {
  aboutHtml = aboutHtml.replace(
    '<a href="exam-guide.html">Exam Guide</a>',
    '<a href="written-prep.html">Written Prep</a>\n                <a href="exam-guide.html">Exam Guide</a>'
  );
  aboutHtml = aboutHtml.replace(
    '<li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>',
    '<li><a href="written-prep.html" style="font-weight: 600; color: #38bdf8;"><i class="fa-solid fa-pen-nib"></i> Written Prep</a></li>\n                <li><a href="exam-guide.html" style="font-weight: 600; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>'
  );
  fs.writeFileSync('frontend/about.html', aboutHtml, 'utf8');
  console.log('about.html updated.');
}
