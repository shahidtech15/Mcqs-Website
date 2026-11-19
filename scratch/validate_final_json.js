const fs = require('fs');
const data = require('./final_crosswords.json');

console.log("=== Validating All Generated Crosswords ===");
let hasErrors = false;

for (const [key, pz] of Object.entries(data.crosswords)) {
  const grid = {};
  const { size, words } = pz;
  const errors = [];

  words.forEach(w => {
    const { answer, row, col, direction, number } = w;
    for (let i = 0; i < answer.length; i++) {
      const r = direction === 'across' ? row : row + i;
      const c = direction === 'across' ? col + i : col;
      if (r < 0 || r >= size || c < 0 || c >= size) {
        errors.push(`[${key}] Word ${answer} (${direction}) at (${row},${col}) out of bounds at (${r},${c})`);
      }
      const cellKey = `${r},${c}`;
      if (grid[cellKey] && grid[cellKey].char !== answer[i]) {
        errors.push(`[${key}] Collision at (${r},${c}): existing '${grid[cellKey].char}' (${grid[cellKey].word}) vs '${answer[i]}' (${answer})`);
      } else {
        grid[cellKey] = { char: answer[i], word: answer };
      }
    }
  });

  if (errors.length > 0) {
    console.error(`Errors in ${key}:`, errors);
    hasErrors = true;
  } else {
    console.log(`✓ ${key}: Valid! ${words.length} words, ${Object.keys(grid).length} filled cells in ${size}x${size} grid.`);
  }
}

if (!hasErrors) {
  console.log("\nALL CROSSWORD PUZZLES ARE 100% COLLISION-FREE AND VALID!");
} else {
  process.exit(1);
}
