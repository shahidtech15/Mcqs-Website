const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '..', 'frontend');

function updateFile(filename, updater) {
    const filePath = path.join(frontendDir, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    content = updater(content);
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated links in ${filename}`);
    } else {
        console.log(`No changes needed in ${filename}`);
    }
}

// 1. index.html
updateFile('index.html', (content) => {
    // Add to nav-links if not already present
    if (!content.includes('href="recruitment-prep.html"')) {
        const targetNav = '<a href="fia-sample-papers.html">FIA Papers</a>';
        const replacementNav = '<a href="recruitment-prep.html" style="font-weight:700; color:#0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep <span style="background:#fde047; color:#115e59; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="fia-sample-papers.html">FIA Papers</a>';
        content = content.replace(targetNav, replacementNav);

        // Add to secondary nav
        const targetSec = '<li><a href="topic-united-nations.html"';
        const replacementSec = '<li><a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Test Prep</a></li>\n                <li><a href="topic-united-nations.html"';
        content = content.replace(targetSec, replacementSec);

        // Add to search chips
        const targetChip = `<button type="button" class="search-chip" onclick="window.location.href='cce-essays-2025.html'`;
        const newChip = `<button type="button" class="search-chip" onclick="window.location.href='recruitment-prep.html'" style="font-weight:700; border-color:#0f766e; color:#0f766e;"><i class="fa-solid fa-briefcase"></i> Complete Recruitment Prep (FIA AD, Inspector, Customs, AAO, NAB, MOD)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='cce-essays-2025.html'`;
        content = content.replace(targetChip, newChip);
    }
    return content;
});

// 2. written-prep.html
updateFile('written-prep.html', (content) => {
    if (!content.includes('href="recruitment-prep.html"')) {
        const targetNav = '<a href="fia-sample-papers.html">FIA Papers</a>';
        const replacementNav = '<a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep <span style="background:#fde047; color:#115e59; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="fia-sample-papers.html">FIA Papers</a>';
        content = content.replace(targetNav, replacementNav);

        const targetSec = '<li><a href="written-prep.html" class="active"';
        const replacementSec = '<li><a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep Hub</a></li>\n                <li><a href="written-prep.html" class="active"';
        content = content.replace(targetSec, replacementSec);

        // Add showcase banner right above CSS 2021 banner
        const targetBanner = '<!-- CSS 2021 Complete Solved Essays Hub Showcase Banner -->';
        const newBanner = `<!-- Complete Recruitment Test Preparation Hub Banner -->
        <div style="background: linear-gradient(135deg, #042f2e 0%, #0f766e 60%, #115e59 100%); color: #ffffff; border-radius: 16px; padding: 28px 32px; margin-bottom: 35px; box-shadow: 0 10px 25px rgba(15, 118, 110, 0.25); display: flex; flex-direction: column; gap: 14px;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <span style="background: rgba(245, 158, 11, 0.25); border: 1px solid rgba(245, 158, 11, 0.4); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; color: #fef08a; text-transform: uppercase;">
                    <i class="fa-solid fa-briefcase"></i> One-Stop Job-Centric Test Prep
                </span>
                <span style="font-size: 0.85rem; color: #99f6e4; font-weight: 500;">
                    <i class="fa-solid fa-building-columns"></i> FPSC, SPSC, PPSC &amp; Federal Bodies
                </span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
                <h2 style="color: #ffffff; font-size: 1.6rem; font-weight: 800; margin: 0; font-family: 'Outfit', sans-serif;">
                    Complete Recruitment Test Preparation Hub
                </h2>
                <p style="color: #ccfbf1; font-size: 0.96rem; line-height: 1.6; margin: 0; max-width: 950px;">
                    Select your targeted competitive post (FIA Assistant Director, FIA Inspector, Customs Inspector, Assistant Audit Officer, NAB AD, or MOD AD) and instantly access its official syllabus, curated subject notes, recommended books, interactive practice tests, 100-mark mock exams, and personalized readiness tracking.
                </p>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center; margin-top: 6px;">
                <a href="recruitment-prep.html" style="background: #f59e0b; color: #0f172a; padding: 10px 22px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);">
                    <i class="fa-solid fa-arrow-right"></i> Open Recruitment Test Prep Hub
                </a>
                <a href="fia-sample-papers.html" style="background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); color: #ffffff; padding: 10px 20px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 0.92rem;">
                    <i class="fa-solid fa-file-shield"></i> FIA AD 20 Sample Papers (2,000 MCQs)
                </a>
            </div>
        </div>
        
        <!-- CSS 2021 Complete Solved Essays Hub Showcase Banner -->`;
        content = content.replace(targetBanner, newBanner);
    }
    return content;
});

// 3. articles.html
updateFile('articles.html', (content) => {
    if (!content.includes('href="recruitment-prep.html"')) {
        const targetNav = '<a href="fia-sample-papers.html">FIA Papers</a>';
        const replacementNav = '<a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep</a>\n                <a href="fia-sample-papers.html">FIA Papers</a>';
        content = content.replace(targetNav, replacementNav);
    }
    return content;
});

// 4. digital-library.html
updateFile('digital-library.html', (content) => {
    if (!content.includes('href="recruitment-prep.html"')) {
        const targetNav = '<a href="fia-sample-papers.html">FIA Papers</a>';
        const replacementNav = '<a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep</a>\n                <a href="fia-sample-papers.html">FIA Papers</a>';
        content = content.replace(targetNav, replacementNav);

        const targetSec = '<li><a href="fia-sample-papers.html">';
        const replacementSec = '<li><a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep</a></li>\n                <li><a href="fia-sample-papers.html">';
        content = content.replace(targetSec, replacementSec);
    }
    return content;
});

// 5. cce-essays-2025.html
updateFile('cce-essays-2025.html', (content) => {
    if (!content.includes('href="recruitment-prep.html"')) {
        const targetNav = '<a href="written-prep.html">Written Prep</a>';
        const replacementNav = '<a href="written-prep.html">Written Prep</a>\n                <a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep</a>';
        content = content.replace(targetNav, replacementNav);
    }
    return content;
});

// 6. css-essays-2026.html
updateFile('css-essays-2026.html', (content) => {
    if (!content.includes('href="recruitment-prep.html"')) {
        const targetNav = '<a href="written-prep.html">Written Prep</a>';
        const replacementNav = '<a href="written-prep.html">Written Prep</a>\n                <a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep</a>';
        content = content.replace(targetNav, replacementNav);
    }
    return content;
});

// 7. css-essays-2021.html
updateFile('css-essays-2021.html', (content) => {
    if (!content.includes('href="recruitment-prep.html"')) {
        const targetNav = '<a href="articles.html">Articles</a>';
        const replacementNav = '<a href="articles.html">Articles</a>\n                <a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep</a>';
        content = content.replace(targetNav, replacementNav);
    }
    return content;
});

// 8. fia-sample-papers.html
updateFile('fia-sample-papers.html', (content) => {
    if (!content.includes('href="recruitment-prep.html"')) {
        const targetNav = '<a href="fia-sample-papers.html" class="active">FIA Papers</a>';
        const replacementNav = '<a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep</a>\n                <a href="fia-sample-papers.html" class="active">FIA Papers</a>';
        content = content.replace(targetNav, replacementNav);

        const targetSec = '<li><a href="fia-sample-papers.html" class="active"';
        const replacementSec = '<li><a href="recruitment-prep.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-briefcase"></i> Recruitment Prep Hub</a></li>\n                <li><a href="fia-sample-papers.html" class="active"';
        content = content.replace(targetSec, replacementSec);
    }
    return content;
});

console.log('Navigation linking process completed!');
