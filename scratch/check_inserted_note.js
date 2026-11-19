const fs = require('fs');
const ddl = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
const idx = ddl.indexOf('note-civil-service-acts-mastery');
console.log(ddl.slice(idx - 50, idx + 1000));
