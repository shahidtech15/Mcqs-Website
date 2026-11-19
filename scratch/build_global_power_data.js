const fs = require('fs');
const path = require('path');

const code = `/**
 * CSS PREP CENTRAL - GLOBAL POWER COMPARISON DATASET
 * Authoritative Geopolitical, Economic, Military & Energy Repository
 * Reflects latest 2024-2026 data from SIPRI, IMF WEO, World Bank, IEA, and Global Firepower.
 */

(function (global) {
  'use strict';

  const GLOBAL_POWERS = [
    {
      id: "us",
      name: "United States",
      flag: "🇺🇸",
      region: "North America",
      gfpRank: 1,
      powerTier: "Global Superpower",
      unscStatus: "Permanent Member (P5 Veto)",
      
      // Economic Power
      gdpNominal: 28780, // USD Billions
      gdpPpp: 28780,     // USD Billions
      gdpPerCapita: 85370,
      gdpGrowth: 2.8,
      fxReserves: 720,
      
      // Demographic Power
      population: 341.8, // Millions
      medianAge: 38.9,
      laborForce: 168.5,
      urbanization: 83.2,
      
      // Military Expenditure
      defenseBudget: 916.0, // USD Billions (SIPRI 2024)
      defensePctGdp: 3.4,
      
      // Defense Capabilities
      activePersonnel: 1328, // Thousands
      reservePersonnel: 799,
      nuclearStatus: "Declared Nuclear Superpower",
      nuclearWarheads: 5044, // Total Inventory (SIPRI/FAS)
      nuclearTriad: "Full Strategic Triad (Minuteman III ICBMs, Ohio/Columbia SSBNs, B-2/B-21/B-52 bombers)",
      combatAircraft: 1854,
      aircraftCarriers: 11, // Supercarriers (Nimitz/Ford) + 9 Amphibious Assault Ships
      submarines: 68,       // 100% Nuclear-powered (Virginia, Los Angeles, Ohio)
      navalFleetTotal: 472,
      battleTanks: 4650,
      
      // Exports & Trade
      exportsTotal: 3053, // USD Billions
      leadingExports: "Advanced Aerospace, Semiconductor Equipment, Crude Oil & LNG, Pharmaceuticals, Industrial Machinery, Software & Intellectual Property",
      tradeBalance: -980, // Deficit
      
      // Energy & Resources
      oilProduction: 13.2, // Million barrels/day (#1 global producer)
      oilReserves: 55.2,   // Billion barrels
      gasProduction: 1030, // BCM/year (#1 global producer)
      electricityGen: 4280, // TWh
      renewableShare: 24.5, // %
      
      // Other Power Dimensions
      landArea: 9525067, // Sq Km
      rdSpending: 3.46,   // % of GDP
      spaceCapability: "World-leading (Artemis Lunar Program, James Webb, GPS, SpaceX constellation)",
      softPowerScore: 82.5,
      strategicDoctrines: "Global forward-deployed network of 750+ bases; NATO leader; Indo-Pacific Quad/AUKUS alliances; dollar hegemony as global reserve currency."
    },

    {
      id: "cn",
      name: "China",
      flag: "🇨🇳",
      region: "East Asia",
      gfpRank: 3,
      powerTier: "Peer Superpower Contender",
      unscStatus: "Permanent Member (P5 Veto)",
      
      // Economic Power
      gdpNominal: 18530,
      gdpPpp: 35290, // #1 in PPP Globally
      gdpPerCapita: 13140,
      gdpGrowth: 4.8,
      fxReserves: 3260, // Largest foreign exchange reserves globally
      
      // Demographic Power
      population: 1410.0,
      medianAge: 39.5,
      laborForce: 780.0,
      urbanization: 66.2,
      
      // Military Expenditure
      defenseBudget: 296.0, // Official ($296B; SIPRI estimate ~$310B)
      defensePctGdp: 1.6,
      
      // Defense Capabilities
      activePersonnel: 2035, // Largest standing active army globally
      reservePersonnel: 510,
      nuclearStatus: "Declared Nuclear Power",
      nuclearWarheads: 500, // Expanding rapidly (projected ~1000 by 2030)
      nuclearTriad: "Full Strategic Triad (DF-41/DF-31AG ICBMs, Type 094/096 SSBNs, H-6N bombers)",
      combatAircraft: 1900,
      aircraftCarriers: 3,  // Liaoning, Shandong, Fujian (CATOBAR)
      submarines: 61,
      navalFleetTotal: 730, // World's largest navy by total hull count
      battleTanks: 5000,
      
      // Exports & Trade
      exportsTotal: 3380, // World's #1 merchandise exporter
      leadingExports: "Electronics, EV Batteries, Solar Panels, Mobile Telephony, Industrial Machinery, High-speed Rail, Critical Raw Materials",
      tradeBalance: 823,  // World's largest surplus
      
      // Energy & Resources
      oilProduction: 4.2,
      oilReserves: 27.0,
      gasProduction: 230,
      electricityGen: 9400, // World's largest electricity producer
      renewableShare: 34.0, // Largest solar/wind capacity globally
      
      // Other Power Dimensions
      landArea: 9596960,
      rdSpending: 2.64,
      spaceCapability: "Tiangong Space Station, Chang'e Lunar Far-Side sample return, BeiDou global satellite navigation",
      softPowerScore: 71.2,
      strategicDoctrines: "Belt and Road Initiative (BRI); anti-access/area-denial (A2/AD) in South China Sea; strategic partnership with Russia; CPEC anchor with Pakistan."
    },

    {
      id: "ru",
      name: "Russia",
      flag: "🇷🇺",
      region: "Eurasia",
      gfpRank: 2,
      powerTier: "Eurasian Military & Nuclear Superpower",
      unscStatus: "Permanent Member (P5 Veto)",
      
      // Economic Power
      gdpNominal: 2060,
      gdpPpp: 5470, // #4 PPP globally
      gdpPerCapita: 14400,
      gdpGrowth: 3.6,
      fxReserves: 610,
      
      // Demographic Power
      population: 144.2,
      medianAge: 40.5,
      laborForce: 73.5,
      urbanization: 75.1,
      
      // Military Expenditure
      defenseBudget: 109.0, // SIPRI estimate (~5.9% of GDP)
      defensePctGdp: 5.9,
      
      // Defense Capabilities
      activePersonnel: 1320,
      reservePersonnel: 2000,
      nuclearStatus: "Declared Nuclear Superpower",
      nuclearWarheads: 5580, // World's largest nuclear stockpile
      nuclearTriad: "Full Strategic Triad (RS-24 Yars/Sarmat ICBMs, Borei SSBNs, Tu-160/Tu-95MS bombers)",
      combatAircraft: 773,
      aircraftCarriers: 1, // Refit status
      submarines: 58,
      navalFleetTotal: 598,
      battleTanks: 14777, // Massive legacy + modernized fleet
      
      // Exports & Trade
      exportsTotal: 425,
      leadingExports: "Crude Petroleum, Natural Gas, Enriched Uranium, Wheat, Chemical Fertilizers, Defense Hardware, Palladium & Titanium",
      tradeBalance: 140,
      
      // Energy & Resources
      oilProduction: 9.5, // #3 producer globally
      oilReserves: 80.0,
      gasProduction: 640, // #2 producer globally; largest proven reserves
      electricityGen: 1150,
      renewableShare: 19.8, // Dominated by nuclear & hydro
      
      // Other Power Dimensions
      landArea: 17098242, // #1 largest landmass globally (11 time zones)
      rdSpending: 0.94,
      spaceCapability: "GLONASS navigation constellation, Soyuz human spaceflight, Vostochny Cosmodrome",
      softPowerScore: 54.3,
      strategicDoctrines: "Eurasian multipolarity; nuclear de-escalation threshold; Arctic Northern Sea Route dominance; deep defense industrial base."
    },

    {
      id: "in",
      name: "India",
      flag: "🇮🇳",
      region: "South Asia",
      gfpRank: 4,
      powerTier: "Major Regional Power",
      unscStatus: "Aspirant Member (G4 coalition)",
      
      // Economic Power
      gdpNominal: 3940,
      gdpPpp: 14590, // #3 in PPP Globally
      gdpPerCapita: 2730,
      gdpGrowth: 7.0,
      fxReserves: 675,
      
      // Demographic Power
      population: 1441.7, // #1 populous country globally
      medianAge: 28.7,
      laborForce: 590.0,
      urbanization: 36.4,
      
      // Military Expenditure
      defenseBudget: 83.6,
      defensePctGdp: 2.4,
      
      // Defense Capabilities
      activePersonnel: 1455,
      reservePersonnel: 1155,
      nuclearStatus: "Declared Nuclear Power",
      nuclearWarheads: 172,
      nuclearTriad: "Developing Triad (Agni-V ICBM, INS Arihant/Arighat SSBNs, Rafale/Su-30MKI air wing)",
      combatAircraft: 606,
      aircraftCarriers: 2, // INS Vikramaditya, INS Vikrant
      submarines: 18,
      navalFleetTotal: 294,
      battleTanks: 4614,
      
      // Exports & Trade
      exportsTotal: 437,
      leadingExports: "Refined Petroleum, IT & Software Services, Pharmaceuticals, Gems & Jewelry, Automobiles, Machinery",
      tradeBalance: -240, // Chronic deficit
      
      // Energy & Resources
      oilProduction: 0.6, // Imports ~85% of crude requirements
      oilReserves: 4.5,
      gasProduction: 35,
      electricityGen: 1850,
      renewableShare: 21.0,
      
      // Other Power Dimensions
      landArea: 3287263,
      rdSpending: 0.65,
      spaceCapability: "ISRO Chandrayaan-3 lunar south pole landing, Aditya-L1 solar observatory, NavIC",
      softPowerScore: 58.6,
      strategicDoctrines: "Strategic autonomy; Indo-Pacific Quad partner; multi-alignment; Cold Start doctrine against Pakistan."
    },

    {
      id: "pk",
      name: "Pakistan",
      flag: "🇵🇰",
      region: "South Asia",
      gfpRank: 9,
      powerTier: "Nuclear Armed Strategic Power",
      unscStatus: "Elected Member (2025–2026 tenure, 182 votes)",
      
      // Economic Power
      gdpNominal: 375,
      gdpPpp: 1580,
      gdpPerCapita: 1560,
      gdpGrowth: 2.4,
      fxReserves: 16.0,
      
      // Demographic Power
      population: 241.5, // 5th largest population globally
      medianAge: 22.8,   // Massive youthful demographic dividend (~64% under 30)
      laborForce: 76.0,
      urbanization: 37.5,
      
      // Military Expenditure
      defenseBudget: 9.5, // SIPRI 2024 ($9.5B-$10.2B)
      defensePctGdp: 2.8,
      
      // Defense Capabilities
      activePersonnel: 654,
      reservePersonnel: 550,
      nuclearStatus: "Declared Nuclear Power",
      nuclearWarheads: 170, // Balanced deterrence parity with India
      nuclearTriad: "Full Spectrum Deterrence (Shaheen-III MRBM, Ababeel MIRV, Babur cruise missiles, Ra'ad ALCM, Nasr tactical nuclear weapon, Babur-3 SLCM second-strike)",
      combatAircraft: 450, // JF-17 Thunder Block-III (AESA radar), J-10C Vigorous Dragon, F-16
      aircraftCarriers: 0,
      submarines: 9,       // Agosta 90B with AIP + 8 Hangor-class stealth submarines under induction
      navalFleetTotal: 120, // Modernizing with Type 054A/P Tughril frigates & Babur MILGEM corvettes
      battleTanks: 3742,   // VT-4, Al-Khalid-I, T-80UD, Al-Zarrar
      
      // Exports & Trade
      exportsTotal: 31.0,
      leadingExports: "Textiles & Garments (60%+), Basmati Rice, Leather Products, Surgical Instruments, IT Services ($3.2B), Sports Goods",
      tradeBalance: -24.0,
      
      // Energy & Resources
      oilProduction: 0.09,
      oilReserves: 0.35,
      gasProduction: 32, // Sui gas fields & tight gas exploration
      electricityGen: 145,
      renewableShare: 32.0, // Major hydropower (Tarbela, Mangla, Dasu) + Nuclear (K-2, K-3, Chashma)
      
      // Other Power Dimensions
      landArea: 881913,
      rdSpending: 0.25,
      spaceCapability: "SUPARCO PakSAT-MM1 satellite, ICUBE-Qamar lunar orbiter (aboard China's Chang'e 6 in 2024)",
      softPowerScore: 43.1,
      strategicDoctrines: "Full Spectrum Nuclear Deterrence; Quid Pro Quo Plus; Gwadar & CPEC geo-economic hub; top UN Peacekeeping troop contributor."
    },

    {
      id: "gb",
      name: "United Kingdom",
      flag: "🇬🇧",
      region: "Europe",
      gfpRank: 6,
      powerTier: "Major Global & Naval Power",
      unscStatus: "Permanent Member (P5 Veto)",
      
      gdpNominal: 3500,
      gdpPpp: 4030,
      gdpPerCapita: 51000,
      gdpGrowth: 1.1,
      fxReserves: 180,
      
      population: 68.3,
      medianAge: 40.7,
      laborForce: 34.0,
      urbanization: 84.4,
      
      defenseBudget: 74.9,
      defensePctGdp: 2.3,
      
      activePersonnel: 148,
      reservePersonnel: 37,
      nuclearStatus: "Declared Nuclear Power",
      nuclearWarheads: 225,
      nuclearTriad: "Sea-based Continuous At-Sea Deterrent (CASD) via Vanguard-class SSBNs with Trident II D5 missiles",
      combatAircraft: 119,
      aircraftCarriers: 2, // HMS Queen Elizabeth, HMS Prince of Wales
      submarines: 10,
      navalFleetTotal: 73,
      battleTanks: 213,
      
      exportsTotal: 1020,
      leadingExports: "Financial & Professional Services, Pharmaceuticals, Aerospace Engineering, Automobiles, Chemical Products",
      tradeBalance: -45,
      
      oilProduction: 0.7,
      oilReserves: 2.0,
      gasProduction: 35,
      electricityGen: 310,
      renewableShare: 43.0,
      
      landArea: 242495,
      rdSpending: 2.91,
      spaceCapability: "Skynet military communications, UK Space Agency, ESA founding member",
      softPowerScore: 81.8,
      strategicDoctrines: "NATO nuclear pillar; AUKUS partner; Global Britain Indo-Pacific tilt; Five Eyes intelligence alliance."
    },

    {
      id: "fr",
      name: "France",
      flag: "🇫🇷",
      region: "Europe",
      gfpRank: 11,
      powerTier: "Major Global & European Power",
      unscStatus: "Permanent Member (P5 Veto)",
      
      gdpNominal: 3130,
      gdpPpp: 4160,
      gdpPerCapita: 47400,
      gdpGrowth: 1.1,
      fxReserves: 240,
      
      population: 68.4,
      medianAge: 42.1,
      laborForce: 31.0,
      urbanization: 81.5,
      
      defenseBudget: 61.3,
      defensePctGdp: 2.1,
      
      activePersonnel: 203,
      reservePersonnel: 41,
      nuclearStatus: "Declared Nuclear Power",
      nuclearWarheads: 290,
      nuclearTriad: "Independent Force de Frappe: Triomphant SSBNs + Rafale airborne ASMP-A cruise missiles",
      combatAircraft: 230,
      aircraftCarriers: 1, // Charles de Gaulle (Nuclear CATOBAR)
      submarines: 9,
      navalFleetTotal: 105,
      battleTanks: 222,
      
      exportsTotal: 1010,
      leadingExports: "Aerospace (Airbus), Luxury Goods, Pharmaceuticals, Nuclear Energy Technology, Wine, Defense Systems (Rafale)",
      tradeBalance: -85,
      
      oilProduction: 0.02,
      oilReserves: 0.06,
      gasProduction: 0.01,
      electricityGen: 500,
      renewableShare: 26.0, // 70%+ generated by nuclear reactors
      
      landArea: 551695,
      rdSpending: 2.22,
      spaceCapability: "Ariane rocket launchers, Guiana Space Centre, European Space Agency lead",
      softPowerScore: 79.4,
      strategicDoctrines: "European Strategic Autonomy; independent nuclear deterrent; sovereign defense manufacturing; global blue-water navy."
    },

    {
      id: "de",
      name: "Germany",
      flag: "🇩🇪",
      region: "Europe",
      gfpRank: 19,
      powerTier: "European Economic Powerhouse",
      unscStatus: "Aspirant Member (G4 coalition)",
      
      gdpNominal: 4590, // #3 in nominal GDP globally
      gdpPpp: 5680,
      gdpPerCapita: 54300,
      gdpGrowth: 0.2,
      fxReserves: 300,
      
      population: 84.4,
      medianAge: 46.7,
      laborForce: 44.5,
      urbanization: 77.8,
      
      defenseBudget: 66.8, // Major expansion under Zeitenwende fund
      defensePctGdp: 2.0,
      
      activePersonnel: 181,
      reservePersonnel: 34,
      nuclearStatus: "Non-Nuclear (NATO Nuclear Sharing)",
      nuclearWarheads: 0,
      nuclearTriad: "None (B61 dual-capable aircraft under NATO sharing)",
      combatAircraft: 134,
      aircraftCarriers: 0,
      submarines: 6,
      navalFleetTotal: 80,
      battleTanks: 295, // Leopard 2A7/A8
      
      exportsTotal: 1680, // #3 exporter globally
      leadingExports: "Automobiles (BMW, VW, Mercedes), Industrial Machinery, Electrical Equipment, Chemical Products, Medical Devices",
      tradeBalance: 240,
      
      oilProduction: 0.03,
      oilReserves: 0.13,
      gasProduction: 4.5,
      electricityGen: 520,
      renewableShare: 52.0, // Energiewende clean energy leader
      
      landArea: 357022,
      rdSpending: 3.14,
      spaceCapability: "DLR German Aerospace Center, Columbus ISS module, ESA primary funder",
      softPowerScore: 78.5,
      strategicDoctrines: "Zeitenwende defense transformation; European Union economic leadership; industrial export giant."
    },

    {
      id: "jp",
      name: "Japan",
      flag: "🇯🇵",
      region: "East Asia",
      gfpRank: 7,
      powerTier: "Major Maritime & Tech Power",
      unscStatus: "Aspirant Member (G4 coalition)",
      
      gdpNominal: 4110,
      gdpPpp: 6720,
      gdpPerCapita: 33100,
      gdpGrowth: 0.7,
      fxReserves: 1290, // #2 largest reserves globally
      
      population: 124.0,
      medianAge: 49.1, // World's most aged major society
      laborForce: 69.0,
      urbanization: 91.9,
      
      defenseBudget: 50.2, // Expanding toward 2% of GDP ($65B+)
      defensePctGdp: 1.6,
      
      activePersonnel: 247,
      reservePersonnel: 56,
      nuclearStatus: "Non-Nuclear State (US Nuclear Umbrella)",
      nuclearWarheads: 0,
      nuclearTriad: "None (Pioneered Three Non-Nuclear Principles)",
      combatAircraft: 250,
      aircraftCarriers: 2, // Izumo & Kaga converted for F-35B
      submarines: 22,      // World-class Taigei & Soryu AIP submarines
      navalFleetTotal: 155,
      battleTanks: 1004,
      
      exportsTotal: 717,
      leadingExports: "Automobiles (Toyota, Honda), Semiconductor Materials, Robotics, Steel, Optical Instruments",
      tradeBalance: -45,
      
      oilProduction: 0.003,
      oilReserves: 0.04,
      gasProduction: 2.1,
      electricityGen: 1010,
      renewableShare: 23.0,
      
      landArea: 377975,
      rdSpending: 3.30,
      spaceCapability: "JAXA, H3 rocket, SLIM pinpoint lunar landing, Hayabusa asteroid sample return",
      softPowerScore: 80.6,
      strategicDoctrines: "Article 9 constitutional pacifism evolving to collective self-defense; US-Japan Alliance; Quad founder."
    },

    {
      id: "kr",
      name: "South Korea",
      flag: "🇰🇷",
      region: "East Asia",
      gfpRank: 5,
      powerTier: "Advanced Industrial & Military Power",
      unscStatus: "Non-Permanent Eligible",
      
      gdpNominal: 1760,
      gdpPpp: 3060,
      gdpPerCapita: 34100,
      gdpGrowth: 2.2,
      fxReserves: 415,
      
      population: 51.7,
      medianAge: 45.0,
      laborForce: 29.0,
      urbanization: 81.4,
      
      defenseBudget: 47.9,
      defensePctGdp: 2.7,
      
      activePersonnel: 500,
      reservePersonnel: 3100,
      nuclearStatus: "Non-Nuclear (US Extended Deterrence)",
      nuclearWarheads: 0,
      nuclearTriad: "None (Conventional 3-Axis System: Kill Chain, KAMD, KMPR)",
      combatAircraft: 400,
      aircraftCarriers: 2, // Amphibious Dokdo/Marado
      submarines: 22,      // Dosan Ahn Changho with SLBMs
      navalFleetTotal: 150,
      battleTanks: 2500,   // K2 Black Panther
      
      exportsTotal: 632,
      leadingExports: "Memory Chips (Samsung, SK Hynix), Automobiles (Hyundai/Kia), Shipbuilding, EV Batteries, Displays, Defense Systems (K9 Thunder)",
      tradeBalance: 40,
      
      oilProduction: 0.0,
      oilReserves: 0.0,
      gasProduction: 0.2,
      electricityGen: 600,
      renewableShare: 9.0,
      
      landArea: 100210,
      rdSpending: 5.21, // #2 globally in R&D intensity
      spaceCapability: "Nuri orbital rocket, Danuri lunar orbiter",
      softPowerScore: 73.8,
      strategicDoctrines: "Kill Chain preemptive strike doctrine; deterrence against DPRK; leading global arms exporter."
    },

    {
      id: "kp",
      name: "North Korea",
      flag: "🇰🇵",
      region: "East Asia",
      gfpRank: 36,
      powerTier: "Asymmetric Nuclear & Missile Power",
      unscStatus: "Non-Member",
      
      gdpNominal: 25,
      gdpPpp: 40,
      gdpPerCapita: 960,
      gdpGrowth: 1.0,
      fxReserves: 3.5,
      
      population: 26.2,
      medianAge: 35.8,
      laborForce: 15.0,
      urbanization: 62.4,
      
      defenseBudget: 4.5, // ~20-25% of GDP
      defensePctGdp: 22.0,
      
      activePersonnel: 1280, // 4th largest active military globally
      reservePersonnel: 600,
      nuclearStatus: "Declared Nuclear Power",
      nuclearWarheads: 50,
      nuclearTriad: "Hwasong-17/18 solid-fuel ICBMs, tactical nuclear warheads, ballistic missile submarines",
      combatAircraft: 450,
      aircraftCarriers: 0,
      submarines: 35,
      navalFleetTotal: 505,
      battleTanks: 5800,
      
      exportsTotal: 0.3,
      leadingExports: "Minerals, Coal, Textiles, Arms & Munitions",
      tradeBalance: -1.2,
      
      oilProduction: 0.0,
      oilReserves: 0.0,
      gasProduction: 0.0,
      electricityGen: 22,
      renewableShare: 55.0, // Hydro dominated
      
      landArea: 120538,
      rdSpending: 2.0,
      spaceCapability: "Malligyong-1 military reconnaissance satellite",
      softPowerScore: 12.0,
      strategicDoctrines: "Songun (Military-First); nuclear survivability; mutual defense pact with Russia signed 2024."
    },

    {
      id: "ir",
      name: "Iran",
      flag: "🇮🇷",
      region: "Middle East",
      gfpRank: 14,
      powerTier: "Regional Middle Eastern Power",
      unscStatus: "Non-Permanent Eligible",
      
      gdpNominal: 400,
      gdpPpp: 1730,
      gdpPerCapita: 4600,
      gdpGrowth: 3.2,
      fxReserves: 30,
      
      population: 89.2,
      medianAge: 32.5,
      laborForce: 30.0,
      urbanization: 76.8,
      
      defenseBudget: 10.3,
      defensePctGdp: 2.5,
      
      activePersonnel: 610, // Artesh + IRGC
      reservePersonnel: 350,
      nuclearStatus: "Nuclear Threshold State (Uranium enriched to 60%)",
      nuclearWarheads: 0,
      nuclearTriad: "None (Largest ballistic missile & drone arsenal in Middle East: Fattah, Sejjil, Shahed-136)",
      combatAircraft: 186,
      aircraftCarriers: 0,
      submarines: 19,
      navalFleetTotal: 101,
      battleTanks: 1996,
      
      exportsTotal: 75,
      leadingExports: "Crude Oil, Petrochemicals, Polymers, Natural Gas, Pistachios, Defense Technology",
      tradeBalance: 15,
      
      oilProduction: 3.2, // #4 in OPEC
      oilReserves: 208.6, // #3 proven reserves globally
      gasProduction: 260, // #3 producer globally; #2 proven reserves
      electricityGen: 360,
      renewableShare: 7.0,
      
      landArea: 1648195,
      rdSpending: 0.83,
      spaceCapability: "Simorgh & Qased indigenous satellite launch vehicles",
      softPowerScore: 38.5,
      strategicDoctrines: "Asymmetric deterrence; Axis of Resistance network; Strait of Hormuz maritime control; BRICS+ & SCO member."
    },

    {
      id: "sa",
      name: "Saudi Arabia",
      flag: "🇸🇦",
      region: "Middle East",
      gfpRank: 23,
      powerTier: "Global Energy & Financial Power",
      unscStatus: "Non-Permanent Eligible",
      
      gdpNominal: 1110,
      gdpPpp: 2350,
      gdpPerCapita: 32500,
      gdpGrowth: 1.5,
      fxReserves: 440,
      
      population: 36.9,
      medianAge: 32.0,
      laborForce: 16.0,
      urbanization: 84.8,
      
      defenseBudget: 75.8, // 5th largest military spender globally
      defensePctGdp: 7.1,  // Highest military burden among major economies
      
      activePersonnel: 257,
      reservePersonnel: 25,
      nuclearStatus: "Non-Nuclear State",
      nuclearWarheads: 0,
      nuclearTriad: "None (DF-3 / DF-21 strategic ballistic missile force)",
      combatAircraft: 283, // F-15SA, Eurofighter Typhoon
      aircraftCarriers: 0,
      submarines: 0,
      navalFleetTotal: 57,
      battleTanks: 1250,   // M1A2 Abrams
      
      exportsTotal: 320,
      leadingExports: "Crude Petroleum (world's top oil exporter), Refined Products, Petrochemicals, Plastics",
      tradeBalance: 125,
      
      oilProduction: 9.0, // Swinging producer of OPEC+
      oilReserves: 267.2, // #2 largest proven reserves globally
      gasProduction: 115,
      electricityGen: 400,
      renewableShare: 2.5, // Expanding under Vision 2030
      
      landArea: 2149690,
      rdSpending: 0.52,
      spaceCapability: "Saudi Space Agency, commercial satellite operations",
      softPowerScore: 62.4,
      strategicDoctrines: "Vision 2030 modernization; OPEC+ oil pricing dominance; Custodian of Islam's Two Holy Mosques; diplomatic normalization."
    },

    {
      id: "tr",
      name: "Turkey",
      flag: "🇹🇷",
      region: "Middle East / Eurasia",
      gfpRank: 8,
      powerTier: "Transcontinental Military Power",
      unscStatus: "Non-Permanent Eligible",
      
      gdpNominal: 1150,
      gdpPpp: 3610,
      gdpPerCapita: 13400,
      gdpGrowth: 3.0,
      fxReserves: 150,
      
      population: 85.8,
      medianAge: 33.5,
      laborForce: 35.0,
      urbanization: 77.0,
      
      defenseBudget: 15.8,
      defensePctGdp: 1.5,
      
      activePersonnel: 355, // 2nd largest army in NATO
      reservePersonnel: 380,
      nuclearStatus: "Non-Nuclear (NATO Nuclear Sharing at Incirlik)",
      nuclearWarheads: 0,
      nuclearTriad: "None (B61 gravity bombs at Incirlik Air Base)",
      combatAircraft: 205, // F-16 Block 50+, developing KAAN 5th-gen fighter
      aircraftCarriers: 1, // TCG Anadolu drone/amphibious assault carrier
      submarines: 12,
      navalFleetTotal: 186,
      battleTanks: 2231,
      
      exportsTotal: 256,
      leadingExports: "Automobiles, Machinery, Iron & Steel, Armed UAVs (Bayraktar TB2/Akinci), Textiles, Chemicals",
      tradeBalance: -105,
      
      oilProduction: 0.08,
      oilReserves: 0.38,
      gasProduction: 0.8,
      electricityGen: 330,
      renewableShare: 42.0, // Major hydro, wind & geothermal
      
      landArea: 783562,
      rdSpending: 1.40,
      spaceCapability: "TUA Turkish Space Agency, Türksat communication satellites, astronaut to ISS",
      softPowerScore: 61.2,
      strategicDoctrines: "Montreux Convention guardian of the Turkish Straits; Blue Homeland (Mavi Vatan) naval doctrine; global armed drone pioneer."
    },

    {
      id: "il",
      name: "Israel",
      flag: "🇮🇱",
      region: "Middle East",
      gfpRank: 17,
      powerTier: "Technological & Nuclear Deterrent Power",
      unscStatus: "Non-Member",
      
      gdpNominal: 530,
      gdpPpp: 535,
      gdpPerCapita: 55000,
      gdpGrowth: 1.5,
      fxReserves: 215,
      
      population: 9.8,
      medianAge: 30.5,
      laborForce: 4.4,
      urbanization: 92.8,
      
      defenseBudget: 27.5,
      defensePctGdp: 5.3,
      
      activePersonnel: 170,
      reservePersonnel: 465,
      nuclearStatus: "Undeclared Nuclear Power (Deliberate Ambiguity)",
      nuclearWarheads: 90,
      nuclearTriad: "Jericho-III ICBMs, Dolphin-class cruise-missile submarines, F-35I Adir fighters",
      combatAircraft: 241, // F-35I Adir, F-15I, F-16I
      aircraftCarriers: 0,
      submarines: 5,       // Dolphin-class AIP submarines
      navalFleetTotal: 67,
      battleTanks: 1370,   // Merkava Mk 4/Barak
      
      exportsTotal: 73,
      leadingExports: "High-Tech Cyber & Defense Systems, Cut Diamonds, Medical Equipment, Microchips, Fertilizers",
      tradeBalance: -12,
      
      oilProduction: 0.0,
      oilReserves: 0.01,
      gasProduction: 22,   // Leviathan & Tamar offshore gas fields
      electricityGen: 75,
      renewableShare: 11.0,
      
      landArea: 22072,
      rdSpending: 5.60, // #1 globally in R&D intensity (% of GDP)
      spaceCapability: "Ofeq reconnaissance satellites, Shavit launch vehicle",
      softPowerScore: 50.1,
      strategicDoctrines: "Begin Doctrine (counter-proliferation); Iron Dome/Arrow multi-layered missile shield; Qualitiative Military Edge (QME)."
    }
  ];

  // Curated Preset Geopolitical Rivalries
  const PRESET_COMPARISONS = {
    "us-vs-cn": {
      title: "United States vs. China: The 21st Century Hegemonic Contest",
      badge: "Global Superpower vs. Peer Challenger",
      summary: "The definitive systemic rivalry of the modern era. While the United States maintains unmatched global alliance networks, power projection through 11 supercarriers, dollar primacy, and technological lead, China leads in PPP-adjusted GDP, industrial manufacturing scale, commercial shipbuilding, and standing ground force size."
    },
    "pk-vs-in": {
      title: "Pakistan vs. India: South Asian Strategic Balance & Nuclear Deterrence",
      badge: "Full Spectrum Deterrence vs. Conventional Asymmetry",
      summary: "Despite India's significant conventional economic and military advantage (9x defense budget, 4x population), Pakistan maintains credible minimum nuclear deterrence parity (~170 vs ~172 warheads) and tactical nuclear deterrence (Nasr), preventing all-out conventional war under the shadow of the nuclear threshold."
    },
    "ru-vs-us": {
      title: "Russia vs. United States: The Nuclear Superpower Standoff",
      badge: "Strategic Triads & Great Power Balancing",
      summary: "Together controlling over 88% of the world's nuclear warheads, Washington and Moscow anchor global strategic deterrence. While the US possesses overwhelming global GDP, blue-water carrier strike groups, and tech R&D, Russia commands the world's largest landmass, top nuclear stockpile, hypersonic edge, and vast energy reserves."
    },
    "sa-vs-ir": {
      title: "Saudi Arabia vs. Iran: The Persian Gulf Regional Power Balance",
      badge: "Financial/Petro Hegemony vs. Asymmetric Missile Depth",
      summary: "The defining regional balance in the Middle East. Saudi Arabia commands immense petrodollar wealth and a Western-equipped air force with the 5th largest military budget globally. Iran counters through deep strategic geography, an unmatched indigenous ballistic missile/drone arsenal, and the 'Axis of Resistance' network."
    },
    "gb-vs-fr": {
      title: "United Kingdom vs. France: Western Europe's Nuclear P5 Powers",
      badge: "Post-Brexit Maritime Power vs. Strategic Autonomy",
      summary: "The twin pillars of European military strength. Both maintain independent nuclear deterrents, P5 vetoes, and global blue-water navies. France champions independent defense manufacturing and a nuclear CATOBAR carrier, while the UK leverages deep transatlantic integration with the US (AUKUS, Trident) and global financial services."
    },
    "kr-vs-kp": {
      title: "South Korea vs. North Korea: The 38th Parallel Divide",
      badge: "High-Tech Industrial Might vs. Asymmetric Nuclear Arsenal",
      summary: "One of the most heavily fortified frontiers on earth. South Korea possesses an advanced $1.76T economy, high-tech conventional weapons (K2 tanks, K9 howitzers), and US extended deterrence. North Korea counters via a 1.2M standing army, thousands of artillery tubes aimed at Seoul, and an operational nuclear ICBM arsenal."
    }
  };

  // Morgenthau's Elements & IR Theories of National Power
  const STRATEGIC_THEORIES = [
    {
      author: "Hans J. Morgenthau",
      theory: "Nine Elements of National Power (Politics Among Nations, 1948)",
      elements: [
        { name: "1. Geography", desc: "Territorial depth, natural frontiers, sea access, and climate insulating from invasion." },
        { name: "2. Natural Resources", desc: "Food self-sufficiency and raw materials (crude oil, natural gas, rare earths, iron)." },
        { name: "3. Industrial Capacity", desc: "The technological and heavy industrial base required to sustain wartime defense production." },
        { name: "4. Military Preparedness", desc: "Strategic doctrine, weapon modernization, training, and operational logistics." },
        { name: "5. Population", desc: "Absolute demographic size, working-age cohort, median age, and human capital." },
        { name: "6. National Character", desc: "Historical resilience, collective psychological endurance, and cultural values." },
        { name: "7. National Morale", desc: "Public support for foreign policy, civic solidarity, and trust in national institutions." },
        { name: "8. Quality of Diplomacy", desc: "The diplomatic acumen to form alliances, divide adversaries, and maximize leverage." },
        { name: "9. Quality of Government", desc: "Institutional stability, administrative efficiency, and crisis decision-making speed." }
      ]
    },
    {
      author: "Joseph S. Nye Jr.",
      theory: "The Power Triad: Hard, Soft, and Smart Power",
      elements: [
        { name: "Hard Power", desc: "The coercive ability to compel others via military intervention, deterrence, and economic sanctions ('carrots and sticks')." },
        { name: "Soft Power", desc: "The attractive ability to co-opt rather than coerce, based on cultural appeal, political values, and legitimate foreign policy." },
        { name: "Smart Power", desc: "The strategic synthesis of hard and soft power into an effective, contextual grand strategy." }
      ]
    },
    {
      author: "A.F.K. Organski",
      theory: "Power Transition Theory & Hegemonic Stability",
      elements: [
        { name: "The Hegemonic Hierarchy", desc: "The international system is structured hierarchically by a dominant power establishing rules (e.g. Pax Americana)." },
        { name: "The Revisionist Challenge", desc: "When a rising power (e.g. China) rapidly approaches parity with a dissatisfied hegemon, the probability of systemic war peaks." }
      ]
    }
  ];

  // High-Yield Practice MCQs
  const PRACTICE_MCQS = [
    {
      q: "Which nation maintains the world's largest operational nuclear warhead stockpile as of 2024?",
      options: ["United States", "Russia", "China", "France"],
      correct: 1,
      explanation: "According to SIPRI and the Federation of American Scientists (FAS), Russia possesses the largest nuclear stockpile with approximately 5,580 warheads, followed by the US with ~5,044."
    },
    {
      q: "Which country spent approximately $916 Billion on defense in 2024, accounting for nearly 40% of all global military expenditure?",
      options: ["China", "Russia", "United States", "Saudi Arabia"],
      correct: 2,
      explanation: "The United States defense budget reached $916 Billion in 2024, exceeding the next nine highest defense spenders combined."
    },
    {
      q: "In terms of Gross Domestic Product measured at Purchasing Power Parity (GDP PPP), which country is the largest economy in the world?",
      options: ["United States", "China", "India", "Germany"],
      correct: 1,
      explanation: "China overtook the United States in GDP (PPP) around 2014 and currently leads with over $35 Trillion in PPP terms according to the IMF."
    },
    {
      q: "What is the primary strategic doctrine governing Pakistan's nuclear deterrence posture against conventional asymmetry?",
      options: ["Strategic Ambiguity", "Full Spectrum Deterrence", "Massive Retaliation", "No First Use (NFU)"],
      correct: 1,
      explanation: "Pakistan adheres to 'Full Spectrum Deterrence' (FSD), maintaining tactical (Nasr), operational, and strategic nuclear weapons to deter aggression across all spectrums."
    },
    {
      q: "Which nation produces over 13 Million barrels of crude oil per day, making it the world's top crude oil producer?",
      options: ["Saudi Arabia", "Russia", "United States", "Iran"],
      correct: 2,
      explanation: "Driven by the shale fracking revolution in the Permian Basin, the United States is the world's #1 crude oil producer at over 13.2 million barrels per day."
    },
    {
      q: "Which theorist articulated the 'Nine Elements of National Power' in his 1948 foundational realist text 'Politics Among Nations'?",
      options: ["Kenneth Waltz", "Hans J. Morgenthau", "John Mearsheimer", "Joseph Nye"],
      correct: 1,
      explanation: "Hans J. Morgenthau classified the components of state power into nine tangible and intangible elements in 'Politics Among Nations' (1948)."
    },
    {
      q: "Which of the following nations does NOT officially possess a full nuclear triad (ICBMs, nuclear-powered ballistic missile submarines, and strategic bombers)?",
      options: ["United States", "Russia", "United Kingdom", "China"],
      correct: 2,
      explanation: "The United Kingdom retired its air-launched nuclear weapons in 1998 and maintains only a single sea-based leg (Vanguard-class SSBNs with Trident missiles)."
    },
    {
      q: "Which country spends the highest percentage of its GDP on Research and Development (over 5.5% of GDP)?",
      options: ["United States", "Israel", "Germany", "Japan"],
      correct: 1,
      explanation: "Israel leads the world in R&D intensity, spending approximately 5.6% of its GDP on research and technological innovation, followed closely by South Korea (~5.2%)."
    }
  ];

  // API Export
  const GLOBAL_POWER_API = {
    getPowers: function () {
      return JSON.parse(JSON.stringify(GLOBAL_POWERS));
    },
    getPowerById: function (id) {
      return GLOBAL_POWERS.find(p => p.id === id) || null;
    },
    getPresets: function () {
      return JSON.parse(JSON.stringify(PRESET_COMPARISONS));
    },
    getTheories: function () {
      return JSON.parse(JSON.stringify(STRATEGIC_THEORIES));
    },
    getMCQs: function () {
      return JSON.parse(JSON.stringify(PRACTICE_MCQS));
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GLOBAL_POWER_API;
  }
  if (typeof window !== 'undefined') {
    window.GLOBAL_POWER_DATA = GLOBAL_POWER_API;
  }

})(typeof window !== 'undefined' ? window : this);
`;

const outputPath = path.join(__dirname, '..', 'frontend', 'js', 'data_global_power.js');
fs.writeFileSync(outputPath, code.trim(), 'utf8');
console.log('Successfully wrote data_global_power.js. Size:', fs.statSync(outputPath).size, 'bytes');
