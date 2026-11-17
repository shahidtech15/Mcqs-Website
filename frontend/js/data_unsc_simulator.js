/**
 * CSS Prep Central - UN Security Council Simulator Dataset
 * Comprehensive Diplomatic Profiles, Real-world Resolutions, and Geopolitical Decision Engines
 */

const UNSC_MEMBERS = [
  // --- Permanent Five (P5) with Veto Power ---
  {
    id: "usa",
    name: "United States of America",
    code: "US",
    flag: "🇺🇸",
    isP5: true,
    group: "Western European and Others Group (WEOG)",
    term: "Permanent Member",
    ambassador: "Linda Thomas-Greenfield (Permanent Representative)",
    doctrine: "Democratic internationalism, global alliance preservation (NATO, Quad, AUKUS), defense of key strategic partners, and counter-authoritarian deterrence.",
    vetoCount: 86,
    vetoTendency: "Frequently exercises veto on Middle East / Israeli-Palestinian resolutions (~55% of all US vetoes) and initiatives curbing US-aligned military operations.",
    alliances: ["NATO", "Five Eyes", "AUKUS", "Quad", "OECD"],
    reformStance: "Supports modest permanent expansion without extending veto power; open to permanent seats for Japan, Germany, and India, but opposes automatic veto extension.",
    pakistanTies: "Bilateral security cooperation, counterterrorism dialogue, IMF structural engagement, and regional counter-militancy coordination."
  },
  {
    id: "china",
    name: "People's Republic of China",
    code: "CN",
    flag: "🇨🇳",
    isP5: true,
    group: "Asia-Pacific Group",
    term: "Permanent Member",
    ambassador: "Fu Cong (Permanent Representative)",
    doctrine: "Five Principles of Peaceful Coexistence, strict sovereignty, non-interference in domestic affairs, Global Development Initiative (GDI), and multipolar diplomacy.",
    vetoCount: 19,
    vetoTendency: "Uses veto sparingly, historically coordinating with Russia on Syria and Middle East; strictly opposes interventions infringing on national territorial sovereignty.",
    alliances: ["SCO", "BRICS+", "Belt and Road Initiative (BRI)"],
    reformStance: "Advocates increased representation for developing countries and African nations; strongly opposes Japanese or Indian permanent membership.",
    pakistanTies: "'All-Weather Strategic Cooperative Partner', CPEC flagship corridor, joint defense hardware co-production (JF-17), and diplomatic shielding at multilateral forums."
  },
  {
    id: "russia",
    name: "Russian Federation",
    code: "RU",
    flag: "🇷🇺",
    isP5: true,
    group: "Eastern European Group (EEG)",
    term: "Permanent Member",
    ambassador: "Vasily Nebenzya (Permanent Representative)",
    doctrine: "Countering Western hegemony, multipolar balancing, collective security through CSTO, preserving post-Soviet sphere of influence, and veto utilization as strategic leverage.",
    vetoCount: 130,
    vetoTendency: "Most prolific veto user in UN history. Vetoed numerous resolutions on Ukraine, Syria, Balkans, Georgia, and North Korean sanctions monitoring.",
    alliances: ["CSTO", "SCO", "BRICS+", "EAEU"],
    reformStance: "Guards the sanctity of the veto power as the foundational pillar of the UN; open to India and Brazil, but firmly rejects weakening P5 veto prerogatives.",
    pakistanTies: "Evolving economic and energy diplomacy (discounted crude oil shipments), joint military exercises (Druzhba), and multilateral engagement via SCO."
  },
  {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    isP5: true,
    group: "Western European and Others Group (WEOG)",
    term: "Permanent Member",
    ambassador: "Dame Barbara Woodward (Permanent Representative)",
    doctrine: "Rules-based international order, transatlantic cohesion, international humanitarian law penholding, and multilateral non-proliferation.",
    vetoCount: 29,
    vetoTendency: "Has not cast a unilateral veto since 1989; acts primarily as penholder on humanitarian, African, and Middle Eastern resolution drafts.",
    alliances: ["NATO", "Five Eyes", "AUKUS", "G7", "Commonwealth"],
    reformStance: "Supports permanent membership expansion for Germany, Japan, India, and Brazil (G4) plus permanent African representation; opposes veto expansion.",
    pakistanTies: "Major Commonwealth partner, bilateral trade pacts, deep diaspora links, and educational development assistance (FCDO)."
  },
  {
    id: "france",
    name: "French Republic",
    code: "FR",
    flag: "🇫🇷",
    isP5: true,
    group: "Western European and Others Group (WEOG)",
    term: "Permanent Member",
    ambassador: "Nicolas de Rivière (Permanent Representative)",
    doctrine: "European strategic autonomy, multilateral crisis management, Francophone African stabilization, and international arms control.",
    vetoCount: 16,
    vetoTendency: "Has not exercised a veto since 1989. Actively champions a voluntary code of conduct where P5 members refrain from using vetoes in cases of mass atrocities.",
    alliances: ["European Union", "NATO", "G7", "Francophonie"],
    reformStance: "Supports permanent seats for G4 (Germany, Japan, India, Brazil) and permanent African representation; co-sponsor of the France-Mexico Veto Restraint Initiative.",
    pakistanTies: "Trade and civil maritime cooperation, historical Mirage defense maintenance, and EU GSP+ trade framework stakeholder."
  },

  // --- Elected Ten (E10) Non-Permanent Members (2025-2026 Term Focus) ---
  {
    id: "pakistan",
    name: "Islamic Republic of Pakistan",
    code: "PK",
    flag: "🇵🇰",
    isP5: false,
    group: "Asia-Pacific Group",
    term: "Elected (2025-2026) — Elected June 2024 with 182 votes",
    ambassador: "Munir Akram (Permanent Representative)",
    doctrine: "Championing right to self-determination (Kashmir, Palestine), peaceful settlement of disputes under Chapter VI, counter-Islamophobia, and leading the UfC against permanent seat expansion.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Has served 8 terms on UNSC (1952-53, 1968-69, 1976-77, 1983-84, 1993-94, 2003-04, 2012-13, 2025-26). One of the world's top contributors to UN Peacekeeping.",
    alliances: ["OIC", "SCO", "G77", "Uniting for Consensus (UfC)", "Non-Aligned Movement (NAM)"],
    reformStance: "Core coordinator of Uniting for Consensus (UfC / 'Coffee Club'). Strongly opposes adding new permanent members; advocates expanding elected non-permanent seats with democratic accountability.",
    pakistanTies: "Home nation delegate seat."
  },
  {
    id: "algeria",
    name: "People's Democratic Republic of Algeria",
    code: "DZ",
    flag: "🇩🇿",
    isP5: false,
    group: "African Group / Arab Seat",
    term: "Elected (2024-2025)",
    ambassador: "Amar Bendjama (Permanent Representative)",
    doctrine: "Anti-colonial solidarity, Arab League coordination, Palestinian statehood advocacy, Sahrawi self-determination, and Non-Aligned diplomacy.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Serves as the designated Arab seat holder, frequently sponsoring ceasefire and humanitarian access resolutions on Gaza and the Sahel.",
    alliances: ["African Union", "Arab League", "OPEC", "NAM"],
    reformStance: "Upholds the African Union Ezulwini Consensus demanding at least two permanent African seats with veto rights.",
    pakistanTies: "Close brotherly ties within the OIC and NAM; mutually supportive voting postures on self-determination disputes."
  },
  {
    id: "guyana",
    name: "Co-operative Republic of Guyana",
    code: "GY",
    flag: "🇬🇾",
    isP5: false,
    group: "Latin American & Caribbean Group (GRULAC)",
    term: "Elected (2024-2025)",
    ambassador: "Carolyn Rodrigues-Birkett (Permanent Representative)",
    doctrine: "Territorial integrity, adherence to ICJ rulings (Essequibo border dispute with Venezuela), climate security for Small Island and developing states, and food security.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Focuses heavily on rule of international law, peaceful boundary resolution, and environmental vulnerability.",
    alliances: ["CARICOM", "Commonwealth", "G77"],
    reformStance: "Supports reform that broadens Latin American, Caribbean, and Small Island representation.",
    pakistanTies: "Commonwealth and G77 multilateral camaraderie; supportive of climate resilience financing."
  },
  {
    id: "south_korea",
    name: "Republic of Korea (South Korea)",
    code: "KR",
    flag: "🇰🇷",
    isP5: false,
    group: "Asia-Pacific Group",
    term: "Elected (2024-2025)",
    ambassador: "Joonkook Hwang (Permanent Representative)",
    doctrine: "Global Pivotal State (GPS) vision, non-proliferation enforcement on North Korea (DPRK), cyber stability, and deepening democratic multilateralism.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Strongly supports robust implementation of DPRK sanctions under Chapter VII.",
    alliances: ["ROK-US Mutual Defense Treaty", "OECD", "Uniting for Consensus (UfC)"],
    reformStance: "Key member of Uniting for Consensus alongside Pakistan and Italy; opposes creating permanent seats in Asia (specifically opposes Japan/India gaining permanent veto).",
    pakistanTies: "Economic and technological cooperation, labor export agreements, and aligned voting in the UfC coalition against G4."
  },
  {
    id: "sierra_leone",
    name: "Republic of Sierra Leone",
    code: "SL",
    flag: "🇸🇱",
    isP5: false,
    group: "African Group",
    term: "Elected (2024-2025)",
    ambassador: "Michael Imran Kanu (Permanent Representative)",
    doctrine: "Consolidating post-conflict peacebuilding, transitional justice, African peace architectures (ECOWAS), and climate vulnerability remediation.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Active coordinator of the Committee of Ten (C-10) on UN Security Council Reform.",
    alliances: ["African Union", "ECOWAS", "Commonwealth", "OIC"],
    reformStance: "Leads the African Union's C-10 reform delegation championing the Ezulwini Consensus and Sirte Declaration.",
    pakistanTies: "Historic memory of Pakistani Blue Helmets who disarmed rebels during the UNAMSIL peacekeeping mission (1999-2005)."
  },
  {
    id: "slovenia",
    name: "Republic of Slovenia",
    code: "SI",
    flag: "🇸🇮",
    isP5: false,
    group: "Eastern European Group (EEG)",
    term: "Elected (2024-2025)",
    ambassador: "Samuel Žbogar (Permanent Representative)",
    doctrine: "International humanitarian law, women peace & security (WPS), conflict prevention in the Western Balkans, and environmental diplomacy.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Beat Belarus in a high-profile June 2023 election; coordinates consistently with European Union foreign policy directives.",
    alliances: ["European Union", "NATO", "OECD"],
    reformStance: "Supports making the Security Council more transparent, accountable, and representative of smaller nations.",
    pakistanTies: "EU bilateral framework ties and climate adaptation exchange."
  },
  {
    id: "switzerland",
    name: "Swiss Confederation",
    code: "CH",
    flag: "🇨🇭",
    isP5: false,
    group: "Western European and Others Group (WEOG)",
    term: "Elected (2023-2024 / Transitioning)",
    ambassador: "Pascale Baeriswyl (Permanent Representative)",
    doctrine: "Neutrality, humanitarian law, protection of civilians, mediation, and enhancing UNSC working methods through the ACT Group.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Strong proponent of international humanitarian law compliance and civilian infrastructure protection.",
    alliances: ["EFTA", "OECD", "ACT (Accountability, Coherence and Transparency)"],
    reformStance: "Advocates for improving working methods, code of conduct on veto restraint, and enhanced transparency in Sanctions Committees.",
    pakistanTies: "Host of key UN Geneva bodies where Pakistan serves actively; major trade partner in specialty instruments."
  },
  {
    id: "panama",
    name: "Republic of Panama",
    code: "PA",
    flag: "🇵🇦",
    isP5: false,
    group: "Latin American & Caribbean Group (GRULAC)",
    term: "Elected (2025-2026 Term)",
    ambassador: "Permanent Representative of Panama",
    doctrine: "Maritime security, canal neutrality, international transit protection, migration management, and peaceful arbitration of disputes.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Key regional voice on maritime security, transnational organized crime, and canal neutrality protocols.",
    alliances: ["OAS", "SICA", "G77"],
    reformStance: "Supports increased Latin American and Caribbean voice without expanding rigid veto powers.",
    pakistanTies: "Maritime trade relations through bilateral shipping corridors."
  },
  {
    id: "somalia",
    name: "Federal Republic of Somalia",
    code: "SO",
    flag: "🇸🇴",
    isP5: false,
    group: "African Group",
    term: "Elected (2025-2026 Term)",
    ambassador: "Abukar Dahir Osman (Permanent Representative)",
    doctrine: "Countering violent extremism (Al-Shabaab), post-ATMIS transition to national security architecture, maritime sovereignty in the Horn of Africa, and regional stability.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Returned to the UNSC after 50 years; prioritizes state sovereignty and lifting remaining arms sanctions.",
    alliances: ["African Union", "Arab League", "OIC", "IGAD"],
    reformStance: "Aligns with African Union Common Position (Ezulwini Consensus).",
    pakistanTies: "Historic defense and peacekeeping ties; Pakistani forces served under UNOSOM in Somalia; strong solidarity in OIC."
  },
  {
    id: "denmark",
    name: "Kingdom of Denmark",
    code: "DK",
    flag: "🇩🇰",
    isP5: false,
    group: "Western European and Others Group (WEOG)",
    term: "Elected (2025-2026 Term)",
    ambassador: "Permanent Representative of Denmark",
    doctrine: "Nordic multilateralism, international law enforcement, climate security, maritime domain awareness, and Arctic governance.",
    vetoCount: 0,
    vetoTendency: "E10 Member (No veto). Prioritizes multilateral peacekeeping and climate diplomacy.",
    alliances: ["European Union", "NATO", "Nordic Council"],
    reformStance: "Advocates veto restraint in mass atrocity situations and greater inclusion of developing countries.",
    pakistanTies: "Green framework engagement and renewable energy technical cooperation."
  }
];

