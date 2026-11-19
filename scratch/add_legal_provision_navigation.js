const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

console.log('=== INTEGRATING LEGAL PROVISION NAVIGATION ===\n');

// 1. Update .site-switcher-bar across all 15 pages
const switcherPages = [
  'climate-change-explorer.html',
  'constitution-explorer.html',
  'crossword.html',
  'crpc-procedure-flowchart.html',
  'global-power-comparison.html',
  'human-body-explorer.html',
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

  if (!content.includes('href="identify-legal-provision.html"')) {
    // Add right after crpc-procedure-flowchart.html link
    const crpcRegex = /(<a\s+href="crpc-procedure-flowchart\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (crpcRegex.test(content)) {
      content = content.replace(crpcRegex, `$1\n            <a href="identify-legal-provision.html" class="switcher-btn"><i class="fas fa-scale-unbalanced-flip"></i> Legal Provision</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find crpc-procedure-flowchart.html link in ${file}`);
    }
  } else {
    console.log(`identify-legal-provision.html already in ${file}`);
  }
});

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="identify-legal-provision.html"')) {
  // 2a. Header dropdown
  const crpcHeaderRegex = /(<a\s+href="crpc-procedure-flowchart\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (crpcHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(crpcHeaderRegex, `$1\n                <a href="identify-legal-provision.html" style="font-weight:700; color:#4338ca;"><i class="fa-solid fa-scale-unbalanced-flip"></i> Legal Provision <span style="background:#4338ca; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added Legal Provision to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const crpcMobileRegex = /(<li><a\s+href="crpc-procedure-flowchart\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (crpcMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(crpcMobileRegex, `$1\n                <li><a href="identify-legal-provision.html" style="font-weight: 700; color: #4338ca;"><i class="fa-solid fa-scale-unbalanced-flip"></i> Identify the Legal Provision (Courtroom Scenarios &amp; Case Solver)</a></li>`);
    console.log('Added Legal Provision to index.html mobile drawer');
  }

  // 2c. Search chips
  const crpcChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='crpc-procedure-flowchart\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (crpcChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(crpcChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='identify-legal-provision.html'" style="font-weight:700; border-color:#4338ca; color:#4338ca; background: rgba(67, 56, 202, 0.05);"><i class="fa-solid fa-scale-unbalanced-flip"></i> Identify the Legal Provision (25 Courtroom Scenarios &bull; PPC, CrPC, Constitution, QSO &bull; Landmark Precedents)</button>`);
    console.log('Added Legal Provision to index.html search chips');
  }

  // 2d. Resource Card
  const crpcCardTarget = `<!-- CrPC Procedure Flowchart Card -->`;
  const legalCardHtml = `<!-- Identify Legal Provision Card -->
                <div class="resource-card" style="border: 1px solid rgba(67, 56, 202, 0.4); background: linear-gradient(135deg, rgba(67, 56, 202, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(67, 56, 202, 0.2); color: #4338ca;"><i class="fa-solid fa-scale-unbalanced-flip"></i></div>
                    <div class="resource-content">
                        <h3>⚖️ Identify the Legal Provision: Case Law &amp; Statutory Solver</h3>
                        <p>Analyze authentic courtroom scenarios across Pakistani law: spot legal issues and identify the precise applicable section under PPC 1860, CrPC 1898, Constitution 1973, Qanun-e-Shahadat Order 1984, and PECA 2016 with complete judicial ratios, distractor breakdowns, and landmark citations.</p>
                        <div class="resource-meta"><span style="color:#4338ca; font-weight:700;"><i class="fa-solid fa-briefcase"></i> 25 Scenarios &bull; 5 Domains</span> <span>★ Timed Challenge &bull; Precedents</span></div>
                        <a href="identify-legal-provision.html" class="resource-btn" style="background: #4338ca; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-scale-unbalanced-flip"></i> Launch Legal Provision</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(crpcCardTarget)) {
    indexContent = indexContent.replace(crpcCardTarget, legalCardHtml + crpcCardTarget);
    console.log('Added Legal Provision resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
} else {
  console.log('index.html already contains identify-legal-provision.html links');
}

// 3. Update footer in crpc-procedure-flowchart.html, ppc-section-finder.html, and constitution-explorer.html
const crpcHtmlPath = path.join(frontendDir, 'crpc-procedure-flowchart.html');
if (fs.existsSync(crpcHtmlPath)) {
  let crpcHtml = fs.readFileSync(crpcHtmlPath, 'utf-8');
  if (!crpcHtml.includes('href="identify-legal-provision.html"')) {
    const footerRegex = /(<a\s+href="constitution-explorer\.html">Constitution Explorer<\/a>)/i;
    if (footerRegex.test(crpcHtml)) {
      crpcHtml = crpcHtml.replace(footerRegex, `$1 &bull;\n            <a href="identify-legal-provision.html">Legal Provision</a>`);
      fs.writeFileSync(crpcHtmlPath, crpcHtml, 'utf-8');
      console.log('Added Legal Provision link to crpc-procedure-flowchart.html footer');
    }
  }
}

const ppcHtmlPath = path.join(frontendDir, 'ppc-section-finder.html');
if (fs.existsSync(ppcHtmlPath)) {
  let ppcHtml = fs.readFileSync(ppcHtmlPath, 'utf-8');
  if (!ppcHtml.includes('href="identify-legal-provision.html"')) {
    const footerRegex = /(<a\s+href="crpc-procedure-flowchart\.html">CrPC Flowchart<\/a>)/i;
    if (footerRegex.test(ppcHtml)) {
      ppcHtml = ppcHtml.replace(footerRegex, `$1 &bull; <a href="identify-legal-provision.html">Legal Provision</a>`);
      fs.writeFileSync(ppcHtmlPath, ppcHtml, 'utf-8');
      console.log('Added Legal Provision link to ppc-section-finder.html footer');
    }
  }
}

const constHtmlPath = path.join(frontendDir, 'constitution-explorer.html');
if (fs.existsSync(constHtmlPath)) {
  let constHtml = fs.readFileSync(constHtmlPath, 'utf-8');
  if (!constHtml.includes('href="identify-legal-provision.html"')) {
    const footerRegex = /(<a\s+href="ppc-section-finder\.html">PPC Finder<\/a>)/i;
    if (footerRegex.test(constHtml)) {
      constHtml = constHtml.replace(footerRegex, `$1 &bull; <a href="crpc-procedure-flowchart.html">CrPC Flowchart</a> &bull; <a href="identify-legal-provision.html">Legal Provision</a>`);
      fs.writeFileSync(constHtmlPath, constHtml, 'utf-8');
      console.log('Added Legal Provision link to constitution-explorer.html footer');
    }
  }
}

console.log('\n=== NAVIGATION INTEGRATION COMPLETED SUCCESSFULLY ===');
