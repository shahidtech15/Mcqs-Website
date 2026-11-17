const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding Subcategories'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const subCategories = [
    "Algebra", "Ratio", "Percentage", "Train problems", "Profit and Loss",
    "Compound and Simple Interest", "Logarithms", "Geometry", "Calculus", "Mensuration"
];

// Helper to generate options based on a correct answer
function generateMathOptions(correctAns, type = 'number', varAmount = 5) {
    let opts = [String(correctAns)];
    while (opts.length < 4) {
        let wrongAns;
        if (type === 'number') {
            wrongAns = String(Number(correctAns) + (Math.floor(Math.random() * varAmount) * (Math.random() < 0.5 ? -1 : 1)) + (Math.random() < 0.5 ? 1 : 2));
        } else {
            wrongAns = String(Number(correctAns) * (Math.random() * 2).toFixed(1));
        }
        if (!opts.includes(wrongAns)) opts.push(wrongAns);
    }
    return opts.sort(() => Math.random() - 0.5); // Shuffle
}

const generateMCQs = () => {
    let allQuestions = [];

    for (let sub of subCategories) {
        for (let i = 1; i <= 50; i++) {
            let coef, exp; // Hoist calculus variables to prevent reference error
            let q, correctAns, type = 'number';
            let difficulty = i <= 20 ? 'Easy' : (i <= 40 ? 'Medium' : 'Hard');

            switch (sub) {
                case "Algebra":
                    let x = Math.floor(Math.random() * 20) + 1;
                    let y = Math.floor(Math.random() * 10) + 1;
                    q = `Solve for a: ${y}a + ${x} = ${y * 5 + x}`;
                    correctAns = 5;
                    break;
                case "Ratio":
                    let a = Math.floor(Math.random() * 5) + 2;
                    let b = Math.floor(Math.random() * 5) + 3;
                    let total = (a + b) * 10;
                    q = `A sum of ${total} is divided in the ratio ${a}:${b}. What is the smaller part?`;
                    correctAns = (total / (a + b)) * Math.min(a, b);
                    break;
                case "Percentage":
                    let percent = (Math.floor(Math.random() * 9) + 1) * 10; // 10,20...90
                    let amount = (Math.floor(Math.random() * 50) + 10) * 10;
                    q = `What is ${percent}% of ${amount}?`;
                    correctAns = (percent / 100) * amount;
                    break;
                case "Train problems":
                    let speed = Math.floor(Math.random() * 40) + 40; // km/h
                    let time = Math.floor(Math.random() * 5) + 2; // hours
                    q = `A train travels at ${speed} km/h for ${time} hours. How much distance did it cover?`;
                    correctAns = speed * time;
                    break;
                case "Profit and Loss":
                    let cp = Math.floor(Math.random() * 500) + 100;
                    let profitP = (Math.floor(Math.random() * 5) + 1) * 10;
                    q = `An item is bought for $${cp} and sold at a profit of ${profitP}%. What is the selling price?`;
                    correctAns = cp + (cp * (profitP / 100));
                    break;
                case "Compound and Simple Interest":
                    let p = 1000;
                    let r = 5;
                    let t = Math.floor(Math.random() * 5) + 1;
                    q = `What is the simple interest on $${p} at ${r}% for ${t} years?`;
                    correctAns = (p * r * t) / 100;
                    break;
                case "Logarithms":
                    let base = Math.floor(Math.random() * 3) + 2; // 2 or 3 or 4
                    let power = Math.floor(Math.random() * 4) + 2;
                    let result = Math.pow(base, power);
                    q = `What is the value of log base ${base} of ${result}?`;
                    correctAns = power;
                    break;
                case "Geometry":
                    let side = Math.floor(Math.random() * 10) + 2;
                    q = `What is the area of a square with side ${side} units?`;
                    correctAns = side * side;
                    break;
                case "Calculus":
                    coef = Math.floor(Math.random() * 5) + 2;
                    exp = Math.floor(Math.random() * 4) + 2;
                    q = `What is the derivative of ${coef}x^${exp}?`;
                    correctAns = `${coef * exp}x^${exp - 1}`;
                    type = 'string';
                    break;
                case "Mensuration":
                    let rCir = Math.floor(Math.random() * 10) + 2;
                    q = `What is the circumference of a circle with radius ${rCir}? (Use π=3.14)`;
                    correctAns = (2 * 3.14 * rCir).toFixed(2);
                    type = 'float';
                    break;
                default:
                    q = "Sample math question";
                    correctAns = 1;
            }

            let optionsArray = type === 'string'
                ? [correctAns, `${coef * exp + 1}x^${exp}`, `${coef}x^${exp - 1}`, `${coef * exp}x^${exp}`].sort(() => Math.random() - 0.5)
                : generateMathOptions(correctAns, type);

            // Ensure unique options
            optionsArray = [...new Set(optionsArray)];
            while (optionsArray.length < 4) {
                optionsArray.push(`Option ${Math.random().toString().slice(2, 5)}`);
            }

            let correctLetter = ['A', 'B', 'C', 'D'][optionsArray.indexOf(String(correctAns))];

            allQuestions.push({
                questionText: q,
                options: {
                    A: String(optionsArray[0]),
                    B: String(optionsArray[1]),
                    C: String(optionsArray[2]),
                    D: String(optionsArray[3])
                },
                correctAnswer: correctLetter || 'A', // Fallback
                explanation: `The correct answer is ${correctAns} because it follows the standard formula for ${sub}.`,
                subCategory: sub,
                difficulty: difficulty
            });
        }
    }
    return allQuestions;
};

const seedAdvMath = async () => {
    try {
        // 1. Get/Create Mathematics category
        let mathCategory = await Category.findOne({ name: 'Mathematics' });
        if (!mathCategory) {
            mathCategory = await Category.create({
                name: 'Mathematics',
                description: 'Advanced math subcategories'
            });
        }

        // 2. Generate 500 questions
        const generated = generateMCQs();

        // Attach ObjectId
        const finalData = generated.map(q => ({
            ...q,
            category: mathCategory._id
        }));

        // 3. Insert into DB
        const result = await Question.insertMany(finalData);

        console.log(`Successfully generated and inserted ${result.length} Advanced Math MCQs across 10 subcategories!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding advanced math:', err);
        process.exit(1);
    }
};

seedAdvMath();
