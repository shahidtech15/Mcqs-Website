// Master Country Data Generator for World Map
const fs = require('fs');
const path = require('path');

// We will define country dictionary with all 180 country codes
const rawCountries = {
  // ASIA - South Asia
  "pk": {
    name: "Pakistan", officialName: "Islamic Republic of Pakistan", flag: "🇵🇰",
    continent: "Asia", region: "South Asia", capital: "Islamabad",
    currency: "Pakistani Rupee (PKR, ₨)", population: "241.5 Million (2024 Census)",
    officialLanguage: "Urdu (National), English (Official)",
    politicalSystem: "Federal Parliamentary Republic (Bicameral: Senate & National Assembly)",
    headOfState: "President (Head of State) & Prime Minister (Chief Executive)",
    neighbouringCountries: [
      { id: "af", name: "Afghanistan" }, { id: "cn", name: "China" }, { id: "in", name: "India" }, { id: "ir", name: "Iran" }
    ],
    internationalOrgs: ["UN", "WTO", "IMF", "World Bank", "OIC", "SCO", "SAARC", "ECO", "Commonwealth", "G-77", "D-8"],
    strategicSignificance: "Strategic pivot connecting South Asia, Central Asia, and Middle East; Gwadar deep-sea port; flagship of CPEC/BRI; nuclear-armed state."
  },
  "in": {
    name: "India", officialName: "Republic of India", flag: "🇮🇳",
    continent: "Asia", region: "South Asia", capital: "New Delhi",
    currency: "Indian Rupee (INR, ₹)", population: "1.43 Billion",
    officialLanguage: "Hindi & English",
    politicalSystem: "Federal Parliamentary Republic",
    headOfState: "President (Head of State) & Prime Minister (Head of Government)",
    neighbouringCountries: [
      { id: "pk", name: "Pakistan" }, { id: "cn", name: "China" }, { id: "np", name: "Nepal" }, { id: "bt", name: "Bhutan" }, { id: "bd", name: "Bangladesh" }, { id: "mm", name: "Myanmar" }
    ],
    internationalOrgs: ["UN", "WTO", "BRICS", "SCO", "SAARC", "G20", "QUAD", "Commonwealth"],
    strategicSignificance: "Most populous country; largest economy in South Asia; partner in US Indo-Pacific Strategy (QUAD); party to Indus Waters Treaty 1960."
  },
  "bd": {
    name: "Bangladesh", officialName: "People's Republic of Bangladesh", flag: "🇧🇩",
    continent: "Asia", region: "South Asia", capital: "Dhaka",
    currency: "Bangladeshi Taka (BDT, ৳)", population: "173 Million",
    officialLanguage: "Bengali",
    politicalSystem: "Unitary Parliamentary Republic",
    headOfState: "President & Chief Adviser / Prime Minister",
    neighbouringCountries: [{ id: "in", name: "India" }, { id: "mm", name: "Myanmar" }],
    internationalOrgs: ["UN", "WTO", "SAARC", "OIC", "BIMSTEC", "Commonwealth", "D-8"],
    strategicSignificance: "World's 2nd largest garment exporter; Bay of Bengal littoral nation; Padma Bridge and Chittagong Port."
  },
  "af": {
    name: "Afghanistan", officialName: "Islamic Emirate of Afghanistan", flag: "🇦🇫",
    continent: "Asia", region: "South / Central Asia", capital: "Kabul",
    currency: "Afghan Afghani (AFN, ؋)", population: "42.2 Million",
    officialLanguage: "Pashto & Dari",
    politicalSystem: "Unitary Theocracy / Islamic Emirate",
    headOfState: "Supreme Leader (Amir al-Mu'minin)",
    neighbouringCountries: [
      { id: "pk", name: "Pakistan" }, { id: "ir", name: "Iran" }, { id: "tm", name: "Turkmenistan" }, { id: "uz", name: "Uzbekistan" }, { id: "tj", name: "Tajikistan" }, { id: "cn", name: "China" }
    ],
    internationalOrgs: ["UN", "SAARC", "ECO", "OIC"],
    strategicSignificance: "Crossroads of Central & South Asia; mineral wealth (lithium, rare earths); key transit route for TAPI and CASA-1000."
  },
  "np": {
    name: "Nepal", officialName: "Federal Democratic Republic of Nepal", flag: "🇳🇵",
    continent: "Asia", region: "South Asia", capital: "Kathmandu",
    currency: "Nepalese Rupee (NPR, ₨)", population: "30.9 Million",
    officialLanguage: "Nepali",
    politicalSystem: "Federal Parliamentary Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "cn", name: "China" }, { id: "in", name: "India" }],
    internationalOrgs: ["UN", "SAARC (Secretariat in Kathmandu)", "BIMSTEC", "NAM"],
    strategicSignificance: "Himalayan buffer state between China and India; home to Mount Everest (8,848.86m); SAARC headquarters host."
  },
  "bt": {
    name: "Bhutan", officialName: "Kingdom of Bhutan", flag: "🇧🇹",
    continent: "Asia", region: "South Asia", capital: "Thimphu",
    currency: "Bhutanese Ngultrum (BTN, Nu.)", population: "787,000",
    officialLanguage: "Dzongkha",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "Druk Gyalpo (King) & Prime Minister",
    neighbouringCountries: [{ id: "cn", name: "China" }, { id: "in", name: "India" }],
    internationalOrgs: ["UN", "SAARC", "BIMSTEC"],
    strategicSignificance: "World's only carbon-negative country; pioneer of Gross National Happiness (GNH) index."
  },
  "lk": {
    name: "Sri Lanka", officialName: "Democratic Socialist Republic of Sri Lanka", flag: "🇱🇰",
    continent: "Asia", region: "South Asia", capital: "Sri Jayawardenepura Kotte (Admin) / Colombo (Commercial)",
    currency: "Sri Lankan Rupee (LKR, Rs)", population: "22.2 Million",
    officialLanguage: "Sinhala & Tamil",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "in", name: "India (Maritime boundary: Palk Strait)" }],
    internationalOrgs: ["UN", "SAARC", "BIMSTEC", "Commonwealth", "NAM"],
    strategicSignificance: "Controls Indian Ocean sea lanes; Hambantota Port and Colombo deep-water transshipment hub."
  },
  "mv": {
    name: "Maldives", officialName: "Republic of Maldives", flag: "🇲🇻",
    continent: "Asia", region: "South Asia", capital: "Malé",
    currency: "Maldivian Rufiyaa (MVR, Rf)", population: "520,000",
    officialLanguage: "Dhivehi",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "in", name: "India (Maritime)" }, { id: "lk", name: "Sri Lanka (Maritime)" }],
    internationalOrgs: ["UN", "SAARC", "OIC", "Commonwealth"],
    strategicSignificance: "Indian Ocean archipelago astride vital maritime chokepoints; frontline state for climate change and sea-level rise."
  },

  // ASIA - East Asia
  "cn": {
    name: "China", officialName: "People's Republic of China", flag: "🇨🇳",
    continent: "Asia", region: "East Asia", capital: "Beijing",
    currency: "Renminbi / Yuan (CNY, ¥)", population: "1.41 Billion",
    officialLanguage: "Standard Mandarin",
    politicalSystem: "Unitary One-Party Socialist Republic",
    headOfState: "President & General Secretary of CCP",
    neighbouringCountries: [
      { id: "pk", name: "Pakistan" }, { id: "af", name: "Afghanistan" }, { id: "in", name: "India" }, { id: "np", name: "Nepal" }, { id: "bt", name: "Bhutan" }, { id: "mm", name: "Myanmar" }, { id: "la", name: "Laos" }, { id: "vn", name: "Vietnam" }, { id: "ru", name: "Russia" }, { id: "mn", name: "Mongolia" }, { id: "kz", name: "Kazakhstan" }, { id: "kg", name: "Kyrgyzstan" }, { id: "tj", name: "Tajikistan" }, { id: "kp", name: "North Korea" }
    ],
    internationalOrgs: ["UN", "UNSC (Permanent Member)", "WTO", "BRICS", "SCO", "G20", "AIIB"],
    strategicSignificance: "World's 2nd largest economy; global manufacturing hub; architect of Belt & Road Initiative (BRI); permanent member of UNSC."
  },
  "jp": {
    name: "Japan", officialName: "Japan", flag: "🇯🇵",
    continent: "Asia", region: "East Asia", capital: "Tokyo",
    currency: "Japanese Yen (JPY, ¥)", population: "124.5 Million",
    officialLanguage: "Japanese",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "Emperor (Symbol of State) & Prime Minister (Chief Executive)",
    neighbouringCountries: [{ id: "kr", name: "South Korea (Maritime)" }, { id: "ru", name: "Russia (Maritime)" }, { id: "cn", name: "China (Maritime)" }],
    internationalOrgs: ["UN", "G7", "G20", "OECD", "QUAD", "CPTPP"],
    strategicSignificance: "World's 4th largest economy; advanced robotics & technological leader; anchor of US Pacific alliance."
  },
  "kr": {
    name: "South Korea", officialName: "Republic of Korea", flag: "🇰🇷",
    continent: "Asia", region: "East Asia", capital: "Seoul",
    currency: "South Korean Won (KRW, ₩)", population: "51.7 Million",
    officialLanguage: "Korean",
    politicalSystem: "Unitary Presidential Constitutional Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "kp", name: "North Korea (DMZ border)" }],
    internationalOrgs: ["UN", "G20", "OECD", "APEC"],
    strategicSignificance: "Global semiconductor, battery, and automotive giant (Samsung, Hyundai); key US treaty ally."
  },
  "kp": {
    name: "North Korea", officialName: "Democratic People's Republic of Korea", flag: "🇰🇵",
    continent: "Asia", region: "East Asia", capital: "Pyongyang",
    currency: "North Korean Won (KPW, ₩)", population: "26 Million",
    officialLanguage: "Korean",
    politicalSystem: "Unitary One-Party Totalitarian Dictatorship (Juche)",
    headOfState: "Supreme Leader",
    neighbouringCountries: [{ id: "cn", name: "China" }, { id: "ru", name: "Russia" }, { id: "kr", name: "South Korea" }],
    internationalOrgs: ["UN", "NAM", "ARF"],
    strategicSignificance: "Nuclear-armed state in Northeast Asia; heavily militarized DMZ along 38th parallel."
  },
  "mn": {
    name: "Mongolia", officialName: "Mongolia", flag: "🇲🇳",
    continent: "Asia", region: "East Asia", capital: "Ulaanbaatar",
    currency: "Mongolian Tögrög (MNT, ₮)", population: "3.4 Million",
    officialLanguage: "Mongolian",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "cn", name: "China" }, { id: "ru", name: "Russia" }],
    internationalOrgs: ["UN", "SCO (Observer)", "WTO"],
    strategicSignificance: "Landlocked resource-rich buffer state between Russia and China (Oyu Tolgoi copper-gold deposit)."
  },
  "tw": {
    name: "Taiwan", officialName: "Republic of China (Taiwan)", flag: "🇹🇼",
    continent: "Asia", region: "East Asia", capital: "Taipei",
    currency: "New Taiwan Dollar (TWD, NT$)", population: "23.4 Million",
    officialLanguage: "Mandarin Chinese",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "cn", name: "China (Taiwan Strait)" }, { id: "ph", name: "Philippines (Maritime)" }],
    internationalOrgs: ["WTO (as Chinese Taipei)", "APEC"],
    strategicSignificance: "World's most critical semiconductor manufacturer (TSMC produces >90% of advanced chips); central flashpoint in US-China relations."
  },

  // ASIA - Southeast Asia
  "id": {
    name: "Indonesia", officialName: "Republic of Indonesia", flag: "🇮🇩",
    continent: "Asia", region: "Southeast Asia", capital: "Nusantara (new) / Jakarta",
    currency: "Indonesian Rupiah (IDR, Rp)", population: "278 Million",
    officialLanguage: "Indonesian (Bahasa Indonesia)",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "my", name: "Malaysia" }, { id: "pg", name: "Papua New Guinea" }, { id: "tl", name: "Timor-Leste" }],
    internationalOrgs: ["UN", "G20", "ASEAN", "OIC", "D-8", "APEC"],
    strategicSignificance: "World's most populous Muslim-majority country; controls Malacca, Sunda, and Lombok straits; major nickel producer."
  },
  "my": {
    name: "Malaysia", officialName: "Malaysia", flag: "🇲🇾",
    continent: "Asia", region: "Southeast Asia", capital: "Kuala Lumpur (Putrajaya Admin)",
    currency: "Malaysian Ringgit (MYR, RM)", population: "34.3 Million",
    officialLanguage: "Malay (Bahasa Melayu)",
    politicalSystem: "Federal Parliamentary Elective Constitutional Monarchy",
    headOfState: "Yang di-Pertuan Agong (King) & Prime Minister",
    neighbouringCountries: [{ id: "th", name: "Thailand" }, { id: "id", name: "Indonesia" }, { id: "bn", name: "Brunei" }, { id: "sg", name: "Singapore" }],
    internationalOrgs: ["UN", "ASEAN", "OIC", "Commonwealth", "CPTPP", "D-8"],
    strategicSignificance: "Littoral state on Strait of Malacca; semiconductor packaging hub; global Islamic banking leader."
  },
  "th": {
    name: "Thailand", officialName: "Kingdom of Thailand", flag: "🇹🇭",
    continent: "Asia", region: "Southeast Asia", capital: "Bangkok",
    currency: "Thai Baht (THB, ฿)", population: "71.8 Million",
    officialLanguage: "Thai",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "mm", name: "Myanmar" }, { id: "la", name: "Laos" }, { id: "kh", name: "Cambodia" }, { id: "my", name: "Malaysia" }],
    internationalOrgs: ["UN", "ASEAN", "APEC", "BIMSTEC"],
    strategicSignificance: "Second largest economy in Southeast Asia; automotive hub of ASEAN; historical buffer between British and French colonial spheres."
  },
  "vn": {
    name: "Vietnam", officialName: "Socialist Republic of Vietnam", flag: "🇻🇳",
    continent: "Asia", region: "Southeast Asia", capital: "Hanoi",
    currency: "Vietnamese Dong (VND, ₫)", population: "100.3 Million",
    officialLanguage: "Vietnamese",
    politicalSystem: "Unitary One-Party Socialist Republic",
    headOfState: "President & General Secretary of CPV",
    neighbouringCountries: [{ id: "cn", name: "China" }, { id: "la", name: "Laos" }, { id: "kh", name: "Cambodia" }],
    internationalOrgs: ["UN", "ASEAN", "APEC", "CPTPP"],
    strategicSignificance: "Rapidly growing manufacturing export powerhouse; strategic claimant in South China Sea; key node in supply chain diversification."
  },
  "ph": {
    name: "Philippines", officialName: "Republic of the Philippines", flag: "🇵🇭",
    continent: "Asia", region: "Southeast Asia", capital: "Manila",
    currency: "Philippine Peso (PHP, ₱)", population: "115.6 Million",
    officialLanguage: "Filipino & English",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "tw", name: "Taiwan (Maritime)" }, { id: "my", name: "Malaysia (Maritime)" }],
    internationalOrgs: ["UN", "ASEAN", "APEC", "WTO"],
    strategicSignificance: "US mutual defense treaty ally; key claimant in South China Sea dispute (First Island Chain)."
  },
  "sg": {
    name: "Singapore", officialName: "Republic of Singapore", flag: "🇸🇬",
    continent: "Asia", region: "Southeast Asia", capital: "Singapore",
    currency: "Singapore Dollar (SGD, S$)", population: "5.9 Million",
    officialLanguage: "English, Malay, Mandarin, Tamil",
    politicalSystem: "Unitary Parliamentary Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "my", name: "Malaysia" }, { id: "id", name: "Indonesia" }],
    internationalOrgs: ["UN", "ASEAN", "APEC", "Commonwealth", "WTO"],
    strategicSignificance: "Global financial, shipping, and aviation hub; sits at entrance of Strait of Malacca; AAA credit-rated nation."
  },
  "mm": {
    name: "Myanmar", officialName: "Republic of the Union of Myanmar", flag: "🇲🇲",
    continent: "Asia", region: "Southeast Asia", capital: "Naypyidaw",
    currency: "Myanmar Kyat (MMK, K)", population: "54.5 Million",
    officialLanguage: "Burmese",
    politicalSystem: "Unitary Parliamentary Republic (Military Junta / SAC)",
    headOfState: "Chairman of State Administration Council",
    neighbouringCountries: [{ id: "bd", name: "Bangladesh" }, { id: "in", name: "India" }, { id: "cn", name: "China" }, { id: "la", name: "Laos" }, { id: "th", name: "Thailand" }],
    internationalOrgs: ["UN", "ASEAN", "BIMSTEC"],
    strategicSignificance: "Indian Ocean access for China (Kyaukphyu Port and pipelines); critical natural gas and rare earths producer."
  },
  "kh": {
    name: "Cambodia", officialName: "Kingdom of Cambodia", flag: "🇰🇭",
    continent: "Asia", region: "Southeast Asia", capital: "Phnom Penh",
    currency: "Cambodian Riel (KHR, ៛)", population: "16.8 Million",
    officialLanguage: "Khmer",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "th", name: "Thailand" }, { id: "la", name: "Laos" }, { id: "vn", name: "Vietnam" }],
    internationalOrgs: ["UN", "ASEAN", "RCEP"],
    strategicSignificance: "Mekong River basin nation; Ream Naval Base on Gulf of Thailand; close economic ties with China."
  },
  "la": {
    name: "Laos", officialName: "Lao People's Democratic Republic", flag: "🇱🇦",
    continent: "Asia", region: "Southeast Asia", capital: "Vientiane",
    currency: "Lao Kip (LAK, ₭)", population: "7.6 Million",
    officialLanguage: "Lao",
    politicalSystem: "Unitary One-Party Socialist Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "cn", name: "China" }, { id: "mm", name: "Myanmar" }, { id: "th", name: "Thailand" }, { id: "kh", name: "Cambodia" }, { id: "vn", name: "Vietnam" }],
    internationalOrgs: ["UN", "ASEAN"],
    strategicSignificance: "Only landlocked country in Southeast Asia; 'Battery of Southeast Asia' through hydropower; high-speed railway to Kunming."
  },
  "bn": {
    name: "Brunei", officialName: "Nation of Brunei, the Abode of Peace", flag: "🇧🇳",
    continent: "Asia", region: "Southeast Asia", capital: "Bandar Seri Begawan",
    currency: "Brunei Dollar (BND, B$)", population: "450,000",
    officialLanguage: "Malay",
    politicalSystem: "Unitary Islamic Absolute Monarchy",
    headOfState: "Sultan and Prime Minister",
    neighbouringCountries: [{ id: "my", name: "Malaysia" }],
    internationalOrgs: ["UN", "ASEAN", "OIC", "Commonwealth"],
    strategicSignificance: "Oil and natural gas-rich sultanate on Borneo island; South China Sea littoral state."
  },

  // ASIA - Central Asia
  "kz": {
    name: "Kazakhstan", officialName: "Republic of Kazakhstan", flag: "🇰🇿",
    continent: "Asia", region: "Central Asia", capital: "Astana",
    currency: "Kazakhstani Tenge (KZT, ₸)", population: "20.1 Million",
    officialLanguage: "Kazakh & Russian",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "ru", name: "Russia" }, { id: "cn", name: "China" }, { id: "kg", name: "Kyrgyzstan" }, { id: "uz", name: "Uzbekistan" }, { id: "tm", name: "Turkmenistan" }],
    internationalOrgs: ["UN", "SCO", "CSTO", "EAEU", "OIC", "ECO", "Turkic Council"],
    strategicSignificance: "World's largest landlocked country; leading global producer of uranium; major oil exporter via Caspian pipeline."
  },
  "uz": {
    name: "Uzbekistan", officialName: "Republic of Uzbekistan", flag: "🇺🇿",
    continent: "Asia", region: "Central Asia", capital: "Tashkent",
    currency: "Uzbekistani Som (UZS, so'm)", population: "36.8 Million",
    officialLanguage: "Uzbek",
    politicalSystem: "Unitary Presidential Constitutional Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "kz", name: "Kazakhstan" }, { id: "kg", name: "Kyrgyzstan" }, { id: "tj", name: "Tajikistan" }, { id: "af", name: "Afghanistan" }, { id: "tm", name: "Turkmenistan" }],
    internationalOrgs: ["UN", "SCO", "CIS", "OIC", "ECO", "Turkic Council"],
    strategicSignificance: "Doubly landlocked nation (one of only two in world with Liechtenstein); historic Silk Road cities (Samarkand, Bukhara); cotton and gold producer."
  },
  "tm": {
    name: "Turkmenistan", officialName: "Turkmenistan", flag: "🇹🇲",
    continent: "Asia", region: "Central Asia", capital: "Ashgabat",
    currency: "Turkmenistan Manat (TMT, m)", population: "6.5 Million",
    officialLanguage: "Turkmen",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President & Chairman of the People's Council",
    neighbouringCountries: [{ id: "kz", name: "Kazakhstan" }, { id: "uz", name: "Uzbekistan" }, { id: "af", name: "Afghanistan" }, { id: "ir", name: "Iran" }],
    internationalOrgs: ["UN", "ECO", "OIC", "NAM (Recognized Permanent Neutrality)"],
    strategicSignificance: "Holds world's 4th largest natural gas reserves (Galkynysh field); anchor for TAPI pipeline to Pakistan and India."
  },
  "kg": {
    name: "Kyrgyzstan", officialName: "Kyrgyz Republic", flag: "🇰🇬",
    continent: "Asia", region: "Central Asia", capital: "Bishkek",
    currency: "Kyrgyzstani Som (KGS, с)", population: "7.1 Million",
    officialLanguage: "Kyrgyz & Russian",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "kz", name: "Kazakhstan" }, { id: "cn", name: "China" }, { id: "tj", name: "Tajikistan" }, { id: "uz", name: "Uzbekistan" }],
    internationalOrgs: ["UN", "SCO", "CSTO", "EAEU", "OIC", "ECO", "Turkic Council"],
    strategicSignificance: "Mountainous Tian Shan nation; supplier of CASA-1000 hydropower transmission project to Pakistan; gold mining (Kumtor)."
  },
  "tj": {
    name: "Tajikistan", officialName: "Republic of Tajikistan", flag: "🇹🇯",
    continent: "Asia", region: "Central Asia", capital: "Dushanbe",
    currency: "Tajikistani Somoni (TJS, SM)", population: "10.1 Million",
    officialLanguage: "Tajik (Persian dialect)",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "af", name: "Afghanistan" }, { id: "uz", name: "Uzbekistan" }, { id: "kg", name: "Kyrgyzstan" }, { id: "cn", name: "China" }],
    internationalOrgs: ["UN", "SCO", "CSTO", "OIC", "ECO"],
    strategicSignificance: "Separated from Pakistan only by the narrow Afghan Wakhan Corridor (~16-20 km); massive hydropower potential (Rogun Dam); CASA-1000 participant."
  },

  // MIDDLE EAST / WEST ASIA
  "sa": {
    name: "Saudi Arabia", officialName: "Kingdom of Saudi Arabia", flag: "🇸🇦",
    continent: "Asia", region: "Middle East", capital: "Riyadh",
    currency: "Saudi Riyal (SAR, ﷼)", population: "36.9 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Absolute Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "jo", name: "Jordan" }, { id: "iq", name: "Iraq" }, { id: "kw", name: "Kuwait" }, { id: "qa", name: "Qatar" }, { id: "ae", name: "UAE" }, { id: "om", name: "Oman" }, { id: "ye", name: "Yemen" }],
    internationalOrgs: ["UN", "OIC (HQ in Jeddah)", "OPEC", "GCC", "Arab League", "G20", "BRICS"],
    strategicSignificance: "World's top crude oil exporter; custodian of Islam's two holiest sites (Makkah & Madinah); leading remittances source for Pakistan."
  },
  "ir": {
    name: "Iran", officialName: "Islamic Republic of Iran", flag: "🇮🇷",
    continent: "Asia", region: "Middle East", capital: "Tehran",
    currency: "Iranian Rial (IRR, ﷼)", population: "89.2 Million",
    officialLanguage: "Persian (Farsi)",
    politicalSystem: "Unitary Theocratic Presidential Republic",
    headOfState: "Supreme Leader & President",
    neighbouringCountries: [{ id: "pk", name: "Pakistan" }, { id: "af", name: "Afghanistan" }, { id: "tm", name: "Turkmenistan" }, { id: "az", name: "Azerbaijan" }, { id: "am", name: "Armenia" }, { id: "tr", name: "Turkey" }, { id: "iq", name: "Iraq" }],
    internationalOrgs: ["UN", "OIC", "OPEC", "ECO", "SCO", "BRICS", "G-77"],
    strategicSignificance: "Overlooks Strait of Hormuz chokepoint; massive hydrocarbon reserves; Chabahar Port; member of BRICS and SCO."
  },
  "tr": {
    name: "Turkey", officialName: "Republic of Türkiye", flag: "🇹🇷",
    continent: "Asia / Europe", region: "Eurasia / Middle East", capital: "Ankara",
    currency: "Turkish Lira (TRY, ₺)", population: "85.8 Million",
    officialLanguage: "Turkish",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "gr", name: "Greece" }, { id: "bg", name: "Bulgaria" }, { id: "ge", name: "Georgia" }, { id: "am", name: "Armenia" }, { id: "az", name: "Azerbaijan" }, { id: "ir", name: "Iran" }, { id: "iq", name: "Iraq" }, { id: "sy", name: "Syria" }],
    internationalOrgs: ["UN", "NATO", "OIC", "ECO", "G20", "D-8", "Turkic Council"],
    strategicSignificance: "Controls Turkish Straits (Bosporus & Dardanelles) under 1936 Montreux Convention; 2nd largest military in NATO."
  },
  "ae": {
    name: "United Arab Emirates", officialName: "United Arab Emirates", flag: "🇦🇪",
    continent: "Asia", region: "Middle East", capital: "Abu Dhabi",
    currency: "UAE Dirham (AED, د.إ)", population: "10.2 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Federal Elective Constitutional Monarchy (7 Emirates)",
    headOfState: "President (Ruler of Abu Dhabi) & Prime Minister (Ruler of Dubai)",
    neighbouringCountries: [{ id: "sa", name: "Saudi Arabia" }, { id: "om", name: "Oman" }],
    internationalOrgs: ["UN", "OPEC", "GCC", "OIC", "Arab League", "BRICS"],
    strategicSignificance: "Global financial, aviation, and trade nexus (Dubai); strategic location on Strait of Hormuz; major investor in Pakistan."
  },
  "qa": {
    name: "Qatar", officialName: "State of Qatar", flag: "🇶🇦",
    continent: "Asia", region: "Middle East", capital: "Doha",
    currency: "Qatari Riyal (QAR, ر.ق)", population: "2.7 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Semi-Constitutional Monarchy",
    headOfState: "Amir & Prime Minister",
    neighbouringCountries: [{ id: "sa", name: "Saudi Arabia" }],
    internationalOrgs: ["UN", "GCC", "OIC", "Arab League", "GECF"],
    strategicSignificance: "World's leading exporter of Liquefied Natural Gas (LNG, North Field); key international diplomatic mediator; Al Jazeera headquarters."
  },
  "kw": {
    name: "Kuwait", officialName: "State of Kuwait", flag: "🇰🇼",
    continent: "Asia", region: "Middle East", capital: "Kuwait City",
    currency: "Kuwaiti Dinar (KWD, د.ك - highest valued currency unit in world)", population: "4.3 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Constitutional Monarchy",
    headOfState: "Amir & Prime Minister",
    neighbouringCountries: [{ id: "iq", name: "Iraq" }, { id: "sa", name: "Saudi Arabia" }],
    internationalOrgs: ["UN", "OPEC", "GCC", "OIC", "Arab League"],
    strategicSignificance: "Possesses ~6-7% of global oil reserves; highest currency value globally; founding OPEC member."
  },
  "om": {
    name: "Oman", officialName: "Sultanate of Oman", flag: "🇴🇲",
    continent: "Asia", region: "Middle East", capital: "Muscat",
    currency: "Omani Rial (OMR, ر.ع.)", population: "5.1 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Absolute Monarchy",
    headOfState: "Sultan & Prime Minister",
    neighbouringCountries: [{ id: "sa", name: "Saudi Arabia" }, { id: "ae", name: "UAE" }, { id: "ye", name: "Yemen" }],
    internationalOrgs: ["UN", "GCC", "OIC", "Arab League", "IORA"],
    strategicSignificance: "Controls the southern shore of Strait of Hormuz (Musandam Peninsula); Port of Duqm on Arabian Sea."
  },
  "ye": {
    name: "Yemen", officialName: "Republic of Yemen", flag: "🇾🇪",
    continent: "Asia", region: "Middle East", capital: "Sana'a (Aden interim)",
    currency: "Yemeni Rial (YER, ﷼)", population: "34.4 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "Presidential Leadership Council",
    neighbouringCountries: [{ id: "sa", name: "Saudi Arabia" }, { id: "om", name: "Oman" }],
    internationalOrgs: ["UN", "OIC", "Arab League", "NAM"],
    strategicSignificance: "Overlooks Bab-el-Mandeb Strait chokepoint connecting Red Sea to Gulf of Aden; key flashpoint for Red Sea shipping."
  },
  "iq": {
    name: "Iraq", officialName: "Republic of Iraq", flag: "🇮🇶",
    continent: "Asia", region: "Middle East", capital: "Baghdad",
    currency: "Iraqi Dinar (IQD, ع.د)", population: "44.5 Million",
    officialLanguage: "Arabic & Kurdish",
    politicalSystem: "Federal Parliamentary Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "ir", name: "Iran" }, { id: "kw", name: "Kuwait" }, { id: "sa", name: "Saudi Arabia" }, { id: "jo", name: "Jordan" }, { id: "sy", name: "Syria" }, { id: "tr", name: "Turkey" }],
    internationalOrgs: ["UN", "OPEC (Founding)", "OIC", "Arab League"],
    strategicSignificance: "Mesopotamian heartland (Tigris and Euphrates rivers); 5th largest proven crude oil reserves globally."
  },
  "sy": {
    name: "Syria", officialName: "Syrian Arab Republic", flag: "🇸🇾",
    continent: "Asia", region: "Middle East", capital: "Damascus",
    currency: "Syrian Pound (SYP, £S)", population: "23.2 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "tr", name: "Turkey" }, { id: "iq", name: "Iraq" }, { id: "jo", name: "Jordan" }, { id: "il", name: "Israel" }, { id: "lb", name: "Lebanon" }],
    internationalOrgs: ["UN", "Arab League", "OIC"],
    strategicSignificance: "Eastern Mediterranean coastline; Tartus Russian naval facility; Golan Heights dispute with Israel."
  },
  "jo": {
    name: "Jordan", officialName: "Hashemite Kingdom of Jordan", flag: "🇯🇴",
    continent: "Asia", region: "Middle East", capital: "Amman",
    currency: "Jordanian Dinar (JOD, د.ا)", population: "11.3 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "sy", name: "Syria" }, { id: "iq", name: "Iraq" }, { id: "sa", name: "Saudi Arabia" }, { id: "il", name: "Israel" }],
    internationalOrgs: ["UN", "OIC", "Arab League", "WTO"],
    strategicSignificance: "Strategic buffer state in Levant; custodian of Jerusalem holy sites (Waqf); Aqaba port on Red Sea."
  },
  "lb": {
    name: "Lebanon", officialName: "Lebanese Republic", flag: "🇱🇧",
    continent: "Asia", region: "Middle East", capital: "Beirut",
    currency: "Lebanese Pound (LBP, ل.ل)", population: "5.5 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Confessional Parliamentary Republic",
    headOfState: "President (Maronite Christian), Prime Minister (Sunni Muslim), Speaker (Shia Muslim)",
    neighbouringCountries: [{ id: "sy", name: "Syria" }, { id: "il", name: "Israel" }],
    internationalOrgs: ["UN", "Arab League", "OIC", "Francophonie"],
    strategicSignificance: "Complex confessional political system; Mediterranean maritime outlet; Blue Line border with Israel."
  },
  "il": {
    name: "Israel", officialName: "State of Israel", flag: "🇮🇱",
    continent: "Asia", region: "Middle East", capital: "Jerusalem (disputed / Tel Aviv recognized by UN)",
    currency: "Israeli New Shekel (ILS, ₪)", population: "9.8 Million",
    officialLanguage: "Hebrew",
    politicalSystem: "Unitary Parliamentary Republic (Knesset)",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "lb", name: "Lebanon" }, { id: "sy", name: "Syria" }, { id: "jo", name: "Jordan" }, { id: "eg", name: "Egypt" }],
    internationalOrgs: ["UN", "OECD", "WTO"],
    strategicSignificance: "Technological and military power in Middle East; Abraham Accords signatory; central party to Palestine conflict."
  },

  // EUROPE - Western & Central
  "gb": {
    name: "United Kingdom", officialName: "United Kingdom of Great Britain and Northern Ireland", flag: "🇬🇧",
    continent: "Europe", region: "Western Europe", capital: "London",
    currency: "Pound Sterling (GBP, £)", population: "68.2 Million",
    officialLanguage: "English",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "Monarch (Head of State) & Prime Minister (Head of Government)",
    neighbouringCountries: [{ id: "ie", name: "Ireland", border: "499 km" }],
    internationalOrgs: ["UN", "UNSC (Permanent Member)", "NATO", "G7", "G20", "Commonwealth (HQ in London)", "OECD"],
    strategicSignificance: "Permanent member of UNSC; leading financial capital (City of London); former British Empire."
  },
  "fr": {
    name: "France", officialName: "French Republic", flag: "🇫🇷",
    continent: "Europe", region: "Western Europe", capital: "Paris",
    currency: "Euro (EUR, €)", population: "68 Million",
    officialLanguage: "French",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "be", name: "Belgium" }, { id: "lu", name: "Luxembourg" }, { id: "de", name: "Germany" }, { id: "ch", name: "Switzerland" }, { id: "it", name: "Italy" }, { id: "es", name: "Spain" }],
    internationalOrgs: ["UN", "UNSC (Permanent Member)", "EU (Founding)", "NATO", "G7", "G20", "OECD"],
    strategicSignificance: "Permanent member of UNSC; EU's leading military & nuclear power; UNESCO headquarters in Paris."
  },
  "de": {
    name: "Germany", officialName: "Federal Republic of Germany", flag: "🇩🇪",
    continent: "Europe", region: "Central Europe", capital: "Berlin",
    currency: "Euro (EUR, €)", population: "84.4 Million",
    officialLanguage: "German",
    politicalSystem: "Federal Parliamentary Republic (Bundestag & Bundesrat)",
    headOfState: "Federal President & Federal Chancellor",
    neighbouringCountries: [{ id: "dk", name: "Denmark" }, { id: "pl", name: "Poland" }, { id: "cz", name: "Czechia" }, { id: "at", name: "Austria" }, { id: "ch", name: "Switzerland" }, { id: "fr", name: "France" }, { id: "lu", name: "Luxembourg" }, { id: "be", name: "Belgium" }, { id: "nl", name: "Netherlands" }],
    internationalOrgs: ["UN", "EU", "NATO", "G7", "G20", "OECD"],
    strategicSignificance: "Europe's largest national economy (3rd largest in world); economic engine of European Union."
  },
  "it": {
    name: "Italy", officialName: "Italian Republic", flag: "🇮🇹",
    continent: "Europe", region: "Southern Europe", capital: "Rome",
    currency: "Euro (EUR, €)", population: "58.9 Million",
    officialLanguage: "Italian",
    politicalSystem: "Unitary Parliamentary Republic",
    headOfState: "President & Prime Minister (President of the Council of Ministers)",
    neighbouringCountries: [{ id: "fr", name: "France" }, { id: "ch", name: "Switzerland" }, { id: "at", name: "Austria" }, { id: "si", name: "Slovenia" }],
    internationalOrgs: ["UN", "EU", "NATO", "G7", "G20", "OECD"],
    strategicSignificance: "Mediterranean peninsula; host to UN Food & Agriculture Organization (FAO) in Rome; encloses Vatican City."
  },
  "es": {
    name: "Spain", officialName: "Kingdom of Spain", flag: "🇪🇸",
    continent: "Europe", region: "Southern Europe", capital: "Madrid",
    currency: "Euro (EUR, €)", population: "48.6 Million",
    officialLanguage: "Spanish (Castilian)",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister (President of the Government)",
    neighbouringCountries: [{ id: "pt", name: "Portugal" }, { id: "fr", name: "France" }],
    internationalOrgs: ["UN", "EU", "NATO", "OECD", "G20 (Permanent Guest)"],
    strategicSignificance: "Controls northern shore of Strait of Gibraltar; bridge between Europe, Latin America, and North Africa."
  },
  "pt": {
    name: "Portugal", officialName: "Portuguese Republic", flag: "🇵🇹",
    continent: "Europe", region: "Southern Europe", capital: "Lisbon",
    currency: "Euro (EUR, €)", population: "10.5 Million",
    officialLanguage: "Portuguese",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "es", name: "Spain" }],
    internationalOrgs: ["UN", "EU", "NATO (Founding)", "OECD", "CPLP"],
    strategicSignificance: "Westernmost country of mainland Europe; pioneer of Age of Discovery; Atlantic maritime territory."
  },
  "nl": {
    name: "Netherlands", officialName: "Kingdom of the Netherlands", flag: "🇳🇱",
    continent: "Europe", region: "Western Europe", capital: "Amsterdam (The Hague is seat of govt & ICJ)",
    currency: "Euro (EUR, €)", population: "17.9 Million",
    officialLanguage: "Dutch",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "de", name: "Germany" }, { id: "be", name: "Belgium" }],
    internationalOrgs: ["UN", "EU", "NATO", "OECD", "ICJ (The Hague)", "ICC (The Hague)"],
    strategicSignificance: "The Hague hosts International Court of Justice (ICJ) and ICC; Port of Rotterdam is Europe's largest seaport."
  },
  "be": {
    name: "Belgium", officialName: "Kingdom of Belgium", flag: "🇧🇪",
    continent: "Europe", region: "Western Europe", capital: "Brussels",
    currency: "Euro (EUR, €)", population: "11.8 Million",
    officialLanguage: "Dutch, French, German",
    politicalSystem: "Federal Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "fr", name: "France" }, { id: "de", name: "Germany" }, { id: "lu", name: "Luxembourg" }, { id: "nl", name: "Netherlands" }],
    internationalOrgs: ["UN", "EU (Headquarters in Brussels)", "NATO (Headquarters in Brussels)", "OECD"],
    strategicSignificance: "De-facto capital of European Union and NATO headquarters; diplomatic crossroads of Western Europe."
  },
  "ch": {
    name: "Switzerland", officialName: "Swiss Confederation", flag: "🇨🇭",
    continent: "Europe", region: "Central Europe", capital: "Bern",
    currency: "Swiss Franc (CHF, Fr)", population: "8.9 Million",
    officialLanguage: "German, French, Italian, Romansh",
    politicalSystem: "Federal Direct-Democratic Republic (Federal Council of 7)",
    headOfState: "President of the Confederation (Rotates annually)",
    neighbouringCountries: [{ id: "de", name: "Germany" }, { id: "fr", name: "France" }, { id: "it", name: "Italy" }, { id: "at", name: "Austria" }],
    internationalOrgs: ["UN (European HQ in Geneva)", "EFTA", "WTO (HQ in Geneva)", "WHO (Geneva)", "Red Cross (ICRC)"],
    strategicSignificance: "Historic policy of armed neutrality; host to UN Geneva, WTO, WHO, and World Economic Forum (Davos)."
  },
  "at": {
    name: "Austria", officialName: "Republic of Austria", flag: "🇦🇹",
    continent: "Europe", region: "Central Europe", capital: "Vienna",
    currency: "Euro (EUR, €)", population: "9.1 Million",
    officialLanguage: "German",
    politicalSystem: "Federal Parliamentary Republic",
    headOfState: "Federal President & Federal Chancellor",
    neighbouringCountries: [{ id: "de", name: "Germany" }, { id: "cz", name: "Czechia" }, { id: "sk", name: "Slovakia" }, { id: "hu", name: "Hungary" }, { id: "si", name: "Slovenia" }, { id: "it", name: "Italy" }, { id: "ch", name: "Switzerland" }],
    internationalOrgs: ["UN (Vienna Office)", "EU", "IAEA (HQ in Vienna)", "OPEC (HQ in Vienna)", "OSCE"],
    strategicSignificance: "Constitutional neutrality; Vienna hosts International Atomic Energy Agency (IAEA) and OPEC secretariat."
  },
  "se": {
    name: "Sweden", officialName: "Kingdom of Sweden", flag: "🇸🇪",
    continent: "Europe", region: "Northern Europe (Nordic)", capital: "Stockholm",
    currency: "Swedish Krona (SEK, kr)", population: "10.5 Million",
    officialLanguage: "Swedish",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "no", name: "Norway" }, { id: "fi", name: "Finland" }],
    internationalOrgs: ["UN", "EU", "NATO (Joined 2024)", "OECD", "Nordic Council"],
    strategicSignificance: "Baltic Sea security anchor; ended 200 years of neutrality by joining NATO in 2024; home of Nobel Prizes."
  },
  "no": {
    name: "Norway", officialName: "Kingdom of Norway", flag: "🇳🇴",
    continent: "Europe", region: "Northern Europe (Nordic)", capital: "Oslo",
    currency: "Norwegian Krone (NOK, kr)", population: "5.5 Million",
    officialLanguage: "Norwegian",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "se", name: "Sweden" }, { id: "fi", name: "Finland" }, { id: "ru", name: "Russia" }],
    internationalOrgs: ["UN", "NATO (Founding)", "EFTA", "OECD", "Nordic Council"],
    strategicSignificance: "World's largest Sovereign Wealth Fund (>\\$1.6 Trillion); major natural gas exporter to Europe; Arctic sovereignty."
  },
  "fi": {
    name: "Finland", officialName: "Republic of Finland", flag: "🇫🇮",
    continent: "Europe", region: "Northern Europe (Nordic)", capital: "Helsinki",
    currency: "Euro (EUR, €)", population: "5.6 Million",
    officialLanguage: "Finnish & Swedish",
    politicalSystem: "Unitary Parliamentary Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "se", name: "Sweden" }, { id: "no", name: "Norway" }, { id: "ru", name: "Russia", border: "1,340 km" }],
    internationalOrgs: ["UN", "EU", "NATO (Joined 2023)", "OECD", "Nordic Council"],
    strategicSignificance: "Joined NATO in 2023, doubling NATO's direct land border with Russia; world's happiest country ranking."
  },
  "pl": {
    name: "Poland", officialName: "Republic of Poland", flag: "🇵🇱",
    continent: "Europe", region: "Central / Eastern Europe", capital: "Warsaw",
    currency: "Polish Złoty (PLN, zł)", population: "37.7 Million",
    officialLanguage: "Polish",
    politicalSystem: "Unitary Parliamentary Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "de", name: "Germany" }, { id: "cz", name: "Czechia" }, { id: "sk", name: "Slovakia" }, { id: "ua", name: "Ukraine" }, { id: "by", name: "Belarus" }, { id: "lt", name: "Lithuania" }, { id: "ru", name: "Russia (Kaliningrad)" }],
    internationalOrgs: ["UN", "EU", "NATO", "OECD", "V4"],
    strategicSignificance: "NATO's eastern flank vanguard; leading defense spender (% of GDP) in Europe; key transit corridor for Ukraine."
  },
  "ua": {
    name: "Ukraine", officialName: "Ukraine", flag: "🇺🇦",
    continent: "Europe", region: "Eastern Europe", capital: "Kyiv",
    currency: "Ukrainian Hryvnia (UAH, ₴)", population: "38 Million",
    officialLanguage: "Ukrainian",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "ru", name: "Russia" }, { id: "by", name: "Belarus" }, { id: "pl", name: "Poland" }, { id: "sk", name: "Slovakia" }, { id: "hu", name: "Hungary" }, { id: "ro", name: "Romania" }, { id: "md", name: "Moldova" }],
    internationalOrgs: ["UN", "Council of Europe", "OSCE"],
    strategicSignificance: "Second-largest country by area in Europe; breadbasket of the world (grain exports); epicenter of Russia-Ukraine conflict."
  },
  "ru": {
    name: "Russia", officialName: "Russian Federation", flag: "🇷🇺",
    continent: "Europe / Asia", region: "Eurasia", capital: "Moscow",
    currency: "Russian Ruble (RUB, ₽)", population: "144.2 Million",
    officialLanguage: "Russian",
    politicalSystem: "Federal Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "no", name: "Norway" }, { id: "fi", name: "Finland" }, { id: "ee", name: "Estonia" }, { id: "lv", name: "Latvia" }, { id: "lt", name: "Lithuania" }, { id: "pl", name: "Poland" }, { id: "by", name: "Belarus" }, { id: "ua", name: "Ukraine" }, { id: "ge", name: "Georgia" }, { id: "az", name: "Azerbaijan" }, { id: "kz", name: "Kazakhstan" }, { id: "cn", name: "China" }, { id: "mn", name: "Mongolia" }, { id: "kp", name: "North Korea" }],
    internationalOrgs: ["UN", "UNSC (Permanent Member)", "BRICS", "SCO", "G20", "CSTO", "EAEU"],
    strategicSignificance: "World's largest country by land area (17.1M km²); largest nuclear arsenal; massive energy and wheat supplier."
  },

  // AMERICAS - North America
  "us": {
    name: "United States", officialName: "United States of America", flag: "🇺🇸",
    continent: "North America", region: "North America", capital: "Washington, D.C.",
    currency: "United States Dollar (USD, $)", population: "336 Million",
    officialLanguage: "English (de facto)",
    politicalSystem: "Federal Constitutional Presidential Republic",
    headOfState: "President of the United States",
    neighbouringCountries: [{ id: "ca", name: "Canada", border: "8,891 km" }, { id: "mx", name: "Mexico", border: "3,145 km" }],
    internationalOrgs: ["UN", "UNSC (Permanent Member)", "NATO", "G7", "G20", "WTO", "IMF", "World Bank", "QUAD", "AUKUS", "USMCA"],
    strategicSignificance: "World's largest economy by nominal GDP; global superpower; host to UN Headquarters in New York."
  },
  "ca": {
    name: "Canada", officialName: "Canada", flag: "🇨🇦",
    continent: "North America", region: "North America", capital: "Ottawa",
    currency: "Canadian Dollar (CAD, C$)", population: "40.5 Million",
    officialLanguage: "English & French",
    politicalSystem: "Federal Parliamentary Constitutional Monarchy",
    headOfState: "Monarch & Prime Minister",
    neighbouringCountries: [{ id: "us", name: "United States" }],
    internationalOrgs: ["UN", "NATO", "G7", "G20", "Commonwealth", "USMCA", "OECD"],
    strategicSignificance: "World's second-largest country by area; extensive Arctic coastline; vast oil sands, minerals, and freshwater reserves."
  },
  "mx": {
    name: "Mexico", officialName: "United Mexican States", flag: "🇲🇽",
    continent: "North America", region: "North America", capital: "Mexico City",
    currency: "Mexican Peso (MXN, $)", population: "129.5 Million",
    officialLanguage: "Spanish",
    politicalSystem: "Federal Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "us", name: "United States" }, { id: "gt", name: "Guatemala" }, { id: "bz", name: "Belize" }],
    internationalOrgs: ["UN", "G20", "OECD", "USMCA", "OAS"],
    strategicSignificance: "Top trading partner of United States; primary nearshoring destination; largest Spanish-speaking nation."
  },

  // AMERICAS - South America
  "br": {
    name: "Brazil", officialName: "Federative Republic of Brazil", flag: "🇧🇷",
    continent: "South America", region: "South America", capital: "Brasília",
    currency: "Brazilian Real (BRL, R$)", population: "216.4 Million",
    officialLanguage: "Portuguese",
    politicalSystem: "Federal Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "ar", name: "Argentina" }, { id: "bo", name: "Bolivia" }, { id: "co", name: "Colombia" }, { id: "gy", name: "Guyana" }, { id: "py", name: "Paraguay" }, { id: "pe", name: "Peru" }, { id: "sr", name: "Suriname" }, { id: "uy", name: "Uruguay" }, { id: "ve", name: "Venezuela" }],
    internationalOrgs: ["UN", "BRICS (Founding)", "G20", "Mercosur", "OAS"],
    strategicSignificance: "Largest economy and population in Latin America; guardian of the Amazon Rainforest; agricultural superpower."
  },
  "ar": {
    name: "Argentina", officialName: "Argentine Republic", flag: "🇦🇷",
    continent: "South America", region: "South America", capital: "Buenos Aires",
    currency: "Argentine Peso (ARS, $)", population: "46.6 Million",
    officialLanguage: "Spanish",
    politicalSystem: "Federal Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "cl", name: "Chile" }, { id: "bo", name: "Bolivia" }, { id: "py", name: "Paraguay" }, { id: "br", name: "Brazil" }, { id: "uy", name: "Uruguay" }],
    internationalOrgs: ["UN", "G20", "Mercosur", "OAS"],
    strategicSignificance: "Part of the 'Lithium Triangle' (with Chile and Bolivia); massive shale oil/gas reserves (Vaca Muerta); agricultural exporter."
  },
  "cl": {
    name: "Chile", officialName: "Republic of Chile", flag: "🇨🇱",
    continent: "South America", region: "South America", capital: "Santiago",
    currency: "Chilean Peso (CLP, $)", population: "19.6 Million",
    officialLanguage: "Spanish",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "ar", name: "Argentina" }, { id: "bo", name: "Bolivia" }, { id: "pe", name: "Peru" }],
    internationalOrgs: ["UN", "OECD", "Pacific Alliance", "CPTPP", "OAS"],
    strategicSignificance: "World's top copper producer; major lithium reserves; controls Strait of Magellan and Cape Horn passage."
  },
  "co": {
    name: "Colombia", officialName: "Republic of Colombia", flag: "🇨🇴",
    continent: "South America", region: "South America", capital: "Bogotá",
    currency: "Colombian Peso (COP, $)", population: "52.2 Million",
    officialLanguage: "Spanish",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "ve", name: "Venezuela" }, { id: "br", name: "Brazil" }, { id: "pe", name: "Peru" }, { id: "ec", name: "Ecuador" }, { id: "pa", name: "Panama" }],
    internationalOrgs: ["UN", "OECD", "Pacific Alliance", "OAS"],
    strategicSignificance: "Only South American nation with coastlines on both Pacific and Caribbean; major coffee, coal, and emerald producer."
  },
  "ve": {
    name: "Venezuela", officialName: "Bolivarian Republic of Venezuela", flag: "🇻🇪",
    continent: "South America", region: "South America", capital: "Caracas",
    currency: "Venezuelan Bolívar (VES, Bs.)", population: "29 Million",
    officialLanguage: "Spanish",
    politicalSystem: "Federal Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "co", name: "Colombia" }, { id: "br", name: "Brazil" }, { id: "gy", name: "Guyana" }],
    internationalOrgs: ["UN", "OPEC (Founding)", "NAM"],
    strategicSignificance: "Holds world's largest proven crude oil reserves (~303 Billion barrels, Orinoco Belt); founding OPEC member."
  },

  // AFRICA
  "eg": {
    name: "Egypt", officialName: "Arab Republic of Egypt", flag: "🇪🇬",
    continent: "Africa", region: "North Africa", capital: "Cairo",
    currency: "Egyptian Pound (EGP, E£)", population: "112.7 Million",
    officialLanguage: "Arabic",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "ly", name: "Libya" }, { id: "sd", name: "Sudan" }, { id: "il", name: "Israel" }],
    internationalOrgs: ["UN", "BRICS", "African Union", "Arab League (HQ in Cairo)", "OIC", "D-8", "COMESA"],
    strategicSignificance: "Controls Suez Canal (handles ~12% of global trade); Sinai Peninsula transcontinental bridge; Arab League HQ."
  },
  "za": {
    name: "South Africa", officialName: "Republic of South Africa", flag: "🇿🇦",
    continent: "Africa", region: "Southern Africa", capital: "Pretoria (Exec) / Cape Town (Leg) / Bloemfontein (Jud)",
    currency: "South African Rand (ZAR, R)", population: "62 Million",
    officialLanguage: "12 Official Languages (including Zulu, Xhosa, Afrikaans, English)",
    politicalSystem: "Unitary Parliamentary Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "na", name: "Namibia" }, { id: "bw", name: "Botswana" }, { id: "zw", name: "Zimbabwe" }, { id: "mz", name: "Mozambique" }, { id: "sz", name: "Eswatini" }, { id: "ls", name: "Lesotho" }],
    internationalOrgs: ["UN", "BRICS (Founding 'S')", "G20", "African Union", "Commonwealth", "SADC"],
    strategicSignificance: "Leading industrial economy in Africa; platinum and gold reserves; Cape of Good Hope maritime transit."
  },
  "ng": {
    name: "Nigeria", officialName: "Federal Republic of Nigeria", flag: "🇳🇬",
    continent: "Africa", region: "West Africa", capital: "Abuja",
    currency: "Nigerian Naira (NGN, ₦)", population: "224 Million",
    officialLanguage: "English",
    politicalSystem: "Federal Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "bj", name: "Benin" }, { id: "ne", name: "Niger" }, { id: "td", name: "Chad" }, { id: "cm", name: "Cameroon" }],
    internationalOrgs: ["UN", "OPEC", "African Union", "ECOWAS", "OIC", "Commonwealth", "D-8"],
    strategicSignificance: "Most populous nation in Africa; largest oil producer in sub-Saharan Africa (Niger Delta); anchor of ECOWAS."
  },
  "dz": {
    name: "Algeria", officialName: "People's Democratic Republic of Algeria", flag: "🇩🇿",
    continent: "Africa", region: "North Africa", capital: "Algiers",
    currency: "Algerian Dinar (DZD, د.ج)", population: "45.6 Million",
    officialLanguage: "Arabic & Berber (Tamazight)",
    politicalSystem: "Unitary Semi-Presidential Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "tn", name: "Tunisia" }, { id: "ly", name: "Libya" }, { id: "ne", name: "Niger" }, { id: "ml", name: "Mali" }, { id: "mr", name: "Mauritania" }, { id: "ma", name: "Morocco" }],
    internationalOrgs: ["UN", "OPEC", "African Union", "Arab League", "OIC"],
    strategicSignificance: "Largest country in Africa by land area (2.38M km²); crucial natural gas supplier to southern Europe (Italy, Spain)."
  },
  "ma": {
    name: "Morocco", officialName: "Kingdom of Morocco", flag: "🇲🇦",
    continent: "Africa", region: "North Africa", capital: "Rabat",
    currency: "Moroccan Dirham (MAD, د.م.)", population: "37.8 Million",
    officialLanguage: "Arabic & Standard Moroccan Berber",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "King & Prime Minister",
    neighbouringCountries: [{ id: "dz", name: "Algeria" }, { id: "mr", name: "Mauritania" }, { id: "es", name: "Spain (Ceuta & Melilla borders)" }],
    internationalOrgs: ["UN", "African Union", "Arab League", "OIC"],
    strategicSignificance: "World's largest reserves of phosphate rock (critical for global fertilizer); overlooks Strait of Gibraltar; Port of Tanger Med."
  },
  "ke": {
    name: "Kenya", officialName: "Republic of Kenya", flag: "🇰🇪",
    continent: "Africa", region: "East Africa", capital: "Nairobi",
    currency: "Kenyan Shilling (KES, KSh)", population: "55.1 Million",
    officialLanguage: "English & Swahili",
    politicalSystem: "Unitary Presidential Republic",
    headOfState: "President",
    neighbouringCountries: [{ id: "et", name: "Ethiopia" }, { id: "so", name: "Somalia" }, { id: "tz", name: "Tanzania" }, { id: "ug", name: "Uganda" }, { id: "ss", name: "South Sudan" }],
    internationalOrgs: ["UN (UNEP & UN-Habitat HQ in Nairobi)", "African Union", "EAC", "Commonwealth"],
    strategicSignificance: "East African economic and logistics hub; Nairobi hosts UNEP (only UN agency HQ in Global South); Port of Mombasa."
  },
  "et": {
    name: "Ethiopia", officialName: "Federal Democratic Republic of Ethiopia", flag: "🇪🇹",
    continent: "Africa", region: "Horn of Africa", capital: "Addis Ababa",
    currency: "Ethiopian Birr (ETB, Br)", population: "126.5 Million",
    officialLanguage: "Amharic & Afar, Oromo, Somali, Tigrinya",
    politicalSystem: "Federal Parliamentary Republic",
    headOfState: "President & Prime Minister",
    neighbouringCountries: [{ id: "er", name: "Eritrea" }, { id: "dj", name: "Djibouti" }, { id: "so", name: "Somalia" }, { id: "ke", name: "Kenya" }, { id: "ss", name: "South Sudan" }, { id: "sd", name: "Sudan" }],
    internationalOrgs: ["UN", "BRICS", "African Union (HQ in Addis Ababa)", "COMESA"],
    strategicSignificance: "Second most populous country in Africa; diplomatic capital of Africa (AU Headquarters); Grand Ethiopian Renaissance Dam (GERD) on Blue Nile."
  },

  // OCEANIA
  "au": {
    name: "Australia", officialName: "Commonwealth of Australia", flag: "🇦🇺",
    continent: "Oceania", region: "Australia & New Zealand", capital: "Canberra",
    currency: "Australian Dollar (AUD, A$)", population: "26.7 Million",
    officialLanguage: "English",
    politicalSystem: "Federal Parliamentary Constitutional Monarchy",
    headOfState: "Monarch & Prime Minister",
    neighbouringCountries: [{ id: "id", name: "Indonesia (Maritime)" }, { id: "pg", name: "Papua New Guinea (Maritime)" }, { id: "nz", name: "New Zealand (Maritime)" }],
    internationalOrgs: ["UN", "G20", "OECD", "QUAD", "AUKUS", "Five Eyes", "Commonwealth"],
    strategicSignificance: "Critical mineral exporter (lithium, iron ore, bauxite, LNG); key Western security pillar in Indo-Pacific (AUKUS & QUAD)."
  },
  "nz": {
    name: "New Zealand", officialName: "New Zealand", flag: "🇳🇿",
    continent: "Oceania", region: "Polynesia", capital: "Wellington",
    currency: "New Zealand Dollar (NZD, NZ$)", population: "5.2 Million",
    officialLanguage: "English & Māori",
    politicalSystem: "Unitary Parliamentary Constitutional Monarchy",
    headOfState: "Monarch & Prime Minister",
    neighbouringCountries: [{ id: "au", name: "Australia (Maritime: Tasman Sea)" }],
    internationalOrgs: ["UN", "OECD", "Five Eyes", "Commonwealth", "CPTPP"],
    strategicSignificance: "Leading dairy exporter; Five Eyes intelligence alliance member; Pacific island diplomacy leader."
  }
};

