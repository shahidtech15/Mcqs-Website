const fs = require('fs');

const files = [
    'global-security-conflict-essays.html',
    'international-relations-essays.html',
    'geoeconomics-finance-essays.html'
];

files.forEach(f => {
    const content = fs.readFileSync('frontend/' + f, 'utf8');
    const matches = [...content.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
    console.log(f + ':');
    console.log(matches.slice(0, 20));
});
