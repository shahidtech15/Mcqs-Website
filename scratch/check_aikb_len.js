const fs = require('fs');
const aikb = fs.readFileSync('frontend/js/ai_knowledge_base.js', 'utf8');
console.log('Total length of ai_knowledge_base.js:', aikb.length);
