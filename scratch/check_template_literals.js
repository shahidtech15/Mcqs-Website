const fs = require('fs');

const checks = [
  { file: 'dashboard.html', target: '${rx.practiceLink}' },
  { file: 'digital-library.html', target: '${r.downloadLink}' },
  { file: 'digital-library.html', target: '${p.filePath}' },
  { file: 'recruitment-prep.html', target: '${res.fileUrl}' },
  { file: 'scholarships.html', target: '${sch.officialUrl}' }
];

checks.forEach(c => {
  const content = fs.readFileSync('frontend/' + c.file, 'utf8');
  const index = content.indexOf(c.target);
  if (index !== -1) {
    const start = Math.max(0, index - 80);
    const end = Math.min(content.length, index + 80);
    console.log(`=== ${c.file} contains "${c.target}" ===`);
    console.log(content.slice(start, end));
    console.log('\n');
  } else {
    console.log(`=== ${c.file} does NOT contain "${c.target}" ===\n`);
  }
});
