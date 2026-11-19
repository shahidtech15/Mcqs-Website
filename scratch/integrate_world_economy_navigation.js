const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

console.log('=== INTEGRATING WORLD ECONOMY DASHBOARD NAVIGATION ===\n');

// 1. Update .site-switcher-bar across all pages that contain it
const files = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  if (file === 'world-economy-dashboard.html') return;
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('site-switcher-bar') && !content.includes('href="world-economy-dashboard.html"')) {
    // Add right after fia-laws-explorer.html link
    const fiaRegex = /(<a\s+href="fia-laws-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (fiaRegex.test(content)) {
      content = content.replace(fiaRegex, `$1\n            <a href="world-economy-dashboard.html" class="switcher-btn"><i class="fas fa-chart-line"></i> World Economy</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
    } else {
      // If fia-laws-explorer not present, try court-structure-explorer
      const courtRegex = /(<a\s+href="court-structure-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
      if (courtRegex.test(content)) {
        content = content.replace(courtRegex, `$1\n            <a href="world-economy-dashboard.html" class="switcher-btn"><i class="fas fa-chart-line"></i> World Economy</a>`);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated switcher bar in ${file} (via court fallback)`);
      }
    }
  }
});

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="world-economy-dashboard.html"')) {
  // 2a. Header dropdown
  const fiaHeaderRegex = /(<a\s+href="fia-laws-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (fiaHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(fiaHeaderRegex, `$1\n                <a href="world-economy-dashboard.html" style="font-weight:700; color:#0284c7;"><i class="fa-solid fa-chart-line"></i> World Economy Dashboard <span style="background:#0284c7; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added World Economy Dashboard to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const fiaMobileRegex = /(<li><a\s+href="fia-laws-explorer\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (fiaMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(fiaMobileRegex, `$1\n                <li><a href="world-economy-dashboard.html" style="font-weight: 700; color: #0284c7;"><i class="fa-solid fa-chart-line"></i> World Economy Dashboard (GDP, Inflation, Debt, Trade &amp; Statistics)</a></li>`);
    console.log('Added World Economy Dashboard to index.html mobile drawer');
  }

  // 2c. Search chips
  const fiaChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='fia-laws-explorer\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (fiaChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(fiaChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='world-economy-dashboard.html'" style="font-weight:700; border-color:#0284c7; color:#0284c7; background: rgba(2, 132, 199, 0.05);"><i class="fa-solid fa-chart-line"></i> World Economy Dashboard (GDP, Inflation, Unemployment, Debt &amp; Trade Balances)</button>`);
    console.log('Added World Economy Dashboard to index.html search chips');
  }

  // 2d. Resource Card
  const fiaCardTarget = `<!-- FIA Laws Explorer Card -->`;
  const econCardHtml = `<!-- World Economy Dashboard Card -->
                <div class="resource-card" style="border: 1px solid rgba(2, 132, 199, 0.4); background: linear-gradient(135deg, rgba(2, 132, 199, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(2, 132, 199, 0.2); color: #0284c7;"><i class="fa-solid fa-chart-line"></i></div>
                    <div class="resource-content">
                        <h3>📈 World Economy Dashboard: GDP, Inflation, Debt &amp; Trade Balances</h3>
                        <p>Explore macroeconomic data and statistics across 40+ premier world economies: nominal and PPP GDP, GDP per capita, inflation, unemployment, public debt-to-GDP, trade balances, foreign exchange reserves, central bank interest rates, policy dilemmas, and 20 economics exam MCQs.</p>
                        <div class="resource-meta"><span style="color:#0284c7; font-weight:700;"><i class="fa-solid fa-earth-americas"></i> 40 Global Economies &bull; 8 Key Indicators</span> <span>★ Head-to-Head Duel &bull; 20 Exam MCQs</span></div>
                        <a href="world-economy-dashboard.html" class="resource-btn" style="background: #0284c7; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-chart-line"></i> Launch World Economy Dashboard</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(fiaCardTarget)) {
    indexContent = indexContent.replace(fiaCardTarget, econCardHtml + fiaCardTarget);
    console.log('Added World Economy Dashboard resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
}

console.log('\n=== WORLD ECONOMY NAVIGATION INTEGRATION COMPLETED ===');
