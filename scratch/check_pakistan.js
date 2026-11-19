const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const scriptMatches = content.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('pakistan-map scripts count:', scriptMatches.length);
scriptMatches.forEach((s, idx) => {
  if (s.includes('pakistanMapContainer') || s.includes('L.map')) {
    console.log(`Script ${idx} length: ${s.length}, preview: ${s.substring(0, 300)}`);
  }
});
