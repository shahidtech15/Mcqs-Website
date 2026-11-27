#!/usr/bin/env python3
"""
Expands frontend/js/data_guess_country.js from 40 countries to ALL 195
UN-recognized sovereign nations (193 UN Member States + Palestine + Vatican City),
preserving all 40 existing hand-crafted entries and synthesizing rich, non-spoiler
clues, landmarks, borders, capitals, currencies, and exam trivia for the remaining 155!
"""

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GUESS_JS = ROOT / "frontend" / "js" / "data_guess_country.js"
WORLD_JS = ROOT / "frontend" / "js" / "data_world_countries.js"

# Non-sovereign territories in WORLD_COUNTRIES_DATA to exclude from the 195 UN sovereign states
EXCLUDE_TERRITORIES = {"_somaliland", "fk", "gl", "nc", "pr", "tw"}

# The 21 sovereign UN states (19 UN members + 2 UN observer states: ps, va) not in WORLD_COUNTRIES_DATA
EXTRA_UN_STATES = {
    "ad": {
        "name": "Andorra", "continent": "Europe", "region": "Southern Europe (Pyrenees)", "flag": "🇦🇩",
        "capital": "Andorra la Vella", "currency": "Euro (EUR, €)", "officialLanguage": "Catalan",
        "borders": ["France", "Spain"], "coastline": "Landlocked microstate in the eastern Pyrenees mountains",
        "landmark": ("Madriu-Perafita-Claror Valley & Casa de la Vall", "fa-mountain", "UNESCO glacial mountain valley and historic 1580 stone parliament house in Europe's highest capital city (1,023m)."),
        "strategic": "Governed under a unique 1278 Paréage co-principality shared jointly by the President of France and the Bishop of Urgell (Spain)."
    },
    "ag": {
        "name": "Antigua and Barbuda", "continent": "North America", "region": "Caribbean (Leeward Islands)", "flag": "🇦🇬",
        "capital": "St. John's", "currency": "East Caribbean Dollar (XCD)", "officialLanguage": "English",
        "borders": ["Island Nation (Caribbean Sea & Atlantic Ocean)"], "coastline": "Twin-island archipelago famed for 365 beaches",
        "landmark": ("Nelson's Dockyard (English Harbour)", "fa-anchor", "UNESCO World Heritage Georgian-era British Royal Navy dockyard sheltered inside a volcanic bay."),
        "strategic": "Member of CARICOM, Commonwealth, and OAS; hosted the 4th UN Small Island Developing States (SIDS4) Conference in May 2024."
    },
    "bb": {
        "name": "Barbados", "continent": "North America", "region": "Caribbean (Lesser Antilles)", "flag": "🇧🇧",
        "capital": "Bridgetown", "currency": "Barbadian Dollar (BBD)", "officialLanguage": "English",
        "borders": ["Island Nation (Easternmost island of the Lesser Antilles)"], "coastline": "97 km along the western Atlantic Ocean",
        "landmark": ("Historic Bridgetown & Garrison", "fa-landmark", "UNESCO-listed colonial port and Parliament Buildings (third-oldest parliament in the Americas, founded 1639)."),
        "strategic": "Transitioned from Commonwealth realm to parliamentary republic in Nov 2021; spearheaded the global 'Bridgetown Initiative' on climate finance reform."
    },
    "bh": {
        "name": "Bahrain", "continent": "Asia", "region": "Middle East (Persian Gulf)", "flag": "🇧🇭",
        "capital": "Manama", "currency": "Bahraini Dinar (BHD)", "officialLanguage": "Arabic",
        "borders": ["Island Kingdom (linked to Saudi Arabia via the 25-km King Fahd Causeway)"], "coastline": "Archipelago of 33+ natural islands in the Persian Gulf",
        "landmark": ("Qal'at al-Bahrain & Al-Fateh Grand Mosque", "fa-mosque", "Ancient Dilmun civilization UNESCO fort port and monumental fiberglass-domed grand mosque."),
        "strategic": "First Gulf state to discover oil (1932); GCC member; hosts the US Navy Fifth Fleet headquarters and possesses the world's second-highest-valued currency unit."
    },
    "fj": {
        "name": "Fiji", "continent": "Oceania", "region": "Melanesia (South Pacific)", "flag": "🇫🇯",
        "capital": "Suva", "currency": "Fijian Dollar (FJD)", "officialLanguage": "English, Fijian, Fiji Hindi",
        "borders": ["Island Archipelago (330+ volcanic and coral islands in the South Pacific)"], "coastline": "1,129 km across Viti Levu, Vanua Levu, and outer islands",
        "landmark": ("Levuka Historic Port Town & Sri Siva Subramaniya Temple", "fa-water", "Fiji's first colonial capital (UNESCO World Heritage Site) and vibrant Dravidian temple in Nadi."),
        "strategic": "Hub of the Pacific Islands Forum (PIF) Secretariat in Suva; crossed by the 180th Meridian."
    },
    "fm": {
        "name": "Micronesia", "continent": "Oceania", "region": "Micronesia (Western Pacific)", "flag": "🇫🇲",
        "capital": "Palikir", "currency": "United States Dollar (USD)", "officialLanguage": "English",
        "borders": ["Island Federation (607 islands across Yap, Chuuk, Pohnpei, and Kosrae)"], "coastline": "Sprawls across 2.6 million sq km of Pacific Ocean EEZ",
        "landmark": ("Nan Madol Ceremonial Ruins", "fa-monument", "UNESCO World Heritage 'Venice of the Pacific' built of basalt stone logs atop coral reefs in Pohnpei."),
        "strategic": "Maintains a Compact of Free Association (COFA) with the United States across strategic western Pacific sea lanes."
    },
    "gd": {
        "name": "Grenada", "continent": "North America", "region": "Caribbean (Windward Islands)", "flag": "🇬🇩",
        "capital": "St. George's", "currency": "East Caribbean Dollar (XCD)", "officialLanguage": "English",
        "borders": ["Island Nation (Southern Caribbean Sea north of Trinidad & Venezuela)"], "coastline": "121 km volcanic island coastline",
        "landmark": ("Fort George & Underwater Sculpture Park", "fa-fort-awesome", "18th-century French harbor fortress overlooking horseshoe-shaped Carenage harbor and the world's first underwater sculpture park."),
        "strategic": "Globally famous as the 'Island of Spice' for being one of the world's leading producers of nutmeg and mace."
    },
    "ki": {
        "name": "Kiribati", "continent": "Oceania", "region": "Micronesia / Polynesia (Central Pacific)", "flag": "🇰🇮",
        "capital": "South Tarawa", "currency": "Australian Dollar (AUD) / Kiribati Dollar", "officialLanguage": "English, Gilbertese",
        "borders": ["Island Republic (33 coral atolls straddling both the Equator and 180th Meridian)"], "coastline": "1,143 km across Gilbert, Phoenix, and Line Islands",
        "landmark": ("Phoenix Islands Protected Area (PIPA)", "fa-water", "One of Earth's largest UNESCO marine protected coral wildernesses; Kiritimati (Christmas Island) welcomes the New Year first."),
        "strategic": "The ONLY country in the world situated simultaneously in all four hemispheres (Northern, Southern, Eastern, and Western); frontline climate-vulnerable atoll nation."
    },
    "kn": {
        "name": "Saint Kitts and Nevis", "continent": "North America", "region": "Caribbean (Leeward Islands)", "flag": "🇰🇳",
        "capital": "Basseterre", "currency": "East Caribbean Dollar (XCD)", "officialLanguage": "English",
        "borders": ["Twin-Island Federation in the Eastern Caribbean"], "coastline": "135 km volcanic twin islands separated by 'The Narrows' strait",
        "landmark": ("Brimstone Hill Fortress National Park", "fa-fort-awesome", "UNESCO World Heritage 18th-century citadel known as the 'Gibraltar of the West Indies'."),
        "strategic": "Smallest sovereign state in the Western Hemisphere (Americas) in both land area (261 sq km) and population; pioneered citizenship-by-investment in 1984."
    },
    "li": {
        "name": "Liechtenstein", "continent": "Europe", "region": "Central / Western Europe (Alps)", "flag": "🇱🇮",
        "capital": "Vaduz", "currency": "Swiss Franc (CHF)", "officialLanguage": "German",
        "borders": ["Switzerland", "Austria"], "coastline": "Doubly landlocked Alpine principality along the Upper Rhine",
        "landmark": ("Vaduz Castle", "fa-chess-rook", "12th-century hilltop Alpine palace overlooking the capital, serving as official residence of the reigning Prince."),
        "strategic": "Along with Uzbekistan, one of the ONLY two doubly landlocked countries on Earth (surrounded exclusively by landlocked neighbors); member of EFTA and Schengen."
    },
    "mc": {
        "name": "Monaco", "continent": "Europe", "region": "Western Europe (French Riviera)", "flag": "🇲🇨",
        "capital": "Monaco", "currency": "Euro (EUR, €)", "officialLanguage": "French",
        "borders": ["France"], "coastline": "4.1 km along the Mediterranean Côte d'Azur",
        "landmark": ("Prince's Palace of Monaco & Monte Carlo Harbor", "fa-crown", "Genoese-founded Grimaldi royal fortress (since 1297) and iconic Formula 1 street circuit harbor."),
        "strategic": "World's second-smallest sovereign country by area (2.02 sq km, after Vatican City) and the most densely populated sovereign state on Earth."
    },
    "mh": {
        "name": "Marshall Islands", "continent": "Oceania", "region": "Micronesia (Central Pacific)", "flag": "🇲🇭",
        "capital": "Majuro", "currency": "United States Dollar (USD)", "officialLanguage": "Marshallese, English",
        "borders": ["Island Republic (29 coral atolls in two parallel chains: Ratak & Ralik)"], "coastline": "370 km of low-lying Pacific coral atolls",
        "landmark": ("Bikini Atoll UNESCO Historic Site", "fa-radiation", "UNESCO site preserving Cold War nuclear-test shipwrecks and symbolizing global nuclear disarmament advocacy."),
        "strategic": "World's second-largest maritime ship registry by tonnage; bound to the US via a Compact of Free Association (COFA)."
    },
    "nr": {
        "name": "Nauru", "continent": "Oceania", "region": "Micronesia (Central Pacific)", "flag": "🇳🇷",
        "capital": "Yaren (de facto government district)", "currency": "Australian Dollar (AUD)", "officialLanguage": "Nauruan, English",
        "borders": ["Single raised coral island just south of the Equator"], "coastline": "30 km oval island ringed by a fringing coral reef",
        "landmark": ("Command Ridge & Buada Lagoon", "fa-mountain", "Lush freshwater interior lagoon surrounded by historic phosphate-mined coral pinnacles."),
        "strategic": "World's smallest island nation and third-smallest country overall (21 sq km); uniquely has NO official de jure capital city (parliament sits in Yaren)."
    },
    "ps": {
        "name": "Palestine", "continent": "Asia", "region": "Middle East / Levant", "flag": "🇵🇸",
        "capital": "East Jerusalem (proclaimed) / Ramallah (administrative)", "currency": "Jordanian Dinar / Israeli New Shekel", "officialLanguage": "Arabic",
        "borders": ["Jordan", "Egypt", "Israel"], "coastline": "40 km Mediterranean Sea coast along the Gaza Strip",
        "landmark": ("Al-Aqsa Mosque Compound & Church of the Nativity (Bethlehem)", "fa-mosque", "Islam's third holiest sanctuary (Al-Haram al-Sharif) in Old Jerusalem and UNESCO World Heritage birthplace site in Bethlehem."),
        "strategic": "UN Non-Member Observer State (UNGA Res 67/19, Nov 2012) recognized as a sovereign state by over 145 UN member countries; member of OIC, Arab League, and ICC."
    },
    "pw": {
        "name": "Palau", "continent": "Oceania", "region": "Micronesia (Western Pacific)", "flag": "🇵🇼",
        "capital": "Ngerulmud", "currency": "United States Dollar (USD)", "officialLanguage": "Palauan, English",
        "borders": ["Island Archipelago (~340 volcanic & limestone islands southeast of the Philippines)"], "coastline": "1,519 km in the western Pacific Ocean",
        "landmark": ("Rock Islands Southern Lagoon & Jellyfish Lake", "fa-water", "UNESCO World Heritage seascape of 445 uninhabited mushroom-shaped limestone islands."),
        "strategic": "Its capital Ngerulmud (on Babeldaob island) is the least populous national capital in the world; created the world's first shark sanctuary in 2009."
    },
    "sm": {
        "name": "San Marino", "continent": "Europe", "region": "Southern Europe (Italian Peninsula)", "flag": "🇸🇲",
        "capital": "City of San Marino", "currency": "Euro (EUR, €)", "officialLanguage": "Italian",
        "borders": ["Italy"], "coastline": "Landlocked enclave entirely surrounded by Italy near the Adriatic",
        "landmark": ("Three Towers of San Marino (Mount Titano)", "fa-chess-rook", "UNESCO World Heritage medieval citadels (Guaita, Cesta, Montale) crowning the three peaks of Mount Titano."),
        "strategic": "Claims to be the world's oldest surviving constitutional republic (founded AD 301 by Saint Marinus); governed by two Captains Regent elected every six months."
    },
    "tl": {
        "name": "Timor-Leste", "continent": "Asia", "region": "Southeast Asia", "flag": "🇹🇱",
        "capital": "Dili", "currency": "United States Dollar (USD)", "officialLanguage": "Portuguese, Tetum",
        "borders": ["Indonesia"], "coastline": "706 km occupying the eastern half of Timor island north of Australia",
        "landmark": ("Cristo Rei of Dili & Mount Ramelau", "fa-mountain", "27-meter coastal hilltop statue overlooking Dili Bay and the mist-shrouded 2,986m Tatamailau summit."),
        "strategic": "Restored independence on May 20, 2002 (first new sovereign state of the 21st century); acceded as the 166th member of the WTO in 2024 and advancing into ASEAN."
    },
    "tn": {
        "name": "Tunisia", "continent": "Africa", "region": "North Africa (Maghreb)", "flag": "🇹🇳",
        "capital": "Tunis", "currency": "Tunisian Dinar (TND)", "officialLanguage": "Arabic",
        "borders": ["Algeria", "Libya"], "coastline": "1,148 km along the central Mediterranean Sea near Sicily",
        "landmark": ("Ancient Ruins of Carthage & Amphitheatre of El Jem", "fa-columns", "UNESCO Phoenician-Punic imperial port ruins near Tunis and massive 3rd-century Roman colosseum."),
        "strategic": "Northernmost country on the African continent (Ras Angela); historical heartland of ancient Carthage; member of the UN, Arab League, OIC, and African Union."
    },
    "to": {
        "name": "Tonga", "continent": "Oceania", "region": "Polynesia (South Pacific)", "flag": "🇹🇴",
        "capital": "Nuku'alofa", "currency": "Tongan Pa'anga (TOP)", "officialLanguage": "Tongan, English",
        "borders": ["Island Kingdom (170+ islands just west of the International Date Line)"], "coastline": "419 km across Tongatapu, Vava'u, and Ha'apai groups",
        "landmark": ("Ha'amonga 'a Maui Trilithon", "fa-monument", "13th-century coral-limestone 'Stonehenge of the Pacific' gateway built on Tongatapu."),
        "strategic": "Known historically as the 'Friendly Islands'; the ONLY Pacific island nation that never formally lost its indigenous monarchy sovereignty to European colonization."
    },
    "tv": {
        "name": "Tuvalu", "continent": "Oceania", "region": "Polynesia (Central Pacific)", "flag": "🇹🇻",
        "capital": "Funafuti", "currency": "Tuvaluan Dollar / Australian Dollar (AUD)", "officialLanguage": "Tuvaluan, English",
        "borders": ["Island Nation (9 low-lying coral atolls midway between Hawaii and Australia)"], "coastline": "24 km; maximum elevation barely 4.6 meters above sea level",
        "landmark": ("Funafuti Conservation Area Lagoon", "fa-water", "Protected coral reef lagoon ecosystem spanning 33 sq km on the western rim of Funafuti Atoll."),
        "strategic": "Signed the landmark 2023 Falepili Union treaty with Australia offering climate mobility residency; earns substantial national revenue licensing its '.tv' internet domain."
    },
    "va": {
        "name": "Vatican City", "continent": "Europe", "region": "Southern Europe (Enclave in Rome)", "flag": "🇻🇦",
        "capital": "Vatican City", "currency": "Euro (EUR, €)", "officialLanguage": "Italian, Latin",
        "borders": ["Italy"], "coastline": "Walled landlocked enclave inside the city of Rome",
        "landmark": ("St. Peter's Basilica & Sistine Chapel", "fa-church", "Renaissance masterpiece featuring Michelangelo's dome and Sistine Chapel ceiling frescoes."),
        "strategic": "World's smallest independent sovereign state by both area (0.49 sq km / 49 hectares) and population; established via the 1929 Lateran Treaty; UN Observer State (Holy See)."
    },
    "ws": {
        "name": "Samoa", "continent": "Oceania", "region": "Polynesia (South Pacific)", "flag": "🇼🇸",
        "capital": "Apia", "currency": "Samoan Tālā (WST)", "officialLanguage": "Samoan, English",
        "borders": ["Island Nation (Upolu, Savai'i, and smaller volcanic islands in Polynesia)"], "coastline": "403 km in the central South Pacific",
        "landmark": ("To Sua Ocean Trench & Robert Louis Stevenson Museum", "fa-water", "30-meter-deep emerald volcanic swimming sinkhole on Upolu and historic Villa Vailima in Apia."),
        "strategic": "First Pacific island nation to gain independence (1962 from New Zealand); shifted west across the International Date Line in 2011; hosted CHOGM 2024 in Apia."
    }
}

