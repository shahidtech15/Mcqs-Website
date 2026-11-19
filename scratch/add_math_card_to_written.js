const fs = require('fs');
const path = require('path');

const writtenHtmlPath = path.join(__dirname, '..', 'frontend', 'written-prep.html');
let html = fs.readFileSync(writtenHtmlPath, 'utf8');

const targetAnchor = 'Read All 12 Geoeconomics Master Essays &amp; Outlines\n                </a>';
const idx = html.indexOf(targetAnchor);

if (idx !== -1 && !html.includes('href="math-tricks.html#module-work-time"')) {
  const cardEnd = html.indexOf('</div>\n        </div>', idx);
  if (cardEnd !== -1) {
    const insertPos = cardEnd + '</div>\n        </div>'.length;
    
    const mathCard = `
        <!-- Math Shortcut Tricks & Quantitative Ability Banner Card -->
        <div style="background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%); color: #ffffff; border-radius: 16px; padding: 28px 32px; margin-bottom: 35px; box-shadow: 0 10px 25px rgba(2, 132, 199, 0.25); display: flex; flex-direction: column; gap: 14px; border-left: 5px solid #f59e0b;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <span style="background: rgba(56, 189, 248, 0.25); border: 1px solid rgba(125, 211, 252, 0.45); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; color: #7dd3fc; text-transform: uppercase;">
                    <i class="fa-solid fa-calculator"></i> Quantitative Ability &amp; Arithmetic Shortcuts
                </span>
                <span style="font-size: 0.85rem; color: #e0f2fe; font-weight: 500;">
                    <i class="fa-solid fa-bolt"></i> 12 Core Modules • 52+ Fast Formulas • 40+ Solved Exam Drills
                </span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
                <h2 style="color: #ffffff; font-size: 1.6rem; font-weight: 800; margin: 0; font-family: 'Outfit', sans-serif;">
                    Math Shortcut Tricks Handbook: Mental Arithmetic, Percentages &amp; Work-Time
                </h2>
                <p style="color: #e0f2fe; font-size: 0.96rem; line-height: 1.6; margin: 0; max-width: 950px;">
                    Comprehensive fast math techniques for CSS GSA, PMS, FPSC (FIA, Custom, IB), PPSC, and NTS: Percentage Split &amp; Commutative Tricks, Work &amp; Time (2 &amp; 3 workers, LCM method, pipes &amp; cisterns), Mental Multiplication (by 11, 25, 99, squaring ending in 5), Ratio &amp; Proportion bridging, Relative Speed &amp; Trains, Profit &amp; Loss multipliers, CI vs SI differences, Alligation cross rule, AP/GP progressions, and Venn diagrams.
                </p>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center; margin-top: 6px;">
                <a href="math-tricks.html" style="background: #f59e0b; color: #0f172a; padding: 10px 22px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);">
                    <i class="fa-solid fa-wand-magic-sparkles"></i> Open Math Shortcut Tricks Handbook
                </a>
                <a href="math-tricks.html#module-work-time" style="background: rgba(255, 255, 255, 0.15); color: #ffffff; padding: 10px 18px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-size: 0.9rem; border: 1px solid rgba(255, 255, 255, 0.25);">
                    <i class="fa-solid fa-clock"></i> Work &amp; Time Problems
                </a>
                <a href="math-tricks.html#module-percentages" style="background: rgba(255, 255, 255, 0.15); color: #ffffff; padding: 10px 18px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; font-size: 0.9rem; border: 1px solid rgba(255, 255, 255, 0.25);">
                    <i class="fa-solid fa-percent"></i> Percentages Tricks
                </a>
            </div>
        </div>`;

    html = html.slice(0, insertPos) + '\n' + mathCard + html.slice(insertPos);
    fs.writeFileSync(writtenHtmlPath, html, 'utf8');
    console.log('Inserted Math Tricks banner card into written-prep.html');
  }
}
