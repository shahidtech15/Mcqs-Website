const fs = require('fs');
const path = require('path');

const quizPath = path.join(__dirname, '..', 'frontend', 'quiz.html');
let content = fs.readFileSync(quizPath, 'utf8');

// Replace title & add description
content = content.replace(
  /<title>Take a Quiz \| MCQs Portal<\/title>/,
  `<title>Take a Quiz & Mock Test Simulator | CSS Prep Central & MCQs Portal</title>\n    <meta name="description" content="Take timed competitive exam quizzes, practice tests, and simulated mocks for CSS, PMS, FPSC, SPSC, and academic subjects. Instant scoring, accuracy analytics, and verified answer explanations.">\n    <link rel="canonical" href="https://cssprepcentral.com/quiz.html">`
);

// Add h1 to quiz setup
content = content.replace(
  /<h2><i class="fa-solid fa-sliders"><\/i> Configure Your Test<\/h2>/,
  `<h1 style="font-size: 1.8rem; margin-bottom: 8px;"><i class="fa-solid fa-sliders"></i> Interactive Quiz & Mock Test Simulator</h1>\n            <h2 style="font-size: 1.2rem; font-weight: 500; color: inherit; margin-top: 0;">Configure Your Test Session</h2>`
);

fs.writeFileSync(quizPath, content, 'utf8');
console.log('Successfully updated quiz.html for SEO and semantic H1.');
