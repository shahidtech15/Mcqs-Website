const fs = require('fs');
const content = fs.readFileSync('frontend/science-notes.html', 'utf8');
const switcher = content.match(/<div class="[^"]*switcher[^"]*"[\s\S]*?<\/div>/i);
if (switcher) console.log('Switcher:\n', switcher[0].substring(0, 500));
else console.log('No switcher in science-notes');
