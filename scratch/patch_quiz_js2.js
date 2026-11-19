const fs = require('fs');
let code = fs.readFileSync('frontend/js/quiz.js', 'utf8');

const targetStr = "                if (normCat.includes('fia assistant director sample')";
const replacement = "    if (normCat.includes('synonym') || normCat.includes('cat_synonyms')) {\n        pool = [...synMcqs];\n        if (subCat) pool = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCat.toLowerCase());\n    } else if (normCat.includes('antonym') || normCat.includes('cat_antonyms')) {\n        pool = [...antMcqs];\n        if (subCat) pool = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCat.toLowerCase());\n    } else if (normCat.includes('fia assistant director sample')";

if (code.includes(targetStr)) {
  code = code.replace(targetStr, code.includes('\r\n') ? replacement.replace(/\n/g, '\r\n') : replacement);
  console.log('Replaced target with synonym & antonym branches');
  fs.writeFileSync('frontend/js/quiz.js', code, 'utf8');
} else {
  console.log('Target string not found');
}
