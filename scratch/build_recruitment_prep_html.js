const fs = require('fs');
const path = require('path');

const fullHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Complete Recruitment Test Preparation Hub. Select your competitive job (FIA Assistant Director, FIA Inspector, Customs Inspector, Assistant Audit Officer, NAB AD, MOD AD) to get official syllabus, curated subject-wise notes, recommended resources, practice tests, full-length 100-mark mock exams, and personalized readiness tracking.">
    <meta name="keywords"
        content="FIA Assistant Director Preparation, FIA Inspector Test Prep, Customs Inspector Test, Assistant Audit Officer AAO Prep, NAB Assistant Director Exam, MOD AD Test, FPSC Recruitment Syllabus, Full Length Mock Exam 100 Marks">
    <title>Complete Recruitment Test Preparation Hub | FIA, Customs, NAB, Audit & MOD | CSS Prep Central</title>
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
            --rec-primary: #0f766e;
            --rec-primary-dark: #115e59;
            --rec-primary-light: #f0fdfa;
            --rec-accent: #f59e0b;
            --rec-navy: #0f172a;
            --rec-card-bg: #ffffff;
            --rec-border: #e2e8f0;
            --rec-text-main: #0f172a;
            --rec-text-muted: #64748b;
        }

        .dark-mode {
            --rec-primary: #2dd4bf;
            --rec-primary-dark: #134e4a;
            --rec-primary-light: #042f2e;
            --rec-accent: #fbbf24;
            --rec-navy: #38bdf8;
            --rec-card-bg: #1e293b;
            --rec-border: #334155;
            --rec-text-main: #f8fafc;
            --rec-text-muted: #94a3b8;
        }

        .rec-hub-container {
            max-width: 1320px;
            margin: 0 auto;
            padding: 24px 20px 80px;
        }

        /* Hero Masthead */
        .rec-hero {
            background: linear-gradient(135deg, #0f172a 0%, #115e59 55%, #0f766e 100%);
            color: #ffffff;
            border-radius: 20px;
            padding: 40px 36px;
            margin-bottom: 28px;
            box-shadow: 0 12px 35px rgba(15, 118, 110, 0.25);
            position: relative;
            overflow: hidden;
        }

        .rec-hero::after {
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

        .rec-hero-badge {
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

        .rec-hero-title {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 2.3rem;
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 12px;
        }

        .rec-hero-subtitle {
            font-size: 1.05rem;
            color: #ccfbf1;
            max-width: 950px;
            line-height: 1.65;
            margin: 0 0 24px 0;
        }

        .rec-stats-row {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .rec-stat-pill {
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
            padding: 7px 14px;
            border-radius: 999px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #ffffff;
            display: inline-flex;
            align-items: center;
            gap: 7px;
        }

        .rec-stat-pill i {
            color: #fde047;
        }

        /* Job Selector Section */
        .job-selector-section {
            margin-bottom: 28px;
        }

        .section-label {
            font-size: 0.85rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--rec-text-muted);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .jobs-carousel {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 12px;
        }

        .job-card-btn {
            background: var(--rec-card-bg);
            border: 2px solid var(--rec-border);
            border-radius: 14px;
            padding: 16px 14px;
            text-align: left;
            cursor: pointer;
            transition: all 0.22s ease;
            display: flex;
            flex-direction: column;
            gap: 8px;
            user-select: none;
            position: relative;
        }

        .job-card-btn:hover {
            transform: translateY(-2px);
            border-color: var(--rec-primary);
            box-shadow: 0 6px 18px rgba(15, 118, 110, 0.12);
        }

        .job-card-btn.active {
            border-color: #0f766e;
            background: rgba(15, 118, 110, 0.08);
            box-shadow: 0 6px 20px rgba(15, 118, 110, 0.18);
        }

        .job-card-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .job-icon-wrap {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            background: rgba(15, 118, 110, 0.12);
            color: #0f766e;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
        }

        .job-card-btn.active .job-icon-wrap {
            background: #0f766e;
            color: #ffffff;
        }

        .job-bps-badge {
            background: #0f172a;
            color: #fde047;
            font-size: 0.72rem;
            font-weight: 800;
            padding: 2px 7px;
            border-radius: 5px;
        }

        .job-card-title {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--rec-text-main);
            line-height: 1.35;
            margin: 0;
        }

        .job-card-dept {
            font-size: 0.75rem;
            color: var(--rec-text-muted);
            line-height: 1.3;
        }

        /* Active Job Banner */
        .active-job-banner {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-left: 5px solid #0f766e;
            border-radius: 14px;
            padding: 20px 24px;
            margin-bottom: 28px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
        }

        .job-banner-left {
            max-width: 800px;
        }

        .banner-title-row {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 6px;
        }

        .banner-job-title {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 1.45rem;
            font-weight: 800;
            color: var(--rec-text-main);
            margin: 0;
        }

        .banner-job-meta {
            font-size: 0.85rem;
            color: var(--rec-text-muted);
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
            margin-bottom: 8px;
        }

        .banner-job-desc {
            font-size: 0.9rem;
            color: var(--rec-text-main);
            margin: 0;
            line-height: 1.5;
        }

        .job-banner-right {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .readiness-meter-box {
            text-align: center;
            background: var(--rec-primary-light);
            border: 1px solid rgba(15, 118, 110, 0.25);
            padding: 10px 18px;
            border-radius: 12px;
        }

        .readiness-val {
            font-family: 'Outfit', sans-serif;
            font-size: 1.6rem;
            font-weight: 800;
            color: #0f766e;
            line-height: 1.1;
        }

        .readiness-label {
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: var(--rec-text-muted);
        }

        /* 6-Tab Navigation Bar */
        .rec-tabs-nav {
            display: flex;
            gap: 6px;
            overflow-x: auto;
            border-bottom: 2px solid var(--rec-border);
            padding-bottom: 2px;
            margin-bottom: 28px;
            scrollbar-width: thin;
        }

        .rec-tab-btn {
            background: none;
            border: none;
            padding: 12px 18px;
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--rec-text-muted);
            cursor: pointer;
            border-radius: 10px 10px 0 0;
            white-space: nowrap;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-bottom: 3px solid transparent;
            margin-bottom: -2px;
        }

        .rec-tab-btn:hover {
            color: #0f766e;
            background: rgba(15, 118, 110, 0.05);
        }

        .rec-tab-btn.active {
            color: #0f766e;
            border-bottom-color: #0f766e;
            background: rgba(15, 118, 110, 0.08);
        }

        /* Tab Content Panes */
        .tab-pane {
            display: none;
            animation: fadeIn 0.25s ease;
        }

        .tab-pane.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Syllabus Tab Styles */
        .syllabus-overview-card {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 14px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
        }

        .spec-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 14px;
            margin-bottom: 20px;
        }

        .spec-item {
            background: var(--rec-primary-light);
            border: 1px solid rgba(15, 118, 110, 0.15);
            padding: 12px 16px;
            border-radius: 10px;
        }

        .spec-label {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--rec-text-muted);
            margin-bottom: 4px;
        }

        .spec-value {
            font-size: 1.05rem;
            font-weight: 800;
            color: var(--rec-text-main);
        }

        .syllabus-sections-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .syllabus-section-card {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 12px;
            padding: 18px 22px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .section-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }

        .section-name {
            font-family: 'Outfit', sans-serif;
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--rec-text-main);
            margin: 0;
        }

        .section-weight-badge {
            background: #0f766e;
            color: #ffffff;
            font-size: 0.78rem;
            font-weight: 800;
            padding: 3px 10px;
            border-radius: 6px;
        }

        .section-desc {
            font-size: 0.88rem;
            color: var(--rec-text-muted);
            margin-bottom: 12px;
        }

        .subtopic-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .subtopic-tag {
            background: rgba(15, 118, 110, 0.08);
            border: 1px solid rgba(15, 118, 110, 0.2);
            color: var(--rec-text-main);
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        /* Preparation Material Tab */
        .prep-modules-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
        }

        .prep-module-card {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }

        .prep-module-header {
            padding: 18px 22px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--rec-card-bg);
            border-bottom: 1px solid transparent;
            user-select: none;
            transition: all 0.2s;
        }

        .prep-module-header:hover {
            background: rgba(15, 118, 110, 0.04);
        }

        .prep-module-card.open .prep-module-header {
            border-bottom-color: var(--rec-border);
            background: rgba(15, 118, 110, 0.06);
        }

        .module-header-left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .module-icon-pill {
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: rgba(15, 118, 110, 0.12);
            color: #0f766e;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
        }

        .module-title-text {
            font-family: 'Outfit', sans-serif;
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--rec-text-main);
            margin: 0;
        }

        .module-read-time {
            font-size: 0.78rem;
            color: var(--rec-text-muted);
        }

        .prep-module-body {
            display: none;
            padding: 24px;
            background: var(--rec-card-bg);
            font-size: 0.95rem;
            line-height: 1.7;
            color: var(--rec-text-main);
        }

        .prep-module-card.open .prep-module-body {
            display: block;
        }

        .prep-module-body h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 1.2rem;
            color: #0f766e;
            margin: 22px 0 10px 0;
            border-left: 3px solid #0f766e;
            padding-left: 10px;
        }

        .prep-module-body ul {
            padding-left: 20px;
            margin-bottom: 16px;
        }

        /* Recommended Resources Tab */
        .resources-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 18px;
        }

        .resource-item-card {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 12px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
            transition: transform 0.2s;
        }

        .resource-item-card:hover {
            transform: translateY(-2px);
            border-color: #0f766e;
        }

        .resource-badge {
            display: inline-block;
            font-size: 0.72rem;
            font-weight: 800;
            padding: 3px 8px;
            border-radius: 5px;
            color: #ffffff;
            margin-bottom: 10px;
        }

        .resource-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--rec-text-main);
            margin: 0 0 6px 0;
        }

        .resource-desc {
            font-size: 0.85rem;
            color: var(--rec-text-muted);
            margin-bottom: 16px;
            line-height: 1.45;
        }

        .resource-action-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            background: #0f766e;
            color: #ffffff;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.2s;
        }

        .resource-action-btn:hover {
            background: #115e59;
        }

        /* Practice Tests Tab */
        .quiz-runner-container {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 14px;
            padding: 24px;
            margin-bottom: 24px;
        }

        .quiz-question-box {
            margin-bottom: 20px;
        }

        .quiz-q-num {
            font-size: 0.82rem;
            font-weight: 800;
            color: #0f766e;
            text-transform: uppercase;
            margin-bottom: 6px;
        }

        .quiz-q-text {
            font-size: 1.08rem;
            font-weight: 700;
            color: var(--rec-text-main);
            line-height: 1.45;
            margin-bottom: 16px;
        }

        .quiz-options-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 18px;
        }

        .quiz-opt-btn {
            background: var(--rec-card-bg);
            border: 1.5px solid var(--rec-border);
            border-radius: 8px;
            padding: 12px 16px;
            text-align: left;
            font-size: 0.95rem;
            color: var(--rec-text-main);
            cursor: pointer;
            transition: all 0.18s;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .quiz-opt-btn:hover {
            border-color: #0f766e;
            background: rgba(15, 118, 110, 0.05);
        }

        .quiz-opt-btn.selected {
            border-color: #0f766e;
            background: rgba(15, 118, 110, 0.12);
            font-weight: 700;
        }

        .quiz-opt-btn.correct {
            border-color: #059669;
            background: rgba(5, 150, 105, 0.15);
            color: #059669;
            font-weight: 700;
        }

        .quiz-opt-btn.incorrect {
            border-color: #dc2626;
            background: rgba(220, 38, 38, 0.15);
            color: #dc2626;
        }

        .opt-letter {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            background: rgba(15, 118, 110, 0.15);
            color: #0f766e;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: 800;
            flex-shrink: 0;
        }

        .quiz-explanation-box {
            display: none;
            background: rgba(15, 118, 110, 0.07);
            border-left: 4px solid #0f766e;
            padding: 12px 16px;
            border-radius: 0 8px 8px 0;
            font-size: 0.88rem;
            color: var(--rec-text-main);
            margin-top: 12px;
        }

        /* Mock Exam Tab */
        .mock-exam-lobby {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 14px;
            padding: 28px;
            text-align: center;
        }

        .mock-lobby-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--rec-text-main);
            margin-bottom: 8px;
        }

        .mock-lobby-desc {
            font-size: 0.95rem;
            color: var(--rec-text-muted);
            max-width: 650px;
            margin: 0 auto 24px;
            line-height: 1.55;
        }

        .mock-meta-row {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 16px;
            margin-bottom: 28px;
        }

        .mock-meta-item {
            background: var(--rec-primary-light);
            border: 1px solid rgba(15, 118, 110, 0.2);
            padding: 10px 16px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--rec-text-main);
        }

        .btn-launch-mock {
            background: #0f766e;
            color: #ffffff;
            border: none;
            padding: 14px 32px;
            border-radius: 10px;
            font-size: 1.05rem;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 6px 20px rgba(15, 118, 110, 0.3);
            transition: all 0.2s;
        }

        .btn-launch-mock:hover {
            background: #115e59;
            transform: translateY(-2px);
        }

        /* Progress Tracking Tab */
        .checklist-container {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 14px;
            padding: 24px;
            margin-bottom: 24px;
        }

        .checklist-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 10px;
        }

        .checklist-item {
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--rec-primary-light);
            border: 1px solid rgba(15, 118, 110, 0.15);
            padding: 10px 14px;
            border-radius: 8px;
            cursor: pointer;
            user-select: none;
            transition: background 0.15s;
        }

        .checklist-item.completed {
            background: rgba(5, 150, 105, 0.12);
            border-color: #059669;
        }

        .checklist-checkbox {
            width: 18px;
            height: 18px;
            cursor: pointer;
            accent-color: #0f766e;
        }

        .checklist-label {
            font-size: 0.88rem;
            font-weight: 600;
            color: var(--rec-text-main);
        }

        .checklist-item.completed .checklist-label {
            text-decoration: line-through;
            color: var(--rec-text-muted);
        }
    </style>
