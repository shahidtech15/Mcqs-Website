const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('--- AUDITING DAILY FACTS APPLICATION ---');

// 1. Audit Dataset
const dataPath = path.join(__dirname, '../frontend/js/data_daily_facts.js');
if (!fs.existsSync(dataPath)) {
  console.error('ERROR: data_daily_facts.js missing');
  process.exit(1);
}

const dataContent = fs.readFileSync(dataPath, 'utf8');
const sandbox = { window: {} };
try {
  vm.runInNewContext(dataContent, sandbox);
} catch (err) {
  console.error('ERROR: Syntax or execution error in data_daily_facts.js:', err);
  process.exit(1);
}

const dataDailyFacts = sandbox.window.DAILY_FACTS_DATA || sandbox.DAILY_FACTS_DATA;
if (!dataDailyFacts || !Array.isArray(dataDailyFacts.facts)) {
  console.error('ERROR: DAILY_FACTS_DATA or facts array missing');
  process.exit(1);
}

console.log('✓ Dataset loaded successfully.');
console.log(`✓ Total Facts: ${dataDailyFacts.facts.length}`);

let idSet = new Set();
let errorCount = 0;

dataDailyFacts.facts.forEach((fact, idx) => {
  if (!fact.id || idSet.has(fact.id)) {
    console.error(`Fact #${idx} has invalid or duplicate id: ${fact.id}`);
    errorCount++;
  }
  idSet.add(fact.id);

  if (!fact.month || fact.month < 1 || fact.month > 12) {
    console.error(`Fact ${fact.id} invalid month: ${fact.month}`);
    errorCount++;
  }
  if (!fact.day || fact.day < 1 || fact.day > 31) {
    console.error(`Fact ${fact.id} invalid day: ${fact.day}`);
    errorCount++;
  }
  if (!fact.category || !['history', 'science', 'technology', 'culture', 'pakistan'].includes(fact.category)) {
    console.error(`Fact ${fact.id} invalid category: ${fact.category}`);
    errorCount++;
  }
  if (!fact.title || !fact.shortFact || !fact.fullNarrative || !fact.keySignificance || !fact.didYouKnow || !fact.examRelevance) {
    console.error(`Fact ${fact.id} missing text content`);
    errorCount++;
  }
  if (!Array.isArray(fact.tags) || fact.tags.length === 0) {
    console.error(`Fact ${fact.id} missing tags`);
    errorCount++;
  }
  if (!fact.quiz || !fact.quiz.question || !Array.isArray(fact.quiz.options) || fact.quiz.options.length !== 4) {
    console.error(`Fact ${fact.id} invalid quiz structure`);
    errorCount++;
  } else if (typeof fact.quiz.correctAnswer !== 'number' || fact.quiz.correctAnswer < 0 || fact.quiz.correctAnswer > 3) {
    console.error(`Fact ${fact.id} invalid quiz correctAnswer: ${fact.quiz.correctAnswer}`);
    errorCount++;
  }
});

console.log(`✓ Fact schema verification: ${errorCount === 0 ? 'ALL 25 FACTS PASSED' : errorCount + ' ERRORS'}`);

// 2. Audit daily-fact.html
const htmlPath = path.join(__dirname, '../frontend/daily-fact.html');
if (!fs.existsSync(htmlPath)) {
  console.error('ERROR: daily-fact.html missing');
  process.exit(1);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Check script blocks for syntax errors
const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let scriptIdx = 0;
let scriptErrors = 0;

while ((match = scriptRegex.exec(htmlContent)) !== null) {
  const scriptSrc = match[0].match(/src=["'](.*?)["']/);
  const code = match[1];
  scriptIdx++;
  if (scriptSrc) {
    // External script
    const src = scriptSrc[1];
    if (!src.startsWith('http') && !src.startsWith('//')) {
      const resolved = path.join(path.dirname(htmlPath), src);
      if (!fs.existsSync(resolved)) {
        console.error(`Script #${scriptIdx} src not found: ${src}`);
        scriptErrors++;
      } else {
        console.log(`✓ External script found: ${src}`);
      }
    }
  } else if (code.trim()) {
    try {
      new vm.Script(code);
      console.log(`✓ Inline script #${scriptIdx} parsed cleanly (${code.trim().split('\n').length} lines)`);
    } catch (e) {
      console.error(`Inline script #${scriptIdx} syntax error:`, e.message);
      scriptErrors++;
    }
  }
}

// Check referenced getElementById calls
const getElemRegex = /document\.getElementById\(['"]([a-zA-Z0-9_-]+)['"]\)/g;
let elemMatch;
let missingIds = 0;
const checkedIds = new Set();

while ((elemMatch = getElemRegex.exec(htmlContent)) !== null) {
  const elemId = elemMatch[1];
  if (checkedIds.has(elemId)) continue;
  checkedIds.add(elemId);

  const idPattern = new RegExp(`id=["']${elemId}["']`);
  if (!idPattern.test(htmlContent)) {
    console.error(`Referenced ID in JS not found in HTML: "${elemId}"`);
    missingIds++;
  } else {
    console.log(`✓ DOM ID verified: "${elemId}"`);
  }
}

console.log(`--- AUDIT SUMMARY ---`);
console.log(`Dataset errors: ${errorCount}`);
console.log(`Script errors: ${scriptErrors}`);
console.log(`Missing DOM IDs: ${missingIds}`);

if (errorCount === 0 && scriptErrors === 0 && missingIds === 0) {
  console.log('AUDIT RESULT: 100% PASS!');
} else {
  console.error('AUDIT RESULT: FAILED');
  process.exit(1);
}
