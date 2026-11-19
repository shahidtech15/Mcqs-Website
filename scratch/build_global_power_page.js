const fs = require('fs');
const path = require('path');

const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Power Comparison &amp; Strategic Index | CSS Prep Central</title>
    <meta name="description"
        content="Compare 25 global powers by GDP, population, military expenditure, nuclear triad, defense capabilities, exports, and energy production. Interactive Head-to-Head Duel, Radar Chart, Matrix Rankings, and IR theories for CSS/PMS.">
    <link rel="canonical" href="https://cssprepcentral.com/global-power-comparison.html" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <style>
        :root {
            --pow-bg: #f8fafc;
            --pow-card-bg: #ffffff;
            --pow-card-sub: #f1f5f9;
            --pow-border: #e2e8f0;
            --pow-text-main: #0f172a;
            --pow-text-muted: #64748b;
            --pow-primary: #0284c7;
            --pow-primary-dark: #0369a1;
            --pow-primary-light: rgba(2, 132, 199, 0.1);
            --pow-accent-a: #2563eb;
            --pow-accent-b: #dc2626;
            --pow-gold: #f59e0b;
            --pow-green: #10b981;
            --pow-purple: #8b5cf6;
            --pow-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            --pow-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
        }

        .dark-mode {
            --pow-bg: #0b1120;
            --pow-card-bg: #131c31;
            --pow-card-sub: #1e293b;
            --pow-border: #1e293b;
            --pow-text-main: #f8fafc;
            --pow-text-muted: #94a3b8;
            --pow-primary: #38bdf8;
            --pow-primary-dark: #0284c7;
            --pow-primary-light: rgba(56, 189, 248, 0.15);
            --pow-accent-a: #60a5fa;
            --pow-accent-b: #f87171;
            --pow-gold: #fbbf24;
            --pow-green: #34d399;
            --pow-purple: #a78bfa;
            --pow-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
            --pow-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.6);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--pow-bg);
            color: var(--pow-text-main);
            line-height: 1.5;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Top Academic Suites Switcher */
        .site-switcher-bar {
            background: #0f172a;
            border-bottom: 1px solid #1e293b;
            padding: 8px 16px;
            font-size: 0.82rem;
            overflow-x: auto;
            white-space: nowrap;
            z-index: 1001;
        }

        .switcher-inner {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .switcher-label {
            color: #94a3b8;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.72rem;
            letter-spacing: 0.05em;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .switcher-btn {
            color: #94a3b8;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 6px;
            transition: all 0.2s;
            font-weight: 500;
        }

        .switcher-btn:hover {
            color: #ffffff;
            background: rgba(255, 255, 255, 0.05);
        }

        .switcher-btn.active {
            color: #38bdf8;
            background: rgba(56, 189, 248, 0.15);
            font-weight: 700;
        }

        /* Header Navigation */
        .site-header {
            background: var(--pow-card-bg);
            border-bottom: 1px solid var(--pow-border);
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
            color: var(--pow-text-main);
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 1.25rem;
        }

        .logo i {
            color: var(--pow-primary);
        }

        .nav-links {
            display: flex;
            gap: 16px;
            align-items: center;
            overflow-x: auto;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--pow-text-muted);
            font-weight: 600;
            font-size: 0.88rem;
            transition: color 0.2s;
            white-space: nowrap;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--pow-primary);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .theme-toggle-btn {
            background: var(--pow-bg);
            border: 1px solid var(--pow-border);
            color: var(--pow-text-main);
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
            border-color: var(--pow-primary);
            color: var(--pow-primary);
        }

        /* Hero Banner */
        .hero-banner {
            background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(37, 99, 235, 0.03) 100%);
            border-bottom: 1px solid var(--pow-border);
            padding: 28px 20px 22px;
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
            margin-bottom: 14px;
        }

        .hero-title-area h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 2.1rem;
            font-weight: 800;
            letter-spacing: -0.02em;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .hero-title-area h1 i {
            color: var(--pow-primary);
        }

        .hero-title-area p {
            color: var(--pow-text-muted);
            font-size: 0.95rem;
            max-width: 860px;
            line-height: 1.55;
        }

        .search-container {
            position: relative;
            min-width: 280px;
            flex-grow: 1;
            max-width: 400px;
        }

        .search-input {
            width: 100%;
            background: var(--pow-card-bg);
            border: 1.5px solid var(--pow-border);
            padding: 10px 16px 10px 42px;
            border-radius: 12px;
            font-size: 0.9rem;
            color: var(--pow-text-main);
            outline: none;
            transition: all 0.2s ease;
        }

        .search-input:focus {
            border-color: var(--pow-primary);
            box-shadow: 0 0 0 3px var(--pow-primary-light);
        }

        .search-icon {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--pow-text-muted);
            pointer-events: none;
        }

        .hero-badges-row {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 12px;
        }

        .hero-stat-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--pow-text-muted);
        }

        .hero-stat-badge strong {
            color: var(--pow-text-main);
        }

        .hero-stat-badge i {
            color: var(--pow-primary);
        }

        /* Main Container */
        .main-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 24px 20px 48px;
            width: 100%;
            flex-grow: 1;
        }

        /* Navigation Tabs */
        .suite-tabs-nav {
            display: flex;
            gap: 8px;
            border-bottom: 2px solid var(--pow-border);
            margin-bottom: 24px;
            overflow-x: auto;
        }

        .tab-btn {
            background: none;
            border: none;
            padding: 12px 20px;
            font-family: 'Outfit', sans-serif;
            font-size: 0.98rem;
            font-weight: 700;
            color: var(--pow-text-muted);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-bottom: 3px solid transparent;
            margin-bottom: -2px;
            transition: all 0.2s ease;
            white-space: nowrap;
        }

        .tab-btn:hover {
            color: var(--pow-text-main);
        }

        .tab-btn.active {
            color: var(--pow-primary);
            border-bottom-color: var(--pow-primary);
        }

        .tab-pane {
            display: none;
        }

        .tab-pane.active {
            display: block;
            animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(6px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* TAB 1: DUEL COMPARATOR */
        .duel-control-card {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-radius: 16px;
            padding: 22px;
            margin-bottom: 24px;
            box-shadow: var(--pow-shadow);
        }

        .duel-selectors-grid {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 20px;
            align-items: center;
            margin-bottom: 18px;
        }

        @media (max-width: 768px) {
            .duel-selectors-grid {
                grid-template-columns: 1fr;
            }
        }

        .duel-side-box {
            background: var(--pow-card-sub);
            border: 2px solid var(--pow-border);
            border-radius: 14px;
            padding: 16px 20px;
            display: flex;
            align-items: center;
            gap: 14px;
            transition: border-color 0.2s ease;
        }

        .duel-side-box.side-a {
            border-color: rgba(37, 99, 235, 0.4);
        }

        .duel-side-box.side-b {
            border-color: rgba(220, 38, 38, 0.4);
        }

        .country-select-label {
            font-size: 0.75rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 4px;
            display: block;
        }

        .label-a {
            color: var(--pow-accent-a);
        }

        .label-b {
            color: var(--pow-accent-b);
        }

        .country-dropdown {
            width: 100%;
            background: var(--pow-card-bg);
            border: 1.5px solid var(--pow-border);
            padding: 10px 14px;
            border-radius: 10px;
            font-family: 'Outfit', sans-serif;
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--pow-text-main);
            outline: none;
            cursor: pointer;
        }

        .country-dropdown:focus {
            border-color: var(--pow-primary);
        }

        .vs-badge-circle {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--pow-accent-a), var(--pow-accent-b));
            color: #ffffff;
            font-family: 'Outfit', sans-serif;
            font-weight: 900;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            margin: 0 auto;
        }

        /* Preset Rivalry Buttons */
        .preset-bar-title {
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--pow-text-muted);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .preset-pills-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .preset-pill-btn {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            padding: 7px 14px;
            border-radius: 20px;
            font-size: 0.84rem;
            font-weight: 600;
            color: var(--pow-text-main);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
        }

        .preset-pill-btn:hover {
            border-color: var(--pow-primary);
            color: var(--pow-primary);
            transform: translateY(-1px);
        }

        .preset-pill-btn.active {
            background: var(--pow-primary);
            color: #ffffff;
            border-color: var(--pow-primary);
        }

        /* Strategic Rivalry Summary Card */
        .rivalry-summary-card {
            background: linear-gradient(135deg, rgba(2, 132, 199, 0.06), rgba(99, 102, 241, 0.04));
            border: 1.5px solid var(--pow-border);
            border-left: 5px solid var(--pow-primary);
            border-radius: 12px;
            padding: 16px 20px;
            margin-bottom: 24px;
        }

        .rivalry-header-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 8px;
        }

        .rivalry-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--pow-text-main);
        }

        .rivalry-badge {
            background: var(--pow-primary-light);
            color: var(--pow-primary);
            border: 1px solid var(--pow-primary);
            padding: 4px 10px;
            border-radius: 8px;
            font-size: 0.76rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        .rivalry-desc {
            font-size: 0.92rem;
            color: var(--pow-text-muted);
            line-height: 1.55;
        }

        /* 2-Column Duel Grid: Radar Chart + Country Profiles */
        .duel-main-layout {
            display: grid;
            grid-template-columns: 460px 1fr;
            gap: 24px;
            margin-bottom: 28px;
        }

        @media (max-width: 1024px) {
            .duel-main-layout {
                grid-template-columns: 1fr;
            }
        }

        .chart-card {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-radius: 16px;
            padding: 22px;
            box-shadow: var(--pow-shadow);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .chart-header {
            width: 100%;
            margin-bottom: 12px;
            text-align: left;
        }

        .chart-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--pow-text-main);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .chart-subtitle {
            font-size: 0.8rem;
            color: var(--pow-text-muted);
        }

        .canvas-container {
            width: 100%;
            max-width: 400px;
            height: 380px;
            position: relative;
            margin: 10px auto;
        }

        #radarCanvas {
            width: 100%;
            height: 100%;
            display: block;
        }

        .chart-legend {
            display: flex;
            gap: 20px;
            margin-top: 10px;
            font-size: 0.86rem;
            font-weight: 700;
        }

        .legend-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .legend-dot-a {
            width: 12px;
            height: 12px;
            border-radius: 3px;
            background: var(--pow-accent-a);
        }

        .legend-dot-b {
            width: 12px;
            height: 12px;
            border-radius: 3px;
            background: var(--pow-accent-b);
        }

        /* Overview Comparison Cards */
        .overview-cards-col {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .power-card-duo {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }

        @media (max-width: 640px) {
            .power-card-duo {
                grid-template-columns: 1fr;
            }
        }

        .country-hero-card {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-radius: 14px;
            padding: 18px 20px;
            box-shadow: var(--pow-shadow);
        }

        .country-hero-card.side-a {
            border-top: 4px solid var(--pow-accent-a);
        }

        .country-hero-card.side-b {
            border-top: 4px solid var(--pow-accent-b);
        }

        .country-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .country-name-flag {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: 'Outfit', sans-serif;
            font-size: 1.35rem;
            font-weight: 800;
        }

        .country-flag-icon {
            font-size: 1.6rem;
        }

        .country-tier-badge {
            font-size: 0.72rem;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 6px;
            background: var(--pow-card-sub);
            color: var(--pow-text-muted);
            border: 1px solid var(--pow-border);
        }

        .country-quick-facts {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            margin-bottom: 12px;
            font-size: 0.82rem;
        }

        .fact-item {
            background: var(--pow-card-sub);
            padding: 8px 10px;
            border-radius: 8px;
        }

        .fact-label {
            color: var(--pow-text-muted);
            display: block;
            font-size: 0.72rem;
            font-weight: 600;
        }

        .fact-val {
            color: var(--pow-text-main);
            font-weight: 800;
            font-family: 'Outfit', sans-serif;
            font-size: 0.95rem;
        }

        .doctrine-quote-box {
            background: rgba(0, 0, 0, 0.03);
            border-left: 3px solid var(--pow-primary);
            padding: 8px 12px;
            border-radius: 0 8px 8px 0;
            font-size: 0.8rem;
            color: var(--pow-text-muted);
            line-height: 1.45;
        }

        /* Metric Differential Tables & Progress Bars */
        .metric-section-card {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-radius: 16px;
            padding: 22px;
            margin-bottom: 24px;
            box-shadow: var(--pow-shadow);
        }

        .metric-section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 18px;
            border-bottom: 1px solid var(--pow-border);
            padding-bottom: 12px;
        }

        .metric-section-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--pow-text-main);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .metric-row {
            margin-bottom: 16px;
        }

        .metric-label-row {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 0.86rem;
            margin-bottom: 6px;
        }

        .metric-name {
            font-weight: 700;
            color: var(--pow-text-main);
        }

        .metric-val-a {
            font-weight: 800;
            color: var(--pow-accent-a);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.95rem;
        }

        .metric-val-b {
            font-weight: 800;
            color: var(--pow-accent-b);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.95rem;
        }

        .differential-bar-track {
            height: 10px;
            background: var(--pow-card-sub);
            border-radius: 6px;
            overflow: hidden;
            display: flex;
            position: relative;
        }

        .bar-fill-a {
            height: 100%;
            background: var(--pow-accent-a);
            transition: width 0.4s ease;
        }

        .bar-fill-b {
            height: 100%;
            background: var(--pow-accent-b);
            transition: width 0.4s ease;
        }

        .differential-subtext {
            font-size: 0.74rem;
            color: var(--pow-text-muted);
            margin-top: 3px;
        }

        /* Qualitative info blocks */
        .qualitative-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            margin-top: 14px;
        }

        @media (max-width: 640px) {
            .qualitative-grid {
                grid-template-columns: 1fr;
            }
        }

        .qual-box {
            background: var(--pow-card-sub);
            border: 1px solid var(--pow-border);
            border-radius: 10px;
            padding: 12px 14px;
        }

        .qual-header {
            font-size: 0.75rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .qual-text {
            font-size: 0.84rem;
            color: var(--pow-text-muted);
            line-height: 1.45;
        }

        /* TAB 2: LEADERBOARD MATRIX */
        .matrix-toolbar {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-radius: 14px;
            padding: 16px 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 14px;
            box-shadow: var(--pow-shadow);
        }

        .matrix-filter-group {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .matrix-filter-btn {
            background: var(--pow-card-sub);
            border: 1px solid var(--pow-border);
            padding: 6px 14px;
            border-radius: 8px;
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--pow-text-muted);
            cursor: pointer;
            transition: all 0.2s;
        }

        .matrix-filter-btn:hover {
            color: var(--pow-text-main);
            border-color: var(--pow-primary);
        }

        .matrix-filter-btn.active {
            background: var(--pow-primary);
            color: #ffffff;
            border-color: var(--pow-primary);
        }

        .table-responsive-container {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-radius: 16px;
            overflow-x: auto;
            box-shadow: var(--pow-shadow);
        }

        .matrix-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.88rem;
            text-align: left;
            min-width: 900px;
        }

        .matrix-table th {
            background: var(--pow-card-sub);
            padding: 12px 14px;
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 0.8rem;
            color: var(--pow-text-muted);
            text-transform: uppercase;
            letter-spacing: 0.04em;
            border-bottom: 2px solid var(--pow-border);
            cursor: pointer;
            user-select: none;
            white-space: nowrap;
            transition: color 0.2s ease;
        }

        .matrix-table th:hover {
            color: var(--pow-primary);
        }

        .matrix-table th i {
            margin-left: 4px;
            font-size: 0.75rem;
        }

        .matrix-table td {
            padding: 12px 14px;
            border-bottom: 1px solid var(--pow-border);
            color: var(--pow-text-main);
            white-space: nowrap;
        }

        .matrix-table tbody tr:hover {
            background: var(--pow-card-sub);
        }

        .country-cell {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            font-family: 'Outfit', sans-serif;
            font-size: 0.95rem;
        }

        .tier-pill {
            font-size: 0.7rem;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            background: rgba(0, 0, 0, 0.06);
            display: inline-block;
        }

        .row-compare-btn {
            background: var(--pow-primary-light);
            color: var(--pow-primary);
            border: 1px solid var(--pow-primary);
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.76rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s;
        }

        .row-compare-btn:hover {
            background: var(--pow-primary);
            color: #ffffff;
        }

        /* TAB 3: STRATEGIC THEORIES */
        .theory-card {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 24px;
            box-shadow: var(--pow-shadow);
        }

        .theory-badge-row {
            display: flex;
            gap: 10px;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 8px;
        }

        .theory-source-badge {
            background: var(--pow-primary-light);
            color: var(--pow-primary);
            font-size: 0.78rem;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 6px;
        }

        .theory-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.4rem;
            font-weight: 800;
            margin-bottom: 8px;
        }

        .theory-concept {
            color: var(--pow-text-muted);
            font-size: 0.94rem;
            line-height: 1.6;
            margin-bottom: 18px;
        }

        .elements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 14px;
            margin-bottom: 18px;
        }

        .elem-item {
            background: var(--pow-card-sub);
            border: 1px solid var(--pow-border);
            border-radius: 10px;
            padding: 14px 16px;
        }

        .elem-name {
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 0.95rem;
            color: var(--pow-primary);
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .elem-desc {
            font-size: 0.82rem;
            color: var(--pow-text-muted);
            line-height: 1.45;
        }

        .exam-tip-box {
            background: rgba(245, 158, 11, 0.08);
            border-left: 4px solid var(--pow-gold);
            padding: 12px 16px;
            border-radius: 0 8px 8px 0;
            font-size: 0.86rem;
            color: var(--pow-text-main);
        }

        .exam-tip-box strong {
            color: #d97706;
        }

        /* TAB 4: PRACTICE MCQS */
        .quiz-container-card {
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-radius: 16px;
            padding: 24px;
            box-shadow: var(--pow-shadow);
        }

        .quiz-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 20px;
            border-bottom: 1px solid var(--pow-border);
            padding-bottom: 14px;
        }

        .quiz-score-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--pow-card-sub);
            border: 1px solid var(--pow-border);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 800;
            font-family: 'Outfit', sans-serif;
        }

        .quiz-reset-btn {
            background: var(--pow-card-sub);
            border: 1px solid var(--pow-border);
            padding: 6px 14px;
            border-radius: 8px;
            font-size: 0.84rem;
            font-weight: 700;
            color: var(--pow-text-main);
            cursor: pointer;
            transition: all 0.2s;
        }

        .quiz-reset-btn:hover {
            border-color: var(--pow-primary);
            color: var(--pow-primary);
        }

        .mcq-card {
            background: var(--pow-card-sub);
            border: 1px solid var(--pow-border);
            border-radius: 12px;
            padding: 18px 20px;
            margin-bottom: 18px;
            transition: all 0.2s ease;
        }

        .mcq-q-header {
            font-family: 'Outfit', sans-serif;
            font-size: 1.05rem;
            font-weight: 700;
            margin-bottom: 14px;
            display: flex;
            gap: 10px;
        }

        .mcq-number-badge {
            background: var(--pow-primary);
            color: #ffffff;
            width: 26px;
            height: 26px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.78rem;
            font-weight: 800;
            flex-shrink: 0;
        }

        .mcq-options-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 12px;
        }

        .mcq-opt-btn {
            background: var(--pow-card-bg);
            border: 1.5px solid var(--pow-border);
            padding: 10px 14px;
            border-radius: 10px;
            text-align: left;
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--pow-text-main);
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .mcq-opt-btn:hover:not(:disabled) {
            border-color: var(--pow-primary);
            background: var(--pow-primary-light);
        }

        .mcq-opt-btn.correct {
            background: rgba(16, 185, 129, 0.15) !important;
            border-color: var(--pow-green) !important;
            color: #065f46 !important;
            font-weight: 700;
        }

        .dark-mode .mcq-opt-btn.correct {
            color: #34d399 !important;
        }

        .mcq-opt-btn.incorrect {
            background: rgba(239, 68, 68, 0.15) !important;
            border-color: var(--pow-accent-b) !important;
            color: #991b1b !important;
            font-weight: 700;
        }

        .dark-mode .mcq-opt-btn.incorrect {
            color: #f87171 !important;
        }

        .mcq-opt-letter {
            width: 24px;
            height: 24px;
            border-radius: 6px;
            background: var(--pow-card-sub);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.76rem;
            font-weight: 800;
            flex-shrink: 0;
        }

        .mcq-explanation-box {
            display: none;
            background: var(--pow-card-bg);
            border: 1px solid var(--pow-border);
            border-left: 4px solid var(--pow-primary);
            border-radius: 0 8px 8px 0;
            padding: 12px 14px;
            font-size: 0.84rem;
            line-height: 1.5;
            color: var(--pow-text-muted);
            margin-top: 10px;
        }

        /* Footer */
        .site-footer {
            background: #0f172a;
            color: #94a3b8;
            padding: 40px 20px 24px;
            margin-top: auto;
            border-top: 1px solid #1e293b;
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

        .footer-logo {
            color: #ffffff;
            font-family: 'Outfit', sans-serif;
            font-weight: 800;
            font-size: 1.1rem;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .footer-links {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .footer-links a {
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.84rem;
            transition: color 0.2s;
        }

        .footer-links a:hover {
            color: #38bdf8;
        }
    </style>
</head>

<body>

    <!-- Academic Suites Switcher Bar -->
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
            <a href="world-history-timeline.html" class="switcher-btn">
                <i class="fas fa-timeline"></i> World Timeline
            </a>
            <a href="global-power-comparison.html" class="switcher-btn active">
                <i class="fas fa-shield-halved"></i> Global Power
            </a>
        </div>
    </div>

    <!-- Site Header -->
    <header class="site-header">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <i class="fa-solid fa-graduation-cap"></i>
                <span>CSS PREP CENTRAL</span>
            </a>
            <nav class="nav-links">
                <a href="index.html"><i class="fa-solid fa-house"></i> Home</a>
                <a href="quiz.html"><i class="fa-solid fa-pen-to-square"></i> Practice Quiz</a>
                <a href="unsc-simulator.html"><i class="fa-solid fa-scale-balanced"></i> UNSC Simulator</a>
                <a href="international-organizations-explorer.html"><i class="fa-solid fa-sitemap"></i> Org Explorer</a>
                <a href="world-history-timeline.html"><i class="fa-solid fa-timeline"></i> World Timeline</a>
                <a href="global-power-comparison.html" class="active"><i class="fa-solid fa-shield-halved"></i> Global Power</a>
            </nav>
            <div class="header-actions">
                <button type="button" class="theme-toggle-btn" id="themeToggleBtn" title="Toggle Theme" aria-label="Toggle Theme">
                    <i class="fa-solid fa-moon"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Banner -->
    <section class="hero-banner">
        <div class="hero-inner">
            <div class="hero-title-row">
                <div class="hero-title-area">
                    <h1><i class="fa-solid fa-shield-halved"></i> Global Power Comparison</h1>
                    <p>Compare major global powers across GDP, population, defense budgets, nuclear arsenals, military hardware, exports, and energy production. Designed for CSS, PMS, and International Relations candidates.</p>
                </div>
                <div class="search-container">
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" id="countrySearchInput" class="search-input" placeholder="Search power (e.g., Pakistan, China, US)...">
                </div>
            </div>
            <div class="hero-badges-row">
                <span class="hero-stat-badge"><i class="fa-solid fa-earth-americas"></i> <strong>25</strong> Major Powers</span>
                <span class="hero-stat-badge"><i class="fa-solid fa-bolt"></i> <strong>7</strong> Geopolitical Rivalries</span>
                <span class="hero-stat-badge"><i class="fa-solid fa-chart-pie"></i> <strong>6-Axis</strong> Radar Chart</span>
                <span class="hero-stat-badge"><i class="fa-solid fa-book-bookmark"></i> <strong>3</strong> Strategic Theories</span>
                <span class="hero-stat-badge"><i class="fa-solid fa-trophy"></i> <strong>10</strong> High-Yield MCQs</span>
            </div>
        </div>
    </section>

    <!-- Main Content Container -->
    <main class="main-container">

        <!-- Navigation Tabs -->
        <div class="suite-tabs-nav" role="tablist">
            <button class="tab-btn active" data-tab="tab-duel" role="tab">
                <i class="fa-solid fa-bolt"></i> Head-to-Head Duel
            </button>
            <button class="tab-btn" data-tab="tab-matrix" role="tab">
                <i class="fa-solid fa-table-list"></i> Power Leaderboard Matrix
            </button>
            <button class="tab-btn" data-tab="tab-theories" role="tab">
                <i class="fa-solid fa-book-open"></i> Strategic Studies Dossier
            </button>
            <button class="tab-btn" data-tab="tab-quiz" role="tab">
                <i class="fa-solid fa-circle-question"></i> Exam Practice &amp; MCQs
            </button>
        </div>

        <!-- ==================== TAB 1: HEAD-TO-HEAD DUEL ==================== -->
        <section id="tab-duel" class="tab-pane active">
            
            <!-- Controls Card -->
            <div class="duel-control-card">
                <div class="duel-selectors-grid">
                    <div class="duel-side-box side-a">
                        <span class="country-flag-icon" id="flagA">🇺🇸</span>
                        <div style="flex-grow: 1;">
                            <span class="country-select-label label-a"><i class="fa-solid fa-shield"></i> Power A</span>
                            <select id="selectPowerA" class="country-dropdown"></select>
                        </div>
                    </div>
                    
                    <div class="vs-badge-circle">VS</div>

                    <div class="duel-side-box side-b">
                        <span class="country-flag-icon" id="flagB">🇨🇳</span>
                        <div style="flex-grow: 1;">
                            <span class="country-select-label label-b"><i class="fa-solid fa-shield"></i> Power B</span>
                            <select id="selectPowerB" class="country-dropdown"></select>
                        </div>
                    </div>
                </div>

                <!-- Preset Rivalries -->
                <div>
                    <div class="preset-bar-title"><i class="fa-solid fa-fire-flame-curved"></i> High-Yield Strategic Rivalries:</div>
                    <div class="preset-pills-row" id="presetPillsContainer"></div>
                </div>
            </div>

            <!-- Rivalry Context Banner -->
            <div id="rivalryContextCard" class="rivalry-summary-card">
                <div class="rivalry-header-row">
                    <h3 id="rivalryTitle" class="rivalry-title">United States vs. China</h3>
                    <span id="rivalryBadge" class="rivalry-badge">Hegemonic Contest</span>
                </div>
                <p id="rivalrySummary" class="rivalry-desc">Analytical summary loading...</p>
            </div>

            <!-- Duel Main Layout: Radar Canvas + Quick Fact Cards -->
            <div class="duel-main-layout">
                <!-- Radar Chart Card -->
                <div class="chart-card">
                    <div class="chart-header">
                        <h4 class="chart-title"><i class="fa-solid fa-compass-drafting"></i> 6-Axis Power Radar</h4>
                        <span class="chart-subtitle">Normalized capability balance across six core dimensions</span>
                    </div>
                    <div class="canvas-container">
                        <canvas id="radarCanvas" width="400" height="380"></canvas>
                    </div>
                    <div class="chart-legend">
                        <div class="legend-item"><div class="legend-dot-a"></div> <span id="legendNameA">Power A</span></div>
                        <div class="legend-item"><div class="legend-dot-b"></div> <span id="legendNameB">Power B</span></div>
                    </div>
                </div>

                <!-- Side-by-side Overview Cards -->
                <div class="overview-cards-col">
                    <div class="power-card-duo">
                        <!-- Card A -->
                        <div class="country-hero-card side-a" id="heroCardA">
                            <div class="country-card-header">
                                <div class="country-name-flag">
                                    <span id="overviewFlagA">🇺🇸</span>
                                    <span id="overviewNameA">United States</span>
                                </div>
                                <span class="country-tier-badge" id="tierA">Global Superpower</span>
                            </div>
                            <div class="country-quick-facts">
                                <div class="fact-item">
                                    <span class="fact-label">GFP Rank</span>
                                    <span class="fact-val" id="gfpA">#1</span>
                                </div>
                                <div class="fact-item">
                                    <span class="fact-label">UNSC Status</span>
                                    <span class="fact-val" id="unscA">P5 Veto</span>
                                </div>
                                <div class="fact-item">
                                    <span class="fact-label">GDP (PPP)</span>
                                    <span class="fact-val" id="pppA">$28.8T</span>
                                </div>
                                <div class="fact-item">
                                    <span class="fact-label">Defense Budget</span>
                                    <span class="fact-val" id="defA">$916B</span>
                                </div>
                            </div>
                            <div class="doctrine-quote-box" id="doctrineA">Strategic doctrine loading...</div>
                        </div>

                        <!-- Card B -->
                        <div class="country-hero-card side-b" id="heroCardB">
                            <div class="country-card-header">
                                <div class="country-name-flag">
                                    <span id="overviewFlagB">🇨🇳</span>
                                    <span id="overviewNameB">China</span>
                                </div>
                                <span class="country-tier-badge" id="tierB">Superpower Challenger</span>
                            </div>
                            <div class="country-quick-facts">
                                <div class="fact-item">
                                    <span class="fact-label">GFP Rank</span>
                                    <span class="fact-val" id="gfpB">#3</span>
                                </div>
                                <div class="fact-item">
                                    <span class="fact-label">UNSC Status</span>
                                    <span class="fact-val" id="unscB">P5 Veto</span>
                                </div>
                                <div class="fact-item">
                                    <span class="fact-label">GDP (PPP)</span>
                                    <span class="fact-val" id="pppB">$35.3T</span>
                                </div>
                                <div class="fact-item">
                                    <span class="fact-label">Defense Budget</span>
                                    <span class="fact-val" id="defB">$296B</span>
                                </div>
                            </div>
                            <div class="doctrine-quote-box" id="doctrineB">Strategic doctrine loading...</div>
                        </div>
                    </div>

                    <!-- Qualitative Nuclear & Space Summary -->
                    <div class="qualitative-grid">
                        <div class="qual-box">
                            <div class="qual-header" style="color:var(--pow-accent-a);"><i class="fa-solid fa-atom"></i> <span id="qualNameA">Power A</span> Deterrence &amp; Space</div>
                            <div class="qual-text" id="qualDetailsA">Nuclear Triad and Space details...</div>
                        </div>
                        <div class="qual-box">
                            <div class="qual-header" style="color:var(--pow-accent-b);"><i class="fa-solid fa-atom"></i> <span id="qualNameB">Power B</span> Deterrence &amp; Space</div>
                            <div class="qual-text" id="qualDetailsB">Nuclear Triad and Space details...</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detailed Metric Breakdowns with Differential Bars -->
            <div id="detailedMetricsContainer"></div>

        </section>

        <!-- ==================== TAB 2: POWER MATRIX ==================== -->
        <section id="tab-matrix" class="tab-pane">
            <div class="matrix-toolbar">
                <div class="matrix-filter-group" id="regionFilters">
                    <button class="matrix-filter-btn active" data-filter="all">All Regions (25)</button>
                    <button class="matrix-filter-btn" data-filter="Asia">Asia</button>
                    <button class="matrix-filter-btn" data-filter="Europe">Europe</button>
                    <button class="matrix-filter-btn" data-filter="Middle East">Middle East</button>
                    <button class="matrix-filter-btn" data-filter="Americas">Americas</button>
                    <button class="matrix-filter-btn" data-filter="Africa">Africa</button>
                    <button class="matrix-filter-btn" data-filter="nuclear">Nuclear Armed</button>
                    <button class="matrix-filter-btn" data-filter="p5">P5 Veto</button>
                </div>
                <div style="font-size:0.82rem; color:var(--pow-text-muted);">
                    Click any column header to sort &bull; Click "Compare" to load in duel
                </div>
            </div>

            <div class="table-responsive-container">
                <table class="matrix-table" id="leaderboardTable">
                    <thead>
                        <tr>
                            <th data-sort="name">Country <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="gfpRank">GFP Rank <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="gdpNominal">GDP Nom ($B) <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="gdpPpp">GDP PPP ($B) <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="population">Pop (M) <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="defenseBudget">Def Budget ($B) <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="activePersonnel">Active Troops (K) <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="nuclearWarheads">Nuclear Warheads <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="exportsTotal">Exports ($B) <i class="fa-solid fa-sort"></i></th>
                            <th data-sort="oilProduction">Oil (mbpd) <i class="fa-solid fa-sort"></i></th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="matrixTableBody"></tbody>
                </table>
            </div>
        </section>

        <!-- ==================== TAB 3: STRATEGIC THEORIES ==================== -->
        <section id="tab-theories" class="tab-pane">
            <div id="theoriesContainer"></div>
        </section>

        <!-- ==================== TAB 4: PRACTICE MCQS ==================== -->
        <section id="tab-quiz" class="tab-pane">
            <div class="quiz-container-card">
                <div class="quiz-toolbar">
                    <div>
                        <h3 style="font-family:'Outfit',sans-serif; font-size:1.25rem; font-weight:800;">
                            <i class="fa-solid fa-circle-question" style="color:var(--pow-primary);"></i> High-Yield Geopolitics &amp; Power MCQs
                        </h3>
                        <p style="font-size:0.86rem; color:var(--pow-text-muted);">
                            Test your knowledge of defense spending, nuclear triads, SIPRI data, and IR power doctrines.
                        </p>
                    </div>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <span class="quiz-score-pill">
                            <i class="fa-solid fa-trophy" style="color:var(--pow-gold);"></i> Score: <span id="quizScoreText">0 / 10</span>
                        </span>
                        <button type="button" class="quiz-reset-btn" id="quizResetBtn">
                            <i class="fa-solid fa-rotate-right"></i> Reset Quiz
                        </button>
                    </div>
                </div>

                <div id="mcqListContainer"></div>
            </div>
        </section>

    </main>

    <!-- Site Footer -->
    <footer class="site-footer">
        <div class="footer-inner">
            <a href="index.html" class="footer-logo">
                <i class="fa-solid fa-graduation-cap"></i> CSS PREP CENTRAL
            </a>
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="quiz.html">Practice Hub</a>
                <a href="unsc-simulator.html">UNSC Simulator</a>
                <a href="international-organizations-explorer.html">Org Explorer</a>
                <a href="world-history-timeline.html">World Timeline</a>
                <a href="global-power-comparison.html">Global Power</a>
                <a href="pakistan-map.html">Pakistan Map</a>
            </div>
            <p style="font-size:0.8rem; color:#64748b;">
                &copy; 2026 CSS Prep Central. High-Yield CSS/PMS Preparation Platform.
            </p>
        </div>
    </footer>

    <!-- Global Power Data Script -->
    <script src="js/data_global_power.js"></script>

    <!-- Main Application Script -->
    <script>
        (function () {
            'use strict';

            // Theme Management
            const themeToggleBtn = document.getElementById('themeToggleBtn');
            const savedTheme = localStorage.getItem('mcqs_dark_mode');
            if (savedTheme === 'true') {
                document.body.classList.add('dark-mode');
                if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            }

            if (themeToggleBtn) {
                themeToggleBtn.addEventListener('click', function () {
                    const isDark = document.body.classList.toggle('dark-mode');
                    localStorage.setItem('mcqs_dark_mode', isDark);
                    themeToggleBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
                    drawRadarChart();
                });
            }

            // Web Audio Synthesis Chimes (No external audio files)
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            let audioCtx = null;

            function playSound(type) {
                try {
                    if (!audioCtx) audioCtx = new AudioContext();
                    if (audioCtx.state === 'suspended') audioCtx.resume();
                    const now = audioCtx.currentTime;

                    if (type === 'correct') {
                        // High pleasant harmonic major chord
                        const osc1 = audioCtx.createOscillator();
                        const osc2 = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();

                        osc1.type = 'sine';
                        osc2.type = 'triangle';
                        osc1.frequency.setValueAtTime(523.25, now); // C5
                        osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5
                        osc2.frequency.setValueAtTime(659.25, now);
                        osc2.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5

                        gain.gain.setValueAtTime(0.2, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

                        osc1.connect(gain);
                        osc2.connect(gain);
                        gain.connect(audioCtx.destination);

                        osc1.start(now);
                        osc2.start(now);
                        osc1.stop(now + 0.4);
                        osc2.stop(now + 0.4);
                    } else if (type === 'incorrect') {
                        // Low soft buzz
                        const osc = audioCtx.createOscillator();
                        const gain = audioCtx.createGain();

                        osc.type = 'sawtooth';
                        osc.frequency.setValueAtTime(160, now);
                        osc.frequency.linearRampToValueAtTime(110, now + 0.25);

                        gain.gain.setValueAtTime(0.2, now);
                        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

                        osc.connect(gain);
                        gain.connect(audioCtx.destination);

                        osc.start(now);
                        osc.stop(now + 0.3);
                    }
                } catch (e) {
                    // Audio fallback silently
                }
            }

            // Verify Data Access
            if (typeof window.GLOBAL_POWER_DATA === 'undefined') {
                console.error('GLOBAL_POWER_DATA not loaded.');
                return;
            }

            const API = window.GLOBAL_POWER_DATA;
            const powers = API.getPowers();
            const presets = API.getPresets();
            const presetList = API.getPresetList();
            const theories = API.getTheories();
            const mcqs = API.getMCQs();

            // Tab Navigation Handling
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabPanes = document.querySelectorAll('.tab-pane');

            tabButtons.forEach(btn => {
                btn.addEventListener('click', function () {
                    const targetTabId = this.getAttribute('data-tab');
                    tabButtons.forEach(b => b.classList.remove('active'));
                    tabPanes.forEach(p => p.classList.remove('active'));

                    this.classList.add('active');
                    const targetPane = document.getElementById(targetTabId);
                    if (targetPane) targetPane.classList.add('active');

                    if (targetTabId === 'tab-duel') {
                        setTimeout(drawRadarChart, 50);
                    }
                });
            });

            // Initialize Dropdowns
            const selectA = document.getElementById('selectPowerA');
            const selectB = document.getElementById('selectPowerB');

            powers.forEach(p => {
                const optA = document.createElement('option');
                optA.value = p.id;
                optA.textContent = \`\${p.flag} \${p.name}\`;
                selectA.appendChild(optA);

                const optB = document.createElement('option');
                optB.value = p.id;
                optB.textContent = \`\${p.flag} \${p.name}\`;
                selectB.appendChild(optB);
            });

            // Default selections: US (A) vs China (B)
            selectA.value = 'us';
            selectB.value = 'cn';

            selectA.addEventListener('change', () => updateDuel(selectA.value, selectB.value));
            selectB.addEventListener('change', () => updateDuel(selectA.value, selectB.value));

            // Render Preset Rivalry Buttons
            const presetContainer = document.getElementById('presetPillsContainer');
            presetList.forEach((preset, index) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = \`preset-pill-btn \${index === 0 ? 'active' : ''}\`;
                btn.setAttribute('data-id-a', preset.idA);
                btn.setAttribute('data-id-b', preset.idB);
                btn.setAttribute('data-key', preset.key);

                const pA = API.getPowerById(preset.idA);
                const pB = API.getPowerById(preset.idB);
                btn.innerHTML = \`\${pA.flag} \${pA.name} <span style="opacity:0.6; font-size:0.75rem;">vs</span> \${pB.flag} \${pB.name}\`;

                btn.addEventListener('click', function () {
                    document.querySelectorAll('.preset-pill-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    selectA.value = preset.idA;
                    selectB.value = preset.idB;
                    updateDuel(preset.idA, preset.idB);
                });

                presetContainer.appendChild(btn);
            });

            // Update Duel Function
            function updateDuel(idA, idB) {
                const powerA = API.getPowerById(idA);
                const powerB = API.getPowerById(idB);

                if (!powerA || !powerB) return;

                // Flags
                document.getElementById('flagA').textContent = powerA.flag;
                document.getElementById('flagB').textContent = powerB.flag;

                // Names and tiers
                document.getElementById('overviewFlagA').textContent = powerA.flag;
                document.getElementById('overviewNameA').textContent = powerA.name;
                document.getElementById('tierA').textContent = powerA.powerTier;

                document.getElementById('overviewFlagB').textContent = powerB.flag;
                document.getElementById('overviewNameB').textContent = powerB.name;
                document.getElementById('tierB').textContent = powerB.powerTier;

                // Quick facts
                document.getElementById('gfpA').textContent = \`#\${powerA.gfpRank}\`;
                document.getElementById('unscA').textContent = powerA.unscStatus.split(' ')[0] + ' ' + (powerA.unscStatus.split(' ')[1] || '');
                document.getElementById('pppA').textContent = \`$\${(powerA.gdpPpp / 1000).toFixed(1)}T\`;
                document.getElementById('defA').textContent = \`$\${powerA.defenseBudget}B\`;
                document.getElementById('doctrineA').textContent = powerA.strategicDoctrines;

                document.getElementById('gfpB').textContent = \`#\${powerB.gfpRank}\`;
                document.getElementById('unscB').textContent = powerB.unscStatus.split(' ')[0] + ' ' + (powerB.unscStatus.split(' ')[1] || '');
                document.getElementById('pppB').textContent = \`$\${(powerB.gdpPpp / 1000).toFixed(1)}T\`;
                document.getElementById('defB').textContent = \`$\${powerB.defenseBudget}B\`;
                document.getElementById('doctrineB').textContent = powerB.strategicDoctrines;

                // Legends
                document.getElementById('legendNameA').textContent = powerA.name;
                document.getElementById('legendNameB').textContent = powerB.name;

                // Qualitative Deterrence & Space
                document.getElementById('qualNameA').textContent = powerA.name;
                document.getElementById('qualDetailsA').innerHTML = \`
                    <p style="margin-bottom:6px;"><strong>Nuclear:</strong> \${powerA.nuclearStatus} (\${powerA.nuclearWarheads} warheads). \${powerA.nuclearTriad}</p>
                    <p><strong>Space &amp; Tech:</strong> \${powerA.spaceCapability}. R&amp;D: \${powerA.rdSpending}% of GDP. Soft Power: \${powerA.softPowerScore}/100.</p>
                \`;

                document.getElementById('qualNameB').textContent = powerB.name;
                document.getElementById('qualDetailsB').innerHTML = \`
                    <p style="margin-bottom:6px;"><strong>Nuclear:</strong> \${powerB.nuclearStatus} (\${powerB.nuclearWarheads} warheads). \${powerB.nuclearTriad}</p>
                    <p><strong>Space &amp; Tech:</strong> \${powerB.spaceCapability}. R&amp;D: \${powerB.rdSpending}% of GDP. Soft Power: \${powerB.softPowerScore}/100.</p>
                \`;

                // Update Strategic Rivalry Context Box
                const key1 = \`\${idA}-vs-\${idB}\`;
                const key2 = \`\${idB}-vs-\${idA}\`;
                const matchPreset = presets[key1] || presets[key2];

                const contextCard = document.getElementById('rivalryContextCard');
                if (matchPreset) {
                    contextCard.style.display = 'block';
                    document.getElementById('rivalryTitle').textContent = matchPreset.title;
                    document.getElementById('rivalryBadge').textContent = matchPreset.badge;
                    document.getElementById('rivalrySummary').textContent = matchPreset.summary;
                } else {
                    contextCard.style.display = 'block';
                    document.getElementById('rivalryTitle').textContent = \`\${powerA.name} vs. \${powerB.name}: Bilateral Capability Assessment\`;
                    document.getElementById('rivalryBadge').textContent = 'Custom Geopolitical Duel';
                    document.getElementById('rivalrySummary').textContent = \`Comparative assessment between \${powerA.name} (\${powerA.powerTier}, GFP #\${powerA.gfpRank}) and \${powerB.name} (\${powerB.powerTier}, GFP #\${powerB.gfpRank}) across strategic, economic, demographic, and defense indicators.\`;
                }

                // Render Detailed Differential Metrics
                renderDetailedMetrics(powerA, powerB);

                // Re-draw Canvas Radar Chart
                drawRadarChart();
            }

            // Render Metrics Section
            function renderDetailedMetrics(pA, pB) {
                const container = document.getElementById('detailedMetricsContainer');
                container.innerHTML = '';

                const sections = [
                    {
                        title: 'Economic & Financial Might',
                        icon: 'fa-money-bill-trend-up',
                        metrics: [
                            { label: 'Nominal GDP (USD Billions)', valA: pA.gdpNominal, valB: pB.gdpNominal, prefix: '$', suffix: 'B' },
                            { label: 'GDP at PPP (USD Billions)', valA: pA.gdpPpp, valB: pB.gdpPpp, prefix: '$', suffix: 'B' },
                            { label: 'GDP Per Capita (USD)', valA: pA.gdpPerCapita, valB: pB.gdpPerCapita, prefix: '$', suffix: '' },
                            { label: 'Annual GDP Growth Rate (%)', valA: pA.gdpGrowth, valB: pB.gdpGrowth, prefix: '', suffix: '%' },
                            { label: 'Foreign Exchange Reserves (USD Billions)', valA: pA.fxReserves, valB: pB.fxReserves, prefix: '$', suffix: 'B' }
                        ]
                    },
                    {
                        title: 'Demographics & Human Capital',
                        icon: 'fa-users',
                        metrics: [
                            { label: 'Total Population (Millions)', valA: pA.population, valB: pB.population, prefix: '', suffix: 'M' },
                            { label: 'Labor Force (Millions)', valA: pA.laborForce, valB: pB.laborForce, prefix: '', suffix: 'M' },
                            { label: 'Median Age (Years)', valA: pA.medianAge, valB: pB.medianAge, prefix: '', suffix: ' yrs', invert: true },
                            { label: 'Urbanization Rate (%)', valA: pA.urbanization, valB: pB.urbanization, prefix: '', suffix: '%' },
                            { label: 'Territorial Land Area (Sq Km)', valA: pA.landArea, valB: pB.landArea, prefix: '', suffix: ' km²' }
                        ]
                    },
                    {
                        title: 'Military Expenditures & Manpower (SIPRI 2024)',
                        icon: 'fa-person-military-rifle',
                        metrics: [
                            { label: 'Defense Budget (USD Billions)', valA: pA.defenseBudget, valB: pB.defenseBudget, prefix: '$', suffix: 'B' },
                            { label: 'Military Spending (% of GDP)', valA: pA.defensePctGdp, valB: pB.defensePctGdp, prefix: '', suffix: '%' },
                            { label: 'Active Military Personnel (Thousands)', valA: pA.activePersonnel, valB: pB.activePersonnel, prefix: '', suffix: 'K' },
                            { label: 'Reserve Military Personnel (Thousands)', valA: pA.reservePersonnel, valB: pB.reservePersonnel, prefix: '', suffix: 'K' },
                            { label: 'Global Firepower (GFP) Ranking', valA: pA.gfpRank, valB: pB.gfpRank, prefix: '#', suffix: '', invert: true }
                        ]
                    },
                    {
                        title: 'Strategic Nuclear Deterrence',
                        icon: 'fa-radiation',
                        metrics: [
                            { label: 'Nuclear Warhead Stockpile (SIPRI 2024)', valA: pA.nuclearWarheads, valB: pB.nuclearWarheads, prefix: '', suffix: ' warheads' }
                        ]
                    },
                    {
                        title: 'Conventional Force Assets (Air, Sea & Land)',
                        icon: 'fa-jet-fighter',
                        metrics: [
                            { label: 'Combat Aircraft (Fighters/Interceptors)', valA: pA.combatAircraft, valB: pB.combatAircraft, prefix: '', suffix: '' },
                            { label: 'Aircraft Carriers / Helicopter Docks', valA: pA.aircraftCarriers, valB: pB.aircraftCarriers, prefix: '', suffix: '' },
                            { label: 'Submarine Fleet (Nuclear & Diesel AIP)', valA: pA.submarines, valB: pB.submarines, prefix: '', suffix: '' },
                            { label: 'Total Naval Fleet Units', valA: pA.navalFleetTotal, valB: pB.navalFleetTotal, prefix: '', suffix: '' },
                            { label: 'Main Battle Tanks (MBT)', valA: pA.battleTanks, valB: pB.battleTanks, prefix: '', suffix: '' }
                        ]
                    },
                    {
                        title: 'Trade, Energy & Technological Innovation',
                        icon: 'fa-industry',
                        metrics: [
                            { label: 'Total Merchandise Exports (USD Billions)', valA: pA.exportsTotal, valB: pB.exportsTotal, prefix: '$', suffix: 'B' },
                            { label: 'Crude Oil Production (Million Barrels/Day)', valA: pA.oilProduction, valB: pB.oilProduction, prefix: '', suffix: ' mbpd' },
                            { label: 'Natural Gas Production (Billion Cubic Meters)', valA: pA.gasProduction, valB: pB.gasProduction, prefix: '', suffix: ' BCM' },
                            { label: 'Electricity Generation (Terawatt-Hours)', valA: pA.electricityGen, valB: pB.electricityGen, prefix: '', suffix: ' TWh' },
                            { label: 'Renewable Electricity Share (%)', valA: pA.renewableShare, valB: pB.renewableShare, prefix: '', suffix: '%' },
                            { label: 'Research & Development Spending (% of GDP)', valA: pA.rdSpending, valB: pB.rdSpending, prefix: '', suffix: '%' },
                            { label: 'Global Soft Power Score (Brand Finance /100)', valA: pA.softPowerScore, valB: pB.softPowerScore, prefix: '', suffix: '/100' }
                        ]
                    }
                ];

                sections.forEach(sec => {
                    const card = document.createElement('div');
                    card.className = 'metric-section-card';

                    let rowsHtml = '';
                    sec.metrics.forEach(m => {
                        const sum = (m.valA + m.valB) || 1;
                        let pctA = Math.round((m.valA / sum) * 100);
                        let pctB = 100 - pctA;

                        if (m.valA === 0 && m.valB === 0) {
                            pctA = 50;
                            pctB = 50;
                        }

                        const formatVal = (v, pref, suf) => \`\${pref}\${v.toLocaleString()}\${suf}\`;

                        rowsHtml += \`
                            <div class="metric-row">
                                <div class="metric-label-row">
                                    <span class="metric-val-a">\${formatVal(m.valA, m.prefix, m.suffix)}</span>
                                    <span class="metric-name">\${m.label}</span>
                                    <span class="metric-val-b">\${formatVal(m.valB, m.prefix, m.suffix)}</span>
                                </div>
                                <div class="differential-bar-track">
                                    <div class="bar-fill-a" style="width: \${pctA}%;"></div>
                                    <div class="bar-fill-b" style="width: \${pctB}%;"></div>
                                </div>
                            </div>
                        \`;
                    });

                    card.innerHTML = \`
                        <div class="metric-section-header">
                            <h4 class="metric-section-title"><i class="fa-solid \${sec.icon}" style="color:var(--pow-primary);"></i> \${sec.title}</h4>
                            <div style="font-size:0.8rem; font-weight:700;">
                                <span style="color:var(--pow-accent-a); margin-right:12px;">\${pA.name}</span> vs 
                                <span style="color:var(--pow-accent-b); margin-left:12px;">\${pB.name}</span>
                            </div>
                        </div>
                        \${rowsHtml}
                    \`;

                    container.appendChild(card);
                });
            }

            // HTML5 Canvas 6-Axis Radar Chart
            function drawRadarChart() {
                const canvas = document.getElementById('radarCanvas');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');

                // High-DPI screen adjustments
                const dpr = window.devicePixelRatio || 1;
                const width = 400;
                const height = 380;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);

                ctx.clearRect(0, 0, width, height);

                const powerA = API.getPowerById(selectA.value);
                const powerB = API.getPowerById(selectB.value);
                if (!powerA || !powerB) return;

                const centerX = width / 2;
                const centerY = height / 2 + 10;
                const radius = 130;

                const axes = [
                    { name: 'Economy (PPP)', getVal: p => Math.min(100, (p.gdpPpp / 35290) * 100) },
                    { name: 'Defense ($B)', getVal: p => Math.min(100, (p.defenseBudget / 916) * 100) },
                    { name: 'Nuclear / Triad', getVal: p => p.nuclearWarheads > 0 ? Math.min(100, 30 + (p.nuclearWarheads / 5580) * 70) : 10 },
                    { name: 'Military Mass', getVal: p => Math.min(100, (p.activePersonnel / 2035) * 50 + (p.battleTanks / 6500) * 50) },
                    { name: 'Energy & Trade', getVal: p => Math.min(100, (p.exportsTotal / 3380) * 50 + (p.oilProduction / 13.3) * 50) },
                    { name: 'Soft Power & R&D', getVal: p => Math.min(100, (p.softPowerScore / 85) * 60 + (p.rdSpending / 5.6) * 40) }
                ];

                const numAxes = axes.length;
                const angleStep = (Math.PI * 2) / numAxes;

                const isDark = document.body.classList.contains('dark-mode');
                const gridColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
                const textColor = isDark ? '#94a3b8' : '#475569';

                // Draw Concentric Rings
                const rings = [0.25, 0.5, 0.75, 1.0];
                rings.forEach(r => {
                    ctx.beginPath();
                    for (let i = 0; i < numAxes; i++) {
                        const angle = i * angleStep - Math.PI / 2;
                        const x = centerX + Math.cos(angle) * (radius * r);
                        const y = centerY + Math.sin(angle) * (radius * r);
                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.strokeStyle = gridColor;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                });

                // Draw Axis Spines & Labels
                ctx.font = 'bold 11px Inter, sans-serif';
                ctx.fillStyle = textColor;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                for (let i = 0; i < numAxes; i++) {
                    const angle = i * angleStep - Math.PI / 2;
                    const x = centerX + Math.cos(angle) * radius;
                    const y = centerY + Math.sin(angle) * radius;

                    // Line from center
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(x, y);
                    ctx.strokeStyle = gridColor;
                    ctx.stroke();

                    // Text position
                    const labelDist = radius + 24;
                    const lx = centerX + Math.cos(angle) * labelDist;
                    const ly = centerY + Math.sin(angle) * labelDist;
                    ctx.fillText(axes[i].name, lx, ly);
                }

                // Helper to plot power polygon
                function drawPolygon(power, strokeColor, fillColor) {
                    ctx.beginPath();
                    for (let i = 0; i < numAxes; i++) {
                        const score = Math.max(8, axes[i].getVal(power));
                        const r = (score / 100) * radius;
                        const angle = i * angleStep - Math.PI / 2;
                        const x = centerX + Math.cos(angle) * r;
                        const y = centerY + Math.sin(angle) * r;

                        if (i === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.closePath();
                    ctx.strokeStyle = strokeColor;
                    ctx.lineWidth = 2.5;
                    ctx.fillStyle = fillColor;
                    ctx.fill();
                    ctx.stroke();

                    // Draw dots on vertices
                    for (let i = 0; i < numAxes; i++) {
                        const score = Math.max(8, axes[i].getVal(power));
                        const r = (score / 100) * radius;
                        const angle = i * angleStep - Math.PI / 2;
                        const x = centerX + Math.cos(angle) * r;
                        const y = centerY + Math.sin(angle) * r;

                        ctx.beginPath();
                        ctx.arc(x, y, 4, 0, Math.PI * 2);
                        ctx.fillStyle = strokeColor;
                        ctx.fill();
                    }
                }

                // Draw Power B (Red) then Power A (Blue)
                const colorA = isDark ? '#60a5fa' : '#2563eb';
                const fillA = isDark ? 'rgba(96, 165, 250, 0.25)' : 'rgba(37, 99, 235, 0.2)';

                const colorB = isDark ? '#f87171' : '#dc2626';
                const fillB = isDark ? 'rgba(248, 113, 113, 0.25)' : 'rgba(220, 38, 38, 0.2)';

                drawPolygon(powerB, colorB, fillB);
                drawPolygon(powerA, colorA, fillA);
            }

            // ==================== TAB 2: MATRIX TABLE ====================
            let currentSortColumn = 'gfpRank';
            let sortAscending = true;
            let currentRegionFilter = 'all';

            function renderMatrixTable() {
                const tbody = document.getElementById('matrixTableBody');
                tbody.innerHTML = '';

                let filtered = powers.filter(p => {
                    if (currentRegionFilter === 'all') return true;
                    if (currentRegionFilter === 'Asia') return p.region.includes('Asia');
                    if (currentRegionFilter === 'Europe') return p.region.includes('Europe') || p.region.includes('Eurasia');
                    if (currentRegionFilter === 'Middle East') return p.region.includes('Middle East');
                    if (currentRegionFilter === 'Americas') return p.region.includes('America');
                    if (currentRegionFilter === 'Africa') return p.region.includes('Africa');
                    if (currentRegionFilter === 'nuclear') return p.nuclearWarheads > 0;
                    if (currentRegionFilter === 'p5') return p.unscStatus.includes('P5');
                    return true;
                });

                filtered.sort((a, b) => {
                    let valA = a[currentSortColumn];
                    let valB = b[currentSortColumn];

                    if (typeof valA === 'string') {
                        return sortAscending ? valA.localeCompare(valB) : valB.localeCompare(valA);
                    }
                    valA = valA !== undefined ? valA : 0;
                    valB = valB !== undefined ? valB : 0;
                    return sortAscending ? valA - valB : valB - valA;
                });

                filtered.forEach(p => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = \`
                        <td>
                            <div class="country-cell">
                                <span style="font-size:1.3rem;">\${p.flag}</span>
                                <div>
                                    <div>\${p.name}</div>
                                    <span class="tier-pill">\${p.powerTier}</span>
                                </div>
                            </div>
                        </td>
                        <td><strong>#\${p.gfpRank}</strong></td>
                        <td>$\${p.gdpNominal.toLocaleString()}</td>
                        <td>$\${p.gdpPpp.toLocaleString()}</td>
                        <td>\${p.population}</td>
                        <td><strong>$\${p.defenseBudget}</strong> <span style="font-size:0.75rem; color:var(--pow-text-muted);">(\${p.defensePctGdp}%)</span></td>
                        <td>\${p.activePersonnel.toLocaleString()}</td>
                        <td>\${p.nuclearWarheads > 0 ? \`<strong>\${p.nuclearWarheads}</strong>\` : '<span style="color:var(--pow-text-muted);">0</span>'}</td>
                        <td>$\${p.exportsTotal}</td>
                        <td>\${p.oilProduction}</td>
                        <td>
                            <button type="button" class="row-compare-btn" data-id="\${p.id}">
                                <i class="fa-solid fa-bolt"></i> Duel
                            </button>
                        </td>
                    \`;

                    tr.querySelector('.row-compare-btn').addEventListener('click', function () {
                        const targetId = this.getAttribute('data-id');
                        selectA.value = 'pk'; // default compare against Pakistan or US
                        if (targetId === 'pk') selectA.value = 'in';
                        selectB.value = targetId;

                        // Switch to duel tab
                        document.querySelector('[data-tab="tab-duel"]').click();
                        updateDuel(selectA.value, selectB.value);
                    });

                    tbody.appendChild(tr);
                });
            }

            // Matrix Sorting Event Listeners
            const tableHeaders = document.querySelectorAll('#leaderboardTable th[data-sort]');
            tableHeaders.forEach(th => {
                th.addEventListener('click', function () {
                    const col = this.getAttribute('data-sort');
                    if (currentSortColumn === col) {
                        sortAscending = !sortAscending;
                    } else {
                        currentSortColumn = col;
                        sortAscending = col === 'gfpRank' || col === 'name';
                    }

                    tableHeaders.forEach(h => {
                        const icon = h.querySelector('i');
                        if (icon) icon.className = 'fa-solid fa-sort';
                    });

                    const currentIcon = this.querySelector('i');
                    if (currentIcon) {
                        currentIcon.className = sortAscending ? 'fa-solid fa-sort-up' : 'fa-solid fa-sort-down';
                    }

                    renderMatrixTable();
                });
            });

            // Region Filter Event Listeners
            const filterButtons = document.querySelectorAll('#regionFilters .matrix-filter-btn');
            filterButtons.forEach(btn => {
                btn.addEventListener('click', function () {
                    filterButtons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentRegionFilter = this.getAttribute('data-filter');
                    renderMatrixTable();
                });
            });

            // Search Filter
            const searchInput = document.getElementById('countrySearchInput');
            if (searchInput) {
                searchInput.addEventListener('input', function () {
                    const term = this.value.toLowerCase().trim();
                    if (!term) {
                        renderMatrixTable();
                        return;
                    }
                    const matched = powers.find(p => p.name.toLowerCase().includes(term) || p.id.toLowerCase() === term);
                    if (matched) {
                        selectB.value = matched.id;
                        updateDuel(selectA.value, matched.id);
                    }
                });
            }

            // ==================== TAB 3: THEORIES ====================
            function renderTheories() {
                const container = document.getElementById('theoriesContainer');
                container.innerHTML = '';

                theories.forEach(theory => {
                    const card = document.createElement('div');
                    card.className = 'theory-card';

                    let elementsHtml = '';
                    theory.elements.forEach(el => {
                        elementsHtml += \`
                            <div class="elem-item">
                                <div class="elem-name"><i class="fa-solid fa-check-circle"></i> \${el.name}</div>
                                <div class="elem-desc">\${el.desc}</div>
                            </div>
                        \`;
                    });

                    card.innerHTML = \`
                        <div class="theory-badge-row">
                            <span class="theory-source-badge"><i class="fa-solid fa-landmark"></i> \${theory.source}</span>
                        </div>
                        <h3 class="theory-title">\${theory.title}</h3>
                        <p class="theory-concept">\${theory.concept}</p>
                        <div class="elements-grid">\${elementsHtml}</div>
                        <div class="exam-tip-box">
                            <strong><i class="fa-solid fa-graduation-cap"></i> CSS/PMS Examination Utility:</strong> \${theory.examRelevance}
                        </div>
                    \`;

                    container.appendChild(card);
                });
            }

            // ==================== TAB 4: PRACTICE MCQS ====================
            let answeredMCQs = {};

            function renderMCQs() {
                const container = document.getElementById('mcqListContainer');
                container.innerHTML = '';

                mcqs.forEach((mcq, idx) => {
                    const card = document.createElement('div');
                    card.className = 'mcq-card';
                    card.id = \`mcq-card-\${mcq.id}\`;

                    let optionsHtml = '';
                    const letters = ['A', 'B', 'C', 'D'];
                    mcq.options.forEach((opt, optIdx) => {
                        optionsHtml += \`
                            <button type="button" class="mcq-opt-btn" data-mcq="\${mcq.id}" data-opt="\${optIdx}">
                                <span class="mcq-opt-letter">\${letters[optIdx]}</span>
                                <span>\${opt}</span>
                            </button>
                        \`;
                    });

                    card.innerHTML = \`
                        <div class="mcq-q-header">
                            <span class="mcq-number-badge">\${idx + 1}</span>
                            <span>\${mcq.question}</span>
                        </div>
                        <div class="mcq-options-list">\${optionsHtml}</div>
                        <div class="mcq-explanation-box" id="mcq-exp-\${mcq.id}">
                            <strong><i class="fa-solid fa-circle-info"></i> Explanation:</strong> \${mcq.explanation}
                        </div>
                    \`;

                    container.appendChild(card);
                });

                // Option click handler
                container.querySelectorAll('.mcq-opt-btn').forEach(btn => {
                    btn.addEventListener('click', function () {
                        const mcqId = parseInt(this.getAttribute('data-mcq'), 10);
                        const chosenOpt = parseInt(this.getAttribute('data-opt'), 10);
                        if (answeredMCQs[mcqId] !== undefined) return;

                        const questionData = mcqs.find(q => q.id === mcqId);
                        const isCorrect = chosenOpt === questionData.answer;
                        answeredMCQs[mcqId] = isCorrect;

                        const parentCard = document.getElementById(\`mcq-card-\${mcqId}\`);
                        const allOpts = parentCard.querySelectorAll('.mcq-opt-btn');

                        allOpts.forEach((b, i) => {
                            b.disabled = true;
                            if (i === questionData.answer) {
                                b.classList.add('correct');
                            }
                        });

                        if (!isCorrect) {
                            this.classList.add('incorrect');
                            playSound('incorrect');
                        } else {
                            playSound('correct');
                        }

                        const expBox = document.getElementById(\`mcq-exp-\${mcqId}\`);
                        if (expBox) expBox.style.display = 'block';

                        updateQuizScore();
                    });
                });
            }

            function updateQuizScore() {
                const totalAnswered = Object.keys(answeredMCQs).length;
                let correctCount = 0;
                for (let k in answeredMCQs) {
                    if (answeredMCQs[k]) correctCount++;
                }
                const scoreDisplay = document.getElementById('quizScoreText');
                if (scoreDisplay) scoreDisplay.textContent = \`\${correctCount} / \${mcqs.length}\`;
            }

            const resetBtn = document.getElementById('quizResetBtn');
            if (resetBtn) {
                resetBtn.addEventListener('click', function () {
                    answeredMCQs = {};
                    renderMCQs();
                    updateQuizScore();
                });
            }

            // Initialize Everything
            updateDuel('us', 'cn');
            renderMatrixTable();
            renderTheories();
            renderMCQs();

            // Resize listener for radar canvas
            window.addEventListener('resize', drawRadarChart);

        })();
    </script>
</body>

</html>
`;

const outputPath = path.join(__dirname, '..', 'frontend', 'global-power-comparison.html');
fs.writeFileSync(outputPath, htmlContent.trim(), 'utf8');
console.log('Successfully wrote global-power-comparison.html. Size:', fs.statSync(outputPath).size, 'bytes');
