const fs = require('fs');

const sampleFiles = ['written-prep.html', 'quiz.html', 'digital-library.html', 'math-mcqs.html', 'css-essays-2026.html', 'scholarships.html'];

sampleFiles.forEach(f => {
  const c = fs.readFileSync('frontend/' + f, 'utf8');
  console.log(`=== ${f} ===`);
  const header = c.match(/<header[\s\S]*?<\/header>/i) || c.match(/<nav[\s\S]*?<\/nav>/i);
  if (header) {
    console.log(header[0].slice(0, 300));
  } else {
    console.log('NO HEADER OR NAV TAG');
  }
  console.log('\n');
});