# Curated iconic landmarks for major/regional countries in WORLD_COUNTRIES_DATA (fallback builds clean capital/heritage landmark)
CURATED_LANDMARKS = {
    "af": ("Blue Mosque of Mazar-i-Sharif & Band-e-Amir Lakes", "fa-mosque", "15th-century turquoise-tiled shrine and six travertine-dammed cobalt mountain lakes in Bamyan."),
    "bd": ("Sundarbans Mangrove Forest & Shaheed Minar", "fa-tree", "World's largest littoral mangrove forest (home to the Royal Bengal Tiger) and Dhaka's iconic Language Movement monument."),
    "lk": ("Sigiriya Lion Rock Fortress & Temple of the Tooth", "fa-mountain", "5th-century ancient palace citadel atop a 200-meter volcanic rock column in central Sri Lanka."),
    "np": ("Mount Everest (Sagarmatha) & Pashupatinath", "fa-mountain", "Earth's highest peak at 8,848.86 meters straddling the Himalayan crest and Kathmandu's UNESCO stupas."),
    "bt": ("Paro Taktsang (Tiger's Nest Monastery)", "fa-vihara", "Sacred 17th-century Himalayan Buddhist monastery clinging dramatically to a 900-meter cliffside."),
    "mv": ("Malé Friday Mosque & Baa Atoll Biosphere", "fa-water", "17th-century intricately carved coral-stone mosque and UNESCO marine manta-ray biosphere reserve."),
    "ir": ("Persepolis & Naqsh-e Jahan Square (Isfahan)", "fa-monument", "Ceremonial capital of the ancient Achaemenid Empire (515 BC) and Safavid architectural jewel."),
    "iq": ("Babylon Ruins & Great Ziggurat of Ur", "fa-monument", "Mesopotamian cradle-of-civilization monuments situated between the Tigris and Euphrates rivers."),
    "qa": ("Museum of Islamic Art & Lusail Iconic Stadium", "fa-landmark", "I.M. Pei's limestone architectural gem on Doha's Corniche and venue of the 2022 FIFA World Cup Final."),
    "kw": ("Kuwait Towers", "fa-tower-observation", "Trio of slender modernist concrete towers overlooking the Persian Gulf, inaugurated in 1979."),
    "om": ("Sultan Qaboos Grand Mosque & Nizwa Fort", "fa-mosque", "Monumental sandstone mosque in Muscat and 17th-century cylindrical Yaruba fortress."),
    "jo": ("Ancient Rose-Red City of Petra", "fa-monument", "Nabataean archaeological wonder carved directly into rose-colored sandstone cliffs (New7Wonders)."),
    "sy": ("Umayyad Mosque of Damascus & Palmyra", "fa-mosque", "8th-century architectural masterpiece in one of the world's oldest continuously inhabited capitals."),
    "lb": ("Baalbek Roman Temples & Pigeon Rocks (Raouché)", "fa-columns", "Colossal Roman temple complex of Jupiter and Bacchus in the Bekaa Valley."),
    "ye": ("Old Walled City of Sana'a & Socotra Dragon's Blood Trees", "fa-city", "UNESCO multi-story rammed-earth tower houses and Socotra's alien-like endemic flora."),
    "kz": ("Bayterek Tower (Astana) & Charyn Canyon", "fa-tower-observation", "97-meter futuristic monument symbolizing the Kazakh myth of Samruk in the planned capital."),
    "uz": ("Registan Square (Samarkand)", "fa-mosque", "Timurid Silk Road heartland framed by three mosaic-covered madrasahs (Ulugh Beg, Sher-Dor, Tilya-Kori)."),
    "tm": ("Darvaza Gas Crater & Ancient Merv", "fa-fire", "Fiery Karakum Desert natural-gas cavern ('Door to Hell') and UNESCO Silk Road oasis ruins."),
    "kg": ("Issyk-Kul Alpine Lake & Burana Tower", "fa-water", "World's second-largest high-altitude alpine lake (never freezes) in the Tian Shan mountains."),
    "tj": ("Pamir Highway & Iskanderkul Lake", "fa-mountain", "High-altitude 'Roof of the World' mountain road and glacial turquoise lake named after Alexander the Great."),
    "az": ("Flame Towers & Walled City of Baku (Icherisheher)", "fa-fire", "Trio of flame-shaped skyscrapers overlooking the Caspian Sea and medieval Shirvanshahs' Palace."),
    "am": ("Mount Ararat Vista (Khor Virap) & Geghard Monastery", "fa-church", "UNESCO medieval monastery partially carved out of solid mountain rock."),
    "ge": ("Narikala Fortress & Gergeti Trinity Church", "fa-chess-rook", "Ancient citadel overlooking Tbilisi's sulfur-bath district and iconic Caucasus mountain church."),
    "my": ("Petronas Twin Towers (Kuala Lumpur)", "fa-building", "451.9-meter twin skyscrapers linked by a double-deck skybridge—the tallest twin towers on Earth."),
    "id": ("Borobudur Temple & Komodo National Park", "fa-vihara", "9th-century Mahayana Buddhist monument (world's largest) in Central Java."),
    "th": ("Grand Palace & Wat Arun (Bangkok)", "fa-vihara", "18th-century royal complex on the Chao Phraya River housing the Emerald Buddha."),
    "vn": ("Ha Long Bay & Hoi An Ancient Town", "fa-water", "UNESCO seascape of nearly 2,000 towering limestone karsts rising from emerald Gulf of Tonkin waters."),
    "kh": ("Angkor Wat Temple Complex", "fa-gopuram", "12th-century Khmer Empire masterpiece—the largest religious monument in the world, depicted on the national flag."),
    "ph": ("Banaue Rice Terraces & Intramuros", "fa-mountain", "2,000-year-old Ifugao Cordillera mountain terraces and historic walled district of Manila."),
    "mm": ("Bagan Archaeological Zone & Shwedagon Pagoda", "fa-vihara", "Sacred gilded 99-meter stupa in Yangon and plains of over 2,000 ancient Buddhist temples."),
    "mn": ("Genghis Khan Equestrian Statue & Gobi Desert", "fa-horse", "40-meter stainless-steel statue on the banks of the Tuul River east of Ulaanbaatar."),
    "kp": ("Juche Tower & Mount Paektu Heaven Lake", "fa-monument", "170-meter granite monument in Pyongyang and sacred volcanic crater lake on the northern border."),
    "ua": ("Saint Sophia Cathedral & Independence Square (Kyiv)", "fa-church", "11th-century golden-domed UNESCO cathedral overlooking the Dnipro River."),
    "pl": ("Wawel Royal Castle (Kraków) & Warsaw Old Town", "fa-chess-rook", "UNESCO historic royal residence and meticulously reconstructed WWII-era capital plaza."),
    "at": ("Schönbrunn Palace & Vienna State Opera", "fa-landmark", "1,441-room Baroque imperial summer residence of the Habsburg monarchs."),
    "be": ("Grand-Place & Atomium (Brussels)", "fa-atom", "Opulent 17th-century guildhalls square and 102-meter stainless-steel iron-crystal monument."),
    "cz": ("Charles Bridge & Prague Castle", "fa-chess-rook", "14th-century Gothic stone bridge spanning the Vltava beneath the world's largest ancient castle complex."),
    "hu": ("Hungarian Parliament Building (Budapest)", "fa-landmark", "Neo-Gothic architectural icon stretching along the Danube River connecting Buda and Pest."),
    "pt": ("Belém Tower & Jerónimos Monastery", "fa-chess-rook", "16th-century Manueline maritime fortress marking Portugal's Age of Discovery along the Tagus estuary."),
    "ie": ("Cliffs of Moher & Trinity College Long Room", "fa-mountain", "214-meter rugged Atlantic sea cliffs and Dublin's historic library housing the Book of Kells."),
    "dk": ("Nyhavn Harbor & Little Mermaid Statue", "fa-anchor", "17th-century colorful waterfront canal in Copenhagen and Hans Christian Andersen tribute."),
    "fi": ("Suomenlinna Sea Fortress & Lapland Aurora", "fa-snowflake", "18th-century UNESCO island fortress guarding Helsinki across the 'Land of a Thousand Lakes'."),
    "is": ("Blue Lagoon, Gullfoss & Thingvellir Rift", "fa-fire", "Mid-Atlantic tectonic rift valley hosting the site of the world's oldest parliament (Althing, AD 930)."),
    "ro": ("Bran Castle & Palace of the Parliament", "fa-chess-rook", "Carpathian hilltop fortress in Transylvania and Bucharest's colossal administrative building (heaviest in the world)."),
    "hr": (" Historic Old City of Dubrovnik & Plitvice Lakes", "fa-water", "Medieval walled 'Pearl of the Adriatic' and cascading travertine turquoise lakes."),
    "ma": ("Hassan II Mosque & Jemaa el-Fnaa (Marrakesh)", "fa-mosque", "Casablanca's Atlantic-edge mosque featuring a 210m minaret and Marrakesh's UNESCO medina."),
    "dz": ("Casbah of Algiers & Timgad Roman Ruins", "fa-landmark", "UNESCO whitewashed citadel climbing above the Mediterranean Bay of Algiers."),
    "tn": ("Amphitheatre of El Jem & Ruins of Carthage", "fa-columns", "Massive 3rd-century Roman colosseum and ancient Phoenician-Punic imperial port."),
    "et": ("Rock-Hewn Churches of Lalibela", "fa-church", "Eleven medieval monolithic churches carved downward out of solid red volcanic rock."),
    "tz": ("Mount Kilimanjaro & Serengeti National Park", "fa-paw", "Africa's highest peak (5,895m) and site of the great annual wildebeest migration."),
    "gh": ("Cape Coast Castle & Black Star Gate", "fa-monument", "Independence Arch in Accra symbolizing Sub-Saharan Africa's pioneering 1957 decolonization."),
    "sn": ("Island of Gorée & African Renaissance Monument", "fa-monument", "UNESCO Atlantic memorial island off Dakar, the westernmost point of mainland Africa."),
    "pe": ("Machu Picchu Sanctuary", "fa-mountain", "15th-century Inca citadel perched high in the Andes Mountains (New7Wonders of the World)."),
    "cl": ("Torres del Paine & Easter Island Moai", "fa-monument", "Granite Patagonian spires and monolithic Polynesian stone statues of Rapa Nui."),
    "co": ("Walled City of Cartagena & Salt Cathedral of Zipaquirá", "fa-church", "Underground cathedral carved 200 meters deep inside a halite mountain salt mine."),
    "ve": ("Angel Falls (Canaima National Park)", "fa-water", "World's highest uninterrupted waterfall (979 meters) plunging from Auyán-tepui tabletop mountain."),
    "cu": ("Old Havana (La Habana Vieja) & El Capitolio", "fa-landmark", "UNESCO Spanish Baroque Caribbean port plaza famed for classic architecture and music."),
    "pa": ("Panama Canal (Miraflores & Agua Clara Locks)", "fa-ship", "82-km engineering marvel lifting ocean vessels 26 meters over the Continental Divide between Atlantic and Pacific.")
}


