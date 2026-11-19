const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

const pages = [
    { file: 'index.html', active: 'Home' },
    { file: 'articles.html', active: 'Articles' },
    { file: 'timeline.html', active: 'Timeline' },
    { file: 'leaderboard.html', active: 'Leaderboard' },
    { file: 'dashboard.html', active: 'Dashboard' },
    { file: 'ai-assistant.html', active: 'AI Assistant' },
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
    { file: 'about.html', active: 'About' },
    { file: 'admin.html', active: 'Admin Panel' }
];

function buildPrimaryNav(activeName) {
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'articles.html', label: 'Articles' },
        { href: 'timeline.html', label: 'Timeline' },
        { href: 'leaderboard.html', label: 'Leaderboard' },
        { href: 'dashboard.html', label: 'Dashboard' },
        { href: 'ai-assistant.html', label: 'AI Assistant' },
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

    // 2. Ensure secondary navbar has Articles
    const secNavRegex = /(<ul class="secondary-nav-links">[\s\S]*?<\/ul>)/;
    const secMatch = content.match(secNavRegex);
    if (secMatch) {
        let secContent = secMatch[1];
        if (!secContent.includes('articles.html')) {
            const homeLi = /<li><a href="index\.html"[^>]*>Home<\/a><\/li>/;
            if (homeLi.test(secContent)) {
                const addLinks = `<li><a href="index.html">Home</a></li>\n                <li><a href="articles.html"${p.active === 'Articles' ? ' class="active"' : ''} style="font-weight: 700; color: #047857;"><i class="fa-solid fa-book-open"></i> Study Articles</a></li>`;
                secContent = secContent.replace(homeLi, addLinks);
                content = content.replace(secNavRegex, secContent);
                console.log(`Added Articles to secondary nav in ${p.file}`);
            }
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
});

// Update index.html hero chip and study resources
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes("window.location.href='articles.html'")) {
    const chipTarget = `<button type="button" class="search-chip" onclick="window.location.href='timeline.html'"`;
    const artChip = `<button type="button" class="search-chip" onclick="window.location.href='articles.html'" style="font-weight:600; border-color:#047857; color:#047857;"><i class="fa-solid fa-book-open"></i> In-Depth SEO Study Guides</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='timeline.html'"`;
    indexContent = indexContent.replace(chipTarget, artChip);
    console.log('Added Articles hero chip in index.html');
}

// Add Articles card in study resources grid
if (!indexContent.includes('<h3>📚 In-Depth Civil Services Study Guides &amp; SEO Articles</h3>')) {
    const gridTarget = `<div class="resources-grid">`;
    const artCard = `<div class="resources-grid">
                <!-- In-Depth Study Articles Card -->
                <div class="resource-card" style="border: 1px solid rgba(4, 120, 87, 0.4); background: linear-gradient(135deg, rgba(4, 120, 87, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(4, 120, 87, 0.2); color: #047857;"><i class="fa-solid fa-book-bookmark"></i></div>
                    <div class="resource-content">
                        <h3>📚 In-Depth Civil Services Study Guides &amp; SEO Articles</h3>
                        <p>Deep-dive research guides covering Constitutional Articles of Pakistan, FIA Recruitment Laws (Act 1974, PECA 2016), International Maritime Straits, 100 Global Organizations, Top 100 Pakistan Affairs, and Everyday Science. Fully cited and original.</p>
                        <div class="resource-meta"><span style="color:#047857;"><i class="fa-solid fa-scale-balanced"></i> Law &amp; Geopolitics</span> <span>📖 9 Comprehensive Guides</span></div>
                        <a href="articles.html" class="resource-btn" style="background: #047857; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-arrow-right"></i> Read Research Guides</a>
                    </div>
                </div>`;
    indexContent = indexContent.replace(gridTarget, artCard);
    console.log('Added Articles card to study-resources in index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('All navigation and index updates completed successfully!');
