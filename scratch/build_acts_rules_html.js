const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/acts-rules.html');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pakistan Acts, Statutes & Civil Service Rules | FPSC & CSS Legal Repository</title>
    <meta name="description" content="Authoritative bare acts and statutory rules for CSS, PMS, FPSC and FIA tests: Anti-Money Laundering Act 2010, Civil Servants Act 1973, Civil Servants (E&D) Rules 2020, APT Rules 1973, and International Deputation Rules 2016.">
    <!-- Google Fonts & Font Awesome -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <style>
        :root {
            --primary: #047857;
            --primary-light: #10b981;
            --primary-dark: #065f46;
            --accent: #d97706;
            --bg-page: #f8fafc;
            --card-bg: #ffffff;
            --border-color: #e2e8f0;
            --text-dark: #0f172a;
            --text-muted: #64748b;
        }

        body.dark-mode {
            --bg-page: #0f172a;
            --card-bg: #1e293b;
            --border-color: #334155;
            --text-dark: #f8fafc;
            --text-muted: #94a3b8;
        }

        body {
            background-color: var(--bg-page);
            color: var(--text-dark);
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        .acts-hero {
            background: linear-gradient(135deg, #064e3b 0%, #047857 50%, #0f766e 100%);
            color: #ffffff;
            padding: 60px 20px 48px;
            text-align: center;
            position: relative;
        }

        .acts-hero h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 2.6rem;
            font-weight: 800;
            margin: 0 0 12px;
            letter-spacing: -0.5px;
        }

        .acts-hero p {
            max-width: 840px;
            margin: 0 auto 24px;
            font-size: 1.1rem;
            color: #d1fae5;
            line-height: 1.6;
        }

        .acts-search-box {
            max-width: 680px;
            margin: 0 auto;
            position: relative;
        }

        .acts-search-box input {
            width: 100%;
            padding: 16px 20px 16px 50px;
            border-radius: 9999px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.95);
            font-size: 1rem;
            outline: none;
            color: #0f172a;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            transition: all 0.2s ease;
        }

        .acts-search-box input:focus {
            background: #ffffff;
            border-color: #34d399;
            box-shadow: 0 12px 30px rgba(0,0,0,0.25);
        }

        .acts-search-box i {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: #047857;
            font-size: 1.2rem;
        }

        /* Tab Navigation Bar */
        .acts-tabs-wrapper {
            background: var(--card-bg);
            border-bottom: 1px solid var(--border-color);
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .acts-tabs-nav {
            display: flex;
            gap: 8px;
            overflow-x: auto;
            padding: 12px 20px;
            max-width: 1280px;
            margin: 0 auto;
            scrollbar-width: thin;
        }

        .acts-tab-btn {
            background: transparent;
            border: none;
            padding: 10px 18px;
            border-radius: 8px;
            font-size: 0.92rem;
            font-weight: 600;
            color: var(--text-muted);
            cursor: pointer;
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s ease;
        }

        .acts-tab-btn:hover {
            background: rgba(4, 120, 87, 0.08);
            color: var(--primary);
        }

        .acts-tab-btn.active {
            background: var(--primary);
            color: #ffffff;
        }

        /* Container Layout */
        .acts-container {
            max-width: 1280px;
            margin: 32px auto 60px;
            padding: 0 20px;
        }

        .tab-pane {
            display: none;
        }

        .tab-pane.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Metadata & KPI Cards */
        .meta-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 28px;
            margin-bottom: 28px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.03);
        }

        .meta-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border-color);
        }

        .meta-title h2 {
            font-family: 'Outfit', sans-serif;
            font-size: 1.7rem;
            font-weight: 800;
            color: var(--primary);
            margin: 0 0 6px;
        }

        .meta-title .citation {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.88rem;
            color: var(--text-muted);
            font-weight: 600;
        }

        .badge-pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 12px;
            border-radius: 9999px;
            font-size: 0.82rem;
            font-weight: 700;
            background: #e0f2fe;
            color: #0369a1;
        }

        .badge-success { background: #dcfce7; color: #15803d; }
        .badge-warning { background: #fef3c7; color: #92400e; }
        .badge-danger { background: #fee2e2; color: #b91c1c; }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
            margin-top: 20px;
        }

        .metric-item {
            background: var(--bg-page);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 16px;
            text-align: center;
        }

        .metric-value {
            font-family: 'Outfit', sans-serif;
            font-size: 1.3rem;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 4px;
        }

        .metric-label {
            font-size: 0.78rem;
            color: var(--text-muted);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* Section Cards */
        .section-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 22px;
            margin-bottom: 18px;
            transition: all 0.2s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .section-card:hover {
            border-color: var(--primary-light);
            box-shadow: 0 8px 24px rgba(4, 120, 87, 0.08);
            transform: translateY(-2px);
        }

        .section-card-header {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 12px;
        }

        .sec-badge {
            background: var(--primary);
            color: #ffffff;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            font-weight: 700;
            padding: 6px 12px;
            border-radius: 8px;
            white-space: nowrap;
        }

        .sec-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--text-dark);
            margin: 0;
        }

        .sec-summary {
            font-size: 0.95rem;
            color: var(--text-dark);
            line-height: 1.6;
            margin-bottom: 14px;
        }

        .exam-tip-box {
            background: #ecfdf5;
            border-left: 4px solid var(--primary);
            border-radius: 0 8px 8px 0;
            padding: 10px 16px;
            font-size: 0.88rem;
            color: #065f46;
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        body.dark-mode .exam-tip-box {
            background: #064e3b;
            color: #d1fae5;
            border-left-color: #34d399;
        }

        /* Quota Table */
        .quota-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid var(--border-color);
        }

        .quota-table th, .quota-table td {
            padding: 12px 16px;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }

        .quota-table th {
            background: var(--primary);
            color: #ffffff;
            font-weight: 700;
            font-size: 0.9rem;
        }

        .quota-table tr:nth-child(even) {
            background: var(--bg-page);
        }

        /* Interactive Quiz Engine */
        .quiz-panel {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 30px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.03);
        }

        .quiz-filter-bar {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 24px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border-color);
        }

        .q-filter-btn {
            background: var(--bg-page);
            border: 1px solid var(--border-color);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-muted);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .q-filter-btn.active {
            background: var(--primary);
            color: #ffffff;
            border-color: var(--primary);
        }

        .quiz-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .quiz-question-text {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 16px;
            line-height: 1.5;
        }

        .quiz-options-list {
            display: grid;
            gap: 10px;
            margin-bottom: 14px;
        }

        .quiz-opt-btn {
            background: var(--bg-page);
            border: 1px solid var(--border-color);
            padding: 12px 16px;
            border-radius: 8px;
            font-size: 0.92rem;
            text-align: left;
            cursor: pointer;
            transition: all 0.2s ease;
            color: var(--text-dark);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .quiz-opt-btn:hover {
            border-color: var(--primary);
            background: rgba(4, 120, 87, 0.05);
        }

        .quiz-opt-btn.correct {
            background: #dcfce7 !important;
            border-color: #22c55e !important;
            color: #15803d !important;
            font-weight: 700;
        }

        .quiz-opt-btn.incorrect {
            background: #fee2e2 !important;
            border-color: #ef4444 !important;
            color: #b91c1c !important;
        }

        .quiz-explanation-box {
            display: none;
            background: #f1f5f9;
            border-left: 4px solid #2563eb;
            padding: 12px 16px;
            border-radius: 0 8px 8px 0;
            font-size: 0.88rem;
            color: #1e293b;
            margin-top: 10px;
        }

        body.dark-mode .quiz-explanation-box {
            background: #1e293b;
            color: #cbd5e1;
            border-left-color: #60a5fa;
        }

        @media (max-width: 768px) {
            .acts-hero h1 { font-size: 1.9rem; }
            .meta-header { flex-direction: column; }
        }
    </style>
</head>
<body>

    <!-- Main Navigation Bar -->
    <header class="main-header">
        <div class="header-container">
            <a href="index.html" class="logo">
                <i class="fa-solid fa-scale-balanced" style="color: #10b981;"></i>
                <span>FPSC<strong>PREP</strong></span>
            </a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="acts-rules.html" class="active">Acts &amp; Rules</a>
                <a href="articles.html">Articles</a>
                <a href="timeline.html">Timeline</a>
                <a href="leaderboard.html">Leaderboard</a>
                <a href="dashboard.html">Dashboard</a>
                <a href="ai-assistant.html">AI Assistant</a>
                <a href="editorial-explainer.html">Editorial Explainer</a>
                <a href="world-map.html">World Map</a>
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
                <button id="themeToggle" class="theme-toggle" aria-label="Toggle Theme">
                    <i class="fa-solid fa-moon"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="acts-hero">
        <div class="container">
            <div style="display:inline-flex; align-items:center; gap:8px; background:rgba(255,255,255,0.15); padding:6px 16px; border-radius:9999px; font-size:0.85rem; font-weight:700; margin-bottom:16px;">
                <i class="fa-solid fa-gavel"></i> Federal Statutory Code &amp; Civil Service Rules Repository
            </div>
            <h1>Pakistan Acts, Statutes &amp; Civil Service Regulations</h1>
            <p>
                Authoritative Section-by-Section statutory breakdowns, key definitions, penalties, legal timelines, and interactive exam practice questions for <strong>Anti-Money Laundering Act 2010</strong>, <strong>Civil Servants Act 1973</strong>, <strong>Civil Servants (E&amp;D) Rules 2020</strong>, <strong>APT Rules 1973</strong>, and <strong>International Deputation Rules 2016</strong>.
            </p>
            <div class="acts-search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="actsSearchInput" placeholder="Search sections, rules, fines, punishments, quotas, or legal terms (e.g., '180 days', 'CTR', 'misconduct', 'Sindh quota')..." oninput="filterActsContent()">
            </div>
        </div>
    </section>

    <!-- Tab Navigation -->
    <div class="acts-tabs-wrapper">
        <nav class="acts-tabs-nav" id="actsTabsNav">
            <button class="acts-tab-btn active" onclick="switchActTab('tab-aml')">
                <i class="fa-solid fa-shield-halved"></i> Anti-Money Laundering Act, 2010
            </button>
            <button class="acts-tab-btn" onclick="switchActTab('tab-csa')">
                <i class="fa-solid fa-landmark"></i> Civil Servants Act, 1973
            </button>
            <button class="acts-tab-btn" onclick="switchActTab('tab-ed')">
                <i class="fa-solid fa-balance-scale"></i> Civil Servants (E&amp;D) Rules, 2020
            </button>
            <button class="acts-tab-btn" onclick="switchActTab('tab-apt')">
                <i class="fa-solid fa-users-gear"></i> APT Rules, 1973 &amp; Quotas
            </button>
            <button class="acts-tab-btn" onclick="switchActTab('tab-intl')">
                <i class="fa-solid fa-globe"></i> International Deputation Rules, 2016
            </button>
            <button class="acts-tab-btn" onclick="switchActTab('tab-quiz')" style="color:#059669; font-weight:800;">
                <i class="fa-solid fa-circle-question"></i> Practice Quiz Engine (47 MCQs)
            </button>
        </nav>
    </div>

    <!-- Main Container Content -->
    <main class="acts-container">

        <!-- ========================================== -->
        <!-- TAB 1: ANTI-MONEY LAUNDERING ACT, 2010     -->
        <!-- ========================================== -->
        <div id="tab-aml" class="tab-pane active">
            <div class="meta-card">
                <div class="meta-header">
                    <div class="meta-title">
                        <h2>Anti-Money Laundering Act, 2010</h2>
                        <div class="citation">Act No. VII of 2010 &bull; As Amended Upto September 2020 (Act XXI of 2020)</div>
                    </div>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <span class="badge-pill badge-success"><i class="fa-solid fa-check"></i> FATF 40 Compliant</span>
                        <span class="badge-pill badge-warning"><i class="fa-solid fa-file-pdf"></i> 46 Sections &amp; 4 Schedules</span>
                    </div>
                </div>
                <p style="color:var(--text-muted); font-size:0.95rem; margin:0 0 16px;">
                    An Act to provide for prevention of money laundering, combating financing of terrorism (CFT), counter proliferation financing, and forfeiture of property derived from, or involved in, money laundering or financing of terrorism.
                </p>
                <div class="metrics-grid">
                    <div class="metric-item">
                        <div class="metric-value">1 to 10 Yrs</div>
                        <div class="metric-label">Rigorous Imprisonment</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">Rs. 25 Million</div>
                        <div class="metric-label">Max Individual Fine</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">Rs. 100 Million</div>
                        <div class="metric-label">Max Corporate Fine</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">7 Working Days</div>
                        <div class="metric-label">CTR Filing Deadline</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">10 Years</div>
                        <div class="metric-label">STR/CTR Record Keeping</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">180 + 180 Days</div>
                        <div class="metric-label">Provisional Attachment</div>
                    </div>
                </div>
            </div>

            <div id="amlSectionsContainer">
                <!-- Dynamically Rendered AML Sections -->
            </div>
        </div>

        <!-- ========================================== -->
        <!-- TAB 2: CIVIL SERVANTS ACT, 1973            -->
        <!-- ========================================== -->
        <div id="tab-csa" class="tab-pane">
            <div class="meta-card">
                <div class="meta-header">
                    <div class="meta-title">
                        <h2>Civil Servants Act, 1973</h2>
                        <div class="citation">Act No. LXXI of 1973 &bull; Enacted 26th September, 1973</div>
                    </div>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <span class="badge-pill badge-success"><i class="fa-solid fa-scale-balanced"></i> Article 240 Charter</span>
                        <span class="badge-pill badge-warning"><i class="fa-solid fa-book-bookmark"></i> 26 Sections (Chapters I–IV)</span>
                    </div>
                </div>
                <p style="color:var(--text-muted); font-size:0.95rem; margin:0 0 16px;">
                    An Act to regulate the appointment of persons to, and the terms and conditions of service of persons in, the service of Pakistan, and to provide for matters connected therewith or ancillary thereto.
                </p>
                <div class="metrics-grid">
                    <div class="metric-item">
                        <div class="metric-value">60 Years</div>
                        <div class="metric-label">Superannuation Retirement</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">20 Years</div>
                        <div class="metric-label">Pension Qualifying Service</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">Pleasure</div>
                        <div class="metric-label">Of President (Section 4)</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">14 Days</div>
                        <div class="metric-label">Ad hoc Termination Notice</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">30 Days</div>
                        <div class="metric-label">Appeal / Representation</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">Section 23B</div>
                        <div class="metric-label">Civil Courts Barred</div>
                    </div>
                </div>
            </div>

            <div id="csaSectionsContainer">
                <!-- Dynamically Rendered CSA Sections -->
            </div>
        </div>

        <!-- ========================================== -->
        <!-- TAB 3: CIVIL SERVANTS (E&D) RULES, 2020    -->
        <!-- ========================================== -->
        <div id="tab-ed" class="tab-pane">
            <div class="meta-card">
                <div class="meta-header">
                    <div class="meta-title">
                        <h2>Civil Servants (Efficiency and Discipline) Rules, 2020</h2>
                        <div class="citation">S.R.O. No. 1331(I)/2020 &bull; Notified 11th December, 2020</div>
                    </div>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <span class="badge-pill badge-danger"><i class="fa-solid fa-ban"></i> Legal Counsel Barred (Rule 20)</span>
                        <span class="badge-pill badge-success"><i class="fa-solid fa-stopwatch"></i> 60-Day Time-Bound Inquiries</span>
                    </div>
                </div>
                <p style="color:var(--text-muted); font-size:0.95rem; margin:0 0 16px;">
                    Modernized disciplinary procedural code replacing Government Servants (E&amp;D) Rules 1973. Streamlines the inquiry machinery, establishes statutory timelines, and mandates dismissal for grave corruption.
                </p>
                <div class="metrics-grid">
                    <div class="metric-item">
                        <div class="metric-value">120 Days</div>
                        <div class="metric-label">Initial Suspension Max</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">10 to 14 Days</div>
                        <div class="metric-label">Show Cause Defense Window</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">60 Days</div>
                        <div class="metric-label">Inquiry Hearing Deadline</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">7 Days</div>
                        <div class="metric-label">Report Submission to Authority</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">30 Days</div>
                        <div class="metric-label">Authority Final Decision</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">Dismissal</div>
                        <div class="metric-label">Mandatory for Corruption</div>
                    </div>
                </div>
            </div>

            <div id="edRulesContainer">
                <!-- Dynamically Rendered E&D Rules -->
            </div>
        </div>

        <!-- ========================================== -->
        <!-- TAB 4: APT RULES, 1973 & QUOTAS            -->
        <!-- ========================================== -->
        <div id="tab-apt" class="tab-pane">
            <div class="meta-card">
                <div class="meta-header">
                    <div class="meta-title">
                        <h2>Civil Servants (Appointment, Promotion and Transfer) Rules, 1973</h2>
                        <div class="citation">S.R.O. No. 1498(I)/73 &bull; As Amended Upto 2020</div>
                    </div>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <span class="badge-pill badge-success"><i class="fa-solid fa-diagram-project"></i> Rule 6 Appointing Authority</span>
                        <span class="badge-pill badge-warning"><i class="fa-solid fa-chart-pie"></i> Rule 14 Provincial Quotas</span>
                    </div>
                </div>

                <h3 style="font-size:1.15rem; font-weight:700; color:var(--primary); margin:0 0 10px;">
                    <i class="fa-solid fa-chart-pie"></i> Official Provincial &amp; Regional Quotas Matrix (Rule 14)
                </h3>
                <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">
                    Applicable to all appointments on an All-Pakistan basis in Basic Pay Scales 16 and above, and BPS 6 to 15 in offices serving whole of Pakistan.
                </p>

                <div class="table-responsive">
                    <table class="quota-table">
                        <thead>
                            <tr>
                                <th>Province / Region</th>
                                <th>Prescribed Quota %</th>
                                <th>Sub-Allocation / Explanatory Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Open Merit (National)</strong></td>
                                <td><strong style="color:var(--primary); font-size:1.05rem;">7.5 %</strong></td>
                                <td>Open to candidates with top nationwide aggregate score irrespective of domicile</td>
                            </tr>
                            <tr>
                                <td><strong>Punjab (including Federal Area of Islamabad)</strong></td>
                                <td><strong style="color:var(--primary); font-size:1.05rem;">50.0 %</strong></td>
                                <td>Includes Punjab province and Islamabad Capital Territory domiciled candidates</td>
                            </tr>
                            <tr>
                                <td><strong>Sindh (Total 19%)</strong></td>
                                <td><strong style="color:var(--primary); font-size:1.05rem;">19.0 %</strong></td>
                                <td>
                                    <div>&bull; <strong>Urban (Karachi, Hyderabad, Sukkur):</strong> 40% of 19% = <strong>7.6%</strong></div>
                                    <div>&bull; <strong>Rural (Rest of Sindh):</strong> 60% of 19% = <strong>11.4%</strong></div>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Khyber Pakhtunkhwa</strong></td>
                                <td><strong style="color:var(--primary); font-size:1.05rem;">11.5 %</strong></td>
                                <td>Regular KP districts (excluding newly merged tribal districts)</td>
                            </tr>
                            <tr>
                                <td><strong>Balochistan</strong></td>
                                <td><strong style="color:var(--primary); font-size:1.05rem;">6.0 %</strong></td>
                                <td>All districts across Balochistan province</td>
                            </tr>
                            <tr>
                                <td><strong>Newly Merged Districts of KP (Ex-FATA)</strong></td>
                                <td><strong style="color:var(--primary); font-size:1.05rem;">3.0 %</strong></td>
                                <td>Observed independently for 10 years to ensure socio-economic parity</td>
                            </tr>
                            <tr>
                                <td><strong>Azad Jammu and Kashmir (AJK)</strong></td>
                                <td><strong style="color:var(--primary); font-size:1.05rem;">2.0 %</strong></td>
                                <td>AJK state subject / domicile certificate holders</td>
                            </tr>
                            <tr>
                                <td><strong>Gilgit-Baltistan (GB)</strong></td>
                                <td><strong style="color:var(--primary); font-size:1.05rem;">1.0 %</strong></td>
                                <td>Gilgit, Baltistan and Diamer division domiciles</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="aptRulesContainer">
                    <!-- Dynamically Rendered APT Rules -->
                </div>
            </div>
        </div>

        <!-- ========================================== -->
        <!-- TAB 5: INTERNATIONAL DEPUTATION RULES 2016 -->
        <!-- ========================================== -->
        <div id="tab-intl" class="tab-pane">
            <div class="meta-card">
                <div class="meta-header">
                    <div class="meta-title">
                        <h2>Civil Servants (Service in International Organizations) Rules, 2016</h2>
                        <div class="citation">S.R.O. No. 954(I)/2016 &bull; Notified 7th October, 2016 (Amended 2020)</div>
                    </div>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">
                        <span class="badge-pill badge-success"><i class="fa-solid fa-earth-americas"></i> UN / World Bank / IMF / ADB</span>
                        <span class="badge-pill badge-warning"><i class="fa-solid fa-percent"></i> 80:20 Weightage Formula</span>
                    </div>
                </div>
                <p style="color:var(--text-muted); font-size:0.95rem; margin:0 0 16px;">
                    Comprehensive regulatory framework governing federal officers competing for or deputed to sensitive and strategic international agencies, foreign financial institutions, and UN specialized bodies.
                </p>
                <div class="metrics-grid">
                    <div class="metric-item">
                        <div class="metric-value">5 Years</div>
                        <div class="metric-label">Min Cadre Service Required</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">3 Years</div>
                        <div class="metric-label">Cooling-off Period on Return</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">60%</div>
                        <div class="metric-label">Written Test Qualifying Score</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">80% : 20%</div>
                        <div class="metric-label">Written : Interview Weightage</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">3 + 2 Years</div>
                        <div class="metric-label">Deputation Max (5 Yrs)</div>
                    </div>
                    <div class="metric-item">
                        <div class="metric-value">Static List</div>
                        <div class="metric-label">Placed if Overstayed > 5 Yrs</div>
                    </div>
                </div>
            </div>

            <div id="intlRulesContainer">
                <!-- Dynamically Rendered International Rules -->
            </div>
        </div>

        <!-- ========================================== -->
        <!-- TAB 6: PRACTICE QUIZ ENGINE (47 MCQS)      -->
        <!-- ========================================== -->
        <div id="tab-quiz" class="tab-pane">
            <div class="quiz-panel">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:16px;">
                    <div>
                        <h2 style="font-family:'Outfit',sans-serif; font-size:1.6rem; font-weight:800; color:var(--primary); margin:0;">
                            <i class="fa-solid fa-laptop-code"></i> Statutory Mastery Quiz Engine
                        </h2>
                        <p style="color:var(--text-muted); font-size:0.9rem; margin:4px 0 0;">
                            Test your command on exact sections, financial thresholds, penal terms, and statutory quorum rules.
                        </p>
                    </div>
                    <div style="background:var(--bg-page); border:1px solid var(--border-color); padding:8px 16px; border-radius:10px; font-weight:700; font-size:0.95rem;">
                        Score: <span id="quizScoreDisplay" style="color:var(--primary); font-size:1.1rem;">0 / 0</span>
                    </div>
                </div>

                <!-- Filter Quiz by Act -->
                <div class="quiz-filter-bar">
                    <button class="q-filter-btn active" onclick="filterQuizQuestions('all', this)">All Statutes (47)</button>
                    <button class="q-filter-btn" onclick="filterQuizQuestions('aml_act_2010', this)">AML Act 2010 (15)</button>
                    <button class="q-filter-btn" onclick="filterQuizQuestions('civil_servants_act_1973', this)">Civil Servants Act 1973 (12)</button>
                    <button class="q-filter-btn" onclick="filterQuizQuestions('civil_servants_ed_rules_2020', this)">E&amp;D Rules 2020 (8)</button>
                    <button class="q-filter-btn" onclick="filterQuizQuestions('civil_servants_apt_rules_1973', this)">APT Rules &amp; Quotas (8)</button>
                    <button class="q-filter-btn" onclick="filterQuizQuestions('civil_servants_intl_org_rules_2016', this)">Intl Deputation 2016 (4)</button>
                </div>

                <div id="quizContainer">
                    <!-- Dynamically Rendered Questions -->
                </div>
            </div>
        </div>

    </main>

    <!-- Footer -->
    <footer class="main-footer" style="background:#064e3b; color:#ffffff; padding:40px 20px; text-align:center; margin-top:60px;">
        <div style="max-width:1200px; margin:0 auto;">
            <div style="font-size:1.2rem; font-weight:800; margin-bottom:10px;">
                <i class="fa-solid fa-scale-balanced" style="color:#34d399;"></i> FPSCPREP &bull; Pakistan Acts &amp; Civil Service Regulations
            </div>
            <p style="color:#a7f3d0; font-size:0.9rem; max-width:700px; margin:0 auto 20px;">
                Complete statutory resource aligned with the official Gazettes of Pakistan. Essential study material for CSS, PMS, FPSC Assistant Director, Inspector, and General Recruitment examinations.
            </p>
            <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap; font-size:0.85rem; color:#d1fae5;">
                <a href="index.html" style="color:inherit; text-decoration:none;">Home</a> &bull;
                <a href="digital-library.html" style="color:inherit; text-decoration:none;">Digital Library</a> &bull;
                <a href="ai-assistant.html" style="color:inherit; text-decoration:none;">AI Assistant</a> &bull;
                <a href="quiz.html" style="color:inherit; text-decoration:none;">Quiz Engine</a> &bull;
                <a href="admin.html" style="color:inherit; text-decoration:none;">Admin Portal</a>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/data_acts_rules.js"></script>
    <script>
        // Tab Switching Logic
        function switchActTab(tabId) {
            document.querySelectorAll('.acts-tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

            const targetPane = document.getElementById(tabId);
            if (targetPane) targetPane.classList.add('active');

            const activeBtn = document.querySelector(\`.acts-tab-btn[onclick*="\${tabId}"]\`);
            if (activeBtn) activeBtn.classList.add('active');
            window.scrollTo({ top: 280, behavior: 'smooth' });
        }

        // Render Section Card Helper
        function renderSectionCards(sections) {
            return sections.map(sec => \`
                <div class="section-card" data-search-text="\${sec.num} \${sec.title} \${sec.summary} \${sec.examTip}">
                    <div class="section-card-header">
                        <span class="sec-badge">Section \${sec.num}</span>
                        <h3 class="sec-title">\${sec.title}</h3>
                    </div>
                    <div class="sec-summary">\${sec.summary}</div>
                    <div class="exam-tip-box">
                        <i class="fa-solid fa-lightbulb" style="color:#059669; font-size:1.1rem; margin-top:2px;"></i>
                        <div><strong>Examiner's Insight / High-Yield Tip:</strong> \${sec.examTip}</div>
                    </div>
                </div>
            \`).join('');
        }

        function renderRuleCards(rules) {
            return rules.map(r => \`
                <div class="section-card" data-search-text="\${r.num} \${r.title} \${r.summary} \${r.examTip}">
                    <div class="section-card-header">
                        <span class="sec-badge">Rule \${r.num}</span>
                        <h3 class="sec-title">\${r.title}</h3>
                    </div>
                    <div class="sec-summary">\${r.summary}</div>
                    <div class="exam-tip-box">
                        <i class="fa-solid fa-lightbulb" style="color:#059669; font-size:1.1rem; margin-top:2px;"></i>
                        <div><strong>Examiner's Insight / High-Yield Tip:</strong> \${r.examTip}</div>
                    </div>
                </div>
            \`).join('');
        }

        // Search Filter
        function filterActsContent() {
            const query = (document.getElementById('actsSearchInput')?.value || '').toLowerCase().trim();
            const cards = document.querySelectorAll('.section-card');
            cards.forEach(card => {
                const text = (card.getAttribute('data-search-text') || '').toLowerCase();
                card.style.display = (!query || text.includes(query)) ? 'block' : 'none';
            });
        }

        // Quiz State
        let totalAttempted = 0;
        let totalCorrect = 0;

        function renderQuiz(filter = 'all') {
            const container = document.getElementById('quizContainer');
            if (!container || !window.ACTS_RULES_DATA) return;

            const allQ = window.ACTS_RULES_DATA.questions || [];
            const filteredQ = filter === 'all' ? allQ : allQ.filter(q => q.act === filter);

            container.innerHTML = filteredQ.map((q, idx) => {
                const optLetters = ['A', 'B', 'C', 'D'];
                return \`
                    <div class="quiz-card" id="qcard_\${q.id}">
                        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                            <span class="badge-pill badge-warning" style="font-size:0.75rem;">Question #\${idx + 1}</span>
                            <span class="badge-pill badge-success" style="font-size:0.75rem;">\${q.diff}</span>
                        </div>
                        <div class="quiz-question-text">\${q.q}</div>
                        <div class="quiz-options-list">
                            \${q.opts.map((opt, oIdx) => \`
                                <button type="button" class="quiz-opt-btn" onclick="checkQuizAnswer('\${q.id}', '\${optLetters[oIdx]}', '\${q.ans}', this)">
                                    <strong style="width:24px; height:24px; border-radius:50%; background:#e2e8f0; display:inline-flex; align-items:center; justify-content:center; font-size:0.8rem;">\${optLetters[oIdx]}</strong>
                                    <span>\${opt}</span>
                                </button>
                            \`).join('')}
                        </div>
                        <div class="quiz-explanation-box" id="exp_\${q.id}">
                            <strong><i class="fa-solid fa-circle-info"></i> Official Statutory Explanation:</strong> \${q.exp}
                        </div>
                    </div>
                \`;
            }).join('');
        }

        function checkQuizAnswer(qId, selectedKey, correctKey, btn) {
            const card = document.getElementById('qcard_' + qId);
            if (!card || card.classList.contains('answered')) return;

            card.classList.add('answered');
            totalAttempted++;

            const allBtns = card.querySelectorAll('.quiz-opt-btn');
            allBtns.forEach(b => b.disabled = true);

            if (selectedKey === correctKey) {
                btn.classList.add('correct');
                totalCorrect++;
            } else {
                btn.classList.add('incorrect');
                // Highlight correct button
                const optLetters = ['A', 'B', 'C', 'D'];
                const correctIdx = optLetters.indexOf(correctKey);
                if (correctIdx !== -1 && allBtns[correctIdx]) {
                    allBtns[correctIdx].classList.add('correct');
                }
            }

            // Reveal Explanation
            const expBox = document.getElementById('exp_' + qId);
            if (expBox) expBox.style.display = 'block';

            // Update Score Display
            const scoreDisp = document.getElementById('quizScoreDisplay');
            if (scoreDisp) scoreDisp.textContent = \`\${totalCorrect} / \${totalAttempted} (\${Math.round((totalCorrect/totalAttempted)*100)}%)\`;
        }

        function filterQuizQuestions(actKey, btn) {
            document.querySelectorAll('.q-filter-btn').forEach(b => b.classList.remove('active'));
            if (btn) btn.classList.add('active');
            renderQuiz(actKey);
        }

        // Initialize Page
        document.addEventListener('DOMContentLoaded', () => {
            // Theme toggle
            const toggle = document.getElementById('themeToggle');
            if (toggle) {
                const isDark = localStorage.getItem('mcqs_dark_mode') === 'true';
                if (isDark) {
                    document.body.classList.add('dark-mode');
                    document.documentElement.classList.add('dark-mode');
                }
                toggle.addEventListener('click', () => {
                    const dark = !document.body.classList.contains('dark-mode');
                    document.body.classList.toggle('dark-mode', dark);
                    document.documentElement.classList.toggle('dark-mode', dark);
                    localStorage.setItem('mcqs_dark_mode', dark);
                });
            }

            // Render Statutory Sections from Data
            if (window.ACTS_RULES_DATA) {
                const amlCont = document.getElementById('amlSectionsContainer');
                if (amlCont && window.ACTS_RULES_DATA.aml_act_2010) {
                    amlCont.innerHTML = renderSectionCards(window.ACTS_RULES_DATA.aml_act_2010.sections);
                }

                const csaCont = document.getElementById('csaSectionsContainer');
                if (csaCont && window.ACTS_RULES_DATA.civil_servants_act_1973) {
                    csaCont.innerHTML = renderSectionCards(window.ACTS_RULES_DATA.civil_servants_act_1973.sections);
                }

                const edCont = document.getElementById('edRulesContainer');
                if (edCont && window.ACTS_RULES_DATA.civil_servants_ed_rules_2020) {
                    edCont.innerHTML = renderRuleCards(window.ACTS_RULES_DATA.civil_servants_ed_rules_2020.rules);
                }

                const aptCont = document.getElementById('aptRulesContainer');
                if (aptCont && window.ACTS_RULES_DATA.civil_servants_apt_rules_1973) {
                    aptCont.innerHTML = renderRuleCards(window.ACTS_RULES_DATA.civil_servants_apt_rules_1973.rules);
                }

                const intlCont = document.getElementById('intlRulesContainer');
                if (intlCont && window.ACTS_RULES_DATA.civil_servants_intl_org_rules_2016) {
                    intlCont.innerHTML = renderRuleCards(window.ACTS_RULES_DATA.civil_servants_intl_org_rules_2016.rules);
                }

                renderQuiz('all');
            }

            // URL Hash navigation support
            if (window.location.hash) {
                const hash = window.location.hash.replace('#', '');
                if (hash === 'aml_act_2010') switchActTab('tab-aml');
                else if (hash === 'civil_servants_act_1973') switchActTab('tab-csa');
                else if (hash === 'civil_servants_ed_rules_2020') switchActTab('tab-ed');
                else if (hash === 'apt_rules_1973') switchActTab('tab-apt');
                else if (hash === 'intl_rules_2016') switchActTab('tab-intl');
                else if (hash === 'quiz') switchActTab('tab-quiz');
            }
        });
    </script>
</body>
</html>
`;

fs.writeFileSync(targetPath, htmlContent, 'utf8');
console.log('Successfully written frontend/acts-rules.html!');
console.log('File size:', fs.statSync(targetPath).size, 'bytes');
