const fs = require('fs');
const path = require('path');

// Clean up HTML tags in frontend/essay-russia-ukraine-war.html
const htmlPath = path.join(__dirname, '..', 'frontend', 'essay-russia-ukraine-war.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Fix any '#<h3>' or residual markdown symbols
html = html.replace(/#<h3>/g, '<h4>').replace(/<\/h3>/g, '</h3>');
html = html.replace(/#<h4>/g, '<h4>');
html = html.replace(/---<\/p><p>/g, '<hr style="border:none; border-top: 1px solid var(--essay-border); margin: 30px 0;">');
html = html.replace(/---<br>/g, '<hr style="border:none; border-top: 1px solid var(--essay-border); margin: 30px 0;">');

// Add thesis callout box styling
html = html.replace(
    /<p><strong>Thesis Statement:<\/strong> (.*?)<\/p>/,
    '<div class="thesis-statement-box"><strong><i class="fas fa-bullseye" style="color:#f59e0b;"></i> Thesis Statement:</strong> $1</div>'
);

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Cleaned up HTML in frontend/essay-russia-ukraine-war.html');
