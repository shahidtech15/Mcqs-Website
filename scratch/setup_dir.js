const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'essays_2026');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Let's read the original essays_2026_part1.js from git or from file
const content = fs.readFileSync(path.join(__dirname, 'essays_2026_part1.js'), 'utf8');

// Let's split content by topicNumber
console.log('File size:', content.length);
