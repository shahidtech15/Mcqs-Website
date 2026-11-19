const fs = require('fs');
const content = fs.readFileSync('frontend/locate-on-map.html', 'utf8');
const scriptMatches = content.match(/<script[\s\S]*?<\/script>/gi) || [];
console.log('locate-on-map scripts count:', scriptMatches.length);
// print parts with L.map or init
scriptMatches.forEach((s, idx) => {
  if (s.includes('L.map') || s.includes('blankMapCanvas')) {
    console.log(`Script ${idx} has map code:\n` + s.substring(0, 800));
  }
});
