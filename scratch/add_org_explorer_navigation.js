const fs = require('fs');
const path = require('path');

// 1. Update sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'frontend', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemapContent.includes('international-organizations-explorer.html')) {
  const sitemapEntry = `  <url>
    <loc>https://cssprepcentral.com/international-organizations-explorer.html</loc>
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
const unscNavIndex = `<a href="unsc-simulator.html" style="font-weight:700; color:#1d4ed8;"><i class="fa-solid fa-scale-balanced"></i> UNSC Simulator <span style="background:#1d4ed8; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const orgNavIndex = `<a href="international-organizations-explorer.html" style="font-weight:700; color:#0284c7;"><i class="fa-solid fa-sitemap"></i> Org Explorer <span style="background:#0284c7; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (!indexContent.includes('href="international-organizations-explorer.html"') && indexContent.includes(unscNavIndex)) {
  indexContent = indexContent.replace(unscNavIndex, `${unscNavIndex}\n                ${orgNavIndex}`);
}

// Mobile drawer link
const unscDrawerIndex = `<li><a href="unsc-simulator.html" style="font-weight: 700; color: #1d4ed8;"><i class="fa-solid fa-scale-balanced"></i> UN Security Council Simulator</a></li>`;
const orgDrawerIndex = `<li><a href="international-organizations-explorer.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-sitemap"></i> International Organizations Explorer</a></li>`;

if (indexContent.includes(unscDrawerIndex) && !indexContent.includes(orgDrawerIndex)) {
  indexContent = indexContent.replace(unscDrawerIndex, `${unscDrawerIndex}\n                ${orgDrawerIndex}`);
}

// Search chip
const unscChip = `<button type="button" class="search-chip" onclick="window.location.href='unsc-simulator.html'" style="font-weight:700; border-color:#1d4ed8; color:#1d4ed8; background: rgba(29, 78, 216, 0.05);"><i class="fa-solid fa-scale-balanced"></i> UN Security Council Simulator (15 Members, P5 Veto Power &amp; Voting)</button>`;
const orgChip = `<button type="button" class="search-chip" onclick="window.location.href='international-organizations-explorer.html'" style="font-weight:700; border-color:#0284c7; color:#0284c7; background: rgba(2, 132, 199, 0.05);"><i class="fa-solid fa-sitemap"></i> International Organizations Explorer (UN, NATO, EU, OIC, SCO, SAARC, ASEAN, BRICS, IMF, WB)</button>`;

if (indexContent.includes(unscChip) && !indexContent.includes(orgChip)) {
  indexContent = indexContent.replace(unscChip, `${unscChip}\n                    ${orgChip}`);
}

// Resource card in grid
const unscCardTarget = `<a href="unsc-simulator.html" class="resource-btn" style="background: #1d4ed8; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-play"></i> Launch UNSC Simulator</a>\n                    </div>\n                </div>`;
const orgCard = `<div class="resource-card" style="border: 2px solid #0284c7;">
                    <div class="resource-thumb" style="background: linear-gradient(135deg, #0369a1, #0284c7);"><i class="fa-solid fa-sitemap" style="color: #ffffff;"></i></div>
                    <div class="resource-body">
                        <span class="resource-tag" style="background: #e0f2fe; color: #0369a1;"><i class="fa-solid fa-earth-americas"></i> Multilateral Diplomacy</span>
                        <h3 class="resource-title"><a href="international-organizations-explorer.html">International Organizations Explorer</a></h3>
                        <p class="resource-desc">Explore UN, NATO, EU, OIC, SCO, SAARC, ASEAN, BRICS, IMF &amp; World Bank with interactive membership maps, comparative analysis, and Pakistan's strategic footprint.</p>
                        <div class="resource-meta"><span style="color:#0284c7;"><i class="fa-solid fa-globe"></i> 10 Global Blocs &bull; 190+ States</span> <span>⭐ Side-by-Side Matrices &bull; 50 MCQs</span></div>
                        <a href="international-organizations-explorer.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-compass"></i> Launch Org Explorer</a>
                    </div>
                </div>`;

if (indexContent.includes(unscCardTarget) && !indexContent.includes('Launch Org Explorer')) {
  indexContent = indexContent.replace(unscCardTarget, `${unscCardTarget}\n\n                ${orgCard}`);
}

// Footer link
const unscFooter = `<li><a href="unsc-simulator.html" style="color: #60a5fa; font-weight: 700; text-decoration: none;"><i class="fas fa-scale-balanced" style="color: #60a5fa; margin-right: 6px;"></i>UN Security Council Simulator &amp; Veto Engine</a></li>`;
const orgFooter = `<li><a href="international-organizations-explorer.html" style="color: #38bdf8; font-weight: 700; text-decoration: none;"><i class="fas fa-sitemap" style="color: #38bdf8; margin-right: 6px;"></i>International Organizations Explorer &amp; Maps</a></li>`;

