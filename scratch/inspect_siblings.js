const fs = require('fs');

['ppc-section-finder.html', 'constitution-explorer.html'].forEach(f => {
    const content = fs.readFileSync('frontend/' + f, 'utf-8');
    const lines = content.split('\n');
    console.log(`=== ${f} ===`);
    lines.forEach((l, idx) => {
        if (l.includes('crpc-procedure-flowchart.html') || l.includes('constitution-explorer.html')) {
            console.log(`Line ${idx + 1}: ${l.trim()}`);
        }
    });
});
