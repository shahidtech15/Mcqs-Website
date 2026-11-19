const fs = require('fs');
const path = require('path');

console.log('--- Generating frontend/js/data_ppc.js ---');

const ppcData = {
  metadata: {
    actTitle: "The Pakistan Penal Code (Act XLV of 1860)",
    enactmentDate: "6th October 1860",
    commencementDate: "1st May 1861 (Originally enacted) / 1st January 1862",
    draftingCommission: "First Law Commission of India chaired by Thomas Babington Macaulay",
    totalChapters: 23,
    totalSections: 511,
    majorAmendments: "Criminal Law (Amendment) Act, 1990 & 1997 (Qisas & Diyat), Protection of Women Act 2006, Criminal Law (Amendment) (Offences in the Name of Honour) Act 2016, Anti-Rape (Investigation and Trial) Act 2021",
    schedulesCrPC: "Schedule II of Code of Criminal Procedure, 1898 determines Cognizability, Bailability, Compoundability and Trial Court"
  },
  kpis: {
    totalSections: "511 Sections",
    totalSectionsDesc: "Divided across 23 Chapters covering substantive criminal law",
    highYieldOffences: "45 Core Offences",
    highYieldOffencesDesc: "Selected for CSS, PMS, Judicial (Civil Judge/ASJ), FIA & Police Exams",
    qisasDiyat: "Qisas & Diyat System",
    qisasDiyatDesc: "Islamic penal provisions governing bodily injury and homicide (Sec 299-338)",
    crpcIntegration: "CrPC Schedule II Integration",
    crpcIntegrationDesc: "Cognizability, Bailability, Compoundability & Competent Forum mapped",
    categories: "8 Core Categories",
    categoriesDesc: "From General Exceptions to White Collar, Cyber, and Property Crimes"
  },
  offences: [
    // --- CHAPTER IV: GENERAL EXCEPTIONS (SECTIONS 76 - 106) ---
    {
      sec: "76",
      slug: "sec-76",
      chapter: "Chapter IV: General Exceptions",
      chapterNum: "IV",
      title: "Act done by a person bound, or by mistake of fact believing himself bound, by law",
      category: "General Exceptions",
      highYield: true,
      cognizable: false,
      bailable: true,
      compoundable: "Non-Compoundable",
      trialCourt: "Court by which offence is triable",
      crpcStatus: "Exculpatory Defence (Complete acquittal if proven)",
      ingredients: [
        "Act must be done by a person who is bound by law, OR",
        "A person who in good faith believes himself to be bound by law to do it.",
        "The belief must arise from a mistake of FACT, not a mistake of LAW (Ignorantia facti excusat, ignorantia juris non excusat).",
        "The act must be done in 'good faith' (defined in Sec 52 as done with due care and attention)."
      ],
      punishment: "Complete Exemption / Absolute Defence: No punishment; the act does not constitute an offence.",
      illustrations: [
        "A, a soldier, fires on a mob by the order of his superior officer, in conformity with the commands of the law. A has committed no offence under Section 76.",
        "A, an officer of a Court of Justice, being ordered by that Court to arrest Y, and, after due enquiry, believing Z to be Y, arrests Z. A has committed no offence."
      ],
      mensReaVsActusReus: "Absence of mens rea (guilty mind) due to bona fide factual error; legal obligation negates criminality.",
      precedents: "State v. Sheik Latif (PLD 1968 SC): An honest belief based on reasonable factual grounds excuses the act, but an erroneous view of legal provisions affords no defence.",
      examNotes: "Classic high-yield conceptual question in CSS Law and Civil Judge exams: Contrast Section 76 (bound by law) with Section 79 (justified by law). Both require mistake of FACT, not LAW.",
      mcqs: [
        {
          q: "Under Section 76 of the PPC, an act is excused when done under a mistake of:",
          opts: ["Law only", "Fact only, done in good faith", "Both Law and Fact", "Customary practice"],
          ans: 1,
          exp: "Section 76 explicitly applies to mistake of FACT in good faith believing oneself bound by law; mistake of law is never an excuse."
        }
      ]
    },
    {
      sec: "84",
      slug: "sec-84",
      chapter: "Chapter IV: General Exceptions",
      chapterNum: "IV",
      title: "Act of a person of unsound mind (Insanity Defence)",
      category: "General Exceptions",
      highYield: true,
      cognizable: false,
      bailable: true,
      compoundable: "Non-Compoundable",
      trialCourt: "Court by which offence is triable",
      crpcStatus: "Exculpatory Defence (McNaughten Rule statutory codification)",
      ingredients: [
        "The person committing the act was at the time of doing it of unsound mind.",
        "Such unsoundness of mind incapacitated the accused from knowing the nature of the act, OR",
        "Incapacitated him from knowing that he was doing what was either wrong or contrary to law.",
        "Legal insanity (not merely medical insanity, eccentricity, or temporary emotional surge) must be proved at the exact moment of the act."
      ],
      punishment: "Complete Exemption / Acquittal on grounds of insanity (Accused is dealt with under Chapter XXXIV of CrPC - Lunatics).",
      illustrations: [
        "A, under the influence of severe psychotic delusion that B is an inanimate wooden log, strikes B with an axe, killing him. A is incapable of knowing the nature of his act and is entitled to Section 84 defence.",
        "A kills B knowing it is murder, but believes an inner psychic voice told him to do it. If A knew the act was legally wrong and contrary to law, Section 84 does NOT apply (medical vs legal insanity distinction)."
      ],
      mensReaVsActusReus: "Complete incapacity of mind destroys cognitive ability to form criminal intention (mens rea).",
      precedents: "Safiullah v. State (PLD 2021 SC 588): Re-affirmed McNaughten Rules in Pakistan. The burden of proving legal insanity rests upon the accused under Article 121 of the Qanun-e-Shahadat Order 1984.",
      examNotes: "Crucial difference between 'medical insanity' and 'legal insanity'. Legal insanity requires incapacity to know the nature of the act OR that it was contrary to law.",
      mcqs: [
        {
          q: "Section 84 of the Pakistan Penal Code codifies which famous English common law rule?",
          opts: ["Rylands v. Fletcher rule", "McNaughten Rules (1843)", "Hadley v. Baxendale rule", "Donoghue v. Stevenson rule"],
          ans: 1,
          exp: "Section 84 is the direct statutory codification of the McNaughten Rules (1843) governing criminal responsibility of persons of unsound mind."
        }
      ]
    },
    {
      sec: "96-106",
      slug: "sec-96",
      chapter: "Chapter IV: General Exceptions",
      chapterNum: "IV",
      title: "Right of Private Defence of Body and Property (Sections 96 to 106)",
      category: "General Exceptions",
      highYield: true,
      cognizable: false,
      bailable: true,
      compoundable: "Non-Compoundable",
      trialCourt: "Court by which offence is triable",
      crpcStatus: "Statutory Justification (Negative of offence)",
      ingredients: [
        "Sec 96: Nothing is an offence which is done in the exercise of the right of private defence.",
        "Sec 97: Right extends to protecting own body/property and the body/property of any other person.",
        "Sec 99: Limits on private defence: No right exists if there is time to seek protection of public authorities; no more harm may be inflicted than necessary for defence.",
        "Sec 100: Defence of body extends to causing DEATH in 6 situations: reasonable apprehension of death, grievous hurt, rape, unnatural lust, kidnapping/abduction, wrongful confinement.",
        "Sec 103: Defence of property extends to causing DEATH in: robbery, house-breaking by night, mischief by fire to building, theft/mischief/house-trespass causing apprehension of death or grievous hurt."
      ],
      punishment: "Complete Justification: No offence is committed when actions remain strictly within the statutory limits of Sections 96–106.",
      illustrations: [
        "A is attacked by B with a loaded gun pointing directly at A's chest. A draws his revolver and shoots B dead to save his life. A is protected under Section 100 (Clause 1).",
        "A sees B pickpocketing a wallet from a bystander. A pulls out a dagger and stabs B through the heart. A has exceeded the right of private defence (Sec 99/302), as theft does not justify causing death unless under Sec 103 conditions."
      ],
      mensReaVsActusReus: "Protective impulse sanctioned by the State; unlawful act of aggressor creates legal justification for reasonable counter-force.",
      precedents: "Niaz Ahmed v. State (PLD 2020 SC 450): The right of private defence is a defensive right, not an offensive weapon; when the accused exceeds the right, offence falls under Section 302(c) as mitigating circumstance.",
      examNotes: "Memorize Section 100's six conditions and Section 103's four conditions verbatim. This is one of the most recurring long-essay topics in Judicial and CSS examinations.",
      mcqs: [
        {
          q: "Under Section 100 of the PPC, the right of private defence of the body extends to voluntarily causing death in all of the following EXCEPT:",
          opts: ["Apprehension of death", "Apprehension of simple hurt", "Attempt to commit rape", "Apprehension of kidnapping or abduction"],
          ans: 1,
          exp: "Apprehension of simple hurt does not warrant causing death; Section 100 requires apprehension of death or grievous hurt."
        }
      ]
    },

    // --- CHAPTER V & VA: ABETMENT & CONSPIRACY ---
    {
      sec: "107",
      slug: "sec-107",
      chapter: "Chapter V: Abetment",
      chapterNum: "V",
      title: "Abetment of a thing",
      category: "Abetment & Conspiracy",
      highYield: true,
      cognizable: "Same as offence abetted",
      bailable: "Same as offence abetted",
      compoundable: "Same as offence abetted",
      trialCourt: "Court by which offence abetted is triable",
      crpcStatus: "Inchoate Offence / Secondary Liability",
      ingredients: [
        "Instigating any person to do that thing (Instigation: active provocation, incitement, or urging), OR",
        "Engaging with one or more other person/persons in any conspiracy for the doing of that thing, if an act or illegal omission takes place in pursuance, OR",
        "Intentionally aiding, by any act or illegal omission, the doing of that thing."
      ],
      punishment: "Punished under Sections 109 to 116 according to whether the act abetted is committed or not, and what consequences ensue.",
      illustrations: [
        "A, a public officer, is authorized by a warrant from a Court of Justice to apprehend Z. B, knowing that C is not Z, wilfully represents to A that C is Z, and thereby intentionally causes A to apprehend C. B abets by instigation the apprehension of C.",
        "A instigates B to burn Z's house. B sets fire to the house and at the same time commits theft of property there. A is liable for abetting the arson, but not the theft unless it was a probable consequence."
      ],
      mensReaVsActusReus: "Requires intentional aiding, instigating, or conspiring; mere presence or silent passivity does not constitute abetment.",
      precedents: "Muhammad Riaz v. State (2019 SCMR 1210): Mere relationship or being present at the spot without an overt act of incitement or facilitation does not satisfy the requirements of Section 107 PPC.",
      examNotes: "Three modes of abetment: (1) Instigation, (2) Conspiracy, (3) Intentional Aid. In CSS Law exams, explain the meaning of each with statutory explanations.",
      mcqs: [
        {
          q: "Under Section 107 of PPC, which of the following is NOT a recognized mode of abetment?",
          opts: ["Instigation", "Engaging in conspiracy", "Intentional aiding", "Accidental presence without objection"],
          ans: 3,
          exp: "Mere accidental presence without instigation, conspiracy, or intentional aiding does not amount to abetment under Section 107."
        }
      ]
    },
    {
      sec: "120A & 120B",
      slug: "sec-120a",
      chapter: "Chapter VA: Criminal Conspiracy",
      chapterNum: "VA",
      title: "Criminal Conspiracy and its Punishment (Sections 120A & 120B)",
      category: "Abetment & Conspiracy",
      highYield: true,
      cognizable: "Cognizable if offence is cognizable",
      bailable: "Non-Bailable if offence is non-bailable",
      compoundable: "Non-Compoundable",
      trialCourt: "Court by which offence is triable",
      crpcStatus: "Substantive Inchoate Offence",
      ingredients: [
        "Agreement between two or more persons to do, or cause to be done:",
        "(1) An illegal act, OR",
        "(2) An act which is not illegal by illegal means.",
        "Proviso: No agreement except an agreement to commit an OFFENCE shall amount to criminal conspiracy unless some overt act besides the agreement is done in pursuance thereof."
      ],
      punishment: "Sec 120B: If conspiracy is to commit offence punishable with death, life imprisonment or rigorous imprisonment for 2+ years, punished in same manner as if abetted. In other cases: imprisonment up to 6 months, or fine, or both.",
      illustrations: [
        "A and B secretly agree to poison C tomorrow night. The agreement itself constitutes the offence of criminal conspiracy under 120A without any poison being purchased yet.",
        "A and B agree to obtain a legitimate business licence by forging government stamps. The agreement involves doing an act by illegal means, hence is criminal conspiracy."
      ],
      mensReaVsActusReus: "The meeting of minds (agreement / consensus ad idem) is the actus reus; intention to execute the illegal purpose is mens rea.",
      precedents: "Mirza Shaukat Baig v. Shahid Jamil (PLD 2005 SC 530): Conspiracy is hatched in secrecy and direct evidence is seldom available; it can be inferred from surrounding circumstantial evidence and conduct.",
      examNotes: "Critical distinction: For an agreement to commit an OFFENCE, agreement alone is sufficient. For any other illegal act, an OVERT ACT in pursuance is mandatory.",
      mcqs: [
        {
          q: "Under Section 120A of PPC, when is an overt act strictly necessary to constitute a criminal conspiracy?",
          opts: ["Always", "Never", "When the agreement is to do an illegal act that is not an offence", "When the offence is punishable with death"],
          ans: 2,
          exp: "By the proviso to Section 120A, an agreement to commit an offence is complete without an overt act; an overt act is only required if the act agreed upon is not an offence."
        }
      ]
    },

    // --- CHAPTER VI: OFFENCES AGAINST THE STATE ---
    {
      sec: "121",
      slug: "sec-121",
      chapter: "Chapter VI: Offences Against the State",
      chapterNum: "VI",
      title: "Waging, or attempting to wage war, or abetting waging of war, against Pakistan",
      category: "Public Tranquility & State",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Non-Compoundable",
      trialCourt: "Court of Session",
      crpcStatus: "Heinous State Offence (Capital Punishment)",
      ingredients: [
        "Accused waged war against Pakistan, OR",
        "Attempted to wage war against Pakistan, OR",
        "Abetted the waging of such war.",
        "The war must be directed against the sovereignty of the State of Pakistan, characterized by general armed insurrection or rebellion."
      ],
      punishment: "Death, or Imprisonment for Life, and shall also be liable to Fine.",
      illustrations: [
        "A joins an armed militant insurgency aiming to seize government cantonments and overthrow the State authority. A is guilty under Section 121.",
        "A organizes an armed attack on a police station purely to release his brother from lockup. This is an attack on public authority, but is rioting or dacoity, not waging war against the State, unless there is an insurrectionary purpose against the State's sovereignty."
      ],
      mensReaVsActusReus: "Intention to overthrow or challenge the sovereignty of Pakistan accompanied by armed hostility.",
      precedents: "State v. Nawabzada Akbar Bugti (PLD 2007 Quetta 1): Distinction between violent public disorder and waging war against the State depends on the political object of attacking State sovereignty.",
      examNotes: "Compare Section 121 PPC with Article 6 of the Constitution (High Treason). Article 6 deals with abrogation/subversion of the Constitution, while 121 deals with armed belligerence.",
      mcqs: [
        {
          q: "What is the maximum statutory penalty for waging war against Pakistan under Section 121 PPC?",
          opts: ["14 Years Imprisonment", "25 Years Rigorous Imprisonment", "Death", "Life Imprisonment only"],
          ans: 2,
          exp: "Under Section 121 PPC, the punishment is Death, or Imprisonment for Life, and liability to fine."
        }
      ]
    },

    // --- CHAPTER VIII: OFFENCES AGAINST PUBLIC TRANQUILLITY ---
    {
      sec: "141 & 143",
      slug: "sec-141",
      chapter: "Chapter VIII: Offences Against Public Tranquillity",
      chapterNum: "VIII",
      title: "Unlawful Assembly and its Punishment (Sections 141 & 143)",
      category: "Public Tranquility & State",
      highYield: true,
      cognizable: true,
      bailable: true,
      compoundable: "Non-Compoundable",
      trialCourt: "Any Magistrate",
      crpcStatus: "Foundation for Joint Liability under Sec 149",
      ingredients: [
        "An assembly of FIVE (5) or more persons.",
        "The members must share one of the FIVE common objects enumerated in Section 141:",
        "1. Overawing by criminal force the Government, Parliament, or public servants;",
        "2. Resisting the execution of any law or legal process;",
        "3. Committing any mischief, criminal trespass, or other offence;",
        "4. Enforcing any right or supposed right by criminal force;",
        "5. Compelling any person to do what he is not legally bound to do, or omit what he is legally entitled to do."
      ],
      punishment: "Sec 143: Imprisonment of either description for a term which may extend to six (6) months, or with fine, or with both.",
      illustrations: [
        "A group of 6 men armed with lathis march to a farmer's field to forcibly dispossess him of his land under claim of title. They form an unlawful assembly under Clause 4 of Section 141.",
        "Four persons assemble to commit theft. They do NOT form an unlawful assembly under Section 141 because the minimum membership requirement is FIVE persons."
      ],
      mensReaVsActusReus: "Common object shared by five or more persons at the time of assembly.",
      precedents: "Muhammad Din v. State (1998 SCMR 1823): If the number of accused is reduced to less than five due to acquittals, Section 141 and constructive liability under Section 149 cannot stand unless unidentified persons were also part of it.",
      examNotes: "A classic trick question in tests: An assembly which was not unlawful when it assembled may subsequently become an unlawful assembly (Explanation to Sec 141).",
      mcqs: [
        {
          q: "What is the minimum number of persons required to constitute an 'Unlawful Assembly' under Section 141 PPC?",
          opts: ["2 persons", "3 persons", "5 persons", "7 persons"],
          ans: 2,
          exp: "Section 141 requires an assembly of five or more persons sharing a common illegal object."
        }
      ]
    },
    {
      sec: "149",
      slug: "sec-149",
      chapter: "Chapter VIII: Offences Against Public Tranquillity",
      chapterNum: "VIII",
      title: "Every member of unlawful assembly guilty of offence committed in prosecution of common object (Constructive Liability)",
      category: "Public Tranquility & State",
      highYield: true,
      cognizable: "Same as offence committed",
      bailable: "Same as offence committed",
      compoundable: "Same as offence committed",
      trialCourt: "Court by which offence is triable",
      crpcStatus: "Rule of Constructive / Vicarious Criminal Liability",
      ingredients: [
        "Offence committed by any member of an unlawful assembly (5+ persons).",
        "The offence must be committed IN PROSECUTION of the common object of that assembly, OR",
        "Be such as the members of that assembly KNEW TO BE LIKELY to be committed in prosecution of that object.",
        "Every person who, at the time of committing that offence, is a member of the same assembly, is guilty of that offence."
      ],
      punishment: "Punished with the exact punishment provided for the offence committed by any individual member (e.g. if murder is committed, all members face Section 302/149).",
      illustrations: [
        "A, B, C, D, and E form an unlawful assembly armed with firearms to abduct X. In resisting, X's father is shot dead by A. B, C, D, and E are all equally guilty of murder under Section 302 read with Section 149, because they knew death was likely in prosecution of the armed abduction."
      ],
      mensReaVsActusReus: "Constructive liability: individual physical participation in the final fatal stroke is not required; membership in assembly + common object nexus suffices.",
      precedents: "Raza v. State (PLD 2018 SC 679): The test under Section 149 is whether the offence was committed in prosecution of the common object, or was known to be likely. A sudden unexpected individual act outside the common object will not hold others liable.",
      examNotes: "Most famous comparison in criminal law: Section 34 (Common Intention - requires prior meeting of minds, participation, any number of persons) vs Section 149 (Common Object - requires 5+ persons, no prior meeting of minds required).",
      mcqs: [
        {
          q: "How does Section 149 PPC differ essentially from Section 34 PPC?",
          opts: [
            "Section 34 requires 5 persons, 149 requires 2",
            "Section 149 creates a substantive offence based on common object with 5+ members; Section 34 is a rule of evidence based on common intention",
            "Section 149 only applies to theft",
            "Section 34 cannot be combined with Section 302"
          ],
          ans: 1,
          exp: "Section 149 creates constructive liability for members of an unlawful assembly (minimum 5 persons) sharing a common object, whereas Section 34 is a rule of evidence requiring common intention between two or more persons."
        }
      ]
    },
    {
      sec: "159 & 160",
      slug: "sec-159",
      chapter: "Chapter VIII: Offences Against Public Tranquillity",
      chapterNum: "VIII",
      title: "Affray and its Punishment (Sections 159 & 160)",
      category: "Public Tranquility & State",
      highYield: true,
      cognizable: false,
      bailable: true,
      compoundable: "Non-Compoundable",
      trialCourt: "Any Magistrate",
      crpcStatus: "Minor Public Order Offence",
      ingredients: [
        "Two or more persons.",
        "Fighting together (actual mutual combat, not mere verbal abuse).",
        "The fighting must take place in a PUBLIC PLACE.",
        "The fighting must DISTURB THE PUBLIC PEACE."
      ],
      punishment: "Sec 160: Imprisonment of either description for a term which may extend to one (1) month, or with fine which may extend to one hundred rupees, or with both.",
      illustrations: [
        "A and B get into a violent fistfight on a busy Mall Road crossing, halting traffic and causing public panic. They are guilty of affray under Section 159.",
        "A and B fight inside a locked private bedroom. They are not guilty of affray because the fight was not in a public place."
      ],
      mensReaVsActusReus: "Mutual combat in public violating civic tranquility.",
      precedents: "State v. Bashir (1975 PCrLJ 45): A fight in a private room or enclosed backyard does not constitute an affray even if screams are heard outside, because the combat itself was not in a public place.",
      examNotes: "Distinguish between Rioting (Sec 146 - 5+ persons, use of force by unlawful assembly) and Affray (Sec 159 - 2+ persons fighting in a public place).",
      mcqs: [
        {
          q: "What is the essential venue required to constitute the offence of Affray under Section 159 PPC?",
          opts: ["Inside a police station", "A public place", "Any private dwelling", "A courtroom"],
          ans: 1,
          exp: "Section 159 explicitly mandates that the fighting between two or more persons must occur in a public place so as to disturb public peace."
        }
      ]
    },

    // --- CHAPTER IX & XI: CORRUPTION, FALSE EVIDENCE & PUBLIC JUSTICE ---
    {
      sec: "161",
      slug: "sec-161",
      chapter: "Chapter IX: Offences by or Relating to Public Servants",
      chapterNum: "IX",
      title: "Public servant taking gratification other than legal remuneration in respect of an official act (Bribery)",
      category: "Public Servants & False Evidence",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Non-Compoundable",
      trialCourt: "Special Judge (Anti-Corruption) / Sessions Court",
      crpcStatus: "Anti-Corruption Cornerstone (FIA & ACE jurisdiction)",
      ingredients: [
        "Accused must be a public servant (as defined in Section 21 PPC).",
        "Accepted or obtained, or agreed to accept, or attempted to obtain gratification.",
        "The gratification was other than legal remuneration.",
        "The gratification was taken as a motive or reward for doing or forbearing to do an official act, or showing favour/disfavour in the exercise of official functions."
      ],
      punishment: "Imprisonment of either description for a term which may extend to three (3) years, or with fine, or with both (augmented under Prevention of Corruption Act, 1947).",
      illustrations: [
        "A, a revenue patwari, demands and accepts Rs. 20,000 from a landowner as a bribe to issue an official fard of agricultural land. A is guilty under Section 161.",
        "A, a police sub-inspector, accepts money from a complainant to expedite a genuine FIR. This is still illegal gratification under Section 161 because it is not legal remuneration."
      ],
      mensReaVsActusReus: "Corrupt intention to trade official duty for private pecuniary or other non-legal gain.",
      precedents: "Rao Abdul Qayyum v. State (PLD 2017 SC 344): For an offence under Section 161 PPC and Sec 5(2) of Prevention of Corruption Act 1947, both demand and acceptance of illegal gratification must be established beyond reasonable doubt.",
      examNotes: "Core syllabus topic for FIA Assistant Director (Investigation), FIA Inspector, and Anti-Corruption Establishment (ACE) examinations.",
      mcqs: [
        {
          q: "Under Section 161 PPC, 'gratification' is restricted to:",
          opts: ["Money only", "Pecuniary gratification only", "Is not restricted to pecuniary gratification or to gratifications estimable in money", "Gold and real estate only"],
          ans: 2,
          exp: "Explanation to Section 161 states: 'Gratification is not restricted to pecuniary gratifications or to gratifications estimable in money' (can include gifts, favours, or services)."
        }
      ]
    },
    {
      sec: "191 & 193",
      slug: "sec-191",
      chapter: "Chapter XI: False Evidence and Offences Against Public Justice",
      chapterNum: "XI",
      title: "Giving False Evidence (Perjury) and its Punishment (Sections 191 & 193)",
      category: "Public Servants & False Evidence",
      highYield: true,
      cognizable: false,
      bailable: true,
      compoundable: "Non-Compoundable",
      trialCourt: "Court of Session or Magistrate 1st Class (requires complaint by Court under Sec 195 CrPC)",
      crpcStatus: "Judicial Integrity Protection (Perjury)",
      ingredients: [
        "Accused was legally bound by an oath or express provision of law to state the truth, OR to make a declaration.",
        "Made a statement which is false.",
        "The accused either KNEW or BELIEVED it to be false, or did NOT BELIEVE it to be true.",
        "Sec 193: Giving false evidence in any stage of a judicial proceeding."
      ],
      punishment: "Sec 193: In judicial proceedings: Imprisonment of either description for a term which may extend to seven (7) years, and shall also be liable to fine. In other cases: imprisonment up to three (3) years and fine.",
      illustrations: [
        "A, in an affidavit filed before the High Court, affirms that he personally witnessed X sign a deed in Lahore, whereas A was in Karachi and knows the signature was forged. A gives false evidence under Section 191.",
        "A, a doctor, gives a medical certificate stating what he honestly believes to be true based on symptoms, but is medically mistaken. A has not committed perjury because he believed his statement to be true."
      ],
      mensReaVsActusReus: "Deliberate mendacity (telling an intentional falsehood while under legal obligation to state truth).",
      precedents: "State v. Malik Muhammad Qayyum (PLD 2001 SC 568): Perjury strikes at the root of the justice delivery system; courts must strictly proceed under Section 476 CrPC against witnesses fabricating evidence.",
      examNotes: "Note procedural bar under Section 195(1)(b) CrPC: No court can take cognizance of Section 193 except upon the written complaint of the Court concerned or superior court.",
      mcqs: [
        {
          q: "What is the maximum imprisonment for giving false evidence in a judicial proceeding under Section 193 PPC?",
          opts: ["3 Years", "5 Years", "7 Years and fine", "14 Years"],
          ans: 2,
          exp: "Section 193 PPC prescribes up to 7 years imprisonment and fine when perjury is committed in any stage of a judicial proceeding."
        }
      ]
    },
    {
      sec: "201",
      slug: "sec-201",
      chapter: "Chapter XI: False Evidence and Offences Against Public Justice",
      chapterNum: "XI",
      title: "Causing disappearance of evidence of offence, or giving false information to screen offender",
      category: "Public Servants & False Evidence",
      highYield: true,
      cognizable: "Non-Cognizable / Cognizable depending on offence screened",
      bailable: "Bailable",
      compoundable: "Non-Compoundable",
      trialCourt: "Court by which offence screened is triable",
      crpcStatus: "Tampering with Evidence",
      ingredients: [
        "An offence has been committed.",
        "Accused knows or has reason to believe that the offence has been committed.",
        "Accused causes any evidence of the commission of that offence to disappear, with the intention of screening the offender from legal punishment, OR",
        "With that intention gives any information respecting the offence which he knows or believes to be false."
      ],
      punishment: "If offence screened is capital (punishable with death): Imprisonment up to seven (7) years, and fine. If punishable with life/10 yrs: Imprisonment up to three (3) years. In other cases: up to 1/4th of max term.",
      illustrations: [
        "A, knowing that B has murdered Z, helps B to bury the body in an abandoned dry well to prevent detection. A is guilty under Section 201 (screening capital offence; up to 7 years imprisonment).",
        "A washes bloodstains from a murder weapon and throws it into a deep river to hide B's fingerprints. A has committed the offence under Section 201."
      ],
      mensReaVsActusReus: "Physical act of destroying, concealing, or falsifying evidence with specific mens rea to screen an offender.",
      precedents: "Muhammad Siddique v. State (PLD 2014 SC 312): Conviction under Section 201 cannot stand unless it is first proved that an offence had in fact been committed by the person screened.",
      examNotes: "Frequently charged as an alternative or additional count alongside murder (Section 302/201 PPC) when dead bodies or crime weapons are concealed.",
      mcqs: [
        {
          q: "If the offence screened under Section 201 PPC is punishable with death, what is the maximum imprisonment for causing disappearance of evidence?",
          opts: ["3 Years", "5 Years", "7 Years and fine", "Life Imprisonment"],
          ans: 2,
          exp: "Section 201 PPC provides that if the offence screened is punishable with death, the punishment is imprisonment up to 7 years and fine."
        }
      ]
    },

    // --- CHAPTER XVI: OFFENCES AFFECTING THE HUMAN BODY (QISAS & DIYAT) ---
    {
      sec: "299",
      slug: "sec-299",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Definitions in Qisas and Diyat (Section 299)",
      category: "Offences Against Body (Qisas & Diyat)",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Compoundable according to provisions of Sec 345 CrPC",
      trialCourt: "Court of Session",
      crpcStatus: "Foundational Definitions for Bodily Offences",
      ingredients: [
        "Adult: Person who has attained the age of eighteen (18) years.",
        "Arsh: Compensation specified in this Chapter to be paid to the victim or his heirs.",
        "Daman: Compensation determined by the Court to be paid by offender for hurt not liable to Arsh.",
        "Diyat: Compensation specified in Section 323 payable to heirs of victim (minimum value of 30,630 grams of silver).",
        "Qatl: Causing death of a human being.",
        "Qisas: Punishment by causing similar hurt at the same part of the body of the convict as he has caused to the victim, or by causing his death if he has committed Qatl-i-amd in exercise of the right in accordance with the Injunctions of Islam.",
        "Tazir: Punishment other than Qisas, Diyat, Arsh or Daman."
      ],
      punishment: "Interpretative section providing the statutory meaning of all Islamic legal penalties under Chapter XVI.",
      illustrations: [
        "Diyat value is notified annually by the Federal Government on 1st July based on the market value of 30,630 grams of silver.",
        "Where compensation is fixed by the statute for an injury (e.g. loss of an eye), it is Arsh; where the injury has no fixed statutory rate, the court assesses Daman."
      ],
      mensReaVsActusReus: "Defines the legal vocabulary of Islamic criminal jurisprudence introduced into the Pakistan Penal Code via the Criminal Law (Amendment) Act 1997.",
      precedents: "Federation of Pakistan v. Gul Hasan Khan (PLD 1989 SC 633): Landmark Shariat Appellate Bench judgment declaring un-Islamic the old colonial law of murder that lacked Qisas and Diyat, prompting enactment of Chapter XVI.",
      examNotes: "Every candidate MUST memorize the exact difference between Arsh (statutorily fixed) and Daman (judicially assessed based on medical expenses and loss of earning).",
      mcqs: [
        {
          q: "Under Section 299(d) of PPC, Diyat is statutorily benchmarked to what minimum quantity of silver?",
          opts: ["10,000 grams", "20,500 grams", "30,630 grams", "50,000 grams"],
          ans: 2,
          exp: "Section 323 and 299(d) benchmark Diyat to the minimum market value of 30,630 grams of silver, officially notified every fiscal year."
        }
      ]
    },
    {
      sec: "300 & 302",
      slug: "sec-302",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Qatl-e-Amd (Intentional Murder) and its Punishments (Sections 300 & 302)",
      category: "Offences Against Body (Qisas & Diyat)",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Compoundable under Sec 345 CrPC (subject to Sec 311 Tazir on honour killing)",
      trialCourt: "Court of Session",
      crpcStatus: "Supreme Bodily Offence (Capital Punishment)",
      ingredients: [
        "Causing the death of a human being.",
        "By doing an act with the INTENTION of causing death, OR",
        "With the intention of causing bodily injury to a person and doing an act which in the ordinary course of nature is LIKELY to cause death, OR",
        "Doing an act with the KNOWLEDGE that his act is so imminently dangerous that it must in all probability cause death.",
        "Four categories of punishment under Section 302: (a) Qisas, (b) Tazir (Death or Life Imprisonment), (c) Imprisonment up to 25 years where proof under Islam is not available or mitigating circumstances exist."
      ],
      punishment: "Sec 302(a): Death as Qisas. Sec 302(b): Death or Imprisonment for Life as Tazir. Sec 302(c): Imprisonment of either description up to twenty-five (25) years where Qisas is not applicable under Islamic law.",
      illustrations: [
        "A deliberately fires a rifle bullet directly into B's heart with intention to kill him. B dies instantly. A is guilty of Qatl-i-amd under Section 302(b).",
        "A finds B in an unexpected grave provocation and in sudden heat of passion strikes him with a heavy stick, causing death without premeditation. Offence may fall under Section 302(c) as mitigating circumstances exist."
      ],
      mensReaVsActusReus: "Actus Reus: Causing human death. Mens Rea: Specific intention to kill, or knowledge of imminent fatal probability.",
      precedents: "Bashir Ahmed v. State (PLD 2022 SC 112): Explained the distinction between Section 302(b) and 302(c). Section 302(c) applies when mitigating factors, sudden provocation, or lack of premeditation diminish culpability without qualifying for total exception.",
      examNotes: "Crucial for exam: What happened to Section 302 after Criminal Law (Amendment) (Offences in the Name of Honour) Act 2016? In honour killings ('Karo-Kari'), court can award 302(b) as Tazir even if heirs grant waiver/compromise under Section 311.",
      mcqs: [
        {
          q: "Under Section 302(c) of PPC, what is the maximum term of imprisonment?",
          opts: ["10 Years", "14 Years", "20 Years", "25 Years"],
          ans: 3,
          exp: "Section 302(c) prescribes imprisonment of either description for a term which may extend to 25 years where according to Injunctions of Islam Qisas cannot be imposed."
        }
      ]
    },
    {
      sec: "315 & 316",
      slug: "sec-315",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Qatl Shibh-i-Amd (Quasi-Intentional Homicide) (Sections 315 & 316)",
      category: "Offences Against Body (Qisas & Diyat)",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Compoundable",
      trialCourt: "Court of Session",
      crpcStatus: "Homicide without Deadly Weapon / Intent to Kill",
      ingredients: [
        "Accused causes death of a human being.",
        "Intending to cause bodily harm, OR intending to strike the victim.",
        "Uses a weapon or act which in the ordinary course of nature is NOT LIKELY to cause death.",
        "Death nevertheless results from the blow (e.g. struck with a light willow cane, fist, or shoe, but victim dies due to ruptured spleen)."
      ],
      punishment: "Sec 316: Offender shall be liable to DIYAT, and may also be punished with imprisonment of either description for a term which may extend to twenty-five (25) years as Tazir.",
      illustrations: [
        "A strikes B on the shoulder with a light wooden ruler intending only to cause pain. B suffers an unforeseen internal hemorrhage and dies. A is guilty of Qatl Shibh-i-amd under Section 315.",
        "A slaps B once across the face during an argument; B trips on the curb, hits his temple on a brick and dies. A is liable under Section 316 for Shibh-i-Amd."
      ],
      mensReaVsActusReus: "Intention to cause hurt exists, but no intention to cause death, and the means used were not ordinarily fatal.",
      precedents: "Abdul Haq v. State (PLD 1996 SC 1): Section 315 covers cases where intention to inflict harm was present, but weapon used was incapable in ordinary course of nature of causing death.",
      examNotes: "A favourite question in Civil Judge exams: Contrast Qatl-i-Amd (Sec 300), Qatl Shibh-i-Amd (Sec 315), Qatl-i-Khata (Sec 318), and Qatl-bis-Sabab (Sec 321).",
      mcqs: [
        {
          q: "What is the mandatory financial penalty for Qatl Shibh-i-Amd under Section 316 PPC?",
          opts: ["Arsh", "Daman", "Diyat", "Fine of Rs. 100,000"],
          ans: 2,
          exp: "Section 316 PPC makes the payment of Diyat mandatory, alongside optional Tazir imprisonment up to 25 years."
        }
      ]
    },
    {
      sec: "318 & 319",
      slug: "sec-318",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Qatl-i-Khata (Homicide by Mistake or Rash/Negligent Act) (Sections 318 & 319)",
      category: "Offences Against Body (Qisas & Diyat)",
      highYield: true,
      cognizable: true,
      bailable: true,
      compoundable: "Compoundable",
      trialCourt: "Court of Session",
      crpcStatus: "Accidental / Negligent Death",
      ingredients: [
        "Causing the death of a human being.",
        "WITHOUT any intention to cause death or cause bodily harm.",
        "By doing an act by MISTAKE OF FACT or MISTAKE OF ACT, OR",
        "By any rash or negligent act (Sec 320 for rash/negligent driving)."
      ],
      punishment: "Sec 319: Liable to DIYAT. If the act was done by any rash or negligent act, offender may also be punished with imprisonment up to five (5) years as Tazir. Sec 320 (driving): up to 10 years + Diyat.",
      illustrations: [
        "A shoots at a wild boar in dense jungle; the bullet ricochets off a tree and kills Z, who was unseen behind bushes. A is guilty of Qatl-i-khata.",
        "A drives a truck at 120 km/h in a crowded bazaar ignoring red signals and crushes a pedestrian. A is guilty of Qatl-i-khata by rash and negligent driving under Section 320."
      ],
      mensReaVsActusReus: "Absence of intention; criminal negligence or factual mistake resulting in fatal outcome.",
      precedents: "State v. Ghulam Sarwar (2018 SCMR 144): In rash and negligent driving cases under Section 320, payment of Diyat to the heirs is compulsory and cannot be remitted even if Tazir imprisonment is reduced.",
      examNotes: "Remember: Section 318/319 covers general Qatl-i-Khata; Section 320 is the specific provision for rash and negligent driving on public roads.",
      mcqs: [
        {
          q: "Under Section 319 PPC, what is the mandatory penalty for Qatl-i-Khata?",
          opts: ["Qisas", "Diyat", "Death Penalty", "Solitary confinement for 14 years"],
          ans: 1,
          exp: "Section 319 PPC specifies that the offender shall be liable to Diyat, with optional Tazir imprisonment if rash or negligent."
        }
      ]
    },
    {
      sec: "332 & 337",
      slug: "sec-332",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Hurt and its Classes (Shajjah & Jurh) (Sections 332, 337A to 337F)",
      category: "Offences Against Body (Qisas & Diyat)",
      highYield: true,
      cognizable: true,
      bailable: "Bailable/Non-Bailable according to injury severity",
      compoundable: "Compoundable",
      trialCourt: "Magistrate 1st Class or Court of Session",
      crpcStatus: "Bodily Injuries Framework",
      ingredients: [
        "Whoever causes pain, harm, disease, infirmity or injury to any person, or impairs, disables or dismembers any organ.",
        "Five Kinds of Hurt under Sec 332: (1) Itlaf-i-udw, (2) Itlaf-i-salahiyyat-i-udw, (3) Shajjah, (4) Jurh, (5) All other hurts.",
        "Shajjah (hurt on Head or Face): 6 types (Khafifah, Mudihah, Hashimah, Munaqqilah, Ammah, Damighah).",
        "Jurh (hurt on body other than head/face): Jaifah (extends into trunk/body cavity) and Ghayr-Jaifah (Damiyah, Badi'ah, Mutalahimah, Mudihah, Hashimah, Munaqqilah)."
      ],
      punishment: "Arsh (fixed statutory compensation as % of Diyat) or Daman + Tazir imprisonment ranging from 1 year (Shajjah-i-Khafifah) up to 14 years (Shajjah-i-Damighah / Jurh Jaifah).",
      illustrations: [
        "A strikes B with an iron rod on the forehead, fracturing the skull bone without rupturing brain membranes (Shajjah-i-Hashimah). Under Sec 337A(iii), A is liable to Arsh (10% of Diyat) and up to 10 years imprisonment.",
        "A cuts off B's thumb. Under Sec 334 (Itlaf-i-Udw), Qisas is applicable if medically feasible, or Arsh (1/10th of Diyat) + up to 10 years imprisonment."
      ],
      mensReaVsActusReus: "Intentionally or knowingly causing bodily harm, wound, or disfigurement.",
      precedents: "Muhammad Aslam v. State (PLD 2017 SC 733): The classification of hurt by the medico-legal officer (MLO) is determinative of the specific subsection of 337 to be charged and the exact Arsh percentage.",
      examNotes: "A perennial CSS favourite: Define the six kinds of Shajjah and their respective punishments under Section 337A PPC.",
      mcqs: [
        {
          q: "What is 'Shajjah-i-Mudihah' under Section 337(2) of the Pakistan Penal Code?",
          opts: [
            "Hurt where bone is exposed but not fractured",
            "Hurt on the body other than head or face",
            "Hurt where skull bone is fractured and brain membrane is ruptured",
            "A simple scratch on the arm"
          ],
          ans: 0,
          exp: "Shajjah-i-Mudihah is hurt on the head or face where the bone is exposed without being fractured, attracting Arsh of 5% of Diyat."
        }
      ]
    },
    {
      sec: "339-342",
      slug: "sec-339",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Wrongful Restraint and Wrongful Confinement (Sections 339 to 342)",
      category: "Offences Against Body (Qisas & Diyat)",
      highYield: true,
      cognizable: true,
      bailable: true,
      compoundable: "Compoundable",
      trialCourt: "Any Magistrate",
      crpcStatus: "Personal Liberty Violations",
      ingredients: [
        "Sec 339 (Wrongful Restraint): Voluntarily obstructing any person so as to prevent that person from proceeding in any direction in which that person has a right to proceed.",
        "Sec 340 (Wrongful Confinement): Wrongfully restraining any person in such a manner as to prevent that person from proceeding BEYOND CERTAIN CIRCUMSCRIBING LIMITS.",
        "Restraint is a partial restriction on moving in ONE direction; Confinement is a total restriction within bounded walls or perimeter."
      ],
      punishment: "Sec 341 (Wrongful Restraint): Simple imprisonment up to one (1) month, or fine up to Rs. 1,500, or both. Sec 342 (Wrongful Confinement): Imprisonment up to one (1) year, or fine up to Rs. 3,000, or both.",
      illustrations: [
        "A places a barricade across a public highway preventing B from walking northwards, although B is free to turn back south. A is guilty of Wrongful Restraint (Sec 339).",
        "A locks B inside a windowless office room with a padlock on the door. A is guilty of Wrongful Confinement (Sec 340/342)."
      ],
      mensReaVsActusReus: "Physical obstruction without lawful authority violating freedom of locomotion.",
      precedents: "State v. SHO Police Station Civil Lines (PLD 2019 Lahore 412): Keeping a citizen in illegal police custody without entering his arrest in the police station daily diary (Roznamcha) constitutes Wrongful Confinement under Section 342 PPC.",
      examNotes: "Distinction: Wrongful restraint = obstruction in one particular direction. Wrongful confinement = total perimeter restraint.",
      mcqs: [
        {
          q: "What is the key difference between Wrongful Restraint (Sec 339) and Wrongful Confinement (Sec 340)?",
          opts: [
            "Restraint is bailable, confinement is capital",
            "Restraint obstructs movement in a particular direction; confinement prevents movement beyond circumscribing limits",
            "Confinement applies only to government officials",
            "Restraint requires physical handcuffs"
          ],
          ans: 1,
          exp: "Wrongful restraint prevents proceeding in a direction one has a right to proceed; wrongful confinement is total restraint within circumscribing boundaries."
        }
      ]
    },
    {
      sec: "354 & 354A",
      slug: "sec-354",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Assault on woman with intent to outrage modesty & Stripping of woman's clothes (Sections 354 & 354A)",
      category: "Defamation & Women Safety",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Non-Compoundable",
      trialCourt: "Court of Session (for 354A) / Magistrate 1st Class (for 354)",
      crpcStatus: "Stringent Gender Offence (Anti-Stripping Law)",
      ingredients: [
        "Sec 354: Assaulting or using criminal force to any woman, intending to outrage or knowing it to be likely that he will thereby outrage her modesty.",
        "Sec 354A: Assaulting or using criminal force to woman and stripping her of her clothes, and in that condition exposing her to public view.",
        "Sec 354A was inserted to combat the heinous customary practice of publicly parading women naked."
      ],
      punishment: "Sec 354: Imprisonment up to two (2) years, or fine, or both. Sec 354A: DEATH or IMPRISONMENT FOR LIFE, and shall also be liable to fine.",
      illustrations: [
        "A grabs a female passenger on a bus by the arm and attempts to tear her dupatta while uttering lewd remarks. A is guilty under Section 354.",
        "A panchayat / mob attacks a family, forcibly strips a female member naked in the village bazaar and parades her. Every participant is guilty under Section 354A (facing death or life imprisonment)."
      ],
      mensReaVsActusReus: "Intention to violate feminine modesty and dignity; in 354A, the act of stripping and exposing to public view.",
      precedents: "Naseem Akhtar v. State (PLD 2005 SC 670): Section 354A is a capital offence designed to eradicate barbaric feudal atrocities against women; exposure to public view is the gravamen of the offence.",
      examNotes: "Contrast the light penalty of Section 354 (up to 2 years) with the severe capital punishment of Section 354A (Death or Life). One of the most tested sections in Police and Judicial exams.",
      mcqs: [
        {
          q: "What is the statutory penalty for stripping a woman of her clothes and exposing her to public view under Section 354A PPC?",
          opts: ["7 Years Imprisonment", "10 Years Rigorous Imprisonment", "Death or Imprisonment for Life, and fine", "Fine of Rs. 50,000 only"],
          ans: 2,
          exp: "Section 354A carries the maximum penalty of Death or Imprisonment for Life, and liability to fine."
        }
      ]
    },
    {
      sec: "365 & 365A",
      slug: "sec-365",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Kidnapping / Abducting and Kidnapping for Ransom (Sections 365 & 365A)",
      category: "Offences Against Body (Qisas & Diyat)",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Non-Compoundable",
      trialCourt: "Anti-Terrorism Court (ATC) / Court of Session",
      crpcStatus: "Terrorism Schedule / Severe Felony",
      ingredients: [
        "Sec 365: Kidnapping or abducting any person with intent to cause that person to be secretly and wrongfully confined.",
        "Sec 365A: Kidnapping or abducting any person for the purpose of EXTORTING property or valuable security, OR to compel any person to pay RANSOM, or to comply with any illegal demand.",
        "Confinement of the abducted victim coupled with communication of ransom demands."
      ],
      punishment: "Sec 365: Imprisonment up to seven (7) years and fine. Sec 365A: DEATH or IMPRISONMENT FOR LIFE, and forfeiture of property.",
      illustrations: [
        "A and B bundle an industrialist into a van at gunpoint, drive him to an isolated hideout, and phone his family demanding Rs. 50 million for his release. They are guilty under Section 365A (Kidnapping for ransom).",
        "A locks his former debtor in a private room to force him to apologize. This is Section 365, not 365A, if no ransom/property extortion is demanded."
      ],
      mensReaVsActusReus: "Physical abduction + specific extortionate intent to demand ransom from family or State.",
      precedents: "Farooq Ahmed v. State (2020 SCMR 235): For conviction under Section 365A, call records and voice identification connecting the accused to the ransom call are critical corroborative evidence.",
      examNotes: "Section 365A is scheduled under the Anti-Terrorism Act 1997 (ATA) and is triable by Anti-Terrorism Courts with capital punishment.",
      mcqs: [
        {
          q: "What is the penalty for Kidnapping for Ransom under Section 365A PPC?",
          opts: ["10 Years Imprisonment", "14 Years Imprisonment", "Death or Imprisonment for Life, and forfeiture of property", "Fine of Rs. 1 million only"],
          ans: 2,
          exp: "Section 365A PPC prescribes Death or Imprisonment for Life, and all property of the offender shall also be liable to forfeiture."
        }
      ]
    },
    {
      sec: "375 & 376",
      slug: "sec-375",
      chapter: "Chapter XVI: Offences Affecting the Human Body",
      chapterNum: "XVI",
      title: "Rape (Zina-bil-Jabr) and its Punishment (Sections 375 & 376)",
      category: "Defamation & Women Safety",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Non-Compoundable",
      trialCourt: "Court of Session / Special Anti-Rape Court",
      crpcStatus: "Heinous Sexual Felony (Anti-Rape Act 2021)",
      ingredients: [
        "A man commits rape if he has sexual intercourse with a woman:",
        "(1) Against her will;",
        "(2) Without her consent;",
        "(3) With consent obtained by putting her in fear of death or hurt;",
        "(4) With consent given under false belief of marriage;",
        "(5) With or without consent, when she is under sixteen (16) years of age (Statutory Rape).",
        "Penetration is sufficient to constitute sexual intercourse."
      ],
      punishment: "Sec 376: Death or Imprisonment for Life (not less than 10 years and up to 25 years), and fine. Gang Rape: Death or Life Imprisonment for every participant. Anti-Rape Act 2021 introduced chemical castration provision for repeat offenders.",
      illustrations: [
        "A forces B into sexual relations by threatening to shoot her brother. Consent obtained under fear is void, constituting rape under Section 375/376.",
        "A engages in sexual intercourse with a 15-year-old girl with her full agreement. A is guilty of statutory rape under Section 375(Fifthly), as consent of a girl under 16 is legally void in Pakistan."
      ],
      mensReaVsActusReus: "Physical act of non-consensual penetration with knowledge of absence of genuine consent.",
      precedents: "Atif Zareef v. State (PLD 2021 SC 550): Supreme Court prohibited the two-finger virginity test (FVT) as unconstitutional, discriminatory, and violating Article 9 and 14 of the Constitution in rape trials.",
      examNotes: "High-yield updates: (1) Protection of Women Act 2006 moved rape from Hudood Ordinance back into PPC Sec 375/376; (2) Anti-Rape Act 2021 special investigation units and expedited 4-month trials.",
      mcqs: [
        {
          q: "Under Section 375 of the PPC, intercourse with a girl with or without her consent is statutory rape if she is under what age?",
          opts: ["14 Years", "15 Years", "16 Years", "18 Years"],
          ans: 2,
          exp: "Section 375 (Fifthly) sets the age of statutory consent at sixteen (16) years."
        }
      ]
    },

    // --- CHAPTER XVII: OFFENCES AGAINST PROPERTY ---
    {
      sec: "378 & 379",
      slug: "sec-378",
      chapter: "Chapter XVII: Offences Against Property",
      chapterNum: "XVII",
      title: "Theft and its Punishment (Sections 378 & 379)",
      category: "Offences Against Property",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Compoundable with permission of Court",
      trialCourt: "Any Magistrate",
      crpcStatus: "Core Property Offence (Movable Property)",
      ingredients: [
        "Dishonest intention to take.",
        "Movable property (as defined in Section 22 PPC).",
        "Out of the possession of any person (ownership is not required, mere lawful possession suffices).",
        "Without that person's consent (express or implied).",
        "Moving that property in order to such taking."
      ],
      punishment: "Sec 379: Imprisonment of either description for a term which may extend to three (3) years, or with fine, or with both. (Sec 380: In dwelling house: up to 7 years + fine).",
      illustrations: [
        "A sees B's watch lying on a table in B's house. A, intending to steal it, hides it under a carpet to retrieve it tomorrow. As soon as A moves the watch, theft is complete.",
        "A cuts down a tree on B's land with intention to take the timber dishonestly. While standing rooted in the earth, the tree is immovable property and not subject of theft; as soon as it is severed from the earth, it becomes movable property and the theft is complete (Explanation 1 & 2)."
      ],
      mensReaVsActusReus: "Actus Reus: Moving movable property out of possession without consent. Mens Rea: Dishonest intention (causing wrongful gain or wrongful loss - Sec 24).",
      precedents: "Bashir v. State (1991 PCrLJ 1845): Taking property under a bona fide claim of right, however ill-founded in law, negates dishonest intention and does not amount to theft under Section 378.",
      examNotes: "A classic exam question: Explain the five essential ingredients of Theft. Note the status of trees, animals, and attached fixtures before and after severance.",
      mcqs: [
        {
          q: "Under Section 378 PPC, theft can only be committed in respect of:",
          opts: ["Immovable property", "Movable property", "Intellectual property only", "Real estate land"],
          ans: 1,
          exp: "Section 378 specifies that theft can only be committed of 'movable property' taken out of the possession of another."
        }
      ]
    },
    {
      sec: "383 & 384",
      slug: "sec-383",
      chapter: "Chapter XVII: Offences Against Property",
      chapterNum: "XVII",
      title: "Extortion and its Punishment (Sections 383 & 384)",
      category: "Offences Against Property",
      highYield: true,
      cognizable: false,
      bailable: true,
      compoundable: "Non-Compoundable",
      trialCourt: "Magistrate 1st Class",
      crpcStatus: "Property Coercion Offence",
      ingredients: [
        "Intentionally putting any person in FEAR of any injury to that person, or to any other.",
        "Thereby DISHONESTLY INDUCING the person so put in fear.",
        "To deliver to any person any property or valuable security, or anything signed or sealed which may be converted into a valuable security."
      ],
      punishment: "Sec 384: Imprisonment of either description for a term which may extend to three (3) years, or with fine, or with both.",
      illustrations: [
        "A threatens B that he will publish a defamatory libel concerning B unless B hands over Rs. 50,000 cash. B, under terror of the threat, hands over the money. A has committed extortion.",
        "A threatens to shoot B's son unless B signs an agreement transferring his car. B signs and delivers the deed. A has committed extortion."
      ],
      mensReaVsActusReus: "Dishonest intention combined with intentional induction of fear to compel delivery of property.",
      precedents: "Tariq v. State (PLD 2008 SC 221): Delivery of property by the victim under fear is an indispensable ingredient; if the victim refuses to deliver, the offence is only an attempt under Section 385.",
      examNotes: "Comparison matrix: In Theft, property is taken WITHOUT consent. In Extortion, consent is EXTORTED BY FEAR. In Robbery, theft or extortion is accompanied by imminent violence.",
      mcqs: [
        {
          q: "What distinguishes Extortion (Sec 383) from Theft (Sec 378)?",
          opts: [
            "Extortion only applies to government buildings",
            "In extortion, delivery of property is obtained by intentionally putting a person in fear of injury",
            "Theft requires weapons, extortion does not",
            "Extortion can never involve money"
          ],
          ans: 1,
          exp: "In theft, property is moved without consent; in extortion, consent is coerced and delivery is obtained by putting the victim in fear of injury."
        }
      ]
    },
    {
      sec: "390, 392 & 395",
      slug: "sec-390",
      chapter: "Chapter XVII: Offences Against Property",
      chapterNum: "XVII",
      title: "Robbery and Dacoity (Sections 390, 391, 392 & 395)",
      category: "Offences Against Property",
      highYield: true,
      cognizable: true,
      bailable: false,
      compoundable: "Non-Compoundable",
      trialCourt: "Court of Session / Magistrate 1st Class",
      crpcStatus: "Violent Property Felony (Highway/Gang Crime)",
      ingredients: [
        "Sec 390: In all robbery there is either THEFT or EXTORTION.",
        "When Theft is Robbery: If, in order to the committing of the theft, or in committing it, or in carrying away stolen property, the offender voluntarily causes or attempts to cause to any person death, or hurt, or wrongful restraint, or fear of instant death/hurt/restraint.",
        "When Extortion is Robbery: If the offender is in the presence of the person put in fear, and puts that person in fear of instant death, instant hurt, or instant wrongful restraint, and induces delivery then and there.",
        "Sec 391 (Dacoity): When FIVE (5) OR MORE persons conjointly commit or attempt to commit a robbery."
      ],
      punishment: "Sec 392 (Robbery): Rigorous imprisonment up to ten (10) years and fine; if committed on highway between sunset and sunrise, imprisonment may extend to fourteen (14) years. Sec 395 (Dacoity): Imprisonment for life, or rigorous imprisonment up to ten (10) years, and fine.",
      illustrations: [
        "A holds B down on the pavement while C picks B's pocket. Theft becomes robbery because A voluntarily caused wrongful restraint to commit the theft.",
        "Seven armed bandits storm a bank, hold staff at gunpoint with threats of instant death, and take Rs. 10 million. Since 5 or more persons conjointly committed robbery, it is Dacoity under Section 391/395."
      ],
      mensReaVsActusReus: "Theft/extortion aggravated by imminent physical violence or threat of instant death/hurt.",
      precedents: "Ghulam Rasool v. State (PLD 2011 SC 871): The presence of five or more persons is the sole distinguishing criteria between robbery (Sec 392) and dacoity (Sec 395). If the number falls below five, conviction must be altered from 395 to 392.",
      examNotes: "A classic question: When does Theft become Robbery? And when does Robbery become Dacoity? Remember the highway nighttime sentence increase (up to 14 years).",
      mcqs: [
        {
          q: "What is the minimum number of persons required to commit Dacoity under Section 391 PPC?",
          opts: ["3 persons", "4 persons", "5 persons", "10 persons"],
          ans: 2,
          exp: "Section 391 defines Dacoity as robbery committed or attempted conjointly by five or more persons."
        }
      ]
    },
    {
      sec: "405 & 406",
      slug: "sec-405",
      chapter: "Chapter XVII: Offences Against Property",
      chapterNum: "XVII",
      title: "Criminal Breach of Trust (Sections 405 & 406)",
      category: "Financial & White Collar",
      highYield: true,
      cognizable: false,
      bailable: false,
      compoundable: "Compoundable with permission of Court",
      trialCourt: "Magistrate 1st Class",
      crpcStatus: "Fiduciary Property Violation",
      ingredients: [
        "Entrustment of property, OR dominion over property to the accused.",
        "Dishonest misappropriation, OR conversion of that property to his own use, OR",
        "Dishonest use or disposal of that property in violation of any direction of law prescribing the mode in which such trust is to be discharged, OR of any legal contract.",
        "Or wilfully suffering any other person so to do."
      ],
      punishment: "Sec 406: Imprisonment of either description for a term which may extend to three (3) years, or with fine, or with both. (Sec 409: By public servant, banker, or agent: Life imprisonment or up to 10 years + fine).",
      illustrations: [
        "A, being executor to the will of a deceased person, is entrusted with funds to distribute among heirs. A dishonestly appropriates the funds to buy real estate in his own name. A commits criminal breach of trust under Section 405.",
        "A carrier is entrusted with 100 bags of wheat to deliver at Multan. A sells 20 bags on the way and pockets the proceeds. A commits criminal breach of trust under Section 407."
      ],
      mensReaVsActusReus: "Fiduciary entrustment followed by dishonest conversion/misappropriation.",
      precedents: "Muhammad Tariq v. State (2019 SCMR 1129): Mere breach of a civil contract is not criminal breach of trust unless dishonest intention is proved to have existed at the time of misappropriation.",
      examNotes: "Distinguish Criminal Misappropriation (Sec 403 - property came into possession innocently by finding, then converted) from Criminal Breach of Trust (Sec 405 - property ENTRUSTED by owner under fiduciary relationship).",
      mcqs: [
        {
          q: "What is the indispensable initial element required for Criminal Breach of Trust under Section 405 PPC?",
          opts: ["Breaking into a house", "Entrustment of property or dominion over property", "Use of firearms", "Signing a cheque"],
          ans: 1,
          exp: "Section 405 requires that the accused was first 'entrusted with property, or with any dominion over property'."
        }
      ]
    },
    {
      sec: "415 & 420",
      slug: "sec-420",
      chapter: "Chapter XVII: Offences Against Property",
      chapterNum: "XVII",
      title: "Cheating and dishonestly inducing delivery of property (Sections 415 & 420)",
      category: "Financial & White Collar",
      highYield: true,
      cognizable: true,
      bailable: true,
      compoundable: "Compoundable with permission of Court",
      trialCourt: "Magistrate 1st Class",
      crpcStatus: "Fraud & Deception Benchmark",
      ingredients: [
        "Deception of any person (fraudulent or dishonest misrepresentation).",
        "Fraudulently or dishonestly inducing that person so deceived to deliver any property to any person, OR",
        "To make, alter or destroy the whole or any part of a valuable security, or anything signed or sealed.",
        "Intention to deceive must exist at the very inception of the transaction."
      ],
      punishment: "Sec 420: Imprisonment of either description for a term which may extend to seven (7) years, and shall also be liable to fine.",
      illustrations: [
        "A, by exhibiting fake diamonds to Z and falsely pretending that they are genuine diamonds, intentionally deceives Z, and thereby dishonestly induces Z to pay him Rs. 1,000,000. A cheats under Section 420.",
        "A takes a loan from B promising to pay next month, genuinely intending to do so, but later suffers a business failure and cannot pay. A is not guilty of Section 420; this is a breach of civil contract, as dishonest intent did not exist at the inception."
      ],
      mensReaVsActusReus: "False representation with fraudulent intent from inception inducing victim to part with property.",
      precedents: "Zafar Iqbal v. State (2020 SCMR 1520): Distinction between criminal cheating (Sec 420) and civil breach of contract lies in dishonest intention at the time of making the promise; subsequent inability to perform does not constitute cheating.",
      examNotes: "A huge favourite in FIA and Police exam syllabi: Section 420 is the workhorse of financial fraud, counterfeit goods, and con-artistry.",
      mcqs: [
        {
          q: "Under Section 420 PPC, what is the maximum imprisonment for cheating and dishonestly inducing delivery of property?",
          opts: ["3 Years", "5 Years", "7 Years and fine", "14 Years"],
          ans: 2,
          exp: "Section 420 PPC provides for imprisonment of either description for a term which may extend to seven (7) years and liability to fine."
        }
      ]
    },
    {
      sec: "489-F",
      slug: "sec-489f",
      chapter: "Chapter XVIII: Offences Relating to Documents and Currency",
      chapterNum: "XVIII",
      title: "Dishonestly issuing a cheque that is bounced (Section 489-F)",
      category: "Financial & White Collar",
      highYield: true,
      cognizable: true,
      bailable: true,
      compoundable: "Compoundable with permission of Court",
      trialCourt: "Magistrate 1st Class",
      crpcStatus: "Cheque Dishonour Crime (Inserted by Ord. LXXXV of 2002)",
      ingredients: [
        "Issuing a cheque.",
        "The cheque was issued DISHONESTLY.",
        "The cheque was issued towards the REPAYMENT OF A LOAN, OR for the FULFILMENT OF AN OBLIGATION.",
        "The cheque is DISHONOURED on presentation due to insufficiency of funds, or exceeding arrangement with bank."
      ],
      punishment: "Imprisonment of either description for a term which may extend to three (3) years, or with fine, or with both.",
      illustrations: [
        "A borrows Rs. 5,000,000 from B for business. A issues a post-dated cheque for repayment, knowing his bank balance is only Rs. 2,000 and having no arrangement with bank. The cheque bounces with slip 'Funds Insufficient'. A is guilty under Section 489-F.",
        "A issues a cheque as an advance security deposit for an unexecuted future contingent contract. If the deal falls through, Section 489-F may not apply as there was no existing loan or legally enforceable obligation (security cheque doctrine)."
      ],
      mensReaVsActusReus: "Dishonest issuance of cheque backed by no funds towards existing loan/obligation.",
      precedents: "Mian Allah Ditta v. State (PLD 2014 SC 459): To sustain conviction under Section 489-F, prosecution must prove: (1) Cheque issued dishonestly, (2) For repayment of loan or fulfillment of obligation, (3) Dishonoured on presentation. Cheques given purely as security without an admitted liability do not attract 489-F.",
      examNotes: "The most commonly registered FIR under financial crimes in Pakistani police stations and lower courts. Understand the 'security cheque' defence established in SCMR precedents.",
      mcqs: [
        {
          q: "Under Section 489-F PPC, issuing a bounced cheque is an offence only if issued towards:",
          opts: [
            "A gift or donation",
            "Repayment of a loan or fulfillment of an obligation",
            "A game of chance or gambling",
            "Any future hypothetical agreement"
          ],
          ans: 1,
          exp: "Section 489-F explicitly requires that the cheque must have been dishonestly issued 'towards repayment of a loan or fulfillment of an obligation'."
        }
      ]
    },

    // --- CHAPTER XXI & XXII: DEFAMATION & CRIMINAL INTIMIDATION ---
    {
      sec: "499 & 500",
      slug: "sec-499",
      chapter: "Chapter XXI: Defamation",
      chapterNum: "XXI",
      title: "Defamation and its Punishment (Sections 499 & 500)",
      category: "Defamation & Women Safety",
      highYield: true,
      cognizable: false,
      bailable: true,
      compoundable: "Compoundable",
      trialCourt: "Court of Session / Magistrate 1st Class",
      crpcStatus: "Reputational Tort / Crime",
      ingredients: [
        "Making or publishing any imputation concerning any person.",
        "By words (spoken or intended to be read), or by signs, or by visible representations.",
        "Intending to harm, or knowing or having reason to believe that such imputation will harm the reputation of such person.",
        "Must not fall within any of the TEN (10) STATUTORY EXCEPTIONS (e.g. Imputation of truth for public good, public conduct of public servants, fair comment on public performances)."
      ],
      punishment: "Sec 500: Simple imprisonment for a term which may extend to two (2) years, or with fine, or with both.",
      illustrations: [
        "A prints and distributes a flyer claiming B, a merchant, sells poisonously adulterated milk, knowing the claim is entirely fabricated. A commits defamation under Section 499/500.",
        "A in good faith publishes a truthful report that a government tender was awarded to an unregistered shell company by public official B. A is protected under the First Exception to Section 499 (Truth for public good)."
      ],
      mensReaVsActusReus: "Publication of defamatory imputation with intent or knowledge of reputational harm.",
      precedents: "Altaf Gauhar v. State (PLD 1971 SC 677): To claim the First Exception of truth, the accused must prove not only that the imputation was true, but also that its publication was for the public good.",
      examNotes: "All 10 exceptions to Section 499 PPC must be known by heart in CSS / Civil Judge exams: (1) Truth for public good, (2) Public conduct of public servant, (3) Conduct of any person touching any public question, etc.",
      mcqs: [
        {
          q: "How many statutory exceptions are listed under Section 499 of the Pakistan Penal Code?",
          opts: ["4 Exceptions", "6 Exceptions", "8 Exceptions", "10 Exceptions"],
          ans: 3,
          exp: "Section 499 PPC contains exactly ten (10) statutory exceptions where an imputation does not amount to defamation."
        }
      ]
    },
    {
      sec: "503 & 506",
      slug: "sec-503",
      chapter: "Chapter XXII: Criminal Intimidation",
      chapterNum: "XXII",
      title: "Criminal Intimidation and its Punishment (Sections 503 & 506)",
      category: "Defamation & Women Safety",
      highYield: true,
      cognizable: false,
      bailable: true,
      compoundable: "Compoundable",
      trialCourt: "Any Magistrate",
      crpcStatus: "Coercive Threat Offence",
      ingredients: [
        "Threatening another with any injury to his person, reputation or property, or to the person or reputation of anyone in whom that person is interested.",
        "With intent to cause alarm to that person, OR",
        "To cause that person to do any act which he is not legally bound to do, or to omit to do any act which that person is legally entitled to do, as the means of avoiding the execution of such threat."
      ],
      punishment: "Sec 506 (Part 1): Imprisonment of either description up to two (2) years, or fine, or both. Sec 506 (Part 2 - if threat be to cause death or grievous hurt, or destruction of property by fire, or impute unchastity to woman): Imprisonment up to seven (7) years, or fine, or both.",
      illustrations: [
        "A, for the purpose of inducing B to desist from prosecuting a civil suit, threatens to burn B's ancestral house. A commits criminal intimidation under Section 503/506 (Part 2; up to 7 years).",
        "A tells B: 'If you do not vote for my candidate, I will make sure you are not invited to my wedding.' This is not criminal intimidation because the threat does not involve an illegal 'injury' under Section 44 PPC."
      ],
      mensReaVsActusReus: "Communication of a threat of illegal injury with intent to cause alarm or coerce action/omission.",
      precedents: "Ghulam Murtaza v. State (2017 PCrLJ 1092): Mere empty words uttered during a heated squabble without real intent or capability to cause alarm do not constitute criminal intimidation under Section 506.",
      examNotes: "Distinguish Part 1 of Section 506 (ordinary intimidation - up to 2 years) from Part 2 (aggravated intimidation involving threats of death/grievous hurt - up to 7 years).",
      mcqs: [
        {
          q: "What is the maximum punishment under Part 2 of Section 506 PPC if the threat is to cause death or grievous hurt?",
          opts: ["2 Years", "3 Years", "7 Years, or fine, or both", "Life Imprisonment"],
          ans: 2,
          exp: "Under Part 2 of Section 506, if the threat is to cause death or grievous hurt, the punishment may extend to 7 years, or with fine, or with both."
        }
      ]
    },
    {
      sec: "509",
      slug: "sec-509",
      chapter: "Chapter XXII: Criminal Intimidation, Insult and Annoyance",
      chapterNum: "XXII",
      title: "Word, gesture or act intended to insult the modesty of a woman (Workplace & Street Harassment)",
      category: "Defamation & Women Safety",
      highYield: true,
      cognizable: true,
      bailable: true,
      compoundable: "Compoundable with permission of Court",
      trialCourt: "Magistrate 1st Class",
      crpcStatus: "Anti-Harassment Benchmark",
      ingredients: [
        "Intending to insult the modesty of any woman.",
        "Utters any word, makes any sound or gesture, or exhibits any object, intending that such word or sound shall be heard, or that such gesture or object shall be seen by such woman, OR",
        "Intrudes upon the privacy of such woman.",
        "Covers verbal street catcalling, stalking, electronic sexual harassment, and workplace harassment."
      ],
      punishment: "Imprisonment of either description for a term which may extend to three (3) years, or with fine which may extend to five hundred thousand rupees (Rs. 500,000), or with both (Amended in 2010).",
      illustrations: [
        "A repeatedly sends sexually explicit messages and audio clips to a female colleague's phone against her objections. A is guilty under Section 509 PPC (and PECA 2016).",
        "A follows a university student on a motorcycle in a public street, repeatedly catcalling and making lewd gestures intended to humiliate her. A commits an offence under Section 509."
      ],
      mensReaVsActusReus: "Actus Reus: Making lewd sound, gesture, or displaying object. Mens Rea: Intention to insult female modesty or intrude on privacy.",
      precedents: "Sultana Begum v. State (PLD 2018 SC 49): Section 509 was strengthened by Parliament to create safe public and work environments for women; heavy fines must be imposed alongside imprisonment to deter stalkers.",
      examNotes: "Note the 2010 Criminal Law (Amendment) Act which substantially increased punishment from 1 year to 3 years and introduced a fine of up to Rs. 500,000.",
      mcqs: [
        {
          q: "What is the maximum fine that can be imposed under Section 509 of the Pakistan Penal Code?",
          opts: ["Rs. 50,000", "Rs. 100,000", "Rs. 500,000", "Rs. 1,000,000"],
          ans: 2,
          exp: "The Criminal Law (Amendment) Act, 2010 raised the maximum fine under Section 509 PPC to Rs. 500,000 alongside up to 3 years imprisonment."
        }
      ]
    },

    // --- CHAPTER XXIII: ATTEMPTS TO COMMIT OFFENCES ---
    {
      sec: "511",
      slug: "sec-511",
      chapter: "Chapter XXIII: Attempts to Commit Offences",
      chapterNum: "XXIII",
      title: "Punishment for attempting to commit offences punishable with imprisonment for life or imprisonment",
      category: "General Exceptions",
      highYield: true,
      cognizable: "Same as offence attempted",
      bailable: "Same as offence attempted",
      compoundable: "Same as offence attempted",
      trialCourt: "Court by which offence attempted is triable",
      crpcStatus: "General Residual Attempt Clause",
      ingredients: [
        "Attempting to commit an offence punishable by this Code with imprisonment for life or imprisonment, OR causing such an offence to be committed.",
        "In such attempt doing ANY ACT towards the commission of the offence.",
        "No express provision is made by this Code for the punishment of such attempt (residual clause).",
        "The act must have passed beyond the stage of mere INTENTION and PREPARATION into the stage of EXECUTION."
      ],
      punishment: "Imprisonment of any description provided for the offence, for a term which may extend to ONE-HALF (1/2) of the longest term provided for that offence, or with such fine as is provided, or with both.",
      illustrations: [
        "A makes an attempt to steal some jewels by breaking open a box, and finds after so opening the box, that there is no jewel in it. A has done an act towards the commission of theft, and is therefore guilty under Section 511/379 (Attempted theft).",
        "A puts his hand into B's pocket to pick it, but B's pocket is empty. A is guilty of attempted theft under Section 511."
      ],
      mensReaVsActusReus: "Four stages of crime: (1) Intention, (2) Preparation, (3) Attempt, (4) Accomplishment. Intention and Preparation are generally not punishable; Attempt is punished.",
      precedents: "Bashir v. State (PLD 1982 SC 139): The test of attempt is whether the accused has done an overt act which brings him dangerously close to the completion of the offence, and would have succeeded but for an external intervention.",
      examNotes: "A classic jurisprudence question: Explain the four stages of crime and the point at which preparation ceases and attempt begins. The general formula under Section 511 is half the maximum sentence.",
      mcqs: [
        {
          q: "Under Section 511 PPC, what is the maximum term of imprisonment for attempting an offence where no express provision is made?",
          opts: [
            "One-fourth (1/4) of the longest term",
            "One-half (1/2) of the longest term provided for that offence",
            "Full term of the offence",
            "Exactly 2 years in all cases"
          ],
          ans: 1,
          exp: "Section 511 prescribes that the offender may be punished with imprisonment for a term which may extend to one-half of the longest term provided for that offence."
        }
      ]
    }
  ],
  comparisons: [
    {
      title: "Theft vs Extortion vs Robbery vs Dacoity",
      summary: "The progressive hierarchy of property offences under Chapter XVII",
      points: [
        { feature: "Consent", theft: "Taken without consent", extortion: "Extorted by intentionally putting in fear", robbery: "Either theft or extortion accompanied by violence/fear of instant death", dacoity: "Conjoint robbery by 5+ persons" },
        { feature: "Property", theft: "Movable property only", extortion: "Movable, immovable, or valuable security", robbery: "Movable or valuable security", dacoity: "Movable or valuable security" },
        { feature: "Force / Fear", theft: "No force or fear required", extortion: "Fear of injury in future or present", robbery: "Fear of INSTANT death, instant hurt, or instant restraint", dacoity: "Armed violence / gang intimidation" },
        { feature: "Persons Required", theft: "One or more", extortion: "One or more", robbery: "One to four persons", dacoity: "FIVE (5) or more persons conjointly" }
      ]
    },
    {
      title: "Section 34 (Common Intention) vs Section 149 (Common Object)",
      summary: "Comparison of joint and constructive liability under the Pakistan Penal Code",
      points: [
        { feature: "Minimum Persons", sec34: "Two (2) or more persons", sec149: "FIVE (5) or more persons (Unlawful Assembly)" },
        { feature: "Meeting of Minds", sec34: "Requires prior meeting of minds (pre-arranged plan)", sec149: "No prior meeting of minds required; common object can develop on the spot" },
        { feature: "Overt Participation", sec34: "Active participation in furtherance of common intention is required", sec149: "Mere membership of the assembly at the time of the offence is sufficient" },
        { feature: "Nature of Section", sec34: "Rule of evidence; does not create a distinct substantive offence", sec149: "Creates a distinct substantive constructive offence" }
      ]
    },
    {
      title: "Qatl-e-Amd (302) vs Qatl Shibh-i-Amd (315) vs Qatl-i-Khata (318)",
      summary: "The statutory categorization of homicide under Chapter XVI (Qisas & Diyat)",
      points: [
        { feature: "Intention", amd: "Specific intention to cause death or fatal bodily injury", shibh: "Intention to cause hurt, but NOT intention to kill", khata: "NO intention to kill or hurt (Mistake or Negligence)" },
        { feature: "Weapon / Means", amd: "Deadly weapon or act likely in ordinary course to cause death", shibh: "Weapon or act NOT likely in ordinary course to cause death", khata: "Rash/negligent act or accidental mishap" },
        { feature: "Mandatory Penalty", amd: "Death (Qisas / Tazir) or Life Imprisonment", shibh: "DIYAT is mandatory (+ Tazir up to 25 yrs)", khata: "DIYAT is mandatory (+ Tazir up to 5/10 yrs)" }
      ]
    }
  ]
};

const outputPath = path.join(__dirname, '../frontend/js/data_ppc.js');
const fileContent = `/**
 * Pakistan Penal Code (Act XLV of 1860) - Comprehensive Section Finder Database
 * Academic & Professional Legal Dataset for CSS, PMS, Judicial, Police & FIA Aspirants
 */

const PPC_DATA = ${JSON.stringify(ppcData, null, 2)};

if (typeof window !== 'undefined') {
  window.PPC_DATA = PPC_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PPC_DATA;
}
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated frontend/js/data_ppc.js! Size: ${(fileContent.length / 1024).toFixed(1)} KB`);
