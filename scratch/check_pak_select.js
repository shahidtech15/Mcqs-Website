const fs = require('fs');
const content = fs.readFileSync('frontend/pakistan-map.html', 'utf8');

const sStart = content.indexOf('function selectItem(');
const sEnd = content.indexOf('function handleSearch()');
console.log(content.substring(sStart, sEnd));
