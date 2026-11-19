const fs = require('fs');
const html = fs.readFileSync('frontend/index.html', 'utf8');

console.log('Includes data_exam_guides.js:', html.includes('data_exam_guides.js'));
console.log('Includes exam-preparation-guide section:', html.includes('id="exam-preparation-guide"'));
console.log('Includes examTabsNav:', html.includes('id="examTabsNav"'));
console.log('Includes examCardContainer:', html.includes('id="examCardContainer"'));
console.log('Includes exam-guide.html links:', html.includes('href="exam-guide.html"'));

const app = fs.readFileSync('frontend/js/app.js', 'utf8');
console.log('app.js includes initExamGuideSection:', app.includes('function initExamGuideSection()'));
console.log('app.js calls initExamGuideSection:', app.includes('initExamGuideSection();'));

const guides = fs.readFileSync('frontend/js/data_exam_guides.js', 'utf8');
console.log('data_exam_guides.js length:', guides.length);
