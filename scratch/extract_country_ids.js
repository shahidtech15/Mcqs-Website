const fs = require('fs');
const s = fs.readFileSync('./frontend/img/world-map.svg', 'utf8');

const matches = [...s.matchAll(/<(path|g)\s+id="([a-zA-Z0-9_-]+)"/g)];
const ids = matches.map(m => m[2]).filter(id => id !== 'world-map');
console.log('Count:', ids.length);
console.log(JSON.stringify(ids.sort()));
