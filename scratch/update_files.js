const fs = require('fs');

// 1. Update frontend/quiz.html
let quizHtml = fs.readFileSync('frontend/quiz.html', 'utf8');
if (!quizHtml.includes('data_islamiat_1000.js')) {
  quizHtml = quizHtml.replace('<script src="js/quiz.js"></script>', '<script src="js/data_islamiat_1000.js"></script>\n    <script src="js/quiz.js"></script>');
  fs.writeFileSync('frontend/quiz.html', quizHtml, 'utf8');
  console.log('✓ Updated frontend/quiz.html with data_islamiat_1000.js');
}

// 2. Update frontend/js/app.js
let appJs = fs.readFileSync('frontend/js/app.js', 'utf8');

// Update cat_islam questionCount and subcategoriesCount
const oldCatIslam = "{ _id: 'cat_islam', name: 'Islamiat', description: 'Holy Quran, Seerat-un-Nabi (PBUH), Battles, Caliphate & Islamic history', icon: 'fa-kaaba', questionCount: 103, subcategoriesCount: 6 }";
const newCatIslam = "{ _id: 'cat_islam', name: 'Islamiat', description: 'Holy Quran, Seerat-un-Nabi (PBUH), Battles, Caliphate & Islamic history', icon: 'fa-kaaba', questionCount: 1103, subcategoriesCount: 10 }";

if (appJs.includes(oldCatIslam)) {
  appJs = appJs.replace(oldCatIslam, newCatIslam);
  console.log('✓ Updated cat_islam in app.js categories array');
}

// Update KNOWN_SUBCATEGORIES["Islamiat"]
const oldKnownIslam = `"Islamiat": [
    "Seerat-un-Nabi", "Quranic Studies", "Hadith & Fiqh", "Caliphate Era", "Islamic Battles"
  ]`;

const newKnownIslam = `"Islamiat": [
    "Holy Quran & Quranic Sciences",
    "Seerat-un-Nabi (PBUH) - Makkan Era",
    "Seerat-un-Nabi (PBUH) - Madani Era",
    "Islamic Battles (Ghazwat & Saraya)",
    "Rightly Guided Caliphate (Khulafa-e-Rashideen)",
    "Pillars of Islam (Arkan-e-Islam & Worship)",
    "Hadith, Sunnah & Compilation",
    "Islamic Jurisprudence (Fiqh & Sharia)",
    "Prophets in Islam (Qisas al-Anbiya)",
    "Companions & Islamic Civilization"
  ]`;

if (appJs.includes(oldKnownIslam)) {
  appJs = appJs.replace(oldKnownIslam, newKnownIslam);
  console.log('✓ Updated KNOWN_SUBCATEGORIES["Islamiat"] in app.js');
}

// Update renderSampleQuestionsFallback in app.js
if (!appJs.includes('window.ISLAMIAT_1000_MCQS')) {
  // Add const islamiat1000 declaration
  appJs = appJs.replace(
    'const all2200 = (typeof window !== \'undefined\' && Array.isArray(window.ALL_2200_MCQS)) ? window.ALL_2200_MCQS : [];',
    'const all2200 = (typeof window !== \'undefined\' && Array.isArray(window.ALL_2200_MCQS)) ? window.ALL_2200_MCQS : [];\n  const islamiat1000 = (typeof window !== \'undefined\' && Array.isArray(window.ISLAMIAT_1000_MCQS)) ? window.ISLAMIAT_1000_MCQS : [];'
  );

  // Update isIslamiat handling
  const oldIslamPool = `} else if (isIslamiat) {
    pool = all2200.filter(q => q.category && q.category.name === 'Islamiat');
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  }`;

  const newIslamPool = `} else if (isIslamiat) {
    const suhagIslam = all2200.filter(q => q.category && q.category.name === 'Islamiat');
    pool = [...islamiat1000, ...suhagIslam];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  }`;

  if (appJs.includes(oldIslamPool)) {
    appJs = appJs.replace(oldIslamPool, newIslamPool);
    console.log('✓ Updated isIslamiat pool in app.js renderSampleQuestionsFallback');
  } else {
    console.log('Notice: oldIslamPool exact match not found in app.js, checking regex');
  }

  fs.writeFileSync('frontend/js/app.js', appJs, 'utf8');
}

