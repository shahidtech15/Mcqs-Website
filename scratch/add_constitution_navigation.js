const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

// 1. Update .site-switcher-bar across all pages
const switcherPages = [
  'climate-change-explorer.html',
  'crossword.html',
  'global-power-comparison.html',
  'human-body-explorer.html',
  'international-organizations-explorer.html',
  'periodic-table.html',
  'solar-system-explorer.html',
  'technology-explorer.html',
  'timeline.html',
  'unsc-simulator.html',
  'word-search.html',
  'world-history-timeline.html'
];

switcherPages.forEach(file => {
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes('href="constitution-explorer.html"')) {
    // Add right after technology-explorer.html link
    const techRegex = /(<a\s+href="technology-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (techRegex.test(content)) {
      content = content.replace(techRegex, `$1\n            <a href="constitution-explorer.html" class="switcher-btn"><i class="fas fa-scale-balanced"></i> Constitution</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find technology-explorer.html link in ${file}`);
    }
  } else {
    console.log(`constitution-explorer.html already in ${file}`);
  }
});

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

// 2a. Header dropdown
if (!indexContent.includes('href="constitution-explorer.html"')) {
  const techHeaderRegex = /(<a\s+href="technology-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (techHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(techHeaderRegex, `$1\n                <a href="constitution-explorer.html" style="font-weight:700; color:#0f766e;"><i class="fa-solid fa-scale-balanced"></i> Constitution <span style="background:#0f766e; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added Constitution Explorer to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const techMobileRegex = /(<li><a\s+href="technology-explorer\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (techMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(techMobileRegex, `$1\n                <li><a href="constitution-explorer.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-scale-balanced"></i> Pakistan Constitution Explorer (Articles 1-280 &amp; Amendments)</a></li>`);
    console.log('Added Constitution Explorer to index.html mobile drawer');
  }

  // 2c. Search chips
  const techChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='technology-explorer\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (techChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(techChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='constitution-explorer.html'" style="font-weight:700; border-color:#0f766e; color:#0f766e; background: rgba(15, 118, 110, 0.05);"><i class="fa-solid fa-scale-balanced"></i> Constitution Explorer (35 High-Yield Articles, 26 Amendments, Case Law &amp; MCQs)</button>`);
    console.log('Added Constitution Explorer to index.html search chips');
  }

  // 2d. Resource Card
  const techCardTarget = `<!-- Geopolitical Hotspots Map Card -->`;
  const constCardHtml = `<!-- Pakistan Constitution Explorer Card -->
                <div class="resource-card" style="border: 1px solid rgba(15, 118, 110, 0.4); background: linear-gradient(135deg, rgba(15, 118, 110, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(15, 118, 110, 0.2); color: #0f766e;"><i class="fa-solid fa-scale-balanced"></i></div>
                    <div class="resource-content">
                        <h3>⚖️ Interactive Pakistan Constitution Explorer (1973)</h3>
                        <p>Explore 35 high-yield Articles across all 12 Parts of Pakistan's 1973 Constitution with verbatim legal text, landmark Supreme Court precedents, CSS examination doctrines, the 26 Constitutional Amendments timeline (including the Oct 2024 26th Amendment), and interactive practice MCQs.</p>
                        <div class="resource-meta"><span style="color:#0f766e; font-weight:700;"><i class="fa-solid fa-landmark"></i> 280 Articles &bull; 12 Parts</span> <span>★ 26 Amendments &bull; 42 MCQs</span></div>
                        <a href="constitution-explorer.html" class="resource-btn" style="background: #0f766e; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-scale-balanced"></i> Launch Constitution Explorer</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(techCardTarget)) {
    indexContent = indexContent.replace(techCardTarget, constCardHtml + techCardTarget);
    console.log('Added Constitution Explorer resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
} else {
  console.log('index.html already contains constitution-explorer.html links');
}

console.log('Navigation updates completed successfully!');
