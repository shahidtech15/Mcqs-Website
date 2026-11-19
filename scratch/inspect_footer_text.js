const fs = require('fs');

['identify-legal-provision.html', 'crpc-procedure-flowchart.html'].forEach(f => {
    let content = fs.readFileSync('frontend/' + f, 'utf-8');
    const idx = content.indexOf('<footer');
    if (idx !== -1) {
        console.log(`=== ${f} Footer ===`);
        console.log(content.slice(idx, idx + 800));
    }
});
