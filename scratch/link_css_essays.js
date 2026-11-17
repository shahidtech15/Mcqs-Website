// scratch/link_css_essays.js
const fs = require('fs');

// 1. Update frontend/written-prep.html
let wp = fs.readFileSync('frontend/written-prep.html', 'utf8');

// Nav links
if (!wp.includes('css-essays-2021.html')) {
    wp = wp.replace(
        '<a href="written-prep.html" class="active">Written Prep</a>',
        '<a href="css-essays-2021.html" style="font-weight: 700; color: #831843;">CSS Essays 2021</a>\n                <a href="written-prep.html" class="active">Written Prep</a>'
    );
}

// Banner above section 1
const wpBanner = `        <!-- CSS 2021 Complete Solved Essays Hub Showcase Banner -->
        <div style="background: linear-gradient(135deg, #4c0519 0%, #831843 60%, #1e1b4b 100%); color: #ffffff; border-radius: 16px; padding: 28px 32px; margin-bottom: 35px; box-shadow: 0 10px 25px rgba(131, 24, 67, 0.25); display: flex; flex-direction: column; gap: 14px;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                <span style="background: rgba(251, 191, 36, 0.25); border: 1px solid rgba(251, 191, 36, 0.4); padding: 4px 12px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; color: #fde047; text-transform: uppercase;">
                    <i class="fa-solid fa-award"></i> FPSC CSS 2021 Solved Paper
                </span>
                <span style="font-size: 0.85rem; color: #fce7f3; font-weight: 600;"><i class="fa-solid fa-book"></i> 10 Complete Essays | 25,457 Words</span>
            </div>
            <h2 style="font-size: 1.6rem; margin: 0; color: #ffffff; font-family: 'Outfit', 'Inter', sans-serif;">
                Complete Model Essays on All 10 Topics of CSS 2021 English Essay Paper
            </h2>
            <p style="margin: 0; font-size: 0.95rem; color: #fce7f3; line-height: 1.6; max-width: 950px;">
                Comprehensive civil services model essays with complete multi-tier formal outlines, unambiguous thesis statements, and rigorous integration of all four mandated discourses (exposition, argumentation, description, and narration) across all ten paper prompts.
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 6px;">
                <a href="css-essays-2021.html" style="background: #fde047; color: #4c0519; font-weight: 800; padding: 10px 20px; border-radius: 8px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <i class="fa-solid fa-book-open"></i> Open CSS 2021 Solved Essays Hub <i class="fa-solid fa-arrow-right"></i>
                </a>
                <button type="button" onclick="window.open('css-essays-2021.html', '_blank')" style="background: rgba(255, 255, 255, 0.15); color: #ffffff; font-weight: 700; padding: 10px 18px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.3); cursor: pointer;">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Open in New Tab
                </button>
            </div>
        </div>
`;

if (!wp.includes('CSS 2021 Complete Solved Essays Hub Showcase Banner')) {
    wp = wp.replace(
        '<main class="written-container">',
        '<main class="written-container">\n' + wpBanner
    );
}

fs.writeFileSync('frontend/written-prep.html', wp, 'utf8');
console.log('Updated frontend/written-prep.html');

// 2. Update frontend/index.html
let indexHtml = fs.readFileSync('frontend/index.html', 'utf8');

// Nav link
if (!indexHtml.includes('css-essays-2021.html')) {
    indexHtml = indexHtml.replace(
        '<a href="written-prep.html">Written Prep</a>',
        '<a href="css-essays-2021.html">CSS Essays 2021</a>\n                <a href="written-prep.html">Written Prep</a>'
    );
}

// Search chip
if (!indexHtml.includes("onclick=\"window.location.href='css-essays-2021.html'\"")) {
    indexHtml = indexHtml.replace(
        `<button type="button" class="search-chip" onclick="window.location.href='topic-nato.html'`,
        `<button type="button" class="search-chip" onclick="window.location.href='css-essays-2021.html'" style="font-weight:600; border-color:#831843; color:#831843;"><i class="fa-solid fa-pen-nib"></i> CSS 2021 Solved Essays (10 Complete)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='topic-nato.html'`
    );
}

// Resource Card
const cssEssaysCard = `                <!-- CSS 2021 Solved Essays Master Card -->
                <div class="resource-card" style="border: 1px solid rgba(131, 24, 67, 0.4); background: linear-gradient(135deg, rgba(131, 24, 67, 0.08), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(131, 24, 67, 0.2); color: #831843;"><i class="fa-solid fa-feather-pointed"></i></div>
                    <div class="resource-content">
                        <h3>✍️ CSS Competitive Examination 2021: 10 Solved English Essays</h3>
                        <p>Authoritative, 100% complete model essays on all 10 topics of the CSS 2021 Essay paper: Water Waste (Hadith), Purposive Education, COVID-19 &amp; Research, Inventions &amp; Regression, Universal Equality, Bureaucracy Doldrums, Gender Equality, Globalization, Intercultural Communication, and Shelley's "Thorns of Life". Includes formal outlines, thesis statements, and all 4 discourses (25,457 words).</p>
                        <div class="resource-meta"><span style="color:#831843;"><i class="fa-solid fa-award"></i> FPSC Model Papers</span> <span>⚡ 10 Essays + 10 Outlines + PDF Export</span></div>
                        <a href="css-essays-2021.html" class="resource-btn" style="background: #831843; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-arrow-right"></i> Read All 10 CSS 2021 Essays</a>
                    </div>
                </div>`;

if (!indexHtml.includes('css-essays-2021.html" class="resource-btn"')) {
    indexHtml = indexHtml.replace(
        '<!-- In-Depth Study Articles Card -->',
        cssEssaysCard + '\n                <!-- In-Depth Study Articles Card -->'
    );
}

fs.writeFileSync('frontend/index.html', indexHtml, 'utf8');
console.log('Updated frontend/index.html');

// 3. Update frontend/articles.html
let artHtml = fs.readFileSync('frontend/articles.html', 'utf8');
if (!artHtml.includes('css-essays-2021.html')) {
    artHtml = artHtml.replace(
        '<a href="written-prep.html">Written Prep</a>',
        '<a href="css-essays-2021.html">CSS Essays 2021</a>\n                <a href="written-prep.html">Written Prep</a>'
    );
    fs.writeFileSync('frontend/articles.html', artHtml, 'utf8');
    console.log('Updated frontend/articles.html');
}

// 4. Update frontend/digital-library.html
let libHtml = fs.readFileSync('frontend/digital-library.html', 'utf8');
if (!libHtml.includes('css-essays-2021.html')) {
    libHtml = libHtml.replace(
        '<a href="written-prep.html">Written Prep</a>',
        '<a href="css-essays-2021.html">CSS Essays 2021</a>\n                <a href="written-prep.html">Written Prep</a>'
    );
    fs.writeFileSync('frontend/digital-library.html', libHtml, 'utf8');
    console.log('Updated frontend/digital-library.html');
}
