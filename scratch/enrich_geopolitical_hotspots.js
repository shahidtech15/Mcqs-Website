const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'frontend', 'js', 'data_geopolitical_hotspots.js');
const data = require(dataFile);

const extraHotspots = [
  // Conflicts
  {
    id: "myanmar-civil-war",
    name: "Myanmar Civil War (Operation 1027)",
    category: "conflicts",
    status: "Active Armed Conflict",
    statusColor: "#dc2626",
    icon: "fa-person-rifle",
    color: "#dc2626",
    lat: 19.76,
    lng: 96.07,
    region: "Southeast Asia",
    continents: "Asia",
    partiesInvolved: ["State Administration Council (SAC / Military Junta)", "National Unity Government (NUG / PDF)", "Three Brotherhood Alliance (MNDAA, TNLA, AA)", "China (Border mediator)"],
    summary: "Widespread civil conflict ignited by the February 1, 2021 military coup ousting Aung San Suu Kyi. Escalated dramatically in late 2023 with 'Operation 1027', where ethnic armed organizations captured strategic border trade gates with China and isolated the junta in Naypyidaw.",
    strategicSignificance: "Crucial strategic corridor for China's Indian Ocean maritime access (China-Myanmar Economic Corridor - CMEC, Kyaukpyu deep-sea port, and oil/gas pipelines bypassing the Strait of Malacca). Epicenter of cross-border telecom scam centers and illicit drug trade in the Golden Triangle.",
    keyFlashpoints: [
      "Military coup d'état by Senior General Min Aung Hlaing (Feb 2021).",
      "Launch of Operation 1027 by Three Brotherhood Alliance in northern Shan State (October 2023).",
      "Fall of Lashio (headquarters of the northeastern military command) to MNDAA (August 2024).",
      "Arakan Army advances capturing major parts of Rakhine State."
    ],
    internationalLawAndTreaties: [
      "Application of the 1948 Genocide Convention case before the ICJ (The Gambia v. Myanmar regarding Rohingya).",
      "ASEAN Five-Point Consensus (largely deadlocked)."
    ],
    cssExamAnalysis: "Demonstrates how fragmented ethnic resistance movements can overwhelm a conventional military apparatus through asymmetric drone warfare. Highlights Chinese border stability calculations and ASEAN diplomatic paralysis.",
    relatedEssayLink: "global-security-conflict-essays.html"
  },
  {
    id: "drc-kivu-conflict",
    name: "DR Congo / Kivu Conflict & Critical Minerals",
    category: "conflicts",
    status: "Active Conflict / Proxy War",
    statusColor: "#dc2626",
    icon: "fa-person-rifle",
    color: "#dc2626",
    lat: -1.68,
    lng: 29.23,
    region: "Central Africa / Great Lakes",
    continents: "Africa",
    partiesInvolved: ["DR Congo Armed Forces (FARDC)", "M23 Rebel Movement", "Rwanda (Alleged patron / RDF)", "SADC Regional Force (SAMIDRC)", "FDLR & Local Mai-Mai Militias"],
    summary: "Resurgent high-intensity armed conflict in eastern Democratic Republic of Congo (North and South Kivu provinces). Centered around the strategic provincial capital of Goma, driven by ethnic grievances and violent competition over world-vital mineral supply chains.",
    strategicSignificance: "Eastern DRC holds over 70% of the world's cobalt reserves and immense deposits of coltan (tantalum), copper, lithium, and gold — irreplaceable raw materials for electric vehicles, smartphones, and global defense electronics.",
    keyFlashpoints: [
      "Resurgence of the March 23 Movement (M23) in late 2021.",
      "M23 siege and encirclement of Goma (2023–2024).",
      "Withdrawal of the 25-year-old UN peacekeeping mission (MONUSCO) and deployment of SADC troops.",
      "UN Group of Experts reports documenting direct Rwandan military support for M23."
    ],
    internationalLawAndTreaties: [
      "Luanda and Nairobi regional peace processes.",
      "Dodd-Frank Act Section 1502 (US conflict minerals reporting rules) and EU Conflict Minerals Regulation."
    ],
    cssExamAnalysis: "Textbook example of the 'Resource Curse' and predatory mineral trade funding proxy armed groups. Highlights supply chain vulnerability for the global green energy transition.",
    relatedEssayLink: "geoeconomics-finance-essays.html"
  },

  // Disputed Territories
  {
    id: "golan-heights",
    name: "Golan Heights",
    category: "disputed_territories",
    status: "Occupied Strategic Plateau",
    statusColor: "#f59e0b",
    icon: "fa-flag",
    color: "#f59e0b",
    lat: 33.0,
    lng: 35.75,
    region: "Levant / Middle East",
    continents: "Asia",
    partiesInvolved: ["Syria", "Israel", "UNDOF (UN Peacekeepers)", "United States"],
    summary: "Elevated rocky plateau (1,800 km²) captured by Israel from Syria during the 1967 Six-Day War and unilaterally annexed in 1981. Overlooks the Jordan River valley and Sea of Galilee to the west and the plains leading to Damascus (60 km away) to the east.",
    strategicSignificance: "Provides commanding high-ground artillery and electronic surveillance dominance over southern Syria. Supplies over one-third of Israel's freshwater catchments feeding into the Sea of Galilee (Lake Kinneret).",
    keyFlashpoints: [
      "1967 Six-Day War capture and 1973 Yom Kippur War tank battles (Valley of Tears).",
      "Israel passed the Golan Heights Law (1981) applying Israeli civilian law.",
      "US President Donald Trump officially recognized Israeli sovereignty over the Golan Heights (March 2019).",
      "Majdal Shams rocket strike killing 12 Druze youths (July 2024), sparking Israeli-Hezbollah kinetic strikes."
    ],
    internationalLawAndTreaties: [
      "UNSC Resolution 242 (1967) emphasizing the inadmissibility of the acquisition of territory by war.",
      "UNSC Resolution 497 (1981) declaring Israel's annexation 'null and void and without international legal effect'.",
      "1974 Agreement on Disengagement establishing the UNDOF buffer zone."
    ],
    cssExamAnalysis: "Demonstrates how topographical high ground and hydro-hegemony dictate regional defense postures. Highlights the tension between unilateral superpower recognition and binding UNSC resolutions.",
    relatedEssayLink: "global-security-conflict-essays.html"
  },
  {
    id: "essequibo-dispute",
    name: "Guyana–Venezuela Essequibo Dispute",
    category: "disputed_territories",
    status: "Simmering Hydrocarbon Dispute",
    statusColor: "#f59e0b",
    icon: "fa-flag",
    color: "#f59e0b",
    lat: 6.0,
    lng: -59.5,
    region: "South America / Caribbean",
    continents: "South America",
    partiesInvolved: ["Cooperative Republic of Guyana", "Bolivarian Republic of Venezuela (Maduro)", "ExxonMobil & International Oil Consortia", "ICJ"],
    summary: "Centuries-old border dispute reignited by massive offshore oil discoveries. Venezuela claims the Guayana Esequiba — a 160,000 km² forested territory comprising over two-thirds of Guyana's sovereign landmass west of the Essequibo River.",
    strategicSignificance: "Overlies the Stabroek offshore oil block containing over 11 billion barrels of high-grade crude oil discovered by ExxonMobil, propelling Guyana to the highest per-capita oil producer in the world.",
    keyFlashpoints: [
      "1899 Paris Arbitral Award establishing the current international boundary.",
      "1966 Geneva Agreement seeking a practical negotiated settlement.",
      "Venezuelan consultative referendum (December 2023) approving the annexation of Essequibo as a 24th state.",
      "Argyle Declaration (December 2023) signed in St. Vincent pledging non-use of force."
    ],
    internationalLawAndTreaties: [
      "Case pending before the International Court of Justice (ICJ) on the validity of the 1899 Arbitral Award.",
      "ICJ Order on Provisional Measures (December 2023) barring Venezuela from altering the status quo."
    ],
    cssExamAnalysis: "Examines 'Petro-Nationalism' and revisionist border claims used as domestic distraction tools during electoral crises. Analyzes international arbitration vs sovereign militarized intimidation.",
    relatedEssayLink: "geoeconomics-finance-essays.html"
  },
  {
    id: "senkaku-diaoyu",
    name: "Senkaku / Diaoyu Islands Dispute",
    category: "disputed_territories",
    status: "Maritime Air & Naval Standoff",
    statusColor: "#f59e0b",
    icon: "fa-flag",
    color: "#f59e0b",
    lat: 25.75,
    lng: 123.47,
    region: "East China Sea",
    continents: "Asia",
    partiesInvolved: ["Japan (Administers)", "China (Claims as Diaoyu)", "Taiwan (Claims as Tiaoyutai)", "United States (Security Treaty)"],
    summary: "Dispute over eight uninhabited islands and rocks in the East China Sea. Administered by Japan as part of Okinawa Prefecture, but claimed by China as ancestral sovereign territory.",
    strategicSignificance: "Controls valuable rich fishing grounds, potential seabed petroleum and gas reserves, and strategic military vantage points overlooking the First Island Chain and Taiwan's northern approaches.",
    keyFlashpoints: [
      "Japanese government purchase of three of the islands from private owners (September 2012), sparking massive anti-Japanese protests across China.",
      "China established an Air Defense Identification Zone (ADIZ) covering the islands (November 2013).",
      "Near-daily Chinese Coast Guard patrols entering the contiguous and territorial waters around the islands."
    ],
    internationalLawAndTreaties: [
      "Article 5 of the US-Japan Treaty of Mutual Cooperation and Security explicitly reaffirmed by successive US presidents as covering the Senkaku Islands.",
      "1895 Cabinet decision incorporating the islands as terra nullius under international law."
    ],
    cssExamAnalysis: "Classic case study of 'Grey-Zone Warfare' and 'Salami-Slicing' tactics designed to challenge administrative control without triggering the US-Japan Mutual Defense Treaty threshold.",
    relatedEssayLink: "international-relations-essays.html#topic-us-china"
  },
  {
    id: "falkland-islands",
    name: "Falkland Islands (Islas Malvinas)",
    category: "disputed_territories",
    status: "Diplomatic Sovereignty Dispute",
    statusColor: "#f59e0b",
    icon: "fa-flag",
    color: "#f59e0b",
    lat: -51.75,
    lng: -59.0,
    region: "South Atlantic Ocean",
    continents: "South America",
    partiesInvolved: ["United Kingdom (Administers)", "Argentina (Claims sovereignty)"],
    summary: "British Overseas Territory in the South Atlantic Ocean, located 480 km off the coast of Argentina. Subject to an enduring diplomatic and emotional dispute over British colonization versus Argentine territorial succession.",
    strategicSignificance: "Gateway to maritime navigation around Cape Horn, extensive exclusive economic zone (EEZ) with high-value squid fisheries, offshore oil exploration (Sea Lion oil field), and Antarctic sovereignty claims.",
    keyFlashpoints: [
      "1982 Falklands War (Guerra de las Malvinas): 74-day military conflict ending in Argentine surrender after 900+ casualties.",
      "2013 Falkland Islands sovereignty referendum: 99.8% of islanders voted to remain a British Overseas Territory.",
      "Renewed diplomatic pressure under Argentine President Javier Milei proposing Hong Kong-style transition frameworks."
    ],
    internationalLawAndTreaties: [
      "UNGA Resolution 2065 (1965) calling for bilateral negotiations on decolonization.",
      "Principle of Self-Determination (Article 1, UN Charter) versus Principle of Territorial Integrity (Article 2, UN Charter)."
    ],
    cssExamAnalysis: "Illuminates the clash between two core doctrines of international law: Self-Determination of the inhabitants versus Territorial Integrity of the post-colonial state.",
    relatedEssayLink: "international-relations-essays.html"
  },

  // Alliances
  {
    id: "brics-plus",
    name: "BRICS+ Economic & Geopolitical Bloc",
    category: "alliances",
    status: "Expanding Multipolar Coalition",
    statusColor: "#2563eb",
    icon: "fa-shield-halved",
    color: "#2563eb",
    lat: -26.2,
    lng: 28.04,
    region: "Global South / Trans-regional",
    continents: "Asia, Africa, Americas, Europe",
    partiesInvolved: ["Brazil", "Russia", "India", "China", "South Africa", "Iran", "Egypt", "Ethiopia", "UAE"],
    summary: "Premier intergovernmental coalition of major developing economies. Expanded at the 2023 Johannesburg and 2024 Kazan Summits from the original five to nine full member states, representing over 45% of the world's population, 36% of global GDP (PPP), and over 40% of global oil production.",
    strategicSignificance: "Leading institutional vehicle for the 'De-Dollarization' movement, local currency bilateral trade settlements, and alternative financial infrastructure (New Development Bank - NDB, BRICS Pay, Contingent Reserve Arrangement).",
    keyFlashpoints: [
      "Acronym coined in 2001 by Goldman Sachs economist Jim O'Neill; formal summits began in 2009 (Yekaterinburg).",
      "Establishment of the New Development Bank (NDB) in Shanghai (2014) as an alternative to the World Bank and IMF.",
      "16th BRICS Summit in Kazan, Russia (October 2024): introduction of 'Partner Country' status and blueprint for cross-border non-SWIFT financial messaging."
    ],
    internationalLawAndTreaties: [
      "Kazan Declaration (2024) endorsing UN reform and multipolar multilateralism.",
      "Treaty on the Establishment of a BRICS Contingent Reserve Arrangement (CRA)."
    ],
    cssExamAnalysis: "Indispensable topic for CSS International Relations and Geoeconomics. Analyzes whether BRICS+ can construct an effective alternative global financial architecture or remain hamstrung by internal rivalries between members (e.g. Sino-Indian border friction).",
    relatedEssayLink: "international-relations-essays.html#topic-brics"
  },
  {
    id: "five-eyes-alliance",
    name: "Five Eyes (FVEY) Intelligence Alliance",
    category: "alliances",
    status: "Classified Intelligence Pact",
    statusColor: "#2563eb",
    icon: "fa-shield-halved",
    color: "#2563eb",
    lat: 38.9,
    lng: -77.03,
    region: "Anglosphere / Global",
    continents: "North America, Europe, Oceania",
    partiesInvolved: ["United States (NSA)", "United Kingdom (GCHQ)", "Canada (CSE)", "Australia (ASD)", "New Zealand (GCSB)"],
    summary: "World's most integrated and sophisticated multilateral signals intelligence (SIGINT) sharing alliance. Originating in secret post-WWII agreements, it provides mutual automated access to intercepts, submarine cable taps, satellite communications, and cyber surveillance data.",
    strategicSignificance: "Serves as the foundational intelligence backbone of Western military superiority. Focuses on joint tracking of Russian cyber warfare, Chinese espionage networks, counter-terrorism, and critical infrastructure defense.",
    keyFlashpoints: [
      "1946 UKUSA Agreement (kept secret until 2005).",
      "Operation of the global ECHELON surveillance interception network during the Cold War.",
      "Coordinated public bans on Huawei and ZTE 5G telecommunications infrastructure across member states (2018–2022).",
      "Coordinated diplomatic responses to transnational assassinations and foreign interference."
    ],
    internationalLawAndTreaties: [
      "1943 BRUSA Agreement and 1946 UKUSA Agreement.",
      "Domestic statutory privacy exemptions for allied intercept sharing."
    ],
    cssExamAnalysis: "Crucial for analyzing Intelligence Geopolitics, cyber espionage, digital sovereignty, and the role of the Anglosphere in maintaining global command and control.",
    relatedEssayLink: "global-security-conflict-essays.html#topic-cyber"
  },

  // Strategic Waterways
  {
    id: "suez-canal-waterway",
    name: "Suez Canal & Sinai Peninsula",
    category: "strategic_waterways",
    status: "Vital Global Trade Artery",
    statusColor: "#059669",
    icon: "fa-anchor",
    color: "#059669",
    lat: 30.7,
    lng: 32.34,
    region: "Egypt / Middle East",
    continents: "Africa / Asia",
    partiesInvolved: ["Arab Republic of Egypt (SCA)", "Global Shipping Lines", "European & Asian Trade Partners"],
    summary: "Man-made 193-km sea-level waterway in Egypt opened on November 17, 1869. Connects the Mediterranean Sea at Port Said directly to the Red Sea at Port Tewfik (Suez), allowing maritime vessels to bypass the 9,000 km voyage around the African continent.",
    strategicSignificance: "Carries approximately 12% of total global trade, 30% of global container traffic, and over 1 billion tonnes of cargo annually. The Egyptian economy relies on its transit fees as a primary source of sovereign foreign exchange (generating $9.4B in FY2022/23).",
    keyFlashpoints: [
      "1956 Suez Crisis: nationalization by Gamal Abdel Nasser and tripartite British-French-Israeli military invasion.",
      "Eight-year closure following the 1967 Six-Day War until reopening in 1975.",
      "March 2021 grounding of the Ever Given container ship, blocking the entire canal for 6 days and stalling $9.6B in daily global trade.",
      "Collapse in transit volume in 2023–2024 due to Houthi missile strikes in the southern Bab-el-Mandeb bottleneck."
    ],
    internationalLawAndTreaties: [
      "1888 Convention of Constantinople (mandating free and open transit for commercial and military vessels in times of peace and war).",
      "Suez Canal Authority regulations."
    ],
    cssExamAnalysis: "Classic case study of 'Chokepoint Geoeconomics' and supply chain fragility. Analyzes Egyptian sovereign debt vulnerability to regional security shocks.",
    relatedEssayLink: "geoeconomics-finance-essays.html#topic-red-sea"
  },
  {
    id: "panama-canal-waterway",
    name: "Panama Canal",
    category: "strategic_waterways",
    status: "Trans-Oceanic Lock Canal",
    statusColor: "#059669",
    icon: "fa-anchor",
    color: "#059669",
    lat: 9.08,
    lng: -79.68,
    region: "Central America",
    continents: "Americas",
    partiesInvolved: ["Republic of Panama (ACP)", "United States", "China (Primary commercial user)"],
    summary: "82-km lock-based trans-oceanic canal bisecting the Isthmus of Panama. Opened in 1914, it connects the Atlantic Ocean (Caribbean Sea) with the Pacific Ocean, eliminating the treacherous 13,000-km journey around Cape Horn.",
    strategicSignificance: "Handles roughly 5% of global maritime commerce, including 40% of all US container traffic, bulk agricultural exports from the US Gulf coast, and liquefied natural gas (LNG) tankers bound for Asia.",
    keyFlashpoints: [
      "1977 Torrijos-Carter Treaties transferring sovereign control of the canal from the US to Panama on December 31, 1999.",
      "$5.25 billion expansion project adding third set of Neopanamax locks (opened June 2016).",
      "Severe 2023–2024 El Niño climate drought drastically lowering Gatun Lake water levels, forcing daily vessel transits to drop from 36 down to 24 and stranding hundreds of ships."
    ],
    internationalLawAndTreaties: [
      "1977 Treaty Concerning the Permanent Neutrality and Operation of the Panama Canal.",
      "Panama Canal Authority regulations."
    ],
    cssExamAnalysis: "Highlights the acute intersection of climate change (freshwater reservoir depletion for lock operations) and international trade bottlenecks. Examines potential competing alternative corridors (Mexico's Interoceanic Corridor of the Isthmus of Tehuantepec).",
    relatedEssayLink: "geoeconomics-finance-essays.html#topic-supply-chains"
  },
  {
    id: "bosphorus-dardanelles-chokepoint",
    name: "Turkish Straits (Bosphorus & Dardanelles)",
    category: "strategic_waterways",
    status: "Regulated Maritime Chokepoint",
    statusColor: "#059669",
    icon: "fa-anchor",
    color: "#059669",
    lat: 41.11,
    lng: 29.07,
    region: "Southeastern Europe / Asia Minor",
    continents: "Europe / Asia",
    partiesInvolved: ["Republic of Turkey", "Black Sea Littoral States (Russia, Ukraine)", "NATO"],
    summary: "Pair of narrow waterways linking the Black Sea to the Mediterranean: the Bosphorus Strait (connecting Black Sea to Sea of Marmara) and the Dardanelles (connecting Marmara to the Aegean Sea). Bosphorus is the world's narrowest strait used for international navigation (700 m wide at narrowest).",
    strategicSignificance: "Sole maritime exit for landlocked naval fleets and merchant shipping from Russia, Ukraine, Romania, Bulgaria, and Georgia. Transits over 40,000 vessels annually, including massive grain, fertilizer, and Russian oil cargoes.",
    keyFlashpoints: [
      "Turkish invocation of Article 19 of the Montreux Convention in February 2022 following Russia's invasion of Ukraine, successfully closing the straits to non-home-port warships.",
      "Center of the UN-brokered Black Sea Grain Initiative (July 2022–July 2023) facilitating inspections of Ukrainian agricultural exports.",
      "Turkey's proposed mega-project 'Kanal Istanbul' to build an artificial parallel canal bypassing the Montreux Convention restrictions."
    ],
    internationalLawAndTreaties: [
      "1936 Montreux Convention Regarding the Regime of the Straits (giving Turkey sovereign jurisdiction over naval transit).",
      "UNCLOS navigation exceptions."
    ],
    cssExamAnalysis: "Classic demonstration of international legal instruments granting medium powers decisive geopolitical leverage during great power conflicts. Core topic for naval strategy in the Black Sea theater.",
    relatedEssayLink: "global-security-conflict-essays.html#topic-russia-ukraine"
  },

  // Tensions
  {
    id: "us-china-tech-war",
    name: "US–China Tech & Semiconductor War",
    category: "tensions",
    status: "Economic & Tech Cold War",
    statusColor: "#7c2d12",
    icon: "fa-bolt",
    color: "#7c2d12",
    lat: 37.77,
    lng: -122.42,
    region: "Global / Silicon Valley & Shenzhen",
    continents: "Global",
    partiesInvolved: ["United States (Commerce Dept / BIS)", "China (Ministry of Commerce)", "Taiwan (TSMC)", "Netherlands (ASML)", "Japan (Tokyo Electron)"],
    summary: "Systemic geo-technological conflict between the United States and China for supremacy in Artificial Intelligence, quantum computing, advanced semiconductor fabrication, and clean tech. Marked by sweeping export bans, entity lists, and state-subsidized onshoring.",
    strategicSignificance: "Advanced microchips are the indispensable foundational infrastructure of 21st-century economic dominance and precision-guided autonomous military capabilities. US doctrine aims to preserve 'as large of a lead as possible' rather than a relative advantage.",
    keyFlashpoints: [
      "US blacklisting of Huawei and cutting off foreign-produced chips made with US software (2019–2020).",
      "US CHIPS and Science Act (August 2022) allocating $52.7B in manufacturing subsidies.",
      "October 7, 2022 sweeping US export controls banning sale of advanced AI chips (Nvidia H100/A100) and semiconductor manufacturing equipment to China.",
      "Chinese retaliatory export restrictions on critical mineral supply chains: Gallium, Germanium, Graphite, and Antimony (2023–2024)."
    ],
    internationalLawAndTreaties: [
      "Wassenaar Arrangement on Export Controls for Conventional Arms and Dual-Use Goods and Technologies.",
      "WTO dispute complaints lodged by China against US export controls.",
      "US Entity List and Foreign Direct Product Rules (FDPR)."
    ],
    cssExamAnalysis: "Core analytical framework for 'Weaponized Interdependence' (Henry Farrell and Abraham Newman). Demonstrates the breakdown of neoliberal globalization and the emergence of techno-nationalist economic spheres.",
    relatedEssayLink: "geoeconomics-finance-essays.html#topic-trade-war"
  }
];

// Append to data
extraHotspots.forEach(eh => {
  if (!data.hotspots.some(h => h.id === eh.id)) {
    data.hotspots.push(eh);
  }
});

const fileHeader = `/**
 * CSS PREP CENTRAL - GLOBAL GEOPOLITICAL HOTSPOTS DATASET
 * Authoritative, In-Depth Strategic Intelligence Database for CSS, PMS, FPSC, UPSC & International Relations Aspirants.
 * Categories: Active Conflicts, Disputed Territories, Military Alliances, Strategic Waterways, Ongoing Tensions.
 */

const GEOPOLITICAL_HOTSPOTS_DATA = ` + JSON.stringify(data, null, 2) + `;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GEOPOLITICAL_HOTSPOTS_DATA;
}
`;

fs.writeFileSync(dataFile, fileHeader, 'utf-8');
console.log('Successfully enriched data_geopolitical_hotspots.js. Total hotspots:', data.hotspots.length);
