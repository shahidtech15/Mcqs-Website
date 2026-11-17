const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/timeline.html');

const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Interactive Historical Timeline of Pakistan's History and World History. Explore milestones, constitutional developments, freedom movement, world wars, and treaties for CSS, PMS, and FIA exams.">
    <title>Interactive Historical Timeline — Pakistan &amp; World History — MCQs Portal</title>
    <!-- Anti-FOUC: apply dark mode before stylesheets paint -->
    <script>if(localStorage.getItem('mcqs_dark_mode')==='true')document.documentElement.classList.add('dark-mode');</script>
    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .timeline-container {
            max-width: 1320px;
            margin: 0 auto;
            padding: 24px 20px 80px;
        }

        /* Hero Banner */
        .timeline-hero {
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
            color: #ffffff;
            border-radius: 20px;
            padding: 36px 32px;
            margin-bottom: 28px;
            box-shadow: 0 10px 30px rgba(49, 46, 129, 0.25);
            position: relative;
            overflow: hidden;
        }

        .timeline-hero::after {
            content: '';
            position: absolute;
            top: -40%;
            right: -10%;
            width: 380px;
            height: 380px;
            background: radial-gradient(circle, rgba(129, 140, 248, 0.25) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .timeline-hero-title {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .timeline-hero-subtitle {
            font-size: 1.05rem;
            color: #c7d2fe;
            max-width: 820px;
            line-height: 1.6;
            margin: 0;
        }

        .timeline-hero-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 24px;
        }

        .stat-pill-tl {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.22);
            padding: 8px 16px;
            border-radius: 999px;
            font-size: 0.88rem;
            font-weight: 600;
            color: #ffffff;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        /* Controls & Filter Toolbar */
        .timeline-toolbar {
            background: var(--card-bg, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 18px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .toolbar-top-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 14px;
        }

        .track-tabs-group {
            display: flex;
            background: var(--bg-surface-subtle, #f1f5f9);
            padding: 4px;
            border-radius: 12px;
            gap: 4px;
        }

        .track-tab-btn {
            background: transparent;
            border: none;
            padding: 9px 18px;
            border-radius: 8px;
            font-size: 0.92rem;
            font-weight: 600;
            color: var(--text-muted, #64748b);
            cursor: pointer;
            transition: all 0.15s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .track-tab-btn.active {
            background: var(--card-bg, #ffffff);
            color: #4338ca;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            font-weight: 700;
        }

        .toolbar-search-box {
            position: relative;
            flex: 1;
            max-width: 380px;
        }

        .toolbar-search-box input {
            width: 100%;
            padding: 10px 16px 10px 40px;
            border-radius: 10px;
            border: 1px solid var(--border-color, #cbd5e1);
            background: var(--card-bg, #ffffff);
            color: var(--text-color, #0f172a);
            font-size: 0.92rem;
        }

        .toolbar-search-box i {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
        }

        .toolbar-bottom-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            padding-top: 12px;
            border-top: 1px solid var(--border-color, #f1f5f9);
        }

        .era-filter-select, .sort-filter-select {
            padding: 8px 14px;
            border-radius: 8px;
            border: 1px solid var(--border-color, #cbd5e1);
            background: var(--card-bg, #ffffff);
            color: var(--text-color, #0f172a);
            font-size: 0.88rem;
            font-weight: 600;
        }

        /* Quick Era Jump Bar */
        .era-jump-bar {
            display: flex;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 12px;
            margin-bottom: 24px;
            scrollbar-width: thin;
        }

        .jump-pill {
            background: var(--card-bg, #ffffff);
            border: 1px solid var(--border-color, #cbd5e1);
            color: var(--text-color, #1e293b);
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 0.82rem;
            font-weight: 600;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.15s ease;
        }

        .jump-pill:hover {
            border-color: #4338ca;
            color: #4338ca;
            background: #eef2ff;
        }

        /* Timeline Visual Spine & Architecture */
        .timeline-spine-wrapper {
            position: relative;
            padding: 20px 0;
        }

        .timeline-spine-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 4px;
            background: linear-gradient(180deg, #4338ca 0%, #10b981 50%, #0284c7 100%);
            transform: translateX(-50%);
            border-radius: 2px;
        }

        .timeline-card-wrapper {
            position: relative;
            margin-bottom: 40px;
            width: 50%;
        }

        .timeline-card-wrapper.left {
            left: 0;
            padding-right: 48px;
        }

        .timeline-card-wrapper.right {
            left: 50%;
            padding-left: 48px;
        }

        /* Year Node on Spine */
        .spine-node {
            position: absolute;
            top: 24px;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: var(--card-bg, #ffffff);
            border: 3.5px solid #4338ca;
            box-shadow: 0 0 0 6px rgba(67, 56, 202, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.95rem;
            color: #4338ca;
            z-index: 5;
        }

        .timeline-card-wrapper.left .spine-node {
            right: -21px;
        }

        .timeline-card-wrapper.right .spine-node {
            left: -21px;
        }

        /* Event Content Card */
        .timeline-event-card {
            background: var(--card-bg, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 18px;
            padding: 24px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .timeline-event-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .card-meta-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 12px;
        }

        .event-year-badge {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.88rem;
            font-weight: 800;
            padding: 4px 12px;
            border-radius: 6px;
        }

        .badge-pak {
            background: #dcfce7;
            color: #15803d;
            border: 1px solid #bbf7d0;
        }

        .badge-wld {
            background: #e0e7ff;
            color: #4338ca;
            border: 1px solid #c7d2fe;
        }

        .event-category-pill {
            font-size: 0.75rem;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 999px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .event-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-color, #0f172a);
            margin-bottom: 10px;
            line-height: 1.4;
        }

        .event-significance {
            font-size: 0.94rem;
            line-height: 1.6;
            color: var(--text-color, #334155);
            margin-bottom: 16px;
        }

        .figures-box {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 16px;
        }

        .figure-chip {
            background: var(--bg-surface-subtle, #f1f5f9);
            color: var(--text-color, #1e293b);
            font-size: 0.78rem;
            font-weight: 600;
            padding: 3px 10px;
            border-radius: 6px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .outcomes-list {
            margin: 0 0 16px 0;
            padding-left: 20px;
            font-size: 0.88rem;
            color: var(--text-muted, #475569);
            line-height: 1.5;
        }

        .outcomes-list li {
            margin-bottom: 4px;
        }

        /* Interactive MCQ Widget inside Card */
        .timeline-mcq-box {
            background: var(--bg-surface-subtle, #f8fafc);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 12px;
            padding: 16px;
            margin-top: 14px;
        }

        .mcq-box-header {
            font-size: 0.82rem;
            font-weight: 700;
            color: #4338ca;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .mcq-qtext {
            font-size: 0.92rem;
            font-weight: 600;
            margin-bottom: 12px;
            color: var(--text-color, #0f172a);
        }

        .mcq-options-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
        }

        .mcq-opt-button {
            background: var(--card-bg, #ffffff);
            border: 1px solid var(--border-color, #cbd5e1);
            border-radius: 8px;
            padding: 8px 12px;
            text-align: left;
            font-size: 0.86rem;
            font-weight: 500;
            color: var(--text-color, #1e293b);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.12s;
        }

        .mcq-opt-button:hover {
            border-color: #4338ca;
            background: #f5f3ff;
        }

        .mcq-opt-button.opt-correct {
            border-color: #10b981 !important;
            background: #dcfce7 !important;
            color: #15803d !important;
            font-weight: 700;
        }

        .mcq-opt-button.opt-wrong {
            border-color: #ef4444 !important;
            background: #fee2e2 !important;
            color: #b91c1c !important;
            font-weight: 700;
        }

        .mcq-explanation-panel {
            display: none;
            margin-top: 10px;
            padding: 10px 12px;
            border-radius: 8px;
            background: rgba(67, 56, 202, 0.06);
            border-left: 3px solid #4338ca;
            font-size: 0.84rem;
            color: var(--text-color, #1e293b);
            line-height: 1.4;
        }

        /* Empty State */
        .empty-timeline-msg {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-muted, #64748b);
            font-size: 1.1rem;
        }

        /* Responsive */
        @media (max-width: 900px) {
            .timeline-spine-line {
                left: 24px;
            }
            .timeline-card-wrapper {
                width: 100% !important;
                left: 0 !important;
                padding-left: 64px !important;
                padding-right: 0 !important;
            }
            .timeline-card-wrapper .spine-node {
                left: 3px !important;
                right: auto !important;
                top: 20px !important;
            }
            .toolbar-top-row {
                flex-direction: column;
                align-items: stretch;
            }
            .toolbar-search-box {
                max-width: 100%;
            }
        }
    </style>
</head>

<body>
    <!-- Main Header -->
    <header class="main-header">
        <div class="header-container">
            <div class="logo">
                <a href="index.html">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span>MCQs<span class="logo-accent">Portal</span></span>
                </a>
            </div>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="timeline.html" class="active" style="font-weight:700; color:#4338ca;"><i class="fa-solid fa-timeline"></i> Timeline</a>
                <a href="leaderboard.html"><i class="fa-solid fa-trophy"></i> Leaderboard</a>
                <a href="dashboard.html">Dashboard</a>
                <a href="ai-assistant.html">AI Assistant</a>
                <a href="editorial-explainer.html">Editorial Explainer</a>
                <a href="world-map.html">World Map</a>
                <a href="index.html#categories">Categories</a>
                <a href="quiz.html">Take a Quiz</a>
                <a href="digital-library.html">Digital Library</a>
                <a href="recommended-books.html">Recommended Books</a>
                <a href="fia-sample-papers.html">FIA Papers</a>
                <a href="grammar-rules.html">Grammar Rules</a>
                <a href="written-prep.html">Written Prep</a>
                <a href="exam-guide.html">Exam Guide</a>
                <a href="science-notes.html">Science Notes</a>
                <a href="admin.html" class="admin-link">Admin Panel</a>
            </nav>
            <div class="header-actions">
                <button type="button" class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
                    <i class="fa-solid fa-moon"></i>
                </button>
                <button type="button" class="mobile-menu" aria-label="Toggle navigation drawer">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Secondary Utility Navigation -->
    <nav class="secondary-nav">
        <div class="secondary-nav-container">
            <ul class="secondary-nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="timeline.html" class="active" style="font-weight: 700; color: #4338ca;"><i class="fa-solid fa-timeline"></i> Historical Timeline</a></li>
                <li><a href="world-map.html"><i class="fa-solid fa-earth-americas"></i> World Map</a></li>
                <li><a href="digital-library.html">Digital Library</a></li>
                <li><a href="leaderboard.html">Daily Challenge</a></li>
                <li><a href="quiz.html">Take a Quiz</a></li>
            </ul>
        </div>
    </nav>

    <main class="timeline-container">
        <!-- Hero Header -->
        <section class="timeline-hero">
            <h1 class="timeline-hero-title">
                <i class="fa-solid fa-timeline" style="color: #a5b4fc;"></i> Interactive Historical Timeline
            </h1>
            <p class="timeline-hero-subtitle">
                A chronologically unified interactive timeline covering watershed events from Pakistan's History and World History. Synthesized with CSS/PMS analytical significance, constitutional turning points, and embedded past paper MCQs.
            </p>
            <div class="timeline-hero-stats">
                <div class="stat-pill-tl"><i class="fa-solid fa-landmark-flag" style="color:#86efac;"></i> 🇵🇰 Pakistan History: 712 AD – 2024</div>
                <div class="stat-pill-tl"><i class="fa-solid fa-earth-americas" style="color:#93c5fd;"></i> 🌍 World History: 1215 – Modern Order</div>
                <div class="stat-pill-tl"><i class="fa-solid fa-certificate" style="color:#fde047;"></i> CSS &amp; PMS Analytical Focus</div>
                <div class="stat-pill-tl"><i class="fa-solid fa-clipboard-question" style="color:#fca5a5;"></i> Embedded Interactive Exam MCQs</div>
            </div>
        </section>

        <!-- Controls Toolbar -->
        <section class="timeline-toolbar">
            <div class="toolbar-top-row">
                <div class="track-tabs-group">
                    <button type="button" class="track-tab-btn active" onclick="setCategoryFilter('all', this)">
                        <i class="fa-solid fa-globe"></i> All Events
                    </button>
                    <button type="button" class="track-tab-btn" onclick="setCategoryFilter('pakistan', this)">
                        <i class="fa-solid fa-moon"></i> Pakistan's History
                    </button>
                    <button type="button" class="track-tab-btn" onclick="setCategoryFilter('world', this)">
                        <i class="fa-solid fa-earth-europe"></i> World History
                    </button>
                </div>
                <div class="toolbar-search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="timelineSearchInput" placeholder="Search by year, event, treaty, leader..." oninput="handleSearch(this.value)">
                </div>
            </div>

            <div class="toolbar-bottom-row">
                <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label for="eraFilterSelect" style="font-size:0.85rem; font-weight:600; color:var(--text-muted,#64748b);">Filter by Era:</label>
                    <select id="eraFilterSelect" class="era-filter-select" onchange="handleEraChange(this.value)">
                        <option value="all">All Historical Eras</option>
                        <option value="pak_pre1947">🇵🇰 Pre-1947 &amp; Freedom Movement</option>
                        <option value="pak_post1947">🇵🇰 Post-1947 Pakistan &amp; Statehood</option>
                        <option value="world_ancient_medieval">🌍 Ancient &amp; Medieval World</option>
                        <option value="world_modern">🌍 Modern Era &amp; Westphalia (1648-1914)</option>
                        <option value="world_20th">🌍 World Wars &amp; Cold War (1914-1991)</option>
                        <option value="world_21st">🌍 21st Century &amp; Contemporary Order</option>
                    </select>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <label for="sortOrderSelect" style="font-size:0.85rem; font-weight:600; color:var(--text-muted,#64748b);">Chronology:</label>
                    <select id="sortOrderSelect" class="sort-filter-select" onchange="handleSortChange(this.value)">
                        <option value="asc">Chronological (Oldest First)</option>
                        <option value="desc">Reverse Chronological (Newest First)</option>
                    </select>
                </div>
            </div>
        </section>

        <!-- Quick Era Jump Bar -->
        <div class="era-jump-bar" id="eraJumpBar">
            <button type="button" class="jump-pill" onclick="jumpToYear(712)">712 Muhammad bin Qasim</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1215)">1215 Magna Carta</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1453)">1453 Constantinople</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1648)">1648 Westphalia</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1776)">1776 US Declaration</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1789)">1789 French Revolution</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1857)">1857 War of Independence</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1906)">1906 Muslim League</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1914)">1914 WWI Outbreak</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1916)">1916 Lucknow Pact</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1930)">1930 Allahabad Address</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1940)">1940 Lahore Resolution</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1945)">1945 United Nations</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1947)">1947 Pakistan Independence</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1960)">1960 Indus Waters Treaty</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1973)">1973 Constitution</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1989)">1989 Berlin Wall</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(1998)">1998 Nuclear Tests</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(2010)">2010 18th Amendment</button>
            <button type="button" class="jump-pill" onclick="jumpToYear(2024)">2024 BRICS &amp; SCO</button>
        </div>

        <!-- Timeline Spine & Cards Display -->
        <section class="timeline-spine-wrapper">
            <div class="timeline-spine-line"></div>
            <div id="timelineCardsContainer">
                <!-- Injected via JavaScript -->
            </div>
        </section>
    </main>

    <!-- Scripts -->
    <script src="js/data_timeline.js"></script>
    <script>
        // State
        let currentCategory = 'all';
        let currentEra = 'all';
        let currentSort = 'asc';
        let searchQuery = '';

        document.addEventListener('DOMContentLoaded', () => {
            renderTimeline();
        });

        function getFilteredEvents() {
            let events = window.HISTORICAL_TIMELINE_DATA.getAllEvents();

            if (currentCategory !== 'all') {
                events = events.filter(e => e.category === currentCategory);
            }

            if (currentEra !== 'all') {
                events = events.filter(e => e.era === currentEra);
            }

            if (searchQuery) {
                const q = searchQuery.toLowerCase().trim();
                events = events.filter(e =>
                    e.title.toLowerCase().includes(q) ||
                    String(e.year).includes(q) ||
                    e.significance.toLowerCase().includes(q) ||
                    (e.keyFigures && e.keyFigures.some(f => f.toLowerCase().includes(q))) ||
                    e.eraName.toLowerCase().includes(q)
                );
            }

            // Sort
            events.sort((a, b) => {
                return currentSort === 'asc' ? a.year - b.year : b.year - a.year;
            });

            return events;
        }

        function renderTimeline() {
            const container = document.getElementById('timelineCardsContainer');
            const events = getFilteredEvents();

            if (events.length === 0) {
                container.innerHTML = \`
                    <div class="empty-timeline-msg">
                        <i class="fa-solid fa-calendar-xmark" style="font-size:3rem; margin-bottom:14px; color:#cbd5e1; display:block;"></i>
                        No historical milestones found matching your search or filters.
                    </div>
                \`;
                return;
            }

            let html = '';
            events.forEach((ev, idx) => {
                const isLeft = idx % 2 === 0;
                const sideClass = isLeft ? 'left' : 'right';
                const isPak = ev.category === 'pakistan';
                const badgeClass = isPak ? 'badge-pak' : 'badge-wld';
                const catLabel = isPak ? '🇵🇰 Pakistan History' : '🌍 World History';

                const figuresHtml = (ev.keyFigures || []).map(f => \`
                    <span class="figure-chip"><i class="fa-solid fa-user" style="color:#4338ca;"></i> \${f}</span>
                \`).join('');

                const outcomesHtml = (ev.outcomes || []).map(o => \`
                    <li>\${o}</li>
                \`).join('');

                // Embedded MCQ
                let mcqHtml = '';
                if (ev.examMcq) {
                    const qId = 'mcq_' + ev.id;
                    let optsHtml = '';
                    ['A', 'B', 'C', 'D'].forEach(ltr => {
                        optsHtml += \`
                            <button type="button" class="mcq-opt-button" onclick="checkMcqAnswer('\${qId}', '\${ltr}', '\${ev.examMcq.correctAnswer}', this)">
                                <strong>\${ltr}.</strong> \${ev.examMcq.options[ltr]}
                            </button>
                        \`;
                    });

                    mcqHtml = \`
                        <div class="timeline-mcq-box" id="\${qId}">
                            <div class="mcq-box-header">
                                <i class="fa-solid fa-graduation-cap"></i> CSS/PMS Screening Past Paper MCQ
                            </div>
                            <div class="mcq-qtext">\${ev.examMcq.questionText}</div>
                            <div class="mcq-options-grid">\${optsHtml}</div>
                            <div class="mcq-explanation-panel" id="exp_\${qId}">
                                <strong>Correct Answer: \${ev.examMcq.correctAnswer}</strong><br/>
                                \${ev.examMcq.explanation}
                            </div>
                        </div>
                    \`;
                }

                html += \`
                    <div class="timeline-card-wrapper \${sideClass}" id="event_\${ev.year}">
                        <div class="spine-node">
                            <i class="\${isPak ? 'fa-solid fa-moon' : 'fa-solid fa-earth-americas'}"></i>
                        </div>
                        <article class="timeline-event-card">
                            <div class="card-meta-header">
                                <span class="event-year-badge \${badgeClass}">\${ev.dateDisplay}</span>
                                <span class="event-category-pill" style="color:\${isPak ? '#15803d' : '#4338ca'}; background:\${isPak ? '#dcfce7' : '#e0e7ff'};">\${catLabel}</span>
                            </div>
                            <h2 class="event-title">\${ev.title}</h2>
                            <div class="event-significance">\${ev.significance}</div>
                            
                            <div style="font-size:0.8rem; font-weight:700; color:#64748b; margin-bottom:6px; text-transform:uppercase; letter-spacing:0.04em;">Key Figures &amp; Leaders:</div>
                            <div class="figures-box">\${figuresHtml}</div>

                            <div style="font-size:0.8rem; font-weight:700; color:#64748b; margin-bottom:6px; text-transform:uppercase; letter-spacing:0.04em;">Historical Consequences &amp; Impact:</div>
                            <ul class="outcomes-list">\${outcomesHtml}</ul>

                            \${mcqHtml}
                        </article>
                    </div>
                \`;
            });

            container.innerHTML = html;
        }

        // Check interactive MCQ answer
        function checkMcqAnswer(boxId, selectedLtr, correctLtr, clickedBtn) {
            const box = document.getElementById(boxId);
            if (!box) return;

            const allButtons = box.querySelectorAll('.mcq-opt-button');
            allButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.innerText.startsWith(correctLtr + '.')) {
                    btn.classList.add('opt-correct');
                }
            });

            if (selectedLtr === correctLtr) {
                clickedBtn.classList.add('opt-correct');
            } else {
                clickedBtn.classList.add('opt-wrong');
            }

            const expPanel = document.getElementById('exp_' + boxId);
            if (expPanel) expPanel.style.display = 'block';
        }

        // Toolbar Handlers
        function setCategoryFilter(category, btn) {
            currentCategory = category;
            document.querySelectorAll('.track-tab-btn').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');
            renderTimeline();
        }

        function handleEraChange(era) {
            currentEra = era;
            renderTimeline();
        }

        function handleSortChange(sort) {
            currentSort = sort;
            renderTimeline();
        }

        function handleSearch(query) {
            searchQuery = query;
            renderTimeline();
        }

        function jumpToYear(year) {
            searchQuery = '';
            document.getElementById('timelineSearchInput').value = '';
            currentEra = 'all';
            document.getElementById('eraFilterSelect').value = 'all';
            renderTimeline();

            setTimeout(() => {
                const target = document.getElementById('event_' + year);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    const card = target.querySelector('.timeline-event-card');
                    if (card) {
                        card.style.boxShadow = '0 0 0 4px #4338ca';
                        setTimeout(() => {
                            card.style.boxShadow = '';
                        }, 2000);
                    }
                }
            }, 100);
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const isDark = document.documentElement.classList.toggle('dark-mode');
                localStorage.setItem('mcqs_dark_mode', isDark);
            });
        }

        // Mobile drawer toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('nav-open');
            });
        }
    </script>
</body>

</html>
`;

fs.writeFileSync(targetPath, htmlContent, 'utf8');
console.log('Successfully written frontend/timeline.html!');
