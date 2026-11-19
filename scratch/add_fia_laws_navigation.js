const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

console.log('=== INTEGRATING FIA LAWS NAVIGATION ===\n');

// 1. Update .site-switcher-bar across all 17 pages
const switcherPages = [
  'climate-change-explorer.html',
  'constitution-explorer.html',
  'court-structure-explorer.html',
  'crossword.html',
  'crpc-procedure-flowchart.html',
  'global-power-comparison.html',
  'human-body-explorer.html',
  'identify-legal-provision.html',
  'international-organizations-explorer.html',
  'periodic-table.html',
  'ppc-section-finder.html',
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

  if (!content.includes('href="fia-laws-explorer.html"')) {
    // Add right after court-structure-explorer.html link
    const courtRegex = /(<a\s+href="court-structure-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (courtRegex.test(content)) {
      content = content.replace(courtRegex, `$1\n            <a href="fia-laws-explorer.html" class="switcher-btn"><i class="fas fa-building-shield"></i> FIA Laws</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find court-structure-explorer.html link in ${file}`);
    }
  } else {
    console.log(`fia-laws-explorer.html already in ${file}`);
  }
});

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="fia-laws-explorer.html"')) {
  // 2a. Header dropdown
  const courtHeaderRegex = /(<a\s+href="court-structure-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (courtHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(courtHeaderRegex, `$1\n                <a href="fia-laws-explorer.html" style="font-weight:700; color:#1e3a8a;"><i class="fa-solid fa-building-shield"></i> FIA Laws Explorer <span style="background:#1e3a8a; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added FIA Laws Explorer to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const courtMobileRegex = /(<li><a\s+href="court-structure-explorer\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (courtMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(courtMobileRegex, `$1\n                <li><a href="fia-laws-explorer.html" style="font-weight: 700; color: #1e3a8a;"><i class="fa-solid fa-building-shield"></i> FIA Laws Explorer (FIA Act 1974, PECA, AMLA, Emigration &amp; Schedule)</a></li>`);
    console.log('Added FIA Laws Explorer to index.html mobile drawer');
  }

  // 2c. Search chips
  const courtChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='court-structure-explorer\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (courtChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(courtChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='fia-laws-explorer.html'" style="font-weight:700; border-color:#1e3a8a; color:#1e3a8a; background: rgba(30, 58, 138, 0.05);"><i class="fa-solid fa-building-shield"></i> FIA Laws Explorer (FIA Act 1974, PECA 2016, AMLA 2010, Emigration &amp; 37 Scheduled Acts)</button>`);
    console.log('Added FIA Laws Explorer to index.html search chips');
  }

  // 2d. Resource Card
  const courtCardTarget = `<!-- Court Structure Explorer Card -->`;
  const fiaCardHtml = `<!-- FIA Laws Explorer Card -->
                <div class="resource-card" style="border: 1px solid rgba(30, 58, 138, 0.4); background: linear-gradient(135deg, rgba(30, 58, 138, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(30, 58, 138, 0.2); color: #1e3a8a;"><i class="fa-solid fa-building-shield"></i></div>
                    <div class="resource-content">
                        <h3>⚖️ FIA Laws Explorer: FIA Act, PECA, AMLA &amp; Schedule</h3>
                        <p>Explore the statutory foundations of the Federal Investigation Agency: FIA Act 1974, PECA 2016, AMLA 2010, Emigration Ordinance 1979, PCA 1947, Passport Act 1974, the official Schedule of 37 special enactments &amp; 118 PPC offences, 7 operational wings, and 20 FPSC exam MCQs.</p>
                        <div class="resource-meta"><span style="color:#1e3a8a; font-weight:700;"><i class="fa-solid fa-scale-balanced"></i> 6 Core Statutes &bull; 37 Special Laws</span> <span>★ 7 Wings &bull; 20 Exam MCQs</span></div>
                        <a href="fia-laws-explorer.html" class="resource-btn" style="background: #1e3a8a; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-building-shield"></i> Launch FIA Laws Explorer</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(courtCardTarget)) {
    indexContent = indexContent.replace(courtCardTarget, fiaCardHtml + courtCardTarget);
    console.log('Added FIA Laws Explorer resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
} else {
  console.log('index.html already contains fia-laws-explorer.html links');
}

// 3. Update sibling footers
const siblingPages = [
  'constitution-explorer.html',
  'ppc-section-finder.html',
  'crpc-procedure-flowchart.html',
  'identify-legal-provision.html',
  'court-structure-explorer.html',
  'fia-sample-papers.html'
];

siblingPages.forEach(file => {
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes('href="fia-laws-explorer.html"')) {
    if (content.includes('court-structure-explorer.html">Court Structure</a>')) {
      content = content.replace(/(court-structure-explorer\.html">Court Structure<\/a>)/i, `$1 &bull;\n            <a href="fia-laws-explorer.html">FIA Laws</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated footer in ${file}`);
    } else if (content.includes('court-structure-explorer.html"><i class="fa-solid fa-landmark"></i> Court Structure Explorer</a></li>')) {
      content = content.replace(/(court-structure-explorer\.html"><i class="fa-solid fa-landmark"><\/i> Court Structure Explorer<\/a><\/li>)/i, `$1\n                        <li><a href="fia-laws-explorer.html"><i class="fa-solid fa-building-shield"></i> FIA Laws Explorer</a></li>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated footer in ${file}`);
    } else if (file === 'fia-sample-papers.html') {
      const footerRegex = /(<div class="footer-links">[\s\S]*?)(<\/div>)/i;
      if (footerRegex.test(content)) {
        content = content.replace(footerRegex, `$1 &bull; <a href="fia-laws-explorer.html">FIA Laws Explorer</a>$2`);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated footer in ${file}`);
      }
    }
  }
});

console.log('\n=== FIA LAWS NAVIGATION INTEGRATION COMPLETED ===');
