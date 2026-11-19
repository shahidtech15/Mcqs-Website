const fs = require('fs');

console.log('=== Checking world-map.html elements ===');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');
['worldMapSvgWrapper', 'world-map', 'mapCanvasContainer', 'mapTooltip', 'dossierOfficialName', 'dossierCapital'].forEach(id => {
  console.log(id, 'exists:', wm.includes(`id="${id}"`) || wm.includes(`id='${id}'`));
});

console.log('=== Checking pakistan-map.html elements ===');
const pm = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
['pakistanMapContainer', 'pakSearchInput', 'categoryPillsContainer', 'themeToggleBtn'].forEach(id => {
  console.log(id, 'exists:', pm.includes(`id="${id}"`) || pm.includes(`id='${id}'`));
});

console.log('=== Checking sindh-map.html elements ===');
const sm = fs.readFileSync('frontend/sindh-map.html', 'utf8');
['sindhMapContainer', 'sindhSearchInput', 'categoryPillsContainer'].forEach(id => {
  console.log(id, 'exists:', sm.includes(`id="${id}"`) || sm.includes(`id='${id}'`));
});

console.log('=== Checking locate-on-map.html elements ===');
const lm = fs.readFileSync('frontend/locate-on-map.html', 'utf8');
['blankMapCanvas', 'targetPromptTitle', 'btnSubmitGuess'].forEach(id => {
  console.log(id, 'exists:', lm.includes(`id="${id}"`) || lm.includes(`id='${id}'`));
});

console.log('=== Checking physical-geography-map.html elements ===');
const pgm = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');
['physicalMapContainer'].forEach(id => {
  console.log(id, 'exists:', pgm.includes(`id="${id}"`) || pgm.includes(`id='${id}'`));
});

console.log('=== Checking geopolitical-hotspots-map.html elements ===');
const ghm = fs.readFileSync('frontend/geopolitical-hotspots-map.html', 'utf8');
['hotspotsMapContainer'].forEach(id => {
  console.log(id, 'exists:', ghm.includes(`id="${id}"`) || ghm.includes(`id='${id}'`));
});

console.log('=== Checking international-trade-routes-map.html elements ===');
const trm = fs.readFileSync('frontend/international-trade-routes-map.html', 'utf8');
['tradeMapContainer'].forEach(id => {
  console.log(id, 'exists:', trm.includes(`id="${id}"`) || trm.includes(`id='${id}'`));
});
