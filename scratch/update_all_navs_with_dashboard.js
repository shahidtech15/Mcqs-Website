const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

const pages = [
    { file: 'index.html', active: 'Home' },
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

    // 2. Ensure secondary navbar has Dashboard
    const secNavRegex = /(<ul class="secondary-nav-links">[\s\S]*?<\/ul>)/;
    const secMatch = content.match(secNavRegex);
    if (secMatch) {
        let secContent = secMatch[1];
        if (!secContent.includes('dashboard.html')) {
            const homeLi = /<li><a href="index\.html"[^>]*>Home<\/a><\/li>/;
            if (homeLi.test(secContent)) {
                const addLinks = `<li><a href="index.html">Home</a></li>\n                <li><a href="dashboard.html"${p.active === 'Dashboard' ? ' class="active"' : ''} style="font-weight: 700; color: #10b981;"><i class="fa-solid fa-chart-line"></i> Dashboard</a></li>`;
                secContent = secContent.replace(homeLi, addLinks);
                content = content.replace(secNavRegex, secContent);
                console.log(`Added Dashboard to secondary nav in ${p.file}`);
            }
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
});

// Update index.html hero chip and study resources
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes("window.location.href='dashboard.html'")) {
    const chipTarget = `<button type="button" class="search-chip" onclick="window.location.href='ai-assistant.html'"`;
    const dashChip = `<button type="button" class="search-chip" onclick="window.location.href='dashboard.html'" style="font-weight:600; border-color:#10b981; color:#10b981;"><i class="fa-solid fa-chart-line"></i> Learning Dashboard</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='ai-assistant.html'"`;
    indexContent = indexContent.replace(chipTarget, dashChip);
    console.log('Added Dashboard hero chip in index.html');
}

// Add Learning Dashboard card in study resources grid
if (!indexContent.includes('<h3>📊 Personalized Learning Dashboard</h3>')) {
    const gridTarget = `<div class="resources-grid">`;
    const dashCard = `<div class="resources-grid">
                <!-- Learning Dashboard Card -->
                <div class="resource-card" style="border: 1px solid rgba(16, 185, 129, 0.4); background: linear-gradient(135deg, rgba(16, 185, 129, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(16, 185, 129, 0.2); color: #10b981;"><i class="fa-solid fa-chart-pie"></i></div>
                    <div class="resource-content">
                        <h3>📊 Personalized Learning Dashboard</h3>
                        <p>Track your completed screening tests, overall accuracy, weak subjects (&lt;60% accuracy), cumulative and daily study hours with an interactive Pomodoro study timer, and weekly score improvement trajectory toward CSS/FPSC merit.</p>
                        <div class="resource-meta"><span style="color:#10b981;"><i class="fa-solid fa-crosshairs"></i> Weak Area Diagnostics</span> <span>⏱️ Study Hours &amp; History</span></div>
                        <a href="dashboard.html" class="resource-btn" style="background: #10b981; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-chart-line"></i> Open Learning Dashboard</a>
                    </div>
                </div>`;
    indexContent = indexContent.replace(gridTarget, dashCard);
    console.log('Added Learning Dashboard card to study-resources in index.html');
}

// Ensure data_learning_dashboard.js is in index.html
if (!indexContent.includes('js/data_learning_dashboard.js')) {
    const appJsTarget = '<script src="js/app.js"></script>';
    const rep = '<script src="js/data_learning_dashboard.js"></script>\n    <script src="js/app.js"></script>';
    if (indexContent.includes(appJsTarget)) {
        indexContent = indexContent.replace(appJsTarget, rep);
        console.log('Added data_learning_dashboard.js to index.html');
    }
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('All navigation and index updates completed successfully!');
