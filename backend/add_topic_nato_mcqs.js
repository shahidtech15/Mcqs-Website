// backend/add_topic_nato_mcqs.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

const natoData = require('../frontend/js/data_topic_nato.js');
const natoMcqs = natoData.PRACTICE_50_MCQS || [];

console.log(`Loaded ${natoMcqs.length} NATO Practice MCQs from data_topic_nato.js.`);

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db');
    console.log('Connected to MongoDB successfully.');

    // 1. Setup or find World Organizations category
    let worldOrgCat = await Category.findOne({ name: 'World Organizations' });
    if (!worldOrgCat) {
      worldOrgCat = await Category.create({
        name: 'World Organizations',
        description: 'United Nations, European Union, NATO, Regional Blocs (SCO, BRICS, SAARC, OIC, ASEAN), Financial Institutions (IMF, World Bank, WTO) & Global Treaties.',
        icon: 'fa-earth-americas',
        questionCount: natoMcqs.length,
        subcategoriesCount: 6
      });
      console.log('Created Category: World Organizations');
    } else {
      worldOrgCat.questionCount = (worldOrgCat.questionCount || 0) + natoMcqs.length;
      await worldOrgCat.save();
      console.log('Updated Category: World Organizations with NATO MCQs');
    }

    // 2. Prepare Question documents
    const questionDocs = natoMcqs.map((q, idx) => ({
      questionText: q.questionText || q.question,
      options: [
        { text: q.options.A, isCorrect: q.correctAnswer === 'A' },
        { text: q.options.B, isCorrect: q.correctAnswer === 'B' },
        { text: q.options.C, isCorrect: q.correctAnswer === 'C' },
        { text: q.options.D, isCorrect: q.correctAnswer === 'D' }
      ],
      explanation: q.explanation || '',
      category: worldOrgCat._id,
      subCategory: q.subtopic || 'NATO & Global Security Alliances',
      difficulty: q.difficulty ? q.difficulty.toLowerCase() : 'medium',
      examCitation: q.examCitation || 'CSS / PMS / FPSC'
    }));

    // 3. Upsert / Insert questions avoiding duplicates
    let inserted = 0;
    let skipped = 0;

    for (const doc of questionDocs) {
      const exists = await Question.findOne({ questionText: doc.questionText });
      if (!exists) {
        await Question.create(doc);
        inserted++;
      } else {
        skipped++;
      }
    }

    console.log(`NATO MCQs Seeding Completed: ${inserted} inserted, ${skipped} skipped (already existed).`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding NATO MCQs:', error);
    process.exit(1);
  }
}

seedData();
