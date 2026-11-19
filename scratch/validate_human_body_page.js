const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'frontend', 'human-body-explorer.html');
const content = fs.readFileSync(filePath, 'utf8');

const requiredIds = [
  'themeToggleBtn',
  'bodySearchInput',
  'anatomySvg',
  'organCarouselPills',
  'organInspectorPanel',
  'inspIconCircle',
  'inspOrganName',
  'inspLatinRoot',
  'inspSystemTag',
  'inspWeight',
  'inspLocation',
  'inspBloodSupply',
  'inspFunctionsList',
  'inspSecretionsText',
  'inspPathologiesList',
  'inspExamTip',
  'systemsPillsNav',
  'systemDisplayCard',
  'sysTitle',
  'sysOrgansCount',
  'sysSummary',
  'sysConceptsGrid',
  'sysExamTip',
  'recordsGrid',
  'diagnosticsListContainer',
  'quizScoreText',
  'resetQuizBtn',
  'quizFilterGroup',
  'quizContainer'
];

let missing = [];
requiredIds.forEach(id => {
  const pattern = new RegExp(`id=["']${id}["']`);
  if (!pattern.test(content)) {
    missing.push(id);
  }
});

console.log('Validation Report for human-body-explorer.html:');
console.log('File size:', content.length, 'bytes');
if (missing.length === 0) {
  console.log('All ' + requiredIds.length + ' required DOM elements exist!');
} else {
  console.error('Missing IDs:', missing);
  process.exit(1);
}

// Check script tag
if (content.includes('src="js/data_human_body.js"')) {
  console.log('Data script is properly linked.');
} else {
  console.error('Data script link missing!');
  process.exit(1);
}

console.log('Validation PASSED!');
