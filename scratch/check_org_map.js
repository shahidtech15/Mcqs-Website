const fs = require('fs');
const content = fs.readFileSync('frontend/international-organizations-explorer.html', 'utf8');
const s = content.indexOf('initWorldMap');
if (s !== -1) {
  console.log(content.substring(s - 50, s + 1000));
} else {
  const m = content.indexOf('orgWorldMapCanvas');
  console.log(content.substring(m - 100, m + 1000));
}
