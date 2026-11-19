// Part 1: Topics 1, 2, and 3 (90 Questions)
// Topic 1: Vocabulary, Grammar Usage, Sentence Structuring (30 MCQs)
// Topic 2: Criminal Procedure Code (CrPC), 1898 (30 MCQs)
// Topic 3: Qanun-e-Shahadat Order, 1984 (30 MCQs)

const TOPIC_1_ENGLISH = [
  {
    q: "Select the word that is most nearly OPPOSITE in meaning to 'EQUIVOCAL':",
    opts: ["Ambiguous", "Unambiguous", "Pretentious", "Deceptive"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Equivocal' means open to more than one interpretation or ambiguous. Its opposite is 'unambiguous' or clear."
  },
  {
    q: "Choose the word most SIMILAR in meaning to 'PERNICIOUS':",
    opts: ["Harmful", "Innocuous", "Salubrious", "Beneficial"],
    ans: "A",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Pernicious' means having a harmful effect, especially in a gradual or subtle way."
  },
  {
    q: "Choose the correct sentence structure:",
    opts: [
      "Neither the prosecutor nor the defense attorneys was present in court.",
      "Neither the prosecutor nor the defense attorneys were present in court.",
      "Neither the prosecutor or the defense attorneys were present in court.",
      "Neither the prosecutor nor the defense attorneys has been present in court."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "With correlative conjunctions 'neither... nor', the verb agrees with the closer subject ('defense attorneys' is plural, so 'were' is correct)."
  },
  {
    q: "Identify the correct option to fill in the blank: 'The accused was found guilty _____ embezzling state funds.'",
    opts: ["for", "of", "with", "in"],
    ans: "B",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The adjective 'guilty' takes the preposition 'of' ('guilty of a crime')."
  },
  {
    q: "Select the sentence with correct conditional usage:",
    opts: [
      "If the investigator had gathered the forensic evidence, the suspect would not be acquitted.",
      "If the investigator had gathered the forensic evidence, the suspect would not have been acquitted.",
      "If the investigator gathered the forensic evidence, the suspect would not have been acquitted.",
      "If the investigator would have gathered the forensic evidence, the suspect will not be acquitted."
    ],
    ans: "B",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Third conditional (past unreal condition): 'If + past perfect (had gathered)... would + have + past participle (would not have been acquitted)'."
  },
  {
    q: "Choose the word closest in meaning to 'OBSEQUIOUS':",
    opts: ["Servile", "Arrogant", "Belligerent", "Omniscient"],
    ans: "A",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Obsequious' means obedient or attentive to an excessive or servile degree."
  },
  {
    q: "Select the correct preposition: 'The suspect refused to comply _____ the summons issued by the investigating officer.'",
    opts: ["with", "to", "by", "at"],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The verb 'comply' takes the preposition 'with' ('comply with orders/summons')."
  },
  {
    q: "Choose the correct indirect speech form of: He said, 'I have completed the investigation.'",
    opts: [
      "He said that he completed the investigation.",
      "He said that he has completed the investigation.",
      "He said that he had completed the investigation.",
      "He told that he had completed the investigation."
    ],
    ans: "C",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Present perfect 'have completed' shifts into past perfect 'had completed' in indirect speech with past reporting verb 'said'."
  },
  {
    q: "What does the Latin phrase 'PRIMA FACIE' mean?",
    opts: [
      "Based on the first impression / at first sight",
      "Beyond all reasonable doubt",
      "Guilty mind",
      "In the course of proceedings"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Prima facie' literally translates to 'at first face' or based on the first impression; accepted as correct until proved otherwise."
  },
  {
    q: "Identify the sentence that contains a dangling modifier:",
    opts: [
      "Walking into the courtroom, the documents fell from the lawyer's briefcase.",
      "Walking into the courtroom, the lawyer dropped the documents.",
      "As the lawyer walked into the courtroom, the documents fell.",
      "The lawyer, walking into the courtroom, accidentally dropped the documents."
    ],
    ans: "A",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "In option A, 'Walking into the courtroom' illogically modifies 'the documents' instead of the person walking."
  },
  {
    q: "Choose the antonym of 'SAGACIOUS':",
    opts: ["Foolish", "Wise", "Insightful", "Judicious"],
    ans: "A",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Sagacious' means having or showing keen mental discernment and good judgment; its antonym is 'foolish' or ignorant."
  },
  {
    q: "Identify the correctly punctuated and structured sentence:",
    opts: [
      "The judge arrived early, however the stenographer was late.",
      "The judge arrived early; however, the stenographer was late.",
      "The judge arrived early however; the stenographer was late.",
      "The judge arrived early, however, the stenographer was late."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "When joining two independent clauses with a conjunctive adverb like 'however', use a semicolon before it and a comma after it."
  },
  {
    q: "Select the option that best completes the sentence: 'The director, accompanied by his deputies, _____ attending the briefing.'",
    opts: ["are", "is", "were", "have been"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Parenthetical phrases like 'accompanied by...', 'as well as...', and 'together with...' do not change the number of the subject. 'The director' is singular, so 'is' is correct."
  },
  {
    q: "Choose the synonym of 'ESOTERIC':",
    opts: ["Obscure", "Commonplace", "Transparent", "Accessible"],
    ans: "A",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Esoteric' refers to knowledge intended for or likely to be understood by only a small number of people with specialized knowledge."
  },
  {
    q: "What is the meaning of the idiom 'A MOOT POINT'?",
    opts: [
      "An undisputed fact",
      "A subject that is open to debate or unresolved",
      "A decisive victory",
      "A severe reprimand"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "A 'moot point' is an issue that is subject to debate, dispute, or uncertainty, often with little practical significance."
  },
  {
    q: "Identify the correct preposition: 'The suspect was charged _____ forgery and criminal breach of trust.'",
    opts: ["with", "for", "on", "by"],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "One is 'charged with' an offence (whereas one is 'accused of' an offence)."
  },
  {
    q: "Choose the correct passive voice: 'The federal agent interrogated the suspect for three hours.'",
    opts: [
      "The suspect was interrogated by the federal agent for three hours.",
      "The suspect had been interrogated by the federal agent for three hours.",
      "The suspect is interrogated for three hours by the federal agent.",
      "The suspect has been interrogated by the federal agent for three hours."
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Simple past active 'interrogated' becomes 'was/were + past participle' (was interrogated)."
  },
  {
    q: "Select the antonym of 'EPHEMERAL':",
    opts: ["Transitory", "Fleeting", "Perpetual", "Transient"],
    ans: "C",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Ephemeral' means lasting for a very short time. Its opposite is 'perpetual' or everlasting."
  },
  {
    q: "Complete the sentence correctly: 'Scarcely had the officer begun the inquiry _____ new allegations surfaced.'",
    opts: ["when", "than", "then", "after"],
    ans: "A",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Scarcely... when' and 'Hardly... when' are standard correlative pairs in English grammar."
  },
  {
    q: "What does the Latin maxim 'ACTUS NON FACIT REUM NISI MENS SIT REA' mean?",
    opts: [
      "Ignorance of the law is no excuse",
      "An act does not make a person guilty unless the mind is also guilty",
      "No one can be tried twice for the same offence",
      "He who acts through another acts himself"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "This is the cardinal principle of criminal law: both physical criminal act (actus reus) and mental intent (mens rea) are necessary for guilt."
  },
  {
    q: "Identify the correct word: 'The court ordered the immediate _____ of the illicit property.'",
    opts: ["confiscate", "confiscation", "confiscatory", "confiscating"],
    ans: "B",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The blank requires a noun after the adjective 'immediate'; 'confiscation' is the noun form."
  },
  {
    q: "Choose the correct word: 'Neither the evidence nor the witness testimonies _____ sufficient for conviction.'",
    opts: ["was", "were", "is", "has been"],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "In 'neither... nor', the verb agrees with the closer subject 'witness testimonies' (plural noun), thus 'were' is correct."
  },
  {
    q: "Choose the word most OPPOSITE in meaning to 'VINDICATE':",
    opts: ["Exonerate", "Acquit", "Inculpate", "Absolve"],
    ans: "C",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Vindicate' means to clear someone of blame or suspicion. 'Inculpate' means to accuse or blame."
  },
  {
    q: "Identify the sentence that demonstrates correct parallel structure:",
    opts: [
      "The duties of the legal officer include reviewing files, drafting petitions, and to appear in court.",
      "The duties of the legal officer include reviewing files, drafting petitions, and appearing in court.",
      "The duties of the legal officer include to review files, drafting petitions, and appearing in court.",
      "The duties of the legal officer include file reviews, drafting petitions, and appearing in court."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "Parallel structure requires consistent grammatical forms: 'reviewing files, drafting petitions, and appearing in court' (all gerund phrases)."
  },
  {
    q: "Fill in the blank: 'He was completely absorbed _____ reading the investigative report.'",
    opts: ["with", "at", "in", "by"],
    ans: "C",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "The correct preposition following 'absorbed' when expressing mental immersion is 'in'."
  },
  {
    q: "Choose the synonym of 'UBIQUITOUS':",
    opts: ["Omnipresent", "Rare", "Scarce", "Localized"],
    ans: "A",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Ubiquitous' means present, appearing, or found everywhere."
  },
  {
    q: "Choose the sentence with correct subjunctive mood:",
    opts: [
      "The magistrate recommended that the prosecutor files an amended complaint.",
      "The magistrate recommended that the prosecutor file an amended complaint.",
      "The magistrate recommended that the prosecutor filed an amended complaint.",
      "The magistrate recommended that the prosecutor should have filed an amended complaint."
    ],
    ans: "B",
    diff: "Hard",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "In English mandative subjunctive clauses following verbs like 'recommend', 'demand', or 'insist', the base form of the verb ('file') is used."
  },
  {
    q: "Choose the antonym of 'BELLICOSE':",
    opts: ["Pugnacious", "Aggressive", "Peaceable", "Hostile"],
    ans: "C",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Bellicose' means demonstrating aggression and willingness to fight. Its opposite is 'peaceable'."
  },
  {
    q: "Select the sentence with no grammatical errors:",
    opts: [
      "Each of the investigating officers have submitted their reports.",
      "Each of the investigating officers has submitted his report.",
      "Each of the investigating officer have submitted his reports.",
      "Each of the investigating officers are submitting their reports."
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Each' is an indefinite singular pronoun requiring a singular verb ('has submitted') and singular pronoun ('his report')."
  },
  {
    q: "What is the meaning of the legal idiom 'ULTRA VIRES'?",
    opts: [
      "Within legal authority",
      "Beyond legal power or authority",
      "In good faith",
      "By reason of insanity"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Vocabulary, Grammar Usage, Sentence Structuring",
    exp: "'Ultra vires' is a Latin phrase meaning 'beyond the powers'; an act done without legal authority."
  }
];

const TOPIC_2_CRPC = [
  {
    q: "When did the Code of Criminal Procedure (CrPC), 1898 come into force?",
    opts: ["1st January 1898", "1st July 1898", "14th August 1898", "1st October 1898"],
    ans: "B",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "The Code of Criminal Procedure, 1898 (Act V of 1898) received the assent of the Governor-General on 22 March 1898 and came into force on the first day of July, 1898 (Section 1)."
  },
  {
    q: "Under Section 4(1)(f) of the CrPC, a 'cognizable offence' is defined as one in which a police officer may:",
    opts: [
      "Arrest only after obtaining a warrant from a Magistrate",
      "Arrest without a warrant in accordance with the second schedule or any other law",
      "Investigate only after permission of the Sessions Judge",
      "Impose a fine directly on the accused"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Under Section 4(1)(f) CrPC, 'Cognizable offence' means an offence for which a police officer may, in accordance with the second schedule or under any other law for the time being in force, arrest without warrant."
  },
  {
    q: "Which section of the CrPC empowers police officers to arrest any person without an order from a Magistrate and without a warrant?",
    opts: ["Section 42", "Section 51", "Section 54", "Section 61"],
    ans: "C",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 54 of the CrPC enumerates nine categories of circumstances under which any police officer may arrest any person without an order from a Magistrate and without a warrant."
  },
  {
    q: "Under Section 61 of the CrPC, no police officer shall detain in custody a person arrested without warrant for a period exceeding:",
    opts: ["12 hours", "24 hours", "48 hours", "72 hours"],
    ans: "B",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 61 CrPC states that no police officer shall detain in custody a person arrested without warrant for a longer period than under all circumstances is reasonable, and such period shall not, in the absence of a special order under Section 167, exceed twenty-four hours exclusive of the time necessary for the journey."
  },
  {
    q: "Under Section 103 of CrPC, before making a search under Chapter VII, the officer about to make it shall call upon:",
    opts: [
      "At least four government servants to attend",
      "Two or more respectable inhabitants of the locality to attend and witness the search",
      "A Magistrate of the First Class only",
      "The legal representative of the accused person"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 103(1) CrPC requires the officer to call upon two or more respectable inhabitants of the locality in which the place to be searched is situate to attend and witness the search."
  },
  {
    q: "Under Section 87 of CrPC, the proclamation requiring an absconding person to appear must provide a time of not less than:",
    opts: ["15 days", "30 days", "60 days", "90 days"],
    ans: "B",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 87(1) CrPC states that the court may publish a written proclamation requiring him to appear at a specified place and at a specified time not less than thirty days from the date of publishing such proclamation."
  },
  {
    q: "Information relating to the commission of a cognizable offence is recorded under which section of CrPC?",
    opts: ["Section 154", "Section 155", "Section 156", "Section 161"],
    ans: "A",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 154 CrPC governs the recording of information in cognizable cases, popularly known as the First Information Report (FIR)."
  },
  {
    q: "Under Section 155 of CrPC, what is required before a police officer can investigate a non-cognizable offence?",
    opts: [
      "Approval of the Superintendent of Police",
      "An order from a Magistrate having power to try such case or commit the same for trial",
      "Notice served to the accused person",
      "Consent of the complainant in writing"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 155(2) CrPC provides that no police officer shall investigate a non-cognizable case without the order of a Magistrate of the first or second class having power to try such case or commit the same for trial."
  },
  {
    q: "Examination of witnesses by the police during an investigation is conducted under which section of CrPC?",
    opts: ["Section 160", "Section 161", "Section 162", "Section 164"],
    ans: "B",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 161 CrPC empowers any police officer making an investigation to examine orally any person supposed to be acquainted with the facts and circumstances of the case."
  },
  {
    q: "According to Section 162 of CrPC, a statement made by any person to a police officer in the course of an investigation shall:",
    opts: [
      "Always be attested on oath",
      "Not be signed by the person making it",
      "Be signed in the presence of two witnesses",
      "Be forwarded directly to the Supreme Court"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 162 CrPC explicitly provides that no statement made by any person to a police officer in the course of an investigation shall be signed by the person making it."
  },
  {
    q: "Which section of CrPC provides for the recording of confessions and statements by a Magistrate?",
    opts: ["Section 161", "Section 164", "Section 173", "Section 342"],
    ans: "B",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 164 CrPC empowers any Magistrate of the First Class, or any Magistrate of the Second Class specially empowered, to record any statement or confession made to him in the course of an investigation."
  },
  {
    q: "Under Section 167 of CrPC, what is the maximum aggregate period of police physical remand that a Magistrate may authorize?",
    opts: ["7 days", "14 days", "15 days", "30 days"],
    ans: "C",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Under Section 167(2) CrPC, the Magistrate may authorize the detention of the accused in such custody as such Magistrate thinks fit, for a term not exceeding fifteen days on the whole."
  },
  {
    q: "Every investigation under Chapter XIV of the CrPC must be completed without unnecessary delay, and the report under Section 173 (Challan) submitted within:",
    opts: [
      "7 days",
      "14 days",
      "30 days",
      "60 days"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 173(1) CrPC requires the report of police to be forwarded to the Magistrate within fourteen days from the date on which the information relating to the commission of the offence was received."
  },
  {
    q: "Under Section 172 of the CrPC, what is the official daily record kept by an investigating officer called?",
    opts: ["First Information Report", "Inquest Report", "Case Diary (Special Diary)", "Charge Sheet"],
    ans: "C",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 172 CrPC mandates that every police officer making an investigation shall day by day enter his proceedings in a diary, commonly referred to as the Case Diary or Zimni."
  },
  {
    q: "Under Section 190 of CrPC, a Magistrate of the First Class may take cognizance of any offence upon:",
    opts: [
      "A complaint of facts which constitute such offence",
      "A police-report of such facts",
      "Information received from any person other than a police officer, or upon his own knowledge or suspicion",
      "All of the above"
    ],
    ans: "D",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Under Section 190(1) CrPC, cognizance may be taken upon (a) a complaint, (b) a police report, or (c) information received from any other person or own knowledge/suspicion."
  },
  {
    q: "According to Section 221 of CrPC, what must every charge state?",
    opts: [
      "The offence with which the accused is charged",
      "The exact date of judgment",
      "The recommendation for punishment",
      "The personal assets of the accused"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 221(1) CrPC states: 'Every charge under this Code shall state the offence with which the accused is charged.'"
  },
  {
    q: "Under Section 234 of CrPC, a person may be charged with and tried at one trial for offences of the same kind committed within the space of:",
    opts: [
      "6 months, not exceeding two offences",
      "12 months, not exceeding three offences",
      "12 months, not exceeding five offences",
      "24 months, not exceeding three offences"
    ],
    ans: "B",
    diff: "Hard",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 234 CrPC provides that when a person is accused of more offences than one of the same kind committed within the space of twelve months, he may be charged with and tried at one trial for any number of them not exceeding three."
  },
  {
    q: "In a trial before a Magistrate under Chapter XX of CrPC, which section provides for supply of copies of statements and documents to the accused?",
    opts: ["Section 241-A", "Section 242", "Section 245", "Section 249-A"],
    ans: "A",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 241-A CrPC provides that in all cases instituted upon police report, copies of statements of all witnesses recorded under sections 161 and 164 and of the inspection note shall be supplied free of cost to the accused not less than seven days before the commencement of trial."
  },
  {
    q: "Under Section 249-A of CrPC, a Magistrate has the power to:",
    opts: [
      "Remand an accused indefinitely",
      "Acquit the accused at any stage of the case after hearing both sides if allegations are groundless",
      "Transfer the case outside the province",
      "Enhance the maximum punishment prescribed by law"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 249-A CrPC empowers a Magistrate to acquit the accused at any stage of the case if, after giving notice to the prosecutor and accused, he considers that the charge is groundless or there is no probability of conviction."
  },
  {
    q: "What is the equivalent power of Section 249-A for the Court of Session under Chapter XXII-A?",
    opts: ["Section 265-D", "Section 265-H", "Section 265-K", "Section 265-N"],
    ans: "C",
    diff: "Hard",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 265-K CrPC gives the Court of Session the power to acquit the accused at any stage of the case if there is no probability of the accused being convicted."
  },
  {
    q: "Under Section 260 of CrPC, what is the maximum sentence of imprisonment that can be passed in a Summary Trial?",
    opts: ["1 month", "3 months", "6 months", "1 year"],
    ans: "B",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 262(2) CrPC states that no sentence of imprisonment for a term exceeding three months shall be passed in the case of any conviction under Chapter XXII (Summary Trials)."
  },
  {
    q: "Tender of pardon to an accomplice (turning approver) is dealt with under which section of CrPC?",
    opts: ["Section 337", "Section 340", "Section 344", "Section 345"],
    ans: "A",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 337 CrPC deals with the tender of pardon to an accomplice on condition of his making a full and true disclosure of the whole circumstances."
  },
  {
    q: "Which section of CrPC governs the examination of the accused person by the court to explain circumstances appearing in the evidence against him?",
    opts: ["Section 242", "Section 340(2)", "Section 342", "Section 364"],
    ans: "C",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 342 CrPC provides that for the purpose of enabling the accused to explain any circumstances appearing in the evidence against him, the Court shall question him generally on the case after witnesses for prosecution have been examined."
  },
  {
    q: "Which section of CrPC deals with bail in bailable offences?",
    opts: ["Section 496", "Section 497", "Section 498", "Section 498-A"],
    ans: "A",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 496 CrPC governs the granting of bail as a matter of right in bailable offences."
  },
  {
    q: "Under Section 497(1) of CrPC, bail in non-bailable offences shall not be granted if there appear reasonable grounds for believing that the accused is guilty of an offence punishable with:",
    opts: [
      "Fine only",
      "Imprisonment for 3 years",
      "Death, imprisonment for life, or imprisonment for 10 years",
      "Simple imprisonment of any term"
    ],
    ans: "C",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "The prohibitory clause of Section 497(1) CrPC bars grant of bail if there appear reasonable grounds for believing that the accused has been guilty of an offence punishable with death or imprisonment for life or imprisonment for ten years (unless covered by statutory exceptions)."
  },
  {
    q: "Which section of CrPC confers power upon the High Court or Court of Session to grant pre-arrest bail or direct admission to bail?",
    opts: ["Section 491", "Section 497", "Section 498", "Section 500"],
    ans: "C",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 498 CrPC confers concurrent power upon the High Court and Court of Session to direct that any person be admitted to bail (including pre-arrest bail based on proven mala fides/ulterior motives)."
  },
  {
    q: "Under Section 491 of CrPC, the High Court has the power to issue directions in the nature of:",
    opts: [
      "Habeas Corpus",
      "Quo Warranto",
      "Mandamus",
      "Certiorari"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 491 CrPC provides statutory power to the High Court to issue directions in the nature of a Habeas Corpus for setting at liberty persons illegally or improperly detained."
  },
  {
    q: "Inherent powers of the High Court to make such orders as may be necessary to give effect to any order under CrPC or prevent abuse of process are preserved under:",
    opts: ["Section 439", "Section 498", "Section 561-A", "Section 526"],
    ans: "C",
    diff: "Easy",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 561-A CrPC saves the inherent power of the High Court to make such orders as may be necessary to prevent abuse of the process of any Court or otherwise to secure the ends of justice."
  },
  {
    q: "Under Section 417 of CrPC, who can direct the Public Prosecutor to present an appeal to the High Court against an order of acquittal passed by any court other than a High Court?",
    opts: [
      "The Inspector General of Police",
      "The Provincial Government (or Federal Government in certain cases)",
      "The Supreme Judicial Council",
      "The Bar Council"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 417(1) CrPC empowers the Provincial Government (or Federal Government under subsection (2)) to direct the Public Prosecutor to present an appeal to the High Court from an original or appellate order of acquittal."
  },
  {
    q: "Under Section 100 of CrPC, a search warrant for a person wrongfully confined may be issued by:",
    opts: [
      "Any police constable on duty",
      "A Magistrate of the First Class or Sub-Divisional Magistrate",
      "A Civil Judge Class III",
      "The headman of the village only"
    ],
    ans: "B",
    diff: "Hard",
    subCat: "Criminal Procedure Code (CrPC), 1898",
    exp: "Section 100 CrPC provides that if any Magistrate of the First Class has reason to believe that any person is confined under circumstances that amount to an offence, he may issue a search warrant."
  }
];

const TOPIC_3_QSO = [
  {
    q: "The Qanun-e-Shahadat Order, 1984 was promulgated on:",
    opts: ["14th August 1984", "28th October 1984", "25th December 1984", "1st January 1985"],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "The Qanun-e-Shahadat Order, 1984 (President's Order No. X of 1984) was promulgated on 28th October 1984, repealing the Evidence Act, 1872."
  },
  {
    q: "Under Article 3 of the Qanun-e-Shahadat Order, 1984, who is competent to testify?",
    opts: [
      "Only individuals holding Pakistani citizenship",
      "All persons, unless the Court considers they are prevented from understanding questions by tender years, extreme old age, disease, or unsoundness of mind",
      "Only male Muslims above the age of 21",
      "Any person who is an advocate of the High Court"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 3 QSO states that all persons shall be competent to testify unless the Court considers they are prevented from understanding the questions put to them, or from giving rational answers by reason of tender years, extreme old age, disease, or unsound mind."
  },
  {
    q: "According to Article 17 of QSO 1984, what is the required competence of witnesses in matters pertaining to financial or future obligations?",
    opts: [
      "One male witness only",
      "Two male witnesses, or one male and two female witnesses",
      "Four female witnesses only",
      "Three independent witnesses regardless of gender"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 17(2)(a) QSO mandates that in matters pertaining to financial or future obligations, the instrument shall be attested by two men, or one man and two women."
  },
  {
    q: "Under Article 16 of the Qanun-e-Shahadat Order, 1984, an accomplice shall be:",
    opts: [
      "Incompetent to testify in all criminal cases",
      "A competent witness against an accused person, except in cases punishable with Hadd",
      "Treated as the primary complainant",
      "Exempt from cross-examination"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 16 QSO provides that an accomplice shall be a competent witness against an accused person, except in the case of an offence punishable with Hadd."
  },
  {
    q: "Facts which, though not in issue, are so connected with a fact in issue as to form part of the same transaction (Res Gestae) are relevant under which Article?",
    opts: ["Article 18", "Article 19", "Article 24", "Article 29"],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 19 QSO (corresponding to Section 6 of the repealed Evidence Act) deals with facts forming part of the same transaction (the doctrine of Res Gestae)."
  },
  {
    q: "Under Article 22 of QSO 1984, facts necessary to explain or introduce relevant facts, including the identification of accused persons (Identification Parade), are:",
    opts: ["Inadmissible", "Relevant", "Conclusive proof of guilt", "Admissible only in civil suits"],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 22 QSO makes facts necessary to explain or introduce a fact in issue or relevant fact, or which establish the identity of any thing or person, relevant."
  },
  {
    q: "Under Article 37 of QSO 1984, a confession made by an accused person is irrelevant in a criminal proceeding if caused by:",
    opts: [
      "Inducement, threat or promise proceeding from a person in authority",
      "Voluntary desire to state the truth",
      "Religious repentance",
      "Advice of his legal counsel"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 37 QSO renders a confession irrelevant if the making of it appears to have been caused by any inducement, threat or promise proceeding from a person in authority."
  },
  {
    q: "Article 38 of the Qanun-e-Shahadat Order, 1984 explicitly provides that no confession made to a _____ shall be proved as against a person accused of any offence.",
    opts: ["Magistrate", "Police officer", "Medical officer", "Sessions Judge"],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 38 QSO states: 'No confession made to a police officer shall be proved as against a person accused of any offence.'"
  },
  {
    q: "Under Article 39 of QSO 1984, a confession made by an accused while in custody of police cannot be proved against him unless:",
    opts: [
      "Attested by two non-governmental observers",
      "Made in the immediate presence of a Magistrate",
      "Signed by the Station House Officer",
      "Recorded by a journalist"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 39 QSO states: 'Subject to Article 40, no confession made by any person whilst he is in the custody of a police officer, unless it be made in the immediate presence of a Magistrate, shall be proved as against such person.'"
  },
  {
    q: "Article 40 of QSO 1984 (information leading to discovery of fact) stipulates that how much of information received from an accused in police custody may be proved?",
    opts: [
      "The entire narrative confession of the crime",
      "So much of the information as relates distinctly to the fact thereby discovered",
      "None of the information under any circumstance",
      "Only the motives of the crime"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 40 QSO provides that when any fact is deposed to as discovered in consequence of information received from an accused in police custody, so much of such information, whether it amounts to a confession or not, as relates distinctly to the fact thereby discovered, may be proved."
  },
  {
    q: "Dying declaration is admissible and relevant under which provision of the Qanun-e-Shahadat Order, 1984?",
    opts: ["Article 46(1)", "Article 48", "Article 59", "Article 64"],
    ans: "A",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 46(1) QSO renders statements made by a person as to the cause of his death, or as to any of the circumstances of the transaction which resulted in his death, relevant in cases where the cause of that person's death comes into question."
  },
  {
    q: "Under Article 59 of QSO 1984, opinions of experts are relevant upon a point of:",
    opts: [
      "Foreign law, science, art, or identity of handwriting or finger impressions",
      "Interpretation of the Constitution of Pakistan only",
      "Sentencing policy",
      "Determining the credibility of eyewitnesses"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 59 QSO states that when the Court has to form an opinion upon a point of foreign law, or of science, or art, or as to identity of handwriting or finger impressions, the opinions upon that point of persons specially skilled are relevant facts."
  },
  {
    q: "Under Article 71 of the Qanun-e-Shahadat Order, 1984, oral evidence must in all cases whatever be:",
    opts: ["Documented on stamp paper", "Direct", "Corroborated by digital recording", "Hearsay"],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 71 QSO lays down the fundamental evidentiary rule: 'Oral evidence must, in all cases whatever, be direct.'"
  },
  {
    q: "According to Article 73 of QSO 1984, 'Primary evidence' means:",
    opts: [
      "Certified copies of the document",
      "The document itself produced for the inspection of the Court",
      "Photocopies countersigned by an advocate",
      "Oral account of the contents of a document"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 73 QSO defines Primary evidence as 'the document itself produced for the inspection of the Court.'"
  },
  {
    q: "Under Article 74 of QSO 1984, which of the following is considered 'Secondary evidence'?",
    opts: [
      "Certified copies given under provisions hereinafter contained",
      "Copies made from the original by mechanical processes ensuring accuracy",
      "Oral accounts of the contents of a document given by some person who has himself seen it",
      "All of the above"
    ],
    ans: "D",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 74 QSO enumerates categories of secondary evidence including certified copies, mechanical copies, counterparts, and oral accounts by someone who saw the original."
  },
  {
    q: "Under Article 85 of QSO 1984, which of the following is a 'Public document'?",
    opts: [
      "A personal diary of a private citizen",
      "Documents forming the acts or records of the acts of the sovereign authority, official bodies and tribunals",
      "An unnotarized private rental contract",
      "A handwritten letter between friends"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 85 QSO classifies documents forming the acts or records of acts of the sovereign authority, official bodies, legislatures, judiciary, and public records kept of private documents as public documents."
  },
  {
    q: "Article 102 of QSO 1984 lays down that when terms of a contract or grant have been reduced to the form of a document, no evidence shall be given in proof thereof except:",
    opts: [
      "The document itself, or secondary evidence of its contents where admissible",
      "Oral testimony of third-party observers",
      "The general reputation of the parties",
      "Any hearsay assertion"
    ],
    ans: "A",
    diff: "Hard",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 102 QSO mandates that when terms have been reduced to writing, no evidence shall be given in proof of terms except the document itself or secondary evidence where admissible."
  },
  {
    q: "Under Article 114 of QSO 1984, the doctrine of 'Estoppel' applies when:",
    opts: [
      "A person has by declaration, act or omission intentionally caused another to believe a thing to be true and act upon such belief",
      "A person confesses his guilt to the police",
      "A witness dies before cross-examination",
      "An accused turns approver"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 114 QSO defines Estoppel: when one person has, by declaration, act or omission, intentionally caused another to believe a thing to be true and act upon such belief, neither he nor his representative shall be allowed to deny the truth of that thing."
  },
  {
    q: "Under Article 117 of QSO 1984, upon whom does the burden of proof lie in a legal proceeding?",
    opts: [
      "Upon the presiding judge",
      "Upon the person who desires any Court to give judgment as to any legal right or liability dependent on facts he asserts",
      "Always upon the defendant regardless of who asserts the fact",
      "Upon the clerk of the court"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 117 QSO states that whoever desires any Court to give judgment as to any legal right or liability dependent on the existence of facts which he asserts, must prove that those facts exist."
  },
  {
    q: "Under Article 122 of QSO 1984, the burden of proving that the case of an accused comes within any of the General Exceptions of PPC lies upon:",
    opts: ["The prosecution", "The accused", "The investigating officer", "The complainant"],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 122 QSO establishes that when a person is accused of any offence, the burden of proving the existence of circumstances bringing the case within any of the General Exceptions in the PPC lies upon him."
  },
  {
    q: "Under Article 129, Illustration (b) of QSO 1984, the Court may presume that an accomplice is:",
    opts: [
      "Always truthful without corroboration",
      "Unworthy of credit, unless he is corroborated in material particulars",
      "Entitled to half of the recovered property",
      "Immune from any criminal inquiry"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 129(b) QSO states that the Court may presume that an accomplice is unworthy of credit, unless he is corroborated in material particulars."
  },
  {
    q: "Under Article 132 of QSO 1984, the examination of a witness by the party who calls him is termed:",
    opts: ["Cross-examination", "Examination-in-chief", "Re-examination", "Inquest examination"],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 132(1) QSO defines Examination-in-chief as the examination of a witness by the party who calls him."
  },
  {
    q: "The examination of a witness by the adverse party is called:",
    opts: ["Examination-in-chief", "Cross-examination", "Re-examination", "Interrogation"],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 132(2) QSO defines Cross-examination as the examination of a witness by the adverse party."
  },
  {
    q: "Under Article 136 of QSO 1984, any question suggesting the answer which the person putting it wishes or expects to receive is called a:",
    opts: ["Leading question", "Direct question", "Hypothetical question", "Perjury question"],
    ans: "A",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 136 QSO defines a leading question as any question suggesting the answer which the person putting it wishes or expects to receive."
  },
  {
    q: "Under Article 138 of QSO 1984, leading questions may freely be asked in:",
    opts: ["Examination-in-chief", "Cross-examination", "Re-examination without permission", "The complaint"],
    ans: "B",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 138 QSO provides that leading questions may be asked in cross-examination."
  },
  {
    q: "Under Article 150 of QSO 1984, the Court may permit the person who calls a witness to put any questions to him which might be put in cross-examination when the witness is:",
    opts: ["An expert", "Hostile", "A minor", "A government official"],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 150 QSO permits a party calling a witness to cross-examine him (put leading questions) if the witness turns hostile and suppresses the truth."
  },
  {
    q: "Under Article 155 of QSO 1984, a witness may refresh his memory by referring to:",
    opts: [
      "Any writing made by himself at the time of the transaction or soon after",
      "Newspaper rumors published years later",
      "Anonymous letters",
      "Speculative social media posts"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 155 QSO allows a witness to refresh his memory by referring to any writing made by himself at the time of the transaction concerning which he is questioned, or so soon afterwards that the transaction was fresh in his memory."
  },
  {
    q: "Under Article 5 of QSO 1984, communications made during marriage between husband and wife are:",
    opts: [
      "Open to public disclosure by police",
      "Privileged and protected from disclosure without consent",
      "Admissible in all civil suits without exception",
      "Inadmissible even if both spouses consent"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 5 QSO protects spousal communications during marriage as privileged, so that no person who is or has been married shall be compelled to disclose any communication made to him during marriage by his spouse."
  },
  {
    q: "Under Article 9 of QSO 1984, professional communications between an advocate and his client are protected unless made in furtherance of:",
    opts: [
      "Defending a past civil suit",
      "Any illegal purpose or observation of any crime or fraud committed since employment",
      "Filing a petition for bail",
      "Drafting an honest affidavit"
    ],
    ans: "B",
    diff: "Hard",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 9 QSO grants privilege to professional communications between advocates and clients, but the proviso states that nothing protects any communication made in furtherance of any illegal purpose or fact showing crime or fraud."
  },
  {
    q: "Under modern amendments and Article 164 of QSO 1984, the Court may allow the production of evidence that may have become available because of:",
    opts: [
      "Modern devices and techniques (audio, video, digital forensics)",
      "Astrological predictions",
      "Hypnotic regressions",
      "Trial by ordeal"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Qanun-e-Shahadat Order, 1984",
    exp: "Article 164 QSO provides that the Court may allow any evidence to be produced which may have become available because of modern devices and electronic techniques."
  }
];

module.exports = {
  TOPIC_1_ENGLISH,
  TOPIC_2_CRPC,
  TOPIC_3_QSO
};

