const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');

console.log('=== INTEGRATING DAILY CHALLENGES NAVIGATION ===\n');

// 1. Update .site-switcher-bar across all pages that contain it
const files = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
let switcherUpdateCount = 0;

files.forEach(file => {
  if (file === 'daily-challenges.html') return;
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes('site-switcher-bar') && !content.includes('href="daily-challenges.html"')) {
    // Add right after who-trades-what.html link
    const tradeRegex = /(<a\s+href="who-trades-what\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (tradeRegex.test(content)) {
      content = content.replace(tradeRegex, `$1\n            <a href="daily-challenges.html" class="switcher-btn"><i class="fas fa-bolt"></i> Daily Challenges</a>`);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated switcher bar in ${file}`);
      switcherUpdateCount++;
    } else {
      // If who-trades-what not present, try currency-exchange-explorer
      const currRegex = /(<a\s+href="currency-exchange-explorer\.html"[^>]*>[\s\S]*?<\/a>)/i;
      if (currRegex.test(content)) {
        content = content.replace(currRegex, `$1\n            <a href="daily-challenges.html" class="switcher-btn"><i class="fas fa-bolt"></i> Daily Challenges</a>`);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated switcher bar in ${file} (via currency fallback)`);
        switcherUpdateCount++;
      }
    }
  }
});

console.log(`Total switcher bars updated: ${switcherUpdateCount}`);

// 2. Update frontend/index.html
const indexPath = path.join(frontendDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf-8');

if (!indexContent.includes('href="daily-challenges.html"')) {
  // 2a. Header dropdown
  const tradeHeaderRegex = /(<a\s+href="who-trades-what\.html"[^>]*>[\s\S]*?<\/a>)/i;
  if (tradeHeaderRegex.test(indexContent)) {
    indexContent = indexContent.replace(tradeHeaderRegex, `$1\n                <a href="daily-challenges.html" style="font-weight:700; color:#7c3aed;"><i class="fa-solid fa-bolt"></i> Daily Challenges <span style="background:#7c3aed; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>`);
    console.log('Added Daily Challenges to index.html header dropdown');
  }

  // 2b. Mobile drawer
  const tradeMobileRegex = /(<li><a\s+href="who-trades-what\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i;
  if (tradeMobileRegex.test(indexContent)) {
    indexContent = indexContent.replace(tradeMobileRegex, `$1\n                <li><a href="daily-challenges.html" style="font-weight: 700; color: #7c3aed;"><i class="fa-solid fa-bolt"></i> Daily Interactive Challenges (QOTD, Personality, Fact/Fiction, Daily 5 &amp; Championship)</a></li>`);
    console.log('Added Daily Challenges to index.html mobile drawer');
  }

  // 2c. Search chips
  const tradeChipRegex = /(<button\s+type="button"\s+class="search-chip"\s+onclick="window\.location\.href='who-trades-what\.html'"[^>]*>[\s\S]*?<\/button>)/i;
  if (tradeChipRegex.test(indexContent)) {
    indexContent = indexContent.replace(tradeChipRegex, `$1\n                    <button type="button" class="search-chip" onclick="window.location.href='daily-challenges.html'" style="font-weight:700; border-color:#7c3aed; color:#7c3aed; background: rgba(124, 58, 237, 0.05);"><i class="fa-solid fa-bolt"></i> Daily Interactive Challenges (Question of the Day, Identify Personality, Fact or Fiction, Daily Five &amp; Championship)</button>`);
    console.log('Added Daily Challenges to index.html search chips');
  }

  // 2d. Resource Card
  const tradeCardTarget = `<!-- Who Trades What? Global Trade Explorer Card -->`;
  const dailyCardHtml = `<!-- Daily Interactive Challenges Card -->
                <div class="resource-card" style="border: 1px solid rgba(124, 58, 237, 0.4); background: linear-gradient(135deg, rgba(124, 58, 237, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(124, 58, 237, 0.2); color: #7c3aed;"><i class="fa-solid fa-bolt"></i></div>
                    <div class="resource-content">
                        <h3>⚡ Daily Interactive Challenges: Build Your Daily Exam Study Streak</h3>
                        <p>Engage in 7 daily interactive gamified learning activities designed to build consistency for CSS, PMS, and FPSC aspirants: Question of the Day with in-depth conceptual explanations, progressive-clue Personality Detective, Fact or Fiction exam mythbusters, Guess the International Organization, 5-question multi-subject sprints, weekly timed Championship marathons with local leaderboards, and latest Current Affairs.</p>
                        <div class="resource-meta"><span style="color:#7c3aed; font-weight:700;"><i class="fa-solid fa-fire"></i> Daily Streak System &bull; 7 Interactive Modes</span> <span>★ Timed Championship &bull; Daily 5</span></div>
                        <a href="daily-challenges.html" class="resource-btn" style="background: #7c3aed; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-bolt"></i> Play Today's Daily Challenges</a>
                    </div>
                </div>\n                `;

  if (indexContent.includes(tradeCardTarget)) {
    indexContent = indexContent.replace(tradeCardTarget, dailyCardHtml + tradeCardTarget);
    console.log('Added Daily Challenges resource card to index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf-8');
}

console.log('\n=== DAILY CHALLENGES NAVIGATION INTEGRATION COMPLETED ===');
