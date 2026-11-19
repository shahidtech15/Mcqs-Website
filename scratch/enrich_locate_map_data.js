const fs = require('fs');
const path = require('path');

let existing = require('../frontend/js/data_locate_map.js');

const additionalTargets = [
  // Additional Capitals
  {
    id: "cap-rome",
    name: "Rome (Capital of Italy)",
    category: "capitals",
    continent: "Europe",
    region: "Southern Europe",
    lat: 41.9028,
    lng: 12.4964,
    flag: "🇮🇹",
    country: "Italy",
    promptText: "Locate Rome (Capital of Italy) on the blank map.",
    clue: "Located in the central-western portion of the Italian Peninsula on the River Tiber; entirely surrounds Vatican City.",
    examFacts: "Known as the 'Eternal City'; former capital of the Roman Empire; home to the Colosseum, Pantheon, and Vatican City enclave.",
    toleranceKm: 350
  },
  {
    id: "cap-seoul",
    name: "Seoul (Capital of South Korea)",
    category: "capitals",
    continent: "Asia",
    region: "East Asia",
    lat: 37.5665,
    lng: 126.9780,
    flag: "🇰🇷",
    country: "South Korea",
    promptText: "Locate Seoul (Capital of South Korea) on the blank map.",
    clue: "Situated on the Han River in northwestern South Korea, only 50 km south of the Korean Demilitarized Zone (DMZ).",
    examFacts: "Houses half of South Korea's population in its metropolitan area; world's leading technological and semiconductor powerhouse.",
    toleranceKm: 350
  },
  {
    id: "cap-madrid",
    name: "Madrid (Capital of Spain)",
    category: "capitals",
    continent: "Europe",
    region: "Iberian Peninsula",
    lat: 40.4168,
    lng: -3.7038,
    flag: "🇪🇸",
    country: "Spain",
    promptText: "Locate Madrid (Capital of Spain) on the blank map.",
    clue: "Located on the River Manzanares in the geographic center of both the Iberian Peninsula and the country.",
    examFacts: "Second-largest city in the European Union; situated on the high Castilian plateau (Meseta Central) at 667m altitude.",
    toleranceKm: 350
  },
  {
    id: "cap-athens",
    name: "Athens (Capital of Greece)",
    category: "capitals",
    continent: "Europe",
    region: "Balkans / Southern Europe",
    lat: 37.9838,
    lng: 23.7275,
    flag: "🇬🇷",
    country: "Greece",
    promptText: "Locate Athens (Capital of Greece) on the blank map.",
    clue: "Dominates the Attica region of southern Greece, overlooking the Saronic Gulf of the Aegean Sea.",
    examFacts: "Birthplace of Western civilization, democracy, and philosophy; crowned by the 5th-century BCE Acropolis and Parthenon.",
    toleranceKm: 350
  },
  {
    id: "cap-baghdad",
    name: "Baghdad (Capital of Iraq)",
    category: "capitals",
    continent: "Asia",
    region: "Middle East (Mesopotamia)",
    lat: 33.3152,
    lng: 44.3661,
    flag: "🇮🇶",
    country: "Iraq",
    promptText: "Locate Baghdad (Capital of Iraq) on the blank map.",
    clue: "Located along the Tigris River in central Iraq, founded in 762 CE as the capital of the Abbasid Caliphate.",
    examFacts: "Historic center of the Islamic Golden Age with the Grand Library (House of Wisdom / Bayt al-Hikma); destroyed during the 1258 Mongol siege.",
    toleranceKm: 350
  },
  {
    id: "cap-kabul",
    name: "Kabul (Capital of Afghanistan)",
    category: "capitals",
    continent: "Asia",
    region: "Central / South Asia",
    lat: 34.5553,
    lng: 69.2075,
    flag: "🇦🇫",
    country: "Afghanistan",
    promptText: "Locate Kabul (Capital of Afghanistan) on the blank map.",
    clue: "Located in eastern Afghanistan in a narrow valley between the Hindu Kush mountains along the Kabul River.",
    examFacts: "Strategic mountain hub on the ancient Silk Road connecting Central and South Asia via the Khyber Pass; over 3,500 years of documented history.",
    toleranceKm: 350
  },
  {
    id: "cap-dhaka",
    name: "Dhaka (Capital of Bangladesh)",
    category: "capitals",
    continent: "Asia",
    region: "South Asia",
    lat: 23.8103,
    lng: 90.4125,
    flag: "🇧🇩",
    country: "Bangladesh",
    promptText: "Locate Dhaka (Capital of Bangladesh) on the blank map.",
    clue: "Located in central Bangladesh along the Buriganga River in the heart of the Bengal Delta.",
    examFacts: "Known as the 'City of Mosques' and the 'Rickshaw Capital of the World'; major global textile export center; 6th most densely populated city on Earth.",
    toleranceKm: 350
  },
  {
    id: "cap-bangkok",
    name: "Bangkok (Capital of Thailand)",
    category: "capitals",
    continent: "Asia",
    region: "Southeast Asia",
    lat: 13.7563,
    lng: 100.5018,
    flag: "🇹🇭",
    country: "Thailand",
    promptText: "Locate Bangkok (Capital of Thailand) on the blank map.",
    clue: "Occupies both banks of the Chao Phraya River delta near the Gulf of Thailand.",
    examFacts: "Known locally as Krung Thep Maha Nakhon; full ceremonial name is recognized by Guinness as the longest place name in the world.",
    toleranceKm: 350
  },

  // Additional Mountains
  {
    id: "mtn-tirich-mir",
    name: "Tirich Mir (Hindu Kush)",
    category: "mountains",
    continent: "Asia",
    region: "Khyber Pakhtunkhwa, Pakistan",
    lat: 36.2520,
    lng: 71.8480,
    flag: "🏔️",
    country: "Pakistan",
    promptText: "Locate Tirich Mir (Highest Peak of the Hindu Kush) on the blank map.",
    clue: "Highest mountain peak of the Hindu Kush range (7,708 m), rising in the Chitral District of northern Pakistan.",
    examFacts: "First scaled in 1950 by a Norwegian expedition led by Arne Næss; visible from Chitral town and dominates the Wakhan corridor border region.",
    toleranceKm: 350
  },
  {
    id: "mtn-nanga-parbat",
    name: "Nanga Parbat (Western Anchor of the Himalayas)",
    category: "mountains",
    continent: "Asia",
    region: "Gilgit-Baltistan, Pakistan",
    lat: 35.2372,
    lng: 74.5891,
    flag: "🏔️",
    country: "Pakistan",
    promptText: "Locate Nanga Parbat (The Killer Mountain) on the blank map.",
    clue: "Massive peak in Gilgit-Baltistan that forms the western anchor of the entire Himalayan mountain chain (8,126 m).",
    examFacts: "9th highest mountain on Earth; home to the Rupal Face (highest mountain face in the world, rising 4,600m directly from base); known as 'Diamer' (King of Mountains).",
    toleranceKm: 350
  },
  {
    id: "mtn-pyrenees",
    name: "Pyrenees Mountains",
    category: "mountains",
    continent: "Europe",
    region: "France / Spain / Andorra",
    lat: 42.6667,
    lng: 1.0000,
    flag: "⛰️",
    country: "France / Spain / Andorra",
    promptText: "Locate the Pyrenees Mountains on the blank map.",
    clue: "Mountain range separating the Iberian Peninsula from the rest of continental Europe, running between the Bay of Biscay and Mediterranean Sea.",
    examFacts: "Natural barrier between France and Spain, with the microstate of Andorra nestled within its high valleys; highest peak is Aneto (3,404 m).",
    toleranceKm: 400
  },
  {
    id: "mtn-zagros",
    name: "Zagros Mountains",
    category: "mountains",
    continent: "Asia",
    region: "Iran / Iraq",
    lat: 32.0000,
    lng: 50.0000,
    flag: "⛰️",
    country: "Iran / Iraq / Turkey",
    promptText: "Locate the Zagros Mountains on the blank map.",
    clue: "Extensive mountain range spanning 1,600 km from northwestern Iran down along the Persian Gulf coast to the Strait of Hormuz.",
    examFacts: "Formed by collision of Eurasian and Arabian tectonic plates; historically shielded Persian civilizations from Mesopotamian powers; highest peak is Mount Dena (4,409m).",
    toleranceKm: 450
  },

  // Additional Rivers
  {
    id: "riv-mekong",
    name: "Mekong River",
    category: "rivers",
    continent: "Asia",
    region: "Southeast Asia",
    lat: 15.0000,
    lng: 105.0000,
    flag: "🌊",
    country: "China / Myanmar / Laos / Thailand / Cambodia / Vietnam",
    promptText: "Locate the Mekong River on the blank map.",
    clue: "Trans-boundary river flowing from the Tibetan Plateau through 6 Southeast Asian nations into the South China Sea.",
    examFacts: "12th longest river in the world (4,350 km); supports the world's largest inland fishery and Tonle Sap lake reverse flow; strategic water security dispute over Chinese upstream dams.",
    toleranceKm: 450
  },
  {
    id: "riv-rhine",
    name: "Rhine River",
    category: "rivers",
    continent: "Europe",
    region: "Western Europe",
    lat: 50.0000,
    lng: 7.5000,
    flag: "🌊",
    country: "Switzerland / Germany / France / Netherlands",
    promptText: "Locate the Rhine River on the blank map.",
    clue: "Originates in the Swiss Alps, forms the French-German border, and flows through industrial Germany to empty at Rotterdam in the Netherlands.",
    examFacts: "Busiest inland waterway in Europe (1,230 km); historic industrial backbone of the Ruhr Valley and European steel/coal integration (ECSC, foundation of EU).",
    toleranceKm: 350
  },
  {
    id: "riv-yellow",
    name: "Yellow River (Huang He)",
    category: "rivers",
    continent: "Asia",
    region: "Northern China",
    lat: 36.0000,
    lng: 110.0000,
    flag: "🌊",
    country: "China",
    promptText: "Locate the Yellow River (Huang He) on the blank map.",
    clue: "Originates in the Bayan Har Mountains in Qinghai and flows through 9 provinces into the Bohai Sea.",
    examFacts: "Second longest river in China (5,464 km); known as the 'Cradle of Chinese Civilization' and historically 'China's Sorrow' due to devastating catastrophic floods.",
    toleranceKm: 500
  },
  {
    id: "riv-colorado",
    name: "Colorado River (Grand Canyon)",
    category: "rivers",
    continent: "North America",
    region: "Southwestern United States",
    lat: 36.0000,
    lng: -114.0000,
    flag: "🌊",
    country: "United States / Mexico",
    promptText: "Locate the Colorado River on the blank map.",
    clue: "Flows through the arid American Southwest, famously carving the Grand Canyon before reaching the Gulf of California.",
    examFacts: "Lifeblood of the American West; feeds the Hoover Dam (creating Lake Mead, largest US reservoir) and irrigates California's Imperial Valley.",
    toleranceKm: 450
  },
  {
    id: "riv-zambezi",
    name: "Zambezi River (Victoria Falls)",
    category: "rivers",
    continent: "Africa",
    region: "Southern Africa",
    lat: -17.9243,
    lng: 25.8572,
    flag: "🌊",
    country: "Zambia / Zimbabwe / Mozambique / Angola",
    promptText: "Locate the Zambezi River (Victoria Falls) on the blank map.",
    clue: "Flows eastward across south-central Africa to empty into the Indian Ocean via Mozambique.",
    examFacts: "Home to Victoria Falls (Mosi-oa-Tunya, 'The Smoke That Thunders'), the world's largest sheet of falling water; feeds the massive Kariba Dam.",
    toleranceKm: 450
  },

  // Additional Seas & Water Bodies
  {
    id: "sea-dead-sea",
    name: "Dead Sea",
    category: "seas",
    continent: "Asia",
    region: "Middle East (Jordan Rift Valley)",
    lat: 31.5000,
    lng: 35.5000,
    flag: "⛵",
    country: "Jordan / Israel / Palestine",
    promptText: "Locate the Dead Sea on the blank map.",
    clue: "Landlocked hypersaline lake located in the Jordan Rift Valley, bordered by Jordan to the east and Israel/West Bank to the west.",
    examFacts: "Lowest land elevation on Earth (-430.5 meters below sea level); salinity of ~34% (nearly 10x saltier than the ocean), allowing humans to float effortlessly.",
    toleranceKm: 250
  },
  {
    id: "sea-lake-baikal",
    name: "Lake Baikal",
    category: "seas",
    continent: "Asia / Europe",
    region: "Siberia, Russia",
    lat: 53.5000,
    lng: 108.0000,
    flag: "💎",
    country: "Russia",
    promptText: "Locate Lake Baikal on the blank map.",
    clue: "Ancient crescent-shaped rift lake located in southern Siberia, Russia, between Irkutsk Oblast and the Buryat Republic.",
    examFacts: "Deepest lake in the world (1,642 m / 5,387 ft) and the world's oldest lake (~25–30 million years); contains 20% of the world's unfrozen surface fresh water.",
    toleranceKm: 450
  },
  {
    id: "sea-lake-victoria",
    name: "Lake Victoria",
    category: "seas",
    continent: "Africa",
    region: "East Africa (African Great Lakes)",
    lat: -1.0000,
    lng: 33.0000,
    flag: "⛵",
    country: "Tanzania / Uganda / Kenya",
    promptText: "Locate Lake Victoria on the blank map.",
    clue: "Massive tropical freshwater lake shared by Tanzania, Uganda, and Kenya, serving as the chief reservoir of the White Nile.",
    examFacts: "Largest tropical lake in the world and Africa's largest lake by surface area (68,800 sq km); second-largest freshwater lake in the world by surface area after Lake Superior.",
    toleranceKm: 450
  },
  {
    id: "sea-bering-strait",
    name: "Bering Strait",
    category: "seas",
    continent: "Asia / North America",
    region: "Arctic / Pacific Gateway",
    lat: 65.7000,
    lng: -168.9000,
    flag: "⚓",
    country: "Russia / United States (Alaska)",
    promptText: "Locate the Bering Strait on the blank map.",
    clue: "Narrow strait between Cape Dezhnev in Russia and Cape Prince of Wales in Alaska, connecting the Arctic Chukchi Sea to the Pacific Bering Sea.",
    examFacts: "Only 82 km wide at its narrowest point; crossed by the International Date Line; Diomede Islands in the middle are separated by only 3.8 km but are 21 hours apart.",
    toleranceKm: 400
  },
  {
    id: "sea-bosphorus",
    name: "Bosphorus Strait (Istanbul)",
    category: "seas",
    continent: "Europe / Asia",
    region: "Istanbul, Turkey",
    lat: 41.1167,
    lng: 29.0833,
    flag: "⚓",
    country: "Turkey",
    promptText: "Locate the Bosphorus Strait on the blank map.",
    clue: "Natural narrow strait that bisects the city of Istanbul, connecting the Black Sea to the Sea of Marmara.",
    examFacts: "World's narrowest strait used for international navigation; marks the continental boundary between Europe and Asia; governed by the 1936 Montreux Convention.",
    toleranceKm: 250
  },
  {
    id: "sea-north-sea",
    name: "North Sea",
    category: "seas",
    continent: "Europe",
    region: "Northwestern Europe",
    lat: 56.5000,
    lng: 3.5000,
    flag: "⛵",
    country: "UK / Norway / Denmark / Germany / Netherlands",
    promptText: "Locate the North Sea on the blank map.",
    clue: "Marginal sea of the Atlantic Ocean located between the island of Great Britain and the northwestern European mainland.",
    examFacts: "Crucial energy hub: source of the international Brent Crude oil pricing benchmark and massive offshore wind energy generation; connects to Baltic Sea via Danish Straits.",
    toleranceKm: 450
  }
];

// Combine and deduplicate
const combined = [...existing, ...additionalTargets];
console.log('Total targets after enrichment:', combined.length);

const jsContent = `/**
 * CSS PREP CENTRAL - LOCATE IT ON THE MAP GAME DATASET
 * Curated Global Geographical Entity Repository for CSS, PMS, FPSC, PPSC & Competitive Exams.
 * Categories: Countries, Capitals, Mountains & Ranges, Rivers & Basins, Seas, Straits & Oceans.
 * Total Targets: ${combined.length}
 */

const LOCATE_MAP_DATA = ${JSON.stringify(combined, null, 2)};

if (typeof window !== 'undefined') {
  window.LOCATE_MAP_DATA = LOCATE_MAP_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LOCATE_MAP_DATA;
}
`;

fs.writeFileSync(path.join(__dirname, '../frontend/js/data_locate_map.js'), jsContent, 'utf8');
console.log('Successfully updated frontend/js/data_locate_map.js!');
