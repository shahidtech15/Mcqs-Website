const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'frontend', 'js', 'data_physical_geography.js');
const data = require(dataFile);

const moreFeatures = [
  // Mountains
  {
    id: "denali",
    name: "Mount Denali (Mount McKinley)",
    category: "mountains",
    icon: "fa-mountain",
    color: "#dc2626",
    lat: 63.07,
    lng: -151.01,
    elevation: "6,190 m (Highest in North America)",
    length: "Alaska Range",
    continents: "North America",
    countries: ["United States (Alaska)"],
    tagline: "Highest Mountain Peak in North America",
    fastFacts: [
      "Third highest and third most prominent isolated summit on Earth after Mount Everest and Aconcagua.",
      "Has one of the world's most severe cold climates; temperatures reach -60°C with 160 km/h windchills.",
      "Renamed back to its indigenous Koyukon Athabascan name 'Denali' ('The Tall One') in 2015."
    ],
    geographicalSignificance: "Forms the crowning topographic apex of the subarctic Alaska Range, carved by extensive valley glaciers (Kahiltna, Ruth).",
    geopoliticalSignificance: "Crown jewel of the Denali National Park and Preserve; ecological barometer for Arctic climate warming.",
    examMcqPoints: [
      "Highest mountain peak in North America: Denali (6,190 m).",
      "Located in: Alaska, USA.",
      "Formerly known as: Mount McKinley."
    ]
  },
  {
    id: "aconcagua",
    name: "Mount Aconcagua",
    category: "mountains",
    icon: "fa-mountain",
    color: "#dc2626",
    lat: -32.65,
    lng: -70.01,
    elevation: "6,961 m (Highest in Americas & Southern Hemisphere)",
    length: "Principal Cordillera of Andes",
    continents: "South America",
    countries: ["Argentina"],
    tagline: "Highest Peak in the Western & Southern Hemispheres",
    fastFacts: [
      "Highest mountain outside of Asia, and the highest point in both the Western and Southern Hemispheres.",
      "Formed by the subduction of the Nazca Plate beneath the South American Plate.",
      "Non-technical ascent on the Normal Route, but notorious for severe altitude sickness and sudden violent Andean winds ('Viento Blanco')."
    ],
    geographicalSignificance: "Forms the hydrological apex dividing Pacific-bound and Atlantic-bound runoff in the southern Andes.",
    geopoliticalSignificance: "Key attraction for international mountaineering and strategic border surveillance between Argentina and Chile.",
    examMcqPoints: [
      "Highest mountain peak in South America / Western Hemisphere: Aconcagua (6,961 m).",
      "Located in: Mendoza Province, Argentina.",
      "Second highest of the global 'Seven Summits' after Mount Everest."
    ]
  },

  // Rivers
  {
    id: "yellow-river",
    name: "Yellow River (Huang He)",
    category: "rivers",
    icon: "fa-water",
    color: "#0284c7",
    lat: 37.8,
    lng: 119.0,
    elevation: "Source: Bayan Har Mountains (Tibet)",
    length: "5,464 km",
    continents: "Asia",
    countries: ["China"],
    tagline: "Mother River of China & China's Sorrow",
    fastFacts: [
      "Second longest river in China and the 6th longest river system in the world.",
      "Earned its name from the yellow loess silt picked up as it flows through the Loess Plateau, carrying the highest sediment concentration of any major river on Earth.",
      "Historically called 'China's Sorrow' due to devastating catastrophic floods and course changes over thousands of years."
    ],
    geographicalSignificance: "Created the fertile North China Plain, the cradle of ancient northern Chinese civilization.",
    geopoliticalSignificance: "Major source of hydroelectric power and irrigation, managed by the Xiaolangdi Dam to control massive siltation.",
    examMcqPoints: [
      "Second longest river in China: Yellow River (Huang He).",
      "Known historically as: 'China's Sorrow' and 'Mother River of China'.",
      "Empties into the Bohai Sea."
    ]
  },
  {
    id: "congo-river",
    name: "Congo River (Zaire River)",
    category: "rivers",
    icon: "fa-water",
    color: "#0284c7",
    lat: -6.07,
    lng: 12.45,
    elevation: "Discharges 41,000 m³/s into Atlantic",
    length: "4,700 km",
    continents: "Africa",
    countries: ["DR Congo", "Republic of the Congo", "Central African Republic", "Angola", "Zambia"],
    tagline: "World's Deepest River & 2nd Largest Discharge",
    fastFacts: [
      "World's deepest recorded river, with depths exceeding 220 meters (720 ft) in certain canyon gorges.",
      "Second largest river in the world by water discharge volume (~41,000 m³/s), exceeded only by the Amazon.",
      "Only major river in the world to cross the Equator twice."
    ],
    geographicalSignificance: "Drains the Congo Basin, the second largest rainforest on Earth. Possesses immense untapped hydroelectric potential (Grand Inga Dam proposal).",
    geopoliticalSignificance: "Economic lifeblood of Central Africa; the two capital cities of Brazzaville and Kinshasa face each other across its banks.",
    examMcqPoints: [
      "Deepest river in the world: Congo River (>220 m).",
      "Only river that crosses the Equator twice: Congo River.",
      "Second largest river by discharge volume: Congo River."
    ]
  },
  {
    id: "mekong",
    name: "Mekong River",
    category: "rivers",
    icon: "fa-water",
    color: "#0284c7",
    lat: 10.3,
    lng: 106.3,
    elevation: "Source: Tibetan Plateau",
    length: "4,350 km",
    continents: "Asia",
    countries: ["China", "Myanmar", "Laos", "Thailand", "Cambodia", "Vietnam"],
    tagline: "Lifeline of Southeast Asia & Transboundary Giant",
    fastFacts: [
      "Rises in the Tibetan Plateau (known as Lancang in China) and flows through 6 Southeast Asian countries into the South China Sea.",
      "Supports the Tonle Sap Lake reverse-flow phenomenon in Cambodia during the monsoon season.",
      "World's most productive inland fishery, accounting for 25% of global freshwater catches."
    ],
    geographicalSignificance: "The Mekong Delta in southern Vietnam is one of the world's premier rice-producing regions ('Rice Bowl of Vietnam').",
    geopoliticalSignificance: "Subject of intense hydropolitical tension between upstream China (which has built 11 mega-dams on the upper stem) and downstream lower Mekong nations.",
    examMcqPoints: [
      "Mekong River passes through 6 countries: China, Myanmar, Laos, Thailand, Cambodia, Vietnam.",
      "Empties into: South China Sea.",
      "Tonle Sap lake connects to the Mekong in Cambodia."
    ]
  },

  // Lakes
  {
    id: "lake-tanganyika",
    name: "Lake Tanganyika",
    category: "lakes",
    icon: "fa-gem",
    color: "#2563eb",
    lat: -6.0,
    lng: 29.5,
    elevation: "773 m",
    area: "32,900 km²",
    depth: "1,470 m (2nd Deepest on Earth)",
    continents: "Africa",
    countries: ["Tanzania", "DR Congo", "Burundi", "Zambia"],
    tagline: "World's Longest Freshwater Lake & 2nd Deepest",
    fastFacts: [
      "World's longest freshwater lake (673 km north to south).",
      "Second deepest freshwater lake in the world (1,470 meters / 4,820 ft) and second largest by volume after Lake Baikal.",
      "Forms part of the Albertine Rift, the western branch of the East African Rift System."
    ],
    geographicalSignificance: "Holds roughly 16% of the world's available surface freshwater. Remarkable evolutionary laboratory hosting over 250 species of cichlid fish found nowhere else.",
    geopoliticalSignificance: "Vital transboundary navigation corridor between East and Central Africa.",
    examMcqPoints: [
      "Second deepest lake in the world: Lake Tanganyika (1,470 m).",
      "Longest freshwater lake in the world: Lake Tanganyika (673 km).",
      "Shared by 4 countries: Tanzania, DR Congo, Burundi, Zambia."
    ]
  },
  {
    id: "lake-titicaca",
    name: "Lake Titicaca",
    category: "lakes",
    icon: "fa-gem",
    color: "#2563eb",
    lat: -15.8,
    lng: -69.4,
    elevation: "3,812 m (Highest Navigable Lake)",
    area: "8,372 km²",
    depth: "281 m",
    continents: "South America",
    countries: ["Peru", "Bolivia"],
    tagline: "Highest Commercially Navigable Lake on Earth",
    fastFacts: [
      "Situated at 3,812 meters (12,507 ft) above sea level in the high Andean Altiplano.",
      "Highest commercially navigable lake in the world for large vessels.",
      "In Incan mythology, Lake Titicaca was revered as the birthplace of the Sun and the founding Inca rulers."
    ],
    geographicalSignificance: "Large alpine endorheic lake that moderates the high-altitude climate of the surrounding Altiplano, permitting agriculture where it would otherwise freeze.",
    geopoliticalSignificance: "Co-managed peacefully by the Joint Autonomous Authority of Lake Titicaca (ALT) between Peru and Bolivia.",
    examMcqPoints: [
      "Highest navigable lake in the world: Lake Titicaca (3,812 m).",
      "Located on the border of: Peru and Bolivia.",
      "Situated on the high-altitude Andean Altiplano."
    ]
  },
  {
    id: "aral-sea",
    name: "Aral Sea",
    category: "lakes",
    icon: "fa-gem",
    color: "#2563eb",
    lat: 45.0,
    lng: 60.0,
    elevation: "Varies",
    area: "Shrunk by >90% since 1960",
    depth: "Severely desiccated",
    continents: "Asia",
    countries: ["Kazakhstan", "Uzbekistan"],
    tagline: "20th Century's Worst Anthropogenic Ecological Disaster",
    fastFacts: [
      "Formerly the 4th largest lake in the world (68,000 km² in 1960).",
      "Beginning in the 1960s, Soviet irrigation projects diverted its two feeding rivers — the Amu Darya and Syr Darya — to cultivate cotton in the desert.",
      "By the 2000s, it had split into separate hypersaline basins and lost over 90% of its volume, leaving behind a toxic desert called the Aralkum."
    ],
    geographicalSignificance: "Exposed dry seabed produces toxic salt-and-pesticide dust storms that cause respiratory illnesses thousands of kilometers away in Central Asia.",
    geopoliticalSignificance: "The Kokaral Dam built by Kazakhstan in 2005 has successfully stabilized and partially revived the North Aral Sea.",
    examMcqPoints: [
      "Aral Sea was fed by which two rivers: Amu Darya and Syr Darya.",
      "Located on the border of: Kazakhstan and Uzbekistan.",
      "Drying of Aral Sea was caused by: Soviet cotton irrigation diversions."
    ]
  },

  // Deserts
  {
    id: "kalahari",
    name: "Kalahari Desert",
    category: "deserts",
    icon: "fa-sun",
    color: "#d97706",
    lat: -23.0,
    lng: 22.0,
    area: "900,000 km²",
    elevation: "900 - 1,200 m",
    continents: "Africa",
    countries: ["Botswana", "Namibia", "South Africa"],
    tagline: "Vast Semi-Arid Sandy Basin of Southern Africa",
    fastFacts: [
      "Covers 70% of Botswana and parts of Namibia and South Africa.",
      "Not a true desert in the strictest sense; receives 110–500 mm of rain, classifying it as a semi-arid savanna basin with vast red sand plains.",
      "Traditional ancestral home of the indigenous San (Bushmen) hunter-gatherers."
    ],
    geographicalSignificance: "Absorbs the inland Okavango River, creating the world's largest inland wetland delta — the Okavango Delta.",
    geopoliticalSignificance: "Rich in mineral deposits, particularly diamond mines (Orapa and Jwaneng in Botswana — two of the world's richest diamond pipes).",
    examMcqPoints: [
      "Kalahari Desert is predominantly located in: Botswana (also Namibia & South Africa).",
      "Okavango Delta empties into: Kalahari Desert basin.",
      "Indigenous hunter-gatherer people of Kalahari: San (Bushmen)."
    ]
  },
  {
    id: "namib",
    name: "Namib Desert",
    category: "deserts",
    icon: "fa-sun",
    color: "#d97706",
    lat: -24.7,
    lng: 15.3,
    area: "81,000 km²",
    elevation: "Sea level to 2,000 m",
    continents: "Africa",
    countries: ["Namibia", "Angola", "South Africa"],
    tagline: "Oldest Desert in the World & Coastal Fog Desert",
    fastFacts: [
      "Considered the oldest desert in the world, having endured arid or semi-arid conditions for at least 55 to 80 million years.",
      "Stretches 2,000 km along the Atlantic coast of Namibia, where cold waters of the Benguela Current produce dense coastal fog.",
      "Features some of the highest sand dunes in the world at Sossusvlei (Dune 7 reaches 388 m)."
    ],
    geographicalSignificance: "Known for the treacherous 'Skeleton Coast' where hundreds of shipwrecks lie buried in coastal sands.",
    geopoliticalSignificance: "Hosts major uranium deposits (Rössing and Husab mines) and diamond-rich alluvial coastal deposits.",
    examMcqPoints: [
      "Oldest desert in the world: Namib Desert (55–80M years).",
      "Skeleton Coast is part of: Namib Desert (Namibia).",
      "Cold ocean current creating Namib fog: Benguela Current."
    ]
  },

  // Seas
  {
    id: "caribbean",
    name: "Caribbean Sea",
    category: "seas",
    icon: "fa-sailboat",
    color: "#0891b2",
    lat: 15.0,
    lng: -75.0,
    area: "2,754,000 km²",
    depth: "7,686 m (Cayman Trough)",
    continents: "Americas",
    countries: ["Bordered by Mexico, Central America, northern South America, and Greater/Lesser Antilles"],
    tagline: "Tropical Gateway to the Panama Canal",
    fastFacts: [
      "Sub-oceanic basin of the Western Atlantic Ocean, bounded by the Greater Antilles to the north and Central America to the west.",
      "Deepest point is the Cayman Trough (7,686 m / 25,217 ft) between Cuba and Jamaica.",
      "Contains the Mesoamerican Barrier Reef System — the second largest coral reef system in the world."
    ],
    geographicalSignificance: "High sea surface temperatures fuel North Atlantic hurricanes that track toward the Gulf of Mexico and eastern United States.",
    geopoliticalSignificance: "Strategic approach to the Panama Canal connecting Atlantic and Pacific trade corridors.",
    examMcqPoints: [
      "Deepest point in the Caribbean Sea: Cayman Trough (7,686 m).",
      "Panama Canal connects the Caribbean Sea (Atlantic) to: Pacific Ocean.",
      "Second largest barrier reef in the world: Mesoamerican Barrier Reef."
    ]
  },
  {
    id: "baltic-sea",
    name: "Baltic Sea",
    category: "seas",
    icon: "fa-sailboat",
    color: "#0891b2",
    lat: 58.0,
    lng: 20.0,
    area: "377,000 km²",
    depth: "459 m max depth",
    continents: "Europe",
    countries: ["Sweden", "Finland", "Russia", "Estonia", "Latvia", "Lithuania", "Poland", "Germany", "Denmark"],
    tagline: "Brackish Inland Sea & Northern NATO Lake",
    fastFacts: [
      "One of the largest bodies of brackish (low-salinity) water in the world, fed by over 250 rivers.",
      "Connected to the North Sea via the Danish Straits (Oresund, Great Belt, Little Belt) and the Kiel Canal in Germany.",
      "Following Finland and Sweden joining NATO, often termed strategically as 'NATO's Lake'."
    ],
    geographicalSignificance: "Prone to winter freezing in its northern reaches (Gulf of Bothnia) due to low salinity and shallow water.",
    geopoliticalSignificance: "Critical energy and defense corridor; site of the Nord Stream pipeline sabotage and Russian naval access via Kaliningrad and St. Petersburg.",
    examMcqPoints: [
      "Canal connecting North Sea to Baltic Sea: Kiel Canal (Germany).",
      "The Baltic States are: Estonia, Latvia, Lithuania.",
      "Low salinity brackish water body."
    ]
  },

  // Oceans
  {
    id: "southern-ocean",
    name: "Southern Ocean (Antarctic Ocean)",
    category: "oceans",
    icon: "fa-compass",
    color: "#1e3a8a",
    lat: -65.0,
    lng: 0.0,
    area: "20,327,000 km²",
    depth: "7,236 m (Factorian Deep, South Sandwich Trench)",
    continents: "Antarctica",
    countries: ["Encircles Antarctica"],
    tagline: "Fourth Largest Ocean & Earth's Climate Engine",
    fastFacts: [
      "Officially recognized by the International Hydrographic Organization (IHO) as the body of water encircling Antarctica south of 60°S latitude.",
      "Dominated by the Antarctic Circumpolar Current (ACC) — the most powerful ocean current on Earth, transporting 130–150 million m³/s of water.",
      "Deepest point is the Factorian Deep in the South Sandwich Trench (7,236 m)."
    ],
    geographicalSignificance: "Major global carbon sink and engine of Earth's thermohaline conveyor belt, generating dense Antarctic Bottom Water.",
    geopoliticalSignificance: "Governed by the 1959 Antarctic Treaty System dedicating the continent and surrounding waters strictly to peaceful scientific research.",
    examMcqPoints: [
      "Most powerful ocean current in the world: Antarctic Circumpolar Current (West Wind Drift).",
      "Antarctic Treaty was signed in: 1959 (effective 1961).",
      "Southern Ocean is defined as waters south of: 60° South latitude."
    ]
  },
  {
    id: "arctic-ocean",
    name: "Arctic Ocean",
    category: "oceans",
    icon: "fa-compass",
    color: "#1e3a8a",
    lat: 90.0,
    lng: 0.0,
    area: "14,060,000 km²",
    depth: "5,550 m (Molloy Deep)",
    continents: "North America, Europe, Asia",
    countries: ["Bordered by Russia, Canada, United States (Alaska), Denmark (Greenland), Norway, Iceland"],
    tagline: "Smallest & Shallowest Ocean on Earth",
    fastFacts: [
      "Smallest and shallowest of the world's five major oceans, centered around the geographic North Pole.",
      "Mostly covered by sea ice throughout the year, though summer ice extent has declined by over 40% since satellite tracking began in 1979.",
      "Deepest point is the Molloy Deep (5,550 m) in the Fram Strait between Greenland and Svalbard."
    ],
    geographicalSignificance: "High albedo effect reflects solar radiation back to space. Melting permafrost and sea ice are primary catalysts of polar amplification.",
    geopoliticalSignificance: "Thawing ice is opening the Northern Sea Route (NSR) and Northwest Passage, cutting shipping times between Europe and Asia by 30-40%. Estimated to contain 30% of undiscovered global natural gas and 13% of oil.",
    examMcqPoints: [
      "Smallest and shallowest ocean: Arctic Ocean.",
      "Deepest point of the Arctic Ocean: Molloy Deep (5,550 m).",
      "Northern Sea Route connects: Atlantic and Pacific oceans along the Russian Arctic coast."
    ]
  },

  // Plateaus
  {
    id: "anatolian-plateau",
    name: "Anatolian Plateau",
    category: "plateaus",
    icon: "fa-volcano",
    color: "#7c2d12",
    lat: 39.0,
    lng: 33.0,
    elevation: "900 - 1,500 m",
    area: "500,000 km²",
    continents: "Asia",
    countries: ["Turkey"],
    tagline: "Heartland of Asia Minor & Bridge Between Continents",
    fastFacts: [
      "Occupies the central interior of Turkey (Asia Minor), bounded by the Pontic Mountains to the north and the Taurus Mountains to the south.",
      "Contains the capital of modern Turkey, Ankara, and the historic volcanic landscapes of Cappadocia.",
      "Houses Lake Tuz, a large hyper-saline shallow endorheic lake producing over 60% of Turkey's salt."
    ],
    geographicalSignificance: "Semi-arid continental climate with cold snowy winters and hot dry summers, forming Turkey's main grain and livestock belt.",
    geopoliticalSignificance: "Historical crossroads of civilizations (Hittites, Phrygians, Greeks, Byzantines, Seljuks, Ottomans).",
    examMcqPoints: [
      "Capital city situated on the Anatolian Plateau: Ankara.",
      "Bounded by: Pontic Mountains in the north and Taurus Mountains in the south.",
      "Contains famous volcanic fairy chimneys of: Cappadocia."
    ]
  },
  {
    id: "altiplano",
    name: "Altiplano (Andean Plateau)",
    category: "plateaus",
    icon: "fa-volcano",
    color: "#7c2d12",
    lat: -19.0,
    lng: -67.5,
    elevation: "Average 3,750 m",
    area: "300,000 km²",
    continents: "South America",
    countries: ["Bolivia", "Peru", "Chile", "Argentina"],
    tagline: "Second Highest High-Altitude Plateau on Earth",
    fastFacts: [
      "Extensive high-altitude plateau where the Andes Mountains widen to over 400 km in width.",
      "Second most extensive high-elevation plateau on Earth after the Tibetan Plateau, averaging 3,750 m (12,300 ft).",
      "Contains the Salar de Uyuni — the world's largest salt flat (10,582 km²) holding roughly 50% of known global lithium reserves!"
    ],
    geographicalSignificance: "Endorheic basin hosting Lake Titicaca and Lake Poopó, characterized by extreme diurnal temperature fluctuations.",
    geopoliticalSignificance: "The epicentre of the global energy transition due to vast lithium brines ('Lithium Triangle').",
    examMcqPoints: [
      "World's largest salt flat: Salar de Uyuni (Bolivia) on the Altiplano.",
      "Second highest plateau in the world after Tibet: Altiplano.",
      "Center of the global 'Lithium Triangle' (Bolivia, Chile, Argentina)."
    ]
  },
  {
    id: "ethiopian-highlands",
    name: "Ethiopian Highlands (Roof of Africa)",
    category: "plateaus",
    icon: "fa-volcano",
    color: "#7c2d12",
    lat: 11.5,
    lng: 39.5,
    elevation: "1,500 - 4,550 m (Ras Dejen)",
    area: "350,000 km²",
    continents: "Africa",
    countries: ["Ethiopia", "Eritrea"],
    tagline: "Water Tower of Northeast Africa & Source of the Blue Nile",
    fastFacts: [
      "Largest continuous area of its altitude in the continent of Africa; rarely falls below 1,500 m and rises to 4,550 m at Ras Dejen.",
      "Split down the center by the Great East African Rift Valley into northwestern and southeastern massifs.",
      "Source of Lake Tana and the Blue Nile River, which supplies 80-85% of the total water reaching Egypt."
    ],
    geographicalSignificance: "Creates an Afroalpine microclimate that receives heavy monsoon rainfall, standing out from the arid lowlands of the Horn of Africa.",
    geopoliticalSignificance: "Site of the Grand Ethiopian Renaissance Dam (GERD), the largest hydroelectric project in Africa.",
    examMcqPoints: [
      "Highest peak of the Ethiopian Highlands: Ras Dejen (4,550 m).",
      "Origin of the Blue Nile: Lake Tana in the Ethiopian Highlands.",
      "Often referred to as: 'The Water Tower of Northeast Africa'."
    ]
  },

  // Straits
  {
    id: "strait-of-dover",
    name: "Strait of Dover (English Channel)",
    category: "straits",
    icon: "fa-anchor",
    color: "#059669",
    lat: 51.13,
    lng: 1.45,
    elevation: "Sea level",
    length: "Narrowest width: 33.3 km (20.7 miles)",
    continents: "Europe",
    countries: ["United Kingdom (England)", "France"],
    tagline: "World's Busiest International Seaway",
    fastFacts: [
      "Connects the English Channel to the North Sea and separates Great Britain from continental Europe.",
      "Busiest passenger and shipping waterway in the world, crossed by more than 400 commercial ships daily.",
      "Crossed underneath by the Channel Tunnel ('Chunnel', 50.45 km, opened 1994) — the longest undersea railway tunnel in the world."
    ],
    geographicalSignificance: "Features the iconic White Cliffs of Dover on the English coast, formed of pure Cretaceous chalk.",
    geopoliticalSignificance: "Historic natural defense shield protecting Britain from continental European invasions (Spanish Armada 1588, Napoleon, Battle of Britain 1940).",
    examMcqPoints: [
      "Strait separating Great Britain from France: Strait of Dover.",
      "Connects English Channel to: North Sea.",
      "Undersea tunnel connecting UK and France: Channel Tunnel (Eurotunnel, 50.5 km)."
    ]
  },
  {
    id: "strait-of-magellan",
    name: "Strait of Magellan",
    category: "straits",
    icon: "fa-anchor",
    color: "#059669",
    lat: -53.5,
    lng: -70.5,
    elevation: "Sea level",
    length: "570 km (Width: 2 to 33 km)",
    continents: "South America",
    countries: ["Chile"],
    tagline: "Historic Natural Passage Around Cape Horn",
    fastFacts: [
      "Natural navigable sea route in southern Chile connecting the Atlantic Ocean with the Pacific Ocean.",
      "Separates mainland South America to the north from the Tierra del Fuego archipelago to the south.",
      "Discovered by Portuguese explorer Ferdinand Magellan in 1520 during the first global circumnavigation."
    ],
    geographicalSignificance: "Extremely difficult and treacherous to navigate due to narrow fjords, fierce unpredictable winds ('williwaws'), and dense fog.",
    geopoliticalSignificance: "Primary shipping route between the Atlantic and Pacific prior to the construction of the Panama Canal in 1914.",
    examMcqPoints: [
      "Strait named after the explorer who first circumnavigated the globe: Strait of Magellan (Ferdinand Magellan, 1520).",
      "Separates mainland South America from: Tierra del Fuego.",
      "Located entirely in the territory of: Chile."
    ]
  }
];

// Append more features
moreFeatures.forEach(mf => {
  if (!data.features.some(f => f.id === mf.id)) {
    data.features.push(mf);
  }
});

const fileHeader = `/**
 * CSS PREP CENTRAL - GLOBAL PHYSICAL GEOGRAPHY DATASET
 * Comprehensive, High-Yield Physical Geography Database for CSS, PMS, FPSC, PPSC, SPSC, UPSC & Competitive Examinations.
 * Categories: Mountains, Rivers, Lakes, Deserts, Seas, Oceans, Plateaus, Straits.
 */

const PHYSICAL_GEOGRAPHY_DATA = ` + JSON.stringify(data, null, 2) + `;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PHYSICAL_GEOGRAPHY_DATA;
}
`;

fs.writeFileSync(dataFile, fileHeader, 'utf-8');
console.log('Successfully enriched data_physical_geography.js. Total features:', data.features.length);
