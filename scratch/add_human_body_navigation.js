const fs = require('fs');
const path = require('path');

console.log('--- STARTING SITE-WIDE INTEGRATION FOR HUMAN BODY EXPLORER ---');

// 1. Update sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'frontend', 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemapContent.includes('human-body-explorer.html')) {
  const sitemapEntry = `  <url>
    <loc>https://cssprepcentral.com/human-body-explorer.html</loc>
    <lastmod>2026-11-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
</urlset>`;
  sitemapContent = sitemapContent.replace('</urlset>', sitemapEntry);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('1. Updated sitemap.xml');
} else {
  console.log('1. sitemap.xml already includes human-body-explorer.html');
}

// 2. Update index.html
const indexPath = path.join(__dirname, '..', 'frontend', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Nav link
const ssNavIndex = `<a href="solar-system-explorer.html" style="font-weight:700; color:#f59e0b;"><i class="fa-solid fa-sun"></i> Solar System <span style="background:#f59e0b; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;
const hbNavIndex = `<a href="human-body-explorer.html" style="font-weight:700; color:#e11d48;"><i class="fa-solid fa-heart-pulse"></i> Human Body <span style="background:#e11d48; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`;

if (!indexContent.includes('href="human-body-explorer.html"') && indexContent.includes(ssNavIndex)) {
  indexContent = indexContent.replace(ssNavIndex, `${ssNavIndex}\n                ${hbNavIndex}`);
  console.log('2a. Added nav link to index.html');
}

// Mobile drawer link
const ssDrawerIndex = `<li><a href="solar-system-explorer.html" style="font-weight: 700; color: #f59e0b;"><i class="fa-solid fa-sun"></i> Explore the Solar System (Planets &amp; Missions)</a></li>`;
const hbDrawerIndex = `<li><a href="human-body-explorer.html" style="font-weight: 700; color: #e11d48;"><i class="fa-solid fa-heart-pulse"></i> Human Body Explorer (Organs &amp; Systems)</a></li>`;

if (indexContent.includes(ssDrawerIndex) && !indexContent.includes(hbDrawerIndex)) {
  indexContent = indexContent.replace(ssDrawerIndex, `${ssDrawerIndex}\n                ${hbDrawerIndex}`);
  console.log('2b. Added drawer link to index.html');
}

// Search chip
const ssChip = `<button type="button" class="search-chip" onclick="window.location.href='solar-system-explorer.html'" style="font-weight:700; border-color:#f59e0b; color:#d97706; background: rgba(245, 158, 11, 0.05);"><i class="fa-solid fa-sun"></i> Explore the Solar System (Planets, Moons, Atmospheres, Kepler's Laws &amp; Missions)</button>`;
const hbChip = `<button type="button" class="search-chip" onclick="window.location.href='human-body-explorer.html'" style="font-weight:700; border-color:#e11d48; color:#be123c; background: rgba(225, 29, 72, 0.05);"><i class="fa-solid fa-heart-pulse"></i> Human Body Explorer (Organs, Physiological Systems, Records &amp; Quizzes)</button>`;

if (indexContent.includes(ssChip) && !indexContent.includes(hbChip)) {
  indexContent = indexContent.replace(ssChip, `${ssChip}\n                    ${hbChip}`);
  console.log('2c. Added search chip to index.html');
}

// Resource card in grid
const ssCardTarget = `<a href="solar-system-explorer.html" class="resource-btn" style="background: #f59e0b; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-rocket"></i> Launch Solar Orrery</a>\n                    </div>\n                </div>`;
const hbCard = `<div class="resource-card" style="border: 2px solid #e11d48;">
                    <div class="resource-thumb" style="background: linear-gradient(135deg, #9f1239, #e11d48);"><i class="fa-solid fa-heart-pulse" style="color: #ffffff;"></i></div>
                    <div class="resource-body">
                        <span class="resource-tag" style="background: #ffe4e6; color: #9f1239;"><i class="fa-solid fa-child"></i> Biological Sciences &amp; Anatomy</span>
                        <h3 class="resource-title"><a href="human-body-explorer.html">Human Body Explorer</a></h3>
                        <p class="resource-desc">Click organs and body systems to explore their physiological functions, chemical secretions, clinical pathologies, and test your knowledge with interactive quizzes.</p>
                        <div class="resource-meta"><span style="color:#e11d48;"><i class="fa-solid fa-lungs"></i> 12 Vital Organs</span> <span>★ 8 Body Systems &bull; System Quizzes</span></div>
                        <a href="human-body-explorer.html" class="resource-btn" style="background: #e11d48; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-stethoscope"></i> Explore Anatomy</a>
                    </div>
                </div>`;

if (indexContent.includes(ssCardTarget) && !indexContent.includes('href="human-body-explorer.html" class="resource-btn"')) {
  indexContent = indexContent.replace(ssCardTarget, `${ssCardTarget}\n                ${hbCard}`);
  console.log('2d. Added resource card to index.html');
}

// Footer link
const ssFooter = `<li><a href="solar-system-explorer.html" style="color: #fbbf24; font-weight: 700; text-decoration: none;"><i class="fas fa-sun" style="color: #fbbf24; margin-right: 6px;"></i>Explore the Solar System (Planets &amp; Space Science)</a></li>`;
const hbFooter = `<li><a href="human-body-explorer.html" style="color: #fb7185; font-weight: 700; text-decoration: none;"><i class="fas fa-heart-pulse" style="color: #fb7185; margin-right: 6px;"></i>Human Body Explorer (Organs, Systems &amp; Quizzes)</a></li>`;

if (indexContent.includes(ssFooter) && !indexContent.includes(hbFooter)) {
  indexContent = indexContent.replace(ssFooter, `${ssFooter}\n                    ${hbFooter}`);
  console.log('2e. Added footer link to index.html');
}

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('2. Completed index.html update');

// 3. Update quiz.html
const quizPath = path.join(__dirname, '..', 'frontend', 'quiz.html');
let quizContent = fs.readFileSync(quizPath, 'utf8');

const ssQuizNav = `<li><a href="solar-system-explorer.html" style="font-weight: 700; color: #f59e0b;"><i class="fa-solid fa-sun"></i> Solar System</a></li>`;
const hbQuizNav = `<li><a href="human-body-explorer.html" style="font-weight: 700; color: #e11d48;"><i class="fa-solid fa-heart-pulse"></i> Human Body</a></li>`;

if (quizContent.includes(ssQuizNav) && !quizContent.includes(hbQuizNav)) {
  quizContent = quizContent.replace(ssQuizNav, `${ssQuizNav}\n                ${hbQuizNav}`);
  fs.writeFileSync(quizPath, quizContent, 'utf8');
  console.log('3. Updated quiz.html');
}

// 4. Update science-notes.html
const scienceNotesPath = path.join(__dirname, '..', 'frontend', 'science-notes.html');
if (fs.existsSync(scienceNotesPath)) {
  let scContent = fs.readFileSync(scienceNotesPath, 'utf8');
  if (!scContent.includes('human-body-explorer.html')) {
    const targetTag = `href="solar-system-explorer.html" style="font-weight:700; color:#f59e0b;"><i class="fa-solid fa-sun"></i> Solar System Explorer</a>`;
    if (scContent.includes(targetTag)) {
      scContent = scContent.replace(targetTag, `${targetTag}\n                <a href="human-body-explorer.html" style="font-weight:700; color:#e11d48;"><i class="fa-solid fa-heart-pulse"></i> Human Body Explorer</a>`);
      fs.writeFileSync(scienceNotesPath, scContent, 'utf8');
      console.log('4. Added link to science-notes.html');
    }
  }
}

// 5. Update switcher bars across the other 17 interactive map/game/timeline/comparison/solar pages
const otherPages = [
  'solar-system-explorer.html',
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

  // Check if human-body-explorer is already in switcher
  if (pageContent.includes('href="human-body-explorer.html" class="switcher-btn')) {
    return;
  }

  // Look for solar-system-explorer link in switcher
  const ssSwitcherRegex = /(<a\s+href="solar-system-explorer\.html"\s+class="switcher-btn[^"]*"[^>]*>[\s\S]*?<\/a>)/i;
  const match = pageContent.match(ssSwitcherRegex);

  if (match) {
    const ssButton = match[1];
    const hbButton = `\n            <a href="human-body-explorer.html" class="switcher-btn" style="color:#fb7185;">\n                <i class="fas fa-heart-pulse"></i> Human Body\n            </a>`;
    pageContent = pageContent.replace(ssButton, `${ssButton}${hbButton}`);
    fs.writeFileSync(filePath, pageContent, 'utf8');
    updatedCount++;
    console.log(`5. Updated switcher bar in: ${file}`);
  } else {
    // If not found, try world-map.html secondary navbar
    if (file === 'world-map.html') {
      const ssLinkTarget = `<li><a href="solar-system-explorer.html" style="background: #f59e0b; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);"><i class="fa-solid fa-sun"></i> Solar System Explorer &rarr;</a></li>`;
      const hbLink = `\n                <li><a href="human-body-explorer.html" style="background: #e11d48; color: #ffffff; padding: 9px 18px; border-radius: 8px; font-weight: 700; font-size: 0.88rem; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.25);"><i class="fa-solid fa-heart-pulse"></i> Human Body Explorer &rarr;</a></li>`;
      if (pageContent.includes(ssLinkTarget) && !pageContent.includes('human-body-explorer.html')) {
        pageContent = pageContent.replace(ssLinkTarget, `${ssLinkTarget}${hbLink}`);
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
