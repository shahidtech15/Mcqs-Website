const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const files = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

const pagesWithSwitcher = [];
files.forEach(f => {
  const content = fs.readFileSync(path.join(frontendDir, f), 'utf-8');
  if (content.includes('site-switcher-bar')) {
    pagesWithSwitcher.push(f);
  }
});

console.log(`Found ${pagesWithSwitcher.length} pages with site-switcher-bar:`);
console.log(pagesWithSwitcher.join(', '));
