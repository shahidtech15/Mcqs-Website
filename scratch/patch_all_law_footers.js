const fs = require('fs');

// 1. court-structure-explorer.html
let courtContent = fs.readFileSync('frontend/court-structure-explorer.html', 'utf-8');
if (!courtContent.includes('href="fia-laws-explorer.html"')) {
    courtContent = courtContent.replace(
        /(<li><a\s+href="court-structure-explorer\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i,
        '$1\n                        <li><a href="fia-laws-explorer.html"><i class="fa-solid fa-building-shield"></i> FIA Laws Explorer</a></li>'
    );
    fs.writeFileSync('frontend/court-structure-explorer.html', courtContent, 'utf-8');
    console.log('Updated court-structure-explorer.html footer');
}

// 2. identify-legal-provision.html
let legalContent = fs.readFileSync('frontend/identify-legal-provision.html', 'utf-8');
if (legalContent.includes('court-structure-explorer.html') && !legalContent.includes('fia-laws-explorer.html')) {
    legalContent = legalContent.replace(
        /(<li><a\s+href="court-structure-explorer\.html"[^>]*>[\s\S]*?<\/a><\/li>)/i,
        '$1\n                        <li><a href="fia-laws-explorer.html"><i class="fa-solid fa-building-shield"></i> FIA Laws Explorer</a></li>'
    );
    fs.writeFileSync('frontend/identify-legal-provision.html', legalContent, 'utf-8');
    console.log('Updated identify-legal-provision.html footer');
}

// 3. crpc-procedure-flowchart.html
let crpcContent = fs.readFileSync('frontend/crpc-procedure-flowchart.html', 'utf-8');
if (crpcContent.includes('court-structure-explorer.html">Court Structure</a>') && !crpcContent.includes('fia-laws-explorer.html">FIA Laws</a>')) {
    crpcContent = crpcContent.replace(
        /(<a\s+href="court-structure-explorer\.html">Court Structure<\/a>\s*&bull;)/i,
        '$1\n            <a href="fia-laws-explorer.html">FIA Laws</a> &bull;'
    );
    fs.writeFileSync('frontend/crpc-procedure-flowchart.html', crpcContent, 'utf-8');
    console.log('Updated crpc-procedure-flowchart.html footer');
}

// 4. ppc-section-finder.html
let ppcContent = fs.readFileSync('frontend/ppc-section-finder.html', 'utf-8');
if (ppcContent.includes('court-structure-explorer.html">Court Structure</a>') && !ppcContent.includes('fia-laws-explorer.html">FIA Laws</a>')) {
    ppcContent = ppcContent.replace(
        /(<a\s+href="court-structure-explorer\.html">Court Structure<\/a>)/i,
        '$1 &bull; <a href="fia-laws-explorer.html">FIA Laws</a>'
    );
    fs.writeFileSync('frontend/ppc-section-finder.html', ppcContent, 'utf-8');
    console.log('Updated ppc-section-finder.html footer');
}

// 5. constitution-explorer.html
let constContent = fs.readFileSync('frontend/constitution-explorer.html', 'utf-8');
if (constContent.includes('court-structure-explorer.html">Court Structure</a>') && !constContent.includes('fia-laws-explorer.html">FIA Laws</a>')) {
    constContent = constContent.replace(
        /(<a\s+href="court-structure-explorer\.html">Court Structure<\/a>)/i,
        '$1 &bull; <a href="fia-laws-explorer.html">FIA Laws</a>'
    );
    fs.writeFileSync('frontend/constitution-explorer.html', constContent, 'utf-8');
    console.log('Updated constitution-explorer.html footer');
}

// 6. fia-sample-papers.html
let fiaPaperContent = fs.readFileSync('frontend/fia-sample-papers.html', 'utf-8');
if (!fiaPaperContent.includes('href="fia-laws-explorer.html"')) {
    fiaPaperContent = fiaPaperContent.replace(
        /(<p>&copy; 2026 MCQs Portal\. All rights reserved\.<\/p>)/i,
        '<div style="margin-bottom:10px;"><a href="fia-laws-explorer.html" style="color:#2563eb; font-weight:700;"><i class="fa-solid fa-building-shield"></i> Explore Official FIA Laws &amp; Schedule (FIA Act, PECA, AMLA)</a></div>\n                $1'
    );
    fs.writeFileSync('frontend/fia-sample-papers.html', fiaPaperContent, 'utf-8');
    console.log('Updated fia-sample-papers.html footer');
}
