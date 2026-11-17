const fs = require('fs');

// 1. Update frontend/physical-geography-map.html
let physHtml = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');

// Update switcher bar in physical-geography-map.html
if (physHtml.includes('<a href="physical-geography-map.html" class="switcher-btn active">') && !physHtml.includes('geopolitical-hotspots-map.html')) {
    const oldSwitcher = `<div class="switcher-links">
            <a href="physical-geography-map.html" class="switcher-btn active">
                <i class="fas fa-mountain-sun"></i> Physical Geography Map
            </a>
            <a href="world-map.html" class="switcher-btn">
                <i class="fas fa-globe"></i> Political World Map &amp; Countries
            </a>
        </div>`;

    const newSwitcher = `<div class="switcher-links">
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

    // Add Hotspots Map to nav-links
    const oldNav = `<a href="index.html">Home</a>
                <a href="physical-geography-map.html" class="active" style="color: #0284c7; font-weight: 800;"><i class="fas fa-mountain-sun"></i> Physical Map</a>
                <a href="world-map.html"><i class="fas fa-globe"></i> Political Map</a>`;

    const newNav = `<a href="index.html">Home</a>
                <a href="geopolitical-hotspots-map.html" style="color: #e11d48; font-weight: 700;"><i class="fas fa-satellite-dish"></i> Hotspots Map</a>
                <a href="physical-geography-map.html" class="active" style="color: #0284c7; font-weight: 800;"><i class="fas fa-mountain-sun"></i> Physical Map</a>
                <a href="world-map.html"><i class="fas fa-globe"></i> Political Map</a>`;

    physHtml = physHtml.replace(oldNav, newNav);

    // Add to footer links
    physHtml = physHtml.replace(
        '<a href="physical-geography-map.html">Physical Map</a>',
        '<a href="geopolitical-hotspots-map.html">Hotspots Map</a>\n            <a href="physical-geography-map.html">Physical Map</a>'
    );

    fs.writeFileSync('frontend/physical-geography-map.html', physHtml, 'utf8');
    console.log('Updated frontend/physical-geography-map.html');
}

// 2. Update frontend/world-map.html
let worldHtml = fs.readFileSync('frontend/world-map.html', 'utf8');

if (!worldHtml.includes('geopolitical-hotspots-map.html')) {
    // Add to side nav
    worldHtml = worldHtml.replace(
        '<li><a href="physical-geography-map.html" style="font-weight: 700; color: #059669;"><i class="fa-solid fa-mountain-sun"></i> Physical Geography Map</a></li>',
        '<li><a href="geopolitical-hotspots-map.html" style="font-weight: 700; color: #e11d48;"><i class="fa-solid fa-satellite-dish"></i> Geopolitical Hotspots Map</a></li>\n                <li><a href="physical-geography-map.html" style="font-weight: 700; color: #059669;"><i class="fa-solid fa-mountain-sun"></i> Physical Geography Map</a></li>'
    );

    // Update Banner
    const oldBannerTarget = '<div style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.08), rgba(5, 150, 105, 0.08));';
    if (worldHtml.includes(oldBannerTarget)) {
        const bannerEndIndex = worldHtml.indexOf('</div>\n\n        <!-- Controls & Search Card -->');
        if (bannerEndIndex !== -1) {
            const bannerStartIndex = worldHtml.indexOf(oldBannerTarget);
            const newBanner = `<div style="background: linear-gradient(135deg, rgba(225, 29, 72, 0.08), rgba(2, 132, 199, 0.08)); border: 1px solid rgba(225, 29, 72, 0.25); border-radius: 14px; padding: 14px 20px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <span style="background: #e11d48; color: #fff; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                    <i class="fa-solid fa-satellite-dish"></i>
                </span>
                <div>
                    <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: var(--text-dark);">Explore the Geopolitical Hotspots &amp; Physical Geography Maps</h3>
                    <p style="margin: 2px 0 0 0; font-size: 0.86rem; color: var(--text-light);">Explore active conflicts, disputed territories, strategic chokepoints, mountains, rivers, and straits across our 3-Map Cartographic Suite.</p>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                <a href="geopolitical-hotspots-map.html" style="background: #e11d48; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.25);">
                    <i class="fa-solid fa-satellite-dish"></i> Geopolitical Hotspots Map &rarr;
                </a>
                <a href="physical-geography-map.html" style="background: #0284c7; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);">
                    <i class="fa-solid fa-mountain-sun"></i> Physical Map &rarr;
                </a>
            </div>
        </div>`;
            worldHtml = worldHtml.substring(0, bannerStartIndex) + newBanner + worldHtml.substring(bannerEndIndex + 6);
        }
    }

    // Add to footer
    worldHtml = worldHtml.replace(
        '<a href="physical-geography-map.html">Physical Map</a>',
        '<a href="geopolitical-hotspots-map.html">Hotspots Map</a>\n            <a href="physical-geography-map.html">Physical Map</a>'
    );

    fs.writeFileSync('frontend/world-map.html', worldHtml, 'utf8');
    console.log('Updated frontend/world-map.html');
}

// 3. Update frontend/index.html
let indexHtml = fs.readFileSync('frontend/index.html', 'utf8');

if (!indexHtml.includes('geopolitical-hotspots-map.html')) {
    // Nav link
    indexHtml = indexHtml.replace(
        '<a href="physical-geography-map.html"',
        '<a href="geopolitical-hotspots-map.html" style="font-weight:700; color:#e11d48;"><i class="fa-solid fa-satellite-dish"></i> Hotspots Map <span style="background:#e11d48; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>\n                <a href="physical-geography-map.html"'
    );

    // Mobile nav
    indexHtml = indexHtml.replace(
        '<li><a href="physical-geography-map.html"',
        '<li><a href="geopolitical-hotspots-map.html" style="font-weight: 700; color: #e11d48;"><i class="fa-solid fa-satellite-dish"></i> Geopolitical Hotspots Map</a></li>\n                <li><a href="physical-geography-map.html"'
    );

    // Search chip
    indexHtml = indexHtml.replace(
        '<button type="button" class="search-chip" onclick="window.location.href=\'physical-geography-map.html\'"',
        '<button type="button" class="search-chip" onclick="window.location.href=\'geopolitical-hotspots-map.html\'" style="font-weight:700; border-color:#e11d48; color:#e11d48; background: rgba(225, 29, 72, 0.05);"><i class="fa-solid fa-satellite-dish"></i> Geopolitical Hotspots Map (Conflicts, Borders &amp; Chokepoints)</button>\n                    <button type="button" class="search-chip" onclick="window.location.href=\'physical-geography-map.html\'"'
    );

    // Resource card after world-map card
    const worldMapCardEnd = 'Launch Interactive World Map</a>\n                    </div>\n                </div>';
    const hotspotsCard = `\n                <!-- Geopolitical Hotspots Map Card -->
                <div class="resource-card" style="border: 1px solid rgba(225, 29, 72, 0.4); background: linear-gradient(135deg, rgba(225, 29, 72, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(225, 29, 72, 0.2); color: #e11d48;"><i class="fa-solid fa-satellite-dish"></i></div>
                    <div class="resource-content">
                        <h3>🛰️ Interactive Geopolitical Hotspots &amp; Conflict Map</h3>
                        <p>Explore active kinetic conflicts, disputed borders, military pacts (NATO, AUKUS, Quad, SCO), strategic maritime chokepoints (Hormuz, Bab-el-Mandeb, Malacca), and ongoing flashpoints with strategic examination dossiers and direct CSS solved essay links.</p>
                        <div class="resource-meta"><span style="color:#e11d48;"><i class="fa-solid fa-crosshairs"></i> 34 Strategic Nodes</span> <span>⭐ Threat Radar &amp; Treaties</span></div>
                        <a href="geopolitical-hotspots-map.html" class="resource-btn" style="background: #e11d48; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-satellite-dish"></i> Launch Geopolitical Hotspots Map</a>
                    </div>
                </div>`;

    indexHtml = indexHtml.replace(worldMapCardEnd, worldMapCardEnd + hotspotsCard);

    // Footer academic link
    indexHtml = indexHtml.replace(
        '<li><a href="physical-geography-map.html"',
        '<li><a href="geopolitical-hotspots-map.html" style="color: #fb7185; font-weight: 700; text-decoration: none;"><i class="fas fa-angle-right" style="color: #fb7185; margin-right: 6px;"></i>Geopolitical Hotspots Map (Conflicts, Chokepoints)</a></li>\n                    <li><a href="physical-geography-map.html"'
    );

    fs.writeFileSync('frontend/index.html', indexHtml, 'utf8');
    console.log('Updated frontend/index.html');
}

// 4. Update frontend/sitemap.xml
let sitemap = fs.readFileSync('frontend/sitemap.xml', 'utf8');
if (!sitemap.includes('geopolitical-hotspots-map.html')) {
    const sitemapEntry = `  <url>
    <loc>https://cssprepcentral.com/geopolitical-hotspots-map.html</loc>
    <lastmod>2026-11-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
`;
    sitemap = sitemap.replace('</urlset>', sitemapEntry + '</urlset>');
    fs.writeFileSync('frontend/sitemap.xml', sitemap, 'utf8');
    console.log('Updated frontend/sitemap.xml');
}