// 3. Update frontend/js/quiz.js
let quizJs = fs.readFileSync('frontend/js/quiz.js', 'utf8');

if (quizJs.includes(oldCatIslam)) {
  quizJs = quizJs.replace(oldCatIslam, newCatIslam);
  console.log('✓ Updated cat_islam in quiz.js');
}

const oldQuizSubCat = '"CSS Past Papers": ["English Essay", "Current Affairs", "Pakistan Affairs", "Islamic Studies"]';
const newQuizSubCat = `"CSS Past Papers": ["English Essay", "Current Affairs", "Pakistan Affairs", "Islamic Studies"],
    "Islamiat": [
      "Holy Quran & Quranic Sciences",
      "Seerat-un-Nabi (PBUH) - Makkan Era",
      "Seerat-un-Nabi (PBUH) - Madani Era",
      "Islamic Battles (Ghazwat & Saraya)",
      "Rightly Guided Caliphate (Khulafa-e-Rashideen)",
      "Pillars of Islam (Arkan-e-Islam & Worship)",
      "Hadith, Sunnah & Compilation",
      "Islamic Jurisprudence (Fiqh & Sharia)",
      "Prophets in Islam (Qisas al-Anbiya)",
      "Companions & Islamic Civilization"
    ]`;

if (quizJs.includes(oldQuizSubCat) && !quizJs.includes('"Islamiat": [')) {
  quizJs = quizJs.replace(oldQuizSubCat, newQuizSubCat);
  console.log('✓ Added Islamiat to subcategories in quiz.js');
}

// Add islamiat1000 to quiz pool builder in quiz.js
if (!quizJs.includes('window.ISLAMIAT_1000_MCQS')) {
  quizJs = quizJs.replace(
    'const all2200 = (typeof window !== \'undefined\' && Array.isArray(window.ALL_2200_MCQS)) ? window.ALL_2200_MCQS : [];',
    'const all2200 = (typeof window !== \'undefined\' && Array.isArray(window.ALL_2200_MCQS)) ? window.ALL_2200_MCQS : [];\n    const islamiat1000 = (typeof window !== \'undefined\' && Array.isArray(window.ISLAMIAT_1000_MCQS)) ? window.ISLAMIAT_1000_MCQS : [];'
  );

  const oldQuizIslamPool = `} else if (normCat.includes('islam')) {
        pool = all2200.filter(q => q.category && q.category.name === 'Islamiat');
        if (subCat) pool = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCat.toLowerCase());
    }`;

  const newQuizIslamPool = `} else if (normCat.includes('islam')) {
        const suhagIslam = all2200.filter(q => q.category && q.category.name === 'Islamiat');
        pool = [...islamiat1000, ...suhagIslam];
        if (subCat) pool = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCat.toLowerCase());
    }`;

  if (quizJs.includes(oldQuizIslamPool)) {
    quizJs = quizJs.replace(oldQuizIslamPool, newQuizIslamPool);
    console.log('✓ Updated normCat.includes(islam) pool in quiz.js');
  } else {
    console.log('Notice: oldQuizIslamPool exact match not found in quiz.js, checking with CRLF normalization');
    const normOld = oldQuizIslamPool.replace(/\r\n/g, '\n');
    const normQuiz = quizJs.replace(/\r\n/g, '\n');
    if (normQuiz.includes(normOld)) {
      quizJs = normQuiz.replace(normOld, newQuizIslamPool);
      console.log('✓ Updated normCat.includes(islam) in quiz.js after normalization');
    }
  }

  fs.writeFileSync('frontend/js/quiz.js', quizJs, 'utf8');
}

console.log('Update script completed successfully.');
