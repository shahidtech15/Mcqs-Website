const fs = require('fs');
const path = require('path');

const writtenHtmlPath = path.join(__dirname, '..', 'frontend', 'written-prep.html');
let writtenHtml = fs.readFileSync(writtenHtmlPath, 'utf8');

// Find navbar link
const target1 = '<a href="global-security-conflict-essays.html" style="font-weight: 700; color: #881337;"><i class="fa-solid fa-shield-halved"></i> Global Security (12 Essays) <span style="background:#fde047; color:#881337; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>';
const repl1 = target1 + '\n                <a href="geoeconomics-finance-essays.html" style="font-weight: 700; color: #0f766e;"><i class="fa-solid fa-chart-line"></i> Geoeconomics (12 Essays) <span style="background:#ccfbf1; color:#0f766e; font-size:0.68rem; padding:1px 5px; border-radius:4px;">NEW</span></a>';

if (writtenHtml.includes(target1) && !writtenHtml.includes('geoeconomics-finance-essays.html')) {
  writtenHtml = writtenHtml.replace(target1, repl1);
  console.log('Updated written-prep.html nav');
}

// Find callout card/banner
const target2 = 'href="global-security-conflict-essays.html"';
const idx = writtenHtml.indexOf(target2, writtenHtml.indexOf(target2) + 1);
if (idx !== -1) {
  // Let's see what is around this second occurrence
  const slice = writtenHtml.slice(idx - 50, idx + 350);
  console.log('Found second occurrence:', slice);
}

fs.writeFileSync(writtenHtmlPath, writtenHtml, 'utf8');
console.log('Finished fix_written_prep.js');
