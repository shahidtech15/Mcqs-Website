const data = require('../frontend/js/data_currency_exchange.js');
console.log('Currencies count:', data.currencies.length);
console.log('Central banks count:', data.centralBanks.length);
console.log('Exchange concepts count:', data.exchangeConcepts.length);
console.log('Timeline milestones count:', data.currencyHistoryTimeline.length);
console.log('Quiz questions count:', data.quiz.length);

console.log('Sample currency:', data.currencies[0].code, data.currencies[0].name);
console.log('Sample central bank:', data.centralBanks[0].acronym, data.centralBanks[0].name);
console.log('Sample concept:', data.exchangeConcepts[0].id, data.exchangeConcepts[0].title);
console.log('Sample timeline:', data.currencyHistoryTimeline[0].year, data.currencyHistoryTimeline[0].title);
console.log('Sample quiz question:', data.quiz[0].id, data.quiz[0].question);
