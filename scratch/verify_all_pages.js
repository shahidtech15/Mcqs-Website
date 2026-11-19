const fs = require('fs');

const files = [
  'frontend/index.html',
  'frontend/written-prep.html',
  'frontend/exam-guide.html',
  'frontend/quiz.html',
  'frontend/science-notes.html',
  'frontend/about.html'
];

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error('File missing:', f);
    return;
  }
  const content = fs.readFileSync(f, 'utf8');
  console.log(`${f} (${(content.length / 1024).toFixed(1)} KB) -> has written-prep: ${content.includes('written-prep.html')}, has exam-guide: ${content.includes('exam-guide.html')}`);
});
