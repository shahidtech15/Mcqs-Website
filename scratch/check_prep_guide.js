const fs = require('fs');
const wp = fs.readFileSync('frontend/written-prep.html', 'utf8');
const eg = fs.readFileSync('frontend/exam-guide.html', 'utf8');
console.log('written-prep.html length:', wp.length);
console.log('exam-guide.html length:', eg.length);
