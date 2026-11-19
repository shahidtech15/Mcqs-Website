const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding 1,000 Islamiat MCQs'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

const seedIslamiat = async () => {
    try {
        let category = await Category.findOne({ name: 'Islamiat' });
        if (!category) {
            category = await Category.create({
                name: 'Islamiat',
                description: 'Holy Quran, Seerat-un-Nabi (PBUH), Battles, Caliphate & Islamic history'
            });
            console.log('Created Islamiat category in database');
        }

        // Load 1,000 curated questions from data_islamiat_1000.json
        const jsonPath = path.join(__dirname, 'data_islamiat_1000.json');
        if (!fs.existsSync(jsonPath)) {
            console.error(`Cannot find ${jsonPath}`);
            process.exit(1);
        }

        const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        console.log(`Loaded ${rawData.length} verified Islamiat MCQs from JSON`);

        // Check if existing questions already exist and wipe or append
        const existingCount = await Question.countDocuments({ category: category._id });
        console.log(`Existing Islamiat questions in DB: ${existingCount}`);

        const finalData = rawData.map(q => ({
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            difficulty: q.difficulty || 'Medium',
            subCategory: q.subCategory,
            category: category._id
        }));

        const result = await Question.insertMany(finalData);

        console.log(`Successfully seeded ${result.length} authentic MCQs for 'Islamiat'!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Islamiat:', err);
        process.exit(1);
    }
};

seedIslamiat();
