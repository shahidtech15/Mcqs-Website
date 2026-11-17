const fs = require('fs');
const s = fs.readFileSync('./frontend/img/world-map.svg', 'utf8');
const idRegex = /id="([a-zA-Z0-9_-]+)"/g;
let match;
const ids = [];
while ((match = idRegex.exec(s)) !== null) {
  ids.push(match[1]);
}
console.log('Total IDs:', ids.length);
console.log('Sample IDs:', ids.slice(0, 30));
console.log('Includes pk?', ids.includes('pk') || ids.includes('PK'));
console.log('Includes us?', ids.includes('us') || ids.includes('US'));
console.log('Includes cn?', ids.includes('cn') || ids.includes('CN'));
console.log('Includes in?', ids.includes('in') || ids.includes('IN'));
console.log('Includes sa?', ids.includes('sa') || ids.includes('SA'));
console.log('Includes gb?', ids.includes('gb') || ids.includes('GB'));
