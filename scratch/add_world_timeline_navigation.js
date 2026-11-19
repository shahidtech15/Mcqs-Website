const fs = require('fs');
const path = require('path');

// 1. Update sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'frontend', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemapContent.includes('world-history-timeline.html')) {
  const sitemapEntry = `  <url>
    <loc>https://cssprepcentral.com/world-history-timeline.html</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
</urlset>`;
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntry);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Updated sitemap.xml');
}

// 2. Update index.html
const indexPath = path.join(__dirname, '..', 'frontend', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Nav link
const orgNavIndex = `<a href="international-organizations-explorer.html" style="font-weight:700; color:#0284c7;"><i class="fa-solid fa-sitemap"></i> Org Explorer <span style="background:#0284c7; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const wtNavIndex = `<a href="world-history-timeline.html" style="font-weight:700; color:#4f46e5;"><i class="fa-solid fa-timeline"></i> World Timeline <span style="background:#4f46e5; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (!indexContent.includes('href="world-history-timeline.html"') && indexContent.includes(orgNavIndex)) {
  indexContent = indexContent.replace(orgNavIndex, `${orgNavIndex}\n                ${wtNavIndex}`);
}

// Mobile drawer link
const orgDrawerIndex = `<li><a href="international-organizations-explorer.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-sitemap"></i> International Organizations Explorer</a></li>`;
const wtDrawerIndex = `<li><a href="world-history-timeline.html" style="font-weight: 700; color: #4f46e5;"><i class="fa-solid fa-timeline"></i> World History Timeline (Ancient to 2026)</a></li>`;

if (indexContent.includes(orgDrawerIndex) && !indexContent.includes(wtDrawerIndex)) {
  indexContent = indexContent.replace(orgDrawerIndex, `${orgDrawerIndex}\n                ${wtDrawerIndex}`);
}

// Search chip
const orgChip = `<button type="button" class="search-chip" onclick="window.location.href='international-organizations-explorer.html'" style="font-weight:700; border-color:#0284c7; color:#0284c7; background: rgba(2, 132, 199, 0.05);"><i class="fa-solid fa-sitemap"></i> International Organizations Explorer (UN, NATO, EU, OIC, SCO, SAARC, ASEAN, BRICS, IMF, WB)</button>`;
const wtChip = `<button type="button" class="search-chip" onclick="window.location.href='world-history-timeline.html'" style="font-weight:700; border-color:#4f46e5; color:#4f46e5; background: rgba(79, 70, 229, 0.05);"><i class="fa-solid fa-timeline"></i> World History Timeline (Wars, Revolutions, Treaties, Discoveries &amp; Politics)</button>`;

if (indexContent.includes(orgChip) && !indexContent.includes(wtChip)) {
  indexContent = indexContent.replace(orgChip, `${orgChip}\n                    ${wtChip}`);
}

// Resource card in grid
const orgCardTarget = `<a href="international-organizations-explorer.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-compass"></i> Launch Org Explorer</a>\n                    </div>\n                </div>`;
const wtCard = `<div class="resource-card" style="border: 2px solid #4f46e5;">
                    <div class="resource-thumb" style="background: linear-gradient(135deg, #3730a3, #4f46e5);"><i class="fa-solid fa-timeline" style="color: #ffffff;"></i></div>
                    <div class="resource-body">
                        <span class="resource-tag" style="background: #e0e7ff; color: #3730a3;"><i class="fa-solid fa-hourglass-half"></i> Chronological History</span>
                        <h3 class="resource-title"><a href="world-history-timeline.html">World History Timeline</a></h3>
                        <p class="resource-desc">Explore major milestones from ancient civilizations (~3500 BCE) to 2026 with categorical filters for wars, revolutions, treaties, discoveries, and political developments.</p>
                        <div class="resource-meta"><span style="color:#4f46e5;"><i class="fa-solid fa-calendar-check"></i> 85+ Major Watershed Events</span> <span>⭐ 5 Filters &bull; Embedded MCQs</span></div>
                        <a href="world-history-timeline.html" class="resource-btn" style="background: #4f46e5; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-play"></i> Launch World Timeline</a>
                    </div>
                </div>`;

