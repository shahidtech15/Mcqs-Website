const fs = require('fs');
const path = require('path');

const quizJsPath = path.join(__dirname, '../frontend/js/quiz.js');
let quizJs = fs.readFileSync(quizJsPath, 'utf8');

const targetStr = `    document.getElementById('resScore').innerText = \`\${data.score} / \${data.totalQuestions}\`;
    document.getElementById('resPercentage').innerText = \`\${data.percentage}%\`;
    document.getElementById('resTime').innerText = formatTime(data.timeTaken);`;

const hookStr = `    document.getElementById('resScore').innerText = \`\${data.score} / \${data.totalQuestions}\`;
    document.getElementById('resPercentage').innerText = \`\${data.percentage}%\`;
    document.getElementById('resTime').innerText = formatTime(data.timeTaken);

    // Auto-record result into Personalized Learning Dashboard
    if (window.LEARNING_DASHBOARD && typeof window.LEARNING_DASHBOARD.recordQuizResult === 'function') {
        try {
            const activeTitleEl = document.getElementById('activeQuizTitle');
            const testTitle = (activeTitleEl && activeTitleEl.innerText.trim()) ? activeTitleEl.innerText.trim() : 'Competitive Exam Mock Test';
            const catName = testTitle.includes('-') ? testTitle.split('-')[0].trim() : testTitle;
            window.LEARNING_DASHBOARD.recordQuizResult({
                testName: testTitle,
                categoryName: catName,
                totalQuestions: data.totalQuestions || (data.gradedResults ? data.gradedResults.length : 50),
                score: data.score,
                correctCount: data.correctCount,
                wrongCount: data.wrongCount,
                unattemptedCount: data.unattemptedCount,
                timeSpent: typeof formatTime === 'function' ? formatTime(data.timeTaken) : '25 mins'
            });
            console.log('Quiz result successfully recorded to Learning Dashboard.');
        } catch (e) {
            console.warn('Could not record quiz result to Learning Dashboard:', e);
        }
    }`;

if (quizJs.includes(targetStr)) {
    quizJs = quizJs.replace(targetStr, hookStr);
    fs.writeFileSync(quizJsPath, quizJs, 'utf8');
    console.log('Successfully hooked LEARNING_DASHBOARD into frontend/js/quiz.js');
} else {
    console.error('Target string not found in frontend/js/quiz.js');
}

// Update frontend/quiz.html to load data_learning_dashboard.js
const quizHtmlPath = path.join(__dirname, '../frontend/quiz.html');
let quizHtml = fs.readFileSync(quizHtmlPath, 'utf8');

if (!quizHtml.includes('js/data_learning_dashboard.js')) {
    const scriptTarget = '<script src="js/quiz.js"></script>';
    const replacement = '<script src="js/data_learning_dashboard.js"></script>\n    <script src="js/quiz.js"></script>';
    if (quizHtml.includes(scriptTarget)) {
        quizHtml = quizHtml.replace(scriptTarget, replacement);
        fs.writeFileSync(quizHtmlPath, quizHtml, 'utf8');
        console.log('Successfully added data_learning_dashboard.js to frontend/quiz.html');
    } else {
        console.error('Script target not found in frontend/quiz.html');
    }
} else {
    console.log('data_learning_dashboard.js already present in frontend/quiz.html');
}