def mask_country_name(text: str, name: str) -> str:
    """Replace explicit mentions of the country's name (and obvious demonym stems) so clues don't spoil the answer."""
    if not text:
        return ""
    pattern = re.compile(re.escape(name), flags=re.IGNORECASE)
    masked = pattern.sub("this country", text)
    # Also mask common adjectives like Pakistani, Indian, Chinese, etc. if prefix >= 5 chars
    stem = re.sub(r"(ia|land|stan|a|e|i|y)$", "", name, flags=re.IGNORECASE)
    if len(stem) >= 5:
        masked = re.sub(rf"\b{re.escape(stem)}[a-z]*\b", "national", masked, flags=re.IGNORECASE)
    return masked


def load_js_data():
    gc_code = GUESS_JS.read_text(encoding="utf-8") + "\nconsole.log(JSON.stringify(GUESS_COUNTRY_DATA));"
    gc_res = subprocess.run(["node", "-"], input=gc_code, capture_output=True, text=True, encoding="utf-8", check=True)
    existing_gc = json.loads(gc_res.stdout)

    wc_code = "global.window={};\n" + WORLD_JS.read_text(encoding="utf-8") + "\nconsole.log(JSON.stringify(window.WORLD_COUNTRIES_DATA));"
    wc_res = subprocess.run(["node", "-"], input=wc_code, capture_output=True, text=True, encoding="utf-8", check=True)
    wc_data = json.loads(wc_res.stdout)
    return existing_gc, wc_data


