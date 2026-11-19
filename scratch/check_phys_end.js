const fs = require('fs');
const content = fs.readFileSync('frontend/js/data_physical_geography.js', 'utf8');
console.log(content.substring(content.length - 200));
