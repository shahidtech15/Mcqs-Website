const fs = require('fs');
const df = fs.readFileSync('frontend/daily-fact.html', 'utf8');
const matches = df.match(/href=["'][^"']*index\.html[^"']*["']/g);
console.log('Matches in daily-fact.html:', matches);