def build_entry_from_wc(iso_id: str, wc: dict) -> dict:
    name = wc["name"]
    continent = wc.get("continent", "World")
    region = wc.get("region", continent)
    flag = wc.get("flag", "🏳️")
    capital = wc.get("capital", "N/A")
    currency_clean = mask_country_name(wc.get("currency", "Local Currency"), name)
    raw_currency = wc.get("currency", "Local Currency")
    lang = mask_country_name(wc.get("officialLanguage", "Official national language"), name)
    pol = mask_country_name(wc.get("politicalSystem", "Sovereign Republic"), name)
    pop = wc.get("population", "")
    orgs = wc.get("internationalOrgs") or ["UN"]
    strat_raw = wc.get("strategicSignificance", "")
    strat_masked = mask_country_name(strat_raw, name)

    neigh_raw = wc.get("neighbouringCountries") or []
    borders = [n["name"] if isinstance(n, dict) else str(n) for n in neigh_raw]
    is_island_or_none = (len(borders) == 0)
    if is_island_or_none:
        borders_display = ["Island / Maritime Nation (No Land Borders)"]
        shape_desc = f"An island or maritime nation situated in {region} ({continent}) surrounded by open sea lanes."
        coast_desc = f"Maritime coastline in {region}"
    else:
        borders_display = borders
        shape_desc = f"Located in {region} ({continent}), sharing land frontiers with {len(borders)} neighboring {'country' if len(borders)==1 else 'countries'}."
        coast_desc = f"Borders {', '.join(borders[:4])}"

    if iso_id in CURATED_LANDMARKS:
        lm_name, lm_icon, lm_desc = CURATED_LANDMARKS[iso_id]
        lm_name = mask_country_name(lm_name, name)
        lm_desc = mask_country_name(lm_desc, name)
    else:
        lm_name = f"Historic Capital District of {capital}"
        lm_icon = "fa-landmark"
        lm_desc = f"Seat of government ({pol}) and premier national cultural monuments in {region}."

    clue1 = strat_masked if len(strat_masked) > 25 else f"A sovereign state in {region} ({continent}) with a population of {pop} and member of {', '.join(orgs[:5])}."
    clue2 = (
        f"Governed as a {pol}; official language(s): {lang}; active member of {', '.join(orgs[:5])}."
    )
    clue3 = f"Its national capital city is {capital} (Population: {pop})."
    clue4 = f"Located in {region}; official currency: {raw_currency}."

    return {
        "id": iso_id,
        "name": name,
        "continent": continent,
        "region": region,
        "flag": flag,
        "capital": capital,
        "currency": raw_currency,
        "landmark": {
            "name": lm_name,
            "icon": lm_icon,
            "desc": lm_desc,
        },
        "mapOutline": {
            "shape": shape_desc,
            "borders": borders_display,
            "coastline": coast_desc,
        },
        "clues": [clue1, clue2, clue3, clue4],
        "funFact": f"Official title: {wc.get('officialName', name)} • Population: {pop} • Language: {wc.get('officialLanguage', 'N/A')}.",
        "examPoints": strat_raw or f"Capital: {capital} | Currency: {raw_currency} | Organizations: {', '.join(orgs)}.",
    }


