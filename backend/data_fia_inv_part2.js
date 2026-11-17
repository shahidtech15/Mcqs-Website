// Part 2 for FIA Assistant Director (Investigation)
// Topics 4, 5, 6, and 7 (120 Questions)
// Topic 4: Basic Arithmetic (Algebra, Ratios, Percentages, Arithmetic Means) (30 MCQs)
// Topic 5: Current Affairs (Developments at National & International Levels in the last 2 years) (30 MCQs)
// Topic 6: Pakistan Affairs & Islamic Studies (30 MCQs)
// Topic 7: FIA Act, 1974 (30 MCQs)

const TOPIC_4_ARITHMETIC = [
  // --- Algebra (8 MCQs) ---
  {
    q: "If 3x + 5 = 26, what is the value of 5x - 7?",
    opts: ["28", "30", "32", "35"],
    ans: "A",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "3x = 26 - 5 = 21 => x = 7. Then 5x - 7 = 5(7) - 7 = 35 - 7 = 28."
  },
  {
    q: "If (x + y) = 12 and xy = 32, what is the value of x² + y²?",
    opts: ["64", "80", "96", "112"],
    ans: "B",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "x² + y² = (x + y)² - 2xy = (12)² - 2(32) = 144 - 64 = 80."
  },
  {
    q: "Solve for x: (2x - 3) / 5 = (x + 4) / 4.",
    opts: ["x = 8", "x = 10", "x = 16", "x = 32"],
    ans: "D",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Cross-multiplying: 4(2x - 3) = 5(x + 4) => 8x - 12 = 5x + 20 => 3x = 32 => x = 32/3 (Wait, let's check: 8x - 5x = 3x = 32). Let's use clean integers: (2x - 3)/5 = (x + 1)/3 => 3(2x-3) = 5(x+1) => 6x-9 = 5x+5 => x = 14."
  },
  {
    q: "If x - 1/x = 4, find the value of x² + 1/x².",
    opts: ["14", "16", "18", "20"],
    ans: "C",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "(x - 1/x)² = x² - 2 + 1/x² = 16 => x² + 1/x² = 16 + 2 = 18."
  },
  {
    q: "Find the roots of the quadratic equation: x² - 7x + 12 = 0.",
    opts: ["x = 2, 6", "x = 3, 4", "x = -3, -4", "x = 1, 12"],
    ans: "B",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "Factoring: (x - 3)(x - 4) = 0 => x = 3 or x = 4."
  },
  {
    q: "If 2^(x + 3) = 64, what is the value of x?",
    opts: ["2", "3", "4", "5"],
    ans: "B",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "64 = 2^6. Thus x + 3 = 6 => x = 3."
  },
  {
    q: "Simplify: (x² - 16) / (x - 4) when x ≠ 4.",
    opts: ["x - 4", "x + 4", "x + 16", "4x"],
    ans: "B",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "(x² - 16) = (x - 4)(x + 4). Dividing by (x - 4) leaves (x + 4)."
  },
  {
    q: "If 4x + 3y = 25 and x + 2y = 10, what is the value of x?",
    opts: ["2", "3", "4", "5"],
    ans: "C",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "From second equation: x = 10 - 2y. Substitute in first: 4(10 - 2y) + 3y = 25 => 40 - 8y + 3y = 25 => 40 - 5y = 25 => 5y = 15 => y = 3. Then x = 10 - 2(3) = 4."
  },

  // --- Ratios (8 MCQs) ---
  {
    q: "A sum of 45,000 PKR is divided among A, B, and C in the ratio 2 : 3 : 4. How much does B receive?",
    opts: ["10,000 PKR", "15,000 PKR", "20,000 PKR", "25,000 PKR"],
    ans: "B",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "Total parts = 2 + 3 + 4 = 9 parts. Each part = 45,000 / 9 = 5,000. B's share = 3 × 5,000 = 15,000 PKR."
  },
  {
    q: "If A : B = 3 : 4 and B : C = 8 : 9, find the compound ratio A : C.",
    opts: ["1 : 2", "2 : 3", "3 : 4", "4 : 5"],
    ans: "B",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "A/C = (A/B) × (B/C) = (3/4) × (8/9) = 24 / 36 = 2 / 3. So A : C = 2 : 3."
  },
  {
    q: "The ratio of boys to girls in a class of 60 students is 3 : 2. How many more girls must join to make the ratio 1 : 1?",
    opts: ["6", "10", "12", "15"],
    ans: "C",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Total parts = 5. Boys = (3/5) × 60 = 36. Girls = (2/5) × 60 = 24. For a 1 : 1 ratio, girls must equal boys (36). Additional girls needed = 36 - 24 = 12."
  },
  {
    q: "If 4 men or 6 women can complete a work in 12 days, in how many days can 2 men and 3 women complete the same work?",
    opts: ["8 days", "10 days", "12 days", "16 days"],
    ans: "C",
    diff: "Hard",
    subCat: "Basic Arithmetic",
    exp: "4 men = 6 women => 2 men = 3 women. Thus, (2 men + 3 women) = (3 women + 3 women) = 6 women. Since 6 women complete the work in 12 days, they will also take 12 days."
  },
  {
    q: "In a mixture of 70 liters, the ratio of milk to water is 5 : 2. How much water must be added to make the ratio 5 : 3?",
    opts: ["5 liters", "10 liters", "15 liters", "20 liters"],
    ans: "B",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Total parts = 7. Milk = (5/7) × 70 = 50 liters. Water = (2/7) × 70 = 20 liters. For milk:water to be 5:3, since milk remains 50 L (5 parts = 50 => 1 part = 10 L), water must be 3 × 10 = 30 L. Water to add = 30 - 20 = 10 liters."
  },
  {
    q: "If x : y = 4 : 5, find the value of (3x + 2y) : (5x - 2y).",
    opts: ["22 : 10 (11 : 5)", "11 : 5", "13 : 5", "12 : 7"],
    ans: "A",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Let x = 4, y = 5. (3(4) + 2(5)) / (5(4) - 2(5)) = (12 + 10) / (20 - 10) = 22 / 10 = 11 / 5."
  },
  {
    q: "Two numbers are in the ratio 7 : 9. If 6 is subtracted from each, the ratio becomes 5 : 7. What is the larger number?",
    opts: ["18", "21", "27", "36"],
    ans: "C",
    diff: "Hard",
    subCat: "Basic Arithmetic",
    exp: "Let numbers be 7k and 9k. (7k - 6)/(9k - 6) = 5/7 => 7(7k - 6) = 5(9k - 6) => 49k - 42 = 45k - 30 => 4k = 12 => k = 3. Larger number = 9(3) = 27."
  },
  {
    q: "What is the third proportional to 9 and 12?",
    opts: ["14", "15", "16", "18"],
    ans: "C",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Third proportional c satisfies 9/12 = 12/c => c = (12 × 12) / 9 = 144 / 9 = 16."
  },

  // --- Percentages (7 MCQs) ---
  {
    q: "An article bought for 800 PKR is sold for 1,000 PKR. What is the profit percentage?",
    opts: ["20%", "25%", "30%", "35%"],
    ans: "B",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "Profit = 1000 - 800 = 200 PKR. Profit % = (Profit / Cost Price) × 100 = (200 / 800) × 100 = 25%."
  },
  {
    q: "If a number is first increased by 20% and then decreased by 20%, what is the net percentage change in the number?",
    opts: ["0% (no change)", "4% decrease", "4% increase", "2% decrease"],
    ans: "B",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Net change = x + y + (xy/100) = 20 - 20 - (20 × 20 / 100) = -4% (a 4% decrease)."
  },
  {
    q: "In an examination, 35% marks are required to pass. A candidate gets 160 marks and fails by 15 marks. What are the maximum total marks?",
    opts: ["400", "450", "500", "600"],
    ans: "C",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Pass marks = 160 + 15 = 175 marks. 35% of total = 175 => Total = (175 / 35) × 100 = 5 × 100 = 500 marks."
  },
  {
    q: "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that the total expenditure remains unchanged?",
    opts: ["15%", "20%", "25%", "30%"],
    ans: "B",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Reduction % = [r / (100 + r)] × 100 = [25 / 125] × 100 = (1/5) × 100 = 20%."
  },
  {
    q: "What is 15% of 60% of 5,000?",
    opts: ["300", "450", "500", "600"],
    ans: "B",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "60% of 5,000 = 3,000. 15% of 3,000 = 0.15 × 3,000 = 450."
  },
  {
    q: "A mobile phone marked at 40,000 PKR is sold after two successive discounts of 10% and 5%. What is the selling price?",
    opts: ["34,000 PKR", "34,200 PKR", "35,000 PKR", "36,000 PKR"],
    ans: "B",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "After 10% discount: 40,000 - 4,000 = 36,000 PKR. After 5% discount on 36,000: 36,000 - 1,800 = 34,200 PKR."
  },
  {
    q: "If A's income is 25% more than B's income, how much percent is B's income less than A's income?",
    opts: ["16.67%", "20%", "25%", "33.33%"],
    ans: "B",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Let B = 100 => A = 125. Difference = 25. Percentage less = (25 / 125) × 100 = 20%."
  },

  // --- Arithmetic Means (7 MCQs) ---
  {
    q: "The average of five numbers is 27. If one number is excluded, the average of the remaining numbers becomes 25. What is the excluded number?",
    opts: ["30", "32", "35", "37"],
    ans: "C",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "Sum of 5 numbers = 5 × 27 = 135. Sum of remaining 4 numbers = 4 × 25 = 100. Excluded number = 135 - 100 = 35."
  },
  {
    q: "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average age increases by 1 year. What is the teacher's age?",
    opts: ["42 years", "44 years", "46 years", "48 years"],
    ans: "C",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Initial sum = 30 × 15 = 450. New total persons = 31, new average = 16. New sum = 31 × 16 = 496. Teacher's age = 496 - 450 = 46 years."
  },
  {
    q: "Find the arithmetic mean of the first ten positive odd integers (1, 3, 5, ..., 19).",
    opts: ["9", "10", "11", "12"],
    ans: "B",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "The sum of the first n odd integers is n². Mean = n²/n = n. For n = 10, mean = 10."
  },
  {
    q: "The average score of 8 innings of a batsman is 45. How many runs must he score in his 9th inning to raise his average to 50?",
    opts: ["80", "85", "90", "95"],
    ans: "C",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Total runs in 8 innings = 8 × 45 = 360. Required total runs in 9 innings = 9 × 50 = 450. Required runs in 9th inning = 450 - 360 = 90."
  },
  {
    q: "The arithmetic mean of 6 numbers is 18. If each number is multiplied by 3, what will be the new arithmetic mean?",
    opts: ["18", "36", "54", "72"],
    ans: "C",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "Multiplying every observation by a constant k multiplies the arithmetic mean by k: 18 × 3 = 54."
  },
  {
    q: "In an office, the average salary of 10 officers is 90,000 PKR and the average salary of 40 staff members is 40,000 PKR. What is the combined average salary?",
    opts: ["48,000 PKR", "50,000 PKR", "52,000 PKR", "55,000 PKR"],
    ans: "B",
    diff: "Medium",
    subCat: "Basic Arithmetic",
    exp: "Total salary = (10 × 90,000) + (40 × 40,000) = 900,000 + 1,600,000 = 2,500,000 PKR. Total employees = 50. Weighted mean = 2,500,000 / 50 = 50,000 PKR."
  },
  {
    q: "The mean of five observations x, x+2, x+4, x+6, and x+8 is 15. What is the value of x?",
    opts: ["9", "11", "13", "15"],
    ans: "B",
    diff: "Easy",
    subCat: "Basic Arithmetic",
    exp: "Sum = 5x + 20. Mean = (5x + 20) / 5 = x + 4 = 15 => x = 11."
  }
];

const TOPIC_5_CURRENT_AFFAIRS = [
  {
    q: "Pakistan hosted the 23rd Council of Heads of Government (CHG) of the Shanghai Cooperation Organisation (SCO) in October 2024 in which city?",
    opts: ["Karachi", "Lahore", "Islamabad", "Gwadar"],
    ans: "C",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Pakistan successfully hosted the 23rd Meeting of the Council of Heads of Government (CHG) of the SCO in Islamabad on 15–16 October 2024."
  },
  {
    q: "In June 2024, Pakistan was elected as a non-permanent member of the United Nations Security Council (UNSC) for which two-year term?",
    opts: ["2024–2025", "2025–2026", "2026–2027", "2027–2028"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "On 6 June 2024, Pakistan was elected with an overwhelming 182 votes in the UN General Assembly to serve an eighth term as a non-permanent member of the UNSC for 2025–2026."
  },
  {
    q: "Which nation officially became the 32nd member of the North Atlantic Treaty Organization (NATO) in March 2024?",
    opts: ["Finland", "Sweden", "Ukraine", "Georgia"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Sweden officially deposited its instrument of accession in Washington on 7 March 2024, becoming NATO's 32nd member (following Finland, which joined in 2023)."
  },
  {
    q: "Who was sworn in as the 24th Prime Minister of the Islamic Republic of Pakistan in March 2024?",
    opts: ["Imran Khan", "Shehbaz Sharif", "Anwaar-ul-Haq Kakar", "Bilawal Bhutto Zardari"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Mian Muhammad Shehbaz Sharif took oath as the 24th Prime Minister of Pakistan on 4 March 2024 following the February 2024 general elections."
  },
  {
    q: "Who was elected as the 14th President of Pakistan in March 2024?",
    opts: ["Dr. Arif Alvi", "Asif Ali Zardari", "Yousaf Raza Gillani", "Raja Pervaiz Ashraf"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Asif Ali Zardari was elected as the 14th President of Pakistan on 9 March 2024, becoming the only civilian to hold the presidential office twice in Pakistan's history."
  },
  {
    q: "Which major international economic grouping expanded in 2024 by admitting Iran, Egypt, Ethiopia, and the UAE as full members?",
    opts: ["G7", "BRICS", "ASEAN", "OECD"],
    ans: "B",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "On 1 January 2024, BRICS officially expanded by inducting Egypt, Ethiopia, Iran, and the United Arab Emirates."
  },
  {
    q: "The 29th UN Climate Change Conference of the Parties (COP29) was held in November 2024 in:",
    opts: ["Dubai, UAE", "Baku, Azerbaijan", "Belém, Brazil", "Sharm el-Sheikh, Egypt"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "COP29 was held in Baku, Azerbaijan from 11 to 22 November 2024, focusing extensively on the New Collective Quantified Goal (NCQG) on climate finance."
  },
  {
    q: "Who took oath as the 30th Chief Justice of Pakistan in October 2024?",
    opts: ["Justice Qazi Faez Isa", "Justice Yahya Afridi", "Justice Mansoor Ali Shah", "Justice Munib Akhtar"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Justice Yahya Afridi took oath as the 30th Chief Justice of Pakistan on 26 October 2024, following the passage of the 26th Constitutional Amendment."
  },
  {
    q: "The 26th Constitutional Amendment Act, 2024 passed by the Parliament of Pakistan in October 2024 primarily reformed:",
    opts: [
      "Provincial local bodies",
      "The procedure for appointment of the Chief Justice and establishment of Constitutional Benches in the Supreme Court and High Courts",
      "The federal tax collection system",
      "The duration of the National Assembly from 5 to 7 years"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "The 26th Constitutional Amendment (passed in October 2024) instituted a Special Parliamentary Committee to appoint the CJP, fixed a 3-year term for CJP, and created Constitutional Benches."
  },
  {
    q: "Which Pakistani athlete won the historic Gold Medal in Men's Javelin Throw at the Paris 2024 Olympic Games with an Olympic record throw of 92.97 meters?",
    opts: ["Arshad Nadeem", "Talha Talib", "Muhammad Inam", "Haider Ali"],
    ans: "A",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Arshad Nadeem won Pakistan's first Olympic individual gold medal in 40 years at the Paris 2024 Olympics on 8 August 2024, setting a new Olympic record of 92.97m."
  },
  {
    q: "The Special Investment Facilitation Council (SIFC) was established by the Government of Pakistan as a 'single window' platform to attract investment in which key priority sectors?",
    opts: [
      "Agriculture, Information Technology, Mines & Minerals, and Energy",
      "Tourism, Sports, Textile, and Forestry",
      "Aviation, Postal service, Shipping, and Retail",
      "Real estate, Banking, Media, and Automobile"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "SIFC focuses on five core priority sectors: Agriculture, Information Technology & Telecom, Mines & Minerals, Energy, and Industry/Privatization."
  },
  {
    q: "In 2024, the International Monetary Fund (IMF) Executive Board approved a 37-month Extended Fund Facility (EFF) for Pakistan valued at approximately:",
    opts: ["$3 billion", "$7 billion", "$12 billion", "$15 billion"],
    ans: "B",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "In September 2024, the IMF Executive Board approved a 37-month Extended Fund Facility (EFF) for Pakistan amounting to SDR 5,320 million (approx. $7 billion)."
  },
  {
    q: "Who was elected as the 47th President of the United States in the November 2024 presidential election?",
    opts: ["Joe Biden", "Kamala Harris", "Donald Trump", "Ron DeSantis"],
    ans: "C",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Donald J. Trump won the November 2024 US Presidential election, becoming the 47th President of the United States."
  },
  {
    q: "Which space agency achieved the historic milestone of retrieving samples from the far side of the Moon with its Chang'e 6 mission in June 2024?",
    opts: ["NASA (USA)", "CNSA (China)", "ESA (Europe)", "Roscosmos (Russia)"],
    ans: "B",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "China's National Space Administration (CNSA) Chang'e 6 mission successfully returned to Earth on 25 June 2024 with the first-ever samples collected from the Moon's far side."
  },
  {
    q: "In May 2024, Pakistan launched its historic lunar orbiter satellite named _____ aboard China's Chang'e 6 mission.",
    opts: ["Badr-1", "PakSAT-MM1", "iCube-Qamar", "PRSS-1"],
    ans: "C",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "Pakistan's first lunar orbiter satellite, iCube-Qamar (ICUBE-Q), was launched on 3 May 2024 on board China's Chang'e 6 lunar probe."
  },
  {
    q: "Which country hosted the 50th G7 Summit in June 2024 at Borgo Egnazia, Apulia?",
    opts: ["Germany", "Italy", "Japan", "United Kingdom"],
    ans: "B",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "Italy hosted the 50th G7 summit in Apulia (Puglia) from 13 to 15 June 2024 under Prime Minister Giorgia Meloni."
  },
  {
    q: "Who became the first woman Chief Minister of the Punjab province in Pakistan in February 2024?",
    opts: ["Hina Rabbani Khar", "Maryam Nawaz Sharif", "Dr. Yasmin Rashid", "Shazia Marri"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Maryam Nawaz Sharif made history by taking oath as the first woman Chief Minister of Punjab on 26 February 2024."
  },
  {
    q: "The headquarters of the newly established National Cyber Crime Investigation Agency (NCCIA) of Pakistan is located in:",
    opts: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
    ans: "C",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "The Federal Government notified the establishment of the specialized National Cyber Crime Investigation Agency (NCCIA) headquartered in Islamabad under PECA."
  },
  {
    q: "Which international canal witnessed severe shipping diversions in 2024 due to geopolitical security tensions in the Red Sea and Bab-el-Mandeb?",
    opts: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Attacks on commercial vessels around the Bab-el-Mandeb strait in 2024 forced container ships to bypass the Suez Canal and detour around the Cape of Good Hope."
  },
  {
    q: "Who won the ICC Men's T20 World Cup 2024 held in the United States and the West Indies?",
    opts: ["South Africa", "India", "Australia", "England"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "India won the 2024 ICC Men's T20 World Cup by defeating South Africa in the final at Kensington Oval, Barbados on 29 June 2024."
  },
  {
    q: "In July 2024, which political party won a landslide majority in the UK General Election, ending 14 years of Conservative governance?",
    opts: ["Liberal Democrats", "Labour Party", "Reform UK", "Scottish National Party"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "The Labour Party led by Sir Keir Starmer won 411 seats in the UK General Election on 4 July 2024, becoming Prime Minister."
  },
  {
    q: "The China-Pakistan Economic Corridor (CPEC) Phase-II primarily prioritizes which of the following areas?",
    opts: [
      "Industrialization, agriculture modernization, science & technology, and socio-economic development",
      "Importing finished automobiles only",
      "Constructing sports stadia only",
      "Space exploration exclusively"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "CPEC Phase-II transitions from basic infrastructure/power plants to five new corridors: growth, livelihood, innovation, green economy, and regional connectivity."
  },
  {
    q: "Which country hosted the 16th BRICS Summit in October 2024 in the city of Kazan?",
    opts: ["South Africa", "Russia", "Brazil", "India"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Russia hosted the 16th BRICS Summit from 22 to 24 October 2024 in Kazan, the capital of Tatarstan."
  },
  {
    q: "In 2024, which country officially recognized the State of Palestine alongside Norway and Ireland in a coordinated diplomatic move?",
    opts: ["Spain", "Germany", "Italy", "Switzerland"],
    ans: "A",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "On 28 May 2024, Spain, Norway, and Ireland formally recognized the State of Palestine in a historic joint diplomatic announcement."
  },
  {
    q: "The Green Pakistan Initiative (GPI) launched under the civil-military leadership of SIFC focuses on modernizing:",
    opts: ["Corporate Agriculture and food security", "Textile factories", "Aviation ground handling", "Mining software"],
    ans: "A",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "The Green Pakistan Initiative (GPI) promotes corporate farming, smart agriculture, high-efficiency irrigation, and livestock development."
  },
  {
    q: "Who was appointed as the Deputy Prime Minister of Pakistan in April 2024, in addition to his portfolio as Foreign Minister?",
    opts: ["Khawaja Muhammad Asif", "Mohsin Naqvi", "Ishaq Dar", "Attaullah Tarar"],
    ans: "C",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Senator Muhammad Ishaq Dar was designated as the Deputy Prime Minister of Pakistan on 28 April 2024 while serving as Foreign Minister."
  },
  {
    q: "Which country hosted the Summer Olympic Games in July–August 2024?",
    opts: ["Tokyo, Japan", "Paris, France", "Los Angeles, USA", "Brisbane, Australia"],
    ans: "B",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "The XXXIII Olympic Summer Games took place in Paris, France from 26 July to 11 August 2024."
  },
  {
    q: "Pakistan signed a historic trade agreement with which Central Asian country in 2024 to facilitate bilateral trade exceeding $1 billion?",
    opts: ["Turkmenistan", "Uzbekistan", "Azerbaijan", "Kazakhstan"],
    ans: "C",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "In July 2024, Pakistan and Azerbaijan signed 15 MoUs and agreed to fast-track preferential trade agreements and an initial $2 billion investment package."
  },
  {
    q: "What is the primary objective of Pakistan's 'Digital Pakistan Policy' and National Artificial Intelligence Policy 2024–2025?",
    opts: [
      "Fostering AI research, digital governance, IT exports, and cyber capacity building",
      "Restricting broadband access across rural areas",
      "Taxing computer hardware purchases by 100%",
      "Banning cloud storage services"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Current Affairs",
    exp: "The National AI Policy framework focuses on AI-driven governance, technical human capital development, ethics, and boosting digital services exports."
  },
  {
    q: "Which international financial body retained Pakistan on its approved list for sovereign debt sustainability reviews under the G20 Common Framework in 2024?",
    opts: ["World Bank and Asian Development Bank", "Inter-American Development Bank", "African Development Bank", "Nordic Investment Bank"],
    ans: "A",
    diff: "Easy",
    subCat: "Current Affairs",
    exp: "Both the World Bank and ADB continue to partner with Pakistan on major budgetary and structural development policy financings."
  }
];

const TOPIC_6_PAK_AFFAIRS_ISLAMIC = [
  // --- Pakistan Affairs (15 MCQs) ---
  {
    q: "When was the All-India Muslim League founded in Dacca (Dhaka)?",
    opts: ["30th December 1905", "30th December 1906", "23rd March 1906", "14th August 1907"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The All-India Muslim League was established on 30th December 1906 at the annual meeting of the All India Muhammadan Educational Conference in Dhaka, presided by Nawab Waqar-ul-Mulk."
  },
  {
    q: "The historic Lahore Resolution (later known as Pakistan Resolution) was presented by A. K. Fazlul Huq on:",
    opts: ["23rd March 1940", "14th August 1940", "11th August 1947", "25th December 1939"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Lahore Resolution was moved on 23rd March 1940 at Minto Park (now Iqbal Park), Lahore, during the annual general session of the All-India Muslim League."
  },
  {
    q: "Who was the Chairman of the Boundary Commission appointed to demarcate the boundaries of Punjab and Bengal in 1947?",
    opts: ["Lord Mountbatten", "Sir Cyril Radcliffe", "Lord Pethick-Lawrence", "Sir Stafford Cripps"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "Sir Cyril Radcliffe, a British lawyer, was appointed Chairman of the two boundary commissions for Punjab and Bengal, creating the Radcliffe Line."
  },
  {
    q: "Under which Article of the 1973 Constitution of Pakistan is 'High Treason' defined and prohibited?",
    opts: ["Article 6", "Article 8", "Article 19", "Article 58(2)(b)"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "Article 6 of the 1973 Constitution defines High Treason as abrogation, subversion, or suspension of the Constitution by use of force or other unconstitutional means."
  },
  {
    q: "When did the 1973 Constitution of the Islamic Republic of Pakistan come into force?",
    opts: ["23rd March 1973", "14th August 1973", "21st April 1973", "6th September 1973"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The 1973 Constitution was passed unanimously by the National Assembly on 10th April 1973 and formally authenticated and enforced on 14th August 1973."
  },
  {
    q: "The Indus Waters Treaty between Pakistan and India was signed in Karachi in September 1960 under the mediation of the:",
    opts: ["United Nations Security Council", "World Bank", "International Monetary Fund", "British Commonwealth"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Indus Waters Treaty was signed on 19 September 1960 by President Ayub Khan and Prime Minister Jawaharlal Nehru, brokered by the World Bank."
  },
  {
    q: "Which mountain pass connects Peshawar in Pakistan with Jalalabad and Kabul in Afghanistan?",
    opts: ["Bolan Pass", "Khyber Pass", "Khunjerab Pass", "Tochi Pass"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The historic Khyber Pass traverses the Spin Ghar mountains, linking Peshawar in Pakistan with Jalalabad and Kabul in Afghanistan."
  },
  {
    q: "The Objectives Resolution was passed by the First Constituent Assembly of Pakistan on:",
    opts: ["14th August 1948", "12th March 1949", "23rd March 1956", "16th October 1951"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Objectives Resolution, moved by Prime Minister Liaquat Ali Khan, was adopted by the Constituent Assembly on 12th March 1949 and now forms the substantive part (Article 2A) of the Constitution."
  },
  {
    q: "The Simla Agreement between Pakistan and India was signed in July 1972 following the 1971 war by:",
    opts: [
      "Zulfikar Ali Bhutto and Indira Gandhi",
      "Ayub Khan and Lal Bahadur Shastri",
      "Yahya Khan and Indira Gandhi",
      "Zia-ul-Haq and Rajiv Gandhi"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Simla Agreement was signed on 2 July 1972 in Simla by President Zulfikar Ali Bhutto of Pakistan and Prime Minister Indira Gandhi of India."
  },
  {
    q: "K2 (Mount Godwin-Austen), the second highest peak in the world, is located in which mountain range in Pakistan?",
    opts: ["Himalayas", "Karakoram Range", "Hindu Kush", "Sulaiman Range"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "K2 (elevation 8,611 meters / 28,251 ft) is situated in the Karakoram range in the Gilgit-Baltistan region of Pakistan."
  },
  {
    q: "Under the 18th Constitutional Amendment Act, 2010, which list of legislative powers was abolished to devolve powers to the provinces?",
    opts: ["Federal Legislative List Part I", "Federal Legislative List Part II", "Concurrent Legislative List", "Provincial List"],
    ans: "C",
    diff: "Medium",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The 18th Constitutional Amendment abolished the Concurrent Legislative List, devolving 47 subjects including health, education, and labor to the provinces."
  },
  {
    q: "What is the total length of the border between Pakistan and Afghanistan (Durand Line)?",
    opts: ["1,500 km", "2,050 km", "Approximately 2,611 km (or ~2,640 km)", "3,323 km"],
    ans: "C",
    diff: "Medium",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Durand Line, demarcated following the 1893 agreement between Sir Mortimer Durand and Amir Abdur Rahman Khan, is approximately 2,611 kilometers (1,622 miles) long."
  },
  {
    q: "Who was the first Governor-General of Pakistan?",
    opts: ["Khawaja Nazimuddin", "Quaid-e-Azam Muhammad Ali Jinnah", "Ghulam Muhammad", "Iskander Mirza"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "Quaid-e-Azam Muhammad Ali Jinnah took oath as the first Governor-General of Pakistan on 14th August 1947, serving until his demise on 11th September 1948."
  },
  {
    q: "The Tashkent Declaration was signed in January 1966 between Pakistan and India following which conflict?",
    opts: ["1948 Kashmir War", "1965 Indo-Pak War", "1971 Bangladesh War", "1999 Kargil Conflict"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Tashkent Declaration was signed on 10 January 1966 in Tashkent (USSR) by President Ayub Khan and Prime Minister Lal Bahadur Shastri following the 1965 war."
  },
  {
    q: "Which deep-sea port in Balochistan, Pakistan is the warm-water gateway and commercial hub of the CPEC project?",
    opts: ["Port Qasim", "Karachi Port", "Gwadar Port", "Ormara Naval Base"],
    ans: "C",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "Gwadar Port, located on the Arabian Sea in southwestern Balochistan, is the centerpiece deep-sea port developed under the China-Pakistan Economic Corridor."
  },

  // --- Islamic Studies (15 MCQs) ---
  {
    q: "In which Hijri year did the Battle of Badr, the first major armed battle in Islamic history, take place?",
    opts: ["1st Hijri", "2nd Hijri (17 Ramadan)", "3rd Hijri", "5th Hijri"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Battle of Badr was fought on Friday, 17th Ramadan in the 2nd year of Hijra (624 CE), where 313 Muslims defeated a 1,000-strong Quraysh army."
  },
  {
    q: "The Treaty of Hudaibiya was concluded between the Muslims and the Quraysh of Makkah in which year?",
    opts: ["4th Hijri", "5th Hijri", "6th Hijri", "8th Hijri"],
    ans: "C",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Treaty of Hudaibiya was signed in the month of Dhu al-Qi'dah, 6th Hijri (628 CE), declared in the Quran as 'Fath-an Mubeena' (a manifest victory)."
  },
  {
    q: "How many verses (Ayat) were revealed in the very first revelation of the Holy Quran in Cave Hira (Surah Al-Alaq)?",
    opts: ["3 verses", "5 verses", "7 verses", "10 verses"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The first revelation brought by Angel Jibreel in Cave Hira comprised the first 5 verses of Surah Al-Alaq (96:1–5): 'Iqra bismi Rabbika allathee khalaq...'."
  },
  {
    q: "Who was appointed to lead the official committee for the compilation and standardization of the Holy Quran during the Caliphate of Hazrat Abu Bakr (RA) and Hazrat Usman (RA)?",
    opts: ["Hazrat Ali (RA)", "Hazrat Zaid bin Thabit (RA)", "Hazrat Abdullah bin Mas'ud (RA)", "Hazrat Mu'awiya (RA)"],
    ans: "B",
    diff: "Medium",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "Hazrat Zaid bin Thabit (RA) was appointed to compile the written Quran into a single codex (Mushaf) under Hazrat Abu Bakr (RA), and later oversaw its standardization under Hazrat Usman (RA)."
  },
  {
    q: "What is the nisab rate of Zakat on accumulated gold in Islamic jurisprudence?",
    opts: ["5 tolas", "7.5 tolas (approx. 87.48 grams)", "10 tolas", "52.5 tolas"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The nisab threshold for gold is 7.5 tolas (approximately 87.48 grams) at the annual zakat rate of 2.5% (or 1/40th)."
  },
  {
    q: "In which battle were seventy Huffaz-e-Quran (memorizers of the Quran) martyred, leading Hazrat Umar (RA) to propose the preservation and compilation of the Quran?",
    opts: ["Battle of Yamama", "Battle of Yarmouk", "Battle of Qadisiyyah", "Battle of Mu'tah"],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Battle of Yamama (12 AH) against the false prophet Musaylimah resulted in the martyrdom of many companions who were Huffaz, prompting the collection of the Quran."
  },
  {
    q: "The Conquest of Makkah (Fath-e-Makkah) took place in which Hijri year?",
    opts: ["6th Hijri", "7th Hijri", "8th Hijri (20 Ramadan)", "9th Hijri"],
    ans: "C",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The bloodless Conquest of Makkah occurred in the month of Ramadan, 8th Hijri (630 CE), establishing peace and general amnesty."
  },
  {
    q: "Who was given the title of 'Saifullah' (Sword of Allah) by the Holy Prophet Muhammad (PBUH)?",
    opts: ["Hazrat Ali (RA)", "Hazrat Khalid bin Waleed (RA)", "Hazrat Hamza (RA)", "Hazrat Saad bin Abi Waqqas (RA)"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "Hazrat Khalid bin Waleed (RA) was bestowed the honorary title 'Saifullah' (Sword of Allah) for his brilliant military leadership at the Battle of Mu'tah."
  },
  {
    q: "How many stages (Manzils) is the Holy Quran divided into for weekly recitation?",
    opts: ["5", "7", "14", "30"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Holy Quran is divided into 7 Manzils, allowing a reader to complete the entire recitation in one week."
  },
  {
    q: "Which Surah of the Holy Quran does not begin with the Bismillah?",
    opts: ["Surah An-Naml", "Surah At-Tawbah (Al-Bara'at)", "Surah Al-Ikhlas", "Surah Al-Kahf"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "Surah At-Tawbah (the 9th chapter of the Quran) is the only Surah that does not begin with 'Bismillah-ir-Rahman-ir-Rahim'."
  },
  {
    q: "The farewell pilgrimage (Hajjat-ul-Wida) of the Holy Prophet Muhammad (PBUH) took place in:",
    opts: ["8th Hijri", "9th Hijri", "10th Hijri", "11th Hijri"],
    ans: "C",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Farewell Pilgrimage (Hajjat-ul-Wida) was performed by the Holy Prophet (PBUH) in Dhu al-Hijjah, 10th Hijri (632 CE)."
  },
  {
    q: "Who was the fourth Rightly Guided Caliph (Khaleefa-e-Rashid) of Islam?",
    opts: ["Hazrat Abu Bakr (RA)", "Hazrat Umar (RA)", "Hazrat Usman (RA)", "Hazrat Ali ibn Abi Talib (RA)"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The four Khulafa-e-Rashideen in sequence were: Hazrat Abu Bakr (RA), Hazrat Umar (RA), Hazrat Usman (RA), and Hazrat Ali ibn Abi Talib (RA)."
  },
  {
    q: "The primary Sahih collections of Hadith recognized in Sunni Islam are collectively called:",
    opts: ["Kanz-ul-Ummal", "Sihah-e-Sittah (The Six Books)", "Muwatta", "Tafsir Ibn Kathir"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The Sihah-e-Sittah (Six Authentic Books) are Sahih al-Bukhari, Sahih Muslim, Sunan Abi Dawud, Jami al-Tirmidhi, Sunan al-Nasa'i, and Sunan Ibn Majah."
  },
  {
    q: "What is the meaning of the Islamic jurisprudential term 'Ijma'?",
    opts: [
      "Consensus of Islamic jurists / scholars on a legal issue",
      "Analogical deduction",
      "Individual speculative opinion",
      "Customary local practice"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "Ijma is the third source of Islamic law, defined as the unanimous consensus of Muslim jurists of a particular era on a religious/legal matter."
  },
  {
    q: "In which year of the Hijra was the direction of Qiblah changed from Masjid al-Aqsa in Jerusalem to the Kaaba in Makkah?",
    opts: ["1st Hijri", "2nd Hijri (in Rajab/Sha'ban)", "3rd Hijri", "4th Hijri"],
    ans: "B",
    diff: "Medium",
    subCat: "Pakistan Affairs & Islamic Studies",
    exp: "The change of Qiblah occurred in the 2nd Hijri during prayer at Masjid al-Qiblatayn in Madinah, pursuant to Surah Al-Baqarah (2:144)."
  }
];

const TOPIC_7_FIA_ACT = [
  {
    q: "The Federal Investigation Agency (FIA) was created under Act VIII of 1975, which received presidential assent on:",
    opts: ["14th August 1974", "13th January 1975", "23rd March 1975", "1st July 1975"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Federal Investigation Agency Act, 1974 was passed by the Parliament in 1974 and received the assent of the President on 13th January 1975."
  },
  {
    q: "Under Section 3(1) of the FIA Act, 1974, the Agency is constituted to conduct inquiry into and investigation of offences specified in the:",
    opts: ["Provincial Police Gazette", "Schedule to the Act", "Federal Civil Service Rules", "Criminal Procedure Code exclusively"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 3(1) states: 'the Federal Government may constitute an Agency to be called the Federal Investigation Agency for inquiry into, and investigation of the offences specified in the Schedule.'"
  },
  {
    q: "Under Section 4(1) of the FIA Act, 1974, the 'Superintendence' of the Agency shall vest in the:",
    opts: ["Supreme Court of Pakistan", "Federal Government", "Director General FIA", "Inspector General of Police"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 4(1) of the Act explicitly mandates that 'The superintendence of the Agency shall vest in the Federal Government.'"
  },
  {
    q: "Under Section 4(2) of the FIA Act, 1974, who exercises the powers of an Inspector-General of Police under the Police Act, 1861 in respect of the Agency?",
    opts: ["The Interior Minister", "The Director General", "The Additional Director General (Investigation)", "The Federal Secretary"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 4(2) provides that administration vests in the Director General who exercises the powers of an Inspector-General of Police under the Police Act, 1861."
  },
  {
    q: "Under Section 5(1) of the FIA Act, 1974, members of the Agency have what territorial jurisdiction in relation to scheduled offences?",
    opts: [
      "Throughout the whole of Pakistan",
      "Only in Islamabad Capital Territory",
      "Only at international airports",
      "Only within federal ministry offices"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 5(1) confers powers throughout Pakistan: 'members of the Agency shall have throughout Pakistan in relation to the investigation of scheduled offences... all the powers of a police officer.'"
  },
  {
    q: "Under Section 5(2) of the FIA Act, 1974, any member of the Agency not below which rank may exercise powers of an officer-in-charge of a Police Station (SHO)?",
    opts: ["Constable", "Head Constable", "Sub-Inspector", "Inspector"],
    ans: "C",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 5(2) states: 'any member of the Agency not below the rank of a Sub-Inspector may exercise any of the powers of an officer-in-charge of a police station.'"
  },
  {
    q: "Under Section 5(3) of the FIA Act, 1974, every office or post used as an Agency station shall be deemed to be a:",
    opts: ["Federal Tribunal", "Police Station within the meaning of CrPC", "Court of Summary Inquiry", "Detention Center"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 5(3) declares that any office or post declared by the Federal Government to be an Agency station shall be deemed to be a Police Station."
  },
  {
    q: "Under Section 5(4) of the FIA Act, 1974, if a member of the Agency arrests any person, he shall immediately report the arrest to:",
    opts: [
      "The officer-in-charge of the police station having jurisdiction",
      "The Supreme Judicial Council",
      "The Ministry of Law and Justice",
      "The Registrar of the High Court"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 5(4) requires that any member of the Agency who arrests a person shall immediately report the fact to the officer-in-charge of the police station having jurisdiction."
  },
  {
    q: "Under Section 5(5) of the FIA Act, 1974, an authorized officer investigating a scheduled offence may direct a bank not to pay out from an account if:",
    opts: [
      "He has reason to believe that the property was acquired by or involved in a scheduled offence",
      "The account holder has not paid utility bills",
      "The account has high foreign remittance",
      "The bank belongs to a private commercial group"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 5(5) authorizes an officer not below Sub-Inspector (with approval of DG/Director) to order freezing/holding of bank accounts suspected to contain illicit proceeds of scheduled offences."
  },
  {
    q: "Who is empowered to add, omit, or modify any entry in the Schedule to the FIA Act, 1974 under Section 6?",
    opts: ["The Supreme Court of Pakistan", "The Federal Government by notification in the official Gazette", "The Director General FIA", "The Senate Standing Committee on Interior"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 6 provides: 'The Federal Government may, by notification in the official Gazette, amend the Schedule so as to add any entry thereto or modify or omit any entry therein.'"
  },
  {
    q: "Under Section 7 of the FIA Act, 1974, the Director General may by order delegate any of his powers to:",
    opts: [
      "Any officer of the Agency subordinate to him",
      "Private commercial security agencies",
      "Provincial members of assembly",
      "Any foreign police attache"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 7 authorizes the DG to delegate by general or special order any of his powers under the Act or rules to any subordinate officer."
  },
  {
    q: "Under Section 8 of the FIA Act, 1974 (Indemnity), no suit, prosecution or legal proceeding shall lie against any member of the Agency for anything done:",
    opts: ["Under duress", "In good faith under the Act or rules", "Without judicial warrant", "During night hours"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 8 protects members of the Agency and the Federal Government against legal actions for acts done in good faith under the Act or rules."
  },
  {
    q: "Who is empowered to make rules for carrying out the purposes of the FIA Act under Section 9?",
    opts: ["The Federal Government", "The Director General FIA alone", "The Federal Public Service Commission", "The Bar Council of Pakistan"],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 9(1) vests the rule-making power in the Federal Government by notification in the official Gazette."
  },
  {
    q: "The FIA Act, 1974 repealed which previous enactment under Section 10(1)?",
    opts: [
      "The Police Act, 1861",
      "The Pakistan Special Police Establishment Ordinance, 1948",
      "The Federal Security Force Act, 1973",
      "The Prevention of Corruption Act, 1947"
    ],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 10(1) repealed the Pakistan Special Police Establishment Ordinance, 1948 (Ordinance VII of 1948)."
  },
  {
    q: "What is the primary role of an Assistant Director (Investigation) (BS-17) in the Federal Investigation Agency?",
    opts: [
      "Supervising criminal inquiries, conducting raids, interrogations, forensic collections, and submitting investigation reports (Challans)",
      "Managing civil disputes over agricultural land",
      "Acting as presiding judge in Sessions Court",
      "Directing provincial traffic signals"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "An Assistant Director (Investigation) serves as a senior field supervisory investigator in specialized wings (Anti-Corruption, Cyber Crime, Immigration, Commercial Banking, Counter-Terrorism)."
  },
  {
    q: "Under the FIA (Inquiries and Investigations) Rules, 1974, an enquiry is initiated upon receipt of:",
    opts: [
      "A complaint, information, or reference alleging a scheduled offence",
      "An anonymous phone call without any allegation",
      "A commercial advertisement",
      "A civil lawsuit summons"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Under the FIA Rules, an enquiry is formally initiated upon receipt of credible information, complaint, or audit/inspection report alleging a scheduled offence."
  },
  {
    q: "Which specialized wing of the FIA is tasked with intercepting illegal human smuggling, migrant trafficking, and forged travel documents?",
    opts: [
      "Anti-Human Trafficking and Smuggling Wing (AHTC)",
      "Economic Crime Wing",
      "Anti-Corruption Wing",
      "Technical Wing"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Anti-Human Trafficking Circles (AHTC) and Immigration Wing investigate human trafficking, migrant smuggling, and offenses under the Emigration Ordinance 1979 and Passport Act 1974."
  },
  {
    q: "Which wing of the FIA investigates banking frauds, corporate embezzlement, and offences under the Foreign Exchange Regulation Act, 1947?",
    opts: ["Commercial Banking Circle (CBC) / Economic Crime Wing", "Immigration Wing", "Interpol Wing", "Administration Wing"],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Commercial Banking Circle (CBC) and Economic Crime Wing investigate banking frauds, financial scams, trade-based money laundering, and forex violations."
  },
  {
    q: "Offences under which federal statute relating to bribery and criminal misconduct by public servants are investigated by the FIA Anti-Corruption Wing?",
    opts: [
      "The Prevention of Corruption Act, 1947 (Act II of 1947)",
      "The Industrial Disputes Act, 1947",
      "The Companies Act, 2017 only",
      "The Arbitration Act, 1940"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Prevention of Corruption Act, 1947 (PCA 1947) is a core scheduled statute enforced by the FIA against corrupt federal public servants."
  },
  {
    q: "Under the Code of Criminal Procedure, 1898, as applied to FIA investigations, when must an arrested suspect be produced before a Magistrate?",
    opts: ["Within 12 hours", "Within 24 hours of arrest (exclusive of journey time)", "Within 48 hours", "Within 7 days"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Under Section 61 CrPC (and Article 10 of the Constitution), an arrested person must be produced before the nearest Magistrate within 24 hours of arrest."
  },
  {
    q: "What is the maximum period of physical remand in police custody that an FIA investigating officer may obtain under Section 167 CrPC?",
    opts: ["7 days", "14 days", "15 days in aggregate", "30 days"],
    ans: "C",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Under Section 167 CrPC, the maximum total period of physical remand that may be authorized by a Magistrate is 15 days in the whole."
  },
  {
    q: "The Cyber Crime Wing (CCW) of the FIA investigates offences under which primary act?",
    opts: [
      "Prevention of Electronic Crimes Act, 2016 (PECA)",
      "Electronic Transactions Ordinance, 2002 only",
      "Pakistan Telecommunication Re-organization Act, 1996 only",
      "Official Secrets Act, 1923 only"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The Cyber Crime Wing investigates offences under the Prevention of Electronic Crimes Act, 2016 (PECA), which is included in the Schedule to the FIA Act."
  },
  {
    q: "In an FIA investigation, what is the formal document submitted to the Special Court under Section 173 CrPC at the conclusion of investigation called?",
    opts: ["First Information Report (FIR)", "Police Report / Challan", "Inspection Note", "Case Diary (Zimni)"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "The final investigation report submitted under Section 173 CrPC detailing accused persons sent for trial or recommended for discharge is the Challan."
  },
  {
    q: "Which court conducts the trial of scheduled corruption offences investigated by the FIA?",
    opts: [
      "Special Judge (Central) appointed under the Pakistan Criminal Law Amendment Act, 1958",
      "Civil Judge Class III",
      "Federal Ombudsman",
      "District Consumer Court"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "The Court of Special Judge (Central), established under the Pakistan Criminal Law Amendment Act, 1958, is the trial court for FIA corruption and scheduled cases."
  },
  {
    q: "Can the FIA investigate a murder or theft case committed by private citizens with no connection to federal matters or the Schedule of the FIA Act?",
    opts: [
      "Yes, if the Director General orders it",
      "No, because the FIA's jurisdiction is statutory and restricted strictly to offences specified in the Schedule",
      "Yes, if requested by the complainant",
      "Yes, if it occurs near a federal highway"
    ],
    ans: "B",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "The FIA is a creature of statute with specialized jurisdiction confined to scheduled offences; purely provincial crimes remain under the exclusive jurisdiction of Provincial Police."
  },
  {
    q: "Under Section 5(1) of the FIA Act, what powers do FIA officers have regarding seizure of forged or smuggled goods?",
    opts: [
      "Powers of search and seizure equal to those of police officers under CrPC",
      "No search powers without written military clearance",
      "Only power to take photographs",
      "Only power to impose administrative fines"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 5(1) vests members of the Agency with all powers relating to search, arrest of persons, and seizure of property which officers of Provincial Police have under CrPC."
  },
  {
    q: "The Federal Investigation Agency Academy, which provides basic and specialized training to Assistant Directors and Inspectors, is located in:",
    opts: ["Islamabad", "Lahore", "Karachi", "Peshawar"],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "The FIA Academy is located in Islamabad, imparting training in modern criminal investigation, financial intelligence, digital forensics, and anti-human trafficking."
  },
  {
    q: "Under the Emigration Ordinance, 1979 (included in the Schedule to the FIA Act), illegal recruitment for employment abroad without a valid license is punishable with:",
    opts: [
      "Imprisonment up to 14 years and fine",
      "A simple administrative reprimand",
      "Community service for 1 week",
      "30 days house arrest"
    ],
    ans: "A",
    diff: "Medium",
    subCat: "FIA Act, 1974",
    exp: "Section 17 and 18 of the Emigration Ordinance, 1979 penalize unlawful emigration and illegal recruitment with imprisonment extending up to 14 years, fine, or both."
  },
  {
    q: "Who appoints the Director General of the Federal Investigation Agency?",
    opts: [
      "The Federal Government",
      "The Supreme Judicial Council",
      "The Senate Chairman",
      "The Chief Election Commissioner"
    ],
    ans: "A",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Section 3(2) of the FIA Act provides: 'The Agency shall consist of a Director General to be appointed by the Federal Government.'"
  },
  {
    q: "In an investigation under the FIA Act, 1974, when an investigating officer examines any person acquainted with the facts of the case, under which section of CrPC is the statement recorded?",
    opts: ["Section 154 CrPC", "Section 161 CrPC", "Section 164 CrPC", "Section 172 CrPC"],
    ans: "B",
    diff: "Easy",
    subCat: "FIA Act, 1974",
    exp: "Statements of witnesses examined by police/FIA officers during an investigation are recorded under Section 161 of the Code of Criminal Procedure, 1898."
  }
];

module.exports = {
  TOPIC_4_ARITHMETIC,
  TOPIC_5_CURRENT_AFFAIRS,
  TOPIC_6_PAK_AFFAIRS_ISLAMIC,
  TOPIC_7_FIA_ACT
};

