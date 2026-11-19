const fs = require('fs');
const data = require('../frontend/js/data_trade_routes.js');

const additionalChokepoints = [
  {
    id: "sunda-strait",
    name: "Sunda Strait",
    category: "chokepoints",
    type: "Deepwater Island Strait",
    status: "Strategic Alternative to Malacca",
    statusColor: "#2563eb",
    icon: "fa-compass",
    color: "#e11d48",
    lat: -5.92,
    lng: 105.75,
    waterwaysConnected: "Java Sea to Indian Ocean (between Java and Sumatra)",
    borderingStates: ["Republic of Indonesia"],
    transitVolume: "Approx. 2,000 – 3,500 ocean-going vessels annually; secondary bypass route",
    annualVessels: "Approx. 3,500 commercial vessels annually",
    vesselLimits: "Minimum depth 20 meters, but northern approach is shallow with hazardous strong tidal currents and shifting sandbanks; adjacent to the active volcanic island Anak Krakatau",
    keyCommodities: ["Bulk Minerals", "Regional Petroleum", "Inter-island Indonesian cargo"],
    strategicSignificance: "Serves as an essential alternative bypass should the congested Strait of Malacca become blockaded or impassable during an Indo-Pacific military conflict.",
    vulnerabilitiesAndThreats: [
      "Extreme volcanic and tsunami hazards from Anak Krakatau.",
      "Narrow channels and complex localized tidal flows.",
      "Shallow northern depths restricting fully laden Ultra Large Crude Carriers (ULCCs)."
    ],
    internationalLaw: "Governed by the Archipelagic Sea Lanes (ASL) passage regime under UNCLOS Part IV.",
    cssExamAnalysis: "Illustrates Indonesia's archipelagic baseline jurisdiction and sovereign control over Indo-Pacific alternate sea lanes of communication (SLOCs).",
    relatedEssayLink: "international-relations-essays.html#topic-9"
  },
  {
    id: "lombok-strait",
    name: "Lombok Strait",
    category: "chokepoints",
    type: "Deep Oceanic Trench Strait",
    status: "Capesize & Submarine Deep-Draft Corridor",
    statusColor: "#059669",
    icon: "fa-compass",
    color: "#e11d48",
    lat: -8.45,
    lng: 115.72,
    waterwaysConnected: "Indian Ocean to Bali Sea / Makassar Strait (Pacific Ocean)",
    borderingStates: ["Republic of Indonesia (between Bali and Lombok)"],
    transitVolume: "Approx. 5,000+ deep-draft bulk carriers and supertankers annually",
    annualVessels: "Approx. 5,000 ocean-going vessels annually",
    vesselLimits: "Minimum depth exceeds 250 meters (820 ft); width is 11.5 nautical miles; no draft or beam limitations whatsoever; handles giant Capesize vessels and nuclear submarines running submerged",
    keyCommodities: ["Australian Iron Ore and Coal to China/Japan", "Fully Laden VLCC/ULCC Crude Oil from Middle East to East Asia", "Bulk Grain"],
    strategicSignificance: "The deepest and safest maritime corridor through the Indonesian archipelago. Essential for massive Capesize dry bulk carriers exceeding 20.5m draft that are physically barred by shallow shoals in the Malacca Strait.",
    vulnerabilitiesAndThreats: [
      "Adds 1,000 nautical miles (~3.5 sailing days) and substantial operating costs compared to the direct Malacca route.",
      "Severe internal oceanic solitary waves and tidal turbulence.",
      "Heavy reliance on Makassar Strait northern passage."
    ],
    internationalLaw: "Designated as part of Archipelagic Sea Lane I (ASL I) under UNCLOS Part IV.",
    cssExamAnalysis: "Core geostrategic asset in maritime geography: exemplifies the physics of naval transport (draft limits dictating strategic routing choices for global bulk logistics).",
    relatedEssayLink: "international-relations-essays.html#topic-9"
  },
  {
    id: "danish-straits",
    name: "Danish Straits (Great Belt, Little Belt & Øresund)",
    category: "chokepoints",
    type: "Navigable Baltic Maritime Straits",
    status: "Geopolitical Energy Surveillance Corridor",
    statusColor: "#d97706",
    icon: "fa-anchor",
    color: "#e11d48",
    lat: 55.33,
    lng: 11.0,
    waterwaysConnected: "Baltic Sea to Kattegat, Skagerrak & North Sea (Atlantic Ocean)",
    borderingStates: ["Denmark", "Sweden"],
    transitVolume: "Approx. 3.2 Million bpd of petroleum (primarily Russian Baltic exports from Primorsk & Ust-Luga) and 60,000+ vessels annually",
    annualVessels: "Over 60,000 vessels annually",
    vesselLimits: "Great Belt (Storebælt) depth limit is 15 meters; bridges limit air draft (height) to 65 meters; ships exceeding 15m draft must lighter cargo",
    keyCommodities: ["Russian Seaborne Crude Oil & Diesel (Shadow Tanker Fleet)", "Nordic Timber & Paper Products", "Baltic Manufactured Freight & Grain"],
    strategicSignificance: "The sole natural maritime gateway connecting all Baltic Sea nations (Sweden, Finland, Estonia, Latvia, Lithuania, Poland, Germany, and Russia) to the world ocean.",
    vulnerabilitiesAndThreats: [
      "High concentration of aging, uninsured 'shadow fleet' oil tankers carrying Russian crude under sanctions evasion schemes.",
      "Heightened NATO surveillance and potential boarding inspections following European sanctions enforcement.",
      "Environmental nightmare scenario of a major oil spill in the fragile, semi-enclosed Baltic ecosystem."
    ],
    internationalLaw: "Governed by the 1857 Treaty of Copenhagen (abolishing the historic Sound Dues) and UNCLOS transit passage customary law.",
    cssExamAnalysis: "Case study for Western maritime sanctions enforcement, shadow tanker regulation, and NATO's transformed 'Baltic Lake' geopolitics following Sweden and Finland's accession.",
    relatedEssayLink: "global-security-conflict-essays.html#topic-1"
  },
  {
    id: "taiwan-strait",
    name: "Taiwan Strait",
    category: "chokepoints",
    type: "Geopolitical Maritime Corridor",
    status: "Highest Geopolitical Flashpoint Threat",
    statusColor: "#dc2626",
    icon: "fa-triangle-exclamation",
    color: "#e11d48",
    lat: 24.0,
    lng: 119.5,
    waterwaysConnected: "East China Sea to South China Sea",
    borderingStates: ["People's Republic of China (Fujian)", "Taiwan (ROC)"],
    transitVolume: "Nearly 50% of the world's global container fleet and 88% of the world's largest container ships transit this strait annually",
    annualVessels: "Over 65,000 commercial ship transits per year",
    vesselLimits: "Width ranges from 70 to 110 nautical miles; depth is relatively shallow (average 60 meters), allowing all commercial merchant vessel classes",
    keyCommodities: ["Advanced Semiconductor Microchips (TSMC)", "East Asian Finished Manufactured Goods", "Crude Oil & LNG to Japan, South Korea, and Taiwan"],
    strategicSignificance: "The economic lifeline of Northeast Asia. An armed conflict or naval blockade of the Taiwan Strait is projected by Bloomberg Economics to eradicate $10 Trillion from global GDP (~10% of world economic output), dwarfing the 2008 financial crisis.",
    vulnerabilitiesAndThreats: [
      "PLA Navy blockade drills, maritime quarantine exercises, and anti-access/area-denial (A2/AD) maneuvers.",
      "US Navy and allied Freedom of Navigation Operations (FONOPs) asserting high seas transit rights.",
      "Concentration of 90% of global cutting-edge sub-7nm microchip fabrication in Taiwan."
    ],
    internationalLaw: "China asserts sovereignty and jurisdiction over the strait under the One-China principle; the US, EU, and Taiwan maintain that it constitutes international waters subject to high seas freedoms of navigation.",
    cssExamAnalysis: "Primary flashpoint in CSS International Relations and US-China Great Power Competition. Essential for understanding Graham Allison's 'Thucydides Trap' and the First Island Chain defense posture.",
    relatedEssayLink: "international-relations-essays.html#topic-3"
  },
  {
    id: "cape-horn-magellan",
    name: "Cape Horn & Strait of Magellan",
    category: "chokepoints",
    type: "Sub-Antarctic Inter-Oceanic Passage",
    status: "Deep-Draft Alternative to Panama Canal",
    statusColor: "#059669",
    icon: "fa-water",
    color: "#e11d48",
    lat: -55.98,
    lng: -67.27,
    waterwaysConnected: "South Atlantic Ocean to South Pacific Ocean (Drake Passage / Tierra del Fuego)",
    borderingStates: ["Chile", "Argentina"],
    transitVolume: "Approx. 3,000 vessels annually; handles giant bulk ore carriers and transoceanic container reroutings",
    annualVessels: "Approx. 3,000 ships/year",
    vesselLimits: "Drake Passage has no depth or width constraints; Strait of Magellan provides a sheltered but treacherous 350-mile inland passage (minimum depth 28m)",
    keyCommodities: ["Brazilian Iron Ore to Asia", "Chilean Copper", "Argentine Soybeans & Grain", "Capesize Rerouted Freight"],
    strategicSignificance: "The southern hemispheric gateway connecting the Atlantic and Pacific oceans. Serves as the ultimate natural bypass when the Panama Canal suffers extreme drought or closure.",
    vulnerabilitiesAndThreats: [
      "Notorious for the most violent sea conditions on Earth: 40-foot swell waves, fierce sub-polar westerly gales ('Furious Fifties'), and iceberg hazards in the Drake Passage.",
      "Extreme isolation and virtually nonexistent salvage/repair port infrastructure along Patagonia."
    ],
    internationalLaw: "1881 Boundary Treaty between Chile and Argentina neutralizes the Strait of Magellan and guarantees perpetual free navigation for ships of all nations.",
    cssExamAnalysis: "Demonstrates the physical extremes of global trade logistics and South American maritime sovereignty.",
    relatedEssayLink: "geoeconomics-finance-essays.html#topic-8"
  }
];

