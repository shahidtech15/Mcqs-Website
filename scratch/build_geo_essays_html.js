const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'frontend', 'js', 'data_geoeconomics_finance_essays.js');
const essaysData = require(dataFile);

const totalWordCount = essaysData.reduce((acc, e) => acc + (e.wordCount || 0), 0);

const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Global Political Economy, Trade & Finance Solved Essays Hub. 12 Master Model Essays with Comprehensive Outlines, Thesis Statements, Geoeconomic Data, and Policy Analysis for CSS, PMS, CCE, and UPSC Civil Services Examinations. Topics include Globalization Retreat, Dollar Weaponization, Reserve Currency Future, Protectionism, US-China Trade War, Global Debt Crisis, IMF & World Bank, Global Supply Chains, Economic Sanctions, Digital Economy, Crypto & CBDCs, and Red Sea/Hormuz Disruptions.">
    <meta name="keywords"
        content="Geoeconomics Essays, Global Political Economy, Weaponization of US Dollar, De-dollarization, Global Debt Crisis, IMF and World Bank, Supply Chain De-risking, Friend-shoring, Economic Sanctions, Digital Economy, Cryptocurrency CBDCs, Red Sea Disruptions, Strait of Hormuz, CSS Essays, PMS Essays">
    <title>Global Political Economy, Trade & Finance Solved Essays | CSS Prep Central</title>
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
            --geo-primary: #0f766e;
            --geo-primary-dark: #134e4a;
            --geo-primary-light: #f0fdfa;
            --geo-accent: #0d9488;
            --geo-gold: #d97706;
            --geo-card-bg: #ffffff;
            --geo-border: #ccfbf1;
            --geo-text-main: #0f172a;
            --geo-text-muted: #475569;
            --geo-code-bg: #f8fafc;
        }

        .dark-mode {
            --geo-primary: #14b8a6;
            --geo-primary-dark: #042f2e;
            --geo-primary-light: #042f2e;
            --geo-accent: #2dd4bf;
            --geo-gold: #fbbf24;
            --geo-card-bg: #1e293b;
            --geo-border: #334155;
            --geo-text-main: #f8fafc;
            --geo-text-muted: #94a3b8;
            --geo-code-bg: #0f172a;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: var(--geo-text-main);
            background-color: var(--bg-main, #f8fafc);
            line-height: 1.65;
        }

        /* Hero Banner */
        .geo-hero {
            background: linear-gradient(135deg, #042f2e 0%, #115e59 50%, #0f766e 100%);
            color: #ffffff;
            padding: 4.5rem 1.5rem 3.5rem;
            position: relative;
            overflow: hidden;
            border-bottom: 4px solid var(--geo-gold);
        }

        .geo-hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.25) 0%, transparent 60%);
            pointer-events: none;
        }

        .geo-hero-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .geo-badge-top {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            padding: 0.4rem 1rem;
            border-radius: 9999px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #5eead4;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(94, 234, 212, 0.3);
        }

        .geo-hero-title {
            font-family: 'Outfit', sans-serif;
            font-size: clamp(2rem, 4vw, 3.25rem);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1.25rem;
            letter-spacing: -0.02em;
        }

        .geo-hero-desc {
            font-size: 1.15rem;
            max-width: 850px;
            color: #ccfbf1;
            margin-bottom: 2rem;
            line-height: 1.7;
        }

        /* Stats Grid */
        .geo-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
            gap: 1.25rem;
            margin-top: 2rem;
        }

        .geo-stat-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 1.25rem 1.5rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .geo-stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            background: rgba(20, 184, 166, 0.25);
            color: #5eead4;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.35rem;
            flex-shrink: 0;
        }

        .geo-stat-val {
            font-family: 'Outfit', sans-serif;
            font-size: 1.75rem;
            font-weight: 800;
            color: #ffffff;
            line-height: 1;
        }

        .geo-stat-lbl {
            font-size: 0.85rem;
            color: #99f6e4;
            margin-top: 0.25rem;
        }

        /* Quick Navigator & Search Section */
        .controls-section {
            background: var(--geo-card-bg);
            border-bottom: 1px solid var(--geo-border);
            padding: 1.5rem 0;
            position: sticky;
            top: 60px;
            z-index: 40;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .controls-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            align-items: center;
            justify-content: space-between;
        }

        .search-box-wrap {
            position: relative;
            flex: 1;
            min-width: 280px;
            max-width: 450px;
        }

        .search-box-wrap i {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--geo-text-muted);
        }

        .search-input-field {
            width: 100%;
            padding: 0.65rem 1rem 0.65rem 2.5rem;
            border-radius: 8px;
            border: 1px solid var(--geo-border);
            background: var(--geo-code-bg);
            color: var(--geo-text-main);
            font-size: 0.95rem;
            outline: none;
            transition: all 0.2s;
        }

        .search-input-field:focus {
            border-color: var(--geo-accent);
            box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
        }

        .action-btns-group {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .ctrl-btn {
            background: var(--geo-code-bg);
            color: var(--geo-text-main);
            border: 1px solid var(--geo-border);
            padding: 0.55rem 1rem;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
        }

        .ctrl-btn:hover {
            background: var(--geo-primary);
            color: #ffffff;
            border-color: var(--geo-primary);
        }

        /* Topic Pills Grid */
        .pills-container {
            max-width: 1200px;
            margin: 1.5rem auto;
            padding: 0 1.5rem;
        }

        .topic-pills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 0.75rem;
            margin-top: 1rem;
        }

        .topic-pill-btn {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            background: var(--geo-card-bg);
            border: 1px solid var(--geo-border);
            padding: 0.75rem 1rem;
            border-radius: 10px;
            text-decoration: none;
            color: var(--geo-text-main);
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.2s;
        }

        .topic-pill-btn:hover {
            border-color: var(--geo-accent);
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(13, 148, 136, 0.1);
            color: var(--geo-primary);
        }

        /* Essays Container */
        .essays-wrapper {
            max-width: 1200px;
            margin: 2rem auto 4rem;
            padding: 0 1.5rem;
        }

        .essay-card {
            background: var(--geo-card-bg);
            border: 1px solid var(--geo-border);
            border-radius: 16px;
            margin-bottom: 3rem;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            overflow: hidden;
            transition: box-shadow 0.2s;
        }

        .essay-card:hover {
            box-shadow: 0 8px 24px rgba(13, 148, 136, 0.08);
        }

        .essay-card-header {
            padding: 2rem;
            background: linear-gradient(to right, rgba(15, 118, 110, 0.05), transparent);
            border-bottom: 1px solid var(--geo-border);
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 1.25rem;
        }

        .topic-badge-row {
            display: flex;
            gap: 0.6rem;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 0.75rem;
        }

        .topic-number-tag {
            background: var(--geo-primary);
            color: #ffffff;
            font-weight: 700;
            font-size: 0.8rem;
            padding: 0.25rem 0.65rem;
            border-radius: 6px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .category-tag {
            background: rgba(13, 148, 136, 0.12);
            color: var(--geo-primary);
            font-weight: 600;
            font-size: 0.8rem;
            padding: 0.25rem 0.65rem;
            border-radius: 6px;
        }

        .word-count-tag {
            background: rgba(217, 119, 6, 0.12);
            color: var(--geo-gold);
            font-weight: 700;
            font-size: 0.8rem;
            padding: 0.25rem 0.65rem;
            border-radius: 6px;
        }

        .essay-card-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.65rem;
            font-weight: 700;
            color: var(--geo-text-main);
            line-height: 1.35;
            margin-top: 0.25rem;
        }

        /* Thesis Box */
        .thesis-container {
            margin: 1.5rem 2rem 0;
            background: var(--geo-primary-light);
            border-left: 4px solid var(--geo-primary);
            padding: 1.25rem 1.5rem;
            border-radius: 0 10px 10px 0;
        }

        .thesis-title {
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--geo-primary);
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin-bottom: 0.4rem;
        }

        .thesis-body {
            font-size: 1rem;
            font-weight: 500;
            color: var(--geo-text-main);
            font-style: italic;
            line-height: 1.6;
        }

        /* Tab Switcher Toolbar */
        .view-switcher-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            border-bottom: 1px solid var(--geo-border);
            background: var(--geo-code-bg);
            flex-wrap: wrap;
            gap: 0.75rem;
        }

        .tab-btn-pill-group {
            display: flex;
            gap: 0.4rem;
            background: var(--geo-card-bg);
            padding: 3px;
            border-radius: 8px;
            border: 1px solid var(--geo-border);
        }

        .view-btn {
            border: none;
            background: transparent;
            color: var(--geo-text-muted);
            padding: 0.45rem 1rem;
            font-size: 0.85rem;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
        }

        .view-btn.active {
            background: var(--geo-primary);
            color: #ffffff;
        }

        .card-util-btns {
            display: flex;
            gap: 0.5rem;
        }

        .util-btn {
            background: var(--geo-card-bg);
            border: 1px solid var(--geo-border);
            color: var(--geo-text-main);
            font-size: 0.8rem;
            font-weight: 600;
            padding: 0.4rem 0.75rem;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
        }

        .util-btn:hover {
            background: var(--geo-primary);
            color: #ffffff;
            border-color: var(--geo-primary);
        }

        /* Outline Rendering */
        .outline-container {
            padding: 2rem;
            background: var(--geo-code-bg);
            display: none;
        }

        .outline-tree-list {
            list-style: none;
            padding-left: 0;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.9rem;
            line-height: 1.8;
        }

        .outline-heading {
            font-weight: 700;
            color: var(--geo-primary);
            margin-top: 1rem;
            font-size: 0.95rem;
            border-bottom: 1px dashed var(--geo-border);
            padding-bottom: 0.25rem;
        }

        .outline-subpoint {
            padding-left: 1.5rem;
            color: var(--geo-text-main);
        }

        /* Essay Prose */
        .essay-body-prose {
            padding: 2rem;
            font-size: 1.05rem;
            line-height: 1.8;
            color: var(--geo-text-main);
        }

        .essay-body-prose p {
            margin-bottom: 1.5rem;
            text-align: justify;
        }

        .essay-body-prose strong {
            color: var(--geo-primary);
            font-weight: 700;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .essay-card-header {
                padding: 1.25rem;
            }
            .essay-card-title {
                font-size: 1.35rem;
            }
            .thesis-container {
                margin: 1rem 1.25rem 0;
                padding: 1rem;
            }
            .view-switcher-bar {
                padding: 0.75rem 1.25rem;
            }
            .essay-body-prose, .outline-container {
                padding: 1.25rem;
            }
        }
    </style>
