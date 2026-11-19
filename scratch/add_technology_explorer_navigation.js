const fs = require('fs');

console.log('--- Updating Navigation and Switcher Bars for Technology Explorer ---');

// 1. Pages with .site-switcher-bar
const switcherPages = [
  'climate-change-explorer.html',
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

  // Check if technology-explorer.html is already in the switcher
  if (!content.includes('technology-explorer.html')) {
    // Add right after climate-change-explorer.html switcher button
    const regex = /(<a href="climate-change-explorer\.html"[^>]*>[\s\S]*?<\/a>)/;
    if (regex.test(content)) {
      const addition = '\n            <a href="technology-explorer.html" class="switcher-btn"><i class="fas fa-microchip"></i> Technology</a>';
      content = content.replace(regex, '$1' + addition);
      fs.writeFileSync(path, content, 'utf8');
      updatedSwitcherCount++;
      console.log(`Updated switcher bar in ${file}`);
    } else {
      console.warn(`Could not find climate-change-explorer.html in ${file}`);
    }
  }
});

console.log(`Updated ${updatedSwitcherCount} switcher bars.`);

// 2. Update frontend/index.html
if (fs.existsSync('frontend/index.html')) {
  let indexContent = fs.readFileSync('frontend/index.html', 'utf8');

  // A. Top Navbar Link
  if (!indexContent.includes('href="technology-explorer.html"')) {
    const navRegex = /(<a href="climate-change-explorer\.html"[^>]*>[\s\S]*?<\/a>)/;
    if (navRegex.test(indexContent)) {
      const navAddition = '\n                <a href="technology-explorer.html" style="font-weight:700; color:#8b5cf6;"><i class="fa-solid fa-microchip"></i> Technology <span style="background:#8b5cf6; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>';
      indexContent = indexContent.replace(navRegex, '$1' + navAddition);
      console.log('Added navbar link in index.html');
    }

    // B. Quick search chip
    const chipRegex = /(<button type="button" class="search-chip" onclick="window\.location\.href='climate-change-explorer\.html'"[^>]*>[\s\S]*?<\/button>)/;
    if (chipRegex.test(indexContent)) {
      const chipAddition = '\n                    <button type="button" class="search-chip" onclick="window.location.href=\'technology-explorer.html\'" style="font-weight:700; border-color:#8b5cf6; color:#7c3aed; background: rgba(139, 92, 246, 0.05);"><i class="fa-solid fa-microchip"></i> Technology Explorer (AI, Robotics, Nanotechnology, Quantum, Satellites &amp; Biotech)</button>';
      indexContent = indexContent.replace(chipRegex, '$1' + chipAddition);
      console.log('Added search chip in index.html');
    }

    // C. Resource Card in Science Section
    const cardRegex = /(<div class="resource-card" style="border: 2px solid #10b981;"[\s\S]*?<\/div>\s*<\/div>)/;
    if (cardRegex.test(indexContent)) {
      const techCard = `
                <div class="resource-card" style="border: 2px solid #8b5cf6;">
                    <div class="resource-thumb" style="background: linear-gradient(135deg, #8b5cf6, #0284c7); color: #ffffff; display: flex; align-items: center; justify-content: center; height: 140px; font-size: 3.5rem;">
                        <i class="fa-solid fa-microchip"></i>
                    </div>
                    <div class="resource-body">
                        <span class="resource-tag" style="background: #ede9fe; color: #6d28d9;"><i class="fa-solid fa-rocket"></i> Modern Technology &amp; Innovation</span>
                        <h3 class="resource-title"><a href="technology-explorer.html">Emerging Technologies Explorer</a></h3>
                        <p class="resource-desc">Interactive explainers and concept simulators for Artificial Intelligence, Robotics, Nanotechnology, Quantum Computing, Satellites, and Biotechnology.</p>
                        <div class="resource-meta"><span style="color:#7c3aed; font-weight:700;"><i class="fa-solid fa-circle-dot"></i> 6 Frontier Pillars</span> <span>★ Interactive Simulators &bull; 12 MCQs</span></div>
                        <a href="technology-explorer.html" class="resource-btn" style="background: #7c3aed; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-microchip"></i> Launch Tech Explorer</a>
                    </div>
                </div>`;
      indexContent = indexContent.replace(cardRegex, '$1' + techCard);
      console.log('Added technology resource card in index.html');
    }

    // D. Footer link
    const footerRegex = /(<li><a href="climate-change-explorer\.html"[^>]*>[\s\S]*?<\/li>)/;
    if (footerRegex.test(indexContent)) {
      const footerAddition = '\n                    <li><a href="technology-explorer.html" style="color: #c084fc; font-weight: 700; text-decoration: none;"><i class="fas fa-microchip" style="color: #c084fc; margin-right: 6px;"></i>Emerging Technology Explorer (AI, Quantum, Space &amp; Biotech)</a></li>';
      indexContent = indexContent.replace(footerRegex, '$1' + footerAddition);
      console.log('Added footer link in index.html');
    }

    fs.writeFileSync('frontend/index.html', indexContent, 'utf8');
    console.log('Successfully updated frontend/index.html');
  } else {
    console.log('technology-explorer.html already linked in index.html');
  }
}

// 3. Update footer links in sibling pages
const siblingFooters = ['climate-change-explorer.html', 'periodic-table.html', 'solar-system-explorer.html', 'human-body-explorer.html'];
siblingFooters.forEach(file => {
  const path = 'frontend/' + file;
  if (!fs.existsSync(path)) return;
  let content = fs.readFileSync(path, 'utf8');
  if (!content.includes('href="technology-explorer.html"')) {
    const regex = /(<a href="climate-change-explorer\.html">Climate Change<\/a>)/;
    if (regex.test(content)) {
      content = content.replace(regex, '$1\n                <a href="technology-explorer.html">Technology</a>');
      fs.writeFileSync(path, content, 'utf8');
      console.log(`Added footer link in ${file}`);
    } else {
      const regexPt = /(<a href="periodic-table\.html">Periodic Table<\/a>)/;
      if (regexPt.test(content)) {
        content = content.replace(regexPt, '$1\n                <a href="technology-explorer.html">Technology</a>');
        fs.writeFileSync(path, content, 'utf8');
        console.log(`Added footer link (via periodic-table) in ${file}`);
      }
    }
  }
});
