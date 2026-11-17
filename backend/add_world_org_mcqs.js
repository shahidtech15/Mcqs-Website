const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

async function seedWorldOrg() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db');
    console.log('MongoDB Connected for World Organizations Seeding');

    const jsonPath = path.join(__dirname, '../frontend/data/world_organizations_mcqs_100.json');
    if (!fs.existsSync(jsonPath)) {
      console.error('File not found:', jsonPath);
      process.exit(1);
    }

    const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    let cat = await Category.findOne({ name: 'World Organizations' });
    if (!cat) {
      cat = new Category({
        name: 'World Organizations',
        description: 'United Nations, Specialized Agencies, Regional Blocs (NATO, EU, SCO, BRICS, SAARC, OIC, ASEAN), Financial Institutions (IMF, World Bank, WTO) & Global Treaties.',
        icon: 'fa-earth-americas'
      });
      await cat.save();
      console.log('Category created:', cat.name);
    }

    let inserted = 0;
    for (const q of rawData) {
      const existing = await Question.findOne({ questionText: q.questionText });
      if (!existing) {
        await Question.create({
          questionText: q.questionText,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          category: cat._id,
          subCategory: q.subCategory,
          difficulty: q.difficulty || 'Medium'
        });
        inserted++;
      }
    }

    console.log(`Successfully seeded ${inserted} new World Organizations questions into MongoDB.`);
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  seedWorldOrg();
}

module.exports = seedWorldOrg;
