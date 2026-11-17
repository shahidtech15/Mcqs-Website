const fs = require('fs');
const path = require('path');
const data = require(path.resolve(process.cwd(), 'frontend/js/data_guess_country.js'));

const moreCountries = [
  // 21. UAE
  {
    id: "ae",
    name: "United Arab Emirates",
    continent: "Asia",
    region: "Middle East",
    flag: "🇦🇪",
    capital: "Abu Dhabi",
    currency: "UAE Dirham (AED)",
    landmark: {
      name: "Burj Khalifa & Sheikh Zayed Grand Mosque",
      icon: "fa-building",
      desc: "World's tallest freestanding building rising 828 meters in Dubai, and a white marble grand mosque in Abu Dhabi."
    },
    mapOutline: {
      shape: "Situated along the southeastern tip of the Arabian Peninsula bordering the Persian Gulf and Gulf of Oman.",
      borders: ["Saudi Arabia", "Oman"],
      coastline: "1,318 km along the Persian Gulf and Gulf of Oman"
    },
    clues: [
      "A federation of seven monarchical emirates located at the entrance to the strategic Strait of Hormuz.",
      "Home to the world's tallest skyscraper (Burj Khalifa), artificial palm islands, and the Jebel Ali megaport.",
      "Capital is Abu Dhabi, its largest global commercial metropolis is Dubai, and currency is the Dirham.",
      "Pan-Arab colors flag featuring three horizontal stripes of green, white, and black with a vertical red stripe at the hoist."
    ],
    funFact: "Approximately 88% of the country's resident population consists of foreign expatriates and international workers.",
    examPoints: "Signed the historic Abraham Accords in 2020; hosted the UN Climate Change Conference COP28 in Dubai (2023)."
  },

  // 22. Greece
  {
    id: "gr",
    name: "Greece",
    continent: "Europe",
    region: "Southern Europe",
    flag: "🇬🇷",
    capital: "Athens",
    currency: "Euro (EUR)",
    landmark: {
      name: "Acropolis & Parthenon",
      icon: "fa-landmark",
      desc: "Ancient 5th-century BCE Doric temple dedicated to the goddess Athena overlooking the city of Athens."
    },
    mapOutline: {
      shape: "Southernmost tip of the Balkan Peninsula with thousands of islands scattered across the Aegean and Ionian seas.",
      borders: ["Albania", "North Macedonia", "Bulgaria", "Turkey"],
      coastline: "13,676 km (longest coastline in the Mediterranean basin)"
    },
    clues: [
      "Celebrated as the birthplace of Western democracy, Western philosophy, theater, and the ancient Olympic Games.",
      "Features over 2,000 picturesque islands in the Aegean and Ionian seas, including Santorini and Crete.",
      "Capital is Athens (named after the goddess of wisdom), currency is the Euro, and language is Greek.",
      "Flag consists of nine horizontal blue and white stripes with a blue canton bearing a white Greek cross."
    ],
    funFact: "Controls the world's largest merchant shipping fleet, holding over 20% of global commercial shipping capacity.",
    examPoints: "Member of NATO and the EU; controls Aegean air and maritime approaches under the 1923 Treaty of Lausanne."
  },

  // 23. Mexico
  {
    id: "mx",
    name: "Mexico",
    continent: "Americas",
    region: "North America",
    flag: "🇲🇽",
    capital: "Mexico City",
    currency: "Mexican Peso (MXN)",
    landmark: {
      name: "Chichen Itza & Teotihuacan Pyramids",
      icon: "fa-monument",
      desc: "Monumental step-pyramid temple of El Castillo built by the ancient Maya civilization in the Yucatan Peninsula."
    },
    mapOutline: {
      shape: "Forms the southern bridge of North America, tapering southward between the Pacific Ocean and Gulf of Mexico.",
      borders: ["United States", "Guatemala", "Belize"],
      coastline: "9,330 km on the Pacific Ocean, Gulf of Mexico, and Caribbean Sea"
    },
    clues: [
      "The most populous Spanish-speaking country in the world, cradle of the ancient Aztec and Maya civilizations.",
      "Famous for Chichen Itza (one of the New Seven Wonders), chocolate origin, Mariachi music, and spicy cuisine.",
      "Capital is Mexico City (built upon the ancient Aztec lake capital Tenochtitlan) and currency is the Peso.",
      "Vertical tricolor of green, white, and red with an eagle devouring a serpent atop a prickly pear cactus on the white stripe."
    ],
    funFact: "Introduced chocolate, corn (maize), avocados, chili peppers, and vanilla to the rest of the world.",
    examPoints: "Member of the USMCA free trade agreement (formerly NAFTA), G20, and the Pacific Alliance."
  },

  // 24. Switzerland
  {
    id: "ch",
    name: "Switzerland",
    continent: "Europe",
    region: "Central Europe",
    flag: "🇨🇭",
    capital: "Bern (Federal City)",
    currency: "Swiss Franc (CHF)",
    landmark: {
      name: "The Matterhorn & Chillon Castle",
      icon: "fa-mountain",
      desc: "Iconic 4,478-meter pyramidal peak in the Pennine Alps straddling the border between Switzerland and Italy."
    },
    mapOutline: {
      shape: "Landlocked alpine nation nestled in the heart of Europe dominated by the Swiss Alps and Jura mountains.",
      borders: ["Germany", "France", "Italy", "Austria", "Liechtenstein"],
      coastline: "Landlocked (0 km coastline)"
    },
    clues: [
      "Famous for perpetual armed neutrality, keeping peace without joining military conflicts since the Congress of Vienna (1815).",
      "Global banking powerhouse, famous for Swiss chocolate, precision luxury watches, and the Matterhorn mountain.",
      "Federal capital is Bern, financial banking center is Zurich, and currency is the Swiss Franc.",
      "One of only two sovereign countries with a square national flag: a bold white cross on a square red field."
    ],
    funFact: "One of only two sovereign countries in the world with an official square flag (the other being Vatican City).",
    examPoints: "Hosts the European headquarters of the United Nations (Palais des Nations) and Red Cross (ICRC) in Geneva."
  },

  // 25. Kenya
  {
    id: "ke",
    name: "Kenya",
    continent: "Africa",
    region: "East Africa",
    flag: "🇰🇪",
    capital: "Nairobi",
    currency: "Kenyan Shilling (KES)",
    landmark: {
      name: "Maasai Mara National Reserve & Mount Kenya",
      icon: "fa-tree",
      desc: "Spectacular savanna ecosystem world-famous for the annual Great Migration of over two million wildebeest and zebras."
    },
    mapOutline: {
      shape: "Bisected horizontally by the equator on the Indian Ocean coast of East Africa, opening into the Great Rift Valley.",
      borders: ["Ethiopia", "Somalia", "South Sudan", "Uganda", "Tanzania"],
      coastline: "536 km on the Indian Ocean"
    },
    clues: [
      "Famous for the Great Wildebeest Migration across the Maasai Mara and producing world-record marathon runners.",
      "Contains the scenic Great Rift Valley, Mount Kenya (5,199m), and Lake Victoria shores.",
      "Capital is Nairobi (known as the 'Green City in the Sun') and national currency is the Kenyan Shilling.",
      "Flag features black, red, and green horizontal stripes bordered by white, charged with a traditional Maasai warrior shield and two crossed spears."
    ],
    funFact: "Home to Olympic champions who hold almost all world records in middle and long-distance athletics (Eliud Kipchoge).",
    examPoints: "Nairobi hosts the global headquarters of the United Nations Environment Programme (UNEP) and UN-Habitat."
  },

  // 26. Argentina
  {
    id: "ar",
    name: "Argentina",
    continent: "Americas",
    region: "South America",
    flag: "🇦🇷",
    capital: "Buenos Aires",
    currency: "Argentine Peso (ARS)",
    landmark: {
      name: "Iguazu Falls & Perito Moreno Glacier",
      icon: "fa-water",
      desc: "Majestic system of 275 individual waterfalls on the Iguazu River on the border with Brazil, and massive Patagonian glaciers."
    },
    mapOutline: {
      shape: "Long triangular wedge occupying most of the Southern Cone of South America, between the Andes and Atlantic Ocean.",
      borders: ["Chile", "Bolivia", "Paraguay", "Brazil", "Uruguay"],
      coastline: "4,989 km along the South Atlantic Ocean"
    },
    clues: [
      "Home to the highest peak in the Western and Southern Hemispheres: Mount Aconcagua (6,961 meters / 22,838 ft).",
      "Birthplace of Tango dance, legendary footballers (Maradona and Messi), and vast agricultural Pampas cattle ranches.",
      "Capital is Buenos Aires on the Río de la Plata estuary, and currency is the Argentine Peso.",
      "Horizontal triband of light blue and white with the radiant golden 'Sun of May' (Sol de Mayo) in the center."
    ],
    funFact: "Aconcagua in the Argentine Andes is the highest mountain outside of the Asian continent.",
    examPoints: "Fought the 1982 Falklands War (Guerra de las Malvinas) against the United Kingdom; G20 member state."
  },

  // 27. Spain
  {
    id: "es",
    name: "Spain",
    continent: "Europe",
    region: "Southwestern Europe",
    flag: "🇪🇸",
    capital: "Madrid",
    currency: "Euro (EUR)",
    landmark: {
      name: "Alhambra Palace & Sagrada Família",
      icon: "fa-mosque",
      desc: "Breathtaking Moorish Islamic palace and fortress complex in Granada, and Antoni Gaudí's unfinished basilica in Barcelona."
    },
    mapOutline: {
      shape: "Occupies roughly 85% of the Iberian Peninsula, bordered by Portugal, the Pyrenees mountains, and Gibraltar.",
      borders: ["Portugal", "France", "Andorra", "Gibraltar (UK)", "Morocco (via Ceuta and Melilla)"],
      coastline: "4,964 km on the Atlantic Ocean and Mediterranean Sea"
    },
    clues: [
      "Occupies the vast majority of the Iberian Peninsula, separated from North Africa by the narrow Strait of Gibraltar.",
      "Home to centuries of Islamic Moorish heritage in Al-Andalus (Alhambra, Cordoba Mezquita) and Antoni Gaudí's architecture.",
      "Capital is Madrid in the geographic center, currency is the Euro, and language is Spanish (Castilian).",
      "Red-yellow-red horizontal triband with the national coat of arms depicting the Pillars of Hercules on the yellow stripe."
    ],
    funFact: "Has an unusual national anthem ('Marcha Real') that has no official lyrics or words.",
    examPoints: "Controls the North African coastal exclaves of Ceuta and Melilla bordering Morocco; NATO and EU member."
  },

  // 28. Iran
  {
    id: "ir",
    name: "Iran",
    continent: "Asia",
    region: "Middle East",
    flag: "🇮🇷",
    capital: "Tehran",
    currency: "Iranian Rial (IRR)",
    landmark: {
      name: "Persepolis & Naqsh-e Jahan Square",
      icon: "fa-landmark",
      desc: "Ceremonial capital of the ancient Achaemenid Empire (518 BCE) and the stunning Safavid blue-tiled square in Isfahan."
    },
    mapOutline: {
      shape: "High arid plateau bounded by the Caspian Sea in the north, Zagros mountains in west, and Persian Gulf in south.",
      borders: ["Pakistan", "Afghanistan", "Turkmenistan", "Azerbaijan", "Armenia", "Turkey", "Iraq"],
      coastline: "2,440 km on the Caspian Sea, Persian Gulf, and Gulf of Oman"
    },
    clues: [
      "Historic heartland of the ancient Persian Empire, famous for Persian carpets, saffron, pistachios, and poetry (Hafez, Rumi).",
      "Controls the northern littoral of the strategic Strait of Hormuz chokepoint through which 21M bpd of oil transits.",
      "Capital is Tehran situated at the foot of Mount Damavand, currency is the Rial, and official language is Persian (Farsi).",
      "Horizontal tricolor of green, white, and red with the stylized red emblem of Allah in the center and Kufic Takbir inscriptions."
    ],
    funFact: "Mount Damavand (5,609m) in the Alborz range is the highest volcano in the entire continent of Asia.",
    examPoints: "Became an Islamic Republic following the 1979 Revolution; signatory to the 2015 JCPOA nuclear accord."
  },

  // 29. South Korea
  {
    id: "kr",
    name: "South Korea",
    continent: "Asia",
    region: "East Asia",
    flag: "🇰🇷",
    capital: "Seoul",
    currency: "South Korean Won (KRW, ₩)",
    landmark: {
      name: "Gyeongbokgung Palace & N Seoul Tower",
      icon: "fa-landmark",
      desc: "Main royal palace of the Joseon dynasty built in 1395, juxtaposed against Seoul's futuristic high-tech skyline."
    },
    mapOutline: {
      shape: "Occupies the southern half of the Korean Peninsula, separated from the north by the 4-km-wide Demilitarized Zone (DMZ).",
      borders: ["North Korea (DMZ border along the 38th parallel)"],
      coastline: "2,413 km on the Yellow Sea, East China Sea, and Sea of Japan"
    },
    clues: [
      "Global technological and cultural powerhouse: home to Samsung, Hyundai, LG, K-Pop music (BTS), and K-Dramas.",
      "Separated from its northern neighbor by the heavily fortified Demilitarized Zone (DMZ) along the 38th parallel.",
      "Capital is Seoul, currency is the Won, and indigenous phonetic writing system is Hangul (invented by King Sejong).",
      "Flag is the 'Taegeukgi', featuring a central red and blue Yin-Yang circle surrounded by four black trigrams on a white field."
    ],
    funFact: "Rose from one of the poorest post-war nations in the 1950s to an economic powerhouse in the 'Miracle on the Han River'.",
    examPoints: "US treaty ally hosting major US military bases; global leader in semiconductor microchip manufacturing."
  },

  // 30. Morocco
  {
    id: "ma",
    name: "Morocco",
    continent: "Africa",
    region: "North Africa",
    flag: "🇲🇦",
    capital: "Rabat",
    currency: "Moroccan Dirham (MAD)",
    landmark: {
      name: "Hassan II Mosque & Medina of Fez",
      icon: "fa-mosque",
      desc: "Grand Atlantic oceanfront mosque in Casablanca with a 210-meter minaret, the tallest minaret in Africa."
    },
    mapOutline: {
      shape: "Northwestern corner of Africa, separated from Spain by just 14 km across the Strait of Gibraltar.",
      borders: ["Algeria", "Western Sahara", "Spanish exclaves Ceuta and Melilla"],
      coastline: "1,835 km on the Atlantic Ocean and Mediterranean Sea"
    },
    clues: [
      "Only African nation with coastlines on both the Atlantic Ocean and Mediterranean Sea, separated from Spain by 14 km.",
      "Home to the High Atlas mountains, ancient walled medinas (Fez, Marrakech), and aromatic mint tea.",
      "Capital is Rabat, its largest economic port city is Casablanca, and official currency is the Dirham.",
      "Vibrant red field flag featuring a solitary emerald-green pentagram star (Seal of Solomon) in the center."
    ],
    funFact: "University of al-Qarawiyyin in Fez, founded in 859 CE by Fatima al-Fihri, is the oldest continuously operating university on Earth.",
    examPoints: "Claimant sovereign over Western Sahara; signed the Abraham Accords normalization pact in 2020."
  },

  // 31. New Zealand
  {
    id: "nz",
    name: "New Zealand",
    continent: "Oceania",
    region: "Polynesia",
    flag: "🇳🇿",
    capital: "Wellington",
    currency: "New Zealand Dollar (NZD)",
    landmark: {
      name: "Milford Sound & Mount Cook (Aoraki)",
      icon: "fa-water",
      desc: "Breathtaking glacial fjord with towering cliffs and cascading waterfalls described by Rudyard Kipling as the 'Eighth Wonder of the World'."
    },
    mapOutline: {
      shape: "Two main landmasses: the North Island (Te Ika-a-Māui) and the South Island (Te Waipounamu) in the South Pacific.",
      borders: ["Surrounded entirely by the Tasman Sea and Pacific Ocean"],
      coastline: "15,134 km of oceanic coastline"
    },
    clues: [
      "Famous for indigenous Māori culture (the Haka dance), flightless Kiwi birds, and filming 'The Lord of the Rings'.",
      "Consists of two major mountainous islands: the North Island and the South Island in the southwestern Pacific Ocean.",
      "Capital is Wellington (the southernmost national capital in the world), and largest city is Auckland.",
      "Blue ensign flag featuring the British Union Jack in the canton and four red five-pointed stars with white borders representing the Southern Cross."
    ],
    funFact: "Became the first country in the world to grant all women the right to vote in parliamentary elections (1893).",
    examPoints: "Member of the 'Five Eyes' intelligence-sharing alliance with the US, UK, Canada, and Australia."
  },

  // 32. Vietnam
  {
    id: "vn",
    name: "Vietnam",
    continent: "Asia",
    region: "Southeast Asia",
    flag: "🇻🇳",
    capital: "Hanoi",
    currency: "Vietnamese Dong (VND)",
    landmark: {
      name: "Ha Long Bay & Golden Bridge Da Nang",
      icon: "fa-water",
      desc: "UNESCO World Heritage seascape featuring thousands of towering emerald limestone karsts and isles topped with rainforests."
    },
    mapOutline: {
      shape: "Distinctive narrow S-shaped strip stretching over 1,650 km along the eastern edge of the Indochinese Peninsula.",
      borders: ["China", "Laos", "Cambodia"],
      coastline: "3,260 km on the South China Sea and Gulf of Tonkin"
    },
    clues: [
      "S-shaped coastal nation celebrated for the limestone pillars of Ha Long Bay, the Mekong Delta, and Pho soup.",
      "Fought a landmark 20th-century war against French colonial forces (Dien Bien Phu 1954) and the United States (1975 unification).",
      "Capital is Hanoi in the north, largest economic engine is Ho Chi Minh City in the south, and currency is the Dong.",
      "Solid crimson-red flag charged with a prominent central five-pointed golden star symbolizing socialist unity."
    ],
    funFact: "The world's second-largest exporter of coffee (after Brazil), producing massive volumes of Robusta coffee.",
    examPoints: "Key littoral claimant in the South China Sea dispute against China's Nine-Dash Line; prominent ASEAN economy."
  },

  // 33. Thailand
  {
    id: "th",
    name: "Thailand",
    continent: "Asia",
    region: "Southeast Asia",
    flag: "🇹🇭",
    capital: "Bangkok",
    currency: "Thai Baht (THB, ฿)",
    landmark: {
      name: "The Grand Palace & Wat Arun (Temple of Dawn)",
      icon: "fa-place-of-worship",
      desc: "Opulent 18th-century complex of royal residences and the Temple of the Emerald Buddha along the Chao Phraya River."
    },
    mapOutline: {
      shape: "Often compared to the shape of an elephant's head with the elongated trunk extending down the Malay Peninsula.",
      borders: ["Myanmar", "Laos", "Cambodia", "Malaysia"],
      coastline: "3,219 km on the Gulf of Thailand and Andaman Sea"
    },
    clues: [
      "The only nation in Southeast Asia that was never colonized by European imperial powers, historically known as Siam.",
      "Known as the 'Land of Smiles', famous for ornate Buddhist temples, Muay Thai boxing, and street food.",
      "Capital is Bangkok (Krung Thep), national currency is the Baht, and dominant religion is Theravada Buddhism.",
      "The 'Trairanga' flag displaying five horizontal stripes of red, white, blue, white, and red (with the central blue stripe twice as wide)."
    ],
    funFact: "Bangkok's full ceremonial ceremonial name has 168 letters, making it the longest city place-name in the world according to Guinness.",
    examPoints: "Founding member of ASEAN; considered proposing the Kra Isthmus Canal to bypass the Strait of Malacca."
  },

  // 34. Nepal
  {
    id: "np",
    name: "Nepal",
    continent: "Asia",
    region: "South Asia",
    flag: "🇳🇵",
    capital: "Kathmandu",
    currency: "Nepalese Rupee (NPR)",
    landmark: {
      name: "Mount Everest (Sagarmatha) & Pashupatinath",
      icon: "fa-mountain-sun",
      desc: "Highest mountain peak on Earth rising 8,848.86 meters above sea level in the Mahalangur Himal sub-range."
    },
    mapOutline: {
      shape: "Landlocked rectangular buffer state wedged tightly between the Tibetan Plateau (China) and northern India.",
      borders: ["China (Tibet)", "India"],
      coastline: "Landlocked (0 km coastline)"
    },
    clues: [
      "Home to 8 of the world's 14 highest Eight-Thousander mountains, including Mount Everest (Sagarmatha).",
      "Birthplace of Gautama Buddha (Lumbini) and legendary Gurkha warriors renowned for martial valor.",
      "Capital is Kathmandu, currency is the Nepalese Rupee, and official language is Nepali.",
      "The only country in the modern world with a non-quadrilateral flag (made of two stacked pennants with a sun and crescent moon)."
    ],
    funFact: "Has the only non-rectangular national flag in the world, consisting of two stacked crimson pennants.",
    examPoints: "Acts as a strategic Himalayan buffer state between two nuclear-armed giants: China and India."
  },

  // 35. Chile
  {
    id: "cl",
    name: "Chile",
    continent: "Americas",
    region: "South America",
    flag: "🇨🇱",
    capital: "Santiago",
    currency: "Chilean Peso (CLP)",
    landmark: {
      name: "Torres del Paine & Moai Statues (Easter Island)",
      icon: "fa-mountain",
      desc: "Granite mountain peaks in Patagonia, and monumental monolithic stone human figures on remote Rapa Nui (Easter Island)."
    },
    mapOutline: {
      shape: "Extremely long, narrow ribbon of land stretching over 4,300 km north to south, but averaging only 175 km wide.",
      borders: ["Peru", "Bolivia", "Argentina"],
      coastline: "6,435 km on the South Pacific Ocean"
    },
    clues: [
      "The longest and narrowest country in the world, spanning over 4,300 km from the driest desert to sub-Antarctic glaciers.",
      "Home to the Atacama Desert (where some weather stations have never recorded rain) and giant copper mining deposits.",
      "Capital is Santiago overlooked by the snow-capped Andes mountains, and currency is the Chilean Peso.",
      "Bicolor flag of white and red horizontal bands with a blue square canton in the upper hoist bearing a white five-pointed star."
    ],
    funFact: "The Atacama Desert in northern Chile is so arid that NASA scientists use it to test Mars rover equipment.",
    examPoints: "Controls the Strait of Magellan and Cape Horn; member of OECD and the Pacific Alliance."
  },

  // 36. Norway
  {
    id: "no",
    name: "Norway",
    continent: "Europe",
    region: "Northern Europe / Scandinavia",
    flag: "🇳🇴",
    capital: "Oslo",
    currency: "Norwegian Krone (NOK)",
    landmark: {
      name: "Geirangerfjord & Trolltunga",
      icon: "fa-water",
      desc: "Spectacular UNESCO-protected deep blue glacial fjord surrounded by majestic snow-covered mountain peaks and waterfalls."
    },
    mapOutline: {
      shape: "Long, narrow strip forming the western spine of the Scandinavian Peninsula, famous for deeply indented fjords.",
      borders: ["Sweden", "Finland", "Russia"],
      coastline: "Over 83,000 km of coastline including fjords and islands"
    },
    clues: [
      "Famous for magnificent coastal fjords, Viking history, the Northern Lights (Aurora Borealis), and the Midnight Sun.",
      "Consistently ranks near the top of the UN Human Development Index (HDI) and operates the world's largest sovereign wealth fund.",
      "Capital is Oslo (where the Nobel Peace Prize is awarded annually) and currency is the Norwegian Krone.",
      "Red field with a navy blue Scandinavian Nordic cross outlined in white extending to the edges of the flag."
    ],
    funFact: "Its Government Pension Fund Global (Sovereign Wealth Fund) is worth over $1.7 Trillion, owning 1.5% of all global public companies.",
    examPoints: "Founding member of NATO; non-EU member choosing instead to participate via the European Economic Area (EEA)."
  },

  // 37. Iceland
  {
    id: "is",
    name: "Iceland",
    continent: "Europe",
    region: "Nordic / North Atlantic",
    flag: "🇮🇸",
    capital: "Reykjavik",
    currency: "Icelandic Króna (ISK)",
    landmark: {
      name: "Blue Lagoon & Gullfoss Waterfall",
      icon: "fa-water",
      desc: "Geothermal mineral-rich spa in a volcanic lava field, and thunderous double-cascade glacial waterfalls on the Golden Circle."
    },
    mapOutline: {
      shape: "Volcanic island situated on the Mid-Atlantic Ridge where the North American and Eurasian tectonic plates pull apart.",
      borders: ["Isolated island in the North Atlantic just below the Arctic Circle"],
      coastline: "4,970 km of rugged oceanic coastline"
    },
    clues: [
      "Known as the 'Land of Fire and Ice' due to its coexisting glaciers, active volcanoes, boiling geysers, and black sand beaches.",
      "Runs on nearly 100% renewable energy generated from clean geothermal and hydroelectric power sources.",
      "Capital is Reykjavik (the world's northernmost sovereign capital) and national currency is the Króna.",
      "Blue field featuring a bright red Nordic cross outlined in white."
    ],
    funFact: "Has no standing armed forces (military army, navy, or air force), yet is a founding member of NATO.",
    examPoints: "Home to the Althing (established 930 CE at Thingvellir), the oldest operating parliament in the world."
  },

  // 38. Uzbekistan
  {
    id: "uz",
    name: "Uzbekistan",
    continent: "Asia",
    region: "Central Asia",
    flag: "🇺🇿",
    capital: "Tashkent",
    currency: "Uzbekistani Som (UZS)",
    landmark: {
      name: "Registan Square (Samarkand) & Ark of Bukhara",
      icon: "fa-mosque",
      desc: "Spectacular Islamic ensemble of three monumental madrasahs adorned with dazzling blue mosaic and majolica tilework."
    },
    mapOutline: {
      shape: "One of only two doubly landlocked countries in the world (surrounded exclusively by other landlocked countries).",
      borders: ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Afghanistan", "Turkmenistan"],
      coastline: "Doubly landlocked (shares drying Aral Sea basin)"
    },
    clues: [
      "One of only two 'doubly landlocked' countries in the world (the other being Liechtenstein in Europe).",
      "Heart of the ancient Silk Road, containing the fabled architectural jewels of Samarkand, Bukhara, and Khiva.",
      "Capital is Tashkent (largest city in Central Asia), and national currency is the Som.",
      "Horizontal tricolor of blue, white, and green separated by red stripes, with a white crescent and 12 stars in the upper blue band."
    ],
    funFact: "Birthplace of Timur (Tamerlane) and home to the grand turquoise madrasahs that influenced Mughal architecture in Pakistan.",
    examPoints: "Major producer of cotton, gold (Muruntau mine), and uranium; member of the Shanghai Cooperation Organisation (SCO)."
  },

  // 39. Cuba
  {
    id: "cu",
    name: "Cuba",
    continent: "Americas",
    region: "Caribbean",
    flag: "🇨🇺",
    capital: "Havana",
    currency: "Cuban Peso (CUP)",
    landmark: {
      name: "El Capitolio & Old Havana (Habana Vieja)",
      icon: "fa-monument",
      desc: "Neoclassical dome palace and pastel colonial plazas with 1950s American vintage classic cars cruising the Malecón."
    },
    mapOutline: {
      shape: "Long, narrow crocodile-shaped archipelago island situated at the entrance to the Gulf of Mexico.",
      borders: ["Surrounded by water; US leases naval base at Guantanamo Bay"],
      coastline: "3,735 km on the Atlantic Ocean and Caribbean Sea"
    },
    clues: [
      "The largest island in the Caribbean, famous for vintage 1950s American automobiles, world-class cigars, and Salsa music.",
      "Center of the 1962 Cuban Missile Crisis, which brought the world to the brink of nuclear warfare during the Cold War.",
      "Capital is Havana (Habana) on the northern coast, and currency is the Cuban Peso.",
      "Flag of five alternating blue and white horizontal stripes with a red equilateral triangle on the hoist containing a single white star."
    ],
    funFact: "Boasts one of the highest physician-to-population ratios in the world and exports medical doctors globally.",
    examPoints: "Subject to a continuous US economic trade embargo since 1960 under the Trading with the Enemy Act."
  },

  // 40. Singapore
  {
    id: "sg",
    name: "Singapore",
    continent: "Asia",
    region: "Southeast Asia",
    flag: "🇸🇬",
    capital: "Singapore (City-State)",
    currency: "Singapore Dollar (SGD, $)",
    landmark: {
      name: "Marina Bay Sands & Gardens by the Bay",
      icon: "fa-building",
      desc: "Integrated resort featuring three 55-story hotel towers topped by a cantilevered SkyPark with an infinity pool."
    },
    mapOutline: {
      shape: "Diamond-shaped main island and 64 smaller islets at the southern tip of the Malay Peninsula on the Malacca Strait.",
      borders: ["Connected to Malaysia via the Johor-Singapore Causeway and Second Link bridge"],
      coastline: "193 km of strategic maritime coastline"
    },
    clues: [
      "A prosperous global financial and shipping city-state located at the southern chokepoint entrance of the Strait of Malacca.",
      "Transformed from a colonial trading post into one of the world's wealthiest nations under founding Prime Minister Lee Kuan Yew.",
      "Capital is the city of Singapore itself, currency is the Singapore Dollar, and symbol is the mythical Merlion (half-lion, half-fish).",
      "Bicolor flag of two equal horizontal bands of red and white, with a white crescent moon and five white stars in the canton."
    ],
    funFact: "Known as the 'Garden City', nearly 50% of this ultra-dense global financial hub is covered in lush green vegetation.",
    examPoints: "World's busiest container transshipment hub and top bunkering port; founding member of ASEAN."
  }
];

moreCountries.forEach(c => data.push(c));

const fileContent = `/**
 * CSS PREP CENTRAL - GUESS THE COUNTRY GAME DATASET
 * Interactive Country Identification Engine for World Geography, FPSC, PPSC, and CSS Aspirants.
 * Features: 40 Global Countries across all Continents with Landmarks, Silhouettes, Progressive Clues & Exam Trivia.
 */

const GUESS_COUNTRY_DATA = ${JSON.stringify(data, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GUESS_COUNTRY_DATA;
}
`;

fs.writeFileSync('frontend/js/data_guess_country.js', fileContent, 'utf8');
console.log('Successfully updated data_guess_country.js! Total countries:', data.length);
