const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log('Checking digital library links in all HTML files:');
htmlFiles.forEach(file => {
    const content = fs.readFileSync(path.join(frontendDir, file), 'utf8');
    const matches = [...content.matchAll(/<a[^>]*href=["'][^"']*digital-library[^"']*["'][^>]*>[\s\S]*?<\/a>/gi)];
    const brokenMatches = [...content.matchAll(/<a[^>]*digital-library[^>]*>/gi)];
    console.log(`\n=== ${file} ===`);
    console.log(`Found ${matches.length} matching valid <a> tags`);
    matches.forEach(m => console.log('  ' + m[0].replace(/\s+/g, ' ').slice(0, 100)));
    
    // Check if there are malformed tags around digital-library
    const rawMatches = [...content.matchAll(/.{0,50}digital-library.{0,50}/gi)];
    rawMatches.forEach(m => {
        if (!m[0].includes('<a href="digital-library.html">') && !m[0].includes('<a href="digital-library.html" class="active">')) {
            console.log('  [SUSPICIOUS RAW MATCH]: ' + m[0]);
        }
    });
});
