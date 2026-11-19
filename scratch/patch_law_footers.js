const fs = require('fs');

// 1. identify-legal-provision.html
let legalContent = fs.readFileSync('frontend/identify-legal-provision.html', 'utf-8');
if (legalContent.includes('<li><a href="identify-legal-provision.html"') && !legalContent.includes('<li><a href="court-structure-explorer.html"')) {
    legalContent = legalContent.replace(
        /(<li><a\s+href="identify-legal-provision\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i,
        '$1\n                        <li><a href="court-structure-explorer.html"><i class="fa-solid fa-landmark"></i> Court Structure Explorer</a></li>'
    );
    fs.writeFileSync('frontend/identify-legal-provision.html', legalContent, 'utf-8');
    console.log('Updated identify-legal-provision.html footer');
}

// 2. crpc-procedure-flowchart.html
let crpcContent = fs.readFileSync('frontend/crpc-procedure-flowchart.html', 'utf-8');
if (crpcContent.includes('identify-legal-provision.html">Legal Provision</a>') && !crpcContent.includes('court-structure-explorer.html">Court Structure</a>')) {
    crpcContent = crpcContent.replace(
        /(<a\s+href="identify-legal-provision\.html">Legal Provision<\/a>\s*&bull;)/i,
        '$1\n            <a href="court-structure-explorer.html">Court Structure</a> &bull;'
    );
    fs.writeFileSync('frontend/crpc-procedure-flowchart.html', crpcContent, 'utf-8');
    console.log('Updated crpc-procedure-flowchart.html footer');
}

// 3. ppc-section-finder.html
let ppcContent = fs.readFileSync('frontend/ppc-section-finder.html', 'utf-8');
if (ppcContent.includes('identify-legal-provision.html">Legal Provision</a>') && !ppcContent.includes('court-structure-explorer.html">Court Structure</a>')) {
    ppcContent = ppcContent.replace(
        /(<a\s+href="identify-legal-provision\.html">Legal Provision<\/a>)/i,
        '$1 &bull; <a href="court-structure-explorer.html">Court Structure</a>'
    );
    fs.writeFileSync('frontend/ppc-section-finder.html', ppcContent, 'utf-8');
    console.log('Updated ppc-section-finder.html footer');
}

// 4. constitution-explorer.html
let constContent = fs.readFileSync('frontend/constitution-explorer.html', 'utf-8');
if (constContent.includes('identify-legal-provision.html">Legal Provision</a>') && !constContent.includes('court-structure-explorer.html">Court Structure</a>')) {
    constContent = constContent.replace(
        /(<a\s+href="identify-legal-provision\.html">Legal Provision<\/a>)/i,
        '$1 &bull; <a href="court-structure-explorer.html">Court Structure</a>'
    );
    fs.writeFileSync('frontend/constitution-explorer.html', constContent, 'utf-8');
    console.log('Updated constitution-explorer.html footer');
}
