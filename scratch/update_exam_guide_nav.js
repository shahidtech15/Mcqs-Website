const fs = require('fs');
let eg = fs.readFileSync('frontend/exam-guide.html', 'utf8');
console.log('exam-guide has written-prep.html:', eg.includes('written-prep.html'));
if (!eg.includes('written-prep.html')) {
  eg = eg.replace(
    '<a href="exam-guide.html" class="active">Exam Guide</a>',
    '<a href="written-prep.html">Written Prep</a>\n                <a href="exam-guide.html" class="active">Exam Guide</a>'
  );
  eg = eg.replace(
    '<li><a href="exam-guide.html" class="active"',
    '<li><a href="written-prep.html" style="font-weight: 700; color: #38bdf8;"><i class="fa-solid fa-pen-nib"></i> Written Prep</a></li>\n                <li><a href="exam-guide.html" class="active"'
  );
  fs.writeFileSync('frontend/exam-guide.html', eg, 'utf8');
  console.log('exam-guide.html navbar updated successfully.');
}
