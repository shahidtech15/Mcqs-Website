const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../frontend/constitution-explorer.html'), 'utf-8');
const match = content.match(/<div class="site-switcher-bar"[^>]*>([\s\S]*?)<\/div>/);
if (match) {
  console.log(match[0]);
} else {
  console.log('No switcher bar found in constitution-explorer.html');
}
