const fs = require('fs');
const assistant = fs.readFileSync('frontend/js/ai_study_assistant.js', 'utf8');
console.log(assistant.slice(0, 600));
