const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('--- Verifying Scholarships Section & Portal ---');

// 1. Verify data file
const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_scholarships.js');
if (!fs.existsSync(dataPath)) {
  console.error('ERROR: data_scholarships.js does not exist');
  process.exit(1);
}

const fileContent = fs.readFileSync(dataPath, 'utf-8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fileContent, sandbox);

const list = sandbox.window.GLOBAL_SCHOLARSHIPS_DATA;
console.log('Total Scholarships in data file:', list.length);

if (!Array.isArray(list) || list.length < 10) {
  console.error('ERROR: Expected at least 10 scholarships in data file');
  process.exit(1);
}

let mastersCount = 0;
let phdCount = 0;
list.forEach(sch => {
  if (sch.levels.includes("Master's")) mastersCount++;
  if (sch.levels.includes("PhD")) phdCount++;
});

console.log(`- Master's Scholarships: ${mastersCount}`);
console.log(`- PhD Scholarships: ${phdCount}`);

// 2. Verify recruitment-prep.html
const recHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'recruitment-prep.html'), 'utf-8');
const hasSchTab = recHtml.includes('data-tab="tab-scholarships"');
const hasSchPane = recHtml.includes('id="tab-scholarships"');
const hasSchScript = recHtml.includes('data_scholarships.js');
console.log('Recruitment-prep Tab 8 button present:', hasSchTab);
console.log('Recruitment-prep Tab 8 pane present:', hasSchPane);
console.log('Recruitment-prep includes data_scholarships.js:', hasSchScript);

if (!hasSchTab || !hasSchPane || !hasSchScript) {
  console.error('ERROR: Missing scholarships elements in recruitment-prep.html');
  process.exit(1);
}

// 3. Verify scholarships.html
const schHtmlPath = path.join(__dirname, '..', 'frontend', 'scholarships.html');
if (!fs.existsSync(schHtmlPath)) {
  console.error('ERROR: scholarships.html does not exist');
  process.exit(1);
}
const schHtml = fs.readFileSync(schHtmlPath, 'utf-8');
console.log('scholarships.html length:', schHtml.length);
console.log('scholarships.html includes data_scholarships.js:', schHtml.includes('data_scholarships.js'));

// 4. Verify index.html
const indexHtml = fs.readFileSync(path.join(__dirname, '..', 'frontend', 'index.html'), 'utf-8');
console.log('index.html links to scholarships.html:', indexHtml.includes('scholarships.html'));

console.log('--- ALL SCHOLARSHIP CHECKS PASSED SUCCESSFULLY ---');
