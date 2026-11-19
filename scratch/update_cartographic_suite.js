const fs = require('fs');

// Helper to build 6-map switcher links
function getSwitcherLinks(activePage) {
    const maps = [
        { href: "pakistan-map.html", title: "Pakistan Map", icon: "fa-flag", highlight: "#047857" },
        { href: "sindh-map.html", title: "Sindh Map", icon: "fa-map-marked-alt", highlight: "#059669" },
        { href: "international-trade-routes-map.html", title: "Trade Routes", icon: "fa-ship", highlight: "#0284c7" },
        { href: "geopolitical-hotspots-map.html", title: "Hotspots Map", icon: "fa-satellite-dish", highlight: "#e11d48" },
        { href: "physical-geography-map.html", title: "Physical Map", icon: "fa-mountain-sun", highlight: "#0284c7" },
        { href: "world-map.html", title: "Political World Map", icon: "fa-globe", highlight: "#0284c7" }
    ];

    return `<div class="switcher-links">` + maps.map(m => {
        const isActive = m.href === activePage ? ' active' : '';
        return `
            <a href="${m.href}" class="switcher-btn${isActive}">
                <i class="fas ${m.icon}"></i> ${m.title}
            </a>`;
    }).join('') + `\n        </div>`;
}

// 1. Update international-trade-routes-map.html
let tradeHtml = fs.readFileSync('frontend/international-trade-routes-map.html', 'utf8');
const oldTradeSwitcher = tradeHtml.match(/<div class="switcher-links">[\s\S]*?<\/div>/);
if (oldTradeSwitcher) {
    tradeHtml = tradeHtml.replace(oldTradeSwitcher[0], getSwitcherLinks('international-trade-routes-map.html'));
    // update nav links
    if (!tradeHtml.includes('pakistan-map.html')) {
        tradeHtml = tradeHtml.replace(
            '<a href="international-trade-routes-map.html" class="active"',
            '<a href="pakistan-map.html" style="color:#047857; font-weight:700;"><i class="fas fa-flag"></i> Pakistan Map</a>\n                <a href="sindh-map.html" style="color:#059669; font-weight:700;"><i class="fas fa-map-marked-alt"></i> Sindh Map</a>\n                <a href="international-trade-routes-map.html" class="active"'
        );
    }
    // update footer links
    if (!tradeHtml.includes('<a href="pakistan-map.html">Pakistan Map</a>')) {
        tradeHtml = tradeHtml.replace(
            '<a href="international-trade-routes-map.html">Trade Routes Map</a>',
            '<a href="pakistan-map.html">Pakistan Map</a>\n            <a href="sindh-map.html">Sindh Map</a>\n            <a href="international-trade-routes-map.html">Trade Routes Map</a>'
        );
    }
    fs.writeFileSync('frontend/international-trade-routes-map.html', tradeHtml, 'utf8');
    console.log('Updated international-trade-routes-map.html');
}

// 2. Update geopolitical-hotspots-map.html
let geoHtml = fs.readFileSync('frontend/geopolitical-hotspots-map.html', 'utf8');
const oldGeoSwitcher = geoHtml.match(/<div class="switcher-links">[\s\S]*?<\/div>/);
if (oldGeoSwitcher) {
    geoHtml = geoHtml.replace(oldGeoSwitcher[0], getSwitcherLinks('geopolitical-hotspots-map.html'));
    if (!geoHtml.includes('pakistan-map.html')) {
        geoHtml = geoHtml.replace(
            '<a href="international-trade-routes-map.html"',
            '<a href="pakistan-map.html" style="color:#047857; font-weight:700;"><i class="fas fa-flag"></i> Pakistan Map</a>\n                <a href="sindh-map.html" style="color:#059669; font-weight:700;"><i class="fas fa-map-marked-alt"></i> Sindh Map</a>\n                <a href="international-trade-routes-map.html"'
        );
    }
    if (!geoHtml.includes('<a href="pakistan-map.html">Pakistan Map</a>')) {
        geoHtml = geoHtml.replace(
            '<a href="international-trade-routes-map.html">Trade Routes Map</a>',
            '<a href="pakistan-map.html">Pakistan Map</a>\n            <a href="sindh-map.html">Sindh Map</a>\n            <a href="international-trade-routes-map.html">Trade Routes Map</a>'
        );
    }
    fs.writeFileSync('frontend/geopolitical-hotspots-map.html', geoHtml, 'utf8');
    console.log('Updated geopolitical-hotspots-map.html');
}

