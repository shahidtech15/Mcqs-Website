const fs = require('fs');

const files = [
    'global-security-conflict-essays.html',
    'international-relations-essays.html',
    'geoeconomics-finance-essays.html'
];

files.forEach(f => {
    const content = fs.readFileSync('frontend/' + f, 'utf8');
    console.log('\n=== ' + f + ' ===');
    const topicMatches = [...content.matchAll(/id="(topic-\d+)"[^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/g)];
    topicMatches.forEach(m => {
        console.log(m[1] + ': ' + m[2].replace(/<[^>]+>/g, '').trim());
    });
});
