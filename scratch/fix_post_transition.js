const fs = require('fs');
let code = fs.readFileSync('scratch/build_periodic_database.js', 'utf8');
code = code.replace(/cat: "post-transition",/g, 'cat: "post-transition-metal",');
fs.writeFileSync('scratch/build_periodic_database.js', code, 'utf8');
console.log('Fixed post-transition categories in build_periodic_database.js');
