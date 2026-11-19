const fs = require('fs');
const path = require('path');

console.log('--- INTEGRATING DAILY FACT NAVIGATION ---');

const files = fs.readdirSync('frontend').filter(f => f.endsWith('.html'));

// 1. Update .site-switcher-bar across all pages
let switcherUpdatedCount = 0;

files.forEach(f => {
  if (f === 'daily-fact.html') return; // already has active link
  const filePath = path.join('frontend', f);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('class="site-switcher-bar"') || content.includes("class='site-switcher-bar'")) {
    if (content.includes('href="daily-fact.html"')) {
      console.log(`- ${f}: already contains daily-fact.html link`);
      return;
    }

    // Pattern to insert after daily-challenges.html
    const targetPattern = /(<a\s+href="daily-challenges\.html"[^>]*>[\s\S]*?<\/a>)/i;
    if (targetPattern.test(content)) {
      content = content.replace(targetPattern, '$1\n            <a href="daily-fact.html" class="switcher-btn"><i class="fas fa-calendar-check"></i> Daily Fact</a>');
      fs.writeFileSync(filePath, content, 'utf8');
      switcherUpdatedCount++;
      console.log(`✓ Updated switcher bar in: ${f}`);
    } else {
      console.warn(`! Warning: ${f} has switcher bar but daily-challenges.html pattern not matched`);
    }
  }
});

console.log(`\nSwitcher bar updated in ${switcherUpdatedCount} files.`);

// 2. Update frontend/index.html
const indexPath = path.join('frontend', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes('href="daily-fact.html"')) {
  // A. Header dropdown
  const headerTarget = '<a href="daily-challenges.html" style="font-weight:700; color:#7c3aed;"><i class="fa-solid fa-bolt"></i> Daily Challenges <span style="background:#7c3aed; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>';
  const headerReplacement = headerTarget + '\n                <a href="daily-fact.html" style="font-weight:700; color:#0d9488;"><i class="fa-solid fa-calendar-day"></i> Daily Fact Explorer <span style="background:#0d9488; color:#fff; font-size:0.65rem; padding:1px 5px; border-radius:4px;">NEW</span></a>';
  if (indexContent.includes(headerTarget)) {
    indexContent = indexContent.replace(headerTarget, headerReplacement);
    console.log('✓ Added header dropdown link to index.html');
  } else {
    console.warn('! Header dropdown target not found in index.html');
  }

  // B. Mobile drawer
  const drawerTarget = '<li><a href="daily-challenges.html" style="font-weight: 700; color: #7c3aed;"><i class="fa-solid fa-bolt"></i> Daily Interactive Challenges (QOTD, Personality, Fact/Fiction, Daily 5 &amp; Championship)</a></li>';
  const drawerReplacement = drawerTarget + '\n                <li><a href="daily-fact.html" style="font-weight: 700; color: #0d9488;"><i class="fa-solid fa-calendar-day"></i> Daily Fact Explorer (This Day in History, Science, Tech, Culture &amp; Pakistan)</a></li>';
  if (indexContent.includes(drawerTarget)) {
    indexContent = indexContent.replace(drawerTarget, drawerReplacement);
    console.log('✓ Added mobile drawer link to index.html');
  } else {
    console.warn('! Mobile drawer target not found in index.html');
  }

  // C. Search chips
  const chipTarget = '<button type="button" class="search-chip" onclick="window.location.href=\'daily-challenges.html\'" style="font-weight:700; border-color:#7c3aed; color:#7c3aed; background: rgba(124, 58, 237, 0.05);"><i class="fa-solid fa-bolt"></i> Daily Interactive Challenges (Question of the Day, Identify Personality, Fact or Fiction, Daily Five &amp; Championship)</button>';
  const chipReplacement = chipTarget + '\n                    <button type="button" class="search-chip" onclick="window.location.href=\'daily-fact.html\'" style="font-weight:700; border-color:#0d9488; color:#0d9488; background: rgba(13, 148, 136, 0.05);"><i class="fa-solid fa-calendar-day"></i> Daily Fact Explorer (This Day in History, Science, Technology, Culture &amp; Pakistan Milestones)</button>';
  if (indexContent.includes(chipTarget)) {
    indexContent = indexContent.replace(chipTarget, chipReplacement);
    console.log('✓ Added search chip to index.html');
  } else {
    console.warn('! Search chip target not found in index.html');
  }

  // D. Resource Card
  const cardTarget = '<div class="resource-card" style="border: 1px solid rgba(124, 58, 237, 0.4); background: linear-gradient(135deg, rgba(124, 58, 237, 0.06), rgba(15, 23, 42, 0.6));">';
  const newCard = `                <!-- Daily Fact Explorer Card -->
                <div class="resource-card" style="border: 1px solid rgba(13, 148, 136, 0.4); background: linear-gradient(135deg, rgba(13, 148, 136, 0.06), rgba(15, 23, 42, 0.6));">
                    <div class="resource-icon" style="background: rgba(13, 148, 136, 0.2); color: #0d9488;"><i class="fa-solid fa-calendar-day"></i></div>
                    <div class="resource-content">
                        <h3>📅 Daily Fact Explorer: This Day in World History, Science &amp; Culture</h3>
                        <p>Discover landmark historical events, pivotal scientific discoveries, technological breakthroughs, cultural masterpieces, and Pakistan sovereign milestones for every day of the calendar. Featuring interactive date navigation, multi-discipline category filters, in-depth civilizational deep dives, CSS/PMS exam relevance notes, instant recall mini-quizzes, and personal study vault bookmarking.</p>
                        <div class="resource-meta"><span style="color:#0d9488; font-weight:700;"><i class="fa-solid fa-clock-rotate-left"></i> 365-Day Epoch Vault &bull; 5 Disciplines</span> <span>★ Recall Quizzes &bull; CSS/PMS Exam Angles</span></div>
                        <a href="daily-fact.html" class="resource-btn" style="background: #0d9488; color: #ffffff; font-weight: 700;"><i class="fa-solid fa-calendar-day"></i> Explore Today's Facts</a>
                    </div>
                </div>\n`;

  if (indexContent.includes(cardTarget)) {
    indexContent = indexContent.replace(cardTarget, newCard + '                ' + cardTarget);
    console.log('✓ Added Daily Fact resource card to index.html');
  } else {
    console.warn('! Resource card target not found in index.html');
  }

  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log('✓ index.html updated successfully!');
} else {
  console.log('- index.html already contains daily-fact.html links');
}

console.log('--- INTEGRATION COMPLETE ---');
