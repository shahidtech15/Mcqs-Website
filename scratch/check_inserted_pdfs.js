const fs = require('fs');
const ddl = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
const idx = ddl.indexOf('pdf-aml-act-2010');
console.log(ddl.slice(idx - 50, idx + 1600));
