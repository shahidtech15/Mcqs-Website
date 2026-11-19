const fs = require('fs');
const path = require('path');

const dlPath = path.join(__dirname, '../frontend/digital-library.html');
let content = fs.readFileSync(dlPath, 'utf8');

// Replace potentially vulnerable .map calls with defensive (x || []).map
content = content.replace(/\$\{r\.keyStats\.map\(/g, '${(r.keyStats || []).map(');
content = content.replace(/\$\{r\.tags\.map\(/g, '${(r.tags || []).map(');
content = content.replace(/\$\{e\.keyPillars\.map\(/g, '${(e.keyPillars || []).map(');
content = content.replace(/\$\{e\.vocabulary\.map\(/g, '${(e.vocabulary || []).map(');
content = content.replace(/\$\{e\.examQuestions\.map\(/g, '${(e.examQuestions || []).map(');
content = content.replace(/\$\{e\.tags\.map\(/g, '${(e.tags || []).map(');
content = content.replace(/\$\{t\.keyProvisions\.map\(/g, '${(t.keyProvisions || []).map(');
content = content.replace(/\$\{t\.tags\.map\(/g, '${(t.tags || []).map(');
content = content.replace(/\$\{m\.strategicSignificance\.map\(/g, '${(m.strategicSignificance || []).map(');
content = content.replace(/\$\{m\.relatedQuestions\.map\(/g, '${(m.relatedQuestions || []).map(');
content = content.replace(/\$\{n\.coreThemes\.map\(/g, '${(n.coreThemes || []).map(');
content = content.replace(/\$\{s\.structure\.map\(/g, '${(s.structure || []).map(');
content = content.replace(/\$\{s\.keyArguments\.map\(/g, '${(s.keyArguments || []).map(');
content = content.replace(/\$\{p\.tags\.map\(/g, '${(p.tags || []).map(');

fs.writeFileSync(dlPath, content, 'utf8');
console.log('Successfully added defensive rendering to digital-library.html!');
