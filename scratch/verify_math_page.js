const fs = require('fs');
const path = require('path');

const page = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'math-tricks.html'), 'utf8');

console.log('File size:', page.length);
console.log('Includes data_math_tricks.js:', page.includes('data_math_tricks.js'));
console.log('Includes calculateWork function:', page.includes('calculateWork'));
console.log('Includes calculatePct function:', page.includes('calculatePct'));
console.log('Includes calculateDep function:', page.includes('calculateDep'));
console.log('Modules rendered:', (page.match(/class="module-section-card"/g) || []).length);
console.log('Drills rendered:', (page.match(/class="drill-item"/g) || []).length);
console.log('Rules rendered:', (page.match(/class="rule-card"/g) || []).length);
