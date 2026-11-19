const fs = require('fs');
const path = require('path');

console.log('--- Assembling All Scenarios in data_legal_provision.js ---');

const scenarios = [
  // PPC Scenarios
  {
    id: "sc-1",
    title: "The Bounced Security Cheque",
    domain: "Criminal Law / PPC",
    subDomain: "Financial & Banking Crimes",
    difficulty: "Intermediate",
    scenarioText: "Aslam borrowed Rs. 3,000,000 from his business partner Tariq for purchasing commercial textiles, promising to repay within six months. Upon maturity of the debt, Aslam issued a cross-cheque for Rs. 3,000,000 drawn on his Habib Bank account. When Tariq presented the cheque, it was dishonoured by the bank with the memo 'Account Frozen / Insufficient Funds'. Police investigation revealed that Aslam only had Rs. 4,500 in the account and had no overdraft arrangement with the bank.",
    question: "Under which specific section of the Pakistan Penal Code can Aslam be prosecuted for dishonestly issuing this dishonoured cheque?",
    opts: [
      "Section 406 PPC (Criminal Breach of Trust)",
      "Section 420 PPC (Cheating and Dishonestly Inducing Delivery)",
      "Section 489-F PPC (Dishonestly Issuing a Cheque for Repayment of Loan)",
      "Section 471 PPC (Using as Genuine a Forged Document)"
    ],
    ans: 2,
    applicableLaw: "Section 489-F, Pakistan Penal Code (Act XLV of 1860)",
    statutorySummary: "Whoever dishonestly issues a cheque towards repayment of a loan or fulfilment of an obligation which is dishonoured on presentation, shall be punished with imprisonment up to three years, or with fine, or with both.",
    whyCorrect: "All ingredients of Section 489-F PPC are fully satisfied: (1) Aslam issued a cheque; (2) The cheque was issued towards repayment of a genuine loan / obligation; (3) It was issued dishonestly with full knowledge of insufficient funds; and (4) It was dishonoured upon presentation by the bank.",
    whyOthersFail: [
      "Section 406 PPC fails because Tariq was not entrusted with property under a fiduciary obligation; it was a commercial loan repayment.",
      "Section 420 PPC deals with fraudulent inducement at the inception of a transaction, whereas Section 489-F is the specific, special statutory provision enacted precisely to penalize bounced cheques.",
      "Section 471 PPC fails because the cheque itself was genuine and legitimately signed by the account holder, not a forged or counterfeit document."
    ],
    precedent: "Mian Allah Ditta v. State (PLD 2014 SC 459): The Supreme Court held that to sustain a conviction under Section 489-F PPC, the prosecution must strictly prove that the cheque was issued dishonestly towards repayment of a loan or fulfillment of an obligation, and was dishonoured on presentation.",
    examTip: "In FPSC, FIA, and Civil Judge exams, remember that Section 489-F applies ONLY when the cheque is issued towards 'repayment of a loan or fulfillment of an obligation'. Cheques given purely as conditional collateral or earnest money without admitted liability do not attract 489-F."
  },
  {
    id: "sc-2",
    title: "The Unlawful Highway Ambush",
    domain: "Criminal Law / PPC",
    subDomain: "Offences Against Property",
    difficulty: "Advanced",
    scenarioText: "A gang of six masked men armed with Kalashnikovs and axes intercepted a passenger bus on the National Highway between Multan and Bahawalpur at 11:30 PM. Four members entered the bus, forced the passengers to hand over their gold jewellery, wallets, and cash under threat of instant shooting, while two members stood guard outside holding the bus driver at gunpoint. No passenger was killed or injured.",
    question: "What specific criminal offence was conjointly committed by these six armed men?",
    opts: [
      "Theft under Section 379 PPC",
      "Extortion under Section 384 PPC",
      "Robbery under Section 392 PPC",
      "Dacoity under Section 395 PPC"
    ],
    ans: 3,
    applicableLaw: "Section 391 & Section 395, Pakistan Penal Code (Act XLV of 1860)",
    statutorySummary: "When five or more persons conjointly commit or attempt to commit a robbery, every person so committing, attempting or aiding is guilty of Dacoity, punishable with imprisonment for life or rigorous imprisonment up to ten years and fine.",
    whyCorrect: "Under Section 391 PPC, whenever robbery is committed conjointly by FIVE OR MORE persons, it legally matures into the aggravated felony of DACOITY (Section 395). Here, six armed persons conjointly committed the robbery by threatening instant hurt and death.",
    whyOthersFail: [
      "Theft under Section 379 fails because the property was not taken secretly without consent; it was extorted under imminent threat of instant death/violence, which elevates theft into robbery.",
      "Extortion under Section 384 fails because the offenders were physically present putting victims in fear of INSTANT death, which under Section 390 converts extortion into robbery.",
      "Robbery under Section 392 PPC is the underlying act, but because it was conjointly committed by SIX persons (exceeding the threshold of five), the law mandates its charge as DACOITY under Section 395."
    ],
    precedent: "Ghulam Rasool v. State (PLD 2011 SC 871): The Supreme Court ruled that the participation of five or more persons is the sole statutory criterion distinguishing robbery from dacoity; where five or more persons act conjointly, the offence is exclusively punishable as dacoity under Section 395 PPC.",
    examTip: "Hierarchy formula for exams: Force/Fear + Theft/Extortion = Robbery (Sec 390). Robbery + 5 or more persons = Dacoity (Sec 391/395)."
  },
  {
    id: "sc-3",
    title: "The Publicly Stripped Victim",
    domain: "Criminal Law / PPC",
    subDomain: "Offences Against Human Body & Dignity",
    difficulty: "Intermediate",
    scenarioText: "During a dispute between two rival village factions in southern Punjab, an armed mob stormed the house of a farmer, dragged his 22-year-old sister into the village street, forcibly tore off her clothes until she was completely naked, and paraded her through the central village square in front of dozens of onlookers to humiliate her family.",
    question: "What specific capital offence was committed by the members of the mob under the Pakistan Penal Code?",
    opts: [
      "Assault with intent to outrage modesty under Section 354 PPC",
      "Assaulting woman and stripping her of clothes under Section 354-A PPC",
      "Defamation under Section 500 PPC",
      "Criminal Intimidation under Section 506 (Part 2) PPC"
    ],
    ans: 1,
    applicableLaw: "Section 354-A, Pakistan Penal Code (Act XLV of 1860)",
    statutorySummary: "Whoever assaults or uses criminal force to any woman and strips her of her clothes and, in that condition, exposes her to public view, shall be punished with death or with imprisonment for life, and shall also be liable to fine.",
    whyCorrect: "Section 354-A was specifically inserted into the PPC to eradicate barbaric feudal atrocities against women. Its essential ingredients are: (1) Assault or criminal force on a woman; (2) Stripping her of her clothes; and (3) Exposing her in that stripped condition to public view. It carries capital punishment (Death or Life Imprisonment).",
    whyOthersFail: [
      "Section 354 PPC carries only up to 2 years imprisonment and applies to ordinary outraging of modesty without complete stripping and exposure to public view.",
      "Section 500 PPC is simple defamation (reputational injury) and completely inapplicable to violent physical assault and public stripping.",
      "Section 506 PPC deals with verbal or written threats of injury, not the actual physical act of stripping and public humiliation."
    ],
    precedent: "Naseem Akhtar v. State (PLD 2005 SC 670): The Supreme Court declared that Section 354-A PPC is a deterrent capital statute designed to protect female dignity against feudal vengeance; exposure of a woman stripped of clothes to public view constitutes the gravamen of the offence.",
    examTip: "Remember the stark contrast in penalties: Section 354 carries only 2 years imprisonment, whereas Section 354-A carries Death or Life Imprisonment."
  },
  {
    id: "sc-4",
    title: "The Sudden Grave Provocation",
    domain: "Criminal Law / PPC",
    subDomain: "Qisas & Diyat / Homicide",
    difficulty: "Advanced",
    scenarioText: "Bashir returned home unexpectedly from his fields and discovered an armed burglar attempting to sexually assault his young daughter inside the bedroom. In a state of intense, sudden emotional fury and grave provocation, Bashir picked up an iron spade lying nearby and struck the intruder on the head, fracturing his skull and causing his death on the spot without premeditation.",
    question: "Under which subsection of Section 302 of the Pakistan Penal Code will Bashir's liability for homicide be determined?",
    opts: [
      "Section 302(a) PPC (Death as Qisas)",
      "Section 302(b) PPC (Death or Life Imprisonment as Tazir)",
      "Section 302(c) PPC (Imprisonment up to 25 years where Qisas is inapplicable due to mitigating circumstances)",
      "Section 319 PPC (Qatl-i-Khata liable to Diyat only)"
    ],
    ans: 2,
    applicableLaw: "Section 302(c), Pakistan Penal Code (Act XLV of 1860)",
    statutorySummary: "Section 302(c) provides that whoever commits Qatl-e-Amd shall be punished with imprisonment of either description for a term which may extend to twenty-five years where according to the Injunctions of Islam Qisas is not applicable or mitigating circumstances exist.",
    whyCorrect: "Although Bashir committed intentional homicide (Qatl-e-Amd), the fatal act was committed under sudden heat of passion and grave provocation to protect his daughter without any premeditation. Under settled Pakistani jurisprudence, such mitigating circumstances exclude Section 302(a) and 302(b), bringing the offence under Section 302(c) with a maximum sentence of 25 years.",
    whyOthersFail: [
      "Section 302(a) fails because Qisas cannot be imposed when there is grave and sudden provocation or legitimate defensive provocation under Islamic injunctions.",
      "Section 302(b) is normal capital punishment for premeditated or unprovoked murder where full evidentiary requirements exist.",
      "Section 319 fails because Bashir did not act accidentally or through negligence (Khata); he intentionally struck the intruder with a heavy iron spade."
    ],
    precedent: "Bashir Ahmed v. State (PLD 2022 SC 112) & Ali Muhammad v. State (PLD 2020 SC 144): The Supreme Court reiterated that when an intentional killing is committed under grave provocation, sudden fight without premeditation, or exceeding the right of private defence, the case falls squarely under Section 302(c) PPC.",
    examTip: "Always check whether premeditation is absent! When sudden quarrel, heat of passion, or grave provocation is established, the charge shifts from 302(b) to 302(c)."
  },
  {
    id: "sc-5",
    title: "The Unintentional Cane Strike",
    domain: "Criminal Law / PPC",
    subDomain: "Qisas & Diyat / Bodily Offences",
    difficulty: "Advanced",
    scenarioText: "During an argument over agricultural water turns, Arshad struck Kamil on the shoulder with a light wooden willow cane intending to inflict minor hurt and insult him. Unknown to Arshad, Kamil was suffering from a diseased, severely enlarged spleen. The impact of the cane caused the spleen to rupture internally, leading to internal bleeding and death three hours later.",
    question: "Under the Qisas and Diyat provisions of the PPC, what offence has Arshad committed?",
    opts: [
      "Qatl-e-Amd under Section 302 PPC",
      "Qatl Shibh-i-Amd under Section 315 & 316 PPC",
      "Qatl-i-Khata under Section 318 & 319 PPC",
      "Qatl-bis-Sabab under Section 321 & 322 PPC"
    ],
    ans: 1,
    applicableLaw: "Section 315 & Section 316, Pakistan Penal Code (Act XLV of 1860)",
    statutorySummary: "Section 315 defines Qatl Shibh-i-Amd: Whoever with intent to cause bodily harm to any person uses any weapon or act which in the ordinary course of nature is NOT likely to cause death and thereby causes death, commits Qatl Shibh-i-Amd, liable to Diyat and imprisonment up to 25 years (Sec 316).",
    whyCorrect: "Arshad had intention to cause bodily hurt, but he used a weapon (a light willow cane) that in the ordinary course of nature is not likely to cause death. The resulting death makes it classic Qatl Shibh-i-Amd (quasi-intentional homicide) requiring mandatory payment of DIYAT.",
    whyOthersFail: [
      "Section 302 (Qatl-e-Amd) fails because Arshad had neither the intention to cause death nor did he use an act/weapon ordinarily likely to cause death.",
      "Section 318 (Qatl-i-Khata) fails because Arshad did not act accidentally or through mistake; he deliberately chose to strike Kamil.",
      "Section 321 (Qatl-bis-Sabab) fails because that section requires causing death through an indirect unlawful act without direct physical striking (e.g. digging an open pit)."
    ],
    precedent: "Abdul Haq v. State (PLD 1996 SC 1): The Supreme Court held that where the intention was merely to cause simple hurt and the instrument used was not a deadly weapon, the offence falls under Section 315 PPC punishable under Section 316 with Diyat.",
    examTip: "Memorize the formula: Intent to hurt + Non-deadly weapon + Death results = Qatl Shibh-i-Amd (Sec 315/316) -> Mandatory DIYAT."
  },
  {
    id: "sc-6",
    title: "The Sentry at the Bank Vault",
    domain: "Criminal Law / PPC",
    subDomain: "General Explanations / Joint Liability",
    difficulty: "Intermediate",
    scenarioText: "Adnan and Bilawal planned to rob a commercial bank. In accordance with their pre-arranged plan, Adnan stood outside the bank entrance armed with a pistol to keep watch and prevent anyone from entering, while Bilawal went inside, broke the teller counter at gunpoint, and looted Rs. 5,000,000. Adnan never entered the bank building and did not physically touch the looted cash.",
    question: "Under which statutory principle of the Pakistan Penal Code is Adnan held equally liable for the robbery as if it were committed by him alone?",
    opts: [
      "Section 34 PPC (Acts done by several persons in furtherance of common intention)",
      "Section 149 PPC (Every member of unlawful assembly guilty of offence committed in prosecution of common object)",
      "Section 109 PPC (Abetment only)",
      "Section 511 PPC (Attempt only)"
    ],
    ans: 0,
    applicableLaw: "Section 34, Pakistan Penal Code (Act XLV of 1860)",
    statutorySummary: "When a criminal act is done by several persons in furtherance of the common intention of all, each of such persons is liable for that act in the same manner as if it were done by him alone.",
    whyCorrect: "Under Section 34 PPC, physical execution of the final stroke or touching the cash is unnecessary if the participant acted in furtherance of a shared pre-arranged plan (common intention). The landmark Shankari Tola Post Office case established: 'They also serve who only stand and wait.'",
    whyOthersFail: [
      "Section 149 PPC requires an UNLAWFUL ASSEMBLY of at least FIVE (5) persons; here, only two persons were involved, so Section 149 cannot apply.",
      "Section 109 is general abetment, whereas Section 34 establishes joint direct constructive liability as a principal actor.",
      "Section 511 deals with inchoate attempts, whereas the robbery was fully accomplished."
    ],
    precedent: "Barendra Kumar Ghosh v. Emperor (AIR 1925 PC 1 - Post Office Case) & Muhammad Riaz v. State (PLD 2021 SC 450): The Privy Council affirmed that an accomplice who acts as a lookout to facilitate a crime acts in furtherance of common intention and is equally guilty under Section 34.",
    examTip: "Never apply Section 149 when there are fewer than 5 persons! When 2 to 4 persons act with shared intention, Section 34 is the only applicable joint liability provision."
  },
  {
    id: "sc-7",
    title: "The Overzealous Police Sentry",
    domain: "Criminal Law / PPC",
    subDomain: "General Exceptions / Justification",
    difficulty: "Intermediate",
    scenarioText: "A judicial magistrate issued an arrest warrant for an absconding criminal named 'Akram', giving his physical description. Police Constable Naveed was tasked to execute the warrant. At the bus terminal, after diligent inquiry and verifying identification matching the warrant's description, Naveed arrested a man who was actually named 'Amjad'. Amjad filed a criminal complaint against Constable Naveed for wrongful confinement under Section 342 PPC.",
    question: "Under which General Exception of the Pakistan Penal Code is Constable Naveed protected from criminal liability?",
    opts: [
      "Section 76 PPC (Act done by a person bound by law by reason of mistake of fact in good faith)",
      "Section 80 PPC (Accident in doing a lawful act)",
      "Section 84 PPC (Act of a person of unsound mind)",
      "Section 99 PPC (Acts against which there is no right of private defence)"
    ],
    ans: 0,
    applicableLaw: "Section 76, Pakistan Penal Code (Act XLV of 1860)",
    statutorySummary: "Nothing is an offence which is done by a person who is, or who by reason of a mistake of fact and not by reason of a mistake of law in good faith believes himself to be, bound by law to do it.",
    whyCorrect: "Constable Naveed was acting pursuant to a lawful warrant of arrest. He committed a mistake of FACT (believing Amjad was Akram after due inquiry), NOT a mistake of law. Since the act was done in 'good faith' (with due care and attention under Sec 52 PPC), Section 76 provides absolute immunity.",
    whyOthersFail: [
      "Section 80 PPC applies to accidents occurring in the performance of lawful acts without criminal negligence (e.g. axe head flying off while chopping wood).",
      "Section 84 PPC deals with mental unsoundness and insanity (McNaughten rules), which has no relevance to an official executing a legal warrant.",
      "Section 99 PPC restricts the right of private defence against public servants; it does not grant general exemption for mistaken arrest."
    ],
    precedent: "State v. Sheik Latif (PLD 1968 SC): The Supreme Court held that a public officer executing a judicial process who bona fide arrests the wrong person after reasonable inquiry is shielded from criminal prosecution by Section 76 PPC.",
    examTip: "Crucial rule: Section 76 excuses mistake of FACT (*ignorantia facti excusat*); it NEVER excuses mistake of LAW (*ignorantia juris non excusat*)."
  },
  {
    id: "sc-8",
    title: "The Stalking Colleague",
    domain: "Criminal Law / PPC",
    subDomain: "Women Safety & Public Morality",
    difficulty: "Foundation",
    scenarioText: "Hamza, an office employee, repeatedly sent lewd voice notes, sexually suggestive emojis, and unsolicited indecent photographs to his female co-worker's personal smartphone despite her repeated demands to cease. Furthermore, he repeatedly waited outside her residence in his car, making obscene gestures whenever she exited her gate.",
    question: "Under which specific section of the Pakistan Penal Code is Hamza primarily liable for insulting the modesty of a woman?",
    opts: [
      "Section 294 PPC (Obscene Acts and Songs)",
      "Section 499 PPC (Defamation)",
      "Section 509 PPC (Word, gesture or act intended to insult the modesty of a woman)",
      "Section 503 PPC (Criminal Intimidation)"
    ],
    ans: 2,
    applicableLaw: "Section 509, Pakistan Penal Code (Act XLV of 1860)",
    statutorySummary: "Whoever intending to insult the modesty of any woman utters any word, makes any sound or gesture, or exhibits any object, or intrudes upon the privacy of such woman, shall be punished with imprisonment up to three years, or with fine up to Rs. 500,000, or with both.",
    whyCorrect: "Section 509 PPC was comprehensively amended by the Criminal Law (Amendment) Act 2010 specifically to penalize workplace sexual harassment, street stalking, and electronic transmission of indecent words, gestures, and sounds that intrude upon female modesty.",
    whyOthersFail: [
      "Section 294 PPC deals with public obscenity causing annoyance to others generally, but lacks the specific protective statutory penalties of Section 509.",
      "Section 499 PPC deals with reputational injury through defamatory imputations, not direct sexual harassment or stalking gestures.",
      "Section 503 PPC requires a threat of illegal injury with intent to cause alarm, whereas Section 509 specifically targets insults to female modesty."
    ],
    precedent: "Sultana Begum v. State (PLD 2018 SC 49): The Supreme Court emphasized that Section 509 PPC was strengthened to ensure safe working environments for women; courts must impose deterrent punishments and maximum statutory fines on offenders engaging in stalking and harassment.",
    examTip: "Remember the 2010 amendment: Section 509 carries imprisonment up to 3 years AND fine up to Rs. 500,000."
  },
  {
    id: "sc-9",
    title: "The Minor Under Ten Years (Doli Incapax)",
    domain: "Criminal Law / PPC",
    subDomain: "General Exceptions / Infancy",
    difficulty: "Foundation",
    scenarioText: "An 8-year-old schoolboy picked up an expensive smartphone from the desk of his classroom, took it home, and gave it to his older brother. The owner of the phone registered a police complaint charging the 8-year-old with theft under Section 379 PPC.",
    question: "Under Section 82 of the Pakistan Penal Code (as amended by the Criminal Law Fifth Amendment Act 2016), what is the boy's criminal liability?",
    opts: [
      "He can be sentenced to juvenile detention for 6 months",
      "He is absolutely immune from criminal liability as he is under 10 years of age (Doli Incapax)",
      "He must pay the full market value of the phone as a fine",
      "His parents must be imprisoned in his place"
    ],
    ans: 1,
    applicableLaw: "Section 82, Pakistan Penal Code (Act XLV of 1860 - Amended in 2016)",
    statutorySummary: "Nothing is an offence which is done by a child under ten years of age.",
    whyCorrect: "Under Section 82 PPC (amended in 2016 from 7 to 10 years), children under ten years are irrebuttably presumed incapable of committing a criminal offence (*Doli Incapax*). An 8-year-old child cannot be prosecuted, charged, or convicted of any crime under Pakistani law.",
    whyOthersFail: [
      "A child under 10 cannot be committed to juvenile detention because no criminal liability can attach to his conduct.",
      "Criminal fines under the PPC cannot be imposed on an individual who is statutorily immune from criminal prosecution.",
      "Vicarious criminal liability does not apply to parents for the acts of infants under Section 82."
    ],
    precedent: "State v. Master Danish (2018 PCrLJ 89): The High Court affirmed that following the 2016 amendment, the age of absolute criminal irresponsibility in Pakistan was raised from 7 to 10 years, in line with international child rights conventions.",
    examTip: "CRITICAL RECENT AMENDMENT: Note that Section 82 was amended in 2016! The old age threshold was 7 years; it is now TEN (10) YEARS."
  },

  // Constitutional Law Scenarios
  {
    id: "sc-10",
    title: "The Sadiq & Ameen Disqualification Cap",
    domain: "Constitutional Law",
    subDomain: "Parliament & Qualifications",
    difficulty: "Advanced",
    scenarioText: "In 2018, an MNA was disqualified by the Supreme Court under Article 62(1)(f) of the 1973 Constitution for failing to disclose an asset in his nomination papers. Following the 2018 Sami Ullah Baloch judgment, such disqualification was treated as a permanent lifetime ban. However, in January 2024, a 7-member larger bench of the Supreme Court revisited this question in light of Section 232(2) of the Elections Act, 2017.",
    question: "What did the Supreme Court hold in January 2024 regarding the duration of disqualification under Article 62(1)(f)?",
    opts: [
      "Disqualification remains for life as it is a permanent constitutional bar",
      "Disqualification is capped at a maximum of five (5) years, overruling the Sami Ullah Baloch case",
      "Disqualification can only last for 10 years",
      "Disqualification under Article 62(1)(f) was declared completely null and void"
    ],
    ans: 1,
    applicableLaw: "Article 62(1)(f), Constitution of the Islamic Republic of Pakistan, 1973",
    statutorySummary: "Article 62(1)(f) requires a candidate to be sagacious, righteous, non-profligate, honest, and ameen, there being no declaration to the contrary by a court of law. In January 2024, the Supreme Court overruled Sami Ullah Baloch and capped the disqualification period at five years.",
    whyCorrect: "In January 2024, a 7-member larger bench of the Supreme Court overruled the 2018 *Sami Ullah Baloch* verdict, holding that Article 62(1)(f) does not specify a lifetime disqualification period and that Parliament lawfully enacted Section 232(2) of the Elections Act 2017 to limit the disqualification term to five (5) years.",
    whyOthersFail: [
      "The lifetime disqualification doctrine was explicitly overturned and discarded by the 7-member bench in January 2024.",
      "10 years is not the statutory period; the Elections Act 2017 Section 232(2) specifies exactly five (5) years.",
      "Article 62(1)(f) remains an active part of the Constitution; only the duration of disqualification was harmonized and capped."
    ],
    precedent: "Sami Ullah Baloch v. Abdul Karim Tous (PLD 2018 SC 405) [OVERRULED] & Supreme Court Larger Bench Judgment (January 2024): The 7-member bench held that reading a lifetime disqualification into Article 62(1)(f) without explicit constitutional text violates Fundamental Rights under Article 17 (Right to form associations and contest elections).",
    examTip: "High-yield CSS 2025/2026 update: Lifetime disqualification under Article 62(1)(f) is NO LONGER valid law in Pakistan; it is now strictly capped at five (5) years."
  },
  {
    id: "sc-11",
    title: "Appointment of the Chief Justice (26th Amendment)",
    domain: "Constitutional Law",
    subDomain: "The Judicature / 26th Amendment 2024",
    difficulty: "Advanced",
    scenarioText: "Under the 26th Constitutional Amendment passed on October 20, 2024, the procedure for appointing the Chief Justice of Pakistan (CJP) was fundamentally transformed. Instead of the automatic elevation of the senior-most judge of the Supreme Court, a newly constituted body was granted the constitutional authority to nominate the CJP.",
    question: "Under Article 175A as amended by the 26th Constitutional Amendment, which body appoints the Chief Justice of Pakistan and from among whom?",
    opts: [
      "The Prime Minister selects anyone from all Supreme Court judges",
      "A 12-member Special Parliamentary Committee selects from among the three senior-most Supreme Court judges",
      "The Judicial Commission selects from all High Court Chief Justices",
      "The President selects solely with the advice of the outgoing Chief Justice"
    ],
    ans: 1,
    applicableLaw: "Article 175A(3), Constitution of the Islamic Republic of Pakistan, 1973 (26th Amendment)",
    statutorySummary: "Article 175A(3) provides that the Chief Justice of Pakistan shall be appointed on the recommendation of a 12-member Special Parliamentary Committee from among the three senior-most judges of the Supreme Court.",
    whyCorrect: "The 26th Constitutional Amendment (October 20, 2024) created a 12-member Special Parliamentary Committee (8 members from National Assembly, 4 from Senate, with proportional party representation) to select the CJP from among the THREE senior-most Supreme Court judges, fixing the CJP tenure at three (3) years.",
    whyOthersFail: [
      "The Prime Minister does not pick unilaterally; the constitutional power rests with the 12-member bipartisan Special Parliamentary Committee.",
      "The pool of candidates is restricted to the three senior-most SUPREME COURT judges, not High Court judges.",
      "The outgoing Chief Justice no longer has unilateral succession control."
    ],
    precedent: "26th Constitutional Amendment Act, 2024 (Gazetted October 21, 2024): Restructured Article 175A, introduced Constitutional Benches in Supreme Court (Art 191A) and High Courts, and established performance evaluation for High Court judges.",
    examTip: "The 26th Amendment is the single most tested constitutional development in competitive exams. Remember: 12-member committee (8 MNAs + 4 Senators), choice among 3 senior-most judges, fixed 3-year CJP term."
  },
  {
    id: "sc-12",
    title: "The Outlawed Defecting Vote (Article 63A)",
    domain: "Constitutional Law",
    subDomain: "Parliamentary Discipline",
    difficulty: "Advanced",
    scenarioText: "During a vote of no-confidence against a Prime Minister, several members of the ruling parliamentary party voted in favour of the no-confidence resolution contrary to the written directions issued by their Party Head. The Parliamentary Party Head issued a show-cause notice declaring them defectors.",
    question: "Under the Supreme Court's unanimous October 2024 Review Judgment on Article 63A, what is the constitutional status of votes cast by defecting parliamentarians?",
    opts: [
      "Their votes cannot be counted and are completely discarded",
      "Their votes must be counted, but they may face disqualification proceedings post-vote",
      "Their votes are counted as abstentions",
      "The entire parliamentary session is declared illegal"
    ],
    ans: 1,
    applicableLaw: "Article 63A, Constitution of the Islamic Republic of Pakistan, 1973",
    statutorySummary: "Article 63A provides that if a member votes contrary to directions of the Parliamentary Party in election of PM/CM, vote of confidence/no-confidence, or Money Bill, he may be declared to have defected and unseated.",
    whyCorrect: "In October 2024, a 5-member Supreme Court bench headed by CJP Qazi Faez Isa allowed the review petitions and overturned the May 2022 opinion, holding that under the plain text of Article 63A, votes cast contrary to party lines MUST BE COUNTED, while the defecting members face subsequent disqualification proceedings before the ECP.",
    whyOthersFail: [
      "The May 2022 doctrine that defecting votes should not be counted was formally REVIEWED AND OVERTURNED in October 2024 as reading words into the Constitution.",
      "Votes are not counted as abstentions; they are recorded as cast.",
      "The session remains fully lawful and valid."
    ],
    precedent: "Supreme Court Review Judgment on Article 63A (October 2024): Overruled the May 17, 2022 Presidential Reference opinion. The Court ruled that the constitutional text does not permit disregarding or invalidating a vote cast by an elected representative.",
    examTip: "Always cite the October 2024 Review Bench judgment! Article 63A defecting votes ARE counted, and disqualification is a post-vote remedy via Party Head and ECP."
  },
  {
    id: "sc-13",
    title: "The Environmental Writ Petition",
    domain: "Constitutional Law",
    subDomain: "Fundamental Rights / Writ Jurisdiction",
    difficulty: "Intermediate",
    scenarioText: "A chemical factory in Lahore was dumping toxic, untreated industrial effluents directly into an open drainage canal flowing through a densely populated residential suburb, causing severe respiratory illnesses and groundwater contamination. Local residents approached the High Court to halt the factory's discharge.",
    question: "Under which article of the Constitution can citizens invoke the High Court's writ jurisdiction for enforcement of the Right to Life (Article 9)?",
    opts: [
      "Article 184(3) of the Constitution",
      "Article 199 of the Constitution",
      "Article 204 of the Constitution",
      "Article 212 of the Constitution"
    ],
    ans: 1,
    applicableLaw: "Article 199 read with Article 9, Constitution of Pakistan, 1973",
    statutorySummary: "Article 199 empowers High Courts to issue writs of Mandamus, Prohibition, Certiorari, Habeas Corpus, and Quo Warranto for the enforcement of Fundamental Rights conferred by Chapter 1 of Part II.",
    whyCorrect: "Article 199 is the primary constitutional writ forum before the Provincial High Courts. The Supreme Court has repeatedly affirmed in environmental jurisprudence that the Right to Life under Article 9 encompasses the right to a clean, unpolluted environment free from industrial hazards.",
    whyOthersFail: [
      "Article 184(3) is the original jurisdiction of the SUPREME COURT, requiring a question of 'public importance' with reference to Fundamental Rights, whereas the prompt specifies approaching the High Court.",
      "Article 204 deals with Contempt of Court.",
      "Article 212 deals with Administrative Courts and Service Tribunals for civil servants."
    ],
    precedent: "Shehla Zia v. WAPDA (PLD 1994 SC 693): Landmark judgment establishing that the word 'life' in Article 9 does not mean mere vegetative existence, but includes the right to a healthy, unpolluted environment.",
    examTip: "High Court writ = Article 199. Supreme Court public interest writ = Article 184(3)."
  },
  {
    id: "sc-14",
    title: "Right to Free and Compulsory Education",
    domain: "Constitutional Law",
    subDomain: "Fundamental Rights / 18th Amendment",
    difficulty: "Foundation",
    scenarioText: "In a rural district, hundreds of children aged 7 to 14 were denied admission to public schools due to arbitrary fee levies and lack of classrooms. A public interest litigation was filed arguing that the State bears an affirmative constitutional duty to provide free and compulsory education to all children aged five to sixteen years.",
    question: "Which article of the 1973 Constitution (inserted by the 18th Constitutional Amendment in 2010) explicitly guarantees the Right to Free and Compulsory Education?",
    opts: [
      "Article 10A of the Constitution",
      "Article 19A of the Constitution",
      "Article 25A of the Constitution",
      "Article 37 of the Constitution"
    ],
    ans: 2,
    applicableLaw: "Article 25A, Constitution of the Islamic Republic of Pakistan, 1973",
    statutorySummary: "The State shall provide free and compulsory education to all children of the age of five to sixteen years in such manner as may be determined by law.",
    whyCorrect: "Article 25A was inserted into the Fundamental Rights chapter by the landmark 18th Constitutional Amendment in 2010, elevating education from a non-justiciable Principle of Policy into an enforceable Fundamental Right for all children aged 5 to 16.",
    whyOthersFail: [
      "Article 10A guarantees the Right to Fair Trial and Due Process.",
      "Article 19A guarantees the Right to Information in all matters of public importance.",
      "Article 37 is a Principle of Policy (Promotion of social justice and eradication of illiteracy), which is non-justiciable and cannot be enforced directly through court writs."
    ],
    precedent: "Rana Aamer Raza Ashfaq v. Advocate General Punjab (PLD 2014 Lahore 414): The High Court ruled that under Article 25A, providing free and compulsory schooling to children aged 5–16 is an absolute constitutional obligation of the provincial government.",
    examTip: "The 18th Amendment trio of new Fundamental Rights: Article 10A (Fair Trial), Article 19A (Right to Information), Article 25A (Right to Education). Never confuse these three!"
  },

  // CrPC Scenarios
  {
    id: "sc-15",
    title: "The Excessive Police Remand",
    domain: "Criminal Procedure / CrPC",
    subDomain: "Investigation & Remand",
    difficulty: "Intermediate",
    scenarioText: "Police arrested a suspect in an armed robbery case and obtained three physical remand orders totaling 14 days from the Judicial Magistrate. On the 15th day, the Investigating Officer submitted an application requesting 5 more days of physical custody, arguing that the looted foreign currency had not yet been traced.",
    question: "How must the Judicial Magistrate decide the police's application under Section 167 of the CrPC?",
    opts: [
      "Grant 5 more days of police remand because the recovery of stolen money is essential",
      "Refuse further physical remand and mandatorily commit the accused to judicial custody (jail lockup)",
      "Discharge the accused from the case entirely",
      "Order the case transferred to an Anti-Terrorism Court"
    ],
    ans: 1,
    applicableLaw: "Section 167, Code of Criminal Procedure (Act V of 1898)",
    statutorySummary: "Section 167 CrPC restricts the maximum aggregate period of police physical custody (remand) to fourteen (14) days. Once 14 days expire, no further physical remand can be granted, and the Magistrate must commit the accused to judicial custody.",
    whyCorrect: "Section 167 CrPC contains an absolute statutory cap: police physical remand CANNOT exceed 14 days in aggregate. Once 14 days elapse, the Magistrate has no statutory power to grant police custody and is legally obligated to send the accused to judicial lockup (jail).",
    whyOthersFail: [
      "Granting additional physical remand beyond 14 days is strictly illegal and void under Section 167 CrPC.",
      "The expiry of remand does not discharge the accused; the investigation continues while the accused remains in judicial custody.",
      "Robbery without scheduled terrorism elements does not fall under ATC jurisdiction."
    ],
    precedent: "State v. Wasiq Azad (PLD 2012 SC 64): The Supreme Court reiterated that the 14-day limit on police physical custody under Section 167 CrPC is inviolable; courts cannot extend physical custody beyond 14 days under any investigative pretext.",
    examTip: "Statutory numbers to remember: Max 24 hours to produce before Magistrate (Sec 61); Max 14 days total physical remand (Sec 167)."
  },
  {
    id: "sc-16",
    title: "The Forgotten Fingerprint in Section 342",
    domain: "Criminal Procedure / CrPC",
    subDomain: "Trial & Fair Trial Safeguards",
    difficulty: "Advanced",
    scenarioText: "In a murder trial, the prosecution presented a forensic ballistic report proving that the fatal bullet matched the pistol recovered from the accused. However, when the trial judge recorded the statement of the accused under Section 342 CrPC, he omitted to put any question or seek any explanation regarding this ballistic report.",
    question: "What is the legal consequence of failing to put this incriminating forensic report to the accused during his Section 342 CrPC examination?",
    opts: [
      "The report remains valid evidence because it is an official government forensic document",
      "The ballistic report MUST BE EXCLUDED from consideration and cannot be used against the accused in judgment",
      "The case is automatically dismissed and the judge is suspended",
      "The defence counsel must be fined for not raising an objection during the questioning"
    ],
    ans: 1,
    applicableLaw: "Section 342, Code of Criminal Procedure (Act V of 1898)",
    statutorySummary: "Section 342 CrPC requires the court to put every piece of incriminating circumstance appearing in evidence to the accused. Any incriminating circumstance not specifically put to the accused cannot be used against him.",
    whyCorrect: "It is a foundational principle of Pakistani criminal jurisprudence that the purpose of Section 342 CrPC is to enable the accused to explain every circumstance appearing in evidence against him. If an incriminating piece of evidence is not put to the accused under Section 342, it cannot be relied upon or used to convict him.",
    whyOthersFail: [
      "Even official scientific reports are inadmissible if the accused was deprived of the opportunity to explain them under Section 342 CrPC.",
      "The case is not automatically dismissed; the court simply excludes that specific tainted piece of evidence from its judicial consideration.",
      "It is the court's statutory obligation, not defence counsel's duty, to put all incriminating facts to the accused."
    ],
    precedent: "Qaddafi v. State (PLD 2017 SC 692) & Muhammad Shah v. State (PLD 2010 SC 652): The Supreme Court held that each and every piece of incriminating evidence relied upon by the prosecution must be explicitly put to the accused under Section 342 CrPC; failure to do so renders that evidence completely inadmissible.",
    examTip: "A favourite question in Civil Judge and ASJ exams: Any evidence not put to the accused under Section 342 CrPC is deemed excluded from the trial."
  },
  {
    id: "sc-17",
    title: "The Second FIR Controversy",
    domain: "Criminal Procedure / CrPC",
    subDomain: "Police Investigation & Registration",
    difficulty: "Intermediate",
    scenarioText: "Following an armed clash between two groups over a boundary wall in Gujranwala, Group A registered an FIR under Section 324/148 PPC against Group B. Two days later, Group B approached the police station with medical certificates of their own injured members, demanding that a separate cross-FIR be registered against Group A for the same incident. The SHO refused.",
    question: "According to the Supreme Court's landmark Full Bench ruling in Sughra Bibi v. State (PLD 2018 SC 595), how must the police legally handle Group B's counter-version?",
    opts: [
      "The SHO must mandatorily register a second FIR",
      "The SHO cannot register a second FIR; Group B's counter-version must be recorded as a statement under Section 161 CrPC in the same case diary",
      "Group B must be told to file a civil suit in civil court",
      "The police must cancel Group A's FIR and start fresh"
    ],
    ans: 1,
    applicableLaw: "Section 154 & Section 161, Code of Criminal Procedure (Act V of 1898)",
    statutorySummary: "Section 154 CrPC provides for the registration of First Information Report of a cognizable offence. In Sughra Bibi (2018), the Supreme Court ruled that only one FIR is permissible for a single occurrence.",
    whyCorrect: "In *Sughra Bibi v. State*, the Full Bench of the Supreme Court conclusively ruled that registration of a second or subsequent FIR for the same occurrence is legally impermissible. Any counter-version, cross-version, or new evidence presented by any party must be recorded as a statement under Section 161 CrPC as part of the same investigation.",
    whyOthersFail: [
      "Registering a second FIR for the same clash was declared illegal and contrary to the scheme of CrPC by the Supreme Court.",
      "An armed clash involving grievous injuries is a criminal offence, not a matter to be relegated to a civil court.",
      "The police cannot arbitrarily cancel an existing FIR simply because a counter-version is submitted."
    ],
    precedent: "Sughra Bibi v. The State (PLD 2018 SC 595 - 7-Judge Bench): 'No second FIR can be recorded for the same occurrence... any rival or counter version regarding the same incident can be recorded by the police as a statement under Section 161 CrPC during the same investigation.'",
    examTip: "Whenever an exam scenario asks about registering a 'second FIR' or 'counter-FIR', the correct answer under *Sughra Bibi (2018)* is always: No second FIR; record under Section 161 CrPC."
  },
  {
    id: "sc-18",
    title: "Police Refusal & Ex-Officio Justice of Peace",
    domain: "Criminal Procedure / CrPC",
    subDomain: "Remedies Against Police Inaction",
    difficulty: "Foundation",
    scenarioText: "A shopkeeper was assaulted inside his store by armed extortionists demanding protection money (Bhatta). He went to the local police station with CCTV footage, but the duty officer refused to register an FIR because one of the attackers was politically connected.",
    question: "What is the most direct and effective statutory forum under the CrPC for the shopkeeper to obtain an order directing the police to register an FIR?",
    opts: [
      "Application before the Ex-Officio Justice of the Peace (Sessions Judge / AD&SJ) under Section 22-A(6) CrPC",
      "Filing a suit for damages in the Civil Court",
      "Filing a revision before the Supreme Court of Pakistan",
      "Filing a complaint with the Ministry of Foreign Affairs"
    ],
    ans: 0,
    applicableLaw: "Section 22-A(6), Code of Criminal Procedure (Act V of 1898)",
    statutorySummary: "Section 22-A(6) CrPC empowers an ex-officio Justice of the Peace (Sessions Judge and Additional Sessions Judge) to issue directions to police authorities upon complaints of non-registration of a criminal case, transfer of investigation, or neglect of duty.",
    whyCorrect: "Section 22-A(6) CrPC was enacted specifically to provide citizens with an expeditious, localized judicial remedy against police refusal to register an FIR for a cognizable offence.",
    whyOthersFail: [
      "A civil suit for damages is an expensive, lengthy civil remedy that does not initiate criminal prosecution.",
      "The Supreme Court has no original jurisdiction to entertain individual complaints of FIR non-registration when statutory forums exist.",
      "The Ministry of Foreign Affairs handles diplomatic relations, not domestic criminal policing."
    ],
    precedent: "Khizer Hayat v. Inspector General of Police (PLD 2005 Lahore 470): The Full Bench settled the scope of Section 22-A CrPC, ruling that upon disclosure of a cognizable offence, the Justice of the Peace has the authority to direct the registration of an FIR without conducting a mini-trial.",
    examTip: "Always remember: In Pakistan, the Sessions Judge and Additional Sessions Judges serve as 'Ex-Officio Justices of the Peace' under Section 22-A CrPC."
  },
  {
    id: "sc-19",
    title: "The Quashment of Frivolous FIR",
    domain: "Criminal Procedure / CrPC",
    subDomain: "Inherent Powers of High Court",
    difficulty: "Advanced",
    scenarioText: "Following a commercial land transaction that fell through due to a title dispute, the buyer lodged an FIR against the seller alleging criminal breach of trust under Section 406 PPC. The civil sale agreement clearly contained an arbitration clause, and a civil suit for specific performance was already pending before the Civil Court. The seller approached the High Court arguing that a pure civil dispute was being maliciously converted into a criminal prosecution to force a settlement.",
    question: "Under which section of the CrPC does the High Court exercise its extraordinary inherent powers to quash the criminal proceedings / FIR to prevent abuse of the process of court?",
    opts: [
      "Section 249-A CrPC",
      "Section 439 CrPC",
      "Section 491 CrPC",
      "Section 561-A CrPC"
    ],
    ans: 3,
    applicableLaw: "Section 561-A, Code of Criminal Procedure (Act V of 1898)",
    statutorySummary: "Nothing in this Code shall be deemed to limit or affect the inherent power of the High Court to make such orders as may be necessary to give effect to any order under this Code, or to prevent abuse of the process of any court, or otherwise to secure the ends of justice.",
    whyCorrect: "Section 561-A CrPC preserves the extraordinary inherent jurisdiction of the High Court. Settled Supreme Court law establishes that where a civil dispute or breach of contract is maliciously converted into an FIR to exert coercive pressure, the High Court will intervene under Section 561-A to quash the proceedings to prevent abuse of judicial process.",
    whyOthersFail: [
      "Section 249-A CrPC is the acquittal power exercised by a MAGISTRATE during trial, not the High Court's quashment power.",
      "Section 439 CrPC is revisional jurisdiction to examine legality/propriety of lower court orders, not original quashment of FIR.",
      "Section 491 CrPC deals with directions in the nature of Habeas Corpus for illegal detention."
    ],
    precedent: "State v. Asif Ali Zardari (1994 SCMR 798) & Miraj Khalid v. State (PLD 2004 SC 577): The Supreme Court held that the High Court has inherent power under Section 561-A CrPC to quash an FIR and criminal trial where the dispute is purely of a civil nature and criminal machinery is being abused as a tool for coercion.",
    examTip: "Remember the distinction: Quashment of FIR / Proceedings = High Court under Section 561-A CrPC. Early acquittal in Magistrate Court = Section 249-A CrPC. Early acquittal in Sessions Court = Section 265-K CrPC."
  },
  {
    id: "sc-20",
    title: "The Illegal Police Detention (Habeas Corpus)",
    domain: "Criminal Procedure / CrPC",
    subDomain: "Personal Liberty / Habeas Corpus",
    difficulty: "Intermediate",
    scenarioText: "Plainclothes police officers picked up a citizen from his shop without showing any arrest warrant, entering no entry into the police station daily diary (Roznamcha), and producing him before no Magistrate for four consecutive days. The family suspected he was being unlawfully detained in an unofficial police interrogation cell.",
    question: "Under which section of the CrPC can the family file a petition before the High Court for appointment of a Bailiff to raid the police station and recover the illegally detained citizen?",
    opts: [
      "Section 22-A CrPC",
      "Section 144 CrPC",
      "Section 491 CrPC (Directions of the nature of a Habeas Corpus)",
      "Section 561-A CrPC"
    ],
    ans: 2,
    applicableLaw: "Section 491, Code of Criminal Procedure (Act V of 1898)",
    statutorySummary: "Section 491 CrPC empowers the High Court to issue directions that any person within the limits of its appellate criminal jurisdiction who is illegally or improperly detained in public or private custody be brought before the Court and set at liberty.",
    whyCorrect: "Section 491 CrPC is the statutory Habeas Corpus remedy in Pakistan. The High Court routinely appoints a Court Bailiff upon a Section 491 petition to conduct an immediate surprise raid on the police station, inspect the daily register, and recover the citizen if held without a lawful remand or FIR.",
    whyOthersFail: [
      "Section 22-A CrPC is for directing the police to register an FIR, not for raiding a police station and recovering illegally detained persons.",
      "Section 144 CrPC is for temporary administrative bans on public gatherings to maintain public order.",
      "Section 561-A CrPC is for quashment of court proceedings, whereas Section 491 is the specific statutory remedy for illegal confinement."
    ],
    precedent: "Muhammad Azam v. SHO Police Station (PLD 2011 SC 841): The Supreme Court emphasized that detention of a citizen without recording in the police station daily diary is unconstitutional under Article 9 and 10, warranting immediate relief under Section 491 CrPC and criminal proceedings against the delinquent officers.",
    examTip: "Remember: Statutory Habeas Corpus = Section 491 CrPC. Constitutional Habeas Corpus = Article 199(1)(b)(i) of the Constitution."
  },

  // Evidence & Special Laws Scenarios
  {
    id: "sc-21",
    title: "The Dying Declaration",
    domain: "Law of Evidence / QSO",
    subDomain: "Statements by Persons Who Cannot be Called",
    difficulty: "Intermediate",
    scenarioText: "A woman who suffered 80% acid burns was admitted to the ICU in critical condition. Anticipating imminent death, the Judicial Magistrate was summoned to the hospital, who in the presence of the attending doctor (certifying she was conscious and oriented) recorded her statement naming her ex-husband as the perpetrator. She succumbed to her injuries two hours later.",
    question: "Under which article of the Qanun-e-Shahadat Order, 1984 is this statement admissible in evidence as a Dying Declaration?",
    opts: [
      "Article 16 of QSO 1984",
      "Article 37 of QSO 1984",
      "Article 46(1) of QSO 1984",
      "Article 140 of QSO 1984"
    ],
    ans: 2,
    applicableLaw: "Article 46(1), Qanun-e-Shahadat Order, 1984 (President's Order No. 10 of 1984)",
    statutorySummary: "Article 46(1) provides that statements, written or verbal, of relevant facts made by a person who is dead are admissible when the statement relates to the cause of his death or the circumstances of the transaction which resulted in his death.",
    whyCorrect: "Article 46(1) QSO 1984 codifies the classical rule of Dying Declaration (*Nemo moriturus praesumitur mentire* — a dying man will not meet his Maker with a lie on his lips). Here, the statement was made by a deceased person regarding the cause of her death before a Magistrate with a medical fitness certificate.",
    whyOthersFail: [
      "Article 16 QSO deals with the competency of an Accomplice to testify as a witness.",
      "Article 37 QSO deals with confessions made by an accused while in police custody.",
      "Article 140 QSO deals with the cross-examination of a witness regarding previous statements in writing."
    ],
    precedent: "Farman Ali v. State (PLD 2019 SC 441): The Supreme Court held that a dying declaration recorded by a Magistrate after obtaining medical certification of the victim's mental fitness is a sacred and reliable piece of substantive evidence that can independently sustain a conviction.",
    examTip: "Key elements for a valid dying declaration in exams: (1) Cause of death stated; (2) Certification of consciousness/orientation by doctor; (3) Recorded without tutoring or prompting."
  },
  {
    id: "sc-22",
    title: "The Stolen Laptop Presumption",
    domain: "Law of Evidence / QSO",
    subDomain: "Presumptions of Fact",
    difficulty: "Intermediate",
    scenarioText: "A showroom was burgled at night and three high-end gaming laptops were stolen. The very next morning, less than 10 hours after the burglary, police apprehended Kamran at a nearby bus stand carrying two of the stolen laptops in their original packaging. Kamran could not provide any receipt, explanation, or accounting for how he acquired them so quickly.",
    question: "Under which article of the Qanun-e-Shahadat Order, 1984 may the Court presume that Kamran is either the thief or received stolen property knowing it to be stolen?",
    opts: [
      "Article 46 QSO 1984",
      "Article 129(a) of QSO 1984",
      "Article 140 QSO 1984",
      "Article 163 QSO 1984"
    ],
    ans: 1,
    applicableLaw: "Article 129, Illustration (a), Qanun-e-Shahadat Order, 1984",
    statutorySummary: "Article 129 provides that the Court may presume the existence of any fact which it thinks likely to have happened. Under Illustration (a): The Court may presume that a man who is in possession of stolen goods soon after the theft is either the thief or has received the goods knowing them to be stolen, unless he can account for his possession.",
    whyCorrect: "Under Article 129(a) QSO, the recent, unexplained possession of stolen goods creates a rebuttable judicial presumption of fact that the possessor is either the thief or a dishonest receiver under Section 411 PPC.",
    whyOthersFail: [
      "Article 46 QSO deals with dying declarations and statements of dead persons.",
      "Article 140 QSO deals with confronting a witness with his previous written statements.",
      "Article 163 QSO deals with acceptance of evidence on oath."
    ],
    precedent: "Zafar Ali v. State (2016 SCMR 1629): The Supreme Court affirmed that under Article 129(a) QSO, where stolen goods are recovered from the exclusive possession of an accused shortly after a robbery without reasonable explanation, the presumption of guilt stands fully established.",
    examTip: "Always link Article 129(a) QSO to Section 411 PPC (Receiving Stolen Property) in written exam answers."
  },
  {
    id: "sc-23",
    title: "The Accomplice as Prosecution Witness",
    domain: "Law of Evidence / QSO",
    subDomain: "Competency of Witnesses / Approver",
    difficulty: "Advanced",
    scenarioText: "In a complex corporate fraud and embezzlement case, one of the co-conspirators (an accountant) was arrested by the FIA. The prosecution offered to tender a pardon to him under Section 337 CrPC (Approver) on condition that he make a full and true disclosure of the entire conspiracy and testify against the mastermind.",
    question: "Under which article of the Qanun-e-Shahadat Order, 1984 is an Accomplice declared to be a competent witness against an accused person?",
    opts: [
      "Article 16 of QSO 1984",
      "Article 37 of QSO 1984",
      "Article 46 of QSO 1984",
      "Article 140 of QSO 1984"
    ],
    ans: 0,
    applicableLaw: "Article 16, Qanun-e-Shahadat Order, 1984 (President's Order No. 10 of 1984)",
    statutorySummary: "Article 16 provides that an accomplice shall be a competent witness against an accused person, except in the case of an offence punishable with Hadd. A conviction is not illegal merely because it proceeds upon the uncorroborated testimony of an accomplice.",
    whyCorrect: "Article 16 QSO 1984 explicitly lays down that an accomplice (a partner in crime / approver) is a legally competent witness in Tazir cases. (However, under Article 129 Illustration (b) QSO, the court presumes that an accomplice is unworthy of credit unless corroborated in material particulars).",
    whyOthersFail: [
      "Article 37 QSO deals with confessions made in police custody (inadmissible).",
      "Article 46 QSO deals with dying declarations.",
      "Article 140 QSO deals with confronting a witness with his previous inconsistent statements in writing."
    ],
    precedent: "Phulail Khan v. State (1972 SCMR 659) & Federation of Pakistan v. Hazoor Bakhsh (PLD 1991 FSC 1): The courts established that while an accomplice is legally competent under Article 16 QSO, as a rule of judicial prudence, courts will not convict upon his uncorroborated testimony unless supported by independent evidence.",
    examTip: "Classic pair in legal exams: Article 16 QSO makes the accomplice COMPETENT; Article 129(b) QSO warns that he is UNWORTHY OF CREDIT unless corroborated in material particulars."
  },
  {
    id: "sc-24",
    title: "The Test Identification Parade (TIP)",
    domain: "Law of Evidence / QSO",
    subDomain: "Relevancy of Facts / Identification",
    difficulty: "Intermediate",
    scenarioText: "A masked burglar was confronted in the dark by a homeowner for approximately 15 seconds before fleeing. Three weeks later, police arrested a suspect on secret information. Since the suspect was not previously known to the homeowner, an Identification Parade was scheduled before a Judicial Magistrate in the district jail.",
    question: "Under which article of the Qanun-e-Shahadat Order, 1984 is evidence of a Test Identification Parade (TIP) relevant and admissible?",
    opts: [
      "Article 22 of QSO 1984",
      "Article 30 of QSO 1984",
      "Article 46 of QSO 1984",
      "Article 114 of QSO 1984"
    ],
    ans: 0,
    applicableLaw: "Article 22, Qanun-e-Shahadat Order, 1984 (President's Order No. 10 of 1984)",
    statutorySummary: "Article 22 provides that facts necessary to explain or introduce a fact in issue or relevant fact, or which establish the identity of any thing or person whose identity is relevant, are relevant.",
    whyCorrect: "Article 22 QSO 1984 governs the admissibility of facts establishing the identity of persons or things. A Test Identification Parade (TIP) held before a Judicial Magistrate with proper dummy participants is admitted under Article 22 to corroborate the witness's dock identification.",
    whyOthersFail: [
      "Article 30 QSO deals with Admissions defined in civil and criminal matters.",
      "Article 46 QSO deals with dying declarations of deceased persons.",
      "Article 114 QSO deals with the civil law doctrine of Estoppel."
    ],
    precedent: "Kamal Din v. State (PLD 2018 SC 577): The Supreme Court laid down exhaustive mandatory guidelines for holding a valid TIP under Article 22 QSO, including placing 9 to 10 dummy persons of similar age, height, and appearance for each suspect.",
    examTip: "TIP rules to remember: Held before Judicial Magistrate, dummy ratio 1:8 or 1:10, no police officer present during parade, specific role attributed by the identifying witness."
  },
  {
    id: "sc-25",
    title: "The Cyber Blackmailer (PECA 2016)",
    domain: "Special Laws / Cybercrime",
    subDomain: "PECA & Electronic Crimes",
    difficulty: "Intermediate",
    scenarioText: "An IT technician gained unauthorized access to a female university student's cloud storage account, downloaded her private family photos, created a fake social media profile in her name, and sent messages threatening to distribute manipulated, explicit versions of the photos unless she paid him Rs. 200,000.",
    question: "Under which primary legislation will the Federal Investigation Agency (FIA) Cybercrime Wing prosecute this offender?",
    opts: [
      "The Pakistan Penal Code (PPC 1860) exclusively",
      "The Prevention of Electronic Crimes Act, 2016 (PECA)",
      "The Wireless Telegraphy Act, 1933",
      "The Electronic Transactions Ordinance, 2002"
    ],
    ans: 1,
    applicableLaw: "Sections 14, 20 & 21, Prevention of Electronic Crimes Act, 2016 (PECA)",
    statutorySummary: "PECA 2016 is the specialized criminal statute governing unauthorized access to data, electronic extortion, cyber stalking, and non-consensual transmission of sexually explicit images or defamatory material.",
    whyCorrect: "PECA 2016 is the dedicated special law in Pakistan covering unauthorized access to information systems (Sec 14), offences against dignity of natural persons (Sec 20), cyber stalking and non-consensual depiction of a person (Sec 21). The FIA Cyber Crime Wing is the designated investigating agency.",
    whyOthersFail: [
      "While PPC sections like 384/500/509 may also be cited, PECA 2016 is the primary specialized statute governing digital extortion, hacking, and cyber harassment.",
      "The Wireless Telegraphy Act 1933 governs radio equipment licensing, not computer hacking or digital blackmail.",
      "The Electronic Transactions Ordinance 2002 primarily regulates digital signatures and e-commerce contracts."
    ],
    precedent: "Mst. Amna v. State (2020 PCrLJ 1420): The High Court affirmed that offences involving unauthorized access to personal devices and online dissemination of private images are governed by the specialized penal framework of PECA 2016.",
    examTip: "Core syllabus area for FIA Assistant Director & Inspector (Investigation) exams: Know PECA 2016 Sections 14 (Hacking), 20 (Cyber defamation), 21 (Cyber stalking/harassment)."
  }
];

