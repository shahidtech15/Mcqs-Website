const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

const pages = [
    { file: 'index.html', active: 'Home' },
    { file: 'editorial-explainer.html', active: 'Editorial Explainer' },
    { file: 'world-map.html', active: 'World Map' },
    { file: 'quiz.html', active: 'Take a Quiz' },
    { file: 'digital-library.html', active: 'Digital Library' },
    { file: 'recommended-books.html', active: 'Recommended Books' },
    { file: 'fia-sample-papers.html', active: 'FIA Papers' },
    { file: 'grammar-rules.html', active: 'Grammar Rules' },
    { file: 'written-prep.html', active: 'Written Prep' },
    { file: 'exam-guide.html', active: 'Exam Guide' },
    { file: 'science-notes.html', active: 'Science Notes' },
    { file: 'about.html', active: 'About' }
];

function buildPrimaryNav(activeName) {
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'editorial-explainer.html', label: 'Editorial Explainer' },
        { href: 'world-map.html', label: 'World Map' },
        { href: 'index.html#categories', label: 'Categories' },
        { href: 'quiz.html', label: 'Take a Quiz' },
        { href: 'digital-library.html', label: 'Digital Library' },
        { href: 'recommended-books.html', label: 'Recommended Books' },
        { href: 'fia-sample-papers.html', label: 'FIA Papers' },
        { href: 'grammar-rules.html', label: 'Grammar Rules' },
        { href: 'written-prep.html', label: 'Written Prep' },
        { href: 'exam-guide.html', label: 'Exam Guide' },
        { href: 'science-notes.html', label: 'Science Notes' },
        { href: 'admin.html', label: 'Admin Panel', extraClass: 'admin-link' }
    ];

    const rendered = links.map(l => {
        const isActive = (l.label === activeName) ? ' class="active"' : '';
        const adminClass = l.extraClass ? (isActive ? ' class="admin-link active"' : ' class="admin-link"') : isActive;
        return `                <a href="${l.href}"${adminClass}>${l.label}</a>`;
    }).join('\n');

    return `<nav class="nav-links">\n${rendered}\n            </nav>`;
}

