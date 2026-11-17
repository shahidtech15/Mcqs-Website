const fs = require('fs');
const path = require('path');

const tricksFilePath = path.join(__dirname, '..', 'frontend', 'js', 'data_math_tricks.js');
const data = require(tricksFilePath);

// 1. Add Age Cross-Multiplication & Invariance to Ratio module
const ratioMod = data.modules.find(m => m.id === 'ratio');
if (ratioMod) {
  const hasAgeRule = ratioMod.rules.some(r => r.name && r.name.includes('Age Problem'));
  if (!hasAgeRule) {
    ratioMod.rules.push({
      name: "BrainyBull Age Problem Shortcut: Ratio Cross-Multiplication",
      rule: "Solve any past/future age problem in 5 seconds without setting up simultaneous algebraic equations (x and y).",
      formula: "1 Unit Value = [Years Shifted × |c - d|] / |a×d - b×c|",
      example: "Present age ratio of Father:Son is 5:2. After 5 years, ratio becomes 2:1. Find Father's age. Ratio 1 (5:2), Ratio 2 (2:1), t=5. Denom = |5(1)-2(2)| = 1. Numerator = 5 × |2-1| = 5. Unit = 5/1 = 5. Father = 5×5 = 25 years; Son = 2×5 = 10 years.",
      tip: "Age Difference Invariance Law: The difference between two persons' ages never changes with time. If ratio difference is unequal, multiply each ratio by the other's difference to balance units instantly."
    });
  }
}

// 2. Add Prime Divisibility Oscillators to Division module
const divMod = data.modules.find(m => m.id === 'division');
if (divMod) {
  const hasOscillator = divMod.rules.some(r => r.name && r.name.includes('Oscillator'));
  if (!hasOscillator) {
    divMod.rules.push({
      name: "Universal Prime Divisibility via Oscillators (7, 13, 17, 19, 29)",
      rule: "Test divisibility for tricky prime numbers instantly using positive and negative single-digit multipliers on the last digit.",
      formula: "N' = Remaining Number ± (Last Digit × Oscillator)",
      example: "Is 2964 divisible by 13? (Oscillator for 13 is +4). Drop 4: 296 + (4×4) = 312. Drop 2: 31 + (2×4) = 39. Since 39 is 13×3, YES! For 7 (Oscillator -2): 343 -> 34 - (3×2) = 28 (YES). For 17 (Oscillator -5): 1904 -> 190 - (4×5) = 170 (YES). For 19 (Oscillator +2): 1007 -> 100 + (7×2) = 114 -> 11 + (4×2) = 19 (YES).",
      tip: "Memory shortcut: For primes ending in 9, positive oscillator is (P+1)/10. (19 -> 2, 29 -> 3, 39 -> 4, etc.)."
    });
  }
}

// 3. Add Geometry & Mensuration Speed Formulas
const geoMod = data.modules.find(m => m.id === 'geometry-mensuration');
if (geoMod) {
  const hasMensuration = geoMod.rules.some(r => r.name && r.name.includes('Speed Mensuration'));
  if (!hasMensuration) {
    geoMod.rules.push({
      name: "High-Yield Mensuration & 3D Geometry Speed Formulas",
      rule: "Memorize the core competitive exam formulas tested across FPSC, PPSC, and CSS general ability papers.",
      formula: "Net Area Change = 2x + (x²/100)% | Sphere V = 4/3 πr³ | Cylinder V = πr²h | Cone V = 1/3 πr²h",
      example: "If a circle's radius increases by 20%, Area increases by 2(20) + (20²/100) = 40 + 4 = 44%. Equilateral Triangle: Height h = (√3/2)s; Area = (√3/4)s². Trapezoid Area = 1/2 (a + b) h. Cube Diagonal = s√3.",
      tip: "If radii of two spheres are in ratio a:b, their surface areas are in ratio a²:b², and their volumes are in ratio a³:b³."
    });
  }
}

// Write back data_math_tricks.js
const newContent = `/**
 * CSS PREP CENTRAL - MATHEMATICAL SHORTCUT TRICKS & FORMULAS DATASET
 * Comprehensive, High-Yield Formulas for CSS MPT, FPSC, PPSC, SPSC, KPPSC, BPSC, NTS & STS
 */

const MATH_TRICKS_DATA = ` + JSON.stringify(data, null, 2) + `;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MATH_TRICKS_DATA;
}
`;

fs.writeFileSync(tricksFilePath, newContent, 'utf-8');
console.log('Successfully enriched frontend/js/data_math_tricks.js (' + newContent.length + ' bytes)');
