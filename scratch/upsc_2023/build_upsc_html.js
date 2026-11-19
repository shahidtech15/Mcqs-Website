const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', '..', 'frontend', 'js', 'data_upsc_essays_2023.js');
const essaysData = require(dataFile);

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="UPSC Civil Services (Main) Examination 2023 Solved Essay Paper. Complete model essays and comprehensive outlines for all 8 topics across Sections A and B (1,000 - 1,200 words each).">
    <meta name="keywords"
        content="UPSC CSE 2023 Essay Paper Solved, UPSC Mains 2023 Essay Solutions, Thinking is like a game, Visionary decision-making, Not all who wander are lost, Girls are weighed down by restrictions, Mathematics is the music of reason, A society that has more justice, Education is what remains">
    <title>UPSC CSE Mains 2023 Solved Essay Paper | All 8 Topics Solved | CSS Prep Central</title>
    <!-- Anti-FOUC: apply dark mode before stylesheets paint -->
    <script>if(localStorage.getItem('mcqs_dark_mode')==='true')document.documentElement.classList.add('dark-mode');</script>
    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --upsc-primary: #7c2d12;
            --upsc-primary-dark: #431407;
            --upsc-primary-light: #ffedd5;
            --upsc-accent: #f59e0b;
            --upsc-card-bg: #ffffff;
            --upsc-border: #fed7aa;
            --upsc-text-main: #0f172a;
            --upsc-text-muted: #64748b;
        }

        .dark-mode {
            --upsc-primary: #fdba74;
            --upsc-primary-dark: #7c2d12;
            --upsc-primary-light: #431407;
            --upsc-accent: #fbbf24;
            --upsc-card-bg: #1e293b;
            --upsc-border: #475569;
            --upsc-text-main: #f8fafc;
            --upsc-text-muted: #94a3b8;
        }

        body {
            background-color: var(--bg-light);
            color: var(--upsc-text-main);
            font-family: 'Inter', sans-serif;
            line-height: 1.75;
            margin: 0;
            padding: 0;
        }

        .essays-hub-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 24px 20px 80px;
        }

        /* Hero Masthead */
        .essays-hero {
            background: linear-gradient(135deg, #431407 0%, #7c2d12 55%, #9a3412 100%);
            color: #ffffff;
            border-radius: 20px;
            padding: 40px 36px;
            margin-bottom: 28px;
            box-shadow: 0 12px 35px rgba(124, 45, 18, 0.25);
            position: relative;
            overflow: hidden;
        }

        .essays-hero::after {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 450px;
            height: 450px;
            background: radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(245, 158, 11, 0.2);
            border: 1px solid rgba(245, 158, 11, 0.4);
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #fef08a;
            margin-bottom: 14px;
        }

        .hero-title {
            font-family: 'Outfit', sans-serif;
            font-size: 2.2rem;
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 12px;
        }

        .hero-subtitle {
            font-size: 1.05rem;
            color: #ffedd5;
            max-width: 950px;
            line-height: 1.6;
            margin-bottom: 24px;
        }

        .hero-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 24px;
        }

        .stat-pill {
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #ffffff;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .stat-pill i { color: #fde047; }

        /* Quick Topic Navigator */
        .quick-nav-box {
            background: var(--upsc-card-bg);
            border: 1px solid var(--upsc-border);
            border-radius: 16px;
            padding: 20px 24px;
            margin-bottom: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        .quick-nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 14px;
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--upsc-primary);
        }
        .quick-nav-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .topic-pill-btn {
            background: var(--upsc-primary-light);
            color: var(--upsc-primary-dark);
            border: 1px solid var(--upsc-border);
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }
        .dark-mode .topic-pill-btn {
            background: #2d1810;
            color: #fdba74;
            border-color: #7c2d12;
        }
        .topic-pill-btn:hover, .topic-pill-btn.active {
            background: #7c2d12;
            color: #ffffff;
            border-color: #7c2d12;
        }

        /* Essay Card */
        .essay-card {
            background: var(--upsc-card-bg);
            border: 1px solid var(--upsc-border);
            border-radius: 18px;
            padding: 36px;
            margin-bottom: 40px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
            scroll-margin-top: 90px;
        }

        .essay-card-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 20px;
            border-bottom: 2px solid var(--upsc-border);
            padding-bottom: 20px;
        }

        .topic-badge-row {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-bottom: 8px;
        }

        .section-tag {
            background: #7c2d12;
            color: #ffffff;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.78rem;
            font-weight: 700;
            text-transform: uppercase;
        }
        .category-tag {
            background: #fef3c7;
            color: #92400e;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.78rem;
            font-weight: 600;
        }
        .dark-mode .category-tag {
            background: #36200d;
            color: #fde68a;
        }

        .essay-card-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.6rem;
            font-weight: 800;
            color: var(--upsc-primary);
            line-height: 1.35;
            margin: 0 0 6px 0;
        }
        .hindi-title {
            font-size: 1.15rem;
            color: var(--upsc-text-muted);
            font-style: italic;
            margin-bottom: 8px;
        }

        .thesis-statement-box {
            background: rgba(124, 45, 18, 0.06);
            border-left: 5px solid #7c2d12;
            border-radius: 0 12px 12px 0;
            padding: 18px 22px;
            margin: 20px 0 24px;
            font-size: 1.05rem;
            line-height: 1.7;
            font-weight: 500;
        }
        .dark-mode .thesis-statement-box {
            background: rgba(253, 186, 116, 0.1);
            border-left-color: #fdba74;
        }

        .view-toggle-nav {
            display: flex;
            gap: 10px;
            margin-bottom: 24px;
        }
        .view-btn {
            background: transparent;
            border: 1px solid var(--upsc-border);
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            color: var(--upsc-text-muted);
            transition: all 0.2s;
        }
        .view-btn.active {
            background: #7c2d12;
            color: #ffffff;
            border-color: #7c2d12;
        }

        .outline-container {
            background: rgba(0, 0, 0, 0.02);
            border: 1px dashed var(--upsc-border);
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
            font-family: 'Inter', sans-serif;
            font-size: 0.95rem;
            line-height: 1.8;
        }
        .outline-container ul {
            list-style-type: none;
            padding-left: 15px;
        }
        .outline-container li {
            position: relative;
            margin-bottom: 6px;
        }
        .outline-container li::before {
            content: "•";
            color: #f59e0b;
            font-weight: bold;
            font-size: 1.2rem;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }

        .essay-body-prose h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 1.35rem;
            color: #7c2d12;
            margin-top: 32px;
            margin-bottom: 12px;
            border-bottom: 1px solid var(--upsc-border);
            padding-bottom: 6px;
        }
        .dark-mode .essay-body-prose h3 {
            color: #fdba74;
        }
        .essay-body-prose p {
            font-size: 1.05rem;
            line-height: 1.85;
            margin-bottom: 18px;
        }

        .back-to-top {
            text-align: right;
            margin-top: 24px;
        }
        .back-to-top a {
            color: var(--upsc-primary);
            text-decoration: none;
            font-size: 0.88rem;
            font-weight: 600;
        }
    </style>
