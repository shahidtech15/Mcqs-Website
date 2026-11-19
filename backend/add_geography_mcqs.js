const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db')
    .then(() => console.log('MongoDB Connected for Geography Seeding'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const subCategories = [
    "Indian Geography", "Universe", "Earth", "Atmosphere", "Hydrosphere",
    "Lithosphere", "Political Geography of Pakistan", "Climate and Weather in Pakistan Geography",
    "Agriculture and Soil in Pakistan Geography", "Indian Rivers, Lakes and Water",
    "Natural Resources and Industries in Indian Geography", "Natural Resources and Industries in Pakistan Geography",
    "Pakistan Rivers, Lakes and Water", "Transportation System of Pakistan",
    "Environment and Ecology in Pakistan Geography", "Population and Tribes in Pakistan Geogaphy",
    "Miscellaneous Pakistan Geography", "World Climate and Weather",
    "World Agriculture, Minerals and Industries", "World Environment and Ecology",
    "Miscellaneous World Geography"
];

const themes = {
    "Indian Geography": { entity: ["Himalayas", "Ganges", "Deccan Plateau", "Western Ghats", "Thar Desert"], action: ["topographical impact", "climate influence", "agricultural benefit", "biodiversity"] },
    "Universe": { entity: ["galaxy", "black hole", "nebula", "supernova", "dark matter"], action: ["gravitational pull", "expansion", "star formation", "light bend"] },
    "Earth": { entity: ["equator", "prime meridian", "tectonic plate", "core", "mantle"], action: ["rotation", "revolution", "seismic activity", "magnetic field generation"] },
    "Atmosphere": { entity: ["troposphere", "stratosphere", "ozone layer", "mesosphere", "exosphere"], action: ["UV protection", "weather formation", "temperature gradient", "radio wave reflection"] },
    "Hydrosphere": { entity: ["ocean current", "tide", "salinity", "glacier", "groundwater"], action: ["thermohaline circulation", "coastal erosion", "freshwater storage", "climate regulation"] },
    "Lithosphere": { entity: ["igneous rock", "sedimentary rock", "metamorphic rock", "fault line", "volcano"], action: ["magma cooling", "sediment deposition", "heat and pressure transformation", "plate divergence"] },
    "Political Geography of Pakistan": { entity: ["Durand Line", "Line of Control", "Gwadar Port", "provincial boundary", "FATA"], action: ["border demarcation", "strategic trade route", "administrative division", "territorial dispute"] },
    "Climate and Weather in Pakistan Geography": { entity: ["monsoon", "western disturbance", "arid climate", "cyclone", "heatwave"], action: ["rainfall distribution", "temperature fluctuation", "seasonal variation", "crop cycle timing"] },
    "Agriculture and Soil in Pakistan Geography": { entity: ["alluvial soil", "Indus basin", "cash crop", "Kharif season", "Rabi season"], action: ["fertility enhancement", "irrigation dependency", "yield maximization", "crop rotation"] },
    "Indian Rivers, Lakes and Water": { entity: ["Brahmaputra", "Godavari", "Chilika Lake", "Narmada", "monsoon basin"], action: ["delta formation", "hydroelectric generation", "irrigation supply", "flood plain creation"] },
    "Natural Resources and Industries in Indian Geography": { entity: ["coal reserve", "iron ore", "cotton textile", "IT sector", "petroleum"], action: ["industrial growth", "export revenue", "employment generation", "energy self-sufficiency"] },
    "Natural Resources and Industries in Pakistan Geography": { entity: ["Sui gas", "Khewra salt", "Thar coal", "textile industry", "Saindak copper"], action: ["energy production", "mineral extraction", "export dominated trade", "foreign investment"] },
    "Pakistan Rivers, Lakes and Water": { entity: ["Indus River", "Jhelum River", "Manchar Lake", "Tarbela Dam", "Mangla Dam"], action: ["water storage", "power generation", "river basin irrigation", "flood control"] },
    "Transportation System of Pakistan": { entity: ["CPEC", "Karakoram Highway", "Pakistan Railways", "Gwadar", "motorway network"], action: ["trade connectivity", "regional integration", "transit route reduction", "infrastructure development"] },
    "Environment and Ecology in Pakistan Geography": { entity: ["mangrove forest", "snow leopard", "deforestation", "Indus blind dolphin", "desertification"], action: ["habitat preservation", "biodiversity loss", "climate change mitigation", "conservation effort"] },
    "Population and Tribes in Pakistan Geogaphy": { entity: ["urbanization", "Kalash tribe", "demographic dividend", "migration", "rural population"], action: ["cultural assimilation", "resource allocation", "economic contribution", "settlement pattern"] },
    "Miscellaneous Pakistan Geography": { entity: ["K2 peak", "Thar desert", "Makran coast", "historical ruins", "tourist destination"], action: ["topographical extreme", "cultural heritage", "tourism potential", "geographical diversity"] },
    "World Climate and Weather": { entity: ["El Nino", "La Nina", "greenhouse effect", "trade wind", "Coriolis effect"], action: ["global warming", "ocean temperature anomaly", "weather pattern shift", "atmospheric circulation"] },
    "World Agriculture, Minerals and Industries": { entity: ["OPEC", "Silicon Valley", "wheat belt", "rare earth metal", "fossil fuel"], action: ["global trade dominance", "technological innovation", "food security", "price regulation"] },
    "World Environment and Ecology": { entity: ["Amazon rainforest", "Great Barrier Reef", "carbon footprint", "kyoto protocol", "biodiversity hotspot"], action: ["carbon sequestration", "coral bleaching", "emission reduction", "ecological balance"] },
    "Miscellaneous World Geography": { entity: ["Mariana Trench", "Sahara Desert", "Panama Canal", "Antarctica", "ring of fire"], action: ["global extreme", "maritime shortcut", "tectonic activity", "geographical wonder"] },
    "Main Geography": { entity: ["cartography", "GIS", "topography", "demography", "geomorphology"], action: ["spatial analysis", "map projection", "population mapping", "landform study"] }
};

const generateGeographyMCQs = (categoryId) => {
    let allQuestions = [];

    // 1. Subcategories (100 each)
    for (let subCat of subCategories) {
        let theme = themes[subCat];
        let entities = theme.entity;
        let actions = theme.action;
        let targetCount = 100;

        for (let i = 1; i <= targetCount; i++) {
            let entity1 = entities[i % entities.length];
            let entity2 = entities[(i + 1) % entities.length];
            let entity3 = entities[(i + 2) % entities.length];
            let action = actions[i % actions.length];

            let difficulty = i <= 30 ? 'Easy' : (i <= 70 ? 'Medium' : 'Hard');
            let questionTemplateDecider = i % 4;
            let q, ans, wrong, exp;

            if (questionTemplateDecider === 0) {
                q = `Which of the following describes the ${action} related to ${entity1} in ${subCat}?`;
                ans = `Significant impact of ${entity1}`;
                wrong = [`Characteristic of ${entity2}`, `Function of ${entity3}`, `Unrelated geographic feature`];
                exp = `The ${action} of ${entity1} is a defining aspect in the study of ${subCat}.`;
            } else if (questionTemplateDecider === 1) {
                q = `What role does ${entity2} play concerning ${action}?`;
                ans = `Primary factor in ${action}`;
                wrong = [`Secondary isolated effect`, `Acts as a natural barrier`, `Has no correlation`];
                exp = `In geographical context, ${entity2} heavily influences ${action}.`;
            } else if (questionTemplateDecider === 2) {
                q = `A key distinction between ${entity1} and ${entity2} lies in their ${action}. Which statement represents this best?`;
                ans = `${entity1} exhibits distinct ${action} compared to ${entity2}`;
                wrong = [`Both share the exact same ${action} patterns`, `${entity2} is devoid of ${action}`, `None of the above`];
                exp = `Understanding the variations in ${action} helps separate properties between ${entity1} and ${entity2}.`;
            } else {
                q = `Identify the correct geographical term for the ${action} involving ${entity3}.`;
                ans = `Canonical term for ${entity3}'s ${action}`;
                wrong = [`Incorrect term A`, `Incorrect term B`, `Incorrect term C`];
                exp = `This terminology for ${entity3}'s ${action} is widely accepted in Geography.`;
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

    // 2. Main Geography (200 MCQs)
    let mainTheme = themes["Main Geography"];
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
            q = `Which concept best explains the ${action} associated with ${entity1}?`;
            ans = `Core principle of ${entity1}`;
            wrong = [`Concept involving ${entity2}`, `Theory of ${entity3}`, `Historical geographical notation`];
            exp = `The ${action} related to ${entity1} is foundational to general Geography.`;
        } else if (questionTemplateDecider === 1) {
            q = `In general Geography, how does ${entity2} impact ${action}?`;
            ans = `It heavily directs ${action}`;
            wrong = [`It has negligible effect`, `It suppresses ${action}`, `It only affects micro-regions`];
            exp = `${entity2} serves as a primary determinant for ${action} in broad geographic studies.`;
        } else if (questionTemplateDecider === 2) {
            q = `Comparing ${entity1} and ${entity2} in terms of ${action}, which is accurate?`;
            ans = `${entity1} has specific ${action} criteria unlike ${entity2}`;
            wrong = [`They are geographically identical`, `${entity2} handles ${action} exclusively`, `Neither relates to ${action}`];
            exp = `Distinguishing the ${action} helps separate core properties between ${entity1} and ${entity2}.`;
        } else {
            q = `What is the accepted terminology for ${action} concerning ${entity3}?`;
            ans = `Standard geographic notation for ${entity3}'s ${action}`;
            wrong = [`False notation X`, `False notation Y`, `False notation Z`];
            exp = `The terminology for ${entity3}'s ${action} is canonically defined in standard global Geography.`;
        }

        let options = [ans, ...wrong].sort(() => Math.random() - 0.5);
        let correctLetter = ['A', 'B', 'C', 'D'][options.indexOf(ans)];

        allQuestions.push({
            questionText: `Q${i} (Main): ${q}`,
            options: { A: options[0], B: options[1], C: options[2], D: options[3] },
            correctAnswer: correctLetter,
            explanation: exp,
            category: categoryId,
            subCategory: "Main Geography",
            difficulty: difficulty
        });
    }

    return allQuestions;
};

const seedGeography = async () => {
    try {
        let category = await Category.findOne({ name: 'Geography' });
        if (!category) {
            category = await Category.create({
                name: 'Geography',
                description: 'Study of the physical features of the earth and its atmosphere, and of human activity.'
            });
            console.log('Created Geography category');
        }

        console.log(`Generating Geography MCQs...`);
        const finalData = generateGeographyMCQs(category._id);

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

        console.log(`Successfully generated and inserted ${finalData.length} MCQs for 'Geography'!`);
        process.exit(0);
    } catch (err) {
        console.error('Error seeding Geography:', err);
        process.exit(1);
    }
};

seedGeography();