if (indexContent.includes(orgCardTarget) && !indexContent.includes('Launch World Timeline')) {
  indexContent = indexContent.replace(orgCardTarget, `${orgCardTarget}\n\n                ${wtCard}`);
}

// Footer link
const orgFooter = `<li><a href="international-organizations-explorer.html" style="color: #38bdf8; font-weight: 700; text-decoration: none;"><i class="fas fa-sitemap" style="color: #38bdf8; margin-right: 6px;"></i>International Organizations Explorer &amp; Maps</a></li>`;
const wtFooter = `<li><a href="world-history-timeline.html" style="color: #818cf8; font-weight: 700; text-decoration: none;"><i class="fas fa-timeline" style="color: #818cf8; margin-right: 6px;"></i>World History Timeline (3500 BCE – Present)</a></li>`;

if (indexContent.includes(orgFooter) && !indexContent.includes(wtFooter)) {
  indexContent = indexContent.replace(orgFooter, `${orgFooter}\n                    ${wtFooter}`);
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Updated index.html');

// 3. Update quiz.html
const quizPath = path.join(__dirname, '..', 'frontend', 'quiz.html');
let quizContent = fs.readFileSync(quizPath, 'utf8');

const orgQuizNav = `<li><a href="international-organizations-explorer.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-sitemap"></i> Org Explorer</a></li>`;
const wtQuizNav = `<li><a href="world-history-timeline.html" style="font-weight: 700; color: #4f46e5;"><i class="fa-solid fa-timeline"></i> World Timeline</a></li>`;

if (quizContent.includes(orgQuizNav) && !quizContent.includes(wtQuizNav)) {
  quizContent = quizContent.replace(orgQuizNav, `${orgQuizNav}\n                ${wtQuizNav}`);
}

fs.writeFileSync(quizPath, quizContent, 'utf8');
console.log('Updated quiz.html');

// 4. Update switcher bars across the 14 other interactive map/game pages
const mapPages = [
  'international-organizations-explorer.html',
  'unsc-simulator.html',
  'crossword.html',
  'word-search.html',
  'arrange-chronologically.html',
  'guess-the-country.html',
  'locate-on-map.html',
  'match-the-following.html',
  'world-map.html',
  'physical-geography-map.html',
  'geopolitical-hotspots-map.html',
  'international-trade-routes-map.html',
  'pakistan-map.html',
  'sindh-map.html'
];

mapPages.forEach(file => {
  const filePath = path.join(__dirname, '..', 'frontend', file);
  let pageContent = fs.readFileSync(filePath, 'utf8');

  // Check if world-history-timeline.html already in switcher
  if (!pageContent.includes('href="world-history-timeline.html" class="switcher-btn')) {
    // Look for international-organizations-explorer in switcher bar
    const orgSwitcherRegex = /(<a href="international-organizations-explorer\.html" class="switcher-btn[^>]*>[\s\S]*?<\/a>)/;
    if (orgSwitcherRegex.test(pageContent)) {
      pageContent = pageContent.replace(orgSwitcherRegex, `$1\n            <a href="world-history-timeline.html" class="switcher-btn" style="color:#818cf8;">\n                <i class="fas fa-timeline"></i> World Timeline\n            </a>`);
    }
  }

  // Look for international-organizations-explorer in nav-links
  const orgNavLink = '<a href="international-organizations-explorer.html" style="color:#0284c7; font-weight:700;"><i class="fas fa-sitemap"></i> Org Explorer</a>';
  const wtNavLink = '<a href="world-history-timeline.html" style="color:#4f46e5; font-weight:700;"><i class="fas fa-timeline"></i> World Timeline</a>';

  if (pageContent.includes(orgNavLink) && !pageContent.includes(wtNavLink)) {
    pageContent = pageContent.replace(orgNavLink, `${orgNavLink}\n                ${wtNavLink}`);
  }

  fs.writeFileSync(filePath, pageContent, 'utf8');
  console.log(`Updated switcher & nav for ${file}`);
});

console.log('ALL SITE NAVIGATION SUCCESSFULLY UPDATED WITH WORLD HISTORY TIMELINE!');
