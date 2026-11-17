const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Improved Math Seeding'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const subCategories = [
    "Algebra", "Ratio", "Percentage", "Train problems", "Profit and Loss",
    "Compound and Simple Interest", "Logarithms", "Geometry", "Calculus", "Mensuration", "Work and Time",
    "Average", "Number System", "Progressions", "Speed, time and distance",
    "Permutation and Combination", "Alligation", "Triangles", "Partnership",
    "Height and Distance", "Problems on Ages", "Calendar", "Clock", "Area",
    "Volume and Surface Area", "Problems on Numbers", "Problems on H.C.F and L.C.M",
    "Decimal Fraction", "Simplification", "Square Root and Cube Root", "Surds and Indices",
    "Chain Rule", "Pipes and Cistern", "Boats and Streams", "Races and Games",
    "Stocks and Shares", "Probability", "True Discount", "Bankers Discount",
    "Trigonometry", "Circular Measurement of Angle", "Coordinate Geometry",
    "Mensuration 2D", "Mensuration 3D"
];

// Reusable generator options
function getOptions(ans, isFrac = false) {
    let wrong = new Set();
    while (wrong.size < 3) {
        if (isFrac) {
            wrong.add((Math.random() < 0.5 ? ans * 1.5 : ans * 0.5).toFixed(2));
        } else {
            let offset = Math.floor(Math.random() * 10) + 1;
            let fake = ans + (Math.random() < 0.5 ? offset : -offset);
            if (fake > 0 && fake !== ans) wrong.add(fake);
        }
    }
    let optsArray = [String(ans), ...Array.from(wrong).map(String)].sort(() => Math.random() - 0.5);
    return optsArray;
}

