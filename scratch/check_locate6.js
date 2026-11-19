const fs = require('fs');
const content = fs.readFileSync('frontend/locate-on-map.html', 'utf8');
const occurrences = [];
let idx = 0;
while ((idx = content.indexOf('initLeafletMap', idx)) !== -1) {
  occurrences.push(idx);
  idx += 14;
}
occurrences.forEach(pos => {
  console.log(content.substring(pos - 50, pos + 100));
});
