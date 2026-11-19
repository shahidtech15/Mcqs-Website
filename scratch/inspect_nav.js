const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('frontend').filter(f => f.endsWith('.html'));
console.log('Total HTML files:', files.length);

const withSwitcher = [];
files.forEach(f => {
  const c = fs.readFileSync(path.join('frontend', f), 'utf8');
  if (c.includes('site-switcher-bar')) {
    withSwitcher.push(f);
  }
});

console.log('Files with site-switcher-bar:', withSwitcher.length);
console.log(withSwitcher);

// Check index.html for daily-challenges references
const indexHtml = fs.readFileSync('frontend/index.html', 'utf8');
const lines = indexHtml.split('\n');
console.log('--- Matches for daily-challenges in index.html ---');
lines.forEach((l, idx) => {
  if (l.includes('daily-challenges.html')) {
    console.log(`Line ${idx+1}: ${l.trim()}`);
  }
});
