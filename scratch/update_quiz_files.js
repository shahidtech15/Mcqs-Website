// scratch/update_quiz_files.js
const fs = require('fs');

// 1. Update frontend/quiz.html
let quizHtml = fs.readFileSync('frontend/quiz.html', 'utf8');

if (!quizHtml.includes('topic-nato.html')) {
    quizHtml = quizHtml.replace(
        '<a href="topic-european-union.html">One-Topic: EU</a>',
        '<a href="topic-european-union.html">One-Topic: EU</a>\n                <a href="topic-nato.html">One-Topic: NATO</a>'
    );
}

if (!quizHtml.includes('js/data_topic_nato.js')) {
    quizHtml = quizHtml.replace(
        '<script src="js/data_topic_eu.js"></script>',
        '<script src="js/data_topic_eu.js"></script>\n    <script src="js/data_topic_nato.js"></script>'
    );
}

fs.writeFileSync('frontend/quiz.html', quizHtml, 'utf8');
console.log('Updated frontend/quiz.html');

// 2. Update frontend/js/quiz.js
let quizJs = fs.readFileSync('frontend/js/quiz.js', 'utf8');

if (!quizJs.includes('natoTopicMcqs')) {
    quizJs = quizJs.replace(
        "const euTopicMcqs = (typeof window !== 'undefined' && window.EU_TOPIC_DATA && Array.isArray(window.EU_TOPIC_DATA.PRACTICE_50_MCQS)) ? window.EU_TOPIC_DATA.PRACTICE_50_MCQS : [];",
        "const euTopicMcqs = (typeof window !== 'undefined' && window.EU_TOPIC_DATA && Array.isArray(window.EU_TOPIC_DATA.PRACTICE_50_MCQS)) ? window.EU_TOPIC_DATA.PRACTICE_50_MCQS : [];\n    const natoTopicMcqs = (typeof window !== 'undefined' && window.NATO_TOPIC_DATA && Array.isArray(window.NATO_TOPIC_DATA.PRACTICE_50_MCQS)) ? window.NATO_TOPIC_DATA.PRACTICE_50_MCQS : [];"
    );

    quizJs = quizJs.replace(
        "normCat.includes('european union') || normCat.includes('eu master')",
        "normCat.includes('european union') || normCat.includes('eu master') || normCat.includes('nato') || normCat.includes('north atlantic')"
    );

    quizJs = quizJs.replace(
        "pool = [...unTopicMcqs, ...euTopicMcqs, ...worldOrgMcqs];",
        "pool = [...unTopicMcqs, ...euTopicMcqs, ...natoTopicMcqs, ...worldOrgMcqs];"
    );
}

fs.writeFileSync('frontend/js/quiz.js', quizJs, 'utf8');
console.log('Updated frontend/js/quiz.js');
