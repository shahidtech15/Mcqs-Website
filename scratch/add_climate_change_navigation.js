const fs = require('fs');

console.log('--- Updating Navigation and Switcher Bars for Climate Change Explorer ---');

// 1. Pages with .site-switcher-bar
const switcherPages = [
  'periodic-table.html',
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

  // Check if climate-change-explorer.html is already in the switcher
  if (!content.includes('climate-change-explorer.html')) {
    // Add right after periodic-table.html switcher button
    const regex = /(<a href="periodic-table\.html"[^>]*>[\s\S]*?<\/a>)/;
    if (regex.test(content)) {
      const addition = '\n            <a href="climate-change-explorer.html" class="switcher-btn"><i class="fas fa-temperature-high"></i> Climate Change</a>';
      content = content.replace(regex, '$1' + addition);
      fs.writeFileSync(path, content, 'utf8');
      updatedSwitcherCount++;
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find periodic-table.html in ${file}`);
    }
  }
});

console.log(`Updated ${updatedSwitcherCount} switcher bars.`);

// 2. Update frontend/index.html
if (fs.existsSync('frontend/index.html')) {
  let indexContent = fs.readFileSync('frontend/index.html', 'utf8');

  // A. Top Navbar Link
  if (!indexContent.includes('href="climate-change-explorer.html"')) {
    const navRegex = /(<a href="periodic-table\.html"[^>]*>[\s\S]*?<\/a>)/;
    if (navRegex.test(indexContent)) {
      const navAddition = '\n                <a href="climate-change-explorer.html" style="font-weight:700; color:#10b981;"><i class="fa-solid fa-temperature-high"></i> Climate Change <span style="background:#10b981; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>';
      indexContent = indexContent.replace(navRegex, '$1' + navAddition);
      console.log('Added navbar link in index.html');
    }

    // B. Quick search chip
    const chipRegex = /(<button type="button" class="search-chip" onclick="window\.location\.href='periodic-table\.html'"[^>]*>[\s\S]*?<\/button>)/;
    if (chipRegex.test(indexContent)) {
      const chipAddition = '\n                    <button type="button" class="search-chip" onclick="window.location.href=\'climate-change-explorer.html\'" style="font-weight:700; border-color:#10b981; color:#059669; background: rgba(16, 185, 129, 0.05);"><i class="fa-solid fa-temperature-high"></i> Climate Change Explorer (Temperatures, Emissions, Glaciers, Sea-Level &amp; Treaties)</button>';
      indexContent = indexContent.replace(chipRegex, '$1' + chipAddition);
      console.log('Added search chip in index.html');
    }

    // C. Resource Card in Science Section
    const cardRegex = /(<div class="resource-card" style="border: 2px solid #8b5cf6;"[\s\S]*?<\/div>\s*<\/div>)/;
    if (cardRegex.test(indexContent)) {
      const climateCard = `
                <div class="resource-card" style="border: 2px solid #10b981;">
                    <div class="resource-thumb" style="background: linear-gradient(135deg, #059669, #0284c7); color: #ffffff; display: flex; align-items: center; justify-content: center; height: 140px; font-size: 3.5rem;">
                        <i class="fa-solid fa-earth-americas"></i>
                    </div>
                    <div class="resource-body">
                        <span class="resource-tag" style="background: #d1fae5; color: #065f46;"><i class="fa-solid fa-leaf"></i> Environmental Science &amp; Governance</span>
                        <h3 class="resource-title"><a href="climate-change-explorer.html">Climate Change Explorer</a></h3>
                        <p class="resource-desc">Explore global temperature anomalies, carbon concentrations, renewable energy, Third Pole glaciers, sea-level rise, COP agreements, and Pakistan's climate emergency.</p>
                        <div class="resource-meta"><span style="color:#059669; font-weight:700;"><i class="fa-solid fa-circle-dot"></i> 1880–2024 Trends &bull; 8 Modules</span> <span>★ 2100 Simulator &bull; 12 MCQs</span></div>
                        <a href="climate-change-explorer.html" class="resource-btn" style="background: #059669; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-temperature-high"></i> Launch Climate Explorer</a>
                    </div>
                </div>`;
      indexContent = indexContent.replace(cardRegex, '$1' + climateCard);
      console.log('Added climate resource card in index.html');
    }

    // D. Footer link
    const footerRegex = /(<li><a href="periodic-table\.html"[^>]*>[\s\S]*?<\/li>)/;
    if (footerRegex.test(indexContent)) {
      const footerAddition = '\n                    <li><a href="climate-change-explorer.html" style="color: #34d399; font-weight: 700; text-decoration: none;"><i class="fas fa-temperature-high" style="color: #34d399; margin-right: 6px;"></i>Climate Change Explorer (Emissions, Glaciers &amp; COP Treaties)</a></li>';
      indexContent = indexContent.replace(footerRegex, '$1' + footerAddition);
      console.log('Added footer link in index.html');
    }

    fs.writeFileSync('frontend/index.html', indexContent, 'utf8');
    console.log('Successfully updated frontend/index.html');
  } else {
    console.log('climate-change-explorer.html already linked in index.html');
  }
}

// 3. Update footer links in sibling pages
const siblingFooters = ['periodic-table.html', 'solar-system-explorer.html', 'human-body-explorer.html'];
siblingFooters.forEach(file => {
  const path = 'frontend/' + file;
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');
  if (!content.includes('href="climate-change-explorer.html"')) {
    const regex = /(<a href="periodic-table\.html">Periodic Table<\/a>)/;
    if (regex.test(content)) {
      content = content.replace(regex, '$1\n                <a href="climate-change-explorer.html">Climate Change</a>');
      fs.writeFileSync(path, content, 'utf8');
      console.log(`Added footer link in ${file}`);
    }
  }
});
