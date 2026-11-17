const fs = require('fs');
const content = fs.readFileSync('frontend/admin.html', 'utf8');
const sectionMatches = [...content.matchAll(/<div[^>]*class=["']([^"']*)["'][^>]*id=["']([^"']+)["']/g)];
for (const m of sectionMatches) {
    if (['dashboard', 'manageQuestions', 'addQuestion', 'bulkUpload', 'manageNotes', 'manageArticles', 'manageJobs', 'manageScheduler', 'manageCategories', 'pageAnalytics', 'studentAnalytics', 'manageReports'].includes(m[2])) {
        console.log(`id="${m[2]}", class="${m[1]}"`);
    }
}