pages.forEach(p => {
    const fullPath = path.join(frontendDir, p.file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');

    // 1. Replace primary nav
    const primaryNavRegex = /<nav class="nav-links">[\s\S]*?<\/nav>/;
    if (primaryNavRegex.test(content)) {
        content = content.replace(primaryNavRegex, buildPrimaryNav(p.active));
        console.log(`Updated primary nav in ${p.file}`);
    }

    // 2. Ensure secondary navbar has Editorial Explainer
    const secNavRegex = /(<ul class="secondary-nav-links">[\s\S]*?<\/ul>)/;
    const secMatch = content.match(secNavRegex);
    if (secMatch) {
        let secContent = secMatch[1];
        if (!secContent.includes('editorial-explainer.html')) {
            const homeLi = /<li><a href="index\.html"[^>]*>Home<\/a><\/li>/;
            if (homeLi.test(secContent)) {
                const addLinks = `<li><a href="index.html">Home</a></li>\n                <li><a href="editorial-explainer.html"${p.active === 'Editorial Explainer' ? ' class="active"' : ''} style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-newspaper"></i> Editorial Explainer</a></li>`;
                secContent = secContent.replace(homeLi, addLinks);
                content = content.replace(secNavRegex, secContent);
                console.log(`Added Editorial Explainer to secondary nav in ${p.file}`);
            }
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
});

// Update index.html hero chip and study resources
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes("window.location.href='editorial-explainer.html'")) {
    const chipTarget = `<button type="button" class="search-chip" onclick="window.location.href='world-map.html'"`;
    const edChip = `<button type="button" class="search-chip" onclick="window.location.href='editorial-explainer.html'" style="font-weight:600; border-color:#0284c7; color:#0284c7;"><i class="fa-solid fa-newspaper"></i> Editorial Explainer</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='world-map.html'"`;
    indexContent = indexContent.replace(chipTarget, edChip);
    console.log('Added Editorial Explainer hero chip in index.html');
}

// Add Editorial Explainer card in study resources grid
if (!indexContent.includes('<h3>📰 Civil Services Editorial Explainer</h3>')) {
    const gridTarget = `<div class="resources-grid">`;
    const edCard = `<div class="resources-grid">
                <!-- Editorial Explainer Card -->
                <div class="resource-card" style="border: 1px solid rgba(2, 132, 199, 0.4); background: linear-gradient(135deg, rgba(2, 132, 199, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(2, 132, 199, 0.2); color: #0284c7;"><i class="fa-solid fa-newspaper"></i></div>
                    <div class="resource-content">
                        <h3>📰 Civil Services Editorial Explainer</h3>
                        <p>In-depth academic breakdowns of landmark editorials from Dawn, The News, The Express Tribune, Foreign Affairs, and The Economist. Master background contexts, core arguments, high-yield vocabulary, theoretical frameworks, and 40 interactive editorial MCQs with explanations.</p>
                        <div class="resource-meta"><span style="color:#0284c7;"><i class="fa-solid fa-newspaper"></i> 10 Comprehensive Breakdowns</span> <span>⭐ 40 Editorial MCQs</span></div>
                        <a href="editorial-explainer.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-book-open-reader"></i> Read Editorial Explainers</a>
                    </div>
                </div>`;
    indexContent = indexContent.replace(gridTarget, edCard);
    console.log('Added Editorial Explainer card to study-resources in index.html');
}

// Add data_editorial_explainers.js script tag to index.html
if (!indexContent.includes('data_editorial_explainers.js')) {
    indexContent = indexContent.replace(
        '<script src="js/data_digital_library.js"></script>',
        '<script src="js/data_editorial_explainers.js"></script>\n    <script src="js/data_digital_library.js"></script>'
    );
    console.log('Added data_editorial_explainers.js script tag to index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');

// Update digital-library.html Tab 2 banner linking to editorial-explainer.html
const libPath = path.join(frontendDir, 'digital-library.html');
let libContent = fs.readFileSync(libPath, 'utf8');
if (!libContent.includes('Launch Full Editorial Explainer &amp; Interactive MCQs Portal')) {
    const tabTarget = `<div class="tab-pane" id="tab-editorials" style="display: none;">`;
    const tabWithBanner = `<div class="tab-pane" id="tab-editorials" style="display: none;">
            <!-- Editorial Explainer Banner -->
            <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: #ffffff; border-radius: 14px; padding: 22px 26px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; box-shadow: var(--card-shadow);">
                <div>
                    <h3 style="margin: 0 0 6px; font-size: 1.35rem; font-weight: 800; color: #ffffff;"><i class="fa-solid fa-newspaper" style="color: #38bdf8;"></i> Civil Services Editorial Explainer Portal</h3>
                    <p style="margin: 0; font-size: 0.92rem; opacity: 0.94; max-width: 800px; line-height: 1.5;">Access deep analytical breakdowns of editorials from Dawn, The News, Express Tribune, and Foreign Affairs with Background, Key Arguments, High-Yield Vocabulary, Analytical Points, and 40 Interactive MCQs.</p>
                </div>
                <a href="editorial-explainer.html" class="lib-action-btn" style="background: #38bdf8; color: #0f172a; font-weight: 700; padding: 10px 20px; font-size: 0.92rem;">
                    <i class="fa-solid fa-book-open-reader"></i> Launch Editorial Explainer &rarr;
                </a>
            </div>`;
    libContent = libContent.replace(tabTarget, tabWithBanner);
    fs.writeFileSync(libPath, libContent, 'utf8');
    console.log('Added Editorial Explainer banner to digital-library.html Tab 2');
}

console.log('All updates completed successfully!');
