const fs = require('fs');

// 1. Update geopolitical-hotspots-map.html
let geoHtml = fs.readFileSync('frontend/geopolitical-hotspots-map.html', 'utf8');

if (!geoHtml.includes('international-trade-routes-map.html')) {
    // Top Switcher Bar
    const oldSwitcher = `<div class="switcher-links">
            <a href="geopolitical-hotspots-map.html" class="switcher-btn active">
                <i class="fas fa-satellite-dish"></i> Geopolitical Hotspots Map
            </a>
            <a href="physical-geography-map.html" class="switcher-btn">
                <i class="fas fa-mountain-sun"></i> Physical Geography Map
            </a>
            <a href="world-map.html" class="switcher-btn">
                <i class="fas fa-globe"></i> Political World Map
            </a>
        </div>`;

    const newSwitcher = `<div class="switcher-links">
            <a href="international-trade-routes-map.html" class="switcher-btn">
                <i class="fas fa-ship"></i> Trade Routes Map
            </a>
            <a href="geopolitical-hotspots-map.html" class="switcher-btn active">
                <i class="fas fa-satellite-dish"></i> Geopolitical Hotspots Map
            </a>
            <a href="physical-geography-map.html" class="switcher-btn">
                <i class="fas fa-mountain-sun"></i> Physical Geography Map
            </a>
            <a href="world-map.html" class="switcher-btn">
                <i class="fas fa-globe"></i> Political World Map
            </a>
        </div>`;
    geoHtml = geoHtml.replace(oldSwitcher, newSwitcher);

    // Nav-links
    geoHtml = geoHtml.replace(
        '<a href="geopolitical-hotspots-map.html" class="active"',
        '<a href="international-trade-routes-map.html" style="color: #0284c7; font-weight: 700;"><i class="fas fa-ship"></i> Trade Routes</a>\n                <a href="geopolitical-hotspots-map.html" class="active"'
    );

    // Footer
    geoHtml = geoHtml.replace(
        '<a href="geopolitical-hotspots-map.html">Hotspots Map</a>',
        '<a href="international-trade-routes-map.html">Trade Routes Map</a>\n            <a href="geopolitical-hotspots-map.html">Hotspots Map</a>'
    );

    fs.writeFileSync('frontend/geopolitical-hotspots-map.html', geoHtml, 'utf8');
    console.log('Updated geopolitical-hotspots-map.html');
}

// 2. Update physical-geography-map.html
let physHtml = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');

if (!physHtml.includes('international-trade-routes-map.html')) {
    // Switcher links
    const oldSwitcher = `<div class="switcher-links">
            <a href="geopolitical-hotspots-map.html" class="switcher-btn">
                <i class="fas fa-satellite-dish"></i> Geopolitical Hotspots Map
            </a>
            <a href="physical-geography-map.html" class="switcher-btn active">
                <i class="fas fa-mountain-sun"></i> Physical Geography Map
            </a>
            <a href="world-map.html" class="switcher-btn">
                <i class="fas fa-globe"></i> Political World Map
            </a>
        </div>`;

    const newSwitcher = `<div class="switcher-links">
            <a href="international-trade-routes-map.html" class="switcher-btn">
                <i class="fas fa-ship"></i> Trade Routes Map
            </a>
            <a href="geopolitical-hotspots-map.html" class="switcher-btn">
                <i class="fas fa-satellite-dish"></i> Geopolitical Hotspots Map
            </a>
            <a href="physical-geography-map.html" class="switcher-btn active">
                <i class="fas fa-mountain-sun"></i> Physical Geography Map
            </a>
            <a href="world-map.html" class="switcher-btn">
                <i class="fas fa-globe"></i> Political World Map
            </a>
        </div>`;
    physHtml = physHtml.replace(oldSwitcher, newSwitcher);

    // Nav-links
    physHtml = physHtml.replace(
        '<a href="geopolitical-hotspots-map.html"',
        '<a href="international-trade-routes-map.html" style="color: #0284c7; font-weight: 700;"><i class="fas fa-ship"></i> Trade Routes</a>\n                <a href="geopolitical-hotspots-map.html"'
    );

    // Footer
    physHtml = physHtml.replace(
        '<a href="geopolitical-hotspots-map.html">Hotspots Map</a>',
        '<a href="international-trade-routes-map.html">Trade Routes Map</a>\n            <a href="geopolitical-hotspots-map.html">Hotspots Map</a>'
    );

    fs.writeFileSync('frontend/physical-geography-map.html', physHtml, 'utf8');
    console.log('Updated physical-geography-map.html');
}

// 3. Update world-map.html
let worldHtml = fs.readFileSync('frontend/world-map.html', 'utf8');

