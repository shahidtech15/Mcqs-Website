const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

console.log('=== INTEGRATING COURT STRUCTURE NAVIGATION ===\n');

// 1. Update .site-switcher-bar across all 16 pages
const switcherPages = [
  'climate-change-explorer.html',
  'constitution-explorer.html',
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

  if (!content.includes('href="court-structure-explorer.html"')) {
    // Add right after identify-legal-provision.html link
    const legalRegex = /(<a\s+href="identify-legal-provision\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (legalRegex.test(content)) {
      content = content.replace(legalRegex, `$1\n            <a href="court-structure-explorer.html" class="switcher-btn"><i class="fas fa-landmark"></i> Court Structure</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find identify-legal-provision.html link in ${file}`);
    }
  } else {
    console.log(`court-structure-explorer.html already in ${file}`);
  }
});

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="court-structure-explorer.html"')) {
  // 2a. Header dropdown
  const legalHeaderRegex = /(<a\s+href="identify-legal-provision\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (legalHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(legalHeaderRegex, `$1\n                <a href="court-structure-explorer.html" style="font-weight:700; color:#0f766e;"><i class="fa-solid fa-landmark"></i> Court Structure <span style="background:#0f766e; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added Court Structure to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const legalMobileRegex = /(<li><a\s+href="identify-legal-provision\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (legalMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(legalMobileRegex, `$1\n                <li><a href="court-structure-explorer.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-landmark"></i> Court Structure Explorer (Judicial Hierarchy &amp; Jurisdictions)</a></li>`);
    console.log('Added Court Structure to index.html mobile drawer');
  }

  // 2c. Search chips
  const legalChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='identify-legal-provision\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (legalChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(legalChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='court-structure-explorer.html'" style="font-weight:700; border-color:#0f766e; color:#0f766e; background: rgba(15, 118, 110, 0.05);"><i class="fa-solid fa-landmark"></i> Court Structure Explorer (Hierarchy, Appellate Routes, 22 Courts, 26th Amendment Benches)</button>`);
    console.log('Added Court Structure to index.html search chips');
  }

  // 2d. Resource Card
  const legalCardTarget = `<!-- Identify Legal Provision Card -->`;
  const courtCardHtml = `<!-- Court Structure Explorer Card -->
                <div class="resource-card" style="border: 1px solid rgba(15, 118, 110, 0.4); background: linear-gradient(135deg, rgba(15, 118, 110, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(15, 118, 110, 0.2); color: #0f766e;"><i class="fa-solid fa-landmark"></i></div>
                    <div class="resource-content">
                        <h3>⚖️ Court Structure Explorer: Pakistan Judicial Hierarchy</h3>
                        <p>Explore the unified judicial hierarchy of Pakistan under Part VII of the 1973 Constitution (Arts 175-212), Civil Courts Ordinance 1962, and CrPC: 4 tiers, 22 courts &amp; tribunals, 8 interactive appellate routes, side-by-side jurisdiction comparisons, and the 26th Constitutional Amendment (Constitutional Benches &amp; CJP appointment).</p>
                        <div class="resource-meta"><span style="color:#0f766e; font-weight:700;"><i class="fa-solid fa-sitemap"></i> 4 Tiers &bull; 22 Courts</span> <span>★ 8 Appellate Pathways &bull; 15 MCQs</span></div>
                        <a href="court-structure-explorer.html" class="resource-btn" style="background: #0f766e; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-landmark"></i> Launch Court Explorer</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(legalCardTarget)) {
    indexContent = indexContent.replace(legalCardTarget, courtCardHtml + legalCardTarget);
    console.log('Added Court Structure resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
} else {
  console.log('index.html already contains court-structure-explorer.html links');
}

// 3. Update sibling footers
const siblingPages = [
  'constitution-explorer.html',
  'ppc-section-finder.html',
  'crpc-procedure-flowchart.html',
  'identify-legal-provision.html'
];

siblingPages.forEach(file => {
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');

  if (!content.includes('href="court-structure-explorer.html"')) {
    if (content.includes('identify-legal-provision.html">Legal Provision</a>')) {
      content = content.replace(/(identify-legal-provision\.html">Legal Provision<\/a>)/i, `$1 &bull;\n            <a href="court-structure-explorer.html">Court Structure</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated footer in ${file}`);
    } else if (content.includes('identify-legal-provision.html')) {
      content = content.replace(/(<a\s+href="identify-legal-provision\.html"[^>]*>[\s\S]*?<\/a>)/i, `$1 &bull;\n            <a href="court-structure-explorer.html">Court Structure</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated footer in ${file}`);
    }
  }
});

console.log('\n=== COURT STRUCTURE NAVIGATION INTEGRATION COMPLETED ===');
