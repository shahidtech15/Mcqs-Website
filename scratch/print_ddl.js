const fs = require('fs');
const ddl = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
console.log(ddl.slice(0, 1000));
