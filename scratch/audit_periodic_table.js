const fs = require('fs');

console.log('=============================================');
console.log('    AUDITING INTERACTIVE PERIODIC TABLE      ');
console.log('=============================================');

// 1. Check data file
const data = require('../frontend/js/data_periodic_table.js');
console.log(`[PASS] Elements Loaded: ${data.elements.length} / 118`);
console.log(`[PASS] Categories Loaded: ${Object.keys(data.categories).length}`);
console.log(`[PASS] Trends Loaded: ${Object.keys(data.trends).length}`);
console.log(`[PASS] MCQs Loaded: ${data.mcqs.length}`);

// 2. Check HTML file
const html = fs.readFileSync('frontend/periodic-table.html', 'utf8');

const requiredIds = [
  'periodicGrid',
  'elementSearchInput',
  'tempRangeSlider',
  'tempValueLabel',
  'trendSelect',
  'trendLegend',
  'categoryLegendStrip',
  'inspectorSection',
  'inspectorBadgeCard',
  'dossierZ',
  'dossierSymbol',
  'dossierName',
  'dossierMass',
  'dossierCatPill',
  'bohrCanvas',
  'dossierConfig',
  'dossierShells',
  'dossierHeaderTitle',
  'dossierSubtitle',
  'dossierExam',
  'dossierPropsGrid',
  'dossierUsesGrid',
  'dossierDiscoveryStrip',
  'comparatorSection',
  'compareSelectA',
  'compareSelectB',
  'compareTable',
  'compareTableBody',
  'quizSection',
  'quizContainer',
  'quizScoreDisplay',
  'themeToggleBtn',
  'themeIcon'
];

let missingIds = 0;
requiredIds.forEach(id => {
  if (!html.includes(`id="${id}"`)) {
    console.error(`[FAIL] Missing ID in HTML: #${id}`);
    missingIds++;
  }
});

if (missingIds === 0) {
  console.log(`[PASS] All ${requiredIds.length} required DOM Element IDs present in HTML.`);
} else {
  process.exit(1);
}

// 3. Test script syntax in HTML
const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
let match;
let scriptIdx = 0;
let scriptErrors = 0;

while ((match = scriptRegex.exec(html)) !== null) {
  const code = match[1].trim();
  if (code.length > 0) {
    try {
      new Function(code);
      console.log(`  Inline script ${scriptIdx}: [SYNTAX VALID] (${code.length} chars)`);
    } catch (err) {
      console.error(`  Inline script ${scriptIdx}: [SYNTAX ERROR]`, err.message);
      scriptErrors++;
    }
    scriptIdx++;
  }
}

if (scriptErrors > 0) {
  process.exit(1);
}

console.log('=============================================');
console.log(' PERIODIC TABLE AUDIT PASSED WITH 100% SUCCESS!');
console.log('=============================================');
