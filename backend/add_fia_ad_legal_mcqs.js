const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');
const p1 = require('./data_fia_part1');
const p2 = require('./data_fia_part2');

dotenv.config();

const FIA_AD_LEGAL_QUESTIONS = [
  ...p1.TOPIC_1_ENGLISH,
  ...p1.TOPIC_2_CRPC,
  ...p1.TOPIC_3_QSO,
  ...p2.TOPIC_4_PPC,
  ...p2.TOPIC_5_AMLA,
  ...p2.TOPIC_6_CYBER_SECURITY,
  ...p2.TOPIC_7_FIA_ACT
];

const seedFiaAdLegal = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mcqs_db';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for FIA Assistant Director Legal seeding...');

    // 1. Find or create FIA Assistant Director Legal category
    let fiaCategory = await Category.findOne({ name: 'FIA Assistant Director Legal' });
    if (!fiaCategory) {
      fiaCategory = await Category.create({
        name: 'FIA Assistant Director Legal',
        description: 'FPSC Syllabus: English, CrPC 1898, Qanun-e-Shahadat 1984, PPC 1860, AMLA 2010, Cyber Security/PECA, and FIA Act 1974'
      });
      console.log('Created FIA Assistant Director Legal category.');
    }

    const fiaId = fiaCategory._id;

    // 2. Format questions
    const formatted = FIA_AD_LEGAL_QUESTIONS.map((item, idx) => ({
      questionText: item.q,
      options: {
        A: item.opts[0],
        B: item.opts[1],
        C: item.opts[2],
        D: item.opts[3]
      },
      correctAnswer: item.ans,
      explanation: item.exp,
      category: fiaId,
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

    console.log(`Successfully seeded ${inserted} new FIA Assistant Director Legal MCQs (Total pool: ${formatted.length})!`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding FIA Assistant Director Legal MCQs:', err);
    process.exit(1);
  }
};

if (require.main === module) {
  seedFiaAdLegal();
}

module.exports = FIA_AD_LEGAL_QUESTIONS;

