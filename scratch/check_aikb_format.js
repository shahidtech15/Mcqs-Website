const fs = require('fs');
const aikb = fs.readFileSync('frontend/js/ai_knowledge_base.js', 'utf8');
const lawSection = aikb.slice(aikb.indexOf('laws:'), aikb.indexOf('economics:'));
console.log(lawSection.slice(0, 1500));
