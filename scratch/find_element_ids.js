const fs = require('fs');
const txt = fs.readFileSync('frontend/currency-exchange-explorer.html', 'utf8');

const defRegex = /id=['"]([^'"]+)['"]/g;
const ids = [];
let m;
while ((m = defRegex.exec(txt)) !== null) {
  ids.push(m[1]);
}
console.log('Defined IDs:', ids);
