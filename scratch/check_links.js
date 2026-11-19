const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('frontend').filter(f => f.endsWith('.html'));
console.log('Total HTML pages:', htmlFiles.length);

let totalLinksChecked = 0;
let brokenLinks = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join('frontend', file), 'utf8');
  const hrefMatches = content.match(/href=["']([^"'#:]+\.html)["']/g) || [];
  
  hrefMatches.forEach(match => {
    const target = match.replace(/href=["']/, '').replace(/["']/, '');
    totalLinksChecked++;
    if (!fs.existsSync(path.join('frontend', target))) {
      console.error(`Broken link in ${file} -> ${target}`);
      brokenLinks++;
    }
  });
});

console.log(`Links checked: ${totalLinksChecked}, Broken links: ${brokenLinks}`);
