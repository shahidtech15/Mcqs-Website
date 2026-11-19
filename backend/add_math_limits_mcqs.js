const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

const MATH_LIMITS_QUESTIONS = [
  {
    "q": "What is the value of the limit: lim (x → 0) [sin(5x) / sin(3x)]?",
    "opts": [
      "3/5",
      "1",
      "5/3",
      "15"
    ],
    "ans": "C",
    "diff": "Easy",
    "subCat": "Limits",
    "exp": "lim (x → 0) [sin(5x) / sin(3x)] = lim (x → 0) [(sin(5x)/(5x) * 5) / (sin(3x)/(3x) * 3)]. Since lim (u → 0) [sin(u)/u] = 1, the limit is (1 * 5) / (1 * 3) = 5/3."
  },
  {
    "q": "Evaluate the limit: lim (x → 0) [(1 - cos(4x)) / x²].",
    "opts": [
      "4",
      "8",
      "16",
      "2"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "Using the standard identity 1 - cos(θ) = 2 sin²(θ/2): 1 - cos(4x) = 2 sin²(2x). Then lim (x → 0) [2 sin²(2x) / x²] = 2 * lim (x → 0) [sin(2x)/x]² = 2 * (2)² = 2 * 4 = 8. Alternatively, applying L'Hôpital's rule twice: 4 sin(4x) / (2x) → 16 cos(4x) / 2 = 8."
  },
  {
    "q": "What is the value of: lim (x → 0) [(tan(x) - sin(x)) / x³]?",
    "opts": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "tan(x) - sin(x) = sin(x)[(1/cos(x)) - 1] = sin(x)(1 - cos(x)) / cos(x). Then [tan(x) - sin(x)] / x³ = [sin(x)/x] * [(1 - cos(x))/x²] * [1/cos(x)]. As x → 0, this evaluates to 1 * (1/2) * 1 = 1/2."
  },
  {
    "q": "Evaluate: lim (x → 0) [(e^(3x) - 1) / ln(1 + 2x)].",
    "opts": [
      "1/2",
      "1",
      "3/2",
      "3"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "Rewrite as [ (e^(3x) - 1)/(3x) * 3 ] / [ (ln(1 + 2x)/(2x)) * 2 ]. Since lim (u → 0) [(e^u - 1)/u] = 1 and lim (v → 0) [ln(1 + v)/v] = 1, the limit equals (1 * 3) / (1 * 2) = 3/2."
  },
  {
    "q": "Find the value of: lim (x → 0) [(√(1 + x) - √(1 - x)) / x].",
    "opts": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "Multiply numerator and denominator by conjugate (√(1 + x) + √(1 - x)): [(1 + x) - (1 - x)] / [x(√(1 + x) + √(1 - x))] = 2x / [x(√(1 + x) + √(1 - x))] = 2 / (√(1 + x) + √(1 - x)). Setting x = 0 gives 2 / (1 + 1) = 1."
  },
  {
    "q": "Evaluate: lim (x → 0) [( (1 + x)^(1/3) - 1 ) / x].",
    "opts": [
      "1/3",
      "1/2",
      "1",
      "3"
    ],
    "ans": "A",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "By standard limit formula lim (x → 0) [(1 + x)^n - 1] / x = n (or by differentiating f(x) = (1 + x)^(1/3) at x = 0): f'(0) = (1/3)(1 + 0)^(-2/3) = 1/3."
  },
  {
    "q": "What is the value of: lim (x → 0) (1 + 3x)^(1/x)?",
    "opts": [
      "1",
      "e",
      "e³",
      "e^(1/3)"
    ],
    "ans": "C",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "This is of the indeterminate form 1^∞. Formula: lim (x → 0) (1 + ax)^(1/x) = e^a. Here a = 3, so the limit is e³."
  },
  {
    "q": "Evaluate the limit: lim (x → 0) (cos x)^(1 / x²).",
    "opts": [
      "1",
      "e",
      "e^(-1/2)",
      "e^(-1)"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Indeterminate form 1^∞. Let L = lim (x → 0) (cos x)^(1/x²). Then ln(L) = lim (x → 0) [ln(cos x) / x²]. Using L'Hôpital: lim (x → 0) [-tan x / (2x)] = -1/2 * 1 = -1/2. Therefore, L = e^(-1/2) = 1/√e."
  },
  {
    "q": "Find the limit: lim (x → ∞) [(x + 5) / (x + 1)]^x.",
    "opts": [
      "e",
      "e²",
      "e⁴",
      "e⁵"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Rewrite [(x + 5)/(x + 1)]^x = [1 + 4/(x + 1)]^x. For form 1^∞, exponent = lim (x → ∞) x * [(x + 5)/(x + 1) - 1] = lim (x → ∞) [4x / (x + 1)] = 4. Hence, the limit is e⁴."
  },
  {
    "q": "Evaluate: lim (x → 2) [(x⁵ - 32) / (x - 2)].",
    "opts": [
      "16",
      "32",
      "64",
      "80"
    ],
    "ans": "D",
    "diff": "Easy",
    "subCat": "Limits",
    "exp": "Using the formula lim (x → a) [(x^n - a^n) / (x - a)] = n * a^(n - 1). Here a = 2, n = 5: 5 * (2)^(5 - 1) = 5 * 2⁴ = 5 * 16 = 80."
  },
  {
    "q": "What is the value of: lim (x → 0) [x² * sin(1/x)]?",
    "opts": [
      "0",
      "1",
      "-1",
      "Does not exist"
    ],
    "ans": "A",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "Since -1 ≤ sin(1/x) ≤ 1 for all x ≠ 0, multiplying by x² gives -x² ≤ x² sin(1/x) ≤ x². Since lim (x → 0) (-x²) = 0 and lim (x → 0) (x²) = 0, by the Squeeze (Sandwich) Theorem, lim (x → 0) [x² sin(1/x)] = 0."
  },
  {
    "q": "Evaluate the limit: lim (x → 0) [|x| / x].",
    "opts": [
      "1",
      "-1",
      "0",
      "Does not exist"
    ],
    "ans": "D",
    "diff": "Easy",
    "subCat": "Limits",
    "exp": "Right-hand limit: as x → 0⁺, |x| = x, so lim (x → 0⁺) [x / x] = 1. Left-hand limit: as x → 0⁻, |x| = -x, so lim (x → 0⁻) [-x / x] = -1. Since LHL ≠ RHL, the limit does not exist."
  },
  {
    "q": "Find the limit: lim (x → ∞) [√(x² + 6x) - x].",
    "opts": [
      "0",
      "3",
      "6",
      "∞"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "Rationalize: [√(x² + 6x) - x] * [√(x² + 6x) + x] / [√(x² + 6x) + x] = [(x² + 6x) - x²] / [√(x² + 6x) + x] = 6x / [x(√(1 + 6/x) + 1)]. As x → ∞, this approaches 6 / (1 + 1) = 3."
  },
  {
    "q": "Evaluate: lim (x → 0) [(5^x - 3^x) / x].",
    "opts": [
      "2",
      "ln(5/3)",
      "ln(15)",
      "ln(2)"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "Using the standard limit lim (x → 0) [(a^x - 1)/x] = ln(a): lim (x → 0) [((5^x - 1) - (3^x - 1)) / x] = ln(5) - ln(3) = ln(5/3)."
  },
  {
    "q": "Evaluate: lim (x → 0) [ln(1 + 4x) / (3x)].",
    "opts": [
      "3/4",
      "1",
      "4/3",
      "4"
    ],
    "ans": "C",
    "diff": "Easy",
    "subCat": "Limits",
    "exp": "lim (x → 0) [ln(1 + 4x) / (3x)] = (4/3) * lim (x → 0) [ln(1 + 4x) / (4x)] = (4/3) * 1 = 4/3."
  },
  {
    "q": "What is: lim (x → 0) [sin(π * cos²(x)) / x²]?",
    "opts": [
      "0",
      "1",
      "π",
      "2π"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Since cos²(x) = 1 - sin²(x), sin(π cos² x) = sin(π(1 - sin² x)) = sin(π - π sin² x) = sin(π sin² x). Then lim (x → 0) [sin(π sin² x) / x²] = lim (x → 0) [sin(π sin² x) / (π sin² x)] * [π (sin x / x)²] = 1 * π * (1)² = π."
  },
  {
    "q": "Evaluate the limit: lim (x → 0) [arctan(2x) / sin(3x)].",
    "opts": [
      "2/3",
      "3/2",
      "1",
      "6"
    ],
    "ans": "A",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "Rewrite as [(arctan(2x)/(2x)) * 2] / [(sin(3x)/(3x)) * 3]. Since lim (u → 0) [arctan(u)/u] = 1 and lim (v → 0) [sin(v)/v] = 1, the result is (1 * 2) / (1 * 3) = 2/3."
  },
  {
    "q": "Evaluate: lim (x → 0) [x * [1/x]], where [.] denotes the greatest integer function.",
    "opts": [
      "0",
      "1",
      "Does not exist",
      "∞"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "By definition of the floor function: 1/x - 1 < [1/x] ≤ 1/x. For x > 0: 1 - x < x[1/x] ≤ 1. As x → 0⁺, both sides tend to 1. For x < 0: 1 ≤ x[1/x] < 1 - x. As x → 0⁻, both sides tend to 1. By the Squeeze Theorem, lim (x → 0) x[1/x] = 1."
  },
  {
    "q": "What is: lim (x → π/4) [(sin x - cos x) / (x - π/4)]?",
    "opts": [
      "1",
      "√2",
      "1/√2",
      "-√2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "sin x - cos x = √2 (sin x cos(π/4) - cos x sin(π/4)) = √2 sin(x - π/4). Let θ = x - π/4. As x → π/4, θ → 0. Then lim (θ → 0) [√2 sin θ / θ] = √2 * 1 = √2. (Alternatively, derivative of sin x - cos x at π/4 is cos(π/4) + sin(π/4) = √2/2 + √2/2 = √2)."
  },
  {
    "q": "Evaluate: lim (x → 0⁺) [x^x].",
    "opts": [
      "0",
      "1",
      "e",
      "Undefined"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Let y = x^x. Then ln(y) = x ln(x) = ln(x) / (1/x). As x → 0⁺, using L'Hôpital's rule: lim (x → 0⁺) [(1/x) / (-1/x²)] = lim (x → 0⁺) [-x] = 0. Therefore, y = e⁰ = 1."
  },
  {
    "q": "Evaluate: lim (x → 0) [(e^x - 1 - x) / x²].",
    "opts": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Using Maclaurin series for e^x: e^x = 1 + x + x²/2! + x³/3! + ... Then e^x - 1 - x = x²/2 + x³/6 + ... Dividing by x² yields 1/2 + x/6 + ... As x → 0, the limit is 1/2."
  },
  {
    "q": "Evaluate: lim (x → 0) [(cos(3x) - cos(5x)) / x²].",
    "opts": [
      "4",
      "8",
      "16",
      "2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Formula: lim (x → 0) [(cos(ax) - cos(bx)) / x²] = (b² - a²) / 2. Here a = 3 and b = 5: (5² - 3²) / 2 = (25 - 9) / 2 = 16 / 2 = 8."
  },
  {
    "q": "Evaluate: lim (x → ∞) [x * sin(1/x)].",
    "opts": [
      "0",
      "1",
      "∞",
      "Does not exist"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "Let y = 1/x. As x → ∞, y → 0. The expression becomes lim (y → 0) [sin(y) / y] = 1."
  },
  {
    "q": "If the function f(x) = (√(1 + kx) - √(1 - kx)) / x for x ≠ 0 is continuous at x = 0, what is the value of f(0)?",
    "opts": [
      "k/2",
      "k",
      "2k",
      "1"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "For continuity, f(0) = lim (x → 0) f(x). Rationalizing the numerator: [(1 + kx) - (1 - kx)] / [x(√(1 + kx) + √(1 - kx))] = 2kx / [x(√(1 + kx) + √(1 - kx))] = 2k / (√(1 + kx) + √(1 - kx)). At x = 0, this evaluates to 2k / (1 + 1) = k. Thus, f(0) = k."
  },
  {
    "q": "What is: lim (n → ∞) [n! / ((n + 1)! - n!)]?",
    "opts": [
      "0",
      "1",
      "e",
      "∞"
    ],
    "ans": "A",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "(n + 1)! - n! = (n + 1)n! - n! = n![(n + 1) - 1] = n * n!. Thus n! / ((n + 1)! - n!) = n! / (n * n!) = 1/n. As n → ∞, 1/n → 0."
  },
  {
    "q": "Evaluate the limit of the Riemann sum: lim (n → ∞) Σ [1 / (n + r)] for r = 1 to n.",
    "opts": [
      "1",
      "ln(2)",
      "ln(3)",
      "1/2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Rewrite as (1/n) Σ [1 / (1 + r/n)]. This is the definition of the definite integral ∫₀¹ [1 / (1 + x)] dx = [ln(1 + x)]₀¹ = ln(2) - ln(1) = ln(2)."
  },
  {
    "q": "Evaluate: lim (x → 0) [(tan(x) - x) / (x - sin(x))].",
    "opts": [
      "1",
      "2",
      "-2",
      "1/2"
    ],
    "ans": "B",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Using series expansions: tan(x) = x + x³/3 + O(x⁵) ⇒ tan(x) - x ≈ x³/3. sin(x) = x - x³/6 + O(x⁵) ⇒ x - sin(x) ≈ x³/6. The limit is (x³/3) / (x³/6) = 6/3 = 2."
  },
  {
    "q": "What is: lim (x → 0⁺) [1 / (1 + e^(1/x))]?",
    "opts": [
      "0",
      "1",
      "1/2",
      "∞"
    ],
    "ans": "A",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "As x → 0⁺, 1/x → +∞, which means e^(1/x) → +∞. Therefore, 1 / (1 + e^(1/x)) → 1 / (1 + ∞) = 0."
  },
  {
    "q": "What is: lim (x → 0⁻) [1 / (1 + e^(1/x))]?",
    "opts": [
      "0",
      "1",
      "1/2",
      "Does not exist"
    ],
    "ans": "B",
    "diff": "Medium",
    "subCat": "Limits",
    "exp": "As x → 0⁻, 1/x → -∞, which means e^(1/x) → 0. Therefore, 1 / (1 + e^(1/x)) → 1 / (1 + 0) = 1."
  },
  {
    "q": "Evaluate: lim (x → 0) [(sin(x) - x + x³/6) / x⁵].",
    "opts": [
      "1/24",
      "1/60",
      "1/120",
      "1/720"
    ],
    "ans": "C",
    "diff": "Hard",
    "subCat": "Limits",
    "exp": "Using Taylor series for sin(x): sin(x) = x - x³/3! + x⁵/5! - ... = x - x³/6 + x⁵/120 - ... Therefore, sin(x) - x + x³/6 = x⁵/120 - O(x⁷). Dividing by x⁵ and taking x → 0 gives 1/120."
  }
];

const seedMathLimits = async () => {
  try {
    console.log('Connecting to MongoDB for Limits Math Seeding...');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db');
    console.log('MongoDB Connected.');

    let mathCategory = await Category.findOne({ name: 'Mathematics' });
    if (!mathCategory) {
      mathCategory = await Category.create({
        name: 'Mathematics',
        description: 'Algebra, Limits & Calculus, Train problems, Interest, and Advanced Math'
      });
      console.log('Created Mathematics category.');
    }

    const mathId = mathCategory._id;

    const formatted = MATH_LIMITS_QUESTIONS.map(item => ({
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

    let inserted = 0;
    for (const q of formatted) {
      const exists = await Question.findOne({ questionText: q.questionText });
      if (!exists) {
        await Question.create(q);
        inserted++;
      }
    }

    console.log(`Successfully seeded ${inserted} new Limits Math MCQs (Total pool: ${formatted.length})!`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding limits MCQs:', err);
    process.exit(1);
  }
};

if (require.main === module) {
  seedMathLimits();
}

module.exports = MATH_LIMITS_QUESTIONS;
