const fs = require('fs');
const content = fs.readFileSync('frontend/js/data_locate_map.js', 'utf8');
console.log('=== data_locate_map.js end ===');
console.log(content.substring(content.length - 300).replace(/\n/g, ' '));