def build_entry_from_extra(iso_id: str, info: dict) -> dict:
    name = info["name"]
    lm_name, lm_icon, lm_desc = info["landmark"]
    strat_masked = mask_country_name(info["strategic"], name)
    return {
        "id": iso_id,
        "name": name,
        "continent": info["continent"],
        "region": info["region"],
        "flag": info["flag"],
        "capital": info["capital"],
        "currency": info["currency"],
        "landmark": {
            "name": mask_country_name(lm_name, name),
            "icon": lm_icon,
            "desc": mask_country_name(lm_desc, name),
        },
        "mapOutline": {
            "shape": f"{info['coastline']} in {info['region']} ({info['continent']}).",
            "borders": info["borders"],
            "coastline": info["coastline"],
        },
        "clues": [
            strat_masked,
            mask_country_name(lm_desc, name),
            f"Its capital is {info['capital']} and official language(s): {info['officialLanguage']}.",
            f"Situated in {info['region']} using {info['currency']}.",
        ],
        "funFact": lm_desc,
        "examPoints": info["strategic"],
    }


def main():
    existing_gc, wc_data = load_js_data()
    # Keep first 40 rich hand-crafted entries by ID (idempotent)
    by_id = {}
    for entry in existing_gc[:40]:
        by_id[entry["id"]] = entry

    # Add the extra/override UN sovereign states first so overrides (like tn) win
    for iso_id, info in sorted(EXTRA_UN_STATES.items()):
        if iso_id not in by_id:
            by_id[iso_id] = build_entry_from_extra(iso_id, info)

    # Add all sovereign states from WORLD_COUNTRIES_DATA
    for iso_id, wc in sorted(wc_data.items()):
        if iso_id in EXCLUDE_TERRITORIES or iso_id in by_id:
            continue
        by_id[iso_id] = build_entry_from_wc(iso_id, wc)

    # Normalize 'Americas' continent into 'North America' vs 'South America'
    for entry in by_id.values():
        if entry["continent"] == "Americas":
            entry["continent"] = "South America" if "South" in entry.get("region", "") else "North America"

    # Sort: keep Pakistan first, then alphabetical by country name for clean organization
    pk = by_id.pop("pk")
    final_list = [pk] + sorted(by_id.values(), key=lambda x: x["name"])

    header = (
        "/**\n"
        " * CSS PREP CENTRAL - GUESS THE COUNTRY GAME DATASET (ALL 195 SOVEREIGN COUNTRIES)\n"
        " * Complete World Geography Identification Engine for CSS, PMS, FPSC, PPSC & GK Aspirants.\n"
        f" * Total Countries: {len(final_list)} (193 UN Member States + 2 UN Observer States: Palestine & Vatican City)\n"
        " */\n\n"
        "const GUESS_COUNTRY_DATA = "
    )
    js_body = json.dumps(final_list, ensure_ascii=False, indent=2)
    tail = (
        ";\n\n"
        "if (typeof window !== 'undefined') {\n"
        "  window.GUESS_COUNTRY_DATA = GUESS_COUNTRY_DATA;\n"
        "}\n"
    )
    GUESS_JS.write_text(header + js_body + tail, encoding="utf-8")

    from collections import Counter
    conts = Counter(c["continent"] for c in final_list)
    print(f"Successfully generated {len(final_list)} sovereign world countries in data_guess_country.js!")
    print("Continent breakdown:", dict(conts))


if __name__ == "__main__":
    main()
