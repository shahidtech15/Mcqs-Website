const fs = require('fs');

const files = [
  'frontend/pakistan-map.html',
  'frontend/sindh-map.html',
  'frontend/locate-on-map.html',
  'frontend/physical-geography-map.html',
  'frontend/geopolitical-hotspots-map.html',
  'frontend/international-trade-routes-map.html',
  'frontend/international-organizations-explorer.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n*** ${f} ***`);
  
  // Find map initialization block
  const initMatch = content.match(/function\s+init[A-Za-z0-9_]*\s*\([^)]*\)\s*\{[\s\S]*?(?=function|\n\s*\/\/|\n\s*document\.|\n\s*window\.|\s*<\/script>)/);
  if (initMatch) {
    console.log(initMatch[0].substring(0, 500));
  } else {
    console.log('No function init* found');
  }
});