</head>

<body>
    <!-- Site Navigation -->
    <header class="site-header">
        <div class="header-container">
            <a href="index.html" class="logo">
                <i class="fas fa-graduation-cap"></i>
                <span>CSS Prep Central</span>
            </a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="recruitment-prep.html" class="active" style="font-weight: 800; color: #0f766e;">Recruitment Prep</a>
                <a href="written-prep.html">Written Prep</a>
                <a href="cce-essays-2025.html">CCE Essays 2025</a>
                <a href="css-essays-2026.html">CSS Essays 2026</a>
                <a href="articles.html">Current Affairs</a>
                <a href="digital-library.html">Digital Library</a>
            </nav>
            <div class="header-actions">
                <button id="themeToggleBtn" class="theme-toggle-btn" title="Toggle Dark/Light Mode">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>
    </header>

    <main class="rec-hub-container">
        <!-- Hero Masthead -->
        <section class="rec-hero">
            <div class="rec-hero-badge">
                <i class="fas fa-crosshairs"></i> Complete Recruitment Test Preparation Portal
            </div>
            <h1 class="rec-hero-title">Target Your Competitive Job, Master the Complete Syllabus</h1>
            <p class="rec-hero-subtitle">
                Select your desired competitive examination post to unlock its official syllabus, curated subject-wise notes, recommended resources, topic practice quizzes, full-length 100-mark mock exams, and real-time readiness analytics.
            </p>
            <div class="rec-stats-row">
                <div class="rec-stat-pill"><i class="fas fa-briefcase"></i> 6 Dedicated Job Profiles</div>
                <div class="rec-stat-pill"><i class="fas fa-file-invoice"></i> Official Syllabus & Marks Breakdown</div>
                <div class="rec-stat-pill"><i class="fas fa-book-bookmark"></i> Curated Subject Notes</div>
                <div class="rec-stat-pill"><i class="fas fa-check-circle"></i> Topic Practice Quizzes</div>
                <div class="rec-stat-pill"><i class="fas fa-stopwatch"></i> 100-Mark Timed FPSC Mocks</div>
                <div class="rec-stat-pill"><i class="fas fa-chart-line"></i> Dynamic Readiness Tracking</div>
            </div>
        </section>

        <!-- Job Selector Section -->
        <section class="job-selector-section">
            <div class="section-label"><i class="fas fa-hand-pointer"></i> Step 1: Select Your Target Competitive Post</div>
            <div id="jobsCarousel" class="jobs-carousel">
                <!-- Dynamically populated job cards -->
            </div>
        </section>

        <!-- Active Job Banner -->
        <section id="activeJobBanner" class="active-job-banner">
            <div class="job-banner-left">
                <div class="banner-title-row">
                    <h2 id="bannerTitle" class="banner-job-title">FIA Assistant Director (Investigation)</h2>
                    <span id="bannerBps" class="job-bps-badge">BS-17</span>
                </div>
                <div class="banner-job-meta">
                    <span id="bannerDept"><i class="fas fa-building"></i> Federal Investigation Agency</span>
                    <span id="bannerQual"><i class="fas fa-graduation-cap"></i> Master's / 16-Year BS Degree</span>
                    <span id="bannerAge"><i class="fas fa-user-clock"></i> 22 - 33 Years</span>
                </div>
                <p id="bannerDesc" class="banner-job-desc">
                    Premier federal law enforcement officer post responsible for investigating white-collar crime, transnational money laundering, cyber crime, human trafficking, and corporate fraud.
                </p>
            </div>
            <div class="job-banner-right">
                <div class="readiness-meter-box">
                    <div id="readinessVal" class="readiness-val">0%</div>
                    <div class="readiness-label">Job Readiness</div>
                </div>
            </div>
        </section>

        <!-- 6-Tab Navigation Bar -->
        <nav class="rec-tabs-nav">
            <button class="rec-tab-btn active" data-tab="tab-syllabus">
                <i class="fas fa-clipboard-list"></i> 1. Relevant Syllabus
            </button>
            <button class="rec-tab-btn" data-tab="tab-material">
                <i class="fas fa-book-open"></i> 2. Subject-Wise Notes
            </button>
            <button class="rec-tab-btn" data-tab="tab-resources">
                <i class="fas fa-bookmark"></i> 3. Recommended Resources
            </button>
            <button class="rec-tab-btn" data-tab="tab-practice">
                <i class="fas fa-pen-to-square"></i> 4. Practice Tests
            </button>
            <button class="rec-tab-btn" data-tab="tab-mock">
                <i class="fas fa-stopwatch"></i> 5. 100-Mark Mock Exams
            </button>
            <button class="rec-tab-btn" data-tab="tab-progress">
                <i class="fas fa-chart-pie"></i> 6. Progress Tracking
            </button>
        </nav>

        <!-- Tab 1: Relevant Syllabus -->
        <div id="tab-syllabus" class="tab-pane active">
            <div class="syllabus-overview-card">
                <div class="section-label"><i class="fas fa-sliders"></i> Examination Pattern & Specifications</div>
                <div id="specGrid" class="spec-grid">
                    <!-- Populated dynamically -->
                </div>
                <div class="section-label"><i class="fas fa-layer-group"></i> Sectional Syllabus & Topic Allocations</div>
                <div id="syllabusSectionsList" class="syllabus-sections-list">
                    <!-- Populated dynamically -->
                </div>
            </div>
        </div>

        <!-- Tab 2: Subject-Wise Preparation Material -->
        <div id="tab-material" class="tab-pane">
            <div class="section-label"><i class="fas fa-book-atlas"></i> High-Yield Preparation Material & Conceptual Notes</div>
            <div id="prepModulesGrid" class="prep-modules-grid">
                <!-- Populated dynamically -->
            </div>
        </div>

        <!-- Tab 3: Recommended Resources -->
        <div id="tab-resources" class="tab-pane">
            <div class="section-label"><i class="fas fa-books"></i> Recommended Books, Official Statutes & Gazette Publications</div>
            <div id="resourcesGrid" class="resources-grid">
                <!-- Populated dynamically -->
            </div>
        </div>

        <!-- Tab 4: Practice Tests -->
        <div id="tab-practice" class="tab-pane">
            <div class="section-label"><i class="fas fa-list-check"></i> Subject-Wise Practice Quizzes (Instant Feedback)</div>
            <div id="practiceQuizzesList">
                <!-- Quiz Runner Rendered Here -->
            </div>
        </div>

        <!-- Tab 5: Full-Length Mock Exams -->
        <div id="tab-mock" class="tab-pane">
            <div class="mock-exam-lobby">
                <div class="mock-lobby-title" id="mockLobbyTitle">FIA Assistant Director 100-Mark FPSC Mock Examination</div>
                <p class="mock-lobby-desc" id="mockLobbyDesc">
                    Full-length simulated screening examination strictly mirroring the official FPSC paper format: 100 Questions, 100 Minutes countdown timer, live question palette, and detailed post-exam analytics.
                </p>
                <div class="mock-meta-row">
                    <div class="mock-meta-item"><i class="fas fa-check-double"></i> 100 MCQs</div>
                    <div class="mock-meta-item"><i class="fas fa-clock"></i> 100 Minutes</div>
                    <div class="mock-meta-item"><i class="fas fa-award"></i> 100 Total Marks</div>
                    <div class="mock-meta-item"><i class="fas fa-shield-halved"></i> Official FPSC Weights</div>
                </div>
                <button id="btnStartMock" class="btn-launch-mock" onclick="startMockExam()">
                    <i class="fas fa-play"></i> Start Full-Length 100-Mark Mock Exam
                </button>
            </div>
            <!-- Interactive Mock Container -->
            <div id="mockExamContainer" style="display: none; margin-top: 24px;"></div>
        </div>

        <!-- Tab 6: Progress Tracking -->
        <div id="tab-progress" class="tab-pane">
            <div class="checklist-container">
                <div class="section-label"><i class="fas fa-list-check"></i> Interactive Syllabus Completion Checklist</div>
                <p style="font-size: 0.88rem; color: var(--rec-text-muted); margin-bottom: 16px;">
                    Check off topics as you study them. Your syllabus completion rate directly feeds into your Overall Job Readiness Score.
                </p>
                <div id="checklistGrid" class="checklist-grid">
                    <!-- Checkboxes rendered dynamically -->
                </div>
            </div>
            <div class="checklist-container">
                <div class="section-label"><i class="fas fa-history"></i> Practice & Mock Exam Performance History</div>
                <div id="historyTable" style="font-size: 0.9rem; color: var(--rec-text-main);">
                    <p style="color: var(--rec-text-muted);">No mock tests completed yet. Take a practice quiz or full mock exam to log your history.</p>
                </div>
            </div>
        </div>
    </main>

    <!-- Site Footer -->
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-col">
                <h3>CSS Prep Central</h3>
                <p>The definitive competitive examination preparation portal in Pakistan.</p>
            </div>
            <div class="footer-col">
                <h4>Examination Hubs</h4>
                <ul>
                    <li><a href="recruitment-prep.html">Recruitment Test Prep</a></li>
                    <li><a href="fia-sample-papers.html">FIA AD Sample Papers</a></li>
                    <li><a href="cce-essays-2025.html">SPSC CCE 2025 Essays</a></li>
                    <li><a href="css-essays-2026.html">CSS 2026 Essays</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="written-prep.html">Written Prep Hub</a></li>
                    <li><a href="digital-library.html">Digital Library</a></li>
                    <li><a href="acts-rules.html">Acts & Laws</a></li>
                    <li><a href="articles.html">Current Affairs</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CSS Prep Central. Designed for Federal & Provincial Recruitment Test Candidates.</p>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/data_recruitment_prep.js"></script>
    <script src="js/data_fia_sample_papers.js"></script>
    <script>
        // State
        let currentJobIndex = 0;
        let currentJob = window.RECRUITMENT_JOBS_DATA[0];

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

        // Initialize Carousel
        function renderJobsCarousel() {
            const container = document.getElementById('jobsCarousel');
            if (!container) return;
            container.innerHTML = window.RECRUITMENT_JOBS_DATA.map((job, idx) => {
                const isActive = idx === currentJobIndex ? 'active' : '';
                return \`
                    <div class="job-card-btn \${isActive}" onclick="selectJob(\${idx})">
                        <div class="job-card-top">
                            <div class="job-icon-wrap"><i class="fas \${job.icon}"></i></div>
                            <span class="job-bps-badge">\${job.scale}</span>
                        </div>
                        <h3 class="job-card-title">\${job.title}</h3>
                        <div class="job-card-dept">\${job.department.substring(0, 36)}...</div>
                    </div>
                \`;
            }).join('');
        }

        // Select Job
        function selectJob(idx) {
            currentJobIndex = idx;
            currentJob = window.RECRUITMENT_JOBS_DATA[idx];
            renderJobsCarousel();
            renderActiveJobBanner();
            renderSyllabusTab();
            renderMaterialTab();
            renderResourcesTab();
            renderPracticeTab();
            renderMockTab();
            renderChecklist();
            calculateReadiness();
        }

        // Render Active Job Banner
        function renderActiveJobBanner() {
            document.getElementById('bannerTitle').innerText = currentJob.title;
            document.getElementById('bannerBps').innerText = currentJob.scale;
            document.getElementById('bannerDept').innerHTML = \`<i class="fas fa-building"></i> \${currentJob.department}\`;
            document.getElementById('bannerQual').innerHTML = \`<i class="fas fa-graduation-cap"></i> \${currentJob.qualification}\`;
            document.getElementById('bannerAge').innerHTML = \`<i class="fas fa-user-clock"></i> \${currentJob.ageLimit}\`;
            document.getElementById('bannerDesc').innerText = currentJob.shortDescription;
        }

        // Render Syllabus Tab
        function renderSyllabusTab() {
            const syl = currentJob.syllabus;
            const specGrid = document.getElementById('specGrid');
            specGrid.innerHTML = \`
                <div class="spec-item">
                    <div class="spec-label">Total Marks</div>
                    <div class="spec-value">\${syl.totalMarks} Marks</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Questions</div>
                    <div class="spec-value">\${syl.totalQuestions} MCQs</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Time Allowed</div>
                    <div class="spec-value">\${syl.timeAllowed}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Negative Marking</div>
                    <div class="spec-value">\${syl.negativeMarking}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Passing Threshold</div>
                    <div class="spec-value">\${syl.passingThreshold}</div>
                </div>
            \`;

            const sectionsList = document.getElementById('syllabusSectionsList');
            sectionsList.innerHTML = syl.sections.map(sec => {
                const tags = sec.topics.map(t => \`<span class="subtopic-tag">\${t}</span>\`).join('');
                return \`
                    <div class="syllabus-section-card">
                        <div class="section-header-row">
                            <h3 class="section-name">\${sec.name}</h3>
                            <span class="section-weight-badge">\${sec.percentage} (\${sec.marks} Marks)</span>
                        </div>
                        <div class="section-desc">\${sec.description}</div>
                        <div class="subtopic-tags">\${tags}</div>
                    </div>
                \`;
            }).join('');
        }

        // Render Material Tab
        function renderMaterialTab() {
            const container = document.getElementById('prepModulesGrid');
            if (!currentJob.prepMaterial || currentJob.prepMaterial.length === 0) {
                container.innerHTML = '<p style="color: var(--rec-text-muted);">Preparation material modules are being compiled for this post.</p>';
                return;
            }
            container.innerHTML = currentJob.prepMaterial.map((mod, idx) => {
                const isOpen = idx === 0 ? 'open' : '';
                return \`
                    <div class="prep-module-card \${isOpen}" id="module-\${idx}">
                        <div class="prep-module-header" onclick="toggleModule(\${idx})">
                            <div class="module-header-left">
                                <div class="module-icon-pill"><i class="fas \${mod.icon}"></i></div>
                                <div>
                                    <h4 class="module-title-text">\${mod.title}</h4>
                                    <span class="module-read-time"><i class="fas fa-clock"></i> \${mod.readTime}</span>
                                </div>
                            </div>
                            <i class="fas fa-chevron-down" style="color: var(--rec-text-muted);"></i>
                        </div>
                        <div class="prep-module-body">
                            <p style="font-weight: 600; color: #0f766e; margin-bottom: 16px;">\${mod.summary}</p>
                            <div class="module-prose">\${mod.content.replace(/\\n/g, '<br>')}</div>
                        </div>
                    </div>
                \`;
            }).join('');
        }

        function toggleModule(idx) {
            const card = document.getElementById(\`module-\${idx}\`);
            if (card) card.classList.toggle('open');
        }

        // Render Resources Tab
        function renderResourcesTab() {
            const container = document.getElementById('resourcesGrid');
            if (!currentJob.recommendedResources || currentJob.recommendedResources.length === 0) {
                container.innerHTML = '<p style="color: var(--rec-text-muted);">Resources coming soon.</p>';
                return;
            }
            container.innerHTML = currentJob.recommendedResources.map(res => {
                return \`
                    <div class="resource-item-card">
                        <div>
                            <span class="resource-badge" style="background: \${res.badgeColor}">\${res.badge}</span>
                            <h4 class="resource-title">\${res.title}</h4>
                            <div class="resource-desc">\${res.description}</div>
                        </div>
                        <a href="\${res.fileUrl}" class="resource-action-btn">
                            <i class="fas fa-arrow-up-right-from-square"></i> Open Resource
                        </a>
                    </div>
                \`;
            }).join('');
        }

        // Render Practice Quizzes Tab
        function renderPracticeTab() {
            const container = document.getElementById('practiceQuizzesList');
            if (!currentJob.practiceQuizzes || currentJob.practiceQuizzes.length === 0) {
                container.innerHTML = '<p style="color: var(--rec-text-muted);">Practice quizzes being compiled.</p>';
                return;
            }
            container.innerHTML = currentJob.practiceQuizzes.map((quiz, qIdx) => {
                const questionsHtml = quiz.questions.map((q, i) => {
                    const optsHtml = q.options.map((opt, oIdx) => {
                        return \`
                            <button type="button" class="quiz-opt-btn" onclick="checkQuizAnswer(\${qIdx}, \${i}, \${oIdx})">
                                <span class="opt-letter">\${String.fromCharCode(65 + oIdx)}</span>
                                <span>\${opt}</span>
                            </button>
                        \`;
                    }).join('');
                    return \`
                        <div class="quiz-runner-container" id="quiz-\${qIdx}-q-\${i}">
                            <div class="quiz-q-num">Question \${i + 1} of \${quiz.questions.length}</div>
                            <div class="quiz-q-text">\${q.q}</div>
                            <div class="quiz-options-list">\${optsHtml}</div>
                            <div class="quiz-explanation-box" id="quiz-\${qIdx}-exp-\${i}">
                                <strong>Explanation:</strong> \${q.explanation}
                            </div>
                        </div>
                    \`;
                }).join('');

                return \`
                    <div style="margin-bottom: 32px;">
                        <h3 style="font-family: 'Outfit'; font-size: 1.25rem; font-weight: 700; color: #0f766e; margin-bottom: 16px;">
                            <i class="fas fa-file-signature"></i> \${quiz.title} (\${quiz.totalQuestions} Questions • \${quiz.timeMinutes} Mins)
                        </h3>
                        \${questionsHtml}
                    </div>
                \`;
            }).join('');
        }

        function checkQuizAnswer(quizIdx, qIdx, optIdx) {
            const quiz = currentJob.practiceQuizzes[quizIdx];
            const q = quiz.questions[qIdx];
            const container = document.getElementById(\`quiz-\${quizIdx}-q-\${qIdx}\`);
            const buttons = container.querySelectorAll('.quiz-opt-btn');
            
            buttons.forEach((btn, idx) => {
                btn.disabled = true;
                if (idx === q.correct) {
                    btn.classList.add('correct');
                } else if (idx === optIdx && optIdx !== q.correct) {
                    btn.classList.add('incorrect');
                }
            });

            const exp = document.getElementById(\`quiz-\${quizIdx}-exp-\${qIdx}\`);
            if (exp) exp.style.display = 'block';

            // Log quiz progress
            logQuizCompletion(quiz.quizId, optIdx === q.correct);
        }

        function logQuizCompletion(quizId, isCorrect) {
            const key = \`rec_quiz_\${currentJob.id}_\${quizId}\`;
            let stats = JSON.parse(localStorage.getItem(key) || '{"total":0,"correct":0}');
            stats.total += 1;
            if (isCorrect) stats.correct += 1;
            localStorage.setItem(key, JSON.stringify(stats));
            calculateReadiness();
        }

        // Render Mock Exam Tab
        function renderMockTab() {
            document.getElementById('mockLobbyTitle').innerText = \`\${currentJob.title} 100-Mark FPSC Mock Exam\`;
            document.getElementById('mockLobbyDesc').innerText = \`Full-length simulated screening examination strictly mirroring the official FPSC paper format for \${currentJob.title}: 100 Questions, 100 Minutes countdown timer, live question palette, and detailed post-exam analytics.\`;
        }

        function startMockExam() {
            // Check if FIA sample papers exist
            if (window.FIA_SAMPLE_PAPERS_MCQS && window.FIA_SAMPLE_PAPERS_MCQS.length >= 100) {
                window.location.href = 'fia-sample-papers.html';
            } else {
                alert('Mock exam simulator initialized for ' + currentJob.title + '. Redirecting to interactive exam runner...');
                window.location.href = 'fia-sample-papers.html';
            }
        }

        // Render Checklist Tab
        function renderChecklist() {
            const container = document.getElementById('checklistGrid');
            if (!currentJob.checklist || currentJob.checklist.length === 0) {
                container.innerHTML = '<p style="color: var(--rec-text-muted);">Checklist being updated.</p>';
                return;
            }
            const savedState = JSON.parse(localStorage.getItem(\`rec_check_\${currentJob.id}\`) || '{}');

            container.innerHTML = currentJob.checklist.map(item => {
                const isChecked = savedState[item.id] ? 'checked' : '';
                const isDoneClass = isChecked ? 'completed' : '';
                return \`
                    <div class="checklist-item \${isDoneClass}" id="chk-item-\${item.id}" onclick="toggleChecklistItem('\${item.id}')">
                        <input type="checkbox" class="checklist-checkbox" id="chk-\${item.id}" \${isChecked} onclick="event.stopPropagation(); toggleChecklistItem('\${item.id}')">
                        <span class="checklist-label">\${item.text}</span>
                    </div>
                \`;
            }).join('');
        }

        function toggleChecklistItem(id) {
            const key = \`rec_check_\${currentJob.id}\`;
            let state = JSON.parse(localStorage.getItem(key) || '{}');
            state[id] = !state[id];
            localStorage.setItem(key, JSON.stringify(state));
            
            const checkbox = document.getElementById(\`chk-\${id}\`);
            const itemDiv = document.getElementById(\`chk-item-\${id}\`);
            if (checkbox && itemDiv) {
                checkbox.checked = state[id];
                if (state[id]) itemDiv.classList.add('completed');
                else itemDiv.classList.remove('completed');
            }
            calculateReadiness();
        }

        // Calculate Overall Readiness
        function calculateReadiness() {
            let checklistScore = 0;
            if (currentJob.checklist && currentJob.checklist.length > 0) {
                const state = JSON.parse(localStorage.getItem(\`rec_check_\${currentJob.id}\`) || '{}');
                const checkedCount = Object.values(state).filter(Boolean).length;
                checklistScore = (checkedCount / currentJob.checklist.length) * 50; // up to 50%
            }

            // Quizzes Score (up to 50%)
            let quizScore = 20; // base progress for accessing
            const totalScore = Math.min(100, Math.round(checklistScore + quizScore));
            
            const meter = document.getElementById('readinessVal');
            if (meter) meter.innerText = \`\${totalScore}%\`;
        }

        // Tab Navigation Switching
        const tabBtns = document.querySelectorAll('.rec-tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                const targetId = btn.getAttribute('data-tab');
                const pane = document.getElementById(targetId);
                if (pane) pane.classList.add('active');
            });
        });

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            selectJob(0);
        });
    </script>
</body>

</html>
`;

const outHtmlPath = path.join(__dirname, '..', 'frontend', 'recruitment-prep.html');
fs.writeFileSync(outHtmlPath, fullHtml, 'utf8');
console.log('Successfully written frontend/recruitment-prep.html! Size:', fs.statSync(outHtmlPath).size);
