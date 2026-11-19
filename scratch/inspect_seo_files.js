const fs = require('fs');
const path = require('path');

const toInspect = ['privacy.html', 'terms.html', 'about.html', 'contact.html', 'disclaimer.html', 'sitemap.xml', 'robots.txt'];

toInspect.forEach(f => {
  const p = path.join('frontend', f);
  if (fs.existsSync(p)) {
    const stats = fs.statSync(p);
    const content = fs.readFileSync(p, 'utf8');
    console.log(`=== ${f} (${stats.size} bytes) ===`);
    console.log(content.slice(0, 400));
    console.log('...\n');
  } else {
    console.log(`=== ${f} MISSING ===\n`);
  }
});
