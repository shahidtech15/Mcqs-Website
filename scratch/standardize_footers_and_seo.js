const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '..', 'frontend');

// 1. Update written-prep.html footer
const writtenPrepPath = path.join(frontendDir, 'written-prep.html');
let wpContent = fs.readFileSync(writtenPrepPath, 'utf8');

const wpOldFooter = `    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2026 MCQs Portal. All rights reserved. | Written Examination &amp; Essay Preparation Portal</p>
            </div>
        </div>
    </footer>`;

const wpNewFooter = `    <!-- Professional Footer with Mandatory Policy Links -->
    <footer style="background: #0f172a; color: #94a3b8; padding: 45px 20px 25px; margin-top: 60px; border-top: 1px solid #1e293b;">
        <div class="container" style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; margin-bottom: 30px;">
            <div>
                <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 12px; font-family: 'Outfit', sans-serif;"><i class="fas fa-graduation-cap" style="color:#f59e0b; margin-right:8px;"></i>CSS Prep Central</h4>
                <p style="font-size: 0.88rem; line-height: 1.6; color:#94a3b8;">Written Examination &amp; Essay Preparation Wing. Providing model solved essays, structured outlines, and academic guidance for civil service examinations.</p>
            </div>
            <div>
                <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 12px; font-family: 'Outfit', sans-serif;">Master Essay Portals</h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2;">
                    <li><a href="international-relations-essays.html" style="color: #cbd5e1; text-decoration: none;">12 IR &amp; Geopolitics Essays</a></li>
                    <li><a href="css-essays-2026.html" style="color: #cbd5e1; text-decoration: none;">CSS 2026 Solved Essays (10)</a></li>
                    <li><a href="cce-essays-2025.html" style="color: #cbd5e1; text-decoration: none;">SPSC CCE 2025 Solved Essays (8)</a></li>
                    <li><a href="upsc-essays-2023.html" style="color: #cbd5e1; text-decoration: none;">UPSC CSE 2023 Solved Papers (8)</a></li>
                    <li><a href="essay-russia-ukraine-war.html" style="color: #cbd5e1; text-decoration: none;">Russia-Ukraine War Monograph</a></li>
                </ul>
            </div>
            <div>
                <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 12px; font-family: 'Outfit', sans-serif;">Legal &amp; Trust</h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2;">
                    <li><a href="privacy.html" style="color: #60a5fa; font-weight:600; text-decoration: none;">Privacy Policy</a></li>
                    <li><a href="terms.html" style="color: #cbd5e1; text-decoration: none;">Terms of Service</a></li>
                    <li><a href="disclaimer.html" style="color: #f87171; font-weight:600; text-decoration: none;">Official Disclaimer</a></li>
                    <li><a href="about.html" style="color: #cbd5e1; text-decoration: none;">About Us &amp; Standards</a></li>
                    <li><a href="contact.html" style="color: #cbd5e1; text-decoration: none;">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div style="max-width: 1200px; margin: 0 auto; padding-top: 20px; border-top: 1px solid #1e293b; text-align: center; font-size: 0.82rem; color: #64748b;">
            <p>&copy; 2026 CSS Prep Central. All rights reserved. Disclaimer: Independent educational resource not affiliated with FPSC, SPSC, or any government authority.</p>
        </div>
    </footer>`;

if (wpContent.includes(wpOldFooter)) {
  wpContent = wpContent.replace(wpOldFooter, wpNewFooter);
  fs.writeFileSync(writtenPrepPath, wpContent, 'utf8');
  console.log('Updated written-prep.html footer.');
}

// 2. Update recruitment-prep.html footer
const recPath = path.join(frontendDir, 'recruitment-prep.html');
let recContent = fs.readFileSync(recPath, 'utf8');

const recFooterTarget = `<div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="written-prep.html">Written Prep Hub</a></li>
                    <li><a href="digital-library.html">Digital Library</a></li>
                    <li><a href="acts-rules.html">Acts & Laws</a></li>
                    <li><a href="articles.html">Current Affairs</a></li>
                </ul>
            </div>`;

const recFooterReplacement = `<div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="written-prep.html">Written Prep Hub</a></li>
                    <li><a href="digital-library.html">Digital Library</a></li>
                    <li><a href="scholarships.html">Scholarships</a></li>
                    <li><a href="quiz.html">Mock Quizzes</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Legal &amp; Trust</h4>
                <ul>
                    <li><a href="privacy.html" style="color: #60a5fa; font-weight:600;">Privacy Policy</a></li>
                    <li><a href="terms.html">Terms of Service</a></li>
                    <li><a href="disclaimer.html" style="color: #f87171; font-weight:600;">Disclaimer</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>`;

if (recContent.includes(recFooterTarget)) {
  recContent = recContent.replace(recFooterTarget, recFooterReplacement);
  fs.writeFileSync(recPath, recContent, 'utf8');
  console.log('Updated recruitment-prep.html footer.');
}

// 3. Update scholarships.html footer
const schPath = path.join(frontendDir, 'scholarships.html');
let schContent = fs.readFileSync(schPath, 'utf8');

const schFooterTarget = `<div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="written-prep.html">Written Prep Hub</a></li>
                    <li><a href="digital-library.html">Digital Library</a></li>
                    <li><a href="acts-rules.html">Acts & Laws</a></li>
                    <li><a href="articles.html">Current Affairs</a></li>
                </ul>
            </div>`;

if (schContent.includes(schFooterTarget)) {
  schContent = schContent.replace(schFooterTarget, recFooterReplacement);
  fs.writeFileSync(schPath, schContent, 'utf8');
  console.log('Updated scholarships.html footer.');
}

console.log('Finished updating footers.');
