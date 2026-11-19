const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding Metallurgy MCQs'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const subCategories = [
    "Introduction to Metallurgy",
    "Physical Metallurgy",
    "Extractive Metallurgy",
    "Mechanical Metallurgy",
    "Material Science in Metallurgy",
    "Iron Making in Metallurgy",
    "Steel Making in Metallurgy",
    "Foundry Metallurgy",
    "Welding Metallurgy",
    "Metallurgy of Nuclear Metals",
    "ElectroMetallurgy and Corrosion",
    "Metallurgical Analysis",
    "Metallurgical Testing and Inspection",
    "Metallurgical Thermodynalics and Kinetics",
    "Mineral Dressing in Metallurgy",
    "Powder Metallurgy",
    "Fuels, Furance and Refractories Technology",
    "Physics of Metals in Metallurgy",
    "Miscellaneous in Metallurgy"
];

// Provide themes and entities so we can procedurally generate MCQs
const subcategoryThemes = {
    "Introduction to Metallurgy": { entity: ["metal extraction", "ore processing", "smelting", "ancient metallurgy", "bronze age", "industrial revolution"], action: ["historical impact", "fundamental principle", "process overview", "classification"] },
    "Physical Metallurgy": { entity: ["crystal lattice", "grain boundary", "phase diagram", "solid solution", "dislocation", "vacancy"], action: ["microstructure formation", "phase transformation", "crystal growth", "solidification"] },
    "Extractive Metallurgy": { entity: ["pyrometallurgy", "hydrometallurgy", "electrometallurgy", "calcination", "roasting", "leaching"], action: ["ore purification", "metal reduction", "slag formation", "solvent extraction"] },
    "Mechanical Metallurgy": { entity: ["tensile testing", "fatigue", "creep", "hardness", "plastic deformation", "yield strength"], action: ["stress analysis", "strain measurement", "failure analysis", "work hardening"] },
    "Material Science in Metallurgy": { entity: ["composite materials", "polymers", "ceramics", "nanomaterials", "smart materials", "superalloys"], action: ["property enhancement", "structural application", "thermal resistance", "material substitution"] },
    "Iron Making in Metallurgy": { entity: ["blast furnace", "pig iron", "coke", "limestone", "iron ore", "tuyeres"], action: ["reduction of iron", "slag removal", "carbon absorption", "thermal efficiency"] },
    "Steel Making in Metallurgy": { entity: ["Bessemer process", "open-hearth furnace", "BOF (Basic Oxygen Furnace)", "electric arc furnace", "stainless steel", "carbon steel"], action: ["decarburization", "alloying", "impurity oxidation", "scrap melting"] },
    "Foundry Metallurgy": { entity: ["sand casting", "die casting", "investment casting", "pattern making", "mold", "riser"], action: ["metal pouring", "shrinkage control", "solidification control", "defect prevention"] },
    "Welding Metallurgy": { entity: ["arc welding", "TIG welding", "MIG welding", "heat-affected zone (HAZ)", "filler metal", "flux"], action: ["joint fusion", "weld pool shielding", "residual stress formation", "microstructural change"] },
    "Metallurgy of Nuclear Metals": { entity: ["uranium", "plutonium", "zirconium", "thorium", "cladding", "neutron absorber"], action: ["fission reaction", "radiation shielding", "fuel fabrication", "isotope separation"] },
    "ElectroMetallurgy and Corrosion": { entity: ["electroplating", "anodizing", "galvanic cell", "cathodic protection", "rust", "passivation"], action: ["metal deposition", "oxidation", "sacrificial protection", "ion transfer"] },
    "Metallurgical Analysis": { entity: ["spectroscopy", "chromatography", "wet chemistry", "titration", "mass spectrometry", "X-ray fluorescence (XRF)"], action: ["elemental composition", "trace analysis", "chemical characterization", "concentration measurement"] },
    "Metallurgical Testing and Inspection": { entity: ["non-destructive testing (NDT)", "ultrasonic testing", "radiography", "magnetic particle inspection", "dye penetrant", "microscopy"], action: ["flaw detection", "quality assurance", "crack identification", "internal inspection"] },
    "Metallurgical Thermodynalics and Kinetics": { entity: ["Gibbs free energy", "enthalpy", "entropy", "activation energy", "Arrhenius equation", "equilibrium constant"], action: ["spontaneity prediction", "reaction rate", "phase equilibrium", "heat transfer"] },
    "Mineral Dressing in Metallurgy": { entity: ["comminution", "froth flotation", "magnetic separation", "gravity concentration", "tailings", "crusher"], action: ["particle size reduction", "mineral separation", "gangue removal", "ore enrichment"] },
    "Powder Metallurgy": { entity: ["metal powder", "compaction", "sintering", "atomization", "porosity", "lubricant"], action: ["particle bonding", "density increase", "near-net-shape manufacturing", "powder blending"] },
    "Fuels, Furance and Refractories Technology": { entity: ["coal", "natural gas", "crucible", "fireclay", "silica brick", "induction heating"], action: ["combustion", "heat containment", "thermal insulation", "temperature regulation"] },
    "Physics of Metals in Metallurgy": { entity: ["electrical conductivity", "thermal conductivity", "magnetism", "electron sea model", "band theory", "superconductivity"], action: ["electron flow", "heat dissipation", "magnetic domain alignment", "energy gap formation"] },
    "Miscellaneous in Metallurgy": { entity: ["recycling", "environmental regulations", "safety standards", "emerging technologies", "economic factors", "history of metals"], action: ["sustainability", "compliance", "innovation", "cost analysis"] },

    // For the remaining 200 "Main Metallurgy" questions
    "Main Metallurgy": { entity: ["general metal property", "alloy characteristic", "metallurgical engineering principle", "advanced material processing"], action: ["broad application", "fundamental analysis", "industrial implementation", "overall performance"] }
};