// --- 8 Pre-configured Realistic Geopolitical Resolutions ---
const UNSC_RESOLUTIONS = [
  {
    id: "res_gaza",
    code: "S/2026/104",
    title: "Enforcement of Immediate Ceasefire and Humanitarian Corridors in the Gaza Strip",
    topic: "Middle East Conflict & International Humanitarian Law",
    chapter: "Chapter VII (Action with Respect to Threats to Peace, Arts 40 & 41)",
    sponsor: "Algeria & Pakistan",
    sponsorId: "algeria",
    summary: "Demands an immediate, unconditional, and permanent ceasefire by all parties in the Gaza Strip; mandates unimpeded entry of humanitarian aid trucks under UN oversight; demands immediate release of all hostages and arbitrarily detained civilians; and warns of targeted economic and diplomatic sanctions under Article 41 for non-compliance.",
    operativeClauses: [
      "1. Demands an immediate, unconditional, and permanent ceasefire to be respected by all parties.",
      "2. Mandates the unhindered flow of humanitarian aid at scale through all land crossings under UNOCHA supervision.",
      "3. Demands the immediate and unconditional release of all civilian hostages and detainees.",
      "4. Decides that non-compliance within 14 days will trigger targeted diplomatic and economic measures under Article 41."
    ],
    cssSignificance: "Tests Chapter VII binding mandates versus Chapter VI recommendatory resolutions, P5 veto dynamics on Middle East diplomacy, and Article 25 compliance obligations.",
    defaultVotes: {
      usa: "against", // VETO expected
      china: "favor",
      russia: "favor",
      uk: "abstain",
      france: "favor",
      pakistan: "favor",
      algeria: "favor",
      guyana: "favor",
      south_korea: "favor",
      sierra_leone: "favor",
      slovenia: "favor",
      switzerland: "favor",
      panama: "favor",
      somalia: "favor",
      denmark: "favor"
    },
    diplomaticRationale: {
      usa: "Vetoes because the draft conditions hostage release alongside an immediate ceasefire without explicit guarantees on security infrastructure dismantling.",
      china: "Supports the resolution to end civilian catastrophe, preserve regional stability, and reinforce the two-state solution.",
      russia: "Votes in favor to expose Western double standards, consolidate ties with Arab and Global South partners, and demand immediate cessation of hostilities.",
      uk: "Abstains citing inadequate language regarding verifiable demilitarization of non-state combatants.",
      france: "Votes in favor citing urgent humanitarian imperatives, protection of hospitals and aid workers, and international humanitarian law.",
      pakistan: "Co-sponsors and champions the resolution in full alignment with the OIC mandate and humanitarian law."
    }
  },
  {
    id: "res_kashmir",
    code: "S/2026/218",
    title: "Reaffirmation of UNMOGIP Mandate and Bilateral Dispute Resolution on Jammu & Kashmir",
    topic: "South Asian Peace & Security and Self-Determination",
    chapter: "Chapter VI (Pacific Settlement of Disputes, Arts 33, 34 & 36)",
    sponsor: "Pakistan",
    sponsorId: "pakistan",
    summary: "Reaffirms United Nations Security Council Resolutions 47 (1948) and 91 (1951); calls for strict adherence to the 2003 Ceasefire Agreement along the Line of Control (LoC); strengthens the monitoring capacity of the UN Military Observer Group in India and Pakistan (UNMOGIP); urges resumption of structured bilateral dialogue on Kashmir; and emphasizes protection of human rights.",
    operativeClauses: [
      "1. Reaffirms that the final disposition of the State of Jammu and Kashmir will be made in accordance with the will of the people expressed through a free and impartial plebiscite under UN auspices.",
      "2. Calls upon both states to grant full, unimpeded operational mobility to UNMOGIP observers along both sides of the Line of Control.",
      "3. Urges immediate de-escalation, mutual pull-back of heavy artillery, and resumption of comprehensive bilateral diplomacy under Article 33.",
      "4. Requests the Secretary-General to report quarterly on the situation along the LoC and human rights conditions."
    ],
    cssSignificance: "Central topic in Pakistan Affairs, International Relations Paper II, and International Law. Illustrates Article 33 pacific dispute mechanisms, historic plebiscitary resolutions, and Cold War veto politics.",
    defaultVotes: {
      usa: "abstain",
      china: "favor",
      russia: "against", // VETO expected due to historic Indo-Russian bilateral stance
      uk: "abstain",
      france: "abstain",
      pakistan: "favor",
      algeria: "favor",
      guyana: "abstain",
      south_korea: "abstain",
      sierra_leone: "favor",
      slovenia: "abstain",
      switzerland: "favor",
      panama: "abstain",
      somalia: "favor",
      denmark: "abstain"
    },
    diplomaticRationale: {
      pakistan: "Introduces the draft to uphold binding UN commitments, protect civilian lives along the LoC, and enforce international accountability on the recognized dispute.",
      russia: "Vetoes on grounds that the Kashmir issue must be resolved purely bilaterally between India and Pakistan in accordance with the 1972 Simla Agreement, without international intervention.",
      china: "Votes in favor supporting historical UN resolutions, regional peace in South Asia, and its all-weather partner's legitimate position.",
      usa: "Abstains to balance strategic relations with both Pakistan and India, favoring bilateral dialogue over international multilateral mandates.",
      uk: "Abstains, maintaining that resolution of the dispute rests primarily with the two capitals."
    }
  },
  {
    id: "res_zaporizhzhia",
    code: "S/2026/305",
    title: "Establishment of a Demilitarized Nuclear Safety and Security Zone around the Zaporizhzhia Nuclear Power Plant",
    topic: "Nuclear Safety & European Armed Conflict",
    chapter: "Chapter VII (Provisional Measures under Article 40)",
    sponsor: "France & Slovenia",
    sponsorId: "france",
    summary: "Expresses grave concern over kinetic shelling near Europe's largest nuclear power facility; mandates an immediate 10-kilometer demilitarized safety buffer zone around the Zaporizhzhia Nuclear Power Plant (ZNPP); deploys an expanded IAEA Technical Advisory and UN Disengagement Monitoring Team; and prohibits the stationing of heavy military hardware or launching of attacks from within the facility.",
    operativeClauses: [
      "1. Orders the immediate cessation of all artillery, drone, and missile strikes in the vicinity of the Zaporizhzhia Nuclear Power Plant.",
      "2. Establishes a 10-km demilitarized exclusion zone prohibiting any heavy weaponry, ammunition depots, or combat forces.",
      "3. Mandates the deployment of a permanent UN-IAEA Nuclear Protection Monitoring Mission with unhindered 24/7 access.",
      "4. Declares that intentional strikes on civilian nuclear installations violate the Additional Protocols to the Geneva Conventions."
    ],
    cssSignificance: "Focuses on Article 40 provisional measures to prevent catastrophic escalation, IAEA safeguards, and environmental warfare prohibition under International Humanitarian Law.",
    defaultVotes: {
      usa: "favor",
      china: "abstain",
      russia: "against", // VETO expected
      uk: "favor",
      france: "favor",
      pakistan: "abstain",
      algeria: "abstain",
      guyana: "favor",
      south_korea: "favor",
      sierra_leone: "favor",
      slovenia: "favor",
      switzerland: "favor",
      panama: "favor",
      somalia: "abstain",
      denmark: "favor"
    },
    diplomaticRationale: {
      russia: "Vetoes because it considers the plant to be located within territory it claims jurisdiction over, objecting to foreign demilitarization mandates.",
      france: "Sponsors the resolution to avert a catastrophic radiological fallout across the European continent.",
      china: "Abstains emphasizing its 12-point peace position, advocating bilateral technical talks through the IAEA rather than Chapter VII mandates.",
      pakistan: "Abstains in line with its neutral stance on the conflict, calling for technical IAEA safeguards and peaceful diplomatic settlement."
    }
  },
  {
    id: "res_hormuz_redsea",
    code: "S/2026/412",
    title: "Protection of Commercial Maritime Navigation and Chokepoint Security in the Red Sea and Strait of Hormuz",
    topic: "Maritime Law (UNCLOS) & Global Energy Chokepoints",
    chapter: "Chapter VII (Maritime Security and Enforcement, Arts 39 & 42)",
    sponsor: "United States & United Kingdom",
    sponsorId: "usa",
    summary: "Condemns non-state missile and drone attacks on commercial merchant vessels traversing the Bab-el-Mandeb, Red Sea, and Strait of Hormuz; authorizes member states acting in cooperation with regional authorities to take necessary measures under Article 42 to interdict illicit weapons transfers; and reaffirms navigational rights under UNCLOS.",
    operativeClauses: [
      "1. Strongly condemns attacks against merchant vessels and tankers, demanding an immediate end to maritime strikes.",
      "2. Reaffirms the navigational rights and freedoms of merchant and commercial vessels under international law, particularly UNCLOS 1982.",
      "3. Authorizes a multinational maritime interdiction mission under Article 42 to inspect vessels suspected of trafficking unauthorized missile components.",
      "4. Calls for collective regional de-escalation to safeguard global supply chains and maritime energy flow."
    ],
    cssSignificance: "Touches on UNCLOS Articles 17-26 (Innocent Passage), Article 42 Chapter VII military authorizations, freedom of the high seas, and international trade routes.",
    defaultVotes: {
      usa: "favor",
      china: "abstain",
      russia: "against", // VETO expected
      uk: "favor",
      france: "favor",
      pakistan: "abstain",
      algeria: "against",
      guyana: "favor",
      south_korea: "favor",
      sierra_leone: "abstain",
      slovenia: "favor",
      switzerland: "favor",
      panama: "favor",
      somalia: "favor",
      denmark: "favor"
    },
    diplomaticRationale: {
      usa: "Sponsors to protect international maritime transit, prevent global supply chain shocks, and deter non-state militia attacks.",
      russia: "Vetoes on the grounds that Article 42 authorization legitimizes Western naval interventions without addressing root geopolitical causes in the Middle East.",
      china: "Abstains, balancing its reliance on maritime energy imports with its aversion to Western military coalitions in Middle Eastern waters.",
      pakistan: "Abstains, maintaining peaceful maritime commerce principles while avoiding entanglement in regional power proxy conflicts."
    }
  },
  {
    id: "res_sudan",
    code: "S/2026/519",
    title: "Expansion of Arms Embargo to All of Sudan and Deployment of an African Union-UN Joint Civilian Protection Force",
    topic: "African Peace & Security & Civil War Mitigation",
    chapter: "Chapter VII (Arms Embargoes and Peacekeeping, Arts 41 & 42)",
    sponsor: "Sierra Leone & United Kingdom",
    sponsorId: "sierra_leone",
    summary: "Extends the existing Darfur arms embargo to the entirety of Sudan; orders the immediate cessation of hostilities between the Sudanese Armed Forces (SAF) and Rapid Support Forces (RSF); establishes an independent sanctions panel to monitor foreign arms and mercenary flows; and authorizes a joint AU-UN protection mission.",
    operativeClauses: [
      "1. Imposes a comprehensive, legally binding arms embargo across all territories of Sudan with immediate effect.",
      "2. Demands both warring parties freeze combat operations, open humanitarian lifelines into El Fasher and Khartoum, and protect civilians.",
      "3. Authorizes the establishment of a joint AU-UN Civilian Protection Force (UNSUF) with a Chapter VII mandate.",
      "4. Imposes targeted asset freezes and travel bans on senior commanders responsible for ethnic targeting and mass displacement."
    ],
    cssSignificance: "Examines Responsibility to Protect (R2P), arms embargo mechanisms under Article 41, AU-UN hybrid peacekeeping, and state sovereignty dilemmas.",
    defaultVotes: {
      usa: "favor",
      china: "favor",
      russia: "abstain",
      uk: "favor",
      france: "favor",
      pakistan: "favor",
      algeria: "favor",
      guyana: "favor",
      south_korea: "favor",
      sierra_leone: "favor",
      slovenia: "favor",
      switzerland: "favor",
      panama: "favor",
      somalia: "favor",
      denmark: "favor"
    },
    diplomaticRationale: {
      russia: "Abstains, cautioning that blanket arms bans without government consent infringe on state sovereignty, but refrains from vetoing to avoid blocking humanitarian relief.",
      sierra_leone: "Co-sponsors with strong AU support to halt regional spillover, catastrophic famine, and internal displacement.",
      china: "Votes in favor to protect humanitarian corridors and stabilize the Red Sea coast.",
      pakistan: "Votes in favor supporting fraternal Sudanese civilian protection and African Union peace leadership."
    }
  },
  {
    id: "res_laws_ai",
    code: "S/2026/628",
    title: "Global Moratorium on Lethal Autonomous Weapons Systems (LAWS) and Military AI Targeting",
    topic: "Disarmament, Emerging Technologies & International Humanitarian Law",
    chapter: "Chapter VI & General Assembly Cooperation",
    sponsor: "Switzerland & Pakistan",
    sponsorId: "switzerland",
    summary: "Calls upon all sovereign states to observe an immediate global moratorium on the development, acquisition, and operational deployment of autonomous weapon systems functioning without meaningful human control; mandates the formulation of a legally binding treaty under the Convention on Certain Conventional Weapons (CCW); and establishes an advisory panel on AI weaponization.",
    operativeClauses: [
      "1. Calls upon all Member States to impose an immediate national moratorium on the operational fielding of lethal autonomous weapon systems (LAWS).",
      "2. Affirms that the ultimate responsibility for the use of lethal military force must always rest with human commanders and operators.",
      "3. Recommends the convening of an emergency diplomatic conference to negotiate a legally binding instrument regulating military AI.",
      "4. Requests the UN Office for Disarmament Affairs (UNODA) to maintain a public registry of autonomous defense systems."
    ],
    cssSignificance: "High-yield CSS/PMS topic in Everyday Science (AI ethics), International Law (Martens Clause, IHL proportionality), and Current Affairs (drones & algorithmic warfare).",
    defaultVotes: {
      usa: "against", // VETO expected
      china: "abstain",
      russia: "against", // VETO expected
      uk: "against",
      france: "abstain",
      pakistan: "favor",
      algeria: "favor",
      guyana: "favor",
      south_korea: "abstain",
      sierra_leone: "favor",
      slovenia: "favor",
      switzerland: "favor",
      panama: "favor",
      somalia: "favor",
      denmark: "favor"
    },
    diplomaticRationale: {
      usa: "Vetoes, arguing that non-binding political declarations are preferable to blanket prohibitions that could handicap democratic technological innovation.",
      russia: "Vetoes, rejecting international constraints on sovereign defense R&D and advanced AI drone integration.",
      pakistan: "Co-sponsors and votes in favor, having consistently championed a legally binding instrument on LAWS at the CCW in Geneva to prevent asymmetric technological subjugation.",
      switzerland: "Co-sponsors in defense of the Geneva Conventions and human accountability in armed conflict."
    }
  },
  {
    id: "res_taiwan",
    code: "S/2026/735",
    title: "Preservation of Status Quo and De-escalation Protocol in the Taiwan Strait",
    topic: "East Asian Geopolitics & Regional Stability",
    chapter: "Chapter VI (Pacific Settlement of Disputes)",
    sponsor: "United States",
    sponsorId: "usa",
    summary: "Reaffirms the vital importance of peace, security, and stability in the Taiwan Strait; urges peaceful settlement of cross-strait differences through dialogue; opposes any unilateral attempt to alter the status quo by coercion or force; and requests the UN Department of Political and Peacebuilding Affairs to monitor maritime incident risks.",
    operativeClauses: [
      "1. Emphasizes that peace and stability across the Taiwan Strait are indispensable to international security and global prosperity.",
      "2. Reaffirms the necessity of peaceful dispute settlement and calls upon all parties to exercise restraint and avoid provocative military exercises.",
      "3. Disapproves of any unilateral action seeking to alter the cross-strait status quo through force or coercion.",
      "4. Encourages constructive bilateral dialogue between Beijing and Taipei without preconditions."
    ],
    cssSignificance: "Tests UN General Assembly Resolution 2758 (1971), China's One-China Principle, Article 2(7) domestic jurisdiction limitations, and major power confrontation.",
    defaultVotes: {
      usa: "favor",
      china: "against", // VETO expected (Absolute red line)
      russia: "against",
      uk: "favor",
      france: "favor",
      pakistan: "against",
      algeria: "against",
      guyana: "abstain",
      south_korea: "abstain",
      sierra_leone: "against",
      slovenia: "favor",
      switzerland: "abstain",
      panama: "abstain",
      somalia: "against",
      denmark: "favor"
    },
    diplomaticRationale: {
      china: "Casts an absolute veto, firmly stating that Taiwan is an inalienable part of China, that UNGA Resolution 2758 recognized Beijing as the sole legal representative, and that the Taiwan question is strictly an internal Chinese affair under Article 2(7).",
      pakistan: "Votes against, strictly upholding the One-China Principle and opposing external interference in China's sovereign affairs.",
      usa: "Sponsors the resolution to deter cross-strait conflict and protect freedom of maritime navigation.",
      russia: "Votes against in staunch solidarity with Beijing, condemning US geopolitical provocations in the Asia-Pacific."
    }
  },
  {
    id: "res_climate_security",
    code: "S/2026/842",
    title: "Integration of Climate-Induced Fragility and Disaster Displacement into the Global Peace and Security Mandate",
    topic: "Environmental Geopolitics & International Security Architecture",
    chapter: "Chapter VI & Chapter VIII (Peacebuilding Architecture)",
    sponsor: "Guyana & Switzerland",
    sponsorId: "guyana",
    summary: "Formally recognizes that climate change is an aggravating threat multiplier that exacerbates water stress, food insecurity, state fragility, and cross-border displacement; requests the Secretary-General to integrate comprehensive climate security risk assessments into all UN Peacekeeping and Special Political Mission mandates; and establishes a Climate Security Advisory Mechanism.",
    operativeClauses: [
      "1. Declares that acute climate-related ecological degradation and sea-level rise constitute critical threat multipliers to international peace and security.",
      "2. Mandates that all future peacekeeping and political missions incorporate environmental risk advisers and local water conflict mediators.",
      "3. Calls for expedited loss and damage financing and climate resilience resource transfers to vulnerable developing nations.",
      "4. Directs the UN Peacebuilding Commission to prioritize post-disaster state stabilization initiatives."
    ],
    cssSignificance: "Covers non-traditional security threats in CSS International Relations, the expanding definition of 'threat to peace' under Article 39, and the UNFCCC Loss and Damage Fund.",
    defaultVotes: {
      usa: "favor",
      china: "abstain",
      russia: "against", // VETO expected
      uk: "favor",
      france: "favor",
      pakistan: "favor",
      algeria: "favor",
      guyana: "favor",
      south_korea: "favor",
      sierra_leone: "favor",
      slovenia: "favor",
      switzerland: "favor",
      panama: "favor",
      somalia: "favor",
      denmark: "favor"
    },
    diplomaticRationale: {
      russia: "Vetoes on the legal doctrine that climate change belongs strictly within the General Assembly, ECOSOC, and UNFCCC frameworks, arguing the Security Council lacks the mandate or competence to regulate environmental matters.",
      china: "Abstains, agreeing climate change is critical but questioning whether the UNSC is the appropriate forum versus the UNFCCC.",
      pakistan: "Votes in favor as one of the world's most climate-vulnerable states (2022 historic floods) to demand international accountability and resilience financing.",
      guyana: "Sponsors the resolution as a climate-threatened developing nation seeking international institutional backing."
    }
  }
];

