const sampleWords = [
    {
        word: "ABANDON",
        pos: "Verb",
        meaning: "To give up completely or leave behind",
        primarySyn: "Forsake",
        altSyns: ["Relinquish", "Desert", "Discard"],
        primaryAnt: "Retain",
        altAnts: ["Keep", "Maintain", "Cherish"],
        example: "He had to abandon the sinking ship."
    },
    {
        word: "ABATE",
        pos: "Verb",
        meaning: "To reduce in degree, intensity, or amount",
        primarySyn: "Diminish",
        altSyns: ["Subside", "Lessen", "Wane"],
        primaryAnt: "Intensify",
        altAnts: ["Escalate", "Augment", "Amplify"],
        example: "The storm suddenly began to abate after midnight."
    },
    {
        word: "BENEVOLENT",
        pos: "Adjective",
        meaning: "Well-meaning, kindly, and charitable",
        primarySyn: "Altruistic",
        altSyns: ["Philanthropic", "Generous", "Compassionate"],
        primaryAnt: "Malevolent",
        altAnts: ["Spiteful", "Hostile", "Malicious"],
        example: "The benevolent donor funded scholarships for rural students."
    }
];

function generateMCQs(words) {
    const letters = ["A", "B", "C", "D"];
    const synMCQs = [];
    const antMCQs = [];

    words.forEach((w, idx) => {
        // --- SYNONYM MCQ ---
        const synCorrect = w.primarySyn;
        // Distractors: take primaryAnt, and other words' antonyms or synonyms
        const candidateDistractors = [w.primaryAnt, ...w.altAnts];
        words.forEach(other => {
            if (other.word !== w.word) {
                candidateDistractors.push(other.primarySyn, other.primaryAnt);
            }
        });
        const synDistractors = candidateDistractors
            .filter(d => d.toLowerCase() !== synCorrect.toLowerCase() && !w.altSyns.map(s=>s.toLowerCase()).includes(d.toLowerCase()))
            .slice(0, 3);
        
        const synOptionsList = [synCorrect, ...synDistractors];
        synOptionsList.sort(() => Math.random() - 0.5);
        const synCorrectLetter = letters[synOptionsList.indexOf(synCorrect)];
        
        synMCQs.push({
            _id: `syn_${idx + 1}`,
            questionId: idx + 1,
            questionText: `Choose the word most SIMILAR in meaning (SYNONYM) to: "${w.word}"`,
            options: {
                A: synOptionsList[0],
                B: synOptionsList[1],
                C: synOptionsList[2],
                D: synOptionsList[3]
            },
            correctAnswer: synCorrectLetter,
            correctAnswerText: synCorrect,
            explanation: `"${w.word}" (${w.pos.toLowerCase()}) means "${w.meaning}". The best synonym is "${synCorrect}". Additional synonyms: ${w.altSyns.join(', ')}. Antonyms: ${w.primaryAnt}, ${w.altAnts.join(', ')}.`,
            category: { _id: "cat_synonyms", name: "English Synonyms" },
            subCategory: "CSS & FPSC High-Yield Synonyms",
            difficulty: "Medium",
            source: "Civil Services English Vocabulary Bank"
        });

        // --- ANTONYM MCQ ---
        const antCorrect = w.primaryAnt;
        const candidateAntDistractors = [w.primarySyn, ...w.altSyns];
        words.forEach(other => {
            if (other.word !== w.word) {
                candidateAntDistractors.push(other.primarySyn, other.primaryAnt);
            }
        });
        const antDistractors = candidateAntDistractors
            .filter(d => d.toLowerCase() !== antCorrect.toLowerCase() && !w.altAnts.map(a=>a.toLowerCase()).includes(d.toLowerCase()))
            .slice(0, 3);

        const antOptionsList = [antCorrect, ...antDistractors];
        antOptionsList.sort(() => Math.random() - 0.5);
        const antCorrectLetter = letters[antOptionsList.indexOf(antCorrect)];

        antMCQs.push({
            _id: `ant_${idx + 1}`,
            questionId: idx + 1,
            questionText: `Choose the word most OPPOSITE in meaning (ANTONYM) to: "${w.word}"`,
            options: {
                A: antOptionsList[0],
                B: antOptionsList[1],
                C: antOptionsList[2],
                D: antOptionsList[3]
            },
            correctAnswer: antCorrectLetter,
            correctAnswerText: antCorrect,
            explanation: `"${w.word}" (${w.pos.toLowerCase()}) means "${w.meaning}". The best antonym is "${antCorrect}". Additional antonyms: ${w.altAnts.join(', ')}. Synonyms: ${w.primarySyn}, ${w.altSyns.join(', ')}.`,
            category: { _id: "cat_antonyms", name: "English Antonyms" },
            subCategory: "CSS & FPSC High-Yield Antonyms",
            difficulty: "Medium",
            source: "Civil Services English Vocabulary Bank"
        });
    });

    return { synMCQs, antMCQs };
}

const { synMCQs, antMCQs } = generateMCQs(sampleWords);
console.log('Sample Synonym MCQ:', JSON.stringify(synMCQs[0], null, 2));
console.log('Sample Antonym MCQ:', JSON.stringify(antMCQs[0], null, 2));
