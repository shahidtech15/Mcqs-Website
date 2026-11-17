// Part 1 for FIA Assistant Director (Investigation)
// Topics 1, 2, and 3 (90 Questions)
// Topic 1: Vocabulary, Grammar Usage, Sentence Structuring (30 MCQs)
// Topic 2: General Knowledge (30 MCQs)
// Topic 3: Everyday Science (30 MCQs)

const TOPIC_1_ENGLISH = [
  {
    q: "Select the word that is most nearly SIMILAR in meaning to 'ABSTEMIOUS':",
    opts: ["Temperate", "Gluttonous", "Indulgent", "Voracious"],
    ans: "A",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Abstemious' means indulging only very moderately in something, especially food and drink; synonymous with 'temperate' or self-restrained."
  },
  {
    q: "Choose the word most OPPOSITE in meaning to 'LACONIC':",
    opts: ["Concise", "Terse", "Verbose", "Succinct"],
    ans: "C",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Laconic' means using very few words. Its antonym is 'verbose' (wordy or prolix)."
  },
  {
    q: "Select the correct option to fill in the blank: 'He was acquitted _____ all charges brought against him by the tribunal.'",
    opts: ["from", "of", "with", "against"],
    ans: "B",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The verb 'acquit' takes the preposition 'of' ('acquitted of all charges')."
  },
  {
    q: "Choose the correct sentence:",
    opts: [
      "Neither the Director General nor his deputies has attended the press conference.",
      "Neither the Director General nor his deputies have attended the press conference.",
      "Neither the Director General or his deputies have attended the press conference.",
      "Neither the Director General nor his deputies is attending the press conference."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "In subject-verb agreement with 'neither... nor', the verb agrees with the closer subject ('his deputies' is plural, so 'have attended' is correct)."
  },
  {
    q: "Select the option that correctly converts to indirect speech: The inspector said to the witness, 'Did you see the suspect leaving the building?'",
    opts: [
      "The inspector asked the witness whether he had seen the suspect leaving the building.",
      "The inspector asked the witness if he saw the suspect leaving the building.",
      "The inspector told the witness whether he has seen the suspect leaving the building.",
      "The inspector enquired the witness if he was seeing the suspect leaving the building."
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "In direct questions starting with auxiliary 'Did' (past simple), the indirect form uses 'if' or 'whether' followed by the past perfect ('had seen')."
  },
  {
    q: "Identify the word closest in meaning to 'RECALCITRANT':",
    opts: ["Compliant", "Disobedient", "Submissive", "Tractable"],
    ans: "B",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Recalcitrant' means having an obstinately uncooperative attitude toward authority or discipline; disobedient."
  },
  {
    q: "Fill in the blank: 'The inquiry officer was completely oblivious _____ the political pressure surrounding the case.'",
    opts: ["to", "from", "with", "at"],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The adjective 'oblivious' is followed by the preposition 'to' (or sometimes 'of'). 'Oblivious to' is standard."
  },
  {
    q: "Choose the antonym of 'AMELIORATE':",
    opts: ["Improve", "Worsen", "Mitigate", "Assuage"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Ameliorate' means to make something bad or unsatisfactory better. Its opposite is 'worsen' or 'deteriorate'."
  },
  {
    q: "Identify the sentence that contains an error in parallel structure:",
    opts: [
      "The intelligence team was responsible for collecting data, analyzing evidence, and drafting briefs.",
      "The intelligence team was responsible for data collection, evidence analysis, and drafting briefs.",
      "The intelligence team was responsible for data collection, evidence analysis, and report generation.",
      "The intelligence team was responsible to collect data, to analyze evidence, and to draft briefs."
    ],
    ans: "B",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Option B mixes noun phrases ('data collection', 'evidence analysis') with a gerund phrase ('drafting briefs'), violating parallelism."
  },
  {
    q: "What is the meaning of the idiom 'TO BARK UP THE WRONG TREE'?",
    opts: [
      "To pursue a mistaken line of investigation or thought",
      "To make excessive noise in public",
      "To reveal an undercover operation",
      "To reprimand a subordinate unfairly"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'To bark up the wrong tree' means to follow a wrong line of thought or pursue a false lead in an investigation."
  },
  {
    q: "Complete the sentence: 'No sooner had the warrant been issued _____ the suspect surrendered to the authorities.'",
    opts: ["when", "than", "then", "after"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'No sooner... than' is the mandatory correlative pair in English grammar (distinct from 'hardly/scarcely... when')."
  },
  {
    q: "Select the sentence with correct punctuation:",
    opts: [
      "The forensic report confirmed two things: first, that the seal was forged, second, that the signature was authentic.",
      "The forensic report confirmed two things: first, that the seal was forged; second, that the signature was authentic.",
      "The forensic report confirmed two things; first, that the seal was forged: second, that the signature was authentic.",
      "The forensic report confirmed two things, first that the seal was forged, second that the signature was authentic."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "A colon introduces the list of two things, and a semicolon properly separates the two coordinate clauses that contain internal commas."
  },
  {
    q: "Choose the word most SIMILAR in meaning to 'FASTIDIOUS':",
    opts: ["Meticulous", "Careless", "Indifferent", "Slapdash"],
    ans: "A",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Fastidious' means very attentive to and concerned about accuracy and detail; synonymous with 'meticulous'."
  },
  {
    q: "Identify the correct passive voice: 'The cyber wing has seized twenty fraudulent hard drives.'",
    opts: [
      "Twenty fraudulent hard drives have been seized by the cyber wing.",
      "Twenty fraudulent hard drives had been seized by the cyber wing.",
      "Twenty fraudulent hard drives are seized by the cyber wing.",
      "Twenty fraudulent hard drives were being seized by the cyber wing."
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Present perfect active 'has seized' converts to 'have/has been seized' in passive ('hard drives' is plural, so 'have been seized')."
  },
  {
    q: "Choose the correct preposition: 'The findings of the preliminary inquiry are at variance _____ the initial complaint.'",
    opts: ["from", "with", "against", "to"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The idiomatic prepositional phrase is 'at variance with', meaning in disagreement or conflicting with."
  },
  {
    q: "Choose the word that is most nearly OPPOSITE in meaning to 'GREGARIOUS':",
    opts: ["Sociable", "Affable", "Reclusive", "Extroverted"],
    ans: "C",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Gregarious' means fond of company; sociable. Its antonym is 'reclusive' or solitary."
  },
  {
    q: "Select the sentence that avoids a comma splice:",
    opts: [
      "The suspect fled the city, the officers followed his digital footprint.",
      "The suspect fled the city; however, the officers followed his digital footprint.",
      "The suspect fled the city, however the officers followed his digital footprint.",
      "The suspect fled the city, so therefore the officers followed his digital footprint."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Joining two independent clauses with only a comma produces a comma splice; using a semicolon before the conjunctive adverb 'however' and a comma after it is grammatically correct."
  },
  {
    q: "Choose the synonym of 'SURREPTITIOUS':",
    opts: ["Clandestine", "Overt", "Blatant", "Conspicuous"],
    ans: "A",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Surreptitious' means kept secret, especially because it would not be approved of; synonymous with 'clandestine'."
  },
  {
    q: "What does the idiom 'TO STEAL A MARCH ON SOMEONE' mean?",
    opts: [
      "To gain an unexpected advantage over a competitor or adversary",
      "To march in front of an army",
      "To commit financial embezzlement during daytime",
      "To delay an operation deliberately"
    ],
    ans: "A",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'To steal a march on' means to get an advantage over somebody by acting before they do, especially secretly."
  },
  {
    q: "Fill in the blank: 'Had the forensic expert arrived earlier, the integrity of the scene _____ preserved.'",
    opts: ["would be", "would have been", "will be", "had been"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Third conditional inverted structure: 'Had + subject + past participle... would have been + past participle'."
  },
  {
    q: "Choose the antonym of 'TACITURN':",
    opts: ["Reticent", "Loquacious", "Quiet", "Reserved"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Taciturn' means reserved or uncommunicative in speech. Its opposite is 'loquacious' (talkative)."
  },
  {
    q: "Identify the correct usage of the subjunctive mood:",
    opts: [
      "The committee insisted that the officer submits the final dossier immediately.",
      "The committee insisted that the officer submit the final dossier immediately.",
      "The committee insisted that the officer should submitted the final dossier immediately.",
      "The committee insisted that the officer is submitting the final dossier immediately."
    ],
    ans: "B",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "In mandative subjunctive clauses triggered by verbs of insistence/demand, the base verb form ('submit') is required regardless of subject person/number."
  },
  {
    q: "Select the sentence with correct modifier placement:",
    opts: [
      "Having examined the forged passports, the case was closed by the investigator.",
      "Having examined the forged passports, the investigator closed the case.",
      "The investigator closed the case having examined the forged passports by the team.",
      "Having examined the forged passports, closing the case was decided by the investigator."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The participial phrase 'Having examined the forged passports' must logically modify the agent who performed the action ('the investigator')."
  },
  {
    q: "Choose the word most SIMILAR in meaning to 'NEPOTISM':",
    opts: ["Favoritism", "Impartiality", "Fairness", "Neutrality"],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Nepotism' refers to the practice among those with power or influence of favoring relatives or friends, especially by giving them jobs."
  },
  {
    q: "Fill in the blank: 'He is privy _____ confidential investigative intelligence.'",
    opts: ["to", "with", "of", "in"],
    ans: "A",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The phrase is 'privy to', meaning sharing in the knowledge of something secret or private."
  },
  {
    q: "Choose the word most OPPOSITE in meaning to 'TENACIOUS':",
    opts: ["Persistent", "Resolute", "Yielding", "Determined"],
    ans: "C",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Tenacious' means holding fast or persevering stubbornly. Its antonym is 'yielding' or irresolute."
  },
  {
    q: "Identify the correct sentence structure:",
    opts: [
      "One should be conscientious about his official duties.",
      "One should be conscientious about one's official duties.",
      "One should be conscientious about their official duties.",
      "One should be conscientious about him official duties."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "In formal English, the impersonal pronoun 'one' takes 'one's' as its possessive form, not 'his' or 'their'."
  },
  {
    q: "What does the Latin phrase 'DE FACTO' mean?",
    opts: [
      "According to legal right or statute",
      "In fact or in reality, whether by right or not",
      "For the public good",
      "From the beginning"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'De facto' denotes practices that exist in reality, even if not officially recognized by law (contrasted with 'de jure')."
  },
  {
    q: "Select the option that best completes the sentence: 'Between you and _____, the outcome of the inquiry is already certain.'",
    opts: ["I", "me", "myself", "he"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Between' is a preposition, and objects of prepositions must take the objective pronoun case ('between you and me')."
  },
  {
    q: "Choose the synonym of 'ZEALOUS':",
    opts: ["Enthusiastic", "Apathetic", "Lethargic", "Nonchalant"],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Zealous' means having or showing great energy or enthusiasm in pursuit of a cause or objective."
  }
];

const TOPIC_2_GK = [
  {
    q: "Where is the headquarters of INTERPOL (International Criminal Police Organization) located?",
    opts: ["The Hague, Netherlands", "Lyon, France", "Geneva, Switzerland", "Vienna, Austria"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "INTERPOL's General Secretariat headquarters is located in Lyon, France."
  },
  {
    q: "The Financial Action Task Force (FATF), an intergovernmental body combating money laundering and terrorist financing, was founded in which year?",
    opts: ["1975", "1989", "1995", "2001"],
    ans: "B",
    diff: "Medium",
    subCat: "General Knowledge",
    exp: "FATF was established in 1989 by a Group of Seven (G7) Summit held in Paris to develop policies to combat money laundering."
  },
  {
    q: "Which international body is the principal judicial organ of the United Nations, seated at the Peace Palace in The Hague?",
    opts: [
      "International Criminal Court (ICC)",
      "International Court of Justice (ICJ)",
      "Permanent Court of Arbitration (PCA)",
      "UN Human Rights Council"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The International Court of Justice (ICJ) is the principal judicial organ of the United Nations, established in June 1945 by the UN Charter."
  },
  {
    q: "Which narrow maritime passage connects the Persian Gulf with the Gulf of Oman and the Arabian Sea?",
    opts: ["Strait of Malacca", "Strait of Hormuz", "Bab-el-Mandeb", "Bosporus Strait"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The Strait of Hormuz is a vital international oil transit chokepoint between Oman and Iran connecting the Persian Gulf with the Gulf of Oman."
  },
  {
    q: "What is the capital city of Kazakhstan, which was renamed back to its historical name from 'Nur-Sultan' in 2022?",
    opts: ["Almaty", "Astana", "Tashkent", "Bishkek"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "Kazakhstan's capital was renamed back to Astana in September 2022 by President Kassym-Jomart Tokayev."
  },
  {
    q: "The United Nations Convention against Transnational Organized Crime (UNTOC) is commonly known as the:",
    opts: ["Kyoto Protocol", "Palermo Convention", "Geneva Convention", "Rome Statute"],
    ans: "B",
    diff: "Hard",
    subCat: "General Knowledge",
    exp: "The United Nations Convention against Transnational Organized Crime adopted in 2000 is widely known as the Palermo Convention."
  },
  {
    q: "Which country has the longest coastline in the world?",
    opts: ["Russia", "Canada", "Australia", "Indonesia"],
    ans: "B",
    diff: "Medium",
    subCat: "General Knowledge",
    exp: "Canada possesses the world's longest coastline, stretching over 202,080 kilometers (125,567 miles)."
  },
  {
    q: "Where is the headquarters of the World Health Organization (WHO) located?",
    opts: ["New York, USA", "Geneva, Switzerland", "Rome, Italy", "London, UK"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The World Health Organization (WHO) has its headquarters in Geneva, Switzerland."
  },
  {
    q: "Which desert is the largest hot desert in the world?",
    opts: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Arabian Desert"],
    ans: "C",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The Sahara Desert in northern Africa is the world's largest hot desert, covering an area of approximately 9.2 million square kilometers."
  },
  {
    q: "How many non-permanent members serve on the United Nations Security Council (UNSC) at any given time?",
    opts: ["5", "10", "15", "20"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The UNSC consists of 15 members: 5 permanent members with veto power and 10 non-permanent members elected for two-year terms by the General Assembly."
  },
  {
    q: "Which strait separates the continent of Africa from Europe (Morocco from Spain)?",
    opts: ["Strait of Gibraltar", "Dardanelles", "Suez Canal", "Bering Strait"],
    ans: "A",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The Strait of Gibraltar connects the Atlantic Ocean to the Mediterranean Sea and separates Spain in Europe from Morocco in Africa."
  },
  {
    q: "The North Atlantic Treaty Organization (NATO) was established in which year?",
    opts: ["1945", "1947", "1949", "1955"],
    ans: "C",
    diff: "Medium",
    subCat: "General Knowledge",
    exp: "NATO was established by the signing of the North Atlantic Treaty (Washington Treaty) on 4th April 1949."
  },
  {
    q: "What is the official currency of Japan?",
    opts: ["Yuan", "Yen", "Won", "Ringgit"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The Yen is the official legal tender and currency of Japan."
  },
  {
    q: "Which ocean is the deepest and largest ocean on Earth?",
    opts: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    ans: "C",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The Pacific Ocean covers over 30% of Earth's surface and contains the Challenger Deep in the Mariana Trench, the deepest point on Earth."
  },
  {
    q: "Where is the headquarters of the International Monetary Fund (IMF)?",
    opts: ["Geneva, Switzerland", "Washington, D.C., USA", "New York, USA", "London, UK"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The IMF is headquartered in Washington, D.C., United States."
  },
  {
    q: "Which canal connects the Mediterranean Sea directly to the Red Sea, facilitating international maritime trade?",
    opts: ["Panama Canal", "Suez Canal", "Kiel Canal", "Erie Canal"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The Suez Canal in Egypt opened in 1869, providing a direct water route between the Mediterranean Sea and the Red Sea."
  },
  {
    q: "What is the term of office for a Judge of the International Court of Justice (ICJ)?",
    opts: ["5 years", "7 years", "9 years", "Life tenure"],
    ans: "C",
    diff: "Medium",
    subCat: "General Knowledge",
    exp: "ICJ judges are elected for a term of office of nine years by the United Nations General Assembly and the Security Council."
  },
  {
    q: "Which country is known as the 'Land of the Midnight Sun'?",
    opts: ["Sweden", "Norway", "Finland", "Iceland"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "Norway is called the 'Land of the Midnight Sun' because parts of the country experience continuous sunlight during peak summer months."
  },
  {
    q: "Where is the headquarters of the Shanghai Cooperation Organisation (SCO) Secretariat located?",
    opts: ["Moscow, Russia", "Beijing, China", "Tashkent, Uzbekistan", "Astana, Kazakhstan"],
    ans: "B",
    diff: "Medium",
    subCat: "General Knowledge",
    exp: "The Secretariat of the Shanghai Cooperation Organisation is located in Beijing, China, while its RATS body is in Tashkent."
  },
  {
    q: "The Nobel Peace Prize is awarded annually in which city?",
    opts: ["Stockholm, Sweden", "Oslo, Norway", "Copenhagen, Denmark", "Geneva, Switzerland"],
    ans: "B",
    diff: "Medium",
    subCat: "General Knowledge",
    exp: "While all other Nobel Prizes are awarded in Stockholm, Sweden, the Nobel Peace Prize is awarded in Oslo, Norway."
  },
  {
    q: "Which international day is observed globally as 'International Anti-Corruption Day'?",
    opts: ["24th October", "9th December", "10th December", "1st May"],
    ans: "B",
    diff: "Medium",
    subCat: "General Knowledge",
    exp: "International Anti-Corruption Day is observed worldwide on 9th December since the passage of the UN Convention against Corruption (UNCAC) in 2003."
  },
  {
    q: "Which African lake is the world's longest freshwater lake and the second deepest after Lake Baikal?",
    opts: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
    ans: "B",
    diff: "Hard",
    subCat: "General Knowledge",
    exp: "Lake Tanganyika in Central-East Africa is the world's longest freshwater lake (673 km) and second-deepest (1,470 m)."
  },
  {
    q: "What is the official currency of the United Kingdom?",
    opts: ["Euro", "Pound Sterling", "Franc", "Krona"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The official currency of the United Kingdom is the Pound Sterling (£/GBP)."
  },
  {
    q: "The headquarters of Amnesty International is located in:",
    opts: ["Geneva", "London", "Paris", "New York"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "Amnesty International was founded in 1961 by Peter Benenson and is headquartered in London, United Kingdom."
  },
  {
    q: "Which mountain range separates Europe from Asia?",
    opts: ["The Alps", "The Andes", "The Ural Mountains", "The Himalayas"],
    ans: "C",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The Ural Mountains running north to south through western Russia are traditionally regarded as the boundary between Europe and Asia."
  },
  {
    q: "Where is the permanent secretariat of the South Asian Association for Regional Cooperation (SAARC) located?",
    opts: ["New Delhi, India", "Islamabad, Pakistan", "Kathmandu, Nepal", "Dhaka, Bangladesh"],
    ans: "C",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "The SAARC Secretariat was established in Kathmandu, Nepal on 16th January 1987."
  },
  {
    q: "Which is the smallest country in the world both by area and population?",
    opts: ["Monaco", "Nauru", "Vatican City", "San Marino"],
    ans: "A",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "Vatican City, an independent city-state enclaved within Rome, Italy, is the smallest country in the world with an area of about 0.49 square kilometers."
  },
  {
    q: "The treaty establishing the International Criminal Court (ICC) is known as the:",
    opts: ["Hague Protocol", "Rome Statute", "Vienna Convention", "Geneva Protocol"],
    ans: "B",
    diff: "Medium",
    subCat: "General Knowledge",
    exp: "The Rome Statute of the International Criminal Court was adopted in 1998 and entered into force in 2002, establishing the ICC."
  },
  {
    q: "Which city is known as the 'City of Canals'?",
    opts: ["Amsterdam", "Venice", "Bruges", "Stockholm"],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "Venice, Italy, built on more than 100 small islands in a lagoon in the Adriatic Sea, is world-famous as the 'City of Canals'."
  },
  {
    q: "Who is the administrative head of the United Nations Secretariat?",
    opts: [
      "The President of the General Assembly",
      "The Secretary-General",
      "The President of the Security Council",
      "The Director of the ICJ"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "General Knowledge",
    exp: "Under Article 97 of the UN Charter, the Secretary-General is the chief administrative officer of the United Nations."
  }
];

const TOPIC_3_SCIENCE = [
  {
    q: "Which atmospheric layer contains the Earth's ozone layer that absorbs harmful ultraviolet solar radiation?",
    opts: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "The ozone layer is predominantly found in the lower portion of the Stratosphere, between approximately 15 and 35 kilometers above Earth."
  },
  {
    q: "What is the primary greenhouse gas responsible for the enhanced greenhouse effect and global warming?",
    opts: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities that drives anthropogenic global climate change."
  },
  {
    q: "Which human blood type is considered the 'Universal Donor' for red blood cell transfusions?",
    opts: ["Type AB Positive", "Type O Negative", "Type A Positive", "Type B Negative"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Type O Negative red blood cells lack A, B, and Rh antigens, making them safe for transfusion into patients of any blood type (universal donor)."
  },
  {
    q: "Deficiency of Vitamin C in the human diet causes which disease?",
    opts: ["Rickets", "Beriberi", "Scurvy", "Pellagra"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Deficiency of Vitamin C (ascorbic acid) causes Scurvy, characterized by bleeding gums, skin spots, and poor wound healing."
  },
  {
    q: "What is the SI unit of electrical resistance?",
    opts: ["Volt", "Ampere", "Ohm", "Watt"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "The Ohm (symbol: Ω) is the SI derived unit of electrical resistance, named after Georg Simon Ohm."
  },
  {
    q: "Which organ in the human body is responsible for filtering blood and producing urine?",
    opts: ["Liver", "Kidneys", "Pancreas", "Spleen"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "The kidneys filter wastes, toxins, and excess fluid from blood to form urine through functional units called nephrons."
  },
  {
    q: "What is the speed of light in a vacuum approximately?",
    opts: ["300,000 km/s", "150,000 km/s", "30,000 km/s", "3,000 km/s"],
    ans: "A",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "The speed of light in a vacuum is approximately 299,792 kilometers per second (commonly rounded to 300,000 km/s or 3 × 10^8 m/s)."
  },
  {
    q: "Deficiency of which mineral leads to Goitre (enlargement of the thyroid gland)?",
    opts: ["Iron", "Calcium", "Iodine", "Potassium"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Iodine is essential for the synthesis of thyroid hormones; its deficiency results in thyroid enlargement known as goitre."
  },
  {
    q: "Which planet in our solar system is known as the 'Red Planet'?",
    opts: ["Venus", "Mars", "Jupiter", "Saturn"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Mars is called the Red Planet because iron oxide (rust) prevalent on its surface gives it a reddish appearance."
  },
  {
    q: "Which component of blood is responsible for clotting and preventing excessive bleeding?",
    opts: ["Erythrocytes (Red Blood Cells)", "Leukocytes (White Blood Cells)", "Platelets (Thrombocytes)", "Plasma proteins only"],
    ans: "C",
    diff: "Medium",
    subCat: "Everyday Science",
    exp: "Platelets (thrombocytes) adhere to the walls of damaged blood vessels and aggregate to form a clot, preventing blood loss."
  },
  {
    q: "Sound waves cannot travel through which of the following?",
    opts: ["Water", "Steel", "Air", "A vacuum"],
    ans: "D",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Sound is a mechanical longitudinal wave that requires a material medium (solid, liquid, or gas) to propagate, and cannot travel through a vacuum."
  },
  {
    q: "What is the chemical formula of common baking soda?",
    opts: ["NaCl", "NaHCO3", "Na2CO3", "CaCO3"],
    ans: "B",
    diff: "Medium",
    subCat: "Everyday Science",
    exp: "Baking soda is Sodium Bicarbonate, with the chemical formula NaHCO3."
  },
  {
    q: "Which organelle is known as the 'Powerhouse of the Cell'?",
    opts: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
  },
  {
    q: "What type of mirror is used as a rear-view mirror in motor vehicles to give a wider field of view?",
    opts: ["Concave mirror", "Convex mirror", "Plane mirror", "Parabolic mirror"],
    ans: "B",
    diff: "Medium",
    subCat: "Everyday Science",
    exp: "Convex mirrors always form diminished, erect, and virtual images, providing drivers with a much wider field of view behind them."
  },
  {
    q: "What is the normal body temperature of a healthy human being on the Celsius scale?",
    opts: ["35°C", "37°C", "39°C", "40°C"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "The average normal human body temperature is generally accepted as 37°C (98.6°F)."
  },
  {
    q: "Which gas is most abundant in the Earth's atmosphere by volume?",
    opts: ["Oxygen (~21%)", "Nitrogen (~78%)", "Carbon Dioxide (~0.04%)", "Argon (~0.93%)"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Nitrogen gas makes up roughly 78.08% of Earth's atmosphere by volume."
  },
  {
    q: "Rickets in children is caused by the deficiency of which vitamin?",
    opts: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
    ans: "D",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Vitamin D promotes the absorption of calcium and phosphate; its deficiency leads to softening and weakening of bones, known as rickets."
  },
  {
    q: "Which element is the lightest and most abundant chemical element in the universe?",
    opts: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Hydrogen (H) is the lightest chemical element, constituting roughly 75% of all baryonic mass in the universe."
  },
  {
    q: "What device is used to measure atmospheric pressure?",
    opts: ["Thermometer", "Hygrometer", "Barometer", "Anemometer"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "A barometer is a scientific instrument used to measure atmospheric pressure."
  },
  {
    q: "Which part of the human brain controls involuntary life-support functions such as heartbeat and breathing?",
    opts: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
    ans: "C",
    diff: "Medium",
    subCat: "Everyday Science",
    exp: "The medulla oblongata in the brainstem controls autonomic involuntary functions including respiration, heart rate, and blood pressure."
  },
  {
    q: "What is dry ice?",
    opts: ["Solid water at -50°C", "Solid Carbon Dioxide (CO2)", "Solid Nitrogen", "Compressed Methane"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Dry ice is the solid form of carbon dioxide, which sublimes directly from solid to gas at -78.5°C (-109.3°F)."
  },
  {
    q: "Night blindness is caused by the deficiency of which vitamin?",
    opts: ["Vitamin A", "Vitamin B12", "Vitamin K", "Vitamin E"],
    ans: "A",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Vitamin A (retinol) is essential for the formation of rhodopsin in the retina; its deficiency impairs low-light vision (night blindness)."
  },
  {
    q: "What is the SI unit of force?",
    opts: ["Joule", "Pascal", "Newton", "Watt"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "The Newton (N) is the SI unit of force, defined as 1 kg·m/s²."
  },
  {
    q: "What astronomical phenomenon occurs when the Moon passes directly between the Earth and the Sun?",
    opts: ["Lunar Eclipse", "Solar Eclipse", "Supermoon", "Aurora Borealis"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "A solar eclipse occurs when the Moon passes directly between the Earth and the Sun, blocking all or part of the Sun's light from reaching Earth."
  },
  {
    q: "Which acid is naturally secreted in the human stomach to aid digestion and kill bacteria?",
    opts: ["Sulfuric acid", "Hydrochloric acid (HCl)", "Nitric acid", "Acetic acid"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Parietal cells in the gastric lining secrete hydrochloric acid (HCl) to create an acidic environment for pepsin activation."
  },
  {
    q: "What is the pH value of pure, neutral water at 25°C?",
    opts: ["0", "5", "7", "14"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "On the pH scale (0 to 14), a pH of 7 represents a completely neutral solution at 25°C."
  },
  {
    q: "Which metal is liquid at room temperature (around 20°C to 25°C)?",
    opts: ["Lead", "Mercury", "Tin", "Zinc"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Mercury (element symbol Hg, atomic number 80) is the only standard metallic element that is liquid at standard room temperature."
  },
  {
    q: "Which human organ produces the hormone 'Insulin' to regulate blood glucose levels?",
    opts: ["Liver", "Pancreas", "Gallbladder", "Thyroid"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Insulin is synthesized and secreted by beta cells within the Islets of Langerhans in the pancreas."
  },
  {
    q: "What is the process called by which green plants manufacture glucose from sunlight, water, and carbon dioxide?",
    opts: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    ans: "B",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "Photosynthesis is the process used by plants and other organisms to convert light energy into chemical energy in chloroplasts."
  },
  {
    q: "Which layer of the Earth's interior lies directly beneath the crust?",
    opts: ["Inner Core", "Outer Core", "Mantle", "Lithosphere only"],
    ans: "C",
    diff: "Easy",
    subCat: "Everyday Science",
    exp: "The mantle is the mostly-solid bulk of Earth's interior that lies between Earth's dense crust and its super-heated core."
  }
];

module.exports = {
  TOPIC_1_ENGLISH,
  TOPIC_2_GK,
  TOPIC_3_SCIENCE
};

