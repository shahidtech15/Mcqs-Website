const fs = require('fs');

const app = fs.readFileSync('frontend/js/app.js', 'utf8');
const lines = app.split('\n');
console.log("Total lines in app.js:", lines.length);

for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes('islam')) {
        console.log(`Line ${i + 1}: ${lines[i].trim()}`);
    }
}
