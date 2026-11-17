/**
 * CSS PREP CENTRAL - GLOBAL MARITIME TRADE ROUTES & CHOKEPOINTS DATASET
 * Authoritative, High-Yield Geoeconomic Database for CSS, PMS, FPSC, UPSC & IR Aspirants.
 * Features: Strategic Chokepoints (13), Major Global Shipping Lanes (8), Megaports (12), Route Simulator.
 */

const TRADE_ROUTES_DATA = {
  "categories": [
    {
      "id": "all",
      "name": "All Trade Routes & Chokepoints",
      "icon": "fa-earth-americas",
      "color": "#0284c7"
    },
    {
      "id": "chokepoints",
      "name": "Strategic Maritime Chokepoints",
      "icon": "fa-anchor",
      "color": "#e11d48"
    },
    {
      "id": "shipping_lanes",
      "name": "Major Global Shipping Lanes",
      "icon": "fa-route",
      "color": "#2563eb"
    },
    {
      "id": "energy_corridors",
      "name": "Hydrocarbon & Tanker Corridors",
      "icon": "fa-oil-well",
      "color": "#d97706"
    },
    {
      "id": "megaports",
      "name": "Global Megaports & Hubs",
      "icon": "fa-ship",
      "color": "#059669"
    }
  ],
  "chokepoints": [
    {
      "id": "strait-of-hormuz",
      "name": "Strait of Hormuz",
      "category": "chokepoints",
      "type": "Strategic Strait",
      "status": "Extreme Geopolitical Vulnerability",
      "statusColor": "#dc2626",
      "icon": "fa-anchor",
      "color": "#e11d48",
      "lat": 26.56,
      "lng": 56.25,
      "waterwaysConnected": "Persian Gulf to Gulf of Oman & Arabian Sea (Indian Ocean)",
      "borderingStates": [
        "Oman (Musandam Peninsula)",
        "Iran",
        "United Arab Emirates"
      ],
      "transitVolume": "20.5 – 21.0 Million barrels/day (bpd) of petroleum liquids (~21% of global petroleum consumption; 20% of global LNG trade)",
      "annualVessels": "Approx. 33,000 ocean-going merchant vessels and tankers annually",
      "vesselLimits": "Capable of handling Ultra Large Crude Carriers (ULCCs) and Very Large Crude Carriers (VLCCs); navigation channel is 2 miles wide inbound and 2 miles outbound separated by a 2-mile buffer zone",
      "keyCommodities": [
        "Crude Oil (Saudi Arabia, Iraq, UAE, Kuwait, Iran)",
        "Liquefied Natural Gas / LNG (Qatar, UAE)",
        "Petrochemicals",
        "Refined Petroleum Products"
      ],
      "strategicSignificance": "The world's most critical petroleum transit chokepoint. There are virtually no viable overland pipeline alternatives to bypass it except the Abu Dhabi Crude Oil Pipeline (ADCOP) to Fujairah and the Saudi East-West Petroline to Yanbu, which together can only redirect around 6.5M bpd.",
      "vulnerabilitiesAndThreats": [
        "Iranian naval interdiction, sea mine warfare, and drone/anti-ship missile strikes from coastal battery sites.",
        "Asymmetric naval swarm tactics by Iran's Islamic Revolutionary Guard Corps Navy (IRGCN).",
        "Absence of bilateral maritime navigation treaties between Iran and GCC states.",
        "Geopolitical escalation risks linked to US-Iran tensions and the Israeli-Iranian confrontation."
      ],
      "internationalLaw": "Governed by UNCLOS Part III (Transit Passage regime through straits used for international navigation). Oman ratified UNCLOS with declarations; Iran signed but did not ratify, asserting that only customary innocent passage applies.",
      "cssExamAnalysis": "Core case study for Nicholas Spykman's Rimland Theory, energy security, and deterrence dynamics. Highlights Pakistan's Gwadar Port strategic utility as an Arabian Sea bypass hub outside the Hormuz maritime trap, reducing Chinese and Central Asian exposure to Hormuz closure.",
      "relatedEssayLink": "geoeconomics-finance-essays.html#topic-12"
    },
    {
      "id": "suez-canal",
      "name": "Suez Canal",
      "category": "chokepoints",
      "type": "Artificial Sea-Level Maritime Canal",
      "status": "High Commercial Risk / Rerouting Pressure",
      "statusColor": "#d97706",
      "icon": "fa-water",
      "color": "#e11d48",
      "lat": 30.7,
      "lng": 32.34,
      "waterwaysConnected": "Mediterranean Sea to Red Sea (via Gulf of Suez)",
      "borderingStates": [
        "Egypt (Sinai Peninsula / Suez Governorate)"
      ],
      "transitVolume": "12% – 15% of total global trade volume; 30% of global container traffic; ~1.5 billion metric tons of cargo annually",
      "annualVessels": "Historically 22,000+ vessels annually (~50-65 ships daily; reduced by 50-60% during Red Sea security crises)",
      "vesselLimits": "Suezmax standard: maximum beam 77.5m, maximum draft 20.1m; no locks required as it is a sea-level canal; length is 193.3 km (120 miles)",
      "keyCommodities": [
        "Containerized Consumer Goods (East Asia to Europe)",
        "Manufactured Electronics & Machinery",
        "Crude Oil & Refined Products",
        "Grain & Agricultural Commodities"
      ],
      "strategicSignificance": "Shortens the maritime route between maritime Asia and Northern Europe by 7,000 to 9,000 km (~10 to 14 sailing days) compared to sailing around the African continent via the Cape of Good Hope, saving billions in maritime fuel and operating costs.",
      "vulnerabilitiesAndThreats": [
        "Vulnerability to narrow channel blockages (demonstrated by the 6-day grounding of the container ship 'Ever Given' in March 2021).",
        "Severe dependency on upstream security in the Southern Red Sea / Bab-el-Mandeb Strait.",
        "Critical source of sovereign foreign exchange for the Egyptian state economy ($9.4B in FY2022-23; slashed by half following Houthi shipping interdictions)."
      ],
      "internationalLaw": "Governed by the 1888 Convention of Constantinople, guaranteeing free navigation to merchant and war vessels of all flags in peace and war, operated and managed by the Suez Canal Authority (SCA).",
      "cssExamAnalysis": "Demonstrates 'Geoeconomic Chokepoint Cascades'—where disruption at one point (Bab-el-Mandeb) paralyzes commerce across another (Suez). Central to discussions on supply chain fragility, inflation surges in Europe, and container freight index volatility (Shanghai Containerized Freight Index).",
      "relatedEssayLink": "geoeconomics-finance-essays.html#topic-12"
    },
    {
      "id": "panama-canal",
      "name": "Panama Canal",
      "category": "chokepoints",
      "type": "Freshwater Lock-Based Maritime Canal",
      "status": "Climate & Drought Vulnerability",
      "statusColor": "#f59e0b",
      "icon": "fa-bars-staggered",
      "color": "#e11d48",
      "lat": 9.08,
      "lng": -79.68,
      "waterwaysConnected": "Atlantic Ocean (Caribbean Sea) to Pacific Ocean (Gulf of Panama)",
      "borderingStates": [
        "Panama"
      ],
      "transitVolume": "Approx. 5% of global maritime trade; 40% of US container traffic; ~500 million Panama Canal tons of cargo annually",
      "annualVessels": "Normal capacity 13,000 – 14,000 transits annually (36–38 per day; dropped to 18–24 transits during the severe 2023–24 El Niño drought)",
      "vesselLimits": "Panamax (Original locks: 294m length, 32.3m beam, 12m draft); Neopanamax (Expanded locks opened 2016: 366m length, 49m beam, 15.2m draft). Uses freshwater gravity lock chambers fed by Lake Gatun.",
      "keyCommodities": [
        "US Grain Exports (Gulf Coast to East Asia)",
        "US Liquefied Petroleum Gas (LPG) & LNG to Asia",
        "Manufactured Goods (Asia to US East Coast)",
        "Automobiles & Containerized Retail"
      ],
      "strategicSignificance": "Eliminates the perilous 8,000-nautical-mile voyage around Cape Horn at South America's southern tip. Vital lifeline for East Coast US consumer markets sourcing manufactured goods from East Asia, and US agricultural exporters shipping soybeans and grain to China.",
      "vulnerabilitiesAndThreats": [
        "Ecological and climate vulnerability: Relies entirely on freshwater from artificial Lake Gatun (each ship transit flushes ~50 million gallons of freshwater into the ocean).",
        "Severe El Niño drought events force the Panama Canal Authority (ACP) to slash daily booking slots and enforce strict draft restrictions.",
        "Geopolitical competition over port concession operations at both entrances (Balboa and Cristobal) between Western and Chinese logistics conglomerates."
      ],
      "internationalLaw": "1977 Torrijos-Carter Treaties transferred sovereignty and control to Panama on December 31, 1999; Treaty Concerning the Permanent Neutrality and Operation of the Panama Canal guarantees permanent international neutrality.",
      "cssExamAnalysis": "Exam exemplar for the intersection of Climate Change and Geoeconomics. Illustrates how non-military climatic shocks alter global maritime trade architecture, forcing shipping alliances to reroute cargo through US West Coast rail intermodal corridors or the Suez Canal.",
      "relatedEssayLink": "geoeconomics-finance-essays.html#topic-8"
    },
    {
      "id": "strait-of-malacca",
      "name": "Strait of Malacca",
      "category": "chokepoints",
      "type": "Strategic Maritime Strait",
      "status": "High Congestion / Strategic Dilemma",
      "statusColor": "#2563eb",
      "icon": "fa-compass",
      "color": "#e11d48",
      "lat": 2.5,
      "lng": 101.5,
      "waterwaysConnected": "Indian Ocean (Andaman Sea) to Pacific Ocean (South China Sea)",
      "borderingStates": [
        "Indonesia (Sumatra)",
        "Malaysia",
        "Singapore",
        "Thailand"
      ],
      "transitVolume": "25% – 30% of all global maritime trade; ~16.0 – 17.0 Million bpd of petroleum (~80% of China's crude oil imports; 85% of Japan and South Korea's energy imports)",
      "annualVessels": "85,000 – 95,000 commercial vessels annually, making it the busiest maritime strait in the world",
      "vesselLimits": "Malaccamax standard: maximum draft of 20.5 meters (67.2 ft); the Phillips Channel south of Singapore narrows to just 1.5 nautical miles wide, creating a critical natural bottleneck",
      "keyCommodities": [
        "Middle Eastern and African Crude Oil to East Asia",
        "Iron Ore and Coal from Australia/India to China",
        "Containerized Consumer Finished Goods from China/Japan/Korea to Global Markets",
        "Automotive & Microchips"
      ],
      "strategicSignificance": "The central economic artery of the Indo-Pacific. It is the shortest sea route connecting Persian Gulf energy suppliers and European consumer markets to the economic powerhouse engines of East Asia (China, Japan, South Korea, Taiwan).",
      "vulnerabilitiesAndThreats": [
        "The 'Malacca Dilemma' formulated by former Chinese President Hu Jintao: China's vulnerability to a naval blockade by the US Navy or Quad allies in the event of a Taiwan crisis.",
        "Extreme vessel congestion, high collision risk, shallow shoals, and maritime piracy in the Riau archipelago.",
        "Strategic alternatives: Kra Isthmus Canal (Thailand), Sunda Strait, Lombok-Makassar Strait (deeper but adds 1,000+ nautical miles), and overland CPEC/CMEC pipelines."
      ],
      "internationalLaw": "UNCLOS Part III Transit Passage regime. Malaysia and Indonesia have historically asserted stewardship prerogatives, while user states (US, Japan, Singapore) defend unrestricted transit passage rights.",
      "cssExamAnalysis": "Vital for CSS International Relations and Current Affairs. Fundamental to the geopolitical rationale behind China's Belt and Road Initiative (BRI), the China-Pakistan Economic Corridor (CPEC) to Gwadar, and the US Indo-Pacific maritime security framework.",
      "relatedEssayLink": "international-relations-essays.html#topic-9"
    },
    {
      "id": "bab-el-mandeb",
      "name": "Bab-el-Mandeb Strait",
      "category": "chokepoints",
      "type": "Strategic Maritime Strait",
      "status": "Active Kinetic Conflict / Warfare Interdiction",
      "statusColor": "#dc2626",
      "icon": "fa-shield-halved",
      "color": "#e11d48",
      "lat": 12.58,
      "lng": 43.33,
      "waterwaysConnected": "Red Sea to Gulf of Aden & Arabian Sea (Indian Ocean)",
      "borderingStates": [
        "Yemen (Arabian Peninsula)",
        "Djibouti (Horn of Africa)",
        "Eritrea"
      ],
      "transitVolume": "Historically 7.0 – 8.8 Million bpd of crude and petroleum products; ~25,000 ships/year (~10% of seaborne oil; 15% of global maritime commerce)",
      "annualVessels": "Historically 22,000–25,000 ships/year; disrupted down by 65–70% following Houthi drone/anti-ship missile interdictions since late 2023",
      "vesselLimits": "Width is 18 miles (29 km) at its narrowest point between Ras Menheli (Yemen) and Ras Siyyan (Djibouti). Perim Island divides the strait into two channels; navigable shipping channel is just 2 miles wide.",
      "keyCommodities": [
        "Middle Eastern Crude & Fuel Oil to Europe",
        "European Refined Products to Asia",
        "Global Container Shipping (Asia to Europe)",
        "Ukrainian and Russian Wheat/Fertilizer"
      ],
      "strategicSignificance": "The southern sentinel gate to the Suez Canal. Any blockage or military interdiction at Bab-el-Mandeb instantaneously neutralizes the commercial utility of the Suez Canal, forcing all transcontinental maritime traffic around Africa.",
      "vulnerabilitiesAndThreats": [
        "Kinetic missile, drone, and explosive unmanned surface vessel (USV) attacks by Yemen's Ansar Allah (Houthi) movement following the Gaza conflict.",
        "Surge in marine war-risk insurance premiums (often exceeding 0.7% to 1.0% of vessel insured value, making passage uneconomic).",
        "Geopolitical militarization: Djibouti hosts naval bases from the US (Camp Lemonnier), China, France, Japan, Italy, and Saudi Arabia in close proximity."
      ],
      "internationalLaw": "UNCLOS Part III Transit Passage. Armed attacks on innocent merchant shipping violate UN Security Council Resolution 2722 (2024), which affirmed the right of member states to defend commercial navigation.",
      "cssExamAnalysis": "A primary CSS Current Affairs and Geoeconomics topic. Exemplifies asymmetric naval warfare using low-cost anti-ship ballistic missiles ($20,000 drones against $2M naval interceptors like SM-2/SM-6) to disrupt global supply chains and accelerate Western reshoring.",
      "relatedEssayLink": "geoeconomics-finance-essays.html#topic-12"
    },
    {
      "id": "turkish-straits",
      "name": "Turkish Straits (Bosphorus & Dardanelles)",
      "category": "chokepoints",
      "type": "Navigable Continental Maritime Strait",
      "status": "Regulated Sovereignty / War Regime",
      "statusColor": "#2563eb",
      "icon": "fa-landmark-flag",
      "color": "#e11d48",
      "lat": 41.12,
      "lng": 29.07,
      "waterwaysConnected": "Black Sea to Sea of Marmara (Bosphorus) and Sea of Marmara to Aegean/Mediterranean Sea (Dardanelles)",
      "borderingStates": [
        "Republic of Türkiye"
      ],
      "transitVolume": "Approx. 3.0 Million bpd of petroleum (primarily Russian, Kazakh, and Azerbaijani crude) and over 48,000 vessels annually",
      "annualVessels": "40,000 – 48,000 vessels annually (nearly 3 times denser than the Panama Canal traffic)",
      "vesselLimits": "Bosphorus is only 700 meters wide at its narrowest point with 12 sharp navigational course alterations and fierce counter-currents; maximum ship length restricted to 300m for safety",
      "keyCommodities": [
        "Russian Urals & Kazakh CPC Crude Oil",
        "Black Sea Agricultural Wheat, Corn & Sunflower Oil",
        "Russian & Ukrainian Steel, Iron, and Fertilizers"
      ],
      "strategicSignificance": "The sole maritime exit for all littoral Black Sea states (Russia, Ukraine, Georgia, Romania, Bulgaria). Critical to Russian naval power projection from the Sevastopol/Novorossiysk Black Sea fleet into the Mediterranean.",
      "vulnerabilitiesAndThreats": [
        "Closure to naval warships under Article 19 of the Montreux Convention during the Russia-Ukraine War.",
        "Extreme environmental hazard: The Bosphorus bisects Istanbul, a metropolis of 16 million residents; tanker collisions risk catastrophic urban explosion or oil spills.",
        "Proposed 'Kanal Istanbul' project designed to bypass the Montreux Convention restrictions."
      ],
      "internationalLaw": "Governed exclusively by the 1936 Montreux Convention Regarding the Regime of the Straits. Grants Türkiye absolute sovereign authority to regulate naval warships during wartime and inspect commercial vessels.",
      "cssExamAnalysis": "Classic case study of international legal regimes governing maritime chokepoints. Shows how Türkiye leverages geostrategic geography to exercise strategic autonomy between NATO and Russia.",
      "relatedEssayLink": "global-security-conflict-essays.html#topic-1"
    },
    {
      "id": "cape-of-good-hope",
      "name": "Cape of Good Hope Route",
      "category": "chokepoints",
      "type": "Circum-Continental Oceanic Route",
      "status": "Primary Alternative Traffic Surge",
      "statusColor": "#059669",
      "icon": "fa-water",
      "color": "#e11d48",
      "lat": -34.35,
      "lng": 18.47,
      "waterwaysConnected": "South Atlantic Ocean to Southwestern Indian Ocean",
      "borderingStates": [
        "South Africa"
      ],
      "transitVolume": "Over 85% of redirected Asia-Europe container ships redirected here during Red Sea crises; handles 10% of global seaborne crude trade",
      "annualVessels": "Historical baseline 20,000 ships/year; surged by 75–85% during 2024 Red Sea maritime reroutings",
      "vesselLimits": "No dimensional or draft constraints; can accommodate Capesize bulk carriers and Ultra Large Crude Carriers (ULCCs > 400,000 DWT) that cannot transit Suez or Panama",
      "keyCommodities": [
        "Diverted Asia-Europe Containerized Freight",
        "West African Crude Oil to Asia",
        "Bulk Minerals (Bauxite, Iron Ore, Coal)"
      ],
      "strategicSignificance": "The ultimate global maritime fallback corridor. When Suez, Panama, or Malacca fail, the Cape of Good Hope absorbs global shipping at the cost of 10 to 14 extra sailing days, +3,500 nautical miles, and ~1.5 million metric tons of extra bunker fuel consumption monthly.",
      "vulnerabilitiesAndThreats": [
        "Severe oceanic storms, giant rogue waves, and unpredictable squalls ('Cape of Storms').",
        "Severe port congestion, bunkering fuel shortages, and crane maintenance bottlenecks at South African ports (Durban, Cape Town, Port Elizabeth).",
        "Adds 1,000+ tons of CO2 emissions per ship voyage, complicating international decarbonization targets (IMO Net-Zero 2050)."
      ],
      "internationalLaw": "High seas freedom of navigation under UNCLOS Part VII beyond South Africa's 12-nautical-mile territorial sea and 200-nm Exclusive Economic Zone (EEZ).",
      "cssExamAnalysis": "Core concept in 'Supply Chain Elasticity' and inflation transmission. Demonstrates how oceanic geography sets an unbreakable floor on logistics costs when geopolitical chokepoints are contested.",
      "relatedEssayLink": "geoeconomics-finance-essays.html#topic-8"
    },
    {
      "id": "strait-of-gibraltar",
      "name": "Strait of Gibraltar",
      "category": "chokepoints",
      "type": "Strategic Maritime Strait",
      "status": "High Traffic Strategic Gateway",
      "statusColor": "#2563eb",
      "icon": "fa-gem",
      "color": "#e11d48",
      "lat": 35.96,
      "lng": -5.6,
      "waterwaysConnected": "Atlantic Ocean to Mediterranean Sea",
      "borderingStates": [
        "Spain",
        "United Kingdom (Gibraltar)",
        "Morocco"
      ],
      "transitVolume": "Approx. 100,000+ vessels annually (one ship passing every 5 minutes); ~20% of world seaborne trade",
      "annualVessels": "Over 100,000 commercial and passenger vessels each year",
      "vesselLimits": "Width is 7.7 nautical miles (14.3 km) at its narrowest point between Point Marroquí (Spain) and Point Cires (Morocco). Deep water channel allows transit of fully laden supertankers and nuclear submarines.",
      "keyCommodities": [
        "Manufactured Goods between Europe, Americas, and Asia",
        "North African Natural Gas & Oil",
        "Chemical Products and Vehicle Shipments"
      ],
      "strategicSignificance": "The western gateway to the Mediterranean basin. Controls access between the Atlantic Ocean and southern Europe, North Africa, and the Middle East.",
      "vulnerabilitiesAndThreats": [
        "Heavy convergence of transatlantic shipping with north-south ferry traffic between Spain and Morocco.",
        "Sovereignty dispute between Spain and the UK over Gibraltar.",
        "Environmental risk to the ecologically sensitive Mediterranean marine ecosystem."
      ],
      "internationalLaw": "UNCLOS Part III Transit Passage regime guarantees unimpeded navigation for international commercial vessels and overflight rights for aircraft.",
      "cssExamAnalysis": "Exemplifies British classic maritime strategy and naval hegemony (the 'Pillars of Hercules') that historically anchored control over the imperial sea lines of communication (SLOCs) to India.",
      "relatedEssayLink": "international-relations-essays.html#topic-5"
    },
    {
      "id": "sunda-strait",
      "name": "Sunda Strait",
      "category": "chokepoints",
      "type": "Deepwater Island Strait",
      "status": "Strategic Alternative to Malacca",
      "statusColor": "#2563eb",
      "icon": "fa-compass",
      "color": "#e11d48",
      "lat": -5.92,
      "lng": 105.75,
      "waterwaysConnected": "Java Sea to Indian Ocean (between Java and Sumatra)",
      "borderingStates": [
        "Republic of Indonesia"
      ],
      "transitVolume": "Approx. 2,000 – 3,500 ocean-going vessels annually; secondary bypass route",
      "annualVessels": "Approx. 3,500 commercial vessels annually",
      "vesselLimits": "Minimum depth 20 meters, but northern approach is shallow with hazardous strong tidal currents and shifting sandbanks; adjacent to the active volcanic island Anak Krakatau",
      "keyCommodities": [
        "Bulk Minerals",
        "Regional Petroleum",
        "Inter-island Indonesian cargo"
      ],
      "strategicSignificance": "Serves as an essential alternative bypass should the congested Strait of Malacca become blockaded or impassable during an Indo-Pacific military conflict.",
      "vulnerabilitiesAndThreats": [
        "Extreme volcanic and tsunami hazards from Anak Krakatau.",
        "Narrow channels and complex localized tidal flows.",
        "Shallow northern depths restricting fully laden Ultra Large Crude Carriers (ULCCs)."
      ],
      "internationalLaw": "Governed by the Archipelagic Sea Lanes (ASL) passage regime under UNCLOS Part IV.",
      "cssExamAnalysis": "Illustrates Indonesia's archipelagic baseline jurisdiction and sovereign control over Indo-Pacific alternate sea lanes of communication (SLOCs).",
      "relatedEssayLink": "international-relations-essays.html#topic-9"
    },
    {
      "id": "lombok-strait",
      "name": "Lombok Strait",
      "category": "chokepoints",
      "type": "Deep Oceanic Trench Strait",
      "status": "Capesize & Submarine Deep-Draft Corridor",
      "statusColor": "#059669",
      "icon": "fa-compass",
      "color": "#e11d48",
      "lat": -8.45,
      "lng": 115.72,
      "waterwaysConnected": "Indian Ocean to Bali Sea / Makassar Strait (Pacific Ocean)",
      "borderingStates": [
        "Republic of Indonesia (between Bali and Lombok)"
      ],
      "transitVolume": "Approx. 5,000+ deep-draft bulk carriers and supertankers annually",
      "annualVessels": "Approx. 5,000 ocean-going vessels annually",
      "vesselLimits": "Minimum depth exceeds 250 meters (820 ft); width is 11.5 nautical miles; no draft or beam limitations whatsoever; handles giant Capesize vessels and nuclear submarines running submerged",
      "keyCommodities": [
        "Australian Iron Ore and Coal to China/Japan",
        "Fully Laden VLCC/ULCC Crude Oil from Middle East to East Asia",
        "Bulk Grain"
      ],
      "strategicSignificance": "The deepest and safest maritime corridor through the Indonesian archipelago. Essential for massive Capesize dry bulk carriers exceeding 20.5m draft that are physically barred by shallow shoals in the Malacca Strait.",
      "vulnerabilitiesAndThreats": [
        "Adds 1,000 nautical miles (~3.5 sailing days) and substantial operating costs compared to the direct Malacca route.",
        "Severe internal oceanic solitary waves and tidal turbulence.",
        "Heavy reliance on Makassar Strait northern passage."
      ],
      "internationalLaw": "Designated as part of Archipelagic Sea Lane I (ASL I) under UNCLOS Part IV.",
      "cssExamAnalysis": "Core geostrategic asset in maritime geography: exemplifies the physics of naval transport (draft limits dictating strategic routing choices for global bulk logistics).",
      "relatedEssayLink": "international-relations-essays.html#topic-9"
    },
    {
      "id": "danish-straits",
      "name": "Danish Straits (Great Belt, Little Belt & Øresund)",
      "category": "chokepoints",
      "type": "Navigable Baltic Maritime Straits",
      "status": "Geopolitical Energy Surveillance Corridor",
      "statusColor": "#d97706",
      "icon": "fa-anchor",
      "color": "#e11d48",
      "lat": 55.33,
      "lng": 11,
      "waterwaysConnected": "Baltic Sea to Kattegat, Skagerrak & North Sea (Atlantic Ocean)",
      "borderingStates": [
        "Denmark",
        "Sweden"
      ],
      "transitVolume": "Approx. 3.2 Million bpd of petroleum (primarily Russian Baltic exports from Primorsk & Ust-Luga) and 60,000+ vessels annually",
      "annualVessels": "Over 60,000 vessels annually",
      "vesselLimits": "Great Belt (Storebælt) depth limit is 15 meters; bridges limit air draft (height) to 65 meters; ships exceeding 15m draft must lighter cargo",
      "keyCommodities": [
        "Russian Seaborne Crude Oil & Diesel (Shadow Tanker Fleet)",
        "Nordic Timber & Paper Products",
        "Baltic Manufactured Freight & Grain"
      ],
      "strategicSignificance": "The sole natural maritime gateway connecting all Baltic Sea nations (Sweden, Finland, Estonia, Latvia, Lithuania, Poland, Germany, and Russia) to the world ocean.",
      "vulnerabilitiesAndThreats": [
        "High concentration of aging, uninsured 'shadow fleet' oil tankers carrying Russian crude under sanctions evasion schemes.",
        "Heightened NATO surveillance and potential boarding inspections following European sanctions enforcement.",
        "Environmental nightmare scenario of a major oil spill in the fragile, semi-enclosed Baltic ecosystem."
      ],
      "internationalLaw": "Governed by the 1857 Treaty of Copenhagen (abolishing the historic Sound Dues) and UNCLOS transit passage customary law.",
      "cssExamAnalysis": "Case study for Western maritime sanctions enforcement, shadow tanker regulation, and NATO's transformed 'Baltic Lake' geopolitics following Sweden and Finland's accession.",
      "relatedEssayLink": "global-security-conflict-essays.html#topic-1"
    },
    {
      "id": "taiwan-strait",
      "name": "Taiwan Strait",
      "category": "chokepoints",
      "type": "Geopolitical Maritime Corridor",
      "status": "Highest Geopolitical Flashpoint Threat",
      "statusColor": "#dc2626",
      "icon": "fa-triangle-exclamation",
      "color": "#e11d48",
      "lat": 24,
      "lng": 119.5,
      "waterwaysConnected": "East China Sea to South China Sea",
      "borderingStates": [
        "People's Republic of China (Fujian)",
        "Taiwan (ROC)"
      ],
      "transitVolume": "Nearly 50% of the world's global container fleet and 88% of the world's largest container ships transit this strait annually",
      "annualVessels": "Over 65,000 commercial ship transits per year",
      "vesselLimits": "Width ranges from 70 to 110 nautical miles; depth is relatively shallow (average 60 meters), allowing all commercial merchant vessel classes",
      "keyCommodities": [
        "Advanced Semiconductor Microchips (TSMC)",
        "East Asian Finished Manufactured Goods",
        "Crude Oil & LNG to Japan, South Korea, and Taiwan"
      ],
      "strategicSignificance": "The economic lifeline of Northeast Asia. An armed conflict or naval blockade of the Taiwan Strait is projected by Bloomberg Economics to eradicate $10 Trillion from global GDP (~10% of world economic output), dwarfing the 2008 financial crisis.",
      "vulnerabilitiesAndThreats": [
        "PLA Navy blockade drills, maritime quarantine exercises, and anti-access/area-denial (A2/AD) maneuvers.",
        "US Navy and allied Freedom of Navigation Operations (FONOPs) asserting high seas transit rights.",
        "Concentration of 90% of global cutting-edge sub-7nm microchip fabrication in Taiwan."
      ],
      "internationalLaw": "China asserts sovereignty and jurisdiction over the strait under the One-China principle; the US, EU, and Taiwan maintain that it constitutes international waters subject to high seas freedoms of navigation.",
      "cssExamAnalysis": "Primary flashpoint in CSS International Relations and US-China Great Power Competition. Essential for understanding Graham Allison's 'Thucydides Trap' and the First Island Chain defense posture.",
      "relatedEssayLink": "international-relations-essays.html#topic-3"
    },
    {
      "id": "cape-horn-magellan",
      "name": "Cape Horn & Strait of Magellan",
      "category": "chokepoints",
      "type": "Sub-Antarctic Inter-Oceanic Passage",
      "status": "Deep-Draft Alternative to Panama Canal",
      "statusColor": "#059669",
      "icon": "fa-water",
      "color": "#e11d48",
      "lat": -55.98,
      "lng": -67.27,
      "waterwaysConnected": "South Atlantic Ocean to South Pacific Ocean (Drake Passage / Tierra del Fuego)",
      "borderingStates": [
        "Chile",
        "Argentina"
      ],
      "transitVolume": "Approx. 3,000 vessels annually; handles giant bulk ore carriers and transoceanic container reroutings",
      "annualVessels": "Approx. 3,000 ships/year",
      "vesselLimits": "Drake Passage has no depth or width constraints; Strait of Magellan provides a sheltered but treacherous 350-mile inland passage (minimum depth 28m)",
      "keyCommodities": [
        "Brazilian Iron Ore to Asia",
        "Chilean Copper",
        "Argentine Soybeans & Grain",
        "Capesize Rerouted Freight"
      ],
      "strategicSignificance": "The southern hemispheric gateway connecting the Atlantic and Pacific oceans. Serves as the ultimate natural bypass when the Panama Canal suffers extreme drought or closure.",
      "vulnerabilitiesAndThreats": [
        "Notorious for the most violent sea conditions on Earth: 40-foot swell waves, fierce sub-polar westerly gales ('Furious Fifties'), and iceberg hazards in the Drake Passage.",
        "Extreme isolation and virtually nonexistent salvage/repair port infrastructure along Patagonia."
      ],
      "internationalLaw": "1881 Boundary Treaty between Chile and Argentina neutralizes the Strait of Magellan and guarantees perpetual free navigation for ships of all nations.",
      "cssExamAnalysis": "Demonstrates the physical extremes of global trade logistics and South American maritime sovereignty.",
      "relatedEssayLink": "geoeconomics-finance-essays.html#topic-8"
    }
  ],
  "shippingLanes": [
    {
      "id": "asia-europe-suez-lane",
      "name": "Asia–Europe Shipping Highway (Via Suez)",
      "category": "shipping_lanes",
      "code": "AE-SUEZ",
      "color": "#2563eb",
      "distanceNm": "Approx. 10,500 nautical miles (Shanghai to Rotterdam)",
      "transitTimeDays": "26 – 30 days at cruising speed (18–20 knots)",
      "volumeShare": "Largest container trade artery on Earth (~24% of all global TEU volume; over $1 trillion in annual trade value)",
      "routePath": [
        [
          31.23,
          121.47
        ],
        [
          22.31,
          114.16
        ],
        [
          1.35,
          103.82
        ],
        [
          5.95,
          80.5
        ],
        [
          12.58,
          43.33
        ],
        [
          22.5,
          38
        ],
        [
          30.7,
          32.34
        ],
        [
          35.96,
          -5.6
        ],
        [
          48.5,
          -5
        ],
        [
          51.92,
          4.47
        ]
      ],
      "description": "The economic backbone of the globalized manufacturing economy. Connects the industrial manufacturing powerhouses of East Asia (China, Japan, South Korea, Taiwan, Vietnam) with the high-consumption consumer markets of Western and Central Europe.",
      "cssRelevance": "Illustrates trade interdependence between the EU and China. Vital for analyzing European strategic autonomy and vulnerability to Red Sea chokepoint interdictions."
    },
    {
      "id": "asia-europe-cape-lane",
      "name": "Asia–Europe Circum-Africa Route (Via Cape of Good Hope)",
      "category": "shipping_lanes",
      "code": "AE-CAPE",
      "color": "#e11d48",
      "distanceNm": "Approx. 14,000 nautical miles (Shanghai to Rotterdam)",
      "transitTimeDays": "38 – 42 days (Adds 10–14 days vs. Suez)",
      "volumeShare": "Absorbed over 85% of regular Asia-Europe container liner traffic during the 2023–2025 Red Sea crisis",
      "routePath": [
        [
          31.23,
          121.47
        ],
        [
          1.35,
          103.82
        ],
        [
          -5.95,
          80.5
        ],
        [
          -15,
          55
        ],
        [
          -34.35,
          18.47
        ],
        [
          -15,
          5
        ],
        [
          15,
          -20
        ],
        [
          36,
          -12
        ],
        [
          48.5,
          -5
        ],
        [
          51.92,
          4.47
        ]
      ],
      "description": "The historical sea route pioneered by Vasco da Gama in 1497, revitalized in the 21st century as the ultimate fallback when geopolitical instability paralyzes the Red Sea. Adds substantial bunker fuel expenses ($1M+ per round trip) and requires 2 extra container vessels per liner service loop to maintain weekly schedule reliability.",
      "cssRelevance": "Case study for container shipping economics, inflationary spikes in freight rates, and international maritime logistics resilience."
    },
    {
      "id": "transpacific-lane",
      "name": "Trans-Pacific Trade Artery (East Asia to US West Coast)",
      "category": "shipping_lanes",
      "code": "TP-WEST",
      "color": "#059669",
      "distanceNm": "Approx. 5,700 – 6,500 nautical miles (Shanghai to Los Angeles)",
      "transitTimeDays": "12 – 16 days",
      "volumeShare": "Handles over 18 million TEUs annually; highest-volume transoceanic bilateral trade lane",
      "routePath": [
        [
          31.23,
          121.47
        ],
        [
          35.1,
          129.04
        ],
        [
          35.68,
          139.76
        ],
        [
          42,
          160
        ],
        [
          45,
          -170
        ],
        [
          38,
          -135
        ],
        [
          33.74,
          -118.27
        ]
      ],
      "description": "Connects China, South Korea, Japan, and Taiwan to the massive consumer market of the United States. Follows the Great Circle navigation arc south of the Aleutian Islands.",
      "cssRelevance": "Underpins the economic core of the US-China trade dynamic. Highlights the vulnerability of the US consumer economy to supply chain shocks and port labor disputes."
    },
    {
      "id": "transatlantic-lane",
      "name": "Trans-Atlantic Trade Corridor (North America to Europe)",
      "category": "shipping_lanes",
      "code": "TA-NORTH",
      "color": "#7c3aed",
      "distanceNm": "Approx. 3,400 nautical miles (New York to Rotterdam)",
      "transitTimeDays": "7 – 9 days",
      "volumeShare": "Over $600 Billion annually in high-value chemicals, automobiles, machinery, and pharma",
      "routePath": [
        [
          40.71,
          -74
        ],
        [
          42,
          -60
        ],
        [
          48,
          -35
        ],
        [
          50,
          -10
        ],
        [
          49.5,
          -4
        ],
        [
          51.92,
          4.47
        ]
      ],
      "description": "The oldest industrial maritime trade corridor in the modern world. Carries high-value bilateral trade between NATO and G7 allies.",
      "cssRelevance": "Core pillar of Western economic integration and transatlantic resilience in times of international crisis."
    },
    {
      "id": "persian-gulf-energy-highway",
      "name": "Persian Gulf – East Asia Hydrocarbon Energy Highway",
      "category": "energy_corridors",
      "code": "PG-ASIA",
      "color": "#d97706",
      "distanceNm": "Approx. 6,200 nautical miles (Ras Tanura to Yokohama)",
      "transitTimeDays": "18 – 22 days for VLCCs",
      "volumeShare": "Transports over 14 Million bpd of crude oil (~70% of East Asia's petroleum supplies)",
      "routePath": [
        [
          26.64,
          50.16
        ],
        [
          26.56,
          56.25
        ],
        [
          24,
          59
        ],
        [
          20,
          65
        ],
        [
          7,
          77
        ],
        [
          5.95,
          80.5
        ],
        [
          2.5,
          101.5
        ],
        [
          1.35,
          103.82
        ],
        [
          12,
          112
        ],
        [
          22,
          120
        ],
        [
          35.68,
          139.76
        ]
      ],
      "description": "The lifeblood of industrial Asia. Huge Very Large Crude Carriers (VLCCs) continuously ferry petroleum from Saudi Arabia, UAE, Kuwait, and Iraq to refineries across China, Japan, and South Korea.",
      "cssRelevance": "Crucial for understanding why China views maritime SLOC defense as an existential national security priority, driving the modernization of the PLA Navy and construction of CPEC."
    },
    {
      "id": "cpec-maritime-corridor",
      "name": "CPEC Maritime–Land Energy & Trade Corridor (Gwadar Link)",
      "category": "energy_corridors",
      "code": "CPEC-GWADAR",
      "color": "#059669",
      "distanceNm": "Maritime segment: ~1,500 nm; Overland pipeline/road segment: ~3,000 km",
      "transitTimeDays": "Overland transit: 4–6 days (Bypasses 10,000 km / 25-day Malacca detour)",
      "volumeShare": "Designed to handle up to 1M bpd of crude and millions of tons of transit trade for Western China",
      "routePath": [
        [
          26.64,
          50.16
        ],
        [
          26.56,
          56.25
        ],
        [
          25.12,
          62.32
        ],
        [
          27.5,
          66
        ],
        [
          30.2,
          71.4
        ],
        [
          33.7,
          73.1
        ],
        [
          35.9,
          74.3
        ],
        [
          39.47,
          75.99
        ]
      ],
      "description": "Flagship project of China's Belt and Road Initiative (BRI). Connects Pakistan's deep-sea warm-water Port of Gwadar on the Arabian Sea directly with Kashgar in China's western Xinjiang province.",
      "cssRelevance": "Central to Pakistan Current Affairs, Geography, and IR examinations. Provides China with an indispensable direct overland bypass around the Malacca chokepoint and transforms Pakistan into a pivotal geoeconomic trade roundabout."
    },
    {
      "id": "maritime-silk-road-bri",
      "name": "21st Century Maritime Silk Road (Belt & Road Initiative)",
      "category": "shipping_lanes",
      "code": "BRI-MSR",
      "color": "#b91c1c",
      "distanceNm": "Approx. 12,000 nautical miles (Quanzhou to Piraeus/Venice)",
      "transitTimeDays": "32 – 36 days",
      "volumeShare": "Global infrastructure corridor backed by over $1 Trillion in Chinese ports, logistics hubs, and maritime investments",
      "routePath": [
        [
          24.87,
          118.67
        ],
        [
          1.35,
          103.82
        ],
        [
          6.92,
          79.86
        ],
        [
          25.12,
          62.32
        ],
        [
          11.58,
          43.14
        ],
        [
          30.7,
          32.34
        ],
        [
          37.94,
          23.63
        ],
        [
          45.44,
          12.31
        ]
      ],
      "description": "China's grand geoeconomic initiative announced in 2013 to connect Chinese coastal ports with Southeast Asia, South Asia, East Africa, the Mediterranean, and Europe via strategic port concessions ('String of Pearls').",
      "cssRelevance": "Fundamental topic in CSS IR Paper II and Current Affairs. Examines maritime connectivity, port diplomacy, debt-trap diplomacy debates, and strategic containment counter-moves by the Quad."
    },
    {
      "id": "northern-sea-route",
      "name": "Northern Sea Route (Arctic Ocean Shortcut)",
      "category": "shipping_lanes",
      "code": "NSR-ARCTIC",
      "color": "#0284c7",
      "distanceNm": "Approx. 7,600 nautical miles (Yokohama to Rotterdam)",
      "transitTimeDays": "18 – 22 days (Saves 10–12 days and 35% distance vs. Suez)",
      "volumeShare": "Currently 36 Million tons annually; projected to surpass 150M tons by 2035 with melting polar ice packs",
      "routePath": [
        [
          35.68,
          139.76
        ],
        [
          43.11,
          131.88
        ],
        [
          53,
          158
        ],
        [
          65.5,
          -168
        ],
        [
          71,
          -179
        ],
        [
          75,
          140
        ],
        [
          77,
          105
        ],
        [
          73,
          60
        ],
        [
          68.97,
          33.08
        ],
        [
          71,
          25
        ],
        [
          51.92,
          4.47
        ]
      ],
      "description": "The trans-Arctic maritime shipping corridor running along Russia's northern Siberian coastline. As global warming melts polar summer sea ice, the NSR provides an extraordinary 4,000-km shortcut between East Asia and Europe that bypasses Malacca, Suez, and Hormuz entirely.",
      "cssRelevance": "Key topic for Geopolitics of the Arctic, climate change impacts on world trade, Russian nuclear icebreaker fleet monopoly, and the 'Polar Silk Road'."
    }
  ],
  "megaports": [
    {
      "id": "port-of-shanghai",
      "name": "Port of Shanghai (Yangshan Deepwater Port)",
      "category": "megaports",
      "country": "China",
      "lat": 30.63,
      "lng": 122.06,
      "throughputTeu": "49.1 Million TEUs (World's #1 Container Port for 14 consecutive years)",
      "keyRole": "World's primary manufacturing export gateway. Features the automated Yangshan Phase IV terminal, the world's largest automated container terminal.",
      "connectedRoutes": [
        "Trans-Pacific Lane",
        "Asia-Europe Suez Lane",
        "Maritime Silk Road"
      ]
    },
    {
      "id": "port-of-singapore",
      "name": "Port of Singapore (PSA)",
      "category": "megaports",
      "country": "Singapore",
      "lat": 1.28,
      "lng": 103.85,
      "throughputTeu": "39.0 Million TEUs (World's #1 Transshipment Hub & Top Bunkering Port)",
      "keyRole": "The ultimate transshipment crossroads of the world. Connects over 600 ports in 120+ countries along the Malacca Strait.",
      "connectedRoutes": [
        "Strait of Malacca",
        "Asia-Europe Lane",
        "Persian Gulf Energy Highway"
      ]
    },
    {
      "id": "port-of-gwadar",
      "name": "Port of Gwadar",
      "category": "megaports",
      "country": "Pakistan",
      "lat": 25.12,
      "lng": 62.32,
      "throughputTeu": "Deep-sea warm water port (Developing 400M tons capacity under CPEC)",
      "keyRole": "The geostrategic jewel of the Arabian Sea. Located outside the Strait of Hormuz chokepoint, providing direct maritime-to-land transit to China, Central Asia, and Afghanistan.",
      "connectedRoutes": [
        "CPEC Maritime Corridor",
        "Persian Gulf Tanker Route",
        "Maritime Silk Road"
      ]
    },
    {
      "id": "port-of-rotterdam",
      "name": "Port of Rotterdam",
      "category": "megaports",
      "country": "Netherlands",
      "lat": 51.92,
      "lng": 4.47,
      "throughputTeu": "14.5 Million TEUs / 438 Million Metric Tons (Europe's Largest Port)",
      "keyRole": "The primary maritime gateway to continental Europe. Feeds the Rhine River industrial corridor across Germany, France, and the Low Countries.",
      "connectedRoutes": [
        "Asia-Europe Suez Lane",
        "Asia-Europe Cape Lane",
        "Trans-Atlantic Lane"
      ]
    },
    {
      "id": "port-of-los-angeles",
      "name": "Port of Los Angeles / Long Beach (San Pedro Bay)",
      "category": "megaports",
      "country": "United States",
      "lat": 33.74,
      "lng": -118.27,
      "throughputTeu": "19.0 Million TEUs combined (North America's Busiest Port Complex)",
      "keyRole": "The principal Pacific gateway for US imports of Asian manufactured consumer goods, electronics, and automotive parts.",
      "connectedRoutes": [
        "Trans-Pacific Artery"
      ]
    },
    {
      "id": "port-of-jebel-ali",
      "name": "Port of Jebel Ali (DP World)",
      "category": "megaports",
      "country": "United Arab Emirates",
      "lat": 24.98,
      "lng": 55.06,
      "throughputTeu": "14.0 Million TEUs (Largest man-made harbor and busiest Middle East port)",
      "keyRole": "Primary transshipment and logistics engine for the Persian Gulf, Indian subcontinent, and East Africa.",
      "connectedRoutes": [
        "Strait of Hormuz",
        "Persian Gulf Energy Highway"
      ]
    },
    {
      "id": "port-of-karachi",
      "name": "Port of Karachi & Port Qasim",
      "category": "megaports",
      "country": "Pakistan",
      "lat": 24.84,
      "lng": 66.98,
      "throughputTeu": "Over 3.5 Million TEUs and 60% of Pakistan's international trade cargo",
      "keyRole": "Pakistan's primary commercial maritime hub, handling nationwide energy, fertilizer, grain, and textile container flows.",
      "connectedRoutes": [
        "Persian Gulf Energy Highway",
        "Maritime Silk Road"
      ]
    },
    {
      "id": "port-of-djibouti",
      "name": "Port of Djibouti (Doraleh Terminal)",
      "category": "megaports",
      "country": "Djibouti",
      "lat": 11.58,
      "lng": 43.14,
      "throughputTeu": "Over 1.5 Million TEUs (Vital maritime hub at Bab-el-Mandeb)",
      "keyRole": "Strategic gatekeeper to the Red Sea; handles 95% of landlocked Ethiopia's international maritime trade and hosts naval support facilities.",
      "connectedRoutes": [
        "Bab-el-Mandeb",
        "Asia-Europe Suez Lane",
        "Maritime Silk Road"
      ]
    },
    {
      "id": "port-of-ningbo-zhoushan",
      "name": "Port of Ningbo-Zhoushan",
      "category": "megaports",
      "country": "China",
      "lat": 29.87,
      "lng": 121.55,
      "throughputTeu": "35.3 Million TEUs / 1.3 Billion Metric Tons (World's #1 Port by Total Cargo Tonnage for 15 straight years)",
      "keyRole": "World's preeminent super-hub for raw bulk industrial materials: handles raw iron ore, crude oil, and manufactured exports from the Yangtze River Delta.",
      "connectedRoutes": [
        "Trans-Pacific Lane",
        "Asia-Europe Suez Lane",
        "Maritime Silk Road"
      ]
    },
    {
      "id": "port-of-busan",
      "name": "Port of Busan",
      "category": "megaports",
      "country": "South Korea",
      "lat": 35.1,
      "lng": 129.04,
      "throughputTeu": "23.0 Million TEUs (World's #6 Container Port & Premier Northeast Asia Transshipment Gateway)",
      "keyRole": "Pivotal transshipment hub connecting Northeast Asia (China, Japan, Russia) with North American and European maritime networks.",
      "connectedRoutes": [
        "Trans-Pacific Lane",
        "Northern Sea Route"
      ]
    },
    {
      "id": "port-of-colombo",
      "name": "Port of Colombo (CICT / JCT)",
      "category": "megaports",
      "country": "Sri Lanka",
      "lat": 6.94,
      "lng": 79.84,
      "throughputTeu": "7.2 Million TEUs (Key Deepwater South Asia Transshipment Pivot)",
      "keyRole": "Strategically located along the primary East-West maritime shipping lane in the northern Indian Ocean; transships over 70% of India's container cargo.",
      "connectedRoutes": [
        "Asia-Europe Suez Lane",
        "Persian Gulf Energy Highway",
        "Maritime Silk Road"
      ]
    },
    {
      "id": "port-of-santos",
      "name": "Port of Santos",
      "category": "megaports",
      "country": "Brazil",
      "lat": -23.96,
      "lng": -46.33,
      "throughputTeu": "5.0 Million TEUs and 160 Million Metric Tons (Latin America's Largest Port Complex)",
      "keyRole": "Primary agricultural and industrial export gateway for Brazil; handles the world's largest volumes of soybeans, sugar, coffee, and meat exports to global markets.",
      "connectedRoutes": [
        "Trans-Atlantic Lane",
        "Cape Horn & Strait of Magellan"
      ]
    }
  ],
  "routeSimulator": [
    {
      "origin": "Shanghai (East Asia)",
      "destination": "Rotterdam (Northwest Europe)",
      "routeViaSuez": {
        "name": "Via Suez Canal",
        "distanceNm": 10500,
        "transitDays": 28,
        "fuelTons": 1120,
        "insuranceRate": "High (War-Risk Premium in Red Sea)",
        "chokepointsPassed": [
          "Strait of Malacca",
          "Bab-el-Mandeb",
          "Suez Canal",
          "Strait of Gibraltar"
        ]
      },
      "routeViaCape": {
        "name": "Via Cape of Good Hope",
        "distanceNm": 14000,
        "transitDays": 40,
        "fuelTons": 1600,
        "insuranceRate": "Standard Normal",
        "chokepointsPassed": [
          "Strait of Malacca",
          "Cape of Good Hope"
        ]
      },
      "routeViaArctic": {
        "name": "Via Northern Sea Route (Arctic)",
        "distanceNm": 7600,
        "transitDays": 20,
        "fuelTons": 800,
        "insuranceRate": "Special Polar Ice Class",
        "chokepointsPassed": [
          "Bering Strait",
          "Vilkitsky Strait"
        ]
      }
    },
    {
      "origin": "Ras Tanura (Persian Gulf)",
      "destination": "Yokohama (Japan)",
      "routeStandard": {
        "name": "Via Strait of Hormuz & Malacca",
        "distanceNm": 6200,
        "transitDays": 20,
        "chokepointsPassed": [
          "Strait of Hormuz",
          "Strait of Malacca"
        ]
      },
      "routeGwadarBypass": {
        "name": "Via Gwadar Port & CPEC (Western China)",
        "distanceNm": 1200,
        "transitDays": 6,
        "chokepointsPassed": [
          "Strait of Hormuz (Bypassed overland via Gwadar)"
        ]
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRADE_ROUTES_DATA;
}
