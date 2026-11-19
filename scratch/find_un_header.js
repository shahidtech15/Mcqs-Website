const fs = require('fs');
const un = fs.readFileSync('frontend/topic-united-nations.html', 'utf8');
const lines = un.split('\n');
lines.forEach((l, i) => {
  if (l.includes('<header') || l.includes('class="navbar"') || l.includes('class="nav') || l.includes('href="index.html"')) {
    console.log(i + 1, l.trim());
  }
});
