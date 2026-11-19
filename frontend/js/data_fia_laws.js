/**
 * Federal Investigation Agency (FIA) Laws & Scheduled Offences Explorer
 * Comprehensive database covering FIA Act 1974, PECA 2016, AMLA 2010, Emigration 1979, PCA 1947, 
 * all 37 Scheduled Special Acts, and all 118 Scheduled PPC Sections with full investigative guidelines.
 * Formulated from the official Federal Investigation Agency statutory repository (SRO amendments through 2026).
 */

const FIA_LAWS_DATA = {
  "metadata": {
    "title": "Federal Investigation Agency (FIA) Laws & Scheduled Offences Explorer",
    "authority": "FIA Act, 1974 (Act VIII of 1975) & Scheduled Special Enactments",
    "gazetteDate": "17th January, 1975 (Gazette of Pakistan, Extra-ordinary, Part-I)",
    "updatedThrough": "S.R.O. 1620(I)/2026 (OGRA Ordinance inclusion) & S.R.O. 82(I)/2026",
    "totalScheduledPpcSections": 118,
    "totalScheduledSpecialActs": 37,
    "totalWingsProfiled": 7,
    "totalCaseScenarios": 8,
    "totalQuizQuestions": 20
  },
  "kpis": {
    "coreLawsCount": "6 Core Statutes",
    "coreLawsDesc": "FIA Act 1974, PECA 2016, AMLA 2010, Emigration 1979, PCA 1947 & Passports",
    "scheduledActsCount": "37 Scheduled Acts",
    "scheduledActsDesc": "Complete official Schedule from SRO 1975 to 2026 Gazette amendments",
    "ppcOffencesCount": "118 PPC Sections",
    "ppcOffencesDesc": "All 118 scheduled Penal Code sections triable by FIA Special Courts",
    "wingsCount": "7 Operational Wings",
    "wingsDesc": "Anti-Corruption, Cyber Crime, Human Trafficking, Economic, CTW, Immigration & Interpol"
  },
  "coreLaws": [
    {
      "id": "law-fia-act",
      "name": "Federal Investigation Agency Act, 1974",
      "actNo": "Act VIII of 1975",
      "dateEnacted": "17th January, 1975",
      "investigatingWing": "All Operational Wings across Pakistan",
      "preamble": "An Act to provide for the constitution of a Federal Investigation Agency for the inquiry into and investigation of certain offences committed in connection with matters concerning the Federal Government and for matters connected therewith.",
      "extentJurisdiction": "Extends to the whole of Pakistan and also applies to all citizens of Pakistan and Public Servants, wherever they may be (extraterritorial jurisdiction under Section 1(2)).",
      "keySections": [
        {
          "section": "Section 1",
          "title": "Short title, extent and commencement",
          "summary": "Title: Federal Investigation Agency Act, 1974. Applies to all citizens of Pakistan and public servants wherever they may be (worldwide jurisdiction). Came into force at once.",
          "examNote": "Extraterritorial application is a favourite FPSC question: FIA has jurisdiction over Pakistani citizens and public servants even outside Pakistan."
        },
        {
          "section": "Section 2",
          "title": "Definitions",
          "summary": "Defines 'Agency' (FIA under Sec 3); 'Code' (CrPC 1898); 'Director General' (appointed under Sec 3(2)); 'Provincial Police' (Police Act 1861); 'Public Servant' (Sec 21 PPC & any corporation/body set up or controlled by Federal Govt); 'Special Police' (PSPE 1948).",
          "examNote": "Definition of Public Servant includes federal autonomous bodies, corporations (e.g. PIA, OGDCL, SNGPL, Pakistan Railways), and statutory authorities."
        },
        {
          "section": "Section 3",
          "title": "Constitution of the Agency",
          "summary": "Federal Government constitutes the Agency for inquiry into and investigation of offences specified in the Schedule, including attempt, conspiracy, and abetment. Headed by Director General.",
          "examNote": "FIA's jurisdiction is strictly bounded by its SCHEDULE. Non-scheduled offences cannot be investigated by FIA without Federal Government notification."
        },
        {
          "section": "Section 4",
          "title": "Superintendence and administration of the Agency",
          "summary": "Superintendence vests in the Federal Government (Ministry of Interior). Administration vests in the Director General, who exercises powers of an Inspector General of Police (IGP) under the Police Act, 1861.",
          "examNote": "Crucial MCQ: Superintendence = Federal Government; Administration = Director General (with powers of IGP under Police Act 1861)."
        },
        {
          "section": "Section 5",
          "title": "Powers of the members of the Agency",
          "summary": "Sub-section (1): Powers throughout Pakistan regarding search, arrest, and seizure like Provincial Police. Sub-section (2): Officers not below Sub-Inspector exercise powers of an Officer-in-Charge of a Police Station (SHO). Sub-section (3): Officers not below Sub-Inspector authorized by DG may arrest without warrant any person on reasonable suspicion of scheduled offences. Sub-section (5): Investigating officer may issue a written freezing/restraining order against property likely to be removed/transferred. Sub-section (6): Violation of freezing order punishable with rigorous imprisonment up to 1 year, or fine, or both.",
          "examNote": "Key statutory thresholds: (1) Minimum rank to act as SHO = Sub-Inspector; (2) Minimum rank to arrest without warrant = Sub-Inspector authorized by DG; (3) Penalty under Sec 5(6) = 1 year RI or fine."
        },
        {
          "section": "Section 5-A",
          "title": "Certain Officers of the Agency deemed to be Public Prosecutors",
          "summary": "Inserted via FIA (Amendment) Ordinance 2002: Assistant Directors (Legal) and Deputy Directors (Law) of the Agency are deemed to be Public Prosecutors competent to institute and conduct proceedings in Special Courts and courts subordinate to the High Court.",
          "examNote": "Core syllabus question for FIA AD Legal exams: AD Legal and DD Law have the statutory status of Public Prosecutors under Section 5-A."
        },
        {
          "section": "Section 6",
          "title": "Power to amend the Schedule",
          "summary": "Federal Government may, by notification in the official Gazette (S.R.O.), add any entry, modify, or omit any entry from the Schedule.",
          "examNote": "Parliament delegated Schedule amendment power directly to the Federal Government (Cabinet / Ministry of Interior via S.R.O.)."
        },
        {
          "section": "Section 7",
          "title": "Delegation of Powers",
          "summary": "The Director General may, by order in writing, direct that all or any of his powers under the Act or rules be exercisable by any member of the Agency.",
          "examNote": "Allows operational decentralization to Additional DGs, Directors (Zones), and Deputy Directors."
        },
        {
          "section": "Section 8",
          "title": "Indemnity",
          "summary": "No suit, prosecution or legal proceeding lies against the Federal Government, any member of the Agency, or person exercising powers for anything done or intended to be done in good faith.",
          "examNote": "Standard statutory immunity clause protecting bona fide official acts."
        },
        {
          "section": "Section 9",
          "title": "Power to make rules",
          "summary": "Federal Government may make rules regarding terms of service, recruitment qualifications, inquiry/investigation powers, assistance to Provincial Police, and rewards for members/public.",
          "examNote": "Rules framed: FIA (Inquiry and Investigation) Rules, 2002; FIA Appointment, Promotion and Transfer Rules, 1975."
        },
        {
          "section": "Section 10",
          "title": "Repeal of PSPE 1948",
          "summary": "Repealed the Pakistan Special Police Establishment (PSPE) Ordinance 1948 and Special Police and Provincial Police (Amalgamation) Order 1962, transferring pending inquiries and personnel to FIA.",
          "examNote": "FIA is the direct statutory successor to the Pakistan Special Police Establishment (PSPE)."
        }
      ]
    },
    {
      "id": "law-peca",
      "name": "Prevention of Electronic Crimes Act, 2016 (PECA)",
      "actNo": "Act XL of 2016",
      "dateEnacted": "11th August, 2016",
      "investigatingWing": "FIA Cyber Crime Wing (CCW)",
      "preamble": "An Act to prevent unauthorized acts with respect to information systems and provide for related offences as well as a mechanism for investigation, prosecution and international cooperation.",
      "extentJurisdiction": "Applies to whole of Pakistan and every citizen of Pakistan wherever he may be, and to any person who commits an offence outside Pakistan if the act affects a person, information system or data located in Pakistan.",
      "keySections": [
        {
          "section": "Section 3",
          "title": "Unauthorized access to information system or data",
          "summary": "Gaining unauthorized access to any information system or data without authorization. Punishment: Imprisonment up to 3 months, or fine up to Rs. 50,000, or both.",
          "examNote": "Foundation hacking provision. Simple unauthorized access carries 3 months / Rs. 50k."
        },
        {
          "section": "Section 4",
          "title": "Unauthorized copying or transmission of data",
          "summary": "Copying or transmitting data without authorization. Punishment: Imprisonment up to 6 months, or fine up to Rs. 100,000, or both.",
          "examNote": "Applies to copying confidential company/customer data or downloading private databases."
        },
        {
          "section": "Section 5",
          "title": "Interference with information system or data",
          "summary": "Impairing the operation of an information system, altering or deleting data. Punishment: Imprisonment up to 2 years, or fine up to Rs. 500,000, or both.",
          "examNote": "Covers ransomware, DDoS attacks, and deliberate system crashes."
        },
        {
          "section": "Section 6",
          "title": "Unauthorized access to Critical Infrastructure",
          "summary": "Unauthorized access to critical infrastructure information systems (defense, banking backbone, power grid, NADRA). Punishment: Imprisonment up to 3 years, or fine up to Rs. 1,000,000, or both.",
          "examNote": "Higher threshold for state critical infrastructure vs ordinary servers."
        },
        {
          "section": "Section 7",
          "title": "Offences against Critical Infrastructure",
          "summary": "Impairing or damaging critical infrastructure information system. Punishment: Imprisonment up to 5 years, or fine up to Rs. 5,000,000, or both.",
          "examNote": "Strict penal tier protecting national database and security networks."
        },
        {
          "section": "Section 10",
          "title": "Cyber terrorism",
          "summary": "Committing cyber interference or theft of sensitive data to terrorize public, create fear, or advance a terrorist organization. Punishment: Imprisonment up to 14 years, or fine up to Rs. 50,000,000, or both.",
          "examNote": "Maximum sentence under PECA: 14 years imprisonment and Rs. 50 million fine."
        },
        {
          "section": "Section 13",
          "title": "Electronic forgery",
          "summary": "Creating a forged digital document, email, website, or token with intent to cause harm or defraud. Punishment: Imprisonment up to 3 years, or fine up to Rs. 250,000, or both.",
          "examNote": "Digital equivalent of PPC Section 463/468 forgery."
        },
        {
          "section": "Section 14",
          "title": "Electronic fraud",
          "summary": "Obtaining unlawful gain or causing wrongful loss by deceiving or manipulating information systems (e.g. online banking phishing, ATM skimmers). Punishment: Imprisonment up to 2 years, or fine up to Rs. 10,000,000, or both.",
          "examNote": "High-volume trial category in FIA Special Courts Central for online banking scams."
        },
        {
          "section": "Section 16",
          "title": "Unauthorized use of identity information",
          "summary": "Using another person's CNIC, biometric, credit card data, or SIM without authorization. Punishment: Imprisonment up to 3 years, or fine up to Rs. 5,000,000, or both.",
          "examNote": "Covers SIM card cloning and unauthorized biometric authentication."
        },
        {
          "section": "Section 20",
          "title": "Offences against dignity of a natural person (Defamation)",
          "summary": "Displaying or transmitting false information with intent to harm the reputation of a natural person. Punishment: Imprisonment up to 3 years, or fine up to Rs. 1,000,000, or both.",
          "examNote": "Applies ONLY to natural persons (not companies or state institutions). Non-cognizable, bailable, and compoundable."
        },
        {
          "section": "Section 21",
          "title": "Cyber stalking / Non-consensual display of private images",
          "summary": "Superimposing faces, displaying non-consensual private sexual images, or blackmailing with intimate photos. Punishment: Imprisonment up to 5 years, or fine up to Rs. 5,000,000, or both (up to 7 years if victim is a minor).",
          "examNote": "Top social crime investigated by FIA CCW: Non-consensual distribution of private pictures."
        },
        {
          "section": "Section 22",
          "title": "Child pornography",
          "summary": "Producing, offering, possessing, or distributing sexually explicit material involving a minor. Punishment: Imprisonment up to 7 years, or fine up to Rs. 5,000,000, or both.",
          "examNote": "Strict non-bailable offence actively pursued by FIA with Interpol."
        },
        {
          "section": "Section 24",
          "title": "Cyber stalking",
          "summary": "Following, monitoring online activities, or persistently communicating to cause fear or distress. Punishment: Imprisonment up to 3 years, or fine up to Rs. 1,000,000, or both.",
          "examNote": "Criminalizes continuous digital harassment and obsessive tracking."
        },
        {
          "section": "Section 29",
          "title": "Retention of traffic data",
          "summary": "Telecom licensees and Internet Service Providers (ISPs) must retain traffic data for a minimum period of ONE YEAR (90 days for content when directed).",
          "examNote": "Crucial evidentiary rule: Telecom providers must preserve traffic data for 1 year under Section 29."
        }
      ]
    },
    {
      "id": "law-amla",
      "name": "Anti-Money Laundering Act, 2010 (AMLA)",
      "actNo": "Act VII of 2010",
      "dateEnacted": "26th March, 2010 (Significantly amended in 2020 for FATF compliance)",
      "investigatingWing": "FIA Economic Crime Wing (ECW) & Anti-Corruption Wing",
      "preamble": "An Act to provide for prevention of money laundering, combating financing of terrorism and forfeiture of property derived from, or involved in, money laundering and terrorist financing.",
      "extentJurisdiction": "Whole of Pakistan, covering proceeds of scheduled predicate offences generated domestically or transferred internationally.",
      "keySections": [
        {
          "section": "Section 3",
          "title": "Offence of Money Laundering",
          "summary": "A person is guilty of money laundering if he: (a) acquires, converts, possesses, uses, or transfers property knowing or having reason to believe it is proceeds of crime; (b) conceals or disguises the true nature, origin, location, disposition, or ownership of such property; (c) commits, attempts, aids, abets, or conspires to commit any such act.",
          "examNote": "Predicate offence requirement: Money laundering must originate from a scheduled predicate crime (e.g. corruption, drug trafficking, tax evasion, fraud)."
        },
        {
          "section": "Section 4",
          "title": "Punishment for Money Laundering",
          "summary": "Punishable with rigorous imprisonment for a term not less than ONE YEAR but which may extend to TEN YEARS, and fine which may extend to TWENTY-FIVE MILLION RUPEES (Rs. 25,000,000), and forfeiture of involved property.",
          "examNote": "Severe statutory penalty: 1 to 10 years rigorous imprisonment + fine up to Rs. 25 million + confiscation of property."
        },
        {
          "section": "Section 6",
          "title": "Financial Monitoring Unit (FMU)",
          "summary": "Autonomous agency housed at State Bank of Pakistan responsible for receiving, analyzing, and disseminating intelligence on Suspicious Transaction Reports (STRs) and Currency Transaction Reports (CTRs) to investigating agencies like FIA, NAB, and FBR.",
          "examNote": "FMU is NOT an investigating agency; it is a financial intelligence unit that refers actionable intelligence to FIA/NAB/FBR."
        },
        {
          "section": "Section 7",
          "title": "Reporting Entities & Suspicious Transaction Reports (STRs)",
          "summary": "Banks, financial institutions, exchange companies, designated non-financial businesses (lawyers, real estate agents, jewellers) must report STRs and CTRs (cash transactions exceeding specified thresholds) to the FMU.",
          "examNote": "Banks must file STRs with FMU within the statutory timeline whenever transaction lacks economic rationale."
        },
        {
          "section": "Section 8",
          "title": "Attachment of property involved in money laundering",
          "summary": "Investigating officer, with prior permission of the Special Court, may provisionally attach property involved in money laundering for a period not exceeding 180 days.",
          "examNote": "Provisional attachment period: 180 days (extendable by court order)."
        },
        {
          "section": "Section 20",
          "title": "Special Courts for AMLA trials",
          "summary": "Offences triable by the Court of Session or Special Court established under the Act. Where the predicate offence is triable by a specialized court (e.g. Accountability Court or Special Court CNS), that court tries the money laundering offence conjointly.",
          "examNote": "Jurisdictional coordination between Sessions Court, Accountability Court, and FIA Special Court."
        }
      ]
    },
    {
      "id": "law-emigration",
      "name": "Emigration Ordinance, 1979",
      "actNo": "Ordinance XVIII of 1979",
      "dateEnacted": "23rd March, 1979",
      "investigatingWing": "FIA Anti-Human Trafficking & Smuggling Directorate (AHTD)",
      "preamble": "An Ordinance to amend and consolidate the law relating to emigration from Pakistan and employment abroad of Pakistani citizens.",
      "extentJurisdiction": "Applies to whole of Pakistan and all Pakistani citizens wherever they may be.",
      "keySections": [
        {
          "section": "Section 17",
          "title": "Unlawful emigration",
          "summary": "Whoever emigrates or attempts to emigrate from Pakistan without obtaining a valid visa, passport, or through unauthorized routes. Punishment: Imprisonment up to 1 year, or fine, or both.",
          "examNote": "Applies to the irregular migrant himself (attempting unauthorized exit)."
        },
        {
          "section": "Section 18",
          "title": "Fraudulently inducing to emigrate",
          "summary": "Whoever by means of false pretenses, fraud, or deceit induces or attempts to induce any person to emigrate or take overseas employment (e.g. fake work visas, counterfeit work permits). Punishment: Imprisonment for a term not less than FIVE YEARS and up to FOURTEEN YEARS, and with fine.",
          "examNote": "Heavily tested in FIA Inspector exams: Minimum 5 years up to 14 years imprisonment for fake visa agents!"
        },
        {
          "section": "Section 19",
          "title": "Receiving money for overseas employment without license",
          "summary": "Whoever, not being an authorized Overseas Employment Promoter (OEP) with a valid license, demands or receives money or valuables under pretext of securing employment abroad. Punishment: Imprisonment from 5 to 14 years and fine.",
          "examNote": "Targets illegal sub-agents and unlicensed human trafficking recruiters."
        },
        {
          "section": "Section 22",
          "title": "Special Courts of Emigration",
          "summary": "Federal Government establishes Special Courts presided over by a District & Sessions Judge to try offences punishable under the Emigration Ordinance.",
          "examNote": "Appeals from Special Court of Emigration lie directly to the High Court."
        }
      ]
    },
    {
      "id": "law-pca",
      "name": "Prevention of Corruption Act, 1947 (PCA)",
      "actNo": "Act II of 1947",
      "dateEnacted": "11th March, 1947",
      "investigatingWing": "FIA Anti-Corruption Wing (Federal employees)",
      "preamble": "An Act for the more effective prevention of bribery and corruption among public servants.",
      "extentJurisdiction": "Whole of Pakistan, covering all public servants in federal ministries, departments, autonomous bodies, and state corporations.",
      "keySections": [
        {
          "section": "Section 4",
          "title": "Presumption where public servant accepts gratification",
          "summary": "Where in any trial it is proved that a public servant has accepted or agreed to accept any gratification (other than legal remuneration) or valuable thing, it SHALL be presumed, unless the contrary is proved, that he accepted it as a motive or reward for corruption.",
          "examNote": "Reversal of burden of proof: Once receipt of money is proved, corruption is presumed under Section 4."
        },
        {
          "section": "Section 5(1)",
          "title": "Definition of Criminal Misconduct",
          "summary": "A public servant commits criminal misconduct if he: (a) habitually accepts gratification; (b) dishonestly or fraudulently misappropriates property entrusted to him; (c) abuses his official position to obtain valuable thing or pecuniary advantage; or (d) possesses disproportionate assets to known lawful sources of income.",
          "examNote": "Memorize the 4 limbs of Criminal Misconduct: bribery, embezzlement, abuse of power, and disproportionate wealth."
        },
        {
          "section": "Section 5(2)",
          "title": "Punishment for Criminal Misconduct",
          "summary": "Any public servant who commits criminal misconduct shall be punishable with imprisonment for a term which may extend to SEVEN YEARS, or with fine, or with both.",
          "examNote": "Standard penalty for public servant corruption under Section 5(2) is up to 7 years imprisonment."
        },
        {
          "section": "Section 5-A",
          "title": "Investigation by police officers / FIA",
          "summary": "Notwithstanding anything in CrPC, no police officer below the rank of an Inspector of Police (or Sub-Inspector authorized by general/special order) shall investigate any offence under this Act without an order of a Magistrate.",
          "examNote": "In FIA, Sub-Inspectors and Inspectors are legally empowered to investigate corruption."
        }
      ]
    },
    {
      "id": "law-passport",
      "name": "Passport Act, 1974 & Foreign Exchange Regulation (FERA)",
      "actNo": "Act XX of 1974 & Act VII of 1947",
      "dateEnacted": "Passport Act (1974) & FERA (1947)",
      "investigatingWing": "FIA Immigration Wing & Economic Crime Wing (ECW)",
      "preamble": "Specialized statutory frameworks governing travel documents and cross-border currency regulations scheduled under the FIA Act.",
      "extentJurisdiction": "All international airports, sea ports, land border terminals, and financial markets.",
      "keySections": [
        {
          "section": "Section 6 (Passport Act)",
          "title": "Penalties for passport fraud & forgery",
          "summary": "Penalizes making false statements to obtain passport, forging or altering passport stamps, possessing more than one valid passport without disclosing it, or allowing another to use one's passport. Punishment: Up to 3 years imprisonment, or fine, or both.",
          "examNote": "Essential for FIA Immigration Officers posted at airports."
        },
        {
          "section": "Sections 4 & 5 (FERA 1947)",
          "title": "Hawala / Hundi & illegal foreign exchange trading",
          "summary": "Prohibits dealing in foreign exchange without a license from the State Bank of Pakistan. Criminalizes the informal Hawala/Hundi remittance networks. Punishment: Imprisonment up to 2 years, or fine, or both.",
          "examNote": "Investigated by FIA Economic Crime Wing through surprise raids on illegal currency dealers."
        }
      ]
    }
  ],
  "fiaScheduleSpecialActs": [
    {
      "entryNo": "1-A",
      "actTitle": "Telegraphic Act, 1885",
      "sections": "Sections 25-D & 29",
      "sro": "S.R.O. 1231(I)/2012",
      "category": "Communications"
    },
    {
      "entryNo": "2",
      "actTitle": "Explosive Substances Act, 1908 (VI of 1908)",
      "sections": "Whole Act",
      "sro": "S.R.O. 826(I)/97",
      "category": "Security"
    },
    {
      "entryNo": "3",
      "actTitle": "Official Secrets Act, 1923 (XIX of 1923)",
      "sections": "Whole Act",
      "sro": "S.R.O. 826(I)/97",
      "category": "Security"
    },
    {
      "entryNo": "4",
      "actTitle": "Foreigners Act, 1946 (XXXI of 1946)",
      "sections": "Whole Act",
      "sro": "S.R.O. 826(I)/97",
      "category": "Immigration"
    },
    {
      "entryNo": "5",
      "actTitle": "Prevention of Corruption Act, 1947 (II of 1947)",
      "sections": "Whole Act (PCA)",
      "sro": "S.R.O. 1113(I)/2008",
      "category": "Anti-Corruption"
    },
    {
      "entryNo": "6",
      "actTitle": "Foreign Exchange Regulation Act, 1947 (VII of 1947)",
      "sections": "Hawala / Hundi (FERA)",
      "sro": "S.R.O. 826(I)/97",
      "category": "Economic"
    },
    {
      "entryNo": "7",
      "actTitle": "Import and Export (Control) Act, 1950 (XXXIX of 1950)",
      "sections": "Trade controls",
      "sro": "S.R.O. 826(I)/97",
      "category": "Economic"
    },
    {
      "entryNo": "8",
      "actTitle": "Banking Companies Ordinance, 1962 (LVII of 1962)",
      "sections": "Banking frauds",
      "sro": "S.R.O. 826(I)/97",
      "category": "Banking"
    },
    {
      "entryNo": "9",
      "actTitle": "Pakistan Arms Ordinance, 1965 (W.P. Ord XX of 1965)",
      "sections": "Illegal arms",
      "sro": "S.R.O. 826(I)/97",
      "category": "Security"
    },
    {
      "entryNo": "10",
      "actTitle": "Customs Act, 1969 (IV of 1969)",
      "sections": "Section 156 (Smuggling)",
      "sro": "S.R.O. 826(I)/97",
      "category": "Customs"
    },
    {
      "entryNo": "11",
      "actTitle": "Foreign Exchange Repatriation Regulation, 1972",
      "sections": "Currency repatriation",
      "sro": "S.R.O. 826(I)/97",
      "category": "Economic"
    },
    {
      "entryNo": "12",
      "actTitle": "Foreign Assets (Declaration) Regulation, 1972",
      "sections": "Undeclared assets",
      "sro": "S.R.O. 826(I)/97",
      "category": "Economic"
    },
    {
      "entryNo": "13",
      "actTitle": "National Registration Act, 1973 (LVI of 1973)",
      "sections": "Omitted",
      "sro": "S.R.O. 826(I)/97",
      "category": "Historical"
    },
    {
      "entryNo": "14",
      "actTitle": "High Treason (Punishment) Act, 1973 (LXVIII of 1973)",
      "sections": "Article 6 Constitutional offences",
      "sro": "S.R.O. 826(I)/97",
      "category": "State Security"
    },
    {
      "entryNo": "15",
      "actTitle": "Prevention of Anti-National Activities Act, 1974 (VII of 1974)",
      "sections": "Subversion",
      "sro": "S.R.O. 826(I)/97",
      "category": "State Security"
    },
    {
      "entryNo": "16",
      "actTitle": "Banks (Nationalization) Act, 1974 (XIX of 1974)",
      "sections": "State banks governance",
      "sro": "S.R.O. 826(I)/97",
      "category": "Banking"
    },
    {
      "entryNo": "17",
      "actTitle": "Passport Act, 1974 (XX of 1974)",
      "sections": "Section 6 (Passport forgery)",
      "sro": "S.R.O. 826(I)/97",
      "category": "Immigration"
    },
    {
      "entryNo": "18",
      "actTitle": "Drugs Act, 1976 (XXXI of 1976)",
      "sections": "Spurious/counterfeit medicines",
      "sro": "S.R.O. 826(I)/97",
      "category": "Public Health"
    },
    {
      "entryNo": "19",
      "actTitle": "Emigration Ordinance, 1979 (XVIII of 1979)",
      "sections": "Sections 17, 18, 19",
      "sro": "S.R.O. 826(I)/97",
      "category": "Human Trafficking"
    },
    {
      "entryNo": "20",
      "actTitle": "Exit from Pakistan (Control) Ordinance, 1981 (XLVI of 1981)",
      "sections": "Exit Control List (ECL)",
      "sro": "S.R.O. 826(I)/97",
      "category": "Immigration"
    },
    {
      "entryNo": "21",
      "actTitle": "Anti-Terrorism Act, 1997 (XXVII of 1997)",
      "sections": "Inter-provincial scope or Federal entrustment",
      "sro": "S.R.O. 157(I)/2002",
      "category": "Counter-Terrorism"
    },
    {
      "entryNo": "22",
      "actTitle": "Prevention & Control of Human Trafficking Ordinance, 2002",
      "sections": "Human trafficking",
      "sro": "S.R.O. 741(I)/2002",
      "category": "Human Trafficking"
    },
    {
      "entryNo": "23",
      "actTitle": "Pakistan Telecommunication (Re-organization) Act, 1996",
      "sections": "Illegal grey trafficking / telecom fraud",
      "sro": "S.R.O. 853(I)/2002",
      "category": "Cyber / Telecom"
    },
    {
      "entryNo": "24",
      "actTitle": "National Database and Registration Authority Ordinance, 2002 (NADRA)",
      "sections": "Fake CNICs / data theft",
      "sro": "S.R.O. 549(I)/2003",
      "category": "Identity Fraud"
    },
    {
      "entryNo": "25",
      "actTitle": "Electronic Transmission Ordinance, 2002 (LI of 2002)",
      "sections": "Sections 36 & 37",
      "sro": "S.R.O. 1050(I)/2003",
      "category": "Cyber"
    },
    {
      "entryNo": "26",
      "actTitle": "Copyright Ordinance, 1962 (XXXIV of 1962)",
      "sections": "Intellectual property piracy",
      "sro": "S.R.O. 321(I)/2005",
      "category": "Economic"
    },
    {
      "entryNo": "27",
      "actTitle": "Prevention of Electronic Crimes Ordinance, 2007",
      "sections": "Precursor to PECA 2016",
      "sro": "S.R.O. 206(I)/2008",
      "category": "Cyber"
    },
    {
      "entryNo": "28",
      "actTitle": "Anti-Money Laundering Ordinance, 2007 (XLV of 2007)",
      "sections": "Money laundering precursor",
      "sro": "S.R.O. 1097(I)/2008",
      "category": "Economic"
    },
    {
      "entryNo": "29",
      "actTitle": "Electricity Act, 1910 (IX of 1910)",
      "sections": "Major electricity theft / DISCOs",
      "sro": "S.R.O. 1/4/2013-FIA",
      "category": "Energy Theft"
    },
    {
      "entryNo": "30",
      "actTitle": "Protection of Pakistan Act, 2014 (X of 2014)",
      "sections": "State security",
      "sro": "S.R.O. 5(KE)/2016",
      "category": "Security"
    },
    {
      "entryNo": "31",
      "actTitle": "Anti-Money Laundering Act, 2010 (VII of 2010 - AMLA)",
      "sections": "Whole Act",
      "sro": "S.R.O. 2094(I)/2022",
      "category": "Economic / AML"
    },
    {
      "entryNo": "32",
      "actTitle": "Prevention of Electronic Crimes Act, 2016 (PECA 2016)",
      "sections": "Whole Act (Cyber crimes)",
      "sro": "S.R.O. 1047(I)/2016",
      "category": "Cyber"
    },
    {
      "entryNo": "33",
      "actTitle": "Transplantation of Human Organs and Tissues Act, 2010",
      "sections": "Illegal kidney/organ trade",
      "sro": "S.R.O. 353(I)/2017",
      "category": "Organ Trafficking"
    },
    {
      "entryNo": "34",
      "actTitle": "Prevention of Smuggling of Migrants Act, 2018 (XXVIII of 2018)",
      "sections": "Migrant smuggling across borders",
      "sro": "S.R.O. 1070(I)/2021",
      "category": "Human Trafficking"
    },
    {
      "entryNo": "35",
      "actTitle": "Prevention of Trafficking in Persons Act, 2018 (XXXIV of 2018)",
      "sections": "Human trafficking & forced labour",
      "sro": "S.R.O. 1070(I)/2021",
      "category": "Human Trafficking"
    },
    {
      "entryNo": "36",
      "actTitle": "Public Properties (Removal of Encroachment) Ordinance, 2021",
      "sections": "State land protection",
      "sro": "S.R.O. 1412(I)/2021",
      "category": "Encroachment"
    },
    {
      "entryNo": "37",
      "actTitle": "Oil and Gas Regulatory Authority Ordinance, 2002 (XVII of 2002)",
      "sections": "Sections 25 to 29 (Gas theft / tampering)",
      "sro": "S.R.O. 1620(I)/2026",
      "category": "Energy Theft"
    }
  ],
  "ppcScheduledSections": [
    {
      "sec": "120-B",
      "title": "Punishment of criminal conspiracy",
      "group": "Conspiracy & State Offences",
      "category": "State Security",
      "wing": "All Wings / CTW",
      "punishment": "Same as abetment of the main offence",
      "fiaNexus": "When conspiracy relates to scheduled federal offences or offences against the State."
    },
    {
      "sec": "121",
      "title": "Waging, or attempting to wage war or abetting waging of war against Pakistan",
      "group": "State Offences",
      "category": "State Security",
      "wing": "Counter Terrorism Wing (CTW)",
      "punishment": "Death, or imprisonment for life, and fine",
      "fiaNexus": "Direct offence against the sovereignty of the Federal Government of Pakistan."
    },
    {
      "sec": "122",
      "title": "Collecting arms, etc., with intention of waging war against Pakistan",
      "group": "State Offences",
      "category": "State Security",
      "wing": "Counter Terrorism Wing (CTW)",
      "punishment": "Imprisonment for life or up to 10 years, and fine",
      "fiaNexus": "Preparatory armed rebellion against the Federation."
    },
    {
      "sec": "123",
      "title": "Concealing with intent to facilitate design to wage war",
      "group": "State Offences",
      "category": "State Security",
      "wing": "Counter Terrorism Wing (CTW)",
      "punishment": "Imprisonment up to 10 years, and fine",
      "fiaNexus": "Suppression of intelligence regarding armed attack on the State."
    },
    {
      "sec": "123-A",
      "title": "Condemnation of the creation of the State, and advocacy of abolition of its sovereignty",
      "group": "State Offences",
      "category": "State Security",
      "wing": "CTW / Cyber Crime Wing",
      "punishment": "Imprisonment up to 10 years, and fine",
      "fiaNexus": "Subversion targeting Pakistan's constitutional existence and territorial integrity."
    },
    {
      "sec": "124",
      "title": "Assaulting President, Governor, etc., with intent to compel or restrain exercise of lawful power",
      "group": "State Offences",
      "category": "State Security",
      "wing": "CTW / Special Investigation",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Offences against the constitutional head of the Federation."
    },
    {
      "sec": "124-A",
      "title": "Sedition (Exciting disaffection against Federal or Provincial Government)",
      "group": "State Offences",
      "category": "State Security",
      "wing": "CTW / Cyber Crime Wing",
      "punishment": "Imprisonment for life, or up to 3 years, and fine",
      "fiaNexus": "Inciting hatred or contempt against the lawfully established Government."
    },
    {
      "sec": "161",
      "title": "Public servant taking gratification other than legal remuneration in respect of an official act",
      "group": "Public Servant Corruption",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Federal Government employees, ministries, departments, autonomous corporations."
    },
    {
      "sec": "162",
      "title": "Taking gratification, in order, by corrupt or illegal means, to influence public servant",
      "group": "Public Servant Corruption",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Middlemen/touts claiming influence over federal officials."
    },
    {
      "sec": "163",
      "title": "Taking gratification, for exercise of personal influence with public servant",
      "group": "Public Servant Corruption",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Simple imprisonment up to 1 year, or fine, or both",
      "fiaNexus": "Influence peddling in federal offices and public appointments."
    },
    {
      "sec": "164",
      "title": "Abetment by public servant of offences defined in section 162 or 163",
      "group": "Public Servant Corruption",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Federal officials colluding with private touts and agents."
    },
    {
      "sec": "165",
      "title": "Public servant obtaining valuable thing, without consideration, from person concerned in proceeding",
      "group": "Public Servant Corruption",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Federal officers accepting expensive gifts, vehicles, or property from contractors."
    },
    {
      "sec": "165-A",
      "title": "Punishment for abetment of offences defined in section 161 or 165",
      "group": "Public Servant Corruption",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Same as section 161 or 165 (up to 3 years)",
      "fiaNexus": "The bribe-giver offering bribes to federal officers."
    },
    {
      "sec": "166",
      "title": "Public servant disobeying law, with intent to cause injury to any person",
      "group": "Public Servant Misconduct",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Simple imprisonment up to 1 year, or fine, or both",
      "fiaNexus": "Federal public servant willfully flouting statutory rules to harm a citizen."
    },
    {
      "sec": "168",
      "title": "Public servant unlawfully engaging in trade",
      "group": "Public Servant Misconduct",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Simple imprisonment up to 1 year, or fine, or both",
      "fiaNexus": "Federal officers secretly running commercial businesses in conflict with service rules."
    },
    {
      "sec": "169",
      "title": "Public servant unlawfully buying or bidding for property",
      "group": "Public Servant Misconduct",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Simple imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Federal officers bidding for government auction property in their own department."
    },
    {
      "sec": "175",
      "title": "Omission to produce document to public servant by person legally bound to produce it",
      "group": "Public Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Simple imprisonment up to 1 month, or fine up to Rs. 500, or both",
      "fiaNexus": "Refusing to provide summoned records to an FIA investigating officer."
    },
    {
      "sec": "182",
      "title": "False information with intent to cause public servant to use lawful power to injury of another",
      "group": "Public Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 6 months, or fine up to Rs. 1,000, or both",
      "fiaNexus": "Filing frivolous, fraudulent complaints with the FIA."
    },
    {
      "sec": "183",
      "title": "Resistance to taking of property by lawful authority of a public servant",
      "group": "Public Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 6 months, or fine up to Rs. 1,000, or both",
      "fiaNexus": "Resisting FIA seizure or search under Section 5(1) FIA Act."
    },
    {
      "sec": "186",
      "title": "Obstructing public servant in discharge of public functions",
      "group": "Public Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 3 months, or fine up to Rs. 500, or both",
      "fiaNexus": "Physically blocking FIA raiding teams."
    },
    {
      "sec": "187",
      "title": "Omission to assist public servant when bound by law to give assistance",
      "group": "Public Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Simple imprisonment up to 1 month, or fine up to Rs. 200, or both",
      "fiaNexus": "Bank or agency officers failing to assist FIA inquiries when mandated."
    },
    {
      "sec": "188",
      "title": "Disobedience to order duly promulgated by public servant",
      "group": "Public Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Simple imprisonment up to 1 month, or fine up to Rs. 200, or both",
      "fiaNexus": "Defying lawful freezing or appearance orders."
    },
    {
      "sec": "189",
      "title": "Threat of injury to public servant",
      "group": "Public Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Threatening FIA officers, investigators, or public prosecutors."
    },
    {
      "sec": "201",
      "title": "Causing disappearance of evidence of offence, or giving false information to screen offender",
      "group": "Obstruction of Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 7 years (if capital case) or 3 years",
      "fiaNexus": "Deleting digital servers, destroying ledgers, or hiding corruption files."
    },
    {
      "sec": "216",
      "title": "Harbouring offender who has escaped from custody or whose apprehension has been ordered",
      "group": "Obstruction of Justice",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 7 years (if capital) or up to 3 years",
      "fiaNexus": "Sheltering proclaimed offenders wanted by the FIA."
    },
    {
      "sec": "217",
      "title": "Public servant disobeying direction of law with intent to save person from punishment",
      "group": "Obstruction of Justice",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Federal investigators or officials intentionally sabotaging an inquiry."
    },
    {
      "sec": "218",
      "title": "Public servant framing incorrect record or writing with intent to save person from punishment",
      "group": "Obstruction of Justice",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Tampering with official files, inquiry reports, or forensic evidence."
    },
    {
      "sec": "223",
      "title": "Escape from confinement or custody negligently suffered by public servant",
      "group": "Custody Offences",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Simple imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Negligence leading to the escape of an FIA detainee."
    },
    {
      "sec": "224",
      "title": "Resistance or obstruction by a person to his lawful apprehension",
      "group": "Custody Offences",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Suspect forcibly resisting arrest by an FIA officer."
    },
    {
      "sec": "225",
      "title": "Resistance or obstruction to lawful apprehension of another person",
      "group": "Custody Offences",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 2 years (up to life if accused faces death)",
      "fiaNexus": "Crowd or armed guards preventing FIA from arresting a suspect."
    },
    {
      "sec": "225-A",
      "title": "Omission of apprehension, or sufferance of escape, on part of public servant in cases not provided for",
      "group": "Custody Offences",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Deliberate connivance by federal law enforcement."
    },
    {
      "sec": "245",
      "title": "Fraudulently or dishonestly diminishing weight or altering composition of coin",
      "group": "Coin & Currency",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Mutilating or diminishing state currency."
    },
    {
      "sec": "255",
      "title": "Counterfeiting Government stamp",
      "group": "Govt Stamps",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment for life, or up to 10 years, and fine",
      "fiaNexus": "Forging official judicial/revenue stamps, passport visa stamps, customs seals."
    },
    {
      "sec": "256",
      "title": "Having possession of instrument or material for counterfeiting Government stamp",
      "group": "Govt Stamps",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Recovering printing dies or printing machinery used for fake stamps."
    },
    {
      "sec": "257",
      "title": "Making or selling instrument for counterfeiting Government stamp",
      "group": "Govt Stamps",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Commercial manufacturing of counterfeit government stamp machines."
    },
    {
      "sec": "258",
      "title": "Sale of counterfeit Government stamp",
      "group": "Govt Stamps",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 5 years, and fine",
      "fiaNexus": "Selling forged judicial papers, court fee stamps, or visa stickers."
    },
    {
      "sec": "259",
      "title": "Having possession of counterfeit Government stamp",
      "group": "Govt Stamps",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, or fine, or both",
      "fiaNexus": "Possessing large quantities of fake federal revenue or postal stamps."
    },
    {
      "sec": "260",
      "title": "Using as genuine a Government stamp known to be counterfeit",
      "group": "Govt Stamps",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, or fine, or both",
      "fiaNexus": "Affixing fake stamps on property registry, passport, or customs documents."
    },
    {
      "sec": "261",
      "title": "Effacing writing from substance bearing Government stamp, or removing from document a stamp used for it",
      "group": "Govt Stamps",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Washing and reusing cancelled federal stamps."
    },
    {
      "sec": "263",
      "title": "Erasure of mark denoting that stamp has been used",
      "group": "Govt Stamps",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Erasing cancellation ink to defraud the Federal Post or Treasury."
    },
    {
      "sec": "295-A",
      "title": "Deliberate and malicious acts intended to outrage religious feelings of any class",
      "group": "Religious Harmony",
      "category": "Cyber / Public Order",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Imprisonment up to 10 years, and fine",
      "fiaNexus": "Online dissemination of blasphemous or sectarian hate speech."
    },
    {
      "sec": "295-B",
      "title": "Defiling, etc., of Holy Quran",
      "group": "Religious Harmony",
      "category": "Cyber / Public Order",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Imprisonment for life",
      "fiaNexus": "Digital desecration or online blasphemous content targeting the Holy Quran."
    },
    {
      "sec": "295-C",
      "title": "Use of derogatory remarks, etc., in respect of the Holy Prophet",
      "group": "Religious Harmony",
      "category": "Cyber / Public Order",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Death, and fine",
      "fiaNexus": "Investigated by FIA CCW when committed across social media platforms or international internet networks."
    },
    {
      "sec": "298",
      "title": "Uttering words, etc., with deliberate intent to wound religious feelings",
      "group": "Religious Harmony",
      "category": "Cyber / Public Order",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Imprisonment up to 1 year, or fine, or both",
      "fiaNexus": "Cyber hate speech and trolling targeting religious sentiments."
    },
    {
      "sec": "298-A",
      "title": "Use of derogatory remarks, etc., in respect of holy personages",
      "group": "Religious Harmony",
      "category": "Cyber / Public Order",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Online defamation and slander directed at Ahle Bait, Sahaba, and religious personages."
    },
    {
      "sec": "300",
      "title": "Qatl-e-Amd (Definition of Intentional Murder)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "CTW / Anti-Corruption",
      "punishment": "Definition section",
      "fiaNexus": "Murder of federal public servants, diplomats, or cases entrusted by the Federal Government."
    },
    {
      "sec": "301",
      "title": "Causing death of person other than person whose death was intended",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "CTW / Special Crimes",
      "punishment": "Governed by Section 302",
      "fiaNexus": "Transferred federal assassination cases."
    },
    {
      "sec": "302",
      "title": "Punishment of Qatl-e-Amd (Murder)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "CTW / Special Crimes",
      "punishment": "Death as Qisas, or Death/Life as Tazir, or up to 25 years under 302(c)",
      "fiaNexus": "Federal high-profile assassinations (e.g. Benazir Bhutto murder case investigated by FIA JIT)."
    },
    {
      "sec": "324",
      "title": "Attempt to commit Qatl-e-Amd (Attempted Murder)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "CTW / Special Crimes",
      "punishment": "Imprisonment up to 10 years (up to 25 years if hurt is caused)",
      "fiaNexus": "Armed assassination attempts against federal ministers, judges, or senior public officers."
    },
    {
      "sec": "332",
      "title": "Hurts (Definition of physical injury)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Classification of hurt",
      "fiaNexus": "Physical attacks on federal officials on duty."
    },
    {
      "sec": "333",
      "title": "Itlaf-i-udw (Dismemberment or loss of limb)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Qisas or Arsh and imprisonment up to 10 years",
      "fiaNexus": "Grievous injury inflicted on federal officers."
    },
    {
      "sec": "334",
      "title": "Punishment for Itlaf-i-udw",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Qisas or Arsh and imprisonment up to 10 years",
      "fiaNexus": "Armed resistance causing grievous bodily harm to federal agents."
    },
    {
      "sec": "335",
      "title": "Itlaf-i-salahiyyat-i-udw (Loss of capacity of an organ)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Qisas or Arsh and up to 10 years",
      "fiaNexus": "Permanent impairment of federal staff on duty."
    },
    {
      "sec": "336",
      "title": "Punishment for Itlaf-i-salahiyyat-i-udw",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Qisas or Arsh and up to 10 years",
      "fiaNexus": "Enforcing penal provisions in federal security incidents."
    },
    {
      "sec": "337",
      "title": "Shajjah (Head and facial injuries)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Daman/Diyat and imprisonment according to degree",
      "fiaNexus": "Violent clashes during federal raids and seizures."
    },
    {
      "sec": "337-A",
      "title": "Punishment of Shajjah (Shajjah-i-Khafifah to Jaifah)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Ranging from fine to 14 years imprisonment",
      "fiaNexus": "Injuries caused to federal immigration or customs officers."
    },
    {
      "sec": "337-B",
      "title": "Jurh (Body wound)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Categorization into Jaifah and Ghayr-Jaifah",
      "fiaNexus": "Penal code injury matching."
    },
    {
      "sec": "337-C",
      "title": "Jaifah (Wound penetrating into body cavity)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Arsh (1/3rd of Diyat) and up to 10 years",
      "fiaNexus": "Gunshot wounds sustained during FIA anti-human trafficking operations."
    },
    {
      "sec": "337-D",
      "title": "Punishment for Jaifah",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Arsh (one-third of Diyat) and imprisonment up to 10 years",
      "fiaNexus": "Severe operational clashes."
    },
    {
      "sec": "337-E",
      "title": "Ghayr-Jaifah (Non-penetrating wounds: Damiyah to Hashimah)",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Daman and imprisonment up to 7 years",
      "fiaNexus": "Injuries sustained by state witnesses."
    },
    {
      "sec": "337-F",
      "title": "Punishment of Ghayr-Jaifah",
      "group": "Bodily Offences",
      "category": "Special Penal",
      "wing": "Special Crimes",
      "punishment": "Daman and imprisonment from 1 to 7 years",
      "fiaNexus": "Assaults during federal raids."
    },
    {
      "sec": "342",
      "title": "Punishment for wrongful confinement",
      "group": "Confinement",
      "category": "Administration",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 1 year, or fine up to Rs. 1,000, or both",
      "fiaNexus": "Illegal detention by federal officials or private torture cells."
    },
    {
      "sec": "348",
      "title": "Wrongful confinement to extort confession, or compel restoration of property",
      "group": "Confinement",
      "category": "Anti-Corruption",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment up to 3 years, and fine",
      "fiaNexus": "Custodial torture by federal investigators or officials."
    },
    {
      "sec": "353",
      "title": "Assault or criminal force to deter public servant from discharge of his duty",
      "group": "Public Servant Protection",
      "category": "Administration",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Violent resistance against FIA raiding teams and checkpoint staff."
    },
    {
      "sec": "365-A",
      "title": "Kidnapping for abduction for extorting property, ransom, etc.",
      "group": "Kidnapping",
      "category": "Counter-Terrorism",
      "wing": "Counter Terrorism Wing (CTW)",
      "punishment": "Death, or imprisonment for life, and forfeiture of property",
      "fiaNexus": "Trans-provincial and transnational kidnapping syndicates."
    },
    {
      "sec": "366-B",
      "title": "Importation of girl from foreign country",
      "group": "Human Trafficking",
      "category": "Human Trafficking",
      "wing": "Anti-Human Trafficking (AHTD)",
      "punishment": "Imprisonment up to 10 years, and fine",
      "fiaNexus": "Cross-border sex trafficking of foreign women into Pakistan."
    },
    {
      "sec": "383",
      "title": "Extortion (Definition)",
      "group": "Extortion",
      "category": "Economic",
      "wing": "Economic / CCW",
      "punishment": "Defined for application in scheduled offences",
      "fiaNexus": "Digital extortion, blackmail, or coercive collection of money."
    },
    {
      "sec": "402-A",
      "title": "Hijacking (Definition)",
      "group": "Aviation Security",
      "category": "Counter-Terrorism",
      "wing": "Counter Terrorism Wing (CTW)",
      "punishment": "Definition of seizing control of aircraft",
      "fiaNexus": "Civil aviation security and aircraft piracy."
    },
    {
      "sec": "402-B",
      "title": "Punishment for Hijacking",
      "group": "Aviation Security",
      "category": "Counter-Terrorism",
      "wing": "Counter Terrorism Wing (CTW)",
      "punishment": "Death, or imprisonment for life, and forfeiture of all property",
      "fiaNexus": "Investigated by FIA at all federal airports."
    },
    {
      "sec": "402-C",
      "title": "Punishment for harbouring hijackers",
      "group": "Aviation Security",
      "category": "Counter-Terrorism",
      "wing": "Counter Terrorism Wing (CTW)",
      "punishment": "Imprisonment for life, and fine, and forfeiture of property",
      "fiaNexus": "Sheltering aerial hijackers."
    },
    {
      "sec": "403",
      "title": "Dishonest misappropriation of property",
      "group": "Property Crimes",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Misappropriating federal property, treasury notes, or bank assets."
    },
    {
      "sec": "404",
      "title": "Dishonest misappropriation of property possessed by deceased person at the time of his death",
      "group": "Property Crimes",
      "category": "Economic",
      "wing": "Economic / ACW",
      "punishment": "Imprisonment up to 3 years, and fine (up to 7 years if clerk/servant)",
      "fiaNexus": "Siphoning pension funds or assets of deceased federal pensioners."
    },
    {
      "sec": "406",
      "title": "Punishment for criminal breach of trust",
      "group": "Breach of Trust",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Misappropriation of entrusted commercial/federal properties."
    },
    {
      "sec": "407",
      "title": "Criminal breach of trust by carrier, wharfinger or warehouse-keeper",
      "group": "Breach of Trust",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Theft/diversion of imported goods at dry ports, sea ports, or Pakistan Railways."
    },
    {
      "sec": "408",
      "title": "Criminal breach of trust by clerk or servant",
      "group": "Breach of Trust",
      "category": "Economic",
      "wing": "Economic / Anti-Corruption",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Embezzlement by bank tellers, treasury clerks, or autonomous body accountants."
    },
    {
      "sec": "409",
      "title": "Criminal breach of trust by public servant, or by banker, merchant or agent",
      "group": "Breach of Trust",
      "category": "Anti-Corruption / Banking",
      "wing": "Anti-Corruption Wing (ACW)",
      "punishment": "Imprisonment for life, or up to 10 years, and fine",
      "fiaNexus": "HIGH-VOLUME FIA PROVISION: Embezzlement by federal officers, bank managers, and state enterprise executives."
    },
    {
      "sec": "411",
      "title": "Dishonestly receiving stolen property",
      "group": "Stolen Property",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Receiving stolen government vehicles, railway tracks, or looted bank funds."
    },
    {
      "sec": "418",
      "title": "Cheating with knowledge that wrongful loss may ensue to person whose interest offender is bound to protect",
      "group": "Cheating & Fraud",
      "category": "Economic",
      "wing": "Economic / ACW",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Fiduciary fraud committed against federal trusts and autonomous funds."
    },
    {
      "sec": "419",
      "title": "Punishment for cheating by personation",
      "group": "Cheating & Fraud",
      "category": "Economic / Cyber",
      "wing": "CCW / Economic",
      "punishment": "Imprisonment up to 7 years, or fine, or both",
      "fiaNexus": "Impersonating an FIA officer, federal minister, or high official."
    },
    {
      "sec": "420",
      "title": "Cheating and dishonestly inducing delivery of property",
      "group": "Cheating & Fraud",
      "category": "Economic",
      "wing": "Economic / Cyber / AHTD",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "MASSIVE FIA STATUTE: Online investment scams, fake visa rackets, government procurement frauds, and bogus loan schemes."
    },
    {
      "sec": "435",
      "title": "Mischief by fire or explosive substance with intent to cause damage to amount of one hundred rupees",
      "group": "Mischief & Arson",
      "category": "State Security",
      "wing": "CTW / Special Crimes",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Burning federal property, railway assets, or post offices."
    },
    {
      "sec": "436",
      "title": "Mischief by fire or explosive substance with intent to destroy house, etc.",
      "group": "Mischief & Arson",
      "category": "State Security",
      "wing": "CTW / Special Crimes",
      "punishment": "Imprisonment for life, or up to 10 years, and fine",
      "fiaNexus": "Arson attacks targeting federal ministries, courts, or strategic installations."
    },
    {
      "sec": "440",
      "title": "Mischief committed after preparation made for causing death or hurt",
      "group": "Mischief & Arson",
      "category": "State Security",
      "wing": "CTW / Special Crimes",
      "punishment": "Imprisonment up to 5 years, and fine",
      "fiaNexus": "Organized sabotage of federal infrastructure."
    },
    {
      "sec": "462A",
      "title": "Gas Theft: Definitions of transmission and distribution lines",
      "group": "Gas Energy Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Statutory definitions",
      "fiaNexus": "Gas utility theft across Sui Northern (SNGPL) and Sui Southern (SSGCL) networks."
    },
    {
      "sec": "462B",
      "title": "Tampering with gas transmission line",
      "group": "Gas Energy Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Rigorous imprisonment up to 14 years and fine up to Rs. 10,000,000",
      "fiaNexus": "Major industrial taps into high-pressure national gas pipelines."
    },
    {
      "sec": "462C",
      "title": "Tampering with gas distribution line",
      "group": "Gas Energy Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Rigorous imprisonment up to 10 years and fine up to Rs. 3,000,000",
      "fiaNexus": "Commercial and CNG station underground gas line bypassing."
    },
    {
      "sec": "462D",
      "title": "Tampering with gas meter by domestic consumer",
      "group": "Gas Energy Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 6 months, or fine up to Rs. 100,000, or both",
      "fiaNexus": "Domestic reversing of gas meter counters."
    },
    {
      "sec": "462E",
      "title": "Tampering with gas meter by person other than domestic consumer (Industrial/Commercial)",
      "group": "Gas Energy Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 5 years, or fine up to Rs. 5,000,000, or both",
      "fiaNexus": "Industrial boiler and ceramic factory meter tampering."
    },
    {
      "sec": "462F",
      "title": "Damaging or destroying the transmission or distribution line",
      "group": "Gas Energy Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 14 years and fine",
      "fiaNexus": "Vandalism and physical destruction of national gas pipelines."
    },
    {
      "sec": "462H",
      "title": "Electricity Theft: Definitions of transmission and distribution systems",
      "group": "Electricity Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Statutory definitions",
      "fiaNexus": "WAPDA, PEPCO, and federal DISCO electricity theft."
    },
    {
      "sec": "462I",
      "title": "Tampering with transmission line of electricity",
      "group": "Electricity Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Rigorous imprisonment up to 7 years and fine up to Rs. 3,000,000",
      "fiaNexus": "Tapping high-voltage national grid electricity lines."
    },
    {
      "sec": "462J",
      "title": "Tampering with distribution lines of electricity",
      "group": "Electricity Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Rigorous imprisonment up to 3 years and fine up to Rs. 1,000,000",
      "fiaNexus": "Illegal industrial hook lines (Kunda) from transformers."
    },
    {
      "sec": "462K",
      "title": "Tampering with electricity meter (Industrial/Commercial)",
      "group": "Electricity Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 3 years and fine up to Rs. 500,000",
      "fiaNexus": "Steel mill and commercial ice factory meter slowing devices."
    },
    {
      "sec": "462L",
      "title": "Tampering with electricity meter (Domestic)",
      "group": "Electricity Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 2 years, or fine up to Rs. 100,000",
      "fiaNexus": "Domestic electronic meter tampering."
    },
    {
      "sec": "462M",
      "title": "Aiding and abetting energy theft",
      "group": "Electricity Theft",
      "category": "Energy Theft",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Same as main offence",
      "fiaNexus": "WAPDA / DISCO linemen and SDOs colluding with power thieves."
    },
    {
      "sec": "466",
      "title": "Forgery of record of Court or of public register, etc.",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "Anti-Corruption / ECW",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Forging official federal revenue records, birth registers, or court decrees."
    },
    {
      "sec": "467",
      "title": "Forgery of valuable security, will, etc.",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment for life, or up to 10 years, and fine",
      "fiaNexus": "Forging bank guarantees, treasury bills, prize bonds, letters of credit."
    },
    {
      "sec": "468",
      "title": "Forgery for purpose of cheating",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "All Wings",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Forging educational degrees for federal recruitment, fake appointment letters."
    },
    {
      "sec": "471",
      "title": "Using as genuine a forged document",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "All Wings",
      "punishment": "Punished in the same manner as if forged",
      "fiaNexus": "Presenting fake bank drafts, counterfeit visas, or altered CNICs to federal bodies."
    },
    {
      "sec": "472",
      "title": "Making or possessing counterfeit seal, etc., with intent to commit forgery punishable under section 467",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment for life, or up to 7 years, and fine",
      "fiaNexus": "Fabricating brass seals of Federal Ministries or State Bank."
    },
    {
      "sec": "473",
      "title": "Making or possessing counterfeit seal, etc., with intent to commit forgery punishable otherwise",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Possession of fake embassy stamps and visa embossing dies."
    },
    {
      "sec": "474",
      "title": "Having possession of document described in sec 466 or 467 knowing it to be forged",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment for life, or up to 7 years, and fine",
      "fiaNexus": "Possessing folders of forged federal securities or fake identity cards."
    },
    {
      "sec": "475",
      "title": "Counterfeiting device or mark used for authenticating documents described in sec 467",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment for life, or up to 7 years, and fine",
      "fiaNexus": "Replicating official holograms and watermark rolls."
    },
    {
      "sec": "476",
      "title": "Counterfeiting device or mark used for authenticating documents other than in sec 467",
      "group": "Forgery",
      "category": "White Collar",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Counterfeiting federal inspection stamps and passport security threads."
    },
    {
      "sec": "477-A",
      "title": "Falsification of accounts",
      "group": "Banking Fraud",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, or fine, or both",
      "fiaNexus": "Bank managers or corporation accountants cooking financial books and ledger balances."
    },
    {
      "sec": "489-A",
      "title": "Counterfeiting currency-notes or bank-notes",
      "group": "Currency Counterfeiting",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment for life, or up to 10 years, and fine",
      "fiaNexus": "Operating illegal printing presses printing counterfeit Rs. 5000 / Rs. 1000 notes."
    },
    {
      "sec": "489-B",
      "title": "Using as genuine, forged or counterfeit currency-notes or bank-notes",
      "group": "Currency Counterfeiting",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment for life, or up to 10 years, and fine",
      "fiaNexus": "Injecting counterfeit banknotes into commercial banks or forex markets."
    },
    {
      "sec": "489-C",
      "title": "Possession of forged or counterfeit currency-notes or bank-notes",
      "group": "Currency Counterfeiting",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 7 years, or fine, or both",
      "fiaNexus": "Recovering stacks of fake banknotes from money changers or couriers."
    },
    {
      "sec": "489-D",
      "title": "Making or possessing instruments or materials for counterfeiting currency-notes",
      "group": "Currency Counterfeiting",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment for life, or up to 10 years, and fine",
      "fiaNexus": "Seizing specialized currency paper, magnetic ink, and printing blocks."
    },
    {
      "sec": "489-E",
      "title": "Making or using documents resembling currency-notes",
      "group": "Currency Counterfeiting",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Fine up to Rs. 100",
      "fiaNexus": "Deceptive commercial vouchers resembling state legal tender."
    },
    {
      "sec": "489-F",
      "title": "Dishonestly issuing a cheque for repayment of loan or fulfilment of an obligation",
      "group": "Financial Crimes",
      "category": "Economic",
      "wing": "Economic Crime Wing (ECW)",
      "punishment": "Imprisonment up to 3 years, or fine, or both",
      "fiaNexus": "Dishonoured cheques issued in connection with federal loans, banking dues, or transactions investigated by FIA."
    },
    {
      "sec": "499",
      "title": "Defamation (Definition)",
      "group": "Defamation",
      "category": "Cyber / General",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Defined for criminal liability",
      "fiaNexus": "Online defamation and slander campaigns investigated under PECA/PPC."
    },
    {
      "sec": "500",
      "title": "Punishment for defamation",
      "group": "Defamation",
      "category": "Cyber / General",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Simple imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Defamation committed through digital communication tools."
    },
    {
      "sec": "501",
      "title": "Printing or engraving matter known to be defamatory",
      "group": "Defamation",
      "category": "Cyber / General",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Simple imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Publishing defamatory digital brochures and online articles."
    },
    {
      "sec": "502",
      "title": "Sale of printed or engraved substance containing defamatory matter",
      "group": "Defamation",
      "category": "Cyber / General",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Simple imprisonment up to 2 years, or fine, or both",
      "fiaNexus": "Commercial marketing of libellous publications."
    },
    {
      "sec": "505",
      "title": "Statements conducing to public mischief",
      "group": "Public Order",
      "category": "Cyber / CTW",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Imprisonment up to 7 years, and fine",
      "fiaNexus": "Spreading fake news, military mutiny rumors, or digital panic online."
    },
    {
      "sec": "506",
      "title": "Punishment for criminal intimidation",
      "group": "Intimidation",
      "category": "Cyber / General",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Imprisonment up to 2 years, or fine, or both (up to 7 years if death threat)",
      "fiaNexus": "Threatening public officers or online extortion targets."
    },
    {
      "sec": "507",
      "title": "Criminal intimidation by an anonymous communication",
      "group": "Intimidation",
      "category": "Cyber / General",
      "wing": "Cyber Crime Wing (CCW)",
      "punishment": "Imprisonment up to 2 years (in addition to penalty under 506)",
      "fiaNexus": "Anonymous death threats sent via VoIP, fake social accounts, or encrypted dark web."
    }
  ],
  "fiaWings": [
    {
      "id": "wing-acw",
      "name": "Anti-Corruption Wing (ACW)",
      "urduName": "اینٹی کرپشن ونگ",
      "icon": "fa-handshake-slash",
      "headRank": "Director (BS-20) / Additional DG",
      "mandate": "Inquires into and investigates allegations of corruption, bribery, criminal misconduct, and embezzlement against employees of Federal Ministries, Attached Departments, Autonomous Bodies, and State-Owned Corporations.",
      "statutesEnforced": [
        "Prevention of Corruption Act, 1947 (PCA)",
        "Sections 161 to 169 PPC (Bribery & Gratification)",
        "Section 409 PPC (Criminal Breach of Trust by Public Servant)",
        "Section 420 PPC (Cheating)",
        "AMLA 2010 (Corruption Proceeds)"
      ],
      "sampleTargetCases": "Bribery in Passport Office, embezzlement in Pakistan Railways, procurement fraud in Federal Ministries, fake hiring in state enterprises."
    },
    {
      "id": "wing-ccw",
      "name": "Cyber Crime Wing (CCW)",
      "urduName": "سائبر کرائم ونگ",
      "icon": "fa-network-wired",
      "headRank": "Additional Director General (Cyber Crime)",
      "mandate": "Sole federal agency investigating cyber offenses across Pakistan: online banking fraud, hacking, electronic forgery, cyber terrorism, digital extortion, child exploitation, and cyber stalking.",
      "statutesEnforced": [
        "Prevention of Electronic Crimes Act, 2016 (PECA)",
        "Electronic Transmission Ordinance, 2002 (ETO)",
        "Telecom Re-organization Act, 1996 (Illegal exchanges / Grey traffic)",
        "Sections 419, 420, 468, 471, 500 PPC"
      ],
      "sampleTargetCases": "ATM skimming gangs, digital blackmailing via intimate pictures, server breaches of commercial banks, fake lottery WhatsApp scams."
    },
    {
      "id": "wing-ahtd",
      "name": "Anti-Human Trafficking & Smuggling Directorate (AHTD)",
      "urduName": "انسداد انسانی اسمگلنگ و اسمگلنگ ڈائریکٹوریٹ",
      "icon": "fa-person-walking-luggage",
      "headRank": "Director (AHTD) / Additional DG",
      "mandate": "Combatting transnational human trafficking, migrant smuggling rings, fake visa consultants, overseas employment scams, and forged travel documents.",
      "statutesEnforced": [
        "Emigration Ordinance, 1979 (Sections 17, 18, 19)",
        "Prevention of Smuggling of Migrants Act, 2018 (PSMA)",
        "Prevention of Trafficking in Persons Act, 2018 (PTPA)",
        "Passport Act, 1974 (Section 6)"
      ],
      "sampleTargetCases": "Unlicensed agents sending youth to Europe via Greece boat tragedy route, forged Schengen visas, fake Dubai work permits."
    },
    {
      "id": "wing-ecw",
      "name": "Economic Crime Wing (ECW)",
      "urduName": "اکنامک کرائم ونگ",
      "icon": "fa-sack-dollar",
      "headRank": "Director (Economic Crime)",
      "mandate": "Tackling white-collar economic offences: illegal foreign exchange trading (Hawala/Hundi), trade-based money laundering, commercial bank frauds, copyright piracy, and energy theft (gas/electricity).",
      "statutesEnforced": [
        "Anti-Money Laundering Act, 2010 (AMLA)",
        "Foreign Exchange Regulation Act, 1947 (FERA)",
        "Banking Companies Ordinance, 1962",
        "Copyright Ordinance, 1962",
        "Sections 462A to 462M PPC (Gas Theft)"
      ],
      "sampleTargetCases": "Unlicensed Hawala operators funneling millions overseas, parallel banking rackets, major industrial gas tampering under OGRA law."
    },
    {
      "id": "wing-ctw",
      "name": "Counter Terrorism Wing (CTW)",
      "urduName": "کاؤنٹر ٹیریرزم ونگ",
      "icon": "fa-shield-halved",
      "headRank": "Director (CTW)",
      "mandate": "Investigates terrorism financing and high-profile terrorist offences with inter-provincial scope, transnational nexus, or cases specially entrusted by the Federal Government.",
      "statutesEnforced": [
        "Anti-Terrorism Act, 1997 (Scheduled cases)",
        "Explosive Substances Act, 1908",
        "High Treason Act, 1973",
        "Prevention of Anti-National Activities Act, 1974"
      ],
      "sampleTargetCases": "Terrorist financing conduits, cross-border militant funding networks, state espionage under Official Secrets Act."
    },
    {
      "id": "wing-immigration",
      "name": "Immigration Wing",
      "urduName": "امیگریشن ونگ",
      "icon": "fa-passport",
      "headRank": "Director (Immigration)",
      "mandate": "Controls and manages all official international border departure and entry points: international airports, sea ports (Karachi, Gwadar), and land borders (Torkham, Chaman, Wagah, Taftan). Enforces Exit Control List (ECL) and Blacklists.",
      "statutesEnforced": [
        "Passport Act, 1974",
        "Foreigners Act, 1946",
        "Exit from Pakistan (Control) Ordinance, 1981 (ECL)",
        "Emigration Ordinance, 1979"
      ],
      "sampleTargetCases": "Offloading passengers on fake visas, arrest of proclaimed offenders attempting departure, enforcement of ECL notifications."
    },
    {
      "id": "wing-ncb",
      "name": "National Central Bureau (NCB - Interpol Pakistan)",
      "urduName": "انٹرپول پاکستان",
      "icon": "fa-globe",
      "headRank": "Director (NCB / Interpol)",
      "mandate": "Coordinates international police cooperation, issues Red Notices for fugitive Pakistani criminals abroad, and processes cross-border extradition requests with member countries worldwide.",
      "statutesEnforced": [
        "Extradition Act, 1972",
        "FIA Act 1974 (Extraterritorial liaison)",
        "Interpol Constitution & General Assembly Regulations"
      ],
      "sampleTargetCases": "Extradition of fugitive murderers and banking fraud suspects hiding in UAE, UK, or Europe via Interpol Red Warrants."
    }
  ],
  "investigationExplainers": [
    {
      "topicId": "exp-bribery",
      "title": "Bribery & Illegal Gratification (PPC 161, 165 & PCA Sec 5)",
      "sectionsCovered": "PPC Sections 161, 165, 165-A & Section 5 Prevention of Corruption Act 1947",
      "wing": "Anti-Corruption Wing (ACW)",
      "nexus": "Applies exclusively to Public Servants (defined in Sec 21 PPC & Sec 2(e) FIA Act) belonging to Federal Ministries, attached departments, autonomous bodies (NADRA, CDA, WAPDA, OGDCL, SNGPL, Railways, Post Office) and private bribe-givers.",
      "actusReus": "Demand, negotiation, and physical or electronic acceptance of any money, gift, or pecuniary favor other than legal government remuneration.",
      "mensRea": "Corrupt intention to grant official favor, overlook illegalities, or expedite official acts.",
      "investigationSteps": [
        {
          "step": "Step 1: Written Complaint & Preliminary Inquiry",
          "detail": "Complainant submits written application supported by phone call recordings, WhatsApp chats, or demand memos. Deputy Director ACW authorizes registration of Inquiry."
        },
        {
          "step": "Step 2: Magistrate Deputation for Trap Raid",
          "detail": "Investigator moves application to Senior Civil Judge / Judicial Magistrate 1st Class to supervise a 'Trap Raid' under Section 5-A PCA 1947."
        },
        {
          "step": "Step 3: Chemical Treatment of Marked Notes",
          "detail": "Judicial Magistrate notes serial numbers of currency notes, coats them with Phenolphthalein powder, and hands them to complainant with instructions to hand over upon demand."
        },
        {
          "step": "Step 4: Red-Handed Apprehension & Chemical Test",
          "detail": "Upon pre-arranged signal, Magistrate and FIA team raid office. Suspect's hands and pocket lining are washed with Sodium Carbonate solution; turns pink if marked notes were touched. Magistrate drafts formal Recovery Memo on spot."
        },
        {
          "step": "Step 5: FIR Registration & Warrantless Arrest",
          "detail": "FIR registered under Section 161 PPC & Sec 5(2) PCA 1947. Accused arrested under Section 5(3) FIA Act."
        },
        {
          "step": "Step 6: Forensic Voice Matching & Bank Trail",
          "detail": "Audio recordings sent to FIA Digital Forensics Laboratory for Voice Spectrography analysis. Assets investigated for disproportionate wealth under Sec 5(1)(e) PCA."
        }
      ],
      "trialForum": "Special Court (Central) established under the Criminal Law Amendment Act, 1958.",
      "prosecutionTip": "Presumption of guilt applies under Section 4 of PCA 1947 once receipt of marked money is proved by prosecution!"
    },
    {
      "topicId": "exp-peca-fraud",
      "title": "Electronic Financial Fraud & Hacking (PECA Sec 14, 16 & PPC 420)",
      "sectionsCovered": "PECA Sections 3, 5, 13, 14, 16 read with PPC Sections 419, 420",
      "wing": "Cyber Crime Wing (CCW)",
      "nexus": "Offences committed using information systems, internet networks, mobile banking apps, ATM skimmers, or spoofed bank helplines.",
      "actusReus": "Gaining unauthorized access, transmitting phishing links, cloning SIMs, or deceiving citizens into disclosing OTPs/passwords to transfer money.",
      "mensRea": "Dishonest intent to cause wrongful loss to victim and wrongful pecuniary gain to fraudster.",
      "investigationSteps": [
        {
          "step": "Step 1: Complaint Intake via FIA Cyber Crime Portal",
          "detail": "Victim registers complaint with transaction IDs, spoofed phone numbers, and bank account details where funds were transferred."
        },
        {
          "step": "Step 2: Immediate Bank Freezing under Section 5(5) FIA Act",
          "detail": "Investigating Officer issues written freeze order to beneficiary banks to halt withdrawal of stolen funds before accounts are emptied."
        },
        {
          "step": "Step 3: IP Address & Traffic Data Preservation (Sec 29 PECA)",
          "detail": "Formal notice issued to telecom providers and ISPs under Section 29 PECA 2016 to preserve and furnish IP logs, IMEI tracking, and Tower CDRs."
        },
        {
          "step": "Step 4: Digital Forensic Imaging (E01 / DD formats)",
          "detail": "Raiding team seizes mobile phones, laptops, and spoofing devices under Section 30 PECA. Devices placed in Faraday bags. Forensic copy generated with MD5/SHA-256 hash matching."
        },
        {
          "step": "Step 5: BVS Franchise Verification with PTA/NADRA",
          "detail": "If illegal SIMs were used, franchise biometric verification logs (BVS) are retrieved from NADRA to arrest the franchise agent who authorized illegal activation."
        }
      ],
      "trialForum": "Special Court Central (designated under Section 32 PECA 2016).",
      "prosecutionTip": "Always ensure strict chain-of-custody for digital devices; un-hashed digital copies are inadmissible under Section 35 PECA and Article 164 QSO."
    },
    {
      "topicId": "exp-human-trafficking",
      "title": "Human Trafficking & Visa Fraud (Emigration Ord Sec 18, 19 & PSMA 2018)",
      "sectionsCovered": "Emigration Ordinance 1979 Sections 17, 18, 19; PSMA 2018; Passport Act Sec 6",
      "wing": "Anti-Human Trafficking & Smuggling Directorate (AHTD)",
      "nexus": "Operating unauthorized overseas employment agencies, collecting money on false promises of foreign jobs, forging passport visas, or organizing irregular border crossings (Dunking / Boat syndicates).",
      "actusReus": "Fraudulent inducement, receipt of money without OEP license, production of counterfeit visas, or transporting migrants across clandestine borders.",
      "mensRea": "Intent to exploit migrants for financial extortion or knowing that visa/permit is counterfeit.",
      "investigationSteps": [
        {
          "step": "Step 1: Verification with Protectorate of Emigrants",
          "detail": "Investigator verifies whether travel agency holds a valid Overseas Employment Promoter (OEP) license issued by Ministry of Overseas Pakistanis."
        },
        {
          "step": "Step 2: Raid on Agency & Seizure of Travel Documents",
          "detail": "AHTD team raids premises, recovers victims' original passports, fake embassy stamp dies, and cash receipt books."
        },
        {
          "step": "Step 3: Forensic Analysis of Visa Stickers (Passport Act Sec 6)",
          "detail": "Passports sent to FIA Immigration Document Examination Laboratory (IDEL) to verify UV security fibers, hologram authenticity, and ink composition."
        },
        {
          "step": "Step 4: Statements under Section 164 CrPC",
          "detail": "Victims' statements recorded before Judicial Magistrate immediately to prevent witness tampering or coerced compromise."
        },
        {
          "step": "Step 5: Financial Trail & Hawala Tracking",
          "detail": "Investigate accounts of human smugglers under AMLA 2010. Issue Red Notices through Interpol (NCB) for foreign-based handlers."
        }
      ],
      "trialForum": "Special Court of Emigration presided over by District & Sessions Judge (Section 22 Emigration Ordinance).",
      "prosecutionTip": "Section 18 Emigration Ordinance carries 5 to 14 years rigorous imprisonment. Do not allow regular civil compromise; it is an offence against the State!"
    },
    {
      "topicId": "exp-gas-theft",
      "title": "Industrial Energy Theft & Meter Tampering (PPC 462A-462M & OGRA)",
      "sectionsCovered": "PPC Sections 462A to 462F (Gas), 462H to 462M (Electricity), OGRA Ordinance Sec 25-29",
      "wing": "Economic Crime Wing (ECW)",
      "nexus": "Illegal tapping of national gas transmission pipelines, electronic meter tampering by industrial consumers (textile mills, CNG stations, steel rerolling), causing billions in losses to federal exchequer.",
      "actusReus": "Physical drilling of pipeline bypass, electronic counter reversal, tampering with volume corrector (EVC), or bypassing meter valves.",
      "mensRea": "Intentional abstraction of energy without payment.",
      "investigationSteps": [
        {
          "step": "Step 1: Discrepancy Detection & Data Logging",
          "detail": "Utility company (SNGPL/SSGCL/DISCO) detects massive pressure and consumption drop between main transmission node and consumer terminal."
        },
        {
          "step": "Step 2: Surprise Joint Raid with Measurement Engineers",
          "detail": "FIA ECW raiding party inspects site with utility technical team, gas detectors, and ground-penetrating radar."
        },
        {
          "step": "Step 3: Physical Excavation & Video Recording",
          "detail": "Illegal bypass pipe excavated. Entire unearthing process video-recorded as substantive evidence. Disconnected and sealed on spot."
        },
        {
          "step": "Step 4: Seizure of EVC Devices & Tampered Meters",
          "detail": "Electronic Volume Correctors (EVC) and flow computers seized and sent to PCSIR / ISO-certified laboratory for forensic memory dump."
        },
        {
          "step": "Step 5: Calculation of Revenue Loss & Challan",
          "detail": "Engineers calculate stolen gas/power volume over statutory period. Challan submitted to Special Gas Utility Court."
        }
      ],
      "trialForum": "Gas Utility Court (established under Gas (Theft Control and Recovery) Act, 2016).",
      "prosecutionTip": "PPC Section 462B (Transmission line tampering) carries up to 14 years rigorous imprisonment and fine up to Rs. 10 Million!"
    },
    {
      "topicId": "exp-currency-forgery",
      "title": "Counterfeit Currency Rackets (PPC 489-A to 489-E)",
      "sectionsCovered": "PPC Sections 489-A, 489-B, 489-C, 489-D, 489-E",
      "wing": "Economic Crime Wing (ECW)",
      "nexus": "Manufacturing, possessing, or trafficking counterfeit Pakistani legal tender notes (Rs. 5000, 1000, 500) into financial circulation.",
      "actusReus": "Printing fake currency, operating printing presses, or possessing forged notes with knowledge.",
      "mensRea": "Knowledge or reason to believe that currency is counterfeit, with intent to pass off as genuine.",
      "investigationSteps": [
        {
          "step": "Step 1: Source Intelligence & Decoy Buying",
          "detail": "Undercover FIA operative negotiates purchase of fake currency from syndicate at discounted rate (e.g. Rs. 30,000 genuine for Rs. 100,000 fake)."
        },
        {
          "step": "Step 2: Raid on Printing Facility",
          "detail": "Simultaneous raid on hideout. Seizure of offset printing machinery, screen printing frames, ultraviolet inks, and watermark rollers under Sec 489-D."
        },
        {
          "step": "Step 3: State Bank Pakistan Security Printing Corporation (PSPC) Examination",
          "detail": "Seized notes sent to Chief Chemist of Pakistan Security Printing Corporation (PSPC) Karachi to establish non-genuine paper, magnetic strip, and intaglio ink absence."
        },
        {
          "step": "Step 4: Interrogation of Distribution Ring",
          "detail": "Map out the distribution network across bus terminals, cattle markets, and exchange dealers."
        }
      ],
      "trialForum": "Court of Session / Special Court Central.",
      "prosecutionTip": "Possession under 489-C requires proving 'intent to use as genuine'. Under 489-D (possessing machinery), mere possession of dies/plates attracts life imprisonment!"
    }
  ],
  "practicalScenarios": [
    {
      "id": "scen-1",
      "title": "The Bribe Demanded at the Federal Passport Office",
      "facts": "A senior passport processing clerk in Islamabad demanded Rs. 25,000 in cash from a citizen to issue an urgent passport, threatening to reject the application if the bribe was not paid. The citizen lodged a complaint with the FIA.",
      "applicableLaw": "Prevention of Corruption Act, 1947 & Pakistan Penal Code",
      "applicableSections": "Section 5(2) PCA 1947 read with Section 161 PPC (Public servant taking illegal gratification)",
      "responsibleWing": "Anti-Corruption Wing (ACW)",
      "investigationProcedure": "FIA Assistant Director registers an inquiry, obtains permission from a Judicial Magistrate to conduct a Trap Raid with a Magistrate supervising the handover of chemically treated/marked currency notes, catches the clerk red-handed, and registers an FIR."
    },
    {
      "id": "scen-2",
      "title": "The Overseas Work Visa Fraud",
      "facts": "An unlicensed travel agent in Gujranwala collected Rs. 600,000 each from 8 young men, promising legitimate employment visas in Italy. When the youth landed at the airport, immigration authorities detected counterfeit visas.",
      "applicableLaw": "Emigration Ordinance, 1979",
      "applicableSections": "Section 18 (Fraudulently inducing to emigrate) & Section 19 (Receiving money without OEP license) of Emigration Ordinance 1979",
      "responsibleWing": "Anti-Human Trafficking & Smuggling Directorate (AHTD)",
      "investigationProcedure": "AHTD raids the travel agency, seizes fake stamp dies and passports, arrests the promoter under Section 5(3) FIA Act, and files a challan before the Special Court of Emigration."
    },
    {
      "id": "scen-3",
      "title": "Social Media Blackmailing & Image Superimposition",
      "facts": "A university student's ex-fiancé edited her private photographs, superimposed them onto explicit imagery, and threatened to disseminate them to her family unless she paid Rs. 200,000.",
      "applicableLaw": "Prevention of Electronic Crimes Act, 2016 (PECA)",
      "applicableSections": "Section 21 (Non-consensual display of private images / cyber extortion) & Section 24 (Cyber stalking) of PECA 2016",
      "responsibleWing": "Cyber Crime Wing (CCW)",
      "investigationProcedure": "FIA CCW forensic investigators trace the IP address and digital footprint, obtain a warrant under Section 30 PECA, seize the mobile device for digital forensic extraction, and produce the accused before the Special Court Central."
    },
    {
      "id": "scen-4",
      "title": "The Undocumented Hawala Currency Conduit",
      "facts": "A currency exchange dealer in Peshawar received Rs. 35,000,000 in cash from business entities to transfer to Guangzhou, China via unauthorized Hawala channels, evading banking channels and State Bank of Pakistan approval.",
      "applicableLaw": "Foreign Exchange Regulation Act, 1947 & AMLA 2010",
      "applicableSections": "Sections 4 & 5 FERA 1947 read with Section 3 & 4 of Anti-Money Laundering Act 2010",
      "responsibleWing": "Economic Crime Wing (ECW)",
      "investigationProcedure": "ECW conducts a raid with State Bank of Pakistan observers, seizes Hawala ledgers and illicit foreign currency, freezes accounts under Section 5(5) FIA Act, and registers a money laundering case."
    },
    {
      "id": "scen-5",
      "title": "The Unauthorized SIM Activation & Biometric Fraud",
      "facts": "Franchise staff of a telecom operator used scanned thumb impressions of uneducated citizens to activate 300 unregistered SIM cards, which were then sold on the black market for fraudulent banking calls.",
      "applicableLaw": "PECA 2016 & NADRA Ordinance 2002",
      "applicableSections": "Section 16 (Unauthorized use of identity information) & Section 14 (Electronic fraud) of PECA 2016",
      "responsibleWing": "Cyber Crime Wing (CCW)",
      "investigationProcedure": "FIA CCW seizes the biometric verification devices (BVS), tracks IMEI numbers and CDR logs with PTA, arrests the franchise employees, and registers an FIR under PECA Section 16."
    },
    {
      "id": "scen-6",
      "title": "Transnational Migrant Smuggling (The Boat Tragedy Conduit)",
      "facts": "An organized gang operating across Gujrat, Mandi Bahauddin, and Libya charged Rs. 2,500,000 per person to smuggle Pakistani nationals across the Mediterranean Sea on unseaworthy vessels, leading to a fatal capsizing.",
      "applicableLaw": "Prevention of Smuggling of Migrants Act, 2018 (PSMA)",
      "applicableSections": "Sections 3 & 4 of PSMA 2018 (Smuggling of migrants under aggravated circumstances) read with Section 18 Emigration Ordinance 1979",
      "responsibleWing": "Anti-Human Trafficking & Smuggling Directorate (AHTD)",
      "investigationProcedure": "AHTD initiates a national crackdown, coordinates with Interpol (NCB) to track Libyan sub-agents, freezes bank accounts of the main handlers under Section 5(5) FIA Act, and files charges before the Special Court."
    },
    {
      "id": "scen-7",
      "title": "Industrial Gas Pipeline Tampering & Theft",
      "facts": "A large textile manufacturing mill in Faisalabad installed an underground bypass pipeline connecting directly to the high-pressure Sui Northern Gas transmission line, stealing Rs. 40,000,000 worth of natural gas monthly.",
      "applicableLaw": "Pakistan Penal Code & OGRA Ordinance, 2002",
      "applicableSections": "Sections 462A, 462B, 462C PPC (Gas theft from transmission line) read with Sections 25 to 29 of OGRA Ordinance 2002 (Entry 37 of FIA Schedule via SRO 1620(I)/2026)",
      "responsibleWing": "Economic Crime Wing (ECW)",
      "investigationProcedure": "FIA ECW conducts a joint raid with SNGPL measurement engineers, excavates the illegal bypass line, seizes technical logs, arrests the mill owners, and submits a challan to the Special Gas Utility Court."
    },
    {
      "id": "scen-8",
      "title": "Commercial Bank Embezzlement by Branch Manager",
      "facts": "The manager of a state-controlled commercial bank fraudulently created fictitious loan accounts, forged signatures of deceased account holders, and siphoned Rs. 65,000,000 into offshore accounts.",
      "applicableLaw": "Pakistan Penal Code, Banking Companies Ordinance & AMLA 2010",
      "applicableSections": "Section 409 PPC (Criminal breach of trust by public servant/banker), Section 477-A PPC (Falsification of accounts), read with Section 3 & 4 AMLA 2010",
      "responsibleWing": "Anti-Corruption Wing (ACW) / Economic Crime Wing (ECW)",
      "investigationProcedure": "FIA forensic auditors examine core banking system audit trails, obtain bank records, issue lookout notices to the Immigration Wing, arrest the manager, and initiate asset forfeiture under Section 8 AMLA 2010."
    }
  ],
  "quiz": [
    {
      "id": "q-1",
      "question": "Under Section 1(2) of the FIA Act, 1974, to whom does the extraterritorial jurisdiction of the Agency apply?",
      "opts": [
        "Only to citizens residing inside Pakistan",
        "To all citizens of Pakistan and Public Servants, wherever they may be",
        "Only to Federal Government Ministers and Secretaries",
        "Exclusively to foreign diplomats residing in Islamabad"
      ],
      "ans": 1,
      "statute": "Section 1(2), FIA Act 1974",
      "explanation": "Section 1(2) explicitly provides that the Act extends to the whole of Pakistan and also applies to all citizens of Pakistan and Public Servants, wherever they may be.",
      "examTip": "High-frequency FPSC question for FIA AD & Inspector: FIA has global jurisdiction over Pakistani citizens and public servants."
    },
    {
      "id": "q-2",
      "question": "In whom does the superintendence and administration of the FIA vest respectively under Section 4 of the FIA Act, 1974?",
      "opts": [
        "Superintendence in Supreme Court; Administration in Federal Police",
        "Superintendence in Federal Government; Administration in Director General",
        "Superintendence in Ministry of Law; Administration in Prime Minister",
        "Both Superintendence and Administration vest exclusively in the Director General"
      ],
      "ans": 1,
      "statute": "Section 4(1) & (2), FIA Act 1974",
      "explanation": "Section 4(1) states superintendence vests in the Federal Government; Section 4(2) states administration vests in the Director General exercising powers of an IGP under Police Act 1861.",
      "examTip": "Remember: Superintendence = Federal Government; Administration = Director General."
    },
    {
      "id": "q-3",
      "question": "What is the minimum rank of an FIA officer who may exercise the powers of an Officer-in-Charge of a Police Station (SHO) under Section 5(2) of the FIA Act, 1974?",
      "opts": [
        "Assistant Sub-Inspector (ASI)",
        "Sub-Inspector (SI)",
        "Inspector of Police",
        "Assistant Director"
      ],
      "ans": 1,
      "statute": "Section 5(2), FIA Act 1974",
      "explanation": "Under Section 5(2), a member of the Agency not below the rank of a Sub-Inspector may exercise any of the powers of an officer-in-charge of a police station.",
      "examTip": "Statutory threshold: Sub-Inspector is the minimum rank for SHO powers under the FIA Act."
    },
    {
      "id": "q-4",
      "question": "If an accused contravenes a written property freezing/restraining order issued by an FIA investigating officer under Section 5(5), what punishment is prescribed under Section 5(6)?",
      "opts": [
        "Rigorous imprisonment up to 1 year, or fine, or both",
        "Simple imprisonment up to 7 years",
        "Imprisonment up to 3 years and confiscation of assets",
        "Only a fine of Rs. 10,000"
      ],
      "ans": 0,
      "statute": "Section 5(6), FIA Act 1974",
      "explanation": "Section 5(6) specifies: 'Any contravention of an order made under sub-section (5) shall be punishable with rigorous imprisonment for a term which may extend to one year, or with fine, or with both.'",
      "examTip": "Section 5(6) penalizes property disposal: 1 year RI or fine."
    },
    {
      "id": "q-5",
      "question": "Under Section 5-A of the FIA Act (inserted via 2002 Ordinance), which officers are deemed to be Public Prosecutors?",
      "opts": [
        "Director General and Additional Directors General",
        "Assistant Directors (Legal) and Deputy Directors (Law)",
        "All Inspectors of Investigation",
        "Only Advocates appointed by the Federal Law Ministry"
      ],
      "ans": 1,
      "statute": "Section 5-A, FIA Act 1974 (Added through FIA Amendment Ordinance 2002)",
      "explanation": "Section 5-A provides that Assistant Directors (Legal) and Deputy Directors (Law) of the Agency shall be deemed to be Public Prosecutors competent to institute and conduct trial proceedings.",
      "examTip": "Core topic for Assistant Director (Legal) exams: AD Legal and DD Law are deemed Public Prosecutors under Section 5-A."
    },
    {
      "id": "q-6",
      "question": "Who has the statutory power to amend the Schedule of the FIA Act, 1974 by adding, omitting or modifying entries under Section 6?",
      "opts": [
        "Supreme Court of Pakistan",
        "Federal Government by notification in the official Gazette",
        "Director General of FIA with permission of National Assembly",
        "Judicial Commission of Pakistan"
      ],
      "ans": 1,
      "statute": "Section 6, FIA Act 1974",
      "explanation": "Section 6: 'The Federal Government may, by notification in the official Gazette, amend the Schedule so as to add any entry thereto or modify or omit any entry therein.'",
      "examTip": "Schedule amendments are made via SROs issued by the Federal Government."
    },
    {
      "id": "q-7",
      "question": "What is the maximum penalty prescribed for Cyber Terrorism under Section 10 of the Prevention of Electronic Crimes Act, 2016 (PECA)?",
      "opts": [
        "Imprisonment up to 5 years and fine of Rs. 1 Million",
        "Imprisonment up to 14 years, or fine up to Rs. 50 Million, or both",
        "Life imprisonment without parole",
        "Capital punishment (Death sentence)"
      ],
      "ans": 1,
      "statute": "Section 10, Prevention of Electronic Crimes Act (PECA 2016)",
      "explanation": "Section 10 PECA prescribes imprisonment for a term which may extend to 14 years, or with fine which may extend to 50 million rupees, or with both.",
      "examTip": "Highest penalty under PECA: 14 years imprisonment and Rs. 50 million fine for Cyber Terrorism."
    },
    {
      "id": "q-8",
      "question": "Under Section 21 of PECA 2016, which acts are penalised regarding non-consensual display of images?",
      "opts": [
        "Installing unapproved operating system software",
        "Superimposing a photograph, displaying intimate images without consent, or extorting victims with private media",
        "Deleting spam emails from a public server",
        "Forwarding commercial marketing advertisements"
      ],
      "ans": 1,
      "statute": "Section 21, Prevention of Electronic Crimes Act (PECA 2016)",
      "explanation": "Section 21 deals with cyber harassment, non-consensual sexual images, and photo-morphing, punishable with imprisonment up to 5 years (7 years if minor) and fine up to Rs. 5 Million.",
      "examTip": "Section 21 PECA is the primary weapon against online blackmailing and morphing."
    },
    {
      "id": "q-9",
      "question": "What is the mandatory period for which Telecom Licensees and ISPs must retain traffic data under Section 29 of PECA 2016?",
      "opts": [
        "30 Days",
        "90 Days",
        "One Year",
        "Three Years"
      ],
      "ans": 2,
      "statute": "Section 29, PECA 2016",
      "explanation": "Section 29(1) of PECA 2016 requires a service provider to retain its traffic data for a minimum period of one year.",
      "examTip": "Traffic data retention = 1 year under Section 29 PECA."
    },
    {
      "id": "q-10",
      "question": "What is the punishment for the offence of Money Laundering under Section 4 of the Anti-Money Laundering Act, 2010 (AMLA)?",
      "opts": [
        "Simple imprisonment for 6 months",
        "Rigorous imprisonment of not less than 1 year and up to 10 years, fine up to Rs. 25 Million, and forfeiture of property",
        "Only a administrative penalty by the State Bank of Pakistan",
        "Rigorous imprisonment up to 25 years"
      ],
      "ans": 1,
      "statute": "Section 4, Anti-Money Laundering Act, 2010 (AMLA)",
      "explanation": "Section 4 AMLA prescribes rigorous imprisonment between 1 to 10 years, fine up to Rs. 25,000,000, and mandatory confiscation of the laundered assets.",
      "examTip": "FATF landmark: AMLA Section 4 carries up to 10 years RI, Rs. 25M fine, and asset forfeiture."
    },
    {
      "id": "q-11",
      "question": "Which body serves as the financial intelligence receiving unit for Suspicious Transaction Reports (STRs) under Section 6 of AMLA 2010?",
      "opts": [
        "National Accountability Bureau (NAB)",
        "Financial Monitoring Unit (FMU) housed at State Bank of Pakistan",
        "Federal Board of Revenue (FBR)",
        "FIA Cyber Crime Wing"
      ],
      "ans": 1,
      "statute": "Section 6, Anti-Money Laundering Act, 2010",
      "explanation": "Section 6 establishes the Financial Monitoring Unit (FMU) as an autonomous financial intelligence unit that receives, analyzes, and disseminates STRs to FIA and other law enforcement agencies.",
      "examTip": "FMU receives STRs from reporting entities; FIA ECW conducts the criminal investigation."
    },
    {
      "id": "q-12",
      "question": "Under the Emigration Ordinance 1979, what is the punishment for fraudulently inducing a citizen to emigrate on false promises of employment (Section 18)?",
      "opts": [
        "Imprisonment for 6 months",
        "Imprisonment for not less than 5 years and up to 14 years, and fine",
        "Only cancellation of national identity card",
        "Simple imprisonment up to 2 years"
      ],
      "ans": 1,
      "statute": "Section 18, Emigration Ordinance 1979 (XVIII of 1979)",
      "explanation": "Section 18 of the Emigration Ordinance 1979 prescribes a rigorous sentence of not less than 5 years and up to 14 years imprisonment, along with fine, for deceiving prospective emigrants.",
      "examTip": "Severe human trafficking penalty: 5 to 14 years imprisonment under Section 18 Emigration Ordinance."
    },
    {
      "id": "q-13",
      "question": "Which specialized court tries offences punishable under the Emigration Ordinance, 1979 under Section 22?",
      "opts": [
        "Judicial Magistrate 2nd Class",
        "Special Court of Emigration presided over by a District & Sessions Judge",
        "Provincial Anti-Corruption Court",
        "Customs Appellate Tribunal"
      ],
      "ans": 1,
      "statute": "Section 22, Emigration Ordinance 1979",
      "explanation": "Section 22 provides for the establishment of Special Courts of Emigration presided over by a person who is, or has been, a District & Sessions Judge.",
      "examTip": "Special Court of Emigration = District & Sessions Judge."
    },
    {
      "id": "q-14",
      "question": "Under Section 5(1) of the Prevention of Corruption Act, 1947, which of the following is NOT an ingredient of Criminal Misconduct?",
      "opts": [
        "Habitual acceptance of gratification",
        "Dishonest misappropriation of property entrusted to a public servant",
        "Bonafide administrative delay without any pecuniary gain",
        "Possession of pecuniary resources disproportionate to known sources of income"
      ],
      "ans": 2,
      "statute": "Section 5(1), Prevention of Corruption Act 1947 (PCA)",
      "explanation": "Section 5(1) requires dishonest intention, abuse of official position, gratification, or unexplained disproportionate assets. Bona fide administrative error without corrupt motive does not constitute criminal misconduct.",
      "examTip": "Criminal misconduct requires corrupt motive, pecuniary advantage, or disproportionate wealth."
    },
    {
      "id": "q-15",
      "question": "What is the maximum punishment for a public servant convicted of Criminal Misconduct under Section 5(2) of the Prevention of Corruption Act, 1947?",
      "opts": [
        "Imprisonment up to 3 years",
        "Imprisonment up to 7 years, or with fine, or with both",
        "Imprisonment for 14 years",
        "Life imprisonment"
      ],
      "ans": 1,
      "statute": "Section 5(2), Prevention of Corruption Act 1947",
      "explanation": "Section 5(2) states: 'Any public servant who commits criminal misconduct shall be punishable with imprisonment for a term which may extend to seven years, or with fine, or with both.'",
      "examTip": "Section 5(2) PCA penalty = 7 years imprisonment or fine or both."
    },
    {
      "id": "q-16",
      "question": "Which FIA operational wing is responsible for issuing Red Notices and liaising with international police authorities worldwide?",
      "opts": [
        "FIA Cyber Crime Wing",
        "National Central Bureau (NCB - Interpol Pakistan)",
        "FIA Anti-Corruption Wing",
        "FIA Immigration Wing"
      ],
      "ans": 1,
      "statute": "FIA Wings Framework & Interpol Constitution",
      "explanation": "The National Central Bureau (NCB) of Pakistan is located within the FIA headquarters in Islamabad and serves as the sole official interface between Pakistan and Interpol.",
      "examTip": "Interpol Pakistan = NCB (National Central Bureau) housed in FIA."
    },
    {
      "id": "q-17",
      "question": "Under the Passport Act, 1974 (XX of 1974), what is the penalty under Section 6 for making false statements or forging passport stamps?",
      "opts": [
        "Imprisonment up to 3 years, or fine, or both",
        "Life imprisonment",
        "Imprisonment for 10 years",
        "Only confiscation of passport with no criminal record"
      ],
      "ans": 0,
      "statute": "Section 6, Passport Act 1974",
      "explanation": "Section 6 provides imprisonment up to 3 years, or with fine, or with both for passport fraud, counterfeit entry stamps, or possessing multiple passports fraudulently.",
      "examTip": "Passport Act Section 6 penalty = 3 years or fine."
    },
    {
      "id": "q-18",
      "question": "Which statutory provision in the Schedule of the FIA Act, 1974 empowers the Agency to investigate gas utility theft and pipeline tampering?",
      "opts": [
        "Pakistan Arms Ordinance 1965",
        "Sections 462A to 462M of PPC & Sections 25 to 29 of OGRA Ordinance 2002",
        "Telegraphic Act 1885",
        "Drugs Act 1976"
      ],
      "ans": 1,
      "statute": "Schedule of FIA Act 1974 (Entries 1 & 37 via SRO 1620(I)/2026)",
      "explanation": "Sections 462A-462M of the PPC (Gas theft) and Sections 25-29 of the OGRA Ordinance 2002 are scheduled offences empowering FIA to curb industrial gas theft.",
      "examTip": "Gas theft is scheduled under PPC Sec 462A-M and OGRA Ordinance."
    },
    {
      "id": "q-19",
      "question": "Under Section 32 of PECA 2016, which courts try offences committed under the Prevention of Electronic Crimes Act?",
      "opts": [
        "Local Panchayat or Jirga",
        "Special Court Central established under the Criminal Law Amendment Act 1958",
        "Customs Appellate Tribunal",
        "District Consumer Court"
      ],
      "ans": 1,
      "statute": "Section 32, PECA 2016",
      "explanation": "Cyber crimes investigated by the FIA under PECA 2016 are tried by designated Courts of Session / Special Courts Central.",
      "examTip": "PECA cases are tried by Special Court Central."
    },
    {
      "id": "q-20",
      "question": "What historic entity was dissolved and repealed upon the establishment of the FIA under Section 10 of the FIA Act, 1974?",
      "opts": [
        "Federal Security Force (FSF)",
        "Pakistan Special Police Establishment (PSPE 1948)",
        "National Accountability Bureau (NAB)",
        "Special Branch Punjab"
      ],
      "ans": 1,
      "statute": "Section 10(1), FIA Act 1974",
      "explanation": "Section 10(1) repealed the Pakistan Special Police Establishment Ordinance, 1948 (VII of 1948) and transferred its pending cases and personnel to the newly created FIA.",
      "examTip": "FIA replaced the Pakistan Special Police Establishment (PSPE) in 1974."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.FIA_LAWS_DATA = FIA_LAWS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FIA_LAWS_DATA;
}
