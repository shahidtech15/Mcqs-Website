// Validation script to test crossword layouts for 0 collisions
function validatePuzzle(puzzle) {
  const grid = {};
  const { size, words } = puzzle;
  const errors = [];

  words.forEach(w => {
    const { answer, row, col, direction, number } = w;
    const len = answer.length;
    for (let i = 0; i < len; i++) {
      const r = direction === 'across' ? row : row + i;
      const c = direction === 'across' ? col + i : col;
      const char = answer[i].toUpperCase();

      if (r < 0 || r >= size || c < 0 || c >= size) {
        errors.push(`Word ${answer} (${direction}) at (${row},${col}) exceeds grid size ${size} at index ${i} (${r},${c})`);
        continue;
      }

      const key = `${r},${c}`;
      if (grid[key] && grid[key].char !== char) {
        errors.push(`Collision at (${r},${c}): existing '${grid[key].char}' vs '${char}' from word ${answer}`);
      } else {
        grid[key] = { char, word: answer };
      }
    }
  });

  return { valid: errors.length === 0, errors, cellCount: Object.keys(grid).length };
}

console.log("Validator ready");
