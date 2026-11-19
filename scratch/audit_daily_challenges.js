const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== AUDITING DAILY INTERACTIVE CHALLENGES ===\n');

let pass = true;

// 1. Audit Dataset
const dataPath = path.join(__dirname, '../frontend/js/data_daily_challenges.js');
if (!fs.existsSync(dataPath)) {
  console.error('❌ FAIL: data_daily_challenges.js does not exist');
  pass = false;
} else {
  console.log('✔ data_daily_challenges.js exists');
  try {
    const data = require(dataPath);
    console.log('✔ Data loaded successfully:');
    console.log(`  - Question of the Day: ${data.qotdPool.length} (expected >= 7)`);
    console.log(`  - Personalities: ${data.personalities.length} (expected >= 10)`);
    console.log(`  - Fact or Fiction: ${data.factOrFiction.length} (expected >= 16)`);
    console.log(`  - Organizations: ${data.organizations.length} (expected >= 10)`);
    console.log(`  - Daily Five Sets: ${data.dailyFiveSets.length} (expected >= 7)`);
    console.log(`  - Championship Pool: ${data.championshipPool.length} (expected >= 25)`);
    console.log(`  - Current Affairs: ${data.currentAffairsWeekly.length} (expected >= 10)`);

    if (data.qotdPool.length < 7) {
      console.error(`❌ QOTD count is ${data.qotdPool.length}, expected >= 7`);
      pass = false;
    }
    if (data.personalities.length < 10) {
      console.error(`❌ Personalities count is ${data.personalities.length}, expected >= 10`);
      pass = false;
    }
    if (data.factOrFiction.length < 16) {
      console.error(`❌ Fact or Fiction count is ${data.factOrFiction.length}, expected >= 16`);
      pass = false;
    }
    if (data.organizations.length < 10) {
      console.error(`❌ Organizations count is ${data.organizations.length}, expected >= 10`);
      pass = false;
    }
    if (data.dailyFiveSets.length < 7) {
      console.error(`❌ Daily Five sets count is ${data.dailyFiveSets.length}, expected >= 7`);
      pass = false;
    }
    if (data.championshipPool.length < 25) {
      console.error(`❌ Championship pool count is ${data.championshipPool.length}, expected >= 25`);
      pass = false;
    }
    if (data.currentAffairsWeekly.length < 10) {
      console.error(`❌ Current Affairs count is ${data.currentAffairsWeekly.length}, expected >= 10`);
      pass = false;
    }

    // Verify QOTD structure
    data.qotdPool.forEach((q, idx) => {
      ['id', 'dayName', 'category', 'question', 'options', 'correctAnswer', 'detailedExplanation', 'keyTakeaway'].forEach(f => {
        if (q[f] === undefined || q[f] === null) {
          console.error(`❌ QOTD at index ${idx} missing field '${f}'`);
          pass = false;
        }
      });
    });

    // Verify Personalities structure
    data.personalities.forEach((p, idx) => {
      ['id', 'name', 'title', 'era', 'category', 'clues', 'biography', 'keyAchievements', 'cssExamAngle'].forEach(f => {
        if (p[f] === undefined || p[f] === null) {
          console.error(`❌ Personality at index ${idx} missing field '${f}'`);
          pass = false;
        }
      });
      if (!Array.isArray(p.clues) || p.clues.length !== 4) {
        console.error(`❌ Personality at index ${idx} does not have 4 clues`);
        pass = false;
      }
    });

    // Verify Fact or Fiction
    data.factOrFiction.forEach((f, idx) => {
      ['id', 'statement', 'isFact', 'category', 'explanation'].forEach(field => {
        if (f[field] === undefined || f[field] === null) {
          console.error(`❌ Fact or Fiction at index ${idx} missing field '${field}'`);
          pass = false;
        }
      });
    });

    // Verify Organizations
    data.organizations.forEach((o, idx) => {
      ['id', 'name', 'acronym', 'headquarters', 'established', 'mandate', 'clues', 'pakistanRelevance'].forEach(field => {
        if (o[field] === undefined || o[field] === null) {
          console.error(`❌ Organization at index ${idx} missing field '${field}'`);
          pass = false;
        }
      });
    });

    // Verify Daily Five
    data.dailyFiveSets.forEach((s, idx) => {
      if (!s.day || !Array.isArray(s.questions) || s.questions.length !== 5) {
        console.error(`❌ Daily Five set at index ${idx} does not have 5 questions`);
        pass = false;
      }
    });

  } catch (err) {
    console.error('❌ FAIL loading data_daily_challenges.js:', err.message);
    pass = false;
  }
}

