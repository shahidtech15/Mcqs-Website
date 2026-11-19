const fs = require('fs');
const path = require('path');

// Load part 1 to 4
const p1 = require('./vocab_raw_part1.js');
const p2 = require('./vocab_raw_part2.js');
const p3 = require('./vocab_raw_part3.js');
const p4 = require('./vocab_raw_part4.js');

const allInitial = [...p1, ...p2, ...p3, ...p4];
console.log('Initial total loaded words:', allInitial.length);

const parsed = allInitial.map(line => {
    const parts = line.split('|');
    return {
        word: parts[0].trim().toUpperCase(),
        pos: parts[1].trim(),
        syns: parts[2].split(',').map(s=>s.trim()),
        ants: parts[3].split(',').map(s=>s.trim()),
        meaning: parts[4].trim(),
        example: parts[5].trim(),
        difficulty: parts[6] ? parts[6].trim() : 'Medium'
    };
});

const wordSet = new Set(parsed.map(w => w.word));
console.log('Unique words so far:', wordSet.size);
