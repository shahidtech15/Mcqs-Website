// scratch/sync_navigation_links.js
const fs = require('fs');
const path = require('path');

// 1. Update frontend/index.html
let indexHtml = fs.readFileSync('frontend/index.html', 'utf8');

// Nav link
if (!indexHtml.includes('<a href="topic-nato.html">One-Topic: NATO</a>')) {
    indexHtml = indexHtml.replace(
        '<a href="topic-european-union.html">One-Topic: EU</a>',
        '<a href="topic-european-union.html">One-Topic: EU</a>\n                <a href="topic-nato.html">One-Topic: NATO</a>'
    );
}

// Secondary nav
if (!indexHtml.includes('One-Topic: NATO</a></li>')) {
    indexHtml = indexHtml.replace(
        '<li><a href="topic-european-union.html" style="font-weight: 700; color: #003399;"><i class="fa-solid fa-shield-halved"></i> One-Topic: EU</a></li>',
        '<li><a href="topic-european-union.html" style="font-weight: 700; color: #003399;"><i class="fa-solid fa-shield-halved"></i> One-Topic: EU</a></li>\n                        <li><a href="topic-nato.html" style="font-weight: 700; color: #004990;"><i class="fa-solid fa-jet-fighter"></i> One-Topic: NATO</a></li>'
    );
}

// Search chip
if (!indexHtml.includes("onclick=\"window.location.href='topic-nato.html'\"")) {
    indexHtml = indexHtml.replace(
        `<button type="button" class="search-chip" onclick="window.location.href='topic-european-union.html'" style="font-weight:600; border-color:#003399; color:#003399;"><i class="fa-solid fa-shield-halved"></i> One Topic: European Union (50 MCQs &amp; Notes)</button>`,
        `<button type="button" class="search-chip" onclick="window.location.href='topic-european-union.html'" style="font-weight:600; border-color:#003399; color:#003399;"><i class="fa-solid fa-shield-halved"></i> One Topic: European Union (50 MCQs &amp; Notes)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href='topic-nato.html'" style="font-weight:600; border-color:#004990; color:#004990;"><i class="fa-solid fa-jet-fighter"></i> One Topic: NATO (50 MCQs &amp; Notes)</button>`
    );
}

// Resource Card in Grid
const natoCard = `                <!-- One Topic: NATO Master Preparation Card -->
                <div class="resource-card" style="border: 1px solid rgba(0, 73, 144, 0.4); background: linear-gradient(135deg, rgba(0, 73, 144, 0.08), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(0, 73, 144, 0.2); color: #004990;"><i class="fa-solid fa-jet-fighter"></i></div>
                    <div class="resource-content">
                        <h3>🛡️ One Topic, One Complete Page: NATO Alliance</h3>
                        <p>Complete 360° syllabus module for CSS, PMS &amp; FPSC: Washington Treaty 1949, Article 5 Collective Defence, SACEUR at SHAPE (Mons), all 10 Enlargement Waves (32 Members including Finland &amp; Sweden), Pakistan's Major Non-NATO Ally (MNNA) role, Afghan War GLOCs, Salala Incident, 2024–2026 current affairs (Washington Summit, Mark Rutte), 50 interactive practice MCQs with explanations, past subjective exam outlines, and downloadable notes.</p>
                        <div class="resource-meta"><span style="color:#004990;"><i class="fa-solid fa-jet-fighter"></i> NATO Master Dossier</span> <span>⚡ 50 MCQs + 4 Outlines + Printable Notes</span></div>
                        <a href="topic-nato.html" class="resource-btn" style="background: #004990; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-arrow-right"></i> Open NATO Preparation Hub</a>
                    </div>
                </div>`;

if (!indexHtml.includes('topic-nato.html" class="resource-btn"')) {
    indexHtml = indexHtml.replace(
        '<!-- In-Depth Study Articles Card -->',
        natoCard + '\n                <!-- In-Depth Study Articles Card -->'
    );
}

fs.writeFileSync('frontend/index.html', indexHtml, 'utf8');
console.log('Updated frontend/index.html');

// 2. Update frontend/articles.html
let artHtml = fs.readFileSync('frontend/articles.html', 'utf8');

