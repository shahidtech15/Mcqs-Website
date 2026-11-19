const fs = require('fs');
const path = require('path');

const targetJsPath = path.join(__dirname, '../frontend/js/data_fia_laws.js');

// 1. Read existing data to retain coreLaws, fiaScheduleSpecialActs, fiaWings, practicalScenarios, and quiz
const existingModule = require(targetJsPath);

// 2. Define the complete list of 118 PPC Scheduled Sections directly from the uploaded document
const ppcScheduledSections = [
  // 120-B to 124-A (State Offences & Conspiracy)
  { sec: "120-B", title: "Punishment of criminal conspiracy", group: "Conspiracy & State Offences", category: "State Security", wing: "All Wings / CTW", punishment: "Same as abetment of the main offence", fiaNexus: "When conspiracy relates to scheduled federal offences or offences against the State." },
  { sec: "121", title: "Waging, or attempting to wage war or abetting waging of war against Pakistan", group: "State Offences", category: "State Security", wing: "Counter Terrorism Wing (CTW)", punishment: "Death, or imprisonment for life, and fine", fiaNexus: "Direct offence against the sovereignty of the Federal Government of Pakistan." },
  { sec: "122", title: "Collecting arms, etc., with intention of waging war against Pakistan", group: "State Offences", category: "State Security", wing: "Counter Terrorism Wing (CTW)", punishment: "Imprisonment for life or up to 10 years, and fine", fiaNexus: "Preparatory armed rebellion against the Federation." },
  { sec: "123", title: "Concealing with intent to facilitate design to wage war", group: "State Offences", category: "State Security", wing: "Counter Terrorism Wing (CTW)", punishment: "Imprisonment up to 10 years, and fine", fiaNexus: "Suppression of intelligence regarding armed attack on the State." },
  { sec: "123-A", title: "Condemnation of the creation of the State, and advocacy of abolition of its sovereignty", group: "State Offences", category: "State Security", wing: "CTW / Cyber Crime Wing", punishment: "Imprisonment up to 10 years, and fine", fiaNexus: "Subversion targeting Pakistan's constitutional existence and territorial integrity." },
  { sec: "124", title: "Assaulting President, Governor, etc., with intent to compel or restrain exercise of lawful power", group: "State Offences", category: "State Security", wing: "CTW / Special Investigation", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Offences against the constitutional head of the Federation." },
  { sec: "124-A", title: "Sedition (Exciting disaffection against Federal or Provincial Government)", group: "State Offences", category: "State Security", wing: "CTW / Cyber Crime Wing", punishment: "Imprisonment for life, or up to 3 years, and fine", fiaNexus: "Inciting hatred or contempt against the lawfully established Government." },

  // 161 to 169 (Public Servant Corruption & Bribery)
  { sec: "161", title: "Public servant taking gratification other than legal remuneration in respect of an official act", group: "Public Servant Corruption", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Federal Government employees, ministries, departments, autonomous corporations." },
  { sec: "162", title: "Taking gratification, in order, by corrupt or illegal means, to influence public servant", group: "Public Servant Corruption", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Middlemen/touts claiming influence over federal officials." },
  { sec: "163", title: "Taking gratification, for exercise of personal influence with public servant", group: "Public Servant Corruption", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Simple imprisonment up to 1 year, or fine, or both", fiaNexus: "Influence peddling in federal offices and public appointments." },
  { sec: "164", title: "Abetment by public servant of offences defined in section 162 or 163", group: "Public Servant Corruption", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Federal officials colluding with private touts and agents." },
  { sec: "165", title: "Public servant obtaining valuable thing, without consideration, from person concerned in proceeding", group: "Public Servant Corruption", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Federal officers accepting expensive gifts, vehicles, or property from contractors." },
  { sec: "165-A", title: "Punishment for abetment of offences defined in section 161 or 165", group: "Public Servant Corruption", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Same as section 161 or 165 (up to 3 years)", fiaNexus: "The bribe-giver offering bribes to federal officers." },
  { sec: "166", title: "Public servant disobeying law, with intent to cause injury to any person", group: "Public Servant Misconduct", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Simple imprisonment up to 1 year, or fine, or both", fiaNexus: "Federal public servant willfully flouting statutory rules to harm a citizen." },
  { sec: "168", title: "Public servant unlawfully engaging in trade", group: "Public Servant Misconduct", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Simple imprisonment up to 1 year, or fine, or both", fiaNexus: "Federal officers secretly running commercial businesses in conflict with service rules." },
  { sec: "169", title: "Public servant unlawfully buying or bidding for property", group: "Public Servant Misconduct", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Simple imprisonment up to 2 years, or fine, or both", fiaNexus: "Federal officers bidding for government auction property in their own department." },

  // 175 to 189 (Contempt of Lawful Authority of Public Servants)
  { sec: "175", title: "Omission to produce document to public servant by person legally bound to produce it", group: "Public Justice", category: "Administration", wing: "All Wings", punishment: "Simple imprisonment up to 1 month, or fine up to Rs. 500, or both", fiaNexus: "Refusing to provide summoned records to an FIA investigating officer." },
  { sec: "182", title: "False information with intent to cause public servant to use lawful power to injury of another", group: "Public Justice", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 6 months, or fine up to Rs. 1,000, or both", fiaNexus: "Filing frivolous, fraudulent complaints with the FIA." },
  { sec: "183", title: "Resistance to taking of property by lawful authority of a public servant", group: "Public Justice", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 6 months, or fine up to Rs. 1,000, or both", fiaNexus: "Resisting FIA seizure or search under Section 5(1) FIA Act." },
  { sec: "186", title: "Obstructing public servant in discharge of public functions", group: "Public Justice", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 3 months, or fine up to Rs. 500, or both", fiaNexus: "Physically blocking FIA raiding teams." },
  { sec: "187", title: "Omission to assist public servant when bound by law to give assistance", group: "Public Justice", category: "Administration", wing: "All Wings", punishment: "Simple imprisonment up to 1 month, or fine up to Rs. 200, or both", fiaNexus: "Bank or agency officers failing to assist FIA inquiries when mandated." },
  { sec: "188", title: "Disobedience to order duly promulgated by public servant", group: "Public Justice", category: "Administration", wing: "All Wings", punishment: "Simple imprisonment up to 1 month, or fine up to Rs. 200, or both", fiaNexus: "Defying lawful freezing or appearance orders." },
  { sec: "189", title: "Threat of injury to public servant", group: "Public Justice", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 2 years, or fine, or both", fiaNexus: "Threatening FIA officers, investigators, or public prosecutors." },

  // 201 to 225-A (Obstruction of Justice & Custody)
  { sec: "201", title: "Causing disappearance of evidence of offence, or giving false information to screen offender", group: "Obstruction of Justice", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 7 years (if capital case) or 3 years", fiaNexus: "Deleting digital servers, destroying ledgers, or hiding corruption files." },
  { sec: "216", title: "Harbouring offender who has escaped from custody or whose apprehension has been ordered", group: "Obstruction of Justice", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 7 years (if capital) or up to 3 years", fiaNexus: "Sheltering proclaimed offenders wanted by the FIA." },
  { sec: "217", title: "Public servant disobeying direction of law with intent to save person from punishment", group: "Obstruction of Justice", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 2 years, or fine, or both", fiaNexus: "Federal investigators or officials intentionally sabotaging an inquiry." },
  { sec: "218", title: "Public servant framing incorrect record or writing with intent to save person from punishment", group: "Obstruction of Justice", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Tampering with official files, inquiry reports, or forensic evidence." },
  { sec: "223", title: "Escape from confinement or custody negligently suffered by public servant", group: "Custody Offences", category: "Administration", wing: "All Wings", punishment: "Simple imprisonment up to 2 years, or fine, or both", fiaNexus: "Negligence leading to the escape of an FIA detainee." },
  { sec: "224", title: "Resistance or obstruction by a person to his lawful apprehension", group: "Custody Offences", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 2 years, or fine, or both", fiaNexus: "Suspect forcibly resisting arrest by an FIA officer." },
  { sec: "225", title: "Resistance or obstruction to lawful apprehension of another person", group: "Custody Offences", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 2 years (up to life if accused faces death)", fiaNexus: "Crowd or armed guards preventing FIA from arresting a suspect." },
  { sec: "225-A", title: "Omission of apprehension, or sufferance of escape, on part of public servant in cases not provided for", group: "Custody Offences", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Deliberate connivance by federal law enforcement." },

  // 245 to 263 (Coins & Government Stamps Counterfeiting)
  { sec: "245", title: "Fraudulently or dishonestly diminishing weight or altering composition of coin", group: "Coin & Currency", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Mutilating or diminishing state currency." },
  { sec: "255", title: "Counterfeiting Government stamp", group: "Govt Stamps", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment for life, or up to 10 years, and fine", fiaNexus: "Forging official judicial/revenue stamps, passport visa stamps, customs seals." },
  { sec: "256", title: "Having possession of instrument or material for counterfeiting Government stamp", group: "Govt Stamps", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Recovering printing dies or printing machinery used for fake stamps." },
  { sec: "257", title: "Making or selling instrument for counterfeiting Government stamp", group: "Govt Stamps", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Commercial manufacturing of counterfeit government stamp machines." },
  { sec: "258", title: "Sale of counterfeit Government stamp", group: "Govt Stamps", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 5 years, and fine", fiaNexus: "Selling forged judicial papers, court fee stamps, or visa stickers." },
  { sec: "259", title: "Having possession of counterfeit Government stamp", group: "Govt Stamps", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, or fine, or both", fiaNexus: "Possessing large quantities of fake federal revenue or postal stamps." },
  { sec: "260", title: "Using as genuine a Government stamp known to be counterfeit", group: "Govt Stamps", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, or fine, or both", fiaNexus: "Affixing fake stamps on property registry, passport, or customs documents." },
  { sec: "261", title: "Effacing writing from substance bearing Government stamp, or removing from document a stamp used for it", group: "Govt Stamps", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Washing and reusing cancelled federal stamps." },
  { sec: "263", title: "Erasure of mark denoting that stamp has been used", group: "Govt Stamps", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Erasing cancellation ink to defraud the Federal Post or Treasury." },

  // 295-A to 298-A (Religious Offences)
  { sec: "295-A", title: "Deliberate and malicious acts intended to outrage religious feelings of any class", group: "Religious Harmony", category: "Cyber / Public Order", wing: "Cyber Crime Wing (CCW)", punishment: "Imprisonment up to 10 years, and fine", fiaNexus: "Online dissemination of blasphemous or sectarian hate speech." },
  { sec: "295-B", title: "Defiling, etc., of Holy Quran", group: "Religious Harmony", category: "Cyber / Public Order", wing: "Cyber Crime Wing (CCW)", punishment: "Imprisonment for life", fiaNexus: "Digital desecration or online blasphemous content targeting the Holy Quran." },
  { sec: "295-C", title: "Use of derogatory remarks, etc., in respect of the Holy Prophet", group: "Religious Harmony", category: "Cyber / Public Order", wing: "Cyber Crime Wing (CCW)", punishment: "Death, and fine", fiaNexus: "Investigated by FIA CCW when committed across social media platforms or international internet networks." },
  { sec: "298", title: "Uttering words, etc., with deliberate intent to wound religious feelings", group: "Religious Harmony", category: "Cyber / Public Order", wing: "Cyber Crime Wing (CCW)", punishment: "Imprisonment up to 1 year, or fine, or both", fiaNexus: "Cyber hate speech and trolling targeting religious sentiments." },
  { sec: "298-A", title: "Use of derogatory remarks, etc., in respect of holy personages", group: "Religious Harmony", category: "Cyber / Public Order", wing: "Cyber Crime Wing (CCW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Online defamation and slander directed at Ahle Bait, Sahaba, and religious personages." },

  // 300 to 337-F (Bodily Offences in Connection with Federal Affairs / against Public Servants)
  { sec: "300", title: "Qatl-e-Amd (Definition of Intentional Murder)", group: "Bodily Offences", category: "Special Penal", wing: "CTW / Anti-Corruption", punishment: "Definition section", fiaNexus: "Murder of federal public servants, diplomats, or cases entrusted by the Federal Government." },
  { sec: "301", title: "Causing death of person other than person whose death was intended", group: "Bodily Offences", category: "Special Penal", wing: "CTW / Special Crimes", punishment: "Governed by Section 302", fiaNexus: "Transferred federal assassination cases." },
  { sec: "302", title: "Punishment of Qatl-e-Amd (Murder)", group: "Bodily Offences", category: "Special Penal", wing: "CTW / Special Crimes", punishment: "Death as Qisas, or Death/Life as Tazir, or up to 25 years under 302(c)", fiaNexus: "Federal high-profile assassinations (e.g. Benazir Bhutto murder case investigated by FIA JIT)." },
  { sec: "324", title: "Attempt to commit Qatl-e-Amd (Attempted Murder)", group: "Bodily Offences", category: "Special Penal", wing: "CTW / Special Crimes", punishment: "Imprisonment up to 10 years (up to 25 years if hurt is caused)", fiaNexus: "Armed assassination attempts against federal ministers, judges, or senior public officers." },
  { sec: "332", title: "Hurts (Definition of physical injury)", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Classification of hurt", fiaNexus: "Physical attacks on federal officials on duty." },
  { sec: "333", title: "Itlaf-i-udw (Dismemberment or loss of limb)", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Qisas or Arsh and imprisonment up to 10 years", fiaNexus: "Grievous injury inflicted on federal officers." },
  { sec: "334", title: "Punishment for Itlaf-i-udw", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Qisas or Arsh and imprisonment up to 10 years", fiaNexus: "Armed resistance causing grievous bodily harm to federal agents." },
  { sec: "335", title: "Itlaf-i-salahiyyat-i-udw (Loss of capacity of an organ)", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Qisas or Arsh and up to 10 years", fiaNexus: "Permanent impairment of federal staff on duty." },
  { sec: "336", title: "Punishment for Itlaf-i-salahiyyat-i-udw", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Qisas or Arsh and up to 10 years", fiaNexus: "Enforcing penal provisions in federal security incidents." },
  { sec: "337", title: "Shajjah (Head and facial injuries)", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Daman/Diyat and imprisonment according to degree", fiaNexus: "Violent clashes during federal raids and seizures." },
  { sec: "337-A", title: "Punishment of Shajjah (Shajjah-i-Khafifah to Jaifah)", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Ranging from fine to 14 years imprisonment", fiaNexus: "Injuries caused to federal immigration or customs officers." },
  { sec: "337-B", title: "Jurh (Body wound)", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Categorization into Jaifah and Ghayr-Jaifah", fiaNexus: "Penal code injury matching." },
  { sec: "337-C", title: "Jaifah (Wound penetrating into body cavity)", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Arsh (1/3rd of Diyat) and up to 10 years", fiaNexus: "Gunshot wounds sustained during FIA anti-human trafficking operations." },
  { sec: "337-D", title: "Punishment for Jaifah", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Arsh (one-third of Diyat) and imprisonment up to 10 years", fiaNexus: "Severe operational clashes." },
  { sec: "337-E", title: "Ghayr-Jaifah (Non-penetrating wounds: Damiyah to Hashimah)", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Daman and imprisonment up to 7 years", fiaNexus: "Injuries sustained by state witnesses." },
  { sec: "337-F", title: "Punishment of Ghayr-Jaifah", group: "Bodily Offences", category: "Special Penal", wing: "Special Crimes", punishment: "Daman and imprisonment from 1 to 7 years", fiaNexus: "Assaults during federal raids." },

  // 342, 348, 353 (Confinement & Deterring Public Servants)
  { sec: "342", title: "Punishment for wrongful confinement", group: "Confinement", category: "Administration", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 1 year, or fine up to Rs. 1,000, or both", fiaNexus: "Illegal detention by federal officials or private torture cells." },
  { sec: "348", title: "Wrongful confinement to extort confession, or compel restoration of property", group: "Confinement", category: "Anti-Corruption", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment up to 3 years, and fine", fiaNexus: "Custodial torture by federal investigators or officials." },
  { sec: "353", title: "Assault or criminal force to deter public servant from discharge of his duty", group: "Public Servant Protection", category: "Administration", wing: "All Wings", punishment: "Imprisonment up to 2 years, or fine, or both", fiaNexus: "Violent resistance against FIA raiding teams and checkpoint staff." },

  // 365-A & 366-B (Kidnapping for Ransom & Foreign Trafficking)
  { sec: "365-A", title: "Kidnapping for abduction for extorting property, ransom, etc.", group: "Kidnapping", category: "Counter-Terrorism", wing: "Counter Terrorism Wing (CTW)", punishment: "Death, or imprisonment for life, and forfeiture of property", fiaNexus: "Trans-provincial and transnational kidnapping syndicates." },
  { sec: "366-B", title: "Importation of girl from foreign country", group: "Human Trafficking", category: "Human Trafficking", wing: "Anti-Human Trafficking (AHTD)", punishment: "Imprisonment up to 10 years, and fine", fiaNexus: "Cross-border sex trafficking of foreign women into Pakistan." },
  { sec: "383", title: "Extortion (Definition)", group: "Extortion", category: "Economic", wing: "Economic / CCW", punishment: "Defined for application in scheduled offences", fiaNexus: "Digital extortion, blackmail, or coercive collection of money." },

  // 402-A to 404 (Hijacking & Misappropriation)
  { sec: "402-A", title: "Hijacking (Definition)", group: "Aviation Security", category: "Counter-Terrorism", wing: "Counter Terrorism Wing (CTW)", punishment: "Definition of seizing control of aircraft", fiaNexus: "Civil aviation security and aircraft piracy." },
  { sec: "402-B", title: "Punishment for Hijacking", group: "Aviation Security", category: "Counter-Terrorism", wing: "Counter Terrorism Wing (CTW)", punishment: "Death, or imprisonment for life, and forfeiture of all property", fiaNexus: "Investigated by FIA at all federal airports." },
  { sec: "402-C", title: "Punishment for harbouring hijackers", group: "Aviation Security", category: "Counter-Terrorism", wing: "Counter Terrorism Wing (CTW)", punishment: "Imprisonment for life, and fine, and forfeiture of property", fiaNexus: "Sheltering aerial hijackers." },
  { sec: "403", title: "Dishonest misappropriation of property", group: "Property Crimes", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 2 years, or fine, or both", fiaNexus: "Misappropriating federal property, treasury notes, or bank assets." },
  { sec: "404", title: "Dishonest misappropriation of property possessed by deceased person at the time of his death", group: "Property Crimes", category: "Economic", wing: "Economic / ACW", punishment: "Imprisonment up to 3 years, and fine (up to 7 years if clerk/servant)", fiaNexus: "Siphoning pension funds or assets of deceased federal pensioners." },

  // 406 to 409 (Criminal Breach of Trust)
  { sec: "406", title: "Punishment for criminal breach of trust", group: "Breach of Trust", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Misappropriation of entrusted commercial/federal properties." },
  { sec: "407", title: "Criminal breach of trust by carrier, wharfinger or warehouse-keeper", group: "Breach of Trust", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Theft/diversion of imported goods at dry ports, sea ports, or Pakistan Railways." },
  { sec: "408", title: "Criminal breach of trust by clerk or servant", group: "Breach of Trust", category: "Economic", wing: "Economic / Anti-Corruption", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Embezzlement by bank tellers, treasury clerks, or autonomous body accountants." },
  { sec: "409", title: "Criminal breach of trust by public servant, or by banker, merchant or agent", group: "Breach of Trust", category: "Anti-Corruption / Banking", wing: "Anti-Corruption Wing (ACW)", punishment: "Imprisonment for life, or up to 10 years, and fine", fiaNexus: "HIGH-VOLUME FIA PROVISION: Embezzlement by federal officers, bank managers, and state enterprise executives." },

  // 411, 418, 419, 420 (Stolen Property & Cheating)
  { sec: "411", title: "Dishonestly receiving stolen property", group: "Stolen Property", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Receiving stolen government vehicles, railway tracks, or looted bank funds." },
  { sec: "418", title: "Cheating with knowledge that wrongful loss may ensue to person whose interest offender is bound to protect", group: "Cheating & Fraud", category: "Economic", wing: "Economic / ACW", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Fiduciary fraud committed against federal trusts and autonomous funds." },
  { sec: "419", title: "Punishment for cheating by personation", group: "Cheating & Fraud", category: "Economic / Cyber", wing: "CCW / Economic", punishment: "Imprisonment up to 7 years, or fine, or both", fiaNexus: "Impersonating an FIA officer, federal minister, or high official." },
  { sec: "420", title: "Cheating and dishonestly inducing delivery of property", group: "Cheating & Fraud", category: "Economic", wing: "Economic / Cyber / AHTD", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "MASSIVE FIA STATUTE: Online investment scams, fake visa rackets, government procurement frauds, and bogus loan schemes." },

  // 435, 436, 440 (Arson & Mischief)
  { sec: "435", title: "Mischief by fire or explosive substance with intent to cause damage to amount of one hundred rupees", group: "Mischief & Arson", category: "State Security", wing: "CTW / Special Crimes", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Burning federal property, railway assets, or post offices." },
  { sec: "436", title: "Mischief by fire or explosive substance with intent to destroy house, etc.", group: "Mischief & Arson", category: "State Security", wing: "CTW / Special Crimes", punishment: "Imprisonment for life, or up to 10 years, and fine", fiaNexus: "Arson attacks targeting federal ministries, courts, or strategic installations." },
  { sec: "440", title: "Mischief committed after preparation made for causing death or hurt", group: "Mischief & Arson", category: "State Security", wing: "CTW / Special Crimes", punishment: "Imprisonment up to 5 years, and fine", fiaNexus: "Organized sabotage of federal infrastructure." },

  // 462A to 462F (Gas Theft & Tampering)
  { sec: "462A", title: "Gas Theft: Definitions of transmission and distribution lines", group: "Gas Energy Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Statutory definitions", fiaNexus: "Gas utility theft across Sui Northern (SNGPL) and Sui Southern (SSGCL) networks." },
  { sec: "462B", title: "Tampering with gas transmission line", group: "Gas Energy Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Rigorous imprisonment up to 14 years and fine up to Rs. 10,000,000", fiaNexus: "Major industrial taps into high-pressure national gas pipelines." },
  { sec: "462C", title: "Tampering with gas distribution line", group: "Gas Energy Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Rigorous imprisonment up to 10 years and fine up to Rs. 3,000,000", fiaNexus: "Commercial and CNG station underground gas line bypassing." },
  { sec: "462D", title: "Tampering with gas meter by domestic consumer", group: "Gas Energy Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 6 months, or fine up to Rs. 100,000, or both", fiaNexus: "Domestic reversing of gas meter counters." },
  { sec: "462E", title: "Tampering with gas meter by person other than domestic consumer (Industrial/Commercial)", group: "Gas Energy Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 5 years, or fine up to Rs. 5,000,000, or both", fiaNexus: "Industrial boiler and ceramic factory meter tampering." },
  { sec: "462F", title: "Damaging or destroying the transmission or distribution line", group: "Gas Energy Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 14 years and fine", fiaNexus: "Vandalism and physical destruction of national gas pipelines." },

  // 462H to 462M (Electricity Theft & Power Tampering)
  { sec: "462H", title: "Electricity Theft: Definitions of transmission and distribution systems", group: "Electricity Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Statutory definitions", fiaNexus: "WAPDA, PEPCO, and federal DISCO electricity theft." },
  { sec: "462I", title: "Tampering with transmission line of electricity", group: "Electricity Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Rigorous imprisonment up to 7 years and fine up to Rs. 3,000,000", fiaNexus: "Tapping high-voltage national grid electricity lines." },
  { sec: "462J", title: "Tampering with distribution lines of electricity", group: "Electricity Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Rigorous imprisonment up to 3 years and fine up to Rs. 1,000,000", fiaNexus: "Illegal industrial hook lines (Kunda) from transformers." },
  { sec: "462K", title: "Tampering with electricity meter (Industrial/Commercial)", group: "Electricity Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 3 years and fine up to Rs. 500,000", fiaNexus: "Steel mill and commercial ice factory meter slowing devices." },
  { sec: "462L", title: "Tampering with electricity meter (Domestic)", group: "Electricity Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 2 years, or fine up to Rs. 100,000", fiaNexus: "Domestic electronic meter tampering." },
  { sec: "462M", title: "Aiding and abetting energy theft", group: "Electricity Theft", category: "Energy Theft", wing: "Economic Crime Wing (ECW)", punishment: "Same as main offence", fiaNexus: "WAPDA / DISCO linemen and SDOs colluding with power thieves." },

  // 466 to 476 (Forgery & Counterfeiting Official Records)
  { sec: "466", title: "Forgery of record of Court or of public register, etc.", group: "Forgery", category: "White Collar", wing: "Anti-Corruption / ECW", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Forging official federal revenue records, birth registers, or court decrees." },
  { sec: "467", title: "Forgery of valuable security, will, etc.", group: "Forgery", category: "White Collar", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment for life, or up to 10 years, and fine", fiaNexus: "Forging bank guarantees, treasury bills, prize bonds, letters of credit." },
  { sec: "468", title: "Forgery for purpose of cheating", group: "Forgery", category: "White Collar", wing: "All Wings", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Forging educational degrees for federal recruitment, fake appointment letters." },
  { sec: "471", title: "Using as genuine a forged document", group: "Forgery", category: "White Collar", wing: "All Wings", punishment: "Punished in the same manner as if forged", fiaNexus: "Presenting fake bank drafts, counterfeit visas, or altered CNICs to federal bodies." },
  { sec: "472", title: "Making or possessing counterfeit seal, etc., with intent to commit forgery punishable under section 467", group: "Forgery", category: "White Collar", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment for life, or up to 7 years, and fine", fiaNexus: "Fabricating brass seals of Federal Ministries or State Bank." },
  { sec: "473", title: "Making or possessing counterfeit seal, etc., with intent to commit forgery punishable otherwise", group: "Forgery", category: "White Collar", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Possession of fake embassy stamps and visa embossing dies." },
  { sec: "474", title: "Having possession of document described in sec 466 or 467 knowing it to be forged", group: "Forgery", category: "White Collar", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment for life, or up to 7 years, and fine", fiaNexus: "Possessing folders of forged federal securities or fake identity cards." },
  { sec: "475", title: "Counterfeiting device or mark used for authenticating documents described in sec 467", group: "Forgery", category: "White Collar", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment for life, or up to 7 years, and fine", fiaNexus: "Replicating official holograms and watermark rolls." },
  { sec: "476", title: "Counterfeiting device or mark used for authenticating documents other than in sec 467", group: "Forgery", category: "White Collar", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Counterfeiting federal inspection stamps and passport security threads." },

  // 477-A to 489-E (Falsification of Accounts & Currency Counterfeiting)
  { sec: "477-A", title: "Falsification of accounts", group: "Banking Fraud", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, or fine, or both", fiaNexus: "Bank managers or corporation accountants cooking financial books and ledger balances." },
  { sec: "489-A", title: "Counterfeiting currency-notes or bank-notes", group: "Currency Counterfeiting", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment for life, or up to 10 years, and fine", fiaNexus: "Operating illegal printing presses printing counterfeit Rs. 5000 / Rs. 1000 notes." },
  { sec: "489-B", title: "Using as genuine, forged or counterfeit currency-notes or bank-notes", group: "Currency Counterfeiting", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment for life, or up to 10 years, and fine", fiaNexus: "Injecting counterfeit banknotes into commercial banks or forex markets." },
  { sec: "489-C", title: "Possession of forged or counterfeit currency-notes or bank-notes", group: "Currency Counterfeiting", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 7 years, or fine, or both", fiaNexus: "Recovering stacks of fake banknotes from money changers or couriers." },
  { sec: "489-D", title: "Making or possessing instruments or materials for counterfeiting currency-notes", group: "Currency Counterfeiting", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment for life, or up to 10 years, and fine", fiaNexus: "Seizing specialized currency paper, magnetic ink, and printing blocks." },
  { sec: "489-E", title: "Making or using documents resembling currency-notes", group: "Currency Counterfeiting", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Fine up to Rs. 100", fiaNexus: "Deceptive commercial vouchers resembling state legal tender." },
  { sec: "489-F", title: "Dishonestly issuing a cheque for repayment of loan or fulfilment of an obligation", group: "Financial Crimes", category: "Economic", wing: "Economic Crime Wing (ECW)", punishment: "Imprisonment up to 3 years, or fine, or both", fiaNexus: "Dishonoured cheques issued in connection with federal loans, banking dues, or transactions investigated by FIA." },

  // 499 to 507 (Defamation, Public Mischief & Intimidation)
  { sec: "499", title: "Defamation (Definition)", group: "Defamation", category: "Cyber / General", wing: "Cyber Crime Wing (CCW)", punishment: "Defined for criminal liability", fiaNexus: "Online defamation and slander campaigns investigated under PECA/PPC." },
  { sec: "500", title: "Punishment for defamation", group: "Defamation", category: "Cyber / General", wing: "Cyber Crime Wing (CCW)", punishment: "Simple imprisonment up to 2 years, or fine, or both", fiaNexus: "Defamation committed through digital communication tools." },
  { sec: "501", title: "Printing or engraving matter known to be defamatory", group: "Defamation", category: "Cyber / General", wing: "Cyber Crime Wing (CCW)", punishment: "Simple imprisonment up to 2 years, or fine, or both", fiaNexus: "Publishing defamatory digital brochures and online articles." },
  { sec: "502", title: "Sale of printed or engraved substance containing defamatory matter", group: "Defamation", category: "Cyber / General", wing: "Cyber Crime Wing (CCW)", punishment: "Simple imprisonment up to 2 years, or fine, or both", fiaNexus: "Commercial marketing of libellous publications." },
  { sec: "505", title: "Statements conducing to public mischief", group: "Public Order", category: "Cyber / CTW", wing: "Cyber Crime Wing (CCW)", punishment: "Imprisonment up to 7 years, and fine", fiaNexus: "Spreading fake news, military mutiny rumors, or digital panic online." },
  { sec: "506", title: "Punishment for criminal intimidation", group: "Intimidation", category: "Cyber / General", wing: "Cyber Crime Wing (CCW)", punishment: "Imprisonment up to 2 years, or fine, or both (up to 7 years if death threat)", fiaNexus: "Threatening public officers or online extortion targets." },
  { sec: "507", title: "Criminal intimidation by an anonymous communication", group: "Intimidation", category: "Cyber / General", wing: "Cyber Crime Wing (CCW)", punishment: "Imprisonment up to 2 years (in addition to penalty under 506)", fiaNexus: "Anonymous death threats sent via VoIP, fake social accounts, or encrypted dark web." }
];

// 3. Define the comprehensive Investigation Explainers (Requested by the user)
const investigationExplainers = [
  {
    topicId: "exp-bribery",
    title: "Bribery & Illegal Gratification (PPC 161, 165 & PCA Sec 5)",
    sectionsCovered: "PPC Sections 161, 165, 165-A & Section 5 Prevention of Corruption Act 1947",
    wing: "Anti-Corruption Wing (ACW)",
    nexus: "Applies exclusively to Public Servants (defined in Sec 21 PPC & Sec 2(e) FIA Act) belonging to Federal Ministries, attached departments, autonomous bodies (NADRA, CDA, WAPDA, OGDCL, SNGPL, Railways, Post Office) and private bribe-givers.",
    actusReus: "Demand, negotiation, and physical or electronic acceptance of any money, gift, or pecuniary favor other than legal government remuneration.",
    mensRea: "Corrupt intention to grant official favor, overlook illegalities, or expedite official acts.",
    investigationSteps: [
      { step: "Step 1: Written Complaint & Preliminary Inquiry", detail: "Complainant submits written application supported by phone call recordings, WhatsApp chats, or demand memos. Deputy Director ACW authorizes registration of Inquiry." },
      { step: "Step 2: Magistrate Deputation for Trap Raid", detail: "Investigator moves application to Senior Civil Judge / Judicial Magistrate 1st Class to supervise a 'Trap Raid' under Section 5-A PCA 1947." },
      { step: "Step 3: Chemical Treatment of Marked Notes", detail: "Judicial Magistrate notes serial numbers of currency notes, coats them with Phenolphthalein powder, and hands them to complainant with instructions to hand over upon demand." },
      { step: "Step 4: Red-Handed Apprehension & Chemical Test", detail: "Upon pre-arranged signal, Magistrate and FIA team raid office. Suspect's hands and pocket lining are washed with Sodium Carbonate solution; turns pink if marked notes were touched. Magistrate drafts formal Recovery Memo on spot." },
      { step: "Step 5: FIR Registration & Warrantless Arrest", detail: "FIR registered under Section 161 PPC & Sec 5(2) PCA 1947. Accused arrested under Section 5(3) FIA Act." },
      { step: "Step 6: Forensic Voice Matching & Bank Trail", detail: "Audio recordings sent to FIA Digital Forensics Laboratory for Voice Spectrography analysis. Assets investigated for disproportionate wealth under Sec 5(1)(e) PCA." }
    ],
    trialForum: "Special Court (Central) established under the Criminal Law Amendment Act, 1958.",
    prosecutionTip: "Presumption of guilt applies under Section 4 of PCA 1947 once receipt of marked money is proved by prosecution!"
  },
  {
    topicId: "exp-peca-fraud",
    title: "Electronic Financial Fraud & Hacking (PECA Sec 14, 16 & PPC 420)",
    sectionsCovered: "PECA Sections 3, 5, 13, 14, 16 read with PPC Sections 419, 420",
    wing: "Cyber Crime Wing (CCW)",
    nexus: "Offences committed using information systems, internet networks, mobile banking apps, ATM skimmers, or spoofed bank helplines.",
    actusReus: "Gaining unauthorized access, transmitting phishing links, cloning SIMs, or deceiving citizens into disclosing OTPs/passwords to transfer money.",
    mensRea: "Dishonest intent to cause wrongful loss to victim and wrongful pecuniary gain to fraudster.",
    investigationSteps: [
      { step: "Step 1: Complaint Intake via FIA Cyber Crime Portal", detail: "Victim registers complaint with transaction IDs, spoofed phone numbers, and bank account details where funds were transferred." },
      { step: "Step 2: Immediate Bank Freezing under Section 5(5) FIA Act", detail: "Investigating Officer issues written freeze order to beneficiary banks to halt withdrawal of stolen funds before accounts are emptied." },
      { step: "Step 3: IP Address & Traffic Data Preservation (Sec 29 PECA)", detail: "Formal notice issued to telecom providers and ISPs under Section 29 PECA 2016 to preserve and furnish IP logs, IMEI tracking, and Tower CDRs." },
      { step: "Step 4: Digital Forensic Imaging (E01 / DD formats)", detail: "Raiding team seizes mobile phones, laptops, and spoofing devices under Section 30 PECA. Devices placed in Faraday bags. Forensic copy generated with MD5/SHA-256 hash matching." },
      { step: "Step 5: BVS Franchise Verification with PTA/NADRA", detail: "If illegal SIMs were used, franchise biometric verification logs (BVS) are retrieved from NADRA to arrest the franchise agent who authorized illegal activation." }
    ],
    trialForum: "Special Court Central (designated under Section 32 PECA 2016).",
    prosecutionTip: "Always ensure strict chain-of-custody for digital devices; un-hashed digital copies are inadmissible under Section 35 PECA and Article 164 QSO."
  },
  {
    topicId: "exp-human-trafficking",
    title: "Human Trafficking & Visa Fraud (Emigration Ord Sec 18, 19 & PSMA 2018)",
    sectionsCovered: "Emigration Ordinance 1979 Sections 17, 18, 19; PSMA 2018; Passport Act Sec 6",
    wing: "Anti-Human Trafficking & Smuggling Directorate (AHTD)",
    nexus: "Operating unauthorized overseas employment agencies, collecting money on false promises of foreign jobs, forging passport visas, or organizing irregular border crossings (Dunking / Boat syndicates).",
    actusReus: "Fraudulent inducement, receipt of money without OEP license, production of counterfeit visas, or transporting migrants across clandestine borders.",
    mensRea: "Intent to exploit migrants for financial extortion or knowing that visa/permit is counterfeit.",
    investigationSteps: [
      { step: "Step 1: Verification with Protectorate of Emigrants", detail: "Investigator verifies whether travel agency holds a valid Overseas Employment Promoter (OEP) license issued by Ministry of Overseas Pakistanis." },
      { step: "Step 2: Raid on Agency & Seizure of Travel Documents", detail: "AHTD team raids premises, recovers victims' original passports, fake embassy stamp dies, and cash receipt books." },
      { step: "Step 3: Forensic Analysis of Visa Stickers (Passport Act Sec 6)", detail: "Passports sent to FIA Immigration Document Examination Laboratory (IDEL) to verify UV security fibers, hologram authenticity, and ink composition." },
      { step: "Step 4: Statements under Section 164 CrPC", detail: "Victims' statements recorded before Judicial Magistrate immediately to prevent witness tampering or coerced compromise." },
      { step: "Step 5: Financial Trail & Hawala Tracking", detail: "Investigate accounts of human smugglers under AMLA 2010. Issue Red Notices through Interpol (NCB) for foreign-based handlers." }
    ],
    trialForum: "Special Court of Emigration presided over by District & Sessions Judge (Section 22 Emigration Ordinance).",
    prosecutionTip: "Section 18 Emigration Ordinance carries 5 to 14 years rigorous imprisonment. Do not allow regular civil compromise; it is an offence against the State!"
  },
  {
    topicId: "exp-gas-theft",
    title: "Industrial Energy Theft & Meter Tampering (PPC 462A-462M & OGRA)",
    sectionsCovered: "PPC Sections 462A to 462F (Gas), 462H to 462M (Electricity), OGRA Ordinance Sec 25-29",
    wing: "Economic Crime Wing (ECW)",
    nexus: "Illegal tapping of national gas transmission pipelines, electronic meter tampering by industrial consumers (textile mills, CNG stations, steel rerolling), causing billions in losses to federal exchequer.",
    actusReus: "Physical drilling of pipeline bypass, electronic counter reversal, tampering with volume corrector (EVC), or bypassing meter valves.",
    mensRea: "Intentional abstraction of energy without payment.",
    investigationSteps: [
      { step: "Step 1: Discrepancy Detection & Data Logging", detail: "Utility company (SNGPL/SSGCL/DISCO) detects massive pressure and consumption drop between main transmission node and consumer terminal." },
      { step: "Step 2: Surprise Joint Raid with Measurement Engineers", detail: "FIA ECW raiding party inspects site with utility technical team, gas detectors, and ground-penetrating radar." },
      { step: "Step 3: Physical Excavation & Video Recording", detail: "Illegal bypass pipe excavated. Entire unearthing process video-recorded as substantive evidence. Disconnected and sealed on spot." },
      { step: "Step 4: Seizure of EVC Devices & Tampered Meters", detail: "Electronic Volume Correctors (EVC) and flow computers seized and sent to PCSIR / ISO-certified laboratory for forensic memory dump." },
      { step: "Step 5: Calculation of Revenue Loss & Challan", detail: "Engineers calculate stolen gas/power volume over statutory period. Challan submitted to Special Gas Utility Court." }
    ],
    trialForum: "Gas Utility Court (established under Gas (Theft Control and Recovery) Act, 2016).",
    prosecutionTip: "PPC Section 462B (Transmission line tampering) carries up to 14 years rigorous imprisonment and fine up to Rs. 10 Million!"
  },
  {
    topicId: "exp-currency-forgery",
    title: "Counterfeit Currency Rackets (PPC 489-A to 489-E)",
    sectionsCovered: "PPC Sections 489-A, 489-B, 489-C, 489-D, 489-E",
    wing: "Economic Crime Wing (ECW)",
    nexus: "Manufacturing, possessing, or trafficking counterfeit Pakistani legal tender notes (Rs. 5000, 1000, 500) into financial circulation.",
    actusReus: "Printing fake currency, operating printing presses, or possessing forged notes with knowledge.",
    mensRea: "Knowledge or reason to believe that currency is counterfeit, with intent to pass off as genuine.",
    investigationSteps: [
      { step: "Step 1: Source Intelligence & Decoy Buying", detail: "Undercover FIA operative negotiates purchase of fake currency from syndicate at discounted rate (e.g. Rs. 30,000 genuine for Rs. 100,000 fake)." },
      { step: "Step 2: Raid on Printing Facility", detail: "Simultaneous raid on hideout. Seizure of offset printing machinery, screen printing frames, ultraviolet inks, and watermark rollers under Sec 489-D." },
      { step: "Step 3: State Bank Pakistan Security Printing Corporation (PSPC) Examination", detail: "Seized notes sent to Chief Chemist of Pakistan Security Printing Corporation (PSPC) Karachi to establish non-genuine paper, magnetic strip, and intaglio ink absence." },
      { step: "Step 4: Interrogation of Distribution Ring", detail: "Map out the distribution network across bus terminals, cattle markets, and exchange dealers." }
    ],
    trialForum: "Court of Session / Special Court Central.",
    prosecutionTip: "Possession under 489-C requires proving 'intent to use as genuine'. Under 489-D (possessing machinery), mere possession of dies/plates attracts life imprisonment!"
  }
];

// 4. Combine into final database object
const fullData = {
  metadata: {
    title: "Federal Investigation Agency (FIA) Laws & Scheduled Offences Explorer",
    authority: "FIA Act, 1974 (Act VIII of 1975) & Scheduled Special Enactments",
    gazetteDate: "17th January, 1975 (Gazette of Pakistan, Extra-ordinary, Part-I)",
    updatedThrough: "S.R.O. 1620(I)/2026 (OGRA Ordinance inclusion) & S.R.O. 82(I)/2026",
    totalScheduledPpcSections: ppcScheduledSections.length,
    totalScheduledSpecialActs: existingModule.fiaScheduleSpecialActs.length,
    totalWingsProfiled: existingModule.fiaWings.length,
    totalCaseScenarios: existingModule.practicalScenarios.length,
    totalQuizQuestions: existingModule.quiz.length
  },
  kpis: {
    coreLawsCount: `${existingModule.coreLaws.length} Core Statutes`,
    coreLawsDesc: "FIA Act 1974, PECA 2016, AMLA 2010, Emigration 1979, PCA 1947 & Passports",
    scheduledActsCount: `${existingModule.fiaScheduleSpecialActs.length} Scheduled Acts`,
    scheduledActsDesc: "Complete official Schedule from SRO 1975 to 2026 Gazette amendments",
    ppcOffencesCount: `${ppcScheduledSections.length} PPC Sections`,
    ppcOffencesDesc: "All 118 scheduled Penal Code sections triable by FIA Special Courts",
    wingsCount: `${existingModule.fiaWings.length} Operational Wings`,
    wingsDesc: "Anti-Corruption, Cyber Crime, Human Trafficking, Economic, CTW, Immigration & Interpol"
  },
  coreLaws: existingModule.coreLaws,
  fiaScheduleSpecialActs: existingModule.fiaScheduleSpecialActs,
  ppcScheduledSections: ppcScheduledSections,
  fiaWings: existingModule.fiaWings,
  investigationExplainers: investigationExplainers,
  practicalScenarios: existingModule.practicalScenarios,
  quiz: existingModule.quiz
};

const fileHeader = `/**
 * Federal Investigation Agency (FIA) Laws & Scheduled Offences Explorer
 * Comprehensive database covering FIA Act 1974, PECA 2016, AMLA 2010, Emigration 1979, PCA 1947, 
 * all 37 Scheduled Special Acts, and all 118 Scheduled PPC Sections with full investigative guidelines.
 * Formulated from the official Federal Investigation Agency statutory repository (SRO amendments through 2026).
 */

const FIA_LAWS_DATA = `;

const fileFooter = `;

if (typeof window !== 'undefined') {
  window.FIA_LAWS_DATA = FIA_LAWS_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FIA_LAWS_DATA;
}
`;

fs.writeFileSync(targetJsPath, fileHeader + JSON.stringify(fullData, null, 2) + fileFooter, 'utf-8');
console.log(`Successfully generated updated frontend/js/data_fia_laws.js with ${ppcScheduledSections.length} PPC sections and ${investigationExplainers.length} detailed investigation explainers!`);