// 3. Update physical-geography-map.html
let physHtml = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');
const oldPhysSwitcher = physHtml.match(/<div class="switcher-links">[\s\S]*?<\/div>/);
if (oldPhysSwitcher) {
    physHtml = physHtml.replace(oldPhysSwitcher[0], getSwitcherLinks('physical-geography-map.html'));
    if (!physHtml.includes('pakistan-map.html')) {
        physHtml = physHtml.replace(
            '<a href="international-trade-routes-map.html"',
            '<a href="pakistan-map.html" style="color:#047857; font-weight:700;"><i class="fas fa-flag"></i> Pakistan Map</a>\n                <a href="sindh-map.html" style="color:#059669; font-weight:700;"><i class="fas fa-map-marked-alt"></i> Sindh Map</a>\n                <a href="international-trade-routes-map.html"'
        );
    }
    if (!physHtml.includes('<a href="pakistan-map.html">Pakistan Map</a>')) {
        physHtml = physHtml.replace(
            '<a href="international-trade-routes-map.html">Trade Routes Map</a>',
            '<a href="pakistan-map.html">Pakistan Map</a>\n            <a href="sindh-map.html">Sindh Map</a>\n            <a href="international-trade-routes-map.html">Trade Routes Map</a>'
        );
    }
    fs.writeFileSync('frontend/physical-geography-map.html', physHtml, 'utf8');
    console.log('Updated physical-geography-map.html');
}

// 4. Update world-map.html
let worldHtml = fs.readFileSync('frontend/world-map.html', 'utf8');
if (!worldHtml.includes('pakistan-map.html')) {
    // side nav
    worldHtml = worldHtml.replace(
        '<li><a href="international-trade-routes-map.html"',
        '<li><a href="pakistan-map.html" style="font-weight: 700; color: #047857;"><i class="fa-solid fa-flag"></i> Pakistan Geography Map</a></li>\n                <li><a href="sindh-map.html" style="font-weight: 700; color: #059669;"><i class="fa-solid fa-map-marked-alt"></i> Dedicated Sindh Map</a></li>\n                <li><a href="international-trade-routes-map.html"'
    );
    // banner
    worldHtml = worldHtml.replace(
        '<a href="international-trade-routes-map.html"',
        '<a href="pakistan-map.html" style="background: #047857; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(4, 120, 87, 0.25);"><i class="fa-solid fa-flag"></i> Pakistan Map &rarr;</a>\n                <a href="sindh-map.html" style="background: #059669; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);"><i class="fa-solid fa-map-marked-alt"></i> Sindh Map &rarr;</a>\n                <a href="international-trade-routes-map.html"'
    );
    // footer
    worldHtml = worldHtml.replace(
        '<a href="international-trade-routes-map.html">Trade Routes Map</a>',
        '<a href="pakistan-map.html">Pakistan Map</a>\n            <a href="sindh-map.html">Sindh Map</a>\n            <a href="international-trade-routes-map.html">Trade Routes Map</a>'
    );
    fs.writeFileSync('frontend/world-map.html', worldHtml, 'utf8');
    console.log('Updated world-map.html');
}

