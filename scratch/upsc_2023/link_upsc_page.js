const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '..', '..', 'frontend');

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
    if (!content.includes('href="upsc-essays-2023.html"')) {
        const targetNav = '<a href="cce-essays-2025.html"';
        const replacementNav = '<a href="upsc-essays-2023.html" style="font-weight:700; color:#7c2d12;">UPSC Essays 2023</a>\n                <a href="cce-essays-2025.html"';
        content = content.replace(targetNav, replacementNav);

        const targetChip = `<button type="button" class="search-chip" onclick="window.location.href='cce-essays-2025.html'`;
        const newChip = `<button type="button" class="search-chip" onclick="window.location.href='upsc-essays-2023.html'" style="font-weight:700; border-color:#7c2d12; color:#7c2d12;"><i class="fa-solid fa-landmark"></i> UPSC CSE 2023 Essays (All 8 Solved)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='cce-essays-2025.html'`;
        content = content.replace(targetChip, newChip);
    }
    return content;
});

// 2. written-prep.html
updateFile('written-prep.html', (content) => {
    if (!content.includes('href="upsc-essays-2023.html"')) {
        const targetNav = '<a href="cce-essays-2025.html"';
        const replacementNav = '<a href="upsc-essays-2023.html" style="font-weight: 700; color: #7c2d12;">UPSC Essays 2023 <span style="background:#fde047; color:#431407; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="cce-essays-2025.html"';
        content = content.replace(targetNav, replacementNav);

        // Add showcase banner right above Russia-Ukraine War banner
        const targetBanner = '<!-- Russia-Ukraine War Master Essay Banner -->';
        const newBanner = `<!-- UPSC CSE 2023 Solved Essay Paper Banner -->
        <div style="background: linear-gradient(135deg, #431407 0%, #7c2d12 60%, #9a3412 100%); color: #ffffff; border-radius: 16px; padding: 28px 32px; margin-bottom: 35px; box-shadow: 0 10px 25px rgba(124, 45, 18, 0.25); display: flex; flex-direction: column; gap: 14px;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <span style="background: rgba(245, 158, 11, 0.25); border: 1px solid rgba(245, 158, 11, 0.4); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; color: #fef08a; text-transform: uppercase;">
                    <i class="fa-solid fa-landmark"></i> UPSC Civil Services (Mains) 2023 Solved Paper
                </span>
                <span style="font-size: 0.85rem; color: #fed7aa; font-weight: 500;">
                    <i class="fa-solid fa-feather-pointed"></i> 8 Solved Topics • Sections A &amp; B (10,250 Words)
                </span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px;">
                <h2 style="color: #ffffff; font-size: 1.6rem; font-weight: 800; margin: 0; font-family: 'Outfit', sans-serif;">
                    UPSC CSE 2023 Master Solved Essay Collection
                </h2>
                <p style="color: #ffedd5; font-size: 0.96rem; line-height: 1.6; margin: 0; max-width: 950px;">
                    Philosophical, epistemological, gender, and socio-ethical essays strictly following UPSC word limits (1,000–1,200 words each). Features thinking as a game, visionary decision-making, wandering, finding magic in the mundane, gender disciplines, mathematics as music of reason, justice vs charity, and the enduring residue of education.
                </p>
            </div>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center; margin-top: 6px;">
                <a href="upsc-essays-2023.html" style="background: #f59e0b; color: #0f172a; padding: 10px 22px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);">
                    <i class="fa-solid fa-book-open"></i> Read All 8 UPSC 2023 Solved Essays
                </a>
            </div>
        </div>

        <!-- Russia-Ukraine War Master Essay Banner -->`;
        content = content.replace(targetBanner, newBanner);
    }
    return content;
});

// 3. cce-essays-2025.html
updateFile('cce-essays-2025.html', (content) => {
    if (!content.includes('href="upsc-essays-2023.html"')) {
        const targetNav = '<a href="cce-essays-2025.html" class="active">CCE Essays 2025</a>';
        const replacementNav = '<a href="upsc-essays-2023.html" style="font-weight: 700; color: #7c2d12;">UPSC Essays 2023</a>\n                <a href="cce-essays-2025.html" class="active">CCE Essays 2025</a>';
        content = content.replace(targetNav, replacementNav);
    }
    return content;
});

// 4. css-essays-2026.html
updateFile('css-essays-2026.html', (content) => {
    if (!content.includes('href="upsc-essays-2023.html"')) {
        const targetNav = '<a href="cce-essays-2025.html">';
        const replacementNav = '<a href="upsc-essays-2023.html" style="font-weight: 700; color: #7c2d12;">UPSC Essays 2023</a>\n                <a href="cce-essays-2025.html">';
        content = content.replace(targetNav, replacementNav);
    }
    return content;
});

// 5. css-essays-2021.html
updateFile('css-essays-2021.html', (content) => {
    if (!content.includes('href="upsc-essays-2023.html"')) {
        const targetNav = '<a href="cce-essays-2025.html">';
        const replacementNav = '<a href="upsc-essays-2023.html" style="font-weight: 700; color: #7c2d12;">UPSC Essays 2023</a>\n                <a href="cce-essays-2025.html">';
        content = content.replace(targetNav, replacementNav);
    }
    return content;
});

console.log('UPSC essays linking completed!');
