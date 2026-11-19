const fs = require('fs');
const path = require('path');

console.log('--- Generating Self-Contained frontend/js/data_crpc.js ---');

const fullQuizQuestions = [
  {
    q: "According to the landmark Supreme Court judgment in Sughra Bibi v. State (PLD 2018 SC 595), if a counter-version of the same occurrence is presented, what must the police do?",
    opts: [
      "Register a mandatory second FIR",
      "Record the counter-version as a statement under Section 161 CrPC in the same investigation",
      "Refuse to record any counter-version without High Court permission",
      "Send both parties to Civil Court"
    ],
    ans: 1,
    exp: "The Supreme Court held that only one FIR is permissible for one occurrence; any rival or counter-version must be investigated under Section 161 CrPC as part of the same crime diary."
  },
  {
    q: "Under Section 162 of the CrPC, statements of witnesses recorded by police under Section 161 CrPC:",
    opts: [
      "Must be signed by the witness under oath",
      "Shall NOT be signed by the person making it, and cannot be used for any purpose except to contradict the witness",
      "Are conclusive proof of guilt",
      "Can only be recorded in the presence of a Magistrate"
    ],
    ans: 1,
    exp: "Section 162 CrPC strictly prohibits the signing of statements recorded under Section 161 and limits their use to contradicting the witness under the Qanun-e-Shahadat Order."
  },
  {
    q: "What is the maximum aggregate period of police physical remand that a Magistrate can grant under Section 167 CrPC?",
    opts: ["7 Days", "14 Days", "30 Days", "90 Days"],
    ans: 1,
    exp: "Under Section 167 CrPC, the maximum total period of police physical custody cannot exceed fourteen (14) days in aggregate."
  },
  {
    q: "Within how many days from the registration of an FIR is the police required to submit the Police Report (Challan) under Section 173 CrPC?",
    opts: ["7 Days", "14 Days", "30 Days", "60 Days"],
    ans: 1,
    exp: "Section 173(1) CrPC mandates the submission of the police report within fourteen (14) days from the date of recording of the FIR."
  },
  {
    q: "Under Section 241A and 265C CrPC, how many days before framing of the charge must copies of statements and documents be delivered to the accused?",
    opts: ["At least 24 hours", "At least 3 days", "At least 7 days", "At least 14 days"],
    ans: 2,
    exp: "Sections 241A and 265C CrPC explicitly require that copies must be supplied to the accused at least seven (7) days before the framing of the formal charge."
  },
  {
    q: "What is the legal consequence if an incriminating piece of prosecution evidence is NOT put to the accused during his Section 342 CrPC examination?",
    opts: [
      "The accused is immediately retried by a military court",
      "The unput evidence cannot be relied upon or used against the accused in the final judgment",
      "The defence counsel is disbarred",
      "The case is remanded back to the police for fresh FIR"
    ],
    ans: 1,
    exp: "Supreme Court jurisprudence consistently holds that any incriminating circumstance not put to the accused under Section 342 CrPC must be excluded from consideration."
  },
  {
    q: "When a Sessions Court awards capital punishment (death sentence), what mandatory procedural step must occur under Section 374 CrPC before execution?",
    opts: [
      "Governor must sign execution warrant within 48 hours",
      "Sentence must be confirmed by the High Court via Murder Reference",
      "Federal Cabinet must vote by two-thirds majority",
      "Police Inspector General must re-investigate the crime"
    ],
    ans: 1,
    exp: "Section 374 CrPC mandates that when a Court of Session passes a death sentence, proceedings must be submitted to the High Court and cannot be executed until confirmed."
  },
  {
    q: "Under Section 439(4) of the CrPC, what is the High Court strictly prohibited from doing in exercise of its Revisional Jurisdiction?",
    opts: [
      "Reducing a sentence of imprisonment",
      "Converting a finding of acquittal into one of conviction",
      "Calling for the record of an inferior court",
      "Ordering re-trial of a case"
    ],
    ans: 1,
    exp: "Section 439(4) CrPC explicitly bars the High Court from converting a finding of acquittal into one of conviction in revisional jurisdiction."
  },
  {
    q: "Under Section 497(1) of CrPC, bail in non-bailable offences shall NOT ordinarily be granted if there are reasonable grounds for believing that the accused has committed an offence punishable with:",
    opts: [
      "Fine of Rs. 100,000",
      "Imprisonment for 3 years",
      "Death, imprisonment for life, or imprisonment for 10 years (Prohibitory Clause)",
      "Simple imprisonment of 6 months"
    ],
    ans: 2,
    exp: "The prohibitory clause of Section 497(1) CrPC bars bail if there are reasonable grounds that accused committed an offence punishable with death, imprisonment for life, or 10 years."
  },
  {
    q: "What is an indispensable legal prerequisite for granting Pre-Arrest (Anticipatory) Bail under Section 498 CrPC as laid down by the Supreme Court?",
    opts: [
      "Payment of 50% of the disputed amount into court",
      "Proof of ulterior motives, mala fides, or harassment aimed at causing unjustified arrest and humiliation",
      "Consent of the complainant in writing",
      "Approval of the Provincial Law Department"
    ],
    ans: 1,
    exp: "Pre-arrest bail under Section 498 CrPC is an extraordinary relief granted only upon showing *mala fide*, ulterior motive, or harassment on part of police or complainant."
  },
  {
    q: "Which section of the CrPC empowers the High Court to exercise its Inherent Powers to prevent abuse of the process of any court or to secure the ends of justice (Quashment of FIR / Proceedings)?",
    opts: ["Section 249-A", "Section 491", "Section 526", "Section 561-A"],
    ans: 3,
    exp: "Section 561-A CrPC preserves the inherent powers of the High Court to make such orders as may be necessary to prevent abuse of the process of any court or to secure the ends of justice."
  },
  {
    q: "Under Section 491 of the CrPC, the High Court exercises directions of the nature of which constitutional writ?",
    opts: ["Writ of Quo Warranto", "Writ of Habeas Corpus (direction to set at liberty persons illegally detained)", "Writ of Certiorari", "Writ of Mandamus"],
    ans: 1,
    exp: "Section 491 CrPC provides statutory power to issue directions of the nature of Habeas Corpus to release persons illegally or improperly detained in public or private custody."
  },
  {
    q: "Under Section 345 of the CrPC, compounding an offence of Qatl-e-Amd (murder under Section 302 PPC) requires the compromise / waiver of:",
    opts: [
      "The local police station SHO",
      "All adult heirs (Walis) of the victim in accordance with the Injunctions of Islam (subject to Section 311 Tazir)",
      "The Chief Minister of the Province",
      "The trial court judge acting alone without heirs' consent"
    ],
    ans: 1,
    exp: "Section 345 CrPC read with Sections 309, 310, and 311 PPC requires the waiver (Afw) or compromise (Sulh) by the legal heirs (Walis) of the victim."
  },
  {
    q: "Under Section 22-A and 22-B of the CrPC, who acts as the Ex-Officio Justice of the Peace in each district?",
    opts: [
      "Deputy Commissioner (DC)",
      "Sessions Judge and Additional Sessions Judges nominated by the High Court",
      "Superintendent of Police (SP)",
      "President of District Bar Association"
    ],
    ans: 1,
    exp: "Under Section 22-A(1) CrPC, the Sessions Judge and Additional Sessions Judges exercise powers of Ex-Officio Justice of the Peace."
  },
  {
    q: "What is the primary difference between Discharge of an accused under Section 173 CrPC and Acquittal under Section 245 or 249-A CrPC?",
    opts: [
      "Discharge is by the High Court; Acquittal is by police",
      "Discharge does not bar subsequent prosecution upon discovery of fresh evidence; Acquittal bars retrial under Article 13 of Constitution & Section 403 CrPC (Double Jeopardy)",
      "Discharge requires payment of a fine; Acquittal does not",
      "There is no legal difference between discharge and acquittal"
    ],
    ans: 1,
    exp: "Discharge is an administrative/investigative release which does not amount to a trial verdict; Acquittal is a judicial verdict of innocence that permanently bars retrial under Section 403 CrPC (Autrefois acquit / Double Jeopardy)."
  }
];

