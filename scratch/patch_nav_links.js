const fs = require('fs');
const path = require('path');

const targetFiles = [
    'digital-library.html',
    'timeline.html',
    'quiz.html',
    'acts-rules.html',
    'dashboard.html',
    'leaderboard.html',
    'ai-assistant.html',
    'editorial-explainer.html',
    'world-map.html',
    'admin.html'
];

let updatedCount = 0;

targetFiles.forEach(file => {
    const fullPath = path.join(__dirname, '../frontend', file);
    if (!fs.existsSync(fullPath)) return;

    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('topic-united-nations.html')) return; // already has it

    // Replace in nav-links
    if (content.includes('<a href="articles.html">Articles</a>')) {
        content = content.replace(
            '<a href="articles.html">Articles</a>',
            '<a href="articles.html">Articles</a>\n                <a href="topic-united-nations.html">One-Topic: UN</a>'
        );
        fs.writeFileSync(fullPath, content, 'utf8');
        updatedCount++;
        console.log('Updated nav in ' + file);
    } else if (content.includes('<a href="articles.html" class="active">Articles</a>')) {
        content = content.replace(
            '<a href="articles.html" class="active">Articles</a>',
            '<a href="articles.html" class="active">Articles</a>\n                <a href="topic-united-nations.html">One-Topic: UN</a>'
        );
        fs.writeFileSync(fullPath, content, 'utf8');
        updatedCount++;
        console.log('Updated nav in ' + file);
    }
});

console.log('Total files patched with UN link:', updatedCount);
