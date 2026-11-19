const fs = require('fs');
const content = fs.readFileSync('frontend/admin.html', 'utf8');
const sidebarMatch = content.match(/<aside[\s\S]*?<\/aside>/);
if (sidebarMatch) {
    console.log(sidebarMatch[0]);
} else {
    console.log('Sidebar not found');
}
