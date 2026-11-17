const fs = require('fs');
const content = fs.readFileSync('frontend/admin.html', 'utf8');
const bulkMatch = content.match(/<section id="bulkUpload"[\s\S]*?<\/section>/);
if (bulkMatch) {
    console.log(bulkMatch[0]);
}
