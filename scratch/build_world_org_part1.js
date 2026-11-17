const fs = require('fs');

const part1 = [
  // --- SUBCATEGORY 1: United Nations & Specialized Agencies (Q1 - Q30) ---
  {
    questionId: 1,
    questionText: "The Charter of the United Nations was signed on 26 June 1945 in San Francisco, but on which date did it officially enter into force, celebrated annually as United Nations Day?",
    options: {
      A: "14 August 1945",
      B: "24 October 1945",
      C: "1 January 1946",
      D: "10 December 1948"
    },
    correctAnswer: "B",
    correctAnswerText: "24 October 1945",
    explanation: "The UN Charter was signed on 26 June 1945 and entered into force on 24 October 1945 upon ratification by the five permanent members and a majority of other signatories. October 24 is celebrated globally as United Nations Day.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 2,
    questionText: "Which international peacekeeping organization preceded the United Nations, having been established in 1919 under the Treaty of Versailles following World War I?",
    options: {
      A: "The Concert of Europe",
      B: "The League of Nations",
      C: "The Holy Alliance",
      D: "The Hague Tribunal"
    },
    correctAnswer: "B",
    correctAnswerText: "The League of Nations",
    explanation: "The League of Nations was founded in 1919–1920 under the Treaty of Versailles based on US President Woodrow Wilson's Fourteen Points. It had its headquarters in Geneva, Switzerland, and was officially dissolved in April 1946.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 3,
    questionText: "How many sovereign nations participated in the 1945 San Francisco Conference (United Nations Conference on International Organization) as original founding members?",
    options: {
      A: "35",
      B: "50",
      C: "75",
      D: "100"
    },
    correctAnswer: "B",
    correctAnswerText: "50",
    explanation: "50 nations attended the San Francisco Conference. Poland was unable to attend due to political disputes but signed the Charter later as the 51st original founding member state.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 4,
    questionText: "The land on which the United Nations Headquarters in New York City stands was purchased through an 8.5 million dollar donation by which American philanthropist?",
    options: {
      A: "Andrew Carnegie",
      B: "Henry Ford",
      C: "John D. Rockefeller Jr.",
      D: "J.P. Morgan"
    },
    correctAnswer: "C",
    correctAnswerText: "John D. Rockefeller Jr.",
    explanation: "John D. Rockefeller Jr. donated $8.5 million in December 1946 to purchase the 17-acre site along the East River in Manhattan, New York, which became the international territory of the UN Headquarters.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 5,
    questionText: "How many official languages are recognized by the United Nations, and which language was the last to be added in 1973?",
    options: {
      A: "5 languages; German was added in 1973",
      B: "6 languages; Arabic was added in 1973",
      C: "6 languages; Portuguese was added in 1973",
      D: "7 languages; Hindi was added in 1973"
    },
    correctAnswer: "B",
    correctAnswerText: "6 languages; Arabic was added in 1973",
    explanation: "The UN has 6 official languages: Arabic, Chinese, English, French, Russian, and Spanish. Arabic was added by the UN General Assembly in December 1973.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 6,
    questionText: "While the United Nations has six official languages, which two languages serve as the daily 'working languages' of the UN Secretariat?",
    options: {
      A: "English and Spanish",
      B: "English and French",
      C: "English and Chinese",
      D: "English and Russian"
    },
    correctAnswer: "B",
    correctAnswerText: "English and French",
    explanation: "Under UN General Assembly Resolution 2 (I) of 1946, English and French are the official working languages of the United Nations Secretariat.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 7,
    questionText: "As of 2026, the United Nations has 193 member states. Which nation was admitted as the 193rd member state in July 2011?",
    options: {
      A: "Montenegro",
      B: "East Timor (Timor-Leste)",
      C: "South Sudan",
      D: "Kosovo"
    },
    correctAnswer: "C",
    correctAnswerText: "South Sudan",
    explanation: "The Republic of South Sudan became an independent country on 9 July 2011 and was officially admitted as the 193rd member state of the United Nations on 14 July 2011.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 8,
    questionText: "Which two entities hold the status of Permanent Observer Non-Member States at the United Nations General Assembly?",
    options: {
      A: "Holy See (Vatican City) and State of Palestine",
      B: "Taiwan and Kosovo",
      C: "Monaco and San Marino",
      D: "Greenland and Puerto Rico"
    },
    correctAnswer: "A",
    correctAnswerText: "Holy See (Vatican City) and State of Palestine",
    explanation: "The Holy See (Vatican City) has held permanent observer status since 1964. The State of Palestine was upgraded to Non-Member Observer State status by UNGA Resolution 67/19 on 29 November 2012.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 9,
    questionText: "Who served as the first elected Secretary-General of the United Nations from 1946 to 1952?",
    options: {
      A: "Dag Hammarskjöld (Sweden)",
      B: "Trygve Lie (Norway)",
      C: "U Thant (Burma)",
      D: "Kurt Waldheim (Austria)"
    },
    correctAnswer: "B",
    correctAnswerText: "Trygve Lie (Norway)",
    explanation: "Trygve Lie, a Norwegian politician and foreign minister, was elected as the first Secretary-General of the United Nations in February 1946, serving until his resignation in 1952.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 10,
    questionText: "Which UN Secretary-General died in a plane crash in Northern Rhodesia (now Zambia) in September 1961 while on a peace mission to the Congo, and was posthumously awarded the Nobel Peace Prize?",
    options: {
      A: "Trygve Lie",
      B: "Dag Hammarskjöld",
      C: "U Thant",
      D: "Javier Pérez de Cuéllar"
    },
    correctAnswer: "B",
    correctAnswerText: "Dag Hammarskjöld",
    explanation: "Dag Hammarskjöld of Sweden served as the second UN Secretary-General from 1953 until his tragic death in an airplane crash near Ndola in 1961. He was posthumously awarded the Nobel Peace Prize later that year.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 11,
    questionText: "Who was the first non-European and first Asian to serve as the Secretary-General of the United Nations (1961–1971)?",
    options: {
      A: "Ban Ki-moon",
      B: "Boutros Boutros-Ghali",
      C: "U Thant",
      D: "Kofi Annan"
    },
    correctAnswer: "C",
    correctAnswerText: "U Thant",
    explanation: "U Thant of Burma (now Myanmar) was appointed Acting Secretary-General following Hammarskjöld's death in 1961 and served two full terms until December 1971.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 12,
    questionText: "Who is the current Secretary-General of the United Nations, having first assumed office on 1 January 2017 after serving as Prime Minister of Portugal and UN High Commissioner for Refugees?",
    options: {
      A: "Ban Ki-moon",
      B: "António Guterres",
      C: "Kofi Annan",
      D: "Jens Stoltenberg"
    },
    correctAnswer: "B",
    correctAnswerText: "António Guterres",
    explanation: "António Guterres of Portugal was appointed the 9th Secretary-General of the UN on 1 January 2017 and was re-elected for a second five-year term running through 2026.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 13,
    questionText: "The United Nations Security Council (UNSC) consists of 15 members. How many are permanent veto-wielding members, and for how long are non-permanent members elected?",
    options: {
      A: "5 permanent members; non-permanent elected for 2 years",
      B: "5 permanent members; non-permanent elected for 3 years",
      C: "7 permanent members; non-permanent elected for 2 years",
      D: "10 permanent members; non-permanent elected for 1 year"
    },
    correctAnswer: "A",
    correctAnswerText: "5 permanent members; non-permanent elected for 2 years",
    explanation: "The UNSC has 5 permanent members (P5: China, France, Russia, United Kingdom, USA) who wield veto power, and 10 non-permanent members elected by the General Assembly for non-consecutive two-year terms.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 14,
    questionText: "How is the Presidency of the United Nations Security Council held and rotated among its 15 members?",
    options: {
      A: "Elected annually by a two-thirds majority in the General Assembly",
      B: "Rotates monthly among all 15 members in English alphabetical order",
      C: "Held permanently by the five permanent members on a yearly rotational basis",
      D: "Appointed directly by the UN Secretary-General"
    },
    correctAnswer: "B",
    correctAnswerText: "Rotates monthly among all 15 members in English alphabetical order",
    explanation: "The presidency of the UN Security Council rotates every month among its 15 members in the English alphabetical order of the member states' official names.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 15,
    questionText: "How many member nations compose the United Nations Economic and Social Council (ECOSOC), and what is their term of office?",
    options: {
      A: "25 members for 2-year terms",
      B: "35 members for 5-year terms",
      C: "54 members for 3-year terms",
      D: "60 members for 4-year terms"
    },
    correctAnswer: "C",
    correctAnswerText: "54 members for 3-year terms",
    explanation: "ECOSOC has 54 members elected by the UN General Assembly for overlapping 3-year terms, with 18 members elected each year based on geographical distribution.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 16,
    questionText: "Which of the six principal organs of the United Nations formally suspended its operations in November 1994 following the independence of Palau, the last remaining UN Trust Territory?",
    options: {
      A: "Economic and Social Council",
      B: "Trusteeship Council",
      C: "International Court of Justice",
      D: "Secretariat"
    },
    correctAnswer: "B",
    correctAnswerText: "Trusteeship Council",
    explanation: "The Trusteeship Council was established to oversee 11 trust territories transition to independence. When Palau gained independence in 1994, the Council suspended its active operations and now meets only on an as-needed basis.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 17,
    questionText: "In which city is the headquarters of the United Nations Educational, Scientific and Cultural Organization (UNESCO) located?",
    options: {
      A: "Geneva, Switzerland",
      B: "Paris, France",
      C: "Vienna, Austria",
      D: "Rome, Italy"
    },
    correctAnswer: "B",
    correctAnswerText: "Paris, France",
    explanation: "UNESCO, established in November 1945 to promote peace and security through education, science, and culture, is headquartered in Paris, France.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 18,
    questionText: "The World Health Organization (WHO) was established on 7 April 1948, a date now observed annually as World Health Day. Where is WHO headquartered?",
    options: {
      A: "Geneva, Switzerland",
      B: "New York, USA",
      C: "London, UK",
      D: "Copenhagen, Denmark"
    },
    correctAnswer: "A",
    correctAnswerText: "Geneva, Switzerland",
    explanation: "WHO is headquartered in Geneva, Switzerland. Its constitution came into effect on 7 April 1948, celebrated worldwide as World Health Day.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 19,
    questionText: "Which is the oldest specialized agency in the United Nations system, having been founded in 1919 under the Treaty of Versailles and awarded the Nobel Peace Prize in 1969?",
    options: {
      A: "Universal Postal Union (UPU)",
      B: "International Labour Organization (ILO)",
      C: "World Health Organization (WHO)",
      D: "Food and Agriculture Organization (FAO)"
    },
    correctAnswer: "B",
    correctAnswerText: "International Labour Organization (ILO)",
    explanation: "The International Labour Organization (ILO), headquartered in Geneva, was founded in 1919 as an agency of the League of Nations and became the UN's first specialized agency in 1946. It won the Nobel Peace Prize in 1969.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 20,
    questionText: "The Food and Agriculture Organization (FAO) was founded on 16 October 1945, a date marked globally as World Food Day. Where is the FAO headquartered?",
    options: {
      A: "Geneva, Switzerland",
      B: "The Hague, Netherlands",
      C: "Rome, Italy",
      D: "Vienna, Austria"
    },
    correctAnswer: "C",
    correctAnswerText: "Rome, Italy",
    explanation: "The FAO is headquartered in Rome, Italy. Founded in Quebec City, Canada on 16 October 1945, this date is observed worldwide as World Food Day.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 21,
    questionText: "Which Rome-based UN organization, established in 1961, is the world's largest humanitarian organization addressing hunger and was awarded the Nobel Peace Prize in 2020?",
    options: {
      A: "Food and Agriculture Organization (FAO)",
      B: "World Food Programme (WFP)",
      C: "International Fund for Agricultural Development (IFAD)",
      D: "UNICEF"
    },
    correctAnswer: "B",
    correctAnswerText: "World Food Programme (WFP)",
    explanation: "The World Food Programme (WFP), headquartered in Rome, Italy, was awarded the Nobel Peace Prize in 2020 for its efforts to combat hunger, prevent the use of hunger as a weapon of war, and foster peace in conflict areas.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 22,
    questionText: "Where is the United Nations Children's Fund (UNICEF), which was created in 1946 and won the Nobel Peace Prize in 1965, headquartered?",
    options: {
      A: "Geneva, Switzerland",
      B: "New York City, USA",
      C: "Paris, France",
      D: "Vienna, Austria"
    },
    correctAnswer: "B",
    correctAnswerText: "New York City, USA",
    explanation: "UNICEF was established by the UN General Assembly in December 1946 to provide relief to children in post-war Europe and China. It is headquartered in New York City.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 23,
    questionText: "Which United Nations agency, headquartered in Geneva, Switzerland, has been awarded the Nobel Peace Prize twice (in 1954 and 1981)?",
    options: {
      A: "International Labour Organization (ILO)",
      B: "United Nations High Commissioner for Refugees (UNHCR)",
      C: "World Health Organization (WHO)",
      D: "United Nations Development Programme (UNDP)"
    },
    correctAnswer: "B",
    correctAnswerText: "United Nations High Commissioner for Refugees (UNHCR)",
    explanation: "The UN Refugee Agency (UNHCR), established in December 1950 and based in Geneva, Switzerland, received the Nobel Peace Prize in both 1954 and 1981 for its assistance to refugees worldwide.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 24,
    questionText: "The International Atomic Energy Agency (IAEA) was established in 1957 following US President Dwight D. Eisenhower's 'Atoms for Peace' address. Where is its headquarters?",
    options: {
      A: "Brussels, Belgium",
      B: "Geneva, Switzerland",
      C: "Vienna, Austria",
      D: "The Hague, Netherlands"
    },
    correctAnswer: "C",
    correctAnswerText: "Vienna, Austria",
    explanation: "The IAEA is headquartered at the Vienna International Centre in Vienna, Austria. It promotes peaceful nuclear technology and enforces non-proliferation safeguards, winning the Nobel Peace Prize in 2005.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 25,
    questionText: "Which specialized agency of the United Nations is responsible for regulating shipping, maritime safety, and preventing marine pollution, and is headquartered in London, UK?",
    options: {
      A: "International Maritime Organization (IMO)",
      B: "International Seabed Authority (ISA)",
      C: "World Customs Organization (WCO)",
      D: "United Nations Conference on Trade and Development (UNCTAD)"
    },
    correctAnswer: "A",
    correctAnswerText: "International Maritime Organization (IMO)",
    explanation: "The International Maritime Organization (IMO) was established in 1948 in Geneva as IMCO and began operating in 1958. It is headquartered in London, United Kingdom.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 26,
    questionText: "In which city is the International Civil Aviation Organization (ICAO), established by the 1944 Chicago Convention, headquartered?",
    options: {
      A: "Geneva, Switzerland",
      B: "Montreal, Canada",
      C: "Washington, D.C., USA",
      D: "Paris, France"
    },
    correctAnswer: "B",
    correctAnswerText: "Montreal, Canada",
    explanation: "The ICAO is headquartered in the Quartier International of Montreal, Quebec, Canada. It establishes international standards and recommended practices for civil air navigation.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 27,
    questionText: "The Universal Postal Union (UPU), established in 1874 by the Treaty of Bern to coordinate international postal policies, has its headquarters in which city?",
    options: {
      A: "Geneva, Switzerland",
      B: "Bern, Switzerland",
      C: "Zurich, Switzerland",
      D: "Brussels, Belgium"
    },
    correctAnswer: "B",
    correctAnswerText: "Bern, Switzerland",
    explanation: "The UPU, founded in 1874, is the second-oldest international organization in the world and has maintained its headquarters in Bern, Switzerland since its establishment.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 28,
    questionText: "Founded in Paris in 1865 as the International Telegraph Union, which organization is the oldest specialized agency within the UN system today?",
    options: {
      A: "Universal Postal Union (UPU)",
      B: "International Telecommunication Union (ITU)",
      C: "World Meteorological Organization (WMO)",
      D: "International Maritime Organization (IMO)"
    },
    correctAnswer: "B",
    correctAnswerText: "International Telecommunication Union (ITU)",
    explanation: "The International Telecommunication Union (ITU) was established on 17 May 1865 in Paris and is headquartered in Geneva, Switzerland. It coordinates global radio spectrums and telecommunications.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Medium"
  },
  {
    questionId: 29,
    questionText: "The United Nations Environment Programme (UNEP) was founded in 1972 following the landmark Stockholm Conference on the Human Environment. Where is UNEP headquartered?",
    options: {
      A: "Geneva, Switzerland",
      B: "Nairobi, Kenya",
      C: "Bonn, Germany",
      D: "Rio de Janeiro, Brazil"
    },
    correctAnswer: "B",
    correctAnswerText: "Nairobi, Kenya",
    explanation: "UNEP is headquartered in Nairobi, Kenya (at the Gigiri compound). It made history as the first United Nations agency to be headquartered in a developing nation / Global South.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },
  {
    questionId: 30,
    questionText: "The World Intellectual Property Organization (WIPO) and the World Meteorological Organization (WMO) are both headquartered in which international city?",
    options: {
      A: "Vienna, Austria",
      B: "Geneva, Switzerland",
      C: "The Hague, Netherlands",
      D: "Brussels, Belgium"
    },
    correctAnswer: "B",
    correctAnswerText: "Geneva, Switzerland",
    explanation: "Both WIPO (administering intellectual property treaties) and WMO (weather, climate, and water) are headquartered in Geneva, Switzerland.",
    subCategory: "United Nations & Specialized Agencies",
    difficulty: "Easy"
  },

  // --- SUBCATEGORY 2: Regional Alliances & Political Blocs (Q31 - Q50) ---
  {
    questionId: 31,
    questionText: "The North Atlantic Treaty Organization (NATO) was established on 4 April 1949 with the signing of the Washington Treaty by 12 founding nations. Where is NATO's political headquarters located?",
    options: {
      A: "Washington, D.C., USA",
      B: "London, United Kingdom",
      C: "Brussels, Belgium",
      D: "Paris, France"
    },
    correctAnswer: "C",
    correctAnswerText: "Brussels, Belgium",
    explanation: "NATO moved its political headquarters to Brussels, Belgium in 1967 (after France withdrew from the integrated military command and NATO vacated Paris). Its military headquarters (SHAPE) is in Mons, Belgium.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 32,
    questionText: "Under which Article of the North Atlantic Treaty do NATO members pledge that an armed attack against one or more of them shall be considered an attack against them all?",
    options: {
      A: "Article 3",
      B: "Article 4",
      C: "Article 5",
      D: "Article 10"
    },
    correctAnswer: "C",
    correctAnswerText: "Article 5",
    explanation: "Article 5 is NATO's collective defense clause. It has been invoked only once in NATO history: following the September 11, 2001 terrorist attacks on the United States.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 33,
    questionText: "In 2023 and 2024, NATO expanded to 32 member states. Which two Nordic countries joined as the 31st and 32nd members respectively?",
    options: {
      A: "Sweden (31st) and Finland (32nd)",
      B: "Finland (31st) and Sweden (32nd)",
      C: "Norway (31st) and Sweden (32nd)",
      D: "Finland (31st) and Ukraine (32nd)"
    },
    correctAnswer: "B",
    correctAnswerText: "Finland (31st) and Sweden (32nd)",
    explanation: "Finland officially joined NATO as the 31st member on 4 April 2023 (doubling NATO's border with Russia), and Sweden joined as the 32nd member on 7 March 2024, ending two centuries of neutrality.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 34,
    questionText: "Which military alliance was created in 1955 by the Soviet Union and seven Eastern European satellite states as a direct Cold War counterweight to NATO, and dissolved in 1991?",
    options: {
      A: "The Warsaw Pact",
      B: "The COMECON",
      C: "The Cominform",
      D: "The Brest-Litovsk Alliance"
    },
    correctAnswer: "A",
    correctAnswerText: "The Warsaw Pact",
    explanation: "The Warsaw Treaty Organization (Warsaw Pact) was signed on 14 May 1955 in Warsaw, Poland, in reaction to West Germany joining NATO. It was formally dissolved on 1 July 1991 in Prague.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 35,
    questionText: "Which landmark 1992 treaty formally established the European Union (EU) and laid the foundation for the single European currency (the Euro)?",
    options: {
      A: "Treaty of Rome",
      B: "Treaty of Paris",
      C: "Maastricht Treaty",
      D: "Treaty of Lisbon"
    },
    correctAnswer: "C",
    correctAnswerText: "Maastricht Treaty",
    explanation: "The Treaty on European Union, commonly known as the Maastricht Treaty, was signed on 7 February 1992 in Maastricht, Netherlands, and entered into force on 1 November 1993, formally establishing the European Union.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 36,
    questionText: "The Schengen Agreement, signed in 1985 in a town in Luxembourg, is world-famous for creating which of the following?",
    options: {
      A: "A joint European military rapid reaction corps",
      B: "An area abolishing internal border checks and passport controls across most European nations",
      C: "The European Central Bank",
      D: "The Common Agricultural Policy"
    },
    correctAnswer: "B",
    correctAnswerText: "An area abolishing internal border checks and passport controls across most European nations",
    explanation: "The Schengen Agreement abolished internal border checks among participating European countries, allowing free and unrestricted movement of people across the Schengen Area.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 37,
    questionText: "In which German city is the headquarters of the European Central Bank (ECB), responsible for monetary policy across the Eurozone, located?",
    options: {
      A: "Berlin",
      B: "Frankfurt am Main",
      C: "Munich",
      D: "Hamburg"
    },
    correctAnswer: "B",
    correctAnswerText: "Frankfurt am Main",
    explanation: "The European Central Bank (ECB) is headquartered in Frankfurt am Main, Germany. It manages the Euro currency and frames monetary policy for EU member states that use the Euro.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 38,
    questionText: "On which date did the United Kingdom formally withdraw from the European Union (Brexit), following the historic 2016 referendum, reducing the EU to 27 member states?",
    options: {
      A: "23 June 2016",
      B: "29 March 2019",
      C: "31 January 2020",
      D: "31 December 2020"
    },
    correctAnswer: "C",
    correctAnswerText: "31 January 2020",
    explanation: "The UK officially departed from the European Union at 23:00 GMT on 31 January 2020 under the EU Withdrawal Agreement, concluding 47 years of membership.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 39,
    questionText: "The Shanghai Cooperation Organisation (SCO) was established in 2001 in Shanghai. Where is the SCO Secretariat headquartered, and where is its Regional Anti-Terrorist Structure (RATS) located?",
    options: {
      A: "Secretariat in Shanghai; RATS in Beijing",
      B: "Secretariat in Beijing; RATS in Tashkent",
      C: "Secretariat in Moscow; RATS in Almaty",
      D: "Secretariat in Astana; RATS in Bishkek"
    },
    correctAnswer: "B",
    correctAnswerText: "Secretariat in Beijing; RATS in Tashkent",
    explanation: "The SCO's permanent administrative Secretariat is located in Beijing, China, while its executive committee of the Regional Anti-Terrorist Structure (RATS) is based in Tashkent, Uzbekistan.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 40,
    questionText: "On which date did Pakistan and India simultaneously become full permanent members of the Shanghai Cooperation Organisation (SCO) at the Astana Summit in Kazakhstan?",
    options: {
      A: "15 June 2001",
      B: "9 June 2017",
      C: "14 July 2019",
      D: "24 February 2022"
    },
    correctAnswer: "B",
    correctAnswerText: "9 June 2017",
    explanation: "Pakistan and India, previously observer states, were formally admitted as full members of the SCO on 9 June 2017 at the 17th Heads of State Council Summit in Astana, Kazakhstan.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 41,
    questionText: "Which two countries joined the Shanghai Cooperation Organisation (SCO) as its 9th and 10th full members in July 2023 and July 2024 respectively?",
    options: {
      A: "Turkey (2023) and Iran (2024)",
      B: "Iran (2023) and Belarus (2024)",
      C: "Afghanistan (2023) and Mongolia (2024)",
      D: "Armenia (2023) and Azerbaijan (2024)"
    },
    correctAnswer: "B",
    correctAnswerText: "Iran (2023) and Belarus (2024)",
    explanation: "The Islamic Republic of Iran officially joined SCO as its 9th member on 4 July 2023, and the Republic of Belarus was admitted as the 10th full member on 4 July 2024 at the Astana Summit.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 42,
    questionText: "On 1 January 2024, the BRICS alliance underwent a historic expansion. Which four nations officially joined founding members Brazil, Russia, India, China, and South Africa on this date?",
    options: {
      A: "Argentina, Mexico, Turkey, and Nigeria",
      B: "Egypt, Ethiopia, Iran, and the United Arab Emirates (UAE)",
      C: "Saudi Arabia, Pakistan, Bangladesh, and Indonesia",
      D: "Algeria, Kenya, Vietnam, and Venezuela"
    },
    correctAnswer: "B",
    correctAnswerText: "Egypt, Ethiopia, Iran, and the United Arab Emirates (UAE)",
    explanation: "Following decisions at the 2023 Johannesburg Summit, Egypt, Ethiopia, Iran, and the UAE formally became BRICS members on 1 January 2024 (Argentina declined after elections).",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 43,
    questionText: "The South Asian Association for Regional Cooperation (SAARC) was established on 8 December 1985 in Dhaka. Where is the SAARC Secretariat located, and which country joined as its 8th member in 2007?",
    options: {
      A: "Secretariat in Islamabad; Myanmar joined in 2007",
      B: "Secretariat in Kathmandu; Afghanistan joined in 2007",
      C: "Secretariat in New Delhi; Maldives joined in 2007",
      D: "Secretariat in Colombo; Iran joined in 2007"
    },
    correctAnswer: "B",
    correctAnswerText: "Secretariat in Kathmandu; Afghanistan joined in 2007",
    explanation: "The SAARC Secretariat is located in Kathmandu, Nepal. Afghanistan was admitted as SAARC's 8th member state at the 14th SAARC Summit in New Delhi in April 2007.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 44,
    questionText: "The Organisation of Islamic Cooperation (OIC), comprising 57 member states, was founded in September 1969 in Rabat, Morocco. Where is the General Secretariat of the OIC located?",
    options: {
      A: "Riyadh, Saudi Arabia",
      B: "Jeddah, Saudi Arabia",
      C: "Cairo, Egypt",
      D: "Abu Dhabi, UAE"
    },
    correctAnswer: "B",
    correctAnswerText: "Jeddah, Saudi Arabia",
    explanation: "The OIC was founded following the criminal arson attack on Al-Aqsa Mosque in Jerusalem in August 1969. Its permanent General Secretariat is headquartered in Jeddah, Saudi Arabia.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 45,
    questionText: "The historic 2nd Islamic Summit Conference of the OIC, which brought together prominent Muslim world leaders including King Faisal, Muammar Gaddafi, and Yasser Arafat, was hosted in February 1974 in which Pakistani city?",
    options: {
      A: "Karachi",
      B: "Islamabad",
      C: "Lahore",
      D: "Rawalpindi"
    },
    correctAnswer: "C",
    correctAnswerText: "Lahore",
    explanation: "The 2nd Islamic Summit of the OIC was hosted by Pakistani Prime Minister Zulfikar Ali Bhutto in Lahore, Pakistan from 22 to 24 February 1974, leading to Pakistan's formal recognition of Bangladesh.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 46,
    questionText: "The Economic Cooperation Organization (ECO) was established in 1985 in Tehran by Iran, Pakistan, and Turkey as the successor to which 1964 regional alliance?",
    options: {
      A: "CENTO (Central Treaty Organization)",
      B: "RCD (Regional Cooperation for Development)",
      C: "SEATO (Southeast Asia Treaty Organization)",
      D: "Baghdad Pact"
    },
    correctAnswer: "B",
    correctAnswerText: "RCD (Regional Cooperation for Development)",
    explanation: "The ECO succeeded the Regional Cooperation for Development (RCD, established 1964). In 1992, the ECO expanded to 10 members by including Afghanistan and six Central Asian and Caucasian republics.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Medium"
  },
  {
    questionId: 47,
    questionText: "The Association of Southeast Asian Nations (ASEAN) was established on 8 August 1967 via the Bangkok Declaration by five founding nations. Where is the ASEAN Secretariat located?",
    options: {
      A: "Singapore",
      B: "Bangkok, Thailand",
      C: "Jakarta, Indonesia",
      D: "Kuala Lumpur, Malaysia"
    },
    correctAnswer: "C",
    correctAnswerText: "Jakarta, Indonesia",
    explanation: "ASEAN was founded in Bangkok by Indonesia, Malaysia, Philippines, Singapore, and Thailand. Its permanent central Secretariat is situated in Jakarta, Indonesia.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 48,
    questionText: "The League of Arab States (Arab League) was formed in March 1945 by six founding nations. In which city is its headquarters permanently established?",
    options: {
      A: "Riyadh, Saudi Arabia",
      B: "Cairo, Egypt",
      C: "Damascus, Syria",
      D: "Baghdad, Iraq"
    },
    correctAnswer: "B",
    correctAnswerText: "Cairo, Egypt",
    explanation: "The Arab League was formed in Cairo on 22 March 1945. It is headquartered in Cairo, Egypt (except for a brief period between 1979 and 1990 when it moved to Tunis following Egypt-Israel peace).",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 49,
    questionText: "The African Union (AU), comprising 55 member states, was officially launched in July 2002 in Durban, South Africa, succeeding the OAU. In which capital city is the AU headquartered?",
    options: {
      A: "Pretoria, South Africa",
      B: "Nairobi, Kenya",
      C: "Addis Ababa, Ethiopia",
      D: "Accra, Ghana"
    },
    correctAnswer: "C",
    correctAnswerText: "Addis Ababa, Ethiopia",
    explanation: "The African Union is headquartered in Addis Ababa, Ethiopia. In September 2023, the African Union was admitted as a permanent member of the G20 at the New Delhi Summit.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  },
  {
    questionId: 50,
    questionText: "The Cooperation Council for the Arab States of the Gulf (GCC) was established in May 1981 by 6 Arabian Gulf monarchies. Where is the GCC Secretariat General located?",
    options: {
      A: "Abu Dhabi, UAE",
      B: "Doha, Qatar",
      C: "Riyadh, Saudi Arabia",
      D: "Kuwait City, Kuwait"
    },
    correctAnswer: "C",
    correctAnswerText: "Riyadh, Saudi Arabia",
    explanation: "The GCC was established in Abu Dhabi on 25 May 1981 by Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and the UAE. Its permanent Secretariat General is located in Riyadh, Saudi Arabia.",
    subCategory: "Regional Alliances & Political Blocs",
    difficulty: "Easy"
  }
];

fs.writeFileSync('scratch/world_org_part1.json', JSON.stringify(part1, null, 2), 'utf8');
console.log('Part 1 saved successfully! Total questions:', part1.length);
