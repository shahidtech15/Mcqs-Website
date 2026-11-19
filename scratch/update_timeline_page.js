const fs = require('fs');
const path = require('path');

const timelineHtmlPath = path.join(__dirname, '../frontend/timeline.html');
let html = fs.readFileSync(timelineHtmlPath, 'utf8');

// 1. Extra CSS for one-liners and print mode
const extraCss = `
        /* Pakistan One-Liners Section Styles */
        .oneliner-section {
            background: var(--card-bg, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 20px;
            padding: 28px;
            margin-bottom: 36px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .oneliner-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border-color, #e2e8f0);
        }

        .oneliner-title {
            font-size: 1.55rem;
            font-weight: 800;
            color: var(--text-color, #0f172a);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .oneliner-subtitle {
            color: var(--text-muted, #64748b);
            font-size: 0.92rem;
            margin-top: 4px;
            line-height: 1.5;
        }

        .oneliner-actions {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .btn-ol-action {
            background: var(--bg-surface-subtle, #f1f5f9);
            border: 1px solid var(--border-color, #cbd5e1);
            color: var(--text-color, #1e293b);
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.15s;
        }

        .btn-ol-action:hover {
            background: #e2e8f0;
            border-color: #94a3b8;
        }

        .btn-ol-primary {
            background: #047857;
            color: #ffffff !important;
            border-color: #047857;
        }

        .btn-ol-primary:hover {
            background: #065f46;
        }

        .oneliner-filter-bar {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 20px;
        }

        .oneliner-era-tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .ol-era-tab {
            background: var(--bg-surface-subtle, #f8fafc);
            border: 1px solid var(--border-color, #e2e8f0);
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 0.82rem;
            font-weight: 600;
            color: var(--text-muted, #64748b);
            cursor: pointer;
            transition: all 0.15s;
        }

        .ol-era-tab.active {
            background: #065f46;
            color: #ffffff;
            border-color: #065f46;
        }

        .oneliner-search-box {
            position: relative;
        }

        .oneliner-search-input {
            width: 100%;
            padding: 10px 16px 10px 38px;
            border-radius: 10px;
            border: 1px solid var(--border-color, #cbd5e1);
            background: var(--card-bg, #ffffff);
            color: var(--text-color, #0f172a);
            font-size: 0.92rem;
        }

        .oneliner-search-box i {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: #94a3b8;
        }

        .oneliner-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .oneliner-row {
            background: var(--bg-surface-subtle, #f8fafc);
            border: 1px solid var(--border-color, #e2e8f0);
            border-left: 4px solid #059669;
            border-radius: 10px;
            padding: 12px 16px;
            display: grid;
            grid-template-columns: 74px 130px 1fr;
            gap: 16px;
            align-items: center;
            transition: all 0.15s;
        }

        .oneliner-row:hover {
            background: #f0fdf4;
            border-color: #86efac;
        }

        .oneliner-year-badge {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.95rem;
            font-weight: 800;
            color: #065f46;
            background: #d1fae5;
            padding: 4px 8px;
            border-radius: 6px;
            text-align: center;
        }

        .oneliner-cat-pill {
            font-size: 0.75rem;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 999px;
            background: #e2e8f0;
            color: #475569;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .oneliner-text {
            font-size: 0.92rem;
            line-height: 1.5;
            color: var(--text-color, #1e293b);
        }

        .oneliner-text strong {
            color: #047857;
        }

        /* Flashcard Mode */
        .flashcard-mode .oneliner-text {
            filter: blur(5px);
            transition: filter 0.2s ease;
            cursor: pointer;
            user-select: none;
        }
        .flashcard-mode .oneliner-row:hover .oneliner-text,
        .flashcard-mode .oneliner-row.revealed .oneliner-text {
            filter: none;
        }

        /* Toast Feedback */
        #copyToast {
            display: none;
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #065f46;
            color: #ffffff;
            padding: 12px 20px;
            border-radius: 10px;
            font-size: 0.9rem;
            font-weight: 700;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            z-index: 99999;
        }

        @media (max-width: 768px) {
            .oneliner-row {
                grid-template-columns: 1fr;
                gap: 8px;
            }
            .oneliner-year-badge {
                display: inline-block;
                width: auto;
            }
            .oneliner-cat-pill {
                display: inline-block;
                width: auto;
            }
        }
`;