// Nav links
if (!artHtml.includes('<a href="topic-nato.html">One-Topic: NATO</a>')) {
    artHtml = artHtml.replace(
        '<a href="topic-european-union.html">One-Topic: EU</a>',
        '<a href="topic-european-union.html">One-Topic: EU</a>\n                <a href="topic-nato.html">One-Topic: NATO</a>'
    );
}

// Secondary nav
if (!artHtml.includes('NATO Master Hub</a></li>')) {
    artHtml = artHtml.replace(
        '<li><a href="topic-european-union.html" style="font-weight: 700; color: #003399;"><i class="fa-solid fa-shield-halved"></i> EU Master Hub</a></li>',
        '<li><a href="topic-european-union.html" style="font-weight: 700; color: #003399;"><i class="fa-solid fa-shield-halved"></i> EU Master Hub</a></li>\n                        <li><a href="topic-nato.html" style="font-weight: 700; color: #004990;"><i class="fa-solid fa-jet-fighter"></i> NATO Master Hub</a></li>'
    );
}

// Banner grid card
const natoBannerCard = `            <!-- NATO Banner Card -->
            <div style="background: linear-gradient(135deg, #00122e 0%, #004990 100%); color: #ffffff; border-radius: 16px; padding: 22px 24px; display: flex; flex-direction: column; justify-content: space-between; gap: 14px; box-shadow: 0 4px 18px rgba(0, 73, 144, 0.28);">
                <div>
                    <span style="font-size: 0.78rem; font-weight: 800; background: rgba(56, 189, 248, 0.25); border: 1px solid rgba(56, 189, 248, 0.4); padding: 4px 10px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.05em; color: #7dd3fc;"><i class="fa-solid fa-jet-fighter"></i> Master Preparation Dossier</span>
                    <h3 style="font-size: 1.3rem; font-weight: 800; margin: 8px 0 4px 0; color: #ffffff;">The NATO Alliance Master Dossier</h3>
                    <p style="margin: 0; font-size: 0.9rem; color: #dbeafe; line-height: 1.5;">Complete 360° module: Washington Treaty 1949, Article 5 Collective Defence, SACEUR at SHAPE, 10 Enlargements (32 Members), Pakistan MNNA &amp; GLOCs, 2024–2026 shifts, 50 interactive MCQs, and past CSS outlines.</p>
                </div>
                <a href="topic-nato.html" style="background: #38bdf8; color: #001b44; font-weight: 800; padding: 10px 18px; border-radius: 10px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); align-self: flex-start;">
                    <i class="fa-solid fa-jet-fighter"></i> Open NATO Preparation Hub <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>`;

if (!artHtml.includes('The NATO Alliance Master Dossier')) {
    artHtml = artHtml.replace(
        '            <!-- EU Banner Card -->',
        natoBannerCard + '\n            <!-- EU Banner Card -->'
    );
}

fs.writeFileSync('frontend/articles.html', artHtml, 'utf8');
console.log('Updated frontend/articles.html');

// 3. Update frontend/topic-united-nations.html & frontend/topic-european-union.html navbars
['frontend/topic-united-nations.html', 'frontend/topic-european-union.html'].forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('topic-nato.html')) {
        content = content.replace(
            '<a href="topic-european-union.html',
            '<a href="topic-nato.html">One-Topic: NATO</a>\n                <a href="topic-european-union.html'
        );
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated navbar in', filePath);
    }
});

// 4. Update digital-library.html, timeline.html, acts-rules.html, leaderboard.html, dashboard.html
['frontend/digital-library.html', 'frontend/timeline.html', 'frontend/acts-rules.html', 'frontend/leaderboard.html', 'frontend/dashboard.html'].forEach(filePath => {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('topic-nato.html') && content.includes('topic-european-union.html')) {
            content = content.replace(
                '<a href="topic-european-union.html">One-Topic: EU</a>',
                '<a href="topic-european-union.html">One-Topic: EU</a>\n                <a href="topic-nato.html">One-Topic: NATO</a>'
            );
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated navbar in', filePath);
        }
    }
});
