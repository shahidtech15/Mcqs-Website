const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding Work and Time'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

// Helper to generate options based on a correct answer
function generateMathOptions(correctAns) {
    let opts = [String(correctAns)];
    while (opts.length < 4) {
        // Since work and time answers are usually numbers or days (e.g. 10, 15, 20)
        let wrongAns = String(Number(correctAns) + (Math.floor(Math.random() * 10) * (Math.random() < 0.5 ? -1 : 1)) + (Math.random() < 0.5 ? 2 : 4));
        if (Number(wrongAns) > 0 && !opts.includes(wrongAns)) {
            opts.push(wrongAns);
        }
    }
    return opts.sort(() => Math.random() - 0.5); // Shuffle
}

const generateWorkAndTime = () => {
    let allQuestions = [];

    // Generate 100 questions
    for (let i = 1; i <= 100; i++) {
        let q, correctAns;

        // Progression: 1-33 Easy, 34-66 Medium, 67-100 Hard
        let difficulty = i <= 33 ? 'Easy' : (i <= 66 ? 'Medium' : 'Hard');

        if (difficulty === 'Easy') {
            // A can do in X days, B can do in Y days. Together?
            let x = Math.floor(Math.random() * 10) + 10; // 10 to 20
            let y = Math.floor(Math.random() * 10) + 20; // 20 to 30
            // Ensure product is nicely divisible for integer answers ideally, but floating is fine
            q = `A can do a piece of work in ${x} days and B can do the same work in ${y} days. If they work together, in how many days will the work be completed?`;
            let ans = (x * y) / (x + y);
            correctAns = ans % 1 === 0 ? ans : ans.toFixed(2);
        } else if (difficulty === 'Medium') {
            // A and B together take X days, A alone takes Y days. B alone?
            let together = Math.floor(Math.random() * 10) + 5; // 5 to 15
            let aAlone = Math.floor(Math.random() * 15) + together + 5; // longer than together
            q = `A and B together can do a piece of work in ${together} days. If A alone can do it in ${aAlone} days, in how many days can B alone complete the work?`;
            let ans = (together * aAlone) / (aAlone - together);
            correctAns = ans % 1 === 0 ? ans : ans.toFixed(2);
        } else {
            // Efficiency (A is twice as good as B)
            let efficiencyMultiplier = Math.floor(Math.random() * 3) + 2; // 2 to 4
            let daysTogether = Math.floor(Math.random() * 15) + 10;
            q = `A is ${efficiencyMultiplier} times as good a workman as B and together they finish a piece of work in ${daysTogether} days. In how many days will A alone finish the work?`;

            // Total capacity = (E + 1)
            // Total work = (E + 1) * days
            // A's time = Total work / E
            let ans = ((efficiencyMultiplier + 1) * daysTogether) / efficiencyMultiplier;
            correctAns = ans % 1 === 0 ? ans : ans.toFixed(2);
        }

        let optionsArray = generateMathOptions(correctAns);

        // Ensure unique options
        optionsArray = [...new Set(optionsArray)];
        while (optionsArray.length < 4) {
            let pad = Number(correctAns) + Math.floor(Math.random() * 10) + 1;
            if (!optionsArray.includes(String(pad))) {
                optionsArray.push(String(pad));
            }
        }

        let correctLetter = ['A', 'B', 'C', 'D'][optionsArray.indexOf(String(correctAns))];

        let explanation = `The correct answer is ${correctAns} days. `;
        if (difficulty === 'Easy') explanation += `Formula for A and B together is (A * B) / (A + B).`;
        else if (difficulty === 'Medium') explanation += `Formula for B alone when A+B is known: (Together * A) / (A - Together).`;
        else explanation += `Using efficiency ratios, total work is (Efficiency A + Efficiency B) * Days Together. Then divide by A's efficiency.`;

        allQuestions.push({
            questionText: q,
            options: {
                A: String(optionsArray[0]) + (optionsArray[0] === String(correctAns) ? "" : ""),
                B: String(optionsArray[1]),
                C: String(optionsArray[2]),
                D: String(optionsArray[3])
            },
            correctAnswer: correctLetter || 'A', // Fallback
            explanation: explanation,
            subCategory: 'Work and Time',
            difficulty: difficulty
        });
    }

    return allQuestions;
};

const seedWorkAndTime = async () => {
    try {
        let mathCategory = await Category.findOne({ name: 'Mathematics' });
        if (!mathCategory) {
            console.error('Mathematics category not found! Please run the main seed script first.');
            process.exit(1);
        }

        const generated = generateWorkAndTime();

        const finalData = generated.map(q => ({
            ...q,
            category: mathCategory._id
        }));

        const result = await Question.insertMany(finalData);

        console.log(`Successfully generated and inserted ${result.length} MCQs for 'Work and Time'!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Work and Time:', err);
        process.exit(1);
    }
};

seedWorkAndTime();
