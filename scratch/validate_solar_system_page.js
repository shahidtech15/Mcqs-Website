const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'frontend', 'solar-system-explorer.html');
const content = fs.readFileSync(filePath, 'utf8');

const requiredIds = [
  'themeToggleBtn',
  'planetSearchInput',
  'playPauseBtn',
  'speed1xBtn',
  'speed5xBtn',
  'speed10xBtn',
  'resetZoomBtn',
  'orreryCanvas',
  'planetsCarouselPills',
  'inspectorPanel',
  'inspSymbol',
  'inspName',
  'inspDesignation',
  'inspTypeBadge',
  'inspDiameter',
  'inspDiameterSub',
  'inspDist',
  'inspLightTime',
  'inspGravity',
  'inspGravitySub',
  'inspMoons',
  'inspRings',
  'inspDay',
  'inspYear',
  'inspOrbitDays',
  'inspAtmosphere',
  'inspPressure',
  'inspTemp',
  'inspMajorMoons',
  'inspFeaturesList',
  'inspMissionsList',
  'inspExamRelevance',
  'userWeightInput',
  'unitToggleBtn',
  'weightWorldsGrid',
  'compSelectA',
  'compSelectB',
  'compCircleA',
  'compCircleB',
  'compNameA',
  'compNameB',
  'compDiameterA',
  'compDiameterB',
  'compRatioText',
  'comparatorMetricsList',
  'astronomyConceptsContainer',
  'quizScoreDisplay',
  'resetQuizButton',
  'quizQuestionsContainer',
  'riddlesContainer'
];

let missing = [];
requiredIds.forEach(id => {
  const pattern = new RegExp(`id=["']${id}["']`);
  if (!pattern.test(content)) {
    missing.push(id);
  }
});

console.log('Validation Report for solar-system-explorer.html:');
console.log('File size:', content.length, 'bytes');
if (missing.length === 0) {
  console.log('All ' + requiredIds.length + ' required DOM elements exist!');
} else {
  console.error('Missing IDs:', missing);
  process.exit(1);
}

// Check script tag
if (content.includes('src="js/data_solar_system.js"')) {
  console.log('Data script is properly linked.');
} else {
  console.error('Data script link missing!');
  process.exit(1);
}

console.log('Validation PASSED!');
