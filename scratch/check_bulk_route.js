const fs = require('fs');
const content = fs.readFileSync('backend/routes/api.js', 'utf8');
const bulkMatch = content.match(/router\.post\(['"]\/questions\/bulk['"][\s\S]*?\}\);/);
if (bulkMatch) {
    console.log(bulkMatch[0]);
} else {
    console.log('Not found');
}
