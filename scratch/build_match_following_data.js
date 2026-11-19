const fs = require('fs');

const MATCH_DATA = {
  // 1. COUNTRIES & CAPITALS
  countries_capitals: [
    {
      left: "Pakistan",
      right: "Islamabad",
      hint: "South Asia • Planned federal capital built in the 1960s at the foot of the Margalla Hills.",
      examFact: "Replaced Karachi (and transitional Rawalpindi) as federal capital; designed by Konstantinos Doxiadis."
    },
    {
      left: "Turkey",
      right: "Ankara",
      hint: "Eurasia • Central Anatolian plateau city chosen by Atatürk in 1923.",
      examFact: "Replaced Istanbul (Constantinople) in 1923; seat of the Grand National Assembly."
    },
    {
      left: "Australia",
      right: "Canberra",
      hint: "Oceania • Planned inland capital selected as compromise between Sydney and Melbourne.",
      examFact: "Located in Australian Capital Territory (ACT); designed by Walter Burley Griffin."
    },
    {
      left: "Canada",
      right: "Ottawa",
      hint: "North America • Confluence of Ottawa and Rideau rivers on Ontario-Quebec border.",
      examFact: "Selected by Queen Victoria in 1857 as a defensible inland location away from the US border."
    },
    {
      left: "Brazil",
      right: "Brasília",
      hint: "South America • Planned modern capital in the central highlands designed in an airplane shape.",
      examFact: "Inaugurated in 1960 by President Juscelino Kubitschek; architecture by Oscar Niemeyer."
    },
    {
      left: "Egypt",
      right: "Cairo",
      hint: "North Africa • Spans the Nile River right above its Mediterranean delta.",
      examFact: "Known as the 'City of a Thousand Minarets'; largest metropolitan area in Africa and the Arab world."
    },
    {
      left: "South Africa",
      right: "Pretoria (Executive)",
      hint: "Southern Africa • Administrative seat of the President and Cabinet at the Union Buildings.",
      examFact: "South Africa has 3 capitals: Pretoria (Executive), Cape Town (Legislative), Bloemfontein (Judicial)."
    },
    {
      left: "Japan",
      right: "Tokyo",
      hint: "East Asia • Pacific coast of Honshu on Tokyo Bay; formerly known as Edo.",
      examFact: "World's most populous metropolitan area (~37M people); became imperial capital in 1868."
    },
    {
      left: "Kazakhstan",
      right: "Astana",
      hint: "Central Asia • Modern planned capital on the Ishim River in the northern steppes.",
      examFact: "Replaced Almaty as capital in 1997; briefly renamed Nur-Sultan (2019–2022) before reverting to Astana."
    },
    {
      left: "Argentina",
      right: "Buenos Aires",
      hint: "South America • Major Atlantic port city on the western shore of the Río de la Plata.",
      examFact: "Home to the Casa Rosada (Pink House) presidential palace; autonomous federal district."
    },
    {
      left: "Germany",
      right: "Berlin",
      hint: "Western Europe • On the Spree River; divided during the Cold War by the Berlin Wall.",
      examFact: "Reunited capital in 1990; seat of the Bundestag (Reichstag) and Chancellor."
    },
    {
      left: "Saudi Arabia",
      right: "Riyadh",
      hint: "Middle East • Historic Najd plateau in the center of the Arabian Peninsula.",
      examFact: "Headquarters of the Gulf Cooperation Council (GCC); commercial heart of the Kingdom."
    },
    {
      left: "China",
      right: "Beijing",
      hint: "East Asia • Northern tip of the North China Plain; ancient imperial seat.",
      examFact: "Home to the Forbidden City and Tiananmen Square; host of 2008 & 2022 Olympic Games."
    },
    {
      left: "Russia",
      right: "Moscow",
      hint: "Eastern Europe • Along the Moskva River in the European portion of the Federation.",
      examFact: "Most populous city entirely in Europe; seat of power at the Kremlin fortress."
    },
    {
      left: "France",
      right: "Paris",
      hint: "Western Europe • Sits along the Seine River in the north-central Paris Basin.",
      examFact: "Known as the 'City of Light'; global headquarters of UNESCO and OECD."
    },
    {
      left: "Italy",
      right: "Rome",
      hint: "Southern Europe • On the Tiber River; entirely surrounds the Vatican City enclave.",
      examFact: "Known as the 'Eternal City'; capital of the ancient Roman Empire and unified Italy (1871)."
    },
    {
      left: "Spain",
      right: "Madrid",
      hint: "Southern Europe • Geographic center of the Iberian Peninsula on the high Meseta plateau.",
      examFact: "Second-largest municipality in the European Union; seat of the Spanish monarchy."
    },
    {
      left: "India",
      right: "New Delhi",
      hint: "South Asia • Northern Indo-Gangetic plain along the Yamuna River.",
      examFact: "Capital shifted from Calcutta in 1911; designed by British architect Sir Edwin Lutyens."
    },
    {
      left: "Indonesia",
      right: "Jakarta",
      hint: "Southeast Asia • Northwest coast of Java island; ASEAN Secretariat headquarters.",
      examFact: "Being replaced by Nusantara in East Kalimantan due to rapid land subsidence."
    },
    {
      left: "Iran",
      right: "Tehran",
      hint: "Middle East • Foot of the Alborz mountain range south of the Caspian Sea.",
      examFact: "Capital of Iran since 1796 during the Qajar Dynasty; largest city in Western Asia."
    },
    {
      left: "United Kingdom",
      right: "London",
      hint: "Western Europe • On the River Thames; Prime Meridian passes through Greenwich.",
      examFact: "Seat of the UK Parliament at Westminster; global financial and maritime hub."
    },
    {
      left: "United States",
      right: "Washington, D.C.",
      hint: "North America • Federal district on the Potomac River between Maryland and Virginia.",
      examFact: "Established in 1790; seat of US Federal government, World Bank, and IMF."
    },
    {
      left: "Nigeria",
      right: "Abuja",
      hint: "West Africa • Centrally located planned capital dominated by Zuma Rock.",
      examFact: "Replaced Lagos as capital in 1991 to maintain ethnic neutrality in Nigeria."
    },
    {
      left: "Kenya",
      right: "Nairobi",
      hint: "East Africa • Elevated plateau city; headquarters of UNEP and UN-Habitat.",
      examFact: "Only global city containing a free-ranging wildlife national park within its borders."
    },
    {
      left: "Mexico",
      right: "Mexico City",
      hint: "North America • Valley of Mexico high plateau, built on ancient Aztec Tenochtitlan.",
      examFact: "Most populous Spanish-speaking city on Earth; built on the dry lakebed of Lake Texcoco."
    },
    {
      left: "Thailand",
      right: "Bangkok",
      hint: "Southeast Asia • Delta of the Chao Phraya River near the Gulf of Thailand.",
      examFact: "Known locally as Krung Thep; ceremonial name is world's longest place name."
    },
    {
      left: "Vietnam",
      right: "Hanoi",
      hint: "Southeast Asia • Red River delta in northern Vietnam; ancient Thang Long.",
      examFact: "Second-largest city in Vietnam after Ho Chi Minh City; historic French-colonial quarter."
    },
    {
      left: "South Korea",
      right: "Seoul",
      hint: "East Asia • On the Han River; located only 50 km south of the DMZ.",
      examFact: "Houses half of South Korea's total population in its metropolitan area."
    },
    {
      left: "Bangladesh",
      right: "Dhaka",
      hint: "South Asia • Buriganga River in the center of the Bengal Delta.",
      examFact: "Known as the 'City of Mosques'; prominent global textile manufacturing capital."
    },
    {
      left: "Switzerland",
      right: "Bern",
      hint: "Central Europe • Loops along the Aare River; federal city of the Swiss Confederation.",
      examFact: "De facto capital (Federal City) of Switzerland; home to Universal Postal Union (UPU)."
    }
  ],

  // 2. ORGANIZATIONS & HEADQUARTERS
  orgs_headquarters: [
    {
      left: "United Nations (UN)",
      right: "New York, USA",
      hint: "Global intergovernmental organization founded in 1945 by 51 founding states.",
      examFact: "UN Headquarters sits on international territory along the East River in Manhattan, New York."
    },
    {
      left: "International Court of Justice (ICJ)",
      right: "The Hague, Netherlands",
      hint: "Principal judicial organ of the UN; sits at the historic Peace Palace.",
      examFact: "The only one of the six principal organs of the UN located outside New York."
    },
    {
      left: "World Health Organization (WHO)",
      right: "Geneva, Switzerland",
      hint: "UN specialized agency responsible for international public health.",
      examFact: "Established on 7 April 1948 (celebrated annually as World Health Day); based in Geneva."
    },
    {
      left: "International Monetary Fund (IMF)",
      right: "Washington, D.C., USA",
      hint: "Bretton Woods institution founded in 1944 to ensure global exchange rate stability.",
      examFact: "Creates Special Drawing Rights (SDRs); traditional leadership held by a European."
    },
    {
      left: "World Bank Group",
      right: "Washington, D.C., USA",
      hint: "Bretton Woods sister institution providing loans and grants to developing countries.",
      examFact: "Comprises IBRD and IDA; traditional presidency held by a US citizen (currently Ajay Banga)."
    },
    {
      left: "World Trade Organization (WTO)",
      right: "Geneva, Switzerland",
      hint: "Regulates international trade rules; established in 1995 succeeding GATT.",
      examFact: "Formed under the 1994 Marrakesh Agreement; headquartered at Centre William Rappard in Geneva."
    },
    {
      left: "UNESCO",
      right: "Paris, France",
      hint: "UN agency for Education, Science, Culture, and World Heritage sites.",
      examFact: "Founded in November 1945; manages the World Heritage Convention of 1972 from Paris."
    },
    {
      left: "NATO",
      right: "Brussels, Belgium",
      hint: "North Atlantic military alliance founded under the 1949 Washington Treaty.",
      examFact: "Operates on the collective defense doctrine enshrined in Article 5; based in Brussels."
    },
    {
      left: "European Union (EU)",
      right: "Brussels, Belgium",
      hint: "27-nation political and economic union; European Commission and Council seat.",
      examFact: "Brussels is de facto EU capital; European Parliament holds plenary sessions in Strasbourg."
    },
    {
      left: "International Atomic Energy Agency (IAEA)",
      right: "Vienna, Austria",
      hint: "Autonomous intergovernmental forum for nuclear cooperation and non-proliferation.",
      examFact: "Established in 1957 following Eisenhower's 'Atoms for Peace' address; located at Vienna International Centre."
    },
    {
      left: "OPEC",
      right: "Vienna, Austria",
      hint: "Organization of Petroleum Exporting Countries founded in Baghdad in 1960.",
      examFact: "Headquarters moved from Geneva to Vienna in 1965, despite Austria not being an OPEC member."
    },
    {
      left: "International Labour Organization (ILO)",
      right: "Geneva, Switzerland",
      hint: "Tripartite UN agency (governments, employers, workers) founded under 1919 Versailles Treaty.",
      examFact: "Oldest specialized agency of the UN; awarded the Nobel Peace Prize in 1969."
    },
    {
      left: "Food and Agriculture Organization (FAO)",
      right: "Rome, Italy",
      hint: "UN agency leading international efforts to defeat hunger and improve nutrition.",
      examFact: "Founded in Quebec in 1945; headquarters established in Rome, Italy in 1951."
    },
    {
      left: "International Civil Aviation Organization (ICAO)",
      right: "Montreal, Canada",
      hint: "UN specialized agency that coordinates international air navigation principles.",
      examFact: "Created under the 1944 Chicago Convention on International Civil Aviation; based in Montreal."
    },
    {
      left: "Universal Postal Union (UPU)",
      right: "Bern, Switzerland",
      hint: "Coordinates postal policies among member nations; founded in 1874.",
      examFact: "Established by the Treaty of Bern in 1874; second oldest international organization."
    },
    {
      left: "International Maritime Organization (IMO)",
      right: "London, United Kingdom",
      hint: "UN specialized agency responsible for regulating shipping safety and pollution.",
      examFact: "Established in Geneva in 1948 and entered into force in 1958; operates from London."
    },
    {
      left: "Commonwealth of Nations",
      right: "London, United Kingdom",
      hint: "56-member voluntary association mostly of former territories of the British Empire.",
      examFact: "Headquartered at Marlborough House in London; King Charles III is the ceremonial Head."
    },
    {
      left: "Shanghai Cooperation Organisation (SCO)",
      right: "Beijing, China",
      hint: "Eurasian political, economic, and security alliance formed in 2001.",
      examFact: "Permanent Secretariat is in Beijing; RATS (Anti-Terrorist Structure) is based in Tashkent, Uzbekistan."
    },
    {
      left: "ASEAN",
      right: "Jakarta, Indonesia",
      hint: "10-member Association of Southeast Asian Nations founded in Bangkok in 1967.",
      examFact: "Secretariat inaugurated in Jakarta in 1976; operates on the 'ASEAN Way' consensus principle."
    },
    {
      left: "SAARC",
      right: "Kathmandu, Nepal",
      hint: "South Asian Association for Regional Cooperation established in Dhaka in 1985.",
      examFact: "Secretariat established in Kathmandu in January 1987; 8 member nations."
    },
    {
      left: "Economic Cooperation Organization (ECO)",
      right: "Tehran, Iran",
      hint: "Eurasian regional bloc founded in 1985 by Iran, Pakistan, and Turkey (successor to RCD).",
      examFact: "Expanded in 1992 to include 7 Central Asian and Caucasian states; Secretariat in Tehran."
    },
    {
      left: "Organization of Islamic Cooperation (OIC)",
      right: "Jeddah, Saudi Arabia",
      hint: "Collective voice of the Muslim world (57 member states) founded in Rabat in 1969.",
      examFact: "General Secretariat based in Jeddah; charter designates Al-Quds (Jerusalem) as permanent HQ."
    },
    {
      left: "African Union (AU)",
      right: "Addis Ababa, Ethiopia",
      hint: "Continental union of 55 African member states; successor to the OAU.",
      examFact: "Headquarters located at the AU Conference Center in Addis Ababa, Ethiopia; joined G20 in 2023."
    },
    {
      left: "Arab League",
      right: "Cairo, Egypt",
      hint: "Regional alliance of 22 Arab countries formed in Cairo in March 1945.",
      examFact: "Formed under the Alexandria Protocol; permanent headquarters located at Tahrir Square in Cairo."
    },
    {
      left: "Asian Development Bank (ADB)",
      right: "Manila, Philippines",
      hint: "Regional development bank established in 1966 to foster economic growth in Asia.",
      examFact: "Japan and the US hold the largest voting shares; headquarters based in Mandaluyong, Manila."
    },
    {
      left: "Asian Infrastructure Investment Bank (AIIB)",
      right: "Beijing, China",
      hint: "Multilateral development bank initiated by China, commenced operations in 2016.",
      examFact: "Key institutional pillar for regional connectivity and the Belt and Road Initiative; based in Beijing."
    },
    {
      left: "INTERPOL",
      right: "Lyon, France",
      hint: "International Criminal Police Organization facilitating worldwide police cooperation.",
      examFact: "Founded in Vienna in 1923; moved headquarters to Lyon, France in 1989; 196 member countries."
    },
    {
      left: "International Criminal Court (ICC)",
      right: "The Hague, Netherlands",
      hint: "Permanent international tribunal investigating genocide, war crimes, and crimes against humanity.",
      examFact: "Governed by the 1998 Rome Statute; distinct and separate from the UN International Court of Justice."
    },
    {
      left: "Bank for International Settlements (BIS)",
      right: "Basel, Switzerland",
      hint: "Bank for central banks; promotes monetary and financial stability.",
      examFact: "World's oldest international financial institution (founded 1930); authors the Basel Accords."
    },
    {
      left: "Amnesty International",
      right: "London, United Kingdom",
      hint: "Global non-governmental human rights organization founded by Peter Benenson in 1961.",
      examFact: "Awarded the 1977 Nobel Peace Prize for defending human dignity; International Secretariat in London."
    }
  ],

  // 3. RIVERS & COUNTRIES
  rivers_countries: [
    {
      left: "Indus River",
      right: "Pakistan",
      hint: "National river and agricultural lifeline; flows from Tibet through Ladakh into the Arabian Sea.",
      examFact: "3,180 km long; governed by the 1960 Indus Waters Treaty; sustains Tarbela Dam and vast irrigation canals."
    },
    {
      left: "Nile River",
      right: "Egypt",
      hint: "Historically celebrated as the longest river in the world; flows northward into the Mediterranean.",
      examFact: "6,650 km; fed by the White Nile and Blue Nile; ancient Greek historian Herodotus called Egypt 'the gift of the Nile'."
    },
    {
      left: "Amazon River",
      right: "Brazil",
      hint: "World's largest river by discharge volume; flows across the northern South American rainforest.",
      examFact: "Accounts for roughly 20% of global river discharge into the oceans; holds no bridges across its main stem."
    },
    {
      left: "Yangtze River (Chang Jiang)",
      right: "China",
      hint: "Longest river in Asia and 3rd longest in the world (6,300 km); home to Three Gorges Dam.",
      examFact: "Flows entirely within China from the Tibetan Plateau to the East China Sea near Shanghai."
    },
    {
      left: "Mississippi River",
      right: "United States",
      hint: "Major river of North America flowing south into the Gulf of Mexico past New Orleans.",
      examFact: "With the Missouri tributary, forms the world's 4th longest river system (6,275 km)."
    },
    {
      left: "Danube River",
      right: "Germany",
      hint: "Originates in the Black Forest of Germany and flows eastward through 10 countries to the Black Sea.",
      examFact: "Europe's second-longest river (2,850 km); touches more capital cities than any river (Vienna, Bratislava, Budapest, Belgrade)."
    },
    {
      left: "Ganges River (Ganga)",
      right: "India",
      hint: "Sacred Himalayan river flowing across the northern plain to form the Sundarbans delta.",
      examFact: "Combines with Brahmaputra and Meghna; Sundarbans is the world's largest delta and mangrove forest."
    },
    {
      left: "Volga River",
      right: "Russia",
      hint: "Longest river in Europe (3,530 km); flows through central Russia into the inland Caspian Sea.",
      examFact: "National river of Russia; forms an entirely endorheic drainage basin emptying into the Caspian."
    },
    {
      left: "Thames River",
      right: "United Kingdom",
      hint: "Flows through southern England directly through central London into the North Sea.",
      examFact: "346 km long; famous for the Thames Barrier protecting London against tidal surge flooding."
    },
    {
      left: "Seine River",
      right: "France",
      hint: "Commercial waterway curving through the center of Paris on its way to the English Channel at Le Havre.",
      examFact: "Historical islands Île de la Cité and Île Saint-Louis are located in its waters in central Paris."
    },
    {
      left: "Tiber River",
      right: "Italy",
      hint: "Third-longest river in Italy; historically celebrated as the river upon which ancient Rome was founded.",
      examFact: "Rome was founded on its eastern banks in 753 BCE; flows into the Tyrrhenian Sea at Ostia."
    },
    {
      left: "Rhine River",
      right: "Germany",
      hint: "Busiest inland waterway in Europe; flows from the Swiss Alps through Germany to Rotterdam.",
      examFact: "Historic economic backbone of the German Ruhr industrial basin and European coal/steel integration."
    },
    {
      left: "Congo River (Zaire)",
      right: "DR Congo",
      hint: "Deepest river in the world (>220m); only major river to cross the Equator twice.",
      examFact: "Second largest river in the world by discharge volume after the Amazon; feeds Malebo Pool."
    },
    {
      left: "Tigris River",
      right: "Iraq",
      hint: "Eastern member of the two great Mesopotamian rivers; flows through Mosul and Baghdad.",
      examFact: "Joins the Euphrates at Al-Qurnah to form the Shatt al-Arab waterway entering the Persian Gulf."
    },
    {
      left: "Mekong River",
      right: "Vietnam",
      hint: "Transboundary river of Southeast Asia; forms an expansive southern delta in Vietnam.",
      examFact: "4,350 km long; flows through China, Myanmar, Laos, Thailand, Cambodia, and empties in Vietnam."
    },
    {
      left: "Yellow River (Huang He)",
      right: "China",
      hint: "Known as the 'Cradle of Chinese Civilization'; named for the ochre-colored silt it carries.",
      examFact: "Second-longest river in China (5,464 km); historically called 'China's Sorrow' due to floods."
    },
    {
      left: "Colorado River",
      right: "United States",
      hint: "Southwestern US river that famously carved the Grand Canyon in Arizona.",
      examFact: "Flows 2,330 km to the Gulf of California; tamed by the Hoover Dam to form Lake Mead."
    },
    {
      left: "Zambezi River",
      right: "Zambia",
      hint: "Southern African river famous for forming the spectacular Victoria Falls.",
      examFact: "Fourth-longest river in Africa (2,574 km); feeds the massive Lake Kariba hydroelectric dam."
    },
    {
      left: "Murray River",
      right: "Australia",
      hint: "Longest river in Australia (2,508 km); forms the border between Victoria and New South Wales.",
      examFact: "Forms the Murray-Darling Basin, the agricultural heartland containing 40% of Australian farms."
    },
    {
      left: "Kabul River",
      right: "Afghanistan",
      hint: "Transboundary river rising in the Sanglakh Range of Afghanistan and flowing into Pakistan.",
      examFact: "Main river of eastern Afghanistan; joins the Indus River near Attock in Khyber Pakhtunkhwa, Pakistan."
    }
  ],

  // 4. LEADERS & POSITIONS
  leaders_positions: [
    {
      left: "António Guterres",
      right: "Secretary-General of the United Nations",
      hint: "Former Prime Minister of Portugal and UN High Commissioner for Refugees; took office in 2017.",
      examFact: "9th Secretary-General of the United Nations; re-elected in 2021 for a second five-year term."
    },
    {
      left: "Ajay Banga",
      right: "President of the World Bank",
      hint: "Indian-American business executive and former Mastercard CEO; appointed in 2023.",
      examFact: "14th President of the World Bank Group; nominated by the United States."
    },
    {
      left: "Kristalina Georgieva",
      right: "Managing Director of the IMF",
      hint: "Bulgarian economist and former European Commissioner; took office in 2019.",
      examFact: "12th Managing Director of the IMF; second woman to lead the institution after Christine Lagarde."
    },
    {
      left: "Tedros Adhanom Ghebreyesus",
      right: "Director-General of WHO",
      hint: "Ethiopian microbiologist and former Minister of Health; took office in 2017.",
      examFact: "First African to head the World Health Organization; led response during COVID-19 pandemic."
    },
    {
      left: "Ngozi Okonjo-Iweala",
      right: "Director-General of WTO",
      hint: "Nigerian-American economist and former Finance Minister; appointed in 2021.",
      examFact: "First woman and first African to serve as Director-General of the World Trade Organization."
    },
    {
      left: "Ursula von der Leyen",
      right: "President of the European Commission",
      hint: "Former German Minister of Defense; assumed European executive leadership in 2019.",
      examFact: "First woman to serve as President of the European Commission; champions European Green Deal."
    },
    {
      left: "Mark Rutte",
      right: "Secretary-General of NATO",
      hint: "Longest-serving Prime Minister of the Netherlands; succeeded Jens Stoltenberg in 2024.",
      examFact: "14th Secretary-General of NATO; oversees transatlantic collective defense alliances."
    },
    {
      left: "Rafael Mariano Grossi",
      right: "Director-General of IAEA",
      hint: "Argentine diplomat with extensive experience in nuclear non-proliferation; appointed in 2019.",
      examFact: "Leads nuclear safety inspections in Ukraine (Zaporizhzhia) and Iranian nuclear monitoring."
    },
    {
      left: "Muhammad Ali Jinnah",
      right: "1st Governor-General of Pakistan",
      hint: "Revered as Quaid-e-Azam (Great Leader) and Father of the Pakistani Nation.",
      examFact: "Served from 14 August 1947 until his death on 11 September 1948; President of the 1st Constituent Assembly."
    },
    {
      left: "Liaquat Ali Khan",
      right: "1st Prime Minister of Pakistan",
      hint: "Revered as Quaid-e-Millat; trusted lieutenant of Jinnah; moved the historic Objectives Resolution.",
      examFact: "Prime Minister from 1947 until his assassination in Rawalpindi on 16 October 1951."
    },
    {
      left: "George Washington",
      right: "1st President of the United States",
      hint: "Commander-in-Chief of the Continental Army during the American Revolutionary War.",
      examFact: "Presided over the 1787 Constitutional Convention; served two terms (1789–1797) setting presidential precedents."
    },
    {
      left: "Mustafa Kemal Atatürk",
      right: "1st President of Republic of Turkey",
      hint: "Field Marshal and revolutionary statesman who abolished the Ottoman Sultanate and Caliphate.",
      examFact: "Founded modern secular Turkey in 1923; instituted sweeping legal, social, linguistic, and dress reforms."
    },
    {
      left: "Nelson Mandela",
      right: "1st Black President of South Africa",
      hint: "Anti-apartheid revolutionary imprisoned for 27 years (Robben Island); Nobel Peace Laureate.",
      examFact: "Served from 1994 to 1999 following South Africa's first fully representative democratic election."
    },
    {
      left: "Winston Churchill",
      right: "Prime Minister of the UK (WWII)",
      hint: "Rallied the British nation against Nazi Germany with historic wartime oratory; awarded Nobel in Literature.",
      examFact: "Led wartime coalition government (1940–1945) and peacetime government (1951–1955); coined 'Iron Curtain'."
    },
    {
      left: "Franklin D. Roosevelt",
      right: "32nd US President (New Deal & WWII)",
      hint: "Only US president elected to four terms (1933–1945); steered America through the Great Depression and WWII.",
      examFact: "Enacted the New Deal; founded the United Nations framework at Bretton Woods, Dumbarton Oaks, and Yalta."
    },
    {
      left: "Deng Xiaoping",
      right: "Paramount Leader of China (Reforms)",
      hint: "Architect of China's 'Socialism with Chinese characteristics' and 'Opening Up' economic transformation.",
      examFact: "Pioneered Special Economic Zones (Shenzhen); negotiated 'One Country, Two Systems' for Hong Kong."
    },
    {
      left: "Mikhail Gorbachev",
      right: "Last General Secretary of the Soviet Union",
      hint: "Soviet reformer who introduced Glasnost (openness) and Perestroika (restructuring).",
      examFact: "Presided over the peaceful end of the Cold War and the 1991 dissolution of the USSR; awarded 1990 Nobel Peace Prize."
    },
    {
      left: "Kofi Annan",
      right: "7th Secretary-General of the UN",
      hint: "Ghanaian diplomat; first Secretary-General to rise from within the ranks of the UN staff.",
      examFact: "Served 1997–2006; championed the Millennium Development Goals (MDGs); awarded 2001 Nobel Peace Prize."
    },
    {
      left: "Dag Hammarskjöld",
      right: "2nd Secretary-General of the UN",
      hint: "Swedish economist and diplomat who established UN peacekeeping; died in a 1961 plane crash in Africa.",
      examFact: "Only person posthumously awarded the Nobel Peace Prize (1961); President JFK called him 'the greatest statesman of our century'."
    },
    {
      left: "Margaret Thatcher",
      right: "1st Female Prime Minister of the UK",
      hint: "Conservative leader known as the 'Iron Lady'; privatized state industries and won the 1982 Falklands War.",
      examFact: "Served 1979–1990 (longest-serving British PM of the 20th century); championed neoliberal deregulation."
    }
  ],

  // 5. BOOKS & AUTHORS
  books_authors: [
    {
      left: "Jinnah of Pakistan",
      right: "Stanley Wolpert",
      hint: "Definitive biography opening with: 'Few individuals significantly alter the course of history...'",
      examFact: "Published in 1984 by Oxford University Press; considered the standard academic biography of Quaid-e-Azam."
    },
    {
      left: "The Idea of Pakistan",
      right: "Stephen P. Cohen",
      hint: "Influential Brookings Institution study exploring Pakistan's political, military, and strategic identity.",
      examFact: "Published in 2004; analyzes the civil-military balance, nuclear doctrine, and ideological foundations."
    },
    {
      left: "Pakistan: A Hard Country",
      right: "Anatol Lieven",
      hint: "Celebrated empirical study arguing that Pakistan's kinship networks (biraderi) make it remarkably resilient.",
      examFact: "Published in 2011; won the Orwell Prize shortlist; essential reading for CSS Pakistan Affairs."
    },
    {
      left: "Friends Not Masters",
      right: "Ayub Khan",
      hint: "Political autobiography written by Pakistan's first military ruler and second President.",
      examFact: "Published in 1967; details the 1958 Martial Law, 1962 Constitution, Basic Democracies, and 1965 War."
    },
    {
      left: "If I Am Assassinated",
      right: "Zulfikar Ali Bhutto",
      hint: "Prison testament smuggled out of Rawalpindi Central Jail before his execution in 1979.",
      examFact: "Written in reply to the White Paper issued by General Zia-ul-Haq's martial law regime."
    },
    {
      left: "The Myth of Independence",
      right: "Zulfikar Ali Bhutto",
      hint: "Seminal 1969 foreign policy work critiquing Pakistan's alignment with Western military pacts (SEATO, CENTO).",
      examFact: "Advocated for bilateralism, third-world solidarity, relations with China, and an independent foreign policy."
    },
    {
      left: "Daughter of Destiny",
      right: "Benazir Bhutto",
      hint: "Autobiography of the first female Prime Minister of a Muslim-majority nation (titled Daughter of the East in UK).",
      examFact: "Chronicles her Oxford education, father's imprisonment, political struggle against Zia, and 1988 election triumph."
    },
    {
      left: "In the Line of Fire",
      right: "Pervez Musharraf",
      hint: "Memoir by former President of Pakistan detailing Kargil, 1999 coup, and post-9/11 War on Terror decisions.",
      examFact: "Published in 2006; provides first-hand accounts of US diplomatic demands and assassination attempts."
    },
    {
      left: "Constitutional and Political History of Pakistan",
      right: "Hamid Khan",
      hint: "Standard legal and academic textbook on Pakistani constitutional jurisprudence and judicial cases.",
      examFact: "Authored by Senior Advocate Supreme Court Hamid Khan; essential reading for CSS Constitutional Law."
    },
    {
      left: "The Sole Spokesman",
      right: "Ayesha Jalal",
      hint: "Landmark revisionist historical study examining Jinnah, the Muslim League, and the demand for Pakistan.",
      examFact: "Based on her Cambridge doctoral thesis (1985); argues Jinnah used the Pakistan demand as strategic leverage."
    },
    {
      left: "Pakistan: Between Mosque and Military",
      right: "Husain Haqqani",
      hint: "Critical analysis of the historical nexus between religious political groups and military institutions.",
      examFact: "Published by Carnegie Endowment in 2005; authored by former Pakistani Ambassador to the United States."
    },
    {
      left: "The Clash of Civilizations",
      right: "Samuel P. Huntington",
      hint: "Post-Cold War thesis that cultural and religious identities will be the primary source of global conflict.",
      examFact: "Originates from a 1993 Foreign Affairs article expanded into a 1996 book; core CSS International Relations text."
    },
    {
      left: "The Tragedy of Great Power Politics",
      right: "John J. Mearsheimer",
      hint: "Foundational text of Offensive Realism arguing that anarchic polarity forces powers to maximize hegemony.",
      examFact: "Published in 2001; central theoretical framework for analyzing US-China strategic competition."
    },
    {
      left: "Diplomacy",
      right: "Henry Kissinger",
      hint: "Monumental history of statecraft, balance of power, and foreign policy from Richelieu to the modern era.",
      examFact: "Published in 1994; contrasts Realpolitik (Bismarck, Metternich) with American idealism (Woodrow Wilson)."
    },
    {
      left: "The Prince",
      right: "Niccolò Machiavelli",
      hint: "16th-century political treatise on how a ruler should acquire, maintain, and exercise sovereign power.",
      examFact: "Published posthumously in 1532; famously asserted that for a prince it is safer to be feared than loved."
    },
    {
      left: "The Republic",
      right: "Plato",
      hint: "Classical Socratic dialogue on justice, the philosopher-king, and the ideal city-state (Kallipolis).",
      examFact: "Written around 375 BCE; features the famous Allegory of the Cave and theory of forms."
    },
    {
      left: "The Wealth of Nations",
      right: "Adam Smith",
      hint: "Foundational work of classical economics introducing the concept of the 'invisible hand'.",
      examFact: "Published in 1776; pioneered division of labor, free markets, and critiqued mercantilist trade barriers."
    },
    {
      left: "Das Kapital",
      right: "Karl Marx",
      hint: "Critical analysis of political economy, commodity fetishism, and surplus value exploitation.",
      examFact: "Volume I published in 1867; Volumes II and III edited and published posthumously by Friedrich Engels."
    },
    {
      left: "Leviathan",
      right: "Thomas Hobbes",
      hint: "Classic social contract treatise arguing that life in the state of nature is 'nasty, brutish, and short'.",
      examFact: "Published in 1651 during the English Civil War; advocates for absolute sovereign authority to ensure peace."
    },
    {
      left: "The Social Contract",
      right: "Jean-Jacques Rousseau",
      hint: "Political philosophy opening with: 'Man is born free, and everywhere he is in chains.'",
      examFact: "Published in 1762; introduced the concept of the 'General Will' and inspired the French Revolution."
    }
  ]
};

const jsContent = `/**
 * CSS PREP CENTRAL - MATCH THE FOLLOWING GAME DATASET
 * Curated High-Yield Associative Learning Engine for CSS, PMS, FPSC, PPSC, and Competitive Exams.
 * Categories:
 * 1. countries_capitals (30 pairs)
 * 2. orgs_headquarters (30 pairs)
 * 3. rivers_countries (20 pairs)
 * 4. leaders_positions (20 pairs)
 * 5. books_authors (20 pairs)
 * Total Pairs: 120 curated pairs.
 */

const MATCH_FOLLOWING_DATA = ${JSON.stringify(MATCH_DATA, null, 2)};

if (typeof window !== 'undefined') {
  window.MATCH_FOLLOWING_DATA = MATCH_FOLLOWING_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MATCH_FOLLOWING_DATA;
}
`;

fs.writeFileSync('frontend/js/data_match_following.js', jsContent, 'utf8');
console.log('Successfully generated frontend/js/data_match_following.js with 120 total pairs!');
