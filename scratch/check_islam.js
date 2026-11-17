global.window = {};
require('../frontend/js/data_2200.js');

const all2200 = window.ALL_2200_MCQS || [];
console.log('Total in all2200:', all2200.length);

const islam = all2200.filter(q => q.category && q.category.name === 'Islamiat');
console.log('Islamiat count in all2200:', islam.length);

const subCats = {};
islam.forEach(q => {
    subCats[q.subCategory] = (subCats[q.subCategory] || 0) + 1;
});
console.log('Islamiat subcategories in all2200:', subCats);
