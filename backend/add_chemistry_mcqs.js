const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Seeding Chemistry MCQs'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const subCategories = [
    "Atomic Structure",
    "Acid, Base and Salts",
    "State of Matter",
    "Periodic Classification of elements",
    "Chemical Bonding and Reactions",
    "Biomolecules and Polymers",
    "Environmental Chemistry",
    "Solutions and Surface Chemistry",
    "Thermochemistry",
    "Metal and its compounds",
    "Non Metal and Its Compounds",
    "Organic Chemistry",
    "Inorganic Chemistry",
    "Chemistry in Everyday Life"
];

// Reusable data points to generate huge amount of questions dynamically.
const subcategoryThemes = {
    "Atomic Structure": {
        entity: ["electron", "proton", "neutron", "nucleus", "isotope", "Rutherford's model", "Bohr model", "orbital", "quantum number"],
        action: ["charge", "mass", "location", "discovery", "energy level", "spin", "angular momentum"]
    },
    "Acid, Base and Salts": {
        entity: ["HCl", "NaOH", "H2SO4", "pH scale", "litmus paper", "buffer solution", "arrhenius acid", "bronsted-lowry base"],
        action: ["neutralization", "ionization", "color change", "proton donation", "proton acceptance", "salt formation"]
    },
    "State of Matter": {
        entity: ["solid", "liquid", "gas", "plasma", "Bose-Einstein condensate", "ideal gas", "real gas", "vapor pressure"],
        action: ["melting", "boiling", "sublimation", "condensation", "compressibility", "diffusion", "kinetic energy"]
    },
    "Periodic Classification of elements": {
        entity: ["alkali metals", "halogens", "noble gases", "transition metals", "lanthanides", "actinides", "s-block", "p-block"],
        action: ["atomic radius trend", "ionization energy trend", "electronegativity trend", "electron affinity", "metallic character"]
    },
    "Chemical Bonding and Reactions": {
        entity: ["covalent bond", "ionic bond", "metallic bond", "hydrogen bond", "van der Waals forces", "exothermic reaction", "endothermic reaction"],
        action: ["electron sharing", "electron transfer", "lattice energy", "bond dissociation energy", "activation energy", "catalysis"]
    },
    "Biomolecules and Polymers": {
        entity: ["carbohydrates", "proteins", "lipids", "nucleic acids", "PVC", "nylon", "polyethylene", "teflon"],
        action: ["peptide bond formation", "glycosidic linkage", "polymerization", "condensation", "addition", "denaturation"]
    },
    "Environmental Chemistry": {
        entity: ["ozone layer", "greenhouse gases", "acid rain", "smog", "CFCs", "BOD", "COD"],
        action: ["depletion", "global warming", "eutrophication", "pollution", "water purification", "soil degradation"]
    },
    "Solutions and Surface Chemistry": {
        entity: ["solute", "solvent", "colloid", "suspension", "catalyst", "adsorbent", "adsorbate"],
        action: ["dissolution", "osmosis", "Tyndall effect", "Brownian motion", "physisorption", "chemisorption"]
    },
    "Thermochemistry": {
        entity: ["enthalpy", "entropy", "Gibbs free energy", "calorimeter", "Hess's law", "specific heat capacity"],
        action: ["heat transfer", "spontaneity", "work done", "state function", "path function", "standard state"]
    },
    "Metal and its compounds": {
        entity: ["iron", "copper", "aluminum", "gold", "silver", "alloy", "ore", "slag", "flux"],
        action: ["smelting", "roasting", "calcination", "corrosion", "galvanization", "extraction"]
    },
    "Non Metal and Its Compounds": {
        entity: ["carbon", "nitrogen", "oxygen", "sulfur", "phosphorus", "allotropes", "ammonia", "sulfuric acid"],
        action: ["Haber process", "Contact process", "catenation", "combustion", "oxidation", "reduction"]
    },
    "Organic Chemistry": {
        entity: ["alkanes", "alkenes", "alkynes", "alcohols", "aldehydes", "ketones", "carboxylic acids", "amines", "benzene"],
        action: ["substitution", "addition", "elimination", "esterification", "isomerism", "resonance", "electrophilic attack"]
    },
    "Inorganic Chemistry": {
        entity: ["coordination compounds", "ligands", "crystal field theory", "VSEPR theory", "hybridization", "silicates"],
        action: ["complex formation", "geometry prediction", "magnetic properties", "coloration", "isomerism", "oxidation state"]
    },
    "Chemistry in Everyday Life": {
        entity: ["analgesics", "antibiotics", "antacids", "antihistamines", "soaps", "detergents", "preservatives", "artificial sweeteners"],
        action: ["pain relief", "bacterial growth inhibition", "stomach acid neutralization", "allergy relief", "cleansing action", "saponification"]
    }
};


const generateChemistryMCQs = (categoryId) => {
    let allQuestions = [];

    for (let subCat of subCategories) {
        let theme = subcategoryThemes[subCat];
        let entities = theme.entity;
        let actions = theme.action;

        for (let i = 1; i <= 100; i++) {
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
                exp = `Understanding the distinct ${action} helps differentiate between ${entity1} and ${entity2} in chemical studies.`;
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
                options: {
                    A: options[0],
                    B: options[1],
                    C: options[2],
                    D: options[3]
                },
                correctAnswer: correctLetter,
                explanation: exp,
                category: categoryId,
                subCategory: subCat,
                difficulty: difficulty
            });
        }
    }

    return allQuestions;
};

const seedChemistry = async () => {
    try {
        let category = await Category.findOne({ name: 'Chemistry' });
        if (!category) {
            category = await Category.create({
                name: 'Chemistry',
                description: 'Comprehensive chemistry concepts and problems'
            });
            console.log('Created Chemistry category');
        }

        console.log(`Generating Chemistry MCQs...`);
        const finalData = generateChemistryMCQs(category._id);

        console.log(`Inserting ${finalData.length} MCQs into the database...`);
        // Use bulkWrite or insertMany in chunks if it's too large, but 1400 should be manageable in one go for local MongoDB.
        // Let's do it in chunks of 500 just to be safe.
        const chunkSize = 500;
        let insertedCount = 0;
        for (let i = 0; i < finalData.length; i += chunkSize) {
            const chunk = finalData.slice(i, i + chunkSize);
            await Question.insertMany(chunk);
            insertedCount += chunk.length;
            console.log(`Inserted ${insertedCount}/${finalData.length}`);
        }

        console.log(`Successfully generated and inserted ${finalData.length} MCQs for 'Chemistry'!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Chemistry:', err);
        process.exit(1);
    }
};

seedChemistry();
