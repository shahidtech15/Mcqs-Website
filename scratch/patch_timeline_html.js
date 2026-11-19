const fs = require('fs');
const path = require('path');

const timelinePath = path.join(__dirname, '..', 'frontend', 'timeline.html');
let content = fs.readFileSync(timelinePath, 'utf8');

// 1. Add switcher bar right after <body> if not present
if (!content.includes('class="site-switcher-bar"')) {
  const switcherBar = `    <!-- Academic Top Switcher Bar -->
    <div class="site-switcher-bar" style="background:#090d16; border-bottom:1px solid #1e293b; padding:7px 16px; font-size:0.8rem; overflow-x:auto; white-space:nowrap;">
        <div style="max-width:1400px; margin:0 auto; display:flex; gap:12px; align-items:center;">
            <span style="color:#64748b; font-weight:700; text-transform:uppercase; font-size:0.7rem; letter-spacing:0.05em;"><i class="fas fa-layer-group"></i> Academic Suites:</span>
            <a href="pakistan-map.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-flag"></i> Pakistan Map</a>
            <a href="sindh-map.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-map-marked-alt"></i> Sindh Map</a>
            <a href="international-trade-routes-map.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-ship"></i> Trade Routes Map</a>
            <a href="geopolitical-hotspots-map.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-satellite-dish"></i> Hotspots Map</a>
            <a href="physical-geography-map.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-mountain-sun"></i> Physical Map</a>
            <a href="world-map.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-globe"></i> Political World Map</a>
            <a href="guess-the-country.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-gamepad"></i> Guess Country</a>
            <a href="locate-on-map.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-crosshairs"></i> Locate on Map</a>
            <a href="match-the-following.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-puzzle-piece"></i> Match Items</a>
            <a href="arrange-chronologically.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-arrow-down-1-9"></i> Chronology Quiz</a>
            <a href="crossword.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-chess-board"></i> Crossword</a>
            <a href="word-search.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-magnifying-glass"></i> Word Search</a>
            <a href="unsc-simulator.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-scale-balanced"></i> UNSC Simulator</a>
            <a href="international-organizations-explorer.html" style="color:#94a3b8; text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:500;"><i class="fas fa-sitemap"></i> Org Explorer</a>
            <a href="world-history-timeline.html" style="color:#818cf8; background:rgba(129,140,248,0.15); text-decoration:none; padding:4px 9px; border-radius:6px; font-weight:700;"><i class="fas fa-timeline"></i> World Timeline</a>
        </div>
    </div>`;
  content = content.replace('<body>', `<body>\n${switcherBar}`);
}

// 2. Add prominent promotional banner in hero
if (!content.includes('href="world-history-timeline.html"') && content.includes('<div class="timeline-hero-stats">')) {
  const promoBanner = `<div style="background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.3); border-radius:12px; padding:12px 18px; margin-top:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <strong style="color:#ffffff; font-size:1.05rem;"><i class="fa-solid fa-earth-americas"></i> New: World History Timeline (3500 BCE – 2026)</strong>
                    <p style="margin:4px 0 0; color:#c7d2fe; font-size:0.88rem;">Explore 85+ global watershed milestones with dedicated filters for wars, revolutions, treaties, discoveries, and political developments.</p>
                </div>
                <a href="world-history-timeline.html" style="background:#ffffff; color:#312e81; font-weight:800; font-size:0.85rem; padding:8px 16px; border-radius:8px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; box-shadow:0 4px 12px rgba(0,0,0,0.15);"><i class="fa-solid fa-play"></i> Launch World Timeline &rarr;</a>
            </div>`;
  content = content.replace('<div class="timeline-hero-stats">', `${promoBanner}\n            <div class="timeline-hero-stats">`);
}

fs.writeFileSync(timelinePath, content, 'utf8');
console.log('Successfully patched timeline.html');
