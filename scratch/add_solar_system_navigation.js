const fs = require('fs');
const path = require('path');

console.log('--- STARTING SITE-WIDE INTEGRATION FOR SOLAR SYSTEM EXPLORER ---');

// 1. Update sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'frontend', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemapContent.includes('solar-system-explorer.html')) {
  const sitemapEntry = `  <url>
    <loc>https://cssprepcentral.com/solar-system-explorer.html</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
</urlset>`;
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntry);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('1. Updated sitemap.xml');
} else {
  console.log('1. sitemap.xml already includes solar-system-explorer.html');
}

// 2. Update index.html
const indexPath = path.join(__dirname, '..', 'frontend', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Nav link
const gpNavIndex = `<a href="global-power-comparison.html" style="font-weight:700; color:#0284c7;"><i class="fa-solid fa-shield-halved"></i> Global Power <span style="background:#0284c7; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const ssNavIndex = `<a href="solar-system-explorer.html" style="font-weight:700; color:#f59e0b;"><i class="fa-solid fa-sun"></i> Solar System <span style="background:#f59e0b; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (!indexContent.includes('href="solar-system-explorer.html"') && indexContent.includes(gpNavIndex)) {
  indexContent = indexContent.replace(gpNavIndex, `${gpNavIndex}\n                ${ssNavIndex}`);
  console.log('2a. Added nav link to index.html');
}

// Mobile drawer link
const gpDrawerIndex = `<li><a href="global-power-comparison.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-shield-halved"></i> Global Power Comparison (25 Powers)</a></li>`;
const ssDrawerIndex = `<li><a href="solar-system-explorer.html" style="font-weight: 700; color: #f59e0b;"><i class="fa-solid fa-sun"></i> Explore the Solar System (Planets &amp; Missions)</a></li>`;

if (indexContent.includes(gpDrawerIndex) && !indexContent.includes(ssDrawerIndex)) {
  indexContent = indexContent.replace(gpDrawerIndex, `${gpDrawerIndex}\n                ${ssDrawerIndex}`);
  console.log('2b. Added drawer link to index.html');
}

// Search chip
const gpChip = `<button type="button" class="search-chip" onclick="window.location.href='global-power-comparison.html'" style="font-weight:700; border-color:#0284c7; color:#0284c7; background: rgba(2, 132, 199, 0.05);"><i class="fa-solid fa-shield-halved"></i> Global Power Comparison (GDP, Nuclear Triads, Defense Budgets &amp; Energy)</button>`;
const ssChip = `<button type="button" class="search-chip" onclick="window.location.href='solar-system-explorer.html'" style="font-weight:700; border-color:#f59e0b; color:#d97706; background: rgba(245, 158, 11, 0.05);"><i class="fa-solid fa-sun"></i> Explore the Solar System (Planets, Moons, Atmospheres, Kepler's Laws &amp; Missions)</button>`;

if (indexContent.includes(gpChip) && !indexContent.includes(ssChip)) {
  indexContent = indexContent.replace(gpChip, `${gpChip}\n                    ${ssChip}`);
  console.log('2c. Added search chip to index.html');
}

// Resource card in grid
const gpCardTarget = `<a href="global-power-comparison.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-bolt"></i> Launch Power Duel</a>\n                    </div>\n                </div>`;
const ssCard = `<div class="resource-card" style="border: 2px solid #f59e0b;">
                    <div class="resource-thumb" style="background: linear-gradient(135deg, #b45309, #f59e0b);"><i class="fa-solid fa-sun" style="color: #ffffff;"></i></div>
                    <div class="resource-body">
                        <span class="resource-tag" style="background: #fef3c7; color: #b45309;"><i class="fa-solid fa-satellite"></i> Astronomy &amp; Physical Sciences</span>
                        <h3 class="resource-title"><a href="solar-system-explorer.html">Explore the Solar System</a></h3>
                        <p class="resource-desc">Click planets to learn about their diameters, gravity, atmospheres, moons, distances from the Sun, space missions, and calculate your weight on other worlds.</p>
                        <div class="resource-meta"><span style="color:#f59e0b;"><i class="fa-solid fa-circle-dot"></i> 8 Planets &bull; 2 Dwarf Planets</span> <span>★ Kepler's Laws &bull; Animated Orrery</span></div>
                        <a href="solar-system-explorer.html" class="resource-btn" style="background: #f59e0b; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-rocket"></i> Launch Solar Orrery</a>
                    </div>
                </div>`;

if (indexContent.includes(gpCardTarget) && !indexContent.includes('href="solar-system-explorer.html" class="resource-btn"')) {
  indexContent = indexContent.replace(gpCardTarget, `${gpCardTarget}\n                ${ssCard}`);
  console.log('2d. Added resource card to index.html');
}

