const fs = require('fs');
let html = fs.readFileSync('frontend/index.html', 'utf8');

// 1. Add script tag if not present
if (!html.includes('data_synonyms_antonyms.js')) {
  const targetScript = '<script src="js/app.js"></script>';
  const replacementScript = '<script src="js/data_synonyms_antonyms.js"></script>\r\n    <script src="js/app.js"></script>';
  if (html.includes(targetScript)) {
    html = html.replace(targetScript, replacementScript);
    console.log('Added data_synonyms_antonyms.js script to index.html');
  }
}

// 2. Add resource cards for 2,000 Synonyms and 2,000 Antonyms
const targetCard = `<div class="resource-card" style="border: 1px solid rgba(2, 132, 199, 0.4); background: linear-gradient(135deg, rgba(2, 132, 199, 0.05), rgba(15, 23, 42, 0.6));">`;

const newCards = `                <!-- 2,000 Synonyms Bank -->
                <div class="resource-card" style="border: 1px solid rgba(16, 185, 129, 0.4); background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(16, 185, 129, 0.2); color: #10b981;"><i class="fa-solid fa-spell-check"></i></div>
                    <div class="resource-content">
                        <h3>2,000 High-Yield English Synonyms Bank</h3>
                        <p>Comprehensive competitive vocabulary bank: 2,000 distinct academic headwords with parts of speech, dictionary definitions, primary &amp; alternative synonyms, and contextual example sentences targeting CSS, PMS, FPSC, PPSC, NTS, and GRE standards.</p>
                        <div class="resource-meta"><span style="color:#10b981;"><i class="fa-solid fa-list-check"></i> 2,000 MCQs</span> <span>⭐ CSS / PMS Standard</span></div>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <a href="quiz.html?category=English%20Synonyms&limit=20&diff=Mixed" class="resource-btn" style="background: #10b981; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-play"></i> Quick 20 Mock Test</a>
                            <a href="quiz.html?category=English%20Synonyms&limit=100&diff=Mixed" class="resource-btn" style="background: #059669; color: #ffffff;"><i class="fa-solid fa-stopwatch"></i> Full 100 Mock Test</a>
                            <a href="digital-library.html" class="resource-btn" style="background: #065f46; color: #ffffff;"><i class="fa-solid fa-book"></i> Browse Dictionary</a>
                        </div>
                    </div>
                </div>

                <!-- 2,000 Antonyms Bank -->
                <div class="resource-card" style="border: 1px solid rgba(139, 92, 246, 0.4); background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(139, 92, 246, 0.2); color: #8b5cf6;"><i class="fa-solid fa-arrows-split-up-and-left"></i></div>
                    <div class="resource-content">
                        <h3>2,000 High-Yield English Antonyms Bank</h3>
                        <p>2,000 high-yield antonym MCQs with rigorous contrasting distractors, comprehensive etymological explanations, antonym clusters, and exam-grade sentences to master high-frequency competitive exam opposites.</p>
                        <div class="resource-meta"><span style="color:#8b5cf6;"><i class="fa-solid fa-list-check"></i> 2,000 MCQs</span> <span>⭐ High-Frequency Exam Bank</span></div>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <a href="quiz.html?category=English%20Antonyms&limit=20&diff=Mixed" class="resource-btn" style="background: #8b5cf6; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-play"></i> Quick 20 Mock Test</a>
                            <a href="quiz.html?category=English%20Antonyms&limit=100&diff=Mixed" class="resource-btn" style="background: #7c3aed; color: #ffffff;"><i class="fa-solid fa-stopwatch"></i> Full 100 Mock Test</a>
                        </div>
                    </div>
                </div>

` + targetCard;

if (!html.includes('2,000 High-Yield English Synonyms Bank')) {
  if (html.includes(targetCard)) {
    html = html.replace(targetCard, newCards);
    console.log('Added 2,000 Synonyms and 2,000 Antonyms cards to index.html');
  }
}

fs.writeFileSync('frontend/index.html', html, 'utf8');
console.log('frontend/index.html updated successfully!');
