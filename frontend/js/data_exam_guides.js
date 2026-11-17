/**
 * Exam Preparation Guides Data
 * Comprehensive syllabi, test patterns, legal acts, scoring tactics & roadmaps
 * for FIA, NAB, CSS, PMS, Customs & FBR, Auditor General / AAO, and One-Paper MCQs.
 */
window.EXAM_GUIDES = [
  {
    id: "fia",
    name: "FIA",
    fullName: "Federal Investigation Agency (FIA)",
    targetPosts: "Assistant Director (Investigation) BS-17, Assistant Director (Legal) BS-17, Inspector Investigation BS-16",
    agency: "FPSC (Federal Public Service Commission)",
    scale: "BS-16 & BS-17",
    color: "#dc2626",
    icon: "fa-shield-halved",
    overview: "The Federal Investigation Agency (FIA) is Pakistan's premier border control, criminal investigation, and counter-espionage intelligence agency operating under the Ministry of Interior. Recruitment for officer cadres (AD Investigation, AD Legal, and Inspector) is conducted by the FPSC through a 100-mark screening test followed by descriptive examination and psychological/interview stages.",
    testPattern: {
      totalMarks: 100,
      totalTime: "100 Minutes",
      format: "Objective MCQ-based screening test",
      negativeMarking: "No negative marking in FPSC screening phase (1 mark per correct answer)",
      meritCutoff: "Typically 76–85+ marks out of 100 depending on provincial quota and vacancies"
    },
    sections: [
      {
        name: "Part-I: English (20 Marks / 20%)",
        topics: [
          "Vocabulary: High-frequency GRE/CSS words, synonyms & antonyms",
          "Grammar Usage: Subject-Verb Agreement, Conditionals, Modals",
          "Sentence Structuring & Correction: Dangling modifiers, parallel structure",
          "Prepositions & Idiomatic Phrasal Verbs (10–12 questions typically tested)",
          "Direct/Indirect Speech and Active/Passive Voice transformations"
        ]
      },
      {
        name: "Part-II: Professional & General Knowledge (80 Marks / 80%)",
        topics: [
          "FIA Act, 1974 (Act VIII of 1975) & Amendments: All 10 sections, schedule of offences, powers of members, DG powers",
          "Cybercrime & PECA 2016: Prevention of Electronic Crimes Act (cyber terrorism, identity theft, unauthorized access)",
          "Anti-Money Laundering Act, 2010 (AMLA): Financial Monitoring Unit (FMU), freezing & attachment of proceeds of crime",
          "Basic Arithmetic (AD Investigation): Ratio, proportion, percentages, averages, algebra, train & work problems",
          "Current Affairs & Pakistan Affairs: Post-1947 developments, constitutional history, foreign policy, 2024–2026 current events",
          "Everyday Science: General scientific concepts, vitamins, human body, environmental science & computer fundamentals",
          "Islamic Studies & Ethics: Basic pillars, Holy Quran, life of Holy Prophet (PBUH), righteous caliphate"
        ]
      }
    ],
    keyActs: [
      {
        actName: "FIA Act, 1974 (Act No. VIII of 1975)",
        keySections: "Section 3 (Constitution of Agency), Section 4 (Superintendence vested in Federal Govt; administration in DG), Section 5 (Powers of members of the Agency including police station powers), Section 5A (Order for disposal of seized property), Schedule (Specific PPC sections under FIA jurisdiction)."
      },
      {
        actName: "Prevention of Electronic Crimes Act, 2016 (PECA)",
        keySections: "Section 3 (Unauthorized access to information system), Section 10 (Cyber terrorism), Section 13 (Electronic forgery), Section 14 (Electronic fraud), Section 16 (Unauthorized use of identity information), Section 20 (Offences against modesty of a natural person)."
      },
      {
        actName: "Anti-Money Laundering Act, 2010 (AMLA)",
        keySections: "Section 3 (Offence of money laundering), Section 4 (Punishment up to 10 years and fine up to 25 million rupees), Section 6 (Financial Monitoring Unit - FMU), Section 7 (Suspicious Transaction Reporting - STR and Currency Transaction Reporting - CTR)."
      }
    ],
    highYieldTactics: [
      "Bare Act Mastery: Memorize the exact wording of all 10 sections of the FIA Act, 1974. At least 8–12 questions in every exam directly ask section numbers and specific authorities.",
      "Arithmetic Advantage: In AD Investigation, 20 marks of Mathematics decide the merit. Non-math background candidates must drill speed math (percentage, ratio, algebraic equations).",
      "PPC Sections in FIA Schedule: Focus on Schedule offences — Section 161–165A (Bribery/Corruption), 419–420 (Cheating/Impersonation), 467–471 (Forgery).",
      "Time Management: Attempt 100 questions in 3 rounds: Round 1 (Fast sure-shots: English + GK + Law in 40 mins), Round 2 (Math calculations in 35 mins), Round 3 (Review remaining in 15 mins)."
    ],
    recommendedSources: [
      "Official Bare Acts: FIA Act 1974, PECA 2016, AMLA 2010 (downloaded directly from official portals)",
      "FPSC Past 10 Years General Recruitment Solved Papers (Imtiaz Shahid / Advanced Publishers)",
      "High School Math (Class 9–10 PTB / NCERT for arithmetic and algebra fundamentals)",
      "Daily Dawn Newspaper: Editorials and National pages for contemporary Pakistan & Global affairs",
      "MCQs Portal: FIA AD Investigation & Legal dedicated quiz modules"
    ],
    quizUrl: "quiz.html?category=FIA%20Assistant%20Director%20Investigation",
    quizAltUrl: "quiz.html?category=FIA%20Assistant%20Director%20Legal"
  },
  {
    id: "nab",
    name: "NAB",
    fullName: "National Accountability Bureau (NAB)",
    targetPosts: "Assistant Director (Executive/Investigation BS-17), Investigation Officer (IO BS-16), Assistant Director (Law BS-17)",
    agency: "FPSC / National Accountability Bureau Testing",
    scale: "BS-16 & BS-17",
    color: "#7c3aed",
    icon: "fa-scale-unbalanced-flip",
    overview: "The National Accountability Bureau (NAB) is Pakistan's apex anti-corruption organization mandated to eliminate corruption, financial embezzlement, misuse of public authority, and recovery of looted state assets. Tests for Assistant Director and Investigation Officer demand forensic mindset, knowledge of anti-graft jurisprudence, and financial acumen.",
    testPattern: {
      totalMarks: 100,
      totalTime: "100 Minutes",
      format: "Objective MCQ-based screening + subsequent descriptive/psychological evaluations",
      negativeMarking: "No negative marking in FPSC recruitment; varies in departmental agency tests",
      meritCutoff: "Typically 75–82 marks out of 100"
    },
    sections: [
      {
        name: "Part-I: English & Communication (20 Marks / 20%)",
        topics: [
          "Advanced Vocabulary, contextual antonyms & synonyms",
          "Sentence correction, spotting errors in complex sentences",
          "Idiomatic expressions, prepositional collocations",
          "Reading comprehension & logical deductive inference"
        ]
      },
      {
        name: "Part-II: Professional Law, Forensics & General Knowledge (80 Marks / 80%)",
        topics: [
          "National Accountability Ordinance, 1999 (NAO): Definitions, offences, court jurisdiction, bail, plea bargain & voluntary return",
          "White-Collar Crime Investigation: Money trails, shell companies, benami transactions, forensic audit basics",
          "Public Financial Governance: PFM Act 2019, procurement standards, public sector accounting principles",
          "Current Affairs & Economy of Pakistan: Fiscal deficit, IMF macroeconomic targets, FATF AML/CFT compliance",
          "Pakistan Affairs & Everyday Science: Governance structure, civil service history, everyday science & analytical reasoning"
        ]
      }
    ],
    keyActs: [
      {
        actName: "National Accountability Ordinance, 1999 (Ordinance No. XVIII of 1999)",
        keySections: "Section 4 (Application to all persons across Pakistan), Section 5 (Crucial definitions: assets beyond means, public office holder), Section 9 (Corrupt Practices & Corruption defined in detail), Section 14 (Presumption against accused), Section 15 (Disqualification to hold public office or contest elections), Section 24 (Arrest and detention), Section 25 (Voluntary Return and Plea Bargain), Section 31 (Absconding and proclamation)."
      },
      {
        actName: "Anti-Money Laundering Act, 2010 & FATF Framework",
        keySections: "Tracing predicate crimes, financial intelligence analysis, mutual legal assistance (MLA), and beneficial ownership identification under FATF compliance mandates."
      }
    ],
    highYieldTactics: [
      "Section 9 & 25 Precision: NAB papers consistently ask intricate questions on Section 9 (what constitutes corruption) and Section 25 (difference between Voluntary Return approved by Chairman vs Plea Bargain approved by Accountability Court).",
      "Benami Transactions Concept: Review Benami Transactions (Prohibition) Act, 2017 definitions alongside NAO 1999.",
      "Forensic Trail Concepts: Understand how bank reconciliations, CTRs, and STRs are generated to detect money laundering trails.",
      "Stay Updated on Amendments: Know the recent parliamentary amendments to NAO regarding monetary thresholds, procedural safeguards, and remand durations."
    ],
    recommendedSources: [
      "Official NAO 1999 with up-to-date amendments (available from NAB official portal)",
      "FPSC Solved Past Papers for Executive & Investigation cadres",
      "Pakistan Economic Survey (latest executive summary) for national economic statistics",
      "MCQs Portal: Assistant Audit Officer & Civil Servants Act practice modules"
    ],
    quizUrl: "quiz.html?category=Civil%20Servants%20Act,%201973",
    quizAltUrl: "quiz.html?category=Assistant%20Audit%20Officer%20(BS-17)"
  },
  {
    id: "css",
    name: "CSS",
    fullName: "Central Superior Services (CSS Examination)",
    targetPosts: "12 Occupational Groups (PAS, PSP, FSP, IRS, Customs, OMG, Railways, Information, Postal, Military Lands, Audit & Accounts)",
    agency: "FPSC (Federal Public Service Commission)",
    scale: "BS-17 Induction into Central Bureaucracy",
    color: "#1e3a8a",
    icon: "fa-graduation-cap",
    overview: "The CSS Examination is Pakistan's most prestigious competitive gateway for inducting elite bureaucrats into 12 central occupational groups. The exam consists of three rigorous phases: (1) MCQ-Based Preliminary Test (MPT - 200 marks), (2) Written Examination (1200 marks across 6 compulsory and 6 optional subjects), and (3) Psychological Assessment & Viva Voce (300 marks).",
    testPattern: {
      totalMarks: "MPT: 200 Marks | Written: 1200 Marks | Interview: 300 Marks",
      totalTime: "MPT: 200 Minutes | Written: 3 Hours per subject paper",
      format: "Screening MPT (Objective) + Written Subjective Analytical Papers",
      negativeMarking: "No negative marking in MPT (Pass threshold is 33% = 66/200 marks)",
      meritCutoff: "Written cutoff: 50% aggregate (600/1200) with 40% in compulsory & 33% in optional subjects"
    },
    sections: [
      {
        name: "Stage 1: MPT (MCQ-Based Preliminary Test - 200 Marks)",
        topics: [
          "English (50 Marks): Vocabulary, grammar usage, sentence structuring, comprehension",
          "General Abilities (60 Marks): Basic math, arithmetic, algebra, geometry, logical reasoning & mental abilities",
          "General Knowledge (50 Marks): Everyday Science, Pakistan Affairs, International Current Affairs",
          "Islamic Studies / Civics for Non-Muslims (20 Marks)",
          "Urdu (20 Marks): Grammar, usage, vocabulary, sentence completion and comprehension"
        ]
      },
      {
        name: "Stage 2: Written Examination (1200 Marks)",
        topics: [
          "English Essay (100 Marks): 2500–3000 words argumentative, expository, or reflective essay",
          "English Précis & Composition (100 Marks): Précis writing (1/3rd rule), comprehension, vocabulary, correction",
          "General Science & Ability (100 Marks): 60 marks physical/biological science + 40 marks quantitative reasoning",
          "Current Affairs (100 Marks) & Pakistan Affairs (100 Marks): Domestic, regional, and global dynamics",
          "Islamic Studies (100 Marks): Core teachings, governance model, human rights in Islam",
          "Optional Subjects (600 Marks): Chosen strategically from 7 distinct subject groups"
        ]
      }
    ],
    keyActs: [
      {
        actName: "Constitution of the Islamic Republic of Pakistan, 1973",
        keySections: "Fundamental Rights (Articles 8–28), Principles of Policy (Articles 29–40), Federation & Provinces (Articles 141–159), Auditor General (Articles 168–171), Judicature & High/Supreme Courts (Articles 175–212)."
      },
      {
        actName: "Civil Servants Act, 1973 (Act LXXI of 1973)",
        keySections: "Terms and conditions of civil service, appointment, probation, confirmation, seniority, promotion, and retirement."
      }
    ],
    highYieldTactics: [
      "Master the English Barrier: Over 85% of failing CSS candidates fail English Essay or Précis. Write at least two full essays every month and practice précis writing weekly under strict timing.",
      "GSA Math is Pure Gold: In General Science & Ability, the 40 marks of Quantitative Reasoning can be scored 100% with systematic arithmetic practice, elevating your aggregate.",
      "Optional Subject Synergy: Choose optional subjects that overlap with compulsory papers (e.g., Political Science / IR with Current Affairs, Criminology / Public Admin with Governance).",
      "Analytical Writing over Memorization: Do not reproduce facts blindly; structure answers with thesis statements, critical arguments, data charts, and policy recommendations."
    ],
    recommendedSources: [
      "Daily Dawn, The News, and Foreign Affairs magazine for analytical geopolitical perspectives",
      "Constitution of Pakistan, 1973 (Official Bare Text)",
      "High-yielding CSS Past Papers 2016–2026 for compulsory and optional subjects",
      "Exploring the World of English by Saadat Ali Shah / High School English Grammar by Wren & Martin",
      "MCQs Portal: CSS Past Papers & MPT screening practice sets"
    ],
    quizUrl: "quiz.html?category=CSS%20Past%20Papers",
    quizAltUrl: "quiz.html?category=Pakistan%20Affairs"
  },
  {
    id: "pms",
    name: "PMS",
    fullName: "Provincial Management Services (PMS Examination)",
    targetPosts: "Provincial Executive Bureaucracy (Section Officer, Assistant Commissioner, Sub-Divisional Magistrate BS-17)",
    agency: "Provincial Public Service Commissions (PPSC Punjab, SPSC Sindh, KPPSC, BPSC)",
    scale: "BS-17 Provincial Civil Service",
    color: "#0d9488",
    icon: "fa-building-columns",
    overview: "Provincial Management Services (PMS) is the administrative backbone of provincial civil service in Punjab, Sindh, KP, and Balochistan. Similar to CSS in caliber, it incorporates provincial administrative dynamics and features a decisive, high-stakes 100-mark General Knowledge compulsory objective paper where negative marking separates top qualifiers from the rest.",
    testPattern: {
      totalMarks: "1200 Marks Written (600 Compulsory + 600 Optional) + 200/300 Viva Voce",
      totalTime: "GK Paper: 100 MCQs in 100/90 Minutes | Subjective Papers: 3 Hours each",
      format: "Subjective Written Papers + High-Stakes Objective GK Compulsory Paper",
      negativeMarking: "CRITICAL: PPSC applies -0.25 negative marking per incorrect answer in the GK paper!",
      meritCutoff: "40% in each individual paper and 50% in aggregate (600/1200)"
    },
    sections: [
      {
        name: "Compulsory Papers (600 Marks)",
        topics: [
          "English Essay (100 Marks) & English Précis, Comprehension & Translation (100 Marks)",
          "Urdu: Essay, Précis, Idioms, Poetry Explanation & English-to-Urdu Translation (100 Marks)",
          "Islamic Studies / Ethics (100 Marks)",
          "Pakistan Studies (100 Marks): Ideology, geography, constitutional and political history",
          "General Knowledge (100 Marks Objective MCQ Paper): World geography, physical features, international organizations, everyday science, modern discoveries, computer literacy, sports & Pakistan affairs"
        ]
      },
      {
        name: "Optional Papers (600 Marks)",
        topics: [
          "Selected from provincial commissions' subject groups (e.g. Political Science, History, Law, Sociology, Public Administration, Mass Communication, Punjabi/Sindhi/Pashto Literature)"
        ]
      }
    ],
    keyActs: [
      {
        actName: "Provincial Civil Servants Acts & Local Government Laws",
        keySections: "Punjab Civil Servants Act 1974 / Sindh Civil Servants Act 1973, Provincial Rules of Business, Land Revenue Act 1967 (powers of Assistant Commissioner as Collector/Sub-Divisional Magistrate)."
      }
    ],
    highYieldTactics: [
      "Negative Marking Formula in GK: In PPSC PMS GK, guessing blindly on 4 options loses marks. Only attempt if you can eliminate at least 2 options. Expected value with 2 options eliminated is +0.375 marks per question.",
      "Urdu Paper Deciding Edge: Many candidates with strong English fail or score low in Urdu. Daily practice of Urdu handwriting, translation from English news, and literary vocabulary is essential.",
      "World Geography Precision: PMS GK tests rivers, straits, mountain ranges, capitals, currencies, and world organizations heavily.",
      "Balance Optional Papers: Choose high-scoring optional subjects with objective grading criteria (e.g., Sociology, Geography, Mass Communication)."
    ],
    recommendedSources: [
      "Caravan General Knowledge (Choudhry Ahmed Najib) / Imtiaz Shahid PPSC Past Papers",
      "Standard World Atlas (Oxford Atlas / Collins World Atlas) for physical geography",
      "Urdu Grammar & Composition (Kashif-ul-Haqaiq / High school board textbooks)",
      "MCQs Portal: General Knowledge, Geography, Everyday Science & World Organizations modules"
    ],
    quizUrl: "quiz.html?category=General%20Knowledge",
    quizAltUrl: "quiz.html?category=Geography"
  },
  {
    id: "customs",
    name: "Customs",
    fullName: "Customs & FBR (Federal Board of Revenue)",
    targetPosts: "Inspector Customs / Intelligence Officer BS-16, Appraising & Valuation Officer BS-16, Preventive Officer BS-16",
    agency: "FPSC (Federal Public Service Commission General Recruitment)",
    scale: "BS-16 Revenue & Law Enforcement",
    color: "#059669",
    icon: "fa-boxes-packing",
    overview: "Customs Inspectors and Appraising Officers under the Federal Board of Revenue (FBR) safeguard Pakistan's economic frontiers, enforce tariff classifications, assess import/export customs duties, and combat narcotics and currency smuggling. The FPSC screening test is heavily focused on fiscal laws, valuation rules, and trade logistics.",
    testPattern: {
      totalMarks: 100,
      totalTime: "100 Minutes",
      format: "Objective MCQ-based screening test",
      negativeMarking: "No negative marking in FPSC screening",
      meritCutoff: "Typically 78–86 marks out of 100 (high competition across federal quotas)"
    },
    sections: [
      {
        name: "Part-I: English (20 Marks / 20%)",
        topics: [
          "Grammar rules, sentence structuring, subject-verb agreement",
          "Commercial vocabulary, trade terms, synonyms & antonyms",
          "Prepositions, idiomatic phrases, sentence completion"
        ]
      },
      {
        name: "Part-II: Professional Test & General Abilities (80 Marks / 80%)",
        topics: [
          "Customs Act, 1969: Definitions, valuation methods, goods declarations (GD), smuggling offences, search, arrest & seizure powers",
          "Taxation Laws: Sales Tax Act 1990 (taxable supplies, input/output adjustment) & Federal Excise Act 2005",
          "International Trade Terms (Incoterms 2020): FOB, CIF, CFR, EXW, DDP",
          "Basic Arithmetic: Percentages, fractions, profit & loss, ratio & proportion, algebra (20 questions)",
          "Current Economic Affairs: Pakistan's national budget, FBR tax collection, trade deficit, CPEC trade routes",
          "Computer Literacy & Automation: MS Excel formulas, Pakistan Single Window (PSW), WeBOC customs clearing software"
        ]
      }
    ],
    keyActs: [
      {
        actName: "Customs Act, 1969 (Act IV of 1969)",
        keySections: "Section 2 (Definitions: smuggling, conveyance, goods, bill of entry), Section 25 (Customs Valuation Methods 1 to 6 - Transaction Value, Identical Goods, Similar Goods, Deductive, Computed, Fall-back), Section 25A (Valuation Rulings by Director General), Section 79 (Goods Declaration for home consumption), Section 156 (Comprehensive Penalties Table), Section 158–171 (Powers of search, arrest, seizure and adjudication)."
      },
      {
        actName: "Sales Tax Act, 1990 & Federal Excise Act, 2005",
        keySections: "Sales Tax Section 3 (Scope of tax), Section 7 & 8 (Input tax determination & tax credit restrictions), Section 10 (Refunds), Zero-rating vs Exemption under 5th & 6th Schedules."
      }
    ],
    highYieldTactics: [
      "Master Section 25 Valuation Sequence: The hierarchical 6 methods of customs valuation under Section 25 of Customs Act, 1969 appear in almost every test paper without exception.",
      "Incoterms Mastery: Know who pays freight, insurance, and bears transit risk in FOB (Free on Board) vs CIF (Cost, Insurance & Freight) vs CFR.",
      "Section 156 Penalty Clauses: Review major penalties for smuggling goods, misdeclaring consignments, and fraudulent invoices.",
      "Arithmetic Practice: Arithmetic carries 20 marks; practicing percentage calculations and tax computations gives an instant score boost."
    ],
    recommendedSources: [
      "Customs Act, 1969 Bare Act (latest FBR edition including budget amendments)",
      "Sales Tax Act, 1990 and Federal Excise Act, 2005 summary booklets",
      "FPSC Past Papers for Inspector Customs & Appraising/Valuation Officers",
      "Pakistan Single Window (PSW) & WeBOC operational overview notes",
      "MCQs Portal: Mathematics, Current Affairs & World Organizations modules"
    ],
    quizUrl: "quiz.html?category=Mathematics",
    quizAltUrl: "quiz.html?category=World%20Organizations"
  },
  {
    id: "audit",
    name: "Audit & Accounts",
    fullName: "Office of the Auditor General of Pakistan (AGP)",
    targetPosts: "Assistant Audit Officer (BS-17), Senior Auditor (BS-16)",
    agency: "FPSC (Case No. F.4-195/2026 & General Recruitment)",
    scale: "BS-16 & BS-17 Financial Governance",
    color: "#f59e0b",
    icon: "fa-file-invoice-dollar",
    overview: "The Department of the Auditor General of Pakistan (DAGP) is the Supreme Audit Institution (SAI) of Pakistan mandated under Articles 168–171 of the Constitution to audit all public expenditure across federal, provincial, and local government departments. Tests focus heavily on accounting cycles, auditing standards (ISSAIs), public financial rules, and constitutional accountability.",
    testPattern: {
      totalMarks: 100,
      totalTime: "100 Minutes",
      format: "Objective MCQ-based screening test",
      negativeMarking: "No negative marking in FPSC recruitment",
      meritCutoff: "Typically 74–82 marks out of 100"
    },
    sections: [
      {
        name: "Part-I: English (20 Marks / 20%)",
        topics: [
          "Vocabulary: Accounting and financial terms, synonyms & antonyms",
          "Grammar rules, sentence structuring, prepositional usage"
        ]
      },
      {
        name: "Part-II: Professional Test (80 Marks / 80%)",
        topics: [
          "Financial Accounting: Double entry cycle, journal, ledger, trial balance, adjustment entries & final accounts",
          "Partnership & Company Accounts: Goodwill valuation, shares issuance, debentures, ratio analysis",
          "Cost & Management Accounting: Costing methods, budgeting, flexible budgets & variance analysis",
          "Auditing Principles: Scope, audit programmes, working papers, verification of assets & liabilities, rights/duties of auditor",
          "Public Sector Auditing: Financial attest audit, compliance audit, performance audit (3Es: Economy, Efficiency, Effectiveness), ISSAIs",
          "Constitutional Provisions: Articles 168 to 171 regarding appointment, tenure, powers, accounts & reports of AGP",
          "Public Finance & Procurement: Public Finance Management Act, 2019 (PFMA) & Public Procurement Rules, 2004 (PPRA)",
          "Public Sector Accounting: Cash vs. accrual accounting, IPSAS standards, New Accounting Model (NAM)",
          "Internal Controls, Fraud & IT Audit: COSO framework, CAATs (ACL, IDEA), forensic detection"
        ]
      }
    ],
    keyActs: [
      {
        actName: "Constitution of Pakistan, 1973 (Articles 168–171)",
        keySections: "Article 168 (Appointment, tenure of 4 years/65 years age, oath, removal like High Court Judge), Article 169 (Functions and powers prescribed by Act of Parliament / 2001 Ordinance), Article 170 (Form of accounts prescribed by AGP with approval of President), Article 171 (Reports submitted to President/Governors who lay them before Parliament/Assemblies)."
      },
      {
        actName: "Public Finance Management Act, 2019 & PPRA Rules, 2004",
        keySections: "PFMA 2019: Principal Accounting Officers (PAO), Single Treasury Account, fiscal discipline; PPRA Rules: Rule 12 (Tender notice threshold), Rule 23 (Bidding documents), Rule 36 (Bidding procedures: Single-stage one-envelope, single-stage two-envelope), Rule 38 (Acceptance of lowest evaluated responsive bid)."
      }
    ],
    highYieldTactics: [
      "Articles 168–171 Must Be on Fingertips: AGP constitutional provisions are asked in every single paper. Know tenure limits, removal procedures, and oath administrators.",
      "The 3Es of Performance Audit: Economy (spending less), Efficiency (spending well), and Effectiveness (spending wisely) under ISSAI 300.",
      "PPRA Bidding Rules: Rule 36 procedures (single stage two envelope for technical + financial) are repeatedly tested.",
      "Accounting Equation & Adjustments: Ensure rapid mental calculations of prepaid expenses, depreciation, and accrued liabilities."
    ],
    recommendedSources: [
      "Auditor-General's (Functions, Powers and Terms and Conditions of Service) Ordinance, 2001",
      "Public Finance Management Act, 2019 and PPRA Rules, 2004 (official PPRA website)",
      "Financial Accounting by Meigs & Meigs / Cost Accounting by Matz & Usry",
      "MCQs Portal: Dedicated Assistant Audit Officer (BS-17) 750 MCQs Bank"
    ],
    quizUrl: "quiz.html?category=Assistant%20Audit%20Officer%20(BS-17)",
    quizAltUrl: "quiz.html?category=Civil%20Servants%20Act,%201973"
  },
  {
    id: "one_paper",
    name: "One-Paper Strategy",
    fullName: "Universal One-Paper MCQs Master Blueprint",
    targetPosts: "All BS-11 to BS-17 General Recruitment Exams across FPSC, PPSC, SPSC, KPPSC, BPSC, NTS, OTS, PTS",
    agency: "All Federal & Provincial Testing Bodies",
    scale: "BS-11 to BS-17",
    color: "#4f46e5",
    icon: "fa-bullseye",
    overview: "In Pakistan, over 90% of government jobs from Basic Pay Scale 11 to 17 are determined by a standardized single-paper 100 MCQs screening test. Whether you are appearing for Tehsildar, Sub-Inspector, Excise Inspector, Assistant Director, or Data Entry Operator, mastering the universal test-taking science and disciplined preparation timetable is the proven differentiator between qualifying and missing by 1 mark.",
    testPattern: {
      totalMarks: "100 Marks (or 200 marks in select screening tests)",
      totalTime: "90 or 100 Minutes",
      format: "Single-paper objective multiple-choice format",
      negativeMarking: "Crucial difference: PPSC applies -0.25 penalty; FPSC/NTS/SPSC usually have NO negative marking",
      meritCutoff: "Generally 70–85+ marks depending on post category, seats, and regional domicile quota"
    },
    sections: [
      {
        name: "Standard Subject Distribution (The 100-Mark Formula)",
        topics: [
          "English Grammar, Vocab, Sentence Completion & Correction (20 Marks)",
          "General Knowledge: World Superlatives, Capitals, Currencies, International Organizations (20 Marks)",
          "Pakistan Affairs & Islamic Studies: Historical timeline, constitutional developments, geography (20 Marks)",
          "Everyday Science: Human anatomy, vitamins, scientific instruments, inventions, planetary science (15 Marks)",
          "Basic Mathematics: Arithmetic, percentages, ratio & proportion, algebra (15 Marks)",
          "Computer Literacy: MS Office shortcuts, hardware, OS & Internet (10 Marks)"
        ]
      }
    ],
    keyActs: [
      {
        actName: "The 3-Pass Exam Room Strategy",
        keySections: "Pass 1 (0 to 35 mins): Solve 100% known questions instantly. Never linger on tough calculations. Fill bubble sheet carefully. Pass 2 (35 to 70 mins): Tackle math problems and 50-50 questions where you can eliminate 2 wrong options. Pass 3 (70 to 90 mins): Review skipped questions, verify matching question numbers against answer sheet bubbles."
      },
      {
        actName: "Negative Marking Calculus (PPSC Strategy)",
        keySections: "If you eliminate 2 out of 4 options, you have a 50% probability of choosing the right answer. Expected gain = (0.5 × +1.0) - (0.5 × 0.25) = +0.375 marks! Mathematically, it is always profitable to attempt when 2 options are eliminated, but NEVER guess blindly when all 4 options are unknown."
      }
    ],
    highYieldTactics: [
      "The Bubble Sheet Disaster Prevention: Fill bubbles in blocks of 10 or 20 questions rather than waiting until the final 5 minutes when panicking causes row misalignment.",
      "Rule of Elimination: Always find why 3 options are incorrect rather than jumping on the first plausible option.",
      "60-Day Proven Roadmap: Weeks 1–2 (English & Math fundamentals), Weeks 3–4 (General Science & Geography), Weeks 5–6 (Current Affairs & Specialized Acts), Weeks 7–8 (Timed full mock tests).",
      "Revise Before Sleeping: Memory retention for dates, capitals, and article numbers doubles if revised in short 20-minute evening bursts."
    ],
    recommendedSources: [
      "MCQs Portal: Over 12,000+ interactive categorized MCQs with instant explanations",
      "General Science Capsule Notes & 2200 Master MCQs Book (available online on this site)",
      "Past 5 Years solved papers of your target testing commission (PPSC / FPSC / SPSC)",
      "Daily Dawn news app for Current Affairs editorial vocabulary"
    ],
    quizUrl: "quiz.html?category=General%20Knowledge",
    quizAltUrl: "quiz.html?category=Everyday%20Science"
  }
];
