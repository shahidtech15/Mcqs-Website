const fs = require('fs');
const path = require('path');

console.log('--- STARTING SITE-WIDE INTEGRATION FOR GLOBAL POWER COMPARISON ---');

// 1. Update sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'frontend', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemapContent.includes('global-power-comparison.html')) {
  const sitemapEntry = `  <url>
    <loc>https://cssprepcentral.com/global-power-comparison.html</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
</urlset>`;
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntry);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('1. Updated sitemap.xml');
} else {
  console.log('1. sitemap.xml already includes global-power-comparison.html');
}

// 2. Update index.html
const indexPath = path.join(__dirname, '..', 'frontend', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Nav link
const wtNavIndex = `<a href="world-history-timeline.html" style="font-weight:700; color:#4f46e5;"><i class="fa-solid fa-timeline"></i> World Timeline <span style="background:#4f46e5; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const gpNavIndex = `<a href="global-power-comparison.html" style="font-weight:700; color:#0284c7;"><i class="fa-solid fa-shield-halved"></i> Global Power <span style="background:#0284c7; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (!indexContent.includes('href="global-power-comparison.html"') && indexContent.includes(wtNavIndex)) {
  indexContent = indexContent.replace(wtNavIndex, `${wtNavIndex}\n                ${gpNavIndex}`);
  console.log('2a. Added nav link to index.html');
}

// Mobile drawer link
const wtDrawerIndex = `<li><a href="world-history-timeline.html" style="font-weight: 700; color: #4f46e5;"><i class="fa-solid fa-timeline"></i> World History Timeline (Ancient to 2026)</a></li>`;
const gpDrawerIndex = `<li><a href="global-power-comparison.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-shield-halved"></i> Global Power Comparison (25 Powers)</a></li>`;

if (indexContent.includes(wtDrawerIndex) && !indexContent.includes(gpDrawerIndex)) {
  indexContent = indexContent.replace(wtDrawerIndex, `${wtDrawerIndex}\n                ${gpDrawerIndex}`);
  console.log('2b. Added drawer link to index.html');
}

// Search chip
const wtChip = `<button type="button" class="search-chip" onclick="window.location.href='world-history-timeline.html'" style="font-weight:700; border-color:#4f46e5; color:#4f46e5; background: rgba(79, 70, 229, 0.05);"><i class="fa-solid fa-timeline"></i> World History Timeline (Wars, Revolutions, Treaties, Discoveries &amp; Politics)</button>`;
const gpChip = `<button type="button" class="search-chip" onclick="window.location.href='global-power-comparison.html'" style="font-weight:700; border-color:#0284c7; color:#0284c7; background: rgba(2, 132, 199, 0.05);"><i class="fa-solid fa-shield-halved"></i> Global Power Comparison (GDP, Nuclear Triads, Defense Budgets &amp; Energy)</button>`;

if (indexContent.includes(wtChip) && !indexContent.includes(gpChip)) {
  indexContent = indexContent.replace(wtChip, `${wtChip}\n                    ${gpChip}`);
  console.log('2c. Added search chip to index.html');
}

// Resource card in grid
const wtCardTarget = `<a href="world-history-timeline.html" class="resource-btn" style="background: #4f46e5; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-play"></i> Launch World Timeline</a>\n                    </div>\n                </div>`;
const gpCard = `<div class="resource-card" style="border: 2px solid #0284c7;">
                    <div class="resource-thumb" style="background: linear-gradient(135deg, #0369a1, #0284c7);"><i class="fa-solid fa-shield-halved" style="color: #ffffff;"></i></div>
                    <div class="resource-body">
                        <span class="resource-tag" style="background: #e0f2fe; color: #0369a1;"><i class="fa-solid fa-bolt"></i> Strategic Capabilities</span>
                        <h3 class="resource-title"><a href="global-power-comparison.html">Global Power Comparison</a></h3>
                        <p class="resource-desc">Compare 25 global powers across GDP, population, defense budgets, nuclear arsenals, military hardware, exports, and energy production with 6-axis Canvas Radar charts and IR theories.</p>
                        <div class="resource-meta"><span style="color:#0284c7;"><i class="fa-solid fa-earth-americas"></i> 25 Major Powers</span> <span>★ 7 Rivalries • 6-Axis Radar</span></div>
                        <a href="global-power-comparison.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-bolt"></i> Launch Power Duel</a>
                    </div>
                </div>`;

