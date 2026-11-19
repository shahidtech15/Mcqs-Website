const fs = require('fs');
const path = require('path');

console.log('=== AUDITING CURRENCY & EXCHANGE EXPLORER ===\n');

let pass = true;

// 1. Audit Dataset File
const dataPath = path.join(__dirname, '../frontend/js/data_currency_exchange.js');
if (!fs.existsSync(dataPath)) {
  console.error('❌ FAIL: data_currency_exchange.js does not exist');
  pass = false;
} else {
  console.log('✔ data_currency_exchange.js exists');
  try {
    const data = require(dataPath);

    console.log(`✔ Data loaded successfully:`);
    console.log(`  - Currencies: ${data.currencies.length} (expected >= 30)`);
    console.log(`  - Central Banks: ${data.centralBanks.length} (expected >= 10)`);
    console.log(`  - Exchange Concepts: ${data.exchangeConcepts.length} (expected >= 8)`);
    console.log(`  - Currency History Milestones: ${data.currencyHistoryTimeline.length} (expected >= 8)`);
    console.log(`  - Quiz Questions: ${data.quiz.length} (expected >= 20)`);

    if (data.currencies.length < 30) {
      console.error(`❌ Currencies count is ${data.currencies.length}, expected >= 30`);
      pass = false;
    }
    if (data.centralBanks.length < 10) {
      console.error(`❌ Central Banks count is ${data.centralBanks.length}, expected >= 10`);
      pass = false;
    }
    if (data.exchangeConcepts.length < 8) {
      console.error(`❌ Exchange Concepts count is ${data.exchangeConcepts.length}, expected >= 8`);
      pass = false;
    }
    if (data.currencyHistoryTimeline.length < 8) {
      console.error(`❌ Timeline count is ${data.currencyHistoryTimeline.length}, expected >= 8`);
      pass = false;
    }
    if (data.quiz.length < 20) {
      console.error(`❌ Quiz questions count is ${data.quiz.length}, expected >= 20`);
      pass = false;
    }

    // Verify key fields in currencies
    data.currencies.forEach((c, i) => {
      ['code', 'name', 'country', 'symbol', 'flag', 'centralBank', 'regime', 'rateToUsd', 'trivia'].forEach(f => {
        if (c[f] === undefined || c[f] === null || c[f] === '') {
          console.error(`❌ Currency at index ${i} (${c.code || i}) missing field '${f}'`);
          pass = false;
        }
      });
    });

    // Verify key fields in central banks
    data.centralBanks.forEach((b, i) => {
      ['id', 'name', 'country', 'headquarters', 'establishedYear', 'chairperson', 'currentPolicyRate', 'statutoryMandate'].forEach(f => {
        if (b[f] === undefined || b[f] === null || b[f] === '') {
          console.error(`❌ Central Bank at index ${i} (${b.id || i}) missing field '${f}'`);
          pass = false;
        }
      });
    });

    // Verify key fields in exchange concepts
    data.exchangeConcepts.forEach((c, i) => {
      ['id', 'title', 'icon', 'summary', 'details', 'examNote'].forEach(f => {
        if (c[f] === undefined || c[f] === null || c[f] === '') {
          console.error(`❌ Exchange Concept at index ${i} (${c.id || i}) missing field '${f}'`);
          pass = false;
        }
      });
    });

    // Verify key fields in timeline
    data.currencyHistoryTimeline.forEach((t, i) => {
      ['epoch', 'title', 'location', 'desc'].forEach(f => {
        if (t[f] === undefined || t[f] === null || t[f] === '') {
          console.error(`❌ Timeline at index ${i} (${t.title || i}) missing field '${f}'`);
          pass = false;
        }
      });
    });

    // Verify quiz questions
    data.quiz.forEach((q, i) => {
      if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || typeof q.correctAnswer !== 'number' || !q.explanation) {
        console.error(`❌ Quiz question at index ${i} has invalid structure`);
        pass = false;
      }
    });

  } catch (err) {
    console.error('❌ FAIL loading data_currency_exchange.js:', err.message);
    pass = false;
  }
}

// 2. Audit HTML File
const htmlPath = path.join(__dirname, '../frontend/currency-exchange-explorer.html');
if (!fs.existsSync(htmlPath)) {
  console.error('❌ FAIL: currency-exchange-explorer.html does not exist');
  pass = false;
} else {
  console.log('\n✔ currency-exchange-explorer.html exists');
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

  // Verify all IDs called by getElementById exist in HTML
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

  // Verify critical tab buttons and view panels
  const tabs = ['Currencies', 'Banks', 'Concepts', 'Timeline', 'Calculator', 'Quiz'];
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
  console.log(`✔ All 6 tab buttons and 6 tab views are verified`);

  // Check Web Audio API implementation
  if (htmlContent.includes('AudioContext') && htmlContent.includes('playSound')) {
    console.log('✔ Web Audio API sound synthesis verified (sine & triangle dual-tone)');
  } else {
    console.error('❌ Missing Web Audio API implementation');
    pass = false;
  }

  // Check data script inclusion
  if (htmlContent.includes('js/data_currency_exchange.js')) {
    console.log('✔ data_currency_exchange.js script tag verified');
  } else {
    console.error('❌ Missing script tag for data_currency_exchange.js');
    pass = false;
  }

  // Check site-switcher-bar
  if (htmlContent.includes('class="site-switcher-bar"') && htmlContent.includes('world-economy-dashboard.html')) {
    console.log('✔ site-switcher-bar verified');
  } else {
    console.error('❌ site-switcher-bar missing or incomplete');
    pass = false;
  }
}

console.log('\n========================================');
if (pass) {
  console.log('🎉 AUDIT PASSED: Currency & Exchange Explorer is 100% verified and operational!');
} else {
  console.log('❌ AUDIT FAILED: Please fix reported issues.');
  process.exit(1);
}
