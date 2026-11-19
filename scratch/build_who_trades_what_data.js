const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/js/data_who_trades_what.js');

console.log('Writing data_who_trades_what.js...');

const WHO_TRADES_WHAT_DATA = {
  meta: {
    title: "Who Trades What? Global Trade & Merchandise Flow Explorer",
    lastUpdated: "2024",
    sources: ["WTO World Trade Statistical Review", "UN Comtrade", "IMF Direction of Trade Statistics (DOTS)", "World Bank WITS", "State Bank of Pakistan Annual Report"],
    totalMerchandiseTradeUSD: 24900, // in Billions USD (~$24.9 Trillion)
    totalCommercialServicesUSD: 7900, // in Billions USD (~$7.9 Trillion)
    topExporterCountry: "China ($3,593 Billion)",
    topImporterCountry: "United States ($3,172 Billion)",
    wtoMembersCount: 166,
    globalTradeToGdpRatio: "60.4%",
    topProductCategory: "Electrical Machinery & Electronics ($3.5T+)"
  },
  
  countries: [
    {
      id: "chn",
      code: "CHN",
      name: "China",
      flag: "🇨🇳",
      region: "East Asia",
      totalExportsUSD: 3593.6,
      totalImportsUSD: 2556.8,
      tradeBalanceUSD: 1036.8, // Large surplus
      globalExportRank: 1,
      globalImportRank: 2,
      tradeToGdpRatio: 37.4,
      currency: "CNY (Chinese Yuan)",
      topExportProducts: [
        { name: "Electrical Machinery & Electronics (Smartphones, ICs, Computers)", valueUSD: 915.2, sharePct: 25.5 },
        { name: "Industrial Machinery & Boilers", valueUSD: 520.4, sharePct: 14.5 },
        { name: "Electric Vehicles (EVs) & Auto Parts", valueUSD: 185.0, sharePct: 5.1 },
        { name: "Solar PV Panels & Lithium-ion Batteries", valueUSD: 142.3, sharePct: 4.0 },
        { name: "Textiles, Fabrics & Apparel", valueUSD: 138.6, sharePct: 3.9 }
      ],
      topImportProducts: [
        { name: "Integrated Circuits (Semiconductors)", valueUSD: 349.4, sharePct: 13.7 },
        { name: "Crude Petroleum", valueUSD: 337.5, sharePct: 13.2 },
        { name: "Iron Ore & Concentrates", valueUSD: 132.8, sharePct: 5.2 },
        { name: "Agricultural Commodities (Soybeans, Meat, Corn)", valueUSD: 110.6, sharePct: 4.3 },
        { name: "Unwrought Copper & Base Metals", valueUSD: 68.2, sharePct: 2.7 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 14.8 },
        { country: "European Union", code: "EU", flag: "🇪🇺", sharePct: 14.2 },
        { country: "ASEAN (Bloc)", code: "ASEAN", flag: "🌏", sharePct: 15.6 },
        { country: "Hong Kong", code: "HKG", flag: "🇭🇰", sharePct: 8.3 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 4.6 }
      ],
      topImportPartners: [
        { country: "Taiwan", code: "TWN", flag: "🇹🇼", sharePct: 8.9 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 7.3 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 6.9 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 6.5 },
        { country: "Russia", code: "RUS", flag: "🇷🇺", sharePct: 5.1 }
      ],
      majorTradeAgreements: ["RCEP (World's Largest FTA)", "CPFTA (China-Pakistan FTA)", "Belt and Road Initiative (BRI)", "APEC"],
      strategicTradeStrength: "The 'World's Factory' dominating consumer electronics, clean tech (solar, batteries, EVs), and industrial components with unparalleled supply chain depth.",
      strategicTradeVulnerability: "Heavy reliance on imported advanced semiconductors (Taiwan/US), crude energy (Strait of Malacca chokepoint), and agricultural animal feed (soybeans).",
      cssExamRelevance: "China's massive current account surplus, 'New Three' exports (EVs, solar panels, lithium batteries), and the trade war with the US (Section 301 tariffs & chip export controls)."
    },
    {
      id: "usa",
      code: "USA",
      name: "United States",
      flag: "🇺🇸",
      region: "North America",
      totalExportsUSD: 2050.7,
      totalImportsUSD: 3172.5,
      tradeBalanceUSD: -1121.8, // Massive deficit
      globalExportRank: 2,
      globalImportRank: 1,
      tradeToGdpRatio: 25.5,
      currency: "USD (US Dollar)",
      topExportProducts: [
        { name: "Refined Petroleum & Liquefied Gas (LNG)", valueUSD: 168.4, sharePct: 8.2 },
        { name: "Crude Petroleum", valueUSD: 116.8, sharePct: 5.7 },
        { name: "Commercial Aircraft, Spacecraft & Parts (Boeing)", valueUSD: 102.3, sharePct: 5.0 },
        { name: "Semiconductors & Electronic Components", valueUSD: 72.5, sharePct: 3.5 },
        { name: "Pharmaceuticals & Medical Devices", valueUSD: 94.6, sharePct: 4.6 }
      ],
      topImportProducts: [
        { name: "Passenger Motor Vehicles & Automotive Parts", valueUSD: 382.4, sharePct: 12.1 },
        { name: "Consumer Electronics & Computers", valueUSD: 320.1, sharePct: 10.1 },
        { name: "Pharmaceutical Preparations", valueUSD: 178.5, sharePct: 5.6 },
        { name: "Crude Petroleum", valueUSD: 162.2, sharePct: 5.1 },
        { name: "Industrial Machinery & Turbines", valueUSD: 155.0, sharePct: 4.9 }
      ],
      topExportPartners: [
        { country: "Canada", code: "CAN", flag: "🇨🇦", sharePct: 17.5 },
        { country: "Mexico", code: "MEX", flag: "🇲🇽", sharePct: 15.7 },
        { country: "European Union", code: "EU", flag: "🇪🇺", sharePct: 18.2 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 7.2 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 3.8 }
      ],
      topImportPartners: [
        { country: "Mexico", code: "MEX", flag: "🇲🇽", sharePct: 15.4 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 13.9 },
        { country: "Canada", code: "CAN", flag: "🇨🇦", sharePct: 13.7 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 5.2 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 4.7 }
      ],
      majorTradeAgreements: ["USMCA (United States-Mexico-Canada Agreement)", "IPEF (Indo-Pacific Economic Framework)", "KORUS FTA (Korea-US)"],
      strategicTradeStrength: "Global titan in high-value intellectual property, aerospace, biotechnology, LNG/hydrocarbon energy independence, and digital services ($1T+ services exports).",
      strategicTradeVulnerability: "Chronic $1 Trillion+ merchandise trade deficit financed by foreign reserve asset purchases; domestic supply chain hollowing in consumer manufacturing and critical minerals.",
      cssExamRelevance: "Nearshoring/friendshoring trends under USMCA, decoupling vs. de-risking from China, Inflation Reduction Act (IRA) green subsidies, and CHIPS Act industrial policy."
    },
    {
      id: "deu",
      code: "DEU",
      name: "Germany",
      flag: "🇩🇪",
      region: "Europe",
      totalExportsUSD: 1688.4,
      totalImportsUSD: 1460.2,
      tradeBalanceUSD: 228.2, // Surplus
      globalExportRank: 3,
      globalImportRank: 3,
      tradeToGdpRatio: 88.6,
      currency: "EUR (Euro)",
      topExportProducts: [
        { name: "Automobiles & Motor Vehicle Parts (BMW, Mercedes, VW)", valueUSD: 254.2, sharePct: 15.1 },
        { name: "Industrial Machinery & Advanced Robotics", valueUSD: 215.6, sharePct: 12.8 },
        { name: "Chemical & Plastic Products (BASF)", valueUSD: 145.0, sharePct: 8.6 },
        { name: "Pharmaceuticals & Medical Technology", valueUSD: 122.8, sharePct: 7.3 },
        { name: "Electrical Equipment & Optical Devices", valueUSD: 110.4, sharePct: 6.5 }
      ],
      topImportProducts: [
        { name: "Electrical Machinery, Chips & Data Equipment", valueUSD: 188.5, sharePct: 12.9 },
        { name: "Petroleum, Natural Gas & Mineral Fuels", valueUSD: 142.0, sharePct: 9.7 },
        { name: "Automotive Vehicles & Components", valueUSD: 135.2, sharePct: 9.3 },
        { name: "Chemical & Pharmaceutical Inputs", valueUSD: 112.4, sharePct: 7.7 },
        { name: "Base Metals & Steel", valueUSD: 78.6, sharePct: 5.4 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 9.9 },
        { country: "France", code: "FRA", flag: "🇫🇷", sharePct: 7.4 },
        { country: "Netherlands", code: "NLD", flag: "🇳🇱", sharePct: 6.8 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 6.2 },
        { country: "Poland", code: "POL", flag: "🇵🇱", sharePct: 5.7 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 11.5 },
        { country: "Netherlands", code: "NLD", flag: "🇳🇱", sharePct: 8.6 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 6.8 },
        { country: "Poland", code: "POL", flag: "🇵🇱", sharePct: 6.0 },
        { country: "Italy", code: "ITA", flag: "🇮🇹", sharePct: 5.1 }
      ],
      majorTradeAgreements: ["European Union Single Market (Free movement of goods)", "EU Customs Union", "EU-UK TCA", "EU-Japan EPA"],
      strategicTradeStrength: "World leader in high-precision engineering ('Mittelstand'), specialized capital machinery, luxury automotive manufacturing, and chemical formulations.",
      strategicTradeVulnerability: "Severe energy vulnerability exposed following the cutoff of cheap Russian pipeline gas; high domestic electricity costs risking industrial de-industrialization.",
      cssExamRelevance: "Germany's export-led growth model ('Exportweltmeister'), EU Carbon Border Adjustment Mechanism (CBAM), and German economic integration with Eastern Europe."
    },
    {
      id: "pak",
      code: "PAK",
      name: "Pakistan",
      flag: "🇵🇰",
      region: "South Asia",
      totalExportsUSD: 30.6,
      totalImportsUSD: 55.0,
      tradeBalanceUSD: -24.4, // Chronic trade deficit
      globalExportRank: 66,
      globalImportRank: 48,
      tradeToGdpRatio: 27.2,
      currency: "PKR (Pakistani Rupee)",
      topExportProducts: [
        { name: "Textiles & Garments (Knitwear, Readymade Garments, Bedwear)", valueUSD: 16.7, sharePct: 54.6 },
        { name: "Agricultural Goods (Basmati Rice, Sesame, Fruits)", valueUSD: 7.4, sharePct: 24.2 },
        { name: "Leather Goods, Footwear & Tanning", valueUSD: 0.58, sharePct: 1.9 },
        { name: "Surgical & Medical Instruments (Sialkot)", valueUSD: 0.45, sharePct: 1.5 },
        { name: "Sports Goods & Footballs (FIFA Official Balls)", valueUSD: 0.41, sharePct: 1.3 }
      ],
      topImportProducts: [
        { name: "Petroleum Group (Crude, Motor Spirit, Diesel, LNG)", valueUSD: 15.5, sharePct: 28.2 },
        { name: "Agricultural & Food Inputs (Palm Oil, Wheat, Pulses)", valueUSD: 7.8, sharePct: 14.2 },
        { name: "Machinery & Power Generation Equipment", valueUSD: 7.2, sharePct: 13.1 },
        { name: "Chemicals, Fertilizers & Pharmaceuticals", valueUSD: 6.8, sharePct: 12.4 },
        { name: "Iron, Steel & Base Metals", valueUSD: 4.1, sharePct: 7.5 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 18.2 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 8.9 },
        { country: "United Kingdom", code: "GBR", flag: "🇬🇧", sharePct: 6.8 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 5.4 },
        { country: "United Arab Emirates", code: "ARE", flag: "🇦🇪", sharePct: 4.8 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 28.4 },
        { country: "United Arab Emirates", code: "ARE", flag: "🇦🇪", sharePct: 11.8 },
        { country: "Saudi Arabia", code: "SAU", flag: "🇸🇦", sharePct: 9.1 },
        { country: "Indonesia", code: "IDN", flag: "🇮🇩", sharePct: 6.2 },
        { country: "Qatar", code: "QAT", flag: "🇶🇦", sharePct: 5.5 }
      ],
      majorTradeAgreements: ["EU GSP Plus (Generalised Scheme of Preferences)", "CPFTA Phase-II (China-Pakistan FTA)", "SAFTA (South Asian FTA)", "ECO PTA"],
      strategicTradeStrength: "Global leader in premium long-grain Basmati rice, hand-stitched thermal-bonded sports balls (Sialkot), forged surgical stainless steel instruments, and terry towels.",
      strategicTradeVulnerability: "Excessive export concentration in low-value-added textiles (>55%); crushing inelastic import bills in energy ($15B+) and edible oil ($3B+) causing repetitive BoP crises.",
      cssExamRelevance: "Crucial CSS topic: Structural causes of Pakistan's trade deficit, EU GSP+ compliance across 27 UN conventions, CPEC Phase-II industrialization, and Export Processing Zones (EPZs)."
    },
    {
      id: "jpn",
      code: "JPN",
      name: "Japan",
      flag: "🇯🇵",
      region: "East Asia",
      totalExportsUSD: 717.3,
      totalImportsUSD: 756.2,
      tradeBalanceUSD: -38.9,
      globalExportRank: 5,
      globalImportRank: 6,
      tradeToGdpRatio: 37.8,
      currency: "JPY (Japanese Yen)",
      topExportProducts: [
        { name: "Motor Vehicles & Auto Components (Toyota, Honda)", valueUSD: 142.5, sharePct: 19.9 },
        { name: "Semiconductor Manufacturing Equipment (Tokyo Electron)", valueUSD: 54.0, sharePct: 7.5 },
        { name: "Electronic Integrated Circuits & Chips", valueUSD: 41.2, sharePct: 5.7 },
        { name: "Iron & High-Grade Specialized Steel", valueUSD: 33.8, sharePct: 4.7 },
        { name: "Power Generating Machinery & Engines", valueUSD: 29.5, sharePct: 4.1 }
      ],
      topImportProducts: [
        { name: "Crude Petroleum & Hydrocarbons", valueUSD: 98.4, sharePct: 13.0 },
        { name: "Liquefied Natural Gas (LNG)", valueUSD: 56.2, sharePct: 7.4 },
        { name: "Coal & Briquettes", valueUSD: 44.1, sharePct: 5.8 },
        { name: "Telecommunications & Smartphones", valueUSD: 31.5, sharePct: 4.2 },
        { name: "Integrated Circuits & Electronics", valueUSD: 28.0, sharePct: 3.7 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 20.1 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 17.6 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 6.8 },
        { country: "Taiwan", code: "TWN", flag: "🇹🇼", sharePct: 5.9 },
        { country: "Hong Kong", code: "HKG", flag: "🇭🇰", sharePct: 4.3 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 22.2 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 10.4 },
        { country: "Australia", code: "AUS", flag: "🇦🇺", sharePct: 8.8 },
        { country: "Saudi Arabia", code: "SAU", flag: "🇸🇦", sharePct: 4.9 },
        { country: "United Arab Emirates", code: "ARE", flag: "🇦🇪", sharePct: 4.4 }
      ],
      majorTradeAgreements: ["CPTPP", "RCEP", "EU-Japan EPA", "US-Japan Trade Agreement"],
      strategicTradeStrength: "Dominance in upstream semiconductor materials (photoresists, silicon wafers), robotics, optical lenses, and automotive reliability.",
      strategicTradeVulnerability: "Almost 90% dependent on imported energy (oil, LNG, coal); heavily dependent on Middle Eastern sea lanes.",
      cssExamRelevance: "Japan's role in CPTPP after US withdrawal, energy security following Fukushima nuclear shutdowns, and yen depreciation impact on trade balance."
    },
    {
      id: "kor",
      code: "KOR",
      name: "South Korea",
      flag: "🇰🇷",
      region: "East Asia",
      totalExportsUSD: 632.7,
      totalImportsUSD: 642.6,
      tradeBalanceUSD: -9.9,
      globalExportRank: 8,
      globalImportRank: 8,
      tradeToGdpRatio: 84.1,
      currency: "KRW (South Korean Won)",
      topExportProducts: [
        { name: "Memory Semiconductors (DRAM & NAND Flash - Samsung, SK Hynix)", valueUSD: 98.6, sharePct: 15.6 },
        { name: "Automobiles & Electric Vehicles (Hyundai, Kia)", valueUSD: 70.9, sharePct: 11.2 },
        { name: "Refined Petroleum Products", valueUSD: 52.8, sharePct: 8.3 },
        { name: "Shipbuilding & Marine Structures (LNG Carriers)", valueUSD: 21.4, sharePct: 3.4 },
        { name: "Secondary Rechargeable Batteries (EV Cells)", valueUSD: 14.8, sharePct: 2.3 }
      ],
      topImportProducts: [
        { name: "Crude Petroleum", valueUSD: 86.2, sharePct: 13.4 },
        { name: "Natural Gas (LNG)", valueUSD: 44.5, sharePct: 6.9 },
        { name: "Semiconductors & Electronic Sub-assemblies", valueUSD: 39.8, sharePct: 6.2 },
        { name: "Coal", valueUSD: 23.1, sharePct: 3.6 },
        { name: "Chemical Raw Materials", valueUSD: 18.5, sharePct: 2.9 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 18.3 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 19.7 },
        { country: "Vietnam", code: "VNM", flag: "🇻🇳", sharePct: 8.5 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 4.6 },
        { country: "Taiwan", code: "TWN", flag: "🇹🇼", sharePct: 3.2 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 22.1 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 11.1 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 7.5 },
        { country: "Australia", code: "AUS", flag: "🇦🇺", sharePct: 5.6 },
        { country: "Saudi Arabia", code: "SAU", flag: "🇸🇦", sharePct: 5.2 }
      ],
      majorTradeAgreements: ["RCEP", "KORUS FTA", "Korea-EU FTA", "Korea-China FTA"],
      strategicTradeStrength: "Global duopoly in memory semiconductors (over 70% of world DRAM), leading builder of high-tech ice-class LNG carriers and EV batteries.",
      strategicTradeVulnerability: "Extreme sensitivity to global chip cycle downturns; caught between US export controls and China being its biggest single customer.",
      cssExamRelevance: "Geoeconomic balancing between US security umbrella and Chinese commercial dependencies; the CHIPS 4 Alliance (US, Japan, Korea, Taiwan)."
    },
    {
      id: "nld",
      code: "NLD",
      name: "Netherlands",
      flag: "🇳🇱",
      region: "Europe",
      totalExportsUSD: 934.6,
      totalImportsUSD: 840.4,
      tradeBalanceUSD: 94.2,
      globalExportRank: 4,
      globalImportRank: 5,
      tradeToGdpRatio: 162.5,
      currency: "EUR (Euro)",
      topExportProducts: [
        { name: "Semiconductor Lithography Machinery (ASML EUV Systems)", valueUSD: 52.4, sharePct: 5.6 },
        { name: "Refined Petroleum & Chemical Intermediates (Rotterdam)", valueUSD: 78.5, sharePct: 8.4 },
        { name: "Medicaments & Vaccine Preparations", valueUSD: 48.0, sharePct: 5.1 },
        { name: "Computers & Telecommunications Equipment (Re-exports)", valueUSD: 65.2, sharePct: 7.0 },
        { name: "Agri-food (Cut Flowers, Dairy, Vegetables - Greenhouses)", valueUSD: 58.4, sharePct: 6.2 }
      ],
      topImportProducts: [
        { name: "Crude Petroleum & Gas", valueUSD: 88.0, sharePct: 10.5 },
        { name: "Electronic Microcircuits & Telecom Equipment", valueUSD: 82.4, sharePct: 9.8 },
        { name: "Motor Vehicles & Transport Machinery", valueUSD: 44.5, sharePct: 5.3 },
        { name: "Medicinal & Pharmaceutical Products", valueUSD: 39.2, sharePct: 4.7 },
        { name: "Base Metals & Chemical Ingredients", valueUSD: 31.8, sharePct: 3.8 }
      ],
      topExportPartners: [
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 22.8 },
        { country: "Belgium", code: "BEL", flag: "🇧🇪", sharePct: 11.2 },
        { country: "France", code: "FRA", flag: "🇫🇷", sharePct: 8.1 },
        { country: "United Kingdom", code: "GBR", flag: "🇬🇧", sharePct: 7.4 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 5.2 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 13.8 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 13.2 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 9.5 },
        { country: "Belgium", code: "BEL", flag: "🇧🇪", sharePct: 7.8 },
        { country: "United Kingdom", code: "GBR", flag: "🇬🇧", sharePct: 5.1 }
      ],
      majorTradeAgreements: ["EU Single Market", "EU Customs Union", "Schengen Trade Area"],
      strategicTradeStrength: "The 'Gateway to Europe': Port of Rotterdam is Europe's largest seaport; home to ASML—the world's sole maker of Extreme Ultraviolet (EUV) photolithography machines.",
      strategicTradeVulnerability: "High exposure to global trade disruptions due to immense re-export volume; intense geopolitical pressure from the US over ASML exports to China.",
      cssExamRelevance: "The ASML choke point in the global microchip supply chain, high-tech agricultural yields per acre, and Rotterdam's role in European energy security."
    },
    {
      id: "fra",
      code: "FRA",
      name: "France",
      flag: "🇫🇷",
      region: "Europe",
      totalExportsUSD: 648.5,
      totalImportsUSD: 773.1,
      tradeBalanceUSD: -124.6,
      globalExportRank: 7,
      globalImportRank: 7,
      tradeToGdpRatio: 72.8,
      currency: "EUR (Euro)",
      topExportProducts: [
        { name: "Aerospace Equipment & Aircraft (Airbus)", valueUSD: 61.2, sharePct: 9.4 },
        { name: "Packaged Medicaments & Vaccines (Sanofi)", valueUSD: 38.5, sharePct: 5.9 },
        { name: "Luxury Goods, Perfumes & Cosmetics (LVMH, L'Oréal)", valueUSD: 36.8, sharePct: 5.7 },
        { name: "Automobiles & Automotive Parts", valueUSD: 34.0, sharePct: 5.2 },
        { name: "Beverages, Wine & Spirits (Bordeaux, Champagne)", valueUSD: 21.4, sharePct: 3.3 }
      ],
      topImportProducts: [
        { name: "Petroleum, Natural Gas & Nuclear Fuel Elements", valueUSD: 85.0, sharePct: 11.0 },
        { name: "Automotive Vehicles & Components", valueUSD: 72.4, sharePct: 9.4 },
        { name: "Electronic Equipment & Computers", valueUSD: 59.8, sharePct: 7.7 },
        { name: "Industrial Machinery", valueUSD: 54.2, sharePct: 7.0 },
        { name: "Chemicals & Plastics", valueUSD: 44.1, sharePct: 5.7 }
      ],
      topExportPartners: [
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 13.7 },
        { country: "Italy", code: "ITA", flag: "🇮🇹", sharePct: 8.9 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 8.2 },
        { country: "Belgium", code: "BEL", flag: "🇧🇪", sharePct: 7.8 },
        { country: "Spain", code: "ESP", flag: "🇪🇸", sharePct: 7.4 }
      ],
      topImportPartners: [
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 16.2 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 10.4 },
        { country: "Italy", code: "ITA", flag: "🇮🇹", sharePct: 8.3 },
        { country: "Belgium", code: "BEL", flag: "🇧🇪", sharePct: 7.7 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 6.5 }
      ],
      majorTradeAgreements: ["EU Single Market", "EU Customs Union"],
      strategicTradeStrength: "Aviation/defense engineering (Airbus, Dassault Rafale), agricultural breadbasket of Europe, and premier global luxury branding power.",
      strategicTradeVulnerability: "Chronic merchandise deficit; high labor costs causing industrial relocation to Eastern Europe and Southern Mediterranean.",
      cssExamRelevance: "EU strategic autonomy debate (Emmanuel Macron), Common Agricultural Policy (CAP) subsidies, and defense equipment exports to India and Middle East."
    },
    {
      id: "ita",
      code: "ITA",
      name: "Italy",
      flag: "🇮🇹",
      region: "Europe",
      totalExportsUSD: 677.2,
      totalImportsUSD: 639.8,
      tradeBalanceUSD: 37.4,
      globalExportRank: 6,
      globalImportRank: 9,
      tradeToGdpRatio: 68.3,
      currency: "EUR (Euro)",
      topExportProducts: [
        { name: "Precision Industrial Machinery & Factory Automation", valueUSD: 112.5, sharePct: 16.6 },
        { name: "Pharmaceuticals & Biotechnology", valueUSD: 49.2, sharePct: 7.3 },
        { name: "Motor Vehicles & High-End Luxury Cars (Ferrari, Fiat)", valueUSD: 44.8, sharePct: 6.6 },
        { name: "High-End Fashion, Leather & Footwear (Gucci, Prada)", valueUSD: 42.1, sharePct: 6.2 },
        { name: "Agri-Food (Olive Oil, Pasta, Cheese, Wine)", valueUSD: 36.4, sharePct: 5.4 }
      ],
      topImportProducts: [
        { name: "Crude Oil & Natural Gas", valueUSD: 76.5, sharePct: 12.0 },
        { name: "Automobiles & Vehicle Parts", valueUSD: 52.8, sharePct: 8.3 },
        { name: "Chemical & Pharmaceutical Ingredients", valueUSD: 48.0, sharePct: 7.5 },
        { name: "Base Metals, Scrap & Finished Steel", valueUSD: 41.2, sharePct: 6.4 },
        { name: "Computers & Electronics", valueUSD: 38.6, sharePct: 6.0 }
      ],
      topExportPartners: [
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 12.4 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 10.4 },
        { country: "France", code: "FRA", flag: "🇫🇷", sharePct: 10.1 },
        { country: "Spain", code: "ESP", flag: "🇪🇸", sharePct: 5.2 },
        { country: "United Kingdom", code: "GBR", flag: "🇬🇧", sharePct: 4.8 }
      ],
      topImportPartners: [
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 15.1 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 8.8 },
        { country: "France", code: "FRA", flag: "🇫🇷", sharePct: 8.3 },
        { country: "Netherlands", code: "NLD", flag: "🇳🇱", sharePct: 5.9 },
        { country: "Spain", code: "ESP", flag: "🇪🇸", sharePct: 4.7 }
      ],
      majorTradeAgreements: ["EU Single Market", "EU Customs Union"],
      strategicTradeStrength: "Europe's second-largest manufacturing powerhouse after Germany; unmatched global brand equity in industrial robotics, gourmet food, and haute couture.",
      strategicTradeVulnerability: "Almost complete reliance on foreign gas supplies; high public debt limiting state fiscal backing for green retooling.",
      cssExamRelevance: "Italy's decision to withdraw from China's Belt and Road Initiative (BRI) in 2023 and the economic integration between Northern Italy and Bavaria."
    },
    {
      id: "gbr",
      code: "GBR",
      name: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      totalExportsUSD: 520.6,
      totalImportsUSD: 791.4,
      tradeBalanceUSD: -270.8,
      globalExportRank: 12,
      globalImportRank: 4,
      tradeToGdpRatio: 64.9,
      currency: "GBP (British Pound)",
      topExportProducts: [
        { name: "Commercial & Military Aircraft Engines (Rolls-Royce)", valueUSD: 36.8, sharePct: 7.1 },
        { name: "Medicaments & Biopharmaceuticals (AstraZeneca, GSK)", valueUSD: 32.5, sharePct: 6.2 },
        { name: "Automobiles (Jaguar Land Rover, Mini)", valueUSD: 31.0, sharePct: 6.0 },
        { name: "Crude Oil & Refined Petroleum (North Sea Brent)", valueUSD: 28.4, sharePct: 5.5 },
        { name: "Non-monetary Gold & Precious Stones (London Bullion)", valueUSD: 27.2, sharePct: 5.2 }
      ],
      topImportProducts: [
        { name: "Cars & Automotive Components", valueUSD: 56.4, sharePct: 7.1 },
        { name: "Natural Gas & Crude Petroleum", valueUSD: 52.8, sharePct: 6.7 },
        { name: "Non-monetary Gold (London Financial Center)", valueUSD: 44.0, sharePct: 5.6 },
        { name: "Telecommunications & Computing Equipment", valueUSD: 38.5, sharePct: 4.9 },
        { name: "Medicinal & Pharmaceutical Preparations", valueUSD: 33.2, sharePct: 4.2 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 21.0 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 8.5 },
        { country: "Netherlands", code: "NLD", flag: "🇳🇱", sharePct: 7.9 },
        { country: "Ireland", code: "IRL", flag: "🇮🇪", sharePct: 6.8 },
        { country: "France", code: "FRA", flag: "🇫🇷", sharePct: 6.1 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 12.8 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 11.9 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 10.4 },
        { country: "Norway", code: "NOR", flag: "🇳🇴", sharePct: 6.8 },
        { country: "Netherlands", code: "NLD", flag: "🇳🇱", sharePct: 6.2 }
      ],
      majorTradeAgreements: ["EU-UK Trade and Cooperation Agreement (TCA)", "CPTPP (Joined 2023)", "UK-Australia FTA", "UK Developing Countries Trading Scheme (DCTS)"],
      strategicTradeStrength: "Global titan in financial and legal services ($400B+ services exports), aerospace turbofans, and advanced biopharma research.",
      strategicTradeVulnerability: "Post-Brexit non-tariff trade friction with the EU; steep merchandise trade deficit requiring massive capital inflows.",
      cssExamRelevance: "Economic fallout of Brexit, the Northern Ireland Protocol / Windsor Framework, and the UK's pivot to the Indo-Pacific via CPTPP."
    },
    {
      id: "ind",
      code: "IND",
      name: "India",
      flag: "🇮🇳",
      region: "South Asia",
      totalExportsUSD: 437.1,
      totalImportsUSD: 672.7,
      tradeBalanceUSD: -235.6,
      globalExportRank: 17,
      globalImportRank: 8,
      tradeToGdpRatio: 48.9,
      currency: "INR (Indian Rupee)",
      topExportProducts: [
        { name: "Refined Petroleum Products (Jamnagar Refinery)", valueUSD: 84.5, sharePct: 19.3 },
        { name: "Cut & Polished Diamonds and Jewelry (Surat)", valueUSD: 36.2, sharePct: 8.3 },
        { name: "Packaged Medicaments & Generic Drugs ('Pharmacy of the World')", valueUSD: 24.8, sharePct: 5.7 },
        { name: "Iron & Steel Products", valueUSD: 16.4, sharePct: 3.8 },
        { name: "Smartphones & Mobile Electronics (Apple assembly)", valueUSD: 14.5, sharePct: 3.3 }
      ],
      topImportProducts: [
        { name: "Crude Petroleum", valueUSD: 172.5, sharePct: 25.6 },
        { name: "Unwrought Gold & Precious Stones", valueUSD: 58.4, sharePct: 8.7 },
        { name: "Coal, Briquettes & Coke", valueUSD: 42.1, sharePct: 6.3 },
        { name: "Electronic Components & Semiconductors", valueUSD: 38.0, sharePct: 5.6 },
        { name: "Vegetable Oils (Palm Oil, Soybean Oil)", valueUSD: 18.5, sharePct: 2.8 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 17.6 },
        { country: "United Arab Emirates", code: "ARE", flag: "🇦🇪", sharePct: 8.2 },
        { country: "Netherlands", code: "NLD", flag: "🇳🇱", sharePct: 5.1 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 3.8 },
        { country: "Singapore", code: "SGP", flag: "🇸🇬", sharePct: 3.4 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 15.1 },
        { country: "Russia", code: "RUS", flag: "🇷🇺", sharePct: 9.8 },
        { country: "United Arab Emirates", code: "ARE", flag: "🇦🇪", sharePct: 7.9 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 6.1 },
        { country: "Saudi Arabia", code: "SAU", flag: "🇸🇦", sharePct: 5.4 }
      ],
      majorTradeAgreements: ["India-UAE CEPA", "India-Australia ECTA", "SAFTA", "BIMSTEC"],
      strategicTradeStrength: "Generic pharmaceuticals (supplying 20% of global generics and 50% of global vaccines), IT software services ($190B+ services exports), and massive crude oil refining capacity.",
      strategicTradeVulnerability: "Crippling energy deficit (>85% imported oil); vast bilateral trade deficit with China ($85B+) in electronics and active pharmaceutical ingredients (APIs).",
      cssExamRelevance: "India's boycott of RCEP, discount Russian crude arbitrage and resale to Europe, and the Production Linked Incentive (PLI) scheme for manufacturing."
    },
    {
      id: "sau",
      code: "SAU",
      name: "Saudi Arabia",
      flag: "🇸🇦",
      region: "Middle East",
      totalExportsUSD: 322.4,
      totalImportsUSD: 205.1,
      tradeBalanceUSD: 117.3,
      globalExportRank: 22,
      globalImportRank: 28,
      tradeToGdpRatio: 56.2,
      currency: "SAR (Saudi Riyal)",
      topExportProducts: [
        { name: "Crude Petroleum (Saudi Aramco)", valueUSD: 242.0, sharePct: 75.1 },
        { name: "Refined Petroleum Products", valueUSD: 38.4, sharePct: 11.9 },
        { name: "Chemicals & Polymers (SABIC Plastics)", valueUSD: 24.5, sharePct: 7.6 },
        { name: "Aluminum & Base Metals", valueUSD: 4.8, sharePct: 1.5 },
        { name: "Fertilizers (Urea & Phosphates)", valueUSD: 3.9, sharePct: 1.2 }
      ],
      topImportProducts: [
        { name: "Motor Vehicles & Auto Parts", valueUSD: 22.4, sharePct: 10.9 },
        { name: "Industrial & Electrical Machinery", valueUSD: 21.0, sharePct: 10.2 },
        { name: "Defense Equipment & Aircraft Components", valueUSD: 14.5, sharePct: 7.1 },
        { name: "Pharmaceuticals & Healthcare Tech", valueUSD: 8.6, sharePct: 4.2 },
        { name: "Iron & Steel for Vision 2030 Mega-projects (NEOM)", valueUSD: 7.8, sharePct: 3.8 }
      ],
      topExportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 16.5 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 11.2 },
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 10.8 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 9.6 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 5.4 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 21.4 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 10.2 },
        { country: "United Arab Emirates", code: "ARE", flag: "🇦🇪", sharePct: 6.8 },
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 5.9 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 4.7 }
      ],
      majorTradeAgreements: ["GCC Customs Union (Gulf Cooperation Council)", "GAFTA (Greater Arab FTA)", "OPEC+ Agreements"],
      strategicTradeStrength: "Lowest crude oil extraction costs on Earth (~$3-$5 per barrel) with 260B+ barrels in proven reserves; swing producer of global energy.",
      strategicTradeVulnerability: "Extreme commodity concentration (crude oil still accounts for >75% of fiscal and export revenue); high food import dependency.",
      cssExamRelevance: "Saudi Vision 2030 industrial diversification, the Petroyuan settlement debate, and the Strait of Hormuz chokepoint."
    },
    {
      id: "are",
      code: "ARE",
      name: "United Arab Emirates",
      flag: "🇦🇪",
      region: "Middle East",
      totalExportsUSD: 488.2,
      totalImportsUSD: 420.5,
      tradeBalanceUSD: 67.7,
      globalExportRank: 14,
      globalImportRank: 16,
      tradeToGdpRatio: 172.0,
      currency: "AED (UAE Dirham)",
      topExportProducts: [
        { name: "Crude Petroleum & Gas (ADNOC)", valueUSD: 112.5, sharePct: 23.0 },
        { name: "Gold & Precious Diamonds (Dubai Multi Commodities Centre)", valueUSD: 88.4, sharePct: 18.1 },
        { name: "Broadcasting Equipment & Smart Electronics (Re-exports)", valueUSD: 45.2, sharePct: 9.3 },
        { name: "Petroleum Gases & LNG", valueUSD: 24.8, sharePct: 5.1 },
        { name: "Aluminum & Base Metal Products", valueUSD: 14.1, sharePct: 2.9 }
      ],
      topImportProducts: [
        { name: "Unwrought Gold & Precious Metals", valueUSD: 78.2, sharePct: 18.6 },
        { name: "Consumer Electronics & Mobile Phones", valueUSD: 42.1, sharePct: 10.0 },
        { name: "Motor Vehicles & Aircraft Equipment", valueUSD: 36.5, sharePct: 8.7 },
        { name: "Industrial Machinery", valueUSD: 28.4, sharePct: 6.8 },
        { name: "Chemical & Polymer Inputs", valueUSD: 16.0, sharePct: 3.8 }
      ],
      topExportPartners: [
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 13.8 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 9.4 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 8.1 },
        { country: "Saudi Arabia", code: "SAU", flag: "🇸🇦", sharePct: 6.5 },
        { country: "Iraq", code: "IRQ", flag: "🇮🇶", sharePct: 4.8 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 19.4 },
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 11.2 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 7.8 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 4.9 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 4.1 }
      ],
      majorTradeAgreements: ["GCC Customs Union", "India-UAE CEPA", "UAE-Israel Comprehensive Economic Partnership", "BRICS (Joined 2024)"],
      strategicTradeStrength: "Global re-export capital; Jebel Ali Port is the largest marine terminal in the Middle East; premier hub bridging Africa, Asia, and Europe.",
      strategicTradeVulnerability: "Exposure to international illicit finance crackdowns (FATF scrutiny) and regional geopolitical escalations in the Persian Gulf.",
      cssExamRelevance: "Dubai's emergence as an alternative financial capital to London/Singapore, the UAE's CEPA bilateral trade spree, and Pakistan-UAE remittance and oil trade."
    },
    {
      id: "twn",
      code: "TWN",
      name: "Taiwan",
      flag: "🇹🇼",
      region: "East Asia",
      totalExportsUSD: 432.4,
      totalImportsUSD: 358.9,
      tradeBalanceUSD: 73.5,
      globalExportRank: 18,
      globalImportRank: 19,
      tradeToGdpRatio: 114.2,
      currency: "TWD (New Taiwan Dollar)",
      topExportProducts: [
        { name: "Advanced Semiconductors & Microchips (TSMC)", valueUSD: 166.5, sharePct: 38.5 },
        { name: "Electronic Integrated Circuits & Flat Panels", valueUSD: 52.8, sharePct: 12.2 },
        { name: "Machinery & Computer Storage Units", valueUSD: 41.0, sharePct: 9.5 },
        { name: "Plastics & Petrochemical Products", valueUSD: 21.4, sharePct: 5.0 },
        { name: "Optical & Precision Instruments", valueUSD: 14.8, sharePct: 3.4 }
      ],
      topImportProducts: [
        { name: "Semiconductor Manufacturing Machinery (ASML/Applied Materials)", valueUSD: 48.5, sharePct: 13.5 },
        { name: "Crude Petroleum & Liquefied Natural Gas", valueUSD: 44.0, sharePct: 12.3 },
        { name: "Electronic Microcircuits (Raw Wafers)", valueUSD: 38.2, sharePct: 10.6 },
        { name: "Chemical Raw Materials", valueUSD: 24.1, sharePct: 6.7 },
        { name: "Coal & Energy Minerals", valueUSD: 18.0, sharePct: 5.0 }
      ],
      topExportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 25.2 },
        { country: "Hong Kong", code: "HKG", flag: "🇭🇰", sharePct: 13.8 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 17.5 },
        { country: "European Union", code: "EU", flag: "🇪🇺", sharePct: 8.9 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 7.2 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 19.8 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 12.4 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 11.2 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 6.8 },
        { country: "Australia", code: "AUS", flag: "🇦🇺", sharePct: 5.2 }
      ],
      majorTradeAgreements: ["WTO Member (Separate Customs Territory of Taiwan, Penghu, Kinmen and Matsu)", "ECFA with Mainland China", "APEC"],
      strategicTradeStrength: "The 'Silicon Shield': Produces over 60% of the world's commercial semiconductors and over 90% of sub-5nm advanced chips (TSMC fab clusters).",
      strategicTradeVulnerability: "Existential cross-strait geopolitical risk; vulnerability to maritime blockade across the Taiwan Strait; 98% dependent on imported energy.",
      cssExamRelevance: "The semiconductor supply chain as a critical national security asset; US CHIPS Act fab investments in Arizona; and Taiwan Strait geopolitical flashpoints."
    },
    {
      id: "vnm",
      code: "VNM",
      name: "Vietnam",
      flag: "🇻🇳",
      region: "Southeast Asia",
      totalExportsUSD: 355.5,
      totalImportsUSD: 327.1,
      tradeBalanceUSD: 28.4,
      globalExportRank: 20,
      globalImportRank: 20,
      tradeToGdpRatio: 185.0,
      currency: "VND (Vietnamese Dong)",
      topExportProducts: [
        { name: "Broadcasting Equipment, Telephones & Smartphones (Samsung Vietnam)", valueUSD: 54.8, sharePct: 15.4 },
        { name: "Electronic Integrated Circuits & Computer Parts", valueUSD: 42.5, sharePct: 12.0 },
        { name: "Footwear & Athletic Shoes (Nike, Adidas)", valueUSD: 24.0, sharePct: 6.8 },
        { name: "Textiles, Knitwear & Clothing", valueUSD: 22.8, sharePct: 6.4 },
        { name: "Agricultural Goods (Robusta Coffee, Rice, Cashews, Seafood)", valueUSD: 16.5, sharePct: 4.6 }
      ],
      topImportProducts: [
        { name: "Integrated Circuits & Semiconductor Wafers", valueUSD: 48.2, sharePct: 14.7 },
        { name: "Telecommunications & Electronic Sub-assemblies", valueUSD: 26.5, sharePct: 8.1 },
        { name: "Fabrics & Raw Cotton for Garment Industry", valueUSD: 18.0, sharePct: 5.5 },
        { name: "Refined Petroleum", valueUSD: 14.2, sharePct: 4.3 },
        { name: "Plastics & Resins", valueUSD: 12.8, sharePct: 3.9 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 29.4 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 16.8 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 7.2 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 6.6 },
        { country: "Netherlands", code: "NLD", flag: "🇳🇱", sharePct: 3.2 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 34.2 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 16.8 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 7.1 },
        { country: "Taiwan", code: "TWN", flag: "🇹🇼", sharePct: 6.2 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 4.5 }
      ],
      majorTradeAgreements: ["CPTPP", "RCEP", "EVFTA (EU-Vietnam FTA)", "AFTA (ASEAN)"],
      strategicTradeStrength: "Premier beneficiary of the 'China + 1' manufacturing relocation wave; ultra-competitive factory wages, high trade openness, and aggressive FTA diplomacy.",
      strategicTradeVulnerability: "Heavy reliance on imported intermediate inputs from China (textile fabrics, chip dies); risks of US transshipment tariff penalties.",
      cssExamRelevance: "Comparison of Vietnam vs. Pakistan export trajectories (Vietnam was behind Pakistan in 1990; now exports 11x more); export-led industrialization model."
    },
    {
      id: "aus",
      code: "AUS",
      name: "Australia",
      flag: "🇦🇺",
      region: "Oceania",
      totalExportsUSD: 370.8,
      totalImportsUSD: 290.4,
      tradeBalanceUSD: 80.4,
      globalExportRank: 19,
      globalImportRank: 22,
      tradeToGdpRatio: 46.5,
      currency: "AUD (Australian Dollar)",
      topExportProducts: [
        { name: "Iron Ore & Concentrates (Pilbara - Rio Tinto, BHP)", valueUSD: 94.2, sharePct: 25.4 },
        { name: "Liquefied Natural Gas (LNG)", valueUSD: 62.5, sharePct: 16.9 },
        { name: "Metallurgical & Thermal Coal", valueUSD: 58.0, sharePct: 15.6 },
        { name: "Hard Rock Lithium (Spodumene) & Critical Minerals", valueUSD: 18.2, sharePct: 4.9 },
        { name: "Agricultural Goods (Wheat, Beef, Wool, Barley)", valueUSD: 24.5, sharePct: 6.6 }
      ],
      topImportProducts: [
        { name: "Refined Petroleum Products", valueUSD: 36.8, sharePct: 12.7 },
        { name: "Passenger Cars & Commercial Trucks", valueUSD: 31.4, sharePct: 10.8 },
        { name: "Telecommunications & Computing Equipment", valueUSD: 16.2, sharePct: 5.6 },
        { name: "Industrial Heavy Machinery & Excavators", valueUSD: 14.8, sharePct: 5.1 },
        { name: "Medicaments & Healthcare Supplies", valueUSD: 12.0, sharePct: 4.1 }
      ],
      topExportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 32.5 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 15.8 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 7.2 },
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 6.1 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 3.8 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 24.0 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 12.1 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 6.8 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 5.9 },
        { country: "Thailand", code: "THA", flag: "🇹🇭", sharePct: 4.8 }
      ],
      majorTradeAgreements: ["CPTPP", "RCEP", "AUKUS", "ChAFTA (China-Australia FTA)", "Australia-India ECTA"],
      strategicTradeStrength: "The 'Quarry of Asia': Immense geological wealth in iron ore, bauxite, LNG, gold, and energy transition minerals (lithium, rare earths).",
      strategicTradeVulnerability: "Extreme trade exposure to China (~33% of exports), exposed to Chinese coercive economic diplomacy and commodity price volatility.",
      cssExamRelevance: "Chinese trade sanctions on Australian coal, barley, and wine (2020-2023) and subsequent rapprochement; critical minerals alliance with the US."
    },
    {
      id: "bra",
      code: "BRA",
      name: "Brazil",
      flag: "🇧🇷",
      region: "South America",
      totalExportsUSD: 339.7,
      totalImportsUSD: 240.8,
      tradeBalanceUSD: 98.9,
      globalExportRank: 21,
      globalImportRank: 25,
      tradeToGdpRatio: 38.6,
      currency: "BRL (Brazilian Real)",
      topExportProducts: [
        { name: "Soybeans & Soybean Meal (Mato Grosso)", valueUSD: 53.2, sharePct: 15.7 },
        { name: "Crude Petroleum (Pre-salt offshore fields)", valueUSD: 42.5, sharePct: 12.5 },
        { name: "Iron Ore & Concentrates (Vale)", valueUSD: 30.8, sharePct: 9.1 },
        { name: "Cane Sugar & Ethanol", valueUSD: 16.4, sharePct: 4.8 },
        { name: "Beef & Poultry Meat (JBS)", valueUSD: 18.2, sharePct: 5.4 }
      ],
      topImportProducts: [
        { name: "Chemical Fertilizers (Potash, Nitrogen, Phosphates)", valueUSD: 24.8, sharePct: 10.3 },
        { name: "Refined Petroleum (Diesel & Gasoline)", valueUSD: 21.0, sharePct: 8.7 },
        { name: "Motor Vehicle Components & Cars", valueUSD: 16.2, sharePct: 6.7 },
        { name: "Electronic Integrated Circuits & Telecom", valueUSD: 14.5, sharePct: 6.0 },
        { name: "Medicaments & Vaccines", valueUSD: 11.8, sharePct: 4.9 }
      ],
      topExportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 30.8 },
        { country: "European Union", code: "EU", flag: "🇪🇺", sharePct: 14.5 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 10.9 },
        { country: "Argentina", code: "ARG", flag: "🇦🇷", sharePct: 4.9 },
        { country: "Netherlands", code: "NLD", flag: "🇳🇱", sharePct: 3.8 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 22.4 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 17.2 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 6.1 },
        { country: "Argentina", code: "ARG", flag: "🇦🇷", sharePct: 5.3 },
        { country: "Russia", code: "RUS", flag: "🇷🇺", sharePct: 4.8 }
      ],
      majorTradeAgreements: ["Mercosur (Southern Common Market)", "BRICS Member", "Mercosur-EU Trade Deal (Pending)"],
      strategicTradeStrength: "Agricultural superpower feeding the world: #1 exporter of soybeans, sugar, coffee, orange juice, and poultry; massive offshore pre-salt oil reserves.",
      strategicTradeVulnerability: "Critical dependency on imported fertilizers (85%+ imported, heavily from Russia and Belarus); high domestic transport logistics costs ('Custo Brasil').",
      cssExamRelevance: "Mercosur-EU deforestation regulations (EUDR), BRICS local-currency agricultural settlements, and food security in the Global South."
    },
    {
      id: "rus",
      code: "RUS",
      name: "Russia",
      flag: "🇷🇺",
      region: "Eurasia",
      totalExportsUSD: 425.1,
      totalImportsUSD: 303.8,
      tradeBalanceUSD: 121.3,
      globalExportRank: 16,
      globalImportRank: 21,
      tradeToGdpRatio: 41.2,
      currency: "RUB (Russian Ruble)",
      topExportProducts: [
        { name: "Crude Petroleum (Urals & ESPO blend)", valueUSD: 145.0, sharePct: 34.1 },
        { name: "Refined Petroleum & Diesel", valueUSD: 58.4, sharePct: 13.7 },
        { name: "Natural Gas (Pipeline gas & Yamal LNG)", valueUSD: 36.2, sharePct: 8.5 },
        { name: "Coal & Solid Fuels", valueUSD: 24.8, sharePct: 5.8 },
        { name: "Fertilizers, Wheat & Metallurgical Nickel/Palladium", valueUSD: 32.5, sharePct: 7.6 }
      ],
      topImportProducts: [
        { name: "Motor Vehicles & Auto Components (largely from China)", valueUSD: 38.5, sharePct: 12.7 },
        { name: "Industrial & Electrical Machinery", valueUSD: 36.2, sharePct: 11.9 },
        { name: "Telecommunications & Computing Hardware", valueUSD: 24.0, sharePct: 7.9 },
        { name: "Chemical & Polymer Products", valueUSD: 18.2, sharePct: 6.0 },
        { name: "Pharmaceuticals", valueUSD: 14.5, sharePct: 4.8 }
      ],
      topExportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 32.0 },
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 23.5 },
        { country: "Turkey", code: "TUR", flag: "🇹🇷", sharePct: 11.2 },
        { country: "Belarus", code: "BLR", flag: "🇧🇾", sharePct: 5.8 },
        { country: "Kazakhstan", code: "KAZ", flag: "🇰🇿", sharePct: 4.1 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 45.2 },
        { country: "Belarus", code: "BLR", flag: "🇧🇾", sharePct: 8.5 },
        { country: "Turkey", code: "TUR", flag: "🇹🇷", sharePct: 6.8 },
        { country: "Kazakhstan", code: "KAZ", flag: "🇰🇿", sharePct: 4.2 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 3.5 }
      ],
      majorTradeAgreements: ["Eurasian Economic Union (EAEU)", "BRICS", "SCO (Shanghai Cooperation Organisation)", "OPEC+"],
      strategicTradeStrength: "Energy and mineral colossus: unmatched natural gas reserves, premier wheat exporter, and key supplier of palladium, enriched uranium, and potash.",
      strategicTradeVulnerability: "Severe Western sanctions, expulsion from SWIFT, price caps on maritime crude, and acute dependency on Chinese consumer and industrial imports.",
      cssExamRelevance: "Geoeconomic pivot to Asia (China/India energy axis), evasion of the $60 G7 oil price cap via 'shadow tanker fleets', and de-dollarization of bilateral trade."
    },
    {
      id: "mex",
      code: "MEX",
      name: "Mexico",
      flag: "🇲🇽",
      region: "North America",
      totalExportsUSD: 593.0,
      totalImportsUSD: 621.5,
      tradeBalanceUSD: -28.5,
      globalExportRank: 9,
      globalImportRank: 10,
      tradeToGdpRatio: 78.4,
      currency: "MXN (Mexican Peso)",
      topExportProducts: [
        { name: "Motor Vehicles, Trucks & Auto Parts", valueUSD: 182.4, sharePct: 30.8 },
        { name: "Computers & Electronics Equipment", valueUSD: 44.8, sharePct: 7.6 },
        { name: "Electrical Machinery & Transformers", valueUSD: 38.5, sharePct: 6.5 },
        { name: "Crude Petroleum (Pemex)", valueUSD: 32.1, sharePct: 5.4 },
        { name: "Medical Instruments & Agribusiness (Avocados, Beer, Tequila)", valueUSD: 28.6, sharePct: 4.8 }
      ],
      topImportProducts: [
        { name: "Vehicle Parts & Intermediate Auto Assemblies", valueUSD: 68.4, sharePct: 11.0 },
        { name: "Electronic Integrated Circuits", valueUSD: 52.0, sharePct: 8.4 },
        { name: "Refined Petroleum & Natural Gas", valueUSD: 42.5, sharePct: 6.8 },
        { name: "Industrial Machinery & Metal Stampings", valueUSD: 36.8, sharePct: 5.9 },
        { name: "Plastics & Chemical Formulations", valueUSD: 28.2, sharePct: 4.5 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 83.2 },
        { country: "Canada", code: "CAN", flag: "🇨🇦", sharePct: 3.1 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 1.8 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 1.5 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 1.2 }
      ],
      topImportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 43.8 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 19.6 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 3.8 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 3.5 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 3.2 }
      ],
      majorTradeAgreements: ["USMCA", "CPTPP", "Pacific Alliance", "Mexico-EU FTA"],
      strategicTradeStrength: "Premier nearshoring hub bordering the US; world-class automotive manufacturing base ('Maquiladoras') tightly linked to the US supply chain.",
      strategicTradeVulnerability: "Extreme trade asymmetry: over 83% of all exports go to a single partner (United States), making it vulnerable to US domestic political shifts.",
      cssExamRelevance: "Mexico overtaking China as the #1 exporter of goods to the United States in 2023; USMCA rules of origin (75% automotive regional value content)."
    },
    {
      id: "can",
      code: "CAN",
      name: "Canada",
      flag: "🇨🇦",
      region: "North America",
      totalExportsUSD: 569.2,
      totalImportsUSD: 558.4,
      tradeBalanceUSD: 10.8,
      globalExportRank: 11,
      globalImportRank: 12,
      tradeToGdpRatio: 66.8,
      currency: "CAD (Canadian Dollar)",
      topExportProducts: [
        { name: "Crude Petroleum & Bitumen (Alberta Oil Sands)", valueUSD: 124.0, sharePct: 21.8 },
        { name: "Passenger Cars & Automotive Parts", valueUSD: 58.2, sharePct: 10.2 },
        { name: "Natural Gas & Hydrocarbon Derivatives", valueUSD: 24.5, sharePct: 4.3 },
        { name: "Unwrought Gold & Precious Metals", valueUSD: 22.8, sharePct: 4.0 },
        { name: "Lumber, Wood Pulp & Canola/Wheat", valueUSD: 28.5, sharePct: 5.0 }
      ],
      topImportProducts: [
        { name: "Automotive Vehicles & Components", valueUSD: 82.4, sharePct: 14.8 },
        { name: "Industrial & Electrical Machinery", valueUSD: 78.5, sharePct: 14.1 },
        { name: "Electronics & Computing Devices", valueUSD: 46.2, sharePct: 8.3 },
        { name: "Chemical & Plastic Products", valueUSD: 38.0, sharePct: 6.8 },
        { name: "Refined Petroleum & Fuels", valueUSD: 31.5, sharePct: 5.6 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 77.5 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 4.1 },
        { country: "United Kingdom", code: "GBR", flag: "🇬🇧", sharePct: 3.2 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 2.3 },
        { country: "Mexico", code: "MEX", flag: "🇲🇽", sharePct: 1.8 }
      ],
      topImportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 49.2 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 12.0 },
        { country: "Mexico", code: "MEX", flag: "🇲🇽", sharePct: 5.8 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 3.2 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 2.8 }
      ],
      majorTradeAgreements: ["USMCA", "CPTPP", "CETA (Canada-EU Comprehensive Economic and Trade Agreement)"],
      strategicTradeStrength: "Resource superpower: premier energy supplier to the US; vast reserves of uranium, potash, nickel, cobalt, and fresh timber.",
      strategicTradeVulnerability: "Severe pipeline infrastructure bottlenecks restricting crude exports to global markets (historically discounted Western Canadian Select [WCS]).",
      cssExamRelevance: "Trans Mountain Pipeline expansion opening Pacific Asian markets for Canadian crude; CETA dispute resolution; critical minerals partnership with G7."
    },
    {
      id: "che",
      code: "CHE",
      name: "Switzerland",
      flag: "🇨🇭",
      region: "Europe",
      totalExportsUSD: 420.2,
      totalImportsUSD: 363.8,
      tradeBalanceUSD: 56.4,
      globalExportRank: 17,
      globalImportRank: 18,
      tradeToGdpRatio: 128.5,
      currency: "CHF (Swiss Franc)",
      topExportProducts: [
        { name: "Packaged Medicaments & Vaccines (Novartis, Roche)", valueUSD: 98.4, sharePct: 23.4 },
        { name: "Gold Refining & Bullion Bars (Ticino Refineries)", valueUSD: 92.5, sharePct: 22.0 },
        { name: "Chemical & Biological Intermediates", valueUSD: 36.2, sharePct: 8.6 },
        { name: "Luxury Wristwatches (Rolex, Patek Philippe, Swatch)", valueUSD: 28.5, sharePct: 6.8 },
        { name: "Orthopedic & Medical Precision Instruments", valueUSD: 18.2, sharePct: 4.3 }
      ],
      topImportProducts: [
        { name: "Unwrought Gold for Refining & Re-export", valueUSD: 94.0, sharePct: 25.8 },
        { name: "Medicaments & Chemical Compounds", valueUSD: 42.1, sharePct: 11.6 },
        { name: "Automotive Vehicles & Electronics", valueUSD: 28.5, sharePct: 7.8 },
        { name: "Industrial Precision Machinery", valueUSD: 22.4, sharePct: 6.2 },
        { name: "Jewelry & Precious Gems", valueUSD: 16.8, sharePct: 4.6 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 18.2 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 14.5 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 8.8 },
        { country: "Italy", code: "ITA", flag: "🇮🇹", sharePct: 6.9 },
        { country: "France", code: "FRA", flag: "🇫🇷", sharePct: 5.8 }
      ],
      topImportPartners: [
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 19.8 },
        { country: "Italy", code: "ITA", flag: "🇮🇹", sharePct: 8.2 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 7.5 },
        { country: "France", code: "FRA", flag: "🇫🇷", sharePct: 7.1 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 6.2 }
      ],
      majorTradeAgreements: ["EFTA (European Free Trade Association)", "Swiss-EU Bilateral Agreements I & II", "Swiss-China FTA"],
      strategicTradeStrength: "Global capital of physical gold refining (refining ~70% of world gold); world leader in high-margin oncology pharmaceuticals and horology.",
      strategicTradeVulnerability: "Strong Swiss Franc appreciation dampens manufacturing margins; surrounded by the EU without formal single market membership.",
      cssExamRelevance: "Switzerland's unique bilateral treaty model with the EU, gold trade tracing regulations, and safe-haven capital flight dynamics."
    },
    {
      id: "tur",
      code: "TUR",
      name: "Turkey",
      flag: "🇹🇷",
      region: "Eurasia",
      totalExportsUSD: 255.8,
      totalImportsUSD: 361.8,
      tradeBalanceUSD: -106.0,
      globalExportRank: 29,
      globalImportRank: 19,
      tradeToGdpRatio: 82.0,
      currency: "TRY (Turkish Lira)",
      topExportProducts: [
        { name: "Motor Vehicles & Auto Components (Ford, Renault, Tofaş)", valueUSD: 35.6, sharePct: 13.9 },
        { name: "Industrial Machinery & Boilers", valueUSD: 25.2, sharePct: 9.9 },
        { name: "Iron & Steel Products", valueUSD: 17.8, sharePct: 7.0 },
        { name: "Apparel, Knitted Garments & Carpets", valueUSD: 19.4, sharePct: 7.6 },
        { name: "Chemical & Plastic Products", valueUSD: 16.5, sharePct: 6.5 }
      ],
      topImportProducts: [
        { name: "Crude Petroleum, Refined Fuels & Gas", valueUSD: 69.2, sharePct: 19.1 },
        { name: "Gold & Precious Bullion (Inflation hedge demand)", valueUSD: 33.8, sharePct: 9.3 },
        { name: "Industrial & Electrical Machinery", valueUSD: 38.5, sharePct: 10.6 },
        { name: "Motor Vehicles & Parts", valueUSD: 28.0, sharePct: 7.7 },
        { name: "Iron Ore, Scrap & Steel Inputs", valueUSD: 24.5, sharePct: 6.8 }
      ],
      topExportPartners: [
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 8.3 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 6.0 },
        { country: "Iraq", code: "IRQ", flag: "🇮🇶", sharePct: 5.0 },
        { country: "United Kingdom", code: "GBR", flag: "🇬🇧", sharePct: 4.9 },
        { country: "Italy", code: "ITA", flag: "🇮🇹", sharePct: 4.8 }
      ],
      topImportPartners: [
        { country: "Russia", code: "RUS", flag: "🇷🇺", sharePct: 12.6 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 12.4 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 7.8 },
        { country: "Switzerland", code: "CHE", flag: "🇨🇭", sharePct: 5.5 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 4.4 }
      ],
      majorTradeAgreements: ["EU-Turkey Customs Union", "ECO PTA", "D-8 Organization for Economic Cooperation"],
      strategicTradeStrength: "Geographic bridge between Europe, Asia, and the Middle East; premier manufacturer of commercial buses, appliances (Beko), and military drones (Bayraktar).",
      strategicTradeVulnerability: "High external energy import dependence ($70B+) and astronomical gold imports fueling severe current account deficits.",
      cssExamRelevance: "Turkey's customs union modernizations with the EU, the Middle Corridor (TITR) trans-Caspian trade route, and Turkey-Pakistan bilateral trade."
    },
    {
      id: "bgd",
      code: "BGD",
      name: "Bangladesh",
      flag: "🇧🇩",
      region: "South Asia",
      totalExportsUSD: 55.6,
      totalImportsUSD: 65.4,
      tradeBalanceUSD: -9.8,
      globalExportRank: 52,
      globalImportRank: 44,
      tradeToGdpRatio: 35.8,
      currency: "BDT (Bangladeshi Taka)",
      topExportProducts: [
        { name: "Ready-Made Garments - Knitwear (T-shirts, Sweaters)", valueUSD: 24.8, sharePct: 44.6 },
        { name: "Ready-Made Garments - Woven (Trousers, Shirts)", valueUSD: 22.2, sharePct: 39.9 },
        { name: "Jute & Jute Goods (Twine, Sacks, Yarn)", valueUSD: 1.1, sharePct: 2.0 },
        { name: "Leather & Footwear Products", valueUSD: 1.2, sharePct: 2.2 },
        { name: "Home Textiles & Frozen Shrimp", valueUSD: 1.0, sharePct: 1.8 }
      ],
      topImportProducts: [
        { name: "Cotton (Raw cotton, Yarn, Fabrics)", valueUSD: 11.2, sharePct: 17.1 },
        { name: "Petroleum Crude, Diesel & LNG", valueUSD: 9.5, sharePct: 14.5 },
        { name: "Industrial Machinery & Textile Boilers", valueUSD: 6.8, sharePct: 10.4 },
        { name: "Iron & Steel Ingots/Scrap", valueUSD: 4.5, sharePct: 6.9 },
        { name: "Foodstuffs (Wheat, Edible Oil, Sugar)", valueUSD: 5.2, sharePct: 8.0 }
      ],
      topExportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 19.8 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 14.2 },
        { country: "United Kingdom", code: "GBR", flag: "🇬🇧", sharePct: 9.5 },
        { country: "Spain", code: "ESP", flag: "🇪🇸", sharePct: 7.1 },
        { country: "France", code: "FRA", flag: "🇫🇷", sharePct: 5.8 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 26.5 },
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 18.2 },
        { country: "Singapore", code: "SGP", flag: "🇸🇬", sharePct: 6.5 },
        { country: "Malaysia", code: "MYS", flag: "🇲🇾", sharePct: 5.1 },
        { country: "Indonesia", code: "IDN", flag: "🇮🇩", sharePct: 4.8 }
      ],
      majorTradeAgreements: ["EU Everything But Arms (EBA)", "SAFTA", "BIMSTEC", "APTA"],
      strategicTradeStrength: "The world's #2 apparel exporter after China; massive scale economies, competitive labor rates, and duty-free access under the EU's EBA scheme.",
      strategicTradeVulnerability: "Extreme monoculture export vulnerability (>84% in apparel); impending loss of LDC trade preferences upon graduation in 2026.",
      cssExamRelevance: "Bangladesh's economic transformation vs. Pakistan; post-LDC graduation challenges (losing duty-free EBA access); and transition to GSP+."
    },
    {
      id: "qat",
      code: "QAT",
      name: "Qatar",
      flag: "🇶🇦",
      region: "Middle East",
      totalExportsUSD: 112.5,
      totalImportsUSD: 31.2,
      tradeBalanceUSD: 81.3,
      globalExportRank: 36,
      globalImportRank: 68,
      tradeToGdpRatio: 110.4,
      currency: "QAR (Qatari Riyal)",
      topExportProducts: [
        { name: "Liquefied Natural Gas (LNG - North Field)", valueUSD: 72.4, sharePct: 64.4 },
        { name: "Crude Petroleum", valueUSD: 18.5, sharePct: 16.4 },
        { name: "Petroleum Gases & Condensates", valueUSD: 11.2, sharePct: 10.0 },
        { name: "Chemical Fertilizers (Urea)", valueUSD: 3.8, sharePct: 3.4 },
        { name: "Polymers of Ethylene (Plastics)", valueUSD: 2.9, sharePct: 2.6 }
      ],
      topImportProducts: [
        { name: "Aircraft, Turbojets & Spacecraft Parts", valueUSD: 4.8, sharePct: 15.4 },
        { name: "Passenger Cars & Commercial Vehicles", valueUSD: 2.8, sharePct: 9.0 },
        { name: "Industrial & Electrical Machinery", valueUSD: 3.2, sharePct: 10.3 },
        { name: "Iron & Steel Structures", valueUSD: 1.8, sharePct: 5.8 },
        { name: "Foodstuffs & Dairy Products", valueUSD: 1.5, sharePct: 4.8 }
      ],
      topExportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 22.4 },
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 14.8 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 12.1 },
        { country: "South Korea", code: "KOR", flag: "🇰🇷", sharePct: 11.5 },
        { country: "Pakistan", code: "PAK", flag: "🇵🇰", sharePct: 4.2 }
      ],
      topImportPartners: [
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 15.2 },
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 14.8 },
        { country: "Germany", code: "DEU", flag: "🇩🇪", sharePct: 6.2 },
        { country: "United Kingdom", code: "GBR", flag: "🇬🇧", sharePct: 5.8 },
        { country: "Italy", code: "ITA", flag: "🇮🇹", sharePct: 5.2 }
      ],
      majorTradeAgreements: ["GCC Customs Union", "GAFTA"],
      strategicTradeStrength: "Global titan of Liquefied Natural Gas (LNG) expanding North Field capacity to 142 MTPA by 2030; lowest LNG liquefaction cost in the world.",
      strategicTradeVulnerability: "Almost complete dependence on hydrocarbon exports; nearly all food and consumer goods must be imported by sea or air.",
      cssExamRelevance: "Long-term LNG supply agreements (Pakistan-Qatar 15-year LNG contract, Germany-Qatar deal), and European energy substitution following Ukraine war."
    },
    {
      id: "idn",
      code: "IDN",
      name: "Indonesia",
      flag: "🇮🇩",
      region: "Southeast Asia",
      totalExportsUSD: 258.8,
      totalImportsUSD: 221.9,
      tradeBalanceUSD: 36.9,
      globalExportRank: 28,
      globalImportRank: 27,
      tradeToGdpRatio: 45.2,
      currency: "IDR (Indonesian Rupiah)",
      topExportProducts: [
        { name: "Mineral Fuels & Thermal Coal", valueUSD: 54.2, sharePct: 20.9 },
        { name: "Palm Oil & Fractions (Crude & Refined)", valueUSD: 29.8, sharePct: 11.5 },
        { name: "Iron & Steel Products (Processed Nickel Pig Iron)", valueUSD: 26.5, sharePct: 10.2 },
        { name: "Electrical Machinery & Electronics", valueUSD: 15.4, sharePct: 6.0 },
        { name: "Automotive Vehicles & Components", valueUSD: 11.2, sharePct: 4.3 }
      ],
      topImportProducts: [
        { name: "Refined Petroleum Fuels", valueUSD: 24.5, sharePct: 11.0 },
        { name: "Crude Petroleum", valueUSD: 11.2, sharePct: 5.0 },
        { name: "Industrial Machinery & Turbines", valueUSD: 28.0, sharePct: 12.6 },
        { name: "Electronic Components & Integrated Circuits", valueUSD: 21.4, sharePct: 9.6 },
        { name: "Plastics & Organic Chemicals", valueUSD: 14.8, sharePct: 6.7 }
      ],
      topExportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 24.8 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 9.6 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 8.5 },
        { country: "India", code: "IND", flag: "🇮🇳", sharePct: 7.9 },
        { country: "Malaysia", code: "MYS", flag: "🇲🇾", sharePct: 4.8 }
      ],
      topImportPartners: [
        { country: "China", code: "CHN", flag: "🇨🇳", sharePct: 28.5 },
        { country: "Singapore", code: "SGP", flag: "🇸🇬", sharePct: 8.2 },
        { country: "Japan", code: "JPN", flag: "🇯🇵", sharePct: 7.9 },
        { country: "United States", code: "USA", flag: "🇺🇸", sharePct: 5.1 },
        { country: "Malaysia", code: "MYS", flag: "🇲🇾", sharePct: 4.6 }
      ],
      majorTradeAgreements: ["RCEP", "AFTA (ASEAN)", "Indonesia-Australia CEPA"],
      strategicTradeStrength: "World's #1 nickel producer (critical for EV batteries) and world's #1 palm oil producer; bold resource nationalism policy ('Hilirisasi').",
      strategicTradeVulnerability: "WTO dispute with the European Union over raw nickel export bans; vulnerability to global coal phase-out pledges.",
      cssExamRelevance: "Indonesia's 'Hilirisasi' downstream industrialization model as a case study for developing resource-rich countries; Pakistan's heavy palm oil import dependency on Indonesia."
    }
  ],

  productCategories: [
    {
      id: "cat-electronics",
      name: "Electrical Machinery & Electronics",
      hsCode: "HS 85",
      icon: "fa-microchip",
      globalTradeValueUSD: 3550,
      description: "The single largest category of global trade by value, encompassing microprocessors, smartphones, telecommunication towers, printed circuit boards, and electric batteries.",
      topExportingCountries: ["China ($915B)", "Taiwan ($166B)", "South Korea ($120B)", "United States ($72B)", "Japan ($65B)"],
      topImportingCountries: ["United States ($320B)", "China ($349B)", "Hong Kong ($280B)", "Germany ($188B)", "Netherlands ($82B)"],
      geopoliticalChokepoints: "Extreme semiconductor foundry concentration in the Taiwan Strait (TSMC); photolithography monopoly in the Netherlands (ASML); US advanced chip export bans.",
      cssExamAngle: "Critical pillar of US-China techno-economic competition, the CHIPS and Science Act, and supply chain re-shoring in high-tech manufacturing."
    },
    {
      id: "cat-oil-gas",
      name: "Mineral Fuels, Crude Oil & LNG",
      hsCode: "HS 27",
      icon: "fa-oil-well",
      globalTradeValueUSD: 3100,
      description: "Liquid petroleum, natural gas (pipeline and LNG), and coal. Drives global geopolitical alliances, maritime chokepoints, and sovereign trade balances.",
      topExportingCountries: ["Saudi Arabia ($280B)", "United States ($285B)", "Russia ($240B)", "Qatar ($83B)", "Canada ($148B)"],
      topImportingCountries: ["China ($470B)", "European Union ($420B)", "United States ($210B)", "India ($215B)", "Japan ($198B)"],
      geopoliticalChokepoints: "Strait of Hormuz (20% of world petroleum), Strait of Malacca, Bab el-Mandeb (Red Sea), and Suez Canal.",
      cssExamAngle: "Energy security, the petrodollar recycling system, Russian energy redirection under Western sanctions, and Pakistan's $15B+ annual energy import bill."
    },
    {
      id: "cat-automotive",
      name: "Vehicles & Transport Equipment",
      hsCode: "HS 87",
      icon: "fa-car",
      globalTradeValueUSD: 1750,
      description: "Passenger cars, commercial trucks, buses, automotive components, and the rapidly growing electric vehicle (EV) sector.",
      topExportingCountries: ["Germany ($254B)", "China ($185B)", "Japan ($142B)", "Mexico ($182B)", "United States ($62B)"],
      topImportingCountries: ["United States ($382B)", "Germany ($135B)", "China ($72B)", "United Kingdom ($56B)", "France ($72B)"],
      geopoliticalChokepoints: "EU antisubsidy tariffs on Chinese electric vehicles; USMCA 75% regional value content rules; EV battery supply chains.",
      cssExamAngle: "China overtaking Japan as the world's largest automotive exporter in 2023; transition from internal combustion engines (ICE) to electric vehicles (EVs)."
    },
    {
      id: "cat-pharmaceuticals",
      name: "Pharmaceuticals & Biotechnology",
      hsCode: "HS 30",
      icon: "fa-prescription-bottle-medical",
      globalTradeValueUSD: 890,
      description: "Packaged medicaments, vaccines, blood fractions, active pharmaceutical ingredients (APIs), and clinical biotechnology preparations.",
      topExportingCountries: ["Germany ($122B)", "Switzerland ($98B)", "United States ($95B)", "Belgium ($78B)", "Ireland ($65B)"],
      topImportingCountries: ["United States ($178B)", "Germany ($112B)", "Belgium ($48B)", "Switzerland ($42B)", "United Kingdom ($33B)"],
      geopoliticalChokepoints: "Over-reliance on China and India for raw Active Pharmaceutical Ingredients (APIs); intellectual property patent protections (TRIPS flexibilities).",
      cssExamAngle: "Vaccine diplomacy during pandemics; WTO TRIPS waivers for developing nations; India's role as the low-cost 'Pharmacy of the Developing World'."
    },
    {
      id: "cat-agriculture",
      name: "Agricultural Commodities & Foodstuffs",
      hsCode: "HS 10, 12, 15",
      icon: "fa-wheat-awn",
      globalTradeValueUSD: 1650,
      description: "Grains (wheat, corn, rice), oilseeds (soybeans), edible oils (palm oil, sunflower), meat products, and dairy supplies.",
      topExportingCountries: ["United States ($110B)", "Brazil ($98B)", "Netherlands ($58B)", "Indonesia ($30B)", "Russia ($32B)"],
      topImportingCountries: ["China ($180B)", "European Union ($165B)", "United States ($120B)", "Japan ($58B)", "Egypt ($18B)"],
      geopoliticalChokepoints: "Black Sea grain corridors (Ukraine/Russia conflict); Panama Canal drought restrictions; export bans during food inflation spikes.",
      cssExamAngle: "Global food security, the Prebisch-Singer hypothesis on agricultural terms of trade, and Pakistan's Basmati rice exports vs. palm oil import costs."
    },
    {
      id: "cat-textiles",
      name: "Textiles, Garments & Apparel",
      hsCode: "HS 52, 61, 62",
      icon: "fa-shirt",
      globalTradeValueUSD: 940,
      description: "Raw cotton, spun yarn, woven fabrics, knitwear, ready-made garments (RMG), bedwear, and technical industrial textiles.",
      topExportingCountries: ["China ($138B)", "Bangladesh ($47B)", "Vietnam ($45B)", "India ($36B)", "Pakistan ($16.7B)"],
      topImportingCountries: ["European Union ($195B)", "United States ($125B)", "Japan ($32B)", "United Kingdom ($24B)", "Canada ($12B)"],
      geopoliticalChokepoints: "Labor standards enforcement, environmental regulations, Xinjiang cotton import bans in the US, and EU GSP+ human rights conditionalities.",
      cssExamAngle: "Pakistan's primary export sector (>55% of all exports); comparison with Bangladesh and Vietnam; loss of price competitiveness due to domestic power tariffs."
    },
    {
      id: "cat-metals-minerals",
      name: "Critical Minerals & Rare Earth Elements",
      hsCode: "HS 26, 28",
      icon: "fa-gem",
      globalTradeValueUSD: 620,
      description: "Lithium, cobalt, nickel, copper, and 17 rare earth elements (neodymium, dysprosium) essential for batteries, electric motors, and defense systems.",
      topExportingCountries: ["China (Refining monopoly ~70%)", "Australia (Lithium)", "DR Congo (Cobalt 70%)", "Indonesia (Nickel)", "Chile (Lithium/Copper)"],
      topImportingCountries: ["China (Raw ores)", "United States", "European Union", "Japan", "South Korea"],
      geopoliticalChokepoints: "China's export restrictions on gallium, germanium, and antimony; DR Congo mining child labor issues; environmental permitting delays.",
      cssExamAngle: "The 21st-century scramble for green transition minerals; critical mineral partnerships between the US, EU, and Australia; Pakistan's Reko Diq copper-gold project."
    }
  ],

  tradeTheories: [
    {
      id: "theory-comparative-advantage",
      title: "Comparative Advantage & Opportunity Cost",
      theorist: "David Ricardo (1817)",
      tagline: "The Bedrock Principle of International Trade",
      coreMechanism: "A nation should specialize in producing and exporting goods that it can produce at a lower opportunity cost relative to other goods, rather than lowest absolute cost. Trade allows both countries to consume outside their production possibilities frontier (PPF).",
      formulaOrDiagram: "Gains from Trade: If Country A has (Cost X / Cost Y) < (Cost X* / Cost Y*), Country A exports X and imports Y.",
      realWorldCase: "Even if the US can produce both soybeans and microchips more efficiently than Vietnam, the US specializes in high-margin microchips and imports lower-margin clothing from Vietnam, maximizing joint global welfare.",
      cssExamQuestion: "Differentiate between Adam Smith's Absolute Advantage and David Ricardo's Comparative Advantage. Why does trade remain mutually beneficial even when one nation produces everything more efficiently?"
    },
    {
      id: "theory-heckscher-ohlin",
      title: "Heckscher-Ohlin Model (Factor Proportions Theory)",
      theorist: "Eli Heckscher & Bertil Ohlin (1919/1933)",
      tagline: "Labor Abundance vs. Capital Abundance",
      coreMechanism: "A country will export goods that use its abundant and cheap factors of production intensively, and import goods that use its scarce factors intensively. Capital-abundant nations export capital-intensive goods; labor-abundant nations export labor-intensive goods.",
      formulaOrDiagram: "Stolper-Samuelson Theorem: Free trade raises the real return to the abundant factor and lowers the return to the scarce factor.",
      realWorldCase: "Bangladesh and Pakistan, endowed with abundant low-cost labor, export labor-intensive garments and textiles. Germany and Japan, endowed with abundant engineering capital, export high-tech machinery and automobiles.",
      cssExamQuestion: "Critically evaluate the Heckscher-Ohlin factor endowment theory. How does the Leontief Paradox challenge this model?"
    },
    {
      id: "theory-krugman-new-trade",
      title: "New Trade Theory & Intra-Industry Trade",
      theorist: "Paul Krugman (1979 - Nobel Memorial Prize 2008)",
      tagline: "Scale Economies, Network Effects & Love of Variety",
      coreMechanism: "Explains why similar industrialized countries with similar factor endowments trade identical categories of goods with each other (e.g., Germany exports BMWs to France while importing Renaults from France). Driven by internal economies of scale, differentiated products, and monopolistic competition.",
      formulaOrDiagram: "Intra-Industry Trade Index (Grubel-Lloyd Index): GL = 1 - (|Exports - Imports| / (Exports + Imports)). Values close to 1 indicate high intra-industry trade.",
      realWorldCase: "The vast cross-border trade between Germany, France, and the UK in pharmaceuticals, cosmetics, and passenger vehicles where brand differentiation and scale trump national resource differences.",
      cssExamQuestion: "Why did classical trade theories fail to explain intra-industry trade among developed nations? Explain Krugman's New Trade Theory."
    },
    {
      id: "theory-gravity-model",
      title: "The Gravity Model of International Trade",
      theorist: "Jan Tinbergen (1962)",
      tagline: "Trade Size is Proportional to Economic Mass and Distance",
      coreMechanism: "Borrowing from Newton's law of universal gravitation, bilateral trade between any two countries is directly proportional to the product of their GDPs and inversely proportional to the geographic and cultural distance between them.",
      formulaOrDiagram: "T_ij = A × (GDP_i × GDP_j) / Distance_ij^θ",
      realWorldCase: "Explains why the United States' top trading partners are its physical neighbors Canada and Mexico, and why intra-European trade represents over 65% of European commerce, despite global shipping routes.",
      cssExamQuestion: "Using the Gravity Model of Trade, explain the paradox of low intra-regional trade in South Asia (SAARC/SAFTA < 5%) despite geographic proximity."
    },
    {
      id: "theory-prebisch-singer",
      title: "Prebisch-Singer Hypothesis & Terms of Trade",
      theorist: "Raúl Prebisch & Hans Singer (1950)",
      tagline: "The Secular Decline in Commodity Export Prices",
      coreMechanism: "Over the long run, the net barter Terms of Trade (Export Prices / Import Prices) of primary commodity-exporting developing nations deteriorate relative to manufactured-goods-exporting developed nations due to low income elasticity of demand for agricultural/mineral raw materials (Engel's Law).",
      formulaOrDiagram: "Terms of Trade (ToT) = (Price Index of Exports / Price Index of Imports) × 100. A falling index signifies deteriorating trade purchasing power.",
      realWorldCase: "Developing nations must export ever-greater tonnages of raw cotton, coffee, or copper just to purchase a single foreign MRI machine, tractor, or Boeing aircraft.",
      cssExamQuestion: "Discuss the Prebisch-Singer thesis in the context of developing countries. What structural policies can countries like Pakistan adopt to escape this terms-of-trade trap?"
    },
    {
      id: "theory-global-value-chains",
      title: "Global Value Chains (GVCs) & Trade in Value Added (TiVA)",
      theorist: "Modern Trade Economics (OECD / WTO)",
      tagline: "Goods Aren't Made in a Country; They are Made in the World",
      coreMechanism: "Production is fragmented across multiple countries, where components cross international borders multiple times before final assembly. Traditional gross trade statistics count intermediate goods repeatedly, exaggerating bilateral trade balances.",
      formulaOrDiagram: "Gross Trade vs. Value Added: An iPhone assembled in China has a gross export value of $400, but China captures only ~$15 in local labor assembly value added.",
      realWorldCase: "A Boeing 787 Dreamliner has wings made in Japan, fuselage sections built in Italy, engines from the UK, and software from the US, assembled in Washington state.",
      cssExamQuestion: "How do Global Value Chains (GVCs) alter modern trade diplomacy and the effectiveness of traditional bilateral tariff wars?"
    },
    {
      id: "theory-tariffs-protectionism",
      title: "Economics of Tariffs & Non-Tariff Barriers (NTBs)",
      theorist: "Trade Policy & Welfare Economics",
      tagline: "Consumer Surplus, Producer Surplus & Deadweight Loss",
      coreMechanism: "Imposing an import tariff raises the domestic consumer price, creates a transfer from consumers to domestic producers (producer surplus) and government (tariff revenue), but causes an irreversible net welfare loss (deadweight loss from production and consumption distortion).",
      formulaOrDiagram: "Deadweight Loss (DWL) = 0.5 × Tariff × ΔImports (Harberger Triangles: b + d).",
      realWorldCase: "US Section 301 tariffs on Chinese steel raised input costs for US manufacturing sectors (construction, machinery, auto parts), costing more American downstream jobs than were saved in primary steel mills.",
      cssExamQuestion: "Analyze the economic welfare effects of an import tariff on a small open economy vs. a large economy capable of influencing world prices."
    },
    {
      id: "theory-wto-multilateralism",
      title: "WTO Principles: MFN & National Treatment",
      theorist: "GATT 1947 / WTO Marrakesh Agreement 1994",
      tagline: "The Legal Foundation of Non-Discriminatory Trade",
      coreMechanism: "1. Most-Favoured-Nation (MFN - GATT Article I): Any trade privilege or lowest tariff granted to one member must immediately and unconditionally be extended to all WTO members. 2. National Treatment (GATT Article III): Once imported goods have cleared customs, they must be treated no less favorably than domestically produced goods.",
      formulaOrDiagram: "Exceptions to MFN: Regional Free Trade Agreements (GATT Article XXIV) and Generalized System of Preferences (GSP) for developing countries.",
      realWorldCase: "Pakistan granting MFN status to international partners under WTO commitments; India revoking Pakistan's MFN status in February 2019 following the Pulwama incident.",
      cssExamQuestion: "Elaborate the fundamental principles of the World Trade Organization (MFN and National Treatment). How do regional trade agreements (FTAs) function as exceptions under GATT Article XXIV?"
    }
  ],

  tradeBlocs: [
    {
      id: "bloc-wto",
      name: "World Trade Organization (WTO)",
      acronym: "WTO",
      established: "1995 (Replacing GATT 1947)",
      headquarters: "Geneva, Switzerland",
      membershipCount: "166 Member States",
      globalTradeSharePct: "98%",
      keyObjective: "Administer multilateral trade agreements, provide a forum for trade negotiations, and resolve bilateral trade disputes through the Dispute Settlement Body (DSB).",
      currentCrisis: "Paralysis of the WTO Appellate Body since 2019 due to US blocking of judicial appointments; rise of unilateral tariffs and national security exceptions (GATT Article XXI)."
    },
    {
      id: "bloc-rcep",
      name: "Regional Comprehensive Economic Partnership",
      acronym: "RCEP",
      established: "Signed 2020, In Force 2022",
      headquarters: "Secretariat at ASEAN, Jakarta",
      membershipCount: "15 Nations (ASEAN-10 + China, Japan, South Korea, Australia, New Zealand)",
      globalTradeSharePct: "30.5% (World's Largest FTA)",
      keyObjective: "Eliminate tariffs on over 90% of traded goods over 20 years; create a unified rule of origin across the Asia-Pacific to streamline regional value chains.",
      currentCrisis: "India withdrew in 2019 over fears of surging Chinese manufactured imports and subsidized agricultural inflows hurting local farmers."
    },
    {
      id: "bloc-usmca",
      name: "United States-Mexico-Canada Agreement",
      acronym: "USMCA",
      established: "2020 (Replacing NAFTA 1994)",
      headquarters: "Tri-national administration",
      membershipCount: "3 Nations (USA, Mexico, Canada)",
      globalTradeSharePct: "15.8%",
      keyObjective: "Modernize North American trade rules with stringent automotive rules of origin (75% regional value content; 40-45% labor value content at $16/hr minimum).",
      currentCrisis: "Mandatory 6-year joint review scheduled for 2026; ongoing disputes over Mexican energy nationalism and Canadian dairy quotas."
    },
    {
      id: "bloc-eu-market",
      name: "European Union Single Market & Customs Union",
      acronym: "EU Single Market",
      established: "1993 (Maastricht Treaty)",
      headquarters: "Brussels, Belgium",
      membershipCount: "27 Member States",
      globalTradeSharePct: "14.5% of external world trade",
      keyObjective: "The 'Four Freedoms': Free, frictionless movement of goods, services, capital, and labor with zero internal tariffs and a Common External Tariff (CET).",
      currentCrisis: "Implementation of the Carbon Border Adjustment Mechanism (CBAM) imposing carbon tariffs on imports of steel, aluminum, cement, and electricity; supply chain de-risking from China."
    },
    {
      id: "bloc-cptpp",
      name: "Comprehensive & Progressive Trans-Pacific Partnership",
      acronym: "CPTPP",
      established: "2018 (Post-US withdrawal from TPP)",
      headquarters: "Rotating presidency",
      membershipCount: "12 Nations (Japan, Canada, Australia, Vietnam, UK, etc.)",
      globalTradeSharePct: "13.4%",
      keyObjective: "High-standard 21st-century trade agreement with disciplines on state-owned enterprises (SOEs), digital e-commerce, environmental standards, and intellectual property.",
      currentCrisis: "Competing accession requests from China and Taiwan; US remains absent following Donald Trump's executive withdrawal in 2017."
    },
    {
      id: "bloc-afcfta",
      name: "African Continental Free Trade Area",
      acronym: "AfCFTA",
      established: "Operationalized 2021",
      headquarters: "Accra, Ghana",
      membershipCount: "54 Signatory States (47 ratified)",
      globalTradeSharePct: "3.2% (Potential market of 1.3B people)",
      keyObjective: "Create a single continental market for goods and services to boost intra-African trade from its historically dismal ~15% to over 50% by eliminating 90% of tariffs.",
      currentCrisis: "Deficits in physical transport infrastructure (rail and port connectivity), cross-border payments friction, and non-tariff border clearance bottlenecks."
    },
    {
      id: "bloc-asean",
      name: "ASEAN Free Trade Area",
      acronym: "AFTA",
      established: "1992",
      headquarters: "Jakarta, Indonesia",
      membershipCount: "10 Southeast Asian Nations",
      globalTradeSharePct: "7.8%",
      keyObjective: "Common Effective Preferential Tariff (CEPT) scheme reducing intra-ASEAN tariffs to 0-5%, cementing Southeast Asia as the world's premier alternative manufacturing hub.",
      currentCrisis: "Internal disparities in economic development (Singapore vs. Myanmar/Laos) and balancing economic ties with China against security ties with the West."
    },
    {
      id: "bloc-safta",
      name: "South Asian Free Trade Area",
      acronym: "SAFTA",
      established: "2004 (In Force 2006)",
      headquarters: "Kathmandu, Nepal (SAARC Secretariat)",
      membershipCount: "8 Nations (Pakistan, India, Bangladesh, Sri Lanka, etc.)",
      globalTradeSharePct: "< 5% Intra-regional Trade",
      keyObjective: "Reduce customs duties on all traded goods to zero by 2016 to foster economic integration across South Asia.",
      currentCrisis: "Widely regarded as the least integrated regional trade bloc on Earth due to chronic political hostility between India and Pakistan, long negative sensitive lists, and border disputes."
    }
  ],

  pakistanTradeSpecial: {
    title: "Pakistan's Foreign Trade Profile & Structural Bottlenecks",
    annualExportsUSD: 30.6,
    annualImportsUSD: 55.0,
    annualTradeDeficitUSD: 24.4,
    remittancesUSD: 30.2, // Essential for offsetting the trade deficit
    exportBasketShare: [
      { category: "Textiles & Apparel (Garments, Knitwear, Bedwear, Towels)", sharePct: 54.6, valueUSD: 16.7 },
      { category: "Food & Agriculture (Basmati Rice, Sesame, Fruits)", sharePct: 24.2, valueUSD: 7.4 },
      { category: "Leather Goods & Tanning", sharePct: 1.9, valueUSD: 0.58 },
      { category: "Surgical Instruments (Stainless steel, Sialkot)", sharePct: 1.5, valueUSD: 0.45 },
      { category: "Sports Goods (Thermal-bonded Match Footballs)", sharePct: 1.3, valueUSD: 0.41 },
      { category: "Chemicals, Minerals & Cement", sharePct: 5.5, valueUSD: 1.68 },
      { category: "Others & Emerging Manufactured Goods", sharePct: 11.0, valueUSD: 3.38 }
    ],
    importBasketShare: [
      { category: "Energy Group (Crude Oil, Motor Spirit, Diesel, LNG)", sharePct: 28.2, valueUSD: 15.5 },
      { category: "Food & Agri Inputs (Palm Oil, Wheat, Pulses)", sharePct: 14.2, valueUSD: 7.8 },
      { category: "Machinery & Power Equipment", sharePct: 13.1, valueUSD: 7.2 },
      { category: "Chemicals, Fertilizers & APIs", sharePct: 12.4, valueUSD: 6.8 },
      { category: "Metals (Iron, Steel, Scrap)", sharePct: 7.5, valueUSD: 4.1 },
      { category: "Automotive & Transport", sharePct: 4.8, valueUSD: 2.64 },
      { category: "Other Capital & Consumer Imports", sharePct: 19.8, valueUSD: 10.96 }
    ],
    keyChallenges: [
      "Lack of Export Diversification: Over 55% of exports remain anchored in textiles, where global market share is being lost to Vietnam and Bangladesh.",
      "High Energy Tariffs: Domestic electricity and gas tariffs for industrial export units exceed regional competitors (Vietnam: ~7-8¢/kWh vs. Pakistan: ~14-16¢/kWh).",
      "Inelastic Import Demand: Essential imports (petroleum, LNG, edible oil, medicine raw materials) cannot be compressed without triggering domestic recession.",
      "Low Integration with Global Value Chains (GVCs): High import tariffs on intermediate raw materials (anti-export bias in national tariff policy).",
      "Stagnant Regional Trade: Bilateral trade with immediate neighbors (India, Iran, Afghanistan) remains choked by political standoffs, border skirmishes, and sanctions."
    ],
    strategicOpportunities: [
      "EU GSP Plus Scheme: Duty-free access to 27 European nations covering over 66% of tariff lines; generating billions in annual textile exports.",
      "Special Investment Facilitation Council (SIFC) & Minerals: Monetizing Reko Diq copper-gold reserves and barite/iron deposits in Balochistan.",
      "IT & Software Services: Emerging export sector growing over 25% annually to surpass $3.2B in FY24.",
      "Value-Added Agriculture: Expanding high-yield Basmati rice exports to the Middle East, certified sesame seed to China, and Kinnow/mangoes to Central Asia.",
      "CPEC Phase-II Industrialization: Developing Special Economic Zones (Rashakai, Dhabeji, Allama Iqbal) to attract Chinese manufacturing relocations."
    ]
  },

  quiz: [
    {
      id: 1,
      question: "According to David Ricardo's Theory of Comparative Advantage, a country should specialize in producing and exporting goods in which it has:",
      options: [
        "The highest absolute efficiency and lowest labor hours",
        "The lowest opportunity cost relative to other goods",
        "The greatest domestic abundance of natural raw materials",
        "A complete monopoly over foreign consumer markets"
      ],
      correctAnswer: 1,
      explanation: "Comparative advantage dictates that trade is mutually beneficial when countries specialize in goods with the lowest opportunity cost—i.e., the lowest sacrifice of alternate production—even if one country has an absolute advantage in all goods."
    },
    {
      id: 2,
      question: "Which nation is currently the world's largest exporter of merchandise goods by total annual dollar value?",
      options: [
        "United States",
        "Germany",
        "China",
        "Japan"
      ],
      correctAnswer: 2,
      explanation: "China is the world's #1 merchandise exporter, shipping over $3.59 Trillion in goods annually, accounting for roughly 14.4% of all global merchandise exports."
    },
    {
      id: 3,
      question: "What is the primary statutory obligation of the Most-Favoured-Nation (MFN) principle under GATT Article I of the WTO?",
      options: [
        "A country must give priority subsidies to its most favored domestic corporations",
        "Any trade concession granted to one member must immediately and unconditionally be extended to all other WTO members",
        "All importing countries must eliminate customs duties on agricultural staples",
        "Developing nations must receive fixed financial compensations from developed nations"
      ],
      correctAnswer: 1,
      explanation: "The MFN principle (GATT Article I) prohibits discrimination between trading partners. If a WTO member grants a special tariff reduction to one country, it must immediately extend that same benefit to all WTO members."
    },
    {
      id: 4,
      question: "According to the Prebisch-Singer Hypothesis, why do developing countries face long-term economic vulnerability in international trade?",
      options: [
        "Their transport infrastructure prevents timely container shipments",
        "Primary commodity export prices secularly decline relative to manufactured import prices",
        "International shipping freight rates are controlled exclusively by G7 cartels",
        "Developing nations have permanently fixed foreign exchange currencies"
      ],
      correctAnswer: 1,
      explanation: "The Prebisch-Singer hypothesis posits that developing countries' terms of trade deteriorate over time because primary commodities have low income elasticity of demand compared to manufactured goods (Engel's Law)."
    },
    {
      id: 5,
      question: "Which sector accounts for more than 50% of Pakistan's total annual export receipts?",
      options: [
        "Petroleum refining & petrochemicals",
        "Information Technology & software services",
        "Textiles & Ready-Made Garments",
        "Basmati Rice & agricultural staples"
      ],
      correctAnswer: 2,
      explanation: "Textiles and garments (knitwear, readymade garments, bedwear, cotton cloth) constitute between 55% and 60% of Pakistan's total annual merchandise exports (~$16.7B out of ~$30.6B)."
    },
    {
      id: 6,
      question: "What is the Regional Comprehensive Economic Partnership (RCEP), which entered into force in 2022?",
      options: [
        "A transatlantic defense and industrial manufacturing pact between the US and the EU",
        "The world's largest Free Trade Area, comprising 15 Asia-Pacific nations including China, Japan, and ASEAN",
        "An exclusive South Asian economic alliance formed to replace the paralyzed SAARC",
        "An OPEC subsidiary regulating crude oil pipeline tariffs across Central Asia"
      ],
      correctAnswer: 1,
      explanation: "RCEP is the world's largest free trade agreement, covering approximately 30% of global GDP and 30% of the world's population, uniting China, Japan, South Korea, Australia, New Zealand, and the 10 ASEAN members."
    },
    {
      id: 7,
      question: "In trade economics, what phenomenon does the Leontief Paradox describe?",
      options: [
        "Tariff hikes always increase a nation's export volume",
        "The US was found to be exporting labor-intensive goods and importing capital-intensive goods, contradicting the Heckscher-Ohlin model",
        "Landlocked countries trade more volume than maritime coastal nations",
        "Small economies always dominate trade negotiations with superpowers"
      ],
      correctAnswer: 1,
      explanation: "In 1953, Wassily Leontief discovered that the United States—the world's most capital-abundant economy—was actually exporting labor-intensive goods and importing capital-intensive goods, challenging the basic Heckscher-Ohlin theorem and highlighting the role of skilled human capital."
    },
    {
      id: 8,
      question: "Which single Dutch corporation holds an effective global monopoly on Extreme Ultraviolet (EUV) lithography machines required to manufacture sub-5nm microchips?",
      options: [
        "TSMC",
        "ASML",
        "Tokyo Electron",
        "Applied Materials"
      ],
      correctAnswer: 1,
      explanation: "ASML, based in Veldhoven, Netherlands, is the sole company in the world capable of manufacturing EUV photolithography machines, making it the most critical geopolitical choke point in the global semiconductor value chain."
    },
    {
      id: 9,
      question: "Under the European Union's GSP Plus (GSP+) scheme, what is the core condition for Pakistan to enjoy zero-rated customs duties on its exports?",
      options: [
        "Pakistan must maintain a fixed exchange rate against the Euro",
        "Pakistan must ratify and effectively implement 27 core international conventions on human rights, labor, environment, and good governance",
        "Pakistan must purchase at least 50% of its commercial aircraft from Airbus",
        "Pakistan must grant European fishing vessels exclusive rights in the Arabian Sea"
      ],
      correctAnswer: 1,
      explanation: "GSP+ grants duty-free access on over 66% of EU tariff lines to vulnerable developing countries conditioned upon ratifying and effectively implementing 27 international conventions on human rights, labor rights, environmental protection, and good governance."
    },
    {
      id: 10,
      question: "The Gravity Model of International Trade posits that the trade volume between two nations is primarily determined by:",
      options: [
        "Their military spending and ideological alignment",
        "The product of their GDPs divided by the geographic distance between them",
        "Their gold reserve holdings and central bank policy interest rates",
        "The difference in their sovereign credit ratings"
      ],
      correctAnswer: 1,
      explanation: "Jan Tinbergen's Gravity Model of Trade states that bilateral trade volume is directly proportional to the economic size (GDP) of both trading partners and inversely proportional to the geographic distance separating them."
    },
    {
      id: 11,
      question: "Which country overtook China in 2023 to become the largest exporter of goods to the United States?",
      options: [
        "Germany",
        "Japan",
        "Mexico",
        "Vietnam"
      ],
      correctAnswer: 2,
      explanation: "Benefiting from the USMCA agreement, nearshoring investments, and US tariffs on Chinese goods, Mexico surpassed China in 2023 to become the #1 merchandise exporter to the United States."
    },
    {
      id: 12,
      question: "What is an import quota, and how does it fundamentally differ from an import tariff?",
      options: [
        "A quota restricts the physical quantity of an imported good, whereas a tariff is a tax that raises the price",
        "A quota is applied only to agricultural exports, while tariffs apply to industrial goods",
        "A quota generates guaranteed revenue for the domestic government, while a tariff generates zero revenue",
        "A quota is authorized by the WTO, whereas tariffs are universally banned"
      ],
      correctAnswer: 0,
      explanation: "A tariff is an ad valorem or specific tax on imports that raises domestic market prices, whereas a quota establishes a strict legal ceiling on the quantitative volume of goods permitted entry into the country."
    },
    {
      id: 13,
      question: "What country is the world's largest exporter of crude petroleum by annual sales volume?",
      options: [
        "United States",
        "Saudi Arabia",
        "Russia",
        "Iraq"
      ],
      correctAnswer: 1,
      explanation: "Saudi Arabia remains the world's leading crude oil exporter, shipping over $240B+ in crude petroleum annually via Saudi Aramco."
    },
    {
      id: 14,
      question: "Why has intra-regional trade within South Asia (under SAARC / SAFTA) remained below 5% of total trade, compared to over 25% in ASEAN and 65% in the EU?",
      options: [
        "South Asian countries have identical currencies that prevent foreign exchange conversion",
        "Severe political and security rivalries (especially India-Pakistan), non-tariff barriers, poor connectivity, and extensive sensitive/negative lists",
        "WTO regulations strictly prohibit South Asian nations from signing preferential trade deals",
        "All South Asian economies run massive current account surpluses that eliminate trade demand"
      ],
      correctAnswer: 1,
      explanation: "South Asia is the least economically integrated region on Earth, primarily due to historic political hostility between India and Pakistan, long negative lists of protected goods, border friction, and high non-tariff barriers."
    },
    {
      id: 15,
      question: "What is meant by the economic term 'Terms of Trade' (ToT)?",
      options: [
        "The number of legal paragraphs in a bilateral Free Trade Agreement",
        "The ratio of the index of export prices to the index of import prices: (Px / Pm) × 100",
        "The percentage of trade settled in US Dollars rather than national currencies",
        "The legal duration of a World Trade Organization dispute hearing"
      ],
      correctAnswer: 1,
      explanation: "Terms of Trade (ToT) is calculated as (Price Index of Exports / Price Index of Imports) × 100. An improvement means export prices rose faster than import prices, enabling a nation to purchase more imports with a given volume of exports."
    },
    {
      id: 16,
      question: "Which Southeast Asian economy has successfully utilized an export ban on raw unrefined nickel ore ('Hilirisasi') to compel multinational firms to build domestic smelting and EV battery facilities?",
      options: [
        "Thailand",
        "Vietnam",
        "Indonesia",
        "Malaysia"
      ],
      correctAnswer: 2,
      explanation: "Indonesia implemented a ban on raw nickel ore exports under President Joko Widodo to force foreign investment into domestic nickel pig iron (NPI) smelters and EV battery manufacturing, resulting in a dramatic surge in export values."
    },
    {
      id: 17,
      question: "What are the deadweight losses (efficiency losses) created by the imposition of an import tariff in a small open economy?",
      options: [
        "The total value of government tariff revenue collected at customs",
        "The production distortion loss (inefficient domestic producers expanding) plus the consumption distortion loss (consumers curtailing purchases)",
        "The financial loss incurred by foreign shipping container carriers",
        "The currency appreciation that reduces tourism revenues"
      ],
      correctAnswer: 1,
      explanation: "An import tariff causes deadweight welfare loss represented by Harberger triangles: the production distortion loss (resource waste from high-cost domestic production) and the consumption distortion loss (loss of consumer surplus from reduced consumption)."
    },
    {
      id: 18,
      question: "Which city in Pakistan is globally recognized for producing over 70% of the world's hand-stitched and thermal-bonded footballs, including official FIFA World Cup match balls?",
      options: [
        "Faisalabad",
        "Sialkot",
        "Gujranwala",
        "Karachi"
      ],
      correctAnswer: 1,
      explanation: "Sialkot is Pakistan's premier export cluster, renowned globally for manufacturing precision stainless steel surgical instruments, leather apparel, and official FIFA World Cup match footballs (e.g., Brazuca, Telstar, Al Rihla)."
    },
    {
      id: 19,
      question: "What is the primary objective of the European Union's Carbon Border Adjustment Mechanism (CBAM) that began transition in 2023?",
      options: [
        "To ban all imports of hydrocarbons and crude oil into European ports",
        "To equalize the price of carbon paid by EU domestic producers under the EU ETS with the carbon content embedded in imported industrial goods (steel, cement, aluminum)",
        "To provide direct cash subsidies to Asian steel mills adopting coal power",
        "To eliminate customs clearance procedures for zero-emission cargo ships"
      ],
      correctAnswer: 1,
      explanation: "CBAM prevents 'carbon leakage' by imposing a carbon levy on imports of carbon-intensive goods (steel, cement, fertilizers, aluminum) entering the EU, ensuring foreign manufacturers pay a carbon price equivalent to European producers under the EU Emissions Trading System (ETS)."
    },
    {
      id: 20,
      question: "Paul Krugman's New Trade Theory demonstrated that intra-industry trade between similar developed economies is driven primarily by:",
      options: [
        "Wide differences in climatic conditions and soil fertility",
        "Monopolistic competition, consumer love of variety, and internal economies of scale",
        "Disparities in domestic gold reserves and central bank interest rates",
        "Arbitrage in maritime freight container shipping rates"
      ],
      correctAnswer: 1,
      explanation: "Krugman's New Trade Theory showed that even nations with identical factor endowments trade extensively with one another due to internal economies of scale (lower per-unit costs at higher volumes) and consumer preference for differentiated product varieties (monopolistic competition)."
    }
  ]
};

const fileContent = `/**
 * Who Trades What? Global Trade & Merchandise Flow Explorer Database
 * Comprehensive database covering 35+ major world trading economies, 7 critical product categories,
 * 8 fundamental trade theories, 8 major trade blocs, specialized Pakistan trade breakdown, and 20 exam MCQs.
 * Sources: WTO, UN Comtrade, IMF DOTS, World Bank WITS, State Bank of Pakistan.
 */

const WHO_TRADES_WHAT_DATA = ${JSON.stringify(WHO_TRADES_WHAT_DATA, null, 2)};

if (typeof window !== 'undefined') {
  window.WHO_TRADES_WHAT_DATA = WHO_TRADES_WHAT_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WHO_TRADES_WHAT_DATA;
}
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log('Successfully generated frontend/js/data_who_trades_what.js!');
