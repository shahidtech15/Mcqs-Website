const fs = require('fs');

['crpc-procedure-flowchart.html', 'ppc-section-finder.html', 'constitution-explorer.html'].forEach(f => {
    let content = fs.readFileSync('frontend/' + f, 'utf-8');
    let changed = false;

    // Check footer links
    if (content.includes('class="footer-links"') && !content.includes('>Legal Provision</a>')) {
        content = content.replace(/(<a\s+href="[^"]*constitution-explorer\.html"[^>]*>Constitution Explorer<\/a>)/i, '$1 &bull;\n            <a href="identify-legal-provision.html">Legal Provision</a>');
        changed = true;
    }

    // Check header links
    if (content.includes('class="header-actions"') && !content.includes('href="identify-legal-provision.html"')) {
        // optionally add quick link in header
    }

    if (changed) {
        fs.writeFileSync('frontend/' + f, content, 'utf-8');
        console.log(`Updated footer in ${f}`);
    } else {
        console.log(`Footer check passed for ${f}`);
    }
});