const additionalMegaports = [
  {
    id: "port-of-ningbo-zhoushan",
    name: "Port of Ningbo-Zhoushan",
    category: "megaports",
    country: "China",
    lat: 29.87,
    lng: 121.55,
    throughputTeu: "35.3 Million TEUs / 1.3 Billion Metric Tons (World's #1 Port by Total Cargo Tonnage for 15 straight years)",
    keyRole: "World's preeminent super-hub for raw bulk industrial materials: handles raw iron ore, crude oil, and manufactured exports from the Yangtze River Delta.",
    connectedRoutes: ["Trans-Pacific Lane", "Asia-Europe Suez Lane", "Maritime Silk Road"]
  },
  {
    id: "port-of-busan",
    name: "Port of Busan",
    category: "megaports",
    country: "South Korea",
    lat: 35.1,
    lng: 129.04,
    throughputTeu: "23.0 Million TEUs (World's #6 Container Port & Premier Northeast Asia Transshipment Gateway)",
    keyRole: "Pivotal transshipment hub connecting Northeast Asia (China, Japan, Russia) with North American and European maritime networks.",
    connectedRoutes: ["Trans-Pacific Lane", "Northern Sea Route"]
  },
  {
    id: "port-of-colombo",
    name: "Port of Colombo (CICT / JCT)",
    category: "megaports",
    country: "Sri Lanka",
    lat: 6.94,
    lng: 79.84,
    throughputTeu: "7.2 Million TEUs (Key Deepwater South Asia Transshipment Pivot)",
    keyRole: "Strategically located along the primary East-West maritime shipping lane in the northern Indian Ocean; transships over 70% of India's container cargo.",
    connectedRoutes: ["Asia-Europe Suez Lane", "Persian Gulf Energy Highway", "Maritime Silk Road"]
  },
  {
    id: "port-of-santos",
    name: "Port of Santos",
    category: "megaports",
    country: "Brazil",
    lat: -23.96,
    lng: -46.33,
    throughputTeu: "5.0 Million TEUs and 160 Million Metric Tons (Latin America's Largest Port Complex)",
    keyRole: "Primary agricultural and industrial export gateway for Brazil; handles the world's largest volumes of soybeans, sugar, coffee, and meat exports to global markets.",
    connectedRoutes: ["Trans-Atlantic Lane", "Cape Horn & Strait of Magellan"]
  }
];

// Append to data
additionalChokepoints.forEach(cp => data.chokepoints.push(cp));
additionalMegaports.forEach(mp => data.megaports.push(mp));

const fileContent = `/**
 * CSS PREP CENTRAL - GLOBAL MARITIME TRADE ROUTES & CHOKEPOINTS DATASET
 * Authoritative, High-Yield Geoeconomic Database for CSS, PMS, FPSC, UPSC & IR Aspirants.
 * Features: Strategic Chokepoints (13), Major Global Shipping Lanes (8), Megaports (12), Route Simulator.
 */

const TRADE_ROUTES_DATA = ${JSON.stringify(data, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRADE_ROUTES_DATA;
}
`;

fs.writeFileSync('frontend/js/data_trade_routes.js', fileContent, 'utf8');
console.log('Successfully enriched data_trade_routes.js! Total chokepoints:', data.chokepoints.length, 'Total megaports:', data.megaports.length);
