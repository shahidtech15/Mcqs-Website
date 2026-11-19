const fs = require('fs');

console.log('--- Updating Navigation and Switcher Bars for Periodic Table ---');

// 1. Pages with .site-switcher-bar
const switcherPages = [
  'solar-system-explorer.html',
  'human-body-explorer.html',
  'crossword.html',
  'global-power-comparison.html',
  'international-organizations-explorer.html',
  'timeline.html',
  'unsc-simulator.html',
  'word-search.html',
  'world-history-timeline.html'
];

let updatedSwitcherCount = 0;
switcherPages.forEach(file => {
  const path = 'frontend/' + file;
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');

  // Check if periodic-table.html is already in the switcher
  if (!content.includes('periodic-table.html')) {
    // Add right after human-body-explorer.html switcher button
    const regex = /(<a href="human-body-explorer\.html"[^>]*>[\s\S]*?<\/a>)/;
    if (regex.test(content)) {
      const addition = '\n            <a href="periodic-table.html" class="switcher-btn"><i class="fas fa-atom"></i> Periodic Table</a>';
      content = content.replace(regex, '$1' + addition);
      fs.writeFileSync(path, content, 'utf8');
      updatedSwitcherCount++;
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find human-body-explorer.html in ${file}`);
    }
  }
});

console.log(`Updated ${updatedSwitcherCount} switcher bars.`);

// 2. Update frontend/index.html
if (fs.existsSync('frontend/index.html')) {
  let indexContent = fs.readFileSync('frontend/index.html', 'utf8');

  // A. Top Navbar Link
  if (!indexContent.includes('href="periodic-table.html"')) {
    const navRegex = /(<a href="human-body-explorer\.html"[^>]*>[\s\S]*?<\/a>)/;
    if (navRegex.test(indexContent)) {
      const navAddition = '\n                <a href="periodic-table.html" style="font-weight:700; color:#8b5cf6;"><i class="fa-solid fa-atom"></i> Periodic Table <span style="background:#8b5cf6; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>';
      indexContent = indexContent.replace(navRegex, '$1' + navAddition);
      console.log('Added navbar link in index.html');
    }

    // B. Quick search chip
    const chipRegex = /(<button type="button" class="search-chip" onclick="window\.location\.href='human-body-explorer\.html'"[^>]*>[\s\S]*?<\/button>)/;
    if (chipRegex.test(indexContent)) {
      const chipAddition = '\n                    <button type="button" class="search-chip" onclick="window.location.href=\'periodic-table.html\'" style="font-weight:700; border-color:#8b5cf6; color:#7c3aed; background: rgba(139, 92, 246, 0.05);"><i class="fa-solid fa-atom"></i> Interactive Periodic Table (All 118 Elements, Electron Configurations, Bohr Orbitals &amp; Trends)</button>';
      indexContent = indexContent.replace(chipRegex, '$1' + chipAddition);
      console.log('Added search chip in index.html');
    }

    // C. Resource Card in Science Section
    const cardRegex = /(<div class="resource-card" style="border: 2px solid #e11d48;"[\s\S]*?<\/div>\s*<\/div>)/;
    if (cardRegex.test(indexContent)) {
      const periodicCard = `
                <div class="resource-card" style="border: 2px solid #8b5cf6;">
                    <div class="resource-thumb" style="background: linear-gradient(135deg, #7c3aed, #4f46e5); color: #ffffff; display: flex; align-items: center; justify-content: center; height: 140px; font-size: 3.5rem;">
                        <i class="fa-solid fa-atom"></i>
                    </div>
                    <div class="resource-body">
                        <span class="resource-tag" style="background: #ede9fe; color: #6d28d9;"><i class="fa-solid fa-flask"></i> Chemistry &amp; Material Science</span>
                        <h3 class="resource-title"><a href="periodic-table.html">Interactive Periodic Table</a></h3>
                        <p class="resource-desc">Explore all 118 chemical elements, electron configurations, animated Bohr orbital models, dynamic temperature phase shifts, periodic trends, and exam hotspots.</p>
                        <div class="resource-meta"><span style="color:#7c3aed; font-weight:700;"><i class="fa-solid fa-circle-dot"></i> 118 Elements &bull; 4 Blocks</span> <span>★ Bohr Orbitals &bull; 12 MCQs</span></div>
                        <a href="periodic-table.html" class="resource-btn" style="background: #7c3aed; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-atom"></i> Launch Periodic Table</a>
                    </div>
                </div>`;
      indexContent = indexContent.replace(cardRegex, '$1' + periodicCard);
      console.log('Added science resource card in index.html');
    }

    // D. Footer link
    const footerRegex = /(<li><a href="human-body-explorer\.html"[^>]*>[\s\S]*?<\/li>)/;
    if (footerRegex.test(indexContent)) {
      const footerAddition = '\n                    <li><a href="periodic-table.html" style="color: #c084fc; font-weight: 700; text-decoration: none;"><i class="fas fa-atom" style="color: #c084fc; margin-right: 6px;"></i>Interactive Periodic Table (All 118 Elements)</a></li>';
      indexContent = indexContent.replace(footerRegex, '$1' + footerAddition);
      console.log('Added footer link in index.html');
    }

    fs.writeFileSync('frontend/index.html', indexContent, 'utf8');
    console.log('Successfully updated frontend/index.html');
  } else {
    console.log('periodic-table.html already linked in index.html');
  }
}
