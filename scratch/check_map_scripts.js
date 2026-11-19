const fs = require('fs');
const pages = [
  'pakistan-map.html',
  'sindh-map.html',
  'world-map.html',
  'physical-geography-map.html',
  'geopolitical-hotspots-map.html',
  'international-trade-routes-map.html',
  'locate-on-map.html',
  'international-organizations-explorer.html'
];

pages.forEach(p => {
  const content = fs.readFileSync('frontend/' + p, 'utf8');
  const srcMatches = content.match(/<script[^>]*src=["']([^"']+)["'][^>]*>/gi) || [];
  console.log('===', p, '===');
  srcMatches.forEach(tag => {
    const src = tag.match(/src=["']([^"']+)["']/i)[1];
    const exists = src.startsWith('http') ? 'REMOTE' : fs.existsSync('frontend/' + src) ? 'EXISTS' : 'MISSING!';
    console.log('  ', src, '-->', exists);
  });
});
