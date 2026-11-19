const fs = require('fs');

const sample = ['daily-challenges.html', 'world-economy-dashboard.html', 'periodic-table.html', 'crpc-procedure-flowchart.html'];

sample.forEach(f => {
  const c = fs.readFileSync('frontend/' + f, 'utf8');
  const m = c.match(/<footer[\s\S]*?<\/footer>/i);
  console.log(`=== ${f} footer ===`);
  if (m) console.log(m[0]);
  else console.log('NO FOOTER');
  console.log('\n');
});
