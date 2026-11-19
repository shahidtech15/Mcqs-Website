const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

console.log('=== INTEGRATING WHO TRADES WHAT NAVIGATION ===\n');

// 1. Update .site-switcher-bar across all pages that contain it
const files = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
let switcherUpdateCount = 0;

files.forEach(file => {
  if (file === 'who-trades-what.html') return;
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('site-switcher-bar') && !content.includes('href="who-trades-what.html"')) {
    // Add right after currency-exchange-explorer.html link
    const currRegex = /(<a\s+href="currency-exchange-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (currRegex.test(content)) {
      content = content.replace(currRegex, `$1\n            <a href="who-trades-what.html" class="switcher-btn"><i class="fas fa-ship"></i> Who Trades What?</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
      switcherUpdateCount++;
    } else {
      // If currency-exchange-explorer not present, try world-economy-dashboard
      const econRegex = /(<a\s+href="world-economy-dashboard\.html"[^>]*>[\s\S]*?<\/a>)/i;
      if (econRegex.test(content)) {
        content = content.replace(econRegex, `$1\n            <a href="who-trades-what.html" class="switcher-btn"><i class="fas fa-ship"></i> Who Trades What?</a>`);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated switcher bar in ${file} (via econ fallback)`);
        switcherUpdateCount++;
      }
    }
  }
});

console.log(`Total switcher bars updated: ${switcherUpdateCount}`);

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="who-trades-what.html"')) {
  // 2a. Header dropdown
  const currHeaderRegex = /(<a\s+href="currency-exchange-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (currHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(currHeaderRegex, `$1\n                <a href="who-trades-what.html" style="font-weight:700; color:#0284c7;"><i class="fa-solid fa-ship"></i> Who Trades What? <span style="background:#0284c7; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added Who Trades What to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const currMobileRegex = /(<li><a\s+href="currency-exchange-explorer\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (currMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(currMobileRegex, `$1\n                <li><a href="who-trades-what.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-ship"></i> Who Trades What? (Global Exports, Imports &amp; Partners)</a></li>`);
    console.log('Added Who Trades What to index.html mobile drawer');
  }

  // 2c. Search chips
  const currChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='currency-exchange-explorer\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (currChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(currChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='who-trades-what.html'" style="font-weight:700; border-color:#0284c7; color:#0284c7; background: rgba(2, 132, 199, 0.05);"><i class="fa-solid fa-ship"></i> Who Trades What? (36 Trading Nations, Top Products, Bilateral Matcher, Trade Theories &amp; Blocs)</button>`);
    console.log('Added Who Trades What to index.html search chips');
  }

  // 2d. Resource Card
  const currCardTarget = `<!-- Currency & Exchange Explorer Card -->`;
  const tradeCardHtml = `<!-- Who Trades What? Global Trade Explorer Card -->
                <div class="resource-card" style="border: 1px solid rgba(2, 132, 199, 0.4); background: linear-gradient(135deg, rgba(2, 132, 199, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(2, 132, 199, 0.2); color: #0284c7;"><i class="fa-solid fa-ship"></i></div>
                    <div class="resource-content">
                        <h3>🚢 Who Trades What? Global Trade &amp; Merchandise Flow Explorer</h3>
                        <p>Master international economics and global supply chains: 36 leading trading economies, top export &amp; import product baskets (HS codes), bilateral trade matcher, foundational trade theories (Ricardo, Heckscher-Ohlin, Krugman, Prebisch-Singer), major trade blocs (WTO, RCEP, USMCA, EU, AfCFTA), Pakistan's trade deficit dossier, interactive tariff simulator, and 20 CSS/PMS exam MCQs.</p>
                        <div class="resource-meta"><span style="color:#0284c7; font-weight:700;"><i class="fa-solid fa-ship"></i> 36 Global Economies &bull; 7 Traded Commodity Sectors</span> <span>★ Bilateral Matcher &bull; 20 Exam MCQs</span></div>
                        <a href="who-trades-what.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-ship"></i> Launch Who Trades What Explorer</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(currCardTarget)) {
    indexContent = indexContent.replace(currCardTarget, tradeCardHtml + currCardTarget);
    console.log('Added Who Trades What resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
}

console.log('\n=== WHO TRADES WHAT NAVIGATION INTEGRATION COMPLETED ===');
