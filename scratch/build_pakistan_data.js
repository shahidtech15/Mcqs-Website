const fs = require('fs');

const pakistanMapData = {
  categories: [
    { id: "all", name: "All Features", icon: "fa-earth-asia", color: "#047857" },
    { id: "provinces", name: "Provinces & Territories", icon: "fa-map", color: "#059669" },
    { id: "districts", name: "Divisions & Districts", icon: "fa-city", color: "#2563eb" },
    { id: "rivers", name: "Rivers & Waterways", icon: "fa-water", color: "#0284c7" },
    { id: "dams", name: "Dams & Barrages", icon: "fa-archway", color: "#d97706" },
    { id: "parks", name: "National Parks", icon: "fa-tree", color: "#16a34a" },
    { id: "heritage", name: "Historical & UNESCO Sites", icon: "fa-landmark", color: "#e11d48" },
    { id: "cities", name: "Important Cities", icon: "fa-building", color: "#7c3aed" }
  ],

  // 1. Provinces & Administrative Territories
  provinces: [
    {
      id: "punjab",
      name: "Punjab",
      category: "provinces",
      type: "Province",
      capital: "Lahore",
      divisionsCount: 10,
      districtsCount: 42,
      population2023: "127.68 Million (~53% of Pakistan's total population)",
      areaKm2: "205,344 km² (25.8% of Pakistan)",
      literacyRate: "66.3%",
      lat: 31.17,
      lng: 72.7,
      tagline: "Land of Five Rivers & Agricultural Powerhouse",
      economicBase: "Contributes over 54% to Pakistan's national GDP. Produces 76% of national wheat, 70% of cotton, and 65% of sugarcane. Industrial centers: Lahore, Faisalabad (textiles), Sialkot (sports & surgical instruments), Gujranwala.",
      geographyDescription: "Dominated by the fertile Indus alluvial plain, bounded by the Salt Range in the north, the Cholistan and Thal deserts in the south and west, and bordered by India on the east.",
      riversFlowing: ["Indus", "Jhelum", "Chenab", "Ravi", "Sutlej"],
      examMcqPoints: [
        "Largest province by population: Punjab (127.7 Million, 2023 Census).",
        "Second largest province by land area after Balochistan.",
        "Total administrative divisions: 10 (Lahore, Rawalpindi, Faisalabad, Multan, Gujranwala, Bahawalpur, Sargodha, Sahiwal, D.G. Khan, Gujrat).",
        "Highest point: Mount Sakaser in the Salt Range (1,522 m / 4,993 ft)."
      ]
    },
    {
      id: "sindh",
      name: "Sindh",
      category: "provinces",
      type: "Province",
      capital: "Karachi",
      divisionsCount: 7,
      districtsCount: 30,
      population2023: "55.69 Million (~23% of national population)",
      areaKm2: "140,914 km² (17.7% of Pakistan)",
      literacyRate: "61.8%",
      lat: 25.89,
      lng: 68.52,
      tagline: "Mehran & Bab-ul-Islam (Gateway of Islam in the Subcontinent)",
      economicBase: "Pakistan's primary maritime and financial engine. Hosts the country's two busiest seaports (Port of Karachi and Port Qasim), the Pakistan Stock Exchange (PSX), major gas fields (Sui southern grid, Mari, Qadirpur), and the massive Thar Coal Basin (Block I & II).",
      geographyDescription: "Bounded by the Thar Desert on the east, the Kirthar Mountains on the west, the Arabian Sea on the south, and Punjab/Balochistan on the north. Shaped by the lower Indus River ending in the 17-creek Indus Delta.",
      riversFlowing: ["Indus River (Terminal Course & Delta)"],
      examMcqPoints: [
        "Second most populous province: Sindh (55.69 Million, 2023 Census).",
        "Title 'Bab-ul-Islam' earned when Muhammad bin Qasim conquered Sindh in 712 CE at Daibul.",
        "Contains Pakistan's largest city and financial capital: Karachi.",
        "Highest peak in Sindh: Barocho Peak / Kirthar Range (~2,174 m); highest hill station: Gorakh Hill (1,734 m)."
      ]
    },
    {
      id: "khyber-pakhtunkhwa",
      name: "Khyber Pakhtunkhwa (KP)",
      category: "provinces",
      type: "Province",
      capital: "Peshawar",
      divisionsCount: 7,
      districtsCount: 36,
      population2023: "40.85 Million (including Merged Tribal Districts / ex-FATA)",
      areaKm2: "101,741 km² (12.8% of Pakistan)",
      literacyRate: "55.1%",
      lat: 34.0,
      lng: 71.5,
      tagline: "Gateway to Central Asia & Historic Frontier",
      economicBase: "Hydroelectric power generation (Tarbela, Warsak, Gomal Zam), tobacco production (Swabi/Mardan ~75% of national output), marble & mineral mining, tourism (Swat, Kaghan, Kumrat), and trans-border trade with Afghanistan.",
      geographyDescription: "Stretches from the rugged glaciers of the Hindu Kush (Tirich Mir 7,708m) in Chitral to the Sulaiman Range in the south. Bisected by the Kabul, Swat, and Kurram rivers.",
      riversFlowing: ["Indus", "Kabul", "Swat", "Kurram", "Gomal", "Panjkora", "Kunhar"],
      examMcqPoints: [
        "25th Constitutional Amendment (May 2018) merged the Federally Administered Tribal Areas (FATA) into KP.",
        "Highest peak in KP and the entire Hindu Kush range: Tirich Mir (7,708 m / 25,289 ft, Chitral).",
        "Historic Khyber Pass connects Peshawar (Jamrud) to Torkham on the Afghan border.",
        "Produces over 50% of Pakistan's total hydroelectricity."
      ]
    },
    {
      id: "balochistan",
      name: "Balochistan",
      category: "provinces",
      type: "Province",
      capital: "Quetta",
      divisionsCount: 8,
      districtsCount: 36,
      population2023: "14.89 Million (6.2% of national population)",
      areaKm2: "347,190 km² (43.6% of Pakistan's total landmass)",
      literacyRate: "43.5%",
      lat: 28.5,
      lng: 65.5,
      tagline: "Largest Landmass, Mineral Wealth & Coastal Frontier",
      economicBase: "Immense mineral reserves (Reko Diq copper-gold, Saindak, marble, coal), natural gas (historic Sui gas field discovered 1952), marine fisheries along the 770-km Makran Coast, fruit orchards (apples, grapes, dates, pomegranates), and Gwadar Deepwater Port.",
      geographyDescription: "Arid high plateau with an average elevation of 600–900m, bounded by the Sulaiman and Kirthar ranges in the east, the Makran ranges in the south, and the Chagai hills and desert in the northwest.",
      riversFlowing: ["Hingol", "Dasht", "Hub", "Porali", "Mula", "Bolan"],
      examMcqPoints: [
        "Largest province by area: Balochistan (~44% of Pakistan).",
        "Lowest population density in Pakistan (~43 persons per km²).",
        "Coastline length: Approximately 770 km (out of Pakistan's ~1,046 km total coastline).",
        "Bolan Pass connects Sibi to Quetta through the Toba Kakar range."
      ]
    },
    {
      id: "islamabad-capital-territory",
      name: "Islamabad Capital Territory (ICT)",
      category: "provinces",
      type: "Federal Capital Territory",
      capital: "Islamabad",
      divisionsCount: 1,
      districtsCount: 1,
      population2023: "2.36 Million (2023 Digital Census)",
      areaKm2: "906 km²",
      literacyRate: "84.0% (Highest in Pakistan)",
      lat: 33.72,
      lng: 73.06,
      tagline: "Federal Capital & Diplomatic Headquarters",
      economicBase: "Administrative, governmental, diplomatic, educational, and emerging IT technology hub of Pakistan. Master-planned by Greek architect Constantinos Doxiadis in 1960.",
      geographyDescription: "Situated on the Potohar Plateau against the scenic backdrop of the Margalla Hills (outer foothills of the Himalayas).",
      riversFlowing: ["Soan River", "Korang River"],
      examMcqPoints: [
        "Became the official capital of Pakistan in 1967, replacing Rawalpindi (which had served as interim capital after Karachi from 1959).",
        "Designed on a grid system with 8 zones and functional sectors (Diplomatic, Commercial, Educational, Residential).",
        "Faisal Mosque (designed by Turkish architect Vedat Dalokay) was the largest mosque in the world from 1986 to 1993."
      ]
    },
    {
      id: "gilgit-baltistan",
      name: "Gilgit-Baltistan (GB)",
      category: "provinces",
      type: "Autonomous Administrative Territory",
      capital: "Gilgit",
      divisionsCount: 3,
      districtsCount: 14,
      population2023: "Approx. 1.8 Million",
      areaKm2: "72,971 km²",
      literacyRate: "72.0%",
      lat: 35.92,
      lng: 74.31,
      tagline: "Roof of the World & Junction of Mountain Ranges",
      economicBase: "Ecotourism, mountaineering, dry fruits (apricots, walnuts, cherries), gem mining, and transit trade via the Karakoram Highway (KKH) through the Khunjerab Pass to China.",
      geographyDescription: "The junction point where the Himalayas, Karakoram, and Hindu Kush mountain ranges converge. Home to 5 of the world's 14 Eight-Thousanders (including K2, 8,611m) and the largest concentration of glaciers outside the polar regions.",
      riversFlowing: ["Indus (Upper Basin)", "Gilgit River", "Hunza River", "Shyok River", "Shigar River"],
      examMcqPoints: [
        "K2 (Mount Godwin-Austen, 8,611 m / 28,251 ft) is the 2nd highest mountain in the world, located in the Karakoram range in GB.",
        "Contains three of the world's longest non-polar glaciers: Biafo (67 km), Baltoro (63 km), and Batura (57 km).",
        "Deosai Plateau ('Land of Giants') is the 2nd highest plateau in the world (~4,114 m) after the Tibetan Plateau.",
        "Connected to China via the Khunjerab Pass (4,693 m), the highest paved international border crossing in the world."
      ]
    },
    {
      id: "azad-jammu-kashmir",
      name: "Azad Jammu & Kashmir (AJK)",
      category: "provinces",
      type: "Self-Governing Administrative State",
      capital: "Muzaffarabad",
      divisionsCount: 3,
      districtsCount: 10,
      population2023: "Approx. 4.4 Million",
      areaKm2: "13,297 km²",
      literacyRate: "76.5%",
      lat: 34.36,
      lng: 73.47,
      tagline: "Paradise on Earth & Hydro Power Reservoir",
      economicBase: "Hydroelectric power (Mangla Dam 1,150 MW, Neelum-Jhelum 969 MW), foreign remittances from the Mirpuri diaspora in the UK, tourism (Neelum Valley, Rawalakot, Leepa Valley), and timber forestry.",
      geographyDescription: "Mountainous territory traversed by the Pir Panjal range in the south and the Higher Himalayas in the north, drained by the Jhelum, Neelum, and Poonch rivers.",
      riversFlowing: ["Jhelum River", "Neelum River (Kishanganga)", "Poonch River"],
      examMcqPoints: [
        "Muzaffarabad is situated at the confluence of the Jhelum and Neelum rivers.",
        "Mangla Dam (constructed 1967 in Mirpur district on the Jhelum River) is Pakistan's 2nd largest dam.",
        "Separated from Indian-administered Jammu & Kashmir by the 740-km Line of Control (LoC) established after the 1971 war under the 1972 Simla Agreement."
      ]
    }
  ],

  // 2. Strategic Divisions & Key Districts
  districts: [
    {
      id: "dist-lahore",
      name: "Lahore District",
      province: "Punjab",
      division: "Lahore Division",
      lat: 31.52,
      lng: 74.35,
      population: "13.0 Million (2nd largest city in Pakistan)",
      area: "1,772 km²",
      significance: "Historical and cultural heart of Pakistan. Known as the 'City of Gardens'. UNESCO World Heritage Lahore Fort and Shalimar Gardens, Badshahi Mosque, Minar-e-Pakistan.",
      examPoints: "Lahore Resolution (Pakistan Resolution) passed here on March 23, 1940, at Minto Park (now Iqbal Park)."
    },
    {
      id: "dist-karachi-central",
      name: "Karachi Division & Districts",
      province: "Sindh",
      division: "Karachi Division",
      lat: 24.86,
      lng: 67.0,
      population: "20.38 Million (Pakistan's largest metropolis)",
      area: "3,780 km²",
      significance: "Financial capital, premier seaport, industrial center. Mazar-e-Quaid (tomb of Quaid-e-Azam Muhammad Ali Jinnah), State Bank of Pakistan, PSX.",
      examPoints: "Served as Pakistan's first federal capital from August 14, 1947, to 1959. Divided into 7 administrative districts."
    },
    {
      id: "dist-faisalabad",
      name: "Faisalabad District",
      province: "Punjab",
      division: "Faisalabad Division",
      lat: 31.41,
      lng: 73.07,
      population: "9.1 Million (3rd largest city in Pakistan)",
      area: "5,856 km²",
      significance: "Textile manufacturing hub known as the 'Manchester of Pakistan'. Centered around the historic Eight-Bazaar Clock Tower.",
      examPoints: "Originally named Lyallpur after Sir James Lyall (Lt. Governor of Punjab); renamed Faisalabad in 1979 in honor of King Faisal of Saudi Arabia."
    },
    {
      id: "dist-rawalpindi",
      name: "Rawalpindi District",
      province: "Punjab",
      division: "Rawalpindi Division",
      lat: 33.6,
      lng: 73.04,
      population: "5.5 Million",
      area: "5,286 km²",
      significance: "Headquarters of the Pakistan Armed Forces (GHQ). Twin city of Islamabad. Ayub National Park, Liaquat Bagh.",
      examPoints: "Served as the interim federal capital of Pakistan from 1959 to 1967 while Islamabad was under construction."
    },
    {
      id: "dist-peshawar",
      name: "Peshawar District",
      province: "Khyber Pakhtunkhwa",
      division: "Peshawar Division",
      lat: 34.01,
      lng: 71.52,
      population: "4.7 Million",
      area: "1,257 km²",
      significance: "Oldest living city in South Asia (dating back to 539 BCE). Qissa Khwani Bazaar, Bala Hissar Fort, Mahabat Khan Mosque, Islamia College Peshawar (founded 1913).",
      examPoints: "Historic gateway for invaders arriving from Central Asia through the Khyber Pass."
    },
    {
      id: "dist-quetta",
      name: "Quetta District",
      province: "Balochistan",
      division: "Quetta Division",
      lat: 30.17,
      lng: 66.97,
      population: "2.5 Million",
      area: "2,653 km²",
      significance: "Provincial capital of Balochistan known as the 'Fruit Garden of Pakistan'. Hanna Lake, Command and Staff College Quetta (est. 1905).",
      examPoints: "Destroyed in the catastrophic Quetta Earthquake of May 31, 1935 (7.7 magnitude), leading to pioneering earthquake-resistant architectural codes."
    },
    {
      id: "dist-gwadar",
      name: "Gwadar District",
      province: "Balochistan",
      division: "Makran Division",
      lat: 25.12,
      lng: 62.32,
      population: "305,000",
      area: "12,637 km²",
      significance: "Deepwater warm-water port at the mouth of the Persian Gulf. Focal node of the $62B China-Pakistan Economic Corridor (CPEC). Koh-e-Batil hammerhead peninsula.",
      examPoints: "Purchased from the Sultanate of Oman on September 8, 1958, for $3 Million under Prime Minister Feroz Khan Noon."
    },
    {
      id: "dist-multan",
      name: "Multan District",
      province: "Punjab",
      division: "Multan Division",
      lat: 30.19,
      lng: 71.46,
      population: "5.3 Million",
      area: "3,720 km²",
      significance: "Known as the 'City of Saints' (Madinat-ul-Auliya). Shrines of Hazrat Bahauddin Zakariya and Shah Rukn-e-Alam. Blue pottery and Chaunsa mangoes.",
      examPoints: "One of the oldest continuously inhabited cities in the subcontinent. Captured by Muhammad bin Qasim in 713 CE."
    },
    {
      id: "dist-sialkot",
      name: "Sialkot District",
      province: "Punjab",
      division: "Gujranwala / Gujrat Division",
      lat: 32.49,
      lng: 74.52,
      population: "4.4 Million",
      area: "3,015 km²",
      significance: "World capital of hand-stitched footballs (produced FIFA World Cup match balls 'Telstar' and 'Al Rihla') and surgical instruments. Birthplace of Allama Muhammad Iqbal (Iqbal Manzil).",
      examPoints: "Operates Pakistan's first privately-owned international airport (Sialkot International Airport) built by local exporters."
    },
    {
      id: "dist-hyderabad",
      name: "Hyderabad District",
      province: "Sindh",
      division: "Hyderabad Division",
      lat: 25.39,
      lng: 68.37,
      population: "2.4 Million",
      area: "993 km²",
      significance: "Historic capital of Sindh under the Kalhora and Talpur dynasties. Pacco Qillo (Pakka Qila), Tombs of Talpur Mirs, Sindh University Jamshoro vicinity.",
      examPoints: "Founded in 1768 by Mian Ghulam Shah Kalhoro on the site of the ancient town of Nerun Kot."
    },
    {
      id: "dist-skardu",
      name: "Skardu District",
      province: "Gilgit-Baltistan",
      division: "Baltistan Division",
      lat: 35.3,
      lng: 75.63,
      population: "300,000",
      area: "8,500 km²",
      significance: "Tourism gateway to K2, Broad Peak, and the Baltoro Glacier. Shangrila Resort, Lower Kachura Lake, Satpara Lake, Kharpocho Fort.",
      examPoints: "Direct gateway to the Deosai National Park and the high Karakorams."
    }
  ],

  // 3. Rivers & Major Waterways
  rivers: [
    {
      id: "river-indus",
      name: "Indus River (Sindhu / Abasin)",
      category: "rivers",
      lengthKm: "3,180 km (Pakistan's Longest River & National Lifeline)",
      origin: "Lake Mansarovar / Tibetan Plateau (Mount Kailash)",
      mouth: "Arabian Sea (Indus Delta, Sindh)",
      tributariesLeft: ["Zanskar", "Suru", "Sohan", "Jhelum", "Chenab", "Ravi", "Sutlej (Panjnad)"],
      tributariesRight: ["Shyok", "Gilgit", "Hunza", "Kabul", "Swat", "Kurram", "Gomal"],
      damsBuilt: ["Tarbela Dam", "Diamer-Bhasha Dam", "Dasu Dam"],
      barragesBuilt: ["Jinnah Barrage", "Chashma Barrage", "Taunsa Barrage", "Guddu Barrage", "Sukkur Barrage", "Kotri Barrage"],
      lat: 27.5,
      lng: 68.5,
      significance: "The foundation of the Indus Basin Irrigation System (IBIS), the largest contiguous irrigation network on Earth. Gives its name to India and the subcontinent.",
      examPoints: "Indus Waters Treaty (IWT) signed on September 19, 1960, in Karachi by President Ayub Khan and PM Jawaharlal Nehru, mediated by the World Bank. Allocated Western Rivers (Indus, Jhelum, Chenab) to Pakistan."
    },
    {
      id: "river-jhelum",
      name: "Jhelum River (Hydaspes)",
      category: "rivers",
      lengthKm: "725 km",
      origin: "Verinag Spring in the Kashmir Valley",
      mouth: "Merges with Chenab River at Trimmu, Punjab",
      damsBuilt: ["Mangla Dam (AJK)", "Rasul Barrage (Punjab)"],
      lat: 32.93,
      lng: 73.72,
      significance: "Famous for the Battle of the Hydaspes (326 BCE) between Alexander the Great and King Porus. Feeds the Mangla Dam reservoir.",
      examPoints: "Allocated to Pakistan under the Indus Waters Treaty 1960. Neelum-Jhelum Hydroelectric Project (969 MW) constructed on its major tributary."
    },
    {
      id: "river-chenab",
      name: "Chenab River (Asikni / Chandrabhaga)",
      category: "rivers",
      lengthKm: "960 km",
      origin: "Baralacha La pass in Himachal Pradesh (India)",
      mouth: "Merges with Sutlej at Panjnad to form the Panjnad River",
      damsBuilt: ["Salal, Baglihar & Kishanganga (Indian side); Marala Headworks, Khanki, Qadirabad, Trimmu (Pakistan side)"],
      lat: 31.85,
      lng: 72.1,
      significance: "The central romantic river of Punjabi folklore (legend of Heer Ranjha and Sohni Mahiwal). Provides massive irrigation to central Punjab.",
      examPoints: "Head Marala (Sialkot) is the entry point of Chenab into Pakistan. Subject to water disputes over Indian upstream projects (Baglihar Dam on Chenab)."
    },
    {
      id: "river-kabul",
      name: "Kabul River",
      category: "rivers",
      lengthKm: "700 km (360 km inside Pakistan)",
      origin: "Sanglakh Range in Hindu Kush (Afghanistan)",
      mouth: "Empties into the Indus River near Attock Fort",
      damsBuilt: ["Warsak Dam (Pakistan, 1960)", "Naghlu Dam (Afghanistan)"],
      lat: 34.02,
      lng: 71.75,
      significance: "Primary river system of eastern Afghanistan and the Peshawar Valley in KP. Warsak Dam was Pakistan's first major hydroelectric dam (Colombo Plan).",
      examPoints: "Not covered by any bilateral water treaty between Pakistan and Afghanistan, representing an important future water diplomacy challenge."
    },
    {
      id: "river-swat",
      name: "Swat River",
      category: "rivers",
      lengthKm: "240 km",
      origin: "Glacial melting in Kalam Valley / Ushu & Gabral rivers",
      mouth: "Merges with Kabul River at Nisatta, Charsadda",
      damsBuilt: ["Mohmand Dam (under construction)", "Munda Headworks"],
      lat: 34.75,
      lng: 72.35,
      significance: "Cradle of the Gandhara Buddhist civilization. Provides vital irrigation to Swat, Malakand, and Peshawar valley.",
      examPoints: "Mohmand Dam on the Swat River will generate 800 MW of electricity and store 1.29 million acre-feet (MAF) of water."
    }
  ],

  // 4. Dams & Barrages
  dams: [
    {
      id: "dam-tarbela",
      name: "Tarbela Dam",
      category: "dams",
      river: "Indus River",
      location: "Haripur & Swabi Districts, KP",
      type: "Earth-and-Rock-Filled Dam",
      capacityMw: "4,888 MW (expanding to 6,450 MW under Tarbela 5th Extension)",
      heightM: "143 m (470 ft)",
      reservoirCapMaf: "11.62 MAF (original live capacity)",
      completionYear: 1976,
      lat: 34.08,
      lng: 72.69,
      significance: "World's largest earth-filled dam by structural volume (106 million cubic meters). Backbone of Pakistan's agricultural irrigation and renewable electricity.",
      examPoints: "Constructed under the Indus Basin Development Fund Agreement following the 1960 Indus Waters Treaty."
    },
    {
      id: "dam-mangla",
      name: "Mangla Dam",
      category: "dams",
      river: "Jhelum River",
      location: "Mirpur District, AJK",
      type: "Embankment Dam",
      capacityMw: "1,150 MW (planned up-gradation to 1,310 MW)",
      heightM: "147 m (raised height)",
      reservoirCapMaf: "7.39 MAF",
      completionYear: 1967,
      lat: 33.14,
      lng: 73.64,
      significance: "World's 6th largest dam. The Mangla Dam Raising Project (completed 2009) raised the crest by 30 feet, adding 2.88 MAF of water storage.",
      examPoints: "Displaced over 110,000 residents of old Mirpur city, leading to significant emigration to the United Kingdom."
    },
    {
      id: "dam-diamer-bhasha",
      name: "Diamer-Bhasha Dam",
      category: "dams",
      river: "Indus River",
      location: "Diamer (GB) and Kohistan (KP) Border",
      type: "Roller Compacted Concrete (RCC) Dam",
      capacityMw: "4,500 MW",
      heightM: "272 m (World's Highest RCC Dam upon completion)",
      reservoirCapMaf: "8.1 MAF gross storage / 6.4 MAF live storage",
      completionYear: "Under Construction (Target 2029)",
      lat: 35.52,
      lng: 73.74,
      significance: "Mega multipurpose dam designed to extend the operational life of Tarbela Dam upstream by 35 years by trapping silt, while generating 18 billion kWh of clean energy annually.",
      examPoints: "Crucial strategic water reservoir to avert Pakistan's transition from water-stressed to water-scarce country."
    },
    {
      id: "barrage-sukkur",
      name: "Sukkur Barrage (Lloyd Barrage)",
      category: "dams",
      river: "Indus River",
      location: "Sukkur, Sindh",
      type: "Irrigation Barrage",
      gatesCount: 66,
      lengthM: "1,524 m (5,000 ft)",
      completionYear: 1932,
      lat: 27.69,
      lng: 68.85,
      significance: "Pride of Pakistan's irrigation engineering. Feeds 7 massive canals (Nara, Rohri, Eastern Nara, Dadu, Rice, North Western, Khairpur) irrigating over 7.6 million acres of farmland.",
      examPoints: "Commissioned on January 13, 1932, by Viceroy Lord Willingdon; designed by Sir Arnold Musto and Sir Charlton Harrison."
    },
    {
      id: "barrage-guddu",
      name: "Guddu Barrage",
      category: "dams",
      river: "Indus River",
      location: "Kashmore District, Sindh",
      type: "Irrigation Barrage",
      gatesCount: 64,
      lengthM: "1,355 m (4,445 ft)",
      completionYear: 1962,
      lat: 28.42,
      lng: 69.71,
      significance: "First barrage on the Indus River after entering Sindh from Punjab. Irrigates over 2.7 million acres in Sindh and Balochistan (via Desert Pat Feeder canals).",
      examPoints: "Inaugurated on March 1, 1962, by President Ayub Khan."
    },
    {
      id: "barrage-kotri",
      name: "Kotri Barrage (Ghulam Muhammad Barrage)",
      category: "dams",
      river: "Indus River",
      location: "Jamshoro / Hyderabad, Sindh",
      type: "Irrigation Barrage",
      gatesCount: 44,
      lengthM: "914 m (3,000 ft)",
      completionYear: 1955,
      lat: 25.43,
      lng: 68.31,
      significance: "The southernmost and final barrage on the Indus River before it reaches the Arabian Sea. Feeds the Kalri Baghar feeder canal providing drinking water to Keenjhar Lake for Karachi.",
      examPoints: "Inaugurated by Governor-General Ghulam Muhammad in March 1955."
    }
  ],

  // 5. National Parks & Biosphere Reserves
  parks: [
    {
      id: "park-hingol",
      name: "Hingol National Park",
      category: "parks",
      province: "Balochistan",
      districts: ["Lasbela", "Gwadar", "Awaran"],
      areaKm2: "6,195 km² (Pakistan's Largest National Park)",
      established: 1988,
      lat: 25.55,
      lng: 65.5,
      wildlife: "Sindh Ibex, Urial, Chinkara gazelle, Marsh Crocodile, Golden Jackal, Green Turtle",
      significance: "Famous for surreal rock formations shaped by coastal erosion: 'Princess of Hope' (named by actress Angelina Jolie), 'Sphinx of Balochistan', active mud volcanoes (Chandragup), and the ancient Hindu pilgrimage site Hinglaj Mata Mandir (Nani Mandir).",
      examPoints: "Makran Coastal Highway (N-10) passes directly through Hingol National Park."
    },
    {
      id: "park-deosai",
      name: "Deosai National Park",
      category: "parks",
      province: "Gilgit-Baltistan",
      districts: ["Skardu", "Astore"],
      areaKm2: "3,000 km² (Average Elevation: 4,114 m)",
      established: 1993,
      lat: 35.03,
      lng: 75.44,
      wildlife: "Critically endangered Himalayan Brown Bear (Ursus arctos isabellinus), Snow Leopard, Himalayan Ibex, Golden Marmot",
      significance: "Known as the 'Land of Giants' (Bhallu in Balti). World's second-highest alpine plateau. Contains crystal-clear Sheosar Lake (one of the highest lakes in the world).",
      examPoints: "Created specifically to protect the surviving population of the Himalayan Brown Bear."
    },
    {
      id: "park-kirthar",
      name: "Kirthar National Park",
      category: "parks",
      province: "Sindh",
      districts: ["Jamshoro", "Karachi"],
      areaKm2: "3,087 km² (Pakistan's 2nd Largest National Park)",
      established: 1974,
      lat: 25.7,
      lng: 67.55,
      wildlife: "Sindh Ibex (Capra aegagrus blythi), Chinkara gazelle, Urial sheep, Striped Hyena, Desert Wolf",
      significance: "First national park in Pakistan to be recognized by the United Nations (1975). Features the historic Ranikot Fort within its northern boundaries and Hub Dam lake.",
      examPoints: "Crucial wildlife sanctuary preserving the indigenous Sindh Ibex population."
    },
    {
      id: "park-margalla",
      name: "Margalla Hills National Park",
      category: "parks",
      province: "Islamabad Capital Territory",
      districts: ["ICT", "Rawalpindi"],
      areaKm2: "173 km²",
      established: 1980,
      lat: 33.75,
      lng: 73.05,
      wildlife: "Common Leopard (Panthera pardus), Rhesus Macaque, Barking Deer, Kalij Pheasant, over 250 bird species",
      significance: "Foothills of the Himalayas forming the northern skyline of Islamabad. Features popular hiking trails (Trail 3, Trail 5), Daman-e-Koh, Pir Sohawa, and historic Shakarparian.",
      examPoints: "A designated protected area forming the green ecological lungs of Pakistan's federal capital."
    },
    {
      id: "park-lal-suhanra",
      name: "Lal Suhanra National Park",
      category: "parks",
      province: "Punjab",
      districts: ["Bahawalpur"],
      areaKm2: "658 km²",
      established: 1972,
      lat: 29.33,
      lng: 71.95,
      wildlife: "Blackbuck antelope (reintroduced from Texas, USA), Chinkara gazelle, Nilgai, Houbara Bustard",
      significance: "UNESCO Biosphere Reserve featuring a unique tripartite ecosystem combination of desert dunes (Cholistan), wetlands (Patisar Lake), and irrigated forest plantations.",
      examPoints: "Pioneering center for captive breeding and reintroduction of the endangered Indian Blackbuck."
    }
  ],

  // 6. Historical & UNESCO World Heritage Sites
  heritage: [
    {
      id: "heritage-mohenjo-daro",
      name: "Mohenjo-Daro (Mound of the Dead)",
      category: "heritage",
      province: "Sindh",
      district: "Larkana District",
      period: "c. 2500 BCE – 1700 BCE (Bronze Age Indus Valley Civilization)",
      unescoYear: 1980,
      lat: 27.32,
      lng: 68.13,
      significance: "One of the world's earliest major planned urban settlements. Famed for baked brick architecture, covered underground drainage, the Great Bath, the Granary, the College of Priests, and iconic artifacts: the 'Priest-King' bust and the bronze 'Dancing Girl'.",
      examPoints: "Discovered in 1922 by archaeologist R.D. Banerji, excavated under Sir John Marshall (Director General of Archaeological Survey of India). First UNESCO World Heritage Site in Pakistan."
    },
    {
      id: "heritage-taxila",
      name: "Taxila (Takshashila)",
      category: "heritage",
      province: "Punjab",
      district: "Rawalpindi District",
      period: "c. 6th Century BCE – 5th Century CE (Gandhara Civilization)",
      unescoYear: 1980,
      lat: 33.74,
      lng: 72.82,
      significance: "Ancient center of Buddhist learning and philosophy. Contains ruins of three successive ancient cities: Bhir Mound, Sirkap (Graeco-Bactrian city), and Sirsukh (Kushan city), along with the Dharmarajika Stupa and Jaulian Monastery.",
      examPoints: "Chanakya (Kautilya), author of the ancient political treatise 'Arthashastra', was a scholar and teacher at ancient Taxila University."
    },
    {
      id: "heritage-rohtas-fort",
      name: "Rohtas Fort (Qila Rohtas)",
      category: "heritage",
      province: "Punjab",
      district: "Jhelum District",
      period: "1541 – 1548 CE (Sur Empire / Sher Shah Suri)",
      unescoYear: 1997,
      lat: 32.96,
      lng: 73.57,
      significance: "Masterpiece of early Muslim military architecture in South Asia. Built by Sher Shah Suri to block Mughal Emperor Humayun's return from Persia and subdue the local rebellious Gakhar tribes. Circumference of 4 km with 12 monumental gates (Sohail Gate, Kabuli Gate).",
      examPoints: "Never taken by storm or military force; stands intact as a premier example of Suri military fortification."
    },
    {
      id: "heritage-lahore-fort-shalimar",
      name: "Lahore Fort & Shalimar Gardens",
      category: "heritage",
      province: "Punjab",
      district: "Lahore District",
      period: "1566 – 1642 CE (Mughal Dynasty / Akbar, Jahangir, Shah Jahan, Aurangzeb)",
      unescoYear: 1981,
      lat: 31.59,
      lng: 74.31,
      significance: "Lahore Fort (Shahi Qila) contains 21 monumental Mughal structures: Sheesh Mahal (Palace of Mirrors), Naulakha Pavilion, Diwan-i-Aam, and Alamgiri Gate (facing Badshahi Mosque). Shalimar Gardens: tripartite Persian paradise water garden built by Shah Jahan in 1641-42 with 410 fountains.",
      examPoints: "Pinnacle of Mughal architectural expression and imperial landscape design."
    },
    {
      id: "heritage-makli-thatta",
      name: "Historical Monuments at Makli, Thatta",
      category: "heritage",
      province: "Sindh",
      district: "Thatta District",
      period: "14th – 18th Century CE (Samma, Arghun, Tarkhan & Mughal Dynasties)",
      unescoYear: 1981,
      lat: 24.75,
      lng: 67.9,
      significance: "One of the largest funerary necropolises in the world, spanning an 8.5 km plateau with an estimated 500,000 to 1 million graves and monumental mausoleums. Celebrated for intricate stone carving, floral geometric motifs, and glazed turquoise Sindhi blue tilework (Kashi work).",
      examPoints: "Tombs of Jam Nizamuddin II (Samma ruler), Isa Khan Tarkhan, and Mirza Jani Beg are architectural highlights."
    },
    {
      id: "heritage-takht-i-bahi",
      name: "Buddhist Ruins of Takht-i-Bahi",
      category: "heritage",
      province: "Khyber Pakhtunkhwa",
      district: "Mardan District",
      period: "1st Century BCE – 7th Century CE (Parthian & Kushan Eras)",
      unescoYear: 1980,
      lat: 34.32,
      lng: 71.93,
      significance: "Most complete Buddhist monastery in Pakistan, perched dramatically on a 152m rocky crest. Features a court of stupas, monastic chambers, meditation cells, and an assembly hall. Sahr-i-Bahlol ancient fortified town lies in the plain below.",
      examPoints: "Survived destructive invasions by Huns because of its secluded hilltop location."
    },
    {
      id: "heritage-ranikot",
      name: "Ranikot Fort (The Great Wall of Sindh)",
      category: "heritage",
      province: "Sindh",
      district: "Jamshoro District",
      period: "Talpur Dynasty reconstruction (c. 1812 CE; origins ancient)",
      unescoYear: "Tentative List (UNESCO)",
      lat: 25.9,
      lng: 67.9,
      significance: "Believed to be the world's largest fort by perimeter, with defensive battlements and ramparts stretching approximately 32 km (20 miles) along the Kirthar hills.",
      examPoints: "Contains four monumental gates: Sann Gate, Amri Gate, Shahpar Gate, and Mohan Gate. Encloses the smaller inner fortress of Miri Kot."
    },
    {
      id: "heritage-harappa",
      name: "Harappa Archaeological Site",
      category: "heritage",
      province: "Punjab",
      district: "Sahiwal District",
      period: "c. 2600 BCE – 1900 BCE (Indus Valley Civilization)",
      unescoYear: "Tentative List (UNESCO)",
      lat: 30.63,
      lng: 72.86,
      significance: "Type-site of the Harappan Civilization. First Indus Valley city excavated (1920-21 by Rai Bahadur Daya Ram Sahni). Famous for the Harappan granaries, work platforms, and cemetery H.",
      examPoints: "Gave its name to the broader Harappan Civilization. Substantially damaged in the 19th century when bricks were pillaged to lay ballast for the Lahore-Multan railway line."
    }
  ],

  // 7. Important Cities & Strategic Urban Hubs
  cities: [
    { id: "city-islamabad", name: "Islamabad", province: "ICT", lat: 33.72, lng: 73.06, role: "Federal Capital of Pakistan", pop: "2.36M" },
    { id: "city-karachi", name: "Karachi", province: "Sindh", lat: 24.86, lng: 67.0, role: "Financial & Maritime Mega-Hub", pop: "20.38M" },
    { id: "city-lahore", name: "Lahore", province: "Punjab", lat: 31.52, lng: 74.35, role: "Cultural & Administrative Capital of Punjab", pop: "13.0M" },
    { id: "city-rawalpindi", name: "Rawalpindi", province: "Punjab", lat: 33.6, lng: 73.04, role: "Military GHQ & Twin City", pop: "5.5M" },
    { id: "city-faisalabad", name: "Faisalabad", province: "Punjab", lat: 31.41, lng: 73.07, role: "Textile Capital of Pakistan", pop: "9.1M" },
    { id: "city-multan", name: "Multan", province: "Punjab", lat: 30.19, lng: 71.46, role: "City of Saints & Southern Punjab Hub", pop: "5.3M" },
    { id: "city-peshawar", name: "Peshawar", province: "KP", lat: 34.01, lng: 71.52, role: "Provincial Capital & Historic Frontier Hub", pop: "4.7M" },
    { id: "city-quetta", name: "Quetta", province: "Balochistan", lat: 30.17, lng: 66.97, role: "Provincial Capital of Balochistan", pop: "2.5M" },
    { id: "city-hyderabad", name: "Hyderabad", province: "Sindh", lat: 25.39, lng: 68.37, role: "Cultural & Education Center of Sindh", pop: "2.4M" },
    { id: "city-sukkur", name: "Sukkur", province: "Sindh", lat: 27.7, lng: 68.86, role: "Upper Sindh Gateway & Barrage City", pop: "1.1M" },
    { id: "city-gwadar", name: "Gwadar", province: "Balochistan", lat: 25.12, lng: 62.32, role: "CPEC Deepwater Warm-Water Port", pop: "305K" },
    { id: "city-sialkot", name: "Sialkot", province: "Punjab", lat: 32.49, lng: 74.52, role: "Global Sports Goods & Surgical Export Hub", pop: "4.4M" },
    { id: "city-gujranwala", name: "Gujranwala", province: "Punjab", lat: 32.16, lng: 74.19, role: "Industrial City of Wrestlers", pop: "5.0M" },
    { id: "city-bahawalpur", name: "Bahawalpur", province: "Punjab", lat: 29.39, lng: 71.68, role: "Former Princely State & Palaces", pop: "3.7M" },
    { id: "city-gilgit", name: "Gilgit", province: "GB", lat: 35.92, lng: 74.31, role: "Administrative Capital of Gilgit-Baltistan", pop: "350K" },
    { id: "city-skardu", name: "Skardu", province: "GB", lat: 35.3, lng: 75.63, role: "Karakoram & K2 Mountaineering Gateway", pop: "300K" },
    { id: "city-muzaffarabad", name: "Muzaffarabad", province: "AJK", lat: 34.36, lng: 73.47, role: "Capital of Azad Jammu & Kashmir", pop: "650K" },
    { id: "city-abbottabad", name: "Abbottabad", province: "KP", lat: 34.15, lng: 73.22, role: "PMA Kakul & Hazara Division Hub", pop: "1.4M" },
    { id: "city-larkana", name: "Larkana", province: "Sindh", lat: 27.56, lng: 68.22, role: "Mohenjo-Daro Gateway & Rice Center", pop: "1.5M" },
    { id: "city-turbat", name: "Turbat (Kech)", province: "Balochistan", lat: 26.0, lng: 63.05, role: "Southern Balochistan Center (Punnu's Fort)", pop: "450K" }
  ]
};

const fileContent = `/**
 * CSS PREP CENTRAL - COMPREHENSIVE PAKISTAN & PROVINCIAL GEOGRAPHY DATASET
 * Authoritative, In-Depth Database for CSS, PMS, FPSC, PPSC, SPSC, KPPSC & BPSC Aspirants.
 * Features: 7 Provinces/Territories, 11 Strategic Divisions, 5 Rivers, 6 Dams/Barrages, 5 National Parks, 8 Heritage Sites, 20 Cities.
 */

const PAKISTAN_MAP_DATA = ${JSON.stringify(pakistanMapData, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PAKISTAN_MAP_DATA;
}
`;

fs.writeFileSync('frontend/js/data_pakistan_map.js', fileContent, 'utf8');
console.log('Successfully created frontend/js/data_pakistan_map.js!');