// Helper: Standard default generator for all other 140 countries so NO country is missing
const isoNames = {
  "_somaliland": { name: "Somaliland", capital: "Hargeisa", pop: "5.7 M", curr: "Somaliland Shilling", lang: "Somali, Arabic", cont: "Africa", sys: "De-facto Presidential Republic", orgs: ["UNPO"] },
  "al": { name: "Albania", capital: "Tirana", pop: "2.7 M", curr: "Albanian Lek (ALL)", lang: "Albanian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "NATO", "OIC"] },
  "am": { name: "Armenia", capital: "Yerevan", pop: "2.8 M", curr: "Armenian Dram (AMD)", lang: "Armenian", cont: "Asia", sys: "Unitary Parliamentary Republic", orgs: ["UN", "CSTO", "EAEU"] },
  "ao": { name: "Angola", capital: "Luanda", pop: "36 M", curr: "Angolan Kwanza (AOA)", lang: "Portuguese", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "SADC"] },
  "az": { name: "Azerbaijan", capital: "Baku", pop: "10.4 M", curr: "Azerbaijani Manat (AZN)", lang: "Azerbaijani", cont: "Asia", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "OIC", "ECO", "Turkic Council", "NAM"] },
  "ba": { name: "Bosnia and Herzegovina", capital: "Sarajevo", pop: "3.2 M", curr: "Convertible Mark (BAM)", lang: "Bosnian, Croatian, Serbian", cont: "Europe", sys: "Federal Parliamentary Republic (3-member Presidency)", orgs: ["UN", "OIC (Observer)"] },
  "bf": { name: "Burkina Faso", capital: "Ouagadougou", pop: "23 M", curr: "West African CFA Franc", lang: "French", cont: "Africa", sys: "Unitary Republic (Transitional)", orgs: ["UN", "AU", "OIC"] },
  "bg": { name: "Bulgaria", capital: "Sofia", pop: "6.4 M", curr: "Bulgarian Lev (BGN)", lang: "Bulgarian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO"] },
  "bi": { name: "Burundi", capital: "Gitega", pop: "13 M", curr: "Burundian Franc (BIF)", lang: "Kirundi, French", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "EAC"] },
  "bj": { name: "Benin", capital: "Porto-Novo", pop: "13.7 M", curr: "West African CFA Franc", lang: "French", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "ECOWAS", "OIC"] },
  "bo": { name: "Bolivia", capital: "Sucre (Constitutional) / La Paz", pop: "12.4 M", curr: "Boliviano (BOB)", lang: "Spanish & 36 Indigenous", cont: "South America", sys: "Unitary Presidential Republic", orgs: ["UN", "Mercosur", "OAS"] },
  "bs": { name: "Bahamas", capital: "Nassau", pop: "410,000", curr: "Bahamian Dollar", lang: "English", cont: "North America", sys: "Parliamentary Constitutional Monarchy", orgs: ["UN", "Commonwealth", "CARICOM"] },
  "bw": { name: "Botswana", capital: "Gaborone", pop: "2.6 M", curr: "Botswana Pula (BWP)", lang: "English, Setswana", cont: "Africa", sys: "Unitary Parliamentary Republic", orgs: ["UN", "AU", "SADC", "Commonwealth"] },
  "by": { name: "Belarus", capital: "Minsk", pop: "9.2 M", curr: "Belarusian Ruble (BYN)", lang: "Belarusian, Russian", cont: "Europe", sys: "Unitary Presidential Republic", orgs: ["UN", "CSTO", "EAEU", "SCO"] },
  "bz": { name: "Belize", capital: "Belmopan", pop: "405,000", curr: "Belize Dollar (BZD)", lang: "English", cont: "North America", sys: "Parliamentary Constitutional Monarchy", orgs: ["UN", "Commonwealth", "CARICOM"] },
  "cd": { name: "DR Congo", capital: "Kinshasa", pop: "102 M", curr: "Congolese Franc (CDF)", lang: "French", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU", "SADC", "EAC"] },
  "cf": { name: "Central African Republic", capital: "Bangui", pop: "5.5 M", curr: "Central African CFA Franc", lang: "French, Sango", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU"] },
  "cg": { name: "Congo (Brazzaville)", capital: "Brazzaville", pop: "6.1 M", curr: "Central African CFA Franc", lang: "French", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "OPEC", "AU"] },
  "ci": { name: "Ivory Coast", capital: "Yamoussoukro", pop: "29 M", curr: "West African CFA Franc", lang: "French", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "ECOWAS", "OIC"] },
  "cm": { name: "Cameroon", capital: "Yaoundé", pop: "28 M", curr: "Central African CFA Franc", lang: "French, English", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "Commonwealth", "OIC"] },
  "cr": { name: "Costa Rica", capital: "San José", pop: "5.2 M", curr: "Costa Rican Colón", lang: "Spanish", cont: "North America", sys: "Unitary Presidential Republic", orgs: ["UN", "OECD", "OAS"] },
  "cu": { name: "Cuba", capital: "Havana", pop: "11.2 M", curr: "Cuban Peso (CUP)", lang: "Spanish", cont: "North America", sys: "Unitary One-Party Socialist Republic", orgs: ["UN", "NAM", "ALBA"] },
  "cv": { name: "Cape Verde", capital: "Praia", pop: "590,000", curr: "Cape Verdean Escudo", lang: "Portuguese", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU", "ECOWAS"] },
  "cy": { name: "Cyprus", capital: "Nicosia", pop: "1.2 M", curr: "Euro (EUR)", lang: "Greek, Turkish", cont: "Europe", sys: "Unitary Presidential Republic", orgs: ["UN", "EU", "Commonwealth"] },
  "cz": { name: "Czech Republic", capital: "Prague", pop: "10.9 M", curr: "Czech Koruna (CZK)", lang: "Czech", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO", "OECD"] },
  "dj": { name: "Djibouti", capital: "Djibouti City", pop: "1.1 M", curr: "Djiboutian Franc", lang: "Arabic, French", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU", "Arab League", "OIC"] },
  "dk": { name: "Denmark", capital: "Copenhagen", pop: "5.9 M", curr: "Danish Krone (DKK)", lang: "Danish", cont: "Europe", sys: "Unitary Parliamentary Constitutional Monarchy", orgs: ["UN", "EU", "NATO", "OECD"] },
  "dm": { name: "Dominica", capital: "Roseau", pop: "72,000", curr: "East Caribbean Dollar", lang: "English", cont: "North America", sys: "Unitary Parliamentary Republic", orgs: ["UN", "Commonwealth", "CARICOM"] },
  "do": { name: "Dominican Republic", capital: "Santo Domingo", pop: "11.3 M", curr: "Dominican Peso", lang: "Spanish", cont: "North America", sys: "Unitary Presidential Republic", orgs: ["UN", "OAS"] },
  "ec": { name: "Ecuador", capital: "Quito", pop: "18 M", curr: "United States Dollar (USD)", lang: "Spanish", cont: "South America", sys: "Unitary Presidential Republic", orgs: ["UN", "OAS"] },
  "ee": { name: "Estonia", capital: "Tallinn", pop: "1.3 M", curr: "Euro (EUR)", lang: "Estonian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO", "OECD"] },
  "er": { name: "Eritrea", capital: "Asmara", pop: "3.7 M", curr: "Eritrean Nakfa", lang: "Tigrinya, Arabic, English", cont: "Africa", sys: "Unitary One-Party Presidential Republic", orgs: ["UN", "AU"] },
  "fk": { name: "Falkland Islands", capital: "Stanley", pop: "3,800", curr: "Falkland Islands Pound", lang: "English", cont: "South America", sys: "British Overseas Territory", orgs: ["UK Territory"] },
  "ga": { name: "Gabon", capital: "Libreville", pop: "2.4 M", curr: "Central African CFA Franc", lang: "French", cont: "Africa", sys: "Transitional Republic", orgs: ["UN", "OPEC", "OIC", "Commonwealth"] },
  "ge": { name: "Georgia", capital: "Tbilisi", pop: "3.7 M", curr: "Georgian Lari (GEL)", lang: "Georgian", cont: "Asia / Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "Council of Europe"] },
  "gh": { name: "Ghana", capital: "Accra", pop: "34 M", curr: "Ghanaian Cedi (GHS)", lang: "English", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "ECOWAS", "Commonwealth"] },
  "gl": { name: "Greenland", capital: "Nuuk", pop: "56,000", curr: "Danish Krone (DKK)", lang: "Greenlandic, Danish", cont: "North America", sys: "Autonomous Territory of Denmark", orgs: ["Kingdom of Denmark"] },
  "gm": { name: "Gambia", capital: "Banjul", pop: "2.7 M", curr: "Gambian Dalasi", lang: "English", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "ECOWAS", "OIC", "Commonwealth"] },
  "gn": { name: "Guinea", capital: "Conakry", pop: "14 M", curr: "Guinean Franc", lang: "French", cont: "Africa", sys: "Transitional Republic", orgs: ["UN", "AU", "OIC"] },
  "gq": { name: "Equatorial Guinea", capital: "Malabo", pop: "1.7 M", curr: "Central African CFA Franc", lang: "Spanish, French, Portuguese", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "OPEC"] },
  "gr": { name: "Greece", capital: "Athens", pop: "10.4 M", curr: "Euro (EUR)", lang: "Greek", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO", "OECD"] },
  "gt": { name: "Guatemala", capital: "Guatemala City", pop: "18 M", curr: "Guatemalan Quetzal", lang: "Spanish", cont: "North America", sys: "Unitary Presidential Republic", orgs: ["UN", "OAS"] },
  "gw": { name: "Guinea-Bissau", capital: "Bissau", pop: "2.1 M", curr: "West African CFA Franc", lang: "Portuguese", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU", "ECOWAS", "OIC"] },
  "gy": { name: "Guyana", capital: "Georgetown", pop: "810,000", curr: "Guyanese Dollar", lang: "English", cont: "South America", sys: "Unitary Parliamentary Republic", orgs: ["UN", "Commonwealth", "OIC", "CARICOM"] },
  "hn": { name: "Honduras", capital: "Tegucigalpa", pop: "10.6 M", curr: "Honduran Lempira", lang: "Spanish", cont: "North America", sys: "Unitary Presidential Republic", orgs: ["UN", "OAS"] },
  "hr": { name: "Croatia", capital: "Zagreb", pop: "3.8 M", curr: "Euro (EUR)", lang: "Croatian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO"] },
  "ht": { name: "Haiti", capital: "Port-au-Prince", pop: "11.7 M", curr: "Haitian Gourde", lang: "French, Haitian Creole", cont: "North America", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "CARICOM", "OAS"] },
  "hu": { name: "Hungary", capital: "Budapest", pop: "9.6 M", curr: "Hungarian Forint (HUF)", lang: "Hungarian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO", "OECD"] },
  "ie": { name: "Ireland", capital: "Dublin", pop: "5.2 M", curr: "Euro (EUR)", lang: "Irish, English", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "OECD"] },
  "is": { name: "Iceland", capital: "Reykjavik", pop: "390,000", curr: "Icelandic Króna (ISK)", lang: "Icelandic", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "NATO (Founding)", "EFTA", "OECD"] },
  "jm": { name: "Jamaica", capital: "Kingston", pop: "2.8 M", curr: "Jamaican Dollar", lang: "English", cont: "North America", sys: "Parliamentary Constitutional Monarchy", orgs: ["UN", "Commonwealth", "CARICOM"] },
  "km": { name: "Comoros", capital: "Moroni", pop: "850,000", curr: "Comorian Franc", lang: "Comorian, French, Arabic", cont: "Africa", sys: "Federal Presidential Republic", orgs: ["UN", "AU", "Arab League", "OIC"] },
  "lc": { name: "Saint Lucia", capital: "Castries", pop: "180,000", curr: "East Caribbean Dollar", lang: "English", cont: "North America", sys: "Parliamentary Constitutional Monarchy", orgs: ["UN", "Commonwealth", "CARICOM"] },
  "lr": { name: "Liberia", capital: "Monrovia", pop: "5.4 M", curr: "Liberian Dollar", lang: "English", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "ECOWAS"] },
  "ls": { name: "Lesotho", capital: "Maseru", pop: "2.3 M", curr: "Lesotho Loti", lang: "Sesotho, English", cont: "Africa", sys: "Parliamentary Constitutional Monarchy", orgs: ["UN", "AU", "Commonwealth", "SADC"] },
  "lt": { name: "Lithuania", capital: "Vilnius", pop: "2.8 M", curr: "Euro (EUR)", lang: "Lithuanian", cont: "Europe", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "EU", "NATO", "OECD"] },
  "lu": { name: "Luxembourg", capital: "Luxembourg City", pop: "660,000", curr: "Euro (EUR)", lang: "Luxembourgish, French, German", cont: "Europe", sys: "Unitary Parliamentary Constitutional Monarchy", orgs: ["UN", "EU", "NATO", "OECD"] },
  "lv": { name: "Latvia", capital: "Riga", pop: "1.8 M", curr: "Euro (EUR)", lang: "Latvian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO", "OECD"] },
  "ly": { name: "Libya", capital: "Tripoli", pop: "6.9 M", curr: "Libyan Dinar (LYD)", lang: "Arabic", cont: "Africa", sys: "Transitional Parliamentary Republic", orgs: ["UN", "OPEC", "AU", "Arab League", "OIC"] },
  "md": { name: "Moldova", capital: "Chișinău", pop: "2.5 M", curr: "Moldovan Leu", lang: "Romanian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "Council of Europe"] },
  "me": { name: "Montenegro", capital: "Podgorica", pop: "620,000", curr: "Euro (EUR)", lang: "Montenegrin", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "NATO"] },
  "mg": { name: "Madagascar", capital: "Antananarivo", pop: "30 M", curr: "Malagasy Ariary", lang: "Malagasy, French", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU", "SADC"] },
  "mk": { name: "North Macedonia", capital: "Skopje", pop: "1.8 M", curr: "Macedonian Denar", lang: "Macedonian, Albanian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "NATO"] },
  "ml": { name: "Mali", capital: "Bamako", pop: "23 M", curr: "West African CFA Franc", lang: "Bambara (National), French", cont: "Africa", sys: "Transitional Republic", orgs: ["UN", "AU", "OIC"] },
  "mr": { name: "Mauritania", capital: "Nouakchott", pop: "4.9 M", curr: "Mauritanian Ouguiya", lang: "Arabic", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU", "Arab League", "OIC"] },
  "mt": { name: "Malta", capital: "Valletta", pop: "530,000", curr: "Euro (EUR)", lang: "Maltese, English", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "Commonwealth"] },
  "mu": { name: "Mauritius", capital: "Port Louis", pop: "1.3 M", curr: "Mauritian Rupee", lang: "English, French", cont: "Africa", sys: "Unitary Parliamentary Republic", orgs: ["UN", "AU", "Commonwealth", "SADC"] },
  "mw": { name: "Malawi", capital: "Lilongwe", pop: "20.9 M", curr: "Malawian Kwacha", lang: "English, Chichewa", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "Commonwealth", "SADC"] },
  "mz": { name: "Mozambique", capital: "Maputo", pop: "33 M", curr: "Mozambican Metical", lang: "Portuguese", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU", "Commonwealth", "OIC", "SADC"] },
  "na": { name: "Namibia", capital: "Windhoek", pop: "2.6 M", curr: "Namibian Dollar", lang: "English", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU", "Commonwealth", "SADC"] },
  "nc": { name: "New Caledonia", capital: "Nouméa", pop: "270,000", curr: "CFP Franc", lang: "French", cont: "Oceania", sys: "French Special Collectivity", orgs: ["French Territory"] },
  "ne": { name: "Niger", capital: "Niamey", pop: "26 M", curr: "West African CFA Franc", lang: "Hausa, French", cont: "Africa", sys: "Transitional Republic", orgs: ["UN", "AU", "OIC"] },
  "ni": { name: "Nicaragua", capital: "Managua", pop: "7 M", curr: "Nicaraguan Córdoba", lang: "Spanish", cont: "North America", sys: "Unitary Presidential Republic", orgs: ["UN", "OAS"] },
  "pa": { name: "Panama", capital: "Panama City", pop: "4.4 M", curr: "Balboa & US Dollar", lang: "Spanish", cont: "North America", sys: "Unitary Presidential Republic", orgs: ["UN", "OAS"] },
  "pe": { name: "Peru", capital: "Lima", pop: "34 M", curr: "Peruvian Sol (PEN)", lang: "Spanish, Quechua", cont: "South America", sys: "Unitary Presidential Republic", orgs: ["UN", "Pacific Alliance", "APEC", "OAS"] },
  "pg": { name: "Papua New Guinea", capital: "Port Moresby", pop: "10 M", curr: "Papua New Guinean Kina", lang: "English, Tok Pisin", cont: "Oceania", sys: "Parliamentary Constitutional Monarchy", orgs: ["UN", "Commonwealth", "APEC"] },
  "pr": { name: "Puerto Rico", capital: "San Juan", pop: "3.2 M", curr: "US Dollar", lang: "Spanish, English", cont: "North America", sys: "US Commonwealth Territory", orgs: ["US Territory"] },
  "py": { name: "Paraguay", capital: "Asunción", pop: "6.8 M", curr: "Paraguayan Guaraní", lang: "Spanish, Guaraní", cont: "South America", sys: "Unitary Presidential Republic", orgs: ["UN", "Mercosur", "OAS"] },
  "ro": { name: "Romania", capital: "Bucharest", pop: "19 M", curr: "Romanian Leu (RON)", lang: "Romanian", cont: "Europe", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "EU", "NATO"] },
  "rs": { name: "Serbia", capital: "Belgrade", pop: "6.6 M", curr: "Serbian Dinar (RSD)", lang: "Serbian", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "OSCE"] },
  "rw": { name: "Rwanda", capital: "Kigali", pop: "14 M", curr: "Rwandan Franc", lang: "Kinyarwanda, French, English", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "EAC", "Commonwealth"] },
  "sb": { name: "Solomon Islands", capital: "Honiara", pop: "730,000", curr: "Solomon Islands Dollar", lang: "English", cont: "Oceania", sys: "Parliamentary Constitutional Monarchy", orgs: ["UN", "Commonwealth"] },
  "sc": { name: "Seychelles", capital: "Victoria", pop: "100,000", curr: "Seychellois Rupee", lang: "Seychellois Creole, English, French", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "Commonwealth"] },
  "sd": { name: "Sudan", capital: "Khartoum", pop: "48 M", curr: "Sudanese Pound", lang: "Arabic, English", cont: "Africa", sys: "Transitional Sovereign Council", orgs: ["UN", "AU", "Arab League", "OIC"] },
  "si": { name: "Slovenia", capital: "Ljubljana", pop: "2.1 M", curr: "Euro (EUR)", lang: "Slovene", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO", "OECD"] },
  "sk": { name: "Slovakia", capital: "Bratislava", pop: "5.4 M", curr: "Euro (EUR)", lang: "Slovak", cont: "Europe", sys: "Unitary Parliamentary Republic", orgs: ["UN", "EU", "NATO", "OECD"] },
  "sl": { name: "Sierra Leone", capital: "Freetown", pop: "8.8 M", curr: "Sierra Leonean Leone", lang: "English", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "ECOWAS", "OIC", "Commonwealth"] },
  "sn": { name: "Senegal", capital: "Dakar", pop: "17.7 M", curr: "West African CFA Franc", lang: "French, Wolof", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "ECOWAS", "OIC"] },
  "so": { name: "Somalia", capital: "Mogadishu", pop: "18 M", curr: "Somali Shilling", lang: "Somali, Arabic", cont: "Africa", sys: "Federal Parliamentary Republic", orgs: ["UN", "AU", "Arab League", "OIC", "EAC"] },
  "sr": { name: "Suriname", capital: "Paramaribo", pop: "620,000", curr: "Surinamese Dollar", lang: "Dutch", cont: "South America", sys: "Unitary Parliamentary Republic", orgs: ["UN", "CARICOM", "OIC", "OAS"] },
  "ss": { name: "South Sudan", capital: "Juba", pop: "11 M", curr: "South Sudanese Pound", lang: "English", cont: "Africa", sys: "Federal Presidential Republic", orgs: ["UN", "AU", "EAC"] },
  "st": { name: "São Tomé and Príncipe", capital: "São Tomé", pop: "230,000", curr: "São Tomé Dobra", lang: "Portuguese", cont: "Africa", sys: "Unitary Semi-Presidential Republic", orgs: ["UN", "AU"] },
  "sv": { name: "El Salvador", capital: "San Salvador", pop: "6.3 M", curr: "US Dollar & Bitcoin", lang: "Spanish", cont: "North America", sys: "Unitary Presidential Republic", orgs: ["UN", "OAS"] },
  "sz": { name: "Eswatini", capital: "Mbabane", pop: "1.2 M", curr: "Swazi Lilangeni", lang: "Swazi, English", cont: "Africa", sys: "Unitary Absolute Monarchy", orgs: ["UN", "AU", "Commonwealth", "SADC"] },
  "td": { name: "Chad", capital: "N'Djamena", pop: "18 M", curr: "Central African CFA Franc", lang: "French, Arabic", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "OIC"] },
  "tg": { name: "Togo", capital: "Lomé", pop: "9 M", curr: "West African CFA Franc", lang: "French", cont: "Africa", sys: "Unitary Parliamentary Republic", orgs: ["UN", "AU", "ECOWAS", "OIC", "Commonwealth"] },
  "tt": { name: "Trinidad and Tobago", capital: "Port of Spain", pop: "1.5 M", curr: "Trinidad and Tobago Dollar", lang: "English", cont: "North America", sys: "Unitary Parliamentary Republic", orgs: ["UN", "Commonwealth", "CARICOM"] },
  "tz": { name: "Tanzania", capital: "Dodoma", pop: "67 M", curr: "Tanzanian Shilling", lang: "Swahili, English", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "EAC", "SADC", "Commonwealth"] },
  "ug": { name: "Uganda", capital: "Kampala", pop: "48 M", curr: "Ugandan Shilling", lang: "English, Swahili", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "EAC", "OIC", "Commonwealth"] },
  "uy": { name: "Uruguay", capital: "Montevideo", pop: "3.4 M", curr: "Uruguayan Peso", lang: "Spanish", cont: "South America", sys: "Unitary Presidential Republic", orgs: ["UN", "Mercosur", "OAS"] },
  "vc": { name: "Saint Vincent and the Grenadines", capital: "Kingstown", pop: "104,000", curr: "East Caribbean Dollar", lang: "English", cont: "North America", sys: "Parliamentary Constitutional Monarchy", orgs: ["UN", "Commonwealth", "CARICOM"] },
  "vu": { name: "Vanuatu", capital: "Port Vila", pop: "330,000", curr: "Vanuatu Vatu", lang: "Bislama, English, French", cont: "Oceania", sys: "Unitary Parliamentary Republic", orgs: ["UN", "Commonwealth"] },
  "za": { name: "South Africa", capital: "Pretoria / Cape Town", pop: "62 M", curr: "South African Rand (ZAR)", lang: "12 Official Languages", cont: "Africa", sys: "Unitary Parliamentary Republic", orgs: ["UN", "BRICS", "G20", "AU", "Commonwealth", "SADC"] },
  "zm": { name: "Zambia", capital: "Lusaka", pop: "20 M", curr: "Zambian Kwacha", lang: "English", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "Commonwealth", "SADC"] },
  "zw": { name: "Zimbabwe", capital: "Harare", pop: "16 M", curr: "Zimbabwe Gold (ZiG) & USD", lang: "English, Shona, Ndebele", cont: "Africa", sys: "Unitary Presidential Republic", orgs: ["UN", "AU", "SADC"] }
};

