// Part 2: Topics 4, 5, 6, and 7 (120 Questions)
// Topic 4: Pakistan Penal Code (PPC), 1860 (30 MCQs)
// Topic 5: Anti Money Laundering Act 2010 (30 MCQs)
// Topic 6: Cyber Security & PECA (30 MCQs)
// Topic 7: FIA Act, 1974 (30 MCQs)

const TOPIC_4_PPC = [
  {
    q: "The Pakistan Penal Code (Act XLV of 1860) was enacted on 6th October 1860 and came into operation on:",
    opts: ["1st January 1861", "1st January 1862", "14th August 1947", "23rd March 1956"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "The Pakistan Penal Code, 1860 was passed on 6th October 1860 and came into operation on 1st January 1862."
  },
  {
    q: "Under Section 4 of the PPC, the provisions of the Code apply to any offence committed by any citizen of Pakistan or any person in the service of Pakistan in:",
    opts: [
      "Pakistan only",
      "Any place without and beyond Pakistan",
      "Commonwealth countries only",
      "Federal capital territory only"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 4 PPC provides for extraterritorial application of the Code to any citizen of Pakistan or any person in the service of Pakistan in any place without and beyond Pakistan."
  },
  {
    q: "Under Section 21 of the PPC, which of the following is included in the definition of a 'Public Servant'?",
    opts: [
      "Every Commissioned Officer in the Military, Naval or Air Forces of Pakistan",
      "Every Judge including any person empowered by law to discharge judicial functions",
      "Every officer of a Court of Justice whose duty it is to investigate or report",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 21 PPC enumerates various categories of persons who are public servants, including judges, officers of courts, military officers, and government employees."
  },
  {
    q: "Under Section 24 of the PPC, doing anything with the intention of causing wrongful gain to one person or wrongful loss to another person is defined as doing it:",
    opts: ["Fraudulently", "Dishonestly", "Malignantly", "Voluntarily"],
    ans: "B",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 24 PPC defines 'Dishonestly': Whoever does anything with the intention of causing wrongful gain to one person or wrongful loss to another person, is said to do that thing 'dishonestly'."
  },
  {
    q: "Under Section 25 of the PPC, a person is said to do a thing 'fraudulently' if he does that thing with:",
    opts: [
      "Intent to defraud, but not otherwise",
      "Intent to cause bodily hurt",
      "Negligence",
      "Recklessness"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 25 PPC provides: 'A person is said to do a thing fraudulently if he does that thing with intent to defraud, but not otherwise.'"
  },
  {
    q: "Which section of the PPC enumerates the kinds of punishments to which offenders are liable?",
    opts: ["Section 40", "Section 53", "Section 75", "Section 109"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 53 PPC enumerates ten kinds of punishments: Qisas, Diyat, Arsh, Daman, Ta'zir, Death, Imprisonment for life, Imprisonment (rigorous or simple), Forfeiture of property, and Fine."
  },
  {
    q: "Under Section 76 of the PPC, nothing is an offence which is done by a person who is, or who by reason of a mistake of fact in good faith believes himself to be:",
    opts: ["Bound by law to do it", "Above the law", "Acting under mistake of law", "Immune from prosecution"],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 76 PPC protects acts done by a person bound, or by mistake of fact believing himself bound, by law (Ignorantia facti excusat, ignorantia juris non excusat)."
  },
  {
    q: "Under Section 82 of the PPC, nothing is an offence which is done by a child under the age of:",
    opts: ["7 years", "10 years", "14 years", "18 years"],
    ans: "B",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Under Section 82 PPC (as amended by Criminal Law Amendment Act 2016), nothing is an offence which is done by a child under ten years of age (doli incapax)."
  },
  {
    q: "Under Section 84 of the PPC (defence of insanity / McNaughten rule), an act is not an offence if by reason of unsoundness of mind the person was incapable of knowing:",
    opts: [
      "The nature of the act, or that he was doing what is either wrong or contrary to law",
      "His own legal name and address",
      "The penalty prescribed for the offence",
      "The identity of the police officer"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 84 PPC provides that nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act, or that what he is doing is either wrong or contrary to law."
  },
  {
    q: "Under Section 96 of the PPC, nothing is an offence which is done in the exercise of the right of:",
    opts: ["Public interest litigation", "Private defence", "Official immunity", "Retaliation"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 96 PPC declares: 'Nothing is an offence which is done in the exercise of the right of private defence.'"
  },
  {
    q: "Under Section 100 of the PPC, the right of private defence of the body extends to causing death in which of the following assaults?",
    opts: [
      "An assault causing reasonable apprehension of death or grievous hurt",
      "An assault with the intention of committing rape or gratifying unnatural lust",
      "An assault with the intention of kidnapping or abducting",
      "All of the above"
    ],
    ans: "D",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 100 PPC specifies six descriptions of assault where private defence of the body extends to the voluntary causing of death, including apprehension of death, grievous hurt, rape, unnatural lust, kidnapping/abducting, and wrongful confinement."
  },
  {
    q: "Under Section 107 of the PPC, a person abets the doing of a thing who:",
    opts: [
      "Instigates any person to do that thing",
      "Engages with one or more persons in a conspiracy for the doing of that thing",
      "Intentionally aids, by any act or illegal omission, the doing of that thing",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 107 PPC defines abetment under three modes: instigation, conspiracy, and intentional aiding."
  },
  {
    q: "Criminal Conspiracy is defined under which section of the PPC?",
    opts: ["Section 108", "Section 120-A", "Section 121", "Section 124-A"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 120-A PPC defines Criminal Conspiracy: When two or more persons agree to do, or cause to be done, an illegal act, or an act which is not illegal by illegal means, such an agreement is designated a criminal conspiracy."
  },
  {
    q: "Waging or attempting to wage war against Pakistan is punishable under which section of the PPC?",
    opts: ["Section 121", "Section 124-A", "Section 131", "Section 153-A"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 121 PPC punishes waging or attempting to wage war or abetting waging of war against Pakistan with death, or imprisonment for life, and fine."
  },
  {
    q: "Under Section 141 of the PPC, an assembly of how many persons is designated an 'unlawful assembly' if their common object meets statutory criteria?",
    opts: ["Two or more", "Three or more", "Five or more", "Ten or more"],
    ans: "C",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 141 PPC defines an Unlawful Assembly as an assembly of five or more persons having one of the specified common objects."
  },
  {
    q: "Giving false evidence in a judicial proceeding is punishable under Section 193 of the PPC with imprisonment which may extend to:",
    opts: ["3 years", "5 years", "7 years and fine", "Life imprisonment"],
    ans: "C",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 193 PPC provides that whoever intentionally gives false evidence in any stage of a judicial proceeding shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine."
  },
  {
    q: "Under Section 300 of the PPC, intentional causing of death of a human being is designated as:",
    opts: ["Qatl-i-Khata", "Qatl-i-Shibh-i-Amd", "Qatl-i-Amd", "Qatl-bis-Sabab"],
    ans: "C",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 300 PPC defines Qatl-i-Amd: Whoever, with the intention of causing death or with the intention of causing bodily injury to a person, causes death, commits Qatl-i-Amd."
  },
  {
    q: "What is the primary punishment for Qatl-i-Amd under Section 302(a) of the PPC?",
    opts: ["Death as Qisas", "Imprisonment for life as Ta'zir", "Diyat only", "Rigorous imprisonment for 14 years"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Under Section 302(a) PPC, Qatl-i-Amd is punishable with death as Qisas."
  },
  {
    q: "Under Section 318 of the PPC, whoever, without any intention to cause death or cause harm, causes the death of another person by mistake of act or mistake of fact, commits:",
    opts: ["Qatl-i-Amd", "Qatl-i-Shibh-i-Amd", "Qatl-i-Khata", "Qatl-bis-Sabab"],
    ans: "C",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 318 PPC defines Qatl-i-Khata as causing death without intention to cause death or cause harm, either by mistake of act or mistake of fact."
  },
  {
    q: "Under Section 378 of the PPC, which of the following is an essential ingredient of 'Theft'?",
    opts: [
      "Dishonest intention to take movable property",
      "The property must be taken out of the possession of any person",
      "The taking must be without that person's consent",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 378 PPC requires: (1) dishonest intention, (2) movable property, (3) taken out of possession of another, (4) without consent, and (5) moving in order to such taking."
  },
  {
    q: "Under Section 383 of the PPC, intentionally putting any person in fear of any injury and dishonestly inducing that person to deliver property is:",
    opts: ["Theft", "Extortion", "Cheating", "Robbery"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 383 PPC defines Extortion: Whoever intentionally puts any person in fear of any injury to that person or to any other, and thereby dishonestly induces the person so put in fear to deliver to any person any property or valuable security, commits extortion."
  },
  {
    q: "Under Section 390 of the PPC, when does Theft become 'Robbery'?",
    opts: [
      "When more than 10 people are present",
      "If, in order to committing theft, the offender voluntarily causes or attempts to cause death, hurt, or wrongful restraint",
      "If the value of stolen goods exceeds 1 million rupees",
      "When committed during nighttime only"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 390 PPC provides that theft is robbery if, in order to the committing of the theft, or in carrying away property obtained by theft, the offender voluntarily causes or attempts to cause to any person death or hurt or wrongful restraint."
  },
  {
    q: "Under Section 391 of the PPC, when five or more persons conjointly commit or attempt to commit a robbery, the offence is designated as:",
    opts: ["Extortion", "Dacoity", "Hijacking", "Banditry"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 391 PPC defines Dacoity: When five or more persons conjointly commit or attempt to commit a robbery, every person so committing or attempting is said to commit 'dacoity'."
  },
  {
    q: "Dishonest misappropriation of property is defined under which section of the PPC?",
    opts: ["Section 403", "Section 405", "Section 415", "Section 420"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 403 PPC defines Dishonest Misappropriation of Property: Whoever dishonestly misappropriates or converts to his own use any movable property, shall be punished with imprisonment up to two years, or with fine, or both."
  },
  {
    q: "Criminal Breach of Trust by a Public Servant, or by a banker, merchant or agent, is punishable under which section of the PPC?",
    opts: ["Section 406", "Section 408", "Section 409", "Section 420"],
    ans: "C",
    diff: "Medium",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 409 PPC deals with Criminal Breach of Trust by public servant, banker, merchant, or agent, punishable with imprisonment for life or imprisonment up to ten years, and fine (a key schedule offence investigated by FIA)."
  },
  {
    q: "Cheating and dishonestly inducing delivery of property is punishable under which section of the PPC?",
    opts: ["Section 417", "Section 419", "Section 420", "Section 425"],
    ans: "C",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 420 PPC deals with Cheating and dishonestly inducing delivery of property, punishable with imprisonment up to seven years and fine."
  },
  {
    q: "Under Section 463 of the PPC, making any false document with intent to cause damage or injury to the public or any person constitutes:",
    opts: ["Perjury", "Forgery", "Cheating", "Mischief"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 463 PPC defines Forgery: Whoever makes any false document or electronic record with intent to cause damage or injury to the public or to any person, or to support any claim or title, commits forgery."
  },
  {
    q: "Which section of the PPC prescribes the general punishment for Forgery?",
    opts: ["Section 465", "Section 468", "Section 471", "Section 477-A"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 465 PPC provides punishment for forgery: imprisonment of either description for a term which may extend to two years, or with fine, or with both."
  },
  {
    q: "Falsification of Accounts by a clerk, officer, or servant is punishable under which section of the PPC?",
    opts: ["Section 420", "Section 468", "Section 471", "Section 477-A"],
    ans: "D",
    diff: "Hard",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 477-A PPC punishes Falsification of Accounts by a clerk, officer, or servant with imprisonment up to seven years, or with fine, or with both."
  },
  {
    q: "Under Section 499 of the PPC, whoever by words spoken or intended to be read, makes or publishes any imputation concerning any person intending to harm reputation, commits:",
    opts: ["Criminal Intimidation", "Defamation", "Nuisance", "Affray"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Penal Code (PPC), 1860",
    exp: "Section 499 PPC defines Defamation, punishable under Section 500 PPC with simple imprisonment for a term which may extend to two years, or with fine, or with both."
  }
];

const TOPIC_5_AMLA = [
  {
    q: "The Anti Money Laundering Act (AMLA), 2010 was enacted as Act No. _____ of 2010.",
    opts: ["Act IV of 2010", "Act VII of 2010", "Act X of 2010", "Act XV of 2010"],
    ans: "B",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "The Anti Money Laundering Act, 2010 is officially designated as Act No. VII of 2010, receiving Presidential assent in March 2010."
  },
  {
    q: "Under Section 3 of AMLA 2010, a person is guilty of the offence of money laundering if he:",
    opts: [
      "Acquires, converts, possesses, uses or transfers property, knowing or having reason to believe that such property is proceeds of crime",
      "Conceals or disguises the true nature, origin, location, disposition, movement or ownership of property knowing it to be proceeds of crime",
      "Participates in, associates, conspires to commit, attempts to commit, aids, abets, facilitates, or counsels commission of any acts above",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 3 of AMLA 2010 comprehensively defines the offence of money laundering covering acquisition, conversion, concealment, transfer, and abetment/conspiracy."
  },
  {
    q: "What is the punishment prescribed for the offence of money laundering under Section 4 of AMLA 2010?",
    opts: [
      "Imprisonment for 6 months and fine up to 500,000 rupees",
      "Rigorous imprisonment for not less than 1 year up to 10 years, and fine up to 25 million rupees, and forfeiture of property",
      "Life imprisonment without fine",
      "Imprisonment up to 3 years or fine of 1 million rupees"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Under Section 4 AMLA 2010, whoever commits the offence of money laundering shall be punished with rigorous imprisonment for a term which shall not be less than one year but may extend to ten years and shall also be liable to fine which may extend to twenty-five million rupees and forfeiture of property."
  },
  {
    q: "Under AMLA 2010, what is a 'Predicate Offence' defined as under Section 2(xxv)?",
    opts: [
      "Any traffic violation punishable with fine",
      "An offence specified in the Schedule to AMLA 2010, proceeds of which may become the subject of an offence of money laundering",
      "A civil contempt of court",
      "Any breach of contract"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 2(xxv) AMLA 2010 defines 'predicate offence' as an offence specified in the Schedule to this Act, the proceeds of which may generate assets involved in money laundering."
  },
  {
    q: "Under Section 6 of AMLA 2010, the Financial Monitoring Unit (FMU) is established by:",
    opts: [
      "The Supreme Court of Pakistan",
      "The Federal Government, housed in the State Bank of Pakistan",
      "The provincial police departments",
      "The United Nations Security Council directly"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 6(1) AMLA 2010 provides that the Federal Government shall establish a Financial Monitoring Unit (FMU) which shall be housed in the State Bank of Pakistan or any other place."
  },
  {
    q: "What is the primary statutory function of the Financial Monitoring Unit (FMU) under Section 6(4) of AMLA 2010?",
    opts: [
      "Conduct physical raids and make arrests directly",
      "Receive, analyze and disseminate Suspicious Transaction Reports (STRs) and Currency Transaction Reports (CTRs)",
      "Preside over criminal trials as a Court of Session",
      "Draft the federal annual budget"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 6(4) AMLA 2010 mandates that the FMU shall receive Suspicious Transaction Reports (STRs) and Currency Transaction Reports (CTRs), analyze them, and disseminate financial intelligence to investigating agencies."
  },
  {
    q: "Under Section 5 of AMLA 2010, the National Executive Committee (NEC) is chaired by the:",
    opts: [
      "Director General of FIA",
      "Federal Minister for Finance or Advisor to Prime Minister on Finance",
      "Governor of State Bank of Pakistan",
      "Chairman of NAB"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 5(1) AMLA 2010 provides that the National Executive Committee shall consist of the Minister for Finance or Advisor to the Prime Minister on Finance as its Chairman."
  },
  {
    q: "Who serves as the Chairman of the General Committee (GC) under Section 5(4) of AMLA 2010?",
    opts: [
      "Finance Secretary",
      "Secretary Interior",
      "Governor State Bank of Pakistan",
      "Director General FMU"
    ],
    ans: "A",
    diff: "Hard",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Under Section 5(4) AMLA 2010, the General Committee is chaired by the Finance Secretary of the Federal Government."
  },
  {
    q: "Under Section 7 of AMLA 2010, reporting entities must file a Suspicious Transaction Report (STR) to the FMU within:",
    opts: [
      "Immediately, but not later than seven working days after forming suspicion",
      "30 days from the end of the fiscal quarter",
      "6 months after transaction completion",
      "Only upon receiving a written notice from the court"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 7(1) AMLA 2010 specifies that reporting entities must file an STR promptly and within seven working days of forming the suspicion or having reasonable grounds of suspicion."
  },
  {
    q: "Under Section 7 of AMLA 2010 and related regulations, a Currency Transaction Report (CTR) must be submitted for cash transactions exceeding:",
    opts: ["500,000 PKR", "1,000,000 PKR", "2,000,000 PKR (or equivalent in foreign currency)", "5,000,000 PKR"],
    ans: "C",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "The statutory threshold for submitting Currency Transaction Reports (CTRs) to the FMU is cash transactions of two million rupees (PKR 2,000,000) or equivalent foreign currency."
  },
  {
    q: "Under Section 7C of AMLA 2010, reporting entities are required to maintain records of transactions and Customer Due Diligence (CDD) for a minimum period of:",
    opts: ["1 year", "3 years", "5 years from the date of transaction or termination of business relationship", "10 years"],
    ans: "C",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 7C AMLA 2010 mandates that reporting entities maintain records of transactions, account files, and CDD data for at least five years after completion of transaction or business relationship."
  },
  {
    q: "Under AMLA 2010, which of the following is considered a 'Designated Non-Financial Business and Profession' (DNFBP)?",
    opts: [
      "Real estate agents and developers",
      "Dealers in precious metals and precious stones",
      "Lawyers, notaries, and accountants when conducting certain specified financial transactions for clients",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 2(xii-a) AMLA 2010 includes real estate agents, precious metal dealers, lawyers, and accountants under the definition of DNFBPs in line with FATF standards."
  },
  {
    q: "Under Section 8 of AMLA 2010, an investigating officer, with prior permission of the Court, may provisionally attach property involved in money laundering for a period not exceeding:",
    opts: ["30 days", "60 days", "90 days", "180 days"],
    ans: "D",
    diff: "Hard",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 8 AMLA 2010 provides that an investigating officer with prior court permission may provisionally attach property for a period not exceeding 180 days."
  },
  {
    q: "Under Section 9 of AMLA 2010, after hearing the aggrieved person, the Court may confirm the attachment of property if it is satisfied that the property is:",
    opts: [
      "Proceeds of crime or involved in money laundering",
      "Inherited agricultural land",
      "Subject to normal commercial dispute",
      "Exclusively situated outside Pakistan"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 9 AMLA 2010 provides for confirmation of attachment by the Court if it is satisfied that the property is proceeds of crime or involved in money laundering."
  },
  {
    q: "Which Court has jurisdiction to try offences punishable under AMLA 2010 pursuant to Section 20?",
    opts: [
      "Magistrate of Second Class",
      "Court of Session (or designated Special Court)",
      "Federal Shariat Court directly",
      "Family Court"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 20 AMLA 2010 provides that the Court of Session shall be the Court having jurisdiction to try offences punishable under this Act."
  },
  {
    q: "Under Section 21 of AMLA 2010, all offences punishable under the Act are:",
    opts: [
      "Non-cognizable and bailable",
      "Cognizable and non-bailable",
      "Compoundable at the discretion of the police",
      "Triable only by arbitration"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 21(1) AMLA 2010 provides that notwithstanding anything contained in the CrPC, offences under this Act shall be cognizable and non-bailable."
  },
  {
    q: "Under Section 21(2) of AMLA 2010, which procedural code governs investigations, arrests, searches, and trials except as otherwise provided?",
    opts: [
      "Code of Civil Procedure, 1908",
      "Code of Criminal Procedure, 1898",
      "Representation of the People Act, 1976",
      "Federal Investigation Agency Rules, 1975"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 21(2) AMLA 2010 states that save as otherwise provided in this Act, the provisions of the Code of Criminal Procedure, 1898 shall apply to proceedings relating to offences under this Act."
  },
  {
    q: "What does Section 34 of AMLA 2010 prohibit under the doctrine of 'Tipping-off'?",
    opts: [
      "Tipping waiters at restaurants",
      "Disclosing that an STR or related information is being or has been submitted to FMU or that a money laundering investigation is underway",
      "Paying lawful fees to an attorney",
      "Voluntary tax filings with FBR"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 34 AMLA 2010 prohibits tipping-off: reporting entities and their officers shall not disclose to any person that an STR or CTR or information is being provided or that an inquiry is being carried out."
  },
  {
    q: "Under Section 34(2) of AMLA 2010, any person who knowingly and willfully violates the prohibition of tipping-off shall be liable to:",
    opts: [
      "A verbal warning only",
      "Imprisonment for a term which may extend to five years, or fine up to five million rupees, or both",
      "Permanent disqualification from voting",
      "Community service for 10 days"
    ],
    ans: "B",
    diff: "Hard",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 34(2) AMLA 2010 punishes tipping-off with imprisonment extending up to five years, or fine which may extend to five million rupees, or both."
  },
  {
    q: "Under Section 26 of AMLA 2010, the Federal Government may enter into agreements with foreign governments for:",
    opts: [
      "Exchange of intelligence, mutual legal assistance, and recovery of proceeds of crime",
      "Joint military maneuvers only",
      "Visa waivers for tourists",
      "Currency unification"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 26 AMLA 2010 authorizes the Federal Government to enter into bilateral or multilateral agreements with foreign governments for mutual legal assistance and sharing of information."
  },
  {
    q: "Which agency is an authorized investigating agency under Section 2(j) and Section 24 of AMLA 2010?",
    opts: [
      "Federal Investigation Agency (FIA)",
      "National Accountability Bureau (NAB)",
      "Anti Narcotics Force (ANF) and Federal Board of Revenue (FBR)",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Under AMLA 2010, investigating agencies include FIA, NAB, ANF, Directorate General of Intelligence and Investigation (Customs & Inland Revenue - FBR), and provincial police departments."
  },
  {
    q: "Under Section 10 of AMLA 2010, when an accused is convicted of an offence of money laundering, the Court shall order that the property involved in money laundering shall:",
    opts: [
      "Be returned to the convict upon payment of tax",
      "Stand forfeited to the Federal Government",
      "Be auctioned and proceeds divided among police officers",
      "Be placed in private trust"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 10 AMLA 2010 provides that where the Court finds an offence of money laundering proved, it shall order that the property involved shall stand forfeited to the Federal Government."
  },
  {
    q: "Under Section 14 of AMLA 2010, an investigating officer has the power to:",
    opts: [
      "Enter and search any building, place, vessel, or vehicle where he has reason to suspect property involved in money laundering is kept",
      "Break open any lock of any door or box",
      "Seize any records, books of accounts, or property found as a result of such search",
      "All of the above"
    ],
    ans: "D",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 14 AMLA 2010 vests extensive powers of search and seizure in investigating officers during money laundering investigations."
  },
  {
    q: "Under Section 15 of AMLA 2010, an investigating officer may inspect and take copies of records or books of accounts from:",
    opts: ["Any reporting entity or financial institution", "Foreign embassies without permission", "Supreme Court private chambers", "President's personal residence"],
    ans: "A",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 15 AMLA 2010 empowers authorized officers to survey, inspect, and take copies of records maintained by reporting entities."
  },
  {
    q: "Under Section 41 of AMLA 2010, the provisions of AMLA shall have effect:",
    opts: [
      "Subject to provincial police rules",
      "Notwithstanding anything inconsistent therewith contained in any other law for the time being in force (overriding effect)",
      "Only if approved by provincial assemblies",
      "Only during national financial emergencies"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 41 AMLA 2010 provides an overriding clause: the provisions of this Act shall have effect notwithstanding anything inconsistent contained in any other law for the time being in force."
  },
  {
    q: "Under Section 33 of AMLA 2010, what is the penalty for reporting entities failing to comply with CDD, record-keeping, or reporting obligations?",
    opts: [
      "Administrative fine and revocation or suspension of operating license",
      "Imprisonment of all customers of the bank",
      "Immediate closure of all branches in Pakistan",
      "None; compliance is purely voluntary"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 33 AMLA 2010 empowers regulatory authorities and the court to impose administrative monetary sanctions, penalties, and direct suspension/revocation of licenses."
  },
  {
    q: "Under Section 12 of AMLA 2010, what happens to the attached property if the trial results in an acquittal of the accused?",
    opts: [
      "The property is permanently retained by the police",
      "The Court shall order the release of the attached property to the person entitled to receive it",
      "The property is transferred to the State Bank reserves",
      "The property is destroyed"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 12 AMLA 2010 provides that on termination of trial resulting in acquittal, the attachment of property ceases and the court orders its release to the entitled party."
  },
  {
    q: "Under Section 43 of AMLA 2010, who is empowered to make rules for carrying out the purposes of this Act?",
    opts: [
      "The Federal Government, in consultation with the National Executive Committee",
      "The High Court Chief Justice",
      "The Attorney General independently",
      "The local District Bar Associations"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 43 AMLA 2010 vests the rule-making power in the Federal Government, in consultation with the National Executive Committee."
  },
  {
    q: "Under Section 16 of AMLA 2010, where an investigating officer has arrested any person, he shall immediately inform the person of:",
    opts: [
      "The grounds of such arrest",
      "The full names of all secret informants",
      "The political party affiliation of the officer",
      "The private bank balance of the prosecutor"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 16 AMLA 2010 mandates that an arrested person shall be informed of the grounds of his arrest as soon as may be, in accordance with constitutional guarantees (Article 10)."
  },
  {
    q: "Under Section 37 of AMLA 2010, no suit, prosecution or other legal proceeding shall lie against the Federal Government, FMU, or any officer for:",
    opts: [
      "Anything which is in good faith done or intended to be done under AMLA (Indemnity clause)",
      "Gross corruption and bribery",
      "Willful destruction of evidence",
      "Fabrication of false STRs"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Anti Money Laundering Act 2010",
    exp: "Section 37 AMLA 2010 provides statutory indemnity protecting the Federal Government, FMU, and investigating officers for acts done in good faith under the Act."
  }
];

const TOPIC_6_CYBER_SECURITY = [
  {
    q: "The Prevention of Electronic Crimes Act (PECA) was enacted by the Parliament of Pakistan in which year?",
    opts: ["2014", "2015", "2016", "2018"],
    ans: "C",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "The Prevention of Electronic Crimes Act, 2016 (Act XL of 2016) was passed by Parliament and received Presidential assent in August 2016."
  },
  {
    q: "What are the three pillars of the foundational 'CIA Triad' in Cyber Security?",
    opts: [
      "Confidentiality, Integrity, and Availability",
      "Control, Inspection, and Authorization",
      "Centralization, Identification, and Access",
      "Cybersecurity, Intelligence, and Antivirus"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "The CIA Triad stands for Confidentiality (privacy of data), Integrity (trustworthiness/accuracy of data), and Availability (accessibility by authorized users)."
  },
  {
    q: "Under Section 3 of PECA 2016, unauthorized access to an information system or data is punishable with imprisonment up to:",
    opts: ["3 months, or fine up to 50,000 rupees", "6 months, or fine up to 50,000 rupees", "3 months, or fine up to 50,000 rupees, or both", "2 years, or fine up to 1 million rupees"],
    ans: "C",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 3 of PECA 2016 punishes unauthorized access to an information system or data with imprisonment for a term which may extend to three months or with fine which may extend to fifty thousand rupees or with both."
  },
  {
    q: "Under Section 4 of PECA 2016, unauthorized copying or transmission of data with dishonest intention is punishable with imprisonment up to:",
    opts: ["6 months or fine up to 100,000 rupees, or both", "1 year or fine up to 500,000 rupees", "3 years or fine up to 1 million rupees", "5 years"],
    ans: "A",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 4 PECA 2016 provides punishment of imprisonment for a term which may extend to six months, or with fine up to one hundred thousand rupees, or both, for unauthorized copying or transmission of data."
  },
  {
    q: "Under Section 5 of PECA 2016, interference with an information system or data (such as altering, deleting or impairing functioning) is punishable with imprisonment extending up to:",
    opts: ["1 year", "2 years, or fine up to 500,000 rupees, or both", "5 years", "10 years"],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 5 PECA 2016 prescribes imprisonment for a term which may extend to two years, or fine which may extend to five hundred thousand rupees, or both for interference with information systems or data."
  },
  {
    q: "Under Section 6 of PECA 2016, unauthorized access to 'Critical Infrastructure Information Systems or Data' is punishable with imprisonment up to:",
    opts: ["1 year", "3 years, or fine up to 1 million rupees, or both", "5 years", "14 years"],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 6 PECA 2016 punishes unauthorized access to critical infrastructure information systems with imprisonment for a term which may extend to three years, or with fine which may extend to one million rupees, or both."
  },
  {
    q: "Under Section 8 of PECA 2016, interference with Critical Infrastructure Information Systems or Data is punishable with imprisonment up to:",
    opts: ["3 years", "5 years, or fine up to 5 million rupees, or both", "7 years, or fine up to 10 million rupees, or both", "14 years"],
    ans: "C",
    diff: "Hard",
    subCat: "Cyber Security",
    exp: "Section 8 PECA 2016 provides that whoever with dishonest intention interferes with critical infrastructure information system shall be punished with imprisonment up to seven years, or with fine up to ten million rupees, or both."
  },
  {
    q: "Under Section 10 of PECA 2016, what is the maximum punishment for 'Cyber Terrorism'?",
    opts: [
      "7 years imprisonment",
      "10 years imprisonment and fine of 10 million rupees",
      "14 years imprisonment, or fine up to 50 million rupees, or both",
      "Death penalty in all cases"
    ],
    ans: "C",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "Section 10 PECA 2016 provides that cyber terrorism is punishable with imprisonment for a term which may extend to fourteen years, or with fine which may extend to fifty million rupees, or with both."
  },
  {
    q: "Electronic Forgery is defined and penalized under which section of PECA 2016?",
    opts: ["Section 11", "Section 13", "Section 16", "Section 19"],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 13 PECA 2016 deals with Electronic Forgery, punishable with imprisonment up to three years, or fine up to two hundred and fifty thousand rupees, or both (or seven years and five million rupees if concerning critical infrastructure)."
  },
  {
    q: "Electronic Fraud (causing wrongful gain or wrongful loss by deceptive electronic means) is penalized under which section of PECA 2016?",
    opts: ["Section 12", "Section 14", "Section 17", "Section 21"],
    ans: "B",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "Section 14 PECA 2016 prescribes punishment for Electronic Fraud with imprisonment up to two years, or fine up to ten million rupees, or both."
  },
  {
    q: "Under Section 16 of PECA 2016, unauthorized use of identity information (Identity Theft) is punishable with imprisonment up to:",
    opts: ["1 year", "3 years, or fine up to 5 million rupees, or both", "7 years", "10 years"],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 16 PECA 2016 punishes unauthorized obtaining, selling, possessing, or transmitting another person's identity information with imprisonment up to three years, or fine up to five million rupees, or both."
  },
  {
    q: "Under Section 17 of PECA 2016, unauthorized issuance of SIM cards by a service provider or agent is punishable with imprisonment up to:",
    opts: ["1 year", "3 years, or fine up to 500,000 rupees, or both", "5 years", "10 years"],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 17 PECA 2016 provides that unauthorized issuance of SIM cards or electronic identity modules is punishable with imprisonment up to three years, or fine up to five hundred thousand rupees, or both."
  },
  {
    q: "Under Section 21 of PECA 2016, offences against the modesty of a natural person and minor (such as non-consensual sharing of intimate images) are punishable with imprisonment up to:",
    opts: ["2 years", "5 years, or fine up to 5 million rupees, or both", "7 years (or 10 years for minors)", "14 years"],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 21 PECA 2016 punishes offences against the modesty of a natural person with imprisonment up to five years, or fine up to five million rupees, or both."
  },
  {
    q: "Under Section 24 of PECA 2016, 'Cyber Stalking' includes which of the following acts committed through an information system?",
    opts: [
      "Following a person or contacting him despite disinterest",
      "Spying upon or monitoring someone's internet usage",
      "Distributing photos or information to harass or intimidate a person",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "Section 24 PECA 2016 comprehensively defines Cyber Stalking to include repeated unwanted contact, electronic surveillance/monitoring, and distributing material to intimidate."
  },
  {
    q: "Under Section 29 of PECA 2016, service providers are required to retain specified traffic data for a period of at least:",
    opts: ["30 days", "90 days", "1 year (or as directed by the regulatory authority)", "5 years"],
    ans: "C",
    diff: "Hard",
    subCat: "Cyber Security",
    exp: "Section 32 (and Section 29) of PECA 2016 mandates that service providers shall retain traffic data for a minimum period of one year or such period as the Pakistan Telecommunication Authority (PTA) may notify."
  },
  {
    q: "Under Section 30 of PECA 2016, which designated law enforcement agency is empowered to investigate electronic crimes?",
    opts: [
      "Federal Investigation Agency (FIA) / Cyber Crime Wing (or National Cyber Crime Investigation Agency NCCIA)",
      "Traffic Police",
      "Customs Preventive only",
      "Municipal Corporation"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "Under Section 30 PECA 2016, the Federal Government designated the Federal Investigation Agency (Cyber Crime Wing) as the primary investigation agency."
  },
  {
    q: "Under Section 33 of PECA 2016, an authorized officer may search and seize an information system or computer data only with a warrant issued by the:",
    opts: ["Station House Officer", "Court", "Secretary of Information Technology", "PTA Chairman"],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 33 PECA 2016 mandates that an authorized officer shall obtain a warrant from the Court before searching premises or seizing computer equipment and data."
  },
  {
    q: "What exception does Section 34 of PECA 2016 provide regarding search and seizure without warrant?",
    opts: [
      "Allowed only where there is imminent threat of destruction of evidence or commission of cyber terrorism or offence against modesty of a minor",
      "Allowed at the personal whim of any constable",
      "Allowed in all cases without restriction",
      "Allowed only on weekends"
    ],
    ans: "A",
    diff: "Hard",
    subCat: "Cyber Security",
    exp: "Section 34 PECA 2016 restricts warrantless search and seizure to emergency/exigent situations involving reasonable apprehension of destruction of critical data, cyber terrorism, or offences against minors."
  },
  {
    q: "Which type of cyber attack involves overwhelming a server or network with flood traffic to make it unavailable to legitimate users?",
    opts: ["Phishing", "Distributed Denial of Service (DDoS)", "Man-in-the-Middle (MitM)", "SQL Injection"],
    ans: "B",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "A Distributed Denial of Service (DDoS) attack overwhelms targeted systems with malicious flood traffic originating from multiple compromised devices (botnet)."
  },
  {
    q: "What is 'Ransomware' in cyber security?",
    opts: [
      "Hardware used to increase internet bandwidth",
      "Malicious software that encrypts a victim's files and demands payment for the decryption key",
      "A firewall protocol for verifying SSL certificates",
      "An open-source database management tool"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "Ransomware is malware designed to deny access to computer files by encrypting them until a ransom sum is paid to the cyber criminals."
  },
  {
    q: "What does the term 'Phishing' refer to?",
    opts: [
      "Fraudulent attempts to obtain sensitive information like usernames and passwords by impersonating a trustworthy entity",
      "Securing passwords through hashing and salting",
      "Upgrading routers to prevent data leaks",
      "Running legal network diagnostics"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "Phishing is a social engineering attack where attackers deceive users into revealing confidential credentials through fraudulent emails, websites, or messages."
  },
  {
    q: "In cryptography and cyber security, what does 'Non-Repudiation' mean?",
    opts: [
      "The ability to refute any online payment",
      "Assurance that the sender of data cannot successfully deny having sent the data or originated the signature",
      "Automatic deletion of server logs",
      "Encrypting hardware with symmetric keys"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Non-repudiation ensures that a party to a communication or digital transaction cannot deny the authenticity of their signature or having sent the communication."
  },
  {
    q: "Under PECA 2016, which body is responsible for Computer Emergency Response (CERT) to coordinate cyber incidents nationally?",
    opts: [
      "National Computer Emergency Response Team (National CERT) under Section 46-A",
      "Provincial Sports Board",
      "Pakistan Railways",
      "Securities and Exchange Commission of Pakistan"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 46-A of PECA 2016 empowers the Federal Government to establish National and Sectoral Computer Emergency Response Teams (CERTs) to coordinate cyber threat mitigation."
  },
  {
    q: "What is a 'Zero-Day Vulnerability'?",
    opts: [
      "A security flaw known to the software vendor for zero days (undisclosed flaw for which no patch currently exists)",
      "A bug that only occurs on the first day of the calendar year",
      "A completely patched and tested operating system",
      "A trial software that expires in 24 hours"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "A Zero-Day vulnerability is an undisclosed computer-software vulnerability that hackers can exploit before the vendor is aware or has developed a security patch."
  },
  {
    q: "Under Section 44 of PECA 2016, trials of offences under the Act are conducted before:",
    opts: [
      "The Sessions Court or designated Court established under this Act",
      "A Village Punchayat",
      "The Patent Office",
      "Arbitration tribunals exclusively"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "Section 44 PECA 2016 provides that offences under this Act shall be tried by the Court of Session, or designated Cyber Courts."
  },
  {
    q: "What is 'Two-Factor Authentication' (2FA)?",
    opts: [
      "A security mechanism requiring two distinct authentication factors to verify identity before granting access",
      "Using two different web browsers simultaneously",
      "Typing a password twice in the same prompt",
      "Logging in from two separate computers"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "2FA enhances security by requiring two different verification elements (e.g., something you know like a password, and something you have like a mobile OTP code)."
  },
  {
    q: "Under Section 37 of PECA 2016, who has the power to remove, block or issue directions for blocking access to unlawful online content?",
    opts: [
      "Pakistan Telecommunication Authority (PTA)",
      "Federal Investigation Agency directly without notification",
      "Local municipal authorities",
      "Private internet service providers on their own initiative"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 37 PECA 2016 vests statutory authority in the Pakistan Telecommunication Authority (PTA) to block or remove unlawful online content."
  },
  {
    q: "What is 'SQL Injection' (SQLi)?",
    opts: [
      "A cyber attack where malicious SQL statements are inserted into data-entry fields to manipulate backend databases",
      "A method of hardware cooling in server racks",
      "An automated backup utility for databases",
      "A network physical cabling technique"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "SQL injection is a code injection technique used to attack data-driven applications by inserting malicious SQL statements into entry fields for execution."
  },
  {
    q: "Under Section 54 of PECA 2016, the provisions of PECA shall have effect:",
    opts: [
      "Subject to provincial criminal codes",
      "Notwithstanding anything to the contrary contained in any other law for the time being in force (overriding clause)",
      "Only if endorsed by international treaties",
      "Only during declared states of emergency"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Cyber Security",
    exp: "Section 54 PECA 2016 specifies that the provisions of this Act shall take effect notwithstanding anything contained in any other law for the time being in force."
  },
  {
    q: "What is 'Digital Forensics'?",
    opts: [
      "The branch of forensic science encompassing the recovery, investigation, and analysis of material found in digital devices",
      "Creating digital animations for cinema",
      "Testing the battery life of electronic tablets",
      "Manufacturing microprocessors"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Cyber Security",
    exp: "Digital forensics is the legal and scientific recovery, preservation, and analysis of digital evidence from electronic storage media for use in courts of law."
  }
];

const TOPIC_7_FIA_ACT = [
  {
    q: "The Federal Investigation Agency Act, 1974 was enacted as Act No. _____ of 1975.",
    opts: ["Act I of 1975", "Act VIII of 1975", "Act XII of 1975", "Act XX of 1975"],
    ans: "B",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "The Federal Investigation Agency Act, 1974 was passed by Parliament in 1974 and received Presidential assent on 13th January 1975 as Act No. VIII of 1975."
  },
  {
    q: "Under Section 1(2) of the FIA Act, 1974, to whom and where does the Act extend?",
    opts: [
      "Islamabad Capital Territory only",
      "The whole of Pakistan, and it applies also to all citizens of Pakistan and public servants wherever they may be",
      "Only to federal ministries in Islamabad and provincial capitals",
      "Exclusively to airport check-posts"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 1(2) FIA Act, 1974 explicitly states: 'It extends to the whole of Pakistan and also applies to all citizens of Pakistan and Public Servants, wherever they may be.'"
  },
  {
    q: "Under Section 3 of the FIA Act, 1974, the Federal Investigation Agency is constituted by:",
    opts: [
      "The Supreme Court of Pakistan",
      "The Federal Government",
      "The Inspector General of Police Punjab",
      "The Chief of Army Staff"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 3(1) of the FIA Act, 1974 provides that the Federal Government may constitute an agency to be called the Federal Investigation Agency."
  },
  {
    q: "What is the primary statutory mandate of the Federal Investigation Agency under Section 3(1) of the Act?",
    opts: [
      "Collecting provincial agricultural taxes",
      "Inquiry into and investigation of offences specified in the Schedule (Scheduled Offences)",
      "Regulating civil air traffic",
      "Conducting national census operations"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 3(1) mandates the Agency to conduct inquiry into and investigation of the offences specified in the Schedule, including offences connected with matters of the Federal Government."
  },
  {
    q: "Under Section 3(2) of the FIA Act, 1974, who heads the Federal Investigation Agency?",
    opts: [
      "The Inspector General of Police",
      "The Director General appointed by the Federal Government",
      "The Attorney General of Pakistan",
      "The Federal Ombudsman"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 3(2) FIA Act, 1974 provides: 'The Agency shall consist of a Director General to be appointed by the Federal Government and such number of other officers as the Federal Government may, from time to time, appoint.'"
  },
  {
    q: "Under Section 4(1) of the FIA Act, 1974, the 'Superintendence' of the Agency vests in the:",
    opts: ["Director General", "Federal Government", "Chief Justice of Pakistan", "Parliamentary Committee on Interior"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 4(1) of the FIA Act, 1974 states: 'The superintendence of the Agency shall vest in the Federal Government.'"
  },
  {
    q: "Under Section 4(2) of the FIA Act, 1974, the 'Administration' of the Agency vests in the:",
    opts: ["Interior Secretary", "Director General", "Federal Cabinet", "High Court Registrar"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 4(2) of the FIA Act, 1974 provides: 'The administration of the Agency shall vest in the Director General who shall exercise in respect of the Agency such of the powers of an Inspector-General of Police under the Police Act, 1861.'"
  },
  {
    q: "Under Section 5(1) of the FIA Act, 1974, members of the Agency have what powers in relation to the investigation of scheduled offences throughout Pakistan?",
    opts: [
      "Powers of revenue officers only",
      "All the powers including powers relating to search, arrest of persons and seizure of property which officers of a Provincial Police have under CrPC",
      "Powers to impose martial law",
      "Powers to issue legislative ordinances"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 5(1) FIA Act, 1974 vests in members of the Agency all the powers relating to search, arrest of persons, and seizure of property which officers of a Provincial Police have under the Code of Criminal Procedure, 1898."
  },
  {
    q: "Under Section 5(2) of the FIA Act, 1974, any member of the Agency not below the rank of _____ may exercise any of the powers of the officer-in-charge of a Police Station.",
    opts: ["Constable", "Head Constable", "Sub-Inspector", "Assistant Director"],
    ans: "C",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 5(2) FIA Act, 1974 provides: 'any member of the Agency not below the rank of a Sub-Inspector may exercise any of the powers of an officer-in-charge of a police station in that area.'"
  },
  {
    q: "Under Section 5(3) of the FIA Act, 1974, for the purpose of the Code of Criminal Procedure, 1898, every office or post used as an Agency station shall be deemed to be a:",
    opts: ["Judicial Academy", "Police Station", "District Court", "Detention Camp"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 5(3) provides that any post or office used as an Agency office shall be deemed to be a Police Station within the meaning of the CrPC."
  },
  {
    q: "Under Section 5(5) of the FIA Act, 1974, an authorized officer of the Agency may direct the manager of any bank or financial institution not to pay out or permit transfer of money if:",
    opts: [
      "He has reason to believe that the property was acquired by or involved in commission of any scheduled offence",
      "The account holder owes personal money to the officer",
      "The bank belongs to a foreign franchise",
      "The account is newly opened"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 5(5) FIA Act, 1974 empowers an officer not below the rank of Sub-Inspector (with approval of DG/Director) to order freezing/stop-payment of bank accounts involved in scheduled offences."
  },
  {
    q: "Under Section 6 of the FIA Act, 1974, who is empowered to amend the Schedule by notification in the official Gazette?",
    opts: [
      "The Federal Government",
      "The Director General FIA",
      "The Supreme Judicial Council",
      "The Provincial Governors"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 6 FIA Act, 1974 provides: 'The Federal Government may, by notification in the official Gazette, amend the Schedule so as to add any entry thereto or modify or omit any entry therein.'"
  },
  {
    q: "Under Section 7 of the FIA Act, 1974, the Director General may by general or special order direct that any of his powers under the Act shall:",
    opts: [
      "Be exercised by any officer of the Agency specified in the order (Delegation of powers)",
      "Be permanently transferred to provincial ministers",
      "Be extinguished after one year",
      "Be exercised only with Cabinet consensus"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 7 FIA Act, 1974 authorizes the Director General to delegate any of his powers under this Act or rules to any officer of the Agency subordinate to him."
  },
  {
    q: "Section 8 of the FIA Act, 1974 provides an 'Indemnity' clause which protects:",
    opts: [
      "Any member of the Agency or other person against any suit, prosecution, or legal proceeding for anything done in good faith under the Act or rules",
      "Criminals who confess to the Director General",
      "Corrupt officials who retire voluntarily",
      "Foreign spies who claim diplomatic immunity"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 8 FIA Act, 1974 states: 'No suit, prosecution or other legal proceeding shall lie against the Federal Government, any member of the Agency or any other person in respect of anything which is in good faith done or intended to be done under this Act.'"
  },
  {
    q: "Under Section 9 of the FIA Act, 1974, who is empowered to make rules for carrying out the purposes of this Act?",
    opts: [
      "The Federal Government",
      "The Director General FIA alone",
      "The High Court Bar Association",
      "The Federal Public Service Commission"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 9(1) of the FIA Act, 1974 provides: 'The Federal Government may, by notification in the official Gazette, make rules for carrying out the purposes of this Act.'"
  },
  {
    q: "Under Section 10 of the FIA Act, 1974, which previous legislation was repealed upon the commencement of this Act?",
    opts: [
      "The Pakistan Special Police Establishment Ordinance, 1948",
      "The Police Act, 1861",
      "The Federal Security Force Act, 1973",
      "The Criminal Law Amendment Act, 1958"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 10(1) FIA Act, 1974 explicitly repealed the Pakistan Special Police Establishment Ordinance, 1948 (Ordinance VII of 1948)."
  },
  {
    q: "What happened to the personnel, property, and investigations of the Special Police Establishment upon repeal under Section 10(2)?",
    opts: [
      "They were disbanded and pensions forfeited",
      "They stood transferred to and became members, assets, and pending cases of the Federal Investigation Agency",
      "They were transferred to Provincial Police forces",
      "They were handed over to the Armed Forces"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 10(2) FIA Act, 1974 provided for the seamless transfer and absorption of all personnel, assets, liabilities, and ongoing inquiries of the PSPE into the newly constituted FIA."
  },
  {
    q: "Which of the following federal statutes is included in the Schedule to the FIA Act, 1974?",
    opts: [
      "Foreign Exchange Regulation Act, 1947",
      "Emigration Ordinance, 1979 / Passport Act, 1974",
      "Prevention of Corruption Act, 1947 (Act II of 1947)",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Schedule to the FIA Act includes major federal statutes including Foreign Exchange Regulation Act 1947, Emigration Ordinance 1979, Passport Act 1974, Prevention of Corruption Act 1947, and AMLA 2010."
  },
  {
    q: "Which wing of the FIA is directly responsible for handling legal proceedings, prosecuting cases before Special Courts, and rendering legal opinions?",
    opts: [
      "Immigration Wing",
      "Legal and Prosecution Wing",
      "Interpol Wing",
      "Anti-Human Trafficking Wing"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Legal & Prosecution Wing of the FIA (comprising Assistant Directors Legal, Deputy Directors Legal, etc.) conducts prosecutions before trial courts, appeals before High Courts, and provides statutory legal opinions."
  },
  {
    q: "What is the primary role of an Assistant Director (Legal) (BS-17) in the Federal Investigation Agency?",
    opts: [
      "Issuing driving licenses",
      "Prosecuting scheduled offences in Special Courts, conducting bail arguments, and guiding investigating officers on legal requirements of evidence",
      "Auditing state-owned petroleum refineries",
      "Managing municipal sanitation"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "An Assistant Director (Legal) acts as a specialized federal public prosecutor for FIA cases, scrutinizes police reports (Challans), argues bail and trials, and advises investigators on statutory compliance."
  },
  {
    q: "Under the FIA (Inquiries and Investigations) Rules, 1974, before registering a formal FIR under Section 154 CrPC, the Agency typically conducts:",
    opts: [
      "A preliminary inquiry (Verification / Enquiry) to establish prima facie scheduled offence",
      "A trial before the High Court",
      "An arbitration session",
      "A public referendum"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Under the FIA Rules, complaints of scheduled offences undergo preliminary verification/enquiry, and an FIR is registered once a prima facie cognizable scheduled offence is established."
  },
  {
    q: "In FIA prosecution, Special Courts are established under which statute for trial of federal offences like corruption and scheduled crimes?",
    opts: [
      "Criminal Law Amendment Act, 1958 (Act XL of 1958)",
      "Arbitration Act, 1940",
      "Juvenile Justice System Act, 2018 only",
      "Provincial Local Government Act"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Special Judges (Central) are appointed under Section 3 of the Criminal Law Amendment Act, 1958 to try scheduled offences investigated by the FIA."
  },
  {
    q: "Which of the following offences under the Pakistan Penal Code (PPC) falls within the Schedule to the FIA Act, 1974?",
    opts: [
      "Offences relating to coin and government stamps (Sections 230-263-A PPC)",
      "Criminal breach of trust by public servant (Section 409 PPC)",
      "Forgery of valuable security (Section 467 PPC)",
      "All of the above"
    ],
    ans: "D",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Schedule to the FIA Act contains offences against the State, public servants, currency/stamps, criminal breach of trust (Sec 409), cheating (Sec 420), and forgery (Sec 467)."
  },
  {
    q: "Can an officer of the FIA investigate an offence that is purely a provincial subject and NOT listed in the Schedule to the FIA Act, 1974?",
    opts: [
      "Yes, the FIA has unlimited jurisdiction over any crime anywhere in Pakistan",
      "No, the FIA has statutory jurisdiction strictly confined to Scheduled Offences and federal matters",
      "Yes, if requested verbally by any citizen",
      "Yes, but only after sunset"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "The jurisdiction of the FIA is strictly creature of statute (FIA Act, 1974) and limited to the scheduled offences; purely provincial offences remain within the exclusive domain of Provincial Police."
  },
  {
    q: "Under the FIA Act, 1974, where does an appeal against the final judgment of a Special Judge (Central) lie?",
    opts: [
      "To the Director General FIA",
      "To the High Court",
      "To the Federal Ombudsman",
      "To the Ministry of Interior"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Under Section 10 of the Criminal Law Amendment Act, 1958 and the CrPC, appeals against judgments of the Special Judge (Central) lie to the respective High Court."
  },
  {
    q: "Which wing of the FIA is designated as the National Central Bureau (NCB) for INTERPOL in Pakistan?",
    opts: [
      "NCB-Interpol Pakistan, located within the FIA Headquarters",
      "Capital Development Authority",
      "Provincial Counter Terrorism Department",
      "Ministry of Foreign Affairs Protocol Division"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The National Central Bureau (NCB) for INTERPOL in Pakistan is established within the FIA Headquarters in Islamabad, coordinating international Red Notices and extraditions."
  },
  {
    q: "Under Section 5(1) of the FIA Act, 1974, what is the geographical limit within Pakistan for an FIA officer to execute an arrest of an accused in a scheduled offence?",
    opts: [
      "Only within the province where the FIR was registered",
      "Throughout the whole of Pakistan without requiring fresh permission from provincial police",
      "Only within 50 km of an international airport",
      "Within Islamabad Capital Territory only"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 5(1) confers nationwide jurisdiction: members of the Agency shall have throughout Pakistan in relation to scheduled offences all the powers of a police officer."
  },
  {
    q: "Which Ministry of the Government of Pakistan exercises administrative control and oversight over the FIA?",
    opts: [
      "Ministry of Defence",
      "Ministry of Interior",
      "Ministry of Law and Justice",
      "Ministry of Finance"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Federal Investigation Agency operates under the administrative authority and oversight of the Ministry of Interior, Government of Pakistan."
  },
  {
    q: "Under Section 5(4) of the FIA Act, 1974, if an officer makes an arrest or seizure, he shall immediately report the same to:",
    opts: [
      "The officer-in-charge of the nearest police station or Agency post",
      "The Prime Minister's Secretariat",
      "The local newspaper editor",
      "The Provincial Revenue Board"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 5(4) FIA Act, 1974 requires that any member of the Agency who arrests a person or seizes any property shall immediately report the fact to the officer-in-charge of the police station having jurisdiction."
  },
  {
    q: "Under the FIA (Appointment, Promotion and Transfer) Rules, appointments to the posts in BS-17 (such as Assistant Director Legal) are made by:",
    opts: [
      "Direct recruitment through the Federal Public Service Commission (FPSC)",
      "Lottery draw among law graduates",
      "Nomination by local bar associations",
      "Selection by municipal council"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Initial appointment to BS-17 posts in the Federal Government, including Assistant Director (Legal) FIA, is made through open competitive examination conducted by the Federal Public Service Commission (FPSC)."
  }
];

module.exports = {
  TOPIC_4_PPC,
  TOPIC_5_AMLA,
  TOPIC_6_CYBER_SECURITY,
  TOPIC_7_FIA_ACT
};

