const fs = require('fs');

console.log('--- Assembling Constitution of Pakistan Dataset ---');

// Master Constitution Dataset
const CONSTITUTION_DATA = {
  metadata: {
    title: "Constitution of the Islamic Republic of Pakistan, 1973",
    enactmentDate: "12th April 1973",
    commencementDate: "14th August 1973",
    framers: "National Assembly of Pakistan (chaired by Zulfikar Ali Bhutto, drafted under Abdul Hafeez Pirzada)",
    totalArticles: 280,
    totalParts: 12,
    totalSchedules: 5,
    latestAmendment: "26th Constitutional Amendment (Passed October 20, 2024; Gazette notified October 21, 2024)",
    structure: [
      { part: "Preamble", title: "Preamble & Objectives Resolution (Article 2A)", articles: "Preamble, 2A" },
      { part: "Part I", title: "Introductory", articles: "1 to 6" },
      { part: "Part II", title: "Fundamental Rights & Principles of Policy", articles: "7 to 40" },
      { part: "Part III", title: "The Federation of Pakistan", articles: "41 to 100" },
      { part: "Part IV", title: "The Provinces", articles: "101 to 140A" },
      { part: "Part V", title: "Relations Between Federation and Provinces", articles: "141 to 159" },
      { part: "Part VI", title: "Finance, Property, Contracts and Suits", articles: "160 to 174" },
      { part: "Part VII", title: "The Judicature", articles: "175 to 212B" },
      { part: "Part VIII", title: "Elections", articles: "213 to 226" },
      { part: "Part IX", title: "Islamic Provisions", articles: "227 to 231" },
      { part: "Part X", title: "Emergency Provisions", articles: "232 to 237" },
      { part: "Part XI", title: "Amendment of Constitution", articles: "238 to 239" },
      { part: "Part XII", title: "Miscellaneous", articles: "240 to 280" }
    ]
  },

  // Key KPI Stats
  kpis: {
    articles: "280 Articles",
    articlesDesc: "Divided across 12 Parts, multiple Chapters, and 5 Schedules",
    amendments: "26 Amendments",
    amendmentsDesc: "From 1st Amendment (1974) to 26th Amendment (Oct 2024)",
    rights: "20 Fundamental Rights",
    rightsDesc: "Enforceable by superior judiciary under Articles 199 and 184(3)",
    governance: "Parliamentary Federal",
    governanceDesc: "Bicameral legislature (Senate & National Assembly) with provincial autonomy",
    judiciary: "Constitutional Benches",
    judiciaryDesc: "Established by 26th Amendment in Supreme Court and High Courts",
    principles: "12 Policy Principles",
    principlesDesc: "Non-justiciable state objectives guiding legislation and governance (Arts 29-40)"
  },

  // High-Yield Articles Database
  articles: [
    {
      num: "Preamble",
      slug: "preamble",
      title: "Preamble: Objectives Resolution",
      part: "Preamble",
      partNum: 0,
      category: "Introductory",
      highYield: true,
      text: "Whereas sovereignty over the entire Universe belongs to Almighty Allah alone, and the authority to be exercised by the people of Pakistan within the limits prescribed by Him is a sacred trust; Wherein the State shall exercise its powers and authority through the chosen representatives of the people; Wherein the principles of democracy, freedom, equality, tolerance and social justice, as enunciated by Islam, shall be fully observed...",
      explanation: "Originally adopted by the first Constituent Assembly on 12 March 1949 under Prime Minister Liaquat Ali Khan. It serves as the constitutional grundnorm of Pakistan. By the 8th Amendment (1985), President Zia-ul-Haq inserted Article 2A, making the Objectives Resolution a substantive, operative part of the Constitution. However, in the landmark *Hakim Khan v. Government of Pakistan (PLD 1992 SC 595)*, the Supreme Court ruled that Article 2A cannot be used by courts to strike down other provisions of the Constitution.",
      keyPhrases: ["Sovereignty of Almighty Allah", "Sacred Trust", "Chosen Representatives", "Independence of Judiciary", "Islamic Democracy"],
      examNotes: "Classic CSS/PMS question: Discuss the status of the Objectives Resolution in the constitutional history of Pakistan. Distinguish between its status as a Preamble vs. its substantive incorporation under Article 2A.",
      mcqs: [
        {
          q: "When was the historic Objectives Resolution passed by the First Constituent Assembly of Pakistan?",
          opts: ["14 August 1947", "12 March 1949", "23 March 1956", "14 August 1973"],
          ans: 1,
          exp: "The Objectives Resolution was moved by Prime Minister Liaquat Ali Khan and adopted by the Constituent Assembly on March 12, 1949."
        },
        {
          q: "Which constitutional amendment made the Objectives Resolution a substantive part of the 1973 Constitution via Article 2A?",
          opts: ["2nd Amendment (1974)", "8th Amendment (1985)", "13th Amendment (1997)", "18th Amendment (2010)"],
          ans: 1,
          exp: "The 8th Constitutional Amendment (1985) inserted Article 2A, annexing the Objectives Resolution as an operative part of the Constitution."
        }
      ]
    },

    {
      num: "1",
      slug: "art-1",
      title: "Article 1: The Republic and its Territories",
      part: "Part I: Introductory",
      partNum: 1,
      category: "Introductory",
      highYield: true,
      text: "(1) Pakistan shall be a Federal Republic to be known as the Islamic Republic of Pakistan, hereinafter referred to as Pakistan.\n(2) The territories of Pakistan shall comprise—\n(a) the Provinces of Balochistan, Khyber Pakhtunkhwa, the Punjab and Sindh;\n(b) the Islamabad Capital Territory, hereinafter referred to as the Federal Capital; and\n(c) such States and territories as are or may be included in Pakistan, whether by accession or otherwise.",
      explanation: "Establishes Pakistan as a federation comprising four provinces and the federal capital. Following the historic 25th Constitutional Amendment (May 2018), the Federally Administered Tribal Areas (FATA) and Provincially Administered Tribal Areas (PATA) were formally merged into the province of Khyber Pakhtunkhwa, amending clause (2) of Article 1.",
      keyPhrases: ["Federal Republic", "Islamic Republic of Pakistan", "Four Provinces", "Merger of FATA (25th Amendment)"],
      examNotes: "Frequently tested regarding the 25th Constitutional Amendment (2018) and the territorial evolution of the Federation since 1973.",
      mcqs: [
        {
          q: "Which constitutional amendment merged FATA with Khyber Pakhtunkhwa and updated Article 1?",
          opts: ["18th Amendment", "21st Amendment", "25th Amendment", "26th Amendment"],
          ans: 2,
          exp: "The 25th Constitutional Amendment, passed in May 2018, merged FATA into Khyber Pakhtunkhwa, eliminating FATA from Article 1(2)."
        }
      ]
    },

    {
      num: "2A",
      slug: "art-2a",
      title: "Article 2A: The Objectives Resolution to form part of substantive provisions",
      part: "Part I: Introductory",
      partNum: 1,
      category: "Introductory",
      highYield: true,
      text: "The principles and provisions set out in the Objectives Resolution reproduced in the Annex are hereby made substantive part of the Constitution and shall have effect accordingly.",
      explanation: "Inserted by the Revival of Constitution of 1973 Order (PCO/RCO) in 1985 and validated by the 8th Amendment. It elevated the 1949 Objectives Resolution from a non-enforceable preamble to a substantive part of the Constitution. In the *Zaheeruddin v. State (1993 SCMR 1718)* and *Hakim Khan* cases, the apex court clarified that Article 2A does not grant superior courts a 'supraconstitutional' power to annul other express articles of the Constitution.",
      keyPhrases: ["Substantive Provision", "Objectives Resolution Annex", "Judicial Review Limits", "Hakim Khan Precedent"],
      examNotes: "High-yield essay and legal question: Can a court strike down a constitutional provision on the touchstone of Article 2A? (Supreme Court answered: NO in Hakim Khan case).",
      mcqs: [
        {
          q: "In which landmark judgment did the Supreme Court hold that Article 2A does not give courts the power to strike down other constitutional provisions?",
          opts: ["Asma Jilani case", "Hakim Khan case (PLD 1992 SC 595)", "Dosso case", "Al-Jehad Trust case"],
          ans: 1,
          exp: "In Hakim Khan v. Government of Pakistan (PLD 1992 SC 595), the Supreme Court ruled that Article 2A is not a supra-constitutional test to invalidate other constitutional provisions."
        }
      ]
    },

    {
      num: "4",
      slug: "art-4",
      title: "Article 4: Right of individuals to be dealt with in accordance with law",
      part: "Part I: Introductory",
      partNum: 1,
      category: "Introductory",
      highYield: true,
      text: "(1) To enjoy the protection of law and to be treated in accordance with law is the inalienable right of every citizen, wherever he may be, and of every other person for the time being within Pakistan.\n(2) In particular—\n(a) no action detrimental to the life, liberty, body, reputation or property of any person shall be taken except in accordance with law;\n(b) no person shall be prevented from or be hindered in doing that which is not prohibited by law; and\n(c) no person shall be compelled to do that which the law does not require him to do.",
      explanation: "Considered Pakistan's constitutional formulation of the 'Rule of Law' and 'Due Process of Law' (comparable to the Magna Carta and US Fifth/Fourteenth Amendments). Crucially, Article 4 applies to every citizen AND any foreigner/alien currently residing in Pakistan. It is an overarching principle that prevents arbitrary executive or state action.",
      keyPhrases: ["Inalienable Right", "Rule of Law", "Protection of Law", "Action Detrimental to Life/Liberty/Reputation", "Citizen and Non-Citizen"],
      examNotes: "A cornerstone of administrative law and fundamental rights petitions under Article 199. Questions frequently ask about the difference in scope between Article 4 (applies to all persons) and specific fundamental rights (some apply only to citizens).",
      mcqs: [
        {
          q: "Under Article 4 of the Constitution, who is entitled to enjoy the protection of law and be treated in accordance with law?",
          opts: ["Only registered tax-paying citizens", "Every citizen and every other person for the time being within Pakistan", "Only citizens above 18 years of age", "Only government servants"],
          ans: 1,
          exp: "Article 4 guarantees that enjoying the protection of law is the inalienable right of every citizen as well as every other person temporarily or permanently within Pakistan."
        }
      ]
    },

    {
      num: "6",
      slug: "art-6",
      title: "Article 6: High Treason",
      part: "Part I: Introductory",
      partNum: 1,
      category: "Introductory",
      highYield: true,
      text: "(1) Any person who abrogates or subverts or suspends or holds in abeyance, or attempts or conspires to abrogate or subvert or suspend or hold in abeyance, the Constitution by use of force or show of force or by any other unconstitutional means shall be guilty of high treason.\n(2) Any person aiding or abetting or collaborating the acts mentioned in clause (1) shall likewise be guilty of high treason.\n(2A) An act of high treason mentioned in clause (1) or clause (2) shall not be validated by any court including the Supreme Court and a High Court.\n(3) Majlis-e-Shoora (Parliament) shall by law provide for the punishment of persons found guilty of high treason.",
      explanation: "Drafted specifically to prevent recurring military coups d'état (such as Ayub Khan in 1958 and Yahya Khan in 1969). The 18th Constitutional Amendment (2010) significantly strengthened Article 6 by: (i) adding the words 'suspends or holds in abeyance', (ii) inserting clause (2A) explicitly barring any court from validating an unconstitutional takeover (ending the judicial 'Doctrine of Necessity'), and (iii) adding collaborators and aiders/abettors. Under the High Treason (Punishment) Act 1973, the penalty is death or life imprisonment.",
      keyPhrases: ["Abrogate, Subvert, Suspend, Hold in Abeyance", "Use of Force or Unconstitutional Means", "Clause 2A (No Judicial Validation)", "Aiding and Abetting", "High Treason Punishment Act 1973"],
      examNotes: "Consistently examined in CSS Pakistan Affairs and Constitutional Law: How did the 18th Amendment bury the 'Doctrine of Necessity' through Article 6(2A)? Discuss the historic trial under Article 6 (General Pervez Musharraf special court verdict 2019).",
      mcqs: [
        {
          q: "Which clause was inserted into Article 6 by the 18th Amendment to prohibit courts from validating any unconstitutional overthrow of the Constitution?",
          opts: ["Clause (1A)", "Clause (2A)", "Clause (3A)", "Clause (4)"],
          ans: 1,
          exp: "Clause (2A) was inserted by the 18th Amendment (2010), declaring that an act of high treason shall not be validated by any court including the Supreme Court and a High Court."
        },
        {
          q: "What is the prescribed maximum penalty under the High Treason (Punishment) Act, 1973 for an offence under Article 6?",
          opts: ["14 Years Imprisonment", "Death or Life Imprisonment", "Asset Confiscation only", "Exile"],
          ans: 1,
          exp: "Under Section 2 of the High Treason (Punishment) Act, 1973, a person found guilty of high treason under Article 6 shall be punished with death or imprisonment for life."
        }
      ]
    },

    // Fundamental Rights (Articles 8 - 28)
    {
      num: "8",
      slug: "art-8",
      title: "Article 8: Laws inconsistent with or in derogation of Fundamental Rights to be void",
      part: "Part II: Fundamental Rights and Principles of Policy",
      partNum: 2,
      category: "Fundamental Rights",
      highYield: true,
      text: "(1) Any law, or any custom or usage having the force of law, in so far as it is inconsistent with the rights conferred by this Chapter, shall, to the extent of such inconsistency, be void.\n(2) The State shall not make any law which takes away or abridges the rights so conferred and any law made in contravention of this clause shall, to the extent of the contravention, be void.",
      explanation: "Enshrines the judicial review power of the superior judiciary over statutory legislation. Any existing law or future parliamentary/provincial enactment that violates Fundamental Rights (Articles 9 to 28) is rendered *void ab initio* (to the extent of inconsistency). Clause (3) provides limited exemptions for armed forces and police discipline laws and laws specified in the First Schedule.",
      keyPhrases: ["Void ab initio", "Doctrine of Severability", "Inconsistency with Fundamental Rights", "Judicial Review", "State shall not make any law"],
      examNotes: "Fundamental to constitutional litigation: The gateway article establishing the primacy of Fundamental Rights over ordinary statutes.",
      mcqs: [
        {
          q: "Under Article 8(1), what is the legal status of a law or custom that is inconsistent with Fundamental Rights?",
          opts: ["Suspended for 6 months", "Void to the extent of such inconsistency", "Referred to Parliament for review", "Automatically valid until amended"],
          ans: 1,
          exp: "Article 8(1) mandates that any law, custom, or usage inconsistent with Fundamental Rights shall, to the extent of such inconsistency, be void."
        }
      ]
    },

    {
      num: "9",
      slug: "art-9",
      title: "Article 9: Security of Person",
      part: "Part II: Fundamental Rights and Principles of Policy",
      partNum: 2,
      category: "Fundamental Rights",
      highYield: true,
      text: "No person shall be deprived of life or liberty save in accordance with law.",
      explanation: "The bedrock right to life and personal liberty. Pakistani jurisprudence has given Article 9 an expansive interpretation (broad judicial interpretation). In landmark environmental cases (*Shehla Zia v. WAPDA PLD 1994 SC 693*), the Supreme Court ruled that 'life' does not mean mere animal existence, but includes the right to a clean environment, unpolluted drinking water, healthcare, livelihood, dignity, and basic amenities.",
      keyPhrases: ["Deprivation of Life or Liberty", "Save in accordance with law", "Shehla Zia v. WAPDA", "Right to Clean Environment", "Right to Livelihood"],
      examNotes: "Classic CSS prompt: Discuss how the Supreme Court of Pakistan expanded the concept of 'Right to Life' under Article 9 to encompass human dignity, environmental justice, and socio-economic rights.",
      mcqs: [
        {
          q: "In which landmark environmental case did the Supreme Court hold that the right to life under Article 9 includes the right to a clean and healthy environment?",
          opts: ["Asma Jilani case", "Shehla Zia v. WAPDA (PLD 1994 SC 693)", "Dosso case", "Tamizuddin Khan case"],
          ans: 1,
          exp: "In Shehla Zia v. WAPDA, the Supreme Court ruled that 'life' under Article 9 extends beyond mere vegetative existence to include freedom from environmental hazards and the right to health."
        }
      ]
    },

    {
      num: "10A",
      slug: "art-10a",
      title: "Article 10A: Right to Fair Trial",
      part: "Part II: Fundamental Rights and Principles of Policy",
      partNum: 2,
      category: "Fundamental Rights",
      highYield: true,
      text: "For the determination of his civil rights and obligations or in any criminal charge against him a person shall be entitled to a fair trial and due process.",
      explanation: "Inserted by the landmark 18th Constitutional Amendment in April 2010. Formally incorporates international human rights standards (Article 10 of UDHR and Article 14 of ICCPR). It guarantees procedural due process, an unbiased tribunal, the right to legal counsel, cross-examination, and reasoned decisions in both civil determinations and criminal charges.",
      keyPhrases: ["Due Process", "Civil Rights and Obligations", "Criminal Charge", "Fair Trial", "18th Amendment 2010"],
      examNotes: "Frequently tested in CSS/PMS and Judiciary exams: Analyze the constitutional ramifications of the introduction of Article 10A on criminal trials and administrative tribunals.",
      mcqs: [
        {
          q: "Which constitutional amendment inserted Article 10A (Right to Fair Trial) into the Constitution of Pakistan?",
          opts: ["17th Amendment (2003)", "18th Amendment (2010)", "19th Amendment (2011)", "25th Amendment (2018)"],
          ans: 1,
          exp: "Article 10A was inserted by the historic 18th Constitutional Amendment in 2010 to guarantee fair trial and due process."
        }
      ]
    },

    {
      num: "19",
      slug: "art-19",
      title: "Article 19: Freedom of Speech, etc.",
      part: "Part II: Fundamental Rights and Principles of Policy",
      partNum: 2,
      category: "Fundamental Rights",
      highYield: true,
      text: "Every citizen shall have the right to freedom of speech and expression, and there shall be freedom of the press, subject to any reasonable restrictions imposed by law in the interest of the glory of Islam or the integrity, security or defence of Pakistan or any part thereof, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, commission of or incitement to an offence.",
      explanation: "Guarantees free speech, expression, and freedom of the press to every Pakistani citizen. However, freedom of speech is not absolute; it is subject to eight explicit constitutional grounds for 'reasonable restrictions': (1) Glory of Islam, (2) Integrity/Security/Defence of Pakistan, (3) Friendly relations with foreign States, (4) Public order, (5) Decency or morality, (6) Contempt of court, (7) Commission of an offence, and (8) Incitement to an offence.",
      keyPhrases: ["Freedom of Speech and Expression", "Freedom of the Press", "Reasonable Restrictions", "Glory of Islam", "Public Order", "Contempt of Court"],
      examNotes: "Crucial for Journalism, Law, and CSS Essay papers: Discuss the tension between freedom of the press and national security / public order under Article 19.",
      mcqs: [
        {
          q: "Which of the following is NOT one of the constitutional grounds for reasonable restrictions on free speech under Article 19?",
          opts: ["Glory of Islam", "Economic growth rate of the State", "Public order, decency or morality", "Contempt of court"],
          ans: 1,
          exp: "Economic growth rate is not a constitutionally specified ground for restricting freedom of speech under Article 19."
        }
      ]
    },

    {
      num: "19A",
      slug: "art-19a",
      title: "Article 19A: Right to Information",
      part: "Part II: Fundamental Rights and Principles of Policy",
      partNum: 2,
      category: "Fundamental Rights",
      highYield: true,
      text: "Every citizen shall have the right to have access to information in all matters of public importance subject to regulation and reasonable restrictions imposed by law.",
      explanation: "Inserted by the 18th Amendment in 2010. Transformed access to governmental records from a discretionary bureaucratic favor into an enforceable constitutional Fundamental Right. Led to federal and provincial Right to Information (RTI) Acts and Information Commissions.",
      keyPhrases: ["Access to Information", "Matters of Public Importance", "RTI Commission", "18th Amendment 2010"],
      examNotes: "High-yield topic for Governance and Public Administration: Evaluate the role of Article 19A and RTI laws in promoting transparency and accountability in public procurement.",
      mcqs: [
        {
          q: "Article 19A grants citizens the constitutional right of access to information regarding which matters?",
          opts: ["Only military defense budgets", "All matters of public importance", "Private corporate transactions", "Personal judicial files"],
          ans: 1,
          exp: "Article 19A provides citizens access to information in 'all matters of public importance', subject to reasonable legal restrictions."
        }
      ]
    },

    {
      num: "25",
      slug: "art-25",
      title: "Article 25: Equality of Citizens",
      part: "Part II: Fundamental Rights and Principles of Policy",
      partNum: 2,
      category: "Fundamental Rights",
      highYield: true,
      text: "(1) All citizens are equal before law and are entitled to equal protection of law.\n(2) There shall be no discrimination on the basis of sex.\n(3) Nothing in this Article shall prevent the State from making any special provision for the protection of women and children.",
      explanation: "Guarantees equality before the law and equal protection of the law. Crucially, Clause (3) enables 'Affirmative Action' / protective discrimination: the state can enact special protective laws, job quotas, and welfare schemes favoring women and children without violating the non-discrimination principle of Clause (2).",
      keyPhrases: ["Equal Protection of Law", "No Discrimination on Basis of Sex", "Clause 3: Special Provision for Women and Children", "Affirmative Action"],
      examNotes: "A staple in Gender Studies and Law papers: Explain how Article 25(3) empowers affirmative action and protective legislation for women and children in Pakistan.",
      mcqs: [
        {
          q: "Under Article 25(3), is the State permitted to make special provisions/laws for any specific group?",
          opts: ["No, equality must be absolute", "Yes, special provisions for women and children are permitted", "Only for armed forces personnel", "Only for civil servants"],
          ans: 1,
          exp: "Article 25(3) explicitly permits the State to make special affirmative provisions for the protection of women and children."
        }
      ]
    },

    {
      num: "25A",
      slug: "art-25a",
      title: "Article 25A: Right to Education",
      part: "Part II: Fundamental Rights and Principles of Policy",
      partNum: 2,
      category: "Fundamental Rights",
      highYield: true,
      text: "The State shall provide free and compulsory education to all children of the age of five to sixteen years in such manner as may be determined by law.",
      explanation: "Inserted by the 18th Constitutional Amendment in 2010. Elevated education from a non-justiciable Principle of Policy (former Article 37) into a justiciable Fundamental Right for children aged 5 to 16 years. Consequent to devolution, each province enacted compulsory education legislation (e.g. Sindh Right of Children to Free and Compulsory Education Act 2013).",
      keyPhrases: ["Free and Compulsory Education", "Ages 5 to 16 years", "Justiciable Right", "18th Amendment 2010"],
      examNotes: "Frequently tested in Pakistan Affairs and Essay papers: Critical analysis of Article 25A implementation vs. Pakistan's crisis of 26+ million out-of-school children (OOSC).",
      mcqs: [
        {
          q: "Under Article 25A, what is the age bracket for which the State is constitutionally mandated to provide free and compulsory education?",
          opts: ["3 to 10 years", "5 to 16 years", "6 to 18 years", "Birth to 14 years"],
          ans: 1,
          exp: "Article 25A mandates the State to provide free and compulsory education to all children aged five to sixteen (5 to 16) years."
        }
      ]
    },

    // Principles of Policy
    {
      num: "29",
      slug: "art-29",
      title: "Article 29: Principles of Policy",
      part: "Part II: Fundamental Rights and Principles of Policy",
      partNum: 2,
      category: "Principles of Policy",
      highYield: false,
      text: "(1) The Principles set out in this Chapter shall be known as the Principles of Policy, and it is the responsibility of each organ and authority of the State... to act in accordance with those Principles in so far as they relate to the functions of the organ or authority.\n(2) In so far as the observance of any particular Principle of Policy may be dependent upon resources being available... the Principle shall be regarded as subject to the availability of resources.",
      explanation: "Outlines the foundational nature of the Principles of Policy (Articles 29 to 40). Unlike Fundamental Rights, Principles of Policy are directory guidelines rather than directly enforceable commands; under Article 30, the validity of an action cannot be challenged in court solely for non-observance of a Policy Principle. However, under Article 29(3), the President (for the Federation) and Governors (for Provinces) must submit an annual report to the legislature on the implementation of these principles.",
      keyPhrases: ["Directory Guidelines", "Subject to Availability of Resources", "Article 30 Non-Justiciability", "Annual Implementation Report"],
      examNotes: "Distinguish clearly between Fundamental Rights (justiciable under Art 199/184(3)) and Principles of Policy (non-justiciable state aspirations).",
      mcqs: [
        {
          q: "Can the validity of an action or law be called into question in court on the ground that it does not adhere to the Principles of Policy?",
          opts: ["Yes, through a writ under Article 199", "No, Article 30 bars courts from invalidating actions solely on this ground", "Only in the Supreme Court", "Only through a referendum"],
          ans: 1,
          exp: "Under Article 30(2), the validity of an action or of a law shall not be called into question on the ground that it is not in accordance with the Principles of Policy."
        }
      ]
    },

    // The Federation: President & Parliament
    {
      num: "41",
      slug: "art-41",
      title: "Article 41: The President of Pakistan",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "The Federation",
      highYield: true,
      text: "(1) There shall be a President of Pakistan who shall be the Head of State and shall represent the unity of the Republic.\n(2) A person shall not be qualified for election as President unless he is a Muslim of not less than forty-five years of age and is qualified to be elected as member of the National Assembly.\n(3) The President shall be elected by an electoral college consisting of—\n(a) the members of both Houses; and\n(b) the members of the Provincial Assemblies.",
      explanation: "Establishes the Head of State. Qualifications: Muslim, at least 45 years old, qualified to be an MNA. The Electoral College comprises the Senate, National Assembly, and all four Provincial Assemblies (with provincial votes weighted equally under the Second Schedule formula).",
      keyPhrases: ["Head of State", "Unity of the Republic", "Muslim, Age 45+", "Electoral College (Senate, NA, 4 Provincial Assemblies)"],
      examNotes: "Frequently tested: Minimum age qualification for President (45 years) vs. Prime Minister/MNA (25 years) vs. Senator (30 years). Composition of presidential electoral college.",
      mcqs: [
        {
          q: "What is the minimum age requirement to be eligible for election as the President of Pakistan under Article 41(2)?",
          opts: ["25 years", "35 years", "45 years", "50 years"],
          ans: 2,
          exp: "Article 41(2) stipulates that a candidate for President must be a Muslim of not less than 45 years of age."
        }
      ]
    },

    {
      num: "50",
      slug: "art-50",
      title: "Article 50: Majlis-e-Shoora (Parliament)",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "Parliament",
      highYield: true,
      text: "There shall be a Majlis-e-Shoora (Parliament) of Pakistan consisting of the President and two Houses to be known respectively as the National Assembly and the Senate.",
      explanation: "Defines the bicameral Federal Legislature of Pakistan. Crucially, the Parliament of Pakistan legally consists of THREE distinct components: (1) The President, (2) The National Assembly (Lower House, representing population), and (3) The Senate (Upper House, representing equal provincial federating units).",
      keyPhrases: ["Majlis-e-Shoora", "Bicameral Legislature", "Three Components: President + National Assembly + Senate"],
      examNotes: "A classic trick question in FPSC/CSS MCQs: 'Parliament of Pakistan consists of: (a) NA and Senate (b) President, NA and Senate'. The correct answer is (b) President and both Houses.",
      mcqs: [
        {
          q: "Under Article 50 of the Constitution, Majlis-e-Shoora (Parliament) of Pakistan consists of:",
          opts: ["National Assembly and Senate only", "Prime Minister, Cabinet, and National Assembly", "The President and two Houses (National Assembly and Senate)", "The Supreme Court and Parliament"],
          ans: 2,
          exp: "Article 50 explicitly defines Majlis-e-Shoora (Parliament) as consisting of the President and two Houses: the National Assembly and the Senate."
        }
      ]
    },

    {
      num: "51",
      slug: "art-51",
      title: "Article 51: National Assembly",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "Parliament",
      highYield: true,
      text: "(1) There shall be three hundred and thirty-six seats for members in the National Assembly, including seats reserved for women and non-Muslims...\n(3) The seats in the National Assembly... shall be allocated to each Province and the Federal Capital on the basis of population in accordance with the last preceding census officially published.",
      explanation: "Governs the composition of the National Assembly. Post-25th Amendment (FATA merger reducing 12 tribal seats) and delimitation, the total strength stands at 336 seats (266 General seats, 60 Reserved for Women, 10 Reserved for Non-Muslims). Seats are allocated to provinces based strictly on official census population results.",
      keyPhrases: ["336 Total Seats", "266 General Seats", "60 Women Reserved", "10 Non-Muslim Reserved", "Allocation on Census Population"],
      examNotes: "Updated seat allocations post-FATA merger and 2023 Digital Census are high-frequency MCQs in CSS/PMS General Knowledge papers.",
      mcqs: [
        {
          q: "What is the total number of seats in the National Assembly of Pakistan under Article 51 following the FATA merger?",
          opts: ["342 seats", "336 seats", "272 seats", "100 seats"],
          ans: 1,
          exp: "Following the 25th Amendment and removal of FATA's 12 separate seats, the total membership of the National Assembly was reduced from 342 to 336 seats."
        }
      ]
    },

    {
      num: "58",
      slug: "art-58",
      title: "Article 58: Dissolution of National Assembly",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "Parliament",
      highYield: true,
      text: "(1) The President shall dissolve the National Assembly if so advised by the Prime Minister; and the National Assembly shall, unless sooner dissolved, stand dissolved at the expiration of forty-eight hours after the Prime Minister has so advised.\n(2) Notwithstanding anything contained in clause (2) of Article 48, the President may also dissolve the National Assembly in his discretion where, in his opinion—\n(a) a vote of no-confidence having been passed against the Prime Minister, no other member of the National Assembly command the confidence of the majority...",
      explanation: "Historical centerpiece of executive instability in Pakistan. The notorious Article 58(2)(b) was inserted by Gen. Zia via the 8th Amendment (1985), giving the President unilateral power to dismiss elected governments. It was invoked to dissolve assemblies in 1988 (Junejo), 1990 (Benazir), 1993 (Nawaz), and 1996 (Benazir). It was repealed by the 13th Amendment (1997), revived by Musharraf in the 17th Amendment (2003), and finally dismantled permanently by the 18th Amendment (2010), restoring parliamentary supremacy.",
      keyPhrases: ["Dissolution on Advice of Prime Minister", "Automatic 48-Hour Dissolution", "Repeal of Article 58(2)(b)", "18th Amendment Restoration"],
      examNotes: "Crucial for CSS Political Science & Constitutional History: Chronicle the rise, fall, revival, and final repeal of Article 58(2)(b) and its impact on democratic consolidation.",
      mcqs: [
        {
          q: "If the Prime Minister advises the President to dissolve the National Assembly under Article 58(1), within how many hours does it automatically dissolve if the President does not sign?",
          opts: ["24 hours", "48 hours", "72 hours", "7 days"],
          ans: 1,
          exp: "Article 58(1) states that the Assembly stands automatically dissolved at the expiration of 48 hours after the Prime Minister has so advised, even if the President fails to act."
        }
      ]
    },

    {
      num: "59",
      slug: "art-59",
      title: "Article 59: The Senate",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "Parliament",
      highYield: true,
      text: "(1) The Senate shall consist of ninety-six members, of whom—\n(a) fourteen shall be elected by the members of each Provincial Assembly;\n(b) eight shall be elected from the Federally Administered Tribal Areas... [phased out post-25th Amendment];\n(c) two on general seats, and one woman and one technocrat including aalim from the Federal Capital...\n(3) The Senate shall not be subject to dissolution but the term of its members... shall be six years, one-half of them retiring every three years.",
      explanation: "The permanent Upper House representing equal provincial representation. Post-FATA merger, Senate seats were restructured from 104 to 96 (each province has 23 seats: 14 general, 4 technocrats/ulema, 4 women, 1 non-Muslim; plus 4 seats for Islamabad). Senators serve 6-year terms, with half retiring every 3 years. The Senate cannot be dissolved under any circumstance.",
      keyPhrases: ["96 Total Senators", "Equal Provincial Representation (23 per province)", "Permanent House (No Dissolution)", "6-Year Term", "Half Retiring Every 3 Years"],
      examNotes: "Frequently tested: Composition of the Senate, term of Senators, rotation mechanism, and why the Senate is not subject to dissolution.",
      mcqs: [
        {
          q: "What is the term length of an individual member of the Senate (Senator) under Article 59?",
          opts: ["3 years", "5 years", "6 years", "Permanent for life"],
          ans: 2,
          exp: "A Senator is elected for a term of 6 years under Article 59(3), with half of the Senate's membership retiring every 3 years."
        }
      ]
    },

    {
      num: "62",
      slug: "art-62",
      title: "Article 62: Qualifications for membership of Majlis-e-Shoora (Parliament)",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "Parliament",
      highYield: true,
      text: "(1) A person shall not be qualified to be elected or chosen as a member of Majlis-e-Shoora (Parliament) unless—\n(a) he is a citizen of Pakistan;\n(b) he is, in the case of the National Assembly, not less than twenty-five years of age...\n(d) he is of good character and is not commonly known as one who violates Islamic Injunctions;\n(e) he has adequate knowledge of Islamic teachings...\n(f) he is sagacious, righteous and non-profligate, honest and ameen, there being no declaration to the contrary by a court of law...",
      explanation: "Outlines constitutional qualifications for parliamentary candidates. Sub-clause (1)(f) ('honest and ameen' / Sadiq and Ameen) gained immense judicial prominence in the *Panama Papers Case (Sami Ullah Baloch v. Abdul Karim Tous PLD 2018 SC 405)*, which initially held disqualification under 62(1)(f) to be for life. However, in January 2024, a 7-member Supreme Court bench overturned the lifetime disqualification precedent, holding that disqualification under Article 62(1)(f) is capped at five years pursuant to Section 232(2) of the Elections Act 2017.",
      keyPhrases: ["Age 25+ for National Assembly", "Sadiq and Ameen (Honest and Ameen)", "Article 62(1)(f)", "Sami Ullah Baloch Case Overruled (2024)", "5-Year Disqualification Limit"],
      examNotes: "Consistently examined in CSS Current Affairs & Constitutional Law: Trace the judicial trajectory of Article 62(1)(f) from lifetime disqualification to the 5-year limit established in 2024.",
      mcqs: [
        {
          q: "Under the Supreme Court's January 2024 ruling, what is the duration of disqualification under Article 62(1)(f)?",
          opts: ["Permanent lifetime ban", "5 years (as per Elections Act 2017)", "10 years", "Only for the term of that Assembly"],
          ans: 1,
          exp: "In January 2024, a 7-member Supreme Court bench overruled the Sami Ullah Baloch judgment, ruling that disqualification under Article 62(1)(f) is limited to 5 years."
        }
      ]
    },

    {
      num: "63A",
      slug: "art-63a",
      title: "Article 63A: Disqualification on grounds of defection",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "Parliament",
      highYield: true,
      text: "(1) If a member of a Parliamentary Party composed of a single political party in a House—\n(a) resigns from membership of his political party or joins another Parliamentary Party; or\n(b) votes or abstains from voting in the House contrary to any direction issued by the Parliamentary Party to which he belongs, in relation to—\n(i) election of the Prime Minister or the Chief Minister; or\n(ii) a vote of confidence or a vote of no-confidence; or\n(iii) a Money Bill or a Constitution (Amendment) Bill;\nhe may be declared in writing by the Party Head to have defected from the political party...",
      explanation: "Pakistan's Anti-Defection Law, first introduced by the 14th Amendment (1997) and refined by the 18th Amendment (2010). It applies only to three specific parliamentary votes: (i) PM/CM election, (ii) Vote of confidence / no-confidence, and (iii) Money Bills or Constitutional Amendment Bills. In May 2022, the SC ruled that defecting votes cannot be counted; however, in October 2024, a 5-member Supreme Court bench unanimously reviewed and overturned the 2022 opinion, confirming that under the plain text of Article 63A, defectors' votes MUST be counted, though they remain subject to subsequent disqualification.",
      keyPhrases: ["Anti-Defection Law", "Three Strict Voting Scenarios", "Declaration by Party Head", "Reference to Election Commission", "Voting Count Ruling (October 2024 Review)"],
      examNotes: "Extremely high yield for CSS 2025/2026: Analyze the constitutional mechanics of Article 63A and the Supreme Court's October 2024 review verdict on counting defectors' votes.",
      mcqs: [
        {
          q: "Under Article 63A, defection applies to voting against party directions in which of the following matters?",
          opts: ["Any ordinary resolution or bill", "Election of PM/CM, No-confidence, Money Bills, and Constitutional Amendments", "Private members' bills only", "Senate committee hearings"],
          ans: 1,
          exp: "Article 63A restricts defection strictly to: (i) Election of PM or CM; (ii) Vote of confidence or no-confidence; and (iii) A Money Bill or Constitutional Amendment Bill."
        }
      ]
    },

    {
      num: "73",
      slug: "art-73",
      title: "Article 73: Procedure with respect to Money Bills",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "Parliament",
      highYield: true,
      text: "(1) Notwithstanding anything contained in Article 70, a Money Bill shall originate in the National Assembly...\n(1A) A copy of the Money Bill... shall be transmitted to the Senate, which may, within fourteen days, make recommendations thereon to the National Assembly;\n(1B) The National Assembly shall consider the recommendations of the Senate and may pass the Bill, with or without incorporating the recommendations...",
      explanation: "Governs financial legislation and annual federal budgets. Money Bills originate exclusively in the National Assembly. Under the 18th Amendment, the Senate can examine the budget and make non-binding recommendations within 14 days, but the National Assembly retains final, sovereign authority to pass or reject the Money Bill without Senate assent.",
      keyPhrases: ["Money Bill Originates in National Assembly", "14-Day Senate Recommendation Window", "National Assembly Financial Supremacy", "No Presidential Veto on Money Bills"],
      examNotes: "A classic question on bicameral relations: Contrast the legislative powers of the Senate with the National Assembly regarding ordinary legislation (Art 70) vs Money Bills (Art 73).",
      mcqs: [
        {
          q: "Under Article 73(1A), within how many days must the Senate submit its recommendations on a Money Bill to the National Assembly?",
          opts: ["7 days", "14 days", "30 days", "90 days"],
          ans: 1,
          exp: "Under Article 73(1A), the Senate may make non-binding recommendations on a Money Bill to the National Assembly within 14 days."
        }
      ]
    },

    {
      num: "89",
      slug: "art-89",
      title: "Article 89: Power of President to promulgate Ordinances",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "Parliament",
      highYield: true,
      text: "(1) The President may, except when the Senate or National Assembly is in session, if satisfied that circumstances exist which render it necessary to take immediate action, make and promulgate an Ordinance...\n(2) An Ordinance promulgated under this Article shall have the same force and effect as an Act of Majlis-e-Shoora (Parliament)... and shall stand repealed at the expiration of one hundred and twenty days from its promulgation...",
      explanation: "Governs executive law-making when Parliament is not in session. Conditions: (i) Neither House is in session, (ii) President is satisfied immediate action is required. An Ordinance has a lifespan of 120 days. Under the 18th Amendment, it can be extended only once for another 120 days by a resolution passed by either House. If rejected by either House, it is repealed immediately.",
      keyPhrases: ["Presidential Ordinance", "When Parliament is Not in Session", "120 Days Lifespan", "One-Time 120-Day Extension (18th Amendment)", "Cannot Promulgate Money Bill without NA"],
      examNotes: "Frequently examined in Governance and Constitutional Law: Critique the executive abuse of Ordinance-making power under Article 89 as an encroachment on parliamentary supremacy.",
      mcqs: [
        {
          q: "What is the initial constitutional lifespan of a Presidential Ordinance promulgated under Article 89?",
          opts: ["60 days", "90 days", "120 days", "180 days"],
          ans: 2,
          exp: "An Ordinance promulgated under Article 89 stands repealed after 120 days, unless extended once for another 120 days by Parliament."
        }
      ]
    },

    {
      num: "95",
      slug: "art-95",
      title: "Article 95: Vote of no-confidence against Prime Minister",
      part: "Part III: The Federation of Pakistan",
      partNum: 3,
      category: "The Federation",
      highYield: true,
      text: "(1) A resolution for a vote of no-confidence against the Prime Minister may be moved by not less than twenty per centum of the total membership of the National Assembly.\n(2) A resolution referred to in clause (1) shall not be voted upon before the expiration of three days, or later than seven days, from the day on which such resolution is moved in the National Assembly.\n(4) If the resolution is passed by a majority of the total membership of the National Assembly, the Prime Minister shall cease to hold office.",
      explanation: "Constitutional mechanism to dismiss a sitting Prime Minister. Requirements: (i) Moved by at least 20% of NA members (68 MNAs in a 336-member house), (ii) Voting must occur between 3 and 7 days after introduction, (iii) Requires an absolute majority of total membership (169 votes out of 336). Famously invoked on April 9–10, 2022, resulting in the historic first-ever successful removal of a Pakistani Prime Minister (Imran Khan) via a vote of no-confidence.",
      keyPhrases: ["20% Requisition Threshold", "Cooling-Off Period: 3 to 7 Days", "Absolute Majority of Total Membership", "April 2022 Historic Precedent"],
      examNotes: "Crucial for CSS Pakistan Affairs & Current Affairs: Detail the constitutional steps of Article 95 and the April 2022 Supreme Court ruling setting aside Deputy Speaker Qasim Suri's ruling.",
      mcqs: [
        {
          q: "What minimum percentage of National Assembly members is required to move a resolution for a vote of no-confidence under Article 95(1)?",
          opts: ["10%", "20%", "25%", "33%"],
          ans: 1,
          exp: "Under Article 95(1), a resolution for a vote of no-confidence against the Prime Minister must be moved by not less than 20% of the total membership of the National Assembly."
        },
        {
          q: "Within what timeframe must a vote of no-confidence be voted upon after being moved in the National Assembly?",
          opts: ["Immediately on the same day", "Not earlier than 3 days and not later than 7 days", "Within 14 days", "After 30 days"],
          ans: 1,
          exp: "Article 95(2) mandates that the resolution shall not be voted upon before 3 days or later than 7 days from the day it is moved."
        }
      ]
    },

    // Provinces & Inter-Provincial Relations
    {
      num: "140A",
      slug: "art-140a",
      title: "Article 140A: Local Government",
      part: "Part IV: The Provinces",
      partNum: 4,
      category: "Provinces",
      highYield: true,
      text: "(1) Each Province shall, by law, establish a local government system and devolve political, administrative and financial responsibility and authority to the elected representatives of the local governments.\n(2) Elections to the local governments shall be held by the Election Commission of Pakistan.",
      explanation: "Inserted by the 17th Amendment and preserved by the 18th Amendment. Imposes a mandatory constitutional duty on all four provinces to establish local government systems and devolve political, administrative, and financial powers to local elected representatives. Clause (2) tasks the Election Commission of Pakistan (ECP) with conducting local body elections.",
      keyPhrases: ["Three-tier Devolution", "Political, Administrative & Financial Authority", "Elected Local Representatives", "ECP Conducts Local Elections"],
      examNotes: "A recurring theme in CSS Public Administration and Pakistan Affairs: Discuss the constitutional failure of provincial governments in devolving genuine fiscal powers under Article 140A.",
      mcqs: [
        {
          q: "Which constitutional body is mandated under Article 140A(2) to conduct Local Government elections in Pakistan?",
          opts: ["Provincial Local Government Boards", "Election Commission of Pakistan (ECP)", "District Sessions Judges", "Ministry of Interior"],
          ans: 1,
          exp: "Article 140A(2) explicitly provides that elections to the local governments shall be held by the Election Commission of Pakistan."
        }
      ]
    },

    {
      num: "153",
      slug: "art-153",
      title: "Article 153: Council of Common Interests (CCI)",
      part: "Part V: Relations Between Federation and Provinces",
      partNum: 5,
      category: "Federal-Provincial",
      highYield: true,
      text: "(1) There shall be a Council of Common Interests, in this Chapter referred to as the Council, to be appointed by the President.\n(2) The Council shall consist of—\n(a) the Prime Minister who shall be the Chairman of the Council;\n(b) the Chief Ministers of the Provinces; and\n(c) three members from the Federal Government to be nominated by the Prime Minister from time to time.",
      explanation: "The supreme constitutional arbiter for federal-provincial coordination. Chaired by the Prime Minister and comprising all 4 Provincial Chief Ministers plus 3 federal nominees. Formulates and regulates policies regarding matters in the Federal Legislative List Part II (railways, mineral oil, natural gas, electricity, ports). Under Article 154, it must meet at least once every 90 days and has a permanent secretariat.",
      keyPhrases: ["Council of Common Interests (CCI)", "Chaired by Prime Minister", "Four Chief Ministers", "Federal Legislative List Part II", "Must Meet Every 90 Days"],
      examNotes: "Core CSS topic: Evaluate the efficacy of the Council of Common Interests (CCI) in resolving inter-provincial disputes over water, gas royalties, and census results post-18th Amendment.",
      mcqs: [
        {
          q: "Who serves as the Chairman of the Council of Common Interests (CCI) under Article 153?",
          opts: ["President of Pakistan", "Prime Minister of Pakistan", "Chairman of the Senate", "Senior-most Chief Minister"],
          ans: 1,
          exp: "Under Article 153(2)(a), the Prime Minister of Pakistan serves as the Chairman of the Council of Common Interests."
        },
        {
          q: "How frequently must the Council of Common Interests (CCI) meet under Article 154(3)?",
          opts: ["Once every month", "At least once in ninety days", "Twice a year", "Annually"],
          ans: 1,
          exp: "Article 154(3), as amended by the 18th Amendment, mandates that the CCI shall meet at least once in ninety (90) days."
        }
      ]
    },

    {
      num: "160",
      slug: "art-160",
      title: "Article 160: National Finance Commission (NFC)",
      part: "Part VI: Finance, Property, Contracts and Suits",
      partNum: 6,
      category: "Finance",
      highYield: true,
      text: "(1) Within six months of the commencing day and thereafter at intervals not exceeding five years, the President shall constitute a National Finance Commission...\n(3A) The share of the Provinces, in each Award of National Finance Commission shall not be less than the share given to the Provinces in the previous Award.\n(3B) The Federal Finance Minister and Provincial Finance Ministers shall monitor the implementation of the Award bi-annually and lay their reports before both Houses...",
      explanation: "Governs fiscal federalism and revenue sharing from the Federal Divisible Pool (income tax, sales tax, customs). Comprises Federal Finance Minister, Provincial Finance Ministers, and expert members. The landmark 7th NFC Award (2010) moved away from a purely population-based formula to a multi-criteria formula (Population 82%, Poverty/Backwardness 10.3%, Revenue Collection 5%, Inverse Population Density 2.7%), allocating 57.5% of the divisible pool to provinces. Crucially, Clause (3A) added by the 18th Amendment protects provincial shares: no future NFC award can reduce the provincial share below the previous award.",
      keyPhrases: ["National Finance Commission (NFC)", "Federal Divisible Pool", "7th NFC Award Multi-Criteria Formula", "Article 160(3A) Non-Retrogression Protection", "Bi-Annual Monitoring Reports"],
      examNotes: "A favorite CSS Economics, Pakistan Affairs & Governance question: Discuss the political economy of the NFC Award. Explain the significance of Article 160(3A) preventing reduction of provincial shares.",
      mcqs: [
        {
          q: "What constitutional guarantee was added to Article 160 by the 18th Amendment under Clause (3A)?",
          opts: [
            "Provinces can collect customs duty directly",
            "The share of the Provinces in each new NFC Award shall not be less than the share in the previous Award",
            "The Federal Government retains 75% of all taxes",
            "NFC Awards are decided solely by the Prime Minister"
          ],
          ans: 1,
          exp: "Article 160(3A) ensures non-retrogression: the provincial share in any subsequent NFC Award cannot be reduced below the share allocated in the preceding Award."
        }
      ]
    },

    // The Judicature: Supreme Court, High Courts & 26th Amendment
    {
      num: "175A",
      slug: "art-175a",
      title: "Article 175A: Appointment of Judges to Supreme Court, High Courts and FSC",
      part: "Part VII: The Judicature",
      partNum: 7,
      category: "Judiciary",
      highYield: true,
      text: "(1) There shall be a Judicial Commission of Pakistan... for appointment of Judges of the Supreme Court, High Courts and the Federal Shariat Court...\n[As amended by 26th Constitutional Amendment, Oct 2024]:\n(2) The Chief Justice of Pakistan shall be appointed by a Special Parliamentary Committee consisting of twelve members from amongst the three most senior Judges of the Supreme Court...\n(3) The Committee shall send the name of the nominee to the Prime Minister who shall forward it to the President for appointment.",
      explanation: "Originally inserted by the 18th Amendment (2010) and modified by the 19th Amendment (2011) to balance judicial independence with democratic oversight. Radically overhauled by the landmark 26th Constitutional Amendment on 20 October 2024: (i) Chief Justice of Pakistan is no longer appointed automatically by seniority; a 12-member Special Parliamentary Committee (8 MNAs, 4 Senators, proportional to party strength) selects the CJP from among the three senior-most SC judges; (ii) The CJP has a fixed term of 3 years; (iii) Overhauled Judicial Commission of Pakistan (JCP) expanded to include parliamentarians and a woman/minority member, empowered to evaluate the annual performance of High Court judges.",
      keyPhrases: ["Judicial Commission of Pakistan (JCP)", "26th Constitutional Amendment (Oct 2024)", "Special Parliamentary Committee (12 Members)", "Selection from 3 Senior-Most Judges", "Fixed 3-Year CJP Tenure"],
      examNotes: "The single most critical contemporary topic for CSS 2025/2026: Critically analyze the 26th Constitutional Amendment (2024). How does it alter the appointment procedure of the Chief Justice of Pakistan and judicial independence under Article 175A?",
      mcqs: [
        {
          q: "Under the 26th Constitutional Amendment (2024), how is the Chief Justice of Pakistan appointed under Article 175A?",
          opts: [
            "Automatically the senior-most judge succeeds upon vacancy",
            "By a 12-member Special Parliamentary Committee from amongst the 3 senior-most Supreme Court judges",
            "Directly by the President without any consultation",
            "By a simple majority vote in the Senate"
          ],
          ans: 1,
          exp: "The 26th Amendment amended Article 175A so that a 12-member Special Parliamentary Committee nominates the CJP from among the three most senior judges of the Supreme Court."
        },
        {
          q: "What is the fixed tenure of the Chief Justice of Pakistan established by the 26th Constitutional Amendment?",
          opts: ["2 years", "3 years (or until age 65, whichever is earlier)", "5 years", "4 years"],
          ans: 1,
          exp: "The 26th Amendment fixed the tenure of the Chief Justice of Pakistan at 3 years, subject to the retirement age of 65 years."
        }
      ]
    },

    {
      num: "184",
      slug: "art-184",
      title: "Article 184: Original Jurisdiction of Supreme Court (including 184(3) Public Interest)",
      part: "Part VII: The Judicature",
      partNum: 7,
      category: "Judiciary",
      highYield: true,
      text: "(1) The Supreme Court shall, to the exclusion of every other court, have original jurisdiction in any dispute between any two or more Governments...\n(3) Without prejudice to the provisions of Article 199, the Supreme Court shall, if it considers that a question of public importance with reference to the enforcement of any of the Fundamental Rights conferred by Chapter 1 of Part II is involved, have the power to make an order of the nature mentioned in the said Article.\n[As amended by 26th Amendment 2024: Original jurisdiction under clause (3) to be exercised exclusively by Constitutional Benches].",
      explanation: "Article 184(3) is the famous provision empowering the Supreme Court to entertain public interest litigation (PIL) and exercise suo motu jurisdiction. Two conditions precedent: (1) A question of 'Public Importance', and (2) Enforcement of 'Fundamental Rights'. Used extensively by Chief Justices Iftikhar Chaudhry, Saqib Nisar, and Gulzar Ahmed for suo motu notices. Under the 26th Constitutional Amendment (October 2024), petitions under Article 184(3) can now be heard ONLY by the newly formed Constitutional Benches of the Supreme Court.",
      keyPhrases: ["Original Jurisdiction", "Article 184(3)", "Question of Public Importance", "Enforcement of Fundamental Rights", "Suo Motu Powers", "Constitutional Benches (26th Amendment)"],
      examNotes: "A recurrent CSS Constitutional Law exam question: Trace the evolution and critique of judicial activism and suo motu jurisdiction under Article 184(3) in Pakistan. How has the 26th Amendment impacted it?",
      mcqs: [
        {
          q: "What two conditions must be satisfied for the Supreme Court to exercise jurisdiction under Article 184(3)?",
          opts: [
            "Criminal appeal and civil damages claim",
            "Question of public importance AND enforcement of Fundamental Rights",
            "Approval of the Prime Minister and President",
            "Dispute between two private citizens"
          ],
          ans: 1,
          exp: "Article 184(3) explicitly requires both: (1) a question of public importance, and (2) reference to the enforcement of Fundamental Rights."
        }
      ]
    },

    {
      num: "199",
      slug: "art-199",
      title: "Article 199: Jurisdiction of High Court (Writ Jurisdiction)",
      part: "Part VII: The Judicature",
      partNum: 7,
      category: "Judiciary",
      highYield: true,
      text: "(1) Subject to the Constitution, a High Court may, if it is satisfied that no other adequate remedy is provided by law—\n(a) on the application of any aggrieved party, make an order—\n(i) directing a person... to refrain from doing that which he is not permitted by law to do, or to do that which he is required by law to do [Prohibition & Mandamus]; or\n(ii) declaring that any act done... has been done without lawful authority and is of no legal effect [Certiorari]; or\n(b) on the application of any person, make an order—\n(i) directing that a person in custody... be brought before it so that the Court may satisfy itself that he is not being held without lawful authority [Habeas Corpus]; or\n(ii) requiring a person... holding or purporting to hold a public office to show under what authority of law he claims to hold that office [Quo Warranto]...",
      explanation: "The primary judicial remedy in Pakistan protecting citizens against executive overreach. Grants High Courts the power to issue prerogative constitutional writs: (1) **Habeas Corpus** (produce illegal detainee), (2) **Mandamus** (compel public official to perform statutory duty), (3) **Prohibition** (prevent inferior tribunal from exceeding jurisdiction), (4) **Certiorari** (quash unlawful administrative/judicial decision), and (5) **Quo Warranto** (challenge unlawful usurpation of public office). Under clause (1)(c), the High Court can enforce Fundamental Rights.",
      keyPhrases: ["Five Prerogative Writs", "Habeas Corpus (Produce the Body)", "Mandamus (We Command)", "Certiorari (Quash Unlawful Act)", "Prohibition (Halt Illegal Proceeding)", "Quo Warranto (By What Authority)"],
      examNotes: "A mandatory topic in Law and CSS: Define and distinguish the five types of writs available under Article 199 of the Constitution of Pakistan.",
      mcqs: [
        {
          q: "Which writ under Article 199 is sought to secure the release of a person unlawfully detained by state authorities or police?",
          opts: ["Writ of Quo Warranto", "Writ of Habeas Corpus", "Writ of Certiorari", "Writ of Mandamus"],
          ans: 1,
          exp: "Habeas Corpus ('produce the body') under Article 199(1)(b)(i) directs that an unlawfully detained individual be brought before the High Court and released."
        },
        {
          q: "Which writ under Article 199 challenges the legal authority of a person holding a public office to inquire by what warrant they hold that position?",
          opts: ["Writ of Mandamus", "Writ of Prohibition", "Writ of Quo Warranto", "Writ of Certiorari"],
          ans: 2,
          exp: "A Writ of Quo Warranto ('by what warrant/authority') under Article 199(1)(b)(ii) inquires into the legality of an individual holding a public office."
        }
      ]
    },

    {
      num: "209",
      slug: "art-209",
      title: "Article 209: Supreme Judicial Council (SJC)",
      part: "Part VII: The Judicature",
      partNum: 7,
      category: "Judiciary",
      highYield: true,
      text: "(1) There shall be a Supreme Judicial Council of Pakistan...\n(2) The Council shall consist of—\n(a) the Chief Justice of Pakistan;\n(b) the two next most senior Judges of the Supreme Court; and\n(c) the two most senior Chief Justices of High Courts...\n(5) If, on information from any source, the Council or the President is of the opinion that a Judge of the Supreme Court or of a High Court—\n(a) may be incapable of properly performing the duties of his office by reason of physical or mental incapacity; or\n(b) may have been guilty of misconduct,\nthe Council shall inquire into the matter...",
      explanation: "The sole constitutional mechanism for judicial accountability in Pakistan. Comprises 5 members: Chief Justice of Pakistan, two senior-most SC judges, and two senior-most High Court Chief Justices. Investigates charges of mental/physical incapacity or gross judicial misconduct against superior court judges. A judge cannot be removed by Parliament (no political impeachment); removal occurs solely by the President on the binding recommendation of the SJC.",
      keyPhrases: ["Supreme Judicial Council (SJC)", "5-Member Composition", "Judicial Misconduct Inquiry", "No Parliamentary Impeachment of Judges", "Justice Qazi Faez Isa Reference Case"],
      examNotes: "Frequently tested in Constitutional Law: How does Pakistan's system of judicial removal through the Supreme Judicial Council differ from the US/UK system of parliamentary impeachment?",
      mcqs: [
        {
          q: "Under Article 209, who investigates allegations of misconduct against superior court judges in Pakistan?",
          opts: ["Parliamentary Joint Committee", "Supreme Judicial Council (SJC)", "Federal Investigation Agency (FIA)", "National Accountability Bureau (NAB)"],
          ans: 1,
          exp: "The Supreme Judicial Council (SJC) is the exclusive constitutional forum under Article 209 empowered to investigate allegations of misconduct against superior court judges."
        }
      ]
    },

    // Elections & ECP
    {
      num: "218",
      slug: "art-218",
      title: "Article 218: Election Commission of Pakistan",
      part: "Part VIII: Elections",
      partNum: 8,
      category: "Elections",
      highYield: true,
      text: "(1) For the purpose of election to both Houses of Majlis-e-Shoora (Parliament), Provincial Assemblies and for election to such other offices as may be specified by law, a permanent Election Commission shall be constituted...\n(3) It shall be the duty of the Election Commission to organize and conduct the election, and to make such arrangements as are necessary to ensure that the election is conducted honestly, justly, fairly and in accordance with law, and that corrupt practices are guarded against.",
      explanation: "Constitutes the permanent Election Commission of Pakistan (ECP), comprising the Chief Election Commissioner (CEC) and four members (one from each province). Clause (3) is the fundamental mandate granting the ECP sweeping administrative and regulatory powers to ensure elections are held 'honestly, justly, fairly and in accordance with law'.",
      keyPhrases: ["Permanent Election Commission", "Honestly, Justly, Fairly and in Accordance with Law", "Guarding Against Corrupt Practices", "Chief Election Commissioner & 4 Provincial Members"],
      examNotes: "Central to electoral reform and CSS Current Affairs essays: Analyze the constitutional duties and powers of the ECP under Article 218(3) and the Elections Act 2017.",
      mcqs: [
        {
          q: "What is the primary constitutional mandate of the Election Commission of Pakistan as enunciated in Article 218(3)?",
          opts: [
            "To appoint the federal cabinet",
            "To organize and conduct elections honestly, justly, fairly and guard against corrupt practices",
            "To pass annual federal tax laws",
            "To command the civil armed forces during polling"
          ],
          ans: 1,
          exp: "Article 218(3) makes it the duty of the Election Commission to ensure that elections are conducted honestly, justly, fairly, and in accordance with law, and that corrupt practices are guarded against."
        }
      ]
    },

    // Islamic Provisions
    {
      num: "227",
      slug: "art-227",
      title: "Article 227: Provisions relating to the Holy Quran and Sunnah",
      part: "Part IX: Islamic Provisions",
      partNum: 9,
      category: "Islamic Provisions",
      highYield: true,
      text: "(1) All existing laws shall be brought in conformity with the Injunctions of Islam as laid down in the Holy Quran and Sunnah, in this Part referred to as the Injunctions of Islam, and no law shall be enacted which is repugnant to such Injunctions...\n(2) Effect shall be given to the provisions of clause (1) only in the manner provided in this Part.",
      explanation: "The overarching Repugnancy Clause of the Constitution. Mandates that all existing laws must be brought into conformity with the Injunctions of Islam, and bars the enactment of any new law repugnant to Quran and Sunnah. However, Clause (2) clarifies that this clause can be given effect ONLY in the manner provided in the Constitution (i.e., through the Federal Shariat Court under Chapter 3A of Part VII and advisory opinions of the Council of Islamic Ideology under Article 230).",
      keyPhrases: ["Repugnancy Clause", "Injunctions of Islam (Quran & Sunnah)", "Conformity of Laws", "Role of Federal Shariat Court & CII"],
      examNotes: "A classic question in Islamiat and Constitutional Law: Explain how Article 227 balances the Islamic character of Pakistan with parliamentary democracy.",
      mcqs: [
        {
          q: "Article 227 mandates that all laws in Pakistan must be in conformity with:",
          opts: ["Customary tribal codes", "Injunctions of Islam as laid down in the Holy Quran and Sunnah", "English Common Law", "International treaties only"],
          ans: 1,
          exp: "Article 227(1) mandates that all existing laws shall be brought into conformity with the Injunctions of Islam as laid down in the Holy Quran and Sunnah."
        }
      ]
    },

    // Emergencies
    {
      num: "232",
      slug: "art-232",
      title: "Article 232: Proclamation of Emergency on account of war, internal disturbance, etc.",
      part: "Part X: Emergency Provisions",
      partNum: 10,
      category: "Emergency",
      highYield: true,
      text: "(1) If the President is satisfied that a grave emergency exists in which the security of Pakistan, or any part thereof, is threatened by war or external aggression, or by internal disturbance beyond the power of a Provincial Government to control, he may issue a Proclamation of Emergency...\nProvided that for the imposition of emergency due to internal disturbances beyond the power of a Provincial Government to control, a resolution from the Provincial Assembly of that Province shall be required...",
      explanation: "Empowers the President to proclaim a national or provincial emergency. Following the 18th Amendment, the power to impose an emergency on grounds of 'internal disturbance' was checked: the President can only proclaim it if the concerned Provincial Assembly passes a resolution requesting it, or if both Houses of Parliament pass a joint resolution.",
      keyPhrases: ["Proclamation of Emergency", "War or External Aggression", "Internal Disturbance", "Provincial Assembly Resolution Safeguard (18th Amendment)"],
      examNotes: "How did the 18th Amendment safeguard provincial autonomy against arbitrary central emergency proclamations under Article 232?",
      mcqs: [
        {
          q: "Post-18th Amendment, what is required before the Federal Government can impose an emergency in a province under Article 232 on the grounds of internal disturbance?",
          opts: [
            "A resolution from the concerned Provincial Assembly",
            "A decree from the Governor alone",
            "Approval by the UN Security Council",
            "No approval is needed"
          ],
          ans: 0,
          exp: "Under the proviso to Article 232(1) added by the 18th Amendment, an emergency based on internal disturbance requires a resolution from the Provincial Assembly of that province."
        }
      ]
    },

    // Amendments
    {
      num: "239",
      slug: "art-239",
      title: "Article 239: Constitution Amendment Bill",
      part: "Part XI: Amendment of Constitution",
      partNum: 11,
      category: "Amendments",
      highYield: true,
      text: "(1) A Bill to amend the Constitution may originate in either House and, when the Bill has been passed by the votes of not less than two-thirds of the total membership of the House, it shall be transmitted to the other House;\n(2) If the Bill is passed without amendment by the votes of not less than two-thirds of the total membership of the other House... it shall be presented to the President for assent...\n(4) A Bill to amend the Constitution which would have the effect of altering the limits of a Province shall not be presented to the President for assent unless it has been passed by the Provincial Assembly of that Province by the votes of not less than two-thirds of its total membership.\n(5) No amendment of the Constitution shall be called in question in any court on any ground whatsoever.",
      explanation: "Governs the procedure for constitutional amendments. Key requirements: (i) Can originate in either the National Assembly or the Senate, (ii) Requires a supermajority of two-thirds (2/3rds) of the total membership in BOTH Houses, (iii) If the amendment alters the boundaries/limits of a province (e.g. creating a new province), it must ALSO be passed by a 2/3rds majority of that specific Provincial Assembly (Clause 4). Clauses (5) and (6) state that parliamentary constituent power has no limits, though the Supreme Court in the *District Bar Association Rawalpindi v. Federation of Pakistan (PLD 2015 SC 401)* case recognized limited judicial review over constitutional amendments that violate salient basic features.",
      keyPhrases: ["Two-Thirds (2/3rds) Supermajority", "Origin in Either House", "Provincial Boundary Alteration (Clause 4)", "Salient Features Doctrine"],
      examNotes: "Essential for CSS: Outline the procedure for amending the Constitution of Pakistan under Article 239. What is the special requirement for creating a new province or altering provincial boundaries?",
      mcqs: [
        {
          q: "What majority is required in both the National Assembly and the Senate to pass a Constitutional Amendment Bill under Article 239?",
          opts: ["Simple majority of members present and voting", "Not less than two-thirds (2/3rds) of the total membership of each House", "Three-fourths (3/4ths) majority", "Unanimous vote"],
          ans: 1,
          exp: "Article 239 requires that a Constitution Amendment Bill must be passed by the votes of not less than two-thirds (2/3rds) of the total membership of each House."
        },
        {
          q: "Under Article 239(4), if a constitutional amendment alters the territorial limits of a province, what additional approval is mandatory?",
          opts: [
            "Passed by the concerned Provincial Assembly by not less than a two-thirds majority",
            "A national referendum",
            "Approval by the Council of Common Interests",
            "Judicial certification"
          ],
          ans: 0,
          exp: "Article 239(4) mandates that any amendment altering the boundaries of a province must be passed by at least a two-thirds majority of that province's assembly."
        }
      ]
    },

    // Armed Forces
    {
      num: "245",
      slug: "art-245",
      title: "Article 245: Functions of Armed Forces",
      part: "Part XII: Miscellaneous",
      partNum: 12,
      category: "Armed Forces",
      highYield: true,
      text: "(1) The Armed Forces shall, under the directions of the Federal Government, defend Pakistan against external aggression or threat of war, and, subject to law, act in aid of civil power when called upon to do so.\n(2) The validity of any direction issued by the Federal Government under clause (1) shall not be called in question in any court.\n(3) A High Court shall not exercise any jurisdiction under Article 199 in relation to any area in which the Armed Forces of Pakistan are, for the time being, acting in aid of civil power in pursuance of Article 245...",
      explanation: "Specifies the dual functions of Pakistan's Armed Forces: (1) Defend Pakistan against external aggression, and (2) Act in aid of civil power when called upon by the Federal Government (e.g. disaster relief during floods/earthquakes, anti-terrorism operations, census security). When troops are deployed under Article 245 in aid of civil power, High Court writ jurisdiction under Article 199 is suspended in that specific operational area.",
      keyPhrases: ["Defend against External Aggression", "Act in Aid of Civil Power", "Federal Government Directions", "High Court Writ Bar (Clause 3)"],
      examNotes: "Frequently discussed in civil-military relations and national security law. Note the difference between deployment in aid of civil power under Article 245 vs Section 131-A of CrPC.",
      mcqs: [
        {
          q: "What are the two constitutionally assigned functions of the Armed Forces under Article 245(1)?",
          opts: [
            "Formulate foreign policy and collect federal revenues",
            "Defend Pakistan against external aggression and act in aid of civil power when called upon",
            "Run administrative tribunals and conduct general elections",
            "Draft statutes and regulate industrial relations"
          ],
          ans: 1,
          exp: "Article 245(1) specifies that the Armed Forces shall: (1) defend Pakistan against external aggression or threat of war, and (2) act in aid of civil power when called upon by the Federal Government."
        }
      ]
    }
  ],

  // Complete List of All 26 Constitutional Amendments
  amendmentsTimeline: [
    { num: 1, year: 1974, title: "1st Amendment", desc: "Recognized the new boundaries of Pakistan following the independence of Bangladesh and amended Articles 1, 8, 17, 61, 101, etc." },
    { num: 2, year: 1974, title: "2nd Amendment", desc: "Defined the status of non-Muslim minorities; declared Ahmadis / Qadianis / Lahoris as non-Muslims in Articles 106 and 260(3)." },
    { num: 3, year: 1975, title: "3rd Amendment", desc: "Extended the period of preventive detention from 1 month to 3 months under Article 10." },
    { num: 4, year: 1975, title: "4th Amendment", desc: "Decreased powers of High Courts in bail grants under Article 199; allocated seats for minorities." },
    { num: 5, year: 1976, title: "5th Amendment", desc: "Widened the scope of restriction on High Courts and fixed terms of Chief Justices." },
    { num: 6, year: 1976, title: "6th Amendment", desc: "Permitted Chief Justice of Pakistan to complete 5-year term notwithstanding attainment of 65 years age." },
    { num: 7, year: 1977, title: "7th Amendment", desc: "Enabled Prime Minister to obtain a vote of confidence through a national referendum under Article 96A." },
    { num: 8, year: 1985, title: "8th Amendment", desc: "Historical amendment under Zia-ul-Haq: shifted system to semi-presidential, inserted 58(2)(b) assembly dissolution power, Article 2A, and validated martial law regulations." },
    { num: 9, year: 1986, title: "9th Amendment", desc: "Shariat Bill passed by Senate; lapsed upon dissolution of National Assembly in 1988." },
    { num: 10, year: 1987, title: "10th Amendment", desc: "Decreased interval between parliamentary sessions from 160 days to 130 days under Articles 54 and 130." },
    { num: 11, year: 1989, title: "11th Amendment", desc: "Bill introduced regarding reserved seats for women; withdrawn/lapsed." },
    { num: 12, year: 1991, title: "12th Amendment", desc: "Established Special Courts for Speedy Trials for heinous crimes for a period of 3 years under Article 212B." },
    { num: 13, year: 1997, title: "13th Amendment", desc: "Repealed Article 58(2)(b) and stripped the President of discretionary powers to dissolve the National Assembly and dismiss the Prime Minister." },
    { num: 14, year: 1997, title: "14th Amendment", desc: "First Anti-Defection legislation: inserted Article 63A to disqualify parliamentarians defecting or voting against party lines." },
    { num: 15, year: 1998, title: "15th Amendment", desc: "Shariat Bill (Nawaz Sharif) passed by National Assembly to make Quran and Sunnah supreme law; lapsed in Senate upon 1999 military coup." },
    { num: 16, year: 1999, title: "16th Amendment", desc: "Extended the quota system for affirmative action in civil service recruitment for another 20 years (Article 27)." },
    { num: 17, year: 2003, title: "17th Amendment", desc: "Revived presidential powers under Pervez Musharraf (LFO): re-inserted Article 58(2)(b), established National Security Council, and validated 1999 coup." },
    { num: 18, year: 2010, title: "18th Amendment", desc: "Historic democratic watershed (102 articles amended): abolished 58(2)(b), devolved powers to provinces by abolishing Concurrent List, reformed Judicial Commission (Art 175A), inserted Fair Trial (10A), RTI (19A), Education (25A), and renamed NWFP to Khyber Pakhtunkhwa." },
    { num: 19, year: 2011, title: "19th Amendment", desc: "Refined Judicial Commission of Pakistan (JCP) composition under Article 175A following Supreme Court reference." },
    { num: 20, year: 2012, title: "20th Amendment", desc: "Established independent procedures for appointing Caretaker Governments and Chief Election Commissioner through parliamentary consensus." },
    { num: 21, year: 2015, title: "21st Amendment", desc: "Established Military Courts for trial of terrorist suspects following the horrific Army Public School (APS) Peshawar massacre; sunset clause of 2 years." },
    { num: 22, year: 2016, title: "22nd Amendment", desc: "Reformed qualifications and appointment procedure for Chief Election Commissioner and ECP members." },
    { num: 23, year: 2017, title: "23rd Amendment", desc: "Extended Military Courts for trial of terrorists for an additional 2-year period." },
    { num: 24, year: 2017, title: "24th Amendment", desc: "Reallocated National Assembly seats among provinces based on provisional results of the 6th Population Census 2017." },
    { num: 25, year: 2018, title: "25th Amendment", desc: "Historic integration: Merged the Federally Administered Tribal Areas (FATA) and PATA into Khyber Pakhtunkhwa, abolishing the colonial Frontier Crimes Regulation (FCR)." },
    { num: 26, year: 2024, title: "26th Amendment", desc: "Passed Oct 2024: Established Special Parliamentary Committee (12 members) to appoint Chief Justice of Pakistan from 3 senior-most judges; fixed 3-year CJP term; created Constitutional Benches in Supreme Court & High Courts; reconstituted Judicial Commission of Pakistan." }
  ]
};

// Write frontend/js/data_constitution.js
const fileContent = `/**
 * Constitution Explorer Academic Dataset
 * Comprehensive Article Repository, Judicial Precedents, Explanations,
 * 26 Constitutional Amendments, and High-Yield Examination MCQs.
 * Tailored for CSS, PMS, FPSC, PPSC, Civil Judges, LLB & Political Science.
 */

const CONSTITUTION_DATA = ${JSON.stringify(CONSTITUTION_DATA, null, 2)};

// Safe browser and Node export
if (typeof window !== 'undefined') {
  window.CONSTITUTION_DATA = CONSTITUTION_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONSTITUTION_DATA;
}
`;

fs.writeFileSync('frontend/js/data_constitution.js', fileContent, 'utf8');
console.log(`Successfully generated frontend/js/data_constitution.js! Size: ${(fileContent.length / 1024).toFixed(1)} KB`);
