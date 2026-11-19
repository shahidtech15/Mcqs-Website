global.window = global;
require('../frontend/js/data_timeline.js');

const events = window.HISTORICAL_TIMELINE_DATA.getAllEvents();
console.log('Total events in data_timeline.js:', events.length);
console.log('Categories:', [...new Set(events.map(e => e.category))]);
console.log('Eras:', [...new Set(events.map(e => e.era))]);

console.log('\nCategory breakdown:');
const catCount = {};
events.forEach(e => { catCount[e.category] = (catCount[e.category] || 0) + 1; });
console.log(catCount);

console.log('\nPakistan one-liners length:', window.HISTORICAL_TIMELINE_DATA.getPakistanOneLiners().length);
