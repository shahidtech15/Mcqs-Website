const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

const unData = require('../frontend/js/data_topic_un.js');
const unMcqs = unData.PRACTICE_50_MCQS || [];

console.log(`Loaded ${unMcqs.length} United Nations Practice MCQs from data_topic_un.js.`);

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db');
    console.log('Connected to MongoDB successfully.');

    // 1. Setup or find World Organizations category
    let worldOrgCat = await Category.findOne({ name: 'World Organizations' });
    if (!worldOrgCat) {
      worldOrgCat = await Category.create({
        name: 'World Organizations',
        description: 'United Nations, Specialized Agencies, Regional Blocs (NATO, EU, SCO, BRICS, SAARC, OIC, ASEAN), Financial Institutions (IMF, World Bank, WTO) & Global Treaties.',
        icon: 'fa-earth-americas',
        questionCount: unMcqs.length,
        subcategoriesCount: 4
      });
      console.log('Created Category: World Organizations');
    } else {
      worldOrgCat.questionCount = (worldOrgCat.questionCount || 0) + unMcqs.length;
      await worldOrgCat.save();
      console.log('Updated Category: World Organizations');
    }

    // 2. Prepare Question documents
    const questionDocs = unMcqs.map((q, idx) => ({
      questionText: q.questionText || q.question,
      options: [
        { text: q.options.A, isCorrect: q.correctAnswer === 'A' },
        { text: q.options.B, isCorrect: q.correctAnswer === 'B' },
        { text: q.options.C, isCorrect: q.correctAnswer === 'C' },
        { text: q.options.D, isCorrect: q.correctAnswer === 'D' }
      ],
      explanation: q.explanation || '',
      category: worldOrgCat._id,
      subCategory: q.subtopic || 'United Nations & Specialized Agencies',
      difficulty: q.difficulty ? q.difficulty.toLowerCase() : 'medium',
      examCitation: q.examCitation || 'CSS / PMS / FPSC'
    }));

    // 3. Upsert questions
    let inserted = 0;
    for (const qDoc of questionDocs) {
      const existing = await Question.findOne({
        questionText: qDoc.questionText,
        category: worldOrgCat._id
      });
      if (!existing) {
        await Question.create(qDoc);
        inserted++;
      }
    }

    console.log(`Successfully seeded ${inserted} new United Nations MCQs to MongoDB.`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding UN MCQs:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  seedData();
}

module.exports = seedData;