if (!worldHtml.includes('international-trade-routes-map.html')) {
    // Side nav
    worldHtml = worldHtml.replace(
        '<li><a href="geopolitical-hotspots-map.html"',
        '<li><a href="international-trade-routes-map.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-ship"></i> International Trade Routes Map</a></li>\n                <li><a href="geopolitical-hotspots-map.html"'
    );

    // Banner
    worldHtml = worldHtml.replace(
        '<a href="geopolitical-hotspots-map.html"',
        '<a href="international-trade-routes-map.html" style="background: #0284c7; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);"><i class="fa-solid fa-ship"></i> Trade Routes Map &rarr;</a>\n                <a href="geopolitical-hotspots-map.html"'
    );

    // Footer
    worldHtml = worldHtml.replace(
        '<a href="geopolitical-hotspots-map.html">Hotspots Map</a>',
        '<a href="international-trade-routes-map.html">Trade Routes Map</a>\n            <a href="geopolitical-hotspots-map.html">Hotspots Map</a>'
    );

    fs.writeFileSync('frontend/world-map.html', worldHtml, 'utf8');
    console.log('Updated world-map.html');
}

// 4. Update index.html
let indexHtml = fs.readFileSync('frontend/index.html', 'utf8');

if (!indexHtml.includes('international-trade-routes-map.html')) {
    // Header nav
    indexHtml = indexHtml.replace(
        '<a href="geopolitical-hotspots-map.html"',
        '<a href="international-trade-routes-map.html" style="font-weight:700; color:#0284c7;"><i class="fa-solid fa-ship"></i> Trade Routes <span style="background:#0284c7; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="geopolitical-hotspots-map.html"'
    );

    // Mobile nav
    indexHtml = indexHtml.replace(
        '<li><a href="geopolitical-hotspots-map.html"',
        '<li><a href="international-trade-routes-map.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-ship"></i> International Trade Routes Map</a></li>\n                <li><a href="geopolitical-hotspots-map.html"'
    );

    // Search chip
    indexHtml = indexHtml.replace(
        '<button type="button" class="search-chip" onclick="window.location.href=\'geopolitical-hotspots-map.html\'"',
        '<button type="button" class="search-chip" onclick="window.location.href=\'international-trade-routes-map.html\'" style="font-weight:700; border-color:#0284c7; color:#0284c7; background: rgba(2, 132, 199, 0.05);"><i class="fa-solid fa-ship"></i> International Trade Routes Map (Hormuz, Suez, Malacca, Panama &amp; Shipping Lanes)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href=\'geopolitical-hotspots-map.html\'"'
    );

    // Resource card after Geopolitical Hotspots Card
    const hotspotsCardEnd = 'Launch Geopolitical Hotspots Map</a>\n                    </div>\n                </div>';
    const tradeCard = `\n                <!-- International Trade Routes Map Card -->
                <div class="resource-card" style="border: 1px solid rgba(2, 132, 199, 0.4); background: linear-gradient(135deg, rgba(2, 132, 199, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(2, 132, 199, 0.2); color: #0284c7;"><i class="fa-solid fa-ship"></i></div>
                    <div class="resource-content">
                        <h3>🚢 International Trade Routes &amp; Maritime Chokepoints Map</h3>
                        <p>Explore the Strait of Hormuz, Suez Canal, Panama Canal, Strait of Malacca, Bab-el-Mandeb, transoceanic container shipping highways, and global megaports with interactive voyage simulators, daily oil transit flows, and examination dossiers.</p>
                        <div class="resource-meta"><span style="color:#0284c7;"><i class="fa-solid fa-anchor"></i> 13 Chokepoints &bull; 8 Shipping Lanes</span> <span>⭐ Voyage Simulator</span></div>
                        <a href="international-trade-routes-map.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-ship"></i> Launch Trade Routes Map</a>
                    </div>
                </div>`;

    indexHtml = indexHtml.replace(hotspotsCardEnd, hotspotsCardEnd + tradeCard);

    // Footer academic link
    indexHtml = indexHtml.replace(
        '<li><a href="geopolitical-hotspots-map.html"',
        '<li><a href="international-trade-routes-map.html" style="color: #38bdf8; font-weight: 700; text-decoration: none;"><i class="fas fa-angle-right" style="color: #38bdf8; margin-right: 6px;"></i>International Trade Routes Map (Hormuz, Suez, Malacca)</a></li>\n                    <li><a href="geopolitical-hotspots-map.html"'
    );

    fs.writeFileSync('frontend/index.html', indexHtml, 'utf8');
    console.log('Updated index.html');
}

// 5. Update sitemap.xml
let sitemap = fs.readFileSync('frontend/sitemap.xml', 'utf8');
if (!sitemap.includes('international-trade-routes-map.html')) {
    const sitemapEntry = `  <url>
    <loc>https://cssprepcentral.com/international-trade-routes-map.html</loc>
    <lastmod>2026-11-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
`;
    sitemap = sitemap.replace('</urlset>', sitemapEntry + '</urlset>');
    fs.writeFileSync('frontend/sitemap.xml', sitemap, 'utf8');
    console.log('Updated sitemap.xml');
}