// Footer link
const gpFooter = `<li><a href="global-power-comparison.html" style="color: #38bdf8; font-weight: 700; text-decoration: none;"><i class="fas fa-shield-halved" style="color: #38bdf8; margin-right: 6px;"></i>Global Power Comparison &amp; Strategic Index</a></li>`;
const ssFooter = `<li><a href="solar-system-explorer.html" style="color: #fbbf24; font-weight: 700; text-decoration: none;"><i class="fas fa-sun" style="color: #fbbf24; margin-right: 6px;"></i>Explore the Solar System (Planets &amp; Space Science)</a></li>`;

if (indexContent.includes(gpFooter) && !indexContent.includes(ssFooter)) {
  indexContent = indexContent.replace(gpFooter, `${gpFooter}\n                    ${ssFooter}`);
  console.log('2e. Added footer link to index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('2. Completed index.html update');

// 3. Update quiz.html
const quizPath = path.join(__dirname, '..', 'frontend', 'quiz.html');
let quizContent = fs.readFileSync(quizPath, 'utf8');

const gpQuizNav = `<li><a href="global-power-comparison.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-shield-halved"></i> Global Power</a></li>`;
const ssQuizNav = `<li><a href="solar-system-explorer.html" style="font-weight: 700; color: #f59e0b;"><i class="fa-solid fa-sun"></i> Solar System</a></li>`;

if (quizContent.includes(gpQuizNav) && !quizContent.includes(ssQuizNav)) {
  quizContent = quizContent.replace(gpQuizNav, `${gpQuizNav}\n                ${ssQuizNav}`);
  fs.writeFileSync(quizPath, quizContent, 'utf8');
  console.log('3. Updated quiz.html');
}

// 4. Update science-notes.html
const scienceNotesPath = path.join(__dirname, '..', 'frontend', 'science-notes.html');
if (fs.existsSync(scienceNotesPath)) {
  let scContent = fs.readFileSync(scienceNotesPath, 'utf8');
  if (!scContent.includes('solar-system-explorer.html')) {
    // Look for hero chips or navbar
    const targetTag = `href="index.html">Home</a>`;
    if (scContent.includes(targetTag)) {
      scContent = scContent.replace(targetTag, `${targetTag}\n                <a href="solar-system-explorer.html" style="font-weight:700; color:#f59e0b;"><i class="fa-solid fa-sun"></i> Solar System Explorer</a>`);
      fs.writeFileSync(scienceNotesPath, scContent, 'utf8');
      console.log('4. Added link to science-notes.html');
    }
  }
}

// 5. Update switcher bars across the other 16 interactive map/game/timeline/comparison pages
const otherPages = [
  'global-power-comparison.html',
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

  // Check if solar-system-explorer is already in switcher
  if (pageContent.includes('href="solar-system-explorer.html" class="switcher-btn')) {
    return;
  }

  // Look for global-power-comparison link in switcher
  const gpSwitcherRegex = /(<a\s+href="global-power-comparison\.html"\s+class="switcher-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/i;
  const match = pageContent.match(gpSwitcherRegex);

  if (match) {
    const gpButton = match[1];
    const ssButton = `\n            <a href="solar-system-explorer.html" class="switcher-btn" style="color:#fbbf24;">\n                <i class="fas fa-sun"></i> Solar System\n            </a>`;
    pageContent = pageContent.replace(gpButton, `${gpButton}${ssButton}`);
    fs.writeFileSync(filePath, pageContent, 'utf8');
    updatedCount++;
    console.log(`5. Updated switcher bar in: ${file}`);
  } else {
    // If not found, try world-map.html secondary navbar
    if (file === 'world-map.html') {
      const gpLinkTarget = `<li><a href="global-power-comparison.html" style="background: #0284c7; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);"><i class="fa-solid fa-shield-halved"></i> Global Power &rarr;</a></li>`;
      const ssLink = `\n                <li><a href="solar-system-explorer.html" style="background: #f59e0b; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);"><i class="fa-solid fa-sun"></i> Solar System Explorer &rarr;</a></li>`;
      if (pageContent.includes(gpLinkTarget) && !pageContent.includes('solar-system-explorer.html')) {
        pageContent = pageContent.replace(gpLinkTarget, `${gpLinkTarget}${ssLink}`);
        fs.writeFileSync(filePath, pageContent, 'utf8');
        updatedCount++;
        console.log(`5. Updated secondary navbar in: world-map.html`);
      }
    } else {
      console.warn(`Could not find switcher target in: ${file}`);
    }
  }
});

console.log(`--- NAVIGATION INTEGRATION COMPLETE: ${updatedCount} pages updated ---`);
