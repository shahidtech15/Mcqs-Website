const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'frontend', 'math-tricks.html');
let content = fs.readFileSync(filePath, 'utf-8');

// Regex to remove all instances of the banner block
const bannerRegex = /<!-- Practice MCQs Link Banner -->[\s\S]*?<!-- \/Practice MCQs Link Banner -->/g;
// If no closing tag was used:
const fallbackRegex = /<!-- Practice MCQs Link Banner -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;

content = content.replace(fallbackRegex, '');

const singleBanner = `
    <!-- Practice MCQs Link Banner -->
    <div style="max-width: 1300px; margin: 20px auto 0 auto; padding: 0 20px;">
        <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); color: #ffffff; border-radius: 14px; padding: 18px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; box-shadow: 0 4px 16px rgba(2, 132, 199, 0.2);">
            <div style="display: flex; align-items: center; gap: 14px;">
                <span style="background: rgba(255, 255, 255, 0.2); width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                    <i class="fas fa-calculator"></i>
                </span>
                <div>
                    <h3 style="margin: 0; font-size: 1.1rem; font-weight: 800;">Want to Practice Exam MCQs with Instant Solutions?</h3>
                    <p style="margin: 2px 0 0 0; font-size: 0.88rem; opacity: 0.95;">Test your speed with 300+ Solved Mathematics &amp; IQ MCQs from FPSC, PPSC, SPSC, and CSS Past Papers.</p>
                </div>
            </div>
            <a href="math-mcqs.html" style="background: #ffffff; color: #0369a1; padding: 10px 20px; border-radius: 8px; font-weight: 800; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                <i class="fas fa-arrow-right"></i> Open 300+ Math MCQs Portal
            </a>
        </div>
    </div>
`;

// Insert right before <!-- Sticky Filter & Search Bar -->
content = content.replace('<!-- Sticky Filter & Search Bar -->', singleBanner + '\n    <!-- Sticky Filter & Search Bar -->');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Cleaned and inserted single banner successfully.');