const crpcData = {
  metadata: {
    actTitle: "The Code of Criminal Procedure, 1898 (Act V of 1898)",
    enactmentDate: "22nd March 1898",
    commencementDate: "1st July 1898",
    scope: "Procedural machinery governing detection, investigation, inquiry, trial, appeal and execution of criminal cases in Pakistan",
    totalSections: 565,
    totalSchedules: 5,
    majorMilestones: "Separation of Judiciary from Executive (Ordinance XXXVII of 2001), Insertion of Sections 22A & 22B (Justice of Peace), Police Order 2002, Criminal Law (Amendment) Act 2016, Anti-Rape Act 2021"
  },
  kpis: {
    stages: "8 Chronological Stages",
    stagesDesc: "From FIR / Complaint initiation to final Supreme Court Appeal",
    dualPath: "Dual Pathways",
    dualPathDesc: "State Case (FIR Sec 154) vs Private Complaint (Istaghasa Sec 200)",
    criticalSections: "50+ Core Sections",
    criticalSectionsDesc: "Essential statutory benchmarks mapped with mandatory deadlines",
    quizQuestions: "15 Master MCQs",
    quizQuestionsDesc: "Procedural, bail, remands, trial & appellate MCQs with audio synthesis"
  },
  pathways: {
    policeCase: {
      name: "Path A: State / Police Case (FIR via Sec 154 CrPC)",
      description: "Initiated by lodging First Information Report (FIR) of a cognizable offence at a Police Station under Section 154 CrPC. Investigated by Police, prosecuted by State Public Prosecutor.",
      icon: "fa-shield-halved",
      color: "#1d4ed8"
    },
    privateComplaint: {
      name: "Path B: Direct Private Complaint (Istaghasa via Sec 200 CrPC)",
      description: "Initiated by aggrieved citizen directly before a Judicial Magistrate under Section 200 CrPC when police refuses FIR or case involves private dispute / cross-version.",
      icon: "fa-scale-balanced",
      color: "#0f766e"
    }
  },
  stages: [
    {
      step: 1,
      id: "stage-1-initiation",
      title: "Stage 1: Initiation of Criminal Proceedings",
      subtitle: "FIR under Section 154 vs Private Complaint under Section 200",
      category: "Initiation",
      path: "Both",
      sections: ["154", "155", "156", "200", "202", "203", "204", "22A", "22B"],
      keyActors: ["Informant / Complainant", "Officer In-charge of Police Station (SHO)", "Judicial Magistrate", "Justice of Peace (Sessions Judge)"],
      statutoryTimelines: [
        "FIR must be registered IMMEDIATELY upon disclosure of a cognizable offence without preliminary inquiry (Sughra Bibi 2018).",
        "Non-cognizable offence: Must be entered in Daily Diary (Roznamcha) under Section 155; police cannot investigate without Magistrate's order."
      ],
      legalPrerequisites: [
        "Disclosure of a Cognizable Offence (Schedule II CrPC).",
        "Oral statement reduced to writing, read over, signed by informant, and entered in Register No. 1 (FIR Form).",
        "Free copy of FIR must be given forthwith to the informant.",
        "Private Complaint route: Complainant examined on oath under Sec 200 CrPC; Magistrate may order inquiry/investigation under Sec 202 before issuing process."
      ],
      remediesIfRefused: [
        "Application to Ex-Officio Justice of Peace under Section 22A(6) CrPC (Sessions Judge / AD&SJ) for direction to police to register FIR.",
        "Constitutional Writ of Mandamus under Article 199 before the High Court.",
        "Filing a Direct Private Complaint (Istaghasa) under Section 200 CrPC before the Judicial Magistrate."
      ],
      essentialDocuments: ["First Information Report (FIR - Form 24.5(1))", "Police Daily Diary (Roznamcha - Register No. 2)", "Private Complaint (Istaghasa)", "Section 22-A CrPC Petition"],
      landmarkPrecedents: "Sughra Bibi v. State (PLD 2018 SC 595 - Full Bench): The Supreme Court ruled that only ONE FIR can be registered for a single occurrence; no second FIR is maintainable. Any cross-version or subsequent statement must be recorded under Section 161 CrPC during the same investigation.",
      mcq: {
        q: "According to the landmark Supreme Court judgment in Sughra Bibi v. State (PLD 2018 SC 595), if a counter-version of the same occurrence is presented, what must the police do?",
        opts: [
          "Register a mandatory second FIR",
          "Record the counter-version as a statement under Section 161 CrPC in the same investigation",
          "Refuse to record any counter-version without High Court permission",
          "Send both parties to Civil Court"
        ],
        ans: 1,
        exp: "The Supreme Court held that only one FIR is permissible for one occurrence; any rival or counter-version must be investigated under Section 161 CrPC as part of the same crime diary."
      }
    },
    {
      step: 2,
      id: "stage-2-investigation",
      title: "Stage 2: Police Investigation & Evidence Collection",
      subtitle: "Inspection, Witness Statements (161), Searches & Recoveries (103)",
      category: "Investigation",
      path: "Police Case",
      sections: ["156", "157", "160", "161", "162", "165", "103", "172"],
      keyActors: ["Investigating Officer (IO)", "Forensic Crime Scene Unit", "Eye-Witnesses", "Respectable Local Inhabitants (Mashiran)"],
      statutoryTimelines: [
        "Investigation begins immediately upon registration of FIR under Section 156 CrPC.",
        "Police Diary (Zimni) under Section 172 must be recorded day by day with exact times and locations of every step taken."
      ],
      legalPrerequisites: [
        "Site Plan (Naqsha Mouqa): Prepared by IO with rough notes, scaled map by revenue patwari.",
        "Statements of Witnesses under Section 161 CrPC: Recorded orally by IO. Critical Rule: Statements under 161 are NEVER signed by the witness (Sec 162 CrPC) and cannot be used in substantive evidence, only to contradict witness under Art 140 QSO 1984.",
        "Search & Recovery Memos (Fard Makboozgi - Sec 103 CrPC): Search of places must be conducted in the presence of TWO OR MORE RESPECTABLE INHABITANTS of the locality who sign the recovery memo.",
        "Case Diaries (Zimni - Sec 172 CrPC): Kept in chronological bound volume; accused cannot inspect police diaries except when refreshed by police witness under Art 155 QSO."
      ],
      remediesIfRefused: [
        "Application to Superintendent of Police (SP Investigation) under Police Order 2002 for change of investigation if IO is biased or corrupt.",
        "District Police Complaint Authority or High Court writ for fair and transparent investigation."
      ],
      essentialDocuments: ["Case Diary (Zimni - Sec 172)", "Witness Statements (Sec 161)", "Recovery Memo (Fard-e-Baramadgi - Sec 103)", "Site Inspection Plan (Naqsha Mouqa)", "Medico-Legal Certificate (MLC) / Autopsy Report"],
      landmarkPrecedents: "Akhtar Ali v. State (2008 SCMR 6): Failure to associate two respectable inhabitants of the locality during recovery under Section 103 CrPC renders the recovery highly doubtful unless police prove that local civilians were unavailable despite genuine efforts.",
      mcq: {
        q: "Under Section 162 of the CrPC, statements of witnesses recorded by police under Section 161 CrPC:",
        opts: [
          "Must be signed by the witness under oath",
          "Shall NOT be signed by the person making it, and cannot be used for any purpose except to contradict the witness",
          "Are conclusive proof of guilt",
          "Can only be recorded in the presence of a Magistrate"
        ],
        ans: 1,
        exp: "Section 162 CrPC strictly prohibits the signing of statements recorded under Section 161 and limits their use to contradicting the witness under the Qanun-e-Shahadat Order."
      }
    },
    {
      step: 3,
      id: "stage-3-arrest-remand",
      title: "Stage 3: Arrest, Physical Remand & Judicial Confessions",
      subtitle: "24-Hour Production, Sec 167 Remand Cap, Sec 164 Confession Safeguards",
      category: "Custody & Remand",
      path: "Police Case",
      sections: ["54", "61", "164", "167", "364", "496", "497", "498"],
      keyActors: ["Arrested Accused", "Investigating Officer", "Judicial Magistrate", "Defence Counsel"],
      statutoryTimelines: [
        "Accused MUST be produced before nearest Judicial Magistrate within TWENTY-FOUR (24) HOURS of arrest excluding journey time (Sec 61 CrPC & Art 10(2) Constitution).",
        "Physical Remand under Section 167 CrPC: Maximum total period CANNOT exceed FOURTEEN (14) DAYS in aggregate; thereafter, remand must be purely judicial (jail custody)."
      ],
      legalPrerequisites: [
        "Physical Remand (Hirasat-e-Police - Sec 167): Granted only on genuine investigative necessity (e.g. recovery of crime weapon, stolen goods, co-accused clue). Magistrate must record special reasons in writing.",
        "Judicial Confession under Section 164 & 364 CrPC: Can only be recorded by a Judicial Magistrate. Mandatory Safeguards: (1) All police officers sent out of courtroom, (2) Handcuffs removed, (3) Minimum 2–3 hours reflection time given in judicial custody, (4) Explicit warning that Magistrate is not police and confession will be used against him, (5) Magistrate signs certificate of voluntary statement.",
        "Test Identification Parade (TIP): Conducted before Magistrate under Art 22 QSO 1984 with at least 8–10 dummy persons of similar age/appearance for each accused."
      ],
      remediesIfRefused: [
        "Revision against unlawful remand order before Sessions Judge.",
        "Pre-Arrest Bail (Anticipatory Bail - Sec 498 CrPC) before Sessions Court or High Court on grounds of *mala fide* or imminent humiliation.",
        "Post-Arrest Bail (Sec 497 CrPC) on grounds of further inquiry (Sec 497(2)), lack of reasonable grounds, or statutory delay."
      ],
      essentialDocuments: ["Remand Application (Darakhwast Remand)", "Judicial Remand Warrant (Robkar)", "Section 164 Confession Record & Certificate", "Identification Parade Memo (Fard Shanakht)"],
      landmarkPrecedents: "Hashim Qureshi v. State (PLD 2021 SC 876) & Ghulam Sarwar v. State (PLD 1984 SC 333): A judicial confession under Section 164 CrPC is a solemn act; failure to remove handcuffs or failure to give adequate cooling time to the accused vitiates the confession completely.",
      mcq: {
        q: "What is the maximum aggregate period of police physical remand that a Magistrate can grant under Section 167 CrPC?",
        opts: ["7 Days", "14 Days", "30 Days", "90 Days"],
        ans: 1,
        exp: "Under Section 167 CrPC, the maximum total period of police physical custody cannot exceed fourteen (14) days in aggregate."
      }
    },
    {
      step: 4,
      id: "stage-4-challan",
      title: "Stage 4: Police Report / Challan Submission",
      subtitle: "Final Report under Section 173 CrPC, Scrutiny by Prosecutor & 14-Day Rule",
      category: "Challan Submission",
      path: "Police Case",
      sections: ["173", "190", "193"],
      keyActors: ["Investigating Officer (IO)", "District Public Prosecutor (DPP)", "Judicial Magistrate", "Sessions Judge"],
      statutoryTimelines: [
        "Police Report (Challan) MUST be forwarded to Magistrate through Public Prosecutor within FOURTEEN (14) DAYS from the date of recording of FIR.",
        "Interim Challan (Challan-e-Na-Mukammal): If investigation cannot be completed in 14 days, IO must submit an interim report within 3 days thereafter."
      ],
      legalPrerequisites: [
        "Scrutiny by Public Prosecutor: Under Provincial Criminal Prosecution Service Acts, Prosecutor examines report for legal defects before forwarding to Court.",
        "The Seven Columns of Police Challan (Form 25.56):",
        "- Column 1: Complainant name and particulars.",
        "- Column 2: Accused persons not arrested / declared innocent / discharged.",
        "- Column 3: Accused persons in custody (judicial lockup).",
        "- Column 4: Accused persons on bail.",
        "- Column 5: Stolen/recovered property and crime weapons.",
        "- Column 6: Complete list of prosecution witnesses (eye-witnesses, doctors, police).",
        "- Column 7: Brief facts of the case and opinion of the Investigating Officer.",
        "Magistrate Cognizance (Sec 190 CrPC): Magistrate may agree with police or disagree (Magistrate is not bound by police opinion and can summon persons placed in Column 2)."
      ],
      remediesIfRefused: [
        "Accused placed in Column 2 can be summoned by Court if prima facie evidence exists.",
        "Complainant can challenge discharge/cancellation report before High Court."
      ],
      essentialDocuments: ["Police Report (Challan - Form No. 25.56(1))", "Interim Challan", "Prosecutor Scrutiny Sheet", "Cancellation Report / Discharge Report (Ikhraj)"],
      landmarkPrecedents: "Waqar Ahmed v. State (PLD 2017 SC 645): The Magistrate or Trial Court is not bound by the opinion of the Investigating Officer in Column 2; if the record reveals reasonable grounds, the Court can summon and try the discharged accused.",
      mcq: {
        q: "Within how many days from the registration of an FIR is the police required to submit the Police Report (Challan) under Section 173 CrPC?",
        opts: ["7 Days", "14 Days", "30 Days", "60 Days"],
        ans: 1,
        exp: "Section 173(1) CrPC mandates the submission of the police report within fourteen (14) days from the date of recording of the FIR."
      }
    },
    {
      step: 5,
      id: "stage-5-charge",
      title: "Stage 5: Pre-Trial Scrutiny & Framing of Formal Charge",
      subtitle: "Supply of Copies (241A / 265C), Framing of Charge & Sec 249A / 265K Discharge",
      category: "Charge Framing",
      path: "Both",
      sections: ["221", "222", "223", "227", "241A", "242", "243", "249A", "265C", "265D", "265E", "265K"],
      keyActors: ["Trial Judge (Magistrate or Sessions Judge)", "Accused", "Public Prosecutor", "Defence Counsel"],
      statutoryTimelines: [
        "Free copies of police report, statements under 161 and 164, and all recovery memos MUST be supplied to accused at least SEVEN (7) DAYS before framing of charge (Sec 241A for Magistrate; Sec 265C for Sessions Court)."
      ],
      legalPrerequisites: [
        "Supply of Copies (Aqlam-e-Challan): Fundamental constitutional requirement of fair trial under Article 10A.",
        "Framing of Formal Charge (Fard-e-Jurm - Sec 221-223): Must state the specific offence, section of law, date, time, location, and manner of commission.",
        "Reading over Charge to Accused: Court reads and explains charge in accused's language; asks: 'Do you plead guilty or do you claim trial?'",
        "Plea of Guilty (Sec 243 / 265E): If accused pleads guilty voluntarily, court records exact words and may in its discretion convict.",
        "Preliminary Discharge / Acquittal at Pre-Trial Stage:",
        "- Section 249-A CrPC (in Magistrate Court): Power to acquit accused at ANY STAGE of trial if charge is groundless or no probability of conviction.",
        "- Section 265-K CrPC (in Court of Session): Power to acquit accused at ANY STAGE after hearing prosecutor and accused if no probability of conviction exists."
      ],
      remediesIfRefused: [
        "Revision against refusal to acquit under Section 249-A / 265-K CrPC before High Court.",
        "Quashment of criminal proceedings under Section 561-A CrPC before High Court."
      ],
      essentialDocuments: ["Acknowledgment of Copies under Sec 241A/265C", "Formal Charge Sheet (Fard-e-Jurm)", "Plea of Accused Record", "Application under Sec 249-A / 265-K CrPC"],
      landmarkPrecedents: "Bashir Ahmad v. State (PLD 2022 SC 112) & State v. Asif Ali Zardari (1994 SCMR 798): Sections 249-A and 265-K confer wide powers on trial courts to filter out malicious or groundless prosecutions at the threshold without dragging the accused through a prolonged trial.",
      mcq: {
        q: "Under Section 241A and 265C CrPC, how many days before framing of the charge must copies of statements and documents be delivered to the accused?",
        opts: ["At least 24 hours", "At least 3 days", "At least 7 days", "At least 14 days"],
        ans: 2,
        exp: "Sections 241A and 265C CrPC explicitly require that copies must be supplied to the accused at least seven (7) days before the framing of the formal charge."
      }
    },
    {
      step: 6,
      id: "stage-6-trial-evidence",
      title: "Stage 6: The Trial & Recording of Evidence",
      subtitle: "Prosecution Evidence (PE), Cross-Examination, Sec 342 Examination & Defence Evidence (DE)",
      category: "Trial Evidence",
      path: "Both",
      sections: ["244", "265F", "340", "342", "344", "353", "364"],
      keyActors: ["Trial Judge", "Prosecution Witnesses (PWs)", "Medico-Legal Officer", "Investigating Officer", "Defence Counsel", "Accused"],
      statutoryTimelines: [
        "Day-to-day trial: Section 344 CrPC provides that trial proceedings should continue from day to day until all witnesses are examined; adjournments must be for recorded reasons."
      ],
      legalPrerequisites: [
        "Three Stages of Witness Examination (Art 132–133 QSO 1984):",
        "1. Examination-in-Chief: By the party calling the witness.",
        "2. Cross-Examination: By the adverse party to test veracity, accuracy, and credibility.",
        "3. Re-Examination: By calling party to explain ambiguities arising during cross-examination.",
        "Recording of Evidence in Presence of Accused (Sec 353 CrPC): All evidence must be recorded in open court in the presence of the accused or his pleader.",
        "Examination of Accused under Section 342 CrPC: The most critical procedural safeguard. Court questions accused without oath. MANDATORY RULE: Every single incriminating circumstance must be put to the accused; if an incriminating item (e.g. recovery report, DNA, TIP) is not put to accused under 342, it CANNOT be used in judgment!",
        "Accused as Witness on Oath (Sec 340(2) CrPC): Accused can elect to appear as a witness in his own defence on oath (subject to cross-examination).",
        "Defence Evidence (D.E. - Sec 244(2) / 265F(7)): Accused may produce defence witnesses and documentary exhibits."
      ],
      remediesIfRefused: [
        "Recalling and re-examining witnesses under Section 540 CrPC (court's overriding power to summon any essential witness at any stage).",
        "Transfer of case under Section 526 CrPC if judge shows personal bias."
      ],
      essentialDocuments: ["Depositions of PWs (Bayanaat)", "Cross-Examination Records", "Exhibit Marks (Ex.P-1, Ex.D-1)", "Section 342 Questionnaire & Accused Answers", "Defence Witness Depositions (DWs)"],
      landmarkPrecedents: "Qaddafi v. State (PLD 2017 SC 692): Any piece of incriminating evidence not specifically put to the accused during his examination under Section 342 CrPC is excluded from consideration and cannot form the basis of conviction.",
      mcq: {
        q: "What is the legal consequence if an incriminating piece of prosecution evidence is NOT put to the accused during his Section 342 CrPC examination?",
        opts: [
          "The accused is immediately retried by a military court",
          "The unput evidence cannot be relied upon or used against the accused in the final judgment",
          "The defence counsel is disbarred",
          "The case is remanded back to the police for fresh FIR"
        ],
        ans: 1,
        exp: "Supreme Court jurisprudence consistently holds that any incriminating circumstance not put to the accused under Section 342 CrPC must be excluded from consideration."
      }
    },
    {
      step: 7,
      id: "stage-7-judgment",
      title: "Stage 7: Final Arguments & Pronouncement of Judgment",
      subtitle: "Final Arguments (Bahis), Acquittal vs Conviction & Sec 374 Capital Reference",
      category: "Judgment",
      path: "Both",
      sections: ["245", "265H", "366", "367", "368", "369", "374", "376"],
      keyActors: ["Trial Judge", "Public Prosecutor", "Defence Counsel", "Convict / Acquitted Citizen"],
      statutoryTimelines: [
        "Judgment must be pronounced in open court immediately after termination of trial or at some subsequent time with notice to parties (Sec 366 CrPC).",
        "Certified copy of judgment must be delivered to accused immediately, free of cost in cases of imprisonment (Sec 371 CrPC)."
      ],
      legalPrerequisites: [
        "Final Arguments: Public Prosecutor argues state case beyond reasonable doubt; defence counsel exposes doubts, contradictions, and absence of motive.",
        "Golden Rule of Criminal Jurisprudence: The prosecution must prove its case beyond reasonable shadow of doubt; single reasonable doubt entitles accused to ACQUITTAL as a matter of right (not grace).",
        "Contents of Judgment (Sec 367 CrPC): Must state points for determination, decision thereon, and reasons for decision.",
        "Two Dispositions:",
        "- ACQUITTAL (Baree): Accused is set at liberty; bail bonds discharged.",
        "- CONVICTION (Saza): Sentenced to death, imprisonment, fine, Qisas, Diyat, Arsh, or Daman.",
        "Mandatory Death Sentence Confirmation (Section 374 CrPC): When a Court of Session passes sentence of DEATH, the sentence CANNOT be executed unless CONFIRMED BY THE HIGH COURT (Division Bench Murder Reference under Sec 374/376)."
      ],
      remediesIfRefused: [
        "Statutory Appeal against Conviction before High Court (Sec 410 CrPC).",
        "Appeal against Acquittal by State or Complainant before High Court (Sec 417 CrPC)."
      ],
      essentialDocuments: ["Final Judgment & Order (Faisla)", "Warrant of Commitment (Sentencing Order / Robkar)", "Murder Reference Record under Sec 374 CrPC"],
      landmarkPrecedents: "Muhammad Akram v. State (2009 SCMR 230): For the purpose of giving benefit of doubt to an accused, more than one circumstance is not necessary; a single circumstance creating reasonable doubt in a prudent mind entitles the accused to acquittal.",
      mcq: {
        q: "When a Sessions Court awards capital punishment (death sentence), what mandatory procedural step must occur under Section 374 CrPC before execution?",
        opts: [
          "Governor must sign execution warrant within 48 hours",
          "Sentence must be confirmed by the High Court via Murder Reference",
          "Federal Cabinet must vote by two-thirds majority",
          "Police Inspector General must re-investigate the crime"
        ],
        ans: 1,
        exp: "Section 374 CrPC mandates that when a Court of Session passes a death sentence, proceedings must be submitted to the High Court and cannot be executed until confirmed."
      }
    },
    {
      step: 8,
      id: "stage-8-appeals-revision",
      title: "Stage 8: Post-Trial Remedies (Appeals, Revisions & Mercy)",
      subtitle: "Appeals (408/410/417), Revision (435/439), Inherent Powers (561-A) & Mercy Petitions",
      category: "Appeals & Revision",
      path: "Both",
      sections: ["408", "410", "417", "426", "435", "439", "491", "561A"],
      keyActors: ["High Court Division Bench", "Supreme Court of Pakistan", "President of Pakistan (Art 45)"],
      statutoryTimelines: [
        "Appeal against conviction (High Court): 30 to 60 days as per Limitation Act (Articles 150/155).",
        "Appeal against acquittal under Section 417(1) by Provincial Government: 6 months.",
        "Appeal against acquittal under Section 417(2) by private complainant: 30 days with special leave to appeal."
      ],
      legalPrerequisites: [
        "Appeals against Conviction:",
        "- From Magistrate 2nd/3rd class -> Court of Session (Sec 408).",
        "- From Magistrate 1st class with sentence > 4 years, or from Sessions Court -> HIGH COURT (Sec 410).",
        "Suspension of Sentence Pending Appeal (Sec 426 CrPC): Appellate court may release convict on bail pending decision of appeal.",
        "Appeal against Acquittal (Sec 417 CrPC): High threshold; appellate court will not interfere with acquittal unless judgment is arbitrary, perverse, or based on complete misreading of evidence.",
        "Revisional Jurisdiction (Sec 435 & 439 CrPC): High Court or Sessions Court examines legality, propriety, or correctness of trial court orders. Note: Revision cannot convert finding of acquittal into conviction (Sec 439(4)).",
        "Inherent Powers of High Court (Section 561-A CrPC): To prevent abuse of the process of any court and secure the ends of justice (used to quash frivolous FIRs and trials).",
        "Presidential Clemency (Article 45 of Constitution): Power to pardon, remit, or commute sentences (subject to Islamic provisions on Qisas/Diyat)."
      ],
      remediesIfRefused: [
        "Civil/Criminal Petition for Leave to Appeal (CPLA) before the Supreme Court under Article 185(3) of the Constitution.",
        "Review Petition before the Supreme Court under Article 188.",
        "Mercy Petition to the President of Pakistan under Article 45."
      ],
      essentialDocuments: ["Criminal Appeal Memo (under Sec 408/410/417)", "Application for Suspension of Sentence (Sec 426)", "Criminal Revision Petition (Sec 435/439)", "Quashment Petition under Sec 561-A CrPC", "Mercy Petition under Article 45"],
      landmarkPrecedents: "Mst. Shahnaz Begum v. Hon'ble Judges of High Court (PLD 1971 SC 677) & State v. Asif Ali Zardari: Inherent powers under Section 561-A CrPC are extraordinary and must be exercised sparingly to prevent abuse of the process of court, not to intercept genuine police investigations prematurely.",
      mcq: {
        q: "Under Section 439(4) of the CrPC, what is the High Court strictly prohibited from doing in exercise of its Revisional Jurisdiction?",
        opts: [
          "Reducing a sentence of imprisonment",
          "Converting a finding of acquittal into one of conviction",
          "Calling for the record of an inferior court",
          "Ordering re-trial of a case"
        ],
        ans: 1,
        exp: "Section 439(4) CrPC explicitly bars the High Court from converting a finding of acquittal into one of conviction in revisional jurisdiction."
      }
    }
  ],
  comparisons: [
    {
      title: "State Case (FIR Sec 154) vs Private Complaint (Istaghasa Sec 200)",
      summary: "Comparison of the two alternative avenues for setting criminal law into motion in Pakistan",
      points: [
        { feature: "Initiating Authority", fir: "Lodged with Police SHO at Police Station", complaint: "Filed directly before Judicial Magistrate" },
        { feature: "Scope of Offence", fir: "Restricted to Cognizable Offences only", complaint: "Applies to both Cognizable and Non-Cognizable Offences" },
        { feature: "Investigation Agency", fir: "Investigated by Police (Sec 156 CrPC)", complaint: "Inquiry by Magistrate or inquiry under Sec 202 CrPC" },
        { feature: "Prosecution Cost", fir: "State conducts prosecution through Public Prosecutor", complaint: "Complainant engages private counsel at own expense" },
        { feature: "Initial Oath", fir: "Informant does not take oath when lodging FIR", complaint: "Complainant is examined on OATH under Sec 200 CrPC" }
      ]
    },
    {
      title: "Physical Remand (Sec 167) vs Judicial Remand (Jail Custody)",
      summary: "Comparison of custody modes during pre-trial criminal investigation",
      points: [
        { feature: "Custody Location", physical: "Police Station lockup (Hawalat)", judicial: "Central / District Jail under prison superintendent" },
        { feature: "Purpose", physical: "Active investigation, weapon recovery, interrogation", judicial: "Safekeeping of accused pending Challan and trial" },
        { feature: "Statutory Cap", physical: "Maximum 14 DAYS in aggregate (Sec 167)", judicial: "Continues until granted bail or trial concludes" },
        { feature: "Access to Counsel", physical: "Subject to police presence and investigation schedule", judicial: "Unrestricted legal consultation inside prison meeting room" },
        { feature: "Judicial Scrutiny", physical: "Requires physical production before Magistrate every few days", judicial: "Produced on court dates or through video link" }
      ]
    },
    {
      title: "Sec 161 (Police Statement) vs Sec 164 (Judicial Confession) vs Sec 342 (Court Exam)",
      summary: "Comparison of the three distinct statements recorded in criminal procedure",
      points: [
        { feature: "Recorded By", s161: "Police Investigating Officer (IO)", s164: "Judicial Magistrate", s342: "Trial Judge (Magistrate / Sessions)" },
        { feature: "Oath Taken?", s161: "NO oath is administered", s164: "Witnesses on oath; Confession WITHOUT oath", s342: "NO oath (Accused examined without oath)" },
        { feature: "Signature", s161: "NEVER signed by witness (Sec 162)", s164: "Signed by person and Magistrate", s342: "Signed by accused and Trial Judge" },
        { feature: "Evidentiary Value", s161: "Cannot be used in evidence, only to contradict", s164: "Substantive piece of evidence against maker", s342: "Explanations considered; failure to put evidence excludes it" }
      ]
    },
    {
      title: "Section 249-A (Magistrate) vs Section 265-K (Court of Session)",
      summary: "Pre-trial and mid-trial acquittal powers of criminal courts in Pakistan",
      points: [
        { feature: "Competent Court", s249a: "Court of a Magistrate", s265k: "Court of Session or High Court" },
        { feature: "Stage of Exercise", s249a: "At ANY STAGE of case after hearing prosecutor/accused", s265k: "At ANY STAGE of case after hearing prosecutor/accused" },
        { feature: "Legal Grounds", s249a: "Charge is groundless, or no probability of conviction", s265k: "No probability of the accused being convicted of offence" },
        { feature: "Nature of Order", s249a: "ACQUITTAL (Order of acquittal, not mere discharge)", s265k: "ACQUITTAL (Order of acquittal, double jeopardy applies)" }
      ]
    }
  ],
  simulatorScenarios: [
    {
      id: "sim-1",
      scenarioTitle: "Scenario 1: Police Refusal to Register FIR",
      situation: "A citizen is robbed at gunpoint of his motorcycle and cash. He approaches the local police station, but the SHO refuses to register the FIR, claiming the incident was a civil dispute over loan repayment.",
      question: "What is the most effective and direct statutory remedy for the citizen under the CrPC?",
      choices: [
        { text: "File an application before the Ex-Officio Justice of Peace under Section 22A(6) CrPC", correct: true, exp: "Under Section 22A(6) CrPC, the Sessions Judge or Additional Sessions Judge (acting as Justice of Peace) can issue binding directions to the police to register an FIR upon disclosure of a cognizable offence." },
        { text: "Wait 6 months and file a civil suit for damages in civil court", correct: false, exp: "Civil suit does not set criminal machinery into motion for armed robbery." },
        { text: "Bribe the duty officer to change the daily diary", correct: false, exp: "Illegal act; CrPC provides legal remedies under 22A and Sec 200." },
        { text: "Lodge an appeal directly to the Supreme Court of Pakistan", correct: false, exp: "Supreme Court does not entertain direct FIR registration petitions when alternate statutory forums exist." }
      ]
    },
    {
      id: "sim-2",
      scenarioTitle: "Scenario 2: Excessive Physical Remand Request",
      situation: "The police arrest an accused in a theft case and have already kept him in physical custody for 14 days under successive remand orders. On the 15th day, the IO requests 4 more days of physical remand to recover the stolen laptop.",
      question: "How must the Judicial Magistrate decide the police application under Section 167 CrPC?",
      choices: [
        { text: "Grant the 4 additional days because recovery of stolen property is incomplete", correct: false, exp: "Section 167 CrPC sets a strict 14-day statutory cap on physical custody in aggregate." },
        { text: "Refuse physical remand and mandatorily commit the accused to judicial lockup (jail custody)", correct: true, exp: "Under Section 167 CrPC, police physical remand cannot exceed 14 days in aggregate; once 14 days elapse, the Magistrate MUST send the accused to judicial custody." },
        { text: "Discharge the accused from the case completely", correct: false, exp: "Investigation is ongoing; expiry of remand only changes custody from police to jail, it does not discharge the offence." },
        { text: "Transfer the case to an Anti-Terrorism Court", correct: false, exp: "Theft is not a scheduled terrorism offence." }
      ]
    },
    {
      id: "sim-3",
      scenarioTitle: "Scenario 3: Unput Evidence under Section 342 CrPC",
      situation: "During trial, the prosecution produces a forensic fingerprint report proving the accused's prints were on the crime weapon. However, during the accused's examination under Section 342 CrPC, the trial judge forgot to ask the accused any question regarding this fingerprint report.",
      question: "What is the legal standing of this fingerprint report in the final judgment?",
      choices: [
        { text: "The report remains valid because it is a scientific document", correct: false, exp: "Failure to put evidence to the accused under Section 342 violates fair trial principles." },
        { text: "The report CANNOT be relied upon or used to convict the accused", correct: true, exp: "Landmark Supreme Court rulings (Qaddafi v. State PLD 2017 SC 692) mandate that any incriminating circumstance not put to the accused under Section 342 CrPC must be excluded from judicial consideration." },
        { text: "The trial judge must be suspended immediately", correct: false, exp: "It is an evidentiary defect resulting in exclusion of the document, not immediate disciplinary suspension." },
        { text: "The defence counsel must be fined for not reminding the judge", correct: false, exp: "It is the statutory duty of the Court to examine the accused on every incriminating piece of evidence." }
      ]
    }
  ],
  fullQuiz: fullQuizQuestions
};

const outputPath = path.join(__dirname, '../frontend/js/data_crpc.js');
const fileContent = `/**
 * Code of Criminal Procedure, 1898 (CrPC) - Comprehensive Flowchart & Procedure Database
 * Academic & Professional Dataset for CSS, PMS, Judicial Services, Police & FIA Aspirants
 */

const CRPC_DATA = ${JSON.stringify(crpcData, null, 2)};

if (typeof window !== 'undefined') {
  window.CRPC_DATA = CRPC_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CRPC_DATA;
}
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated frontend/js/data_crpc.js! Size: ${(fileContent.length / 1024).toFixed(1)} KB`);
console.log(`Stages: ${crpcData.stages.length}, Comparisons: ${crpcData.comparisons.length}, Scenarios: ${crpcData.simulatorScenarios.length}, Full Quiz: ${crpcData.fullQuiz.length}`);
