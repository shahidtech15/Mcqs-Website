/**
 * Official FPSC CSS Competitive Examination (1,200 Marks) & CSS MPT Preliminary Test Syllabi
 * Source: Federal Public Service Commission, F-5/1, Aga Khan Road, Islamabad
 * Official Reference: https://www.fpsc.gov.pk
 */
(function (global) {
  'use strict';

  const CSS_MPT_SYLLABUS = {
    title: 'CSS MCQ-Based Preliminary Test (MPT) — Official Syllabus',
    totalMarks: 200,
    duration: '200 Minutes',
    passingMarks: '33% (66 / 200 Marks)',
    negativeMarking: 'None',
    note: 'The syllabi for the subjects included in the Preliminary Test are as per existing CSS CE Syllabus of Compulsory subjects (vide Annexure-B). The subjects of Civics & Ethics (for Non-Muslims) and Urdu have the following official syllabi:',
    distribution: [
      { subject: 'Islamic Studies OR Civics & Ethics (Non-Muslims)', marks: 20, link: 'islamiat-mcqs.html' },
      { subject: 'Urdu (Grammar Usage & Translation)', marks: 20, link: 'quiz.html?categoryId=cat_css_mpt' },
      { subject: 'English (Vocabulary, Grammar Usage, Comprehension)', marks: 50, link: 'grammar-rules.html' },
      { subject: 'General Abilities (Basic Arithmetic, Algebra, Geometry, Logical & Analytical Reasoning, Mental Abilities)', marks: 60, link: 'math-mcqs.html' },
      { subject: 'General Knowledge (Everyday Science, Current Affairs, Pakistan Affairs)', marks: 50, link: 'quiz.html?categoryId=cat_css_mpt' }
    ],
    civicsAndEthics: {
      civics: 'Definition, Nature & Significance. State & its elements. Organs of State. Fundamental Human Rights. Rights & Obligations of Non-Muslims under the Constitution of Pakistan-1973. UN aim & Objectives, main Organs and Agencies.',
      ethics: [
        'Human Values: Role of family, society & educational institutions towards inculcating universal moral values.',
        'Integrity, impartiality & non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker-sections.',
        'Emotional intelligence — concepts and application in administration / governance.'
      ]
    },
    urdu: {
      heading: 'اُردو — صرف و نحو کا استعمال',
      items: [
        'اقسامِ کلمہ / اجزائے کلام ، ترکیبی فعل ، زمانے',
        'واحد جمع ، جملے کی ساخت ، الفاظ کے جوڑے ، مذکر و مؤنث ، مترادف اور متضاد الفاظ',
        'ترجمہ (Translation)'
      ]
    }
  };

  const CSS_COMPULSORY = [
    {
      code: '01', name: 'English Essay', marks: 100, group: 'Compulsory',
      overview: 'Candidates are required to write one or more essays in English from a wide choice of topics, reflecting comprehensive, research-based knowledge, articulation, expression, and technical essay structure.',
      sections: [
        'Comprehensive, research-based knowledge on selected national/international/philosophical topic',
        'Clear thesis statement, structured outline, coherent argumentation, articulation & technical treatment of English Essay style',
        'Note: No MCQ portion in English Essay paper (100% subjective, 3 hours).'
      ],
      readings: ['CSS Prep Central Solved Essays (CSS 2026, CSS 2021, IR, Security & Geoeconomics)'],
      prepLink: 'css-essays-2026.html'
    },
    {
      code: '02', name: 'English (Precis & Composition)', marks: 100, group: 'Compulsory',
      overview: 'Tests candidate\'s command of Precis Writing, Reading Comprehension, Grammar, Vocabulary, Sentence Correction, Grouping of Words, Pairs of Words, and Urdu-to-English Translation.',
      sections: [
        'I. Precis Writing (20 Marks): Précising a passage (15 marks) + suggesting an appropriate title (5 marks)',
        'II. Reading Comprehension (20 Marks): Substance-rich passage followed by 5 questions (4 marks each)',
        'III. Grammar and Vocabulary (20 Marks): Tenses, Articles, Prepositions, Conjunctions, Punctuation, Phrasal Verbs, Synonyms & Antonyms (MCQs)',
        'IV. Sentence Correction (10 Marks): Rewriting flawed sentences (including 2–3 punctuation corrections)',
        'V. Grouping of Words (10 Marks): Grouping 20 words into synonym/antonym pairs as directed',
        'VI. Pairs of Words (10 Marks): Explaining difference in meaning & using any 5 of 10 commonly confused pairs in sentences',
        'VII. Translation (10 Marks): Translating 10 short Urdu sentences into accurate English'
      ],
      readings: [
        'English Grammar in Use — Raymond Murphy (Cambridge University Press)',
        'Practical English Usage — M. Swan (Oxford University Press)',
        'The Little, Brown Handbook — H. Ramsey Fowler & Jane Aaron',
        'A University English Grammar — R. Quirk & S. Greenbaum',
        'Write Better, Speak Better — Reader\'s Digest Association',
        'Modern English in Action — Henry Christ'
      ],
      prepLink: 'grammar-rules.html'
    },
    {
      code: '03', name: 'General Science & Ability', marks: 100, group: 'Compulsory',
      overview: 'Divided into Part-I General Science (60 Marks) and Part-II General Ability (40 Marks). Includes 20 MCQs.',
      sections: [
        'Part-I (General Science — 60 Marks): I. Physical Sciences (Universe, Solar System, Eclipses, Weather, Natural Hazards & Disasters, Energy Resources, Atomic Structure, Modern Materials/Chemicals)',
        'II. Biological Sciences (Cell Structure & Organelles, Biomolecules, Plant & Animal Kingdom, Human Physiology, Common Diseases — Polio, Malaria, Hepatitis, Dengue, Biofuel)',
        'III. Environmental Science (Atmosphere, Hydrosphere, Biosphere, Lithosphere, Air/Water/Land Pollution, Montreal & Kyoto Protocols, Remote Sensing & GIS, Population Planning)',
        'IV. Food Science (Balanced Diet, Quality of Food, Bioavailability, Additives/Preservatives, Adulteration & Preservation)',
        'V. Information Technology (Computer Hardware/Software, Networking, Social Media, Information Systems, AI Fundamentals, Telecommunications — Mobile, Satellite, GPS, Fiber Optic)',
        'Part-II (General Ability — 40 Marks): VI. Quantitative Ability/Reasoning (Basic Arithmetic, Algebra, Geometry, Averages, Ratios, Rates, Percentages, Angles, Triangles, Sets, Equations, Random Sampling)',
        'VII. Logical Reasoning & Analytical Ability (Systematic deductive/inductive reasoning & analytical problem solving)',
        'VIII. Mental Abilities (Verbal, mechanical, numerical and social ability scales)'
      ],
      readings: [
        'Asimov\'s New Guide to Science — Isaac Asimov',
        'Physical Geography — Harm J. de Blij & Alan H. Strahler',
        'Environmental Science: A Global Concern — William P. Cunningham',
        'Logical Reasoning — Rob P. Nederpelt & Mental Ability — Dr. Lal & Jain'
      ],
      prepLink: 'science-notes.html'
    },
    {
      code: '04', name: 'Current Affairs', marks: 100, group: 'Compulsory',
      overview: 'Evaluates analytical grasp of Pakistan\'s domestic affairs, external relations, and contemporary global strategic/economic issues. Includes 20 MCQs.',
      sections: [
        'I. Pakistan\'s Domestic Affairs (20 Marks): Political, Economic, and Social developments',
        'II. Pakistan\'s External Affairs (40 Marks): Relations with Neighbors (India, China, Afghanistan, Russia), Muslim World (Iran, Saudi Arabia, Indonesia, Turkey), United States, and Regional/International Organizations (UN, SAARC, ECO, OIC, WTO, GCC)',
        'III. Global Issues (40 Marks): International Security, IPE, Human Rights, Environment & Climate Change, Population, Terrorism & Counter-Terrorism, Global Energy Politics, Nuclear Proliferation & South Asian Nuclear Politics, International Trade, Arabian Sea/Indian/Pacific Ocean competition, MDGs/SDGs, Globalization, Middle East Crisis, Kashmir Issue, Palestine Issue'
      ],
      readings: [
        'Pakistan\'s Foreign Policy 1947–2005 — Abdul Sattar',
        'Issues in Pakistan\'s Economy — S. Akbar Zaidi',
        'Pakistan: Beyond the Crisis State — Maleeha Lodhi',
        'Eating Grass: The Making of the Pakistani Bomb — Feroz Khan',
        'World Politics: Trends & Transformation — Kegley & Blanton'
      ],
      prepLink: 'quiz.html?categoryName=Current%20Affairs'
    },
    {
      code: '05', name: 'Pakistan Affairs', marks: 100, group: 'Compulsory',
      overview: 'Covers Ideology of Pakistan, Muslim reform movements, geography & resources, constitutional evolution, foreign policy, economy, hydro-politics, and contemporary security challenges. Includes 20 MCQs.',
      sections: [
        'I–II. Ideology of Pakistan (Shaikh Ahmad Sirhindi, Shah Waliullah, Sayyid Ahmad Shaheed, Aligarh, Deoband, Nadwah, Sindh Madrassah, Islamia College Peshawar; Iqbal & Jinnah) & Land/People/Resources/Agriculture/Industry/Education',
        'III–XI. Regional Apparatus, Nuclear Program Safety & Security, SAARC/ECO/SCO, Civil-Military Relations, Economic Challenges, Non-Traditional Security Threats, Palestine Issue & National Security Dynamics',
        'XII–XIX. Political Evolution since 1971, War on Terror, Post-9/11 Foreign Policy, Democratic System, Ethnic Issues & National Integration, Hydro-Politics (Domestic & Regional Water Issues), National Interest & Sovereignty',
        'XX–XXV. Energy Problems, Relations with Neighbors, Pakistan-India Relations since 1947, Kashmir Issue, Afghan War since 1979 & Post-2014 Impact, Proxy Wars',
        'XXVI–XXVIII. Latest Economic Survey & Federal Budgets, Recent Constitutional Amendments & Role of Higher Courts, Prevailing Social Problems (Poverty, Education, Health, Sanitation)'
      ],
      readings: [
        'Constitutional and Political History of Pakistan — Hamid Khan',
        'Judging the State: Courts and Constitutional Politics in Pakistan — Paula R. Newberg',
        'Modern South Asia — Ayesha Jalal & Sugata Bose',
        'Kashmir in Conflict — Victoria Schofield',
        'Making Sense of Pakistan — Farzana Shaikh'
      ],
      prepLink: 'quiz.html?categoryName=Pakistan%20Affairs'
    },
    {
      code: '06', name: 'Islamic Studies', marks: 100, group: 'Compulsory',
      overview: 'May be answered in English or Urdu. Covers Introduction to Islam, Sirah, Human Rights & Women, Islamic Civilization, Islam & the Modern World, Public Administration/Governance in Islam, and Islamic Code of Life.',
      sections: [
        'I. Introduction to Islam: Concept of Islam, Din vs. Religion, Islamic Beliefs & Worships (Spiritual, Moral & Social Impact)',
        'II. Study of Sirah of Prophet Muhammad (PBUH) as Role Model: Individual, Diplomat, Educator, Military Strategist, Peace Maker',
        'III. Human Rights & Status of Women in Islam: Dignity of Men and Women',
        'IV. Islamic Civilization & Culture: Tawhid, Self-purification, Dignity of Man, Equality, Social Justice, Tolerance, Rule of Law',
        'V. Islam and the World: Impact on the West & vice versa, Role in Modern World, Contemporary Challenges, Rise of Extremism',
        'VI. Public Administration & Governance in Islam: Quranic guidance, Shura, Pious Khilafat, Letters of Hazrat Umar (RA) & Hazrat Ali (RA), Civil Servant Responsibilities, System of Accountability (Hisbah)',
        'VII. Islamic Code of Life: Social, Political, Economic, Judicial & Administrative Systems; Procedure of Ijma and Ijtihad'
      ],
      readings: [
        'Introduction to Islam — Dr. Muhammad Hamidullah',
        'Islam at the Crossroads — Muhammad Asad',
        'Islamic Law and Constitution — Syed Abul A\'la Mawdudi',
        'Reconstruction of Religious Thought in Islam — Allama Muhammad Iqbal',
        'Administrative Development: An Islamic Perspective — Muhammad Al-Buraey'
      ],
      prepLink: 'islamiat-mcqs.html'
    },
    {
      code: '06B', name: 'Comparative Study of Major Religions (For Non-Muslims)', marks: 100, group: 'Compulsory (Alternative)',
      overview: 'Alternative paper in lieu of Compulsory Islamic Studies for Non-Muslim candidates (may be answered in English or Urdu).',
      sections: [
        'I. Introduction: Definitions of religion, study of religion as a discipline, global religious landscape',
        'II. Hinduism: Historical background, Scriptures (Vedas, Upanishads, Smirti, Epics), Doctrines (Dharma, Karma, Moksha), Ways to Liberation, Major Sects, Caste & Ashramas',
        'III. Buddhism: Life of Gautama Buddha, Tripitaka, Three Jewels, Four Noble Truths, Eightfold Path, Theravada & Mahayana',
        'IV. Judaism: History, Tanakh/Mishnah/Talmud, Ten Commandments & 13 Principles of Maimonides, Festivals, Worship & Sects',
        'V. Christianity: Gospels & Paul, Holy Bible, Basic Doctrines, Catholicism/Orthodoxy/Protestantism, Festivals, Sacraments & Modernity',
        'VI. Islam: Historical background, Quran & Hadith, Creed (Tawhid, Risalah, Akhirah), Five Pillars, Teachings, Sects & Contemporary Movements'
      ],
      readings: [
        'Approaches to the Study of Religion — Peter Connolly',
        'The Penguin Handbook of the World\'s Living Religions — John R. Hinnells',
        'Dunya Kay Baray Mazahib — Imadul Hasan Azad Faruqi'
      ],
      prepLink: 'quiz.html'
    }
  ];

  const CSS_OPTIONAL_GROUPS = [
    {
      groupId: 'Group-I',
      title: 'Group-I (Select ONE subject of 200 Marks only)',
      maxMarks: 200,
      maxCount: 1,
      subjects: [
        { code: '11', name: 'Accountancy & Auditing', marks: 200, summary: 'Paper-I (100): Financial Accounting (IFRS/IAS, IPSAS, Depreciation, Ratios) & Cost/Managerial Accounting (FOH, Job/Process Costing, Budgeting, Break-even, Variances). Paper-II (100): Auditing (40), Business Taxation — Income & Sales Tax (30), Business Studies & Finance (30).', prepLink: 'quiz.html?categoryId=cat_aao' },
        { code: '12', name: 'Economics', marks: 200, summary: 'Paper-I (100): Microeconomics, Macroeconomics, Money & Banking (IS-LM, Central Bank), Public Finance, International Trade & Economic Development. Paper-II (100): Economics of Pakistan — Planning, Agriculture, Industry, Trade/Aid, Privatization, Interest-Free Banking, Energy & Major Issues.', prepLink: 'world-economy-dashboard.html' },
        { code: '13', name: 'Computer Science', marks: 200, summary: 'Paper-I (100): Introduction to Computing, Programming Fundamentals, OOP, Algorithms & Data Structures, Software Engineering & Compiler Construction. Paper-II (100): Computer Architecture, Networks (OSI/TCP-IP), Operating Systems, Database Systems (SQL/Normalization), Digital Image Processing & Web Engineering.', prepLink: 'quiz.html?categoryName=Computer%20Science' },
        { code: '14', name: 'Political Science', marks: 200, summary: 'Paper-I (100): Western & Muslim Political Thought (Plato to Iqbal), State System, Political Concepts, Comparative Politics, Institutions, Ideologies & Local Self-Government. Paper-II (100): Political Systems (USA, UK, France, Germany, Turkey, Iran, Malaysia, India, China), EU/SAARC/ECO/IMF/WTO, Pakistan Movement, Constitutions (1956/1962/1973 & 18th Amendment) & Foreign Policy.', prepLink: 'constitution-explorer.html' },
        { code: '15', name: 'International Relations', marks: 200, summary: 'Paper-I (100): IR Theories (Realism, Liberalism, Constructivism, Feminism), Security, Balance of Power, Deterrence, IPE, Diplomacy, International Law & UN/IMF/WB/ICJ. Paper-II (100): Inter-War, Cold War, Post-Cold War, Regional Orgs (EU, ASEAN, SAARC, SCO, OIC), Major Powers, South Asia (India-Pak, Afghanistan), WMDs/Nuclear Non-Proliferation, Kashmir & Palestine.', prepLink: 'international-relations-essays.html' }
      ]
    },
    {
      groupId: 'Group-II',
      title: 'Group-II (Select subject(s) of up to 200 Marks only)',
      maxMarks: 200,
      maxCount: 2,
      subjects: [
        { code: '16', name: 'Physics', marks: 200, summary: 'Paper-I (100): Mechanics & Special Relativity, Fluid Mechanics, Waves/Oscillations/Optics, Heat & Thermodynamics (Maxwell-Boltzmann, Bose-Einstein, Fermi-Dirac). Paper-II (100): Electricity & Magnetism (Maxwell\'s Equations), Modern & Quantum Physics (Schrödinger), Solid State Physics & Nuclear Physics.' },
        { code: '17', name: 'Chemistry', marks: 200, summary: 'Paper-I (100): Atomic Structure & Quantum Chemistry, Electrochemistry, Thermodynamics, Chemical Kinetics, Surface Chemistry & Catalysis, Chemometrics, Separation Methods, Inorganic Chemistry, Acids/Bases & d/f-block Elements. Paper-II (100): Organic Chemistry, Hydrocarbons, Aromatics, Functional Groups, Stereochemistry, Spectroscopy (UV/IR/NMR/MS), Biomolecules, Metabolism & Chemical Industries.', prepLink: 'quiz.html?categoryId=cat_chem' },
        { code: '18', name: 'Applied Mathematics', marks: 100, summary: 'Vector Calculus (10%), Statics (10%), Dynamics (10%), Ordinary Differential Equations (20%), Fourier Series & Partial Differential Equations (20%), Numerical Methods — Newton-Raphson, Gauss-Seidel, Simpson\'s, Runge-Kutta (30%). Note: No MCQ section.', prepLink: 'math-mcqs.html' },
        { code: '19', name: 'Pure Mathematics', marks: 100, summary: 'Section-A Modern Algebra (40): Groups, Rings, Fields, Vector Spaces & Linear Transformations. Section-B Calculus & Analytic Geometry (40): Limits, Mean Value, Taylor\'s, Multiple Integrals, 3D Conics. Section-C Complex Variables (20): Cauchy\'s Theorem, Residue Theorem & Fourier Transforms. Note: No MCQ section.', prepLink: 'math-mcqs.html' },
        { code: '20', name: 'Statistics', marks: 100, summary: 'Part-I (50): Descriptive Statistics, Basic Probability & Bayes\' Rule, Probability Distributions (Binomial, Poisson, Normal), Regression & Correlation, Non-Parametric Tests. Part-II (50): Sampling Distributions & CLT, Estimation & Hypothesis Testing, ANOVA & Design of Experiments (CRD, RCBD), Population Analysis & Vital Statistics.' },
        { code: '21', name: 'Geology', marks: 100, summary: 'Part-I (50): Physical Geology, Stratigraphy & Paleontology, Mineralogy, Structural Geology & Plate Tectonics, Petrology & Petrography. Part-II (50): Geophysics, Sequence Stratigraphy, Petroleum Geology, Engineering & Environmental Geology, Mineral/Energy Resources (Thar Coal, Reko Diq) & Economic Geology of Pakistan.' }
      ]
    },
    {
      groupId: 'Group-III',
      title: 'Group-III (Select ONE subject of 100 Marks only)',
      maxMarks: 100,
      maxCount: 1,
      subjects: [
        { code: '22', name: 'Business Administration', marks: 100, summary: 'I. Management (Functions, Strategy, Leadership). II. HR Management (Job Analysis, Appraisal, Compensation). III. Financial Management (Time Value of Money, Ratios, CAPM/WACC, Capital Budgeting NPV/IRR). IV. Operations & Supply Chain Management (EOQ, Bullwhip Effect, Logistics). V. Marketing (Segmentation, Branding, PLC, IMC).' },
        { code: '23', name: 'Public Administration', marks: 100, summary: '12 Core Units: Concepts & NPM/NPS, Classical/Contemporary Theories, Public Policy & Implementation, Government Budgeting (Line-Item, Zero-Base, Performance), Public HRM, Administrative Law, Management Skills, Civil Service of Pakistan, Provincial & Local Government, Administrative Reforms, Accountability & Development Administration.' },
        { code: '24', name: 'Governance & Public Policies', marks: 100, summary: 'Good Governance & Theories, World Bank/UNDP Governance Indicators, Policy & Planning Institutions (ECNEC, ECC, Planning Commission), Accountability, Bureaucracy (Weber, Estacode), Policy Formulation/Evaluation, Multi-level Governance in Pakistan, Federalism & Devolution, Role of Citizens & Good Governance in Islam.' },
        { code: '25', name: 'Town Planning & Urban Management', marks: 100, summary: 'Definition & Goals, Historical Towns (Mohenjodaro, Harappa, Gandhara), Urban-Rural Hierarchy, Planning in Pakistan (5-Year & Master Plans), Managing Urbanization (Zoning, ITS), Equitable Housing, Public Policy & Urban Design, Sustainability & Urban Information Systems (GIS, SPSS).' }
      ]
    },
    {
      groupId: 'Group-IV',
      title: 'Group-IV (Select ONE subject of 100 Marks only)',
      maxMarks: 100,
      maxCount: 1,
      subjects: [
        { code: '26', name: 'History of Pakistan & India', marks: 100, summary: 'Muslim Rule (712–1857: Slave Dynasty, Mughals), British Rule (1857–1947), Constitutional Reforms, Muslim Struggle (Shah Waliullah, Sir Syed, Muslim League, 14 Points), Pakistan Movement (1930–1947), History of Pakistan (1947–date), Military in Politics, 1971 Separation, Democratic Eras & Foreign Policy.', prepLink: 'timeline.html' },
        { code: '27', name: 'Islamic History & Culture', marks: 100, summary: 'Part-I (50): Pre-Islamic Near East, Prophetic Age (570–632), Pious Caliphate (632–660), Islamic Political System, Institutional Development & Umayyads (660–749). Part-II (50): Abbasids of Baghdad (749–1258), Muslim Spain (711–1492), Crusades, Ottoman Empire (1299–1923), Sufism & Islam and Modernity.' },
        { code: '28', name: 'British History', marks: 100, summary: 'Part-I (50): Glorious Revolution (1688), Hanoverian Era, Unions (Scotland/Ireland), Napoleonic Wars, Industrial Revolution, Chartism, Victorian Era, Edwardian Era & WWI. Part-II (50): WWII & Churchill, Cold War, Commonwealth, NATO, Decolonization, EU & Thatcherism to Cameron (1979–2012).' },
        { code: '29', name: 'European History', marks: 100, summary: 'Part-I (50): French Revolution & Napoleon (1789–1815), Concert of Europe (1815–1830), Liberalism/Nationalism/Socialism, Eastern Question, Unification of Italy & Germany, Origins of WWI. Part-II (50): WWI & League of Nations, Fascism/Nazism/Stalinism, WWII, Post-War Europe (Marshall Plan, NATO), Cold War (1955–1991) & Post-1991 Europe (EU).' },
        { code: '30', name: 'History of USA', marks: 100, summary: '21 Units: Pre-1492 to British Colony (1606–1783), Independence, Expansion (13 to 50 States), US Constitution, Civil War, Industrialization, WWI & WWII, Cold War & UN, War on Terror (Pak-US), Progressive Era, Great Depression & New Deal, Civil Rights Movement, Presidential Elections, US Congress & Separation of Powers.' }
      ]
    },
    {
      groupId: 'Group-V',
      title: 'Group-V (Select ONE subject of 100 Marks only)',
      maxMarks: 100,
      maxCount: 1,
      subjects: [
        { code: '31', name: 'Gender Studies', marks: 100, summary: 'Introduction to Gender Studies, Social Construction of Gender, Feminist Theories (Liberal, Radical, Marxist, Postmodern), Feminist Movements (Waves & Pakistan), Gender & Development (WID, WAD, GAD), Status of Women in Pakistan (Health, Education, Employment, Law), Gender & Governance, GBV & Case Studies (Mukhtaran Mai, Malala, Sharmeen Obaid-Chinoy).' },
        { code: '32', name: 'Environmental Sciences', marks: 100, summary: 'History of Environmental Thought (Stockholm 1972, Rio 1992, MDGs), Sustainable Development, Interdisciplinary Science, Pollution (Air, Water, Soil, Salinity), Climate Change (CDM, REDD+), Environmental Governance in Pakistan (PEPA 1997, IEE/EIA), MEAs (CBD, CITES, Ramsar, UNFCCC, Montreal, UNCCD) & ISO 14000 / GIS.', prepLink: 'climate-change-explorer.html' },
        { code: '33', name: 'Agriculture & Forestry', marks: 100, summary: 'Part-I Agriculture (50): Integrated Agriculture, Challenges in Pakistan, Climate & Soil (Salinity/Waterlogging), GMO & Seed Tech, Horticulture & IPM, Mechanization & Land Reforms. Part-II Forestry (50): Forest & Rangeland Management, Silviculture, Wildlife & Eco-tourism, Agroforestry, Watershed Management & National Forest Laws.' },
        { code: '34', name: 'Botany', marks: 100, summary: 'Algae, Fungi & Bryophytes; Pteridophyta & Gymnosperms; Anatomy & Embryology; Taxonomy of Angiosperms; Plant Physiology (Water Relations, Photosynthesis, Respiration); Ecology (Salinity/Waterlogging in Pakistan); Cytology; Mendelian & Molecular Genetics; Evolution & Molecular Biology (DNA, GMOs).' },
        { code: '35', name: 'Zoology', marks: 100, summary: 'I. Animal Diversity — Invertebrates (Protozoa to Echinoderms). II. Animal Diversity — Chordata (Fishes, Amphibians, Reptiles, Birds, Mammals). III. Principles of Animal Life (Biomolecules, Cell Biology, Central Dogma, Genetics, Ecology & Darwinian Evolution). IV. Animal Form & Function (Digestion, Circulation, Excretion, Nervous/Endocrine Systems & Animal Behavior).' },
        { code: '36', name: 'English Literature', marks: 100, summary: 'Essays (10: Russell, Orwell, Emerson), Short Stories (10: Maugham, Chesterton, O\'Henry), Poetry (20: Wordsworth, Keats, Tennyson, Yeats, Eliot, Larkin, Stevens/Whitman), Drama (20: Shakespeare, Congreve, Shaw, Pinter, Beckett, O\'Neill), Novels (20: Hardy, Lawrence, Orwell, Joyce, Murdoch, Hawthorne/Faulkner) & Literary Theory (20: Structuralism to Postcolonialism).' },
        { code: '37', name: 'Urdu Literature', marks: 100, summary: 'Answered in Urdu: (1) Study of Urdu Literature & 20th-Century Movements (25), (2) Classical & Modern Poetry — Mir, Ghalib, Hali, Iqbal, Faiz, Rashid, Majeed Amjad, Nasir Kazmi (25), (3) Prose — Shibli, Abdul Haq, Manto, Qasmi, Mushtaq Yousufi (25), (4) Precis/Talkhees (10), (5) Essay/Mazmoon (15).' }
      ]
    },
    {
      groupId: 'Group-VI',
      title: 'Group-VI (Select ONE subject of 100 Marks only)',
      maxMarks: 100,
      maxCount: 1,
      subjects: [
        { code: '38', name: 'Law', marks: 100, summary: 'Definitions of Crime & All Provisions of: Arbitration in civil suits, Civil Courts Original & Appellate Jurisdiction, Code of Civil Procedure (CPC) 1908, Pakistan Penal Code (PPC) 1860, Qanun-e-Shahadat Order (QSO) 1984, and Criminal Procedure Code (CrPC) 1898.', prepLink: 'ppc-section-finder.html' },
        { code: '39', name: 'Constitutional Law', marks: 100, summary: 'Definition, Rule of Law, Separation of Powers, Judicial Review, Fundamental Rights; Comparative Constitutional Law (UK, USA, France, Russia, China, Pakistan, India, Turkey); Constitutional History of Pakistan (1935 Act to 1973 Constitution & Amendments); 18 Landmark Supreme Court Cases (Tamizuddin, Dosso, Asma Jilani, Zafar Ali Shah, SHCBA 2009).', prepLink: 'constitution-explorer.html' },
        { code: '40', name: 'International Law', marks: 100, summary: '17 Topics: Nature & Basis, Article 38 ICJ Statute & Sources, Statehood & Recognition, Vienna Convention on Law of Treaties, Peaceful Dispute Settlement & ICJ, International Humanitarian Law (IHL), Use of Force & UN Charter, International Institutions, Sovereignty, State Responsibility, Jurisdiction, Succession, Diplomatic Envoys & Neutrality.' },
        { code: '41', name: 'Muslim Law & Jurisprudence', marks: 100, summary: 'Sources of Islamic Law (Quran, Sunnah, Ijma, Qiyas, Ijtehad), Principles of Islamic Jurisprudence, Islamic Criminal Law (Hadd, Tazir, Qisas & Diyat), Islamic Family Law (Marriage, Dower, Talaq, Khula, Faskh, Maintenance, Custody, Succession), Islamic Contracts, Banking & Insurance, Islamic International Law, DMMA 1939 & MFLO 1961.' },
        { code: '42', name: 'Mercantile Law', marks: 100, summary: '10 Statutes + 26 Leading Cases: Contract Act 1872, Sale of Goods Act 1930, Partnership Act 1932, Negotiable Instruments Act 1881, Competition Act 2010, Electronic Transactions Ordinance 2002, Arbitration Act 1940, Consumer Protection Act 2006, Companies Ordinance 1984 & Electronic Fund Transfer Act 2007.' },
        { code: '43', name: 'Criminology', marks: 100, summary: 'Section-I (25): Theories of Crime (Biological, Psychological, Sociological — Strain, Control, Labeling) & Islamic Perspective. Section-II (25): Juvenile Delinquency & Justice, Criminal Justice System, Prisons/Parole. Section-III (25): Criminal Investigation, Forensic/Electronic Investigation, INTERPOL/UNODC. Section-IV (25): Terrorism, Cyber Crime, Money Laundering & Role of NAB, FIA, ANF.', prepLink: 'fia-laws-explorer.html' },
        { code: '44', name: 'Philosophy', marks: 100, summary: 'Introduction; Philosophical Methods (Socratic, Inductive, Deductive, Dialectical, Fallibilistic); Epistemology (Rationalism, Empiricism, Kant, Bergson); Ontology (Idealism, Realism, Marx); Ethics (Virtue, Kant, Utilitarianism, Social Contract); Muslim Thinkers (Al-Farabi, Ibn Sina, Al-Ghazali, Ibn Rushd, Ibn Khaldun, Shah Waliullah, Iqbal); Contemporary Movements (Existentialism, Pragmatism, Postmodernism).' }
      ]
    },
    {
      groupId: 'Group-VII',
      title: 'Group-VII (Select ONE subject of 100 Marks only)',
      maxMarks: 100,
      maxCount: 1,
      subjects: [
        { code: '45', name: 'Journalism & Mass Communication', marks: 100, summary: 'Communication Models (Lasswell, Shannon-Weaver, Schramm, Gerbner), Mass Comm Theories (Normative, Spiral of Silence, Uses & Gratifications, McLuhan), Global Communication & McBride Commission, Media & Society, Pakistani Media System, Development Support Communication, Public Relations (PID) & Media Laws/Ethics (PEMRA, PCP, Defamation).' },
        { code: '46', name: 'Psychology', marks: 100, summary: '14 Units: Nature & Schools, Biological Basis (Nervous/Endocrine), Sensation & Perception, Learning & Memory, Motivation & Emotion, Psychological Assessment (Validity/Reliability), Personality, Intelligence (IQ/EQ), Social Influence, Developmental Psychology, Abnormal & Clinical Psychology, Organizational/Industrial, Health & Forensic Psychology.' },
        { code: '47', name: 'Geography', marks: 100, summary: 'Part-I Physical Geography (50): Landforms & Plate Tectonics, Climatology & Atmosphere, Oceanography (Basins, Currents, Tides), Climate Change & Hazards. Part-II Human Geography (50): Cultural Patterns, Agriculture & Industry, Population & Urbanization, Political Geography, Geopolitics, Tourism & Medical Geography.', prepLink: 'physical-geography-map.html' },
        { code: '48', name: 'Sociology', marks: 100, summary: 'I. General Sociology: Individual, Culture & Socialization, Society & Evolution, Social Interaction & Feudalism in Pakistan, Social Control & Anomie, Social Change, Public Opinion, Rural/Urban Community, Social Institutions & Social Problems in Pakistan. II. Sociological Theory (Ibn Khaldun, Comte, Durkheim, Weber, Marx, Parsons). III. Sociological Research Methods.' },
        { code: '49', name: 'Anthropology', marks: 100, summary: 'Social Anthropology (Culture, Family/Marriage, Kinship, Economic & Political Organization, Religion, Contemporary Problems), Urban Anthropology, Socio-Cultural Change in Pakistan, Ethnicity & Race, Anthropological Theories (Boas, Malinowski, Geertz, Ibn Khaldun, Akbar S. Ahmed) & Ethnographic Research Methods.' },
        { code: '50', name: 'Punjabi', marks: 100, summary: 'Answered in Punjabi: History of Language & Literature (15), Classical Poetry — Baba Farid, Shah Hussain, Sultan Bahu, Bulleh Shah, Waris Shah, Mian Muhammad Bakhsh (15), Modern Poetry — Ahmad Rahi, Munir Niazi (15), Islamic Literature (10), Creative Prose (15), Research & Criticism (15), Literary Genres & Folk Literature (15).' },
        { code: '51', name: 'Sindhi', marks: 100, summary: 'Answered in Sindhi: Antiquity & Dialects, Sindhi Folk Literature (Lok Geet, Doro, Gujharat), Historical Eras (Soomra to Modern), Classical Poets (Qazi Qadan, Shah Abdul Latif Bhittai, Sachal Sarmast, Sami), Modern Poets (Shaikh Ayaz, Ustad Bukhari), Prose Writers (Mirza Qaleech Baig, Amar Jaleel), Novels, Dramas, Travelogues & Sindhi ↔ English Translation.' },
        { code: '52', name: 'Pashto', marks: 100, summary: 'Answered in Pashto: Origin, Dialects & Alphabet, Grammar, Literary History & Movements, Culture Essay, Unseen Translation (Pashto ↔ English/Urdu), Classical Poetry (Khushal Khan Khattak, Rahman Baba, Abdul Hamid Baba), Modern Poetry (Hamza Shinwari, Ghani Khan, Qalandar Momand) & Folk Literature (Tappa, Charbaita, Neemakai, Badala).' },
        { code: '53', name: 'Balochi', marks: 100, summary: 'Answered in Balochi: Poetry — Classical & Modern (20: Mir Gul Khan Naseer, Atta Shad, Syed Hashmi), Prose — Novels, Short Stories & Travelogues (20), Baloch History & Culture (15), Balochi Language & Grammar (15), Essay (10), Translation English ↔ Balochi (10), and Balochi Folk Literature (10).' },
        { code: '54', name: 'Persian', marks: 100, summary: 'Answered in Persian: Part-I (50): Pre-Islamic Languages (Avesta, Old Persian, Pahlavi), Classical Literature (Samanid to Mashrootah), Contemporary Poetry & Fiction, Grammar, 4 Literary Styles, Essay & Translation. Part-II (50): Prescribed Prose (Ghazali, Hujwiri, Saadi\'s Gulistan) & Poetry (Ferdowsi, Rumi, Amir Khusrau, Hafez, Ghalib, Allama Iqbal).' },
        { code: '55', name: 'Arabic', marks: 100, summary: 'Answered in Arabic: Pre-Islamic (Mu\'allaqat, Ukkaz), Dawn of Islam & Quranic Rhetoric, Umayyad, Abbasid & Andalusian Periods (Mutanabbi, Al-Jahiz, Ibn Zaydun), Contemporary Literature (Tawfiq al-Hakim, Taha Hussein, Naguib Mahfouz, Ahmad Shawqi), Literary Criticism, Prescribed Poetry Selections & Arabic Grammar (Nahw & Sarf).' }
      ]
    }
  ];

  const CSS_OFFICIAL_NOTES = [
    'Note-1: Question papers in Urdu or Pakistani regional languages (Punjabi, Sindhi, Pashto, Balochi), Persian and Arabic must be answered in the respective languages (except translation questions as directed).',
    'Note-2: Each 200-mark subject has TWO papers of 100 marks each; each 100-mark subject has ONE paper. Every paper is of 3 hours duration.',
    'Note-3: Ratio of MCQs is 20 MCQs per paper in all Compulsory papers (except English Essay) and 20 MCQs per Optional paper (except Pure Mathematics and Applied Mathematics).',
    'Note-4: Islamic Studies OR Comparative Study of Major Religions (For Non-Muslims) may be answered in English or Urdu only. All other papers must be answered in English unless otherwise directed.',
    'Note-5: Non-Muslim candidates may opt for either Islamic Studies OR Comparative Study of Major Religions as suits them.'
  ];

  global.CSS_MPT_SYLLABUS = CSS_MPT_SYLLABUS;
  global.CSS_COMPULSORY = CSS_COMPULSORY;
  global.CSS_OPTIONAL_GROUPS = CSS_OPTIONAL_GROUPS;
  global.CSS_OFFICIAL_NOTES = CSS_OFFICIAL_NOTES;
})(typeof window !== 'undefined' ? window : globalThis);