const generateMathMCQs = () => {
    let allQuestions = [];

    for (let sub of subCategories) {
        for (let i = 1; i <= 100; i++) {
            let difficulty = i <= 35 ? 'Easy' : (i <= 70 ? 'Medium' : 'Hard');
            let q, ans, exp;

            // Random base nums
            let a = Math.floor(Math.random() * 20) + 2;
            let b = Math.floor(Math.random() * 15) + 3;
            let c = Math.floor(Math.random() * 10) + 4;
            let template = Math.floor(Math.random() * 3); // 0, 1, or 2

            switch (sub) {
                case "Algebra":
                    if (template === 0) {
                        q = `Solve for x: ${a}x + ${b} = ${a * c + b}`;
                        ans = c;
                        exp = `Step 1: Subtract ${b} from both sides. ${a}x = ${a * c}. Step 2: Divide by ${a}. x = ${ans}.`;
                    } else if (template === 1) {
                        q = `If x - ${a} = ${b}, what is the value of 2x?`;
                        ans = 2 * (a + b);
                        exp = `Step 1: x = ${b} + ${a} = ${a + b}. Step 2: 2x = 2(${a + b}) = ${ans}.`;
                    } else {
                        q = `Evaluate ${a}y - ${b} when y = ${c}.`;
                        ans = (a * c) - b;
                        exp = `Step 1: Substitute y = ${c}. ${a}(${c}) - ${b}. Step 2: ${a * c} - ${b} = ${ans}.`;
                    }
                    break;
                case "Ratio":
                    if (template === 0) {
                        q = `Divide ${a * b * 10} in the ratio ${a}:${b}. What is the smaller part?`;
                        ans = (a * b * 10) / (a + b) * Math.min(a, b);
                    } else {
                        q = `If A:B is ${a}:${b} and A gets $${a * c * 10}, how much does B get?`;
                        ans = b * c * 10;
                    }
                    exp = `Use ratio proportions. Answer is ${ans}.`;
                    break;
                case "Percentage":
                    let p = (Math.floor(Math.random() * 9) + 1) * 10;
                    let amt = a * 100;
                    if (template === 0) {
                        q = `What is ${p}% of ${amt}?`;
                        ans = (p / 100) * amt;
                    } else {
                        q = `If ${p}% of a number is ${amt}, what is the number?`;
                        ans = (amt * 100) / p;
                    }
                    exp = `Use percentage formula (Part/Whole = %/100). Final is ${ans}.`;
                    break;
                case "Calculus":
                    if (template === 0) {
                        q = `Find the derivative of f(x) = ${a}x^${b}.`;
                        ans = `${a * b}x^${b - 1}`;
                        exp = `Use power rule: d/dx[cx^n] = c*n*x^(n-1).`;
                    } else {
                        q = `Find the integral of f(x) = ${a}x.`;
                        ans = `${a / 2}x^2 + C`;
                        exp = `Use power rule for integration: (c*x^2)/2 + C.`;
                    }
                    break;
                case "Geometry":
                    if (template === 0) {
                        q = `What is the area of a rectangle with length ${a} and width ${b}?`;
                        ans = a * b;
                    } else if (template === 1) {
                        q = `What is the perimeter of a square with side length ${c}?`;
                        ans = 4 * c;
                    } else {
                        q = `What is the area of a triangle with base ${a} and height ${b}?`;
                        ans = 0.5 * a * b;
                    }
                    exp = `Apply basic 2D geometric formulas. Answer is ${ans}.`;
                    break;
                case "Probability":
                    if (template === 0) {
                        q = `A bag contains ${a} red balls and ${b} blue balls. Probability of drawing a red ball?`;
                        ans = `${a}/${a + b}`;
                    } else {
                        q = `When rolling a fair 6-sided die, what is the probability of rolling a ${Math.floor(Math.random() * 6) + 1}?`;
                        ans = `1/6`;
                    }
                    exp = `Probability = Favorable Outcomes / Total Outcomes.`;
                    break;
                case "Train problems":
                    if (template === 0) {
                        q = `A train ${a * 10}m long passes a pole in ${b} seconds. Find its speed in m/s.`;
                        ans = (a * 10) / b;
                        exp = `Speed = Distance / Time =  (${a * 10} / ${b}) m/s = ${ans} m/s.`;
                    } else {
                        q = `A train travels at ${a * 5} km/h for ${b} hours. Distance covered?`;
                        ans = (a * 5) * b;
                        exp = `Distance = Speed x Time.`;
                    }
                    break;
                case "Work and Time":
                case "Pipes and Cistern":
                    if (template === 0) {
                        q = `A can do a piece of work in ${a} days. How much work does he do in 1 day?`;
                        ans = `1/${a}`;
                    } else {
                        q = `If A takes ${a} hrs and B takes ${b} hrs to fill a tank, how many hours will they take together?`;
                        ans = ((a * b) / (a + b)).toFixed(2);
                    }
                    exp = `Combine individual rates of work.`;
                    break;
                case "Logarithms":
                    let base = Math.floor(Math.random() * 3) + 2;
                    let power = Math.floor(Math.random() * 4) + 2;
                    if (template === 0) {
                        q = `Find the value of log base ${base} of ${Math.pow(base, power)}.`;
                        ans = power;
                    } else {
                        q = `If log_${base}(x) = ${power}, what is x?`;
                        ans = Math.pow(base, power);
                    }
                    exp = `Translate log form to exponential form.`;
                    break;
                case "Trigonometry":
                    if (template === 0) {
                        q = `In a right triangle, opposite is ${a} and hypotenuse is ${c * 5}. Find sine.`;
                        ans = (a / (c * 5)).toFixed(2);
                    } else {
                        q = `What is the value of tan(45 degrees)?`;
                        ans = 1;
                    }
                    exp = `SOH CAH TOA rules.`;
                    break;
                case "Progressions":
                    if (template === 0) {
                        q = `In an AP with first term ${a} and diff ${b}, find the 10th term.`;
                        ans = a + 9 * b;
                    } else {
                        q = `In a GP with first term ${a} and ratio ${Math.max(b, 2)}, find the 3rd term.`;
                        ans = a * Math.pow(Math.max(b, 2), 2);
                    }
                    exp = `Use AP/GP formula. T_n = a + (n-1)d or T_n = a*r^(n-1).`;
                    break;
                default:
                    // Generic math fallback generator with good number scattering
                    if (template === 0) {
                        q = `Find the sum of ${a * c} and ${b * c}.`;
                        ans = (a * c) + (b * c);
                    } else if (template === 1) {
                        q = `What is the product of ${a} and ${b}?`;
                        ans = a * b;
                    } else {
                        q = `Evaluate ${a * b * c} divided by ${c}.`;
                        ans = a * b;
                    }
                    exp = `Standard arithmetic computation.`;
                    break;
            }

            let optFormat = typeof ans === 'string' && (ans.includes('x') || ans.includes('/')) ? 'string' : 'number';

            let optionsArray = [];
            let correctLetter = 'A';

            if (optFormat === 'string') {
                let w1, w2, w3;
                if (ans.includes('x^')) {
                    w1 = `${a * b}x^${b}`;
                    w2 = `${a * b - 1}x^${b - 1}`;
                    w3 = `${a}x^${b - 1}`;
                } else if (ans.includes('/')) {
                    w1 = `${a + 1}/${b}`;
                    w2 = `${a}/${b + 1}`;
                    w3 = `${b}/${a}`;
                    if (w3 === ans) w3 = `1/2`;
                } else {
                    w1 = ans + "1"; w2 = "None"; w3 = ans + "2";
                }
                optionsArray = [ans, w1, w2, w3].sort(() => Math.random() - 0.5);
            } else {
                let wrong = new Set();
                while (wrong.size < 3) {
                    let offStr = Math.floor(Math.random() * 15) + 1;
                    let fake = Number(ans) + (Math.random() < 0.5 ? offStr : -offStr);
                    // allow negative or decimal
                    if (fake !== Number(ans)) wrong.add(fake);
                }
                optionsArray = [String(ans), ...Array.from(wrong).map(String)].sort(() => Math.random() - 0.5);
            }

            optionsArray = [...new Set(optionsArray)];
            while (optionsArray.length < 4) {
                let fallback = Math.floor(Math.random() * 200) + 1;
                optionsArray.push(String(fallback));
                optionsArray = [...new Set(optionsArray)];
            }

            correctLetter = ['A', 'B', 'C', 'D'][optionsArray.indexOf(String(ans))];

            allQuestions.push({
                questionText: q,
                options: {
                    A: String(optionsArray[0]),
                    B: String(optionsArray[1]),
                    C: String(optionsArray[2]),
                    D: String(optionsArray[3])
                },
                correctAnswer: correctLetter || 'A',
                explanation: exp,
                subCategory: sub,
                difficulty: difficulty
            });
        }
    }
    return allQuestions;
};

const runImprovedSeeder = async () => {
    try {
        let mathCategory = await Category.findOne({ name: 'Mathematics' });
        if (!mathCategory) {
            mathCategory = await Category.create({ name: 'Mathematics', description: 'Advanced Mathematics.' });
        }

        console.log('Purging old static Math questions...');
        await Question.deleteMany({ category: mathCategory._id });

        console.log('Generating completely fresh, dynamic Math questions...');
        const generated = generateMathMCQs();
        const finalData = generated.map(q => ({ ...q, category: mathCategory._id }));

        const result = await Question.insertMany(finalData);

        console.log(`Successfully generated and inserted ${result.length} highly diverse MCQs for Mathematics!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Massive Math category:', err);
        process.exit(1);
    }
};

runImprovedSeeder();
