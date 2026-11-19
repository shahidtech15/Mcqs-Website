const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

const pages = [
    { file: 'index.html', active: 'Home' },
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

    // 2. Ensure secondary navbar has Leaderboard
    const secNavRegex = /(<ul class="secondary-nav-links">[\s\S]*?<\/ul>)/;
    const secMatch = content.match(secNavRegex);
    if (secMatch) {
        let secContent = secMatch[1];
        if (!secContent.includes('leaderboard.html')) {
            const homeLi = /<li><a href="index\.html"[^>]*>Home<\/a><\/li>/;
            if (homeLi.test(secContent)) {
                const addLinks = `<li><a href="index.html">Home</a></li>\n                <li><a href="leaderboard.html"${p.active === 'Leaderboard' ? ' class="active"' : ''} style="font-weight: 700; color: #f59e0b;"><i class="fa-solid fa-trophy"></i> Daily Challenge &amp; Leaderboard</a></li>`;
                secContent = secContent.replace(homeLi, addLinks);
                content = content.replace(secNavRegex, secContent);
                console.log(`Added Leaderboard to secondary nav in ${p.file}`);
            }
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
});

// Update index.html hero chip and study resources
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes("window.location.href='leaderboard.html'")) {
    const chipTarget = `<button type="button" class="search-chip" onclick="window.location.href='dashboard.html'"`;
    const lbChip = `<button type="button" class="search-chip" onclick="window.location.href='leaderboard.html'" style="font-weight:600; border-color:#f59e0b; color:#f59e0b;"><i class="fa-solid fa-trophy"></i> Daily Challenge &amp; Leaderboard</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='dashboard.html'"`;
    indexContent = indexContent.replace(chipTarget, lbChip);
    console.log('Added Leaderboard hero chip in index.html');
}

// Add Leaderboard card in study resources grid
if (!indexContent.includes('<h3>🏆 All-Pakistan Leaderboard &amp; Daily Challenge</h3>')) {
    const gridTarget = `<div class="resources-grid">`;
    const lbCard = `<div class="resources-grid">
                <!-- Leaderboard & Daily Challenge Card -->
                <div class="resource-card" style="border: 1px solid rgba(245, 158, 11, 0.4); background: linear-gradient(135deg, rgba(245, 158, 11, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;"><i class="fa-solid fa-trophy"></i></div>
                    <div class="resource-content">
                        <h3>🏆 All-Pakistan Leaderboard &amp; Daily Challenge</h3>
                        <p>Compete against 1,400+ serious CSS, PMS, and FIA candidates in daily 15-question high-yield timed sprints. Track your provincial and national rankings, accuracy, streaks, speed benchmarks, and weekly score improvement.</p>
                        <div class="resource-meta"><span style="color:#f59e0b;"><i class="fa-solid fa-bolt"></i> Daily 15-MCQ Sprint</span> <span>🥇 National &amp; Provincial Ranks</span></div>
                        <a href="leaderboard.html" class="resource-btn" style="background: #f59e0b; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-trophy"></i> Join Today's Daily Challenge</a>
                    </div>
                </div>`;
    indexContent = indexContent.replace(gridTarget, lbCard);
    console.log('Added Leaderboard card to study-resources in index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');

// Update dashboard.html to include Daily Challenge action button if not present
const dashPath = path.join(frontendDir, 'dashboard.html');
let dashContent = fs.readFileSync(dashPath, 'utf8');

if (!dashContent.includes('leaderboard.html')) {
    const targetHeaderBtn = `<div class="dash-hero-actions">`;
    if (dashContent.includes(targetHeaderBtn)) {
        const replacement = `<div class="dash-hero-actions">
                    <a href="leaderboard.html" class="dash-btn" style="background: #f59e0b; color: #ffffff; font-weight:700;"><i class="fa-solid fa-trophy"></i> Daily Challenge &amp; Rankings</a>`;
        dashContent = dashContent.replace(targetHeaderBtn, replacement);
        fs.writeFileSync(dashPath, dashContent, 'utf8');
        console.log('Added Daily Challenge button in dashboard.html');
    }
}

console.log('All navigation, index, and dashboard updates completed successfully!');
