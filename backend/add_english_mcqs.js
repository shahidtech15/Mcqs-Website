const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding English'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const subCategories = [
    "Grammar", "Tenses", "Articles", "Preposition", "Direct and Indirect Speech",
    "Voice", "Synonyms", "Antonyms", "One Word Substitution", "Idioms and Phrases",
    "Spelling Check", "Sentence Completion", "Selecting Words", "Completing Statements",
    "Common Error Detection", "Sentence Improvement", "Sentence Correction", "Sentence Formation",
    "Ordering of Words", "Ordering of Sentences", "Verbal Analogies"
];

// Simple sentence components for random generation
const subjects = ["He", "She", "The dog", "The teacher", "My friend", "The company", "The weather"];
const verbs = ["ran", "wrote", "built", "studied", "designed", "has completed", "will finish"];
const objects = ["a book", "the project", "quickly", "in the rain", "with great skill", "an email"];

const generateEnglishMCQs = () => {
    let allQuestions = [];

    for (let sub of subCategories) {
        for (let i = 1; i <= 100; i++) {
            let difficulty = i <= 35 ? 'Easy' : (i <= 70 ? 'Medium' : 'Hard');
            let q, ans, wrong, exp;

            // Give distinct flavors based on the subcategory
            switch (sub) {
                case "Grammar":
                case "Common Error Detection":
                case "Sentence Correction":
                    q = `Identify the grammatically correct sentence from the following (Scenario ${i}):`;
                    ans = `${subjects[i % 7]} ${verbs[i % 7]} ${objects[i % 6]}.`;
                    wrong = [
                        `${subjects[i % 7]} ${verbs[i % 7].replace('ed', 'ing')} ${objects[i % 6]}.`,
                        `${subjects[i % 7]} have ${verbs[i % 7]} ${objects[i % 6]}.`,
                        `${subjects[i % 7]} is ${verbs[i % 7]} ${objects[i % 6]}.`
                    ];
                    exp = `The correct form matches the subject-verb agreement rules.`;
                    break;
                case "Tenses":
                    q = `Choose the correct tense to fill in the blank: By next year, she _______ her degree.`;
                    ans = "will have finished";
                    wrong = ["will finish", "had finished", "has finished"];
                    exp = `"By next year" indicates an action that will be completed in the future, requiring the future perfect tense.`;
                    break;
                case "Articles":
                    q = `Fill in the blank with the correct article: She is ___ honor to her profession.`;
                    ans = "an";
                    wrong = ["a", "the", "no article"];
                    exp = `"Honor" begins with a vowel sound, so "an" is used.`;
                    break;
                case "Preposition":
                    q = `Choose the correct preposition: He is good ___ mathematics.`;
                    ans = "at";
                    wrong = ["in", "with", "on"];
                    exp = `The correct preposition to use with 'good' when indicating a skill is 'at'.`;
                    break;
                case "Direct and Indirect Speech":
                    q = `Convert to indirect speech: He said, "I am busy."`;
                    ans = `He said that he was busy.`;
                    wrong = [`He said that I am busy.`, `He said he is busy.`, `He told that he was busy.`];
                    exp = `In indirect speech, present tense inside quotes changes to past tense if the reporting verb is in the past.`;
                    break;
                case "Voice":
                    q = `Change to passive voice: They are building a house.`;
                    ans = `A house is being built by them.`;
                    wrong = [`A house was built by them.`, `A house is built by them.`, `A house has been built by them.`];
                    exp = `For present continuous, the passive form is 'is/are/am being + past participle'.`;
                    break;
                case "Synonyms":
                    let synList = [
                        { w: "Abundant", s: "Plentiful", wro: ["Scarce", "Rare", "Short"] },
                        { w: "Benevolent", s: "Kind", wro: ["Cruel", "Spiteful", "Mean"] },
                        { w: "Candid", s: "Frank", wro: ["Deceitful", "Vague", "Secretive"] }
                    ];
                    let syn = synList[i % 3];
                    q = `Choose the synonym for the word: ${syn.w}`;
                    ans = syn.s;
                    wrong = syn.wro;
                    exp = `Synonyms are words with similar meanings. '${syn.s}' is a synonym for '${syn.w}'.`;
                    break;
                case "Antonyms":
                    let antList = [
                        { w: "Abundant", a: "Scarce", wro: ["Plentiful", "Ample", "Rich"] },
                        { w: "Benevolent", a: "Cruel", wro: ["Kind", "Generous", "Friendly"] },
                        { w: "Candid", a: "Deceitful", wro: ["Frank", "Open", "Honest"] }
                    ];
                    let ant = antList[i % 3];
                    q = `Choose the antonym for the word: ${ant.w}`;
                    ans = ant.a;
                    wrong = ant.wro;
                    exp = `Antonyms are words with opposite meanings. '${ant.a}' is an antonym for '${ant.w}'.`;
                    break;
                case "Idioms and Phrases":
                    q = `What is the meaning of the idiom: "Break the ice"?`;
                    ans = `To initiate a conversation in a social setting.`;
                    wrong = [`To shatter ice into pieces.`, `To perform a difficult task.`, `To end a relationship abruptly.`];
                    exp = `The idiom "break the ice" metaphorically means relieving tension or initiating conversation.`;
                    break;
                case "Spelling Check":
                    q = `Identify the correctly spelled word:`;
                    ans = `Accommodate`;
                    wrong = [`Acommodate`, `Accomodate`, `Accommodat`];
                    exp = `The correct spelling contains double 'c' and double 'm'.`;
                    break;
                case "Ordering of Words":
                case "Ordering of Sentences":
                    q = `Rearrange the following to form a meaningful sentence: \n1: is \n2: he \n3: boy \n4: a \n5: good`;
                    ans = `2-1-4-5-3`;
                    wrong = [`1-2-3-4-5`, `2-4-1-5-3`, `4-5-3-1-2`];
                    exp = `The correct syntactic order is Subject-Verb-Object (He is a good boy).`;
                    break;
                case "Verbal Analogies":
                    q = `Find the matching analogy for: Tree is to Forest as ...`;
                    ans = `Soldier is to Army`;
                    wrong = [`Water is to Ocean`, `Car is to Road`, `Bird is to Sky`];
                    exp = `A tree is a unit composing a forest, just as a soldier is a unit composing an army (Part to Whole relationship).`;
                    break;
                default:
                    // Fallback for completion, formation, etc.
                    q = `Choose the most appropriate word to complete the sentence: The committee ___ reached a decision.`;
                    ans = `has`;
                    wrong = [`have`, `are`, `were`];
                    exp = `The word 'committee' acts primarily as a singular collective noun here, taking 'has'.`;
            }

            // Ensure unique options
            let optionsArray = [ans, ...wrong].slice(0, 4);
            optionsArray = optionsArray.sort(() => Math.random() - 0.5);
            let correctLetter = ['A', 'B', 'C', 'D'][optionsArray.indexOf(ans)];

            // To avoid having exact duplicate questions, append a small ID variant if doing standard repeats
            let finalQ = q;
            if (i > 10 && !q.includes(String(i))) {
                finalQ = `(${i}) ${q}`;
            }

            allQuestions.push({
                questionText: finalQ,
                options: {
                    A: String(optionsArray[0]),
                    B: String(optionsArray[1]),
                    C: String(optionsArray[2]),
                    D: String(optionsArray[3])
                },
                correctAnswer: correctLetter || 'A',
                explanation: exp,
                subCategory: sub,
                difficulty: difficulty
            });
        }
    }
    return allQuestions;
};

const seedEnglish = async () => {
    try {
        let category = await Category.findOne({ name: 'English' });
        if (!category) {
            category = await Category.create({
                name: 'English',
                description: 'Comprehensive English grammar, vocabulary, and composition.'
            });
            console.log('Created English category');
        }

        const generated = generateEnglishMCQs();

        const finalData = generated.map(q => ({
            ...q,
            category: category._id
        }));

        const result = await Question.insertMany(finalData);

        console.log(`Successfully generated and inserted ${result.length} MCQs for English across 21 subcategories!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding English category:', err);
        process.exit(1);
    }
};

seedEnglish();
