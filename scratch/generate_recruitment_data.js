const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'frontend', 'js', 'data_recruitment_prep.js');

const recruitmentJobs = [
  {
    id: "fia-ad-investigation",
    title: "FIA Assistant Director (Investigation)",
    scale: "BS-17",
    department: "Federal Investigation Agency (Ministry of Interior)",
    cadre: "Investigation / Officer Cadre",
    qualification: "Second Class or Grade 'C' Master's Degree or 16-year BS Degree from an HEC recognized university.",
    ageLimit: "22 - 28 years (+ 5 years general age relaxation = up to 33 years)",
    shortDescription: "Premier federal law enforcement officer post responsible for investigating white-collar crime, transnational money laundering, cyber crime, human trafficking, and corporate fraud across Pakistan.",
    icon: "fa-shield-halved",
    accentColor: "#0f766e",
    syllabus: {
      totalMarks: 100,
      totalQuestions: 100,
      timeAllowed: "100 Minutes",
      testType: "Objective Type (MCQs)",
      negativeMarking: "None (Standard FPSC) / 0.25 (Advanced Mocks)",
      passingThreshold: "50% (Merit cutoff typically 74 - 82)",
      sections: [
        {
          name: "Part-I: English Grammar & Vocabulary",
          marks: 20,
          percentage: "20%",
          description: "Vocabulary (Synonyms/Antonyms), Grammar Usage, Sentence Structuring, Idiomatic Expressions, Prepositions, and Analogy.",
          topics: [
            "Tenses & Subject-Verb Agreement",
            "Prepositions & Phrasal Verbs",
            "Direct & Indirect Narration",
            "Active & Passive Voice",
            "High-Frequency GRE/CSS Vocabulary",
            "Sentence Correction & Punctuation"
          ]
        },
        {
          name: "Part-II: Professional & Legal Knowledge",
          marks: 32,
          percentage: "32%",
          description: "Core statutory laws governing FIA investigations, powers of arrest, financial crimes, and cyber security.",
          topics: [
            "Federal Investigation Agency Act, 1974 (Sections 1 to 10 & Schedule)",
            "Anti-Money Laundering Act (AMLA), 2010 (Financial Monitoring Unit, Scheduled Offences)",
            "Prevention of Electronic Crimes Act (PECA), 2016 (Cyber Crime offences & procedures)",
            "Civil Servants Act, 1973 & Efficiency and Discipline (E&D) Rules, 2020",
            "Pakistan Penal Code (PPC) Sections relevant to Public Servants (Sec 161-165A, 409)"
          ]
        },
        {
          name: "Part-III: Basic Arithmetic & Analytical Reasoning",
          marks: 16,
          percentage: "16%",
          description: "Quantitative aptitude, percentages, profit/loss, ratios, algebraic equations, and logical sequence analysis.",
          topics: [
            "Percentages, Profit & Loss, Discount",
            "Ratios, Proportions & Unitary Method",
            "Averages, Speed, Distance & Time",
            "Simple & Compound Interest",
            "Basic Algebraic Equations & Polynomials",
            "Number Series & Analytical Deduction"
          ]
        },
        {
          name: "Part-IV: Everyday Science & Technology",
          marks: 12,
          percentage: "12%",
          description: "Core physical, chemical, biological concepts, human anatomy, solar system, and digital computer basics.",
          topics: [
            "Physical Sciences (Laws of Motion, Energy, Light, Sound)",
            "Biological Sciences (Human Anatomy, Vitamins, Diseases & Vaccines)",
            "Atmospheric & Environmental Science (Ozone, Greenhouse Effect, Climate)",
            "Information Technology & Computer Architecture Basics"
          ]
        },
        {
          name: "Part-V: Current Affairs, Pakistan Affairs & Islamic Studies",
          marks: 20,
          percentage: "20%",
          description: "National and international developments (last 2 years), post-1947 constitutional timeline, and Islamic ethics.",
          topics: [
            "Pakistan Affairs (Constitutional Amendments, Kashmir Dispute, CPEC Phase-II)",
            "Current Affairs (Global Geopolitics, SCO, BRICS, IMF Programmes)",
            "Islamic Studies (Pillars of Islam, Battles, Quranic Revelations, Ghazwat)",
            "Non-Muslim candidates: Basic Human Rights & Ethics"
          ]
        }
      ]
    },
    prepMaterial: [
      {
        subjectId: "fia-laws",
        title: "FIA Act 1974 & Investigation Statutes",
        icon: "fa-scale-balanced",
        readTime: "25 min read",
        summary: "Detailed section-by-section analysis of the FIA Act 1974, AMLA 2010, and PECA 2016, with investigation powers, search and seizure procedures, and high-frequency exam questions.",
        content: `### 1. The Federal Investigation Agency (FIA) Act, 1974 (Act No. VIII of 1975)
- **Date of Enactment:** Passed by Parliament on 13th January, 1975; received presidential assent on 17th January, 1975.
- **Preamble:** Established for the investigation of certain offences committed in connection with matters concerning the Federal Government, and for matters connected therewith.
- **Section 2 (Definitions):** 
  - *"Agency"* means the Federal Investigation Agency constituted under section 3.
  - *"Director General"* means the Director General of the Agency appointed by the Federal Government under section 3(2).
  - *"Special Police"* means the Pakistan Special Police Establishment (PSPE) constituted under the PSPE Ordinance, 1948 (amalgamated into FIA under section 9).
- **Section 3 (Constitution of the Agency):** 
  - The Agency consists of a Director General appointed by the Federal Government and such number of other officers as the Federal Government may appoint.
  - Territorial jurisdiction extends to the whole of Pakistan and applies to all citizens of Pakistan wherever they may be.
- **Section 4 (Superintendence and Administration):**
  - Superintendence vests entirely in the **Federal Government** (Ministry of Interior).
  - Administration vests in the **Director General**, who exercises the powers of an Inspector General of Police under the Police Act, 1861.
- **Section 5 (Members to have Powers of Police Officers):**
  - Members have all powers of search, seizure, arrest, and investigation under the Code of Criminal Procedure (CrPC), 1898 for offences in the Schedule.
  - Any officer not below the rank of **Sub-Inspector** may search any place and seize evidence.
  - An officer not below Sub-Inspector authorized by DG may arrest without warrant any person concerned in a scheduled offence.

### 2. Anti-Money Laundering Act (AMLA), 2010
- **Section 3 (Offence of Money Laundering):** Converting, transferring, concealing, acquiring, possessing, or using property knowing it is derived from proceeds of crime.
- **Section 4 (Punishment):** Rigorous imprisonment for **1 to 10 years**, fine up to **25 million rupees** (or 100 million for corporations), plus forfeiture of property.
- **Section 6 (Financial Monitoring Unit - FMU):** Autonomous financial intelligence unit in State Bank of Pakistan receiving CTRs (over 2M PKR) and STRs.

### 3. Prevention of Electronic Crimes Act (PECA), 2016
- **Section 10 (Cyber Terrorism):** Accessing critical infrastructure with intent to terrorize public (Up to **14 years** imprisonment or 50M fine).
- **Section 11 (Hate Speech):** Spreading sectarian/religious hatred online (Up to 7 years).
- **Section 24 (Cyber Stalking):** Harassment via continuous electronic communications (Up to 3 years or 1M fine).`
      },
      {
        subjectId: "english-grammar",
        title: "English Grammar, Prepositions & Vocabulary",
        icon: "fa-book-open",
        readTime: "20 min read",
        summary: "Essential rules of subject-verb agreement, common preposition traps, idiom explanations, and top high-frequency FPSC vocabulary words.",
        content: `### Key Rules of Subject-Verb Agreement (FPSC High-Yield)
1. **Rule of Proximity with Correlatives:** When subjects are joined by *either...or*, *neither...nor*, or *not only...but also*, the verb agrees with the subject **closest to it**.
   - *"Neither the inspector nor the assistant directors were present."*
   - *"Either the suspects or the investigator is mistaken."*
2. **Parenthetical Expressions:** Words introduced by *as well as*, *along with*, *together with*, *in addition to* do not alter the number of the subject.
   - *"The Director General, along with his five staff officers, has arrived."*
3. **Indefinite Pronouns:** *Each, everyone, everybody, neither, either, someone, anyone* always take a **singular verb**.

### High-Frequency Preposition Traps
- **Accuse of** (NOT with) murder / illegal gratification.
- **Abide by** (NOT with) the regulations.
- **Refrain from** (NOT of) accepting gifts.
- **Comply with** (NOT to) official directives.
- **Adjacent to** (NOT near to) the federal secretariat.
- **Deprive of** (NOT from) basic civil liberties.`
      },
      {
        subjectId: "basic-arithmetic",
        title: "Quantitative Aptitude & Basic Arithmetic",
        icon: "fa-calculator",
        readTime: "18 min read",
        summary: "Essential arithmetic formulas, percentage shortcuts, ratio-proportion tricks, work-time calculations, and average problems frequently tested by FPSC.",
        content: `### 1. Percentages and Profit/Loss Shortcuts
- **Percentage Change Formula:**
  $$\\text{Percentage Change} = \\frac{\\text{New Value} - \\text{Old Value}}{\\text{Old Value}} \\times 100$$
- **Successive Changes:** Net Change = $a + b + \\frac{ab}{100}$
- **Profit \\%:** $\\frac{SP - CP}{CP} \\times 100$ (Always on CP).

### 2. Time, Speed and Distance
- **Formula:** $\\text{Distance} = \\text{Speed} \\times \\text{Time}$
- **Conversion:** $\\text{km/h to m/s multiply by } \\frac{5}{18}$
- **Average Speed for Equal Distances:** $\\frac{2xy}{x + y}$`
      },
      {
        subjectId: "everyday-science",
        title: "Everyday Science & Technology Capsule",
        icon: "fa-atom",
        readTime: "15 min read",
        summary: "High-scoring summary of vitamins, human organs, solar system metrics, atmospheric layers, SI units, and chemical common names.",
        content: `### Key Human Physiology & Vitamins
- **Vitamin A (Retinol):** Deficiency causes Night Blindness and Xerophthalmia. Fat-soluble.
- **Vitamin B1 (Thiamine):** Deficiency causes Beriberi. Water-soluble.
- **Vitamin C (Ascorbic Acid):** Deficiency causes Scurvy and bleeding gums. Water-soluble.
- **Vitamin D (Calciferol):** Deficiency causes Rickets. Synthesized under sunlight.
- **Vitamin K:** Essential for blood clotting (prothrombin synthesis).
- **Blood Groups:** Discovered by Karl Landsteiner. O- is Universal Donor; AB+ is Universal Recipient.

### Atmospheric Layers
- **Troposphere (0-12 km):** All weather phenomena occur here.
- **Stratosphere (12-50 km):** Contains the Ozone Layer ($O_3$) absorbing UV rays.
- **Mesosphere (50-85 km):** Coldest layer ($-90^\\circ\\text{C}$); meteors burn up here.`
      }
    ],
    recommendedResources: [
      {
        title: "The Federal Investigation Agency Act, 1974 (Official Gazette)",
        type: "Statutory Law",
        description: "Official text of Act No. VIII of 1975 with all schedules and amendments.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "Anti-Money Laundering Act, 2010 (Amended Up to Sep 2020)",
        type: "Statutory Law",
        description: "Comprehensive federal anti-money laundering statute with FATF compliance amendments.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "Civil Servants Act, 1973 & E&D Rules 2020",
        type: "Civil Service Rules",
        description: "Statutory terms, appointment conditions, seniority, termination, and disciplinary proceedings.",
        fileUrl: "acts-rules.html",
        badge: "Essential",
        badgeColor: "#2563eb"
      },
      {
        title: "Prevention of Electronic Crimes Act (PECA), 2016",
        type: "Statutory Law",
        description: "Cyber crime legislation, offences against integrity of electronic systems, and cyber terrorism.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "FIA AD 20 Full-Length Sample Papers (2,000 Solved MCQs)",
        type: "Interactive Mock Bank",
        description: "20 simulated 100-mark FPSC sample papers with detailed explanations.",
        fileUrl: "fia-sample-papers.html",
        badge: "High Yield",
        badgeColor: "#059669"
      }
    ],
    practiceQuizzes: [
      {
        quizId: "fia-ad-quiz-1",
        title: "FIA Act 1974 & Legal Knowledge Quiz",
        totalQuestions: 10,
        timeMinutes: 10,
        questions: [
          {
            q: "Under Section 3(2) of the FIA Act, 1974, who appoints the Director General of the Agency?",
            options: [
              "The Prime Minister of Pakistan",
              "The Federal Government",
              "The Supreme Court of Pakistan",
              "The Ministry of Interior"
            ],
            correct: 1,
            explanation: "Section 3(2) explicitly states that the Agency shall consist of a Director General appointed by the Federal Government."
          },
          {
            q: "According to Section 4 of the FIA Act 1974, the superintendence of the Agency vests in the:",
            options: [
              "Director General",
              "Federal Government",
              "Inspector General of Police",
              "Chief Justice of Pakistan"
            ],
            correct: 1,
            explanation: "Section 4(1) states: 'The superintendence of the Agency shall vest in the Federal Government.'"
          },
          {
            q: "Under Section 5(2) of the FIA Act, 1974, which minimum rank of an FIA officer is empowered to search and seize property without a warrant during an investigation?",
            options: [
              "Assistant Sub-Inspector (ASI)",
              "Sub-Inspector (SI)",
              "Inspector",
              "Assistant Director"
            ],
            correct: 1,
            explanation: "Section 5(2) provides that any officer of the Agency not below the rank of Sub-Inspector may search and seize property."
          },
          {
            q: "The Pakistan Special Police Establishment (PSPE) Ordinance 1948 was repealed by which section of the FIA Act 1974?",
            options: ["Section 7", "Section 8", "Section 9", "Section 10"],
            correct: 2,
            explanation: "Section 9 of the FIA Act 1974 repealed the Pakistan Special Police Establishment Ordinance, 1948."
          },
          {
            q: "Under Section 4 of the Anti-Money Laundering Act (AMLA) 2010, the maximum term of rigorous imprisonment for money laundering is:",
            options: ["5 years", "7 years", "10 years", "14 years"],
            correct: 2,
            explanation: "Under Section 4 of AMLA 2010, money laundering carries rigorous imprisonment for a term not less than 1 year and up to 10 years."
          },
          {
            q: "Under PECA 2016, what is the maximum punishment for Cyber Terrorism under Section 10?",
            options: ["7 years", "10 years", "14 years", "Life imprisonment"],
            correct: 2,
            explanation: "Section 10 of PECA 2016 prescribes imprisonment which may extend to fourteen years, or fine up to 50 million rupees, or both."
          },
          {
            q: "Identify the correct preposition: 'The accused public servant was charged _____ receiving illegal gratification.'",
            options: ["with", "of", "for", "against"],
            correct: 0,
            explanation: "One is 'charged with' a crime, whereas one is 'accused of' a crime."
          },
          {
            q: "If a car travels at 72 km/h, what is its speed in meters per second (m/s)?",
            options: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"],
            correct: 1,
            explanation: "Multiply km/h by 5/18: 72 * (5/18) = 4 * 5 = 20 m/s."
          },
          {
            q: "Deficiency of which vitamin causes Scurvy?",
            options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
            correct: 2,
            explanation: "Scurvy is caused by a severe deficiency of Vitamin C (Ascorbic Acid)."
          },
          {
            q: "The Financial Monitoring Unit (FMU) under AMLA 2010 is headquartered in:",
            options: [
              "FIA Headquarters, Islamabad",
              "State Bank of Pakistan, Karachi",
              "Ministry of Finance, Islamabad",
              "Federal Board of Revenue, Islamabad"
            ],
            correct: 1,
            explanation: "The FMU was established as an autonomous body housed in the State Bank of Pakistan, Karachi."
          }
        ]
      }
    ],
    checklist: [
      { id: "fia-act-s1-10", text: "FIA Act 1974: Sections 1 to 10 & Core Powers" },
      { id: "fia-act-sched", text: "FIA Act 1974: Schedule of Offences" },
      { id: "amla-fmu", text: "AMLA 2010: Financial Monitoring Unit (FMU) & STRs" },
      { id: "amla-punish", text: "AMLA 2010: Money Laundering Offences & Penalties" },
      { id: "peca-cyber", text: "PECA 2016: Cyber Terrorism & Key Penal Provisions" },
      { id: "civil-servant-act", text: "Civil Servants Act 1973: Terms, Seniority & Dismissal" },
      { id: "ed-rules-2020", text: "Efficiency and Discipline (E&D) Rules 2020: Inquiries & Penalties" },
      { id: "eng-sub-verb", text: "English: Subject-Verb Agreement & Proximity Rules" },
      { id: "eng-prep-verbs", text: "English: High-Yield Preposition Traps & Phrasal Verbs" },
      { id: "math-pct-profit", text: "Basic Arithmetic: Percentages, Profit/Loss & Ratios" },
      { id: "math-speed-time", text: "Basic Arithmetic: Speed, Distance & Average Speeds" },
      { id: "eds-vitamins", text: "Everyday Science: Human Physiology, Vitamins & Blood" },
      { id: "eds-atmosphere", text: "Everyday Science: Atmospheric Layers & Solar System" },
      { id: "pak-affairs-cpec", text: "Pakistan Affairs: Post-1947 Constitutional History & CPEC" }
    ]
  },
  {
    id: "fia-inspector",
    title: "FIA Inspector (Investigation)",
    scale: "BS-16",
    department: "Federal Investigation Agency (Ministry of Interior)",
    cadre: "Investigation Field Cadre",
    qualification: "Second Class or Grade 'C' Bachelor's Degree (14-year education) from an HEC recognized university.",
    ageLimit: "20 - 28 years (+ 5 years general age relaxation = up to 33 years)",
    shortDescription: "Core operational investigating officer post executing field raids, arrest warrants, interrogations, and charge-sheeting under scheduled federal offences.",
    icon: "fa-user-shield",
    accentColor: "#0284c7",
    syllabus: {
      totalMarks: 100,
      totalQuestions: 100,
      timeAllowed: "100 Minutes",
      testType: "Objective Type (MCQs)",
      negativeMarking: "None (Standard FPSC)",
      passingThreshold: "50%",
      sections: [
        {
          name: "Part-I: English Grammar & Vocabulary",
          marks: 20,
          percentage: "20%",
          description: "Grammar usage, sentence completion, prepositions, antonyms and synonyms.",
          topics: [
            "Subject-Verb Agreement",
            "Prepositions & Conjunctions",
            "Active and Passive Voice",
            "Direct and Indirect Speech",
            "Synonyms & Antonyms"
          ]
        },
        {
          name: "Part-II: Professional & Legal Knowledge",
          marks: 50,
          percentage: "50%",
          description: "FIA Act 1974, criminal procedure, penal provisions, anti-smuggling, and basic evidence handling.",
          topics: [
            "FIA Act 1974 (Sections 1-10 & Schedule)",
            "PPC Sections 161-165A (Bribery & Corruption)",
            "PPC Section 409 (Criminal Breach of Trust by Public Servant)",
            "CrPC 1898: FIR, Search, Seizure & Arrest without Warrant",
            "Qanun-e-Shahadat Order 1984: Relevant facts & confessions"
          ]
        },
        {
          name: "Part-III: General Abilities (Math, Science & GK)",
          marks: 30,
          percentage: "30%",
          description: "Arithmetic percentages, fractions, everyday science capsules, and current events.",
          topics: [
            "Basic Arithmetic (Percentages, Averages, Ratios)",
            "Everyday Science (Human Body, Units of Measurement)",
            "Pakistan Affairs & Current Affairs"
          ]
        }
      ]
    },
    prepMaterial: [
      {
        subjectId: "fia-act-inspector",
        title: "FIA Act 1974 Essentials for Inspectors",
        icon: "fa-scale-balanced",
        readTime: "20 min read",
        summary: "Operational breakdown of search, seizure, arrest without warrant, and police station powers for Sub-Inspectors and Inspectors under Section 5.",
        content: `### Powers of Members of the Agency under Section 5
- **Sub-section (1):** Throughout Pakistan, members have all the powers of police officers under the CrPC 1898 in relation to scheduled offences.
- **Sub-section (2):** Officers not below **Sub-Inspector** may search any place without warrant if delay would defeat the purpose.
- **Sub-section (3):** If property is suspected to be stolen or involved in a scheduled offence, an officer not below Sub-Inspector can seize it.
- **Sub-section (5):** An officer not below Sub-Inspector authorized by DG can arrest without warrant any person concerned in a scheduled offence.`
      },
      {
        subjectId: "crpc-ppc-inspector",
        title: "CrPC & PPC Criminal Law Provisions for Field Officers",
        icon: "fa-handcuffs",
        readTime: "18 min read",
        summary: "High-yield sections of Code of Criminal Procedure (CrPC) 1898 and Pakistan Penal Code (PPC) 1860 frequently tested in Inspector exams.",
        content: `### Key CrPC Sections
- **Section 54:** Arrest without warrant by police/FIA officer in cognizable offences.
- **Section 103:** Procedure for searches in presence of two or more respectable witnesses of locality.
- **Section 154:** Recording of First Information Report (FIR) in cognizable cases.
- **Section 161:** Examination of witnesses by investigating officer.

### Key PPC Sections
- **Section 161:** Public servant taking gratification other than legal remuneration (Bribery).
- **Section 409:** Criminal breach of trust by a public servant or by banker, merchant or agent (Punishable with imprisonment for life or up to 10 years).`
      },
      {
        subjectId: "inspector-general-abilities",
        title: "General Abilities & Basic Arithmetic for BS-16",
        icon: "fa-calculator",
        readTime: "15 min read",
        summary: "Rapid formulas for percentages, profit-loss, work-time, speed calculations, and everyday science facts.",
        content: `### Percentage & Ratio Quick Hacks
- To find $15\\%$ of 240: $10\\% = 24$, $5\\% = 12$, Total = 36.
- In a ratio $3:5$, if the sum is 640: each unit is $640 / 8 = 80$, so parts are 240 and 400.
- Work done = $\\frac{1}{\\text{Days}}$. If A completes in 6 days and B in 12 days, together they take $\\frac{6 \\times 12}{6 + 12} = \\frac{72}{18} = 4$ days.`
      }
    ],
    recommendedResources: [
      {
        title: "The Federal Investigation Agency Act, 1974 (Official Gazette)",
        type: "Statutory Law",
        description: "Core statutory authority detailing officer powers, arrest procedures, and jurisdiction.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "Pakistan Penal Code (PPC) 1860 - White Collar Crime Sections",
        type: "Criminal Law",
        description: "Official statutory text of Sections 161-165A, 409, 420, 468, and 471.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "FIA Sample Papers & Mock Tests (2,000 Questions)",
        type: "Test Practice",
        description: "Comprehensive question bank with 20 sample papers.",
        fileUrl: "fia-sample-papers.html",
        badge: "Essential",
        badgeColor: "#059669"
      }
    ],
    practiceQuizzes: [
      {
        quizId: "fia-insp-quiz-1",
        title: "FIA Inspector Legal & Procedural Practice Test",
        totalQuestions: 6,
        timeMinutes: 8,
        questions: [
          {
            q: "Under Section 5(1) of the FIA Act 1974, members of the Agency derive their police powers from which procedural code?",
            options: [
              "Police Order 2002",
              "Code of Criminal Procedure (CrPC), 1898",
              "Civil Procedure Code (CPC), 1908",
              "Qanun-e-Shahadat Order, 1984"
            ],
            correct: 1,
            explanation: "Section 5(1) specifies that members have the powers of police officers under the Code of Criminal Procedure, 1898."
          },
          {
            q: "Which section of the Pakistan Penal Code (PPC) deals with Criminal Breach of Trust by a Public Servant?",
            options: ["Section 405", "Section 406", "Section 409", "Section 420"],
            correct: 2,
            explanation: "PPC Section 409 specifically penalizes criminal breach of trust committed by a public servant or banker/agent."
          },
          {
            q: "Under Section 103 of CrPC 1898, search of a place must be conducted in the presence of at least how many respectable witnesses?",
            options: ["One witness", "Two or more witnesses", "Three witnesses", "Five witnesses"],
            correct: 1,
            explanation: "Section 103 CrPC requires the presence of two or more respectable inhabitants of the locality as search witnesses."
          },
          {
            q: "If A and B can do a job in 10 and 15 days respectively, in how many days can they complete it working together?",
            options: ["5 days", "6 days", "8 days", "12 days"],
            correct: 1,
            explanation: "Formula: (10 * 15) / (10 + 15) = 150 / 25 = 6 days."
          },
          {
            q: "Choose the word opposite in meaning to 'NEPOTISM':",
            options: ["Favoritism", "Impartiality", "Bias", "Patronage"],
            correct: 1,
            explanation: "Nepotism is favoritism towards family/relatives; its antonym is impartiality or fairness."
          },
          {
            q: "Which gas is primarily responsible for the greenhouse effect on Earth?",
            options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
            correct: 2,
            explanation: "Carbon dioxide (along with water vapor and methane) is the primary greenhouse gas trapping infrared radiation."
          }
        ]
      }
    ],
    checklist: [
      { id: "insp-fia-act-powers", text: "FIA Act 1974: Section 5 Search, Seizure & Arrest Powers" },
      { id: "insp-crpc-103", text: "CrPC 1898: Search Procedure & Witness Memo Requirements" },
      { id: "insp-ppc-409", text: "PPC 1860: Sections 161, 165A & 409 Public Corruption Offences" },
      { id: "insp-eng-voice", text: "English: Active & Passive Voice Transformations" },
      { id: "insp-eng-prep", text: "English: Appropriate Prepositions with Legal Terms" },
      { id: "insp-math-ratios", text: "Arithmetic: Unitary Method, Work-Time & Ratios" },
      { id: "insp-gk-pak-affairs", text: "General Knowledge: Major Events in Pakistan History" }
    ]
  },
  {
    id: "customs-inspector",
    title: "Customs Inspector / Preventive Officer",
    scale: "BS-16",
    department: "Federal Board of Revenue (Customs Wing)",
    cadre: "Revenue & Enforcement Cadre",
    qualification: "Second Class or Grade 'C' Bachelor's degree with Economics, Commerce, Statistics, Accounting, Mathematics, Chemistry, or Physics.",
    ageLimit: "20 - 28 years (+ 5 years general age relaxation = up to 33 years)",
    shortDescription: "Enforcement officer at sea ports, dry ports, international airports, and land border customs stations responsible for tariff enforcement, anti-smuggling, and cargo assessment.",
    icon: "fa-ship",
    accentColor: "#059669",
    syllabus: {
      totalMarks: 100,
      totalQuestions: 100,
      timeAllowed: "100 Minutes",
      testType: "Objective Type (MCQs)",
      negativeMarking: "None (Standard FPSC)",
      passingThreshold: "50%",
      sections: [
        {
          name: "Part-I: English Grammar & Composition",
          marks: 20,
          percentage: "20%",
          description: "Grammar usage, vocabulary, sentence structuring, and idioms.",
          topics: [
            "Tenses & Subject-Verb Agreement",
            "Prepositions & Phrasal Verbs",
            "Synonyms & Antonyms",
            "Sentence Correction"
          ]
        },
        {
          name: "Part-II: Customs Act 1969 & Trade Procedures",
          marks: 40,
          percentage: "40%",
          description: "Customs Act 1969, smuggling offences, confiscation, goods valuation, and tariff basics.",
          topics: [
            "Customs Act 1969: Sections 1 to 35, 156 (Penalties), 158-171 (Search & Arrest)",
            "Anti-Smuggling Operations & Contraband Goods",
            "Harmonized System (HS) Codes & Pakistan Customs Tariff (PCT)",
            "Incoterms (FOB, CIF, CFR) & Bill of Lading"
          ]
        },
        {
          name: "Part-III: Basic Arithmetic & Analytical Reasoning",
          marks: 20,
          percentage: "20%",
          description: "Percentages, profit/loss, currency exchange calculations, and basic algebra.",
          topics: [
            "Percentages & Duty Calculations",
            "Ratios, Proportions & Averages",
            "Currency Conversions & Unitary Method"
          ]
        },
        {
          name: "Part-IV: General Knowledge & Current Affairs",
          marks: 20,
          percentage: "20%",
          description: "Pakistan geography, international border trade routes, sea ports, and world organizations (WTO, WCO).",
          topics: [
            "Ports of Pakistan (Karachi Port, Port Qasim, Gwadar Port)",
            "World Customs Organization (WCO) & WTO Trade Facilitation",
            "Current Affairs & Pakistan Economy"
          ]
        }
      ]
    },
    prepMaterial: [
      {
        subjectId: "customs-act-1969",
        title: "Customs Act, 1969: Key Sections & Penal Provisions",
        icon: "fa-scale-balanced",
        readTime: "22 min read",
        summary: "Essential breakdown of the Customs Act 1969 including Section 156 (Penalties Table), search without warrant (Section 162), and seizure of smuggled goods (Section 168).",
        content: `### 1. Key Definitions & Concepts
- **Section 2(s) - Smuggle:** Bringing into or taking out of Pakistan in breach of any prohibition or restriction, or evading duty on goods specified in notification.
- **Section 156 - Table of Penalties:** Contains 100+ sub-clauses prescribing penalties for customs violations ranging from fines to 14 years rigorous imprisonment.
- **Section 158 - Power to Search Persons:** Any customs officer may search any person entering or departing Pakistan.
- **Section 168 - Seizure of Goods:** Any customs officer may seize any goods liable to confiscation under this Act.
- **Section 169 - Notice of Seizure:** Notice must be served to the owner within 60 days of seizure.`
      },
      {
        subjectId: "international-trade-terms",
        title: "Incoterms, Valuation & Pakistan Customs Tariff",
        icon: "fa-boxes-packing",
        readTime: "18 min read",
        summary: "Understanding FOB vs CIF valuation, HS Codes, Bill of Entry/Goods Declaration (GD), and FBR customs clearance procedures.",
        content: `### 1. Incoterms Essentials
- **FOB (Free on Board):** Seller delivers goods on board the vessel nominated by buyer. Buyer pays ocean freight and insurance.
- **CIF (Cost, Insurance, and Freight):** Seller pays the cost of goods, marine insurance, and freight to the destination port.
- **Customs Valuation in Pakistan:** Generally assessed on **CIF value** (Cost + Freight + Insurance).

### 2. Tariff Classification (HS Codes)
- **Harmonized System (HS):** Developed by the World Customs Organization (WCO). 6-digit universal classification, extended to 8 digits in Pakistan (Pakistan Customs Tariff - PCT).`
      },
      {
        subjectId: "customs-math-arithmetic",
        title: "Customs Duty Calculations & Arithmetic Formulas",
        icon: "fa-calculator",
        readTime: "16 min read",
        summary: "Step-by-step arithmetic methods to calculate customs duty, regulatory duty, sales tax on imported consignments, and currency conversion.",
        content: `### Customs Valuation Formula
1. **Assessed Value (PKR) = CIF Value (USD) * National Bank Exchange Rate**
2. **Customs Duty (CD) = Assessed Value * CD Rate %**
3. **Regulatory Duty (RD) = Assessed Value * RD Rate %**
4. **Sales Tax Base = Assessed Value + CD + RD**
5. **Sales Tax = Sales Tax Base * 18%**`
      }
    ],
    recommendedResources: [
      {
        title: "The Customs Act, 1969 (Updated Gazette)",
        type: "Statutory Law",
        description: "Official text of Act IV of 1969 with up-to-date amendments and Section 156 penalties table.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "Pakistan Customs Tariff (PCT) & HS Code Handbook",
        type: "Technical Guide",
        description: "Classification of goods, import trade regulations, and valuation guidelines.",
        fileUrl: "digital-library.html",
        badge: "Essential",
        badgeColor: "#2563eb"
      },
      {
        title: "World Customs Organization (WCO) Safe Framework & Incoterms 2020",
        type: "Trade Rules",
        description: "International cargo security standards, Incoterms reference, and customs clearance procedures.",
        fileUrl: "digital-library.html",
        badge: "High Yield",
        badgeColor: "#059669"
      }
    ],
    practiceQuizzes: [
      {
        quizId: "customs-quiz-1",
        title: "Customs Act 1969 & Trade Operations Test",
        totalQuestions: 6,
        timeMinutes: 8,
        questions: [
          {
            q: "Under the Customs Act 1969, which section contains the comprehensive Table of Offences and Penalties?",
            options: ["Section 139", "Section 156", "Section 168", "Section 179"],
            correct: 1,
            explanation: "Section 156 of the Customs Act 1969 is the central penal schedule listing offences and punishments."
          },
          {
            q: "Under Incoterms 2020, what does 'CIF' stand for?",
            options: [
              "Customs, Import and Freight",
              "Cost, Insurance, and Freight",
              "Cargo Inspection Fee",
              "Cleared Import Facilitation"
            ],
            correct: 1,
            explanation: "CIF stands for Cost, Insurance, and Freight to the named port of destination."
          },
          {
            q: "Under Section 168 of the Customs Act 1969, within how many days must a show-cause notice be served after seizing goods?",
            options: ["15 days", "30 days", "60 days", "90 days"],
            correct: 2,
            explanation: "Notice must be given within 60 days of seizure, extendable by the Collector of Customs."
          },
          {
            q: "The World Customs Organization (WCO) headquarters is located in:",
            options: ["Geneva, Switzerland", "Brussels, Belgium", "Vienna, Austria", "London, UK"],
            correct: 1,
            explanation: "The WCO was established as the Customs Co-operation Council in Brussels, Belgium."
          },
          {
            q: "If an imported consignment has a CIF value of $10,000 and the exchange rate is 1 USD = 280 PKR, what is the assessed value in PKR?",
            options: ["2,800,000 PKR", "280,000 PKR", "28,000,000 PKR", "1,400,000 PKR"],
            correct: 0,
            explanation: "10,000 * 280 = 2,800,000 PKR."
          },
          {
            q: "Which seaport is Pakistan's premier deep-sea warm-water port situated on the Arabian Sea in Balochistan?",
            options: ["Port Qasim", "Karachi Port", "Gwadar Port", "Keti Bandar"],
            correct: 2,
            explanation: "Gwadar Port is Pakistan's warm-water, deep-sea port developed under CPEC."
          }
        ]
      }
    ],
    checklist: [
      { id: "cust-sec156-penalties", text: "Customs Act 1969: Section 156 Offences & Penalties Table" },
      { id: "cust-search-seizure", text: "Customs Act 1969: Sections 158-171 Search, Seizure & Arrest" },
      { id: "cust-incoterms", text: "Incoterms 2020: FOB, CIF, CFR & Valuation Rules" },
      { id: "cust-hs-codes", text: "WCO Harmonized System (HS) Codes & 8-Digit PCT Structure" },
      { id: "cust-duty-calc", text: "Arithmetic: Calculation of Customs Duty & Sales Tax Base" },
      { id: "cust-ports-geography", text: "Pakistan Geography: Seaports, Dry Ports & Border Customs Stations" },
      { id: "cust-eng-grammar", text: "English: Prepositions, Vocabulary & Sentence Correction" }
    ]
  },
  {
    id: "aao-audit",
    title: "Assistant Audit Officer (AAO)",
    scale: "BS-17",
    department: "Department of the Auditor General of Pakistan (DAGP)",
    cadre: "Audit & Accounts Cadre",
    qualification: "Second Class Master's or 16-Year BS Degree in Commerce, Accounting, Finance, Economics, Statistics, Business Administration, or ICMA/CA Inter.",
    ageLimit: "22 - 28 years (+ 5 years general age relaxation = up to 33 years)",
    shortDescription: "Constitutional oversight officer auditing federal and provincial government departments, public sector enterprises, defence accounts, and revenue collections under the Auditor General of Pakistan.",
    icon: "fa-file-invoice-dollar",
    accentColor: "#f59e0b",
    syllabus: {
      totalMarks: 100,
      totalQuestions: 100,
      timeAllowed: "100 Minutes",
      testType: "Objective Type (MCQs)",
      negativeMarking: "None (Standard FPSC)",
      passingThreshold: "50%",
      sections: [
        {
          name: "Part-I: English Grammar & Composition",
          marks: 20,
          percentage: "20%",
          description: "Vocabulary, grammar usage, sentence structuring, and comprehension.",
          topics: [
            "Tenses & Subject-Verb Agreement",
            "Prepositions & Phrasal Verbs",
            "Direct & Indirect Narration",
            "Business Vocabulary & Antonyms"
          ]
        },
        {
          name: "Part-II: Financial Accounting & Auditing",
          marks: 40,
          percentage: "40%",
          description: "Accounting principles, ledgers, depreciation, auditing standards, internal control, and vouching.",
          topics: [
            "Accounting Cycle (Journal, Ledger, Trial Balance, Final Accounts)",
            "Bank Reconciliation Statements & Depreciation Methods",
            "Auditing Concepts, Types of Audit (Financial, Compliance, Performance)",
            "Audit Evidence, Working Papers & Vouching"
          ]
        },
        {
          name: "Part-III: PPRA Rules 2004 & General Financial Rules (GFR)",
          marks: 20,
          percentage: "20%",
          description: "Public procurement procedures, bidding types, GFR financial powers, and budgetary control.",
          topics: [
            "Public Procurement Regulatory Authority (PPRA) Rules 2004",
            "General Financial Rules (GFR) Vol I & II",
            "Auditor General's Ordinance, 2001 (Functions & Powers)"
          ]
        },
        {
          name: "Part-IV: Basic Arithmetic & Analytical Reasoning",
          marks: 20,
          percentage: "20%",
          description: "Percentages, profit and loss, interest calculations, and numerical series.",
          topics: [
            "Simple & Compound Interest",
            "Percentages, Ratios & Proportions",
            "Analytical Deductions & Logical Reasoning"
          ]
        }
      ]
    },
    prepMaterial: [
      {
        subjectId: "accounting-auditing-principles",
        title: "Financial Accounting & Auditing Principles",
        icon: "fa-calculator",
        readTime: "24 min read",
        summary: "Comprehensive guide to double-entry accounting, accrual vs cash basis, auditing standards, vouching, and internal control evaluation.",
        content: `### 1. Fundamental Accounting Concepts
- **Accrual Basis vs Cash Basis:** Under accrual basis, revenue is recognized when earned and expenses when incurred, regardless of cash receipt. Government accounting in Pakistan is transitioning towards modified accrual under NAM (New Accounting Model).
- **Matching Principle:** Expenses incurred in an accounting period must be matched against revenues earned in that same period.
- **Depreciation Methods:**
  - **Straight-Line:** $\\frac{\\text{Cost} - \\text{Residual Value}}{\\text{Useful Life}}$
  - **Diminishing Balance:** Depreciation rate applied to reducing book value.

### 2. Auditing Essentials
- **Definition:** Independent examination of financial records and statements to express an opinion on whether they present a true and fair view.
- **Types of Government Audit:**
  - **Financial Audit:** Examination of financial statements against accounting frameworks.
  - **Compliance Audit:** Verifying whether transactions comply with rules, laws, and regulations.
  - **Performance Audit (3Es):** Evaluating Economy, Efficiency, and Effectiveness of public expenditure.`
      },
      {
        subjectId: "ppra-gfr-rules",
        title: "PPRA Rules 2004 & Public Financial Management",
        icon: "fa-scale-balanced",
        readTime: "20 min read",
        summary: "Critical rules of PPRA 2004 (Bidding, Tender Notice, Response Time, Blacklisting) and General Financial Rules (GFR) for public expenditure.",
        content: `### 1. PPRA Rules, 2004 High-Yield Rules
- **Rule 12 (Method of Advertisement):** Procurements over 500,000 PKR up to 3 million PKR must be advertised on PPRA website. Procurements over 3 million PKR must be advertised on PPRA website and in at least two national daily newspapers (one Urdu, one English).
- **Rule 13 (Response Time):** Minimum 15 calendar days for national competitive bidding; minimum 30 calendar days for international competitive bidding.
- **Rule 36 (Bidding Procedures):**
  - Single Stage - One Envelope: Routine goods.
  - Single Stage - Two Envelopes: Separate technical and financial bids.
  - Two Stage Bidding: Complex technical solutions.

### 2. Auditor General's Ordinance, 2001
- Article 168-171 of Constitution of Pakistan establishes the Auditor General as an independent constitutional office.
- Ordinance 2001 empowers AGP to inspect any office, demand books, papers, and cash balances for audit.`
      },
      {
        subjectId: "aao-math-interest",
        title: "Financial Arithmetic: Interest, Annuity & Depreciation",
        icon: "fa-percent",
        readTime: "15 min read",
        summary: "Formulas and shortcuts for simple interest, compound interest, discounted present value, and business ratios.",
        content: `### Key Formulas
- **Simple Interest (SI):** $SI = \\frac{P \\times R \\times T}{100}$
- **Compound Interest (CI):** $A = P \\left(1 + \\frac{R}{100}\\right)^T \\quad | \\quad CI = A - P$
- **Current Ratio:** $\\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$ (Ideal benchmark: 2:1).
- **Quick Ratio (Acid-Test):** $\\frac{\\text{Current Assets} - \\text{Inventory}}{\\text{Current Liabilities}}$ (Ideal benchmark: 1:1).`
      }
    ],
    recommendedResources: [
      {
        title: "Auditor General's Ordinance, 2001 & Constitutional Articles 168-171",
        type: "Constitutional Law",
        description: "Statutory basis of the Auditor General of Pakistan and supreme audit institution mandates.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "Public Procurement Rules (PPRA), 2004 (Official Text)",
        type: "Procurement Law",
        description: "Official federal procurement regulations, tender requirements, and evaluation rules.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "General Financial Rules (GFR) Vol-I & II (Federal Government)",
        type: "Financial Regulations",
        description: "Principles of financial propriety, budgetary sanctions, and audit compliance.",
        fileUrl: "digital-library.html",
        badge: "Essential",
        badgeColor: "#2563eb"
      }
    ],
    practiceQuizzes: [
      {
        quizId: "aao-quiz-1",
        title: "Accounting, Auditing & PPRA Rules Practice Test",
        totalQuestions: 6,
        timeMinutes: 8,
        questions: [
          {
            q: "Under PPRA Rules 2004, what is the minimum response time allowed for national competitive bidding from the date of advertisement?",
            options: ["7 days", "10 days", "15 days", "30 days"],
            correct: 2,
            explanation: "Rule 13 of PPRA Rules 2004 mandates a minimum response time of 15 calendar days for national competitive bidding."
          },
          {
            q: "Which constitutional article in the 1973 Constitution of Pakistan mandates the appointment of the Auditor General of Pakistan?",
            options: ["Article 153", "Article 168", "Article 175", "Article 213"],
            correct: 1,
            explanation: "Article 168 provides for the appointment, terms, and conditions of the Auditor General of Pakistan."
          },
          {
            q: "What are the '3Es' evaluated during a Performance Audit?",
            options: [
              "Equity, Equality, Ethics",
              "Economy, Efficiency, Effectiveness",
              "Expenditure, Estimation, Execution",
              "Evidence, Examination, Explanation"
            ],
            correct: 1,
            explanation: "Performance auditing evaluates public spending against Economy, Efficiency, and Effectiveness."
          },
          {
            q: "The process of verifying documentary evidence in support of transactions recorded in the books of accounts is called:",
            options: ["Posting", "Vouching", "Ledgering", "Balancing"],
            correct: 1,
            explanation: "Vouching is the inspection of documentary evidence (vouchers, invoices, receipts) supporting recorded transactions."
          },
          {
            q: "Calculate the Simple Interest on a principal of 50,000 PKR at 8% per annum for 3 years:",
            options: ["10,000 PKR", "12,000 PKR", "14,000 PKR", "15,000 PKR"],
            correct: 1,
            explanation: "SI = (P * R * T) / 100 = (50,000 * 8 * 3) / 100 = 12,000 PKR."
          },
          {
            q: "Which financial statement reports a firm's financial position at a specific point in time?",
            options: [
              "Income Statement",
              "Cash Flow Statement",
              "Balance Sheet",
              "Statement of Retained Earnings"
            ],
            correct: 2,
            explanation: "The Balance Sheet reports assets, liabilities, and equity as of a specific date."
          }
        ]
      }
    ],
    checklist: [
      { id: "aao-agp-ordinance", text: "Auditor General's Ordinance 2001 & Articles 168-171" },
      { id: "aao-ppra-procure", text: "PPRA Rules 2004: Advertisement Thresholds & Response Times" },
      { id: "aao-gfr-propriety", text: "GFR: Cannons of Financial Propriety & Sanction Powers" },
      { id: "aao-audit-types", text: "Auditing: Financial, Compliance & Performance (3Es) Audit" },
      { id: "aao-vouching-evidence", text: "Audit Evidence: Working Papers, Vouching & Internal Control" },
      { id: "aao-accounting-cycle", text: "Financial Accounting: Double-entry, Depreciation & Ratios" },
      { id: "aao-financial-math", text: "Arithmetic: Simple & Compound Interest Calculations" }
    ]
  },
  {
    id: "nab-ad",
    title: "NAB Assistant Director",
    scale: "BS-17",
    department: "National Accountability Bureau (NAB)",
    cadre: "Investigation / Anti-Corruption Cadre",
    qualification: "Second Class Master's or 16-Year BS Degree in Law, Criminology, Business Admin, Public Admin, Economics, Accounting, or ICMA/CA.",
    ageLimit: "22 - 28 years (+ 5 years general age relaxation = up to 33 years)",
    shortDescription: "Specialized anti-corruption investigator probing mega-scandals, misuse of official authority, benami assets, and white-collar embezzlement under the National Accountability Ordinance (NAO) 1999.",
    icon: "fa-landmark",
    accentColor: "#dc2626",
    syllabus: {
      totalMarks: 100,
      totalQuestions: 100,
      timeAllowed: "100 Minutes",
      testType: "Objective Type (MCQs)",
      negativeMarking: "None (Standard FPSC)",
      passingThreshold: "50%",
      sections: [
        {
          name: "Part-I: English Grammar & Vocabulary",
          marks: 20,
          percentage: "20%",
          description: "Grammar usage, vocabulary, sentence structuring, and comprehension.",
          topics: [
            "Tenses & Subject-Verb Agreement",
            "Prepositions & Phrasal Verbs",
            "Synonyms & Antonyms",
            "Sentence Correction"
          ]
        },
        {
          name: "Part-II: National Accountability Ordinance (NAO) 1999",
          marks: 40,
          percentage: "40%",
          description: "NAO 1999 core provisions, definitions of corruption, powers of arrest, plea bargain, and voluntary return.",
          topics: [
            "NAO 1999: Sections 1 to 24 (Powers of Chairman, Inquiries & Investigations)",
            "Section 9: Corruption and Corrupt Practices Definition",
            "Section 25: Voluntary Return (VR) and Plea Bargain (PB)",
            "Benami Transactions & Asset Disproportionate to Known Sources",
            "Anti-Money Laundering Act 2010 (Scheduled Offences)"
          ]
        },
        {
          name: "Part-III: Forensic Investigation & Financial Analysis",
          marks: 20,
          percentage: "20%",
          description: "Bank transactions, shell corporations, Hawala/Hundi, and audit trail analysis.",
          topics: [
            "Financial Statement Fraud & Money Laundering Stages (Placement, Layering, Integration)",
            "Bank Records Examination & Benami Asset Tracing",
            "Digital Forensics & Paper Trail Reconstruction"
          ]
        },
        {
          name: "Part-IV: General Abilities & Current Affairs",
          marks: 20,
          percentage: "20%",
          description: "Basic arithmetic, Pakistan governance, transparency indices, and international conventions (UNCAC).",
          topics: [
            "Basic Arithmetic (Percentages, Averages, Ratios)",
            "United Nations Convention Against Corruption (UNCAC)",
            "Current Affairs & Governance Reforms in Pakistan"
          ]
        }
      ]
    },
    prepMaterial: [
      {
        subjectId: "nao-1999-essentials",
        title: "National Accountability Ordinance (NAO) 1999",
        icon: "fa-scale-balanced",
        readTime: "24 min read",
        summary: "In-depth breakdown of NAO 1999, Section 9 (Corrupt Practices), Section 25 (Voluntary Return & Plea Bargain), and Accountability Court trial mechanisms.",
        content: `### 1. Key Concepts under NAO 1999
- **Preamble:** Promulgated on 16th November 1999 to eradicate corruption and corrupt practices and hold accountable those accused of misappropriating public assets.
- **Section 9(a) - Definition of Corruption:** Includes accepting illegal gratification, acquiring assets disproportionate to known sources of income, cheating public at large, and misuse of official authority.
- **Section 25 - Voluntary Return and Plea Bargain:**
  - **Section 25(a) - Voluntary Return (VR):** Accused offers to return embezzled money prior to authorization of investigation.
  - **Section 25(b) - Plea Bargain (PB):** Entered after investigation commences, approved by Accountability Court. Deemed convicted; disqualified from holding public office for 10 years.`
      },
      {
        subjectId: "financial-forensics-nab",
        title: "Financial Forensic Investigation & Benami Tracing",
        icon: "fa-fingerprint",
        readTime: "18 min read",
        summary: "How white-collar corruption is tracked through money laundering stages, offshore companies, Benami accounts, and hawala banking.",
        content: `### 1. The Three Stages of Money Laundering
1. **Placement:** Introducing dirty cash into the legitimate financial system (e.g. smurfing, structuring bank deposits below CTR threshold).
2. **Layering:** Creating complex layers of financial transactions (wire transfers across jurisdictions, shell companies) to obscure the audit trail.
3. **Integration:** Re-investing laundered funds into the economy appearing as clean, legal wealth (real estate, luxury assets).

### 2. Benami Transactions Prohibition Act, 2017
- A transaction where property is held by one person (Benamidar) but consideration is paid by another (Beneficial Owner).`
      },
      {
        subjectId: "nab-english-quant",
        title: "Legal English & Quantitative Reasoning for NAB Exams",
        icon: "fa-pen-fancy",
        readTime: "16 min read",
        summary: "High-yield vocabulary words (graft, venal, malfeasance, kickback), error spotting, and arithmetic percentage problems.",
        content: `### High-Yield Anti-Corruption Vocabulary
- **Graft:** Practices, especially bribery, used to secure illicit gains in politics or business.
- **Venal:** Open to bribery or corruptible.
- **Malfeasance:** Wrongdoing or improper conduct by a public official.
- **Exculpate:** Show or declare that someone is not guilty of wrongdoing.
- **Peculation:** Embezzlement or theft of public money.`
      }
    ],
    recommendedResources: [
      {
        title: "National Accountability Ordinance (NAO), 1999 (Amended)",
        type: "Statutory Law",
        description: "Official statutory text with Section 9 corruption definitions and trial procedures.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "Benami Transactions (Prohibition) Act, 2017",
        type: "Statutory Law",
        description: "Statutory framework for identifying benamidars, attachment, and confiscation.",
        fileUrl: "digital-library.html",
        badge: "Essential",
        badgeColor: "#2563eb"
      },
      {
        title: "United Nations Convention Against Corruption (UNCAC)",
        type: "International Treaty",
        description: "Global anti-corruption benchmarks, asset recovery provisions, and extradition.",
        fileUrl: "digital-library.html",
        badge: "High Yield",
        badgeColor: "#059669"
      }
    ],
    practiceQuizzes: [
      {
        quizId: "nab-quiz-1",
        title: "NAO 1999 & Anti-Corruption Investigation Test",
        totalQuestions: 6,
        timeMinutes: 8,
        questions: [
          {
            q: "Under Section 25(b) of NAO 1999, a Plea Bargain agreement must be formally approved by the:",
            options: [
              "Chairman NAB",
              "President of Pakistan",
              "Accountability Court",
              "Supreme Court of Pakistan"
            ],
            correct: 2,
            explanation: "Section 25(b) requires the Plea Bargain to be approved by the Accountability Court."
          },
          {
            q: "What is the disqualification period from holding public office or applying for bank loans after entering a Plea Bargain under NAO 1999?",
            options: ["3 years", "5 years", "10 years", "Permanent disqualification"],
            correct: 2,
            explanation: "Under Section 15 of NAO 1999, an accused who enters a plea bargain is disqualified for 10 years."
          },
          {
            q: "Which stage of money laundering involves distancing illegal proceeds from their source by creating complex financial transactions?",
            options: ["Placement", "Layering", "Integration", "Extraction"],
            correct: 1,
            explanation: "Layering is the second stage, designed to obscure the audit trail through multiple transfers."
          },
          {
            q: "The United Nations Convention Against Corruption (UNCAC) was adopted by the UN General Assembly in which year?",
            options: ["1999", "2001", "2003", "2005"],
            correct: 2,
            explanation: "UNCAC was adopted by the UN General Assembly on 31 October 2003 and entered into force in December 2005."
          },
          {
            q: "Choose the synonym of 'MALFEASANCE':",
            options: ["Benevolence", "Misconduct", "Obedience", "Incompetence"],
            correct: 1,
            explanation: "Malfeasance means wrongful conduct or wrongdoing, especially by a public official."
          },
          {
            q: "If an official's declared income was 10 million PKR but his discovered assets equal 45 million PKR, what is the percentage of unexplained wealth?",
            options: ["70%", "77.78%", "350%", "450%"],
            correct: 2,
            explanation: "Unexplained wealth = 35 million. As a percentage of declared income: (35 / 10) * 100 = 350%."
          }
        ]
      }
    ],
    checklist: [
      { id: "nab-sec9-corruption", text: "NAO 1999: Section 9 Corrupt Practices Definition & Disproportionate Assets" },
      { id: "nab-sec25-plea", text: "NAO 1999: Section 25 Voluntary Return vs Plea Bargain Consequences" },
      { id: "nab-benami-act", text: "Benami Transactions Prohibition Act 2017: Benamidar & Confiscation" },
      { id: "nab-money-laundering", text: "Forensic Investigation: Placement, Layering, Integration & Shell Companies" },
      { id: "nab-uncac", text: "UNCAC: International Asset Recovery & Mutual Legal Assistance" },
      { id: "nab-legal-vocab", text: "English: High-Yield Anti-Corruption Vocabulary & Correction" }
    ]
  },
  {
    id: "mod-ad",
    title: "MOD Assistant Director",
    scale: "BS-17",
    department: "Ministry of Defence (Inter-Services Intelligence / DG ISI Cadre)",
    cadre: "Strategic Intelligence & Analysis Cadre",
    qualification: "Second Class Master's or 16-Year BS Degree in any discipline from an HEC recognized university.",
    ageLimit: "22 - 28 years (+ 5 years general age relaxation = up to 33 years)",
    shortDescription: "National security intelligence officer conducting geopolitical analysis, counter-intelligence, strategic assessment, and national security forecasting.",
    icon: "fa-user-secret",
    accentColor: "#334155",
    syllabus: {
      totalMarks: 100,
      totalQuestions: 100,
      timeAllowed: "100 Minutes",
      testType: "Objective Type (MCQs)",
      negativeMarking: "None (Standard MOD Screening)",
      passingThreshold: "50%",
      sections: [
        {
          name: "Part-I: English Grammar, Precis & Critical Reading",
          marks: 20,
          percentage: "20%",
          description: "Advanced vocabulary, sentence completion, reading comprehension, and logical deduction from text.",
          topics: [
            "Advanced GRE-Level Vocabulary",
            "Critical Sentence Completion",
            "Reading Comprehension & Inference",
            "Grammar & Idiomatic Expressions"
          ]
        },
        {
          name: "Part-II: Analytical Reasoning & Logical Puzzles",
          marks: 30,
          percentage: "30%",
          description: "Seating arrangements, logic games, coding-decoding, syllogisms, and sequence deduction.",
          topics: [
            "Linear & Circular Seating Puzzles",
            "Grouping & Conditional Selection",
            "Syllogisms & Deductive Arguments",
            "Blood Relations & Direction Sense"
          ]
        },
        {
          name: "Part-III: Strategic Affairs & National Security",
          marks: 30,
          percentage: "30%",
          description: "South Asian nuclear deterrence, hybrid warfare, CPEC security, Kashmir dispute, and global intelligence agencies.",
          topics: [
            "Pakistan's National Security Framework & Strategic Doctrines",
            "Nuclear Deterrence, Full Spectrum Deterrence (FSD) & NCAs",
            "Global Intelligence Agencies (CIA, MI6, Mossad, RAW, FSB)",
            "Hybrid Warfare, Cyber Warfare & Asymmetric Threats"
          ]
        },
        {
          name: "Part-IV: Everyday Science & Quantitative Ability",
          marks: 20,
          percentage: "20%",
          description: "Basic arithmetic, geometry, environmental science, and defense technology.",
          topics: [
            "Percentages, Averages, Speed & Distance",
            "Missile Technology, Radar Systems & Satellite Orbits",
            "Basic Physics, Chemistry & Space Exploration"
          ]
        }
      ]
    },
    prepMaterial: [
      {
        subjectId: "analytical-reasoning-mod",
        title: "Analytical Reasoning & Intelligence Methods",
        icon: "fa-brain",
        readTime: "25 min read",
        summary: "Systematic frameworks to solve analytical seating puzzles, grouping conditions, syllogisms, and spatial reasoning problems.",
        content: `### 1. Framework for Seating & Grouping Puzzles
1. **Represent Fixed Information First:** Draw a linear grid or circular clock diagram and place deterministic conditions.
2. **Handle Negative Rules:** Mark prohibited adjacent pairs explicitly (e.g., $A \\neq B$).
3. **Link Relative Chains:** Combine conditional statements ($X$ sits two places to the left of $Y$).

### 2. Syllogistic Deductions
- Universal Affirmative (All A are B) + Particular Affirmative (Some B are C) $\\implies$ No definite conclusion connecting A and C directly without an overlapping middle term.`
      },
      {
        subjectId: "national-security-geopolitics",
        title: "National Security Doctrines & South Asian Geopolitics",
        icon: "fa-shield-halved",
        readTime: "22 min read",
        summary: "Pakistan's Full Spectrum Deterrence (FSD), National Command Authority (NCA) structure, hybrid warfare vectors, and maritime security.",
        content: `### 1. Strategic Deterrence Architecture
- **National Command Authority (NCA):** Established in 2000, responsible for policy formulation and command & control over Pakistan's strategic nuclear assets. Chaired by the Prime Minister.
- **Strategic Plans Division (SPD):** Acts as the secretariat of the NCA, managing security and operational custody.
- **Full Spectrum Deterrence (FSD):** Developed to deter all forms of aggression across tactical (NASR short-range ballistic missile), operational, and strategic levels.

### 2. Major Global Intelligence Agencies
- **Pakistan:** Inter-Services Intelligence (ISI) - Formed 1948 by Maj Gen Robert Cawthome.
- **USA:** Central Intelligence Agency (CIA) - Created 1947 by National Security Act.
- **UK:** Secret Intelligence Service (SIS / MI6).
- **Israel:** Mossad (Institute for Intelligence and Special Operations) - Formed 1949.
- **India:** Research and Analysis Wing (RAW) - Formed 1968.`
      },
      {
        subjectId: "mod-quantitative-science",
        title: "Defence Technology, Radar & Quantitative Aptitude",
        icon: "fa-satellite",
        readTime: "16 min read",
        summary: "Missile flight profiles (ballistic vs cruise), radar frequencies, stealth technology, satellite orbits (LEO, GEO), and numerical shortcuts.",
        content: `### 1. Missile Profiles & Defence Technology
- **Ballistic Missiles:** Follow a sub-orbital parabolic trajectory guided during powered flight, unpowered during re-entry (e.g. Shaheen, Ghauri).
- **Cruise Missiles:** Jet-propelled, fly within the atmosphere at low altitudes hugging terrain, continuously guided (e.g. Babur, Ra'ad).
- **Satellite Orbits:**
  - **Low Earth Orbit (LEO):** 160 km to 2,000 km altitude; used for reconnaissance, earth observation.
  - **Geostationary Orbit (GEO):** Approx. 35,786 km above the equator; orbital period matches Earth's rotation (24 hours).`
      }
    ],
    recommendedResources: [
      {
        title: "Constitution of Pakistan (Provisions on Defence & Armed Forces)",
        type: "Constitutional Law",
        description: "Articles 243-245 governing command of the Armed Forces and calling in aid of civil power.",
        fileUrl: "digital-library.html",
        badge: "Mandatory",
        badgeColor: "#dc2626"
      },
      {
        title: "National Command Authority (NCA) Act, 2010",
        type: "Strategic Statute",
        description: "Statutory framework of Pakistan's strategic nuclear command and control architecture.",
        fileUrl: "digital-library.html",
        badge: "Essential",
        badgeColor: "#2563eb"
      },
      {
        title: "South Asian Geopolitics & Hybrid Warfare Dossier",
        type: "Intelligence Briefing",
        description: "Fifth-generation warfare (5GW), information operations, and cross-border security dynamics.",
        fileUrl: "digital-library.html",
        badge: "High Yield",
        badgeColor: "#059669"
      }
    ],
    practiceQuizzes: [
      {
        quizId: "mod-quiz-1",
        title: "MOD Strategic & Analytical Intelligence Test",
        totalQuestions: 6,
        timeMinutes: 8,
        questions: [
          {
            q: "Who serves as the Chairman of the National Command Authority (NCA) of Pakistan?",
            options: [
              "The President of Pakistan",
              "The Prime Minister of Pakistan",
              "The Chief of Army Staff",
              "The Chairman Joint Chiefs of Staff Committee"
            ],
            correct: 1,
            explanation: "The Prime Minister of Pakistan is the Chairman of the National Command Authority under the NCA Act 2010."
          },
          {
            q: "What is the primary operational difference between a Cruise Missile and a Ballistic Missile?",
            options: [
              "Cruise missiles fly at supersonic speeds in space, while ballistic missiles fly low.",
              "Cruise missiles are jet-propelled and remain within the atmosphere, while ballistic missiles follow a sub-orbital rocket trajectory.",
              "Ballistic missiles cannot carry conventional warheads.",
              "Cruise missiles are unguided throughout flight."
            ],
            correct: 1,
            explanation: "Cruise missiles are continuously powered and navigate low through the atmosphere, whereas ballistic missiles follow an unpowered parabolic flight path."
          },
          {
            q: "The Inter-Services Intelligence (ISI) of Pakistan was founded in which year?",
            options: ["1947", "1948", "1951", "1958"],
            correct: 1,
            explanation: "The ISI was established in 1948 by Major General Robert Cawthome."
          },
          {
            q: "A satellite in Geostationary Orbit (GEO) orbits Earth at approximately what altitude above the equator?",
            options: ["2,000 km", "12,500 km", "35,786 km", "100,000 km"],
            correct: 2,
            explanation: "Geostationary satellites orbit at approximately 35,786 kilometers (approx. 22,236 miles) above Earth's equator."
          },
          {
            q: "Analytical Puzzle: If all operatives are tactically trained, and some tactically trained individuals are linguists, which statement must be true?",
            options: [
              "All operatives are linguists.",
              "Some operatives may be linguists.",
              "No operative is a linguist.",
              "All linguists are operatives."
            ],
            correct: 1,
            explanation: "Because only 'some' tactically trained individuals are linguists, there is an overlap possibility, making 'Some operatives may be linguists' the only valid deduction."
          },
          {
            q: "Choose the word most nearly opposite in meaning to 'ESOTERIC':",
            options: ["Arcane", "Obscure", "Familiar", "Abstruse"],
            correct: 2,
            explanation: "Esoteric means understood by only a small, specialized group; its antonym is familiar, common, or accessible."
          }
        ]
      }
    ],
    checklist: [
      { id: "mod-analytical-puzzles", text: "Analytical Reasoning: Linear & Circular Seating Puzzles" },
      { id: "mod-nca-structure", text: "Strategic Security: National Command Authority & SPD Framework" },
      { id: "mod-fsd-doctrine", text: "Nuclear Deterrence: Full Spectrum Deterrence (FSD) in South Asia" },
      { id: "mod-intel-agencies", text: "Intelligence History: Mandate of ISI, CIA, MI6, Mossad & RAW" },
      { id: "mod-hybrid-5gw", text: "Modern Warfare: Hybrid Warfare, Cyber Espionage & Information Ops" },
      { id: "mod-missile-tech", text: "Defence Tech: Cruise vs Ballistic Missiles & Satellite Orbits" },
      { id: "mod-adv-vocab", text: "English: GRE-Level Critical Vocabulary & Reading Comprehension" }
    ]
  }
];

const jsOutput = `/**
 * Complete Recruitment Test Preparation Hub Data Module
 * Contains official syllabi, subject-wise study notes, recommended resources,
 * practice quizzes, mock exam configurations, and checklist data for top competitive posts.
 */

const RECRUITMENT_JOBS_DATA = ${JSON.stringify(recruitmentJobs, null, 2)};

if (typeof window !== 'undefined') {
  window.RECRUITMENT_JOBS_DATA = RECRUITMENT_JOBS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RECRUITMENT_JOBS_DATA;
}
`;

fs.writeFileSync(targetPath, jsOutput, 'utf8');
console.log(`Successfully generated ${targetPath} with ${recruitmentJobs.length} rich recruitment job profiles!`);