if (indexContent.includes(unscFooter) && !indexContent.includes(orgFooter)) {
  indexContent = indexContent.replace(unscFooter, `${unscFooter}\n                    ${orgFooter}`);
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Updated index.html');

// 3. Update quiz.html
const quizPath = path.join(__dirname, '..', 'frontend', 'quiz.html');
let quizContent = fs.readFileSync(quizPath, 'utf8');

const unscQuizNav = `<li><a href="unsc-simulator.html" style="font-weight: 700; color: #1d4ed8;"><i class="fa-solid fa-scale-balanced"></i> UNSC Simulator</a></li>`;
const orgQuizNav = `<li><a href="international-organizations-explorer.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-sitemap"></i> Org Explorer</a></li>`;

if (quizContent.includes(unscQuizNav) && !quizContent.includes(orgQuizNav)) {
  quizContent = quizContent.replace(unscQuizNav, `${unscQuizNav}\n                ${orgQuizNav}`);
}

// Quiz banner
const unscQuizBanner = `<a href="unsc-simulator.html" style="background: #1d4ed8; color: #fff; text-decoration: none; padding: 7px 14px; border-radius: 8px; font-weight: 600; font-size: 0.82rem; display: inline-flex; align-items: center; gap: 6px;">Launch Simulator <i class="fas fa-arrow-right"></i></a>`;
const orgQuizCard = `<div style="background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(14, 165, 233, 0.04) 100%); border: 1.5px solid #0284c7; border-radius: 12px; padding: 14px 18px; margin-top: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div>
                    <h4 style="margin: 0 0 4px 0; font-size: 0.95rem; font-weight: 700; color: #0284c7;"><i class="fas fa-sitemap"></i> International Organizations Explorer</h4>
                    <p style="margin: 0; font-size: 0.82rem; color: #64748b;">Interactive profiles, real-time membership maps &amp; Pakistan's diplomatic role in UN, NATO, EU, OIC, SCO, SAARC, ASEAN, BRICS, IMF &amp; WB.</p>
                </div>
                <a href="international-organizations-explorer.html" style="background: #0284c7; color: #fff; text-decoration: none; padding: 7px 14px; border-radius: 8px; font-weight: 600; font-size: 0.82rem; display: inline-flex; align-items: center; gap: 6px;">Launch Explorer <i class="fas fa-arrow-right"></i></a>
            </div>`;

if (quizContent.includes(unscQuizBanner) && !quizContent.includes('International Organizations Explorer')) {
  quizContent = quizContent.replace(unscQuizBanner, `${unscQuizBanner}\n            </div>\n            ${orgQuizCard}`);
}

fs.writeFileSync(quizPath, quizContent, 'utf8');
console.log('Updated quiz.html');

// 4. Update switcher bars across the 13 interactive map/game pages
const mapPages = [
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

  // Check if international-organizations-explorer.html already in switcher
  if (!pageContent.includes('href="international-organizations-explorer.html" class="switcher-btn')) {
    // Look for unsc-simulator in switcher bar
    const unscSwitcherRegex = /(<a href="unsc-simulator\.html" class="switcher-btn[^>]*>[\s\S]*?<\/a>)/;
    if (unscSwitcherRegex.test(pageContent)) {
      pageContent = pageContent.replace(unscSwitcherRegex, `$1\n            <a href="international-organizations-explorer.html" class="switcher-btn" style="color:#0284c7;">\n                <i class="fas fa-sitemap"></i> Org Explorer\n            </a>`);
    }
  }

  // Look for unsc-simulator in nav-links
  const unscNavLink = '<a href="unsc-simulator.html" style="color:#1d4ed8; font-weight:700;"><i class="fas fa-scale-balanced"></i> UNSC Simulator</a>';
  const orgNavLink = '<a href="international-organizations-explorer.html" style="color:#0284c7; font-weight:700;"><i class="fas fa-sitemap"></i> Org Explorer</a>';

  if (pageContent.includes(unscNavLink) && !pageContent.includes(orgNavLink)) {
    pageContent = pageContent.replace(unscNavLink, `${unscNavLink}\n                ${orgNavLink}`);
  }

  fs.writeFileSync(filePath, pageContent, 'utf8');
  console.log(`Updated switcher & nav for ${file}`);
});

console.log('ALL SITE NAVIGATION SUCCESSFULLY UPDATED!');