if (indexContent.includes(wtCardTarget) && !indexContent.includes('href="global-power-comparison.html" class="resource-btn"')) {
  indexContent = indexContent.replace(wtCardTarget, `${wtCardTarget}\n                ${gpCard}`);
  console.log('2d. Added resource card to index.html');
}

// Footer link
const wtFooter = `<li><a href="world-history-timeline.html" style="color: #818cf8; font-weight: 700; text-decoration: none;"><i class="fas fa-timeline" style="color: #818cf8; margin-right: 6px;"></i>World History Timeline (3500 BCE – Present)</a></li>`;
const gpFooter = `<li><a href="global-power-comparison.html" style="color: #38bdf8; font-weight: 700; text-decoration: none;"><i class="fas fa-shield-halved" style="color: #38bdf8; margin-right: 6px;"></i>Global Power Comparison &amp; Strategic Index</a></li>`;

if (indexContent.includes(wtFooter) && !indexContent.includes(gpFooter)) {
  indexContent = indexContent.replace(wtFooter, `${wtFooter}\n                    ${gpFooter}`);
  console.log('2e. Added footer link to index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('2. Completed index.html update');

// 3. Update quiz.html
const quizPath = path.join(__dirname, '..', 'frontend', 'quiz.html');
let quizContent = fs.readFileSync(quizPath, 'utf8');

const wtQuizNav = `<li><a href="world-history-timeline.html" style="font-weight: 700; color: #4f46e5;"><i class="fa-solid fa-timeline"></i> World Timeline</a></li>`;
const gpQuizNav = `<li><a href="global-power-comparison.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-shield-halved"></i> Global Power</a></li>`;

if (quizContent.includes(wtQuizNav) && !quizContent.includes(gpQuizNav)) {
  quizContent = quizContent.replace(wtQuizNav, `${wtQuizNav}\n                ${gpQuizNav}`);
  fs.writeFileSync(quizPath, quizContent, 'utf8');
  console.log('3. Updated quiz.html');
}

// 4. Update switcher bars across the other 15 interactive map/game/timeline pages
const otherPages = [
  'international-organizations-explorer.html',
  'unsc-simulator.html',
  'world-history-timeline.html',
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

let updatedCount = 0;

otherPages.forEach(file => {
  const filePath = path.join(__dirname, '..', 'frontend', file);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${file}`);
    return;
  }

  let pageContent = fs.readFileSync(filePath, 'utf8');

  // Check if global-power-comparison is already in switcher
  if (pageContent.includes('href="global-power-comparison.html" class="switcher-btn')) {
    return;
  }

  // Look for world-history-timeline link in switcher
  const wtSwitcherRegex = /(<a\s+href="world-history-timeline\.html"\s+class="switcher-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/i;
  const match = pageContent.match(wtSwitcherRegex);

  if (match) {
    const wtButton = match[1];
    const gpButton = `\n            <a href="global-power-comparison.html" class="switcher-btn" style="color:#38bdf8;">\n                <i class="fas fa-shield-halved"></i> Global Power\n            </a>`;
    pageContent = pageContent.replace(wtButton, `${wtButton}${gpButton}`);
    fs.writeFileSync(filePath, pageContent, 'utf8');
    updatedCount++;
    console.log(`4. Updated switcher bar in: ${file}`);
  } else {
    // Try after international-organizations-explorer if world timeline wasn't found
    const orgSwitcherRegex = /(<a\s+href="international-organizations-explorer\.html"\s+class="switcher-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/i;
    const orgMatch = pageContent.match(orgSwitcherRegex);
    if (orgMatch) {
      const orgButton = orgMatch[1];
      const gpButton = `\n            <a href="global-power-comparison.html" class="switcher-btn" style="color:#38bdf8;">\n                <i class="fas fa-shield-halved"></i> Global Power\n            </a>`;
      pageContent = pageContent.replace(orgButton, `${orgButton}${gpButton}`);
      fs.writeFileSync(filePath, pageContent, 'utf8');
      updatedCount++;
      console.log(`4. Updated switcher bar (via org fallback) in: ${file}`);
    } else {
      console.warn(`Could not find switcher target in: ${file}`);
    }
  }
});

console.log(`--- NAVIGATION INTEGRATION COMPLETE: ${updatedCount} pages updated ---`);
