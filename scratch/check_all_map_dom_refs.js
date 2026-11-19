const fs = require('fs');

console.log('--- Inspecting sindh-map.html for getElementById ---');
const sm = fs.readFileSync('frontend/sindh-map.html', 'utf8');
const smMatches = sm.match(/document\.getElementById\(['"]([^'"]+)['"]\)/g) || [];
smMatches.forEach(m => {
  const id = m.match(/['"]([^'"]+)['"]/)[1];
  const exists = sm.includes(`id="${id}"`) || sm.includes(`id='${id}'`);
  if (!exists) {
    console.error('sindh-map.html MISSING DOM ELEMENT:', id);
  }
});

console.log('--- Inspecting locate-on-map.html for getElementById ---');
const lm = fs.readFileSync('frontend/locate-on-map.html', 'utf8');
const lmMatches = lm.match(/document\.getElementById\(['"]([^'"]+)['"]\)/g) || [];
lmMatches.forEach(m => {
  const id = m.match(/['"]([^'"]+)['"]/)[1];
  const exists = lm.includes(`id="${id}"`) || lm.includes(`id='${id}'`);
  if (!exists) {
    console.error('locate-on-map.html MISSING DOM ELEMENT:', id);
  }
});

console.log('--- Inspecting pakistan-map.html for getElementById ---');
const pm = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const pmMatches = pm.match(/document\.getElementById\(['"]([^'"]+)['"]\)/g) || [];
pmMatches.forEach(m => {
  const id = m.match(/['"]([^'"]+)['"]/)[1];
  const exists = pm.includes(`id="${id}"`) || pm.includes(`id='${id}'`);
  if (!exists) {
    console.error('pakistan-map.html MISSING DOM ELEMENT:', id);
  }
});

console.log('--- Inspecting physical-geography-map.html for getElementById ---');
const pgm = fs.readFileSync('frontend/physical-geography-map.html', 'utf8');
const pgmMatches = pgm.match(/document\.getElementById\(['"]([^'"]+)['"]\)/g) || [];
pgmMatches.forEach(m => {
  const id = m.match(/['"]([^'"]+)['"]/)[1];
  const exists = pgm.includes(`id="${id}"`) || pgm.includes(`id='${id}'`);
  if (!exists) {
    console.error('physical-geography-map.html MISSING DOM ELEMENT:', id);
  }
});

console.log('--- Inspecting geopolitical-hotspots-map.html for getElementById ---');
const ghm = fs.readFileSync('frontend/geopolitical-hotspots-map.html', 'utf8');
const ghmMatches = ghm.match(/document\.getElementById\(['"]([^'"]+)['"]\)/g) || [];
ghmMatches.forEach(m => {
  const id = m.match(/['"]([^'"]+)['"]/)[1];
  const exists = ghm.includes(`id="${id}"`) || ghm.includes(`id='${id}'`);
  if (!exists) {
    console.error('geopolitical-hotspots-map.html MISSING DOM ELEMENT:', id);
  }
});

console.log('--- Inspecting international-trade-routes-map.html for getElementById ---');
const trm = fs.readFileSync('frontend/international-trade-routes-map.html', 'utf8');
const trmMatches = trm.match(/document\.getElementById\(['"]([^'"]+)['"]\)/g) || [];
trmMatches.forEach(m => {
  const id = m.match(/['"]([^'"]+)['"]/)[1];
  const exists = trm.includes(`id="${id}"`) || trm.includes(`id='${id}'`);
  if (!exists) {
    console.error('international-trade-routes-map.html MISSING DOM ELEMENT:', id);
  }
});

console.log('--- Inspecting world-map.html for getElementById ---');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');
const wmMatches = wm.match(/document\.getElementById\(['"]([^'"]+)['"]\)/g) || [];
wmMatches.forEach(m => {
  const id = m.match(/['"]([^'"]+)['"]/)[1];
  const exists = wm.includes(`id="${id}"`) || wm.includes(`id='${id}'`);
  if (!exists) {
    console.error('world-map.html MISSING DOM ELEMENT:', id);
  }
});
