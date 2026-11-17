const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

const data = require('../frontend/js/data_synonyms_antonyms.js');
const synMCQs = data.SYNONYMS_MCQS || [];
const antMCQs = data.ANTONYMS_MCQS || [];

console.log(`Loaded ${synMCQs.length} Synonym MCQs and ${antMCQs.length} Antonym MCQs.`);

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db');
    console.log('Connected to MongoDB successfully.');

    // 1. Setup English Synonyms category
    let synCat = await Category.findOne({ name: 'English Synonyms' });
    if (!synCat) {
      synCat = await Category.create({
        name: 'English Synonyms',
        description: '2,000 High-Yield Synonym MCQs with academic definitions, parts of speech, and contextual example sentences for CSS, PMS, FPSC, PPSC, NTS, and GRE examinations.',
        icon: 'fa-spell-check',
        questionCount: synMCQs.length,
        subcategoriesCount: 4
      });
      console.log('Created Category: English Synonyms');
    } else {
      synCat.questionCount = synMCQs.length;
      await synCat.save();
      console.log('Updated Category: English Synonyms');
    }

    // 2. Setup English Antonyms category
    let antCat = await Category.findOne({ name: 'English Antonyms' });
    if (!antCat) {
      antCat = await Category.create({
        name: 'English Antonyms',
        description: '2,000 High-Yield Antonym MCQs with contrasting words, comprehensive explanations, and illustrative sentences targeting competitive examinations.',
        icon: 'fa-arrows-split-up-and-left',
        questionCount: antMCQs.length,
        subcategoriesCount: 4
      });
      console.log('Created Category: English Antonyms');
    } else {
      antCat.questionCount = antMCQs.length;
      await antCat.save();
      console.log('Updated Category: English Antonyms');
    }

    // Prepare questions for insertion
    const batchSize = 500;

    // Remove existing questions for clean seed
    await Question.deleteMany({ 'category': synCat._id });
    console.log('Cleared previous English Synonyms questions.');

    const synDocs = synMCQs.map(q => ({
      questionText: q.questionText || q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      category: synCat._id,
      subCategory: q.subCategory || 'Synonyms',
      difficulty: q.difficulty || 'Medium'
    }));

    for (let i = 0; i < synDocs.length; i += batchSize) {
      const slice = synDocs.slice(i, i + batchSize);
      await Question.insertMany(slice);
      console.log(`Inserted Synonyms batch: ${i + slice.length} / ${synDocs.length}`);
    }

    await Question.deleteMany({ 'category': antCat._id });
    console.log('Cleared previous English Antonyms questions.');

    const antDocs = antMCQs.map(q => ({
      questionText: q.questionText || q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      category: antCat._id,
      subCategory: q.subCategory || 'Antonyms',
      difficulty: q.difficulty || 'Medium'
    }));

    for (let i = 0; i < antDocs.length; i += batchSize) {
      const slice = antDocs.slice(i, i + batchSize);
      await Question.insertMany(slice);
      console.log(`Inserted Antonyms batch: ${i + slice.length} / ${antDocs.length}`);
    }

    console.log('All 4,000 MCQs successfully seeded to MongoDB!');
    process.exit(0);
  } catch (err) {
    console.error('Seeder Error:', err.message);
    process.exit(1);
  }
}

seedData();