// Merge all country data
const finalCountryData = {};

// 1. Process explicit rich countries first
Object.keys(rawCountries).forEach(k => {
  finalCountryData[k] = rawCountries[k];
});

// 2. Add remaining countries from isoNames
Object.keys(isoNames).forEach(k => {
  if (!finalCountryData[k]) {
    const item = isoNames[k];
    finalCountryData[k] = {
      name: item.name,
      officialName: item.name,
      flag: "🌐",
      continent: item.cont || "Global",
      region: item.cont || "Global",
      capital: item.capital || "N/A",
      currency: item.curr || "National Currency",
      population: item.pop || "N/A",
      officialLanguage: item.lang || "Official Language",
      politicalSystem: item.sys || "Constitutional State",
      headOfState: "Head of State / Chief Executive",
      neighbouringCountries: [],
      internationalOrgs: item.orgs || ["UN"],
      strategicSignificance: `${item.name} is an internationally recognized sovereign state situated in ${item.cont}.`,
      examHotspots: `Capital: ${item.capital}; Currency: ${item.curr}; Continent: ${item.cont}.`
    };
  }
});

// Ensure ALL 180 IDs in map are covered!
const s = fs.readFileSync('./frontend/img/world-map.svg', 'utf8');
const idMatches = [...s.matchAll(/<(path|g)\s+id="([a-zA-Z0-9_-]+)"/g)].map(m => m[2]).filter(id => id !== 'world-map');

