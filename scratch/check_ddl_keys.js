const fs = require('fs');
const ddl = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
const keys = [...ddl.matchAll(/^\s{2}([a-zA-Z0-9_]+):\s*\[/gm)].map(m => m[1]);
console.log('Keys in DIGITAL_LIBRARY_DATA:', keys);
