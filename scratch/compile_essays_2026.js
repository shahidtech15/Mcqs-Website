const fs = require('fs');
const path = require('path');

const essaysDir = path.join(__dirname, 'essays_2026');

function parseMarkdownTopic(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parts = raw.split('---');
  if (parts.length < 3) {
    throw new Error('Invalid frontmatter in ' + filePath);
  }
  const frontmatter = parts[1];
  const essayText = parts.slice(2).join('---').trim();

  // Parse frontmatter line by line
  const lines = frontmatter.split('\n');
  let topicNumber = 0;
  let title = '';
  let category = '';
  let difficulty = '';
  let thesisStatement = '';
  let narration = '';
  let exposition = '';
  let argumentation = '';
  let description = '';
  let outline = [];

  let currentKey = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('topicNumber:')) {
      topicNumber = parseInt(line.replace('topicNumber:', '').trim(), 10);
      currentKey = 'topicNumber';
    } else if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'title';
    } else if (line.startsWith('category:')) {
      category = line.replace('category:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'category';
    } else if (line.startsWith('difficulty:')) {
      difficulty = line.replace('difficulty:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'difficulty';
    } else if (line.startsWith('thesisStatement:')) {
      thesisStatement = line.replace('thesisStatement:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'thesisStatement';
    } else if (line.startsWith('narration:')) {
      narration = line.replace('narration:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'narration';
    } else if (line.startsWith('exposition:')) {
      exposition = line.replace('exposition:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'exposition';
    } else if (line.startsWith('argumentation:')) {
      argumentation = line.replace('argumentation:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'argumentation';
    } else if (line.startsWith('description:')) {
      description = line.replace('description:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'description';
    } else if (line.startsWith('outline:')) {
      currentKey = 'outline';
    } else if (currentKey === 'outline' && line.trim().startsWith('-')) {
      const item = line.trim().replace(/^-\s*["']?|["']?$/g, '');
      outline.push(item);
    }
  }

  return {
    topicNumber,
    title,
    category,
    difficulty,
    thesisStatement,
    discoursesUsed: {
      narration,
      exposition,
      argumentation,
      description
    },
    outline,
    essayText
  };
}

const allEssays = [];

// Topics 1, 2, 3
for (let q = 1; q <= 3; q++) {
  const jsonPath = path.join(essaysDir, `topic_${q}.json`);
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  allEssays.push(data);
}

// Topics 4 to 10
for (let q = 4; q <= 10; q++) {
  const mdPath = path.join(essaysDir, `topic_${q}.md`);
  const data = parseMarkdownTopic(mdPath);
  allEssays.push(data);
}

console.log('Total compiled essays:', allEssays.length);
allEssays.forEach(e => {
  const wc = e.essayText.split(/\s+/).filter(Boolean).length;
  console.log(`Q${e.topicNumber}: "${e.title}" | Words: ${wc} | Outline: ${e.outline.length} pts`);
});

const outJsPath = path.join(__dirname, '..', 'frontend', 'js', 'data_css_essays_2026.js');
const jsContent = `/**
 * CSS Competitive Examination 2026 - Master Solved Essays Data File
 * Federal Public Service Commission (FPSC)
 * Complete Solved Model Essays for All 10 Topics (2,500 - 3,500 words each)
 * Formats of Discourse: Exposition, Argumentation, Description, Narration
 */

const CSS_ESSAYS_2026_DATA = ${JSON.stringify(allEssays, null, 2)};

if (typeof window !== 'undefined') {
  window.CSS_ESSAYS_2026_DATA = CSS_ESSAYS_2026_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CSS_ESSAYS_2026_DATA;
}
`;

fs.writeFileSync(outJsPath, jsContent, 'utf8');
console.log('Saved to frontend/js/data_css_essays_2026.js! Size:', fs.statSync(outJsPath).size, 'bytes');
