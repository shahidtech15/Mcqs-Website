const data = require('../frontend/js/data_recruitment_prep.js');
console.log('Total jobs in data_recruitment_prep.js:', data.length);
data.forEach((j, i) => {
  console.log(`[${i + 1}] ID: ${j.id} | Scale: ${j.scale} | Title: ${j.title}`);
});
