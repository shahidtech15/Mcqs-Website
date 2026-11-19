const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../frontend/js/data_daily_challenges.js');
const data = require(dataPath);

// 1. Add more Personalities
data.personalities.push(
  {
    id: "pers-liaquat",
    name: "Liaquat Ali Khan (Quaid-e-Millat)",
    title: "First Prime Minister & Minister of Defence of Pakistan",
    era: "1895 – 1951",
    category: "Statesman & Founding Father",
    avatarIcon: "fa-user-tie",
    avatarColor: "#059669",
    clues: [
      { level: 1, text: "I was educated at Aligarh, Allahabad, and Oxford University (Exeter College) and was called to the Bar at Inner Temple in 1922." },
      { level: 2, text: "As the Finance Member in the 1946 Interim Government of British India, I presented the celebrated 'Poor Man's Budget' which imposed heavy taxes on capitalist profiteering." },
      { level: 3, text: "On March 7, 1949, I moved the historic Objectives Resolution in the Constituent Assembly, declaring that sovereignty over the entire universe belongs to Allah Almighty alone." },
      { level: 4, text: "I signed the Liaquat-Nehru Pact in April 1950 to protect minority rights and was tragically martyred on October 16, 1951, at Company Bagh, Rawalpindi." }
    ],
    biography: "Nawabzada Liaquat Ali Khan (1 October 1895 – 16 October 1951) was one of the leading founding fathers of Pakistan. He served as the right-hand lieutenant to Quaid-e-Azam Muhammad Ali Jinnah and guided the newly born state through the monumental refugee and administrative crises as its first Prime Minister.",
    keyAchievements: [
      "Honorary General Secretary of the All-India Muslim League (1936–1947)",
      "Presented the 1946 'Poor Man's Budget' in the Interim Government",
      "Moved the landmark Objectives Resolution (1949)",
      "Signed the Liaquat-Nehru Pact for minority protections (1950)"
    ],
    cssExamAngle: "The Objectives Resolution (1949) as the grundnorm of Pakistani constitutionalism; the 1946 Poor Man's Budget; and early foreign policy alignment."
  },
  {
    id: "pers-fatima",
    name: "Mohtarma Fatima Jinnah (Madar-e-Millat)",
    title: "Mother of the Nation & Champion of Democracy",
    era: "1893 – 1967",
    category: "Leader & Dental Surgeon",
    avatarIcon: "fa-venus",
    avatarColor: "#e11d48",
    clues: [
      { level: 1, text: "I graduated from Dr. R. Ahmed Dental College in Calcutta in 1923, becoming one of the first female dental surgeons in British India." },
      { level: 2, text: "I gave up my flourishing dental practice in Bombay in 1929 to constantly accompany and support my brother following his wife's tragic passing." },
      { level: 3, text: "I founded the All Pakistan Women's Association (APWA) alongside Begum Ra'ana Liaquat Ali Khan and worked tirelessly for the rehabilitation of 1947 refugees." },
      { level: 4, text: "In 1965, at the age of 71, I contested the presidential election as the candidate of the Combined Opposition Parties (COP) against Field Marshal Ayub Khan." }
    ],
    biography: "Fatima Jinnah (31 July 1893 – 9 July 1967) was a dental surgeon, author, and stateswoman. Known reverently as Madar-e-Millat ('Mother of the Nation'), she played an indispensable role alongside her elder brother Muhammad Ali Jinnah in mobilizing Muslim women for the Pakistan Movement and later stood as the defiant torchbearer of constitutional democracy in 1965.",
    keyAchievements: [
      "Co-founder of the Pakistan Women's National Guard and active organizer of the Muslim League Women's Wing",
      "Authored the biographical book 'My Brother' (published 1987)",
      "Unifying candidate of the Combined Opposition Parties (COP) in the 1965 presidential election",
      "Pioneered female socio-political empowerment in Pakistan"
    ],
    cssExamAngle: "Role of women in the Pakistan Movement; analysis of the 1965 presidential elections under the Basic Democracies system."
  },
  {
    id: "pers-curie",
    name: "Marie Skłodowska-Curie",
    title: "Physicist, Chemist & Only Person to Win Nobel Prizes in Two Sciences",
    era: "1867 – 1934",
    category: "Scientist & Pioneer",
    avatarIcon: "fa-flask-vial",
    avatarColor: "#0284c7",
    clues: [
      { level: 1, text: "I was born in Warsaw, Poland, and conducted clandestine studies at the underground 'Flying University' before emigrating to Paris to study at the Sorbonne." },
      { level: 2, text: "I coined the term 'radioactivity' and, along with my husband Pierre, discovered two brand-new chemical elements: Polonium and Radium." },
      { level: 3, text: "During World War I, I developed mobile radiography units ('Petites Curies') to assist battlefield surgeons treating wounded soldiers." },
      { level: 4, text: "I am the first woman to win a Nobel Prize, the first person to win two Nobel Prizes, and the only person in history to win Nobel Prizes in two different scientific fields (Physics in 1903 and Chemistry in 1911)." }
    ],
    biography: "Marie Curie (7 November 1867 – 4 July 1934) was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. Her discoveries of radium and polonium revolutionized modern physics, nuclear medicine, and cancer radiotherapy.",
    keyAchievements: [
      "Discovered Polonium and Radium (1898)",
      "Nobel Prize in Physics (1903) for research on spontaneous radiation",
      "Nobel Prize in Chemistry (1911) for isolating pure radium and studying its compounds",
      "Pioneered mobile X-ray units in WWI"
    ],
    cssExamAngle: "Radioactivity, half-life decay, ionizing radiation vs. non-ionizing radiation in General Science & Ability."
  },
  {
    id: "pers-bismarck",
    name: "Otto von Bismarck (The Iron Chancellor)",
    title: "Minister President of Prussia & First Chancellor of the German Empire",
    era: "1815 – 1898",
    category: "Statesman & Diplomat",
    avatarIcon: "fa-chess-rook",
    avatarColor: "#475569",
    clues: [
      { level: 1, text: "In an 1862 address to the Prussian parliament, I famously declared: 'The great questions of the day will not be decided by speeches and majority resolutions... but by iron and blood.'" },
      { level: 2, text: "I engineered three calculated wars—against Denmark (1864), Austria (1866), and France (1870)—to unify Germany under Prussian hegemony." },
      { level: 3, text: "I hosted the 1884–1885 Berlin Conference, which established the rules for the European 'Scramble for Africa'." },
      { level: 4, text: "Known as the 'Iron Chancellor', I was the ultimate practitioner of Realpolitik and created the world's first modern welfare state system (accident insurance, sickness insurance, and old-age pensions) in the 1880s." }
    ],
    biography: "Otto von Bismarck (1 April 1815 – 30 July 1898) was a conservative German statesman and master diplomat. As Chancellor of the German Empire from 1871 to 1890, he dominated European affairs through an intricate alliance system designed to preserve German power and isolate France.",
    keyAchievements: [
      "Unified the German Empire (proclaimed at Versailles in 1871)",
      "Pioneered the philosophy and practice of 'Realpolitik'",
      "Created the world's first comprehensive social security welfare system",
      "Constructed the complex Bismarckian Alliance System (Dual Alliance, Reinsurance Treaty)"
    ],
    cssExamAngle: "Realpolitik vs. Idealism in International Relations; the Balance of Power in Europe (1871–1890); origins of WWI."
  }
);

