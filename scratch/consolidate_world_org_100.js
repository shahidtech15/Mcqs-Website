const fs = require('fs');

const part1 = JSON.parse(fs.readFileSync('scratch/world_org_part1.json', 'utf8'));
const part2 = JSON.parse(fs.readFileSync('scratch/world_org_part2.json', 'utf8'));

const allQuestions = [...part1, ...part2];
console.log('Total merged questions:', allQuestions.length);

const formattedQuestions = allQuestions.map((q, idx) => {
  const qNum = idx + 1;
  const correctOptText = q.options[q.correctAnswer];
  if (!correctOptText) {
    throw new Error(`Question ${qNum} has invalid correctAnswer: ${q.correctAnswer}`);
  }

  return {
    _id: `world_org_${qNum}`,
    questionId: qNum,
    questionText: q.questionText,
    options: {
      A: q.options.A,
      B: q.options.B,
      C: q.options.C,
      D: q.options.D
    },
    correctAnswer: q.correctAnswer,
    correctAnswerText: correctOptText,
    explanation: q.explanation,
    category: {
      _id: 'cat_world_org',
      name: 'World Organizations'
    },
    subCategory: q.subCategory,
    difficulty: q.difficulty || 'Medium',
    source: 'World Organizations & Global Treaties'
  };
});

// Save to frontend/data/world_organizations_mcqs_100.json
fs.writeFileSync(
  'frontend/data/world_organizations_mcqs_100.json',
  JSON.stringify(formattedQuestions, null, 2),
  'utf8'
);
console.log('Saved to frontend/data/world_organizations_mcqs_100.json');

// Save to frontend/js/data_world_org.js
const jsContent = `/**
 * World Organizations MCQs (100 Questions)
 * Topics: United Nations & Agencies, Regional Alliances & Political Blocs,
 * International Financial & Trade Institutions, Global Treaties & Judicial Bodies.
 */
window.WORLD_ORG_MCQS = ${JSON.stringify(formattedQuestions, null, 2)};
`;

fs.writeFileSync('frontend/js/data_world_org.js', jsContent, 'utf8');
console.log('Saved to frontend/js/data_world_org.js');

// Print breakdown
const subcatCounts = {};
formattedQuestions.forEach(q => {
  subcatCounts[q.subCategory] = (subcatCounts[q.subCategory] || 0) + 1;
});
console.log('Subcategory breakdown:', subcatCounts);
