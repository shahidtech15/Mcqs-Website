const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World History Timeline | Major Events from Ancient Civilizations to the Present</title>
    <meta name="description"
        content="Interactive World History Timeline covering watershed events from ancient civilizations to 2026. Filter by wars, revolutions, treaties, discoveries, and political developments for CSS, PMS, and UPSC.">
    <link rel="canonical" href="https://cssprepcentral.com/world-history-timeline.html" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <style>
        :root {
            --tl-bg: #f8fafc;
            --tl-card-bg: #ffffff;
            --tl-card-sub: #f1f5f9;
            --tl-border: #e2e8f0;
            --tl-text-main: #0f172a;
            --tl-text-muted: #64748b;
            --tl-primary: #4f46e5;
            --tl-primary-dark: #3730a3;
            --tl-primary-light: rgba(79, 70, 229, 0.1);
            --tl-spine: #cbd5e1;
            
            /* Category Colors */
            --cat-wars: #ef4444;
            --cat-wars-bg: rgba(239, 68, 68, 0.1);
            --cat-rev: #f59e0b;
            --cat-rev-bg: rgba(245, 158, 11, 0.12);
            --cat-treaty: #10b981;
            --cat-treaty-bg: rgba(16, 185, 129, 0.12);
            --cat-disc: #0ea5e9;
            --cat-disc-bg: rgba(14, 165, 233, 0.12);
            --cat-pol: #8b5cf6;
            --cat-pol-bg: rgba(139, 92, 246, 0.12);

            --tl-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            --tl-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
        }

        .dark-mode {
            --tl-bg: #0b1120;
            --tl-card-bg: #131c31;
            --tl-card-sub: #1e293b;
            --tl-border: #1e293b;
            --tl-text-main: #f8fafc;
            --tl-text-muted: #94a3b8;
            --tl-primary: #818cf8;
            --tl-primary-dark: #6366f1;
            --tl-primary-light: rgba(129, 140, 248, 0.15);
            --tl-spine: #334155;

            --cat-wars: #f87171;
            --cat-wars-bg: rgba(248, 113, 113, 0.15);
            --cat-rev: #fbbf24;
            --cat-rev-bg: rgba(251, 191, 36, 0.18);
            --cat-treaty: #34d399;
            --cat-treaty-bg: rgba(52, 211, 153, 0.18);
            --cat-disc: #38bdf8;
            --cat-disc-bg: rgba(56, 189, 248, 0.18);
            --cat-pol: #a78bfa;
            --cat-pol-bg: rgba(167, 139, 250, 0.18);

            --tl-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
            --tl-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--tl-bg);
            color: var(--tl-text-main);
            line-height: 1.5;
            transition: background-color 0.3s ease, color 0.3s ease;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* Top Switcher Bar */
        .site-switcher-bar {
            background: #090d16;
            border-bottom: 1px solid #1e293b;
            padding: 7px 16px;
            font-size: 0.8rem;
            overflow-x: auto;
            white-space: nowrap;
        }

        .switcher-inner {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .switcher-label {
            color: #64748b;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.7rem;
            letter-spacing: 0.05em;
        }

        .switcher-btn {
            color: #94a3b8;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 9px;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.2s;
        }

        .switcher-btn:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.05);
        }

        .switcher-btn.active {
            color: #818cf8;
            background: rgba(129, 140, 248, 0.15);
            font-weight: 700;
        }

        /* Header Navigation */
        .site-header {
            background: var(--tl-card-bg);
            border-bottom: 1px solid var(--tl-border);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: var(--tl-text-main);
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 1.25rem;
        }

        .logo i {
            color: var(--tl-primary);
        }

        .nav-links {
            display: flex;
            gap: 16px;
            align-items: center;
            overflow-x: auto;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--tl-text-muted);
            font-weight: 600;
            font-size: 0.88rem;
            transition: color 0.2s;
            white-space: nowrap;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--tl-primary);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .theme-toggle-btn {
            background: var(--tl-bg);
            border: 1px solid var(--tl-border);
            color: var(--tl-text-main);
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
        }

        .theme-toggle-btn:hover {
            border-color: var(--tl-primary);
            color: var(--tl-primary);
        }

        /* Hero Banner */
        .hero-banner {
            background: linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(99, 102, 241, 0.02) 100%);
            border-bottom: 1px solid var(--tl-border);
            padding: 32px 20px 24px;
        }

        .hero-inner {
            max-width: 1400px;
            margin: 0 auto;
        }

        .hero-title-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            flex-wrap: wrap;
            margin-bottom: 16px;
        }

        .hero-title-area h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 2.1rem;
            font-weight: 800;
            letter-spacing: -0.02em;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .hero-title-area h1 i {
            color: var(--tl-primary);
        }

        .hero-title-area p {
            color: var(--tl-text-muted);
            font-size: 0.98rem;
            max-width: 840px;
            line-height: 1.6;
        }

        .search-container {
            position: relative;
            min-width: 300px;
            flex-grow: 1;
            max-width: 420px;
        }

        .search-input {
            width: 100%;
            background: var(--tl-card-bg);
            border: 1.5px solid var(--tl-border);
            padding: 10px 16px 10px 42px;
            border-radius: 12px;
            font-size: 0.9rem;
            color: var(--tl-text-main);
            outline: none;
            transition: all 0.2s ease;
        }

        .search-input:focus {
            border-color: var(--tl-primary);
            box-shadow: 0 0 0 3px var(--tl-primary-light);
        }

        .search-icon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--tl-text-muted);
            pointer-events: none;
        }

        .hero-badges-row {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 14px;
        }

        .hero-stat-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--tl-card-bg);
            border: 1px solid var(--tl-border);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--tl-text-muted);
        }

        .hero-stat-badge strong {
            color: var(--tl-text-main);
        }

        .hero-stat-badge i {
            color: var(--tl-primary);
        }

        /* Main Container */
        .main-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 24px 20px 48px;
            width: 100%;
            flex-grow: 1;
        }

        /* Filter Toolbar */
        .timeline-controls-card {
            background: var(--tl-card-bg);
            border: 1px solid var(--tl-border);
            border-radius: 18px;
            padding: 20px 24px;
            margin-bottom: 24px;
            box-shadow: var(--tl-shadow);
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        .category-filter-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
        }

        .category-pills-group {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .cat-pill-btn {
            background: var(--tl-card-sub);
            border: 1.5px solid var(--tl-border);
            padding: 8px 16px;
            border-radius: 12px;
            font-family: 'Outfit', sans-serif;
            font-size: 0.88rem;
            font-weight: 700;
            color: var(--tl-text-muted);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cat-pill-btn:hover {
            color: var(--tl-text-main);
            border-color: var(--tl-primary);
            transform: translateY(-1px);
        }

        .cat-pill-btn.active {
            background: var(--tl-primary);
            color: #ffffff !important;
            border-color: var(--tl-primary);
            box-shadow: 0 4px 12px var(--tl-primary-light);
        }

        .cat-pill-btn.active i {
            color: #ffffff !important;
        }

        .cat-count {
            background: rgba(0, 0, 0, 0.08);
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.75rem;
            font-weight: 800;
        }

        .dark-mode .cat-count {
            background: rgba(255, 255, 255, 0.15);
        }

        /* Era & Sort Filter Row */
        .secondary-controls-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            padding-top: 14px;
            border-top: 1px solid var(--tl-border);
        }

        .filter-select {
            background: var(--tl-card-bg);
            border: 1.5px solid var(--tl-border);
            color: var(--tl-text-main);
            padding: 8px 14px;
            border-radius: 10px;
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            font-size: 0.88rem;
            outline: none;
            cursor: pointer;
            transition: border-color 0.2s;
        }

        .filter-select:focus {
            border-color: var(--tl-primary);
        }

        /* Quick Era Jump Bar */
        .era-jump-bar {
            background: var(--tl-card-bg);
            border: 1px solid var(--tl-border);
            border-radius: 14px;
            padding: 12px 18px;
            margin-bottom: 28px;
            overflow-x: auto;
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .jump-label {
            font-size: 0.78rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--tl-text-muted);
            letter-spacing: 0.04em;
            margin-right: 6px;
        }

        .jump-pill {
            background: var(--tl-card-sub);
            border: 1px solid var(--tl-border);
            color: var(--tl-text-main);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.15s ease;
            white-space: nowrap;
        }

        .jump-pill:hover {
            border-color: var(--tl-primary);
            color: var(--tl-primary);
            background: var(--tl-primary-light);
        }

        /* Visual Timeline Spine Layout */
        .timeline-spine-wrapper {
            position: relative;
            padding: 20px 0 60px;
        }

        .timeline-spine-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 4px;
            background: var(--tl-spine);
            transform: translateX(-50%);
            border-radius: 2px;
        }

        .timeline-card-wrapper {
            position: relative;
            margin-bottom: 36px;
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

        /* Spine Node */
        .spine-node {
            position: absolute;
            top: 22px;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: var(--tl-card-bg);
            border: 3px solid var(--tl-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.05rem;
            color: var(--tl-primary);
            box-shadow: 0 0 0 5px var(--tl-bg), var(--tl-shadow);
            z-index: 10;
            transition: all 0.2s;
        }

        .timeline-card-wrapper.left .spine-node {
            right: -21px;
        }

        .timeline-card-wrapper.right .spine-node {
            left: -21px;
        }

        /* Node Category Coloring */
        .spine-node.wars { border-color: var(--cat-wars); color: var(--cat-wars); }
        .spine-node.revolutions { border-color: var(--cat-rev); color: var(--cat-rev); }
        .spine-node.treaties { border-color: var(--cat-treaty); color: var(--cat-treaty); }
        .spine-node.discoveries { border-color: var(--cat-disc); color: var(--cat-disc); }
        .spine-node.political { border-color: var(--cat-pol); color: var(--cat-pol); }

        /* Timeline Event Card */
        .timeline-event-card {
            background: var(--tl-card-bg);
            border: 1px solid var(--tl-border);
            border-radius: 18px;
            padding: 24px;
            box-shadow: var(--tl-shadow);
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
        }

        .timeline-event-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--tl-shadow-lg);
            border-color: var(--tl-primary);
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
            font-size: 0.95rem;
            font-weight: 800;
            padding: 4px 12px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .event-year-badge.wars { background: var(--cat-wars-bg); color: var(--cat-wars); }
        .event-year-badge.revolutions { background: var(--cat-rev-bg); color: var(--cat-rev); }
        .event-year-badge.treaties { background: var(--cat-treaty-bg); color: var(--cat-treaty); }
        .event-year-badge.discoveries { background: var(--cat-disc-bg); color: var(--cat-disc); }
        .event-year-badge.political { background: var(--cat-pol-bg); color: var(--cat-pol); }

        .category-indicator-pill {
            font-size: 0.75rem;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .category-indicator-pill.wars { background: var(--cat-wars-bg); color: var(--cat-wars); }
        .category-indicator-pill.revolutions { background: var(--cat-rev-bg); color: var(--cat-rev); }
        .category-indicator-pill.treaties { background: var(--cat-treaty-bg); color: var(--cat-treaty); }
        .category-indicator-pill.discoveries { background: var(--cat-disc-bg); color: var(--cat-disc); }
        .category-indicator-pill.political { background: var(--cat-pol-bg); color: var(--cat-pol); }

        .event-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.3rem;
            font-weight: 800;
            margin-bottom: 10px;
            color: var(--tl-text-main);
            line-height: 1.35;
        }

        .event-significance {
            font-size: 0.92rem;
            color: var(--tl-text-muted);
            line-height: 1.6;
            margin-bottom: 16px;
        }

        /* Figures & Syllabus Tags */
        .figures-row {
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 14px;
            font-size: 0.82rem;
        }

        .figure-pill {
            background: var(--tl-card-sub);
            border: 1px solid var(--tl-border);
            padding: 3px 10px;
            border-radius: 6px;
            color: var(--tl-text-main);
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .figure-pill i {
            color: var(--tl-primary);
        }

        /* Causal Outcomes */
        .outcomes-box {
            background: var(--tl-card-sub);
            border-left: 3.5px solid var(--tl-primary);
            padding: 12px 16px;
            border-radius: 0 10px 10px 0;
            margin-bottom: 16px;
        }

        .outcomes-title {
            font-family: 'Outfit', sans-serif;
            font-size: 0.85rem;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--tl-text-main);
            letter-spacing: 0.04em;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .outcomes-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 0.85rem;
            color: var(--tl-text-muted);
            line-height: 1.45;
        }

        .outcomes-list li {
            display: flex;
            align-items: flex-start;
            gap: 8px;
        }

        .outcomes-list li i {
            color: var(--tl-primary);
            font-size: 0.75rem;
            margin-top: 3px;
        }

        /* Embedded Exam Past Paper MCQ */
        .event-mcq-container {
            background: var(--tl-card-bg);
            border: 1px dashed var(--tl-border);
            border-radius: 12px;
            padding: 16px;
            margin-top: 14px;
        }

        .mcq-badge-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 0.78rem;
            font-weight: 800;
            color: var(--tl-primary);
            text-transform: uppercase;
            letter-spacing: 0.04em;
        }

        .mcq-q-text {
            font-weight: 700;
            font-size: 0.92rem;
            color: var(--tl-text-main);
            margin-bottom: 12px;
            line-height: 1.4;
        }

        .mcq-opts-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
        }

        @media (max-width: 640px) {
            .mcq-opts-grid {
                grid-template-columns: 1fr;
            }
        }

        .mcq-opt-btn {
            background: var(--tl-card-sub);
            border: 1px solid var(--tl-border);
            padding: 8px 12px;
            border-radius: 8px;
            text-align: left;
            font-size: 0.84rem;
            font-weight: 600;
            color: var(--tl-text-main);
            cursor: pointer;
            transition: all 0.15s;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .mcq-opt-btn:hover:not(.locked) {
            border-color: var(--tl-primary);
            background: var(--tl-primary-light);
        }

        .mcq-opt-btn.correct {
            background: var(--cat-treaty-bg) !important;
            border-color: var(--cat-treaty) !important;
            color: var(--cat-treaty) !important;
        }

        .mcq-opt-btn.wrong {
            background: var(--cat-wars-bg) !important;
            border-color: var(--cat-wars) !important;
            color: var(--cat-wars) !important;
        }

        .mcq-expl-box {
            display: none;
            margin-top: 10px;
            padding: 10px 14px;
            background: var(--tl-card-sub);
            border-left: 3px solid var(--cat-treaty);
            border-radius: 0 8px 8px 0;
            font-size: 0.82rem;
            color: var(--tl-text-main);
            line-height: 1.45;
        }

        /* Empty State */
        .empty-timeline-msg {
            text-align: center;
            padding: 60px 20px;
            background: var(--tl-card-bg);
            border: 1px dashed var(--tl-border);
            border-radius: 18px;
            color: var(--tl-text-muted);
            font-size: 1rem;
        }

        /* Responsive Single-Column Timeline */
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
            }
        }

        /* Footer */
        .site-footer {
            background: #090d16;
            border-top: 1px solid #1e293b;
            color: #94a3b8;
            padding: 32px 20px;
            font-size: 0.88rem;
            margin-top: auto;
        }

        .footer-inner {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-links {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.2s;
        }

        .footer-links a:hover {
            color: #818cf8;
        }
    </style>
</head>

<body>

    <!-- Academic Top Switcher Bar -->
    <div class="site-switcher-bar">
        <div class="switcher-inner">
            <span class="switcher-label"><i class="fas fa-layer-group"></i> Academic Suites:</span>
            <a href="pakistan-map.html" class="switcher-btn">
                <i class="fas fa-flag"></i> Pakistan Map
            </a>
            <a href="sindh-map.html" class="switcher-btn">
                <i class="fas fa-map-marked-alt"></i> Sindh Map
            </a>
            <a href="international-trade-routes-map.html" class="switcher-btn">
                <i class="fas fa-ship"></i> Trade Routes Map
            </a>
            <a href="geopolitical-hotspots-map.html" class="switcher-btn">
                <i class="fas fa-satellite-dish"></i> Hotspots Map
            </a>
            <a href="physical-geography-map.html" class="switcher-btn">
                <i class="fas fa-mountain-sun"></i> Physical Map
            </a>
            <a href="world-map.html" class="switcher-btn">
                <i class="fas fa-globe"></i> Political World Map
            </a>
            <a href="guess-the-country.html" class="switcher-btn">
                <i class="fas fa-gamepad"></i> Guess Country
            </a>
            <a href="locate-on-map.html" class="switcher-btn">
                <i class="fas fa-crosshairs"></i> Locate on Map
            </a>
            <a href="match-the-following.html" class="switcher-btn">
                <i class="fas fa-puzzle-piece"></i> Match Items
            </a>
            <a href="arrange-chronologically.html" class="switcher-btn">
                <i class="fas fa-arrow-down-1-9"></i> Chronology Quiz
            </a>
            <a href="crossword.html" class="switcher-btn">
                <i class="fas fa-chess-board"></i> Crossword
            </a>
            <a href="word-search.html" class="switcher-btn">
                <i class="fas fa-magnifying-glass"></i> Word Search
            </a>
            <a href="unsc-simulator.html" class="switcher-btn">
                <i class="fas fa-scale-balanced"></i> UNSC Simulator
            </a>
            <a href="international-organizations-explorer.html" class="switcher-btn">
                <i class="fas fa-sitemap"></i> Org Explorer
            </a>
            <a href="world-history-timeline.html" class="switcher-btn active">
                <i class="fas fa-timeline"></i> World Timeline
            </a>
        </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="site-header">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <i class="fas fa-graduation-cap"></i>
                <span>CSS Prep Central</span>
            </a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="world-history-timeline.html" class="active" style="color:var(--tl-primary); font-weight:800;">
                    <i class="fas fa-timeline"></i> World Timeline
                </a>
                <a href="international-organizations-explorer.html"><i class="fas fa-sitemap"></i> Org Explorer</a>
                <a href="unsc-simulator.html"><i class="fas fa-scale-balanced"></i> UNSC Simulator</a>
                <a href="quiz.html">Take a Quiz</a>
                <a href="digital-library.html">Digital Library</a>
            </nav>
            <div class="header-actions">
                <button class="theme-toggle-btn" id="themeToggleBtn" title="Toggle Light/Dark Theme">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Banner -->
    <section class="hero-banner">
        <div class="hero-inner">
            <div class="hero-title-row">
                <div class="hero-title-area">
                    <h1><i class="fas fa-timeline"></i> World History Timeline</h1>
                    <p>Explore major watershed milestones from ancient civilizations (~3500 BCE) to the contemporary era (2026). Dedicated filters for wars, revolutions, treaties, discoveries, and political developments for CSS, PMS & UPSC aspirants.</p>
                </div>
                <div class="search-container">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text" id="timelineSearchInput" class="search-input" placeholder="Search by year, battle, treaty, revolution, leader..." />
                </div>
            </div>
            <div class="hero-badges-row">
                <span class="hero-stat-badge"><i class="fas fa-hourglass-start"></i> <strong>~3500 BCE – 2026 CE</strong> Historical Span</span>
                <span class="hero-stat-badge"><i class="fas fa-flag"></i> <strong>85+</strong> Major Turning Points</span>
                <span class="hero-stat-badge"><i class="fas fa-filter"></i> <strong>5</strong> Categorical Filters (Wars, Rev, Treaties, Disc, Pol)</span>
                <span class="hero-stat-badge"><i class="fas fa-layer-group"></i> <strong>7</strong> Chronological Eras</span>
                <span class="hero-stat-badge"><i class="fas fa-circle-question"></i> <strong>85</strong> Embedded Past Paper MCQs</span>
            </div>
        </div>
    </section>

    <!-- Main Content Area -->
    <main class="main-container">

        <!-- Controls Toolbar -->
        <section class="timeline-controls-card">
            <!-- 5 Requested Categories Filter Bar -->
            <div class="category-filter-row">
                <div style="font-size:0.82rem; font-weight:800; color:var(--tl-text-muted); text-transform:uppercase; letter-spacing:0.04em;">
                    <i class="fas fa-filter"></i> Filter by Event Type:
                </div>
                <div class="category-pills-group">
                    <button type="button" class="cat-pill-btn active" data-category="all">
                        <i class="fas fa-globe"></i> All Milestones <span class="cat-count" id="countAll">85</span>
                    </button>
                    <button type="button" class="cat-pill-btn" data-category="wars">
                        <i class="fas fa-person-rifle" style="color:#ef4444;"></i> Wars &amp; Conflicts <span class="cat-count" id="countWars">0</span>
                    </button>
                    <button type="button" class="cat-pill-btn" data-category="revolutions">
                        <i class="fas fa-bolt-lightning" style="color:#f59e0b;"></i> Revolutions <span class="cat-count" id="countRevolutions">0</span>
                    </button>
                    <button type="button" class="cat-pill-btn" data-category="treaties">
                        <i class="fas fa-file-contract" style="color:#10b981;"></i> Treaties &amp; Pacts <span class="cat-count" id="countTreaties">0</span>
                    </button>
                    <button type="button" class="cat-pill-btn" data-category="discoveries">
                        <i class="fas fa-lightbulb" style="color:#0ea5e9;"></i> Discoveries &amp; Science <span class="cat-count" id="countDiscoveries">0</span>
                    </button>
                    <button type="button" class="cat-pill-btn" data-category="political">
                        <i class="fas fa-landmark" style="color:#8b5cf6;"></i> Political Developments <span class="cat-count" id="countPolitical">0</span>
                    </button>
                </div>
            </div>

            <!-- Era Filter & Chronology Sorting -->
            <div class="secondary-controls-row">
                <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                    <label for="eraSelect" style="font-size:0.85rem; font-weight:700; color:var(--tl-text-muted);">
                        <i class="fas fa-layer-group"></i> Historical Era:
                    </label>
                    <select id="eraSelect" class="filter-select">
                        <option value="all">All Historical Eras (3500 BCE – Present)</option>
                        <option value="ancient">🏛️ Ancient Civilizations &amp; Antiquity (~3500 BCE – 500 CE)</option>
                        <option value="medieval">⚔️ Medieval &amp; Islamic Golden Age (500 – 1450 CE)</option>
                        <option value="early_modern">📜 Renaissance, Reformation &amp; Enlightenment (1450 – 1789 CE)</option>
                        <option value="modern_19th">🏭 The Long 19th Century (1789 – 1914 CE)</option>
                        <option value="world_wars">💣 World Wars &amp; Interwar Order (1914 – 1945 CE)</option>
                        <option value="cold_war">❄️ Cold War &amp; Decolonization (1945 – 1991 CE)</option>
                        <option value="contemporary">🌐 Contemporary &amp; 21st Century (1991 – Present)</option>
                    </select>
                </div>

                <div style="display:flex; align-items:center; gap:10px;">
                    <label for="sortSelect" style="font-size:0.85rem; font-weight:700; color:var(--tl-text-muted);">
                        <i class="fas fa-arrow-down-1-9"></i> Order:
                    </label>
                    <select id="sortSelect" class="filter-select">
                        <option value="asc">Chronological (Oldest First &uarr;)</option>
                        <option value="desc">Reverse Chronological (Newest First &darr;)</option>
                    </select>
                </div>
            </div>
        </section>

        <!-- Quick Era Jump Bar -->
        <div class="era-jump-bar">
            <span class="jump-label"><i class="fas fa-bolt"></i> Quick Teleport:</span>
            <button class="jump-pill" onclick="jumpToYear(-3200)">3200 BCE Sumer</button>
            <button class="jump-pill" onclick="jumpToYear(-1750)">1750 BCE Hammurabi</button>
            <button class="jump-pill" onclick="jumpToYear(-508)">508 BCE Democracy</button>
            <button class="jump-pill" onclick="jumpToYear(622)">622 CE Hijrah</button>
            <button class="jump-pill" onclick="jumpToYear(712)">712 CE Bab-ul-Islam</button>
            <button class="jump-pill" onclick="jumpToYear(1215)">1215 Magna Carta</button>
            <button class="jump-pill" onclick="jumpToYear(1453)">1453 Constantinople</button>
            <button class="jump-pill" onclick="jumpToYear(1648)">1648 Westphalia</button>
            <button class="jump-pill" onclick="jumpToYear(1776)">1776 US Independence</button>
            <button class="jump-pill" onclick="jumpToYear(1789)">1789 French Rev</button>
            <button class="jump-pill" onclick="jumpToYear(1857)">1857 War of Indep</button>
            <button class="jump-pill" onclick="jumpToYear(1914)">1914 WWI</button>
            <button class="jump-pill" onclick="jumpToYear(1917)">1917 Russian Rev</button>
            <button class="jump-pill" onclick="jumpToYear(1945)">1945 United Nations</button>
            <button class="jump-pill" onclick="jumpToYear(1947)">1947 Pakistan</button>
            <button class="jump-pill" onclick="jumpToYear(1989)">1989 Berlin Wall</button>
            <button class="jump-pill" onclick="jumpToYear(1998)">1998 Nuclear Tests</button>
            <button class="jump-pill" onclick="jumpToYear(2024)">2024 SCO &amp; BRICS+</button>
        </div>

        <!-- Timeline Spine & Cards Container -->
        <section class="timeline-spine-wrapper">
            <div class="timeline-spine-line"></div>
            <div id="timelineCardsContainer">
                <!-- Populated dynamically by JS -->
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="footer-inner">
            <div>
                <strong>CSS Prep Central &bull; World History Timeline</strong>
                <p style="font-size:0.8rem; margin-top:4px;">Academic Chronological Repository & Civil Service Examination Revision Engine.</p>
            </div>
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="international-organizations-explorer.html">Org Explorer</a>
                <a href="unsc-simulator.html">UNSC Simulator</a>
                <a href="quiz.html">Quizzes</a>
                <a href="digital-library.html">Library</a>
                <a href="sitemap.xml">Sitemap</a>
            </div>
        </div>
    </footer>

    <!-- World History Dataset -->
    <script src="js/data_world_history_timeline.js"></script>

    <!-- Application Script -->
    <script>
        // Web Audio Synthesizer for Interactive Feedback
        let audioCtx = null;
        function playChime(type) {
            try {
                if (!audioCtx) {
                    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                }
                if (audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);

                const now = audioCtx.currentTime;
                if (type === 'correct') {
                    osc.frequency.setValueAtTime(523.25, now); // C5
                    osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
                    osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
                    osc.start(now);
                    osc.stop(now + 0.4);
                } else if (type === 'wrong') {
                    osc.frequency.setValueAtTime(329.63, now); // E4
                    osc.frequency.setValueAtTime(220.00, now + 0.1); // A3
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                    osc.start(now);
                    osc.stop(now + 0.3);
                } else {
                    // Soft UI click
                    osc.frequency.setValueAtTime(440, now);
                    gain.gain.setValueAtTime(0.04, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
                    osc.start(now);
                    osc.stop(now + 0.06);
                }
            } catch (e) {
                // Audio not allowed or disabled
            }
        }

        // Global State
        let currentCategory = 'all';
        let currentEra = 'all';
        let currentSort = 'asc';
        let searchQuery = '';
        let answeredMCQs = {};

        // Theme Toggle Handler
        const themeBtn = document.getElementById('themeToggleBtn');
        function initTheme() {
            const savedDark = localStorage.getItem('mcqs_dark_mode') === 'true';
            if (savedDark) {
                document.documentElement.classList.add('dark-mode');
                themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.documentElement.classList.remove('dark-mode');
                themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        }

        themeBtn.addEventListener('click', () => {
            playChime('click');
            document.documentElement.classList.toggle('dark-mode');
            const isDark = document.documentElement.classList.contains('dark-mode');
            localStorage.setItem('mcqs_dark_mode', isDark);
            themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        // Category Icon Mapping
        function getCategoryIcon(cat) {
            switch(cat) {
                case 'wars': return 'fa-person-rifle';
                case 'revolutions': return 'fa-bolt-lightning';
                case 'treaties': return 'fa-file-contract';
                case 'discoveries': return 'fa-lightbulb';
                case 'political': return 'fa-landmark';
                default: return 'fa-star';
            }
        }

        function getCategoryLabel(cat) {
            switch(cat) {
                case 'wars': return 'Wars & Conflicts';
                case 'revolutions': return 'Revolutions';
                case 'treaties': return 'Treaties & Pacts';
                case 'discoveries': return 'Discoveries & Science';
                case 'political': return 'Political Developments';
                default: return cat;
            }
        }

        // Filter and Sort Events
        function getFilteredEvents() {
            if (!window.WORLD_HISTORY_TIMELINE_DATA) return [];
            let events = window.WORLD_HISTORY_TIMELINE_DATA.getAllEvents();

            // 1. Search filter
            if (searchQuery) {
                events = window.WORLD_HISTORY_TIMELINE_DATA.searchEvents(searchQuery);
            }

            // 2. Category filter
            if (currentCategory !== 'all') {
                events = events.filter(e => e.category === currentCategory);
            }

            // 3. Era filter
            if (currentEra !== 'all') {
                events = events.filter(e => e.era === currentEra);
            }

            // 4. Sort order
            events.sort((a, b) => {
                return currentSort === 'asc' ? a.year - b.year : b.year - a.year;
            });

            return events;
        }

        // Update Counts on Filter Pills
        function updateCategoryCounts() {
            if (!window.WORLD_HISTORY_TIMELINE_DATA) return;
            const all = window.WORLD_HISTORY_TIMELINE_DATA.getAllEvents();

            document.getElementById('countAll').textContent = all.length;
            document.getElementById('countWars').textContent = all.filter(e => e.category === 'wars').length;
            document.getElementById('countRevolutions').textContent = all.filter(e => e.category === 'revolutions').length;
            document.getElementById('countTreaties').textContent = all.filter(e => e.category === 'treaties').length;
            document.getElementById('countDiscoveries').textContent = all.filter(e => e.category === 'discoveries').length;
            document.getElementById('countPolitical').textContent = all.filter(e => e.category === 'political').length;
        }

        // Render Timeline Cards
        function renderTimeline() {
            const container = document.getElementById('timelineCardsContainer');
            const events = getFilteredEvents();

            if (events.length === 0) {
                container.innerHTML = \`
                    <div class="empty-timeline-msg">
                        <i class="fas fa-calendar-xmark" style="font-size:3rem; margin-bottom:14px; color:#cbd5e1; display:block;"></i>
                        <strong>No historical milestones match your search or active filters.</strong>
                        <p style="margin-top:6px; font-size:0.88rem;">Try selecting 'All Milestones' or clearing your search term.</p>
                    </div>
                \`;
                return;
            }

            container.innerHTML = events.map((ev, idx) => {
                const isLeft = idx % 2 === 0;
                const sideClass = isLeft ? 'left' : 'right';
                const catIcon = getCategoryIcon(ev.category);
                const catLabel = getCategoryLabel(ev.category);
                const mcqId = \`mcq_\${ev.id}\`;

                // Render MCQ Section if present
                let mcqMarkup = '';
                if (ev.examMcq) {
                    const q = ev.examMcq;
                    const optKeys = Object.keys(q.options);
                    mcqMarkup = \`
                        <div class="event-mcq-container" id="\${mcqId}">
                            <div class="mcq-badge-header">
                                <span><i class="fas fa-graduation-cap"></i> CSS/PMS Screening Past Paper MCQ</span>
                                <span style="font-size:0.7rem; color:var(--tl-text-muted);">Self-Assessment</span>
                            </div>
                            <div class="mcq-q-text">\${q.questionText}</div>
                            <div class="mcq-opts-grid">
                                \${optKeys.map(key => \`
                                    <button type="button" class="mcq-opt-btn" data-evid="\${ev.id}" data-opt="\${key}" data-correct="\${q.correctAnswer}">
                                        <span style="font-weight:800; color:var(--tl-primary); width:18px;">\${key}.</span>
                                        <span>\${q.options[key]}</span>
                                    </button>
                                \`).join('')}
                            </div>
                            <div class="mcq-expl-box" id="expl_\${ev.id}">
                                <strong><i class="fas fa-lightbulb" style="color:var(--cat-rev);"></i> Correct Answer: Option \${q.correctAnswer}</strong><br>
                                \${q.explanation}
                            </div>
                        </div>
                    \`;
                }

                return \`
                    <div class="timeline-card-wrapper \${sideClass}" id="event_\${ev.year}">
                        <div class="spine-node \${ev.category}">
                            <i class="fas \${catIcon}"></i>
                        </div>
                        <article class="timeline-event-card">
                            <div class="card-meta-header">
                                <span class="event-year-badge \${ev.category}">
                                    <i class="fas fa-clock"></i> \${ev.dateDisplay}
                                </span>
                                <span class="category-indicator-pill \${ev.category}">
                                    <i class="fas \${catIcon}"></i> \${catLabel}
                                </span>
                            </div>

                            <h3 class="event-title">\${ev.title}</h3>
                            <p class="event-significance">\${ev.significance}</p>

                            <!-- Key Figures -->
                            \${ev.keyFigures && ev.keyFigures.length ? \`
                                <div class="figures-row">
                                    <span style="font-weight:700; color:var(--tl-text-muted);">Key Figures:</span>
                                    \${ev.keyFigures.map(fig => \`
                                        <span class="figure-pill"><i class="fas fa-user-tie"></i> \${fig}</span>
                                    \`).join('')}
                                </div>
                            \` : ''}

                            <!-- Causal Outcomes -->
                            \${ev.outcomes && ev.outcomes.length ? \`
                                <div class="outcomes-box">
                                    <div class="outcomes-title"><i class="fas fa-arrow-trend-up"></i> Strategic Outcomes &amp; Exam Takeaways:</div>
                                    <ul class="outcomes-list">
                                        \${ev.outcomes.map(item => \`<li><i class="fas fa-circle-check"></i> <span>\${item}</span></li>\`).join('')}
                                    </ul>
                                </div>
                            \` : ''}

                            <!-- CSS Exam Note Tag -->
                            \${ev.cssExamNotes ? \`
                                <div style="font-size:0.78rem; font-weight:600; color:var(--tl-text-muted); margin-bottom:8px;">
                                    <i class="fas fa-book-bookmark" style="color:var(--tl-primary);"></i> Syllabus Scope: \${ev.cssExamNotes}
                                </div>
                            \` : ''}

                            <!-- Embedded Exam MCQ -->
                            \${mcqMarkup}
                        </article>
                    </div>
                \`;
            }).join('');

            // Attach MCQ event handlers
            container.querySelectorAll('.mcq-opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const evId = btn.getAttribute('data-evid');
                    if (answeredMCQs[evId]) return; // already answered

                    const selected = btn.getAttribute('data-opt');
                    const correct = btn.getAttribute('data-correct');
                    const cardWrapper = document.getElementById(\`mcq_\${evId}\`);
                    const explBox = document.getElementById(\`expl_\${evId}\`);

                    answeredMCQs[evId] = true;
                    cardWrapper.querySelectorAll('.mcq-opt-btn').forEach(b => b.classList.add('locked'));

                    if (selected === correct) {
                        btn.classList.add('correct');
                        playChime('correct');
                    } else {
                        btn.classList.add('wrong');
                        playChime('wrong');
                        cardWrapper.querySelectorAll(\`.mcq-opt-btn[data-opt="\${correct}"]\`).forEach(b => b.classList.add('correct'));
                    }

                    if (explBox) explBox.style.display = 'block';
                });
            });
        }

        // Jump to Year Functionality
        function jumpToYear(targetYear) {
            playChime('click');
            // If filters hide it, reset category and era
            if (currentCategory !== 'all' || currentEra !== 'all' || searchQuery) {
                currentCategory = 'all';
                currentEra = 'all';
                searchQuery = '';
                document.getElementById('timelineSearchInput').value = '';
                document.getElementById('eraSelect').value = 'all';
                document.querySelectorAll('.cat-pill-btn').forEach(b => b.classList.remove('active'));
                document.querySelector('.cat-pill-btn[data-category="all"]').classList.add('active');
                renderTimeline();
            }

            setTimeout(() => {
                const target = document.getElementById(\`event_\${targetYear}\`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    const card = target.querySelector('.timeline-event-card');
                    if (card) {
                        card.style.boxShadow = '0 0 0 4px var(--tl-primary)';
                        setTimeout(() => {
                            card.style.boxShadow = '';
                        }, 2000);
                    }
                }
            }, 100);
        }

        // Event Listeners
        // 1. Category Filter Pills
        document.querySelectorAll('.cat-pill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                playChime('click');
                document.querySelectorAll('.cat-pill-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.getAttribute('data-category');
                renderTimeline();
            });
        });

        // 2. Era Dropdown
        document.getElementById('eraSelect').addEventListener('change', (e) => {
            playChime('click');
            currentEra = e.target.value;
            renderTimeline();
        });

        // 3. Sort Order
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            playChime('click');
            currentSort = e.target.value;
            renderTimeline();
        });

        // 4. Search Input
        document.getElementById('timelineSearchInput').addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderTimeline();
        });

        // Document Ready Initialization
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            updateCategoryCounts();
            renderTimeline();
        });
    </script>
</body>

</html>
`;

const outputPath = path.join(__dirname, '..', 'frontend', 'world-history-timeline.html');
fs.writeFileSync(outputPath, htmlContent.trim(), 'utf8');
console.log('Successfully created world-history-timeline.html. Size:', fs.statSync(outputPath).size, 'bytes');
