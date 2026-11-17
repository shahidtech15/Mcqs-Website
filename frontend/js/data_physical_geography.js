/**
 * CSS PREP CENTRAL - GLOBAL PHYSICAL GEOGRAPHY DATASET
 * Comprehensive, High-Yield Physical Geography Database for CSS, PMS, FPSC, PPSC, SPSC, UPSC & Competitive Examinations.
 * Categories: Mountains, Rivers, Lakes, Deserts, Seas, Oceans, Plateaus, Straits.
 */

const PHYSICAL_GEOGRAPHY_DATA = {
  "categories": [
    {
      "id": "all",
      "name": "All Features",
      "icon": "fa-earth-americas",
      "color": "#0284c7"
    },
    {
      "id": "mountains",
      "name": "Mountains & Ranges",
      "icon": "fa-mountain",
      "color": "#dc2626"
    },
    {
      "id": "rivers",
      "name": "Rivers & Basins",
      "icon": "fa-water",
      "color": "#0284c7"
    },
    {
      "id": "lakes",
      "name": "Lakes & Inland Waters",
      "icon": "fa-gem",
      "color": "#2563eb"
    },
    {
      "id": "deserts",
      "name": "Deserts & Arid Zones",
      "icon": "fa-sun",
      "color": "#d97706"
    },
    {
      "id": "seas",
      "name": "Seas & Gulfs",
      "icon": "fa-sailboat",
      "color": "#0891b2"
    },
    {
      "id": "oceans",
      "name": "Oceans & Trenches",
      "icon": "fa-compass",
      "color": "#1e3a8a"
    },
    {
      "id": "plateaus",
      "name": "Plateaus & Tablelands",
      "icon": "fa-volcano",
      "color": "#7c3aed"
    },
    {
      "id": "straits",
      "name": "Straits & Chokepoints",
      "icon": "fa-anchor",
      "color": "#059669"
    }
  ],
  "features": [
    {
      "id": "himalayas",
      "name": "Himalayas",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": 28,
      "lng": 86.9,
      "elevation": "8,848.86 m (Mount Everest)",
      "length": "2,400 km",
      "continents": "Asia",
      "countries": [
        "Nepal",
        "China (Tibet)",
        "India",
        "Pakistan",
        "Bhutan"
      ],
      "tagline": "Youngest & Highest Fold Mountain Range on Earth",
      "fastFacts": [
        "Formed by the ongoing collision of the Indian Tectonic Plate with the Eurasian Plate (began ~50M years ago).",
        "Hosts 10 of the world's 14 'Eight-Thousanders' (peaks above 8,000 meters), including Mount Everest (Sagarmatha / Chomolungma).",
        "Known as the 'Third Pole' due to holding the largest volume of glacial ice outside the Arctic and Antarctic."
      ],
      "geographicalSignificance": "Acts as a profound climatic barrier intercepting Summer Monsoon winds from the Indian Ocean, causing torrential rainfall on the subcontinent while creating the cold rain-shadow arid zone of Tibet and Central Asia. It is the watershed source of 10 major Asian rivers nourishing over 1.4 billion people.",
      "geopoliticalSignificance": "Frontier of historic strategic tension and disputed borders (Line of Actual Control between India and China, Line of Control in Kashmir). Critical reservoir of water security, hydroelectric potential, and biodiversity.",
      "examMcqPoints": [
        "Mount Everest height: 8,848.86 m (jointly measured by Nepal & China in 2020).",
        "Himalayas are 'Young Fold Mountains' formed in the Tertiary geological era.",
        "Passes connecting subcontinent to Central Asia: Karakoram Pass, Shipki La, Nathu La, Khunjerab Pass."
      ]
    },
    {
      "id": "karakoram",
      "name": "Karakoram Range",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": 35.88,
      "lng": 76.51,
      "elevation": "8,611 m (K2 / Godwin-Austen)",
      "length": "500 km",
      "continents": "Asia",
      "countries": [
        "Pakistan (Gilgit-Baltistan)",
        "China (Xinjiang)",
        "India (Ladakh)"
      ],
      "tagline": "The Savage Mountain & The World's Heaviest Glaciated Non-Polar Range",
      "fastFacts": [
        "Hosts K2 (8,611 m), the world's 2nd highest peak and one of the deadliest mountaineering ascents.",
        "Contains Siachen Glacier (76 km), Biafo Glacier (67 km), and Baltoro Glacier (63 km) — the longest glaciers outside polar zones.",
        "Displays the 'Karakoram Anomaly' where certain glaciers have remained stable or expanded despite global warming."
      ],
      "geographicalSignificance": "Forms the northern apex of the Indus River basin. Glacial meltwater from the Karakoram feeds over 70% of the upper Indus flows during summer, sustaining Pakistan's agrarian economy.",
      "geopoliticalSignificance": "Crossed by the China-Pakistan Economic Corridor (CPEC) via the Khunjerab Pass (4,693 m, highest paved international border crossing). Home to Siachen Glacier conflict — the world's highest battlefield.",
      "examMcqPoints": [
        "K2 is also known as Mount Godwin-Austen or Chogori.",
        "Khunjerab Pass connects Gilgit-Baltistan with Xinjiang, China.",
        "Siachen conflict began in April 1984 under Operation Meghdoot."
      ]
    },
    {
      "id": "hindu-kush",
      "name": "Hindu Kush",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": 36.25,
      "lng": 71.84,
      "elevation": "7,708 m (Tirich Mir)",
      "length": "800 km",
      "continents": "Asia",
      "countries": [
        "Afghanistan",
        "Pakistan (KPK / Chitral)"
      ],
      "tagline": "Historic Gateway of Invasions into South Asia",
      "fastFacts": [
        "Highest peak is Tirich Mir (7,708 m) situated in the Chitral District of Khyber Pakhtunkhwa, Pakistan.",
        "Extends southwest from the Pamir Knot through northern Pakistan into central Afghanistan.",
        "Pierced by historical strategic passes: Khyber Pass, Bolan Pass, Gomal Pass, and Salang Pass."
      ],
      "geographicalSignificance": "Acts as a major drainage divide between the Amu Darya (Oxus) basin to the north and the Indus basin (Kabul River) to the south.",
      "geopoliticalSignificance": "Historical invasion route of Alexander the Great, Babur, Mahmud Ghaznavi, and Ahmad Shah Abdali into northern India. Modern theater of asymmetric warfare and Durand Line border surveillance.",
      "examMcqPoints": [
        "Tirich Mir is the highest peak of the Hindu Kush range (7,708 m).",
        "Khyber Pass (1,070 m elevation) connects Peshawar (Pakistan) with Kabul/Jalalabad (Afghanistan).",
        "Pamir Knot is the common point from where Himalayas, Karakoram, Hindu Kush, and Tian Shan radiate."
      ]
    },
    {
      "id": "andes",
      "name": "Andes Mountains",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": -32.65,
      "lng": -70.01,
      "elevation": "6,961 m (Mount Aconcagua)",
      "length": "7,000 km",
      "continents": "South America",
      "countries": [
        "Argentina",
        "Chile",
        "Bolivia",
        "Peru",
        "Ecuador",
        "Colombia",
        "Venezuela"
      ],
      "tagline": "World's Longest Continental Mountain Range",
      "fastFacts": [
        "Stretches over 7,000 km continuously along the western spine of South America.",
        "Highest peak outside Asia is Mount Aconcagua (6,961 m) in Mendoza, Argentina.",
        "Formed by the subduction of the oceanic Nazca Plate beneath the South American Plate along the Peru-Chile Trench."
      ],
      "geographicalSignificance": "Causes extreme climatic contrasts: hyper-arid Atacama Desert on its western Pacific slope and lush Amazon Rainforest to the east. Source of the headwaters of the Amazon River (Nevado Mismi).",
      "geopoliticalSignificance": "Contains immense copper and lithium deposits (the 'Lithium Triangle' of Chile, Bolivia, and Argentina), gold, silver (historic Potosí mine), and hydro reservoirs.",
      "examMcqPoints": [
        "Longest mountain range in the world: Andes (7,000 km).",
        "Highest volcano in the world: Ojos del Salado (6,893 m) on Chile-Argentina border.",
        "Highest capital city in the world: La Paz, Bolivia (3,640 m elevation)."
      ]
    },
    {
      "id": "alps",
      "name": "The Alps",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": 45.83,
      "lng": 6.86,
      "elevation": "4,808 m (Mont Blanc)",
      "length": "1,200 km",
      "continents": "Europe",
      "countries": [
        "France",
        "Switzerland",
        "Italy",
        "Austria",
        "Germany",
        "Slovenia",
        "Liechtenstein",
        "Monaco"
      ],
      "tagline": "Hydrological & Geographic Spine of Central Europe",
      "fastFacts": [
        "Mont Blanc ('White Mountain', 4,808 m) on the French-Italian border is Western Europe's highest peak.",
        "Formed during the Alpine Orogeny by the collision of African and Eurasian tectonic plates.",
        "Source of Western Europe's major rivers: Rhine, Rhône, Po, and tributaries of the Danube."
      ],
      "geographicalSignificance": "Acts as Europe's primary watershed and climate boundary between the mild Mediterranean climate of southern Europe and the temperate maritime/continental climate of northwestern Europe.",
      "geopoliticalSignificance": "Heart of European transit networks; crossed by historic passes (St. Gotthard, Simplon, Brenner Pass) and modern base tunnels (Gotthard Base Tunnel — 57 km, world's longest rail tunnel).",
      "examMcqPoints": [
        "Highest peak of the Alps: Mont Blanc (4,808 m).",
        "Longest railway tunnel in the world: Gotthard Base Tunnel (Switzerland, 57 km).",
        "Major European rivers originating in the Alps: Rhine, Rhône, Inn, Po."
      ]
    },
    {
      "id": "rockies",
      "name": "Rocky Mountains",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": 39.11,
      "lng": -106.44,
      "elevation": "4,401 m (Mount Elbert)",
      "length": "4,800 km",
      "continents": "North America",
      "countries": [
        "United States",
        "Canada"
      ],
      "tagline": "The Continental Divide of North America",
      "fastFacts": [
        "Stretches 4,800 km from British Columbia/Alberta (Canada) south to New Mexico (USA).",
        "The highest peak is Mount Elbert (4,401 m) in Colorado, USA.",
        "Contains the 'Great Continental Divide' determining whether precipitation drains into the Atlantic or Pacific Ocean."
      ],
      "geographicalSignificance": "Source of major river systems: Missouri, Colorado, Columbia, Rio Grande, and Arkansas rivers. Delineates rain-shadow semi-arid Great Plains on its eastern flank.",
      "geopoliticalSignificance": "Rich in mineral reserves (gold, silver, copper, molybdenum, coal, oil shale) and vast timber reserves. Hosts Yellowstone National Park — the world's first national park (established 1872).",
      "examMcqPoints": [
        "First National Park in the world: Yellowstone (1872).",
        "Highest peak of the Rocky Mountains: Mount Elbert (4,401 m).",
        "Continental Divide separates Pacific drainage from Atlantic/Arctic drainage."
      ]
    },
    {
      "id": "urals",
      "name": "Ural Mountains",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": 65.03,
      "lng": 60.11,
      "elevation": "1,895 m (Mount Narodnaya)",
      "length": "2,500 km",
      "continents": "Europe / Asia",
      "countries": [
        "Russia",
        "Kazakhstan"
      ],
      "tagline": "The Conventional Boundary Between Europe & Asia",
      "fastFacts": [
        "One of the world's oldest surviving mountain ranges (Hercynian orogeny, ~300M years old).",
        "Stretches 2,500 km from the Kara Sea / Arctic Ocean southward to the Ural River and Kazakhstan.",
        "Extensively eroded, revealing enormous polymetallic mineral wealth."
      ],
      "geographicalSignificance": "Traditional cartographic and geographic boundary separating European Russia from Asian Siberia. Separates the East European Plain from the West Siberian Plain.",
      "geopoliticalSignificance": "Industrial backbone of Russia (Magnitogorsk, Yekaterinburg, Chelyabinsk). Heavy industrial evacuation center during World War II sustaining Soviet defense manufacturing.",
      "examMcqPoints": [
        "Boundary between Europe and Asia: Ural Mountains and Ural River.",
        "Highest peak of the Urals: Mount Narodnaya (1,895 m).",
        "Old fold mountains heavily rich in iron ore, platinum, and gems."
      ]
    },
    {
      "id": "atlas",
      "name": "Atlas Mountains",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": 31.06,
      "lng": -7.92,
      "elevation": "4,167 m (Toubkal)",
      "length": "2,500 km",
      "continents": "Africa",
      "countries": [
        "Morocco",
        "Algeria",
        "Tunisia"
      ],
      "tagline": "The Maghreb Shield Against the Sahara",
      "fastFacts": [
        "Highest peak is Mount Toubkal (4,167 m) in southwestern Morocco.",
        "Separates the fertile Mediterranean and Atlantic coastlines of North Africa from the arid Sahara Desert.",
        "Inhabited predominantly by indigenous Berber (Amazigh) populations for millennia."
      ],
      "geographicalSignificance": "Acts as a major rain barrier. North-facing slopes receive Mediterranean precipitation and sustain forests, while south-facing slopes descend into hyper-arid desert.",
      "geopoliticalSignificance": "Rich in phosphate reserves (Morocco holds over 70% of global phosphate reserves), iron ore, lead, and silver. Crucial for North African water catchments.",
      "examMcqPoints": [
        "Highest peak of Atlas Mountains: Mount Toubkal (4,167 m, Morocco).",
        "Atlas Mountains span Morocco, Algeria, and Tunisia (Maghreb region).",
        "Separates Mediterranean coastal plains from the Sahara Desert."
      ]
    },
    {
      "id": "kilimanjaro",
      "name": "Mount Kilimanjaro",
      "category": "mountains",
      "icon": "fa-volcano",
      "color": "#dc2626",
      "lat": -3.06,
      "lng": 37.35,
      "elevation": "5,895 m (Uhuru Peak)",
      "length": "Stratovolcano massif",
      "continents": "Africa",
      "countries": [
        "Tanzania"
      ],
      "tagline": "Roof of Africa & Highest Free-Standing Mountain on Earth",
      "fastFacts": [
        "Highest mountain in Africa and the highest single free-standing mountain summit in the world.",
        "Composed of three volcanic cones: Kibo (dormant, 5,895 m), Mawenzi (5,149 m), and Shira (4,005 m).",
        "Features equatorial glaciers that have shrunk by over 85% since 1912 due to climate change."
      ],
      "geographicalSignificance": "Located 330 km south of the Equator in the East African Rift system. Possesses five distinct ecological zones from base to summit: cultivated farmland, rainforest, heather-moorland, alpine desert, and arctic summit.",
      "geopoliticalSignificance": "UNESCO World Heritage site and cornerstone of East African tourism economy.",
      "examMcqPoints": [
        "Highest mountain in Africa: Mount Kilimanjaro (5,895 m, Tanzania).",
        "Kilimanjaro is a dormant volcanic mountain, not a fold mountain.",
        "The highest summit point on Kibo crater is named Uhuru Peak."
      ]
    },
    {
      "id": "nile",
      "name": "Nile River",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": 30.15,
      "lng": 31.25,
      "elevation": "Drains into Mediterranean Sea",
      "length": "6,650 km",
      "continents": "Africa",
      "countries": [
        "Egypt",
        "Sudan",
        "South Sudan",
        "Ethiopia",
        "Uganda",
        "Rwanda",
        "Burundi",
        "Tanzania",
        "Kenya",
        "DR Congo"
      ],
      "tagline": "Longest River in the World & Father of African Civilizations",
      "fastFacts": [
        "Generally recognized as the longest river in the world (6,650 km / 4,132 miles).",
        "Two main tributaries: White Nile (originates in Lake Victoria) and Blue Nile (originates in Lake Tana, Ethiopia).",
        "Confluence of Blue and White Nile occurs at Khartoum, capital of Sudan."
      ],
      "geographicalSignificance": "Creates an extraordinarily fertile green ribbon through the hyper-arid Sahara Desert, forming the extensive Nile Delta before emptying into the Mediterranean Sea. Blue Nile provides ~85% of water and silt during seasonal floods.",
      "geopoliticalSignificance": "Heart of modern hydropolitical tensions over the Grand Ethiopian Renaissance Dam (GERD), impacting Egypt's downstream water security. Governed historically by 1929 and 1959 Nile Waters Agreements.",
      "examMcqPoints": [
        "Longest river in the world: Nile River (6,650 km).",
        "White Nile and Blue Nile meet at: Khartoum (Sudan).",
        "Source of Blue Nile: Lake Tana (Ethiopia); Source of White Nile: Lake Victoria.",
        "Aswan High Dam was completed in 1970 on the Nile River, creating Lake Nasser."
      ]
    },
    {
      "id": "amazon",
      "name": "Amazon River",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": -2.16,
      "lng": -55.12,
      "elevation": "Discharges 209,000 m³/s into Atlantic",
      "length": "6,400 km (Basin: 7.05M km²)",
      "continents": "South America",
      "countries": [
        "Brazil",
        "Peru",
        "Colombia",
        "Bolivia",
        "Ecuador",
        "Venezuela",
        "Guyana"
      ],
      "tagline": "Largest River by Water Discharge Volume on Earth",
      "fastFacts": [
        "Discharges roughly 209,000 cubic meters of water per second into the Atlantic Ocean — more than the next seven largest rivers combined!",
        "Accounts for approximately 20% of the total global river flow into oceans.",
        "Has no bridges spanning its entire mainstem due to immense width (up to 40 km in wet season) and thick rainforest terrain."
      ],
      "geographicalSignificance": "Drains the Amazon Basin, home to the world's largest tropical rainforest ('Lungs of the Planet') and greatest terrestrial biodiversity. Originates in the Peruvian Andes (Nevado Mismi / Río Apurímac).",
      "geopoliticalSignificance": "Central to global carbon sequestration, indigenous rights, deforestation debates, and trans-Amazonian navigation.",
      "examMcqPoints": [
        "Largest river in the world by water volume and basin size: Amazon River.",
        "Amazon River has no bridges across its main river channel.",
        "Amazon River drains into the Atlantic Ocean."
      ]
    },
    {
      "id": "yangtze",
      "name": "Yangtze River (Chang Jiang)",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": 31.23,
      "lng": 121.47,
      "elevation": "Source: Tibetan Plateau (5,042 m)",
      "length": "6,300 km",
      "continents": "Asia",
      "countries": [
        "China"
      ],
      "tagline": "Longest River in Asia & 3rd Longest Globally",
      "fastFacts": [
        "Longest river in Asia and the longest river in the world flowing entirely within a single country.",
        "Rises on the Tanggula Mountains in the Tibetan Plateau and empties into the East China Sea at Shanghai.",
        "Home to the Three Gorges Dam — the world's largest hydroelectric power station (22,500 MW capacity)."
      ],
      "geographicalSignificance": "Yangtze river basin generates over 40% of China's GDP, feeds 400 million people, and provides one of the world's busiest inland freight waterways.",
      "geopoliticalSignificance": "Economic artery of Chinese industrial power, high-tech manufacturing, and agricultural rice bowl.",
      "examMcqPoints": [
        "Longest river in Asia: Yangtze River (6,300 km).",
        "World's largest hydroelectric dam: Three Gorges Dam on the Yangtze River.",
        "Empties into the East China Sea near Shanghai."
      ]
    },
    {
      "id": "mississippi",
      "name": "Mississippi-Missouri River System",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": 29.15,
      "lng": -89.25,
      "elevation": "Discharges into Gulf of Mexico",
      "length": "6,275 km (Combined)",
      "continents": "North America",
      "countries": [
        "United States",
        "Canada (tributaries)"
      ],
      "tagline": "Commercial Arterial Spine of North America",
      "fastFacts": [
        "The Missouri River is the longest single river in North America; combined with the Mississippi, it forms the 4th longest river system globally.",
        "Drains 32 US states and 2 Canadian provinces, emptying into the Gulf of Mexico through an enormous birdfoot delta.",
        "Key tributaries include the Ohio River, Arkansas River, and Red River."
      ],
      "geographicalSignificance": "Creates the immense alluvial soils of the American Corn Belt and agricultural heartland.",
      "geopoliticalSignificance": "Provides the United States with the world's most extensive, naturally connected, low-cost inland river navigation network, historically enabling rapid industrialization.",
      "examMcqPoints": [
        "Longest river in North America: Missouri River (3,767 km).",
        "Mississippi River empties into: Gulf of Mexico.",
        "Creates a classic 'Bird's Foot Delta' south of New Orleans."
      ]
    },
    {
      "id": "indus",
      "name": "Indus River (Sindhu)",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": 24,
      "lng": 67.5,
      "elevation": "Source: Lake Mansarovar (Tibet)",
      "length": "3,180 km",
      "continents": "Asia",
      "countries": [
        "Pakistan",
        "India",
        "China (Tibet)",
        "Afghanistan (Kabul river basin)"
      ],
      "tagline": "Lifeline of Pakistan & Cradle of the Indus Valley Civilization",
      "fastFacts": [
        "Originates near Lake Mansarovar / Mount Kailash in western Tibet as the Sengge Zangbo.",
        "Flows northwest through Ladakh, turns sharply south around Nanga Parbat, and bisects Pakistan from north to south before entering the Arabian Sea.",
        "Major eastern tributaries (Punjab 'Panjnad'): Jhelum, Chenab, Ravi, Beas, Sutlej."
      ],
      "geographicalSignificance": "Nourishes the Indus Basin Irrigation System (IBIS) — the largest contiguous canal irrigation network in the world. Sustains over 90% of Pakistan's agriculture and food security.",
      "geopoliticalSignificance": "Governed by the landmark Indus Waters Treaty (1960) brokered by the World Bank, allocating eastern rivers (Ravi, Beas, Sutlej) to India and western rivers (Indus, Jhelum, Chenab) to Pakistan.",
      "examMcqPoints": [
        "Total length of Indus River: 3,180 km (longest river of Pakistan).",
        "Indus Waters Treaty was signed on: September 19, 1960 in Karachi by Ayub Khan and Jawaharlal Nehru.",
        "Largest earth-filled dam in the world: Tarbela Dam on the Indus River.",
        "Panjnad is the confluence of 5 Punjab rivers in Muzaffargarh before joining the Indus."
      ]
    },
    {
      "id": "danube",
      "name": "Danube River",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": 45.2,
      "lng": 29.7,
      "elevation": "Source: Black Forest (Germany)",
      "length": "2,850 km",
      "continents": "Europe",
      "countries": [
        "Germany",
        "Austria",
        "Slovakia",
        "Hungary",
        "Croatia",
        "Serbia",
        "Romania",
        "Bulgaria",
        "Moldova",
        "Ukraine"
      ],
      "tagline": "Most International River in the World",
      "fastFacts": [
        "Flows through or borders 10 countries — more sovereign nations than any other river on Earth.",
        "Rises in the Black Forest in Germany and flows eastward into the Black Sea via the Danube Delta.",
        "Passes through 4 European national capitals: Vienna (Austria), Bratislava (Slovakia), Budapest (Hungary), and Belgrade (Serbia)."
      ],
      "geographicalSignificance": "Second longest river in Europe (after Volga). The Danube Delta is Europe's second-largest river delta and a pristine UNESCO Biosphere Reserve.",
      "geopoliticalSignificance": "Core pan-European transportation corridor linked to the Rhine via the Rhine-Main-Danube Canal, connecting the North Sea directly to the Black Sea.",
      "examMcqPoints": [
        "Danube river passes through 4 capital cities: Vienna, Bratislava, Budapest, Belgrade.",
        "River flowing through the highest number of sovereign countries: Danube (10 countries).",
        "Empties into: Black Sea."
      ]
    },
    {
      "id": "volga",
      "name": "Volga River",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": 46.3,
      "lng": 48,
      "elevation": "Source: Valdai Hills",
      "length": "3,530 km",
      "continents": "Europe",
      "countries": [
        "Russia"
      ],
      "tagline": "Longest River in Europe & Mother Volga",
      "fastFacts": [
        "Longest river in Europe and the largest river in terms of discharge and watershed in Europe.",
        "Rises in the Valdai Hills northwest of Moscow and flows into the landlocked Caspian Sea.",
        "Home to 11 of the 20 largest cities in Russia, including Nizhny Novgorod, Kazan, Samara, and Volgograd (Stalingrad)."
      ],
      "geographicalSignificance": "Forms the world's largest endorheic river delta as it empties into the Caspian Sea (28 m below global ocean level).",
      "geopoliticalSignificance": "Linked to the Don River via the Volga-Don Shipping Canal, giving landlocked Caspian waters access to the Sea of Azov and Black Sea.",
      "examMcqPoints": [
        "Longest river in Europe: Volga River (3,530 km).",
        "Volga River empties into: Caspian Sea (not the ocean).",
        "Volga-Don Canal connects the Caspian Sea to the Black Sea."
      ]
    },
    {
      "id": "caspian-sea",
      "name": "Caspian Sea",
      "category": "lakes",
      "icon": "fa-gem",
      "color": "#2563eb",
      "lat": 41.6,
      "lng": 50.6,
      "elevation": "-28 m (Below Sea Level)",
      "area": "371,000 km²",
      "depth": "1,025 m max depth",
      "continents": "Europe / Asia",
      "countries": [
        "Kazakhstan",
        "Russia",
        "Turkmenistan",
        "Azerbaijan",
        "Iran"
      ],
      "tagline": "World's Largest Inland Body of Water (Salt Lake)",
      "fastFacts": [
        "Largest enclosed inland body of water on Earth by surface area (371,000 km²) and volume.",
        "Often classified as the world's largest lake or a full-fledged inland sea; salinity is roughly one-third of ocean seawater (~1.2%).",
        "Has no natural marine outlets; primary water inflow is the Volga River (~80%)."
      ],
      "geographicalSignificance": "Endorheic basin situated in the Caspian Depression. Its northern section is shallow (5-6 m), while the southern basin reaches depths of 1,025 meters.",
      "geopoliticalSignificance": "Immense offshore petroleum and natural gas reserves (Kashagan, Shah Deniz, Tengiz). Governed by the historic 2018 Convention on the Legal Status of the Caspian Sea (signed in Aktau).",
      "examMcqPoints": [
        "Largest lake in the world by surface area and volume: Caspian Sea.",
        "5 littoral states bordering Caspian Sea: Russia, Iran, Azerbaijan, Kazakhstan, Turkmenistan.",
        "Surface level lies approximately 28 meters below sea level."
      ]
    },
    {
      "id": "lake-superior",
      "name": "Lake Superior",
      "category": "lakes",
      "icon": "fa-gem",
      "color": "#2563eb",
      "lat": 47.7,
      "lng": -87.5,
      "elevation": "183 m above sea level",
      "area": "82,100 km²",
      "depth": "406 m max depth",
      "continents": "North America",
      "countries": [
        "United States",
        "Canada"
      ],
      "tagline": "World's Largest Freshwater Lake by Surface Area",
      "fastFacts": [
        "Largest of the Great Lakes of North America and the largest freshwater lake in the world by surface area (82,100 km²).",
        "Holds more water than all the other Great Lakes combined (12,100 cubic km).",
        "Empties into Lake Huron via the St. Marys River and Soo Locks."
      ],
      "geographicalSignificance": "Formed by Pleistocene glacial scouring; features cold, oligotrophic waters with extraordinary water clarity.",
      "geopoliticalSignificance": "Vital commercial waterway for iron ore, grain, and manufacturing through the St. Lawrence Seaway, connecting midwest North America to global Atlantic markets.",
      "examMcqPoints": [
        "Largest freshwater lake by surface area in the world: Lake Superior.",
        "Great Lakes of North America (HOMES): Huron, Ontario, Michigan, Erie, Superior.",
        "Lake Michigan is the only Great Lake entirely within the United States."
      ]
    },
    {
      "id": "lake-baikal",
      "name": "Lake Baikal",
      "category": "lakes",
      "icon": "fa-gem",
      "color": "#2563eb",
      "lat": 53.5,
      "lng": 108,
      "elevation": "456 m",
      "area": "31,722 km²",
      "depth": "1,642 m (Deepest on Earth)",
      "continents": "Asia",
      "countries": [
        "Russia (Siberia)"
      ],
      "tagline": "Deepest & Oldest Freshwater Lake in the World",
      "fastFacts": [
        "Deepest lake in the world (1,642 meters / 5,387 ft) and the world's oldest lake (25 to 30 million years old).",
        "Contains 20% of the world's unfrozen surface freshwater — more freshwater than all five North American Great Lakes combined!",
        "Declared a UNESCO World Heritage site in 1996; home to the Baikal seal (nerpa), the world's only exclusively freshwater seal."
      ],
      "geographicalSignificance": "Active continental rift lake located in the Baikal Rift Zone, where the Earth's crust is slowly pulling apart by about 2 cm per year.",
      "geopoliticalSignificance": "Massive strategic freshwater reservoir and centerpiece of Siberian environmental conservation.",
      "examMcqPoints": [
        "Deepest lake in the world: Lake Baikal (1,642 m).",
        "Oldest lake in the world: Lake Baikal (25–30 million years).",
        "Holds roughly 20% of Earth's total liquid surface freshwater."
      ]
    },
    {
      "id": "lake-victoria",
      "name": "Lake Victoria (Ukerewe)",
      "category": "lakes",
      "icon": "fa-gem",
      "color": "#2563eb",
      "lat": -1,
      "lng": 33,
      "elevation": "1,135 m",
      "area": "68,800 km²",
      "depth": "84 m max depth",
      "continents": "Africa",
      "countries": [
        "Uganda",
        "Tanzania",
        "Kenya"
      ],
      "tagline": "Largest Lake in Africa & Primary Reservoir of the White Nile",
      "fastFacts": [
        "Largest lake in Africa by surface area and the world's 2nd largest freshwater lake by surface area (after Lake Superior).",
        "Relatively shallow with a maximum depth of only 84 meters and average depth of 40 meters.",
        "Named after Queen Victoria by British explorer John Hanning Speke in 1858."
      ],
      "geographicalSignificance": "Principal headwater reservoir of the White Nile River. Drained northward through the Victoria Nile into Lake Albert.",
      "geopoliticalSignificance": "Critical economic hub supporting over 40 million East Africans through fishing (Nile perch) and transport. Threatened by water hyacinth invasion and agricultural runoff.",
      "examMcqPoints": [
        "Largest lake in Africa: Lake Victoria (68,800 km²).",
        "Lake Victoria borders three countries: Tanzania (49%), Uganda (45%), Kenya (6%).",
        "Chief natural reservoir of the White Nile River."
      ]
    },
    {
      "id": "dead-sea",
      "name": "Dead Sea",
      "category": "lakes",
      "icon": "fa-gem",
      "color": "#2563eb",
      "lat": 31.5,
      "lng": 35.5,
      "elevation": "-430.5 m (Lowest Land on Earth)",
      "area": "605 km²",
      "depth": "304 m",
      "continents": "Asia",
      "countries": [
        "Jordan",
        "Palestine (West Bank)",
        "Israel"
      ],
      "tagline": "Lowest Elevation on Earth & Hypersaline Lake",
      "fastFacts": [
        "Its surface and shores are 430.5 meters (1,412 ft) below sea level — Earth's lowest elevation on land.",
        "One of the saltiest bodies of water in the world (34.2% salinity, roughly 9.6 times saltier than the ocean).",
        "High density creates natural human buoyancy, allowing swimmers to float effortlessly without swimming."
      ],
      "geographicalSignificance": "Terminal hypersaline endorheic lake located in the Jordan Rift Valley, fed primarily by the Jordan River. Extreme evaporation leaves behind mineral-rich potash and salts.",
      "geopoliticalSignificance": "Severe ecological desiccation: surface area has shrunk by over 30% in the last 40 years due to upstream water diversions from the Jordan River.",
      "examMcqPoints": [
        "Lowest point on the dry land surface of the Earth: Dead Sea shores (-430 m).",
        "Salinity of the Dead Sea: ~34% (no fish or aquatic plants can survive).",
        "Jordan River feeds into the Dead Sea."
      ]
    },
    {
      "id": "sahara",
      "name": "Sahara Desert",
      "category": "deserts",
      "icon": "fa-sun",
      "color": "#d97706",
      "lat": 23.4,
      "lng": 12.6,
      "area": "9,200,000 km²",
      "elevation": "Sea level to 3,415 m (Emi Koussi)",
      "continents": "Africa",
      "countries": [
        "Algeria",
        "Chad",
        "Egypt",
        "Libya",
        "Mali",
        "Mauritania",
        "Morocco",
        "Niger",
        "Sudan",
        "Tunisia",
        "Western Sahara"
      ],
      "tagline": "Largest Hot Subtropical Desert on Earth",
      "fastFacts": [
        "Largest hot desert in the world, covering over 9.2 million square kilometers — roughly the size of the entire United States or China!",
        "Comprises sand seas (ergs), stone plateaus (hamadas), gravel plains (regs), and salt flats (chotts).",
        "Transition zone to the south is the semi-arid Sahel belt."
      ],
      "geographicalSignificance": "Dominated by the subtropical high-pressure Hadley circulation. Transports massive plumes of mineral dust across the Atlantic Ocean, which fertilizes the Amazon Rainforest with essential phosphorus.",
      "geopoliticalSignificance": "Historic trans-Saharan camel caravan trade routes for gold, salt, and manuscripts (Timbuktu). Today, an active arena of border security, solar potential (Desertec concept), and hydrocarbon exploitation.",
      "examMcqPoints": [
        "Largest hot desert in the world: Sahara Desert.",
        "Southern transition zone of Sahara is called: The Sahel.",
        "Highest peak in the Sahara: Emi Koussi (3,415 m, Chad)."
      ]
    },
    {
      "id": "arabian-desert",
      "name": "Arabian Desert & Rub' al Khali",
      "category": "deserts",
      "icon": "fa-sun",
      "color": "#d97706",
      "lat": 22,
      "lng": 50,
      "area": "2,330,000 km²",
      "elevation": "Sea level to 3,666 m (Jabal Sawda)",
      "continents": "Asia",
      "countries": [
        "Saudi Arabia",
        "Yemen",
        "Oman",
        "UAE",
        "Qatar",
        "Kuwait",
        "Jordan",
        "Iraq"
      ],
      "tagline": "World's Largest Continuous Sand Sea (Empty Quarter)",
      "fastFacts": [
        "Occupies almost the entire Arabian Peninsula.",
        "Contains the Rub' al Khali ('Empty Quarter', 650,000 km²), the largest unbroken sand desert on the planet, with dunes up to 250 m high.",
        "Surrounded by the Red Sea, Persian Gulf, and Arabian Sea."
      ],
      "geographicalSignificance": "Extremely hyper-arid with zero perennial river systems. Underground fossil aquifers sustain oasis farming and date cultivation.",
      "geopoliticalSignificance": "Overlies the world's most concentrated conventional petroleum reserves (Ghawar field — world's largest conventional oil field).",
      "examMcqPoints": [
        "World's largest continuous sand desert: Rub' al Khali ('Empty Quarter').",
        "Ghawar oil field in Saudi Arabia is the largest conventional oil field on Earth.",
        "Occupies the vast majority of the Arabian Peninsula."
      ]
    },
    {
      "id": "gobi",
      "name": "Gobi Desert",
      "category": "deserts",
      "icon": "fa-sun",
      "color": "#d97706",
      "lat": 44,
      "lng": 105,
      "area": "1,295,000 km²",
      "elevation": "900 - 1,500 m",
      "continents": "Asia",
      "countries": [
        "Mongolia",
        "China (Inner Mongolia / Gansu / Xinjiang)"
      ],
      "tagline": "Cold Winter Continental Rain-Shadow Desert",
      "fastFacts": [
        "A cold continental desert where frost and occasional snowstorms occur due to polar Siberian air masses; temperatures drop to -40°C in winter.",
        "Formed because the towering Tibetan Plateau and Himalayas block rain-bearing clouds from the Indian Ocean (rain-shadow effect).",
        "Famous paleontological site where the first fossilized dinosaur eggs were discovered by Roy Chapman Andrews in 1923 (Flaming Cliffs)."
      ],
      "geographicalSignificance": "Consists predominantly of bare rock, gravel plains, and short steppe vegetation rather than sand dunes.",
      "geopoliticalSignificance": "Crossed by the ancient Silk Road; today traversed by the Trans-Mongolian Railway and China's 'Great Green Wall' desertification counter-offensive.",
      "examMcqPoints": [
        "Gobi Desert is located in: Mongolia and China.",
        "First dinosaur eggs were discovered in: Gobi Desert (Flaming Cliffs).",
        "Cold desert formed by the rain-shadow of the Himalayas."
      ]
    },
    {
      "id": "atacama",
      "name": "Atacama Desert",
      "category": "deserts",
      "icon": "fa-sun",
      "color": "#d97706",
      "lat": -23.86,
      "lng": -69.13,
      "area": "105,000 km²",
      "elevation": "Up to 5,000 m on plateau",
      "continents": "South America",
      "countries": [
        "Chile",
        "Peru",
        "Bolivia",
        "Argentina"
      ],
      "tagline": "Driest Non-Polar Desert on the Planet",
      "fastFacts": [
        "Known as the driest place on Earth outside of the Antarctic Dry Valleys; some weather stations in the central sector have never recorded a single drop of rain.",
        "Double rain shadow: blocked by the Andes Mountains to the east and the Chilean Coast Range to the west, combined with the cold desiccating Humboldt Current offshore.",
        "Extremely low humidity and high altitude make it the world's premier location for ground-based astronomical observatories (ALMA, VLT, ELT)."
      ],
      "geographicalSignificance": "Soil chemistry is so hyper-arid and devoid of organic life that NASA uses it to test Mars rovers and life-detection instruments.",
      "geopoliticalSignificance": "Enormous natural deposits of sodium nitrate (Chile saltpeter) sparked the War of the Pacific (1879–1884). Contains massive copper deposits (Escondida mine) and lithium brines.",
      "examMcqPoints": [
        "Driest non-polar desert in the world: Atacama Desert (Chile).",
        "Cold ocean current contributing to Atacama's dryness: Humboldt (Peru) Current.",
        "War of the Pacific was fought between Chile, Bolivia, and Peru over Atacama nitrate deposits."
      ]
    },
    {
      "id": "thar",
      "name": "Thar Desert (Great Indian Desert)",
      "category": "deserts",
      "icon": "fa-sun",
      "color": "#d97706",
      "lat": 27,
      "lng": 71,
      "area": "200,000 km²",
      "elevation": "100 - 450 m",
      "continents": "Asia",
      "countries": [
        "Pakistan (Sindh & Punjab)",
        "India (Rajasthan, Gujarat, Haryana, Punjab)"
      ],
      "tagline": "Most Densely Populated Desert in the World",
      "fastFacts": [
        "Most densely populated desert in the world (human population density of ~83 people per square kilometer).",
        "Roughly 85% is in India and 15% is in Pakistan (known as the Cholistan Desert in Punjab and Thar in Sindh).",
        "Bounded by the Indus River plain to the west, Rann of Kutch to the south, and Aravalli Range to the northeast."
      ],
      "geographicalSignificance": "Features shifting sand dunes (barchans), seasonal salt lakes (playas/dhands), and resilient drought-tolerant scrub flora.",
      "geopoliticalSignificance": "Site of Pakistan's Thar Coalfield (one of the world's largest lignite coal reserves, ~175 billion tonnes) and Indian nuclear testing sites (Pokhran).",
      "examMcqPoints": [
        "Most densely populated desert in the world: Thar Desert.",
        "Thar Desert extension in Pakistani Punjab is called: Cholistan Desert.",
        "Thar Coalfield holds roughly 175 billion tons of lignite coal in Sindh, Pakistan."
      ]
    },
    {
      "id": "mediterranean",
      "name": "Mediterranean Sea",
      "category": "seas",
      "icon": "fa-sailboat",
      "color": "#0891b2",
      "lat": 35,
      "lng": 18,
      "area": "2,500,000 km²",
      "depth": "5,267 m (Calypso Deep)",
      "continents": "Europe / Africa / Asia",
      "countries": [
        "Bordered by 21 modern sovereign nations across 3 continents"
      ],
      "tagline": "Cradle of Western Civilizations & Intercontinental Gateway",
      "fastFacts": [
        "Connected to the Atlantic Ocean via the Strait of Gibraltar and to the Red Sea via the man-made Suez Canal (opened 1869).",
        "Deepest point is the Calypso Deep (5,267 m) in the Ionian Sea off Greece.",
        "Almost completely landlocked; takes roughly 80 to 100 years for water to completely renew via Gibraltar exchange."
      ],
      "geographicalSignificance": "Gives its name to the global 'Mediterranean Climate' (hot dry summers and mild wet winters). Major biodiversity hotspot with high levels of endemism.",
      "geopoliticalSignificance": "Historic cradle of Phoenician, Greek, Roman, and Islamic naval empires. Strategic commercial waterway connecting Asian/European trade; focal point of modern European migration routes.",
      "examMcqPoints": [
        "Suez Canal connects the Mediterranean Sea to: Red Sea (opened November 17, 1869).",
        "Strait connecting Mediterranean Sea to Atlantic Ocean: Strait of Gibraltar.",
        "Deepest point of the Mediterranean: Calypso Deep (5,267 m)."
      ]
    },
    {
      "id": "south-china-sea",
      "name": "South China Sea",
      "category": "seas",
      "icon": "fa-sailboat",
      "color": "#0891b2",
      "lat": 12,
      "lng": 113,
      "area": "3,500,000 km²",
      "depth": "5,016 m max depth",
      "continents": "Asia",
      "countries": [
        "China",
        "Vietnam",
        "Philippines",
        "Malaysia",
        "Brunei",
        "Taiwan",
        "Indonesia"
      ],
      "tagline": "World's Most Contested Maritime Commercial Highway",
      "fastFacts": [
        "Carries one-third of global maritime shipping (~$3.4 trillion in annual trade).",
        "Extends from the Strait of Malacca and Singapore in the southwest to the Taiwan Strait in the northeast.",
        "Contains hundreds of disputed islets, reefs, and shoals divided into the Spratly Islands and Paracel Islands."
      ],
      "geographicalSignificance": "Marginal sea of the Western Pacific Ocean with immense coral reef ecosystems, rich fisheries supplying 12% of the global catch, and vast seabed hydrocarbon reserves.",
      "geopoliticalSignificance": "Flashpoint of geopolitical competition between China (claiming sovereignty via its 'Nine-Dash Line') and ASEAN claimant states, alongside US naval Freedom of Navigation Operations (FONOPs).",
      "examMcqPoints": [
        "Critical maritime chokepoints connected to South China Sea: Strait of Malacca, Sunda Strait, Taiwan Strait.",
        "Permanent Court of Arbitration ruled against China's Nine-Dash Line claims in: 2016 (The Hague).",
        "Two main disputed island groups: Spratly Islands and Paracel Islands."
      ]
    },
    {
      "id": "red-sea",
      "name": "Red Sea",
      "category": "seas",
      "icon": "fa-sailboat",
      "color": "#0891b2",
      "lat": 20,
      "lng": 38.5,
      "area": "438,000 km²",
      "depth": "3,040 m max depth",
      "continents": "Africa / Asia",
      "countries": [
        "Egypt",
        "Sudan",
        "Eritrea",
        "Saudi Arabia",
        "Yemen",
        "Jordan",
        "Israel",
        "Djibouti"
      ],
      "tagline": "Inlet of the Indian Ocean & Global Energy Chokepoint",
      "fastFacts": [
        "Inlet of the Indian Ocean lying between Africa and the Arabian Peninsula.",
        "Connected to the Mediterranean Sea by the Suez Canal in the north, and to the Gulf of Aden / Indian Ocean by Bab-el-Mandeb in the south.",
        "Has no permanent river flowing into it, resulting in exceptionally high salinity (~4.0%) and clear water."
      ],
      "geographicalSignificance": "Occupies part of the Great Rift Valley system; tectonic rifting is actively pushing Africa and Arabia apart, creating a nascent ocean.",
      "geopoliticalSignificance": "Handles roughly 12% of global trade and 30% of global container ship traffic. Critical vulnerability exposed by Houthi missile and drone disruptions in the southern Bab-el-Mandeb corridor.",
      "examMcqPoints": [
        "Red Sea is connected to Gulf of Aden by: Bab-el-Mandeb Strait.",
        "Red Sea is connected to Mediterranean Sea by: Suez Canal.",
        "One of the warmest and saltiest marine bodies in the world."
      ]
    },
    {
      "id": "black-sea",
      "name": "Black Sea",
      "category": "seas",
      "icon": "fa-sailboat",
      "color": "#0891b2",
      "lat": 43.5,
      "lng": 34.5,
      "area": "436,400 km²",
      "depth": "2,212 m max depth",
      "continents": "Europe / Asia",
      "countries": [
        "Ukraine",
        "Russia",
        "Georgia",
        "Turkey",
        "Bulgaria",
        "Romania"
      ],
      "tagline": "World's Largest Meromictic Basin & Eurasian Strategic Gateway",
      "fastFacts": [
        "World's largest meromictic basin (layers of water do not mix); below 150-200 meters, the water is permanently anoxic (contains zero dissolved oxygen) and saturated with hydrogen sulfide.",
        "Connects to the Sea of Marmara via the Bosphorus Strait and to the Sea of Azov via the Kerch Strait.",
        "Fed by major European rivers: Danube, Dnieper, Dniester, and Don."
      ],
      "geographicalSignificance": "Because the deep water lacks oxygen, ancient wooden shipwrecks thousands of years old remain preserved in pristine condition on its seabed.",
      "geopoliticalSignificance": "Governed by the 1936 Montreux Convention regarding Turkish naval transit control. Primary naval theater in the Russia-Ukraine war and crucial conduit for Black Sea Grain Initiative exports.",
      "examMcqPoints": [
        "Treaty regulating naval access through Turkish Straits into Black Sea: Montreux Convention (1936).",
        "Strait connecting Black Sea to Sea of Azov: Kerch Strait.",
        "Black Sea's deep waters are completely anoxic (devoid of oxygen)."
      ]
    },
    {
      "id": "pacific-ocean",
      "name": "Pacific Ocean",
      "category": "oceans",
      "icon": "fa-compass",
      "color": "#1e3a8a",
      "lat": 0,
      "lng": -160,
      "area": "165,250,000 km²",
      "depth": "10,994 m (Challenger Deep, Mariana Trench)",
      "continents": "Asia, Oceania, North America, South America, Antarctica",
      "countries": [
        "Surrounded by 50+ sovereign states and island territories"
      ],
      "tagline": "Largest & Deepest Ocean on Earth",
      "fastFacts": [
        "Covers more than 30% of Earth's total surface area — larger than all Earth's landmasses combined!",
        "Contains the Mariana Trench and Challenger Deep (10,994 m / 36,070 ft), the lowest known point on Earth.",
        "Encircles the 'Pacific Ring of Fire', hosting 75% of the world's active volcanoes and 90% of all earthquakes."
      ],
      "geographicalSignificance": "Drives dominant global climate patterns through the El Niño-Southern Oscillation (ENSO) cycle. Home to the Great Pacific Garbage Patch and thousands of volcanic Polynesian and Micronesian islands.",
      "geopoliticalSignificance": "Central theater of 21st-century great-power rivalry (Indo-Pacific strategy, AUKUS, Quad). Carries the world's heaviest transpacific container traffic.",
      "examMcqPoints": [
        "Largest and deepest ocean: Pacific Ocean.",
        "Deepest point on Earth: Challenger Deep in the Mariana Trench (10,994 m).",
        "Pacific Ring of Fire contains over 75% of Earth's active volcanoes."
      ]
    },
    {
      "id": "atlantic-ocean",
      "name": "Atlantic Ocean",
      "category": "oceans",
      "icon": "fa-compass",
      "color": "#1e3a8a",
      "lat": 25,
      "lng": -40,
      "area": "106,460,000 km²",
      "depth": "8,376 m (Milwaukee Deep, Puerto Rico Trench)",
      "continents": "Europe, Africa, North America, South America, Antarctica",
      "countries": [
        "Bordered by North America, South America, Europe, and Africa"
      ],
      "tagline": "Second Largest Ocean & Maritime Cradle of Global Trade",
      "fastFacts": [
        "Second largest ocean, covering approximately 20% of the Earth's surface in an elongated S-shaped basin.",
        "Divided down its center by the Mid-Atlantic Ridge — a massive underwater mountain chain formed by diverging tectonic plates.",
        "Deepest point is the Milwaukee Deep in the Puerto Rico Trench (8,376 m)."
      ],
      "geographicalSignificance": "Drives the Atlantic Meridional Overturning Circulation (AMOC) and the warm Gulf Stream, which moderates the climate of Western and Northern Europe.",
      "geopoliticalSignificance": "Backbone of the Transatlantic Alliance (NATO). Historic stage of the Age of Discovery and the transatlantic triangular trade routes.",
      "examMcqPoints": [
        "Second largest ocean: Atlantic Ocean.",
        "Deepest point of the Atlantic: Puerto Rico Trench (Milwaukee Deep, 8,376 m).",
        "Mid-Atlantic Ridge is a divergent plate boundary where seafloor spreading occurs."
      ]
    },
    {
      "id": "indian-ocean",
      "name": "Indian Ocean",
      "category": "oceans",
      "icon": "fa-compass",
      "color": "#1e3a8a",
      "lat": -15,
      "lng": 80,
      "area": "70,560,000 km²",
      "depth": "7,290 m (Java / Sunda Trench)",
      "continents": "Asia, Africa, Australia, Antarctica",
      "countries": [
        "Bordered by 38 littoral and island nations"
      ],
      "tagline": "Third Largest Ocean & World's Premier Energy Transit Corridor",
      "fastFacts": [
        "Third largest ocean, bounded by Asia to the north, Africa to the west, Australia to the east, and the Southern Ocean to the south.",
        "Warmest ocean in the world, with restricted water exchange with cold northern polar seas.",
        "Deepest point is the Java (Sunda) Trench (7,290 m) off the coast of Indonesia."
      ],
      "geographicalSignificance": "Governed by the seasonal reversal of the Indian Ocean Monsoon winds, which dictate agricultural rainfall for over 2 billion people across South and Southeast Asia.",
      "geopoliticalSignificance": "Crucial energy superhighway: 80% of the world's maritime oil shipments transit through its waters and chokepoints (Hormuz, Malacca, Bab-el-Mandeb). Strategic focal point of CPEC and String of Pearls.",
      "examMcqPoints": [
        "Third largest ocean in the world: Indian Ocean.",
        "Deepest point of the Indian Ocean: Java Trench (Sunda Trench, 7,290 m).",
        "Only ocean named after a country: Indian Ocean."
      ]
    },
    {
      "id": "tibetan-plateau",
      "name": "Tibetan Plateau (Qinghai-Tibet)",
      "category": "plateaus",
      "icon": "fa-volcano",
      "color": "#7c2d12",
      "lat": 32,
      "lng": 89,
      "elevation": "Average > 4,500 m",
      "area": "2,500,000 km²",
      "continents": "Asia",
      "countries": [
        "China (Tibet, Qinghai, Sichuan, Xinjiang)",
        "India (Ladakh)"
      ],
      "tagline": "Roof of the World & The Third Pole of Earth",
      "fastFacts": [
        "Highest and largest plateau on Earth, spanning 2.5 million km² at an average altitude exceeding 4,500 meters.",
        "Formed by the violent collision of the Indian Plate with the Eurasian Plate during the Cenozoic era.",
        "Contains thousands of glaciers and vast permafrost, feeding the headwaters of the Yellow, Yangtze, Mekong, Salween, Brahmaputra, and Indus rivers."
      ],
      "geographicalSignificance": "Known as the 'Asian Water Tower'. Its intense thermal heating in summer acts as a giant atmospheric heat pump driving the South Asian and East Asian monsoon circulations.",
      "geopoliticalSignificance": "Supreme strategic high ground in Asia; controls transboundary river flow for billions downstream. Traversed by the Qinghai-Tibet Railway (highest railway on Earth, Tanggula Pass at 5,072 m).",
      "examMcqPoints": [
        "Highest and largest plateau in the world: Tibetan Plateau ('Roof of the World').",
        "Average elevation exceeds: 4,500 meters.",
        "Highest railway line in the world: Qinghai-Tibet Railway."
      ]
    },
    {
      "id": "deccan-plateau",
      "name": "Deccan Plateau",
      "category": "plateaus",
      "icon": "fa-volcano",
      "color": "#7c2d12",
      "lat": 16,
      "lng": 76.5,
      "elevation": "300 - 900 m",
      "area": "500,000 km²",
      "continents": "Asia",
      "countries": [
        "India"
      ],
      "tagline": "Ancient Basaltic Tableland of Peninsular India",
      "fastFacts": [
        "Large triangular plateau covering most of south-central India, bounded by the Western Ghats and Eastern Ghats.",
        "Formed ~66 million years ago by the massive Deccan Traps volcanic eruptions, which released immense basaltic lava and greenhouse gases (linked to dinosaur extinction).",
        "Slopes gently from west to east; major rivers (Godavari, Krishna, Cauvery) flow eastward into the Bay of Bengal."
      ],
      "geographicalSignificance": "Characterized by fertile black cotton soils (regur soil) derived from weathered basalt, highly suitable for cotton and sugarcane cultivation.",
      "geopoliticalSignificance": "Mineral-rich region with iron ore, coal, bauxite, and gold (Kolar Gold Fields); major industrial and technology corridor (Bengaluru, Hyderabad, Pune).",
      "examMcqPoints": [
        "Deccan Plateau is bounded by: Western Ghats (Sahyadri) and Eastern Ghats.",
        "Black soil of Deccan Plateau is famous for cultivating: Cotton (Regur soil).",
        "Deccan Traps are flood basalt volcanic formations from the Cretaceous-Paleogene boundary."
      ]
    },
    {
      "id": "potohar-plateau",
      "name": "Potohar Plateau",
      "category": "plateaus",
      "icon": "fa-volcano",
      "color": "#7c2d12",
      "lat": 33.2,
      "lng": 73,
      "elevation": "300 - 600 m",
      "area": "22,000 km²",
      "continents": "Asia",
      "countries": [
        "Pakistan (Punjab / ICT)"
      ],
      "tagline": "Cradle of Soan Culture & Pakistan's Oil Reservoir",
      "fastFacts": [
        "Located in northern Punjab, bounded by the Jhelum River to the east, Indus River to the west, Margalla Hills to the north, and the Salt Range to the south.",
        "Contains Pakistan's federal capital, Islamabad, and the garrison city of Rawalpindi.",
        "Home to the ancient prehistoric Soanian Paleolithic archaeological culture in the Soan River basin."
      ],
      "geographicalSignificance": "Features heavily dissected badlands topography, gully erosion, and dry-farming barani agriculture reliant on monsoon rainfall.",
      "geopoliticalSignificance": "Contains Pakistan's earliest discovered crude oil and gas fields (Khaur, Dhulian, Balkassar, Meyal) and massive limestone and rock gypsum deposits for cement manufacturing.",
      "examMcqPoints": [
        "Potohar Plateau is bounded in the south by: The Salt Range.",
        "First oil well drilled in Pakistan (1915): Khaur in Potohar Plateau.",
        "Soan River flows through the heart of the Potohar Plateau."
      ]
    },
    {
      "id": "colorado-plateau",
      "name": "Colorado Plateau",
      "category": "plateaus",
      "icon": "fa-volcano",
      "color": "#7c2d12",
      "lat": 36.5,
      "lng": -111,
      "elevation": "1,500 - 2,100 m",
      "area": "337,000 km²",
      "continents": "North America",
      "countries": [
        "United States (Arizona, Utah, Colorado, New Mexico)"
      ],
      "tagline": "Land of Grand Canyons & Deep Red Rock Stratigraphy",
      "fastFacts": [
        "High semi-arid plateau centered on the Four Corners region of the American Southwest.",
        "Dissected by the Colorado River and its tributaries, forming the iconic Grand Canyon (1,800 m deep).",
        "Unusually stable tectonic block that was uplifted over 1,500 m without undergoing violent folding or faulting."
      ],
      "geographicalSignificance": "Exposes nearly two billion years of Earth's geological history through vividly colored sedimentary rock layers.",
      "geopoliticalSignificance": "Contains immense uranium, coal, and oil-shale resources, alongside the Hoover Dam / Lake Mead water management network serving 40 million people.",
      "examMcqPoints": [
        "Grand Canyon is carved into: Colorado Plateau by the Colorado River.",
        "Four Corners monument (meeting point of 4 US states) lies on the Colorado Plateau.",
        "Contains vast uranium and mineral resources."
      ]
    },
    {
      "id": "pamir-knot",
      "name": "Pamir Mountains / Plateau",
      "category": "plateaus",
      "icon": "fa-volcano",
      "color": "#7c2d12",
      "lat": 38.5,
      "lng": 73.5,
      "elevation": "Average 4,000 m (Peak: Ismoil Somoni 7,495 m)",
      "area": "120,000 km²",
      "continents": "Asia",
      "countries": [
        "Tajikistan",
        "Afghanistan (Wakhan Corridor)",
        "China",
        "Kyrgyzstan",
        "Pakistan"
      ],
      "tagline": "The Grand Mountain Orogenic Junction of Asia",
      "fastFacts": [
        "Known in local languages as 'Bam-i-Dunya' (Roof of the World).",
        "Great orogenic knot from which five of Asia's premier mountain ranges radiate: Himalayas, Karakoram, Hindu Kush, Tian Shan, and Kunlun Mountains.",
        "Contains Fedchenko Glacier (77 km) — the longest non-polar glacier in the world."
      ],
      "geographicalSignificance": "Strategic drainage divide of Central Asia; origin of the Panj and Amu Darya (Oxus River).",
      "geopoliticalSignificance": "Center of the 19th-century 'Great Game' rivalry between the British Empire and Imperial Russia; separated by the narrow Afghan Wakhan Corridor.",
      "examMcqPoints": [
        "Pamir Knot radiates: Himalayas, Karakoram, Hindu Kush, Tian Shan, Kunlun Mountains.",
        "Wakhan Corridor was created to act as a buffer between British India and Tsarist Russia.",
        "Longest glacier in the Pamirs: Fedchenko Glacier (77 km)."
      ]
    },
    {
      "id": "strait-of-hormuz",
      "name": "Strait of Hormuz",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 26.56,
      "lng": 56.25,
      "elevation": "Sea level chokepoint",
      "length": "167 km (Narrowest width: 39 km)",
      "continents": "Asia",
      "countries": [
        "Iran (North)",
        "Oman & UAE (South)"
      ],
      "tagline": "World's Most Critical Petroleum Chokepoint",
      "fastFacts": [
        "Connects the Persian Gulf with the Gulf of Oman and the Arabian Sea.",
        "Carries approximately 20 to 21 million barrels of crude oil per day — roughly 21% of global petroleum liquid consumption and one-third of all seaborne traded oil.",
        "The shipping channel is narrow: two 2-mile-wide transit lanes separated by a 2-mile buffer zone."
      ],
      "geographicalSignificance": "Natural marine bottleneck formed between the Musandam Peninsula of Oman and the Iranian mainland.",
      "geopoliticalSignificance": "Ultimate global energy security chokepoint. Any closure or blockade by Iran would trigger an instantaneous worldwide energy and economic shock.",
      "examMcqPoints": [
        "Strait connecting Persian Gulf to Gulf of Oman: Strait of Hormuz.",
        "Separates Iran from Oman (Musandam Peninsula).",
        "Approximately 20-21% of world's petroleum supply transits through Hormuz daily."
      ]
    },
    {
      "id": "strait-of-malacca",
      "name": "Strait of Malacca",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 2.5,
      "lng": 101.5,
      "elevation": "Sea level",
      "length": "800 km (Narrowest width: 2.8 km at Phillips Channel)",
      "continents": "Asia",
      "countries": [
        "Indonesia (Sumatra)",
        "Malaysia",
        "Singapore"
      ],
      "tagline": "World's Busiest Commercial Shipping Chokepoint",
      "fastFacts": [
        "Connects the Indian Ocean (Andaman Sea) with the Pacific Ocean (South China Sea).",
        "Busiest shipping strait on Earth: handles over 94,000 vessels annually, carrying 25% of all global traded goods.",
        "Narrowest chokepoint is the Phillips Channel in the Singapore Strait, only 2.8 km (1.5 nautical miles) wide."
      ],
      "geographicalSignificance": "Funnel-shaped shallow waterway separating the Malay Peninsula from the Indonesian island of Sumatra.",
      "geopoliticalSignificance": "China's 'Malacca Dilemma': over 80% of China's oil imports and vital trade flow through this narrow strait, vulnerable to US naval interdiction during a crisis.",
      "examMcqPoints": [
        "Strait connecting Indian Ocean to South China Sea: Strait of Malacca.",
        "Separates Peninsular Malaysia from Sumatra (Indonesia).",
        "'Malacca Dilemma' refers to China's vulnerability over its primary energy transit route."
      ]
    },
    {
      "id": "strait-of-gibraltar",
      "name": "Strait of Gibraltar",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 35.96,
      "lng": -5.6,
      "elevation": "Sea level (Depth: 300 - 900 m)",
      "length": "58 km (Narrowest width: 14.3 km / 8.9 miles)",
      "continents": "Europe / Africa",
      "countries": [
        "Spain & UK (Gibraltar)",
        "Morocco (North Africa)"
      ],
      "tagline": "Pillars of Hercules & Gateway to the Mediterranean",
      "fastFacts": [
        "Connects the Atlantic Ocean to the Mediterranean Sea and separates Europe (Spain/Gibraltar) from Africa (Morocco).",
        "Narrowest point is only 14.3 km (8.9 miles) wide between Point Marroquí (Spain) and Point Cires (Morocco).",
        "Anciently known as the 'Pillars of Hercules' (Rock of Gibraltar in Europe and Jebel Musa in Morocco)."
      ],
      "geographicalSignificance": "Two-layer ocean current exchange: warmer, less salty Atlantic surface water flows eastward into the Mediterranean, while cold, highly saline, dense Mediterranean deep water flows westward into the Atlantic.",
      "geopoliticalSignificance": "Vital chokepoint for Mediterranean commercial and naval traffic. The Rock of Gibraltar remains a British Overseas Territory contested by Spain.",
      "examMcqPoints": [
        "Strait separating Europe from Africa: Strait of Gibraltar.",
        "Width at its narrowest point: ~14.3 km.",
        "Rock of Gibraltar is a British Overseas Territory located at the southern tip of the Iberian Peninsula."
      ]
    },
    {
      "id": "bab-el-mandeb",
      "name": "Bab-el-Mandeb Strait",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 12.58,
      "lng": 43.33,
      "elevation": "Sea level",
      "length": "110 km (Narrowest width: 26 km)",
      "continents": "Asia / Africa",
      "countries": [
        "Yemen (Arabian Peninsula)",
        "Djibouti & Eritrea (Horn of Africa)"
      ],
      "tagline": "Gate of Tears & Southern Gate to the Suez Canal",
      "fastFacts": [
        "Name translates to 'Gate of Tears' in Arabic, referring to the perils of navigating its reef-strewn waters.",
        "Connects the Red Sea to the Gulf of Aden and the open Indian Ocean.",
        "Split into two channels by Perim Island: the eastern Bab Iskender (3 km wide) and western Dact-el-Mayun (25 km wide)."
      ],
      "geographicalSignificance": "Separates the Arabian Peninsula from the Horn of Africa, forming the southern bottleneck of the Red Sea.",
      "geopoliticalSignificance": "Essential southern approach for all ships heading to and from the Suez Canal. High security vulnerability due to Yemen's Houthi missile strikes and Somali piracy.",
      "examMcqPoints": [
        "Strait connecting Red Sea to Gulf of Aden: Bab-el-Mandeb.",
        "Separates Yemen from Djibouti and Eritrea.",
        "Island dividing Bab-el-Mandeb into two channels: Perim Island."
      ]
    },
    {
      "id": "bosphorus",
      "name": "Bosphorus Strait (Istanbul Strait)",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 41.11,
      "lng": 29.07,
      "elevation": "Sea level",
      "length": "31 km (Narrowest width: 700 m)",
      "continents": "Europe / Asia",
      "countries": [
        "Turkey (divides Istanbul)"
      ],
      "tagline": "World's Narrowest Strait Used for International Navigation",
      "fastFacts": [
        "Connects the Black Sea to the Sea of Marmara, and through the Dardanelles, to the Aegean and Mediterranean.",
        "Bisects the historic city of Istanbul, making it the only city in the world situated on two continents (Europe and Asia).",
        "Narrowest point is only 700 meters wide between Anadoluhisarı and Rumelihisarı."
      ],
      "geographicalSignificance": "Features a strong surface current flowing south from the fresher Black Sea, and a dense, salty undercurrent flowing north from the Mediterranean.",
      "geopoliticalSignificance": "Governed by the 1936 Montreux Convention, granting Turkey the sovereign authority to restrict military warships during times of war.",
      "examMcqPoints": [
        "Strait separating European Turkey from Asian Turkey: Bosphorus Strait.",
        "Connects Black Sea to Sea of Marmara.",
        "Narrowest width: ~700 meters."
      ]
    },
    {
      "id": "dardanelles",
      "name": "Dardanelles Strait (Hellespont)",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 40.2,
      "lng": 26.4,
      "elevation": "Sea level",
      "length": "61 km (Width: 1.2 to 6 km)",
      "continents": "Europe / Asia",
      "countries": [
        "Turkey (Gallipoli Peninsula)"
      ],
      "tagline": "The Historic Hellespont & Gate of the Aegean",
      "fastFacts": [
        "Connects the Sea of Marmara with the Aegean and Mediterranean seas.",
        "Separates the Gallipoli peninsula in Europe from mainland Asia Minor (Anatolia).",
        "Crossed by the 1915 Çanakkale Bridge (opened 2022) — the longest suspension bridge in the world (main span: 2,023 m)."
      ],
      "geographicalSignificance": "Forms the secondary stage of the Turkish Straits system linking the Black Sea to the Mediterranean.",
      "geopoliticalSignificance": "Site of the legendary Gallipoli Campaign during World War I (1915) where Ottoman forces under Mustafa Kemal Atatürk repulsed Allied invasion fleets.",
      "examMcqPoints": [
        "Connects Sea of Marmara to the Aegean Sea: Dardanelles Strait.",
        "Ancient Greek name: Hellespont.",
        "World's longest suspension bridge: 1915 Çanakkale Bridge spanning the Dardanelles."
      ]
    },
    {
      "id": "bering-strait",
      "name": "Bering Strait",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 65.8,
      "lng": -168.5,
      "elevation": "Sea level (Depth: 30 - 50 m)",
      "length": "82 km wide",
      "continents": "Asia / North America",
      "countries": [
        "Russia (Chukotka)",
        "United States (Alaska)"
      ],
      "tagline": "The Pacific-Arctic Continental Chokepoint & International Date Line",
      "fastFacts": [
        "Connects the Pacific Ocean (Bering Sea) with the Arctic Ocean (Chukchi Sea).",
        "Separates the easternmost point of Asia (Cape Dezhnev, Russia) from the westernmost point of North America (Cape Prince of Wales, Alaska) by just 82 km (51 miles).",
        "Contains the Diomede Islands: Big Diomede (Russia) and Little Diomede (USA), separated by only 3.8 km and the International Date Line (21 hours time difference)!"
      ],
      "geographicalSignificance": "Site of the prehistoric 'Beringia' Land Bridge, which enabled ancient human migrations from northeast Asia into the Americas during the Ice Ages.",
      "geopoliticalSignificance": "Strategic chokepoint between NATO/USA and the Russian Federation, and the emerging gateway for Arctic transit via the Northern Sea Route.",
      "examMcqPoints": [
        "Strait separating Asia from North America: Bering Strait.",
        "Connects Bering Sea (Pacific) to Chukchi Sea (Arctic).",
        "International Date Line passes between: Big Diomede (Russia) and Little Diomede (USA)."
      ]
    },
    {
      "id": "taiwan-strait",
      "name": "Taiwan Strait (Formosa Strait)",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 24,
      "lng": 119.5,
      "elevation": "Sea level",
      "length": "180 km wide (130 km at narrowest)",
      "continents": "Asia",
      "countries": [
        "China (Mainland)",
        "Taiwan"
      ],
      "tagline": "Geopolitical Epicenter of the Indo-Pacific",
      "fastFacts": [
        "Separates the island of Taiwan from the southeastern coast of mainland China (Fujian province).",
        "Connects the South China Sea in the south with the East China Sea in the north.",
        "Average depth is relatively shallow (60 meters), dropping into the deep Pacific Ocean east of Taiwan."
      ],
      "geographicalSignificance": "High-energy maritime channel subject to frequent tropical typhoons and severe seasonal monsoonal currents.",
      "geopoliticalSignificance": "Foremost military flashpoint of great-power confrontation between China and the United States/allies regarding Taiwanese cross-strait autonomy and sovereignty.",
      "examMcqPoints": [
        "Strait separating mainland China from Taiwan: Taiwan Strait (Formosa Strait).",
        "Connects South China Sea with East China Sea.",
        "Width at narrowest point: ~130 km."
      ]
    },
    {
      "id": "palk-strait",
      "name": "Palk Strait & Adam's Bridge",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 9.5,
      "lng": 79.5,
      "elevation": "Sea level (Shallow: 1 - 10 m)",
      "length": "85 km (Width: 53 to 82 km)",
      "continents": "Asia",
      "countries": [
        "India (Tamil Nadu)",
        "Sri Lanka (Northern Province)"
      ],
      "tagline": "Bridge of Ramayana Between India & Sri Lanka",
      "fastFacts": [
        "Connects Palk Bay with the Bay of Bengal in the northeast, separating southeastern India from northern Sri Lanka.",
        "Contains 'Adam's Bridge' (Rama Setu) — a 48 km chain of limestone shoals and coral reefs that is so shallow that large ships cannot navigate through.",
        "Named after Robert Palk, British Governor of Madras Presidency (1755–1763)."
      ],
      "geographicalSignificance": "Very shallow waters (average depth less than 12 meters), meaning all international ocean freighters must circumnavigate around the entire southern island of Sri Lanka.",
      "geopoliticalSignificance": "Center of the controversial Sethusamudram Shipping Canal Project debate, as well as recurring cross-border fishing rights disputes.",
      "examMcqPoints": [
        "Strait separating India from Sri Lanka: Palk Strait.",
        "Shallow chain of limestone shoals in Palk Strait: Adam's Bridge (Rama Setu).",
        "Connects Bay of Bengal to Palk Bay."
      ]
    },
    {
      "id": "denali",
      "name": "Mount Denali (Mount McKinley)",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": 63.07,
      "lng": -151.01,
      "elevation": "6,190 m (Highest in North America)",
      "length": "Alaska Range",
      "continents": "North America",
      "countries": [
        "United States (Alaska)"
      ],
      "tagline": "Highest Mountain Peak in North America",
      "fastFacts": [
        "Third highest and third most prominent isolated summit on Earth after Mount Everest and Aconcagua.",
        "Has one of the world's most severe cold climates; temperatures reach -60°C with 160 km/h windchills.",
        "Renamed back to its indigenous Koyukon Athabascan name 'Denali' ('The Tall One') in 2015."
      ],
      "geographicalSignificance": "Forms the crowning topographic apex of the subarctic Alaska Range, carved by extensive valley glaciers (Kahiltna, Ruth).",
      "geopoliticalSignificance": "Crown jewel of the Denali National Park and Preserve; ecological barometer for Arctic climate warming.",
      "examMcqPoints": [
        "Highest mountain peak in North America: Denali (6,190 m).",
        "Located in: Alaska, USA.",
        "Formerly known as: Mount McKinley."
      ]
    },
    {
      "id": "aconcagua",
      "name": "Mount Aconcagua",
      "category": "mountains",
      "icon": "fa-mountain",
      "color": "#dc2626",
      "lat": -32.65,
      "lng": -70.01,
      "elevation": "6,961 m (Highest in Americas & Southern Hemisphere)",
      "length": "Principal Cordillera of Andes",
      "continents": "South America",
      "countries": [
        "Argentina"
      ],
      "tagline": "Highest Peak in the Western & Southern Hemispheres",
      "fastFacts": [
        "Highest mountain outside of Asia, and the highest point in both the Western and Southern Hemispheres.",
        "Formed by the subduction of the Nazca Plate beneath the South American Plate.",
        "Non-technical ascent on the Normal Route, but notorious for severe altitude sickness and sudden violent Andean winds ('Viento Blanco')."
      ],
      "geographicalSignificance": "Forms the hydrological apex dividing Pacific-bound and Atlantic-bound runoff in the southern Andes.",
      "geopoliticalSignificance": "Key attraction for international mountaineering and strategic border surveillance between Argentina and Chile.",
      "examMcqPoints": [
        "Highest mountain peak in South America / Western Hemisphere: Aconcagua (6,961 m).",
        "Located in: Mendoza Province, Argentina.",
        "Second highest of the global 'Seven Summits' after Mount Everest."
      ]
    },
    {
      "id": "yellow-river",
      "name": "Yellow River (Huang He)",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": 37.8,
      "lng": 119,
      "elevation": "Source: Bayan Har Mountains (Tibet)",
      "length": "5,464 km",
      "continents": "Asia",
      "countries": [
        "China"
      ],
      "tagline": "Mother River of China & China's Sorrow",
      "fastFacts": [
        "Second longest river in China and the 6th longest river system in the world.",
        "Earned its name from the yellow loess silt picked up as it flows through the Loess Plateau, carrying the highest sediment concentration of any major river on Earth.",
        "Historically called 'China's Sorrow' due to devastating catastrophic floods and course changes over thousands of years."
      ],
      "geographicalSignificance": "Created the fertile North China Plain, the cradle of ancient northern Chinese civilization.",
      "geopoliticalSignificance": "Major source of hydroelectric power and irrigation, managed by the Xiaolangdi Dam to control massive siltation.",
      "examMcqPoints": [
        "Second longest river in China: Yellow River (Huang He).",
        "Known historically as: 'China's Sorrow' and 'Mother River of China'.",
        "Empties into the Bohai Sea."
      ]
    },
    {
      "id": "congo-river",
      "name": "Congo River (Zaire River)",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": -6.07,
      "lng": 12.45,
      "elevation": "Discharges 41,000 m³/s into Atlantic",
      "length": "4,700 km",
      "continents": "Africa",
      "countries": [
        "DR Congo",
        "Republic of the Congo",
        "Central African Republic",
        "Angola",
        "Zambia"
      ],
      "tagline": "World's Deepest River & 2nd Largest Discharge",
      "fastFacts": [
        "World's deepest recorded river, with depths exceeding 220 meters (720 ft) in certain canyon gorges.",
        "Second largest river in the world by water discharge volume (~41,000 m³/s), exceeded only by the Amazon.",
        "Only major river in the world to cross the Equator twice."
      ],
      "geographicalSignificance": "Drains the Congo Basin, the second largest rainforest on Earth. Possesses immense untapped hydroelectric potential (Grand Inga Dam proposal).",
      "geopoliticalSignificance": "Economic lifeblood of Central Africa; the two capital cities of Brazzaville and Kinshasa face each other across its banks.",
      "examMcqPoints": [
        "Deepest river in the world: Congo River (>220 m).",
        "Only river that crosses the Equator twice: Congo River.",
        "Second largest river by discharge volume: Congo River."
      ]
    },
    {
      "id": "mekong",
      "name": "Mekong River",
      "category": "rivers",
      "icon": "fa-water",
      "color": "#0284c7",
      "lat": 10.3,
      "lng": 106.3,
      "elevation": "Source: Tibetan Plateau",
      "length": "4,350 km",
      "continents": "Asia",
      "countries": [
        "China",
        "Myanmar",
        "Laos",
        "Thailand",
        "Cambodia",
        "Vietnam"
      ],
      "tagline": "Lifeline of Southeast Asia & Transboundary Giant",
      "fastFacts": [
        "Rises in the Tibetan Plateau (known as Lancang in China) and flows through 6 Southeast Asian countries into the South China Sea.",
        "Supports the Tonle Sap Lake reverse-flow phenomenon in Cambodia during the monsoon season.",
        "World's most productive inland fishery, accounting for 25% of global freshwater catches."
      ],
      "geographicalSignificance": "The Mekong Delta in southern Vietnam is one of the world's premier rice-producing regions ('Rice Bowl of Vietnam').",
      "geopoliticalSignificance": "Subject of intense hydropolitical tension between upstream China (which has built 11 mega-dams on the upper stem) and downstream lower Mekong nations.",
      "examMcqPoints": [
        "Mekong River passes through 6 countries: China, Myanmar, Laos, Thailand, Cambodia, Vietnam.",
        "Empties into: South China Sea.",
        "Tonle Sap lake connects to the Mekong in Cambodia."
      ]
    },
    {
      "id": "lake-tanganyika",
      "name": "Lake Tanganyika",
      "category": "lakes",
      "icon": "fa-gem",
      "color": "#2563eb",
      "lat": -6,
      "lng": 29.5,
      "elevation": "773 m",
      "area": "32,900 km²",
      "depth": "1,470 m (2nd Deepest on Earth)",
      "continents": "Africa",
      "countries": [
        "Tanzania",
        "DR Congo",
        "Burundi",
        "Zambia"
      ],
      "tagline": "World's Longest Freshwater Lake & 2nd Deepest",
      "fastFacts": [
        "World's longest freshwater lake (673 km north to south).",
        "Second deepest freshwater lake in the world (1,470 meters / 4,820 ft) and second largest by volume after Lake Baikal.",
        "Forms part of the Albertine Rift, the western branch of the East African Rift System."
      ],
      "geographicalSignificance": "Holds roughly 16% of the world's available surface freshwater. Remarkable evolutionary laboratory hosting over 250 species of cichlid fish found nowhere else.",
      "geopoliticalSignificance": "Vital transboundary navigation corridor between East and Central Africa.",
      "examMcqPoints": [
        "Second deepest lake in the world: Lake Tanganyika (1,470 m).",
        "Longest freshwater lake in the world: Lake Tanganyika (673 km).",
        "Shared by 4 countries: Tanzania, DR Congo, Burundi, Zambia."
      ]
    },
    {
      "id": "lake-titicaca",
      "name": "Lake Titicaca",
      "category": "lakes",
      "icon": "fa-gem",
      "color": "#2563eb",
      "lat": -15.8,
      "lng": -69.4,
      "elevation": "3,812 m (Highest Navigable Lake)",
      "area": "8,372 km²",
      "depth": "281 m",
      "continents": "South America",
      "countries": [
        "Peru",
        "Bolivia"
      ],
      "tagline": "Highest Commercially Navigable Lake on Earth",
      "fastFacts": [
        "Situated at 3,812 meters (12,507 ft) above sea level in the high Andean Altiplano.",
        "Highest commercially navigable lake in the world for large vessels.",
        "In Incan mythology, Lake Titicaca was revered as the birthplace of the Sun and the founding Inca rulers."
      ],
      "geographicalSignificance": "Large alpine endorheic lake that moderates the high-altitude climate of the surrounding Altiplano, permitting agriculture where it would otherwise freeze.",
      "geopoliticalSignificance": "Co-managed peacefully by the Joint Autonomous Authority of Lake Titicaca (ALT) between Peru and Bolivia.",
      "examMcqPoints": [
        "Highest navigable lake in the world: Lake Titicaca (3,812 m).",
        "Located on the border of: Peru and Bolivia.",
        "Situated on the high-altitude Andean Altiplano."
      ]
    },
    {
      "id": "aral-sea",
      "name": "Aral Sea",
      "category": "lakes",
      "icon": "fa-gem",
      "color": "#2563eb",
      "lat": 45,
      "lng": 60,
      "elevation": "Varies",
      "area": "Shrunk by >90% since 1960",
      "depth": "Severely desiccated",
      "continents": "Asia",
      "countries": [
        "Kazakhstan",
        "Uzbekistan"
      ],
      "tagline": "20th Century's Worst Anthropogenic Ecological Disaster",
      "fastFacts": [
        "Formerly the 4th largest lake in the world (68,000 km² in 1960).",
        "Beginning in the 1960s, Soviet irrigation projects diverted its two feeding rivers — the Amu Darya and Syr Darya — to cultivate cotton in the desert.",
        "By the 2000s, it had split into separate hypersaline basins and lost over 90% of its volume, leaving behind a toxic desert called the Aralkum."
      ],
      "geographicalSignificance": "Exposed dry seabed produces toxic salt-and-pesticide dust storms that cause respiratory illnesses thousands of kilometers away in Central Asia.",
      "geopoliticalSignificance": "The Kokaral Dam built by Kazakhstan in 2005 has successfully stabilized and partially revived the North Aral Sea.",
      "examMcqPoints": [
        "Aral Sea was fed by which two rivers: Amu Darya and Syr Darya.",
        "Located on the border of: Kazakhstan and Uzbekistan.",
        "Drying of Aral Sea was caused by: Soviet cotton irrigation diversions."
      ]
    },
    {
      "id": "kalahari",
      "name": "Kalahari Desert",
      "category": "deserts",
      "icon": "fa-sun",
      "color": "#d97706",
      "lat": -23,
      "lng": 22,
      "area": "900,000 km²",
      "elevation": "900 - 1,200 m",
      "continents": "Africa",
      "countries": [
        "Botswana",
        "Namibia",
        "South Africa"
      ],
      "tagline": "Vast Semi-Arid Sandy Basin of Southern Africa",
      "fastFacts": [
        "Covers 70% of Botswana and parts of Namibia and South Africa.",
        "Not a true desert in the strictest sense; receives 110–500 mm of rain, classifying it as a semi-arid savanna basin with vast red sand plains.",
        "Traditional ancestral home of the indigenous San (Bushmen) hunter-gatherers."
      ],
      "geographicalSignificance": "Absorbs the inland Okavango River, creating the world's largest inland wetland delta — the Okavango Delta.",
      "geopoliticalSignificance": "Rich in mineral deposits, particularly diamond mines (Orapa and Jwaneng in Botswana — two of the world's richest diamond pipes).",
      "examMcqPoints": [
        "Kalahari Desert is predominantly located in: Botswana (also Namibia & South Africa).",
        "Okavango Delta empties into: Kalahari Desert basin.",
        "Indigenous hunter-gatherer people of Kalahari: San (Bushmen)."
      ]
    },
    {
      "id": "namib",
      "name": "Namib Desert",
      "category": "deserts",
      "icon": "fa-sun",
      "color": "#d97706",
      "lat": -24.7,
      "lng": 15.3,
      "area": "81,000 km²",
      "elevation": "Sea level to 2,000 m",
      "continents": "Africa",
      "countries": [
        "Namibia",
        "Angola",
        "South Africa"
      ],
      "tagline": "Oldest Desert in the World & Coastal Fog Desert",
      "fastFacts": [
        "Considered the oldest desert in the world, having endured arid or semi-arid conditions for at least 55 to 80 million years.",
        "Stretches 2,000 km along the Atlantic coast of Namibia, where cold waters of the Benguela Current produce dense coastal fog.",
        "Features some of the highest sand dunes in the world at Sossusvlei (Dune 7 reaches 388 m)."
      ],
      "geographicalSignificance": "Known for the treacherous 'Skeleton Coast' where hundreds of shipwrecks lie buried in coastal sands.",
      "geopoliticalSignificance": "Hosts major uranium deposits (Rössing and Husab mines) and diamond-rich alluvial coastal deposits.",
      "examMcqPoints": [
        "Oldest desert in the world: Namib Desert (55–80M years).",
        "Skeleton Coast is part of: Namib Desert (Namibia).",
        "Cold ocean current creating Namib fog: Benguela Current."
      ]
    },
    {
      "id": "caribbean",
      "name": "Caribbean Sea",
      "category": "seas",
      "icon": "fa-sailboat",
      "color": "#0891b2",
      "lat": 15,
      "lng": -75,
      "area": "2,754,000 km²",
      "depth": "7,686 m (Cayman Trough)",
      "continents": "Americas",
      "countries": [
        "Bordered by Mexico, Central America, northern South America, and Greater/Lesser Antilles"
      ],
      "tagline": "Tropical Gateway to the Panama Canal",
      "fastFacts": [
        "Sub-oceanic basin of the Western Atlantic Ocean, bounded by the Greater Antilles to the north and Central America to the west.",
        "Deepest point is the Cayman Trough (7,686 m / 25,217 ft) between Cuba and Jamaica.",
        "Contains the Mesoamerican Barrier Reef System — the second largest coral reef system in the world."
      ],
      "geographicalSignificance": "High sea surface temperatures fuel North Atlantic hurricanes that track toward the Gulf of Mexico and eastern United States.",
      "geopoliticalSignificance": "Strategic approach to the Panama Canal connecting Atlantic and Pacific trade corridors.",
      "examMcqPoints": [
        "Deepest point in the Caribbean Sea: Cayman Trough (7,686 m).",
        "Panama Canal connects the Caribbean Sea (Atlantic) to: Pacific Ocean.",
        "Second largest barrier reef in the world: Mesoamerican Barrier Reef."
      ]
    },
    {
      "id": "baltic-sea",
      "name": "Baltic Sea",
      "category": "seas",
      "icon": "fa-sailboat",
      "color": "#0891b2",
      "lat": 58,
      "lng": 20,
      "area": "377,000 km²",
      "depth": "459 m max depth",
      "continents": "Europe",
      "countries": [
        "Sweden",
        "Finland",
        "Russia",
        "Estonia",
        "Latvia",
        "Lithuania",
        "Poland",
        "Germany",
        "Denmark"
      ],
      "tagline": "Brackish Inland Sea & Northern NATO Lake",
      "fastFacts": [
        "One of the largest bodies of brackish (low-salinity) water in the world, fed by over 250 rivers.",
        "Connected to the North Sea via the Danish Straits (Oresund, Great Belt, Little Belt) and the Kiel Canal in Germany.",
        "Following Finland and Sweden joining NATO, often termed strategically as 'NATO's Lake'."
      ],
      "geographicalSignificance": "Prone to winter freezing in its northern reaches (Gulf of Bothnia) due to low salinity and shallow water.",
      "geopoliticalSignificance": "Critical energy and defense corridor; site of the Nord Stream pipeline sabotage and Russian naval access via Kaliningrad and St. Petersburg.",
      "examMcqPoints": [
        "Canal connecting North Sea to Baltic Sea: Kiel Canal (Germany).",
        "The Baltic States are: Estonia, Latvia, Lithuania.",
        "Low salinity brackish water body."
      ]
    },
    {
      "id": "southern-ocean",
      "name": "Southern Ocean (Antarctic Ocean)",
      "category": "oceans",
      "icon": "fa-compass",
      "color": "#1e3a8a",
      "lat": -65,
      "lng": 0,
      "area": "20,327,000 km²",
      "depth": "7,236 m (Factorian Deep, South Sandwich Trench)",
      "continents": "Antarctica",
      "countries": [
        "Encircles Antarctica"
      ],
      "tagline": "Fourth Largest Ocean & Earth's Climate Engine",
      "fastFacts": [
        "Officially recognized by the International Hydrographic Organization (IHO) as the body of water encircling Antarctica south of 60°S latitude.",
        "Dominated by the Antarctic Circumpolar Current (ACC) — the most powerful ocean current on Earth, transporting 130–150 million m³/s of water.",
        "Deepest point is the Factorian Deep in the South Sandwich Trench (7,236 m)."
      ],
      "geographicalSignificance": "Major global carbon sink and engine of Earth's thermohaline conveyor belt, generating dense Antarctic Bottom Water.",
      "geopoliticalSignificance": "Governed by the 1959 Antarctic Treaty System dedicating the continent and surrounding waters strictly to peaceful scientific research.",
      "examMcqPoints": [
        "Most powerful ocean current in the world: Antarctic Circumpolar Current (West Wind Drift).",
        "Antarctic Treaty was signed in: 1959 (effective 1961).",
        "Southern Ocean is defined as waters south of: 60° South latitude."
      ]
    },
    {
      "id": "arctic-ocean",
      "name": "Arctic Ocean",
      "category": "oceans",
      "icon": "fa-compass",
      "color": "#1e3a8a",
      "lat": 90,
      "lng": 0,
      "area": "14,060,000 km²",
      "depth": "5,550 m (Molloy Deep)",
      "continents": "North America, Europe, Asia",
      "countries": [
        "Bordered by Russia, Canada, United States (Alaska), Denmark (Greenland), Norway, Iceland"
      ],
      "tagline": "Smallest & Shallowest Ocean on Earth",
      "fastFacts": [
        "Smallest and shallowest of the world's five major oceans, centered around the geographic North Pole.",
        "Mostly covered by sea ice throughout the year, though summer ice extent has declined by over 40% since satellite tracking began in 1979.",
        "Deepest point is the Molloy Deep (5,550 m) in the Fram Strait between Greenland and Svalbard."
      ],
      "geographicalSignificance": "High albedo effect reflects solar radiation back to space. Melting permafrost and sea ice are primary catalysts of polar amplification.",
      "geopoliticalSignificance": "Thawing ice is opening the Northern Sea Route (NSR) and Northwest Passage, cutting shipping times between Europe and Asia by 30-40%. Estimated to contain 30% of undiscovered global natural gas and 13% of oil.",
      "examMcqPoints": [
        "Smallest and shallowest ocean: Arctic Ocean.",
        "Deepest point of the Arctic Ocean: Molloy Deep (5,550 m).",
        "Northern Sea Route connects: Atlantic and Pacific oceans along the Russian Arctic coast."
      ]
    },
    {
      "id": "anatolian-plateau",
      "name": "Anatolian Plateau",
      "category": "plateaus",
      "icon": "fa-volcano",
      "color": "#7c2d12",
      "lat": 39,
      "lng": 33,
      "elevation": "900 - 1,500 m",
      "area": "500,000 km²",
      "continents": "Asia",
      "countries": [
        "Turkey"
      ],
      "tagline": "Heartland of Asia Minor & Bridge Between Continents",
      "fastFacts": [
        "Occupies the central interior of Turkey (Asia Minor), bounded by the Pontic Mountains to the north and the Taurus Mountains to the south.",
        "Contains the capital of modern Turkey, Ankara, and the historic volcanic landscapes of Cappadocia.",
        "Houses Lake Tuz, a large hyper-saline shallow endorheic lake producing over 60% of Turkey's salt."
      ],
      "geographicalSignificance": "Semi-arid continental climate with cold snowy winters and hot dry summers, forming Turkey's main grain and livestock belt.",
      "geopoliticalSignificance": "Historical crossroads of civilizations (Hittites, Phrygians, Greeks, Byzantines, Seljuks, Ottomans).",
      "examMcqPoints": [
        "Capital city situated on the Anatolian Plateau: Ankara.",
        "Bounded by: Pontic Mountains in the north and Taurus Mountains in the south.",
        "Contains famous volcanic fairy chimneys of: Cappadocia."
      ]
    },
    {
      "id": "altiplano",
      "name": "Altiplano (Andean Plateau)",
      "category": "plateaus",
      "icon": "fa-volcano",
      "color": "#7c2d12",
      "lat": -19,
      "lng": -67.5,
      "elevation": "Average 3,750 m",
      "area": "300,000 km²",
      "continents": "South America",
      "countries": [
        "Bolivia",
        "Peru",
        "Chile",
        "Argentina"
      ],
      "tagline": "Second Highest High-Altitude Plateau on Earth",
      "fastFacts": [
        "Extensive high-altitude plateau where the Andes Mountains widen to over 400 km in width.",
        "Second most extensive high-elevation plateau on Earth after the Tibetan Plateau, averaging 3,750 m (12,300 ft).",
        "Contains the Salar de Uyuni — the world's largest salt flat (10,582 km²) holding roughly 50% of known global lithium reserves!"
      ],
      "geographicalSignificance": "Endorheic basin hosting Lake Titicaca and Lake Poopó, characterized by extreme diurnal temperature fluctuations.",
      "geopoliticalSignificance": "The epicentre of the global energy transition due to vast lithium brines ('Lithium Triangle').",
      "examMcqPoints": [
        "World's largest salt flat: Salar de Uyuni (Bolivia) on the Altiplano.",
        "Second highest plateau in the world after Tibet: Altiplano.",
        "Center of the global 'Lithium Triangle' (Bolivia, Chile, Argentina)."
      ]
    },
    {
      "id": "ethiopian-highlands",
      "name": "Ethiopian Highlands (Roof of Africa)",
      "category": "plateaus",
      "icon": "fa-volcano",
      "color": "#7c2d12",
      "lat": 11.5,
      "lng": 39.5,
      "elevation": "1,500 - 4,550 m (Ras Dejen)",
      "area": "350,000 km²",
      "continents": "Africa",
      "countries": [
        "Ethiopia",
        "Eritrea"
      ],
      "tagline": "Water Tower of Northeast Africa & Source of the Blue Nile",
      "fastFacts": [
        "Largest continuous area of its altitude in the continent of Africa; rarely falls below 1,500 m and rises to 4,550 m at Ras Dejen.",
        "Split down the center by the Great East African Rift Valley into northwestern and southeastern massifs.",
        "Source of Lake Tana and the Blue Nile River, which supplies 80-85% of the total water reaching Egypt."
      ],
      "geographicalSignificance": "Creates an Afroalpine microclimate that receives heavy monsoon rainfall, standing out from the arid lowlands of the Horn of Africa.",
      "geopoliticalSignificance": "Site of the Grand Ethiopian Renaissance Dam (GERD), the largest hydroelectric project in Africa.",
      "examMcqPoints": [
        "Highest peak of the Ethiopian Highlands: Ras Dejen (4,550 m).",
        "Origin of the Blue Nile: Lake Tana in the Ethiopian Highlands.",
        "Often referred to as: 'The Water Tower of Northeast Africa'."
      ]
    },
    {
      "id": "strait-of-dover",
      "name": "Strait of Dover (English Channel)",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": 51.13,
      "lng": 1.45,
      "elevation": "Sea level",
      "length": "Narrowest width: 33.3 km (20.7 miles)",
      "continents": "Europe",
      "countries": [
        "United Kingdom (England)",
        "France"
      ],
      "tagline": "World's Busiest International Seaway",
      "fastFacts": [
        "Connects the English Channel to the North Sea and separates Great Britain from continental Europe.",
        "Busiest passenger and shipping waterway in the world, crossed by more than 400 commercial ships daily.",
        "Crossed underneath by the Channel Tunnel ('Chunnel', 50.45 km, opened 1994) — the longest undersea railway tunnel in the world."
      ],
      "geographicalSignificance": "Features the iconic White Cliffs of Dover on the English coast, formed of pure Cretaceous chalk.",
      "geopoliticalSignificance": "Historic natural defense shield protecting Britain from continental European invasions (Spanish Armada 1588, Napoleon, Battle of Britain 1940).",
      "examMcqPoints": [
        "Strait separating Great Britain from France: Strait of Dover.",
        "Connects English Channel to: North Sea.",
        "Undersea tunnel connecting UK and France: Channel Tunnel (Eurotunnel, 50.5 km)."
      ]
    },
    {
      "id": "strait-of-magellan",
      "name": "Strait of Magellan",
      "category": "straits",
      "icon": "fa-anchor",
      "color": "#059669",
      "lat": -53.5,
      "lng": -70.5,
      "elevation": "Sea level",
      "length": "570 km (Width: 2 to 33 km)",
      "continents": "South America",
      "countries": [
        "Chile"
      ],
      "tagline": "Historic Natural Passage Around Cape Horn",
      "fastFacts": [
        "Natural navigable sea route in southern Chile connecting the Atlantic Ocean with the Pacific Ocean.",
        "Separates mainland South America to the north from the Tierra del Fuego archipelago to the south.",
        "Discovered by Portuguese explorer Ferdinand Magellan in 1520 during the first global circumnavigation."
      ],
      "geographicalSignificance": "Extremely difficult and treacherous to navigate due to narrow fjords, fierce unpredictable winds ('williwaws'), and dense fog.",
      "geopoliticalSignificance": "Primary shipping route between the Atlantic and Pacific prior to the construction of the Panama Canal in 1914.",
      "examMcqPoints": [
        "Strait named after the explorer who first circumnavigated the globe: Strait of Magellan (Ferdinand Magellan, 1520).",
        "Separates mainland South America from: Tierra del Fuego.",
        "Located entirely in the territory of: Chile."
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PHYSICAL_GEOGRAPHY_DATA;
}
