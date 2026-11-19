const fs = require('fs');
const s = fs.readFileSync('frontend/solar-system-explorer.html', 'utf8');
const switcherMatch = s.match(/<div class="[^"]*switcher[^"]*"[\s\S]*?<\/div>/i);
if (switcherMatch) console.log('Solar switcher:\n', switcherMatch[0]);

const h = fs.readFileSync('frontend/human-body-explorer.html', 'utf8');
const hSwitcher = h.match(/<div class="[^"]*switcher[^"]*"[\s\S]*?<\/div>/i);
if (hSwitcher) console.log('Human body switcher:\n', hSwitcher[0]);
