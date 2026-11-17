const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'frontend', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// 1. Upgrade Index Head: Title, Description, Canonical, Open Graph, Schema
const oldHeadTarget = `<meta name="description"
        content="PakMCQs Clone - Your ultimate resource for academic and competitive exam preparations.">
    <title>MCQs Portal | Find Top Questions</title>`;

const newHeadContent = `<meta name="description"
        content="CSS Prep Central & MCQs Portal: Premier academic repository for CSS, PMS, SPSC, FPSC, UPSC exams, recruitment preparation (FIA, Sindh Police, AAO), comprehensive solved model essays, verified question banks, and higher education scholarships.">
    <meta name="keywords" content="CSS Exam Preparation, PMS Preparation, SPSC CCE 2025, FIA Test Prep, Sindh Police Jobs, Master Solved Essays, General Knowledge MCQs, International Relations Essays, Fulbright Scholarship, HEC Tests">
    <title>CSS Prep Central &amp; MCQs Portal | Competitive Exam Prep, Solved Essays &amp; Recruitment Hub</title>
    <link rel="canonical" href="https://cssprepcentral.com/">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://cssprepcentral.com/">
    <meta property="og:title" content="CSS Prep Central &amp; MCQs Portal | Competitive Exam Preparation &amp; Solved Essays">
    <meta property="og:description" content="Free comprehensive repository for CSS, PMS, SPSC, FPSC competitive exams, solved model essays, recruitment guides, and international scholarships.">
    <meta property="og:image" content="https://cssprepcentral.com/img/logo.png">
    <meta property="og:site_name" content="CSS Prep Central">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://cssprepcentral.com/">
    <meta name="twitter:title" content="CSS Prep Central &amp; MCQs Portal">
    <meta name="twitter:description" content="Premier academic repository for civil service examinations, solved essays, and recruitment test preparation.">
    <meta name="twitter:image" content="https://cssprepcentral.com/img/logo.png">

    <!-- JSON-LD Structured Data (Schema.org) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://cssprepcentral.com/#website",
          "url": "https://cssprepcentral.com/",
          "name": "CSS Prep Central & MCQs Portal",
          "description": "Comprehensive academic portal for civil service exam preparation, solved essays, and recruitment testing.",
          "inLanguage": "en-US"
        },
        {
          "@type": "EducationalOrganization",
          "@id": "https://cssprepcentral.com/#organization",
          "name": "CSS Prep Central",
          "url": "https://cssprepcentral.com/",
          "logo": "https://cssprepcentral.com/img/logo.png",
          "description": "Independent educational initiative providing free open-access competitive examination guidance, research notes, and past paper analysis."
        }
      ]
    }
    </script>`;

indexContent = indexContent.replace(oldHeadTarget, newHeadContent);

// 2. Upgrade Index Footer
const oldFooterTarget = `    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2026 MCQs Portal. All rights reserved.</p>
            </div>
        </div>
    </footer>`;

