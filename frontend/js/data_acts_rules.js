/**
 * Civil Services & Federal Statutes Master Data Repository
 * Comprehensive structured datasets for:
 * 1. Anti-Money Laundering Act, 2010 (Act No. VII of 2010 - As amended upto 2020)
 * 2. Civil Servants Act, 1973 (Act No. LXXI of 1973)
 * 3. Civil Servants (Efficiency and Discipline) Rules, 2020 (S.R.O. 1331(I)/2020)
 * 4. Civil Servants (Appointment, Promotion and Transfer) Rules, 1973 (APT Rules 1973)
 * 5. Civil Servants (Service in International Organizations) Rules, 2016 (S.R.O. 954(I)/2016)
 * Includes Section-by-Section statutory breakdowns, key definitions, penalties, legal timelines, and 60+ high-yield MCQs.
 */

window.ACTS_RULES_DATA = {
  // =========================================================================
  // 1. ANTI-MONEY LAUNDERING ACT, 2010 (AS AMENDED UPTO SEPTEMBER 2020)
  // =========================================================================
  aml_act_2010: {
    id: "aml_act_2010",
    title: "Anti-Money Laundering Act, 2010",
    citation: "Act No. VII of 2010",
    amendmentStatus: "As Amended upto September 2020 (Act XXI of 2020)",
    enactmentDate: "March 26, 2010 (Assent of the President)",
    jurisdiction: "Extends to the whole of Pakistan; applies to all citizens and legal persons",
    administeringAgencies: [
      "Financial Monitoring Unit (FMU) - Housed in State Bank of Pakistan",
      "Federal Investigation Agency (FIA)",
      "National Accountability Bureau (NAB)",
      "Anti-Narcotics Force (ANF)",
      "Directorate General (Intelligence & Investigation - Customs) FBR",
      "Directorate General (Intelligence & Investigation - Inland Revenue) FBR",
      "Provincial Counter Terrorism Departments (CTDs)"
    ],
    overview: "Enacted to prevent money laundering, combat financing of terrorism (CFT), counter proliferation financing, and mandate forfeiture of property involved in money laundering.",
    keyMetrics: [
      { label: "Rigorous Imprisonment", value: "1 to 10 Years" },
      { label: "Fine on Natural Person", value: "Up to Rs. 25 Million" },
      { label: "Fine on Legal Person (Corporate)", value: "Up to Rs. 100 Million" },
      { label: "CTR Filing Deadline", value: "Within 7 Working Days" },
      { label: "Provisional Attachment Duration", value: "180 Days (+180 Days Extension)" },
      { label: "Special Techniques (Wiretapping/Undercover)", value: "60 Days (+60 Days Extension)" },
      { label: "Record Retention Period (STR/CTR)", value: "At least 10 Years" },
      { label: "Transaction & CDD Record Retention", value: "At least 5 Years" },
      { label: "Trial Court Jurisdiction", value: "Court of Sessions" }
    ],
    sections: [
      {
        num: "1",
        title: "Short Title, Extent and Commencement",
        summary: "Called the Anti-Money Laundering Act, 2010. Extends to the whole of Pakistan and came into force at once.",
        examTip: "Applies to all reporting entities, financial institutions, and DNFBPs across Pakistan."
      },
      {
        num: "2",
        title: "Key Definitions",
        summary: "Comprehensive definitions substituted vide Sept 2020 amendments. Defines AML/CFT, Beneficial Owner (natural person who ultimately owns or controls a customer), CDD, Corporate Group, CTR, DNFBPs (real estate agents, dealers in precious metals/stones, lawyers/accountants conducting client transactions, trust/company service providers), FMU, Predicate Offence (Schedule-I), Proceeds of Crime, Proliferation Financing, STR, TFS, and Regulators (Schedule-IV).",
        examTip: "Remember: Lawyers & accountants are DNFBPs only when carrying out client monetary transactions (real estate, securities, managing accounts, company formation)."
      },
      {
        num: "3",
        title: "Offence of Money Laundering",
        summary: "Guilty if person: (a) acquires, converts, possesses, uses or transfers proceeds of crime; (b) conceals or disguises true nature, origin, location, ownership; (c) holds/possesses on behalf of another; or (d) participates, conspires, attempts, aids, abets, or facilitates. Explanation I: Intent inferred under Qanun-e-Shahadat Order 1984. Explanation II: Conviction for the predicate offence is NOT required to prove money laundering!",
        examTip: "Crucial exam question: Does Section 3 require prior conviction for the predicate offence? No! Explanation II explicitly dispenses with predicate conviction."
      },
      {
        num: "4",
        title: "Punishment for Money Laundering",
        summary: "Rigorous imprisonment for 1 to 10 years, fine up to 25 million rupees, and forfeiture of property. In case of a legal person (corporate entity), fine may extend to 100 million rupees, and directors/employees found guilty face 1 to 10 years imprisonment.",
        examTip: "Pre-2020 punishment was 1-10 years and fine up to 1 million or 5 million rupees. In 2020, fine was raised to 25 million for natural persons and 100 million for corporate bodies."
      },
      {
        num: "5",
        title: "National Executive Committee (NEC) & General Committee",
        summary: "NEC comprises Minister for Finance (Chairman), Foreign Affairs, Law, Interior, EAD Ministers, Governor SBP, Chairman SECP, DG FMU (Member/Secretary), DG FATF Cell. Holds meetings at least twice a year. General Committee comprises Secretary Finance (Chairman), Secretaries Interior, FA, Law; heads of NAB, FBR, FIA, ANF, Deputy Governor SBP, Commissioner SECP, DG FMU, DG FATF Cell.",
        examTip: "NEC is chaired by Finance Minister; General Committee is chaired by Finance Secretary."
      },
      {
        num: "6",
        title: "Financial Monitoring Unit (FMU)",
        summary: "Housed in SBP or other place in Pakistan. Headed by Director General (appointed by Federal Govt in consultation with SBP; financial sector specialist). Receives, analyzes STRs and CTRs, disseminates intelligence to LEAs, maintains national database, cooperates with foreign FIUs. DG FMU can order freezing of property for a maximum period of 15 days.",
        examTip: "FMU is autonomous; DG FMU can freeze property on reasonable grounds for max 15 days."
      },
      {
        num: "6A",
        title: "AML/CFT Regulatory Authority",
        summary: "Regulators (SBP, SECP, FBR, National Savings, Pakistan Post) and SRBs (ICAP, ICMAP, Pakistan Bar Council) exercise licensing, impose conditions, conduct inspections, compel production of documents, and impose monetary & administrative sanctions on reporting entities.",
        examTip: "Schedule-IV details all regulators and self-regulatory bodies."
      },
      {
        num: "7",
        title: "Procedure and Manner of Furnishing Information by Reporting Entities",
        summary: "Reporting entities must file STR promptly with FMU. CTR must be filed immediately, but not later than 7 working days. Maintain all records related to STRs and CTRs for at least 10 years! Overrides all secrecy obligations in any other law.",
        examTip: "CTR deadline is 7 working days. STR/CTR record retention is 10 years."
      },
      {
        num: "7A",
        title: "Customer Due Diligence (CDD)",
        summary: "Mandatory CDD when entering business relationship, occasional transactions above threshold, suspicion of ML/TF, or doubts about veracity of data. Must identify customer, verify beneficial owner, understand business relationship, and monitor ongoing basis.",
        examTip: "Section 7A was inserted in 2020 to align with FATF 40 Recommendations."
      },
      {
        num: "7C",
        title: "Record Keeping",
        summary: "Every reporting entity must maintain transaction records for at least 5 years following completion of transaction, and account files/CDD records for at least 5 years following termination of business relationship.",
        examTip: "Distinguish: General transaction/CDD records = 5 years (Sec 7C); STR/CTR records = 10 years (Sec 7(4))."
      },
      {
        num: "7D",
        title: "Inability to Complete CDD and Tipping Off",
        summary: "If unable to complete CDD, reporting entity shall not open account/commence relationship and promptly consider filing STR. If CDD will tip off customer, entity shall not pursue CDD and file STR immediately.",
        examTip: "Tipping off prohibition protects the integrity of investigations."
      },
      {
        num: "8",
        title: "Attachment of Property Involved in Money Laundering",
        summary: "Investigating Officer (IO), with prior permission of Court, provisionally attaches property for period not exceeding 180 days. Court may grant extension up to another 180 days. Copy of order sent to agency head within 48 hours in sealed envelope.",
        examTip: "Initial attachment = 180 days. Extension = up to 180 days (amended from 90 days in 2019/2020)."
      },
      {
        num: "9",
        title: "Investigation & Forfeiture",
        summary: "Within 7 days of attachment/seizure, IO serves show cause notice of not less than 30 days. IO records finding and applies to Court for confirmation. Court holds hearing; attached property remains seized during trial; on conviction, Court orders forfeiture to Federal Govt.",
        examTip: "Notice period to accused is not less than 30 days."
      },
      {
        num: "9A",
        title: "Application of Investigation Techniques",
        summary: "IO with permission of Court, within 60 days, may use undercover operations, intercepting communications (wiretapping), assessing computer systems, and controlled delivery. Court may extend by further 60 days.",
        examTip: "Section 9A empowers modern surveillance techniques for 60 + 60 days."
      },
      {
        num: "13-15",
        title: "Powers of Survey, Search & Seizure",
        summary: "Section 13: Survey with Court permission. Section 14: Search and seizure with Court permission (or senior officer BS-20 permission if immediate action needed). Section 15: Search of person (Female searched ONLY by female!). Reports forwarded within 48 hours.",
        examTip: "BS-20 officer can authorize emergency search without prior court warrant."
      },
      {
        num: "17-18",
        title: "Retention of Property and Records",
        summary: "Property and records seized under Sec 14/15 may be retained for up to 90 days from seizure, unless Court permits retention beyond 90 days.",
        examTip: "Standard retention without court extension is 90 days."
      },
      {
        num: "20-21",
        title: "Jurisdiction & Nature of Offences",
        summary: "Section 20: Court of Sessions has jurisdiction (or court trying predicate offence). Section 21: All offences under Act are cognizable and non-bailable. Stringent bail: Public Prosecutor given notice; Court satisfied accused not guilty. Complaint in writing by IO required.",
        examTip: "AML offences are cognizable and non-bailable (amended in Sept 2020 from non-cognizable)."
      },
      {
        num: "25",
        title: "Assistance to Authorities",
        summary: "Officers of Federal, Provincial, local govts and reporting entities must assist. Willful failure/refusal is misconduct: natural person punished with imprisonment up to 5 years, fine up to 1 million PKR or both; legal person fine up to 10 million PKR.",
        examTip: "Refusal to assist carries up to 5 years jail."
      },
      {
        num: "32-34",
        title: "Penalties for Misconduct, Failure to File STR & Tipping Off",
        summary: "Sec 32: Vexatious search/detention by IO without court permission = jail up to 2 years or fine up to 50,000 PKR. Sec 33: Failure to file STR or false info = jail up to 5 years or fine up to 500,000 PKR. Sec 34: Tipping off/unauthorized disclosure = jail up to 5 years or fine up to 2 million PKR.",
        examTip: "Tipping off penalty: 5 years / Rs. 2 Million fine."
      },
      {
        num: "Sched-I",
        title: "Schedule-I: Predicate Offences List",
        summary: "Lists predicate offences under: Pakistan Penal Code 1860 (corruption, kidnapping, theft, dacoity, cheating, forgery, counterfeiting currency), Arms Act 1878, Foreigners Act 1946, Prevention of Corruption Act 1947, Foreign Exchange Regulation Act 1947, Copyright 1962, Customs Act 1969, Securities Act 2015, Emigration Ordinance 1979, CNSA 1997, Anti-Terrorism Act 1997, NAO 1999, Income Tax Ordinance 2001 (tax evasion >= Rs. 10 Million), PACHTO 2002, Federal Excise Act 2005.",
        examTip: "Income Tax evasion qualifies as predicate offence only if tax sought to be evaded is Rs. 10 Million or more."
      }
    ]
  },

  // =========================================================================
  // 2. CIVIL SERVANTS ACT, 1973 (ACT NO. LXXI OF 1973)
  // =========================================================================
  civil_servants_act_1973: {
    id: "civil_servants_act_1973",
    title: "Civil Servants Act, 1973",
    citation: "Act No. LXXI of 1973",
    assentDate: "26th September, 1973; Gazette Published on 29th September, 1973",
    jurisdiction: "Applies to all civil servants of the Federation wherever they may be",
    overview: "The foundational statutory charter enacted under Article 240 of the 1973 Constitution regulating appointment, terms and conditions of service, promotion, seniority, conduct, and retirement in the service of Pakistan.",
    keyMetrics: [
      { label: "Superannuation Retirement Age", value: "60 Years" },
      { label: "Qualifying Service for Pension", value: "20 Years" },
      { label: "Tenure of Civil Servant", value: "During the pleasure of the President" },
      { label: "Appeal / Representation Deadline", value: "Within 30 Days" },
      { label: "Temporary Post Termination Notice", value: "14 Days (or Pay in Lieu)" },
      { label: "BS-20 & BS-21 Promotion Board", value: "CSB Headed by Chairman FPSC" },
      { label: "Bar of Jurisdiction", value: "Civil Courts Barred (Section 23B)" }
    ],
    sections: [
      {
        num: "1",
        title: "Short Title, Application and Commencement",
        summary: "Called the Civil Servants Act, 1973. Applies to all civil servants wherever they may be. Came into force at once.",
        examTip: "Applies extra-territorially to Pakistani civil servants posted abroad or in foreign missions."
      },
      {
        num: "2",
        title: "Definitions (Who is & who is NOT a Civil Servant)",
        summary: "Defines 'civil servant' as member of All-Pakistan Service or civil service of Federation or holding a civil post in connection with affairs of Federation, including defence-connected civil posts. EXCLUDES: (i) Person on deputation from province/other authority; (ii) Contract, work-charged or contingency-paid employee; (iii) 'Worker' or 'workman' under Factories Act 1934 or Workmen's Compensation Act 1923. Also defines ad hoc appointment, initial appointment, pay, selection authority.",
        examTip: "HIGH-FREQUENCY EXAM TRAP: Are deputationists from provinces or contract employees civil servants? NO! Section 2(b) expressly excludes them."
      },
      {
        num: "3",
        title: "Terms and Conditions of Service",
        summary: "Terms and conditions of a civil servant shall not be varied to his disadvantage. Subsections (3)-(6) inserted vide Act IX of 2016 to regulate post-18th Amendment devolution transfers to provinces, ICT, FATA, GB, and AJK.",
        examTip: "Sub-section (2) guarantees that terms of service cannot be altered to the civil servant's disadvantage."
      },
      {
        num: "4",
        title: "Tenure of Office of Civil Servants",
        summary: "Every civil servant shall hold office during the pleasure of the President.",
        examTip: "Based on the doctrine of pleasure, subject to statutory protections."
      },
      {
        num: "5",
        title: "Appointments",
        summary: "Appointments to All-Pakistan Service or civil service of the Federation shall be made in prescribed manner by President or person authorized by him.",
        examTip: "Delegated appointing authority is laid down in Rule 6 of APT Rules 1973."
      },
      {
        num: "6",
        title: "Probation",
        summary: "Initial appointment (not ad hoc) shall be on probation. Failure to pass prescribed exam or complete training results in: (a) discharge (if initial recruit); (b) reversion to former post against which he holds lien (if promotee/transferee). Initial appointee not confirmed until character and antecedents are verified satisfactory.",
        examTip: "A promoted civil servant retains a lien on his substantive lower post and is reverted, not discharged."
      },
      {
        num: "7",
        title: "Confirmation",
        summary: "Confirmation in a permanent post on satisfactory completion of probation. Section 7(3): There shall be NO confirmation against any temporary post! Confirmation takes effect from date of permanent vacancy or continuous officiation, whichever is later.",
        examTip: "Remember: Confirmation is never granted against temporary posts."
      },
      {
        num: "8",
        title: "Seniority",
        summary: "Seniority lists prepared for proper administration. Crucial principle: Seniority is NOT a vested right! Seniority on promotion takes effect from regular appointment date. Batch members retain lower post inter se seniority on promotion.",
        examTip: "Crucial rule: Civil servant cannot claim seniority as a vested legal right."
      },
      {
        num: "9",
        title: "Promotion",
        summary: "Eligible if possessing prescribed qualifications. Selection posts are filled on merit; non-selection posts on seniority-cum-fitness. Promotions to BS-20 and BS-21 made on recommendation of Selection Board headed by Chairman FPSC. Additional Secretary from BS-20; Secretary from BS-21.",
        examTip: "Central Selection Board (CSB) for BS 20-21 is chaired by Chairman FPSC."
      },
      {
        num: "10",
        title: "Posting and Transfer",
        summary: "Every civil servant liable to serve anywhere within or outside Pakistan under Federal, Provincial, or local authority. Terms and pay protected if serving outside cadre. Section 10A (inserted 2016): Bar on service in international organizations without prior permission.",
        examTip: "Section 10 mandates universal liability to serve anywhere across or outside Pakistan."
      },
      {
        num: "11",
        title: "Termination of Service",
        summary: "Termination without notice: (i) during probation; (ii) expiry of employment; (iii) ad hoc when regular candidate appointed. On post abolition, junior-most person terminated first. Temporary or ad hoc service terminable on 14 days' notice or pay in lieu.",
        examTip: "Notice period for terminating temporary/ad hoc appointment is 14 days."
      },
      {
        num: "12",
        title: "Reversion to Lower Post & Safeguards Against Dismissal",
        summary: "Ad hoc/officiating higher post liable to reversion. No civil servant dismissed or reduced in rank by authority subordinate to appointing authority. Reasonable opportunity of showing cause mandatory (exceptions: criminal conviction or national security interest of Pakistan).",
        examTip: "Protects against arbitrary dismissal by subordinate officers."
      },
      {
        num: "13",
        title: "Retirement from Service",
        summary: "Retires: (i) on date after completing 20 years qualifying service for pension as competent authority directs in public interest (with written grounds and show cause); or (ii) on completion of 60th year of age (superannuation).",
        examTip: "Retirement ages: 20 years qualifying service (early/directed retirement) and 60 years (superannuation)."
      },
      {
        num: "14",
        title: "Employment After Retirement",
        summary: "No re-employment under Federal Govt unless necessary in public interest with prior approval of authority next above appointing authority (President if appointing authority is President). Private employment during LPR or within 2 years of retirement requires prior approval.",
        examTip: "2-year cooling-off period applies for private employment after retirement."
      },
      {
        num: "17-19",
        title: "Pay, Leave, Pension and Gratuity",
        summary: "Pay fixed in prescribed manner. Leave granted depending on exigencies of service at discretion of authority. Pension on retirement; family pension on death. Dismissed/removed civil servant gets no pension, but compassionate allowance up to 2/3rd may be sanctioned. Provisional anticipatory pension within 1 month if delayed.",
        examTip: "Maximum compassionate allowance for dismissed civil servant is two-thirds (2/3) of pension."
      },
      {
        num: "22",
        title: "Right of Appeal or Representation",
        summary: "Appeal or review within 30 days of order. Where no appeal exists, representation to authority next above within 30 days. Proviso: NO representation shall lie on matters relating to determination of fitness to hold a post or promotion!",
        examTip: "Fitness for promotion cannot be challenged through departmental representation."
      },
      {
        num: "23A-23B",
        title: "Indemnity & Jurisdiction Barred",
        summary: "Section 23A: Indemnity for actions taken in good faith. Section 23B: Civil courts barred from entertaining any suit/proceedings or granting injunctions; exclusive forum is Service Tribunal under Service Tribunals Act 1973.",
        examTip: "Service matters cannot be challenged in civil courts; exclusive remedy lies before Service Tribunals."
      }
    ]
  },

  // =========================================================================
  // 3. CIVIL SERVANTS (EFFICIENCY AND DISCIPLINE) RULES, 2020
  // =========================================================================
  civil_servants_ed_rules_2020: {
    id: "civil_servants_ed_rules_2020",
    title: "Civil Servants (Efficiency and Discipline) Rules, 2020",
    citation: "S.R.O. No. 1331(I)/2020",
    notificationDate: "11th December, 2020 (Establishment Division)",
    repealedRules: "Repealed Government Servants (Efficiency and Discipline) Rules, 1973",
    applicability: "Applies to every civil servant in Pakistan",
    overview: "The modern disciplinary code governing federal civil servants. Replaced the 1973 rules, eliminated the post of 'Authorized Officer' to streamline proceedings, introduced time-bound inquiries, made dismissal mandatory for grave corruption, and barred legal counsel.",
    keyMetrics: [
      { label: "Suspension Initial Period", value: "Max 120 Days (Extendable)" },
      { label: "Written Defense Submission", value: "10 to 14 Days" },
      { label: "Inquiry Completion Deadline", value: "Within 60 Days" },
      { label: "Inquiry Report Submission", value: "Within 7 Days of Completion" },
      { label: "Authority Decision Deadline", value: "Within 30 Days" },
      { label: "Maximum Adjournment in Inquiry", value: "7 Days" },
      { label: "Legal Counsel Representation", value: "Completely Barred (Rule 20)" },
      { label: "Grave Corruption Penalty", value: "Dismissal from Service is MANDATORY" }
    ],
    rules: [
      {
        num: "1-2",
        title: "Short Title, Application and Key Definitions",
        summary: "Applies to every civil servant. Key definitions: 'authority' (appointing authority under Rule 6 APT Rules 1973); 'charges' (allegations framed against accused); 'hearing officer' (officer senior in rank to accused); 'inefficiency' (failure to efficiently perform assigned functions); 'inquiry committee' (2 or more officers headed by convener); 'inquiry officer' (officer senior to accused); 'misconduct' (conduct prejudicial to good order/discipline, contrary to Conduct Rules 1964, unbecoming of officer/gentleman, political influence, or entering plea bargain under NAB/other laws).",
        examTip: "Entering into a plea bargain under NAB Ordinance is explicitly defined as 'misconduct' under Rule 2(1)(k)."
      },
      {
        num: "3",
        title: "Grounds for Proceedings and Penalty",
        summary: "Civil servant proceeded against if: (a) inefficient or ceased to be efficient; (b) guilty of misconduct; (c) corrupt (disproportionate assets, living beyond ostensible means); (d) engaged in subversive activities, associated with subversive elements, or disclosure of official secrets.",
        examTip: "Living beyond ostensible means is prima facie ground for corruption proceedings."
      },
      {
        num: "4",
        title: "Penalties (Minor and Major)",
        summary: "Minor Penalties: (a) Censure; (b) Withholding of increment for max 3 years without cumulative effect; (c) Reduction to lower stage in pay scale for max 3 stages without cumulative effect; (d) Withholding of promotion for max 3 years. Major Penalties: (a) Recovery of embezzled money or pecuniary loss; (b) Reduction to lower post and pay scale for max 3 years; (c) Compulsory retirement; (d) Removal from service; (e) Dismissal from service. Rule 4(4): Removal does NOT disqualify, but Dismissal DOES disqualify for future government employment!",
        examTip: "CRITICAL DISTINCTION: Removal vs Dismissal. Dismissal disqualifies for future government employment; removal does not."
      },
      {
        num: "5",
        title: "Suspension and Leave",
        summary: "Authority may suspend or send on leave for initial period not exceeding 120 days (extendable in writing). If not extended before expiry, suspension ceases. Automatic suspension from date of arrest if committed to prison for criminal offence. Civil servant entitled to pay and subsistence under FR-53 during suspension. Sending on leave treated as on duty.",
        examTip: "Initial suspension duration is 120 days. Automatic suspension upon arrest and imprisonment."
      },
      {
        num: "7",
        title: "Procedure Where Inquiry is Dispensed With",
        summary: "If authority decides inquiry is not necessary: informs accused in writing specifying charges and proposed penalty; allows reasonable opportunity to show cause (not less than 10 days, not more than 14 days); decides case within 30 days of reply (except PM/President cases); affords personal hearing before imposing penalty; passes order of exoneration or penalty.",
        examTip: "Show cause reply window is 10 to 14 days; authority must decide within 30 days."
      },
      {
        num: "8-9",
        title: "Provision of Record & Inquiry Order",
        summary: "Rule 8: Authority supplies case record to inquiry officer/committee within 7 days. Rule 9: Inquiry order in writing: appoints IO or Committee (senior in rank to accused); communicates charges and apportionment within 14 days; appoints Departmental Representative (DR); directs accused to submit written defense within 10 to 14 days.",
        examTip: "Record supplied in 7 days; charges communicated within 14 days; defense in 10-14 days."
      },
      {
        num: "10",
        title: "Procedure to be Followed by Inquiry Officer / Committee",
        summary: "Examines oral/documentary evidence; cross-examination of witnesses allowed; ex-parte proceeding if accused fails to reply; case heard on day-to-day basis; adjournment max 7 days; completed within 60 days (extendable by authority for recorded reasons); submits report to authority within 7 days of completion.",
        examTip: "Total inquiry timeline: 60 days to complete hearings, 7 days to submit report."
      },
      {
        num: "12",
        title: "Powers of Inquiry Officer & Inquiry Committee",
        summary: "Vested with powers of a Civil Court under CPC 1908: summoning and enforcing attendance on oath, requiring discovery/production of documents, receiving evidence on affidavits, issuing commissions. Deemed judicial proceedings under Sections 193 and 228 of PPC.",
        examTip: "Inquiry has powers of Civil Court; false evidence is punishable under PPC 193."
      },
      {
        num: "16",
        title: "Order Passed on Receipt of Inquiry Report",
        summary: "Authority examines report. If satisfied, determines if charges proved. If proved, issues show cause notice with copy of report (10 to 14 days to reply, indicating if personal hearing desired); decides within 30 days. Proviso (i): For grave corruption, penalty of DISMISSAL is mandatory! Proviso (ii): For absence from duty > 1 year, compulsory retirement, removal or dismissal is mandatory!",
        examTip: "Mandatory penalty for grave corruption: Dismissal from service (not removal or retirement)."
      },
      {
        num: "17-18",
        title: "Personal Hearing & Deputation Proceedings",
        summary: "Personal hearing before authority or designated senior hearing officer. Deputationist: parent department authority may ask borrowing body to frame charges or initiate proceedings directly.",
        examTip: "Hearing officer must as far as possible be senior in rank to the accused."
      },
      {
        num: "20",
        title: "Appearance of Counsel",
        summary: "No party to any proceedings under these rules at any stage before appellate authority, authority, inquiry officer or committee shall be represented by an advocate or counsel.",
        examTip: "Lawyers/advocates are strictly prohibited from appearing in departmental E&D inquiries."
      },
      {
        num: "21",
        title: "Repeal and Savings",
        summary: "The Government Servants (Efficiency and Discipline) Rules, 1973 are hereby repealed. Pending proceedings continue under repealed rules.",
        examTip: "2020 rules completely superseded the 1973 E&D rules."
      }
    ]
  },

  // =========================================================================
  // 4. CIVIL SERVANTS (APPOINTMENT, PROMOTION & TRANSFER) RULES, 1973
  // =========================================================================
  civil_servants_apt_rules_1973: {
    id: "civil_servants_apt_rules_1973",
    title: "Civil Servants (Appointment, Promotion and Transfer) Rules, 1973",
    citation: "S.R.O. No. 1498(I)/73 (As amended upto 2020)",
    overview: "Governs the machinery of federal recruitment, promotion criteria, Departmental Promotion Committees (DPC), Central Selection Board (CSB), appointing authorities matrix, and national provincial/regional quota distribution.",
    keyMetrics: [
      { label: "Appointing Authority for BS-20+", value: "Prime Minister" },
      { label: "Appointing Authority for BS-17 to 19", value: "Secretary of Ministry/Division" },
      { label: "Initial Appointment BS-16+", value: "Through FPSC" },
      { label: "Probation Period", value: "1 Year (+1 Year Extension)" },
      { label: "Deputation Tenure", value: "3 Years (+2 Years Extension, Max 5 Years)" },
      { label: "Open Merit Quota", value: "7.5%" },
      { label: "Punjab Quota (incl. Islamabad)", value: "50%" },
      { label: "Sindh Total Quota", value: "19% (Urban 7.6%, Rural 11.4%)" },
      { label: "Khyber Pakhtunkhwa Quota", value: "11.5%" },
      { label: "Balochistan Quota", value: "6%" },
      { label: "Newly Merged Districts (Ex-FATA)", value: "3% (Separate for 10 years)" },
      { label: "Gilgit-Baltistan Quota", value: "1%" },
      { label: "Azad Jammu & Kashmir Quota", value: "2%" }
    ],
    rules: [
      {
        num: "3",
        title: "Three Methods of Appointment",
        summary: "Appointments made by: (a) Promotion; (b) Transfer; (c) Initial Appointment. Method and qualifications laid down by Ministry concerned in consultation with Establishment Division.",
        examTip: "Initial recruitment, promotion, and transfer are the only 3 recognized recruitment streams."
      },
      {
        num: "6",
        title: "Appointing Authorities Matrix (Rule 6 Table)",
        summary: "BS-20 and above: Prime Minister (President for President's Secretariat). BS-17 to 19: Secretary of the Ministry or Division concerned. BS-16: Officer notified by Secretary. BS-3 to 15: Officer notified by Secretary. BS-1 and 2: Officer notified by Secretary. Special: Auditor-General of Pakistan for Audit Department; Director General IB for Intelligence Bureau.",
        examTip: "Appointing authority for BS-17 to 19 is Secretary of the Ministry/Division, not Prime Minister."
      },
      {
        num: "7-8B",
        title: "Promotion, DPC, Selection Board & Acting Charge",
        summary: "Promotion to BS 2-18 by DPC; BS 19-21 by Selection Board (CSB). Rule 8A: Minimum length of service, training, and exam required. Rule 8B: Acting charge appointment made if senior civil servant lacks required length of service; made against posts vacant for 6 months or more; does NOT confer vested right to regular promotion or seniority; current charge appointment for vacancies under 6 months.",
        examTip: "Acting charge is for vacancies >= 6 months; current charge is for < 6 months."
      },
      {
        num: "10-12A",
        title: "Initial Appointment via FPSC & Date of Birth Finality",
        summary: "Rule 10: Posts in BS-16 and above filled through FPSC tests/examinations. Rule 11: Posts in BS 1-15 filled by DSC after advertisement. Rule 12A: Date of birth once recorded at the time of joining government service is FINAL and no alteration is permissible.",
        examTip: "Rule 12A explicitly prohibits altering date of birth after joining government service."
      },
      {
        num: "14",
        title: "Official Provincial & Regional Quotas Distribution",
        summary: "All-Pakistan quota distribution: Open Merit 7.5%, Punjab (incl Islamabad) 50%, Sindh 19% (Urban [Karachi, Hyderabad, Sukkur] 7.6% [40% of 19%]; Rural 11.4% [60% of 19%]), Khyber Pakhtunkhwa 11.5%, Balochistan 6%, Newly Merged Districts of KPK (Ex-FATA) 3% (observed independently for 10 years), Gilgit-Baltistan 1%, Azad Kashmir 2%.",
        examTip: "Most tested topic in FPSC/CSS general recruitment exams."
      },
      {
        num: "20A-21",
        title: "Deputation and Probation Rules",
        summary: "Deputation to Federal Govt: max 3 years, extendable by 2 years (total 5 years). Pension contribution paid by borrowing body. Exemption for serving husband and wife at same station. Probation: 1 year, extendable by max 1 year; deemed successfully completed on expiry if no adverse order issued.",
        examTip: "Standard probation period is 1 year, extendable to maximum 2 years total."
      }
    ]
  },

  // =========================================================================
  // 5. CIVIL SERVANTS (SERVICE IN INTERNATIONAL ORGANIZATIONS) RULES, 2016
  // =========================================================================
  civil_servants_intl_org_rules_2016: {
    id: "civil_servants_intl_org_rules_2016",
    title: "Civil Servants (Service in International Organizations) Rules, 2016",
    citation: "S.R.O. No. 954(I)/2016 (As amended 2020)",
    notificationDate: "7th October, 2016 (Establishment Division)",
    overview: "Regulates federal civil servants seeking employment, deputation, or secondment to international organizations, multilateral financial institutions, UN specialized agencies, and bilateral bodies.",
    keyMetrics: [
      { label: "Minimum Cadre Service Required", value: "5 Years" },
      { label: "Cooling-off Period After Return", value: "3 Years in Cadre" },
      { label: "Written Qualifying Test Minimum Score", value: "60%" },
      { label: "Written vs Interview Weightage", value: "80% Written : 20% Interview" },
      { label: "Interview Passing Marks", value: "No Minimum Passing Marks" },
      { label: "Deputation Tenure", value: "3 Years (Extendable to Max 5 Years)" },
      { label: "Static List Placement", value: "Beyond 5 Years Retention" },
      { label: "Surety Bond Requirement", value: "Executed on Rs. 100 Stamp Paper" }
    ],
    rules: [
      {
        num: "3-4",
        title: "Bar & Selection Criteria for Reserved Posts",
        summary: "Rule 3: Civil servant shall not approach international organizations without prior approval. Rule 4: Eligibility requires minimum 5 years of service in cadre. Selection: open competitive written qualifying test (minimum 60% score). Weightage: 80% written test, 20% interview. Proviso: No candidate deemed failed merely based on interview performance!",
        examTip: "Weightage is 80:20 (80% written test score, 20% interview score)."
      },
      {
        num: "6",
        title: "Special Selection Board Composition",
        summary: "Special Selection Board comprises: (a) Secretary, Cabinet Division (Chairman); (b) Secretary, Establishment Division (Member); (c) Secretary, Economic Affairs Division (Member); (d) Secretary, Foreign Affairs Division (Member); (e) Joint Secretary (Training), Establishment Division (Member-cum-Secretary).",
        examTip: "Board is chaired by Secretary Cabinet Division."
      },
      {
        num: "7",
        title: "Competent Authority for Deputation Approval",
        summary: "BS-20 and above: Prime Minister. BS-17 to 19: Secretary Establishment Division. BS-1 to 16: Secretary of the Ministry or Division concerned.",
        examTip: "Approval for BS-20+ is Prime Minister; BS-17 to 19 is Secretary Establishment."
      },
      {
        num: "8-9",
        title: "Ineligibility, Tenure & Static List",
        summary: "Ineligible if: guilty of misconduct/inefficiency or convicted of moral turpitude, or has not completed 3 years in cadre after returning from previous international deputation. Tenure: contract duration or 3 years extendable to max 2 years (total 5 years). Retention beyond 5 years places officer on 'static list'. Surety bond on Rs. 100 stamp paper to revert to parent department.",
        examTip: "Retention beyond 5 years results in placement on static list and liability for disciplinary action."
      },
      {
        num: "Schedule",
        title: "Schedule: Recognized International Organizations",
        summary: "World Bank, IMF, Asian Development Bank (ADB), Islamic Development Bank (IDB), DFID, US-AID, OIC, ECO, IAEA, WTO, International Court of Justice (ICJ), SAARC Secretariat, Commonwealth Secretariat, WHO, ILO, OPEC, IHRC, and bilateral posts notified by Prime Minister.",
        examTip: "All Bretton Woods institutions, UN specialized agencies, and regional bodies."
      }
    ]
  },

  // =========================================================================
  // 6. HIGH-YIELD PRACTICE QUESTIONS & QUIZ BANK (60 QUESTIONS)
  // =========================================================================
  questions: [
    // --- AML Act 2010 Questions (1-18) ---
    {
      id: "aml_q1",
      act: "aml_act_2010",
      q: "Under the Anti-Money Laundering Act, 2010, what is the maximum term of rigorous imprisonment for an individual convicted of money laundering?",
      opts: ["5 years", "7 years", "10 years", "14 years"],
      ans: "C",
      diff: "Easy",
      exp: "Section 4(1) provides that whoever commits money laundering shall be punished with rigorous imprisonment for not less than one year but which may extend up to 10 years."
    },
    {
      id: "aml_q2",
      act: "aml_act_2010",
      q: "What is the maximum fine that may be imposed on a legal person (corporate body) convicted of money laundering under Section 4(2)?",
      opts: ["Rs. 25 Million", "Rs. 50 Million", "Rs. 100 Million", "Rs. 250 Million"],
      ans: "C",
      diff: "Medium",
      exp: "Section 4(2) states that the fine may extend up to one hundred million rupees (Rs. 100 Million) in the case of a legal person."
    },
    {
      id: "aml_q3",
      act: "aml_act_2010",
      q: "Under Section 3 (Explanation II) of the AML Act 2010, what is required regarding the predicate offence to prove money laundering?",
      opts: [
        "Prior conviction for the predicate offence is mandatory",
        "The accused must have confessed to the predicate offence",
        "Conviction of an accused for the respective predicate offence shall not be required",
        "The predicate offence must be adjudicated in the High Court first"
      ],
      ans: "C",
      diff: "Medium",
      exp: "Explanation II of Section 3 explicitly clarifies: 'For the purposes of proving an offence under this section, the conviction of an accused for the respective predicate offence shall not be required.'"
    },
    {
      id: "aml_q4",
      act: "aml_act_2010",
      q: "Where is the Financial Monitoring Unit (FMU) established and primarily housed under Section 6?",
      opts: [
        "Ministry of Interior, Islamabad",
        "State Bank of Pakistan (SBP)",
        "Federal Board of Revenue (FBR) Headquarters",
        "Federal Investigation Agency (FIA) HQ"
      ],
      ans: "B",
      diff: "Easy",
      exp: "Section 6(1) provides that the Federal Government shall establish the FMU, which shall be housed in SBP or at any other place in Pakistan."
    },
    {
      id: "aml_q5",
      act: "aml_act_2010",
      q: "Within how many working days must a reporting entity file a Currency Transaction Report (CTR) with the FMU under Section 7(3)?",
      opts: ["3 working days", "5 working days", "7 working days", "15 working days"],
      ans: "C",
      diff: "Medium",
      exp: "Section 7(3) mandates that all CTRs shall be filed immediately, but not later than seven working days after the respective currency transaction."
    },
    {
      id: "aml_q6",
      act: "aml_act_2010",
      q: "For what minimum duration must reporting entities maintain records related to STRs and CTRs under Section 7(4)?",
      opts: ["3 years", "5 years", "7 years", "At least 10 years"],
      ans: "D",
      diff: "Medium",
      exp: "Section 7(4) stipulates that every reporting entity shall keep and maintain all records related to STRs and CTRs for a period of at least ten years."
    },
    {
      id: "aml_q7",
      act: "aml_act_2010",
      q: "Under Section 8(1), an Investigating Officer with prior permission of the Court may provisionally attach property for a period not exceeding:",
      opts: ["60 days", "90 days", "120 days", "180 days"],
      ans: "D",
      diff: "Medium",
      exp: "Section 8(1) authorizes provisional attachment for a period not exceeding 180 days (amended from 90 days), with Court power to extend for a further period up to 180 days."
    },
    {
      id: "aml_q8",
      act: "aml_act_2010",
      q: "Who chairs the National Executive Committee (NEC) constituted under Section 5 and Schedule-II of the AML Act?",
      opts: ["Prime Minister of Pakistan", "Minister for Finance or Advisor on Finance", "Minister for Interior", "Governor State Bank of Pakistan"],
      ans: "B",
      diff: "Easy",
      exp: "Schedule-II designates the Minister for Finance or Advisor to the Prime Minister on Finance as Chairman of the National Executive Committee."
    },
    {
      id: "aml_q9",
      act: "aml_act_2010",
      q: "Who acts as the Secretary of the National Executive Committee (NEC) and the General Committee?",
      opts: ["Secretary Finance", "Secretary Interior", "Director General, Financial Monitoring Unit (FMU)", "Director General, FIA"],
      ans: "C",
      diff: "Hard",
      exp: "Item 2 of Schedule-II and Schedule-III states that the Director General FMU shall act as Secretary of both the NEC and the General Committee."
    },
    {
      id: "aml_q10",
      act: "aml_act_2010",
      q: "Under Section 9A, for what duration may the Court permit the use of undercover operations and intercepting communications?",
      opts: ["30 days extendable by 30 days", "60 days extendable by 60 days", "90 days extendable by 90 days", "120 days without extension"],
      ans: "B",
      diff: "Hard",
      exp: "Section 9A(1) provides that the investigating officer may with permission of the court use special investigation techniques within 60 days, extendable up to a further period of 60 days."
    },
    {
      id: "aml_q11",
      act: "aml_act_2010",
      q: "Under Section 15(6) of the AML Act 2010, what is the statutory requirement regarding the physical search of a female?",
      opts: [
        "A female can only be searched with a magistrate present",
        "No female shall be searched by anyone except a female",
        "A female cannot be searched under any circumstances",
        "Search must be conducted in the presence of two independent male witnesses"
      ],
      ans: "B",
      diff: "Easy",
      exp: "Section 15(6) explicitly mandates: 'No female shall be searched by any one except a female.'"
    },
    {
      id: "aml_q12",
      act: "aml_act_2010",
      q: "Which Court possesses territorial jurisdiction to try and adjudicate offences under Section 20 of the AML Act, 2010?",
      opts: ["Magistrate 1st Class", "Court of Sessions", "Special Anti-Terrorism Court only", "Supreme Court of Pakistan"],
      ans: "B",
      diff: "Medium",
      exp: "Section 20(1) confers exclusive trial jurisdiction on the Court of Sessions established under the Code of Criminal Procedure, 1898 (or court trying predicate offence)."
    },
    {
      id: "aml_q13",
      act: "aml_act_2010",
      q: "What is the legal character of offences punishable under the Anti-Money Laundering Act, 2010 as per Section 21?",
      opts: [
        "Non-cognizable and bailable",
        "Cognizable and bailable",
        "Cognizable and non-bailable",
        "Compoundable with permission of High Court"
      ],
      ans: "C",
      diff: "Medium",
      exp: "Section 21(1)(a) provides that every offence punishable under this Act shall be cognizable and non-bailable."
    },
    {
      id: "aml_q14",
      act: "aml_act_2010",
      q: "What penalty is prescribed under Section 34(2) for 'tipping off' or unauthorized disclosure of STR/CTR reporting?",
      opts: [
        "Imprisonment up to 1 year or fine up to Rs. 100,000",
        "Imprisonment up to 3 years or fine up to Rs. 500,000",
        "Imprisonment up to 5 years or fine up to Rs. 2 Million or both",
        "Imprisonment up to 7 years with permanent disbarment"
      ],
      ans: "C",
      diff: "Hard",
      exp: "Section 34(2) specifies that tipping off is a criminal offence punishable by a maximum term of 5 years imprisonment or a fine extending up to two million rupees (Rs. 2 Million) or both."
    },
    {
      id: "aml_q15",
      act: "aml_act_2010",
      q: "Under Schedule-I, tax evasion under the Income Tax Ordinance 2001 constitutes a predicate offence only if the tax sought to be evaded is:",
      opts: ["Rs. 1 Million or more", "Rs. 5 Million or more", "Rs. 10 Million or more", "Rs. 25 Million or more"],
      ans: "C",
      diff: "Hard",
      exp: "Section XIIA of Schedule-I covers Sections 192, 192A, 194, and 199 of the Income Tax Ordinance 2001 'where tax sought to be evaded is ten million rupees (Rs. 10 Million) or more'."
    },

    // --- Civil Servants Act 1973 Questions (16-32) ---
    {
      id: "csa_q1",
      act: "civil_servants_act_1973",
      q: "The Civil Servants Act, 1973 received the assent of the President on which date?",
      opts: ["14th August, 1973", "26th September, 1973", "11th December, 1973", "1st January, 1974"],
      ans: "B",
      diff: "Medium",
      exp: "The Act received the assent of the President on 26th September, 1973 and was published in the Gazette of Pakistan on September 29, 1973."
    },
    {
      id: "csa_q2",
      act: "civil_servants_act_1973",
      q: "Which of the following is EXCLUDED from the statutory definition of 'civil servant' under Section 2(b) of the Civil Servants Act, 1973?",
      opts: [
        "A member of an All-Pakistan Service",
        "A person holding a civil post connected with defence",
        "A person on deputation to the Federation from any Province",
        "A permanent officer of the Secretariat Group"
      ],
      ans: "C",
      diff: "Easy",
      exp: "Section 2(b)(i) expressly excludes 'a person who is on deputation to the Federation from any Province or other authority'."
    },
    {
      id: "csa_q3",
      act: "civil_servants_act_1973",
      q: "According to Section 4 of the Civil Servants Act, 1973, what is the constitutional tenure of office of a civil servant?",
      opts: [
        "Until the age of 65 years",
        "Fixed term of five years",
        "During the pleasure of the President",
        "Permanent tenure until removed by Parliament"
      ],
      ans: "C",
      diff: "Easy",
      exp: "Section 4 establishes: 'Every civil servant shall hold office during the pleasure of the President.'"
    },
    {
      id: "csa_q4",
      act: "civil_servants_act_1973",
      q: "Under Section 7(3) of the Civil Servants Act, 1973, confirmation in service:",
      opts: [
        "Can be made against any ad hoc post",
        "Can be made against any temporary post after 3 years",
        "Shall not be made against any temporary post",
        "Is granted automatically upon joining"
      ],
      ans: "C",
      diff: "Medium",
      exp: "Section 7(3) clearly provides: 'There shall be no confirmation against any temporary post.'"
    },
    {
      id: "csa_q5",
      act: "civil_servants_act_1973",
      q: "What does Section 8(1) of the Civil Servants Act, 1973 declare regarding a civil servant's right to seniority?",
      opts: [
        "Seniority is a fundamental constitutional right",
        "Seniority is a vested right that cannot be altered",
        "Nothing herein contained shall be construed to confer any vested right to a particular seniority",
        "Seniority is decided exclusively by age"
      ],
      ans: "C",
      diff: "Medium",
      exp: "Section 8(1) explicitly states that 'nothing herein contained shall be construed to confer any vested right to a particular seniority in such service, cadre or post'."
    },
    {
      id: "csa_q6",
      act: "civil_servants_act_1973",
      q: "Promotions to posts in Basic Pay Scales 20 and 21 are made on the recommendation of a Selection Board headed by:",
      opts: [
        "Secretary Establishment Division",
        "Federal Minister for Law",
        "Chairman, Federal Public Service Commission (FPSC)",
        "Cabinet Secretary"
      ],
      ans: "C",
      diff: "Medium",
      exp: "Section 9(3) mandates that promotion to posts in BPS 20 and 21 shall be made on recommendations of a Selection Board headed by Chairman FPSC."
    },
    {
      id: "csa_q7",
      act: "civil_servants_act_1973",
      q: "Under Section 11(3), the service of a civil servant in temporary employment or appointed ad hoc is liable to termination on:",
      opts: ["7 days' notice", "14 days' notice or pay in lieu thereof", "30 days' notice", "3 months' notice"],
      ans: "B",
      diff: "Medium",
      exp: "Section 11(3) provides that temporary or ad hoc employment is liable to termination on 14 days' notice or pay in lieu thereof."
    },
    {
      id: "csa_q8",
      act: "civil_servants_act_1973",
      q: "Under Section 13, a civil servant superannuates and compulsorily retires from government service upon completing:",
      opts: ["58th year of age", "60th year of age", "62nd year of age", "65th year of age"],
      ans: "B",
      diff: "Easy",
      exp: "Section 13(1)(ii) provides that a civil servant retires on the completion of the sixtieth (60th) year of his age."
    },
    {
      id: "csa_q9",
      act: "civil_servants_act_1973",
      q: "A civil servant may be directed to retire in the public interest after completing how many years of qualifying service under Section 13(1)(i)?",
      opts: ["10 years", "15 years", "20 years", "25 years"],
      ans: "C",
      diff: "Medium",
      exp: "Section 13(1)(i) provides for retirement on such date after he has completed twenty (20) years of service qualifying for pension, as the competent authority may direct."
    },
    {
      id: "csa_q10",
      act: "civil_servants_act_1973",
      q: "If a civil servant is dismissed or removed for disciplinary reasons, what compassionate allowance may the Government sanction under Section 19(3)?",
      opts: [
        "Full pension",
        "Not exceeding one-half (1/2) of the pension",
        "Not exceeding two-thirds (2/3) of the pension or gratuity",
        "Not exceeding three-fourths (3/4) of the pension"
      ],
      ans: "C",
      diff: "Hard",
      exp: "Section 19(3) stipulates that Government may sanction compassionate allowance 'not exceeding two-thirds of the pension or gratuity which would have been admissible'."
    },
    {
      id: "csa_q11",
      act: "civil_servants_act_1973",
      q: "Under Section 22(2), a civil servant cannot make a departmental representation on which of the following matters?",
      opts: [
        "Withholding of increments",
        "Transfer to another province",
        "Determination of fitness of a person to hold a particular post or to be promoted",
        "Calculation of arrears of pay"
      ],
      ans: "C",
      diff: "Hard",
      exp: "Proviso to Section 22(2) states: 'Provided that no representation shall lie on matters relating to the determination of fitness of a person to hold a particular post or to be promoted to a higher post or grade.'"
    },
    {
      id: "csa_q12",
      act: "civil_servants_act_1973",
      q: "Which forum has exclusive jurisdiction over terms and conditions of civil servants under Section 23B of the Civil Servants Act, 1973?",
      opts: [
        "Civil Courts under CPC 1908",
        "High Court through Writ of Mandamus",
        "Service Tribunal established under Service Tribunals Act, 1973",
        "Federal Ombudsman (Wafaqi Mohtasib)"
      ],
      ans: "C",
      diff: "Medium",
      exp: "Section 23B bars civil courts and leaves disputes concerning terms and conditions to the Service Tribunals established under Act LXX of 1973."
    },

    // --- Civil Servants (E&D) Rules 2020 Questions (33-46) ---
    {
      id: "ed_q1",
      act: "civil_servants_ed_rules_2020",
      q: "Under the Civil Servants (E&D) Rules 2020, what is the initial period for which an authority may place an accused civil servant under suspension?",
      opts: ["60 days", "90 days", "120 days", "180 days"],
      ans: "C",
      diff: "Medium",
      exp: "Rule 5(1) provides that the authority may place a civil servant under suspension 'for an initial period not exceeding one hundred and twenty days at one time'."
    },
    {
      id: "ed_q2",
      act: "civil_servants_ed_rules_2020",
      q: "Which of the following is classified as a MAJOR penalty under Rule 4(3) of the Civil Servants (E&D) Rules 2020?",
      opts: [
        "Censure",
        "Withholding of increment for two years",
        "Reduction to lower stage in pay scale by two stages",
        "Compulsory retirement"
      ],
      ans: "D",
      diff: "Easy",
      exp: "Under Rule 4(3), compulsory retirement, recovery of pecuniary loss, reduction to a lower post, removal from service, and dismissal from service are major penalties."
    },
    {
      id: "ed_q3",
      act: "civil_servants_ed_rules_2020",
      q: "Under Rule 4(4) of E&D Rules 2020, what is the critical legal difference between 'removal from service' and 'dismissal from service'?",
      opts: [
        "Removal forfeits pension, dismissal does not",
        "Removal disqualifies for future government employment, dismissal does not",
        "Dismissal disqualifies for future government employment, removal does not",
        "Removal requires Cabinet approval, dismissal does not"
      ],
      ans: "C",
      diff: "Medium",
      exp: "Rule 4(4) states: 'The penalty of removal from service shall not but dismissal from service, under these rules, shall disqualify the civil servant for future employment of any kind under the Government.'"
    },
    {
      id: "ed_q4",
      act: "civil_servants_ed_rules_2020",
      q: "When an inquiry is dispensed with under Rule 7, what is the time window allowed to the accused to submit a written show-cause defense?",
      opts: ["Not less than 7 and not more than 10 days", "Not less than 10 and not more than 14 days", "21 days", "30 days"],
      ans: "B",
      diff: "Hard",
      exp: "Rule 7(b) mandates that the show cause period 'should not be less than ten days and more than fourteen days, from the receipt of the order'."
    },
    {
      id: "ed_q5",
      act: "civil_servants_ed_rules_2020",
      q: "Under Rule 10(7), within how many days must an Inquiry Officer or Inquiry Committee complete the inquiry proceedings?",
      opts: ["30 days", "45 days", "60 days", "90 days"],
      ans: "C",
      diff: "Medium",
      exp: "Rule 10(7) provides: 'The inquiry officer or the inquiry committee, as the case may be, shall complete the inquiry within sixty days'."
    },
    {
      id: "ed_q6",
      act: "civil_servants_ed_rules_2020",
      q: "Within how many days of the completion of an inquiry must the Inquiry Officer submit the inquiry report to the authority under Rule 10(7)?",
      opts: ["3 days", "7 days", "14 days", "30 days"],
      ans: "B",
      diff: "Hard",
      exp: "Rule 10(7) requires the report to be submitted to the authority 'within seven days of the date of completion of inquiry'."
    },
    {
      id: "ed_q7",
      act: "civil_servants_ed_rules_2020",
      q: "Under Rule 16(7)(b)(i), what penalty is MANDATORY if charges of grave corruption are proved against an accused civil servant?",
      opts: ["Compulsory retirement", "Removal from service", "Dismissal from service", "Withholding of promotion for 3 years"],
      ans: "C",
      diff: "Hard",
      exp: "Rule 16(7)(b)(i) mandates: 'where charge or charges of grave corruption are proved against an accused the penalty of dismissal from service shall be imposed, in addition to the penalty of recovery, if any'."
    },
    {
      id: "ed_q8",
      act: "civil_servants_ed_rules_2020",
      q: "According to Rule 20 of the Civil Servants (E&D) Rules 2020, who is barred from representing any party in departmental proceedings?",
      opts: ["A departmental colleague", "A registered medical practitioner", "An advocate or legal counsel", "A trade union representative"],
      ans: "C",
      diff: "Easy",
      exp: "Rule 20 explicitly provides: 'No party to any proceedings under these rules at any stage... shall be represented by an advocate or counsel.'"
    },

    // --- APT Rules 1973 & International Rules 2016 Questions (47-60) ---
    {
      id: "apt_q1",
      act: "civil_servants_apt_rules_1973",
      q: "Who is the appointing authority for posts in Basic Pay Scale 20 and above under Rule 6 of the APT Rules, 1973?",
      opts: ["President of Pakistan", "Prime Minister of Pakistan", "Secretary Establishment Division", "Chairman FPSC"],
      ans: "B",
      diff: "Medium",
      exp: "Rule 6 Table specifies the Prime Minister as the appointing authority for posts in Basic Pay Scales 20 and above (President for President's Secretariat)."
    },
    {
      id: "apt_q2",
      act: "civil_servants_apt_rules_1973",
      q: "Who is the appointing authority for posts in Basic Pay Scales 17 to 19 under Rule 6 of the APT Rules, 1973?",
      opts: ["Prime Minister", "Minister-in-charge", "Secretary of the Ministry or Division concerned", "Section Officer (Admn)"],
      ans: "C",
      diff: "Medium",
      exp: "Rule 6 Table designates the Secretary of the Ministry or Division concerned as the appointing authority for BS-17 to 19."
    },
    {
      id: "apt_q3",
      act: "civil_servants_apt_rules_1973",
      q: "What is the open merit quota for recruitment on an All-Pakistan basis under Rule 14 of the APT Rules, 1973?",
      opts: ["5%", "7.5%", "10%", "12.5%"],
      ans: "B",
      diff: "Easy",
      exp: "Rule 14 sets the open merit quota at 7.5% for all federal recruitment posts."
    },
    {
      id: "apt_q4",
      act: "civil_servants_apt_rules_1973",
      q: "What is the provincial quota allocated to Punjab (including Islamabad Capital Territory) under Rule 14?",
      opts: ["45%", "48%", "50%", "52.5%"],
      ans: "C",
      diff: "Easy",
      exp: "Rule 14 prescribes a 50% quota for Punjab (including the Federal Area of Islamabad)."
    },
    {
      id: "apt_q5",
      act: "civil_servants_apt_rules_1973",
      q: "Under Rule 14 of APT Rules 1973, how is the 19% quota of Sindh sub-allocated between Urban and Rural areas?",
      opts: [
        "Urban 50% : Rural 50%",
        "Urban 40% (7.6%) : Rural 60% (11.4%)",
        "Urban 30% (5.7%) : Rural 70% (13.3%)",
        "Urban 60% (11.4%) : Rural 40% (7.6%)"
      ],
      ans: "B",
      diff: "Medium",
      exp: "Sindh's 19% share is sub-allocated as: Urban (Karachi, Hyderabad, Sukkur) 40% of 19% = 7.6%; Rural (rest of Sindh) 60% of 19% = 11.4%."
    },
    {
      id: "apt_q6",
      act: "civil_servants_apt_rules_1973",
      q: "What quota is reserved for the Newly Merged Districts of Khyber Pakhtunkhwa (Ex-FATA) under Rule 14?",
      opts: ["1%", "2%", "3%", "4%"],
      ans: "C",
      diff: "Medium",
      exp: "Rule 14 reserves 3% for Newly Merged Districts of KP (Ex-FATA), to be observed independently for 10 years."
    },
    {
      id: "apt_q7",
      act: "civil_servants_apt_rules_1973",
      q: "What is the quota allocated to Balochistan under Rule 14 of the APT Rules?",
      opts: ["4%", "5%", "6%", "7.5%"],
      ans: "C",
      diff: "Easy",
      exp: "Balochistan is allocated a 6% quota for federal recruitment."
    },
    {
      id: "apt_q8",
      act: "civil_servants_apt_rules_1973",
      q: "Under Rule 12A of the APT Rules, 1973, when may an alteration in a civil servant's date of birth be permissible?",
      opts: [
        "Within 2 years of joining service",
        "Upon producing an attested NADRA CNIC",
        "Never; the date of birth once recorded at the time of joining is final",
        "With permission of the Prime Minister"
      ],
      ans: "C",
      diff: "Medium",
      exp: "Rule 12A unambiguously states: 'The date of birth once recorded at the time of joining government service shall be final and thereafter no alteration in the date of birth of a civil servant shall be permissible.'"
    },
    {
      id: "intl_q1",
      act: "civil_servants_intl_org_rules_2016",
      q: "Under the Civil Servants (Service in International Organizations) Rules 2016, how many years of cadre service are required for taking up an international assignment?",
      opts: ["2 years", "3 years", "5 years", "7 years"],
      ans: "C",
      diff: "Medium",
      exp: "Rule 4(a) mandates that a civil servant should have completed five (5) years of service in his cadre before taking up an assignment in an international organization."
    },
    {
      id: "intl_q2",
      act: "civil_servants_intl_org_rules_2016",
      q: "In the selection process for international posts under Rule 4, what is the weightage formula between written test and interview scores?",
      opts: ["50% Written : 50% Interview", "60% Written : 40% Interview", "70% Written : 30% Interview", "80% Written : 20% Interview"],
      ans: "D",
      diff: "Hard",
      exp: "Rule 4(e) specifies: 'eighty percent weightage shall be given to the written test scores and twenty percent weightage to the interview scores'."
    },
    {
      id: "intl_q3",
      act: "civil_servants_intl_org_rules_2016",
      q: "What minimum qualifying score is required in the written test for international posts under Rule 4(d)?",
      opts: ["50%", "60%", "65%", "75%"],
      ans: "B",
      diff: "Medium",
      exp: "Rule 4(d) provides that the minimum qualifying score in the written test shall be set at sixty percent (60%)."
    },
    {
      id: "intl_q4",
      act: "civil_servants_intl_org_rules_2016",
      q: "Under Rule 9(3), what happens to a civil servant retained on international deputation beyond the maximum period of five years?",
      opts: [
        "He is automatically dismissed from service",
        "He shall be placed on the static list",
        "He receives immediate repatriation notice with forfeiture of pension",
        "His resignation is deemed accepted"
      ],
      ans: "B",
      diff: "Hard",
      exp: "Rule 9(3) stipulates: 'In case of retention of a civil servant after expiry of maximum period of five years he shall be placed on static list.'"
    }
  ]
};
