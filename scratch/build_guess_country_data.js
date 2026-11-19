const fs = require('fs');

const countriesData = [
  // 1. Pakistan
  {
    id: "pk",
    name: "Pakistan",
    continent: "Asia",
    region: "South Asia",
    flag: "🇵🇰",
    capital: "Islamabad",
    currency: "Pakistani Rupee (PKR)",
    landmark: {
      name: "Badshahi Mosque & Faisal Mosque",
      icon: "fa-mosque",
      desc: "Architectural marvels representing Mughal majesty and modern Islamic geometry nestled against the Margalla Hills."
    },
    mapOutline: {
      shape: "Stretches from the Arabian Sea coast in the south through the fertile Indus plain to the towering Karakoram and Hindu Kush ranges in the north.",
      borders: ["India", "China", "Afghanistan", "Iran"],
      coastline: "1,046 km along the Arabian Sea"
    },
    clues: [
      "Home to the second-highest mountain peak on Earth (K2 at 8,611m) and the world's largest contiguous irrigation network.",
      "The ancient bronze-age urban metropolis of Mohenjo-Daro and the world's highest paved international border (Khunjerab Pass) are located here.",
      "Has its capital at Islamabad, currency is Rupee, and its national language is Urdu.",
      "National flag features a white crescent and five-pointed star on a dark green field with a vertical white stripe at the hoist."
    ],
    funFact: "Home to the world's largest deep-sea warm-water port (Gwadar) and Khewra Salt Mine, the world's 2nd largest salt mine.",
    examPoints: "Separated from Tajikistan by the narrow Wakhan Corridor (14–65 km wide). Signed the Indus Waters Treaty in 1960."
  },

  // 2. Turkey (Türkiye)
  {
    id: "tr",
    name: "Turkey",
    continent: "Asia / Europe",
    region: "Eurasia / Middle East",
    flag: "🇹🇷",
    capital: "Ankara",
    currency: "Turkish Lira (TRY)",
    landmark: {
      name: "Hagia Sophia & Blue Mosque",
      icon: "fa-monument",
      desc: "Massive 6th-century Byzantine cathedral converted into an imperial Ottoman mosque overlooking the Bosphorus Strait."
    },
    mapOutline: {
      shape: "Spans the Anatolian peninsula in Western Asia and Thrace in Southeastern Europe, bisected by the Turkish Straits.",
      borders: ["Greece", "Bulgaria", "Georgia", "Armenia", "Azerbaijan", "Iran", "Iraq", "Syria"],
      coastline: "Coastlines on Black Sea, Aegean Sea, and Mediterranean Sea"
    },
    clues: [
      "A transcontinental country straddling Europe and Asia across the strategic Bosphorus and Dardanelles straits.",
      "Its most famous historic city served as the imperial capital of both the Roman/Byzantine and Ottoman Empires.",
      "Capital is Ankara, its largest metropolis is Istanbul, and currency is the Lira.",
      "Flag features a prominent white crescent and a five-pointed star centered on a vibrant red background."
    ],
    funFact: "Istanbul is the only metropolis in the world located on two separate continents simultaneously.",
    examPoints: "Controls naval passage between the Black Sea and the Mediterranean under the 1936 Montreux Convention."
  },

  // 3. Egypt
  {
    id: "eg",
    name: "Egypt",
    continent: "Africa",
    region: "North Africa / Middle East",
    flag: "🇪🇬",
    capital: "Cairo",
    currency: "Egyptian Pound (EGP)",
    landmark: {
      name: "Great Pyramids of Giza & Sphinx",
      icon: "fa-monument",
      desc: "The only surviving Wonder of the Ancient World, built over 4,500 years ago along the banks of the River Nile."
    },
    mapOutline: {
      shape: "Square-like territory in the northeast corner of Africa, including the Sinai Peninsula in Southwest Asia.",
      borders: ["Libya", "Sudan", "Israel", "Palestine (Gaza Strip)"],
      coastline: "Mediterranean Sea to the north and Red Sea to the east"
    },
    clues: [
      "Operates the world's most vital artificial sea-level canal connecting the Mediterranean Sea to the Red Sea.",
      "Revered as the 'Gift of the Nile', its civilization produced the hieroglyphic script, pharaohs, and massive pyramids.",
      "Capital is Cairo (the 'City of a Thousand Minarets') and currency is the Egyptian Pound.",
      "Tricolor flag of red, white, and black horizontal bands featuring the golden Eagle of Saladin in the center."
    ],
    funFact: "The Suez Canal handles approximately 12% to 15% of total global trade volume.",
    examPoints: "Governed by the 1888 Convention of Constantinople guaranteeing international maritime transit."
  },

  // 4. Japan
  {
    id: "jp",
    name: "Japan",
    continent: "Asia",
    region: "East Asia",
    flag: "🇯🇵",
    capital: "Tokyo",
    currency: "Japanese Yen (JPY)",
    landmark: {
      name: "Mount Fuji & Kinkaku-ji (Golden Pavilion)",
      icon: "fa-mountain-sun",
      desc: "Iconic symmetrical snow-capped active stratovolcano rising 3,776 meters southwest of Tokyo."
    },
    mapOutline: {
      shape: "Curved stratovolcanic archipelago consisting of 4 major islands: Honshu, Hokkaido, Kyushu, and Shikoku.",
      borders: ["Maritime borders with Russia, China, South Korea, and North Korea"],
      coastline: "Over 29,700 km along the Pacific Ocean and Sea of Japan"
    },
    clues: [
      "An island nation historically known as the 'Land of the Rising Sun' located in the Pacific Ring of Fire.",
      "Pioneered Shinkansen bullet trains, anime culture, robotics, and hosts the world's most populous metropolitan area.",
      "Capital is Tokyo, currency is the Yen, and highest mountain peak is Mount Fuji.",
      "Flag is called the 'Nisshōki' (Hinomaru), displaying a simple solid crimson-red disc on a clean white field."
    ],
    funFact: "Has over 6,800 islands and boasts the world's highest life expectancy.",
    examPoints: "Member of the G7 and the Quadrilateral Security Dialogue (Quad); constitution Article 9 renounces war."
  },

  // 5. France
  {
    id: "fr",
    name: "France",
    continent: "Europe",
    region: "Western Europe",
    flag: "🇫🇷",
    capital: "Paris",
    currency: "Euro (EUR)",
    landmark: {
      name: "Eiffel Tower & Louvre Museum",
      icon: "fa-archway",
      desc: "330-meter wrought-iron lattice tower constructed for the 1889 World's Fair on the Champ de Mars."
    },
    mapOutline: {
      shape: "Hexagonal landmass bounded by the Atlantic Ocean, English Channel, Pyrenees, Alps, and Mediterranean Sea.",
      borders: ["Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Monaco", "Spain", "Andorra"],
      coastline: "Extensive Atlantic and Mediterranean coastlines"
    },
    clues: [
      "Often referred to as 'L'Hexagone' due to its geographic six-sided boundary shape in Western Europe.",
      "Home to the Palace of Versailles, the world's most visited art museum (Louvre), and haute cuisine.",
      "Capital is Paris (the 'City of Light') and national currency is the Euro.",
      "The original revolutionary 'Tricolore' flag featuring three equal vertical bands of blue, white, and red."
    ],
    funFact: "Most visited country in the world by international tourists, welcoming ~90 million visitors annually.",
    examPoints: "Permanent member of the UN Security Council (P5) with nuclear weapon state status."
  },

  // 6. Brazil
  {
    id: "br",
    name: "Brazil",
    continent: "Americas",
    region: "South America",
    flag: "🇧🇷",
    capital: "Brasília",
    currency: "Brazilian Real (BRL)",
    landmark: {
      name: "Christ the Redeemer & Sugarloaf Mountain",
      icon: "fa-monument",
      desc: "30-meter Art Deco statue of Jesus atop Mount Corcovado overlooking Rio de Janeiro."
    },
    mapOutline: {
      shape: "Dominates half of the South American continent, bordering every South American nation except Chile and Ecuador.",
      borders: ["Uruguay", "Argentina", "Paraguay", "Bolivia", "Peru", "Colombia", "Venezuela", "Guyana", "Suriname", "French Guiana"],
      coastline: "7,491 km along the Atlantic Ocean"
    },
    clues: [
      "Contains roughly 60% of the Amazon Rainforest, the world's largest river basin by discharge volume.",
      "The only Portuguese-speaking nation in the Americas, famous for Samba, Carnival, and winning 5 FIFA World Cups.",
      "Planned federal capital is Brasília (built in the shape of an airplane), though Rio and São Paulo are larger.",
      "Flag features a yellow rhombus on a green field with a blue celestial globe reading 'Ordem e Progresso'."
    ],
    funFact: "Produces roughly one-third of the world's total coffee supply.",
    examPoints: "Founding member of the BRICS economic bloc and the largest economy in Latin America."
  },

  // 7. Saudi Arabia
  {
    id: "sa",
    name: "Saudi Arabia",
    continent: "Asia",
    region: "Middle East",
    flag: "🇸🇦",
    capital: "Riyadh",
    currency: "Saudi Riyal (SAR)",
    landmark: {
      name: "Masjid al-Haram (Kaaba) & Kingdom Centre",
      icon: "fa-kaaba",
      desc: "The holiest sanctuary in Islam surrounding the sacred Kaaba in the holy city of Makkah."
    },
    mapOutline: {
      shape: "Occupies approximately 80% of the vast Arabian Peninsula, bounded by the Red Sea and Persian Gulf.",
      borders: ["Jordan", "Iraq", "Kuwait", "Qatar", "Bahrain (via causeway)", "UAE", "Oman", "Yemen"],
      coastline: "Extensive Red Sea and Persian Gulf coastlines"
    },
    clues: [
      "Cradle of Islam containing the two holiest sanctuaries: Masjid al-Haram in Makkah and Masjid an-Nabawi in Madinah.",
      "World's leading petroleum exporter possessing the gigantic Ghawar oil field and Rub' al Khali (Empty Quarter) desert.",
      "Capital is Riyadh, national currency is the Riyal, and official language is Arabic.",
      "Green flag bearing the Islamic Shahada in white Thuluth calligraphy above a horizontal ceremonial sword."
    ],
    funFact: "Has no permanent natural flowing rivers, relying on massive coastal seawater desalination plants.",
    examPoints: "Founding member and de facto leader of OPEC and the Organization of Islamic Cooperation (OIC)."
  },

  // 8. Italy
  {
    id: "it",
    name: "Italy",
    continent: "Europe",
    region: "Southern Europe",
    flag: "🇮🇹",
    capital: "Rome",
    currency: "Euro (EUR)",
    landmark: {
      name: "Colosseum & Leaning Tower of Pisa",
      icon: "fa-landmark",
      desc: "Ancient Roman amphitheater completed in 80 CE capable of holding 50,000 to 80,000 spectators."
    },
    mapOutline: {
      shape: "Famous boot-shaped peninsula jutting south into the central Mediterranean Sea, including Sicily and Sardinia.",
      borders: ["France", "Switzerland", "Austria", "Slovenia", "Enclaves: San Marino and Vatican City"],
      coastline: "Over 7,600 km along the Mediterranean, Adriatic, and Tyrrhenian seas"
    },
    clues: [
      "Instantly recognizable by its distinctive geographic boot-shaped peninsula protruding into the Mediterranean Sea.",
      "Heart of the Roman Empire and birthplace of the Renaissance, holding the most UNESCO World Heritage Sites in the world (59).",
      "Capital is Rome (the 'Eternal City') and entirely encloses the independent papal city-state of Vatican City.",
      "Tricolor flag featuring three equal vertical stripes of green, white, and red."
    ],
    funFact: "Encloses two sovereign enclave states completely inside its borders: San Marino and Vatican City.",
    examPoints: "Founding member of the European Union, NATO, and the G7 group of advanced industrialized democracies."
  },

  // 9. China
  {
    id: "cn",
    name: "China",
    continent: "Asia",
    region: "East Asia",
    flag: "🇨🇳",
    capital: "Beijing",
    currency: "Chinese Yuan / Renminbi (CNY, ¥)",
    landmark: {
      name: "Great Wall of China & Forbidden City",
      icon: "fa-monument",
      desc: "Series of stone fortifications stretching over 21,000 km across northern frontiers built across multiple dynasties."
    },
    mapOutline: {
      shape: "Sprawling continental landmass spanning 5 time zones (operating on a single standard time: Beijing Time).",
      borders: ["Bordering 14 sovereign nations including Russia, Pakistan, India, Mongolia, and Vietnam"],
      coastline: "Over 14,500 km along the Pacific / Yellow / East China / South China seas"
    },
    clues: [
      "World's leading manufacturing workshop and second-largest economy, home to the Yangtze and Yellow rivers.",
      "Civilization that invented paper, printing, gunpowder, and the magnetic compass.",
      "Capital is Beijing, currency is the Renminbi/Yuan, and largest port/financial city is Shanghai.",
      "Solid crimson-red flag featuring one large gold star accompanied by an arc of four smaller gold stars."
    ],
    funFact: "Despite stretching across over 5,000 km east-to-west, the entire country operates on a single official time zone.",
    examPoints: "Permanent UN Security Council member (P5); spearheads the global Belt and Road Initiative (BRI) and CPEC."
  },

  // 10. South Africa
  {
    id: "za",
    name: "South Africa",
    continent: "Africa",
    region: "Southern Africa",
    flag: "🇿🇦",
    capital: "Pretoria (Exec), Cape Town (Legis), Bloemfontein (Judic)",
    currency: "South African Rand (ZAR)",
    landmark: {
      name: "Table Mountain & Robben Island",
      icon: "fa-mountain",
      desc: "Flat-topped sandstone mountain overlooking Cape Town and Table Bay, with Robben Island prison in view."
    },
    mapOutline: {
      shape: "Southernmost tip of the African continent, completely surrounding the landlocked enclave kingdom of Lesotho.",
      borders: ["Namibia", "Botswana", "Zimbabwe", "Mozambique", "Eswatini", "Enclave: Lesotho"],
      coastline: "2,798 km where the Atlantic and Indian oceans meet at Cape Agulhas"
    },
    clues: [
      "The only country in the world with three official capital cities: Executive, Legislative, and Judicial.",
      "Known as the 'Rainbow Nation' following the dismantling of apartheid under Nobel laureate Nelson Mandela in 1994.",
      "Features Table Mountain, Kruger National Park, and the Cape of Good Hope maritime chokepoint.",
      "Six-color flag featuring a horizontal green 'Y' shape with red, blue, black, gold, and white sections."
    ],
    funFact: "Has 12 official languages and holds the southernmost point of Africa at Cape Agulhas (not Cape of Good Hope).",
    examPoints: "Founding African member of BRICS (joined 2010); brought the historic genocide case against Israel to the ICJ (2024)."
  },

  // 11. Australia
  {
    id: "au",
    name: "Australia",
    continent: "Oceania",
    region: "Australasia",
    flag: "🇦🇺",
    capital: "Canberra",
    currency: "Australian Dollar (AUD)",
    landmark: {
      name: "Sydney Opera House & Uluru (Ayers Rock)",
      icon: "fa-landmark",
      desc: "Expressionist architectural icon featuring interlocking concrete shells resembling billowing ship sails."
    },
    mapOutline: {
      shape: "Single island continent surrounded by the Indian and Pacific oceans, completely in the Southern Hemisphere.",
      borders: ["No land borders; surrounded entirely by oceans"],
      coastline: "34,218 km of continuous oceanic coastline"
    },
    clues: [
      "The only nation that occupies an entire geographic continent by itself, often dubbed 'The Land Down Under'.",
      "Home to unique marsupials (kangaroos, koalas), the vast desert Outback, and the Great Barrier Reef.",
      "Capital is Canberra (selected as a compromise between Sydney and Melbourne) and currency is the Australian Dollar.",
      "Blue ensign flag with the Union Jack in the canton, a large seven-pointed Commonwealth Star, and the Southern Cross."
    ],
    funFact: "The Great Barrier Reef is the world's largest living organism structure, visible from outer space.",
    examPoints: "Core member of the AUKUS security alliance with the US and UK, and the Quadrilateral Security Dialogue (Quad)."
  },

  // 12. Peru
  {
    id: "pe",
    name: "Peru",
    continent: "Americas",
    region: "South America",
    flag: "🇵🇪",
    capital: "Lima",
    currency: "Peruvian Sol (PEN)",
    landmark: {
      name: "Machu Picchu & Nazca Lines",
      icon: "fa-mountain-city",
      desc: "15th-century Inca citadel built 2,430 meters above sea level on an Andean mountain ridge above the Urubamba River."
    },
    mapOutline: {
      shape: "Western South America along the Pacific Ocean, traversed by the high Andes mountains and Amazon basin.",
      borders: ["Ecuador", "Colombia", "Brazil", "Bolivia", "Chile"],
      coastline: "2,414 km on the South Pacific Ocean"
    },
    clues: [
      "Heartland of the ancient Inca Empire, holding the misty cloud-forest ruins of Machu Picchu.",
      "Home to the enigmatic Nazca Lines geoglyphs etched into desert sands and Lake Titicaca, the world's highest navigable lake.",
      "Capital is Lima on the Pacific coast and national currency is the Sol.",
      "Vertical triband flag of red, white, and red with the national coat of arms in the center."
    ],
    funFact: "Origin homeland of the potato: over 4,000 native varieties of potato are cultivated here.",
    examPoints: "Member of the Pacific Alliance and the Asia-Pacific Economic Cooperation (APEC) forum."
  },

  // 13. Jordan
  {
    id: "jo",
    name: "Jordan",
    continent: "Asia",
    region: "Middle East",
    flag: "🇯🇴",
    capital: "Amman",
    currency: "Jordanian Dinar (JOD)",
    landmark: {
      name: "The Treasury at Petra (Al-Khazneh)",
      icon: "fa-landmark-dome",
      desc: "Magnificent classical temple facade carved directly into sandstone rock faces by the Nabataean Kingdom in the 1st century CE."
    },
    mapOutline: {
      shape: "Landlocked except for a tiny 26-km coastline at the Gulf of Aqaba (Red Sea) in the southern tip.",
      borders: ["Syria", "Iraq", "Saudi Arabia", "Israel", "West Bank"],
      coastline: "26 km on the Gulf of Aqaba"
    },
    clues: [
      "Home to the ancient rose-red Nabataean archaeological city of Petra, one of the New Seven Wonders of the World.",
      "Borders the Dead Sea, the lowest land elevation point on the Earth's surface (~430 meters below sea level).",
      "Has its capital at Amman, currency is the Dinar, and is officially a Hashemite Kingdom.",
      "Pan-Arab tricolor of black, white, and green horizontal stripes with a red chevron bearing a seven-pointed white star."
    ],
    funFact: "The Dead Sea's water is nearly 10 times saltier than the ocean, making natural human floating effortless.",
    examPoints: "Custodian of Islamic and Christian holy sites in Jerusalem under the 1994 Jordan-Israel peace treaty."
  },

  // 14. United States
  {
    id: "us",
    name: "United States",
    continent: "Americas",
    region: "North America",
    flag: "🇺🇸",
    capital: "Washington, D.C.",
    currency: "United States Dollar (USD, $)",
    landmark: {
      name: "Statue of Liberty & Grand Canyon",
      icon: "fa-monument",
      desc: "Colossal neoclassical copper sculpture on Liberty Island in New York Harbor gifted by France in 1886."
    },
    mapOutline: {
      shape: "Spans North America from Atlantic to Pacific, plus the detached territories of Alaska and Hawaiian islands.",
      borders: ["Canada", "Mexico"],
      coastline: "19,924 km across Atlantic, Pacific, and Arctic oceans"
    },
    clues: [
      "World's largest national economy by nominal GDP and issuer of the global reserve currency (US Dollar).",
      "Constitutional federal republic of 50 states, home to the Grand Canyon, Silicon Valley, and Hollywood.",
      "Federal capital is Washington, D.C., located on the Potomac River (not part of any state).",
      "Flag features 13 alternating red and white stripes and a blue canton containing 50 white stars ('Stars and Stripes')."
    ],
    funFact: "Has no official federal language codified in its constitution, though English is de facto national language.",
    examPoints: "Permanent UN Security Council member (P5); NATO founding leader and core pillar of the Bretton Woods system."
  },

  // 15. Russia
  {
    id: "ru",
    name: "Russia",
    continent: "Europe / Asia",
    region: "Northern Eurasia",
    flag: "🇷🇺",
    capital: "Moscow",
    currency: "Russian Ruble (RUB)",
    landmark: {
      name: "Saint Basil's Cathedral & Kremlin",
      icon: "fa-monument",
      desc: "Vibrant onion-domed cathedral in Moscow's Red Square commissioned by Ivan the Terrible in 1555."
    },
    mapOutline: {
      shape: "Largest country in the world by land area (over 17 million km²), spanning 11 continuous time zones.",
      borders: ["Borders 14 nations from Norway and Finland in Europe to China and North Korea in Asia"],
      coastline: "37,653 km along Arctic and Pacific oceans, Baltic and Black seas"
    },
    clues: [
      "The largest country on Earth by geographic area, covering one-eighth of the planet's inhabited landmass.",
      "Spans 11 time zones and contains the world's deepest lake (Lake Baikal) and longest railway (Trans-Siberian).",
      "Capital is Moscow, currency is the Ruble, and political executive headquarters is the Kremlin.",
      "Horizontal tricolor flag consisting of three equal bands of white at top, blue in middle, and red at bottom."
    ],
    funFact: "Possesses roughly one-fifth of the world's total forested area and holds the world's largest nuclear arsenal.",
    examPoints: "Permanent UN Security Council member (P5); currently engaged in the war in Ukraine since February 2022."
  },

  // 16. United Kingdom
  {
    id: "gb",
    name: "United Kingdom",
    continent: "Europe",
    region: "Western Europe",
    flag: "🇬🇧",
    capital: "London",
    currency: "British Pound Sterling (GBP, £)",
    landmark: {
      name: "Big Ben (Elizabeth Tower) & Stonehenge",
      icon: "fa-clock",
      desc: "Historic 96-meter clock tower housing the 13.7-ton Great Bell at the Palace of Westminster on the River Thames."
    },
    mapOutline: {
      shape: "Island nation off the northwestern coast of mainland Europe, comprising England, Scotland, Wales, and Northern Ireland.",
      borders: ["Republic of Ireland (only land border on the island of Ireland)"],
      coastline: "12,429 km on the Atlantic Ocean, North Sea, and English Channel"
    },
    clues: [
      "Island nation that gave birth to the Industrial Revolution, parliamentary democracy, and the English language.",
      "Composed of four constituent nations: England, Scotland, Wales, and Northern Ireland.",
      "Capital is London on the River Thames, currency is Pound Sterling, and monarch is King Charles III.",
      "Flag is the 'Union Jack', superimposing the crosses of St. George (England), St. Andrew (Scotland), and St. Patrick (Ireland)."
    ],
    funFact: "London's Underground ('The Tube') opened in 1863 as the world's first underground passenger railway.",
    examPoints: "Permanent UN Security Council member (P5); exited the European Union in 2020 ('Brexit')."
  },

  // 17. India
  {
    id: "in",
    name: "India",
    continent: "Asia",
    region: "South Asia",
    flag: "🇮🇳",
    capital: "New Delhi",
    currency: "Indian Rupee (INR, ₹)",
    landmark: {
      name: "Taj Mahal",
      icon: "fa-monument",
      desc: "17th-century white marble mausoleum on the Yamuna River in Agra built by Mughal Emperor Shah Jahan for Mumtaz Mahal."
    },
    mapOutline: {
      shape: "Triangular subcontinent peninsula bounded by the Arabian Sea, Bay of Bengal, and Himalayan mountains.",
      borders: ["Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
      coastline: "7,516 km on the Indian Ocean"
    },
    clues: [
      "The world's most populous nation (surpassing 1.4 billion people), celebrated as the world's largest democracy.",
      "Home to the white marble Taj Mahal, the holy Ganges River, and the Bollywood cinematic industry.",
      "Capital is New Delhi, currency is the Rupee, and ancient epic languages include Sanskrit and Tamil.",
      "Horizontal tricolor of deep saffron, white, and green with the 24-spoke navy blue Ashoka Chakra in the center."
    ],
    funFact: "Birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.",
    examPoints: "Member of BRICS, SCO, G20, and the Quad; non-signatory to the Nuclear Non-Proliferation Treaty (NPT)."
  },

  // 18. Germany
  {
    id: "de",
    name: "Germany",
    continent: "Europe",
    region: "Central Europe",
    flag: "🇩🇪",
    capital: "Berlin",
    currency: "Euro (EUR)",
    landmark: {
      name: "Brandenburg Gate & Neuschwanstein Castle",
      icon: "fa-archway",
      desc: "18th-century neoclassical monument in Berlin that stood as a symbol of Cold War division and subsequent German reunification."
    },
    mapOutline: {
      shape: "Central European hub stretching from the Alps in the south to the North and Baltic seas in the north.",
      borders: ["Denmark", "Poland", "Czechia", "Austria", "Switzerland", "France", "Luxembourg", "Belgium", "Netherlands"],
      coastline: "2,389 km on the North Sea and Baltic Sea"
    },
    clues: [
      "Europe's largest national economy, renowned for precision engineering, automotive manufacturing, and the Autobahn.",
      "Was divided into East and West during the Cold War until the fall of the Berlin Wall in November 1989.",
      "Capital is Berlin, financial banking hub is Frankfurt (ECB headquarters), and currency is the Euro.",
      "Horizontal tricolor flag featuring three equal bands of black, red, and gold (Schwarz-Rot-Gold)."
    ],
    funFact: "Has no general speed limit on roughly 70% of its national Autobahn highway network.",
    examPoints: "Core economic driver of the European Union; leading European member of the G7 and NATO."
  },

  // 19. Indonesia
  {
    id: "id",
    name: "Indonesia",
    continent: "Asia / Oceania",
    region: "Southeast Asia",
    flag: "🇮🇩",
    capital: "Jakarta (moving to Nusantara)",
    currency: "Indonesian Rupiah (IDR)",
    landmark: {
      name: "Borobudur Temple & Mount Bromo",
      icon: "fa-place-of-worship",
      desc: "World's largest Buddhist temple monument constructed in the 9th century CE in Central Java."
    },
    mapOutline: {
      shape: "World's largest archipelagic state comprising over 17,500 volcanic islands spanning the equator.",
      borders: ["Malaysia (on Borneo)", "Papua New Guinea", "East Timor"],
      coastline: "Over 54,700 km of tropical coastline"
    },
    clues: [
      "The world's largest Muslim-majority nation and largest archipelagic island country (over 17,500 islands).",
      "Controls vital strategic maritime straits: Malacca, Sunda, and Lombok connecting the Indian and Pacific oceans.",
      "Current capital is Jakarta on Java island, constructing a new jungle capital named Nusantara in East Kalimantan.",
      "Simple horizontal bicolor flag of red at the top and white at the bottom (Sang Saka Merah-Putih)."
    ],
    funFact: "Home to the world's largest living lizard species, the ferocious Komodo Dragon.",
    examPoints: "Founding member and de facto diplomatic leader of ASEAN; member of G20 and OIC."
  },

  // 20. Canada
  {
    id: "ca",
    name: "Canada",
    continent: "Americas",
    region: "North America",
    flag: "🇨🇦",
    capital: "Ottawa",
    currency: "Canadian Dollar (CAD)",
    landmark: {
      name: "CN Tower & Niagara Falls",
      icon: "fa-tower-observation",
      desc: "553-meter communications and observation tower in downtown Toronto, once the world's tallest freestanding structure."
    },
    mapOutline: {
      shape: "Occupies the northern half of North America, extending from the Atlantic to Pacific and northward into the Arctic.",
      borders: ["United States (the longest undefended international land border at 8,891 km)"],
      coastline: "World's longest coastline: 243,042 km"
    },
    clues: [
      "Second-largest country in the world by land area, boasting the longest coastline of any nation on Earth (243,000 km).",
      "Bilingual nation (English and French), famous for maple syrup, ice hockey, and the Canadian Rocky Mountains.",
      "Capital is Ottawa, largest cities are Toronto and Montreal, and currency is the Canadian Dollar.",
      "Red-white-red flag featuring an 11-pointed stylized red maple leaf centered on the white square field."
    ],
    funFact: "Has more natural freshwater lakes than all the rest of the world's countries combined.",
    examPoints: "Founding member of NATO, the G7, and the Commonwealth; shares the Arctic coastline."
  }
];

const fileContent = `/**
 * CSS PREP CENTRAL - GUESS THE COUNTRY GAME DATASET
 * Interactive Country Identification Engine for World Geography, FPSC, PPSC, and CSS Aspirants.
 * Features: High-Yield Clues, Landmarks, Map Silhouettes, Flags, Capitals, Currencies & Exam Facts.
 */

const GUESS_COUNTRY_DATA = ${JSON.stringify(countriesData, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GUESS_COUNTRY_DATA;
}
`;

fs.writeFileSync('frontend/js/data_guess_country.js', fileContent, 'utf8');
console.log('Successfully created frontend/js/data_guess_country.js with 20 base countries!');
