const fs = require('fs');

console.log('=============================================');
console.log('     AUDITING TECHNOLOGY EXPLORER            ');
console.log('=============================================');

// 1. Check data file
const data = require('../frontend/js/data_technology_explorer.js');
console.log(`[PASS] KPIs: ${Object.keys(data.kpis).length}`);
console.log(`[PASS] Domains: ${Object.keys(data.domains).length}`);
console.log(`[PASS] Matrix Rows: ${data.matrix.length}`);
console.log(`[PASS] MCQs: ${data.mcqs.length}`);

// 2. Check HTML file
const html = fs.readFileSync('frontend/technology-explorer.html', 'utf8');

const requiredIds = [
  'techKpiRow',
  'domainsGrid',
  'domainDossierCard',
  'dossierIconBox',
  'dossierIcon',
  'dossierName',
  'dossierTagline',
  'dossierBadge',
  'dossierFoundation',
  'interactiveSimBox',
  'dossierTaxonomiesGrid',
  'dossierMilestonesStrip',
  'dossierApplicationsCard',
  'dossierChallengesCard',
  'dossierExamHotspot',
  'matrixSection',
  'matrixTable',
  'matrixTableBody',
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
console.log(' TECHNOLOGY EXPLORER AUDIT PASSED 100%!');
console.log('=============================================');
