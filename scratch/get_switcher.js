const fs = require('fs');
const lines = fs.readFileSync('frontend/crpc-procedure-flowchart.html', 'utf8').split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('class="switcher-inner"')) {
    for (let j = i; j < i + 26; j++) {
      console.log(lines[j]);
    }
    break;
  }
}
