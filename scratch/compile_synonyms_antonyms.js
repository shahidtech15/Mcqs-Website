const fs = require('fs');
const path = require('path');

console.log('Loading raw vocabulary parts 1-17...');
const rawLines = [];
for (let i = 1; i <= 17; i++) {
  const file = path.join(__dirname, `vocab_raw_part${i}.js`);
  if (fs.existsSync(file)) {
    const data = require(file);
    data.forEach(line => rawLines.push(line));
  }
}

console.log(`Total raw entries loaded: ${rawLines.length}`);

// Deduplicate words
const wordMap = new Map();
rawLines.forEach(line => {
  const parts = line.split('|').map(s => s.trim());
  if (parts.length >= 7) {
    const [word, pos, synsStr, antsStr, meaning, example, diff] = parts;
    const cleanWord = word.toUpperCase();
    if (!wordMap.has(cleanWord)) {
      const syns = synsStr.split(',').map(s => s.trim()).filter(Boolean);
      const ants = antsStr.split(',').map(s => s.trim()).filter(Boolean);
      if (syns.length >= 1 && ants.length >= 1 && meaning && example) {
        wordMap.set(cleanWord, {
          word: cleanWord,
          pos: pos || 'adj',
          synonyms: syns,
          antonyms: ants,
          meaning: meaning,
          example: example,
          difficulty: diff || 'Medium'
        });
      }
    }
  }
});

console.log(`Unique validated words: ${wordMap.size}`);

if (wordMap.size < 2000) {
  console.error(`ERROR: Need at least 2000 unique words, found ${wordMap.size}`);
  process.exit(1);
}

// Slice exactly 2000 words
const vocabList = Array.from(wordMap.values()).slice(0, 2000);
console.log(`Selected exactly ${vocabList.length} words for the master dataset.`);

// Collect pool of words for robust distractor generation
const allSynonymsPool = [];
const allAntonymsPool = [];
const allWordsPool = [];

vocabList.forEach(item => {
  allWordsPool.push(item.word.toLowerCase());
  item.synonyms.forEach(s => allSynonymsPool.push(s.toLowerCase()));
  item.antonyms.forEach(a => allAntonymsPool.push(a.toLowerCase()));
});

// Deterministic pseudo-random distractor selector
function getDistractors(correctAnswer, invalidPool, generalPool, seed) {
  const invalidSet = new Set(invalidPool.map(w => w.toLowerCase()));
  invalidSet.add(correctAnswer.toLowerCase());

  const distractors = [];
  let s = Math.abs(seed);
  let attempts = 0;
  
  while (distractors.length < 3 && attempts < 500) {
    attempts++;
    s = (s * 9301 + 49297) % 233280;
    const idx = Math.floor((s / 233280) * generalPool.length);
    const candidate = generalPool[idx];
    
    if (
      candidate &&
      !invalidSet.has(candidate.toLowerCase()) &&
      !distractors.includes(candidate) &&
      candidate.length > 2 &&
      candidate.toLowerCase() !== correctAnswer.toLowerCase()
    ) {
      distractors.push(candidate);
      invalidSet.add(candidate.toLowerCase());
    }
  }

  // Fallback if needed
  const fallbackList = ['moderate', 'temporary', 'substantial', 'deliberate', 'ordinary', 'conventional', 'abundant', 'remarkable'];
  for (const fb of fallbackList) {
    if (distractors.length >= 3) break;
    if (!invalidSet.has(fb.toLowerCase()) && !distractors.includes(fb)) {
      distractors.push(fb);
    }
  }

  return distractors.slice(0, 3);
}

console.log('Generating 2,000 Synonym MCQs...');
const synonymMCQs = [];
const letters = ['A', 'B', 'C', 'D'];

vocabList.forEach((item, idx) => {
  const idNum = idx + 1;
  const word = item.word;
  const correctAnswer = item.synonyms[0]; // primary synonym
  
  // Distractors must not be any of the word's synonyms, nor the word itself
  const invalidPool = [...item.synonyms, item.word];
  // Antonyms of the word are prime distractors, supplemented by general pool
  const candidatePool = [...item.antonyms, ...allAntonymsPool, ...allWordsPool];
  
  const distractors = getDistractors(correctAnswer, invalidPool, candidatePool, idx * 37 + 11);
  
  // Balance correct answer position: 0 -> A, 1 -> B, 2 -> C, 3 -> D
  const correctPos = idx % 4;
  const optList = [];
  let dIdx = 0;
  for (let pos = 0; pos < 4; pos++) {
    if (pos === correctPos) {
      optList.push(correctAnswer);
    } else {
      optList.push(distractors[dIdx++]);
    }
  }

  const optionsObj = {
    A: optList[0],
    B: optList[1],
    C: optList[2],
    D: optList[3]
  };

  const questionString = `What is the SYNONYM of "${word}"?`;

  synonymMCQs.push({
    _id: `syn_${idNum}`,
    id: `syn_${idNum}`,
    questionText: questionString,
    question: questionString,
    options: optionsObj,
    optionsList: optList,
    correctAnswer: letters[correctPos],
    answer: correctPos,
    correctLetter: letters[correctPos],
    explanation: `"${word}" (${item.pos}) means: ${item.meaning}. Primary synonyms: ${item.synonyms.join(', ')}. Antonyms: ${item.antonyms.join(', ')}. Example: "${item.example}".`,
    category: { _id: 'cat_synonyms', name: 'English Synonyms' },
    subCategory: 'Synonyms',
    difficulty: item.difficulty,
    word: word,
    pos: item.pos
  });
});