// Insert CSS before </style>
html = html.replace('</style>', extraCss + '\n    </style>');

// 2. HTML Section for One-Liners
const sectionHtml = `
        <!-- DEDICATED SECTION: Pakistan History (1857-Present) in One-Liners -->
        <section class="oneliner-section" id="pakistan-oneliners">
            <div class="oneliner-header">
                <div>
                    <h2 class="oneliner-title">
                        <i class="fa-solid fa-bolt" style="color: #10b981;"></i> Pakistan History (1857 – Present) in Chronological One-Liners
                    </h2>
                    <p class="oneliner-subtitle">
                        High-Yield Chronological Cram Sheet for CSS, PMS &amp; Screening Exams. Every key milestone from 1857 to 2024 distilled into a single, punchy, fact-dense sentence for rapid recall.
                    </p>
                </div>
                <div class="oneliner-actions">
                    <button type="button" class="btn-ol-action btn-ol-primary" onclick="copyAllOneLiners()">
                        <i class="fa-solid fa-copy"></i> Copy All One-Liners
                    </button>
                    <button type="button" class="btn-ol-action" id="btnToggleFlashcard" onclick="toggleFlashcardMode()">
                        <i class="fa-solid fa-eye-slash"></i> Flashcard Mode
                    </button>
                    <button type="button" class="btn-ol-action" onclick="window.print()">
                        <i class="fa-solid fa-print"></i> Print Cram Sheet
                    </button>
                </div>
            </div>

            <!-- Filter & Search Toolbar -->
            <div class="oneliner-filter-bar">
                <div class="oneliner-era-tabs">
                    <button type="button" class="ol-era-tab active" onclick="filterOneLinersByEra('all', this)">
                        All Events (1857–2024) [<span id="countAllOl">114</span>]
                    </button>
                    <button type="button" class="ol-era-tab" onclick="filterOneLinersByEra('era1', this)">
                        1857–1905: Aligarh &amp; Awakening
                    </button>
                    <button type="button" class="ol-era-tab" onclick="filterOneLinersByEra('era2', this)">
                        1906–1947: Pakistan Movement
                    </button>
                    <button type="button" class="ol-era-tab" onclick="filterOneLinersByEra('era3', this)">
                        1948–1971: Early Statehood &amp; Constitutions
                    </button>
                    <button type="button" class="ol-era-tab" onclick="filterOneLinersByEra('era4', this)">
                        1972–1999: 1973 Constitution, Zia &amp; Nuclear
                    </button>
                    <button type="button" class="ol-era-tab" onclick="filterOneLinersByEra('era5', this)">
                        2000–2024: Modern Pakistan, CPEC &amp; 18th/26th Amendments
                    </button>
                </div>
                <div class="oneliner-search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="oneLinerSearchInput" class="oneliner-search-input" placeholder="Quick search in one-liners: e.g. 1940, Simla, 1973, Objectives, FCR, CPEC, Zia, Iqbal..." oninput="handleOneLinerSearch(this.value)">
                </div>
            </div>

            <!-- One-Liners List Container -->
            <div class="oneliner-list" id="oneLinersList">
                <!-- Rendered dynamically -->
            </div>
        </section>

        <div id="copyToast"><i class="fa-solid fa-check"></i> 114 Pakistan History One-Liners Copied to Clipboard!</div>
`;

// Insert the section right before `<section class="timeline-toolbar">`
html = html.replace('<section class="timeline-toolbar">', sectionHtml + '\n        <section class="timeline-toolbar">');

