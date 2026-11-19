const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');
const scriptTags = content.match(/<script[^>]*src=[^>]*>/gi) || [];
console.log('pakistan-map script tags:', scriptTags);
