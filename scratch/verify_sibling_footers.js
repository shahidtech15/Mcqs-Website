const fs = require('fs');

const files = [
  'constitution-explorer.html',
  'ppc-section-finder.html',
  'crpc-procedure-flowchart.html',
  'identify-legal-provision.html'
];

files.forEach(f => {
    let content = fs.readFileSync('frontend/' + f, 'utf-8');
    let changed = false;

    // Check footer list
    if (content.includes('identify-legal-provision.html') && !content.includes('court-structure-explorer.html')) {
        // Look for footer list items
        if (content.includes('<li><a href="identify-legal-provision.html"')) {
            content = content.replace(/(<li><a\s+href="identify-legal-provision\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i, '$1\n                        <li><a href="court-structure-explorer.html"><i class="fa-solid fa-landmark"></i> Court Structure Explorer</a></li>');
            changed = true;
        } else if (content.includes('<a href="identify-legal-provision.html">Legal Provision</a>')) {
            content = content.replace(/(<a\s+href="identify-legal-provision\.html">Legal Provision<\/a>)/i, '$1 &bull;\n            <a href="court-structure-explorer.html">Court Structure</a>');
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync('frontend/' + f, content, 'utf-8');
        console.log(`Updated footer link in ${f}`);
    } else {
        console.log(`Checked footer link in ${f}`);
    }
});
