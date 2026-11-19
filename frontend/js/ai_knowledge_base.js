/**
 * AI Study Assistant Knowledge Base & RAG Repository
 * Authoritative statutory text, constitutional articles, economic metrics,
 * grammar rules, and subject notes for grounded answering and question generation.
 */

window.AI_KNOWLEDGE_BASE = {
  laws: {
        aml_act_2010: {
      name: "Anti-Money Laundering Act, 2010 (Act No. VII of 2010 - As Amended upto September 2020)",
      enactment: "Enacted in March 2010; extensively amended in September 2020 (Act XXI of 2020) to comply with FATF 40 Recommendations and counter terror financing.",
      sections: {
        "1": "Section 1: Extends to the whole of Pakistan; applies to all citizens, reporting entities, and legal persons.",
        "2": "Section 2: Definitions. Defines AML/CFT, Beneficial Owner (natural person who ultimately owns/controls a customer), CDD (Customer Due Diligence), CTR (Currency Transaction Report exceeding Gazette threshold), DNFBPs (real estate agents, gem/precious metal dealers, lawyers/accountants carrying out financial transactions, trust/company service providers), FMU (Financial Monitoring Unit), Predicate Offence (Schedule-I), Proceeds of Crime, Proliferation Financing, and STR (Suspicious Transaction Report).",
        "3": "Section 3: Offence of Money Laundering. Prohibits acquiring, converting, possessing, or concealing proceeds of crime. Explanation I: Knowledge/intent inferred under Qanun-e-Shahadat Order 1984. Explanation II: Conviction of the accused for the predicate offence is NOT required to prove money laundering.",
        "4": "Section 4: Punishment. Rigorous imprisonment for not less than 1 year up to 10 years, fine up to Rs. 25 Million, and forfeiture of property. For a legal person (corporate body), fine up to Rs. 100 Million; guilty directors/officers face 1-10 years imprisonment.",
        "5": "Section 5: National Executive Committee (NEC) & General Committee. NEC chaired by Minister for Finance; includes Ministers of Foreign Affairs, Law, Interior, EAD, Governor SBP, Chairman SECP, DG FMU (Member/Sec), DG FATF Cell. General Committee chaired by Secretary Finance.",
        "6": "Section 6: Financial Monitoring Unit (FMU). Autonomous body housed in State Bank of Pakistan, headed by Director General (financial sector specialist). Receives STRs/CTRs, analyzes financial intelligence, maintains database, cooperates with foreign FIUs, and represents Pakistan at FATF. DG FMU may order freezing of property for max 15 days.",
        "6A": "Section 6A: Regulators and SRBs. SBP, SECP, FBR, National Savings, Pakistan Post, ICAP, ICMAP, and Pakistan Bar Council regulate compliance, issue CDD rules, and impose administrative/financial sanctions.",
        "7": "Section 7: Procedure for reporting entities. STR must be filed promptly with FMU. CTR must be filed immediately, but not later than 7 working days. Records of STRs and CTRs must be maintained for at least 10 years. Overrides secrecy laws.",
        "7A_7D": "Sections 7A-7D: CDD, Record Keeping & Tipping Off. Requires verification of customer and beneficial owner. General transaction & CDD records kept for at least 5 years. If CDD cannot be completed, terminate relationship and consider STR. Tipping off is strictly prohibited.",
        "8": "Section 8: Attachment of Property. Investigating Officer with Court permission may provisionally attach property involved in money laundering for up to 180 days. Court may grant extension up to another 180 days (max 360 days total).",
        "9A": "Section 9A: Special Investigation Techniques. With court permission, IO may use undercover operations, intercepting communications (wiretapping), computer system access, and controlled delivery for 60 days, extendable by further 60 days.",
        "13_15": "Sections 13-15: Survey, Search and Seizure. Requires Court permission or BS-20 officer approval in emergencies. Section 15(6): No female shall be searched by anyone except a female.",
        "20_21": "Sections 20 & 21: Court of Sessions has trial jurisdiction. Offences are cognizable and non-bailable. Stringent bail rules apply.",
        "33_34": "Sections 33 & 34: Penalties. Failure to file STR = imprisonment up to 5 years or fine up to Rs. 500,000. Tipping off/unauthorized disclosure = imprisonment up to 5 years or fine up to Rs. 2 Million.",
        "Sched_I": "Schedule-I: Predicate offences under PPC (murder, kidnapping, corruption, forgery, dacoity), Customs Act 1969, FERA 1947, ATA 1997, CNSA 1997, NAO 1999, and Income Tax Ordinance 2001 (where tax sought to be evaded is Rs. 10 Million or more)."
      }
    },
    civil_servants_act_1973: {
      name: "Civil Servants Act, 1973 (Act No. LXXI of 1973)",
      enactment: "Assent on 26th September 1973; applies to all civil servants of the Federation wherever they may be.",
      sections: {
        "1": "Section 1: Extends to the whole of Pakistan and applies to all federal civil servants wherever they may be.",
        "2": "Section 2: Definitions. Defines 'civil servant' as member of All-Pakistan Service or civil post of Federation (including defence-connected civil posts). Explicitly EXCLUDES: (i) Provincial deputationists, (ii) Contract, work-charged or contingency-paid employees, (iii) Workers under Factories Act 1934 or Workmen's Compensation Act 1923. Also defines ad hoc appointment and selection authority.",
        "3_4": "Sections 3 & 4: Terms and conditions shall not be varied to civil servant's disadvantage. Section 4: Every civil servant holds office during the pleasure of the President.",
        "6_7": "Sections 6 & 7: Probation and Confirmation. Initial appointments on probation. Failure to pass exam/training results in discharge (if initial recruit) or reversion to lien post (if promotee). Confirmation only against permanent posts; NO confirmation against temporary posts.",
        "8": "Section 8: Seniority. Seniority is NOT a vested right. Determined by regular appointment date. Batch members retain lower post inter se seniority on promotion.",
        "9": "Section 9: Promotion. Selection posts filled on merit; non-selection posts on seniority-cum-fitness. Central Selection Board (CSB) for BS-20 and BS-21 is headed by Chairman FPSC.",
        "10": "Section 10: Posting and Transfer. Liable to serve anywhere within or outside Pakistan under Federal, Provincial, or local bodies. Section 10A: Restriction on service in international organizations without prior permission.",
        "11": "Section 11: Termination of Service. Ad hoc/temporary service terminable on 14 days' notice or pay in lieu. On post abolition, junior-most in cadre is terminated first.",
        "12": "Section 12: Reversion and Dismissal Safeguards. No civil servant dismissed or reduced in rank by authority subordinate to appointing authority. Reasonable opportunity to show cause mandatory.",
        "13": "Section 13: Retirement. Superannuation retirement at completion of 60th year of age. Retirement after 20 years qualifying service for pension if directed by competent authority in public interest.",
        "14": "Section 14: Employment After Retirement. Re-employment requires higher approval. Private employment within 2 years of retirement or during LPR requires prior government approval.",
        "19": "Section 19: Pension and Gratuity. No pension for dismissal for disciplinary reasons; government may grant compassionate allowance up to 2/3rd of pension. Provisional pension within 1 month if delayed.",
        "22": "Section 22: Appeal and Representation within 30 days. Proviso: NO representation lies on determination of fitness to hold a post or promotion.",
        "23B": "Section 23B: Civil courts barred; disputes subject to Service Tribunals Act 1973."
      }
    },
    civil_servants_ed_rules_2020: {
      name: "Civil Servants (Efficiency and Discipline) Rules, 2020 (S.R.O. 1331(I)/2020)",
      enactment: "Notified on 11th December 2020; repealed Government Servants (E&D) Rules 1973.",
      sections: {
        "2": "Rule 2: Definitions. Defines Authority (Appointing Authority under Rule 6 APT Rules 1973), Hearing Officer, Inquiry Officer, Inquiry Committee (2+ officers), Inefficiency, and Misconduct (includes political influence and plea bargaining under NAB/other laws).",
        "3": "Rule 3: Grounds for Proceedings: (a) Inefficient; (b) Misconduct; (c) Corrupt (disproportionate assets or living beyond ostensible means); (d) Subversive activities/disclosure of official secrets.",
        "4": "Rule 4: Penalties. Minor Penalties: Censure, withholding increment (max 3 yrs without cumulative effect), reduction to lower stage in pay scale (max 3 stages), withholding promotion (max 3 yrs). Major Penalties: Recovery of pecuniary loss/embezzled funds, reduction to lower post (max 3 yrs), compulsory retirement, removal from service (does NOT disqualify), dismissal from service (DISQUALIFIES for future government employment).",
        "5": "Rule 5: Suspension. Initial period not exceeding 120 days (extendable in writing). Automatic suspension on arrest and imprisonment. Subsistence grant under FR-53.",
        "7": "Rule 7: Inquiry Dispensed With. Show cause notice with 10 to 14 days reply window. Authority decides case within 30 days. Personal hearing before imposing penalty.",
        "9_10": "Rules 9 & 10: Inquiry Procedure. Inquiry order with charges within 14 days; written defense in 10-14 days. Hearings held day-to-day; max adjournment 7 days. Inquiry completed within 60 days; report submitted within 7 days.",
        "12": "Rule 12: Powers of Civil Court. Power to summon, examine on oath, compel documents, and issue commissions under CPC 1908. Deemed judicial proceedings under PPC 193/228.",
        "16": "Rule 16: Decision on Report. Exonerate or issue show cause notice (10-14 days). Decide within 30 days. Proviso: DISMISSAL from service is MANDATORY for grave corruption; compulsory retirement/removal/dismissal mandatory for unauthorized absence over 1 year.",
        "20": "Rule 20: Appearance of Counsel. Advocates and legal counsel are strictly BARRED from appearing at any stage of proceedings."
      }
    },
    civil_servants_apt_rules_1973: {
      name: "Civil Servants (Appointment, Promotion and Transfer) Rules, 1973 (APT Rules)",
      enactment: "Promulgated under Section 25 of Civil Servants Act, 1973; updated with 2020 provincial quota revisions.",
      sections: {
        "3": "Rule 3: Three methods of appointment: (a) Promotion; (b) Transfer; (c) Initial Appointment.",
        "6": "Rule 6: Appointing Authorities. BS-20 and above: Prime Minister. BS-17 to 19: Secretary of Ministry/Division. BS-16 and below: Officer notified by Secretary.",
        "8B": "Rule 8B: Acting Charge Appointment. Made for posts vacant for 6 months or more when senior officer lacks length of service. Does NOT confer vested right to regular promotion or seniority. Current charge for vacancies under 6 months.",
        "10_12A": "Rules 10 & 12A: BS-16+ filled through FPSC. Date of birth once recorded at entry into service is FINAL; no alteration permissible.",
        "14": "Rule 14: Official Regional & Provincial Quotas: Open Merit 7.5%, Punjab (incl Islamabad) 50%, Sindh 19% (Urban 7.6%, Rural 11.4%), Khyber Pakhtunkhwa 11.5%, Balochistan 6%, Newly Merged Districts of KP (Ex-FATA) 3% (separate for 10 years), Gilgit-Baltistan 1%, Azad Kashmir 2%."
      }
    },
    civil_servants_intl_org_rules_2016: {
      name: "Civil Servants (Service in International Organizations) Rules, 2016 (S.R.O. 954(I)/2016)",
      enactment: "Notified on 7th October 2016; governs deputation to UN, World Bank, IMF, ADB, and bilateral posts.",
      sections: {
        "4": "Rule 4: Selection Criteria. Requires 5 years service in cadre. Written qualifying test (minimum 60% score). Weightage formula: 80% written test score, 20% interview score. No minimum passing marks for interview.",
        "6_7": "Rules 6 & 7: Special Selection Board chaired by Secretary Cabinet Division. Approval for BS-20+ by Prime Minister; BS-17 to 19 by Secretary Establishment.",
        "8_9": "Rules 8 & 9: Ineligible if misconduct guilty or lacking 3 years in cadre since previous deputation. Tenure: 3 years extendable to max 5 years. Officers retained beyond 5 years placed on static list. Surety bond on Rs. 100 stamp paper."
      }
    },
fia_act_1974: {
      name: "Federal Investigation Agency Act, 1974 (Act No. VIII of 1975)",
      enactment: "Passed on 13th January 1975; applies to all citizens of Pakistan and public servants wherever they may be.",
      sections: {
        "1": "Section 1: Short title, extent and commencement. Applies to the whole of Pakistan and to citizens of Pakistan and public servants wherever they may be, and in relation to aircraft/ships registered in Pakistan.",
        "2": "Section 2: Definitions. Defines Agency (FIA), Code (CrPC 1898), Director General (head of Agency appointed by Federal Government), Public Servant (as defined in Section 21 of PPC), and Special Police (defunct Pakistan Special Police Establishment).",
        "3": "Section 3: Constitution of Agency. The Federal Government may constitute the Federal Investigation Agency for inquiry into and investigation of offences specified in the Schedule. Agency consists of a Director General and specified officers/ranks.",
        "4": "Section 4: Superintendence and administration of the Agency. The superintendence of the Agency vests in the Federal Government. Administration vests in the Director General, who exercises powers of an Inspector General of Police under the Police Act, 1861.",
        "5": "Section 5: Powers of the members of the Agency. (1) Throughout Pakistan, members of the Agency have powers of search, arrest of persons, and seizure of property, and all other powers of police officers under the Code. (2) Officers not below Sub-Inspector may exercise powers of an Officer-in-Charge of a Police Station. (3) Any member authorized by DG may arrest without warrant any person who has committed or is suspected of having committed a scheduled offence. (4) Police station designation: Any place designated by Federal Government can be a police station under CrPC.",
        "5A": "Section 5A: Order to bank not to pay, etc. The Director General or an officer not below Assistant Director authorized by him can issue order in writing to any bank not to pay or deliver money/property held by it on account of a person under inquiry/investigation without prior court order.",
        "6": "Section 6: Delegation of powers. The Director General may, by order in writing, direct that any of his powers shall be exercisable by any officer of the Agency specified in the order.",
        "7": "Section 7: Liabilities of members of the Agency. Members of the Agency shall be subject to such liabilities as can be imposed on police officers under the Police Act, 1861 or rules made thereunder.",
        "8": "Section 8: Indemnity. No suit, prosecution or other legal proceeding shall lie against the Federal Government or any member of the Agency for anything which is in good faith done or intended to be done under this Act.",
        "9": "Section 9: Power to make rules. The Federal Government may, by notification in the official Gazette, make rules for carrying out the purposes of this Act.",
        "10": "Section 10: Repeal of Pakistan Special Police Establishment Ordinance, 1948. Personnel, assets, liabilities, and ongoing cases of Special Police were transferred to the FIA."
      },
      schedule: "The Schedule covers offences under Pakistan Penal Code (PPC) including treason, bribery (161-165), extortion (383-389), forgery (463-477A), currency counterfeiting (489A-E), Official Secrets Act, Foreign Exchange Regulation Act, Emigration Ordinance, Anti-Money Laundering Act, and PECA 2016."
    },

    civil_servants_act_1973: {
      name: "Civil Servants Act, 1973 (Act No. LXXI of 1973)",
      enactment: "Enacted under Article 240 of the 1973 Constitution to regulate appointment and terms of service of persons in service of Pakistan.",
      sections: {
        "1": "Section 1: Short title, application and commencement. Applies to all civil servants wherever they may be.",
        "2": "Section 2: Definitions. Defines 'civil servant' (person who is a member of an All-Pakistan Service or of a civil service of the Federation, or who holds a civil post in connection with the affairs of the Federation), excluding casual labor, contract employees, or workmen under Factories Act/Workmen's Compensation Act.",
        "3": "Section 3: Terms and conditions. Terms and conditions of a civil servant shall be as provided in this Act and the rules.",
        "4": "Section 4: Tenure of office. Every civil servant shall hold office during the pleasure of the President.",
        "5": "Section 5: Appointments. Appointments to an All-Pakistan Service or to a civil service of the Federation shall be made by the President or an authorized person.",
        "6": "Section 6: Probation. An appointment to a service or post by initial appointment, promotion or transfer shall be on probation.",
        "7": "Section 7: Confirmation. A person appointed on probation shall be confirmed after satisfactory completion of the period of probation.",
        "8": "Section 8: Seniority. Seniority in a service or post is governed by rules; seniority is not a vested right.",
        "9": "Section 9: Promotion. A civil servant possessing such minimum qualifications as may be prescribed shall be eligible for promotion to a higher post. Promotion is made on seniority-cum-fitness or selection basis.",
        "10": "Section 10: Posting and transfer. Every civil servant is liable to serve anywhere within or outside Pakistan in any post under the Federal Government, Provincial Government, or local authority.",
        "11": "Section 11: Termination of service. Service of a temporary or probationer civil servant may be terminated on prescribed notice or pay in lieu.",
        "13": "Section 13: Retirement from service. A civil servant shall retire from service on completion of the sixtieth year of his age (superannuation), or after completion of 20 years of service on direction of competent authority in public interest.",
        "14": "Section 14: Employment after retirement. Re-employment beyond age of superannuation shall not be made except in public interest and with approval of President/competent authority.",
        "19": "Section 19: Right to pension and gratuity. On retirement from service, a civil servant is entitled to receive such pension or gratuity as may be prescribed."
      }
    },

    constitution_1973: {
      name: "The Constitution of the Islamic Republic of Pakistan, 1973",
      articles: {
        "8": "Article 8: Laws inconsistent with or in derogation of Fundamental Rights to be void.",
        "9": "Article 9: Security of person. No person shall be deprived of life or liberty save in accordance with law.",
        "10A": "Article 10A: Right to fair trial and due process of law (Inserted by 18th Amendment 2010).",
        "14": "Article 14: Inviolability of dignity of man and privacy of home.",
        "19": "Article 19: Freedom of speech, expression, and freedom of the press, subject to reasonable restrictions.",
        "19A": "Article 19A: Right to information in all matters of public importance (Inserted by 18th Amendment).",
        "25": "Article 25: Equality of citizens before law and equal protection of law; no discrimination on grounds of sex alone.",
        "25A": "Article 25A: Right to free and compulsory education for all children aged 5 to 16 years.",
        "153": "Article 153: Council of Common Interests (CCI). Comprises Prime Minister, four Provincial Chief Ministers, and three Federal Ministers nominated by Prime Minister.",
        "154": "Article 154: Functions of CCI. Formulates and regulates policies in relation to matters in Part II of Federal Legislative List; reports annually to Parliament.",
        "160": "Article 160: National Finance Commission (NFC). Constituted every 5 years; makes recommendations for distribution of taxes between Federation and Provinces. Clause (3B) provides that the share of Provinces in each recommendation shall not be less than the share given in the previous Award.",
        "175A": "Article 175A: Appointment of Judges of Supreme Court and High Courts. As amended by 26th Amendment 2024, Chief Justice of Pakistan is appointed from among the 3 most senior Supreme Court judges by a 12-member Special Parliamentary Committee for a 3-year term.",
        "184": "Article 184: Original Jurisdiction of Supreme Court. Under 184(3), court enforces Fundamental Rights of public importance. Under 26th Amendment, suo motu jurisdiction is curtailed and heard by Constitutional Benches.",
        "191A": "Article 191A: Constitutional Benches of Supreme Court. Dedicated benches established under 26th Amendment to exclusively hear original, appellate, and advisory constitutional petitions."
      }
    },

    peco_2016: {
      name: "Prevention of Electronic Crimes Act (PECA), 2016",
      keySections: {
        "3": "Unauthorized access to information system or data (Hacking).",
        "10": "Cyber-terrorism: Committing computer offenses to threaten sovereignty or create fear in public.",
        "11": "Hate speech: Inter-faith, sectarian, or ethnic hatred online.",
        "13-14": "Electronic forgery and electronic fraud: Creating fraudulent documents or obtaining financial benefits falsely.",
        "16": "Unauthorized use of identity information (Identity theft).",
        "20": "Offences against dignity of a natural person (Online defamation/harassment).",
        "29": "Retention of traffic data: Service providers must retain traffic data for minimum 90 days."
      }
    },

    nao_1999: {
      name: "National Accountability Ordinance (NAO), 1999",
      keySections: {
        "9": "Corruption and Corrupt Practices: Defined in 12 subsections including kickbacks, assets beyond means, misuse of authority, and default on bank loans.",
        "10": "Punishment for corruption: Rigorous imprisonment up to 14 years and fine.",
        "25": "Voluntary Return (VR) and Plea Bargaining (PB): Chairman NAB may accept discharge of liability on full restitution of embezzled funds."
      }
    }
  },

  economics: {
    gdp_growth: "2.38% (rebounding from -0.21% in FY23)",
    agriculture_growth: "6.25% bumper crop yield (wheat, cotton, rice)",
    industrial_growth: "-1.21% contraction due to high policy rates and import restrictions",
    inflation: "CPI averaged 28.5% in FY24, declining towards single digits by late 2024",
    policy_rate: "Peaked at 22% before gradual phased monetary easing by SBP",
    fx_reserves: "Over $9.5 billion held by SBP through IMF disbursements and bilateral rollovers",
    remittances: "Surpassed $27 billion in FY24 (primarily from Saudi Arabia, UAE, UK, USA)",
    public_debt: "Total public debt recorded at Rs. 67.5 trillion by March 2024 (~74% of GDP)",
    imf_program: "37-Month, $7 Billion Extended Fund Facility (EFF) approved September 2024"
  },

  grammar_rules: {
    active_passive: "Transitive verbs only. Active: S + V + O. Passive: O + be (appropriate tense) + Past Participle (V3) + by + S.",
    direct_indirect: "Tense shifts backward when reporting verb is in past: Present Simple -> Past Simple; Present Perfect -> Past Perfect; Past Simple -> Past Perfect. Pronouns and time words change (now -> then, yesterday -> the previous day).",
    prepositions: "Static position in enclosed space: 'in'. Surface: 'on'. Specific point/time: 'at'. Movement into: 'into'. Movement onto: 'onto'. Two parties: 'between'. Three or more: 'among'. Accompanied by: 'with'. Cause/Agent: 'by'.",
    dangling_modifier: "A modifier must immediately precede or follow the noun it modifies. Error: 'Walking down the street, the trees were beautiful.' Correct: 'Walking down the street, I saw that the trees were beautiful.'"
  }
};

console.log('AI Knowledge Base initialized successfully with Laws, Economics & Grammar.');
