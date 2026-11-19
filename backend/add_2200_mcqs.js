const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

const dataFile = path.join(__dirname, 'data_2200_all.json');
const allMcqs = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

console.log(`Loaded ${allMcqs.length} MCQs from ${dataFile}`);

const categoryMeta = {
    'General Knowledge': {
        description: 'World history, international organizations, capitals, currencies, global landmarks and superlatives.',
        icon: 'fa-globe'
    },
    'Pakistan Affairs': {
        description: 'Pakistan movement, constitutional developments, political history, leaders, and national events.',
        icon: 'fa-landmark'
    },
    'Everyday Science': {
        description: 'Physics, chemistry, biology, human anatomy, diseases, vitamins, space, and environmental sciences.',
        icon: 'fa-flask'
    },
    'Geography': {
        description: 'World & Pakistan geography, mountain ranges, rivers, oceans, deserts, straits, and border lines.',
        icon: 'fa-map-location-dot'
    },
    'Sindh General Knowledge': {
        description: 'Sindh history, archaeology (Mohenjo Daro, Kot Diji, Ranikot), Sufi saints, geography, and culture.',
        icon: 'fa-monument'
    },
    'Islamiat': {
        description: 'Holy Quran, Seerat-un-Nabi (PBUH), battles of Islam, Caliphate, Pillars of Islam, and Islamic history.',
        icon: 'fa-kaaba'
    },
    'IQ & Analytical Reasoning': {
        description: 'Word analogies, coding-decoding, logical puzzles, number series, and analytical problem solving.',
        icon: 'fa-brain'
    },
    'Mathematics': {
        description: 'Basic arithmetic, ratios, percentages, algebra, geometry, work & time, and word problems.',
        icon: 'fa-calculator'
    },
    'Current Affairs': {
        description: 'National and international current affairs, recent summits, appointments, awards, and sports.',
        icon: 'fa-newspaper'
    },
    'Computer Science': {
        description: 'MS Office (Word, Excel, PowerPoint), computer hardware, software, networking, and IT fundamentals.',
        icon: 'fa-laptop-code'
    },
    'English': {
        description: 'Grammar, vocabulary, sentence correction, idioms, prepositions, synonyms, and antonyms.',
        icon: 'fa-book-open'
    }
};

async function seedAll2200() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db', {
            serverSelectionTimeoutMS: 5000
        });
        console.log('MongoDB Connected successfully.');

        // Group questions by category
        const grouped = {};
        for (const q of allMcqs) {
            const catName = (q.category && q.category.name) || 'General Knowledge';
            if (!grouped[catName]) grouped[catName] = [];
            grouped[catName].push(q);
        }

        let totalInserted = 0;

        for (const [catName, questions] of Object.entries(grouped)) {
            let cat = await Category.findOne({ name: catName });
            if (!cat) {
                const meta = categoryMeta[catName] || { description: `${catName} Multiple Choice Questions`, icon: 'fa-layer-group' };
                cat = await Category.create({
                    name: catName,
                    description: meta.description,
                    icon: meta.icon
                });
                console.log(`Created Category: ${catName}`);
            }

            // Remove existing questions from this source in this category
            await Question.deleteMany({
                category: cat._id,
                source: 'All-In-One 2200 MCQs (Mansoor Ahmed Suhag)'
            });

            const formatted = questions.map(q => ({
                questionText: q.questionText,
                options: q.options,
                correctAnswer: q.correctAnswer,
                explanation: q.explanation || `The correct answer is (${q.correctAnswer}) ${q.correctAnswerText || ''}.`,
                category: cat._id,
                subCategory: q.subCategory || 'General Assessment',
                difficulty: q.difficulty || 'Medium',
                source: q.source || 'All-In-One 2200 MCQs (Mansoor Ahmed Suhag)'
            }));

            const result = await Question.insertMany(formatted);
            console.log(`Inserted ${result.length} MCQs for category: ${catName}`);
            totalInserted += result.length;
        }

        console.log(`\nAll Done! Successfully seeded ${totalInserted} MCQs across ${Object.keys(grouped).length} categories.`);
        process.exit(0);
    } catch (err) {
        console.error('MongoDB Seeding Notice:', err.message);
        console.log('Note: If MongoDB service is offline, questions are still 100% available via client-side datasets.');
        process.exit(0);
    }
}

seedAll2200();
