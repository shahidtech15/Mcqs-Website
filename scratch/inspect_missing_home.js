const fs = require('fs');

const files = ['currency-exchange-explorer.html', 'fia-laws-explorer.html', 'world-economy-dashboard.html'];

files.forEach(f => {
  const c = fs.readFileSync('frontend/' + f, 'utf8');
  console.log(`=== ${f} Header ===`);
  const headerMatch = c.match(/<header[\s\S]*?<\/header>/i) || c.match(/<nav[\s\S]*?<\/nav>/i) || c.match(/<div class="[^"]*nav[^"]*"[\s\S]*?<\/div>/i);
  if (headerMatch) {
    console.log(headerMatch[0].slice(0, 400));
  } else {
    // Look at first 1000 chars of body
    const bodyMatch = c.match(/<body[\s\S]*?>([\s\S]{1,600})/i);
    if (bodyMatch) console.log(bodyMatch[1]);
  }
  console.log('\n');
});
