const fs = require('fs');

const part2 = [
  // --- SUBCATEGORY 2 (Continued): Regional Alliances & Political Blocs (Q51 - Q60) ---
  {
    questionId: 51,
    questionText: "The Commonwealth of Nations is a voluntary association of 56 sovereign states, most of which were former territories of the British Empire. Where is its Secretariat headquartered?",
    options: {
      A: "Edinburgh, Scotland",
      B: "Marlborough House, London, United Kingdom",
      C: "Ottawa, Canada",
      D: "Canberra, Australia"
    },
    correctAnswer: "B",
    correctAnswerText: "Marlborough House, London, United Kingdom",
    explanation: "The Commonwealth Secretariat was established in 1965 and is headquartered at Marlborough House in London, United Kingdom. King Charles III is the ceremonial Head of the Commonwealth.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 52,
    questionText: "The Non-Aligned Movement (NAM) held its first formal summit in September 1961 in Belgrade, Yugoslavia. Which group of leaders served as its chief founding architects following the 1955 Bandung Conference?",
    options: {
      A: "Churchill, Roosevelt, and Stalin",
      B: "Tito, Nehru, Nasser, Sukarno, and Nkrumah",
      C: "Mao Zedong, Ho Chi Minh, and Kim Il-sung",
      D: "Nelson Mandela, Robert Mugabe, and Julius Nyerere"
    },
    correctAnswer: "B",
    correctAnswerText: "Tito, Nehru, Nasser, Sukarno, and Nkrumah",
    explanation: "NAM was founded during the Cold War by Josip Broz Tito (Yugoslavia), Jawaharlal Nehru (India), Gamal Abdel Nasser (Egypt), Sukarno (Indonesia), and Kwame Nkrumah (Ghana) to avoid taking sides between the US and Soviet blocs.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 53,
    questionText: "The Group of Seven (G7) industrialized democracies originated from a 1975 summit at the Château de Rambouillet, France. Which country joined in 1976 to turn the G6 into the G7?",
    options: {
      A: "Japan",
      B: "Canada",
      C: "Italy",
      D: "Australia"
    },
    correctAnswer: "B",
    correctAnswerText: "Canada",
    explanation: "The first summit in 1975 included France, West Germany, Italy, Japan, the UK, and the USA (G6). Canada joined in 1976 to form the G7. Russia joined in 1998 (G8) but was suspended indefinitely in 2014 following the annexation of Crimea.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 54,
    questionText: "The Group of Twenty (G20), originally formed in 1999 as a forum for finance ministers and central bank governors, admitted which continental bloc as a new permanent member at the 2023 New Delhi Summit?",
    options: {
      A: "Association of Southeast Asian Nations (ASEAN)",
      B: "African Union (AU)",
      C: "Arab League",
      D: "Community of Latin American and Caribbean States (CELAC)"
    },
    correctAnswer: "B",
    correctAnswerText: "African Union (AU)",
    explanation: "At the 18th G20 Summit in New Delhi in September 2023, the 55-member African Union was formally inducted as a permanent member, granting it the same status as the European Union.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 55,
    questionText: "The D-8 Organization for Economic Cooperation (Developing-8), established on 15 June 1997 in Istanbul, brings together eight major developing Muslim-majority nations. Which country is NOT a member of the D-8?",
    options: {
      A: "Pakistan",
      B: "Indonesia",
      C: "Saudi Arabia",
      D: "Nigeria"
    },
    correctAnswer: "C",
    correctAnswerText: "Saudi Arabia",
    explanation: "The D-8 consists of Bangladesh, Egypt, Indonesia, Iran, Malaysia, Nigeria, Pakistan, and Turkey. Saudi Arabia is not a member of the D-8. Its Secretariat is in Istanbul, Turkey.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 56,
    questionText: "The Quadrilateral Security Dialogue, commonly known as the QUAD, is a diplomatic and security network comprising which four Indo-Pacific democracies?",
    options: {
      A: "USA, United Kingdom, France, and Germany",
      B: "USA, India, Japan, and Australia",
      C: "USA, South Korea, Japan, and Taiwan",
      D: "India, Japan, Australia, and Singapore"
    },
    correctAnswer: "B",
    correctAnswerText: "USA, India, Japan, and Australia",
    explanation: "The QUAD was initially conceptualized in 2007 by Japanese Prime Minister Shinzo Abe and resurrected in 2017 among the United States, India, Japan, and Australia to promote a 'free and open Indo-Pacific'.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 57,
    questionText: "Announced in September 2021, the trilateral security partnership known as 'AUKUS' is aimed at equipping which country with conventionally armed, nuclear-powered attack submarines?",
    options: {
      A: "Austria",
      B: "Australia",
      C: "United Arab Emirates",
      D: "New Zealand"
    },
    correctAnswer: "B",
    correctAnswerText: "Australia",
    explanation: "AUKUS is a strategic partnership among Australia, the United Kingdom, and the United States (A-UK-US) enabling Australia to acquire sovereign conventionally armed nuclear-powered submarines (SSN-AUKUS).",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 58,
    questionText: "The Organization of American States (OAS), founded in 1948 by the Charter of Bogotá to foster regional solidarity across North and South America, has its headquarters in which city?",
    options: {
      A: "Buenos Aires, Argentina",
      B: "Washington, D.C., USA",
      C: "Santiago, Chile",
      D: "Mexico City, Mexico"
    },
    correctAnswer: "B",
    correctAnswerText: "Washington, D.C., USA",
    explanation: "The OAS represents 35 independent states of the Americas and is headquartered in Washington, D.C. It is the world's oldest regional organization, tracing its origin back to the First International Conference of American States in 1889.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 59,
    questionText: "The Nordic Council, established in 1952 to facilitate inter-parliamentary cooperation among Scandinavian and Nordic nations, is headquartered in which capital city?",
    options: {
      A: "Stockholm, Sweden",
      B: "Oslo, Norway",
      C: "Copenhagen, Denmark",
      D: "Helsinki, Finland"
    },
    correctAnswer: "C",
    correctAnswerText: "Copenhagen, Denmark",
    explanation: "The Nordic Council (comprising Denmark, Finland, Iceland, Norway, Sweden, and autonomous territories Greenland, Faroe Islands, and Åland) is headquartered in Copenhagen, Denmark.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 60,
    questionText: "The 'Benelux Union', established as a customs union in 1944 and often regarded as a pioneering model for European economic integration, consists of which three countries?",
    options: {
      A: "Belgium, Netherlands, and Luxembourg",
      B: "Belarus, Norway, and Luxembourg",
      C: "Bosnia, Netherlands, and Lithuania",
      D: "Belgium, Norway, and Liechtenstein"
    },
    correctAnswer: "A",
    correctAnswerText: "Belgium, Netherlands, and Luxembourg",
    explanation: "The Benelux Union is a politico-economic union between Belgium, the Netherlands, and Luxembourg. Its name is formed from the beginning of each country's name.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },

  // --- SUBCATEGORY 3: International Financial & Trade Institutions (Q61 - Q80) ---
  {
    questionId: 61,
    questionText: "The landmark Bretton Woods Conference of July 1944 (officially the UN Monetary and Financial Conference) took place in New Hampshire, USA, and resulted in the creation of which two major institutions?",
    options: {
      A: "The League of Nations and the World Trade Organization",
      B: "The International Monetary Fund (IMF) and the International Bank for Reconstruction and Development (IBRD / World Bank)",
      C: "The Federal Reserve and the Bank of England",
      D: "The Asian Development Bank and the Bank for International Settlements"
    },
    correctAnswer: "B",
    correctAnswerText: "The International Monetary Fund (IMF) and the International Bank for Reconstruction and Development (IBRD / World Bank)",
    explanation: "Delegates from 44 nations gathered at Bretton Woods in July 1944, guided by John Maynard Keynes and Harry Dexter White, establishing the IMF (to oversee the exchange rate system) and IBRD (now part of the World Bank).",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 62,
    questionText: "Where is the headquarters of the International Monetary Fund (IMF) located, and by long-standing tradition, an individual from which continent serves as its Managing Director?",
    options: {
      A: "Geneva, Switzerland; North America",
      B: "Washington, D.C., USA; Europe",
      C: "New York City, USA; Asia",
      D: "London, UK; South America"
    },
    correctAnswer: "B",
    correctAnswerText: "Washington, D.C., USA; Europe",
    explanation: "The IMF is headquartered in Washington, D.C. Under an unwritten convention established at Bretton Woods, the Managing Director of the IMF is always a European, while the President of the World Bank is an American citizen.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 63,
    questionText: "Special Drawing Rights (SDRs) were created by the IMF in 1969 as an international reserve asset. Which five national currencies currently comprise the SDR valuation basket?",
    options: {
      A: "US Dollar, Euro, Japanese Yen, British Pound, and Swiss Franc",
      B: "US Dollar, Euro, Chinese Renminbi, Japanese Yen, and British Pound",
      C: "US Dollar, Euro, Russian Ruble, Indian Rupee, and British Pound",
      D: "US Dollar, Canadian Dollar, Australian Dollar, Euro, and Yen"
    },
    correctAnswer: "B",
    correctAnswerText: "US Dollar, Euro, Chinese Renminbi, Japanese Yen, and British Pound",
    explanation: "The SDR basket consists of the US Dollar, Euro, Chinese Renminbi (added in October 2016), Japanese Yen, and British Pound Sterling.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 64,
    questionText: "The World Bank Group consists of five closely associated development institutions headquartered in Washington, D.C. Who was appointed as President of the World Bank Group in June 2023?",
    options: {
      A: "David Malpass",
      B: "Jim Yong Kim",
      C: "Ajay Banga",
      D: "Kristalina Georgieva"
    },
    correctAnswer: "C",
    correctAnswerText: "Ajay Banga",
    explanation: "Ajay Banga, an Indian-American business executive, assumed office as the 14th President of the World Bank Group on 2 June 2023 for a five-year term.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 65,
    questionText: "Which member institution of the World Bank Group, founded in 1960, is known as the 'soft-loan window' because it provides interest-free credits and grants to the world's poorest developing countries?",
    options: {
      A: "International Bank for Reconstruction and Development (IBRD)",
      B: "International Development Association (IDA)",
      C: "International Finance Corporation (IFC)",
      D: "Multilateral Investment Guarantee Agency (MIGA)"
    },
    correctAnswer: "B",
    correctAnswerText: "International Development Association (IDA)",
    explanation: "The IDA provides zero- or ultra-low-interest loans (called credits) and grants to low-income countries with repayments spanning 30 to 40 years, earning it the title of the World Bank's 'soft-loan window'.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 66,
    questionText: "Which arm of the World Bank Group, established in 1956, focuses exclusively on the private sector by investing directly in companies and mobilizing third-party capital in developing nations?",
    options: {
      A: "International Finance Corporation (IFC)",
      B: "Multilateral Investment Guarantee Agency (MIGA)",
      C: "International Centre for Settlement of Investment Disputes (ICSID)",
      D: "International Monetary Fund (IMF)"
    },
    correctAnswer: "A",
    correctAnswerText: "International Finance Corporation (IFC)",
    explanation: "The International Finance Corporation (IFC) is the largest global development institution focused exclusively on supporting the private sector in developing economies.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 67,
    questionText: "Which World Bank Group institution, created in 1988, provides political risk insurance (guarantees) to cross-border private investors against non-commercial risks like expropriation, war, and currency restrictions?",
    options: {
      A: "IFC",
      B: "MIGA (Multilateral Investment Guarantee Agency)",
      C: "ICSID",
      D: "IBRD"
    },
    correctAnswer: "B",
    correctAnswerText: "MIGA (Multilateral Investment Guarantee Agency)",
    explanation: "MIGA was established in 1988 to foster foreign direct investment (FDI) into emerging economies by insuring investors against non-commercial risks such as war, civil disturbance, expropriation, and breach of contract.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 68,
    questionText: "The International Centre for Settlement of Investment Disputes (ICSID), established under the 1965 Washington Convention, primarily arbitrates disputes between which parties?",
    options: {
      A: "Two sovereign states over territorial boundaries",
      B: "Foreign private investors and sovereign host states",
      C: "Central banks over exchange rate manipulation",
      D: "Domestic labor unions and multinational corporations"
    },
    correctAnswer: "B",
    correctAnswerText: "Foreign private investors and sovereign host states",
    explanation: "ICSID is an autonomous international arbitration institution dedicated to resolving legal dispute settlements between foreign private investors and contracting sovereign states (Investor-State Dispute Settlement / ISDS).",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 69,
    questionText: "Before the World Trade Organization (WTO) was founded in 1995, international commercial trade was governed by which provisional multilateral treaty signed in Geneva in October 1947?",
    options: {
      A: "Havana Charter",
      B: "General Agreement on Tariffs and Trade (GATT)",
      C: "Bretton Woods Trade Accord",
      D: "Treaty of Rome"
    },
    correctAnswer: "B",
    correctAnswerText: "General Agreement on Tariffs and Trade (GATT)",
    explanation: "GATT was signed by 23 nations on 30 October 1947 and took effect on 1 January 1948. It operated through rounds of multilateral negotiations, culminating in the Uruguay Round (1986–1994), which created the WTO.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 70,
    questionText: "The World Trade Organization (WTO) officially began operations on 1 January 1995 as a result of which international agreement signed in April 1994?",
    options: {
      A: "Doha Development Agenda",
      B: "Marrakesh Agreement",
      C: "Geneva Protocol",
      D: "Kyoto Protocol"
    },
    correctAnswer: "B",
    correctAnswerText: "Marrakesh Agreement",
    explanation: "The Marrakesh Agreement was signed in Marrakesh, Morocco, on 15 April 1994 by 123 nations at the conclusion of the Uruguay Round, officially establishing the WTO with its headquarters in Geneva, Switzerland.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 71,
    questionText: "What are the two core non-discrimination principles that form the legal cornerstone of the World Trade Organization (WTO) trading system?",
    options: {
      A: "Tariff Maximization and Export Quotas",
      B: "Most-Favoured-Nation (MFN) treatment and National Treatment",
      C: "Voluntary Export Restraints and Domestic Subsidies",
      D: "Absolute Advantage and Currency Devaluation"
    },
    correctAnswer: "B",
    correctAnswerText: "Most-Favoured-Nation (MFN) treatment and National Treatment",
    explanation: "The WTO non-discrimination principle rests on MFN (Article I of GATT: treating all other member countries equally) and National Treatment (Article III of GATT: treating imported foreign goods no less favorably than domestic goods).",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 72,
    questionText: "Who made history in March 2021 by becoming both the first woman and the first African to serve as Director-General of the World Trade Organization (WTO)?",
    options: {
      A: "Amina J. Mohammed",
      B: "Dr. Ngozi Okonjo-Iweala",
      C: "Ellen Johnson Sirleaf",
      D: "Sahle-Work Zewde"
    },
    correctAnswer: "B",
    correctAnswerText: "Dr. Ngozi Okonjo-Iweala",
    explanation: "Dr. Ngozi Okonjo-Iweala, a Nigerian economist and former Finance Minister, took office as the 7th Director-General of the WTO on 1 March 2021.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 73,
    questionText: "The Asian Development Bank (ADB), established on 19 December 1966 to foster economic growth and cooperation in the Asia-Pacific region, has its headquarters in which metropolitan city?",
    options: {
      A: "Bangkok, Thailand",
      B: "Mandaluyong, Metro Manila, Philippines",
      C: "Singapore",
      D: "Tokyo, Japan"
    },
    correctAnswer: "B",
    correctAnswerText: "Mandaluyong, Metro Manila, Philippines",
    explanation: "The Asian Development Bank (ADB) is headquartered in Mandaluyong, Metro Manila, Philippines. Japan and the United States are its two largest shareholders, and its President has traditionally been a Japanese national.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 74,
    questionText: "The Asian Infrastructure Investment Bank (AIIB), initiated by China and officially opening for business in January 2016, is headquartered in which city?",
    options: {
      A: "Shanghai, China",
      B: "Beijing, China",
      C: "Hong Kong",
      D: "Seoul, South Korea"
    },
    correctAnswer: "B",
    correctAnswerText: "Beijing, China",
    explanation: "The AIIB is headquartered in Beijing, China. It is a multilateral development bank focused on infrastructure development across Asia and beyond, with over 100 approved member countries.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 75,
    questionText: "The New Development Bank (NDB), formerly known as the BRICS Development Bank, was agreed upon at the 2014 Fortaleza Summit and commenced operations in 2015. Where is its headquarters?",
    options: {
      A: "Moscow, Russia",
      B: "Shanghai, China",
      C: "New Delhi, India",
      D: "Brasília, Brazil"
    },
    correctAnswer: "B",
    correctAnswerText: "Shanghai, China",
    explanation: "The New Development Bank (NDB) is headquartered in Shanghai, China. Each of the founding BRICS member nations had equal capital shares and equal voting power without any individual veto.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 76,
    questionText: "The Islamic Development Bank (IsDB), founded following a 1973 Declaration of Intent by the Finance Ministers of Muslim countries, commenced operations in 1975. In which city is it headquartered?",
    options: {
      A: "Riyadh, Saudi Arabia",
      B: "Jeddah, Saudi Arabia",
      C: "Kuwait City, Kuwait",
      D: "Dubai, UAE"
    },
    correctAnswer: "B",
    correctAnswerText: "Jeddah, Saudi Arabia",
    explanation: "The Islamic Development Bank (IsDB) is headquartered in Jeddah, Saudi Arabia. It finances socio-economic development across its 57 member states in accordance with the principles of Sharia (Islamic law).",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 77,
    questionText: "Which prestigious international financial institution, established in 1930 and headquartered in Basel, Switzerland, is commonly known as the 'bank for central banks' and hosts the Basel Committee on Banking Supervision?",
    options: {
      A: "European Investment Bank (EIB)",
      B: "Bank for International Settlements (BIS)",
      C: "Financial Stability Board (FSB)",
      D: "International Monetary Fund (IMF)"
    },
    correctAnswer: "B",
    correctAnswerText: "Bank for International Settlements (BIS)",
    explanation: "The Bank for International Settlements (BIS), based in Basel, Switzerland, is the world's oldest international financial organization. It fosters international monetary and financial cooperation among central banks and frames the Basel Accords (Basel I, II, III).",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 78,
    questionText: "The European Bank for Reconstruction and Development (EBRD) was created in 1991 to help build market economies following the collapse of the Soviet bloc. Where is its headquarters?",
    options: {
      A: "Brussels, Belgium",
      B: "London, United Kingdom",
      C: "Frankfurt, Germany",
      D: "Paris, France"
    },
    correctAnswer: "B",
    correctAnswerText: "London, United Kingdom",
    explanation: "The EBRD is headquartered in London, United Kingdom. It uses investment tools to help build market economies and promote private and entrepreneurial initiative in over 30 countries across three continents.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Medium"
  },
  {
    questionId: 79,
    questionText: "The Organisation for Economic Co-operation and Development (OECD), known as the 'think tank for advanced market democracies', succeeded the OEEC in 1961. Where is the OECD headquartered?",
    options: {
      A: "Geneva, Switzerland",
      B: "Paris (Château de la Muette), France",
      C: "Vienna, Austria",
      D: "The Hague, Netherlands"
    },
    correctAnswer: "B",
    correctAnswerText: "Paris (Château de la Muette), France",
    explanation: "The OECD was founded in 1961 as the successor to the Organisation for European Economic Co-operation (OEEC, set up in 1948 to administer the Marshall Plan). It is headquartered at the Château de la Muette in Paris, France.",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },
  {
    questionId: 80,
    questionText: "The Organization of the Petroleum Exporting Countries (OPEC) was founded at the Baghdad Conference in September 1960. While its initial headquarters was in Geneva, to which city was it moved in 1965?",
    options: {
      A: "Riyadh, Saudi Arabia",
      B: "Vienna, Austria",
      C: "Abu Dhabi, UAE",
      D: "Doha, Qatar"
    },
    correctAnswer: "B",
    correctAnswerText: "Vienna, Austria",
    explanation: "OPEC was founded by Iran, Iraq, Kuwait, Saudi Arabia, and Venezuela. Its headquarters was located in Geneva, Switzerland for its first five years before moving to Vienna, Austria on 1 September 1965 (even though Austria is not an OPEC member).",
    subCategory: "International Financial & Trade Institutions",
    difficulty: "Easy"
  },

  // --- SUBCATEGORY 4: Global Treaties, Judicial, Security & Humanitarian Bodies (Q81 - Q100) ---
  {
    questionId: 81,
    questionText: "The International Court of Justice (ICJ), the principal judicial organ of the United Nations, is the only one of the six principal UN organs not located in New York City. Where is its seat?",
    options: {
      A: "Geneva, Switzerland",
      B: "The Peace Palace, The Hague, Netherlands",
      C: "Strasbourg, France",
      D: "Luxembourg City, Luxembourg"
    },
    correctAnswer: "B",
    correctAnswerText: "The Peace Palace, The Hague, Netherlands",
    explanation: "The ICJ, established in June 1945 by the UN Charter, began its work in April 1946. It is seated at the historic Peace Palace in The Hague, Netherlands.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 82,
    questionText: "How many judges comprise the bench of the International Court of Justice (ICJ), for how long are they elected, and by which bodies?",
    options: {
      A: "9 judges elected for 5 years by the General Assembly",
      B: "15 judges elected for 9-year terms by simultaneous voting in the UNGA and UNSC",
      C: "21 judges appointed for life by the UN Secretary-General",
      D: "12 judges elected for 6 years by the Security Council alone"
    },
    correctAnswer: "B",
    correctAnswerText: "15 judges elected for 9-year terms by simultaneous voting in the UNGA and UNSC",
    explanation: "The ICJ consists of 15 judges elected for 9-year terms through independent, simultaneous voting in the UN General Assembly and the Security Council. One-third (5 judges) are elected every three years.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 83,
    questionText: "Unlike the ICJ which adjudicates legal disputes between sovereign states, which permanent international tribunal created by the 1998 Rome Statute prosecutes individuals for genocide, war crimes, and crimes against humanity?",
    options: {
      A: "Permanent Court of Arbitration (PCA)",
      B: "International Criminal Court (ICC)",
      C: "European Court of Human Rights (ECHR)",
      D: "International Tribunal for the Law of the Sea (ITLOS)"
    },
    correctAnswer: "B",
    correctAnswerText: "International Criminal Court (ICC)",
    explanation: "The International Criminal Court (ICC), also seated in The Hague, was established by the Rome Statute in 1998 (entered into force in July 2002) to prosecute individuals for the gravest international crimes.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 84,
    questionText: "Established by the First Hague Peace Conference in 1899, which is the world's oldest institution for multilateral dispute resolution, also seated at the Peace Palace in The Hague?",
    options: {
      A: "International Court of Justice (ICJ)",
      B: "Permanent Court of Arbitration (PCA)",
      C: "International Criminal Court (ICC)",
      D: "League of Nations Council"
    },
    correctAnswer: "B",
    correctAnswerText: "Permanent Court of Arbitration (PCA)",
    explanation: "The Permanent Court of Arbitration (PCA) was established by the Convention for the Pacific Settlement of International Disputes in 1899. It provides administrative registry services for interstate, investor-state, and contractual arbitrations.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 85,
    questionText: "The International Criminal Police Organization (Interpol), founded in Vienna in 1923, currently has 196 member countries. Where is its General Secretariat headquartered?",
    options: {
      A: "Geneva, Switzerland",
      B: "Lyon, France",
      C: "Brussels, Belgium",
      D: "London, UK"
    },
    correctAnswer: "B",
    correctAnswerText: "Lyon, France",
    explanation: "Interpol was established as the International Criminal Police Commission in 1923. It reconstituted in 1956 and moved its General Secretariat to Lyon, France in 1989. It is famous for issuing color-coded alerts like Red Notices.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 86,
    questionText: "The Financial Action Task Force (FATF), the global money laundering and terrorist financing watchdog that maintains the 'Grey List' and 'Black List', was established in 1989 by which entity and has its Secretariat where?",
    options: {
      A: "Established by the UN General Assembly; Secretariat in Geneva",
      B: "Established by the G7 Summit in Paris; Secretariat at OECD headquarters in Paris",
      C: "Established by the World Bank; Secretariat in Washington, D.C.",
      D: "Established by INTERPOL; Secretariat in Lyon"
    },
    correctAnswer: "B",
    correctAnswerText: "Established by the G7 Summit in Paris; Secretariat at OECD headquarters in Paris",
    explanation: "The FATF was established at the July 1989 G7 Summit in Paris to examine and develop measures to combat money laundering. Its Secretariat is housed at the OECD headquarters in Paris.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 87,
    questionText: "The International Committee of the Red Cross (ICRC) was founded in Geneva in February 1863 inspired by which humanitarian pioneer whose book 'A Memory of Solferino' led to the Geneva Conventions?",
    options: {
      A: "Florence Nightingale",
      B: "Henry Dunant",
      C: "Clara Barton",
      D: "Fridtjof Nansen"
    },
    correctAnswer: "B",
    correctAnswerText: "Henry Dunant",
    explanation: "Swiss businessman Henry Dunant witnessed the horrific aftermath of the Battle of Solferino (1859). He co-founded the Red Cross in 1863, was awarded the first Nobel Peace Prize in 1901, and the ICRC has won three Nobel Peace Prizes (1917, 1944, 1963).",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 88,
    questionText: "The four Geneva Conventions of 12 August 1949 form the core of International Humanitarian Law. Which group of persons is specifically protected by the Third Geneva Convention?",
    options: {
      A: "Wounded and sick in armed forces in the field",
      B: "Wounded, sick, and shipwrecked members of armed forces at sea",
      C: "Prisoners of War (POWs)",
      D: "Civilian persons in time of war"
    },
    correctAnswer: "C",
    correctAnswerText: "Prisoners of War (POWs)",
    explanation: "The 1st Convention protects wounded soldiers on land; the 2nd protects wounded/shipwrecked at sea; the 3rd establishes comprehensive protections for Prisoners of War (POWs); and the 4th protects civilians during wartime.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 89,
    questionText: "Transparency International, the non-governmental organization widely known for publishing the annual Corruption Perceptions Index (CPI), is headquartered in which city?",
    options: {
      A: "London, UK",
      B: "Berlin, Germany",
      C: "Geneva, Switzerland",
      D: "Stockholm, Sweden"
    },
    correctAnswer: "B",
    correctAnswerText: "Berlin, Germany",
    explanation: "Transparency International was founded in May 1993 by former World Bank director Peter Eigen and is based in Berlin, Germany. It publishes the widely cited global Corruption Perceptions Index (CPI).",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 90,
    questionText: "Amnesty International, which received the 1977 Nobel Peace Prize for its global campaign for the defense of human rights and prisoners of conscience, was founded in 1961 in which city?",
    options: {
      A: "Paris, France",
      B: "London, United Kingdom",
      C: "New York City, USA",
      D: "Geneva, Switzerland"
    },
    correctAnswer: "B",
    correctAnswerText: "London, United Kingdom",
    explanation: "Amnesty International was founded in London in July 1961 by British lawyer Peter Benenson following the publication of his newspaper article 'The Forgotten Prisoners'. Its International Secretariat remains in London.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 91,
    questionText: "Human Rights Watch (HRW), one of the world's leading independent human rights research and advocacy organizations, was founded in 1978 under what original name?",
    options: {
      A: "Helsinki Watch",
      B: "Human Rights First",
      C: "Liberty International",
      D: "Civil Rights International"
    },
    correctAnswer: "A",
    correctAnswerText: "Helsinki Watch",
    explanation: "Human Rights Watch began in 1978 as 'Helsinki Watch' to monitor Soviet compliance with the 1975 Helsinki Accords. It is headquartered in New York City.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 92,
    questionText: "The Organisation for the Prohibition of Chemical Weapons (OPCW), which was awarded the Nobel Peace Prize in 2013 for its efforts to eliminate chemical weapons, is headquartered in which city?",
    options: {
      A: "Geneva, Switzerland",
      B: "The Hague, Netherlands",
      C: "Vienna, Austria",
      D: "Brussels, Belgium"
    },
    correctAnswer: "B",
    correctAnswerText: "The Hague, Netherlands",
    explanation: "The OPCW is based in The Hague, Netherlands. It is the implementing body for the Chemical Weapons Convention (CWC), which entered into force on 29 April 1997, overseeing the verified destruction of declared chemical weapon stockpiles.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 93,
    questionText: "Where is the Preparatory Commission for the Comprehensive Nuclear-Test-Ban Treaty Organization (CTBTO PrepCom), which oversees the International Monitoring System (IMS) for nuclear test detection, headquartered?",
    options: {
      A: "Geneva, Switzerland",
      B: "Vienna, Austria",
      C: "Stockholm, Sweden",
      D: "Oslo, Norway"
    },
    correctAnswer: "B",
    correctAnswerText: "Vienna, Austria",
    explanation: "The CTBTO Preparatory Commission is headquartered at the Vienna International Centre in Vienna, Austria. It maintains a worldwide network of seismic, hydroacoustic, infrasound, and radionuclide monitoring stations.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 94,
    questionText: "The Intergovernmental Panel on Climate Change (IPCC), created in 1988 by the WMO and UNEP and awarded the Nobel Peace Prize in 2007, produces comprehensive scientific Assessment Reports. Where is its Secretariat located?",
    options: {
      A: "Nairobi, Kenya",
      B: "Geneva, Switzerland",
      C: "Bonn, Germany",
      D: "Paris, France"
    },
    correctAnswer: "B",
    correctAnswerText: "Geneva, Switzerland",
    explanation: "The IPCC Secretariat is hosted at the World Meteorological Organization headquarters in Geneva, Switzerland. It provides policymakers with regular scientific assessments on climate change, its implications, and future risks.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 95,
    questionText: "The United Nations Framework Convention on Climate Change (UNFCCC), adopted at the 1992 Earth Summit in Rio de Janeiro, has its permanent Secretariat in which German city?",
    options: {
      A: "Berlin",
      B: "Bonn",
      C: "Frankfurt",
      D: "Munich"
    },
    correctAnswer: "B",
    correctAnswerText: "Bonn",
    explanation: "The UNFCCC Secretariat (UN Climate Change) has been based in Bonn, Germany, since 1996. It serves as the institutional umbrella for the annual COP conferences, the 1997 Kyoto Protocol, and the 2015 Paris Agreement.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 96,
    questionText: "The International Union for Conservation of Nature (IUCN), the global authority on the status of the natural world and publisher of the IUCN Red List of Threatened Species, is headquartered in which Swiss town?",
    options: {
      A: "Geneva",
      B: "Gland",
      C: "Zurich",
      D: "Basel"
    },
    correctAnswer: "B",
    correctAnswerText: "Gland",
    explanation: "IUCN, founded in October 1948 in Fontainebleau, France, is headquartered in Gland, Switzerland. Its Red List evaluates the extinction risk of thousands of species across categories like Vulnerable, Endangered, and Critically Endangered.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 97,
    questionText: "Which international conservation organization, founded in 1961 with its headquarters also in Gland, Switzerland, is famous worldwide for its iconic giant panda logo?",
    options: {
      A: "Greenpeace",
      B: "World Wide Fund for Nature (WWF)",
      C: "Sierra Club",
      D: "Friends of the Earth"
    },
    correctAnswer: "B",
    correctAnswerText: "World Wide Fund for Nature (WWF)",
    explanation: "The World Wide Fund for Nature (WWF, formerly World Wildlife Fund) was founded in April 1961 in Morges, Switzerland, and is based in Gland, Switzerland, with its globally recognized giant panda emblem.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 98,
    questionText: "The World Anti-Doping Agency (WADA), founded in 1999 to harmonize anti-doping policies in sport across the globe, moved its international headquarters to which North American city in 2002?",
    options: {
      A: "New York City, USA",
      B: "Montreal, Canada",
      C: "Colorado Springs, USA",
      D: "Toronto, Canada"
    },
    correctAnswer: "B",
    correctAnswerText: "Montreal, Canada",
    explanation: "WADA was founded on 10 November 1999 in Lausanne, Switzerland, following the World Conference on Doping in Sport. It relocated its permanent international headquarters to Montreal, Quebec, Canada in 2002.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  },
  {
    questionId: 99,
    questionText: "The International Olympic Committee (IOC) was founded on 23 June 1894 by Baron Pierre de Coubertin in Paris. In which Swiss city has the IOC been headquartered since 1915, officially designated as the 'Olympic Capital'?",
    options: {
      A: "Geneva",
      B: "Lausanne",
      C: "Bern",
      D: "Zurich"
    },
    correctAnswer: "B",
    correctAnswerText: "Lausanne",
    explanation: "The IOC was founded in Paris in 1894 and moved to Lausanne, Switzerland, during World War I in 1915. Lausanne is officially recognized as the 'Olympic Capital' and houses the Olympic Museum.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Easy"
  },
  {
    questionId: 100,
    questionText: "Under the 1982 United Nations Convention on the Law of the Sea (UNCLOS), the International Seabed Authority (ISA) is headquartered in Kingston, Jamaica, while the International Tribunal for the Law of the Sea (ITLOS) has its seat in which German port city?",
    options: {
      A: "Bremen",
      B: "Hamburg",
      C: "Rostock",
      D: "Kiel"
    },
    correctAnswer: "B",
    correctAnswerText: "Hamburg",
    explanation: "Under the UNCLOS framework, the International Seabed Authority (ISA) organizes and controls mineral-related activities in the international seabed from Kingston, Jamaica, while ITLOS adjudicates maritime disputes from Hamburg, Germany.",
    subCategory: "Global Treaties, Judicial, Security & Humanitarian Bodies",
    difficulty: "Medium"
  }
];

fs.writeFileSync('scratch/world_org_part2.json', JSON.stringify(part2, null, 2), 'utf8');
console.log('Part 2 saved successfully! Total questions:', part2.length);
