const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log(`Checking and synchronizing navigation across ${htmlFiles.length} HTML files...`);

htmlFiles.forEach(file => {
    const filePath = path.join(frontendDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if acts-rules.html is already in the nav
    if (!content.includes('acts-rules.html')) {
        // Find <nav class="nav-links"> or similar
        // Typically after <a href="index.html"...> or before articles.html
        if (content.includes('<a href="articles.html"')) {
            content = content.replace(
                '<a href="articles.html"',
                '<a href="acts-rules.html">Acts &amp; Rules</a>\n                <a href="articles.html"'
            );
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated nav in ${file}`);
        } else if (content.includes('href="digital-library.html"')) {
            content = content.replace(
                'href="digital-library.html"',
                'href="acts-rules.html">Acts &amp; Rules</a>\n                <a href="digital-library.html"'
            );
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated nav (via digital-library) in ${file}`);
        } else {
            console.log(`Could not find anchor to insert acts-rules in ${file}`);
        }
    } else {
        console.log(`Already has acts-rules.html: ${file}`);
    }
});
