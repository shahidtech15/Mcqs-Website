const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/world-map.html');
const svgRaw = fs.readFileSync(path.join(__dirname, '../frontend/img/world-map.svg'), 'utf8');

const cleanSvg = svgRaw
  .replace(/<\?xml[\s\S]*?\?>/i, '')
  .replace(/<!DOCTYPE[\s\S]*?>/i, '')
  .trim();

const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Interactive World Map for CSS, PMS, FIA and Competitive Examinations. Click any country to explore its capital, currency, population, official language, political system, neighbouring countries, and international organizations.">
    <title>Interactive World Map &amp; Country Explorer — MCQs Portal</title>
    <!-- Anti-FOUC: apply dark mode before stylesheets paint -->
    <script>if(localStorage.getItem('mcqs_dark_mode')==='true')document.documentElement.classList.add('dark-mode');</script>
    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .map-portal-container {
            max-width: 1440px;
            margin: 0 auto;
            padding: 24px 20px 60px;
        }

        .map-hero {
            background: linear-gradient(135deg, #092c48 0%, #0f4c81 50%, #1e3a8a 100%);
            color: #ffffff;
            padding: 48px 0 36px;
            text-align: center;
            position: relative;
        }

        .map-hero h1 {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 10px;
            line-height: 1.25;
        }

        .map-hero p {
            font-size: 1.05rem;
            max-width: 900px;
            margin: 0 auto 20px;
            opacity: 0.94;
            line-height: 1.55;
        }

        .map-hero-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
        }

        .map-hero-chip {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.88rem;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 7px;
        }

        /* Filter Controls Card */
        .map-controls-card {
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 18px 24px;
            margin: -24px auto 24px;
            box-shadow: var(--card-shadow);
            position: relative;
            z-index: 5;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }

        .map-search-row {
            display: flex;
            gap: 14px;
            align-items: center;
            flex-wrap: wrap;
        }

        .map-search-box {
            flex: 1;
            min-width: 280px;
            position: relative;
        }

        .map-search-box input {
            width: 100%;
            padding: 11px 16px 11px 40px;
            border: 1px solid var(--border-color);
            border-radius: 10px;
            font-size: 0.95rem;
            background: var(--bg-color);
            color: var(--text-dark);
            outline: none;
            transition: var(--transition);
        }

        .map-search-box input:focus {
            border-color: #0284c7;
            box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .map-search-box i {
            position: absolute;
            left: 14px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-light);
            font-size: 1rem;
        }

        .search-results-dropdown {
            position: absolute;
            top: 105%;
            left: 0;
            right: 0;
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            max-height: 260px;
            overflow-y: auto;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            z-index: 100;
            display: none;
        }

        .search-item {
            padding: 10px 16px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-color);
            font-size: 0.9rem;
            color: var(--text-dark);
            transition: background 0.15s ease;
        }

        .search-item:hover {
            background: var(--bg-color);
            color: #0284c7;
        }

        .pills-group-label {
            font-size: 0.82rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            color: var(--text-light);
            margin-right: 8px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .pills-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .filter-pill {
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.84rem;
            font-weight: 600;
            color: var(--text-dark);
            cursor: pointer;
            transition: var(--transition);
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .filter-pill:hover {
            border-color: #0284c7;
            color: #0284c7;
            transform: translateY(-1px);
        }

        .filter-pill.active {
            background: #0284c7;
            border-color: #0284c7;
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(2, 132, 199, 0.35);
        }

        /* Map & Dossier Split Layout */
        .map-workspace-grid {
            display: grid;
            grid-template-columns: 1.65fr 1fr;
            gap: 24px;
            align-items: start;
        }

        /* Map Card & Viewport */
        .map-viewport-card {
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .map-viewport-header {
            padding: 12px 18px;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--bg-color);
            flex-wrap: wrap;
            gap: 10px;
        }

        .map-toolbar {
            display: flex;
            gap: 6px;
            align-items: center;
        }

        .map-tool-btn {
            background: var(--white);
            border: 1px solid var(--border-color);
            color: var(--text-dark);
            width: 34px;
            height: 34px;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 0.95rem;
            transition: var(--transition);
        }

        .map-tool-btn:hover {
            background: #0284c7;
            color: #ffffff;
            border-color: #0284c7;
        }

        .map-canvas-container {
            width: 100%;
            height: 540px;
            background: #09131f;
            position: relative;
            overflow: hidden;
            cursor: grab;
        }

        .map-canvas-container.grabbing {
            cursor: grabbing;
        }

        #worldMapSvgWrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.08s ease-out;
            transform-origin: 50% 50%;
        }

        #world-map {
            width: 100%;
            height: 100%;
            display: block;
        }

        /* Country SVG Styles */
        #world-map path,
        #world-map g {
            fill: #1e293b;
            stroke: #334155;
            stroke-width: 0.6;
            cursor: pointer;
            transition: fill 0.15s ease, stroke 0.15s ease;
        }

        #world-map path:hover,
        #world-map g:hover {
            fill: #10b981 !important;
            stroke: #ffffff !important;
            stroke-width: 1 !important;
        }

        #world-map path.active-country,
        #world-map g.active-country {
            fill: #f59e0b !important;
            stroke: #ffffff !important;
            stroke-width: 1.6 !important;
        }

        #world-map path.highlight-org,
        #world-map g.highlight-org {
            fill: #0ea5e9 !important;
            stroke: #7dd3fc !important;
            stroke-width: 0.8 !important;
        }

        #world-map path.highlight-neighbor,
        #world-map g.highlight-neighbor {
            fill: #8b5cf6 !important;
            stroke: #d8b4fe !important;
            stroke-width: 0.9 !important;
        }

        /* Hover Tooltip */
        .map-tooltip {
            position: absolute;
            pointer-events: none;
            background: rgba(15, 23, 42, 0.92);
            color: #ffffff;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.84rem;
            font-weight: 600;
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            display: none;
            transform: translate(-50%, -120%);
            white-space: nowrap;
        }

        /* Map Legend */
        .map-legend-bar {
            padding: 10px 18px;
            background: var(--bg-color);
            border-top: 1px solid var(--border-color);
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            font-size: 0.82rem;
            color: var(--text-light);
            align-items: center;
        }

        .legend-item {
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .legend-color {
            width: 14px;
            height: 14px;
            border-radius: 3px;
            display: inline-block;
        }

        /* Country Dossier / Intelligence Card */
        .dossier-card {
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 24px;
            box-shadow: var(--card-shadow);
            position: sticky;
            top: 20px;
        }

        .dossier-header {
            display: flex;
            align-items: center;
            gap: 14px;
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 16px;
            margin-bottom: 18px;
        }

        .dossier-flag {
            font-size: 2.8rem;
            line-height: 1;
        }

        .dossier-title-box h2 {
            margin: 0 0 4px;
            font-size: 1.45rem;
            font-weight: 800;
            color: var(--text-dark);
            line-height: 1.25;
        }

        .dossier-official-name {
            font-size: 0.86rem;
            color: var(--text-light);
            line-height: 1.35;
        }

        .dossier-badge-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 6px;
        }

        .dossier-badge {
            font-size: 0.76rem;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
            text-transform: uppercase;
        }

        /* Dossier Data Grid */
        .dossier-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 18px;
        }

        .dossier-field {
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 10px 12px;
        }

        .dossier-field.full-width {
            grid-column: 1 / -1;
        }

        .dossier-label {
            font-size: 0.76rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-light);
            margin-bottom: 3px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .dossier-val {
            font-size: 0.94rem;
            font-weight: 600;
            color: var(--text-dark);
            line-height: 1.4;
        }

        .neighbour-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 4px;
        }

        .neighbour-pill {
            background: #ede9fe;
            color: #6b21a8;
            border: 1px solid #ddd6fe;
            font-size: 0.8rem;
            font-weight: 600;
            padding: 3px 10px;
            border-radius: 14px;
            cursor: pointer;
            transition: var(--transition);
        }

        .neighbour-pill:hover {
            background: #6b21a8;
            color: #ffffff;
            transform: translateY(-1px);
        }

        .org-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 4px;
        }

        .org-tag {
            background: #e0f2fe;
            color: #0369a1;
            border: 1px solid #bae6fd;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: var(--transition);
        }

        .org-tag:hover {
            background: #0284c7;
            color: #ffffff;
        }

        .dossier-notes-box {
            background: rgba(16, 185, 129, 0.06);
            border-left: 3px solid #10b981;
            padding: 12px 14px;
            border-radius: 0 8px 8px 0;
            margin-bottom: 14px;
        }

        .dossier-notes-box h4 {
            font-size: 0.85rem;
            color: #065f46;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .dossier-notes-box p {
            font-size: 0.86rem;
            color: var(--text-dark);
            line-height: 1.5;
            margin: 0;
        }

        .dossier-hotspots-box {
            background: rgba(245, 158, 11, 0.08);
            border-left: 3px solid #f59e0b;
            padding: 12px 14px;
            border-radius: 0 8px 8px 0;
            margin-bottom: 18px;
        }

        .dossier-hotspots-box h4 {
            font-size: 0.85rem;
            color: #b45309;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .dossier-hotspots-box p {
            font-size: 0.86rem;
            color: var(--text-dark);
            line-height: 1.5;
            margin: 0;
        }

        .dossier-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .dossier-btn {
            flex: 1;
            min-width: 130px;
            padding: 9px 14px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.86rem;
            text-align: center;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            cursor: pointer;
            transition: var(--transition);
        }

        .dossier-btn-primary {
            background: #0284c7;
            color: #ffffff;
            border: 1px solid #0284c7;
        }

        .dossier-btn-primary:hover {
            background: #0369a1;
        }

        .dossier-btn-secondary {
            background: var(--bg-color);
            color: var(--text-dark);
            border: 1px solid var(--border-color);
        }

        .dossier-btn-secondary:hover {
            border-color: #0284c7;
            color: #0284c7;
        }

        /* Org Banner Card */
        .org-banner-card {
            background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%);
            color: #ffffff;
            border-radius: 12px;
            padding: 14px 20px;
            margin-bottom: 20px;
            display: none;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
        }

        @media (max-width: 1024px) {
            .map-workspace-grid {
                grid-template-columns: 1fr;
            }
            .map-canvas-container {
                height: 420px;
            }
            .dossier-card {
                position: static;
            }
        }
    </style>