// --- High-Yield CSS/PMS Exam Study Modules ---
const UNSC_EXAM_MODULES = [
  {
    id: "veto_mechanics",
    title: "Article 27 & Veto Mechanics Explained",
    icon: "fa-gavel",
    summary: "The legal foundation of voting and the Great Power Unanimity principle.",
    points: [
      "<strong>Article 27(2):</strong> Decisions on procedural matters require nine affirmative votes out of fifteen members.",
      "<strong>Article 27(3):</strong> Decisions on substantive matters require nine affirmative votes, including the concurring votes of the permanent members (P5). A negative vote by ANY permanent member constitutes a VETO.",
      "<strong>The Abstention Precedent:</strong> Under established UN practice (Korean War 1950 & ICJ Namibia Advisory Opinion 1971), a voluntary abstention or absence by a permanent member does NOT constitute a veto.",
      "<strong>The 'Double Veto':</strong> A P5 member can vote against a preliminary motion deciding whether a matter is procedural or substantive, forcing it to be classified as substantive, and then veto the substantive resolution itself."
    ]
  },
  {
    id: "pakistan_unsc",
    title: "Pakistan's Historic Tenure & Leadership in the UNSC",
    icon: "fa-flag",
    summary: "Pakistan was elected to its 8th historic term (2025-2026) on June 6, 2024 with 182 votes.",
    points: [
      "<strong>8 Historic Terms:</strong> Pakistan has been elected for 1952-53, 1968-69, 1976-77, 1983-84, 1993-94, 2003-04, 2012-13, and 2025-26.",
      "<strong>Leader of Uniting for Consensus (UfC):</strong> Pakistan coordinates the 'Coffee Club' with Italy, Argentina, Mexico, and South Korea, strictly opposing new permanent seats (opposing India/G4) and advocating for democratically elected, accountable seats.",
      "<strong>Top Peacekeeping Contributor:</strong> Over 230,000 Pakistani Blue Helmets have served in 46 UN missions across 29 countries since 1960; 181 Pakistani peacekeepers have made the ultimate sacrifice.",
      "<strong>Core Foreign Policy Agenda:</strong> Implementing UN resolutions on Kashmir and Palestine, combating Islamophobia, expanding development financing, and upholding Chapter VI peaceful dispute settlement."
    ]
  },
  {
    id: "unsc_reform",
    title: "Security Council Reform Debates: G4 vs. Uniting for Consensus",
    icon: "fa-scale-unbalanced",
    summary: "The geopolitical battle between G4 aspirants and the UfC coalition.",
    points: [
      "<strong>G4 Aspirants (India, Germany, Japan, Brazil):</strong> Demand permanent seats for themselves plus two African seats, arguing the 1945 architecture no longer reflects contemporary economic and demographic reality.",
      "<strong>Uniting for Consensus (UfC / 'Coffee Club'):</strong> Led by Pakistan, Italy, South Korea, Canada, Mexico, and Turkey. Argues that adding permanent seats creates new oligarchies, breeds paralysis, and contradicts sovereign equality. Proposes expanding non-permanent seats with longer, renewable terms.",
      "<strong>The African Position (Ezulwini Consensus):</strong> Demands not less than two permanent seats with all P5 prerogatives (including veto) and five non-permanent seats for Africa.",
      "<strong>The Veto Restraint Initiative:</strong> France and Mexico propose that P5 members voluntarily refrain from exercising the veto in situations involving mass atrocities (genocide, crimes against humanity, war crimes)."
    ]
  },
  {
    id: "chapter_vi_vs_vii",
    title: "UN Charter Chapters: Chapter VI vs. Chapter VII",
    icon: "fa-shield-halved",
    summary: "The distinction between recommendatory and legally binding enforcement mandates.",
    points: [
      "<strong>Chapter VI (Arts 33-38):</strong> Pacific Settlement of Disputes. Emphasizes negotiation, enquiry, mediation, conciliation, arbitration, and judicial settlement. Resolutions are recommendatory and non-coercive (e.g. Kashmir resolutions S/RES/47).",
      "<strong>Chapter VII (Arts 39-50):</strong> Action with Respect to Threats to Peace, Breaches of the Peace, and Acts of Aggression. Resolutions are legally binding on all UN Member States under Article 25.",
      "<strong>Article 41:</strong> Non-military enforcement measures: economic sanctions, arms embargoes, severance of diplomatic relations, financial asset freezes, and communication cutoffs.",
      "<strong>Article 42:</strong> Military enforcement measures: 'take such action by air, sea, or land forces as may be necessary to maintain or restore international peace and security' (e.g. Korea 1950, Gulf War 1990)."
    ]
  }
];

if (typeof window !== 'undefined') {
  window.UNSC_MEMBERS = UNSC_MEMBERS;
  window.UNSC_RESOLUTIONS = UNSC_RESOLUTIONS;
  window.UNSC_EXAM_MODULES = UNSC_EXAM_MODULES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    UNSC_MEMBERS,
    UNSC_RESOLUTIONS,
    UNSC_EXAM_MODULES
  };
}
