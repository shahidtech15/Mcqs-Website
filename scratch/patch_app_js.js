const fs = require('fs');
let code = fs.readFileSync('frontend/js/app.js', 'utf8');

const insertCat = `  { _id: 'cat_synonyms', name: 'English Synonyms', description: '2,000 High-Yield Synonym MCQs with complete academic definitions, parts of speech, and contextual example sentences for CSS, PMS, FPSC, PPSC, NTS, and GRE exams.', icon: 'fa-spell-check', questionCount: 2000, subcategoriesCount: 4 },
  { _id: 'cat_antonyms', name: 'English Antonyms', description: '2,000 High-Yield Antonym MCQs with contrasting words, comprehensive explanations, and illustrative sentences targeting competitive examinations.', icon: 'fa-arrows-split-up-and-left', questionCount: 2000, subcategoriesCount: 4 },
`;

if (!code.includes('cat_synonyms')) {
  if (code.includes('const FALLBACK_CATEGORIES = [\r\n')) {
    code = code.replace('const FALLBACK_CATEGORIES = [\r\n', 'const FALLBACK_CATEGORIES = [\r\n' + insertCat.replace(/\n/g, '\r\n'));
    console.log('Added categories to app.js (CRLF)');
  } else if (code.includes('const FALLBACK_CATEGORIES = [\n')) {
    code = code.replace('const FALLBACK_CATEGORIES = [\n', 'const FALLBACK_CATEGORIES = [\n' + insertCat);
    console.log('Added categories to app.js (LF)');
  }
}

const insertSubcats = `  "English Synonyms": [
    "CSS / PMS High-Yield Synonyms",
    "FPSC / PPSC Exam Synonyms",
    "GRE & Advanced Synonyms",
    "Foundational & Everyday Synonyms"
  ],
  "English Antonyms": [
    "CSS / PMS High-Yield Antonyms",
    "FPSC / PPSC Exam Antonyms",
    "GRE & Advanced Antonyms",
    "Foundational & Everyday Antonyms"
  ],
`;

if (!code.includes('"English Synonyms":')) {
  if (code.includes('const KNOWN_SUBCATEGORIES = {\r\n')) {
    code = code.replace('const KNOWN_SUBCATEGORIES = {\r\n', 'const KNOWN_SUBCATEGORIES = {\r\n' + insertSubcats.replace(/\n/g, '\r\n'));
    console.log('Added KNOWN_SUBCATEGORIES to app.js (CRLF)');
  } else if (code.includes('const KNOWN_SUBCATEGORIES = {\n')) {
    code = code.replace('const KNOWN_SUBCATEGORIES = {\n', 'const KNOWN_SUBCATEGORIES = {\n' + insertSubcats);
    console.log('Added KNOWN_SUBCATEGORIES to app.js (LF)');
  }
}

fs.writeFileSync('frontend/js/app.js', code, 'utf8');
console.log('frontend/js/app.js updated successfully!');