</head>

<body>
    <!-- Navbar -->
    <header class="navbar">
        <div class="container">
            <div class="logo">
                <a href="index.html">
                    <img src="img/logo.png" alt="MCQs Portal Logo" class="site-logo">
                    <span>MCQs<span class="highlight">Portal</span></span>
                </a>
            </div>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="index.html#categories">Categories</a>
                <a href="quiz.html">Take a Quiz</a>
                <a href="world-map.html" class="active">World Map</a>
                <a href="digital-library.html">Digital Library</a>
                <a href="recommended-books.html">Recommended Books</a>
                <a href="fia-sample-papers.html">FIA Papers</a>
                <a href="grammar-rules.html">Grammar Rules</a>
                <a href="written-prep.html">Written Prep</a>
                <a href="exam-guide.html">Exam Guide</a>
                <a href="science-notes.html">Science Notes</a>
                <a href="admin.html" class="admin-link">Admin Panel</a>
            </nav>
            <button id="darkModeToggle" class="dark-mode-toggle" title="Toggle dark mode" aria-label="Toggle dark mode">
                <i class="fa-solid fa-moon"></i>
            </button>
            <div class="mobile-menu">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- Secondary Navbar -->
    <nav class="secondary-navbar" aria-label="Secondary Navigation">
        <div class="container">
            <ul class="secondary-nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="world-map.html" class="active" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-earth-americas"></i> Interactive World Map</a></li>
                <li><a href="digital-library.html"><i class="fa-solid fa-book-bookmark"></i> Digital Library &amp; Reports</a></li>
                <li><a href="recommended-books.html"><i class="fa-solid fa-book"></i> Recommended Books</a></li>
                <li><a href="fia-sample-papers.html"><i class="fa-solid fa-file-shield"></i> FIA AD 20 Sample Papers</a></li>
                <li><a href="grammar-rules.html"><i class="fa-solid fa-spell-check"></i> Grammar Rules</a></li>
                <li><a href="written-prep.html"><i class="fa-solid fa-pen-nib"></i> Essay &amp; Written Prep</a></li>
                <li><a href="exam-guide.html"><i class="fa-solid fa-book-open-reader"></i> Exam Guide (CSS/PMS)</a></li>
                <li><a href="science-notes.html">Science Capsule</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Header -->
    <section class="map-hero">
        <div class="container">
            <h1>🗺️ Interactive World Map &amp; Country Explorer</h1>
            <p>Click on any country to discover its capital, currency, population, official language, political system, neighbouring countries, and international organizations. Designed for CSS, PMS, and civil service geography preparation.</p>

            <div class="map-hero-chips">
                <span class="map-hero-chip"><i class="fa-solid fa-globe"></i> 180 Sovereign Nations &amp; Territories</span>
                <span class="map-hero-chip"><i class="fa-solid fa-building-columns"></i> Capitals &amp; Currencies</span>
                <span class="map-hero-chip"><i class="fa-solid fa-people-group"></i> Population &amp; Demographics</span>
                <span class="map-hero-chip"><i class="fa-solid fa-scale-balanced"></i> Political Systems &amp; Heads of State</span>
                <span class="map-hero-chip"><i class="fa-solid fa-handshake"></i> Neighbouring Countries (Interactive)</span>
                <span class="map-hero-chip"><i class="fa-solid fa-users-rays"></i> Bloc Highlighting: OIC, SCO, NATO, BRICS</span>
            </div>
        </div>
    </section>

    <!-- Main Workspace Container -->
    <div class="map-portal-container">
        <!-- Controls & Search Card -->
        <div class="map-controls-card">
            <div class="map-search-row">
                <div class="map-search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="countrySearchInput" placeholder="Search any country or capital (e.g., Pakistan, Ankara, Tokyo, Brasilia, France)..." autocomplete="off">
                    <div class="search-results-dropdown" id="searchResultsDropdown"></div>
                </div>
                <div style="font-size: 0.88rem; color: var(--text-light); font-weight: 500;">
                    <i class="fa-solid fa-computer-mouse"></i> Click country on map or search above
                </div>
            </div>

            <!-- Continent Filter Row -->
            <div class="pills-row">
                <span class="pills-group-label"><i class="fa-solid fa-earth-africa"></i> Continents:</span>
                <button class="filter-pill active" data-continent="all">All Continents</button>
                <button class="filter-pill" data-continent="Asia">Asia</button>
                <button class="filter-pill" data-continent="Europe">Europe</button>
                <button class="filter-pill" data-continent="Africa">Africa</button>
                <button class="filter-pill" data-continent="North America">North America</button>
                <button class="filter-pill" data-continent="South America">South America</button>
                <button class="filter-pill" data-continent="Oceania">Oceania</button>
            </div>

            <!-- Organization Highlighting Row -->
            <div class="pills-row">
                <span class="pills-group-label"><i class="fa-solid fa-sitemap"></i> Highlight Alliance / Bloc:</span>
                <button class="filter-pill" data-org="OIC"><i class="fa-solid fa-moon"></i> OIC</button>
                <button class="filter-pill" data-org="SCO"><i class="fa-solid fa-shield-halved"></i> SCO</button>
                <button class="filter-pill" data-org="SAARC"><i class="fa-solid fa-hands-holding"></i> SAARC</button>
                <button class="filter-pill" data-org="ECO"><i class="fa-solid fa-network-wired"></i> ECO</button>
                <button class="filter-pill" data-org="NATO"><i class="fa-solid fa-shield"></i> NATO</button>
                <button class="filter-pill" data-org="BRICS"><i class="fa-solid fa-cubes"></i> BRICS</button>
                <button class="filter-pill" data-org="G20"><i class="fa-solid fa-coins"></i> G20</button>
                <button class="filter-pill" data-org="EU"><i class="fa-solid fa-star"></i> EU</button>
                <button class="filter-pill" data-org="ASEAN"><i class="fa-solid fa-gem"></i> ASEAN</button>
                <button class="filter-pill" data-org="Commonwealth"><i class="fa-solid fa-crown"></i> Commonwealth</button>
                <button class="filter-pill" id="clearOrgFilterBtn" style="display:none; background:#fee2e2; color:#b91c1c; border-color:#fca5a5;"><i class="fa-solid fa-xmark"></i> Clear Highlight</button>
            </div>
        </div>

        <!-- Organization Active Banner -->
        <div class="org-banner-card" id="orgBannerCard">
            <div>
                <h3 id="orgBannerTitle" style="margin:0 0 4px; font-size:1.15rem; font-weight:700;"></h3>
                <p id="orgBannerDesc" style="margin:0; font-size:0.88rem; opacity:0.95;"></p>
            </div>
            <button id="orgBannerCloseBtn" style="background:rgba(255,255,255,0.2); border:1px solid rgba(255,255,255,0.4); color:#ffffff; padding:6px 14px; border-radius:20px; font-size:0.82rem; cursor:pointer;">
                <i class="fa-solid fa-xmark"></i> Reset Colors
            </button>
        </div>

        <!-- Split Map & Details Grid -->
        <div class="map-workspace-grid">
            <!-- Left: Interactive World Map -->
            <div class="map-viewport-card">
                <div class="map-viewport-header">
                    <div style="font-size:0.9rem; font-weight:700; color:var(--text-dark); display:flex; align-items:center; gap:8px;">
                        <i class="fa-solid fa-map-location-dot" style="color:#0284c7;"></i>
                        <span>Vector Map Canvas</span>
                        <span id="activeCountryIndicator" style="font-weight:500; font-size:0.84rem; color:var(--text-light); margin-left:6px;">(Selected: Pakistan)</span>
                    </div>
                    <div class="map-toolbar">
                        <button class="map-tool-btn" id="btnZoomIn" title="Zoom In"><i class="fa-solid fa-plus"></i></button>
                        <button class="map-tool-btn" id="btnZoomOut" title="Zoom Out"><i class="fa-solid fa-minus"></i></button>
                        <button class="map-tool-btn" id="btnResetView" title="Reset View"><i class="fa-solid fa-rotate-left"></i></button>
                    </div>
                </div>

                <div class="map-canvas-container" id="mapCanvasContainer">
                    <div id="worldMapSvgWrapper">
                        ${cleanSvg}
                    </div>
                    <!-- Tooltip -->
                    <div class="map-tooltip" id="mapTooltip"></div>
                </div>

                <!-- Legend -->
                <div class="map-legend-bar">
                    <span style="font-weight:700; color:var(--text-dark);">Legend:</span>
                    <span class="legend-item"><span class="legend-color" style="background:#f59e0b;"></span> Selected Country</span>
                    <span class="legend-item"><span class="legend-color" style="background:#8b5cf6;"></span> Neighbouring Border</span>
                    <span class="legend-item"><span class="legend-color" style="background:#0ea5e9;"></span> Active Org Member</span>
                    <span class="legend-item"><span class="legend-color" style="background:#10b981;"></span> Hover Preview</span>
                </div>
            </div>

            <!-- Right: Country Intelligence Dossier -->
            <aside class="dossier-card" id="countryDossier">
                <div class="dossier-header">
                    <div class="dossier-flag" id="dossierFlag">🇵🇰</div>
                    <div class="dossier-title-box">
                        <h2 id="dossierName">Pakistan</h2>
                        <div class="dossier-official-name" id="dossierOfficialName">Islamic Republic of Pakistan</div>
                        <div class="dossier-badge-row">
                            <span class="dossier-badge" style="background:#dbeafe; color:#1e40af;" id="dossierContinent">Asia</span>
                            <span class="dossier-badge" style="background:#d1fae5; color:#065f46;" id="dossierRegion">South Asia</span>
                            <span class="dossier-badge" style="background:#fef3c7; color:#92400e;" id="dossierIso">ISO: PK</span>
                        </div>
                    </div>
                </div>

                <!-- Data Grid -->
                <div class="dossier-grid">
                    <div class="dossier-field">
                        <div class="dossier-label"><i class="fa-solid fa-city" style="color:#0284c7;"></i> Capital City</div>
                        <div class="dossier-val" id="dossierCapital">Islamabad</div>
                    </div>
                    <div class="dossier-field">
                        <div class="dossier-label"><i class="fa-solid fa-coins" style="color:#f59e0b;"></i> Currency</div>
                        <div class="dossier-val" id="dossierCurrency">Pakistani Rupee (PKR, ₨)</div>
                    </div>
                    <div class="dossier-field">
                        <div class="dossier-label"><i class="fa-solid fa-people-group" style="color:#10b981;"></i> Population</div>
                        <div class="dossier-val" id="dossierPopulation">241.5 Million (2024 Census)</div>
                    </div>
                    <div class="dossier-field">
                        <div class="dossier-label"><i class="fa-solid fa-language" style="color:#6366f1;"></i> Official Language</div>
                        <div class="dossier-val" id="dossierLanguage">Urdu (National), English (Official)</div>
                    </div>
                    <div class="dossier-field full-width">
                        <div class="dossier-label"><i class="fa-solid fa-scale-balanced" style="color:#b91c1c;"></i> Political System &amp; Governance</div>
                        <div class="dossier-val" id="dossierGov" style="font-size:0.88rem; font-weight:500;">Federal Parliamentary Republic (Bicameral: Senate &amp; National Assembly)</div>
                        <div style="font-size:0.82rem; color:var(--text-light); margin-top:3px;" id="dossierHead">President (Head of State) &amp; Prime Minister (Chief Executive)</div>
                    </div>
                    <div class="dossier-field full-width">
                        <div class="dossier-label"><i class="fa-solid fa-handshake" style="color:#8b5cf6;"></i> Neighbouring Countries (Click to Explore)</div>
                        <div class="neighbour-pills" id="dossierNeighbours"></div>
                    </div>
                    <div class="dossier-field full-width">
                        <div class="dossier-label"><i class="fa-solid fa-network-wired" style="color:#0284c7;"></i> International Organizations &amp; Blocs</div>
                        <div class="org-tags" id="dossierOrgs"></div>
                    </div>
                </div>

                <!-- Strategic Civil Services Notes -->
                <div class="dossier-notes-box">
                    <h4><i class="fa-solid fa-compass"></i> Strategic Significance (Civil Services Context)</h4>
                    <p id="dossierSignificance">Strategic pivot connecting South Asia, Central Asia, and Middle East; Gwadar deep-sea port; flagship of CPEC/BRI; 6th largest military in the world; nuclear-armed state.</p>
                </div>

                <!-- Exam Hotspots -->
                <div class="dossier-hotspots-box">
                    <h4><i class="fa-solid fa-fire"></i> High-Yield Exam Hotspots &amp; Past MCQs</h4>
                    <p id="dossierHotspots">Longest river is Indus (~3,180 km); Highest peak is K2 (8,611m, 2nd highest in world); Radcliffe Line partitioned Punjab &amp; Bengal in 1947; Durand Line demarcated in 1893.</p>
                </div>

                <!-- Actions -->
                <div class="dossier-actions">
                    <a href="quiz.html?category=World%20Organizations" class="dossier-btn dossier-btn-primary">
                        <i class="fa-solid fa-play"></i> Practice World GK Quiz
                    </a>
                    <a href="digital-library.html" class="dossier-btn dossier-btn-secondary">
                        <i class="fa-solid fa-book-bookmark"></i> Maps in Digital Library
                    </a>
                </div>
            </aside>
        </div>
    </div>

    <!-- Universal Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo">
                        <img src="img/logo.png" alt="MCQs Portal Logo" class="site-logo">
                        <span>MCQs<span class="highlight">Portal</span></span>
                    </div>
                    <p>Pakistan's premier educational platform for competitive examinations: CSS, PMS, FIA, NAB, AAO, Judiciary, and General Recruitment tests.</p>
                </div>
                <div class="footer-col">
                    <h4>Civil Services Prep</h4>
                    <ul>
                        <li><a href="world-map.html">Interactive World Map</a></li>
                        <li><a href="digital-library.html">Digital Library &amp; Reports</a></li>
                        <li><a href="recommended-books.html">Recommended Books by Exam</a></li>
                        <li><a href="written-prep.html">Essay &amp; Written Preparation</a></li>
                        <li><a href="grammar-rules.html">Grammar &amp; Sentence Rules</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Practice Portals</h4>
                    <ul>
                        <li><a href="fia-sample-papers.html">FIA AD 20 Sample Papers</a></li>
                        <li><a href="quiz.html">Interactive Online Mock Quizzes</a></li>
                        <li><a href="science-notes.html">General Science Capsule</a></li>
                        <li><a href="index.html#categories">Subject-Wise MCQs</a></li>
                        <li><a href="about.html">About &amp; Editorial Standards</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 MCQs Portal Pakistan. All rights reserved. Built for competitive exam aspirants.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/data_world_countries.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const countries = window.WORLD_COUNTRIES_DATA || {};
            const svgWrapper = document.getElementById('worldMapSvgWrapper');
            const svgMap = document.getElementById('world-map');
            const mapContainer = document.getElementById('mapCanvasContainer');
            const tooltip = document.getElementById('mapTooltip');

            let currentCountryId = 'pk';
            let currentScale = 1;
            let currentTranslateX = 0;
            let currentTranslateY = 0;
            let isDragging = false;
            let startX, startY;
            let activeOrgFilter = null;

            // Transform update
            function updateSvgTransform() {
                if (svgWrapper) {
                    svgWrapper.style.transform = \`translate(\${currentTranslateX}px, \${currentTranslateY}px) scale(\${currentScale})\`;
                }
            }

            // Zoom Handlers
            document.getElementById('btnZoomIn').addEventListener('click', () => {
                currentScale = Math.min(currentScale * 1.3, 6);
                updateSvgTransform();
            });

            document.getElementById('btnZoomOut').addEventListener('click', () => {
                currentScale = Math.max(currentScale / 1.3, 0.7);
                updateSvgTransform();
            });

            document.getElementById('btnResetView').addEventListener('click', () => {
                currentScale = 1;
                currentTranslateX = 0;
                currentTranslateY = 0;
                updateSvgTransform();
            });

            // Pan / Drag Handlers
            mapContainer.addEventListener('mousedown', (e) => {
                // If clicked country element, don't drag immediately if it was click
                isDragging = true;
                startX = e.clientX - currentTranslateX;
                startY = e.clientY - currentTranslateY;
                mapContainer.classList.add('grabbing');
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                currentTranslateX = e.clientX - startX;
                currentTranslateY = e.clientY - startY;
                updateSvgTransform();
            });

            window.addEventListener('mouseup', () => {
                isDragging = false;
                mapContainer.classList.remove('grabbing');
            });

            // Wheel Zoom
            mapContainer.addEventListener('wheel', (e) => {
                e.preventDefault();
                const zoomFactor = e.deltaY < 0 ? 1.15 : 0.88;
                currentScale = Math.min(Math.max(currentScale * zoomFactor, 0.7), 6);
                updateSvgTransform();
            }, { passive: false });

            // Display Country Dossier
            function displayCountry(countryId) {
                if (!countryId) return;
                const id = countryId.toLowerCase();
                const c = countries[id];
                if (!c) return;

                currentCountryId = id;

                // Update text elements
                document.getElementById('dossierFlag').textContent = c.flag || '🌐';
                document.getElementById('dossierName').textContent = c.name;
                document.getElementById('dossierOfficialName').textContent = c.officialName || c.name;
                document.getElementById('dossierContinent').textContent = c.continent || 'Global';
                document.getElementById('dossierRegion').textContent = c.region || c.continent || 'Region';
                document.getElementById('dossierIso').textContent = 'ISO: ' + id.toUpperCase();
                document.getElementById('dossierCapital').textContent = c.capital;
                document.getElementById('dossierCurrency').textContent = c.currency;
                document.getElementById('dossierPopulation').textContent = c.population;
                document.getElementById('dossierLanguage').textContent = c.officialLanguage;
                document.getElementById('dossierGov').textContent = c.politicalSystem;
                document.getElementById('dossierHead').textContent = c.headOfState || '';
                document.getElementById('dossierSignificance').textContent = c.strategicSignificance || 'Key geopolitical entity.';
                document.getElementById('dossierHotspots').textContent = c.examHotspots || \`Capital: \${c.capital}, Currency: \${c.currency}.\`;
                document.getElementById('activeCountryIndicator').textContent = \`(Selected: \${c.name})\`;

                // Render Neighbours
                const neighboursContainer = document.getElementById('dossierNeighbours');
                if (neighboursContainer) {
                    if (c.neighbouringCountries && c.neighbouringCountries.length > 0) {
                        neighboursContainer.innerHTML = c.neighbouringCountries.map(n => \`
                            <span class="neighbour-pill" data-id="\${n.id || ''}">
                                \${n.name} \${n.border ? '(' + n.border + ')' : ''}
                            </span>
                        \`).join('');

                        // Hook neighbour clicks
                        neighboursContainer.querySelectorAll('.neighbour-pill').forEach(pill => {
                            pill.addEventListener('click', () => {
                                const nId = pill.getAttribute('data-id');
                                if (nId && countries[nId.toLowerCase()]) {
                                    selectCountry(nId.toLowerCase());
                                }
                            });
                        });
                    } else {
                        neighboursContainer.innerHTML = '<span style="font-size:0.82rem; color:var(--text-light); font-style:italic;">Island nation or no direct land borders.</span>';
                    }
                }

                // Render Organizations
                const orgsContainer = document.getElementById('dossierOrgs');
                if (orgsContainer) {
                    if (c.internationalOrgs && c.internationalOrgs.length > 0) {
                        orgsContainer.innerHTML = c.internationalOrgs.map(org => \`
                            <span class="org-tag" data-org="\${org}">\${org}</span>
                        \`).join('');

                        // Hook org tag click to trigger org highlight
                        orgsContainer.querySelectorAll('.org-tag').forEach(tag => {
                            tag.addEventListener('click', () => {
                                const orgName = tag.getAttribute('data-org');
                                highlightOrganization(orgName);
                            });
                        });
                    } else {
                        orgsContainer.innerHTML = '<span style="font-size:0.82rem; color:var(--text-light);">UN</span>';
                    }
                }

                // Update Map SVG highlights
                updateMapHighlights(id);
            }

            function updateMapHighlights(selectedId) {
                // Clear active and neighbor classes
                svgMap.querySelectorAll('.active-country').forEach(el => el.classList.remove('active-country'));
                svgMap.querySelectorAll('.highlight-neighbor').forEach(el => el.classList.remove('highlight-neighbor'));

                // Highlight selected country
                const selectedEl = svgMap.querySelector(\`#\${selectedId}\`);
                if (selectedEl) {
                    selectedEl.classList.add('active-country');
                }

                // Highlight neighbours
                const c = countries[selectedId];
                if (c && c.neighbouringCountries) {
                    c.neighbouringCountries.forEach(n => {
                        if (n.id) {
                            const nEl = svgMap.querySelector(\`#\${n.id.toLowerCase()}\`);
                            if (nEl && nEl !== selectedEl) {
                                nEl.classList.add('highlight-neighbor');
                            }
                        }
                    });
                }
            }

            function selectCountry(countryId) {
                displayCountry(countryId);
            }

            // Hook Country Clicks and Hovers on SVG
            const allCountryNodes = svgMap.querySelectorAll('path[id], g[id]');
            allCountryNodes.forEach(node => {
                const rawId = node.id.toLowerCase();
                if (rawId === 'world-map') return;

                node.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selectCountry(rawId);
                });

                node.addEventListener('mouseenter', (e) => {
                    const c = countries[rawId];
                    if (c) {
                        tooltip.innerHTML = \`\${c.flag || '🌐'} <strong>\${c.name}</strong> (\${c.capital})\`;
                        tooltip.style.display = 'block';
                    }
                });

                node.addEventListener('mousemove', (e) => {
                    const rect = mapContainer.getBoundingClientRect();
                    tooltip.style.left = (e.clientX - rect.left) + 'px';
                    tooltip.style.top = (e.clientY - rect.top) + 'px';
                });

                node.addEventListener('mouseleave', () => {
                    tooltip.style.display = 'none';
                });
            });

            // Organization Highlight Logic
            const orgMetadata = {
                "OIC": { title: "Organization of Islamic Cooperation (OIC)", desc: "57 Member States. Founded 1969 (Rabat). Headquarters in Jeddah, Saudi Arabia. Second largest intergovernmental organization after UN. Pakistan is a founding member." },
                "SCO": { title: "Shanghai Cooperation Organisation (SCO)", desc: "10 Member States (China, Russia, Pakistan, India, Iran, Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Belarus). HQ: Beijing. Focus: Regional security (RATS) and trade." },
                "SAARC": { title: "South Asian Association for Regional Cooperation (SAARC)", desc: "8 Member States (Pakistan, India, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives, Afghanistan). Founded 1985 (Dhaka). Secretariat in Kathmandu, Nepal." },
                "ECO": { title: "Economic Cooperation Organization (ECO)", desc: "10 Member States (Pakistan, Turkey, Iran, Azerbaijan, Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan, Tajikistan, Afghanistan). Founded 1985. HQ in Tehran, Iran." },
                "NATO": { title: "North Atlantic Treaty Organization (NATO)", desc: "32 Member States. Article 5 Collective Defense Treaty. Founded 1949. Headquarters in Brussels, Belgium." },
                "BRICS": { title: "BRICS Intergovernmental Alliance", desc: "10 Member States (Brazil, Russia, India, China, South Africa, Egypt, Ethiopia, Iran, UAE, Saudi Arabia). Counterweight to G7 and Bretton Woods institutions." },
                "G20": { title: "Group of Twenty (G20)", desc: "Premier forum for international economic cooperation representing 85% of global GDP and 75% of global trade." },
                "EU": { title: "European Union (EU)", desc: "27 Member States. Supranational political and economic union. Single market, Schengen Area, and Eurozone currency." },
                "ASEAN": { title: "Association of Southeast Asian Nations (ASEAN)", desc: "10 Member States (Indonesia, Malaysia, Thailand, Singapore, Philippines, Vietnam, Myanmar, Cambodia, Laos, Brunei). HQ: Jakarta, Indonesia." },
                "Commonwealth": { title: "Commonwealth of Nations", desc: "56 Member States mostly comprising territories of the former British Empire. Head: King Charles III. Secretariat in London." }
            };

            function highlightOrganization(orgName) {
                activeOrgFilter = orgName;

                // Clear previous org highlights
                svgMap.querySelectorAll('.highlight-org').forEach(el => el.classList.remove('highlight-org'));

                // Find all member countries
                let memberCount = 0;
                Object.keys(countries).forEach(cid => {
                    const c = countries[cid];
                    if (c && c.internationalOrgs && c.internationalOrgs.includes(orgName)) {
                        const el = svgMap.querySelector(\`#\${cid}\`);
                        if (el) {
                            el.classList.add('highlight-org');
                            memberCount++;
                        }
                    }
                });

                // Update UI Banner
                const banner = document.getElementById('orgBannerCard');
                const titleEl = document.getElementById('orgBannerTitle');
                const descEl = document.getElementById('orgBannerDesc');
                const clearBtn = document.getElementById('clearOrgFilterBtn');

                const meta = orgMetadata[orgName] || { title: orgName, desc: \`Alliance of \${memberCount} highlighted nations.\` };
                if (titleEl) titleEl.innerHTML = \`<i class="fa-solid fa-flag"></i> \${meta.title} (\${memberCount} States on Map)\`;
                if (descEl) descEl.textContent = meta.desc;
                if (banner) banner.style.display = 'flex';
                if (clearBtn) clearBtn.style.display = 'inline-flex';

                // Update active pill button
                document.querySelectorAll('.filter-pill[data-org]').forEach(btn => {
                    if (btn.getAttribute('data-org') === orgName) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }

            function clearOrganizationHighlight() {
                activeOrgFilter = null;
                svgMap.querySelectorAll('.highlight-org').forEach(el => el.classList.remove('highlight-org'));
                document.querySelectorAll('.filter-pill[data-org]').forEach(btn => btn.classList.remove('active'));
                const banner = document.getElementById('orgBannerCard');
                const clearBtn = document.getElementById('clearOrgFilterBtn');
                if (banner) banner.style.display = 'none';
                if (clearBtn) clearBtn.style.display = 'none';
            }

            // Hook Org Pills
            document.querySelectorAll('.filter-pill[data-org]').forEach(btn => {
                btn.addEventListener('click', () => {
                    const org = btn.getAttribute('data-org');
                    if (activeOrgFilter === org) {
                        clearOrganizationHighlight();
                    } else {
                        highlightOrganization(org);
                    }
                });
            });

            document.getElementById('clearOrgFilterBtn').addEventListener('click', clearOrganizationHighlight);
            document.getElementById('orgBannerCloseBtn').addEventListener('click', clearOrganizationHighlight);

            // Hook Continent Pills
            document.querySelectorAll('.filter-pill[data-continent]').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.filter-pill[data-continent]').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const cont = btn.getAttribute('data-continent');

                    if (cont === 'all') {
                        allCountryNodes.forEach(n => { n.style.opacity = '1'; });
                    } else {
                        allCountryNodes.forEach(n => {
                            const c = countries[n.id.toLowerCase()];
                            if (c && c.continent && c.continent.includes(cont)) {
                                n.style.opacity = '1';
                            } else {
                                n.style.opacity = '0.22';
                            }
                        });
                    }
                });
            });

            // Autocomplete Search Box
            const searchInput = document.getElementById('countrySearchInput');
            const dropdown = document.getElementById('searchResultsDropdown');

            if (searchInput && dropdown) {
                searchInput.addEventListener('input', (e) => {
                    const q = e.target.value.toLowerCase().trim();
                    if (!q) {
                        dropdown.style.display = 'none';
                        return;
                    }

                    const matches = Object.keys(countries).filter(id => {
                        const c = countries[id];
                        return (
                            c.name.toLowerCase().includes(q) ||
                            (c.capital && c.capital.toLowerCase().includes(q)) ||
                            id.toLowerCase() === q
                        );
                    });

                    if (matches.length === 0) {
                        dropdown.innerHTML = '<div style="padding:10px 14px; font-size:0.86rem; color:var(--text-light);">No country or capital found.</div>';
                        dropdown.style.display = 'block';
                        return;
                    }

                    dropdown.innerHTML = matches.slice(0, 8).map(id => {
                        const c = countries[id];
                        return \`
                            <div class="search-item" data-id="\${id}">
                                <span>\${c.flag || '🌐'} <strong>\${c.name}</strong></span>
                                <span style="font-size:0.8rem; color:var(--text-light);"><i class="fa-solid fa-city"></i> \${c.capital}</span>
                            </div>
                        \`;
                    }).join('');
                    dropdown.style.display = 'block';

                    dropdown.querySelectorAll('.search-item').forEach(item => {
                        item.addEventListener('click', () => {
                            const cId = item.getAttribute('data-id');
                            selectCountry(cId);
                            searchInput.value = countries[cId].name;
                            dropdown.style.display = 'none';
                        });
                    });
                });

                document.addEventListener('click', (e) => {
                    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
                        dropdown.style.display = 'none';
                    }
                });
            }

            // Dark Mode toggle
            const darkModeToggle = document.getElementById('darkModeToggle');
            if (darkModeToggle) {
                darkModeToggle.addEventListener('click', () => {
                    const isDark = document.body.classList.toggle('dark-mode');
                    document.documentElement.classList.toggle('dark-mode', isDark);
                    localStorage.setItem('mcqs_dark_mode', isDark ? 'true' : 'false');
                });
            }

            if (localStorage.getItem('mcqs_dark_mode') === 'true') {
                document.body.classList.add('dark-mode');
            }

            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');
            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }

            // Initial selection: Pakistan
            displayCountry('pk');
        });
    </script>
</body>

</html>
`;

fs.writeFileSync(targetPath, htmlContent, 'utf8');
console.log('Successfully generated frontend/world-map.html!');
