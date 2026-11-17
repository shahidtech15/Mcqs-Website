const fs = require('fs');
const path = require('path');

const questions = [
  // --- PART-I (ENGLISH) Q1 to Q20 ---
  {
    questionId: 1,
    part: "Part-I (English)",
    subCategory: "English (Vocabulary)",
    questionText: "He pleads for sanity in a _____ world.",
    options: {
      A: "Reasonable",
      B: "Lunatic",
      C: "Cautious",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Lunatic",
    explanation: "'Sanity' (rationality, mental health) stands in rhetorical contrast to 'Lunatic' (insane, wildly foolish). One pleads for sanity amidst a crazy or lunatic world.",
    difficulty: "Medium"
  },
  {
    questionId: 2,
    part: "Part-I (English)",
    subCategory: "English (Vocabulary)",
    questionText: "ARGOSY means:",
    options: {
      A: "Arrogant",
      B: "A big trading ship",
      C: "Misguiding",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "A big trading ship",
    explanation: "An 'argosy' is historically a large merchant ship or a fleet of trading vessels laden with valuable cargo, named after the Adriatic port of Ragusa (Dubrovnik).",
    difficulty: "Medium"
  },
  {
    questionId: 3,
    part: "Part-I (English)",
    subCategory: "English (Synonyms)",
    questionText: "Synonym of Trepidation:",
    options: {
      A: "Fear",
      B: "Expedition",
      C: "Trial",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Fear",
    explanation: "'Trepidation' means a feeling of nervous fear, anxiety, or apprehension about something that may happen.",
    difficulty: "Easy"
  },
  {
    questionId: 4,
    part: "Part-I (English)",
    subCategory: "English (Synonyms)",
    questionText: "Synonym of HORTATORY:",
    options: {
      A: "Academic",
      B: "Art of gardening",
      C: "Trying to develop a love for history",
      D: "None of these"
    },
    correctAnswer: "D",
    correctAnswerText: "None of these",
    explanation: "'Hortatory' means tending or aiming to exhort, encourage, or urge someone strongly towards righteous action. Because none of the options ('Academic', 'Art of gardening' [a confusion with horticulture], or 'Trying to develop a love for history') captures this meaning, the answer is 'None of these'.",
    difficulty: "Hard"
  },
  {
    questionId: 5,
    part: "Part-I (English)",
    subCategory: "English (Antonyms)",
    questionText: "Antonym of QUOTIDIAN [printed QUOYIDIAN]:",
    options: {
      A: "Extraordinary",
      B: "Wishful",
      C: "Premature",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Extraordinary",
    explanation: "'Quotidian' means occurring daily, mundane, or commonplace. Its direct antonym is 'Extraordinary' (rare, unusual, or exceptional).",
    difficulty: "Hard"
  },
  {
    questionId: 6,
    part: "Part-I (English)",
    subCategory: "English (Grammar & Sentence Structure)",
    questionText: "Mr. Jonathan is not home today. _____ you try calling him tomorrow.",
    options: {
      A: "I suggest",
      B: "I want",
      C: "I insist",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "I suggest",
    explanation: "'I suggest (that) you try calling him tomorrow' is the standard polite advisory construction with subjunctive force. 'I want' requires an infinitive ('want you to try'), and 'insist' implies an inappropriate demand.",
    difficulty: "Medium"
  },
  {
    questionId: 7,
    part: "Part-I (English)",
    subCategory: "English (Parts of Speech)",
    questionText: "JIT was formed to investigate the crime. JIT here is a _____ noun.",
    options: {
      A: "Collective",
      B: "Virtual",
      C: "Concrete",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Collective",
    explanation: "'JIT' stands for Joint Investigation Team. A 'team' or body of persons acting as a corporate unit is classified as a collective noun.",
    difficulty: "Easy"
  },
  {
    questionId: 8,
    part: "Part-I (English)",
    subCategory: "English (Phrasal Verbs)",
    questionText: "The Chairman is ill and we will have to _____ the meeting for a few days.",
    options: {
      A: "Put on",
      B: "Put of",
      C: "Put off",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Put off",
    explanation: "The phrasal verb 'put off' means to postpone or defer to a later date. 'Put on' means to wear or produce.",
    difficulty: "Easy"
  },
  {
    questionId: 9,
    part: "Part-I (English)",
    subCategory: "English (Active & Passive Voice)",
    questionText: "Who is creating this mess? Select the correct passive for this sentence.",
    options: {
      A: "Who has been created this mess?",
      B: "By whom has this mess been created?",
      C: "By whom is this mess being created?",
      D: "By whom this mess is being created?"
    },
    correctAnswer: "C",
    correctAnswerText: "By whom is this mess being created?",
    explanation: "In changing present continuous interrogatives to passive: 'Who' becomes 'By whom', followed by inverted auxiliary 'is', subject 'this mess', continuous marker 'being', and past participle 'created'.",
    difficulty: "Medium"
  },
  {
    questionId: 10,
    part: "Part-I (English)",
    subCategory: "English (Tenses)",
    questionText: "Saad often _____ late at night.",
    options: {
      A: "Worked",
      B: "Work",
      C: "Works",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Works",
    explanation: "The adverb of frequency 'often' with a singular third-person subject ('Saad') governs the Present Simple tense with the '-s' inflection: 'works'.",
    difficulty: "Easy"
  },
  {
    questionId: 11,
    part: "Part-I (English)",
    subCategory: "English (Synonyms)",
    questionText: "Synonym of 'Emancipate':",
    options: {
      A: "Defame",
      B: "Incorporate",
      C: "Release",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Release",
    explanation: "'Emancipate' means to liberate, unbind, or set free from legal, social, or physical constraint.",
    difficulty: "Easy"
  },
  {
    questionId: 12,
    part: "Part-I (English)",
    subCategory: "English (Sentence Classification)",
    questionText: "A _____ simply makes a statement or expresses an opinion.",
    options: {
      A: "Simple sentence",
      B: "Complement sentence",
      C: "Declarative sentence",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Declarative sentence",
    explanation: "A declarative sentence is defined functionally as a sentence that asserts a fact, makes a statement, or expresses an opinion and ends with a period.",
    difficulty: "Easy"
  },
  {
    questionId: 13,
    part: "Part-I (English)",
    subCategory: "English (Prepositions)",
    questionText: "The ship is bound _____ the United States.",
    options: {
      A: "Onto",
      B: "At",
      C: "For",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "For",
    explanation: "The standard prepositional idiom indicating destination for a vessel or traveler is 'bound for'.",
    difficulty: "Easy"
  },
  {
    questionId: 14,
    part: "Part-I (English)",
    subCategory: "English (Conjunctions & Correlatives)",
    questionText: "I am _____ sure of it as you are.",
    options: {
      A: "Quit",
      B: "As",
      C: "Very",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "As",
    explanation: "Equative comparisons take the correlative pair 'as + adjective + as': 'as sure of it as you are'.",
    difficulty: "Easy"
  },
  {
    questionId: 15,
    part: "Part-I (English)",
    subCategory: "English (Prepositions)",
    questionText: "He writes _____ ink.",
    options: {
      A: "In",
      B: "Through",
      C: "Into",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "In",
    explanation: "We write 'with a pen' (instrument) but 'in ink' or 'in pencil' (medium/material).",
    difficulty: "Medium"
  },
  {
    questionId: 16,
    part: "Part-I (English)",
    subCategory: "English (Prepositions)",
    questionText: "She is afraid _____ spiders.",
    options: {
      A: "From",
      B: "In",
      C: "Of",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Of",
    explanation: "The adjective 'afraid' invariably takes the dependent preposition 'of': 'afraid of'.",
    difficulty: "Easy"
  },
  {
    questionId: 17,
    part: "Part-I (English)",
    subCategory: "English (Prepositions)",
    questionText: "Somebody burnt the trash here. It can't be Sheena because she cares _____ the environment pretty much.",
    options: {
      A: "Of",
      B: "In",
      C: "About",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "About",
    explanation: "To feel interest, concern, or affection for an issue or entity is to 'care about' it.",
    difficulty: "Easy"
  },
  {
    questionId: 18,
    part: "Part-I (English)",
    subCategory: "English (One-Word Substitution)",
    questionText: "A person who tends to see the worst aspect of things or believes that the worst will happen:",
    options: {
      A: "Patricide",
      B: "Pessimist",
      C: "Optimist",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Pessimist",
    explanation: "A 'pessimist' anticipates unfavorable outcomes. An 'optimist' anticipates favorable outcomes, and 'patricide' is the killing of one's father.",
    difficulty: "Easy"
  },
  {
    questionId: 19,
    part: "Part-I (English)",
    subCategory: "English (Sentence Structure)",
    questionText: "The baby cried for food. This sentence can be defined as:",
    options: {
      A: "Passive sentence",
      B: "Simple sentence",
      C: "Complex sentence",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Simple sentence",
    explanation: "A simple sentence contains exactly one independent clause consisting of a single subject ('The baby') and a predicate verb ('cried for food') without any subordinate clauses.",
    difficulty: "Easy"
  },
  {
    questionId: 20,
    part: "Part-I (English)",
    subCategory: "English (Sentence Structure)",
    questionText: "A compound sentence must have;",
    options: {
      A: "One verb",
      B: "A subordinate clause",
      C: "A dependent clause",
      D: "None of these"
    },
    correctAnswer: "D",
    correctAnswerText: "None of these",
    explanation: "A compound sentence by definition must contain two or more independent clauses joined by a coordinating conjunction (or semicolon). It does NOT require subordinate or dependent clauses (which define complex sentences). Thus, 'None of these' is the correct choice.",
    difficulty: "Medium"
  },

  // --- PART-II (GENERAL INTELLIGENCE / CURRENT AFFAIRS / EVERYDAY SCIENCE / ARITHMETIC) Q21 to Q84 ---
  {
    questionId: 21,
    part: "Part-II (General Intelligence)",
    subCategory: "Current Affairs & World Affairs",
    questionText: "On Turkey's request, her national name at the United Nations has been changed from 'Turkey' to:",
    options: {
      A: "Turkia",
      B: "Turkee",
      C: "Turkiye",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Turkiye",
    explanation: "In June 2022, the United Nations officially registered the country's name as 'Türkiye' (Turkiye) following an official request by Foreign Minister Mevlüt Çavuşoğlu.",
    difficulty: "Easy"
  },
  {
    questionId: 22,
    part: "Part-II (General Intelligence)",
    subCategory: "Current Affairs & World Affairs",
    questionText: "Which country reported its first COVID cases on 12 May 2022?",
    options: {
      A: "North Korea",
      B: "Vietnam",
      C: "Cuba",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "North Korea",
    explanation: "North Korea publicly acknowledged its first official outbreak of COVID-19 (the Omicron variant) on May 12, 2022, ordering nationwide lockdowns.",
    difficulty: "Medium"
  },
  {
    questionId: 23,
    part: "Part-II (General Intelligence)",
    subCategory: "Pakistan Affairs & Security Institutions",
    questionText: "Pakistan's National Counter Terrorism Authority (NACTA) was created on:",
    options: {
      A: "2007",
      B: "2009",
      C: "2019",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "2009",
    explanation: "NACTA was established in 2008/2009 as an administrative body under the Ministry of Interior, and was subsequently granted autonomous statutory power via the NACTA Act in March 2013.",
    difficulty: "Medium"
  },
  {
    questionId: 24,
    part: "Part-II (General Intelligence)",
    subCategory: "International Days & Observances",
    questionText: "When the 'World Bicycle Day' is celebrated every year?",
    options: {
      A: "June 03",
      B: "June 02",
      C: "June 13",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "June 03",
    explanation: "World Bicycle Day is observed globally on June 3 every year, designated by the United Nations General Assembly in 2018 to promote simple, affordable, and clean transportation.",
    difficulty: "Medium"
  },
  {
    questionId: 25,
    part: "Part-II (General Intelligence)",
    subCategory: "International Days & Observances",
    questionText: "When the 'World Braille Day' is observed every year to raise awareness of the importance of Braille as a means of communication for blind and partially sighted people?",
    options: {
      A: "January 01",
      B: "January 02",
      C: "January 04",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "January 04",
    explanation: "World Braille Day is commemorated annually on January 4, honoring the birthday of Louis Braille (born 1809), the French educator who developed the tactile reading system.",
    difficulty: "Easy"
  },
  {
    questionId: 26,
    part: "Part-II (General Intelligence)",
    subCategory: "Current Affairs & Strategic Studies",
    questionText: "According to the Stockholm International Peace Research Institute 2021 report, which country is the largest arms importer in the world?",
    options: {
      A: "India",
      B: "Saudi Arabia",
      C: "Israel",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "India",
    explanation: "SIPRI reports covering trends in international arms transfers identify India and Saudi Arabia as the world's leading arms importers, with India occupying the top position.",
    difficulty: "Medium"
  },
  {
    questionId: 27,
    part: "Part-II (General Intelligence)",
    subCategory: "Islamic World & OIC Summits",
    questionText: "Which country hosted OIC foreign ministers' 47th meeting in November 2020/2021?",
    options: {
      A: "Algeria",
      B: "Niger",
      C: "Nigeria",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Niger",
    explanation: "The 47th Session of the Council of Foreign Ministers (CFM) of the Organization of Islamic Cooperation (OIC) took place in Niamey, Republic of Niger, on 27-28 November 2020.",
    difficulty: "Medium"
  },
  {
    questionId: 28,
    part: "Part-II (General Intelligence)",
    subCategory: "Diplomacy & Current Affairs",
    questionText: "What is the name of Foreign Minister of Spain who visited Pakistan in September 2021?",
    options: {
      A: "Pilar Llop",
      B: "Jose Manuel Albares",
      C: "Nasser Bourita",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Jose Manuel Albares",
    explanation: "Spanish Minister for Foreign Affairs, European Union and Cooperation José Manuel Albares visited Islamabad in September 2021 to express gratitude for Pakistan's evacuation assistance in Afghanistan.",
    difficulty: "Medium"
  },
  {
    questionId: 29,
    part: "Part-II (General Intelligence)",
    subCategory: "Sports & Pakistan Records",
    questionText: "How many Medals did Pakistan win in Tokyo 2020 Paralympic Games?",
    options: {
      A: "Zero",
      B: "One",
      C: "Two",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "One",
    explanation: "Pakistan won one medal at the Tokyo 2020 Paralympics: athlete Haider Ali secured Pakistan's historic first-ever Paralympic Gold medal in the men's discus throw (F37 class) with a 55.26m throw.",
    difficulty: "Easy"
  },
  {
    questionId: 30,
    part: "Part-II (General Intelligence)",
    subCategory: "Diplomacy & Current Affairs",
    questionText: "Which British Foreign Secretary, visited Pakistan in September 2021?",
    options: {
      A: "Philip Hammond",
      B: "Jeremy Hunt",
      C: "Dominic Raab",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Dominic Raab",
    explanation: "UK Foreign Secretary Dominic Raab visited Islamabad on September 2-3, 2021, holding high-level discussions with Pakistani civil and military leadership on regional stability after the Kabul withdrawal.",
    difficulty: "Easy"
  },
  {
    questionId: 31,
    part: "Part-II (General Intelligence)",
    subCategory: "Current Affairs & Geopolitics",
    questionText: "When did Russia launch a large-scale invasion of Ukraine, marking a major escalation of the ongoing Russo-Ukrainian War?",
    options: {
      A: "February 20, 2022",
      B: "February 24, 2022",
      C: "February 26, 2022",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "February 24, 2022",
    explanation: "On February 24, 2022, Russian armed forces initiated a full-scale invasion of Ukraine across multiple fronts.",
    difficulty: "Easy"
  },
  {
    questionId: 32,
    part: "Part-II (General Intelligence)",
    subCategory: "World Affairs & Judiciary",
    questionText: "What is the name of first black woman Judge confirmed to USA Supreme Court?",
    options: {
      A: "Clearance Thomas",
      B: "Thurgood Marshall",
      C: "Ketanji Brown Jackson",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Ketanji Brown Jackson",
    explanation: "Judge Ketanji Brown Jackson was confirmed by the US Senate on April 7, 2022, and sworn in on June 30, 2022, becoming the first African American woman justice in US Supreme Court history.",
    difficulty: "Easy"
  },
  {
    questionId: 33,
    part: "Part-II (General Intelligence)",
    subCategory: "Sports & Global Events",
    questionText: "Which country will host the 2026 Commonwealth Games? [Official award at time of test]",
    options: {
      A: "Australia",
      B: "England",
      C: "Canada",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Australia",
    explanation: "In April 2022, Victoria, Australia was officially chosen to host the 2026 Commonwealth Games (the designated answer for the 2022 exam session).",
    difficulty: "Medium"
  },
  {
    questionId: 34,
    part: "Part-II (General Intelligence)",
    subCategory: "Business & Technology",
    questionText: "Recently, who acquired Twitter for $44 billion?",
    options: {
      A: "Elon Musk",
      B: "Bill Gates",
      C: "Mark Zuckerberg",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Elon Musk",
    explanation: "Tesla and SpaceX CEO Elon Musk agreed in April 2022 to acquire Twitter for $54.20 per share, valued at roughly $44 billion.",
    difficulty: "Easy"
  },
  {
    questionId: 35,
    part: "Part-II (General Intelligence)",
    subCategory: "Socio-Economic Development",
    questionText: "Which country lifted 93 million people out of poverty since 2013 and has announced eradication of extreme poverty in its country?",
    options: {
      A: "Indonesia",
      B: "Malaysia",
      C: "China",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "China",
    explanation: "In February 2021, China officially declared that it had accomplished its targeted poverty alleviation campaign, lifting nearly 100 million rural residents out of absolute poverty.",
    difficulty: "Easy"
  },
  {
    questionId: 36,
    part: "Part-II (General Intelligence)",
    subCategory: "Awards & Notable Personalities",
    questionText: "Which Pakistani recently received the Ramon Magsaysay Award dubbed as Asia's highest award equivalent to Nobel Prize?",
    options: {
      A: "Muhammad Amjad Saqib",
      B: "Faisal Edhi",
      C: "Asma Jahangir",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Muhammad Amjad Saqib",
    explanation: "Dr. Muhammad Amjad Saqib, the visionary founder of the interest-free microfinance organization Akhuwat, was conferred the Ramon Magsaysay Award in 2021.",
    difficulty: "Easy"
  },
  {
    questionId: 37,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Human Biology)",
    questionText: "Fibula is a bone found in one of the following parts of the human body:",
    options: {
      A: "Arm",
      B: "Leg",
      C: "Skull",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Leg",
    explanation: "The fibula is the slender calf bone situated lateral to the tibia in the human lower leg.",
    difficulty: "Easy"
  },
  {
    questionId: 38,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Physics & Biology)",
    questionText: "_____ can help Bats to fly in the dark.",
    options: {
      A: "Electromagnetic waves",
      B: "Ultrasonic waves",
      C: "Ultra Violet waves",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Ultrasonic waves",
    explanation: "Bats navigate and hunt using echolocation by emitting high-frequency ultrasonic waves (above 20,000 Hz) and listening to the returning echoes.",
    difficulty: "Easy"
  },
  {
    questionId: 39,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Materials & Chemistry)",
    questionText: "One of the following can be manufactured by using wood:",
    options: {
      A: "Gun powder",
      B: "Paper",
      C: "Ink",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Paper",
    explanation: "Paper is manufactured from cellulose fibers extracted from wood pulp through chemical or mechanical processes.",
    difficulty: "Easy"
  },
  {
    questionId: 40,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Botany & Solar Physics)",
    questionText: "At the time of solar eclipse, rate of photosynthesis will be:",
    options: {
      A: "Increased",
      B: "Decreased",
      C: "Remain constant",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Decreased",
    explanation: "Because sunlight provides the vital photons required to drive the light-dependent reactions of photosynthesis, solar blockage during an eclipse reduces the photosynthesis rate.",
    difficulty: "Easy"
  },
  {
    questionId: 41,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Physics)",
    questionText: "The Sound waves cannot travel through:",
    options: {
      A: "Gases",
      B: "Liquids",
      C: "Vacuum",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Vacuum",
    explanation: "Sound waves are mechanical longitudinal waves that require a material medium with inertia and elasticity; they cannot propagate through a vacuum.",
    difficulty: "Easy"
  },
  {
    questionId: 42,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Scientific Disciplines)",
    questionText: "Systematic scientific study of Teeth is known as:",
    options: {
      A: "Pedagogy",
      B: "Odontology",
      C: "Ornithology",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Odontology",
    explanation: "Odontology is the branch of science dealing with the anatomy, development, and diseases of teeth. (Pedagogy is the study of teaching methods; Ornithology is the study of birds).",
    difficulty: "Easy"
  },
  {
    questionId: 43,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Medical Discoveries)",
    questionText: "Sir Frederick Banting discovered one the following vaccine [substance/treatment]:",
    options: {
      A: "COVID-19 Vaccine",
      B: "Insulin",
      C: "Anti-Rabies Vaccine",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Insulin",
    explanation: "Sir Frederick Banting, with Charles Best, isolated pancreatic insulin in 1921, transforming diabetes from a fatal disease into a manageable condition and winning the 1923 Nobel Prize.",
    difficulty: "Easy"
  },
  {
    questionId: 44,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Botany)",
    questionText: "Bamboo belongs to:",
    options: {
      A: "A weed family",
      B: "A Herb family",
      C: "A Grass family",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "A Grass family",
    explanation: "Bamboo is a giant woody perennial flowering plant belonging to the grass family Poaceae (subfamily Bambusoideae).",
    difficulty: "Easy"
  },
  {
    questionId: 45,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Food Chemistry)",
    questionText: "Glucose syrup is commonly made from:",
    options: {
      A: "Sugar cane",
      B: "Maize",
      C: "Beet root",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Maize",
    explanation: "Commercial glucose syrup (corn syrup) is manufactured via the hydrolysis of maize (corn) starch.",
    difficulty: "Medium"
  },
  {
    questionId: 46,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Geology & Chemistry)",
    questionText: "The most abundant element in the earth's crust is:",
    options: {
      A: "Carbon dioxide",
      B: "Ozone",
      C: "Oxygen",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Oxygen",
    explanation: "Oxygen constitutes roughly 46.1% to 46.6% of the mass of the Earth's continental crust, followed by silicon (~27.7%) and aluminum (~8.1%).",
    difficulty: "Easy"
  },
  {
    questionId: 47,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Human Anatomy)",
    questionText: "The most sensitive layer [region] of eye is:",
    options: {
      A: "Cornea",
      B: "Pupil",
      C: "Macula",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Macula",
    explanation: "The macula (part of the retina containing the fovea centralis) possesses the densest concentration of photoreceptor cone cells and represents the most light-sensitive area responsible for high-acuity central vision.",
    difficulty: "Medium"
  },
  {
    questionId: 48,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Astronomy)",
    questionText: "Which is the slowest rotating planet?",
    options: {
      A: "Mars",
      B: "Venus",
      C: "Jupiter",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Venus",
    explanation: "Venus takes 243 Earth days to complete a single axial rotation, rotating slower than any other planet in the solar system (and in a retrograde direction).",
    difficulty: "Easy"
  },
  {
    questionId: 49,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Vitamins & Diseases)",
    questionText: "Deficiency of Vitamin-D in our body causes:",
    options: {
      A: "Scurvy",
      B: "Rickets",
      C: "Hair fall",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Rickets",
    explanation: "Vitamin D is essential for intestinal absorption of calcium and phosphate; its deficiency causes rickets in children and osteomalacia in adults. (Scurvy is caused by lack of Vitamin C).",
    difficulty: "Easy"
  },
  {
    questionId: 50,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Chemistry)",
    questionText: "Which metallic element is liquid at room temperature?",
    options: {
      A: "Zinc",
      B: "Nickle",
      C: "Lead",
      D: "None of these"
    },
    correctAnswer: "D",
    correctAnswerText: "None of these",
    explanation: "The only chemical metal that exists in a liquid state at room temperature (25°C) is Mercury (Hg). Since Mercury is not listed among options A, B, or C, the correct option is 'None of these'.",
    difficulty: "Medium"
  },
  {
    questionId: 51,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Scientific Instruments)",
    questionText: "The purity of one of the following is measured by Lactometer:",
    options: {
      A: "Honey",
      B: "Water",
      C: "Milk",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Milk",
    explanation: "A lactometer is a specialized hydrometer used to test the specific gravity and relative purity of milk and determine whether it has been adulterated with water.",
    difficulty: "Easy"
  },
  {
    questionId: 52,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science (Biochemistry)",
    questionText: "Which one of the following is the major ingredient of leather?",
    options: {
      A: "Carbohydrate",
      B: "Collagen",
      C: "Syntans",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Collagen",
    explanation: "Animal hides consist predominantly of collagen, a structural protein whose cross-links are stabilized during the tanning process to yield durable leather.",
    difficulty: "Medium"
  },
  {
    questionId: 53,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic & Logic",
    questionText: "If a > b and b > a, then?",
    options: {
      A: "a = b",
      B: "a != b",
      C: "cannot be evaluated",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "cannot be evaluated",
    explanation: "By the Trichotomy Property of real numbers, for any two numbers a and b, exactly one relationship must hold: a < b, a = b, or a > b. The conditions a > b and b > a are mutually exclusive and contradictory, so it cannot be evaluated.",
    difficulty: "Medium"
  },
  {
    questionId: 54,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Algebra)",
    questionText: "If Amna is x years old then 5 times Amna's age three years ago is:",
    options: {
      A: "3(x - 5)",
      B: "5(x - 3)",
      C: "3(x + 5)",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "5(x - 3)",
    explanation: "Amna's age three years ago was (x - 3). Multiplying this age by 5 gives 5(x - 3).",
    difficulty: "Easy"
  },
  {
    questionId: 55,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (BODMAS / Order of Operations)",
    questionText: "Evaluate the expression: 27 ÷ 3 * 2 + 4 ÷ 2 - 1",
    options: {
      A: "0",
      B: "12",
      C: "10",
      D: "None of these"
    },
    correctAnswer: "D",
    correctAnswerText: "None of these",
    explanation: "Applying BODMAS: First divisions: 27 ÷ 3 = 9 and 4 ÷ 2 = 2. Next multiplication: 9 * 2 = 18. Then addition and subtraction: 18 + 2 - 1 = 19. Since 19 is not among options A (0), B (12), or C (10), the answer is 'None of these'.",
    difficulty: "Medium"
  },
  {
    questionId: 56,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Inequalities)",
    questionText: "What is the solution interval of the inequality 6x - 2 >= 3x + 10?",
    options: {
      A: "(∞, 4)",
      B: "(-∞, 4]",
      C: "(-4, ∞)",
      D: "None of these"
    },
    correctAnswer: "D",
    correctAnswerText: "None of these",
    explanation: "Subtract 3x from both sides: 3x - 2 >= 10. Add 2: 3x >= 12. Divide by 3: x >= 4. The interval is [4, ∞). Since none of the given options corresponds to [4, ∞), the answer is 'None of these'.",
    difficulty: "Medium"
  },
  {
    questionId: 57,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Work & Time)",
    questionText: "Mr. A can do a particular work in 6 hours, and Mr. B can do the same work in 12 hours. How much time it will take if they do the work together?",
    options: {
      A: "7 hours",
      B: "5 hours",
      C: "4 hours",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "4 hours",
    explanation: "Combined rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 work per hour. Total time taken together = 1 / (1/4) = 4 hours.",
    difficulty: "Easy"
  },
  {
    questionId: 58,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Progressions)",
    questionText: "A sequence is called Arithmetic, if it has:",
    options: {
      A: "Addition",
      B: "Common difference",
      C: "Common ratio",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Common difference",
    explanation: "An arithmetic progression (AP) is characterized by a constant difference between consecutive terms, known as the common difference 'd'. A common ratio defines a geometric progression.",
    difficulty: "Easy"
  },
  {
    questionId: 59,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Averages & Means)",
    questionText: "Arithmetic mean between x - 3 and x + 3 is:",
    options: {
      A: "-6",
      B: "6",
      C: "x",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "x",
    explanation: "Arithmetic Mean = ((x - 3) + (x + 3)) / 2 = 2x / 2 = x.",
    difficulty: "Easy"
  },
  {
    questionId: 60,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Formulas)",
    questionText: "A single A.M. between a and b is:",
    options: {
      A: "(a + b) / 2",
      B: "±√(ab)",
      C: "2ab / (a + b)",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "(a + b) / 2",
    explanation: "The arithmetic mean of two numbers a and b is (a + b) / 2. (±√(ab) is the geometric mean, and 2ab/(a+b) is the harmonic mean).",
    difficulty: "Easy"
  },
  {
    questionId: 61,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Arithmetic Progressions)",
    questionText: "If A.P is -15, -22, -29, ... then 11th term:",
    options: {
      A: "-85",
      B: "85",
      C: "-66",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "-85",
    explanation: "Here a = -15, common difference d = -22 - (-15) = -7. The 11th term T11 = a + (n - 1)d = -15 + (10)(-7) = -15 - 70 = -85.",
    difficulty: "Easy"
  },
  {
    questionId: 62,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Arithmetic Means)",
    questionText: "Sum of 4 A.M between 18 and 3 is:",
    options: {
      A: "15",
      B: "12",
      C: "42",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "42",
    explanation: "The sum of n arithmetic means inserted between a and b equals n * ((a + b) / 2). Here n = 4, a = 18, b = 3. Sum = 4 * ((18 + 3) / 2) = 4 * (21 / 2) = 42.",
    difficulty: "Medium"
  },
  {
    questionId: 63,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Percentages)",
    questionText: "What percent of 120 are 90?",
    options: {
      A: "0.25",
      B: "0.5",
      C: "0.75",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "0.75",
    explanation: "90 / 120 = 3/4 = 0.75 = 75%.",
    difficulty: "Easy"
  },
  {
    questionId: 64,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Algebra & Percentages)",
    questionText: "If X% of Y is 100 and Y% of Z is 200, find a relation between X and Z:",
    options: {
      A: "Z = 2X",
      B: "Z = X / 2",
      C: "X = Z / 4",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Z = 2X",
    explanation: "(X/100)*Y = 100 => X*Y = 10,000. Also (Y/100)*Z = 200 => Y*Z = 20,000. Dividing the second by the first: (Y*Z)/(X*Y) = 20,000/10,000 => Z/X = 2 => Z = 2X.",
    difficulty: "Medium"
  },
  {
    questionId: 65,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Depreciation & Financial Math)",
    questionText: "The value of a computer depreciates by 10% annually. If the present value of the computer is Rs. 100,000, then what will be its value after 2 years?",
    options: {
      A: "18000",
      B: "10000",
      C: "81000",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "81000",
    explanation: "Value after Year 1 = 100,000 - 10,000 = Rs. 90,000. Value after Year 2 = 90,000 - 10%(90,000) = 90,000 - 9,000 = Rs. 81,000. Or P*(1 - r)^2 = 100,000 * 0.9^2 = 81,000.",
    difficulty: "Easy"
  },
  {
    questionId: 66,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Set Theory & Venn Diagrams)",
    questionText: "In a town 45% population read magazine A, 55% magazine B, 40% read Magazine C, 30% read magazines A and B, 15% read magazines B and C, 25% read magazines A and C and 10% read all the three magazines. What percentage does not read any magazine?",
    options: {
      A: "15",
      B: "10",
      C: "20",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "20",
    explanation: "By Principle of Inclusion-Exclusion: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(B ∩ C) - n(A ∩ C) + n(A ∩ B ∩ C) = 45 + 55 + 40 - 30 - 15 - 25 + 10 = 140 - 70 + 10 = 80%. Percentage not reading any magazine = 100% - 80% = 20%.",
    difficulty: "Hard"
  },
  {
    questionId: 67,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Proportions)",
    questionText: "The tank full of petrol in Haroon's motorcycle lasts for 10 days, if he starts using 25% more every day for how many days will the tank full of petrol last?",
    options: {
      A: "5 days",
      B: "7 days",
      C: "8 days",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "8 days",
    explanation: "Let original daily rate be 1 unit/day, so tank capacity = 10 units. New daily rate = 1 + 0.25 = 1.25 units/day. Days lasted = 10 / 1.25 = 8 days.",
    difficulty: "Medium"
  },
  {
    questionId: 68,
    part: "Part-II (General Intelligence)",
    subCategory: "Basic Arithmetic (Ratios)",
    questionText: "A ratio equivalent to 3 : 7 is:",
    options: {
      A: "3 : 9",
      B: "6 : 10",
      C: "9 : 21",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "9 : 21",
    explanation: "Multiplying both terms of 3 : 7 by 3 gives 9 : 21.",
    difficulty: "Easy"
  },
  {
    questionId: 69,
    part: "Part-II (General Intelligence)",
    subCategory: "Current Affairs & World Politics",
    questionText: "When did the current president of the United States of America Joe Biden take oath of the office?",
    options: {
      A: "January 20, 2020",
      B: "January 10, 2021",
      C: "January 20, 2021",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "January 20, 2021",
    explanation: "Joe Biden took the constitutional oath of office as the 46th President of the United States on January 20, 2021, under the 20th Amendment schedule.",
    difficulty: "Easy"
  },
  {
    questionId: 70,
    part: "Part-II (General Intelligence)",
    subCategory: "Everyday Science & Global Health",
    questionText: "The World Health Organization (WHO) announced COVID-19 as pandemic?",
    options: {
      A: "December 2019",
      B: "March 2020",
      C: "December 2020",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "March 2020",
    explanation: "WHO Director-General Dr. Tedros Adhanom Ghebreyesus declared the novel coronavirus outbreak a pandemic on March 11, 2020.",
    difficulty: "Easy"
  },
  {
    questionId: 71,
    part: "Part-II (General Intelligence)",
    subCategory: "Pakistan Affairs & Regional Conflicts",
    questionText: "What is the Article 370 of the Indian constitution?",
    options: {
      A: "It gave special status to Kashmir",
      B: "It allows Kashmir to be become a separate state if they vote for it",
      C: "Regarding the right of secession",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "It gave special status to Kashmir",
    explanation: "Article 370 of the Indian constitution granted special autonomous status to the disputed territory of Jammu and Kashmir, which was illegally abrogated by the Indian government on August 5, 2019.",
    difficulty: "Easy"
  },
  {
    questionId: 72,
    part: "Part-II (General Intelligence)",
    subCategory: "Diplomacy & Current Affairs",
    questionText: "What is the name of Foreign Minister of Italy who visited Pakistan in September 2021?",
    options: {
      A: "Matteo Renzi",
      B: "Matteo Salvini",
      C: "Luigi Di Maio",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Luigi Di Maio",
    explanation: "Italian Foreign Minister Luigi Di Maio visited Islamabad on September 6, 2021, holding talks on Afghanistan and bilateral cooperation.",
    difficulty: "Medium"
  },
  {
    questionId: 73,
    part: "Part-II (General Intelligence)",
    subCategory: "Pakistan Affairs & Constitutional Posts",
    questionText: "Who is the current governor of Baluchistan? [At the time of 2021/2022 exam]",
    options: {
      A: "Mohammad Khan Achakzai",
      B: "Zahoor Ahmed Agha",
      C: "Amanullah Khan Yasinzai",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Zahoor Ahmed Agha",
    explanation: "Syed Zahoor Ahmad Agha held office as the Governor of Balochistan from July 2021 to April 2022.",
    difficulty: "Medium"
  },
  {
    questionId: 74,
    part: "Part-II (General Intelligence)",
    subCategory: "World Affairs & International Infrastructure",
    questionText: "What is the name of the project European Union announced in December 2021 to support infrastructure development around the world apparently to counter China's BRI?",
    options: {
      A: "Global Gateway",
      B: "World Gateway",
      C: "International Gateway",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Global Gateway",
    explanation: "In December 2021, the EU launched its 'Global Gateway' initiative, mobilizing €300 billion in investments for sustainable digital, energy, and transport infrastructure.",
    difficulty: "Easy"
  },
  {
    questionId: 75,
    part: "Part-II (General Intelligence)",
    subCategory: "World Affairs & Regional Leaders",
    questionText: "Who is the current President of Sri Lanka? [At the time of 2021/2022 exam]",
    options: {
      A: "Gotabaya Rajapaksa",
      B: "Mahinda Rajapaksa",
      C: "Maithripala Sirisena",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Gotabaya Rajapaksa",
    explanation: "Gotabaya Rajapaksa served as the 8th President of Sri Lanka from November 2019 until July 2022.",
    difficulty: "Easy"
  },
  {
    questionId: 76,
    part: "Part-II (General Intelligence)",
    subCategory: "International Organizations (United Nations)",
    questionText: "Who is the General-Secretary of the United Nations?",
    options: {
      A: "Antonio Guterres",
      B: "Ban Ki-moon",
      C: "Kofi Annan",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "Antonio Guterres",
    explanation: "António Guterres of Portugal is the 9th Secretary-General of the United Nations, serving since January 2017.",
    difficulty: "Easy"
  },
  {
    questionId: 77,
    part: "Part-II (General Intelligence)",
    subCategory: "International Summits (G7)",
    questionText: "Where the 47th G7 summit was held from June 11 to 13, 2021?",
    options: {
      A: "UK",
      B: "China",
      C: "Russia",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "UK",
    explanation: "The 47th G7 summit took place in Carbis Bay, Cornwall, United Kingdom from 11-13 June 2021.",
    difficulty: "Easy"
  },
  {
    questionId: 78,
    part: "Part-II (General Intelligence)",
    subCategory: "International Summits (ASEAN)",
    questionText: "Which country hosted the ASEAN Summit 2020 via video conferencing?",
    options: {
      A: "Singapore",
      B: "Vietnam",
      C: "Thailand",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Vietnam",
    explanation: "Vietnam held the chair of ASEAN in 2020 and hosted both the 36th and 37th ASEAN Summits virtually due to COVID restrictions.",
    difficulty: "Medium"
  },
  {
    questionId: 79,
    part: "Part-II (General Intelligence)",
    subCategory: "Science & Technology",
    questionText: "Which country's super computer has become the fastest in the world?",
    options: {
      A: "The United States",
      B: "Japan",
      C: "China",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "The United States",
    explanation: "In June 2022, the Frontier supercomputer at Oak Ridge National Laboratory in the United States took the #1 spot as the world's fastest supercomputer, surpassing Japan's Fugaku which held the title from 2020 through early 2022.",
    difficulty: "Medium"
  },
  {
    questionId: 80,
    part: "Part-II (General Intelligence)",
    subCategory: "World Affairs & European Politics",
    questionText: "Who is current chancellor of Germany?",
    options: {
      A: "Angela Merkel",
      B: "Olaf Scholz",
      C: "Annalena Baerbock",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Olaf Scholz",
    explanation: "Olaf Scholz took office as Chancellor of the Federal Republic of Germany on December 8, 2021, succeeding Angela Merkel.",
    difficulty: "Easy"
  },
  {
    questionId: 81,
    part: "Part-II (General Intelligence)",
    subCategory: "Pakistan Affairs & CPEC",
    questionText: "Which one is the northern end of Pakistani side of CPEC?",
    options: {
      A: "Khyber Pass",
      B: "Babusar Pass",
      C: "Khunjerab Pass",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Khunjerab Pass",
    explanation: "Khunjerab Pass (altitude 4,693 meters) is the international border crossing on the Karakoram Highway that marks the northern gateway of the China-Pakistan Economic Corridor (CPEC).",
    difficulty: "Easy"
  },
  {
    questionId: 82,
    part: "Part-II (General Intelligence)",
    subCategory: "World Economic Forum & Global Summits",
    questionText: "When was the last annual meeting (not virtual) of the World Economic Forum held?",
    options: {
      A: "January 20-24, 2020",
      B: "August, 17-20, 2021",
      C: "January 17-21, 2022",
      D: "None of these"
    },
    correctAnswer: "A",
    correctAnswerText: "January 20-24, 2020",
    explanation: "The 50th WEF Annual Meeting in Davos-Klosters was held in person from January 21 to 24, 2020, before global travel restrictions paused in-person Davos sessions.",
    difficulty: "Medium"
  },
  {
    questionId: 83,
    part: "Part-II (General Intelligence)",
    subCategory: "Afghan Peace Process & Geopolitics",
    questionText: "Who led the Afghan Taliban team during the peace negotiations with the United States at Doha?",
    options: {
      A: "Abdul Hakim",
      B: "Anas Haqqani",
      C: "Sher Muhammad Abbas Stanikzai",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Sher Muhammad Abbas Stanikzai",
    explanation: "Sher Mohammad Abbas Stanikzai served as the chief of the Taliban negotiating team in Doha throughout the landmark bilateral negotiations with US Special Representative Zalmay Khalilzad.",
    difficulty: "Medium"
  },
  {
    questionId: 84,
    part: "Part-II (General Intelligence)",
    subCategory: "World Geography",
    questionText: "Which country is southern neighbor of United States of America?",
    options: {
      A: "Panama",
      B: "Canada",
      C: "Mexico",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Mexico",
    explanation: "The United Mexican States (Mexico) shares the United States' southern border stretching roughly 3,145 km. Canada shares its northern border.",
    difficulty: "Easy"
  },

  // --- PART-III (FIA ACT, 1974 & PROCEDURAL LAW) Q85 to Q100 ---
  {
    questionId: 85,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "The Federal Investigation Agency came into force on:",
    options: {
      A: "1st January, 1974",
      B: "13th January, 1975",
      C: "15th January, 1975",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "13th January, 1975",
    explanation: "Under Section 1(3) of the FIA Act, 1974 (Act No. VIII of 1975), it came into force at once upon receiving presidential assent on January 13, 1975.",
    difficulty: "Medium"
  },
  {
    questionId: 86,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "The Preamble of the FIA Act provides the constitution of an Agency for:",
    options: {
      A: "Trial of certain offences committed in connection with matters concerning the Federal Government",
      B: "Investigation of certain offences committed in connection with matters concerning the Federal Government",
      C: "Inquiry and investigation of certain offences committed in connection with matters concerning the Federal Government",
      D: "All of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Inquiry and investigation of certain offences committed in connection with matters concerning the Federal Government",
    explanation: "The preamble explicitly states: 'Whereas it is expedient to provide for the constitution of a Federal Investigation Agency for the inquiry into, and investigation of, certain offences committed in connection with matters concerning the Federal Government, and for matters connected therewith'. Trial is conducted by courts/Special Judges, not the Agency.",
    difficulty: "Medium"
  },
  {
    questionId: 87,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "Which of the following is in correct? [i.e., incorrect statement regarding applicability]:",
    options: {
      A: "FIA Act is applicable to public servants",
      B: "FIA Act is applicable to all citizens of Pakistan",
      C: "FIA Act is applicable to all employees",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "FIA Act is applicable to all employees",
    explanation: "Under Section 1(2), the Act extends to the whole of Pakistan and applies to all citizens of Pakistan and public servants wherever they may be. It does NOT universally apply to all private commercial employees unless offences are committed in relation to scheduled federal laws.",
    difficulty: "Medium"
  },
  {
    questionId: 88,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "Federal Investigation Agency is constituted under section _____ of the FIA Act.",
    options: {
      A: "7",
      B: "5",
      C: "3",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "3",
    explanation: "Section 3 of the FIA Act, 1974 is explicitly titled 'Constitution of the Agency', authorizing the Federal Government to constitute the Agency.",
    difficulty: "Easy"
  },
  {
    questionId: 89,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "FIA Act does not contain any provision pertaining to:",
    options: {
      A: "Pakistan Railways Police",
      B: "Islamabad Capital Territory Police",
      C: "AJK Police",
      D: "All of these"
    },
    correctAnswer: "D",
    correctAnswerText: "All of these",
    explanation: "The FIA Act exclusively provides for the Federal Investigation Agency and the repealed Special Police Establishment. It does not govern the Railways Police (governed by the Pakistan Railways Police Act 1977), ICT Police (Police Order 2002/Police Act 1861), or AJK Police.",
    difficulty: "Medium"
  },
  {
    questionId: 90,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "The term public servant denotes:",
    options: {
      A: "Public servant as defined in section 19 of the Pakistan Penal Code, 1860",
      B: "Public servant as defined in section 20 of the Pakistan Penal Code, 1860",
      C: "Public servant as defined in section 21 of the Pakistan Penal Code, 1860",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Public servant as defined in section 21 of the Pakistan Penal Code, 1860",
    explanation: "Section 2(d) of the FIA Act, 1974 states: ''public servant' means a public servant as defined in Section 21 of the Pakistan Penal Code (Act XLV of 1860), and includes an employee of any corporation or other body or organization set up, controlled or administered by or under the authority of the Federal Government'.",
    difficulty: "Easy"
  },
  {
    questionId: 91,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "The applicability of the FIA Act extends to:",
    options: {
      A: "Employees of all corporations",
      B: "Employees of all corporations set up or controlled by Federal as well as provincial Governments",
      C: "Employees of all corporations set up or controlled by or under the authority of Federal as well as Provincial Governments",
      D: "None of these"
    },
    correctAnswer: "D",
    correctAnswerText: "None of these",
    explanation: "Under Section 2(d) & Section 3, FIA's statutory jurisdiction covers corporations set up, controlled, or administered by the Federal Government, but NOT provincial government corporations (which are governed by Provincial Anti-Corruption Establishments). Hence 'None of these' is correct.",
    difficulty: "Hard"
  },
  {
    questionId: 92,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "The Pakistan Special Police Establishment came into existence in:",
    options: {
      A: "1947",
      B: "1948",
      C: "1962",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "1948",
    explanation: "The Pakistan Special Police Establishment was promulgated under the Pakistan Special Police Establishment Ordinance, 1948 (Ordinance No. VII of 1948), later merged into FIA under Section 3 & 9 of the FIA Act 1974.",
    difficulty: "Medium"
  },
  {
    questionId: 93,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "The Director General of the Federal Investigation Agency is appointed by:",
    options: {
      A: "Federal Cabinet",
      B: "Prime Minister",
      C: "Federal Government",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Federal Government",
    explanation: "Section 3(2) of the FIA Act explicitly stipulates: 'The Agency shall consist of a Director-General to be appointed by the Federal Government, and such number of other officers as the Federal Government may, from time to time, appoint.'",
    difficulty: "Easy"
  },
  {
    questionId: 94,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "The superintendence of the Federal Investigation Agency vests in:",
    options: {
      A: "Prime Minister",
      B: "Ministry of Interior",
      C: "Federal Cabinet",
      D: "None of these"
    },
    correctAnswer: "D",
    correctAnswerText: "None of these",
    explanation: "Under Section 4(1) of the FIA Act, 1974, 'The superintendence of the Agency shall vest in the Federal Government.' Because 'Federal Government' is not among options A (Prime Minister), B (Ministry of Interior), or C (Federal Cabinet), the exact statutory answer is 'None of these'.",
    difficulty: "Hard"
  },
  {
    questionId: 95,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "Section _____ of the FIA Act contains the powers of the members of the Agency:",
    options: {
      A: "3",
      B: "5",
      C: "7",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "5",
    explanation: "Section 5 of the FIA Act, 1974 is titled 'Powers of the members of the Agency', conferring police powers of inquiry, search, arrest, and seizure throughout Pakistan.",
    difficulty: "Easy"
  },
  {
    questionId: 96,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "Power of arrest without warrant has been entrusted to _____ under the FIA Act:",
    options: {
      A: "Constable",
      B: "Assistant Sub-Inspector",
      C: "Sub-Inspector",
      D: "All of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Sub-Inspector",
    explanation: "Section 5(2) of the FIA Act provides: 'any member of the Agency not below the rank of Sub-Inspector may arrest without warrant any person who has committed, or against whom a reasonable suspicion exists of his having committed, any of the offences referred to in sub-section (1)'.",
    difficulty: "Medium"
  },
  {
    questionId: 97,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "An arrest under the FIA Act can be made:",
    options: {
      A: "After commission of an offence",
      B: "On reasonable suspicion of commission of an offence",
      C: "Both (A) & (B)",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Both (A) & (B)",
    explanation: "Section 5(2) of the FIA Act explicitly empowers arrest of any person who has committed an offence or against whom a reasonable suspicion exists of having committed an offence.",
    difficulty: "Easy"
  },
  {
    questionId: 98,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "The Director General of the Agency exercises powers like:",
    options: {
      A: "Director General of Intelligence Bureau",
      B: "Inspector General of Pakistan Railways Police",
      C: "Inspector General of Police",
      D: "All of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Inspector General of Police",
    explanation: "Section 4(2) of the FIA Act, 1974 states that the Director-General shall exercise in respect of the Agency such of the powers of an Inspector-General of Police under the Police Act, 1861 (V of 1861).",
    difficulty: "Easy"
  },
  {
    questionId: 99,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "A person arrested under the FIA Act may be detained at:",
    options: {
      A: "Police Station set up by Police",
      B: "Any place declared as police station",
      C: "Both (A) & (B)",
      D: "None of these"
    },
    correctAnswer: "C",
    correctAnswerText: "Both (A) & (B)",
    explanation: "Under Section 5(1) & 5(2), an accused may be remanded or detained at a regular police station or any office/place specifically declared by the Federal Government to be a police station.",
    difficulty: "Medium"
  },
  {
    questionId: 100,
    part: "Part-III (FIA Act, 1974)",
    subCategory: "FIA Act 1974 & Legal Framework",
    questionText: "When property under investigation is apprehended to be transferred, an order to restrain its transfer may be made by:",
    options: {
      A: "Federal Government",
      B: "Member of the Agency",
      C: "Ministry of Interior",
      D: "None of these"
    },
    correctAnswer: "B",
    correctAnswerText: "Member of the Agency",
    explanation: "Section 5(5) of the FIA Act provides: 'If, in the course of an inquiry or investigation, it appears to any member of the Agency... that any property is subject to transfer or removal... he may, with the prior approval of the Director-General or an officer authorized by him, make an order in writing directing that such property shall not be transferred or dealt with.'",
    difficulty: "Medium"
  }
];

// Metadata definition
const pastPaperMeta = {
  paperNumber: 2021,
  paperId: "fia_past_paper_2021_batch1",
  caseNo: "F.4-149/2021-R",
  post: "Assistant Director (Investigation) (BS-17) (Batch-1)",
  organization: "Federal Public Service Commission (FPSC)",
  department: "Federal Investigation Agency (FIA)",
  totalMarks: 100,
  timeAllowedMinutes: 100,
  passingScore: 50,
  totalQuestions: 100,
  difficultyTier: "Official Past Paper",
  isPastPaper: true,
  breakdown: {
    english: 20,
    maths: 14,
    everydayScience: 16,
    currentAffairs: 20,
    generalKnowledge: 14,
    fiaAct1974: 16
  },
  title: "FPSC Case F.4-149/2021-R: FIA AD (Investigation) Batch-1 Real Past Paper",
  description: "Official 100-mark FPSC recruitment test for Assistant Director (Investigation) BS-17 (Batch-1, Case No. F.4-149/2021-R). Complete 100 original questions with verified answers and exhaustive analytical explanations."
};

// Formatted MCQs for system integration
const formattedMCQs = questions.map((q) => {
  return {
    _id: `fia_past_2021_b1_q${q.questionId}`,
    questionId: q.questionId,
    paperNumber: 2021,
    paperId: "fia_past_paper_2021_batch1",
    paperTitle: "FPSC Case F.4-149/2021-R: FIA AD (Investigation) Batch-1 Real Past Paper",
    paperSubCategory: "Past Paper 2021 Batch-1",
    part: q.part,
    subCategory: q.subCategory,
    category: {
      _id: "cat_fia_ad_sample",
      name: "FIA Assistant Director Sample Papers"
    },
    questionText: q.questionText,
    options: q.options,
    correctAnswer: q.correctAnswer,
    correctAnswerText: q.correctAnswerText,
    explanation: q.explanation,
    difficulty: q.difficulty
  };
});

// Generate file content
const outputContent = `/**
 * Authentic Past Paper: FPSC Case No. F.4-149/2021-R
 * Post: Assistant Director (Investigation) (BS-17) (Batch-1)
 * Organization: Federal Public Service Commission (FPSC) / Federal Investigation Agency (FIA)
 * Total Questions: 100 | Marks: 100 | Time: 100 Minutes
 * 
 * Part-I: English (Q1 - Q20)
 * Part-II: General Intelligence, Current Affairs, Science, Arithmetic (Q21 - Q84)
 * Part-III: FIA Act, 1974 & Procedural Law (Q85 - Q100)
 */

window.FPSC_FIA_2021_BATCH1_METADATA = ${JSON.stringify(pastPaperMeta, null, 2)};

window.FPSC_FIA_2021_BATCH1_MCQS = ${JSON.stringify(formattedMCQs, null, 2)};

// Also ensure accessibility in global pools
if (typeof window !== 'undefined') {
  if (!Array.isArray(window.ALL_PAST_PAPERS)) {
    window.ALL_PAST_PAPERS = [];
  }
  window.ALL_PAST_PAPERS.push({
    meta: window.FPSC_FIA_2021_BATCH1_METADATA,
    questions: window.FPSC_FIA_2021_BATCH1_MCQS
  });

  if (Array.isArray(window.FIA_SAMPLE_PAPERS_METADATA)) {
    if (!window.FIA_SAMPLE_PAPERS_METADATA.some(p => p.paperNumber === 2021)) {
      window.FIA_SAMPLE_PAPERS_METADATA.unshift(window.FPSC_FIA_2021_BATCH1_METADATA);
    }
  }

  if (Array.isArray(window.FIA_SAMPLE_PAPERS_MCQS)) {
    if (!window.FIA_SAMPLE_PAPERS_MCQS.some(q => q.paperNumber === 2021)) {
      window.FIA_SAMPLE_PAPERS_MCQS = window.FIA_SAMPLE_PAPERS_MCQS.concat(window.FPSC_FIA_2021_BATCH1_MCQS);
    }
  }
}
`;

const targetPath = path.join(__dirname, '..', 'frontend', 'js', 'data_fia_past_paper_2021_batch1.js');
fs.writeFileSync(targetPath, outputContent, 'utf-8');
console.log(`Successfully generated ${targetPath} with ${formattedMCQs.length} questions.`);
