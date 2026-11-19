const fs = require('fs');
const content = fs.readFileSync('frontend/js/data_organizations.js', 'utf8');
console.log('Does data_organizations.js mention ORG_DATA?');
console.log(content.includes('ORG_DATA'));
const last1000 = content.substring(content.length - 1000);
console.log('End of data_organizations.js:\n', last1000);
