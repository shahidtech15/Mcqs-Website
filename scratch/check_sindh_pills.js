const fs = require('fs');
const content = fs.readFileSync('frontend/sindh-map.html', 'utf8');

const s = content.indexOf('function renderDivisionPills()');
const e = content.indexOf('function filterByDivision(');
console.log(content.substring(s, e));