// 5. Update index.html
let indexHtml = fs.readFileSync('frontend/index.html', 'utf8');
if (!indexHtml.includes('pakistan-map.html')) {
    // Header nav
    indexHtml = indexHtml.replace(
        '<a href="international-trade-routes-map.html"',
        '<a href="pakistan-map.html" style="font-weight:700; color:#047857;"><i class="fa-solid fa-flag"></i> Pakistan Map <span style="background:#047857; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="sindh-map.html" style="font-weight:700; color:#059669;"><i class="fa-solid fa-map-marked-alt"></i> Sindh Map</a>\n                <a href="international-trade-routes-map.html"'
    );

    // Mobile nav
    indexHtml = indexHtml.replace(
        '<li><a href="international-trade-routes-map.html"',
        '<li><a href="pakistan-map.html" style="font-weight: 700; color: #047857;"><i class="fa-solid fa-flag"></i> Pakistan Geography Map</a></li>\n                <li><a href="sindh-map.html" style="font-weight: 700; color: #059669;"><i class="fa-solid fa-map-marked-alt"></i> Dedicated Sindh Map</a></li>\n                <li><a href="international-trade-routes-map.html"'
    );

    // Search chips
    indexHtml = indexHtml.replace(
        '<button type="button" class="search-chip" onclick="window.location.href=\'international-trade-routes-map.html\'"',
        '<button type="button" class="search-chip" onclick="window.location.href=\'pakistan-map.html\'" style="font-weight:700; border-color:#047857; color:#047857; background: rgba(4, 120, 87, 0.05);"><i class="fa-solid fa-flag"></i> Pakistan &amp; Provincial Geography Map (Provinces, Rivers, Dams &amp; Heritage)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href=\'sindh-map.html\'" style="font-weight:700; border-color:#059669; color:#059669; background: rgba(5, 150, 105, 0.05);"><i class="fa-solid fa-map-marked-alt"></i> Dedicated Sindh Map (30 Districts, Barrages, Lakes &amp; SPSC)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href=\'international-trade-routes-map.html\'"'
    );

    // Resource Cards after Trade Routes card
    const tradeCardEnd = 'Launch Trade Routes Map</a>\n                    </div>\n                </div>';
    const pakCards = `\n                <!-- Pakistan Geography Map Card -->
                <div class="resource-card" style="border: 1px solid rgba(4, 120, 87, 0.4); background: linear-gradient(135deg, rgba(4, 120, 87, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(4, 120, 87, 0.2); color: #047857;"><i class="fa-solid fa-flag"></i></div>
                    <div class="resource-content">
                        <h3>🇵🇰 Interactive Pakistan &amp; Provincial Geography Map</h3>
                        <p>Explore all 4 provinces, administrative territories, major divisions, Indus river basin tributaries, mega dams (Tarbela, Mangla, Diamer-Bhasha), national parks (Hingol, Deosai), and UNESCO World Heritage sites with CSS examination dossiers.</p>
                        <div class="resource-meta"><span style="color:#047857;"><i class="fa-solid fa-map"></i> 62 National Features</span> <span>⭐ 2023 Census Data</span></div>
                        <a href="pakistan-map.html" class="resource-btn" style="background: #047857; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-flag"></i> Launch Pakistan Map</a>
                    </div>
                </div>
                <!-- Dedicated Sindh Map Card -->
                <div class="resource-card" style="border: 1px solid rgba(5, 150, 105, 0.4); background: linear-gradient(135deg, rgba(5, 150, 105, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(5, 150, 105, 0.2); color: #059669;"><i class="fa-solid fa-map-marked-alt"></i></div>
                    <div class="resource-content">
                        <h3>🌿 Dedicated Sindh Provincial &amp; SPSC Map</h3>
                        <p>Dedicated cartographic portal for SPSC, CCE, and Sindh aspirants: click all 7 divisions, 30 districts, 3 Indus barrages (Sukkur, Guddu, Kotri), Manchar and Keenjhar lakes, Mohenjo-Daro, and revered Sufi shrines with SPSC exam dossiers.</p>
                        <div class="resource-meta"><span style="color:#059669;"><i class="fa-solid fa-city"></i> 30 Districts &bull; 7 Divisions</span> <span>⭐ SPSC CCE Hub</span></div>
                        <a href="sindh-map.html" class="resource-btn" style="background: #059669; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-map-marked-alt"></i> Launch Sindh Map</a>
                    </div>
                </div>`;

    indexHtml = indexHtml.replace(tradeCardEnd, tradeCardEnd + pakCards);

    // Footer academic links
    indexHtml = indexHtml.replace(
        '<li><a href="international-trade-routes-map.html"',
        '<li><a href="pakistan-map.html" style="color: #6ee7b7; font-weight: 700; text-decoration: none;"><i class="fas fa-angle-right" style="color: #6ee7b7; margin-right: 6px;"></i>Pakistan Geography Map (Provinces, Rivers, Dams)</a></li>\n                    <li><a href="sindh-map.html" style="color: #34d399; font-weight: 700; text-decoration: none;"><i class="fas fa-angle-right" style="color: #34d399; margin-right: 6px;"></i>Dedicated Sindh Map (30 Districts, SPSC CCE)</a></li>\n                    <li><a href="international-trade-routes-map.html"'
    );

    fs.writeFileSync('frontend/index.html', indexHtml, 'utf8');
    console.log('Updated index.html');
}

// 6. Update sitemap.xml
let sitemap = fs.readFileSync('frontend/sitemap.xml', 'utf8');
if (!sitemap.includes('pakistan-map.html')) {
    const sitemapEntries = `  <url>
    <loc>https://cssprepcentral.com/pakistan-map.html</loc>
    <lastmod>2026-11-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://cssprepcentral.com/sindh-map.html</loc>
    <lastmod>2026-11-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
`;
    sitemap = sitemap.replace('</urlset>', sitemapEntries + '</urlset>');
    fs.writeFileSync('frontend/sitemap.xml', sitemap, 'utf8');
    console.log('Updated sitemap.xml');
}
