const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'frontend', 'js', 'data_security_conflict_essays.js');
const essaysData = require(dataFile);

const htmlTemplate = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Global Security, Modern Warfare & Geopolitical Conflicts Solved Essays Hub. 12 Master Model Essays with Comprehensive Outlines, Thesis Statements, and Strategic Analysis for CSS, PMS, CCE, and UPSC Examinations. Topics include Russia-Ukraine, Israel-Palestine, Gaza Crisis, NATO, Indo-Pacific, South China Sea, Nuclear Deterrence, Cyber Warfare, AI Drones, and IHL.">
    <meta name="keywords"
        content="Global Security Essays, Russia Ukraine War, Israel Palestine Conflict, Gaza Humanitarian Crisis, Middle East Geopolitics, Iran Israel Rivalry, Future of NATO, Indo-Pacific Militarization, South China Sea Dispute, Nuclear Deterrence 21st Century, Cyber Warfare, Drones and AI Warfare, International Humanitarian Law">
    <title>Global Security &amp; Modern Warfare Solved Essays | CSS Prep Central</title>
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
            --sec-primary: #881337;
            --sec-primary-dark: #4c0519;
            --sec-primary-light: #fff1f2;
            --sec-accent: #e11d48;
            --sec-gold: #f59e0b;
            --sec-card-bg: #ffffff;
            --sec-border: #fecdd3;
            --sec-text-main: #0f172a;
            --sec-text-muted: #64748b;
        }

        .dark-mode {
            --sec-primary: #fda4af;
            --sec-primary-dark: #881337;
            --sec-primary-light: #4c0519;
            --sec-accent: #fb7185;
            --sec-gold: #fbbf24;
            --sec-card-bg: #1e293b;
            --sec-border: #475569;
            --sec-text-main: #f8fafc;
            --sec-text-muted: #94a3b8;
        }

        body {
            background-color: var(--bg-light);
            color: var(--sec-text-main);
            font-family: 'Inter', sans-serif;
            line-height: 1.8;
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
            background: linear-gradient(135deg, #4c0519 0%, #881337 50%, #9f1239 100%);
            color: #ffffff;
            border-radius: 20px;
            padding: 44px 38px;
            margin-bottom: 30px;
            box-shadow: 0 14px 38px rgba(136, 19, 55, 0.28);
            position: relative;
            overflow: hidden;
        }

        .essays-hero::after {
            content: '';
            position: absolute;
            top: -40%;
            right: -10%;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(225, 29, 72, 0.25) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(245, 158, 11, 0.2);
            border: 1px solid rgba(245, 158, 11, 0.45);
            padding: 6px 16px;
            border-radius: 999px;
            font-size: 0.84rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #fef08a;
            margin-bottom: 16px;
        }

        .hero-title {
            font-family: 'Outfit', sans-serif;
            font-size: 2.35rem;
            font-weight: 800;
            line-height: 1.25;
            margin: 0 0 16px 0;
        }

        .hero-subtitle {
            font-size: 1.05rem;
            line-height: 1.65;
            color: #ffe4e6;
            max-width: 950px;
            margin: 0 0 24px 0;
        }

        .hero-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
        }

        .stat-pill {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 0.88rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(255, 255, 255, 0.18);
        }

        /* Filter & Search Bar */
        .controls-card {
            background: var(--sec-card-bg);
            border: 1px solid var(--sec-border);
            border-radius: 16px;
            padding: 20px 24px;
            margin-bottom: 24px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            justify-content: space-between;
            align-items: center;
        }

        .search-box {
            position: relative;
            flex: 1;
            min-width: 280px;
        }

        .search-box input {
            width: 100%;
            padding: 12px 18px 12px 42px;
            border-radius: 10px;
            border: 1px solid var(--sec-border);
            background: var(--bg-light);
            color: var(--sec-text-main);
            font-size: 0.95rem;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.2s ease;
        }

        .search-box input:focus {
            border-color: var(--sec-accent);
        }

        .search-box i {
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--sec-text-muted);
        }

        /* Quick Navigator Box */
        .quick-nav-box {
            background: var(--sec-card-bg);
            border: 1px solid var(--sec-border);
            border-radius: 16px;
            padding: 20px 24px;
            margin-bottom: 32px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .quick-nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 14px;
            font-size: 0.98rem;
            font-weight: 700;
            color: var(--sec-primary);
        }

        .quick-nav-pills {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 10px;
        }

        .topic-pill-btn {
            background: var(--sec-primary-light);
            color: var(--sec-primary);
            border: 1px solid var(--sec-border);
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            line-height: 1.35;
        }

        .dark-mode .topic-pill-btn {
            background: #4c0519;
            color: #fda4af;
            border-color: #881337;
        }

        .topic-pill-btn:hover, .topic-pill-btn.active {
            background: #881337;
            color: #ffffff;
            border-color: #881337;
        }

        /* Essay Card */
        .essay-card {
            background: var(--sec-card-bg);
            border: 1px solid var(--sec-border);
            border-radius: 18px;
            padding: 38px;
            margin-bottom: 44px;
            box-shadow: 0 6px 22px rgba(0, 0, 0, 0.04);
            scroll-margin-top: 90px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .essay-card:hover {
            box-shadow: 0 10px 30px rgba(136, 19, 55, 0.08);
        }

        .essay-card-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 22px;
            border-bottom: 2px solid var(--sec-border);
            padding-bottom: 20px;
        }

        .topic-badge-row {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-bottom: 10px;
            flex-wrap: wrap;
        }

        .topic-number-tag {
            background: #881337;
            color: #ffffff;
            padding: 5px 12px;
            border-radius: 6px;
            font-size: 0.82rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        .category-tag {
            background: #ffe4e6;
            color: #9f1239;
            padding: 5px 12px;
            border-radius: 6px;
            font-size: 0.82rem;
            font-weight: 600;
        }

        .dark-mode .category-tag {
            background: #270711;
            color: #fda4af;
            border: 1px solid #4c0519;
        }

        .essay-card-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.7rem;
            font-weight: 800;
            color: var(--sec-primary);
            line-height: 1.35;
            margin: 0;
        }

        .thesis-statement-box {
            background: rgba(225, 29, 72, 0.06);
            border-left: 4px solid var(--sec-accent);
            padding: 16px 20px;
            border-radius: 0 10px 10px 0;
            margin: 18px 0 24px 0;
            font-size: 0.98rem;
            line-height: 1.65;
            color: var(--sec-text-main);
        }

        .dark-mode .thesis-statement-box {
            background: rgba(251, 113, 133, 0.12);
        }

        .view-toggle-nav {
            display: flex;
            gap: 12px;
            margin-bottom: 22px;
            flex-wrap: wrap;
        }

        .view-btn {
            background: var(--bg-light);
            border: 1px solid var(--sec-border);
            color: var(--sec-text-main);
            padding: 9px 18px;
            border-radius: 8px;
            font-size: 0.88rem;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
        }

        .view-btn.active {
            background: #881337;
            color: #ffffff;
            border-color: #881337;
        }

        /* Outline Container */
        .outline-container {
            background: var(--bg-light);
            border: 1px solid var(--sec-border);
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
        }

        .outline-container ul {
            list-style-type: none;
            padding-left: 0;
            margin: 0;
        }

        .outline-container li {
            padding: 5px 0;
            font-size: 0.93rem;
            color: var(--sec-text-main);
            line-height: 1.6;
            font-family: 'Inter', sans-serif;
        }

        .outline-container li.outline-heading {
            font-weight: 700;
            color: var(--sec-primary);
            margin-top: 10px;
            font-size: 0.98rem;
        }

        .outline-container li.outline-subpoint {
            padding-left: 24px;
            color: var(--sec-text-muted);
        }

        /* Essay Body Prose */
        .essay-body-prose {
            font-size: 1.05rem;
            line-height: 1.85;
            color: var(--sec-text-main);
        }

        .essay-body-prose h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--sec-primary);
            margin: 30px 0 12px 0;
            border-left: 3px solid var(--sec-accent);
            padding-left: 10px;
        }

        .essay-body-prose p {
            margin-bottom: 18px;
        }

        .card-actions {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-top: 24px;
            padding-top: 18px;
            border-top: 1px solid var(--sec-border);
        }

        .action-btn {
            background: transparent;
            border: 1px solid var(--sec-border);
            color: var(--sec-text-muted);
            padding: 7px 14px;
            border-radius: 6px;
            font-size: 0.82rem;
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .action-btn:hover {
            color: var(--sec-primary);
            border-color: var(--sec-primary);
        }

        .back-to-top {
            display: flex;
            justify-content: flex-end;
            margin-top: 12px;
        }

        .back-to-top a {
            color: var(--sec-accent);
            font-size: 0.85rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        /* Print formatting */
        @media print {
            .navbar, .quick-nav-box, .controls-card, .view-toggle-nav, .card-actions, .back-to-top {
                display: none !important;
            }
            .essay-card {
                box-shadow: none;
                border: none;
                page-break-after: always;
                padding: 0;
            }
            .outline-container {
                display: block !important;
            }
        }
    </style>
</head>

<body>
    <header class="navbar" style="background:#270711; padding: 14px 24px; border-bottom: 1px solid #881337;">
        <div style="max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between;">
            <a href="index.html" style="color: #ffffff; text-decoration: none; font-size: 1.25rem; font-weight: 800; font-family: 'Outfit', sans-serif; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-graduation-cap" style="color: #f59e0b;"></i> CSS Prep Central
            </a>
            <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
                <a href="written-prep.html" style="color: #fecdd3; text-decoration: none; font-size: 0.92rem; font-weight: 600;">Written Prep</a>
                <a href="recruitment-prep.html" style="color: #fecdd3; text-decoration: none; font-size: 0.92rem; font-weight: 600;">Recruitment Hub</a>
                <a href="international-relations-essays.html" style="color: #fecdd3; text-decoration: none; font-size: 0.92rem; font-weight: 600;">IR Essays (12)</a>
                <a href="cce-essays-2025.html" style="color: #fecdd3; text-decoration: none; font-size: 0.92rem; font-weight: 600;">CCE 2025</a>
                <a href="css-essays-2026.html" style="color: #fecdd3; text-decoration: none; font-size: 0.92rem; font-weight: 600;">CSS 2026</a>
                <button id="themeToggleBtn" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fef08a; padding: 6px 12px; border-radius: 8px; cursor: pointer;">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>
    </header>

    <main class="essays-hub-container">
        <!-- Hero Masthead -->
        <section class="essays-hero">
            <span class="hero-badge"><i class="fas fa-shield-halved"></i> Strategic Studies &amp; Conflict Monograph</span>
            <h1 class="hero-title">Global Security, Modern Warfare &amp; Geopolitics Master Essays</h1>
            <p class="hero-subtitle">
                Twelve comprehensive, examination-grade solved model essays and detailed hierarchical outlines analyzing the defining conflict dynamics of our era. Grounded in International Relations theory, strategic military doctrines, International Humanitarian Law, and forward-looking conflict resolution frameworks for CSS, PMS, CCE, and UPSC Civil Services candidates.
            </p>
            <div class="hero-stats">
                <span class="stat-pill"><i class="fas fa-book-reader"></i> 12 Master Solved Essays</span>
                <span class="stat-pill"><i class="fas fa-pen-nib"></i> ~15,660 Total Words</span>
                <span class="stat-pill"><i class="fas fa-sitemap"></i> 12 Hierarchical Outlines</span>
                <span class="stat-pill"><i class="fas fa-scale-balanced"></i> CSS / PMS / UPSC Standard</span>
            </div>
        </section>

        <!-- Controls: Search & View Options -->
        <section class="controls-card">
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" placeholder="Search topics, doctrines, keywords (e.g. Gaza, NATO, Nuclear, Drones, Cyber, South China Sea)..." onkeyup="filterEssays()">
            </div>
            <div>
                <button class="action-btn" onclick="expandAllOutlines()"><i class="fas fa-expand-alt"></i> Show All Outlines</button>
                <button class="action-btn" onclick="expandAllEssays()"><i class="fas fa-book-open"></i> Show All Essays</button>
                <button class="action-btn" onclick="window.print()"><i class="fas fa-print"></i> Print / PDF Export</button>
            </div>
        </section>

        <!-- Quick Topic Navigator -->
        <section class="quick-nav-box">
            <div class="quick-nav-header">
                <span><i class="fas fa-compass"></i> Quick Topic Navigator</span>
                <span>12 Global Security &amp; Conflict Topics</span>
            </div>
            <div class="quick-nav-pills">
                ${essaysData.map(e => `
                    <a href="#topic-${e.topicNumber}" class="topic-pill-btn">
                        <span style="background: rgba(136,19,55,0.18); padding: 2px 6px; border-radius: 4px; font-weight: 700;">#${e.topicNumber}</span>
                        <span>${e.title}</span>
                    </a>
                `).join('')}
            </div>
        </section>

        <!-- Essays Container -->
        <div id="essaysList">
            ${essaysData.map(e => {
                const outlineHtml = e.outline.map(line => {
                    const isHeading = /^[IVXLCDM]+\./.test(line.trim());
                    return `<li class="${isHeading ? 'outline-heading' : 'outline-subpoint'}">${line}</li>`;
                }).join('');

                const bodyHtml = e.essayText
                    .replace(/### (.*?)\n/g, '<h3>$1</h3>')
                    .replace(/#### (.*?)\n/g, '<h4>$1</h4>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/\n\n/g, '</p><p>');

                return `
                <article class="essay-card" id="topic-${e.topicNumber}">
                    <div class="essay-card-header">
                        <div>
                            <div class="topic-badge-row">
                                <span class="topic-number-tag">Topic ${e.topicNumber}</span>
                                <span class="category-tag">${e.category}</span>
                                <span style="font-size: 0.85rem; color: var(--sec-text-muted); font-weight: 600;">
                                    <i class="fas fa-file-word"></i> ~${e.wordCount} Words
                                </span>
                            </div>
                            <h2 class="essay-card-title">${e.title}</h2>
                        </div>
                    </div>

                    <div class="thesis-statement-box">
                        <strong><i class="fas fa-bullseye" style="color: var(--sec-accent);"></i> Thesis Statement:</strong> ${e.thesisStatement}
                    </div>

                    <div class="view-toggle-nav">
                        <button class="view-btn active" id="btn-essay-${e.topicNumber}" onclick="toggleView(${e.topicNumber}, 'essay')">
                            <i class="fas fa-book-open"></i> Full Model Essay
                        </button>
                        <button class="view-btn" id="btn-outline-${e.topicNumber}" onclick="toggleView(${e.topicNumber}, 'outline')">
                            <i class="fas fa-list-ol"></i> Comprehensive Outline
                        </button>
                    </div>

                    <div id="outline-box-${e.topicNumber}" class="outline-container" style="display: none;">
                        <h4 style="margin-top:0; color:var(--sec-primary);"><i class="fas fa-list-check"></i> Hierarchical Outline</h4>
                        <ul>${outlineHtml}</ul>
                    </div>

                    <div id="essay-box-${e.topicNumber}" class="essay-body-prose">
                        <p>${bodyHtml}</p>
                    </div>

                    <div class="card-actions">
                        <button class="action-btn" onclick="copyEssayText(${e.topicNumber})">
                            <i class="fas fa-copy"></i> Copy Essay
                        </button>
                        <button class="action-btn" onclick="copyOutlineText(${e.topicNumber})">
                            <i class="fas fa-clipboard-list"></i> Copy Outline
                        </button>
                    </div>

                    <div class="back-to-top">
                        <a href="#"><i class="fas fa-arrow-up"></i> Back to Top</a>
                    </div>
                </article>
                `;
            }).join('')}
        </div>
    </main>

    <!-- Professional 4-Column Legal Footer -->
    <footer style="background: #0f172a; color: #94a3b8; padding: 50px 20px 30px; margin-top: 60px; border-top: 1px solid #1e293b;">
        <div style="max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 36px; margin-bottom: 36px;">
            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-graduation-cap" style="color: #f59e0b; margin-right: 8px;"></i>CSS Prep Central
                </h4>
                <p style="font-size: 0.88rem; line-height: 1.65; color: #94a3b8;">
                    Independent open-access academic research repository for civil services, strategic studies, international humanitarian law, and global security affairs.
                </p>
                <div style="margin-top: 16px;">
                    <a href="about.html" style="color: #60a5fa; font-size: 0.85rem; font-weight: 600; text-decoration: none;"><i class="fas fa-info-circle"></i> About Our Editorial Board</a>
                </div>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-book-open" style="color: #3b82f6; margin-right: 8px;"></i>Academic Portals
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="written-prep.html" style="color: #cbd5e1; text-decoration: none;">Written Examination Hub</a></li>
                    <li><a href="international-relations-essays.html" style="color: #cbd5e1; text-decoration: none;">12 IR &amp; Geopolitics Essays</a></li>
                    <li><a href="global-security-conflict-essays.html" style="color: #fda4af; font-weight: 700; text-decoration: none;">12 Global Security Essays</a></li>
                    <li><a href="recruitment-prep.html" style="color: #cbd5e1; text-decoration: none;">Recruitment Hub (FIA, Sindh Police)</a></li>
                    <li><a href="scholarships.html" style="color: #cbd5e1; text-decoration: none;">Master's &amp; PhD Scholarships</a></li>
                </ul>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-landmark" style="color: #10b981; margin-right: 8px;"></i>Examination Archives
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="css-essays-2026.html" style="color: #cbd5e1; text-decoration: none;">CSS 2026 Solved Essays (10)</a></li>
                    <li><a href="cce-essays-2025.html" style="color: #cbd5e1; text-decoration: none;">SPSC CCE 2025 Solved Essays (8)</a></li>
                    <li><a href="upsc-essays-2023.html" style="color: #cbd5e1; text-decoration: none;">UPSC CSE 2023 Solved Papers (8)</a></li>
                    <li><a href="essay-russia-ukraine-war.html" style="color: #cbd5e1; text-decoration: none;">Russia-Ukraine War Monograph</a></li>
                    <li><a href="essay-pakistan-education-crisis.html" style="color: #cbd5e1; text-decoration: none;">Pakistan Education Crisis Essay</a></li>
                </ul>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-shield-halved" style="color: #60a5fa; margin-right: 8px;"></i>Legal &amp; Trust
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="privacy.html" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Privacy Policy (AdSense/GDPR)</a></li>
                    <li><a href="terms.html" style="color: #cbd5e1; text-decoration: none;">Terms of Service</a></li>
                    <li><a href="disclaimer.html" style="color: #f87171; font-weight: 600; text-decoration: none;">Official Disclaimer</a></li>
                    <li><a href="about.html" style="color: #cbd5e1; text-decoration: none;">About Us</a></li>
                    <li><a href="contact.html" style="color: #cbd5e1; text-decoration: none;">Contact Us</a></li>
                </ul>
            </div>
        </div>

        <div style="max-width: 1240px; margin: 0 auto; padding-top: 24px; border-top: 1px solid #1e293b; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px; font-size: 0.82rem; color: #64748b;">
            <div>
                &copy; 2026 CSS Prep Central. All rights reserved.
            </div>
            <div style="max-width: 750px; text-align: right; line-height: 1.5;">
                <strong>Disclaimer:</strong> CSS Prep Central is an independent educational platform and is not affiliated with FPSC, SPSC, PPSC, NTS, or any government agency.
            </div>
        </div>
    </footer>

    <!-- Data script -->
    <script src="js/data_security_conflict_essays.js"></script>

    <!-- Interactive script -->
    <script>
        // View Toggle (Essay vs Outline)
        function toggleView(topicNumber, viewType) {
            const outlineBox = document.getElementById('outline-box-' + topicNumber);
            const essayBox = document.getElementById('essay-box-' + topicNumber);
            const btnEssay = document.getElementById('btn-essay-' + topicNumber);
            const btnOutline = document.getElementById('btn-outline-' + topicNumber);

            if (viewType === 'outline') {
                outlineBox.style.display = 'block';
                essayBox.style.display = 'none';
                btnOutline.classList.add('active');
                btnEssay.classList.remove('active');
            } else {
                outlineBox.style.display = 'none';
                essayBox.style.display = 'block';
                btnEssay.classList.add('active');
                btnOutline.classList.remove('active');
            }
        }

        function expandAllOutlines() {
            document.querySelectorAll('.outline-container').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.essay-body-prose').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.view-btn').forEach(btn => {
                if (btn.innerText.includes('Outline')) btn.classList.add('active');
                else btn.classList.remove('active');
            });
        }

        function expandAllEssays() {
            document.querySelectorAll('.outline-container').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.essay-body-prose').forEach(el => el.style.display = 'block');
            document.querySelectorAll('.view-btn').forEach(btn => {
                if (btn.innerText.includes('Essay')) btn.classList.add('active');
                else btn.classList.remove('active');
            });
        }

        // Live Search Filter
        function filterEssays() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const cards = document.querySelectorAll('.essay-card');

            cards.forEach(card => {
                const text = card.innerText.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Copy actions
        function copyEssayText(topicNum) {
            const essay = window.SECURITY_CONFLICT_ESSAYS_DATA.find(e => e.topicNumber === topicNum);
            if (essay) {
                navigator.clipboard.writeText(essay.title + '\\n\\nTHESIS STATEMENT:\\n' + essay.thesisStatement + '\\n\\n' + essay.essayText).then(() => {
                    alert('Topic ' + topicNum + ' essay copied to clipboard!');
                });
            }
        }

        function copyOutlineText(topicNum) {
            const essay = window.SECURITY_CONFLICT_ESSAYS_DATA.find(e => e.topicNumber === topicNum);
            if (essay) {
                navigator.clipboard.writeText(essay.title + '\\n\\nOUTLINE:\\n' + essay.outline.join('\\n')).then(() => {
                    alert('Topic ' + topicNum + ' outline copied to clipboard!');
                });
            }
        }

        // Theme Toggle
        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const isDark = document.documentElement.classList.toggle('dark-mode');
                localStorage.setItem('mcqs_dark_mode', isDark);
                themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            });
            if (document.documentElement.classList.contains('dark-mode')) {
                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    </script>
</body>
</html>
`;

const outputPath = path.join(__dirname, '..', 'frontend', 'global-security-conflict-essays.html');
fs.writeFileSync(outputPath, htmlTemplate, 'utf8');
console.log(`Successfully generated: ${outputPath}`);