const databaseData = {
  metadata: {
    title: "Identify the Legal Provision: Case Law & Statutory Scenario Challenge",
    jurisdiction: "Pakistan Legal Framework (Constitution 1973, PPC 1860, CrPC 1898, QSO 1984, Special Laws)",
    totalScenarios: scenarios.length,
    examSuitability: "CSS Competitive Exam (Law / Criminal Law / Constitutional Law), PMS, Civil Judge / Judicial Magistrate, ASJ, FIA AD/Inspector, Law GAT, LAT, Bar Exams",
    keySkillsTested: "Issue spotting, statutory ingredient matching, distractor elimination, judicial precedent citation"
  },
  kpis: {
    scenariosCount: scenarios.length + " Scenarios",
    scenariosDesc: "Real-world hypothetical cases and courtroom dilemmas",
    domainsCovered: "4 Core Domains",
    domainsDesc: "PPC, CrPC, Constitution 1973 & Evidence / PECA",
    precedentsIncluded: "Landmark Precedents",
    precedentsDesc: "Supreme Court & High Court authoritative case law cited",
    difficultyTiers: "3 Skill Tiers",
    difficultyDesc: "Foundation, Intermediate & Advanced Judicial Benchmarks"
  },
  scenarios: scenarios
};

const outputPath = path.join(__dirname, '../frontend/js/data_legal_provision.js');
const fileContent = `/**
 * Identify the Legal Provision - Problem-Solving & Case Law Database
 * Academic & Professional Training Tool for CSS, PMS, Judicial Services, Police & FIA
 */

const LEGAL_PROVISION_DATA = ${JSON.stringify(databaseData, null, 2)};

if (typeof window !== 'undefined') {
  window.LEGAL_PROVISION_DATA = LEGAL_PROVISION_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LEGAL_PROVISION_DATA;
}
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated frontend/js/data_legal_provision.js! Size: ${(fileContent.length / 1024).toFixed(1)} KB`);
console.log(`Total scenarios: ${scenarios.length}`);
