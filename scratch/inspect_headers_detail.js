const fs = require('fs');

['world-economy-dashboard.html', 'currency-exchange-explorer.html', 'fia-laws-explorer.html'].forEach(f => {
  const c = fs.readFileSync('frontend/' + f, 'utf8');
  const m = c.match(/<header[\s\S]*?<\/header>/i);
  console.log(`=== ${f} ===`);
  if (m) console.log(m[0]);
  console.log('\n');
});