// 2. Add more Fact or Fiction statements
data.factOrFiction.push(
  {
    id: "fof-11",
    statement: "Under the Pakistan Penal Code (PPC), an act committed by a child under seven years of age can be prosecuted as a criminal offence.",
    isFact: false,
    category: "Pakistan Law",
    trap: "Assuming criminal liability applies to all minors under youth courts.",
    explanation: "FICTION! Section 82 of the Pakistan Penal Code provides an absolute statutory defense of infancy ('Doli Incapax'): 'Nothing is an offence which is done by a child under seven years of age.' Section 83 further grants qualified immunity for children between seven and twelve who have not attained sufficient maturity of understanding."
  },
  {
    id: "fof-12",
    statement: "Mount Everest is the highest mountain on Earth measured from sea level, but Mauna Kea in Hawaii is taller when measured from its base on the ocean floor.",
    isFact: true,
    category: "Geography",
    trap: "Thinking Everest is the tallest by every possible physical metric.",
    explanation: "FACT! Mount Everest has the highest altitude above sea level (8,848.86 meters). However, Mauna Kea has an altitude of 4,207 meters above sea level but extends nearly 6,000 meters below the ocean surface, reaching an aggregate base-to-peak height of approximately 10,210 meters—far surpassing Everest."
  },
  {
    id: "fof-13",
    statement: "Pakistan's first Constituent Assembly was dissolved in October 1954 by Governor-General Ghulam Muhammad, an action famously upheld by Chief Justice Muhammad Munir under the 'Doctrine of Necessity'.",
    isFact: true,
    category: "Pakistan Affairs",
    trap: "Students sometimes confuse Ghulam Muhammad's dissolution with Iskander Mirza's 1958 Martial Law.",
    explanation: "FACT! On October 24, 1954, Governor-General Ghulam Muhammad dissolved the first Constituent Assembly just as it was finalizing the constitution. Assembly Speaker Maulvi Tamizuddin Khan challenged the dissolution in court. Although the Sindh Chief Court ruled in Khan's favor, Chief Justice Muhammad Munir's Federal Court overturned the decision in the landmark Federation of Pakistan v. Maulvi Tamizuddin Khan (1955) case, invoking Bracton's maxim 'Salus populi suprema lex esto' (the safety of the people is the supreme law) and establishing the fateful Doctrine of Necessity."
  },
  {
    id: "fof-14",
    statement: "Antibiotics are effective in curing viral infections such as influenza, COVID-19, and the common cold.",
    isFact: false,
    category: "Everyday Science",
    trap: "Common medical misconception: treating viral colds with penicillin or amoxicillin.",
    explanation: "FICTION! Antibiotics target bacterial cellular structures (such as bacterial cell walls or prokaryotic ribosomes) and have ZERO efficacy against viruses, which reproduce inside host cells and lack bacterial anatomy. Overusing antibiotics for viral illnesses drives global antibiotic antimicrobial resistance (AMR)."
  },
  {
    id: "fof-15",
    statement: "The United Nations officially recognizes six official languages: Arabic, Chinese, English, French, Russian, and Spanish.",
    isFact: true,
    category: "International Organizations",
    trap: "Assuming German or Hindi is an official UN working language.",
    explanation: "FACT! The UN has exactly six official languages: Arabic, Chinese, English, French, Russian, and Spanish. All official UN documents, treaties, and speeches are translated into these six languages."
  },
  {
    id: "fof-16",
    statement: "During the 1971 India-Pakistan War, the Simla Agreement was signed in July 1972 by Zulfikar Ali Bhutto and Indira Gandhi, formally creating the 'Line of Control' (LoC) in Jammu and Kashmir.",
    isFact: true,
    category: "Pakistan Affairs",
    trap: "Thinking the ceasefire line was named LoC in 1949 under Karachi Agreement.",
    explanation: "FACT! Under the Karachi Agreement of 1949, the dividing line was named the 'Ceasefire Line' (CFL). It was the Simla Agreement of July 2, 1972, signed by Zulfikar Ali Bhutto and Indira Gandhi, that converted the ceasefire line into the 'Line of Control' (LoC) and committed both parties to bilateral negotiations without third-party intervention."
  }
);

