const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'frontend', 'global-power-comparison.html');
const content = fs.readFileSync(filePath, 'utf8');

const requiredIds = [
  'themeToggleBtn',
  'countrySearchInput',
  'selectPowerA',
  'selectPowerB',
  'presetPillsContainer',
  'rivalryContextCard',
  'rivalryTitle',
  'rivalryBadge',
  'rivalrySummary',
  'radarCanvas',
  'legendNameA',
  'legendNameB',
  'flagA',
  'flagB',
  'overviewFlagA',
  'overviewNameA',
  'tierA',
  'gfpA',
  'unscA',
  'pppA',
  'defA',
  'doctrineA',
  'overviewFlagB',
  'overviewNameB',
  'tierB',
  'gfpB',
  'unscB',
  'pppB',
  'defB',
  'doctrineB',
  'qualNameA',
  'qualDetailsA',
  'qualNameB',
  'qualDetailsB',
  'detailedMetricsContainer',
  'regionFilters',
  'leaderboardTable',
  'matrixTableBody',
  'theoriesContainer',
  'quizScoreText',
  'quizResetBtn',
  'mcqListContainer'
];

let missing = [];
requiredIds.forEach(id => {
  const pattern = new RegExp(`id=["']${id}["']`);
  if (!pattern.test(content)) {
    missing.push(id);
  }
});

console.log('Validation Report:');
console.log('File size:', content.length, 'bytes');
if (missing.length === 0) {
  console.log('All ' + requiredIds.length + ' required DOM elements exist!');
} else {
  console.error('Missing IDs:', missing);
  process.exit(1);
}

// Check script references
if (content.includes('src="js/data_global_power.js"')) {
  console.log('Data script is linked correctly.');
} else {
  console.error('Data script not linked!');
  process.exit(1);
}

console.log('Validation PASSED!');
