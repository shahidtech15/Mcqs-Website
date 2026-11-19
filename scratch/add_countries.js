const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../frontend/js/data_who_trades_what.js');
const data = require(dataPath);

const additionalCountries = [
  {
    id: 'sgp',
    code: 'SGP',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Southeast Asia',
    totalExportsUSD: 475.2,
    totalImportsUSD: 422.8,
    tradeBalanceUSD: 52.4,
    globalExportRank: 15,
    globalImportRank: 15,
    tradeToGdpRatio: 310.5,
    currency: 'SGD (Singapore Dollar)',
    topExportProducts: [
      { name: 'Electronic Integrated Circuits & Microchips', valueUSD: 112.5, sharePct: 23.7 },
      { name: 'Refined Petroleum & Bunker Fuel (Jurong Island)', valueUSD: 64.8, sharePct: 13.6 },
      { name: 'Machinery & Computer Storage Units', valueUSD: 48.0, sharePct: 10.1 },
      { name: 'Pharmaceutical Preparations & Biologics', valueUSD: 24.5, sharePct: 5.2 },
      { name: 'Gold & Precious Metals', valueUSD: 18.2, sharePct: 3.8 }
    ],
    topImportProducts: [
      { name: 'Electronic Integrated Circuits', valueUSD: 98.4, sharePct: 23.3 },
      { name: 'Crude & Refined Petroleum for Bunkering', valueUSD: 72.0, sharePct: 17.0 },
      { name: 'Non-monetary Gold & Jewelry', valueUSD: 22.5, sharePct: 5.3 },
      { name: 'Telecommunications Equipment', valueUSD: 18.0, sharePct: 4.3 },
      { name: 'Industrial Precision Machinery', valueUSD: 16.4, sharePct: 3.9 }
    ],
    topExportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 14.8 },
      { country: 'Hong Kong', code: 'HKG', flag: '🇭🇰', sharePct: 12.5 },
      { country: 'Malaysia', code: 'MYS', flag: '🇲🇾', sharePct: 9.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 8.9 },
      { country: 'Indonesia', code: 'IDN', flag: '🇮🇩', sharePct: 6.8 }
    ],
    topImportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 13.9 },
      { country: 'Malaysia', code: 'MYS', flag: '🇲🇾', sharePct: 12.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 11.2 },
      { country: 'Taiwan', code: 'TWN', flag: '🇹🇼', sharePct: 9.1 },
      { country: 'Japan', code: 'JPN', flag: '🇯🇵', sharePct: 5.8 }
    ],
    majorTradeAgreements: ['CPTPP', 'RCEP', 'AFTA', 'US-Singapore FTA', 'Singapore-Australia FTA'],
    strategicTradeStrength: 'Global logistics and entrepôt maritime capital; Port of Singapore is world’s #1 transshipment port and bunker fuel fueling hub.',
    strategicTradeVulnerability: 'Zero natural resources; completely reliant on imported food, water, and energy; extreme exposure to global demand contractions.',
    cssExamRelevance: 'Singapore’s transformation from third-world port to first-world trade titan under Lee Kuan Yew; Singapore Strait maritime security.'
  },
  {
    id: 'mys',
    code: 'MYS',
    name: 'Malaysia',
    flag: '🇲🇾',
    region: 'Southeast Asia',
    totalExportsUSD: 312.8,
    totalImportsUSD: 265.4,
    tradeBalanceUSD: 47.4,
    globalExportRank: 24,
    globalImportRank: 26,
    tradeToGdpRatio: 130.4,
    currency: 'MYR (Malaysian Ringgit)',
    topExportProducts: [
      { name: 'Electronic Integrated Circuits & Chip Packaging (Penang)', valueUSD: 98.2, sharePct: 31.4 },
      { name: 'Refined Petroleum & Petrochemicals', valueUSD: 36.5, sharePct: 11.7 },
      { name: 'Palm Oil & Oleochemicals', valueUSD: 24.8, sharePct: 7.9 },
      { name: 'Liquefied Natural Gas (LNG - Petronas)', valueUSD: 18.0, sharePct: 5.8 },
      { name: 'Optical & Scientific Apparatus', valueUSD: 12.5, sharePct: 4.0 }
    ],
    topImportProducts: [
      { name: 'Integrated Circuits & Semiconductor Wafers', valueUSD: 62.4, sharePct: 23.5 },
      { name: 'Refined Petroleum Fuels', valueUSD: 28.0, sharePct: 10.5 },
      { name: 'Industrial Machinery', valueUSD: 22.4, sharePct: 8.4 },
      { name: 'Crude Petroleum', valueUSD: 14.0, sharePct: 5.3 },
      { name: 'Chemicals & Plastics', valueUSD: 12.8, sharePct: 4.8 }
    ],
    topExportPartners: [
      { country: 'Singapore', code: 'SGP', flag: '🇸🇬', sharePct: 15.6 },
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 13.5 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 11.2 },
      { country: 'European Union', code: 'EU', flag: '🇪🇺', sharePct: 8.5 },
      { country: 'Japan', code: 'JPN', flag: '🇯🇵', sharePct: 6.4 }
    ],
    topImportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 21.3 },
      { country: 'Singapore', code: 'SGP', flag: '🇸🇬', sharePct: 10.8 },
      { country: 'Taiwan', code: 'TWN', flag: '🇹🇼', sharePct: 7.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 7.5 },
      { country: 'Japan', code: 'JPN', flag: '🇯🇵', sharePct: 6.2 }
    ],
    majorTradeAgreements: ['CPTPP', 'RCEP', 'AFTA'],
    strategicTradeStrength: 'Global semiconductor testing and packaging (ATP) hub controlling ~13% of world chip back-end packaging (Penang Silicon Valley).',
    strategicTradeVulnerability: 'Middle-income trap pressures and competition from Vietnam in lower-cost labor assembly.',
    cssExamRelevance: 'Malaysia’s role in the global semiconductor back-end assembly, and palm oil trade disputes with the EU over deforestation (EUDR).'
  },
  {
    id: 'tha',
    code: 'THA',
    name: 'Thailand',
    flag: '🇹🇭',
    region: 'Southeast Asia',
    totalExportsUSD: 284.5,
    totalImportsUSD: 289.2,
    tradeBalanceUSD: -4.7,
    globalExportRank: 26,
    globalImportRank: 24,
    tradeToGdpRatio: 115.8,
    currency: 'THB (Thai Baht)',
    topExportProducts: [
      { name: 'Commercial Pick-up Trucks & Motor Vehicles (\'Detroit of Asia\')', valueUSD: 36.4, sharePct: 12.8 },
      { name: 'Hard Disk Drives (HDDs) & Computer Storage', valueUSD: 28.5, sharePct: 10.0 },
      { name: 'Electronic Integrated Circuits & Machinery', valueUSD: 24.0, sharePct: 8.4 },
      { name: 'Natural Rubber & Rubber Tires', valueUSD: 14.8, sharePct: 5.2 },
      { name: 'Agricultural Goods (Jasmine Rice, Sugar, Canned Tuna)', valueUSD: 18.2, sharePct: 6.4 }
    ],
    topImportProducts: [
      { name: 'Crude Petroleum & Hydrocarbons', valueUSD: 36.5, sharePct: 12.6 },
      { name: 'Electronic Integrated Circuits', valueUSD: 24.8, sharePct: 8.6 },
      { name: 'Industrial Machinery & Parts', valueUSD: 22.0, sharePct: 7.6 },
      { name: 'Chemicals & Resins', valueUSD: 16.4, sharePct: 5.7 },
      { name: 'Iron, Steel & Base Metals', valueUSD: 14.2, sharePct: 4.9 }
    ],
    topExportPartners: [
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 17.2 },
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 12.0 },
      { country: 'Japan', code: 'JPN', flag: '🇯🇵', sharePct: 8.9 },
      { country: 'Vietnam', code: 'VNM', flag: '🇻🇳', sharePct: 4.8 },
      { country: 'Malaysia', code: 'MYS', flag: '🇲🇾', sharePct: 4.5 }
    ],
    topImportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 24.5 },
      { country: 'Japan', code: 'JPN', flag: '🇯🇵', sharePct: 11.2 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 6.8 },
      { country: 'United Arab Emirates', code: 'ARE', flag: '🇦🇪', sharePct: 6.1 },
      { country: 'Malaysia', code: 'MYS', flag: '🇲🇾', sharePct: 5.2 }
    ],
    majorTradeAgreements: ['RCEP', 'AFTA'],
    strategicTradeStrength: 'The automotive hub of Southeast Asia (\'Detroit of Asia\') with major Japanese and emerging Chinese EV factories (BYD, Great Wall).',
    strategicTradeVulnerability: 'High energy import bill and potential disruption to legacy ICE auto supply chains from rapid EV adoption.',
    cssExamRelevance: 'Thailand’s Eastern Economic Corridor (EEC) development and Kra Isthmus land bridge mega-project bypass proposal.'
  },
  {
    id: 'bel',
    code: 'BEL',
    name: 'Belgium',
    flag: '🇧🇪',
    region: 'Europe',
    totalExportsUSD: 562.4,
    totalImportsUSD: 547.8,
    tradeBalanceUSD: 14.6,
    globalExportRank: 10,
    globalImportRank: 13,
    tradeToGdpRatio: 178.2,
    currency: 'EUR (Euro)',
    topExportProducts: [
      { name: 'Pharmaceutical Products & Vaccines (Pfizer Puurs)', valueUSD: 94.2, sharePct: 16.7 },
      { name: 'Chemicals, Polymers & Petrochemicals (Antwerp Cluster)', valueUSD: 82.5, sharePct: 14.7 },
      { name: 'Cut & Rough Diamonds (Antwerp Diamond Square Mile)', valueUSD: 36.8, sharePct: 6.5 },
      { name: 'Automobiles & Commercial Vehicles', valueUSD: 34.0, sharePct: 6.0 },
      { name: 'Mineral Fuels & Refined Oil Products', valueUSD: 28.5, sharePct: 5.1 }
    ],
    topImportProducts: [
      { name: 'Pharmaceutical Ingredients & Vaccines', valueUSD: 78.4, sharePct: 14.3 },
      { name: 'Chemical Feedstocks & Organic Chemicals', valueUSD: 64.0, sharePct: 11.7 },
      { name: 'Unwrought Diamonds for Trading', valueUSD: 35.2, sharePct: 6.4 },
      { name: 'Motor Vehicles & Parts', valueUSD: 38.6, sharePct: 7.0 },
      { name: 'Petroleum & Gas Fuels', valueUSD: 44.5, sharePct: 8.1 }
    ],
    topExportPartners: [
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 17.5 },
      { country: 'France', code: 'FRA', flag: '🇫🇷', sharePct: 13.8 },
      { country: 'Netherlands', code: 'NLD', flag: '🇳🇱', sharePct: 12.4 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 7.2 },
      { country: 'United Kingdom', code: 'GBR', flag: '🇬🇧', sharePct: 5.8 }
    ],
    topImportPartners: [
      { country: 'Netherlands', code: 'NLD', flag: '🇳🇱', sharePct: 16.5 },
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 13.2 },
      { country: 'France', code: 'FRA', flag: '🇫🇷', sharePct: 9.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 8.5 },
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 7.1 }
    ],
    majorTradeAgreements: ['EU Single Market', 'EU Customs Union'],
    strategicTradeStrength: 'Port of Antwerp-Bruges is Europe’s second-largest port and the largest integrated chemical cluster in Europe; world diamond capital.',
    strategicTradeVulnerability: 'Extreme trade exposure to the broader European economic cycle; high energy transition costs for heavy petrochemicals.',
    cssExamRelevance: 'Antwerp’s diamond trade sanctions on Russian stones, and Belgium’s biopharma export boom during COVID-19.'
  },
  {
    id: 'esp',
    code: 'ESP',
    name: 'Spain',
    flag: '🇪🇸',
    region: 'Europe',
    totalExportsUSD: 424.8,
    totalImportsUSD: 470.2,
    tradeBalanceUSD: -45.4,
    globalExportRank: 16,
    globalImportRank: 14,
    tradeToGdpRatio: 65.4,
    currency: 'EUR (Euro)',
    topExportProducts: [
      { name: 'Automobiles & Auto Components (SEAT, Ford, Renault)', valueUSD: 54.2, sharePct: 12.8 },
      { name: 'Pharmaceuticals & Medicaments', valueUSD: 24.5, sharePct: 5.8 },
      { name: 'Agri-Food (Olive Oil, Citrus, Pork, Wine)', valueUSD: 48.0, sharePct: 11.3 },
      { name: 'Refined Petroleum & Fuels', valueUSD: 21.0, sharePct: 4.9 },
      { name: 'Industrial Machinery & Equipment', valueUSD: 19.8, sharePct: 4.7 }
    ],
    topImportProducts: [
      { name: 'Petroleum Crude, Natural Gas & LNG', valueUSD: 62.4, sharePct: 13.3 },
      { name: 'Automotive Vehicles & Parts', valueUSD: 44.0, sharePct: 9.4 },
      { name: 'Electrical & Computing Machinery', valueUSD: 36.8, sharePct: 7.8 },
      { name: 'Chemicals & Resins', valueUSD: 32.5, sharePct: 6.9 },
      { name: 'Medicaments & Vaccines', valueUSD: 26.0, sharePct: 5.5 }
    ],
    topExportPartners: [
      { country: 'France', code: 'FRA', flag: '🇫🇷', sharePct: 15.6 },
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 10.4 },
      { country: 'Portugal', code: 'PRT', flag: '🇵🇹', sharePct: 8.8 },
      { country: 'Italy', code: 'ITA', flag: '🇮🇹', sharePct: 8.2 },
      { country: 'United Kingdom', code: 'GBR', flag: '🇬🇧', sharePct: 6.1 }
    ],
    topImportPartners: [
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 12.2 },
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 10.5 },
      { country: 'France', code: 'FRA', flag: '🇫🇷', sharePct: 9.4 },
      { country: 'Italy', code: 'ITA', flag: '🇮🇹', sharePct: 6.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 6.2 }
    ],
    majorTradeAgreements: ['EU Single Market', 'EU Customs Union'],
    strategicTradeStrength: 'Europe’s leading producer of olive oil, pork, and solar/wind energy; major vehicle assembly hub in Western Europe.',
    strategicTradeVulnerability: 'Energy import vulnerability requiring vast LNG regasification infrastructure.',
    cssExamRelevance: 'Spain as Europe’s premier LNG import and regasification gateway; trade ties with Latin America.'
  },
  {
    id: 'pol',
    code: 'POL',
    name: 'Poland',
    flag: '🇵🇱',
    region: 'Europe',
    totalExportsUSD: 381.2,
    totalImportsUSD: 370.4,
    tradeBalanceUSD: 10.8,
    globalExportRank: 20,
    globalImportRank: 21,
    tradeToGdpRatio: 102.5,
    currency: 'PLN (Polish Zloty)',
    topExportProducts: [
      { name: 'Automotive Parts & Electric Vehicle Batteries (LG Energy Wroclaw)', valueUSD: 44.5, sharePct: 11.7 },
      { name: 'Machinery & Electronic Appliances', valueUSD: 42.0, sharePct: 11.0 },
      { name: 'Furniture, Mattresses & Wood Products', valueUSD: 18.2, sharePct: 4.8 },
      { name: 'Agri-food (Poultry, Dairy, Apples)', valueUSD: 24.5, sharePct: 6.4 },
      { name: 'Base Metals & Metal Products', valueUSD: 21.0, sharePct: 5.5 }
    ],
    topImportProducts: [
      { name: 'Machinery & Electrical Equipment', valueUSD: 54.0, sharePct: 14.6 },
      { name: 'Motor Vehicles & Components', valueUSD: 38.2, sharePct: 10.3 },
      { name: 'Chemical Products & Polymers', valueUSD: 32.0, sharePct: 8.6 },
      { name: 'Mineral Fuels & Gas', valueUSD: 36.5, sharePct: 9.9 },
      { name: 'Base Metals', valueUSD: 24.8, sharePct: 6.7 }
    ],
    topExportPartners: [
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 27.8 },
      { country: 'Czech Republic', code: 'CZE', flag: '🇨🇿', sharePct: 6.2 },
      { country: 'France', code: 'FRA', flag: '🇫🇷', sharePct: 5.9 },
      { country: 'United Kingdom', code: 'GBR', flag: '🇬🇧', sharePct: 5.1 },
      { country: 'Italy', code: 'ITA', flag: '🇮🇹', sharePct: 4.6 }
    ],
    topImportPartners: [
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 20.4 },
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 14.2 },
      { country: 'Italy', code: 'ITA', flag: '🇮🇹', sharePct: 4.9 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 4.5 },
      { country: 'Netherlands', code: 'NLD', flag: '🇳🇱', sharePct: 4.1 }
    ],
    majorTradeAgreements: ['EU Single Market', 'EU Customs Union'],
    strategicTradeStrength: 'Industrial workshop of Central Europe; Europe’s premier production center for EV lithium-ion batteries and household white goods.',
    strategicTradeVulnerability: 'Heavy trade concentration on Germany (>27% of exports); transition away from legacy domestic coal power.',
    cssExamRelevance: 'Poland’s post-Communist export miracle and the Baltic Pipe energy independence from Russia.'
  },
  {
    id: 'zaf',
    code: 'ZAF',
    name: 'South Africa',
    flag: '🇿🇦',
    region: 'Africa',
    totalExportsUSD: 110.8,
    totalImportsUSD: 107.2,
    tradeBalanceUSD: 3.6,
    globalExportRank: 37,
    globalImportRank: 38,
    tradeToGdpRatio: 58.4,
    currency: 'ZAR (South African Rand)',
    topExportProducts: [
      { name: 'Platinum Group Metals (PGMs - Platinum, Palladium)', valueUSD: 16.5, sharePct: 14.9 },
      { name: 'Gold & Diamonds', valueUSD: 12.8, sharePct: 11.5 },
      { name: 'Iron Ore & Manganese Ore', valueUSD: 11.2, sharePct: 10.1 },
      { name: 'Motor Vehicles & Transport Equipment', valueUSD: 12.0, sharePct: 10.8 },
      { name: 'Coal & Briquettes', valueUSD: 8.5, sharePct: 7.7 }
    ],
    topImportProducts: [
      { name: 'Crude Petroleum & Refined Fuels', valueUSD: 18.5, sharePct: 17.3 },
      { name: 'Industrial & Electrical Machinery', valueUSD: 15.2, sharePct: 14.2 },
      { name: 'Vehicles & Automotive Parts', valueUSD: 9.8, sharePct: 9.1 },
      { name: 'Electronic Equipment & Phones', valueUSD: 8.2, sharePct: 7.6 },
      { name: 'Chemicals & Plastics', valueUSD: 6.8, sharePct: 6.3 }
    ],
    topExportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 11.5 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 7.8 },
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 7.4 },
      { country: 'Japan', code: 'JPN', flag: '🇯🇵', sharePct: 6.5 },
      { country: 'United Kingdom', code: 'GBR', flag: '🇬🇧', sharePct: 5.2 }
    ],
    topImportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 21.2 },
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 8.1 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 6.8 },
      { country: 'India', code: 'IND', flag: '🇮🇳', sharePct: 6.5 },
      { country: 'Saudi Arabia', code: 'SAU', flag: '🇸🇦', sharePct: 4.8 }
    ],
    majorTradeAgreements: ['AfCFTA', 'SACU (Southern African Customs Union)', 'SADC', 'BRICS'],
    strategicTradeStrength: 'World’s #1 producer of platinum group metals (PGMs) and chrome; dominant financial and industrial engine of Sub-Saharan Africa.',
    strategicTradeVulnerability: 'Chronic port and rail bottlenecks managed by state logistics monopoly Transnet; severe domestic electrical rolling blackouts (Eskom).',
    cssExamRelevance: 'AfCFTA implementation challenges, BRICS expansion summit in Johannesburg, and critical minerals for catalytic converters.'
  },
  {
    id: 'egy',
    code: 'EGY',
    name: 'Egypt',
    flag: '🇪🇬',
    region: 'North Africa',
    totalExportsUSD: 42.1,
    totalImportsUSD: 83.2,
    tradeBalanceUSD: -41.1,
    globalExportRank: 60,
    globalImportRank: 40,
    tradeToGdpRatio: 36.8,
    currency: 'EGP (Egyptian Pound)',
    topExportProducts: [
      { name: 'Liquefied Natural Gas (LNG - Zohr Field)', valueUSD: 8.5, sharePct: 20.2 },
      { name: 'Refined Petroleum & Fertilizers (Urea)', valueUSD: 6.2, sharePct: 14.7 },
      { name: 'Ready-Made Garments & Textiles', valueUSD: 4.5, sharePct: 10.7 },
      { name: 'Agricultural Goods (Oranges, Potatoes, Onions)', valueUSD: 4.1, sharePct: 9.7 },
      { name: 'Plastics & Polymers', valueUSD: 2.8, sharePct: 6.7 }
    ],
    topImportProducts: [
      { name: 'Wheat & Grain Cereals (World\'s largest wheat importer)', valueUSD: 8.8, sharePct: 10.6 },
      { name: 'Crude Petroleum & Diesel', valueUSD: 9.5, sharePct: 11.4 },
      { name: 'Machinery & Electrical Appliances', valueUSD: 8.2, sharePct: 9.9 },
      { name: 'Passenger Cars & Auto Parts', valueUSD: 4.5, sharePct: 5.4 },
      { name: 'Pharmaceuticals & Medical Inputs', valueUSD: 3.8, sharePct: 4.6 }
    ],
    topExportPartners: [
      { country: 'Turkey', code: 'TUR', flag: '🇹🇷', sharePct: 9.2 },
      { country: 'Italy', code: 'ITA', flag: '🇮🇹', sharePct: 8.5 },
      { country: 'Saudi Arabia', code: 'SAU', flag: '🇸🇦', sharePct: 6.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 5.5 },
      { country: 'Spain', code: 'ESP', flag: '🇪🇸', sharePct: 4.8 }
    ],
    topImportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 16.5 },
      { country: 'Saudi Arabia', code: 'SAU', flag: '🇸🇦', sharePct: 9.8 },
      { country: 'Russia', code: 'RUS', flag: '🇷🇺', sharePct: 8.2 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 5.6 },
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 4.9 }
    ],
    majorTradeAgreements: ['GAFTA', 'COMESA', 'AfCFTA', 'BRICS (Joined 2024)', 'EU-Egypt Association Agreement'],
    strategicTradeStrength: 'Controls the Suez Canal (handling ~12% of global merchandise trade); premier exporter of fresh citrus and Mediterranean LNG.',
    strategicTradeVulnerability: 'Critical food security exposure as the world\'s largest wheat importer; collapse of Suez Canal transit revenues due to Red Sea Houthi attacks.',
    cssExamRelevance: 'The geopolitical economics of the Suez Canal, Red Sea shipping diversions around the Cape of Good Hope, and Egyptian currency devaluations.'
  },
  {
    id: 'arg',
    code: 'ARG',
    name: 'Argentina',
    flag: '🇦🇷',
    region: 'South America',
    totalExportsUSD: 66.8,
    totalImportsUSD: 73.7,
    tradeBalanceUSD: -6.9,
    globalExportRank: 47,
    globalImportRank: 41,
    tradeToGdpRatio: 28.5,
    currency: 'ARS (Argentine Peso)',
    topExportProducts: [
      { name: 'Soybean Meal & Soybean Oil (Rosario Port)', valueUSD: 18.5, sharePct: 27.7 },
      { name: 'Corn & Maize', valueUSD: 9.2, sharePct: 13.8 },
      { name: 'Motor Vehicles & Light Trucks (Toyota Hilux)', valueUSD: 6.8, sharePct: 10.2 },
      { name: 'Wheat & Grain Cereals', valueUSD: 4.5, sharePct: 6.7 },
      { name: 'Lithium Carbonate & Gold (Lithium Triangle)', valueUSD: 3.2, sharePct: 4.8 }
    ],
    topImportProducts: [
      { name: 'Auto Parts & Motor Vehicles', valueUSD: 12.5, sharePct: 17.0 },
      { name: 'Natural Gas & Refined Petroleum Fuels', valueUSD: 8.5, sharePct: 11.5 },
      { name: 'Industrial Machinery & Equipment', valueUSD: 7.8, sharePct: 10.6 },
      { name: 'Chemicals & Organic Compounds', valueUSD: 6.2, sharePct: 8.4 },
      { name: 'Soybeans for Domestic Crushing', valueUSD: 4.8, sharePct: 6.5 }
    ],
    topExportPartners: [
      { country: 'Brazil', code: 'BRA', flag: '🇧🇷', sharePct: 14.8 },
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 9.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 6.5 },
      { country: 'Chile', code: 'CHL', flag: '🇨🇱', sharePct: 5.8 },
      { country: 'India', code: 'IND', flag: '🇮🇳', sharePct: 5.2 }
    ],
    topImportPartners: [
      { country: 'Brazil', code: 'BRA', flag: '🇧🇷', sharePct: 24.2 },
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 18.5 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 12.0 },
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 3.8 },
      { country: 'Paraguay', code: 'PRY', flag: '🇵🇾', sharePct: 3.2 }
    ],
    majorTradeAgreements: ['Mercosur'],
    strategicTradeStrength: 'Agricultural superpower: world\'s #1 exporter of soybean oil and meal; vast lithium brine reserves in the \'Lithium Triangle\' and Vaca Muerta shale gas.',
    strategicTradeVulnerability: 'Chronic foreign exchange shortages; severe export taxes (\'Retenciones\') historically distorting farm output; hyperinflation shocks.',
    cssExamRelevance: 'Javier Milei\'s trade liberalization policies, the Mercosur-Brazil automotive integration, and South American lithium extraction rights.'
  },
  {
    id: 'nga',
    code: 'NGA',
    name: 'Nigeria',
    flag: '🇳🇬',
    region: 'Africa',
    totalExportsUSD: 53.4,
    totalImportsUSD: 47.2,
    tradeBalanceUSD: 6.2,
    globalExportRank: 54,
    globalImportRank: 55,
    tradeToGdpRatio: 24.8,
    currency: 'NGN (Nigerian Naira)',
    topExportProducts: [
      { name: 'Crude Petroleum (Bonny Light)', valueUSD: 42.0, sharePct: 78.7 },
      { name: 'Liquefied Natural Gas (LNG - Bonny Island)', valueUSD: 6.8, sharePct: 12.7 },
      { name: 'Urea & Chemical Fertilizers (Dangote)', valueUSD: 1.4, sharePct: 2.6 },
      { name: 'Agricultural Goods (Cocoa Beans, Sesame Seeds)', valueUSD: 1.2, sharePct: 2.2 },
      { name: 'Vessel Scrap & Base Metals', valueUSD: 0.5, sharePct: 0.9 }
    ],
    topImportProducts: [
      { name: 'Refined Motor Spirit & Premium Motor Fuels', valueUSD: 16.5, sharePct: 35.0 },
      { name: 'Industrial Machinery & Boilers', valueUSD: 5.8, sharePct: 12.3 },
      { name: 'Vehicles & Automotive Parts', valueUSD: 3.8, sharePct: 8.1 },
      { name: 'Chemical Products & Pharmaceuticals', valueUSD: 3.2, sharePct: 6.8 },
      { name: 'Wheat & Food Preparations', valueUSD: 2.8, sharePct: 5.9 }
    ],
    topExportPartners: [
      { country: 'Netherlands', code: 'NLD', flag: '🇳🇱', sharePct: 12.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 8.9 },
      { country: 'India', code: 'IND', flag: '🇮🇳', sharePct: 8.2 },
      { country: 'Spain', code: 'ESP', flag: '🇪🇸', sharePct: 7.8 },
      { country: 'France', code: 'FRA', flag: '🇫🇷', sharePct: 6.5 }
    ],
    topImportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 22.5 },
      { country: 'Belgium', code: 'BEL', flag: '🇧🇪', sharePct: 11.2 },
      { country: 'India', code: 'IND', flag: '🇮🇳', sharePct: 8.9 },
      { country: 'Netherlands', code: 'NLD', flag: '🇳🇱', sharePct: 8.5 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 6.8 }
    ],
    majorTradeAgreements: ['AfCFTA', 'ECOWAS (Economic Community of West African States)'],
    strategicTradeStrength: 'Africa’s largest economy and premier crude petroleum producer with top-tier low-sulfur Bonny Light sweet crude.',
    strategicTradeVulnerability: 'The \'Nigerian Paradox\': Historically exporting crude oil while importing virtually all domestic refined gasoline due to dilapidated state refineries.',
    cssExamRelevance: 'The Dangote mega-refinery (650,000 bpd) altering West African fuel trade, oil theft in the Niger Delta, and ECOWAS trade integration.'
  },
  {
    id: 'nor',
    code: 'NOR',
    name: 'Norway',
    flag: '🇳🇴',
    region: 'Europe',
    totalExportsUSD: 175.4,
    totalImportsUSD: 96.8,
    tradeBalanceUSD: 78.6,
    globalExportRank: 32,
    globalImportRank: 39,
    tradeToGdpRatio: 68.2,
    currency: 'NOK (Norwegian Krone)',
    topExportProducts: [
      { name: 'Natural Gas (Pipeline Gas to Europe)', valueUSD: 76.5, sharePct: 43.6 },
      { name: 'Crude Petroleum (Equinor)', valueUSD: 48.0, sharePct: 27.4 },
      { name: 'Atlantic Salmon & Seafood (Mowi, SalMar)', valueUSD: 16.2, sharePct: 9.2 },
      { name: 'Aluminum & Metallurgy (Hydro)', valueUSD: 7.8, sharePct: 4.4 },
      { name: 'Industrial Machinery & Maritime Tech', valueUSD: 6.5, sharePct: 3.7 }
    ],
    topImportProducts: [
      { name: 'Electric Motor Vehicles & Cars (90%+ EV sales)', valueUSD: 12.8, sharePct: 13.2 },
      { name: 'Industrial & Marine Machinery', valueUSD: 11.5, sharePct: 11.9 },
      { name: 'Electronic Telecommunications Equipment', valueUSD: 7.2, sharePct: 7.4 },
      { name: 'Chemicals & Pharmaceutical Preparations', valueUSD: 6.5, sharePct: 6.7 },
      { name: 'Base Metals & Structural Steel', valueUSD: 5.8, sharePct: 6.0 }
    ],
    topExportPartners: [
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 28.5 },
      { country: 'United Kingdom', code: 'GBR', flag: '🇬🇧', sharePct: 18.2 },
      { country: 'France', code: 'FRA', flag: '🇫🇷', sharePct: 8.9 },
      { country: 'Belgium', code: 'BEL', flag: '🇧🇪', sharePct: 7.4 },
      { country: 'Netherlands', code: 'NLD', flag: '🇳🇱', sharePct: 6.8 }
    ],
    topImportPartners: [
      { country: 'China', code: 'CHN', flag: '🇨🇳', sharePct: 12.8 },
      { country: 'Germany', code: 'DEU', flag: '🇩🇪', sharePct: 11.5 },
      { country: 'Sweden', code: 'SWE', flag: '🇸🇪', sharePct: 9.8 },
      { country: 'United States', code: 'USA', flag: '🇺🇸', sharePct: 7.2 },
      { country: 'United Kingdom', code: 'GBR', flag: '🇬🇧', sharePct: 5.6 }
    ],
    majorTradeAgreements: ['EEA (European Economic Area)', 'EFTA'],
    strategicTradeStrength: 'Europe’s single most critical energy savior following the cut-off of Russian pipeline gas; sovereign wealth fund (NBIM) holding $1.6T+ in global assets.',
    strategicTradeVulnerability: 'Long-term transition away from hydrocarbon extraction vs. European continent demand; strict agricultural import tariffs outside the EEA.',
    cssExamRelevance: 'Norway replacing Russia as the EU’s #1 gas supplier, the Norwegian Sovereign Wealth Fund fiscal rule, and Atlantic salmon aquaculture trade.'
  }
];

// Combine existing countries with additional ones
const existingIds = new Set(data.countries.map(c => c.id));
additionalCountries.forEach(ac => {
  if (!existingIds.has(ac.id)) {
    data.countries.push(ac);
  }
});

const fileContent = `/**
 * Who Trades What? Global Trade & Merchandise Flow Explorer Database
 * Comprehensive database covering 36 major world trading economies, 7 critical product categories,
 * 8 fundamental trade theories, 8 major trade blocs, specialized Pakistan trade breakdown, and 20 exam MCQs.
 * Sources: WTO, UN Comtrade, IMF DOTS, World Bank WITS, State Bank of Pakistan.
 */

const WHO_TRADES_WHAT_DATA = ${JSON.stringify(data, null, 2)};

if (typeof window !== 'undefined') {
  window.WHO_TRADES_WHAT_DATA = WHO_TRADES_WHAT_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WHO_TRADES_WHAT_DATA;
}
`;

fs.writeFileSync(dataPath, fileContent, 'utf-8');
console.log('Successfully updated data_who_trades_what.js with all 36 countries! Total countries:', data.countries.length);
