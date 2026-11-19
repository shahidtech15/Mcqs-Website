const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

// 1. Update .site-switcher-bar across all pages
const switcherPages = [
  'climate-change-explorer.html',
  'constitution-explorer.html',
  'crossword.html',
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

  if (!content.includes('href="crpc-procedure-flowchart.html"')) {
    // Add right after ppc-section-finder.html link
    const ppcRegex = /(<a\s+href="ppc-section-finder\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (ppcRegex.test(content)) {
      content = content.replace(ppcRegex, `$1\n            <a href="crpc-procedure-flowchart.html" class="switcher-btn"><i class="fas fa-diagram-project"></i> CrPC Flowchart</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find ppc-section-finder.html link in ${file}`);
    }
  } else {
    console.log(`crpc-procedure-flowchart.html already in ${file}`);
  }
});

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="crpc-procedure-flowchart.html"')) {
  // 2a. Header dropdown
  const ppcHeaderRegex = /(<a\s+href="ppc-section-finder\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (ppcHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(ppcHeaderRegex, `$1\n                <a href="crpc-procedure-flowchart.html" style="font-weight:700; color:#1d4ed8;"><i class="fa-solid fa-diagram-project"></i> CrPC Flowchart <span style="background:#1d4ed8; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added CrPC Flowchart to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const ppcMobileRegex = /(<li><a\s+href="ppc-section-finder\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (ppcMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(ppcMobileRegex, `$1\n                <li><a href="crpc-procedure-flowchart.html" style="font-weight: 700; color: #1d4ed8;"><i class="fa-solid fa-diagram-project"></i> CrPC Procedure Flowchart (Stages of Criminal Case)</a></li>`);
    console.log('Added CrPC Flowchart to index.html mobile drawer');
  }

  // 2c. Search chips
  const ppcChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='ppc-section-finder\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (ppcChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(ppcChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='crpc-procedure-flowchart.html'" style="font-weight:700; border-color:#1d4ed8; color:#1d4ed8; background: rgba(29, 78, 216, 0.05);"><i class="fa-solid fa-diagram-project"></i> CrPC Procedure Flowchart (FIR, Remand, Challan, Trial &amp; Appeals)</button>`);
    console.log('Added CrPC Flowchart to index.html search chips');
  }

  // 2d. Resource Card
  const ppcCardTarget = `<!-- Pakistan Penal Code (PPC) Finder Card -->`;
  const crpcCardHtml = `<!-- CrPC Procedure Flowchart Card -->
                <div class="resource-card" style="border: 1px solid rgba(29, 78, 216, 0.4); background: linear-gradient(135deg, rgba(29, 78, 216, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(29, 78, 216, 0.2); color: #1d4ed8;"><i class="fa-solid fa-diagram-project"></i></div>
                    <div class="resource-content">
                        <h3>⚖️ CrPC Procedure Flowchart: Stages of a Criminal Case</h3>
                        <p>Follow the complete sequence of criminal justice in Pakistan under the Code of Criminal Procedure (CrPC 1898): from FIR/Complaint, investigation, physical remand (Sec 167), challan submission (Sec 173), charge framing, trial &amp; witness examination (Sec 342), to judgment, acquittal, and High Court appeals.</p>
                        <div class="resource-meta"><span style="color:#1d4ed8; font-weight:700;"><i class="fa-solid fa-timeline"></i> 8 Stages &bull; Dual Pathways</span> <span>★ Case Simulator &bull; 15 MCQs</span></div>
                        <a href="crpc-procedure-flowchart.html" class="resource-btn" style="background: #1d4ed8; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-diagram-project"></i> Launch CrPC Flowchart</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(ppcCardTarget)) {
    indexContent = indexContent.replace(ppcCardTarget, crpcCardHtml + ppcCardTarget);
    console.log('Added CrPC Flowchart resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
} else {
  console.log('index.html already contains crpc-procedure-flowchart.html links');
}

// 3. Update footer in ppc-section-finder.html and constitution-explorer.html
const ppcHtmlPath = path.join(frontendDir, 'ppc-section-finder.html');
if (fs.existsSync(ppcHtmlPath)) {
  let ppcHtml = fs.readFileSync(ppcHtmlPath, 'utf-8');
  if (!ppcHtml.includes('crpc-procedure-flowchart.html')) {
    const footerRegex = /(<a\s+href="constitution-explorer\.html">Constitution Explorer<\/a>)/i;
    if (footerRegex.test(ppcHtml)) {
      ppcHtml = ppcHtml.replace(footerRegex, `$1 &bull; <a href="crpc-procedure-flowchart.html">CrPC Flowchart</a>`);
      fs.writeFileSync(ppcHtmlPath, ppcHtml, 'utf-8');
      console.log('Added CrPC Flowchart link to ppc-section-finder.html footer');
    }
  }
}

console.log('CrPC Navigation integration complete!');
