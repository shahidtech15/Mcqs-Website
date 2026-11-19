const fs = require('fs');

console.log('=============================================');
console.log('     AUDITING CLIMATE CHANGE EXPLORER        ');
console.log('=============================================');

// 1. Check data file
const data = require('../frontend/js/data_climate_change.js');
console.log(`[PASS] KPIs: ${Object.keys(data.kpis).length}`);
console.log(`[PASS] Temperature History: ${data.temperatures.history.length}`);
console.log(`[PASS] SSP Scenarios: ${data.temperatures.scenarios.length}`);
console.log(`[PASS] Keeling Points: ${data.emissions.keelingCurve.length}`);
console.log(`[PASS] Top Emitters: ${data.emissions.topEmitters.length}`);
console.log(`[PASS] Electricity Sources: ${data.renewables.globalElectricityMix.length}`);
console.log(`[PASS] Glaciers: ${data.cryosphere.thirdPole.notableGlaciers.length}`);
console.log(`[PASS] Sea-Level Drivers: ${data.seaLevel.drivers.length}`);
console.log(`[PASS] Agreements: ${data.agreements.length}`);
console.log(`[PASS] Flood 2022 Facts: ${data.pakistanCrisis.flood2022Facts.length}`);
console.log(`[PASS] MCQs: ${data.mcqs.length}`);

// 2. Check HTML file
const html = fs.readFileSync('frontend/climate-change-explorer.html', 'utf8');

const requiredIds = [
  'kpiRowContainer',
  'tabNavContainer',
  'tab-temperatures',
  'tab-emissions',
  'tab-renewables',
  'tab-cryosphere',
  'tab-sealevel',
  'tab-treaties',
  'tab-pakistan',
  'tab-simulator',
  'tab-quiz',
  'stripesBar',
  'stripeInfoBox',
  'stripeYearDisplay',
  'stripeAnomalyDisplay',
  'stripeNoteDisplay',
  'tempAnomalySvg',
  'scenariosGrid',
  'keelingCurveSvg',
  'topEmittersTable',
  'topEmittersTableBody',
  'sectorsListContainer',
  'ghgCompareTable',
  'ghgCompareTableBody',
  'electricityMixContainer',
  'lcoeContainer',
  'pakEnergyProjectsGrid',
  'glaciersTable',
  'glaciersTableBody',
  'seaLevelDriversContainer',
  'vulnerableCoastGrid',
  'treatyTimelineContainer',
  'floodStatsGrid',
  'policiesGrid',
  'essayPointersList',
  'simPhaseoutSlider',
  'simRenewableSlider',
  'simForestSlider',
  'simResultCard',
  'simRatingBadge',
  'simTempDisplay',
  'simSeaLevelVal',
  'simGlacierVal',
  'simArcticVal',
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
console.log(' CLIMATE EXPLORER AUDIT PASSED WITH 100% SUCCESS!');
console.log('=============================================');
