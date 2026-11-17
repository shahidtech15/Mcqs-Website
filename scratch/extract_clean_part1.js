const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, 'essays_2026_part1.js'), 'utf8');

// The original file had 3 objects in an array.
// Let's find:
// topicNumber: 1
// topicNumber: 2
// topicNumber: 3
// In each topic:
// title, category, difficulty, thesisStatement, discoursesUsed, outline, essayText

// Let's find index of topicNumber: 1, 2, 3
const idx1 = content.indexOf('topicNumber: 1');
const idx2 = content.indexOf('topicNumber: 2');
const idx3 = content.indexOf('topicNumber: 3');

console.log('Indices:', idx1, idx2, idx3);

function parseTopicBlock(blockText, topicNum) {
  // Title
  const titleMatch = blockText.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';

  // Category
  const catMatch = blockText.match(/category:\s*"([^"]+)"/);
  const category = catMatch ? catMatch[1] : '';

  // Difficulty
  const diffMatch = blockText.match(/difficulty:\s*"([^"]+)"/);
  const difficulty = diffMatch ? diffMatch[1] : '';

  // Thesis statement
  const thesisMatch = blockText.match(/thesisStatement:\s*"([^"]+)"/);
  const thesisStatement = thesisMatch ? thesisMatch[1] : '';

  // discoursesUsed
  const narrationMatch = blockText.match(/narration:\s*"([^"]+)"/);
  const expositionMatch = blockText.match(/exposition:\s*"([^"]+)"/);
  const argumentationMatch = blockText.match(/argumentation:\s*"([^"]+)"/);
  const descriptionMatch = blockText.match(/description:\s*"([^"]+)"/);

  // outline
  const outlineStart = blockText.indexOf('outline: [');
  const outlineEnd = blockText.indexOf('],', outlineStart);
  let outline = [];
  if (outlineStart !== -1 && outlineEnd !== -1) {
    const rawOutline = blockText.substring(outlineStart + 10, outlineEnd);
    const outlineLines = rawOutline.split('\n');
    for (let l of outlineLines) {
      const m = l.match(/"([^"]+)"/);
      if (m) outline.push(m[1]);
    }
  }

  // essayText starts after essayText: ` or essayText: '
  const essayTextMatch = blockText.match(/essayText:\s*[`']([\s\S]*)/);
  let essayText = '';
  if (essayTextMatch) {
    essayText = essayTextMatch[1].trim();
    // Remove trailing ` or ' and closing bracket
    if (essayText.endsWith('`') || essayText.endsWith("'")) {
      essayText = essayText.slice(0, -1);
    }
  }

  return {
    topicNumber: topicNum,
    title,
    category,
    difficulty,
    thesisStatement,
    discoursesUsed: {
      narration: narrationMatch ? narrationMatch[1] : '',
      exposition: expositionMatch ? expositionMatch[1] : '',
      argumentation: argumentationMatch ? argumentationMatch[1] : '',
      description: descriptionMatch ? descriptionMatch[1] : ''
    },
    outline,
    essayText
  };
}

const block1 = content.substring(idx1, idx2);
const block2 = content.substring(idx2, idx3);
const block3 = content.substring(idx3);

const t1 = parseTopicBlock(block1, 1);
const t2 = parseTopicBlock(block2, 2);
const t3 = parseTopicBlock(block3, 3);

// Clean trailing syntax on t3 if any
t3.essayText = t3.essayText.replace(/\s*[`']\s*}\s*\];?$/, '');
t2.essayText = t2.essayText.replace(/\s*[`']\s*}\s*,?$/, '');
t1.essayText = t1.essayText.replace(/\s*[`']\s*}\s*,?$/, '');

console.log('T1 title:', t1.title, 'Outline count:', t1.outline.length, 'Text words:', t1.essayText.split(/\s+/).length);
console.log('T2 title:', t2.title, 'Outline count:', t2.outline.length, 'Text words:', t2.essayText.split(/\s+/).length);
console.log('T3 title:', t3.title, 'Outline count:', t3.outline.length, 'Text words:', t3.essayText.split(/\s+/).length);

fs.writeFileSync(path.join(__dirname, 'essays_2026', 'topic_1.json'), JSON.stringify(t1, null, 2), 'utf8');
fs.writeFileSync(path.join(__dirname, 'essays_2026', 'topic_2.json'), JSON.stringify(t2, null, 2), 'utf8');
fs.writeFileSync(path.join(__dirname, 'essays_2026', 'topic_3.json'), JSON.stringify(t3, null, 2), 'utf8');

console.log('Successfully saved Topics 1, 2, and 3 as clean JSON files!');
