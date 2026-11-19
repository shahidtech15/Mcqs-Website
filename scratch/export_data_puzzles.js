const fs = require('fs');
const data = require('./final_crosswords.json');

const jsContent = `/**
 * CSS Prep Central - Crossword & Word Search Data
 * Disciplines: Pakistan Affairs, International Relations, Everyday Science, Law, Geography, Current Affairs
 */

const PUZZLE_VOCABULARY = ${JSON.stringify(data.vocabulary, null, 2)};

const CROSSWORD_PUZZLES = ${JSON.stringify(data.crosswords, null, 2)};

const PUZZLE_DATA = {
  vocabulary: PUZZLE_VOCABULARY,
  crosswords: CROSSWORD_PUZZLES
};

if (typeof window !== 'undefined') {
  window.PUZZLE_DATA = PUZZLE_DATA;
  window.PUZZLE_VOCABULARY = PUZZLE_VOCABULARY;
  window.CROSSWORD_PUZZLES = CROSSWORD_PUZZLES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PUZZLE_DATA;
}
`;

fs.writeFileSync('frontend/js/data_puzzles.js', jsContent, 'utf8');
console.log('Successfully wrote frontend/js/data_puzzles.js');
