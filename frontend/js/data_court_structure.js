/**
 * Court Structure of Pakistan: Hierarchy, Jurisdiction & Appellate Flow
 * Comprehensive database for CSS, Judicial Examinations (Civil Judge/ASJ), Law GAT, and LAT.
 * Fully updated with the 26th Constitutional Amendment (October 2024).
 */

const COURT_STRUCTURE_DATA = {
  "metadata": {
    "title": "Court Structure of Pakistan: Hierarchy, Jurisdiction & Appellate Flow",
    "jurisdiction": "Islamic Republic of Pakistan",
    "constitutionalAuthority": "Part VII of Constitution of Pakistan 1973 (Arts 175-212), Civil Courts Ordinance 1962, CrPC 1898",
    "recentAmendments": "26th Constitutional Amendment (October 2024 - Constitutional Benches under Arts 191A & 202A, CJP appointment under Art 175A)",
    "totalCourtsProfiled": 22,
    "totalAppellateRoutes": 8,
    "totalQuizQuestions": 15
  },
  "kpis": {
    "tiersCount": "4 Judicial Tiers",
    "tiersDesc": "Apex SC, Constitutional High Courts & FSC, District Judiciary, Specialized Tribunals",
    "courtsCount": "22 Courts & Tribunals",
    "courtsDesc": "Complete profiling of civil, criminal, constitutional, and administrative forums",
    "jurisdictionsCount": "7 Key Jurisdictions",
    "jurisdictionsDesc": "Original, Appellate, Writ (Art 199), Advisory, Review, Shariat & Summary",
    "amendmentsReflected": "26th Amendment (2024)",
    "amendmentsDesc": "Constitutional Benches (Arts 191A & 202A) & Special Parliamentary Committee"
  },
  "hierarchyTiers": [
    {
      "id": "tier-1",
      "name": "Tier 1: Apex Supreme Court",
      "shortName": "Supreme Court",
      "badge": "Apex Court of Pakistan",
      "icon": "fa-landmark-flag",
      "color": "#4338ca",
      "description": "Highest judicial authority in the Islamic Republic of Pakistan, established under Part VII Chapter 2 of the Constitution (Arts 175-191). Decisions are binding on all other courts in Pakistan (Art 189)."
    },
    {
      "id": "tier-2",
      "name": "Tier 2: Constitutional Courts & Federal Shariat Court",
      "shortName": "High Courts & FSC",
      "badge": "Constitutional Jurisdiction",
      "icon": "fa-scale-balanced",
      "color": "#0f766e",
      "description": "Five High Courts (LHC, SHC, PHC, BHC, IHC) exercising plenary writ jurisdiction under Article 199, superintendence under Article 203, and the Federal Shariat Court (FSC) under Article 203D."
    },
    {
      "id": "tier-3",
      "name": "Tier 3: Subordinate District Judiciary",
      "shortName": "District Courts",
      "badge": "Civil & Criminal Divisions",
      "icon": "fa-gavel",
      "color": "#991b1b",
      "description": "Principal court of original jurisdiction at the district level: District & Sessions Judges (D&SJ), Additional District & Sessions Judges (AD&SJ), Senior Civil Judges, Civil Judges (Classes I, II, III), and Judicial Magistrates (Classes I, II, III, Sec 30)."
    },
    {
      "id": "tier-4",
      "name": "Tier 4: Specialized Courts & Administrative Tribunals",
      "shortName": "Special Tribunals",
      "badge": "Statutory & Article 212 Forums",
      "icon": "fa-building-columns",
      "color": "#d97706",
      "description": "Specialized statutory and constitutional forums created for fast-track dispute resolution: Anti-Terrorism Courts (ATA), Accountability Courts (NAB), Banking Courts, Service Tribunals (Art 212), Labour Courts, CNS Courts, and Family Courts."
    }
  ],
  "courts": [
    {
      "id": "court-sc",
      "tierId": "tier-1",
      "name": "Supreme Court of Pakistan",
      "urduName": "عدالت عظمیٰ پاکستان",
      "category": "Apex Constitutional",
      "seat": "Islamabad (Principal Seat)",
      "branchRegistries": [
        "Lahore",
        "Karachi",
        "Peshawar",
        "Quetta"
      ],
      "headOfCourt": "Chief Justice of Pakistan (CJP)",
      "composition": "CJP and such number of other Judges as determined by Act of Majlis-e-Shoora (Parliament) — currently up to 34 judges pursuant to Supreme Court (Number of Judges) Amendment Act 2024.",
      "appointmentProcess": "Under Article 175A (as amended by 26th Amendment 2024): CJP is nominated by a 12-member Special Parliamentary Committee from amongst the 3 most senior SC judges for a fixed term of 3 years. Other SC judges are nominated by the Judicial Commission of Pakistan (JCP) and confirmed by the President.",
      "retirementAge": "65 years (Article 179)",
      "constitutionalProvisions": "Articles 175-191, Constitution of Pakistan 1973; 26th Amendment (Arts 175A, 191A)",
      "jurisdictions": [
        {
          "type": "Original Jurisdiction",
          "article": "Article 184(1)",
          "description": "Exclusive original jurisdiction in any dispute between two or more Governments (Federation vs. Province, or Province vs. Province). Pronounces declaratory judgments only."
        },
        {
          "type": "Enforcement of Fundamental Rights (Constitutional Benches)",
          "article": "Article 184(3) & Article 191A",
          "description": "Jurisdiction to pass orders for enforcement of Fundamental Rights on questions of public importance. Under the 26th Amendment (2024), this jurisdiction is exclusively exercised by designated Constitutional Benches of the Supreme Court."
        },
        {
          "type": "Appellate Jurisdiction",
          "article": "Article 185",
          "description": "Hears appeals from High Court judgments: (a) As of right if High Court reversed an acquittal into death/life sentence, or certified case involves substantial constitutional interpretation; (b) By grant of Leave to Appeal (Civil / Criminal Petition for Leave to Appeal - CPLA/CrPLA)."
        },
        {
          "type": "Advisory Jurisdiction",
          "article": "Article 186",
          "description": "President of Pakistan may refer any question of law of public importance to the Supreme Court for its binding advisory opinion."
        },
        {
          "type": "Review Jurisdiction",
          "article": "Article 188",
          "description": "Power to review any judgment pronounced or order made by it (Supreme Court Rules, 1980 Order XXVI)."
        },
        {
          "type": "Complete Justice & Execution",
          "article": "Article 187",
          "description": "Inherent power to issue directions, orders or decrees necessary for doing complete justice in any matter pending before it."
        }
      ],
      "bindingEffect": "Article 189: Any decision of the Supreme Court to the extent that it decides a question of law or is based upon or enunciates a principle of law is binding on all other courts in Pakistan. Article 190: All executive and judicial authorities must act in aid of the Supreme Court.",
      "nextAppellateForum": "Final court of appeal. No appeal lies from Supreme Court; only review under Article 188.",
      "landmarkPrecedent": "State v. Dosso (PLD 1958 SC 533), Asma Jilani v. Govt of Punjab (PLD 1972 SC 139), Al-Jehad Trust v. Federation (PLD 1996 SC 324 - Judges Case), Sunni Ittehad Council v. ECP (PLD 2024 SC 1 - Reserved Seats).",
      "examTip": "Essential for CSS: Note the 26th Amendment (October 2024) major shifts — CJP appointment by 12-member Special Parliamentary Committee (3-year fixed term) and creation of Constitutional Benches under Article 191A."
    },
    {
      "id": "court-fsc",
      "tierId": "tier-2",
      "name": "Federal Shariat Court of Pakistan (FSC)",
      "urduName": "وفاقی شرعی عدالت",
      "category": "Specialized Constitutional",
      "seat": "Islamabad (Principal Seat)",
      "branchRegistries": [
        "Lahore",
        "Karachi",
        "Peshawar",
        "Quetta"
      ],
      "headOfCourt": "Chief Justice, Federal Shariat Court",
      "composition": "Chief Justice and not more than 7 Muslim Judges appointed by the President, including at least 3 Ulema judges (well-versed in Islamic Law) holding at least 15 years experience.",
      "appointmentProcess": "Appointed by the President on the advice/recommendation of the Judicial Commission of Pakistan (JCP) under Article 175A.",
      "retirementAge": "65 years (Article 203C)",
      "constitutionalProvisions": "Part VII Chapter 3A (Articles 203A to 203J), Constitution of Pakistan 1973 (Inserted via P.O. 1 of 1980)",
      "jurisdictions": [
        {
          "type": "Shariat Review Jurisdiction",
          "article": "Article 203D",
          "description": "Examine and decide whether any law or provision of law is repugnant to the Injunctions of Islam as laid down in the Holy Quran and Sunnah. If held repugnant, the law ceases to have effect after a specified date unless amended."
        },
        {
          "type": "Appellate / Revision over Hudood Cases",
          "article": "Article 203DD",
          "description": "Exclusive appellate and revisional jurisdiction over any decision of criminal courts (Sessions Courts) under the Hudood Laws (Offences Against Property Hudood, Zina Hudood, Qazf Hudood, Prohibition Order)."
        }
      ],
      "bindingEffect": "Decisions binding on High Courts and subordinate judiciary under Article 203GG. Excluded from FSC review: The Constitution, Muslim Personal Law, Fiscal laws, or banking/tax laws (initially 10-year bar now expired).",
      "nextAppellateForum": "Shariat Appellate Bench of the Supreme Court of Pakistan under Article 203F (consisting of 3 SC Judges and 2 Ulema Judges). Appeal must be filed within 60 days.",
      "landmarkPrecedent": "Federal Government v. Dr. M. Aslam Khaki (PLD 2022 FSC 1 - Riba Prohibition Case): Declared conventional interest-based banking un-Islamic and set a deadline for conversion to Islamic banking.",
      "examTip": "Remember for FPSC & Law GAT: Appeals from FSC do NOT go to the regular Supreme Court bench; they lie exclusively to the 'Shariat Appellate Bench' of the Supreme Court under Article 203F."
    },
    {
      "id": "court-lhc",
      "tierId": "tier-2",
      "name": "Lahore High Court (LHC)",
      "urduName": "لاہور ہائیکورٹ",
      "category": "Provincial High Court",
      "seat": "Lahore (Principal Seat)",
      "branchRegistries": [
        "Rawalpindi Bench",
        "Multan Bench",
        "Bahawalpur Bench"
      ],
      "headOfCourt": "Chief Justice, Lahore High Court",
      "composition": "Chief Justice and such other Judges as fixed by law (sanctioned strength: 60 judges).",
      "appointmentProcess": "Recommended by Judicial Commission of Pakistan (JCP) under Article 175A, confirmed by Parliamentary Committee / President.",
      "retirementAge": "62 years (Article 195)",
      "constitutionalProvisions": "Articles 192-203, Constitution of Pakistan 1973; 26th Amendment (Article 202A - Constitutional Benches)",
      "jurisdictions": [
        {
          "type": "Extraordinary Writ Jurisdiction",
          "article": "Article 199",
          "description": "Power to issue prerogative writs: Mandamus, Prohibition, Certiorari, Habeas Corpus, and Quo Warranto against unlawful executive action within Punjab."
        },
        {
          "type": "Appellate & Revisional Civil Jurisdiction",
          "article": "Civil Courts Ordinance 1962, Sec 115 CPC",
          "description": "Regular First Appeals (RFA), First Appeals against Order (FAO), and Civil Revisions against District Court decrees and orders."
        },
        {
          "type": "Criminal Appellate Jurisdiction",
          "article": "CrPC 1898 Chapter XXXI & Sec 374",
          "description": "Criminal Appeals against convictions by Sessions Courts; confirmation of death sentences (Murder Reference) under Section 374 CrPC."
        },
        {
          "type": "Subordinate Court Superintendence",
          "article": "Article 203",
          "description": "Supervises and controls all subordinate civil and criminal courts throughout the province of Punjab."
        }
      ],
      "bindingEffect": "Article 201: Decisions binding on all subordinate courts in the province of Punjab.",
      "nextAppellateForum": "Supreme Court of Pakistan (Article 185 - Appeal as of right or by Civil/Criminal Petition for Leave to Appeal - CPLA/CrPLA).",
      "landmarkPrecedent": "Darshan Masih v. State (PLD 1990 SC 513), Muhammad Azhar v. LHC (PLD 2007 Lah 100), Sughra Bibi v. State (PLD 2018 SC 595 - Single FIR rule confirmation).",
      "examTip": "LHC has 3 permanent constitutional benches: Rawalpindi, Multan, and Bahawalpur. Know the retirement age difference: High Court judges retire at 62; Supreme Court judges retire at 65."
    },
    {
      "id": "court-shc",
      "tierId": "tier-2",
      "name": "High Court of Sindh (SHC)",
      "urduName": "سندھ ہائیکورٹ",
      "category": "Provincial High Court",
      "seat": "Karachi (Principal Seat)",
      "branchRegistries": [
        "Sukkur Bench",
        "Circuit Court Hyderabad",
        "Circuit Court Larkana",
        "Circuit Court Mirpurkhas"
      ],
      "headOfCourt": "Chief Justice, High Court of Sindh",
      "composition": "Chief Justice and sanctioned strength of 40 Judges.",
      "appointmentProcess": "Recommended by JCP under Article 175A, confirmed by the President.",
      "retirementAge": "62 years (Article 195)",
      "constitutionalProvisions": "Articles 192-203, Constitution of Pakistan 1973; Sindh Civil Courts Ordinance",
      "jurisdictions": [
        {
          "type": "Original Civil Jurisdiction (Karachi District)",
          "article": "Sindh Courts Act, 1926",
          "description": "UNIQUE FEATURE: SHC is the ONLY High Court in Pakistan exercising Original Civil Jurisdiction for civil suits within Karachi exceeding Rs. 65,000,000 (earlier Rs. 15 million / Rs. 30 million). Acts as both a trial court and appellate court."
        },
        {
          "type": "Writ Jurisdiction",
          "article": "Article 199",
          "description": "Habeas corpus, mandamus, certiorari, prohibition, and quo warranto petitions across the province of Sindh."
        },
        {
          "type": "Company & Admiralty Jurisdiction",
          "article": "Companies Act 2017 & Admiralty Jurisdiction of High Courts Act 1980",
          "description": "Exclusive maritime and admiralty claims for Karachi Port and Port Qasim, and corporate winding-up matters."
        }
      ],
      "bindingEffect": "Binds all subordinate courts in Sindh (Article 201).",
      "nextAppellateForum": "Supreme Court of Pakistan (Article 185).",
      "landmarkPrecedent": "Sindh High Court Bar Association v. Federation (PLD 2009 SC 879 - Nullified Nov 3, 2007 PCO Emergency).",
      "examTip": "CRITICAL EXAM QUESTION: Which High Court in Pakistan possesses Original Civil trial jurisdiction? Answer: Sindh High Court (for suits originating in Karachi district above the statutory pecuniary ceiling)."
    },
    {
      "id": "court-phc",
      "tierId": "tier-2",
      "name": "Peshawar High Court (PHC)",
      "urduName": "پشاور ہائیکورٹ",
      "category": "Provincial High Court",
      "seat": "Peshawar (Principal Seat)",
      "branchRegistries": [
        "Abbottabad Bench",
        "D.I. Khan Bench",
        "Mingora Bench (Swat)",
        "Bannu Bench"
      ],
      "headOfCourt": "Chief Justice, Peshawar High Court",
      "composition": "Chief Justice and sanctioned strength of 30 Judges.",
      "appointmentProcess": "Article 175A JCP recommendation and Presidential confirmation.",
      "retirementAge": "62 years (Article 195)",
      "constitutionalProvisions": "Articles 192-203; 25th Constitutional Amendment (2018 - Extension of jurisdiction over merged tribal districts / erstwhile FATA)",
      "jurisdictions": [
        {
          "type": "Writ Jurisdiction & Tribal Integration",
          "article": "Article 199 & 25th Amendment",
          "description": "Full constitutional jurisdiction extending to all 7 newly merged tribal districts (formerly FATA) following the abolition of FCR 1901 via the 25th Constitutional Amendment (2018)."
        },
        {
          "type": "Appellate & Revision Civil/Criminal",
          "article": "CrPC & CPC",
          "description": "Appeals against Sessions trials, military court appeals under writ jurisdiction, and civil appeals across Khyber Pakhtunkhwa."
        }
      ],
      "bindingEffect": "Binds all subordinate courts throughout Khyber Pakhtunkhwa (Article 201).",
      "nextAppellateForum": "Supreme Court of Pakistan (Article 185).",
      "landmarkPrecedent": "Action on Interment Centers Case (PLD 2019 Pesh 1): Held civilian trials in regular courts mandatory following FATA merger.",
      "examTip": "High-yield topic: Know that PHC's territorial jurisdiction expanded over erstwhile FATA after the 25th Constitutional Amendment (2018)."
    },
    {
      "id": "court-bhc",
      "tierId": "tier-2",
      "name": "High Court of Balochistan (BHC)",
      "urduName": "بلوچستان ہائیکورٹ",
      "category": "Provincial High Court",
      "seat": "Quetta (Principal Seat)",
      "branchRegistries": [
        "Sibi Bench",
        "Turbat Bench"
      ],
      "headOfCourt": "Chief Justice, High Court of Balochistan",
      "composition": "Chief Justice and sanctioned strength of 15 Judges.",
      "appointmentProcess": "Article 175A JCP nomination and Presidential appointment.",
      "retirementAge": "62 years (Article 195)",
      "constitutionalProvisions": "Articles 192-203, Constitution of Pakistan 1973",
      "jurisdictions": [
        {
          "type": "Constitutional Writs",
          "article": "Article 199",
          "description": "Full writ jurisdiction covering mineral disputes, provincial autonomy, and human rights issues across Balochistan."
        },
        {
          "type": "Special Coastal / Gwadar Disputes",
          "article": "Special Regulatory Frameworks",
          "description": "Commercial, maritime, and land litigation stemming from the Gwadar Port and China-Pakistan Economic Corridor (CPEC) zone."
        }
      ],
      "bindingEffect": "Binds all subordinate courts across the province of Balochistan (Article 201).",
      "nextAppellateForum": "Supreme Court of Pakistan (Article 185).",
      "landmarkPrecedent": "Reko Diq Reference Case (2022 SC 1) - originated from BHC mineral challenge regarding Tethyan Copper lease.",
      "examTip": "Balochistan High Court covers the largest geographical area of any High Court in Pakistan, with circuit benches in Sibi and Turbat (Makran)."
    },
    {
      "id": "court-ihc",
      "tierId": "tier-2",
      "name": "Islamabad High Court (IHC)",
      "urduName": "اسلام آباد ہائیکورٹ",
      "category": "Federal Capital High Court",
      "seat": "Islamabad (Constitution Avenue)",
      "branchRegistries": [
        "None (Single Seat for ICT)"
      ],
      "headOfCourt": "Chief Justice, Islamabad High Court",
      "composition": "Chief Justice and sanctioned strength of 10 Judges (established under 18th/19th Amendments and Islamabad High Court Act 2010).",
      "appointmentProcess": "Article 175A JCP recommendation and Presidential confirmation.",
      "retirementAge": "62 years (Article 195)",
      "constitutionalProvisions": "Articles 175(1) & 192-203; Islamabad High Court Act, 2010",
      "jurisdictions": [
        {
          "type": "Federal Administrative Writs",
          "article": "Article 199",
          "description": "High-volume constitutional forum adjudicating actions of Federal Ministries, regulatory authorities (PEMRA, OGRA, NEPRA, SECP, PTA, ECP), and Federal autonomous bodies located in the capital."
        },
        {
          "type": "Original Civil Jurisdiction (ICT)",
          "article": "Islamabad High Court Act 2010",
          "description": "Civil suits originating within Islamabad Capital Territory exceeding Rs. 100,000,000."
        },
        {
          "type": "Appellate Criminal & Civil",
          "article": "CrPC & CPC",
          "description": "Hears appeals from District & Sessions Courts of ICT (East and West divisions) and Special Courts (FIA, ATC, NAB in Islamabad)."
        }
      ],
      "bindingEffect": "Binds subordinate courts in the Islamabad Capital Territory (East & West Divisions).",
      "nextAppellateForum": "Supreme Court of Pakistan (Article 185).",
      "landmarkPrecedent": "Marghazar Zoo Animals Case (2020 IHC) - landmark ruling recognizing animal rights under Article 9.",
      "examTip": "IHC was initially established in 2007 under Gen Musharraf, declared unconstitutional in 2009 (Sindh HC Bar case), and re-established constitutionally via the 18th/19th Amendments and IHC Act 2010."
    },
    {
      "id": "court-dsj",
      "tierId": "tier-3",
      "name": "Court of District & Sessions Judge (D&SJ)",
      "urduName": "عدالت ڈسٹرکٹ اینڈ سیشن جج",
      "category": "District Level Principal Court",
      "seat": "District Headquarters in every district across Pakistan",
      "headOfCourt": "District & Sessions Judge (D&SJ) / Additional Sessions Judge (AD&SJ)",
      "composition": "District & Sessions Judge as administrative head of the district judiciary, supported by Additional District & Sessions Judges (AD&SJ).",
      "appointmentProcess": "Appointed by the respective High Court through competitive examination (Judicial Service) or elevation from practicing advocates of 10+ years standing.",
      "constitutionalProvisions": "Article 175(2), Article 203; West Pakistan Civil Courts Ordinance 1962, CrPC 1898",
      "jurisdictions": [
        {
          "type": "Civil: District Judge",
          "article": "Civil Courts Ordinance 1962, Sec 18 & 24",
          "description": "Principal Civil Court of original jurisdiction in the district. Unlimited pecuniary trial jurisdiction. Hears civil appeals from Civil Judges (up to provincial pecuniary ceiling, usually Rs. 50 million)."
        },
        {
          "type": "Criminal: Sessions Judge",
          "article": "CrPC 1898, Sec 6, 9, 28 & 31",
          "description": "Can try any offence under PPC and pass any sentence authorized by law (including Death Sentence, Life Imprisonment, Fines). Death sentences are subject to confirmation by the High Court under Section 374 CrPC."
        },
        {
          "type": "Special Bail Jurisdiction",
          "article": "CrPC 1898, Sec 498",
          "description": "Concurrent jurisdiction with High Court to grant Pre-Arrest Bail (Bail Before Arrest - BBA) and Post-Arrest Bail."
        },
        {
          "type": "Justice of Peace",
          "article": "CrPC 1898, Sec 22-A & 22-B",
          "description": "Ex-officio Justice of Peace: Directs police to register FIRs under Section 154 upon illegal refusal, or orders transfer of biased investigation."
        }
      ],
      "nextAppellateForum": "High Court of the respective province (Criminal Appeal under Sec 410 CrPC; Civil Appeal RFA/FAO under Sec 96 CPC).",
      "landmarkPrecedent": "Sughra Bibi v. State (PLD 2018 SC 595 - Guidelines for Sec 22-A Justice of Peace petitions).",
      "examTip": "One person holds two statutory offices: 'District Judge' on the civil side (Civil Courts Ordinance) and 'Sessions Judge' on the criminal side (CrPC)."
    },
    {
      "id": "court-mag-sec30",
      "tierId": "tier-3",
      "name": "Judicial Magistrate with Section 30 Powers",
      "urduName": "جوڈیشل مجسٹریٹ بااختیار دفعہ 30",
      "category": "Subordinate Criminal Bench",
      "seat": "District and Tehsil Sub-divisions",
      "headOfCourt": "Senior Judicial Magistrate invested with Sec 30 Powers by High Court",
      "composition": "Magistrate of the First Class specially empowered by the Provincial Government / High Court under Section 30 CrPC.",
      "appointmentProcess": "Conferred on experienced Judicial Magistrates 1st Class by the Provincial Government upon formal recommendation of the respective High Court.",
      "constitutionalProvisions": "CrPC 1898, Sections 30, 32, 34",
      "jurisdictions": [
        {
          "type": "Enhanced Criminal Trial",
          "article": "Section 30 CrPC",
          "description": "May try all offences not punishable with death (i.e. offences punishable with life imprisonment or lesser sentences, such as attempted murder Sec 324 PPC, major robberies, grievous hurt)."
        },
        {
          "type": "Sentencing Limit",
          "article": "Section 34 CrPC",
          "description": "May pass any sentence authorized by law EXCEPT death or imprisonment for a term exceeding SEVEN YEARS."
        }
      ],
      "nextAppellateForum": "Court of Session (Sessions Judge) if sentence is 4 years or less (Sec 408 CrPC). High Court if sentence exceeds 4 years (Sec 408 proviso b CrPC).",
      "landmarkPrecedent": "Muhammad Aslam v. State (PLD 2009 SC 777 - Powers and appellate threshold under Sec 34/408 CrPC).",
      "examTip": "CRITICAL LAW GAT / CIVIL JUDGE MCQS: If a Section 30 Magistrate sentences an accused to 5 years imprisonment, where does the appeal lie? Answer: HIGH COURT (because sentence exceeds 4 years under Sec 408 proviso b CrPC)."
    },
    {
      "id": "court-mag-fc",
      "tierId": "tier-3",
      "name": "Judicial Magistrate First Class (General)",
      "urduName": "جوڈیشل مجسٹریٹ درجہ اول",
      "category": "Subordinate Criminal",
      "seat": "Tehsil and District Courts",
      "headOfCourt": "Judicial Magistrate 1st Class",
      "composition": "Selected through Provincial Public Service Commission / High Court Judicial Exam.",
      "appointmentProcess": "Direct recruitment through competitive Provincial Judicial Service Examination conducted by the High Court / Provincial Public Service Commission.",
      "constitutionalProvisions": "CrPC 1898, Section 32",
      "jurisdictions": [
        {
          "type": "Standard Criminal Trial",
          "article": "Section 32(1)(a) CrPC",
          "description": "May try offences punishable with imprisonment up to 3 years. Sentencing power: Imprisonment for a term not exceeding THREE YEARS; Fine not exceeding Rs. 45,000 (as amended by provincial ordinances); whipping/arsh/daman as permitted."
        },
        {
          "type": "Physical Remand Power",
          "article": "Section 167 CrPC",
          "description": "Exclusive magistrate empowered to authorize detention in police custody (physical remand) up to an absolute aggregate ceiling of 14 days."
        },
        {
          "type": "Recording Confessions",
          "article": "Section 164 CrPC",
          "description": "Sole jurisdiction to record judicial confessions and statements of witnesses under oath during investigation."
        }
      ],
      "nextAppellateForum": "Court of Session (Sessions Judge / Additional Sessions Judge under Sec 408 CrPC).",
      "landmarkPrecedent": "Mian Allah Ditta v. State (PLD 2014 SC 459 - Confession recording formalities under Sec 164 CrPC).",
      "examTip": "Sentencing power of Judicial Magistrate 1st Class: 3 years imprisonment and fine up to statutory ceiling."
    },
    {
      "id": "court-mag-sc-tc",
      "tierId": "tier-3",
      "name": "Judicial Magistrate Second & Third Class",
      "urduName": "جوڈیشل مجسٹریٹ درجہ دوم و سوم",
      "category": "Subordinate Criminal",
      "seat": "Tehsil / Sub-divisional Courts",
      "headOfCourt": "Judicial Magistrate 2nd / 3rd Class",
      "composition": "Junior entry-level judicial officers or specialized trial magistrates.",
      "appointmentProcess": "Appointed and assigned judicial powers by the High Court under Section 12 of CrPC 1898.",
      "constitutionalProvisions": "CrPC 1898, Section 32",
      "jurisdictions": [
        {
          "type": "Magistrate 2nd Class Powers",
          "article": "Section 32(1)(b) CrPC",
          "description": "Imprisonment for a term not exceeding ONE YEAR; Fine not exceeding Rs. 15,000."
        },
        {
          "type": "Magistrate 3rd Class Powers",
          "article": "Section 32(1)(c) CrPC",
          "description": "Imprisonment for a term not exceeding ONE MONTH; Fine not exceeding Rs. 3,000."
        }
      ],
      "nextAppellateForum": "Court of Session (Sessions Judge) under Section 408 CrPC.",
      "landmarkPrecedent": "Nadeem v. State (2012 PCrLJ 412).",
      "examTip": "Sentencing caps to memorize: 2nd Class = 1 year / Rs. 15,000; 3rd Class = 1 month / Rs. 3,000."
    },
    {
      "id": "court-cj-1",
      "tierId": "tier-3",
      "name": "Civil Judge Class-I / Senior Civil Judge",
      "urduName": "سینئر سول جج / سول جج درجہ اول",
      "category": "Subordinate Civil",
      "seat": "District and Tehsil Courts",
      "headOfCourt": "Senior Civil Judge / Civil Judge 1st Class",
      "composition": "Senior judicial officer with proven trial tenure.",
      "appointmentProcess": "Promoted from Civil Judge Class-II on the basis of seniority-cum-fitness and scrutiny by the High Court Administration Committee.",
      "constitutionalProvisions": "West Pakistan Civil Courts Ordinance, 1962 (Section 9 & 18)",
      "jurisdictions": [
        {
          "type": "Original Pecuniary Jurisdiction",
          "article": "Section 9 Civil Courts Ordinance 1962",
          "description": "UNLIMITED pecuniary jurisdiction: Can hear and determine civil suits of any value without any monetary upper limit."
        },
        {
          "type": "Administrative Supervision (Senior Civil Judge)",
          "article": "Provincial High Court Rules",
          "description": "Senior Civil Judge acts as the administrative supervisor of all Civil Judges in the district (allots suits, manages process serving, handles guardian matters)."
        }
      ],
      "nextAppellateForum": "Appeals lie to the District Judge if the valuation of the suit is below the provincial appellate limit (e.g., up to Rs. 50 million). If above, appeal lies directly to the High Court (Regular First Appeal - RFA).",
      "landmarkPrecedent": "Haji Abdul Wahid v. Lahore Development Authority (PLD 2018 SC 214 - Pecuniary jurisdiction and appellate forum).",
      "examTip": "Civil Judge Class-I has NO monetary ceiling on trial jurisdiction — pecuniary limit is unlimited."
    },
    {
      "id": "court-cj-2",
      "tierId": "tier-3",
      "name": "Civil Judge Class-II",
      "urduName": "سول جج درجہ دوم",
      "category": "Subordinate Civil",
      "seat": "Tehsil Courts",
      "headOfCourt": "Civil Judge 2nd Class",
      "composition": "Promoted or directly appointed judicial magistrate/civil judge.",
      "appointmentProcess": "Promoted from Civil Judge Class-III following satisfactory completion of probation and appraisal by the High Court.",
      "constitutionalProvisions": "Civil Courts Ordinance 1962",
      "jurisdictions": [
        {
          "type": "Pecuniary Jurisdiction",
          "article": "High Court Notifications under Sec 9",
          "description": "Can try civil suits whose value does not exceed Rs. 5,000,000 (varies slightly by provincial notification from Rs. 1M to Rs. 5M)."
        }
      ],
      "nextAppellateForum": "Court of District Judge (Section 18 Civil Courts Ordinance).",
      "landmarkPrecedent": "Bashir Ahmed v. Ghulam Nabi (2015 SCMR 1081).",
      "examTip": "Civil Judge Class-II holds intermediate pecuniary limits, typically capped at Rs. 5,000,000."
    },
    {
      "id": "court-cj-3",
      "tierId": "tier-3",
      "name": "Civil Judge Class-III",
      "urduName": "سول جج درجہ سوم",
      "category": "Subordinate Civil",
      "seat": "Tehsil / Sub-divisional Courts",
      "headOfCourt": "Civil Judge 3rd Class",
      "composition": "Entry-level judicial officer.",
      "appointmentProcess": "Direct induction via competitive Provincial Civil Judge examination conducted by the High Court.",
      "constitutionalProvisions": "Civil Courts Ordinance 1962",
      "jurisdictions": [
        {
          "type": "Pecuniary Jurisdiction",
          "article": "High Court Notifications under Sec 9",
          "description": "Pecuniary limit up to Rs. 1,000,000 (suits for declaration, injunction, petty money claims)."
        }
      ],
      "nextAppellateForum": "Court of District Judge.",
      "landmarkPrecedent": "Mumtaz v. Tariq (2017 CLC 542).",
      "examTip": "Entry tier for civil adjudication with pecuniary jurisdiction up to Rs. 1 million."
    },
    {
      "id": "court-family",
      "tierId": "tier-3",
      "name": "Family Court",
      "urduName": "فیملی کورٹ",
      "category": "Specialized Civil / Family",
      "seat": "Every Tehsil & District Court",
      "headOfCourt": "Judge, Family Court (ordinarily Civil Judge acts as Family Judge)",
      "composition": "Presided over by a Civil Judge designated as Judge Family Court.",
      "appointmentProcess": "Civil Judges are designated as Judges of Family Courts by the respective High Court under Section 3 of the West Pakistan Family Courts Act 1964.",
      "constitutionalProvisions": "West Pakistan Family Courts Act, 1964; Family Courts Rules 1965",
      "jurisdictions": [
        {
          "type": "Exclusive Family Disputes",
          "article": "Schedule to Family Courts Act 1964",
          "description": "Exclusive jurisdiction over: Dissolution of marriage (Khula/Talaq), Dower, Maintenance (wife and children), Restitution of Conjugal Rights, Custody of children, Guardianship, Dowry articles, and Personal property of wife."
        },
        {
          "type": "Summary & Reconciliatory Procedure",
          "article": "Section 10 & 12 Family Courts Act",
          "description": "Mandatory pre-trial reconciliation and post-trial reconciliation stages. Strict Qanun-e-Shahadat and CPC provisions excluded to expedite justice."
        }
      ],
      "nextAppellateForum": "District Judge (Family Appeal under Section 14). No appeal lies against a decree for dissolution of marriage (except on ground of non-payment of dower/cruelty).",
      "landmarkPrecedent": "Mst. Rashida v. Muhammad Akram (PLD 2002 SC 449 - Irretrievable breakdown and grant of Khula).",
      "examTip": "Critical MCQ: Can an appeal be filed against a decree of dissolution of marriage on the ground of Khula? NO, Section 14(2) bars appeal against a decree for dissolution of marriage by Khula."
    },
    {
      "id": "court-atc",
      "tierId": "tier-4",
      "name": "Anti-Terrorism Court (ATC)",
      "urduName": "انسداد دہشت گردی عدالت",
      "category": "Specialized Criminal Court",
      "seat": "Established in all administrative divisions and high-risk zones",
      "headOfCourt": "Judge, Anti-Terrorism Court",
      "composition": "Serving or retired District & Sessions Judge, or Advocate of High Court with 10+ years standing, appointed by Federal/Provincial Government in consultation with High Court Chief Justice.",
      "appointmentProcess": "Appointed by the Federal or Provincial Government in mandatory consultation with the Chief Justice of the respective High Court under Section 13 of ATA 1997.",
      "constitutionalProvisions": "Anti-Terrorism Act (ATA), 1997 (Act XXVII of 1997)",
      "jurisdictions": [
        {
          "type": "Scheduled Terrorist Offences",
          "article": "Sections 6, 7 & Schedule of ATA 1997",
          "description": "Exclusive trial of terrorist acts, suicide bombings, kidnapping for ransom, sectarian killings, extortion (Bhatta), hate speech, and violent subversion creating terror or insecurity."
        },
        {
          "type": "Fast-Track Day-to-Day Trial",
          "article": "Section 19 ATA 1997",
          "description": "Mandatory day-to-day trial with statutory expectation of conclusion within 7 working days (though practically extended)."
        }
      ],
      "nextAppellateForum": "Special Appellate Bench (Division Bench of 2 Judges) of the respective HIGH COURT under Section 25 ATA 1997. Appeal period is strictly 7 DAYS (not 30 or 60 days).",
      "landmarkPrecedent": "Ghulam Shabbir v. State (PLD 2011 SC 871), Malik Muhammad Mumtaz Qadri v. State (PLD 2016 SC 17 - Held that killing under religious pretext without state authority falls squarely under Sec 6/7 ATA 1997).",
      "examTip": "High-yield Civil Judge / FPSC MCQ: What is the limitation period for filing an appeal against an ATC judgment before the High Court? Answer: SEVEN DAYS (Section 25 ATA 1997)."
    },
    {
      "id": "court-nab",
      "tierId": "tier-4",
      "name": "Accountability Court (NAB)",
      "urduName": "احتساب عدالت",
      "category": "Anti-Corruption Statutory Court",
      "seat": "Provincial Capitals & Regional Centers (Rawalpindi, Lahore, Karachi, Peshawar, Quetta, Sukkur, Multan)",
      "headOfCourt": "Judge, Accountability Court",
      "composition": "District & Sessions Judge appointed by the President / Federal Government in consultation with Chief Justice of respective High Court.",
      "appointmentProcess": "Appointed by the Federal Government in consultation with the Chief Justice of the respective High Court under Section 5-A of the National Accountability Ordinance 1999.",
      "constitutionalProvisions": "National Accountability Ordinance (NAO), 1999 (Ordinance XVIII of 1999 as amended up to 2024)",
      "jurisdictions": [
        {
          "type": "Corruption & Misuse of Authority",
          "article": "Section 9 & 10 NAO 1999",
          "description": "Trial of corruption, corrupt practices, assets beyond known sources of income, misuse of official authority, and massive public cheating (cooperative / housing scams) involving public office holders and business entities."
        },
        {
          "type": "Pecuniary Threshold (Post-2023/24 Amendments)",
          "article": "NAO Amendment Acts 2022-2024",
          "description": "Jurisdiction now restricted to corruption cases involving Rs. 500 million or more (cases below Rs. 500 million stand transferred to regular anti-corruption courts or FIA)."
        }
      ],
      "nextAppellateForum": "Division Bench of the respective HIGH COURT under Section 32 NAO 1999. Appeal limitation is 10 DAYS.",
      "landmarkPrecedent": "Khan Asfandyar Wali v. Federation (PLD 2001 SC 607 - Upheld NAO validity), Federation v. Shaukat Aziz (2024 SC 12 - NAB Amendments Restoration Case).",
      "examTip": "Accountability Court appeals lie to a Division Bench of the High Court under Section 32 NAO within 10 days."
    },
    {
      "id": "court-banking",
      "tierId": "tier-4",
      "name": "Banking Court (Financial Recovery)",
      "urduName": "بینکنگ کورٹ",
      "category": "Specialized Financial Court",
      "seat": "Major commercial cities across Pakistan",
      "headOfCourt": "Judge, Banking Court",
      "composition": "Serving or retired District & Sessions Judge or eligible Senior Advocate appointed by Federal Government.",
      "appointmentProcess": "Appointed by the Federal Government in consultation with the Chief Justice of the High Court of the Province in which the court is established (Section 4 FIRO 2001).",
      "constitutionalProvisions": "Financial Institutions (Recovery of Finances) Ordinance, 2001 (FIRO 2001)",
      "jurisdictions": [
        {
          "type": "Summary Loan & Finance Recovery",
          "article": "Section 9 & 10 FIRO 2001",
          "description": "Exclusive forum for suits filed by financial institutions (banks) for recovery of defaulted loans, mortgages, hypothecation, and letter of credit defaults."
        },
        {
          "type": "Leave to Defend Requirement",
          "article": "Section 10 FIRO 2001",
          "description": "Defendant borrower cannot file a written statement as of right; must file an application for 'Leave to Defend' within 30 days, disclosing a bona fide substantial defence."
        }
      ],
      "nextAppellateForum": "Division Bench of the HIGH COURT under Section 22 FIRO 2001 (within 30 days of the decree).",
      "landmarkPrecedent": "Apollo Textile Mills v. Soneri Bank (PLD 2012 SC 441 - Mandatory nature of leave to defend).",
      "examTip": "Borrowers in a Banking Court must seek 'Leave to Defend' under Section 10 FIRO within 30 days; failure results in an ex-parte summary decree."
    },
    {
      "id": "court-fst",
      "tierId": "tier-4",
      "name": "Federal Service Tribunal (FST)",
      "urduName": "وفاقی سروس ٹربیونل",
      "category": "Constitutional Administrative Tribunal",
      "seat": "Islamabad (Benches in Lahore, Karachi, Peshawar, Quetta)",
      "headOfCourt": "Chairman, Federal Service Tribunal (Serving/Retired High Court Judge)",
      "composition": "Chairman and Members (judicial and executive civil servants of Grade 21/22) appointed under Service Tribunals Act 1973.",
      "appointmentProcess": "Chairman and Members appointed by the President of Pakistan under Section 3 of the Service Tribunals Act 1973 in consultation with the Chief Justice of Pakistan.",
      "constitutionalProvisions": "Article 212, Constitution of Pakistan 1973; Service Tribunals Act, 1973",
      "jurisdictions": [
        {
          "type": "Civil Servants Terms & Conditions",
          "article": "Article 212(1)(a) Constitution & Sec 4 Service Tribunals Act",
          "description": "Exclusive jurisdiction in matters relating to the terms and conditions of persons in the Service of Pakistan (federal civil servants), including seniority, promotion eligibility, dismissal, compulsory retirement, and disciplinary penalties."
        },
        {
          "type": "Ouster of Other Courts",
          "article": "Article 212(2) Constitution",
          "description": "COMPLETE EXCLUSION: No other court, including a High Court under Article 199, can entertain any matter relating to the terms and conditions of a civil servant. High Court writ petitions by civil servants regarding service terms are constitutionally barred."
        }
      ],
      "nextAppellateForum": "SUPREME COURT OF PAKISTAN directly under Article 212(3) of the Constitution (Civil Petition for Leave to Appeal - CPLA on a substantial question of law of public importance). HIGH COURT HAS NO JURISDICTION.",
      "landmarkPrecedent": "Pir Sabir Shah v. Shad Muhammad Khan (PLD 1995 SC 66), Ali Azhar Baloch v. Province of Sindh (2015 SCMR 456 - Complete ouster of High Court under Art 212).",
      "examTip": "GOLDEN CSS / JUDICIAL RULE: Can a civil servant file a Writ Petition under Article 199 before the High Court regarding their seniority or transfer? NO — Article 212(2) creates an absolute constitutional bar. Remedy lies solely before the Service Tribunal, with appeal directly to the Supreme Court under Article 212(3)."
    },
    {
      "id": "court-labour",
      "tierId": "tier-4",
      "name": "Labour Court & Labour Appellate Tribunal",
      "urduName": "لیبر کورٹ اور لیبر اپیلٹ ٹربیونل",
      "category": "Industrial & Labour Forum",
      "seat": "Industrial centers and divisional headquarters",
      "headOfCourt": "Presiding Officer, Labour Court (District & Sessions Judge ranking)",
      "composition": "Presiding Officer appointed by Provincial Government under Industrial Relations Act.",
      "appointmentProcess": "Presiding Officers appointed by the Provincial Government from among serving or retired District & Sessions Judges under Section 44 of the Industrial Relations Act.",
      "constitutionalProvisions": "Industrial Relations Act 2012 (Federal) / Provincial Industrial Relations Acts (e.g. Punjab IRA 2010)",
      "jurisdictions": [
        {
          "type": "Industrial & Worker Grievances",
          "article": "Section 33 & 34 IRA",
          "description": "Individual worker grievance petitions against illegal termination, unfair labour practices by employers or trade unions, collective bargaining agent (CBA) disputes, and wage compensation."
        }
      ],
      "nextAppellateForum": "Labour Appellate Tribunal (headed by a retired High Court Judge) within 30 days. Final challenges lie to the High Court via constitutional writ under Article 199.",
      "landmarkPrecedent": "Packages Ltd. v. Muhammad Maqbool (2014 SCMR 821 - Worker definition and grievance scope).",
      "examTip": "Labour Court decisions are appealed to the Labour Appellate Tribunal, not the District Judge."
    },
    {
      "id": "court-cns",
      "tierId": "tier-4",
      "name": "Special Court (Control of Narcotic Substances)",
      "urduName": "خصوصی عدالت برائے منشیات",
      "category": "Narcotics Criminal Bench",
      "seat": "District headquarters and border zones",
      "headOfCourt": "Judge, Special Court (CNS)",
      "composition": "District & Sessions Judge designated as Special Judge CNS.",
      "appointmentProcess": "Designated by the Federal Government or Provincial Government from amongst serving District & Sessions Judges under Section 46 of CNSA 1997 in consultation with the High Court Chief Justice.",
      "constitutionalProvisions": "Control of Narcotic Substances Act, 1997 (CNSA 1997)",
      "jurisdictions": [
        {
          "type": "Narcotics Trafficking & Smuggling",
          "article": "Section 9 CNSA 1997",
          "description": "Trial of drug trafficking, manufacturing, and possession of Charas, Heroin, Opium, Ice (Methamphetamine), and psychotropic substances. Prescribes capital punishment for commercial quantities (exceeding 1 kg of heroin/cocaine or 10 kg charas)."
        }
      ],
      "nextAppellateForum": "Respective High Court (Criminal Appeal under Section 48 CNSA 1997 within 30 days).",
      "landmarkPrecedent": "Hanif Abbasi v. State (2018 SCMR 1974 - Ephedrine quota case), Ghulam Murtaza v. State (PLD 2009 Lah 362 - Quantum of punishment under Sec 9 CNSA).",
      "examTip": "Appeals against Special Court CNS convictions lie directly to the High Court under Section 48 CNSA 1997."
    },
    {
      "id": "court-cyber",
      "tierId": "tier-4",
      "name": "Special Court Central (Cybercrime & Federal Crimes)",
      "urduName": "خصوصی عدالت سینٹرل",
      "category": "Federal Penal & Cybercrime Forum",
      "seat": "Provincial capitals and FIA Zonal centers",
      "headOfCourt": "Judge, Special Court Central",
      "composition": "District & Sessions Judge appointed by the Federal Government.",
      "appointmentProcess": "Appointed by the Federal Government from amongst serving District & Sessions Judges under Section 3 of the Criminal Law Amendment Act 1958 in consultation with the High Court.",
      "constitutionalProvisions": "Criminal Law Amendment Act, 1958; Prevention of Electronic Crimes Act (PECA), 2016",
      "jurisdictions": [
        {
          "type": "Federal & Cyber Offences",
          "article": "PECA 2016 Sections 14, 20, 21, 24",
          "description": "Exclusive jurisdiction over cyber offences investigated by the Federal Investigation Agency (FIA Cyber Crime Wing): unauthorized hacking, electronic financial fraud, cyberstalking, non-consensual image distribution, and federal anti-corruption cases against federal employees."
        }
      ],
      "nextAppellateForum": "Respective High Court (Criminal Appeal under Section 410 CrPC / Section 10 Criminal Law Amendment Act).",
      "landmarkPrecedent": "Muhammad Yasir v. State (2020 PCrLJ 112 - Bail criteria under PECA Section 21).",
      "examTip": "Cybercrime cases probed by the FIA are tried by the Special Court Central, not a local Judicial Magistrate."
    }
  ],
  "appellateRoutes": [
    {
      "id": "route-1",
      "title": "Capital Murder Case (Qatl-e-Amd Sec 302 PPC)",
      "domain": "Criminal Law",
      "icon": "fa-gavel",
      "startingCourt": "Court of Session (Sessions Judge / AD&SJ)",
      "steps": [
        {
          "forum": "Trial Forum: Court of Session",
          "description": "Sessions Judge conducts full trial under CrPC Chapter XXII. Finds accused guilty under Section 302(b) PPC and sentences him to Death.",
          "statutoryRef": "Section 28 & 31 CrPC"
        },
        {
          "forum": "First Appellate / Confirmation Forum: High Court",
          "description": "Two simultaneous proceedings occur: (1) Murder Reference submitted by Sessions Judge under Section 374 CrPC for confirmation of death sentence; (2) Criminal Appeal filed by convict under Section 410 CrPC. Heard by a Division Bench (2 judges). High Court confirms sentence and dismisses appeal.",
          "statutoryRef": "Section 374 & 410 CrPC"
        },
        {
          "forum": "Final Apex Forum: Supreme Court of Pakistan",
          "description": "Convict files Criminal Appeal before Supreme Court as of right under Article 185(2)(a) of the Constitution (since High Court confirmed sentence of death). SC delivers final binding judgment.",
          "statutoryRef": "Article 185(2)(a) Constitution"
        },
        {
          "forum": "Constitutional Executive Mercy: President of Pakistan",
          "description": "Upon dismissal of review by Supreme Court under Article 188, convict may submit a Mercy Petition to the President of Pakistan under Article 45 of the Constitution (Prerogative of Mercy).",
          "statutoryRef": "Article 45 Constitution"
        }
      ]
    },
    {
      "id": "route-2",
      "title": "Commercial Contract Suit (Claim of Rs. 80 Million)",
      "domain": "Civil Law",
      "icon": "fa-file-invoice-dollar",
      "startingCourt": "Civil Judge Class-I / Senior Civil Judge",
      "steps": [
        {
          "forum": "Trial Forum: Civil Judge Class-I",
          "description": "Plaintiff files suit for recovery of Rs. 80,000,000 against a corporate buyer. Civil Judge Class-I possesses unlimited pecuniary trial jurisdiction under Section 9 Civil Courts Ordinance 1962. After trial, suit is decreed in favour of plaintiff.",
          "statutoryRef": "Section 9 Civil Courts Ordinance 1962"
        },
        {
          "forum": "First Appellate Forum: High Court (RFA)",
          "description": "Because the suit valuation (Rs. 80 million) exceeds the District Judge's appellate ceiling, defendant files a Regular First Appeal (RFA) directly before the High Court under Section 96 CPC read with High Court Rules. High Court affirms decree.",
          "statutoryRef": "Section 96 CPC & Section 18 Civil Courts Ordinance"
        },
        {
          "forum": "Apex Forum: Supreme Court of Pakistan",
          "description": "Defendant files Civil Petition for Leave to Appeal (CPLA) under Article 185(3) of the Constitution before the Supreme Court. Supreme Court grants leave or dismisses petition.",
          "statutoryRef": "Article 185(3) Constitution"
        }
      ]
    },
    {
      "id": "route-3",
      "title": "Federal Civil Servant Dismissal / Seniority Dispute",
      "domain": "Service / Constitutional Law",
      "icon": "fa-user-tie",
      "startingCourt": "Departmental Authority -> Federal Service Tribunal (FST)",
      "steps": [
        {
          "forum": "Stage 1: Departmental Appeal / Representation",
          "description": "Federal civil servant receives dismissal order under E&D Rules. Must first exhaust departmental appeal/representation within 30 days.",
          "statutoryRef": "Section 4(1) Service Tribunals Act 1973"
        },
        {
          "forum": "Stage 2: Exclusive Judicial Forum: Federal Service Tribunal (FST)",
          "description": "Within 30 days of departmental rejection, employee files appeal before FST under Section 4. High Court writ jurisdiction is strictly barred by Article 212(2) of the Constitution.",
          "statutoryRef": "Article 212(1)(a) & (2) Constitution"
        },
        {
          "forum": "Final Apex Forum: Supreme Court of Pakistan",
          "description": "Appeal lies directly from FST to the Supreme Court under Article 212(3) of the Constitution on a substantial question of law of public importance. High Court plays NO role.",
          "statutoryRef": "Article 212(3) Constitution"
        }
      ]
    },
    {
      "id": "route-4",
      "title": "Terrorist Kidnapping for Ransom (Sec 7(e) ATA)",
      "domain": "Special Criminal Law",
      "icon": "fa-shield-halved",
      "startingCourt": "Anti-Terrorism Court (ATC)",
      "steps": [
        {
          "forum": "Trial Forum: Anti-Terrorism Court (ATC)",
          "description": "ATC Judge conducts fast-track trial under Section 19 ATA 1997. Convicts accused under Section 7(e) ATA / Sec 365-A PPC to imprisonment for life.",
          "statutoryRef": "Section 6, 7 & 19 ATA 1997"
        },
        {
          "forum": "Appellate Forum: High Court (Division Bench)",
          "description": "Convict must file appeal within strictly SEVEN DAYS under Section 25 ATA 1997 before a Division Bench of the High Court. High Court reviews evidence and upholds conviction.",
          "statutoryRef": "Section 25 ATA 1997"
        },
        {
          "forum": "Apex Forum: Supreme Court of Pakistan",
          "description": "Convict files Criminal Petition for Leave to Appeal (CrPLA) under Article 185(3) of the Constitution before the Supreme Court.",
          "statutoryRef": "Article 185(3) Constitution"
        }
      ]
    },
    {
      "id": "route-5",
      "title": "Dissolution of Marriage (Khula) & Child Custody",
      "domain": "Family Law",
      "icon": "fa-people-roof",
      "startingCourt": "Family Court",
      "steps": [
        {
          "forum": "Trial Forum: Judge, Family Court",
          "description": "Wife files suit for dissolution of marriage by Khula and recovery of dower and child maintenance. Judge conducts mandatory reconciliation. Upon failure, passes decree for Khula under Section 10(4) Family Courts Act.",
          "statutoryRef": "West Pakistan Family Courts Act 1964"
        },
        {
          "forum": "Appellate Forum: Court of District Judge",
          "description": "Husband cannot appeal against the Khula decree (prohibited under Sec 14(2)). However, regarding child maintenance and custody, appeal lies to the District Judge within 30 days under Section 14.",
          "statutoryRef": "Section 14 Family Courts Act 1964"
        },
        {
          "forum": "Supervisory Review: High Court Constitutional Writ",
          "description": "Because no second appeal is provided under the Family Courts Act, an aggrieved party can only approach the High Court under Article 199 (Constitutional Writ Petition) on grounds of jurisdictional defect or perversity.",
          "statutoryRef": "Article 199 Constitution"
        }
      ]
    },
    {
      "id": "route-6",
      "title": "Theft Trial Before Judicial Magistrate 1st Class",
      "domain": "General Criminal Law",
      "icon": "fa-handcuffs",
      "startingCourt": "Judicial Magistrate 1st Class",
      "steps": [
        {
          "forum": "Trial Forum: Judicial Magistrate 1st Class",
          "description": "Magistrate tries accused for theft under Section 379 PPC. Finds him guilty and sentences him to 2 years rigorous imprisonment and Rs. 20,000 fine.",
          "statutoryRef": "Section 32 CrPC & Sec 379 PPC"
        },
        {
          "forum": "First Appellate Forum: Court of Session",
          "description": "Convict files Criminal Appeal under Section 408 CrPC before the Sessions Judge. Sessions Judge dismisses appeal.",
          "statutoryRef": "Section 408 CrPC"
        },
        {
          "forum": "Revisional Forum: High Court",
          "description": "Convict files Criminal Revision under Section 435 & 439 CrPC before the High Court challenging the legality and propriety of the conviction.",
          "statutoryRef": "Section 435 & 439 CrPC"
        },
        {
          "forum": "Apex Forum: Supreme Court",
          "description": "Final remedy via Criminal Petition for Leave to Appeal (CrPLA) under Article 185(3) before the Supreme Court.",
          "statutoryRef": "Article 185(3) Constitution"
        }
      ]
    },
    {
      "id": "route-7",
      "title": "Islamic Repugnancy Challenge Against a Statute",
      "domain": "Islamic Jurisprudence / FSC",
      "icon": "fa-book-quran",
      "startingCourt": "Federal Shariat Court (FSC)",
      "steps": [
        {
          "forum": "Trial / Review Forum: Federal Shariat Court (FSC)",
          "description": "Citizen or Government files Shariat Petition under Article 203D of the Constitution challenging a statutory provision as repugnant to the Holy Quran and Sunnah. FSC declares provision void from a specified future date.",
          "statutoryRef": "Article 203D Constitution"
        },
        {
          "forum": "Exclusive Appellate Forum: Shariat Appellate Bench (Supreme Court)",
          "description": "Aggrieved party or Federal Government files Shariat Appeal within 60 days under Article 203F before the Shariat Appellate Bench of the Supreme Court (3 SC Judges + 2 Ulema Judges). Stay is automatically triggered until appeal decision.",
          "statutoryRef": "Article 203F Constitution"
        }
      ]
    },
    {
      "id": "route-8",
      "title": "Defaulted Bank Loan Recovery (Rs. 120 Million)",
      "domain": "Banking Law",
      "icon": "fa-landmark",
      "startingCourt": "Banking Court (FIRO 2001)",
      "steps": [
        {
          "forum": "Trial Forum: Banking Court",
          "description": "Commercial bank files suit for recovery under Section 9 FIRO 2001. Borrower fails to file Leave to Defend within 30 days. Banking Court passes summary decree for recovery.",
          "statutoryRef": "Section 9 & 10 FIRO 2001"
        },
        {
          "forum": "First Appellate Forum: High Court (Division Bench)",
          "description": "Borrower files Banking Appeal before a Division Bench of the High Court under Section 22 FIRO 2001 within 30 days. Must deposit statutory percentage or security as required.",
          "statutoryRef": "Section 22 FIRO 2001"
        },
        {
          "forum": "Apex Forum: Supreme Court",
          "description": "Final remedy via Civil Petition for Leave to Appeal (CPLA) under Article 185(3) before the Supreme Court.",
          "statutoryRef": "Article 185(3) Constitution"
        }
      ]
    }
  ],
  "comparisonPairs": [
    {
      "pairId": "comp-1",
      "title": "Supreme Court vs. High Courts",
      "courtA": "Supreme Court of Pakistan",
      "courtB": "Provincial High Courts",
      "criteria": [
        {
          "feature": "Constitutional Chapter",
          "courtAVal": "Part VII, Chapter 2 (Articles 175-191)",
          "courtBVal": "Part VII, Chapter 3 (Articles 192-203)"
        },
        {
          "feature": "Territorial Jurisdiction",
          "courtAVal": "Entire Islamic Republic of Pakistan",
          "courtBVal": "Respective Province or Federal Capital (ICT)"
        },
        {
          "feature": "Retirement Age of Judges",
          "courtAVal": "65 Years (Article 179)",
          "courtBVal": "62 Years (Article 195)"
        },
        {
          "feature": "Writ / Fundamental Rights",
          "courtAVal": "Article 184(3) via Constitutional Benches (Art 191A)",
          "courtBVal": "Article 199 (Mandamus, Prohibition, Certiorari, Habeas Corpus, Quo Warranto)"
        },
        {
          "feature": "Inter-Governmental Disputes",
          "courtAVal": "Exclusive Original Jurisdiction (Article 184(1))",
          "courtBVal": "No jurisdiction over disputes between Federation & Province"
        },
        {
          "feature": "Binding Authority",
          "courtAVal": "Binds all courts in Pakistan (Article 189)",
          "courtBVal": "Binds subordinate courts in that province only (Article 201)"
        }
      ]
    },
    {
      "pairId": "comp-2",
      "title": "Sessions Judge vs. Section 30 Magistrate",
      "courtA": "Court of Session (Sessions / AD&SJ)",
      "courtB": "Judicial Magistrate with Sec 30 Powers",
      "criteria": [
        {
          "feature": "Governing CrPC Sections",
          "courtAVal": "Sections 6, 9, 28, 31 CrPC",
          "courtBVal": "Sections 30, 32, 34 CrPC"
        },
        {
          "feature": "Offences Triable",
          "courtAVal": "All offences under PPC (including murder, treason, robbery, dacoity)",
          "courtBVal": "All offences NOT punishable with death (attempted murder, major thefts)"
        },
        {
          "feature": "Sentencing Power",
          "courtAVal": "Any sentence authorized by law (Death, Life, Fines) — Death subject to Sec 374 confirmation",
          "courtBVal": "Any sentence authorized by law EXCEPT death or imprisonment exceeding 7 YEARS"
        },
        {
          "feature": "Pre-Arrest Bail Jurisdiction",
          "courtAVal": "Yes, under Section 498 CrPC",
          "courtBVal": "No, magistrates have no power to grant pre-arrest bail"
        },
        {
          "feature": "Appellate Destination",
          "courtAVal": "High Court (Section 410 CrPC)",
          "courtBVal": "Sessions Court if sentence <= 4 yrs; High Court if sentence > 4 yrs (Sec 408)"
        }
      ]
    },
    {
      "pairId": "comp-3",
      "title": "Federal Shariat Court vs. High Courts",
      "courtA": "Federal Shariat Court (FSC)",
      "courtB": "High Courts of Pakistan",
      "criteria": [
        {
          "feature": "Primary Constitutional Mandate",
          "courtAVal": "Examine whether any law is repugnant to Islamic Injunctions (Art 203D)",
          "courtBVal": "Protect Fundamental Rights & enforce Rule of Law via Writs (Art 199)"
        },
        {
          "feature": "Hudood Appeals",
          "courtAVal": "Exclusive appellate & revision forum for all Hudood convictions (Art 203DD)",
          "courtBVal": "No jurisdiction over Hudood appeals (barred by Art 203DD)"
        },
        {
          "feature": "Excluded Subject Matters",
          "courtAVal": "Cannot review Constitution or Muslim Personal Law (Art 203B(c))",
          "courtBVal": "Can interpret Constitution and all personal, civil, and criminal statutes"
        },
        {
          "feature": "Appellate Destination",
          "courtAVal": "Shariat Appellate Bench of the Supreme Court (Article 203F)",
          "courtBVal": "General Supreme Court Benches (Article 185)"
        }
      ]
    },
    {
      "pairId": "comp-4",
      "title": "Federal Service Tribunal vs. High Court (Writ)",
      "courtA": "Federal Service Tribunal (FST)",
      "courtB": "High Court Writ under Article 199",
      "criteria": [
        {
          "feature": "Subject Matter",
          "courtAVal": "Terms and conditions of federal civil servants (seniority, dismissal, promotion)",
          "courtBVal": "General executive actions, fundamental rights, non-civil servants"
        },
        {
          "feature": "Constitutional Ouster Clause",
          "courtAVal": "Exclusive forum created under Article 212 of Constitution",
          "courtBVal": "High Court writ jurisdiction is strictly barred by Article 212(2)"
        },
        {
          "feature": "Prerequisites to Approach",
          "courtAVal": "Must first exhaust departmental appeal/representation within 30 days",
          "courtBVal": "Must show no other adequate legal remedy is provided by law"
        },
        {
          "feature": "Appellate Route",
          "courtAVal": "Directly to Supreme Court under Article 212(3) (High Court bypassed)",
          "courtBVal": "Supreme Court under Article 185"
        }
      ]
    }
  ],
  "quiz": [
    {
      "id": "q-1",
      "question": "Under the Constitution of Pakistan (1973), which judicial body has exclusive jurisdiction to decide disputes between the Federal Government and a Provincial Government?",
      "opts": [
        "Islamabad High Court under Article 199",
        "Supreme Court of Pakistan under Article 184(1)",
        "Council of Common Interests (CCI)",
        "Federal Shariat Court under Article 203D"
      ],
      "ans": 1,
      "article": "Article 184(1) of Constitution 1973",
      "explanation": "Article 184(1) vests exclusive original jurisdiction in the Supreme Court to pronounce declaratory judgments in any dispute between the Federal Government and a Provincial Government, or between two or more Provincial Governments.",
      "examTip": "Remember: Under Article 184(1), the Supreme Court can only pronounce 'declaratory judgments'."
    },
    {
      "id": "q-2",
      "question": "Following the 26th Constitutional Amendment (October 2024), how is the Chief Justice of Pakistan (CJP) selected?",
      "opts": [
        "Strictly by automatic elevation of the single most senior Supreme Court judge",
        "By a 12-member Special Parliamentary Committee from amongst the 3 most senior SC judges for a 3-year term",
        "By the Prime Minister with the consent of the Leader of the Opposition",
        "By the Supreme Judicial Council through a secret ballot"
      ],
      "ans": 1,
      "article": "Article 175A(3) as amended by 26th Amendment (2024)",
      "explanation": "The 26th Constitutional Amendment amended Article 175A so that the CJP is nominated by a 12-member Special Parliamentary Committee (comprising 8 members of the National Assembly and 4 Senators) from amongst the 3 most senior judges of the Supreme Court, serving a fixed tenure of 3 years.",
      "examTip": "Top current-affairs & law question: CJP is selected by a 12-member Special Parliamentary Committee from the top 3 senior judges for a 3-year fixed term."
    },
    {
      "id": "q-3",
      "question": "Where does an appeal against a judgment of the Federal Shariat Court (FSC) lie?",
      "opts": [
        "Islamabad High Court",
        "Full Bench of the Federal Shariat Court",
        "Shariat Appellate Bench of the Supreme Court of Pakistan",
        "Council of Islamic Ideology (CII)"
      ],
      "ans": 2,
      "article": "Article 203F of Constitution 1973",
      "explanation": "Under Article 203F of the Constitution, an appeal against any final decision of the Federal Shariat Court lies exclusively to the Shariat Appellate Bench of the Supreme Court, consisting of 3 Supreme Court Judges and 2 Ulema Judges.",
      "examTip": "Appeals from the FSC do NOT go to a High Court or the ordinary Supreme Court bench; they lie to the specialized Shariat Appellate Bench of the Supreme Court."
    },
    {
      "id": "q-4",
      "question": "A Judicial Magistrate invested with Section 30 powers convicts an accused and sentences him to 5 years rigorous imprisonment. Where does the appeal lie?",
      "opts": [
        "Court of Session (Sessions Judge)",
        "High Court",
        "Supreme Court",
        "Home Department"
      ],
      "ans": 1,
      "article": "Section 408 proviso (b), Code of Criminal Procedure (CrPC 1898)",
      "explanation": "Under Section 408 proviso (b) CrPC, when an Assistant Sessions Judge or a Magistrate specially empowered under Section 30 passes any sentence of imprisonment for a term EXCEEDING FOUR YEARS, the appeal lies directly to the HIGH COURT, not the Sessions Court.",
      "examTip": "Threshold test: If a Sec 30 Magistrate sentences up to 4 years -> appeal goes to Sessions Court. If sentence > 4 years -> appeal goes directly to High Court."
    },
    {
      "id": "q-5",
      "question": "Which High Court in Pakistan is the only one possessing Original Civil Trial Jurisdiction for suits originating in its capital city exceeding statutory pecuniary limits?",
      "opts": [
        "Lahore High Court",
        "Peshawar High Court",
        "High Court of Sindh",
        "High Court of Balochistan"
      ],
      "ans": 2,
      "article": "Sindh Courts Act 1926 & Civil Courts framework",
      "explanation": "The High Court of Sindh (SHC) is the only High Court in Pakistan that acts as a court of original civil trial jurisdiction for civil suits arising in Karachi district exceeding the statutory pecuniary ceiling.",
      "examTip": "Classic Civil Judge / Law GAT question: SHC is the only High Court with original civil trial jurisdiction."
    },
    {
      "id": "q-6",
      "question": "A federal civil servant is compulsorily retired from service. Can he challenge his retirement by filing a Writ Petition under Article 199 in the High Court?",
      "opts": [
        "Yes, because Article 199 protects fundamental rights against arbitrary dismissal",
        "Yes, if the dismissal was passed with mala fide intention",
        "No, because Article 212(2) strictly bars High Court jurisdiction over terms and conditions of civil servants",
        "Yes, with prior permission from the Chairman Federal Public Service Commission"
      ],
      "ans": 2,
      "article": "Article 212(2) of Constitution 1973",
      "explanation": "Article 212(2) of the Constitution contains an express ouster clause: when an Administrative Court or Tribunal (FST) is established, no other court (including High Courts under Article 199) can entertain any proceedings regarding the terms and conditions of civil service.",
      "examTip": "Constitutional ouster: Service matters of civil servants fall exclusively under Article 212 (Service Tribunals), completely barring High Court writs under Article 199."
    },
    {
      "id": "q-7",
      "question": "When a Sessions Court sentences an accused to death for murder under Section 302(b) PPC, can the death penalty be executed immediately upon pronouncement?",
      "opts": [
        "Yes, if signed by the Sessions Judge",
        "No, it cannot be executed unless confirmed by the High Court under Section 374 CrPC",
        "No, it must be confirmed by the Provincial Governor",
        "Yes, after 7 days if no appeal is lodged"
      ],
      "ans": 1,
      "article": "Section 374, Code of Criminal Procedure (CrPC 1898)",
      "explanation": "Section 374 CrPC dictates that when the Court of Session passes a sentence of death, the proceedings must be submitted to the High Court (Murder Reference), and the sentence cannot be executed unless confirmed by at least two judges (Division Bench) of the High Court.",
      "examTip": "Murder Reference: A Sessions Judge can award capital punishment, but cannot execute it without High Court confirmation under Section 374 CrPC."
    },
    {
      "id": "q-8",
      "question": "What is the statutory limitation period for filing an appeal before the High Court against a conviction by an Anti-Terrorism Court (ATC)?",
      "opts": [
        "30 Days",
        "60 Days",
        "7 Days",
        "15 Days"
      ],
      "ans": 2,
      "article": "Section 25, Anti-Terrorism Act (ATA 1997)",
      "explanation": "Under Section 25(1) of the Anti-Terrorism Act 1997, any person aggrieved by a final judgment of an Anti-Terrorism Court must prefer an appeal before a High Court Division Bench within strictly SEVEN DAYS.",
      "examTip": "Critical procedural distinction: General criminal appeals have 30 or 60 days, but ATC appeals are strictly capped at 7 days under Section 25 ATA 1997."
    },
    {
      "id": "q-9",
      "question": "What is the maximum period of police custody (physical remand) that a Judicial Magistrate can authorize under Section 167 of the CrPC?",
      "opts": [
        "7 days in aggregate",
        "14 days in aggregate",
        "30 days in aggregate",
        "90 days in aggregate"
      ],
      "ans": 1,
      "article": "Section 167(2), Code of Criminal Procedure (CrPC 1898)",
      "explanation": "Under Section 167(2) CrPC, a Magistrate cannot authorize the detention of the accused in police custody for a term exceeding 14 days in the whole. Any further remand must be judicial custody under Section 344 CrPC.",
      "examTip": "14 days is the absolute statutory cap for police physical remand under Section 167 CrPC."
    },
    {
      "id": "q-10",
      "question": "Which high prerogative writ is sought under Article 199(1)(b)(ii) of the Constitution to challenge an individual holding or purporting to hold a public office without lawful authority?",
      "opts": [
        "Writ of Mandamus",
        "Writ of Certiorari",
        "Writ of Quo Warranto",
        "Writ of Prohibition"
      ],
      "ans": 2,
      "article": "Article 199(1)(b)(ii) of Constitution 1973",
      "explanation": "A Writ of Quo Warranto ('by what authority') requires a person holding or purporting to hold a public office to show under what authority of law he claims to hold that office.",
      "examTip": "Writ breakdown: Mandamus = Command to perform duty; Certiorari = Quash illegal act; Quo Warranto = Challenge illegal holding of public office; Habeas Corpus = Produce detained person."
    },
    {
      "id": "q-11",
      "question": "What is the retirement age for a Judge of a Provincial High Court versus a Judge of the Supreme Court of Pakistan?",
      "opts": [
        "High Court: 60 years; Supreme Court: 62 years",
        "High Court: 62 years; Supreme Court: 65 years",
        "High Court: 65 years; Supreme Court: 68 years",
        "Both retire at 65 years"
      ],
      "ans": 1,
      "article": "Articles 179 (Supreme Court) & 195 (High Court), Constitution 1973",
      "explanation": "Under Article 195, a Judge of a High Court holds office until he attains the age of 62 years. Under Article 179, a Judge of the Supreme Court holds office until he attains the age of 65 years.",
      "examTip": "Direct exam fact: High Court judges retire at 62; Supreme Court judges retire at 65."
    },
    {
      "id": "q-12",
      "question": "What is the pecuniary trial jurisdiction limit of a Civil Judge Class-I in Pakistan under the Civil Courts Ordinance, 1962?",
      "opts": [
        "Up to Rs. 5,000,000",
        "Up to Rs. 50,000,000",
        "Unlimited pecuniary jurisdiction",
        "Up to Rs. 100,000,000"
      ],
      "ans": 2,
      "article": "Section 9, West Pakistan Civil Courts Ordinance (Act II of 1962)",
      "explanation": "Under Section 9 of the Civil Courts Ordinance 1962, a Civil Judge of the First Class has unlimited pecuniary jurisdiction to try civil suits of any financial value whatsoever.",
      "examTip": "Pecuniary trial limits: Civil Judge 1st Class = Unlimited; Civil Judge 2nd Class = up to Rs. 5M; Civil Judge 3rd Class = up to Rs. 1M."
    },
    {
      "id": "q-13",
      "question": "Under the 26th Constitutional Amendment (2024), what new judicial forum was introduced within the Supreme Court to hear Article 184(1), Article 184(3), and advisory matters?",
      "opts": [
        "Federal Appellate Tribunal",
        "Constitutional Benches (Article 191A)",
        "National Judicial Council",
        "Supreme Constitutional Council"
      ],
      "ans": 1,
      "article": "Article 191A, Constitution of Pakistan (Inserted by 26th Amendment)",
      "explanation": "Article 191A establishes Constitutional Benches in the Supreme Court, comprising judges designated by a 3-member committee of senior judges, to exclusively hear original, public interest (184(3)), and constitutional interpretation cases.",
      "examTip": "26th Amendment landmark: Article 191A establishes Constitutional Benches in the Supreme Court and Article 202A allows them in High Courts."
    },
    {
      "id": "q-14",
      "question": "If a defendant borrower in a suit filed by a bank under the Financial Institutions (Recovery of Finances) Ordinance 2001 fails to file an application for 'Leave to Defend' within 30 days, what is the consequence?",
      "opts": [
        "The case is adjourned sine die",
        "The allegations of fact in the plaint are deemed admitted and the Banking Court passes an ex-parte summary decree",
        "The case is transferred to a regular civil court",
        "The borrower is issued a show-cause notice by the State Bank of Pakistan"
      ],
      "ans": 1,
      "article": "Section 10(1) & 10(11), Financial Institutions (Recovery of Finances) Ordinance 2001",
      "explanation": "Under Section 10 FIRO 2001, a borrower cannot defend the suit without obtaining leave. If leave to defend is not filed within 30 days, the court shall forthwith pass a summary decree in favour of the financial institution.",
      "examTip": "Summary recovery under FIRO: 30 days to apply for Leave to Defend; failure leads to immediate summary decree."
    },
    {
      "id": "q-15",
      "question": "Can an aggrieved husband file an appeal against a decree passed by a Family Court dissolving the marriage on the ground of Khula?",
      "opts": [
        "Yes, to the High Court within 30 days",
        "Yes, to the District Judge within 30 days",
        "No, Section 14(2) of the Family Courts Act 1964 explicitly bars appeal against a decree for dissolution of marriage by Khula",
        "Yes, with permission of the Union Council Chairman"
      ],
      "ans": 2,
      "article": "Section 14(2), West Pakistan Family Courts Act 1964",
      "explanation": "Under Section 14(2) of the West Pakistan Family Courts Act 1964, no appeal lies from a decree passed by a Family Court for dissolution of marriage, except in the case of dissolution on grounds of husband's whereabouts unknown or failure to pay dower.",
      "examTip": "Key family law principle: Khula decrees are final and non-appealable under Section 14(2) Family Courts Act."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.COURT_STRUCTURE_DATA = COURT_STRUCTURE_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURT_STRUCTURE_DATA;
}
