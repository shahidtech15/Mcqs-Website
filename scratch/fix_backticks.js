const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'build_education_essay.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace unescaped ``` with \`\`\` inside essayText
// The issue was at lines 195, 211, 269, 278, 292, 301
content = content.replace(/\n```\n/g, '\n\\`\\`\\`\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Escaped backticks in build_education_essay.js');
