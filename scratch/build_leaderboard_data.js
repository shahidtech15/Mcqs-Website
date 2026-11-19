const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/js/data_leaderboard.js');

const jsContent = `/**
 * Leaderboard & Daily Challenge Data Engine
 * Manages daily competitive challenges, All-Pakistan rankings, streaks, and user score integration.
 */
window.LEADERBOARD_ENGINE = (function() {
    'use strict';

    const STORAGE_KEY_USER = 'mcqs_leaderboard_user';
    const STORAGE_KEY_ATTEMPTS = 'mcqs_leaderboard_attempts';

    // 1. Comprehensive Question Bank for Daily Challenges (rotating sets)
    const DAILY_CHALLENGE_SETS = [
        {
            challengeId: 'daily-set-1',
            title: 'All-Pakistan Civil Services Sprint - Set A',
            description: '15 High-Yield Questions across English, Current Affairs, Pak Affairs, Everyday Science, Math & Statutory Laws.',
            timeLimitSeconds: 600, // 10 minutes
            negativeMarking: 0.25,
            questions: [
                {
                    id: 'dc1_q1',
                    subject: 'English Vocabulary & Usage',
                    questionText: 'Select the word most similar in meaning (Synonym) to "ABROGATE":',
                    options: {
                        A: 'To formally repeal, annul or abolish a law',
                        B: 'To establish by legal decree',
                        C: 'To extend an ongoing official mandate',
                        D: 'To summarize a complex legal statute'
                    },
                    correctAnswer: 'A',
                    explanation: '"Abrogate" means to repeal, annul, or officially abolish a law, right, or formal agreement (e.g., abrogating a constitutional clause).'
                },
                {
                    id: 'dc1_q2',
                    subject: 'English Prepositions',
                    questionText: 'Choose the correct preposition: "The civil servant refused to connive _____ such flagrant irregularities in the tender process."',
                    options: {
                        A: 'at',
                        B: 'with',
                        C: 'for',
                        D: 'against'
                    },
                    correctAnswer: 'A',
                    explanation: 'The idiom is "connive at" something wrong or illegal, meaning to secretly overlook or permit an unlawful action.'
                },
                {
                    id: 'dc1_q3',
                    subject: 'Pakistan Affairs',
                    questionText: 'Under the Constitution of Pakistan 1973, which Constitutional Amendment formally established the National Finance Commission (NFC) Award resource sharing floor protecting provincial shares from being reduced?',
                    options: {
                        A: '14th Amendment (1997)',
                        B: '17th Amendment (2003)',
                        C: '18th Amendment (2010)',
                        D: '21st Amendment (2015)'
                    },
                    correctAnswer: 'C',
                    explanation: 'The 18th Constitutional Amendment (2010) amended Article 160(3A), ensuring that the share of provinces in each subsequent NFC Award shall not be less than the share given in the previous Award.'
                },
                {
                    id: 'dc1_q4',
                    subject: 'Pakistan Affairs & History',
                    questionText: 'The historic Indus Waters Treaty was brokered by the World Bank and signed in Karachi in September 1960. Which three rivers were allocated exclusively to Pakistan for unrestricted use?',
                    options: {
                        A: 'Indus, Jhelum, and Chenab',
                        B: 'Ravi, Beas, and Sutlej',
                        C: 'Indus, Chenab, and Ravi',
                        D: 'Jhelum, Sutlej, and Chenab'
                    },
                    correctAnswer: 'A',
                    explanation: 'Under the Indus Waters Treaty 1960, the Western Rivers (Indus, Jhelum, and Chenab) were allocated to Pakistan, while the Eastern Rivers (Ravi, Beas, Sutlej) were allocated to India.'
                },
                {
                    id: 'dc1_q5',
                    subject: 'Current Affairs & Geopolitics',
                    questionText: 'Pakistan successfully hosted the Heads of Government (CHG) Summit of which prominent multilateral organization in Islamabad in October 2024?',
                    options: {
                        A: 'Shanghai Cooperation Organization (SCO)',
                        B: 'South Asian Association for Regional Cooperation (SAARC)',
                        C: 'Organization of Islamic Cooperation (OIC)',
                        D: 'Economic Cooperation Organization (ECO)'
                    },
                    correctAnswer: 'A',
                    explanation: 'Pakistan hosted the 23rd Council of Heads of Government of the Shanghai Cooperation Organization (SCO) on October 15-16, 2024, in Islamabad.'
                },
                {
                    id: 'dc1_q6',
                    subject: 'Current Affairs & Economy',
                    questionText: 'In September 2024, the International Monetary Fund (IMF) Executive Board approved a new Extended Fund Facility (EFF) arrangement for Pakistan worth approximately:',
                    options: {
                        A: '\\$3.0 Billion',
                        B: '\\$7.0 Billion',
                        C: '\\$10.5 Billion',
                        D: '\\$5.0 Billion'
                    },
                    correctAnswer: 'B',
                    explanation: 'The IMF Executive Board approved a 37-month \\$7 Billion Extended Fund Facility (EFF) for Pakistan in late September 2024 to support economic stabilization and fiscal reforms.'
                },
                {
                    id: 'dc1_q7',
                    subject: 'Everyday Science',
                    questionText: 'Total Internal Reflection (TIR), which enables data transmission in fiber optic communications, occurs when light travels from a:',
                    options: {
                        A: 'Rarer medium to a denser medium at any angle',
                        B: 'Denser medium to a rarer medium at an angle greater than the critical angle',
                        C: 'Vacuum into a glass medium at 45 degrees',
                        D: 'Denser medium to a rarer medium at an angle less than the critical angle'
                    },
                    correctAnswer: 'B',
                    explanation: 'TIR occurs exclusively when light travels from an optically denser medium to an optically rarer medium and the angle of incidence exceeds the critical angle of the boundary.'
                },
                {
                    id: 'dc1_q8',
                    subject: 'Everyday Science',
                    questionText: 'Which vitamin is synthesized by the human body upon direct exposure to solar ultraviolet-B (UVB) radiation and is essential for calcium absorption?',
                    options: {
                        A: 'Vitamin A (Retinol)',
                        B: 'Vitamin C (Ascorbic Acid)',
                        C: 'Vitamin D (Cholecalciferol)',
                        D: 'Vitamin K (Phylloquinone)'
                    },
                    correctAnswer: 'C',
                    explanation: '7-Dehydrocholesterol in the skin is converted into Vitamin D3 (Cholecalciferol) upon UVB radiation exposure, which is necessary for intestinal absorption of calcium.'
                },
                {
                    id: 'dc1_q9',
                    subject: 'General Ability / Mathematics',
                    questionText: 'If 8 men can complete a civil engineering project in 15 days working 6 hours a day, how many days will 10 men take to complete the same project working 8 hours a day?',
                    options: {
                        A: '8 days',
                        B: '9 days',
                        C: '10 days',
                        D: '12 days'
                    },
                    correctAnswer: 'B',
                    explanation: 'Using M1 * D1 * H1 = M2 * D2 * H2: 8 * 15 * 6 = 10 * D2 * 8 => 720 = 80 * D2 => D2 = 720 / 80 = 9 days.'
                },
                {
                    id: 'dc1_q10',
                    subject: 'General Ability / Logical Reasoning',
                    questionText: 'Find the next number in the sequence: 4, 9, 25, 49, 121, 169, _____?',
                    options: {
                        A: '225',
                        B: '256',
                        C: '289',
                        D: '361'
                    },
                    correctAnswer: 'C',
                    explanation: 'The numbers are squares of consecutive prime numbers: 2^2=4, 3^2=9, 5^2=25, 7^2=49, 11^2=121, 13^2=169. The next prime number is 17, and 17^2 = 289.'
                },
                {
                    id: 'dc1_q11',
                    subject: 'FIA Act 1974 & Statutory Laws',
                    questionText: 'Under Section 5(1) of the Federal Investigation Agency Act 1974, members of the Agency possess what statutory powers throughout Pakistan in respect of specified schedule offences?',
                    options: {
                        A: 'Powers of a High Court Registrar',
                        B: 'Powers, privileges and liabilities of a Police Officer under the Police Act 1861 and CrPC 1898',
                        C: 'Powers restricted exclusively to civil contract arbitrations',
                        D: 'Powers limited only to federal airport immigration points'
                    },
                    correctAnswer: 'B',
                    explanation: 'Under Section 5(1) of FIA Act 1974, Agency members possess all powers, privileges, liabilities, and search/seizure authority of police officers under the Code of Criminal Procedure 1898.'
                },
                {
                    id: 'dc1_q12',
                    subject: 'Statutory Laws / Civil Servants Act',
                    questionText: 'Under Section 10 of the Civil Servants Act 1973, what is the statutory rule regarding the liability of a civil servant to serve across Pakistan?',
                    options: {
                        A: 'A civil servant can only be posted within their native district',
                        B: 'Every civil servant is liable to serve anywhere within or outside Pakistan in any post under the Federal or Provincial Government',
                        C: 'Transfer outside the capital requires prior Supreme Court permission',
                        D: 'Postings can never be made to autonomous corporate bodies'
                    },
                    correctAnswer: 'B',
                    explanation: 'Section 10 of the Civil Servants Act 1973 states that every civil servant shall be liable to serve anywhere within or outside Pakistan in any equivalent or higher post.'
                },
                {
                    id: 'dc1_q13',
                    subject: 'Islamic Studies',
                    questionText: 'The historic Treaty of Hudaibiyyah (Sulh al-Hudaybiya) was concluded in 6 AH. Who drafted the formal treaty on behalf of the Muslims under the guidance of the Holy Prophet (PBUH)?',
                    options: {
                        A: 'Hazrat Abu Bakr Siddique (R.A)',
                        B: 'Hazrat Umar Farooq (R.A)',
                        C: 'Hazrat Ali ibn Abi Talib (R.A)',
                        D: 'Hazrat Zayd ibn Thabit (R.A)'
                    },
                    correctAnswer: 'C',
                    explanation: 'Hazrat Ali ibn Abi Talib (R.A) served as the official scribe who penned down the articles of the Treaty of Hudaibiyyah between the Muslims and the Quraysh delegation led by Suhayl ibn Amr.'
                },
                {
                    id: 'dc1_q14',
                    subject: 'International Relations & Organizations',
                    questionText: 'Which strategic maritime choke point connects the Persian Gulf with the Gulf of Oman and the Arabian Sea, through which roughly one-fifth of global petroleum flows?',
                    options: {
                        A: 'Strait of Malacca',
                        B: 'Strait of Hormuz',
                        C: 'Bab-el-Mandeb Strait',
                        D: 'Bosphorus Strait'
                    },
                    correctAnswer: 'B',
                    explanation: 'The Strait of Hormuz connects the Persian Gulf to the Gulf of Oman and Arabian Sea, serving as the world’s most critical maritime petroleum transit bottleneck.'
                },
                {
                    id: 'dc1_q15',
                    subject: 'Everyday Science / Ecology',
                    questionText: 'The ozone layer, which shields Earth from harmful solar ultraviolet-B radiation, is predominantly concentrated in which atmospheric layer?',
                    options: {
                        A: 'Troposphere (0-12 km)',
                        B: 'Stratosphere (15-35 km)',
                        C: 'Mesosphere (50-85 km)',
                        D: 'Thermosphere (85-600 km)'
                    },
                    correctAnswer: 'B',
                    explanation: 'The ozone layer (stratospheric ozone) is concentrated in the lower stratosphere between 15 and 35 kilometers above Earth’s surface.'
                }
            ]
        },
        {
            challengeId: 'daily-set-2',
            title: 'All-Pakistan Civil Services Sprint - Set B',
            description: '15 High-Yield Questions testing precision in English Grammar, Constitution, Global Summits, and Quantitative Logic.',
            timeLimitSeconds: 600,
            negativeMarking: 0.25,
            questions: [
                {
                    id: 'dc2_q1',
                    subject: 'English Vocabulary',
                    questionText: 'Choose the exact Antonym of the word "EQUIVOCAL":',
                    options: {
                        A: 'Ambiguous',
                        B: 'Lucid and Unambiguous',
                        C: 'Dubious',
                        D: 'Vague'
                    },
                    correctAnswer: 'B',
                    explanation: '"Equivocal" means open to more than one interpretation or uncertain; its direct antonym is lucid, clear, or unambiguous.'
                },
                {
                    id: 'dc2_q2',
                    subject: 'English Grammar',
                    questionText: 'Identify the sentence with correct grammatical agreement:',
                    options: {
                        A: 'Neither the Director nor the inspectors was present at the inquiry.',
                        B: 'Neither the Director nor the inspectors were present at the inquiry.',
                        C: 'Neither the Director or the inspectors was present at the inquiry.',
                        D: 'Neither of the inspectors were found culpable.'
                    },
                    correctAnswer: 'B',
                    explanation: 'When subjects are joined by "neither... nor", the verb agrees with the closer subject ("the inspectors" is plural, requiring "were").'
                },
                {
                    id: 'dc2_q3',
                    subject: 'Pakistan Affairs',
                    questionText: 'Under Article 58(2)(b) of the 1973 Constitution, which was repealed by the 18th Amendment in 2010, the President possessed the controversial power to:',
                    options: {
                        A: 'Appoint judges without judicial commission approval',
                        B: 'Dissolve the National Assembly in his discretion',
                        C: 'Declare unilateral provincial emergency without cabinet advice',
                        D: 'Impose financial emergency on state banks'
                    },
                    correctAnswer: 'B',
                    explanation: 'Article 58(2)(b) granted the President discretionary power to dissolve the National Assembly when government could not be carried on in accordance with the Constitution.'
                },
                {
                    id: 'dc2_q4',
                    subject: 'Pakistan Affairs & Geography',
                    questionText: 'The Siachen Glacier, known as the world’s highest battlefield, is situated in which mountain range?',
                    options: {
                        A: 'Hindu Kush Range',
                        B: 'Himalayan Range',
                        C: 'Eastern Karakoram Range',
                        D: 'Sulaiman Range'
                    },
                    correctAnswer: 'C',
                    explanation: 'The Siachen Glacier is located in the eastern Karakoram range in the Himalayas, just northeast of the Point NJ9842 where the Line of Control ends.'
                },
                {
                    id: 'dc2_q5',
                    subject: 'Current Affairs',
                    questionText: 'The 29th UN Climate Change Conference (COP29) in November 2024 was held in which host capital city?',
                    options: {
                        A: 'Dubai, UAE',
                        B: 'Baku, Azerbaijan',
                        C: 'Sharm el-Sheikh, Egypt',
                        D: 'Geneva, Switzerland'
                    },
                    correctAnswer: 'B',
                    explanation: 'The COP29 UN Climate Conference was hosted in Baku, Azerbaijan, focusing primarily on the New Collective Quantified Goal (NCQG) for climate finance.'
                },
                {
                    id: 'dc2_q6',
                    subject: 'Everyday Science',
                    questionText: 'Which primary endocrine gland located at the base of the brain is termed the "master gland" because its trophic hormones regulate the activity of other glands?',
                    options: {
                        A: 'Thyroid Gland',
                        B: 'Adrenal Cortex',
                        C: 'Pituitary Gland (Hypophysis)',
                        D: 'Pancreatic Islets'
                    },
                    correctAnswer: 'C',
                    explanation: 'The pituitary gland produces hormones (TSH, ACTH, FSH, LH, GH) that directly stimulate other endocrine glands throughout the body.'
                },
                {
                    id: 'dc2_q7',
                    subject: 'General Ability / Mathematics',
                    questionText: 'A car covers the first half of a 120 km journey at 40 km/h and the second half at 60 km/h. What is the average speed for the entire journey?',
                    options: {
                        A: '50 km/h',
                        B: '48 km/h',
                        C: '45 km/h',
                        D: '52 km/h'
                    },
                    correctAnswer: 'B',
                    explanation: 'Harmonic mean of equal distances: Average speed = (2 * v1 * v2) / (v1 + v2) = (2 * 40 * 60) / (40 + 60) = 4800 / 100 = 48 km/h.'
                },
                {
                    id: 'dc2_q8',
                    subject: 'Statutory Laws / FIA Act',
                    questionText: 'Under Section 5A of the FIA Act 1974, which officers are designated to carry and use specified firearms during official duties?',
                    options: {
                        A: 'Only the Director General',
                        B: 'Officers not below the rank of Sub-Inspector or as notified by the Federal Government',
                        C: 'All clerical and administrative staff',
                        D: 'Private contracted security guards'
                    },
                    correctAnswer: 'B',
                    explanation: 'Section 5A provides that officers of the Agency not below the rank of Sub-Inspector may be authorized to use designated official arms.'
                },
                {
                    id: 'dc2_q9',
                    subject: 'Everyday Science / Physics',
                    questionText: 'The phenomenon of "dispersion" of light in a glass prism occurs primarily because:',
                    options: {
                        A: 'Different wavelengths of light travel with different speeds and refract at different angles in glass',
                        B: 'Light loses energy as it strikes glass',
                        C: 'White light is absorbed selectively',
                        D: 'Total internal reflection occurs at the surface'
                    },
                    correctAnswer: 'A',
                    explanation: 'Different colors have different refractive indices in a medium (violet bends most, red least), causing white light to spread into its constituent spectrum.'
                },
                {
                    id: 'dc2_q10',
                    subject: 'Islamic Studies',
                    questionText: 'The compilation of the Holy Quran into a single unified book (Mushaf) was initiated during the Caliphate of:',
                    options: {
                        A: 'Hazrat Abu Bakr Siddique (R.A) following the Battle of Yamama',
                        B: 'Hazrat Umar ibn al-Khattab (R.A)',
                        C: 'Hazrat Ali ibn Abi Talib (R.A)',
                        D: 'Hazrat Muawiya (R.A)'
                    },
                    correctAnswer: 'A',
                    explanation: 'After many Huffaz were martyred in the Battle of Yamama, Hazrat Umar (R.A) urged Hazrat Abu Bakr (R.A) to compile the Quran, who entrusted Hazrat Zayd ibn Thabit (R.A).'
                },
                {
                    id: 'dc2_q11',
                    subject: 'Current Affairs / Pakistan',
                    questionText: 'The Special Investment Facilitation Council (SIFC) was established by the Government of Pakistan to expedite foreign investment in which priority sectors?',
                    options: {
                        A: 'Textiles and Footwear only',
                        B: 'Agriculture, IT & Telecom, Mines & Minerals, and Energy',
                        C: 'Automobile and Real Estate',
                        D: 'Air Transport and Shipping'
                    },
                    correctAnswer: 'B',
                    explanation: 'SIFC is a single-window facilitation platform established in June 2023 focusing on Agriculture, IT, Mining/Minerals, Energy, and Defense Production.'
                },
                {
                    id: 'dc2_q12',
                    subject: 'General Ability',
                    questionText: 'If 20% of a number is equal to two-thirds of another number, what is the ratio of the first number to the second number?',
                    options: {
                        A: '3:10',
                        B: '10:3',
                        C: '5:2',
                        D: '2:5'
                    },
                    correctAnswer: 'B',
                    explanation: '0.20 * A = (2/3) * B => (1/5) * A = (2/3) * B => A / B = (2/3) / (1/5) = (2/3) * 5 = 10/3 => Ratio is 10:3.'
                },
                {
                    id: 'dc2_q13',
                    subject: 'World Organizations',
                    questionText: 'Which specialized agency of the United Nations is responsible for global public health standards and pandemic response, headquartered in Geneva?',
                    options: {
                        A: 'UNICEF',
                        B: 'World Health Organization (WHO)',
                        C: 'UNHCR',
                        D: 'UNDP'
                    },
                    correctAnswer: 'B',
                    explanation: 'The World Health Organization (WHO), established on April 7, 1948, is based in Geneva, Switzerland.'
                },
                {
                    id: 'dc2_q14',
                    subject: 'Pakistan Affairs',
                    questionText: 'The historic Lucknow Pact was signed in 1916 between the All-India Muslim League and the Indian National Congress. Who was hailed as the "Ambassador of Hindu-Muslim Unity" for bridging this accord?',
                    options: {
                        A: 'Sir Syed Ahmed Khan',
                        B: 'Quaid-e-Azam Muhammad Ali Jinnah',
                        C: 'Allama Muhammad Iqbal',
                        D: 'Maulana Muhammad Ali Johar'
                    },
                    correctAnswer: 'B',
                    explanation: 'Sarojini Naidu conferred the title "Ambassador of Hindu-Muslim Unity" upon Quaid-e-Azam Muhammad Ali Jinnah for orchestrating the Lucknow Pact 1916.'
                },
                {
                    id: 'dc2_q15',
                    subject: 'Everyday Science / Chemistry',
                    questionText: 'Dry Ice is the solid, frozen state of which chemical compound?',
                    options: {
                        A: 'Carbon Monoxide',
                        B: 'Carbon Dioxide (CO2)',
                        C: 'Sulfur Dioxide',
                        D: 'Methane'
                    },
                    correctAnswer: 'B',
                    explanation: 'Dry ice is solid carbon dioxide (CO2) which sublimates directly from solid to gas at -78.5 degrees Celsius without melting into a liquid.'
                }
            ]
        }
    ];

    // 2. Realistic Civil Services Benchmark Aspirants Leaderboard Data
    const SEEDED_LEADERBOARD = [
        {
            id: 'asp_1',
            name: 'Muhammad Hamza',
            city: 'Lahore, Punjab',
            targetExam: 'CSS 2025',
            avatar: 'MH',
            avatarBg: '#0284c7',
            score: 15,
            total: 15,
            accuracy: 100.0,
            timeSeconds: 278, // 4m 38s
            timeFormatted: '4m 38s',
            streak: 21,
            weeklyPoints: 104,
            allTimePoints: 940,
            badges: ['🥇 Daily Gold', '🔥 21-Day Streak', 'Top 0.1%']
        },
        {
            id: 'asp_2',
            name: 'Ayesha Siddiqui',
            city: 'Karachi, Sindh',
            targetExam: 'CSS Aspirant',
            avatar: 'AS',
            avatarBg: '#8b5cf6',
            score: 15,
            total: 15,
            accuracy: 100.0,
            timeSeconds: 295, // 4m 55s
            timeFormatted: '4m 55s',
            streak: 19,
            weeklyPoints: 102,
            allTimePoints: 915,
            badges: ['🥈 Daily Silver', '⚡ Speed Ace']
        },
        {
            id: 'asp_3',
            name: 'Bilal Ahmed Khan',
            city: 'Islamabad Capital',
            targetExam: 'FIA Assistant Director',
            avatar: 'BK',
            avatarBg: '#10b981',
            score: 14.75,
            total: 15,
            accuracy: 98.3,
            timeSeconds: 312, // 5m 12s
            timeFormatted: '5m 12s',
            streak: 18,
            weeklyPoints: 98,
            allTimePoints: 890,
            badges: ['🥉 Daily Bronze', '⚖️ FIA Specialist']
        },
        {
            id: 'asp_4',
            name: 'Fatima Noor',
            city: 'Rawalpindi, Punjab',
            targetExam: 'PMS Punjab',
            avatar: 'FN',
            avatarBg: '#ec4899',
            score: 14.75,
            total: 15,
            accuracy: 98.3,
            timeSeconds: 334,
            timeFormatted: '5m 34s',
            streak: 15,
            weeklyPoints: 96,
            allTimePoints: 865,
            badges: ['⭐ Provincial Merit']
        },
        {
            id: 'asp_5',
            name: 'Usman Tariq',
            city: 'Peshawar, KP',
            targetExam: 'PMS KP & CSS',
            avatar: 'UT',
            avatarBg: '#f59e0b',
            score: 14.0,
            total: 15,
            accuracy: 93.3,
            timeSeconds: 310,
            timeFormatted: '5m 10s',
            streak: 17,
            weeklyPoints: 95,
            allTimePoints: 840,
            badges: ['🔥 17-Day Streak']
        },
        {
            id: 'asp_6',
            name: 'Zainab Baloch',
            city: 'Quetta, Balochistan',
            targetExam: 'CSS 2025',
            avatar: 'ZB',
            avatarBg: '#06b6d4',
            score: 14.0,
            total: 15,
            accuracy: 93.3,
            timeSeconds: 326,
            timeFormatted: '5m 26s',
            streak: 14,
            weeklyPoints: 92,
            allTimePoints: 810,
            badges: ['🎯 Top 1% Balochistan']
        },
        {
            id: 'asp_7',
            name: 'Haris Rauf Cheema',
            city: 'Faisalabad, Punjab',
            targetExam: 'FIA Assistant Director',
            avatar: 'HC',
            avatarBg: '#14b8a6',
            score: 14.0,
            total: 15,
            accuracy: 93.3,
            timeSeconds: 345,
            timeFormatted: '5m 45s',
            streak: 12,
            weeklyPoints: 90,
            allTimePoints: 780,
            badges: ['📚 Statute Master']
        },
        {
            id: 'asp_8',
            name: 'Maryam Nawaz Abbasi',
            city: 'Abbottabad, KP',
            targetExam: 'CSS Aspirant',
            avatar: 'MA',
            avatarBg: '#6366f1',
            score: 13.75,
            total: 15,
            accuracy: 91.6,
            timeSeconds: 350,
            timeFormatted: '5m 50s',
            streak: 16,
            weeklyPoints: 89,
            allTimePoints: 795,
            badges: ['🌟 Consistent Aspirant']
        },
        {
            id: 'asp_9',
            name: 'Shahmeer Jamali',
            city: 'Hyderabad, Sindh',
            targetExam: 'CCE Sindh',
            avatar: 'SJ',
            avatarBg: '#e11d48',
            score: 13.75,
            total: 15,
            accuracy: 91.6,
            timeSeconds: 368,
            timeFormatted: '6m 08s',
            streak: 13,
            weeklyPoints: 87,
            allTimePoints: 760,
            badges: ['🌾 Rural Quota Merit']
        },
        {
            id: 'asp_10',
            name: 'Taimur Shah',
            city: 'Multan, Punjab',
            targetExam: 'Customs & NAB Inspector',
            avatar: 'TS',
            avatarBg: '#84cc16',
            score: 13.75,
            total: 15,
            accuracy: 91.6,
            timeSeconds: 382,
            timeFormatted: '6m 22s',
            streak: 11,
            weeklyPoints: 85,
            allTimePoints: 740,
            badges: ['🛡️ Enforcement Cadre']
        },
        {
            id: 'asp_11',
            name: 'Hira Batool',
            city: 'Gujranwala, Punjab',
            targetExam: 'CSS 2025',
            avatar: 'HB',
            avatarBg: '#a855f7',
            score: 13.0,
            total: 15,
            accuracy: 86.6,
            timeSeconds: 320,
            timeFormatted: '5m 20s',
            streak: 10,
            weeklyPoints: 84,
            allTimePoints: 720,
            badges: ['✍️ Essay Specialist']
        },
        {
            id: 'asp_12',
            name: 'Danish Ali Qureshi',
            city: 'Sukkur, Sindh',
            targetExam: 'FIA Assistant Director',
            avatar: 'DQ',
            avatarBg: '#3b82f6',
            score: 13.0,
            total: 15,
            accuracy: 86.6,
            timeSeconds: 335,
            timeFormatted: '5m 35s',
            streak: 14,
            weeklyPoints: 83,
            allTimePoints: 710,
            badges: ['🔎 Law Precision']
        },
        {
            id: 'asp_13',
            name: 'Mahnoor Farooq',
            city: 'Sargodha, Punjab',
            targetExam: 'PMS Punjab',
            avatar: 'MF',
            avatarBg: '#f97316',
            score: 13.0,
            total: 15,
            accuracy: 86.6,
            timeSeconds: 360,
            timeFormatted: '6m 00s',
            streak: 9,
            weeklyPoints: 80,
            allTimePoints: 680,
            badges: ['📊 Quant Scholar']
        },
        {
            id: 'asp_14',
            name: 'Syed Ali Raza',
            city: 'Gilgit, GB',
            targetExam: 'CSS Aspirant',
            avatar: 'AR',
            avatarBg: '#059669',
            score: 12.75,
            total: 15,
            accuracy: 85.0,
            timeSeconds: 340,
            timeFormatted: '5m 40s',
            streak: 15,
            weeklyPoints: 79,
            allTimePoints: 670,
            badges: ['🏔️ GB Merit Contender']
        },
        {
            id: 'asp_15',
            name: 'Waleed Akhtar',
            city: 'Sialkot, Punjab',
            targetExam: 'FIA Assistant Director',
            avatar: 'WA',
            avatarBg: '#64748b',
            score: 12.5,
            total: 15,
            accuracy: 83.3,
            timeSeconds: 375,
            timeFormatted: '6m 15s',
            streak: 8,
            weeklyPoints: 76,
            allTimePoints: 645,
            badges: ['⚡ Rapid Analyst']
        }
    ];

    // Default User Profile
    const DEFAULT_USER_PROFILE = {
        id: 'asp_user_me',
        name: 'Candidate (You)',
        city: 'Lahore, Punjab',
        targetExam: 'CSS & FIA AD',
        avatar: 'ME',
        avatarBg: '#10b981',
        isUser: true,
        streak: 14,
        rankShift: '+3',
        weeklyImprovementPct: '+8.4%',
        allTimePoints: 725,
        weeklyPoints: 88,
        todayAttempt: null // set when user completes test today
    };

    function getTodayKey() {
        const d = new Date();
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }

    function loadUserProfile() {
        try {
            const data = localStorage.getItem(STORAGE_KEY_USER);
            if (data) {
                return JSON.parse(data);
            }
        } catch (e) {
            console.warn('Could not read user profile:', e);
        }
        return JSON.parse(JSON.stringify(DEFAULT_USER_PROFILE));
    }

    function saveUserProfile(profile) {
        try {
            localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(profile));
        } catch (e) {
            console.warn('Could not save user profile:', e);
        }
    }

    function loadUserAttempts() {
        try {
            const data = localStorage.getItem(STORAGE_KEY_ATTEMPTS);
            if (data) {
                return JSON.parse(data);
            }
        } catch (e) {
            console.warn('Could not read user attempts:', e);
        }
        return {};
    }

    function saveUserAttempts(attempts) {
        try {
            localStorage.setItem(STORAGE_KEY_ATTEMPTS, JSON.stringify(attempts));
        } catch (e) {
            console.warn('Could not save user attempts:', e);
        }
    }

    // Determine which set is active for today
    function getTodayChallenge() {
        const todayStr = getTodayKey();
        const dateNum = parseInt(todayStr.replace(/-/g, ''), 10);
        const setIndex = dateNum % DAILY_CHALLENGE_SETS.length;
        const set = JSON.parse(JSON.stringify(DAILY_CHALLENGE_SETS[setIndex]));
        set.date = todayStr;
        set.challengeNumber = 140 + (dateNum % 50);
        return set;
    }

    // Submit Daily Challenge
    function submitDailyChallenge(userSelections, timeTakenSeconds) {
        const challenge = getTodayChallenge();
        const total = challenge.questions.length;
        let correctCount = 0;
        let wrongCount = 0;
        let unattemptedCount = 0;

        const graded = challenge.questions.map(q => {
            const sel = userSelections[q.id];
            const isAttempted = sel !== undefined && sel !== null && sel !== '';
            const isCorrect = isAttempted && sel === q.correctAnswer;

            if (isCorrect) correctCount++;
            else if (isAttempted) wrongCount++;
            else unattemptedCount++;

            return {
                id: q.id,
                subject: q.subject,
                questionText: q.questionText,
                options: q.options,
                userAnswer: sel || null,
                correctAnswer: q.correctAnswer,
                isCorrect: isCorrect,
                isAttempted: isAttempted,
                explanation: q.explanation
            };
        });

        const negMarking = challenge.negativeMarking || 0.25;
        const penalty = +(wrongCount * negMarking).toFixed(2);
        const rawScore = +(correctCount - penalty).toFixed(2);
        const finalScore = Math.max(0, rawScore);
        const accuracy = total > 0 ? +((correctCount / total) * 100).toFixed(1) : 0;
        const mins = Math.floor(timeTakenSeconds / 60);
        const secs = timeTakenSeconds % 60;
        const timeFormatted = mins + 'm ' + String(secs).padStart(2, '0') + 's';

        const todayKey = getTodayKey();
        const attemptResult = {
            date: todayKey,
            score: finalScore,
            rawScore: rawScore,
            total: total,
            correctCount: correctCount,
            wrongCount: wrongCount,
            unattemptedCount: unattemptedCount,
            penaltyDeducted: penalty,
            accuracy: accuracy,
            timeSeconds: timeTakenSeconds,
            timeFormatted: timeFormatted,
            gradedQuestions: graded
        };

        // 1. Save to attempts
        const attempts = loadUserAttempts();
        attempts[todayKey] = attemptResult;
        saveUserAttempts(attempts);

        // 2. Update user profile
        const profile = loadUserProfile();
        profile.todayAttempt = attemptResult;
        profile.streak = (profile.streak || 14) + 1;
        profile.weeklyPoints = (profile.weeklyPoints || 80) + Math.round(finalScore * 2);
        profile.allTimePoints = (profile.allTimePoints || 700) + Math.round(finalScore * 2);
        saveUserProfile(profile);

        // 3. Connect to Learning Dashboard if available
        if (window.LEARNING_DASHBOARD && typeof window.LEARNING_DASHBOARD.recordQuizResult === 'function') {
            try {
                window.LEARNING_DASHBOARD.recordQuizResult({
                    testName: 'Daily Challenge #' + challenge.challengeNumber + ' (' + todayKey + ')',
                    categoryName: 'Daily Challenge',
                    totalQuestions: total,
                    score: finalScore,
                    correctCount: correctCount,
                    wrongCount: wrongCount,
                    unattemptedCount: unattemptedCount,
                    timeSpent: timeFormatted
                });
                if (typeof window.LEARNING_DASHBOARD.addStudyTime === 'function') {
                    window.LEARNING_DASHBOARD.addStudyTime(Math.ceil(timeTakenSeconds / 60));
                }
            } catch (err) {
                console.warn('Could not sync daily challenge to learning dashboard:', err);
            }
        }

        return attemptResult;
    }

    // Get Leaderboard for a given period and exam filter
    function getLeaderboard(period, examFilter) {
        period = period || 'today';
        examFilter = examFilter || 'all';

        const profile = loadUserProfile();
        const attempts = loadUserAttempts();
        const todayKey = getTodayKey();
        const userTodayAttempt = attempts[todayKey] || profile.todayAttempt || {
            score: 13.5,
            accuracy: 90.0,
            timeSeconds: 338,
            timeFormatted: '5m 38s'
        };

        let list = JSON.parse(JSON.stringify(SEEDED_LEADERBOARD));

        // Create user entry
        const userEntry = {
            id: 'asp_user_me',
            name: profile.name || 'Candidate (You)',
            city: profile.city || 'Lahore, Punjab',
            targetExam: profile.targetExam || 'CSS & FIA AD',
            avatar: profile.avatar || 'ME',
            avatarBg: profile.avatarBg || '#10b981',
            isUser: true,
            score: userTodayAttempt ? userTodayAttempt.score : 13.5,
            total: 15,
            accuracy: userTodayAttempt ? userTodayAttempt.accuracy : 90.0,
            timeSeconds: userTodayAttempt ? userTodayAttempt.timeSeconds : 338,
            timeFormatted: userTodayAttempt ? userTodayAttempt.timeFormatted : '5m 38s',
            streak: profile.streak || 14,
            weeklyPoints: profile.weeklyPoints || 88,
            allTimePoints: profile.allTimePoints || 725,
            badges: ['⭐ Active Aspirant', '🔥 ' + (profile.streak || 14) + '-Day Streak']
        };

        // Add user entry to competitors
        list.push(userEntry);

        // Filter by target exam if not 'all'
        if (examFilter !== 'all') {
            list = list.filter(item => {
                if (item.isUser) return true;
                const exam = item.targetExam.toLowerCase();
                if (examFilter === 'css') return exam.includes('css');
                if (examFilter === 'fia') return exam.includes('fia') || exam.includes('customs');
                if (examFilter === 'pms') return exam.includes('pms') || exam.includes('cce');
                return true;
            });
        }

        // Sort based on period
        if (period === 'today') {
            // Sort by score descending, then by timeSeconds ascending
            list.sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;
                return a.timeSeconds - b.timeSeconds;
            });
        } else if (period === 'weekly') {
            list.sort((a, b) => b.weeklyPoints - a.weeklyPoints);
        } else if (period === 'alltime') {
            list.sort((a, b) => b.allTimePoints - a.allTimePoints);
        }

        // Assign ranks and medals
        list.forEach((item, idx) => {
            item.rank = idx + 1;
            if (item.rank === 1) item.medal = '🥇 1st Place (Gold)';
            else if (item.rank === 2) item.medal = '🥈 2nd Place (Silver)';
            else if (item.rank === 3) item.medal = '🥉 3rd Place (Bronze)';
            else if (item.rank <= 10) item.medal = 'Top 10 Merit';
            else item.medal = null;
        });

        return list;
    }

    // Get user standing
    function getUserStanding(period) {
        const list = getLeaderboard(period || 'today', 'all');
        const userIndex = list.findIndex(item => item.isUser);
        const rank = userIndex !== -1 ? userIndex + 1 : 12;
        const totalAspirants = 1420 + list.length;
        const percentile = +((1 - (rank / totalAspirants)) * 100).toFixed(1);
        const profile = loadUserProfile();

        return {
            rank: rank,
            totalCompetitors: totalAspirants,
            percentile: percentile,
            rankShift: profile.rankShift || '+3',
            weeklyImprovement: profile.weeklyImprovementPct || '+8.4%',
            streak: profile.streak || 14
        };
    }

    return {
        getTodayChallenge: getTodayChallenge,
        submitDailyChallenge: submitDailyChallenge,
        getUserProfile: loadUserProfile,
        updateUserProfile: function(newProfile) {
            const current = loadUserProfile();
            const updated = Object.assign(current, newProfile);
            saveUserProfile(updated);
            return updated;
        },
        getUserAttempts: loadUserAttempts,
        getLeaderboard: getLeaderboard,
        getUserStanding: getUserStanding
    };
})();
`;

fs.writeFileSync(targetPath, jsContent, 'utf8');
console.log('Successfully written frontend/js/data_leaderboard.js!');
