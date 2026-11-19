const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_math_tricks.js');
const { metadata, modules } = require(dataPath);

const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Complete Math Shortcut Tricks & Quantitative Ability Handbook for CSS, PMS, FPSC, PPSC, and NTS exams. Master mental multiplication, fast division, percentage split tricks, ratio shortcuts, work and time formulas, relative speed, and arithmetic progressions.">
    <meta name="keywords"
        content="Math Shortcut Tricks, Quantitative Ability, Fast Mental Math, Percentages Tricks, Work and Time Problems, Ratio and Proportion, Speed Distance Time, Simple Compound Interest, CSS General Science and Ability, FPSC Math, PPSC Quantitative">
    <title>Math Shortcut Tricks &amp; Quantitative Ability Handbook | CSS Prep Central</title>
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
            --math-primary: #0284c7;
            --math-primary-dark: #0369a1;
            --math-primary-light: #f0f9ff;
            --math-accent: #6366f1;
            --math-gold: #f59e0b;
            --math-card-bg: #ffffff;
            --math-border: #e0f2fe;
            --math-text-main: #0f172a;
            --math-text-muted: #475569;
            --math-code-bg: #f8fafc;
        }

        .dark-mode {
            --math-primary: #38bdf8;
            --math-primary-dark: #0c4a6e;
            --math-primary-light: #082f49;
            --math-accent: #818cf8;
            --math-gold: #fbbf24;
            --math-card-bg: #1e293b;
            --math-border: #334155;
            --math-text-main: #f8fafc;
            --math-text-muted: #94a3b8;
            --math-code-bg: #0f172a;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: var(--math-text-main);
            background-color: var(--bg-main, #f8fafc);
            line-height: 1.65;
        }

        /* Hero Banner */
        .math-hero {
            background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 50%, #0284c7 100%);
            color: #ffffff;
            padding: 4.5rem 1.5rem 3.5rem;
            position: relative;
            overflow: hidden;
            border-bottom: 4px solid var(--math-gold);
        }

        .math-hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.25) 0%, transparent 60%);
            pointer-events: none;
        }

        .math-hero-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .math-badge-top {
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
            color: #7dd3fc;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(125, 211, 252, 0.3);
        }

        .math-hero-title {
            font-family: 'Outfit', sans-serif;
            font-size: clamp(2rem, 4vw, 3.25rem);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1.25rem;
            letter-spacing: -0.02em;
        }

        .math-hero-desc {
            font-size: 1.15rem;
            max-width: 850px;
            color: #e0f2fe;
            margin-bottom: 2rem;
            line-height: 1.7;
        }

        /* Stats Grid */
        .math-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
            gap: 1.25rem;
            margin-top: 2rem;
        }

        .math-stat-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 1.25rem 1.5rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .math-stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            background: rgba(56, 189, 248, 0.25);
            color: #38bdf8;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.35rem;
            flex-shrink: 0;
        }

        .math-stat-val {
            font-family: 'Outfit', sans-serif;
            font-size: 1.75rem;
            font-weight: 800;
            color: #ffffff;
            line-height: 1;
        }

        .math-stat-lbl {
            font-size: 0.85rem;
            color: #bae6fd;
            margin-top: 0.25rem;
        }

        /* Sticky Filter Controls */
        .controls-section {
            background: var(--math-card-bg);
            border-bottom: 1px solid var(--math-border);
            padding: 1.25rem 0;
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
            min-width: 260px;
            max-width: 450px;
        }

        .search-box-wrap i {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--math-text-muted);
        }

        .search-input-field {
            width: 100%;
            padding: 0.65rem 1rem 0.65rem 2.5rem;
            border-radius: 8px;
            border: 1px solid var(--math-border);
            background: var(--math-code-bg);
            color: var(--math-text-main);
            font-size: 0.95rem;
            outline: none;
            transition: all 0.2s;
        }

        .search-input-field:focus {
            border-color: var(--math-primary);
            box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .action-btns-group {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .ctrl-btn {
            background: var(--math-code-bg);
            color: var(--math-text-main);
            border: 1px solid var(--math-border);
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
            background: var(--math-primary);
            color: #ffffff;
            border-color: var(--math-primary);
        }

        /* Filter Pills */
        .filter-pills-bar {
            max-width: 1200px;
            margin: 1.5rem auto 0;
            padding: 0 1.5rem;
            display: flex;
            gap: 0.5rem;
            overflow-x: auto;
            padding-bottom: 0.5rem;
        }

        .filter-pill {
            background: var(--math-card-bg);
            border: 1px solid var(--math-border);
            color: var(--math-text-muted);
            padding: 0.45rem 1rem;
            border-radius: 999px;
            font-size: 0.82rem;
            font-weight: 600;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
        }

        .filter-pill:hover, .filter-pill.active {
            background: var(--math-primary);
            color: #ffffff;
            border-color: var(--math-primary);
        }

        /* Interactive Calculators Section */
        .calc-section-wrapper {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1.5rem;
        }

        .calc-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 1.25rem;
            margin-top: 1rem;
        }

        .calc-card {
            background: var(--math-card-bg);
            border: 1px solid var(--math-border);
            border-radius: 14px;
            padding: 1.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .calc-title {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--math-primary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .calc-row {
            display: flex;
            gap: 0.75rem;
            margin-bottom: 0.75rem;
            align-items: center;
        }

        .calc-input {
            flex: 1;
            padding: 0.5rem 0.75rem;
            border-radius: 6px;
            border: 1px solid var(--math-border);
            background: var(--math-code-bg);
            color: var(--math-text-main);
            font-size: 0.9rem;
            font-weight: 600;
        }

        .calc-res-box {
            margin-top: 1rem;
            padding: 0.85rem 1rem;
            background: var(--math-primary-light);
            border-left: 3px solid var(--math-primary);
            border-radius: 0 8px 8px 0;
            font-size: 0.92rem;
            font-weight: 600;
            color: var(--math-primary-dark);
        }

        .dark-mode .calc-res-box {
            color: #bae6fd;
        }

        /* Modules Section */
        .modules-wrapper {
            max-width: 1200px;
            margin: 2rem auto 4rem;
            padding: 0 1.5rem;
        }

        .module-section-card {
            background: var(--math-card-bg);
            border: 1px solid var(--math-border);
            border-radius: 16px;
            margin-bottom: 2.5rem;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
            transition: box-shadow 0.2s;
        }

        .module-section-card:hover {
            box-shadow: 0 8px 24px rgba(2, 132, 199, 0.08);
        }

        .module-header {
            padding: 1.75rem 2rem;
            background: linear-gradient(to right, rgba(2, 132, 199, 0.06), transparent);
            border-bottom: 1px solid var(--math-border);
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .module-icon-box {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: var(--math-primary);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.35rem;
            flex-shrink: 0;
        }

        .module-header-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.45rem;
            font-weight: 700;
            color: var(--math-text-main);
            margin: 0;
        }

        .module-header-desc {
            font-size: 0.92rem;
            color: var(--math-text-muted);
            margin-top: 0.25rem;
        }

        /* Rules Sub-grid */
        .rules-grid {
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 1.5rem;
        }

        .rule-card {
            background: var(--math-code-bg);
            border: 1px solid var(--math-border);
            border-radius: 12px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.2s, border-color 0.2s;
        }

        .rule-card:hover {
            border-color: var(--math-primary);
            transform: translateY(-2px);
        }

        .rule-name-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 0.5rem;
        }

        .rule-name {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--math-primary);
            line-height: 1.35;
        }

        .rule-text {
            font-size: 0.9rem;
            color: var(--math-text-main);
            margin-bottom: 0.85rem;
            line-height: 1.6;
        }

        .formula-box {
            background: var(--math-card-bg);
            border: 1px dashed var(--math-primary);
            padding: 0.75rem 1rem;
            border-radius: 8px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.88rem;
            font-weight: 600;
            color: var(--math-primary);
            margin-bottom: 0.85rem;
            word-break: break-all;
        }

        .example-box {
            background: rgba(2, 132, 199, 0.05);
            padding: 0.75rem 1rem;
            border-radius: 8px;
            font-size: 0.88rem;
            margin-bottom: 0.85rem;
            line-height: 1.6;
        }

        .tip-box {
            font-size: 0.82rem;
            color: var(--math-gold);
            font-weight: 600;
            display: flex;
            align-items: flex-start;
            gap: 0.4rem;
        }

        /* Drills Container */
        .drills-container {
            border-top: 1px solid var(--math-border);
            padding: 2rem;
            background: rgba(0, 0, 0, 0.01);
        }

        .drills-header {
            font-family: 'Outfit', sans-serif;
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--math-text-main);
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .drill-item {
            background: var(--math-card-bg);
            border: 1px solid var(--math-border);
            border-radius: 10px;
            padding: 1.25rem;
            margin-bottom: 1rem;
        }

        .drill-q {
            font-size: 0.98rem;
            font-weight: 600;
            color: var(--math-text-main);
            margin-bottom: 0.75rem;
        }

        .drill-opts {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 0.85rem;
        }

        .drill-opt-pill {
            background: var(--math-code-bg);
            border: 1px solid var(--math-border);
            padding: 0.35rem 0.85rem;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 500;
        }

        .reveal-btn {
            background: var(--math-code-bg);
            border: 1px solid var(--math-border);
            color: var(--math-primary);
            padding: 0.4rem 0.9rem;
            border-radius: 6px;
            font-size: 0.82rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
        }

        .reveal-btn:hover {
            background: var(--math-primary);
            color: #ffffff;
            border-color: var(--math-primary);
        }

        .drill-solution-box {
            display: none;
            margin-top: 0.85rem;
            padding: 1rem;
            background: var(--math-primary-light);
            border-left: 3px solid #10b981;
            border-radius: 0 8px 8px 0;
            font-size: 0.9rem;
            line-height: 1.6;
        }

        .copy-btn {
            background: transparent;
            border: none;
            color: var(--math-text-muted);
            cursor: pointer;
            font-size: 0.85rem;
            padding: 4px;
            transition: color 0.2s;
        }

        .copy-btn:hover {
            color: var(--math-primary);
        }

        @media (max-width: 768px) {
            .rules-grid {
                grid-template-columns: 1fr;
                padding: 1.25rem;
            }
            .module-header {
                padding: 1.25rem;
            }
            .drills-container {
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
                    <li class="nav-item"><a href="math-tricks.html" class="nav-link active" style="color: #0284c7; font-weight: 700;"><i class="fas fa-calculator"></i> Math Tricks</a></li>
                    <li class="nav-item"><a href="written-prep.html" class="nav-link"><i class="fas fa-book-open"></i> Written Prep</a></li>
                    <li class="nav-item"><a href="css-essays-2026.html" class="nav-link"><i class="fas fa-pen-nib"></i> Solved Essays</a></li>
                    <li class="nav-item"><a href="international-relations-essays.html" class="nav-link"><i class="fas fa-globe"></i> IR Essays</a></li>
                    <li class="nav-item"><a href="geoeconomics-finance-essays.html" class="nav-link"><i class="fas fa-chart-line"></i> Geoeconomics</a></li>
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
    <section class="math-hero">
        <div class="math-hero-container">
            <div class="math-badge-top">
                <i class="fas fa-bolt"></i> Fast Mental Math &amp; Quantitative Ability
            </div>
            <h1 class="math-hero-title">Math Shortcut Tricks &amp; Quantitative Handbook</h1>
            <p class="math-hero-desc">
                Master lightning-fast mental math techniques, arithmetic shortcut formulas, and step-by-step past paper problem solutions for CSS General Science &amp; Ability (GSA), PMS, FPSC (FIA, Custom, IB), PPSC, SPSC, and NTS examinations.
            </p>
            <div class="math-stats-grid">
                <div class="math-stat-card">
                    <div class="math-stat-icon"><i class="fas fa-cubes"></i></div>
                    <div>
                        <div class="math-stat-val">${metadata.totalModules}</div>
                        <div class="math-stat-lbl">Core Modules</div>
                    </div>
                </div>
                <div class="math-stat-card">
                    <div class="math-stat-icon"><i class="fas fa-wand-magic-sparkles"></i></div>
                    <div>
                        <div class="math-stat-val">${metadata.totalShortcuts}+</div>
                        <div class="math-stat-lbl">Shortcut Formulas</div>
                    </div>
                </div>
                <div class="math-stat-card">
                    <div class="math-stat-icon"><i class="fas fa-circle-check"></i></div>
                    <div>
                        <div class="math-stat-val">${metadata.totalDrills}+</div>
                        <div class="math-stat-lbl">Past Paper Drills</div>
                    </div>
                </div>
                <div class="math-stat-card">
                    <div class="math-stat-icon"><i class="fas fa-stopwatch"></i></div>
                    <div>
                        <div class="math-stat-val">5-10 Sec</div>
                        <div class="math-stat-lbl">Target Solve Speed</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sticky Filter & Search Bar -->
    <div class="controls-section">
        <div class="controls-wrapper">
            <div class="search-box-wrap">
                <i class="fas fa-search"></i>
                <input type="text" id="mathSearchInput" class="search-input-field" placeholder="Search shortcuts e.g., '11', 'work', 'depreciation', 'boat'..." onkeyup="filterMathContent()">
            </div>
            <div class="action-btns-group">
                <button class="ctrl-btn" onclick="toggleAllDrills(true)"><i class="fas fa-eye"></i> Show All Answers</button>
                <button class="ctrl-btn" onclick="toggleAllDrills(false)"><i class="fas fa-eye-slash"></i> Hide All Answers</button>
                <button class="ctrl-btn" onclick="window.print()"><i class="fas fa-print"></i> Print / PDF</button>
            </div>
        </div>
    </div>

    <!-- Category Filter Pills -->
    <div class="filter-pills-bar" id="categoryFilterBar">
        <button class="filter-pill active" onclick="filterByModule('all')"><i class="fas fa-border-all"></i> All Topics</button>
        ${modules.map(m => `
            <button class="filter-pill" onclick="filterByModule('${m.id}')">
                <i class="${m.icon}"></i> ${m.title}
            </button>
        `).join('')}
    </div>

    <!-- Interactive Live Shortcut Calculators -->
    <section class="calc-section-wrapper">
        <h3 style="font-size: 1.15rem; font-family: 'Outfit', sans-serif; color: var(--math-primary); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-calculator"></i> Interactive Shortcut Calculators (Try It Yourself)
        </h3>
        <p style="font-size: 0.88rem; color: var(--math-text-muted); margin-bottom: 1rem;">
            Test the formulas in real time with your own numbers to verify the shortcut logic.
        </p>

        <div class="calc-grid">
            <!-- Calc 1: Work & Time -->
            <div class="calc-card">
                <div class="calc-title"><i class="fas fa-clock"></i> Work &amp; Time (2 Workers)</div>
                <p style="font-size: 0.85rem; color: var(--math-text-muted); margin-bottom: 0.75rem;">Formula: <code>(A × B) / (A + B)</code></p>
                <div class="calc-row">
                    <input type="number" id="workerA" class="calc-input" placeholder="Person A (hrs/days)" value="6" oninput="calculateWork()">
                    <input type="number" id="workerB" class="calc-input" placeholder="Person B (hrs/days)" value="12" oninput="calculateWork()">
                </div>
                <div class="calc-res-box" id="workResult">
                    Together: 4.00 hours/days
                </div>
            </div>

            <!-- Calc 2: Percentage Commutative Trick -->
            <div class="calc-card">
                <div class="calc-title"><i class="fas fa-percent"></i> Percentage Reversal Trick</div>
                <p style="font-size: 0.85rem; color: var(--math-text-muted); margin-bottom: 0.75rem;">Formula: <code>x% of y = y% of x = (x × y) / 100</code></p>
                <div class="calc-row">
                    <input type="number" id="pctX" class="calc-input" placeholder="Percentage X" value="16" oninput="calculatePct()">
                    <input type="number" id="pctY" class="calc-input" placeholder="Number Y" value="50" oninput="calculatePct()">
                </div>
                <div class="calc-res-box" id="pctResult">
                    16% of 50 = 50% of 16 = 8.00
                </div>
            </div>

            <!-- Calc 3: Annual Depreciation -->
            <div class="calc-card">
                <div class="calc-title"><i class="fas fa-arrow-down-wide-short"></i> Annual Depreciation</div>
                <p style="font-size: 0.85rem; color: var(--math-text-muted); margin-bottom: 0.75rem;">Formula: <code>P × (1 - r/100)^n</code></p>
                <div class="calc-row">
                    <input type="number" id="depP" class="calc-input" placeholder="Principal (Rs)" value="100000" oninput="calculateDep()">
                    <input type="number" id="depR" class="calc-input" placeholder="Rate %" value="10" oninput="calculateDep()">
                    <input type="number" id="depN" class="calc-input" placeholder="Years" value="2" oninput="calculateDep()">
                </div>
                <div class="calc-res-box" id="depResult">
                    Value after 2 years: Rs. 81,000.00
                </div>
            </div>
        </div>
    </section>

    <!-- Main Modules & Shortcuts Container -->
    <main class="modules-wrapper" id="modulesContainer">
        ${modules.map(m => `
            <section class="module-section-card" id="module-${m.id}" data-module-id="${m.id}">
                <div class="module-header">
                    <div class="module-icon-box" style="background: ${m.color};">
                        <i class="${m.icon}"></i>
                    </div>
                    <div>
                        <h2 class="module-header-title">${m.title}</h2>
                        <div class="module-header-desc">${m.description}</div>
                    </div>
                </div>

                <div class="rules-grid">
                    ${m.rules.map((r, rIdx) => `
                        <div class="rule-card">
                            <div>
                                <div class="rule-name-row">
                                    <div class="rule-name">${r.name}</div>
                                    <button class="copy-btn" title="Copy formula" onclick="copyFormula('${r.formula.replace(/'/g, "\\'")}')">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <div class="rule-text">${r.rule}</div>
                                <div class="formula-box"><strong>Formula:</strong> ${r.formula}</div>
                                <div class="example-box"><strong>Example:</strong> ${r.example}</div>
                            </div>
                            <div class="tip-box">
                                <i class="fas fa-lightbulb"></i> <span><strong>Pro Tip:</strong> ${r.tip}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                ${m.drills && m.drills.length > 0 ? `
                    <div class="drills-container">
                        <div class="drills-header">
                            <i class="fas fa-clipboard-question" style="color: ${m.color};"></i> Solved Examination Drills (${m.drills.length})
                        </div>
                        ${m.drills.map((d, dIdx) => `
                            <div class="drill-item">
                                <div class="drill-q"><strong>Q${dIdx + 1}:</strong> ${d.question}</div>
                                <div class="drill-opts">
                                    ${d.options.map(opt => `<span class="drill-opt-pill">${opt}</span>`).join('')}
                                </div>
                                <button class="reveal-btn" onclick="toggleDrill('drill_${m.id}_${dIdx}')">
                                    <i class="fas fa-eye"></i> Show Answer &amp; Shortcut
                                </button>
                                <div class="drill-solution-box" id="drill_${m.id}_${dIdx}">
                                    <div style="font-weight: 700; color: #065f46; margin-bottom: 4px;">
                                        <i class="fas fa-check-circle"></i> Correct Answer: ${d.solution}
                                    </div>
                                    <div style="font-size: 0.88rem; color: var(--math-text-main);">
                                        <strong>Shortcut Logic:</strong> ${d.shortcut}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </section>
        `).join('')}
    </main>

    <!-- Standard Footer -->
    <footer style="background: #0f172a; color: #94a3b8; padding: 50px 20px 30px; margin-top: 60px; border-top: 1px solid #1e293b;">
        <div style="max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 36px; margin-bottom: 36px;">
            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-graduation-cap" style="color: #f59e0b; margin-right: 8px;"></i>CSS Prep Central
                </h4>
                <p style="font-size: 0.88rem; line-height: 1.65; color: #94a3b8;">
                    Independent open-access preparation repository for civil services, quantitative ability, General Science &amp; Ability, and competitive examinations.
                </p>
                <div style="margin-top: 16px;">
                    <a href="about.html" style="color: #60a5fa; font-size: 0.85rem; font-weight: 600; text-decoration: none;"><i class="fas fa-info-circle"></i> About Our Platform</a>
                </div>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-book-open" style="color: #3b82f6; margin-right: 8px;"></i>Study Modules
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="math-tricks.html" style="color: #38bdf8; font-weight: 700; text-decoration: none;">Math Shortcut Tricks (52+)</a></li>
                    <li><a href="written-prep.html" style="color: #cbd5e1; text-decoration: none;">Written Examination Hub</a></li>
                    <li><a href="grammar-rules.html" style="color: #cbd5e1; text-decoration: none;">English Grammar Handbook</a></li>
                    <li><a href="fia-sample-papers.html" style="color: #cbd5e1; text-decoration: none;">FIA Solved Past Papers</a></li>
                    <li><a href="islamiat-mcqs.html" style="color: #cbd5e1; text-decoration: none;">1,000+ Islamiat MCQs</a></li>
                </ul>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-pen-nib" style="color: #10b981; margin-right: 8px;"></i>Essay Archives
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="css-essays-2026.html" style="color: #cbd5e1; text-decoration: none;">CSS 2026 Solved Essays</a></li>
                    <li><a href="international-relations-essays.html" style="color: #cbd5e1; text-decoration: none;">12 IR &amp; Geopolitics Essays</a></li>
                    <li><a href="global-security-conflict-essays.html" style="color: #cbd5e1; text-decoration: none;">12 Global Security Essays</a></li>
                    <li><a href="geoeconomics-finance-essays.html" style="color: #cbd5e1; text-decoration: none;">12 Geoeconomics Essays</a></li>
                    <li><a href="scholarships.html" style="color: #cbd5e1; text-decoration: none;">Scholarships Guide</a></li>
                </ul>
            </div>

            <div>
                <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 14px; font-family: 'Outfit', sans-serif;">
                    <i class="fas fa-shield-halved" style="color: #60a5fa; margin-right: 8px;"></i>Legal &amp; Trust
                </h4>
                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.88rem; line-height: 2.1;">
                    <li><a href="privacy.html" style="color: #60a5fa; font-weight: 600; text-decoration: none;">Privacy Policy</a></li>
                    <li><a href="terms.html" style="color: #cbd5e1; text-decoration: none;">Terms of Service</a></li>
                    <li><a href="disclaimer.html" style="color: #f87171; font-weight: 600; text-decoration: none;">Disclaimer</a></li>
                    <li><a href="contact.html" style="color: #cbd5e1; text-decoration: none;">Contact Us</a></li>
                </ul>
            </div>
        </div>

        <div style="max-width: 1240px; margin: 0 auto; padding-top: 24px; border-top: 1px solid #1e293b; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px; font-size: 0.82rem; color: #64748b;">
            <div>
                &copy; 2026 CSS Prep Central. All rights reserved.
            </div>
            <div style="max-width: 750px; text-align: right; line-height: 1.5;">
                <strong>Disclaimer:</strong> Educational material designed for competitive examination preparation.
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/data_math_tricks.js"></script>
    <script>
        // Interactive Calculations
        function calculateWork() {
            const a = parseFloat(document.getElementById('workerA').value) || 0;
            const b = parseFloat(document.getElementById('workerB').value) || 0;
            const resBox = document.getElementById('workResult');
            if (a > 0 && b > 0) {
                const combined = (a * b) / (a + b);
                resBox.innerHTML = 'Together: <strong>' + combined.toFixed(2) + '</strong> hours/days (Method: ' + a + '×' + b + ' / ' + (a+b) + ')';
            } else {
                resBox.innerText = 'Please enter valid positive numbers for both workers.';
            }
        }

        function calculatePct() {
            const x = parseFloat(document.getElementById('pctX').value) || 0;
            const y = parseFloat(document.getElementById('pctY').value) || 0;
            const resBox = document.getElementById('pctResult');
            const res = (x * y) / 100;
            resBox.innerHTML = x + '% of ' + y + ' = ' + y + '% of ' + x + ' = <strong>' + res.toFixed(2) + '</strong>';
        }

        function calculateDep() {
            const p = parseFloat(document.getElementById('depP').value) || 0;
            const r = parseFloat(document.getElementById('depR').value) || 0;
            const n = parseInt(document.getElementById('depN').value) || 0;
            const resBox = document.getElementById('depResult');
            if (p > 0 && r >= 0 && n >= 0) {
                const finalVal = p * Math.pow(1 - (r / 100), n);
                resBox.innerHTML = 'Value after ' + n + ' years: <strong>Rs. ' + finalVal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '</strong>';
            } else {
                resBox.innerText = 'Please enter valid positive numbers.';
            }
        }

        // Drill toggling
        function toggleDrill(id) {
            const box = document.getElementById(id);
            if (!box) return;
            const isShown = box.style.display === 'block';
            box.style.display = isShown ? 'none' : 'block';
            const btn = box.previousElementSibling;
            if (btn && btn.classList.contains('reveal-btn')) {
                btn.innerHTML = isShown 
                    ? '<i class="fas fa-eye"></i> Show Answer &amp; Shortcut' 
                    : '<i class="fas fa-eye-slash"></i> Hide Answer';
            }
        }

        function toggleAllDrills(show) {
            document.querySelectorAll('.drill-solution-box').forEach(box => {
                box.style.display = show ? 'block' : 'none';
            });
            document.querySelectorAll('.reveal-btn').forEach(btn => {
                btn.innerHTML = show 
                    ? '<i class="fas fa-eye-slash"></i> Hide Answer' 
                    : '<i class="fas fa-eye"></i> Show Answer &amp; Shortcut';
            });
        }

        // Live Search Filter
        function filterMathContent() {
            const query = document.getElementById('mathSearchInput').value.toLowerCase().trim();
            const cards = document.querySelectorAll('.rule-card');
            const drillItems = document.querySelectorAll('.drill-item');
            const moduleCards = document.querySelectorAll('.module-section-card');

            if (!query) {
                cards.forEach(c => c.style.display = 'flex');
                drillItems.forEach(d => d.style.display = 'block');
                moduleCards.forEach(m => m.style.display = 'block');
                return;
            }

            moduleCards.forEach(mod => {
                let modHasMatch = false;

                // check rules inside module
                const rulesInMod = mod.querySelectorAll('.rule-card');
                rulesInMod.forEach(card => {
                    const text = card.innerText.toLowerCase();
                    if (text.includes(query)) {
                        card.style.display = 'flex';
                        modHasMatch = true;
                    } else {
                        card.style.display = 'none';
                    }
                });

                // check drills inside module
                const drillsInMod = mod.querySelectorAll('.drill-item');
                drillsInMod.forEach(drill => {
                    const text = drill.innerText.toLowerCase();
                    if (text.includes(query)) {
                        drill.style.display = 'block';
                        modHasMatch = true;
                    } else {
                        drill.style.display = 'none';
                    }
                });

                mod.style.display = modHasMatch ? 'block' : 'none';
            });
        }

        // Filter by Module Pill
        function filterByModule(moduleId) {
            document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active');

            const moduleCards = document.querySelectorAll('.module-section-card');
            if (moduleId === 'all') {
                moduleCards.forEach(m => m.style.display = 'block');
            } else {
                moduleCards.forEach(m => {
                    if (m.getAttribute('data-module-id') === moduleId) {
                        m.style.display = 'block';
                        m.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        m.style.display = 'none';
                    }
                });
            }
        }

        // Copy Formula
        function copyFormula(formula) {
            navigator.clipboard.writeText(formula).then(() => {
                alert('Formula copied to clipboard: ' + formula);
            });
        }

        // Dark Mode Toggle Support
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

const outputPath = path.join(__dirname, '..', 'frontend', 'math-tricks.html');
fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log(`Generated Math Tricks Portal: ${outputPath} (${(Buffer.byteLength(htmlContent)/1024).toFixed(2)} KB)`);