const newFooterContent = `    <!-- Professional Footer with Mandatory AdSense & Trust Disclosures -->
    <footer style="background: #0f172a; color: #94a3b8; padding: 50px 20px 30px; margin-top: 60px; border-top: 1px solid #1e293b;">
        <div class="container" style="max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 36px; margin-bottom: 36px;">
            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-graduation-cap" style="color: #f59e0b; margin-right: 8px;"></i>CSS Prep Central
                </h4>
                <p style="font-size: 0.88rem; line-height: 1.65; color: #94a3b8;">
                    Pakistan's premier open-access repository for civil services preparation, public service commissions, recruitment test syllabi, verified question banks, and international higher education scholarships.
                </p>
                <div style="display: flex; gap: 12px; margin-top: 16px;">
                    <a href="about.html" style="color: #60a5fa; font-size: 0.85rem; font-weight: 600; text-decoration: none;"><i class="fas fa-info-circle"></i> Read Our Mission</a>
                </div>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-book-open" style="color: #3b82f6; margin-right: 8px;"></i>Academic Portals
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="written-prep.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>Written Examination Hub</a></li>
                    <li><a href="recruitment-prep.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>Recruitment Hub (FIA, Sindh Police)</a></li>
                    <li><a href="scholarships.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>Master's &amp; PhD Scholarships</a></li>
                    <li><a href="international-relations-essays.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>12 IR &amp; Geopolitics Master Essays</a></li>
                    <li><a href="digital-library.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>Digital Library &amp; Reports</a></li>
                    <li><a href="quiz.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>Interactive Mock Quiz Engine</a></li>
                </ul>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-newspaper" style="color: #10b981; margin-right: 8px;"></i>Examination Archives
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="css-essays-2026.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>CSS 2026 Solved Essays (10 Topics)</a></li>
                    <li><a href="cce-essays-2025.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>SPSC CCE 2025 Solved Essays (All 8)</a></li>
                    <li><a href="upsc-essays-2023.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>UPSC CSE 2023 Solved Papers (All 8)</a></li>
                    <li><a href="fia-sample-papers.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>FIA Assistant Director Past Papers</a></li>
                    <li><a href="topic-united-nations.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>United Nations Master Guide</a></li>
                    <li><a href="grammar-rules.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-angle-right" style="color: #64748b; margin-right: 6px;"></i>English Grammar &amp; Composition Rules</a></li>
                </ul>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-shield-halved" style="color: #60a5fa; margin-right: 8px;"></i>Legal &amp; Transparency
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="privacy.html" style="color: #60a5fa; font-weight: 600; text-decoration: none;"><i class="fas fa-user-shield" style="margin-right: 6px;"></i>Privacy Policy (AdSense/GDPR)</a></li>
                    <li><a href="terms.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-file-contract" style="margin-right: 6px;"></i>Terms of Service</a></li>
                    <li><a href="disclaimer.html" style="color: #f87171; font-weight: 600; text-decoration: none;"><i class="fas fa-triangle-exclamation" style="margin-right: 6px;"></i>Official Disclaimer</a></li>
                    <li><a href="about.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-users" style="margin-right: 6px;"></i>About Us &amp; Editorial Standards</a></li>
                    <li><a href="contact.html" style="color: #cbd5e1; text-decoration: none;"><i class="fas fa-envelope" style="margin-right: 6px;"></i>Contact &amp; Error Reporting</a></li>
                </ul>
            </div>
        </div>

        <div style="max-width: 1240px; margin: 0 auto; padding-top: 24px; border-top: 1px solid #1e293b; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px; font-size: 0.82rem; color: #64748b;">
            <div>
                &copy; 2026 CSS Prep Central &amp; MCQs Portal. All rights reserved.
            </div>
            <div style="max-width: 750px; text-align: right; line-height: 1.5;">
                <strong>Disclaimer:</strong> CSS Prep Central is an independent educational platform and is not affiliated, authorized, or endorsed by FPSC, SPSC, PPSC, NTS, SIBA, FIA, Sindh Police, or the Government of Pakistan. All exam materials are compiled for candidate study under fair use.
            </div>
        </div>
    </footer>`;

indexContent = indexContent.replace(oldFooterTarget, newFooterContent);
fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Successfully updated index.html head and footer.');

// 3. Fix double h1 in essay-russia-ukraine-war.html
const ruPath = path.join(__dirname, '..', 'frontend', 'essay-russia-ukraine-war.html');
let ruContent = fs.readFileSync(ruPath, 'utf8');
ruContent = ruContent.replace(
  '<h1>The Russia-Ukraine War: Geopolitical Genesis, Global Systemic Fractures, and the Elusive Architecture of Peace</h1>\n<h3>An Exhaustive Academic Monograph',
  '<h2 class="essay-inner-title">The Russia-Ukraine War: Geopolitical Genesis, Global Systemic Fractures, and the Elusive Architecture of Peace</h2>\n<h3>An Exhaustive Academic Monograph'
);
fs.writeFileSync(ruPath, ruContent, 'utf8');
console.log('Successfully fixed double h1 in essay-russia-ukraine-war.html.');

// 4. Fix reader h1 in articles.html
const artPath = path.join(__dirname, '..', 'frontend', 'articles.html');
let artContent = fs.readFileSync(artPath, 'utf8');
artContent = artContent.replace(
  '<h1 class="reader-title" id="readerTitle">Article Title</h1>',
  '<h2 class="reader-title" id="readerTitle">Article Title</h2>'
);
fs.writeFileSync(artPath, artContent, 'utf8');
console.log('Successfully fixed reader h1 in articles.html.');
