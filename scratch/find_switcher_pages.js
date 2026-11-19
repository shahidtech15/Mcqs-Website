const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const files = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

const switcherFiles = [];
files.forEach(f => {
    const content = fs.readFileSync(path.join(frontendDir, f), 'utf-8');
    if (content.includes('site-switcher-bar')) {
        switcherFiles.push(f);
    }
});

console.log(`Found ${switcherFiles.length} files with site-switcher-bar:`);
console.log(switcherFiles);
