const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('frontend/match-the-following.html', 'utf8');

// 1. Script syntax check
const scriptRegex = /<script(?:\s+[^>]*)?>([\s\S]*?)<\/script>/gi;
let match;
let index = 1;
while ((match = scriptRegex.exec(html)) !== null) {
  const code = match[1];
  if (!code.trim()) continue;
  try {
    new vm.Script(code);
    console.log(`Script #${index} syntax: OK (${code.length} chars)`);
  } catch (err) {
    console.error(`Script #${index} syntax error:`, err.message);
  }
  index++;
}

// 2. DOM IDs check
const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
const usedIds = new Set();
while ((match = idRegex.exec(html)) !== null) {
  usedIds.add(match[1]);
}
console.log('Total document.getElementById IDs:', usedIds.size);
const missing = [];
for (const id of usedIds) {
  if (!html.includes('id="' + id + '"') && !html.includes("id='" + id + "'")) {
    missing.push(id);
  }
}
if (missing.length > 0) {
  console.log('Missing IDs:', missing);
} else {
  console.log('All referenced IDs exist in HTML!');
}
