const fs = require('fs');

const files = [
  'crossword.html',
  'word-search.html',
  'arrange-chronologically.html',
  'guess-the-country.html',
  'locate-on-map.html',
  'match-the-following.html',
  'world-map.html',
  'physical-geography-map.html',
  'geopolitical-hotspots-map.html',
  'international-trade-routes-map.html',
  'pakistan-map.html',
  'sindh-map.html'
];

files.forEach(f => {
  const content = fs.readFileSync('frontend/' + f, 'utf8');
  console.log(f, 'has UNSC:', content.includes('unsc-simulator.html'));
});
