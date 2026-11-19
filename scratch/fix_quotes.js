const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'frontend', 'js', 'data_recruitment_prep.js');
let s = fs.readFileSync(target, 'utf-8');

s = s.replace(
  '"Physical Measurement: Height (5\' 5" male / 5\' 0" female) and Chest (33" x 34.5")"',
  '"Physical Measurement: Height (5ft 5in male / 5ft 0in female) and Chest (33in x 34.5in)"'
);

fs.writeFileSync(target, s, 'utf-8');
console.log('Fixed quotes in data_recruitment_prep.js');
