/**
 * Daily Interactive Challenges & Knowledge Hub Database
 * Powers 7 distinct interactive modes: Question of the Day, Identify the Personality,
 * Fact or Fiction, Guess the Organization, Daily Five, Weekly Championship, and Current Affairs.
 */

const DAILY_CHALLENGES_DATA = {
  "meta": {
    "title": "Daily Interactive Challenges & Knowledge Hub",
    "description": "Daily interactive study challenges for CSS, PMS, FPSC, and competitive exams aspirants.",
    "modes": [
      {
        "id": "qotd",
        "name": "Question of the Day",
        "icon": "fa-calendar-day",
        "desc": "One high-yield question with a detailed deep-dive explanation."
      },
      {
        "id": "personality",
        "name": "Identify the Personality",
        "icon": "fa-user-secret",
        "desc": "Guess the historical leader, scientist, or thinker from progressive clues."
      },
      {
        "id": "fact-fiction",
        "name": "Fact or Fiction?",
        "icon": "fa-scale-balanced",
        "desc": "Test your ability to spot exam myths and historical truths."
      },
      {
        "id": "organization",
        "name": "Guess the Organization",
        "icon": "fa-sitemap",
        "desc": "Identify international organizations from logos, headquarters, and mandates."
      },
      {
        "id": "daily-five",
        "name": "Daily Five Challenge",
        "icon": "fa-list-ol",
        "desc": "5 core questions: Pakistan Affairs, English, World GK, Science & Current Affairs."
      },
      {
        "id": "championship",
        "name": "Weekly Knowledge Championship",
        "icon": "fa-trophy",
        "desc": "Timed 25- or 50-question competitive marathon with leaderboard."
      },
      {
        "id": "current-affairs",
        "name": "Current Affairs Challenge",
        "icon": "fa-newspaper",
        "desc": "Test your grip on the most important events of the last 7 days."
      }
    ]
  },
  "qotdPool": [
    {
      "id": "qotd-1",
      "dayName": "Monday",
      "dateKey": "day-1",
      "category": "Pakistan Affairs",
      "subCategory": "Constitutional History",
      "question": "Under the 1973 Constitution of Pakistan, which Constitutional Amendment established the Federal Shariat Court and inserted Article 203A through 203J?",
      "options": [
        "Presidential Order No. 1 of 1980 (Constitution Second Amendment)",
        "Constitution (Amendment) Order, 1980 (P.O. No. 1 of 1980 / 1982 insertion under Gen. Zia-ul-Haq)",
        "Constitution (Eighth Amendment) Act, 1985",
        "Constitution (Eighteenth Amendment) Act, 2010"
      ],
      "correctAnswer": 1,
      "examReference": "CSS Pakistan Affairs & Constitutional Law Past Papers",
      "difficulty": "Advanced",
      "detailedExplanation": "The Federal Shariat Court (FSC) was established on May 26, 1980, through Chapter 3A inserted into the 1973 Constitution via Presidential Order No. 1 of 1980 promulgated by General Muhammad Zia-ul-Haq. The Court consists of 8 Muslim judges including the Chief Justice (with up to 3 Ulema). Its statutory jurisdiction under Article 203D is to examine and decide whether or not any law or provision of law is repugnant to the Injunctions of Islam as laid down in the Holy Quran and Sunnah.",
      "keyTakeaway": "Article 203D governs FSC jurisdiction. Appeals against FSC decisions lie before the Shariat Appellate Bench of the Supreme Court of Pakistan under Article 203F."
    },
    {
      "id": "qotd-2",
      "dayName": "Tuesday",
      "dateKey": "day-2",
      "category": "World General Knowledge",
      "subCategory": "International Treaties",
      "question": "The Treaty of Westphalia (1648) is globally recognized in International Relations as the foundational milestone of:",
      "options": [
        "The modern concept of sovereign statehood and non-interference",
        "The establishment of the first international humanitarian law court",
        "The creation of the League of Nations collective security system",
        "The partition of Ottoman territories among European empires"
      ],
      "correctAnswer": 0,
      "examReference": "CSS International Relations (Paper-I)",
      "difficulty": "Intermediate",
      "detailedExplanation": "Signed in October 1648, the Peace of Westphalia concluded the Thirty Years' War in the Holy Roman Empire and the Eighty Years' War between Spain and the Dutch Republic. It established the principle of 'cuius regio, eius religio' (whose realm, his religion) and institutionalized state sovereignty, territorial integrity, and the legal equality of independent states, forming the bedrock of modern international law and interstate diplomacy.",
      "keyTakeaway": "Westphalian sovereignty: States have exclusive authority within their recognized borders, and foreign powers have no right to intervene in domestic affairs."
    },
    {
      "id": "qotd-3",
      "dayName": "Wednesday",
      "dateKey": "day-3",
      "category": "Everyday Science",
      "subCategory": "Astronomy & Physics",
      "question": "What physical phenomenon prevents a white dwarf star from collapsing further under the relentless pull of its own gravity?",
      "options": [
        "Thermal radiation pressure generated by ongoing core nuclear fusion",
        "Electron degeneracy pressure arising from the Pauli Exclusion Principle",
        "Neutron degeneracy pressure overcoming the strong nuclear force",
        "Centrifugal force produced by extreme relativistic rotation"
      ],
      "correctAnswer": 1,
      "examReference": "CSS General Science & Ability (Section-I)",
      "difficulty": "Advanced",
      "detailedExplanation": "In a white dwarf, all nuclear fusion has ceased. The inward gravitational collapse is halted purely by 'electron degeneracy pressure'. According to quantum mechanics (the Pauli Exclusion Principle), no two identical fermions (such as electrons) can occupy the same quantum state simultaneously. Compressing electrons into an extremely dense volume forces them into higher momentum states, creating outward quantum pressure. If the star exceeds the Chandrasekhar Limit (~1.44 solar masses), electron degeneracy pressure fails, collapsing it into a neutron star or black hole.",
      "keyTakeaway": "Chandrasekhar Limit (~1.44 M☉) is the maximum possible mass of a stable white dwarf star, discovered by Subrahmanyan Chandrasekhar (Nobel Prize in Physics 1983)."
    },
    {
      "id": "qotd-4",
      "dayName": "Thursday",
      "dateKey": "day-4",
      "category": "English Précis & Composition",
      "subCategory": "Vocabulary & Analogies",
      "question": "Select the option that exhibits the same relationship as: TENABLE : DEFEND",
      "options": [
        "Pliant : Bend",
        "Frangible : Repair",
        "Volatile : Pacify",
        "Invulnerable : Conquer"
      ],
      "correctAnswer": 0,
      "examReference": "CSS English Précis & Composition Analogy Section",
      "difficulty": "Advanced",
      "detailedExplanation": "Something that is 'tenable' is capable of being 'defended' (e.g., a tenable theory or position). Similarly, something that is 'pliant' is capable of being 'bent' (flexible/yielding). The relationship is: Adjective describes the capacity to undergo the action of the Verb.",
      "keyTakeaway": "Pliant means easily bent without breaking; tenable means logically sound and capable of being defended in argument."
    },
    {
      "id": "qotd-5",
      "dayName": "Friday",
      "dateKey": "day-5",
      "category": "Pakistan Affairs",
      "subCategory": "Pre-Partition History",
      "question": "Which landmark constitutional document first introduced separate electorates for Muslims in British India?",
      "options": [
        "Indian Councils Act 1892",
        "Morley-Minto Reforms (Indian Councils Act 1909)",
        "Montagu-Chelmsford Reforms (Government of India Act 1919)",
        "Lucknow Pact 1916"
      ],
      "correctAnswer": 1,
      "examReference": "CSS Pakistan Affairs Compulsory Paper",
      "difficulty": "Intermediate",
      "detailedExplanation": "The Indian Councils Act 1909, commonly known as the Morley-Minto Reforms, officially conceded the demand for Separate Electorates for Muslims, which had been formally presented to Viceroy Lord Minto by the Simla Deputation led by Sir Aga Khan III on October 1, 1906. This constitutional recognition of Muslims as a distinct political community became the foundational milestone of the Pakistan Movement.",
      "keyTakeaway": "The 1909 Act recognized Muslims as a separate political entity, granting them reserved seats chosen exclusively by Muslim voters."
    },
    {
      "id": "qotd-6",
      "dayName": "Saturday",
      "dateKey": "day-6",
      "category": "International Relations",
      "subCategory": "Geopolitics",
      "question": "The 'Thucydides Trap', a concept popularized by political scientist Graham Allison, describes the systemic structural stress that occurs when:",
      "options": [
        "A rising power threatens to displace an established ruling hegemon",
        "A maritime trade embargo triggers an unintended global famine",
        "Small regional states form a military alliance to balance against an empire",
        "A democratic state descends into internal civil war due to polarization"
      ],
      "correctAnswer": 0,
      "examReference": "CSS International Relations & Strategic Studies",
      "difficulty": "Intermediate",
      "detailedExplanation": "The Thucydides Trap refers to the natural, historic tendency toward war when a rising power threatens to displace an established ruling hegemon. The phrase is derived from ancient Greek historian Thucydides, who observed: 'It was the rise of Athens and the fear that this inspired in Sparta that made war inevitable.' Graham Allison's Harvard Belfer Center study found that in 12 of 16 historical cases where a rising power challenged a ruling power over the past 500 years, the outcome was war (frequently applied today to US-China relations).",
      "keyTakeaway": "Thucydides Trap: Rising Power (Athens / China) vs. Ruling Hegemon (Sparta / United States)."
    },
    {
      "id": "qotd-7",
      "dayName": "Sunday",
      "dateKey": "day-7",
      "category": "Economics & Public Policy",
      "subCategory": "Macroeconomics",
      "question": "What does the 'J-Curve Effect' predict about a country's trade balance following a sudden currency depreciation?",
      "options": [
        "The trade balance improves immediately as exports become instantly cheaper",
        "The trade balance initially deteriorates before gradually improving over the medium term",
        "Domestic inflation plummets while sovereign foreign exchange reserves surge",
        "Foreign direct investment stops completely while public debt vanishes"
      ],
      "correctAnswer": 1,
      "examReference": "CSS Economics / Pakistan Affairs Economic Section",
      "difficulty": "Advanced",
      "detailedExplanation": "The J-Curve effect shows that following a nominal currency depreciation or devaluation, a country's trade balance initially worsens (the downward dip of the 'J') because import contracts are fixed in the short term (inelastic demand), making existing imports more expensive in local currency. Only over time, as export volumes expand and consumers substitute domestic goods for imports (elasticity condition satisfied via the Marshall-Lerner condition), does the trade balance improve (the long upward rise of the 'J').",
      "keyTakeaway": "Marshall-Lerner Condition: Currency depreciation only improves the trade balance if the sum of price elasticities of demand for exports and imports is greater than 1 (|Ex + Em| > 1)."
    }
  ],
  "personalities": [
    {
      "id": "pers-jinnah",
      "name": "Quaid-e-Azam Muhammad Ali Jinnah",
      "title": "Founder & First Governor-General of Pakistan",
      "era": "1876 – 1948",
      "category": "Statesman & Founding Father",
      "avatarIcon": "fa-user-tie",
      "avatarColor": "#16a34a",
      "clues": [
        {
          "level": 1,
          "points": 100,
          "text": "I was called the 'Ambassador of Hindu-Muslim Unity' by Sarojini Naidu following my instrumental role in drafting a historic 1916 cross-party pact in Lucknow."
        },
        {
          "level": 2,
          "points": 75,
          "text": "In 1929, I formulated a celebrated 14-point charter of constitutional safeguards in response to the Nehru Report, which had rejected separate electorates."
        },
        {
          "level": 3,
          "points": 50,
          "text": "On August 11, 1947, in my presidential address to the Constituent Assembly, I proclaimed: 'You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan...'"
        },
        {
          "level": 4,
          "points": 25,
          "text": "I took oath on August 15, 1947, as the first Governor-General of Pakistan, and Stanley Wolpert wrote of me: 'Few individuals significantly alter the course of history. Fewer still modify the map of the world. Hardly anyone can be credited with creating a nation-state. Mohammad Ali Jinnah did all three.'"
        }
      ],
      "biography": "Muhammad Ali Jinnah (25 December 1876 – 11 September 1948) was a barrister, politician, and the visionary founder of Pakistan. He led the All-India Muslim League from 1913 until Pakistan's independence on 14 August 1947, serving as Pakistan's first Governor-General until his demise.",
      "keyAchievements": [
        "Architect of the Lucknow Pact (1916)",
        "Formulated the Fourteen Points (1929)",
        "Reorganized the All-India Muslim League into a mass political movement (1937–1947)",
        "Led the passage of the Lahore Resolution (1940) and achieved independence (1947)"
      ],
      "cssExamAngle": "Focus on Jinnah's constitutionalism, August 11 1947 speech on inclusive citizenship, rejection of the Nehru Report, and role in the Cabinet Mission Plan negotiations."
    },
    {
      "id": "pers-iqbal",
      "name": "Allama Muhammad Iqbal",
      "title": "Mufakkir-e-Pakistan & Poet-Philosopher of the East",
      "era": "1877 – 1938",
      "category": "Philosopher & Poet",
      "avatarIcon": "fa-feather-pointed",
      "avatarColor": "#0284c7",
      "clues": [
        {
          "level": 1,
          "points": 100,
          "text": "I completed my doctorate at the Ludwig Maximilian University of Munich in 1908 with a dissertation titled 'The Development of Metaphysics in Persia'."
        },
        {
          "level": 2,
          "points": 75,
          "text": "I authored philosophical lectures published as 'The Reconstruction of Religious Thought in Islam' and coined the philosophy of 'Khudi' (Selfhood/Ego) in 'Asrar-e-Khudi'."
        },
        {
          "level": 3,
          "points": 50,
          "text": "In December 1930, during my historic presidential address at Allahabad, I envisioned a consolidated Muslim state in Northwest British India: Punjab, NWFP, Sindh, and Balochistan."
        },
        {
          "level": 4,
          "points": 25,
          "text": "I am reverently known as 'Hakeem-ul-Ummat' and 'Shaair-e-Mashriq'. In a series of letters between 1936 and 1937, I convinced Muhammad Ali Jinnah to return from London and lead the Muslims of India."
        }
      ],
      "biography": "Sir Muhammad Iqbal (9 November 1877 – 21 April 1938) was an illustrious philosopher, poet, jurist, and political theorist. His poetry in Urdu and Persian is celebrated worldwide, and his Allahabad Address of 1930 provided the ideological blueprint for the creation of Pakistan.",
      "keyAchievements": [
        "Authored 'Asrar-e-Khudi' (1915), 'Payam-e-Mashriq' (1923), 'Bang-e-Dra' (1924), 'Javid Nama' (1932)",
        "Delivered the landmark Allahabad Address (1930)",
        "Reinvigorated Islamic philosophical thought through 'The Reconstruction of Religious Thought in Islam' (1930)",
        "Persuaded Jinnah to spearhead the Muslim League"
      ],
      "cssExamAngle": "Iqbal's concept of Ijtihad and Islamic modernism, Allahabad Address 1930 analysis, and letters to Jinnah shaping the Two-Nation Theory."
    },
    {
      "id": "pers-syed-ahmad",
      "name": "Sir Syed Ahmad Khan",
      "title": "Pioneer of Muslim Modernism & Founder of Aligarh Movement",
      "era": "1817 – 1898",
      "category": "Educational Reformer & Thinker",
      "avatarIcon": "fa-graduation-cap",
      "avatarColor": "#d97706",
      "clues": [
        {
          "level": 1,
          "points": 100,
          "text": "In 1859, following the War of Independence, I penned the courageous analytical booklet 'Asbab-e-Baghawat-e-Hind' (The Causes of the Indian Revolt) identifying British administrative blunders."
        },
        {
          "level": 2,
          "points": 75,
          "text": "I established the Scientific Society at Ghazipur in 1864 to translate Western scientific and technological classics into Urdu for Indian Muslims."
        },
        {
          "level": 3,
          "points": 50,
          "text": "I launched the influential periodical 'Tahzib-ul-Akhlaq' (Mohammedan Social Reformer) in 1870 to awaken Muslims toward rationalism, modern education, and social reform."
        },
        {
          "level": 4,
          "points": 25,
          "text": "In 1875, I founded the Muhammadan Anglo-Oriental (MAO) College at Aligarh (which later became Aligarh Muslim University in 1920), laying the educational foundation for the Pakistan Movement."
        }
      ],
      "biography": "Sir Syed Ahmad Khan (17 October 1817 – 27 March 1898) was an Islamic pragmatist, social activist, and educator. He founded the historic Aligarh Movement, emphasizing Western scientific education, religious rationalism, and political neutrality for Muslims in post-1857 India.",
      "keyAchievements": [
        "Founded the MAO College at Aligarh (1875)",
        "Authored 'Asbab-e-Baghawat-e-Hind' and 'Loyal Mohammedans of India'",
        "Established the All-India Muslim Educational Conference (1886)",
        "Articulated early concepts of the Two-Nation Theory during the Hindi-Urdu controversy of 1867"
      ],
      "cssExamAngle": "Aligarh Movement's political, social, and educational impact; Hindi-Urdu controversy (1867); and Sir Syed's advice regarding the Indian National Congress."
    },
    {
      "id": "pers-salam",
      "name": "Dr. Abdus Salam",
      "title": "Theoretical Physicist & Pakistan's First Nobel Laureate",
      "era": "1926 – 1996",
      "category": "Scientist & Nobel Laureate",
      "avatarIcon": "fa-atom",
      "avatarColor": "#7c3aed",
      "clues": [
        {
          "level": 1,
          "points": 100,
          "text": "I was born in Jhang, Punjab, and set a historic record in the matriculation examination of Punjab University at the age of 14."
        },
        {
          "level": 2,
          "points": 75,
          "text": "I founded the International Centre for Theoretical Physics (ICTP) in Trieste, Italy, in 1964 to nurture scientific talent from developing nations."
        },
        {
          "level": 3,
          "points": 50,
          "text": "I served as the Chief Scientific Advisor to the President of Pakistan from 1960 to 1974, playing a foundational role in establishing SUPARCO and the Pakistan Atomic Energy Commission (PAEC)."
        },
        {
          "level": 4,
          "points": 25,
          "text": "In 1979, I shared the Nobel Prize in Physics with Sheldon Glashow and Steven Weinberg for formulating the Electroweak Unification Theory, uniting electromagnetism and the weak nuclear force."
        }
      ],
      "biography": "Dr. Mohammad Abdus Salam (29 January 1926 – 21 November 1996) was a Pakistani theoretical physicist. He became the first Pakistani and first Muslim to receive a Nobel Prize in Science for the electroweak unification theory, which predicted the existence of the W and Z bosons and the Higgs mechanism.",
      "keyAchievements": [
        "Formulated the Electroweak Theory unifying electromagnetic and weak forces",
        "Awarded the Nobel Prize in Physics (1979)",
        "Founded the International Centre for Theoretical Physics (ICTP) in Trieste",
        "Founding father of SUPARCO and institutionalizer of scientific research in Pakistan"
      ],
      "cssExamAngle": "Electroweak unification theory in Everyday Science; Pakistan's scientific institutions (SUPARCO, PAEC, PINSTECH)."
    },
    {
      "id": "pers-mandela",
      "name": "Nelson Rolihlahla Mandela",
      "title": "Anti-Apartheid Revolutionary & First Black President of South Africa",
      "era": "1918 – 2013",
      "category": "Global Statesman & Human Rights Icon",
      "avatarIcon": "fa-hand-fist",
      "avatarColor": "#e11d48",
      "clues": [
        {
          "level": 1,
          "points": 100,
          "text": "At the 1964 Rivonia Trial, I declared: 'I have cherished the ideal of a democratic and free society... It is an ideal for which I am prepared to die.'"
        },
        {
          "level": 2,
          "points": 75,
          "text": "I spent 27 grueling years incarcerated as prisoner number 46664, predominantly on Robben Island, Pollsmoor, and Victor Verster Prison."
        },
        {
          "level": 3,
          "points": 50,
          "text": "I was awarded the Nobel Peace Prize in 1993 jointly with F. W. de Klerk for peacefully terminating the brutal apartheid regime in my country."
        },
        {
          "level": 4,
          "points": 25,
          "text": "In 1994, I was elected the first Black President of South Africa in the nation's first fully representative democratic election and established the Truth and Reconciliation Commission (TRC)."
        }
      ],
      "biography": "Nelson Mandela (18 July 1918 – 5 December 2013) was a South African anti-apartheid revolutionary, political leader, and philanthropist. He served as President of South Africa from 1994 to 1999 and is internationally revered for his philosophy of racial reconciliation and transitional justice.",
      "keyAchievements": [
        "Led the African National Congress (ANC) struggle against apartheid",
        "Endured 27 years in prison without renouncing the struggle for equality",
        "Negotiated the peaceful transition to multiracial democracy",
        "Formed the Truth and Reconciliation Commission chaired by Archbishop Desmond Tutu"
      ],
      "cssExamAngle": "Transitional justice, Truth and Reconciliation Commissions (TRC) vs. retributive trials, and peaceful political transitions in International Relations."
    },
    {
      "id": "pers-ibn-khaldun",
      "name": "Ibn Khaldun (Abu Zayd 'Abd al-Rahman)",
      "title": "Father of Historiography, Sociology & Philosophy of History",
      "era": "1332 – 1406",
      "category": "Scholar & Historian",
      "avatarIcon": "fa-book-atlas",
      "avatarColor": "#0d9488",
      "clues": [
        {
          "level": 1,
          "points": 100,
          "text": "I was born in Tunis into an aristocratic Andalusian family and served as a diplomat and jurist across North Africa, Granada, and Mamluk Egypt."
        },
        {
          "level": 2,
          "points": 75,
          "text": "I met with the Turco-Mongol conqueror Tamerlane (Timur) outside the besieged walls of Damascus in 1401 to negotiate terms for the city."
        },
        {
          "level": 3,
          "points": 50,
          "text": "I coined the fundamental sociological concept of 'Asabiyyah' (group feeling, social cohesion, and tribal solidarity) as the driving motor of dynastic rise and fall."
        },
        {
          "level": 4,
          "points": 25,
          "text": "My magnum opus is the 'Muqaddimah' (Prolegomena), written in 1377, recognized by modern scholars as the earliest foundational work on sociology, political economy, and historiography."
        }
      ],
      "biography": "Ibn Khaldun (27 May 1332 – 17 March 1406) was an Arab sociologist, philosopher, and historian. His introduction to universal history, the Muqaddimah, formulated groundbreaking theories on civilization, taxation (anticipating the Laffer Curve), and political cycles.",
      "keyAchievements": [
        "Authored 'The Muqaddimah' (1377)",
        "Developed the concept of 'Asabiyyah' (social cohesion) explaining the life cycle of states",
        "Formulated the economic theory that lower tax rates increase aggregate government revenues centuries before Arthur Laffer",
        "Pioneered critical source evaluation and scientific methodology in history"
      ],
      "cssExamAngle": "Ibn Khaldun's theory of state formation, the cyclical decay of empires, and Asabiyyah in CSS Political Science and Islamic History."
    },
    {
      "id": "pers-liaquat",
      "name": "Liaquat Ali Khan (Quaid-e-Millat)",
      "title": "First Prime Minister & Minister of Defence of Pakistan",
      "era": "1895 – 1951",
      "category": "Statesman & Founding Father",
      "avatarIcon": "fa-user-tie",
      "avatarColor": "#059669",
      "clues": [
        {
          "level": 1,
          "text": "I was educated at Aligarh, Allahabad, and Oxford University (Exeter College) and was called to the Bar at Inner Temple in 1922."
        },
        {
          "level": 2,
          "text": "As the Finance Member in the 1946 Interim Government of British India, I presented the celebrated 'Poor Man's Budget' which imposed heavy taxes on capitalist profiteering."
        },
        {
          "level": 3,
          "text": "On March 7, 1949, I moved the historic Objectives Resolution in the Constituent Assembly, declaring that sovereignty over the entire universe belongs to Allah Almighty alone."
        },
        {
          "level": 4,
          "text": "I signed the Liaquat-Nehru Pact in April 1950 to protect minority rights and was tragically martyred on October 16, 1951, at Company Bagh, Rawalpindi."
        }
      ],
      "biography": "Nawabzada Liaquat Ali Khan (1 October 1895 – 16 October 1951) was one of the leading founding fathers of Pakistan. He served as the right-hand lieutenant to Quaid-e-Azam Muhammad Ali Jinnah and guided the newly born state through the monumental refugee and administrative crises as its first Prime Minister.",
      "keyAchievements": [
        "Honorary General Secretary of the All-India Muslim League (1936–1947)",
        "Presented the 1946 'Poor Man's Budget' in the Interim Government",
        "Moved the landmark Objectives Resolution (1949)",
        "Signed the Liaquat-Nehru Pact for minority protections (1950)"
      ],
      "cssExamAngle": "The Objectives Resolution (1949) as the grundnorm of Pakistani constitutionalism; the 1946 Poor Man's Budget; and early foreign policy alignment."
    },
    {
      "id": "pers-fatima",
      "name": "Mohtarma Fatima Jinnah (Madar-e-Millat)",
      "title": "Mother of the Nation & Champion of Democracy",
      "era": "1893 – 1967",
      "category": "Leader & Dental Surgeon",
      "avatarIcon": "fa-venus",
      "avatarColor": "#e11d48",
      "clues": [
        {
          "level": 1,
          "text": "I graduated from Dr. R. Ahmed Dental College in Calcutta in 1923, becoming one of the first female dental surgeons in British India."
        },
        {
          "level": 2,
          "text": "I gave up my flourishing dental practice in Bombay in 1929 to constantly accompany and support my brother following his wife's tragic passing."
        },
        {
          "level": 3,
          "text": "I founded the All Pakistan Women's Association (APWA) alongside Begum Ra'ana Liaquat Ali Khan and worked tirelessly for the rehabilitation of 1947 refugees."
        },
        {
          "level": 4,
          "text": "In 1965, at the age of 71, I contested the presidential election as the candidate of the Combined Opposition Parties (COP) against Field Marshal Ayub Khan."
        }
      ],
      "biography": "Fatima Jinnah (31 July 1893 – 9 July 1967) was a dental surgeon, author, and stateswoman. Known reverently as Madar-e-Millat ('Mother of the Nation'), she played an indispensable role alongside her elder brother Muhammad Ali Jinnah in mobilizing Muslim women for the Pakistan Movement and later stood as the defiant torchbearer of constitutional democracy in 1965.",
      "keyAchievements": [
        "Co-founder of the Pakistan Women's National Guard and active organizer of the Muslim League Women's Wing",
        "Authored the biographical book 'My Brother' (published 1987)",
        "Unifying candidate of the Combined Opposition Parties (COP) in the 1965 presidential election",
        "Pioneered female socio-political empowerment in Pakistan"
      ],
      "cssExamAngle": "Role of women in the Pakistan Movement; analysis of the 1965 presidential elections under the Basic Democracies system."
    },
    {
      "id": "pers-curie",
      "name": "Marie Skłodowska-Curie",
      "title": "Physicist, Chemist & Only Person to Win Nobel Prizes in Two Sciences",
      "era": "1867 – 1934",
      "category": "Scientist & Pioneer",
      "avatarIcon": "fa-flask-vial",
      "avatarColor": "#0284c7",
      "clues": [
        {
          "level": 1,
          "text": "I was born in Warsaw, Poland, and conducted clandestine studies at the underground 'Flying University' before emigrating to Paris to study at the Sorbonne."
        },
        {
          "level": 2,
          "text": "I coined the term 'radioactivity' and, along with my husband Pierre, discovered two brand-new chemical elements: Polonium and Radium."
        },
        {
          "level": 3,
          "text": "During World War I, I developed mobile radiography units ('Petites Curies') to assist battlefield surgeons treating wounded soldiers."
        },
        {
          "level": 4,
          "text": "I am the first woman to win a Nobel Prize, the first person to win two Nobel Prizes, and the only person in history to win Nobel Prizes in two different scientific fields (Physics in 1903 and Chemistry in 1911)."
        }
      ],
      "biography": "Marie Curie (7 November 1867 – 4 July 1934) was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. Her discoveries of radium and polonium revolutionized modern physics, nuclear medicine, and cancer radiotherapy.",
      "keyAchievements": [
        "Discovered Polonium and Radium (1898)",
        "Nobel Prize in Physics (1903) for research on spontaneous radiation",
        "Nobel Prize in Chemistry (1911) for isolating pure radium and studying its compounds",
        "Pioneered mobile X-ray units in WWI"
      ],
      "cssExamAngle": "Radioactivity, half-life decay, ionizing radiation vs. non-ionizing radiation in General Science & Ability."
    },
    {
      "id": "pers-bismarck",
      "name": "Otto von Bismarck (The Iron Chancellor)",
      "title": "Minister President of Prussia & First Chancellor of the German Empire",
      "era": "1815 – 1898",
      "category": "Statesman & Diplomat",
      "avatarIcon": "fa-chess-rook",
      "avatarColor": "#475569",
      "clues": [
        {
          "level": 1,
          "text": "In an 1862 address to the Prussian parliament, I famously declared: 'The great questions of the day will not be decided by speeches and majority resolutions... but by iron and blood.'"
        },
        {
          "level": 2,
          "text": "I engineered three calculated wars—against Denmark (1864), Austria (1866), and France (1870)—to unify Germany under Prussian hegemony."
        },
        {
          "level": 3,
          "text": "I hosted the 1884–1885 Berlin Conference, which established the rules for the European 'Scramble for Africa'."
        },
        {
          "level": 4,
          "text": "Known as the 'Iron Chancellor', I was the ultimate practitioner of Realpolitik and created the world's first modern welfare state system (accident insurance, sickness insurance, and old-age pensions) in the 1880s."
        }
      ],
      "biography": "Otto von Bismarck (1 April 1815 – 30 July 1898) was a conservative German statesman and master diplomat. As Chancellor of the German Empire from 1871 to 1890, he dominated European affairs through an intricate alliance system designed to preserve German power and isolate France.",
      "keyAchievements": [
        "Unified the German Empire (proclaimed at Versailles in 1871)",
        "Pioneered the philosophy and practice of 'Realpolitik'",
        "Created the world's first comprehensive social security welfare system",
        "Constructed the complex Bismarckian Alliance System (Dual Alliance, Reinsurance Treaty)"
      ],
      "cssExamAngle": "Realpolitik vs. Idealism in International Relations; the Balance of Power in Europe (1871–1890); origins of WWI."
    }
  ],
  "factOrFiction": [
    {
      "id": "fof-1",
      "statement": "The 1973 Constitution of Pakistan was passed unanimously by the National Assembly on April 10, 1973, with zero opposing votes.",
      "isFact": true,
      "category": "Pakistan Affairs",
      "trap": "Many students assume some opposition parties voted against it.",
      "explanation": "FACT! The 1973 Constitution was passed unanimously on April 10, 1973, receiving 125 affirmative votes out of 128 present (with 3 abstentions, but ZERO dissenting votes). Leaders of all opposition parties, including Khan Abdul Wali Khan, Mufti Mahmud, Professor Ghafoor Ahmad, and Sardar Sher Baz Khan Mazari, signed the accord."
    },
    {
      "id": "fof-2",
      "statement": "Under Chapter VII of the UN Charter, resolutions adopted by the UN General Assembly carry legally binding international authority on all member states.",
      "isFact": false,
      "category": "International Relations",
      "trap": "Confusing the General Assembly with the UN Security Council.",
      "explanation": "FICTION! Only resolutions adopted by the UN Security Council (UNSC) under Chapter VII ('Action with Respect to Threats to the Peace, Breaches of the Peace, and Acts of Aggression') are legally binding on UN member states under Article 25. UN General Assembly (UNGA) resolutions are non-binding recommendations carrying moral and political weight."
    },
    {
      "id": "fof-3",
      "statement": "Pakistan was an inaugural founding member of the Non-Aligned Movement (NAM) at the 1961 Belgrade Conference.",
      "isFact": false,
      "category": "Pakistan Affairs",
      "trap": "Assuming Pakistan was always non-aligned from independence.",
      "explanation": "FICTION! Pakistan was a member of Western military alliances (SEATO in 1954 and CENTO/Baghdad Pact in 1955) and was barred from joining NAM at its 1961 founding. Pakistan only joined NAM in September 1979 at the Havana Summit under President Zia-ul-Haq, after formally leaving CENTO in March 1979 following the Iranian Revolution."
    },
    {
      "id": "fof-4",
      "statement": "The famous formula E = mc² implies that mass and energy are interchangeable forms of the same fundamental physical quantity.",
      "isFact": true,
      "category": "Everyday Science",
      "trap": "Thinking mass is permanently destroyed rather than transformed.",
      "explanation": "FACT! Albert Einstein's 1905 Special Theory of Relativity proved mass-energy equivalence: mass is concentrated energy ($E = mc^2$, where $c$ is the speed of light). In nuclear fission and fusion, a tiny fraction of nuclear mass (mass defect) is converted into immense kinetic energy and gamma radiation."
    },
    {
      "id": "fof-5",
      "statement": "The Radcliffe Boundary Commission Award was officially published before the independence ceremonies on August 14, 1947.",
      "isFact": false,
      "category": "Pakistan Affairs",
      "trap": "Assuming boundary lines were known when the new nations were declared.",
      "explanation": "FICTION! Although Sir Cyril Radcliffe completed the boundary awards on August 12, Viceroy Lord Mountbatten deliberately withheld their official publication until August 17, 1947—three days after Pakistan's independence and two days after India's—to ensure British officers would not bear responsibility for the immediate boundary riots on Independence Day."
    },
    {
      "id": "fof-6",
      "statement": "The Tropic of Cancer passes directly through the territorial landmass of Pakistan.",
      "isFact": false,
      "category": "Geography",
      "trap": "Pakistan is close to the tropics, leading candidates to believe it crosses Sindh or Balochistan.",
      "explanation": "FICTION! The Tropic of Cancer (23.5° N latitude) passes south of Pakistan through Gujarat and Rajasthan in India and the Rann of Kutch. Pakistan's southernmost mainland latitude is approximately 23°42' N (near Nagar Parkar in Sindh), meaning Pakistan lies entirely north of the Tropic of Cancer in the temperate zone."
    },
    {
      "id": "fof-7",
      "statement": "Pakistan was the first nation in the Muslim world to grant official diplomatic recognition to the People's Republic of China (PRC).",
      "isFact": true,
      "category": "International Relations",
      "trap": "Some assume Egypt or Indonesia recognized China first.",
      "explanation": "FACT! On January 4, 1950, Pakistan became the first Muslim nation and the third non-communist nation in the world (after Burma and India) to officially recognize the People's Republic of China, establishing formal diplomatic ties on May 21, 1951."
    },
    {
      "id": "fof-8",
      "statement": "Sound waves can travel through a vacuum if their acoustic frequency exceeds 20,000 Hertz (ultrasound).",
      "isFact": false,
      "category": "Everyday Science",
      "trap": "Confusing sound waves (mechanical waves) with light or radio waves (electromagnetic).",
      "explanation": "FICTION! Sound is a mechanical longitudinal wave requiring a physical material medium (solid, liquid, or gas) to propagate via particle collisions. Sound cannot travel through a vacuum at any frequency. Electromagnetic waves (light, radio, X-rays), on the other hand, travel through vacuums with zero medium."
    },
    {
      "id": "fof-9",
      "statement": "Under the 18th Constitutional Amendment (2010), the Concurrent Legislative List was completely abolished, devolving powers to the provinces.",
      "isFact": true,
      "category": "Pakistan Affairs",
      "trap": "Assuming some concurrent subjects still exist under the 1973 Constitution.",
      "explanation": "FACT! The 18th Constitutional Amendment passed in April 2010 completely abolished the Concurrent Legislative List (which previously had 47 subjects shared between Federation and Provinces), transferring 17 federal ministries—including Education, Health, and Tourism—to the provinces and strengthening the Council of Common Interests (CCI)."
    },
    {
      "id": "fof-10",
      "statement": "The United States is a member state of the International Criminal Court (ICC) based in The Hague.",
      "isFact": false,
      "category": "International Relations",
      "trap": "Thinking the US participates in all prominent international courts.",
      "explanation": "FICTION! The United States is NOT a party to the Rome Statute of the International Criminal Court. President Bill Clinton signed the treaty in 2000, but President George W. Bush unsigned it in 2002. The US Congress even enacted the American Service-Members' Protection Act (ASPA) in 2002 to shield US military personnel from ICC jurisdiction."
    },
    {
      "id": "fof-11",
      "statement": "Under the Pakistan Penal Code (PPC), an act committed by a child under seven years of age can be prosecuted as a criminal offence.",
      "isFact": false,
      "category": "Pakistan Law",
      "trap": "Assuming criminal liability applies to all minors under youth courts.",
      "explanation": "FICTION! Section 82 of the Pakistan Penal Code provides an absolute statutory defense of infancy ('Doli Incapax'): 'Nothing is an offence which is done by a child under seven years of age.' Section 83 further grants qualified immunity for children between seven and twelve who have not attained sufficient maturity of understanding."
    },
    {
      "id": "fof-12",
      "statement": "Mount Everest is the highest mountain on Earth measured from sea level, but Mauna Kea in Hawaii is taller when measured from its base on the ocean floor.",
      "isFact": true,
      "category": "Geography",
      "trap": "Thinking Everest is the tallest by every possible physical metric.",
      "explanation": "FACT! Mount Everest has the highest altitude above sea level (8,848.86 meters). However, Mauna Kea has an altitude of 4,207 meters above sea level but extends nearly 6,000 meters below the ocean surface, reaching an aggregate base-to-peak height of approximately 10,210 meters—far surpassing Everest."
    },
    {
      "id": "fof-13",
      "statement": "Pakistan's first Constituent Assembly was dissolved in October 1954 by Governor-General Ghulam Muhammad, an action famously upheld by Chief Justice Muhammad Munir under the 'Doctrine of Necessity'.",
      "isFact": true,
      "category": "Pakistan Affairs",
      "trap": "Students sometimes confuse Ghulam Muhammad's dissolution with Iskander Mirza's 1958 Martial Law.",
      "explanation": "FACT! On October 24, 1954, Governor-General Ghulam Muhammad dissolved the first Constituent Assembly just as it was finalizing the constitution. Assembly Speaker Maulvi Tamizuddin Khan challenged the dissolution in court. Although the Sindh Chief Court ruled in Khan's favor, Chief Justice Muhammad Munir's Federal Court overturned the decision in the landmark Federation of Pakistan v. Maulvi Tamizuddin Khan (1955) case, invoking Bracton's maxim 'Salus populi suprema lex esto' (the safety of the people is the supreme law) and establishing the fateful Doctrine of Necessity."
    },
    {
      "id": "fof-14",
      "statement": "Antibiotics are effective in curing viral infections such as influenza, COVID-19, and the common cold.",
      "isFact": false,
      "category": "Everyday Science",
      "trap": "Common medical misconception: treating viral colds with penicillin or amoxicillin.",
      "explanation": "FICTION! Antibiotics target bacterial cellular structures (such as bacterial cell walls or prokaryotic ribosomes) and have ZERO efficacy against viruses, which reproduce inside host cells and lack bacterial anatomy. Overusing antibiotics for viral illnesses drives global antibiotic antimicrobial resistance (AMR)."
    },
    {
      "id": "fof-15",
      "statement": "The United Nations officially recognizes six official languages: Arabic, Chinese, English, French, Russian, and Spanish.",
      "isFact": true,
      "category": "International Organizations",
      "trap": "Assuming German or Hindi is an official UN working language.",
      "explanation": "FACT! The UN has exactly six official languages: Arabic, Chinese, English, French, Russian, and Spanish. All official UN documents, treaties, and speeches are translated into these six languages."
    },
    {
      "id": "fof-16",
      "statement": "During the 1971 India-Pakistan War, the Simla Agreement was signed in July 1972 by Zulfikar Ali Bhutto and Indira Gandhi, formally creating the 'Line of Control' (LoC) in Jammu and Kashmir.",
      "isFact": true,
      "category": "Pakistan Affairs",
      "trap": "Thinking the ceasefire line was named LoC in 1949 under Karachi Agreement.",
      "explanation": "FACT! Under the Karachi Agreement of 1949, the dividing line was named the 'Ceasefire Line' (CFL). It was the Simla Agreement of July 2, 1972, signed by Zulfikar Ali Bhutto and Indira Gandhi, that converted the ceasefire line into the 'Line of Control' (LoC) and committed both parties to bilateral negotiations without third-party intervention."
    }
  ],
  "organizations": [
    {
      "id": "org-unsc",
      "name": "United Nations Security Council",
      "acronym": "UNSC",
      "established": "1945",
      "headquarters": "New York City, United States",
      "icon": "fa-shield-halved",
      "color": "#0284c7",
      "mandate": "Primary responsibility for the maintenance of international peace and security under the UN Charter.",
      "clues": [
        {
          "level": 1,
          "text": "I have 15 members: 5 permanent veto-wielding states (P5) and 10 non-permanent members elected for 2-year terms by the General Assembly."
        },
        {
          "level": 2,
          "text": "I am the only organ in the United Nations system empowered to make decisions that member states are legally obligated to carry out under Chapter VII of the Charter."
        },
        {
          "level": 3,
          "text": "My resolutions (such as Resolution 242 on the Middle East and Resolution 47 on Jammu and Kashmir) are historic pillars of multilateral diplomacy."
        },
        {
          "level": 4,
          "text": "Pakistan has been elected as a non-permanent member of my council eight times, most recently for the 2025–2026 term."
        }
      ],
      "pakistanRelevance": "Elected for the 2025-2026 term with 182 votes in the UN General Assembly. Crucial forum for Pakistan's stance on Kashmir and UN Peacekeeping missions."
    },
    {
      "id": "org-imf",
      "name": "International Monetary Fund",
      "acronym": "IMF",
      "established": "1944 (Bretton Woods)",
      "headquarters": "Washington, D.C., United States",
      "icon": "fa-landmark",
      "color": "#d97706",
      "mandate": "Ensure the stability of the international monetary system, exchange rates, and international payments to prevent balance-of-payments crises.",
      "clues": [
        {
          "level": 1,
          "text": "I was conceived in July 1944 at the Bretton Woods Conference alongside the World Bank to prevent competitive currency devaluations."
        },
        {
          "level": 2,
          "text": "I created an international reserve asset called Special Drawing Rights (SDRs) in 1969, backed by a basket of five major reserve currencies."
        },
        {
          "level": 3,
          "text": "By convention, my Managing Director is always a European (currently Kristalina Georgieva), while my sister institution's president is an American."
        },
        {
          "level": 4,
          "text": "Pakistan entered its 25th bailout program with me in July 2024—a 37-month, $7 Billion Extended Fund Facility (EFF)."
        }
      ],
      "pakistanRelevance": "Critical creditor providing balance-of-payments stabilization loans conditioned on structural economic reforms (revenue mobilization, energy tariffs, exchange rate flexibility)."
    },
    {
      "id": "org-fatf",
      "name": "Financial Action Task Force",
      "acronym": "FATF",
      "established": "1989 (G7 Summit Paris)",
      "headquarters": "Paris, France (OECD Headquarters)",
      "icon": "fa-building-shield",
      "color": "#0f766e",
      "mandate": "Global money laundering and terrorist financing watchdog setting international standards (40 Recommendations).",
      "clues": [
        {
          "level": 1,
          "text": "I was created at the 1989 G7 Summit in Paris initially to examine and develop measures to combat money laundering from the drug trade."
        },
        {
          "level": 2,
          "text": "Following the September 11 attacks in 2001, my mandate was expanded to encompass terrorist financing (CFT) and later proliferation financing (PF)."
        },
        {
          "level": 3,
          "text": "I maintain two global compliance monitoring classifications popularly termed the 'Grey List' (Increased Monitoring) and 'Black List' (Call for Action)."
        },
        {
          "level": 4,
          "text": "Pakistan successfully completed my rigorous 34-point dual action plans and was officially removed from my 'Grey List' in October 2022."
        }
      ],
      "pakistanRelevance": "Pakistan underwent intense structural legal and institutional reforms (amending AMLA, Anti-Terrorism Act, and FIA procedures) to exit the Grey List in Oct 2022."
    },
    {
      "id": "org-sco",
      "name": "Shanghai Cooperation Organisation",
      "acronym": "SCO",
      "established": "2001 (Evolving from Shanghai Five 1996)",
      "headquarters": "Beijing, China",
      "icon": "fa-globe-asia",
      "color": "#16a34a",
      "mandate": "Eurasian political, economic, international security, and defense organization fighting the 'Three Evils': terrorism, separatism, and extremism.",
      "clues": [
        {
          "level": 1,
          "text": "I maintain a permanent counter-terrorism body named RATS (Regional Anti-Terrorist Structure) located in Tashkent, Uzbekistan."
        },
        {
          "level": 2,
          "text": "I represent over 20% of global GDP and approximately 40% of the world's population, spanning Eurasia."
        },
        {
          "level": 3,
          "text": "Pakistan and India both officially joined me as full member states simultaneously at the Astana Summit in June 2017."
        },
        {
          "level": 4,
          "text": "Islamabad hosted my prestigious Council of Heads of Government (CHG) summit in October 2024."
        }
      ],
      "pakistanRelevance": "Provides Pakistan with vital Eurasian connectivity, strategic partnership with China and Russia, and energy corridors to Central Asia."
    },
    {
      "id": "org-oic",
      "name": "Organisation of Islamic Cooperation",
      "acronym": "OIC",
      "established": "1969 (Rabat Summit)",
      "headquarters": "Jeddah, Saudi Arabia",
      "icon": "fa-kaaba",
      "color": "#059669",
      "mandate": "The collective voice of the Muslim world, safeguarding and protecting the interests of the Muslim world in the spirit of promoting international peace.",
      "clues": [
        {
          "level": 1,
          "text": "I was established in September 1969 following the arson attack on the Al-Aqsa Mosque in Israeli-occupied Jerusalem."
        },
        {
          "level": 2,
          "text": "I am the second-largest intergovernmental organization on Earth after the United Nations, with a membership of 57 states across 4 continents."
        },
        {
          "level": 3,
          "text": "Lahore was the venue for my historic 2nd Islamic Summit in February 1974, hosted by Prime Minister Zulfikar Ali Bhutto and attended by King Faisal and Yasser Arafat."
        },
        {
          "level": 4,
          "text": "My official charter designates me as the 'Collective Voice of the Muslim World'."
        }
      ],
      "pakistanRelevance": "Pakistan is a founding member; historically hosted the 1974 2nd Summit in Lahore and multiple Foreign Ministers' Council meetings on Kashmir, Islamophobia, and Palestine."
    },
    {
      "id": "org-icj",
      "name": "International Court of Justice",
      "acronym": "ICJ",
      "established": "1945",
      "headquarters": "The Peace Palace, The Hague, Netherlands",
      "icon": "fa-gavel",
      "color": "#4f46e5",
      "mandate": "Principal judicial organ of the UN settling legal disputes submitted by states and giving advisory opinions on legal questions.",
      "clues": [
        {
          "level": 1,
          "text": "I am composed of 15 judges elected for 9-year terms by the UN General Assembly and Security Council voting simultaneously."
        },
        {
          "level": 2,
          "text": "Unlike the ICC, which prosecutes individual war criminals, only sovereign states can be parties to contentious cases before me."
        },
        {
          "level": 3,
          "text": "Pakistan's celebrated jurist Sir Muhammad Zafarullah Khan served as my President from 1970 to 1973."
        },
        {
          "level": 4,
          "text": "I adjudicated the high-profile Jadhav Case (India v. Pakistan) in 2019 concerning consular access under the Vienna Convention."
        }
      ],
      "pakistanRelevance": "Renowned Pakistani jurists Sir Zafarullah Khan and Syed Sharifuddin Pirzada represented Pakistan in landmark international legal disputes before this court."
    },
    {
      "id": "org-wto",
      "name": "World Trade Organization",
      "acronym": "WTO",
      "established": "1995 (Marrakesh Agreement)",
      "headquarters": "Geneva, Switzerland",
      "icon": "fa-ship",
      "color": "#0284c7",
      "mandate": "Regulates and facilitates international trade in goods, services, and intellectual property by providing a rules-based framework and dispute settlement.",
      "clues": [
        {
          "level": 1,
          "text": "I evolved from the General Agreement on Tariffs and Trade (GATT 1947) following the conclusion of the 8-year Uruguay Round negotiations."
        },
        {
          "level": 2,
          "text": "My foundational pillars are the Most-Favoured-Nation (MFN) principle and the National Treatment principle."
        },
        {
          "level": 3,
          "text": "My Director-General is currently Ngozi Okonjo-Iweala, the first woman and first African to lead the organization."
        },
        {
          "level": 4,
          "text": "Pakistan has been an active founding member of my organization since January 1, 1995."
        }
      ],
      "pakistanRelevance": "Pakistan relies on WTO agreements for market access for textiles, disputes (e.g. Basmati rice geographic indications), and compliance with TRIPS."
    },
    {
      "id": "org-nato",
      "name": "North Atlantic Treaty Organization",
      "acronym": "NATO",
      "established": "1949 (Washington Treaty)",
      "headquarters": "Brussels, Belgium",
      "icon": "fa-compass",
      "color": "#1e3a8a",
      "mandate": "Intergovernmental transatlantic military alliance committed to collective self-defense under Article 5 of its founding treaty.",
      "clues": [
        {
          "level": 1,
          "text": "My foundational principle is Article 5: an armed attack against one or more members shall be considered an attack against all."
        },
        {
          "level": 2,
          "text": "Article 5 has been invoked only once in my history: following the September 11, 2001 terrorist attacks on the United States."
        },
        {
          "level": 3,
          "text": "I recently welcomed Finland (2023) and Sweden (2024) as members, expanding my alliance to 32 sovereign nations."
        },
        {
          "level": 4,
          "text": "While Pakistan is not a member, the US designated Pakistan as a 'Major Non-NATO Ally' (MNNA) in 2004."
        }
      ],
      "pakistanRelevance": "Pakistan served as a vital logistical frontline state (GLOCs) for NATO's International Security Assistance Force (ISAF) operations in Afghanistan from 2001 to 2021."
    },
    {
      "id": "org-who",
      "name": "World Health Organization",
      "acronym": "WHO",
      "established": "1948",
      "headquarters": "Geneva, Switzerland",
      "icon": "fa-heart-pulse",
      "color": "#0d9488",
      "mandate": "Directing and coordinating authority on international health work within the United Nations system.",
      "clues": [
        {
          "level": 1,
          "text": "My constitution came into force on April 7, 1948—a date celebrated globally every year as World Health Day."
        },
        {
          "level": 2,
          "text": "I led the historic global eradication campaign of Smallpox, officially certified in 1980."
        },
        {
          "level": 3,
          "text": "My Director-General is Dr. Tedros Adhanom Ghebreyesus, who declared COVID-19 a Public Health Emergency of International Concern (PHEIC) in 2020."
        },
        {
          "level": 4,
          "text": "I collaborate intensely with Pakistan's government on the National Polio Eradication Programme, targeting the Wild Poliovirus."
        }
      ],
      "pakistanRelevance": "Active technical and surveillance partner in Pakistan's fight against endemic polio, hepatitis, dengue, and post-flood waterborne epidemics."
    },
    {
      "id": "org-iaea",
      "name": "International Atomic Energy Agency",
      "acronym": "IAEA",
      "established": "1957",
      "headquarters": "Vienna International Centre, Vienna, Austria",
      "icon": "fa-circle-radiation",
      "color": "#d97706",
      "mandate": "Promotes the peaceful use of nuclear energy and inhibits its use for any military purpose, including nuclear weapons.",
      "clues": [
        {
          "level": 1,
          "text": "I was inspired by US President Dwight D. Eisenhower's famous 1953 'Atoms for Peace' address before the UN General Assembly."
        },
        {
          "level": 2,
          "text": "I was awarded the Nobel Peace Prize in 2005 jointly with my Director-General Mohamed ElBaradei."
        },
        {
          "level": 3,
          "text": "I conduct rigorous nuclear safeguards and on-site camera inspections of commercial reactors under the NPT framework."
        },
        {
          "level": 4,
          "text": "Pakistan maintains all of its civil nuclear power plants (such as KANUPP-2/3 and CHASNUPP-1-4) under my strict safeguards."
        }
      ],
      "pakistanRelevance": "Pakistan has maintained a spotless 50-year nuclear safeguards record with IAEA for its civilian nuclear power plants."
    }
  ],
  "dailyFiveSets": [
    {
      "day": "Monday",
      "theme": "Foundations & Statecraft",
      "questions": [
        {
          "subject": "Pakistan Affairs",
          "q": "Who was the Viceroy of India when the Partition of Bengal was enacted in 1905?",
          "options": [
            "Lord Curzon",
            "Lord Minto",
            "Lord Ripon",
            "Lord Chelmsford"
          ],
          "ans": 0,
          "exp": "Lord Curzon partitioned the Bengal presidency in October 1905 for administrative efficiency, creating a Muslim-majority province of Eastern Bengal and Assam."
        },
        {
          "subject": "English",
          "q": "Identify the correct meaning of the idiom: 'To burn the candle at both ends'",
          "options": [
            "To cause accidental arson",
            "To exhaust one's energy by working late nights and early mornings",
            "To waste money foolishly",
            "To illuminate a dark room evenly"
          ],
          "ans": 1,
          "exp": "'Burning the candle at both ends' means overworking oneself to physical exhaustion by going to bed late and rising early."
        },
        {
          "subject": "World General Knowledge",
          "q": "Which waterway connects the Mediterranean Sea directly to the Red Sea, eliminating the need to sail around Africa?",
          "options": [
            "Panama Canal",
            "Suez Canal",
            "Strait of Malacca",
            "Kiel Canal"
          ],
          "ans": 1,
          "exp": "Constructed by Ferdinand de Lesseps and opened in November 1869, the Suez Canal connects the Mediterranean directly to the Red Sea."
        },
        {
          "subject": "Everyday Science",
          "q": "What is the primary gas responsible for the greenhouse effect on the planet Venus, causing surface temperatures of over 460°C?",
          "options": [
            "Methane (CH4)",
            "Carbon Dioxide (CO2)",
            "Sulfuric Acid Vapor",
            "Nitrogen Dioxide"
          ],
          "ans": 1,
          "exp": "Venus's dense atmosphere is over 96.5% Carbon Dioxide (CO2), creating a runaway greenhouse effect making it the hottest planet in the Solar System."
        },
        {
          "subject": "Current Affairs",
          "q": "Which landmark constitutional reform passed in Pakistan in late 2024 established dedicated Constitutional Benches in the Supreme Court and High Courts?",
          "options": [
            "25th Constitutional Amendment",
            "26th Constitutional Amendment",
            "27th Constitutional Amendment",
            "24th Constitutional Amendment"
          ],
          "ans": 1,
          "exp": "The 26th Constitutional Amendment Act, 2024, enacted in October 2024, established Constitutional Benches in the Supreme Court and High Courts and restructured the Judicial Commission of Pakistan."
        }
      ]
    },
    {
      "day": "Tuesday",
      "theme": "Diplomacy & Natural Sciences",
      "questions": [
        {
          "subject": "Pakistan Affairs",
          "q": "Under the Indus Waters Treaty of 1960 signed in Karachi, Pakistan was allocated exclusive rights to which three rivers?",
          "options": [
            "Ravi, Beas, and Sutlej",
            "Indus, Jhelum, and Chenab",
            "Indus, Kabul, and Swat",
            "Chenab, Ravi, and Jhelum"
          ],
          "ans": 1,
          "exp": "Brokered by the World Bank and signed by President Ayub Khan and PM Jawaharlal Nehru, Pakistan received unrestricted use of the Western Rivers: Indus, Jhelum, and Chenab."
        },
        {
          "subject": "English",
          "q": "Choose the word most opposite in meaning (Antonym) to: 'EPHEMERAL'",
          "options": [
            "Transient",
            "Fleeting",
            "Perpetual",
            "Evanescent"
          ],
          "ans": 2,
          "exp": "'Ephemeral' means lasting for a very short time. Its antonym is 'Perpetual' (everlasting or permanent)."
        },
        {
          "subject": "World General Knowledge",
          "q": "The 'Strait of Hormuz', a vital maritime chokepoint through which approximately 20% of global petroleum passes, separates Oman and UAE from:",
          "options": [
            "Saudi Arabia",
            "Yemen",
            "Iran",
            "Qatar"
          ],
          "ans": 2,
          "exp": "The Strait of Hormuz connects the Persian Gulf with the Gulf of Oman, located between Oman/UAE on the south and Iran on the north."
        },
        {
          "subject": "Everyday Science",
          "q": "Which human organ produces bile juice, which is subsequently stored and concentrated in the gallbladder?",
          "options": [
            "Pancreas",
            "Liver",
            "Kidney",
            "Stomach"
          ],
          "ans": 1,
          "exp": "Bile is synthesized continuously by hepatocytes in the liver and transported to the gallbladder for storage and concentration before release into the duodenum."
        },
        {
          "subject": "Current Affairs",
          "q": "In July 2024, Pakistan reached a staff-level agreement with the International Monetary Fund (IMF) for an Extended Fund Facility (EFF) valued at:",
          "options": [
            "$3 Billion",
            "$7 Billion",
            "$10 Billion",
            "$1.2 Billion"
          ],
          "ans": 1,
          "exp": "Pakistan and the IMF agreed on a 37-month, $7 Billion Extended Fund Facility (EFF) program in July 2024, approved by the IMF Executive Board in September 2024."
        }
      ]
    },
    {
      "day": "Wednesday",
      "theme": "Economy, Ecology & Institutions",
      "questions": [
        {
          "subject": "Pakistan Affairs",
          "q": "Who served as the first Prime Minister of Pakistan and presented the Objectives Resolution to the Constituent Assembly in March 1949?",
          "options": [
            "Khawaja Nazimuddin",
            "Liaquat Ali Khan",
            "Huseyn Shaheed Suhrawardy",
            "Chaudhry Muhammad Ali"
          ],
          "ans": 1,
          "exp": "Liaquat Ali Khan moved the historic Objectives Resolution on March 7, 1949, which was adopted on March 12, 1949, and later became substantive Article 2A of the Constitution."
        },
        {
          "subject": "English",
          "q": "Identify the figure of speech in: 'The wind whispered through the dark, weeping pines.'",
          "options": [
            "Hyperbole",
            "Oxymoron",
            "Personification",
            "Simile"
          ],
          "ans": 2,
          "exp": "Personification attributes human qualities or actions (whispering, weeping) to non-human elements (the wind, pine trees)."
        },
        {
          "subject": "World General Knowledge",
          "q": "Which African nation is completely surrounded by South Africa, making it an enclaved sovereign country?",
          "options": [
            "Eswatini",
            "Lesotho",
            "Botswana",
            "Namibia"
          ],
          "ans": 1,
          "exp": "The Kingdom of Lesotho is an enclaved sovereign country entirely surrounded by the Republic of South Africa."
        },
        {
          "subject": "Everyday Science",
          "q": "Deficiency of Vitamin D in growing children leads to which skeletal disease characterized by soft, weakened, and deformed bones?",
          "options": [
            "Scurvy",
            "Rickets",
            "Beriberi",
            "Pellagra"
          ],
          "ans": 1,
          "exp": "Vitamin D is essential for calcium and phosphate absorption. Its deficiency in children causes Rickets (in adults, Osteomalacia)."
        },
        {
          "subject": "Current Affairs",
          "q": "In 2024, which five countries officially joined the BRICS grouping as new member states?",
          "options": [
            "Turkey, Mexico, Indonesia, Pakistan, Nigeria",
            "Egypt, Ethiopia, Iran, Saudi Arabia, UAE",
            "Argentina, Chile, Colombia, Peru, Brazil",
            "Vietnam, Thailand, Malaysia, Singapore, Philippines"
          ],
          "ans": 1,
          "exp": "BRICS officially expanded on January 1, 2024, welcoming Egypt, Ethiopia, Iran, Saudi Arabia, and the United Arab Emirates as full members."
        }
      ]
    },
    {
      "day": "Thursday",
      "theme": "Governance & Physical Universe",
      "questions": [
        {
          "subject": "Pakistan Affairs",
          "q": "The Lucknow Pact of 1916 between the All-India Muslim League and the Congress was historic because Congress officially accepted:",
          "options": [
            "The complete independence of India",
            "Separate Electorates for Muslims and weightage in minority provinces",
            "The Urdu language as national lingua franca",
            "Immediate dominion status under Britain"
          ],
          "ans": 1,
          "exp": "In the 1916 Lucknow Pact, engineered largely by Jinnah, Congress for the first and only time officially conceded separate electorates for Muslims and guaranteed one-third representation in the Central Legislative Assembly."
        },
        {
          "subject": "English",
          "q": "Choose the correct sentence containing a dangling modifier error:",
          "options": [
            "Walking down the garden path, the flowers looked vibrant and fresh.",
            "Walking down the garden path, I noticed the vibrant and fresh flowers.",
            "While I walked down the path, the flowers appeared radiant.",
            "The flowers along the path were vibrant and fresh."
          ],
          "ans": 0,
          "exp": "In option A, 'Walking down the garden path' illogically modifies 'the flowers' (flowers cannot walk down a path), creating a classic dangling modifier error."
        },
        {
          "subject": "World General Knowledge",
          "q": "Which nation operates the Panama Canal today, having assumed complete sovereign control from the United States on December 31, 1999?",
          "options": [
            "Colombia",
            "Panama (Panama Canal Authority)",
            "United States",
            "Nicaragua"
          ],
          "ans": 1,
          "exp": "Under the 1977 Torrijos-Carter Treaties signed by President Jimmy Carter and General Omar Torrijos, Panama gained full ownership and operational control of the canal at noon on December 31, 1999."
        },
        {
          "subject": "Everyday Science",
          "q": "What is the speed of light in a vacuum, represented by the fundamental physical constant 'c'?",
          "options": [
            "Approximately 300,000 kilometers per second",
            "Approximately 150,000 meters per second",
            "3,000 kilometers per second",
            "Sound speed squared"
          ],
          "ans": 0,
          "exp": "The speed of light in vacuum is exactly 299,792,458 meters per second (approximately 3 × 10^8 m/s, or ~300,000 km/s)."
        },
        {
          "subject": "Current Affairs",
          "q": "The Special Investment Facilitation Council (SIFC), established in Pakistan to fast-track foreign direct investment, focuses on which key sectors?",
          "options": [
            "Defense, Tourism, Aerospace, and Aviation",
            "Agriculture, Information Technology, Mines & Minerals, and Energy",
            "Textiles, Automobile assembly, Steel, and Chemical manufacturing",
            "Real Estate, Banking, Stock Exchange, and Insurance"
          ],
          "ans": 1,
          "exp": "The SIFC was constituted in June 2023 as a single-window hybrid economic facilitation mechanism targeting five priority sectors: Agriculture, IT/Telecom, Mines & Minerals, Energy, and Privatization."
        }
      ]
    },
    {
      "day": "Friday",
      "theme": "Legal Frameworks & Biology",
      "questions": [
        {
          "subject": "Pakistan Affairs",
          "q": "Which article of the 1973 Constitution establishes that Islam shall be the State religion of Pakistan?",
          "options": [
            "Article 1",
            "Article 2",
            "Article 2A",
            "Article 227"
          ],
          "ans": 1,
          "exp": "Article 2 of the 1973 Constitution declares: 'Islam shall be the State religion of Pakistan.' (Article 2A incorporates the Objectives Resolution as a substantive part of the Constitution)."
        },
        {
          "subject": "English",
          "q": "Identify the word that is correctly spelled:",
          "options": [
            "Mischievious",
            "Mischievous",
            "Mischevious",
            "Mischivous"
          ],
          "ans": 1,
          "exp": "'Mischievous' (pronounced MIS-chiv-us) is spelled M-I-S-C-H-I-E-V-O-U-S. Adding an extra 'i' before 'ous' is a common spelling error."
        },
        {
          "subject": "World General Knowledge",
          "q": "The historic city of Timbuktu, renowned for its ancient Sankore University and priceless medieval Islamic manuscripts, is located in which West African country?",
          "options": [
            "Niger",
            "Mali",
            "Chad",
            "Mauritania"
          ],
          "ans": 1,
          "exp": "Timbuktu is an ancient Saharan trading and scholarly center located on the southern edge of the Sahara in the Republic of Mali."
        },
        {
          "subject": "Everyday Science",
          "q": "What type of blood cells are primarily responsible for blood clotting and stopping hemorrhage upon vascular injury?",
          "options": [
            "Erythrocytes (Red Blood Cells)",
            "Leukocytes (White Blood Cells)",
            "Thrombocytes (Platelets)",
            "Lymphocytes"
          ],
          "ans": 2,
          "exp": "Platelets (thrombocytes) adhere to exposed collagen at injured blood vessel sites and trigger the coagulation cascade, forming a fibrin mesh clot."
        },
        {
          "subject": "Current Affairs",
          "q": "In the 2024 United States Presidential Election held in November, who was elected as the 47th President of the United States?",
          "options": [
            "Kamala Harris",
            "Donald J. Trump",
            "Joe Biden",
            "Ron DeSantis"
          ],
          "ans": 1,
          "exp": "Donald Trump won the November 2024 US Presidential Election, defeating Vice President Kamala Harris to become the 47th President of the United States, achieving non-consecutive presidential terms."
        }
      ]
    },
    {
      "day": "Saturday",
      "theme": "Regional History & Chemistry",
      "questions": [
        {
          "subject": "Pakistan Affairs",
          "q": "Who was the author of the historic 1940 Lahore Resolution, which was drafted by the Working Committee and moved by A.K. Fazlul Huq?",
          "options": [
            "Chaudhry Khaliquzzaman",
            "Sir Muhammad Zafarullah Khan",
            "Liaquat Ali Khan",
            "I.I. Chundrigar"
          ],
          "ans": 1,
          "exp": "While A.K. Fazlul Huq (the 'Sher-e-Bangla') formally moved the resolution on March 23, 1940, the draft was penned primarily by Sir Muhammad Zafarullah Khan, based on the Muslim League's basic guidelines."
        },
        {
          "subject": "English",
          "q": "Select the sentence written in the correct subjunctive mood:",
          "options": [
            "I wish I was taller so I could play basketball.",
            "I wish I were taller so I could play basketball.",
            "If he was the president, he would lower taxes.",
            "I request that he goes immediately."
          ],
          "ans": 1,
          "exp": "In contrary-to-fact hypothetical statements and wishes, the subjunctive form 'were' is mandatory regardless of the singular subject ('I wish I were...', 'If he were...')."
        },
        {
          "subject": "World General Knowledge",
          "q": "Which landlocked body of water between Jordan, Israel, and the West Bank has the lowest land elevation on Earth (~430 meters below sea level) and extreme salinity?",
          "options": [
            "Caspian Sea",
            "Aral Sea",
            "Dead Sea",
            "Lake Baikal"
          ],
          "ans": 2,
          "exp": "The surface and shores of the Dead Sea are approximately 430.5 meters below sea level, making it the lowest point on dry land on Earth."
        },
        {
          "subject": "Everyday Science",
          "q": "What is the pH value of pure distilled water at standard room temperature (25°C)?",
          "options": [
            "0",
            "5.6",
            "7.0 (Neutral)",
            "14.0"
          ],
          "ans": 2,
          "exp": "Pure neutral water at 25°C has equal hydrogen [H+] and hydroxide [OH-] ion concentrations (10^-7 M), giving it a neutral pH of 7.0."
        },
        {
          "subject": "Current Affairs",
          "q": "In 2024, the Supreme Court of Pakistan issued a landmark ruling regarding the allocation of reserved seats to which political coalition?",
          "options": [
            "Sunni Ittehad Council / PTI",
            "JUI-F",
            "MQM-Pakistan",
            "ANP"
          ],
          "ans": 0,
          "exp": "In July 2024, a 13-member full bench of the Supreme Court of Pakistan ruled by majority (8-5) that the Pakistan Tehreek-e-Insaf (PTI) was an eligible political party entitled to reserved seats for women and minorities."
        }
      ]
    },
    {
      "day": "Sunday",
      "theme": "Global Geopolitics & Modern Physics",
      "questions": [
        {
          "subject": "Pakistan Affairs",
          "q": "The Simla Deputation met Viceroy Lord Minto on October 1, 1906, in Simla to present Muslim demands. Who led this 35-member deputation?",
          "options": [
            "Sir Syed Ahmad Khan",
            "Sir Sultan Muhammad Shah (Aga Khan III)",
            "Nawab Mohsin-ul-Mulk",
            "Nawab Viqar-ul-Mulk"
          ],
          "ans": 1,
          "exp": "Sir Aga Khan III led the 35-member Simla Deputation, organized by Nawab Mohsin-ul-Mulk, which demanded separate electorates and weighted representation for Indian Muslims."
        },
        {
          "subject": "English",
          "q": "Complete the sentence with the appropriate preposition: 'He was acquitted ______ all charges of corruption.'",
          "options": [
            "from",
            "of",
            "with",
            "against"
          ],
          "ans": 1,
          "exp": "The verb 'acquit' takes the fixed preposition 'of' (e.g., 'acquitted of all charges')."
        },
        {
          "subject": "World General Knowledge",
          "q": "What is the largest island in the world by land area that is not considered a continent?",
          "options": [
            "Madagascar",
            "Greenland",
            "Borneo",
            "New Guinea"
          ],
          "ans": 1,
          "exp": "Greenland is the world's largest island, covering over 2.16 million square kilometers, functioning as an autonomous territory of the Kingdom of Denmark."
        },
        {
          "subject": "Everyday Science",
          "q": "Which subatomic particle was discovered by British physicist James Chadwick in 1932, for which he received the Nobel Prize?",
          "options": [
            "Proton",
            "Electron",
            "Neutron",
            "Positron"
          ],
          "ans": 2,
          "exp": "James Chadwick discovered the uncharged subatomic particle—the neutron—inside atomic nuclei in 1932, resolving the mystery of atomic mass."
        },
        {
          "subject": "Current Affairs",
          "q": "The China-Pakistan Economic Corridor (CPEC) Phase-II primarily transitions from initial infrastructure and energy projects to which strategic domain?",
          "options": [
            "Maritime deep-sea fishing and oil drilling exclusively",
            "Industrialization, Agriculture modernization, IT/Science technology, and Special Economic Zones (SEZs)",
            "Building cross-border railway links to Europe only",
            "Privatizing state distribution companies"
          ],
          "ans": 1,
          "exp": "CPEC Phase-II pivots from Phase-I's power and highway focus toward industrial cooperation, B2B joint ventures, modernization of agriculture, IT hubs, and operationalizing SEZs (Rashakai, Dhabeji, Allama Iqbal)."
        }
      ]
    }
  ],
  "championshipPool": [
    {
      "id": "champ-1",
      "category": "Pakistan Affairs",
      "q": "Under the Government of India Act 1935, which system was introduced at the provincial level, replacing dyarchy?",
      "options": [
        "Provincial Autonomy",
        "Communal Electorates",
        "Direct British Rule",
        "Unitary Presidential System"
      ],
      "ans": 0,
      "exp": "The 1935 Act abolished dyarchy in the provinces and established 'Provincial Autonomy', while introducing dyarchy at the Federal level."
    },
    {
      "id": "champ-2",
      "category": "International Relations",
      "q": "Which theory of International Relations argues that the international system is defined by structural anarchy, forcing states to pursue self-help and balance of power?",
      "options": [
        "Constructivism",
        "Neorealism (Structural Realism)",
        "Liberal Internationalism",
        "Critical Theory"
      ],
      "ans": 1,
      "exp": "Pioneered by Kenneth Waltz in 'Theory of International Politics' (1979), Neorealism emphasizes that international anarchy drives state behavior rather than human nature."
    },
    {
      "id": "champ-3",
      "category": "Everyday Science",
      "q": "Which cell organelle contains digestive hydrolytic enzymes capable of breaking down cellular debris and is termed the 'suicide bag' of the cell?",
      "options": [
        "Ribosome",
        "Mitochondria",
        "Lysosome",
        "Golgi Apparatus"
      ],
      "ans": 2,
      "exp": "Lysosomes contain acid hydrolases that digest macromolecules, old cell organelles, and foreign pathogens."
    },
    {
      "id": "champ-4",
      "category": "English",
      "q": "Select the correctly punctuated sentence:",
      "options": [
        "The committee, having reviewed the evidence decided to adjourn.",
        "The committee, having reviewed the evidence, decided to adjourn.",
        "The committee having reviewed the evidence, decided to adjourn.",
        "The committee having reviewed the evidence decided, to adjourn."
      ],
      "ans": 1,
      "exp": "The non-restrictive participial phrase 'having reviewed the evidence' must be enclosed in paired commas."
    },
    {
      "id": "champ-5",
      "category": "World GK",
      "q": "What is the deepest known oceanic trench on Earth, plunging nearly 11,000 meters beneath the surface in the Western Pacific?",
      "options": [
        "Java Trench",
        "Puerto Rico Trench",
        "Mariana Trench (Challenger Deep)",
        "Sunda Trench"
      ],
      "ans": 2,
      "exp": "Challenger Deep in the Mariana Trench in the western Pacific Ocean reaches approximately 10,994 meters (36,070 feet) below sea level."
    },
    {
      "id": "champ-6",
      "category": "Pakistan Affairs",
      "q": "The historic 'Cripps Mission' visited British India in which year to negotiate Indian cooperation during World War II?",
      "options": [
        "1940",
        "1942",
        "1944",
        "1946"
      ],
      "ans": 1,
      "exp": "Sir Stafford Cripps arrived in Delhi in March 1942. The Muslim League rejected the proposal because it did not explicitly grant Pakistan, and the Congress launched the 'Quit India' movement."
    },
    {
      "id": "champ-7",
      "category": "Everyday Science",
      "q": "What type of mirror is commonly used as a passenger-side rearview mirror in automobiles to provide a wider field of view?",
      "options": [
        "Concave Mirror",
        "Convex Mirror",
        "Plane Mirror",
        "Parabolic Mirror"
      ],
      "ans": 1,
      "exp": "Convex mirrors always form virtual, erect, and diminished images, providing drivers with a much wider panoramic field of view."
    },
    {
      "id": "champ-8",
      "category": "Current Affairs",
      "q": "Which European country officially abandoned over 200 years of military neutrality to become the 32nd member state of NATO in March 2024?",
      "options": [
        "Finland",
        "Sweden",
        "Switzerland",
        "Austria"
      ],
      "ans": 1,
      "exp": "Sweden officially joined NATO on March 7, 2024, becoming its 32nd member, following Finland's accession in April 2023."
    },
    {
      "id": "champ-9",
      "category": "Economics",
      "q": "The 'Lorenz Curve' in economic analysis is a graphical representation of:",
      "options": [
        "Inflation vs. Unemployment",
        "Income or wealth inequality within a population",
        "Tax rates vs. government revenue",
        "Exchange rate depreciation vs. trade balance"
      ],
      "ans": 1,
      "exp": "The Lorenz curve plots cumulative share of population against cumulative share of income. The Gini coefficient is derived directly from the area between the Lorenz curve and the line of perfect equality."
    },
    {
      "id": "champ-10",
      "category": "Pakistan Affairs",
      "q": "Which article of the 1973 Constitution defines High Treason as abrogation, subversion, or suspension of the Constitution?",
      "options": [
        "Article 2A",
        "Article 6",
        "Article 58(2)(b)",
        "Article 63A"
      ],
      "ans": 1,
      "exp": "Article 6 states: 'Any person who abrogates or subverts or suspends or holds in abeyance, or attempts or conspires to abrogate or subvert or suspend or hold in abeyance, the Constitution by use of force or show of force or by any other unconstitutional means shall be guilty of high treason.'"
    },
    {
      "id": "champ-11",
      "category": "World GK",
      "q": "Which treaty, signed in 1992, formally established the European Union and paved the way for the creation of the single European currency (the Euro)?",
      "options": [
        "Treaty of Rome",
        "Maastricht Treaty",
        "Treaty of Lisbon",
        "Schengen Agreement"
      ],
      "ans": 1,
      "exp": "The Maastricht Treaty (Treaty on European Union) was signed in February 1992 and entered into force in November 1993, creating the EU and setting criteria for the Euro."
    },
    {
      "id": "champ-12",
      "category": "Pakistan Affairs",
      "q": "Who was the Chief Minister of Bengal who moved the historic Pakistan Resolution in Lahore on March 23, 1940?",
      "options": [
        "Huseyn Shaheed Suhrawardy",
        "A. K. Fazlul Huq",
        "Khawaja Nazimuddin",
        "Nurul Amin"
      ],
      "ans": 1,
      "exp": "Abul Kashem Fazlul Huq, popularly known as 'Sher-e-Bangla' (Tiger of Bengal), formally moved the resolution before a gathering of over 100,000 Muslim League delegates."
    },
    {
      "id": "champ-13",
      "category": "Everyday Science",
      "q": "Which atmospheric layer contains the Earth's vital ozone layer (O3), which absorbs and shields surface life from harmful ultraviolet (UV) radiation?",
      "options": [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Thermosphere"
      ],
      "ans": 1,
      "exp": "The ozone layer is concentrated in the lower portion of the Stratosphere, roughly 15 to 35 kilometers above Earth's surface."
    },
    {
      "id": "champ-14",
      "category": "International Relations",
      "q": "The 'Baruch Plan' presented to the United Nations in 1946 was an early post-WWII proposal aimed at:",
      "options": [
        "Rebuilding war-torn Western Europe through economic loans",
        "Placing all global atomic energy development and nuclear weapons under international UN control",
        "Dividing the Korean peninsula along the 38th parallel",
        "Forming the North Atlantic Treaty Organization"
      ],
      "ans": 1,
      "exp": "Proposed by Bernard Baruch on behalf of the US in June 1946, the Baruch Plan proposed international verification and control of all atomic energy. It was rejected by the Soviet Union."
    },
    {
      "id": "champ-15",
      "category": "English",
      "q": "Select the option that correctly completes the conditional sentence: 'Had I known about the road closure, I ____________ a different route.'",
      "options": [
        "would take",
        "would have taken",
        "will have taken",
        "took"
      ],
      "ans": 1,
      "exp": "This is a Third Conditional sentence expressing an unreal past condition ('Had I known' = 'If I had known'). The main clause requires 'would have + past participle' ('would have taken')."
    },
    {
      "id": "champ-16",
      "category": "Pakistan Affairs",
      "q": "Under the 1973 Constitution, the Council of Common Interests (CCI) is mandated to meet at least once in how many days under Article 153?",
      "options": [
        "30 days",
        "90 days",
        "180 days",
        "Once a year"
      ],
      "ans": 1,
      "exp": "Article 153(3) of the 1973 Constitution mandates that the Council of Common Interests shall meet at least once in ninety days."
    },
    {
      "id": "champ-17",
      "category": "Everyday Science",
      "q": "Which element has the highest electrical conductivity of all known metals at room temperature?",
      "options": [
        "Copper (Cu)",
        "Gold (Au)",
        "Silver (Ag)",
        "Aluminum (Al)"
      ],
      "ans": 2,
      "exp": "Silver (Ag) has the highest electrical conductivity and highest thermal conductivity of any metal, though copper is more widely used due to lower cost."
    },
    {
      "id": "champ-18",
      "category": "Current Affairs",
      "q": "What is the primary objective of the China-led 'mBridge' project in international finance?",
      "options": [
        "A submarine fiber-optic communications cable spanning the Indian Ocean",
        "A multi-central bank digital currency (mCBDC) platform designed for instant, local-currency cross-border wholesale payments bypassing SWIFT",
        "A high-speed rail corridor connecting Beijing to Singapore",
        "A satellite constellation providing GPS alternatives"
      ],
      "ans": 1,
      "exp": "Project mBridge is a multi-CBDC platform developed by the Bank for International Settlements (BIS) and the central banks of China, Thailand, Hong Kong, and the UAE to enable real-time bilateral cross-border settlements."
    },
    {
      "id": "champ-19",
      "category": "World GK",
      "q": "Which desert is recognized as the driest non-polar desert on Earth, located in South America along the Pacific coast of Chile and Peru?",
      "options": [
        "Kalahari Desert",
        "Gobi Desert",
        "Atacama Desert",
        "Mojave Desert"
      ],
      "ans": 2,
      "exp": "The Atacama Desert in northern Chile is the driest non-polar desert on Earth, with some weather stations having never recorded rainfall."
    },
    {
      "id": "champ-20",
      "category": "Pakistan Affairs",
      "q": "In which year did Pakistan carry out its historic nuclear tests (Chagai-I and Chagai-II) in response to Indian nuclear tests?",
      "options": [
        "1974",
        "1988",
        "1998",
        "2001"
      ],
      "ans": 2,
      "exp": "Pakistan conducted five underground nuclear tests in the Ras Koh Hills on May 28, 1998 (Chagai-I) and a sixth test on May 30, 1998 (Chagai-II), celebrated nationally as Youm-e-Takbeer."
    },
    {
      "id": "champ-21",
      "category": "Economics",
      "q": "The economic term 'Stagflation' refers to a toxic macroeconomic condition characterized simultaneously by:",
      "options": [
        "Low inflation and high economic growth",
        "High inflation, stagnant economic growth, and high unemployment",
        "Hyperinflation combined with rapid industrial export growth",
        "Deflation combined with zero public debt"
      ],
      "ans": 1,
      "exp": "Stagflation (stagnation + inflation) occurred prominently during the 1970s OPEC oil shocks when rising costs triggered supply shocks, driving prices up while economic output contracted."
    },
    {
      "id": "champ-22",
      "category": "Everyday Science",
      "q": "Which human gland is often referred to as the 'Master Gland' of the endocrine system because its hormones regulate the secretions of other endocrine glands?",
      "options": [
        "Thyroid Gland",
        "Adrenal Gland",
        "Pituitary Gland",
        "Pancreas"
      ],
      "ans": 2,
      "exp": "The pituitary gland, located at the base of the brain attached to the hypothalamus, secretes trophic hormones (ACTH, TSH, LH, FSH) controlling other glands."
    },
    {
      "id": "champ-23",
      "category": "English",
      "q": "Choose the word that best fits the blank: 'Her ________ remarks during the diplomatic summit unintentionally inflamed cross-border tensions.'",
      "options": [
        "judicious",
        "tactless",
        "diplomatic",
        "sagacious"
      ],
      "ans": 1,
      "exp": "'Tactless' means lacking sensitivity or discretion in dealing with others, fitting the context of remarks that inflamed tensions."
    },
    {
      "id": "champ-24",
      "category": "Pakistan Affairs",
      "q": "Who was appointed as the chairman of the Punjab and Bengal Boundary Commissions in 1947?",
      "options": [
        "Lord Pethick-Lawrence",
        "Sir Cyril Radcliffe",
        "Sir Stafford Cripps",
        "A.V. Alexander"
      ],
      "ans": 1,
      "exp": "British barrister Sir Cyril Radcliffe was appointed on June 30, 1947, as the joint chairman of both the Punjab and Bengal Boundary Commissions, drawing the Radcliffe Line."
    },
    {
      "id": "champ-25",
      "category": "World GK",
      "q": "The headquarters of the International Atomic Energy Agency (IAEA) and the Organization of the Petroleum Exporting Countries (OPEC) are both located in which European capital?",
      "options": [
        "Geneva, Switzerland",
        "Vienna, Austria",
        "Brussels, Belgium",
        "The Hague, Netherlands"
      ],
      "ans": 1,
      "exp": "Vienna, the capital city of Austria, is the international headquarters for both the IAEA (at the Vienna International Centre) and OPEC."
    }
  ],
  "currentAffairsWeekly": [
    {
      "id": "ca-1",
      "headline": "Pakistan hosts SCO Heads of Government Summit",
      "q": "In October 2024, Pakistan hosted the 23rd Council of Heads of Government (CHG) summit of which premier Eurasian regional organization in Islamabad?",
      "options": [
        "ECO",
        "SCO",
        "D-8",
        "SAARC"
      ],
      "correctAnswer": 1,
      "exp": "Pakistan successfully hosted the 23rd SCO Council of Heads of Government (CHG) summit in Islamabad on October 15-16, 2024, welcoming premiers and delegates from across China, Russia, Central Asia, and India."
    },
    {
      "id": "ca-2",
      "headline": "26th Constitutional Amendment Enacted",
      "q": "The 26th Constitutional Amendment in Pakistan altered the mechanism for appointing the Chief Justice of Pakistan (CJP) through a parliamentary committee selecting from among:",
      "options": [
        "Only the senior-most judge automatically",
        "The three most senior judges of the Supreme Court",
        "Any serving High Court Chief Justice",
        "A panel submitted exclusively by the Pakistan Bar Council"
      ],
      "correctAnswer": 1,
      "exp": "Under the 26th Constitutional Amendment, the Chief Justice of Pakistan is appointed on the recommendation of a 12-member Special Parliamentary Committee from among the three most senior judges of the Supreme Court."
    },
    {
      "id": "ca-3",
      "headline": "BRICS 2024 Kazan Summit",
      "q": "The 16th annual BRICS Summit, the first meeting held under its newly expanded 10-member format, was convened in October 2024 in which Russian city?",
      "options": [
        "Moscow",
        "Saint Petersburg",
        "Kazan",
        "Sochi"
      ],
      "correctAnswer": 2,
      "exp": "The 16th BRICS Summit was held in Kazan, Russia, from October 22 to 24, 2024, focusing on alternative cross-border payment mechanisms and multipolar trade diplomacy."
    },
    {
      "id": "ca-4",
      "headline": "Monetary Policy & Inflation Dynamics",
      "q": "Following a continuous deceleration in CPI inflation, the State Bank of Pakistan's Monetary Policy Committee (MPC) reduced the benchmark policy rate in late 2024 to:",
      "options": [
        "22%",
        "15%",
        "9.5%",
        "11%"
      ],
      "correctAnswer": 1,
      "exp": "After peaking at 22% in mid-2023, the State Bank of Pakistan progressively cut its policy rate in successive MPC meetings through late 2024 down to 15% (and subsequently lower in early 2025) as headline inflation plunged to single digits."
    },
    {
      "id": "ca-5",
      "headline": "UN Climate Summit COP29",
      "q": "Which Caspian Sea nation hosted the United Nations Climate Change Conference (COP29) in November 2024?",
      "options": [
        "Kazakhstan",
        "Azerbaijan (Baku)",
        "Turkmenistan",
        "Uzbekistan"
      ],
      "correctAnswer": 1,
      "exp": "Baku, the capital city of Azerbaijan, hosted COP29 in November 2024, with negotiations primarily focused on the New Collective Quantified Goal (NCQG) on climate finance for vulnerable developing nations."
    },
    {
      "id": "ca-6",
      "headline": "US Presidential Election 2024 Outcome",
      "q": "Following the November 2024 US Presidential election, which candidate secured over 312 Electoral College votes to win the presidency?",
      "options": [
        "Donald J. Trump",
        "Kamala Harris",
        "Joe Biden",
        "Robert F. Kennedy Jr."
      ],
      "correctAnswer": 0,
      "exp": "Donald Trump won the November 2024 presidential election, securing all seven battleground swing states and over 312 Electoral College votes."
    },
    {
      "id": "ca-7",
      "headline": "Pakistan-China Strategic Dialogue",
      "q": "In late 2024, Pakistan and China agreed to upgrade CPEC under five new corridors. Which of the following is NOT one of these five new corridors?",
      "options": [
        "Growth Corridor",
        "Innovation Corridor",
        "Green Corridor",
        "Nuclear Proliferation Corridor"
      ],
      "correctAnswer": 3,
      "exp": "The five new upgraded CPEC 2.0 corridors agreed between Pakistan and China are: (1) Growth, (2) Livelihood, (3) Innovation, (4) Green Corridor, and (5) Openness Corridor."
    },
    {
      "id": "ca-8",
      "headline": "Global Artificial Intelligence Summit",
      "q": "Which landmark European Union legislative framework on Artificial Intelligence officially came into force in August 2024, setting the world's first comprehensive risk-based AI rules?",
      "options": [
        "EU AI Act",
        "Digital Markets Act (DMA)",
        "GDPR Amendment 2024",
        "CHIPS Act Europe"
      ],
      "correctAnswer": 0,
      "exp": "The European Union's Artificial Intelligence Act (EU AI Act) officially entered into force on August 1, 2024, categorizing AI systems into unacceptable risk, high risk, and general-purpose AI obligations."
    },
    {
      "id": "ca-9",
      "headline": "Reko Diq Mining Investment Milestone",
      "q": "The Reko Diq copper-gold project in Balochistan, one of the world's largest undeveloped copper-gold deposits, is being developed through a 50-50 partnership between Pakistan and:",
      "options": [
        "Barrick Gold Corporation",
        "Rio Tinto",
        "BHP Billiton",
        "Glencore"
      ],
      "correctAnswer": 0,
      "exp": "Barrick Gold Corporation holds a 50% stake and project operatorship, with 25% owned by federal Pakistani state-owned enterprises (OGDCL, PPL, GHPL) and 25% by the Government of Balochistan."
    },
    {
      "id": "ca-10",
      "headline": "Middle East Geopolitical Red Sea Crisis",
      "q": "The commercial shipping crisis that forced international container vessels to divert around the Cape of Good Hope began primarily in which strategic maritime chokepoint?",
      "options": [
        "Bab el-Mandeb Strait / Red Sea",
        "Strait of Malacca",
        "Strait of Gibraltar",
        "Bosphorus Strait"
      ],
      "correctAnswer": 0,
      "exp": "Attacks by the Houthi movement targeting commercial vessels navigating through the Bab el-Mandeb strait in the southern Red Sea forced major shipping liners (Maersk, MSC) to reroute thousands of miles around Africa."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.DAILY_CHALLENGES_DATA = DAILY_CHALLENGES_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DAILY_CHALLENGES_DATA;
}
