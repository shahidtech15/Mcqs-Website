/**
 * CSS PREP CENTRAL - GUESS THE COUNTRY GAME DATASET
 * Interactive Country Identification Engine for World Geography, FPSC, PPSC, and CSS Aspirants.
 * Features: 40 Global Countries across all Continents with Landmarks, Silhouettes, Progressive Clues & Exam Trivia.
 */

const GUESS_COUNTRY_DATA = [
  {
    "id": "pk",
    "name": "Pakistan",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇵🇰",
    "capital": "Islamabad",
    "currency": "Pakistani Rupee (PKR)",
    "landmark": {
      "name": "Badshahi Mosque & Faisal Mosque",
      "icon": "fa-mosque",
      "desc": "Architectural marvels representing Mughal majesty and modern Islamic geometry nestled against the Margalla Hills."
    },
    "mapOutline": {
      "shape": "Stretches from the Arabian Sea coast in the south through the fertile Indus plain to the towering Karakoram and Hindu Kush ranges in the north.",
      "borders": [
        "India",
        "China",
        "Afghanistan",
        "Iran"
      ],
      "coastline": "1,046 km along the Arabian Sea"
    },
    "clues": [
      "Home to the second-highest mountain peak on Earth (K2 at 8,611m) and the world's largest contiguous irrigation network.",
      "The ancient bronze-age urban metropolis of Mohenjo-Daro and the world's highest paved international border (Khunjerab Pass) are located here.",
      "Has its capital at Islamabad, currency is Rupee, and its national language is Urdu.",
      "National flag features a white crescent and five-pointed star on a dark green field with a vertical white stripe at the hoist."
    ],
    "funFact": "Home to the world's largest deep-sea warm-water port (Gwadar) and Khewra Salt Mine, the world's 2nd largest salt mine.",
    "examPoints": "Separated from Tajikistan by the narrow Wakhan Corridor (14–65 km wide). Signed the Indus Waters Treaty in 1960."
  },
  {
    "id": "tr",
    "name": "Turkey",
    "continent": "Asia / Europe",
    "region": "Eurasia / Middle East",
    "flag": "🇹🇷",
    "capital": "Ankara",
    "currency": "Turkish Lira (TRY)",
    "landmark": {
      "name": "Hagia Sophia & Blue Mosque",
      "icon": "fa-monument",
      "desc": "Massive 6th-century Byzantine cathedral converted into an imperial Ottoman mosque overlooking the Bosphorus Strait."
    },
    "mapOutline": {
      "shape": "Spans the Anatolian peninsula in Western Asia and Thrace in Southeastern Europe, bisected by the Turkish Straits.",
      "borders": [
        "Greece",
        "Bulgaria",
        "Georgia",
        "Armenia",
        "Azerbaijan",
        "Iran",
        "Iraq",
        "Syria"
      ],
      "coastline": "Coastlines on Black Sea, Aegean Sea, and Mediterranean Sea"
    },
    "clues": [
      "A transcontinental country straddling Europe and Asia across the strategic Bosphorus and Dardanelles straits.",
      "Its most famous historic city served as the imperial capital of both the Roman/Byzantine and Ottoman Empires.",
      "Capital is Ankara, its largest metropolis is Istanbul, and currency is the Lira.",
      "Flag features a prominent white crescent and a five-pointed star centered on a vibrant red background."
    ],
    "funFact": "Istanbul is the only metropolis in the world located on two separate continents simultaneously.",
    "examPoints": "Controls naval passage between the Black Sea and the Mediterranean under the 1936 Montreux Convention."
  },
  {
    "id": "eg",
    "name": "Egypt",
    "continent": "Africa",
    "region": "North Africa / Middle East",
    "flag": "🇪🇬",
    "capital": "Cairo",
    "currency": "Egyptian Pound (EGP)",
    "landmark": {
      "name": "Great Pyramids of Giza & Sphinx",
      "icon": "fa-monument",
      "desc": "The only surviving Wonder of the Ancient World, built over 4,500 years ago along the banks of the River Nile."
    },
    "mapOutline": {
      "shape": "Square-like territory in the northeast corner of Africa, including the Sinai Peninsula in Southwest Asia.",
      "borders": [
        "Libya",
        "Sudan",
        "Israel",
        "Palestine (Gaza Strip)"
      ],
      "coastline": "Mediterranean Sea to the north and Red Sea to the east"
    },
    "clues": [
      "Operates the world's most vital artificial sea-level canal connecting the Mediterranean Sea to the Red Sea.",
      "Revered as the 'Gift of the Nile', its civilization produced the hieroglyphic script, pharaohs, and massive pyramids.",
      "Capital is Cairo (the 'City of a Thousand Minarets') and currency is the Egyptian Pound.",
      "Tricolor flag of red, white, and black horizontal bands featuring the golden Eagle of Saladin in the center."
    ],
    "funFact": "The Suez Canal handles approximately 12% to 15% of total global trade volume.",
    "examPoints": "Governed by the 1888 Convention of Constantinople guaranteeing international maritime transit."
  },
  {
    "id": "jp",
    "name": "Japan",
    "continent": "Asia",
    "region": "East Asia",
    "flag": "🇯🇵",
    "capital": "Tokyo",
    "currency": "Japanese Yen (JPY)",
    "landmark": {
      "name": "Mount Fuji & Kinkaku-ji (Golden Pavilion)",
      "icon": "fa-mountain-sun",
      "desc": "Iconic symmetrical snow-capped active stratovolcano rising 3,776 meters southwest of Tokyo."
    },
    "mapOutline": {
      "shape": "Curved stratovolcanic archipelago consisting of 4 major islands: Honshu, Hokkaido, Kyushu, and Shikoku.",
      "borders": [
        "Maritime borders with Russia, China, South Korea, and North Korea"
      ],
      "coastline": "Over 29,700 km along the Pacific Ocean and Sea of Japan"
    },
    "clues": [
      "An island nation historically known as the 'Land of the Rising Sun' located in the Pacific Ring of Fire.",
      "Pioneered Shinkansen bullet trains, anime culture, robotics, and hosts the world's most populous metropolitan area.",
      "Capital is Tokyo, currency is the Yen, and highest mountain peak is Mount Fuji.",
      "Flag is called the 'Nisshōki' (Hinomaru), displaying a simple solid crimson-red disc on a clean white field."
    ],
    "funFact": "Has over 6,800 islands and boasts the world's highest life expectancy.",
    "examPoints": "Member of the G7 and the Quadrilateral Security Dialogue (Quad); constitution Article 9 renounces war."
  },
  {
    "id": "fr",
    "name": "France",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇫🇷",
    "capital": "Paris",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Eiffel Tower & Louvre Museum",
      "icon": "fa-archway",
      "desc": "330-meter wrought-iron lattice tower constructed for the 1889 World's Fair on the Champ de Mars."
    },
    "mapOutline": {
      "shape": "Hexagonal landmass bounded by the Atlantic Ocean, English Channel, Pyrenees, Alps, and Mediterranean Sea.",
      "borders": [
        "Belgium",
        "Luxembourg",
        "Germany",
        "Switzerland",
        "Italy",
        "Monaco",
        "Spain",
        "Andorra"
      ],
      "coastline": "Extensive Atlantic and Mediterranean coastlines"
    },
    "clues": [
      "Often referred to as 'L'Hexagone' due to its geographic six-sided boundary shape in Western Europe.",
      "Home to the Palace of Versailles, the world's most visited art museum (Louvre), and haute cuisine.",
      "Capital is Paris (the 'City of Light') and national currency is the Euro.",
      "The original revolutionary 'Tricolore' flag featuring three equal vertical bands of blue, white, and red."
    ],
    "funFact": "Most visited country in the world by international tourists, welcoming ~90 million visitors annually.",
    "examPoints": "Permanent member of the UN Security Council (P5) with nuclear weapon state status."
  },
  {
    "id": "br",
    "name": "Brazil",
    "continent": "Americas",
    "region": "South America",
    "flag": "🇧🇷",
    "capital": "Brasília",
    "currency": "Brazilian Real (BRL)",
    "landmark": {
      "name": "Christ the Redeemer & Sugarloaf Mountain",
      "icon": "fa-monument",
      "desc": "30-meter Art Deco statue of Jesus atop Mount Corcovado overlooking Rio de Janeiro."
    },
    "mapOutline": {
      "shape": "Dominates half of the South American continent, bordering every South American nation except Chile and Ecuador.",
      "borders": [
        "Uruguay",
        "Argentina",
        "Paraguay",
        "Bolivia",
        "Peru",
        "Colombia",
        "Venezuela",
        "Guyana",
        "Suriname",
        "French Guiana"
      ],
      "coastline": "7,491 km along the Atlantic Ocean"
    },
    "clues": [
      "Contains roughly 60% of the Amazon Rainforest, the world's largest river basin by discharge volume.",
      "The only Portuguese-speaking nation in the Americas, famous for Samba, Carnival, and winning 5 FIFA World Cups.",
      "Planned federal capital is Brasília (built in the shape of an airplane), though Rio and São Paulo are larger.",
      "Flag features a yellow rhombus on a green field with a blue celestial globe reading 'Ordem e Progresso'."
    ],
    "funFact": "Produces roughly one-third of the world's total coffee supply.",
    "examPoints": "Founding member of the BRICS economic bloc and the largest economy in Latin America."
  },
  {
    "id": "sa",
    "name": "Saudi Arabia",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇸🇦",
    "capital": "Riyadh",
    "currency": "Saudi Riyal (SAR)",
    "landmark": {
      "name": "Masjid al-Haram (Kaaba) & Kingdom Centre",
      "icon": "fa-kaaba",
      "desc": "The holiest sanctuary in Islam surrounding the sacred Kaaba in the holy city of Makkah."
    },
    "mapOutline": {
      "shape": "Occupies approximately 80% of the vast Arabian Peninsula, bounded by the Red Sea and Persian Gulf.",
      "borders": [
        "Jordan",
        "Iraq",
        "Kuwait",
        "Qatar",
        "Bahrain (via causeway)",
        "UAE",
        "Oman",
        "Yemen"
      ],
      "coastline": "Extensive Red Sea and Persian Gulf coastlines"
    },
    "clues": [
      "Cradle of Islam containing the two holiest sanctuaries: Masjid al-Haram in Makkah and Masjid an-Nabawi in Madinah.",
      "World's leading petroleum exporter possessing the gigantic Ghawar oil field and Rub' al Khali (Empty Quarter) desert.",
      "Capital is Riyadh, national currency is the Riyal, and official language is Arabic.",
      "Green flag bearing the Islamic Shahada in white Thuluth calligraphy above a horizontal ceremonial sword."
    ],
    "funFact": "Has no permanent natural flowing rivers, relying on massive coastal seawater desalination plants.",
    "examPoints": "Founding member and de facto leader of OPEC and the Organization of Islamic Cooperation (OIC)."
  },
  {
    "id": "it",
    "name": "Italy",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇮🇹",
    "capital": "Rome",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Colosseum & Leaning Tower of Pisa",
      "icon": "fa-landmark",
      "desc": "Ancient Roman amphitheater completed in 80 CE capable of holding 50,000 to 80,000 spectators."
    },
    "mapOutline": {
      "shape": "Famous boot-shaped peninsula jutting south into the central Mediterranean Sea, including Sicily and Sardinia.",
      "borders": [
        "France",
        "Switzerland",
        "Austria",
        "Slovenia",
        "Enclaves: San Marino and Vatican City"
      ],
      "coastline": "Over 7,600 km along the Mediterranean, Adriatic, and Tyrrhenian seas"
    },
    "clues": [
      "Instantly recognizable by its distinctive geographic boot-shaped peninsula protruding into the Mediterranean Sea.",
      "Heart of the Roman Empire and birthplace of the Renaissance, holding the most UNESCO World Heritage Sites in the world (59).",
      "Capital is Rome (the 'Eternal City') and entirely encloses the independent papal city-state of Vatican City.",
      "Tricolor flag featuring three equal vertical stripes of green, white, and red."
    ],
    "funFact": "Encloses two sovereign enclave states completely inside its borders: San Marino and Vatican City.",
    "examPoints": "Founding member of the European Union, NATO, and the G7 group of advanced industrialized democracies."
  },
  {
    "id": "cn",
    "name": "China",
    "continent": "Asia",
    "region": "East Asia",
    "flag": "🇨🇳",
    "capital": "Beijing",
    "currency": "Chinese Yuan / Renminbi (CNY, ¥)",
    "landmark": {
      "name": "Great Wall of China & Forbidden City",
      "icon": "fa-monument",
      "desc": "Series of stone fortifications stretching over 21,000 km across northern frontiers built across multiple dynasties."
    },
    "mapOutline": {
      "shape": "Sprawling continental landmass spanning 5 time zones (operating on a single standard time: Beijing Time).",
      "borders": [
        "Bordering 14 sovereign nations including Russia, Pakistan, India, Mongolia, and Vietnam"
      ],
      "coastline": "Over 14,500 km along the Pacific / Yellow / East China / South China seas"
    },
    "clues": [
      "World's leading manufacturing workshop and second-largest economy, home to the Yangtze and Yellow rivers.",
      "Civilization that invented paper, printing, gunpowder, and the magnetic compass.",
      "Capital is Beijing, currency is the Renminbi/Yuan, and largest port/financial city is Shanghai.",
      "Solid crimson-red flag featuring one large gold star accompanied by an arc of four smaller gold stars."
    ],
    "funFact": "Despite stretching across over 5,000 km east-to-west, the entire country operates on a single official time zone.",
    "examPoints": "Permanent UN Security Council member (P5); spearheads the global Belt and Road Initiative (BRI) and CPEC."
  },
  {
    "id": "za",
    "name": "South Africa",
    "continent": "Africa",
    "region": "Southern Africa",
    "flag": "🇿🇦",
    "capital": "Pretoria (Exec), Cape Town (Legis), Bloemfontein (Judic)",
    "currency": "South African Rand (ZAR)",
    "landmark": {
      "name": "Table Mountain & Robben Island",
      "icon": "fa-mountain",
      "desc": "Flat-topped sandstone mountain overlooking Cape Town and Table Bay, with Robben Island prison in view."
    },
    "mapOutline": {
      "shape": "Southernmost tip of the African continent, completely surrounding the landlocked enclave kingdom of Lesotho.",
      "borders": [
        "Namibia",
        "Botswana",
        "Zimbabwe",
        "Mozambique",
        "Eswatini",
        "Enclave: Lesotho"
      ],
      "coastline": "2,798 km where the Atlantic and Indian oceans meet at Cape Agulhas"
    },
    "clues": [
      "The only country in the world with three official capital cities: Executive, Legislative, and Judicial.",
      "Known as the 'Rainbow Nation' following the dismantling of apartheid under Nobel laureate Nelson Mandela in 1994.",
      "Features Table Mountain, Kruger National Park, and the Cape of Good Hope maritime chokepoint.",
      "Six-color flag featuring a horizontal green 'Y' shape with red, blue, black, gold, and white sections."
    ],
    "funFact": "Has 12 official languages and holds the southernmost point of Africa at Cape Agulhas (not Cape of Good Hope).",
    "examPoints": "Founding African member of BRICS (joined 2010); brought the historic genocide case against Israel to the ICJ (2024)."
  },
  {
    "id": "au",
    "name": "Australia",
    "continent": "Oceania",
    "region": "Australasia",
    "flag": "🇦🇺",
    "capital": "Canberra",
    "currency": "Australian Dollar (AUD)",
    "landmark": {
      "name": "Sydney Opera House & Uluru (Ayers Rock)",
      "icon": "fa-landmark",
      "desc": "Expressionist architectural icon featuring interlocking concrete shells resembling billowing ship sails."
    },
    "mapOutline": {
      "shape": "Single island continent surrounded by the Indian and Pacific oceans, completely in the Southern Hemisphere.",
      "borders": [
        "No land borders; surrounded entirely by oceans"
      ],
      "coastline": "34,218 km of continuous oceanic coastline"
    },
    "clues": [
      "The only nation that occupies an entire geographic continent by itself, often dubbed 'The Land Down Under'.",
      "Home to unique marsupials (kangaroos, koalas), the vast desert Outback, and the Great Barrier Reef.",
      "Capital is Canberra (selected as a compromise between Sydney and Melbourne) and currency is the Australian Dollar.",
      "Blue ensign flag with the Union Jack in the canton, a large seven-pointed Commonwealth Star, and the Southern Cross."
    ],
    "funFact": "The Great Barrier Reef is the world's largest living organism structure, visible from outer space.",
    "examPoints": "Core member of the AUKUS security alliance with the US and UK, and the Quadrilateral Security Dialogue (Quad)."
  },
  {
    "id": "pe",
    "name": "Peru",
    "continent": "Americas",
    "region": "South America",
    "flag": "🇵🇪",
    "capital": "Lima",
    "currency": "Peruvian Sol (PEN)",
    "landmark": {
      "name": "Machu Picchu & Nazca Lines",
      "icon": "fa-mountain-city",
      "desc": "15th-century Inca citadel built 2,430 meters above sea level on an Andean mountain ridge above the Urubamba River."
    },
    "mapOutline": {
      "shape": "Western South America along the Pacific Ocean, traversed by the high Andes mountains and Amazon basin.",
      "borders": [
        "Ecuador",
        "Colombia",
        "Brazil",
        "Bolivia",
        "Chile"
      ],
      "coastline": "2,414 km on the South Pacific Ocean"
    },
    "clues": [
      "Heartland of the ancient Inca Empire, holding the misty cloud-forest ruins of Machu Picchu.",
      "Home to the enigmatic Nazca Lines geoglyphs etched into desert sands and Lake Titicaca, the world's highest navigable lake.",
      "Capital is Lima on the Pacific coast and national currency is the Sol.",
      "Vertical triband flag of red, white, and red with the national coat of arms in the center."
    ],
    "funFact": "Origin homeland of the potato: over 4,000 native varieties of potato are cultivated here.",
    "examPoints": "Member of the Pacific Alliance and the Asia-Pacific Economic Cooperation (APEC) forum."
  },
  {
    "id": "jo",
    "name": "Jordan",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇯🇴",
    "capital": "Amman",
    "currency": "Jordanian Dinar (JOD)",
    "landmark": {
      "name": "The Treasury at Petra (Al-Khazneh)",
      "icon": "fa-landmark-dome",
      "desc": "Magnificent classical temple facade carved directly into sandstone rock faces by the Nabataean Kingdom in the 1st century CE."
    },
    "mapOutline": {
      "shape": "Landlocked except for a tiny 26-km coastline at the Gulf of Aqaba (Red Sea) in the southern tip.",
      "borders": [
        "Syria",
        "Iraq",
        "Saudi Arabia",
        "Israel",
        "West Bank"
      ],
      "coastline": "26 km on the Gulf of Aqaba"
    },
    "clues": [
      "Home to the ancient rose-red Nabataean archaeological city of Petra, one of the New Seven Wonders of the World.",
      "Borders the Dead Sea, the lowest land elevation point on the Earth's surface (~430 meters below sea level).",
      "Has its capital at Amman, currency is the Dinar, and is officially a Hashemite Kingdom.",
      "Pan-Arab tricolor of black, white, and green horizontal stripes with a red chevron bearing a seven-pointed white star."
    ],
    "funFact": "The Dead Sea's water is nearly 10 times saltier than the ocean, making natural human floating effortless.",
    "examPoints": "Custodian of Islamic and Christian holy sites in Jerusalem under the 1994 Jordan-Israel peace treaty."
  },
  {
    "id": "us",
    "name": "United States",
    "continent": "Americas",
    "region": "North America",
    "flag": "🇺🇸",
    "capital": "Washington, D.C.",
    "currency": "United States Dollar (USD, $)",
    "landmark": {
      "name": "Statue of Liberty & Grand Canyon",
      "icon": "fa-monument",
      "desc": "Colossal neoclassical copper sculpture on Liberty Island in New York Harbor gifted by France in 1886."
    },
    "mapOutline": {
      "shape": "Spans North America from Atlantic to Pacific, plus the detached territories of Alaska and Hawaiian islands.",
      "borders": [
        "Canada",
        "Mexico"
      ],
      "coastline": "19,924 km across Atlantic, Pacific, and Arctic oceans"
    },
    "clues": [
      "World's largest national economy by nominal GDP and issuer of the global reserve currency (US Dollar).",
      "Constitutional federal republic of 50 states, home to the Grand Canyon, Silicon Valley, and Hollywood.",
      "Federal capital is Washington, D.C., located on the Potomac River (not part of any state).",
      "Flag features 13 alternating red and white stripes and a blue canton containing 50 white stars ('Stars and Stripes')."
    ],
    "funFact": "Has no official federal language codified in its constitution, though English is de facto national language.",
    "examPoints": "Permanent UN Security Council member (P5); NATO founding leader and core pillar of the Bretton Woods system."
  },
  {
    "id": "ru",
    "name": "Russia",
    "continent": "Europe / Asia",
    "region": "Northern Eurasia",
    "flag": "🇷🇺",
    "capital": "Moscow",
    "currency": "Russian Ruble (RUB)",
    "landmark": {
      "name": "Saint Basil's Cathedral & Kremlin",
      "icon": "fa-monument",
      "desc": "Vibrant onion-domed cathedral in Moscow's Red Square commissioned by Ivan the Terrible in 1555."
    },
    "mapOutline": {
      "shape": "Largest country in the world by land area (over 17 million km²), spanning 11 continuous time zones.",
      "borders": [
        "Borders 14 nations from Norway and Finland in Europe to China and North Korea in Asia"
      ],
      "coastline": "37,653 km along Arctic and Pacific oceans, Baltic and Black seas"
    },
    "clues": [
      "The largest country on Earth by geographic area, covering one-eighth of the planet's inhabited landmass.",
      "Spans 11 time zones and contains the world's deepest lake (Lake Baikal) and longest railway (Trans-Siberian).",
      "Capital is Moscow, currency is the Ruble, and political executive headquarters is the Kremlin.",
      "Horizontal tricolor flag consisting of three equal bands of white at top, blue in middle, and red at bottom."
    ],
    "funFact": "Possesses roughly one-fifth of the world's total forested area and holds the world's largest nuclear arsenal.",
    "examPoints": "Permanent UN Security Council member (P5); currently engaged in the war in Ukraine since February 2022."
  },
  {
    "id": "gb",
    "name": "United Kingdom",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇬🇧",
    "capital": "London",
    "currency": "British Pound Sterling (GBP, £)",
    "landmark": {
      "name": "Big Ben (Elizabeth Tower) & Stonehenge",
      "icon": "fa-clock",
      "desc": "Historic 96-meter clock tower housing the 13.7-ton Great Bell at the Palace of Westminster on the River Thames."
    },
    "mapOutline": {
      "shape": "Island nation off the northwestern coast of mainland Europe, comprising England, Scotland, Wales, and Northern Ireland.",
      "borders": [
        "Republic of Ireland (only land border on the island of Ireland)"
      ],
      "coastline": "12,429 km on the Atlantic Ocean, North Sea, and English Channel"
    },
    "clues": [
      "Island nation that gave birth to the Industrial Revolution, parliamentary democracy, and the English language.",
      "Composed of four constituent nations: England, Scotland, Wales, and Northern Ireland.",
      "Capital is London on the River Thames, currency is Pound Sterling, and monarch is King Charles III.",
      "Flag is the 'Union Jack', superimposing the crosses of St. George (England), St. Andrew (Scotland), and St. Patrick (Ireland)."
    ],
    "funFact": "London's Underground ('The Tube') opened in 1863 as the world's first underground passenger railway.",
    "examPoints": "Permanent UN Security Council member (P5); exited the European Union in 2020 ('Brexit')."
  },
  {
    "id": "in",
    "name": "India",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇮🇳",
    "capital": "New Delhi",
    "currency": "Indian Rupee (INR, ₹)",
    "landmark": {
      "name": "Taj Mahal",
      "icon": "fa-monument",
      "desc": "17th-century white marble mausoleum on the Yamuna River in Agra built by Mughal Emperor Shah Jahan for Mumtaz Mahal."
    },
    "mapOutline": {
      "shape": "Triangular subcontinent peninsula bounded by the Arabian Sea, Bay of Bengal, and Himalayan mountains.",
      "borders": [
        "Pakistan",
        "China",
        "Nepal",
        "Bhutan",
        "Bangladesh",
        "Myanmar"
      ],
      "coastline": "7,516 km on the Indian Ocean"
    },
    "clues": [
      "The world's most populous nation (surpassing 1.4 billion people), celebrated as the world's largest democracy.",
      "Home to the white marble Taj Mahal, the holy Ganges River, and the Bollywood cinematic industry.",
      "Capital is New Delhi, currency is the Rupee, and ancient epic languages include Sanskrit and Tamil.",
      "Horizontal tricolor of deep saffron, white, and green with the 24-spoke navy blue Ashoka Chakra in the center."
    ],
    "funFact": "Birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.",
    "examPoints": "Member of BRICS, SCO, G20, and the Quad; non-signatory to the Nuclear Non-Proliferation Treaty (NPT)."
  },
  {
    "id": "de",
    "name": "Germany",
    "continent": "Europe",
    "region": "Central Europe",
    "flag": "🇩🇪",
    "capital": "Berlin",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Brandenburg Gate & Neuschwanstein Castle",
      "icon": "fa-archway",
      "desc": "18th-century neoclassical monument in Berlin that stood as a symbol of Cold War division and subsequent German reunification."
    },
    "mapOutline": {
      "shape": "Central European hub stretching from the Alps in the south to the North and Baltic seas in the north.",
      "borders": [
        "Denmark",
        "Poland",
        "Czechia",
        "Austria",
        "Switzerland",
        "France",
        "Luxembourg",
        "Belgium",
        "Netherlands"
      ],
      "coastline": "2,389 km on the North Sea and Baltic Sea"
    },
    "clues": [
      "Europe's largest national economy, renowned for precision engineering, automotive manufacturing, and the Autobahn.",
      "Was divided into East and West during the Cold War until the fall of the Berlin Wall in November 1989.",
      "Capital is Berlin, financial banking hub is Frankfurt (ECB headquarters), and currency is the Euro.",
      "Horizontal tricolor flag featuring three equal bands of black, red, and gold (Schwarz-Rot-Gold)."
    ],
    "funFact": "Has no general speed limit on roughly 70% of its national Autobahn highway network.",
    "examPoints": "Core economic driver of the European Union; leading European member of the G7 and NATO."
  },
  {
    "id": "id",
    "name": "Indonesia",
    "continent": "Asia / Oceania",
    "region": "Southeast Asia",
    "flag": "🇮🇩",
    "capital": "Jakarta (moving to Nusantara)",
    "currency": "Indonesian Rupiah (IDR)",
    "landmark": {
      "name": "Borobudur Temple & Mount Bromo",
      "icon": "fa-place-of-worship",
      "desc": "World's largest Buddhist temple monument constructed in the 9th century CE in Central Java."
    },
    "mapOutline": {
      "shape": "World's largest archipelagic state comprising over 17,500 volcanic islands spanning the equator.",
      "borders": [
        "Malaysia (on Borneo)",
        "Papua New Guinea",
        "East Timor"
      ],
      "coastline": "Over 54,700 km of tropical coastline"
    },
    "clues": [
      "The world's largest Muslim-majority nation and largest archipelagic island country (over 17,500 islands).",
      "Controls vital strategic maritime straits: Malacca, Sunda, and Lombok connecting the Indian and Pacific oceans.",
      "Current capital is Jakarta on Java island, constructing a new jungle capital named Nusantara in East Kalimantan.",
      "Simple horizontal bicolor flag of red at the top and white at the bottom (Sang Saka Merah-Putih)."
    ],
    "funFact": "Home to the world's largest living lizard species, the ferocious Komodo Dragon.",
    "examPoints": "Founding member and de facto diplomatic leader of ASEAN; member of G20 and OIC."
  },
  {
    "id": "ca",
    "name": "Canada",
    "continent": "Americas",
    "region": "North America",
    "flag": "🇨🇦",
    "capital": "Ottawa",
    "currency": "Canadian Dollar (CAD)",
    "landmark": {
      "name": "CN Tower & Niagara Falls",
      "icon": "fa-tower-observation",
      "desc": "553-meter communications and observation tower in downtown Toronto, once the world's tallest freestanding structure."
    },
    "mapOutline": {
      "shape": "Occupies the northern half of North America, extending from the Atlantic to Pacific and northward into the Arctic.",
      "borders": [
        "United States (the longest undefended international land border at 8,891 km)"
      ],
      "coastline": "World's longest coastline: 243,042 km"
    },
    "clues": [
      "Second-largest country in the world by land area, boasting the longest coastline of any nation on Earth (243,000 km).",
      "Bilingual nation (English and French), famous for maple syrup, ice hockey, and the Canadian Rocky Mountains.",
      "Capital is Ottawa, largest cities are Toronto and Montreal, and currency is the Canadian Dollar.",
      "Red-white-red flag featuring an 11-pointed stylized red maple leaf centered on the white square field."
    ],
    "funFact": "Has more natural freshwater lakes than all the rest of the world's countries combined.",
    "examPoints": "Founding member of NATO, the G7, and the Commonwealth; shares the Arctic coastline."
  },
  {
    "id": "ae",
    "name": "United Arab Emirates",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇦🇪",
    "capital": "Abu Dhabi",
    "currency": "UAE Dirham (AED)",
    "landmark": {
      "name": "Burj Khalifa & Sheikh Zayed Grand Mosque",
      "icon": "fa-building",
      "desc": "World's tallest freestanding building rising 828 meters in Dubai, and a white marble grand mosque in Abu Dhabi."
    },
    "mapOutline": {
      "shape": "Situated along the southeastern tip of the Arabian Peninsula bordering the Persian Gulf and Gulf of Oman.",
      "borders": [
        "Saudi Arabia",
        "Oman"
      ],
      "coastline": "1,318 km along the Persian Gulf and Gulf of Oman"
    },
    "clues": [
      "A federation of seven monarchical emirates located at the entrance to the strategic Strait of Hormuz.",
      "Home to the world's tallest skyscraper (Burj Khalifa), artificial palm islands, and the Jebel Ali megaport.",
      "Capital is Abu Dhabi, its largest global commercial metropolis is Dubai, and currency is the Dirham.",
      "Pan-Arab colors flag featuring three horizontal stripes of green, white, and black with a vertical red stripe at the hoist."
    ],
    "funFact": "Approximately 88% of the country's resident population consists of foreign expatriates and international workers.",
    "examPoints": "Signed the historic Abraham Accords in 2020; hosted the UN Climate Change Conference COP28 in Dubai (2023)."
  },
  {
    "id": "gr",
    "name": "Greece",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇬🇷",
    "capital": "Athens",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Acropolis & Parthenon",
      "icon": "fa-landmark",
      "desc": "Ancient 5th-century BCE Doric temple dedicated to the goddess Athena overlooking the city of Athens."
    },
    "mapOutline": {
      "shape": "Southernmost tip of the Balkan Peninsula with thousands of islands scattered across the Aegean and Ionian seas.",
      "borders": [
        "Albania",
        "North Macedonia",
        "Bulgaria",
        "Turkey"
      ],
      "coastline": "13,676 km (longest coastline in the Mediterranean basin)"
    },
    "clues": [
      "Celebrated as the birthplace of Western democracy, Western philosophy, theater, and the ancient Olympic Games.",
      "Features over 2,000 picturesque islands in the Aegean and Ionian seas, including Santorini and Crete.",
      "Capital is Athens (named after the goddess of wisdom), currency is the Euro, and language is Greek.",
      "Flag consists of nine horizontal blue and white stripes with a blue canton bearing a white Greek cross."
    ],
    "funFact": "Controls the world's largest merchant shipping fleet, holding over 20% of global commercial shipping capacity.",
    "examPoints": "Member of NATO and the EU; controls Aegean air and maritime approaches under the 1923 Treaty of Lausanne."
  },
  {
    "id": "mx",
    "name": "Mexico",
    "continent": "Americas",
    "region": "North America",
    "flag": "🇲🇽",
    "capital": "Mexico City",
    "currency": "Mexican Peso (MXN)",
    "landmark": {
      "name": "Chichen Itza & Teotihuacan Pyramids",
      "icon": "fa-monument",
      "desc": "Monumental step-pyramid temple of El Castillo built by the ancient Maya civilization in the Yucatan Peninsula."
    },
    "mapOutline": {
      "shape": "Forms the southern bridge of North America, tapering southward between the Pacific Ocean and Gulf of Mexico.",
      "borders": [
        "United States",
        "Guatemala",
        "Belize"
      ],
      "coastline": "9,330 km on the Pacific Ocean, Gulf of Mexico, and Caribbean Sea"
    },
    "clues": [
      "The most populous Spanish-speaking country in the world, cradle of the ancient Aztec and Maya civilizations.",
      "Famous for Chichen Itza (one of the New Seven Wonders), chocolate origin, Mariachi music, and spicy cuisine.",
      "Capital is Mexico City (built upon the ancient Aztec lake capital Tenochtitlan) and currency is the Peso.",
      "Vertical tricolor of green, white, and red with an eagle devouring a serpent atop a prickly pear cactus on the white stripe."
    ],
    "funFact": "Introduced chocolate, corn (maize), avocados, chili peppers, and vanilla to the rest of the world.",
    "examPoints": "Member of the USMCA free trade agreement (formerly NAFTA), G20, and the Pacific Alliance."
  },
  {
    "id": "ch",
    "name": "Switzerland",
    "continent": "Europe",
    "region": "Central Europe",
    "flag": "🇨🇭",
    "capital": "Bern (Federal City)",
    "currency": "Swiss Franc (CHF)",
    "landmark": {
      "name": "The Matterhorn & Chillon Castle",
      "icon": "fa-mountain",
      "desc": "Iconic 4,478-meter pyramidal peak in the Pennine Alps straddling the border between Switzerland and Italy."
    },
    "mapOutline": {
      "shape": "Landlocked alpine nation nestled in the heart of Europe dominated by the Swiss Alps and Jura mountains.",
      "borders": [
        "Germany",
        "France",
        "Italy",
        "Austria",
        "Liechtenstein"
      ],
      "coastline": "Landlocked (0 km coastline)"
    },
    "clues": [
      "Famous for perpetual armed neutrality, keeping peace without joining military conflicts since the Congress of Vienna (1815).",
      "Global banking powerhouse, famous for Swiss chocolate, precision luxury watches, and the Matterhorn mountain.",
      "Federal capital is Bern, financial banking center is Zurich, and currency is the Swiss Franc.",
      "One of only two sovereign countries with a square national flag: a bold white cross on a square red field."
    ],
    "funFact": "One of only two sovereign countries in the world with an official square flag (the other being Vatican City).",
    "examPoints": "Hosts the European headquarters of the United Nations (Palais des Nations) and Red Cross (ICRC) in Geneva."
  },
  {
    "id": "ke",
    "name": "Kenya",
    "continent": "Africa",
    "region": "East Africa",
    "flag": "🇰🇪",
    "capital": "Nairobi",
    "currency": "Kenyan Shilling (KES)",
    "landmark": {
      "name": "Maasai Mara National Reserve & Mount Kenya",
      "icon": "fa-tree",
      "desc": "Spectacular savanna ecosystem world-famous for the annual Great Migration of over two million wildebeest and zebras."
    },
    "mapOutline": {
      "shape": "Bisected horizontally by the equator on the Indian Ocean coast of East Africa, opening into the Great Rift Valley.",
      "borders": [
        "Ethiopia",
        "Somalia",
        "South Sudan",
        "Uganda",
        "Tanzania"
      ],
      "coastline": "536 km on the Indian Ocean"
    },
    "clues": [
      "Famous for the Great Wildebeest Migration across the Maasai Mara and producing world-record marathon runners.",
      "Contains the scenic Great Rift Valley, Mount Kenya (5,199m), and Lake Victoria shores.",
      "Capital is Nairobi (known as the 'Green City in the Sun') and national currency is the Kenyan Shilling.",
      "Flag features black, red, and green horizontal stripes bordered by white, charged with a traditional Maasai warrior shield and two crossed spears."
    ],
    "funFact": "Home to Olympic champions who hold almost all world records in middle and long-distance athletics (Eliud Kipchoge).",
    "examPoints": "Nairobi hosts the global headquarters of the United Nations Environment Programme (UNEP) and UN-Habitat."
  },
  {
    "id": "ar",
    "name": "Argentina",
    "continent": "Americas",
    "region": "South America",
    "flag": "🇦🇷",
    "capital": "Buenos Aires",
    "currency": "Argentine Peso (ARS)",
    "landmark": {
      "name": "Iguazu Falls & Perito Moreno Glacier",
      "icon": "fa-water",
      "desc": "Majestic system of 275 individual waterfalls on the Iguazu River on the border with Brazil, and massive Patagonian glaciers."
    },
    "mapOutline": {
      "shape": "Long triangular wedge occupying most of the Southern Cone of South America, between the Andes and Atlantic Ocean.",
      "borders": [
        "Chile",
        "Bolivia",
        "Paraguay",
        "Brazil",
        "Uruguay"
      ],
      "coastline": "4,989 km along the South Atlantic Ocean"
    },
    "clues": [
      "Home to the highest peak in the Western and Southern Hemispheres: Mount Aconcagua (6,961 meters / 22,838 ft).",
      "Birthplace of Tango dance, legendary footballers (Maradona and Messi), and vast agricultural Pampas cattle ranches.",
      "Capital is Buenos Aires on the Río de la Plata estuary, and currency is the Argentine Peso.",
      "Horizontal triband of light blue and white with the radiant golden 'Sun of May' (Sol de Mayo) in the center."
    ],
    "funFact": "Aconcagua in the Argentine Andes is the highest mountain outside of the Asian continent.",
    "examPoints": "Fought the 1982 Falklands War (Guerra de las Malvinas) against the United Kingdom; G20 member state."
  },
  {
    "id": "es",
    "name": "Spain",
    "continent": "Europe",
    "region": "Southwestern Europe",
    "flag": "🇪🇸",
    "capital": "Madrid",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Alhambra Palace & Sagrada Família",
      "icon": "fa-mosque",
      "desc": "Breathtaking Moorish Islamic palace and fortress complex in Granada, and Antoni Gaudí's unfinished basilica in Barcelona."
    },
    "mapOutline": {
      "shape": "Occupies roughly 85% of the Iberian Peninsula, bordered by Portugal, the Pyrenees mountains, and Gibraltar.",
      "borders": [
        "Portugal",
        "France",
        "Andorra",
        "Gibraltar (UK)",
        "Morocco (via Ceuta and Melilla)"
      ],
      "coastline": "4,964 km on the Atlantic Ocean and Mediterranean Sea"
    },
    "clues": [
      "Occupies the vast majority of the Iberian Peninsula, separated from North Africa by the narrow Strait of Gibraltar.",
      "Home to centuries of Islamic Moorish heritage in Al-Andalus (Alhambra, Cordoba Mezquita) and Antoni Gaudí's architecture.",
      "Capital is Madrid in the geographic center, currency is the Euro, and language is Spanish (Castilian).",
      "Red-yellow-red horizontal triband with the national coat of arms depicting the Pillars of Hercules on the yellow stripe."
    ],
    "funFact": "Has an unusual national anthem ('Marcha Real') that has no official lyrics or words.",
    "examPoints": "Controls the North African coastal exclaves of Ceuta and Melilla bordering Morocco; NATO and EU member."
  },
  {
    "id": "ir",
    "name": "Iran",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇮🇷",
    "capital": "Tehran",
    "currency": "Iranian Rial (IRR)",
    "landmark": {
      "name": "Persepolis & Naqsh-e Jahan Square",
      "icon": "fa-landmark",
      "desc": "Ceremonial capital of the ancient Achaemenid Empire (518 BCE) and the stunning Safavid blue-tiled square in Isfahan."
    },
    "mapOutline": {
      "shape": "High arid plateau bounded by the Caspian Sea in the north, Zagros mountains in west, and Persian Gulf in south.",
      "borders": [
        "Pakistan",
        "Afghanistan",
        "Turkmenistan",
        "Azerbaijan",
        "Armenia",
        "Turkey",
        "Iraq"
      ],
      "coastline": "2,440 km on the Caspian Sea, Persian Gulf, and Gulf of Oman"
    },
    "clues": [
      "Historic heartland of the ancient Persian Empire, famous for Persian carpets, saffron, pistachios, and poetry (Hafez, Rumi).",
      "Controls the northern littoral of the strategic Strait of Hormuz chokepoint through which 21M bpd of oil transits.",
      "Capital is Tehran situated at the foot of Mount Damavand, currency is the Rial, and official language is Persian (Farsi).",
      "Horizontal tricolor of green, white, and red with the stylized red emblem of Allah in the center and Kufic Takbir inscriptions."
    ],
    "funFact": "Mount Damavand (5,609m) in the Alborz range is the highest volcano in the entire continent of Asia.",
    "examPoints": "Became an Islamic Republic following the 1979 Revolution; signatory to the 2015 JCPOA nuclear accord."
  },
  {
    "id": "kr",
    "name": "South Korea",
    "continent": "Asia",
    "region": "East Asia",
    "flag": "🇰🇷",
    "capital": "Seoul",
    "currency": "South Korean Won (KRW, ₩)",
    "landmark": {
      "name": "Gyeongbokgung Palace & N Seoul Tower",
      "icon": "fa-landmark",
      "desc": "Main royal palace of the Joseon dynasty built in 1395, juxtaposed against Seoul's futuristic high-tech skyline."
    },
    "mapOutline": {
      "shape": "Occupies the southern half of the Korean Peninsula, separated from the north by the 4-km-wide Demilitarized Zone (DMZ).",
      "borders": [
        "North Korea (DMZ border along the 38th parallel)"
      ],
      "coastline": "2,413 km on the Yellow Sea, East China Sea, and Sea of Japan"
    },
    "clues": [
      "Global technological and cultural powerhouse: home to Samsung, Hyundai, LG, K-Pop music (BTS), and K-Dramas.",
      "Separated from its northern neighbor by the heavily fortified Demilitarized Zone (DMZ) along the 38th parallel.",
      "Capital is Seoul, currency is the Won, and indigenous phonetic writing system is Hangul (invented by King Sejong).",
      "Flag is the 'Taegeukgi', featuring a central red and blue Yin-Yang circle surrounded by four black trigrams on a white field."
    ],
    "funFact": "Rose from one of the poorest post-war nations in the 1950s to an economic powerhouse in the 'Miracle on the Han River'.",
    "examPoints": "US treaty ally hosting major US military bases; global leader in semiconductor microchip manufacturing."
  },
  {
    "id": "ma",
    "name": "Morocco",
    "continent": "Africa",
    "region": "North Africa",
    "flag": "🇲🇦",
    "capital": "Rabat",
    "currency": "Moroccan Dirham (MAD)",
    "landmark": {
      "name": "Hassan II Mosque & Medina of Fez",
      "icon": "fa-mosque",
      "desc": "Grand Atlantic oceanfront mosque in Casablanca with a 210-meter minaret, the tallest minaret in Africa."
    },
    "mapOutline": {
      "shape": "Northwestern corner of Africa, separated from Spain by just 14 km across the Strait of Gibraltar.",
      "borders": [
        "Algeria",
        "Western Sahara",
        "Spanish exclaves Ceuta and Melilla"
      ],
      "coastline": "1,835 km on the Atlantic Ocean and Mediterranean Sea"
    },
    "clues": [
      "Only African nation with coastlines on both the Atlantic Ocean and Mediterranean Sea, separated from Spain by 14 km.",
      "Home to the High Atlas mountains, ancient walled medinas (Fez, Marrakech), and aromatic mint tea.",
      "Capital is Rabat, its largest economic port city is Casablanca, and official currency is the Dirham.",
      "Vibrant red field flag featuring a solitary emerald-green pentagram star (Seal of Solomon) in the center."
    ],
    "funFact": "University of al-Qarawiyyin in Fez, founded in 859 CE by Fatima al-Fihri, is the oldest continuously operating university on Earth.",
    "examPoints": "Claimant sovereign over Western Sahara; signed the Abraham Accords normalization pact in 2020."
  },
  {
    "id": "nz",
    "name": "New Zealand",
    "continent": "Oceania",
    "region": "Polynesia",
    "flag": "🇳🇿",
    "capital": "Wellington",
    "currency": "New Zealand Dollar (NZD)",
    "landmark": {
      "name": "Milford Sound & Mount Cook (Aoraki)",
      "icon": "fa-water",
      "desc": "Breathtaking glacial fjord with towering cliffs and cascading waterfalls described by Rudyard Kipling as the 'Eighth Wonder of the World'."
    },
    "mapOutline": {
      "shape": "Two main landmasses: the North Island (Te Ika-a-Māui) and the South Island (Te Waipounamu) in the South Pacific.",
      "borders": [
        "Surrounded entirely by the Tasman Sea and Pacific Ocean"
      ],
      "coastline": "15,134 km of oceanic coastline"
    },
    "clues": [
      "Famous for indigenous Māori culture (the Haka dance), flightless Kiwi birds, and filming 'The Lord of the Rings'.",
      "Consists of two major mountainous islands: the North Island and the South Island in the southwestern Pacific Ocean.",
      "Capital is Wellington (the southernmost national capital in the world), and largest city is Auckland.",
      "Blue ensign flag featuring the British Union Jack in the canton and four red five-pointed stars with white borders representing the Southern Cross."
    ],
    "funFact": "Became the first country in the world to grant all women the right to vote in parliamentary elections (1893).",
    "examPoints": "Member of the 'Five Eyes' intelligence-sharing alliance with the US, UK, Canada, and Australia."
  },
  {
    "id": "vn",
    "name": "Vietnam",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇻🇳",
    "capital": "Hanoi",
    "currency": "Vietnamese Dong (VND)",
    "landmark": {
      "name": "Ha Long Bay & Golden Bridge Da Nang",
      "icon": "fa-water",
      "desc": "UNESCO World Heritage seascape featuring thousands of towering emerald limestone karsts and isles topped with rainforests."
    },
    "mapOutline": {
      "shape": "Distinctive narrow S-shaped strip stretching over 1,650 km along the eastern edge of the Indochinese Peninsula.",
      "borders": [
        "China",
        "Laos",
        "Cambodia"
      ],
      "coastline": "3,260 km on the South China Sea and Gulf of Tonkin"
    },
    "clues": [
      "S-shaped coastal nation celebrated for the limestone pillars of Ha Long Bay, the Mekong Delta, and Pho soup.",
      "Fought a landmark 20th-century war against French colonial forces (Dien Bien Phu 1954) and the United States (1975 unification).",
      "Capital is Hanoi in the north, largest economic engine is Ho Chi Minh City in the south, and currency is the Dong.",
      "Solid crimson-red flag charged with a prominent central five-pointed golden star symbolizing socialist unity."
    ],
    "funFact": "The world's second-largest exporter of coffee (after Brazil), producing massive volumes of Robusta coffee.",
    "examPoints": "Key littoral claimant in the South China Sea dispute against China's Nine-Dash Line; prominent ASEAN economy."
  },
  {
    "id": "th",
    "name": "Thailand",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇹🇭",
    "capital": "Bangkok",
    "currency": "Thai Baht (THB, ฿)",
    "landmark": {
      "name": "The Grand Palace & Wat Arun (Temple of Dawn)",
      "icon": "fa-place-of-worship",
      "desc": "Opulent 18th-century complex of royal residences and the Temple of the Emerald Buddha along the Chao Phraya River."
    },
    "mapOutline": {
      "shape": "Often compared to the shape of an elephant's head with the elongated trunk extending down the Malay Peninsula.",
      "borders": [
        "Myanmar",
        "Laos",
        "Cambodia",
        "Malaysia"
      ],
      "coastline": "3,219 km on the Gulf of Thailand and Andaman Sea"
    },
    "clues": [
      "The only nation in Southeast Asia that was never colonized by European imperial powers, historically known as Siam.",
      "Known as the 'Land of Smiles', famous for ornate Buddhist temples, Muay Thai boxing, and street food.",
      "Capital is Bangkok (Krung Thep), national currency is the Baht, and dominant religion is Theravada Buddhism.",
      "The 'Trairanga' flag displaying five horizontal stripes of red, white, blue, white, and red (with the central blue stripe twice as wide)."
    ],
    "funFact": "Bangkok's full ceremonial ceremonial name has 168 letters, making it the longest city place-name in the world according to Guinness.",
    "examPoints": "Founding member of ASEAN; considered proposing the Kra Isthmus Canal to bypass the Strait of Malacca."
  },
  {
    "id": "np",
    "name": "Nepal",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇳🇵",
    "capital": "Kathmandu",
    "currency": "Nepalese Rupee (NPR)",
    "landmark": {
      "name": "Mount Everest (Sagarmatha) & Pashupatinath",
      "icon": "fa-mountain-sun",
      "desc": "Highest mountain peak on Earth rising 8,848.86 meters above sea level in the Mahalangur Himal sub-range."
    },
    "mapOutline": {
      "shape": "Landlocked rectangular buffer state wedged tightly between the Tibetan Plateau (China) and northern India.",
      "borders": [
        "China (Tibet)",
        "India"
      ],
      "coastline": "Landlocked (0 km coastline)"
    },
    "clues": [
      "Home to 8 of the world's 14 highest Eight-Thousander mountains, including Mount Everest (Sagarmatha).",
      "Birthplace of Gautama Buddha (Lumbini) and legendary Gurkha warriors renowned for martial valor.",
      "Capital is Kathmandu, currency is the Nepalese Rupee, and official language is Nepali.",
      "The only country in the modern world with a non-quadrilateral flag (made of two stacked pennants with a sun and crescent moon)."
    ],
    "funFact": "Has the only non-rectangular national flag in the world, consisting of two stacked crimson pennants.",
    "examPoints": "Acts as a strategic Himalayan buffer state between two nuclear-armed giants: China and India."
  },
  {
    "id": "cl",
    "name": "Chile",
    "continent": "Americas",
    "region": "South America",
    "flag": "🇨🇱",
    "capital": "Santiago",
    "currency": "Chilean Peso (CLP)",
    "landmark": {
      "name": "Torres del Paine & Moai Statues (Easter Island)",
      "icon": "fa-mountain",
      "desc": "Granite mountain peaks in Patagonia, and monumental monolithic stone human figures on remote Rapa Nui (Easter Island)."
    },
    "mapOutline": {
      "shape": "Extremely long, narrow ribbon of land stretching over 4,300 km north to south, but averaging only 175 km wide.",
      "borders": [
        "Peru",
        "Bolivia",
        "Argentina"
      ],
      "coastline": "6,435 km on the South Pacific Ocean"
    },
    "clues": [
      "The longest and narrowest country in the world, spanning over 4,300 km from the driest desert to sub-Antarctic glaciers.",
      "Home to the Atacama Desert (where some weather stations have never recorded rain) and giant copper mining deposits.",
      "Capital is Santiago overlooked by the snow-capped Andes mountains, and currency is the Chilean Peso.",
      "Bicolor flag of white and red horizontal bands with a blue square canton in the upper hoist bearing a white five-pointed star."
    ],
    "funFact": "The Atacama Desert in northern Chile is so arid that NASA scientists use it to test Mars rover equipment.",
    "examPoints": "Controls the Strait of Magellan and Cape Horn; member of OECD and the Pacific Alliance."
  },
  {
    "id": "no",
    "name": "Norway",
    "continent": "Europe",
    "region": "Northern Europe / Scandinavia",
    "flag": "🇳🇴",
    "capital": "Oslo",
    "currency": "Norwegian Krone (NOK)",
    "landmark": {
      "name": "Geirangerfjord & Trolltunga",
      "icon": "fa-water",
      "desc": "Spectacular UNESCO-protected deep blue glacial fjord surrounded by majestic snow-covered mountain peaks and waterfalls."
    },
    "mapOutline": {
      "shape": "Long, narrow strip forming the western spine of the Scandinavian Peninsula, famous for deeply indented fjords.",
      "borders": [
        "Sweden",
        "Finland",
        "Russia"
      ],
      "coastline": "Over 83,000 km of coastline including fjords and islands"
    },
    "clues": [
      "Famous for magnificent coastal fjords, Viking history, the Northern Lights (Aurora Borealis), and the Midnight Sun.",
      "Consistently ranks near the top of the UN Human Development Index (HDI) and operates the world's largest sovereign wealth fund.",
      "Capital is Oslo (where the Nobel Peace Prize is awarded annually) and currency is the Norwegian Krone.",
      "Red field with a navy blue Scandinavian Nordic cross outlined in white extending to the edges of the flag."
    ],
    "funFact": "Its Government Pension Fund Global (Sovereign Wealth Fund) is worth over $1.7 Trillion, owning 1.5% of all global public companies.",
    "examPoints": "Founding member of NATO; non-EU member choosing instead to participate via the European Economic Area (EEA)."
  },
  {
    "id": "is",
    "name": "Iceland",
    "continent": "Europe",
    "region": "Nordic / North Atlantic",
    "flag": "🇮🇸",
    "capital": "Reykjavik",
    "currency": "Icelandic Króna (ISK)",
    "landmark": {
      "name": "Blue Lagoon & Gullfoss Waterfall",
      "icon": "fa-water",
      "desc": "Geothermal mineral-rich spa in a volcanic lava field, and thunderous double-cascade glacial waterfalls on the Golden Circle."
    },
    "mapOutline": {
      "shape": "Volcanic island situated on the Mid-Atlantic Ridge where the North American and Eurasian tectonic plates pull apart.",
      "borders": [
        "Isolated island in the North Atlantic just below the Arctic Circle"
      ],
      "coastline": "4,970 km of rugged oceanic coastline"
    },
    "clues": [
      "Known as the 'Land of Fire and Ice' due to its coexisting glaciers, active volcanoes, boiling geysers, and black sand beaches.",
      "Runs on nearly 100% renewable energy generated from clean geothermal and hydroelectric power sources.",
      "Capital is Reykjavik (the world's northernmost sovereign capital) and national currency is the Króna.",
      "Blue field featuring a bright red Nordic cross outlined in white."
    ],
    "funFact": "Has no standing armed forces (military army, navy, or air force), yet is a founding member of NATO.",
    "examPoints": "Home to the Althing (established 930 CE at Thingvellir), the oldest operating parliament in the world."
  },
  {
    "id": "uz",
    "name": "Uzbekistan",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇺🇿",
    "capital": "Tashkent",
    "currency": "Uzbekistani Som (UZS)",
    "landmark": {
      "name": "Registan Square (Samarkand) & Ark of Bukhara",
      "icon": "fa-mosque",
      "desc": "Spectacular Islamic ensemble of three monumental madrasahs adorned with dazzling blue mosaic and majolica tilework."
    },
    "mapOutline": {
      "shape": "One of only two doubly landlocked countries in the world (surrounded exclusively by other landlocked countries).",
      "borders": [
        "Kazakhstan",
        "Kyrgyzstan",
        "Tajikistan",
        "Afghanistan",
        "Turkmenistan"
      ],
      "coastline": "Doubly landlocked (shares drying Aral Sea basin)"
    },
    "clues": [
      "One of only two 'doubly landlocked' countries in the world (the other being Liechtenstein in Europe).",
      "Heart of the ancient Silk Road, containing the fabled architectural jewels of Samarkand, Bukhara, and Khiva.",
      "Capital is Tashkent (largest city in Central Asia), and national currency is the Som.",
      "Horizontal tricolor of blue, white, and green separated by red stripes, with a white crescent and 12 stars in the upper blue band."
    ],
    "funFact": "Birthplace of Timur (Tamerlane) and home to the grand turquoise madrasahs that influenced Mughal architecture in Pakistan.",
    "examPoints": "Major producer of cotton, gold (Muruntau mine), and uranium; member of the Shanghai Cooperation Organisation (SCO)."
  },
  {
    "id": "cu",
    "name": "Cuba",
    "continent": "Americas",
    "region": "Caribbean",
    "flag": "🇨🇺",
    "capital": "Havana",
    "currency": "Cuban Peso (CUP)",
    "landmark": {
      "name": "El Capitolio & Old Havana (Habana Vieja)",
      "icon": "fa-monument",
      "desc": "Neoclassical dome palace and pastel colonial plazas with 1950s American vintage classic cars cruising the Malecón."
    },
    "mapOutline": {
      "shape": "Long, narrow crocodile-shaped archipelago island situated at the entrance to the Gulf of Mexico.",
      "borders": [
        "Surrounded by water; US leases naval base at Guantanamo Bay"
      ],
      "coastline": "3,735 km on the Atlantic Ocean and Caribbean Sea"
    },
    "clues": [
      "The largest island in the Caribbean, famous for vintage 1950s American automobiles, world-class cigars, and Salsa music.",
      "Center of the 1962 Cuban Missile Crisis, which brought the world to the brink of nuclear warfare during the Cold War.",
      "Capital is Havana (Habana) on the northern coast, and currency is the Cuban Peso.",
      "Flag of five alternating blue and white horizontal stripes with a red equilateral triangle on the hoist containing a single white star."
    ],
    "funFact": "Boasts one of the highest physician-to-population ratios in the world and exports medical doctors globally.",
    "examPoints": "Subject to a continuous US economic trade embargo since 1960 under the Trading with the Enemy Act."
  },
  {
    "id": "sg",
    "name": "Singapore",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇸🇬",
    "capital": "Singapore (City-State)",
    "currency": "Singapore Dollar (SGD, $)",
    "landmark": {
      "name": "Marina Bay Sands & Gardens by the Bay",
      "icon": "fa-building",
      "desc": "Integrated resort featuring three 55-story hotel towers topped by a cantilevered SkyPark with an infinity pool."
    },
    "mapOutline": {
      "shape": "Diamond-shaped main island and 64 smaller islets at the southern tip of the Malay Peninsula on the Malacca Strait.",
      "borders": [
        "Connected to Malaysia via the Johor-Singapore Causeway and Second Link bridge"
      ],
      "coastline": "193 km of strategic maritime coastline"
    },
    "clues": [
      "A prosperous global financial and shipping city-state located at the southern chokepoint entrance of the Strait of Malacca.",
      "Transformed from a colonial trading post into one of the world's wealthiest nations under founding Prime Minister Lee Kuan Yew.",
      "Capital is the city of Singapore itself, currency is the Singapore Dollar, and symbol is the mythical Merlion (half-lion, half-fish).",
      "Bicolor flag of two equal horizontal bands of red and white, with a white crescent moon and five white stars in the canton."
    ],
    "funFact": "Known as the 'Garden City', nearly 50% of this ultra-dense global financial hub is covered in lush green vegetation.",
    "examPoints": "World's busiest container transshipment hub and top bunkering port; founding member of ASEAN."
  }
];

if (typeof window !== 'undefined') {
  window.GUESS_COUNTRY_DATA = GUESS_COUNTRY_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GUESS_COUNTRY_DATA;
}
