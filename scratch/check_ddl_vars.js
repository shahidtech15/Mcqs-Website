const fs = require('fs');
const ddl = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
const consts = [...ddl.matchAll(/(?:const|let|var)\s+([a-zA-Z0-9_]+)\s*=/g)].map(m => m[1]);
console.log('Variables in data_digital_library.js:', consts);
