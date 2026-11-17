/**
 * English Grammar Rules & Handbook Data
 * Comprehensive rules, transformation formulas, charts, fixed prepositions,
 * parts of speech identification, and practice drills for FPSC, PPSC, CSS & PMS.
 */
window.GRAMMAR_DATA = {
  // 1. ACTIVE & PASSIVE VOICE
  activePassive: {
    overview: "In Active Voice, the subject performs the action. In Passive Voice, the subject receives the action. Passive voice is essential in formal, scientific, and journalistic English where the action or receiver is more prominent than the agent.",
    universalRules: [
      "The Object of the active sentence becomes the Subject of the passive sentence.",
      "The Subject of the active sentence becomes the Object of the passive sentence, preceded by the preposition 'by' (or 'to', 'with', 'at' in specific lexical exceptions).",
      "The main verb is ALWAYS converted into its Past Participle (3rd Form - V3).",
      "An appropriate form of the auxiliary verb 'to be' (is, am, are, was, were, being, been) is introduced according to the tense of the active verb.",
      "Pronouns change their case: I ↔ me, We ↔ us, You ↔ you, He ↔ him, She ↔ her, They ↔ them, Who ↔ By whom."
    ],
    tenseTable: [
      {
        tense: "Present Simple",
        activeRule: "Subject + V1 (s/es) + Object",
        passiveRule: "Obj + is / am / are + V3 + by + Subj",
        activeExample: "The government constructs modern highways.",
        passiveExample: "Modern highways are constructed by the government."
      },
      {
        tense: "Present Continuous",
        activeRule: "Subject + is / am / are + V1-ing + Object",
        passiveRule: "Obj + is / am / are + BEING + V3 + by + Subj",
        activeExample: "The committee is reviewing the fiscal policy.",
        passiveExample: "The fiscal policy is being reviewed by the committee."
      },
      {
        tense: "Present Perfect",
        activeRule: "Subject + has / have + V3 + Object",
        passiveRule: "Obj + has / have + BEEN + V3 + by + Subj",
        activeExample: "The scientist has published a breakthrough paper.",
        passiveExample: "A breakthrough paper has been published by the scientist."
      },
      {
        tense: "Past Simple",
        activeRule: "Subject + V2 + Object",
        passiveRule: "Obj + was / were + V3 + by + Subj",
        activeExample: "The auditor discovered a serious financial discrepancy.",
        passiveExample: "A serious financial discrepancy was discovered by the auditor."
      },
      {
        tense: "Past Continuous",
        activeRule: "Subject + was / were + V1-ing + Object",
        passiveRule: "Obj + was / were + BEING + V3 + by + Subj",
        activeExample: "They were drafting the diplomatic accord.",
        passiveExample: "The diplomatic accord was being drafted by them."
      },
      {
        tense: "Past Perfect",
        activeRule: "Subject + had + V3 + Object",
        passiveRule: "Obj + had + BEEN + V3 + by + Subj",
        activeExample: "The police had apprehended the fugitive before dawn.",
        passiveExample: "The fugitive had been apprehended by the police before dawn."
      },
      {
        tense: "Future Simple",
        activeRule: "Subject + will / shall + V1 + Object",
        passiveRule: "Obj + will / shall + BE + V3 + by + Subj",
        activeExample: "The Parliament will pass the procurement bill.",
        passiveExample: "The procurement bill will be passed by the Parliament."
      },
      {
        tense: "Future Perfect",
        activeRule: "Subject + will have + V3 + Object",
        passiveRule: "Obj + will have + BEEN + V3 + by + Subj",
        activeExample: "By December, engineers will have completed the dam.",
        passiveExample: "By December, the dam will have been completed by engineers."
      },
      {
        tense: "Modal Auxiliaries (can, could, may, might, must, should)",
        activeRule: "Subject + Modal + V1 + Object",
        passiveRule: "Obj + Modal + BE + V3 + by + Subj",
        activeExample: "Citizens must obey constitutional statutes.",
        passiveExample: "Constitutional statutes must be obeyed by citizens."
      }
    ],
    nonTransformableTenses: [
      "Present Perfect Continuous (has/have been doing)",
      "Past Perfect Continuous (had been doing)",
      "Future Continuous (will be doing)",
      "Future Perfect Continuous (will have been doing)",
      "Intransitive Verbs (verbs that do not take a direct object, e.g., sleep, arrive, laugh, die, happen) cannot be transformed into passive voice."
    ],
    specialStructures: [
      {
        title: "Imperative Sentences (Commands, Orders, Advice, Requests)",
        rules: [
          "Orders/Commands: Let + Object + be + V3 (e.g. 'Shut the door.' → 'Let the door be shut.')",
          "Moral Duty / Advice: Object + should + be + V3 (e.g. 'Help the poor.' → 'The poor should be helped.')",
          "Requests: You are requested to + V1 (e.g. 'Please grant me leave.' → 'You are requested to grant me leave.')",
          "Prohibitions: You are forbidden to + V1 or Let not + Object + be + V3 (e.g. 'Do not pluck flowers.' → 'Let flowers not be plucked.')"
        ]
      },
      {
        title: "Interrogative Sentences (Questions)",
        rules: [
          "Wh- Questions remain at the start (e.g. 'Why did he write this letter?' → 'Why was this letter written by him?')",
          "'Who' converts to 'By whom' (e.g. 'Who wrote Hamlet?' → 'By whom was Hamlet written?')",
          "'Whom' converts to 'Who' (e.g. 'Whom did you invite?' → 'Who was invited by you?')"
        ]
      },
      {
        title: "Verbs Taking Prepositions other than 'By'",
        rules: [
          "Known to: 'I know him.' → 'He is known to me.' (NOT known by me)",
          "Surprised at: 'His rude behavior surprised everyone.' → 'Everyone was surprised at his rude behavior.'",
          "Pleased with: 'Her performance pleased the judges.' → 'The judges were pleased with her performance.'",
          "Contained in: 'This jug contains milk.' → 'Milk is contained in this jug.'",
          "Satisfied with: 'His explanation satisfied the board.' → 'The board was satisfied with his explanation.'"
        ]
      }
    ],
    drills: [
      {
        question: "Change to Passive: 'The Supreme Court delivered a landmark constitutional verdict yesterday.'",
        solution: "A landmark constitutional verdict was delivered by the Supreme Court yesterday.",
        explanation: "Past Simple tense (delivered) converts to 'was + delivered (V3)'."
      },
      {
        question: "Change to Passive: 'Who composed this timeless classical symphony?'",
        solution: "By whom was this timeless classical symphony composed?",
        explanation: "'Who' changes to 'By whom', followed by auxiliary 'was' + subject + V3."
      },
      {
        question: "Change to Passive: 'Do not disclose this confidential intelligence report.'",
        solution: "Let this confidential intelligence report not be disclosed. (Or: You are instructed not to disclose this confidential intelligence report.)",
        explanation: "Negative imperative command follows 'Let + Obj + not + be + V3'."
      },
      {
        question: "Change to Passive: 'The abrupt departure of the ambassador surprised us.'",
        solution: "We were surprised at the abrupt departure of the ambassador.",
        explanation: "'Surprised' takes the preposition 'at', not 'by'."
      }
    ]
  },

  // 2. DIRECT & INDIRECT NARRATION (REPORTED SPEECH)
  directIndirect: {
    overview: "Direct Speech quotes the exact words of the speaker enclosed in quotation marks (e.g. He said, 'I am ill.'). Indirect Speech (Reported Speech) reports what someone said without quoting their exact words (e.g. He said that he was ill.).",
    fiveStepFormula: [
      "Step 1: Change of Reporting Verb (said → said; said to → told / asked / ordered / requested / advised / exclaimed / prayed).",
      "Step 2: Removal of Inverted Commas and insertion of Conjunction ('that' for assertive; 'if/whether' for yes/no questions; 'wh-' word remains for wh-questions; 'to' for imperatives).",
      "Step 3: Change of Pronouns using the S.O.N. Formula (1st Person → Subject of reporting verb; 2nd Person → Object of reporting verb; 3rd Person → No change).",
      "Step 4: Change of Tenses (Backshifting if the reporting verb is in the Past tense).",
      "Step 5: Change of Words denoting Time, Proximity, and Place."
    ],
    tenseBackshiftTable: [
      { direct: "Present Simple (V1)", indirect: "Past Simple (V2)", example: "'I work hard.' → He said that he worked hard." },
      { direct: "Present Continuous (is/am/are + V-ing)", indirect: "Past Continuous (was/were + V-ing)", example: "'I am writing.' → She said that she was writing." },
      { direct: "Present Perfect (has/have + V3)", indirect: "Past Perfect (had + V3)", example: "'I have finished.' → He said that he had finished." },
      { direct: "Present Perfect Continuous (has/have been)", indirect: "Past Perfect Continuous (had been)", example: "'I have been waiting.' → She said that she had been waiting." },
      { direct: "Past Simple (V2)", indirect: "Past Perfect (had + V3)", example: "'I bought a book.' → He said that he had bought a book." },
      { direct: "Past Continuous (was/were + V-ing)", indirect: "Past Perfect Continuous (had been + V-ing)", example: "'I was reading.' → He said that he had been reading." },
      { direct: "Past Perfect (had + V3)", indirect: "Past Perfect (No change - had + V3)", example: "'I had left.' → She said that she had left." },
      { direct: "Will / Shall", indirect: "Would / Should", example: "'I will assist you.' → He said that he would assist me." },
      { direct: "Can / May", indirect: "Could / Might", example: "'I can solve it.' → She said that she could solve it." },
      { direct: "Must", indirect: "Had to / Must", example: "'I must go now.' → He said that he had to go then." }
    ],
    timePlaceChangeTable: [
      { direct: "Now", indirect: "Then" },
      { direct: "Today", indirect: "That day" },
      { direct: "Yesterday", indirect: "The day before / The previous day" },
      { direct: "Tomorrow", indirect: "The next day / The following day" },
      { direct: "Tonight", indirect: "That night" },
      { direct: "Last night", indirect: "The previous night" },
      { direct: "Here", indirect: "There" },
      { direct: "This / These", indirect: "That / Those" },
      { direct: "Ago", indirect: "Before" },
      { direct: "Thus", indirect: "So" },
      { direct: "Come", indirect: "Go (context dependent)" }
    ],
    exceptionsNoTenseChange: [
      "Universal Truths & Scientific Laws: If the reported speech expresses an eternal truth, scientific fact, or geographical reality, its tense does NOT change. Example: The teacher said, 'The Earth revolves around the Sun.' → The teacher said that the Earth revolves around the Sun.",
      "Habitual Facts & Historical Truths: Example: He said, 'I walk five kilometers every morning.' → He said that he walks five kilometers every morning.",
      "Reporting Verb in Present or Future Tense: If the reporting verb is in the Present ('says', 'tells') or Future ('will say'), the tense of the reported speech does NOT change! Example: She says, 'I am ready.' → She says that she is ready."
    ],
    sentenceTypesRules: [
      {
        type: "Interrogative Sentences (Questions)",
        rules: "Reporting verb changes to 'asked' or 'inquired of'. In Yes/No questions, conjunction 'if' or 'whether' is used. In Wh-questions (Who, Where, Why, When, What), the wh-word itself acts as the conjunction. The interrogative structure changes into an assertive structure (Subject precedes Verb; question mark is dropped)."
      },
      {
        type: "Imperative Sentences (Commands & Requests)",
        rules: "Reporting verb changes to 'ordered', 'commanded', 'requested', 'advised', 'warned', or 'forbade'. Conjunction 'to' + base verb (V1) is used. For negative commands, use 'not to + V1' (or 'forbade' with positive infinitive)."
      },
      {
        type: "Optative Sentences (Wishes & Prayers)",
        rules: "Reporting verb changes to 'wished' or 'prayed'. Conjunction 'that' is used. 'May' changes to 'might'. Example: The old man said, 'May you live long!' → The old man prayed that I might live long."
      },
      {
        type: "Exclamatory Sentences",
        rules: "Reporting verb changes to 'exclaimed with joy', 'exclaimed with sorrow', 'exclaimed with wonder', or 'applauded'. Exclamation words (Hurrah, Alas, Wow, Bravo) are removed. Conjunction 'that' is used."
      }
    ],
    drills: [
      {
        question: "Convert to Indirect: The professor said, 'Light travels faster than sound in all media.'",
        solution: "The professor said that light travels faster than sound in all media.",
        explanation: "Universal scientific fact: tense remains in Present Simple."
      },
      {
        question: "Convert to Indirect: She said to me, 'Did you submit your research proposal yesterday?'",
        solution: "She asked me if (or whether) I had submitted my research proposal the previous day.",
        explanation: "'Said to' → 'asked'; Yes/No question introduces 'if'; Past Simple ('did submit') backshifts to Past Perfect ('had submitted'); 'yesterday' → 'the previous day'."
      },
      {
        question: "Convert to Indirect: The commander said to the soldiers, 'Do not retreat under any circumstance.'",
        solution: "The commander ordered the soldiers not to retreat under any circumstance. (Or: The commander forbade the soldiers to retreat under any circumstance.)",
        explanation: "Imperative command: 'ordered' + 'not to retreat'."
      },
      {
        question: "Convert to Indirect: He said, 'Alas! I have ruined my lifelong reputation.'",
        solution: "He exclaimed with sorrow that he had ruined his lifelong reputation.",
        explanation: "Exclamatory sentence: 'said + Alas!' → 'exclaimed with sorrow that', and Present Perfect ('have ruined') backshifts to Past Perfect ('had ruined')."
      }
    ]
  },

  // 3. PREPOSITIONS
  prepositions: {
    overview: "A preposition is a word placed before a noun or pronoun to show its relationship (in time, space, direction, or manner) with another word in the sentence. Prepositions are among the highest-tested sections in FPSC, PPSC, and CSS papers.",
    timeRules: [
      { prep: "AT", usage: "Precise clock times, specific festive points, night, dawn, noon.", examples: "at 5:00 PM, at midnight, at dawn, at Eid, at sunset." },
      { prep: "ON", usage: "Specific days of the week, calendar dates, anniversaries, specific day parts.", examples: "on Monday, on 14 August 1947, on my birthday, on Friday morning." },
      { prep: "IN", usage: "Months, years, centuries, seasons, historical eras, long durations, parts of day.", examples: "in July, in 1947, in the 21st century, in summer, in the morning." }
    ],
    placeRules: [
      { prep: "IN vs. AT", usage: "'In' is used for large geographical areas, countries, cities, and enclosed spaces. 'At' is used for specific pinpoint addresses, exact locations, or functional gatherings.", examples: "He lives in Islamabad, but works at the Federal Secretariat." },
      { prep: "ON vs. ABOVE vs. OVER", usage: "'On' implies direct physical surface contact. 'Above' means higher elevation without contact. 'Over' implies directly vertically overhead or across with movement.", examples: "The book is on the table. The sun shines above our heads. The aircraft flew over the city." },
      { prep: "BETWEEN vs. AMONG", usage: "'Between' is strictly used for TWO persons or items (or reciprocal mutual relationships among defined entities). 'Among' is used for MORE THAN TWO items in a group.", examples: "Distribute the property between the two brothers. Divide the scholarship funds among the five candidates." },
      { prep: "BESIDE vs. BESIDES", usage: "'Beside' means next to or by the side of. 'Besides' means in addition to / apart from.", examples: "He sat beside me in the hall. Besides English, she speaks French and Arabic fluently." },
      { prep: "SINCE vs. FOR", usage: "'Since' denotes a specific starting Point of Time in the past. 'For' denotes a Period / Duration of time.", examples: "She has been studying since 8:00 AM. They have been negotiating for three hours." }
    ],
    fixedPrepositions: [
      { word: "Abide by", meaning: "To comply with / follow", example: "Every citizen must abide by the constitution." },
      { word: "Abstain from", meaning: "To refrain deliberately from doing something", example: "He decided to abstain from alcohol." },
      { word: "Accused of", meaning: "Charged with an offence", example: "The official was accused of accepting kickbacks." },
      { word: "Adhere to", meaning: "To stick firmly to a principle or rule", example: "The agency must adhere to statutory guidelines." },
      { word: "Adjacent to", meaning: "Next to / adjoining", example: "The Supreme Court is adjacent to the Prime Minister Office." },
      { word: "Agree with / to", meaning: "Agree with a person; agree to a proposal", example: "I agree with you, but I cannot agree to this proposal." },
      { word: "Aim at", meaning: "To direct toward a target", example: "He aimed at the bullseye with precision." },
      { word: "Approve of", meaning: "To have a positive opinion of", example: "Her parents do not approve of her reckless lifestyle." },
      { word: "Aware of", meaning: "Having knowledge or perception", example: "Diplomats are acutely aware of the geopolitical risks." },
      { word: "Boast of / about", meaning: "To brag proudly", example: "He constantly boasts of his ancestral achievements." },
      { word: "Comply with", meaning: "To act in accordance with an order or rule", example: "The factory failed to comply with environmental regulations." },
      { word: "Congratulate on", meaning: "To praise for an achievement (NEVER congratulate for!)", example: "I congratulated him on passing the CSS examination." },
      { word: "Cope with", meaning: "To manage successfully (NEVER 'cope up with'!)", example: "The healthcare system struggled to cope with the influx of patients." },
      { word: "Devoid of", meaning: "Entirely lacking or empty of", example: "His speech was completely devoid of constructive substance." },
      { word: "Die of / from / for", meaning: "Die of a disease; die from an external cause/wound; die for a noble cause", example: "He died of cancer. He died from overwork. Martyrs die for their country." },
      { word: "Eligible for", meaning: "Qualified or entitled to", example: "Only candidates with a 16-year degree are eligible for the post." },
      { word: "Fond of", meaning: "Having an affection or liking for", example: "She is very fond of classical Urdu literature." },
      { word: "Good at", meaning: "Skilled in a discipline (sports, subjects)", example: "He is exceptionally good at mathematics and statistics." },
      { word: "Guilty of", meaning: "Culpable of committing a crime", example: "The jury found the defendant guilty of perjury." },
      { word: "Insist on", meaning: "To demand firmly (followed by Gerund V-ing)", example: "She insisted on paying the bill herself." },
      { word: "Jealous of", meaning: "Envious of someone else's success", example: "He was jealous of his colleague's rapid promotion." },
      { word: "Look forward to", meaning: "Anticipate with pleasure (followed by Gerund V-ing!)", example: "We look forward to hearing from you soon." },
      { word: "Prefer to", meaning: "Like more than another (NEVER prefer than!)", example: "I prefer tea to coffee in the morning." },
      { word: "Prevent from", meaning: "To stop from happening (followed by Gerund)", example: "Security forces prevented the protesters from entering." },
      { word: "Rely on / upon", meaning: "To depend with confidence", example: "Developing nations cannot solely rely on foreign aid." },
      { word: "Senior / Junior / Superior to", meaning: "Latin adjectives ending in -ior take 'to', NEVER 'than'", example: "He is senior to me by three years in service." }
    ],
    drills: [
      {
        question: "Fill in the blank: 'The candidate was congratulated _____ securing the first position in the CSS exam.'",
        solution: "on",
        explanation: "'Congratulate' always collocates with the preposition 'on', never 'for'."
      },
      {
        question: "Fill in the blank: 'He prefers reading classical philosophical treatises _____ watching television.'",
        solution: "to",
        explanation: "'Prefer' always takes the preposition 'to', never 'than'."
      },
      {
        question: "Fill in the blank: 'The regional administration could not cope _____ the unprecedented monsoon deluges.'",
        solution: "with",
        explanation: "The correct standard idiom is 'cope with'. The expression 'cope up with' is a universally penalized grammatical error."
      },
      {
        question: "Fill in the blank: 'The patient tragically died _____ cholera in the refugee camp.'",
        solution: "of",
        explanation: "When death is caused directly by a disease, the preposition 'of' is used (died of malaria/cholera). For external causes or wounds, 'from' is used (died from excessive loss of blood)."
      }
    ]
  },

  // 4. PARTS OF SPEECH & IDENTIFICATION
  partsOfSpeech: {
    overview: "In English grammar, words are categorized into eight foundational Parts of Speech based on their syntactic function and semantic role within a sentence. Identifying parts of speech requires analyzing how a word behaves in context rather than looking at its isolated spelling.",
    eightParts: [
      {
        name: "Noun",
        definition: "A word that names a person, place, thing, concept, or quality.",
        types: "Proper (Quaid-e-Azam, Lahore), Common (city, river), Collective (jury, committee, fleet), Abstract (integrity, freedom, justice), Material (gold, iron).",
        suffixClues: "-tion (legislation), -ment (development), -ness (kindness), -ity (sovereignty), -ance/-ence (surveillance, resilience), -ship (leadership), -hood (neighborhood), -ism (patriotism), -er/-or (governor).",
        syntacticPositions: "Subject of a sentence, Direct/Indirect Object of a transitive verb, Object of a preposition, or Predicate Noun."
      },
      {
        name: "Pronoun",
        definition: "A word used in place of a noun to avoid tedious repetition.",
        types: "Personal (I, he, they), Demonstrative (this, that, these, those), Relative (who, whom, whose, which, that), Reflexive (himself, themselves), Interrogative (who, what), Indefinite (everyone, nobody, several)."
      },
      {
        name: "Verb",
        definition: "A word that asserts an action, occurrence, state of being, or condition.",
        types: "Finite vs Non-finite (Gerund, Infinitive, Participle), Transitive (takes an object) vs Intransitive (no object), Linking/Stative (be, seem, appear, feel, look, become) vs Dynamic Action verbs, Auxiliary & Modals (is, have, do, will, can, must)."
      },
      {
        name: "Adjective",
        definition: "A word that modifies, qualifies, or describes a noun or pronoun by specifying quality, quantity, size, or identity.",
        degrees: "Positive (strong), Comparative (stronger), Superlative (strongest).",
        suffixClues: "-ful (powerful), -less (flawless), -able/-ible (sustainable), -ive (assertive), -ous (hazardous), -al (constitutional), -ic (economic), -ish (sluggish).",
        orderRule: "OSASCOMP: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose + Noun. Example: A lovely (O), large (S), antique (A), circular (Sh), wooden (M) dining (P) table."
      },
      {
        name: "Adverb",
        definition: "A word that modifies a verb, an adjective, or another adverb, indicating manner (how), time (when), place (where), frequency (how often), or degree (to what extent).",
        suffixClues: "Usually ends in -ly (e.g. swiftly, profoundly). WARNING: Words like friendly, lovely, cowardly, silly, and lonely are ADJECTIVES, not adverbs!",
        testTip: "To turn an adjective ending in -ly into an adverb, use the phrase 'in a ... manner' (e.g. 'He fought in a cowardly manner', NOT 'He fought cowardly')."
      },
      {
        name: "Preposition",
        definition: "A word that links a noun or pronoun to other words in the sentence, indicating spatial, temporal, or logical relations (in, on, at, by, for, from, with, under, between)."
      },
      {
        name: "Conjunction",
        definition: "A word that connects words, phrases, clauses, or sentences.",
        types: "Coordinating (FANBOYS: For, And, Nor, But, Or, Yet, So), Subordinating (because, although, since, unless, while), Correlative (either...or, neither...nor, not only...but also, hardly...when, scarcely...when)."
      },
      {
        name: "Interjection",
        definition: "A grammatically independent word or short exclamation expressing sudden emotion or feeling (Alas!, Hurrah!, Oh!, Ouch!)."
      }
    ],
    sentenceTokenizerExamples: [
      {
        sentence: "The diligently hardworking student quickly solved the extraordinarily complex problem after the lecture.",
        tokens: [
          { word: "The", pos: "Article / Determiner", badge: "badge-art" },
          { word: "diligently", pos: "Adverb (modifying hardworking)", badge: "badge-adv" },
          { word: "hardworking", pos: "Adjective (modifying student)", badge: "badge-adj" },
          { word: "student", pos: "Noun (Subject)", badge: "badge-noun" },
          { word: "quickly", pos: "Adverb (modifying solved)", badge: "badge-adv" },
          { word: "solved", pos: "Verb (Transitive, Past)", badge: "badge-verb" },
          { word: "the", pos: "Article / Determiner", badge: "badge-art" },
          { word: "extraordinarily", pos: "Adverb (modifying complex)", badge: "badge-adv" },
          { word: "complex", pos: "Adjective (modifying problem)", badge: "badge-adj" },
          { word: "problem", pos: "Noun (Direct Object)", badge: "badge-noun" },
          { word: "after", pos: "Preposition", badge: "badge-prep" },
          { word: "the", pos: "Article / Determiner", badge: "badge-art" },
          { word: "lecture", pos: "Noun (Object of Preposition)", badge: "badge-noun" }
        ]
      },
      {
        sentence: "Although she felt exceptionally exhausted, the dedicated diplomat negotiated with supreme patience.",
        tokens: [
          { word: "Although", pos: "Conjunction (Subordinating)", badge: "badge-conj" },
          { word: "she", pos: "Pronoun (Subject)", badge: "badge-pron" },
          { word: "felt", pos: "Verb (Linking / Stative)", badge: "badge-verb" },
          { word: "exceptionally", pos: "Adverb (modifying exhausted)", badge: "badge-adv" },
          { word: "exhausted", pos: "Adjective (Predicate Adjective)", badge: "badge-adj" },
          { word: "the", pos: "Article", badge: "badge-art" },
          { word: "dedicated", pos: "Adjective (modifying diplomat)", badge: "badge-adj" },
          { word: "diplomat", pos: "Noun (Subject)", badge: "badge-noun" },
          { word: "negotiated", pos: "Verb (Intransitive)", badge: "badge-verb" },
          { word: "with", pos: "Preposition", badge: "badge-prep" },
          { word: "supreme", pos: "Adjective (modifying patience)", badge: "badge-adj" },
          { word: "patience", pos: "Noun (Abstract, Object of Prep)", badge: "badge-noun" }
        ]
      }
    ],
    drills: [
      {
        question: "Identify the part of speech of the underlined word: 'Swimming in the deep turbulent river requires extraordinary stamina.'",
        underlinedWord: "Swimming",
        options: ["Present Continuous Verb", "Gerund (Verbal Noun)", "Adjective", "Adverb"],
        solution: "Gerund (Verbal Noun)",
        explanation: "'Swimming' acts as the grammatical Subject of the sentence and functions as a noun; hence it is a Gerund."
      },
      {
        question: "Identify the part of speech of the underlined word: 'He behaved in a very friendly manner toward his newly appointed colleagues.'",
        underlinedWord: "friendly",
        options: ["Adverb", "Adjective", "Noun", "Conjunction"],
        solution: "Adjective",
        explanation: "Although it ends in '-ly', 'friendly' modifies the noun 'manner' and is an Adjective. Words like friendly, lovely, and cowardly are adjectives."
      },
      {
        question: "Identify the part of speech of the underlined word: 'The committee met after the conclusion of the general assembly session.'",
        underlinedWord: "after",
        options: ["Preposition", "Conjunction", "Adverb", "Noun"],
        solution: "Preposition",
        explanation: "'After' is followed directly by a noun phrase ('the conclusion...') acting as its object. It connects the action to a noun, so it functions as a Preposition."
      },
      {
        question: "Identify the part of speech of the underlined word: 'We arrived early, but they had already departed for the summit.'",
        underlinedWord: "but",
        options: ["Preposition", "Adverb", "Coordinating Conjunction", "Relative Pronoun"],
        solution: "Coordinating Conjunction",
        explanation: "'But' connects two independent coordinate clauses ('We arrived early' and 'they had already departed'); it belongs to the FANBOYS coordinating conjunction group."
      }
    ]
  }
};
