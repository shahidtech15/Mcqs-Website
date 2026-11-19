const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');
const p1 = require('./data_fia_inv_part1');
const p2 = require('./data_fia_inv_part2');

dotenv.config();

const FIA_AD_INVESTIGATION_QUESTIONS = [
  ...p1.TOPIC_1_ENGLISH,
  ...p1.TOPIC_2_GK,
  ...p1.TOPIC_3_SCIENCE,
  ...p2.TOPIC_4_ARITHMETIC,
  ...p2.TOPIC_5_CURRENT_AFFAIRS,
  ...p2.TOPIC_6_PAK_AFFAIRS_ISLAMIC,
  ...p2.TOPIC_7_FIA_ACT
];

const seedFiaAdInvestigation = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mcqs_db';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for FIA Assistant Director Investigation seeding...');

    let fiaCategory = await Category.findOne({ name: 'FIA Assistant Director Investigation' });
    if (!fiaCategory) {
      fiaCategory = await Category.create({
        name: 'FIA Assistant Director Investigation',
        description: 'FPSC Syllabus: English, General Knowledge, Everyday Science, Basic Arithmetic, Current Affairs, Pakistan Affairs & Islamic Studies, and FIA Act 1974'
      });
      console.log('Created FIA Assistant Director Investigation category.');
    }

    const fiaId = fiaCategory._id;

    const formatted = FIA_AD_INVESTIGATION_QUESTIONS.map(item => ({
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

    let inserted = 0;
    for (const q of formatted) {
      const exists = await Question.findOne({ questionText: q.questionText });
      if (!exists) {
        await Question.create(q);
        inserted++;
      }
    }

    console.log(`Successfully seeded ${inserted} new FIA Assistant Director Investigation MCQs (Total pool: ${formatted.length})!`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding FIA Assistant Director Investigation MCQs:', err);
    process.exit(1);
  }
};

if (require.main === module) {
  seedFiaAdInvestigation();
}

module.exports = FIA_AD_INVESTIGATION_QUESTIONS;

