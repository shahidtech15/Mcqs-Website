const fs = require('fs');
console.log('--- data_digital_library.js preview ---');
const ddl = fs.readFileSync('frontend/js/data_digital_library.js', 'utf8');
console.log(ddl.slice(0, 400));
console.log('--- ai_knowledge_base.js preview ---');
const aikb = fs.readFileSync('frontend/js/ai_knowledge_base.js', 'utf8');
console.log(aikb.slice(0, 400));