// 3. Add more Organizations
data.organizations.push(
  {
    id: "org-wto",
    name: "World Trade Organization",
    acronym: "WTO",
    established: "1995 (Marrakesh Agreement)",
    headquarters: "Geneva, Switzerland",
    icon: "fa-ship",
    color: "#0284c7",
    mandate: "Regulates and facilitates international trade in goods, services, and intellectual property by providing a rules-based framework and dispute settlement.",
    clues: [
      { level: 1, text: "I evolved from the General Agreement on Tariffs and Trade (GATT 1947) following the conclusion of the 8-year Uruguay Round negotiations." },
      { level: 2, text: "My foundational pillars are the Most-Favoured-Nation (MFN) principle and the National Treatment principle." },
      { level: 3, text: "My Director-General is currently Ngozi Okonjo-Iweala, the first woman and first African to lead the organization." },
      { level: 4, text: "Pakistan has been an active founding member of my organization since January 1, 1995." }
    ],
    pakistanRelevance: "Pakistan relies on WTO agreements for market access for textiles, disputes (e.g. Basmati rice geographic indications), and compliance with TRIPS."
  },
  {
    id: "org-nato",
    name: "North Atlantic Treaty Organization",
    acronym: "NATO",
    established: "1949 (Washington Treaty)",
    headquarters: "Brussels, Belgium",
    icon: "fa-compass",
    color: "#1e3a8a",
    mandate: "Intergovernmental transatlantic military alliance committed to collective self-defense under Article 5 of its founding treaty.",
    clues: [
      { level: 1, text: "My foundational principle is Article 5: an armed attack against one or more members shall be considered an attack against all." },
      { level: 2, text: "Article 5 has been invoked only once in my history: following the September 11, 2001 terrorist attacks on the United States." },
      { level: 3, text: "I recently welcomed Finland (2023) and Sweden (2024) as members, expanding my alliance to 32 sovereign nations." },
      { level: 4, text: "While Pakistan is not a member, the US designated Pakistan as a 'Major Non-NATO Ally' (MNNA) in 2004." }
    ],
    pakistanRelevance: "Pakistan served as a vital logistical frontline state (GLOCs) for NATO's International Security Assistance Force (ISAF) operations in Afghanistan from 2001 to 2021."
  },
  {
    id: "org-who",
    name: "World Health Organization",
    acronym: "WHO",
    established: "1948",
    headquarters: "Geneva, Switzerland",
    icon: "fa-heart-pulse",
    color: "#0d9488",
    mandate: "Directing and coordinating authority on international health work within the United Nations system.",
    clues: [
      { level: 1, text: "My constitution came into force on April 7, 1948—a date celebrated globally every year as World Health Day." },
      { level: 2, text: "I led the historic global eradication campaign of Smallpox, officially certified in 1980." },
      { level: 3, text: "My Director-General is Dr. Tedros Adhanom Ghebreyesus, who declared COVID-19 a Public Health Emergency of International Concern (PHEIC) in 2020." },
      { level: 4, text: "I collaborate intensely with Pakistan's government on the National Polio Eradication Programme, targeting the Wild Poliovirus." }
    ],
    pakistanRelevance: "Active technical and surveillance partner in Pakistan's fight against endemic polio, hepatitis, dengue, and post-flood waterborne epidemics."
  },
  {
    id: "org-iaea",
    name: "International Atomic Energy Agency",
    acronym: "IAEA",
    established: "1957",
    headquarters: "Vienna International Centre, Vienna, Austria",
    icon: "fa-circle-radiation",
    color: "#d97706",
    mandate: "Promotes the peaceful use of nuclear energy and inhibits its use for any military purpose, including nuclear weapons.",
    clues: [
      { level: 1, text: "I was inspired by US President Dwight D. Eisenhower's famous 1953 'Atoms for Peace' address before the UN General Assembly." },
      { level: 2, text: "I was awarded the Nobel Peace Prize in 2005 jointly with my Director-General Mohamed ElBaradei." },
      { level: 3, text: "I conduct rigorous nuclear safeguards and on-site camera inspections of commercial reactors under the NPT framework." },
      { level: 4, text: "Pakistan maintains all of its civil nuclear power plants (such as KANUPP-2/3 and CHASNUPP-1-4) under my strict safeguards." }
    ],
    pakistanRelevance: "Pakistan has maintained a spotless 50-year nuclear safeguards record with IAEA for its civilian nuclear power plants."
  }
);

