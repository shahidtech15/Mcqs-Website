const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

const pages = [
    { file: 'index.html', active: 'Home' },
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
    { file: 'about.html', active: 'About' }
];

function buildPrimaryNav(activeName) {
    const links = [
        { href: 'index.html', label: 'Home' },
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

    // 2. Ensure secondary navbar has AI Assistant
    const secNavRegex = /(<ul class="secondary-nav-links">[\s\S]*?<\/ul>)/;
    const secMatch = content.match(secNavRegex);
    if (secMatch) {
        let secContent = secMatch[1];
        if (!secContent.includes('ai-assistant.html')) {
            const homeLi = /<li><a href="index\.html"[^>]*>Home<\/a><\/li>/;
            if (homeLi.test(secContent)) {
                const addLinks = `<li><a href="index.html">Home</a></li>\n                <li><a href="ai-assistant.html"${p.active === 'AI Assistant' ? ' class="active"' : ''} style="font-weight: 700; color: #6366f1;"><i class="fa-solid fa-robot"></i> AI Study Assistant</a></li>`;
                secContent = secContent.replace(homeLi, addLinks);
                content = content.replace(secNavRegex, secContent);
                console.log(`Added AI Assistant to secondary nav in ${p.file}`);
            }
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
});

// Update index.html hero chip and study resources
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes("window.location.href='ai-assistant.html'")) {
    const chipTarget = `<button type="button" class="search-chip" onclick="window.location.href='editorial-explainer.html'"`;
    const aiChip = `<button type="button" class="search-chip" onclick="window.location.href='ai-assistant.html'" style="font-weight:600; border-color:#6366f1; color:#6366f1;"><i class="fa-solid fa-robot"></i> AI Study Assistant &amp; Generator</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='editorial-explainer.html'"`;
    indexContent = indexContent.replace(chipTarget, aiChip);
    console.log('Added AI Assistant hero chip in index.html');
}

// Add AI Assistant card in study resources grid
if (!indexContent.includes('<h3>🤖 AI Study Assistant &amp; Question Generator</h3>')) {
    const gridTarget = `<div class="resources-grid">`;
    const aiCard = `<div class="resources-grid">
                <!-- AI Study Assistant Card -->
                <div class="resource-card" style="border: 1px solid rgba(99, 102, 241, 0.4); background: linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(99, 102, 241, 0.2); color: #6366f1;"><i class="fa-solid fa-robot"></i></div>
                    <div class="resource-content">
                        <h3>🤖 AI Study Assistant &amp; Question Generator</h3>
                        <p>Ask natural language questions about statutory laws (FIA Act 1974, Civil Servants Act 1973, NAO 1999, PECA 2016), constitutional articles, and your own uploaded study notes. Generate customized practice MCQs, 5-mark conceptual tests, and 20-mark CSS essay outlines on demand.</p>
                        <div class="resource-meta"><span style="color:#6366f1;"><i class="fa-solid fa-wand-magic-sparkles"></i> Grounded Q&amp;A + Test Generator</span> <span>⭐ Laws &amp; Custom Notes</span></div>
                        <a href="ai-assistant.html" class="resource-btn" style="background: #6366f1; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-bolt"></i> Launch AI Study Assistant</a>
                    </div>
                </div>`;
    indexContent = indexContent.replace(gridTarget, aiCard);
    console.log('Added AI Study Assistant card to study-resources in index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('All updates completed successfully!');
