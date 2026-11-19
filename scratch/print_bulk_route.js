const fs = require('fs');
const content = fs.readFileSync('backend/routes/api.js', 'utf8');
const idx = content.indexOf("router.post('/questions/bulk'");
console.log(content.slice(idx, idx + 800));
