const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding Math'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const mathQuestions = [
    { q: "What is the value of Pi (to two decimal places)?", opts: ["3.12", "3.14", "3.16", "3.18"], ans: "B", diff: "Easy" },
    { q: "Solve for x: 2x + 5 = 15", opts: ["4", "5", "6", "10"], ans: "B", diff: "Easy" },
    { q: "What is the square root of 144?", opts: ["10", "11", "12", "14"], ans: "C", diff: "Easy" },
    { q: "If a triangle has an angle of 90 degrees, what type of triangle is it?", opts: ["Equilateral", "Isosceles", "Right-angled", "Scalene"], ans: "C", diff: "Easy" },
    { q: "What is 15% of 200?", opts: ["15", "20", "25", "30"], ans: "D", diff: "Medium" },
    { q: "Which prime number comes next after 19?", opts: ["21", "22", "23", "25"], ans: "C", diff: "Medium" },
    { q: "What is the area of a circle with radius 'r'?", opts: ["2πr", "πr²", "2πr²", "π²r"], ans: "B", diff: "Medium" },
    { q: "How many degrees are in a full circle?", opts: ["90", "180", "270", "360"], ans: "D", diff: "Easy" },
    { q: "What is the derivative of x²?", opts: ["2x", "x", "x²", "1"], ans: "A", diff: "Hard" },
    { q: "Solve this sequence: 2, 4, 8, 16, ... What is the next number?", opts: ["24", "30", "32", "64"], ans: "C", diff: "Easy" }
];

const seedMath = async () => {
    try {
        // 1. Create Mathematics category
        let mathCategory = await Category.findOne({ name: 'Mathematics' });
        if (!mathCategory) {
            mathCategory = await Category.create({
                name: 'Mathematics',
                description: 'Algebra, Geometry, Calculus, and general math questions.'
            });
            console.log('Created Mathematics category');
        }
        const mathId = mathCategory._id;

        // 2. Format Questions
        const formattedMath = mathQuestions.map(item => ({
            questionText: item.q,
            options: { A: item.opts[0], B: item.opts[1], C: item.opts[2], D: item.opts[3] },
            correctAnswer: item.ans,
            explanation: `The correct answer is ${item.opts[['A', 'B', 'C', 'D'].indexOf(item.ans)]}.`,
            category: mathId,
            difficulty: item.diff
        }));

        // 3. Insert into DB
        const result = await Question.insertMany(formattedMath);

        console.log(`Successfully added Mathematics category and ${result.length} questions!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Mathematics questions:', err);
        process.exit(1);
    }
};

seedMath();
