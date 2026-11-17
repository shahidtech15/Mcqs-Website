const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../frontend/js/data_digital_library.js');
let content = fs.readFileSync(filePath, 'utf8');

// Downloadable PDFs dataset
const downloadablePdfs = [
  {
    id: "pdf-10k-gk",
    title: "10,000 General Knowledge Questions & Answers Compendium",
    category: "General Knowledge",
    fileSize: "1.07 MB",
    pages: "220+ Pages",
    fileName: "10000_gk_qa.pdf",
    filePath: "resources/10000_gk_qa.pdf",
    description: "Exhaustive question bank covering world geography, historic treaties, scientific discoveries, UN organizations, heads of states, and international awards. Crucial for FPSC, PPSC, and NTS screening tests.",
    tags: ["GK", "World Geography", "History", "FPSC", "PPSC"]
  },
  {
    id: "pdf-5k-exam",
    title: "5,000 High-Yield Competitive Examination MCQs Bank",
    category: "Screening & One-Paper MCQs",
    fileSize: "1.18 MB",
    pages: "180+ Pages",
    fileName: "5000_mcqs_exam.pdf",
    filePath: "resources/5000_mcqs_exam.pdf",
    description: "Curated multi-subject MCQ compendium encompassing Pakistan Affairs, Everyday Science, Islamiyat, and Current Events formatted for rapid revision before competitive screening exams.",
    tags: ["High-Yield", "Screening Tests", "Pakistan Affairs", "Science"]
  },
  {
    id: "pdf-eng-1k-repeated",
    title: "1,000 Most Repeated English Grammar, Idioms & Prepositions",
    category: "English Précis & Composition",
    fileSize: "1.99 MB",
    pages: "150+ Pages",
    fileName: "english_1000_repeated.pdf",
    filePath: "resources/english_1000_repeated.pdf",
    description: "Top 1,000 past-paper questions from CSS, PMS, and FIA examinations on preposition usage, subject-verb agreement, idioms, phrasal verbs, and sentence correction rules.",
    tags: ["English", "Grammar", "Prepositions", "Idioms", "Past Papers"]
  },
  {
    id: "pdf-gen-sci-capsule",
    title: "General Science & Ability Complete Capsule Notes",
    category: "General Science & Ability",
    fileSize: "1.32 MB",
    pages: "110+ Pages",
    fileName: "General_Science_Capsule_Notes.pdf",
    filePath: "resources/General_Science_Capsule_Notes.pdf",
    description: "Systematic revision guide covering physical sciences, astronomy, atmospheric layers, modern communication technologies, remote sensing, and environmental pollution dynamics.",
    tags: ["Science Capsule", "Everyday Science", "CSS Compulsory", "Physics", "Biology"]
  },
  {
    id: "pdf-sci-instruments",
    title: "Scientific Instruments, Measurement Units & Inventions Master Guide",
    category: "Everyday Science",
    fileSize: "982 KB",
    pages: "65+ Pages",
    fileName: "everyday_science_instruments.pdf",
    filePath: "resources/everyday_science_instruments.pdf",
    description: "Complete glossary of scientific instruments (Barometer, Hygrometer, Spectrometer), SI measurement units, physical constants, and landmark biological and astronomical discoveries.",
    tags: ["Instruments", "Units", "Inventions", "Everyday Science"]
  },
  {
    id: "pdf-examveda-gk-comp-eng",
    title: "ExamVeda Master Bank: GK, Computer Science & English",
    category: "Computer & General Knowledge",
    fileSize: "2.82 MB",
    pages: "340+ Pages",
    fileName: "ExamVeda_GK_Computer_English.pdf",
    filePath: "resources/ExamVeda_GK_Computer_English.pdf",
    description: "All-in-one resource for computer fundamentals, networking, cybersecurity protocols, MS Office shortcuts, modern world history, and advanced English verbal aptitude.",
    tags: ["Computer Science", "ExamVeda", "GK", "Cybersecurity", "Aptitude"]
  },
  {
    id: "pdf-eng-vocab-adv",
    title: "Advanced English Vocabulary, Synonyms & Antonyms Handbook",
    category: "English Vocabulary",
    fileSize: "87 KB",
    pages: "40+ Pages",
    fileName: "english_vocab.pdf",
    filePath: "resources/english_vocab.pdf",
    description: "Compact and powerful vocabulary booklet featuring GRE-level words, high-frequency CSS adjectives, contextual sentence illustrations, and etymological word roots.",
    tags: ["Vocabulary", "GRE", "Synonyms", "Antonyms", "CSS English"]
  },
  {
    id: "pdf-eng-mcqs-core",
    title: "Core English Sentence Correction & Grammatical Errors Masterfile",
    category: "English Précis & Composition",
    fileSize: "365 KB",
    pages: "50+ Pages",
    fileName: "english_mcqs.pdf",
    filePath: "resources/english_mcqs.pdf",
    description: "Focuses on structural syntactical faults: dangling modifiers, faulty parallelism, pronoun-antecedent disagreements, and subtle subjunctive mood errors.",
    tags: ["Sentence Correction", "Syntax", "Grammar", "FPSC"]
  },
  {
    id: "pdf-eng-mcqs-prep",
    title: "Prepositional Idioms, Phrasal Verbs & Pair of Words Exercises",
    category: "English Précis & Composition",
    fileSize: "346 KB",
    pages: "48+ Pages",
    fileName: "english_mcqs_2.pdf",
    filePath: "resources/english_mcqs_2.pdf",
    description: "Targeted worksheets on tricky preposition combinations, confusing pairs of words (discrete vs discreet, affect vs effect), and idiomatic phrasal expressions.",
    tags: ["Pair of Words", "Prepositions", "Phrasal Verbs", "CSS Précis"]
  }
];

