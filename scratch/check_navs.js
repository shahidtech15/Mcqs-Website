const fs = require('fs');
const files = ['index.html', 'quiz.html', 'fia-sample-papers.html', 'grammar-rules.html', 'written-prep.html', 'exam-guide.html', 'science-notes.html', 'about.html'];

files.forEach(f => {
  const content = fs.readFileSync('./frontend/' + f, 'utf8');
  const match = content.match(/<nav class="nav-links">([\s\S]*?)<\/nav>/);
  console.log('===', f, '===');
  if (match) console.log(match[1].trim());
});
