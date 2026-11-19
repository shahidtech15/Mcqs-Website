const fs = require('fs');
const path = require('path');

const code = `/**
 * CSS PREP CENTRAL - GLOBAL POWER COMPARISON DATASET
 * Authoritative Geopolitical, Economic, Military & Energy Repository (25 Major Global Powers)
 * Data sourced from SIPRI (2024-2025), IMF World Economic Outlook, World Bank, IEA, and Global Firepower Index.
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
      nuclearStatus: "Declared Nuclear Weapon State (NPT P5)",
      nuclearWarheads: 5044,
      nuclearTriad: "Full Triad (Ohio SSBN, Minuteman III ICBM, B-2/B-21/B-52 Strategic Bombers)",
      combatAircraft: 1854,
      aircraftCarriers: 11, // CATOBAR Supercarriers (Nimitz & Ford class)
      submarines: 71,       // All Nuclear (SSBN, SSGN, SSN)
      navalFleetTotal: 472,
      battleTanks: 4650,
      
      // Exports & Energy
      exportsTotal: 2050, // USD Billions
      leadingExports: "Refined Petroleum, Crude Oil, Natural Gas, Aerospace Components, Semiconductor Tech, Agricultural Commodities",
      tradeBalance: -785,
      oilProduction: 13.3, // Million barrels/day (World #1 producer)
      oilReserves: 68.8,   // Billion barrels
      gasProduction: 1030, // Billion cubic meters/year (World #1)
      electricityGen: 4280,// Terawatt-hours
      renewableShare: 23.0,
      
      // Geopolitical Indicators
      landArea: 9833517, // sq km
      rdSpending: 3.45,  // % of GDP
      spaceCapability: "World Leading (NASA Artemis, GPS, Space Force, SpaceX Starship/Falcon)",
      softPowerScore: 84.8, // World #1 Soft Power Index
      strategicDoctrines: "Forward Power Projection; National Defense Strategy (Integrated Deterrence); Quad & AUKUS alliances; Dollar Primacy as geoeconomic leverage."
    },
    {
      id: "cn",
      name: "China",
      flag: "🇨🇳",
      region: "East Asia",
      gfpRank: 3,
      powerTier: "Global Superpower Challenger",
      unscStatus: "Permanent Member (P5 Veto)",
      
      gdpNominal: 18530,
      gdpPpp: 35290, // World #1 PPP
      gdpPerCapita: 13140,
      gdpGrowth: 4.8,
      fxReserves: 3250, // World #1 Forex Reserves
      
      population: 1409.0,
      medianAge: 39.8,
      laborForce: 780.0,
      urbanization: 66.2,
      
      defenseBudget: 296.0,
      defensePctGdp: 1.7,
      
      activePersonnel: 2035, // World largest standing army
      reservePersonnel: 510,
      nuclearStatus: "Declared Nuclear Weapon State (NPT P5)",
      nuclearWarheads: 500, // Expanding toward 1,000 by 2030 (SIPRI)
      nuclearTriad: "Rapidly Maturing Triad (Type 094 Jin SSBN, DF-41/DF-31AG ICBM, H-6N Bomber)",
      combatAircraft: 1900,
      aircraftCarriers: 3, // Liaoning, Shandong, Fujian (Type 003 EMALS)
      submarines: 60,
      navalFleetTotal: 730, // World largest naval hull count
      battleTanks: 4800,
      
      exportsTotal: 3380, // World #1 Merchandise Exporter
      leadingExports: "Electronics & Smart Devices, Solar PV, Electric Vehicles (EV), Industrial Machinery, Telecommunications, Steel",
      tradeBalance: 823,
      oilProduction: 4.2,
      oilReserves: 27.0,
      gasProduction: 230,
      electricityGen: 9220, // World #1 electricity generator
      renewableShare: 31.5,
      
      landArea: 9596961,
      rdSpending: 2.65,
      spaceCapability: "Tiangong Space Station, Chang'e Lunar Samples, BeiDou Global Navigation, Mars Tianwen-1",
      softPowerScore: 71.2,
      strategicDoctrines: "Belt and Road Initiative (BRI); Anti-Access/Area-Denial (A2/AD) in First Island Chain; 'Active Defense'; Civil-Military Fusion."
    },
    {
      id: "ru",
      name: "Russia",
      flag: "🇷🇺",
      region: "Eurasia",
      gfpRank: 2,
      powerTier: "Major Nuclear & Resource Power",
      unscStatus: "Permanent Member (P5 Veto)",
      
      gdpNominal: 2060,
      gdpPpp: 6450,
      gdpPerCapita: 14300,
      gdpGrowth: 3.2,
      fxReserves: 590,
      
      population: 144.2,
      medianAge: 40.5,
      laborForce: 72.0,
      urbanization: 75.1,
      
      defenseBudget: 109.0, // SIPRI (over 5.9% of GDP during wartime)
      defensePctGdp: 5.9,
      
      activePersonnel: 1320,
      reservePersonnel: 2000,
      nuclearStatus: "Declared Nuclear Weapon State (NPT P5)",
      nuclearWarheads: 5580, // World #1 Nuclear Stockpile
      nuclearTriad: "Comprehensive Triad (Borei-A SSBN, RS-24 Yars / RS-28 Sarmat ICBM, Tu-160M / Tu-95MS Bombers)",
      combatAircraft: 1200,
      aircraftCarriers: 1, // Admiral Kuznetsov (in refit)
      submarines: 65,      // Advanced Yasen-M and Borei-class
      navalFleetTotal: 598,
      battleTanks: 6500,
      
      exportsTotal: 420,
      leadingExports: "Crude Oil, Natural Gas, Enriched Uranium, Fertilizer, Grain/Wheat, Military Hardware, Nickel, Platinum",
      tradeBalance: 121,
      oilProduction: 10.1, // World #3 producer
      oilReserves: 80.0,
      gasProduction: 640,  // World #2 gas producer, largest reserves
      electricityGen: 1180,
      renewableShare: 20.0,
      
      landArea: 17098242, // World largest landmass
      rdSpending: 0.94,
      spaceCapability: "GLONASS constellation, Soyuz crew launches, Angara heavy rocket, Vostochny Cosmodrome",
      softPowerScore: 52.4,
      strategicDoctrines: "Escalate to De-escalate; Hypersonic dominance (Avangard, Kinzhal, Zircon); Arctic Bastion Strategy; CSTO leadership."
    },
    {
      id: "in",
      name: "India",
      flag: "🇮🇳",
      region: "South Asia",
      gfpRank: 4,
      powerTier: "Major Regional & Demographic Power",
      unscStatus: "Non-Permanent Member (aspirant to P5)",
      
      gdpNominal: 3940,
      gdpPpp: 14590,
      gdpPerCapita: 2730,
      gdpGrowth: 6.8,
      fxReserves: 675,
      
      population: 1441.0, // World #1 Population
      medianAge: 28.7,
      laborForce: 590.0,
      urbanization: 36.4,
      
      defenseBudget: 83.6,
      defensePctGdp: 2.4,
      
      activePersonnel: 1455,
      reservePersonnel: 1155,
      nuclearStatus: "Declared Nuclear Power (Non-NPT)",
      nuclearWarheads: 172,
      nuclearTriad: "Operational Triad (INS Arihant SSBN, Agni-V ICBM, Mirage 2000 / Rafale nuclear delivery)",
      combatAircraft: 600,
      aircraftCarriers: 2, // INS Vikramaditya & INS Vikrant (indigenous STOBAR)
      submarines: 18,
      navalFleetTotal: 295,
      battleTanks: 4614,
      
      exportsTotal: 435,
      leadingExports: "Refined Petroleum, IT & Software Services ($190B), Pharmaceuticals, Gems & Jewelry, Automobiles, Machinery",
      tradeBalance: -240,
      oilProduction: 0.7,
      oilReserves: 4.6,
      gasProduction: 34,
      electricityGen: 1850,
      renewableShare: 22.0,
      
      landArea: 3287263,
      rdSpending: 0.65,
      spaceCapability: "ISRO Chandrayaan-3 lunar south pole landing, Aditya-L1 solar observatory, Gaganyaan crewed mission prep",
      softPowerScore: 56.8,
      strategicDoctrines: "Cold Start Doctrine; Multi-alignment; Strategic Autonomy; Indian Ocean Net Security Provider; Quad framework."
    },
    {
      id: "pk",
      name: "Pakistan",
      flag: "🇵🇰",
      region: "South Asia",
      gfpRank: 9,
      powerTier: "Nuclear Armed Strategic Power",
      unscStatus: "Elected UNSC Member (2025–2026 tenure, 182 General Assembly votes)",
      
      gdpNominal: 375,
      gdpPpp: 1580,
      gdpPerCapita: 1560,
      gdpGrowth: 2.4,
      fxReserves: 16.0,
      
      population: 241.5, // World #5 Population
      medianAge: 22.8,   // Youth demographic dividend (64% under 30)
      laborForce: 76.0,
      urbanization: 37.5,
      
      defenseBudget: 9.5,
      defensePctGdp: 2.8,
      
      activePersonnel: 654,
      reservePersonnel: 550,
      nuclearStatus: "Declared Nuclear Power (Non-NPT)",
      nuclearWarheads: 170, // Parity deterrence with India (SIPRI 2024)
      nuclearTriad: "Full Spectrum Deterrence (Shaheen-III MRBM, Ababeel MIRV, Babur cruise, Nasr tactical nuclear weapon, Babur-3 SLCM second-strike)",
      combatAircraft: 450, // JF-17 Thunder Block-III (AESA radar), J-10CE Vigorous Dragon, F-16 Falcon
      aircraftCarriers: 0,
      submarines: 9,       // Agosta 90B AIP + 8 Hangor-class (Type 039B) under delivery
      navalFleetTotal: 120,
      battleTanks: 3742,   // Al-Khalid-I, Haider (VT-4), T-80UD
      
      exportsTotal: 31,
      leadingExports: "Textiles & Apparel (60%+), Basmati Rice, Surgical Goods, Leather Goods, IT & Tech Services ($3.2B), Sports Equipment",
      tradeBalance: -24,
      oilProduction: 0.09,
      oilReserves: 0.35,
      gasProduction: 32,
      electricityGen: 145,
      renewableShare: 32.0, // Hydro (Tarbela, Mangla) + Solar/Wind
      
      landArea: 881913,
      rdSpending: 0.25,
      spaceCapability: "SUPARCO: PakSAT-MM1 satellite, ICUBE-Qamar lunar mission (launched aboard China's Chang'e 6 in 2024)",
      softPowerScore: 43.1,
      strategicDoctrines: "Full Spectrum Deterrence (FSD); Quid Pro Quo Plus doctrine; CPEC / Gwadar Deep-Sea Port geo-economic connectivity; Top UN Peacekeeping troop contributor."
    },
    {
      id: "gb",
      name: "United Kingdom",
      flag: "🇬🇧",
      region: "Western Europe",
      gfpRank: 6,
      powerTier: "Major Global & P5 Nuclear Power",
      unscStatus: "Permanent Member (P5 Veto)",
      
      gdpNominal: 3500,
      gdpPpp: 4030,
      gdpPerCapita: 51200,
      gdpGrowth: 1.1,
      fxReserves: 180,
      
      population: 68.2,
      medianAge: 40.6,
      laborForce: 34.5,
      urbanization: 84.4,
      
      defenseBudget: 74.9,
      defensePctGdp: 2.3,
      
      activePersonnel: 148,
      reservePersonnel: 37,
      nuclearStatus: "Declared Nuclear Weapon State (NPT P5)",
      nuclearWarheads: 225,
      nuclearTriad: "Sea-based Continuous At-Sea Deterrence (CASD via 4 Vanguard SSBNs carrying Trident II D5)",
      combatAircraft: 160,
      aircraftCarriers: 2, // HMS Queen Elizabeth & HMS Prince of Wales (STOVL F-35B)
      submarines: 10,
      navalFleetTotal: 73,
      battleTanks: 213,   // Challenger 2 / Challenger 3 upgrade
      
      exportsTotal: 520,
      leadingExports: "Financial Services, Pharmaceuticals, Aerospace Engineering, Gas Turbines, Automotive, Chemicals",
      tradeBalance: -110,
      oilProduction: 0.75,
      oilReserves: 2.5,
      gasProduction: 35,
      electricityGen: 310,
      renewableShare: 43.0, // Offshore wind leader
      
      landArea: 242495,
      rdSpending: 2.9,
      spaceCapability: "UK Space Agency, Skynet military comms, satellite manufacturing hub (Glasgow)",
      softPowerScore: 81.5, // World #2 Soft Power (Brand Finance)
      strategicDoctrines: "Global Britain; NATO European Pillar; AUKUS alliance; Indo-Pacific tilt; Nuclear CASD deterrence."
    },
    {
      id: "fr",
      name: "France",
      flag: "🇫🇷",
      region: "Western Europe",
      gfpRank: 11,
      powerTier: "Major Global & P5 Nuclear Power",
      unscStatus: "Permanent Member (P5 Veto)",
      
      gdpNominal: 3130,
      gdpPpp: 3980,
      gdpPerCapita: 46200,
      gdpGrowth: 1.1,
      fxReserves: 240,
      
      population: 68.4,
      medianAge: 42.1,
      laborForce: 31.0,
      urbanization: 81.5,
      
      defenseBudget: 61.3,
      defensePctGdp: 2.1,
      
      activePersonnel: 205,
      reservePersonnel: 41,
      nuclearStatus: "Declared Nuclear Weapon State (NPT P5)",
      nuclearWarheads: 290,
      nuclearTriad: "Dyad: Sea (4 Triomphant-class SSBNs with M51 SLBMs) and Air (Rafale B with ASMP-A nuclear cruise)",
      combatAircraft: 230, // Rafale F3R/F4, Mirage 2000
      aircraftCarriers: 1, // Charles de Gaulle (Nuclear-powered CATOBAR)
      submarines: 9,       // Barracuda Suffren-class SSNs
      navalFleetTotal: 128,
      battleTanks: 222,   // Leclerc MBT
      
      exportsTotal: 640,
      leadingExports: "Aerospace (Airbus), Defense Weaponry (Rafale), Luxury Goods, Pharmaceuticals, Wine & Agriculture",
      tradeBalance: -65,
      oilProduction: 0.02,
      oilReserves: 0.1,
      gasProduction: 1.0,
      electricityGen: 520,
      renewableShare: 26.0, // Nuclear produces additional ~68% of total electricity
      
      landArea: 551695,
      rdSpending: 2.2,
      spaceCapability: "CNES, Ariane 6 heavy launcher, Guiana Space Centre (Kourou), European Space Agency backbone",
      softPowerScore: 78.6,
      strategicDoctrines: "European Strategic Autonomy; Independent Force de Frappe deterrence; Sovereign defense industrial base."
    },
    {
      id: "de",
      name: "Germany",
      flag: "🇩🇪",
      region: "Western Europe",
      gfpRank: 19,
      powerTier: "Economic Superpower & NATO Cornerstone",
      unscStatus: "Non-Permanent Member (G4 aspirant to P5)",
      
      gdpNominal: 4590, // Europe #1 economy, World #3
      gdpPpp: 5680,
      gdpPerCapita: 54200,
      gdpGrowth: 0.2,
      fxReserves: 300,
      
      population: 84.4,
      medianAge: 46.8,
      laborForce: 44.0,
      urbanization: 77.7,
      
      defenseBudget: 72.8, // Zeitenwende expansion (meeting 2% NATO target)
      defensePctGdp: 1.6,
      
      activePersonnel: 182,
      reservePersonnel: 34,
      nuclearStatus: "NATO Nuclear Sharing (US B61 nuclear bombs deployed at Büchel Air Base)",
      nuclearWarheads: 0, // 20 B61 bombs under US custody
      nuclearTriad: "NATO Nuclear Sharing host via dual-capable aircraft (Tornado IDS transitioning to F-35A)",
      combatAircraft: 210, // Eurofighter Typhoon, Tornado
      aircraftCarriers: 0,
      submarines: 6,       // Type 212A AIP submarines
      navalFleetTotal: 80,
      battleTanks: 295,    // Leopard 2A6/2A7+ (world gold standard MBT)
      
      exportsTotal: 1690,  // World #3 Merchandise Exporter
      leadingExports: "Automobiles (BMW, Mercedes, VW), Heavy Machinery, Chemical Products, Precision Engineering, Medical Devices",
      tradeBalance: 245,
      oilProduction: 0.04,
      oilReserves: 0.15,
      gasProduction: 5.0,
      electricityGen: 510,
      renewableShare: 53.0,// Over half from Wind, Solar, and Biomass
      
      landArea: 357588,
      rdSpending: 3.14,
      spaceCapability: "DLR, Columbus ISS module, Ariane propulsion contributor, SAR-Lupe radar satellites",
      softPowerScore: 77.4,
      strategicDoctrines: "Zeitenwende military modernization; European anchor of collective defense; Geo-economic multilateralism."
    },
    {
      id: "jp",
      name: "Japan",
      flag: "🇯🇵",
      region: "East Asia",
      gfpRank: 7,
      powerTier: "Technological & Maritime Economic Giant",
      unscStatus: "Non-Permanent Member (G4 aspirant to P5)",
      
      gdpNominal: 4110, // World #4 Nominal GDP
      gdpPpp: 6720,
      gdpPerCapita: 33100,
      gdpGrowth: 0.9,
      fxReserves: 1250, // World #2 Forex Reserves
      
      population: 124.5,
      medianAge: 49.5, // World oldest median age
      laborForce: 68.0,
      urbanization: 92.0,
      
      defenseBudget: 50.2, // Doubling to 2% GDP by 2027 ($80B+)
      defensePctGdp: 1.4,
      
      activePersonnel: 247,
      reservePersonnel: 56,
      nuclearStatus: "Non-Nuclear (Nuclear Umbrella by US; Latent Nuclear capability within months)",
      nuclearWarheads: 0,
      nuclearTriad: "Extended US Nuclear Umbrella; Possesses closed nuclear fuel cycle and ~45 tons plutonium stockpile",
      combatAircraft: 280, // F-35A/B, F-15J Eagle, Mitsubishi F-2
      aircraftCarriers: 2, // Izumo and Kaga modified for F-35B operations
      submarines: 23,      // Taigei and Soryu class advanced AIP/Lithium-ion
      navalFleetTotal: 155,
      battleTanks: 550,    // Type 10 MBT
      
      exportsTotal: 720,
      leadingExports: "Motor Vehicles, Electronic Microchips, Optical & Medical Instruments, Industrial Robotics, High-grade Steel",
      tradeBalance: -45,
      oilProduction: 0.01,
      oilReserves: 0.04,
      gasProduction: 2.2,
      electricityGen: 990,
      renewableShare: 24.0,
      
      landArea: 377975,
      rdSpending: 3.41,
      spaceCapability: "JAXA, H3 rocket, SLIM pinpoint lunar lander, Kibo ISS module, Hayabusa asteroid return",
      softPowerScore: 80.2, // World #3 Soft Power
      strategicDoctrines: "Free and Open Indo-Pacific (FOIP); Counterstrike capabilities (Tomahawk acquisition); US-Japan Security Treaty; Defense budget expansion."
    },
    {
      id: "kr",
      name: "South Korea",
      flag: "🇰🇷",
      region: "East Asia",
      gfpRank: 5,
      powerTier: "High-Tech Industrial & Conventional Military Power",
      unscStatus: "Elected UNSC Member (2024–2025)",
      
      gdpNominal: 1760,
      gdpPpp: 2920,
      gdpPerCapita: 34100,
      gdpGrowth: 2.3,
      fxReserves: 420,
      
      population: 51.7,
      medianAge: 45.1,
      laborForce: 29.0,
      urbanization: 81.5,
      
      defenseBudget: 47.9,
      defensePctGdp: 2.7,
      
      activePersonnel: 500,
      reservePersonnel: 3100, // Massive reserve mobilization
      nuclearStatus: "Non-Nuclear (Washington Declaration US Extended Deterrence; Nuclear Consultation Group)",
      nuclearWarheads: 0,
      nuclearTriad: "Conventional 'Three-Axis' System: Kill Chain pre-emptive strike, KAMD missile shield, KMPR massive punishment",
      combatAircraft: 400, // F-35A, KF-21 Boramae, F-15K Slam Eagle
      aircraftCarriers: 0, // Operates Dokdo-class amphibious assault carriers
      submarines: 22,      // Dosan Ahn Changho (KSS-III) with VLS ballistic missiles
      navalFleetTotal: 160,
      battleTanks: 2300,   // K2 Black Panther (world-renowned MBT)
      
      exportsTotal: 632,
      leadingExports: "Semiconductors (Samsung, SK Hynix), Passenger Vehicles, EV Batteries, Petrochemicals, Commercial Cargo Ships, K-Defense systems",
      tradeBalance: 32,
      oilProduction: 0.0,
      oilReserves: 0.0,
      gasProduction: 0.3,
      electricityGen: 590,
      renewableShare: 9.0, // Nuclear supplies ~30%
      
      landArea: 100363,
      rdSpending: 4.93, // World #2 R&D intensity behind Israel
      spaceCapability: "Nuri (KSLV-II) domestic satellite launch vehicle, Danuri lunar orbiter",
      softPowerScore: 72.8, // Hallyu culture wave (K-pop, cinema, consumer electronics)
      strategicDoctrines: "Three-Axis System; Defense export juggernaut (K9 Thunder, FA-50); Washington Declaration; North Korea deterrence."
    },
    {
      id: "kp",
      name: "North Korea",
      flag: "🇰🇵",
      region: "East Asia",
      gfpRank: 36,
      powerTier: "Asymmetric Nuclear Garrison State",
      unscStatus: "UN Member (subject to UN sanctions)",
      
      gdpNominal: 25,
      gdpPpp: 40,
      gdpPerCapita: 950,
      gdpGrowth: 1.0,
      fxReserves: 3.5,
      
      population: 26.2,
      medianAge: 35.8,
      laborForce: 15.0,
      urbanization: 62.9,
      
      defenseBudget: 4.5,
      defensePctGdp: 16.0, // World highest military spending as % of GDP
      
      activePersonnel: 1280, // 4th largest standing military globally
      reservePersonnel: 600,
      nuclearStatus: "Self-declared Nuclear Weapons State (Non-NPT)",
      nuclearWarheads: 50,  // Estimated 50-90 assembled warheads (SIPRI)
      nuclearTriad: "Land & Sea Strike (Hwasong-17/18 solid-fuel ICBMs, KN-23/24 SRBMs, Sinpo submarine-launched cruise/ballistic)",
      combatAircraft: 450, // Aging MiG-29, MiG-23, Su-25
      aircraftCarriers: 0,
      submarines: 70,      // Romeo-class diesel, Sang-O coastal midget subs, Hero Kim Kun Ok ballistic sub
      navalFleetTotal: 505,
      battleTanks: 5000,   // Chonma-ho, Pokpung-ho, M2020 MBT
      
      exportsTotal: 0.3,
      leadingExports: "Coal & Minerals (illicit/limited), Seafood, Textiles, Armaments/Artillery ammunition exports",
      tradeBalance: -1.2,
      oilProduction: 0.0,
      oilReserves: 0.0,
      gasProduction: 0.0,
      electricityGen: 20,
      renewableShare: 55.0,// Hydroelectric heavy due to lack of fossil fuels
      
      landArea: 120538,
      rdSpending: 2.0,
      spaceCapability: "Malligyong-1 military reconnaissance satellite successfully orbited via Chollima-1 rocket",
      softPowerScore: 12.0,
      strategicDoctrines: "Songun (Military-First); Juche self-reliance; Asymmetric nuclear retaliation against US/ROK; Artillery barrage targeting Seoul."
    },
    {
      id: "ir",
      name: "Iran",
      flag: "🇮🇷",
      region: "Middle East",
      gfpRank: 14,
      powerTier: "Regional Power & Missile Asymmetry Anchor",
      unscStatus: "UN Member",
      
      gdpNominal: 403,
      gdpPpp: 1720,
      gdpPerCapita: 4500,
      gdpGrowth: 3.5,
      fxReserves: 25,
      
      population: 89.2,
      medianAge: 32.4,
      laborForce: 30.0,
      urbanization: 76.8,
      
      defenseBudget: 10.3,
      defensePctGdp: 2.5,
      
      activePersonnel: 610, // Artesh + IRGC (Islamic Revolutionary Guard Corps)
      reservePersonnel: 350,
      nuclearStatus: "Nuclear Latent / Threshold State (Enriching uranium to 60% U-235, breakout time < 2 weeks)",
      nuclearWarheads: 0,
      nuclearTriad: "No warheads; World-class ballistic/cruise missile inventory (Khorramshahr, Kheibar Shekan, Fattah hypersonic)",
      combatAircraft: 200, // Su-24, F-4 Phantom, F-14 Tomcat, ordering Su-35
      aircraftCarriers: 0,
      submarines: 19,      // Kilo-class + Fateh + Ghadir midget subs
      navalFleetTotal: 101,
      battleTanks: 2000,   // Karrar, Zulfiqar, T-72S
      
      exportsTotal: 91,
      leadingExports: "Crude Oil (displaced to Asia), Petrochemicals, Natural Gas, Polymers, Pistachios & Saffron, Military Drones",
      tradeBalance: 18,
      oilProduction: 3.3, // World #7 producer
      oilReserves: 208.6, // World #3 Oil Reserves
      gasProduction: 250,  // World #3 Gas Producer (South Pars Field)
      electricityGen: 360,
      renewableShare: 7.0,
      
      landArea: 1648195,
      rdSpending: 0.83,
      spaceCapability: "IRGC Aerospace Force Simorgh and Qaim-100 orbital launches, Sorayya and Chamran-1 satellites",
      softPowerScore: 36.5,
      strategicDoctrines: "'Forward Defense'; 'Axis of Resistance' (Hezbollah, Houthis, PMF, Hamas); Strait of Hormuz chokepoint control; Drone/missile swarm tactics."
    },
    {
      id: "sa",
      name: "Saudi Arabia",
      flag: "🇸🇦",
      region: "Middle East",
      gfpRank: 23,
      powerTier: "Global Petro-Financial Hegemon & Regional Leader",
      unscStatus: "UN Member (G20 Member)",
      
      gdpNominal: 1110,
      gdpPpp: 2350,
      gdpPerCapita: 32500,
      gdpGrowth: 2.7,
      fxReserves: 450,
      
      population: 36.9,
      medianAge: 31.8,
      laborForce: 16.0,
      urbanization: 84.7,
      
      defenseBudget: 75.8, // World #5 largest defense spender (SIPRI 2024)
      defensePctGdp: 7.1,  // Exceptionally high defense intensity
      
      activePersonnel: 257,
      reservePersonnel: 25,
      nuclearStatus: "Non-Nuclear (Pursuing civilian nuclear power; stated capability to match Iran if nuclearized)",
      nuclearWarheads: 0,
      nuclearTriad: "Royal Saudi Strategic Missile Force operates Chinese DF-3A and DF-21 ballistic missile systems",
      combatAircraft: 360, // Eurofighter Typhoon, F-15SA Strike Eagle, Tornado IDS
      aircraftCarriers: 0,
      submarines: 0,
      navalFleetTotal: 57,
      battleTanks: 1250,   // M1A2S Abrams
      
      exportsTotal: 322,
      leadingExports: "Crude Petroleum, Refined Petroleum, Ethylene Polymers, Organic Chemicals, Aluminum",
      tradeBalance: 128,
      oilProduction: 9.0,  // World #2 producer, World #1 Oil Exporter (OPEC swing producer)
      oilReserves: 267.2, // World #2 Oil Reserves
      gasProduction: 115,
      electricityGen: 410,
      renewableShare: 2.5, // Massive Vision 2030 solar targets
      
      landArea: 2149690,
      rdSpending: 0.8,
      spaceCapability: "Saudi Space Agency, sent astronauts to ISS in 2023 (Axiom Mission 2), Arabsat communications",
      softPowerScore: 59.2, // Top 20 Global Soft Power (Brand Finance)
      strategicDoctrines: "Vision 2030 economic diversification; OPEC+ oil diplomacy; Bab el-Mandeb & Persian Gulf maritime security; Regional de-escalation."
    },
    {
      id: "tr",
      name: "Turkey",
      flag: "🇹🇷",
      region: "Middle East / Europe",
      gfpRank: 8,
      powerTier: "Transcontinental Geopolitical Pivot & Drone Superpower",
      unscStatus: "UN Member (NATO)",
      
      gdpNominal: 1110,
      gdpPpp: 3610,
      gdpPerCapita: 12800,
      gdpGrowth: 3.2,
      fxReserves: 155,
      
      population: 85.8,
      medianAge: 33.5,
      laborForce: 35.0,
      urbanization: 77.0,
      
      defenseBudget: 15.8, // Rapidly expanding defense sector
      defensePctGdp: 1.5,
      
      activePersonnel: 355, // NATO 2nd largest standing military
      reservePersonnel: 380,
      nuclearStatus: "NATO Nuclear Sharing Host (US B61 nuclear gravity bombs at Incirlik Air Base)",
      nuclearWarheads: 0, // Estimated 20-30 B61 bombs under US custody
      nuclearTriad: "NATO Nuclear Sharing host; Indigenous ballistic missiles (Tayfun, Bora)",
      combatAircraft: 205, // F-16 Fighting Falcon (modernizing to Viper), developing KAAN 5th gen stealth jet
      aircraftCarriers: 1, // TCG Anadolu (World's first dedicated UCAV / Drone amphibious assault ship)
      submarines: 12,      // Type 209 and Type 214 Reis-class AIP
      navalFleetTotal: 186,
      battleTanks: 2230,   // Altay, Leopard 2A4, M60T Sabra
      
      exportsTotal: 256,
      leadingExports: "Automotive Vehicles, Armed UAVs (Bayraktar TB2/Akinci), Machinery, Steel, Textiles, Agricultural Food Products",
      tradeBalance: -106,
      oilProduction: 0.08,
      oilReserves: 0.4,
      gasProduction: 2.5,  // Sakarya Black Sea offshore gas discovery expanding
      electricityGen: 330,
      renewableShare: 42.0,// High hydro, wind, and geothermal
      
      landArea: 783562,
      rdSpending: 1.4,
      spaceCapability: "TUA Turkish Space Agency, Türksat 6A domestic communications satellite, Alper Gezeravcı first Turkish astronaut to ISS",
      softPowerScore: 54.3,
      strategicDoctrines: "Mavi Vatan (Blue Homeland) maritime doctrine; Drone diplomacy; Montreux Convention guardian of Turkish Straits; Strategic mediation."
    },
    {
      id: "il",
      name: "Israel",
      flag: "🇮🇱",
      region: "Middle East",
      gfpRank: 17,
      powerTier: "Technological & Nuclear Deterrent Powerhouse",
      unscStatus: "UN Member",
      
      gdpNominal: 530,
      gdpPpp: 535,
      gdpPerCapita: 54700,
      gdpGrowth: 1.5,
      fxReserves: 215,
      
      population: 9.9,
      medianAge: 30.5,
      laborForce: 4.4,
      urbanization: 92.8,
      
      defenseBudget: 27.5, // Surge in wartime spending (over 5.3% GDP)
      defensePctGdp: 5.3,
      
      activePersonnel: 170,
      reservePersonnel: 465,
      nuclearStatus: "Unacknowledged Nuclear Weapon State (Policy of Nuclear Ambiguity / Amimut)",
      nuclearWarheads: 90,  // Estimated 90-400 plutonium warheads
      nuclearTriad: "Triad: Jericho III ICBMs, F-35I Adir strike fighters, Dolphin-II submarines with Popeye Turbo SLCMs",
      combatAircraft: 240, // F-35I Adir, F-15I Ra'am, F-16I Sufa
      aircraftCarriers: 0,
      submarines: 5,       // Dolphin-class AIP
      navalFleetTotal: 67,
      battleTanks: 1370,   // Merkava Mk 4 / Mk 5 Barak with Trophy active defense
      
      exportsTotal: 73,
      leadingExports: "Cybersecurity Software, High-Tech Electronics, Defense Hardware (Iron Dome, Arrow-3, David's Sling), Cut Diamonds",
      tradeBalance: -15,
      oilProduction: 0.0,
      oilReserves: 0.01,
      gasProduction: 25,   // Leviathan and Tamar offshore gas fields (exporter to Egypt/Jordan)
      electricityGen: 75,
      renewableShare: 10.0,
      
      landArea: 22072,
      rdSpending: 5.6,     // World #1 R&D expenditure as % of GDP
      spaceCapability: "ISA, Shavit indigenous orbital launcher, Ofeq military reconnaissance satellites",
      softPowerScore: 49.8,
      strategicDoctrines: "Begin Doctrine (counter-proliferation); Amimut (deliberate nuclear ambiguity); Multi-tiered air defense shield; Iron Wall doctrine."
    },
    {
      id: "br",
      name: "Brazil",
      flag: "🇧🇷",
      region: "Latin America",
      gfpRank: 12,
      powerTier: "South American Anchor & Agri-Energy Giant",
      unscStatus: "G4 Member (P5 aspirant)",
      
      gdpNominal: 2330,
      gdpPpp: 4270,
      gdpPerCapita: 10800,
      gdpGrowth: 2.9,
      fxReserves: 355,
      
      population: 216.4,
      medianAge: 33.5,
      laborForce: 108.0,
      urbanization: 87.8,
      
      defenseBudget: 22.9,
      defensePctGdp: 1.1,
      
      activePersonnel: 360,
      reservePersonnel: 1340,
      nuclearStatus: "Non-Nuclear Weapon State (Treaty of Tlatelolco; Developing Álvaro Alberto nuclear attack submarine)",
      nuclearWarheads: 0,
      nuclearTriad: "Non-nuclear; Building nuclear-powered submarine (SN-BR) with naval propulsion reactor",
      combatAircraft: 130, // Saab JAS 39 Gripen E/F, AMX, A-29 Super Tucano
      aircraftCarriers: 0, // Former operator of São Paulo (decommissioned)
      submarines: 7,       // Riachuelo-class (Scorpène derivative)
      navalFleetTotal: 134,
      battleTanks: 470,    // Leopard 1A5, M60A3
      
      exportsTotal: 340,
      leadingExports: "Soybeans (#1 world), Crude Petroleum, Iron Ore, Beef & Poultry, Raw Sugar, Embraer Regional Jets",
      tradeBalance: 98,
      oilProduction: 3.4,  // World #8 producer (Pre-salt deepwater basins)
      oilReserves: 13.0,
      gasProduction: 24,
      electricityGen: 700,
      renewableShare: 88.0,// World clean electricity leader (Hydro 63%, Wind, Solar, Biofuel)
      
      landArea: 8515767,   // World #5 largest country
      rdSpending: 1.2,
      spaceCapability: "AEB, Alcântara Launch Center, CBERS Earth observation satellites with China",
      softPowerScore: 57.0, // Cultural diplomacy, football, Amazon environmental stewardship
      strategicDoctrines: "Amazonian Defense & Sovereignty; South Atlantic Blue Amazon protection; BRICS multipolarity; Peaceful dispute settlement."
    },
    {
      id: "id",
      name: "Indonesia",
      flag: "🇮🇩",
      region: "Southeast Asia",
      gfpRank: 13,
      powerTier: "Archipelagic Giant & Critical Minerals Leader",
      unscStatus: "UN Member (ASEAN de facto leader)",
      
      gdpNominal: 1470,
      gdpPpp: 4650,
      gdpPerCapita: 5270,
      gdpGrowth: 5.1,
      fxReserves: 145,
      
      population: 278.7, // World #4 population, largest Muslim-majority nation
      medianAge: 30.2,
      laborForce: 145.0,
      urbanization: 57.9,
      
      defenseBudget: 9.7,
      defensePctGdp: 0.7,
      
      activePersonnel: 400,
      reservePersonnel: 400,
      nuclearStatus: "Non-Nuclear (Bangkok Treaty SEANWFZ signatory)",
      nuclearWarheads: 0,
      nuclearTriad: "Non-nuclear; Island defense strategy across 17,000 islands",
      combatAircraft: 110, // Su-30, Su-27, F-16, acquiring Rafale and F-15EX
      aircraftCarriers: 0,
      submarines: 4,       // Nagapasa-class (Type 209/1400)
      navalFleetTotal: 333,
      battleTanks: 315,    // Leopard 2RI, Harimau medium tank
      
      exportsTotal: 259,
      leadingExports: "Nickel Ore & Ferronickel (EV supply chain), Palm Oil (#1 world), Coal, Natural Gas, Rubber, Footwear",
      tradeBalance: 37,
      oilProduction: 0.6,
      oilReserves: 2.4,
      gasProduction: 55,
      electricityGen: 330,
      renewableShare: 14.0,
      
      landArea: 1904569,
      rdSpending: 0.28,
      spaceCapability: "LAPAN / BRIN, Palapa and Telkom communication satellites",
      softPowerScore: 47.5,
      strategicDoctrines: "Bebas dan Aktif (Independent and Active foreign policy); Straits of Malacca / Sunda / Lombok guardian; Global Maritime Fulcrum."
    },
    {
      id: "it",
      name: "Italy",
      flag: "🇮🇹",
      region: "Western Europe",
      gfpRank: 10,
      powerTier: "Mediterranean Naval Anchor & Industrial Powerhouse",
      unscStatus: "UN Member (G7, NATO, EU Big 4)",
      
      gdpNominal: 2330,
      gdpPpp: 3350,
      gdpPerCapita: 39600,
      gdpGrowth: 0.7,
      fxReserves: 240,
      
      population: 58.9,
      medianAge: 48.0,
      laborForce: 25.5,
      urbanization: 71.7,
      
      defenseBudget: 35.5,
      defensePctGdp: 1.6,
      
      activePersonnel: 165,
      reservePersonnel: 20,
      nuclearStatus: "NATO Nuclear Sharing Host (US B61 bombs at Aviano and Ghedi air bases)",
      nuclearWarheads: 0, // Estimated 35 B61 bombs under US custody
      nuclearTriad: "NATO Nuclear Sharing host via Tornado IDS and F-35A stealth jets",
      combatAircraft: 190, // F-35A/B, Eurofighter Typhoon, Tornado
      aircraftCarriers: 2, // Cavour (STOVL F-35B carrier) & Trieste (LHD landing helicopter dock)
      submarines: 8,       // Todaro-class (Type 212A AIP)
      navalFleetTotal: 136,
      battleTanks: 200,    // Ariete MBT (procuring Leopard 2A8)
      
      exportsTotal: 677,
      leadingExports: "Precision Industrial Machinery, Luxury Motor Vehicles (Ferrari, Lamborghini), Pharmaceuticals, Fashion Apparel, Wine & Agri-food",
      tradeBalance: 38,
      oilProduction: 0.1,
      oilReserves: 0.6,
      gasProduction: 3.0,
      electricityGen: 280,
      renewableShare: 37.0,// Strong Solar, Wind, and Alpine Hydro
      
      landArea: 301340,
      rdSpending: 1.45,
      spaceCapability: "ASI (Italian Space Agency), Vega launcher prime contractor (Avio), San Marco space legacy",
      softPowerScore: 73.5, // Renowned cultural, fashion, tourism, and diplomatic brand
      strategicDoctrines: "Allargato Mediterranean security pivot; NATO southern flank maritime lead; Fincantieri/Leonardo high-tech defense exports."
    },
    {
      id: "ca",
      name: "Canada",
      flag: "🇨🇦",
      region: "North America",
      gfpRank: 27,
      powerTier: "Arctic Sovereign & Resource Superpower",
      unscStatus: "UN Member (G7, NATO, Five Eyes)",
      
      gdpNominal: 2240,
      gdpPpp: 2470,
      gdpPerCapita: 55500,
      gdpGrowth: 1.3,
      fxReserves: 118,
      
      population: 40.1,
      medianAge: 40.8,
      laborForce: 21.5,
      urbanization: 81.8,
      
      defenseBudget: 27.2,
      defensePctGdp: 1.3,
      
      activePersonnel: 68,
      reservePersonnel: 34,
      nuclearStatus: "Non-Nuclear (Extended US Nuclear Umbrella; Nuclear sharing participant until 1984)",
      nuclearWarheads: 0,
      nuclearTriad: "Non-nuclear; North American Aerospace Defense Command (NORAD) bi-national air shield",
      combatAircraft: 90,  // CF-18 Hornet (acquiring 88 F-35A stealth fighters)
      aircraftCarriers: 0,
      submarines: 4,       // Victoria-class long-range patrol subs
      navalFleetTotal: 61,
      battleTanks: 82,     // Leopard 2A4/2A6M
      
      exportsTotal: 570,
      leadingExports: "Crude Petroleum (Alberta Oil Sands), Natural Gas, Critical Minerals (Uranium, Potash, Nickel), Automotive Parts, Timber, Wheat",
      tradeBalance: -1.5,
      oilProduction: 4.9,  // World #4 Oil Producer
      oilReserves: 168.0, // World #4 Oil Reserves (Oil Sands)
      gasProduction: 190,  // World #5 Gas Producer
      electricityGen: 640,
      renewableShare: 68.0,// Hydroelectricity titan (Hydro-Québec, BC Hydro)
      
      landArea: 9984670,   // World #2 largest landmass
      rdSpending: 1.7,
      spaceCapability: "CSA, Canadarm robotics on Space Shuttle and ISS, Canadarm3 on Lunar Gateway",
      softPowerScore: 74.0,
      strategicDoctrines: "NORAD continental airspace defense; Arctic Northwest Passage sovereignty; Five Eyes intelligence alliance; G7 multilateralism."
    },
    {
      id: "au",
      name: "Australia",
      flag: "🇦🇺",
      region: "Oceania / Indo-Pacific",
      gfpRank: 16,
      powerTier: "Indo-Pacific Maritime Anchor & Critical Minerals Titan",
      unscStatus: "UN Member (G20, Five Eyes, Quad, AUKUS)",
      
      gdpNominal: 1750,
      gdpPpp: 1800,
      gdpPerCapita: 65800,
      gdpGrowth: 1.5,
      fxReserves: 60,
      
      population: 26.6,
      medianAge: 37.5,
      laborForce: 14.5,
      urbanization: 86.6,
      
      defenseBudget: 32.3,
      defensePctGdp: 1.9,
      
      activePersonnel: 60,
      reservePersonnel: 30,
      nuclearStatus: "Non-Nuclear (AUKUS Pillar I: Acquiring Virginia-class and SSN-AUKUS nuclear-powered, conventionally-armed submarines)",
      nuclearWarheads: 0,
      nuclearTriad: "Non-nuclear; Protected by US Extended Nuclear Deterrence umbrella",
      combatAircraft: 100, // F-35A Lightning II, F/A-18F Super Hornet, EA-18G Growler electronic warfare
      aircraftCarriers: 0, // Operates 2 Canberra-class Landing Helicopter Docks (LHD)
      submarines: 6,       // Collins-class (transitioning to SSN nuclear attack subs via AUKUS)
      navalFleetTotal: 43,
      battleTanks: 59,     // M1A1 Abrams (upgrading to M1A2 SEPv3)
      
      exportsTotal: 371,
      leadingExports: "Iron Ore (#1 world), Liquefied Natural Gas (LNG), Metallurgical Coal, Lithium (#1 world), Gold, Beef & Wheat",
      tradeBalance: 75,
      oilProduction: 0.35,
      oilReserves: 2.4,
      gasProduction: 150,  // World #7 Gas Producer, Top LNG exporter
      electricityGen: 275,
      renewableShare: 35.0,// Booming Solar PV and Wind penetration
      
      landArea: 7692024,   // World #6 largest country
      rdSpending: 1.8,
      spaceCapability: "ASA (Australian Space Agency), Pine Gap joint US intelligence station, Southern Launch spaceports",
      softPowerScore: 68.2,
      strategicDoctrines: "AUKUS Pillar I & II; Quad quadrilateral security dialogue; Maritime Denial doctrine; Indo-Pacific sea lane protection."
    },
    {
      id: "eg",
      name: "Egypt",
      flag: "🇪🇬",
      region: "North Africa / Middle East",
      gfpRank: 15,
      powerTier: "Arab-African Chokepoint & Military Heavyweight",
      unscStatus: "UN Member (Arab League HQ)",
      
      gdpNominal: 390,
      gdpPpp: 1900,
      gdpPerCapita: 3700,
      gdpGrowth: 3.8,
      fxReserves: 46,
      
      population: 106.0, // Most populous Arab country
      medianAge: 24.8,
      laborForce: 31.0,
      urbanization: 43.1,
      
      defenseBudget: 4.5,
      defensePctGdp: 1.2,
      
      activePersonnel: 440, // Largest standing army in Africa
      reservePersonnel: 480,
      nuclearStatus: "Non-Nuclear (African Nuclear-Weapon-Free Zone Treaty / Pelindaba Treaty)",
      nuclearWarheads: 0,
      nuclearTriad: "Non-nuclear; Building El Dabaa Nuclear Power Plant (4 VVER-1200 reactors via Rosatom)",
      combatAircraft: 245, // Dassault Rafale, MiG-29M, F-16 Fighting Falcon, Mirage 2000
      aircraftCarriers: 2, // Mistral-class LHD amphibious carriers (Gamal Abdel Nasser & Anwar El Sadat)
      submarines: 8,       // Type 209/1400 mod & Romeo-class
      navalFleetTotal: 140,
      battleTanks: 4624,   // M1A1 Abrams (assembled domestically under co-production), M60A3
      
      exportsTotal: 42,
      leadingExports: "Liquefied Natural Gas (Zohr field), Refined Petroleum, Fertilizers, Textiles & Cotton, Citrus Fruits, Suez Canal transit revenue ($9B)",
      tradeBalance: -38,
      oilProduction: 0.6,
      oilReserves: 3.3,
      gasProduction: 60,
      electricityGen: 210,
      renewableShare: 12.0,// Aswan High Dam hydro + Benban Solar Park
      
      landArea: 1002450,
      rdSpending: 0.75,
      spaceCapability: "EGSA, MisrSat-2 Earth observation satellite, host of African Space Agency headquarters",
      softPowerScore: 48.0, // Historical cradle, Al-Azhar Islamic jurisprudence, Arab cultural/cinema capital
      strategicDoctrines: "Suez Canal & Red Sea chokepoint security; Eastern Mediterranean Gas Forum (EMGF); Sinai counter-terrorism; Nile Grand Ethiopian Renaissance Dam (GERD) water security."
    },
    {
      id: "za",
      name: "South Africa",
      flag: "🇿🇦",
      region: "Sub-Saharan Africa",
      gfpRank: 33,
      powerTier: "African Diplomatic Leader & Critical Mineral Power",
      unscStatus: "UN Member (G20, BRICS founder)",
      
      gdpNominal: 400,
      gdpPpp: 1020,
      gdpPerCapita: 6450,
      gdpGrowth: 1.0,
      fxReserves: 62,
      
      population: 62.0,
      medianAge: 28.0,
      laborForce: 24.5,
      urbanization: 68.3,
      
      defenseBudget: 3.1,
      defensePctGdp: 0.8,
      
      activePersonnel: 73,
      reservePersonnel: 15,
      nuclearStatus: "Former Nuclear Weapon State (Voluntarily dismantled all 6 nuclear weapons in 1989-1991; Treaty of Pelindaba architect)",
      nuclearWarheads: 0,
      nuclearTriad: "Historic only: Built 6 gun-type HEU nuclear devices in 1980s, completely destroyed prior to NPT accession",
      combatAircraft: 40,  // Saab Gripen C/D, Rooivalk combat helicopter
      aircraftCarriers: 0,
      submarines: 3,       // Heroine-class (Type 209/1400)
      navalFleetTotal: 47,
      battleTanks: 157,    // Olifant Mk 1B / Mk 2 MBT
      
      exportsTotal: 110,
      leadingExports: "Platinum Group Metals (#1 world), Gold, Iron Ore, Coal, Diamonds, Citrus, Manganese",
      tradeBalance: 12,
      oilProduction: 0.01,
      oilReserves: 0.02,
      gasProduction: 1.2,
      electricityGen: 240,
      renewableShare: 11.0,// Operates Koeberg (Africa's only commercial nuclear power station)
      
      landArea: 1219090,
      rdSpending: 0.72,
      spaceCapability: "SANSA, Square Kilometre Array (SKA) radio telescope host, SumbandilaSat",
      softPowerScore: 50.1, // Constitution, Nelson Mandela legacy, ICJ international law leadership
      strategicDoctrines: "African Renaissance & AU Peacekeeping; Non-aligned multipolarity in BRICS; Pelindaba denuclearization champion; Cape Sea Route protection."
    },
    {
      id: "ae",
      name: "United Arab Emirates",
      flag: "🇦🇪",
      region: "Middle East",
      gfpRank: 51,
      powerTier: "Global Trade Hub, Sovereign Capital & Tech Pioneer",
      unscStatus: "UN Member (G20 Guest, BRICS Member)",
      
      gdpNominal: 536,
      gdpPpp: 950,
      gdpPerCapita: 52500,
      gdpGrowth: 3.9,
      fxReserves: 190,
      
      population: 10.2,
      medianAge: 32.6,
      laborForce: 7.2,
      urbanization: 87.5,
      
      defenseBudget: 20.7,
      defensePctGdp: 4.2,
      
      activePersonnel: 63,
      reservePersonnel: 0,
      nuclearStatus: "Peaceful Nuclear Energy State (123 Agreement with US; Zero enrichment commitment)",
      nuclearWarheads: 0,
      nuclearTriad: "Non-nuclear; Operates Barakah Nuclear Plant (4 APR-1400 reactors generating 5.6 GW clean baseload power)",
      combatAircraft: 155, // F-16E/F Desert Falcon Block 60, Mirage 2000-9, ordered 80 Rafale F4s
      aircraftCarriers: 0,
      submarines: 0,
      navalFleetTotal: 79,
      battleTanks: 350,    // Leclerc Tropicalisé MBT
      
      exportsTotal: 365,
      leadingExports: "Crude Petroleum, Re-exports of Electronics & Machinery, Gold & Diamonds, Aluminum, Petrochemicals",
      tradeBalance: 95,
      oilProduction: 3.2,  // World #8 Oil Producer (OPEC core member)
      oilReserves: 113.0, // World #5 Oil Reserves
      gasProduction: 55,
      electricityGen: 155,
      renewableShare: 18.0,// Barakah Nuclear + Mohammed bin Rashid Al Maktoum Solar Park
      
      landArea: 83600,
      rdSpending: 1.5,
      spaceCapability: "UAESA, Hope Mars Orbiter (Emirates Mars Mission), Rashid Lunar Rover, Hazza Al Mansoori & Sultan Al Neyadi astronauts",
      softPowerScore: 66.5, // World #10 Soft Power (Brand Finance), Dubai global aviation & logistics hub
      strategicDoctrines: "Geo-economic connectivity via DP World global ports; AI and advanced computing (G42, Falcon LLM); Abraham Accords normalization; Maritime Strait of Hormuz deterrence."
    },
    {
      id: "pl",
      name: "Poland",
      flag: "🇵🇱",
      region: "Eastern Europe",
      gfpRank: 21,
      powerTier: "NATO Eastern Flank Land Powerhouse",
      unscStatus: "UN Member (NATO, EU)",
      
      gdpNominal: 845,
      gdpPpp: 1800,
      gdpPerCapita: 22400,
      gdpGrowth: 2.8,
      fxReserves: 210,
      
      population: 37.8,
      medianAge: 42.6,
      laborForce: 17.5,
      urbanization: 60.2,
      
      defenseBudget: 38.3, // 4.12% of GDP (Highest in entire NATO alliance)
      defensePctGdp: 4.12,
      
      activePersonnel: 216, // Rapidly expanding toward 300K target
      reservePersonnel: 35,
      nuclearStatus: "Non-Nuclear (Officially requested participation in NATO Nuclear Sharing)",
      nuclearWarheads: 0,
      nuclearTriad: "Non-nuclear; Operates Patriot PAC-3 missile batteries, HIMARS rocket artillery",
      combatAircraft: 100, // F-16 C/D Block 52+, FA-50 Golden Eagle, ordered 32 F-35A stealth jets
      aircraftCarriers: 0,
      submarines: 1,       // Orzeł (Kilo-class), procuring modern Orka program subs
      navalFleetTotal: 86,
      battleTanks: 650,    // M1A2 SEPv3 Abrams, K2 Black Panther, Leopard 2A4/2A5
      
      exportsTotal: 380,
      leadingExports: "Automotive Parts, Machinery & Industrial Electronics, Furniture, Plastics, Agri-food Products",
      tradeBalance: 11,
      oilProduction: 0.02,
      oilReserves: 0.15,
      gasProduction: 4.0,  // Baltic Pipe brings Norwegian gas, eliminating Russian dependence
      electricityGen: 175,
      renewableShare: 26.0,// Rapid transition away from coal via Wind and Solar
      
      landArea: 312696,
      rdSpending: 1.46,
      spaceCapability: "POLSA (Polish Space Agency), PW-Sat, contributing to ESA science missions",
      softPowerScore: 51.2,
      strategicDoctrines: "NATO Eastern Flank forward deterrence; Suwalki Gap defense; Logistics hub for Ukrainian resilience; Massive land-forces rearmament."
    },
    {
      id: "ua",
      name: "Ukraine",
      flag: "🇺🇦",
      region: "Eastern Europe",
      gfpRank: 20,
      powerTier: "Wartime Combat-Tested Frontline State",
      unscStatus: "UN Member",
      
      gdpNominal: 180,
      gdpPpp: 470,
      gdpPerCapita: 4700,
      gdpGrowth: 3.5,
      fxReserves: 40,
      
      population: 38.0,
      medianAge: 41.5,
      laborForce: 15.0,
      urbanization: 70.1,
      
      defenseBudget: 42.0, // Over 37% of GDP wartime expenditure
      defensePctGdp: 37.0,
      
      activePersonnel: 900, // Massive wartime mobilization
      reservePersonnel: 1200,
      nuclearStatus: "Former Nuclear Power (Budapest Memorandum 1994: Surrendered world's 3rd largest nuclear arsenal of 1,900 warheads to Russia)",
      nuclearWarheads: 0,
      nuclearTriad: "Historical only: Held 176 ICBMs and 44 strategic bombers until 1996; Today utilizes indigenous long-range strike drones (Liutyi, Trembita)",
      combatAircraft: 85,  // Su-27, MiG-29, Su-24M, integrating F-16 Fighting Falcons
      aircraftCarriers: 0,
      submarines: 0,
      navalFleetTotal: 38, // Dominated Black Sea via uncrewed naval drones (Magura V5, Sea Baby)
      battleTanks: 1800,   // T-64BV, T-72, T-80, Leopard 2, Challenger 2, M1A1 Abrams
      
      exportsTotal: 36,
      leadingExports: "Wheat, Corn, Sunflower Oil (#1 world), Iron Ore, Semi-finished Steel, Titanium",
      tradeBalance: -28,
      oilProduction: 0.03,
      oilReserves: 0.4,
      gasProduction: 18.5,
      electricityGen: 105,
      renewableShare: 10.0,// Heavy reliance on nuclear (Rivne, Khmelnytskyi, South Ukraine)
      
      landArea: 603550,   // Largest country entirely within Europe
      rdSpending: 0.5,
      spaceCapability: "Yuzhmash / Yuzhnoye design bureau, Zenit and Dnepr rocket legacy, Vega stage-4 engine",
      softPowerScore: 49.5, // Global geopolitical resilience, democratic solidarity symbol
      strategicDoctrines: "Asymmetric drone warfare (FPV swarms, USV naval strikes); Active territorial defense; Deep strikes inside Russian logistics; Full NATO interoperability."
    }
  ];

  const PRESET_COMPARISONS = {
    "us-vs-cn": {
      idA: "us",
      idB: "cn",
      title: "United States vs. China: The 21st Century Hegemonic Contest",
      badge: "Global Superpower vs. Peer Challenger",
      summary: "The definitive systemic rivalry of the modern era. While the United States maintains unmatched global alliance networks, power projection through 11 supercarriers, dollar primacy, and technological lead, China leads in PPP-adjusted GDP, industrial manufacturing scale, commercial shipbuilding, and standing ground force size."
    },
    "pk-vs-in": {
      idA: "pk",
      idB: "in",
      title: "Pakistan vs. India: South Asian Strategic Balance & Nuclear Deterrence",
      badge: "Full Spectrum Deterrence vs. Conventional Asymmetry",
      summary: "Despite India's significant conventional economic and military advantage (9x defense budget, 4x population), Pakistan maintains credible minimum nuclear deterrence parity (~170 vs ~172 warheads) and tactical nuclear deterrence (Nasr), preventing all-out conventional war under the shadow of the nuclear threshold."
    },
    "ru-vs-us": {
      idA: "ru",
      idB: "us",
      title: "Russia vs. United States: The Nuclear Superpower Standoff",
      badge: "Strategic Triads & Great Power Balancing",
      summary: "Together controlling over 88% of the world's nuclear warheads, Washington and Moscow anchor global strategic deterrence. While the US possesses overwhelming global GDP, blue-water carrier strike groups, and tech R&D, Russia commands the world's largest landmass, top nuclear stockpile, hypersonic edge, and vast energy reserves."
    },
    "sa-vs-ir": {
      idA: "sa",
      idB: "ir",
      title: "Saudi Arabia vs. Iran: The Persian Gulf Regional Power Balance",
      badge: "Financial/Petro Hegemony vs. Asymmetric Missile Depth",
      summary: "The defining regional balance in the Middle East. Saudi Arabia commands immense petrodollar wealth and a Western-equipped air force with the 5th largest military budget globally. Iran counters through deep strategic geography, an unmatched indigenous ballistic missile/drone arsenal, and the 'Axis of Resistance' network."
    },
    "gb-vs-fr": {
      idA: "gb",
      idB: "fr",
      title: "United Kingdom vs. France: Western Europe's Nuclear P5 Powers",
      badge: "Post-Brexit Maritime Power vs. Strategic Autonomy",
      summary: "The twin pillars of European military strength. Both maintain independent nuclear deterrents, P5 vetoes, and global blue-water navies. France champions independent defense manufacturing and a nuclear CATOBAR carrier, while the UK leverages deep transatlantic integration with the US (AUKUS, Trident) and global financial services."
    },
    "kr-vs-kp": {
      idA: "kr",
      idB: "kp",
      title: "South Korea vs. North Korea: The 38th Parallel Divide",
      badge: "High-Tech Industrial Might vs. Asymmetric Nuclear Arsenal",
      summary: "One of the most heavily fortified frontiers on earth. South Korea possesses an advanced $1.76T economy, high-tech conventional weapons (K2 tanks, K9 howitzers), and US extended deterrence. North Korea counters via a 1.2M standing army, thousands of artillery tubes aimed at Seoul, and an operational nuclear ICBM arsenal."
    },
    "tr-vs-il": {
      idA: "tr",
      idB: "il",
      title: "Turkey vs. Israel: Eastern Mediterranean Geopolitical Rivalry",
      badge: "Transcontinental Pivot vs. Technological Fortress",
      summary: "Two pivotal Middle Eastern powers with starkly contrasting strategic postures. Turkey leverages a large standing army, unmatched armed drone industry (Bayraktar), NATO membership, and control of the Turkish Straits. Israel commands qualitative military edge (QME), cutting-edge aerospace/cyber, unacknowledged nuclear triad, and multi-tier missile defense (Arrow/Iron Dome)."
    }
  };

  const STRATEGIC_THEORIES = [
    {
      id: "morgenthau",
      title: "Hans Morgenthau's 9 Elements of National Power",
      source: "Politics Among Nations: The Struggle for Power and Peace (1948)",
      concept: "Classical Realism positing that international relations is governed by objective laws rooted in human nature, where nations continuously pursue power defined in terms of interest.",
      elements: [
        { name: "Geography", desc: "Natural borders, access to high seas, territorial depth, and climate (e.g. Russia's strategic depth, Pakistan's geopolitical crossroads at Gwadar)." },
        { name: "Natural Resources", desc: "Food self-sufficiency and industrial raw materials, especially oil, gas, uranium, and rare earths (e.g. Saudi petrodollars, US shale oil)." },
        { name: "Industrial Capacity", desc: "Ability to convert raw materials into modern communications, civilian infrastructure, and military munitions (e.g. China's manufacturing dominance)." },
        { name: "Military Preparedness", desc: "Technological superiority, quality of weaponry, doctrines, and troop logistics (e.g. nuclear triads, air defense integration)." },
        { name: "Population", desc: "Demographic mass, age pyramid, and labor force mobilization potential (e.g. Pakistan's youth dividend vs Japan's aging demographic)." },
        { name: "National Character", desc: "Cultural endurance, stoicism, and societal resilience during protracted crises (e.g. British resilience in WWII, Ukrainian civilian mobilization)." },
        { name: "National Morale", desc: "Degree of public determination and faith in state foreign policy goals." },
        { name: "Quality of Diplomacy", desc: "Morgenthau called diplomacy 'the most important element' — combining all resources into effective international coalitions." },
        { name: "Quality of Government", desc: "Administrative competence, constitutional stability, institutional legitimacy, and democratic or executive cohesion." }
      ],
      examRelevance: "Essential framework for CSS International Relations Paper I & II (Power Analysis question) and Political Science."
    },
    {
      id: "nye",
      title: "Joseph Nye's Spectrum: Hard, Soft, and Smart Power",
      source: "Bound to Lead (1990) & Soft Power: The Means to Success in World Politics (2004)",
      concept: "Power is the ability to affect others to get the outcomes you want. It operates across three interconnected mechanisms: coercion, attraction, and institutional synthesis.",
      elements: [
        { name: "Hard Power (Coercion)", desc: "The direct exercise of military force, defense deterrence, and economic carrots/sticks (sanctions, tariffs, blockades). Sourced from GDP, troops, and nuclear warheads." },
        { name: "Soft Power (Attraction)", desc: "Getting others to want what you want without coercion. Sourced from culture (Hollywood, K-Pop, anime), political values (democracy, human rights), and foreign policy legitimacy." },
        { name: "Smart Power (Synthesis)", desc: "The strategic integration of hard military/economic muscle with soft institutional diplomacy. Coined by Joseph Nye and Suzanne Nossel, emphasized in US diplomacy by Hillary Clinton." }
      ],
      examRelevance: "Directly cited in CSS English Essay, Current Affairs, and International Relations topics concerning US Hegemony, China's Rise, and Pakistan's Public Diplomacy."
    },
    {
      id: "organski",
      title: "Organski's Power Transition Theory & The Thucydides Trap",
      source: "World Politics (A.F.K. Organski, 1958) & Destined for War (Graham Allison, 2017)",
      concept: "The international system is not naturally anarchic, but hierarchical. A dominant hegemon establishes the international order. Major wars occur when a rapidly rising dissatisfied challenger approaches parity with the hegemon.",
      elements: [
        { name: "The Hegemonic Hierarchy", desc: "Dominant Power at the peak, followed by Great Powers, Middle Powers, and Small Powers. Stability depends on the hegemon's ability to maintain order." },
        { name: "The Parity Danger Zone", desc: "When the challenger reaches 80%–120% of the dominant state's power, the risk of systemic global conflict peaks." },
        { name: "Status Quo vs. Revisionist", desc: "Satisfied powers uphold the established norms; dissatisfied revisionist powers seek to rewrite treaties, institutions, and spheres of influence." },
        { name: "The Thucydides Trap", desc: "Graham Allison's historical study of 16 power transitions (12 ended in war): 'It was the rise of Athens and the fear that this instilled in Sparta that made war inevitable.' Today applied directly to US vs China." }
      ],
      examRelevance: "High-yield conceptual framework for analyzing the US-China strategic contest in the Indo-Pacific, Taiwan Strait, and South China Sea in CSS Current Affairs and IR Paper II."
    }
  ];

  const PRACTICE_MCQS = [
    {
      id: 1,
      question: "According to SIPRI (Stockholm International Peace Research Institute) 2024 data, which country spends the highest percentage of its GDP on defense?",
      options: [
        "United States",
        "Ukraine",
        "Saudi Arabia",
        "Pakistan"
      ],
      answer: 1,
      explanation: "During active wartime defense, Ukraine allocated approximately 37% of its GDP to defense in 2023-2024. Among non-warring major states, Saudi Arabia allocates ~7.1% of its GDP to military expenditure, making it the highest in the G20."
    },
    {
      id: 2,
      question: "Which of the following describes Pakistan's declared military doctrine formulated to deter India's 'Cold Start' doctrine across all levels of conflict?",
      options: [
        "Massive Retaliation Doctrine",
        "Strategic Ambiguity Doctrine",
        "Full Spectrum Deterrence (FSD)",
        "Pre-emptive Counterforce Strike"
      ],
      answer: 2,
      explanation: "Full Spectrum Deterrence (FSD) was articulated by Pakistan's National Command Authority (NCA) to deter all forms of aggression across tactical (e.g. Nasr short-range missile), operational, and strategic levels (e.g. Shaheen-III, Ababeel MIRV)."
    },
    {
      id: 3,
      question: "Which nation currently holds the world's largest total stockpile of nuclear warheads according to SIPRI 2024?",
      options: [
        "United States (~5,044)",
        "China (~500)",
        "Russia (~5,580)",
        "France (~290)"
      ],
      answer: 2,
      explanation: "Russia commands the world's largest nuclear inventory with approximately 5,580 total warheads (deployed and in reserve), closely followed by the United States with ~5,044 warheads."
    },
    {
      id: 4,
      question: "In classical International Relations theory, which scholar authored 'Politics Among Nations' (1948) and articulated the 9 Elements of National Power?",
      options: [
        "Kenneth Waltz",
        "Hans Morgenthau",
        "John Mearsheimer",
        "Francis Fukuyama"
      ],
      answer: 1,
      explanation: "Hans Morgenthau is the founding father of Classical Realism. In 'Politics Among Nations' (1948), he systematically broke down national power into 9 tangible and intangible elements, naming diplomacy as the most important."
    },
    {
      id: 5,
      question: "Which country ranks #1 in the world in Purchasing Power Parity (PPP) adjusted Gross Domestic Product?",
      options: [
        "United States",
        "China",
        "India",
        "Japan"
      ],
      answer: 1,
      explanation: "According to IMF data, China surpassed the United States in GDP (PPP) in 2014 and currently commands over $35.29 Trillion PPP, compared to the US at ~$28.78 Trillion PPP."
    },
    {
      id: 6,
      question: "What is the primary operational distinction of France's nuclear aircraft carrier 'Charles de Gaulle' compared to all other European carriers?",
      options: [
        "It uses STOVL ski-jump ramps",
        "It is CATOBAR (Catapult Assisted Take-Off) and Nuclear-Powered",
        "It carries unmanned stealth drones only",
        "It operates diesel-electric propulsion"
      ],
      answer: 1,
      explanation: "The Charles de Gaulle is the only nuclear-powered aircraft carrier built outside the United States Navy, and the only European carrier utilizing steam catapults (CATOBAR) for launching standard fixed-wing aircraft like the Rafale M and E-2C Hawkeye."
    },
    {
      id: 7,
      question: "Which term was coined by Harvard political scientist Graham Allison to describe the structural stress when a rising power threatens to displace an established ruling hegemon?",
      options: [
        "The Security Dilemma",
        "The Hegemonic Stability Trap",
        "The Thucydides Trap",
        "The Prisoner's Dilemma"
      ],
      answer: 2,
      explanation: "The 'Thucydides Trap' was popularized by Graham Allison in his 2017 book 'Destined for War', drawing from Thucydides' historical account of the Peloponnesian War between rising Athens and dominant Sparta."
    },
    {
      id: 8,
      question: "Which NATO member state currently spends the highest percentage of its GDP on defense (exceeding 4%) to modernize its land forces on the Eastern Flank?",
      options: [
        "Germany",
        "Poland",
        "United Kingdom",
        "Greece"
      ],
      answer: 1,
      explanation: "Poland leads all 32 NATO member states in defense spending as a percentage of GDP, reaching 4.12% in 2024, acquiring Abrams M1A2 tanks, K2 Black Panthers, HIMARS, and F-35 fighter jets."
    },
    {
      id: 9,
      question: "Which country is the world's largest producer of crude oil as of 2024?",
      options: [
        "Saudi Arabia",
        "Russia",
        "United States",
        "Iran"
      ],
      answer: 2,
      explanation: "Due to the shale revolution and Permian basin development, the United States has been the world's #1 crude oil producer since 2018, pumping over 13.3 million barrels per day, ahead of Saudi Arabia (~9.0 mbpd) and Russia (~10.1 mbpd)."
    },
    {
      id: 10,
      question: "Which country voluntarily dismantled its entire operational nuclear arsenal of 6 weapons and signed the NPT as a non-nuclear weapon state in 1991?",
      options: [
        "Ukraine",
        "South Africa",
        "Kazakhstan",
        "Belarus"
      ],
      answer: 1,
      explanation: "South Africa developed 6 gun-type highly enriched uranium (HEU) nuclear bombs during the 1980s and voluntarily disassembled all of them before transitioning to democratic majority rule in 1994, becoming the first state in history to voluntarily develop and then dismantle its own nuclear weapons."
    }
  ];

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
    getPresetList: function () {
      return Object.keys(PRESET_COMPARISONS).map(k => ({
        key: k,
        ...PRESET_COMPARISONS[k]
      }));
    },
    getTheories: function () {
      return JSON.parse(JSON.stringify(STRATEGIC_THEORIES));
    },
    getMCQs: function () {
      return JSON.parse(JSON.stringify(PRACTICE_MCQS));
    },
    getRankings: function (metricKey, ascending) {
      const copy = JSON.parse(JSON.stringify(GLOBAL_POWERS));
      copy.sort((a, b) => {
        const valA = a[metricKey] !== undefined ? a[metricKey] : 0;
        const valB = b[metricKey] !== undefined ? b[metricKey] : 0;
        return ascending ? valA - valB : valB - valA;
      });
      return copy;
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
console.log('Successfully generated full data_global_power.js. Size:', fs.statSync(outputPath).size, 'bytes');
