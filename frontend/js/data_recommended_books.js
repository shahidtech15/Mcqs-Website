/**
 * Recommended Books by Examination Catalog
 * - CSS (Central Superior Services - FPSC)
 * - PMS (Provincial Management Services - PPSC, SPSC, KPPSC, BPSC)
 * - FIA (Federal Investigation Agency - Assistant Director & Inspector)
 * - NAB (National Accountability Bureau - Assistant Director)
 * - Assistant Audit Officer (BS-17) & State Bank of Pakistan (SBP)
 * - Judicial Services / Civil Judge Examinations
 */

window.RECOMMENDED_BOOKS_DATA = [
  // ==================== CSS (FPSC) ====================
  {
    id: "css-eng-essay-pinker",
    exam: "CSS",
    tier: "Compulsory",
    subject: "English Essay",
    title: "The Sense of Style: The Thinking Person's Guide to Writing in the 21st Century",
    author: "Steven Pinker",
    publisher: "Penguin Books",
    status: "Highly Recommended Secondary",
    keyTopics: "Classic prose style, overcoming the 'Curse of Knowledge', coherent paragraph transitions, syntactic rhythm, avoiding bureaucratic jargon.",
    examinerNote: "Examiners routinely penalize rote memorized essays. Pinker teaches candidates how to structure analytical arguments with lucidity and intellectual elegance.",
    readingStrategy: "Focus on Chapters 2, 3, and 5 to master sentence mechanics and argument flow. Practice converting passive bureaucratic prose into active, vigorous prose."
  },
  {
    id: "css-eng-precis-murphy",
    exam: "CSS",
    tier: "Compulsory",
    subject: "English (Precis & Composition)",
    title: "English Grammar in Use & Practical English Usage",
    author: "Raymond Murphy & Michael Swan",
    publisher: "Cambridge University Press / Oxford",
    status: "Official Core Syllabus Text",
    keyTopics: "Tense consistency, conditional clauses, subjunctive mood, phrasal verbs, idioms, prepositional collocations, sentence correction.",
    examinerNote: "Covers 100% of the grammatical rules tested in the 20-mark objective and correction portions of the FPSC English Precis paper.",
    readingStrategy: "Solve the diagnostic exercises at the beginning of each unit to identify personal error patterns, especially in conditional structures and prepositions."
  },
  {
    id: "css-pak-affairs-kazimi",
    exam: "CSS",
    tier: "Compulsory",
    subject: "Pakistan Affairs",
    title: "A Concise History of Pakistan",
    author: "Muhammad Reza Kazimi",
    publisher: "Oxford University Press (OUP)",
    status: "FPSC Prescribed Text",
    keyTopics: "Pre-partition constitutional conferences (Lucknow Pact, Nehru Report, 14 Points), Pakistan Movement chronology, constitutional crises (1956, 1962, 1973), post-1971 political trajectory.",
    examinerNote: "Provides balanced, non-hagiographical historical analysis. Highly regarded by FPSC paper-setters for constitutional history questions.",
    readingStrategy: "Make comparative timeline tables for constitutional proposals from 1906 to 1947, noting specific minority safeguards and federal provisions."
  },
  {
    id: "css-pak-affairs-lodhi",
    exam: "CSS",
    tier: "Compulsory",
    subject: "Pakistan Affairs & Current Affairs",
    title: "Pakistan: Beyond the 'Crisis State'",
    author: "Dr. Maleeha Lodhi (Editor)",
    publisher: "Oxford University Press",
    status: "Essential Analytical Reading",
    keyTopics: "Structural economic vulnerabilities, civil-military dynamics, governance reforms, foreign policy rebalancing, demographic dividend vs. disaster.",
    examinerNote: "Features analytical essays by leading scholars (Akbar Zaidi, Zahid Hussain, Ayesha Jalal, Mohsin Khan). Essential for drafting high-scoring multi-dimensional outlines.",
    readingStrategy: "Extract thesis statements and analytical arguments from chapters on the economy and human capital for use in both Pakistan Affairs and Essay papers."
  },
  {
    id: "css-current-affairs-haass",
    exam: "CSS",
    tier: "Compulsory",
    subject: "Current Affairs & International Relations",
    title: "The World: A Brief Introduction",
    author: "Richard Haass",
    publisher: "Penguin Press",
    status: "Core Foundations Text",
    keyTopics: "Post-Cold War order, globalization, terrorism, nuclear non-proliferation, climate governance, regions of the world, US-China competition.",
    examinerNote: "Author was President of the Council on Foreign Relations (CFR). Clarifies complex geopolitical concepts without academic obscurity.",
    readingStrategy: "Read the regional chapters (Middle East, East Asia, South Asia) before diving into daily newspaper editorials to understand the structural context."
  },
  {
    id: "css-islamic-studies-hamidullah",
    exam: "CSS",
    tier: "Compulsory",
    subject: "Islamic Studies",
    title: "Introduction to Islam",
    author: "Dr. Muhammad Hamidullah",
    publisher: "Sh. Muhammad Ashraf Publishers",
    status: "FPSC Prescribed Text",
    keyTopics: "Islamic statecraft, judicial autonomy in the Caliphate, human rights in Islam, Mithaq al-Madinah, economic system, international humanitarian law in Islam.",
    examinerNote: "Hamidullah was a world-renowned Islamic jurist and diplomat. His scholarly treatment of Islamic constitutionalism and treaty law receives the highest marks from FPSC examiners.",
    readingStrategy: "Focus on the chapters dealing with the political and judicial systems of Islam and international relations during the prophetic era."
  },
  {
    id: "css-gsa-carpi",
    exam: "CSS",
    tier: "Compulsory",
    subject: "General Science & Ability",
    title: "Everyday Science: A Comprehensive Guide",
    author: "Dr. Anthony Carpi & Specialized Faculty",
    publisher: "Standard Academic Press",
    status: "Core Syllabus Text",
    keyTopics: "Physical sciences (astronomy, semiconductors, energy), biological systems (human physiology, DNA, CRISPR, vaccines), environmental sciences, basic quantitative reasoning.",
    examinerNote: "Helps candidates secure 70+ marks in GSA by combining accurate scientific definitions with clear hand-drawn structural diagrams.",
    readingStrategy: "Practice drawing labeled diagrams of the human eye, nephron, solar/lunar eclipse, nitrogen cycle, and greenhouse effect."
  },
  {
    id: "css-pol-sci-heywood",
    exam: "CSS",
    tier: "Optional (Group I)",
    subject: "Political Science",
    title: "Politics & Global Politics (4th/5th Edition)",
    author: "Andrew Heywood",
    publisher: "Palgrave Macmillan",
    status: "FPSC Prescribed Core Text",
    keyTopics: "Political theories, state sovereignty, ideologies (liberalism, socialism, fascism), constitutional systems, political institutions, separation of powers.",
    examinerNote: "The gold standard textbook for Western Political Thought and political concepts. FPSC question terminology directly echoes Heywood's formulations.",
    readingStrategy: "Create flashcards for political thinkers (Plato, Aristotle, Machiavelli, Hobbes, Locke, Rousseau, Mill, Marx) comparing their views on the state of nature, sovereignty, and law."
  },
  {
    id: "css-ir-baylis",
    exam: "CSS",
    tier: "Optional (Group I)",
    subject: "International Relations",
    title: "The Globalization of World Politics: An Introduction to International Relations",
    author: "John Baylis, Steve Smith, and Patricia Owens",
    publisher: "Oxford University Press",
    status: "Official Core Syllabus Text",
    keyTopics: "Classical Realism, Structural Realism (Waltz), Liberalism, Constructivism, Marxism, Post-structuralism, international security, nuclear proliferation.",
    examinerNote: "Indispensable for IR Paper-I. Case study boxes provide real-world diplomatic examples that examiners look for in theoretical application questions.",
    readingStrategy: "Dedicate special attention to Part 2 (Theories of World Politics) and apply each theory to a contemporary crisis (e.g., Ukraine conflict or South China Sea)."
  },
  {
    id: "css-crim-siegel",
    exam: "CSS",
    tier: "Optional (Group VI)",
    subject: "Criminology",
    title: "Criminology: Theories, Patterns, and Typologies",
    author: "Larry J. Siegel",
    publisher: "Cengage Learning",
    status: "FPSC Prescribed Text",
    keyTopics: "Biological and psychological trait theories, sociological theories (strain, differential association, labeling), white-collar crimes, penology, restorative justice.",
    examinerNote: "Criminology is one of the highest-scoring optionals in CSS. Siegel covers all theoretical schools with empirical research data.",
    readingStrategy: "Map out criminological theories on a single comparative matrix: Theorist, Core Hypothesis, Crime Etiology, and Policy Implication."
  },

  // ==================== PMS (Provincial Civil Services) ====================
  {
    id: "pms-punjab-gk-caravan",
    exam: "PMS",
    tier: "Compulsory",
    subject: "General Knowledge (100 Marks Objective)",
    title: "Caravan Comprehensive General Knowledge for PMS/PPSC",
    author: "Chaudhry Ahmad Najib",
    publisher: "Caravan Book House, Lahore",
    status: "Standard Exam Reference",
    keyTopics: "World geography, historical events, international treaties, sports records, capitals, currencies, everyday science, basic computer fundamentals.",
    examinerNote: "The primary single-volume question bank for PPSC/PMS Screening and General Knowledge papers.",
    readingStrategy: "Solve chapter-wise objective exercises with negative marking simulated (-0.25 penalty per wrong answer)."
  },
  {
    id: "pms-pak-studies-kazimi",
    exam: "PMS",
    tier: "Compulsory",
    subject: "Pakistan Studies",
    title: "Pakistan Studies for Degree / Civil Service Students",
    author: "Dr. Muhammad Reza Kazimi",
    publisher: "Oxford University Press",
    status: "Recommended Core Text",
    keyTopics: "Ideology of Pakistan, Sir Syed Ahmad Khan, Allama Iqbal, Quaid-e-Azam, geographical features, socio-economic challenges, foreign policy.",
    examinerNote: "Addresses the academic requirements of provincial public service commissions (PPSC, SPSC, KPPSC, BPSC).",
    readingStrategy: "Synthesize notes on the ideological foundations of Pakistan, focusing on Iqbal's Allahabad Address (1930) and Jinnah's 11th August 1947 speech."
  },
  {
    id: "pms-urdu-insha",
    exam: "PMS",
    tier: "Compulsory",
    subject: "Urdu (Compulsory 100 Marks)",
    title: "Sarmaya-e-Urdu & Urdu Adab Ki Mukhtasar Tareen Tareekh",
    author: "Dr. Saleem Akhtar",
    publisher: "Sang-e-Meel Publications",
    status: "Core Syllabus Text",
    keyTopics: "Urdu essay writing, precis writing (Talkhees Nigari), idioms (Muhawarat), poetry explanation (Tashreeh), literary movements (Aligarh, Progressive Writers).",
    examinerNote: "Crucial for PMS Punjab where Urdu is a 100-mark compulsory paper that often decides the merit ranking.",
    readingStrategy: "Practice writing one formal Urdu essay every week, focusing on literary vocabulary, authentic couplets (Asha'ar), and correct grammatical gender (Tazkeer-o-Taanees)."
  },

  // ==================== FIA (Assistant Director & Inspector) ====================
  {
    id: "fia-act-official-bare-act",
    exam: "FIA",
    tier: "Professional (Part-II)",
    subject: "FIA Act 1974 & Investigation Mandate",
    title: "The Federal Investigation Agency Act, 1974 with Statutory Rules & Orders (S.R.O.s)",
    author: "Government of Pakistan / Ministry of Law",
    publisher: "Manager of Publications, Official Gazette",
    status: "Mandatory Primary Statute",
    keyTopics: "Sections 1 to 10 of FIA Act, Scheduled offenses under PPC, AMLA 2010, PECA 2016, Passports Act 1974, Emigration Ordinance 1979, PTPA 2018.",
    examinerNote: "Directly accounts for 18 to 20 marks in the FPSC FIA Assistant Director and Inspector examinations.",
    readingStrategy: "Read Section 5(1), 5(2), 5(3), 5(4), 5(5), and Section 6 in conjunction with the Schedule. Understand the interplay with CrPC Sections 154, 156, 165, and 167."
  },
  {
    id: "fia-crpc-mahmood",
    exam: "FIA",
    tier: "Professional (Part-II)",
    subject: "Criminal Procedure & Police Powers",
    title: "The Code of Criminal Procedure, 1898 with Comprehensive Commentary",
    author: "M. Mahmood (Advocate Supreme Court)",
    publisher: "Pakistan Law Times Publications",
    status: "Authoritative Reference",
    keyTopics: "Cognizable vs. non-cognizable offenses, registration of FIR (Sec 154), investigation procedures (Sec 156, 157), search without warrant (Sec 165), remand (Sec 167), police report/challan (Sec 173).",
    examinerNote: "Essential for FIA Assistant Director (Investigation & Legal) papers where scenario-based questions test the officer's legal powers.",
    readingStrategy: "Focus on Chapter XIV (Information to the Police and Their Powers to Investigate) and procedural remand safeguards under Article 10 of the Constitution."
  },
  {
    id: "fia-peca-bare-act",
    exam: "FIA",
    tier: "Professional (Part-II)",
    subject: "Cybercrime & Digital Forensics",
    title: "Prevention of Electronic Crimes Act, 2016 (PECA) with Investigation Rules",
    author: "National Assembly of Pakistan",
    publisher: "Official Gazette of Pakistan",
    status: "Mandatory Core Statute",
    keyTopics: "Cyber terrorism (Sec 10), electronic fraud (Sec 14), identity theft (Sec 16), unauthorized access (Sec 3), emergency search/seizure powers (Sec 30), digital evidence preservation.",
    examinerNote: "Core component of the FIA Cyber Crime Wing (CCW) investigation syllabus tested in FPSC recruitment exams.",
    readingStrategy: "Memorize the statutory penal thresholds for Sections 3, 10, 11, 14, 16, 20, 21, and 30."
  },

  // ==================== NAB (National Accountability Bureau) ====================
  {
    id: "nab-nao-1999",
    exam: "NAB",
    tier: "Professional (Part-II)",
    subject: "Anti-Corruption & Financial Crime Law",
    title: "National Accountability Ordinance, 1999 (NAO 1999) with Amendments",
    author: "Ministry of Law and Justice",
    publisher: "Official Gazette of Pakistan",
    status: "Mandatory Primary Statute",
    keyTopics: "Section 9 (Offenses of corruption and corrupt practices), Section 10 (Punishment up to 14 years), Section 12 (Freezing of property), Section 14 (Presumption of guilt), Section 25 (Voluntary return and plea bargain).",
    examinerNote: "Forms over 40% of the syllabus for NAB Assistant Director and Deputy Prosecutor recruitment exams.",
    readingStrategy: "Compare Section 9 NAO 1999 with Section 5 of the Prevention of Corruption Act 1947 to understand NAB's specialized anti-corruption jurisdiction."
  },

  // ==================== Assistant Audit Officer (BS-17) & SBP ====================
  {
    id: "aao-meigs-accounting",
    exam: "Assistant Audit Officer (BS-17)",
    tier: "Professional (Part-II)",
    subject: "Financial Accounting & Reporting",
    title: "Accounting: The Basis for Business Decisions",
    author: "Robert F. Meigs & Walter B. Meigs",
    publisher: "McGraw-Hill",
    status: "FPSC Prescribed Text",
    keyTopics: "Accounting cycle, journal, ledger, trial balance, adjusting entries, bank reconciliation, depreciation methods, financial statement analysis, ratio analysis.",
    examinerNote: "FPSC syllabus for Case No. F.4-195/2026 specifically prescribes accounting cycle and ratio analysis from standard texts like Meigs & Meigs.",
    readingStrategy: "Practice numerical problems on FIFO/LIFO inventory valuation, straight-line and reducing-balance depreciation, and liquidity/solvency ratios."
  },
  {
    id: "aao-issais-framework",
    exam: "Assistant Audit Officer (BS-17)",
    tier: "Professional (Part-II)",
    subject: "Public Sector Auditing & Standards",
    title: "International Standards of Supreme Audit Institutions (ISSAIs) Handbook",
    author: "INTOSAI (International Organization of Supreme Audit Institutions)",
    publisher: "INTOSAI Secretariat / AGP Pakistan",
    status: "Official Professional Standards",
    keyTopics: "Financial Attest Audit, Compliance Audit, Performance Audit, ISSAI 100 fundamental principles, audit evidence, working papers, role of Public Accounts Committees (PAC).",
    examinerNote: "Directly tested in the 80-mark professional section of the Assistant Audit Officer FPSC paper.",
    readingStrategy: "Learn the three pillars of public sector auditing: Financial, Compliance, and Performance (Value for Money: Economy, Efficiency, Effectiveness)."
  },
  {
    id: "aao-pfm-act-2019",
    exam: "Assistant Audit Officer (BS-17)",
    tier: "Professional (Part-II)",
    subject: "Public Financial Management",
    title: "Public Finance Management Act, 2019 & Public Procurement Rules, 2004",
    author: "Ministry of Finance & PPRA Pakistan",
    publisher: "Official Gazette of Pakistan",
    status: "Mandatory Core Legislation",
    keyTopics: "Federal Consolidated Fund, Public Account, Medium-Term Budgetary Framework (MTBF), internal controls, Chief Finance and Accounts Officer (CFAO), PPRA bidding rules.",
    examinerNote: "FPSC Assistant Audit Officer syllabus mandates deep knowledge of PFM Act 2019 and PPRA 2004.",
    readingStrategy: "Focus on Section 3 (Federal Consolidated Fund custody), Section 14 (Internal controls), and PPRA Rule 12 (Methods of procurement) and Rule 36 (Bidding procedures)."
  },

  // ==================== Judicial Services / Civil Judge ====================
  {
    id: "jud-cpc-mulla",
    exam: "Judicial Services",
    tier: "Professional",
    subject: "Civil Procedure",
    title: "The Code of Civil Procedure (CPC 1908) with Commentary",
    author: "Sir Dinshah Fardunji Mulla",
    publisher: "LexisNexis / Pakistan Law House",
    status: "Definitive Judicial Authority",
    keyTopics: "Jurisdiction of civil courts, res judicata (Sec 11), place of suing, execution of decrees, temporary injunctions (Order XXXIX), pleadings, appeals.",
    examinerNote: "Cited in judicial decisions across the subcontinent; required reading for Civil Judge / Judicial Magistrate and Additional District Judge exams.",
    readingStrategy: "Master the distinction between the substantive sections (Sections 1 to 158) and the procedural procedural rules in the First Schedule (Orders I to L)."
  },
  {
    id: "jud-qso-mahmood",
    exam: "Judicial Services",
    tier: "Professional",
    subject: "Law of Evidence",
    title: "Qanun-e-Shahadat Order, 1984 (QSO) with Exhaustive Commentary",
    author: "M. Mahmood",
    publisher: "Pakistan Law Times",
    status: "Core Judicial Text",
    keyTopics: "Relevancy of facts, admissions and confessions (Art 37-43), dying declarations (Art 46), documentary evidence, burden of proof (Art 117-129), competence of witnesses (Art 3-17).",
    examinerNote: "Indispensable for judicial services and public prosecutor recruitment across all high court jurisdictions in Pakistan.",
    readingStrategy: "Understand the evidentiary value of an extra-judicial confession, the rule of 'res gestae' (Art 19), and judicial notice (Art 111-112)."
  }
];
