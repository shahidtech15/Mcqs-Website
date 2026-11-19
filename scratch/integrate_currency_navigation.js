const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

console.log('=== INTEGRATING CURRENCY & EXCHANGE EXPLORER NAVIGATION ===\n');

// 1. Update .site-switcher-bar across all pages that contain it
const files = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
let switcherUpdateCount = 0;

files.forEach(file => {
  if (file === 'currency-exchange-explorer.html') return;
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('site-switcher-bar') && !content.includes('href="currency-exchange-explorer.html"')) {
    // Add right after world-economy-dashboard.html link
    const econRegex = /(<a\s+href="world-economy-dashboard\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (econRegex.test(content)) {
      content = content.replace(econRegex, `$1\n            <a href="currency-exchange-explorer.html" class="switcher-btn"><i class="fas fa-coins"></i> Currency &amp; Exchange</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
      switcherUpdateCount++;
    } else {
      // If world-economy-dashboard not present, try fia-laws-explorer
      const fiaRegex = /(<a\s+href="fia-laws-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
      if (fiaRegex.test(content)) {
        content = content.replace(fiaRegex, `$1\n            <a href="currency-exchange-explorer.html" class="switcher-btn"><i class="fas fa-coins"></i> Currency &amp; Exchange</a>`);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated switcher bar in ${file} (via fia fallback)`);
        switcherUpdateCount++;
      }
    }
  }
});

console.log(`Total switcher bars updated: ${switcherUpdateCount}`);

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="currency-exchange-explorer.html"')) {
  // 2a. Header dropdown
  const econHeaderRegex = /(<a\s+href="world-economy-dashboard\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (econHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(econHeaderRegex, `$1\n                <a href="currency-exchange-explorer.html" style="font-weight:700; color:#d97706;"><i class="fa-solid fa-coins"></i> Currency &amp; Exchange <span style="background:#d97706; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added Currency & Exchange Explorer to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const econMobileRegex = /(<li><a\s+href="world-economy-dashboard\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (econMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(econMobileRegex, `$1\n                <li><a href="currency-exchange-explorer.html" style="font-weight: 700; color: #d97706;"><i class="fa-solid fa-coins"></i> Currency &amp; Exchange Explorer (Currencies, Central Banks, Rates &amp; History)</a></li>`);
    console.log('Added Currency & Exchange Explorer to index.html mobile drawer');
  }

  // 2c. Search chips
  const econChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='world-economy-dashboard\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (econChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(econChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='currency-exchange-explorer.html'" style="font-weight:700; border-color:#d97706; color:#d97706; background: rgba(217, 119, 6, 0.05);"><i class="fa-solid fa-coins"></i> Currency &amp; Exchange Explorer (World Currencies, Central Banks, Exchange-Rate Systems, History &amp; FX Calculator)</button>`);
    console.log('Added Currency & Exchange Explorer to index.html search chips');
  }

  // 2d. Resource Card
  const econCardTarget = `<!-- World Economy Dashboard Card -->`;
  const currencyCardHtml = `<!-- Currency & Exchange Explorer Card -->
                <div class="resource-card" style="border: 1px solid rgba(217, 119, 6, 0.4); background: linear-gradient(135deg, rgba(217, 119, 6, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(217, 119, 6, 0.2); color: #d97706;"><i class="fa-solid fa-coins"></i></div>
                    <div class="resource-content">
                        <h3>🪙 Currency &amp; Exchange Explorer: Currencies, Central Banks, Rates &amp; History</h3>
                        <p>Master monetary economics and international finance: 30+ world currencies, reserve currencies, central bank mandates &amp; balance sheets, 8 exchange-rate regimes &amp; theories (Mundell-Fleming, REER/NEER, PPP, Carry Trade), monetary history timeline (from Bretton Woods to BRICS), real-time FX calculator with macro shock simulator, and 20 CSS/PMS exam MCQs.</p>
                        <div class="resource-meta"><span style="color:#d97706; font-weight:700;"><i class="fa-solid fa-coins"></i> 30 Currencies &bull; 10 Central Banks</span> <span>★ Macro FX Simulator &bull; 20 Exam MCQs</span></div>
                        <a href="currency-exchange-explorer.html" class="resource-btn" style="background: #d97706; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-coins"></i> Launch Currency &amp; Exchange Explorer</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(econCardTarget)) {
    indexContent = indexContent.replace(econCardTarget, currencyCardHtml + econCardTarget);
    console.log('Added Currency & Exchange Explorer resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
}

console.log('\n=== CURRENCY & EXCHANGE NAVIGATION INTEGRATION COMPLETED ===');
