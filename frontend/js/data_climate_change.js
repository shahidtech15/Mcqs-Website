/**
 * Climate Change Explorer Academic Dataset
 * Global Temperature Anomalies, Carbon Emissions, Cryosphere & Glaciers, 
 * Sea-Level Rise, Renewable Energy, Climate Treaties, and Pakistan Vulnerability Suite
 * Prepared for CSS, PMS, FPSC, PPSC, Environmental Sciences & General Science & Technology
 */

const CLIMATE_CHANGE_DATA = {
  "kpis": {
    "tempAnomaly": "+1.28°C",
    "tempAnomalyDesc": "Global mean surface temperature above 1850–1900 pre-industrial baseline (WMO 2023-2024)",
    "co2Concentration": "424.5 ppm",
    "co2Desc": "Atmospheric CO₂ recorded at Mauna Loa Observatory (up from 280 ppm pre-industrial, +51%)",
    "seaLevelRise": "+23.5 cm",
    "seaLevelDesc": "Global mean sea level rise since 1880; current satellite rate is 3.7 mm/year",
    "arcticIceLoss": "-12.6%",
    "arcticIceDesc": "Decline in Arctic September minimum sea ice extent per decade since 1979 satellite records",
    "renewableShare": "30.2%",
    "renewableDesc": "Share of global electricity generated from renewables in 2023 (solar, wind, hydro, bio)",
    "parisGoal": "1.5°C",
    "parisDesc": "Target warming limit under 2015 Paris Agreement to avert catastrophic tipping points"
  },
  "temperatures": {
    "baseline": "1850-1900 Pre-Industrial Average (13.7°C global mean)",
    "warmingRatePerDecade": "+0.18°C per decade since 1981 (more than double the rate before 1981)",
    "hottestDecadeOnRecord": "2014-2023 (All 10 warmest years have occurred since 2014)",
    "recordYear": "2023/2024 (First individual 12-month period breaching +1.5°C threshold according to Copernicus)",
    "history": [
      {
        "year": 1880,
        "anomaly": -0.16,
        "stripe": "#1d4ed8",
        "note": "Start of instrumental temperature records"
      },
      {
        "year": 1890,
        "anomaly": -0.28,
        "stripe": "#1e40af",
        "note": "Cool volcanic & solar minimum period"
      },
      {
        "year": 1900,
        "anomaly": -0.08,
        "stripe": "#3b82f6",
        "note": "Turn of 20th century baseline"
      },
      {
        "year": 1910,
        "anomaly": -0.32,
        "stripe": "#1e3a8a",
        "note": "Coldest decade of the 20th century"
      },
      {
        "year": 1920,
        "anomaly": -0.18,
        "stripe": "#2563eb",
        "note": "Post-WWI industrial recovery"
      },
      {
        "year": 1930,
        "anomaly": -0.06,
        "stripe": "#60a5fa",
        "note": "1930s Dust Bowl and regional warmth"
      },
      {
        "year": 1940,
        "anomaly": 0.08,
        "stripe": "#93c5fd",
        "note": "WWII industrial activity surge"
      },
      {
        "year": 1950,
        "anomaly": -0.05,
        "stripe": "#bfdbfe",
        "note": "Post-war aerosol emissions masking warming"
      },
      {
        "year": 1960,
        "anomaly": 0.02,
        "stripe": "#e0f2fe",
        "note": "Neutral anomaly; industrial sulfate cooling"
      },
      {
        "year": 1970,
        "anomaly": 0.06,
        "stripe": "#fef08a",
        "note": "First Earth Day (1970); early warming signals"
      },
      {
        "year": 1980,
        "anomaly": 0.26,
        "stripe": "#fde047",
        "note": "Modern sharp warming acceleration begins"
      },
      {
        "year": 1990,
        "anomaly": 0.44,
        "stripe": "#facc15",
        "note": "IPCC First Assessment Report (FAR 1990)"
      },
      {
        "year": 1998,
        "anomaly": 0.63,
        "stripe": "#fb923c",
        "note": "Massive 1997-98 Super El Niño spike"
      },
      {
        "year": 2005,
        "anomaly": 0.68,
        "stripe": "#f97316",
        "note": "Record warm year; Kyoto Protocol enters into force"
      },
      {
        "year": 2010,
        "anomaly": 0.72,
        "stripe": "#ea580c",
        "note": "Deadly Russian heatwave and catastrophic Pakistan mega-floods"
      },
      {
        "year": 2015,
        "anomaly": 0.94,
        "stripe": "#dc2626",
        "note": "Paris Agreement adopted; warmest year on record at the time"
      },
      {
        "year": 2016,
        "anomaly": 1.02,
        "stripe": "#b91c1c",
        "note": "First calendar year breaching +1.0°C global anomaly"
      },
      {
        "year": 2019,
        "anomaly": 0.99,
        "stripe": "#991b1b",
        "note": "Second warmest year; Australian Black Summer bushfires"
      },
      {
        "year": 2020,
        "anomaly": 1.02,
        "stripe": "#7f1d1d",
        "note": "Tied 2016 record despite COVID-19 lockdowns"
      },
      {
        "year": 2021,
        "anomaly": 0.85,
        "stripe": "#dc2626",
        "note": "La Niña year; Glasgow COP26 Climate Pact"
      },
      {
        "year": 2022,
        "anomaly": 0.89,
        "stripe": "#b91c1c",
        "note": "Pakistan mega-floods submerge 1/3 of the country"
      },
      {
        "year": 2023,
        "anomaly": 1.18,
        "stripe": "#7f1d1d",
        "note": "Shattered all global heat records by enormous margin"
      },
      {
        "year": 2024,
        "anomaly": 1.28,
        "stripe": "#450a0a",
        "note": "Current estimated 12-month trailing mean (~1.3°C above baseline)"
      }
    ],
    "scenarios": [
      {
        "id": "ssp1-19",
        "name": "SSP1-1.9 (Very Low Emissions / Paris 1.5°C)",
        "temp2100": "1.4°C (1.0°C – 1.8°C)",
        "emissionsGoal": "Net-zero CO₂ by 2050, then negative emissions",
        "desc": "Rapid global shift to sustainable practices, strict clean energy adoption, carbon capture, and high international cooperation.",
        "seaLevel2100": "+0.38 m (0.28 – 0.55 m)",
        "color": "#10b981"
      },
      {
        "id": "ssp1-26",
        "name": "SSP1-2.6 (Low Emissions / Paris 2.0°C)",
        "temp2100": "1.8°C (1.3°C – 2.4°C)",
        "emissionsGoal": "Net-zero CO₂ around 2075",
        "desc": "Strong climate action, heavy renewable penetration, but slightly slower phase-out of fossil fuels than SSP1-1.9.",
        "seaLevel2100": "+0.44 m (0.32 – 0.62 m)",
        "color": "#06b6d4"
      },
      {
        "id": "ssp2-45",
        "name": "SSP2-4.5 (Middle of the Road / Current Policies)",
        "temp2100": "2.7°C (2.1°C – 3.5°C)",
        "emissionsGoal": "Emissions hover around current levels until 2050, then slow decline",
        "desc": "Current policy trajectory: moderate progress on clean tech, uneven global cooperation, lingering fossil fuel reliance.",
        "seaLevel2100": "+0.56 m (0.44 – 0.76 m)",
        "color": "#f59e0b"
      },
      {
        "id": "ssp3-70",
        "name": "SSP3-7.0 (Regional Rivalry / High Emissions)",
        "temp2100": "3.6°C (2.8°C – 4.6°C)",
        "emissionsGoal": "Emissions double by 2100",
        "desc": "Resurgent nationalism, security conflicts, breakdown of climate diplomacy, heavy reliance on domestic coal and oil.",
        "seaLevel2100": "+0.68 m (0.52 – 0.90 m)",
        "color": "#ea580c"
      },
      {
        "id": "ssp5-85",
        "name": "SSP5-8.5 (Fossil-Fueled Development / Worst Case)",
        "temp2100": "4.4°C (3.3°C – 5.7°C)",
        "emissionsGoal": "Emissions triple by 2080",
        "desc": "Intensive exploitation of fossil fuel reserves, energy-intensive lifestyles, catastrophic ecosystem collapses.",
        "seaLevel2100": "+0.77 m (0.63 – 1.01 m, up to 2m if ice sheets collapse)",
        "color": "#dc2626"
      }
    ]
  },
  "emissions": {
    "keelingCurve": [
      {
        "year": 1800,
        "co2": 280,
        "note": "Pre-industrial baseline (stable for 10,000 years)"
      },
      {
        "year": 1850,
        "co2": 285,
        "note": "Early Industrial Revolution coal adoption"
      },
      {
        "year": 1900,
        "co2": 296,
        "note": "Expansion of steam power and steelmaking"
      },
      {
        "year": 1958,
        "co2": 315,
        "note": "Charles David Keeling begins continuous measurement at Mauna Loa"
      },
      {
        "year": 1970,
        "co2": 325,
        "note": "Post-war economic and automotive boom"
      },
      {
        "year": 1980,
        "co2": 338,
        "note": "Accelerating global fossil fuel combustion"
      },
      {
        "year": 1990,
        "co2": 354,
        "note": "UNFCCC negotiations begin"
      },
      {
        "year": 2000,
        "co2": 369,
        "note": "Rapid Chinese industrialization begins"
      },
      {
        "year": 2013,
        "co2": 400,
        "note": "First daily measurement exceeding 400 ppm in human history"
      },
      {
        "year": 2015,
        "co2": 401,
        "note": "Paris Agreement adopted"
      },
      {
        "year": 2020,
        "co2": 414,
        "note": "Pandemic dip had negligible impact on atmospheric accumulation"
      },
      {
        "year": 2024,
        "co2": 424.5,
        "note": "Highest concentration in at least 3 million years (Pliocene Epoch)"
      }
    ],
    "topEmitters": [
      {
        "country": "China",
        "annualGt": 11.4,
        "sharePct": 30.7,
        "perCapitaTons": 8,
        "cumulSharePct": 14.8,
        "mainFuel": "Coal (56% of primary energy)",
        "target": "Peak emissions before 2030; carbon neutrality before 2060"
      },
      {
        "country": "United States",
        "annualGt": 4.8,
        "sharePct": 12.9,
        "perCapitaTons": 14.4,
        "cumulSharePct": 24.6,
        "mainFuel": "Oil and Natural Gas (fracking boom)",
        "target": "50-52% reduction below 2005 levels by 2030; Net-zero by 2050 (Inflation Reduction Act)"
      },
      {
        "country": "India",
        "annualGt": 2.8,
        "sharePct": 7.6,
        "perCapitaTons": 2,
        "cumulSharePct": 3.4,
        "mainFuel": "Coal (70%+ of electricity)",
        "target": "50% non-fossil electricity capacity by 2030; Net-zero by 2070"
      },
      {
        "country": "European Union (EU-27)",
        "annualGt": 2.6,
        "sharePct": 7,
        "perCapitaTons": 5.8,
        "cumulSharePct": 17.1,
        "mainFuel": "Natural Gas, Oil, Renewables",
        "target": "55% reduction below 1990 levels by 2030 ('Fit for 55'); Net-zero by 2050"
      },
      {
        "country": "Russia",
        "annualGt": 1.8,
        "sharePct": 4.8,
        "perCapitaTons": 12.5,
        "cumulSharePct": 6.9,
        "mainFuel": "Natural Gas and Oil",
        "target": "Net-zero by 2060; heavy economic reliance on hydrocarbon exports"
      },
      {
        "country": "Japan",
        "annualGt": 1,
        "sharePct": 2.7,
        "perCapitaTons": 8.5,
        "cumulSharePct": 3.9,
        "mainFuel": "LNG, Coal, Oil (post-Fukushima nuclear restart)",
        "target": "46% reduction below 2013 levels by 2030; Net-zero by 2050"
      },
      {
        "country": "Pakistan",
        "annualGt": 0.23,
        "sharePct": 0.62,
        "perCapitaTons": 0.95,
        "cumulSharePct": 0.35,
        "mainFuel": "Natural Gas, Imported Coal, Hydro, Biomass",
        "target": "50% reduction in projected emissions by 2030 (15% unconditional, 35% subject to international finance); 60% renewable energy by 2030"
      }
    ],
    "sectors": [
      {
        "name": "Electricity & Heat Generation",
        "share": 34,
        "icon": "fa-bolt",
        "desc": "Coal, gas, and oil combustion for power grids and district heating"
      },
      {
        "name": "Industry & Manufacturing",
        "share": 24,
        "icon": "fa-industry",
        "desc": "Steel, cement, chemical processing, plastics, and industrial heating"
      },
      {
        "name": "Agriculture, Forestry & Land Use (AFOLU)",
        "share": 21,
        "icon": "fa-tree",
        "desc": "Deforestation, cattle enteric fermentation (methane), rice cultivation, synthetic fertilizers"
      },
      {
        "name": "Transport",
        "share": 15,
        "icon": "fa-car",
        "desc": "Road vehicles (cars/trucks 72%), aviation (12%), shipping (11%), and rail (3%)"
      },
      {
        "name": "Buildings & Infrastructure",
        "share": 6,
        "icon": "fa-building",
        "desc": "On-site fuel combustion for space heating, cooking, and hot water"
      }
    ],
    "ghgTable": [
      {
        "gas": "Carbon Dioxide (CO₂)",
        "formula": "CO₂",
        "gwp100": 1,
        "lifetime": "300 to 1,000+ years",
        "share": "76%",
        "mainSource": "Fossil fuel combustion, deforestation, cement production"
      },
      {
        "gas": "Methane (CH₄)",
        "formula": "CH₄",
        "gwp100": 28,
        "lifetime": "11.8 years",
        "share": "16%",
        "mainSource": "Livestock enteric fermentation, rice paddies, oil/gas fugitive leaks, landfills"
      },
      {
        "gas": "Nitrous Oxide (N₂O)",
        "formula": "N₂O",
        "gwp100": 273,
        "lifetime": "109 years",
        "share": "6%",
        "mainSource": "Agricultural synthetic fertilizers, animal manure, nitric acid manufacture"
      },
      {
        "gas": "Fluorinated Gases (HFCs, PFCs, SF₆)",
        "formula": "F-Gases",
        "gwp100": "1,000 to 24,000",
        "lifetime": "Up to 50,000 years (SF₆)",
        "share": "2%",
        "mainSource": "Refrigeration, air conditioning, electrical grid insulators (SF₆), semiconductor manufacturing"
      }
    ]
  },
  "renewables": {
    "globalElectricityMix": [
      {
        "source": "Coal",
        "share": 35.4,
        "clean": false,
        "color": "#334155"
      },
      {
        "source": "Natural Gas",
        "share": 22.5,
        "clean": false,
        "color": "#64748b"
      },
      {
        "source": "Hydroelectricity",
        "share": 14.3,
        "clean": true,
        "color": "#0284c7"
      },
      {
        "source": "Nuclear",
        "share": 9.1,
        "clean": true,
        "color": "#8b5cf6"
      },
      {
        "source": "Wind Power",
        "share": 7.8,
        "clean": true,
        "color": "#06b6d4"
      },
      {
        "source": "Solar PV",
        "share": 5.5,
        "clean": true,
        "color": "#f59e0b"
      },
      {
        "source": "Bioenergy & Geothermal",
        "share": 2.6,
        "clean": true,
        "color": "#10b981"
      },
      {
        "source": "Oil & Other Fossils",
        "share": 2.8,
        "clean": false,
        "color": "#94a3b8"
      }
    ],
    "lcoeDrop": [
      {
        "tech": "Solar Photovoltaic (Utility)",
        "cost2010": "$417 / MWh",
        "cost2024": "$49 / MWh",
        "dropPct": "-88%",
        "desc": "Greatest cost plunge in energy history due to silicon manufacturing scale"
      },
      {
        "tech": "Onshore Wind",
        "cost2010": "$102 / MWh",
        "cost2024": "$38 / MWh",
        "dropPct": "-63%",
        "desc": "Taller turbine towers, longer rotor blades, and higher capacity factors"
      },
      {
        "tech": "Offshore Wind",
        "cost2010": "$188 / MWh",
        "cost2024": "$74 / MWh",
        "dropPct": "-61%",
        "desc": "Massive 15MW+ marine turbines and specialized installation vessels"
      },
      {
        "tech": "Lithium-ion Battery Pack",
        "cost2010": "$1,200 / kWh",
        "cost2024": "$139 / kWh",
        "dropPct": "-88%",
        "desc": "Essential for grid storage and electric vehicle parity with internal combustion"
      }
    ],
    "pakistanEnergy": {
      "target": "60% clean energy by 2030 (ARE Policy 2019 + Hydropower additions)",
      "currentMix": "Hydropower (~28%), Nuclear (~12%), Wind (~4%), Solar (~2%), Thermal Gas/Coal/RFO (~54%)",
      "flagshipProjects": [
        "Quaid-e-Azam Solar Park (Bahawalpur, Punjab)",
        "Jhimpir Wind Corridor (Thatta, Sindh - over 1,300 MW installed)",
        "Diamer-Bhasha Dam (4,500 MW hydro under construction on Indus River)",
        "Mohmand Dam (800 MW multipurpose hydro on Swat River)",
        "Dasu Hydropower Project (4,320 MW on Indus River)"
      ]
    }
  },
  "cryosphere": {
    "arcticSeaIce": {
      "metric": "September Minimum Extent",
      "rate": "-12.6% per decade relative to 1979-2000 average",
      "currentExtent": "~4.3 million km² (down from ~7.5 million km² in 1980)",
      "albedoFeedback": "Ice-albedo feedback: reflective white ice (albedo ~0.85) melts into dark ocean water (albedo ~0.06), absorbing 90%+ of solar radiation and accelerating Arctic Amplification (warming 3-4x faster than global average)."
    },
    "iceSheets": {
      "greenland": {
        "lossRate": "~270 Billion Tons (Gt) of ice per year",
        "seaLevelContribution": "~0.75 mm / year",
        "potentialRise": "7.2 meters if entirely melted"
      },
      "antarctica": {
        "lossRate": "~150 Billion Tons (Gt) of ice per year",
        "seaLevelContribution": "~0.42 mm / year",
        "potentialRise": "58 meters if entirely melted",
        "criticalTippingPoint": "Thwaites Glacier ('Doomsday Glacier') in West Antarctica, holding enough ice to raise sea level by 65 cm alone and destabilize surrounding ice shelf."
      }
    },
    "thirdPole": {
      "glacierCountPakistan": "Over 7,253 glaciers (more glacial ice than any country outside polar regions)",
      "indusDependency": "75% to 85% of Upper Indus Basin flow is derived from snow and glacial melt",
      "glofThreat": "Over 3,044 glacial lakes formed in Gilgit-Baltistan and Khyber Pakhtunkhwa; 33 classified as high-risk Glacial Lake Outburst Flood (GLOF) flashpoints",
      "notableGlaciers": [
        {
          "name": "Siachen Glacier",
          "length": "76 km",
          "rank": "Second longest non-polar glacier in the world",
          "note": "Located in eastern Karakoram; strategic military flashpoint"
        },
        {
          "name": "Biafo Glacier",
          "length": "67 km",
          "rank": "Meets Hispar Glacier to form longest glacial highway outside polar zones (122 km)",
          "note": "Major tributary of Shigar River"
        },
        {
          "name": "Baltoro Glacier",
          "length": "63 km",
          "rank": "Home to K2, Broad Peak, and Gasherbrum massifs",
          "note": "Feeds Shigar and Indus rivers"
        },
        {
          "name": "Batura Glacier",
          "length": "57 km",
          "rank": "Goajal Valley, Hunza",
          "note": "Directly abuts Karakoram Highway (KKH)"
        },
        {
          "name": "Passu Glacier",
          "length": "16 km",
          "rank": "Hunza Valley",
          "note": "Rapidly retreating tongue near Passu Cones"
        }
      ],
      "karakoramAnomaly": "A scientific phenomenon where certain central Karakoram glaciers exhibited stable or slightly advancing mass balances during the early 2000s, unlike retreating Himalayan glaciers, caused by intensified winter precipitation from Western Disturbances. However, recent data confirms warming has now begun to outpace this anomaly."
    }
  },
  "seaLevel": {
    "gmslRiseTotal": "23.5 cm (9.25 inches) since 1880",
    "currentRiseRate": "3.7 mm/year (more than double the 1.4 mm/year rate during most of the 20th century)",
    "projectedRise2100": "0.4m to 1.0m (could exceed 2.0m under extreme ice sheet collapse scenarios)",
    "drivers": [
      {
        "name": "Thermal Expansion (Steric)",
        "pct": 40,
        "desc": "Water physically expands as ocean absorbs 90%+ of excess planetary heat"
      },
      {
        "name": "Mountain Glaciers Melt",
        "pct": 21,
        "desc": "Runoff from melting glaciers in Alaska, Andes, Alps, and High Mountain Asia"
      },
      {
        "name": "Greenland Ice Sheet Melt",
        "pct": 15,
        "desc": "Surface melting and iceberg calving into North Atlantic"
      },
      {
        "name": "Antarctic Ice Sheet Melt",
        "pct": 8,
        "desc": "Basal melting of floating ice shelves and rapid grounding line retreat"
      },
      {
        "name": "Land Water Storage Changes",
        "pct": 16,
        "desc": "Groundwater extraction pumped to surface vs dam reservoir retention"
      }
    ],
    "vulnerableLocations": [
      {
        "name": "Karachi & Indus Delta (Pakistan)",
        "populationAtRisk": "16+ Million in Karachi; millions in delta",
        "threat": "Sea water intrusion has inundated over 2 million acres of fertile agricultural land in Thatta, Sujawal, and Badin districts. Degradation of mangrove coastal shields, storm surge inundation, and saline poisoning of underground aquifers.",
        "elevation": "Much of DHA, Clifton, and port installations lie under 3m above sea level."
      },
      {
        "name": "Ganges-Brahmaputra Delta (Bangladesh)",
        "populationAtRisk": "30+ Million",
        "threat": "Low elevation (<5m above sea level); frequent cyclonic storm surges, soil salinization, and potential creation of 15+ million climate refugees by 2050.",
        "elevation": "Over 60% of Bangladesh is below 5m elevation."
      },
      {
        "name": "Indonesian Capital (Jakarta)",
        "populationAtRisk": "10 Million",
        "threat": "Fastest sinking megacity in the world (up to 10-20 cm/year due to excessive groundwater extraction combined with sea-level rise), forcing Indonesia to relocate its national capital to Nusantara in East Kalimantan.",
        "elevation": "40% of Jakarta is already below sea level."
      },
      {
        "name": "Nile Delta (Alexandria, Egypt)",
        "populationAtRisk": "6 Million in Alexandria; 40M in Nile Delta",
        "threat": "Denser than almost anywhere on Earth, the delta produces 60% of Egypt's food; sea-level rise threatens to drown agricultural lands and trigger Mediterranean food crises.",
        "elevation": "Significant portions less than 1m above sea level."
      },
      {
        "name": "Small Island Developing States (SIDS)",
        "populationAtRisk": "Maldives, Tuvalu, Kiribati, Marshall Islands",
        "threat": "Existential crisis of statehood: average elevation of Maldives is only 1.5m above sea level; facing total physical submergence and loss of sovereign maritime territory.",
        "elevation": "80% of Maldives land area is under 1 meter."
      }
    ]
  },
  "agreements": [
    {
      "year": 1988,
      "title": "Intergovernmental Panel on Climate Change (IPCC)",
      "venue": "Geneva, Switzerland",
      "body": "WMO + UNEP",
      "significance": "Established to provide policymakers with objective, science-based assessments of human-induced climate change. Awarded the 2007 Nobel Peace Prize. Has published six comprehensive Assessment Reports (AR1 to AR6)."
    },
    {
      "year": 1992,
      "title": "UNFCCC (Rio Earth Summit)",
      "venue": "Rio de Janeiro, Brazil",
      "body": "United Nations Framework Convention on Climate Change",
      "significance": "Foundational treaty ratified by 198 parties. Established principle of 'Common But Differentiated Responsibilities and Respective Capabilities' (CBDR-RC), dividing world into Annex I (developed) and Non-Annex I (developing) nations."
    },
    {
      "year": 1997,
      "title": "Kyoto Protocol (COP3)",
      "venue": "Kyoto, Japan",
      "body": "Legally Binding Protocol under UNFCCC",
      "significance": "First treaty with legally binding emission reduction targets for 37 industrialized countries (averaging 5% below 1990 levels between 2008-2012). Introduced Clean Development Mechanism (CDM) and carbon trading. Weakened by US non-ratification and exclusion of developing nations."
    },
    {
      "year": 2015,
      "title": "Paris Agreement (COP21)",
      "venue": "Paris, France",
      "body": "Universal Legally Binding Climate Treaty",
      "significance": "Landmark pact adopted by 196 parties. Central goal: Hold global temperature rise to 'well below 2.0°C' and pursue efforts to limit to '1.5°C'. Replaced top-down mandates with bottom-up 'Nationally Determined Contributions' (NDCs) updated every 5 years with a 5-year 'Global Stocktake'. Article 6 established carbon market mechanisms."
    },
    {
      "year": 2021,
      "title": "Glasgow Climate Pact (COP26)",
      "venue": "Glasgow, Scotland, UK",
      "body": "COP26 Decision",
      "significance": "First COP decision to explicitly mention fossil fuels: called for 'phase-down of unabated coal power' and 'phase-out of inefficient fossil fuel subsidies'. Launched Global Methane Pledge (cut methane by 30% by 2030) and finalized Paris Rulebook."
    },
    {
      "year": 2022,
      "title": "Sharm El-Sheikh Implementation Plan & Loss & Damage Fund (COP27)",
      "venue": "Sharm El-Sheikh, Egypt",
      "body": "Historic Climate Justice Breakthrough",
      "significance": "After decades of resistance by developed nations, the summit agreed to establish a dedicated 'Loss and Damage Fund' for vulnerable countries hit hard by climate disasters. Pakistan, leading the G77+China coalition following its devastating 2022 floods, played a pivotal leadership role in securing this historic treaty."
    },
    {
      "year": 2023,
      "title": "The UAE Consensus (COP28)",
      "venue": "Dubai, United Arab Emirates",
      "body": "Global Stocktake & Clean Energy Tripling",
      "significance": "Formally operationalized the Loss and Damage Fund with over $700 million in initial pledges. Historic inclusion of language calling on nations to 'transition away from fossil fuels in energy systems' in a just, orderly, and equitable manner. Agreed to triple global renewable energy capacity and double energy efficiency by 2030."
    },
    {
      "year": 2024,
      "title": "Baku Climate Finance Summit (COP29)",
      "venue": "Baku, Azerbaijan",
      "body": "New Collective Quantified Goal on Climate Finance (NCQG)",
      "significance": "Dubbed the 'Finance COP', focused on negotiating the New Collective Quantified Goal (NCQG) to replace the outdated $100 billion/year climate finance commitment with estimated trillions required by the developing world for mitigation, adaptation, and loss and damage."
    }
  ],
  "pakistanCrisis": {
    "germanwatchRank": "Consistently ranked among the top 10 most climate-vulnerable countries in the world on Germanwatch Global Climate Risk Index (CRI) over the past two decades.",
    "ghgParadox": "Emits less than 0.9% of global greenhouse gases, yet bears disproportionate brunt of extreme weather events, glacial lake outburst floods, deadly heatwaves, and catastrophic monsoon floods.",
    "flood2022Facts": [
      {
        "label": "Population Impacted",
        "val": "33+ Million people (approx. 1 in 7 Pakistanis)"
      },
      {
        "label": "Lives Lost",
        "val": "1,739+ fatalities (over 640 children)"
      },
      {
        "label": "Land Submerged",
        "val": "One-third (1/3) of Pakistan's entire landmass under water"
      },
      {
        "label": "Economic Damage & Losses",
        "val": "$30.1 Billion (Post-Disaster Needs Assessment - PDNA)"
      },
      {
        "label": "Houses Destroyed / Damaged",
        "val": "2.2 Million homes"
      },
      {
        "label": "Livestock Perished",
        "val": "1.2 Million farm animals"
      },
      {
        "label": "Crops Lost",
        "val": "4.4 Million acres of standing agricultural crops destroyed (cotton, rice, sugarcane)"
      }
    ],
    "policies": [
      {
        "name": "National Climate Change Policy (NCCP 2021 Updated)",
        "desc": "Comprehensive framework focusing on water resource management, climate-smart agriculture, forestry, disaster preparedness, and vulnerable infrastructure retrofitting."
      },
      {
        "name": "National Adaptation Plan (NAP 2023)",
        "desc": "Builds systemic climate resilience across 6 priority sectors: water resources, agriculture & food security, ecosystems & biodiversity, health, disaster risk management, and human settlements."
      },
      {
        "name": "Living Indus Initiative (UN Flagship)",
        "desc": "Designated as a UN World Restoration Flagship in 2024: 25 high-priority projects restoring ecological health, riparian zones, and flood-buffering capacity along the entire 3,180 km Indus River basin."
      },
      {
        "name": "Recharge Pakistan Program",
        "desc": "$77.8M integrated water and ecosystem management initiative supported by Green Climate Fund (GCF) and WWF to use nature-based flood detention basins along the Indus to replenish groundwater."
      },
      {
        "name": "Ten Billion Tree Tsunami Project (TBTTP)",
        "desc": "Massive afforestation and reforestation initiative across Pakistan to expand forest cover from 5% toward international average (25%), restore degraded lands, and conserve mangrove forests."
      }
    ],
    "essayPointers": [
      "Climate change has transformed from an environmental issue into an existential national security threat for Pakistan (water security, food security, energy security).",
      "The 'Loss and Damage' debate: Moral hazard vs. climate reparations. Developed nations historically emitted >70% of cumulative carbon; developing nations bear the brunt.",
      "The Karakoram water tower: Glacier retreat threatens to cause initial flooding for 2-3 decades, followed by acute, irreversible water shortages in the Indus River by late 21st century.",
      "Water storage crisis: Pakistan possesses only 30 days of water storage capacity (compared to 1,000 days in Egypt/Colorado and 220 days in India), creating severe vulnerability to hydrological volatility."
    ]
  },
  "mcqs": [
    {
      "id": 1,
      "q": "What is the primary target limit for global temperature rise set by the 2015 Paris Agreement above pre-industrial levels?",
      "opts": [
        "Well below 2.0°C, with efforts to limit to 1.5°C",
        "Strictly 1.0°C",
        "Between 2.5°C and 3.0°C",
        "No higher than 3.5°C"
      ],
      "ans": 0,
      "exp": "Article 2 of the Paris Agreement commits nations to holding the increase in global average temperature to 'well below 2°C above pre-industrial levels' and pursuing efforts to 'limit the temperature increase to 1.5°C'."
    },
    {
      "id": 2,
      "q": "Which greenhouse gas has the highest 100-year Global Warming Potential (GWP) among the following?",
      "opts": [
        "Carbon Dioxide (CO₂)",
        "Methane (CH₄)",
        "Nitrous Oxide (N₂O)",
        "Sulfur Hexafluoride (SF₆)"
      ],
      "ans": 3,
      "exp": "Sulfur Hexafluoride (SF₆), used as a dielectric insulator in high-voltage electrical equipment, has an extraordinary 100-year GWP of 23,500 times that of CO₂ and an atmospheric lifetime of 3,200 years."
    },
    {
      "id": 3,
      "q": "What is the pre-industrial baseline concentration of atmospheric Carbon Dioxide (CO₂) prior to the year 1750?",
      "opts": [
        "Approximately 280 ppm",
        "Approximately 350 ppm",
        "Approximately 420 ppm",
        "Approximately 150 ppm"
      ],
      "ans": 0,
      "exp": "Ice core records confirm atmospheric CO₂ remained remarkably stable around 280 ppm (parts per million) for the 10,000 years preceding the Industrial Revolution. By 2024, human activities elevated it to ~424.5 ppm (+51%)."
    },
    {
      "id": 4,
      "q": "Which COP summit achieved the historic breakthrough agreement to establish a dedicated 'Loss and Damage Fund' for vulnerable developing nations?",
      "opts": [
        "COP21 (Paris, 2015)",
        "COP26 (Glasgow, 2021)",
        "COP27 (Sharm El-Sheikh, 2022)",
        "COP28 (Dubai, 2023)"
      ],
      "ans": 2,
      "exp": "At COP27 in Sharm El-Sheikh (2022), developing nations led by Pakistan (chairing G77+China following its catastrophic floods) secured the landmark decision to establish a Loss and Damage Fund. It was formally operationalized at COP28 in Dubai (2023)."
    },
    {
      "id": 5,
      "q": "What physical process accounts for approximately 40% of observed global mean sea-level rise?",
      "opts": [
        "Submarine volcanic eruptions",
        "Thermal expansion of seawater (steric effect)",
        "Sinking of continental plates",
        "Groundwater depletion"
      ],
      "ans": 1,
      "exp": "Thermal expansion accounts for about 40% of sea-level rise. As ocean waters absorb over 90% of the excess heat trapped by greenhouse gases, the water physically expands in volume."
    },
    {
      "id": 6,
      "q": "Outside the Earth's polar regions, which country contains the highest number of glaciers in the world?",
      "opts": [
        "Switzerland",
        "Pakistan",
        "Canada",
        "Nepal"
      ],
      "ans": 1,
      "exp": "Pakistan contains over 7,253 glaciers across the Hindu Kush, Karakoram, and Himalayan ranges—more glacial ice than any country outside Antarctica and Greenland. This region is often termed the 'Third Pole'."
    },
    {
      "id": 7,
      "q": "What is the phenomenon where melting white Arctic sea ice reduces Earth's reflectivity, causing oceans to absorb more solar heat and accelerate warming?",
      "opts": [
        "Greenhouse trapping",
        "Ice-Albedo positive feedback loop",
        "Coriolis acceleration",
        "Thermohaline stagnation"
      ],
      "ans": 1,
      "exp": "The ice-albedo feedback occurs because bright sea ice reflects up to 85% of incoming solar radiation (high albedo), whereas dark open ocean reflects only 6% (absorbing 94%). Melting ice exposes dark water, driving rapid localized warming."
    },
    {
      "id": 8,
      "q": "What percentage of the annual water flow in Pakistan's Indus Basin system is derived from snow and glacial melt?",
      "opts": [
        "10% to 20%",
        "30% to 40%",
        "70% to 85%",
        "Over 95%"
      ],
      "ans": 2,
      "exp": "Between 70% and 85% of the Upper Indus Basin river flow is fed by seasonal snowpack and glacial meltwaters, making Pakistan's agriculture and hydropower uniquely vulnerable to cryosphere changes."
    },
    {
      "id": 9,
      "q": "What does the climate acronym 'NDC' stand for under the Paris Agreement framework?",
      "opts": [
        "National Disaster Committee",
        "Nationally Determined Contribution",
        "Non-Degradable Carbon",
        "Natural Decarbonization Coalition"
      ],
      "ans": 1,
      "exp": "NDCs (Nationally Determined Contributions) are non-binding national plans submitted every five years by each party to the Paris Agreement outlining their post-2020 greenhouse gas mitigation and adaptation commitments."
    },
    {
      "id": 10,
      "q": "Which Antarctic glacier is colloquially known as the 'Doomsday Glacier' due to its potential to destabilize the West Antarctic Ice Sheet and raise global sea levels by over 65 cm?",
      "opts": [
        "Lambert Glacier",
        "Thwaites Glacier",
        "Jakobshavn Glacier",
        "Beardmore Glacier"
      ],
      "ans": 1,
      "exp": "Thwaites Glacier in West Antarctica is termed the 'Doomsday Glacier'. It acts as a cork holding back the West Antarctic Ice Sheet; its collapse would raise global sea levels by 65 cm directly and trigger up to 3 meters of wider ice sheet loss."
    },
    {
      "id": 11,
      "q": "What was the estimated total economic damage and loss inflicted on Pakistan by the devastating 2022 monsoon mega-floods according to the Post-Disaster Needs Assessment (PDNA)?",
      "opts": [
        "$5.2 Billion",
        "$12.8 Billion",
        "$30.1 Billion",
        "$65.0 Billion"
      ],
      "ans": 2,
      "exp": "The official Post-Disaster Needs Assessment (PDNA) conducted by the Government of Pakistan with ADB, World Bank, UNDP, and the EU estimated total damages at $14.9 billion and economic losses at $15.2 billion, totaling over $30.1 billion."
    },
    {
      "id": 12,
      "q": "Which renewable energy technology experienced the most dramatic Levelized Cost of Energy (LCOE) decline between 2010 and 2024, plummeting by nearly 88%?",
      "opts": [
        "Nuclear energy",
        "Utility-scale Solar Photovoltaic (PV)",
        "Geothermal energy",
        "Biomass combustion"
      ],
      "ans": 1,
      "exp": "According to IRENA (International Renewable Energy Agency), the global weighted average levelized cost of utility-scale solar PV electricity plummeted by approximately 88% between 2010 and 2024, falling from over $417/MWh to under $50/MWh."
    }
  ]
};

// Safe browser and Node export
if (typeof window !== 'undefined') {
  window.CLIMATE_CHANGE_DATA = CLIMATE_CHANGE_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CLIMATE_CHANGE_DATA;
}