const generateMetallurgyMCQs = (categoryId) => {
    let allQuestions = [];

    // Combine standard 19 subCategories loops + 1 loop for Main Metallurgy
    const sectionsToProcess = [...subCategories];

    for (let subCat of sectionsToProcess) {
        let theme = subcategoryThemes[subCat];
        let entities = theme.entity;
        let actions = theme.action;

        // 100 MCQs for normal subcats, 300 for Physics of Metals
        let targetCount = subCat === "Physics of Metals in Metallurgy" ? 300 : 100;

        for (let i = 1; i <= targetCount; i++) {
            let entity1 = entities[i % entities.length];
            let entity2 = entities[(i + 1) % entities.length];
            let entity3 = entities[(i + 2) % entities.length];
            let action = actions[i % actions.length];

            let difficulty = i <= 30 ? 'Easy' : (i <= 70 ? 'Medium' : 'Hard');
            let questionTemplateDecider = i % 4;
            let q, ans, wrong, exp;

            if (questionTemplateDecider === 0) {
                q = `Which of the following is most closely associated with the ${action} of a ${entity1}?`;
                ans = `Phenomenon related to ${entity1}`;
                wrong = [`Property of ${entity2}`, `Characteristic of ${entity3}`, `Unrelated concept`];
                exp = `The ${action} of ${entity1} is a fundamental concept in ${subCat}, distinguishing it from ${entity2} and ${entity3}.`;
            } else if (questionTemplateDecider === 1) {
                q = `In the context of ${subCat}, what role does ${entity2} play during ${action}?`;
                ans = `Primary role during ${action}`;
                wrong = [`Secondary inactive role`, `Acts as an inhibitor`, `Has no defined role`];
                exp = `During ${action}, ${entity2} takes on the primary role as dictated by the principles of ${subCat}.`;
            } else if (questionTemplateDecider === 2) {
                q = `A key difference between ${entity1} and ${entity2} lies in their respective ${action}. Which statement is true?`;
                ans = `${entity1} has a distinct ${action} compared to ${entity2}`;
                wrong = [`Both have identical ${action}`, `${entity2} is unaffected by ${action}`, `Neither experiences ${action}`];
                exp = `Understanding the distinct ${action} helps differentiate between ${entity1} and ${entity2} in metallurgical studies.`;
            } else {
                q = `Identify the correct term for the ${action} involving ${entity3} in ${subCat}.`;
                ans = `Specific term for ${entity3}'s ${action}`;
                wrong = [`Incorrect term A`, `Incorrect term B`, `Incorrect term C`];
                exp = `The specific term for ${entity3}'s ${action} is a canonical definition within ${subCat}.`;
            }

            let options = [ans, ...wrong].sort(() => Math.random() - 0.5);
            let correctLetter = ['A', 'B', 'C', 'D'][options.indexOf(ans)];

            allQuestions.push({
                questionText: `Q${i}: ${q}`,
                options: { A: options[0], B: options[1], C: options[2], D: options[3] },
                correctAnswer: correctLetter,
                explanation: exp,
                category: categoryId,
                subCategory: subCat,
                difficulty: difficulty
            });
        }
    }

    // 200 Questions logic for Main Metallurgy
    let mainTheme = subcategoryThemes["Main Metallurgy"];
    let mainEntities = mainTheme.entity;
    let mainActions = mainTheme.action;

    for (let i = 1; i <= 200; i++) {
        let entity1 = mainEntities[i % mainEntities.length];
        let entity2 = mainEntities[(i + 1) % mainEntities.length];
        let entity3 = mainEntities[(i + 2) % mainEntities.length];
        let action = mainActions[i % mainActions.length];

        let difficulty = i <= 60 ? 'Easy' : (i <= 140 ? 'Medium' : 'Hard');
        let questionTemplateDecider = i % 4;
        let q, ans, wrong, exp;

        if (questionTemplateDecider === 0) {
            q = `Which of the following describes the ${action} associated with ${entity1}?`;
            ans = `Phenomenon related to ${entity1}`;
            wrong = [`Property of ${entity2}`, `Characteristic of ${entity3}`, `Unrelated concept`];
            exp = `The ${action} of ${entity1} is a core broad concept in general Metallurgy.`;
        } else if (questionTemplateDecider === 1) {
            q = `When evaluating Main Metallurgy, what impact does ${entity2} have on ${action}?`;
            ans = `Primary determinant during ${action}`;
            wrong = [`Minimal inactive role`, `Acts as a full deterrent`, `Has no correlation`];
            exp = `During ${action}, ${entity2} is a primary determinant as dictated by general metallurgical studies.`;
        } else if (questionTemplateDecider === 2) {
            q = `A fundamental distinction between ${entity1} and ${entity2} involves their ${action}. Which statement represents this best?`;
            ans = `${entity1} requires distinct ${action} compared to ${entity2}`;
            wrong = [`Both have identical ${action} parameters`, `${entity2} is unaffected by ${action}`, `Neither handles ${action}`];
            exp = `Understanding the distinct ${action} helps separate core properties between ${entity1} and ${entity2}.`;
        } else {
            q = `What is the defined terminology for the ${action} involving ${entity3} broadly in Metallurgy?`;
            ans = `Accepted notation for ${entity3}'s ${action}`;
            wrong = [`False notation A`, `False notation B`, `False notation C`];
            exp = `The terminology for ${entity3}'s ${action} is a canonical definition within the discipline.`;
        }

        let options = [ans, ...wrong].sort(() => Math.random() - 0.5);
        let correctLetter = ['A', 'B', 'C', 'D'][options.indexOf(ans)];

        allQuestions.push({
            questionText: `Q${i} (Main): ${q}`,
            options: { A: options[0], B: options[1], C: options[2], D: options[3] },
            correctAnswer: correctLetter,
            explanation: exp,
            category: categoryId,
            subCategory: "Main Metallurgy",
            difficulty: difficulty
        });
    }

    return allQuestions;
};

const seedMetallurgy = async () => {
    try {
        let category = await Category.findOne({ name: 'Metallurgical Engineering' });
        if (!category) {
            category = await Category.create({
                name: 'Metallurgical Engineering',
                description: 'Comprehensive study and practice of extracting, refining, and applying metals.'
            });
            console.log('Created Metallurgical Engineering category');
        }

        console.log(`Generating Metallurgical Engineering MCQs...`);
        const finalData = generateMetallurgyMCQs(category._id);

        console.log(`Inserting ${finalData.length} MCQs into the database...`);

        // Chunk inserts
        const chunkSize = 500;
        let insertedCount = 0;
        for (let i = 0; i < finalData.length; i += chunkSize) {
            const chunk = finalData.slice(i, i + chunkSize);
            await Question.insertMany(chunk);
            insertedCount += chunk.length;
            console.log(`Inserted ${insertedCount}/${finalData.length}`);
        }

        console.log(`Successfully generated and inserted ${finalData.length} MCQs for 'Metallurgical Engineering'!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Metallurgical Engineering:', err);
        process.exit(1);
    }
};

seedMetallurgy();
