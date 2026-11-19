const fs = require('fs');

console.log('--- Checking World Map SVG ---');
const wm = fs.readFileSync('frontend/world-map.html', 'utf8');
const svgStart = wm.indexOf('<svg id="world-map"');
console.log('SVG Tag:', wm.substring(svgStart, svgStart + 250));

const pathIds = [];
const regex = /<(?:path|g)[^>]*id="([^"]+)"/g;
let match;
while ((match = regex.exec(wm)) !== null) {
  pathIds.push(match[1]);
}
console.log('Total SVG elements with ID:', pathIds.length);
console.log('Contains pk:', pathIds.includes('pk'), 'cn:', pathIds.includes('cn'), 'us:', pathIds.includes('us'));

// Check CSS rules for SVG
const cssMatch = wm.match(/<style[\s\S]*?<\/style>/gi) || [];
console.log('Style blocks count:', cssMatch.length);
cssMatch.forEach((s, idx) => {
  if (s.includes('active-country') || s.includes('svg')) {
    console.log(`Style ${idx} mentions svg/active-country.`);
  }
});
