// assemble_doc4.js - Document 4: PPSC Intermediate Mathematics Digest
const fs = require('fs');

console.log('Assembling Document 4: PPSC Intermediate & Quantitative Digest MCQs...');

const doc4Questions = [
  // --- NUMBER SYSTEMS & COMPLEX NUMBERS ---
  {
    id: 231,
    question: "For any complex number z, which of the following is always true regarding its modulus |z|?",
    options: { A: "|z| = |z̄|", B: "|z| = |-z|", C: "|z| = |-z̄|", D: "All of these" },
    answer: "D",
    answerText: "All of these",
    explanation: "For any complex number z = x + iy, |z| = √(x² + y²). The conjugate z̄ = x - iy has |-z̄| = |z̄| = |-z| = √(x² + y²). Thus all properties hold.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "FPSC", "PMS"]
  },
  {
    id: 232,
    question: "For any two complex numbers z₁ and z₂, the triangle inequality states that:",
    options: { A: "|z₁ + z₂| < |z₁| + |z₂|", B: "|z₁ + z₂| ≤ |z₁| + |z₂|", C: "|z₁ - z₂| < |z₁| - |z₂|", D: "|z₁ + z₂| ≥ |z₁| + |z₂|" },
    answer: "B",
    answerText: "|z₁ + z₂| ≤ |z₁| + |z₂|",
    explanation: "The fundamental triangle inequality for complex numbers states that the modulus of the sum of two complex numbers is always less than or equal to the sum of their individual moduli.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "PMS"]
  },
  {
    id: 233,
    question: "A decimal which has only a finite number of digits in its fractional part is called:",
    options: { A: "Terminating decimal", B: "Non-terminating decimal", C: "Recurring decimal", D: "Non-recurring decimal" },
    answer: "A",
    answerText: "Terminating decimal",
    explanation: "A terminating decimal contains a finite number of digits after the decimal point (e.g., 0.75, 0.125), representing rational numbers whose denominator has prime factors of only 2 and/or 5.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "NTS"]
  },
  {
    id: 234,
    question: "The number π (pi) is classified as a/an:",
    options: { A: "Rational number", B: "Irrational number", C: "Natural number", D: "Integer" },
    answer: "B",
    answerText: "Irrational number",
    explanation: "π is an irrational and transcendental number; its decimal expansion never terminates and never repeats in a periodic pattern.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PPSC", "FPSC"]
  },
  {
    id: 235,
    question: "If a, b ∈ R, then (a + b) ∈ R represents which property of real numbers?",
    options: { A: "Closure property w.r.t. addition", B: "Commutative property", C: "Associative property", D: "Additive identity" },
    answer: "A",
    answerText: "Closure property w.r.t. addition",
    explanation: "The closure property of real numbers under addition states that the sum of any two real numbers is always a unique real number.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "FPSC"]
  },
  {
    id: 236,
    question: "The multiplicative inverse of complex number (a, b) or a + ib is given by:",
    options: { A: "(a/(a² + b²), -b/(a² + b²))", B: "(-a/(a² + b²), b/(a² + b²))", C: "(a/(a² - b²), b/(a² - b²))", D: "(1/a, 1/b)" },
    answer: "A",
    answerText: "(a / (a² + b²), -b / (a² + b²))",
    explanation: "1 / (a + ib) = (a - ib) / [(a + ib)(a - ib)] = (a - ib) / (a² + b²) = a/(a² + b²) - i b/(a² + b²).",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "PMS"]
  },
  {
    id: 237,
    question: "The value of i¹⁹ (where i = √-1) is equal to:",
    options: { A: "i", B: "-i", C: "1", D: "-1" },
    answer: "B",
    answerText: "-i",
    explanation: "i¹⁹ = i¹⁶ × i³ = (i⁴)⁴ × (-i) = (1)⁴ × (-i) = -i.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "FPSC"]
  },

  // --- SETS, FUNCTIONS & LOGIC ---
  {
    id: 238,
    question: "If a set S has n elements, the total number of subsets (the power set size) of S is:",
    options: { A: "n²", B: "2ⁿ", C: "2n", D: "n!" },
    answer: "B",
    answerText: "2ⁿ",
    explanation: "Each element of set S has two choices (either included or excluded in a subset), giving 2 × 2 × ... × 2 (n times) = 2ⁿ total subsets.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "NTS", "CSS"]
  },
  {
    id: 239,
    question: "A compound proposition that is always TRUE regardless of the truth values of its individual components is called a:",
    options: { A: "Tautology", B: "Contradiction", C: "Absurdity", D: "Contingency" },
    answer: "A",
    answerText: "Tautology",
    explanation: "In mathematical logic, a tautology is a formula or assertion that is true in every possible interpretation (e.g., p ∨ ~p). A contradiction is always false.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "PMS"]
  },
  {
    id: 240,
    question: "De Morgan's First Law for sets states that (A ∪ B)′ is equal to:",
    options: { A: "A′ ∪ B′", B: "A′ ∩ B′", C: "A ∩ B", D: "(A ∩ B)′" },
    answer: "B",
    answerText: "A′ ∩ B′",
    explanation: "De Morgan's laws state: The complement of the union of two sets is the intersection of their complements: (A ∪ B)′ = A′ ∩ B′.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "CSS"]
  },
  {
    id: 241,
    question: "A function f: A → B which is both one-to-one (injective) and onto (surjective) is called:",
    options: { A: "Injective", B: "Surjective", C: "Bijective", D: "Inverse" },
    answer: "C",
    answerText: "Bijective function",
    explanation: "A bijective function (or one-to-one correspondence) is simultaneously injective (distinct domain elements map to distinct targets) and surjective (range equals codomain).",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "PMS"]
  },

  // --- MATRICES & DETERMINANTS ---
  {
    id: 242,
    question: "If A is an m × n matrix and B is an n × q matrix, then the order of the product matrix AB is:",
    options: { A: "m × q", B: "n × n", C: "m × m", D: "q × m" },
    answer: "A",
    answerText: "m × q",
    explanation: "Matrix multiplication is conformable when columns of A equal rows of B (both n). The resultant product matrix AB has rows of A (m) and columns of B (q), giving dimensions m × q.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "FPSC"]
  },
  {
    id: 243,
    question: "For any square matrix A, if A = Aᵀ (where Aᵀ is the transpose of A), then A is called:",
    options: { A: "Symmetric matrix", B: "Skew-symmetric matrix", C: "Hermitian matrix", D: "Orthogonal matrix" },
    answer: "A",
    answerText: "Symmetric matrix",
    explanation: "A square matrix A is symmetric if Aᵀ = A. It is skew-symmetric if Aᵀ = -A.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "PMS"]
  },
  {
    id: 244,
    question: "If all elements of the main diagonal of a skew-symmetric matrix are examined, they must always be:",
    options: { A: "1", B: "0", C: "Any non-zero real number", D: "Imaginary numbers" },
    answer: "B",
    answerText: "0 (All zero)",
    explanation: "For a skew-symmetric matrix, a_ij = -a_ji. For diagonal elements where i = j: a_ii = -a_ii => 2 a_ii = 0 => a_ii = 0. Therefore, all diagonal elements must be 0.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "FPSC"]
  },
  {
    id: 245,
    question: "If A and B are non-singular square matrices of the same order, then (AB)⁻¹ is equal to:",
    options: { A: "A⁻¹ B⁻¹", B: "B⁻¹ A⁻¹", C: "AB", D: "BA" },
    answer: "B",
    answerText: "B⁻¹ A⁻¹ (Reversal Law)",
    explanation: "By the reversal law of matrix inverses, the inverse of a product of matrices is the product of their inverses in reverse order: (AB)⁻¹ = B⁻¹ A⁻¹.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "PMS"]
  },

  // --- QUADRATIC EQUATIONS ---
  {
    id: 246,
    question: "For the quadratic equation ax² + bx + c = 0, the sum of roots (α + β) and product of roots (αβ) are respectively:",
    options: { A: "-b/a and c/a", B: "b/a and -c/a", C: "c/a and -b/a", D: "-c/a and b/a" },
    answer: "A",
    answerText: "-b/a and c/a",
    explanation: "By Vieta's formulas for quadratic equations: Sum of roots α + β = -b/a, and Product of roots αβ = c/a.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PPSC", "FPSC"]
  },
  {
    id: 247,
    question: "The discriminant of the quadratic equation ax² + bx + c = 0 is given by:",
    options: { A: "b² - 4ac", B: "√(b² - 4ac)", C: "b² + 4ac", D: "4ac - b²" },
    answer: "A",
    answerText: "b² - 4ac",
    explanation: "The discriminant Δ = b² - 4ac determines the nature of the roots (real & distinct if Δ > 0, real & equal if Δ = 0, imaginary/complex if Δ < 0).",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "NTS"]
  },
  {
    id: 248,
    question: "The sum of all three cube roots of unity (1 + ω + ω²) is equal to:",
    options: { A: "0", B: "1", C: "-1", D: "3" },
    answer: "A",
    answerText: "0",
    explanation: "The cube roots of unity are 1, (-1 + i√3)/2, and (-1 - i√3)/2. Their sum 1 + ω + ω² = 1 + (-1/2 + i√3/2) + (-1/2 - i√3/2) = 1 - 1 = 0. Also, ω³ = 1.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "PMS", "FPSC"]
  },

  // --- SEQUENCES, PROGRESSIONS & SERIES (AP, GP, HP) ---
  {
    id: 249,
    question: "The nth term (general term) of an Arithmetic Progression (A.P.) with first term a and common difference d is:",
    options: { A: "a + (n - 1)d", B: "a + nd", C: "a + (n + 1)d", D: "a × rⁿ⁻¹" },
    answer: "A",
    answerText: "a + (n - 1)d",
    explanation: "The formula for the nth term of an AP is a_n = a + (n - 1)d.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PPSC", "NTS"]
  },
  {
    id: 250,
    question: "The sum of the first n natural numbers (1 + 2 + 3 + ... + n) is given by:",
    options: { A: "n(n + 1) / 2", B: "n²", C: "[n(n + 1) / 2]²", D: "n(n + 1)(2n + 1) / 6" },
    answer: "A",
    answerText: "n(n + 1) / 2",
    explanation: "Sum of first n natural numbers S_n = n(n + 1) / 2.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 251,
    question: "The sum of the squares of the first n natural numbers (1² + 2² + 3² + ... + n²) is:",
    options: { A: "n(n + 1)(2n + 1) / 6", B: "n(n + 1) / 2", C: "[n(n + 1) / 2]²", D: "n²(n + 1)² / 4" },
    answer: "A",
    answerText: "n(n + 1)(2n + 1) / 6",
    explanation: "Standard sum of squares identity: Σ n² = n(n + 1)(2n + 1) / 6.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PPSC"]
  },
  {
    id: 252,
    question: "The sum of an infinite Geometric Series S_∞ = a / (1 - r) is valid and convergent if and only if:",
    options: { A: "|r| < 1", B: "|r| > 1", C: "|r| = 1", D: "r ≥ 1" },
    answer: "A",
    answerText: "|r| < 1",
    explanation: "An infinite geometric progression converges to a finite sum a / (1 - r) if and only if the absolute value of the common ratio is strictly less than 1 (-1 < r < 1).",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "FPSC"]
  },
  {
    id: 253,
    question: "If A, G, and H represent the Arithmetic, Geometric, and Harmonic means between two distinct positive real numbers, then which relationship always holds?",
    options: { A: "A > G > H and G² = AH", B: "A < G < H", C: "A = G = H", D: "G = (A + H) / 2" },
    answer: "A",
    answerText: "A > G > H and G² = AH",
    explanation: "For any two distinct positive numbers a and b: A = (a + b)/2, G = √(ab), H = 2ab/(a + b). It is a fundamental mathematical theorem that A > G > H, and G² = A × H.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PPSC", "PMS"]
  },

  // --- PERMUTATIONS, COMBINATIONS & PROBABILITY ---
  {
    id: 254,
    question: "The formula for the number of permutations of n objects taken r at a time (ⁿPᵣ) is:",
    options: { A: "n! / (n - r)!", B: "n! / [r! (n - r)!]", C: "n! / r!", D: "(n - r)! / n!" },
    answer: "A",
    answerText: "n! / (n - r)!",
    explanation: "ⁿPᵣ = n! / (n - r)!, representing ordered arrangements of r items chosen from n distinct items.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PPSC", "FPSC"]
  },
  {
    id: 255,
    question: "The value of 0! (zero factorial) is defined as:",
    options: { A: "1", B: "0", C: "Undefined", D: "Infinity" },
    answer: "A",
    answerText: "1",
    explanation: "By mathematical definition and convention (satisfying n! = n × (n - 1)! for n = 1: 1! = 1 × 0! => 0! = 1).",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["NTS", "PPSC"]
  },
  {
    id: 256,
    question: "A fair coin is tossed 3 times. What is the probability of getting at least two heads?",
    options: { A: "1/2", B: "3/8", C: "5/8", D: "3/4" },
    answer: "A",
    answerText: "1/2",
    explanation: "Total outcomes = 2³ = 8. Favorable outcomes (at least 2 heads: HHT, HTH, THH, HHH) = 4 outcomes. Probability = 4 / 8 = 1/2.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PMS", "FPSC"]
  },
  {
    id: 257,
    question: "A card is drawn from a standard deck of 52 playing cards. The probability that the card is an Ace is:",
    options: { A: "1/13", B: "1/52", C: "4/13", D: "1/4" },
    answer: "A",
    answerText: "1/13",
    explanation: "There are 4 Aces in a deck of 52 cards. Probability = 4 / 52 = 1 / 13.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["FPSC", "NTS"]
  },
  {
    id: 258,
    question: "Two dice are rolled simultaneously. What is the probability that the sum of the numbers appearing on the two dice is 7?",
    options: { A: "1/6", B: "5/36", C: "7/36", D: "1/12" },
    answer: "A",
    answerText: "1/6",
    explanation: "Total outcomes = 6 × 6 = 36. Outcomes with sum = 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. Probability = 6 / 36 = 1/6.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["CSS", "PMS", "PPSC"]
  },

  // --- TRIGONOMETRY ESSENTIALS ---
  {
    id: 259,
    question: "The fundamental trigonometric identity states that sin²θ + cos²θ is always equal to:",
    options: { A: "1", B: "0", C: "-1", D: "tan²θ" },
    answer: "A",
    answerText: "1",
    explanation: "In any right-angled triangle with sides p, b, h: sin²θ + cos²θ = (p/h)² + (b/h)² = (p² + b²)/h² = h²/h² = 1.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "CSS", "NTS"]
  },
  {
    id: 260,
    question: "The value of 1 radian in degrees is approximately equal to:",
    options: { A: "57.3° (57° 17′ 45″)", B: "60°", C: "45°", D: "90°" },
    answer: "A",
    answerText: "57.3°",
    explanation: "π radians = 180° => 1 radian = 180° / π ≈ 180 / 3.14159 ≈ 57.2958° ≈ 57° 17′ 45″.",
    category: "Mathematics & Quantitative Ability",
    subcategory: "Quantitative & Intermediate Math",
    examTags: ["PPSC", "FPSC"]
  }
];

fs.writeFileSync('scratch/doc4_mcqs.json', JSON.stringify(doc4Questions, null, 2));
console.log('Saved Document 4 MCQs:', doc4Questions.length);
