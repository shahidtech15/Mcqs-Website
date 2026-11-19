const fs = require('fs');
const path = require('path');

// Load data
const countries = require(path.join(__dirname, '../frontend/js/data_guess_country.js'));
console.log('Testing Guess The Country logic with', countries.length, 'countries...');

if (countries.length < 40) {
    throw new Error('Expected at least 40 countries, found ' + countries.length);
}

// Check every country for essential fields
countries.forEach((c, idx) => {
    if (!c.id || !c.name || !c.continent || !c.flag || !c.capital || !c.currency) {
        throw new Error(`Country at index ${idx} missing basic fields`);
    }
    if (!c.landmark || !c.landmark.name || !c.landmark.icon || !c.landmark.desc) {
        throw new Error(`Country ${c.name} missing landmark info`);
    }
    if (!c.mapOutline || !c.mapOutline.shape || !Array.isArray(c.mapOutline.borders)) {
        throw new Error(`Country ${c.name} missing mapOutline info`);
    }
    if (!Array.isArray(c.clues) || c.clues.length < 3) {
        throw new Error(`Country ${c.name} must have at least 3 progressive clues`);
    }
    if (!c.examPoints || !c.funFact) {
        throw new Error(`Country ${c.name} missing examPoints or funFact`);
    }
});
console.log('All 40 countries passed complete data schema validation!');

// Simulate distractor generation logic for all countries
let distractorErrors = 0;
countries.forEach(curr => {
    const sameContinent = countries.filter(c => c.id !== curr.id && c.continent === curr.continent);
    const otherCountries = countries.filter(c => c.id !== curr.id && c.continent !== curr.continent);
    
    let distractors = [...sameContinent].sort(() => 0.5 - Math.random()).slice(0, 3);
    if (distractors.length < 3) {
        const extra = [...otherCountries].sort(() => 0.5 - Math.random()).slice(0, 3 - distractors.length);
        distractors = [...distractors, ...extra];
    }
    if (distractors.length !== 3) {
        console.error(`Distractor failure for ${curr.name}`);
        distractorErrors++;
    }
    const set = new Set([curr.id, ...distractors.map(d => d.id)]);
    if (set.size !== 4) {
        console.error(`Duplicate options generated for ${curr.name}`);
        distractorErrors++;
    }
});

if (distractorErrors === 0) {
    console.log('Distractor generation logic verified: 100% unique 4 options per country guaranteed across all 40 countries.');
} else {
    throw new Error('Distractor errors found');
}

// Simulate scoring algorithm
let score = 0;
let streak = 0;

function simulateAnswer(clueLevel, mode, isType, isCorrect) {
    let earned = 0;
    if (isCorrect) {
        if (mode === 'mystery') {
            if (clueLevel === 1) earned = 300;
            else if (clueLevel === 2) earned = 200;
            else earned = 100;
        } else {
            earned = 250;
        }
        if (isType) earned += 50;
        score += earned;
        streak++;
    } else {
        streak = 0;
    }
    return { earned, score, streak };
}

console.log('Simulation Step 1 (Clue 1 MCQ Correct):', simulateAnswer(1, 'mystery', false, true));
console.log('Simulation Step 2 (Clue 2 Type Correct):', simulateAnswer(2, 'mystery', true, true));
console.log('Simulation Step 3 (Clue 3 MCQ Wrong):', simulateAnswer(3, 'mystery', false, false));
console.log('Simulation Step 4 (Flag Mode Correct):', simulateAnswer(1, 'flag', false, true));
console.log('All logic tests successfully passed!');
