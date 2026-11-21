/**
 * Shared Core Fallback Question Banks (Lazy-Loaded on Demand)
 * Deduplicated from app.js and quiz.js
 */
(function (global) {
const CIVIL_SERVANTS_ACT_MCQS = [
  {
    _id: "csa_1",
    questionText: "Under Section 4 of the Civil Servants Act, 1973, every civil servant holds office during the pleasure of:",
    options: {
      A: "The Prime Minister",
      B: "The President",
      C: "The Federal Public Service Commission",
      D: "The Chief Justice of Pakistan"
    },
    correctAnswer: "B",
    explanation: "According to Section 4 of the Civil Servants Act, 1973, every civil servant holds office during the pleasure of the President.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Terms & Conditions",
    difficulty: "Easy"
  },
  {
    _id: "csa_2",
    questionText: "Which of the following is EXCLUDED from the definition of a 'civil servant' under Section 2(1)(b) of the Civil Servants Act, 1973?",
    options: {
      A: "A member of an All-Pakistan Service",
      B: "A person holding a civil post in connection with affairs of the Federation",
      C: "A person who is on deputation to the Federation from any Province",
      D: "A post connected with defence"
    },
    correctAnswer: "C",
    explanation: "Under Section 2(1)(b)(i), a person on deputation to the Federation from any Province or other authority is explicitly excluded from being a civil servant.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Definitions",
    difficulty: "Medium"
  },
  {
    _id: "csa_3",
    questionText: "According to Section 13(1)(ii) of the Civil Servants Act, 1973, a civil servant shall retire from service on completion of the:",
    options: {
      A: "58th year of age",
      B: "60th year of age",
      C: "62nd year of age",
      D: "65th year of age"
    },
    correctAnswer: "B",
    explanation: "Under Section 13(1)(ii), a civil servant retires from service on the completion of the 60th year of his/her age.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Termination & Retirement",
    difficulty: "Easy"
  },
  {
    _id: "csa_4",
    questionText: "Under Section 13(1)(i), a civil servant may be retired in public interest after completing how many years of qualifying service?",
    options: {
      A: "15 years",
      B: "20 years",
      C: "25 years",
      D: "30 years"
    },
    correctAnswer: "B",
    explanation: "As per Section 13(1)(i) (amended), a civil servant may retire or be directed to retire after completing twenty (20) years of service qualifying for pension.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Termination & Retirement",
    difficulty: "Medium"
  },
  {
    _id: "csa_5",
    questionText: "According to Section 2(1)(a) of the Civil Servants Act, 1973, an 'ad hoc appointment' means:",
    options: {
      A: "An appointment made for a permanent post without probation",
      B: "Appointment of a qualified person made otherwise than in accordance with prescribed method pending regular recruitment",
      C: "An appointment made by direct transfer from a Provincial government",
      D: "An appointment made on contract for a fixed period of 5 years"
    },
    correctAnswer: "B",
    explanation: "Section 2(1)(a) defines ad hoc appointment as appointment of a duly qualified person made otherwise than in accordance with the prescribed method of recruitment, pending recruitment.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Definitions",
    difficulty: "Medium"
  },
  {
    _id: "csa_6",
    questionText: "Under Section 9(3) of the Act, promotion to posts in Basic Pay Scale (BPS) 20 and 21 shall be made on the recommendations of a Selection Board headed by:",
    options: {
      A: "The Federal Law Minister",
      B: "The Cabinet Secretary",
      C: "The Chairman, Federal Public Service Commission (FPSC)",
      D: "The Secretary Establishment Division"
    },
    correctAnswer: "C",
    explanation: "Under Section 9(3), promotion to posts in BPS 20 and 21 is made on recommendations of a Selection Board headed by the Chairman, FPSC.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Promotion & Seniority",
    difficulty: "Hard"
  },
  {
    _id: "csa_7",
    questionText: "What notice period (or pay in lieu thereof) is required for terminating a civil servant in temporary employment or ad hoc appointment under Section 11(3)?",
    options: {
      A: "7 days",
      B: "14 days",
      C: "30 days",
      D: "60 days"
    },
    correctAnswer: "B",
    explanation: "Section 11(3) specifies that temporary or ad hoc civil servants are liable to termination on fourteen (14) days' notice or pay in lieu thereof.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Termination & Retirement",
    difficulty: "Medium"
  },
  {
    _id: "csa_8",
    questionText: "Under Section 9(2)(b) of the Act, promotion to a non-selection post is made on the basis of:",
    options: {
      A: "Pure selection on merit",
      B: "Seniority-cum-fitness",
      C: "Written competitive examination only",
      D: "Length of service only"
    },
    correctAnswer: "B",
    explanation: "Section 9(2)(b) stipulates that non-selection posts are filled by promotion on the basis of seniority-cum-fitness.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Promotion & Seniority",
    difficulty: "Easy"
  },
  {
    _id: "csa_9",
    questionText: "Under Section 22(1) of the Act, an appeal or representation regarding terms and conditions of service must be made within how many days?",
    options: {
      A: "15 days",
      B: "30 days",
      C: "45 days",
      D: "60 days"
    },
    correctAnswer: "B",
    explanation: "Section 22(1) & (2) prescribe a 30-day period from the date of the order to prefer an appeal or representation.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Terms & Conditions",
    difficulty: "Medium"
  },
  {
    _id: "csa_10",
    questionText: "Under Section 15A of the Civil Servants Act, 1973, civil servants of which grade and above are required to digitally file declarations of assets with FBR?",
    options: {
      A: "BS-16 and above",
      B: "BS-17 and above",
      C: "BS-18 and above",
      D: "BS-20 and above"
    },
    correctAnswer: "B",
    explanation: "Section 15A requires civil servants of BS-17 and above to digitally file declarations of assets (including spouse and dependent children) with the FBR.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Terms & Conditions",
    difficulty: "Hard"
  },
  {
    _id: "csa_11",
    questionText: "According to Section 10 of the Civil Servants Act, 1973, a civil servant is liable to serve:",
    options: {
      A: "Only within their domicile province",
      B: "Anywhere within or outside Pakistan",
      C: "Only in Federal Secretariat Islamabad",
      D: "Only within Pakistan"
    },
    correctAnswer: "B",
    explanation: "Section 10 states that every civil servant shall be liable to serve anywhere within or outside Pakistan in any equivalent or higher post.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Terms & Conditions",
    difficulty: "Easy"
  },
  {
    _id: "csa_12",
    questionText: "Under Section 14(2), if a retired civil servant seeks private employment within how many years of retirement, prior approval must be obtained?",
    options: {
      A: "1 year",
      B: "2 years",
      C: "3 years",
      D: "5 years"
    },
    correctAnswer: "B",
    explanation: "Section 14(2) proviso specifies that if employment is sought within two (2) years of retirement, prior approval of the prescribed authority is mandatory.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Termination & Retirement",
    difficulty: "Medium"
  },
  {
    _id: "csa_13",
    questionText: "Under Section 7(3) of the Act, confirmation is NOT permissible against:",
    options: {
      A: "A selection post",
      B: "A permanent post",
      C: "A temporary post",
      D: "A post in BPS-17"
    },
    correctAnswer: "C",
    explanation: "Section 7(3) explicitly states: 'There shall be no confirmation against any temporary post.'",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Appointments & Probation",
    difficulty: "Medium"
  },
  {
    _id: "csa_14",
    questionText: "Which section of the Civil Servants Act, 1973 empowers the President or authorized person to make rules for carrying out the purposes of the Act?",
    options: {
      A: "Section 20",
      B: "Section 23",
      C: "Section 25",
      D: "Section 26"
    },
    correctAnswer: "C",
    explanation: "Section 25(1) states that the President, or any person authorized by the President, may make rules necessary or expedient for carrying out the purposes of the Act.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Definitions",
    difficulty: "Hard"
  },
  {
    _id: "csa_15",
    questionText: "When a post in a cadre or service is abolished, which civil servant's service is ordinarily terminated first under Section 11(2)?",
    options: {
      A: "The most senior civil servant",
      B: "The civil servant with lowest qualifications",
      C: "The most junior civil servant in that cadre/service",
      D: "The civil servant on deputation"
    },
    correctAnswer: "C",
    explanation: "Section 11(2) mandates that upon abolition of posts, the person whose services are terminated shall ordinarily be the most junior in such cadre or service.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Termination & Retirement",
    difficulty: "Medium"
  },
  {
    _id: "csa_16",
    questionText: "Under Section 12(2), no civil servant shall be dismissed, removed, or reduced in rank by an authority:",
    options: {
      A: "Subordinate to that by which he was appointed",
      B: "Superior to the appointing authority",
      C: "Outside the Ministry of Law",
      D: "Other than the FPSC Chairman"
    },
    correctAnswer: "A",
    explanation: "Section 12(2) protects civil servants by providing that no civil servant shall be dismissed, removed, or reduced in rank by an authority subordinate to that by which he was appointed.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Termination & Retirement",
    difficulty: "Hard"
  },
  {
    _id: "csa_17",
    questionText: "Under Section 19(4), if determination of pension or gratuity is delayed beyond how long from retirement/death, provisional anticipatory pension shall be paid?",
    options: {
      A: "15 days",
      B: "1 month",
      C: "2 months",
      D: "3 months"
    },
    correctAnswer: "B",
    explanation: "Section 19(4) mandates that if pension determination is delayed beyond one month of retirement or death, anticipatory pension shall be paid provisionally.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Terms & Conditions",
    difficulty: "Medium"
  },
  {
    _id: "csa_18",
    questionText: "Under Section 10A of the Act, a civil servant requires prior permission of which authority to serve in an international organization?",
    options: {
      A: "Provincial Chief Minister",
      B: "Federal Government",
      C: "Supreme Court of Pakistan",
      D: "Senate Standing Committee"
    },
    correctAnswer: "B",
    explanation: "Section 10A stipulates that no civil servant shall serve in an international organization without prior permission of the Federal Government.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Terms & Conditions",
    difficulty: "Medium"
  },
  {
    _id: "csa_19",
    questionText: "Under Section 6(3)(b), if a civil servant appointed by promotion fails to complete probation satisfactorily, he/she shall be:",
    options: {
      A: "Dismissed immediately",
      B: "Reverted to the former post against which he holds a lien",
      C: "Sent on compulsory leave for 1 year",
      D: "Demoted two grades below"
    },
    correctAnswer: "B",
    explanation: "Section 6(3)(b) states that a promoted civil servant failing probation shall be reverted to the post from which promoted and against which he holds a lien.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Appointments & Probation",
    difficulty: "Hard"
  },
  {
    _id: "csa_20",
    questionText: "Under Section 23B of the Act, jurisdiction to grant injunctions against orders made under the Act is barred for:",
    options: {
      A: "Any Court",
      B: "Federal Ombudsman only",
      C: "Service Tribunals only",
      D: "Departmental Appeals Committee only"
    },
    correctAnswer: "A",
    explanation: "Section 23B explicitly bars any Court from calling into question or granting injunctions regarding decisions/proceedings taken under the Act or rules.",
    category: { _id: "cat_csa", name: "Civil Servants Act, 1973" },
    subCategory: "Terms & Conditions",
    difficulty: "Hard"
  }
];

const CURRENT_AFFAIRS_2026_MCQS = [
  {
    "_id": "ca_2026_1",
    "questionText": "Which three nations are jointly hosting the 2026 FIFA World Cup, the first edition to feature 48 teams?",
    "options": {
      "A": "USA, Mexico, and Canada",
      "B": "Spain, Portugal, and Morocco",
      "C": "Argentina, Uruguay, and Paraguay",
      "D": "Australia, New Zealand, and Indonesia"
    },
    "correctAnswer": "A",
    "explanation": "The 2026 FIFA World Cup is hosted jointly by 16 cities across the United States, Canada, and Mexico, expanding the competition to 48 teams.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Sports Updates",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_2",
    "questionText": "Pakistan was overwhelmingly elected by the UN General Assembly to serve as a non-permanent member of the United Nations Security Council (UNSC) for which term?",
    "options": {
      "A": "2024–2025",
      "B": "2025–2026",
      "C": "2026–2027",
      "D": "2027–2028"
    },
    "correctAnswer": "B",
    "explanation": "Pakistan secured 182 votes in the UN General Assembly to win a two-year seat on the UN Security Council for the 2025–2026 term.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_3",
    "questionText": "The XXV Olympic Winter Games in February 2026 are scheduled to be hosted by which Italian host cities?",
    "options": {
      "A": "Rome and Naples",
      "B": "Turin and Genoa",
      "C": "Milan and Cortina d'Ampezzo",
      "D": "Florence and Venice"
    },
    "correctAnswer": "C",
    "explanation": "The 2026 Winter Olympic Games are officially hosted by Milan and Cortina d'Ampezzo in northern Italy.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Sports Updates",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_4",
    "questionText": "Which two countries are the official co-hosts of the 2026 ICC Men's T20 Cricket World Cup?",
    "options": {
      "A": "Australia and New Zealand",
      "B": "India and Sri Lanka",
      "C": "England and Ireland",
      "D": "South Africa and Zimbabwe"
    },
    "correctAnswer": "B",
    "explanation": "India and Sri Lanka are scheduled to co-host the 2026 ICC Men's T20 World Cup, featuring 20 international teams.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Sports Updates",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_5",
    "questionText": "What is the landmark mission profile of NASA's Artemis II lunar mission scheduled for 2025–2026?",
    "options": {
      "A": "First uncrewed lunar rover landing",
      "B": "First crewed lunar flyby test of the Orion spacecraft since 1972",
      "C": "Permanent establishment of a nuclear lunar base",
      "D": "Mining helium-3 deposits at the lunar south pole"
    },
    "correctAnswer": "B",
    "explanation": "Artemis II is NASA's first crewed mission of the Space Launch System (SLS) and Orion capsule, carrying four astronauts on a lunar flyby.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_6",
    "questionText": "Following the historic expansion of BRICS (adding Iran, UAE, Egypt, and Ethiopia), which country assumes the rotating BRICS presidency in 2026?",
    "options": {
      "A": "India",
      "B": "Russia",
      "C": "China",
      "D": "Brazil"
    },
    "correctAnswer": "A",
    "explanation": "India holds the rotating presidency of the expanded BRICS bloc for the year 2026, following Brazil's presidency in 2025.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_7",
    "questionText": "Which city in the Brazilian Amazon was designated to host the landmark COP30 UN Climate Change Conference?",
    "options": {
      "A": "Rio de Janeiro",
      "B": "São Paulo",
      "C": "Belém",
      "D": "Brasília"
    },
    "correctAnswer": "C",
    "explanation": "Belém, the capital of the Amazonian state of Pará in Brazil, was chosen to host COP30, highlighting global tropical rainforest conservation.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_8",
    "questionText": "Which comprehensive regulatory framework entered full phased enforcement across Europe by 2026, categorizing AI applications by risk?",
    "options": {
      "A": "The Global AI Ban Treaty",
      "B": "The EU Artificial Intelligence Act (AI Act)",
      "C": "The Digital Millennium Intelligence Act",
      "D": "The Geneva AI Convention"
    },
    "correctAnswer": "B",
    "explanation": "The European Union's AI Act is the world's first comprehensive horizontal legal regime regulating artificial intelligence by risk tiers.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_9",
    "questionText": "Who was sworn in as the 24th Prime Minister of Pakistan in 2024, leading the coalition government into 2026?",
    "options": {
      "A": "Shehbaz Sharif",
      "B": "Anwar-ul-Haq Kakar",
      "C": "Shahid Khaqan Abbasi",
      "D": "Bilawal Bhutto Zardari"
    },
    "correctAnswer": "A",
    "explanation": "Mian Muhammad Shehbaz Sharif was elected and sworn in as the 24th Prime Minister of the Islamic Republic of Pakistan.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_10",
    "questionText": "Who was elected as the 14th President of Pakistan in March 2024 for a historic second term in office?",
    "options": {
      "A": "Dr. Arif Alvi",
      "B": "Asif Ali Zardari",
      "C": "Yousaf Raza Gillani",
      "D": "Raja Pervaiz Ashraf"
    },
    "correctAnswer": "B",
    "explanation": "Asif Ali Zardari was elected as the 14th President of Pakistan, having previously served as President from 2008 to 2013.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_11",
    "questionText": "Under the provisions of the 26th Constitutional Amendment, who was appointed as the 30th Chief Justice of Pakistan in October 2024?",
    "options": {
      "A": "Justice Mansoor Ali Shah",
      "B": "Justice Yahya Afridi",
      "C": "Justice Munib Akhtar",
      "D": "Justice Amin-ud-Din Khan"
    },
    "correctAnswer": "B",
    "explanation": "Justice Yahya Afridi was nominated by the newly constituted Special Parliamentary Committee and appointed as the 30th Chief Justice of Pakistan.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_12",
    "questionText": "What was the core structural reform introduced by the 26th Constitutional Amendment passed by Pakistan's parliament in October 2024?",
    "options": {
      "A": "Establishing dedicated Constitutional Benches in the Supreme Court and setting a 3-year term for the CJP",
      "B": "Abolishing the National Accountability Bureau (NAB)",
      "C": "Merging provincial assemblies into a unicameral parliament",
      "D": "Privatizing state-owned television broadcasting"
    },
    "correctAnswer": "A",
    "explanation": "The 26th Amendment reformed judicial appointments, set a fixed 3-year tenure for the Chief Justice of Pakistan, and instituted Constitutional Benches.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Hard"
  },
  {
    "_id": "ca_2026_13",
    "questionText": "What is the primary objective of the legally binding international treaty finalized under the auspices of the UN Environment Programme (UNEP) by 2025–2026?",
    "options": {
      "A": "Regulating space satellites in low earth orbit",
      "B": "Ending plastic pollution across the full life cycle of plastics",
      "C": "Restricting commercial maritime shipping routes",
      "D": "Banning international air travel over polar caps"
    },
    "correctAnswer": "B",
    "explanation": "The Intergovernmental Negotiating Committee (INC) developed a historic, legally binding treaty addressing plastic pollution in marine and terrestrial environments.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_14",
    "questionText": "Who assumed office as the Secretary General of NATO on October 1, 2024, succeeding Jens Stoltenberg?",
    "options": {
      "A": "Mark Rutte",
      "B": "Kaja Kallas",
      "C": "Ursula von der Leyen",
      "D": "Alexander Stubb"
    },
    "correctAnswer": "A",
    "explanation": "Former long-serving Prime Minister of the Netherlands Mark Rutte became the Secretary General of the North Atlantic Treaty Organization (NATO).",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_15",
    "questionText": "Sir Keir Starmer became the Prime Minister of the United Kingdom in July 2024, ending 14 years of rule by which party?",
    "options": {
      "A": "The Liberal Democratic Party",
      "B": "The Conservative (Tory) Party",
      "C": "The Scottish National Party",
      "D": "The Green Party"
    },
    "correctAnswer": "B",
    "explanation": "Keir Starmer led the Labour Party to a sweeping parliamentary majority, ending 14 consecutive years of Conservative Party government.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_16",
    "questionText": "Which nation holds the Presidency of the G20 in 2026, coinciding with the 250th anniversary of its Declaration of Independence?",
    "options": {
      "A": "United States",
      "B": "Saudi Arabia",
      "C": "Australia",
      "D": "Japan"
    },
    "correctAnswer": "A",
    "explanation": "The United States hosts the G20 Summit in 2026, completing the rotational cycle after South Africa's presidency in 2025.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_17",
    "questionText": "South Africa made diplomatic history in 2025 as:",
    "options": {
      "A": "The first nation to resign from the G20",
      "B": "The first African nation to hold the presidency of the G20",
      "C": "The first nation to introduce a gold-backed global currency",
      "D": "The sole representative of BRICS in the UN Security Council"
    },
    "correctAnswer": "B",
    "explanation": "South Africa assumed the G20 presidency on December 1, 2024, becoming the very first African country to lead the premier forum for international economic cooperation.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_18",
    "questionText": "What is the strategic emphasis of Phase-II of the China-Pakistan Economic Corridor (CPEC) extending into 2026?",
    "options": {
      "A": "Laying primary asphalt highways only",
      "B": "Industrialization, B2B joint ventures, agriculture modernization, IT corridors, and mining",
      "C": "Constructing nuclear submarines at Gwadar",
      "D": "Establishing cross-border oil rail lines to Europe"
    },
    "correctAnswer": "B",
    "explanation": "CPEC Phase-II transitions from basic infrastructure to high-yield industrial collaboration, agricultural modernization, B2B joint ventures, and Special Economic Zones (SEZs).",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_19",
    "questionText": "In October 2024, Pakistan hosted which high-profile multilateral summit in Islamabad, welcoming regional prime ministers and delegations?",
    "options": {
      "A": "The 23rd Meeting of the SCO Council of Heads of Government (CHG)",
      "B": "The SAARC Annual Leaders Summit",
      "C": "The OIC Extraordinary Foreign Ministers Conference",
      "D": "The Non-Aligned Movement (NAM) Triennial Summit"
    },
    "correctAnswer": "A",
    "explanation": "Pakistan successfully hosted the 23rd Council of Heads of Government of the Shanghai Cooperation Organisation (SCO) in Islamabad.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_20",
    "questionText": "The 2024 Nobel Peace Prize was awarded to Nihon Hidankyo, a grassroots movement representing atomic bomb survivors (Hibakusha) from:",
    "options": {
      "A": "Hiroshima and Nagasaki, Japan",
      "B": "Chernobyl, Ukraine",
      "C": "Fukushima, Japan",
      "D": "Bikini Atoll, Marshall Islands"
    },
    "correctAnswer": "A",
    "explanation": "Nihon Hidankyo was awarded the 2024 Nobel Peace Prize for demonstrating through witness testimony that nuclear weapons must never be used again.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_21",
    "questionText": "The 2024 Nobel Prize in Chemistry was awarded to Demis Hassabis, John Jumper, and David Baker primarily for breakthroughs in:",
    "options": {
      "A": "Computational protein design and AI-driven protein structure prediction (AlphaFold)",
      "B": "Lithium-air super-density battery cells",
      "C": "Carbon nanotube water purification filters",
      "D": "Room-temperature superconducting polymers"
    },
    "correctAnswer": "A",
    "explanation": "The prize recognized David Baker for computational protein design, and Demis Hassabis and John M. Jumper of Google DeepMind for predicting protein structures with AlphaFold.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_22",
    "questionText": "John J. Hopfield and Geoffrey E. Hinton were awarded the 2024 Nobel Prize in Physics for foundational discoveries that enabled:",
    "options": {
      "A": "Commercial nuclear fusion energy",
      "B": "Artificial neural networks and modern machine learning",
      "C": "Quantum teleportation across optical fibers",
      "D": "Gravitational wave detection from black hole mergers"
    },
    "correctAnswer": "A",
    "explanation": "The Nobel Committee awarded the 2024 Physics Prize to Hopfield and Hinton for foundational discoveries and inventions enabling machine learning with artificial neural networks.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_23",
    "questionText": "What is the primary role of the Special Investment Facilitation Council (SIFC) established in Pakistan?",
    "options": {
      "A": "Serving as a single-window hybrid platform to attract and expedite foreign investments in mining, agriculture, IT, and energy",
      "B": "Supervising civilian passports and immigration control",
      "C": "Managing national flood relief distribution only",
      "D": "Regulating stock market short selling"
    },
    "correctAnswer": "A",
    "explanation": "SIFC acts as a 'single-window' facilitator to eliminate bureaucratic bottlenecks and attract foreign direct investment into key economic sectors.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_24",
    "questionText": "In September 2024, the International Monetary Fund (IMF) approved a $7 billion, 37-month loan package for Pakistan under the:",
    "options": {
      "A": "Stand-By Arrangement (SBA)",
      "B": "Extended Fund Facility (EFF)",
      "C": "Rapid Financing Instrument (RFI)",
      "D": "Flexible Credit Line (FCL)"
    },
    "correctAnswer": "B",
    "explanation": "The IMF Executive Board approved a 37-month Extended Fund Facility (EFF) totaling approximately $7 billion to anchor economic stability and structural reforms.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_25",
    "questionText": "The 20th Asian Games (Aichi-Nagoya 2026) are scheduled to be staged in which Asian nation?",
    "options": {
      "A": "South Korea",
      "B": "Japan",
      "C": "Qatar",
      "D": "Thailand"
    },
    "correctAnswer": "B",
    "explanation": "The 2026 Asian Games will be held in Aichi Prefecture and its capital Nagoya, Japan, from September to October 2026.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Sports Updates",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_26",
    "questionText": "Which island territory accounts for over 60% of the world's total semiconductor foundry capacity and over 90% of advanced logic chips?",
    "options": {
      "A": "Taiwan",
      "B": "South Korea",
      "C": "Singapore",
      "D": "Ireland"
    },
    "correctAnswer": "A",
    "explanation": "Taiwan, spearheaded by TSMC, produces the overwhelming majority of the world's most sophisticated sub-7nm microchips.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_27",
    "questionText": "Which major astronomical discovery from the James Webb Space Telescope (JWST) challenged traditional cosmological timeline models?",
    "options": {
      "A": "The discovery of unexpectedly massive, luminous galaxies formed just 300–400 million years after the Big Bang",
      "B": "Evidence that stars do not undergo thermonuclear fusion",
      "C": "The sudden deceleration of cosmic expansion",
      "D": "The disappearance of dark matter from the Virgo cluster"
    },
    "correctAnswer": "A",
    "explanation": "JWST discovered highly mature, bright galaxies in the early cosmic dawn, suggesting stars and black holes formed much faster than previously hypothesized.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Hard"
  },
  {
    "_id": "ca_2026_28",
    "questionText": "The multi-billion dollar Reko Diq copper-gold project being developed jointly with Barrick Gold is situated in which district of Balochistan?",
    "options": {
      "A": "Gwadar",
      "B": "Chagai",
      "C": "Kech",
      "D": "Lasbela"
    },
    "correctAnswer": "B",
    "explanation": "Reko Diq is one of the world's largest undeveloped copper-gold deposits, situated in the Chagai district of Balochistan.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_29",
    "questionText": "At the Astana Summit in July 2024, which sovereign nation was officially admitted as the 10th full member state of the Shanghai Cooperation Organisation (SCO)?",
    "options": {
      "A": "Belarus",
      "B": "Armenia",
      "C": "Mongolia",
      "D": "Azerbaijan"
    },
    "correctAnswer": "A",
    "explanation": "The Republic of Belarus was officially admitted as the 10th full member state of the SCO at the 24th Meeting of the Council of Heads of State in Astana.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_30",
    "questionText": "Ursula von der Leyen was confirmed in July 2024 to serve a second 5-year term as President of which European institution?",
    "options": {
      "A": "European Commission",
      "B": "European Central Bank",
      "C": "European Council",
      "D": "European Court of Human Rights"
    },
    "correctAnswer": "A",
    "explanation": "Ursula von der Leyen was re-elected by the European Parliament to serve as the President of the European Commission through 2029.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_31",
    "questionText": "Which international regional bloc comprising 55 member states became a permanent member of the G20 at the New Delhi Summit?",
    "options": {
      "A": "The African Union (AU)",
      "B": "The Arab League",
      "C": "ASEAN",
      "D": "The Gulf Cooperation Council (GCC)"
    },
    "correctAnswer": "A",
    "explanation": "The African Union was granted permanent member status in the G20, giving developing African economies equal representation alongside the European Union.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_32",
    "questionText": "What is the primary mission objective of the WHO Pandemic Agreement finalized by world health leaders by 2025–2026?",
    "options": {
      "A": "Establishing equitable global pathogen access, early genomic surveillance, and fair distribution of vaccines during pandemics",
      "B": "Banning international travel whenever seasonal flu peaks",
      "C": "Mandating universal health insurance cards for all tourists",
      "D": "Privatizing global pharmaceutical manufacturing"
    },
    "correctAnswer": "B",
    "explanation": "The WHO Pandemic Agreement aims to guarantee equitable access to diagnostics, therapeutics, and vaccines while strengthening global outbreak alert mechanisms.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_33",
    "questionText": "In October 2024, SpaceX achieved a historic aerospace milestone during Starship Flight 5 by:",
    "options": {
      "A": "Catching the Super Heavy rocket booster out of mid-air using mechanical launch tower arms ('chopsticks')",
      "B": "Landing a crewed capsule on Mars",
      "C": "Deploying the first permanent laser solar sail",
      "D": "Docking with the Chinese Tiangong space station"
    },
    "correctAnswer": "A",
    "explanation": "SpaceX successfully caught the 232-foot-tall Super Heavy booster back at the Starbase launch tower using massive robotic 'chopstick' arms.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_34",
    "questionText": "Under Pakistan's Alternative and Renewable Energy (ARE) Policy, what percentage of national electricity generation is targeted from clean and renewable sources by 2030?",
    "options": {
      "A": "20%",
      "B": "40%",
      "C": "60%",
      "D": "85%"
    },
    "correctAnswer": "C",
    "explanation": "Pakistan aims to achieve 60% of its total generation capacity from renewable and clean energy sources (hydro, solar, wind) by 2030.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_35",
    "questionText": "The Diamer-Bhasha Dam currently under construction on the Indus River is geostrategically located between:",
    "options": {
      "A": "Khyber Pakhtunkhwa (Kohistan) and Gilgit-Baltistan (Diamer)",
      "B": "Punjab (Attock) and Khyber Pakhtunkhwa (Nowshera)",
      "C": "Sindh (Thatta) and Balochistan (Hub)",
      "D": "Gilgit-Baltistan (Hunza) and Azad Jammu & Kashmir (Muzaffarabad)"
    },
    "correctAnswer": "A",
    "explanation": "The Diamer-Bhasha Dam site spans the Indus River between the Kohistan district of KP and the Diamer district of Gilgit-Baltistan.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_36",
    "questionText": "Which major international cricket championship was officially awarded to Pakistan by the ICC as host nation?",
    "options": {
      "A": "ICC Men's Champions Trophy",
      "B": "ICC Under-19 Men's Cricket World Cup",
      "C": "ICC World Test Championship Final",
      "D": "ICC Men's T20 World Cup"
    },
    "correctAnswer": "A",
    "explanation": "Pakistan was designated as the defending host for the prestigious ICC Men's Champions Trophy tournament.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Sports Updates",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_37",
    "questionText": "Which exascale supercomputer located at the Oak Ridge National Laboratory (ORNL) in Tennessee has ranked among the world's most powerful computers?",
    "options": {
      "A": "Frontier",
      "B": "Fugaku",
      "C": "LUMI",
      "D": "Sunway TaihuLight"
    },
    "correctAnswer": "A",
    "explanation": "Frontier at Oak Ridge National Laboratory achieved 1.194 exaflops on the High-Performance Linpack benchmark, leading global supercomputing.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Hard"
  },
  {
    "_id": "ca_2026_38",
    "questionText": "What is the official diplomatic and public designation of the proposed 1,146 km gas pipeline connecting Iran's South Pars to Pakistan?",
    "options": {
      "A": "The Peace Pipeline",
      "B": "The CPEC Energy Link",
      "C": "The Trans-Balochistan Gas Corridor",
      "D": "The Asian Friendship Pipeline"
    },
    "correctAnswer": "A",
    "explanation": "The Iran-Pakistan (IP) gas project was originally branded the 'Peace Pipeline' when conceived to foster regional energy cooperation.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_39",
    "questionText": "Which four nations comprise the TAPI natural gas pipeline consortium engineered to transport gas from Turkmenistan's Galkynysh field?",
    "options": {
      "A": "Turkmenistan, Afghanistan, Pakistan, and India",
      "B": "Turkey, Azerbaijan, Pakistan, and Iran",
      "C": "Tajikistan, Afghanistan, Pakistan, and Iraq",
      "D": "Turkmenistan, Armenia, Pakistan, and Indonesia"
    },
    "correctAnswer": "A",
    "explanation": "TAPI is the trans-regional gas pipeline designed to pump natural gas from Turkmenistan through Afghanistan into Pakistan and India.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_40",
    "questionText": "Unit 5 (C-5) of the Chashma Nuclear Power Plant, being constructed with Chinese assistance in Mianwali, utilizes which third-generation reactor model?",
    "options": {
      "A": "Hualong One (HPR1000)",
      "B": "Westinghouse AP1000",
      "C": "EPR-1600",
      "D": "VVER-1200"
    },
    "correctAnswer": "A",
    "explanation": "Chashma-5 utilizes China's advanced third-generation Hualong One (HPR1000) pressurized water nuclear reactor technology.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Hard"
  },
  {
    "_id": "ca_2026_41",
    "questionText": "The 60th quadrennial United States Presidential Election, which significantly shaped international trade, tariffs, and defense pacts into 2026, was held on:",
    "options": {
      "A": "November 5, 2024",
      "B": "October 12, 2024",
      "C": "December 1, 2024",
      "D": "January 20, 2025"
    },
    "correctAnswer": "A",
    "explanation": "The 2024 US Presidential election occurred on Tuesday, November 5, 2024.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_42",
    "questionText": "Which Lebanese diplomat and jurist was elected President of the International Court of Justice (ICJ) in February 2024 for a 3-year term?",
    "options": {
      "A": "Nawaf Salam",
      "B": "Joan Donoghue",
      "C": "Dalveer Bhandari",
      "D": "Ronny Abraham"
    },
    "correctAnswer": "A",
    "explanation": "Judge Nawaf Salam of Lebanon was elected President of the International Court of Justice (ICJ) at The Hague.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Hard"
  },
  {
    "_id": "ca_2026_43",
    "questionText": "Where is the permanent headquarters of the Green Climate Fund (GCF), the world's largest dedicated climate fund?",
    "options": {
      "A": "Songdo, Incheon (South Korea)",
      "B": "Geneva, Switzerland",
      "C": "Nairobi, Kenya",
      "D": "Bonn, Germany"
    },
    "correctAnswer": "A",
    "explanation": "The Green Climate Fund (GCF), established under the UNFCCC framework, has its global headquarters in Songdo, Incheon, Republic of Korea.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_44",
    "questionText": "In international oil economics, what does the 'OPEC+' alliance represent?",
    "options": {
      "A": "OPEC member nations combined with 10 non-OPEC oil exporting allies including Russia",
      "B": "OPEC members who have eliminated domestic fuel subsidies",
      "C": "Countries that consume over 10 million barrels per day",
      "D": "Nations planning 100% transition to green hydrogen by 2030"
    },
    "correctAnswer": "A",
    "explanation": "OPEC+ encompasses the 12 core OPEC member countries plus 10 allied non-OPEC crude petroleum exporting nations led by Russia.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_45",
    "questionText": "The modern New Gwadar International Airport (NGIA), constructed under Chinese grant financing as a flagship CPEC asset, was officially inaugurated in:",
    "options": {
      "A": "October 2024",
      "B": "January 2021",
      "C": "June 2019",
      "D": "March 2017"
    },
    "correctAnswer": "A",
    "explanation": "The New Gwadar International Airport (NGIA) was formally inaugurated virtually in October 2024 during the official visit of Chinese Premier Li Qiang.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_46",
    "questionText": "Under the United Nations Convention on the Law of the Sea (UNCLOS), an Exclusive Economic Zone (EEZ) gives a coastal state sovereign rights over marine resources up to:",
    "options": {
      "A": "12 nautical miles",
      "B": "24 nautical miles",
      "C": "200 nautical miles",
      "D": "350 nautical miles"
    },
    "correctAnswer": "C",
    "explanation": "An Exclusive Economic Zone (EEZ) extends seaward up to 200 nautical miles from a coastal state's baseline.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_47",
    "questionText": "What strategic milestone target has Pakistan's Ministry of IT & Telecom set for annual IT and freelance software service exports?",
    "options": {
      "A": "$10 Billion",
      "B": "$1 Billion",
      "C": "$25 Billion",
      "D": "$500 Million"
    },
    "correctAnswer": "A",
    "explanation": "Pakistan has implemented special tech zones, PayPal alternative gateways, and tax incentives targeting $10 billion in national IT service exports.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Pakistan Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_48",
    "questionText": "In digital banking and modern sovereign financial systems, what does the acronym 'CBDC' represent?",
    "options": {
      "A": "Central Bank Digital Currency",
      "B": "Commercial Banking Data Certificate",
      "C": "Crypto Blockchain Distributed Coin",
      "D": "Consumer Borrowing Digital Credit"
    },
    "correctAnswer": "A",
    "explanation": "CBDC stands for Central Bank Digital Currency—a digital form of a country's sovereign fiat currency issued and regulated directly by its central bank.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_49",
    "questionText": "Which international non-governmental organization compiles and publishes the widely cited annual Global Gender Gap Report?",
    "options": {
      "A": "World Economic Forum (WEF)",
      "B": "United Nations Development Programme (UNDP)",
      "C": "International Labour Organization (ILO)",
      "D": "Amnesty International"
    },
    "correctAnswer": "A",
    "explanation": "The World Economic Forum (WEF) annually evaluates gender parity across Economic Participation, Educational Attainment, Health, and Political Empowerment.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_50",
    "questionText": "Which nation in early 2024 became the 32nd formal member of NATO, ending over two centuries of military non-alignment?",
    "options": {
      "A": "Sweden",
      "B": "Finland",
      "C": "Austria",
      "D": "Switzerland"
    },
    "correctAnswer": "A",
    "explanation": "Sweden officially deposited its instrument of accession in Washington, D.C., becoming the 32nd member of NATO following Finland's entry in 2023.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Easy"
  }
];


const MATH_SPECIALIZED_MCQS = [
  {
    "_id": "math_spec_1",
    "questionText": "If x + y + z = 6, xy + yz + zx = 11, and xyz = 6, what is the value of x³ + y³ + z³?",
    "options": {
      "A": "30",
      "B": "36",
      "C": "42",
      "D": "48"
    },
    "correctAnswer": "B",
    "explanation": "Using the algebraic identity: x³ + y³ + z³ - 3xyz = (x + y + z)[(x + y + z)² - 3(xy + yz + zx)]. Substituting the values: x³ + y³ + z³ - 3(6) = 6[6² - 3(11)] = 6[36 - 33] = 6(3) = 18. Thus, x³ + y³ + z³ = 18 + 18 = 36.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_2",
    "questionText": "If x + 1/x = √5, what is the value of x⁵ + 1/x⁵?",
    "options": {
      "A": "5√5",
      "B": "6√5",
      "C": "7√5",
      "D": "11√5"
    },
    "correctAnswer": "A",
    "explanation": "x² + 1/x² = (√5)² - 2 = 3. x³ + 1/x³ = (√5)³ - 3√5 = 5√5 - 3√5 = 2√5. Multiplying: (x² + 1/x²)(x³ + 1/x³) = x⁵ + 1/x⁵ + (x + 1/x). So 3(2√5) = x⁵ + 1/x⁵ + √5 ⇒ 6√5 - √5 = 5√5.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_3",
    "questionText": "If α and β are the roots of 2x² - 7x + 4 = 0, what is the value of (α²/β) + (β²/α)?",
    "options": {
      "A": "145/16",
      "B": "175/16",
      "C": "185/16",
      "D": "195/16"
    },
    "correctAnswer": "B",
    "explanation": "Here α + β = 7/2 and αβ = 4/2 = 2. We want (α³ + β³)/(αβ) = [(α + β)³ - 3αβ(α + β)] / (αβ). Numerator = (7/2)³ - 3(2)(7/2) = 343/8 - 21 = (343 - 168)/8 = 175/8. Dividing by αβ = 2 gives 175/16.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_4",
    "questionText": "What is the remainder when the polynomial P(x) = x²⁰²⁶ + x²⁰²⁵ + 1 is divided by x² + x + 1?",
    "options": {
      "A": "x + 1",
      "B": "x + 2",
      "C": "2x + 1",
      "D": "0"
    },
    "correctAnswer": "B",
    "explanation": "The roots of x² + x + 1 = 0 are cube roots of unity ω and ω², where ω³ = 1 and 1 + ω + ω² = 0. Notice 2026 = 3(675) + 1 ⇒ ω²⁰²⁶ = ω, and 2025 = 3(675) ⇒ ω²⁰²⁵ = 1. Thus P(ω) = ω + 1 + 1 = ω + 2. If the linear remainder is Ax + B, then Aω + B = ω + 2 ⇒ A = 1, B = 2. Remainder is x + 2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_5",
    "questionText": "A function f satisfies f(x) + 2f(1 - x) = x² for all real x. What is the value of f(2)?",
    "options": {
      "A": "-2/3",
      "B": "-1/3",
      "C": "1/3",
      "D": "2/3"
    },
    "correctAnswer": "A",
    "explanation": "For x = 2: f(2) + 2f(-1) = 4. For x = -1: f(-1) + 2f(2) = 1 ⇒ f(-1) = 1 - 2f(2). Substitute into the first equation: f(2) + 2(1 - 2f(2)) = 4 ⇒ f(2) + 2 - 4f(2) = 4 ⇒ -3f(2) = 2 ⇒ f(2) = -2/3.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_6",
    "questionText": "Find the real solution to the equation: √(2x + 3) - √(x + 1) = 1.",
    "options": {
      "A": "x = 3",
      "B": "x = -1",
      "C": "x = 3 and x = -1",
      "D": "x = 5"
    },
    "correctAnswer": "C",
    "explanation": "Rearrange: √(2x + 3) = 1 + √(x + 1). Squaring both sides: 2x + 3 = 1 + x + 1 + 2√(x + 1) ⇒ x + 1 = 2√(x + 1). Let u = √(x + 1) ≥ 0, then u² = 2u ⇒ u(u - 2) = 0. Either u = 0 ⇒ x = -1, or u = 2 ⇒ x + 1 = 4 ⇒ x = 3. Checking in original equation: for x = 3, √9 - √4 = 3 - 2 = 1 (valid); for x = -1, √1 - √0 = 1 (valid). Both x = 3 and x = -1 are valid.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_7",
    "questionText": "If 2^a = 3^b = 6^(-c), what is the value of (1/a) + (1/b) + (1/c)?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "-1",
      "D": "1/6"
    },
    "correctAnswer": "A",
    "explanation": "Let 2^a = 3^b = 6^(-c) = k. Then 2 = k^(1/a), 3 = k^(1/b), and 6 = k^(-1/c). Since 2 × 3 = 6, k^(1/a) × k^(1/b) = k^(-1/c) ⇒ k^(1/a + 1/b) = k^(-1/c) ⇒ 1/a + 1/b = -1/c ⇒ 1/a + 1/b + 1/c = 0.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_8",
    "questionText": "For what values of k does the quadratic equation (k - 1)x² + 2(k - 1)x + 1 = 0 have no real roots?",
    "options": {
      "A": "k < 1",
      "B": "1 < k < 2",
      "C": "k > 2",
      "D": "k ≤ 1 or k ≥ 2"
    },
    "correctAnswer": "B",
    "explanation": "For no real roots, the discriminant Δ < 0 and k ≠ 1 (for it to be quadratic). Δ = [2(k - 1)]² - 4(k - 1)(1) = 4(k - 1)² - 4(k - 1) = 4(k - 1)(k - 1 - 1) = 4(k - 1)(k - 2) < 0. The inequality (k - 1)(k - 2) < 0 holds strictly when 1 < k < 2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_9",
    "questionText": "If log₂(x) + log₄(x) + log₁₆(x) = 21/4, what is the value of x?",
    "options": {
      "A": "4",
      "B": "8",
      "C": "16",
      "D": "32"
    },
    "correctAnswer": "B",
    "explanation": "Change bases to 2: log₄(x) = (1/2)log₂(x), and log₁₆(x) = (1/4)log₂(x). Thus log₂(x)(1 + 1/2 + 1/4) = 21/4 ⇒ log₂(x)(7/4) = 21/4 ⇒ log₂(x) = 3 ⇒ x = 2³ = 8.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_10",
    "questionText": "If a + b + c = 0, what is the value of (a²/(bc)) + (b²/(ca)) + (c²/(ab))?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "3",
      "D": "-3"
    },
    "correctAnswer": "C",
    "explanation": "Combining under a common denominator gives (a³ + b³ + c³)/(abc). When a + b + c = 0, the known identity gives a³ + b³ + c³ = 3abc. Therefore, (3abc)/(abc) = 3.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_11",
    "questionText": "Solve for real x: x⁴ - 10x² + 9 = 0. What is the sum of the absolute values of all roots?",
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "10"
    },
    "correctAnswer": "C",
    "explanation": "Let y = x². Then y² - 10y + 9 = 0 ⇒ (y - 9)(y - 1) = 0 ⇒ y = 9 or y = 1. So x = ±3 and x = ±1. Absolute values of roots are 3, 3, 1, 1. Their sum is 3 + 3 + 1 + 1 = 8.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_12",
    "questionText": "What is the maximum value of the expression 12x - 3x² + 5 for all real numbers x?",
    "options": {
      "A": "14",
      "B": "17",
      "C": "19",
      "D": "21"
    },
    "correctAnswer": "B",
    "explanation": "Complete the square: -3(x² - 4x) + 5 = -3(x - 2)² + 12 + 5 = 17 - 3(x - 2)². Since -3(x - 2)² ≤ 0 for all real x, the maximum occurs at x = 2 and equals 17.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_13",
    "questionText": "If x = (√3 + 1)/2, what is the value of 4x³ + 2x² - 8x + 7?",
    "options": {
      "A": "8",
      "B": "10",
      "C": "12",
      "D": "15"
    },
    "correctAnswer": "B",
    "explanation": "2x = √3 + 1 ⇒ 2x - 1 = √3. Squaring both sides: (2x - 1)² = 3 ⇒ 4x² - 4x + 1 = 3 ⇒ 4x² - 4x - 2 = 0 ⇒ 2x² - 2x - 1 = 0. Now divide 4x³ + 2x² - 8x + 7 by (2x² - 2x - 1): 4x³ + 2x² - 8x + 7 = 2x(2x² - 2x - 1) + 6x² - 6x + 7 = 2x(0) + 3(2x² - 2x - 1) + 10 = 0 + 0 + 10 = 10.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_14",
    "questionText": "If the roots of the equation x³ - 12x² + 39x - 28 = 0 are in Arithmetic Progression (A.P.), what are the roots?",
    "options": {
      "A": "1, 4, 7",
      "B": "2, 4, 6",
      "C": "1, 3, 8",
      "D": "3, 4, 5"
    },
    "correctAnswer": "A",
    "explanation": "Let roots be a - d, a, a + d. Sum of roots = 3a = 12 ⇒ a = 4. Product of roots = a(a² - d²) = 28 ⇒ 4(16 - d²) = 28 ⇒ 16 - d² = 7 ⇒ d² = 9 ⇒ d = 3. The roots are 4 - 3 = 1, 4, and 4 + 3 = 7.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_15",
    "questionText": "If x, y, z are positive real numbers such that x + y + z = 1, what is the minimum value of (1/x) + (1/y) + (1/z)?",
    "options": {
      "A": "3",
      "B": "6",
      "C": "9",
      "D": "12"
    },
    "correctAnswer": "C",
    "explanation": "By Cauchy-Schwarz or AM-HM inequality: (x + y + z)(1/x + 1/y + 1/z) ≥ (1 + 1 + 1)² = 9. Since x + y + z = 1, (1/x + 1/y + 1/z) ≥ 9, with equality when x = y = z = 1/3.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_16",
    "questionText": "If x² - 3x + 1 = 0, what is the value of x⁴ + 1/x⁴?",
    "options": {
      "A": "47",
      "B": "49",
      "C": "51",
      "D": "53"
    },
    "correctAnswer": "A",
    "explanation": "Dividing by x gives x + 1/x = 3. Squaring: x² + 1/x² = 3² - 2 = 7. Squaring again: x⁴ + 1/x⁴ = 7² - 2 = 49 - 2 = 47.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_17",
    "questionText": "Solve the system for real positive values: xy = 6, yz = 12, zx = 8. What is the value of x + y + z?",
    "options": {
      "A": "7",
      "B": "8",
      "C": "9",
      "D": "10"
    },
    "correctAnswer": "C",
    "explanation": "Multiply all three: (xyz)² = 6 × 12 × 8 = 576 ⇒ xyz = 24. Then x = (xyz)/(yz) = 24/12 = 2. y = (xyz)/(zx) = 24/8 = 3. z = (xyz)/(xy) = 24/6 = 4. Sum x + y + z = 2 + 3 + 4 = 9.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_18",
    "questionText": "If log₁₀(2) = a and log₁₀(3) = b, what is log₁₀(15) in terms of a and b?",
    "options": {
      "A": "b + 1 - a",
      "B": "a + b - 1",
      "C": "a - b + 1",
      "D": "b - a - 1"
    },
    "correctAnswer": "A",
    "explanation": "Notice 15 = 3 × 5 = 3 × (10/2). Therefore log₁₀(15) = log₁₀(3) + log₁₀(10/2) = log₁₀(3) + log₁₀(10) - log₁₀(2) = b + 1 - a.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_19",
    "questionText": "What is the coefficient of x⁷ in the expansion of (1 - x + 2x²)³?",
    "options": {
      "A": "0",
      "B": "-6",
      "C": "-12",
      "D": "12"
    },
    "correctAnswer": "A",
    "explanation": "The highest power of x in (1 - x + 2x²)³ is (x²)³ = x⁶. Since the maximum power achievable is 6, the coefficient of x⁷ is 0.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_20",
    "questionText": "If a, b, c are distinct real numbers, simplify: [a² / ((a - b)(a - c))] + [b² / ((b - c)(b - a))] + [c² / ((c - a)(c - b))].",
    "options": {
      "A": "0",
      "B": "1",
      "C": "a + b + c",
      "D": "abc"
    },
    "correctAnswer": "B",
    "explanation": "Using partial fractions or Lagrange interpolation on P(x) = x² at distinct nodes a, b, c: the sum of the coefficients of P(x)/[(x - a)(x - b)(x - c)] equals 1 for any monic polynomial of degree 2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_21",
    "questionText": "If 3^(2x + 1) - 10 × 3^x + 3 = 0, find the values of x.",
    "options": {
      "A": "x = -1 and x = 1",
      "B": "x = 0 and x = 2",
      "C": "x = 1 and x = 3",
      "D": "x = -2 and x = 1"
    },
    "correctAnswer": "A",
    "explanation": "Rewrite as 3 × (3^x)² - 10(3^x) + 3 = 0. Let y = 3^x: 3y² - 10y + 3 = 0 ⇒ (3y - 1)(y - 3) = 0 ⇒ y = 1/3 or y = 3. Since 3^x = 3^(-1) ⇒ x = -1, and 3^x = 3¹ ⇒ x = 1.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_22",
    "questionText": "Find the sum of all real roots of the equation |x² - 4x + 3| = x - 1.",
    "options": {
      "A": "4",
      "B": "5",
      "C": "6",
      "D": "7"
    },
    "correctAnswer": "D",
    "explanation": "Roots are x = 1, x = 2, and x = 4. All satisfy |x² - 4x + 3| = x - 1. Their sum is 1 + 2 + 4 = 7.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_23",
    "questionText": "If x = 3^(1/3) + 3^(-1/3), what is the value of 3x³ - 9x?",
    "options": {
      "A": "8",
      "B": "10",
      "C": "12",
      "D": "15"
    },
    "correctAnswer": "B",
    "explanation": "Cube both sides: x³ = (3^(1/3) + 3^(-1/3))³ = 3 + 1/3 + 3(3^(1/3))(3^(-1/3))(x) = 10/3 + 3x. Multiply by 3: 3x³ = 10 + 9x ⇒ 3x³ - 9x = 10.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_24",
    "questionText": "Find the remainder when x¹⁰⁰ - 2x⁵¹ + 1 is divided by x² - 1.",
    "options": {
      "A": "-2x + 2",
      "B": "2x - 2",
      "C": "-2x",
      "D": "0"
    },
    "correctAnswer": "A",
    "explanation": "Let remainder be Ax + B. Then x¹⁰⁰ - 2x⁵¹ + 1 = (x - 1)(x + 1)Q(x) + Ax + B. For x = 1: 1 - 2 + 1 = 0 = A + B. For x = -1: 1 - 2(-1) + 1 = 4 = -A + B. Adding: 2B = 4 ⇒ B = 2. Then A = -B = -2. The remainder is -2x + 2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_25",
    "questionText": "If a + b = 5 and a² + b² = 13, what is the value of a⁴ + b⁴?",
    "options": {
      "A": "97",
      "B": "107",
      "C": "117",
      "D": "127"
    },
    "correctAnswer": "A",
    "explanation": "From (a + b)² = a² + b² + 2ab: 25 = 13 + 2ab ⇒ 2ab = 12 ⇒ ab = 6. Now (a² + b²)² = a⁴ + b⁴ + 2(ab)² ⇒ 13² = a⁴ + b⁴ + 2(36) ⇒ 169 = a⁴ + b⁴ + 72 ⇒ a⁴ + b⁴ = 169 - 72 = 97.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_26",
    "questionText": "If √(x + √(x + √(x + ...))) = 6, what is the value of x?",
    "options": {
      "A": "30",
      "B": "36",
      "C": "42",
      "D": "48"
    },
    "correctAnswer": "A",
    "explanation": "Let y = √(x + y) = 6. Squaring both sides: x + y = 36 ⇒ x + 6 = 36 ⇒ x = 30.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_27",
    "questionText": "What is the domain of the function f(x) = √( (x - 2) / (x + 3) )?",
    "options": {
      "A": "(-∞, -3) ∪ [2, ∞)",
      "B": "[-3, 2]",
      "C": "(-3, 2]",
      "D": "(-∞, -3] ∪ [2, ∞)"
    },
    "correctAnswer": "A",
    "explanation": "For real f(x), (x - 2)/(x + 3) ≥ 0 and x + 3 ≠ 0. Critical points are -3 and 2. The fraction is positive when x < -3 or x ≥ 2. Since denominator cannot be 0, x ≠ -3. Domain is (-∞, -3) ∪ [2, ∞).",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_28",
    "questionText": "If α, β, γ are roots of x³ - 6x² + 11x - 6 = 0, what is the value of (1/α) + (1/β) + (1/γ)?",
    "options": {
      "A": "11/6",
      "B": "6/11",
      "C": "2",
      "D": "3"
    },
    "correctAnswer": "A",
    "explanation": "By Vieta's formulas: α + β + γ = 6, αβ + βγ + γα = 11, and αβγ = 6. The sum 1/α + 1/β + 1/γ = (αβ + βγ + γα)/(αβγ) = 11/6.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_29",
    "questionText": "If log₂(3) = x and log₃(5) = y, what is log₁₀(15) in terms of x and y?",
    "options": {
      "A": "(xy + x) / (xy + 1)",
      "B": "(y + 1) / (xy + 1)",
      "C": "(xy + 1) / (x + 1)",
      "D": "(y + x) / (xy + 1)"
    },
    "correctAnswer": "A",
    "explanation": "log₂(5) = log₂(3) × log₃(5) = xy. Now log₁₀(15) = log₂(15) / log₂(10) = [log₂(3) + log₂(5)] / [log₂(2) + log₂(5)] = (x + xy) / (1 + xy) = (xy + x) / (xy + 1).",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_30",
    "questionText": "If a, b are roots of x² - px + q = 0, what equation has roots a² and b²?",
    "options": {
      "A": "x² - (p² - 2q)x + q² = 0",
      "B": "x² - (p² + 2q)x + q² = 0",
      "C": "x² - (p² - 2q)x - q² = 0",
      "D": "x² + (p² - 2q)x + q² = 0"
    },
    "correctAnswer": "A",
    "explanation": "Sum of new roots: a² + b² = (a + b)² - 2ab = p² - 2q. Product of new roots: a²b² = (ab)² = q². Equation is x² - (Sum)x + (Product) = 0 ⇒ x² - (p² - 2q)x + q² = 0.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_31",
    "questionText": "Solve for x: 4^x - 3 × 2^(x + 2) + 32 = 0. What is the product of all roots?",
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "12"
    },
    "correctAnswer": "B",
    "explanation": "Rewrite: (2^x)² - 12(2^x) + 32 = 0. Let y = 2^x: y² - 12y + 32 = 0 ⇒ (y - 4)(y - 8) = 0 ⇒ y = 4 or y = 8. So 2^x = 4 ⇒ x = 2, and 2^x = 8 ⇒ x = 3. The roots are x = 2 and x = 3. Product of the roots is 2 × 3 = 6.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_32",
    "questionText": "Find the number of integral solutions (x, y) to the equation xy - 3x - 2y = 1.",
    "options": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "8"
    },
    "correctAnswer": "B",
    "explanation": "Use Simon's Favorite Factoring Trick: xy - 3x - 2y + 6 = 1 + 6 ⇒ (x - 2)(y - 3) = 7. Since 7 is prime, its integer factor pairs are (1, 7), (7, 1), (-1, -7), (-7, -1). Each pair gives a unique pair of integers (x, y). There are exactly 4 integral solutions.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_33",
    "questionText": "If x = 2 + √3, what is the value of x⁴ - 8x³ + 14x² + 8x + 5?",
    "options": {
      "A": "6",
      "B": "8",
      "C": "10",
      "D": "12"
    },
    "correctAnswer": "B",
    "explanation": "From x = 2 + √3, we get x² - 4x + 1 = 0. Dividing x⁴ - 8x³ + 14x² + 8x + 5 by (x² - 4x + 1) yields quotient (x² - 4x - 3) and constant remainder 8. Since x² - 4x + 1 = 0, the value is 8.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_34",
    "questionText": "If 1/(a + b + x) = (1/a) + (1/b) + (1/x), what are the values of x?",
    "options": {
      "A": "x = -a and x = -b",
      "B": "x = a and x = b",
      "C": "x = -(a + b)",
      "D": "x = a + b"
    },
    "correctAnswer": "A",
    "explanation": "1/(a + b + x) - 1/x = 1/a + 1/b ⇒ [x - (a + b + x)] / [x(a + b + x)] = (a + b)/(ab) ⇒ -(a + b) / [x(a + b + x)] = (a + b)/(ab). Cancel (a + b): -ab = x(a + b + x) = x² + (a + b)x ⇒ x² + (a + b)x + ab = 0 ⇒ (x + a)(x + b) = 0 ⇒ x = -a or x = -b.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_35",
    "questionText": "If x² + y² + z² = xy + yz + zx for real numbers x, y, z, which condition must hold?",
    "options": {
      "A": "x = y = z",
      "B": "x + y + z = 0",
      "C": "xyz = 1",
      "D": "x² + y² = z²"
    },
    "correctAnswer": "A",
    "explanation": "Multiply by 2: 2x² + 2y² + 2z² - 2xy - 2yz - 2zx = 0 ⇒ (x - y)² + (y - z)² + (z - x)² = 0. Sum of squares is zero only when each term is zero, meaning x = y = z.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_36",
    "questionText": "Find the sum of all solutions to: x^(log₁₀(x)) = 100x.",
    "options": {
      "A": "100.1",
      "B": "10.01",
      "C": "101",
      "D": "1000"
    },
    "correctAnswer": "A",
    "explanation": "Take log₁₀ of both sides: (log₁₀ x)² = log₁₀(100x) = 2 + log₁₀ x. Let u = log₁₀ x: u² - u - 2 = 0 ⇒ (u - 2)(u + 1) = 0 ⇒ u = 2 or u = -1. So x = 10² = 100, or x = 10⁻¹ = 0.1. The sum of the solutions is 100 + 0.1 = 100.1.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_37",
    "questionText": "If a, b, c are positive reals such that a + b + c = 6, what is the maximum value of a²b³c?",
    "options": {
      "A": "108",
      "B": "432",
      "C": "864",
      "D": "1728"
    },
    "correctAnswer": "A",
    "explanation": "By weighted AM-GM, maximum occurs when a/2 = b/3 = c/1. Since a + b + c = 6, 2k + 3k + k = 6 ⇒ 6k = 6 ⇒ k = 1. Thus a = 2, b = 3, c = 1. Maximum value is a²b³c = 2² × 3³ × 1 = 4 × 27 = 108.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_38",
    "questionText": "If x = √[7 + 4√3], what is x + 1/x?",
    "options": {
      "A": "2",
      "B": "4",
      "C": "2√3",
      "D": "4√3"
    },
    "correctAnswer": "B",
    "explanation": "Notice 7 + 4√3 = 4 + 3 + 2(2)(√3) = (2 + √3)². Therefore x = 2 + √3. Then 1/x = 1/(2 + √3) = 2 - √3. Adding them gives x + 1/x = (2 + √3) + (2 - √3) = 4.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_39",
    "questionText": "Find the constant term (independent of x) in the binomial expansion of (2x² - 1/x)⁹.",
    "options": {
      "A": "-5376",
      "B": "5376",
      "C": "-672",
      "D": "672"
    },
    "correctAnswer": "D",
    "explanation": "General term is ⁹C_r (2)^{9-r} (-1)^r x^{18 - 3r}. Setting 18 - 3r = 0 gives r = 6. Coefficient = ⁹C₆ × 2³ × (-1)⁶ = 84 × 8 × 1 = 672.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_40",
    "questionText": "If (x - a)(x - b) - 1 = 0 has roots c and d, what are the roots of (x - c)(x - d) + 1 = 0?",
    "options": {
      "A": "a and b",
      "B": "-a and -b",
      "C": "a + c and b + d",
      "D": "1/a and 1/b"
    },
    "correctAnswer": "A",
    "explanation": "Since c and d are roots of (x - a)(x - b) - 1 = 0, we can write identically (x - a)(x - b) - 1 = (x - c)(x - d). Rearranging gives (x - c)(x - d) + 1 = (x - a)(x - b). Setting this to 0 clearly yields roots x = a and x = b.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_41",
    "questionText": "If log₂(x - 1) + log₂(x - 3) = 3, what is the value of x?",
    "options": {
      "A": "-1",
      "B": "5",
      "C": "5 and -1",
      "D": "7"
    },
    "correctAnswer": "B",
    "explanation": "Combine logs: log₂[(x - 1)(x - 3)] = 3 ⇒ (x - 1)(x - 3) = 2³ = 8 ⇒ x² - 4x + 3 = 8 ⇒ x² - 4x - 5 = 0 ⇒ (x - 5)(x + 1) = 0. However, log arguments must be positive: x - 1 > 0 and x - 3 > 0 ⇒ x > 3. Therefore x = -1 is extraneous, leaving only x = 5.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_42",
    "questionText": "For how many integer values of n is (n² + 3) / (n - 1) an integer?",
    "options": {
      "A": "4",
      "B": "6",
      "C": "8",
      "D": "12"
    },
    "correctAnswer": "B",
    "explanation": "(n² + 3)/(n - 1) = n + 1 + 4/(n - 1). (n - 1) must divide 4. Divisors of 4 are {±1, ±2, ±4}, which gives exactly 6 integer values of n.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_43",
    "questionText": "If x = 111...111 (81 ones), the number x is always divisible by which integer?",
    "options": {
      "A": "81",
      "B": "243",
      "C": "729",
      "D": "2187"
    },
    "correctAnswer": "A",
    "explanation": "Sum of digits is 81 × 1 = 81. A number with 3^k identical digits 1 is divisible by 3^k. For 81 = 3⁴ ones, it is divisible by 3⁴ = 81.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_44",
    "questionText": "If a² + b² + c² = 1, what is the minimum value of ab + bc + ca?",
    "options": {
      "A": "-1",
      "B": "-1/2",
      "C": "0",
      "D": "1/2"
    },
    "correctAnswer": "B",
    "explanation": "Consider (a + b + c)² ≥ 0 ⇒ a² + b² + c² + 2(ab + bc + ca) ≥ 0 ⇒ 1 + 2(ab + bc + ca) ≥ 0 ⇒ ab + bc + ca ≥ -1/2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_45",
    "questionText": "Find the sum of the coefficients of the polynomial P(x) = (2x² - 3x + 2)²⁰²⁶.",
    "options": {
      "A": "0",
      "B": "1",
      "C": "2²⁰²⁶",
      "D": "-1"
    },
    "correctAnswer": "B",
    "explanation": "The sum of coefficients of any polynomial P(x) is obtained by evaluating at x = 1. P(1) = (2(1)² - 3(1) + 2)²⁰²⁶ = (2 - 3 + 2)²⁰²⁶ = 1²⁰²⁶ = 1.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_46",
    "questionText": "If 2^(x + y) = 32 and 2^(x - y) = 2, what is the value of x² - y²?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "15",
      "D": "20"
    },
    "correctAnswer": "A",
    "explanation": "2^(x + y) = 2⁵ ⇒ x + y = 5. 2^(x - y) = 2¹ ⇒ x - y = 1. Therefore, x² - y² = (x + y)(x - y) = 5 × 1 = 5.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_47",
    "questionText": "If x + y = 1 and x² + y² = 2, what is the value of x³ + y³?",
    "options": {
      "A": "2",
      "B": "5/2",
      "C": "3",
      "D": "7/2"
    },
    "correctAnswer": "B",
    "explanation": "2xy = (x + y)² - (x² + y²) = 1 - 2 = -1 ⇒ xy = -1/2. Now x³ + y³ = (x + y)(x² - xy + y²) = 1 × [2 - (-1/2)] = 1 × (2 + 1/2) = 5/2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_48",
    "questionText": "If α, β are roots of x² - 2x + 4 = 0, what is the value of α⁶ + β⁶?",
    "options": {
      "A": "64",
      "B": "128",
      "C": "256",
      "D": "512"
    },
    "correctAnswer": "B",
    "explanation": "Roots satisfy x² - 2x + 4 = 0. Multiply by (x + 2): (x + 2)(x² - 2x + 4) = x³ + 8 = 0 ⇒ x³ = -8. Thus α³ = -8 and β³ = -8. Squaring both gives α⁶ = 64 and β⁶ = 64. Their sum is 64 + 64 = 128.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_49",
    "questionText": "What is the product of all roots of the equation x³ - 6x² + 11x - 6 = 0?",
    "options": {
      "A": "6",
      "B": "-6",
      "C": "11",
      "D": "-11"
    },
    "correctAnswer": "A",
    "explanation": "By Vieta's formula, for a cubic ax³ + bx² + cx + d = 0, product of roots = -d/a. Here d = -6 and a = 1, so product = -(-6)/1 = 6. (The roots are 1, 2, and 3).",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_50",
    "questionText": "If a/b = c/d = e/f = 3, what is the value of (2a² + 3c² + 4e²) / (2b² + 3d² + 4f²)?",
    "options": {
      "A": "3",
      "B": "6",
      "C": "9",
      "D": "27"
    },
    "correctAnswer": "C",
    "explanation": "Since a = 3b, c = 3d, e = 3f, squaring gives a² = 9b², c² = 9d², e² = 9f². Substituting into numerator gives 9(2b² + 3d² + 4f²). Dividing by the denominator leaves 9.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Algebra",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_51",
    "questionText": "A train 150 m long passes a telegraph pole in 12 seconds. What is the speed of the train in km/h?",
    "options": {
      "A": "40 km/h",
      "B": "45 km/h",
      "C": "50 km/h",
      "D": "54 km/h"
    },
    "correctAnswer": "B",
    "explanation": "Speed = Distance / Time = 150 m / 12 s = 12.5 m/s. Convert to km/h: 12.5 × (18/5) = 2.5 × 18 = 45 km/h.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_52",
    "questionText": "A train 280 m long is moving at 60 km/h. How much time (in seconds) will it take to cross a platform 220 m long?",
    "options": {
      "A": "20 s",
      "B": "25 s",
      "C": "30 s",
      "D": "35 s"
    },
    "correctAnswer": "C",
    "explanation": "Total distance = Train length + Platform length = 280 + 220 = 500 m. Speed = 60 × (5/18) = 50/3 m/s. Time = Distance / Speed = 500 / (50/3) = (500 × 3)/50 = 30 seconds.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_53",
    "questionText": "Two trains of lengths 140 m and 160 m run on parallel tracks in opposite directions at 60 km/h and 40 km/h. In how many seconds will they clear each other from the moment they meet?",
    "options": {
      "A": "9.6 s",
      "B": "10.8 s",
      "C": "12.0 s",
      "D": "14.4 s"
    },
    "correctAnswer": "B",
    "explanation": "Relative speed in opposite directions = 60 + 40 = 100 km/h = 100 × (5/18) = 250/9 m/s. Total distance to cross = 140 + 160 = 300 m. Time = 300 / (250/9) = (300 × 9)/250 = 10.8 seconds.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_54",
    "questionText": "Two trains 105 m and 90 m long run at speeds of 45 km/h and 72 km/h respectively in the same direction. How long will it take for the faster train to pass the slower train?",
    "options": {
      "A": "20 s",
      "B": "24 s",
      "C": "26 s",
      "D": "28 s"
    },
    "correctAnswer": "C",
    "explanation": "Relative speed in same direction = 72 - 45 = 27 km/h = 27 × (5/18) = 7.5 m/s. Total distance = 105 + 90 = 195 m. Time = 195 / 7.5 = 26 seconds.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_55",
    "questionText": "A train passes a standing man in 8 seconds and a bridge 260 m long in 21 seconds. What is the length of the train?",
    "options": {
      "A": "140 m",
      "B": "160 m",
      "C": "180 m",
      "D": "200 m"
    },
    "correctAnswer": "B",
    "explanation": "Let length of train be L. Speed = L/8 = (L + 260)/21. Cross-multiplying: 21L = 8L + 2080 ⇒ 13L = 2080 ⇒ L = 160 meters.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_56",
    "questionText": "A train running at 54 km/h takes 20 seconds to cross a platform. Next, it takes 12 seconds to pass a man walking at 6 km/h in the same direction. What is the length of the platform?",
    "options": {
      "A": "120 m",
      "B": "140 m",
      "C": "160 m",
      "D": "180 m"
    },
    "correctAnswer": "B",
    "explanation": "Relative speed against man = 54 - 6 = 48 km/h = 48 × (5/18) = 40/3 m/s. Length of train = (40/3) × 12 = 160 m. Train speed = 54 km/h = 15 m/s. In 20 seconds it travels 15 × 20 = 300 m. Platform length = 300 - 160 = 140 m.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_57",
    "questionText": "Two stations A and B are 200 km apart. Train 1 leaves A at 7 AM at 20 km/h towards B. Train 2 leaves B at 8 AM at 25 km/h towards A. At what time will they meet?",
    "options": {
      "A": "11:00 AM",
      "B": "12:00 PM",
      "C": "1:00 PM",
      "D": "2:00 PM"
    },
    "correctAnswer": "B",
    "explanation": "From 7 to 8 AM, Train 1 covers 20 km. Remaining distance at 8 AM = 200 - 20 = 180 km. Relative speed = 20 + 25 = 45 km/h. Time to meet = 180 / 45 = 4 hours after 8 AM, which is 12:00 PM.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_58",
    "questionText": "A train traveling at 72 km/h crosses a 180 m long platform in 18 seconds. How many seconds will it take to cross another platform 240 m long?",
    "options": {
      "A": "19 s",
      "B": "20 s",
      "C": "21 s",
      "D": "22 s"
    },
    "correctAnswer": "C",
    "explanation": "Speed = 72 × (5/18) = 20 m/s. Distance in 18 s = 20 × 18 = 360 m. Length of train = 360 - 180 = 180 m. For 240 m platform: total distance = 180 + 240 = 420 m. Time = 420 / 20 = 21 seconds.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_59",
    "questionText": "Two trains start at the same time from points A and B towards each other. After meeting, they reach B and A in 4 hours and 9 hours respectively. What is the ratio of their speeds?",
    "options": {
      "A": "2 : 3",
      "B": "3 : 2",
      "C": "4 : 9",
      "D": "9 : 4"
    },
    "correctAnswer": "B",
    "explanation": "Formula: Speed₁ / Speed₂ = √(Time₂ / Time₁). Ratio = √(9 / 4) = 3 / 2 = 3 : 2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_60",
    "questionText": "Excluding stoppages, the speed of a train is 60 km/h, and including stoppages, it is 48 km/h. For how many minutes does the train stop per hour?",
    "options": {
      "A": "10 min",
      "B": "12 min",
      "C": "15 min",
      "D": "18 min"
    },
    "correctAnswer": "B",
    "explanation": "Stoppage time per hour = [(Speed without stoppage - Speed with stoppage) / Speed without stoppage] × 60 min = [(60 - 48)/60] × 60 = 12 minutes.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_61",
    "questionText": "A train 125 m long passes a man running at 5 km/h in the same direction in 10 seconds. What is the speed of the train?",
    "options": {
      "A": "45 km/h",
      "B": "50 km/h",
      "C": "54 km/h",
      "D": "55 km/h"
    },
    "correctAnswer": "B",
    "explanation": "Relative speed = 125 m / 10 s = 12.5 m/s = 12.5 × (18/5) = 45 km/h. Since man is running in same direction: Speed of train = Relative speed + Man speed = 45 + 5 = 50 km/h.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_62",
    "questionText": "A train passes two men walking in the same direction at 3 km/h and 5 km/h in 10 seconds and 11 seconds respectively. What is the speed of the train?",
    "options": {
      "A": "22 km/h",
      "B": "25 km/h",
      "C": "27 km/h",
      "D": "30 km/h"
    },
    "correctAnswer": "B",
    "explanation": "Let train speed be V km/h. Train length L = (V - 3) × (5/18) × 10 = (V - 5) × (5/18) × 11. Canceling 5/18: 10(V - 3) = 11(V - 5) ⇒ 10V - 30 = 11V - 55 ⇒ V = 25 km/h.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_63",
    "questionText": "A train 300 m long takes 25 seconds to pass a standing person. How long will it take to cross a 450 m tunnel at the same speed?",
    "options": {
      "A": "50 s",
      "B": "55 s",
      "C": "60 s",
      "D": "62.5 s"
    },
    "correctAnswer": "D",
    "explanation": "Speed = 300 / 25 = 12 m/s. Total distance for tunnel = 300 + 450 = 750 m. Time = 750 / 12 = 62.5 seconds.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_64",
    "questionText": "Two trains of equal length running in opposite directions at 46 km/h and 36 km/h pass each other in 36 seconds. What is the length of each train?",
    "options": {
      "A": "380 m",
      "B": "400 m",
      "C": "410 m",
      "D": "420 m"
    },
    "correctAnswer": "C",
    "explanation": "Relative speed = 46 + 36 = 82 km/h = 82 × (5/18) = 410/18 m/s. In 36 seconds, total distance = (410/18) × 36 = 820 m. Length of each train = 820 / 2 = 410 meters.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_65",
    "questionText": "A train 100 m long passes another train 150 m long running in opposite direction in 9 seconds. If the speed of the first train is 40 km/h, what is the speed of the second train?",
    "options": {
      "A": "50 km/h",
      "B": "55 km/h",
      "C": "60 km/h",
      "D": "65 km/h"
    },
    "correctAnswer": "C",
    "explanation": "Total distance = 100 + 150 = 250 m. Relative speed = 250 / 9 m/s = (250/9) × (18/5) = 100 km/h. Second train speed = 100 - 40 = 60 km/h.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_66",
    "questionText": "A train overtakes two bicycles moving in the same direction at 2 km/h and 4 km/h in 9 seconds and 10 seconds respectively. What is the length of the train?",
    "options": {
      "A": "40 m",
      "B": "45 m",
      "C": "50 m",
      "D": "60 m"
    },
    "correctAnswer": "C",
    "explanation": "Let train speed be V km/h. Length = (V - 2) × (5/18) × 9 = (V - 4) × (5/18) × 10. 9(V - 2) = 10(V - 4) ⇒ 9V - 18 = 10V - 40 ⇒ V = 22 km/h. Train length = (22 - 2) × (5/18) × 9 = 20 × (5/2) = 50 meters.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_67",
    "questionText": "A train traveling at 90 km/h enters a 1.5 km long tunnel. How long does the train take to completely emerge from the tunnel if the train is 250 m long?",
    "options": {
      "A": "60 s",
      "B": "70 s",
      "C": "80 s",
      "D": "90 s"
    },
    "correctAnswer": "B",
    "explanation": "Speed = 90 × (5/18) = 25 m/s. Total distance = 1500 m + 250 m = 1750 m. Time = 1750 / 25 = 70 seconds.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_68",
    "questionText": "A fast train leaves station A towards B at 80 km/h. At the same time, a slow train leaves B towards A at 60 km/h. When they meet, the fast train has traveled 60 km more than the slow train. What is the distance between A and B?",
    "options": {
      "A": "380 km",
      "B": "400 km",
      "C": "420 km",
      "D": "450 km"
    },
    "correctAnswer": "C",
    "explanation": "Let time taken to meet be t hours. Difference in distance = 80t - 60t = 20t = 60 km ⇒ t = 3 hours. Total distance = 80t + 60t = 140t = 140 × 3 = 420 km.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_69",
    "questionText": "If a train 110 m long passes a telegraph post in 3 seconds, how long will it take to pass a 165 m platform?",
    "options": {
      "A": "6.5 s",
      "B": "7.0 s",
      "C": "7.5 s",
      "D": "8.0 s"
    },
    "correctAnswer": "C",
    "explanation": "Speed = 110 / 3 m/s. Total distance for platform = 110 + 165 = 275 m. Time = 275 / (110/3) = (275 × 3) / 110 = 825 / 110 = 7.5 seconds.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_70",
    "questionText": "A train crosses a bridge 500 m long in 30 seconds and a platform 250 m long in 20 seconds. What is the speed of the train?",
    "options": {
      "A": "75 km/h",
      "B": "90 km/h",
      "C": "100 km/h",
      "D": "108 km/h"
    },
    "correctAnswer": "B",
    "explanation": "Difference in distance = 500 - 250 = 250 m. Difference in time = 30 - 20 = 10 s. Speed = 250 m / 10 s = 25 m/s = 25 × (18/5) = 90 km/h.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Train problems",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_71",
    "questionText": "The difference between simple interest and compound interest (compounded annually) on a certain sum of money for 2 years at 8% per annum is Rs. 96. What is the principal sum?",
    "options": {
      "A": "Rs. 12,000",
      "B": "Rs. 15,000",
      "C": "Rs. 18,000",
      "D": "Rs. 20,000"
    },
    "correctAnswer": "B",
    "explanation": "Difference for 2 years is given by D = P(R/100)². So 96 = P(8/100)² = P(64/10000) ⇒ P = (96 × 10000)/64 = 15,000.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_72",
    "questionText": "If the difference between CI and SI on a sum of money for 3 years at 10% per annum is Rs. 155, what is the principal?",
    "options": {
      "A": "Rs. 4,000",
      "B": "Rs. 4,500",
      "C": "Rs. 5,000",
      "D": "Rs. 6,000"
    },
    "correctAnswer": "C",
    "explanation": "For 3 years, D = P(R/100)² × (3 + R/100). Here R = 10, so 155 = P(10/100)² × (3 + 10/100) = P(1/100) × (3.1) = 31P / 1000 ⇒ P = (155 × 1000)/31 = 5,000.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_73",
    "questionText": "A sum of money invested at compound interest doubles itself in 4 years. In how many years will it become 8 times itself at the same interest rate?",
    "options": {
      "A": "8 years",
      "B": "12 years",
      "C": "16 years",
      "D": "20 years"
    },
    "correctAnswer": "B",
    "explanation": "At compound interest, if an amount becomes 2 times in 4 years, it will become 2³ = 8 times in 4 × 3 = 12 years.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_74",
    "questionText": "A sum of money amounts to Rs. 4,840 in 2 years and to Rs. 5,324 in 3 years at compound interest compounded annually. What is the rate of interest per annum?",
    "options": {
      "A": "8%",
      "B": "9%",
      "C": "10%",
      "D": "12%"
    },
    "correctAnswer": "C",
    "explanation": "The interest for the 3rd year is 5324 - 4840 = Rs. 484 on the principal of Rs. 4,840. Rate = (484 / 4840) × 100 = 10% per annum.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_75",
    "questionText": "What is the compound interest on Rs. 10,000 for 1.5 years at 10% per annum, compounded half-yearly?",
    "options": {
      "A": "Rs. 1,500",
      "B": "Rs. 1,576.25",
      "C": "Rs. 1,600",
      "D": "Rs. 1,655"
    },
    "correctAnswer": "B",
    "explanation": "Compounded half-yearly: Rate = 10/2 = 5% per half-year, Time = 1.5 × 2 = 3 periods. Amount = 10000 × (1 + 5/100)³ = 10000 × (1.05)³ = 10000 × 1.157625 = Rs. 11,576.25. CI = 11,576.25 - 10000 = Rs. 1,576.25.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_76",
    "questionText": "A sum of money at simple interest amounts to Rs. 2,240 in 2 years and to Rs. 2,600 in 5 years. What is the principal sum?",
    "options": {
      "A": "Rs. 1,800",
      "B": "Rs. 1,900",
      "C": "Rs. 2,000",
      "D": "Rs. 2,050"
    },
    "correctAnswer": "C",
    "explanation": "SI for 3 years (from year 2 to 5) = 2600 - 2240 = Rs. 360. SI for 1 year = 360 / 3 = Rs. 120. SI for 2 years = 120 × 2 = Rs. 240. Principal = Amount after 2 years - SI for 2 years = 2240 - 240 = Rs. 2,000.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_77",
    "questionText": "In what time will Rs. 1,000 amount to Rs. 1,331 at 20% per annum compounded semi-annually?",
    "options": {
      "A": "1 year",
      "B": "1.5 years",
      "C": "2 years",
      "D": "2.5 years"
    },
    "correctAnswer": "B",
    "explanation": "Half-yearly rate = 20/2 = 10% = 0.10. Formula: 1331 = 1000(1 + 0.10)^n ⇒ 1.331 = (1.1)^n ⇒ (1.1)³ = (1.1)^n ⇒ n = 3 half-years = 1.5 years.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_78",
    "questionText": "A sum invested at simple interest triples itself in 10 years. In how many years will it become 5 times itself at the same rate?",
    "options": {
      "A": "15 years",
      "B": "18 years",
      "C": "20 years",
      "D": "25 years"
    },
    "correctAnswer": "C",
    "explanation": "Tripling means interest earned is 2P in 10 years. Rate = (2P × 100)/(P × 10) = 20%. To become 5 times, interest earned must be 4P. Time = (4P × 100)/(P × 20) = 20 years.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_79",
    "questionText": "What is the compound interest on Rs. 12,000 for 3 years if the rate of interest is 5% for the 1st year, 6% for the 2nd year, and 8% for the 3rd year?",
    "options": {
      "A": "Rs. 2,156.40",
      "B": "Rs. 2,246.80",
      "C": "Rs. 2,428.80",
      "D": "Rs. 2,512.40"
    },
    "correctAnswer": "C",
    "explanation": "Amount = 12000 × (1 + 5/100) × (1 + 6/100) × (1 + 8/100) = 12000 × 1.05 × 1.06 × 1.08 = 14,428.80. CI = 14,428.80 - 12000 = Rs. 2,428.80.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_80",
    "questionText": "A man borrows Rs. 2,550 to be paid back with compound interest at 4% per annum in two equal annual installments. What is the value of each installment?",
    "options": {
      "A": "Rs. 1,300",
      "B": "Rs. 1,352",
      "C": "Rs. 1,375",
      "D": "Rs. 1,400"
    },
    "correctAnswer": "B",
    "explanation": "Let installment be x. P = x/(1 + 4/100) + x/(1 + 4/100)² = x/(26/25) + x/(26/25)² = (25x/26) + (625x/676) = (650x + 625x)/676 = 1275x / 676. 2550 = 1275x / 676 ⇒ x = (2550 × 676)/1275 = 2 × 676 = Rs. 1,352.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_81",
    "questionText": "If Rs. 8,000 amounts to Rs. 9,261 in 3 years at compound interest, what is the rate of interest per annum?",
    "options": {
      "A": "4%",
      "B": "5%",
      "C": "6%",
      "D": "7%"
    },
    "correctAnswer": "B",
    "explanation": "A/P = (1 + r/100)³ ⇒ 9261/8000 = (1 + r/100)³ ⇒ (21/20)³ = (1 + r/100)³ ⇒ 1 + r/100 = 21/20 ⇒ r/100 = 1/20 ⇒ r = 5%.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_82",
    "questionText": "The simple interest on a sum of money for 3 years at 6% per annum is Rs. 90. What would be the compound interest on the same sum at the same rate and for the same period?",
    "options": {
      "A": "Rs. 92.50",
      "B": "Rs. 94.60",
      "C": "Rs. 95.51",
      "D": "Rs. 96.20"
    },
    "correctAnswer": "C",
    "explanation": "SI = (P × 3 × 6)/100 = 90 ⇒ 18P/100 = 90 ⇒ P = Rs. 500. CI = 500[(1 + 0.06)³ - 1] = 500[1.191016 - 1] = 500 × 0.191016 = Rs. 95.508 ≈ Rs. 95.51.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_83",
    "questionText": "At what rate percent per annum will a sum of Rs. 6,000 yield a compound interest of Rs. 1,260 in 2 years?",
    "options": {
      "A": "8%",
      "B": "10%",
      "C": "12%",
      "D": "15%"
    },
    "correctAnswer": "B",
    "explanation": "Amount = 6000 + 1260 = Rs. 7,260. A/P = 7260/6000 = 1.21. So (1 + r/100)² = 1.21 ⇒ 1 + r/100 = 1.1 ⇒ r/100 = 0.10 ⇒ r = 10%.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Medium"
  },
  {
    "_id": "math_spec_84",
    "questionText": "A sum of money doubles itself at simple interest in 8 years. What is the rate of interest per annum?",
    "options": {
      "A": "10%",
      "B": "12%",
      "C": "12.5%",
      "D": "14%"
    },
    "correctAnswer": "C",
    "explanation": "Interest earned = P in 8 years. Rate = (P × 100)/(P × 8) = 100/8 = 12.5% per annum.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Easy"
  },
  {
    "_id": "math_spec_85",
    "questionText": "The simple interest on a certain sum for 2 years is Rs. 120, while the compound interest on the same sum for 2 years at the same rate is Rs. 129. What is the rate of interest?",
    "options": {
      "A": "12%",
      "B": "14%",
      "C": "15%",
      "D": "16%"
    },
    "correctAnswer": "C",
    "explanation": "SI for 1 year = 120/2 = Rs. 60. The difference of 129 - 120 = Rs. 9 is the interest on the first year's interest of Rs. 60. Rate = (9 / 60) × 100 = 15% per annum.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_86",
    "questionText": "A bank offers 5% compound interest calculated on half-yearly basis. A customer deposits Rs. 1,600 each on 1st January and 1st July of a year. At the end of the year, what total interest has he earned?",
    "options": {
      "A": "Rs. 120",
      "B": "Rs. 121",
      "C": "Rs. 122",
      "D": "Rs. 123"
    },
    "correctAnswer": "B",
    "explanation": "Half-yearly rate = 2.5% = 0.025. Deposit 1 (runs for 2 half-years): 1600 × (1.025)² = 1681. Deposit 2 (runs for 1 half-year): 1600 × (1.025) = 1640. Total Amount = 1681 + 1640 = 3321. Total Principal deposited = 1600 + 1600 = 3200. Total Interest = 3321 - 3200 = Rs. 121.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_87",
    "questionText": "If the simple interest on a sum of money at 5% per annum for 3 years is Rs. 1,200, what will be the compound interest on the same sum at the same rate for the same time?",
    "options": {
      "A": "Rs. 1,245",
      "B": "Rs. 1,261",
      "C": "Rs. 1,272",
      "D": "Rs. 1,290"
    },
    "correctAnswer": "B",
    "explanation": "SI = (P × 3 × 5)/100 = 1200 ⇒ 15P/100 = 1200 ⇒ P = Rs. 8,000. CI = 8000[(1.05)³ - 1] = 8000[1.157625 - 1] = 8000 × 0.157625 = Rs. 1,261.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_88",
    "questionText": "A sum of money amounts to Rs. 6,690 after 3 years and to Rs. 10,035 after 6 years on compound interest. What is the initial principal sum?",
    "options": {
      "A": "Rs. 4,120",
      "B": "Rs. 4,260",
      "C": "Rs. 4,460",
      "D": "Rs. 4,680"
    },
    "correctAnswer": "C",
    "explanation": "Let A₁ = P(1 + r)³ = 6690 and A₂ = P(1 + r)⁶ = 10035. Dividing gives (1 + r)³ = 10035 / 6690 = 3/2 = 1.5. Substitute back: P(3/2) = 6690 ⇒ P = (6690 × 2)/3 = 4,460.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_89",
    "questionText": "What annual payment will discharge a debt of Rs. 1,025 due in 2 years at 5% compound interest per annum?",
    "options": {
      "A": "Rs. 525",
      "B": "Rs. 551.25",
      "C": "Rs. 560",
      "D": "Rs. 580"
    },
    "correctAnswer": "B",
    "explanation": "Debt of 1025 is the present value. Let annual payment be x: x/(1.05) + x/(1.05)² = 1025 ⇒ (20x/21) + (400x/441) = 1025 ⇒ (420x + 400x)/441 = 1025 ⇒ 820x/441 = 1025 ⇒ x = (1025 × 441)/820 = 1.25 × 441 = Rs. 551.25.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Hard"
  },
  {
    "_id": "math_spec_90",
    "questionText": "If a sum of Rs. 1,200 becomes Rs. 1,440 in 2 years at simple interest, what will Rs. 1,800 become in 3 years at the same rate?",
    "options": {
      "A": "Rs. 2,160",
      "B": "Rs. 2,240",
      "C": "Rs. 2,340",
      "D": "Rs. 2,400"
    },
    "correctAnswer": "C",
    "explanation": "SI = 1440 - 1200 = Rs. 240 in 2 years. Rate = (240 × 100)/(1200 × 2) = 10% per annum. For Rs. 1,800 in 3 years at 10%: SI = (1800 × 3 × 10)/100 = Rs. 540. Amount = 1800 + 540 = Rs. 2,340.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Compound and Simple Interest",
    "difficulty": "Medium"
  }
];

const MATH_LIMITS_MCQS = [
  {
    "_id": "math_limit_1",
    "questionText": "What is the value of the limit: lim (x → 0) [sin(5x) / sin(3x)]?",
    "options": {
      "A": "3/5",
      "B": "1",
      "C": "5/3",
      "D": "15"
    },
    "correctAnswer": "C",
    "explanation": "lim (x → 0) [sin(5x) / sin(3x)] = lim (x → 0) [(sin(5x)/(5x) * 5) / (sin(3x)/(3x) * 3)]. Since lim (u → 0) [sin(u)/u] = 1, the limit is (1 * 5) / (1 * 3) = 5/3.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Easy"
  },
  {
    "_id": "math_limit_2",
    "questionText": "Evaluate the limit: lim (x → 0) [(1 - cos(4x)) / x²].",
    "options": {
      "A": "4",
      "B": "8",
      "C": "16",
      "D": "2"
    },
    "correctAnswer": "B",
    "explanation": "Using the standard identity 1 - cos(θ) = 2 sin²(θ/2): 1 - cos(4x) = 2 sin²(2x). Then lim (x → 0) [2 sin²(2x) / x²] = 2 * lim (x → 0) [sin(2x)/x]² = 2 * (2)² = 2 * 4 = 8. Alternatively, applying L'Hôpital's rule twice: 4 sin(4x) / (2x) → 16 cos(4x) / 2 = 8.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_3",
    "questionText": "What is the value of: lim (x → 0) [(tan(x) - sin(x)) / x³]?",
    "options": {
      "A": "0",
      "B": "1/2",
      "C": "1",
      "D": "2"
    },
    "correctAnswer": "B",
    "explanation": "tan(x) - sin(x) = sin(x)[(1/cos(x)) - 1] = sin(x)(1 - cos(x)) / cos(x). Then [tan(x) - sin(x)] / x³ = [sin(x)/x] * [(1 - cos(x))/x²] * [1/cos(x)]. As x → 0, this evaluates to 1 * (1/2) * 1 = 1/2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_4",
    "questionText": "Evaluate: lim (x → 0) [(e^(3x) - 1) / ln(1 + 2x)].",
    "options": {
      "A": "1/2",
      "B": "1",
      "C": "3/2",
      "D": "3"
    },
    "correctAnswer": "C",
    "explanation": "Rewrite as [ (e^(3x) - 1)/(3x) * 3 ] / [ (ln(1 + 2x)/(2x)) * 2 ]. Since lim (u → 0) [(e^u - 1)/u] = 1 and lim (v → 0) [ln(1 + v)/v] = 1, the limit equals (1 * 3) / (1 * 2) = 3/2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_5",
    "questionText": "Find the value of: lim (x → 0) [(√(1 + x) - √(1 - x)) / x].",
    "options": {
      "A": "0",
      "B": "1/2",
      "C": "1",
      "D": "2"
    },
    "correctAnswer": "C",
    "explanation": "Multiply numerator and denominator by conjugate (√(1 + x) + √(1 - x)): [(1 + x) - (1 - x)] / [x(√(1 + x) + √(1 - x))] = 2x / [x(√(1 + x) + √(1 - x))] = 2 / (√(1 + x) + √(1 - x)). Setting x = 0 gives 2 / (1 + 1) = 1.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_6",
    "questionText": "Evaluate: lim (x → 0) [( (1 + x)^(1/3) - 1 ) / x].",
    "options": {
      "A": "1/3",
      "B": "1/2",
      "C": "1",
      "D": "3"
    },
    "correctAnswer": "A",
    "explanation": "By standard limit formula lim (x → 0) [(1 + x)^n - 1] / x = n (or by differentiating f(x) = (1 + x)^(1/3) at x = 0): f'(0) = (1/3)(1 + 0)^(-2/3) = 1/3.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_7",
    "questionText": "What is the value of: lim (x → 0) (1 + 3x)^(1/x)?",
    "options": {
      "A": "1",
      "B": "e",
      "C": "e³",
      "D": "e^(1/3)"
    },
    "correctAnswer": "C",
    "explanation": "This is of the indeterminate form 1^∞. Formula: lim (x → 0) (1 + ax)^(1/x) = e^a. Here a = 3, so the limit is e³.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_8",
    "questionText": "Evaluate the limit: lim (x → 0) (cos x)^(1 / x²).",
    "options": {
      "A": "1",
      "B": "e",
      "C": "e^(-1/2)",
      "D": "e^(-1)"
    },
    "correctAnswer": "C",
    "explanation": "Indeterminate form 1^∞. Let L = lim (x → 0) (cos x)^(1/x²). Then ln(L) = lim (x → 0) [ln(cos x) / x²]. Using L'Hôpital: lim (x → 0) [-tan x / (2x)] = -1/2 * 1 = -1/2. Therefore, L = e^(-1/2) = 1/√e.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_9",
    "questionText": "Find the limit: lim (x → ∞) [(x + 5) / (x + 1)]^x.",
    "options": {
      "A": "e",
      "B": "e²",
      "C": "e⁴",
      "D": "e⁵"
    },
    "correctAnswer": "C",
    "explanation": "Rewrite [(x + 5)/(x + 1)]^x = [1 + 4/(x + 1)]^x. For form 1^∞, exponent = lim (x → ∞) x * [(x + 5)/(x + 1) - 1] = lim (x → ∞) [4x / (x + 1)] = 4. Hence, the limit is e⁴.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_10",
    "questionText": "Evaluate: lim (x → 2) [(x⁵ - 32) / (x - 2)].",
    "options": {
      "A": "16",
      "B": "32",
      "C": "64",
      "D": "80"
    },
    "correctAnswer": "D",
    "explanation": "Using the formula lim (x → a) [(x^n - a^n) / (x - a)] = n * a^(n - 1). Here a = 2, n = 5: 5 * (2)^(5 - 1) = 5 * 2⁴ = 5 * 16 = 80.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Easy"
  },
  {
    "_id": "math_limit_11",
    "questionText": "What is the value of: lim (x → 0) [x² * sin(1/x)]?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "-1",
      "D": "Does not exist"
    },
    "correctAnswer": "A",
    "explanation": "Since -1 ≤ sin(1/x) ≤ 1 for all x ≠ 0, multiplying by x² gives -x² ≤ x² sin(1/x) ≤ x². Since lim (x → 0) (-x²) = 0 and lim (x → 0) (x²) = 0, by the Squeeze (Sandwich) Theorem, lim (x → 0) [x² sin(1/x)] = 0.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_12",
    "questionText": "Evaluate the limit: lim (x → 0) [|x| / x].",
    "options": {
      "A": "1",
      "B": "-1",
      "C": "0",
      "D": "Does not exist"
    },
    "correctAnswer": "D",
    "explanation": "Right-hand limit: as x → 0⁺, |x| = x, so lim (x → 0⁺) [x / x] = 1. Left-hand limit: as x → 0⁻, |x| = -x, so lim (x → 0⁻) [-x / x] = -1. Since LHL ≠ RHL, the limit does not exist.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Easy"
  },
  {
    "_id": "math_limit_13",
    "questionText": "Find the limit: lim (x → ∞) [√(x² + 6x) - x].",
    "options": {
      "A": "0",
      "B": "3",
      "C": "6",
      "D": "∞"
    },
    "correctAnswer": "B",
    "explanation": "Rationalize: [√(x² + 6x) - x] * [√(x² + 6x) + x] / [√(x² + 6x) + x] = [(x² + 6x) - x²] / [√(x² + 6x) + x] = 6x / [x(√(1 + 6/x) + 1)]. As x → ∞, this approaches 6 / (1 + 1) = 3.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_14",
    "questionText": "Evaluate: lim (x → 0) [(5^x - 3^x) / x].",
    "options": {
      "A": "2",
      "B": "ln(5/3)",
      "C": "ln(15)",
      "D": "ln(2)"
    },
    "correctAnswer": "B",
    "explanation": "Using the standard limit lim (x → 0) [(a^x - 1)/x] = ln(a): lim (x → 0) [((5^x - 1) - (3^x - 1)) / x] = ln(5) - ln(3) = ln(5/3).",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_15",
    "questionText": "Evaluate: lim (x → 0) [ln(1 + 4x) / (3x)].",
    "options": {
      "A": "3/4",
      "B": "1",
      "C": "4/3",
      "D": "4"
    },
    "correctAnswer": "C",
    "explanation": "lim (x → 0) [ln(1 + 4x) / (3x)] = (4/3) * lim (x → 0) [ln(1 + 4x) / (4x)] = (4/3) * 1 = 4/3.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Easy"
  },
  {
    "_id": "math_limit_16",
    "questionText": "What is: lim (x → 0) [sin(π * cos²(x)) / x²]?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "π",
      "D": "2π"
    },
    "correctAnswer": "C",
    "explanation": "Since cos²(x) = 1 - sin²(x), sin(π cos² x) = sin(π(1 - sin² x)) = sin(π - π sin² x) = sin(π sin² x). Then lim (x → 0) [sin(π sin² x) / x²] = lim (x → 0) [sin(π sin² x) / (π sin² x)] * [π (sin x / x)²] = 1 * π * (1)² = π.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_17",
    "questionText": "Evaluate the limit: lim (x → 0) [arctan(2x) / sin(3x)].",
    "options": {
      "A": "2/3",
      "B": "3/2",
      "C": "1",
      "D": "6"
    },
    "correctAnswer": "A",
    "explanation": "Rewrite as [(arctan(2x)/(2x)) * 2] / [(sin(3x)/(3x)) * 3]. Since lim (u → 0) [arctan(u)/u] = 1 and lim (v → 0) [sin(v)/v] = 1, the result is (1 * 2) / (1 * 3) = 2/3.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_18",
    "questionText": "Evaluate: lim (x → 0) [x * [1/x]], where [.] denotes the greatest integer function.",
    "options": {
      "A": "0",
      "B": "1",
      "C": "Does not exist",
      "D": "∞"
    },
    "correctAnswer": "B",
    "explanation": "By definition of the floor function: 1/x - 1 < [1/x] ≤ 1/x. For x > 0: 1 - x < x[1/x] ≤ 1. As x → 0⁺, both sides tend to 1. For x < 0: 1 ≤ x[1/x] < 1 - x. As x → 0⁻, both sides tend to 1. By the Squeeze Theorem, lim (x → 0) x[1/x] = 1.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_19",
    "questionText": "What is: lim (x → π/4) [(sin x - cos x) / (x - π/4)]?",
    "options": {
      "A": "1",
      "B": "√2",
      "C": "1/√2",
      "D": "-√2"
    },
    "correctAnswer": "B",
    "explanation": "sin x - cos x = √2 (sin x cos(π/4) - cos x sin(π/4)) = √2 sin(x - π/4). Let θ = x - π/4. As x → π/4, θ → 0. Then lim (θ → 0) [√2 sin θ / θ] = √2 * 1 = √2. (Alternatively, derivative of sin x - cos x at π/4 is cos(π/4) + sin(π/4) = √2/2 + √2/2 = √2).",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_20",
    "questionText": "Evaluate: lim (x → 0⁺) [x^x].",
    "options": {
      "A": "0",
      "B": "1",
      "C": "e",
      "D": "Undefined"
    },
    "correctAnswer": "B",
    "explanation": "Let y = x^x. Then ln(y) = x ln(x) = ln(x) / (1/x). As x → 0⁺, using L'Hôpital's rule: lim (x → 0⁺) [(1/x) / (-1/x²)] = lim (x → 0⁺) [-x] = 0. Therefore, y = e⁰ = 1.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_21",
    "questionText": "Evaluate: lim (x → 0) [(e^x - 1 - x) / x²].",
    "options": {
      "A": "0",
      "B": "1/2",
      "C": "1",
      "D": "2"
    },
    "correctAnswer": "B",
    "explanation": "Using Maclaurin series for e^x: e^x = 1 + x + x²/2! + x³/3! + ... Then e^x - 1 - x = x²/2 + x³/6 + ... Dividing by x² yields 1/2 + x/6 + ... As x → 0, the limit is 1/2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_22",
    "questionText": "Evaluate: lim (x → 0) [(cos(3x) - cos(5x)) / x²].",
    "options": {
      "A": "4",
      "B": "8",
      "C": "16",
      "D": "2"
    },
    "correctAnswer": "B",
    "explanation": "Formula: lim (x → 0) [(cos(ax) - cos(bx)) / x²] = (b² - a²) / 2. Here a = 3 and b = 5: (5² - 3²) / 2 = (25 - 9) / 2 = 16 / 2 = 8.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_23",
    "questionText": "Evaluate: lim (x → ∞) [x * sin(1/x)].",
    "options": {
      "A": "0",
      "B": "1",
      "C": "∞",
      "D": "Does not exist"
    },
    "correctAnswer": "B",
    "explanation": "Let y = 1/x. As x → ∞, y → 0. The expression becomes lim (y → 0) [sin(y) / y] = 1.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_24",
    "questionText": "If the function f(x) = (√(1 + kx) - √(1 - kx)) / x for x ≠ 0 is continuous at x = 0, what is the value of f(0)?",
    "options": {
      "A": "k/2",
      "B": "k",
      "C": "2k",
      "D": "1"
    },
    "correctAnswer": "B",
    "explanation": "For continuity, f(0) = lim (x → 0) f(x). Rationalizing the numerator: [(1 + kx) - (1 - kx)] / [x(√(1 + kx) + √(1 - kx))] = 2kx / [x(√(1 + kx) + √(1 - kx))] = 2k / (√(1 + kx) + √(1 - kx)). At x = 0, this evaluates to 2k / (1 + 1) = k. Thus, f(0) = k.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_25",
    "questionText": "What is: lim (n → ∞) [n! / ((n + 1)! - n!)]?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "e",
      "D": "∞"
    },
    "correctAnswer": "A",
    "explanation": "(n + 1)! - n! = (n + 1)n! - n! = n![(n + 1) - 1] = n * n!. Thus n! / ((n + 1)! - n!) = n! / (n * n!) = 1/n. As n → ∞, 1/n → 0.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_26",
    "questionText": "Evaluate the limit of the Riemann sum: lim (n → ∞) Σ [1 / (n + r)] for r = 1 to n.",
    "options": {
      "A": "1",
      "B": "ln(2)",
      "C": "ln(3)",
      "D": "1/2"
    },
    "correctAnswer": "B",
    "explanation": "Rewrite as (1/n) Σ [1 / (1 + r/n)]. This is the definition of the definite integral ∫₀¹ [1 / (1 + x)] dx = [ln(1 + x)]₀¹ = ln(2) - ln(1) = ln(2).",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_27",
    "questionText": "Evaluate: lim (x → 0) [(tan(x) - x) / (x - sin(x))].",
    "options": {
      "A": "1",
      "B": "2",
      "C": "-2",
      "D": "1/2"
    },
    "correctAnswer": "B",
    "explanation": "Using series expansions: tan(x) = x + x³/3 + O(x⁵) ⇒ tan(x) - x ≈ x³/3. sin(x) = x - x³/6 + O(x⁵) ⇒ x - sin(x) ≈ x³/6. The limit is (x³/3) / (x³/6) = 6/3 = 2.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  },
  {
    "_id": "math_limit_28",
    "questionText": "What is: lim (x → 0⁺) [1 / (1 + e^(1/x))]?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "1/2",
      "D": "∞"
    },
    "correctAnswer": "A",
    "explanation": "As x → 0⁺, 1/x → +∞, which means e^(1/x) → +∞. Therefore, 1 / (1 + e^(1/x)) → 1 / (1 + ∞) = 0.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_29",
    "questionText": "What is: lim (x → 0⁻) [1 / (1 + e^(1/x))]?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "1/2",
      "D": "Does not exist"
    },
    "correctAnswer": "B",
    "explanation": "As x → 0⁻, 1/x → -∞, which means e^(1/x) → 0. Therefore, 1 / (1 + e^(1/x)) → 1 / (1 + 0) = 1.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Medium"
  },
  {
    "_id": "math_limit_30",
    "questionText": "Evaluate: lim (x → 0) [(sin(x) - x + x³/6) / x⁵].",
    "options": {
      "A": "1/24",
      "B": "1/60",
      "C": "1/120",
      "D": "1/720"
    },
    "correctAnswer": "C",
    "explanation": "Using Taylor series for sin(x): sin(x) = x - x³/3! + x⁵/5! - ... = x - x³/6 + x⁵/120 - ... Therefore, sin(x) - x + x³/6 = x⁵/120 - O(x⁷). Dividing by x⁵ and taking x → 0 gives 1/120.",
    "category": {
      "_id": "cat_math",
      "name": "Mathematics"
    },
    "subCategory": "Limits",
    "difficulty": "Hard"
  }
];


const US_GEOGRAPHY_MCQS = [
  {
    "_id": "geog_us_1",
    "questionText": "Which river is the longest river in the United States?",
    "options": {
      "A": "Mississippi River",
      "B": "Missouri River",
      "C": "Colorado River",
      "D": "Rio Grande"
    },
    "correctAnswer": "B",
    "explanation": "The Missouri River is the longest river in the United States at approximately 2,341 miles (3,767 km), flowing into the Mississippi River just north of St. Louis.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_2",
    "questionText": "What is the highest mountain peak in the United States and North America?",
    "options": {
      "A": "Mount Whitney",
      "B": "Mount Rainier",
      "C": "Denali (Mount McKinley)",
      "D": "Mount Elbert"
    },
    "correctAnswer": "C",
    "explanation": "Denali (formerly named Mount McKinley) in the Alaska Range stands at 20,310 feet (6,190 meters) above sea level, making it the highest peak in North America.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_3",
    "questionText": "What is the highest mountain peak in the contiguous (lower 48) United States?",
    "options": {
      "A": "Mount Shasta",
      "B": "Mount Whitney",
      "C": "Mount Rainier",
      "D": "Pikes Peak"
    },
    "correctAnswer": "B",
    "explanation": "Mount Whitney in California's Sierra Nevada range is the highest summit in the contiguous United States with an elevation of 14,505 feet (4,421 m).",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_4",
    "questionText": "Which location in California is the lowest, driest, and hottest point in North America?",
    "options": {
      "A": "Salton Sea",
      "B": "Mojave Basin",
      "C": "Badwater Basin (Death Valley)",
      "D": "Imperial Valley"
    },
    "correctAnswer": "C",
    "explanation": "Badwater Basin in Death Valley National Park sits at 282 feet (86 m) below sea level, recording some of the hottest temperatures on Earth.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_5",
    "questionText": "Which of the five Great Lakes is located entirely within the territory of the United States?",
    "options": {
      "A": "Lake Superior",
      "B": "Lake Huron",
      "C": "Lake Michigan",
      "D": "Lake Erie"
    },
    "correctAnswer": "C",
    "explanation": "Lake Michigan is the only one of the five Great Lakes situated completely within the borders of the United States. The other four are shared with Canada.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_6",
    "questionText": "What is the largest of the Great Lakes by both surface area and volume?",
    "options": {
      "A": "Lake Superior",
      "B": "Lake Huron",
      "C": "Lake Michigan",
      "D": "Lake Ontario"
    },
    "correctAnswer": "A",
    "explanation": "Lake Superior is the world's largest freshwater lake by surface area (31,700 sq mi / 82,103 km²) and the largest Great Lake by volume.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_7",
    "questionText": "Which state is the largest in terms of total land area in the United States?",
    "options": {
      "A": "Texas",
      "B": "California",
      "C": "Montana",
      "D": "Alaska"
    },
    "correctAnswer": "D",
    "explanation": "Alaska is by far the largest US state by area, covering approximately 665,384 square miles—more than double the size of Texas.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_8",
    "questionText": "Which state has the smallest land area among all 50 US states?",
    "options": {
      "A": "Delaware",
      "B": "Rhode Island",
      "C": "Connecticut",
      "D": "Hawaii"
    },
    "correctAnswer": "B",
    "explanation": "Rhode Island is the smallest US state, covering an area of approximately 1,214 square miles (3,144 km²).",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_9",
    "questionText": "What is the deepest lake in the United States?",
    "options": {
      "A": "Lake Tahoe",
      "B": "Crater Lake",
      "C": "Lake Chelan",
      "D": "Lake Superior"
    },
    "correctAnswer": "B",
    "explanation": "Crater Lake in southwestern Oregon is the deepest lake in the US at 1,943 feet (592 m), formed by the collapse of Mount Mazama volcano ~7,700 years ago.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_10",
    "questionText": "Which river carved the world-famous Grand Canyon in northern Arizona?",
    "options": {
      "A": "Snake River",
      "B": "Rio Grande",
      "C": "Colorado River",
      "D": "Columbia River"
    },
    "correctAnswer": "C",
    "explanation": "The Colorado River carved the Grand Canyon over millions of years, cutting through nearly two billion years of Earth's geological history.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_11",
    "questionText": "The Four Corners Monument marks the quadripoint where which four US states meet?",
    "options": {
      "A": "Utah, Colorado, Arizona, New Mexico",
      "B": "Nevada, Utah, Arizona, California",
      "C": "Idaho, Wyoming, Utah, Colorado",
      "D": "Montana, Wyoming, South Dakota, North Dakota"
    },
    "correctAnswer": "A",
    "explanation": "The Four Corners is the only location in the United States where four states—Arizona, Colorado, New Mexico, and Utah—meet at a single point.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_12",
    "questionText": "Which US state has the longest total ocean coastline?",
    "options": {
      "A": "Florida",
      "B": "California",
      "C": "Hawaii",
      "D": "Alaska"
    },
    "correctAnswer": "D",
    "explanation": "Alaska has 6,640 miles of coastline, and when tidal shoreline (islands, bays, inlets) is included, it exceeds 33,900 miles—more than all other 49 states combined.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_13",
    "questionText": "Which is the only US state that borders exactly one other US state?",
    "options": {
      "A": "Maine",
      "B": "Florida",
      "C": "Washington",
      "D": "Rhode Island"
    },
    "correctAnswer": "A",
    "explanation": "Maine borders only one other US state—New Hampshire—to its west, while bordering the Canadian provinces of Quebec and New Brunswick.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_14",
    "questionText": "The Appalachian Mountains stretch from which southern US state northward into Canada?",
    "options": {
      "A": "Georgia",
      "B": "Alabama",
      "C": "Tennessee",
      "D": "North Carolina"
    },
    "correctAnswer": "B",
    "explanation": "The Appalachian chain extends approximately 1,500 miles from central Alabama in the southern United States northeast to Newfoundland in Canada.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Hard"
  },
  {
    "_id": "geog_us_15",
    "questionText": "Which mountain range forms the principal 'Continental Divide' of the Americas in the western United States?",
    "options": {
      "A": "Sierra Nevada",
      "B": "Cascade Range",
      "C": "Rocky Mountains",
      "D": "Appalachian Mountains"
    },
    "correctAnswer": "C",
    "explanation": "The Rocky Mountains host the Continental Divide, separating water drainage flowing into the Atlantic/Arctic oceans from drainage flowing to the Pacific Ocean.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_16",
    "questionText": "What is the capital of the United States, which is a federal district and not part of any state?",
    "options": {
      "A": "New York City",
      "B": "Philadelphia",
      "C": "Washington, D.C.",
      "D": "Boston"
    },
    "correctAnswer": "C",
    "explanation": "Washington, District of Columbia (D.C.) is the federal capital of the United States, established under Article I of the US Constitution.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_17",
    "questionText": "On which river is the federal capital, Washington, D.C., located?",
    "options": {
      "A": "Delaware River",
      "B": "Hudson River",
      "C": "Potomac River",
      "D": "Susquehanna River"
    },
    "correctAnswer": "C",
    "explanation": "Washington, D.C., is situated along the Potomac River, which separates it from the state of Virginia to its south and west.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_18",
    "questionText": "Which US state is the most populous in the nation?",
    "options": {
      "A": "Texas",
      "B": "Florida",
      "C": "New York",
      "D": "California"
    },
    "correctAnswer": "D",
    "explanation": "California is the most populous US state with approximately 39 million residents, followed by Texas and Florida.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_19",
    "questionText": "Which US state has the smallest population among all 50 states?",
    "options": {
      "A": "Vermont",
      "B": "Wyoming",
      "C": "Alaska",
      "D": "North Dakota"
    },
    "correctAnswer": "B",
    "explanation": "Wyoming is the least populous US state, with an estimated population of fewer than 585,000 residents.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_20",
    "questionText": "Yellowstone National Park, established in 1872 as the world's first national park, is primarily located in which state?",
    "options": {
      "A": "Montana",
      "B": "Wyoming",
      "C": "Idaho",
      "D": "Colorado"
    },
    "correctAnswer": "B",
    "explanation": "Approximately 96% of Yellowstone National Park is located in northwestern Wyoming, with small portions extending into Montana (3%) and Idaho (1%).",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_21",
    "questionText": "The famous hydrothermal feature 'Old Faithful' is located in which US National Park?",
    "options": {
      "A": "Yosemite National Park",
      "B": "Yellowstone National Park",
      "C": "Glacier National Park",
      "D": "Grand Teton National Park"
    },
    "correctAnswer": "B",
    "explanation": "Old Faithful is a cone geyser in Yellowstone National Park, Wyoming, famous for its highly predictable and frequent eruptions.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_22",
    "questionText": "Which river forms a major segment of the international border between the United States (Texas) and Mexico?",
    "options": {
      "A": "Colorado River",
      "B": "Rio Grande",
      "C": "Gila River",
      "D": "Pecos River"
    },
    "correctAnswer": "B",
    "explanation": "The Rio Grande (known as Río Bravo in Mexico) defines approximately 1,250 miles of the US-Mexico international border along Texas.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_23",
    "questionText": "What is the longest international land border in the world?",
    "options": {
      "A": "Russia–China border",
      "B": "Argentina–Chile border",
      "C": "Canada–United States border",
      "D": "Russia–Kazakhstan border"
    },
    "correctAnswer": "C",
    "explanation": "The Canada–United States border is the longest international land border in the world, spanning 5,525 miles (8,891 km), including Alaska's border.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_24",
    "questionText": "Which unique subtropical wetland ecosystem, nicknamed 'The River of Grass', covers southern Florida?",
    "options": {
      "A": "The Okefenokee Swamp",
      "B": "The Everglades",
      "C": "The Atchafalaya Basin",
      "D": "The Great Dismal Swamp"
    },
    "correctAnswer": "B",
    "explanation": "The Florida Everglades is a unique, slow-moving shallow river of grass draining Lake Okeechobee south into Florida Bay.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_25",
    "questionText": "Which US state has the greatest number of National Parks (9 national parks)?",
    "options": {
      "A": "Alaska",
      "B": "Utah",
      "C": "California",
      "D": "Colorado"
    },
    "correctAnswer": "C",
    "explanation": "California has 9 national parks (including Yosemite, Death Valley, Sequoia, Joshua Tree, and Redwood), the most of any state, followed by Alaska with 8.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_26",
    "questionText": "In which US state is the Great Salt Lake, the largest saltwater lake in the Western Hemisphere, located?",
    "options": {
      "A": "Nevada",
      "B": "Utah",
      "C": "Arizona",
      "D": "New Mexico"
    },
    "correctAnswer": "B",
    "explanation": "The Great Salt Lake is located in northern Utah and is a remnant of the prehistoric Lake Bonneville.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_27",
    "questionText": "Which narrow strait separates the Seward Peninsula of Alaska (USA) from the Chukchi Peninsula of Russia?",
    "options": {
      "A": "Bering Strait",
      "B": "Cook Inlet",
      "C": "Davis Strait",
      "D": "Strait of Juan de Fuca"
    },
    "correctAnswer": "A",
    "explanation": "The Bering Strait connects the Bering Sea to the Arctic Ocean, separating the US and Russia by only about 51 miles (82 km) at its narrowest point.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_28",
    "questionText": "What major transform fault line extends roughly 750 miles through coastal California?",
    "options": {
      "A": "New Madrid Fault",
      "B": "Cascadia Subduction Zone",
      "C": "San Andreas Fault",
      "D": "Wasatch Fault"
    },
    "correctAnswer": "C",
    "explanation": "The San Andreas Fault forms the tectonic boundary between the Pacific Plate and the North American Plate through California.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_29",
    "questionText": "Which stratovolcano in Washington state violently erupted on May 18, 1980, significantly altering the surrounding geography?",
    "options": {
      "A": "Mount Rainier",
      "B": "Mount St. Helens",
      "C": "Mount Hood",
      "D": "Mount Adams"
    },
    "correctAnswer": "B",
    "explanation": "Mount St. Helens in the Cascade Range erupted in May 1980, blowing off its northern face and reducing its elevation from 9,677 ft to 8,363 ft.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_30",
    "questionText": "What is the largest island in the United States by land area?",
    "options": {
      "A": "Oahu (Hawaii)",
      "B": "Kodiak Island (Alaska)",
      "C": "Long Island (New York)",
      "D": "Island of Hawaii (Big Island)"
    },
    "correctAnswer": "D",
    "explanation": "The Island of Hawaii (the 'Big Island') is the largest island in the US, covering 4,028 square miles, followed closely by Kodiak Island in Alaska (3,588 sq mi).",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Hard"
  },
  {
    "_id": "geog_us_31",
    "questionText": "Measured from its underwater base on the ocean floor to its peak, which Hawaiian volcano is the tallest mountain on Earth?",
    "options": {
      "A": "Mauna Loa",
      "B": "Kilauea",
      "C": "Mauna Kea",
      "D": "Haleakala"
    },
    "correctAnswer": "C",
    "explanation": "Mauna Kea rises 13,803 ft above sea level, but measured from its underwater base on the Pacific floor, it stands over 33,000 ft (10,000 m) tall.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_32",
    "questionText": "Which major desert in the southwestern US is famous as the native habitat of the giant Saguaro cactus?",
    "options": {
      "A": "Mojave Desert",
      "B": "Chihuahuan Desert",
      "C": "Sonoran Desert",
      "D": "Great Basin Desert"
    },
    "correctAnswer": "C",
    "explanation": "The Sonoran Desert, covering parts of Arizona and California, is the only place in the world where the giant Saguaro cactus grows naturally in the wild.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_33",
    "questionText": "The region in the central United States known for the highest frequency of destructive tornadoes is called:",
    "options": {
      "A": "Hurricane Alley",
      "B": "Tornado Alley",
      "C": "The Cyclone Belt",
      "D": "Twister Valley"
    },
    "correctAnswer": "B",
    "explanation": "Tornado Alley encompasses the Great Plains (including Texas, Oklahoma, Kansas, and Nebraska) where warm Gulf air collides with cold Canadian air.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_34",
    "questionText": "Niagara Falls sits on the international border between Ontario, Canada, and which US state?",
    "options": {
      "A": "Pennsylvania",
      "B": "New York",
      "C": "Michigan",
      "D": "Ohio"
    },
    "correctAnswer": "B",
    "explanation": "Niagara Falls is located on the Niagara River between the state of New York and the province of Ontario, linking Lake Erie to Lake Ontario.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_35",
    "questionText": "Which river is the largest river in North America flowing into the Pacific Ocean?",
    "options": {
      "A": "Colorado River",
      "B": "Columbia River",
      "C": "Yukon River",
      "D": "Fraser River"
    },
    "correctAnswer": "B",
    "explanation": "The Columbia River flows from the Canadian Rockies through Washington and Oregon into the Pacific, boasting the greatest discharge of any US Pacific river.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_36",
    "questionText": "What is the longest known cave system in the world, located in west-central Kentucky?",
    "options": {
      "A": "Carlsbad Caverns",
      "B": "Mammoth Cave",
      "C": "Luray Caverns",
      "D": "Wind Cave"
    },
    "correctAnswer": "B",
    "explanation": "Mammoth Cave National Park preserves the world's longest known cave system, with over 426 miles (686 km) of explored passageways.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_37",
    "questionText": "What is the largest estuary in the United States, bounded by Maryland and Virginia?",
    "options": {
      "A": "Puget Sound",
      "B": "San Francisco Bay",
      "C": "Chesapeake Bay",
      "D": "Tampa Bay"
    },
    "correctAnswer": "C",
    "explanation": "The Chesapeake Bay is the largest estuary in the United States, spanning roughly 200 miles long and fed by over 150 rivers and streams.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_38",
    "questionText": "In which US state are the Black Hills and the Mount Rushmore National Memorial located?",
    "options": {
      "A": "North Dakota",
      "B": "South Dakota",
      "C": "Wyoming",
      "D": "Montana"
    },
    "correctAnswer": "B",
    "explanation": "Mount Rushmore is carved into the granite rock of the Black Hills in Pennington County, South Dakota.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_39",
    "questionText": "The continuous 2,190-mile Appalachian National Scenic Trail connects Springer Mountain in Georgia to which mountain peak in Maine?",
    "options": {
      "A": "Mount Washington",
      "B": "Mount Katahdin",
      "C": "Mount Mansfield",
      "D": "Mount Marcy"
    },
    "correctAnswer": "B",
    "explanation": "The Appalachian Trail terminates at its northern terminus on Mount Katahdin (5,269 ft) in Baxter State Park, Maine.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Hard"
  },
  {
    "_id": "geog_us_40",
    "questionText": "Which state is known geographically as the 'Land of 10,000 Lakes'?",
    "options": {
      "A": "Wisconsin",
      "B": "Michigan",
      "C": "Minnesota",
      "D": "Maine"
    },
    "correctAnswer": "C",
    "explanation": "Minnesota is officially nicknamed the 'Land of 10,000 Lakes' because it contains 11,842 lakes measuring 10 acres or larger.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_41",
    "questionText": "Which five US states border the Gulf of Mexico?",
    "options": {
      "A": "Texas, Louisiana, Mississippi, Alabama, Florida",
      "B": "Texas, Oklahoma, Louisiana, Georgia, Florida",
      "C": "California, Arizona, New Mexico, Texas, Louisiana",
      "D": "North Carolina, South Carolina, Georgia, Florida, Alabama"
    },
    "correctAnswer": "A",
    "explanation": "The five US Gulf Coast states are Texas, Louisiana, Mississippi, Alabama, and Florida.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_42",
    "questionText": "The Great Basin, a large arid endorheic watershed where no surface water reaches the ocean, covers most of which state?",
    "options": {
      "A": "Arizona",
      "B": "Nevada",
      "C": "New Mexico",
      "D": "Idaho"
    },
    "correctAnswer": "B",
    "explanation": "The Great Basin covers nearly all of Nevada, where rivers and streams drain into internal sinks and evaporating saline lakes.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_43",
    "questionText": "Which volcanic peak is the highest mountain in the state of Washington and the Cascade Range?",
    "options": {
      "A": "Mount Shasta",
      "B": "Mount Hood",
      "C": "Mount Rainier",
      "D": "Mount Baker"
    },
    "correctAnswer": "C",
    "explanation": "Mount Rainier (14,411 ft / 4,392 m) is an active stratovolcano and the highest summit in Washington state and the Cascade Range.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_44",
    "questionText": "Which territory is the most populous unincorporated territory of the United States?",
    "options": {
      "A": "Guam",
      "B": "Puerto Rico",
      "C": "U.S. Virgin Islands",
      "D": "American Samoa"
    },
    "correctAnswer": "B",
    "explanation": "Puerto Rico in the Caribbean is the most populous US territory, with a population of approximately 3.2 million American citizens.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_45",
    "questionText": "Which US river flows through the Grand Canyon and fills both Lake Mead and Lake Powell reservoirs?",
    "options": {
      "A": "Snake River",
      "B": "Colorado River",
      "C": "Rio Grande",
      "D": "Platte River"
    },
    "correctAnswer": "B",
    "explanation": "The Colorado River was dammed to form Lake Powell (by Glen Canyon Dam) and Lake Mead (by Hoover Dam), supplying water across the American Southwest.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_46",
    "questionText": "In which California national park is General Sherman, the world's largest living single-stem tree by volume, found?",
    "options": {
      "A": "Yosemite National Park",
      "B": "Sequoia National Park",
      "C": "Redwood National Park",
      "D": "Kings Canyon National Park"
    },
    "correctAnswer": "B",
    "explanation": "The General Sherman giant sequoia tree in Sequoia National Park, California, is estimated at ~52,500 cubic feet (1,487 m³) in volume.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_47",
    "questionText": "What is the name of the prominent bay and fjord-like estuary located in western Washington state, connecting to the Pacific via the Strait of Juan de Fuca?",
    "options": {
      "A": "San Francisco Bay",
      "B": "Puget Sound",
      "C": "Chesapeake Bay",
      "D": "Monterey Bay"
    },
    "correctAnswer": "B",
    "explanation": "Puget Sound is an extensive inlet of the Pacific Ocean in northwestern Washington, serving cities including Seattle, Tacoma, and Olympia.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Medium"
  },
  {
    "_id": "geog_us_48",
    "questionText": "Which river basin is the second longest in the United States, flowing from Minnesota to the Gulf of Mexico?",
    "options": {
      "A": "Missouri River",
      "B": "Mississippi River",
      "C": "Yukon River",
      "D": "Rio Grande"
    },
    "correctAnswer": "B",
    "explanation": "The Mississippi River is the second longest US river at 2,340 miles, but possesses the greatest discharge volume of any river system in North America.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_49",
    "questionText": "Which US state consists entirely of an archipelago located in the central Pacific Ocean?",
    "options": {
      "A": "Alaska",
      "B": "Florida",
      "C": "Hawaii",
      "D": "Puerto Rico"
    },
    "correctAnswer": "C",
    "explanation": "Hawaii was admitted as the 50th US state in August 1959 and is the only island state in the nation, located in Polynesia/Oceania.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Easy"
  },
  {
    "_id": "geog_us_50",
    "questionText": "Which extensive upland plateau region spans across southern Missouri, northern Arkansas, and parts of Oklahoma and Kansas?",
    "options": {
      "A": "The Piedmont",
      "B": "The Cumberland Plateau",
      "C": "The Ozarks (Ozark Plateau)",
      "D": "The Colorado Plateau"
    },
    "correctAnswer": "C",
    "explanation": "The Ozarks, also called the Ozark Mountains or Ozark Plateau, is a physiographic highland region covering large portions of Missouri and Arkansas.",
    "category": {
      "_id": "cat_geog",
      "name": "Geography"
    },
    "subCategory": "United States Geography",
    "difficulty": "Hard"
  }
];




const FIA_AD_LEGAL_MCQS = [
  {
    "_id": "fia_ad_1",
    "questionText": "Select the word that is most nearly OPPOSITE in meaning to 'EQUIVOCAL':",
    "options": {
      "A": "Ambiguous",
      "B": "Unambiguous",
      "C": "Pretentious",
      "D": "Deceptive"
    },
    "correctAnswer": "B",
    "explanation": "'Equivocal' means open to more than one interpretation or ambiguous. Its opposite is 'unambiguous' or clear.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_2",
    "questionText": "Choose the word most SIMILAR in meaning to 'PERNICIOUS':",
    "options": {
      "A": "Harmful",
      "B": "Innocuous",
      "C": "Salubrious",
      "D": "Beneficial"
    },
    "correctAnswer": "A",
    "explanation": "'Pernicious' means having a harmful effect, especially in a gradual or subtle way.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_3",
    "questionText": "Choose the correct sentence structure:",
    "options": {
      "A": "Neither the prosecutor nor the defense attorneys was present in court.",
      "B": "Neither the prosecutor nor the defense attorneys were present in court.",
      "C": "Neither the prosecutor or the defense attorneys were present in court.",
      "D": "Neither the prosecutor nor the defense attorneys has been present in court."
    },
    "correctAnswer": "B",
    "explanation": "With correlative conjunctions 'neither... nor', the verb agrees with the closer subject ('defense attorneys' is plural, so 'were' is correct).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_4",
    "questionText": "Identify the correct option to fill in the blank: 'The accused was found guilty _____ embezzling state funds.'",
    "options": {
      "A": "for",
      "B": "of",
      "C": "with",
      "D": "in"
    },
    "correctAnswer": "B",
    "explanation": "The adjective 'guilty' takes the preposition 'of' ('guilty of a crime').",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_5",
    "questionText": "Select the sentence with correct conditional usage:",
    "options": {
      "A": "If the investigator had gathered the forensic evidence, the suspect would not be acquitted.",
      "B": "If the investigator had gathered the forensic evidence, the suspect would not have been acquitted.",
      "C": "If the investigator gathered the forensic evidence, the suspect would not have been acquitted.",
      "D": "If the investigator would have gathered the forensic evidence, the suspect will not be acquitted."
    },
    "correctAnswer": "B",
    "explanation": "Third conditional (past unreal condition): 'If + past perfect (had gathered)... would + have + past participle (would not have been acquitted)'.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_6",
    "questionText": "Choose the word closest in meaning to 'OBSEQUIOUS':",
    "options": {
      "A": "Servile",
      "B": "Arrogant",
      "C": "Belligerent",
      "D": "Omniscient"
    },
    "correctAnswer": "A",
    "explanation": "'Obsequious' means obedient or attentive to an excessive or servile degree.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_7",
    "questionText": "Select the correct preposition: 'The suspect refused to comply _____ the summons issued by the investigating officer.'",
    "options": {
      "A": "with",
      "B": "to",
      "C": "by",
      "D": "at"
    },
    "correctAnswer": "A",
    "explanation": "The verb 'comply' takes the preposition 'with' ('comply with orders/summons').",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_8",
    "questionText": "Choose the correct indirect speech form of: He said, 'I have completed the investigation.'",
    "options": {
      "A": "He said that he completed the investigation.",
      "B": "He said that he has completed the investigation.",
      "C": "He said that he had completed the investigation.",
      "D": "He told that he had completed the investigation."
    },
    "correctAnswer": "C",
    "explanation": "Present perfect 'have completed' shifts into past perfect 'had completed' in indirect speech with past reporting verb 'said'.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_9",
    "questionText": "What does the Latin phrase 'PRIMA FACIE' mean?",
    "options": {
      "A": "Based on the first impression / at first sight",
      "B": "Beyond all reasonable doubt",
      "C": "Guilty mind",
      "D": "In the course of proceedings"
    },
    "correctAnswer": "A",
    "explanation": "'Prima facie' literally translates to 'at first face' or based on the first impression; accepted as correct until proved otherwise.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_10",
    "questionText": "Identify the sentence that contains a dangling modifier:",
    "options": {
      "A": "Walking into the courtroom, the documents fell from the lawyer's briefcase.",
      "B": "Walking into the courtroom, the lawyer dropped the documents.",
      "C": "As the lawyer walked into the courtroom, the documents fell.",
      "D": "The lawyer, walking into the courtroom, accidentally dropped the documents."
    },
    "correctAnswer": "A",
    "explanation": "In option A, 'Walking into the courtroom' illogically modifies 'the documents' instead of the person walking.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_11",
    "questionText": "Choose the antonym of 'SAGACIOUS':",
    "options": {
      "A": "Foolish",
      "B": "Wise",
      "C": "Insightful",
      "D": "Judicious"
    },
    "correctAnswer": "A",
    "explanation": "'Sagacious' means having or showing keen mental discernment and good judgment; its antonym is 'foolish' or ignorant.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_12",
    "questionText": "Identify the correctly punctuated and structured sentence:",
    "options": {
      "A": "The judge arrived early, however the stenographer was late.",
      "B": "The judge arrived early; however, the stenographer was late.",
      "C": "The judge arrived early however; the stenographer was late.",
      "D": "The judge arrived early, however, the stenographer was late."
    },
    "correctAnswer": "B",
    "explanation": "When joining two independent clauses with a conjunctive adverb like 'however', use a semicolon before it and a comma after it.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_13",
    "questionText": "Select the option that best completes the sentence: 'The director, accompanied by his deputies, _____ attending the briefing.'",
    "options": {
      "A": "are",
      "B": "is",
      "C": "were",
      "D": "have been"
    },
    "correctAnswer": "B",
    "explanation": "Parenthetical phrases like 'accompanied by...', 'as well as...', and 'together with...' do not change the number of the subject. 'The director' is singular, so 'is' is correct.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_14",
    "questionText": "Choose the synonym of 'ESOTERIC':",
    "options": {
      "A": "Obscure",
      "B": "Commonplace",
      "C": "Transparent",
      "D": "Accessible"
    },
    "correctAnswer": "A",
    "explanation": "'Esoteric' refers to knowledge intended for or likely to be understood by only a small number of people with specialized knowledge.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_15",
    "questionText": "What is the meaning of the idiom 'A MOOT POINT'?",
    "options": {
      "A": "An undisputed fact",
      "B": "A subject that is open to debate or unresolved",
      "C": "A decisive victory",
      "D": "A severe reprimand"
    },
    "correctAnswer": "B",
    "explanation": "A 'moot point' is an issue that is subject to debate, dispute, or uncertainty, often with little practical significance.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_16",
    "questionText": "Identify the correct preposition: 'The suspect was charged _____ forgery and criminal breach of trust.'",
    "options": {
      "A": "with",
      "B": "for",
      "C": "on",
      "D": "by"
    },
    "correctAnswer": "A",
    "explanation": "One is 'charged with' an offence (whereas one is 'accused of' an offence).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_17",
    "questionText": "Choose the correct passive voice: 'The federal agent interrogated the suspect for three hours.'",
    "options": {
      "A": "The suspect was interrogated by the federal agent for three hours.",
      "B": "The suspect had been interrogated by the federal agent for three hours.",
      "C": "The suspect is interrogated for three hours by the federal agent.",
      "D": "The suspect has been interrogated by the federal agent for three hours."
    },
    "correctAnswer": "A",
    "explanation": "Simple past active 'interrogated' becomes 'was/were + past participle' (was interrogated).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_18",
    "questionText": "Select the antonym of 'EPHEMERAL':",
    "options": {
      "A": "Transitory",
      "B": "Fleeting",
      "C": "Perpetual",
      "D": "Transient"
    },
    "correctAnswer": "C",
    "explanation": "'Ephemeral' means lasting for a very short time. Its opposite is 'perpetual' or everlasting.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_19",
    "questionText": "Complete the sentence correctly: 'Scarcely had the officer begun the inquiry _____ new allegations surfaced.'",
    "options": {
      "A": "when",
      "B": "than",
      "C": "then",
      "D": "after"
    },
    "correctAnswer": "A",
    "explanation": "'Scarcely... when' and 'Hardly... when' are standard correlative pairs in English grammar.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_20",
    "questionText": "What does the Latin maxim 'ACTUS NON FACIT REUM NISI MENS SIT REA' mean?",
    "options": {
      "A": "Ignorance of the law is no excuse",
      "B": "An act does not make a person guilty unless the mind is also guilty",
      "C": "No one can be tried twice for the same offence",
      "D": "He who acts through another acts himself"
    },
    "correctAnswer": "B",
    "explanation": "This is the cardinal principle of criminal law: both physical criminal act (actus reus) and mental intent (mens rea) are necessary for guilt.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_21",
    "questionText": "Identify the correct word: 'The court ordered the immediate _____ of the illicit property.'",
    "options": {
      "A": "confiscate",
      "B": "confiscation",
      "C": "confiscatory",
      "D": "confiscating"
    },
    "correctAnswer": "B",
    "explanation": "The blank requires a noun after the adjective 'immediate'; 'confiscation' is the noun form.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_22",
    "questionText": "Choose the correct word: 'Neither the evidence nor the witness testimonies _____ sufficient for conviction.'",
    "options": {
      "A": "was",
      "B": "were",
      "C": "is",
      "D": "has been"
    },
    "correctAnswer": "B",
    "explanation": "In 'neither... nor', the verb agrees with the closer subject 'witness testimonies' (plural noun), thus 'were' is correct.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_23",
    "questionText": "Choose the word most OPPOSITE in meaning to 'VINDICATE':",
    "options": {
      "A": "Exonerate",
      "B": "Acquit",
      "C": "Inculpate",
      "D": "Absolve"
    },
    "correctAnswer": "C",
    "explanation": "'Vindicate' means to clear someone of blame or suspicion. 'Inculpate' means to accuse or blame.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_24",
    "questionText": "Identify the sentence that demonstrates correct parallel structure:",
    "options": {
      "A": "The duties of the legal officer include reviewing files, drafting petitions, and to appear in court.",
      "B": "The duties of the legal officer include reviewing files, drafting petitions, and appearing in court.",
      "C": "The duties of the legal officer include to review files, drafting petitions, and appearing in court.",
      "D": "The duties of the legal officer include file reviews, drafting petitions, and appearing in court."
    },
    "correctAnswer": "B",
    "explanation": "Parallel structure requires consistent grammatical forms: 'reviewing files, drafting petitions, and appearing in court' (all gerund phrases).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_25",
    "questionText": "Fill in the blank: 'He was completely absorbed _____ reading the investigative report.'",
    "options": {
      "A": "with",
      "B": "at",
      "C": "in",
      "D": "by"
    },
    "correctAnswer": "C",
    "explanation": "The correct preposition following 'absorbed' when expressing mental immersion is 'in'.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_26",
    "questionText": "Choose the synonym of 'UBIQUITOUS':",
    "options": {
      "A": "Omnipresent",
      "B": "Rare",
      "C": "Scarce",
      "D": "Localized"
    },
    "correctAnswer": "A",
    "explanation": "'Ubiquitous' means present, appearing, or found everywhere.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_27",
    "questionText": "Choose the sentence with correct subjunctive mood:",
    "options": {
      "A": "The magistrate recommended that the prosecutor files an amended complaint.",
      "B": "The magistrate recommended that the prosecutor file an amended complaint.",
      "C": "The magistrate recommended that the prosecutor filed an amended complaint.",
      "D": "The magistrate recommended that the prosecutor should have filed an amended complaint."
    },
    "correctAnswer": "B",
    "explanation": "In English mandative subjunctive clauses following verbs like 'recommend', 'demand', or 'insist', the base form of the verb ('file') is used.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_28",
    "questionText": "Choose the antonym of 'BELLICOSE':",
    "options": {
      "A": "Pugnacious",
      "B": "Aggressive",
      "C": "Peaceable",
      "D": "Hostile"
    },
    "correctAnswer": "C",
    "explanation": "'Bellicose' means demonstrating aggression and willingness to fight. Its opposite is 'peaceable'.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_29",
    "questionText": "Select the sentence with no grammatical errors:",
    "options": {
      "A": "Each of the investigating officers have submitted their reports.",
      "B": "Each of the investigating officers has submitted his report.",
      "C": "Each of the investigating officer have submitted his reports.",
      "D": "Each of the investigating officers are submitting their reports."
    },
    "correctAnswer": "B",
    "explanation": "'Each' is an indefinite singular pronoun requiring a singular verb ('has submitted') and singular pronoun ('his report').",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_30",
    "questionText": "What is the meaning of the legal idiom 'ULTRA VIRES'?",
    "options": {
      "A": "Within legal authority",
      "B": "Beyond legal power or authority",
      "C": "In good faith",
      "D": "By reason of insanity"
    },
    "correctAnswer": "B",
    "explanation": "'Ultra vires' is a Latin phrase meaning 'beyond the powers'; an act done without legal authority.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_31",
    "questionText": "When did the Code of Criminal Procedure (CrPC), 1898 come into force?",
    "options": {
      "A": "1st January 1898",
      "B": "1st July 1898",
      "C": "14th August 1898",
      "D": "1st October 1898"
    },
    "correctAnswer": "B",
    "explanation": "The Code of Criminal Procedure, 1898 (Act V of 1898) received the assent of the Governor-General on 22 March 1898 and came into force on the first day of July, 1898 (Section 1).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_32",
    "questionText": "Under Section 4(1)(f) of the CrPC, a 'cognizable offence' is defined as one in which a police officer may:",
    "options": {
      "A": "Arrest only after obtaining a warrant from a Magistrate",
      "B": "Arrest without a warrant in accordance with the second schedule or any other law",
      "C": "Investigate only after permission of the Sessions Judge",
      "D": "Impose a fine directly on the accused"
    },
    "correctAnswer": "B",
    "explanation": "Under Section 4(1)(f) CrPC, 'Cognizable offence' means an offence for which a police officer may, in accordance with the second schedule or under any other law for the time being in force, arrest without warrant.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_33",
    "questionText": "Which section of the CrPC empowers police officers to arrest any person without an order from a Magistrate and without a warrant?",
    "options": {
      "A": "Section 42",
      "B": "Section 51",
      "C": "Section 54",
      "D": "Section 61"
    },
    "correctAnswer": "C",
    "explanation": "Section 54 of the CrPC enumerates nine categories of circumstances under which any police officer may arrest any person without an order from a Magistrate and without a warrant.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_34",
    "questionText": "Under Section 61 of the CrPC, no police officer shall detain in custody a person arrested without warrant for a period exceeding:",
    "options": {
      "A": "12 hours",
      "B": "24 hours",
      "C": "48 hours",
      "D": "72 hours"
    },
    "correctAnswer": "B",
    "explanation": "Section 61 CrPC states that no police officer shall detain in custody a person arrested without warrant for a longer period than under all circumstances is reasonable, and such period shall not, in the absence of a special order under Section 167, exceed twenty-four hours exclusive of the time necessary for the journey.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_35",
    "questionText": "Under Section 103 of CrPC, before making a search under Chapter VII, the officer about to make it shall call upon:",
    "options": {
      "A": "At least four government servants to attend",
      "B": "Two or more respectable inhabitants of the locality to attend and witness the search",
      "C": "A Magistrate of the First Class only",
      "D": "The legal representative of the accused person"
    },
    "correctAnswer": "B",
    "explanation": "Section 103(1) CrPC requires the officer to call upon two or more respectable inhabitants of the locality in which the place to be searched is situate to attend and witness the search.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_36",
    "questionText": "Under Section 87 of CrPC, the proclamation requiring an absconding person to appear must provide a time of not less than:",
    "options": {
      "A": "15 days",
      "B": "30 days",
      "C": "60 days",
      "D": "90 days"
    },
    "correctAnswer": "B",
    "explanation": "Section 87(1) CrPC states that the court may publish a written proclamation requiring him to appear at a specified place and at a specified time not less than thirty days from the date of publishing such proclamation.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_37",
    "questionText": "Information relating to the commission of a cognizable offence is recorded under which section of CrPC?",
    "options": {
      "A": "Section 154",
      "B": "Section 155",
      "C": "Section 156",
      "D": "Section 161"
    },
    "correctAnswer": "A",
    "explanation": "Section 154 CrPC governs the recording of information in cognizable cases, popularly known as the First Information Report (FIR).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_38",
    "questionText": "Under Section 155 of CrPC, what is required before a police officer can investigate a non-cognizable offence?",
    "options": {
      "A": "Approval of the Superintendent of Police",
      "B": "An order from a Magistrate having power to try such case or commit the same for trial",
      "C": "Notice served to the accused person",
      "D": "Consent of the complainant in writing"
    },
    "correctAnswer": "B",
    "explanation": "Section 155(2) CrPC provides that no police officer shall investigate a non-cognizable case without the order of a Magistrate of the first or second class having power to try such case or commit the same for trial.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_39",
    "questionText": "Examination of witnesses by the police during an investigation is conducted under which section of CrPC?",
    "options": {
      "A": "Section 160",
      "B": "Section 161",
      "C": "Section 162",
      "D": "Section 164"
    },
    "correctAnswer": "B",
    "explanation": "Section 161 CrPC empowers any police officer making an investigation to examine orally any person supposed to be acquainted with the facts and circumstances of the case.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_40",
    "questionText": "According to Section 162 of CrPC, a statement made by any person to a police officer in the course of an investigation shall:",
    "options": {
      "A": "Always be attested on oath",
      "B": "Not be signed by the person making it",
      "C": "Be signed in the presence of two witnesses",
      "D": "Be forwarded directly to the Supreme Court"
    },
    "correctAnswer": "B",
    "explanation": "Section 162 CrPC explicitly provides that no statement made by any person to a police officer in the course of an investigation shall be signed by the person making it.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_41",
    "questionText": "Which section of CrPC provides for the recording of confessions and statements by a Magistrate?",
    "options": {
      "A": "Section 161",
      "B": "Section 164",
      "C": "Section 173",
      "D": "Section 342"
    },
    "correctAnswer": "B",
    "explanation": "Section 164 CrPC empowers any Magistrate of the First Class, or any Magistrate of the Second Class specially empowered, to record any statement or confession made to him in the course of an investigation.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_42",
    "questionText": "Under Section 167 of CrPC, what is the maximum aggregate period of police physical remand that a Magistrate may authorize?",
    "options": {
      "A": "7 days",
      "B": "14 days",
      "C": "15 days",
      "D": "30 days"
    },
    "correctAnswer": "C",
    "explanation": "Under Section 167(2) CrPC, the Magistrate may authorize the detention of the accused in such custody as such Magistrate thinks fit, for a term not exceeding fifteen days on the whole.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_43",
    "questionText": "Every investigation under Chapter XIV of the CrPC must be completed without unnecessary delay, and the report under Section 173 (Challan) submitted within:",
    "options": {
      "A": "7 days",
      "B": "14 days",
      "C": "30 days",
      "D": "60 days"
    },
    "correctAnswer": "B",
    "explanation": "Section 173(1) CrPC requires the report of police to be forwarded to the Magistrate within fourteen days from the date on which the information relating to the commission of the offence was received.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_44",
    "questionText": "Under Section 172 of the CrPC, what is the official daily record kept by an investigating officer called?",
    "options": {
      "A": "First Information Report",
      "B": "Inquest Report",
      "C": "Case Diary (Special Diary)",
      "D": "Charge Sheet"
    },
    "correctAnswer": "C",
    "explanation": "Section 172 CrPC mandates that every police officer making an investigation shall day by day enter his proceedings in a diary, commonly referred to as the Case Diary or Zimni.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_45",
    "questionText": "Under Section 190 of CrPC, a Magistrate of the First Class may take cognizance of any offence upon:",
    "options": {
      "A": "A complaint of facts which constitute such offence",
      "B": "A police-report of such facts",
      "C": "Information received from any person other than a police officer, or upon his own knowledge or suspicion",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Under Section 190(1) CrPC, cognizance may be taken upon (a) a complaint, (b) a police report, or (c) information received from any other person or own knowledge/suspicion.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_46",
    "questionText": "According to Section 221 of CrPC, what must every charge state?",
    "options": {
      "A": "The offence with which the accused is charged",
      "B": "The exact date of judgment",
      "C": "The recommendation for punishment",
      "D": "The personal assets of the accused"
    },
    "correctAnswer": "A",
    "explanation": "Section 221(1) CrPC states: 'Every charge under this Code shall state the offence with which the accused is charged.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_47",
    "questionText": "Under Section 234 of CrPC, a person may be charged with and tried at one trial for offences of the same kind committed within the space of:",
    "options": {
      "A": "6 months, not exceeding two offences",
      "B": "12 months, not exceeding three offences",
      "C": "12 months, not exceeding five offences",
      "D": "24 months, not exceeding three offences"
    },
    "correctAnswer": "B",
    "explanation": "Section 234 CrPC provides that when a person is accused of more offences than one of the same kind committed within the space of twelve months, he may be charged with and tried at one trial for any number of them not exceeding three.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_48",
    "questionText": "In a trial before a Magistrate under Chapter XX of CrPC, which section provides for supply of copies of statements and documents to the accused?",
    "options": {
      "A": "Section 241-A",
      "B": "Section 242",
      "C": "Section 245",
      "D": "Section 249-A"
    },
    "correctAnswer": "A",
    "explanation": "Section 241-A CrPC provides that in all cases instituted upon police report, copies of statements of all witnesses recorded under sections 161 and 164 and of the inspection note shall be supplied free of cost to the accused not less than seven days before the commencement of trial.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_49",
    "questionText": "Under Section 249-A of CrPC, a Magistrate has the power to:",
    "options": {
      "A": "Remand an accused indefinitely",
      "B": "Acquit the accused at any stage of the case after hearing both sides if allegations are groundless",
      "C": "Transfer the case outside the province",
      "D": "Enhance the maximum punishment prescribed by law"
    },
    "correctAnswer": "B",
    "explanation": "Section 249-A CrPC empowers a Magistrate to acquit the accused at any stage of the case if, after giving notice to the prosecutor and accused, he considers that the charge is groundless or there is no probability of conviction.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_50",
    "questionText": "What is the equivalent power of Section 249-A for the Court of Session under Chapter XXII-A?",
    "options": {
      "A": "Section 265-D",
      "B": "Section 265-H",
      "C": "Section 265-K",
      "D": "Section 265-N"
    },
    "correctAnswer": "C",
    "explanation": "Section 265-K CrPC gives the Court of Session the power to acquit the accused at any stage of the case if there is no probability of the accused being convicted.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_51",
    "questionText": "Under Section 260 of CrPC, what is the maximum sentence of imprisonment that can be passed in a Summary Trial?",
    "options": {
      "A": "1 month",
      "B": "3 months",
      "C": "6 months",
      "D": "1 year"
    },
    "correctAnswer": "B",
    "explanation": "Section 262(2) CrPC states that no sentence of imprisonment for a term exceeding three months shall be passed in the case of any conviction under Chapter XXII (Summary Trials).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_52",
    "questionText": "Tender of pardon to an accomplice (turning approver) is dealt with under which section of CrPC?",
    "options": {
      "A": "Section 337",
      "B": "Section 340",
      "C": "Section 344",
      "D": "Section 345"
    },
    "correctAnswer": "A",
    "explanation": "Section 337 CrPC deals with the tender of pardon to an accomplice on condition of his making a full and true disclosure of the whole circumstances.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_53",
    "questionText": "Which section of CrPC governs the examination of the accused person by the court to explain circumstances appearing in the evidence against him?",
    "options": {
      "A": "Section 242",
      "B": "Section 340(2)",
      "C": "Section 342",
      "D": "Section 364"
    },
    "correctAnswer": "C",
    "explanation": "Section 342 CrPC provides that for the purpose of enabling the accused to explain any circumstances appearing in the evidence against him, the Court shall question him generally on the case after witnesses for prosecution have been examined.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_54",
    "questionText": "Which section of CrPC deals with bail in bailable offences?",
    "options": {
      "A": "Section 496",
      "B": "Section 497",
      "C": "Section 498",
      "D": "Section 498-A"
    },
    "correctAnswer": "A",
    "explanation": "Section 496 CrPC governs the granting of bail as a matter of right in bailable offences.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_55",
    "questionText": "Under Section 497(1) of CrPC, bail in non-bailable offences shall not be granted if there appear reasonable grounds for believing that the accused is guilty of an offence punishable with:",
    "options": {
      "A": "Fine only",
      "B": "Imprisonment for 3 years",
      "C": "Death, imprisonment for life, or imprisonment for 10 years",
      "D": "Simple imprisonment of any term"
    },
    "correctAnswer": "C",
    "explanation": "The prohibitory clause of Section 497(1) CrPC bars grant of bail if there appear reasonable grounds for believing that the accused has been guilty of an offence punishable with death or imprisonment for life or imprisonment for ten years (unless covered by statutory exceptions).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_56",
    "questionText": "Which section of CrPC confers power upon the High Court or Court of Session to grant pre-arrest bail or direct admission to bail?",
    "options": {
      "A": "Section 491",
      "B": "Section 497",
      "C": "Section 498",
      "D": "Section 500"
    },
    "correctAnswer": "C",
    "explanation": "Section 498 CrPC confers concurrent power upon the High Court and Court of Session to direct that any person be admitted to bail (including pre-arrest bail based on proven mala fides/ulterior motives).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_57",
    "questionText": "Under Section 491 of CrPC, the High Court has the power to issue directions in the nature of:",
    "options": {
      "A": "Habeas Corpus",
      "B": "Quo Warranto",
      "C": "Mandamus",
      "D": "Certiorari"
    },
    "correctAnswer": "A",
    "explanation": "Section 491 CrPC provides statutory power to the High Court to issue directions in the nature of a Habeas Corpus for setting at liberty persons illegally or improperly detained.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_58",
    "questionText": "Inherent powers of the High Court to make such orders as may be necessary to give effect to any order under CrPC or prevent abuse of process are preserved under:",
    "options": {
      "A": "Section 439",
      "B": "Section 498",
      "C": "Section 561-A",
      "D": "Section 526"
    },
    "correctAnswer": "C",
    "explanation": "Section 561-A CrPC saves the inherent power of the High Court to make such orders as may be necessary to prevent abuse of the process of any Court or otherwise to secure the ends of justice.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_59",
    "questionText": "Under Section 417 of CrPC, who can direct the Public Prosecutor to present an appeal to the High Court against an order of acquittal passed by any court other than a High Court?",
    "options": {
      "A": "The Inspector General of Police",
      "B": "The Provincial Government (or Federal Government in certain cases)",
      "C": "The Supreme Judicial Council",
      "D": "The Bar Council"
    },
    "correctAnswer": "B",
    "explanation": "Section 417(1) CrPC empowers the Provincial Government (or Federal Government under subsection (2)) to direct the Public Prosecutor to present an appeal to the High Court from an original or appellate order of acquittal.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_60",
    "questionText": "Under Section 100 of CrPC, a search warrant for a person wrongfully confined may be issued by:",
    "options": {
      "A": "Any police constable on duty",
      "B": "A Magistrate of the First Class or Sub-Divisional Magistrate",
      "C": "A Civil Judge Class III",
      "D": "The headman of the village only"
    },
    "correctAnswer": "B",
    "explanation": "Section 100 CrPC provides that if any Magistrate of the First Class has reason to believe that any person is confined under circumstances that amount to an offence, he may issue a search warrant.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Criminal Procedure Code (CrPC), 1898",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_61",
    "questionText": "The Qanun-e-Shahadat Order, 1984 was promulgated on:",
    "options": {
      "A": "14th August 1984",
      "B": "28th October 1984",
      "C": "25th December 1984",
      "D": "1st January 1985"
    },
    "correctAnswer": "B",
    "explanation": "The Qanun-e-Shahadat Order, 1984 (President's Order No. X of 1984) was promulgated on 28th October 1984, repealing the Evidence Act, 1872.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_62",
    "questionText": "Under Article 3 of the Qanun-e-Shahadat Order, 1984, who is competent to testify?",
    "options": {
      "A": "Only individuals holding Pakistani citizenship",
      "B": "All persons, unless the Court considers they are prevented from understanding questions by tender years, extreme old age, disease, or unsoundness of mind",
      "C": "Only male Muslims above the age of 21",
      "D": "Any person who is an advocate of the High Court"
    },
    "correctAnswer": "B",
    "explanation": "Article 3 QSO states that all persons shall be competent to testify unless the Court considers they are prevented from understanding the questions put to them, or from giving rational answers by reason of tender years, extreme old age, disease, or unsound mind.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_63",
    "questionText": "According to Article 17 of QSO 1984, what is the required competence of witnesses in matters pertaining to financial or future obligations?",
    "options": {
      "A": "One male witness only",
      "B": "Two male witnesses, or one male and two female witnesses",
      "C": "Four female witnesses only",
      "D": "Three independent witnesses regardless of gender"
    },
    "correctAnswer": "B",
    "explanation": "Article 17(2)(a) QSO mandates that in matters pertaining to financial or future obligations, the instrument shall be attested by two men, or one man and two women.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_64",
    "questionText": "Under Article 16 of the Qanun-e-Shahadat Order, 1984, an accomplice shall be:",
    "options": {
      "A": "Incompetent to testify in all criminal cases",
      "B": "A competent witness against an accused person, except in cases punishable with Hadd",
      "C": "Treated as the primary complainant",
      "D": "Exempt from cross-examination"
    },
    "correctAnswer": "B",
    "explanation": "Article 16 QSO provides that an accomplice shall be a competent witness against an accused person, except in the case of an offence punishable with Hadd.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_65",
    "questionText": "Facts which, though not in issue, are so connected with a fact in issue as to form part of the same transaction (Res Gestae) are relevant under which Article?",
    "options": {
      "A": "Article 18",
      "B": "Article 19",
      "C": "Article 24",
      "D": "Article 29"
    },
    "correctAnswer": "B",
    "explanation": "Article 19 QSO (corresponding to Section 6 of the repealed Evidence Act) deals with facts forming part of the same transaction (the doctrine of Res Gestae).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_66",
    "questionText": "Under Article 22 of QSO 1984, facts necessary to explain or introduce relevant facts, including the identification of accused persons (Identification Parade), are:",
    "options": {
      "A": "Inadmissible",
      "B": "Relevant",
      "C": "Conclusive proof of guilt",
      "D": "Admissible only in civil suits"
    },
    "correctAnswer": "B",
    "explanation": "Article 22 QSO makes facts necessary to explain or introduce a fact in issue or relevant fact, or which establish the identity of any thing or person, relevant.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_67",
    "questionText": "Under Article 37 of QSO 1984, a confession made by an accused person is irrelevant in a criminal proceeding if caused by:",
    "options": {
      "A": "Inducement, threat or promise proceeding from a person in authority",
      "B": "Voluntary desire to state the truth",
      "C": "Religious repentance",
      "D": "Advice of his legal counsel"
    },
    "correctAnswer": "A",
    "explanation": "Article 37 QSO renders a confession irrelevant if the making of it appears to have been caused by any inducement, threat or promise proceeding from a person in authority.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_68",
    "questionText": "Article 38 of the Qanun-e-Shahadat Order, 1984 explicitly provides that no confession made to a _____ shall be proved as against a person accused of any offence.",
    "options": {
      "A": "Magistrate",
      "B": "Police officer",
      "C": "Medical officer",
      "D": "Sessions Judge"
    },
    "correctAnswer": "B",
    "explanation": "Article 38 QSO states: 'No confession made to a police officer shall be proved as against a person accused of any offence.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_69",
    "questionText": "Under Article 39 of QSO 1984, a confession made by an accused while in custody of police cannot be proved against him unless:",
    "options": {
      "A": "Attested by two non-governmental observers",
      "B": "Made in the immediate presence of a Magistrate",
      "C": "Signed by the Station House Officer",
      "D": "Recorded by a journalist"
    },
    "correctAnswer": "B",
    "explanation": "Article 39 QSO states: 'Subject to Article 40, no confession made by any person whilst he is in the custody of a police officer, unless it be made in the immediate presence of a Magistrate, shall be proved as against such person.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_70",
    "questionText": "Article 40 of QSO 1984 (information leading to discovery of fact) stipulates that how much of information received from an accused in police custody may be proved?",
    "options": {
      "A": "The entire narrative confession of the crime",
      "B": "So much of the information as relates distinctly to the fact thereby discovered",
      "C": "None of the information under any circumstance",
      "D": "Only the motives of the crime"
    },
    "correctAnswer": "B",
    "explanation": "Article 40 QSO provides that when any fact is deposed to as discovered in consequence of information received from an accused in police custody, so much of such information, whether it amounts to a confession or not, as relates distinctly to the fact thereby discovered, may be proved.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_71",
    "questionText": "Dying declaration is admissible and relevant under which provision of the Qanun-e-Shahadat Order, 1984?",
    "options": {
      "A": "Article 46(1)",
      "B": "Article 48",
      "C": "Article 59",
      "D": "Article 64"
    },
    "correctAnswer": "A",
    "explanation": "Article 46(1) QSO renders statements made by a person as to the cause of his death, or as to any of the circumstances of the transaction which resulted in his death, relevant in cases where the cause of that person's death comes into question.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_72",
    "questionText": "Under Article 59 of QSO 1984, opinions of experts are relevant upon a point of:",
    "options": {
      "A": "Foreign law, science, art, or identity of handwriting or finger impressions",
      "B": "Interpretation of the Constitution of Pakistan only",
      "C": "Sentencing policy",
      "D": "Determining the credibility of eyewitnesses"
    },
    "correctAnswer": "A",
    "explanation": "Article 59 QSO states that when the Court has to form an opinion upon a point of foreign law, or of science, or art, or as to identity of handwriting or finger impressions, the opinions upon that point of persons specially skilled are relevant facts.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_73",
    "questionText": "Under Article 71 of the Qanun-e-Shahadat Order, 1984, oral evidence must in all cases whatever be:",
    "options": {
      "A": "Documented on stamp paper",
      "B": "Direct",
      "C": "Corroborated by digital recording",
      "D": "Hearsay"
    },
    "correctAnswer": "B",
    "explanation": "Article 71 QSO lays down the fundamental evidentiary rule: 'Oral evidence must, in all cases whatever, be direct.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_74",
    "questionText": "According to Article 73 of QSO 1984, 'Primary evidence' means:",
    "options": {
      "A": "Certified copies of the document",
      "B": "The document itself produced for the inspection of the Court",
      "C": "Photocopies countersigned by an advocate",
      "D": "Oral account of the contents of a document"
    },
    "correctAnswer": "B",
    "explanation": "Article 73 QSO defines Primary evidence as 'the document itself produced for the inspection of the Court.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_75",
    "questionText": "Under Article 74 of QSO 1984, which of the following is considered 'Secondary evidence'?",
    "options": {
      "A": "Certified copies given under provisions hereinafter contained",
      "B": "Copies made from the original by mechanical processes ensuring accuracy",
      "C": "Oral accounts of the contents of a document given by some person who has himself seen it",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Article 74 QSO enumerates categories of secondary evidence including certified copies, mechanical copies, counterparts, and oral accounts by someone who saw the original.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_76",
    "questionText": "Under Article 85 of QSO 1984, which of the following is a 'Public document'?",
    "options": {
      "A": "A personal diary of a private citizen",
      "B": "Documents forming the acts or records of the acts of the sovereign authority, official bodies and tribunals",
      "C": "An unnotarized private rental contract",
      "D": "A handwritten letter between friends"
    },
    "correctAnswer": "B",
    "explanation": "Article 85 QSO classifies documents forming the acts or records of acts of the sovereign authority, official bodies, legislatures, judiciary, and public records kept of private documents as public documents.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_77",
    "questionText": "Article 102 of QSO 1984 lays down that when terms of a contract or grant have been reduced to the form of a document, no evidence shall be given in proof thereof except:",
    "options": {
      "A": "The document itself, or secondary evidence of its contents where admissible",
      "B": "Oral testimony of third-party observers",
      "C": "The general reputation of the parties",
      "D": "Any hearsay assertion"
    },
    "correctAnswer": "A",
    "explanation": "Article 102 QSO mandates that when terms have been reduced to writing, no evidence shall be given in proof of terms except the document itself or secondary evidence where admissible.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_78",
    "questionText": "Under Article 114 of QSO 1984, the doctrine of 'Estoppel' applies when:",
    "options": {
      "A": "A person has by declaration, act or omission intentionally caused another to believe a thing to be true and act upon such belief",
      "B": "A person confesses his guilt to the police",
      "C": "A witness dies before cross-examination",
      "D": "An accused turns approver"
    },
    "correctAnswer": "A",
    "explanation": "Article 114 QSO defines Estoppel: when one person has, by declaration, act or omission, intentionally caused another to believe a thing to be true and act upon such belief, neither he nor his representative shall be allowed to deny the truth of that thing.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_79",
    "questionText": "Under Article 117 of QSO 1984, upon whom does the burden of proof lie in a legal proceeding?",
    "options": {
      "A": "Upon the presiding judge",
      "B": "Upon the person who desires any Court to give judgment as to any legal right or liability dependent on facts he asserts",
      "C": "Always upon the defendant regardless of who asserts the fact",
      "D": "Upon the clerk of the court"
    },
    "correctAnswer": "B",
    "explanation": "Article 117 QSO states that whoever desires any Court to give judgment as to any legal right or liability dependent on the existence of facts which he asserts, must prove that those facts exist.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_80",
    "questionText": "Under Article 122 of QSO 1984, the burden of proving that the case of an accused comes within any of the General Exceptions of PPC lies upon:",
    "options": {
      "A": "The prosecution",
      "B": "The accused",
      "C": "The investigating officer",
      "D": "The complainant"
    },
    "correctAnswer": "B",
    "explanation": "Article 122 QSO establishes that when a person is accused of any offence, the burden of proving the existence of circumstances bringing the case within any of the General Exceptions in the PPC lies upon him.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_81",
    "questionText": "Under Article 129, Illustration (b) of QSO 1984, the Court may presume that an accomplice is:",
    "options": {
      "A": "Always truthful without corroboration",
      "B": "Unworthy of credit, unless he is corroborated in material particulars",
      "C": "Entitled to half of the recovered property",
      "D": "Immune from any criminal inquiry"
    },
    "correctAnswer": "B",
    "explanation": "Article 129(b) QSO states that the Court may presume that an accomplice is unworthy of credit, unless he is corroborated in material particulars.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_82",
    "questionText": "Under Article 132 of QSO 1984, the examination of a witness by the party who calls him is termed:",
    "options": {
      "A": "Cross-examination",
      "B": "Examination-in-chief",
      "C": "Re-examination",
      "D": "Inquest examination"
    },
    "correctAnswer": "B",
    "explanation": "Article 132(1) QSO defines Examination-in-chief as the examination of a witness by the party who calls him.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_83",
    "questionText": "The examination of a witness by the adverse party is called:",
    "options": {
      "A": "Examination-in-chief",
      "B": "Cross-examination",
      "C": "Re-examination",
      "D": "Interrogation"
    },
    "correctAnswer": "B",
    "explanation": "Article 132(2) QSO defines Cross-examination as the examination of a witness by the adverse party.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_84",
    "questionText": "Under Article 136 of QSO 1984, any question suggesting the answer which the person putting it wishes or expects to receive is called a:",
    "options": {
      "A": "Leading question",
      "B": "Direct question",
      "C": "Hypothetical question",
      "D": "Perjury question"
    },
    "correctAnswer": "A",
    "explanation": "Article 136 QSO defines a leading question as any question suggesting the answer which the person putting it wishes or expects to receive.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_85",
    "questionText": "Under Article 138 of QSO 1984, leading questions may freely be asked in:",
    "options": {
      "A": "Examination-in-chief",
      "B": "Cross-examination",
      "C": "Re-examination without permission",
      "D": "The complaint"
    },
    "correctAnswer": "B",
    "explanation": "Article 138 QSO provides that leading questions may be asked in cross-examination.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_86",
    "questionText": "Under Article 150 of QSO 1984, the Court may permit the person who calls a witness to put any questions to him which might be put in cross-examination when the witness is:",
    "options": {
      "A": "An expert",
      "B": "Hostile",
      "C": "A minor",
      "D": "A government official"
    },
    "correctAnswer": "B",
    "explanation": "Article 150 QSO permits a party calling a witness to cross-examine him (put leading questions) if the witness turns hostile and suppresses the truth.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_87",
    "questionText": "Under Article 155 of QSO 1984, a witness may refresh his memory by referring to:",
    "options": {
      "A": "Any writing made by himself at the time of the transaction or soon after",
      "B": "Newspaper rumors published years later",
      "C": "Anonymous letters",
      "D": "Speculative social media posts"
    },
    "correctAnswer": "A",
    "explanation": "Article 155 QSO allows a witness to refresh his memory by referring to any writing made by himself at the time of the transaction concerning which he is questioned, or so soon afterwards that the transaction was fresh in his memory.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_88",
    "questionText": "Under Article 5 of QSO 1984, communications made during marriage between husband and wife are:",
    "options": {
      "A": "Open to public disclosure by police",
      "B": "Privileged and protected from disclosure without consent",
      "C": "Admissible in all civil suits without exception",
      "D": "Inadmissible even if both spouses consent"
    },
    "correctAnswer": "B",
    "explanation": "Article 5 QSO protects spousal communications during marriage as privileged, so that no person who is or has been married shall be compelled to disclose any communication made to him during marriage by his spouse.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_89",
    "questionText": "Under Article 9 of QSO 1984, professional communications between an advocate and his client are protected unless made in furtherance of:",
    "options": {
      "A": "Defending a past civil suit",
      "B": "Any illegal purpose or observation of any crime or fraud committed since employment",
      "C": "Filing a petition for bail",
      "D": "Drafting an honest affidavit"
    },
    "correctAnswer": "B",
    "explanation": "Article 9 QSO grants privilege to professional communications between advocates and clients, but the proviso states that nothing protects any communication made in furtherance of any illegal purpose or fact showing crime or fraud.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_90",
    "questionText": "Under modern amendments and Article 164 of QSO 1984, the Court may allow the production of evidence that may have become available because of:",
    "options": {
      "A": "Modern devices and techniques (audio, video, digital forensics)",
      "B": "Astrological predictions",
      "C": "Hypnotic regressions",
      "D": "Trial by ordeal"
    },
    "correctAnswer": "A",
    "explanation": "Article 164 QSO provides that the Court may allow any evidence to be produced which may have become available because of modern devices and electronic techniques.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Qanun-e-Shahadat Order, 1984",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_91",
    "questionText": "The Pakistan Penal Code (Act XLV of 1860) was enacted on 6th October 1860 and came into operation on:",
    "options": {
      "A": "1st January 1861",
      "B": "1st January 1862",
      "C": "14th August 1947",
      "D": "23rd March 1956"
    },
    "correctAnswer": "B",
    "explanation": "The Pakistan Penal Code, 1860 was passed on 6th October 1860 and came into operation on 1st January 1862.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_92",
    "questionText": "Under Section 4 of the PPC, the provisions of the Code apply to any offence committed by any citizen of Pakistan or any person in the service of Pakistan in:",
    "options": {
      "A": "Pakistan only",
      "B": "Any place without and beyond Pakistan",
      "C": "Commonwealth countries only",
      "D": "Federal capital territory only"
    },
    "correctAnswer": "B",
    "explanation": "Section 4 PPC provides for extraterritorial application of the Code to any citizen of Pakistan or any person in the service of Pakistan in any place without and beyond Pakistan.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_93",
    "questionText": "Under Section 21 of the PPC, which of the following is included in the definition of a 'Public Servant'?",
    "options": {
      "A": "Every Commissioned Officer in the Military, Naval or Air Forces of Pakistan",
      "B": "Every Judge including any person empowered by law to discharge judicial functions",
      "C": "Every officer of a Court of Justice whose duty it is to investigate or report",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Section 21 PPC enumerates various categories of persons who are public servants, including judges, officers of courts, military officers, and government employees.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_94",
    "questionText": "Under Section 24 of the PPC, doing anything with the intention of causing wrongful gain to one person or wrongful loss to another person is defined as doing it:",
    "options": {
      "A": "Fraudulently",
      "B": "Dishonestly",
      "C": "Malignantly",
      "D": "Voluntarily"
    },
    "correctAnswer": "B",
    "explanation": "Section 24 PPC defines 'Dishonestly': Whoever does anything with the intention of causing wrongful gain to one person or wrongful loss to another person, is said to do that thing 'dishonestly'.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_95",
    "questionText": "Under Section 25 of the PPC, a person is said to do a thing 'fraudulently' if he does that thing with:",
    "options": {
      "A": "Intent to defraud, but not otherwise",
      "B": "Intent to cause bodily hurt",
      "C": "Negligence",
      "D": "Recklessness"
    },
    "correctAnswer": "A",
    "explanation": "Section 25 PPC provides: 'A person is said to do a thing fraudulently if he does that thing with intent to defraud, but not otherwise.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_96",
    "questionText": "Which section of the PPC enumerates the kinds of punishments to which offenders are liable?",
    "options": {
      "A": "Section 40",
      "B": "Section 53",
      "C": "Section 75",
      "D": "Section 109"
    },
    "correctAnswer": "B",
    "explanation": "Section 53 PPC enumerates ten kinds of punishments: Qisas, Diyat, Arsh, Daman, Ta'zir, Death, Imprisonment for life, Imprisonment (rigorous or simple), Forfeiture of property, and Fine.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_97",
    "questionText": "Under Section 76 of the PPC, nothing is an offence which is done by a person who is, or who by reason of a mistake of fact in good faith believes himself to be:",
    "options": {
      "A": "Bound by law to do it",
      "B": "Above the law",
      "C": "Acting under mistake of law",
      "D": "Immune from prosecution"
    },
    "correctAnswer": "A",
    "explanation": "Section 76 PPC protects acts done by a person bound, or by mistake of fact believing himself bound, by law (Ignorantia facti excusat, ignorantia juris non excusat).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_98",
    "questionText": "Under Section 82 of the PPC, nothing is an offence which is done by a child under the age of:",
    "options": {
      "A": "7 years",
      "B": "10 years",
      "C": "14 years",
      "D": "18 years"
    },
    "correctAnswer": "B",
    "explanation": "Under Section 82 PPC (as amended by Criminal Law Amendment Act 2016), nothing is an offence which is done by a child under ten years of age (doli incapax).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_99",
    "questionText": "Under Section 84 of the PPC (defence of insanity / McNaughten rule), an act is not an offence if by reason of unsoundness of mind the person was incapable of knowing:",
    "options": {
      "A": "The nature of the act, or that he was doing what is either wrong or contrary to law",
      "B": "His own legal name and address",
      "C": "The penalty prescribed for the offence",
      "D": "The identity of the police officer"
    },
    "correctAnswer": "A",
    "explanation": "Section 84 PPC provides that nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act, or that what he is doing is either wrong or contrary to law.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_100",
    "questionText": "Under Section 96 of the PPC, nothing is an offence which is done in the exercise of the right of:",
    "options": {
      "A": "Public interest litigation",
      "B": "Private defence",
      "C": "Official immunity",
      "D": "Retaliation"
    },
    "correctAnswer": "B",
    "explanation": "Section 96 PPC declares: 'Nothing is an offence which is done in the exercise of the right of private defence.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_101",
    "questionText": "Under Section 100 of the PPC, the right of private defence of the body extends to causing death in which of the following assaults?",
    "options": {
      "A": "An assault causing reasonable apprehension of death or grievous hurt",
      "B": "An assault with the intention of committing rape or gratifying unnatural lust",
      "C": "An assault with the intention of kidnapping or abducting",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Section 100 PPC specifies six descriptions of assault where private defence of the body extends to the voluntary causing of death, including apprehension of death, grievous hurt, rape, unnatural lust, kidnapping/abducting, and wrongful confinement.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_102",
    "questionText": "Under Section 107 of the PPC, a person abets the doing of a thing who:",
    "options": {
      "A": "Instigates any person to do that thing",
      "B": "Engages with one or more persons in a conspiracy for the doing of that thing",
      "C": "Intentionally aids, by any act or illegal omission, the doing of that thing",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Section 107 PPC defines abetment under three modes: instigation, conspiracy, and intentional aiding.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_103",
    "questionText": "Criminal Conspiracy is defined under which section of the PPC?",
    "options": {
      "A": "Section 108",
      "B": "Section 120-A",
      "C": "Section 121",
      "D": "Section 124-A"
    },
    "correctAnswer": "B",
    "explanation": "Section 120-A PPC defines Criminal Conspiracy: When two or more persons agree to do, or cause to be done, an illegal act, or an act which is not illegal by illegal means, such an agreement is designated a criminal conspiracy.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_104",
    "questionText": "Waging or attempting to wage war against Pakistan is punishable under which section of the PPC?",
    "options": {
      "A": "Section 121",
      "B": "Section 124-A",
      "C": "Section 131",
      "D": "Section 153-A"
    },
    "correctAnswer": "A",
    "explanation": "Section 121 PPC punishes waging or attempting to wage war or abetting waging of war against Pakistan with death, or imprisonment for life, and fine.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_105",
    "questionText": "Under Section 141 of the PPC, an assembly of how many persons is designated an 'unlawful assembly' if their common object meets statutory criteria?",
    "options": {
      "A": "Two or more",
      "B": "Three or more",
      "C": "Five or more",
      "D": "Ten or more"
    },
    "correctAnswer": "C",
    "explanation": "Section 141 PPC defines an Unlawful Assembly as an assembly of five or more persons having one of the specified common objects.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_106",
    "questionText": "Giving false evidence in a judicial proceeding is punishable under Section 193 of the PPC with imprisonment which may extend to:",
    "options": {
      "A": "3 years",
      "B": "5 years",
      "C": "7 years and fine",
      "D": "Life imprisonment"
    },
    "correctAnswer": "C",
    "explanation": "Section 193 PPC provides that whoever intentionally gives false evidence in any stage of a judicial proceeding shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_107",
    "questionText": "Under Section 300 of the PPC, intentional causing of death of a human being is designated as:",
    "options": {
      "A": "Qatl-i-Khata",
      "B": "Qatl-i-Shibh-i-Amd",
      "C": "Qatl-i-Amd",
      "D": "Qatl-bis-Sabab"
    },
    "correctAnswer": "C",
    "explanation": "Section 300 PPC defines Qatl-i-Amd: Whoever, with the intention of causing death or with the intention of causing bodily injury to a person, causes death, commits Qatl-i-Amd.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_108",
    "questionText": "What is the primary punishment for Qatl-i-Amd under Section 302(a) of the PPC?",
    "options": {
      "A": "Death as Qisas",
      "B": "Imprisonment for life as Ta'zir",
      "C": "Diyat only",
      "D": "Rigorous imprisonment for 14 years"
    },
    "correctAnswer": "A",
    "explanation": "Under Section 302(a) PPC, Qatl-i-Amd is punishable with death as Qisas.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_109",
    "questionText": "Under Section 318 of the PPC, whoever, without any intention to cause death or cause harm, causes the death of another person by mistake of act or mistake of fact, commits:",
    "options": {
      "A": "Qatl-i-Amd",
      "B": "Qatl-i-Shibh-i-Amd",
      "C": "Qatl-i-Khata",
      "D": "Qatl-bis-Sabab"
    },
    "correctAnswer": "C",
    "explanation": "Section 318 PPC defines Qatl-i-Khata as causing death without intention to cause death or cause harm, either by mistake of act or mistake of fact.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_110",
    "questionText": "Under Section 378 of the PPC, which of the following is an essential ingredient of 'Theft'?",
    "options": {
      "A": "Dishonest intention to take movable property",
      "B": "The property must be taken out of the possession of any person",
      "C": "The taking must be without that person's consent",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Section 378 PPC requires: (1) dishonest intention, (2) movable property, (3) taken out of possession of another, (4) without consent, and (5) moving in order to such taking.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_111",
    "questionText": "Under Section 383 of the PPC, intentionally putting any person in fear of any injury and dishonestly inducing that person to deliver property is:",
    "options": {
      "A": "Theft",
      "B": "Extortion",
      "C": "Cheating",
      "D": "Robbery"
    },
    "correctAnswer": "B",
    "explanation": "Section 383 PPC defines Extortion: Whoever intentionally puts any person in fear of any injury to that person or to any other, and thereby dishonestly induces the person so put in fear to deliver to any person any property or valuable security, commits extortion.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_112",
    "questionText": "Under Section 390 of the PPC, when does Theft become 'Robbery'?",
    "options": {
      "A": "When more than 10 people are present",
      "B": "If, in order to committing theft, the offender voluntarily causes or attempts to cause death, hurt, or wrongful restraint",
      "C": "If the value of stolen goods exceeds 1 million rupees",
      "D": "When committed during nighttime only"
    },
    "correctAnswer": "B",
    "explanation": "Section 390 PPC provides that theft is robbery if, in order to the committing of the theft, or in carrying away property obtained by theft, the offender voluntarily causes or attempts to cause to any person death or hurt or wrongful restraint.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_113",
    "questionText": "Under Section 391 of the PPC, when five or more persons conjointly commit or attempt to commit a robbery, the offence is designated as:",
    "options": {
      "A": "Extortion",
      "B": "Dacoity",
      "C": "Hijacking",
      "D": "Banditry"
    },
    "correctAnswer": "B",
    "explanation": "Section 391 PPC defines Dacoity: When five or more persons conjointly commit or attempt to commit a robbery, every person so committing or attempting is said to commit 'dacoity'.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_114",
    "questionText": "Dishonest misappropriation of property is defined under which section of the PPC?",
    "options": {
      "A": "Section 403",
      "B": "Section 405",
      "C": "Section 415",
      "D": "Section 420"
    },
    "correctAnswer": "A",
    "explanation": "Section 403 PPC defines Dishonest Misappropriation of Property: Whoever dishonestly misappropriates or converts to his own use any movable property, shall be punished with imprisonment up to two years, or with fine, or both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_115",
    "questionText": "Criminal Breach of Trust by a Public Servant, or by a banker, merchant or agent, is punishable under which section of the PPC?",
    "options": {
      "A": "Section 406",
      "B": "Section 408",
      "C": "Section 409",
      "D": "Section 420"
    },
    "correctAnswer": "C",
    "explanation": "Section 409 PPC deals with Criminal Breach of Trust by public servant, banker, merchant, or agent, punishable with imprisonment for life or imprisonment up to ten years, and fine (a key schedule offence investigated by FIA).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_116",
    "questionText": "Cheating and dishonestly inducing delivery of property is punishable under which section of the PPC?",
    "options": {
      "A": "Section 417",
      "B": "Section 419",
      "C": "Section 420",
      "D": "Section 425"
    },
    "correctAnswer": "C",
    "explanation": "Section 420 PPC deals with Cheating and dishonestly inducing delivery of property, punishable with imprisonment up to seven years and fine.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_117",
    "questionText": "Under Section 463 of the PPC, making any false document with intent to cause damage or injury to the public or any person constitutes:",
    "options": {
      "A": "Perjury",
      "B": "Forgery",
      "C": "Cheating",
      "D": "Mischief"
    },
    "correctAnswer": "B",
    "explanation": "Section 463 PPC defines Forgery: Whoever makes any false document or electronic record with intent to cause damage or injury to the public or to any person, or to support any claim or title, commits forgery.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_118",
    "questionText": "Which section of the PPC prescribes the general punishment for Forgery?",
    "options": {
      "A": "Section 465",
      "B": "Section 468",
      "C": "Section 471",
      "D": "Section 477-A"
    },
    "correctAnswer": "A",
    "explanation": "Section 465 PPC provides punishment for forgery: imprisonment of either description for a term which may extend to two years, or with fine, or with both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_119",
    "questionText": "Falsification of Accounts by a clerk, officer, or servant is punishable under which section of the PPC?",
    "options": {
      "A": "Section 420",
      "B": "Section 468",
      "C": "Section 471",
      "D": "Section 477-A"
    },
    "correctAnswer": "D",
    "explanation": "Section 477-A PPC punishes Falsification of Accounts by a clerk, officer, or servant with imprisonment up to seven years, or with fine, or with both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_120",
    "questionText": "Under Section 499 of the PPC, whoever by words spoken or intended to be read, makes or publishes any imputation concerning any person intending to harm reputation, commits:",
    "options": {
      "A": "Criminal Intimidation",
      "B": "Defamation",
      "C": "Nuisance",
      "D": "Affray"
    },
    "correctAnswer": "B",
    "explanation": "Section 499 PPC defines Defamation, punishable under Section 500 PPC with simple imprisonment for a term which may extend to two years, or with fine, or with both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Pakistan Penal Code (PPC), 1860",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_121",
    "questionText": "The Anti Money Laundering Act (AMLA), 2010 was enacted as Act No. _____ of 2010.",
    "options": {
      "A": "Act IV of 2010",
      "B": "Act VII of 2010",
      "C": "Act X of 2010",
      "D": "Act XV of 2010"
    },
    "correctAnswer": "B",
    "explanation": "The Anti Money Laundering Act, 2010 is officially designated as Act No. VII of 2010, receiving Presidential assent in March 2010.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_122",
    "questionText": "Under Section 3 of AMLA 2010, a person is guilty of the offence of money laundering if he:",
    "options": {
      "A": "Acquires, converts, possesses, uses or transfers property, knowing or having reason to believe that such property is proceeds of crime",
      "B": "Conceals or disguises the true nature, origin, location, disposition, movement or ownership of property knowing it to be proceeds of crime",
      "C": "Participates in, associates, conspires to commit, attempts to commit, aids, abets, facilitates, or counsels commission of any acts above",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Section 3 of AMLA 2010 comprehensively defines the offence of money laundering covering acquisition, conversion, concealment, transfer, and abetment/conspiracy.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_123",
    "questionText": "What is the punishment prescribed for the offence of money laundering under Section 4 of AMLA 2010?",
    "options": {
      "A": "Imprisonment for 6 months and fine up to 500,000 rupees",
      "B": "Rigorous imprisonment for not less than 1 year up to 10 years, and fine up to 25 million rupees, and forfeiture of property",
      "C": "Life imprisonment without fine",
      "D": "Imprisonment up to 3 years or fine of 1 million rupees"
    },
    "correctAnswer": "B",
    "explanation": "Under Section 4 AMLA 2010, whoever commits the offence of money laundering shall be punished with rigorous imprisonment for a term which shall not be less than one year but may extend to ten years and shall also be liable to fine which may extend to twenty-five million rupees and forfeiture of property.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_124",
    "questionText": "Under AMLA 2010, what is a 'Predicate Offence' defined as under Section 2(xxv)?",
    "options": {
      "A": "Any traffic violation punishable with fine",
      "B": "An offence specified in the Schedule to AMLA 2010, proceeds of which may become the subject of an offence of money laundering",
      "C": "A civil contempt of court",
      "D": "Any breach of contract"
    },
    "correctAnswer": "B",
    "explanation": "Section 2(xxv) AMLA 2010 defines 'predicate offence' as an offence specified in the Schedule to this Act, the proceeds of which may generate assets involved in money laundering.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_125",
    "questionText": "Under Section 6 of AMLA 2010, the Financial Monitoring Unit (FMU) is established by:",
    "options": {
      "A": "The Supreme Court of Pakistan",
      "B": "The Federal Government, housed in the State Bank of Pakistan",
      "C": "The provincial police departments",
      "D": "The United Nations Security Council directly"
    },
    "correctAnswer": "B",
    "explanation": "Section 6(1) AMLA 2010 provides that the Federal Government shall establish a Financial Monitoring Unit (FMU) which shall be housed in the State Bank of Pakistan or any other place.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_126",
    "questionText": "What is the primary statutory function of the Financial Monitoring Unit (FMU) under Section 6(4) of AMLA 2010?",
    "options": {
      "A": "Conduct physical raids and make arrests directly",
      "B": "Receive, analyze and disseminate Suspicious Transaction Reports (STRs) and Currency Transaction Reports (CTRs)",
      "C": "Preside over criminal trials as a Court of Session",
      "D": "Draft the federal annual budget"
    },
    "correctAnswer": "B",
    "explanation": "Section 6(4) AMLA 2010 mandates that the FMU shall receive Suspicious Transaction Reports (STRs) and Currency Transaction Reports (CTRs), analyze them, and disseminate financial intelligence to investigating agencies.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_127",
    "questionText": "Under Section 5 of AMLA 2010, the National Executive Committee (NEC) is chaired by the:",
    "options": {
      "A": "Director General of FIA",
      "B": "Federal Minister for Finance or Advisor to Prime Minister on Finance",
      "C": "Governor of State Bank of Pakistan",
      "D": "Chairman of NAB"
    },
    "correctAnswer": "B",
    "explanation": "Section 5(1) AMLA 2010 provides that the National Executive Committee shall consist of the Minister for Finance or Advisor to the Prime Minister on Finance as its Chairman.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_128",
    "questionText": "Who serves as the Chairman of the General Committee (GC) under Section 5(4) of AMLA 2010?",
    "options": {
      "A": "Finance Secretary",
      "B": "Secretary Interior",
      "C": "Governor State Bank of Pakistan",
      "D": "Director General FMU"
    },
    "correctAnswer": "A",
    "explanation": "Under Section 5(4) AMLA 2010, the General Committee is chaired by the Finance Secretary of the Federal Government.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_129",
    "questionText": "Under Section 7 of AMLA 2010, reporting entities must file a Suspicious Transaction Report (STR) to the FMU within:",
    "options": {
      "A": "Immediately, but not later than seven working days after forming suspicion",
      "B": "30 days from the end of the fiscal quarter",
      "C": "6 months after transaction completion",
      "D": "Only upon receiving a written notice from the court"
    },
    "correctAnswer": "A",
    "explanation": "Section 7(1) AMLA 2010 specifies that reporting entities must file an STR promptly and within seven working days of forming the suspicion or having reasonable grounds of suspicion.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_130",
    "questionText": "Under Section 7 of AMLA 2010 and related regulations, a Currency Transaction Report (CTR) must be submitted for cash transactions exceeding:",
    "options": {
      "A": "500,000 PKR",
      "B": "1,000,000 PKR",
      "C": "2,000,000 PKR (or equivalent in foreign currency)",
      "D": "5,000,000 PKR"
    },
    "correctAnswer": "C",
    "explanation": "The statutory threshold for submitting Currency Transaction Reports (CTRs) to the FMU is cash transactions of two million rupees (PKR 2,000,000) or equivalent foreign currency.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_131",
    "questionText": "Under Section 7C of AMLA 2010, reporting entities are required to maintain records of transactions and Customer Due Diligence (CDD) for a minimum period of:",
    "options": {
      "A": "1 year",
      "B": "3 years",
      "C": "5 years from the date of transaction or termination of business relationship",
      "D": "10 years"
    },
    "correctAnswer": "C",
    "explanation": "Section 7C AMLA 2010 mandates that reporting entities maintain records of transactions, account files, and CDD data for at least five years after completion of transaction or business relationship.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_132",
    "questionText": "Under AMLA 2010, which of the following is considered a 'Designated Non-Financial Business and Profession' (DNFBP)?",
    "options": {
      "A": "Real estate agents and developers",
      "B": "Dealers in precious metals and precious stones",
      "C": "Lawyers, notaries, and accountants when conducting certain specified financial transactions for clients",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Section 2(xii-a) AMLA 2010 includes real estate agents, precious metal dealers, lawyers, and accountants under the definition of DNFBPs in line with FATF standards.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_133",
    "questionText": "Under Section 8 of AMLA 2010, an investigating officer, with prior permission of the Court, may provisionally attach property involved in money laundering for a period not exceeding:",
    "options": {
      "A": "30 days",
      "B": "60 days",
      "C": "90 days",
      "D": "180 days"
    },
    "correctAnswer": "D",
    "explanation": "Section 8 AMLA 2010 provides that an investigating officer with prior court permission may provisionally attach property for a period not exceeding 180 days.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_134",
    "questionText": "Under Section 9 of AMLA 2010, after hearing the aggrieved person, the Court may confirm the attachment of property if it is satisfied that the property is:",
    "options": {
      "A": "Proceeds of crime or involved in money laundering",
      "B": "Inherited agricultural land",
      "C": "Subject to normal commercial dispute",
      "D": "Exclusively situated outside Pakistan"
    },
    "correctAnswer": "A",
    "explanation": "Section 9 AMLA 2010 provides for confirmation of attachment by the Court if it is satisfied that the property is proceeds of crime or involved in money laundering.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_135",
    "questionText": "Which Court has jurisdiction to try offences punishable under AMLA 2010 pursuant to Section 20?",
    "options": {
      "A": "Magistrate of Second Class",
      "B": "Court of Session (or designated Special Court)",
      "C": "Federal Shariat Court directly",
      "D": "Family Court"
    },
    "correctAnswer": "B",
    "explanation": "Section 20 AMLA 2010 provides that the Court of Session shall be the Court having jurisdiction to try offences punishable under this Act.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_136",
    "questionText": "Under Section 21 of AMLA 2010, all offences punishable under the Act are:",
    "options": {
      "A": "Non-cognizable and bailable",
      "B": "Cognizable and non-bailable",
      "C": "Compoundable at the discretion of the police",
      "D": "Triable only by arbitration"
    },
    "correctAnswer": "B",
    "explanation": "Section 21(1) AMLA 2010 provides that notwithstanding anything contained in the CrPC, offences under this Act shall be cognizable and non-bailable.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_137",
    "questionText": "Under Section 21(2) of AMLA 2010, which procedural code governs investigations, arrests, searches, and trials except as otherwise provided?",
    "options": {
      "A": "Code of Civil Procedure, 1908",
      "B": "Code of Criminal Procedure, 1898",
      "C": "Representation of the People Act, 1976",
      "D": "Federal Investigation Agency Rules, 1975"
    },
    "correctAnswer": "B",
    "explanation": "Section 21(2) AMLA 2010 states that save as otherwise provided in this Act, the provisions of the Code of Criminal Procedure, 1898 shall apply to proceedings relating to offences under this Act.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_138",
    "questionText": "What does Section 34 of AMLA 2010 prohibit under the doctrine of 'Tipping-off'?",
    "options": {
      "A": "Tipping waiters at restaurants",
      "B": "Disclosing that an STR or related information is being or has been submitted to FMU or that a money laundering investigation is underway",
      "C": "Paying lawful fees to an attorney",
      "D": "Voluntary tax filings with FBR"
    },
    "correctAnswer": "B",
    "explanation": "Section 34 AMLA 2010 prohibits tipping-off: reporting entities and their officers shall not disclose to any person that an STR or CTR or information is being provided or that an inquiry is being carried out.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_139",
    "questionText": "Under Section 34(2) of AMLA 2010, any person who knowingly and willfully violates the prohibition of tipping-off shall be liable to:",
    "options": {
      "A": "A verbal warning only",
      "B": "Imprisonment for a term which may extend to five years, or fine up to five million rupees, or both",
      "C": "Permanent disqualification from voting",
      "D": "Community service for 10 days"
    },
    "correctAnswer": "B",
    "explanation": "Section 34(2) AMLA 2010 punishes tipping-off with imprisonment extending up to five years, or fine which may extend to five million rupees, or both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_140",
    "questionText": "Under Section 26 of AMLA 2010, the Federal Government may enter into agreements with foreign governments for:",
    "options": {
      "A": "Exchange of intelligence, mutual legal assistance, and recovery of proceeds of crime",
      "B": "Joint military maneuvers only",
      "C": "Visa waivers for tourists",
      "D": "Currency unification"
    },
    "correctAnswer": "A",
    "explanation": "Section 26 AMLA 2010 authorizes the Federal Government to enter into bilateral or multilateral agreements with foreign governments for mutual legal assistance and sharing of information.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_141",
    "questionText": "Which agency is an authorized investigating agency under Section 2(j) and Section 24 of AMLA 2010?",
    "options": {
      "A": "Federal Investigation Agency (FIA)",
      "B": "National Accountability Bureau (NAB)",
      "C": "Anti Narcotics Force (ANF) and Federal Board of Revenue (FBR)",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Under AMLA 2010, investigating agencies include FIA, NAB, ANF, Directorate General of Intelligence and Investigation (Customs & Inland Revenue - FBR), and provincial police departments.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_142",
    "questionText": "Under Section 10 of AMLA 2010, when an accused is convicted of an offence of money laundering, the Court shall order that the property involved in money laundering shall:",
    "options": {
      "A": "Be returned to the convict upon payment of tax",
      "B": "Stand forfeited to the Federal Government",
      "C": "Be auctioned and proceeds divided among police officers",
      "D": "Be placed in private trust"
    },
    "correctAnswer": "B",
    "explanation": "Section 10 AMLA 2010 provides that where the Court finds an offence of money laundering proved, it shall order that the property involved shall stand forfeited to the Federal Government.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_143",
    "questionText": "Under Section 14 of AMLA 2010, an investigating officer has the power to:",
    "options": {
      "A": "Enter and search any building, place, vessel, or vehicle where he has reason to suspect property involved in money laundering is kept",
      "B": "Break open any lock of any door or box",
      "C": "Seize any records, books of accounts, or property found as a result of such search",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Section 14 AMLA 2010 vests extensive powers of search and seizure in investigating officers during money laundering investigations.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_144",
    "questionText": "Under Section 15 of AMLA 2010, an investigating officer may inspect and take copies of records or books of accounts from:",
    "options": {
      "A": "Any reporting entity or financial institution",
      "B": "Foreign embassies without permission",
      "C": "Supreme Court private chambers",
      "D": "President's personal residence"
    },
    "correctAnswer": "A",
    "explanation": "Section 15 AMLA 2010 empowers authorized officers to survey, inspect, and take copies of records maintained by reporting entities.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_145",
    "questionText": "Under Section 41 of AMLA 2010, the provisions of AMLA shall have effect:",
    "options": {
      "A": "Subject to provincial police rules",
      "B": "Notwithstanding anything inconsistent therewith contained in any other law for the time being in force (overriding effect)",
      "C": "Only if approved by provincial assemblies",
      "D": "Only during national financial emergencies"
    },
    "correctAnswer": "B",
    "explanation": "Section 41 AMLA 2010 provides an overriding clause: the provisions of this Act shall have effect notwithstanding anything inconsistent contained in any other law for the time being in force.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_146",
    "questionText": "Under Section 33 of AMLA 2010, what is the penalty for reporting entities failing to comply with CDD, record-keeping, or reporting obligations?",
    "options": {
      "A": "Administrative fine and revocation or suspension of operating license",
      "B": "Imprisonment of all customers of the bank",
      "C": "Immediate closure of all branches in Pakistan",
      "D": "None; compliance is purely voluntary"
    },
    "correctAnswer": "A",
    "explanation": "Section 33 AMLA 2010 empowers regulatory authorities and the court to impose administrative monetary sanctions, penalties, and direct suspension/revocation of licenses.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_147",
    "questionText": "Under Section 12 of AMLA 2010, what happens to the attached property if the trial results in an acquittal of the accused?",
    "options": {
      "A": "The property is permanently retained by the police",
      "B": "The Court shall order the release of the attached property to the person entitled to receive it",
      "C": "The property is transferred to the State Bank reserves",
      "D": "The property is destroyed"
    },
    "correctAnswer": "B",
    "explanation": "Section 12 AMLA 2010 provides that on termination of trial resulting in acquittal, the attachment of property ceases and the court orders its release to the entitled party.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_148",
    "questionText": "Under Section 43 of AMLA 2010, who is empowered to make rules for carrying out the purposes of this Act?",
    "options": {
      "A": "The Federal Government, in consultation with the National Executive Committee",
      "B": "The High Court Chief Justice",
      "C": "The Attorney General independently",
      "D": "The local District Bar Associations"
    },
    "correctAnswer": "A",
    "explanation": "Section 43 AMLA 2010 vests the rule-making power in the Federal Government, in consultation with the National Executive Committee.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_149",
    "questionText": "Under Section 16 of AMLA 2010, where an investigating officer has arrested any person, he shall immediately inform the person of:",
    "options": {
      "A": "The grounds of such arrest",
      "B": "The full names of all secret informants",
      "C": "The political party affiliation of the officer",
      "D": "The private bank balance of the prosecutor"
    },
    "correctAnswer": "A",
    "explanation": "Section 16 AMLA 2010 mandates that an arrested person shall be informed of the grounds of his arrest as soon as may be, in accordance with constitutional guarantees (Article 10).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_150",
    "questionText": "Under Section 37 of AMLA 2010, no suit, prosecution or other legal proceeding shall lie against the Federal Government, FMU, or any officer for:",
    "options": {
      "A": "Anything which is in good faith done or intended to be done under AMLA (Indemnity clause)",
      "B": "Gross corruption and bribery",
      "C": "Willful destruction of evidence",
      "D": "Fabrication of false STRs"
    },
    "correctAnswer": "A",
    "explanation": "Section 37 AMLA 2010 provides statutory indemnity protecting the Federal Government, FMU, and investigating officers for acts done in good faith under the Act.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Anti Money Laundering Act 2010",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_151",
    "questionText": "The Prevention of Electronic Crimes Act (PECA) was enacted by the Parliament of Pakistan in which year?",
    "options": {
      "A": "2014",
      "B": "2015",
      "C": "2016",
      "D": "2018"
    },
    "correctAnswer": "C",
    "explanation": "The Prevention of Electronic Crimes Act, 2016 (Act XL of 2016) was passed by Parliament and received Presidential assent in August 2016.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_152",
    "questionText": "What are the three pillars of the foundational 'CIA Triad' in Cyber Security?",
    "options": {
      "A": "Confidentiality, Integrity, and Availability",
      "B": "Control, Inspection, and Authorization",
      "C": "Centralization, Identification, and Access",
      "D": "Cybersecurity, Intelligence, and Antivirus"
    },
    "correctAnswer": "A",
    "explanation": "The CIA Triad stands for Confidentiality (privacy of data), Integrity (trustworthiness/accuracy of data), and Availability (accessibility by authorized users).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_153",
    "questionText": "Under Section 3 of PECA 2016, unauthorized access to an information system or data is punishable with imprisonment up to:",
    "options": {
      "A": "3 months, or fine up to 50,000 rupees",
      "B": "6 months, or fine up to 50,000 rupees",
      "C": "3 months, or fine up to 50,000 rupees, or both",
      "D": "2 years, or fine up to 1 million rupees"
    },
    "correctAnswer": "C",
    "explanation": "Section 3 of PECA 2016 punishes unauthorized access to an information system or data with imprisonment for a term which may extend to three months or with fine which may extend to fifty thousand rupees or with both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_154",
    "questionText": "Under Section 4 of PECA 2016, unauthorized copying or transmission of data with dishonest intention is punishable with imprisonment up to:",
    "options": {
      "A": "6 months or fine up to 100,000 rupees, or both",
      "B": "1 year or fine up to 500,000 rupees",
      "C": "3 years or fine up to 1 million rupees",
      "D": "5 years"
    },
    "correctAnswer": "A",
    "explanation": "Section 4 PECA 2016 provides punishment of imprisonment for a term which may extend to six months, or with fine up to one hundred thousand rupees, or both, for unauthorized copying or transmission of data.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_155",
    "questionText": "Under Section 5 of PECA 2016, interference with an information system or data (such as altering, deleting or impairing functioning) is punishable with imprisonment extending up to:",
    "options": {
      "A": "1 year",
      "B": "2 years, or fine up to 500,000 rupees, or both",
      "C": "5 years",
      "D": "10 years"
    },
    "correctAnswer": "B",
    "explanation": "Section 5 PECA 2016 prescribes imprisonment for a term which may extend to two years, or fine which may extend to five hundred thousand rupees, or both for interference with information systems or data.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_156",
    "questionText": "Under Section 6 of PECA 2016, unauthorized access to 'Critical Infrastructure Information Systems or Data' is punishable with imprisonment up to:",
    "options": {
      "A": "1 year",
      "B": "3 years, or fine up to 1 million rupees, or both",
      "C": "5 years",
      "D": "14 years"
    },
    "correctAnswer": "B",
    "explanation": "Section 6 PECA 2016 punishes unauthorized access to critical infrastructure information systems with imprisonment for a term which may extend to three years, or with fine which may extend to one million rupees, or both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_157",
    "questionText": "Under Section 8 of PECA 2016, interference with Critical Infrastructure Information Systems or Data is punishable with imprisonment up to:",
    "options": {
      "A": "3 years",
      "B": "5 years, or fine up to 5 million rupees, or both",
      "C": "7 years, or fine up to 10 million rupees, or both",
      "D": "14 years"
    },
    "correctAnswer": "C",
    "explanation": "Section 8 PECA 2016 provides that whoever with dishonest intention interferes with critical infrastructure information system shall be punished with imprisonment up to seven years, or with fine up to ten million rupees, or both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_158",
    "questionText": "Under Section 10 of PECA 2016, what is the maximum punishment for 'Cyber Terrorism'?",
    "options": {
      "A": "7 years imprisonment",
      "B": "10 years imprisonment and fine of 10 million rupees",
      "C": "14 years imprisonment, or fine up to 50 million rupees, or both",
      "D": "Death penalty in all cases"
    },
    "correctAnswer": "C",
    "explanation": "Section 10 PECA 2016 provides that cyber terrorism is punishable with imprisonment for a term which may extend to fourteen years, or with fine which may extend to fifty million rupees, or with both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_159",
    "questionText": "Electronic Forgery is defined and penalized under which section of PECA 2016?",
    "options": {
      "A": "Section 11",
      "B": "Section 13",
      "C": "Section 16",
      "D": "Section 19"
    },
    "correctAnswer": "B",
    "explanation": "Section 13 PECA 2016 deals with Electronic Forgery, punishable with imprisonment up to three years, or fine up to two hundred and fifty thousand rupees, or both (or seven years and five million rupees if concerning critical infrastructure).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_160",
    "questionText": "Electronic Fraud (causing wrongful gain or wrongful loss by deceptive electronic means) is penalized under which section of PECA 2016?",
    "options": {
      "A": "Section 12",
      "B": "Section 14",
      "C": "Section 17",
      "D": "Section 21"
    },
    "correctAnswer": "B",
    "explanation": "Section 14 PECA 2016 prescribes punishment for Electronic Fraud with imprisonment up to two years, or fine up to ten million rupees, or both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_161",
    "questionText": "Under Section 16 of PECA 2016, unauthorized use of identity information (Identity Theft) is punishable with imprisonment up to:",
    "options": {
      "A": "1 year",
      "B": "3 years, or fine up to 5 million rupees, or both",
      "C": "7 years",
      "D": "10 years"
    },
    "correctAnswer": "B",
    "explanation": "Section 16 PECA 2016 punishes unauthorized obtaining, selling, possessing, or transmitting another person's identity information with imprisonment up to three years, or fine up to five million rupees, or both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_162",
    "questionText": "Under Section 17 of PECA 2016, unauthorized issuance of SIM cards by a service provider or agent is punishable with imprisonment up to:",
    "options": {
      "A": "1 year",
      "B": "3 years, or fine up to 500,000 rupees, or both",
      "C": "5 years",
      "D": "10 years"
    },
    "correctAnswer": "B",
    "explanation": "Section 17 PECA 2016 provides that unauthorized issuance of SIM cards or electronic identity modules is punishable with imprisonment up to three years, or fine up to five hundred thousand rupees, or both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_163",
    "questionText": "Under Section 21 of PECA 2016, offences against the modesty of a natural person and minor (such as non-consensual sharing of intimate images) are punishable with imprisonment up to:",
    "options": {
      "A": "2 years",
      "B": "5 years, or fine up to 5 million rupees, or both",
      "C": "7 years (or 10 years for minors)",
      "D": "14 years"
    },
    "correctAnswer": "B",
    "explanation": "Section 21 PECA 2016 punishes offences against the modesty of a natural person with imprisonment up to five years, or fine up to five million rupees, or both.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_164",
    "questionText": "Under Section 24 of PECA 2016, 'Cyber Stalking' includes which of the following acts committed through an information system?",
    "options": {
      "A": "Following a person or contacting him despite disinterest",
      "B": "Spying upon or monitoring someone's internet usage",
      "C": "Distributing photos or information to harass or intimidate a person",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "Section 24 PECA 2016 comprehensively defines Cyber Stalking to include repeated unwanted contact, electronic surveillance/monitoring, and distributing material to intimidate.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_165",
    "questionText": "Under Section 29 of PECA 2016, service providers are required to retain specified traffic data for a period of at least:",
    "options": {
      "A": "30 days",
      "B": "90 days",
      "C": "1 year (or as directed by the regulatory authority)",
      "D": "5 years"
    },
    "correctAnswer": "C",
    "explanation": "Section 32 (and Section 29) of PECA 2016 mandates that service providers shall retain traffic data for a minimum period of one year or such period as the Pakistan Telecommunication Authority (PTA) may notify.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_166",
    "questionText": "Under Section 30 of PECA 2016, which designated law enforcement agency is empowered to investigate electronic crimes?",
    "options": {
      "A": "Federal Investigation Agency (FIA) / Cyber Crime Wing (or National Cyber Crime Investigation Agency NCCIA)",
      "B": "Traffic Police",
      "C": "Customs Preventive only",
      "D": "Municipal Corporation"
    },
    "correctAnswer": "A",
    "explanation": "Under Section 30 PECA 2016, the Federal Government designated the Federal Investigation Agency (Cyber Crime Wing) as the primary investigation agency.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_167",
    "questionText": "Under Section 33 of PECA 2016, an authorized officer may search and seize an information system or computer data only with a warrant issued by the:",
    "options": {
      "A": "Station House Officer",
      "B": "Court",
      "C": "Secretary of Information Technology",
      "D": "PTA Chairman"
    },
    "correctAnswer": "B",
    "explanation": "Section 33 PECA 2016 mandates that an authorized officer shall obtain a warrant from the Court before searching premises or seizing computer equipment and data.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_168",
    "questionText": "What exception does Section 34 of PECA 2016 provide regarding search and seizure without warrant?",
    "options": {
      "A": "Allowed only where there is imminent threat of destruction of evidence or commission of cyber terrorism or offence against modesty of a minor",
      "B": "Allowed at the personal whim of any constable",
      "C": "Allowed in all cases without restriction",
      "D": "Allowed only on weekends"
    },
    "correctAnswer": "A",
    "explanation": "Section 34 PECA 2016 restricts warrantless search and seizure to emergency/exigent situations involving reasonable apprehension of destruction of critical data, cyber terrorism, or offences against minors.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_ad_169",
    "questionText": "Which type of cyber attack involves overwhelming a server or network with flood traffic to make it unavailable to legitimate users?",
    "options": {
      "A": "Phishing",
      "B": "Distributed Denial of Service (DDoS)",
      "C": "Man-in-the-Middle (MitM)",
      "D": "SQL Injection"
    },
    "correctAnswer": "B",
    "explanation": "A Distributed Denial of Service (DDoS) attack overwhelms targeted systems with malicious flood traffic originating from multiple compromised devices (botnet).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_170",
    "questionText": "What is 'Ransomware' in cyber security?",
    "options": {
      "A": "Hardware used to increase internet bandwidth",
      "B": "Malicious software that encrypts a victim's files and demands payment for the decryption key",
      "C": "A firewall protocol for verifying SSL certificates",
      "D": "An open-source database management tool"
    },
    "correctAnswer": "B",
    "explanation": "Ransomware is malware designed to deny access to computer files by encrypting them until a ransom sum is paid to the cyber criminals.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_171",
    "questionText": "What does the term 'Phishing' refer to?",
    "options": {
      "A": "Fraudulent attempts to obtain sensitive information like usernames and passwords by impersonating a trustworthy entity",
      "B": "Securing passwords through hashing and salting",
      "C": "Upgrading routers to prevent data leaks",
      "D": "Running legal network diagnostics"
    },
    "correctAnswer": "A",
    "explanation": "Phishing is a social engineering attack where attackers deceive users into revealing confidential credentials through fraudulent emails, websites, or messages.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_172",
    "questionText": "In cryptography and cyber security, what does 'Non-Repudiation' mean?",
    "options": {
      "A": "The ability to refute any online payment",
      "B": "Assurance that the sender of data cannot successfully deny having sent the data or originated the signature",
      "C": "Automatic deletion of server logs",
      "D": "Encrypting hardware with symmetric keys"
    },
    "correctAnswer": "B",
    "explanation": "Non-repudiation ensures that a party to a communication or digital transaction cannot deny the authenticity of their signature or having sent the communication.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_173",
    "questionText": "Under PECA 2016, which body is responsible for Computer Emergency Response (CERT) to coordinate cyber incidents nationally?",
    "options": {
      "A": "National Computer Emergency Response Team (National CERT) under Section 46-A",
      "B": "Provincial Sports Board",
      "C": "Pakistan Railways",
      "D": "Securities and Exchange Commission of Pakistan"
    },
    "correctAnswer": "A",
    "explanation": "Section 46-A of PECA 2016 empowers the Federal Government to establish National and Sectoral Computer Emergency Response Teams (CERTs) to coordinate cyber threat mitigation.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_174",
    "questionText": "What is a 'Zero-Day Vulnerability'?",
    "options": {
      "A": "A security flaw known to the software vendor for zero days (undisclosed flaw for which no patch currently exists)",
      "B": "A bug that only occurs on the first day of the calendar year",
      "C": "A completely patched and tested operating system",
      "D": "A trial software that expires in 24 hours"
    },
    "correctAnswer": "A",
    "explanation": "A Zero-Day vulnerability is an undisclosed computer-software vulnerability that hackers can exploit before the vendor is aware or has developed a security patch.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_175",
    "questionText": "Under Section 44 of PECA 2016, trials of offences under the Act are conducted before:",
    "options": {
      "A": "The Sessions Court or designated Court established under this Act",
      "B": "A Village Punchayat",
      "C": "The Patent Office",
      "D": "Arbitration tribunals exclusively"
    },
    "correctAnswer": "A",
    "explanation": "Section 44 PECA 2016 provides that offences under this Act shall be tried by the Court of Session, or designated Cyber Courts.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_176",
    "questionText": "What is 'Two-Factor Authentication' (2FA)?",
    "options": {
      "A": "A security mechanism requiring two distinct authentication factors to verify identity before granting access",
      "B": "Using two different web browsers simultaneously",
      "C": "Typing a password twice in the same prompt",
      "D": "Logging in from two separate computers"
    },
    "correctAnswer": "A",
    "explanation": "2FA enhances security by requiring two different verification elements (e.g., something you know like a password, and something you have like a mobile OTP code).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_177",
    "questionText": "Under Section 37 of PECA 2016, who has the power to remove, block or issue directions for blocking access to unlawful online content?",
    "options": {
      "A": "Pakistan Telecommunication Authority (PTA)",
      "B": "Federal Investigation Agency directly without notification",
      "C": "Local municipal authorities",
      "D": "Private internet service providers on their own initiative"
    },
    "correctAnswer": "A",
    "explanation": "Section 37 PECA 2016 vests statutory authority in the Pakistan Telecommunication Authority (PTA) to block or remove unlawful online content.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_178",
    "questionText": "What is 'SQL Injection' (SQLi)?",
    "options": {
      "A": "A cyber attack where malicious SQL statements are inserted into data-entry fields to manipulate backend databases",
      "B": "A method of hardware cooling in server racks",
      "C": "An automated backup utility for databases",
      "D": "A network physical cabling technique"
    },
    "correctAnswer": "A",
    "explanation": "SQL injection is a code injection technique used to attack data-driven applications by inserting malicious SQL statements into entry fields for execution.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_179",
    "questionText": "Under Section 54 of PECA 2016, the provisions of PECA shall have effect:",
    "options": {
      "A": "Subject to provincial criminal codes",
      "B": "Notwithstanding anything to the contrary contained in any other law for the time being in force (overriding clause)",
      "C": "Only if endorsed by international treaties",
      "D": "Only during declared states of emergency"
    },
    "correctAnswer": "B",
    "explanation": "Section 54 PECA 2016 specifies that the provisions of this Act shall take effect notwithstanding anything contained in any other law for the time being in force.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_180",
    "questionText": "What is 'Digital Forensics'?",
    "options": {
      "A": "The branch of forensic science encompassing the recovery, investigation, and analysis of material found in digital devices",
      "B": "Creating digital animations for cinema",
      "C": "Testing the battery life of electronic tablets",
      "D": "Manufacturing microprocessors"
    },
    "correctAnswer": "A",
    "explanation": "Digital forensics is the legal and scientific recovery, preservation, and analysis of digital evidence from electronic storage media for use in courts of law.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "Cyber Security",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_181",
    "questionText": "The Federal Investigation Agency Act, 1974 was enacted as Act No. _____ of 1975.",
    "options": {
      "A": "Act I of 1975",
      "B": "Act VIII of 1975",
      "C": "Act XII of 1975",
      "D": "Act XX of 1975"
    },
    "correctAnswer": "B",
    "explanation": "The Federal Investigation Agency Act, 1974 was passed by Parliament in 1974 and received Presidential assent on 13th January 1975 as Act No. VIII of 1975.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_182",
    "questionText": "Under Section 1(2) of the FIA Act, 1974, to whom and where does the Act extend?",
    "options": {
      "A": "Islamabad Capital Territory only",
      "B": "The whole of Pakistan, and it applies also to all citizens of Pakistan and public servants wherever they may be",
      "C": "Only to federal ministries in Islamabad and provincial capitals",
      "D": "Exclusively to airport check-posts"
    },
    "correctAnswer": "B",
    "explanation": "Section 1(2) FIA Act, 1974 explicitly states: 'It extends to the whole of Pakistan and also applies to all citizens of Pakistan and Public Servants, wherever they may be.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_183",
    "questionText": "Under Section 3 of the FIA Act, 1974, the Federal Investigation Agency is constituted by:",
    "options": {
      "A": "The Supreme Court of Pakistan",
      "B": "The Federal Government",
      "C": "The Inspector General of Police Punjab",
      "D": "The Chief of Army Staff"
    },
    "correctAnswer": "B",
    "explanation": "Section 3(1) of the FIA Act, 1974 provides that the Federal Government may constitute an agency to be called the Federal Investigation Agency.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_184",
    "questionText": "What is the primary statutory mandate of the Federal Investigation Agency under Section 3(1) of the Act?",
    "options": {
      "A": "Collecting provincial agricultural taxes",
      "B": "Inquiry into and investigation of offences specified in the Schedule (Scheduled Offences)",
      "C": "Regulating civil air traffic",
      "D": "Conducting national census operations"
    },
    "correctAnswer": "B",
    "explanation": "Section 3(1) mandates the Agency to conduct inquiry into and investigation of the offences specified in the Schedule, including offences connected with matters of the Federal Government.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_185",
    "questionText": "Under Section 3(2) of the FIA Act, 1974, who heads the Federal Investigation Agency?",
    "options": {
      "A": "The Inspector General of Police",
      "B": "The Director General appointed by the Federal Government",
      "C": "The Attorney General of Pakistan",
      "D": "The Federal Ombudsman"
    },
    "correctAnswer": "B",
    "explanation": "Section 3(2) FIA Act, 1974 provides: 'The Agency shall consist of a Director General to be appointed by the Federal Government and such number of other officers as the Federal Government may, from time to time, appoint.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_186",
    "questionText": "Under Section 4(1) of the FIA Act, 1974, the 'Superintendence' of the Agency vests in the:",
    "options": {
      "A": "Director General",
      "B": "Federal Government",
      "C": "Chief Justice of Pakistan",
      "D": "Parliamentary Committee on Interior"
    },
    "correctAnswer": "B",
    "explanation": "Section 4(1) of the FIA Act, 1974 states: 'The superintendence of the Agency shall vest in the Federal Government.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_187",
    "questionText": "Under Section 4(2) of the FIA Act, 1974, the 'Administration' of the Agency vests in the:",
    "options": {
      "A": "Interior Secretary",
      "B": "Director General",
      "C": "Federal Cabinet",
      "D": "High Court Registrar"
    },
    "correctAnswer": "B",
    "explanation": "Section 4(2) of the FIA Act, 1974 provides: 'The administration of the Agency shall vest in the Director General who shall exercise in respect of the Agency such of the powers of an Inspector-General of Police under the Police Act, 1861.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_188",
    "questionText": "Under Section 5(1) of the FIA Act, 1974, members of the Agency have what powers in relation to the investigation of scheduled offences throughout Pakistan?",
    "options": {
      "A": "Powers of revenue officers only",
      "B": "All the powers including powers relating to search, arrest of persons and seizure of property which officers of a Provincial Police have under CrPC",
      "C": "Powers to impose martial law",
      "D": "Powers to issue legislative ordinances"
    },
    "correctAnswer": "B",
    "explanation": "Section 5(1) FIA Act, 1974 vests in members of the Agency all the powers relating to search, arrest of persons, and seizure of property which officers of a Provincial Police have under the Code of Criminal Procedure, 1898.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_189",
    "questionText": "Under Section 5(2) of the FIA Act, 1974, any member of the Agency not below the rank of _____ may exercise any of the powers of the officer-in-charge of a Police Station.",
    "options": {
      "A": "Constable",
      "B": "Head Constable",
      "C": "Sub-Inspector",
      "D": "Assistant Director"
    },
    "correctAnswer": "C",
    "explanation": "Section 5(2) FIA Act, 1974 provides: 'any member of the Agency not below the rank of a Sub-Inspector may exercise any of the powers of an officer-in-charge of a police station in that area.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_190",
    "questionText": "Under Section 5(3) of the FIA Act, 1974, for the purpose of the Code of Criminal Procedure, 1898, every office or post used as an Agency station shall be deemed to be a:",
    "options": {
      "A": "Judicial Academy",
      "B": "Police Station",
      "C": "District Court",
      "D": "Detention Camp"
    },
    "correctAnswer": "B",
    "explanation": "Section 5(3) provides that any post or office used as an Agency office shall be deemed to be a Police Station within the meaning of the CrPC.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_191",
    "questionText": "Under Section 5(5) of the FIA Act, 1974, an authorized officer of the Agency may direct the manager of any bank or financial institution not to pay out or permit transfer of money if:",
    "options": {
      "A": "He has reason to believe that the property was acquired by or involved in commission of any scheduled offence",
      "B": "The account holder owes personal money to the officer",
      "C": "The bank belongs to a foreign franchise",
      "D": "The account is newly opened"
    },
    "correctAnswer": "A",
    "explanation": "Section 5(5) FIA Act, 1974 empowers an officer not below the rank of Sub-Inspector (with approval of DG/Director) to order freezing/stop-payment of bank accounts involved in scheduled offences.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_192",
    "questionText": "Under Section 6 of the FIA Act, 1974, who is empowered to amend the Schedule by notification in the official Gazette?",
    "options": {
      "A": "The Federal Government",
      "B": "The Director General FIA",
      "C": "The Supreme Judicial Council",
      "D": "The Provincial Governors"
    },
    "correctAnswer": "A",
    "explanation": "Section 6 FIA Act, 1974 provides: 'The Federal Government may, by notification in the official Gazette, amend the Schedule so as to add any entry thereto or modify or omit any entry therein.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_193",
    "questionText": "Under Section 7 of the FIA Act, 1974, the Director General may by general or special order direct that any of his powers under the Act shall:",
    "options": {
      "A": "Be exercised by any officer of the Agency specified in the order (Delegation of powers)",
      "B": "Be permanently transferred to provincial ministers",
      "C": "Be extinguished after one year",
      "D": "Be exercised only with Cabinet consensus"
    },
    "correctAnswer": "A",
    "explanation": "Section 7 FIA Act, 1974 authorizes the Director General to delegate any of his powers under this Act or rules to any officer of the Agency subordinate to him.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_194",
    "questionText": "Section 8 of the FIA Act, 1974 provides an 'Indemnity' clause which protects:",
    "options": {
      "A": "Any member of the Agency or other person against any suit, prosecution, or legal proceeding for anything done in good faith under the Act or rules",
      "B": "Criminals who confess to the Director General",
      "C": "Corrupt officials who retire voluntarily",
      "D": "Foreign spies who claim diplomatic immunity"
    },
    "correctAnswer": "A",
    "explanation": "Section 8 FIA Act, 1974 states: 'No suit, prosecution or other legal proceeding shall lie against the Federal Government, any member of the Agency or any other person in respect of anything which is in good faith done or intended to be done under this Act.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_195",
    "questionText": "Under Section 9 of the FIA Act, 1974, who is empowered to make rules for carrying out the purposes of this Act?",
    "options": {
      "A": "The Federal Government",
      "B": "The Director General FIA alone",
      "C": "The High Court Bar Association",
      "D": "The Federal Public Service Commission"
    },
    "correctAnswer": "A",
    "explanation": "Section 9(1) of the FIA Act, 1974 provides: 'The Federal Government may, by notification in the official Gazette, make rules for carrying out the purposes of this Act.'",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_196",
    "questionText": "Under Section 10 of the FIA Act, 1974, which previous legislation was repealed upon the commencement of this Act?",
    "options": {
      "A": "The Pakistan Special Police Establishment Ordinance, 1948",
      "B": "The Police Act, 1861",
      "C": "The Federal Security Force Act, 1973",
      "D": "The Criminal Law Amendment Act, 1958"
    },
    "correctAnswer": "A",
    "explanation": "Section 10(1) FIA Act, 1974 explicitly repealed the Pakistan Special Police Establishment Ordinance, 1948 (Ordinance VII of 1948).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_197",
    "questionText": "What happened to the personnel, property, and investigations of the Special Police Establishment upon repeal under Section 10(2)?",
    "options": {
      "A": "They were disbanded and pensions forfeited",
      "B": "They stood transferred to and became members, assets, and pending cases of the Federal Investigation Agency",
      "C": "They were transferred to Provincial Police forces",
      "D": "They were handed over to the Armed Forces"
    },
    "correctAnswer": "B",
    "explanation": "Section 10(2) FIA Act, 1974 provided for the seamless transfer and absorption of all personnel, assets, liabilities, and ongoing inquiries of the PSPE into the newly constituted FIA.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_198",
    "questionText": "Which of the following federal statutes is included in the Schedule to the FIA Act, 1974?",
    "options": {
      "A": "Foreign Exchange Regulation Act, 1947",
      "B": "Emigration Ordinance, 1979 / Passport Act, 1974",
      "C": "Prevention of Corruption Act, 1947 (Act II of 1947)",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "The Schedule to the FIA Act includes major federal statutes including Foreign Exchange Regulation Act 1947, Emigration Ordinance 1979, Passport Act 1974, Prevention of Corruption Act 1947, and AMLA 2010.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_199",
    "questionText": "Which wing of the FIA is directly responsible for handling legal proceedings, prosecuting cases before Special Courts, and rendering legal opinions?",
    "options": {
      "A": "Immigration Wing",
      "B": "Legal and Prosecution Wing",
      "C": "Interpol Wing",
      "D": "Anti-Human Trafficking Wing"
    },
    "correctAnswer": "B",
    "explanation": "The Legal & Prosecution Wing of the FIA (comprising Assistant Directors Legal, Deputy Directors Legal, etc.) conducts prosecutions before trial courts, appeals before High Courts, and provides statutory legal opinions.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_200",
    "questionText": "What is the primary role of an Assistant Director (Legal) (BS-17) in the Federal Investigation Agency?",
    "options": {
      "A": "Issuing driving licenses",
      "B": "Prosecuting scheduled offences in Special Courts, conducting bail arguments, and guiding investigating officers on legal requirements of evidence",
      "C": "Auditing state-owned petroleum refineries",
      "D": "Managing municipal sanitation"
    },
    "correctAnswer": "B",
    "explanation": "An Assistant Director (Legal) acts as a specialized federal public prosecutor for FIA cases, scrutinizes police reports (Challans), argues bail and trials, and advises investigators on statutory compliance.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_201",
    "questionText": "Under the FIA (Inquiries and Investigations) Rules, 1974, before registering a formal FIR under Section 154 CrPC, the Agency typically conducts:",
    "options": {
      "A": "A preliminary inquiry (Verification / Enquiry) to establish prima facie scheduled offence",
      "B": "A trial before the High Court",
      "C": "An arbitration session",
      "D": "A public referendum"
    },
    "correctAnswer": "A",
    "explanation": "Under the FIA Rules, complaints of scheduled offences undergo preliminary verification/enquiry, and an FIR is registered once a prima facie cognizable scheduled offence is established.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_202",
    "questionText": "In FIA prosecution, Special Courts are established under which statute for trial of federal offences like corruption and scheduled crimes?",
    "options": {
      "A": "Criminal Law Amendment Act, 1958 (Act XL of 1958)",
      "B": "Arbitration Act, 1940",
      "C": "Juvenile Justice System Act, 2018 only",
      "D": "Provincial Local Government Act"
    },
    "correctAnswer": "B",
    "explanation": "Special Judges (Central) are appointed under Section 3 of the Criminal Law Amendment Act, 1958 to try scheduled offences investigated by the FIA.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_203",
    "questionText": "Which of the following offences under the Pakistan Penal Code (PPC) falls within the Schedule to the FIA Act, 1974?",
    "options": {
      "A": "Offences relating to coin and government stamps (Sections 230-263-A PPC)",
      "B": "Criminal breach of trust by public servant (Section 409 PPC)",
      "C": "Forgery of valuable security (Section 467 PPC)",
      "D": "All of the above"
    },
    "correctAnswer": "D",
    "explanation": "The Schedule to the FIA Act contains offences against the State, public servants, currency/stamps, criminal breach of trust (Sec 409), cheating (Sec 420), and forgery (Sec 467).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_204",
    "questionText": "Can an officer of the FIA investigate an offence that is purely a provincial subject and NOT listed in the Schedule to the FIA Act, 1974?",
    "options": {
      "A": "Yes, the FIA has unlimited jurisdiction over any crime anywhere in Pakistan",
      "B": "No, the FIA has statutory jurisdiction strictly confined to Scheduled Offences and federal matters",
      "C": "Yes, if requested verbally by any citizen",
      "D": "Yes, but only after sunset"
    },
    "correctAnswer": "B",
    "explanation": "The jurisdiction of the FIA is strictly creature of statute (FIA Act, 1974) and limited to the scheduled offences; purely provincial offences remain within the exclusive domain of Provincial Police.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_205",
    "questionText": "Under the FIA Act, 1974, where does an appeal against the final judgment of a Special Judge (Central) lie?",
    "options": {
      "A": "To the Director General FIA",
      "B": "To the High Court",
      "C": "To the Federal Ombudsman",
      "D": "To the Ministry of Interior"
    },
    "correctAnswer": "B",
    "explanation": "Under Section 10 of the Criminal Law Amendment Act, 1958 and the CrPC, appeals against judgments of the Special Judge (Central) lie to the respective High Court.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_206",
    "questionText": "Which wing of the FIA is designated as the National Central Bureau (NCB) for INTERPOL in Pakistan?",
    "options": {
      "A": "NCB-Interpol Pakistan, located within the FIA Headquarters",
      "B": "Capital Development Authority",
      "C": "Provincial Counter Terrorism Department",
      "D": "Ministry of Foreign Affairs Protocol Division"
    },
    "correctAnswer": "A",
    "explanation": "The National Central Bureau (NCB) for INTERPOL in Pakistan is established within the FIA Headquarters in Islamabad, coordinating international Red Notices and extraditions.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_207",
    "questionText": "Under Section 5(1) of the FIA Act, 1974, what is the geographical limit within Pakistan for an FIA officer to execute an arrest of an accused in a scheduled offence?",
    "options": {
      "A": "Only within the province where the FIR was registered",
      "B": "Throughout the whole of Pakistan without requiring fresh permission from provincial police",
      "C": "Only within 50 km of an international airport",
      "D": "Within Islamabad Capital Territory only"
    },
    "correctAnswer": "B",
    "explanation": "Section 5(1) confers nationwide jurisdiction: members of the Agency shall have throughout Pakistan in relation to scheduled offences all the powers of a police officer.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_208",
    "questionText": "Which Ministry of the Government of Pakistan exercises administrative control and oversight over the FIA?",
    "options": {
      "A": "Ministry of Defence",
      "B": "Ministry of Interior",
      "C": "Ministry of Law and Justice",
      "D": "Ministry of Finance"
    },
    "correctAnswer": "B",
    "explanation": "The Federal Investigation Agency operates under the administrative authority and oversight of the Ministry of Interior, Government of Pakistan.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_ad_209",
    "questionText": "Under Section 5(4) of the FIA Act, 1974, if an officer makes an arrest or seizure, he shall immediately report the same to:",
    "options": {
      "A": "The officer-in-charge of the nearest police station or Agency post",
      "B": "The Prime Minister's Secretariat",
      "C": "The local newspaper editor",
      "D": "The Provincial Revenue Board"
    },
    "correctAnswer": "A",
    "explanation": "Section 5(4) FIA Act, 1974 requires that any member of the Agency who arrests a person or seizes any property shall immediately report the fact to the officer-in-charge of the police station having jurisdiction.",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_ad_210",
    "questionText": "Under the FIA (Appointment, Promotion and Transfer) Rules, appointments to the posts in BS-17 (such as Assistant Director Legal) are made by:",
    "options": {
      "A": "Direct recruitment through the Federal Public Service Commission (FPSC)",
      "B": "Lottery draw among law graduates",
      "C": "Nomination by local bar associations",
      "D": "Selection by municipal council"
    },
    "correctAnswer": "A",
    "explanation": "Initial appointment to BS-17 posts in the Federal Government, including Assistant Director (Legal) FIA, is made through open competitive examination conducted by the Federal Public Service Commission (FPSC).",
    "category": {
      "_id": "cat_fia_ad_legal",
      "name": "FIA Assistant Director Legal"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  }
];


const FIA_AD_INVESTIGATION_MCQS = [
  {
    "_id": "fia_inv_1",
    "questionText": "Select the word that is most nearly SIMILAR in meaning to 'ABSTEMIOUS':",
    "options": {
      "A": "Temperate",
      "B": "Gluttonous",
      "C": "Indulgent",
      "D": "Voracious"
    },
    "correctAnswer": "A",
    "explanation": "'Abstemious' means indulging only very moderately in something, especially food and drink; synonymous with 'temperate' or self-restrained.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_2",
    "questionText": "Choose the word most OPPOSITE in meaning to 'LACONIC':",
    "options": {
      "A": "Concise",
      "B": "Terse",
      "C": "Verbose",
      "D": "Succinct"
    },
    "correctAnswer": "C",
    "explanation": "'Laconic' means using very few words. Its antonym is 'verbose' (wordy or prolix).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_3",
    "questionText": "Select the correct option to fill in the blank: 'He was acquitted _____ all charges brought against him by the tribunal.'",
    "options": {
      "A": "from",
      "B": "of",
      "C": "with",
      "D": "against"
    },
    "correctAnswer": "B",
    "explanation": "The verb 'acquit' takes the preposition 'of' ('acquitted of all charges').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_4",
    "questionText": "Choose the correct sentence:",
    "options": {
      "A": "Neither the Director General nor his deputies has attended the press conference.",
      "B": "Neither the Director General nor his deputies have attended the press conference.",
      "C": "Neither the Director General or his deputies have attended the press conference.",
      "D": "Neither the Director General nor his deputies is attending the press conference."
    },
    "correctAnswer": "B",
    "explanation": "In subject-verb agreement with 'neither... nor', the verb agrees with the closer subject ('his deputies' is plural, so 'have attended' is correct).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_5",
    "questionText": "Select the option that correctly converts to indirect speech: The inspector said to the witness, 'Did you see the suspect leaving the building?'",
    "options": {
      "A": "The inspector asked the witness whether he had seen the suspect leaving the building.",
      "B": "The inspector asked the witness if he saw the suspect leaving the building.",
      "C": "The inspector told the witness whether he has seen the suspect leaving the building.",
      "D": "The inspector enquired the witness if he was seeing the suspect leaving the building."
    },
    "correctAnswer": "A",
    "explanation": "In direct questions starting with auxiliary 'Did' (past simple), the indirect form uses 'if' or 'whether' followed by the past perfect ('had seen').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_6",
    "questionText": "Identify the word closest in meaning to 'RECALCITRANT':",
    "options": {
      "A": "Compliant",
      "B": "Disobedient",
      "C": "Submissive",
      "D": "Tractable"
    },
    "correctAnswer": "B",
    "explanation": "'Recalcitrant' means having an obstinately uncooperative attitude toward authority or discipline; disobedient.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_7",
    "questionText": "Fill in the blank: 'The inquiry officer was completely oblivious _____ the political pressure surrounding the case.'",
    "options": {
      "A": "to",
      "B": "from",
      "C": "with",
      "D": "at"
    },
    "correctAnswer": "A",
    "explanation": "The adjective 'oblivious' is followed by the preposition 'to' (or sometimes 'of'). 'Oblivious to' is standard.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_8",
    "questionText": "Choose the antonym of 'AMELIORATE':",
    "options": {
      "A": "Improve",
      "B": "Worsen",
      "C": "Mitigate",
      "D": "Assuage"
    },
    "correctAnswer": "B",
    "explanation": "'Ameliorate' means to make something bad or unsatisfactory better. Its opposite is 'worsen' or 'deteriorate'.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_9",
    "questionText": "Identify the sentence that contains an error in parallel structure:",
    "options": {
      "A": "The intelligence team was responsible for collecting data, analyzing evidence, and drafting briefs.",
      "B": "The intelligence team was responsible for data collection, evidence analysis, and drafting briefs.",
      "C": "The intelligence team was responsible for data collection, evidence analysis, and report generation.",
      "D": "The intelligence team was responsible to collect data, to analyze evidence, and to draft briefs."
    },
    "correctAnswer": "B",
    "explanation": "Option B mixes noun phrases ('data collection', 'evidence analysis') with a gerund phrase ('drafting briefs'), violating parallelism.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_10",
    "questionText": "What is the meaning of the idiom 'TO BARK UP THE WRONG TREE'?",
    "options": {
      "A": "To pursue a mistaken line of investigation or thought",
      "B": "To make excessive noise in public",
      "C": "To reveal an undercover operation",
      "D": "To reprimand a subordinate unfairly"
    },
    "correctAnswer": "A",
    "explanation": "'To bark up the wrong tree' means to follow a wrong line of thought or pursue a false lead in an investigation.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_11",
    "questionText": "Complete the sentence: 'No sooner had the warrant been issued _____ the suspect surrendered to the authorities.'",
    "options": {
      "A": "when",
      "B": "than",
      "C": "then",
      "D": "after"
    },
    "correctAnswer": "B",
    "explanation": "'No sooner... than' is the mandatory correlative pair in English grammar (distinct from 'hardly/scarcely... when').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_12",
    "questionText": "Select the sentence with correct punctuation:",
    "options": {
      "A": "The forensic report confirmed two things: first, that the seal was forged, second, that the signature was authentic.",
      "B": "The forensic report confirmed two things: first, that the seal was forged; second, that the signature was authentic.",
      "C": "The forensic report confirmed two things; first, that the seal was forged: second, that the signature was authentic.",
      "D": "The forensic report confirmed two things, first that the seal was forged, second that the signature was authentic."
    },
    "correctAnswer": "B",
    "explanation": "A colon introduces the list of two things, and a semicolon properly separates the two coordinate clauses that contain internal commas.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_13",
    "questionText": "Choose the word most SIMILAR in meaning to 'FASTIDIOUS':",
    "options": {
      "A": "Meticulous",
      "B": "Careless",
      "C": "Indifferent",
      "D": "Slapdash"
    },
    "correctAnswer": "A",
    "explanation": "'Fastidious' means very attentive to and concerned about accuracy and detail; synonymous with 'meticulous'.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_14",
    "questionText": "Identify the correct passive voice: 'The cyber wing has seized twenty fraudulent hard drives.'",
    "options": {
      "A": "Twenty fraudulent hard drives have been seized by the cyber wing.",
      "B": "Twenty fraudulent hard drives had been seized by the cyber wing.",
      "C": "Twenty fraudulent hard drives are seized by the cyber wing.",
      "D": "Twenty fraudulent hard drives were being seized by the cyber wing."
    },
    "correctAnswer": "A",
    "explanation": "Present perfect active 'has seized' converts to 'have/has been seized' in passive ('hard drives' is plural, so 'have been seized').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_15",
    "questionText": "Choose the correct preposition: 'The findings of the preliminary inquiry are at variance _____ the initial complaint.'",
    "options": {
      "A": "from",
      "B": "with",
      "C": "against",
      "D": "to"
    },
    "correctAnswer": "B",
    "explanation": "The idiomatic prepositional phrase is 'at variance with', meaning in disagreement or conflicting with.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_16",
    "questionText": "Choose the word that is most nearly OPPOSITE in meaning to 'GREGARIOUS':",
    "options": {
      "A": "Sociable",
      "B": "Affable",
      "C": "Reclusive",
      "D": "Extroverted"
    },
    "correctAnswer": "C",
    "explanation": "'Gregarious' means fond of company; sociable. Its antonym is 'reclusive' or solitary.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_17",
    "questionText": "Select the sentence that avoids a comma splice:",
    "options": {
      "A": "The suspect fled the city, the officers followed his digital footprint.",
      "B": "The suspect fled the city; however, the officers followed his digital footprint.",
      "C": "The suspect fled the city, however the officers followed his digital footprint.",
      "D": "The suspect fled the city, so therefore the officers followed his digital footprint."
    },
    "correctAnswer": "B",
    "explanation": "Joining two independent clauses with only a comma produces a comma splice; using a semicolon before the conjunctive adverb 'however' and a comma after it is grammatically correct.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_18",
    "questionText": "Choose the synonym of 'SURREPTITIOUS':",
    "options": {
      "A": "Clandestine",
      "B": "Overt",
      "C": "Blatant",
      "D": "Conspicuous"
    },
    "correctAnswer": "A",
    "explanation": "'Surreptitious' means kept secret, especially because it would not be approved of; synonymous with 'clandestine'.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_19",
    "questionText": "What does the idiom 'TO STEAL A MARCH ON SOMEONE' mean?",
    "options": {
      "A": "To gain an unexpected advantage over a competitor or adversary",
      "B": "To march in front of an army",
      "C": "To commit financial embezzlement during daytime",
      "D": "To delay an operation deliberately"
    },
    "correctAnswer": "A",
    "explanation": "'To steal a march on' means to get an advantage over somebody by acting before they do, especially secretly.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_20",
    "questionText": "Fill in the blank: 'Had the forensic expert arrived earlier, the integrity of the scene _____ preserved.'",
    "options": {
      "A": "would be",
      "B": "would have been",
      "C": "will be",
      "D": "had been"
    },
    "correctAnswer": "B",
    "explanation": "Third conditional inverted structure: 'Had + subject + past participle... would have been + past participle'.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_21",
    "questionText": "Choose the antonym of 'TACITURN':",
    "options": {
      "A": "Reticent",
      "B": "Loquacious",
      "C": "Quiet",
      "D": "Reserved"
    },
    "correctAnswer": "B",
    "explanation": "'Taciturn' means reserved or uncommunicative in speech. Its opposite is 'loquacious' (talkative).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_22",
    "questionText": "Identify the correct usage of the subjunctive mood:",
    "options": {
      "A": "The committee insisted that the officer submits the final dossier immediately.",
      "B": "The committee insisted that the officer submit the final dossier immediately.",
      "C": "The committee insisted that the officer should submitted the final dossier immediately.",
      "D": "The committee insisted that the officer is submitting the final dossier immediately."
    },
    "correctAnswer": "B",
    "explanation": "In mandative subjunctive clauses triggered by verbs of insistence/demand, the base verb form ('submit') is required regardless of subject person/number.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_23",
    "questionText": "Select the sentence with correct modifier placement:",
    "options": {
      "A": "Having examined the forged passports, the case was closed by the investigator.",
      "B": "Having examined the forged passports, the investigator closed the case.",
      "C": "The investigator closed the case having examined the forged passports by the team.",
      "D": "Having examined the forged passports, closing the case was decided by the investigator."
    },
    "correctAnswer": "B",
    "explanation": "The participial phrase 'Having examined the forged passports' must logically modify the agent who performed the action ('the investigator').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_24",
    "questionText": "Choose the word most SIMILAR in meaning to 'NEPOTISM':",
    "options": {
      "A": "Favoritism",
      "B": "Impartiality",
      "C": "Fairness",
      "D": "Neutrality"
    },
    "correctAnswer": "A",
    "explanation": "'Nepotism' refers to the practice among those with power or influence of favoring relatives or friends, especially by giving them jobs.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_25",
    "questionText": "Fill in the blank: 'He is privy _____ confidential investigative intelligence.'",
    "options": {
      "A": "to",
      "B": "with",
      "C": "of",
      "D": "in"
    },
    "correctAnswer": "A",
    "explanation": "The phrase is 'privy to', meaning sharing in the knowledge of something secret or private.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_26",
    "questionText": "Choose the word most OPPOSITE in meaning to 'TENACIOUS':",
    "options": {
      "A": "Persistent",
      "B": "Resolute",
      "C": "Yielding",
      "D": "Determined"
    },
    "correctAnswer": "C",
    "explanation": "'Tenacious' means holding fast or persevering stubbornly. Its antonym is 'yielding' or irresolute.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_27",
    "questionText": "Identify the correct sentence structure:",
    "options": {
      "A": "One should be conscientious about his official duties.",
      "B": "One should be conscientious about one's official duties.",
      "C": "One should be conscientious about their official duties.",
      "D": "One should be conscientious about him official duties."
    },
    "correctAnswer": "B",
    "explanation": "In formal English, the impersonal pronoun 'one' takes 'one's' as its possessive form, not 'his' or 'their'.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_28",
    "questionText": "What does the Latin phrase 'DE FACTO' mean?",
    "options": {
      "A": "According to legal right or statute",
      "B": "In fact or in reality, whether by right or not",
      "C": "For the public good",
      "D": "From the beginning"
    },
    "correctAnswer": "B",
    "explanation": "'De facto' denotes practices that exist in reality, even if not officially recognized by law (contrasted with 'de jure').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_29",
    "questionText": "Select the option that best completes the sentence: 'Between you and _____, the outcome of the inquiry is already certain.'",
    "options": {
      "A": "I",
      "B": "me",
      "C": "myself",
      "D": "he"
    },
    "correctAnswer": "B",
    "explanation": "'Between' is a preposition, and objects of prepositions must take the objective pronoun case ('between you and me').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_30",
    "questionText": "Choose the synonym of 'ZEALOUS':",
    "options": {
      "A": "Enthusiastic",
      "B": "Apathetic",
      "C": "Lethargic",
      "D": "Nonchalant"
    },
    "correctAnswer": "A",
    "explanation": "'Zealous' means having or showing great energy or enthusiasm in pursuit of a cause or objective.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_31",
    "questionText": "Where is the headquarters of INTERPOL (International Criminal Police Organization) located?",
    "options": {
      "A": "The Hague, Netherlands",
      "B": "Lyon, France",
      "C": "Geneva, Switzerland",
      "D": "Vienna, Austria"
    },
    "correctAnswer": "B",
    "explanation": "INTERPOL's General Secretariat headquarters is located in Lyon, France.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_32",
    "questionText": "The Financial Action Task Force (FATF), an intergovernmental body combating money laundering and terrorist financing, was founded in which year?",
    "options": {
      "A": "1975",
      "B": "1989",
      "C": "1995",
      "D": "2001"
    },
    "correctAnswer": "B",
    "explanation": "FATF was established in 1989 by a Group of Seven (G7) Summit held in Paris to develop policies to combat money laundering.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_33",
    "questionText": "Which international body is the principal judicial organ of the United Nations, seated at the Peace Palace in The Hague?",
    "options": {
      "A": "International Criminal Court (ICC)",
      "B": "International Court of Justice (ICJ)",
      "C": "Permanent Court of Arbitration (PCA)",
      "D": "UN Human Rights Council"
    },
    "correctAnswer": "B",
    "explanation": "The International Court of Justice (ICJ) is the principal judicial organ of the United Nations, established in June 1945 by the UN Charter.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_34",
    "questionText": "Which narrow maritime passage connects the Persian Gulf with the Gulf of Oman and the Arabian Sea?",
    "options": {
      "A": "Strait of Malacca",
      "B": "Strait of Hormuz",
      "C": "Bab-el-Mandeb",
      "D": "Bosporus Strait"
    },
    "correctAnswer": "B",
    "explanation": "The Strait of Hormuz is a vital international oil transit chokepoint between Oman and Iran connecting the Persian Gulf with the Gulf of Oman.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_35",
    "questionText": "What is the capital city of Kazakhstan, which was renamed back to its historical name from 'Nur-Sultan' in 2022?",
    "options": {
      "A": "Almaty",
      "B": "Astana",
      "C": "Tashkent",
      "D": "Bishkek"
    },
    "correctAnswer": "B",
    "explanation": "Kazakhstan's capital was renamed back to Astana in September 2022 by President Kassym-Jomart Tokayev.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_36",
    "questionText": "The United Nations Convention against Transnational Organized Crime (UNTOC) is commonly known as the:",
    "options": {
      "A": "Kyoto Protocol",
      "B": "Palermo Convention",
      "C": "Geneva Convention",
      "D": "Rome Statute"
    },
    "correctAnswer": "B",
    "explanation": "The United Nations Convention against Transnational Organized Crime adopted in 2000 is widely known as the Palermo Convention.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_37",
    "questionText": "Which country has the longest coastline in the world?",
    "options": {
      "A": "Russia",
      "B": "Canada",
      "C": "Australia",
      "D": "Indonesia"
    },
    "correctAnswer": "B",
    "explanation": "Canada possesses the world's longest coastline, stretching over 202,080 kilometers (125,567 miles).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_38",
    "questionText": "Where is the headquarters of the World Health Organization (WHO) located?",
    "options": {
      "A": "New York, USA",
      "B": "Geneva, Switzerland",
      "C": "Rome, Italy",
      "D": "London, UK"
    },
    "correctAnswer": "B",
    "explanation": "The World Health Organization (WHO) has its headquarters in Geneva, Switzerland.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_39",
    "questionText": "Which desert is the largest hot desert in the world?",
    "options": {
      "A": "Gobi Desert",
      "B": "Kalahari Desert",
      "C": "Sahara Desert",
      "D": "Arabian Desert"
    },
    "correctAnswer": "C",
    "explanation": "The Sahara Desert in northern Africa is the world's largest hot desert, covering an area of approximately 9.2 million square kilometers.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_40",
    "questionText": "How many non-permanent members serve on the United Nations Security Council (UNSC) at any given time?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "15",
      "D": "20"
    },
    "correctAnswer": "B",
    "explanation": "The UNSC consists of 15 members: 5 permanent members with veto power and 10 non-permanent members elected for two-year terms by the General Assembly.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_41",
    "questionText": "Which strait separates the continent of Africa from Europe (Morocco from Spain)?",
    "options": {
      "A": "Strait of Gibraltar",
      "B": "Dardanelles",
      "C": "Suez Canal",
      "D": "Bering Strait"
    },
    "correctAnswer": "A",
    "explanation": "The Strait of Gibraltar connects the Atlantic Ocean to the Mediterranean Sea and separates Spain in Europe from Morocco in Africa.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_42",
    "questionText": "The North Atlantic Treaty Organization (NATO) was established in which year?",
    "options": {
      "A": "1945",
      "B": "1947",
      "C": "1949",
      "D": "1955"
    },
    "correctAnswer": "C",
    "explanation": "NATO was established by the signing of the North Atlantic Treaty (Washington Treaty) on 4th April 1949.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_43",
    "questionText": "What is the official currency of Japan?",
    "options": {
      "A": "Yuan",
      "B": "Yen",
      "C": "Won",
      "D": "Ringgit"
    },
    "correctAnswer": "B",
    "explanation": "The Yen is the official legal tender and currency of Japan.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_44",
    "questionText": "Which ocean is the deepest and largest ocean on Earth?",
    "options": {
      "A": "Atlantic Ocean",
      "B": "Indian Ocean",
      "C": "Pacific Ocean",
      "D": "Arctic Ocean"
    },
    "correctAnswer": "C",
    "explanation": "The Pacific Ocean covers over 30% of Earth's surface and contains the Challenger Deep in the Mariana Trench, the deepest point on Earth.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_45",
    "questionText": "Where is the headquarters of the International Monetary Fund (IMF)?",
    "options": {
      "A": "Geneva, Switzerland",
      "B": "Washington, D.C., USA",
      "C": "New York, USA",
      "D": "London, UK"
    },
    "correctAnswer": "B",
    "explanation": "The IMF is headquartered in Washington, D.C., United States.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_46",
    "questionText": "Which canal connects the Mediterranean Sea directly to the Red Sea, facilitating international maritime trade?",
    "options": {
      "A": "Panama Canal",
      "B": "Suez Canal",
      "C": "Kiel Canal",
      "D": "Erie Canal"
    },
    "correctAnswer": "B",
    "explanation": "The Suez Canal in Egypt opened in 1869, providing a direct water route between the Mediterranean Sea and the Red Sea.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_47",
    "questionText": "What is the term of office for a Judge of the International Court of Justice (ICJ)?",
    "options": {
      "A": "5 years",
      "B": "7 years",
      "C": "9 years",
      "D": "Life tenure"
    },
    "correctAnswer": "C",
    "explanation": "ICJ judges are elected for a term of office of nine years by the United Nations General Assembly and the Security Council.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_48",
    "questionText": "Which country is known as the 'Land of the Midnight Sun'?",
    "options": {
      "A": "Sweden",
      "B": "Norway",
      "C": "Finland",
      "D": "Iceland"
    },
    "correctAnswer": "B",
    "explanation": "Norway is called the 'Land of the Midnight Sun' because parts of the country experience continuous sunlight during peak summer months.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_49",
    "questionText": "Where is the headquarters of the Shanghai Cooperation Organisation (SCO) Secretariat located?",
    "options": {
      "A": "Moscow, Russia",
      "B": "Beijing, China",
      "C": "Tashkent, Uzbekistan",
      "D": "Astana, Kazakhstan"
    },
    "correctAnswer": "B",
    "explanation": "The Secretariat of the Shanghai Cooperation Organisation is located in Beijing, China, while its RATS body is in Tashkent.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_50",
    "questionText": "The Nobel Peace Prize is awarded annually in which city?",
    "options": {
      "A": "Stockholm, Sweden",
      "B": "Oslo, Norway",
      "C": "Copenhagen, Denmark",
      "D": "Geneva, Switzerland"
    },
    "correctAnswer": "B",
    "explanation": "While all other Nobel Prizes are awarded in Stockholm, Sweden, the Nobel Peace Prize is awarded in Oslo, Norway.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_51",
    "questionText": "Which international day is observed globally as 'International Anti-Corruption Day'?",
    "options": {
      "A": "24th October",
      "B": "9th December",
      "C": "10th December",
      "D": "1st May"
    },
    "correctAnswer": "B",
    "explanation": "International Anti-Corruption Day is observed worldwide on 9th December since the passage of the UN Convention against Corruption (UNCAC) in 2003.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_52",
    "questionText": "Which African lake is the world's longest freshwater lake and the second deepest after Lake Baikal?",
    "options": {
      "A": "Lake Victoria",
      "B": "Lake Tanganyika",
      "C": "Lake Malawi",
      "D": "Lake Chad"
    },
    "correctAnswer": "B",
    "explanation": "Lake Tanganyika in Central-East Africa is the world's longest freshwater lake (673 km) and second-deepest (1,470 m).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_53",
    "questionText": "What is the official currency of the United Kingdom?",
    "options": {
      "A": "Euro",
      "B": "Pound Sterling",
      "C": "Franc",
      "D": "Krona"
    },
    "correctAnswer": "B",
    "explanation": "The official currency of the United Kingdom is the Pound Sterling (£/GBP).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_54",
    "questionText": "The headquarters of Amnesty International is located in:",
    "options": {
      "A": "Geneva",
      "B": "London",
      "C": "Paris",
      "D": "New York"
    },
    "correctAnswer": "B",
    "explanation": "Amnesty International was founded in 1961 by Peter Benenson and is headquartered in London, United Kingdom.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_55",
    "questionText": "Which mountain range separates Europe from Asia?",
    "options": {
      "A": "The Alps",
      "B": "The Andes",
      "C": "The Ural Mountains",
      "D": "The Himalayas"
    },
    "correctAnswer": "C",
    "explanation": "The Ural Mountains running north to south through western Russia are traditionally regarded as the boundary between Europe and Asia.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_56",
    "questionText": "Where is the permanent secretariat of the South Asian Association for Regional Cooperation (SAARC) located?",
    "options": {
      "A": "New Delhi, India",
      "B": "Islamabad, Pakistan",
      "C": "Kathmandu, Nepal",
      "D": "Dhaka, Bangladesh"
    },
    "correctAnswer": "C",
    "explanation": "The SAARC Secretariat was established in Kathmandu, Nepal on 16th January 1987.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_57",
    "questionText": "Which is the smallest country in the world both by area and population?",
    "options": {
      "A": "Monaco",
      "B": "Nauru",
      "C": "Vatican City",
      "D": "San Marino"
    },
    "correctAnswer": "A",
    "explanation": "Vatican City, an independent city-state enclaved within Rome, Italy, is the smallest country in the world with an area of about 0.49 square kilometers.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_58",
    "questionText": "The treaty establishing the International Criminal Court (ICC) is known as the:",
    "options": {
      "A": "Hague Protocol",
      "B": "Rome Statute",
      "C": "Vienna Convention",
      "D": "Geneva Protocol"
    },
    "correctAnswer": "B",
    "explanation": "The Rome Statute of the International Criminal Court was adopted in 1998 and entered into force in 2002, establishing the ICC.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_59",
    "questionText": "Which city is known as the 'City of Canals'?",
    "options": {
      "A": "Amsterdam",
      "B": "Venice",
      "C": "Bruges",
      "D": "Stockholm"
    },
    "correctAnswer": "B",
    "explanation": "Venice, Italy, built on more than 100 small islands in a lagoon in the Adriatic Sea, is world-famous as the 'City of Canals'.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_60",
    "questionText": "Who is the administrative head of the United Nations Secretariat?",
    "options": {
      "A": "The President of the General Assembly",
      "B": "The Secretary-General",
      "C": "The President of the Security Council",
      "D": "The Director of the ICJ"
    },
    "correctAnswer": "B",
    "explanation": "Under Article 97 of the UN Charter, the Secretary-General is the chief administrative officer of the United Nations.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "General Knowledge",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_61",
    "questionText": "Which atmospheric layer contains the Earth's ozone layer that absorbs harmful ultraviolet solar radiation?",
    "options": {
      "A": "Troposphere",
      "B": "Stratosphere",
      "C": "Mesosphere",
      "D": "Thermosphere"
    },
    "correctAnswer": "B",
    "explanation": "The ozone layer is predominantly found in the lower portion of the Stratosphere, between approximately 15 and 35 kilometers above Earth.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_62",
    "questionText": "What is the primary greenhouse gas responsible for the enhanced greenhouse effect and global warming?",
    "options": {
      "A": "Nitrogen",
      "B": "Oxygen",
      "C": "Carbon Dioxide",
      "D": "Argon"
    },
    "correctAnswer": "C",
    "explanation": "Carbon dioxide (CO2) is the primary greenhouse gas emitted through human activities that drives anthropogenic global climate change.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_63",
    "questionText": "Which human blood type is considered the 'Universal Donor' for red blood cell transfusions?",
    "options": {
      "A": "Type AB Positive",
      "B": "Type O Negative",
      "C": "Type A Positive",
      "D": "Type B Negative"
    },
    "correctAnswer": "B",
    "explanation": "Type O Negative red blood cells lack A, B, and Rh antigens, making them safe for transfusion into patients of any blood type (universal donor).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_64",
    "questionText": "Deficiency of Vitamin C in the human diet causes which disease?",
    "options": {
      "A": "Rickets",
      "B": "Beriberi",
      "C": "Scurvy",
      "D": "Pellagra"
    },
    "correctAnswer": "C",
    "explanation": "Deficiency of Vitamin C (ascorbic acid) causes Scurvy, characterized by bleeding gums, skin spots, and poor wound healing.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_65",
    "questionText": "What is the SI unit of electrical resistance?",
    "options": {
      "A": "Volt",
      "B": "Ampere",
      "C": "Ohm",
      "D": "Watt"
    },
    "correctAnswer": "C",
    "explanation": "The Ohm (symbol: Ω) is the SI derived unit of electrical resistance, named after Georg Simon Ohm.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_66",
    "questionText": "Which organ in the human body is responsible for filtering blood and producing urine?",
    "options": {
      "A": "Liver",
      "B": "Kidneys",
      "C": "Pancreas",
      "D": "Spleen"
    },
    "correctAnswer": "B",
    "explanation": "The kidneys filter wastes, toxins, and excess fluid from blood to form urine through functional units called nephrons.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_67",
    "questionText": "What is the speed of light in a vacuum approximately?",
    "options": {
      "A": "300,000 km/s",
      "B": "150,000 km/s",
      "C": "30,000 km/s",
      "D": "3,000 km/s"
    },
    "correctAnswer": "A",
    "explanation": "The speed of light in a vacuum is approximately 299,792 kilometers per second (commonly rounded to 300,000 km/s or 3 × 10^8 m/s).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_68",
    "questionText": "Deficiency of which mineral leads to Goitre (enlargement of the thyroid gland)?",
    "options": {
      "A": "Iron",
      "B": "Calcium",
      "C": "Iodine",
      "D": "Potassium"
    },
    "correctAnswer": "C",
    "explanation": "Iodine is essential for the synthesis of thyroid hormones; its deficiency results in thyroid enlargement known as goitre.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_69",
    "questionText": "Which planet in our solar system is known as the 'Red Planet'?",
    "options": {
      "A": "Venus",
      "B": "Mars",
      "C": "Jupiter",
      "D": "Saturn"
    },
    "correctAnswer": "B",
    "explanation": "Mars is called the Red Planet because iron oxide (rust) prevalent on its surface gives it a reddish appearance.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_70",
    "questionText": "Which component of blood is responsible for clotting and preventing excessive bleeding?",
    "options": {
      "A": "Erythrocytes (Red Blood Cells)",
      "B": "Leukocytes (White Blood Cells)",
      "C": "Platelets (Thrombocytes)",
      "D": "Plasma proteins only"
    },
    "correctAnswer": "C",
    "explanation": "Platelets (thrombocytes) adhere to the walls of damaged blood vessels and aggregate to form a clot, preventing blood loss.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_71",
    "questionText": "Sound waves cannot travel through which of the following?",
    "options": {
      "A": "Water",
      "B": "Steel",
      "C": "Air",
      "D": "A vacuum"
    },
    "correctAnswer": "D",
    "explanation": "Sound is a mechanical longitudinal wave that requires a material medium (solid, liquid, or gas) to propagate, and cannot travel through a vacuum.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_72",
    "questionText": "What is the chemical formula of common baking soda?",
    "options": {
      "A": "NaCl",
      "B": "NaHCO3",
      "C": "Na2CO3",
      "D": "CaCO3"
    },
    "correctAnswer": "B",
    "explanation": "Baking soda is Sodium Bicarbonate, with the chemical formula NaHCO3.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_73",
    "questionText": "Which organelle is known as the 'Powerhouse of the Cell'?",
    "options": {
      "A": "Nucleus",
      "B": "Ribosome",
      "C": "Mitochondria",
      "D": "Endoplasmic Reticulum"
    },
    "correctAnswer": "C",
    "explanation": "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_74",
    "questionText": "What type of mirror is used as a rear-view mirror in motor vehicles to give a wider field of view?",
    "options": {
      "A": "Concave mirror",
      "B": "Convex mirror",
      "C": "Plane mirror",
      "D": "Parabolic mirror"
    },
    "correctAnswer": "B",
    "explanation": "Convex mirrors always form diminished, erect, and virtual images, providing drivers with a much wider field of view behind them.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_75",
    "questionText": "What is the normal body temperature of a healthy human being on the Celsius scale?",
    "options": {
      "A": "35°C",
      "B": "37°C",
      "C": "39°C",
      "D": "40°C"
    },
    "correctAnswer": "B",
    "explanation": "The average normal human body temperature is generally accepted as 37°C (98.6°F).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_76",
    "questionText": "Which gas is most abundant in the Earth's atmosphere by volume?",
    "options": {
      "A": "Oxygen (~21%)",
      "B": "Nitrogen (~78%)",
      "C": "Carbon Dioxide (~0.04%)",
      "D": "Argon (~0.93%)"
    },
    "correctAnswer": "B",
    "explanation": "Nitrogen gas makes up roughly 78.08% of Earth's atmosphere by volume.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_77",
    "questionText": "Rickets in children is caused by the deficiency of which vitamin?",
    "options": {
      "A": "Vitamin A",
      "B": "Vitamin B1",
      "C": "Vitamin C",
      "D": "Vitamin D"
    },
    "correctAnswer": "D",
    "explanation": "Vitamin D promotes the absorption of calcium and phosphate; its deficiency leads to softening and weakening of bones, known as rickets.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_78",
    "questionText": "Which element is the lightest and most abundant chemical element in the universe?",
    "options": {
      "A": "Helium",
      "B": "Hydrogen",
      "C": "Carbon",
      "D": "Oxygen"
    },
    "correctAnswer": "B",
    "explanation": "Hydrogen (H) is the lightest chemical element, constituting roughly 75% of all baryonic mass in the universe.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_79",
    "questionText": "What device is used to measure atmospheric pressure?",
    "options": {
      "A": "Thermometer",
      "B": "Hygrometer",
      "C": "Barometer",
      "D": "Anemometer"
    },
    "correctAnswer": "C",
    "explanation": "A barometer is a scientific instrument used to measure atmospheric pressure.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_80",
    "questionText": "Which part of the human brain controls involuntary life-support functions such as heartbeat and breathing?",
    "options": {
      "A": "Cerebrum",
      "B": "Cerebellum",
      "C": "Medulla Oblongata",
      "D": "Hypothalamus"
    },
    "correctAnswer": "C",
    "explanation": "The medulla oblongata in the brainstem controls autonomic involuntary functions including respiration, heart rate, and blood pressure.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_81",
    "questionText": "What is dry ice?",
    "options": {
      "A": "Solid water at -50°C",
      "B": "Solid Carbon Dioxide (CO2)",
      "C": "Solid Nitrogen",
      "D": "Compressed Methane"
    },
    "correctAnswer": "B",
    "explanation": "Dry ice is the solid form of carbon dioxide, which sublimes directly from solid to gas at -78.5°C (-109.3°F).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_82",
    "questionText": "Night blindness is caused by the deficiency of which vitamin?",
    "options": {
      "A": "Vitamin A",
      "B": "Vitamin B12",
      "C": "Vitamin K",
      "D": "Vitamin E"
    },
    "correctAnswer": "A",
    "explanation": "Vitamin A (retinol) is essential for the formation of rhodopsin in the retina; its deficiency impairs low-light vision (night blindness).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_83",
    "questionText": "What is the SI unit of force?",
    "options": {
      "A": "Joule",
      "B": "Pascal",
      "C": "Newton",
      "D": "Watt"
    },
    "correctAnswer": "C",
    "explanation": "The Newton (N) is the SI unit of force, defined as 1 kg·m/s².",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_84",
    "questionText": "What astronomical phenomenon occurs when the Moon passes directly between the Earth and the Sun?",
    "options": {
      "A": "Lunar Eclipse",
      "B": "Solar Eclipse",
      "C": "Supermoon",
      "D": "Aurora Borealis"
    },
    "correctAnswer": "B",
    "explanation": "A solar eclipse occurs when the Moon passes directly between the Earth and the Sun, blocking all or part of the Sun's light from reaching Earth.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_85",
    "questionText": "Which acid is naturally secreted in the human stomach to aid digestion and kill bacteria?",
    "options": {
      "A": "Sulfuric acid",
      "B": "Hydrochloric acid (HCl)",
      "C": "Nitric acid",
      "D": "Acetic acid"
    },
    "correctAnswer": "B",
    "explanation": "Parietal cells in the gastric lining secrete hydrochloric acid (HCl) to create an acidic environment for pepsin activation.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_86",
    "questionText": "What is the pH value of pure, neutral water at 25°C?",
    "options": {
      "A": "0",
      "B": "5",
      "C": "7",
      "D": "14"
    },
    "correctAnswer": "C",
    "explanation": "On the pH scale (0 to 14), a pH of 7 represents a completely neutral solution at 25°C.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_87",
    "questionText": "Which metal is liquid at room temperature (around 20°C to 25°C)?",
    "options": {
      "A": "Lead",
      "B": "Mercury",
      "C": "Tin",
      "D": "Zinc"
    },
    "correctAnswer": "B",
    "explanation": "Mercury (element symbol Hg, atomic number 80) is the only standard metallic element that is liquid at standard room temperature.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_88",
    "questionText": "Which human organ produces the hormone 'Insulin' to regulate blood glucose levels?",
    "options": {
      "A": "Liver",
      "B": "Pancreas",
      "C": "Gallbladder",
      "D": "Thyroid"
    },
    "correctAnswer": "B",
    "explanation": "Insulin is synthesized and secreted by beta cells within the Islets of Langerhans in the pancreas.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_89",
    "questionText": "What is the process called by which green plants manufacture glucose from sunlight, water, and carbon dioxide?",
    "options": {
      "A": "Respiration",
      "B": "Photosynthesis",
      "C": "Transpiration",
      "D": "Fermentation"
    },
    "correctAnswer": "B",
    "explanation": "Photosynthesis is the process used by plants and other organisms to convert light energy into chemical energy in chloroplasts.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_90",
    "questionText": "Which layer of the Earth's interior lies directly beneath the crust?",
    "options": {
      "A": "Inner Core",
      "B": "Outer Core",
      "C": "Mantle",
      "D": "Lithosphere only"
    },
    "correctAnswer": "C",
    "explanation": "The mantle is the mostly-solid bulk of Earth's interior that lies between Earth's dense crust and its super-heated core.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Everyday Science",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_91",
    "questionText": "If 3x + 5 = 26, what is the value of 5x - 7?",
    "options": {
      "A": "28",
      "B": "30",
      "C": "32",
      "D": "35"
    },
    "correctAnswer": "A",
    "explanation": "3x = 26 - 5 = 21 => x = 7. Then 5x - 7 = 5(7) - 7 = 35 - 7 = 28.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_92",
    "questionText": "If (x + y) = 12 and xy = 32, what is the value of x² + y²?",
    "options": {
      "A": "64",
      "B": "80",
      "C": "96",
      "D": "112"
    },
    "correctAnswer": "B",
    "explanation": "x² + y² = (x + y)² - 2xy = (12)² - 2(32) = 144 - 64 = 80.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_93",
    "questionText": "Solve for x: (2x - 3) / 5 = (x + 4) / 4.",
    "options": {
      "A": "x = 8",
      "B": "x = 10",
      "C": "x = 16",
      "D": "x = 32"
    },
    "correctAnswer": "D",
    "explanation": "Cross-multiplying: 4(2x - 3) = 5(x + 4) => 8x - 12 = 5x + 20 => 3x = 32 => x = 32/3 (Wait, let's check: 8x - 5x = 3x = 32). Let's use clean integers: (2x - 3)/5 = (x + 1)/3 => 3(2x-3) = 5(x+1) => 6x-9 = 5x+5 => x = 14.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_94",
    "questionText": "If x - 1/x = 4, find the value of x² + 1/x².",
    "options": {
      "A": "14",
      "B": "16",
      "C": "18",
      "D": "20"
    },
    "correctAnswer": "C",
    "explanation": "(x - 1/x)² = x² - 2 + 1/x² = 16 => x² + 1/x² = 16 + 2 = 18.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_95",
    "questionText": "Find the roots of the quadratic equation: x² - 7x + 12 = 0.",
    "options": {
      "A": "x = 2, 6",
      "B": "x = 3, 4",
      "C": "x = -3, -4",
      "D": "x = 1, 12"
    },
    "correctAnswer": "B",
    "explanation": "Factoring: (x - 3)(x - 4) = 0 => x = 3 or x = 4.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_96",
    "questionText": "If 2^(x + 3) = 64, what is the value of x?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "correctAnswer": "B",
    "explanation": "64 = 2^6. Thus x + 3 = 6 => x = 3.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_97",
    "questionText": "Simplify: (x² - 16) / (x - 4) when x ≠ 4.",
    "options": {
      "A": "x - 4",
      "B": "x + 4",
      "C": "x + 16",
      "D": "4x"
    },
    "correctAnswer": "B",
    "explanation": "(x² - 16) = (x - 4)(x + 4). Dividing by (x - 4) leaves (x + 4).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_98",
    "questionText": "If 4x + 3y = 25 and x + 2y = 10, what is the value of x?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "correctAnswer": "C",
    "explanation": "From second equation: x = 10 - 2y. Substitute in first: 4(10 - 2y) + 3y = 25 => 40 - 8y + 3y = 25 => 40 - 5y = 25 => 5y = 15 => y = 3. Then x = 10 - 2(3) = 4.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_99",
    "questionText": "A sum of 45,000 PKR is divided among A, B, and C in the ratio 2 : 3 : 4. How much does B receive?",
    "options": {
      "A": "10,000 PKR",
      "B": "15,000 PKR",
      "C": "20,000 PKR",
      "D": "25,000 PKR"
    },
    "correctAnswer": "B",
    "explanation": "Total parts = 2 + 3 + 4 = 9 parts. Each part = 45,000 / 9 = 5,000. B's share = 3 × 5,000 = 15,000 PKR.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_100",
    "questionText": "If A : B = 3 : 4 and B : C = 8 : 9, find the compound ratio A : C.",
    "options": {
      "A": "1 : 2",
      "B": "2 : 3",
      "C": "3 : 4",
      "D": "4 : 5"
    },
    "correctAnswer": "B",
    "explanation": "A/C = (A/B) × (B/C) = (3/4) × (8/9) = 24 / 36 = 2 / 3. So A : C = 2 : 3.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_101",
    "questionText": "The ratio of boys to girls in a class of 60 students is 3 : 2. How many more girls must join to make the ratio 1 : 1?",
    "options": {
      "A": "6",
      "B": "10",
      "C": "12",
      "D": "15"
    },
    "correctAnswer": "C",
    "explanation": "Total parts = 5. Boys = (3/5) × 60 = 36. Girls = (2/5) × 60 = 24. For a 1 : 1 ratio, girls must equal boys (36). Additional girls needed = 36 - 24 = 12.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_102",
    "questionText": "If 4 men or 6 women can complete a work in 12 days, in how many days can 2 men and 3 women complete the same work?",
    "options": {
      "A": "8 days",
      "B": "10 days",
      "C": "12 days",
      "D": "16 days"
    },
    "correctAnswer": "C",
    "explanation": "4 men = 6 women => 2 men = 3 women. Thus, (2 men + 3 women) = (3 women + 3 women) = 6 women. Since 6 women complete the work in 12 days, they will also take 12 days.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_103",
    "questionText": "In a mixture of 70 liters, the ratio of milk to water is 5 : 2. How much water must be added to make the ratio 5 : 3?",
    "options": {
      "A": "5 liters",
      "B": "10 liters",
      "C": "15 liters",
      "D": "20 liters"
    },
    "correctAnswer": "B",
    "explanation": "Total parts = 7. Milk = (5/7) × 70 = 50 liters. Water = (2/7) × 70 = 20 liters. For milk:water to be 5:3, since milk remains 50 L (5 parts = 50 => 1 part = 10 L), water must be 3 × 10 = 30 L. Water to add = 30 - 20 = 10 liters.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_104",
    "questionText": "If x : y = 4 : 5, find the value of (3x + 2y) : (5x - 2y).",
    "options": {
      "A": "22 : 10 (11 : 5)",
      "B": "11 : 5",
      "C": "13 : 5",
      "D": "12 : 7"
    },
    "correctAnswer": "A",
    "explanation": "Let x = 4, y = 5. (3(4) + 2(5)) / (5(4) - 2(5)) = (12 + 10) / (20 - 10) = 22 / 10 = 11 / 5.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_105",
    "questionText": "Two numbers are in the ratio 7 : 9. If 6 is subtracted from each, the ratio becomes 5 : 7. What is the larger number?",
    "options": {
      "A": "18",
      "B": "21",
      "C": "27",
      "D": "36"
    },
    "correctAnswer": "C",
    "explanation": "Let numbers be 7k and 9k. (7k - 6)/(9k - 6) = 5/7 => 7(7k - 6) = 5(9k - 6) => 49k - 42 = 45k - 30 => 4k = 12 => k = 3. Larger number = 9(3) = 27.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_106",
    "questionText": "What is the third proportional to 9 and 12?",
    "options": {
      "A": "14",
      "B": "15",
      "C": "16",
      "D": "18"
    },
    "correctAnswer": "C",
    "explanation": "Third proportional c satisfies 9/12 = 12/c => c = (12 × 12) / 9 = 144 / 9 = 16.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_107",
    "questionText": "An article bought for 800 PKR is sold for 1,000 PKR. What is the profit percentage?",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "30%",
      "D": "35%"
    },
    "correctAnswer": "B",
    "explanation": "Profit = 1000 - 800 = 200 PKR. Profit % = (Profit / Cost Price) × 100 = (200 / 800) × 100 = 25%.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_108",
    "questionText": "If a number is first increased by 20% and then decreased by 20%, what is the net percentage change in the number?",
    "options": {
      "A": "0% (no change)",
      "B": "4% decrease",
      "C": "4% increase",
      "D": "2% decrease"
    },
    "correctAnswer": "B",
    "explanation": "Net change = x + y + (xy/100) = 20 - 20 - (20 × 20 / 100) = -4% (a 4% decrease).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_109",
    "questionText": "In an examination, 35% marks are required to pass. A candidate gets 160 marks and fails by 15 marks. What are the maximum total marks?",
    "options": {
      "A": "400",
      "B": "450",
      "C": "500",
      "D": "600"
    },
    "correctAnswer": "C",
    "explanation": "Pass marks = 160 + 15 = 175 marks. 35% of total = 175 => Total = (175 / 35) × 100 = 5 × 100 = 500 marks.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_110",
    "questionText": "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that the total expenditure remains unchanged?",
    "options": {
      "A": "15%",
      "B": "20%",
      "C": "25%",
      "D": "30%"
    },
    "correctAnswer": "B",
    "explanation": "Reduction % = [r / (100 + r)] × 100 = [25 / 125] × 100 = (1/5) × 100 = 20%.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_111",
    "questionText": "What is 15% of 60% of 5,000?",
    "options": {
      "A": "300",
      "B": "450",
      "C": "500",
      "D": "600"
    },
    "correctAnswer": "B",
    "explanation": "60% of 5,000 = 3,000. 15% of 3,000 = 0.15 × 3,000 = 450.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_112",
    "questionText": "A mobile phone marked at 40,000 PKR is sold after two successive discounts of 10% and 5%. What is the selling price?",
    "options": {
      "A": "34,000 PKR",
      "B": "34,200 PKR",
      "C": "35,000 PKR",
      "D": "36,000 PKR"
    },
    "correctAnswer": "B",
    "explanation": "After 10% discount: 40,000 - 4,000 = 36,000 PKR. After 5% discount on 36,000: 36,000 - 1,800 = 34,200 PKR.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_113",
    "questionText": "If A's income is 25% more than B's income, how much percent is B's income less than A's income?",
    "options": {
      "A": "16.67%",
      "B": "20%",
      "C": "25%",
      "D": "33.33%"
    },
    "correctAnswer": "B",
    "explanation": "Let B = 100 => A = 125. Difference = 25. Percentage less = (25 / 125) × 100 = 20%.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_114",
    "questionText": "The average of five numbers is 27. If one number is excluded, the average of the remaining numbers becomes 25. What is the excluded number?",
    "options": {
      "A": "30",
      "B": "32",
      "C": "35",
      "D": "37"
    },
    "correctAnswer": "C",
    "explanation": "Sum of 5 numbers = 5 × 27 = 135. Sum of remaining 4 numbers = 4 × 25 = 100. Excluded number = 135 - 100 = 35.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_115",
    "questionText": "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average age increases by 1 year. What is the teacher's age?",
    "options": {
      "A": "42 years",
      "B": "44 years",
      "C": "46 years",
      "D": "48 years"
    },
    "correctAnswer": "C",
    "explanation": "Initial sum = 30 × 15 = 450. New total persons = 31, new average = 16. New sum = 31 × 16 = 496. Teacher's age = 496 - 450 = 46 years.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_116",
    "questionText": "Find the arithmetic mean of the first ten positive odd integers (1, 3, 5, ..., 19).",
    "options": {
      "A": "9",
      "B": "10",
      "C": "11",
      "D": "12"
    },
    "correctAnswer": "B",
    "explanation": "The sum of the first n odd integers is n². Mean = n²/n = n. For n = 10, mean = 10.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_117",
    "questionText": "The average score of 8 innings of a batsman is 45. How many runs must he score in his 9th inning to raise his average to 50?",
    "options": {
      "A": "80",
      "B": "85",
      "C": "90",
      "D": "95"
    },
    "correctAnswer": "C",
    "explanation": "Total runs in 8 innings = 8 × 45 = 360. Required total runs in 9 innings = 9 × 50 = 450. Required runs in 9th inning = 450 - 360 = 90.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_118",
    "questionText": "The arithmetic mean of 6 numbers is 18. If each number is multiplied by 3, what will be the new arithmetic mean?",
    "options": {
      "A": "18",
      "B": "36",
      "C": "54",
      "D": "72"
    },
    "correctAnswer": "C",
    "explanation": "Multiplying every observation by a constant k multiplies the arithmetic mean by k: 18 × 3 = 54.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_119",
    "questionText": "In an office, the average salary of 10 officers is 90,000 PKR and the average salary of 40 staff members is 40,000 PKR. What is the combined average salary?",
    "options": {
      "A": "48,000 PKR",
      "B": "50,000 PKR",
      "C": "52,000 PKR",
      "D": "55,000 PKR"
    },
    "correctAnswer": "B",
    "explanation": "Total salary = (10 × 90,000) + (40 × 40,000) = 900,000 + 1,600,000 = 2,500,000 PKR. Total employees = 50. Weighted mean = 2,500,000 / 50 = 50,000 PKR.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_120",
    "questionText": "The mean of five observations x, x+2, x+4, x+6, and x+8 is 15. What is the value of x?",
    "options": {
      "A": "9",
      "B": "11",
      "C": "13",
      "D": "15"
    },
    "correctAnswer": "B",
    "explanation": "Sum = 5x + 20. Mean = (5x + 20) / 5 = x + 4 = 15 => x = 11.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Basic Arithmetic",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_121",
    "questionText": "Pakistan hosted the 23rd Council of Heads of Government (CHG) of the Shanghai Cooperation Organisation (SCO) in October 2024 in which city?",
    "options": {
      "A": "Karachi",
      "B": "Lahore",
      "C": "Islamabad",
      "D": "Gwadar"
    },
    "correctAnswer": "C",
    "explanation": "Pakistan successfully hosted the 23rd Meeting of the Council of Heads of Government (CHG) of the SCO in Islamabad on 15–16 October 2024.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_122",
    "questionText": "In June 2024, Pakistan was elected as a non-permanent member of the United Nations Security Council (UNSC) for which two-year term?",
    "options": {
      "A": "2024–2025",
      "B": "2025–2026",
      "C": "2026–2027",
      "D": "2027–2028"
    },
    "correctAnswer": "B",
    "explanation": "On 6 June 2024, Pakistan was elected with an overwhelming 182 votes in the UN General Assembly to serve an eighth term as a non-permanent member of the UNSC for 2025–2026.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_123",
    "questionText": "Which nation officially became the 32nd member of the North Atlantic Treaty Organization (NATO) in March 2024?",
    "options": {
      "A": "Finland",
      "B": "Sweden",
      "C": "Ukraine",
      "D": "Georgia"
    },
    "correctAnswer": "B",
    "explanation": "Sweden officially deposited its instrument of accession in Washington on 7 March 2024, becoming NATO's 32nd member (following Finland, which joined in 2023).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_124",
    "questionText": "Who was sworn in as the 24th Prime Minister of the Islamic Republic of Pakistan in March 2024?",
    "options": {
      "A": "Imran Khan",
      "B": "Shehbaz Sharif",
      "C": "Anwaar-ul-Haq Kakar",
      "D": "Bilawal Bhutto Zardari"
    },
    "correctAnswer": "B",
    "explanation": "Mian Muhammad Shehbaz Sharif took oath as the 24th Prime Minister of Pakistan on 4 March 2024 following the February 2024 general elections.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_125",
    "questionText": "Who was elected as the 14th President of Pakistan in March 2024?",
    "options": {
      "A": "Dr. Arif Alvi",
      "B": "Asif Ali Zardari",
      "C": "Yousaf Raza Gillani",
      "D": "Raja Pervaiz Ashraf"
    },
    "correctAnswer": "B",
    "explanation": "Asif Ali Zardari was elected as the 14th President of Pakistan on 9 March 2024, becoming the only civilian to hold the presidential office twice in Pakistan's history.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_126",
    "questionText": "Which major international economic grouping expanded in 2024 by admitting Iran, Egypt, Ethiopia, and the UAE as full members?",
    "options": {
      "A": "G7",
      "B": "BRICS",
      "C": "ASEAN",
      "D": "OECD"
    },
    "correctAnswer": "B",
    "explanation": "On 1 January 2024, BRICS officially expanded by inducting Egypt, Ethiopia, Iran, and the United Arab Emirates.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_127",
    "questionText": "The 29th UN Climate Change Conference of the Parties (COP29) was held in November 2024 in:",
    "options": {
      "A": "Dubai, UAE",
      "B": "Baku, Azerbaijan",
      "C": "Belém, Brazil",
      "D": "Sharm el-Sheikh, Egypt"
    },
    "correctAnswer": "B",
    "explanation": "COP29 was held in Baku, Azerbaijan from 11 to 22 November 2024, focusing extensively on the New Collective Quantified Goal (NCQG) on climate finance.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_128",
    "questionText": "Who took oath as the 30th Chief Justice of Pakistan in October 2024?",
    "options": {
      "A": "Justice Qazi Faez Isa",
      "B": "Justice Yahya Afridi",
      "C": "Justice Mansoor Ali Shah",
      "D": "Justice Munib Akhtar"
    },
    "correctAnswer": "B",
    "explanation": "Justice Yahya Afridi took oath as the 30th Chief Justice of Pakistan on 26 October 2024, following the passage of the 26th Constitutional Amendment.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_129",
    "questionText": "The 26th Constitutional Amendment Act, 2024 passed by the Parliament of Pakistan in October 2024 primarily reformed:",
    "options": {
      "A": "Provincial local bodies",
      "B": "The procedure for appointment of the Chief Justice and establishment of Constitutional Benches in the Supreme Court and High Courts",
      "C": "The federal tax collection system",
      "D": "The duration of the National Assembly from 5 to 7 years"
    },
    "correctAnswer": "B",
    "explanation": "The 26th Constitutional Amendment (passed in October 2024) instituted a Special Parliamentary Committee to appoint the CJP, fixed a 3-year term for CJP, and created Constitutional Benches.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_130",
    "questionText": "Which Pakistani athlete won the historic Gold Medal in Men's Javelin Throw at the Paris 2024 Olympic Games with an Olympic record throw of 92.97 meters?",
    "options": {
      "A": "Arshad Nadeem",
      "B": "Talha Talib",
      "C": "Muhammad Inam",
      "D": "Haider Ali"
    },
    "correctAnswer": "A",
    "explanation": "Arshad Nadeem won Pakistan's first Olympic individual gold medal in 40 years at the Paris 2024 Olympics on 8 August 2024, setting a new Olympic record of 92.97m.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_131",
    "questionText": "The Special Investment Facilitation Council (SIFC) was established by the Government of Pakistan as a 'single window' platform to attract investment in which key priority sectors?",
    "options": {
      "A": "Agriculture, Information Technology, Mines & Minerals, and Energy",
      "B": "Tourism, Sports, Textile, and Forestry",
      "C": "Aviation, Postal service, Shipping, and Retail",
      "D": "Real estate, Banking, Media, and Automobile"
    },
    "correctAnswer": "A",
    "explanation": "SIFC focuses on five core priority sectors: Agriculture, Information Technology & Telecom, Mines & Minerals, Energy, and Industry/Privatization.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_132",
    "questionText": "In 2024, the International Monetary Fund (IMF) Executive Board approved a 37-month Extended Fund Facility (EFF) for Pakistan valued at approximately:",
    "options": {
      "A": "$3 billion",
      "B": "$7 billion",
      "C": "$12 billion",
      "D": "$15 billion"
    },
    "correctAnswer": "B",
    "explanation": "In September 2024, the IMF Executive Board approved a 37-month Extended Fund Facility (EFF) for Pakistan amounting to SDR 5,320 million (approx. $7 billion).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_133",
    "questionText": "Who was elected as the 47th President of the United States in the November 2024 presidential election?",
    "options": {
      "A": "Joe Biden",
      "B": "Kamala Harris",
      "C": "Donald Trump",
      "D": "Ron DeSantis"
    },
    "correctAnswer": "C",
    "explanation": "Donald J. Trump won the November 2024 US Presidential election, becoming the 47th President of the United States.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_134",
    "questionText": "Which space agency achieved the historic milestone of retrieving samples from the far side of the Moon with its Chang'e 6 mission in June 2024?",
    "options": {
      "A": "NASA (USA)",
      "B": "CNSA (China)",
      "C": "ESA (Europe)",
      "D": "Roscosmos (Russia)"
    },
    "correctAnswer": "B",
    "explanation": "China's National Space Administration (CNSA) Chang'e 6 mission successfully returned to Earth on 25 June 2024 with the first-ever samples collected from the Moon's far side.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_135",
    "questionText": "In May 2024, Pakistan launched its historic lunar orbiter satellite named _____ aboard China's Chang'e 6 mission.",
    "options": {
      "A": "Badr-1",
      "B": "PakSAT-MM1",
      "C": "iCube-Qamar",
      "D": "PRSS-1"
    },
    "correctAnswer": "C",
    "explanation": "Pakistan's first lunar orbiter satellite, iCube-Qamar (ICUBE-Q), was launched on 3 May 2024 on board China's Chang'e 6 lunar probe.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_136",
    "questionText": "Which country hosted the 50th G7 Summit in June 2024 at Borgo Egnazia, Apulia?",
    "options": {
      "A": "Germany",
      "B": "Italy",
      "C": "Japan",
      "D": "United Kingdom"
    },
    "correctAnswer": "B",
    "explanation": "Italy hosted the 50th G7 summit in Apulia (Puglia) from 13 to 15 June 2024 under Prime Minister Giorgia Meloni.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_137",
    "questionText": "Who became the first woman Chief Minister of the Punjab province in Pakistan in February 2024?",
    "options": {
      "A": "Hina Rabbani Khar",
      "B": "Maryam Nawaz Sharif",
      "C": "Dr. Yasmin Rashid",
      "D": "Shazia Marri"
    },
    "correctAnswer": "B",
    "explanation": "Maryam Nawaz Sharif made history by taking oath as the first woman Chief Minister of Punjab on 26 February 2024.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_138",
    "questionText": "The headquarters of the newly established National Cyber Crime Investigation Agency (NCCIA) of Pakistan is located in:",
    "options": {
      "A": "Karachi",
      "B": "Lahore",
      "C": "Islamabad",
      "D": "Rawalpindi"
    },
    "correctAnswer": "C",
    "explanation": "The Federal Government notified the establishment of the specialized National Cyber Crime Investigation Agency (NCCIA) headquartered in Islamabad under PECA.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_139",
    "questionText": "Which international canal witnessed severe shipping diversions in 2024 due to geopolitical security tensions in the Red Sea and Bab-el-Mandeb?",
    "options": {
      "A": "Panama Canal",
      "B": "Suez Canal",
      "C": "Kiel Canal",
      "D": "Corinth Canal"
    },
    "correctAnswer": "B",
    "explanation": "Attacks on commercial vessels around the Bab-el-Mandeb strait in 2024 forced container ships to bypass the Suez Canal and detour around the Cape of Good Hope.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_140",
    "questionText": "Who won the ICC Men's T20 World Cup 2024 held in the United States and the West Indies?",
    "options": {
      "A": "South Africa",
      "B": "India",
      "C": "Australia",
      "D": "England"
    },
    "correctAnswer": "B",
    "explanation": "India won the 2024 ICC Men's T20 World Cup by defeating South Africa in the final at Kensington Oval, Barbados on 29 June 2024.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_141",
    "questionText": "In July 2024, which political party won a landslide majority in the UK General Election, ending 14 years of Conservative governance?",
    "options": {
      "A": "Liberal Democrats",
      "B": "Labour Party",
      "C": "Reform UK",
      "D": "Scottish National Party"
    },
    "correctAnswer": "B",
    "explanation": "The Labour Party led by Sir Keir Starmer won 411 seats in the UK General Election on 4 July 2024, becoming Prime Minister.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_142",
    "questionText": "The China-Pakistan Economic Corridor (CPEC) Phase-II primarily prioritizes which of the following areas?",
    "options": {
      "A": "Industrialization, agriculture modernization, science & technology, and socio-economic development",
      "B": "Importing finished automobiles only",
      "C": "Constructing sports stadia only",
      "D": "Space exploration exclusively"
    },
    "correctAnswer": "A",
    "explanation": "CPEC Phase-II transitions from basic infrastructure/power plants to five new corridors: growth, livelihood, innovation, green economy, and regional connectivity.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_143",
    "questionText": "Which country hosted the 16th BRICS Summit in October 2024 in the city of Kazan?",
    "options": {
      "A": "South Africa",
      "B": "Russia",
      "C": "Brazil",
      "D": "India"
    },
    "correctAnswer": "B",
    "explanation": "Russia hosted the 16th BRICS Summit from 22 to 24 October 2024 in Kazan, the capital of Tatarstan.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_144",
    "questionText": "In 2024, which country officially recognized the State of Palestine alongside Norway and Ireland in a coordinated diplomatic move?",
    "options": {
      "A": "Spain",
      "B": "Germany",
      "C": "Italy",
      "D": "Switzerland"
    },
    "correctAnswer": "A",
    "explanation": "On 28 May 2024, Spain, Norway, and Ireland formally recognized the State of Palestine in a historic joint diplomatic announcement.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_145",
    "questionText": "The Green Pakistan Initiative (GPI) launched under the civil-military leadership of SIFC focuses on modernizing:",
    "options": {
      "A": "Corporate Agriculture and food security",
      "B": "Textile factories",
      "C": "Aviation ground handling",
      "D": "Mining software"
    },
    "correctAnswer": "A",
    "explanation": "The Green Pakistan Initiative (GPI) promotes corporate farming, smart agriculture, high-efficiency irrigation, and livestock development.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_146",
    "questionText": "Who was appointed as the Deputy Prime Minister of Pakistan in April 2024, in addition to his portfolio as Foreign Minister?",
    "options": {
      "A": "Khawaja Muhammad Asif",
      "B": "Mohsin Naqvi",
      "C": "Ishaq Dar",
      "D": "Attaullah Tarar"
    },
    "correctAnswer": "C",
    "explanation": "Senator Muhammad Ishaq Dar was designated as the Deputy Prime Minister of Pakistan on 28 April 2024 while serving as Foreign Minister.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_147",
    "questionText": "Which country hosted the Summer Olympic Games in July–August 2024?",
    "options": {
      "A": "Tokyo, Japan",
      "B": "Paris, France",
      "C": "Los Angeles, USA",
      "D": "Brisbane, Australia"
    },
    "correctAnswer": "B",
    "explanation": "The XXXIII Olympic Summer Games took place in Paris, France from 26 July to 11 August 2024.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_148",
    "questionText": "Pakistan signed a historic trade agreement with which Central Asian country in 2024 to facilitate bilateral trade exceeding $1 billion?",
    "options": {
      "A": "Turkmenistan",
      "B": "Uzbekistan",
      "C": "Azerbaijan",
      "D": "Kazakhstan"
    },
    "correctAnswer": "C",
    "explanation": "In July 2024, Pakistan and Azerbaijan signed 15 MoUs and agreed to fast-track preferential trade agreements and an initial $2 billion investment package.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_149",
    "questionText": "What is the primary objective of Pakistan's 'Digital Pakistan Policy' and National Artificial Intelligence Policy 2024–2025?",
    "options": {
      "A": "Fostering AI research, digital governance, IT exports, and cyber capacity building",
      "B": "Restricting broadband access across rural areas",
      "C": "Taxing computer hardware purchases by 100%",
      "D": "Banning cloud storage services"
    },
    "correctAnswer": "A",
    "explanation": "The National AI Policy framework focuses on AI-driven governance, technical human capital development, ethics, and boosting digital services exports.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_150",
    "questionText": "Which international financial body retained Pakistan on its approved list for sovereign debt sustainability reviews under the G20 Common Framework in 2024?",
    "options": {
      "A": "World Bank and Asian Development Bank",
      "B": "Inter-American Development Bank",
      "C": "African Development Bank",
      "D": "Nordic Investment Bank"
    },
    "correctAnswer": "A",
    "explanation": "Both the World Bank and ADB continue to partner with Pakistan on major budgetary and structural development policy financings.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Current Affairs",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_151",
    "questionText": "When was the All-India Muslim League founded in Dacca (Dhaka)?",
    "options": {
      "A": "30th December 1905",
      "B": "30th December 1906",
      "C": "23rd March 1906",
      "D": "14th August 1907"
    },
    "correctAnswer": "B",
    "explanation": "The All-India Muslim League was established on 30th December 1906 at the annual meeting of the All India Muhammadan Educational Conference in Dhaka, presided by Nawab Waqar-ul-Mulk.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_152",
    "questionText": "The historic Lahore Resolution (later known as Pakistan Resolution) was presented by A. K. Fazlul Huq on:",
    "options": {
      "A": "23rd March 1940",
      "B": "14th August 1940",
      "C": "11th August 1947",
      "D": "25th December 1939"
    },
    "correctAnswer": "A",
    "explanation": "The Lahore Resolution was moved on 23rd March 1940 at Minto Park (now Iqbal Park), Lahore, during the annual general session of the All-India Muslim League.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_153",
    "questionText": "Who was the Chairman of the Boundary Commission appointed to demarcate the boundaries of Punjab and Bengal in 1947?",
    "options": {
      "A": "Lord Mountbatten",
      "B": "Sir Cyril Radcliffe",
      "C": "Lord Pethick-Lawrence",
      "D": "Sir Stafford Cripps"
    },
    "correctAnswer": "B",
    "explanation": "Sir Cyril Radcliffe, a British lawyer, was appointed Chairman of the two boundary commissions for Punjab and Bengal, creating the Radcliffe Line.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_154",
    "questionText": "Under which Article of the 1973 Constitution of Pakistan is 'High Treason' defined and prohibited?",
    "options": {
      "A": "Article 6",
      "B": "Article 8",
      "C": "Article 19",
      "D": "Article 58(2)(b)"
    },
    "correctAnswer": "A",
    "explanation": "Article 6 of the 1973 Constitution defines High Treason as abrogation, subversion, or suspension of the Constitution by use of force or other unconstitutional means.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_155",
    "questionText": "When did the 1973 Constitution of the Islamic Republic of Pakistan come into force?",
    "options": {
      "A": "23rd March 1973",
      "B": "14th August 1973",
      "C": "21st April 1973",
      "D": "6th September 1973"
    },
    "correctAnswer": "B",
    "explanation": "The 1973 Constitution was passed unanimously by the National Assembly on 10th April 1973 and formally authenticated and enforced on 14th August 1973.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_156",
    "questionText": "The Indus Waters Treaty between Pakistan and India was signed in Karachi in September 1960 under the mediation of the:",
    "options": {
      "A": "United Nations Security Council",
      "B": "World Bank",
      "C": "International Monetary Fund",
      "D": "British Commonwealth"
    },
    "correctAnswer": "B",
    "explanation": "The Indus Waters Treaty was signed on 19 September 1960 by President Ayub Khan and Prime Minister Jawaharlal Nehru, brokered by the World Bank.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_157",
    "questionText": "Which mountain pass connects Peshawar in Pakistan with Jalalabad and Kabul in Afghanistan?",
    "options": {
      "A": "Bolan Pass",
      "B": "Khyber Pass",
      "C": "Khunjerab Pass",
      "D": "Tochi Pass"
    },
    "correctAnswer": "B",
    "explanation": "The historic Khyber Pass traverses the Spin Ghar mountains, linking Peshawar in Pakistan with Jalalabad and Kabul in Afghanistan.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_158",
    "questionText": "The Objectives Resolution was passed by the First Constituent Assembly of Pakistan on:",
    "options": {
      "A": "14th August 1948",
      "B": "12th March 1949",
      "C": "23rd March 1956",
      "D": "16th October 1951"
    },
    "correctAnswer": "B",
    "explanation": "The Objectives Resolution, moved by Prime Minister Liaquat Ali Khan, was adopted by the Constituent Assembly on 12th March 1949 and now forms the substantive part (Article 2A) of the Constitution.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_159",
    "questionText": "The Simla Agreement between Pakistan and India was signed in July 1972 following the 1971 war by:",
    "options": {
      "A": "Zulfikar Ali Bhutto and Indira Gandhi",
      "B": "Ayub Khan and Lal Bahadur Shastri",
      "C": "Yahya Khan and Indira Gandhi",
      "D": "Zia-ul-Haq and Rajiv Gandhi"
    },
    "correctAnswer": "A",
    "explanation": "The Simla Agreement was signed on 2 July 1972 in Simla by President Zulfikar Ali Bhutto of Pakistan and Prime Minister Indira Gandhi of India.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_160",
    "questionText": "K2 (Mount Godwin-Austen), the second highest peak in the world, is located in which mountain range in Pakistan?",
    "options": {
      "A": "Himalayas",
      "B": "Karakoram Range",
      "C": "Hindu Kush",
      "D": "Sulaiman Range"
    },
    "correctAnswer": "B",
    "explanation": "K2 (elevation 8,611 meters / 28,251 ft) is situated in the Karakoram range in the Gilgit-Baltistan region of Pakistan.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_161",
    "questionText": "Under the 18th Constitutional Amendment Act, 2010, which list of legislative powers was abolished to devolve powers to the provinces?",
    "options": {
      "A": "Federal Legislative List Part I",
      "B": "Federal Legislative List Part II",
      "C": "Concurrent Legislative List",
      "D": "Provincial List"
    },
    "correctAnswer": "C",
    "explanation": "The 18th Constitutional Amendment abolished the Concurrent Legislative List, devolving 47 subjects including health, education, and labor to the provinces.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_162",
    "questionText": "What is the total length of the border between Pakistan and Afghanistan (Durand Line)?",
    "options": {
      "A": "1,500 km",
      "B": "2,050 km",
      "C": "Approximately 2,611 km (or ~2,640 km)",
      "D": "3,323 km"
    },
    "correctAnswer": "C",
    "explanation": "The Durand Line, demarcated following the 1893 agreement between Sir Mortimer Durand and Amir Abdur Rahman Khan, is approximately 2,611 kilometers (1,622 miles) long.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_163",
    "questionText": "Who was the first Governor-General of Pakistan?",
    "options": {
      "A": "Khawaja Nazimuddin",
      "B": "Quaid-e-Azam Muhammad Ali Jinnah",
      "C": "Ghulam Muhammad",
      "D": "Iskander Mirza"
    },
    "correctAnswer": "B",
    "explanation": "Quaid-e-Azam Muhammad Ali Jinnah took oath as the first Governor-General of Pakistan on 14th August 1947, serving until his demise on 11th September 1948.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_164",
    "questionText": "The Tashkent Declaration was signed in January 1966 between Pakistan and India following which conflict?",
    "options": {
      "A": "1948 Kashmir War",
      "B": "1965 Indo-Pak War",
      "C": "1971 Bangladesh War",
      "D": "1999 Kargil Conflict"
    },
    "correctAnswer": "B",
    "explanation": "The Tashkent Declaration was signed on 10 January 1966 in Tashkent (USSR) by President Ayub Khan and Prime Minister Lal Bahadur Shastri following the 1965 war.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_165",
    "questionText": "Which deep-sea port in Balochistan, Pakistan is the warm-water gateway and commercial hub of the CPEC project?",
    "options": {
      "A": "Port Qasim",
      "B": "Karachi Port",
      "C": "Gwadar Port",
      "D": "Ormara Naval Base"
    },
    "correctAnswer": "C",
    "explanation": "Gwadar Port, located on the Arabian Sea in southwestern Balochistan, is the centerpiece deep-sea port developed under the China-Pakistan Economic Corridor.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_166",
    "questionText": "In which Hijri year did the Battle of Badr, the first major armed battle in Islamic history, take place?",
    "options": {
      "A": "1st Hijri",
      "B": "2nd Hijri (17 Ramadan)",
      "C": "3rd Hijri",
      "D": "5th Hijri"
    },
    "correctAnswer": "B",
    "explanation": "The Battle of Badr was fought on Friday, 17th Ramadan in the 2nd year of Hijra (624 CE), where 313 Muslims defeated a 1,000-strong Quraysh army.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_167",
    "questionText": "The Treaty of Hudaibiya was concluded between the Muslims and the Quraysh of Makkah in which year?",
    "options": {
      "A": "4th Hijri",
      "B": "5th Hijri",
      "C": "6th Hijri",
      "D": "8th Hijri"
    },
    "correctAnswer": "C",
    "explanation": "The Treaty of Hudaibiya was signed in the month of Dhu al-Qi'dah, 6th Hijri (628 CE), declared in the Quran as 'Fath-an Mubeena' (a manifest victory).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_168",
    "questionText": "How many verses (Ayat) were revealed in the very first revelation of the Holy Quran in Cave Hira (Surah Al-Alaq)?",
    "options": {
      "A": "3 verses",
      "B": "5 verses",
      "C": "7 verses",
      "D": "10 verses"
    },
    "correctAnswer": "B",
    "explanation": "The first revelation brought by Angel Jibreel in Cave Hira comprised the first 5 verses of Surah Al-Alaq (96:1–5): 'Iqra bismi Rabbika allathee khalaq...'.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_169",
    "questionText": "Who was appointed to lead the official committee for the compilation and standardization of the Holy Quran during the Caliphate of Hazrat Abu Bakr (RA) and Hazrat Usman (RA)?",
    "options": {
      "A": "Hazrat Ali (RA)",
      "B": "Hazrat Zaid bin Thabit (RA)",
      "C": "Hazrat Abdullah bin Mas'ud (RA)",
      "D": "Hazrat Mu'awiya (RA)"
    },
    "correctAnswer": "B",
    "explanation": "Hazrat Zaid bin Thabit (RA) was appointed to compile the written Quran into a single codex (Mushaf) under Hazrat Abu Bakr (RA), and later oversaw its standardization under Hazrat Usman (RA).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_170",
    "questionText": "What is the nisab rate of Zakat on accumulated gold in Islamic jurisprudence?",
    "options": {
      "A": "5 tolas",
      "B": "7.5 tolas (approx. 87.48 grams)",
      "C": "10 tolas",
      "D": "52.5 tolas"
    },
    "correctAnswer": "B",
    "explanation": "The nisab threshold for gold is 7.5 tolas (approximately 87.48 grams) at the annual zakat rate of 2.5% (or 1/40th).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_171",
    "questionText": "In which battle were seventy Huffaz-e-Quran (memorizers of the Quran) martyred, leading Hazrat Umar (RA) to propose the preservation and compilation of the Quran?",
    "options": {
      "A": "Battle of Yamama",
      "B": "Battle of Yarmouk",
      "C": "Battle of Qadisiyyah",
      "D": "Battle of Mu'tah"
    },
    "correctAnswer": "A",
    "explanation": "The Battle of Yamama (12 AH) against the false prophet Musaylimah resulted in the martyrdom of many companions who were Huffaz, prompting the collection of the Quran.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_172",
    "questionText": "The Conquest of Makkah (Fath-e-Makkah) took place in which Hijri year?",
    "options": {
      "A": "6th Hijri",
      "B": "7th Hijri",
      "C": "8th Hijri (20 Ramadan)",
      "D": "9th Hijri"
    },
    "correctAnswer": "C",
    "explanation": "The bloodless Conquest of Makkah occurred in the month of Ramadan, 8th Hijri (630 CE), establishing peace and general amnesty.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_173",
    "questionText": "Who was given the title of 'Saifullah' (Sword of Allah) by the Holy Prophet Muhammad (PBUH)?",
    "options": {
      "A": "Hazrat Ali (RA)",
      "B": "Hazrat Khalid bin Waleed (RA)",
      "C": "Hazrat Hamza (RA)",
      "D": "Hazrat Saad bin Abi Waqqas (RA)"
    },
    "correctAnswer": "B",
    "explanation": "Hazrat Khalid bin Waleed (RA) was bestowed the honorary title 'Saifullah' (Sword of Allah) for his brilliant military leadership at the Battle of Mu'tah.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_174",
    "questionText": "How many stages (Manzils) is the Holy Quran divided into for weekly recitation?",
    "options": {
      "A": "5",
      "B": "7",
      "C": "14",
      "D": "30"
    },
    "correctAnswer": "B",
    "explanation": "The Holy Quran is divided into 7 Manzils, allowing a reader to complete the entire recitation in one week.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_175",
    "questionText": "Which Surah of the Holy Quran does not begin with the Bismillah?",
    "options": {
      "A": "Surah An-Naml",
      "B": "Surah At-Tawbah (Al-Bara'at)",
      "C": "Surah Al-Ikhlas",
      "D": "Surah Al-Kahf"
    },
    "correctAnswer": "B",
    "explanation": "Surah At-Tawbah (the 9th chapter of the Quran) is the only Surah that does not begin with 'Bismillah-ir-Rahman-ir-Rahim'.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_176",
    "questionText": "The farewell pilgrimage (Hajjat-ul-Wida) of the Holy Prophet Muhammad (PBUH) took place in:",
    "options": {
      "A": "8th Hijri",
      "B": "9th Hijri",
      "C": "10th Hijri",
      "D": "11th Hijri"
    },
    "correctAnswer": "C",
    "explanation": "The Farewell Pilgrimage (Hajjat-ul-Wida) was performed by the Holy Prophet (PBUH) in Dhu al-Hijjah, 10th Hijri (632 CE).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_177",
    "questionText": "Who was the fourth Rightly Guided Caliph (Khaleefa-e-Rashid) of Islam?",
    "options": {
      "A": "Hazrat Abu Bakr (RA)",
      "B": "Hazrat Umar (RA)",
      "C": "Hazrat Usman (RA)",
      "D": "Hazrat Ali ibn Abi Talib (RA)"
    },
    "correctAnswer": "A",
    "explanation": "The four Khulafa-e-Rashideen in sequence were: Hazrat Abu Bakr (RA), Hazrat Umar (RA), Hazrat Usman (RA), and Hazrat Ali ibn Abi Talib (RA).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_178",
    "questionText": "The primary Sahih collections of Hadith recognized in Sunni Islam are collectively called:",
    "options": {
      "A": "Kanz-ul-Ummal",
      "B": "Sihah-e-Sittah (The Six Books)",
      "C": "Muwatta",
      "D": "Tafsir Ibn Kathir"
    },
    "correctAnswer": "B",
    "explanation": "The Sihah-e-Sittah (Six Authentic Books) are Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami al-Tirmidhi, Sunan al-Nasa'i, and Sunan Ibn Majah.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_179",
    "questionText": "What is the meaning of the Islamic jurisprudential term 'Ijma'?",
    "options": {
      "A": "Consensus of Islamic jurists / scholars on a legal issue",
      "B": "Analogical deduction",
      "C": "Individual speculative opinion",
      "D": "Customary local practice"
    },
    "correctAnswer": "A",
    "explanation": "Ijma is the third source of Islamic law, defined as the unanimous consensus of Muslim jurists of a particular era on a religious/legal matter.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_180",
    "questionText": "In which year of the Hijra was the direction of Qiblah changed from Masjid al-Aqsa in Jerusalem to the Kaaba in Makkah?",
    "options": {
      "A": "1st Hijri",
      "B": "2nd Hijri (in Rajab/Sha'ban)",
      "C": "3rd Hijri",
      "D": "4th Hijri"
    },
    "correctAnswer": "B",
    "explanation": "The change of Qiblah occurred in the 2nd Hijri during prayer at Masjid al-Qiblatayn in Madinah, pursuant to Surah Al-Baqarah (2:144).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Pakistan Affairs & Islamic Studies",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_181",
    "questionText": "The Federal Investigation Agency (FIA) was created under Act VIII of 1975, which received presidential assent on:",
    "options": {
      "A": "14th August 1974",
      "B": "13th January 1975",
      "C": "23rd March 1975",
      "D": "1st July 1975"
    },
    "correctAnswer": "B",
    "explanation": "The Federal Investigation Agency Act, 1974 was passed by the Parliament in 1974 and received the assent of the President on 13th January 1975.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_182",
    "questionText": "Under Section 3(1) of the FIA Act, 1974, the Agency is constituted to conduct inquiry into and investigation of offences specified in the:",
    "options": {
      "A": "Provincial Police Gazette",
      "B": "Schedule to the Act",
      "C": "Federal Civil Service Rules",
      "D": "Criminal Procedure Code exclusively"
    },
    "correctAnswer": "B",
    "explanation": "Section 3(1) states: 'the Federal Government may constitute an Agency to be called the Federal Investigation Agency for inquiry into, and investigation of the offences specified in the Schedule.'",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_183",
    "questionText": "Under Section 4(1) of the FIA Act, 1974, the 'Superintendence' of the Agency shall vest in the:",
    "options": {
      "A": "Supreme Court of Pakistan",
      "B": "Federal Government",
      "C": "Director General FIA",
      "D": "Inspector General of Police"
    },
    "correctAnswer": "B",
    "explanation": "Section 4(1) of the Act explicitly mandates that 'The superintendence of the Agency shall vest in the Federal Government.'",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_184",
    "questionText": "Under Section 4(2) of the FIA Act, 1974, who exercises the powers of an Inspector-General of Police under the Police Act, 1861 in respect of the Agency?",
    "options": {
      "A": "The Interior Minister",
      "B": "The Director General",
      "C": "The Additional Director General (Investigation)",
      "D": "The Federal Secretary"
    },
    "correctAnswer": "B",
    "explanation": "Section 4(2) provides that administration vests in the Director General who exercises the powers of an Inspector-General of Police under the Police Act, 1861.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_185",
    "questionText": "Under Section 5(1) of the FIA Act, 1974, members of the Agency have what territorial jurisdiction in relation to scheduled offences?",
    "options": {
      "A": "Throughout the whole of Pakistan",
      "B": "Only in Islamabad Capital Territory",
      "C": "Only at international airports",
      "D": "Only within federal ministry offices"
    },
    "correctAnswer": "A",
    "explanation": "Section 5(1) confers powers throughout Pakistan: 'members of the Agency shall have throughout Pakistan in relation to the investigation of scheduled offences... all the powers of a police officer.'",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_186",
    "questionText": "Under Section 5(2) of the FIA Act, 1974, any member of the Agency not below which rank may exercise powers of an officer-in-charge of a Police Station (SHO)?",
    "options": {
      "A": "Constable",
      "B": "Head Constable",
      "C": "Sub-Inspector",
      "D": "Inspector"
    },
    "correctAnswer": "C",
    "explanation": "Section 5(2) states: 'any member of the Agency not below the rank of a Sub-Inspector may exercise any of the powers of an officer-in-charge of a police station.'",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_187",
    "questionText": "Under Section 5(3) of the FIA Act, 1974, every office or post used as an Agency station shall be deemed to be a:",
    "options": {
      "A": "Federal Tribunal",
      "B": "Police Station within the meaning of CrPC",
      "C": "Court of Summary Inquiry",
      "D": "Detention Center"
    },
    "correctAnswer": "B",
    "explanation": "Section 5(3) declares that any office or post declared by the Federal Government to be an Agency station shall be deemed to be a Police Station.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_188",
    "questionText": "Under Section 5(4) of the FIA Act, 1974, if a member of the Agency arrests any person, he shall immediately report the arrest to:",
    "options": {
      "A": "The officer-in-charge of the police station having jurisdiction",
      "B": "The Supreme Judicial Council",
      "C": "The Ministry of Law and Justice",
      "D": "The Registrar of the High Court"
    },
    "correctAnswer": "A",
    "explanation": "Section 5(4) requires that any member of the Agency who arrests a person shall immediately report the fact to the officer-in-charge of the police station having jurisdiction.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_189",
    "questionText": "Under Section 5(5) of the FIA Act, 1974, an authorized officer investigating a scheduled offence may direct a bank not to pay out from an account if:",
    "options": {
      "A": "He has reason to believe that the property was acquired by or involved in a scheduled offence",
      "B": "The account holder has not paid utility bills",
      "C": "The account has high foreign remittance",
      "D": "The bank belongs to a private commercial group"
    },
    "correctAnswer": "A",
    "explanation": "Section 5(5) authorizes an officer not below Sub-Inspector (with approval of DG/Director) to order freezing/holding of bank accounts suspected to contain illicit proceeds of scheduled offences.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_190",
    "questionText": "Who is empowered to add, omit, or modify any entry in the Schedule to the FIA Act, 1974 under Section 6?",
    "options": {
      "A": "The Supreme Court of Pakistan",
      "B": "The Federal Government by notification in the official Gazette",
      "C": "The Director General FIA",
      "D": "The Senate Standing Committee on Interior"
    },
    "correctAnswer": "B",
    "explanation": "Section 6 provides: 'The Federal Government may, by notification in the official Gazette, amend the Schedule so as to add any entry thereto or modify or omit any entry therein.'",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_191",
    "questionText": "Under Section 7 of the FIA Act, 1974, the Director General may by order delegate any of his powers to:",
    "options": {
      "A": "Any officer of the Agency subordinate to him",
      "B": "Private commercial security agencies",
      "C": "Provincial members of assembly",
      "D": "Any foreign police attache"
    },
    "correctAnswer": "A",
    "explanation": "Section 7 authorizes the DG to delegate by general or special order any of his powers under the Act or rules to any subordinate officer.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_192",
    "questionText": "Under Section 8 of the FIA Act, 1974 (Indemnity), no suit, prosecution or legal proceeding shall lie against any member of the Agency for anything done:",
    "options": {
      "A": "Under duress",
      "B": "In good faith under the Act or rules",
      "C": "Without judicial warrant",
      "D": "During night hours"
    },
    "correctAnswer": "B",
    "explanation": "Section 8 protects members of the Agency and the Federal Government against legal actions for acts done in good faith under the Act or rules.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_193",
    "questionText": "Who is empowered to make rules for carrying out the purposes of the FIA Act under Section 9?",
    "options": {
      "A": "The Federal Government",
      "B": "The Director General FIA alone",
      "C": "The Federal Public Service Commission",
      "D": "The Bar Council of Pakistan"
    },
    "correctAnswer": "A",
    "explanation": "Section 9(1) vests the rule-making power in the Federal Government by notification in the official Gazette.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_194",
    "questionText": "The FIA Act, 1974 repealed which previous enactment under Section 10(1)?",
    "options": {
      "A": "The Police Act, 1861",
      "B": "The Pakistan Special Police Establishment Ordinance, 1948",
      "C": "The Federal Security Force Act, 1973",
      "D": "The Prevention of Corruption Act, 1947"
    },
    "correctAnswer": "B",
    "explanation": "Section 10(1) repealed the Pakistan Special Police Establishment Ordinance, 1948 (Ordinance VII of 1948).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_195",
    "questionText": "What is the primary role of an Assistant Director (Investigation) (BS-17) in the Federal Investigation Agency?",
    "options": {
      "A": "Supervising criminal inquiries, conducting raids, interrogations, forensic collections, and submitting investigation reports (Challans)",
      "B": "Managing civil disputes over agricultural land",
      "C": "Acting as presiding judge in Sessions Court",
      "D": "Directing provincial traffic signals"
    },
    "correctAnswer": "A",
    "explanation": "An Assistant Director (Investigation) serves as a senior field supervisory investigator in specialized wings (Anti-Corruption, Cyber Crime, Immigration, Commercial Banking, Counter-Terrorism).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_196",
    "questionText": "Under the FIA (Inquiries and Investigations) Rules, 1974, an enquiry is initiated upon receipt of:",
    "options": {
      "A": "A complaint, information, or reference alleging a scheduled offence",
      "B": "An anonymous phone call without any allegation",
      "C": "A commercial advertisement",
      "D": "A civil lawsuit summons"
    },
    "correctAnswer": "A",
    "explanation": "Under the FIA Rules, an enquiry is formally initiated upon receipt of credible information, complaint, or audit/inspection report alleging a scheduled offence.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_197",
    "questionText": "Which specialized wing of the FIA is tasked with intercepting illegal human smuggling, migrant trafficking, and forged travel documents?",
    "options": {
      "A": "Anti-Human Trafficking and Smuggling Wing (AHTC)",
      "B": "Economic Crime Wing",
      "C": "Anti-Corruption Wing",
      "D": "Technical Wing"
    },
    "correctAnswer": "A",
    "explanation": "The Anti-Human Trafficking Circles (AHTC) and Immigration Wing investigate human trafficking, migrant smuggling, and offenses under the Emigration Ordinance 1979 and Passport Act 1974.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_198",
    "questionText": "Which wing of the FIA investigates banking frauds, corporate embezzlement, and offences under the Foreign Exchange Regulation Act, 1947?",
    "options": {
      "A": "Commercial Banking Circle (CBC) / Economic Crime Wing",
      "B": "Immigration Wing",
      "C": "Interpol Wing",
      "D": "Administration Wing"
    },
    "correctAnswer": "A",
    "explanation": "The Commercial Banking Circle (CBC) and Economic Crime Wing investigate banking frauds, financial scams, trade-based money laundering, and forex violations.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_199",
    "questionText": "Offences under which federal statute relating to bribery and criminal misconduct by public servants are investigated by the FIA Anti-Corruption Wing?",
    "options": {
      "A": "The Prevention of Corruption Act, 1947 (Act II of 1947)",
      "B": "The Industrial Disputes Act, 1947",
      "C": "The Companies Act, 2017 only",
      "D": "The Arbitration Act, 1940"
    },
    "correctAnswer": "A",
    "explanation": "The Prevention of Corruption Act, 1947 (PCA 1947) is a core scheduled statute enforced by the FIA against corrupt federal public servants.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_200",
    "questionText": "Under the Code of Criminal Procedure, 1898, as applied to FIA investigations, when must an arrested suspect be produced before a Magistrate?",
    "options": {
      "A": "Within 12 hours",
      "B": "Within 24 hours of arrest (exclusive of journey time)",
      "C": "Within 48 hours",
      "D": "Within 7 days"
    },
    "correctAnswer": "B",
    "explanation": "Under Section 61 CrPC (and Article 10 of the Constitution), an arrested person must be produced before the nearest Magistrate within 24 hours of arrest.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_201",
    "questionText": "What is the maximum period of physical remand in police custody that an FIA investigating officer may obtain under Section 167 CrPC?",
    "options": {
      "A": "7 days",
      "B": "14 days",
      "C": "15 days in aggregate",
      "D": "30 days"
    },
    "correctAnswer": "C",
    "explanation": "Under Section 167 CrPC, the maximum total period of physical remand that may be authorized by a Magistrate is 15 days in the whole.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_202",
    "questionText": "The Cyber Crime Wing (CCW) of the FIA investigates offences under which primary act?",
    "options": {
      "A": "Prevention of Electronic Crimes Act, 2016 (PECA)",
      "B": "Electronic Transactions Ordinance, 2002 only",
      "C": "Pakistan Telecommunication Re-organization Act, 1996 only",
      "D": "Official Secrets Act, 1923 only"
    },
    "correctAnswer": "A",
    "explanation": "The Cyber Crime Wing investigates offences under the Prevention of Electronic Crimes Act, 2016 (PECA), which is included in the Schedule to the FIA Act.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_203",
    "questionText": "In an FIA investigation, what is the formal document submitted to the Special Court under Section 173 CrPC at the conclusion of investigation called?",
    "options": {
      "A": "First Information Report (FIR)",
      "B": "Police Report / Challan",
      "C": "Inspection Note",
      "D": "Case Diary (Zimni)"
    },
    "correctAnswer": "B",
    "explanation": "The final investigation report submitted under Section 173 CrPC detailing accused persons sent for trial or recommended for discharge is the Challan.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_204",
    "questionText": "Which court conducts the trial of scheduled corruption offences investigated by the FIA?",
    "options": {
      "A": "Special Judge (Central) appointed under the Pakistan Criminal Law Amendment Act, 1958",
      "B": "Civil Judge Class III",
      "C": "Federal Ombudsman",
      "D": "District Consumer Court"
    },
    "correctAnswer": "A",
    "explanation": "The Court of Special Judge (Central), established under the Pakistan Criminal Law Amendment Act, 1958, is the trial court for FIA corruption and scheduled cases.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_205",
    "questionText": "Can the FIA investigate a murder or theft case committed by private citizens with no connection to federal matters or the Schedule of the FIA Act?",
    "options": {
      "A": "Yes, if the Director General orders it",
      "B": "No, because the FIA's jurisdiction is statutory and restricted strictly to offences specified in the Schedule",
      "C": "Yes, if requested by the complainant",
      "D": "Yes, if it occurs near a federal highway"
    },
    "correctAnswer": "B",
    "explanation": "The FIA is a creature of statute with specialized jurisdiction confined to scheduled offences; purely provincial crimes remain under the exclusive jurisdiction of Provincial Police.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_206",
    "questionText": "Under Section 5(1) of the FIA Act, what powers do FIA officers have regarding seizure of forged or smuggled goods?",
    "options": {
      "A": "Powers of search and seizure equal to those of police officers under CrPC",
      "B": "No search powers without written military clearance",
      "C": "Only power to take photographs",
      "D": "Only power to impose administrative fines"
    },
    "correctAnswer": "A",
    "explanation": "Section 5(1) vests members of the Agency with all powers relating to search, arrest of persons, and seizure of property which officers of Provincial Police have under CrPC.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_207",
    "questionText": "The Federal Investigation Agency Academy, which provides basic and specialized training to Assistant Directors and Inspectors, is located in:",
    "options": {
      "A": "Islamabad",
      "B": "Lahore",
      "C": "Karachi",
      "D": "Peshawar"
    },
    "correctAnswer": "A",
    "explanation": "The FIA Academy is located in Islamabad, imparting training in modern criminal investigation, financial intelligence, digital forensics, and anti-human trafficking.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_208",
    "questionText": "Under the Emigration Ordinance, 1979 (included in the Schedule to the FIA Act), illegal recruitment for employment abroad without a valid license is punishable with:",
    "options": {
      "A": "Imprisonment up to 14 years and fine",
      "B": "A simple administrative reprimand",
      "C": "Community service for 1 week",
      "D": "30 days house arrest"
    },
    "correctAnswer": "A",
    "explanation": "Section 17 and 18 of the Emigration Ordinance, 1979 penalize unlawful emigration and illegal recruitment with imprisonment extending up to 14 years, fine, or both.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_209",
    "questionText": "Who appoints the Director General of the Federal Investigation Agency?",
    "options": {
      "A": "The Federal Government",
      "B": "The Supreme Judicial Council",
      "C": "The Senate Chairman",
      "D": "The Chief Election Commissioner"
    },
    "correctAnswer": "A",
    "explanation": "Section 3(2) of the FIA Act provides: 'The Agency shall consist of a Director General to be appointed by the Federal Government.'",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_210",
    "questionText": "In an investigation under the FIA Act, 1974, when an investigating officer examines any person acquainted with the facts of the case, under which section of CrPC is the statement recorded?",
    "options": {
      "A": "Section 154 CrPC",
      "B": "Section 161 CrPC",
      "C": "Section 164 CrPC",
      "D": "Section 172 CrPC"
    },
    "correctAnswer": "B",
    "explanation": "Statements of witnesses examined by police/FIA officers during an investigation are recorded under Section 161 of the Code of Criminal Procedure, 1898.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "FIA Act, 1974",
    "difficulty": "Easy"
  }
];

  global.CIVIL_SERVANTS_ACT_MCQS = CIVIL_SERVANTS_ACT_MCQS;
  global.CURRENT_AFFAIRS_2026_MCQS = CURRENT_AFFAIRS_2026_MCQS;
  global.MATH_SPECIALIZED_MCQS = MATH_SPECIALIZED_MCQS;
  global.MATH_LIMITS_MCQS = MATH_LIMITS_MCQS;
  global.US_GEOGRAPHY_MCQS = US_GEOGRAPHY_MCQS;
  global.FIA_AD_LEGAL_MCQS = FIA_AD_LEGAL_MCQS;
  global.FIA_AD_INVESTIGATION_MCQS = FIA_AD_INVESTIGATION_MCQS;
})(window);
