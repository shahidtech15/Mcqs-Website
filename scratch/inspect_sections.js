const fs = require('fs');
const content = fs.readFileSync('frontend/admin.html', 'utf8');

const sections = [
    'manageQuestions', 'addQuestion', 'manageNotes', 'manageArticles',
    'manageJobs', 'manageScheduler', 'manageCategories', 'pageAnalytics',
    'studentAnalytics', 'manageReports', 'editQuestionModal'
];

sections.forEach(secId => {
    const reg = new RegExp(`<[^>]+id="${secId}"[\\s\\S]*?<\\/(section|div)>`);
    const match = content.match(reg);
    if (match) {
        console.log(`=== ${secId} ===`);
        const inputs = [...match[0].matchAll(/<(input|select|textarea|form|tbody)[^>]*id="([^"]+)"[^>]*>/g)].map(m => `<${m[1]} id="${m[2]}">`);
        console.log(inputs.join(', '));
    }
});
