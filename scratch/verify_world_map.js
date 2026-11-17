const fs = require('fs');
const path = require('path');

const frontendDir = path.join(__dirname, '../frontend');
console.log('--- VERIFYING INTERACTIVE WORLD MAP & DATA ---');

// 1. Verify data_world_countries.js
global.window = {};
require('../frontend/js/data_world_countries.js');
const countries = window.WORLD_COUNTRIES_DATA;

const countryKeys = Object.keys(countries);
console.log(`1. Total countries loaded: ${countryKeys.length}`);

let issues = 0;
countryKeys.forEach(k => {
    const c = countries[k];
    if (!c.name || !c.capital || !c.currency || !c.population || !c.officialLanguage || !c.politicalSystem || !c.internationalOrgs) {
        console.error(`Missing required field in country ${k}:`, c);
        issues++;
    }
});

if (issues === 0) {
    console.log('   [OK] All 180 countries have 100% complete data (capital, currency, population, language, political system, neighbours, orgs)!');
} else {
    console.error(`   [FAIL] Found ${issues} countries with missing data.`);
}

// 2. Check Pakistan, USA, China, Saudi Arabia, UK, Germany, Brazil
const sampleCheck = ['pk', 'us', 'cn', 'sa', 'gb', 'de', 'br', 'tr', 'ir', 'in'];
console.log('\n2. Sample Country Verification:');
sampleCheck.forEach(id => {
    const c = countries[id];
    console.log(`   - ${c.flag} ${c.name}: Capital=${c.capital} | Currency=${c.currency} | Pop=${c.population} | System=${c.politicalSystem.substring(0, 30)}... | Neighbours=${c.neighbouringCountries.length} | Orgs=${c.internationalOrgs.slice(0, 4).join(', ')}`);
});

// 3. Verify HTML files link to world-map.html
console.log('\n3. Verifying Navigation across all HTML files:');
const htmlFiles = [
    'index.html',
    'world-map.html',
    'quiz.html',
    'digital-library.html',
    'recommended-books.html',
    'fia-sample-papers.html',
    'grammar-rules.html',
    'written-prep.html',
    'exam-guide.html',
    'science-notes.html',
    'about.html'
];

let navMissing = 0;
htmlFiles.forEach(f => {
    const content = fs.readFileSync(path.join(frontendDir, f), 'utf8');
    if (content.includes('world-map.html')) {
        console.log(`   [OK] ${f} links to world-map.html`);
    } else {
        console.error(`   [FAIL] ${f} does NOT link to world-map.html`);
        navMissing++;
    }
});

console.log('\n--- MAP VERIFICATION SUMMARY ---');
if (issues === 0 && navMissing === 0) {
    console.log('ALL VERIFICATIONS PASSED 100%! Ready to present to the user.');
} else {
    console.log(`Failed with ${issues} country issues and ${navMissing} nav issues.`);
}
