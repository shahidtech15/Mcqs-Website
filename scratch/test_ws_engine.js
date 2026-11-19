const pz = require('../frontend/js/data_puzzles.js');

console.log("=== Testing Word Search Generation Logic ===");

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function testGenerate(cat, gridSize = 12, targetCount = 8) {
  let pool = [];
  if (cat === 'all') {
    Object.values(pz.vocabulary).forEach(list => pool = pool.concat(list));
  } else {
    pool = pz.vocabulary[cat] || [];
  }

  const validPool = pool.filter(w => w.answer.length <= gridSize);
  const shuffled = shuffle(validPool);

  const dirs = [
    { dr: 0, dc: 1 },
    { dr: 1, dc: 0 },
    { dr: 1, dc: 1 },
    { dr: 1, dc: -1 }
  ];

  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
  const placed = [];

  for (let w = 0; w < shuffled.length && placed.length < targetCount; w++) {
    const wordObj = shuffled[w];
    const word = wordObj.answer;
    
    // Attempt placement
    let fits = false;
    for (let a = 0; a < 150; a++) {
      const dir = dirs[Math.floor(Math.random() * dirs.length)];
      const r = Math.floor(Math.random() * gridSize);
      const c = Math.floor(Math.random() * gridSize);
      const endR = r + dir.dr * (word.length - 1);
      const endC = c + dir.dc * (word.length - 1);
      if (endR < 0 || endR >= gridSize || endC < 0 || endC >= gridSize) continue;

      let canPlace = true;
      const cells = [];
      for (let i = 0; i < word.length; i++) {
        const cr = r + dir.dr * i;
        const cc = c + dir.dc * i;
        if (grid[cr][cc] && grid[cr][cc] !== word[i]) {
          canPlace = false;
          break;
        }
        cells.push({ r: cr, c: cc });
      }

      if (canPlace) {
        cells.forEach((pt, i) => grid[pt.r][pt.c] = word[i]);
        placed.push({ word, cells });
        fits = true;
        break;
      }
    }
  }

  return { placedCount: placed.length, targetCount, success: placed.length >= targetCount - 1 };
}

['all', 'pakistan_affairs', 'international_relations', 'science', 'law', 'geography', 'current_affairs'].forEach(c => {
  const res = testGenerate(c, 12, 8);
  console.log(`- ${c}: Placed ${res.placedCount}/${res.targetCount} words -> ${res.success ? 'PASS' : 'WARN'}`);
});