// 4. Ensure Daily Fives covers all 7 days (Monday through Sunday)
const remainingDays = [
  {
    day: "Thursday",
    theme: "Governance & Physical Universe",
    questions: [
      {
        subject: "Pakistan Affairs",
        q: "The Lucknow Pact of 1916 between the All-India Muslim League and the Congress was historic because Congress officially accepted:",
        options: ["The complete independence of India", "Separate Electorates for Muslims and weightage in minority provinces", "The Urdu language as national lingua franca", "Immediate dominion status under Britain"],
        ans: 1,
        exp: "In the 1916 Lucknow Pact, engineered largely by Jinnah, Congress for the first and only time officially conceded separate electorates for Muslims and guaranteed one-third representation in the Central Legislative Assembly."
      },
      {
        subject: "English",
        q: "Choose the correct sentence containing a dangling modifier error:",
        options: [
          "Walking down the garden path, the flowers looked vibrant and fresh.",
          "Walking down the garden path, I noticed the vibrant and fresh flowers.",
          "While I walked down the path, the flowers appeared radiant.",
          "The flowers along the path were vibrant and fresh."
        ],
        ans: 0,
        exp: "In option A, 'Walking down the garden path' illogically modifies 'the flowers' (flowers cannot walk down a path), creating a classic dangling modifier error."
      },
      {
        subject: "World General Knowledge",
        q: "Which nation operates the Panama Canal today, having assumed complete sovereign control from the United States on December 31, 1999?",
        options: ["Colombia", "Panama (Panama Canal Authority)", "United States", "Nicaragua"],
        ans: 1,
        exp: "Under the 1977 Torrijos-Carter Treaties signed by President Jimmy Carter and General Omar Torrijos, Panama gained full ownership and operational control of the canal at noon on December 31, 1999."
      },
      {
        subject: "Everyday Science",
        q: "What is the speed of light in a vacuum, represented by the fundamental physical constant 'c'?",
        options: ["Approximately 300,000 kilometers per second", "Approximately 150,000 meters per second", "3,000 kilometers per second", "Sound speed squared"],
        ans: 0,
        exp: "The speed of light in vacuum is exactly 299,792,458 meters per second (approximately 3 × 10^8 m/s, or ~300,000 km/s)."
      },
      {
        subject: "Current Affairs",
        q: "The Special Investment Facilitation Council (SIFC), established in Pakistan to fast-track foreign direct investment, focuses on which key sectors?",
        options: [
          "Defense, Tourism, Aerospace, and Aviation",
          "Agriculture, Information Technology, Mines & Minerals, and Energy",
          "Textiles, Automobile assembly, Steel, and Chemical manufacturing",
          "Real Estate, Banking, Stock Exchange, and Insurance"
        ],
        ans: 1,
        exp: "The SIFC was constituted in June 2023 as a single-window hybrid economic facilitation mechanism targeting five priority sectors: Agriculture, IT/Telecom, Mines & Minerals, Energy, and Privatization."
      }
    ]
  },
  {
    day: "Friday",
    theme: "Legal Frameworks & Biology",
    questions: [
      {
        subject: "Pakistan Affairs",
        q: "Which article of the 1973 Constitution establishes that Islam shall be the State religion of Pakistan?",
        options: ["Article 1", "Article 2", "Article 2A", "Article 227"],
        ans: 1,
        exp: "Article 2 of the 1973 Constitution declares: 'Islam shall be the State religion of Pakistan.' (Article 2A incorporates the Objectives Resolution as a substantive part of the Constitution)."
      },
      {
        subject: "English",
        q: "Identify the word that is correctly spelled:",
        options: ["Mischievious", "Mischievous", "Mischevious", "Mischivous"],
        ans: 1,
        exp: "'Mischievous' (pronounced MIS-chiv-us) is spelled M-I-S-C-H-I-E-V-O-U-S. Adding an extra 'i' before 'ous' is a common spelling error."
      },
      {
        subject: "World General Knowledge",
        q: "The historic city of Timbuktu, renowned for its ancient Sankore University and priceless medieval Islamic manuscripts, is located in which West African country?",
        options: ["Niger", "Mali", "Chad", "Mauritania"],
        ans: 1,
        exp: "Timbuktu is an ancient Saharan trading and scholarly center located on the southern edge of the Sahara in the Republic of Mali."
      },
      {
        subject: "Everyday Science",
        q: "What type of blood cells are primarily responsible for blood clotting and stopping hemorrhage upon vascular injury?",
        options: ["Erythrocytes (Red Blood Cells)", "Leukocytes (White Blood Cells)", "Thrombocytes (Platelets)", "Lymphocytes"],
        ans: 2,
        exp: "Platelets (thrombocytes) adhere to exposed collagen at injured blood vessel sites and trigger the coagulation cascade, forming a fibrin mesh clot."
      },
      {
        subject: "Current Affairs",
        q: "In the 2024 United States Presidential Election held in November, who was elected as the 47th President of the United States?",
        options: ["Kamala Harris", "Donald J. Trump", "Joe Biden", "Ron DeSantis"],
        ans: 1,
        exp: "Donald Trump won the November 2024 US Presidential Election, defeating Vice President Kamala Harris to become the 47th President of the United States, achieving non-consecutive presidential terms."
      }
    ]
  },
  {
    day: "Saturday",
    theme: "Regional History & Chemistry",
    questions: [
      {
        subject: "Pakistan Affairs",
        q: "Who was the author of the historic 1940 Lahore Resolution, which was drafted by the Working Committee and moved by A.K. Fazlul Huq?",
        options: ["Chaudhry Khaliquzzaman", "Sir Muhammad Zafarullah Khan", "Liaquat Ali Khan", "I.I. Chundrigar"],
        ans: 1,
        exp: "While A.K. Fazlul Huq (the 'Sher-e-Bangla') formally moved the resolution on March 23, 1940, the draft was penned primarily by Sir Muhammad Zafarullah Khan, based on the Muslim League's basic guidelines."
      },
      {
        subject: "English",
        q: "Select the sentence written in the correct subjunctive mood:",
        options: [
          "I wish I was taller so I could play basketball.",
          "I wish I were taller so I could play basketball.",
          "If he was the president, he would lower taxes.",
          "I request that he goes immediately."
        ],
        ans: 1,
        exp: "In contrary-to-fact hypothetical statements and wishes, the subjunctive form 'were' is mandatory regardless of the singular subject ('I wish I were...', 'If he were...')."
      },
      {
        subject: "World General Knowledge",
        q: "Which landlocked body of water between Jordan, Israel, and the West Bank has the lowest land elevation on Earth (~430 meters below sea level) and extreme salinity?",
        options: ["Caspian Sea", "Aral Sea", "Dead Sea", "Lake Baikal"],
        ans: 2,
        exp: "The surface and shores of the Dead Sea are approximately 430.5 meters below sea level, making it the lowest point on dry land on Earth."
      },
      {
        subject: "Everyday Science",
        q: "What is the pH value of pure distilled water at standard room temperature (25°C)?",
        options: ["0", "5.6", "7.0 (Neutral)", "14.0"],
        ans: 2,
        exp: "Pure neutral water at 25°C has equal hydrogen [H+] and hydroxide [OH-] ion concentrations (10^-7 M), giving it a neutral pH of 7.0."
      },
      {
        subject: "Current Affairs",
        q: "In 2024, the Supreme Court of Pakistan issued a landmark ruling regarding the allocation of reserved seats to which political coalition?",
        options: ["Sunni Ittehad Council / PTI", "JUI-F", "MQM-Pakistan", "ANP"],
        ans: 0,
        exp: "In July 2024, a 13-member full bench of the Supreme Court of Pakistan ruled by majority (8-5) that the Pakistan Tehreek-e-Insaf (PTI) was an eligible political party entitled to reserved seats for women and minorities."
      }
    ]
  },
  {
    day: "Sunday",
    theme: "Global Geopolitics & Modern Physics",
    questions: [
      {
        subject: "Pakistan Affairs",
        q: "The Simla Deputation met Viceroy Lord Minto on October 1, 1906, in Simla to present Muslim demands. Who led this 35-member deputation?",
        options: ["Sir Syed Ahmad Khan", "Sir Sultan Muhammad Shah (Aga Khan III)", "Nawab Mohsin-ul-Mulk", "Nawab Viqar-ul-Mulk"],
        ans: 1,
        exp: "Sir Aga Khan III led the 35-member Simla Deputation, organized by Nawab Mohsin-ul-Mulk, which demanded separate electorates and weighted representation for Indian Muslims."
      },
      {
        subject: "English",
        q: "Complete the sentence with the appropriate preposition: 'He was acquitted ______ all charges of corruption.'",
        options: ["from", "of", "with", "against"],
        ans: 1,
        exp: "The verb 'acquit' takes the fixed preposition 'of' (e.g., 'acquitted of all charges')."
      },
      {
        subject: "World General Knowledge",
        q: "What is the largest island in the world by land area that is not considered a continent?",
        options: ["Madagascar", "Greenland", "Borneo", "New Guinea"],
        ans: 1,
        exp: "Greenland is the world's largest island, covering over 2.16 million square kilometers, functioning as an autonomous territory of the Kingdom of Denmark."
      },
      {
        subject: "Everyday Science",
        q: "Which subatomic particle was discovered by British physicist James Chadwick in 1932, for which he received the Nobel Prize?",
        options: ["Proton", "Electron", "Neutron", "Positron"],
        ans: 2,
        exp: "James Chadwick discovered the uncharged subatomic particle—the neutron—inside atomic nuclei in 1932, resolving the mystery of atomic mass."
      },
      {
        subject: "Current Affairs",
        q: "The China-Pakistan Economic Corridor (CPEC) Phase-II primarily transitions from initial infrastructure and energy projects to which strategic domain?",
        options: [
          "Maritime deep-sea fishing and oil drilling exclusively",
          "Industrialization, Agriculture modernization, IT/Science technology, and Special Economic Zones (SEZs)",
          "Building cross-border railway links to Europe only",
          "Privatizing state distribution companies"
        ],
        ans: 1,
        exp: "CPEC Phase-II pivots from Phase-I's power and highway focus toward industrial cooperation, B2B joint ventures, modernization of agriculture, IT hubs, and operationalizing SEZs (Rashakai, Dhabeji, Allama Iqbal)."
      }
    ]
  }
];