</head>

<body>
    <header class="navbar" style="background:#1c0d08; padding: 14px 24px; border-bottom: 1px solid #431407;">
        <div style="max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;">
            <a href="index.html" style="color: #ffffff; text-decoration: none; font-size: 1.25rem; font-weight: 800; font-family: 'Outfit', sans-serif; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-graduation-cap" style="color: #f59e0b;"></i> CSS Prep Central
            </a>
            <div style="display: flex; gap: 16px; align-items: center;">
                <a href="written-prep.html" style="color: #fed7aa; text-decoration: none; font-size: 0.92rem; font-weight: 600;">Written Prep</a>
                <a href="recruitment-prep.html" style="color: #fed7aa; text-decoration: none; font-size: 0.92rem; font-weight: 600;">Recruitment Hub</a>
                <a href="cce-essays-2025.html" style="color: #fed7aa; text-decoration: none; font-size: 0.92rem; font-weight: 600;">CCE 2025</a>
                <a href="css-essays-2026.html" style="color: #fed7aa; text-decoration: none; font-size: 0.92rem; font-weight: 600;">CSS 2026</a>
                <a href="css-essays-2021.html" style="color: #fed7aa; text-decoration: none; font-size: 0.92rem; font-weight: 600;">CSS 2021</a>
                <button id="themeToggleBtn" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fef08a; padding: 6px 12px; border-radius: 8px; cursor: pointer;">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>
    </header>

    <main class="essays-hub-container">
        <!-- Hero Masthead -->
        <section class="essays-hero">
            <span class="hero-badge"><i class="fas fa-landmark"></i> UPSC Civil Services (Main) Examination 2023 Solved Paper</span>
            <h1 class="hero-title">UPSC CSE 2023 Solved Essay Paper (SKYC-G-ESSY)</h1>
            <p class="hero-subtitle">
                Complete, authoritative model solutions for all 8 essay topics across Sections A and B. Crafted strictly in accordance with examination conditions (1,000–1,200 words each), complete with comprehensive hierarchical outlines, thesis statements, philosophical dialectics, and multi-dimensional analysis.
            </p>
            <div class="hero-stats">
                <span class="stat-pill"><i class="fas fa-file-invoice"></i> 8 Complete Solved Essays</span>
                <span class="stat-pill"><i class="fas fa-pen-nib"></i> ~10,250 Total Words</span>
                <span class="stat-pill"><i class="fas fa-clock"></i> 3 Hours | 250 Total Marks</span>
                <span class="stat-pill"><i class="fas fa-award"></i> Section A &amp; B Covered</span>
            </div>
        </section>

        <!-- Quick Topic Navigator -->
        <section class="quick-nav-box">
            <div class="quick-nav-header">
                <span><i class="fas fa-compass"></i> Quick Topic Navigator</span>
                <span>8 UPSC CSE 2023 Essay Topics</span>
            </div>
            <div class="quick-nav-pills">
                ${essaysData.map(e => `
                    <a href="#topic-${e.topicNumber}" class="topic-pill-btn">
                        <strong>Q.${e.topicNumber}</strong> (${e.section}): ${e.title.substring(0, 32)}...
                    </a>
                `).join('')}
            </div>
        </section>

        <!-- Essays Container -->
        <div id="essaysList">
            ${essaysData.map(e => {
                const outlineHtml = e.outline.map(line => `<li>${line}</li>`).join('');
                const bodyHtml = e.essayText
                    .replace(/### (.*?)\n/g, '<h3>$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/\n\n/g, '</p><p>');

                return `
                <article class="essay-card" id="topic-${e.topicNumber}">
                    <div class="essay-card-header">
                        <div>
                            <div class="topic-badge-row">
                                <span class="section-tag">${e.section}</span>
                                <span class="category-tag">${e.category}</span>
                                <span style="font-size: 0.85rem; color: var(--upsc-text-muted); font-weight: 600;">
                                    <i class="fas fa-file-word"></i> ~${e.wordCount} Words
                                </span>
                            </div>
                            <h2 class="essay-card-title">Q.${e.topicNumber}. ${e.title}</h2>
                            <div class="hindi-title">${e.hindiTitle}</div>
                        </div>
                    </div>

                    <div class="thesis-statement-box">
                        <strong><i class="fas fa-bullseye" style="color: #f59e0b;"></i> Thesis Statement:</strong> ${e.thesisStatement}
                    </div>

                    <div class="view-toggle-nav">
                        <button class="view-btn active" onclick="toggleView(${e.topicNumber}, 'essay')">
                            <i class="fas fa-book-open"></i> Full Model Essay
                        </button>
                        <button class="view-btn" onclick="toggleView(${e.topicNumber}, 'outline')">
                            <i class="fas fa-list-ol"></i> Comprehensive Outline
                        </button>
                    </div>

                    <div id="outline-box-${e.topicNumber}" class="outline-container" style="display: none;">
                        <h4 style="margin-top:0; color:#7c2d12;"><i class="fas fa-list-check"></i> Hierarchical Outline</h4>
                        <ul>${outlineHtml}</ul>
                    </div>

                    <div id="essay-box-${e.topicNumber}" class="essay-body-prose">
                        <p>${bodyHtml}</p>
                    </div>

                    <div class="back-to-top">
                        <a href="#top"><i class="fas fa-arrow-up"></i> Back to Top</a>
                    </div>
                </article>
                `;
            }).join('')}
        </div>
    </main>

    <footer class="footer" style="background: #1c0d08; color: #fed7aa; padding: 40px 20px; text-align: center; border-top: 1px solid #431407;">
        <p>&copy; 2026 CSS Prep Central. Authoritative Civil Services Examination Resources for CSS, PMS, CCE &amp; UPSC.</p>
    </footer>

    <script>
        function toggleView(topicNum, viewType) {
            const outlineBox = document.getElementById('outline-box-' + topicNum);
            const essayBox = document.getElementById('essay-box-' + topicNum);
            const card = document.getElementById('topic-' + topicNum);
            const btns = card.querySelectorAll('.view-btn');

            if (viewType === 'outline') {
                outlineBox.style.display = 'block';
                essayBox.style.display = 'none';
                btns[0].classList.remove('active');
                btns[1].classList.add('active');
            } else {
                outlineBox.style.display = 'none';
                essayBox.style.display = 'block';
                btns[0].classList.add('active');
                btns[1].classList.remove('active');
            }
        }

        // Dark Mode Toggle
        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark-mode');
                const isDark = document.documentElement.classList.contains('dark-mode');
                localStorage.setItem('mcqs_dark_mode', isDark);
                themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            });
        }
    </script>
</body>
</html>
`;

const targetHtmlPath = path.join(__dirname, '..', '..', 'frontend', 'upsc-essays-2023.html');
fs.writeFileSync(targetHtmlPath, htmlTemplate, 'utf8');
console.log(`Successfully generated ${targetHtmlPath}! Size: ${fs.statSync(targetHtmlPath).size} bytes`);