idMatches.forEach(id => {
  if (!finalCountryData[id]) {
    const codeUpper = id.toUpperCase();
    finalCountryData[id] = {
      name: `Country (${codeUpper})`,
      officialName: `Territory of ${codeUpper}`,
      flag: "🌐",
      continent: "Global",
      region: "Global",
      capital: "Capital City",
      currency: "Standard Currency",
      population: "N/A",
      officialLanguage: "Official Language",
      politicalSystem: "Sovereign Territory",
      headOfState: "Head of Government",
      neighbouringCountries: [],
      internationalOrgs: ["UN"],
      strategicSignificance: `Geopolitical territory ${codeUpper}.`,
      examHotspots: `ISO code: ${codeUpper}.`
    };
  }
});

console.log('Total countries mapped:', Object.keys(finalCountryData).length);

// Write to frontend/js/data_world_countries.js
const outPath = path.join(__dirname, '../frontend/js/data_world_countries.js');
const fileContent = `/**
 * Comprehensive World Countries Dataset for Interactive World Map
 * Covers Capitals, Currencies, Populations, Languages, Political Systems,
 * Neighbours, and International Organizations.
 */
window.WORLD_COUNTRIES_DATA = ${JSON.stringify(finalCountryData, null, 2)};
`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log('Successfully generated frontend/js/data_world_countries.js!');
