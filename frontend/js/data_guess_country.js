/**
 * CSS PREP CENTRAL - GUESS THE COUNTRY GAME DATASET (ALL 195 SOVEREIGN COUNTRIES)
 * Complete World Geography Identification Engine for CSS, PMS, FPSC, PPSC & GK Aspirants.
 * Total Countries: 195 (193 UN Member States + 2 UN Observer States: Palestine & Vatican City)
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
    "id": "af",
    "name": "Afghanistan",
    "continent": "Asia",
    "region": "South / Central Asia",
    "flag": "🇦🇫",
    "capital": "Kabul",
    "currency": "Afghan Afghani (AFN, ؋)",
    "landmark": {
      "name": "Blue Mosque of Mazar-i-Sharif & Band-e-Amir Lakes",
      "icon": "fa-mosque",
      "desc": "15th-century turquoise-tiled shrine and six travertine-dammed cobalt mountain lakes in Bamyan."
    },
    "mapOutline": {
      "shape": "Located in South / Central Asia (Asia), sharing land frontiers with 6 neighboring countries.",
      "borders": [
        "Pakistan",
        "Iran",
        "Turkmenistan",
        "Uzbekistan",
        "Tajikistan",
        "China"
      ],
      "coastline": "Borders Pakistan, Iran, Turkmenistan, Uzbekistan"
    },
    "clues": [
      "Crossroads of Central & South Asia; mineral wealth (lithium, rare earths); key transit route for TAPI and CASA-1000.",
      "Governed as a Unitary Theocracy / Islamic Emirate; official language(s): Pashto & Dari; active member of UN, SAARC, ECO, OIC.",
      "Its national capital city is Kabul (Population: 42.2 Million).",
      "Located in South / Central Asia; official currency: Afghan Afghani (AFN, ؋)."
    ],
    "funFact": "Official title: Islamic Emirate of Afghanistan • Population: 42.2 Million • Language: Pashto & Dari.",
    "examPoints": "Crossroads of Central & South Asia; mineral wealth (lithium, rare earths); key transit route for TAPI and CASA-1000."
  },
  {
    "id": "al",
    "name": "Albania",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Tirana",
    "currency": "Albanian Lek (ALL)",
    "landmark": {
      "name": "Historic Capital District of Tirana",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryn; active member of UN, NATO, OIC.",
      "Its national capital city is Tirana (Population: 2.7 M).",
      "Located in Europe; official currency: Albanian Lek (ALL)."
    ],
    "funFact": "Official title: Albania • Population: 2.7 M • Language: Albanian.",
    "examPoints": "Albania is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "dz",
    "name": "Algeria",
    "continent": "Africa",
    "region": "North Africa",
    "flag": "🇩🇿",
    "capital": "Algiers",
    "currency": "Algerian Dinar (DZD, د.ج)",
    "landmark": {
      "name": "Casbah of Algiers & Timgad Roman Ruins",
      "icon": "fa-landmark",
      "desc": "UNESCO whitewashed citadel climbing above the Mediterranean Bay of Algiers."
    },
    "mapOutline": {
      "shape": "Located in North Africa (Africa), sharing land frontiers with 6 neighboring countries.",
      "borders": [
        "Tunisia",
        "Libya",
        "Niger",
        "Mali",
        "Mauritania",
        "Morocco"
      ],
      "coastline": "Borders Tunisia, Libya, Niger, Mali"
    },
    "clues": [
      "Largest country in Africa by land area (2.38M km²); crucial natural gas supplier to southern Europe (Italy, Spain).",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Arabic & Berber (Tamazight); active member of UN, OPEC, African Union, Arab League, OIC.",
      "Its national capital city is Algiers (Population: 45.6 Million).",
      "Located in North Africa; official currency: Algerian Dinar (DZD, د.ج)."
    ],
    "funFact": "Official title: People's Democratic Republic of Algeria • Population: 45.6 Million • Language: Arabic & Berber (Tamazight).",
    "examPoints": "Largest country in Africa by land area (2.38M km²); crucial natural gas supplier to southern Europe (Italy, Spain)."
  },
  {
    "id": "ad",
    "name": "Andorra",
    "continent": "Europe",
    "region": "Southern Europe (Pyrenees)",
    "flag": "🇦🇩",
    "capital": "Andorra la Vella",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Madriu-Perafita-Claror Valley & Casa de la Vall",
      "icon": "fa-mountain",
      "desc": "UNESCO glacial mountain valley and historic 1580 stone parliament house in Europe's highest capital city (1,023m)."
    },
    "mapOutline": {
      "shape": "Landlocked microstate in the eastern Pyrenees mountains in Southern Europe (Pyrenees) (Europe).",
      "borders": [
        "France",
        "Spain"
      ],
      "coastline": "Landlocked microstate in the eastern Pyrenees mountains"
    },
    "clues": [
      "Governed under a unique 1278 Paréage co-principality shared jointly by the President of France and the Bishop of Urgell (Spain).",
      "UNESCO glacial mountain valley and historic 1580 stone parliament house in Europe's highest capital city (1,023m).",
      "Its capital is Andorra la Vella and official language(s): Catalan.",
      "Situated in Southern Europe (Pyrenees) using Euro (EUR, €)."
    ],
    "funFact": "UNESCO glacial mountain valley and historic 1580 stone parliament house in Europe's highest capital city (1,023m).",
    "examPoints": "Governed under a unique 1278 Paréage co-principality shared jointly by the President of France and the Bishop of Urgell (Spain)."
  },
  {
    "id": "ao",
    "name": "Angola",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Luanda",
    "currency": "Angolan Kwanza (AOA)",
    "landmark": {
      "name": "Historic Capital District of Luanda",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): Portuguese; active member of UN, AU, SADC.",
      "Its national capital city is Luanda (Population: 36 M).",
      "Located in Africa; official currency: Angolan Kwanza (AOA)."
    ],
    "funFact": "Official title: Angola • Population: 36 M • Language: Portuguese.",
    "examPoints": "Angola is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "ag",
    "name": "Antigua and Barbuda",
    "continent": "North America",
    "region": "Caribbean (Leeward Islands)",
    "flag": "🇦🇬",
    "capital": "St. John's",
    "currency": "East Caribbean Dollar (XCD)",
    "landmark": {
      "name": "Nelson's Dockyard (English Harbour)",
      "icon": "fa-anchor",
      "desc": "UNESCO World Heritage Georgian-era British Royal Navy dockyard sheltered inside a volcanic bay."
    },
    "mapOutline": {
      "shape": "Twin-island archipelago famed for 365 beaches in Caribbean (Leeward Islands) (North America).",
      "borders": [
        "Island Nation (Caribbean Sea & Atlantic Ocean)"
      ],
      "coastline": "Twin-island archipelago famed for 365 beaches"
    },
    "clues": [
      "Member of CARICOM, Commonwealth, and OAS; hosted the 4th UN Small Island Developing States (SIDS4) Conference in May 2024.",
      "UNESCO World Heritage Georgian-era British Royal Navy dockyard sheltered inside a volcanic bay.",
      "Its capital is St. John's and official language(s): English.",
      "Situated in Caribbean (Leeward Islands) using East Caribbean Dollar (XCD)."
    ],
    "funFact": "UNESCO World Heritage Georgian-era British Royal Navy dockyard sheltered inside a volcanic bay.",
    "examPoints": "Member of CARICOM, Commonwealth, and OAS; hosted the 4th UN Small Island Developing States (SIDS4) Conference in May 2024."
  },
  {
    "id": "ar",
    "name": "Argentina",
    "continent": "South America",
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
    "id": "am",
    "name": "Armenia",
    "continent": "Asia",
    "region": "Asia",
    "flag": "🌐",
    "capital": "Yerevan",
    "currency": "Armenian Dram (AMD)",
    "landmark": {
      "name": "Mount Ararat Vista (Khor Virap) & Geghard Monastery",
      "icon": "fa-church",
      "desc": "UNESCO medieval monastery partially carved out of solid mountain rock."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Asia (Asia) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Asia"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Asia.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryn; active member of UN, CSTO, EAEU.",
      "Its national capital city is Yerevan (Population: 2.8 M).",
      "Located in Asia; official currency: Armenian Dram (AMD)."
    ],
    "funFact": "Official title: Armenia • Population: 2.8 M • Language: Armenian.",
    "examPoints": "Armenia is an internationally recognized sovereign state situated in Asia."
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
    "id": "at",
    "name": "Austria",
    "continent": "Europe",
    "region": "Central Europe",
    "flag": "🇦🇹",
    "capital": "Vienna",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Schönbrunn Palace & Vienna State Opera",
      "icon": "fa-landmark",
      "desc": "1,441-room Baroque imperial summer residence of the Habsburg monarchs."
    },
    "mapOutline": {
      "shape": "Located in Central Europe (Europe), sharing land frontiers with 7 neighboring countries.",
      "borders": [
        "Germany",
        "Czechia",
        "Slovakia",
        "Hungary",
        "Slovenia",
        "Italy",
        "Switzerland"
      ],
      "coastline": "Borders Germany, Czechia, Slovakia, Hungary"
    },
    "clues": [
      "Constitutional neutrality; Vienna hosts International Atomic Energy Agency (IAEA) and OPEC secretariat.",
      "Governed as a Federal Parliamentary Republic; official language(s): German; active member of UN (Vienna Office), EU, IAEA (HQ in Vienna), OPEC (HQ in Vienna), OSCE.",
      "Its national capital city is Vienna (Population: 9.1 Million).",
      "Located in Central Europe; official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: Republic of Austria • Population: 9.1 Million • Language: German.",
    "examPoints": "Constitutional neutrality; Vienna hosts International Atomic Energy Agency (IAEA) and OPEC secretariat."
  },
  {
    "id": "az",
    "name": "Azerbaijan",
    "continent": "Asia",
    "region": "Asia",
    "flag": "🌐",
    "capital": "Baku",
    "currency": "Azerbaijani Manat (AZN)",
    "landmark": {
      "name": "Flame Towers & Walled City of Baku (Icherisheher)",
      "icon": "fa-fire",
      "desc": "Trio of flame-shaped skyscrapers overlooking the Caspian Sea and medieval Shirvanshahs' Palace."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Asia (Asia) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Asia"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Asia.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): this countryi; active member of UN, OIC, ECO, Turkic Council, NAM.",
      "Its national capital city is Baku (Population: 10.4 M).",
      "Located in Asia; official currency: Azerbaijani Manat (AZN)."
    ],
    "funFact": "Official title: Azerbaijan • Population: 10.4 M • Language: Azerbaijani.",
    "examPoints": "Azerbaijan is an internationally recognized sovereign state situated in Asia."
  },
  {
    "id": "bs",
    "name": "Bahamas",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Nassau",
    "currency": "Bahamian Dollar",
    "landmark": {
      "name": "Historic Capital District of Nassau",
      "icon": "fa-landmark",
      "desc": "Seat of government (Parliamentary Constitutional Monarchy) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Parliamentary Constitutional Monarchy; official language(s): English; active member of UN, Commonwealth, CARICOM.",
      "Its national capital city is Nassau (Population: 410,000).",
      "Located in North America; official currency: Bahamian Dollar."
    ],
    "funFact": "Official title: Bahamas • Population: 410,000 • Language: English.",
    "examPoints": "Bahamas is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "bh",
    "name": "Bahrain",
    "continent": "Asia",
    "region": "Middle East (Persian Gulf)",
    "flag": "🇧🇭",
    "capital": "Manama",
    "currency": "Bahraini Dinar (BHD)",
    "landmark": {
      "name": "Qal'at al-this country & Al-Fateh Grand Mosque",
      "icon": "fa-mosque",
      "desc": "Ancient Dilmun civilization UNESCO fort port and monumental fiberglass-domed grand mosque."
    },
    "mapOutline": {
      "shape": "Archipelago of 33+ natural islands in the Persian Gulf in Middle East (Persian Gulf) (Asia).",
      "borders": [
        "Island Kingdom (linked to Saudi Arabia via the 25-km King Fahd Causeway)"
      ],
      "coastline": "Archipelago of 33+ natural islands in the Persian Gulf"
    },
    "clues": [
      "First Gulf state to discover oil (1932); GCC member; hosts the US Navy Fifth Fleet headquarters and possesses the world's second-highest-valued currency unit.",
      "Ancient Dilmun civilization UNESCO fort port and monumental fiberglass-domed grand mosque.",
      "Its capital is Manama and official language(s): Arabic.",
      "Situated in Middle East (Persian Gulf) using Bahraini Dinar (BHD)."
    ],
    "funFact": "Ancient Dilmun civilization UNESCO fort port and monumental fiberglass-domed grand mosque.",
    "examPoints": "First Gulf state to discover oil (1932); GCC member; hosts the US Navy Fifth Fleet headquarters and possesses the world's second-highest-valued currency unit."
  },
  {
    "id": "bd",
    "name": "Bangladesh",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇧🇩",
    "capital": "Dhaka",
    "currency": "Bangladeshi Taka (BDT, ৳)",
    "landmark": {
      "name": "Sundarbans Mangrove Forest & Shaheed Minar",
      "icon": "fa-tree",
      "desc": "World's largest littoral mangrove forest (home to the Royal Bengal Tiger) and Dhaka's iconic Language Movement monument."
    },
    "mapOutline": {
      "shape": "Located in South Asia (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "India",
        "Myanmar"
      ],
      "coastline": "Borders India, Myanmar"
    },
    "clues": [
      "World's 2nd largest garment exporter; Bay of Bengal littoral nation; Padma Bridge and Chittagong Port.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Bengali; active member of UN, WTO, SAARC, OIC, BIMSTEC.",
      "Its national capital city is Dhaka (Population: 173 Million).",
      "Located in South Asia; official currency: Bangladeshi Taka (BDT, ৳)."
    ],
    "funFact": "Official title: People's Republic of Bangladesh • Population: 173 Million • Language: Bengali.",
    "examPoints": "World's 2nd largest garment exporter; Bay of Bengal littoral nation; Padma Bridge and Chittagong Port."
  },
  {
    "id": "bb",
    "name": "Barbados",
    "continent": "North America",
    "region": "Caribbean (Lesser Antilles)",
    "flag": "🇧🇧",
    "capital": "Bridgetown",
    "currency": "Barbadian Dollar (BBD)",
    "landmark": {
      "name": "Historic Bridgetown & Garrison",
      "icon": "fa-landmark",
      "desc": "UNESCO-listed colonial port and Parliament Buildings (third-oldest parliament in the Americas, founded 1639)."
    },
    "mapOutline": {
      "shape": "97 km along the western Atlantic Ocean in Caribbean (Lesser Antilles) (North America).",
      "borders": [
        "Island Nation (Easternmost island of the Lesser Antilles)"
      ],
      "coastline": "97 km along the western Atlantic Ocean"
    },
    "clues": [
      "Transitioned from Commonwealth realm to parliamentary republic in Nov 2021; spearheaded the global 'Bridgetown Initiative' on climate finance reform.",
      "UNESCO-listed colonial port and Parliament Buildings (third-oldest parliament in the Americas, founded 1639).",
      "Its capital is Bridgetown and official language(s): English.",
      "Situated in Caribbean (Lesser Antilles) using Barbadian Dollar (BBD)."
    ],
    "funFact": "UNESCO-listed colonial port and Parliament Buildings (third-oldest parliament in the Americas, founded 1639).",
    "examPoints": "Transitioned from Commonwealth realm to parliamentary republic in Nov 2021; spearheaded the global 'Bridgetown Initiative' on climate finance reform."
  },
  {
    "id": "by",
    "name": "Belarus",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Minsk",
    "currency": "Belarusian Ruble (BYN)",
    "landmark": {
      "name": "Historic Capital District of Minsk",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Presidential Republic; official language(s): this countryian, Russian; active member of UN, CSTO, EAEU, SCO.",
      "Its national capital city is Minsk (Population: 9.2 M).",
      "Located in Europe; official currency: Belarusian Ruble (BYN)."
    ],
    "funFact": "Official title: Belarus • Population: 9.2 M • Language: Belarusian, Russian.",
    "examPoints": "Belarus is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "be",
    "name": "Belgium",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇧🇪",
    "capital": "Brussels",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Grand-Place & Atomium (Brussels)",
      "icon": "fa-atom",
      "desc": "Opulent 17th-century guildhalls square and 102-meter stainless-steel iron-crystal monument."
    },
    "mapOutline": {
      "shape": "Located in Western Europe (Europe), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "France",
        "Germany",
        "Luxembourg",
        "Netherlands"
      ],
      "coastline": "Borders France, Germany, Luxembourg, Netherlands"
    },
    "clues": [
      "De-facto capital of European Union and NATO headquarters; diplomatic crossroads of Western Europe.",
      "Governed as a Federal Parliamentary Constitutional Monarchy; official language(s): Dutch, French, German; active member of UN, EU (Headquarters in Brussels), NATO (Headquarters in Brussels), OECD.",
      "Its national capital city is Brussels (Population: 11.8 Million).",
      "Located in Western Europe; official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: Kingdom of Belgium • Population: 11.8 Million • Language: Dutch, French, German.",
    "examPoints": "De-facto capital of European Union and NATO headquarters; diplomatic crossroads of Western Europe."
  },
  {
    "id": "bz",
    "name": "Belize",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Belmopan",
    "currency": "Belize Dollar (BZD)",
    "landmark": {
      "name": "Historic Capital District of Belmopan",
      "icon": "fa-landmark",
      "desc": "Seat of government (Parliamentary Constitutional Monarchy) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Parliamentary Constitutional Monarchy; official language(s): English; active member of UN, Commonwealth, CARICOM.",
      "Its national capital city is Belmopan (Population: 405,000).",
      "Located in North America; official currency: Belize Dollar (BZD)."
    ],
    "funFact": "Official title: Belize • Population: 405,000 • Language: English.",
    "examPoints": "Belize is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "bj",
    "name": "Benin",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Porto-Novo",
    "currency": "West African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Porto-Novo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): French; active member of UN, AU, ECOWAS, OIC.",
      "Its national capital city is Porto-Novo (Population: 13.7 M).",
      "Located in Africa; official currency: West African CFA Franc."
    ],
    "funFact": "Official title: Benin • Population: 13.7 M • Language: French.",
    "examPoints": "Benin is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "bt",
    "name": "Bhutan",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇧🇹",
    "capital": "Thimphu",
    "currency": "Bhutanese Ngultrum (BTN, Nu.)",
    "landmark": {
      "name": "Paro Taktsang (Tiger's Nest Monastery)",
      "icon": "fa-vihara",
      "desc": "Sacred 17th-century Himalayan Buddhist monastery clinging dramatically to a 900-meter cliffside."
    },
    "mapOutline": {
      "shape": "Located in South Asia (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "China",
        "India"
      ],
      "coastline": "Borders China, India"
    },
    "clues": [
      "World's only carbon-negative country; pioneer of Gross National Happiness (GNH) index.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Dzongkha; active member of UN, SAARC, BIMSTEC.",
      "Its national capital city is Thimphu (Population: 787,000).",
      "Located in South Asia; official currency: Bhutanese Ngultrum (BTN, Nu.)."
    ],
    "funFact": "Official title: Kingdom of Bhutan • Population: 787,000 • Language: Dzongkha.",
    "examPoints": "World's only carbon-negative country; pioneer of Gross National Happiness (GNH) index."
  },
  {
    "id": "bo",
    "name": "Bolivia",
    "continent": "South America",
    "region": "South America",
    "flag": "🌐",
    "capital": "Sucre (Constitutional) / La Paz",
    "currency": "Boliviano (BOB)",
    "landmark": {
      "name": "Historic Capital District of Sucre (Constitutional) / La Paz",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in South America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in South America (South America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in South America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in South America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish & 36 Indigenous; active member of UN, Mercosur, OAS.",
      "Its national capital city is Sucre (Constitutional) / La Paz (Population: 12.4 M).",
      "Located in South America; official currency: Boliviano (BOB)."
    ],
    "funFact": "Official title: Bolivia • Population: 12.4 M • Language: Spanish & 36 Indigenous.",
    "examPoints": "Bolivia is an internationally recognized sovereign state situated in South America."
  },
  {
    "id": "ba",
    "name": "Bosnia and Herzegovina",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Sarajevo",
    "currency": "Convertible Mark (BAM)",
    "landmark": {
      "name": "Historic Capital District of Sarajevo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Parliamentary Republic (3-member Presidency)) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Federal Parliamentary Republic (3-member Presidency); official language(s): Bosnian, Croatian, Serbian; active member of UN, OIC (Observer).",
      "Its national capital city is Sarajevo (Population: 3.2 M).",
      "Located in Europe; official currency: Convertible Mark (BAM)."
    ],
    "funFact": "Official title: Bosnia and Herzegovina • Population: 3.2 M • Language: Bosnian, Croatian, Serbian.",
    "examPoints": "Bosnia and Herzegovina is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "bw",
    "name": "Botswana",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Gaborone",
    "currency": "Botswana Pula (BWP)",
    "landmark": {
      "name": "Historic Capital District of Gaborone",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Parliamentary Republic; official language(s): English, Setswana; active member of UN, AU, SADC, Commonwealth.",
      "Its national capital city is Gaborone (Population: 2.6 M).",
      "Located in Africa; official currency: Botswana Pula (BWP)."
    ],
    "funFact": "Official title: Botswana • Population: 2.6 M • Language: English, Setswana.",
    "examPoints": "Botswana is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "br",
    "name": "Brazil",
    "continent": "South America",
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
    "id": "bn",
    "name": "Brunei",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇧🇳",
    "capital": "Bandar Seri Begawan",
    "currency": "Brunei Dollar (BND, B$)",
    "landmark": {
      "name": "Historic Capital District of Bandar Seri Begawan",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Islamic Absolute Monarchy) and premier national cultural monuments in Southeast Asia."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 1 neighboring country.",
      "borders": [
        "Malaysia"
      ],
      "coastline": "Borders Malaysia"
    },
    "clues": [
      "Oil and natural gas-rich sultanate on Borneo island; South China Sea littoral state.",
      "Governed as a Unitary Islamic Absolute Monarchy; official language(s): Malay; active member of UN, ASEAN, OIC, Commonwealth.",
      "Its national capital city is Bandar Seri Begawan (Population: 450,000).",
      "Located in Southeast Asia; official currency: Brunei Dollar (BND, B$)."
    ],
    "funFact": "Official title: Nation of Brunei, the Abode of Peace • Population: 450,000 • Language: Malay.",
    "examPoints": "Oil and natural gas-rich sultanate on Borneo island; South China Sea littoral state."
  },
  {
    "id": "bg",
    "name": "Bulgaria",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Sofia",
    "currency": "Bulgarian Lev (BGN)",
    "landmark": {
      "name": "Historic Capital District of Sofia",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryn; active member of UN, EU, NATO.",
      "Its national capital city is Sofia (Population: 6.4 M).",
      "Located in Europe; official currency: Bulgarian Lev (BGN)."
    ],
    "funFact": "Official title: Bulgaria • Population: 6.4 M • Language: Bulgarian.",
    "examPoints": "Bulgaria is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "bf",
    "name": "Burkina Faso",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Ouagadougou",
    "currency": "West African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Ouagadougou",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Republic (Transitional)) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Republic (Transitional); official language(s): French; active member of UN, AU, OIC.",
      "Its national capital city is Ouagadougou (Population: 23 M).",
      "Located in Africa; official currency: West African CFA Franc."
    ],
    "funFact": "Official title: Burkina Faso • Population: 23 M • Language: French.",
    "examPoints": "Burkina Faso is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "bi",
    "name": "Burundi",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Gitega",
    "currency": "Burundian Franc (BIF)",
    "landmark": {
      "name": "Historic Capital District of Gitega",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): Kirundi, French; active member of UN, AU, EAC.",
      "Its national capital city is Gitega (Population: 13 M).",
      "Located in Africa; official currency: Burundian Franc (BIF)."
    ],
    "funFact": "Official title: Burundi • Population: 13 M • Language: Kirundi, French.",
    "examPoints": "Burundi is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "kh",
    "name": "Cambodia",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇰🇭",
    "capital": "Phnom Penh",
    "currency": "Cambodian Riel (KHR, ៛)",
    "landmark": {
      "name": "Angkor Wat Temple Complex",
      "icon": "fa-gopuram",
      "desc": "12th-century Khmer Empire masterpiece—the largest religious monument in the world, depicted on the national flag."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "Thailand",
        "Laos",
        "Vietnam"
      ],
      "coastline": "Borders Thailand, Laos, Vietnam"
    },
    "clues": [
      "Mekong River basin nation; Ream Naval Base on Gulf of Thailand; close economic ties with China.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Khmer; active member of UN, ASEAN, RCEP.",
      "Its national capital city is Phnom Penh (Population: 16.8 Million).",
      "Located in Southeast Asia; official currency: Cambodian Riel (KHR, ៛)."
    ],
    "funFact": "Official title: Kingdom of Cambodia • Population: 16.8 Million • Language: Khmer.",
    "examPoints": "Mekong River basin nation; Ream Naval Base on Gulf of Thailand; close economic ties with China."
  },
  {
    "id": "cm",
    "name": "Cameroon",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Yaoundé",
    "currency": "Central African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Yaoundé",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): French, English; active member of UN, AU, Commonwealth, OIC.",
      "Its national capital city is Yaoundé (Population: 28 M).",
      "Located in Africa; official currency: Central African CFA Franc."
    ],
    "funFact": "Official title: Cameroon • Population: 28 M • Language: French, English.",
    "examPoints": "Cameroon is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "ca",
    "name": "Canada",
    "continent": "North America",
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
    "id": "cv",
    "name": "Cape Verde",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Praia",
    "currency": "Cape Verdean Escudo",
    "landmark": {
      "name": "Historic Capital District of Praia",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Portuguese; active member of UN, AU, ECOWAS.",
      "Its national capital city is Praia (Population: 590,000).",
      "Located in Africa; official currency: Cape Verdean Escudo."
    ],
    "funFact": "Official title: Cape Verde • Population: 590,000 • Language: Portuguese.",
    "examPoints": "Cape Verde is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "cf",
    "name": "Central African Republic",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Bangui",
    "currency": "Central African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Bangui",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): French, Sango; active member of UN, AU.",
      "Its national capital city is Bangui (Population: 5.5 M).",
      "Located in Africa; official currency: Central African CFA Franc."
    ],
    "funFact": "Official title: Central African Republic • Population: 5.5 M • Language: French, Sango.",
    "examPoints": "Central African Republic is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "td",
    "name": "Chad",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "N'Djamena",
    "currency": "Central African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of N'Djamena",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): French, Arabic; active member of UN, AU, OIC.",
      "Its national capital city is N'Djamena (Population: 18 M).",
      "Located in Africa; official currency: Central African CFA Franc."
    ],
    "funFact": "Official title: Chad • Population: 18 M • Language: French, Arabic.",
    "examPoints": "Chad is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "cl",
    "name": "Chile",
    "continent": "South America",
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
    "id": "co",
    "name": "Colombia",
    "continent": "South America",
    "region": "South America",
    "flag": "🇨🇴",
    "capital": "Bogotá",
    "currency": "Colombian Peso (COP, $)",
    "landmark": {
      "name": "Walled City of Cartagena & Salt Cathedral of Zipaquirá",
      "icon": "fa-church",
      "desc": "Underground cathedral carved 200 meters deep inside a halite mountain salt mine."
    },
    "mapOutline": {
      "shape": "Located in South America (South America), sharing land frontiers with 5 neighboring countries.",
      "borders": [
        "Venezuela",
        "Brazil",
        "Peru",
        "Ecuador",
        "Panama"
      ],
      "coastline": "Borders Venezuela, Brazil, Peru, Ecuador"
    },
    "clues": [
      "Only South American nation with coastlines on both Pacific and Caribbean; major coffee, coal, and emerald producer.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OECD, Pacific Alliance, OAS.",
      "Its national capital city is Bogotá (Population: 52.2 Million).",
      "Located in South America; official currency: Colombian Peso (COP, $)."
    ],
    "funFact": "Official title: Republic of Colombia • Population: 52.2 Million • Language: Spanish.",
    "examPoints": "Only South American nation with coastlines on both Pacific and Caribbean; major coffee, coal, and emerald producer."
  },
  {
    "id": "km",
    "name": "Comoros",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Moroni",
    "currency": "Comorian Franc",
    "landmark": {
      "name": "Historic Capital District of Moroni",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Federal Presidential Republic; official language(s): Comorian, French, Arabic; active member of UN, AU, Arab League, OIC.",
      "Its national capital city is Moroni (Population: 850,000).",
      "Located in Africa; official currency: Comorian Franc."
    ],
    "funFact": "Official title: Comoros • Population: 850,000 • Language: Comorian, French, Arabic.",
    "examPoints": "Comoros is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "cg",
    "name": "Congo (Brazzaville)",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Brazzaville",
    "currency": "Central African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Brazzaville",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): French; active member of UN, OPEC, AU.",
      "Its national capital city is Brazzaville (Population: 6.1 M).",
      "Located in Africa; official currency: Central African CFA Franc."
    ],
    "funFact": "Official title: Congo (Brazzaville) • Population: 6.1 M • Language: French.",
    "examPoints": "Congo (Brazzaville) is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "cr",
    "name": "Costa Rica",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "San José",
    "currency": "Costa Rican Colón",
    "landmark": {
      "name": "Historic Capital District of San José",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OECD, OAS.",
      "Its national capital city is San José (Population: 5.2 M).",
      "Located in North America; official currency: Costa Rican Colón."
    ],
    "funFact": "Official title: Costa Rica • Population: 5.2 M • Language: Spanish.",
    "examPoints": "Costa Rica is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "hr",
    "name": "Croatia",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Zagreb",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": " Historic Old City of Dubrovnik & Plitvice Lakes",
      "icon": "fa-water",
      "desc": "Medieval walled 'Pearl of the Adriatic' and cascading travertine turquoise lakes."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryn; active member of UN, EU, NATO.",
      "Its national capital city is Zagreb (Population: 3.8 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Croatia • Population: 3.8 M • Language: Croatian.",
    "examPoints": "Croatia is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "cu",
    "name": "Cuba",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Havana",
    "currency": "Cuban Peso (CUP)",
    "landmark": {
      "name": "Old Havana (La Habana Vieja) & El Capitolio",
      "icon": "fa-landmark",
      "desc": "UNESCO Spanish Baroque Caribbean port plaza famed for classic architecture and music."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary One-Party Socialist Republic; official language(s): Spanish; active member of UN, NAM, ALBA.",
      "Its national capital city is Havana (Population: 11.2 M).",
      "Located in North America; official currency: Cuban Peso (CUP)."
    ],
    "funFact": "Official title: Cuba • Population: 11.2 M • Language: Spanish.",
    "examPoints": "Cuba is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "cy",
    "name": "Cyprus",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Nicosia",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Nicosia",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Presidential Republic; official language(s): Greek, Turkish; active member of UN, EU, Commonwealth.",
      "Its national capital city is Nicosia (Population: 1.2 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Cyprus • Population: 1.2 M • Language: Greek, Turkish.",
    "examPoints": "Cyprus is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "cz",
    "name": "Czech Republic",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Prague",
    "currency": "Czech Koruna (CZK)",
    "landmark": {
      "name": "Charles Bridge & Prague Castle",
      "icon": "fa-chess-rook",
      "desc": "14th-century Gothic stone bridge spanning the Vltava beneath the world's largest ancient castle complex."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Czech; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Prague (Population: 10.9 M).",
      "Located in Europe; official currency: Czech Koruna (CZK)."
    ],
    "funFact": "Official title: Czech Republic • Population: 10.9 M • Language: Czech.",
    "examPoints": "Czech Republic is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "cd",
    "name": "DR Congo",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Kinshasa",
    "currency": "Congolese Franc (CDF)",
    "landmark": {
      "name": "Historic Capital District of Kinshasa",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): French; active member of UN, AU, SADC, EAC.",
      "Its national capital city is Kinshasa (Population: 102 M).",
      "Located in Africa; official currency: Congolese Franc (CDF)."
    ],
    "funFact": "Official title: DR Congo • Population: 102 M • Language: French.",
    "examPoints": "DR Congo is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "dk",
    "name": "Denmark",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Copenhagen",
    "currency": "Danish Krone (DKK)",
    "landmark": {
      "name": "Nyhavn Harbor & Little Mermaid Statue",
      "icon": "fa-anchor",
      "desc": "17th-century colorful waterfront canal in Copenhagen and Hans Christian Andersen tribute."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Danish; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Copenhagen (Population: 5.9 M).",
      "Located in Europe; official currency: Danish Krone (DKK)."
    ],
    "funFact": "Official title: Denmark • Population: 5.9 M • Language: Danish.",
    "examPoints": "Denmark is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "dj",
    "name": "Djibouti",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Djibouti City",
    "currency": "Djiboutian Franc",
    "landmark": {
      "name": "Historic Capital District of Djibouti City",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Arabic, French; active member of UN, AU, Arab League, OIC.",
      "Its national capital city is Djibouti City (Population: 1.1 M).",
      "Located in Africa; official currency: Djiboutian Franc."
    ],
    "funFact": "Official title: Djibouti • Population: 1.1 M • Language: Arabic, French.",
    "examPoints": "Djibouti is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "dm",
    "name": "Dominica",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Roseau",
    "currency": "East Caribbean Dollar",
    "landmark": {
      "name": "Historic Capital District of Roseau",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Parliamentary Republic; official language(s): English; active member of UN, Commonwealth, CARICOM.",
      "Its national capital city is Roseau (Population: 72,000).",
      "Located in North America; official currency: East Caribbean Dollar."
    ],
    "funFact": "Official title: Dominica • Population: 72,000 • Language: English.",
    "examPoints": "Dominica is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "do",
    "name": "Dominican Republic",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Santo Domingo",
    "currency": "Dominican Peso",
    "landmark": {
      "name": "Historic Capital District of Santo Domingo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OAS.",
      "Its national capital city is Santo Domingo (Population: 11.3 M).",
      "Located in North America; official currency: Dominican Peso."
    ],
    "funFact": "Official title: Dominican Republic • Population: 11.3 M • Language: Spanish.",
    "examPoints": "Dominican Republic is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "ec",
    "name": "Ecuador",
    "continent": "South America",
    "region": "South America",
    "flag": "🌐",
    "capital": "Quito",
    "currency": "United States Dollar (USD)",
    "landmark": {
      "name": "Historic Capital District of Quito",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in South America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in South America (South America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in South America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in South America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OAS.",
      "Its national capital city is Quito (Population: 18 M).",
      "Located in South America; official currency: United States Dollar (USD)."
    ],
    "funFact": "Official title: Ecuador • Population: 18 M • Language: Spanish.",
    "examPoints": "Ecuador is an internationally recognized sovereign state situated in South America."
  },
  {
    "id": "eg",
    "name": "Egypt",
    "continent": "Africa",
    "region": "North Africa",
    "flag": "🇪🇬",
    "capital": "Cairo",
    "currency": "Egyptian Pound (EGP, E£)",
    "landmark": {
      "name": "Historic Capital District of Cairo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in North Africa."
    },
    "mapOutline": {
      "shape": "Located in North Africa (Africa), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "Libya",
        "Sudan",
        "Israel"
      ],
      "coastline": "Borders Libya, Sudan, Israel"
    },
    "clues": [
      "Controls Suez Canal (handles ~12% of global trade); Sinai Peninsula transcontinental bridge; Arab League HQ.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Arabic; active member of UN, BRICS, African Union, Arab League (HQ in Cairo), OIC.",
      "Its national capital city is Cairo (Population: 112.7 Million).",
      "Located in North Africa; official currency: Egyptian Pound (EGP, E£)."
    ],
    "funFact": "Official title: Arab Republic of Egypt • Population: 112.7 Million • Language: Arabic.",
    "examPoints": "Controls Suez Canal (handles ~12% of global trade); Sinai Peninsula transcontinental bridge; Arab League HQ."
  },
  {
    "id": "sv",
    "name": "El Salvador",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "San Salvador",
    "currency": "US Dollar & Bitcoin",
    "landmark": {
      "name": "Historic Capital District of San Salvador",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OAS.",
      "Its national capital city is San Salvador (Population: 6.3 M).",
      "Located in North America; official currency: US Dollar & Bitcoin."
    ],
    "funFact": "Official title: El Salvador • Population: 6.3 M • Language: Spanish.",
    "examPoints": "El Salvador is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "gq",
    "name": "Equatorial Guinea",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Malabo",
    "currency": "Central African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Malabo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish, French, Portuguese; active member of UN, AU, OPEC.",
      "Its national capital city is Malabo (Population: 1.7 M).",
      "Located in Africa; official currency: Central African CFA Franc."
    ],
    "funFact": "Official title: Equatorial Guinea • Population: 1.7 M • Language: Spanish, French, Portuguese.",
    "examPoints": "Equatorial Guinea is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "er",
    "name": "Eritrea",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Asmara",
    "currency": "Eritrean Nakfa",
    "landmark": {
      "name": "Historic Capital District of Asmara",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary One-Party Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary One-Party Presidential Republic; official language(s): Tigrinya, Arabic, English; active member of UN, AU.",
      "Its national capital city is Asmara (Population: 3.7 M).",
      "Located in Africa; official currency: Eritrean Nakfa."
    ],
    "funFact": "Official title: Eritrea • Population: 3.7 M • Language: Tigrinya, Arabic, English.",
    "examPoints": "Eritrea is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "ee",
    "name": "Estonia",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Tallinn",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Tallinn",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryn; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Tallinn (Population: 1.3 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Estonia • Population: 1.3 M • Language: Estonian.",
    "examPoints": "Estonia is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "sz",
    "name": "Eswatini",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Mbabane",
    "currency": "Swazi Lilangeni",
    "landmark": {
      "name": "Historic Capital District of Mbabane",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Absolute Monarchy) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Absolute Monarchy; official language(s): Swazi, English; active member of UN, AU, Commonwealth, SADC.",
      "Its national capital city is Mbabane (Population: 1.2 M).",
      "Located in Africa; official currency: Swazi Lilangeni."
    ],
    "funFact": "Official title: Eswatini • Population: 1.2 M • Language: Swazi, English.",
    "examPoints": "Eswatini is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "et",
    "name": "Ethiopia",
    "continent": "Africa",
    "region": "Horn of Africa",
    "flag": "🇪🇹",
    "capital": "Addis Ababa",
    "currency": "Ethiopian Birr (ETB, Br)",
    "landmark": {
      "name": "Rock-Hewn Churches of Lalibela",
      "icon": "fa-church",
      "desc": "Eleven medieval monolithic churches carved downward out of solid red volcanic rock."
    },
    "mapOutline": {
      "shape": "Located in Horn of Africa (Africa), sharing land frontiers with 6 neighboring countries.",
      "borders": [
        "Eritrea",
        "Djibouti",
        "Somalia",
        "Kenya",
        "South Sudan",
        "Sudan"
      ],
      "coastline": "Borders Eritrea, Djibouti, Somalia, Kenya"
    },
    "clues": [
      "Second most populous country in Africa; diplomatic capital of Africa (AU Headquarters); Grand this countryn Renaissance Dam (GERD) on Blue Nile.",
      "Governed as a Federal Parliamentary Republic; official language(s): Amharic & Afar, Oromo, Somali, Tigrinya; active member of UN, BRICS, African Union (HQ in Addis Ababa), COMESA.",
      "Its national capital city is Addis Ababa (Population: 126.5 Million).",
      "Located in Horn of Africa; official currency: Ethiopian Birr (ETB, Br)."
    ],
    "funFact": "Official title: Federal Democratic Republic of Ethiopia • Population: 126.5 Million • Language: Amharic & Afar, Oromo, Somali, Tigrinya.",
    "examPoints": "Second most populous country in Africa; diplomatic capital of Africa (AU Headquarters); Grand Ethiopian Renaissance Dam (GERD) on Blue Nile."
  },
  {
    "id": "fj",
    "name": "Fiji",
    "continent": "Oceania",
    "region": "Melanesia (South Pacific)",
    "flag": "🇫🇯",
    "capital": "Suva",
    "currency": "Fijian Dollar (FJD)",
    "landmark": {
      "name": "Levuka Historic Port Town & Sri Siva Subramaniya Temple",
      "icon": "fa-water",
      "desc": "this country's first colonial capital (UNESCO World Heritage Site) and vibrant Dravidian temple in Nadi."
    },
    "mapOutline": {
      "shape": "1,129 km across Viti Levu, Vanua Levu, and outer islands in Melanesia (South Pacific) (Oceania).",
      "borders": [
        "Island Archipelago (330+ volcanic and coral islands in the South Pacific)"
      ],
      "coastline": "1,129 km across Viti Levu, Vanua Levu, and outer islands"
    },
    "clues": [
      "Hub of the Pacific Islands Forum (PIF) Secretariat in Suva; crossed by the 180th Meridian.",
      "this country's first colonial capital (UNESCO World Heritage Site) and vibrant Dravidian temple in Nadi.",
      "Its capital is Suva and official language(s): English, Fijian, Fiji Hindi.",
      "Situated in Melanesia (South Pacific) using Fijian Dollar (FJD)."
    ],
    "funFact": "Fiji's first colonial capital (UNESCO World Heritage Site) and vibrant Dravidian temple in Nadi.",
    "examPoints": "Hub of the Pacific Islands Forum (PIF) Secretariat in Suva; crossed by the 180th Meridian."
  },
  {
    "id": "fi",
    "name": "Finland",
    "continent": "Europe",
    "region": "Northern Europe (Nordic)",
    "flag": "🇫🇮",
    "capital": "Helsinki",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Suomenlinna Sea Fortress & Lapland Aurora",
      "icon": "fa-snowflake",
      "desc": "18th-century UNESCO island fortress guarding Helsinki across the 'Land of a Thousand Lakes'."
    },
    "mapOutline": {
      "shape": "Located in Northern Europe (Nordic) (Europe), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "Sweden",
        "Norway",
        "Russia"
      ],
      "coastline": "Borders Sweden, Norway, Russia"
    },
    "clues": [
      "Joined NATO in 2023, doubling NATO's direct land border with Russia; world's happiest country ranking.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Finnish & Swedish; active member of UN, EU, NATO (Joined 2023), OECD, Nordic Council.",
      "Its national capital city is Helsinki (Population: 5.6 Million).",
      "Located in Northern Europe (Nordic); official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: Republic of Finland • Population: 5.6 Million • Language: Finnish & Swedish.",
    "examPoints": "Joined NATO in 2023, doubling NATO's direct land border with Russia; world's happiest country ranking."
  },
  {
    "id": "fr",
    "name": "France",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇫🇷",
    "capital": "Paris",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Historic Capital District of Paris",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Western Europe."
    },
    "mapOutline": {
      "shape": "Located in Western Europe (Europe), sharing land frontiers with 6 neighboring countries.",
      "borders": [
        "Belgium",
        "Luxembourg",
        "Germany",
        "Switzerland",
        "Italy",
        "Spain"
      ],
      "coastline": "Borders Belgium, Luxembourg, Germany, Switzerland"
    },
    "clues": [
      "Permanent member of UNSC; EU's leading military & nuclear power; UNESCO headquarters in Paris.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): French; active member of UN, UNSC (Permanent Member), EU (Founding), NATO, G7.",
      "Its national capital city is Paris (Population: 68 Million).",
      "Located in Western Europe; official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: French Republic • Population: 68 Million • Language: French.",
    "examPoints": "Permanent member of UNSC; EU's leading military & nuclear power; UNESCO headquarters in Paris."
  },
  {
    "id": "ga",
    "name": "Gabon",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Libreville",
    "currency": "Central African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Libreville",
      "icon": "fa-landmark",
      "desc": "Seat of government (Transitional Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Transitional Republic; official language(s): French; active member of UN, OPEC, OIC, Commonwealth.",
      "Its national capital city is Libreville (Population: 2.4 M).",
      "Located in Africa; official currency: Central African CFA Franc."
    ],
    "funFact": "Official title: Gabon • Population: 2.4 M • Language: French.",
    "examPoints": "Gabon is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "gm",
    "name": "Gambia",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Banjul",
    "currency": "Gambian Dalasi",
    "landmark": {
      "name": "Historic Capital District of Banjul",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): English; active member of UN, AU, ECOWAS, OIC, Commonwealth.",
      "Its national capital city is Banjul (Population: 2.7 M).",
      "Located in Africa; official currency: Gambian Dalasi."
    ],
    "funFact": "Official title: Gambia • Population: 2.7 M • Language: English.",
    "examPoints": "Gambia is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "ge",
    "name": "Georgia",
    "continent": "Asia / Europe",
    "region": "Asia / Europe",
    "flag": "🌐",
    "capital": "Tbilisi",
    "currency": "Georgian Lari (GEL)",
    "landmark": {
      "name": "Narikala Fortress & Gergeti Trinity Church",
      "icon": "fa-chess-rook",
      "desc": "Ancient citadel overlooking Tbilisi's sulfur-bath district and iconic Caucasus mountain church."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Asia / Europe (Asia / Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Asia / Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Asia / Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryn; active member of UN, Council of Europe.",
      "Its national capital city is Tbilisi (Population: 3.7 M).",
      "Located in Asia / Europe; official currency: Georgian Lari (GEL)."
    ],
    "funFact": "Official title: Georgia • Population: 3.7 M • Language: Georgian.",
    "examPoints": "Georgia is an internationally recognized sovereign state situated in Asia / Europe."
  },
  {
    "id": "de",
    "name": "Germany",
    "continent": "Europe",
    "region": "Central Europe",
    "flag": "🇩🇪",
    "capital": "Berlin",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Historic Capital District of Berlin",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Parliamentary Republic (Bundestag & Bundesrat)) and premier national cultural monuments in Central Europe."
    },
    "mapOutline": {
      "shape": "Located in Central Europe (Europe), sharing land frontiers with 9 neighboring countries.",
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
      "coastline": "Borders Denmark, Poland, Czechia, Austria"
    },
    "clues": [
      "Europe's largest national economy (3rd largest in world); economic engine of European Union.",
      "Governed as a Federal Parliamentary Republic (Bundestag & Bundesrat); official language(s): national; active member of UN, EU, NATO, G7, G20.",
      "Its national capital city is Berlin (Population: 84.4 Million).",
      "Located in Central Europe; official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: Federal Republic of Germany • Population: 84.4 Million • Language: German.",
    "examPoints": "Europe's largest national economy (3rd largest in world); economic engine of European Union."
  },
  {
    "id": "gh",
    "name": "Ghana",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Accra",
    "currency": "Ghanaian Cedi (GHS)",
    "landmark": {
      "name": "Cape Coast Castle & Black Star Gate",
      "icon": "fa-monument",
      "desc": "Independence Arch in Accra symbolizing Sub-Saharan Africa's pioneering 1957 decolonization."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): English; active member of UN, AU, ECOWAS, Commonwealth.",
      "Its national capital city is Accra (Population: 34 M).",
      "Located in Africa; official currency: Ghanaian Cedi (GHS)."
    ],
    "funFact": "Official title: Ghana • Population: 34 M • Language: English.",
    "examPoints": "Ghana is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "gr",
    "name": "Greece",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Athens",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Athens",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Greek; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Athens (Population: 10.4 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Greece • Population: 10.4 M • Language: Greek.",
    "examPoints": "Greece is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "gd",
    "name": "Grenada",
    "continent": "North America",
    "region": "Caribbean (Windward Islands)",
    "flag": "🇬🇩",
    "capital": "St. George's",
    "currency": "East Caribbean Dollar (XCD)",
    "landmark": {
      "name": "Fort George & Underwater Sculpture Park",
      "icon": "fa-fort-awesome",
      "desc": "18th-century French harbor fortress overlooking horseshoe-shaped Carenage harbor and the world's first underwater sculpture park."
    },
    "mapOutline": {
      "shape": "121 km volcanic island coastline in Caribbean (Windward Islands) (North America).",
      "borders": [
        "Island Nation (Southern Caribbean Sea north of Trinidad & Venezuela)"
      ],
      "coastline": "121 km volcanic island coastline"
    },
    "clues": [
      "Globally famous as the 'Island of Spice' for being one of the world's leading producers of nutmeg and mace.",
      "18th-century French harbor fortress overlooking horseshoe-shaped Carenage harbor and the world's first underwater sculpture park.",
      "Its capital is St. George's and official language(s): English.",
      "Situated in Caribbean (Windward Islands) using East Caribbean Dollar (XCD)."
    ],
    "funFact": "18th-century French harbor fortress overlooking horseshoe-shaped Carenage harbor and the world's first underwater sculpture park.",
    "examPoints": "Globally famous as the 'Island of Spice' for being one of the world's leading producers of nutmeg and mace."
  },
  {
    "id": "gt",
    "name": "Guatemala",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Guatemala City",
    "currency": "Guatemalan Quetzal",
    "landmark": {
      "name": "Historic Capital District of Guatemala City",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OAS.",
      "Its national capital city is Guatemala City (Population: 18 M).",
      "Located in North America; official currency: Guatemalan Quetzal."
    ],
    "funFact": "Official title: Guatemala • Population: 18 M • Language: Spanish.",
    "examPoints": "Guatemala is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "gn",
    "name": "Guinea",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Conakry",
    "currency": "Guinean Franc",
    "landmark": {
      "name": "Historic Capital District of Conakry",
      "icon": "fa-landmark",
      "desc": "Seat of government (Transitional Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Transitional Republic; official language(s): French; active member of UN, AU, OIC.",
      "Its national capital city is Conakry (Population: 14 M).",
      "Located in Africa; official currency: Guinean Franc."
    ],
    "funFact": "Official title: Guinea • Population: 14 M • Language: French.",
    "examPoints": "Guinea is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "gw",
    "name": "Guinea-Bissau",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Bissau",
    "currency": "West African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Bissau",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Portuguese; active member of UN, AU, ECOWAS, OIC.",
      "Its national capital city is Bissau (Population: 2.1 M).",
      "Located in Africa; official currency: West African CFA Franc."
    ],
    "funFact": "Official title: Guinea-Bissau • Population: 2.1 M • Language: Portuguese.",
    "examPoints": "Guinea-Bissau is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "gy",
    "name": "Guyana",
    "continent": "South America",
    "region": "South America",
    "flag": "🌐",
    "capital": "Georgetown",
    "currency": "Guyanese Dollar",
    "landmark": {
      "name": "Historic Capital District of Georgetown",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in South America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in South America (South America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in South America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in South America.",
      "Governed as a Unitary Parliamentary Republic; official language(s): English; active member of UN, Commonwealth, OIC, CARICOM.",
      "Its national capital city is Georgetown (Population: 810,000).",
      "Located in South America; official currency: Guyanese Dollar."
    ],
    "funFact": "Official title: Guyana • Population: 810,000 • Language: English.",
    "examPoints": "Guyana is an internationally recognized sovereign state situated in South America."
  },
  {
    "id": "ht",
    "name": "Haiti",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Port-au-Prince",
    "currency": "Haitian Gourde",
    "landmark": {
      "name": "Historic Capital District of Port-au-Prince",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): French, this countryan Creole; active member of UN, CARICOM, OAS.",
      "Its national capital city is Port-au-Prince (Population: 11.7 M).",
      "Located in North America; official currency: Haitian Gourde."
    ],
    "funFact": "Official title: Haiti • Population: 11.7 M • Language: French, Haitian Creole.",
    "examPoints": "Haiti is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "hn",
    "name": "Honduras",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Tegucigalpa",
    "currency": "Honduran Lempira",
    "landmark": {
      "name": "Historic Capital District of Tegucigalpa",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OAS.",
      "Its national capital city is Tegucigalpa (Population: 10.6 M).",
      "Located in North America; official currency: Honduran Lempira."
    ],
    "funFact": "Official title: Honduras • Population: 10.6 M • Language: Spanish.",
    "examPoints": "Honduras is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "hu",
    "name": "Hungary",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Budapest",
    "currency": "Hungarian Forint (HUF)",
    "landmark": {
      "name": "national Parliament Building (Budapest)",
      "icon": "fa-landmark",
      "desc": "Neo-Gothic architectural icon stretching along the Danube River connecting Buda and Pest."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): national; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Budapest (Population: 9.6 M).",
      "Located in Europe; official currency: Hungarian Forint (HUF)."
    ],
    "funFact": "Official title: Hungary • Population: 9.6 M • Language: Hungarian.",
    "examPoints": "Hungary is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "is",
    "name": "Iceland",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Reykjavik",
    "currency": "Icelandic Króna (ISK)",
    "landmark": {
      "name": "Blue Lagoon, Gullfoss & Thingvellir Rift",
      "icon": "fa-fire",
      "desc": "Mid-Atlantic tectonic rift valley hosting the site of the world's oldest parliament (Althing, AD 930)."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryic; active member of UN, NATO (Founding), EFTA, OECD.",
      "Its national capital city is Reykjavik (Population: 390,000).",
      "Located in Europe; official currency: Icelandic Króna (ISK)."
    ],
    "funFact": "Official title: Iceland • Population: 390,000 • Language: Icelandic.",
    "examPoints": "Iceland is an internationally recognized sovereign state situated in Europe."
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
      "name": "Historic Capital District of New Delhi",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Parliamentary Republic) and premier national cultural monuments in South Asia."
    },
    "mapOutline": {
      "shape": "Located in South Asia (Asia), sharing land frontiers with 6 neighboring countries.",
      "borders": [
        "Pakistan",
        "China",
        "Nepal",
        "Bhutan",
        "Bangladesh",
        "Myanmar"
      ],
      "coastline": "Borders Pakistan, China, Nepal, Bhutan"
    },
    "clues": [
      "Most populous country; largest economy in South Asia; partner in US Indo-Pacific Strategy (QUAD); party to Indus Waters Treaty 1960.",
      "Governed as a Federal Parliamentary Republic; official language(s): Hindi & English; active member of UN, WTO, BRICS, SCO, SAARC.",
      "Its national capital city is New Delhi (Population: 1.43 Billion).",
      "Located in South Asia; official currency: Indian Rupee (INR, ₹)."
    ],
    "funFact": "Official title: Republic of India • Population: 1.43 Billion • Language: Hindi & English.",
    "examPoints": "Most populous country; largest economy in South Asia; partner in US Indo-Pacific Strategy (QUAD); party to Indus Waters Treaty 1960."
  },
  {
    "id": "id",
    "name": "Indonesia",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇮🇩",
    "capital": "Nusantara (new) / Jakarta",
    "currency": "Indonesian Rupiah (IDR, Rp)",
    "landmark": {
      "name": "Borobudur Temple & Komodo National Park",
      "icon": "fa-vihara",
      "desc": "9th-century Mahayana Buddhist monument (world's largest) in Central Java."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "Malaysia",
        "Papua New Guinea",
        "Timor-Leste"
      ],
      "coastline": "Borders Malaysia, Papua New Guinea, Timor-Leste"
    },
    "clues": [
      "World's most populous Muslim-majority country; controls Malacca, Sunda, and Lombok straits; major nickel producer.",
      "Governed as a Unitary Presidential Republic; official language(s): this countryn (Bahasa this country); active member of UN, G20, ASEAN, OIC, D-8.",
      "Its national capital city is Nusantara (new) / Jakarta (Population: 278 Million).",
      "Located in Southeast Asia; official currency: Indonesian Rupiah (IDR, Rp)."
    ],
    "funFact": "Official title: Republic of Indonesia • Population: 278 Million • Language: Indonesian (Bahasa Indonesia).",
    "examPoints": "World's most populous Muslim-majority country; controls Malacca, Sunda, and Lombok straits; major nickel producer."
  },
  {
    "id": "ir",
    "name": "Iran",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇮🇷",
    "capital": "Tehran",
    "currency": "Iranian Rial (IRR, ﷼)",
    "landmark": {
      "name": "Persepolis & Naqsh-e Jahan Square (Isfahan)",
      "icon": "fa-monument",
      "desc": "Ceremonial capital of the ancient Achaemenid Empire (515 BC) and Safavid architectural jewel."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 7 neighboring countries.",
      "borders": [
        "Pakistan",
        "Afghanistan",
        "Turkmenistan",
        "Azerbaijan",
        "Armenia",
        "Turkey",
        "Iraq"
      ],
      "coastline": "Borders Pakistan, Afghanistan, Turkmenistan, Azerbaijan"
    },
    "clues": [
      "Overlooks Strait of Hormuz chokepoint; massive hydrocarbon reserves; Chabahar Port; member of BRICS and SCO.",
      "Governed as a Unitary Theocratic Presidential Republic; official language(s): Persian (Farsi); active member of UN, OIC, OPEC, ECO, SCO.",
      "Its national capital city is Tehran (Population: 89.2 Million).",
      "Located in Middle East; official currency: Iranian Rial (IRR, ﷼)."
    ],
    "funFact": "Official title: Islamic Republic of Iran • Population: 89.2 Million • Language: Persian (Farsi).",
    "examPoints": "Overlooks Strait of Hormuz chokepoint; massive hydrocarbon reserves; Chabahar Port; member of BRICS and SCO."
  },
  {
    "id": "iq",
    "name": "Iraq",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇮🇶",
    "capital": "Baghdad",
    "currency": "Iraqi Dinar (IQD, ع.د)",
    "landmark": {
      "name": "Babylon Ruins & Great Ziggurat of Ur",
      "icon": "fa-monument",
      "desc": "Mesopotamian cradle-of-civilization monuments situated between the Tigris and Euphrates rivers."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 6 neighboring countries.",
      "borders": [
        "Iran",
        "Kuwait",
        "Saudi Arabia",
        "Jordan",
        "Syria",
        "Turkey"
      ],
      "coastline": "Borders Iran, Kuwait, Saudi Arabia, Jordan"
    },
    "clues": [
      "Mesopotamian heartland (Tigris and Euphrates rivers); 5th largest proven crude oil reserves globally.",
      "Governed as a Federal Parliamentary Republic; official language(s): Arabic & Kurdish; active member of UN, OPEC (Founding), OIC, Arab League.",
      "Its national capital city is Baghdad (Population: 44.5 Million).",
      "Located in Middle East; official currency: Iraqi Dinar (IQD, ع.د)."
    ],
    "funFact": "Official title: Republic of Iraq • Population: 44.5 Million • Language: Arabic & Kurdish.",
    "examPoints": "Mesopotamian heartland (Tigris and Euphrates rivers); 5th largest proven crude oil reserves globally."
  },
  {
    "id": "ie",
    "name": "Ireland",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Dublin",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Cliffs of Moher & Trinity College Long Room",
      "icon": "fa-mountain",
      "desc": "214-meter rugged Atlantic sea cliffs and Dublin's historic library housing the Book of Kells."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Irish, English; active member of UN, EU, OECD.",
      "Its national capital city is Dublin (Population: 5.2 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Ireland • Population: 5.2 M • Language: Irish, English.",
    "examPoints": "Ireland is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "il",
    "name": "Israel",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇮🇱",
    "capital": "Jerusalem (disputed / Tel Aviv recognized by UN)",
    "currency": "Israeli New Shekel (ILS, ₪)",
    "landmark": {
      "name": "Historic Capital District of Jerusalem (disputed / Tel Aviv recognized by UN)",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic (Knesset)) and premier national cultural monuments in Middle East."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Lebanon",
        "Syria",
        "Jordan",
        "Egypt"
      ],
      "coastline": "Borders Lebanon, Syria, Jordan, Egypt"
    },
    "clues": [
      "Technological and military power in Middle East; Abraham Accords signatory; central party to Palestine conflict.",
      "Governed as a Unitary Parliamentary Republic (Knesset); official language(s): Hebrew; active member of UN, OECD, WTO.",
      "Its national capital city is Jerusalem (disputed / Tel Aviv recognized by UN) (Population: 9.8 Million).",
      "Located in Middle East; official currency: Israeli New Shekel (ILS, ₪)."
    ],
    "funFact": "Official title: State of Israel • Population: 9.8 Million • Language: Hebrew.",
    "examPoints": "Technological and military power in Middle East; Abraham Accords signatory; central party to Palestine conflict."
  },
  {
    "id": "it",
    "name": "Italy",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇮🇹",
    "capital": "Rome",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Historic Capital District of Rome",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Southern Europe."
    },
    "mapOutline": {
      "shape": "Located in Southern Europe (Europe), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "France",
        "Switzerland",
        "Austria",
        "Slovenia"
      ],
      "coastline": "Borders France, Switzerland, Austria, Slovenia"
    },
    "clues": [
      "Mediterranean peninsula; host to UN Food & Agriculture Organization (FAO) in Rome; encloses Vatican City.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Italian; active member of UN, EU, NATO, G7, G20.",
      "Its national capital city is Rome (Population: 58.9 Million).",
      "Located in Southern Europe; official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: Italian Republic • Population: 58.9 Million • Language: Italian.",
    "examPoints": "Mediterranean peninsula; host to UN Food & Agriculture Organization (FAO) in Rome; encloses Vatican City."
  },
  {
    "id": "ci",
    "name": "Ivory Coast",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Yamoussoukro",
    "currency": "West African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Yamoussoukro",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): French; active member of UN, AU, ECOWAS, OIC.",
      "Its national capital city is Yamoussoukro (Population: 29 M).",
      "Located in Africa; official currency: West African CFA Franc."
    ],
    "funFact": "Official title: Ivory Coast • Population: 29 M • Language: French.",
    "examPoints": "Ivory Coast is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "jm",
    "name": "Jamaica",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Kingston",
    "currency": "Jamaican Dollar",
    "landmark": {
      "name": "Historic Capital District of Kingston",
      "icon": "fa-landmark",
      "desc": "Seat of government (Parliamentary Constitutional Monarchy) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Parliamentary Constitutional Monarchy; official language(s): English; active member of UN, Commonwealth, CARICOM.",
      "Its national capital city is Kingston (Population: 2.8 M).",
      "Located in North America; official currency: Jamaican Dollar."
    ],
    "funFact": "Official title: Jamaica • Population: 2.8 M • Language: English.",
    "examPoints": "Jamaica is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "jp",
    "name": "Japan",
    "continent": "Asia",
    "region": "East Asia",
    "flag": "🇯🇵",
    "capital": "Tokyo",
    "currency": "Japanese Yen (JPY, ¥)",
    "landmark": {
      "name": "Historic Capital District of Tokyo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Constitutional Monarchy) and premier national cultural monuments in East Asia."
    },
    "mapOutline": {
      "shape": "Located in East Asia (Asia), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "South Korea (Maritime)",
        "Russia (Maritime)",
        "China (Maritime)"
      ],
      "coastline": "Borders South Korea (Maritime), Russia (Maritime), China (Maritime)"
    },
    "clues": [
      "World's 4th largest economy; advanced robotics & technological leader; anchor of US Pacific alliance.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): this countryese; active member of UN, G7, G20, OECD, QUAD.",
      "Its national capital city is Tokyo (Population: 124.5 Million).",
      "Located in East Asia; official currency: Japanese Yen (JPY, ¥)."
    ],
    "funFact": "Official title: Japan • Population: 124.5 Million • Language: Japanese.",
    "examPoints": "World's 4th largest economy; advanced robotics & technological leader; anchor of US Pacific alliance."
  },
  {
    "id": "jo",
    "name": "Jordan",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇯🇴",
    "capital": "Amman",
    "currency": "Jordanian Dinar (JOD, د.ا)",
    "landmark": {
      "name": "Ancient Rose-Red City of Petra",
      "icon": "fa-monument",
      "desc": "Nabataean archaeological wonder carved directly into rose-colored sandstone cliffs (New7Wonders)."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Syria",
        "Iraq",
        "Saudi Arabia",
        "Israel"
      ],
      "coastline": "Borders Syria, Iraq, Saudi Arabia, Israel"
    },
    "clues": [
      "Strategic buffer state in Levant; custodian of Jerusalem holy sites (Waqf); Aqaba port on Red Sea.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Arabic; active member of UN, OIC, Arab League, WTO.",
      "Its national capital city is Amman (Population: 11.3 Million).",
      "Located in Middle East; official currency: Jordanian Dinar (JOD, د.ا)."
    ],
    "funFact": "Official title: Hashemite Kingdom of Jordan • Population: 11.3 Million • Language: Arabic.",
    "examPoints": "Strategic buffer state in Levant; custodian of Jerusalem holy sites (Waqf); Aqaba port on Red Sea."
  },
  {
    "id": "kz",
    "name": "Kazakhstan",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇰🇿",
    "capital": "Astana",
    "currency": "Kazakhstani Tenge (KZT, ₸)",
    "landmark": {
      "name": "Bayterek Tower (Astana) & Charyn Canyon",
      "icon": "fa-tower-observation",
      "desc": "97-meter futuristic monument symbolizing the national myth of Samruk in the planned capital."
    },
    "mapOutline": {
      "shape": "Located in Central Asia (Asia), sharing land frontiers with 5 neighboring countries.",
      "borders": [
        "Russia",
        "China",
        "Kyrgyzstan",
        "Uzbekistan",
        "Turkmenistan"
      ],
      "coastline": "Borders Russia, China, Kyrgyzstan, Uzbekistan"
    },
    "clues": [
      "World's largest landlocked country; leading global producer of uranium; major oil exporter via Caspian pipeline.",
      "Governed as a Unitary Presidential Republic; official language(s): national & Russian; active member of UN, SCO, CSTO, EAEU, OIC.",
      "Its national capital city is Astana (Population: 20.1 Million).",
      "Located in Central Asia; official currency: Kazakhstani Tenge (KZT, ₸)."
    ],
    "funFact": "Official title: Republic of Kazakhstan • Population: 20.1 Million • Language: Kazakh & Russian.",
    "examPoints": "World's largest landlocked country; leading global producer of uranium; major oil exporter via Caspian pipeline."
  },
  {
    "id": "ke",
    "name": "Kenya",
    "continent": "Africa",
    "region": "East Africa",
    "flag": "🇰🇪",
    "capital": "Nairobi",
    "currency": "Kenyan Shilling (KES, KSh)",
    "landmark": {
      "name": "Historic Capital District of Nairobi",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in East Africa."
    },
    "mapOutline": {
      "shape": "Located in East Africa (Africa), sharing land frontiers with 5 neighboring countries.",
      "borders": [
        "Ethiopia",
        "Somalia",
        "Tanzania",
        "Uganda",
        "South Sudan"
      ],
      "coastline": "Borders Ethiopia, Somalia, Tanzania, Uganda"
    },
    "clues": [
      "East African economic and logistics hub; Nairobi hosts UNEP (only UN agency HQ in Global South); Port of Mombasa.",
      "Governed as a Unitary Presidential Republic; official language(s): English & Swahili; active member of UN (UNEP & UN-Habitat HQ in Nairobi), African Union, EAC, Commonwealth.",
      "Its national capital city is Nairobi (Population: 55.1 Million).",
      "Located in East Africa; official currency: Kenyan Shilling (KES, KSh)."
    ],
    "funFact": "Official title: Republic of Kenya • Population: 55.1 Million • Language: English & Swahili.",
    "examPoints": "East African economic and logistics hub; Nairobi hosts UNEP (only UN agency HQ in Global South); Port of Mombasa."
  },
  {
    "id": "ki",
    "name": "Kiribati",
    "continent": "Oceania",
    "region": "Micronesia / Polynesia (Central Pacific)",
    "flag": "🇰🇮",
    "capital": "South Tarawa",
    "currency": "Australian Dollar (AUD) / Kiribati Dollar",
    "landmark": {
      "name": "Phoenix Islands Protected Area (PIPA)",
      "icon": "fa-water",
      "desc": "One of Earth's largest UNESCO marine protected coral wildernesses; Kiritimati (Christmas Island) welcomes the New Year first."
    },
    "mapOutline": {
      "shape": "1,143 km across Gilbert, Phoenix, and Line Islands in Micronesia / Polynesia (Central Pacific) (Oceania).",
      "borders": [
        "Island Republic (33 coral atolls straddling both the Equator and 180th Meridian)"
      ],
      "coastline": "1,143 km across Gilbert, Phoenix, and Line Islands"
    },
    "clues": [
      "The ONLY country in the world situated simultaneously in all four hemispheres (Northern, Southern, Eastern, and Western); frontline climate-vulnerable atoll nation.",
      "One of Earth's largest UNESCO marine protected coral wildernesses; Kiritimati (Christmas Island) welcomes the New Year first.",
      "Its capital is South Tarawa and official language(s): English, Gilbertese.",
      "Situated in Micronesia / Polynesia (Central Pacific) using Australian Dollar (AUD) / Kiribati Dollar."
    ],
    "funFact": "One of Earth's largest UNESCO marine protected coral wildernesses; Kiritimati (Christmas Island) welcomes the New Year first.",
    "examPoints": "The ONLY country in the world situated simultaneously in all four hemispheres (Northern, Southern, Eastern, and Western); frontline climate-vulnerable atoll nation."
  },
  {
    "id": "kw",
    "name": "Kuwait",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇰🇼",
    "capital": "Kuwait City",
    "currency": "Kuwaiti Dinar (KWD, د.ك - highest valued currency unit in world)",
    "landmark": {
      "name": "this country Towers",
      "icon": "fa-tower-observation",
      "desc": "Trio of slender modernist concrete towers overlooking the Persian Gulf, inaugurated in 1979."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Iraq",
        "Saudi Arabia"
      ],
      "coastline": "Borders Iraq, Saudi Arabia"
    },
    "clues": [
      "Possesses ~6-7% of global oil reserves; highest currency value globally; founding OPEC member.",
      "Governed as a Unitary Constitutional Monarchy; official language(s): Arabic; active member of UN, OPEC, GCC, OIC, Arab League.",
      "Its national capital city is Kuwait City (Population: 4.3 Million).",
      "Located in Middle East; official currency: Kuwaiti Dinar (KWD, د.ك - highest valued currency unit in world)."
    ],
    "funFact": "Official title: State of Kuwait • Population: 4.3 Million • Language: Arabic.",
    "examPoints": "Possesses ~6-7% of global oil reserves; highest currency value globally; founding OPEC member."
  },
  {
    "id": "kg",
    "name": "Kyrgyzstan",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇰🇬",
    "capital": "Bishkek",
    "currency": "Kyrgyzstani Som (KGS, с)",
    "landmark": {
      "name": "Issyk-Kul Alpine Lake & Burana Tower",
      "icon": "fa-water",
      "desc": "World's second-largest high-altitude alpine lake (never freezes) in the Tian Shan mountains."
    },
    "mapOutline": {
      "shape": "Located in Central Asia (Asia), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Kazakhstan",
        "China",
        "Tajikistan",
        "Uzbekistan"
      ],
      "coastline": "Borders Kazakhstan, China, Tajikistan, Uzbekistan"
    },
    "clues": [
      "Mountainous Tian Shan nation; supplier of CASA-1000 hydropower transmission project to Pakistan; gold mining (Kumtor).",
      "Governed as a Unitary Presidential Republic; official language(s): national & Russian; active member of UN, SCO, CSTO, EAEU, OIC.",
      "Its national capital city is Bishkek (Population: 7.1 Million).",
      "Located in Central Asia; official currency: Kyrgyzstani Som (KGS, с)."
    ],
    "funFact": "Official title: Kyrgyz Republic • Population: 7.1 Million • Language: Kyrgyz & Russian.",
    "examPoints": "Mountainous Tian Shan nation; supplier of CASA-1000 hydropower transmission project to Pakistan; gold mining (Kumtor)."
  },
  {
    "id": "la",
    "name": "Laos",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇱🇦",
    "capital": "Vientiane",
    "currency": "Lao Kip (LAK, ₭)",
    "landmark": {
      "name": "Historic Capital District of Vientiane",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary One-Party Socialist Republic) and premier national cultural monuments in Southeast Asia."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 5 neighboring countries.",
      "borders": [
        "China",
        "Myanmar",
        "Thailand",
        "Cambodia",
        "Vietnam"
      ],
      "coastline": "Borders China, Myanmar, Thailand, Cambodia"
    },
    "clues": [
      "Only landlocked country in Southeast Asia; 'Battery of Southeast Asia' through hydropower; high-speed railway to Kunming.",
      "Governed as a Unitary One-Party Socialist Republic; official language(s): Lao; active member of UN, ASEAN.",
      "Its national capital city is Vientiane (Population: 7.6 Million).",
      "Located in Southeast Asia; official currency: Lao Kip (LAK, ₭)."
    ],
    "funFact": "Official title: Lao People's Democratic Republic • Population: 7.6 Million • Language: Lao.",
    "examPoints": "Only landlocked country in Southeast Asia; 'Battery of Southeast Asia' through hydropower; high-speed railway to Kunming."
  },
  {
    "id": "lv",
    "name": "Latvia",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Riga",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Riga",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryn; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Riga (Population: 1.8 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Latvia • Population: 1.8 M • Language: Latvian.",
    "examPoints": "Latvia is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "lb",
    "name": "Lebanon",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇱🇧",
    "capital": "Beirut",
    "currency": "Lebanese Pound (LBP, ل.ل)",
    "landmark": {
      "name": "Baalbek Roman Temples & Pigeon Rocks (Raouché)",
      "icon": "fa-columns",
      "desc": "Colossal Roman temple complex of Jupiter and Bacchus in the Bekaa Valley."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Syria",
        "Israel"
      ],
      "coastline": "Borders Syria, Israel"
    },
    "clues": [
      "Complex confessional political system; Mediterranean maritime outlet; Blue Line border with Israel.",
      "Governed as a Unitary Confessional Parliamentary Republic; official language(s): Arabic; active member of UN, Arab League, OIC, Francophonie.",
      "Its national capital city is Beirut (Population: 5.5 Million).",
      "Located in Middle East; official currency: Lebanese Pound (LBP, ل.ل)."
    ],
    "funFact": "Official title: Lebanese Republic • Population: 5.5 Million • Language: Arabic.",
    "examPoints": "Complex confessional political system; Mediterranean maritime outlet; Blue Line border with Israel."
  },
  {
    "id": "ls",
    "name": "Lesotho",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Maseru",
    "currency": "Lesotho Loti",
    "landmark": {
      "name": "Historic Capital District of Maseru",
      "icon": "fa-landmark",
      "desc": "Seat of government (Parliamentary Constitutional Monarchy) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Parliamentary Constitutional Monarchy; official language(s): Sesotho, English; active member of UN, AU, Commonwealth, SADC.",
      "Its national capital city is Maseru (Population: 2.3 M).",
      "Located in Africa; official currency: Lesotho Loti."
    ],
    "funFact": "Official title: Lesotho • Population: 2.3 M • Language: Sesotho, English.",
    "examPoints": "Lesotho is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "lr",
    "name": "Liberia",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Monrovia",
    "currency": "Liberian Dollar",
    "landmark": {
      "name": "Historic Capital District of Monrovia",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): English; active member of UN, AU, ECOWAS.",
      "Its national capital city is Monrovia (Population: 5.4 M).",
      "Located in Africa; official currency: Liberian Dollar."
    ],
    "funFact": "Official title: Liberia • Population: 5.4 M • Language: English.",
    "examPoints": "Liberia is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "ly",
    "name": "Libya",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Tripoli",
    "currency": "Libyan Dinar (LYD)",
    "landmark": {
      "name": "Historic Capital District of Tripoli",
      "icon": "fa-landmark",
      "desc": "Seat of government (Transitional Parliamentary Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Transitional Parliamentary Republic; official language(s): Arabic; active member of UN, OPEC, AU, Arab League, OIC.",
      "Its national capital city is Tripoli (Population: 6.9 M).",
      "Located in Africa; official currency: Libyan Dinar (LYD)."
    ],
    "funFact": "Official title: Libya • Population: 6.9 M • Language: Arabic.",
    "examPoints": "Libya is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "li",
    "name": "Liechtenstein",
    "continent": "Europe",
    "region": "Central / Western Europe (Alps)",
    "flag": "🇱🇮",
    "capital": "Vaduz",
    "currency": "Swiss Franc (CHF)",
    "landmark": {
      "name": "Vaduz Castle",
      "icon": "fa-chess-rook",
      "desc": "12th-century hilltop Alpine palace overlooking the capital, serving as official residence of the reigning Prince."
    },
    "mapOutline": {
      "shape": "Doubly landlocked Alpine principality along the Upper Rhine in Central / Western Europe (Alps) (Europe).",
      "borders": [
        "Switzerland",
        "Austria"
      ],
      "coastline": "Doubly landlocked Alpine principality along the Upper Rhine"
    },
    "clues": [
      "Along with Uzbekistan, one of the ONLY two doubly landlocked countries on Earth (surrounded exclusively by landlocked neighbors); member of EFTA and Schengen.",
      "12th-century hilltop Alpine palace overlooking the capital, serving as official residence of the reigning Prince.",
      "Its capital is Vaduz and official language(s): German.",
      "Situated in Central / Western Europe (Alps) using Swiss Franc (CHF)."
    ],
    "funFact": "12th-century hilltop Alpine palace overlooking the capital, serving as official residence of the reigning Prince.",
    "examPoints": "Along with Uzbekistan, one of the ONLY two doubly landlocked countries on Earth (surrounded exclusively by landlocked neighbors); member of EFTA and Schengen."
  },
  {
    "id": "lt",
    "name": "Lithuania",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Vilnius",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Vilnius",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): this countryn; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Vilnius (Population: 2.8 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Lithuania • Population: 2.8 M • Language: Lithuanian.",
    "examPoints": "Lithuania is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "lu",
    "name": "Luxembourg",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Luxembourg City",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Luxembourg City",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Constitutional Monarchy) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): this countryish, French, German; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Luxembourg City (Population: 660,000).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Luxembourg • Population: 660,000 • Language: Luxembourgish, French, German.",
    "examPoints": "Luxembourg is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "mg",
    "name": "Madagascar",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Antananarivo",
    "currency": "Malagasy Ariary",
    "landmark": {
      "name": "Historic Capital District of Antananarivo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Malagasy, French; active member of UN, AU, SADC.",
      "Its national capital city is Antananarivo (Population: 30 M).",
      "Located in Africa; official currency: Malagasy Ariary."
    ],
    "funFact": "Official title: Madagascar • Population: 30 M • Language: Malagasy, French.",
    "examPoints": "Madagascar is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "mw",
    "name": "Malawi",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Lilongwe",
    "currency": "Malawian Kwacha",
    "landmark": {
      "name": "Historic Capital District of Lilongwe",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): English, Chichewa; active member of UN, AU, Commonwealth, SADC.",
      "Its national capital city is Lilongwe (Population: 20.9 M).",
      "Located in Africa; official currency: Malawian Kwacha."
    ],
    "funFact": "Official title: Malawi • Population: 20.9 M • Language: English, Chichewa.",
    "examPoints": "Malawi is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "my",
    "name": "Malaysia",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇲🇾",
    "capital": "Kuala Lumpur (Putrajaya Admin)",
    "currency": "Malaysian Ringgit (MYR, RM)",
    "landmark": {
      "name": "Petronas Twin Towers (Kuala Lumpur)",
      "icon": "fa-building",
      "desc": "451.9-meter twin skyscrapers linked by a double-deck skybridge—the tallest twin towers on Earth."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Thailand",
        "Indonesia",
        "Brunei",
        "Singapore"
      ],
      "coastline": "Borders Thailand, Indonesia, Brunei, Singapore"
    },
    "clues": [
      "Littoral state on Strait of Malacca; semiconductor packaging hub; global Islamic banking leader.",
      "Governed as a Federal Parliamentary Elective Constitutional Monarchy; official language(s): Malay (Bahasa Melayu); active member of UN, ASEAN, OIC, Commonwealth, CPTPP.",
      "Its national capital city is Kuala Lumpur (Putrajaya Admin) (Population: 34.3 Million).",
      "Located in Southeast Asia; official currency: Malaysian Ringgit (MYR, RM)."
    ],
    "funFact": "Official title: Malaysia • Population: 34.3 Million • Language: Malay (Bahasa Melayu).",
    "examPoints": "Littoral state on Strait of Malacca; semiconductor packaging hub; global Islamic banking leader."
  },
  {
    "id": "mv",
    "name": "Maldives",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇲🇻",
    "capital": "Malé",
    "currency": "Maldivian Rufiyaa (MVR, Rf)",
    "landmark": {
      "name": "Malé Friday Mosque & Baa Atoll Biosphere",
      "icon": "fa-water",
      "desc": "17th-century intricately carved coral-stone mosque and UNESCO marine manta-ray biosphere reserve."
    },
    "mapOutline": {
      "shape": "Located in South Asia (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "India (Maritime)",
        "Sri Lanka (Maritime)"
      ],
      "coastline": "Borders India (Maritime), Sri Lanka (Maritime)"
    },
    "clues": [
      "Indian Ocean archipelago astride vital maritime chokepoints; frontline state for climate change and sea-level rise.",
      "Governed as a Unitary Presidential Republic; official language(s): Dhivehi; active member of UN, SAARC, OIC, Commonwealth.",
      "Its national capital city is Malé (Population: 520,000).",
      "Located in South Asia; official currency: Maldivian Rufiyaa (MVR, Rf)."
    ],
    "funFact": "Official title: Republic of Maldives • Population: 520,000 • Language: Dhivehi.",
    "examPoints": "Indian Ocean archipelago astride vital maritime chokepoints; frontline state for climate change and sea-level rise."
  },
  {
    "id": "ml",
    "name": "Mali",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Bamako",
    "currency": "West African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Bamako",
      "icon": "fa-landmark",
      "desc": "Seat of government (Transitional Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Transitional Republic; official language(s): Bambara (National), French; active member of UN, AU, OIC.",
      "Its national capital city is Bamako (Population: 23 M).",
      "Located in Africa; official currency: West African CFA Franc."
    ],
    "funFact": "Official title: Mali • Population: 23 M • Language: Bambara (National), French.",
    "examPoints": "Mali is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "mt",
    "name": "Malta",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Valletta",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Valletta",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Maltese, English; active member of UN, EU, Commonwealth.",
      "Its national capital city is Valletta (Population: 530,000).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Malta • Population: 530,000 • Language: Maltese, English.",
    "examPoints": "Malta is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "mh",
    "name": "Marshall Islands",
    "continent": "Oceania",
    "region": "Micronesia (Central Pacific)",
    "flag": "🇲🇭",
    "capital": "Majuro",
    "currency": "United States Dollar (USD)",
    "landmark": {
      "name": "Bikini Atoll UNESCO Historic Site",
      "icon": "fa-radiation",
      "desc": "UNESCO site preserving Cold War nuclear-test shipwrecks and symbolizing global nuclear disarmament advocacy."
    },
    "mapOutline": {
      "shape": "370 km of low-lying Pacific coral atolls in Micronesia (Central Pacific) (Oceania).",
      "borders": [
        "Island Republic (29 coral atolls in two parallel chains: Ratak & Ralik)"
      ],
      "coastline": "370 km of low-lying Pacific coral atolls"
    },
    "clues": [
      "World's second-largest maritime ship registry by tonnage; bound to the US via a Compact of Free Association (COFA).",
      "UNESCO site preserving Cold War nuclear-test shipwrecks and symbolizing global nuclear disarmament advocacy.",
      "Its capital is Majuro and official language(s): Marshallese, English.",
      "Situated in Micronesia (Central Pacific) using United States Dollar (USD)."
    ],
    "funFact": "UNESCO site preserving Cold War nuclear-test shipwrecks and symbolizing global nuclear disarmament advocacy.",
    "examPoints": "World's second-largest maritime ship registry by tonnage; bound to the US via a Compact of Free Association (COFA)."
  },
  {
    "id": "mr",
    "name": "Mauritania",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Nouakchott",
    "currency": "Mauritanian Ouguiya",
    "landmark": {
      "name": "Historic Capital District of Nouakchott",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Arabic; active member of UN, AU, Arab League, OIC.",
      "Its national capital city is Nouakchott (Population: 4.9 M).",
      "Located in Africa; official currency: Mauritanian Ouguiya."
    ],
    "funFact": "Official title: Mauritania • Population: 4.9 M • Language: Arabic.",
    "examPoints": "Mauritania is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "mu",
    "name": "Mauritius",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Port Louis",
    "currency": "Mauritian Rupee",
    "landmark": {
      "name": "Historic Capital District of Port Louis",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Parliamentary Republic; official language(s): English, French; active member of UN, AU, Commonwealth, SADC.",
      "Its national capital city is Port Louis (Population: 1.3 M).",
      "Located in Africa; official currency: Mauritian Rupee."
    ],
    "funFact": "Official title: Mauritius • Population: 1.3 M • Language: English, French.",
    "examPoints": "Mauritius is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "mx",
    "name": "Mexico",
    "continent": "North America",
    "region": "North America",
    "flag": "🇲🇽",
    "capital": "Mexico City",
    "currency": "Mexican Peso (MXN, $)",
    "landmark": {
      "name": "Historic Capital District of Mexico City",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "Located in North America (North America), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "United States",
        "Guatemala",
        "Belize"
      ],
      "coastline": "Borders United States, Guatemala, Belize"
    },
    "clues": [
      "Top trading partner of United States; primary nearshoring destination; largest Spanish-speaking nation.",
      "Governed as a Federal Presidential Republic; official language(s): Spanish; active member of UN, G20, OECD, USMCA, OAS.",
      "Its national capital city is Mexico City (Population: 129.5 Million).",
      "Located in North America; official currency: Mexican Peso (MXN, $)."
    ],
    "funFact": "Official title: United Mexican States • Population: 129.5 Million • Language: Spanish.",
    "examPoints": "Top trading partner of United States; primary nearshoring destination; largest Spanish-speaking nation."
  },
  {
    "id": "fm",
    "name": "Micronesia",
    "continent": "Oceania",
    "region": "Micronesia (Western Pacific)",
    "flag": "🇫🇲",
    "capital": "Palikir",
    "currency": "United States Dollar (USD)",
    "landmark": {
      "name": "Nan Madol Ceremonial Ruins",
      "icon": "fa-monument",
      "desc": "UNESCO World Heritage 'Venice of the Pacific' built of basalt stone logs atop coral reefs in Pohnpei."
    },
    "mapOutline": {
      "shape": "Sprawls across 2.6 million sq km of Pacific Ocean EEZ in Micronesia (Western Pacific) (Oceania).",
      "borders": [
        "Island Federation (607 islands across Yap, Chuuk, Pohnpei, and Kosrae)"
      ],
      "coastline": "Sprawls across 2.6 million sq km of Pacific Ocean EEZ"
    },
    "clues": [
      "Maintains a Compact of Free Association (COFA) with the United States across strategic western Pacific sea lanes.",
      "UNESCO World Heritage 'Venice of the Pacific' built of basalt stone logs atop coral reefs in Pohnpei.",
      "Its capital is Palikir and official language(s): English.",
      "Situated in Micronesia (Western Pacific) using United States Dollar (USD)."
    ],
    "funFact": "UNESCO World Heritage 'Venice of the Pacific' built of basalt stone logs atop coral reefs in Pohnpei.",
    "examPoints": "Maintains a Compact of Free Association (COFA) with the United States across strategic western Pacific sea lanes."
  },
  {
    "id": "md",
    "name": "Moldova",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Chișinău",
    "currency": "Moldovan Leu",
    "landmark": {
      "name": "Historic Capital District of Chișinău",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Romanian; active member of UN, Council of Europe.",
      "Its national capital city is Chișinău (Population: 2.5 M).",
      "Located in Europe; official currency: Moldovan Leu."
    ],
    "funFact": "Official title: Moldova • Population: 2.5 M • Language: Romanian.",
    "examPoints": "Moldova is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "mc",
    "name": "Monaco",
    "continent": "Europe",
    "region": "Western Europe (French Riviera)",
    "flag": "🇲🇨",
    "capital": "Monaco",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Prince's Palace of this country & Monte Carlo Harbor",
      "icon": "fa-crown",
      "desc": "Genoese-founded Grimaldi royal fortress (since 1297) and iconic Formula 1 street circuit harbor."
    },
    "mapOutline": {
      "shape": "4.1 km along the Mediterranean Côte d'Azur in Western Europe (French Riviera) (Europe).",
      "borders": [
        "France"
      ],
      "coastline": "4.1 km along the Mediterranean Côte d'Azur"
    },
    "clues": [
      "World's second-smallest sovereign country by area (2.02 sq km, after Vatican City) and the most densely populated sovereign state on Earth.",
      "Genoese-founded Grimaldi royal fortress (since 1297) and iconic Formula 1 street circuit harbor.",
      "Its capital is Monaco and official language(s): French.",
      "Situated in Western Europe (French Riviera) using Euro (EUR, €)."
    ],
    "funFact": "Genoese-founded Grimaldi royal fortress (since 1297) and iconic Formula 1 street circuit harbor.",
    "examPoints": "World's second-smallest sovereign country by area (2.02 sq km, after Vatican City) and the most densely populated sovereign state on Earth."
  },
  {
    "id": "mn",
    "name": "Mongolia",
    "continent": "Asia",
    "region": "East Asia",
    "flag": "🇲🇳",
    "capital": "Ulaanbaatar",
    "currency": "Mongolian Tögrög (MNT, ₮)",
    "landmark": {
      "name": "Genghis Khan Equestrian Statue & Gobi Desert",
      "icon": "fa-horse",
      "desc": "40-meter stainless-steel statue on the banks of the Tuul River east of Ulaanbaatar."
    },
    "mapOutline": {
      "shape": "Located in East Asia (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "China",
        "Russia"
      ],
      "coastline": "Borders China, Russia"
    },
    "clues": [
      "Landlocked resource-rich buffer state between Russia and China (Oyu Tolgoi copper-gold deposit).",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): this countryn; active member of UN, SCO (Observer), WTO.",
      "Its national capital city is Ulaanbaatar (Population: 3.4 Million).",
      "Located in East Asia; official currency: Mongolian Tögrög (MNT, ₮)."
    ],
    "funFact": "Official title: Mongolia • Population: 3.4 Million • Language: Mongolian.",
    "examPoints": "Landlocked resource-rich buffer state between Russia and China (Oyu Tolgoi copper-gold deposit)."
  },
  {
    "id": "me",
    "name": "Montenegro",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Podgorica",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Podgorica",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Montenegrin; active member of UN, NATO.",
      "Its national capital city is Podgorica (Population: 620,000).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Montenegro • Population: 620,000 • Language: Montenegrin.",
    "examPoints": "Montenegro is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "ma",
    "name": "Morocco",
    "continent": "Africa",
    "region": "North Africa",
    "flag": "🇲🇦",
    "capital": "Rabat",
    "currency": "Moroccan Dirham (MAD, د.م.)",
    "landmark": {
      "name": "Hassan II Mosque & Jemaa el-Fnaa (Marrakesh)",
      "icon": "fa-mosque",
      "desc": "Casablanca's Atlantic-edge mosque featuring a 210m minaret and Marrakesh's UNESCO medina."
    },
    "mapOutline": {
      "shape": "Located in North Africa (Africa), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "Algeria",
        "Mauritania",
        "Spain (Ceuta & Melilla borders)"
      ],
      "coastline": "Borders Algeria, Mauritania, Spain (Ceuta & Melilla borders)"
    },
    "clues": [
      "World's largest reserves of phosphate rock (critical for global fertilizer); overlooks Strait of Gibraltar; Port of Tanger Med.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Arabic & Standard Moroccan Berber; active member of UN, African Union, Arab League, OIC.",
      "Its national capital city is Rabat (Population: 37.8 Million).",
      "Located in North Africa; official currency: Moroccan Dirham (MAD, د.م.)."
    ],
    "funFact": "Official title: Kingdom of Morocco • Population: 37.8 Million • Language: Arabic & Standard Moroccan Berber.",
    "examPoints": "World's largest reserves of phosphate rock (critical for global fertilizer); overlooks Strait of Gibraltar; Port of Tanger Med."
  },
  {
    "id": "mz",
    "name": "Mozambique",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Maputo",
    "currency": "Mozambican Metical",
    "landmark": {
      "name": "Historic Capital District of Maputo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Portuguese; active member of UN, AU, Commonwealth, OIC, SADC.",
      "Its national capital city is Maputo (Population: 33 M).",
      "Located in Africa; official currency: Mozambican Metical."
    ],
    "funFact": "Official title: Mozambique • Population: 33 M • Language: Portuguese.",
    "examPoints": "Mozambique is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "mm",
    "name": "Myanmar",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇲🇲",
    "capital": "Naypyidaw",
    "currency": "Myanmar Kyat (MMK, K)",
    "landmark": {
      "name": "Bagan Archaeological Zone & Shwedagon Pagoda",
      "icon": "fa-vihara",
      "desc": "Sacred gilded 99-meter stupa in Yangon and plains of over 2,000 ancient Buddhist temples."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 5 neighboring countries.",
      "borders": [
        "Bangladesh",
        "India",
        "China",
        "Laos",
        "Thailand"
      ],
      "coastline": "Borders Bangladesh, India, China, Laos"
    },
    "clues": [
      "Indian Ocean access for China (Kyaukphyu Port and pipelines); critical natural gas and rare earths producer.",
      "Governed as a Unitary Parliamentary Republic (Military Junta / SAC); official language(s): Burmese; active member of UN, ASEAN, BIMSTEC.",
      "Its national capital city is Naypyidaw (Population: 54.5 Million).",
      "Located in Southeast Asia; official currency: Myanmar Kyat (MMK, K)."
    ],
    "funFact": "Official title: Republic of the Union of Myanmar • Population: 54.5 Million • Language: Burmese.",
    "examPoints": "Indian Ocean access for China (Kyaukphyu Port and pipelines); critical natural gas and rare earths producer."
  },
  {
    "id": "na",
    "name": "Namibia",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Windhoek",
    "currency": "Namibian Dollar",
    "landmark": {
      "name": "Historic Capital District of Windhoek",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): English; active member of UN, AU, Commonwealth, SADC.",
      "Its national capital city is Windhoek (Population: 2.6 M).",
      "Located in Africa; official currency: Namibian Dollar."
    ],
    "funFact": "Official title: Namibia • Population: 2.6 M • Language: English.",
    "examPoints": "Namibia is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "nr",
    "name": "Nauru",
    "continent": "Oceania",
    "region": "Micronesia (Central Pacific)",
    "flag": "🇳🇷",
    "capital": "Yaren (de facto government district)",
    "currency": "Australian Dollar (AUD)",
    "landmark": {
      "name": "Command Ridge & Buada Lagoon",
      "icon": "fa-mountain",
      "desc": "Lush freshwater interior lagoon surrounded by historic phosphate-mined coral pinnacles."
    },
    "mapOutline": {
      "shape": "30 km oval island ringed by a fringing coral reef in Micronesia (Central Pacific) (Oceania).",
      "borders": [
        "Single raised coral island just south of the Equator"
      ],
      "coastline": "30 km oval island ringed by a fringing coral reef"
    },
    "clues": [
      "World's smallest island nation and third-smallest country overall (21 sq km); uniquely has NO official de jure capital city (parliament sits in Yaren).",
      "Lush freshwater interior lagoon surrounded by historic phosphate-mined coral pinnacles.",
      "Its capital is Yaren (de facto government district) and official language(s): Nauruan, English.",
      "Situated in Micronesia (Central Pacific) using Australian Dollar (AUD)."
    ],
    "funFact": "Lush freshwater interior lagoon surrounded by historic phosphate-mined coral pinnacles.",
    "examPoints": "World's smallest island nation and third-smallest country overall (21 sq km); uniquely has NO official de jure capital city (parliament sits in Yaren)."
  },
  {
    "id": "np",
    "name": "Nepal",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇳🇵",
    "capital": "Kathmandu",
    "currency": "Nepalese Rupee (NPR, ₨)",
    "landmark": {
      "name": "Mount Everest (Sagarmatha) & Pashupatinath",
      "icon": "fa-mountain",
      "desc": "Earth's highest peak at 8,848.86 meters straddling the Himalayan crest and Kathmandu's UNESCO stupas."
    },
    "mapOutline": {
      "shape": "Located in South Asia (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "China",
        "India"
      ],
      "coastline": "Borders China, India"
    },
    "clues": [
      "Himalayan buffer state between China and India; home to Mount Everest (8,848.86m); SAARC headquarters host.",
      "Governed as a Federal Parliamentary Republic; official language(s): this countryi; active member of UN, SAARC (Secretariat in Kathmandu), BIMSTEC, NAM.",
      "Its national capital city is Kathmandu (Population: 30.9 Million).",
      "Located in South Asia; official currency: Nepalese Rupee (NPR, ₨)."
    ],
    "funFact": "Official title: Federal Democratic Republic of Nepal • Population: 30.9 Million • Language: Nepali.",
    "examPoints": "Himalayan buffer state between China and India; home to Mount Everest (8,848.86m); SAARC headquarters host."
  },
  {
    "id": "nl",
    "name": "Netherlands",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇳🇱",
    "capital": "Amsterdam (The Hague is seat of govt & ICJ)",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Historic Capital District of Amsterdam (The Hague is seat of govt & ICJ)",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Constitutional Monarchy) and premier national cultural monuments in Western Europe."
    },
    "mapOutline": {
      "shape": "Located in Western Europe (Europe), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Germany",
        "Belgium"
      ],
      "coastline": "Borders Germany, Belgium"
    },
    "clues": [
      "The Hague hosts International Court of Justice (ICJ) and ICC; Port of Rotterdam is Europe's largest seaport.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Dutch; active member of UN, EU, NATO, OECD, ICJ (The Hague).",
      "Its national capital city is Amsterdam (The Hague is seat of govt & ICJ) (Population: 17.9 Million).",
      "Located in Western Europe; official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: Kingdom of the Netherlands • Population: 17.9 Million • Language: Dutch.",
    "examPoints": "The Hague hosts International Court of Justice (ICJ) and ICC; Port of Rotterdam is Europe's largest seaport."
  },
  {
    "id": "nz",
    "name": "New Zealand",
    "continent": "Oceania",
    "region": "Polynesia",
    "flag": "🇳🇿",
    "capital": "Wellington",
    "currency": "New Zealand Dollar (NZD, NZ$)",
    "landmark": {
      "name": "Historic Capital District of Wellington",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Constitutional Monarchy) and premier national cultural monuments in Polynesia."
    },
    "mapOutline": {
      "shape": "Located in Polynesia (Oceania), sharing land frontiers with 1 neighboring country.",
      "borders": [
        "Australia (Maritime: Tasman Sea)"
      ],
      "coastline": "Borders Australia (Maritime: Tasman Sea)"
    },
    "clues": [
      "Leading dairy exporter; Five Eyes intelligence alliance member; Pacific island diplomacy leader.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): English & Māori; active member of UN, OECD, Five Eyes, Commonwealth, CPTPP.",
      "Its national capital city is Wellington (Population: 5.2 Million).",
      "Located in Polynesia; official currency: New Zealand Dollar (NZD, NZ$)."
    ],
    "funFact": "Official title: New Zealand • Population: 5.2 Million • Language: English & Māori.",
    "examPoints": "Leading dairy exporter; Five Eyes intelligence alliance member; Pacific island diplomacy leader."
  },
  {
    "id": "ni",
    "name": "Nicaragua",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Managua",
    "currency": "Nicaraguan Córdoba",
    "landmark": {
      "name": "Historic Capital District of Managua",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OAS.",
      "Its national capital city is Managua (Population: 7 M).",
      "Located in North America; official currency: Nicaraguan Córdoba."
    ],
    "funFact": "Official title: Nicaragua • Population: 7 M • Language: Spanish.",
    "examPoints": "Nicaragua is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "ne",
    "name": "Niger",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Niamey",
    "currency": "West African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Niamey",
      "icon": "fa-landmark",
      "desc": "Seat of government (Transitional Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Transitional Republic; official language(s): Hausa, French; active member of UN, AU, OIC.",
      "Its national capital city is Niamey (Population: 26 M).",
      "Located in Africa; official currency: West African CFA Franc."
    ],
    "funFact": "Official title: Niger • Population: 26 M • Language: Hausa, French.",
    "examPoints": "Niger is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "ng",
    "name": "Nigeria",
    "continent": "Africa",
    "region": "West Africa",
    "flag": "🇳🇬",
    "capital": "Abuja",
    "currency": "Nigerian Naira (NGN, ₦)",
    "landmark": {
      "name": "Historic Capital District of Abuja",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Presidential Republic) and premier national cultural monuments in West Africa."
    },
    "mapOutline": {
      "shape": "Located in West Africa (Africa), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Benin",
        "Niger",
        "Chad",
        "Cameroon"
      ],
      "coastline": "Borders Benin, Niger, Chad, Cameroon"
    },
    "clues": [
      "Most populous nation in Africa; largest oil producer in sub-Saharan Africa (national Delta); anchor of ECOWAS.",
      "Governed as a Federal Presidential Republic; official language(s): English; active member of UN, OPEC, African Union, ECOWAS, OIC.",
      "Its national capital city is Abuja (Population: 224 Million).",
      "Located in West Africa; official currency: Nigerian Naira (NGN, ₦)."
    ],
    "funFact": "Official title: Federal Republic of Nigeria • Population: 224 Million • Language: English.",
    "examPoints": "Most populous nation in Africa; largest oil producer in sub-Saharan Africa (Niger Delta); anchor of ECOWAS."
  },
  {
    "id": "kp",
    "name": "North Korea",
    "continent": "Asia",
    "region": "East Asia",
    "flag": "🇰🇵",
    "capital": "Pyongyang",
    "currency": "North Korean Won (KPW, ₩)",
    "landmark": {
      "name": "Juche Tower & Mount Paektu Heaven Lake",
      "icon": "fa-monument",
      "desc": "170-meter granite monument in Pyongyang and sacred volcanic crater lake on the northern border."
    },
    "mapOutline": {
      "shape": "Located in East Asia (Asia), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "China",
        "Russia",
        "South Korea"
      ],
      "coastline": "Borders China, Russia, South Korea"
    },
    "clues": [
      "Nuclear-armed state in Northeast Asia; heavily militarized DMZ along 38th parallel.",
      "Governed as a Unitary One-Party Totalitarian Dictatorship (Juche); official language(s): Korean; active member of UN, NAM, ARF.",
      "Its national capital city is Pyongyang (Population: 26 Million).",
      "Located in East Asia; official currency: North Korean Won (KPW, ₩)."
    ],
    "funFact": "Official title: Democratic People's Republic of Korea • Population: 26 Million • Language: Korean.",
    "examPoints": "Nuclear-armed state in Northeast Asia; heavily militarized DMZ along 38th parallel."
  },
  {
    "id": "mk",
    "name": "North Macedonia",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Skopje",
    "currency": "Macedonian Denar",
    "landmark": {
      "name": "Historic Capital District of Skopje",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Macedonian, Albanian; active member of UN, NATO.",
      "Its national capital city is Skopje (Population: 1.8 M).",
      "Located in Europe; official currency: Macedonian Denar."
    ],
    "funFact": "Official title: North Macedonia • Population: 1.8 M • Language: Macedonian, Albanian.",
    "examPoints": "North Macedonia is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "no",
    "name": "Norway",
    "continent": "Europe",
    "region": "Northern Europe (Nordic)",
    "flag": "🇳🇴",
    "capital": "Oslo",
    "currency": "Norwegian Krone (NOK, kr)",
    "landmark": {
      "name": "Historic Capital District of Oslo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Constitutional Monarchy) and premier national cultural monuments in Northern Europe (Nordic)."
    },
    "mapOutline": {
      "shape": "Located in Northern Europe (Nordic) (Europe), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "Sweden",
        "Finland",
        "Russia"
      ],
      "coastline": "Borders Sweden, Finland, Russia"
    },
    "clues": [
      "World's largest Sovereign Wealth Fund (>\\$1.6 Trillion); major natural gas exporter to Europe; Arctic sovereignty.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Norwegian; active member of UN, NATO (Founding), EFTA, OECD, Nordic Council.",
      "Its national capital city is Oslo (Population: 5.5 Million).",
      "Located in Northern Europe (Nordic); official currency: Norwegian Krone (NOK, kr)."
    ],
    "funFact": "Official title: Kingdom of Norway • Population: 5.5 Million • Language: Norwegian.",
    "examPoints": "World's largest Sovereign Wealth Fund (>\\$1.6 Trillion); major natural gas exporter to Europe; Arctic sovereignty."
  },
  {
    "id": "om",
    "name": "Oman",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇴🇲",
    "capital": "Muscat",
    "currency": "Omani Rial (OMR, ر.ع.)",
    "landmark": {
      "name": "Sultan Qaboos Grand Mosque & Nizwa Fort",
      "icon": "fa-mosque",
      "desc": "Monumental sandstone mosque in Muscat and 17th-century cylindrical Yaruba fortress."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "Saudi Arabia",
        "UAE",
        "Yemen"
      ],
      "coastline": "Borders Saudi Arabia, UAE, Yemen"
    },
    "clues": [
      "Controls the southern shore of Strait of Hormuz (Musandam Peninsula); Port of Duqm on Arabian Sea.",
      "Governed as a Unitary Absolute Monarchy; official language(s): Arabic; active member of UN, GCC, OIC, Arab League, IORA.",
      "Its national capital city is Muscat (Population: 5.1 Million).",
      "Located in Middle East; official currency: Omani Rial (OMR, ر.ع.)."
    ],
    "funFact": "Official title: Sultanate of Oman • Population: 5.1 Million • Language: Arabic.",
    "examPoints": "Controls the southern shore of Strait of Hormuz (Musandam Peninsula); Port of Duqm on Arabian Sea."
  },
  {
    "id": "pw",
    "name": "Palau",
    "continent": "Oceania",
    "region": "Micronesia (Western Pacific)",
    "flag": "🇵🇼",
    "capital": "Ngerulmud",
    "currency": "United States Dollar (USD)",
    "landmark": {
      "name": "Rock Islands Southern Lagoon & Jellyfish Lake",
      "icon": "fa-water",
      "desc": "UNESCO World Heritage seascape of 445 uninhabited mushroom-shaped limestone islands."
    },
    "mapOutline": {
      "shape": "1,519 km in the western Pacific Ocean in Micronesia (Western Pacific) (Oceania).",
      "borders": [
        "Island Archipelago (~340 volcanic & limestone islands southeast of the Philippines)"
      ],
      "coastline": "1,519 km in the western Pacific Ocean"
    },
    "clues": [
      "Its capital Ngerulmud (on Babeldaob island) is the least populous national capital in the world; created the world's first shark sanctuary in 2009.",
      "UNESCO World Heritage seascape of 445 uninhabited mushroom-shaped limestone islands.",
      "Its capital is Ngerulmud and official language(s): Palauan, English.",
      "Situated in Micronesia (Western Pacific) using United States Dollar (USD)."
    ],
    "funFact": "UNESCO World Heritage seascape of 445 uninhabited mushroom-shaped limestone islands.",
    "examPoints": "Its capital Ngerulmud (on Babeldaob island) is the least populous national capital in the world; created the world's first shark sanctuary in 2009."
  },
  {
    "id": "ps",
    "name": "Palestine",
    "continent": "Asia",
    "region": "Middle East / Levant",
    "flag": "🇵🇸",
    "capital": "East Jerusalem (proclaimed) / Ramallah (administrative)",
    "currency": "Jordanian Dinar / Israeli New Shekel",
    "landmark": {
      "name": "Al-Aqsa Mosque Compound & Church of the Nativity (Bethlehem)",
      "icon": "fa-mosque",
      "desc": "Islam's third holiest sanctuary (Al-Haram al-Sharif) in Old Jerusalem and UNESCO World Heritage birthplace site in Bethlehem."
    },
    "mapOutline": {
      "shape": "40 km Mediterranean Sea coast along the Gaza Strip in Middle East / Levant (Asia).",
      "borders": [
        "Jordan",
        "Egypt",
        "Israel"
      ],
      "coastline": "40 km Mediterranean Sea coast along the Gaza Strip"
    },
    "clues": [
      "UN Non-Member Observer State (UNGA Res 67/19, Nov 2012) recognized as a sovereign state by over 145 UN member countries; member of OIC, Arab League, and ICC.",
      "Islam's third holiest sanctuary (Al-Haram al-Sharif) in Old Jerusalem and UNESCO World Heritage birthplace site in Bethlehem.",
      "Its capital is East Jerusalem (proclaimed) / Ramallah (administrative) and official language(s): Arabic.",
      "Situated in Middle East / Levant using Jordanian Dinar / Israeli New Shekel."
    ],
    "funFact": "Islam's third holiest sanctuary (Al-Haram al-Sharif) in Old Jerusalem and UNESCO World Heritage birthplace site in Bethlehem.",
    "examPoints": "UN Non-Member Observer State (UNGA Res 67/19, Nov 2012) recognized as a sovereign state by over 145 UN member countries; member of OIC, Arab League, and ICC."
  },
  {
    "id": "pa",
    "name": "Panama",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Panama City",
    "currency": "Balboa & US Dollar",
    "landmark": {
      "name": "this country Canal (Miraflores & Agua Clara Locks)",
      "icon": "fa-ship",
      "desc": "82-km engineering marvel lifting ocean vessels 26 meters over the Continental Divide between Atlantic and Pacific."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, OAS.",
      "Its national capital city is Panama City (Population: 4.4 M).",
      "Located in North America; official currency: Balboa & US Dollar."
    ],
    "funFact": "Official title: Panama • Population: 4.4 M • Language: Spanish.",
    "examPoints": "Panama is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "pg",
    "name": "Papua New Guinea",
    "continent": "Oceania",
    "region": "Oceania",
    "flag": "🌐",
    "capital": "Port Moresby",
    "currency": "Papua New Guinean Kina",
    "landmark": {
      "name": "Historic Capital District of Port Moresby",
      "icon": "fa-landmark",
      "desc": "Seat of government (Parliamentary Constitutional Monarchy) and premier national cultural monuments in Oceania."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Oceania (Oceania) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Oceania"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Oceania.",
      "Governed as a Parliamentary Constitutional Monarchy; official language(s): English, Tok Pisin; active member of UN, Commonwealth, APEC.",
      "Its national capital city is Port Moresby (Population: 10 M).",
      "Located in Oceania; official currency: Papua New Guinean Kina."
    ],
    "funFact": "Official title: Papua New Guinea • Population: 10 M • Language: English, Tok Pisin.",
    "examPoints": "Papua New Guinea is an internationally recognized sovereign state situated in Oceania."
  },
  {
    "id": "py",
    "name": "Paraguay",
    "continent": "South America",
    "region": "South America",
    "flag": "🌐",
    "capital": "Asunción",
    "currency": "Paraguayan Guaraní",
    "landmark": {
      "name": "Historic Capital District of Asunción",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in South America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in South America (South America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in South America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in South America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish, Guaraní; active member of UN, Mercosur, OAS.",
      "Its national capital city is Asunción (Population: 6.8 M).",
      "Located in South America; official currency: Paraguayan Guaraní."
    ],
    "funFact": "Official title: Paraguay • Population: 6.8 M • Language: Spanish, Guaraní.",
    "examPoints": "Paraguay is an internationally recognized sovereign state situated in South America."
  },
  {
    "id": "pe",
    "name": "Peru",
    "continent": "South America",
    "region": "South America",
    "flag": "🌐",
    "capital": "Lima",
    "currency": "Peruvian Sol (PEN)",
    "landmark": {
      "name": "Machu Picchu Sanctuary",
      "icon": "fa-mountain",
      "desc": "15th-century Inca citadel perched high in the Andes Mountains (New7Wonders of the World)."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in South America (South America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in South America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in South America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish, Quechua; active member of UN, Pacific Alliance, APEC, OAS.",
      "Its national capital city is Lima (Population: 34 M).",
      "Located in South America; official currency: Peruvian Sol (PEN)."
    ],
    "funFact": "Official title: Peru • Population: 34 M • Language: Spanish, Quechua.",
    "examPoints": "Peru is an internationally recognized sovereign state situated in South America."
  },
  {
    "id": "ph",
    "name": "Philippines",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇵🇭",
    "capital": "Manila",
    "currency": "Philippine Peso (PHP, ₱)",
    "landmark": {
      "name": "Banaue Rice Terraces & Intramuros",
      "icon": "fa-mountain",
      "desc": "2,000-year-old Ifugao Cordillera mountain terraces and historic walled district of Manila."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Taiwan (Maritime)",
        "Malaysia (Maritime)"
      ],
      "coastline": "Borders Taiwan (Maritime), Malaysia (Maritime)"
    },
    "clues": [
      "US mutual defense treaty ally; key claimant in South China Sea dispute (First Island Chain).",
      "Governed as a Unitary Presidential Republic; official language(s): Filipino & English; active member of UN, ASEAN, APEC, WTO.",
      "Its national capital city is Manila (Population: 115.6 Million).",
      "Located in Southeast Asia; official currency: Philippine Peso (PHP, ₱)."
    ],
    "funFact": "Official title: Republic of the Philippines • Population: 115.6 Million • Language: Filipino & English.",
    "examPoints": "US mutual defense treaty ally; key claimant in South China Sea dispute (First Island Chain)."
  },
  {
    "id": "pl",
    "name": "Poland",
    "continent": "Europe",
    "region": "Central / Eastern Europe",
    "flag": "🇵🇱",
    "capital": "Warsaw",
    "currency": "Polish Złoty (PLN, zł)",
    "landmark": {
      "name": "Wawel Royal Castle (Kraków) & Warsaw Old Town",
      "icon": "fa-chess-rook",
      "desc": "UNESCO historic royal residence and meticulously reconstructed WWII-era capital plaza."
    },
    "mapOutline": {
      "shape": "Located in Central / Eastern Europe (Europe), sharing land frontiers with 7 neighboring countries.",
      "borders": [
        "Germany",
        "Czechia",
        "Slovakia",
        "Ukraine",
        "Belarus",
        "Lithuania",
        "Russia (Kaliningrad)"
      ],
      "coastline": "Borders Germany, Czechia, Slovakia, Ukraine"
    },
    "clues": [
      "NATO's eastern flank vanguard; leading defense spender (% of GDP) in Europe; key transit corridor for Ukraine.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Polish; active member of UN, EU, NATO, OECD, V4.",
      "Its national capital city is Warsaw (Population: 37.7 Million).",
      "Located in Central / Eastern Europe; official currency: Polish Złoty (PLN, zł)."
    ],
    "funFact": "Official title: Republic of Poland • Population: 37.7 Million • Language: Polish.",
    "examPoints": "NATO's eastern flank vanguard; leading defense spender (% of GDP) in Europe; key transit corridor for Ukraine."
  },
  {
    "id": "pt",
    "name": "Portugal",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇵🇹",
    "capital": "Lisbon",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Belém Tower & Jerónimos Monastery",
      "icon": "fa-chess-rook",
      "desc": "16th-century Manueline maritime fortress marking this country's Age of Discovery along the Tagus estuary."
    },
    "mapOutline": {
      "shape": "Located in Southern Europe (Europe), sharing land frontiers with 1 neighboring country.",
      "borders": [
        "Spain"
      ],
      "coastline": "Borders Spain"
    },
    "clues": [
      "Westernmost country of mainland Europe; pioneer of Age of Discovery; Atlantic maritime territory.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Portuguese; active member of UN, EU, NATO (Founding), OECD, CPLP.",
      "Its national capital city is Lisbon (Population: 10.5 Million).",
      "Located in Southern Europe; official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: Portuguese Republic • Population: 10.5 Million • Language: Portuguese.",
    "examPoints": "Westernmost country of mainland Europe; pioneer of Age of Discovery; Atlantic maritime territory."
  },
  {
    "id": "qa",
    "name": "Qatar",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇶🇦",
    "capital": "Doha",
    "currency": "Qatari Riyal (QAR, ر.ق)",
    "landmark": {
      "name": "Museum of Islamic Art & Lusail Iconic Stadium",
      "icon": "fa-landmark",
      "desc": "I.M. Pei's limestone architectural gem on Doha's Corniche and venue of the 2022 FIFA World Cup Final."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 1 neighboring country.",
      "borders": [
        "Saudi Arabia"
      ],
      "coastline": "Borders Saudi Arabia"
    },
    "clues": [
      "World's leading exporter of Liquefied Natural Gas (LNG, North Field); key international diplomatic mediator; Al Jazeera headquarters.",
      "Governed as a Unitary Semi-Constitutional Monarchy; official language(s): Arabic; active member of UN, GCC, OIC, Arab League, GECF.",
      "Its national capital city is Doha (Population: 2.7 Million).",
      "Located in Middle East; official currency: Qatari Riyal (QAR, ر.ق)."
    ],
    "funFact": "Official title: State of Qatar • Population: 2.7 Million • Language: Arabic.",
    "examPoints": "World's leading exporter of Liquefied Natural Gas (LNG, North Field); key international diplomatic mediator; Al Jazeera headquarters."
  },
  {
    "id": "ro",
    "name": "Romania",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Bucharest",
    "currency": "Romanian Leu (RON)",
    "landmark": {
      "name": "Bran Castle & Palace of the Parliament",
      "icon": "fa-chess-rook",
      "desc": "Carpathian hilltop fortress in Transylvania and Bucharest's colossal administrative building (heaviest in the world)."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): this countryn; active member of UN, EU, NATO.",
      "Its national capital city is Bucharest (Population: 19 M).",
      "Located in Europe; official currency: Romanian Leu (RON)."
    ],
    "funFact": "Official title: Romania • Population: 19 M • Language: Romanian.",
    "examPoints": "Romania is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "ru",
    "name": "Russia",
    "continent": "Europe / Asia",
    "region": "Eurasia",
    "flag": "🇷🇺",
    "capital": "Moscow",
    "currency": "Russian Ruble (RUB, ₽)",
    "landmark": {
      "name": "Historic Capital District of Moscow",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Semi-Presidential Republic) and premier national cultural monuments in Eurasia."
    },
    "mapOutline": {
      "shape": "Located in Eurasia (Europe / Asia), sharing land frontiers with 14 neighboring countries.",
      "borders": [
        "Norway",
        "Finland",
        "Estonia",
        "Latvia",
        "Lithuania",
        "Poland",
        "Belarus",
        "Ukraine",
        "Georgia",
        "Azerbaijan",
        "Kazakhstan",
        "China",
        "Mongolia",
        "North Korea"
      ],
      "coastline": "Borders Norway, Finland, Estonia, Latvia"
    },
    "clues": [
      "World's largest country by land area (17.1M km²); largest nuclear arsenal; massive energy and wheat supplier.",
      "Governed as a Federal Semi-Presidential Republic; official language(s): this countryn; active member of UN, UNSC (Permanent Member), BRICS, SCO, G20.",
      "Its national capital city is Moscow (Population: 144.2 Million).",
      "Located in Eurasia; official currency: Russian Ruble (RUB, ₽)."
    ],
    "funFact": "Official title: Russian Federation • Population: 144.2 Million • Language: Russian.",
    "examPoints": "World's largest country by land area (17.1M km²); largest nuclear arsenal; massive energy and wheat supplier."
  },
  {
    "id": "rw",
    "name": "Rwanda",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Kigali",
    "currency": "Rwandan Franc",
    "landmark": {
      "name": "Historic Capital District of Kigali",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): Kinyathis country, French, English; active member of UN, AU, EAC, Commonwealth.",
      "Its national capital city is Kigali (Population: 14 M).",
      "Located in Africa; official currency: Rwandan Franc."
    ],
    "funFact": "Official title: Rwanda • Population: 14 M • Language: Kinyarwanda, French, English.",
    "examPoints": "Rwanda is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "kn",
    "name": "Saint Kitts and Nevis",
    "continent": "North America",
    "region": "Caribbean (Leeward Islands)",
    "flag": "🇰🇳",
    "capital": "Basseterre",
    "currency": "East Caribbean Dollar (XCD)",
    "landmark": {
      "name": "Brimstone Hill Fortress National Park",
      "icon": "fa-fort-awesome",
      "desc": "UNESCO World Heritage 18th-century citadel known as the 'Gibraltar of the West Indies'."
    },
    "mapOutline": {
      "shape": "135 km volcanic twin islands separated by 'The Narrows' strait in Caribbean (Leeward Islands) (North America).",
      "borders": [
        "Twin-Island Federation in the Eastern Caribbean"
      ],
      "coastline": "135 km volcanic twin islands separated by 'The Narrows' strait"
    },
    "clues": [
      "Smallest sovereign state in the Western Hemisphere (Americas) in both land area (261 sq km) and population; pioneered citizenship-by-investment in 1984.",
      "UNESCO World Heritage 18th-century citadel known as the 'Gibraltar of the West Indies'.",
      "Its capital is Basseterre and official language(s): English.",
      "Situated in Caribbean (Leeward Islands) using East Caribbean Dollar (XCD)."
    ],
    "funFact": "UNESCO World Heritage 18th-century citadel known as the 'Gibraltar of the West Indies'.",
    "examPoints": "Smallest sovereign state in the Western Hemisphere (Americas) in both land area (261 sq km) and population; pioneered citizenship-by-investment in 1984."
  },
  {
    "id": "lc",
    "name": "Saint Lucia",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Castries",
    "currency": "East Caribbean Dollar",
    "landmark": {
      "name": "Historic Capital District of Castries",
      "icon": "fa-landmark",
      "desc": "Seat of government (Parliamentary Constitutional Monarchy) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Parliamentary Constitutional Monarchy; official language(s): English; active member of UN, Commonwealth, CARICOM.",
      "Its national capital city is Castries (Population: 180,000).",
      "Located in North America; official currency: East Caribbean Dollar."
    ],
    "funFact": "Official title: Saint Lucia • Population: 180,000 • Language: English.",
    "examPoints": "Saint Lucia is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "vc",
    "name": "Saint Vincent and the Grenadines",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Kingstown",
    "currency": "East Caribbean Dollar",
    "landmark": {
      "name": "Historic Capital District of Kingstown",
      "icon": "fa-landmark",
      "desc": "Seat of government (Parliamentary Constitutional Monarchy) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Parliamentary Constitutional Monarchy; official language(s): English; active member of UN, Commonwealth, CARICOM.",
      "Its national capital city is Kingstown (Population: 104,000).",
      "Located in North America; official currency: East Caribbean Dollar."
    ],
    "funFact": "Official title: Saint Vincent and the Grenadines • Population: 104,000 • Language: English.",
    "examPoints": "Saint Vincent and the Grenadines is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "ws",
    "name": "Samoa",
    "continent": "Oceania",
    "region": "Polynesia (South Pacific)",
    "flag": "🇼🇸",
    "capital": "Apia",
    "currency": "Samoan Tālā (WST)",
    "landmark": {
      "name": "To Sua Ocean Trench & Robert Louis Stevenson Museum",
      "icon": "fa-water",
      "desc": "30-meter-deep emerald volcanic swimming sinkhole on Upolu and historic Villa Vailima in Apia."
    },
    "mapOutline": {
      "shape": "403 km in the central South Pacific in Polynesia (South Pacific) (Oceania).",
      "borders": [
        "Island Nation (Upolu, Savai'i, and smaller volcanic islands in Polynesia)"
      ],
      "coastline": "403 km in the central South Pacific"
    },
    "clues": [
      "First Pacific island nation to gain independence (1962 from New Zealand); shifted west across the International Date Line in 2011; hosted CHOGM 2024 in Apia.",
      "30-meter-deep emerald volcanic swimming sinkhole on Upolu and historic Villa Vailima in Apia.",
      "Its capital is Apia and official language(s): Samoan, English.",
      "Situated in Polynesia (South Pacific) using Samoan Tālā (WST)."
    ],
    "funFact": "30-meter-deep emerald volcanic swimming sinkhole on Upolu and historic Villa Vailima in Apia.",
    "examPoints": "First Pacific island nation to gain independence (1962 from New Zealand); shifted west across the International Date Line in 2011; hosted CHOGM 2024 in Apia."
  },
  {
    "id": "sm",
    "name": "San Marino",
    "continent": "Europe",
    "region": "Southern Europe (Italian Peninsula)",
    "flag": "🇸🇲",
    "capital": "City of San Marino",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Three Towers of this country (Mount Titano)",
      "icon": "fa-chess-rook",
      "desc": "UNESCO World Heritage medieval citadels (Guaita, Cesta, Montale) crowning the three peaks of Mount Titano."
    },
    "mapOutline": {
      "shape": "Landlocked enclave entirely surrounded by Italy near the Adriatic in Southern Europe (Italian Peninsula) (Europe).",
      "borders": [
        "Italy"
      ],
      "coastline": "Landlocked enclave entirely surrounded by Italy near the Adriatic"
    },
    "clues": [
      "Claims to be the world's oldest surviving constitutional republic (founded AD 301 by Saint Marinus); governed by two Captains Regent elected every six months.",
      "UNESCO World Heritage medieval citadels (Guaita, Cesta, Montale) crowning the three peaks of Mount Titano.",
      "Its capital is City of San Marino and official language(s): Italian.",
      "Situated in Southern Europe (Italian Peninsula) using Euro (EUR, €)."
    ],
    "funFact": "UNESCO World Heritage medieval citadels (Guaita, Cesta, Montale) crowning the three peaks of Mount Titano.",
    "examPoints": "Claims to be the world's oldest surviving constitutional republic (founded AD 301 by Saint Marinus); governed by two Captains Regent elected every six months."
  },
  {
    "id": "sa",
    "name": "Saudi Arabia",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇸🇦",
    "capital": "Riyadh",
    "currency": "Saudi Riyal (SAR, ﷼)",
    "landmark": {
      "name": "Historic Capital District of Riyadh",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Absolute Monarchy) and premier national cultural monuments in Middle East."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 7 neighboring countries.",
      "borders": [
        "Jordan",
        "Iraq",
        "Kuwait",
        "Qatar",
        "UAE",
        "Oman",
        "Yemen"
      ],
      "coastline": "Borders Jordan, Iraq, Kuwait, Qatar"
    },
    "clues": [
      "World's top crude oil exporter; custodian of Islam's two holiest sites (Makkah & Madinah); leading remittances source for Pakistan.",
      "Governed as a Unitary Absolute Monarchy; official language(s): Arabic; active member of UN, OIC (HQ in Jeddah), OPEC, GCC, Arab League.",
      "Its national capital city is Riyadh (Population: 36.9 Million).",
      "Located in Middle East; official currency: Saudi Riyal (SAR, ﷼)."
    ],
    "funFact": "Official title: Kingdom of Saudi Arabia • Population: 36.9 Million • Language: Arabic.",
    "examPoints": "World's top crude oil exporter; custodian of Islam's two holiest sites (Makkah & Madinah); leading remittances source for Pakistan."
  },
  {
    "id": "sn",
    "name": "Senegal",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Dakar",
    "currency": "West African CFA Franc",
    "landmark": {
      "name": "Island of Gorée & African Renaissance Monument",
      "icon": "fa-monument",
      "desc": "UNESCO Atlantic memorial island off Dakar, the westernmost point of mainland Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): French, Wolof; active member of UN, AU, ECOWAS, OIC.",
      "Its national capital city is Dakar (Population: 17.7 M).",
      "Located in Africa; official currency: West African CFA Franc."
    ],
    "funFact": "Official title: Senegal • Population: 17.7 M • Language: French, Wolof.",
    "examPoints": "Senegal is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "rs",
    "name": "Serbia",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Belgrade",
    "currency": "Serbian Dinar (RSD)",
    "landmark": {
      "name": "Historic Capital District of Belgrade",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): this countryn; active member of UN, OSCE.",
      "Its national capital city is Belgrade (Population: 6.6 M).",
      "Located in Europe; official currency: Serbian Dinar (RSD)."
    ],
    "funFact": "Official title: Serbia • Population: 6.6 M • Language: Serbian.",
    "examPoints": "Serbia is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "sc",
    "name": "Seychelles",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Victoria",
    "currency": "Seychellois Rupee",
    "landmark": {
      "name": "Historic Capital District of Victoria",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): Seychellois Creole, English, French; active member of UN, AU, Commonwealth.",
      "Its national capital city is Victoria (Population: 100,000).",
      "Located in Africa; official currency: Seychellois Rupee."
    ],
    "funFact": "Official title: Seychelles • Population: 100,000 • Language: Seychellois Creole, English, French.",
    "examPoints": "Seychelles is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "sl",
    "name": "Sierra Leone",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Freetown",
    "currency": "Sierra Leonean Leone",
    "landmark": {
      "name": "Historic Capital District of Freetown",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): English; active member of UN, AU, ECOWAS, OIC, Commonwealth.",
      "Its national capital city is Freetown (Population: 8.8 M).",
      "Located in Africa; official currency: Sierra Leonean Leone."
    ],
    "funFact": "Official title: Sierra Leone • Population: 8.8 M • Language: English.",
    "examPoints": "Sierra Leone is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "sg",
    "name": "Singapore",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇸🇬",
    "capital": "Singapore",
    "currency": "Singapore Dollar (SGD, S$)",
    "landmark": {
      "name": "Historic Capital District of Singapore",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Southeast Asia."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Malaysia",
        "Indonesia"
      ],
      "coastline": "Borders Malaysia, Indonesia"
    },
    "clues": [
      "Global financial, shipping, and aviation hub; sits at entrance of Strait of Malacca; AAA credit-rated nation.",
      "Governed as a Unitary Parliamentary Republic; official language(s): English, Malay, Mandarin, Tamil; active member of UN, ASEAN, APEC, Commonwealth, WTO.",
      "Its national capital city is Singapore (Population: 5.9 Million).",
      "Located in Southeast Asia; official currency: Singapore Dollar (SGD, S$)."
    ],
    "funFact": "Official title: Republic of Singapore • Population: 5.9 Million • Language: English, Malay, Mandarin, Tamil.",
    "examPoints": "Global financial, shipping, and aviation hub; sits at entrance of Strait of Malacca; AAA credit-rated nation."
  },
  {
    "id": "sk",
    "name": "Slovakia",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Bratislava",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Bratislava",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): national; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Bratislava (Population: 5.4 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Slovakia • Population: 5.4 M • Language: Slovak.",
    "examPoints": "Slovakia is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "si",
    "name": "Slovenia",
    "continent": "Europe",
    "region": "Europe",
    "flag": "🌐",
    "capital": "Ljubljana",
    "currency": "Euro (EUR)",
    "landmark": {
      "name": "Historic Capital District of Ljubljana",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Europe."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Europe (Europe) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Europe"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Europe.",
      "Governed as a Unitary Parliamentary Republic; official language(s): national; active member of UN, EU, NATO, OECD.",
      "Its national capital city is Ljubljana (Population: 2.1 M).",
      "Located in Europe; official currency: Euro (EUR)."
    ],
    "funFact": "Official title: Slovenia • Population: 2.1 M • Language: Slovene.",
    "examPoints": "Slovenia is an internationally recognized sovereign state situated in Europe."
  },
  {
    "id": "sb",
    "name": "Solomon Islands",
    "continent": "Oceania",
    "region": "Oceania",
    "flag": "🌐",
    "capital": "Honiara",
    "currency": "Solomon Islands Dollar",
    "landmark": {
      "name": "Historic Capital District of Honiara",
      "icon": "fa-landmark",
      "desc": "Seat of government (Parliamentary Constitutional Monarchy) and premier national cultural monuments in Oceania."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Oceania (Oceania) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Oceania"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Oceania.",
      "Governed as a Parliamentary Constitutional Monarchy; official language(s): English; active member of UN, Commonwealth.",
      "Its national capital city is Honiara (Population: 730,000).",
      "Located in Oceania; official currency: Solomon Islands Dollar."
    ],
    "funFact": "Official title: Solomon Islands • Population: 730,000 • Language: English.",
    "examPoints": "Solomon Islands is an internationally recognized sovereign state situated in Oceania."
  },
  {
    "id": "so",
    "name": "Somalia",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Mogadishu",
    "currency": "Somali Shilling",
    "landmark": {
      "name": "Historic Capital District of Mogadishu",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Parliamentary Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Federal Parliamentary Republic; official language(s): national, Arabic; active member of UN, AU, Arab League, OIC, EAC.",
      "Its national capital city is Mogadishu (Population: 18 M).",
      "Located in Africa; official currency: Somali Shilling."
    ],
    "funFact": "Official title: Somalia • Population: 18 M • Language: Somali, Arabic.",
    "examPoints": "Somalia is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "za",
    "name": "South Africa",
    "continent": "Africa",
    "region": "Southern Africa",
    "flag": "🇿🇦",
    "capital": "Pretoria (Exec) / Cape Town (Leg) / Bloemfontein (Jud)",
    "currency": "South African Rand (ZAR, R)",
    "landmark": {
      "name": "Historic Capital District of Pretoria (Exec) / Cape Town (Leg) / Bloemfontein (Jud)",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Southern Africa."
    },
    "mapOutline": {
      "shape": "Located in Southern Africa (Africa), sharing land frontiers with 6 neighboring countries.",
      "borders": [
        "Namibia",
        "Botswana",
        "Zimbabwe",
        "Mozambique",
        "Eswatini",
        "Lesotho"
      ],
      "coastline": "Borders Namibia, Botswana, Zimbabwe, Mozambique"
    },
    "clues": [
      "Leading industrial economy in Africa; platinum and gold reserves; Cape of Good Hope maritime transit.",
      "Governed as a Unitary Parliamentary Republic; official language(s): 12 Official Languages (including Zulu, Xhosa, Afrikaans, English); active member of UN, BRICS (Founding 'S'), G20, African Union, Commonwealth.",
      "Its national capital city is Pretoria (Exec) / Cape Town (Leg) / Bloemfontein (Jud) (Population: 62 Million).",
      "Located in Southern Africa; official currency: South African Rand (ZAR, R)."
    ],
    "funFact": "Official title: Republic of South Africa • Population: 62 Million • Language: 12 Official Languages (including Zulu, Xhosa, Afrikaans, English).",
    "examPoints": "Leading industrial economy in Africa; platinum and gold reserves; Cape of Good Hope maritime transit."
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
      "name": "Historic Capital District of Seoul",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Constitutional Republic) and premier national cultural monuments in East Asia."
    },
    "mapOutline": {
      "shape": "Located in East Asia (Asia), sharing land frontiers with 1 neighboring country.",
      "borders": [
        "North Korea (DMZ border)"
      ],
      "coastline": "Borders North Korea (DMZ border)"
    },
    "clues": [
      "Global semiconductor, battery, and automotive giant (Samsung, Hyundai); key US treaty ally.",
      "Governed as a Unitary Presidential Constitutional Republic; official language(s): Korean; active member of UN, G20, OECD, APEC.",
      "Its national capital city is Seoul (Population: 51.7 Million).",
      "Located in East Asia; official currency: South Korean Won (KRW, ₩)."
    ],
    "funFact": "Official title: Republic of Korea • Population: 51.7 Million • Language: Korean.",
    "examPoints": "Global semiconductor, battery, and automotive giant (Samsung, Hyundai); key US treaty ally."
  },
  {
    "id": "ss",
    "name": "South Sudan",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Juba",
    "currency": "South Sudanese Pound",
    "landmark": {
      "name": "Historic Capital District of Juba",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Federal Presidential Republic; official language(s): English; active member of UN, AU, EAC.",
      "Its national capital city is Juba (Population: 11 M).",
      "Located in Africa; official currency: South Sudanese Pound."
    ],
    "funFact": "Official title: South Sudan • Population: 11 M • Language: English.",
    "examPoints": "South Sudan is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "es",
    "name": "Spain",
    "continent": "Europe",
    "region": "Southern Europe",
    "flag": "🇪🇸",
    "capital": "Madrid",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "Historic Capital District of Madrid",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Constitutional Monarchy) and premier national cultural monuments in Southern Europe."
    },
    "mapOutline": {
      "shape": "Located in Southern Europe (Europe), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Portugal",
        "France"
      ],
      "coastline": "Borders Portugal, France"
    },
    "clues": [
      "Controls northern shore of Strait of Gibraltar; bridge between Europe, Latin America, and North Africa.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Spanish (Castilian); active member of UN, EU, NATO, OECD, G20 (Permanent Guest).",
      "Its national capital city is Madrid (Population: 48.6 Million).",
      "Located in Southern Europe; official currency: Euro (EUR, €)."
    ],
    "funFact": "Official title: Kingdom of Spain • Population: 48.6 Million • Language: Spanish (Castilian).",
    "examPoints": "Controls northern shore of Strait of Gibraltar; bridge between Europe, Latin America, and North Africa."
  },
  {
    "id": "lk",
    "name": "Sri Lanka",
    "continent": "Asia",
    "region": "South Asia",
    "flag": "🇱🇰",
    "capital": "Sri Jayawardenepura Kotte (Admin) / Colombo (Commercial)",
    "currency": "Sri Lankan Rupee (LKR, Rs)",
    "landmark": {
      "name": "Sigiriya Lion Rock Fortress & Temple of the Tooth",
      "icon": "fa-mountain",
      "desc": "5th-century ancient palace citadel atop a 200-meter volcanic rock column in central this country."
    },
    "mapOutline": {
      "shape": "Located in South Asia (Asia), sharing land frontiers with 1 neighboring country.",
      "borders": [
        "India (Maritime boundary: Palk Strait)"
      ],
      "coastline": "Borders India (Maritime boundary: Palk Strait)"
    },
    "clues": [
      "Controls Indian Ocean sea lanes; Hambantota Port and Colombo deep-water transshipment hub.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Sinhala & Tamil; active member of UN, SAARC, BIMSTEC, Commonwealth, NAM.",
      "Its national capital city is Sri Jayawardenepura Kotte (Admin) / Colombo (Commercial) (Population: 22.2 Million).",
      "Located in South Asia; official currency: Sri Lankan Rupee (LKR, Rs)."
    ],
    "funFact": "Official title: Democratic Socialist Republic of Sri Lanka • Population: 22.2 Million • Language: Sinhala & Tamil.",
    "examPoints": "Controls Indian Ocean sea lanes; Hambantota Port and Colombo deep-water transshipment hub."
  },
  {
    "id": "sd",
    "name": "Sudan",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Khartoum",
    "currency": "Sudanese Pound",
    "landmark": {
      "name": "Historic Capital District of Khartoum",
      "icon": "fa-landmark",
      "desc": "Seat of government (Transitional Sovereign Council) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Transitional Sovereign Council; official language(s): Arabic, English; active member of UN, AU, Arab League, OIC.",
      "Its national capital city is Khartoum (Population: 48 M).",
      "Located in Africa; official currency: Sudanese Pound."
    ],
    "funFact": "Official title: Sudan • Population: 48 M • Language: Arabic, English.",
    "examPoints": "Sudan is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "sr",
    "name": "Suriname",
    "continent": "South America",
    "region": "South America",
    "flag": "🌐",
    "capital": "Paramaribo",
    "currency": "Surinamese Dollar",
    "landmark": {
      "name": "Historic Capital District of Paramaribo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in South America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in South America (South America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in South America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in South America.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Dutch; active member of UN, CARICOM, OIC, OAS.",
      "Its national capital city is Paramaribo (Population: 620,000).",
      "Located in South America; official currency: Surinamese Dollar."
    ],
    "funFact": "Official title: Suriname • Population: 620,000 • Language: Dutch.",
    "examPoints": "Suriname is an internationally recognized sovereign state situated in South America."
  },
  {
    "id": "se",
    "name": "Sweden",
    "continent": "Europe",
    "region": "Northern Europe (Nordic)",
    "flag": "🇸🇪",
    "capital": "Stockholm",
    "currency": "Swedish Krona (SEK, kr)",
    "landmark": {
      "name": "Historic Capital District of Stockholm",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Constitutional Monarchy) and premier national cultural monuments in Northern Europe (Nordic)."
    },
    "mapOutline": {
      "shape": "Located in Northern Europe (Nordic) (Europe), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Norway",
        "Finland"
      ],
      "coastline": "Borders Norway, Finland"
    },
    "clues": [
      "Baltic Sea security anchor; ended 200 years of neutrality by joining NATO in 2024; home of Nobel Prizes.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Swedish; active member of UN, EU, NATO (Joined 2024), OECD, Nordic Council.",
      "Its national capital city is Stockholm (Population: 10.5 Million).",
      "Located in Northern Europe (Nordic); official currency: Swedish Krona (SEK, kr)."
    ],
    "funFact": "Official title: Kingdom of Sweden • Population: 10.5 Million • Language: Swedish.",
    "examPoints": "Baltic Sea security anchor; ended 200 years of neutrality by joining NATO in 2024; home of Nobel Prizes."
  },
  {
    "id": "ch",
    "name": "Switzerland",
    "continent": "Europe",
    "region": "Central Europe",
    "flag": "🇨🇭",
    "capital": "Bern",
    "currency": "Swiss Franc (CHF, Fr)",
    "landmark": {
      "name": "Historic Capital District of Bern",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Direct-Democratic Republic (Federal Council of 7)) and premier national cultural monuments in Central Europe."
    },
    "mapOutline": {
      "shape": "Located in Central Europe (Europe), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Germany",
        "France",
        "Italy",
        "Austria"
      ],
      "coastline": "Borders Germany, France, Italy, Austria"
    },
    "clues": [
      "Historic policy of armed neutrality; host to UN Geneva, WTO, WHO, and World Economic Forum (Davos).",
      "Governed as a Federal Direct-Democratic Republic (Federal Council of 7); official language(s): German, French, Italian, Romansh; active member of UN (European HQ in Geneva), EFTA, WTO (HQ in Geneva), WHO (Geneva), Red Cross (ICRC).",
      "Its national capital city is Bern (Population: 8.9 Million).",
      "Located in Central Europe; official currency: Swiss Franc (CHF, Fr)."
    ],
    "funFact": "Official title: Swiss Confederation • Population: 8.9 Million • Language: German, French, Italian, Romansh.",
    "examPoints": "Historic policy of armed neutrality; host to UN Geneva, WTO, WHO, and World Economic Forum (Davos)."
  },
  {
    "id": "sy",
    "name": "Syria",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇸🇾",
    "capital": "Damascus",
    "currency": "Syrian Pound (SYP, £S)",
    "landmark": {
      "name": "Umayyad Mosque of Damascus & Palmyra",
      "icon": "fa-mosque",
      "desc": "8th-century architectural masterpiece in one of the world's oldest continuously inhabited capitals."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 5 neighboring countries.",
      "borders": [
        "Turkey",
        "Iraq",
        "Jordan",
        "Israel",
        "Lebanon"
      ],
      "coastline": "Borders Turkey, Iraq, Jordan, Israel"
    },
    "clues": [
      "Eastern Mediterranean coastline; Tartus Russian naval facility; Golan Heights dispute with Israel.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Arabic; active member of UN, Arab League, OIC.",
      "Its national capital city is Damascus (Population: 23.2 Million).",
      "Located in Middle East; official currency: Syrian Pound (SYP, £S)."
    ],
    "funFact": "Official title: Syrian Arab Republic • Population: 23.2 Million • Language: Arabic.",
    "examPoints": "Eastern Mediterranean coastline; Tartus Russian naval facility; Golan Heights dispute with Israel."
  },
  {
    "id": "st",
    "name": "São Tomé and Príncipe",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "São Tomé",
    "currency": "São Tomé Dobra",
    "landmark": {
      "name": "Historic Capital District of São Tomé",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Semi-Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): Portuguese; active member of UN, AU.",
      "Its national capital city is São Tomé (Population: 230,000).",
      "Located in Africa; official currency: São Tomé Dobra."
    ],
    "funFact": "Official title: São Tomé and Príncipe • Population: 230,000 • Language: Portuguese.",
    "examPoints": "São Tomé and Príncipe is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "tj",
    "name": "Tajikistan",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇹🇯",
    "capital": "Dushanbe",
    "currency": "Tajikistani Somoni (TJS, SM)",
    "landmark": {
      "name": "Pamir Highway & Iskanderkul Lake",
      "icon": "fa-mountain",
      "desc": "High-altitude 'Roof of the World' mountain road and glacial turquoise lake named after Alexander the Great."
    },
    "mapOutline": {
      "shape": "Located in Central Asia (Asia), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Afghanistan",
        "Uzbekistan",
        "Kyrgyzstan",
        "China"
      ],
      "coastline": "Borders Afghanistan, Uzbekistan, Kyrgyzstan, China"
    },
    "clues": [
      "Separated from Pakistan only by the narrow Afghan Wakhan Corridor (~16-20 km); massive hydropower potential (Rogun Dam); CASA-1000 participant.",
      "Governed as a Unitary Presidential Republic; official language(s): Tajik (Persian dialect); active member of UN, SCO, CSTO, OIC, ECO.",
      "Its national capital city is Dushanbe (Population: 10.1 Million).",
      "Located in Central Asia; official currency: Tajikistani Somoni (TJS, SM)."
    ],
    "funFact": "Official title: Republic of Tajikistan • Population: 10.1 Million • Language: Tajik (Persian dialect).",
    "examPoints": "Separated from Pakistan only by the narrow Afghan Wakhan Corridor (~16-20 km); massive hydropower potential (Rogun Dam); CASA-1000 participant."
  },
  {
    "id": "tz",
    "name": "Tanzania",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Dodoma",
    "currency": "Tanzanian Shilling",
    "landmark": {
      "name": "Mount Kilimanjaro & Serengeti National Park",
      "icon": "fa-paw",
      "desc": "Africa's highest peak (5,895m) and site of the great annual wildebeest migration."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): Swahili, English; active member of UN, AU, EAC, SADC, Commonwealth.",
      "Its national capital city is Dodoma (Population: 67 M).",
      "Located in Africa; official currency: Tanzanian Shilling."
    ],
    "funFact": "Official title: Tanzania • Population: 67 M • Language: Swahili, English.",
    "examPoints": "Tanzania is an internationally recognized sovereign state situated in Africa."
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
      "name": "Grand Palace & Wat Arun (Bangkok)",
      "icon": "fa-vihara",
      "desc": "18th-century royal complex on the Chao Phraya River housing the Emerald Buddha."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Myanmar",
        "Laos",
        "Cambodia",
        "Malaysia"
      ],
      "coastline": "Borders Myanmar, Laos, Cambodia, Malaysia"
    },
    "clues": [
      "Second largest economy in Southeast Asia; automotive hub of ASEAN; historical buffer between British and French colonial spheres.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): Thai; active member of UN, ASEAN, APEC, BIMSTEC.",
      "Its national capital city is Bangkok (Population: 71.8 Million).",
      "Located in Southeast Asia; official currency: Thai Baht (THB, ฿)."
    ],
    "funFact": "Official title: Kingdom of Thailand • Population: 71.8 Million • Language: Thai.",
    "examPoints": "Second largest economy in Southeast Asia; automotive hub of ASEAN; historical buffer between British and French colonial spheres."
  },
  {
    "id": "tl",
    "name": "Timor-Leste",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇹🇱",
    "capital": "Dili",
    "currency": "United States Dollar (USD)",
    "landmark": {
      "name": "Cristo Rei of Dili & Mount Ramelau",
      "icon": "fa-mountain",
      "desc": "27-meter coastal hilltop statue overlooking Dili Bay and the mist-shrouded 2,986m Tatamailau summit."
    },
    "mapOutline": {
      "shape": "706 km occupying the eastern half of Timor island north of Australia in Southeast Asia (Asia).",
      "borders": [
        "Indonesia"
      ],
      "coastline": "706 km occupying the eastern half of Timor island north of Australia"
    },
    "clues": [
      "Restored independence on May 20, 2002 (first new sovereign state of the 21st century); acceded as the 166th member of the WTO in 2024 and advancing into ASEAN.",
      "27-meter coastal hilltop statue overlooking Dili Bay and the mist-shrouded 2,986m Tatamailau summit.",
      "Its capital is Dili and official language(s): Portuguese, Tetum.",
      "Situated in Southeast Asia using United States Dollar (USD)."
    ],
    "funFact": "27-meter coastal hilltop statue overlooking Dili Bay and the mist-shrouded 2,986m Tatamailau summit.",
    "examPoints": "Restored independence on May 20, 2002 (first new sovereign state of the 21st century); acceded as the 166th member of the WTO in 2024 and advancing into ASEAN."
  },
  {
    "id": "tg",
    "name": "Togo",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Lomé",
    "currency": "West African CFA Franc",
    "landmark": {
      "name": "Historic Capital District of Lomé",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Parliamentary Republic; official language(s): French; active member of UN, AU, ECOWAS, OIC, Commonwealth.",
      "Its national capital city is Lomé (Population: 9 M).",
      "Located in Africa; official currency: West African CFA Franc."
    ],
    "funFact": "Official title: Togo • Population: 9 M • Language: French.",
    "examPoints": "Togo is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "to",
    "name": "Tonga",
    "continent": "Oceania",
    "region": "Polynesia (South Pacific)",
    "flag": "🇹🇴",
    "capital": "Nuku'alofa",
    "currency": "Tongan Pa'anga (TOP)",
    "landmark": {
      "name": "Ha'amonga 'a Maui Trilithon",
      "icon": "fa-monument",
      "desc": "13th-century coral-limestone 'Stonehenge of the Pacific' gateway built on this countrytapu."
    },
    "mapOutline": {
      "shape": "419 km across Tongatapu, Vava'u, and Ha'apai groups in Polynesia (South Pacific) (Oceania).",
      "borders": [
        "Island Kingdom (170+ islands just west of the International Date Line)"
      ],
      "coastline": "419 km across Tongatapu, Vava'u, and Ha'apai groups"
    },
    "clues": [
      "Known historically as the 'Friendly Islands'; the ONLY Pacific island nation that never formally lost its indigenous monarchy sovereignty to European colonization.",
      "13th-century coral-limestone 'Stonehenge of the Pacific' gateway built on this countrytapu.",
      "Its capital is Nuku'alofa and official language(s): Tongan, English.",
      "Situated in Polynesia (South Pacific) using Tongan Pa'anga (TOP)."
    ],
    "funFact": "13th-century coral-limestone 'Stonehenge of the Pacific' gateway built on Tongatapu.",
    "examPoints": "Known historically as the 'Friendly Islands'; the ONLY Pacific island nation that never formally lost its indigenous monarchy sovereignty to European colonization."
  },
  {
    "id": "tt",
    "name": "Trinidad and Tobago",
    "continent": "North America",
    "region": "North America",
    "flag": "🌐",
    "capital": "Port of Spain",
    "currency": "Trinidad and Tobago Dollar",
    "landmark": {
      "name": "Historic Capital District of Port of Spain",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in North America (North America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in North America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in North America.",
      "Governed as a Unitary Parliamentary Republic; official language(s): English; active member of UN, Commonwealth, CARICOM.",
      "Its national capital city is Port of Spain (Population: 1.5 M).",
      "Located in North America; official currency: Trinidad and Tobago Dollar."
    ],
    "funFact": "Official title: Trinidad and Tobago • Population: 1.5 M • Language: English.",
    "examPoints": "Trinidad and Tobago is an internationally recognized sovereign state situated in North America."
  },
  {
    "id": "tn",
    "name": "Tunisia",
    "continent": "Africa",
    "region": "North Africa (Maghreb)",
    "flag": "🇹🇳",
    "capital": "Tunis",
    "currency": "Tunisian Dinar (TND)",
    "landmark": {
      "name": "Ancient Ruins of Carthage & Amphitheatre of El Jem",
      "icon": "fa-columns",
      "desc": "UNESCO Phoenician-Punic imperial port ruins near national and massive 3rd-century Roman colosseum."
    },
    "mapOutline": {
      "shape": "1,148 km along the central Mediterranean Sea near Sicily in North Africa (Maghreb) (Africa).",
      "borders": [
        "Algeria",
        "Libya"
      ],
      "coastline": "1,148 km along the central Mediterranean Sea near Sicily"
    },
    "clues": [
      "Northernmost country on the African continent (Ras Angela); historical heartland of ancient Carthage; member of the UN, Arab League, OIC, and African Union.",
      "UNESCO Phoenician-Punic imperial port ruins near national and massive 3rd-century Roman colosseum.",
      "Its capital is Tunis and official language(s): Arabic.",
      "Situated in North Africa (Maghreb) using Tunisian Dinar (TND)."
    ],
    "funFact": "UNESCO Phoenician-Punic imperial port ruins near Tunis and massive 3rd-century Roman colosseum.",
    "examPoints": "Northernmost country on the African continent (Ras Angela); historical heartland of ancient Carthage; member of the UN, Arab League, OIC, and African Union."
  },
  {
    "id": "tr",
    "name": "Turkey",
    "continent": "Asia / Europe",
    "region": "Eurasia / Middle East",
    "flag": "🇹🇷",
    "capital": "Ankara",
    "currency": "Turkish Lira (TRY, ₺)",
    "landmark": {
      "name": "Historic Capital District of Ankara",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Eurasia / Middle East."
    },
    "mapOutline": {
      "shape": "Located in Eurasia / Middle East (Asia / Europe), sharing land frontiers with 8 neighboring countries.",
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
      "coastline": "Borders Greece, Bulgaria, Georgia, Armenia"
    },
    "clues": [
      "Controls Turkish Straits (Bosporus & Dardanelles) under 1936 Montreux Convention; 2nd largest military in NATO.",
      "Governed as a Unitary Presidential Republic; official language(s): Turkish; active member of UN, NATO, OIC, ECO, G20.",
      "Its national capital city is Ankara (Population: 85.8 Million).",
      "Located in Eurasia / Middle East; official currency: Turkish Lira (TRY, ₺)."
    ],
    "funFact": "Official title: Republic of Türkiye • Population: 85.8 Million • Language: Turkish.",
    "examPoints": "Controls Turkish Straits (Bosporus & Dardanelles) under 1936 Montreux Convention; 2nd largest military in NATO."
  },
  {
    "id": "tm",
    "name": "Turkmenistan",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇹🇲",
    "capital": "Ashgabat",
    "currency": "Turkmenistan Manat (TMT, m)",
    "landmark": {
      "name": "Darvaza Gas Crater & Ancient Merv",
      "icon": "fa-fire",
      "desc": "Fiery Karakum Desert natural-gas cavern ('Door to Hell') and UNESCO Silk Road oasis ruins."
    },
    "mapOutline": {
      "shape": "Located in Central Asia (Asia), sharing land frontiers with 4 neighboring countries.",
      "borders": [
        "Kazakhstan",
        "Uzbekistan",
        "Afghanistan",
        "Iran"
      ],
      "coastline": "Borders Kazakhstan, Uzbekistan, Afghanistan, Iran"
    },
    "clues": [
      "Holds world's 4th largest natural gas reserves (Galkynysh field); anchor for TAPI pipeline to Pakistan and India.",
      "Governed as a Unitary Presidential Republic; official language(s): Turkmen; active member of UN, ECO, OIC, NAM (Recognized Permanent Neutrality).",
      "Its national capital city is Ashgabat (Population: 6.5 Million).",
      "Located in Central Asia; official currency: Turkmenistan Manat (TMT, m)."
    ],
    "funFact": "Official title: Turkmenistan • Population: 6.5 Million • Language: Turkmen.",
    "examPoints": "Holds world's 4th largest natural gas reserves (Galkynysh field); anchor for TAPI pipeline to Pakistan and India."
  },
  {
    "id": "tv",
    "name": "Tuvalu",
    "continent": "Oceania",
    "region": "Polynesia (Central Pacific)",
    "flag": "🇹🇻",
    "capital": "Funafuti",
    "currency": "Tuvaluan Dollar / Australian Dollar (AUD)",
    "landmark": {
      "name": "Funafuti Conservation Area Lagoon",
      "icon": "fa-water",
      "desc": "Protected coral reef lagoon ecosystem spanning 33 sq km on the western rim of Funafuti Atoll."
    },
    "mapOutline": {
      "shape": "24 km; maximum elevation barely 4.6 meters above sea level in Polynesia (Central Pacific) (Oceania).",
      "borders": [
        "Island Nation (9 low-lying coral atolls midway between Hawaii and Australia)"
      ],
      "coastline": "24 km; maximum elevation barely 4.6 meters above sea level"
    },
    "clues": [
      "Signed the landmark 2023 Falepili Union treaty with Australia offering climate mobility residency; earns substantial national revenue licensing its '.tv' internet domain.",
      "Protected coral reef lagoon ecosystem spanning 33 sq km on the western rim of Funafuti Atoll.",
      "Its capital is Funafuti and official language(s): Tuvaluan, English.",
      "Situated in Polynesia (Central Pacific) using Tuvaluan Dollar / Australian Dollar (AUD)."
    ],
    "funFact": "Protected coral reef lagoon ecosystem spanning 33 sq km on the western rim of Funafuti Atoll.",
    "examPoints": "Signed the landmark 2023 Falepili Union treaty with Australia offering climate mobility residency; earns substantial national revenue licensing its '.tv' internet domain."
  },
  {
    "id": "ug",
    "name": "Uganda",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Kampala",
    "currency": "Ugandan Shilling",
    "landmark": {
      "name": "Historic Capital District of Kampala",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): English, Swahili; active member of UN, AU, EAC, OIC, Commonwealth.",
      "Its national capital city is Kampala (Population: 48 M).",
      "Located in Africa; official currency: Ugandan Shilling."
    ],
    "funFact": "Official title: Uganda • Population: 48 M • Language: English, Swahili.",
    "examPoints": "Uganda is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "ua",
    "name": "Ukraine",
    "continent": "Europe",
    "region": "Eastern Europe",
    "flag": "🇺🇦",
    "capital": "Kyiv",
    "currency": "Ukrainian Hryvnia (UAH, ₴)",
    "landmark": {
      "name": "Saint Sophia Cathedral & Independence Square (Kyiv)",
      "icon": "fa-church",
      "desc": "11th-century golden-domed UNESCO cathedral overlooking the Dnipro River."
    },
    "mapOutline": {
      "shape": "Located in Eastern Europe (Europe), sharing land frontiers with 7 neighboring countries.",
      "borders": [
        "Russia",
        "Belarus",
        "Poland",
        "Slovakia",
        "Hungary",
        "Romania",
        "Moldova"
      ],
      "coastline": "Borders Russia, Belarus, Poland, Slovakia"
    },
    "clues": [
      "Second-largest country by area in Europe; breadbasket of the world (grain exports); epicenter of Russia-this country conflict.",
      "Governed as a Unitary Semi-Presidential Republic; official language(s): national; active member of UN, Council of Europe, OSCE.",
      "Its national capital city is Kyiv (Population: 38 Million).",
      "Located in Eastern Europe; official currency: Ukrainian Hryvnia (UAH, ₴)."
    ],
    "funFact": "Official title: Ukraine • Population: 38 Million • Language: Ukrainian.",
    "examPoints": "Second-largest country by area in Europe; breadbasket of the world (grain exports); epicenter of Russia-Ukraine conflict."
  },
  {
    "id": "ae",
    "name": "United Arab Emirates",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇦🇪",
    "capital": "Abu Dhabi",
    "currency": "UAE Dirham (AED, د.إ)",
    "landmark": {
      "name": "Historic Capital District of Abu Dhabi",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Elective Constitutional Monarchy (7 Emirates)) and premier national cultural monuments in Middle East."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Saudi Arabia",
        "Oman"
      ],
      "coastline": "Borders Saudi Arabia, Oman"
    },
    "clues": [
      "Global financial, aviation, and trade nexus (Dubai); strategic location on Strait of Hormuz; major investor in Pakistan.",
      "Governed as a Federal Elective Constitutional Monarchy (7 Emirates); official language(s): Arabic; active member of UN, OPEC, GCC, OIC, Arab League.",
      "Its national capital city is Abu Dhabi (Population: 10.2 Million).",
      "Located in Middle East; official currency: UAE Dirham (AED, د.إ)."
    ],
    "funFact": "Official title: United Arab Emirates • Population: 10.2 Million • Language: Arabic.",
    "examPoints": "Global financial, aviation, and trade nexus (Dubai); strategic location on Strait of Hormuz; major investor in Pakistan."
  },
  {
    "id": "gb",
    "name": "United Kingdom",
    "continent": "Europe",
    "region": "Western Europe",
    "flag": "🇬🇧",
    "capital": "London",
    "currency": "Pound Sterling (GBP, £)",
    "landmark": {
      "name": "Historic Capital District of London",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Constitutional Monarchy) and premier national cultural monuments in Western Europe."
    },
    "mapOutline": {
      "shape": "Located in Western Europe (Europe), sharing land frontiers with 1 neighboring country.",
      "borders": [
        "Ireland"
      ],
      "coastline": "Borders Ireland"
    },
    "clues": [
      "Permanent member of UNSC; leading financial capital (City of London); former British Empire.",
      "Governed as a Unitary Parliamentary Constitutional Monarchy; official language(s): English; active member of UN, UNSC (Permanent Member), NATO, G7, G20.",
      "Its national capital city is London (Population: 68.2 Million).",
      "Located in Western Europe; official currency: Pound Sterling (GBP, £)."
    ],
    "funFact": "Official title: United Kingdom of Great Britain and Northern Ireland • Population: 68.2 Million • Language: English.",
    "examPoints": "Permanent member of UNSC; leading financial capital (City of London); former British Empire."
  },
  {
    "id": "us",
    "name": "United States",
    "continent": "North America",
    "region": "North America",
    "flag": "🇺🇸",
    "capital": "Washington, D.C.",
    "currency": "United States Dollar (USD, $)",
    "landmark": {
      "name": "Historic Capital District of Washington, D.C.",
      "icon": "fa-landmark",
      "desc": "Seat of government (Federal Constitutional Presidential Republic) and premier national cultural monuments in North America."
    },
    "mapOutline": {
      "shape": "Located in North America (North America), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Canada",
        "Mexico"
      ],
      "coastline": "Borders Canada, Mexico"
    },
    "clues": [
      "World's largest economy by nominal GDP; global superpower; host to UN Headquarters in New York.",
      "Governed as a Federal Constitutional Presidential Republic; official language(s): English (de facto); active member of UN, UNSC (Permanent Member), NATO, G7, G20.",
      "Its national capital city is Washington, D.C. (Population: 336 Million).",
      "Located in North America; official currency: United States Dollar (USD, $)."
    ],
    "funFact": "Official title: United States of America • Population: 336 Million • Language: English (de facto).",
    "examPoints": "World's largest economy by nominal GDP; global superpower; host to UN Headquarters in New York."
  },
  {
    "id": "uy",
    "name": "Uruguay",
    "continent": "South America",
    "region": "South America",
    "flag": "🌐",
    "capital": "Montevideo",
    "currency": "Uruguayan Peso",
    "landmark": {
      "name": "Historic Capital District of Montevideo",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in South America."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in South America (South America) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in South America"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in South America.",
      "Governed as a Unitary Presidential Republic; official language(s): Spanish; active member of UN, Mercosur, OAS.",
      "Its national capital city is Montevideo (Population: 3.4 M).",
      "Located in South America; official currency: Uruguayan Peso."
    ],
    "funFact": "Official title: Uruguay • Population: 3.4 M • Language: Spanish.",
    "examPoints": "Uruguay is an internationally recognized sovereign state situated in South America."
  },
  {
    "id": "uz",
    "name": "Uzbekistan",
    "continent": "Asia",
    "region": "Central Asia",
    "flag": "🇺🇿",
    "capital": "Tashkent",
    "currency": "Uzbekistani Som (UZS, so'm)",
    "landmark": {
      "name": "Registan Square (Samarkand)",
      "icon": "fa-mosque",
      "desc": "Timurid Silk Road heartland framed by three mosaic-covered madrasahs (Ulugh Beg, Sher-Dor, Tilya-Kori)."
    },
    "mapOutline": {
      "shape": "Located in Central Asia (Asia), sharing land frontiers with 5 neighboring countries.",
      "borders": [
        "Kazakhstan",
        "Kyrgyzstan",
        "Tajikistan",
        "Afghanistan",
        "Turkmenistan"
      ],
      "coastline": "Borders Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan"
    },
    "clues": [
      "Doubly landlocked nation (one of only two in world with Liechtenstein); historic Silk Road cities (Samarkand, Bukhara); cotton and gold producer.",
      "Governed as a Unitary Presidential Constitutional Republic; official language(s): Uzbek; active member of UN, SCO, CIS, OIC, ECO.",
      "Its national capital city is Tashkent (Population: 36.8 Million).",
      "Located in Central Asia; official currency: Uzbekistani Som (UZS, so'm)."
    ],
    "funFact": "Official title: Republic of Uzbekistan • Population: 36.8 Million • Language: Uzbek.",
    "examPoints": "Doubly landlocked nation (one of only two in world with Liechtenstein); historic Silk Road cities (Samarkand, Bukhara); cotton and gold producer."
  },
  {
    "id": "vu",
    "name": "Vanuatu",
    "continent": "Oceania",
    "region": "Oceania",
    "flag": "🌐",
    "capital": "Port Vila",
    "currency": "Vanuatu Vatu",
    "landmark": {
      "name": "Historic Capital District of Port Vila",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Parliamentary Republic) and premier national cultural monuments in Oceania."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Oceania (Oceania) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Oceania"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Oceania.",
      "Governed as a Unitary Parliamentary Republic; official language(s): Bislama, English, French; active member of UN, Commonwealth.",
      "Its national capital city is Port Vila (Population: 330,000).",
      "Located in Oceania; official currency: Vanuatu Vatu."
    ],
    "funFact": "Official title: Vanuatu • Population: 330,000 • Language: Bislama, English, French.",
    "examPoints": "Vanuatu is an internationally recognized sovereign state situated in Oceania."
  },
  {
    "id": "va",
    "name": "Vatican City",
    "continent": "Europe",
    "region": "Southern Europe (Enclave in Rome)",
    "flag": "🇻🇦",
    "capital": "Vatican City",
    "currency": "Euro (EUR, €)",
    "landmark": {
      "name": "St. Peter's Basilica & Sistine Chapel",
      "icon": "fa-church",
      "desc": "Renaissance masterpiece featuring Michelangelo's dome and Sistine Chapel ceiling frescoes."
    },
    "mapOutline": {
      "shape": "Walled landlocked enclave inside the city of Rome in Southern Europe (Enclave in Rome) (Europe).",
      "borders": [
        "Italy"
      ],
      "coastline": "Walled landlocked enclave inside the city of Rome"
    },
    "clues": [
      "World's smallest independent sovereign state by both area (0.49 sq km / 49 hectares) and population; established via the 1929 Lateran Treaty; UN Observer State (Holy See).",
      "Renaissance masterpiece featuring Michelangelo's dome and Sistine Chapel ceiling frescoes.",
      "Its capital is Vatican City and official language(s): Italian, Latin.",
      "Situated in Southern Europe (Enclave in Rome) using Euro (EUR, €)."
    ],
    "funFact": "Renaissance masterpiece featuring Michelangelo's dome and Sistine Chapel ceiling frescoes.",
    "examPoints": "World's smallest independent sovereign state by both area (0.49 sq km / 49 hectares) and population; established via the 1929 Lateran Treaty; UN Observer State (Holy See)."
  },
  {
    "id": "ve",
    "name": "Venezuela",
    "continent": "South America",
    "region": "South America",
    "flag": "🇻🇪",
    "capital": "Caracas",
    "currency": "Venezuelan Bolívar (VES, Bs.)",
    "landmark": {
      "name": "Angel Falls (Canaima National Park)",
      "icon": "fa-water",
      "desc": "World's highest uninterrupted waterfall (979 meters) plunging from Auyán-tepui tabletop mountain."
    },
    "mapOutline": {
      "shape": "Located in South America (South America), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "Colombia",
        "Brazil",
        "Guyana"
      ],
      "coastline": "Borders Colombia, Brazil, Guyana"
    },
    "clues": [
      "Holds world's largest proven crude oil reserves (~303 Billion barrels, Orinoco Belt); founding OPEC member.",
      "Governed as a Federal Presidential Republic; official language(s): Spanish; active member of UN, OPEC (Founding), NAM.",
      "Its national capital city is Caracas (Population: 29 Million).",
      "Located in South America; official currency: Venezuelan Bolívar (VES, Bs.)."
    ],
    "funFact": "Official title: Bolivarian Republic of Venezuela • Population: 29 Million • Language: Spanish.",
    "examPoints": "Holds world's largest proven crude oil reserves (~303 Billion barrels, Orinoco Belt); founding OPEC member."
  },
  {
    "id": "vn",
    "name": "Vietnam",
    "continent": "Asia",
    "region": "Southeast Asia",
    "flag": "🇻🇳",
    "capital": "Hanoi",
    "currency": "Vietnamese Dong (VND, ₫)",
    "landmark": {
      "name": "Ha Long Bay & Hoi An Ancient Town",
      "icon": "fa-water",
      "desc": "UNESCO seascape of nearly 2,000 towering limestone karsts rising from emerald Gulf of Tonkin waters."
    },
    "mapOutline": {
      "shape": "Located in Southeast Asia (Asia), sharing land frontiers with 3 neighboring countries.",
      "borders": [
        "China",
        "Laos",
        "Cambodia"
      ],
      "coastline": "Borders China, Laos, Cambodia"
    },
    "clues": [
      "Rapidly growing manufacturing export powerhouse; strategic claimant in South China Sea; key node in supply chain diversification.",
      "Governed as a Unitary One-Party Socialist Republic; official language(s): this countryese; active member of UN, ASEAN, APEC, CPTPP.",
      "Its national capital city is Hanoi (Population: 100.3 Million).",
      "Located in Southeast Asia; official currency: Vietnamese Dong (VND, ₫)."
    ],
    "funFact": "Official title: Socialist Republic of Vietnam • Population: 100.3 Million • Language: Vietnamese.",
    "examPoints": "Rapidly growing manufacturing export powerhouse; strategic claimant in South China Sea; key node in supply chain diversification."
  },
  {
    "id": "ye",
    "name": "Yemen",
    "continent": "Asia",
    "region": "Middle East",
    "flag": "🇾🇪",
    "capital": "Sana'a (Aden interim)",
    "currency": "Yemeni Rial (YER, ﷼)",
    "landmark": {
      "name": "Old Walled City of Sana'a & Socotra Dragon's Blood Trees",
      "icon": "fa-city",
      "desc": "UNESCO multi-story rammed-earth tower houses and Socotra's alien-like endemic flora."
    },
    "mapOutline": {
      "shape": "Located in Middle East (Asia), sharing land frontiers with 2 neighboring countries.",
      "borders": [
        "Saudi Arabia",
        "Oman"
      ],
      "coastline": "Borders Saudi Arabia, Oman"
    },
    "clues": [
      "Overlooks Bab-el-Mandeb Strait chokepoint connecting Red Sea to Gulf of Aden; key flashpoint for Red Sea shipping.",
      "Governed as a Unitary Presidential Republic; official language(s): Arabic; active member of UN, OIC, Arab League, NAM.",
      "Its national capital city is Sana'a (Aden interim) (Population: 34.4 Million).",
      "Located in Middle East; official currency: Yemeni Rial (YER, ﷼)."
    ],
    "funFact": "Official title: Republic of Yemen • Population: 34.4 Million • Language: Arabic.",
    "examPoints": "Overlooks Bab-el-Mandeb Strait chokepoint connecting Red Sea to Gulf of Aden; key flashpoint for Red Sea shipping."
  },
  {
    "id": "zm",
    "name": "Zambia",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Lusaka",
    "currency": "Zambian Kwacha",
    "landmark": {
      "name": "Historic Capital District of Lusaka",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): English; active member of UN, AU, Commonwealth, SADC.",
      "Its national capital city is Lusaka (Population: 20 M).",
      "Located in Africa; official currency: Zambian Kwacha."
    ],
    "funFact": "Official title: Zambia • Population: 20 M • Language: English.",
    "examPoints": "Zambia is an internationally recognized sovereign state situated in Africa."
  },
  {
    "id": "zw",
    "name": "Zimbabwe",
    "continent": "Africa",
    "region": "Africa",
    "flag": "🌐",
    "capital": "Harare",
    "currency": "Zimbabwe Gold (ZiG) & USD",
    "landmark": {
      "name": "Historic Capital District of Harare",
      "icon": "fa-landmark",
      "desc": "Seat of government (Unitary Presidential Republic) and premier national cultural monuments in Africa."
    },
    "mapOutline": {
      "shape": "An island or maritime nation situated in Africa (Africa) surrounded by open sea lanes.",
      "borders": [
        "Island / Maritime Nation (No Land Borders)"
      ],
      "coastline": "Maritime coastline in Africa"
    },
    "clues": [
      "this country is an internationally recognized sovereign state situated in Africa.",
      "Governed as a Unitary Presidential Republic; official language(s): English, Shona, Ndebele; active member of UN, AU, SADC.",
      "Its national capital city is Harare (Population: 16 M).",
      "Located in Africa; official currency: Zimbabwe Gold (ZiG) & USD."
    ],
    "funFact": "Official title: Zimbabwe • Population: 16 M • Language: English, Shona, Ndebele.",
    "examPoints": "Zimbabwe is an internationally recognized sovereign state situated in Africa."
  }
];

if (typeof window !== 'undefined') {
  window.GUESS_COUNTRY_DATA = GUESS_COUNTRY_DATA;
}