</head>

<body>
    <!-- Main Header Navbar -->
    <header class="header">
        <div class="header-container">
            <a href="index.html" class="logo">
                <span class="logo-icon"><i class="fas fa-graduation-cap"></i></span>
                <span class="logo-text">CSS Prep Central</span>
            </a>
            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-item"><a href="index.html" class="nav-link"><i class="fas fa-home"></i> Home</a></li>
                    <li class="nav-item"><a href="written-prep.html" class="nav-link"><i class="fas fa-book-open"></i> Written Prep</a></li>
                    <li class="nav-item"><a href="css-essays-2026.html" class="nav-link"><i class="fas fa-pen-nib"></i> Solved Essays</a></li>
                    <li class="nav-item"><a href="international-relations-essays.html" class="nav-link"><i class="fas fa-globe"></i> IR Essays</a></li>
                    <li class="nav-item"><a href="global-security-conflict-essays.html" class="nav-link"><i class="fas fa-shield-halved"></i> Security & Conflict</a></li>
                    <li class="nav-item"><a href="geoeconomics-finance-essays.html" class="nav-link active" style="color: #0d9488; font-weight: 700;"><i class="fas fa-chart-line"></i> Geoeconomics & Trade</a></li>
                    <li class="nav-item"><a href="islamiat-mcqs.html" class="nav-link"><i class="fas fa-mosque"></i> Islamiat</a></li>
                    <li class="nav-item"><a href="quiz.html" class="nav-link"><i class="fas fa-vial"></i> Mock Test</a></li>
                </ul>
            </nav>
            <div class="header-actions">
                <button id="themeToggleBtn" class="theme-toggle-btn" aria-label="Toggle theme">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="geo-hero">
        <div class="geo-hero-container">
            <div class="geo-badge-top">
                <i class="fas fa-scale-balanced"></i> Global Political Economy & Macro-Finance
            </div>
            <h1 class="geo-hero-title">Global Political Economy, Trade & Finance Solved Essays</h1>
            <p class="geo-hero-desc">
                12 Master Model Solved Essays and Comprehensive Hierarchical Outlines examining the structural transformations of the global economic architecture—from the retreat of hyper-globalization and dollar weaponization to global debt crises, supply chain re-shoring, and maritime chokepoint warfare.
            </p>
            <div class="geo-stats-grid">
                <div class="geo-stat-card">
                    <div class="geo-stat-icon"><i class="fas fa-file-lines"></i></div>
                    <div>
                        <div class="geo-stat-val">12</div>
                        <div class="geo-stat-lbl">Master Essays</div>
                    </div>
                </div>
                <div class="geo-stat-card">
                    <div class="geo-stat-icon"><i class="fas fa-sitemap"></i></div>
                    <div>
                        <div class="geo-stat-val">12</div>
                        <div class="geo-stat-lbl">Detailed Outlines</div>
                    </div>
                </div>
                <div class="geo-stat-card">
                    <div class="geo-stat-icon"><i class="fas fa-spell-check"></i></div>
                    <div>
                        <div class="geo-stat-val">${totalWordCount.toLocaleString()}+</div>
                        <div class="geo-stat-lbl">Total Words</div>
                    </div>
                </div>
                <div class="geo-stat-card">
                    <div class="geo-stat-icon"><i class="fas fa-award"></i></div>
                    <div>
                        <div class="geo-stat-val">CSS / PMS</div>
                        <div class="geo-stat-lbl">Examination Standard</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Controls Bar -->
    <div class="controls-section">
        <div class="controls-wrapper">
            <div class="search-box-wrap">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" class="search-input-field" placeholder="Search essays by keyword, theorist, or concept..." onkeyup="filterEssays()">
            </div>
            <div class="action-btns-group">
                <button class="ctrl-btn" onclick="expandAllOutlines()"><i class="fas fa-list-ol"></i> View All Outlines</button>
                <button class="ctrl-btn" onclick="expandAllEssays()"><i class="fas fa-align-left"></i> View All Essays</button>
                <button class="ctrl-btn" onclick="window.print()"><i class="fas fa-print"></i> Print / PDF</button>
            </div>
        </div>
    </div>

    <!-- Quick Navigation Pills -->
    <div class="pills-container">
        <h3 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--geo-primary); margin-bottom: 0.75rem;">
            <i class="fas fa-compass"></i> Topic Quick Navigator
        </h3>
        <div class="topic-pills-grid">
            ${essaysData.map(e => `
                <a href="#topic-${e.topicNumber}" class="topic-pill-btn">
                    <span style="background: rgba(15, 118, 110, 0.15); color: var(--geo-primary); padding: 2px 7px; border-radius: 4px; font-weight: 700;">#${e.topicNumber}</span>
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${e.title}</span>
                </a>
            `).join('')}
        </div>
    </div>

    <!-- Essays Container -->
    <main class="essays-wrapper" id="essaysList">
        ${essaysData.map(e => {
            const outlineHtml = e.outline.map(line => {
                const isHeading = /^[IVXLCDM]+\./.test(line.trim());
                return `<li class="${isHeading ? 'outline-heading' : 'outline-subpoint'}">${line}</li>`;
            }).join('');

            const bodyHtml = e.essayText
                .replace(/### (.*?)\n/g, '<h3>$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .split('\n\n')
                .filter(p => p.trim().length > 0)
                .map(p => `<p>${p.trim()}</p>`)
                .join('');

            return `
            <article class="essay-card" id="topic-${e.topicNumber}">
                <div class="essay-card-header">
                    <div>
                        <div class="topic-badge-row">
                            <span class="topic-number-tag">Topic ${e.topicNumber}</span>
                            <span class="category-tag">${e.category}</span>
                            <span class="word-count-tag"><i class="fas fa-pen-fancy"></i> ${e.wordCount} Words</span>
                            <span style="font-size: 0.8rem; font-weight: 600; color: var(--geo-text-muted);"><i class="fas fa-graduation-cap"></i> ${e.difficulty}</span>
                        </div>
                        <h2 class="essay-card-title">${e.title}</h2>
                    </div>
                </div>

                <div class="thesis-container">
                    <div class="thesis-title"><i class="fas fa-lightbulb"></i> Thesis Statement</div>
                    <div class="thesis-body">${e.thesisStatement}</div>
                </div>

                <div class="view-switcher-bar">
                    <div class="tab-btn-pill-group">
                        <button class="view-btn active" id="btn-essay-${e.topicNumber}" onclick="toggleView(${e.topicNumber}, 'essay')">
                            <i class="fas fa-file-lines"></i> Full Essay
                        </button>
                        <button class="view-btn" id="btn-outline-${e.topicNumber}" onclick="toggleView(${e.topicNumber}, 'outline')">
                            <i class="fas fa-list-check"></i> Comprehensive Outline
                        </button>
                    </div>
                    <div class="card-util-btns">
                        <button class="util-btn" onclick="copyEssayText(${e.topicNumber})"><i class="fas fa-copy"></i> Copy Essay</button>
                        <button class="util-btn" onclick="copyOutlineText(${e.topicNumber})"><i class="fas fa-clipboard-list"></i> Copy Outline</button>
                    </div>
                </div>

                <div class="outline-container" id="outline-box-${e.topicNumber}">
                    <div style="margin-bottom: 1rem; font-weight: 700; color: var(--geo-primary); font-size: 0.95rem;">
                        <i class="fas fa-network-wired"></i> Hierarchical Examination Outline
                    </div>
                    <ul class="outline-tree-list">
                        ${outlineHtml}
                    </ul>
                </div>

                <div class="essay-body-prose" id="essay-box-${e.topicNumber}">
                    ${bodyHtml}
                </div>
            </article>
            `;
        }).join('')}
    </main>

    <!-- Standard Academic Footer -->
    <footer style="background: #0f172a; color: #94a3b8; padding: 50px 20px 30px; margin-top: 60px; border-top: 1px solid #1e293b;">
        <div style="max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 36px; margin-bottom: 36px;">
            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-graduation-cap" style="color: #f59e0b; margin-right: 8px;"></i>CSS Prep Central
                </h4>
                <p style="font-size: 0.88rem; line-height: 1.65; color: #94a3b8;">
                    Independent open-access academic research repository for civil services, global political economy, international trade, monetary policy, and competitive examinations.
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
                    <li><a href="global-security-conflict-essays.html" style="color: #cbd5e1; text-decoration: none;">12 Global Security Essays</a></li>
                    <li><a href="geoeconomics-finance-essays.html" style="color: #5eead4; font-weight: 700; text-decoration: none;">12 Geoeconomics &amp; Trade Essays</a></li>
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

    <!-- Scripts -->
    <script src="js/data_geoeconomics_finance_essays.js"></script>
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
            const essay = window.GEOECONOMICS_FINANCE_ESSAYS_DATA.find(e => e.topicNumber === topicNum);
            if (essay) {
                navigator.clipboard.writeText(essay.title + '\\n\\nTHESIS STATEMENT:\\n' + essay.thesisStatement + '\\n\\n' + essay.essayText).then(() => {
                    alert('Topic ' + topicNum + ' essay copied to clipboard!');
                });
            }
        }

        function copyOutlineText(topicNum) {
            const essay = window.GEOECONOMICS_FINANCE_ESSAYS_DATA.find(e => e.topicNumber === topicNum);
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

const outputPath = path.join(__dirname, '..', 'frontend', 'geoeconomics-finance-essays.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`Re-generated HTML portal with valid links: ${outputPath} (${(Buffer.byteLength(htmlContent) / 1024).toFixed(2)} KB)`);
