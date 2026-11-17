const fs = require('fs');
const files = fs.readdirSync('frontend/js');
console.log('Frontend JS files:', files);
