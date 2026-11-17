/**
 * CSS PREP CENTRAL - COMPREHENSIVE SINDH PROVINCIAL GEOGRAPHY DATASET
 * Dedicated High-Yield Database for SPSC, CCE, IBA Sukkur STS, PMS & Civil Service Aspirants.
 * Features: 7 Administrative Divisions, All 30 Districts, 3 Great Barrages, 3 Major Lakes, 10 Cultural/Sufi Heritage Sites.
 */

const SINDH_MAP_DATA = {
  "divisions": [
    {
      "id": "div-karachi",
      "name": "Karachi Division",
      "headquarters": "Karachi",
      "districtsCount": 7,
      "districts": [
        "Karachi Central",
        "Karachi East",
        "Karachi South",
        "Karachi West",
        "Korangi",
        "Malir",
        "Keamari"
      ],
      "population2023": "20,382,881 (20.38 Million)",
      "areaKm2": "3,780 km²",
      "lat": 24.86,
      "lng": 67,
      "description": "Provincial capital of Sindh and financial capital of Pakistan. Accounts for over 90% of multinational corporate headquarters, the Pakistan Stock Exchange (PSX), State Bank of Pakistan, and two international ports (Karachi Port Trust & Port Qasim)."
    },
    {
      "id": "div-hyderabad",
      "name": "Hyderabad Division",
      "headquarters": "Hyderabad",
      "districtsCount": 6,
      "districts": [
        "Hyderabad",
        "Dadu",
        "Jamshoro",
        "Matiari",
        "Tando Allahyar",
        "Tando Muhammad Khan"
      ],
      "population2023": "7,026,335 (7.02 Million)",
      "areaKm2": "33,184 km²",
      "lat": 25.39,
      "lng": 68.37,
      "description": "The historical and educational heartbeat of Sindh. Founded as Nerun Kot and expanded by the Kalhora ruler Mian Ghulam Shah in 1768. Hosts premier educational institutions including University of Sindh, Mehran UET, and Liaquat University of Medical & Health Sciences (LUMHS)."
    },
    {
      "id": "div-sukkur",
      "name": "Sukkur Division",
      "headquarters": "Sukkur",
      "districtsCount": 3,
      "districts": [
        "Sukkur",
        "Ghotki",
        "Khairpur"
      ],
      "population2023": "4,619,573 (4.62 Million)",
      "areaKm2": "24,505 km²",
      "lat": 27.7,
      "lng": 68.86,
      "description": "Gateway of Upper Sindh. Centered around the historic Sukkur Barrage (1932) on the Indus River. Known for date palms (Khairpur), natural gas production (Qadirpur and Mari fields in Ghotki), and major chemical fertilizer complexes (Engro Daharki & FFC Mirpur Mathelo)."
    },
    {
      "id": "div-larkana",
      "name": "Larkana Division",
      "headquarters": "Larkana",
      "districtsCount": 5,
      "districts": [
        "Larkana",
        "Shikarpur",
        "Jacobabad",
        "Kashmore-Kandhkot",
        "Kamber-Shahdadkot"
      ],
      "population2023": "6,190,926 (6.19 Million)",
      "areaKm2": "15,483 km²",
      "lat": 27.56,
      "lng": 68.22,
      "description": "Historic cradle of the Indus Valley Civilization (Mohenjo-Daro). Known as the 'Rice Bowl of Sindh' due to the fertile canal network feeding from Sukkur Barrage. Jacobabad is internationally known for recording some of the highest summer temperatures on Earth (>52°C)."
    },
    {
      "id": "div-mirpurkhas",
      "name": "Mirpurkhas Division",
      "headquarters": "Mirpurkhas",
      "districtsCount": 3,
      "districts": [
        "Mirpurkhas",
        "Umerkot",
        "Tharparkar (Mithi)"
      ],
      "population2023": "4,228,683 (4.23 Million)",
      "areaKm2": "28,171 km²",
      "lat": 25.52,
      "lng": 69.01,
      "description": "The agricultural and mineral treasure of southeastern Sindh. Known globally for premium 'Sindhri' mangoes. Encompasses the vast Thar Desert and the massive Thar Coal field (Block I & II) containing 175 billion tons of lignite coal."
    },
    {
      "id": "div-shaheed-benazirabad",
      "name": "Shaheed Benazirabad Division",
      "headquarters": "Nawabshah",
      "districtsCount": 3,
      "districts": [
        "Shaheed Benazirabad",
        "Sanghar",
        "Naushahro Feroze"
      ],
      "population2023": "4,151,843 (4.15 Million)",
      "areaKm2": "18,175 km²",
      "lat": 26.24,
      "lng": 68.41,
      "description": "The geographic center of Sindh. Major agricultural producer of sugarcane, cotton, and bananas. Sanghar is the largest district of Sindh by geographic area (10,728 km²) and famous for the Hur movement led by Pir Pagaro against British colonial rule."
    },
    {
      "id": "div-banbhore",
      "name": "Banbhore Division",
      "headquarters": "Thatta",
      "districtsCount": 3,
      "districts": [
        "Thatta",
        "Sujawal",
        "Badin"
      ],
      "population2023": "3,565,372 (3.56 Million)",
      "areaKm2": "31,436 km²",
      "lat": 24.75,
      "lng": 67.92,
      "description": "Created in 2014 as the 7th division of Sindh, named after the ancient port city of Banbhore (identified by many scholars as Daibul, where Muhammad bin Qasim landed in 712 CE). Covers the historic Indus River delta, coastal mangrove forests, and petroleum/gas fields of Badin."
    }
  ],
  "districts": [
    {
      "id": "sindh-karachi-south",
      "name": "Karachi South",
      "division": "Karachi Division",
      "hq": "Karachi",
      "pop": "2.33M",
      "area": "122 km²",
      "lat": 24.84,
      "lng": 67.01,
      "highlights": "Clifton Beach, Sindh Governor House, Chief Minister House, Karachi Port Trust, High Court of Sindh."
    },
    {
      "id": "sindh-karachi-east",
      "name": "Karachi East",
      "division": "Karachi Division",
      "hq": "Gulshan-e-Iqbal",
      "pop": "3.92M",
      "area": "165 km²",
      "lat": 24.91,
      "lng": 67.09,
      "highlights": "Mazar-e-Quaid (Jinnah's Tomb), National Stadium Karachi, University of Karachi, NED University."
    },
    {
      "id": "sindh-karachi-central",
      "name": "Karachi Central",
      "division": "Karachi Division",
      "hq": "North Nazimabad",
      "pop": "3.82M",
      "area": "69 km²",
      "lat": 24.93,
      "lng": 67.04,
      "highlights": "Densely populated urban district, Liaquat National Hospital, Karachi Medical & Dental College."
    },
    {
      "id": "sindh-karachi-west",
      "name": "Karachi West",
      "division": "Karachi Division",
      "hq": "Orangi Town",
      "pop": "2.68M",
      "area": "260 km²",
      "lat": 24.95,
      "lng": 66.97,
      "highlights": "Orangi Town Pilot Project, Manghopir Shrine (sacred crocodiles), SITE Industrial Area."
    },
    {
      "id": "sindh-korangi",
      "name": "Korangi",
      "division": "Karachi Division",
      "hq": "Korangi",
      "pop": "3.13M",
      "area": "108 km²",
      "lat": 24.83,
      "lng": 67.14,
      "highlights": "Korangi Creek Industrial Park, major tanneries, oil refineries, and fish harbor."
    },
    {
      "id": "sindh-malir",
      "name": "Malir",
      "division": "Karachi Division",
      "hq": "Malir",
      "pop": "2.40M",
      "area": "2,268 km²",
      "lat": 24.98,
      "lng": 67.22,
      "highlights": "Agriculture/vegetable basket of Karachi, Malir Cantonment, Jinnah International Airport (JIAP)."
    },
    {
      "id": "sindh-keamari",
      "name": "Keamari",
      "division": "Karachi Division",
      "hq": "Keamari",
      "pop": "2.09M",
      "area": "520 km²",
      "lat": 24.81,
      "lng": 66.97,
      "highlights": "Created in 2020. Manora Island, Sandspit, Hawkesbay, major shipping docks and naval installations."
    },
    {
      "id": "sindh-hyderabad",
      "name": "Hyderabad",
      "division": "Hyderabad Division",
      "hq": "Hyderabad",
      "pop": "2.43M",
      "area": "993 km²",
      "lat": 25.39,
      "lng": 68.37,
      "highlights": "Pacco Qillo (Pakka Qila), Shahi Bazaar, Tombs of Kalhora & Talpur Mirs, Glass Bangle industry."
    },
    {
      "id": "sindh-dadu",
      "name": "Dadu",
      "division": "Hyderabad Division",
      "hq": "Dadu",
      "pop": "1.74M",
      "area": "7,866 km²",
      "lat": 26.73,
      "lng": 67.78,
      "highlights": "Gorakh Hill Station (1,734m elevation, 'Murree of Sindh'), Manchar Lake western banks, rice & wheat belt."
    },
    {
      "id": "sindh-jamshoro",
      "name": "Jamshoro",
      "division": "Hyderabad Division",
      "hq": "Jamshoro",
      "pop": "1.12M",
      "area": "11,517 km²",
      "lat": 25.43,
      "lng": 68.26,
      "highlights": "Ranikot Fort (World's largest fort perimeter ~32 km), Kotri Barrage, Sehwan Sharif (Shrine of Lal Shahbaz Qalandar)."
    },
    {
      "id": "sindh-matiari",
      "name": "Matiari",
      "division": "Hyderabad Division",
      "hq": "Matiari",
      "pop": "849K",
      "area": "1,417 km²",
      "lat": 25.6,
      "lng": 68.44,
      "highlights": "Bhit Shah (Shrine of Sufi saint Shah Abdul Latif Bhittai), Ajrak and handmade tile craftsmanship."
    },
    {
      "id": "sindh-tando-allahyar",
      "name": "Tando Allahyar",
      "division": "Hyderabad Division",
      "hq": "Tando Allahyar",
      "pop": "929K",
      "area": "1,554 km²",
      "lat": 25.46,
      "lng": 68.72,
      "highlights": "Agricultural powerhouse for sugarcane, mango orchards, and the historic Ramapir Mandir."
    },
    {
      "id": "sindh-tando-muhammad-khan",
      "name": "Tando Muhammad Khan",
      "division": "Hyderabad Division",
      "hq": "Tando Muhammad Khan",
      "pop": "773K",
      "area": "1,733 km²",
      "lat": 25.12,
      "lng": 68.53,
      "highlights": "Situated on the Fuleli Canal, major sugar mills, founded by Mir Muhammad Khan Talpur Shahwani."
    },
    {
      "id": "sindh-sukkur",
      "name": "Sukkur",
      "division": "Sukkur Division",
      "hq": "Sukkur",
      "pop": "1.64M",
      "area": "5,165 km²",
      "lat": 27.7,
      "lng": 68.86,
      "highlights": "Sukkur Barrage (Lloyd Barrage 1932), Lansdowne Bridge & Ayub Bridge, Sadh Belo island temple, Masoom Shah Minaret."
    },
    {
      "id": "sindh-ghotki",
      "name": "Ghotki",
      "division": "Sukkur Division",
      "hq": "Mirpur Mathelo",
      "pop": "1.66M",
      "area": "6,083 km²",
      "lat": 27.87,
      "lng": 69.58,
      "highlights": "Mari Gas Field, Qadirpur Gas Field, Engro Fertilizers Daharki, FFC Fertilizer Plant, bordering Punjab."
    },
    {
      "id": "sindh-khairpur",
      "name": "Khairpur",
      "division": "Sukkur Division",
      "hq": "Khairpur",
      "pop": "2.60M",
      "area": "15,910 km²",
      "lat": 27.53,
      "lng": 68.76,
      "highlights": "Former princely state of Khairpur Mirs, Kot Diji Fort, Faiz Mahal, Shah Abdul Latif University, Shrine of Sachal Sarmast at Daraza Sharif."
    },
    {
      "id": "sindh-larkana",
      "name": "Larkana",
      "division": "Larkana Division",
      "hq": "Larkana",
      "pop": "1.78M",
      "area": "1,980 km²",
      "lat": 27.56,
      "lng": 68.22,
      "highlights": "Mohenjo-Daro (UNESCO World Heritage Site 1980), Garhi Khuda Bakhsh (Mausoleum of Bhutto family), Rice Canal."
    },
    {
      "id": "sindh-shikarpur",
      "name": "Shikarpur",
      "division": "Larkana Division",
      "hq": "Shikarpur",
      "pop": "1.39M",
      "area": "2,512 km²",
      "lat": 27.95,
      "lng": 68.64,
      "highlights": "Historically famous as the 'Paris of Sindh' for its financial banking networks across Central Asia, Shikarpuri Pickles (Achar)."
    },
    {
      "id": "sindh-jacobabad",
      "name": "Jacobabad",
      "division": "Larkana Division",
      "hq": "Jacobabad",
      "pop": "1.17M",
      "area": "2,698 km²",
      "lat": 28.28,
      "lng": 68.44,
      "highlights": "Founded by General John Jacob in 1847 (originally Khangarh). Famous for extreme summer temperatures (>52°C) and Shahbaz Air Base."
    },
    {
      "id": "sindh-kashmore",
      "name": "Kashmore-Kandhkot",
      "division": "Larkana Division",
      "hq": "Kandhkot",
      "pop": "1.23M",
      "area": "2,592 km²",
      "lat": 28.43,
      "lng": 69.58,
      "highlights": "Guddu Barrage, strategic tri-border junction where Sindh, Punjab, and Balochistan converge."
    },
    {
      "id": "sindh-qambar-shahdadkot",
      "name": "Kamber-Shahdadkot",
      "division": "Larkana Division",
      "hq": "Kamber",
      "pop": "1.51M",
      "area": "5,475 km²",
      "lat": 27.58,
      "lng": 67.98,
      "highlights": "Drigh Lake (Ramsar wetland site), Hamal Lake, Kirthar mountain western boundary."
    },
    {
      "id": "sindh-mirpurkhas",
      "name": "Mirpurkhas",
      "division": "Mirpurkhas Division",
      "hq": "Mirpurkhas",
      "pop": "1.68M",
      "area": "2,925 km²",
      "lat": 25.52,
      "lng": 69.01,
      "highlights": "World capital of 'Sindhri' mangoes, Kahu-Jo-Daro Buddhist archaeological stupa site."
    },
    {
      "id": "sindh-umerkot",
      "name": "Umerkot",
      "division": "Mirpurkhas Division",
      "hq": "Umerkot",
      "pop": "1.16M",
      "area": "5,608 km²",
      "lat": 25.36,
      "lng": 69.74,
      "highlights": "Birthplace of Mughal Emperor Akbar (October 15, 1542), historic Umerkot Fort, romantic folk legend of Umar Marvi."
    },
    {
      "id": "sindh-tharparkar",
      "name": "Tharparkar (Mithi)",
      "division": "Mirpurkhas Division",
      "hq": "Mithi",
      "pop": "1.78M",
      "area": "19,638 km²",
      "lat": 24.74,
      "lng": 69.8,
      "highlights": "Largest district in southern Sindh. Thar Coal Field (Block I & II, 175B tons), Marvi's Well (Bhalwa), Nagarparkar Jain Temples, Karunjhar Hills."
    },
    {
      "id": "sindh-shaheed-benazirabad",
      "name": "Shaheed Benazirabad",
      "division": "Shaheed Benazirabad",
      "hq": "Nawabshah",
      "pop": "1.84M",
      "area": "4,502 km²",
      "lat": 26.24,
      "lng": 68.41,
      "highlights": "Originally named Nawabshah after Syed Nawab Shah; central agricultural and railway junction, Peoples Medical University."
    },
    {
      "id": "sindh-sanghar",
      "name": "Sanghar",
      "division": "Shaheed Benazirabad",
      "hq": "Sanghar",
      "pop": "2.31M",
      "area": "10,728 km²",
      "lat": 26.05,
      "lng": 68.95,
      "highlights": "Largest district by land area in Sindh (10,728 km²). Famous for the historic Hur Freedom Movement of Pir Pagaro, Chotiari Reservoir, Nara Canal."
    },
    {
      "id": "sindh-naushahro-feroze",
      "name": "Naushahro Feroze",
      "division": "Shaheed Benazirabad",
      "hq": "Naushahro Feroze",
      "pop": "1.78M",
      "area": "2,945 km²",
      "lat": 26.84,
      "lng": 68.12,
      "highlights": "Historic canal colony, major producer of wheat and cotton, Padidan railway junction."
    },
    {
      "id": "sindh-thatta",
      "name": "Thatta",
      "division": "Banbhore Division",
      "hq": "Thatta",
      "pop": "1.08M",
      "area": "8,570 km²",
      "lat": 24.75,
      "lng": 67.92,
      "highlights": "Makli Necropolis (UNESCO World Heritage Site 1981), Shah Jahan Mosque (93 domes), Keenjhar Lake (Kalri Lake), Banbhore ruins."
    },
    {
      "id": "sindh-sujawal",
      "name": "Sujawal",
      "division": "Banbhore Division",
      "hq": "Sujawal",
      "pop": "841K",
      "area": "7,356 km²",
      "lat": 24.6,
      "lng": 68.07,
      "highlights": "Carved out of Thatta in 2013 on the eastern bank of the Indus River, fertile deltaic agriculture, Shrine of Shah Inayat Shaheed (Jhok Sharif)."
    },
    {
      "id": "sindh-badin",
      "name": "Badin",
      "division": "Banbhore Division",
      "hq": "Badin",
      "pop": "1.95M",
      "area": "6,726 km²",
      "lat": 24.65,
      "lng": 68.83,
      "highlights": "Known as the 'Sugar State of Sindh', major oil fields (OGDCL Badin Block), coastal creeks, rice and sugarcane."
    }
  ],
  "barragesAndLakes": [
    {
      "id": "sindh-sukkur-barrage",
      "name": "Sukkur Barrage (Lloyd Barrage)",
      "type": "Barrage",
      "location": "Sukkur",
      "completionYear": 1932,
      "gatesCount": 66,
      "canalsCount": 7,
      "canalsList": [
        "Nara Canal (World's longest irrigation canal)",
        "Rohri Canal",
        "Eastern Nara",
        "Dadu Canal",
        "Rice Canal",
        "North Western Canal",
        "Khairpur Feeder"
      ],
      "lat": 27.69,
      "lng": 68.85,
      "significance": "Commissioned on Jan 13, 1932. Irrigates approximately 7.63 million acres of fertile agricultural land across Sindh. The nerve center of Sindh's agrarian economy."
    },
    {
      "id": "sindh-guddu-barrage",
      "name": "Guddu Barrage",
      "type": "Barrage",
      "location": "Kashmore",
      "completionYear": 1962,
      "gatesCount": 64,
      "canalsCount": 3,
      "canalsList": [
        "Ghotki Feeder",
        "Begari Sindh Feeder",
        "Desert Pat Feeder (irrigating parts of Balochistan)"
      ],
      "lat": 28.42,
      "lng": 69.71,
      "significance": "Upper Sindh's premier hydraulic barrage. Designed to handle peak Indus floods of 1.2 million cusecs. Feeds fertile agricultural tracts in both Sindh and Balochistan."
    },
    {
      "id": "sindh-kotri-barrage",
      "name": "Kotri Barrage (Ghulam Muhammad Barrage)",
      "type": "Barrage",
      "location": "Jamshoro / Hyderabad",
      "completionYear": 1955,
      "gatesCount": 44,
      "canalsCount": 4,
      "canalsList": [
        "Kalri Baghar Feeder (supplies Keenjhar Lake for Karachi)",
        "Pinyari Canal",
        "Fuleli Canal",
        "Lined Channel"
      ],
      "lat": 25.43,
      "lng": 68.31,
      "significance": "The final barrage on the Indus River before the river discharges into the Arabian Sea. The lifeline for Karachi's municipal water supply through Keenjhar Lake."
    },
    {
      "id": "sindh-lake-manchar",
      "name": "Manchar Lake",
      "type": "Freshwater Lake",
      "location": "Dadu / Jamshoro Districts",
      "areaKm2": "Approx. 260 – 500 km² (depending on flood season)",
      "lat": 26.42,
      "lng": 67.65,
      "significance": "Largest natural freshwater lake in Pakistan and one of the largest in South Asia. Fed by the Main Nara Valley Drain (MNVD) and torrents from the Kirthar Mountains. Home to the indigenous Mohana fishermen community ('Boat People')."
    },
    {
      "id": "sindh-lake-keenjhar",
      "name": "Keenjhar Lake (Kalri Lake)",
      "type": "Freshwater Reservoir",
      "location": "Thatta District",
      "areaKm2": "Approx. 134 km²",
      "lat": 24.93,
      "lng": 68.05,
      "significance": "Second largest freshwater lake in Pakistan. Primary source of drinking water for Karachi. Famous for the Sindhi romantic folktale of Noori and Jam Tamachi (Noori's tomb is situated in the middle of the lake)."
    },
    {
      "id": "sindh-lake-haleji",
      "name": "Haleji Lake",
      "type": "Wildlife Sanctuary & Ramsar Wetland",
      "location": "Thatta District",
      "areaKm2": "17 km²",
      "lat": 24.8,
      "lng": 67.77,
      "significance": "Recognized as a Ramsar Wetland of International Importance. Known as a 'Bird Watcher's Paradise' hosting over 100,000 migratory waterfowl from Siberia during winter months."
    }
  ],
  "heritageSites": [
    {
      "id": "sindh-mohenjo-daro",
      "name": "Mohenjo-Daro",
      "type": "UNESCO World Heritage Site (1980)",
      "district": "Larkana",
      "lat": 27.32,
      "lng": 68.13,
      "significance": "Metropolis of the ancient Indus Valley Civilization (2500 BCE). Discovered in 1922 by R.D. Banerji. Great Bath, Granary, Priest-King, Dancing Girl."
    },
    {
      "id": "sindh-makli-necropolis",
      "name": "Makli Necropolis",
      "type": "UNESCO World Heritage Site (1981)",
      "district": "Thatta",
      "lat": 24.75,
      "lng": 67.9,
      "significance": "One of the world's largest burial sites spanning 10 km². Contains 500,000+ graves of kings, queens, saints, and scholars with magnificent stone carving."
    },
    {
      "id": "sindh-ranikot-fort",
      "name": "Ranikot Fort (Great Wall of Sindh)",
      "type": "Archaeological Monument (Tentative UNESCO)",
      "district": "Jamshoro",
      "lat": 25.9,
      "lng": 67.9,
      "significance": "Believed to be the world's largest fort by circumference (~32 km). Features four major gates: Sann, Amri, Shahpar, and Mohan gates."
    },
    {
      "id": "sindh-kot-diji",
      "name": "Kot Diji Fort & Pre-Harappan Site",
      "type": "Historical Fort & Ancient Mound",
      "district": "Khairpur",
      "lat": 27.34,
      "lng": 68.71,
      "significance": "Features both a 3300 BCE pre-Harappan archaeological mound and a towering 18th-century Talpur hill fort built by Mir Sohrab Khan Talpur."
    },
    {
      "id": "sindh-faiz-mahal",
      "name": "Faiz Mahal",
      "type": "Royal Palace",
      "district": "Khairpur",
      "lat": 27.53,
      "lng": 68.76,
      "significance": "Built in 1798 by Mir Sohrab Khan Talpur as the sovereign court of the Princely State of Khairpur. Masterpiece of Mughal-Talpur architecture."
    },
    {
      "id": "sindh-shah-jahan-mosque",
      "name": "Shah Jahan Mosque",
      "type": "Mughal Imperial Mosque",
      "district": "Thatta",
      "lat": 24.75,
      "lng": 67.93,
      "significance": "Commissioned by Mughal Emperor Shah Jahan in 1647 as a gift to the people of Thatta. Features 93 domes and renowned blue-and-white glazed tilework with acoustic design."
    },
    {
      "id": "sindh-umerkot-fort",
      "name": "Umerkot Fort",
      "type": "Historical Fort",
      "district": "Umerkot",
      "lat": 25.36,
      "lng": 69.74,
      "significance": "Birthplace of the Mughal Emperor Jalal-ud-din Muhammad Akbar on October 15, 1542, when Emperor Humayun took refuge under Rana Prasad."
    },
    {
      "id": "sindh-shrine-lal-shahbaz",
      "name": "Shrine of Hazrat Lal Shahbaz Qalandar",
      "type": "Sufi Shrine",
      "district": "Jamshoro (Sehwan Sharif)",
      "lat": 26.43,
      "lng": 67.86,
      "significance": "13th-century Sufi saint Hazrat Syed Usman Marwandi (Lal Shahbaz Qalandar). Attracts hundreds of thousands of pilgrims annually for the spiritual Dhamal dance."
    },
    {
      "id": "sindh-shrine-bhittai",
      "name": "Shrine of Hazrat Shah Abdul Latif Bhittai",
      "type": "Sufi Shrine & Cultural Center",
      "district": "Matiari (Bhit Shah)",
      "lat": 25.8,
      "lng": 68.49,
      "significance": "Resting place of Sindh's greatest poet and philosopher (1689–1752), author of the legendary Sindhi poetic compendium 'Shah Jo Risalo'."
    },
    {
      "id": "sindh-shrine-sachal",
      "name": "Shrine of Hazrat Sachal Sarmast",
      "type": "Sufi Shrine",
      "district": "Khairpur (Daraza Sharif)",
      "lat": 27.31,
      "lng": 68.51,
      "significance": "Known as 'Shair-e-Haft Zaban' (Poet of Seven Languages) and 'Attar of Sindh'. Promoted message of universal peace, love, and divine monism (Wahdat-ul-Wujud)."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SINDH_MAP_DATA;
}
