const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../frontend/js/ai_knowledge_base.js');
let content = fs.readFileSync(filePath, 'utf8');

const lawsToAdd = `    aml_act_2010: {
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
`;

const targetAnchor = 'fia_act_1974: {';
const insertIdx = content.indexOf(targetAnchor);

if (insertIdx !== -1) {
    const updatedContent = content.slice(0, insertIdx) + lawsToAdd + content.slice(insertIdx);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log('Successfully updated ai_knowledge_base.js with all 5 new statutory frameworks!');
} else {
    console.error('Could not locate targetAnchor in ai_knowledge_base.js');
}
