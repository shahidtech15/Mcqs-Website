const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

const pages = [
    { file: 'index.html', active: 'Home' },
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

    // 2. Ensure secondary navbar has World Map
    const secNavRegex = /(<ul class="secondary-nav-links">[\s\S]*?<\/ul>)/;
    const secMatch = content.match(secNavRegex);
    if (secMatch) {
        let secContent = secMatch[1];
        if (!secContent.includes('world-map.html')) {
            const homeLi = /<li><a href="index\.html"[^>]*>Home<\/a><\/li>/;
            if (homeLi.test(secContent)) {
                const addLinks = `<li><a href="index.html">Home</a></li>\n                <li><a href="world-map.html"${p.active === 'World Map' ? ' class="active"' : ''} style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-earth-americas"></i> Interactive World Map</a></li>`;
                secContent = secContent.replace(homeLi, addLinks);
                content = content.replace(secNavRegex, secContent);
                console.log(`Added World Map to secondary nav in ${p.file}`);
            }
        }
    }

    fs.writeFileSync(fullPath, content, 'utf8');
});

// Update index.html hero suggestion chip and study resources
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes("window.location.href='world-map.html'")) {
    const chipTarget = `<button type="button" class="search-chip" onclick="window.location.href='digital-library.html'"`;
    const mapChip = `<button type="button" class="search-chip" onclick="window.location.href='world-map.html'" style="font-weight:600; border-color:#0284c7; color:#0284c7;"><i class="fa-solid fa-earth-americas"></i> Interactive World Map</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='digital-library.html'"`;
    indexContent = indexContent.replace(chipTarget, mapChip);
    console.log('Added World Map hero chip in index.html');
}

// Add World Map card in study resources grid
if (!indexContent.includes('<h3>🗺️ Interactive World Map &amp; Country Explorer</h3>')) {
    const gridTarget = `<div class="resources-grid">`;
    const mapCard = `<div class="resources-grid">
                <!-- Interactive World Map Card -->
                <div class="resource-card" style="border: 1px solid rgba(2, 132, 199, 0.4); background: linear-gradient(135deg, rgba(2, 132, 199, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(2, 132, 199, 0.2); color: #0284c7;"><i class="fa-solid fa-earth-americas"></i></div>
                    <div class="resource-content">
                        <h3>🗺️ Interactive World Map &amp; Country Explorer</h3>
                        <p>Click on any country across all continents to discover its capital, currency, population, official language, political system, neighbouring countries, and international organizations. Includes multi-nation alliance highlighting for OIC, SCO, NATO, SAARC, BRICS, and ASEAN.</p>
                        <div class="resource-meta"><span style="color:#0284c7;"><i class="fa-solid fa-globe"></i> 180 Sovereign Nations</span> <span>⭐ Dynamic Vector Map</span></div>
                        <a href="world-map.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-map-location-dot"></i> Launch Interactive World Map</a>
                    </div>
                </div>`;
    indexContent = indexContent.replace(gridTarget, mapCard);
    console.log('Added World Map card to study-resources in index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');

// Update digital-library.html to link to world map under Tab 4
const libPath = path.join(frontendDir, 'digital-library.html');
let libContent = fs.readFileSync(libPath, 'utf8');
if (!libContent.includes('Launch Full Interactive World Map &amp; Country Explorer')) {
    const mapTabTarget = `<div class="tab-pane" id="tab-maps" style="display: none;">`;
    const mapTabWithBanner = `<div class="tab-pane" id="tab-maps" style="display: none;">
            <!-- Interactive World Map Banner -->
            <div style="background: linear-gradient(135deg, #092c48 0%, #0f4c81 100%); color: #ffffff; border-radius: 14px; padding: 22px 26px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; box-shadow: var(--card-shadow);">
                <div>
                    <h3 style="margin: 0 0 6px; font-size: 1.35rem; font-weight: 800; color: #ffffff;"><i class="fa-solid fa-earth-americas" style="color: #38bdf8;"></i> Interactive World Map &amp; Country Intelligence Explorer</h3>
                    <p style="margin: 0; font-size: 0.92rem; opacity: 0.94; max-width: 800px; line-height: 1.5;">Click any country on the vector world map to inspect capitals, currencies, demographics, political systems, bordering nations, and international organizations (OIC, SCO, NATO, BRICS, SAARC).</p>
                </div>
                <a href="world-map.html" class="lib-action-btn" style="background: #38bdf8; color: #0f172a; font-weight: 700; padding: 10px 20px; font-size: 0.92rem;">
                    <i class="fa-solid fa-map-location-dot"></i> Launch Interactive World Map &rarr;
                </a>
            </div>`;
    libContent = libContent.replace(mapTabTarget, mapTabWithBanner);
    fs.writeFileSync(libPath, libContent, 'utf8');
    console.log('Added Interactive World Map banner to digital-library.html Tab 4');
}

console.log('All updates completed successfully!');
