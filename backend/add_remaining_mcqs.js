const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const currentAffairsQuestions = [
    { q: "Who is the current Secretary-General of the United Nations?", opts: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Boutros Boutros-Ghali"], ans: "C", diff: "Easy" },
    { q: "Which country hosted the 2022 FIFA World Cup?", opts: ["Brazil", "Russia", "Qatar", "South Africa"], ans: "C", diff: "Easy" },
    { q: "What is the capital of Ukraine?", opts: ["Moscow", "Kyiv", "Minsk", "Warsaw"], ans: "B", diff: "Easy" },
    { q: "Which organization is responsible for global health issues?", opts: ["WTO", "WHO", "IMF", "UNICEF"], ans: "B", diff: "Easy" },
    { q: "What is the currency of Japan?", opts: ["Yuan", "Won", "Yen", "Rupee"], ans: "C", diff: "Easy" },
    { q: "Who is the current President of the United States?", opts: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"], ans: "C", diff: "Easy" },
    { q: "Which gas is most abundant in the Earth's atmosphere?", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], ans: "C", diff: "Medium" },
    { q: "Where is the headquarters of the World Bank located?", opts: ["New York", "Geneva", "Washington D.C.", "Paris"], ans: "C", diff: "Medium" },
    { q: "Which country is the largest producer of coffee in the world?", opts: ["Colombia", "Vietnam", "Brazil", "Ethiopia"], ans: "C", diff: "Medium" },
    { q: "What is the largest ocean on Earth?", opts: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], ans: "D", diff: "Easy" }
];

const islamiatQuestions = [
    { q: "How many chapters (Surahs) are there in the Quran?", opts: ["110", "112", "114", "116"], ans: "C", diff: "Easy" },
    { q: "What is the first month of the Islamic calendar?", opts: ["Ramadan", "Muharram", "Safar", "Shawwal"], ans: "B", diff: "Easy" },
    { q: "In which city was Prophet Muhammad (PBUH) born?", opts: ["Medina", "Mecca", "Jerusalem", "Taif"], ans: "B", diff: "Easy" },
    { q: "How many times a day are Muslims required to pray (Salah)?", opts: ["3", "4", "5", "6"], ans: "C", diff: "Easy" },
    { q: "What is the holy book of Islam?", opts: ["Bible", "Torah", "Quran", "Zabur"], ans: "C", diff: "Easy" },
    { q: "On which Prophet was the Zabur revealed?", opts: ["Prophet Musa (AS)", "Prophet Isa (AS)", "Prophet Dawud (AS)", "Prophet Ibrahim (AS)"], ans: "C", diff: "Medium" },
    { q: "Which angel is responsible for bringing revelations to the Prophets?", opts: ["Angel Mikaeel", "Angel Jibraeel", "Angel Israfeel", "Angel Izraeel"], ans: "B", diff: "Medium" },
    { q: "What is the Arabic word for fasting during Ramadan?", opts: ["Zakat", "Hajj", "Sawm", "Salah"], ans: "C", diff: "Medium" },
    { q: "Who was the first Caliph of Islam?", opts: ["Umar (RA)", "Uthman (RA)", "Ali (RA)", "Abu Bakr (RA)"], ans: "D", diff: "Easy" },
    { q: "What is the direction that Muslims face when praying called?", opts: ["Mihrab", "Minbar", "Qibla", "Kaaba"], ans: "C", diff: "Easy" }
];

const seedRemainingCategories = async () => {
    try {
        // 1. Current Affairs
        let caCategory = await Category.findOne({ name: 'Current Affairs' });
        if (!caCategory) {
            caCategory = await Category.create({ name: 'Current Affairs', description: 'Latest news and global affairs' });
        }
        const caId = caCategory._id;

        const formattedCA = currentAffairsQuestions.map(item => ({
            questionText: item.q,
            options: { A: item.opts[0], B: item.opts[1], C: item.opts[2], D: item.opts[3] },
            correctAnswer: item.ans,
            explanation: `The correct answer is ${item.opts[['A', 'B', 'C', 'D'].indexOf(item.ans)]}.`,
            category: caId,
            difficulty: item.diff
        }));

        // 2. Islamiat
        let islamiatCategory = await Category.findOne({ name: 'Islamiat' });
        if (!islamiatCategory) {
            islamiatCategory = await Category.create({ name: 'Islamiat', description: 'Islamic studies and history' });
        }
        const islamiatId = islamiatCategory._id;

        const formattedIslamiat = islamiatQuestions.map(item => ({
            questionText: item.q,
            options: { A: item.opts[0], B: item.opts[1], C: item.opts[2], D: item.opts[3] },
            correctAnswer: item.ans,
            explanation: `The correct answer is ${item.opts[['A', 'B', 'C', 'D'].indexOf(item.ans)]}.`,
            category: islamiatId,
            difficulty: item.diff
        }));

        // 3. Insert both
        const allQuestions = [...formattedCA, ...formattedIslamiat];
        const result = await Question.insertMany(allQuestions);

        console.log(`Successfully added ${result.length} questions for Current Affairs and Islamiat!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding remaining questions:', err);
        process.exit(1);
    }
};

seedRemainingCategories();
