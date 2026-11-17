const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

const MATH_SPECIALIZED_QUESTIONS = [
  {
    "q": "If x + y + z = 6, xy + yz + zx = 11, and xyz = 6, what is the value of x³ + y³ + z³?",
    "opts": [
      "30",
      "36",
      "42",
      "48"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Using the algebraic identity: x³ + y³ + z³ - 3xyz = (x + y + z)[(x + y + z)² - 3(xy + yz + zx)]. Substituting the values: x³ + y³ + z³ - 3(6) = 6[6² - 3(11)] = 6[36 - 33] = 6(3) = 18. Thus, x³ + y³ + z³ = 18 + 18 = 36."
  },
  {
    "q": "If x + 1/x = √5, what is the value of x⁵ + 1/x⁵?",
    "opts": [
      "5√5",
      "6√5",
      "7√5",
      "11√5"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "x² + 1/x² = (√5)² - 2 = 3. x³ + 1/x³ = (√5)³ - 3√5 = 5√5 - 3√5 = 2√5. Multiplying: (x² + 1/x²)(x³ + 1/x³) = x⁵ + 1/x⁵ + (x + 1/x). So 3(2√5) = x⁵ + 1/x⁵ + √5 ⇒ 6√5 - √5 = 5√5."
  },
  {
    "q": "If α and β are the roots of 2x² - 7x + 4 = 0, what is the value of (α²/β) + (β²/α)?",
    "opts": [
      "145/16",
      "175/16",
      "185/16",
      "195/16"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Here α + β = 7/2 and αβ = 4/2 = 2. We want (α³ + β³)/(αβ) = [(α + β)³ - 3αβ(α + β)] / (αβ). Numerator = (7/2)³ - 3(2)(7/2) = 343/8 - 21 = (343 - 168)/8 = 175/8. Dividing by αβ = 2 gives 175/16."
  },
  {
    "q": "What is the remainder when the polynomial P(x) = x²⁰²⁶ + x²⁰²⁵ + 1 is divided by x² + x + 1?",
    "opts": [
      "x + 1",
      "x + 2",
      "2x + 1",
      "0"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "The roots of x² + x + 1 = 0 are cube roots of unity ω and ω², where ω³ = 1 and 1 + ω + ω² = 0. Notice 2026 = 3(675) + 1 ⇒ ω²⁰²⁶ = ω, and 2025 = 3(675) ⇒ ω²⁰²⁵ = 1. Thus P(ω) = ω + 1 + 1 = ω + 2. If the linear remainder is Ax + B, then Aω + B = ω + 2 ⇒ A = 1, B = 2. Remainder is x + 2."
  },
  {
    "q": "A function f satisfies f(x) + 2f(1 - x) = x² for all real x. What is the value of f(2)?",
    "opts": [
      "-2/3",
      "-1/3",
      "1/3",
      "2/3"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "For x = 2: f(2) + 2f(-1) = 4. For x = -1: f(-1) + 2f(2) = 1 ⇒ f(-1) = 1 - 2f(2). Substitute into the first equation: f(2) + 2(1 - 2f(2)) = 4 ⇒ f(2) + 2 - 4f(2) = 4 ⇒ -3f(2) = 2 ⇒ f(2) = -2/3."
  },
  {
    "q": "Find the real solution to the equation: √(2x + 3) - √(x + 1) = 1.",
    "opts": [
      "x = 3",
      "x = -1",
      "x = 3 and x = -1",
      "x = 5"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Rearrange: √(2x + 3) = 1 + √(x + 1). Squaring both sides: 2x + 3 = 1 + x + 1 + 2√(x + 1) ⇒ x + 1 = 2√(x + 1). Let u = √(x + 1) ≥ 0, then u² = 2u ⇒ u(u - 2) = 0. Either u = 0 ⇒ x = -1, or u = 2 ⇒ x + 1 = 4 ⇒ x = 3. Checking in original equation: for x = 3, √9 - √4 = 3 - 2 = 1 (valid); for x = -1, √1 - √0 = 1 (valid). Both x = 3 and x = -1 are valid."
  },
  {
    "q": "If 2^a = 3^b = 6^(-c), what is the value of (1/a) + (1/b) + (1/c)?",
    "opts": [
      "0",
      "1",
      "-1",
      "1/6"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Let 2^a = 3^b = 6^(-c) = k. Then 2 = k^(1/a), 3 = k^(1/b), and 6 = k^(-1/c). Since 2 × 3 = 6, k^(1/a) × k^(1/b) = k^(-1/c) ⇒ k^(1/a + 1/b) = k^(-1/c) ⇒ 1/a + 1/b = -1/c ⇒ 1/a + 1/b + 1/c = 0."
  },
  {
    "q": "For what values of k does the quadratic equation (k - 1)x² + 2(k - 1)x + 1 = 0 have no real roots?",
    "opts": [
      "k < 1",
      "1 < k < 2",
      "k > 2",
      "k ≤ 1 or k ≥ 2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "For no real roots, the discriminant Δ < 0 and k ≠ 1 (for it to be quadratic). Δ = [2(k - 1)]² - 4(k - 1)(1) = 4(k - 1)² - 4(k - 1) = 4(k - 1)(k - 1 - 1) = 4(k - 1)(k - 2) < 0. The inequality (k - 1)(k - 2) < 0 holds strictly when 1 < k < 2."
  },
  {
    "q": "If log₂(x) + log₄(x) + log₁₆(x) = 21/4, what is the value of x?",
    "opts": [
      "4",
      "8",
      "16",
      "32"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Change bases to 2: log₄(x) = (1/2)log₂(x), and log₁₆(x) = (1/4)log₂(x). Thus log₂(x)(1 + 1/2 + 1/4) = 21/4 ⇒ log₂(x)(7/4) = 21/4 ⇒ log₂(x) = 3 ⇒ x = 2³ = 8."
  },
  {
    "q": "If a + b + c = 0, what is the value of (a²/(bc)) + (b²/(ca)) + (c²/(ab))?",
    "opts": [
      "0",
      "1",
      "3",
      "-3"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Combining under a common denominator gives (a³ + b³ + c³)/(abc). When a + b + c = 0, the known identity gives a³ + b³ + c³ = 3abc. Therefore, (3abc)/(abc) = 3."
  },
  {
    "q": "Solve for real x: x⁴ - 10x² + 9 = 0. What is the sum of the absolute values of all roots?",
    "opts": [
      "4",
      "6",
      "8",
      "10"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Let y = x². Then y² - 10y + 9 = 0 ⇒ (y - 9)(y - 1) = 0 ⇒ y = 9 or y = 1. So x = ±3 and x = ±1. Absolute values of roots are 3, 3, 1, 1. Their sum is 3 + 3 + 1 + 1 = 8."
  },
  {
    "q": "What is the maximum value of the expression 12x - 3x² + 5 for all real numbers x?",
    "opts": [
      "14",
      "17",
      "19",
      "21"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Complete the square: -3(x² - 4x) + 5 = -3(x - 2)² + 12 + 5 = 17 - 3(x - 2)². Since -3(x - 2)² ≤ 0 for all real x, the maximum occurs at x = 2 and equals 17."
  },
  {
    "q": "If x = (√3 + 1)/2, what is the value of 4x³ + 2x² - 8x + 7?",
    "opts": [
      "8",
      "10",
      "12",
      "15"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "2x = √3 + 1 ⇒ 2x - 1 = √3. Squaring both sides: (2x - 1)² = 3 ⇒ 4x² - 4x + 1 = 3 ⇒ 4x² - 4x - 2 = 0 ⇒ 2x² - 2x - 1 = 0. Now divide 4x³ + 2x² - 8x + 7 by (2x² - 2x - 1): 4x³ + 2x² - 8x + 7 = 2x(2x² - 2x - 1) + 6x² - 6x + 7 = 2x(0) + 3(2x² - 2x - 1) + 10 = 0 + 0 + 10 = 10."
  },
  {
    "q": "If the roots of the equation x³ - 12x² + 39x - 28 = 0 are in Arithmetic Progression (A.P.), what are the roots?",
    "opts": [
      "1, 4, 7",
      "2, 4, 6",
      "1, 3, 8",
      "3, 4, 5"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Let roots be a - d, a, a + d. Sum of roots = 3a = 12 ⇒ a = 4. Product of roots = a(a² - d²) = 28 ⇒ 4(16 - d²) = 28 ⇒ 16 - d² = 7 ⇒ d² = 9 ⇒ d = 3. The roots are 4 - 3 = 1, 4, and 4 + 3 = 7."
  },
  {
    "q": "If x, y, z are positive real numbers such that x + y + z = 1, what is the minimum value of (1/x) + (1/y) + (1/z)?",
    "opts": [
      "3",
      "6",
      "9",
      "12"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "By Cauchy-Schwarz or AM-HM inequality: (x + y + z)(1/x + 1/y + 1/z) ≥ (1 + 1 + 1)² = 9. Since x + y + z = 1, (1/x + 1/y + 1/z) ≥ 9, with equality when x = y = z = 1/3."
  },
  {
    "q": "If x² - 3x + 1 = 0, what is the value of x⁴ + 1/x⁴?",
    "opts": [
      "47",
      "49",
      "51",
      "53"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Dividing by x gives x + 1/x = 3. Squaring: x² + 1/x² = 3² - 2 = 7. Squaring again: x⁴ + 1/x⁴ = 7² - 2 = 49 - 2 = 47."
  },
  {
    "q": "Solve the system for real positive values: xy = 6, yz = 12, zx = 8. What is the value of x + y + z?",
    "opts": [
      "7",
      "8",
      "9",
      "10"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Multiply all three: (xyz)² = 6 × 12 × 8 = 576 ⇒ xyz = 24. Then x = (xyz)/(yz) = 24/12 = 2. y = (xyz)/(zx) = 24/8 = 3. z = (xyz)/(xy) = 24/6 = 4. Sum x + y + z = 2 + 3 + 4 = 9."
  },
  {
    "q": "If log₁₀(2) = a and log₁₀(3) = b, what is log₁₀(15) in terms of a and b?",
    "opts": [
      "b + 1 - a",
      "a + b - 1",
      "a - b + 1",
      "b - a - 1"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Notice 15 = 3 × 5 = 3 × (10/2). Therefore log₁₀(15) = log₁₀(3) + log₁₀(10/2) = log₁₀(3) + log₁₀(10) - log₁₀(2) = b + 1 - a."
  },
  {
    "q": "What is the coefficient of x⁷ in the expansion of (1 - x + 2x²)³?",
    "opts": [
      "0",
      "-6",
      "-12",
      "12"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "The highest power of x in (1 - x + 2x²)³ is (x²)³ = x⁶. Since the maximum power achievable is 6, the coefficient of x⁷ is 0."
  },
  {
    "q": "If a, b, c are distinct real numbers, simplify: [a² / ((a - b)(a - c))] + [b² / ((b - c)(b - a))] + [c² / ((c - a)(c - b))].",
    "opts": [
      "0",
      "1",
      "a + b + c",
      "abc"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Using partial fractions or Lagrange interpolation on P(x) = x² at distinct nodes a, b, c: the sum of the coefficients of P(x)/[(x - a)(x - b)(x - c)] equals 1 for any monic polynomial of degree 2."
  },
  {
    "q": "If 3^(2x + 1) - 10 × 3^x + 3 = 0, find the values of x.",
    "opts": [
      "x = -1 and x = 1",
      "x = 0 and x = 2",
      "x = 1 and x = 3",
      "x = -2 and x = 1"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Rewrite as 3 × (3^x)² - 10(3^x) + 3 = 0. Let y = 3^x: 3y² - 10y + 3 = 0 ⇒ (3y - 1)(y - 3) = 0 ⇒ y = 1/3 or y = 3. Since 3^x = 3^(-1) ⇒ x = -1, and 3^x = 3¹ ⇒ x = 1."
  },
  {
    "q": "Find the sum of all real roots of the equation |x² - 4x + 3| = x - 1.",
    "opts": [
      "4",
      "5",
      "6",
      "7"
    ],
    "ans": "D",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Roots are x = 1, x = 2, and x = 4. All satisfy |x² - 4x + 3| = x - 1. Their sum is 1 + 2 + 4 = 7."
  },
  {
    "q": "If x = 3^(1/3) + 3^(-1/3), what is the value of 3x³ - 9x?",
    "opts": [
      "8",
      "10",
      "12",
      "15"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Cube both sides: x³ = (3^(1/3) + 3^(-1/3))³ = 3 + 1/3 + 3(3^(1/3))(3^(-1/3))(x) = 10/3 + 3x. Multiply by 3: 3x³ = 10 + 9x ⇒ 3x³ - 9x = 10."
  },
  {
    "q": "Find the remainder when x¹⁰⁰ - 2x⁵¹ + 1 is divided by x² - 1.",
    "opts": [
      "-2x + 2",
      "2x - 2",
      "-2x",
      "0"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Let remainder be Ax + B. Then x¹⁰⁰ - 2x⁵¹ + 1 = (x - 1)(x + 1)Q(x) + Ax + B. For x = 1: 1 - 2 + 1 = 0 = A + B. For x = -1: 1 - 2(-1) + 1 = 4 = -A + B. Adding: 2B = 4 ⇒ B = 2. Then A = -B = -2. The remainder is -2x + 2."
  },
  {
    "q": "If a + b = 5 and a² + b² = 13, what is the value of a⁴ + b⁴?",
    "opts": [
      "97",
      "107",
      "117",
      "127"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "From (a + b)² = a² + b² + 2ab: 25 = 13 + 2ab ⇒ 2ab = 12 ⇒ ab = 6. Now (a² + b²)² = a⁴ + b⁴ + 2(ab)² ⇒ 13² = a⁴ + b⁴ + 2(36) ⇒ 169 = a⁴ + b⁴ + 72 ⇒ a⁴ + b⁴ = 169 - 72 = 97."
  },
  {
    "q": "If √(x + √(x + √(x + ...))) = 6, what is the value of x?",
    "opts": [
      "30",
      "36",
      "42",
      "48"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Let y = √(x + y) = 6. Squaring both sides: x + y = 36 ⇒ x + 6 = 36 ⇒ x = 30."
  },
  {
    "q": "What is the domain of the function f(x) = √( (x - 2) / (x + 3) )?",
    "opts": [
      "(-∞, -3) ∪ [2, ∞)",
      "[-3, 2]",
      "(-3, 2]",
      "(-∞, -3] ∪ [2, ∞)"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "For real f(x), (x - 2)/(x + 3) ≥ 0 and x + 3 ≠ 0. Critical points are -3 and 2. The fraction is positive when x < -3 or x ≥ 2. Since denominator cannot be 0, x ≠ -3. Domain is (-∞, -3) ∪ [2, ∞)."
  },
  {
    "q": "If α, β, γ are roots of x³ - 6x² + 11x - 6 = 0, what is the value of (1/α) + (1/β) + (1/γ)?",
    "opts": [
      "11/6",
      "6/11",
      "2",
      "3"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "By Vieta's formulas: α + β + γ = 6, αβ + βγ + γα = 11, and αβγ = 6. The sum 1/α + 1/β + 1/γ = (αβ + βγ + γα)/(αβγ) = 11/6."
  },
  {
    "q": "If log₂(3) = x and log₃(5) = y, what is log₁₀(15) in terms of x and y?",
    "opts": [
      "(xy + x) / (xy + 1)",
      "(y + 1) / (xy + 1)",
      "(xy + 1) / (x + 1)",
      "(y + x) / (xy + 1)"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "log₂(5) = log₂(3) × log₃(5) = xy. Now log₁₀(15) = log₂(15) / log₂(10) = [log₂(3) + log₂(5)] / [log₂(2) + log₂(5)] = (x + xy) / (1 + xy) = (xy + x) / (xy + 1)."
  },
  {
    "q": "If a, b are roots of x² - px + q = 0, what equation has roots a² and b²?",
    "opts": [
      "x² - (p² - 2q)x + q² = 0",
      "x² - (p² + 2q)x + q² = 0",
      "x² - (p² - 2q)x - q² = 0",
      "x² + (p² - 2q)x + q² = 0"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Sum of new roots: a² + b² = (a + b)² - 2ab = p² - 2q. Product of new roots: a²b² = (ab)² = q². Equation is x² - (Sum)x + (Product) = 0 ⇒ x² - (p² - 2q)x + q² = 0."
  },
  {
    "q": "Solve for x: 4^x - 3 × 2^(x + 2) + 32 = 0. What is the product of all roots?",
    "opts": [
      "4",
      "6",
      "8",
      "12"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Rewrite: (2^x)² - 12(2^x) + 32 = 0. Let y = 2^x: y² - 12y + 32 = 0 ⇒ (y - 4)(y - 8) = 0 ⇒ y = 4 or y = 8. So 2^x = 4 ⇒ x = 2, and 2^x = 8 ⇒ x = 3. The roots are x = 2 and x = 3. Product of the roots is 2 × 3 = 6."
  },
  {
    "q": "Find the number of integral solutions (x, y) to the equation xy - 3x - 2y = 1.",
    "opts": [
      "2",
      "4",
      "6",
      "8"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Use Simon's Favorite Factoring Trick: xy - 3x - 2y + 6 = 1 + 6 ⇒ (x - 2)(y - 3) = 7. Since 7 is prime, its integer factor pairs are (1, 7), (7, 1), (-1, -7), (-7, -1). Each pair gives a unique pair of integers (x, y). There are exactly 4 integral solutions."
  },
  {
    "q": "If x = 2 + √3, what is the value of x⁴ - 8x³ + 14x² + 8x + 5?",
    "opts": [
      "6",
      "8",
      "10",
      "12"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "From x = 2 + √3, we get x² - 4x + 1 = 0. Dividing x⁴ - 8x³ + 14x² + 8x + 5 by (x² - 4x + 1) yields quotient (x² - 4x - 3) and constant remainder 8. Since x² - 4x + 1 = 0, the value is 8."
  },
  {
    "q": "If 1/(a + b + x) = (1/a) + (1/b) + (1/x), what are the values of x?",
    "opts": [
      "x = -a and x = -b",
      "x = a and x = b",
      "x = -(a + b)",
      "x = a + b"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "1/(a + b + x) - 1/x = 1/a + 1/b ⇒ [x - (a + b + x)] / [x(a + b + x)] = (a + b)/(ab) ⇒ -(a + b) / [x(a + b + x)] = (a + b)/(ab). Cancel (a + b): -ab = x(a + b + x) = x² + (a + b)x ⇒ x² + (a + b)x + ab = 0 ⇒ (x + a)(x + b) = 0 ⇒ x = -a or x = -b."
  },
  {
    "q": "If x² + y² + z² = xy + yz + zx for real numbers x, y, z, which condition must hold?",
    "opts": [
      "x = y = z",
      "x + y + z = 0",
      "xyz = 1",
      "x² + y² = z²"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Multiply by 2: 2x² + 2y² + 2z² - 2xy - 2yz - 2zx = 0 ⇒ (x - y)² + (y - z)² + (z - x)² = 0. Sum of squares is zero only when each term is zero, meaning x = y = z."
  },
  {
    "q": "Find the sum of all solutions to: x^(log₁₀(x)) = 100x.",
    "opts": [
      "100.1",
      "10.01",
      "101",
      "1000"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Take log₁₀ of both sides: (log₁₀ x)² = log₁₀(100x) = 2 + log₁₀ x. Let u = log₁₀ x: u² - u - 2 = 0 ⇒ (u - 2)(u + 1) = 0 ⇒ u = 2 or u = -1. So x = 10² = 100, or x = 10⁻¹ = 0.1. The sum of the solutions is 100 + 0.1 = 100.1."
  },
  {
    "q": "If a, b, c are positive reals such that a + b + c = 6, what is the maximum value of a²b³c?",
    "opts": [
      "108",
      "432",
      "864",
      "1728"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "By weighted AM-GM, maximum occurs when a/2 = b/3 = c/1. Since a + b + c = 6, 2k + 3k + k = 6 ⇒ 6k = 6 ⇒ k = 1. Thus a = 2, b = 3, c = 1. Maximum value is a²b³c = 2² × 3³ × 1 = 4 × 27 = 108."
  },
  {
    "q": "If x = √[7 + 4√3], what is x + 1/x?",
    "opts": [
      "2",
      "4",
      "2√3",
      "4√3"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Notice 7 + 4√3 = 4 + 3 + 2(2)(√3) = (2 + √3)². Therefore x = 2 + √3. Then 1/x = 1/(2 + √3) = 2 - √3. Adding them gives x + 1/x = (2 + √3) + (2 - √3) = 4."
  },
  {
    "q": "Find the constant term (independent of x) in the binomial expansion of (2x² - 1/x)⁹.",
    "opts": [
      "-5376",
      "5376",
      "-672",
      "672"
    ],
    "ans": "D",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "General term is ⁹C_r (2)^{9-r} (-1)^r x^{18 - 3r}. Setting 18 - 3r = 0 gives r = 6. Coefficient = ⁹C₆ × 2³ × (-1)⁶ = 84 × 8 × 1 = 672."
  },
  {
    "q": "If (x - a)(x - b) - 1 = 0 has roots c and d, what are the roots of (x - c)(x - d) + 1 = 0?",
    "opts": [
      "a and b",
      "-a and -b",
      "a + c and b + d",
      "1/a and 1/b"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Since c and d are roots of (x - a)(x - b) - 1 = 0, we can write identically (x - a)(x - b) - 1 = (x - c)(x - d). Rearranging gives (x - c)(x - d) + 1 = (x - a)(x - b). Setting this to 0 clearly yields roots x = a and x = b."
  },
  {
    "q": "If log₂(x - 1) + log₂(x - 3) = 3, what is the value of x?",
    "opts": [
      "-1",
      "5",
      "5 and -1",
      "7"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Combine logs: log₂[(x - 1)(x - 3)] = 3 ⇒ (x - 1)(x - 3) = 2³ = 8 ⇒ x² - 4x + 3 = 8 ⇒ x² - 4x - 5 = 0 ⇒ (x - 5)(x + 1) = 0. However, log arguments must be positive: x - 1 > 0 and x - 3 > 0 ⇒ x > 3. Therefore x = -1 is extraneous, leaving only x = 5."
  },
  {
    "q": "For how many integer values of n is (n² + 3) / (n - 1) an integer?",
    "opts": [
      "4",
      "6",
      "8",
      "12"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "(n² + 3)/(n - 1) = n + 1 + 4/(n - 1). (n - 1) must divide 4. Divisors of 4 are {±1, ±2, ±4}, which gives exactly 6 integer values of n."
  },
  {
    "q": "If x = 111...111 (81 ones), the number x is always divisible by which integer?",
    "opts": [
      "81",
      "243",
      "729",
      "2187"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Sum of digits is 81 × 1 = 81. A number with 3^k identical digits 1 is divisible by 3^k. For 81 = 3⁴ ones, it is divisible by 3⁴ = 81."
  },
  {
    "q": "If a² + b² + c² = 1, what is the minimum value of ab + bc + ca?",
    "opts": [
      "-1",
      "-1/2",
      "0",
      "1/2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Consider (a + b + c)² ≥ 0 ⇒ a² + b² + c² + 2(ab + bc + ca) ≥ 0 ⇒ 1 + 2(ab + bc + ca) ≥ 0 ⇒ ab + bc + ca ≥ -1/2."
  },
  {
    "q": "Find the sum of the coefficients of the polynomial P(x) = (2x² - 3x + 2)²⁰²⁶.",
    "opts": [
      "0",
      "1",
      "2²⁰²⁶",
      "-1"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "The sum of coefficients of any polynomial P(x) is obtained by evaluating at x = 1. P(1) = (2(1)² - 3(1) + 2)²⁰²⁶ = (2 - 3 + 2)²⁰²⁶ = 1²⁰²⁶ = 1."
  },
  {
    "q": "If 2^(x + y) = 32 and 2^(x - y) = 2, what is the value of x² - y²?",
    "opts": [
      "5",
      "10",
      "15",
      "20"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "2^(x + y) = 2⁵ ⇒ x + y = 5. 2^(x - y) = 2¹ ⇒ x - y = 1. Therefore, x² - y² = (x + y)(x - y) = 5 × 1 = 5."
  },
  {
    "q": "If x + y = 1 and x² + y² = 2, what is the value of x³ + y³?",
    "opts": [
      "2",
      "5/2",
      "3",
      "7/2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "2xy = (x + y)² - (x² + y²) = 1 - 2 = -1 ⇒ xy = -1/2. Now x³ + y³ = (x + y)(x² - xy + y²) = 1 × [2 - (-1/2)] = 1 × (2 + 1/2) = 5/2."
  },
  {
    "q": "If α, β are roots of x² - 2x + 4 = 0, what is the value of α⁶ + β⁶?",
    "opts": [
      "64",
      "128",
      "256",
      "512"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Roots satisfy x² - 2x + 4 = 0. Multiply by (x + 2): (x + 2)(x² - 2x + 4) = x³ + 8 = 0 ⇒ x³ = -8. Thus α³ = -8 and β³ = -8. Squaring both gives α⁶ = 64 and β⁶ = 64. Their sum is 64 + 64 = 128."
  },
  {
    "q": "What is the product of all roots of the equation x³ - 6x² + 11x - 6 = 0?",
    "opts": [
      "6",
      "-6",
      "11",
      "-11"
    ],
    "ans": "A",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "By Vieta's formula, for a cubic ax³ + bx² + cx + d = 0, product of roots = -d/a. Here d = -6 and a = 1, so product = -(-6)/1 = 6. (The roots are 1, 2, and 3)."
  },
  {
    "q": "If a/b = c/d = e/f = 3, what is the value of (2a² + 3c² + 4e²) / (2b² + 3d² + 4f²)?",
    "opts": [
      "3",
      "6",
      "9",
      "27"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Algebra",
    "exp": "Since a = 3b, c = 3d, e = 3f, squaring gives a² = 9b², c² = 9d², e² = 9f². Substituting into numerator gives 9(2b² + 3d² + 4f²). Dividing by the denominator leaves 9."
  },
  {
    "q": "A train 150 m long passes a telegraph pole in 12 seconds. What is the speed of the train in km/h?",
    "opts": [
      "40 km/h",
      "45 km/h",
      "50 km/h",
      "54 km/h"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Train problems",
    "exp": "Speed = Distance / Time = 150 m / 12 s = 12.5 m/s. Convert to km/h: 12.5 × (18/5) = 2.5 × 18 = 45 km/h."
  },
  {
    "q": "A train 280 m long is moving at 60 km/h. How much time (in seconds) will it take to cross a platform 220 m long?",
    "opts": [
      "20 s",
      "25 s",
      "30 s",
      "35 s"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Train problems",
    "exp": "Total distance = Train length + Platform length = 280 + 220 = 500 m. Speed = 60 × (5/18) = 50/3 m/s. Time = Distance / Speed = 500 / (50/3) = (500 × 3)/50 = 30 seconds."
  },
  {
    "q": "Two trains of lengths 140 m and 160 m run on parallel tracks in opposite directions at 60 km/h and 40 km/h. In how many seconds will they clear each other from the moment they meet?",
    "opts": [
      "9.6 s",
      "10.8 s",
      "12.0 s",
      "14.4 s"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Relative speed in opposite directions = 60 + 40 = 100 km/h = 100 × (5/18) = 250/9 m/s. Total distance to cross = 140 + 160 = 300 m. Time = 300 / (250/9) = (300 × 9)/250 = 10.8 seconds."
  },
  {
    "q": "Two trains 105 m and 90 m long run at speeds of 45 km/h and 72 km/h respectively in the same direction. How long will it take for the faster train to pass the slower train?",
    "opts": [
      "20 s",
      "24 s",
      "26 s",
      "28 s"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Relative speed in same direction = 72 - 45 = 27 km/h = 27 × (5/18) = 7.5 m/s. Total distance = 105 + 90 = 195 m. Time = 195 / 7.5 = 26 seconds."
  },
  {
    "q": "A train passes a standing man in 8 seconds and a bridge 260 m long in 21 seconds. What is the length of the train?",
    "opts": [
      "140 m",
      "160 m",
      "180 m",
      "200 m"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Let length of train be L. Speed = L/8 = (L + 260)/21. Cross-multiplying: 21L = 8L + 2080 ⇒ 13L = 2080 ⇒ L = 160 meters."
  },
  {
    "q": "A train running at 54 km/h takes 20 seconds to cross a platform. Next, it takes 12 seconds to pass a man walking at 6 km/h in the same direction. What is the length of the platform?",
    "opts": [
      "120 m",
      "140 m",
      "160 m",
      "180 m"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Relative speed against man = 54 - 6 = 48 km/h = 48 × (5/18) = 40/3 m/s. Length of train = (40/3) × 12 = 160 m. Train speed = 54 km/h = 15 m/s. In 20 seconds it travels 15 × 20 = 300 m. Platform length = 300 - 160 = 140 m."
  },
  {
    "q": "Two stations A and B are 200 km apart. Train 1 leaves A at 7 AM at 20 km/h towards B. Train 2 leaves B at 8 AM at 25 km/h towards A. At what time will they meet?",
    "opts": [
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "From 7 to 8 AM, Train 1 covers 20 km. Remaining distance at 8 AM = 200 - 20 = 180 km. Relative speed = 20 + 25 = 45 km/h. Time to meet = 180 / 45 = 4 hours after 8 AM, which is 12:00 PM."
  },
  {
    "q": "A train traveling at 72 km/h crosses a 180 m long platform in 18 seconds. How many seconds will it take to cross another platform 240 m long?",
    "opts": [
      "19 s",
      "20 s",
      "21 s",
      "22 s"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Speed = 72 × (5/18) = 20 m/s. Distance in 18 s = 20 × 18 = 360 m. Length of train = 360 - 180 = 180 m. For 240 m platform: total distance = 180 + 240 = 420 m. Time = 420 / 20 = 21 seconds."
  },
  {
    "q": "Two trains start at the same time from points A and B towards each other. After meeting, they reach B and A in 4 hours and 9 hours respectively. What is the ratio of their speeds?",
    "opts": [
      "2 : 3",
      "3 : 2",
      "4 : 9",
      "9 : 4"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Formula: Speed₁ / Speed₂ = √(Time₂ / Time₁). Ratio = √(9 / 4) = 3 / 2 = 3 : 2."
  },
  {
    "q": "Excluding stoppages, the speed of a train is 60 km/h, and including stoppages, it is 48 km/h. For how many minutes does the train stop per hour?",
    "opts": [
      "10 min",
      "12 min",
      "15 min",
      "18 min"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Train problems",
    "exp": "Stoppage time per hour = [(Speed without stoppage - Speed with stoppage) / Speed without stoppage] × 60 min = [(60 - 48)/60] × 60 = 12 minutes."
  },
  {
    "q": "A train 125 m long passes a man running at 5 km/h in the same direction in 10 seconds. What is the speed of the train?",
    "opts": [
      "45 km/h",
      "50 km/h",
      "54 km/h",
      "55 km/h"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Train problems",
    "exp": "Relative speed = 125 m / 10 s = 12.5 m/s = 12.5 × (18/5) = 45 km/h. Since man is running in same direction: Speed of train = Relative speed + Man speed = 45 + 5 = 50 km/h."
  },
  {
    "q": "A train passes two men walking in the same direction at 3 km/h and 5 km/h in 10 seconds and 11 seconds respectively. What is the speed of the train?",
    "opts": [
      "22 km/h",
      "25 km/h",
      "27 km/h",
      "30 km/h"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Let train speed be V km/h. Train length L = (V - 3) × (5/18) × 10 = (V - 5) × (5/18) × 11. Canceling 5/18: 10(V - 3) = 11(V - 5) ⇒ 10V - 30 = 11V - 55 ⇒ V = 25 km/h."
  },
  {
    "q": "A train 300 m long takes 25 seconds to pass a standing person. How long will it take to cross a 450 m tunnel at the same speed?",
    "opts": [
      "50 s",
      "55 s",
      "60 s",
      "62.5 s"
    ],
    "ans": "D",
    "diff": "Medium",
    "subCat": "Train problems",
    "exp": "Speed = 300 / 25 = 12 m/s. Total distance for tunnel = 300 + 450 = 750 m. Time = 750 / 12 = 62.5 seconds."
  },
  {
    "q": "Two trains of equal length running in opposite directions at 46 km/h and 36 km/h pass each other in 36 seconds. What is the length of each train?",
    "opts": [
      "380 m",
      "400 m",
      "410 m",
      "420 m"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Relative speed = 46 + 36 = 82 km/h = 82 × (5/18) = 410/18 m/s. In 36 seconds, total distance = (410/18) × 36 = 820 m. Length of each train = 820 / 2 = 410 meters."
  },
  {
    "q": "A train 100 m long passes another train 150 m long running in opposite direction in 9 seconds. If the speed of the first train is 40 km/h, what is the speed of the second train?",
    "opts": [
      "50 km/h",
      "55 km/h",
      "60 km/h",
      "65 km/h"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Total distance = 100 + 150 = 250 m. Relative speed = 250 / 9 m/s = (250/9) × (18/5) = 100 km/h. Second train speed = 100 - 40 = 60 km/h."
  },
  {
    "q": "A train overtakes two bicycles moving in the same direction at 2 km/h and 4 km/h in 9 seconds and 10 seconds respectively. What is the length of the train?",
    "opts": [
      "40 m",
      "45 m",
      "50 m",
      "60 m"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Let train speed be V km/h. Length = (V - 2) × (5/18) × 9 = (V - 4) × (5/18) × 10. 9(V - 2) = 10(V - 4) ⇒ 9V - 18 = 10V - 40 ⇒ V = 22 km/h. Train length = (22 - 2) × (5/18) × 9 = 20 × (5/2) = 50 meters."
  },
  {
    "q": "A train traveling at 90 km/h enters a 1.5 km long tunnel. How long does the train take to completely emerge from the tunnel if the train is 250 m long?",
    "opts": [
      "60 s",
      "70 s",
      "80 s",
      "90 s"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Train problems",
    "exp": "Speed = 90 × (5/18) = 25 m/s. Total distance = 1500 m + 250 m = 1750 m. Time = 1750 / 25 = 70 seconds."
  },
  {
    "q": "A fast train leaves station A towards B at 80 km/h. At the same time, a slow train leaves B towards A at 60 km/h. When they meet, the fast train has traveled 60 km more than the slow train. What is the distance between A and B?",
    "opts": [
      "380 km",
      "400 km",
      "420 km",
      "450 km"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Let time taken to meet be t hours. Difference in distance = 80t - 60t = 20t = 60 km ⇒ t = 3 hours. Total distance = 80t + 60t = 140t = 140 × 3 = 420 km."
  },
  {
    "q": "If a train 110 m long passes a telegraph post in 3 seconds, how long will it take to pass a 165 m platform?",
    "opts": [
      "6.5 s",
      "7.0 s",
      "7.5 s",
      "8.0 s"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Train problems",
    "exp": "Speed = 110 / 3 m/s. Total distance for platform = 110 + 165 = 275 m. Time = 275 / (110/3) = (275 × 3) / 110 = 825 / 110 = 7.5 seconds."
  },
  {
    "q": "A train crosses a bridge 500 m long in 30 seconds and a platform 250 m long in 20 seconds. What is the speed of the train?",
    "opts": [
      "75 km/h",
      "90 km/h",
      "100 km/h",
      "108 km/h"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Train problems",
    "exp": "Difference in distance = 500 - 250 = 250 m. Difference in time = 30 - 20 = 10 s. Speed = 250 m / 10 s = 25 m/s = 25 × (18/5) = 90 km/h."
  },
  {
    "q": "The difference between simple interest and compound interest (compounded annually) on a certain sum of money for 2 years at 8% per annum is Rs. 96. What is the principal sum?",
    "opts": [
      "Rs. 12,000",
      "Rs. 15,000",
      "Rs. 18,000",
      "Rs. 20,000"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "Difference for 2 years is given by D = P(R/100)². So 96 = P(8/100)² = P(64/10000) ⇒ P = (96 × 10000)/64 = 15,000."
  },
  {
    "q": "If the difference between CI and SI on a sum of money for 3 years at 10% per annum is Rs. 155, what is the principal?",
    "opts": [
      "Rs. 4,000",
      "Rs. 4,500",
      "Rs. 5,000",
      "Rs. 6,000"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "For 3 years, D = P(R/100)² × (3 + R/100). Here R = 10, so 155 = P(10/100)² × (3 + 10/100) = P(1/100) × (3.1) = 31P / 1000 ⇒ P = (155 × 1000)/31 = 5,000."
  },
  {
    "q": "A sum of money invested at compound interest doubles itself in 4 years. In how many years will it become 8 times itself at the same interest rate?",
    "opts": [
      "8 years",
      "12 years",
      "16 years",
      "20 years"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Compound and Simple Interest",
    "exp": "At compound interest, if an amount becomes 2 times in 4 years, it will become 2³ = 8 times in 4 × 3 = 12 years."
  },
  {
    "q": "A sum of money amounts to Rs. 4,840 in 2 years and to Rs. 5,324 in 3 years at compound interest compounded annually. What is the rate of interest per annum?",
    "opts": [
      "8%",
      "9%",
      "10%",
      "12%"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Compound and Simple Interest",
    "exp": "The interest for the 3rd year is 5324 - 4840 = Rs. 484 on the principal of Rs. 4,840. Rate = (484 / 4840) × 100 = 10% per annum."
  },
  {
    "q": "What is the compound interest on Rs. 10,000 for 1.5 years at 10% per annum, compounded half-yearly?",
    "opts": [
      "Rs. 1,500",
      "Rs. 1,576.25",
      "Rs. 1,600",
      "Rs. 1,655"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "Compounded half-yearly: Rate = 10/2 = 5% per half-year, Time = 1.5 × 2 = 3 periods. Amount = 10000 × (1 + 5/100)³ = 10000 × (1.05)³ = 10000 × 1.157625 = Rs. 11,576.25. CI = 11,576.25 - 10000 = Rs. 1,576.25."
  },
  {
    "q": "A sum of money at simple interest amounts to Rs. 2,240 in 2 years and to Rs. 2,600 in 5 years. What is the principal sum?",
    "opts": [
      "Rs. 1,800",
      "Rs. 1,900",
      "Rs. 2,000",
      "Rs. 2,050"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Compound and Simple Interest",
    "exp": "SI for 3 years (from year 2 to 5) = 2600 - 2240 = Rs. 360. SI for 1 year = 360 / 3 = Rs. 120. SI for 2 years = 120 × 2 = Rs. 240. Principal = Amount after 2 years - SI for 2 years = 2240 - 240 = Rs. 2,000."
  },
  {
    "q": "In what time will Rs. 1,000 amount to Rs. 1,331 at 20% per annum compounded semi-annually?",
    "opts": [
      "1 year",
      "1.5 years",
      "2 years",
      "2.5 years"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "Half-yearly rate = 20/2 = 10% = 0.10. Formula: 1331 = 1000(1 + 0.10)^n ⇒ 1.331 = (1.1)^n ⇒ (1.1)³ = (1.1)^n ⇒ n = 3 half-years = 1.5 years."
  },
  {
    "q": "A sum invested at simple interest triples itself in 10 years. In how many years will it become 5 times itself at the same rate?",
    "opts": [
      "15 years",
      "18 years",
      "20 years",
      "25 years"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Compound and Simple Interest",
    "exp": "Tripling means interest earned is 2P in 10 years. Rate = (2P × 100)/(P × 10) = 20%. To become 5 times, interest earned must be 4P. Time = (4P × 100)/(P × 20) = 20 years."
  },
  {
    "q": "What is the compound interest on Rs. 12,000 for 3 years if the rate of interest is 5% for the 1st year, 6% for the 2nd year, and 8% for the 3rd year?",
    "opts": [
      "Rs. 2,156.40",
      "Rs. 2,246.80",
      "Rs. 2,428.80",
      "Rs. 2,512.40"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "Amount = 12000 × (1 + 5/100) × (1 + 6/100) × (1 + 8/100) = 12000 × 1.05 × 1.06 × 1.08 = 14,428.80. CI = 14,428.80 - 12000 = Rs. 2,428.80."
  },
  {
    "q": "A man borrows Rs. 2,550 to be paid back with compound interest at 4% per annum in two equal annual installments. What is the value of each installment?",
    "opts": [
      "Rs. 1,300",
      "Rs. 1,352",
      "Rs. 1,375",
      "Rs. 1,400"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "Let installment be x. P = x/(1 + 4/100) + x/(1 + 4/100)² = x/(26/25) + x/(26/25)² = (25x/26) + (625x/676) = (650x + 625x)/676 = 1275x / 676. 2550 = 1275x / 676 ⇒ x = (2550 × 676)/1275 = 2 × 676 = Rs. 1,352."
  },
  {
    "q": "If Rs. 8,000 amounts to Rs. 9,261 in 3 years at compound interest, what is the rate of interest per annum?",
    "opts": [
      "4%",
      "5%",
      "6%",
      "7%"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Compound and Simple Interest",
    "exp": "A/P = (1 + r/100)³ ⇒ 9261/8000 = (1 + r/100)³ ⇒ (21/20)³ = (1 + r/100)³ ⇒ 1 + r/100 = 21/20 ⇒ r/100 = 1/20 ⇒ r = 5%."
  },
  {
    "q": "The simple interest on a sum of money for 3 years at 6% per annum is Rs. 90. What would be the compound interest on the same sum at the same rate and for the same period?",
    "opts": [
      "Rs. 92.50",
      "Rs. 94.60",
      "Rs. 95.51",
      "Rs. 96.20"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "SI = (P × 3 × 6)/100 = 90 ⇒ 18P/100 = 90 ⇒ P = Rs. 500. CI = 500[(1 + 0.06)³ - 1] = 500[1.191016 - 1] = 500 × 0.191016 = Rs. 95.508 ≈ Rs. 95.51."
  },
  {
    "q": "At what rate percent per annum will a sum of Rs. 6,000 yield a compound interest of Rs. 1,260 in 2 years?",
    "opts": [
      "8%",
      "10%",
      "12%",
      "15%"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Compound and Simple Interest",
    "exp": "Amount = 6000 + 1260 = Rs. 7,260. A/P = 7260/6000 = 1.21. So (1 + r/100)² = 1.21 ⇒ 1 + r/100 = 1.1 ⇒ r/100 = 0.10 ⇒ r = 10%."
  },
  {
    "q": "A sum of money doubles itself at simple interest in 8 years. What is the rate of interest per annum?",
    "opts": [
      "10%",
      "12%",
      "12.5%",
      "14%"
    ],
    "ans": "C",
    "diff": "Easy",
    "subCat": "Compound and Simple Interest",
    "exp": "Interest earned = P in 8 years. Rate = (P × 100)/(P × 8) = 100/8 = 12.5% per annum."
  },
  {
    "q": "The simple interest on a certain sum for 2 years is Rs. 120, while the compound interest on the same sum for 2 years at the same rate is Rs. 129. What is the rate of interest?",
    "opts": [
      "12%",
      "14%",
      "15%",
      "16%"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "SI for 1 year = 120/2 = Rs. 60. The difference of 129 - 120 = Rs. 9 is the interest on the first year's interest of Rs. 60. Rate = (9 / 60) × 100 = 15% per annum."
  },
  {
    "q": "A bank offers 5% compound interest calculated on half-yearly basis. A customer deposits Rs. 1,600 each on 1st January and 1st July of a year. At the end of the year, what total interest has he earned?",
    "opts": [
      "Rs. 120",
      "Rs. 121",
      "Rs. 122",
      "Rs. 123"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "Half-yearly rate = 2.5% = 0.025. Deposit 1 (runs for 2 half-years): 1600 × (1.025)² = 1681. Deposit 2 (runs for 1 half-year): 1600 × (1.025) = 1640. Total Amount = 1681 + 1640 = 3321. Total Principal deposited = 1600 + 1600 = 3200. Total Interest = 3321 - 3200 = Rs. 121."
  },
  {
    "q": "If the simple interest on a sum of money at 5% per annum for 3 years is Rs. 1,200, what will be the compound interest on the same sum at the same rate for the same time?",
    "opts": [
      "Rs. 1,245",
      "Rs. 1,261",
      "Rs. 1,272",
      "Rs. 1,290"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "SI = (P × 3 × 5)/100 = 1200 ⇒ 15P/100 = 1200 ⇒ P = Rs. 8,000. CI = 8000[(1.05)³ - 1] = 8000[1.157625 - 1] = 8000 × 0.157625 = Rs. 1,261."
  },
  {
    "q": "A sum of money amounts to Rs. 6,690 after 3 years and to Rs. 10,035 after 6 years on compound interest. What is the initial principal sum?",
    "opts": [
      "Rs. 4,120",
      "Rs. 4,260",
      "Rs. 4,460",
      "Rs. 4,680"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "Let A₁ = P(1 + r)³ = 6690 and A₂ = P(1 + r)⁶ = 10035. Dividing gives (1 + r)³ = 10035 / 6690 = 3/2 = 1.5. Substitute back: P(3/2) = 6690 ⇒ P = (6690 × 2)/3 = 4,460."
  },
  {
    "q": "What annual payment will discharge a debt of Rs. 1,025 due in 2 years at 5% compound interest per annum?",
    "opts": [
      "Rs. 525",
      "Rs. 551.25",
      "Rs. 560",
      "Rs. 580"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Compound and Simple Interest",
    "exp": "Debt of 1025 is the present value. Let annual payment be x: x/(1.05) + x/(1.05)² = 1025 ⇒ (20x/21) + (400x/441) = 1025 ⇒ (420x + 400x)/441 = 1025 ⇒ 820x/441 = 1025 ⇒ x = (1025 × 441)/820 = 1.25 × 441 = Rs. 551.25."
  },
  {
    "q": "If a sum of Rs. 1,200 becomes Rs. 1,440 in 2 years at simple interest, what will Rs. 1,800 become in 3 years at the same rate?",
    "opts": [
      "Rs. 2,160",
      "Rs. 2,240",
      "Rs. 2,340",
      "Rs. 2,400"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Compound and Simple Interest",
    "exp": "SI = 1440 - 1200 = Rs. 240 in 2 years. Rate = (240 × 100)/(1200 × 2) = 10% per annum. For Rs. 1,800 in 3 years at 10%: SI = (1800 × 3 × 10)/100 = Rs. 540. Amount = 1800 + 540 = Rs. 2,340."
  }
];

const seedMathSpecialized = async () => {
  try {
    console.log('Connecting to MongoDB for Specialized Math Seeding...');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db');
    console.log('MongoDB Connected.');

    // 1. Find or create Mathematics category
    let mathCategory = await Category.findOne({ name: 'Mathematics' });
    if (!mathCategory) {
      mathCategory = await Category.create({
        name: 'Mathematics',
        description: 'Algebra, Train problems, Compound & Simple Interest, Geometry, and Advanced Math'
      });
      console.log('Created Mathematics category.');
    }

    const mathId = mathCategory._id;

    // 2. Format questions
    const formatted = MATH_SPECIALIZED_QUESTIONS.map(item => ({
      questionText: item.q,
      options: {
        A: item.opts[0],
        B: item.opts[1],
        C: item.opts[2],
        D: item.opts[3]
      },
      correctAnswer: item.ans,
      explanation: item.exp,
      category: mathId,
      subCategory: item.subCat,
      difficulty: item.diff
    }));

    // 3. Insert without duplicate questionText
    let inserted = 0;
    for (const q of formatted) {
      const exists = await Question.findOne({ questionText: q.questionText });
      if (!exists) {
        await Question.create(q);
        inserted++;
      }
    }

    console.log(`Successfully seeded ${inserted} new specialized Math MCQs (Total pool: ${formatted.length})!`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding math specialized MCQs:', err);
    process.exit(1);
  }
};

if (require.main === module) {
  seedMathSpecialized();
}

module.exports = MATH_SPECIALIZED_QUESTIONS;
