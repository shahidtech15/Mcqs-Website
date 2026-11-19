const fs = require('fs');

const dc = fs.readFileSync('frontend/daily-challenges.html', 'utf8');
const match = dc.match(/<div class="site-switcher-bar"[\s\S]*?<\/div>/);
if (match) {
  console.log('--- site-switcher-bar in daily-challenges.html ---');
  console.log(match[0]);
}

const df = fs.readFileSync('frontend/daily-fact.html', 'utf8');
const matchDf = df.match(/<div class="site-switcher-bar"[\s\S]*?<\/div>/);
if (matchDf) {
  console.log('--- site-switcher-bar in daily-fact.html ---');
  console.log(matchDf[0]);
}