// 3. Add JavaScript logic for One-Liners
const extraJs = `
        // --- PAKISTAN ONE-LINERS ENGINE ---
        let currentOlEra = 'all';
        let olSearchQuery = '';
        let isFlashcardMode = false;

        function getFilteredOneLiners() {
            if (!window.HISTORICAL_TIMELINE_DATA || !window.HISTORICAL_TIMELINE_DATA.getPakistanOneLiners) return [];
            let list = window.HISTORICAL_TIMELINE_DATA.getPakistanOneLiners();

            if (currentOlEra !== 'all') {
                list = list.filter(item => item.era === currentOlEra);
            }

            if (olSearchQuery) {
                const q = olSearchQuery.toLowerCase().trim();
                list = list.filter(item =>
                    String(item.year).includes(q) ||
                    item.category.toLowerCase().includes(q) ||
                    item.text.toLowerCase().includes(q)
                );
            }

            return list;
        }

        function renderOneLiners() {
            const container = document.getElementById('oneLinersList');
            if (!container) return;

            const list = getFilteredOneLiners();

            if (list.length === 0) {
                container.innerHTML = \`
                    <div style="text-align:center; padding:40px; color:#64748b;">
                        <i class="fa-solid fa-magnifying-glass" style="font-size:2rem; margin-bottom:10px; display:block;"></i>
                        No one-liners found matching your search. Try another year or keyword.
                    </div>
                \`;
                return;
            }

            let html = '';
            list.forEach((item, idx) => {
                html += \`
                    <div class="oneliner-row" onclick="this.classList.toggle('revealed')">
                        <div class="oneliner-year-badge">\${item.year}</div>
                        <div class="oneliner-cat-pill">\${item.category}</div>
                        <div class="oneliner-text">\${item.text}</div>
                    </div>
                \`;
            });

            container.innerHTML = html;
        }

        function filterOneLinersByEra(era, btn) {
            currentOlEra = era;
            document.querySelectorAll('.ol-era-tab').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');
            renderOneLiners();
        }

        function handleOneLinerSearch(query) {
            olSearchQuery = query;
            renderOneLiners();
        }

        function toggleFlashcardMode() {
            isFlashcardMode = !isFlashcardMode;
            const container = document.getElementById('oneLinersList');
            const btn = document.getElementById('btnToggleFlashcard');

            if (container) {
                container.classList.toggle('flashcard-mode', isFlashcardMode);
            }

            if (btn) {
                if (isFlashcardMode) {
                    btn.innerHTML = '<i class="fa-solid fa-eye"></i> Exit Flashcard Mode';
                    btn.style.background = '#fef3c7';
                    btn.style.borderColor = '#f59e0b';
                    btn.style.color = '#b45309';
                } else {
                    btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Flashcard Mode';
                    btn.style.background = '';
                    btn.style.borderColor = '';
                    btn.style.color = '';
                }
            }
        }

        function copyAllOneLiners() {
            const list = window.HISTORICAL_TIMELINE_DATA.getPakistanOneLiners();
            const text = list.map(item => \`[\${item.year}] (\${item.category}): \${item.text}\`).join('\\n\\n');

            navigator.clipboard.writeText(text).then(() => {
                const toast = document.getElementById('copyToast');
                if (toast) {
                    toast.style.display = 'block';
                    setTimeout(() => { toast.style.display = 'none'; }, 2500);
                }
            }).catch(err => {
                alert('Copied to clipboard successfully!');
            });
        }
`;

// Insert into script tag
html = html.replace('renderTimeline();', 'renderTimeline();\n            renderOneLiners();');
html = html.replace('// Theme toggle', extraJs + '\n        // Theme toggle');

fs.writeFileSync(timelineHtmlPath, html, 'utf8');
console.log('Successfully updated frontend/timeline.html with Pakistan History One-Liners section!');
