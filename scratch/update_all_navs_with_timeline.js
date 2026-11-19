const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

const pages = [
    { file: 'index.html', active: 'Home' },
    { file: 'timeline.html', active: 'Historical Timeline' },
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
        const isActive = (l.label === activeName || (activeName === 'Historical Timeline' && l.label === 'Timeline')) ? ' class="active"' : '';
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

    // 2. Ensure secondary navbar has Timeline
    const secNavRegex = /(<ul class="secondary-nav-links">[\s\S]*?<\/ul>)/;
    const secMatch = content.match(secNavRegex);
    if (secMatch) {
        let secContent = secMatch[1];
        if (!secContent.includes('timeline.html')) {
            const homeLi = /<li><a href="index\.html"[^>]*>Home<\/a><\/li>/;
            if (homeLi.test(secContent)) {
                const addLinks = `<li><a href="index.html">Home</a></li>\n                <li><a href="timeline.html"${p.active === 'Historical Timeline' ? ' class="active"' : ''} style="font-weight: 700; color: #4338ca;"><i class="fa-solid fa-timeline"></i> Historical Timeline</a></li>`;
                secContent = secContent.replace(homeLi, addLinks);
                content = content.replace(secNavRegex, secContent);
                console.log(`Added Timeline to secondary nav in ${p.file}`);
            }
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
});

// Update index.html hero chip and study resources
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes("window.location.href='timeline.html'")) {
    const chipTarget = `<button type="button" class="search-chip" onclick="window.location.href='leaderboard.html'"`;
    const tlChip = `<button type="button" class="search-chip" onclick="window.location.href='timeline.html'" style="font-weight:600; border-color:#4338ca; color:#4338ca;"><i class="fa-solid fa-timeline"></i> Historical Timeline (Pak &amp; World)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='leaderboard.html'"`;
    indexContent = indexContent.replace(chipTarget, tlChip);
    console.log('Added Timeline hero chip in index.html');
}

// Add Timeline card in study resources grid
if (!indexContent.includes('<h3>⏳ Interactive Historical Timeline</h3>')) {
    const gridTarget = `<div class="resources-grid">`;
    const tlCard = `<div class="resources-grid">
                <!-- Historical Timeline Card -->
                <div class="resource-card" style="border: 1px solid rgba(67, 56, 202, 0.4); background: linear-gradient(135deg, rgba(67, 56, 202, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(67, 56, 202, 0.2); color: #4338ca;"><i class="fa-solid fa-timeline"></i></div>
                    <div class="resource-content">
                        <h3>⏳ Interactive Historical Timeline</h3>
                        <p>Explore chronologically synchronized milestones from Pakistan's History (712 AD to 2024) and World History (1215 Magna Carta to modern multipolar geopolitics). Includes CSS/PMS analytical significance, key leaders, and embedded past paper MCQs.</p>
                        <div class="resource-meta"><span style="color:#4338ca;"><i class="fa-solid fa-landmark"></i> Pakistan &amp; World History</span> <span>📜 Constitutional Milestones &amp; MCQs</span></div>
                        <a href="timeline.html" class="resource-btn" style="background: #4338ca; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-arrow-right"></i> Explore Historical Timeline</a>
                    </div>
                </div>`;
    indexContent = indexContent.replace(gridTarget, tlCard);
    console.log('Added Timeline card to study-resources in index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('All navigation and index updates completed successfully!');