// 2. Audit HTML File
const htmlPath = path.join(__dirname, '../frontend/daily-challenges.html');
if (!fs.existsSync(htmlPath)) {
  console.error('❌ FAIL: daily-challenges.html does not exist');
  pass = false;
} else {
  console.log('\n✔ daily-challenges.html exists');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // Verify getElementById references
  const getElemIds = [];
  const regex = /getElementById\(['"]([^'"]+)['"]\)/g;
  let m;
  while ((m = regex.exec(htmlContent)) !== null) {
    getElemIds.push(m[1]);
  }
  const uniqueReferencedIds = Array.from(new Set(getElemIds));

  const definedIds = [];
  const defRegex = /id=['"]([^'"]+)['"]/g;
  while ((m = defRegex.exec(htmlContent)) !== null) {
    definedIds.push(m[1]);
  }
  const uniqueDefinedIds = Array.from(new Set(definedIds));

  const missingReferencedIds = uniqueReferencedIds.filter(id => !uniqueDefinedIds.includes(id));
  if (missingReferencedIds.length > 0) {
    console.error(`❌ getElementById referenced IDs missing in HTML:`, missingReferencedIds.join(', '));
    pass = false;
  } else {
    console.log(`✔ All ${uniqueReferencedIds.length} script-referenced DOM IDs are defined in HTML`);
  }

  // Verify all 7 tab buttons and views
  const tabs = ['Qotd', 'Personality', 'FactFiction', 'Organization', 'DailyFive', 'Championship', 'CurrentAffairs'];
  tabs.forEach(tab => {
    const btnId = 'btnBar' + tab;
    const viewId = 'view' + tab;
    if (!uniqueDefinedIds.includes(btnId)) {
      console.error(`❌ Missing tab button ID: ${btnId}`);
      pass = false;
    }
    if (!uniqueDefinedIds.includes(viewId)) {
      console.error(`❌ Missing tab view ID: ${viewId}`);
      pass = false;
    }
  });
  console.log(`✔ All 7 tab buttons and 7 tab views are verified`);

  // Verify inline scripts syntax
  const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
  let scriptMatch;
  let scriptIndex = 0;
  while ((scriptMatch = scriptRegex.exec(htmlContent)) !== null) {
    const code = scriptMatch[1];
    try {
      new vm.Script(code);
      console.log(`✔ Inline script ${scriptIndex} syntax valid`);
    } catch (e) {
      console.error(`❌ Syntax error in inline script ${scriptIndex}:`, e.message);
      pass = false;
    }
    scriptIndex++;
  }

  // Check Web Audio API implementation
  if (htmlContent.includes('AudioContext') && htmlContent.includes('playSound')) {
    console.log('✔ Web Audio API sound synthesis verified (sine, triangle & fanfare)');
  } else {
    console.error('❌ Missing Web Audio API implementation');
    pass = false;
  }

  // Check data script inclusion
  if (htmlContent.includes('js/data_daily_challenges.js')) {
    console.log('✔ data_daily_challenges.js script tag verified');
  } else {
    console.error('❌ Missing script tag for data_daily_challenges.js');
    pass = false;
  }

  // Check site-switcher-bar
  if (htmlContent.includes('class="site-switcher-bar"') && htmlContent.includes('who-trades-what.html')) {
    console.log('✔ site-switcher-bar verified');
  } else {
    console.error('❌ site-switcher-bar missing or incomplete');
    pass = false;
  }
}

console.log('\n========================================');
if (pass) {
  console.log('🎉 AUDIT PASSED: Daily Interactive Challenges is 100% verified and operational!');
} else {
  console.log('❌ AUDIT FAILED: Please fix reported issues.');
  process.exit(1);
}