// Subject Notes dataset
const subjectNotes = [
  {
    id: "sub-pak-affairs",
    subject: "Pakistan Affairs (CSS / PMS)",
    title: "Constitutional Development & Federalism in Pakistan (1947–Present)",
    summary: "Critical examination of the evolution of constitutional structures from the Government of India Act 1935, Objective Resolution 1949, through the 1956, 1962, and 1973 Constitutions up to the 18th, 25th, and 26th Amendments.",
    coreThemes: [
      "Objective Resolution (1949): Bridge between Islamic jurisprudence and modern constitutional democracy.",
      "1973 Constitution: Parliamentary supremacy, bicameral legislature (Senate as federal guarantor), and fundamental rights safeguards.",
      "The 18th Amendment (2010): Devolution of 47 concurrent subjects, NFC Award non-reduction clause (Art 160-3B), and Council of Common Interests (CCI) empowerment.",
      "The 25th Amendment (2018): FATA-KP merger and the abolition of Frontier Crimes Regulation (FCR 1901)."
    ],
    examinerTips: "Do not narrate historical chronologies blindly. Always contrast institutional power dynamics between the civil-military bureaucracy and elected parliaments. Use constitutional articles (e.g. Art 58-2(b), Art 8, Art 153, Art 160) to substantiate every point.",
    recommendedDiagrams: "Diagram of Bicameral Federal Structure, 7th NFC Horizontal Sharing Formula (82% Population, 10.3% Poverty, 5% Revenue, 2.7% Land Area)."
  },
  {
    id: "sub-current-affairs",
    subject: "Current Affairs & Geopolitics",
    title: "Great Power Rivalry in the Indo-Pacific & Pakistan's Strategic Equilibrium",
    summary: "Analysis of the US 'Pivot to Asia' / Indo-Pacific Strategy, QUAD, AUKUS, and the Indian Ocean naval buildup vs. China's Belt and Road Initiative (BRI) and CPEC. Examines how Pakistan can maintain geoeconomic neutrality without being forced into an exclusive geopolitical camp.",
    coreThemes: [
      "The Malacca Dilemma: China's vulnerability to maritime blockades and the strategic logic of Gwadar Port.",
      "US Strategic Partnerships: Indo-US Defense Pacts (LEMOA, COMCASA, BECA) and the militarization of the Indian Ocean.",
      "Geoeconomics over Geopolitics: National Security Policy (NSP) 2022-2026 principles—connectivity, development, and non-bloc diplomacy.",
      "Hedging Strategy: Diversifying partnerships with EU (GSP+ status), GCC investments (SIFC initiatives), and Central Asian Republics (TAPI, CASA-1000)."
    ],
    examinerTips: "Avoid emotional or one-sided narratives. Present arguments through the analytical lenses of Structural Realism (Mearsheimer) and Liberal Institutionalism (Keohane). Always cite specific trade volumes, corridors, and treaty arrangements.",
    recommendedDiagrams: "Map of Maritime Chokepoints (Malacca, Hormuz, Bab-el-Mandeb), Regional Interconnectivity Corridors."
  },
  {
    id: "sub-gsa-science",
    subject: "General Science & Ability",
    title: "Climate Change Dynamics, Renewable Transition & Water Security",
    summary: "Comprehensive analytical capsule on anthropogenic climate change, greenhouse gas mechanisms, IPCC AR6 projections, Pakistan's climate vulnerability (top 10 most affected despite <0.9% global emissions), and hydrological risks to the Indus Basin.",
    coreThemes: [
      "Atmospheric Physics of Greenhouse Effect: Radiative forcing of CO2, CH4, and N2O; Global Warming Potential (GWP) metrics.",
      "Glacial Lake Outburst Floods (GLOFs): Third Pole cryosphere retreat in the Hindukush-Karakoram-Himalayan (HKH) belt.",
      "National Water Policy 2018: Storage capacity limitations (30 days vs 1000 days in Colorado Basin), water productivity, and canal lining.",
      "Renewable Energy Target (ARE Policy): Accelerating solar, wind, and run-of-river hydro to 60% of national energy mix by 2030."
    ],
    examinerTips: "In Everyday Science questions, draw neat labelled diagrams for every 5-mark part (e.g. Greenhouse effect schematic, water filtration cycle). Label units precisely (PPM for carbon concentrations, BCM/MAF for water volumes).",
    recommendedDiagrams: "Greenhouse effect radiative balance chart, Glacier retreat & GLOF formation cycle diagram."
  },
  {
    id: "sub-ir-theory",
    subject: "International Relations",
    title: "Nuclear Deterrence, Strategic Stability & Hybrid Warfare in South Asia",
    summary: "Theoretical appraisal of classical deterrence (Kenneth Waltz) vs deterrence instability (Scott Sagan) applied to the Indo-Pakistani nuclear dyad. Analyzes Cold Start Doctrine, Full Spectrum Deterrence (tactical nuclear weapons like Nasr), Ballistic Missile Defense (BMD), and the destabilizing rise of 5th Generation / Hybrid Warfare.",
    coreThemes: [
      "Stability-Instability Paradox (Glenn Snyder): Strategic nuclear parity prevents total war but incentivizes low-intensity sub-conventional friction.",
      "Full Spectrum Deterrence: Countering sub-conventional and conventional operational doctrines along the short, medium, and long-range vectors.",
      "Cyber & Information Warfare: Disinformation campaigns (EU DisinfoLab revelations), kinetic drone warfare, and satellite reconnaissance.",
      "Arms Control Breakdown: Degradation of bilateral confidence-building measures (CBMs) and the weaponization of trade/water diplomacy."
    ],
    examinerTips: "Never answer IR questions purely with news reporting. Frame the answer using academic IR frameworks: Security Dilemma (Jervis), Balance of Power (Morgenthau), and Offense-Defense Balance (Van Evera).",
    recommendedDiagrams: "Escalation Ladder (Herman Kahn adapted to South Asia), Deterrence Matrix."
  },
  {
    id: "sub-pub-gov",
    subject: "Governance & Public Policies",
    title: "Civil Service Reforms, Institutional Decay & Accountability Regimes",
    summary: "In-depth diagnostic of Pakistan's bureaucratic governance, tenure insecurity, politicization, judicial overreach vs executive discretion, and anti-corruption machinery (NAB, FIA, Provincial Anti-Corruption Establishments).",
    coreThemes: [
      "Structural Pathologies: Generalist hegemony vs domain specialization, outmoded Secretariat Instructions, and stagnation of the Central Superior Services structure.",
      "Dr. Ishrat Husain Reform Committee Recommendations: 4-tier recruitment, open competitive selection for specialized ministries, and performance-based compensation.",
      "Anti-Corruption Jurisprudence: Analysis of National Accountability Ordinance (NAO 1999) amendments, plea bargains, voluntary returns, and misuse of authority definitions.",
      "E-Governance & Digital Delivery: Citizen portals, digital land record management, automation of public procurement (E-Pak Acquisition and Disposal System - EPADS)."
    ],
    examinerTips: "Distinguish between administrative accountability, financial accountability, and political accountability. Highlight institutional checks and balances under Articles 175-212 of the Constitution.",
    recommendedDiagrams: "Accountability Triad (Auditor General, Public Accounts Committee, Investigating Agencies), Policy Formulation Cycle."
  }
];

// Append to DIGITAL_LIBRARY_DATA in file
const toAppend = `
  // 7. DOWNLOADABLE PDF MATERIAL DIRECTORY
  downloadablePdfs: ${JSON.stringify(downloadablePdfs, null, 2)},

  // 8. SUBJECT-WISE NOTES & CAPSULES
  subjectNotes: ${JSON.stringify(subjectNotes, null, 2)}
};
`;

// Replace closing `};` with toAppend
const updatedContent = content.replace(/};\s*$/, toAppend);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully updated data_digital_library.js with downloadablePdfs and subjectNotes!');
