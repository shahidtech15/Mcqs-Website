const fs = require('fs');

const files = fs.readdirSync('frontend').filter(f => f.endsWith('.html'));

const pagesWithFooter = [];
const pagesWithoutFooter = [];

files.forEach(f => {
  const c = fs.readFileSync('frontend/' + f, 'utf8');
  if (c.includes('<footer') || c.includes('id="footer"') || c.includes('class="site-footer"')) {
    pagesWithFooter.push(f);
  } else {
    pagesWithoutFooter.push(f);
  }
});

console.log('Pages WITH footer:', pagesWithFooter.length);
console.log(pagesWithFooter);
console.log('\nPages WITHOUT footer:', pagesWithoutFooter.length);
console.log(pagesWithoutFooter);
