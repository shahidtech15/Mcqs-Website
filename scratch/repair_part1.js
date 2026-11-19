const fs = require('fs');

let raw = fs.readFileSync('./scratch/essays_2026_part1.js', 'utf8');

// The three items are in an array:
// Item 1: essayText starts at line 48, ends at line 241
// Item 2: essayText starts at line 287, ends at line 485
// Item 3: essayText starts at line 531, ends at line 711

const lines = raw.split('\n');

function cleanEssayLines(startIdx, endIdx) {
  // startIdx is the line with essayText: `...
  // endIdx is the line with ...`
  let inCode = false;
  for (let i = startIdx; i <= endIdx; i++) {
    let line = lines[i];
    if (i === startIdx) {
      // Keep initial essayText: `
      let prefix = line.substring(0, line.indexOf('`') + 1);
      let rest = line.substring(line.indexOf('`') + 1);
      rest = rest.replace(/`/g, "'");
      lines[i] = prefix + rest;
      continue;
    }
    if (i === endIdx) {
      // Keep trailing `
      let lastBacktick = line.lastIndexOf('`');
      let prefix = line.substring(0, lastBacktick);
      let rest = line.substring(lastBacktick);
      prefix = prefix.replace(/```/g, inCode ? '</pre>' : '<pre class="ascii-diagram">').replace(/`/g, "'");
      lines[i] = prefix + rest;
      continue;
    }
    // Middle lines
    while (line.includes('```')) {
      if (!inCode) {
        line = line.replace('```', '<pre class="ascii-diagram">');
        inCode = true;
      } else {
        line = line.replace('```', '</pre>');
        inCode = false;
      }
    }
    // Replace any remaining stray single backticks with single quotes
    line = line.replace(/`/g, "'");
    lines[i] = line;
  }
}

cleanEssayLines(47, 241);
cleanEssayLines(286, 485);
cleanEssayLines(530, 711);

const repaired = lines.join('\n');
fs.writeFileSync('./scratch/essays_2026_part1.js', repaired, 'utf8');
console.log('Repaired essays_2026_part1.js successfully!');
