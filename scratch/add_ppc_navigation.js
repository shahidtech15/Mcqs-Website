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

  if (!content.includes('href="ppc-section-finder.html"')) {
    // Add right after constitution-explorer.html link
    const constRegex = /(<a\s+href="constitution-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (constRegex.test(content)) {
      content = content.replace(constRegex, `$1\n            <a href="ppc-section-finder.html" class="switcher-btn"><i class="fas fa-gavel"></i> PPC Finder</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find constitution-explorer.html link in ${file}`);
    }
  } else {
    console.log(`ppc-section-finder.html already in ${file}`);
  }
});

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="ppc-section-finder.html"')) {
  // 2a. Header dropdown
  const constHeaderRegex = /(<a\s+href="constitution-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (constHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(constHeaderRegex, `$1\n                <a href="ppc-section-finder.html" style="font-weight:700; color:#991b1b;"><i class="fa-solid fa-gavel"></i> PPC Finder <span style="background:#991b1b; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added PPC Finder to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const constMobileRegex = /(<li><a\s+href="constitution-explorer\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (constMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(constMobileRegex, `$1\n                <li><a href="ppc-section-finder.html" style="font-weight: 700; color: #991b1b;"><i class="fa-solid fa-gavel"></i> Pakistan Penal Code (PPC 1860 Section Finder)</a></li>`);
    console.log('Added PPC Finder to index.html mobile drawer');
  }

  // 2c. Search chips
  const constChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='constitution-explorer\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (constChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(constChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='ppc-section-finder.html'" style="font-weight:700; border-color:#991b1b; color:#991b1b; background: rgba(153, 27, 27, 0.05);"><i class="fa-solid fa-gavel"></i> PPC Section Finder (47 Core Offences, Ingredients, Punishments &amp; CrPC Forum)</button>`);
    console.log('Added PPC Finder to index.html search chips');
  }

  // 2d. Resource Card
  const constCardTarget = `<!-- Pakistan Constitution Explorer Card -->`;
  const ppcCardHtml = `<!-- Pakistan Penal Code (PPC) Finder Card -->
                <div class="resource-card" style="border: 1px solid rgba(153, 27, 27, 0.4); background: linear-gradient(135deg, rgba(153, 27, 27, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(153, 27, 27, 0.2); color: #991b1b;"><i class="fa-solid fa-gavel"></i></div>
                    <div class="resource-content">
                        <h3>⚖️ PPC Section Finder (Pakistan Penal Code, 1860)</h3>
                        <p>Search or select criminal offences to inspect essential statutory ingredients (*Actus Reus* &amp; *Mens Rea*), punishments (Qisas, Diyat, Arsh, Daman &amp; Tazir), CrPC Schedule II status (Cognizable/Bailable), illustrative factual examples, and Supreme Court case law.</p>
                        <div class="resource-meta"><span style="color:#991b1b; font-weight:700;"><i class="fa-solid fa-scale-unbalanced"></i> 511 Sections &bull; 47 Core Crimes</span> <span>★ CrPC Sched II &bull; 47 MCQs</span></div>
                        <a href="ppc-section-finder.html" class="resource-btn" style="background: #991b1b; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-gavel"></i> Launch PPC Finder</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(constCardTarget)) {
    indexContent = indexContent.replace(constCardTarget, ppcCardHtml + constCardTarget);
    console.log('Added PPC Finder resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
} else {
  console.log('index.html already contains ppc-section-finder.html links');
}

// 3. Update footer in constitution-explorer.html if needed
const constHtmlPath = path.join(frontendDir, 'constitution-explorer.html');
if (fs.existsSync(constHtmlPath)) {
  let constHtml = fs.readFileSync(constHtmlPath, 'utf-8');
  if (!constHtml.includes('ppc-section-finder.html')) {
    const footerLinkRegex = /(<a\s+href="constitution-explorer\.html">Constitution Explorer<\/a>)/i;
    if (footerLinkRegex.test(constHtml)) {
      constHtml = constHtml.replace(footerLinkRegex, `$1 &bull; <a href="ppc-section-finder.html">PPC Section Finder</a>`);
      fs.writeFileSync(constHtmlPath, constHtml, 'utf-8');
      console.log('Added PPC Finder link to constitution-explorer.html footer');
    }
  }
}

console.log('Navigation integration complete!');
