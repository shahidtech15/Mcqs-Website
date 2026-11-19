/**
 * CSS PREP CENTRAL - INTERNATIONAL ORGANIZATIONS EXPLORER DATASET
 * Comprehensive Academic & Geospatial Dossier for CSS, PMS, FPSC & International Relations.
 * Covers: UN, NATO, EU, OIC, SCO, SAARC, ASEAN, BRICS, IMF, World Bank.
 * Up-to-date with 2024-2026 Geopolitical Realities.
 */

(function (global) {
  'use strict';

  // 1. Country Coordinates and Metadata Registry
  const COUNTRY_COORDINATES = {
    // South Asia
    "PK": { name: "Pakistan", lat: 30.3753, lng: 69.3451, flag: "🇵🇰", capital: "Islamabad", region: "South Asia" },
    "IN": { name: "India", lat: 20.5937, lng: 78.9629, flag: "🇮🇳", capital: "New Delhi", region: "South Asia" },
    "BD": { name: "Bangladesh", lat: 23.6850, lng: 90.3563, flag: "🇧🇩", capital: "Dhaka", region: "South Asia" },
    "AF": { name: "Afghanistan", lat: 33.9391, lng: 67.7100, flag: "🇦🇫", capital: "Kabul", region: "South Asia" },
    "LK": { name: "Sri Lanka", lat: 7.8731, lng: 80.7718, flag: "🇱🇰", capital: "Colombo / Sri Jayawardenepura", region: "South Asia" },
    "NP": { name: "Nepal", lat: 28.3949, lng: 84.1240, flag: "🇳🇵", capital: "Kathmandu", region: "South Asia" },
    "BT": { name: "Bhutan", lat: 27.5142, lng: 90.4336, flag: "🇧🇹", capital: "Thimphu", region: "South Asia" },
    "MV": { name: "Maldives", lat: 3.2028, lng: 73.2207, flag: "🇲🇻", capital: "Malé", region: "South Asia" },

    // East & Southeast Asia
    "CN": { name: "China", lat: 35.8617, lng: 104.1954, flag: "🇨🇳", capital: "Beijing", region: "East Asia" },
    "JP": { name: "Japan", lat: 36.2048, lng: 138.2529, flag: "🇯🇵", capital: "Tokyo", region: "East Asia" },
    "KR": { name: "South Korea", lat: 35.9078, lng: 127.7669, flag: "🇰🇷", capital: "Seoul", region: "East Asia" },
    "MN": { name: "Mongolia", lat: 46.8625, lng: 103.8467, flag: "🇲🇳", capital: "Ulaanbaatar", region: "East Asia" },
    "ID": { name: "Indonesia", lat: -0.7893, lng: 113.9213, flag: "🇮🇩", capital: "Jakarta / Nusantara", region: "Southeast Asia" },
    "MY": { name: "Malaysia", lat: 4.2105, lng: 101.9758, flag: "🇲🇾", capital: "Kuala Lumpur", region: "Southeast Asia" },
    "TH": { name: "Thailand", lat: 15.8700, lng: 100.9925, flag: "🇹🇭", capital: "Bangkok", region: "Southeast Asia" },
    "VN": { name: "Vietnam", lat: 14.0583, lng: 108.2772, flag: "🇻🇳", capital: "Hanoi", region: "Southeast Asia" },
    "PH": { name: "Philippines", lat: 12.8797, lng: 121.7740, flag: "🇵🇭", capital: "Manila", region: "Southeast Asia" },
    "SG": { name: "Singapore", lat: 1.3521, lng: 103.8198, flag: "🇸🇬", capital: "Singapore", region: "Southeast Asia" },
    "MM": { name: "Myanmar", lat: 21.9162, lng: 95.9560, flag: "🇲🇲", capital: "Naypyidaw", region: "Southeast Asia" },
    "KH": { name: "Cambodia", lat: 12.5657, lng: 104.9910, flag: "🇰🇭", capital: "Phnom Penh", region: "Southeast Asia" },
    "LA": { name: "Laos", lat: 19.8563, lng: 102.4955, flag: "🇱🇦", capital: "Vientiane", region: "Southeast Asia" },
    "BN": { name: "Brunei", lat: 4.5353, lng: 114.7277, flag: "🇧🇳", capital: "Bandar Seri Begawan", region: "Southeast Asia" },
    "TL": { name: "Timor-Leste", lat: -8.8742, lng: 125.7275, flag: "🇹🇱", capital: "Dili", region: "Southeast Asia" },

    // Central Asia & Eurasia
    "RU": { name: "Russia", lat: 61.5240, lng: 105.3188, flag: "🇷🇺", capital: "Moscow", region: "Eurasia" },
    "KZ": { name: "Kazakhstan", lat: 48.0196, lng: 66.9237, flag: "🇰🇿", capital: "Astana", region: "Central Asia" },
    "UZ": { name: "Uzbekistan", lat: 41.3775, lng: 64.5853, flag: "🇺🇿", capital: "Tashkent", region: "Central Asia" },
    "KG": { name: "Kyrgyzstan", lat: 41.2044, lng: 74.7661, flag: "🇰🇬", capital: "Bishkek", region: "Central Asia" },
    "TJ": { name: "Tajikistan", lat: 38.8610, lng: 71.2761, flag: "🇹🇯", capital: "Dushanbe", region: "Central Asia" },
    "TM": { name: "Turkmenistan", lat: 38.9697, lng: 59.5563, flag: "🇹🇲", capital: "Ashgabat", region: "Central Asia" },
    "BY": { name: "Belarus", lat: 53.7098, lng: 27.9534, flag: "🇧🇾", capital: "Minsk", region: "Eastern Europe" },
    "AZ": { name: "Azerbaijan", lat: 40.1431, lng: 47.5769, flag: "🇦🇿", capital: "Baku", region: "Caucasus" },
    "AM": { name: "Armenia", lat: 40.0691, lng: 45.0382, flag: "🇦🇲", capital: "Yerevan", region: "Caucasus" },
    "GE": { name: "Georgia", lat: 42.3154, lng: 43.3569, flag: "🇬🇪", capital: "Tbilisi", region: "Caucasus" },

    // Middle East & North Africa
    "IR": { name: "Iran", lat: 32.4279, lng: 53.6880, flag: "🇮🇷", capital: "Tehran", region: "Middle East" },
    "TR": { name: "Turkey", lat: 38.9637, lng: 35.2433, flag: "🇹🇷", capital: "Ankara", region: "Middle East / Eurasia" },
    "SA": { name: "Saudi Arabia", lat: 23.8859, lng: 45.0792, flag: "🇸🇦", capital: "Riyadh", region: "Middle East" },
    "AE": { name: "United Arab Emirates", lat: 23.4241, lng: 53.8478, flag: "🇦🇪", capital: "Abu Dhabi", region: "Middle East" },
    "QA": { name: "Qatar", lat: 25.3548, lng: 51.1839, flag: "🇶🇦", capital: "Doha", region: "Middle East" },
    "KW": { name: "Kuwait", lat: 29.3117, lng: 47.4818, flag: "🇰🇼", capital: "Kuwait City", region: "Middle East" },
    "OM": { name: "Oman", lat: 21.4735, lng: 55.9754, flag: "🇴🇲", capital: "Muscat", region: "Middle East" },
    "BH": { name: "Bahrain", lat: 26.0667, lng: 50.5577, flag: "🇧🇭", capital: "Manama", region: "Middle East" },
    "IQ": { name: "Iraq", lat: 33.2232, lng: 43.6793, flag: "🇮🇶", capital: "Baghdad", region: "Middle East" },
    "SY": { name: "Syria", lat: 34.8021, lng: 38.9968, flag: "🇸🇾", capital: "Damascus", region: "Middle East" },
    "JO": { name: "Jordan", lat: 30.5852, lng: 36.2384, flag: "🇯🇴", capital: "Amman", region: "Middle East" },
    "LB": { name: "Lebanon", lat: 33.8547, lng: 35.8623, flag: "🇱🇧", capital: "Beirut", region: "Middle East" },
    "PS": { name: "Palestine", lat: 31.9522, lng: 35.2332, flag: "🇵🇸", capital: "Ramallah / East Jerusalem", region: "Middle East" },
    "YE": { name: "Yemen", lat: 15.5527, lng: 48.5164, flag: "🇾🇪", capital: "Sana'a / Aden", region: "Middle East" },
    "EG": { name: "Egypt", lat: 26.8206, lng: 30.8025, flag: "🇪🇬", capital: "Cairo", region: "North Africa" },
    "LY": { name: "Libya", lat: 26.3351, lng: 17.2283, flag: "🇱🇾", capital: "Tripoli", region: "North Africa" },
    "TN": { name: "Tunisia", lat: 33.8869, lng: 9.5375, flag: "🇹🇳", capital: "Tunis", region: "North Africa" },
    "DZ": { name: "Algeria", lat: 28.0339, lng: 1.6596, flag: "🇩🇿", capital: "Algiers", region: "North Africa" },
    "MA": { name: "Morocco", lat: 31.7917, lng: -7.0926, flag: "🇲🇦", capital: "Rabat", region: "North Africa" },
    "SD": { name: "Sudan", lat: 12.8628, lng: 30.2176, flag: "🇸🇩", capital: "Khartoum", region: "North Africa" },

    // Europe & Transatlantic
    "US": { name: "United States", lat: 37.0902, lng: -95.7129, flag: "🇺🇸", capital: "Washington, D.C.", region: "North America" },
    "CA": { name: "Canada", lat: 56.1304, lng: -106.3468, flag: "🇨🇦", capital: "Ottawa", region: "North America" },
    "GB": { name: "United Kingdom", lat: 55.3781, lng: -3.4360, flag: "🇬🇧", capital: "London", region: "Western Europe" },
    "FR": { name: "France", lat: 46.2276, lng: 2.2137, flag: "🇫🇷", capital: "Paris", region: "Western Europe" },
    "DE": { name: "Germany", lat: 51.1657, lng: 10.4515, flag: "🇩🇪", capital: "Berlin", region: "Western Europe" },
    "IT": { name: "Italy", lat: 41.8719, lng: 12.5674, flag: "🇮🇹", capital: "Rome", region: "Southern Europe" },
    "ES": { name: "Spain", lat: 40.4637, lng: -3.7492, flag: "🇪🇸", capital: "Madrid", region: "Southern Europe" },
    "PT": { name: "Portugal", lat: 39.3999, lng: -8.2245, flag: "🇵🇹", capital: "Lisbon", region: "Southern Europe" },
    "NL": { name: "Netherlands", lat: 52.1326, lng: 5.2913, flag: "🇳🇱", capital: "Amsterdam / The Hague", region: "Western Europe" },
    "BE": { name: "Belgium", lat: 50.5039, lng: 4.4699, flag: "🇧🇪", capital: "Brussels", region: "Western Europe" },
    "LU": { name: "Luxembourg", lat: 49.8153, lng: 6.1296, flag: "🇱🇺", capital: "Luxembourg City", region: "Western Europe" },
    "CH": { name: "Switzerland", lat: 46.8182, lng: 8.2275, flag: "🇨🇭", capital: "Bern", region: "Western Europe" },
    "AT": { name: "Austria", lat: 47.5162, lng: 14.5501, flag: "🇦🇹", capital: "Vienna", region: "Central Europe" },
    "SE": { name: "Sweden", lat: 60.1282, lng: 18.6435, flag: "🇸🇪", capital: "Stockholm", region: "Northern Europe" },
    "NO": { name: "Norway", lat: 60.4720, lng: 8.4689, flag: "🇳🇴", capital: "Oslo", region: "Northern Europe" },
    "DK": { name: "Denmark", lat: 56.2639, lng: 9.5018, flag: "🇩🇰", capital: "Copenhagen", region: "Northern Europe" },
    "FI": { name: "Finland", lat: 61.9241, lng: 25.7482, flag: "🇫🇮", capital: "Helsinki", region: "Northern Europe" },
    "IS": { name: "Iceland", lat: 64.9631, lng: -19.0208, flag: "🇮🇸", capital: "Reykjavik", region: "Northern Europe" },
    "IE": { name: "Ireland", lat: 53.1424, lng: -7.6921, flag: "🇮🇪", capital: "Dublin", region: "Western Europe" },
    "PL": { name: "Poland", lat: 51.9194, lng: 19.1451, flag: "🇵🇱", capital: "Warsaw", region: "Central Europe" },
    "CZ": { name: "Czech Republic", lat: 49.8175, lng: 15.4730, flag: "🇨🇿", capital: "Prague", region: "Central Europe" },
    "SK": { name: "Slovakia", lat: 48.6690, lng: 19.6990, flag: "🇸🇰", capital: "Bratislava", region: "Central Europe" },
    "HU": { name: "Hungary", lat: 47.1625, lng: 19.5033, flag: "🇭🇺", capital: "Budapest", region: "Central Europe" },
    "RO": { name: "Romania", lat: 45.9432, lng: 24.9668, flag: "🇷🇴", capital: "Bucharest", region: "Eastern Europe" },
    "BG": { name: "Bulgaria", lat: 42.7339, lng: 25.4858, flag: "🇧🇬", capital: "Sofia", region: "Eastern Europe" },
    "GR": { name: "Greece", lat: 39.0742, lng: 21.8243, flag: "🇬🇷", capital: "Athens", region: "Southern Europe" },
    "EE": { name: "Estonia", lat: 58.5953, lng: 25.0136, flag: "🇪🇪", capital: "Tallinn", region: "Baltic" },
    "LV": { name: "Latvia", lat: 56.8796, lng: 24.6032, flag: "🇱🇻", capital: "Riga", region: "Baltic" },
    "LT": { name: "Lithuania", lat: 55.1694, lng: 23.8813, flag: "🇱🇹", capital: "Vilnius", region: "Baltic" },
    "HR": { name: "Croatia", lat: 45.1000, lng: 15.2000, flag: "🇭🇷", capital: "Zagreb", region: "Southern Europe" },
    "SI": { name: "Slovenia", lat: 46.1512, lng: 14.9955, flag: "🇸🇮", capital: "Ljubljana", region: "Central Europe" },
    "AL": { name: "Albania", lat: 41.1533, lng: 20.1683, flag: "🇦🇱", capital: "Tirana", region: "Southern Europe" },
    "ME": { name: "Montenegro", lat: 42.7087, lng: 19.3744, flag: "🇲🇪", capital: "Podgorica", region: "Southern Europe" },
    "MK": { name: "North Macedonia", lat: 41.6086, lng: 21.7453, flag: "🇲🇰", capital: "Skopje", region: "Southern Europe" },
    "CY": { name: "Cyprus", lat: 35.1264, lng: 33.4299, flag: "🇨🇾", capital: "Nicosia", region: "Southern Europe" },
    "MT": { name: "Malta", lat: 35.9375, lng: 14.3754, flag: "🇲🇹", capital: "Valletta", region: "Southern Europe" },
    "UA": { name: "Ukraine", lat: 48.3794, lng: 31.1656, flag: "🇺🇦", capital: "Kyiv", region: "Eastern Europe" },
    "MD": { name: "Moldova", lat: 47.4116, lng: 28.3699, flag: "🇲🇩", capital: "Chisinau", region: "Eastern Europe" },
    "VA": { name: "Holy See (Vatican City)", lat: 41.9029, lng: 12.4534, flag: "🇻🇦", capital: "Vatican City", region: "Southern Europe" },

    // Sub-Saharan Africa
    "ZA": { name: "South Africa", lat: -30.5595, lng: 22.9375, flag: "🇿🇦", capital: "Pretoria / Cape Town", region: "Southern Africa" },
    "NG": { name: "Nigeria", lat: 9.0820, lng: 8.6753, flag: "🇳🇬", capital: "Abuja", region: "West Africa" },
    "ET": { name: "Ethiopia", lat: 9.1450, lng: 40.4897, flag: "🇪🇹", capital: "Addis Ababa", region: "East Africa" },
    "KE": { name: "Kenya", lat: -0.0236, lng: 37.9062, flag: "🇰🇪", capital: "Nairobi", region: "East Africa" },
    "GH": { name: "Ghana", lat: 7.9465, lng: -1.0232, flag: "🇬🇭", capital: "Accra", region: "West Africa" },
    "SN": { name: "Senegal", lat: 14.4974, lng: -14.4524, flag: "🇸🇳", capital: "Dakar", region: "West Africa" },
    "SO": { name: "Somalia", lat: 5.1521, lng: 46.1996, flag: "🇸🇴", capital: "Mogadishu", region: "East Africa" },
    "DJ": { name: "Djibouti", lat: 11.8251, lng: 42.5903, flag: "🇩🇯", capital: "Djibouti", region: "East Africa" },
    "UG": { name: "Uganda", lat: 1.3733, lng: 32.2903, flag: "🇺🇬", capital: "Kampala", region: "East Africa" },
    "TZ": { name: "Tanzania", lat: -6.3690, lng: 34.8888, flag: "🇹🇿", capital: "Dodoma", region: "East Africa" },
    "CI": { name: "Ivory Coast", lat: 7.5400, lng: -5.5471, flag: "🇨🇮", capital: "Yamoussoukro", region: "West Africa" },
    "ML": { name: "Mali", lat: 17.5707, lng: -3.9962, flag: "🇲🇱", capital: "Bamako", region: "West Africa" },
    "NE": { name: "Niger", lat: 17.6078, lng: 8.0817, flag: "🇳🇪", capital: "Niamey", region: "West Africa" },
    "TD": { name: "Chad", lat: 15.4542, lng: 18.7322, flag: "🇹🇩", capital: "N'Djamena", region: "Central Africa" },
    "MR": { name: "Mauritania", lat: 21.0079, lng: -10.9408, flag: "🇲🇷", capital: "Nouakchott", region: "West Africa" },
    "GM": { name: "Gambia", lat: 13.4432, lng: -15.3101, flag: "🇬🇲", capital: "Banjul", region: "West Africa" },
    "GN": { name: "Guinea", lat: 9.9456, lng: -9.6966, flag: "🇬🇳", capital: "Conakry", region: "West Africa" },
    "SL": { name: "Sierra Leone", lat: 8.4606, lng: -11.7799, flag: "🇸🇱", capital: "Freetown", region: "West Africa" },
    "BF": { name: "Burkina Faso", lat: 12.2383, lng: -1.5616, flag: "🇧🇫", capital: "Ouagadougou", region: "West Africa" },
    "BJ": { name: "Benin", lat: 9.3077, lng: 2.3158, flag: "🇧🇯", capital: "Porto-Novo", region: "West Africa" },
    "TG": { name: "Togo", lat: 8.6195, lng: 0.8248, flag: "🇹🇬", capital: "Lomé", region: "West Africa" },
    "CM": { name: "Cameroon", lat: 7.3697, lng: 12.3547, flag: "🇨🇲", capital: "Yaoundé", region: "Central Africa" },
    "GA": { name: "Gabon", lat: -0.8037, lng: 11.6094, flag: "🇬🇦", capital: "Libreville", region: "Central Africa" },
    "MZ": { name: "Mozambique", lat: -18.6657, lng: 35.5296, flag: "🇲🇿", capital: "Maputo", region: "Southern Africa" },

    // Americas & Oceania
    "BR": { name: "Brazil", lat: -14.2350, lng: -51.9253, flag: "🇧🇷", capital: "Brasília", region: "South America" },
    "AR": { name: "Argentina", lat: -38.4161, lng: -63.6167, flag: "🇦🇷", capital: "Buenos Aires", region: "South America" },
    "MX": { name: "Mexico", lat: 23.6345, lng: -102.5528, flag: "🇲🇽", capital: "Mexico City", region: "North America" },
    "CL": { name: "Chile", lat: -35.6751, lng: -71.5430, flag: "🇨🇱", capital: "Santiago", region: "South America" },
    "CO": { name: "Colombia", lat: 4.5709, lng: -74.2973, flag: "🇨🇴", capital: "Bogotá", region: "South America" },
    "PE": { name: "Peru", lat: -9.1900, lng: -75.0152, flag: "🇵🇪", capital: "Lima", region: "South America" },
    "VE": { name: "Venezuela", lat: 6.4238, lng: -66.5897, flag: "🇻🇪", capital: "Caracas", region: "South America" },
    "CU": { name: "Cuba", lat: 21.5218, lng: -77.7812, flag: "🇨🇺", capital: "Havana", region: "Caribbean" },
    "AU": { name: "Australia", lat: -25.2744, lng: 133.7751, flag: "🇦🇺", capital: "Canberra", region: "Oceania" },
    "NZ": { name: "New Zealand", lat: -40.9006, lng: 174.8860, flag: "🇳🇿", capital: "Wellington", region: "Oceania" },
    "GY": { name: "Guyana", lat: 4.8604, lng: -58.9302, flag: "🇬🇾", capital: "Georgetown", region: "South America" },
    "SR": { name: "Suriname", lat: 3.9193, lng: -56.0278, flag: "🇸🇷", capital: "Paramaribo", region: "South America" }
  };

  // 2. The 10 Target Organizations
  const ORGANIZATIONS = [
    {
      id: "un",
      name: "United Nations",
      shortName: "UN",
      badge: "Universal Multilateral Body",
      icon: "fa-globe",
      colorTheme: "#009EDB",
      bannerGradient: "linear-gradient(135deg, #004990 0%, #009EDB 100%)",
      motto: "Peace, dignity and equality on a healthy planet",
      founded: "24 October 1945",
      foundingPlace: "San Francisco, United States",
      foundingTreaty: "Charter of the United Nations (Signed June 26, 1945; entered into force October 24, 1945)",
      headquarters: {
        city: "New York City",
        country: "United States",
        offices: ["Geneva (Switzerland)", "Vienna (Austria)", "Nairobi (Kenya)"],
        lat: 40.7499,
        lng: -73.9674
      },
      leadership: {
        title: "Secretary-General",
        name: "António Guterres",
        nationality: "Portugal",
        term: "2017 – Present (Reappointed for second term 2022–2026)"
      },
      officialLanguages: ["Arabic", "Chinese", "English", "French", "Russian", "Spanish"],
      stats: {
        membersCount: 193,
        observersCount: 2,
        partnersCount: 0,
        coverageText: "193 Sovereign Member States + 2 Permanent Observer States (Holy See, Palestine)",
        budget: "Annual Regular Budget ~$3.6 Billion + Peacekeeping Budget ~$6.1 Billion"
      },
      organs: [
        {
          name: "General Assembly (UNGA)",
          icon: "fa-users-line",
          role: "Main deliberative, policymaking and representative organ",
          detail: "All 193 member states have equal vote ('one state, one vote'). Meets annually in September under rotating presidency. Adopts resolutions on peace, budget, and admissions."
        },
        {
          name: "Security Council (UNSC)",
          icon: "fa-scale-balanced",
          role: "Primary organ responsible for international peace and security",
          detail: "15 members: 5 Permanent with veto power (US, UK, France, Russia, China) + 10 non-permanent elected for 2-year terms. Chapter VII resolutions are legally binding."
        },
        {
          name: "Economic and Social Council (ECOSOC)",
          icon: "fa-chart-pie",
          role: "Coordination of economic, social, environmental and development affairs",
          detail: "54 member states elected by UNGA for 3-year terms. Coordinates 15 specialized agencies, functional commissions, and regional commissions."
        },
        {
          name: "International Court of Justice (ICJ)",
          icon: "fa-gavel",
          role: "Principal judicial organ of the United Nations ('World Court')",
          detail: "Located at Peace Palace, The Hague, Netherlands. 15 judges elected for 9-year terms. Settles legal disputes between sovereign states and gives advisory opinions."
        },
        {
          name: "UN Secretariat",
          icon: "fa-building-columns",
          role: "Executive and administrative arm of the United Nations",
          detail: "Headed by Secretary-General António Guterres and tens of thousands of international civil servants carrying out peacekeeping, mediation, and administrative tasks."
        },
        {
          name: "Trusteeship Council",
          icon: "fa-hand-holding-hand",
          role: "Supervision of Trust Territories transitioning to self-determination",
          detail: "Suspended operations on 1 November 1994 following independence of Palau (the last remaining trust territory). Now meets only as required."
        }
      ],
      mandates: [
        "Maintain international peace and security through collective security and conflict resolution (Chapters VI & VII).",
        "Develop friendly relations among nations based on respect for self-determination and sovereign equality.",
        "Achieve international co-operation in solving economic, social, cultural, and humanitarian challenges.",
        "Serve as the world's primary normative forum for human rights, Sustainable Development Goals (SDGs 2030), and international law."
      ],
      pakistanRole: {
        status: "Full Member State & Top Peacekeeping Contributor",
        joinedDate: "30 September 1947",
        voteContext: "Joined UN weeks after independence. Afghanistan was the sole dissenting vote over the Durand Line (later withdrawn).",
        tenuresUNSC: "Elected 8 times as Non-Permanent UNSC Member: 1952–53, 1968–69, 1976–77, 1983–84, 1993–94, 2003–04, 2012–13, and 2025–2026 (elected in June 2024 with 182 votes).",
        peacekeepingRecord: "Consistently ranked among the top UN Troop Contributing Countries (TCC); deployed over 200,000 troops across 46 missions in 28 countries since 1960.",
        historicMilestones: [
          { year: "1948", title: "UNSCR 47 (Kashmir Plebiscite)", desc: "UN Security Council mandated an impartial plebiscite to determine Jammu & Kashmir's accession to Pakistan or India." },
          { year: "1962", title: "Sir Zafarullah Khan UNGA Presidency", desc: "Sir Muhammad Zafarullah Khan elected President of the 17th UN General Assembly; later served as President of the ICJ (1970–1973)." },
          { year: "1974", title: "Nuclear-Weapon-Free Zone South Asia", desc: "Pakistan sponsored landmark UNGA resolutions advocating for a NWFZ in South Asia and negative security assurances." },
          { year: "2020", title: "ECOSOC Presidency", desc: "Ambassador Munir Akram elected President of ECOSOC, prioritizing debt relief and COVID-19 vaccine equity for developing nations." },
          { year: "2022", title: "Resolution on Islamophobia", desc: "Pakistan spearheaded unanimous UNGA adoption of Resolution 76/254 declaring March 15 as International Day to Combat Islamophobia." },
          { year: "2024", title: "UNSC Election for 2025-26", desc: "Pakistan elected to the UN Security Council for an eighth term with an overwhelming 182 votes in the 193-member General Assembly." }
        ],
        strategicFootprint: "Pakistan utilizes the UN as its paramount legal arena to uphold the right of self-determination under UN Charter Article 1 and enforce UNSC resolutions on Jammu & Kashmir. Pakistan leads the 'Uniting for Consensus' (UfC) coffee club coalition opposing expansion of permanent seats (G4: India, Germany, Japan, Brazil), advocating instead for expanded elected non-permanent seats."
      },
      examThemes: {
        syllabusTopics: [
          "UN Security Council Veto dynamics and Chapter VII enforcement limitations",
          "Kashmir dispute in light of UNSC Resolutions 38, 39, 47, and 91",
          "UN Reform Debate: G4 aspirations vs Uniting for Consensus (UfC) coalition led by Italy & Pakistan",
          "Peacekeeping vs Peace Enforcement: Evolution from classical Hammarskjöld principles to robust mandates",
          "Sustainable Development Goals (SDGs 2030) and Climate Diplomacy (COP/Loss & Damage)"
        ],
        pastQuestions: [
          "Critically evaluate the structural and operational paralysis of the UN Security Council due to the P5 veto power. (CSS IR 2021)",
          "Discuss Pakistan's historic contributions to UN peacekeeping and analyze its strategy as an elected member of the UNSC for 2025-2026. (CSS Current Affairs 2025)",
          "Examine the legal status of UN Security Council resolutions on Kashmir under Chapter VI and Chapter VII of the UN Charter. (CSS International Law 2022)"
        ],
        theoreticalLenses: [
          { theory: "Liberal Institutionalism", application: "The UN provides an institutionalized architecture mitigating anarchy, reducing transaction costs, and creating legal norms." },
          { theory: "Structural Realism", application: "The P5 veto mirrors great power distribution; the UN is effective only when major power interests converge." },
          { theory: "Post-Colonial / Global South Critique", application: "The UN's 1945 structural hierarchy locks in victors' justice, marginalizing Africa and the Islamic world." }
        ]
      },
      members: [
        { code: "PK", status: "full", year: 1947, note: "Elected 8 times to UNSC; 2025-26 seat" },
        { code: "US", status: "full", year: 1945, note: "P5 Permanent Member, Host Nation" },
        { code: "CN", status: "full", year: 1945, note: "P5 Permanent Member (PRC recognized 1971)" },
        { code: "RU", status: "full", year: 1945, note: "P5 Permanent Member (Soviet successor 1991)" },
        { code: "GB", status: "full", year: 1945, note: "P5 Permanent Member" },
        { code: "FR", status: "full", year: 1945, note: "P5 Permanent Member" },
        { code: "IN", status: "full", year: 1945, note: "Founding member (British India)" },
        { code: "SA", status: "full", year: 1945, note: "Founding member" },
        { code: "TR", status: "full", year: 1945, note: "Founding member" },
        { code: "IR", status: "full", year: 1945, note: "Founding member" },
        { code: "EG", status: "full", year: 1945, note: "Founding member" },
        { code: "ID", status: "full", year: 1950, note: "Withdrew 1965, rejoined 1966" },
        { code: "DE", status: "full", year: 1973, note: "Unified 1990; G4 aspirant" },
        { code: "JP", status: "full", year: 1956, note: "G4 aspirant" },
        { code: "BR", status: "full", year: 1945, note: "Founding member; G4 aspirant" },
        { code: "ZA", status: "full", year: 1945, note: "Excluded from GA 1974-94 over Apartheid" },
        { code: "AF", status: "full", year: 1946, note: "Dissenting vote on PK admission in 1947" },
        { code: "BD", status: "full", year: 1974, note: "Admitted after 1974 Lahore OIC reconciliation" },
        { code: "VA", status: "observer", year: 1964, note: "Permanent Observer State (Holy See)" },
        { code: "PS", status: "observer", year: 2012, note: "Non-member Observer State (UNGA Res 67/19)" }
      ],
      mcqs: [
        {
          q: "On which date did Pakistan officially become a member state of the United Nations?",
          options: ["August 14, 1947", "September 30, 1947", "October 24, 1947", "January 1, 1948"],
          correct: 1,
          explanation: "Pakistan was admitted to the UN on September 30, 1947 during the 2nd session of the UN General Assembly. Afghanistan initially voted against admission over territorial claims."
        },
        {
          q: "How many times has Pakistan been elected as a non-permanent member of the UN Security Council?",
          options: ["5 times", "6 times", "7 times", "8 times"],
          correct: 3,
          explanation: "Pakistan has been elected 8 times: 1952-53, 1968-69, 1976-77, 1983-84, 1993-94, 2003-04, 2012-13, and June 2024 for the 2025-2026 term."
        },
        {
          q: "Which Pakistani diplomat was elected President of the UN General Assembly in 1962 and later served as President of the ICJ?",
          options: ["Agha Shahi", "Sir Muhammad Zafarullah Khan", "Munir Akram", "Syed Sharifuddin Pirzada"],
          correct: 1,
          explanation: "Sir Muhammad Zafarullah Khan served as President of the 17th UNGA session in 1962 and later served as President of the International Court of Justice (ICJ) from 1970 to 1973."
        },
        {
          q: "Under which Chapter of the UN Charter are Security Council resolutions legally binding upon all member states?",
          options: ["Chapter V", "Chapter VI", "Chapter VII", "Chapter VIII"],
          correct: 2,
          explanation: "Chapter VII ('Action with Respect to Threats to the Peace, Breaches of the Peace, and Acts of Aggression') empowers the Security Council to impose sanctions or authorize military force."
        },
        {
          q: "Which international coalition, co-led by Italy and Pakistan, opposes adding new permanent members to the UN Security Council?",
          options: ["The G4 Coalition", "Uniting for Consensus (UfC / Coffee Club)", "Non-Aligned Movement", "The BRICS Alliance"],
          correct: 1,
          explanation: "The Uniting for Consensus (UfC) group, popularly known as the Coffee Club, advocates for expanding non-permanent, democratically elected seats rather than conferring veto privileges."
        }
      ]
    },

    {
      id: "nato",
      name: "North Atlantic Treaty Organization",
      shortName: "NATO",
      badge: "Transatlantic Military Alliance",
      icon: "fa-shield-halved",
      colorTheme: "#004990",
      bannerGradient: "linear-gradient(135deg, #001f3f 0%, #004990 100%)",
      motto: "Animus in consulendo liber (A mind unfettered in deliberation)",
      founded: "4 April 1949",
      foundingPlace: "Washington, D.C., United States",
      foundingTreaty: "North Atlantic Treaty (Washington Treaty)",
      headquarters: {
        city: "Brussels",
        country: "Belgium",
        offices: ["SHAPE - Supreme Headquarters Allied Powers Europe (Mons, Belgium)"],
        lat: 50.8785,
        lng: 4.4262
      },
      leadership: {
        title: "Secretary General",
        name: "Mark Rutte",
        nationality: "Netherlands",
        term: "Assumed office 1 October 2024 (Succeeded Jens Stoltenberg)"
      },
      officialLanguages: ["English", "French"],
      stats: {
        membersCount: 32,
        observersCount: 0,
        partnersCount: 40,
        coverageText: "32 Sovereign Allies across North America and Europe",
        budget: "Direct civil & military budget ~$4 Billion; Combined allied defense spending >$1.3 Trillion"
      },
      organs: [
        {
          name: "North Atlantic Council (NAC)",
          icon: "fa-users-rectangle",
          role: "Principal political decision-making body of NATO",
          detail: "Composed of Permanent Representatives (Ambassadors) of all 32 allies. Chaired by the Secretary General. Decisions taken by consensus."
        },
        {
          name: "Military Committee (MC)",
          icon: "fa-person-rifle",
          role: "Senior military authority advising the NAC on defense policy",
          detail: "Composed of Chiefs of Defense of all member states. Formulates military strategy and guides the Strategic Commanders."
        },
        {
          name: "Allied Command Operations (ACO / SHAPE)",
          icon: "fa-jet-fighter",
          role: "Operational command responsible for planning and executing military missions",
          detail: "Headquartered at SHAPE in Mons, Belgium. Commanded by SACEUR (Supreme Allied Commander Europe), traditionally a US 4-star General/Admiral."
        },
        {
          name: "Allied Command Transformation (ACT)",
          icon: "fa-microchip",
          role: "Strategic command leading transformation of alliance military capabilities",
          detail: "Headquartered in Norfolk, Virginia, USA. Focuses on future warfare, doctrine, AI integration, cyber defense, and interoperability."
        }
      ],
      mandates: [
        "Collective Defense under Article 5: An armed attack against one or more allies is considered an attack against all.",
        "Crisis Management: Out-of-area operations (e.g. Balkans IFOR/SFOR, Afghanistan ISAF, Libya Unified Protector).",
        "Cooperative Security: Partnerships with non-member states across Euro-Atlantic, Mediterranean, and Indo-Pacific.",
        "Strategic Deterrence: Conventional, nuclear, cyber, and space domain deterrence along NATO's eastern flank."
      ],
      pakistanRole: {
        status: "Major Non-NATO Ally (MNNA) & Strategic Logistics Partner",
        joinedDate: "Designated MNNA in June 2004",
        voteContext: "Pakistan is outside NATO's geographic zone (Article 10 restricts membership to European states), but became a frontline partner during the Global War on Terrorism (GWOT).",
        tenuresUNSC: "N/A (Bilateral Security Partnership)",
        peacekeepingRecord: "Facilitated over 70% of NATO/ISAF fuel, food, and military cargo through Pakistani ports and highways (GLOC/ALOC).",
        historicMilestones: [
          { year: "2004", title: "MNNA Designation", desc: "US President George W. Bush designated Pakistan as a Major Non-NATO Ally, facilitating defense equipment access and R&D cooperation." },
          { year: "2005", title: "NATO Earthquake Relief Mission", desc: "NATO mounted its first-ever humanitarian airlift to Pakistan following the devastating October 2005 Kashmir earthquake, flying 168 relief sorties." },
          { year: "2001-2014", title: "ISAF GLOC Lifeline", desc: "Karachi-to-Torkham and Karachi-to-Chaman Ground Lines of Communication (GLOCs) provided indispensable logistics for NATO forces in Afghanistan." },
          { year: "2011", title: "Salala Checkpost Incident", desc: "NATO airstrike killed 24 Pakistani soldiers at Salala posts, triggering a 7-month blockade of NATO supply lines until a formal US apology." },
          { year: "2021", title: "Kabul Evacuation Operation", desc: "Pakistan military and civil aviation facilitated the evacuation of thousands of NATO diplomats, citizens, and vulnerable Afghans after Taliban takeover." }
        ],
        strategicFootprint: "Pakistan's engagement with NATO has evolved from tactical logistical interdependence during the Afghan War to high-level strategic dialogues on counter-terrorism, border management, and maritime security in the Arabian Sea (Operation Ocean Shield collaboration). However, Pakistan maintains strategic autonomy, rejecting bloc politics amidst NATO's growing rivalry with China and Russia."
      },
      examThemes: {
        syllabusTopics: [
          "Article 5 Collective Defense: Historical invocation post-9/11 and contemporary relevance in Eastern Europe",
          "NATO Expansion: Accession of Finland (2023) and Sweden (2024), transforming Baltic Sea geopolitics",
          "NATO Strategic Concept 2022: Designation of Russia as 'most significant threat' and China as 'systemic challenge'",
          "The 2% GDP Defense Spending Guideline and Transatlantic burden-sharing debate",
          "Pakistan-NATO relations: Strategic utility of MNNA status vs domestic sovereignty concerns"
        ],
        pastQuestions: [
          "Analyze the geopolitical implications of NATO's Nordic expansion (Finland and Sweden) for Eurasian strategic stability. (CSS IR 2024)",
          "Evaluate Pakistan's role as a Major Non-NATO Ally (MNNA) and its strategic impact on Pakistan-US bilateral relations. (CSS Current Affairs 2023)",
          "Examine whether NATO's transition from a defensive alliance to a global security actor contradicts its founding charter. (CSS IR 2022)"
        ],
        theoreticalLenses: [
          { theory: "Realism / Balance of Threat", application: "NATO was established to balance Soviet hegemony ('keep the Soviet Union out, the Americans in, and the Germans down' - Lord Ismay)." },
          { theory: "Liberal Intergovernmentalism", application: "NATO creates high institutional credibility, common operational doctrines, and transparent burden-sharing." },
          { theory: "Constructivism", application: "NATO represents a 'security community' united by shared democratic norms and transatlantic civilizational identity." }
        ]
      },
      members: [
        { code: "US", status: "full", year: 1949, note: "Founding ally, Alliance backbone" },
        { code: "GB", status: "full", year: 1949, note: "Founding ally, Nuclear power" },
        { code: "FR", status: "full", year: 1949, note: "Founding ally (Withdrew from command 1966, rejoined 2009)" },
        { code: "CA", status: "full", year: 1949, note: "Founding North American ally" },
        { code: "IT", status: "full", year: 1949, note: "Founding ally" },
        { code: "NL", status: "full", year: 1949, note: "Founding ally (Home of Sec-Gen Mark Rutte)" },
        { code: "BE", status: "full", year: 1949, note: "Founding ally, NATO HQ host" },
        { code: "NO", status: "full", year: 1949, note: "Founding ally bordering Russia" },
        { code: "DK", status: "full", year: 1949, note: "Founding ally" },
        { code: "PT", status: "full", year: 1949, note: "Founding ally" },
        { code: "IS", status: "full", year: 1949, note: "Founding ally (no standing army)" },
        { code: "LU", status: "full", year: 1949, note: "Founding ally" },
        { code: "TR", status: "full", year: 1952, note: "Second largest military in NATO; Montreux gatekeeper" },
        { code: "GR", status: "full", year: 1952, note: "Joined alongside Turkey 1952" },
        { code: "DE", status: "full", year: 1955, note: "West Germany 1955; Unified 1990" },
        { code: "ES", status: "full", year: 1982, note: "Joined post-Franco democratization" },
        { code: "PL", status: "full", year: 1999, note: "First post-Soviet expansion tier" },
        { code: "CZ", status: "full", year: 1999, note: "Post-Soviet expansion tier" },
        { code: "HU", status: "full", year: 1999, note: "Post-Soviet expansion tier" },
        { code: "RO", status: "full", year: 2004, note: "Black Sea flank expansion" },
        { code: "BG", status: "full", year: 2004, note: "Balkans / Black Sea expansion" },
        { code: "SK", status: "full", year: 2004, note: "Central European ally" },
        { code: "SI", status: "full", year: 2004, note: "Former Yugoslav state" },
        { code: "EE", status: "full", year: 2004, note: "Baltic flank bordering Russia" },
        { code: "LV", status: "full", year: 2004, note: "Baltic flank ally" },
        { code: "LT", status: "full", year: 2004, note: "Suwalki Gap custodian" },
        { code: "AL", status: "full", year: 2009, note: "Western Balkans ally" },
        { code: "HR", status: "full", year: 2009, note: "Adriatic coast ally" },
        { code: "ME", status: "full", year: 2017, note: "Adriatic coast ally" },
        { code: "MK", status: "full", year: 2020, note: "Joined after Prespa agreement" },
        { code: "FI", status: "full", year: 2023, note: "31st ally (Joined April 4, 2023, adding 1,340 km border with Russia)" },
        { code: "SE", status: "full", year: 2024, note: "32nd ally (Joined March 7, 2024, ending two centuries of neutrality)" }
      ],
      mcqs: [
        {
          q: "Who assumed office as the Secretary General of NATO on October 1, 2024?",
          options: ["Jens Stoltenberg", "Mark Rutte", "Ursula von der Leyen", "Boris Johnson"],
          correct: 1,
          explanation: "Former Dutch Prime Minister Mark Rutte took office as NATO Secretary General on October 1, 2024, succeeding Norway's Jens Stoltenberg after his decade-long tenure."
        },
        {
          q: "Which country officially became the 32nd member state of NATO on March 7, 2024?",
          options: ["Finland", "Sweden", "Ukraine", "Georgia"],
          correct: 1,
          explanation: "Sweden officially acceded to NATO on March 7, 2024, ending over 200 years of military non-alignment, following Finland's accession as the 31st member in April 2023."
        },
        {
          q: "Under which Article of the North Atlantic Treaty is the principle of collective defense enshrined?",
          options: ["Article 3", "Article 4", "Article 5", "Article 10"],
          correct: 2,
          explanation: "Article 5 states that an armed attack against one or more allies shall be considered an attack against them all. It has been invoked only once in history, following the 9/11 attacks in 2001."
        },
        {
          q: "In which year did the United States officially designate Pakistan as a Major Non-NATO Ally (MNNA)?",
          options: ["1989", "2001", "2004", "2011"],
          correct: 2,
          explanation: "President George W. Bush designated Pakistan as a Major Non-NATO Ally (MNNA) in June 2004 during the War in Afghanistan."
        },
        {
          q: "What target defense spending benchmark as a percentage of GDP do NATO members pledge to meet?",
          options: ["1.0%", "1.5%", "2.0%", "3.0%"],
          correct: 2,
          explanation: "At the 2014 Wales Summit, NATO allies pledged to halt defense cuts and aim toward spending at least 2% of their GDP on defense by 2024."
        }
      ]
    },

    {
      id: "eu",
      name: "European Union",
      shortName: "EU",
      badge: "Supranational Political & Economic Union",
      icon: "fa-euro-sign",
      colorTheme: "#003399",
      bannerGradient: "linear-gradient(135deg, #001a4d 0%, #003399 100%)",
      motto: "In varietate concordia (United in diversity)",
      founded: "1 November 1993",
      foundingPlace: "Maastricht, Netherlands",
      foundingTreaty: "Treaty on European Union (Maastricht Treaty; evolved from 1957 Treaty of Rome and 1951 Treaty of Paris)",
      headquarters: {
        city: "Brussels",
        country: "Belgium",
        offices: ["Strasbourg (France - Parliament)", "Luxembourg (ECJ)", "Frankfurt (Germany - ECB)"],
        lat: 50.8437,
        lng: 4.3828
      },
      leadership: {
        title: "President of the European Commission",
        name: "Ursula von der Leyen",
        nationality: "Germany",
        term: "2019 – Present (Re-elected July 2024 for second term 2024–2029)"
      },
      officialLanguages: ["24 Official Languages (English, French, German, Spanish, Italian, etc.)"],
      stats: {
        membersCount: 27,
        observersCount: 0,
        partnersCount: 9,
        coverageText: "27 Democratic Member States (Eurozone: 20 States; Schengen Area: 29 Nations)",
        budget: "Multi-annual Financial Framework (MFF) ~€1.2 Trillion + NextGenerationEU ~€800 Billion"
      },
      organs: [
        {
          name: "European Commission",
          icon: "fa-landmark-flag",
          role: "Politically independent executive arm of the European Union",
          detail: "Proposes new European legislation, implements EU policies, manages the EU budget, and enforces European law ('Guardian of the Treaties'). Led by Ursula von der Leyen."
        },
        {
          name: "European Council",
          icon: "fa-user-tie",
          role: "Defines the EU's overall political direction and priorities",
          detail: "Brings together Heads of State or Government of the 27 EU member states, along with Commission President. Chaired by António Costa (succeeded Charles Michel Dec 2024)."
        },
        {
          name: "European Parliament",
          icon: "fa-landmark-dome",
          role: "Directly elected legislative body of the European Union",
          detail: "720 Members of the European Parliament (MEPs) elected directly by EU citizens every 5 years. Shares legislative and budgetary power with the Council of the EU. Led by Roberta Metsola."
        },
        {
          name: "European Central Bank (ECB)",
          icon: "fa-coins",
          role: "Central bank for the euro currency managing monetary policy",
          detail: "Headquartered in Frankfurt, Germany. President Christine Lagarde. Regulates the 20-country Eurozone banking system and maintains price stability (2% inflation target)."
        },
        {
          name: "Court of Justice of the European Union (CJEU)",
          icon: "fa-scale-unbalanced-flip",
          role: "Highest court ensuring EU law is interpreted and applied uniformly",
          detail: "Located in Luxembourg. Adjudicates disputes between national governments and EU institutions, and rules on EU law compliance (Principle of Primacy of EU Law)."
        }
      ],
      mandates: [
        "Four Freedoms of the Single Market: Free movement of goods, services, capital, and persons across internal borders.",
        "Monetary Union: Single currency (Euro) managed by the ECB across 20 Eurozone member states.",
        "Common Foreign and Security Policy (CFSP) and Common Commercial Policy (exclusive trade competency).",
        "European Green Deal: Legally binding commitment to achieve net-zero carbon emissions by 2050."
      ],
      pakistanRole: {
        status: "Major Trade Partner & GSP+ Beneficiary Nation",
        joinedDate: "Diplomatic Relations established in 1962",
        voteContext: "Non-European partner. EU is Pakistan's second-largest overall trading partner and #1 export destination globally.",
        tenuresUNSC: "N/A (Bilateral Trade and Political Partnership)",
        peacekeepingRecord: "Bilateral cooperation under the 2019 Pakistan-EU Strategic Engagement Plan (SEP).",
        historicMilestones: [
          { year: "2014", title: "Award of GSP+ Status", desc: "EU granted Pakistan Generalised Scheme of Preferences Plus (GSP+), eliminating import tariffs on 66% of tariff lines (primarily textiles and leather)." },
          { year: "2014-2024", title: "Textile Export Boom", desc: "Under GSP+, Pakistan's exports to the EU expanded by over 108%, generating over $10 Billion annually in hard foreign currency." },
          { year: "2019", title: "Strategic Engagement Plan (SEP)", desc: "Signed 10-year comprehensive partnership covering peace and security, trade, energy, climate change, and migration." },
          { year: "2023", title: "GSP+ Extension to 2027", desc: "European Parliament and Council extended current GSP+ framework regulations through December 31, 2027, preserving duty-free market access." }
        ],
        strategicFootprint: "GSP+ duty-free market access is the economic lifeline of Pakistan's export industry. However, GSP+ is legally contingent upon the effective ratification and implementation of 27 core international conventions covering human rights, labor rights, environmental protection, and good governance. The EU regularly dispatches monitoring missions to Pakistan to assess compliance."
      },
      examThemes: {
        syllabusTopics: [
          "The Supranational vs Intergovernmental nature of EU integration (Monnet method vs De Gaulle sovereignty)",
          "Brexit: Causes, Northern Ireland Protocol, and long-term geopolitical realignment",
          "Pakistan-EU Relations: Economic impact of GSP+ status, compliance conditionalities, and textile dependency",
          "The Eurozone Architecture and Sovereign Debt Crises (Stability and Growth Pact)",
          "EU Strategic Autonomy debate amidst US-China rivalry and Ukraine conflict"
        ],
        pastQuestions: [
          "Examine the socio-economic significance of the EU's GSP+ status for Pakistan and discuss the major human rights and labor compliance hurdles. (CSS Pakistan Affairs 2023)",
          "Critically evaluate the concept of 'Supranationalism' as practiced in the European Union. Does Brexit signify the limits of regional integration? (CSS IR 2021)",
          "Discuss the EU's evolving security posture and the prospects of European Strategic Autonomy. (CSS IR 2024)"
        ],
        theoreticalLenses: [
          { theory: "Neo-Functionalism (Ernst Haas)", application: "Integration in one economic sector (coal/steel) creates 'spillover effects' requiring supranational coordination in adjacent sectors." },
          { theory: "Liberal Intergovernmentalism (Andrew Moravcsik)", application: "EU treaties reflect hard-bargained preferences of national capitals (especially France and Germany) rather than autonomous supranational momentum." },
          { theory: "Normative Power Europe (Ian Manners)", application: "The EU exercises global influence through trade conditionalities (GSP+ conventions) and regulatory standards ('The Brussels Effect')." }
        ]
      },
      members: [
        { code: "DE", status: "full", year: 1957, note: "Founding member (ECSC 1951 / Rome 1957), Economic anchor" },
        { code: "FR", status: "full", year: 1957, note: "Founding member, only EU nuclear weapon state post-Brexit" },
        { code: "IT", status: "full", year: 1957, note: "Founding member (Treaty of Rome)" },
        { code: "NL", status: "full", year: 1957, note: "Founding member (Benelux)" },
        { code: "BE", status: "full", year: 1957, note: "Founding member, Brussels seat" },
        { code: "LU", status: "full", year: 1957, note: "Founding member, ECJ seat" },
        { code: "IE", status: "full", year: 1973, note: "First enlargement tier" },
        { code: "DK", status: "full", year: 1973, note: "First enlargement tier (Opt-outs)" },
        { code: "GR", status: "full", year: 1981, note: "Mediterranean enlargement" },
        { code: "ES", status: "full", year: 1986, note: "Iberian enlargement" },
        { code: "PT", status: "full", year: 1986, note: "Iberian enlargement" },
        { code: "AT", status: "full", year: 1995, note: "Post-Cold War EFTA enlargement" },
        { code: "SE", status: "full", year: 1995, note: "Nordic enlargement" },
        { code: "FI", status: "full", year: 1995, note: "Nordic enlargement (Eurozone member)" },
        { code: "PL", status: "full", year: 2004, note: "Big Bang Eastern enlargement" },
        { code: "CZ", status: "full", year: 2004, note: "Big Bang Eastern enlargement" },
        { code: "HU", status: "full", year: 2004, note: "Big Bang Eastern enlargement" },
        { code: "SK", status: "full", year: 2004, note: "Eurozone member since 2009" },
        { code: "SI", status: "full", year: 2004, note: "First former Yugoslav state to join" },
        { code: "EE", status: "full", year: 2004, note: "Baltic member, digital pioneer" },
        { code: "LV", status: "full", year: 2004, note: "Baltic member" },
        { code: "LT", status: "full", year: 2004, note: "Baltic member" },
        { code: "CY", status: "full", year: 2004, note: "Eastern Mediterranean member" },
        { code: "MT", status: "full", year: 2004, note: "Smallest EU member state" },
        { code: "RO", status: "full", year: 2007, note: "Second Balkan enlargement (Partial Schengen 2024)" },
        { code: "BG", status: "full", year: 2007, note: "Second Balkan enlargement (Partial Schengen 2024)" },
        { code: "HR", status: "full", year: 2013, note: "28th member state; joined Eurozone & Schengen 1 Jan 2023" }
      ],
      mcqs: [
        {
          q: "Which treaty officially founded the European Union on November 1, 1993?",
          options: ["Treaty of Rome", "Maastricht Treaty", "Treaty of Lisbon", "Treaty of Amsterdam"],
          correct: 1,
          explanation: "The Maastricht Treaty (formally the Treaty on European Union), signed in 1992 and entered into force on November 1, 1993, established the European Union and paved the way for the single currency."
        },
        {
          q: "How many sovereign member states comprise the European Union following the United Kingdom's exit (Brexit)?",
          options: ["25", "26", "27", "28"],
          correct: 2,
          explanation: "Following the UK's formal departure on January 31, 2020, the European Union has 27 sovereign member states."
        },
        {
          q: "In which year was Pakistan first awarded GSP+ (Generalised Scheme of Preferences Plus) trade status by the European Union?",
          options: ["2010", "2014", "2018", "2020"],
          correct: 1,
          explanation: "Pakistan was granted GSP+ status effective January 1, 2014, providing duty-free access to the EU market for approximately 66% of tariff lines."
        },
        {
          q: "Which country joined both the Eurozone currency union and the Schengen border-free area on January 1, 2023?",
          options: ["Bulgaria", "Romania", "Croatia", "Poland"],
          correct: 2,
          explanation: "Croatia adopted the Euro as its official currency (becoming the 20th Eurozone member) and joined the Schengen Area on January 1, 2023."
        },
        {
          q: "How many core international conventions on human rights, labor, and environment must a GSP+ beneficiary ratify and implement?",
          options: ["10 conventions", "15 conventions", "27 conventions", "50 conventions"],
          correct: 2,
          explanation: "GSP+ status requires beneficiary countries to ratify and effectively implement 27 core international conventions covering human rights, labor standards, environment, and good governance."
        }
      ]
    },

    {
      id: "oic",
      name: "Organisation of Islamic Cooperation",
      shortName: "OIC",
      badge: "Collective Voice of the Muslim World",
      icon: "fa-mosque",
      colorTheme: "#007A3D",
      bannerGradient: "linear-gradient(135deg, #004d26 0%, #007A3D 100%)",
      motto: "The Collective Voice of the Muslim World",
      founded: "25 September 1969",
      foundingPlace: "Rabat, Morocco",
      foundingTreaty: "Rabat Declaration (Charter of the OIC adopted in 1972 at Jeddah CFM, amended in 2008 at Dakar Summit)",
      headquarters: {
        city: "Jeddah",
        country: "Saudi Arabia",
        offices: ["COMSTECH (Islamabad, Pakistan)", "COMCEC (Ankara, Turkey)", "SESRIC (Ankara, Turkey)", "ICRIC (Tehran, Iran)"],
        lat: 21.5433,
        lng: 39.1728
      },
      leadership: {
        title: "Secretary-General",
        name: "Hissein Brahim Taha",
        nationality: "Chad",
        term: "Assumed office 17 November 2021 (5-year term)"
      },
      officialLanguages: ["Arabic", "English", "French"],
      stats: {
        membersCount: 57,
        observersCount: 5,
        partnersCount: 0,
        coverageText: "57 Member States across 4 Continents (~1.9 Billion Population)",
        budget: "Funded by member state assessments, Islamic Solidarity Fund & Islamic Development Bank (IsDB) Group"
      },
      organs: [
        {
          name: "Islamic Summit (Kings & Heads of State)",
          icon: "fa-crown",
          role: "Supreme decision-making authority of the OIC",
          detail: "Composed of Kings, Heads of State, and Governments of all 57 member states. Convenes triennially to deliberate on the supreme interests of the Muslim Ummah."
        },
        {
          name: "Council of Foreign Ministers (CFM)",
          icon: "fa-handshake",
          role: "Annual ministerial conference implementing Islamic Summit directives",
          detail: "Meets annually in rotation among member capitals to review implementation of decisions, adopt operational budgets, and pass resolutions on political issues (Kashmir, Palestine)."
        },
        {
          name: "General Secretariat",
          icon: "fa-building",
          role: "Executive organ entrusted with the implementation of decisions",
          detail: "Located in Jeddah, Saudi Arabia. Led by Secretary-General Hissein Brahim Taha. Coordinates political, economic, cultural, and humanitarian directorates."
        },
        {
          name: "COMSTECH (Science & Technology)",
          icon: "fa-flask-vial",
          role: "Standing Committee on Scientific and Technological Cooperation",
          detail: "Permanently headquartered in Islamabad, Pakistan. Chaired ex-officio by the President of Pakistan. Promotes STEM education, R&D, and biotechnology across member states."
        },
        {
          name: "COMCEC (Economic & Commercial)",
          icon: "fa-coins",
          role: "Standing Committee for Commercial and Economic Cooperation",
          detail: "Chaired by the President of Turkey, based in Ankara. Coordinates preferential trade arrangements (TPS-OIC) and economic cooperation."
        },
        {
          name: "Independent Permanent Human Rights Commission (IPHRC)",
          icon: "fa-scale-balanced",
          role: "Statutory human rights advisory body of the OIC",
          detail: "Principal consultative body monitoring civil, political, and socio-economic rights, Islamophobia, and human rights violations in Indian-Occupied Jammu & Kashmir and Palestine."
        }
      ],
      mandates: [
        "Safeguard and protect the vital interests of the Muslim world and promote international peace and harmony.",
        "Unwavering support for the Palestinian cause and the restoration of East Jerusalem (Al-Quds Al-Sharif).",
        "Uphold the legitimate struggle of the people of Jammu & Kashmir for their inalienable right to self-determination.",
        "Combating Islamophobia, hate speech, and defamation of religions across global platforms (UNGA, UNHRC)."
      ],
      pakistanRole: {
        status: "Founding Member & Permanent Host of COMSTECH",
        joinedDate: "25 September 1969",
        voteContext: "Pakistan played an instrumental role in drafting the foundational Rabat Declaration following the Al-Aqsa arson.",
        tenuresUNSC: "N/A",
        peacekeepingRecord: "Active contributor to Islamic solidarity peacekeeping initiatives and military training programs.",
        historicMilestones: [
          { year: "1969", title: "Rabat Summit Leadership", desc: "Pakistan was among the 24 founding states at the historic Rabat Summit convened by King Hassan II and King Faisal." },
          { year: "1974", title: "Historic 2nd Islamic Summit in Lahore", desc: "Prime Minister Zulfikar Ali Bhutto hosted the landmark Lahore Summit (Feb 22–24, 1974), bringing together King Faisal, Yasser Arafat, and Muammar Gaddafi, leading to recognition of the PLO and Bangladesh." },
          { year: "1981", title: "Permanent Host of COMSTECH", desc: "Established the OIC Ministerial Standing Committee on Scientific and Technological Cooperation (COMSTECH) in Islamabad under Pakistan's permanent chairmanship." },
          { year: "1985-1988", title: "Syed Sharifuddin Pirzada as Sec-Gen", desc: "Renowned Pakistani jurist Syed Sharifuddin Pirzada served as the 5th Secretary-General of the OIC." },
          { year: "1997", title: "Extraordinary Summit Islamabad", desc: "Pakistan hosted the Extraordinary Islamic Summit in Islamabad on March 23, 1997 to commemorate Pakistan's Golden Jubilee." },
          { year: "2021", title: "17th Extraordinary CFM on Afghanistan", desc: "Conveyed emergency session in Islamabad (Dec 19, 2021) establishing the Humanitarian Trust Fund for Afghan crisis relief." },
          { year: "2022", title: "48th CFM in Islamabad", desc: "Hosted 48th Council of Foreign Ministers session (March 22–23, 2022), adopting 140 resolutions including firm positions on Kashmir and Islamophobia." }
        ],
        strategicFootprint: "The OIC is Pakistan's core diplomatic platform in the Muslim world. Pakistan has consistently leveraged OIC communiqués to secure unanimous condemnation of human rights violations in Indian-Illegally Occupied Jammu and Kashmir (IIOJK) and rejection of India's August 5, 2019 unilateral revocation of Article 370. The OIC Contact Group on Jammu & Kashmir remains a vital institutional vehicle for Pakistan's foreign policy."
      },
      examThemes: {
        syllabusTopics: [
          "The Genesis of the OIC: Al-Aqsa arson (1969), Rabat Summit, and pan-Islamic institutionalization",
          "Pakistan's pivotal role: The historic Lahore 1974 Summit and diplomatic bridge-building",
          "OIC's efficacy on core Muslim causes: Palestine, Kashmir, Rohingya, and Islamophobia",
          "Structural deficiencies: Lack of enforcement mechanism, financial arrears, and intra-Ummah geopolitical rivalries",
          "Saudi-Iran rapprochement (Beijing Agreement 2023) and its transformative impact on OIC cohesion"
        ],
        pastQuestions: [
          "Critically evaluate the performance of the OIC as a collective voice of the Muslim Ummah. Why has it failed to resolve conflicts in Palestine and Kashmir? (CSS IR 2023)",
          "Discuss Pakistan's historic role in the OIC with special reference to the 2nd Islamic Summit in Lahore and recent CFM sessions in Islamabad. (CSS Pakistan Affairs 2022)",
          "Examine the institutional framework of the OIC and suggest reforms to transform it into an effective regional security and economic bloc. (CSS IR 2020)"
        ],
        theoreticalLenses: [
          { theory: "Pan-Islamism / Constructivism", application: "The OIC is predicated on the collective religious identity of the 'Ummah' transcending territorial sovereignty." },
          { theory: "Realism / Inter-state Balancing", application: "National geopolitical interests of regional powers (Saudi Arabia, Iran, Turkey, UAE) routinely supersede collective Islamic solidarity." },
          { theory: "Regime Theory", application: "Despite lacking supranational enforcement, the OIC provides essential norm-setting, diplomatic legitimacy, and multilateral bargaining power." }
        ]
      },
      members: [
        { code: "PK", status: "full", year: 1969, note: "Founding member; COMSTECH permanent host; 1974 Summit host" },
        { code: "SA", status: "full", year: 1969, note: "Founding member, Headquarters host (Jeddah)" },
        { code: "TR", status: "full", year: 1969, note: "Founding member, COMCEC host" },
        { code: "IR", status: "full", year: 1969, note: "Founding member" },
        { code: "EG", status: "full", year: 1969, note: "Founding member (Suspended 1979-84 over Camp David, reinstated)" },
        { code: "ID", status: "full", year: 1969, note: "Founding member, largest Muslim-population nation" },
        { code: "MY", status: "full", year: 1969, note: "Founding member; first Sec-Gen was Tunku Abdul Rahman" },
        { code: "BD", status: "full", year: 1974, note: "Admitted at Lahore 1974 Summit" },
        { code: "AE", status: "full", year: 1972, note: "Key economic contributor" },
        { code: "QA", status: "full", year: 1972, note: "Doha Summit host 2000" },
        { code: "KW", status: "full", year: 1969, note: "Founding member" },
        { code: "OM", status: "full", year: 1972, note: "Gulf member" },
        { code: "BH", status: "full", year: 1972, note: "Gulf member" },
        { code: "IQ", status: "full", year: 1975, note: "Middle Eastern member" },
        { code: "SY", status: "full", year: 1972, note: "Suspended 2012 over civil war, reinstated 2023" },
        { code: "JO", status: "full", year: 1969, note: "Custodian of Holy Sites in Jerusalem" },
        { code: "LB", status: "full", year: 1969, note: "Founding member" },
        { code: "PS", status: "full", year: 1969, note: "Permanent founding member (State of Palestine)" },
        { code: "YE", status: "full", year: 1969, note: "Founding member" },
        { code: "MA", status: "full", year: 1969, note: "Founding member, Rabat 1969 Summit host" },
        { code: "DZ", status: "full", year: 1969, note: "Founding member" },
        { code: "TN", status: "full", year: 1969, note: "Founding member" },
        { code: "LY", status: "full", year: 1969, note: "Founding member" },
        { code: "SD", status: "full", year: 1969, note: "Founding member" },
        { code: "NG", status: "full", year: 1986, note: "Largest African member state" },
        { code: "SN", status: "full", year: 1969, note: "Dakar Summit host 1991 & 2008" },
        { code: "SO", status: "full", year: 1969, note: "Founding member" },
        { code: "DJ", status: "full", year: 1978, note: "Horn of Africa member" },
        { code: "UG", status: "full", year: 1974, note: "Joined at Lahore Summit" },
        { code: "TD", status: "full", year: 1969, note: "Home of current Sec-Gen Hissein Brahim Taha" },
        { code: "KZ", status: "full", year: 1995, note: "Astana CFM 2011 (renamed OIC)" },
        { code: "UZ", status: "full", year: 1996, note: "Central Asian member" },
        { code: "AZ", status: "full", year: 1991, note: "First post-Soviet republic to join" },
        { code: "RU", status: "observer", year: 2005, note: "Permanent Observer State" }
      ],
      mcqs: [
        {
          q: "In response to which tragic event was the Organisation of Islamic Cooperation (OIC) founded in September 1969?",
          options: ["The 1967 Six-Day War", "The Arson Attack on Al-Aqsa Mosque", "The Suez Crisis", "The 1973 Arab-Israeli War"],
          correct: 1,
          explanation: "The OIC was founded at the historic Rabat Summit on September 25, 1969, convened following the criminal arson attack on the sacred Al-Aqsa Mosque in occupied Jerusalem on August 21, 1969."
        },
        {
          q: "Which city permanently hosts the headquarters of COMSTECH, the OIC's Standing Committee on Scientific and Technological Cooperation?",
          options: ["Jeddah, Saudi Arabia", "Islamabad, Pakistan", "Ankara, Turkey", "Rabat, Morocco"],
          correct: 1,
          explanation: "COMSTECH is permanently headquartered in Islamabad, Pakistan, and is ex-officio chaired by the President of the Islamic Republic of Pakistan."
        },
        {
          q: "Who hosted the historic 2nd Islamic Summit in Lahore in February 1974, uniting Muslim world leaders?",
          options: ["Field Marshal Ayub Khan", "General Yahya Khan", "Prime Minister Zulfikar Ali Bhutto", "General Zia-ul-Haq"],
          correct: 2,
          explanation: "Prime Minister Zulfikar Ali Bhutto hosted the historic 2nd OIC Summit in Lahore from 22 to 24 February 1974, attended by King Faisal, Yasser Arafat, and Muammar Gaddafi."
        },
        {
          q: "Which Pakistani jurist served as the 5th Secretary-General of the OIC from 1985 to 1988?",
          options: ["Sir Zafarullah Khan", "Syed Sharifuddin Pirzada", "Agha Shahi", "Sartaj Aziz"],
          correct: 1,
          explanation: "Syed Sharifuddin Pirzada, renowned Pakistani legal luminary and Senior Federal Minister, served as Secretary-General of the OIC from 1985 to 1988."
        },
        {
          q: "Where is the permanent headquarters of the OIC General Secretariat located?",
          options: ["Riyadh, Saudi Arabia", "Jeddah, Saudi Arabia", "Cairo, Egypt", "Istanbul, Turkey"],
          correct: 1,
          explanation: "The OIC General Secretariat is headquartered in Jeddah, Kingdom of Saudi Arabia, pending the liberation of Al-Quds Al-Sharif (Jerusalem), its designated future permanent seat."
        }
      ]
    },

    {
      id: "sco",
      name: "Shanghai Cooperation Organisation",
      shortName: "SCO",
      badge: "Eurasian Security & Economic Alliance",
      icon: "fa-compass",
      colorTheme: "#0d9488",
      bannerGradient: "linear-gradient(135deg, #042f2e 0%, #0d9488 100%)",
      motto: "The Shanghai Spirit: Mutual Trust, Equality, Consultation & Respect for Cultural Diversity",
      founded: "15 June 2001",
      foundingPlace: "Shanghai, China",
      foundingTreaty: "Declaration of the Shanghai Cooperation Organisation (Charter signed June 7, 2002 in St. Petersburg)",
      headquarters: {
        city: "Beijing",
        country: "China",
        offices: ["Executive Committee of RATS - Regional Anti-Terrorist Structure (Tashkent, Uzbekistan)"],
        lat: 39.9042,
        lng: 116.4074
      },
      leadership: {
        title: "Secretary-General",
        name: "Zhang Ming",
        nationality: "China",
        term: "2022 – 2024 / Transition leadership"
      },
      officialLanguages: ["Chinese", "Russian"],
      stats: {
        membersCount: 10,
        observersCount: 2,
        partnersCount: 14,
        coverageText: "10 Member States covering ~60% of Eurasian landmass, 42% of global population & >25% of global GDP",
        budget: "Assessed contributions based on economic scale"
      },
      organs: [
        {
          name: "Council of Heads of State (CHS)",
          icon: "fa-chess-king",
          role: "Supreme decision-making organ of the SCO",
          detail: "Meets annually in the summit capital to define priorities, approve fundamental directions of activity, and address key international and regional concerns."
        },
        {
          name: "Council of Heads of Government (CHG)",
          icon: "fa-briefcase",
          role: "Coordinates economic, trade, and multilateral cooperation",
          detail: "Composed of Prime Ministers / Premiers. Meets annually to approve organization budget and review economic, connectivity, and development cooperation."
        },
        {
          name: "SCO Secretariat",
          icon: "fa-landmark",
          role: "Main permanent executive body of the organisation",
          detail: "Located in Beijing, China. Administers documentation, legal coordination, organizational summits, and monitors execution of multilateral treaties."
        },
        {
          name: "Regional Anti-Terrorist Structure (RATS)",
          icon: "fa-shield-halved",
          role: "Permanent body coordinating the fight against the 'Three Evils'",
          detail: "Headquartered in Tashkent, Uzbekistan. Coordinates intelligence sharing, joint database management, and counter-terror military exercises ('Peace Mission', 'Pabbi Anti-Terror')."
        }
      ],
      mandates: [
        "Combating the 'Three Evils': Terrorism, Separatism, and Religious Extremism.",
        "Strengthening mutual trust, good neighborliness, and regional stability across Eurasia.",
        "Promoting trade, energy connectivity, transport infrastructure, and financial cooperation (CPEC and BRI alignment).",
        "Advocating for a multipolar, democratic, and equitable international political and economic order."
      ],
      pakistanRole: {
        status: "Full Member State & 2024 CHG Summit Host",
        joinedDate: "Full Member on 9 June 2017 (Astana Summit)",
        voteContext: "Joined as Observer in 2005; admitted as full member alongside India at the historic Astana Summit in 2017.",
        tenuresUNSC: "N/A",
        peacekeepingRecord: "Active host and participant in RATS joint counter-terrorism drills (hosted Pabbi Anti-Terror Exercise in 2021).",
        historicMilestones: [
          { year: "2005", title: "Observer Status Awarded", desc: "Pakistan gained observer status at the Astana Summit, beginning formal integration into the Eurasian institutional fold." },
          { year: "2017", title: "Full Membership at Astana", desc: "Prime Minister Nawaz Sharif signed the Memorandum of Obligations, conferring permanent full membership on June 9, 2017." },
          { year: "2021", title: "Pabbi Anti-Terror Drills", desc: "Pakistan military hosted multinational SCO-RATS counter-terrorism drills at NCTC Pabbi with participation of Chinese and Russian troops." },
          { year: "2024", title: "Host of 23rd SCO CHG Summit in Islamabad", desc: "Pakistan hosted the landmark 23rd Meeting of the Council of the Heads of Government in Islamabad (October 15–16, 2024). Attended by Chinese Premier Li Qiang, Russian PM Mikhail Mishustin, and Indian EAM S. Jaishankar (first visit by an Indian Foreign Minister in 9 years)." }
        ],
        strategicFootprint: "The SCO anchors Pakistan's geo-economic pivot toward Central Asia and Eurasia. Through the China-Pakistan Economic Corridor (CPEC) and Gwadar Port, Pakistan offers the shortest maritime access to landlocked Central Asian Republics (CARs). At the October 2024 Islamabad summit, Pakistan championed trade in local currencies, climate disaster management, and regional multimodal connectivity."
      },
      examThemes: {
        syllabusTopics: [
          "The 'Shanghai Spirit' and non-Western security multilateralism",
          "SCO's counter-terrorism architecture: RATS in Tashkent and the doctrine against the 'Three Evils'",
          "The Geopolitics of Expansion: Inclusion of India & Pakistan (2017), Iran (2023), and Belarus (2024)",
          "Pakistan's strategic gains from SCO: Energy transit (TAPI, CASA-1000), CARs connectivity, and CPEC",
          "The SCO CHG Summit Islamabad (October 2024) and thawed Indo-Pak diplomatic interactions"
        ],
        pastQuestions: [
          "Analyze the geopolitical significance of Pakistan's full membership in the SCO. How does it augment Pakistan's 'Vision Central Asia' policy? (CSS IR 2024)",
          "Critically evaluate the outcomes of the 23rd SCO Council of Heads of Government summit held in Islamabad in October 2024. (CSS Current Affairs 2025)",
          "Discuss whether the Shanghai Cooperation Organisation (SCO) can function as an effective counterweight to Western alliances like NATO. (CSS IR 2022)"
        ],
        theoreticalLenses: [
          { theory: "Regionalism / Complex Interdependence", application: "The SCO provides an institutional framework for Eurasian states to coordinate economic connectivity and energy corridors." },
          { theory: "Neorealist Balance of Power", application: "China and Russia utilize the SCO to consolidate a strategic Eurasian continental sphere resisting Western encirclement." },
          { theory: "The 'Shanghai Spirit' / Constructivism", application: "Emphasizes mutual trust and non-interference, rejecting Western-style liberal democratic conditionality." }
        ]
      },
      members: [
        { code: "CN", status: "full", year: 2001, note: "Founding member (Shanghai Five 1996), Secretariat host" },
        { code: "RU", status: "full", year: 2001, note: "Founding member, Eurasian security anchor" },
        { code: "KZ", status: "full", year: 2001, note: "Founding member, 2024 Summit host (Astana)" },
        { code: "KG", status: "full", year: 2001, note: "Founding member" },
        { code: "TJ", status: "full", year: 2001, note: "Founding member bordering Afghanistan" },
        { code: "UZ", status: "full", year: 2001, note: "Joined at founding June 2001, RATS host" },
        { code: "PK", status: "full", year: 2017, note: "Full member since Astana 2017; Hosted CHG Islamabad Oct 2024" },
        { code: "IN", status: "full", year: 2017, note: "Full member since Astana 2017; Hosted 2023 Virtual Summit" },
        { code: "IR", status: "full", year: 2023, note: "9th member state (admitted July 4, 2023)" },
        { code: "BY", status: "full", year: 2024, note: "10th member state (admitted July 4, 2024 at Astana Summit)" },
        { code: "MN", status: "observer", year: 2004, note: "First observer state" },
        { code: "AF", status: "observer", year: 2012, note: "Observer (Inactive since 2021)" },
        { code: "TR", status: "partner", year: 2012, note: "Dialogue partner (Only NATO ally in SCO family)" },
        { code: "SA", status: "partner", year: 2023, note: "Dialogue partner" },
        { code: "AE", status: "partner", year: 2023, note: "Dialogue partner" },
        { code: "QA", status: "partner", year: 2022, note: "Dialogue partner" },
        { code: "EG", status: "partner", year: 2022, note: "Dialogue partner" },
        { code: "AZ", status: "partner", year: 2015, note: "Dialogue partner" },
        { code: "AM", status: "partner", year: 2015, note: "Dialogue partner" }
      ],
      mcqs: [
        {
          q: "In which year did Pakistan and India officially become full member states of the Shanghai Cooperation Organisation (SCO)?",
          options: ["2015", "2016", "2017", "2019"],
          correct: 2,
          explanation: "Pakistan and India were formally admitted as full members at the historic SCO Summit in Astana, Kazakhstan, on June 9, 2017."
        },
        {
          q: "Which country officially became the 10th full member state of the SCO at the Astana Summit in July 2024?",
          options: ["Iran", "Belarus", "Mongolia", "Turkey"],
          correct: 1,
          explanation: "Belarus was officially admitted as the 10th full member state of the SCO at the Astana Summit on July 4, 2024, following Iran's admission as the 9th member in 2023."
        },
        {
          q: "Where is the Executive Committee of the Regional Anti-Terrorist Structure (RATS) of the SCO permanently headquartered?",
          options: ["Beijing, China", "Tashkent, Uzbekistan", "Moscow, Russia", "Astana, Kazakhstan"],
          correct: 1,
          explanation: "The Executive Committee of the Regional Anti-Terrorist Structure (RATS) is permanently based in Tashkent, Uzbekistan, whereas the SCO Secretariat is in Beijing, China."
        },
        {
          q: "Which meeting of the SCO Council of the Heads of Government (CHG) was hosted by Pakistan in Islamabad in October 2024?",
          options: ["20th Meeting", "21st Meeting", "22nd Meeting", "23rd Meeting"],
          correct: 3,
          explanation: "Pakistan hosted the 23rd Meeting of the Council of the Heads of Government (CHG) in Islamabad on October 15-16, 2024."
        },
        {
          q: "The SCO's core security mandate focuses on combating the 'Three Evils', which are defined as:",
          options: ["Corruption, Poverty, and Illiteracy", "Terrorism, Separatism, and Extremism", "Cyberwarfare, Espionage, and Smuggling", "Inflation, Sanctions, and Climate Change"],
          correct: 1,
          explanation: "The foundational Shanghai Convention of 2001 mandates member states to jointly combat the 'Three Evils': Terrorism, Separatism, and Extremism."
        }
      ]
    },

    {
      id: "saarc",
      name: "South Asian Association for Regional Cooperation",
      shortName: "SAARC",
      badge: "South Asian Regional Integration Forum",
      icon: "fa-hands-holding-circle",
      colorTheme: "#008080",
      bannerGradient: "linear-gradient(135deg, #003333 0%, #008080 100%)",
      motto: "Peace, Progress and Prosperity in South Asia",
      founded: "8 December 1985",
      foundingPlace: "Dhaka, Bangladesh",
      foundingTreaty: "SAARC Charter (Signed 8 December 1985 in Dhaka; concept initiated 1980 by President Ziaur Rahman)",
      headquarters: {
        city: "Kathmandu",
        country: "Nepal",
        offices: ["SAARC Arbitration Council (Islamabad, Pakistan)", "SAARC Energy Centre (Islamabad, Pakistan)", "SAARC Cultural Centre (Colombo, Sri Lanka)"],
        lat: 27.7172,
        lng: 85.3240
      },
      leadership: {
        title: "Secretary-General",
        name: "Md. Golam Sarwar",
        nationality: "Bangladesh",
        term: "Assumed office October 2023"
      },
      officialLanguages: ["English"],
      stats: {
        membersCount: 8,
        observersCount: 9,
        partnersCount: 0,
        coverageText: "8 South Asian Nations representing 24% of world population, but <5% intra-regional trade",
        budget: "Shared contributions among 8 member states"
      },
      organs: [
        {
          name: "SAARC Summit (Heads of State/Govt)",
          icon: "fa-users",
          role: "Highest authority of the Association",
          detail: "Mandated to meet biennially. However, summits have been paralyzed since 2014 due to Indo-Pak bilateral discord."
        },
        {
          name: "Council of Ministers",
          icon: "fa-briefcase",
          role: "Formulates policy, reviews progress, and decides new areas of cooperation",
          detail: "Composed of Foreign Ministers of member states. Meets annually between summits."
        },
        {
          name: "Standing Committee",
          icon: "fa-clipboard-check",
          role: "Overall monitoring and coordination of regional programs",
          detail: "Composed of Foreign Secretaries of the 8 member states. Approves project budgets and modalities."
        },
        {
          name: "SAARC Secretariat",
          icon: "fa-building-columns",
          role: "Coordinates and monitors execution of SAARC activities",
          detail: "Located in Kathmandu, Nepal (established January 16, 1987). Headed by Secretary-General Golam Sarwar and 8 Directors."
        },
        {
          name: "Regional Centres in Pakistan",
          icon: "fa-bolt",
          role: "Specialized institutional centres based in Islamabad",
          detail: "Islamabad hosts the SAARC Energy Centre (SEC) and the SAARC Arbitration Council (SARCO), promoting clean energy integration and commercial dispute settlement."
        }
      ],
      mandates: [
        "Promote the welfare of the peoples of South Asia and improve their quality of life.",
        "Accelerate economic growth, social progress, and cultural development in the region.",
        "Promote active collaboration in economic, social, cultural, technical, and scientific fields.",
        "South Asian Free Trade Area (SAFTA): Signed 2004, entered into force 2006 to eliminate customs tariffs."
      ],
      pakistanRole: {
        status: "Founding Member State & Host of 4th and 12th Summits",
        joinedDate: "8 December 1985",
        voteContext: "Pakistan was a foundational signatory at Dhaka 1985 under President Zia-ul-Haq.",
        tenuresUNSC: "N/A",
        peacekeepingRecord: "Active proponent of SAARC Social Charter and disaster management frameworks.",
        historicMilestones: [
          { year: "1988", title: "4th SAARC Summit in Islamabad", desc: "Prime Minister Benazir Bhutto hosted Rajiv Gandhi, leading to historic bilateral agreements on non-attack on nuclear installations." },
          { year: "2004", title: "12th SAARC Summit & SAFTA", desc: "Prime Minister Mir Zafarullah Jamali hosted the landmark 12th Summit in Islamabad, where the historic SAFTA agreement was signed and historic Indo-Pak composite dialogue launched." },
          { year: "2007", title: "Expansion to Afghanistan", desc: "Supported Afghanistan's accession as the 8th full member of SAARC at the 14th New Delhi Summit." },
          { year: "2016", title: "19th Summit Impasse", desc: "India boycotted the scheduled 19th SAARC Summit in Islamabad following the Uri incident, leading to a decade-long paralysis of the summit mechanism." }
        ],
        strategicFootprint: "Pakistan has consistently called for reviving SAARC, offering to host the long-delayed 19th Summit in Islamabad. Pakistan emphasizes that Article X of the SAARC Charter explicitly excludes bilateral disputes to prevent bilateral rivalries from hijacking regional multilateralism. Pakistan views India's pivot to BIMSTEC and BBIN as deliberate attempts to bypass Pakistan and fracture South Asian regionalism."
      },
      examThemes: {
        syllabusTopics: [
          "The Anatomy of Regional Failure: Why SAARC failed while ASEAN succeeded (Comparative regionalism)",
          "Article X of the SAARC Charter: The Unanimity rule and exclusion of bilateral contentious issues",
          "SAFTA limitations: Paralyzing sensitive lists, non-tariff barriers, and low intra-regional trade (<5%)",
          "India's Sub-regional Strategy: Promoting BIMSTEC and BBIN to isolate Pakistan from South Asian integration",
          "Revival Prospects: Can external transit (CPEC, CARs connectivity) re-energize South Asian multilateralism?"
        ],
        pastQuestions: [
          "Critically analyze the factors that have rendered SAARC an ineffective regional organization. Compare its performance with ASEAN. (CSS IR 2023)",
          "Discuss the prospects of reviving the stalled 19th SAARC Summit in Islamabad amidst enduring Indo-Pak strategic estrangement. (CSS Current Affairs 2024)",
          "Evaluate SAFTA as an instrument of economic integration in South Asia. Why has it failed to boost intra-regional trade? (CSS Economics / IR 2021)"
        ],
        theoreticalLenses: [
          { theory: "Neo-Functionalist Failure", application: "Economic cooperation in South Asia failed to achieve 'spillover' into political détente due to intractable territorial disputes." },
          { theory: "Hegemonic Stability Deficit", application: "India's overwhelming asymmetry without benign hegemonic accommodation generates deep security dilemmas among smaller neighbors." },
          { theory: "Constructivist Rivalry", application: "Divergent post-colonial national identities and historical trauma perpetually reinforce zero-sum perceptions." }
        ]
      },
      members: [
        { code: "PK", status: "full", year: 1985, note: "Founding member; Hosted 1988 & 2004 Summits; Hosts SEC & SARCO" },
        { code: "IN", status: "full", year: 1985, note: "Founding member; Largest economy; Boycotted 2016 Islamabad summit" },
        { code: "BD", status: "full", year: 1985, note: "Founding member; Initiated SAARC concept 1980 (Pres. Ziaur Rahman)" },
        { code: "LK", status: "full", year: 1985, note: "Founding member; Cultural Centre host" },
        { code: "NP", status: "full", year: 1985, note: "Founding member; Secretariat host (Kathmandu)" },
        { code: "AF", status: "full", year: 2007, note: "8th member state (admitted at 14th New Delhi summit)" },
        { code: "BT", status: "full", year: 1985, note: "Founding member; Thimphu Summit host 2010" },
        { code: "MV", status: "full", year: 1985, note: "Founding member; Addu Summit host 2011" },
        { code: "CN", status: "observer", year: 2006, note: "Permanent Observer; Pakistan has championed full membership" },
        { code: "US", status: "observer", year: 2006, note: "Observer state" },
        { code: "JP", status: "observer", year: 2006, note: "Observer state" },
        { code: "KR", status: "observer", year: 2006, note: "Observer state" },
        { code: "AU", status: "observer", year: 2008, note: "Observer state" },
        { code: "IR", status: "observer", year: 2007, note: "Observer state" }
      ],
      mcqs: [
        {
          q: "Which South Asian country proposed the foundational concept of SAARC in 1980?",
          options: ["Pakistan", "India", "Bangladesh", "Sri Lanka"],
          correct: 2,
          explanation: "President Ziaur Rahman of Bangladesh initiated the formal proposal for South Asian regional cooperation in May 1980, culminating in the 1985 Dhaka Charter."
        },
        {
          q: "Where is the permanent headquarters of the SAARC Secretariat located?",
          options: ["Dhaka, Bangladesh", "New Delhi, India", "Kathmandu, Nepal", "Colombo, Sri Lanka"],
          correct: 2,
          explanation: "The SAARC Secretariat was established in Kathmandu, Nepal, on January 16, 1987."
        },
        {
          q: "Under which Article of the SAARC Charter are bilateral and contentious issues excluded from deliberations?",
          options: ["Article I", "Article V", "Article X", "Article XII"],
          correct: 2,
          explanation: "Article X, Paragraph 2 of the SAARC Charter explicitly dictates that 'bilateral and contentious issues shall be excluded from the deliberations'."
        },
        {
          q: "At which summit was the landmark South Asian Free Trade Area (SAFTA) agreement signed in January 2004?",
          options: ["10th Colombo Summit", "12th Islamabad Summit", "14th New Delhi Summit", "18th Kathmandu Summit"],
          correct: 1,
          explanation: "The SAFTA agreement was signed during the 12th SAARC Summit in Islamabad on January 6, 2004, and came into force on January 1, 2006."
        },
        {
          q: "Which nation was admitted as the 8th full member state of SAARC in 2007?",
          options: ["Myanmar", "Afghanistan", "Iran", "China"],
          correct: 1,
          explanation: "Afghanistan was formally admitted as the eighth member state of SAARC at the 14th Summit held in New Delhi in April 2007."
        }
      ]
    },

    {
      id: "asean",
      name: "Association of Southeast Asian Nations",
      shortName: "ASEAN",
      badge: "Southeast Asian Economic & Political Community",
      icon: "fa-network-wired",
      colorTheme: "#0038A8",
      bannerGradient: "linear-gradient(135deg, #001f5c 0%, #0038A8 100%)",
      motto: "One Vision, One Identity, One Community",
      founded: "8 August 1967",
      foundingPlace: "Bangkok, Thailand",
      foundingTreaty: "Bangkok Declaration (ASEAN Declaration; codified in ASEAN Charter 2007 in Singapore)",
      headquarters: {
        city: "Jakarta",
        country: "Indonesia",
        offices: ["ASEAN Secretariat (Jakarta, Indonesia)"],
        lat: -6.2384,
        lng: 106.8005
      },
      leadership: {
        title: "Secretary-General",
        name: "Dr. Kao Kim Hourn",
        nationality: "Cambodia",
        term: "Assumed office 1 January 2023 (5-year term)"
      },
      officialLanguages: ["English (Working language)"],
      stats: {
        membersCount: 10,
        observersCount: 1,
        partnersCount: 11,
        coverageText: "10 Member States + Timor-Leste (acceding observer) | 5th Largest Global Economy (~$3.8 Trillion)",
        budget: "Equal annual contributions from member states"
      },
      organs: [
        {
          name: "ASEAN Summit",
          icon: "fa-landmark",
          role: "Supreme policy-making body of ASEAN",
          detail: "Composed of Heads of State or Government. Meets semi-annually under rotating national chairmanship."
        },
        {
          name: "ASEAN Coordinating Council (ACC)",
          icon: "fa-sliders",
          role: "Coordinates implementation of summit agreements across community pillars",
          detail: "Composed of ASEAN Foreign Ministers. Meets at least twice a year to prepare for the Summits."
        },
        {
          name: "Three Community Councils",
          icon: "fa-sitemap",
          role: "Oversee the three foundational pillars of the ASEAN Community",
          detail: "1. Political-Security Community (APSC); 2. Economic Community (AEC); 3. Socio-Cultural Community (ASCC)."
        },
        {
          name: "ASEAN Regional Forum (ARF)",
          icon: "fa-shield-halved",
          role: "Premier Asia-Pacific security dialogue platform",
          detail: "27 participants including US, China, Russia, EU, India, and Pakistan. Fosters confidence building and preventive diplomacy."
        },
        {
          name: "ASEAN Secretariat",
          icon: "fa-building",
          role: "Permanent administrative executive coordinating ASEAN activities",
          detail: "Located in Jakarta, Indonesia. Headed by Secretary-General Kao Kim Hourn and four Deputy Secretaries-General."
        }
      ],
      mandates: [
        "Accelerate economic growth, social progress, and cultural development in the region.",
        "Promote regional peace and stability through respect for justice, rule of law, and UN principles.",
        "The 'ASEAN Way': Informal, consensus-based decision-making (Musyawarah & Mufakat) and strict non-interference.",
        "ASEAN Centrality: Serving as the institutional driving hub for Indo-Pacific multilateral frameworks (RCEP, EAS, ARF)."
      ],
      pakistanRole: {
        status: "Sectoral Dialogue Partner & ARF Member",
        joinedDate: "Sectoral Partner in 1993; ARF Member in 2004",
        voteContext: "Acceded to the Treaty of Amity and Cooperation in Southeast Asia (TAC) in July 2004 in Jakarta.",
        tenuresUNSC: "N/A",
        peacekeepingRecord: "Joint naval and counter-piracy operations with Southeast Asian navies.",
        historicMilestones: [
          { year: "1993", title: "Sectoral Dialogue Partnership", desc: "Pakistan was conferred Sectoral Dialogue Partner status at the 26th ASEAN Ministerial Meeting in Singapore." },
          { year: "2004", title: "Accession to TAC & ARF Admission", desc: "Foreign Minister Khurshid Mahmud Kasuri signed the Instrument of Accession to TAC in Jakarta, leading to Pakistan's admission into the ASEAN Regional Forum (ARF)." },
          { year: "2007", title: "Pakistan-Malaysia FTA (MPECA)", desc: "Signed first bilateral Comprehensive Economic Partnership Agreement with an ASEAN member state." },
          { year: "2012", title: "Pakistan-Indonesia PTA (PRPTA)", desc: "Signed Preferential Trade Agreement boosting bilateral trade, palm oil imports, and Pakistani citrus exports." },
          { year: "2023", title: "Vision East Asia Re-energized", desc: "Pakistan actively lobbied for upgrading relations from Sectoral to Full Dialogue Partner at the Jakarta ARF Ministerial." }
        ],
        strategicFootprint: "Under its 'Vision East Asia' foreign policy doctrine, Pakistan seeks comprehensive economic, technological, and security engagement with ASEAN. Although Pakistan has been a member of the ARF for two decades, achieving Full Dialogue Partnership remains a key diplomatic goal, hindered partly by Indian diplomatic counter-lobbying."
      },
      examThemes: {
        syllabusTopics: [
          "The 'ASEAN Way': Consensus-building, informal diplomacy, and the non-interference dilemma (Myanmar crisis)",
          "ASEAN Centrality in Indo-Pacific Geopolitics: Managing US-China competition",
          "Regional Comprehensive Economic Partnership (RCEP): World's largest free trade agreement",
          "South China Sea disputes: Code of Conduct (COC) negotiations vs Chinese maritime assertiveness",
          "Pakistan's 'Vision East Asia': Strategy, economic corridors, and hurdles to Full Dialogue Partner status"
        ],
        pastQuestions: [
          "Examine the concept of 'ASEAN Centrality'. How is ASEAN navigating great power rivalry between the US and China in the Indo-Pacific? (CSS IR 2024)",
          "Critically evaluate Pakistan's 'Vision East Asia' foreign policy doctrine and evaluate its prospects of securing Full Dialogue Partner status in ASEAN. (CSS Current Affairs 2023)",
          "Compare the institutional integration model of the European Union with the consensus-driven 'ASEAN Way'. (CSS IR 2021)"
        ],
        theoreticalLenses: [
          { theory: "Constructivism / Normative Institutionalism", application: "The 'ASEAN Way' generated a collective habit of consultation and identity transformation that pacified former adversaries." },
          { theory: "Realist Hedging", application: "ASEAN states utilize multilateralism to hedge between Washington's security umbrella and Beijing's economic dominance." },
          { theory: "Functionalism", application: "Starting with low-politics trade facilitation, ASEAN gradually constructed a three-pillared regional community." }
        ]
      },
      members: [
        { code: "ID", status: "full", year: 1967, note: "Founding member; Largest economy; Secretariat host (Jakarta)" },
        { code: "MY", status: "full", year: 1967, note: "Founding member (Bangkok Declaration)" },
        { code: "PH", status: "full", year: 1967, note: "Founding member" },
        { code: "SG", status: "full", year: 1967, note: "Founding member, Global financial hub" },
        { code: "TH", status: "full", year: 1967, note: "Founding member, Bangkok Declaration host" },
        { code: "BN", status: "full", year: 1984, note: "6th member (joined post-independence)" },
        { code: "VN", status: "full", year: 1995, note: "7th member; First communist state to join" },
        { code: "LA", status: "full", year: 1997, note: "8th member; 2024 ASEAN Chair" },
        { code: "MM", status: "full", year: 1997, note: "9th member; Subject to political dialogue restrictions since 2021" },
        { code: "KH", status: "full", year: 1999, note: "10th member; Home of current Sec-Gen Dr. Kao Kim Hourn" },
        { code: "TL", status: "observer", year: 2022, note: "Admitted in principle as 11th member; roadmap to full accession" },
        { code: "PK", status: "partner", year: 1993, note: "Sectoral Dialogue Partner (1993), ARF Member (2004), TAC Signatory" },
        { code: "CN", status: "partner", year: 1991, note: "Comprehensive Strategic Partner, RCEP signatory" },
        { code: "US", status: "partner", year: 1977, note: "Comprehensive Strategic Partner" },
        { code: "JP", status: "partner", year: 1973, note: "Comprehensive Strategic Partner" },
        { code: "IN", status: "partner", year: 1992, note: "Comprehensive Strategic Partner" }
      ],
      mcqs: [
        {
          q: "Which five countries signed the Bangkok Declaration on August 8, 1967 to establish ASEAN?",
          options: ["Indonesia, Malaysia, Philippines, Singapore, Thailand", "Vietnam, Laos, Cambodia, Thailand, Malaysia", "Indonesia, Malaysia, Brunei, Singapore, Vietnam", "Thailand, Myanmar, Singapore, Philippines, Indonesia"],
          correct: 0,
          explanation: "ASEAN was founded on August 8, 1967 by five foreign ministers representing Indonesia, Malaysia, the Philippines, Singapore, and Thailand."
        },
        {
          q: "Where is the permanent ASEAN Secretariat located?",
          options: ["Bangkok, Thailand", "Kuala Lumpur, Malaysia", "Singapore", "Jakarta, Indonesia"],
          correct: 3,
          explanation: "The ASEAN Secretariat is permanently headquartered in Jakarta, Indonesia."
        },
        {
          q: "In which year did Pakistan become a member of the ASEAN Regional Forum (ARF) after acceding to the TAC?",
          options: ["1993", "1998", "2004", "2010"],
          correct: 2,
          explanation: "Pakistan signed the Treaty of Amity and Cooperation in Southeast Asia (TAC) in July 2004 and was formally admitted into the ASEAN Regional Forum (ARF) in Jakarta."
        },
        {
          q: "Which nation was admitted 'in principle' in 2022 as the 11th member of ASEAN?",
          options: ["Papua New Guinea", "Timor-Leste", "Fiji", "Maldives"],
          correct: 1,
          explanation: "At the 2022 Phnom Penh Summit, ASEAN leaders agreed in principle to admit Timor-Leste as the 11th member, granting it observer status and an accession roadmap."
        },
        {
          q: "The decision-making ethos of ASEAN, emphasizing informal consensus and non-interference, is known as:",
          options: ["The Jakarta Consensus", "The ASEAN Way", "The Asian Compact", "Musyawarah Protocol"],
          correct: 1,
          explanation: "The 'ASEAN Way' describes the regional normative framework characterized by informality, consensus-building (Musyawarah & Mufakat), and non-interference in domestic affairs."
        }
      ]
    },

    {
      id: "brics",
      name: "BRICS / BRICS+",
      shortName: "BRICS",
      badge: "Emerging Markets & Global South Coalition",
      icon: "fa-cubes-stacked",
      colorTheme: "#b8860b",
      bannerGradient: "linear-gradient(135deg, #422006 0%, #b8860b 100%)",
      motto: "Strengthening Multilateralism for Just Global Development and Security",
      founded: "16 June 2009",
      foundingPlace: "Yekaterinburg, Russia",
      foundingTreaty: "Joint Statement of BRIC Countries Leaders (Johannesburg Declaration 2023 authorized BRICS+ expansion)",
      headquarters: {
        city: "Rotating Presidency",
        country: "Multilateral Secretariat",
        offices: ["New Development Bank - NDB (Shanghai, China)", "Contingent Reserve Arrangement - CRA"],
        lat: 31.2304,
        lng: 121.4737
      },
      leadership: {
        title: "President of the New Development Bank (NDB)",
        name: "Dilma Rousseff",
        nationality: "Brazil (Former President of Brazil)",
        term: "2023 – Present"
      },
      officialLanguages: ["English (Primary working language), Portuguese, Russian, Hindi, Chinese, Arabic"],
      stats: {
        membersCount: 9,
        observersCount: 0,
        partnersCount: 13,
        coverageText: "9 Full Members (BRICS+) representing ~45% of global population & ~36% of global GDP in PPP terms",
        budget: "NDB Authorized Capital $100 Billion; CRA Emergency Liquidity Fund $100 Billion"
      },
      organs: [
        {
          name: "Annual Leaders' Summit",
          icon: "fa-chess",
          role: "Supreme political authority setting global agenda and strategy",
          detail: "Hosted annually by rotating member presidency (e.g., Kazan, Russia in October 2024; Brazil in 2025)."
        },
        {
          name: "New Development Bank (NDB)",
          icon: "fa-building-columns",
          role: "Multilateral development bank financing infrastructure and sustainability",
          detail: "Headquartered in Shanghai, China ($100B authorized capital). President Dilma Rousseff. Provides non-conditional financing in local currencies."
        },
        {
          name: "Contingent Reserve Arrangement (CRA)",
          icon: "fa-vault",
          role: "Framework for the provision of liquidity support in balance-of-payments crises",
          detail: "$100 Billion contingency fund mitigating global liquidity pressures and insulating members from currency shocks."
        },
        {
          name: "BRICS Pay / Interbank Cooperation",
          icon: "fa-money-bill-transfer",
          role: "Decentralized cross-border payment messaging and local currency settlements",
          detail: "Initiative piloted at the Kazan 2024 summit to bypass SWIFT financial messaging and de-risk bilateral commerce."
        }
      ],
      mandates: [
        "Championing a multipolar global geopolitical architecture and reforming the Bretton Woods institutions (IMF & World Bank).",
        "Promoting de-dollarization through bilateral currency settlement mechanisms and local currency development financing.",
        "Strengthening South-South economic, technological, and infrastructure cooperation.",
        "Ensuring equitable representation for emerging economies in global governance."
      ],
      pakistanRole: {
        status: "Formal Applicant Nation (Applied November 2023)",
        joinedDate: "Applied 24 November 2023",
        voteContext: "Formal bid submitted under caretaker government; supported bilaterally by Russia and China.",
        tenuresUNSC: "N/A",
        peacekeepingRecord: "Active diplomatic engagement with New Development Bank (NDB) governance structures.",
        historicMilestones: [
          { year: "2001", title: "Goldman Sachs 'BRIC' Term", desc: "Economist Jim O'Neill coined 'BRIC' to describe the fast-growing economies of Brazil, Russia, India, and China." },
          { year: "2010", title: "South Africa Accession", desc: "South Africa joined in December 2010, transforming BRIC into BRICS." },
          { year: "2023", title: "BRICS+ Johannesburg Expansion", desc: "15th Summit invited 6 nations: Egypt, Ethiopia, Iran, UAE joined permanently on Jan 1, 2024 (Saudi Arabia deliberating; Argentina withdrew)." },
          { year: "2023", title: "Pakistan Submits Formal Bid", desc: "On November 24, 2023, Pakistan formally applied to join BRICS, counting on Russian and Chinese backing." },
          { year: "2024", title: "Kazan Summit & Partner Country Status", desc: "16th Summit in Kazan, Russia (Oct 22–24, 2024) established a new 'Partner Country' tier for 13 developing nations." }
        ],
        strategicFootprint: "Joining BRICS is a strategic foreign policy priority for Pakistan to prevent diplomatic encirclement, tap into New Development Bank (NDB) infrastructure lending, and insulate foreign trade from dollar volatility. While Russia and China have publicly welcomed Pakistan's application, India's implicit consensus veto remains the decisive hurdle. Pakistan actively courts 'Partner Country' status as a gateway to full membership."
      },
      examThemes: {
        syllabusTopics: [
          "The Rise of BRICS+: Challenging Western hegemony and the G7 economic dominance",
          "De-dollarization: The mechanics of BRICS Pay, local currency invoicing, and reserve diversification",
          "The New Development Bank (NDB) vs the World Bank: Structural conditionality vs developmental sovereignty",
          "Pakistan's BRICS membership application: Geopolitical stakes, Chinese/Russian support, and Indian resistance",
          "Internal fault lines: Democratic vs authoritarian members and Indo-Chinese border rivalry within the bloc"
        ],
        pastQuestions: [
          "Analyze the geopolitical and economic implications of the expansion of BRICS (BRICS+) for the Global South and the Bretton Woods architecture. (CSS IR 2024)",
          "Evaluate Pakistan's formal application for BRICS membership. What are the key strategic opportunities and diplomatic bottlenecks? (CSS Current Affairs 2024)",
          "Discuss the prospects of 'de-dollarization' spearheaded by the BRICS coalition. Is the demise of US dollar hegemony realistic in the near future? (CSS IR 2023)"
        ],
        theoreticalLenses: [
          { theory: "Power Transition Theory (Organski)", application: "Rising revisionist powers (BRICS) seek to reform international financial institutions established by the dominant hegemon (US)." },
          { theory: "Dependency Theory / World Systems", application: "BRICS functions as a semi-periphery coalition challenging the core capitalist extractive financial hierarchy." },
          { theory: "Neoliberal Institutionalism", application: "Establishing the NDB and CRA creates alternative multilateral institutions lowering vulnerability to external sanctions." }
        ]
      },
      members: [
        { code: "BR", status: "full", year: 2009, note: "Founding member (Yekaterinburg 2009); NDB President home" },
        { code: "RU", status: "full", year: 2009, note: "Founding member; 2024 Kazan Summit host" },
        { code: "IN", status: "full", year: 2009, note: "Founding member; exercises consensus power on membership" },
        { code: "CN", status: "full", year: 2009, note: "Founding member; NDB HQ host (Shanghai); Economic powerhouse" },
        { code: "ZA", status: "full", year: 2010, note: "Joined Dec 2010 (Sanya 2011 first summit); Johannesburg host" },
        { code: "EG", status: "full", year: 2024, note: "Full member effective 1 Jan 2024 (Suez Canal strategic gatekeeper)" },
        { code: "ET", status: "full", year: 2024, note: "Full member effective 1 Jan 2024 (African Union seat)" },
        { code: "IR", status: "full", year: 2024, note: "Full member effective 1 Jan 2024 (Energy giant)" },
        { code: "AE", status: "full", year: 2024, note: "Full member effective 1 Jan 2024 (Global financial hub)" },
        { code: "SA", status: "partner", year: 2024, note: "Invited to join; participating in BRICS activities" },
        { code: "PK", status: "partner", year: 2023, note: "Formal applicant (Applied Nov 2023 with Sino-Russian backing)" },
        { code: "TR", status: "partner", year: 2024, note: "Formally applied for membership (Kazan 2024 attendee)" },
        { code: "DZ", status: "partner", year: 2024, note: "NDB shareholder / partner nation" }
      ],
      mcqs: [
        {
          q: "Which economist coined the acronym 'BRIC' in a 2001 Goldman Sachs investment paper?",
          options: ["Joseph Stiglitz", "Jim O'Neill", "Paul Krugman", "Jeffrey Sachs"],
          correct: 1,
          explanation: "British economist Jim O'Neill coined the term 'BRIC' in 2001 in his paper 'Building Better Global Economic BRICs' while serving as chief economist at Goldman Sachs."
        },
        {
          q: "Which nation joined the original BRIC group in December 2010, transforming it into BRICS?",
          options: ["South Korea", "South Africa", "Saudi Arabia", "Singapore"],
          correct: 1,
          explanation: "South Africa was officially invited to join the group on December 24, 2010, attending its first leaders' summit in Sanya, China, in April 2011."
        },
        {
          q: "Which four nations officially became full members of BRICS on January 1, 2024?",
          options: ["Egypt, Ethiopia, Iran, United Arab Emirates", "Saudi Arabia, Argentina, Nigeria, Turkey", "Pakistan, Indonesia, Bangladesh, Vietnam", "Algeria, Mexico, Kazakhstan, Qatar"],
          correct: 0,
          explanation: "Egypt, Ethiopia, Iran, and the United Arab Emirates officially joined BRICS on January 1, 2024. (Saudi Arabia was invited and deliberating, while Argentina withdrew)."
        },
        {
          q: "Where is the permanent headquarters of the New Development Bank (NDB) located?",
          options: ["Moscow, Russia", "Brasília, Brazil", "New Delhi, India", "Shanghai, China"],
          correct: 3,
          explanation: "The New Development Bank (NDB) was established by BRICS in 2014 and is permanently headquartered in Shanghai, China."
        },
        {
          q: "In which month and year did Pakistan formally submit its official application to join the BRICS coalition?",
          options: ["August 2023", "November 2023", "January 2024", "October 2024"],
          correct: 1,
          explanation: "Pakistan formally applied for BRICS membership on November 24, 2023, citing its desire to collaborate with emerging economies and reform global governance."
        }
      ]
    },

    {
      id: "imf",
      name: "International Monetary Fund",
      shortName: "IMF",
      badge: "Bretton Woods Macroeconomic Stabilizer",
      icon: "fa-landmark",
      colorTheme: "#800020",
      bannerGradient: "linear-gradient(135deg, #3d000f 0%, #800020 100%)",
      motto: "Promoting global financial stability and monetary cooperation",
      founded: "27 December 1945",
      foundingPlace: "Bretton Woods, New Hampshire, United States",
      foundingTreaty: "Articles of Agreement of the International Monetary Fund (Adopted at Bretton Woods Conference July 1944)",
      headquarters: {
        city: "Washington, D.C.",
        country: "United States",
        offices: ["IMF Resident Representative Office in Islamabad, Pakistan"],
        lat: 38.8997,
        lng: -77.0427
      },
      leadership: {
        title: "Managing Director",
        name: "Kristalina Georgieva",
        nationality: "Bulgaria",
        term: "2019 – Present (Reappointed for second 5-year term Oct 2024–2029)"
      },
      officialLanguages: ["English (Primary working language)"],
      stats: {
        membersCount: 190,
        observersCount: 0,
        partnersCount: 0,
        coverageText: "190 Sovereign Member States (Almost universal global membership)",
        budget: "Total Lending Capacity ~$1 Trillion (SDR 713 Billion)"
      },
      organs: [
        {
          name: "Board of Governors",
          icon: "fa-users",
          role: "Highest decision-making authority of the IMF",
          detail: "Composed of one Governor and one Alternate Governor from each member country (usually Finance Minister or Central Bank Governor e.g. State Bank of Pakistan Governor)."
        },
        {
          name: "International Monetary & Financial Committee (IMFC)",
          icon: "fa-comments-dollar",
          role: "Ministerial advisory committee guiding the Board of Governors",
          detail: "24 members reflecting the composition of the Executive Board. Advises on global economic surveillance and strategic management of the international monetary system."
        },
        {
          name: "Executive Board",
          icon: "fa-table-columns",
          role: "Day-to-day operational body approving loans and surveillance reports",
          detail: "24 Executive Directors representing 190 countries (single-country seats for US, Japan, China, Germany, France, UK, Saudi Arabia). Decides Article IV reviews and loan programs."
        },
        {
          name: "Special Drawing Rights (SDR)",
          icon: "fa-coins",
          role: "International reserve asset created by the IMF in 1969",
          detail: "Basket value determined by 5 major currencies: US Dollar (43.38%), Euro (29.31%), Chinese Renminbi (12.28%), Japanese Yen (7.59%), British Pound (7.44%)."
        }
      ],
      mandates: [
        "Economic Surveillance: Monitoring national macroeconomic policies and global financial stability (Article IV Consultations).",
        "Financial Assistance: Providing balance-of-payments financing to countries experiencing currency crises.",
        "Capacity Development: Providing technical assistance and policy training to central banks and finance ministries.",
        "Quota and Voting Power: Based on economic weight; US holds ~16.5% voting share, exercising effective veto over major charter decisions (85% threshold)."
      ],
      pakistanRole: {
        status: "Member State & 24-time Program Recipient",
        joinedDate: "11 July 1950",
        voteContext: "Joined IMF and World Bank simultaneously during Prime Minister Liaquat Ali Khan's tenure.",
        tenuresUNSC: "N/A",
        peacekeepingRecord: "Recipient of 24 distinct IMF financial arrangements since 1958.",
        historicMilestones: [
          { year: "1958", title: "First IMF Stand-By Arrangement", desc: "President Ayub Khan entered Pakistan's first Stand-By Arrangement (SBA) for SDR 25 Million." },
          { year: "1988", title: "Structural Adjustment Facility (SAF)", desc: "Inaugurated structural conditionality era encompassing privatization, trade liberalization, and tariff reductions." },
          { year: "2019", title: "$6B Extended Fund Facility (EFF)", desc: "39-month EFF implemented under PTI administration introducing market-determined exchange rate and autonomy for State Bank of Pakistan (SBP)." },
          { year: "2023", title: "$3B Stand-By Arrangement (SBA)", desc: "9-month SBA negotiated in June 2023 averted imminent sovereign default and stabilized foreign exchange reserves." },
          { year: "2024", title: "Historic $7B Extended Fund Facility", desc: "On September 25, 2024, the IMF Executive Board approved a 37-month, $7 Billion EFF with strict benchmarks on agricultural income taxation, retailer tax net, energy tariff adjustments, and SOE privatization." }
        ],
        strategicFootprint: "Pakistan is among the IMF's most frequent borrower nations ('perpetual patient'). IMF programs have dictated key economic reforms in Pakistan: fiscal deficit reduction, ending energy subsidies (power/gas circular debt), broad-based sales tax, and market-determined exchange rates. While IMF bailouts avert sovereign defaults, their stabilization conditionalities trigger fierce domestic debates regarding inflation, cost of living, and economic sovereignty."
      },
      examThemes: {
        syllabusTopics: [
          "The Anatomy of Pakistan's 24 IMF Programs: Why does stabilization fail to translate into sustainable growth?",
          "Structural Conditionalities: Broadening tax net (Tajir Dost scheme, agri-income tax), energy tariff rebasing, and SOE privatization",
          "Governance & Quota Reforms: The 16th General Review of Quotas and the Global South's demand for democratic voting shares",
          "The Washington Consensus vs Economic Sovereignty: The social cost of austerity",
          "Special Drawing Rights (SDRs): Allocation mechanics and reserve augmentation during balance of payments shocks"
        ],
        pastQuestions: [
          "Critically evaluate Pakistan's reliance on IMF bailouts. Analyze the structural conditionalities of the 2024 $7 Billion Extended Fund Facility. (CSS Current Affairs 2025)",
          "Discuss the IMF's quota-based voting structure. Does the US veto hinder equitable representation for developing economies? (CSS IR 2022)",
          "Examine the socio-economic impact of IMF-mandated structural adjustment programs on developing economies like Pakistan. (CSS Economics 2023)"
        ],
        theoreticalLenses: [
          { theory: "Neoliberal Institutionalism", application: "The IMF acts as an international lender of last resort, mitigating moral hazard and stabilizing international finance." },
          { theory: "Dependency Theory", application: "IMF conditionalities entrench structural dependency, forcing periphery nations into debt traps serving core Western financial interests." },
          { theory: "Public Choice Theory", application: "Recurrent bailouts create moral hazard where domestic political elites postpone genuine structural tax reforms, relying on external bailouts." }
        ]
      },
      members: [
        { code: "PK", status: "full", year: 1950, note: "Joined 11 July 1950; 24 programs; $7B EFF approved Sep 2024" },
        { code: "US", status: "full", year: 1945, note: "Founding member; Largest shareholder (16.5% voting share, unilateral veto)" },
        { code: "JP", status: "full", year: 1952, note: "Second largest shareholder (6.14% voting power)" },
        { code: "CN", status: "full", year: 1945, note: "Third largest shareholder (6.08% voting power; advocating quota increase)" },
        { code: "DE", status: "full", year: 1952, note: "Fourth largest shareholder" },
        { code: "FR", status: "full", year: 1945, note: "Founding member; traditional Managing Director source" },
        { code: "GB", status: "full", year: 1945, note: "Founding member (John Maynard Keynes was British architect)" },
        { code: "IN", status: "full", year: 1945, note: "Founding member (2.63% voting power)" },
        { code: "SA", status: "full", year: 1957, note: "Holds single-country Executive Board seat" },
        { code: "EG", status: "full", year: 1945, note: "Major recipient ($8B program expanded 2024)" },
        { code: "AR", status: "full", year: 1956, note: "Largest historical debtor of the IMF ($44B debt)" }
      ],
      mcqs: [
        {
          q: "In which year did Pakistan officially join the International Monetary Fund (IMF)?",
          options: ["1947", "1950", "1958", "1965"],
          correct: 1,
          explanation: "Pakistan joined the IMF and World Bank on July 11, 1950 during the prime ministership of Liaquat Ali Khan."
        },
        {
          q: "What amount was approved by the IMF Executive Board for Pakistan's 37-month Extended Fund Facility (EFF) in September 2024?",
          options: ["$3 Billion", "$6 Billion", "$7 Billion", "$10 Billion"],
          correct: 2,
          explanation: "On September 25, 2024, the IMF Executive Board approved a 37-month, $7 Billion Extended Fund Facility (EFF) to support Pakistan's economic stability."
        },
        {
          q: "What percentage of voting share does the United States hold in the IMF, granting it an effective unilateral veto over major charter decisions?",
          options: ["~10.5%", "~16.5%", "~25.0%", "~33.3%"],
          correct: 1,
          explanation: "The US holds approximately 16.5% of the total voting power. Since major institutional changes require an 85% supermajority, the US holds a unique unilateral veto."
        },
        {
          q: "Which of the following currencies was added to the IMF's Special Drawing Rights (SDR) basket in October 2016?",
          options: ["Indian Rupee", "Chinese Renminbi (Yuan)", "Russian Ruble", "Swiss Franc"],
          correct: 1,
          explanation: "The Chinese Renminbi (Yuan) was officially included in the SDR basket on October 1, 2016, joining the US Dollar, Euro, Japanese Yen, and British Pound."
        },
        {
          q: "Who currently serves as the Managing Director of the International Monetary Fund (IMF)?",
          options: ["Christine Lagarde", "Kristalina Georgieva", "Gita Gopinath", "Ngozi Okonjo-Iweala"],
          correct: 1,
          explanation: "Bulgarian economist Kristalina Georgieva has served as Managing Director of the IMF since October 2019 and was reappointed for a second five-year term in 2024."
        }
      ]
    },

    {
      id: "world-bank",
      name: "World Bank Group",
      shortName: "WBG",
      badge: "Global Development & Poverty Alleviation Institution",
      icon: "fa-building-columns",
      colorTheme: "#002244",
      bannerGradient: "linear-gradient(135deg, #001122 0%, #002244 100%)",
      motto: "To create a world free of poverty on a livable planet",
      founded: "July 1944",
      foundingPlace: "Bretton Woods, New Hampshire, United States",
      foundingTreaty: "IBRD Articles of Agreement (Opened for business June 25, 1946)",
      headquarters: {
        city: "Washington, D.C.",
        country: "United States",
        offices: ["World Bank Pakistan Country Office (Islamabad, Pakistan)"],
        lat: 38.8988,
        lng: -77.0428
      },
      leadership: {
        title: "President of the World Bank Group",
        name: "Ajay Banga",
        nationality: "United States (Indian-born)",
        term: "Assumed office 2 June 2023 (5-year term)"
      },
      officialLanguages: ["English (Primary working language), Arabic, Chinese, French, Russian, Spanish"],
      stats: {
        membersCount: 189,
        observersCount: 0,
        partnersCount: 0,
        coverageText: "189 Member Countries in IBRD; 174 Member Countries in IDA",
        budget: "Annual loan commitments >$70 Billion across developing nations"
      },
      organs: [
        {
          name: "1. IBRD (Reconstruction & Development)",
          icon: "fa-landmark",
          role: "Lends to middle-income and creditworthy low-income governments",
          detail: "189 member countries. Established 1944. Issues AAA-rated bonds in global capital markets to fund infrastructure, energy, and institutional modernization."
        },
        {
          name: "2. IDA (International Development Association)",
          icon: "fa-hand-holding-dollar",
          role: "Concessional loans ('credits') and grants to the poorest countries",
          detail: "174 member countries. Established 1960. Provides zero or ultra-low interest loans with 30–40 year maturities. Pakistan is a major historical recipient."
        },
        {
          name: "3. IFC (International Finance Corporation)",
          icon: "fa-chart-line",
          role: "Private sector development arm of the World Bank Group",
          detail: "Established 1956. Invests directly in private enterprises, mobilizes private capital, and advises businesses on emerging market growth."
        },
        {
          name: "4. MIGA (Multilateral Investment Guarantee Agency)",
          icon: "fa-shield-halved",
          role: "Political risk insurance and credit enhancement guarantees",
          detail: "Established 1988. Insures cross-border private investors and lenders against non-commercial risks like expropriation, war, and currency restrictions."
        },
        {
          name: "5. ICSID (Settlement of Investment Disputes)",
          icon: "fa-gavel",
          role: "International arbitration facility for investor-state dispute settlement",
          detail: "Established 1966. Arbitrates disputes between foreign investors and sovereign host states (e.g. Reko Diq copper-gold mining arbitration involving Pakistan)."
        }
      ],
      mandates: [
        "Ending extreme poverty by reducing the share of global population living on less than $2.15 a day.",
        "Promoting shared prosperity by fostering the income growth of the bottom 40% in every developing country.",
        "Financing long-term structural development projects: dams, highways, irrigation, schools, healthcare, and green energy.",
        "Indus Waters Treaty Custodian: Mediated the landmark 1960 treaty between Pakistan and India and manages its dispute resolution mechanism."
      ],
      pakistanRole: {
        status: "Member State & Major Recipient of IDA/IBRD Financing",
        joinedDate: "11 July 1950",
        voteContext: "Joined simultaneously with the IMF on July 11, 1950.",
        tenuresUNSC: "N/A",
        peacekeepingRecord: "World Bank brokered the historic Indus Waters Treaty (IWT) on September 19, 1960 in Karachi.",
        historicMilestones: [
          { year: "1960", title: "Indus Waters Treaty (IWT) Brokerage", desc: "World Bank Vice President W.A.B. Iliff mediated and signed the landmark IWT between President Ayub Khan and PM Jawaharlal Nehru, resolving transboundary river water rights." },
          { year: "1960-1976", title: "Indus Basin Replacement Works", desc: "Administered the multi-donor Indus Basin Development Fund ($1.2B) financing Mangla Dam, Tarbela Dam, and eight inter-river link canals." },
          { year: "2014-Present", title: "Dasu Hydropower Stage-I Financing", desc: "World Bank committed over $1 Billion in financing for the 4,320 MW Dasu Hydropower project on the Indus River." },
          { year: "2019", title: "Reko Diq ICSID Award Settlement", desc: "ICSID had awarded a $5.8B penalty against Pakistan in the Tethyan Copper dispute, successfully settled out-of-court in 2022 with Barrick Gold reconstituting the project." },
          { year: "2022-2024", title: "Post-Flood Reconstruction Support", desc: "Pledged over $2 Billion for post-2022 climate flood reconstruction in Sindh and Balochistan (housing, schools, and climate-resilient water infrastructure)." }
        ],
        strategicFootprint: "The World Bank is Pakistan's premier multilateral developmental partner. Beyond financing megaprojects like Tarbela, Mangla, and Dasu, the World Bank holds a unique role as a signatory and neutral dispute facilitator under the Indus Waters Treaty (IWT). In 2022, the Bank appointed a Neutral Expert and a Court of Arbitration chairman to adjudicate Pakistan's objections against India's Kishanganga and Ratle hydroelectric projects."
      },
      examThemes: {
        syllabusTopics: [
          "The World Bank's Five Institutions: Differences in mandate between IBRD, IDA, IFC, MIGA, and ICSID",
          "The Indus Waters Treaty (1960): World Bank's mediation role, treaty structure, and the Kishanganga/Ratle dispute",
          "Project financing vs Balance-of-payments stabilization: Contrasting the World Bank and the IMF",
          "The Reko Diq case and ICSID: Investor-State Dispute Settlement (ISDS) risks for developing countries",
          "The New Climate Mission: Ajay Banga's vision of 'poverty alleviation on a livable planet' and loss/damage finance"
        ],
        pastQuestions: [
          "Examine the historic role of the World Bank in negotiating and guaranteeing the Indus Waters Treaty (1960). Discuss contemporary challenges to the treaty. (CSS International Law / IR 2024)",
          "Compare and contrast the operational mandates, lending mechanisms, and conditionalities of the IMF and the World Bank Group. (CSS Economics 2023)",
          "Discuss the significance of the ICSID dispute settlement mechanism for foreign direct investment in Pakistan with reference to the Reko Diq settlement. (CSS Mercantile Law / IR 2022)"
        ],
        theoreticalLenses: [
          { theory: "Modernization Theory", application: "World Bank infrastructure investments (dams, electrification, transport) are viewed as essential stages for developing economies to achieve economic 'take-off'." },
          { theory: "Environmental Political Economy", application: "Scrutinizes the transition from funding large carbon/hydrological interventions to climate-resilient green energy and social protection." },
          { theory: "Institutional Regime Theory", application: "The World Bank serves as a durable dispute-adjudication regime in transboundary river basin governance (Indus River Basin)." }
        ]
      },
      members: [
        { code: "PK", status: "full", year: 1950, note: "Joined 11 July 1950; IWT 1960 signatory partner; Tarbela/Dasu beneficiary" },
        { code: "US", status: "full", year: 1944, note: "Largest shareholder; Traditionally nominates the World Bank President" },
        { code: "JP", status: "full", year: 1952, note: "Second largest shareholder" },
        { code: "CN", status: "full", year: 1945, note: "Third largest shareholder" },
        { code: "DE", status: "full", year: 1952, note: "Fourth largest shareholder" },
        { code: "GB", status: "full", year: 1944, note: "Founding member" },
        { code: "FR", status: "full", year: 1944, note: "Founding member" },
        { code: "IN", status: "full", year: 1944, note: "Founding member; IWT 1960 co-signatory" }
      ],
      mcqs: [
        {
          q: "Which institution of the World Bank Group provides interest-free loans ('credits') and grants to the poorest developing countries?",
          options: ["IBRD", "IDA", "IFC", "MIGA"],
          correct: 1,
          explanation: "The International Development Association (IDA), established in 1960, provides concessional interest-free credits and grants to the world's 75 poorest nations."
        },
        {
          q: "Who was appointed as the President of the World Bank Group in June 2023?",
          options: ["David Malpass", "Jim Yong Kim", "Ajay Banga", "Robert Zoellick"],
          correct: 2,
          explanation: "Indian-born American business executive Ajay Banga took office as the 14th President of the World Bank Group on June 2, 2023."
        },
        {
          q: "In which year was the historic Indus Waters Treaty (IWT) brokered by the World Bank signed between Pakistan and India?",
          options: ["1948", "1954", "1960", "1965"],
          correct: 2,
          explanation: "The Indus Waters Treaty was signed on September 19, 1960 in Karachi by President Ayub Khan, Prime Minister Jawaharlal Nehru, and World Bank Vice President W.A.B. Iliff."
        },
        {
          q: "Which World Bank Group affiliate arbitrated the international investment dispute regarding the Reko Diq copper-gold project?",
          options: ["MIGA", "IFC", "ICSID", "ICJ"],
          correct: 2,
          explanation: "The International Centre for Settlement of Investment Disputes (ICSID) arbitrated the legal dispute between the Tethyan Copper Company and Pakistan."
        },
        {
          q: "What is the primary role of the Multilateral Investment Guarantee Agency (MIGA)?",
          options: ["Providing emergency food aid", "Insuring cross-border private investors against political risk", "Printing regional currencies", "Auditing central bank reserves"],
          correct: 1,
          explanation: "MIGA provides political risk insurance (guarantees) to private sector investors and lenders against non-commercial risks such as war, expropriation, and breach of contract."
        }
      ]
    }
  ];

  // 3. Pre-Compiled Comparison Matrices
  const COMPARISONS = {
    "nato-vs-sco": {
      title: "NATO vs. SCO: Transatlantic Alliance vs. Eurasian Security",
      badge: "Collective Defense vs. Multipolar Coordination",
      analysis: "While NATO is a tightly integrated military alliance anchored by a binding mutual assistance pact (Article 5) and integrated command structure under US leadership, the SCO functions as a consensual intergovernmental platform prioritizing internal state security against the 'Three Evils' (Terrorism, Separatism, Extremism) without a mutual defense clause.",
      dimensions: [
        { metric: "Primary Mandate", orgA: "Article 5 Collective Defense against external aggression", orgB: "Countering 'Three Evils' (Terrorism, Separatism, Extremism) & connectivity" },
        { metric: "Integrated Military Command", orgA: "Yes (ACO / SHAPE commanded by SACEUR in Belgium)", orgB: "No (Coordinates drills via Tashkent RATS; no joint standing force)" },
        { metric: "Founding Year & Treaty", orgA: "1949 (Washington Treaty)", orgB: "2001 (Shanghai Declaration / St. Petersburg Charter)" },
        { metric: "Members Count (2024)", orgA: "32 sovereign nations (US, Europe, Finland, Sweden)", orgB: "10 member states (China, Russia, CARs, Pakistan, India, Iran, Belarus)" },
        { metric: "Decision-Making Rule", orgA: "Consensus in North Atlantic Council", orgB: "Consensus in Council of Heads of State" },
        { metric: "Global Population Share", orgA: "~12% of world population", orgB: "~42% of world population" },
        { metric: "Pakistan's Status", orgA: "Major Non-NATO Ally (MNNA since 2004; GLOC supply partner)", orgB: "Full Member State (Admitted 2017; Hosted CHG Summit Oct 2024)" },
        { metric: "CSS Exam Key Debate", orgA: "Transatlantic burden-sharing, out-of-area expansion, Russian deterrence", orgB: "Eurasian multipolarity, non-Western institutional architecture, CPEC gateway" }
      ]
    },

    "saarc-vs-asean": {
      title: "SAARC vs. ASEAN: Divergent Paths of Asian Regionalism",
      badge: "South Asian Paralysis vs. Southeast Asian Integration",
      analysis: "ASEAN represents one of the world's most successful developing regional integration models, achieving a $3.8T Economic Community and ~23% intra-regional trade through consensus and the 'ASEAN Way'. Conversely, SAARC remains paralyzed with <5% intra-regional trade due to overwhelming Indo-Pakistani geopolitical rivalry and the boycott of summits.",
      dimensions: [
        { metric: "Founding Year & Charter", orgA: "1985 (Dhaka Charter, Dhaka Summit)", orgB: "1967 (Bangkok Declaration, Bangkok)" },
        { metric: "Headquarters", orgA: "Kathmandu, Nepal", orgB: "Jakarta, Indonesia" },
        { metric: "Intra-Regional Trade", orgA: "<5% of total trade (lowest in the developing world)", orgB: "~22%–25% of total regional trade" },
        { metric: "Bilateral Issues Clause", orgA: "Article X explicitly excludes bilateral & contentious issues", orgB: "Treaty of Amity and Cooperation (TAC) emphasizes peaceful dispute settlement" },
        { metric: "Economic Community", orgA: "SAFTA (stalled by extensive sensitive lists & non-tariff barriers)", orgB: "AEC (ASEAN Economic Community) + RCEP trade megabloc" },
        { metric: "Summit Cadence", orgA: "Moribund; no summit held since 2014 Kathmandu (19th summit boycotted)", orgB: "Meets semi-annually without disruption" },
        { metric: "Pakistan's Status", orgA: "Founding Member State (Hosted 1988 & 2004 Summits)", orgB: "Sectoral Dialogue Partner (1993) & ARF Member (2004); pursues Full Partner" },
        { metric: "CSS Exam Key Debate", orgA: "Indo-Pak asymmetry, hegemony deficit, and Indian detour to BIMSTEC", orgB: "ASEAN Centrality amidst US-China rivalry, Myanmar crisis, and South China Sea" }
      ]
    },

    "imf-vs-wb": {
      title: "IMF vs. World Bank: The Bretton Woods Twins Compared",
      badge: "Macroeconomic Stabilization vs. Long-term Development",
      analysis: "Conceived together at the Bretton Woods Conference in 1944, the IMF functions like an emergency central banker providing short-to-medium term balance-of-payments financing with strict fiscal conditionalities. In contrast, the World Bank functions like an investment bank funding long-term physical, human, and social infrastructure projects.",
      dimensions: [
        { metric: "Primary Mission", orgA: "Balance-of-payments crises & macroeconomic currency stability", orgB: "Poverty alleviation, infrastructure, and sustainable development" },
        { metric: "Loan Duration", orgA: "Short to medium term (typically 1 to 4 years; EFF/SBA)", orgB: "Long term (typically 15 to 40 years; IDA zero-interest credits)" },
        { metric: "Core Institution Units", orgA: "IMF (SDR Quotas, General Resources Account, PRGT)", orgB: "Five institutions: IBRD, IDA, IFC, MIGA, ICSID" },
        { metric: "Traditional Leadership", orgA: "Managing Director is European (Bulgarian Kristalina Georgieva)", orgB: "President is nominated by the United States (Ajay Banga)" },
        { metric: "Voting Mechanism", orgA: "Quota-weighted (US holds ~16.5% vote, giving it unilateral veto)", orgB: "Capital-subscription weighted (US is largest shareholder ~15.8%)" },
        { metric: "Pakistan's Historic Engagement", orgA: "24 bailout programs since 1958; latest $7B EFF approved Sep 2024", orgB: "Mediated Indus Waters Treaty 1960; financed Mangla, Tarbela, Dasu" },
        { metric: "CSS Exam Key Debate", orgA: "Washington Consensus austerity, inflation, and tax base conditionalities", orgB: "Climate-resilient infrastructure financing and transboundary water governance" }
      ]
    },

    "un-vs-oic": {
      title: "UN vs. OIC: Universal Multilateralism vs. Pan-Islamic Forum",
      badge: "Universal Sovereign Equality vs. Civilizational Solidarity",
      analysis: "The UN is a universal collective security organization comprising 193 sovereign states governed by the binding enforcement authority of the Security Council under Chapter VII. The OIC is the world's second-largest intergovernmental body comprising 57 Muslim-majority states, functioning as a normative forum without standing military enforcement mechanisms.",
      dimensions: [
        { metric: "Founding Year & Cause", orgA: "1945 (San Francisco; aftermath of World War II)", orgB: "1969 (Rabat; aftermath of Al-Aqsa Mosque arson attack)" },
        { metric: "Membership Scope", orgA: "Universal (193 sovereign states across the globe)", orgB: "57 Muslim-majority states across 4 continents" },
        { metric: "Binding Enforcement", orgA: "Yes, Security Council Chapter VII resolutions are legally binding", orgB: "No, resolutions are politically normative without sanctions power" },
        { metric: "Judicial Organ", orgA: "International Court of Justice (ICJ, The Hague)", orgB: "Independent Permanent Human Rights Commission (IPHRC) - advisory" },
        { metric: "Headquarters", orgA: "New York City, United States", orgB: "Jeddah, Saudi Arabia (pending liberation of Jerusalem)" },
        { metric: "Pakistan's Leadership", orgA: "8 times elected to UNSC; UNGA President Zafarullah Khan (1962)", orgB: "Permanent host of COMSTECH; 1974 Lahore Summit; Sec-Gen Pirzada" },
        { metric: "CSS Exam Key Debate", orgA: "P5 veto paralysis, Security Council reform, and selective intervention", orgB: "Intra-Ummah political divisions (Saudi-Iran), and efficacy on Palestine & Kashmir" }
      ]
    },

    "brics-vs-g7": {
      title: "BRICS+ vs. G7: Emerging South vs. Traditional Western Hegemony",
      badge: "Multipolar Revisionism vs. Rules-Based Order",
      analysis: "The G7 (US, Japan, Germany, UK, France, Italy, Canada) represents the traditional advanced industrialized democracies that established the post-WWII liberal order. BRICS+ (Brazil, Russia, India, China, South Africa, Egypt, Ethiopia, Iran, UAE) represents the demographic and industrial rise of the Global South, advocating for de-dollarization and non-Western financial rails.",
      dimensions: [
        { metric: "Founding Decades", orgA: "BRICS (2009/2010; expanded to BRICS+ in 2024)", orgB: "G7 (1975 Library Group post-oil shock; expanded 1976)" },
        { metric: "Global GDP Share (PPP)", orgA: "~36% of global GDP (surpassing G7)", orgB: "~30% of global GDP (declining relative share)" },
        { metric: "Share of World Population", orgA: "~45% of the world's population", orgB: "~10% of the world's population" },
        { metric: "Financial Counterparts", orgA: "New Development Bank (NDB) & Contingent Reserve Arrangement (CRA)", orgB: "IMF, World Bank, and G7 central bank liquidity swap lines" },
        { metric: "Currency Strategy", orgA: "De-dollarization, local currency trade clearing, and BRICS Pay", orgB: "US Dollar dominance and SWIFT international messaging primacy" },
        { metric: "Ideological Alignment", orgA: "Pluralistic (democracies, monarchies, and socialist states)", orgB: "Homogeneous advanced liberal market democracies" },
        { metric: "Pakistan's Posture", orgA: "Formally applied for membership in Nov 2023 with Sino-Russian support", orgB: "Maintains vital bilateral trade with US and EU (GSP+ beneficiary)" }
      ]
    }
  };

  // Export to Global Window and Node.js module
  const ORG_EXPORT = {
    ORGANIZATIONS,
    COUNTRY_COORDINATES,
    COMPARISONS
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ORG_EXPORT;
  }
  if (typeof window !== 'undefined') {
    window.ORG_DATA = ORG_EXPORT;
    window.ORGANIZATIONS_DATA = ORG_EXPORT;
  }

})(typeof window !== 'undefined' ? window : this);