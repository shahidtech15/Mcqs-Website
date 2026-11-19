const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const matches = content.match(/<button[^>]*class="[^"]*map-btn[^"]*"[^>]*>/gi) || [];
console.log('Map buttons in pakistan-map:', matches);
