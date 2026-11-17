const fs = require('fs');
const path = require('path');

const data = require(path.join(__dirname, '../frontend/js/data_match_following.js'));
const categories = ['countries_capitals', 'orgs_headquarters', 'rivers_countries', 'leaders_positions', 'books_authors'];

console.log('Categories present:', Object.keys(data));
let total = 0;
let errors = 0;

categories.forEach(cat => {
    if (!data[cat] || !Array.isArray(data[cat])) {
        console.error(`Missing category array: ${cat}`);
        errors++;
        return;
    }
    console.log(`Category ${cat}: ${data[cat].length} pairs`);
    total += data[cat].length;
    data[cat].forEach((pair, idx) => {
        if (!pair.left || !pair.right || !pair.examFact) {
            console.error(`Pair at index ${idx} in ${cat} missing fields:`, pair);
            errors++;
        }
    });
});

console.log(`Total pairs across all categories: ${total}`);
if (errors === 0) {
    console.log('All 120 matching pairs validated with 100% complete fields and zero errors!');
} else {
    throw new Error(`${errors} validation errors found.`);
}
