const fs = require('fs');
const path = require('path');
const FIA_AD_LEGAL_QUESTIONS = require('./add_fia_ad_legal_mcqs');

const formatted = FIA_AD_LEGAL_QUESTIONS.map((item, idx) => ({
  _id: `fia_ad_${idx + 1}`,
  questionText: item.q,
  options: {
    A: item.opts[0],
    B: item.opts[1],
    C: item.opts[2],
    D: item.opts[3]
  },
  correctAnswer: item.ans,
  explanation: item.exp,
  category: {
    _id: "cat_fia_ad_legal",
    name: "FIA Assistant Director Legal"
  },
  subCategory: item.subCat,
  difficulty: item.diff
}));

const outPath = path.join(__dirname, 'formatted_fia_ad_legal.json');
fs.writeFileSync(outPath, JSON.stringify(formatted, null, 2), 'utf-8');
console.log(`Saved ${formatted.length} formatted FIA MCQs to ${outPath}`);
