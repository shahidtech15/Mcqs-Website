const timelineApi = require('../frontend/js/data_world_history_timeline.js');

const events = timelineApi.getAllEvents();
console.log('Total events loaded:', events.length);

const categories = {};
const eras = {};
let errors = [];

events.forEach((ev, i) => {
  categories[ev.category] = (categories[ev.category] || 0) + 1;
  eras[ev.era] = (eras[ev.era] || 0) + 1;

  if (!ev.id) errors.push(`Event #${i} missing id`);
  if (typeof ev.year !== 'number') errors.push(`Event ${ev.id} year is not a number`);
  if (!ev.dateDisplay) errors.push(`Event ${ev.id} missing dateDisplay`);
  if (!ev.title) errors.push(`Event ${ev.id} missing title`);
  if (!ev.category) errors.push(`Event ${ev.id} missing category`);
  if (!ev.era) errors.push(`Event ${ev.id} missing era`);
  if (!ev.significance) errors.push(`Event ${ev.id} missing significance`);
  if (!ev.examMcq || !ev.examMcq.options || !ev.examMcq.correctAnswer) {
    errors.push(`Event ${ev.id} missing complete examMcq`);
  }
});

console.log('\nBreakdown by Category (The 5 requested filters):');
console.log(categories);

console.log('\nBreakdown by Era:');
console.log(eras);

if (errors.length > 0) {
  console.error('\nErrors encountered:', errors);
  process.exit(1);
} else {
  console.log('\nALL WORLD HISTORY DATA PERFECTLY VALIDATED! 0 ERRORS.');
}
