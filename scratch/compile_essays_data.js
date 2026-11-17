// scratch/compile_essays_data.js
const fs = require('fs');
const path = require('path');

const p1 = require('./essays_part1.js');
const p2 = require('./essays_part2.js');
const p3 = require('./essays_part3.js');
const p4 = require('./essays_part4.js');

const allEssays = [...p1, ...p2, ...p3, ...p4];

const outputContent = `// frontend/js/data_css_essays_2021.js
// Authoritative Master Data Module for CSS Competitive Examination 2021 Solved Essays (10 Complete Essays)

const CSS_ESSAYS_2021_DATA = {
    metadata: {
        examination: "FPSC Competitive Examination (CSS) 2021",
        subject: "English Essay",
        timeAllowed: "3 Hours",
        maximumMarks: 100,
        requiredWordCount: "2500 - 3000 Words per Essay",
        totalTopics: 10,
        totalWordCount: ${allEssays.reduce((acc, e) => acc + e.essayText.trim().split(/\s+/).length, 0)},
        criteria: [
            "Formal Outline with Roman numerals and sub-arguments",
            "Unambiguous, nuanced Thesis Statement",
            "Integration of all four discourses: Exposition, Argumentation, Description, and Narration",
            "Empirical evidence, case studies, philosophical rigor, and policy solutions",
            "Flawless academic grammar, transitions, and cohesive structure"
        ]
    },
    essays: ${JSON.stringify(allEssays, null, 2)}
};

// Dual browser / Node.js export support
if (typeof window !== 'undefined') {
    window.CSS_ESSAYS_2021_DATA = CSS_ESSAYS_2021_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CSS_ESSAYS_2021_DATA;
}
`;

fs.writeFileSync(path.join(__dirname, '../frontend/js/data_css_essays_2021.js'), outputContent, 'utf8');
console.log('Successfully wrote frontend/js/data_css_essays_2021.js! Total essays:', allEssays.length);