console.log('Generating 2,000 Antonym MCQs...');
const antonymMCQs = [];

vocabList.forEach((item, idx) => {
  const idNum = idx + 1;
  const word = item.word;
  const correctAnswer = item.antonyms[0]; // primary antonym
  
  // Distractors must not be any of the word's antonyms, nor the word itself
  const invalidPool = [...item.antonyms, item.word];
  // Synonyms of the word are prime distractors, supplemented by general pool
  const candidatePool = [...item.synonyms, ...allSynonymsPool, ...allWordsPool];
  
  const distractors = getDistractors(correctAnswer, invalidPool, candidatePool, idx * 53 + 19);
  
  // Balance correct answer position: 0 -> A, 1 -> B, 2 -> C, 3 -> D
  // Offset by 1 so antonym of same word has different position than synonym
  const correctPos = (idx + 1) % 4;
  const optList = [];
  let dIdx = 0;
  for (let pos = 0; pos < 4; pos++) {
    if (pos === correctPos) {
      optList.push(correctAnswer);
    } else {
      optList.push(distractors[dIdx++]);
    }
  }

  const optionsObj = {
    A: optList[0],
    B: optList[1],
    C: optList[2],
    D: optList[3]
  };

  const questionString = `What is the ANTONYM of "${word}"?`;

  antonymMCQs.push({
    _id: `ant_${idNum}`,
    id: `ant_${idNum}`,
    questionText: questionString,
    question: questionString,
    options: optionsObj,
    optionsList: optList,
    correctAnswer: letters[correctPos],
    answer: correctPos,
    correctLetter: letters[correctPos],
    explanation: `"${word}" (${item.pos}) means: ${item.meaning}. Primary antonyms: ${item.antonyms.join(', ')}. Synonyms: ${item.synonyms.join(', ')}. Example: "${item.example}".`,
    category: { _id: 'cat_antonyms', name: 'English Antonyms' },
    subCategory: 'Antonyms',
    difficulty: item.difficulty,
    word: word,
    pos: item.pos
  });
});

console.log(`Generated ${synonymMCQs.length} Synonym MCQs and ${antonymMCQs.length} Antonym MCQs.`);

// Verify distribution
const synDist = [0, 0, 0, 0];
synonymMCQs.forEach(q => synDist[q.answer]++);
console.log('Synonym Answer Distribution (A, B, C, D):', synDist);

const antDist = [0, 0, 0, 0];
antonymMCQs.forEach(q => antDist[q.answer]++);
console.log('Antonym Answer Distribution (A, B, C, D):', antDist);

// Write to frontend/js/data_synonyms_antonyms.js
const targetFile = path.join(__dirname, '..', 'frontend', 'js', 'data_synonyms_antonyms.js');
console.log(`Writing master dataset to ${targetFile}...`);

const fileContent = `/**
 * Master Vocabulary, Synonyms & Antonyms Dataset
 * CSS / PMS / FPSC / PPSC / NTS / GRE High-Yield Preparation Bank
 * Total: 2,000 Headwords, 2,000 Synonym MCQs, 2,000 Antonym MCQs (4,000 MCQs total)
 */

(function (root, factory) {
  var data = factory();
  if (typeof window !== 'undefined') {
    window.VOCABULARY_2000 = data.VOCABULARY_2000;
    window.SYNONYMS_MCQS = data.SYNONYMS_MCQS;
    window.ANTONYMS_MCQS = data.ANTONYMS_MCQS;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = data;
  }
})(this, function () {
  var VOCABULARY_2000 = ${JSON.stringify(vocabList, null, 2)};
  var SYNONYMS_MCQS = ${JSON.stringify(synonymMCQs, null, 2)};
  var ANTONYMS_MCQS = ${JSON.stringify(antonymMCQs, null, 2)};

  return {
    VOCABULARY_2000: VOCABULARY_2000,
    SYNONYMS_MCQS: SYNONYMS_MCQS,
    ANTONYMS_MCQS: ANTONYMS_MCQS
  };
});
`;

fs.writeFileSync(targetFile, fileContent, 'utf8');
const stats = fs.statSync(targetFile);
console.log(`Successfully compiled! File size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes).`);
