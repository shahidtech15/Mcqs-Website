const fs = require('fs');
const quiz = fs.readFileSync('frontend/js/quiz.js', 'utf8');
const lines = quiz.split('\n');
console.log('Total lines in quiz.js:', lines.length);

for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes('islam')) {
        console.log(`Line ${i + 1}: ${lines[i].trim()}`);
    }
}