data.dailyFiveSets.push(...remainingDays);

// 5. Expand Championship Pool to 25 Questions
const moreChampionship = [
  {
    id: "champ-11",
    category: "World GK",
    q: "Which treaty, signed in 1992, formally established the European Union and paved the way for the creation of the single European currency (the Euro)?",
    options: ["Treaty of Rome", "Maastricht Treaty", "Treaty of Lisbon", "Schengen Agreement"],
    ans: 1,
    exp: "The Maastricht Treaty (Treaty on European Union) was signed in February 1992 and entered into force in November 1993, creating the EU and setting criteria for the Euro."
  },
  {
    id: "champ-12",
    category: "Pakistan Affairs",
    q: "Who was the Chief Minister of Bengal who moved the historic Pakistan Resolution in Lahore on March 23, 1940?",
    options: ["Huseyn Shaheed Suhrawardy", "A. K. Fazlul Huq", "Khawaja Nazimuddin", "Nurul Amin"],
    ans: 1,
    exp: "Abul Kashem Fazlul Huq, popularly known as 'Sher-e-Bangla' (Tiger of Bengal), formally moved the resolution before a gathering of over 100,000 Muslim League delegates."
  },
  {
    id: "champ-13",
    category: "Everyday Science",
    q: "Which atmospheric layer contains the Earth's vital ozone layer (O3), which absorbs and shields surface life from harmful ultraviolet (UV) radiation?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    ans: 1,
    exp: "The ozone layer is concentrated in the lower portion of the Stratosphere, roughly 15 to 35 kilometers above Earth's surface."
  },
  {
    id: "champ-14",
    category: "International Relations",
    q: "The 'Baruch Plan' presented to the United Nations in 1946 was an early post-WWII proposal aimed at:",
    options: [
      "Rebuilding war-torn Western Europe through economic loans",
      "Placing all global atomic energy development and nuclear weapons under international UN control",
      "Dividing the Korean peninsula along the 38th parallel",
      "Forming the North Atlantic Treaty Organization"
    ],
    ans: 1,
    exp: "Proposed by Bernard Baruch on behalf of the US in June 1946, the Baruch Plan proposed international verification and control of all atomic energy. It was rejected by the Soviet Union."
  },
  {
    id: "champ-15",
    category: "English",
    q: "Select the option that correctly completes the conditional sentence: 'Had I known about the road closure, I ____________ a different route.'",
    options: ["would take", "would have taken", "will have taken", "took"],
    ans: 1,
    exp: "This is a Third Conditional sentence expressing an unreal past condition ('Had I known' = 'If I had known'). The main clause requires 'would have + past participle' ('would have taken')."
  },
  {
    id: "champ-16",
    category: "Pakistan Affairs",
    q: "Under the 1973 Constitution, the Council of Common Interests (CCI) is mandated to meet at least once in how many days under Article 153?",
    options: ["30 days", "90 days", "180 days", "Once a year"],
    ans: 1,
    exp: "Article 153(3) of the 1973 Constitution mandates that the Council of Common Interests shall meet at least once in ninety days."
  },
  {
    id: "champ-17",
    category: "Everyday Science",
    q: "Which element has the highest electrical conductivity of all known metals at room temperature?",
    options: ["Copper (Cu)", "Gold (Au)", "Silver (Ag)", "Aluminum (Al)"],
    ans: 2,
    exp: "Silver (Ag) has the highest electrical conductivity and highest thermal conductivity of any metal, though copper is more widely used due to lower cost."
  },
  {
    id: "champ-18",
    category: "Current Affairs",
    q: "What is the primary objective of the China-led 'mBridge' project in international finance?",
    options: [
      "A submarine fiber-optic communications cable spanning the Indian Ocean",
      "A multi-central bank digital currency (mCBDC) platform designed for instant, local-currency cross-border wholesale payments bypassing SWIFT",
      "A high-speed rail corridor connecting Beijing to Singapore",
      "A satellite constellation providing GPS alternatives"
    ],
    ans: 1,
    exp: "Project mBridge is a multi-CBDC platform developed by the Bank for International Settlements (BIS) and the central banks of China, Thailand, Hong Kong, and the UAE to enable real-time bilateral cross-border settlements."
  },
  {
    id: "champ-19",
    category: "World GK",
    q: "Which desert is recognized as the driest non-polar desert on Earth, located in South America along the Pacific coast of Chile and Peru?",
    options: ["Kalahari Desert", "Gobi Desert", "Atacama Desert", "Mojave Desert"],
    ans: 2,
    exp: "The Atacama Desert in northern Chile is the driest non-polar desert on Earth, with some weather stations having never recorded rainfall."
  },
  {
    id: "champ-20",
    category: "Pakistan Affairs",
    q: "In which year did Pakistan carry out its historic nuclear tests (Chagai-I and Chagai-II) in response to Indian nuclear tests?",
    options: ["1974", "1988", "1998", "2001"],
    ans: 2,
    exp: "Pakistan conducted five underground nuclear tests in the Ras Koh Hills on May 28, 1998 (Chagai-I) and a sixth test on May 30, 1998 (Chagai-II), celebrated nationally as Youm-e-Takbeer."
  },
  {
    id: "champ-21",
    category: "Economics",
    q: "The economic term 'Stagflation' refers to a toxic macroeconomic condition characterized simultaneously by:",
    options: [
      "Low inflation and high economic growth",
      "High inflation, stagnant economic growth, and high unemployment",
      "Hyperinflation combined with rapid industrial export growth",
      "Deflation combined with zero public debt"
    ],
    ans: 1,
    exp: "Stagflation (stagnation + inflation) occurred prominently during the 1970s OPEC oil shocks when rising costs triggered supply shocks, driving prices up while economic output contracted."
  },
  {
    id: "champ-22",
    category: "Everyday Science",
    q: "Which human gland is often referred to as the 'Master Gland' of the endocrine system because its hormones regulate the secretions of other endocrine glands?",
    options: ["Thyroid Gland", "Adrenal Gland", "Pituitary Gland", "Pancreas"],
    ans: 2,
    exp: "The pituitary gland, located at the base of the brain attached to the hypothalamus, secretes trophic hormones (ACTH, TSH, LH, FSH) controlling other glands."
  },
  {
    id: "champ-23",
    category: "English",
    q: "Choose the word that best fits the blank: 'Her ________ remarks during the diplomatic summit unintentionally inflamed cross-border tensions.'",
    options: ["judicious", "tactless", "diplomatic", "sagacious"],
    ans: 1,
    exp: "'Tactless' means lacking sensitivity or discretion in dealing with others, fitting the context of remarks that inflamed tensions."
  },
  {
    id: "champ-24",
    category: "Pakistan Affairs",
    q: "Who was appointed as the chairman of the Punjab and Bengal Boundary Commissions in 1947?",
    options: ["Lord Pethick-Lawrence", "Sir Cyril Radcliffe", "Sir Stafford Cripps", "A.V. Alexander"],
    ans: 1,
    exp: "British barrister Sir Cyril Radcliffe was appointed on June 30, 1947, as the joint chairman of both the Punjab and Bengal Boundary Commissions, drawing the Radcliffe Line."
  },
  {
    id: "champ-25",
    category: "World GK",
    q: "The headquarters of the International Atomic Energy Agency (IAEA) and the Organization of the Petroleum Exporting Countries (OPEC) are both located in which European capital?",
    options: ["Geneva, Switzerland", "Vienna, Austria", "Brussels, Belgium", "The Hague, Netherlands"],
    ans: 1,
    exp: "Vienna, the capital city of Austria, is the international headquarters for both the IAEA (at the Vienna International Centre) and OPEC."
  }
];

data.championshipPool.push(...moreChampionship);

const fileContent = `/**
 * Daily Interactive Challenges & Knowledge Hub Database
 * Powers 7 distinct interactive modes: Question of the Day, Identify the Personality,
 * Fact or Fiction, Guess the Organization, Daily Five, Weekly Championship, and Current Affairs.
 */

const DAILY_CHALLENGES_DATA = ${JSON.stringify(data, null, 2)};

if (typeof window !== 'undefined') {
  window.DAILY_CHALLENGES_DATA = DAILY_CHALLENGES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DAILY_CHALLENGES_DATA;
}
`;

fs.writeFileSync(dataPath, fileContent, 'utf-8');
console.log('Successfully expanded data_daily_challenges.js! All 7 days and expanded pools are ready.');
