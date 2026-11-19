// scratch/fix_all_parts.js
const fs = require('fs');

const files = [
  'scratch/essays_part1.js',
  'scratch/essays_part2.js',
  'scratch/essays_part3.js',
  'scratch/essays_part4.js'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace triple backticks with <pre class="ascii-diagram"> and </pre>
  let inPre = false;
  content = content.replace(/```/g, () => {
    inPre = !inPre;
    return inPre ? '<pre class="ascii-diagram">' : '</pre>';
  });
  
  // Also check for any inline backticks like `something`
  // We can find any backtick that is not preceded by "essayText: " and not followed by "\n  }" or "\n}"
  // To be completely safe: let's replace remaining standalone backticks that are not the start/end of essayText
  // Let's see: the start of essayText is `essayText: \``
  // The end of essayText is `\n  }` or `\n}`.
  
  // Let's do a state-machine scan through the characters!
  let result = '';
  let i = 0;
  while (i < content.length) {
    if (content.substring(i, i + 11) === 'essayText: `') {
      result += 'essayText: `';
      i += 11;
      // Now we are inside essayText. Collect until the closing backtick!
      // The closing backtick is a backtick followed by optional whitespace and then `}`
      while (i < content.length) {
        if (content[i] === '`') {
          // Check if this backtick is the end of essayText
          const rest = content.substring(i + 1, i + 30);
          if (/^\s*\n\s*\}|^\s*\}/.test(rest)) {
            // This is the closing backtick of essayText!
            result += '`';
            i++;
            break;
          } else {
            // This is an inner backtick inside essayText! Escape it!
            result += "\\`";
            i++;
          }
        } else {
          result += content[i];
          i++;
        }
      }
    } else {
      result += content[i];
      i++;
    }
  }
  
  fs.writeFileSync(f, result, 'utf8');
  console.log('Fixed', f);
});
