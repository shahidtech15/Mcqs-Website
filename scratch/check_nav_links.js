const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log(`Checking ${htmlFiles.length} HTML files for admin links...`);
htmlFiles.forEach(f => {
    const content = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    const hasAdminLink = content.includes('admin.html');
    console.log(`${f}: ${hasAdminLink ? 'HAS admin link' : 'No direct admin link'}`);
});
