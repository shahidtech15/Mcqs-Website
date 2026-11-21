/**
 * Master Dataset for Digital Library:
 * - Important Reports (Economic Survey, SBP, UN Reports, FATF)
 * - Newspaper Editorials & Analytical Summaries (Dawn, The News, Foreign Affairs)
 * - International Treaties & Accords (Westphalia to BBNJ)
 * - Geographic Maps, Rivers, Mountain Ranges & Strategic Chokepoints
 * - High-Yield Vocabulary List (CSS / GRE 500 Words)
 * - Solved 20-Mark Descriptive Questions (CSS / PMS Model Answers)
 * - Subject-Wise Notes & Capsule Outlines
 * - Downloadable PDF Material Directory
 */

window.DIGITAL_LIBRARY_DATA = {
  // 1. IMPORTANT REPORTS
  reports: [
    {
      id: "rep-econ-survey-2024",
      title: "Pakistan Economic Survey 2023–24",
      issuingBody: "Ministry of Finance, Government of Pakistan",
      year: "2024",
      category: "National Economy & Fiscal Policy",
      summary: "Comprehensive annual review of Pakistan's economic performance covering GDP growth (estimated at 2.38%), sectoral recovery in agriculture (6.25% bumper crops in wheat, cotton, rice), industrial contraction (-1.21%), fiscal consolidation efforts, and the tax-to-GDP ratio standing at ~9.2%.",
      keyStats: [
        "Real GDP Growth: 2.38% (rebounding from -0.21% in FY23)",
        "Agriculture Sector: Robust 6.25% expansion",
        "Inflation (CPI): Averaged 28.5% during July-April FY24",
        "Current Account Deficit: Compressed by 95% to $0.5 billion (July-April FY24)",
        "Total Public Debt: Recorded at Rs. 67.5 trillion by end-March 2024"
      ],
      examRelevance: "Essential for Pakistan Affairs, Current Affairs, Economics, and Essay papers. Candidates must quote official figures for agricultural yield, industrial growth, and fiscal deficit to anchor analytical arguments.",
      downloadLink: "https://www.finance.gov.pk/survey_2023_24.html",
      tags: ["Economy", "Fiscal Policy", "Agriculture", "Public Debt", "GDP"]
    },
    {
      id: "rep-sbp-economy-2024",
      title: "State Bank of Pakistan (SBP) Annual State of Economy Report",
      issuingBody: "State Bank of Pakistan",
      year: "2024",
      category: "Monetary Policy & Central Banking",
      summary: "Detailed diagnostic on macroeconomic stabilization, monetary tightening (policy rate peak at 22% before gradual easing), exchange rate stability under market-determined regime, foreign exchange reserve build-up, and inflation deceleration dynamics.",
      keyStats: [
        "Policy Rate: Peak of 22% maintained before phased monetary easing",
        "FX Reserves (SBP): Rebuilt to over $9.5 billion through IMF inflows and bilateral rollovers",
        "Worker Remittances: Surpassed $27 billion in FY24",
        "Broad Money (M2) Growth: Decelerated in response to high real interest rates"
      ],
      examRelevance: "Key reference for monetary vs fiscal coordination questions, balance of payments crises, and sovereign debt sustainability analysis.",
      downloadLink: "https://www.sbp.org.pk",
      tags: ["SBP", "Monetary Policy", "Inflation", "FX Reserves", "Remittances"]
    },
    {
      id: "rep-undp-hdr-2024",
      title: "UNDP Human Development Report (HDR) 2023–2024",
      issuingBody: "United Nations Development Programme (UNDP)",
      year: "2024",
      category: "Global Development & Social Sector",
      summary: "Titled 'Breaking the Gridlock: Reimagining cooperation in a polarized world', the report analyzes global divergence in human development post-pandemic. Pakistan ranks 164th out of 193 nations with an HDI value of 0.540, remaining in the Low Human Development category.",
      keyStats: [
        "Pakistan HDI Value: 0.540 (Rank: 164/193)",
        "Life Expectancy at Birth in Pakistan: 66.1 years",
        "Expected Years of Schooling: 7.9 years; Mean Years of Schooling: 4.5 years",
        "Gender Inequality Index (GII): Pakistan ranks 135th with high maternal mortality"
      ],
      examRelevance: "Indispensable statistical evidence for CSS Essay (Poverty, Education, Healthcare, Gender Empowerment) and Pakistan Affairs socio-economic questions.",
      downloadLink: "https://hdr.undp.org",
      tags: ["UNDP", "Human Development", "Education", "Healthcare", "HDI"]
    },
    {
      id: "rep-ipcc-ar6-syr",
      title: "IPCC Sixth Assessment Synthesis Report (AR6)",
      issuingBody: "Intergovernmental Panel on Climate Change (IPCC)",
      year: "2023–2024",
      category: "Climate Science & Environmental Governance",
      summary: "The definitive global scientific assessment of anthropogenic climate change. Affirms that human activities have unequivocally caused global surface temperatures to reach 1.1°C above pre-industrial levels, leading to widespread loss and damage in vulnerable regions like South Asia.",
      keyStats: [
        "Global Surface Temperature: +1.1°C above 1850-1900 baseline",
        "Emissions Gap: Global GHG emissions must fall 43% by 2030 to limit warming to 1.5°C",
        "Climate Vulnerability: Pakistan consistently among top 10 most vulnerable countries (Germanwatch CRI)"
      ],
      examRelevance: "Core academic source for essays on 'Climate Change: Challenges and Mitigation', Everyday Science environmental modules, and International Relations COP diplomacy.",
      downloadLink: "https://www.ipcc.ch/report/ar6/syr/",
      tags: ["Climate Change", "IPCC", "Global Warming", "Loss and Damage", "Environment"]
    },
    {
      id: "rep-fatf-plenary-2024",
      title: "FATF Consolidated Mutual Evaluation & Typologies Report",
      issuingBody: "Financial Action Task Force (FATF)",
      year: "2024",
      category: "Anti-Money Laundering & Counter-Terror Financing",
      summary: "Evaluates the implementation of the 40 Recommendations and 11 Immediate Outcomes globally. Highlights virtual asset service provider (VASP) risks, beneficial ownership transparency, and trade-based money laundering (TBML) typologies across Asia-Pacific.",
      keyStats: [
        "Pakistan Compliance: Successfully addressed all 34 action plan items across dual FATF action plans",
        "Focus Areas: Digital currency tracking, cross-border wire transfers, real estate transparency"
      ],
      examRelevance: "Critical for FIA Assistant Director, Legal, and CSS International Law/Current Affairs candidates evaluating FATF compliance architectures.",
      downloadLink: "https://www.fatf-gafi.org",
      tags: ["FATF", "Money Laundering", "Terror Financing", "FIA", "Compliance"]
    },
    {
      id: "rep-world-bank-sa-2024",
      title: "World Bank South Asia Development Update",
      issuingBody: "The World Bank Group",
      year: "2024",
      category: "Regional Economic Analysis",
      summary: "Assesses regional economic growth, trade barriers, youth underemployment, and fiscal deficits in South Asia. Explores Pakistan's structural productivity challenges, tariff distortions, and the urgent imperative of agricultural and energy market deregulation.",
      keyStats: [
        "Regional Growth Average: ~6.0% (led by India)",
        "Pakistan Growth Projection: ~2.8% to 3.2% for FY25",
        "Youth Unemployment: Over 31% of Pakistani youth neither in employment, education, or training (NEET)"
      ],
      examRelevance: "Excellent benchmark for regional economic comparisons between Pakistan, India, Bangladesh, and Sri Lanka.",
      downloadLink: "https://www.worldbank.org",
      tags: ["World Bank", "South Asia", "Regional Trade", "Productivity", "Youth"]
    }
  ],

  // 2. NEWSPAPER EDITORIALS & CRITICAL SUMMARIES
  editorials: [
    {
      id: "edt-imf-eff-2024",
      title: "Navigating the $7B IMF Extended Fund Facility: Stabilization vs Growth",
      source: "Dawn Editorial Analysis",
      author: "Economic Editorial Board",
      date: "October 2024",
      theme: "Macroeconomics & IMF Structural Reforms",
      summary: "Analyzes the conditions attached to the 37-month IMF EFF: eliminating preferential tax exemptions, bringing retail, agriculture, and real estate into the direct tax net, cost-reflective energy tariffs, and SOE governance reforms.",
      criticalArguments: [
        "Front-loaded tax measures risk exacerbating inflationary pressures on the salaried middle class if direct taxation on untaxed sectors falters.",
        "Monetary tightening must be matched with aggressive civil service and pension expenditure rationalization.",
        "Sustainable exit from recurring balance-of-payments crises requires structural export diversification rather than borrowing to service past debts."
      ],
      quoteForEssay: "'A loan program is a bridge to solvency, not an economic model; real stabilization requires dismantling the rent-seeking architecture of the elite.'",
      tags: ["IMF", "Taxation", "Circular Debt", "Economic Policy"]
    },
    {
      id: "edt-cpec-phase2-2024",
      title: "CPEC Phase-II: Transitioning from Brick-and-Mortar to Industrial Relocation",
      source: "The News International",
      author: "Diplomatic & Strategic Affairs Desk",
      date: "November 2024",
      theme: "Geoeconomics & Pak-China Strategic Partnership",
      summary: "Following the high-level bilateral summits in Beijing and Islamabad (2024), CPEC Phase-II shifts focus from power plants and motorways toward Special Economic Zones (SEZs), business-to-business (B2B) joint ventures, mining (Reko Diq), and agricultural modernization.",
      criticalArguments: [
        "SEZ operationalization has lagged due to bureaucratic bottlenecks, high utility costs, and delayed policy continuity.",
        "Security of Chinese personnel and stable regulatory environments remain non-negotiable prerequisites for private sector industrial relocation from China.",
        "Gwadar Port must be integrated into regional multimodal transport corridors to realize its potential as a transshipment hub."
      ],
      quoteForEssay: "'CPEC Phase-II cannot be won with sovereign loan guarantees; it demands competitive industrial efficiency, reliable energy tariffs, and uncompromised security.'",
      tags: ["CPEC", "China", "Gwadar", "SEZs", "Geoeconomics"]
    },
    {
      id: "edt-iwt-geopolitics-2024",
      title: "The Indus Waters Treaty Under Strain: India's Notice and Pakistan's Legal Recourse",
      source: "Express Tribune / Foreign Policy Review",
      author: "International Water Law Specialist",
      date: "September 2024",
      theme: "Water Geopolitics & Bilateral Treaties",
      summary: "Examines India's formal notices seeking modifications to the 1960 Indus Waters Treaty (IWT) pursuant to Article XII(3), alongside parallel proceedings before the Permanent Court of Arbitration (PCA) in The Hague and the Neutral Expert regarding the Kishenganga and Ratle hydroelectric projects.",
      criticalArguments: [
        "The IWT lacks any unilateral exit or cancellation clause; modifications require bilateral consensus under Article XII.",
        "India argues altered demographic and clean energy realities necessitate modernization, while Pakistan defends the treaty's strict technical annexures to safeguard its lower-riparian food security.",
        "Weaponization of transboundary water management threatens the strategic stability of South Asia."
      ],
      quoteForEssay: "'The Indus Waters Treaty has survived three major wars; its dismantlement would convert ecological vulnerability into an existential flashpoint.'",
      tags: ["Indus Waters Treaty", "Water Security", "India", "PCA", "International Law"]
    },
    {
      id: "edt-ai-governance-2024",
      title: "Artificial Intelligence, Sovereign Compute, and the Global Governance Vacuum",
      source: "Foreign Affairs Digest",
      author: "Technology & International Security Scholar",
      date: "August 2024",
      theme: "Science, AI & Strategic Competition",
      summary: "Analyzes the geopolitical race for AI foundation models, frontier semiconductor supply chains, and the bifurcation of global governance frameworks between the EU AI Act (risk-based regulations), the US market-driven approach, and the UN AI Advisory recommendations.",
      criticalArguments: [
        "Dual-use AI capabilities in autonomous weaponry and cyber defense represent a paradigm shift in asymmetric warfare.",
        "Developing nations risk permanent technological vassalage if access to compute hardware (GPUs) and sovereign data infrastructure remains concentrated in a handful of corporate monopolies.",
        "Effective AI governance requires global consensus on catastrophic risk thresholds and non-proliferation of autonomous lethal systems."
      ],
      quoteForEssay: "'The divide of the twenty-first century will not be between capital and labor, but between nations that own sovereign compute and those that merely query it.'",
      tags: ["AI", "Semiconductors", "Cyber Security", "Technology Governance"]
    },
    {
      id: "edt-loss-damage-baku-2024",
      title: "Climate Justice and the Loss and Damage Fund: From Sharm el-Sheikh to Baku",
      source: "Dawn Policy Review",
      author: "Climate Governance Analyst",
      date: "November 2024",
      theme: "Climate Diplomacy & Environmental Justice",
      summary: "Tracks the progress of the Loss and Damage Fund established at COP27 through the UAE Consensus at COP28 to COP29 in Baku. Highlights the struggle over the 'New Collective Quantified Goal' (NCQG) for climate finance and the World Bank's interim trusteeship.",
      criticalArguments: [
        "Voluntary pledges (standing at ~$700 million) represent less than 0.2% of the estimated $400 billion in annual climate damages suffered by developing countries.",
        "Pakistan must develop robust provincial disaster mitigation and carbon accounting mechanisms to access competitive climate grants rather than debt-creating loans.",
        "Climate finance must be grounded in the principle of Common But Differentiated Responsibilities (CBDR)."
      ],
      quoteForEssay: "'Pledging climate loans to countries devastated by climate floods is not humanitarian assistance; it is compounding an ecological injustice with a financial one.'",
      tags: ["Climate Justice", "COP29", "Loss and Damage", "Disaster Management"]
    }
  ],

  // 3. INTERNATIONAL TREATIES & STRATEGIC ACCORDS
  treaties: [
    {
      id: "trt-westphalia-1648",
      name: "Peace of Westphalia (1648)",
      dateSigned: "24 October 1648",
      signatories: "Holy Roman Empire, Kingdom of France, Swedish Empire",
      corePrinciple: "Sovereign Equality of States & Territorial Non-Intervention",
      significance: "Established the cornerstone of modern International Relations: the sovereign territorial state (Westphalian system). Prohibited external interference in the domestic affairs of sovereign states and established the principle of 'cuius regio, eius religio'.",
      examRelevance: "Mandatory foundation for International Relations Paper-I (Realism, Liberalism, Concept of Sovereignty, State System)."
    },
    {
      id: "trt-unclos-1982",
      name: "United Nations Convention on the Law of the Sea (UNCLOS)",
      dateSigned: "10 December 1982 (In force: 1994)",
      signatories: "169 State Parties (including Pakistan)",
      corePrinciple: "Comprehensive Maritime Zoning & Freedom of Navigation",
      significance: "Codified maritime boundaries: Internal Waters, Territorial Sea (up to 12 nautical miles), Contiguous Zone (up to 24 nautical miles), Exclusive Economic Zone (up to 200 nautical miles), and the Continental Shelf (up to 350 nautical miles). In 2015, Pakistan successfully secured approval from the UN Commission on the Limits of the Continental Shelf (CLCS) to extend its continental shelf from 200 to 350 nautical miles.",
      examRelevance: "Essential for International Law, Geography, Maritime Geopolitics, and South China Sea disputes."
    },
    {
      id: "trt-iwt-1960",
      name: "Indus Waters Treaty (IWT)",
      dateSigned: "19 September 1960 (Karachi)",
      signatories: "Pakistan (President Ayub Khan), India (PM Jawaharlal Nehru), World Bank (W.A.B. Iliff)",
      corePrinciple: "Equitable Transboundary Water Allocation",
      significance: "Allocated unrestricted water rights of the three Eastern Rivers (Ravi, Beas, Sutlej) to India, and allocated the waters of the three Western Rivers (Indus, Jhelum, Chenab) to Pakistan, subject to limited upstream run-of-the-river hydroelectric generation rights for India under strict storage specifications in Annexure D & E.",
      examRelevance: "Cornerstone topic for Pakistan Affairs, Current Affairs, and Indo-Pak bilateral relations."
    },
    {
      id: "trt-npt-1968",
      name: "Treaty on the Non-Proliferation of Nuclear Weapons (NPT)",
      dateSigned: "1 July 1968 (In force: 1970)",
      signatories: "191 States (Pakistan, India, Israel, North Korea are non-signatories)",
      corePrinciple: "Three Pillars: Non-Proliferation, Disarmament, and Peaceful Uses of Nuclear Energy",
      significance: "Classified states possessing nuclear weapons prior to 1 January 1967 as Nuclear-Weapon States (NWS: US, Russia, UK, France, China). Pakistan maintains that it will sign the NPT simultaneously with India to prevent asymmetrical strategic vulnerability.",
      examRelevance: "Core topic for International Relations, Nuclear Deterrence, and South Asian Strategic Stability."
    },
    {
      id: "trt-paris-2015",
      name: "Paris Climate Agreement (2015)",
      dateSigned: "12 December 2015 (COP21)",
      signatories: "195 UN Member States",
      corePrinciple: "Legally Binding Global Warming Limitation",
      significance: "Aims to hold the increase in global average temperature to well below 2°C above pre-industrial levels and pursue efforts to limit the temperature increase to 1.5°C through nationally determined contributions (NDCs) updated every five years.",
      examRelevance: "Central to environmental science, climate diplomacy, and sustainable development questions."
    },
    {
      id: "trt-bbnj-2023",
      name: "BBNJ Agreement (High Seas Treaty)",
      dateSigned: "19 June 2023",
      signatories: "UN Member States under UNCLOS auspices",
      corePrinciple: "Conservation & Sustainable Use of Marine Biological Diversity of Areas Beyond National Jurisdiction",
      significance: "Creates the world's first comprehensive legal mechanism to establish Marine Protected Areas (MPAs) on the high seas (which cover nearly two-thirds of the world's oceans) and mandates environmental impact assessments for commercial deep-sea activities.",
      examRelevance: "Cutting-edge international law and environmental governance topic for 2024–2026 exams."
    }
  ],

  // 4. MAPS, RIVERS, MOUNTAIN RANGES & STRATEGIC CHOKEPOINTS
  mapsAndGeography: [
    {
      id: "geo-straits-chokepoints",
      title: "Strategic Maritime Straits & Global Chokepoints",
      category: "Geopolitics & Maritime Security",
      description: "Visual and analytical breakdown of the world's most critical maritime transit choke points that carry the bulk of global energy and commercial shipping.",
      keyFeatures: [
        { name: "Strait of Hormuz", location: "Between Oman & Iran (Persian Gulf to Gulf of Oman)", importance: "Transits ~21 million barrels of crude oil daily (~20% of global petroleum)." },
        { name: "Strait of Malacca", location: "Between Malaysia, Singapore & Indonesia (Indian to Pacific Ocean)", importance: "World's busiest container shipping corridor; over 84,000 vessels annually. China's 'Malacca Dilemma'." },
        { name: "Bab-el-Mandeb", location: "Between Yemen, Djibouti & Eritrea (Red Sea to Gulf of Aden)", importance: "Southern gateway to Suez Canal. Vital for Europe-Asia maritime trade." },
        { name: "Strait of Gibraltar", location: "Between Spain & Morocco (Atlantic Ocean to Mediterranean Sea)", importance: "Only natural outlet connecting the Mediterranean directly to the Atlantic." },
        { name: "Turkish Straits (Bosphorus & Dardanelles)", location: "Turkey (Black Sea to Mediterranean Sea)", importance: "Regulated by the 1936 Montreux Convention; controls access to Black Sea ports." }
      ],
      examTip: "Examiners in CSS Current Affairs and IR expect candidates to draw schematic sketches of the Strait of Hormuz, Bab-el-Mandeb, and Malacca when discussing energy security."
    },
    {
      id: "geo-mountains-ranges",
      title: "Major Mountain Ranges & Pakistan's Northern Knot",
      category: "Physical & Strategic Geography",
      description: "Detailed overview of the world's highest collision mountain systems and the strategic junction where three great ranges converge in Northern Pakistan.",
      keyFeatures: [
        { name: "The Pamir Knot (The Roof of the World)", location: "Northern Pakistan, Tajikistan, China, Afghanistan", importance: "Orogenic junction from which the Himalayas, Karakoram, Hindu Kush, Tian Shan, and Kunlun ranges radiate." },
        { name: "Karakoram Range", location: "Gilgit-Baltistan (Pakistan), Ladakh, Xinjiang (China)", importance: "Contains K2 (8,611m, 2nd highest peak on Earth), Siachen Glacier (76 km, world's 2nd longest non-polar glacier), and the Karakoram Highway (KKH)." },
        { name: "Himalayas", location: "Pakistan, India, Nepal, Bhutan, China", importance: "Young fold mountain system home to Nanga Parbat (8,126m, Killer Mountain) marking the western anchor of the Himalayas." },
        { name: "Hindu Kush", location: "Khyber Pakhtunkhwa (Chitral) into Afghanistan", importance: "Highest peak: Tirich Mir (7,708m). Contains historic Khyber and Broghil passes." },
        { name: "Global Mountain Systems", location: "Worldwide", importance: "Andes (South America, longest continental range ~7,000 km), Rockies (North America), Alps (Europe), Urals (dividing Europe and Asia)." }
      ],
      examTip: "Essential for Geography, Everyday Science (plate tectonics), and Pakistan Affairs strategic defense questions."
    },
    {
      id: "geo-river-basins",
      title: "Indus River Basin System & Great World Rivers",
      category: "Hydrology & Geopolitics",
      description: "Comprehensive hydrological mapping of the Indus Basin—the lifeline of Pakistan's agriculture and energy security—alongside global river systems.",
      keyFeatures: [
        { name: "Indus River (Sindhu / Abasin)", length: "Approx. 3,180 km", origin: "Lake Manasarovar (Tibetan Plateau)", outfall: "Arabian Sea (Thatta delta)", tributaries: "Western: Kabul, Swat, Kurram, Gomal. Eastern: Jhelum, Chenab, Ravi, Sutlej." },
        { name: "Panjnad & The Five Rivers", location: "Mithankot, Punjab", importance: "Confluence point where the five rivers of Punjab merge before joining the main stem of the Indus." },
        { name: "Major Barrages & Dams", infrastructure: "Tarbela Dam (largest earth-filled dam in the world), Mangla Dam (Jhelum River), Sukkur Barrage, Kotri Barrage, Guddu Barrage." },
        { name: "World's Major Rivers", comparison: "Nile (longest, ~6,650 km), Amazon (largest discharge volume), Yangtze (longest in Asia), Mississippi-Missouri (North America), Danube (Europe)." }
      ],
      examTip: "Understand barrage and canal off-takes to answer questions on water logging, salinity, and inter-provincial water distribution under the 1991 Water Apportionment Accord."
    }
  ],

  // 5. HIGH-YIELD VOCABULARY LIST (CSS / GRE 500 SAMPLES)
  vocabularyList: [
    { word: "ABNEGATION", pos: "Noun", def: "The act of renouncing or rejecting something, especially self-interest or personal comfort.", syn: "Renunciation, repudiation, self-denial", ant: "Self-indulgence, assertion", example: "The ascetic leader's abnegation of personal wealth won the trust of the electorate." },
    { word: "BELLICOSE", pos: "Adjective", def: "Demonstrating aggression and willingness to fight; warlike.", syn: "Belligerent, pugnacious, combative", ant: "Pacifist, peaceable, conciliatory", example: "The diplomat warned that bellicose rhetoric across the border could escalate into accidental conflict." },
    { word: "CHICANERY", pos: "Noun", def: "The use of trickery or sophistry to achieve a political, financial, or legal purpose.", syn: "Subterfuge, artifice, duplicity", ant: "Candor, forthrightness, probity", example: "The forensic auditor discovered financial chicanery hidden behind multiple shell company subsidiaries." },
    { word: "DESUETUDE", pos: "Noun", def: "A state of cessation, disuse, or inactivity (especially of laws or customs).", syn: "Disuse, obsolescence, dormancy", ant: "Enactment, operation, revival", example: "The archaic sedition statute had fallen into desuetude before it was revived for political prosecution." },
    { word: "EQUANIMITY", pos: "Noun", def: "Mental calmness, composure, and evenness of temper, especially in a difficult situation.", syn: "Serenity, aplomb, sangfroid", ant: "Agitation, perturbation, discomposure", example: "The chief justice maintained absolute equanimity despite intense political pressure outside the court." },
    { word: "FASTIDIOUS", pos: "Adjective", def: "Very attentive to and concerned about accuracy and detail; meticulous.", syn: "Scrupulous, punctilious, painstaking", ant: "Slipshod, careless, negligent", example: "The investigating officer was fastidious in preserving the chain of custody for digital evidence." },
    { word: "GRANDILOQUENT", pos: "Adjective", def: "Pompous or extravagant in language, style, or manner, especially in a way that is intended to impress.", syn: "Bombastic, magniloquent, pretentious", ant: "Unpretentious, plainspoken, concise", example: "The candidate's grandiloquent promises failed to address the practical fiscal constraints of the budget." },
    { word: "HETERODOX", pos: "Adjective", def: "Not conforming with accepted or orthodox standards or beliefs.", syn: "Unconventional, dissident, iconoclastic", ant: "Orthodox, canonical, traditional", example: "The economist proposed heterodox monetary measures to tackle stubborn stagflation." },
    { word: "IMPECUNIOUS", pos: "Adjective", def: "Having little or no money; penniless; poor.", syn: "Indigent, destitute, penurious", ant: "Affluent, wealthy, opulent", example: "The state legal aid bureau provided defense counsel to impeccunious suspects awaiting trial." },
    { word: "LACONIC", pos: "Adjective", def: "Using very few words; concise to the point of seeming rude or mysterious.", syn: "Terse, succint, pithy", ant: "Verbose, garrulous, loquacious", example: "The director's laconic telegram simply stated: 'Operation successful; suspect apprehended.'" },
    { word: "MENDACIOUS", pos: "Adjective", def: "Not telling the truth; lying; deceitful.", syn: "Untruthful, disingenuous, perfidious", ant: "Veracious, truthful, candid", example: "The witness was prosecuted for perjury after delivering a completely mendacious testimony." },
    { word: "OBDURATE", pos: "Adjective", def: "Stubbornly refusing to change one's opinion or course of action.", syn: "Intransigent, obstinate, unyielding", ant: "Malleable, compliant, amenable", example: "Despite mounting empirical evidence, the minister remained obdurate in defending the regressive tax policy." },
    { word: "PELLUCID", pos: "Adjective", def: "Translucently clear; easily understood.", syn: "Limpid, lucid, crystalline", ant: "Turbid, opaque, abstruse", example: "The High Court delivered a pellucid judgment clarifying the constitutional separation of powers." },
    { word: "RECALCITRANT", pos: "Adjective", def: "Having an obstinately uncooperative attitude toward authority or discipline.", syn: "Refractory, contumacious, defiant", ant: "Compliant, submissive, obedient", example: "The court issued a contempt notice to the recalcitrant department secretary for ignoring judicial orders." },
    { word: "SAGACIOUS", pos: "Adjective", def: "Having or showing keen mental discernment and good judgment; shrewd.", syn: "Wise, discerning, judicious", ant: "Foolish, obtuse, vacuous", example: "The state was saved from default by the sagacious debt-restructuring negotiations of the finance team." }
  ],

  // 6. SOLVED 20-MARK DESCRIPTIVE QUESTIONS
  solvedQuestions: [
    {
      id: "sol-q-18th-amendment",
      subject: "Pakistan Affairs",
      marks: 20,
      question: "The 18th Constitutional Amendment has decentralized administrative and legislative authority, yet triggered acute inter-provincial fiscal dilemmas. Critically evaluate.",
      structure: [
        "I. Introduction: The 18th Amendment as a milestone in constitutional federalism.",
        "II. Core Devolutions: Abolition of the Concurrent List & institutional empowerment of CCI (Art 153/154).",
        "III. Fiscal Dimensions: Article 160(3B) non-reduction clause & the 7th NFC Award dynamics.",
        "IV. Inter-Provincial Dilemmas: Federal deficit burden, provincial capacity constraints in health/education, and agriculture income tax gaps.",
        "V. Policy Recommendations: Harmonizing provincial fiscal frameworks, capacity building, and strengthening the CCI Secretariat.",
        "VI. Conclusion: Functional federalism requires cooperative fiscal responsibility, not recentralization."
      ],
      sampleOpening: "The passage of the 18th Constitutional Amendment Act, 2010, represents the most profound structural realignment of statecraft in Pakistan's post-1973 constitutional trajectory. By abolishing the Concurrent Legislative List and transferring 47 subjects to provincial assemblies, the amendment sought to fulfill the historic promise of provincial autonomy. However, the accompanying fiscal architecture—anchored in the 7th NFC Award and protected by Article 160(3B)—has created an asymmetrical fiscal imbalance where the federal government retains massive debt-servicing and defense obligations while the provinces control over 57.5% of the divisible pool without corresponding tax-mobilization efforts.",
      keyArguments: [
        "Federal Vertical Imbalance: The Centre bears ~100% of defense, external debt servicing, and federal pensions while retaining only ~42.5% of the federal divisible pool.",
        "Provincial Revenue Mobilization: Provincial tax revenue accounts for less than 1% of GDP; agricultural income tax and urban immovable property tax remain vastly under-collected.",
        "Institutional Redress: The Council of Common Interests (CCI) must be fortified with a permanent independent secretariat under the Ministry of Inter-Provincial Coordination."
      ]
    },
    {
      id: "sol-q-cpec-geoeconomics",
      subject: "Current Affairs",
      marks: 20,
      question: "Evaluate the strategic and economic significance of CPEC Phase-II in the backdrop of changing regional geo-economics and US-China competition.",
      structure: [
        "I. Introduction: Shift from regional geopolitical security to geo-economic interconnectivity.",
        "II. CPEC Phase-I Review: Infrastructure, motorways, and early-harvest power projects.",
        "III. CPEC Phase-II Architecture: Special Economic Zones (SEZs), industrial relocation, agriculture, and mining.",
        "IV. Regional Geopolitical Counter-Pacts: The Quad, IMEC (India-Middle East-Europe Corridor), and US Indo-Pacific strategy.",
        "V. Strategic Challenges for Pakistan: Debt sustainability, security of personnel, and regulatory hurdles.",
        "VI. Way Forward & Policy Framework.",
        "VII. Conclusion."
      ],
      sampleOpening: "As the global order transitions from unipolarity toward contested multipolarity, geoeconomics has displaced traditional military alliances as the primary arena of great power competition. Within this shifting paradigm, the China-Pakistan Economic Corridor (CPEC)—the flagship corridor of China's Belt and Road Initiative (BRI)—is transitioning from Phase-I (infrastructure and energy generation) to Phase-II (industrialization, agricultural modernization, and mineral development). In the shadow of counter-initiatives like the India-Middle East-Europe Economic Corridor (IMEC), CPEC Phase-II represents both an existential economic opportunity and a geopolitical balancing test for Pakistan.",
      keyArguments: [
        "Industrial Synergy: Shifting focus from sovereign loan-financed infrastructure to private Business-to-Business (B2B) joint ventures.",
        "Gwadar Port: Leveraging deep-sea transshipment to bypass the congested Malacca chokepoint.",
        "Diplomatic Balancing: Maintaining economic corridors with China while deepening bilateral trade and climate ties with the United States and European Union."
      ]
    }
  ],

  // 7. DOWNLOADABLE PDF MATERIAL DIRECTORY
  downloadablePdfs: [
    {
      id: "pdf-aml-act-2010",
      title: "Anti-Money Laundering Act, 2010 (As Amended upto September 2020)",
      category: "Federal Statutes & Legal Frameworks",
      fileSize: "1.85 MB",
      pages: "46 Pages",
      fileName: "Anti_Money_Laundering_Act_2010_Amended_2020.pdf",
      filePath: "acts-rules.html#aml_act_2010",
      description: "Official statutory text of Act No. VII of 2010 as amended by Act XXI of 2020. Complete provisions on money laundering offence, FMU functions, CTR/STR thresholds, provisional attachment, predicate offences in Schedule-I, and FATF compliance.",
      tags: ["AML Act", "FMU", "FATF", "FIA", "FPSC", "Bare Acts"]
    },
    {
      id: "pdf-civil-servants-act-1973",
      title: "Civil Servants Act, 1973 (Act No. LXXI of 1973) & Statutory Rules",
      category: "Civil Service Laws & Regulations",
      fileSize: "2.10 MB",
      pages: "45 Pages",
      fileName: "Civil_Servants_Act_1973_and_Rules_Compendium.pdf",
      filePath: "acts-rules.html#civil_servants_act_1973",
      description: "Complete foundational Act governing federal civil servants. Includes tenure during pleasure of President, seniority (Section 8), promotion, retirement at 60 / 20 years, along with APT Rules 1973 and International Deputation Rules 2016.",
      tags: ["Civil Servants Act", "FPSC", "CSS", "APT Rules", "Bare Acts"]
    },
    {
      id: "pdf-civil-servants-ed-rules-2020",
      title: "Civil Servants (Efficiency and Discipline) Rules, 2020 (S.R.O. 1331(I)/2020)",
      category: "Civil Service Laws & Regulations",
      fileSize: "1.15 MB",
      pages: "13 Pages",
      fileName: "Civil_Servants_Efficiency_and_Discipline_Rules_2020.pdf",
      filePath: "acts-rules.html#civil_servants_ed_rules_2020",
      description: "Official Gazette notification of the modern disciplinary rules. Covers minor and major penalties, suspension rules, time-bound inquiry procedures (60 days), mandatory dismissal for corruption, and complete bar on legal counsel.",
      tags: ["E&D Rules 2020", "Discipline", "Civil Service", "FPSC", "Rules"]
    },

  {
    "id": "pdf-10k-gk",
    "title": "10,000 General Knowledge Questions & Answers Compendium",
    "category": "General Knowledge",
    "fileSize": "1.07 MB",
    "pages": "220+ Pages",
    "fileName": "10000_gk_qa.pdf",
    "filePath": "resources/10000_gk_qa.pdf",
    "description": "Exhaustive question bank covering world geography, historic treaties, scientific discoveries, UN organizations, heads of states, and international awards. Crucial for FPSC, PPSC, and NTS screening tests.",
    "tags": [
      "GK",
      "World Geography",
      "History",
      "FPSC",
      "PPSC"
    ]
  },
  {
    "id": "pdf-5k-exam",
    "title": "5,000 High-Yield Competitive Examination MCQs Bank",
    "category": "Screening & One-Paper MCQs",
    "fileSize": "1.18 MB",
    "pages": "180+ Pages",
    "fileName": "5000_mcqs_exam.pdf",
    "filePath": "resources/5000_mcqs_exam.pdf",
    "description": "Curated multi-subject MCQ compendium encompassing Pakistan Affairs, Everyday Science, Islamiyat, and Current Events formatted for rapid revision before competitive screening exams.",
    "tags": [
      "High-Yield",
      "Screening Tests",
      "Pakistan Affairs",
      "Science"
    ]
  },
  {
    "id": "pdf-eng-1k-repeated",
    "title": "1,000 Most Repeated English Grammar, Idioms & Prepositions",
    "category": "English Précis & Composition",
    "fileSize": "1.99 MB",
    "pages": "150+ Pages",
    "fileName": "english_1000_repeated.pdf",
    "filePath": "resources/english_1000_repeated.pdf",
    "description": "Top 1,000 past-paper questions from CSS, PMS, and FIA examinations on preposition usage, subject-verb agreement, idioms, phrasal verbs, and sentence correction rules.",
    "tags": [
      "English",
      "Grammar",
      "Prepositions",
      "Idioms",
      "Past Papers"
    ]
  },
  {
    "id": "pdf-gen-sci-capsule",
    "title": "General Science & Ability Complete Capsule Notes",
    "category": "General Science & Ability",
    "fileSize": "1.32 MB",
    "pages": "110+ Pages",
    "fileName": "General_Science_Capsule_Notes.pdf",
    "filePath": "resources/General_Science_Capsule_Notes.pdf",
    "description": "Systematic revision guide covering physical sciences, astronomy, atmospheric layers, modern communication technologies, remote sensing, and environmental pollution dynamics.",
    "tags": [
      "Science Capsule",
      "Everyday Science",
      "CSS Compulsory",
      "Physics",
      "Biology"
    ]
  },
  {
    "id": "pdf-sci-instruments",
    "title": "Scientific Instruments, Measurement Units & Inventions Master Guide",
    "category": "Everyday Science",
    "fileSize": "982 KB",
    "pages": "65+ Pages",
    "fileName": "everyday_science_instruments.pdf",
    "filePath": "resources/everyday_science_instruments.pdf",
    "description": "Complete glossary of scientific instruments (Barometer, Hygrometer, Spectrometer), SI measurement units, physical constants, and landmark biological and astronomical discoveries.",
    "tags": [
      "Instruments",
      "Units",
      "Inventions",
      "Everyday Science"
    ]
  },
  {
    "id": "pdf-master-gk-comp-eng",
    "title": "Comprehensive Practice Bank: GK, Computer Science & English",
    "category": "Computer & General Knowledge",
    "fileSize": "Interactive Module",
    "pages": "6,000+ MCQs",
    "fileName": "Interactive_GK_Computer_English",
    "filePath": "quiz.html?categoryName=General%20Knowledge",
    "description": "All-in-one interactive question bank for computer fundamentals, networking, cybersecurity protocols, MS Office shortcuts, modern world history, and advanced English verbal aptitude.",
    "tags": [
      "Computer Science",
      "General Knowledge",
      "GK",
      "Cybersecurity",
      "Aptitude"
    ]
  },
  {
    "id": "pdf-eng-vocab-adv",
    "title": "Advanced English Vocabulary, Synonyms & Antonyms Handbook",
    "category": "English Vocabulary",
    "fileSize": "87 KB",
    "pages": "40+ Pages",
    "fileName": "english_vocab.pdf",
    "filePath": "resources/english_vocab.pdf",
    "description": "Compact and powerful vocabulary booklet featuring GRE-level words, high-frequency CSS adjectives, contextual sentence illustrations, and etymological word roots.",
    "tags": [
      "Vocabulary",
      "GRE",
      "Synonyms",
      "Antonyms",
      "CSS English"
    ]
  },
  {
    "id": "pdf-eng-mcqs-core",
    "title": "Core English Sentence Correction & Grammatical Errors Masterfile",
    "category": "English Précis & Composition",
    "fileSize": "365 KB",
    "pages": "50+ Pages",
    "fileName": "english_mcqs.pdf",
    "filePath": "resources/english_mcqs.pdf",
    "description": "Focuses on structural syntactical faults: dangling modifiers, faulty parallelism, pronoun-antecedent disagreements, and subtle subjunctive mood errors.",
    "tags": [
      "Sentence Correction",
      "Syntax",
      "Grammar",
      "FPSC"
    ]
  },
  {
    "id": "pdf-eng-mcqs-prep",
    "title": "Prepositional Idioms, Phrasal Verbs & Pair of Words Exercises",
    "category": "English Précis & Composition",
    "fileSize": "346 KB",
    "pages": "48+ Pages",
    "fileName": "english_mcqs_2.pdf",
    "filePath": "resources/english_mcqs_2.pdf",
    "description": "Targeted worksheets on tricky preposition combinations, confusing pairs of words (discrete vs discreet, affect vs effect), and idiomatic phrasal expressions.",
    "tags": [
      "Pair of Words",
      "Prepositions",
      "Phrasal Verbs",
      "CSS Précis"
    ]
  }
],

  // 8. SUBJECT-WISE NOTES & CAPSULES
  subjectNotes: [
    {
      id: "note-civil-service-acts-mastery",
      subject: "Civil Service Laws & Federal Statutes",
      title: "Federal Acts & Civil Service Rules High-Yield Summary (AML 2010, CSA 1973, E&D 2020)",
      summary: "Comprehensive analytical synthesis of federal statutes governing public service appointments, disciplinary inquiries, financial regulations, anti-money laundering investigations, and provincial quota distribution.",
      coreThemes: [
        "Anti-Money Laundering Act 2010: Rigorous imprisonment 1-10 years, fine up to Rs. 25M (Rs. 100M for corporate), CTR in 7 working days, STR/CTR records kept for 10 years, provisional attachment for 180+180 days.",
        "Civil Servants Act 1973: Seniority is not a vested right (Sec 8), CSB for BS 20-21 chaired by Chairman FPSC, retirement at 60 or after 20 years qualifying service, bar on civil court jurisdiction (Sec 23B).",
        "E&D Rules 2020: Replaced 1973 rules, initial suspension max 120 days, defense reply in 10-14 days, inquiry completed in 60 days, dismissal mandatory for grave corruption.",
        "APT Rules 1973 Quotas: Open Merit 7.5%, Punjab 50%, Sindh 19% (Urban 7.6%, Rural 11.4%), KP 11.5%, Balochistan 6%, Ex-FATA 3%, GB 1%, AJK 2%. Date of birth once recorded is final.",
        "International Deputation 2016: Minimum 5 years cadre service, 3 years cooling-off, qualifying test 60%, 80:20 weightage, max 5 years tenure before placement on static list."
      ],
      examinerTips: "Memorize exact statutory timelines: CTR = 7 working days, show cause = 10-14 days, inquiry completion = 60 days, authority decision = 30 days. Always cite the exact Section/Rule in your answers.",
      recommendedDiagrams: "Flowchart of E&D Disciplinary Process (Show Cause -> Inquiry -> Report -> Show Cause -> Decision), Provincial Quota Pie Chart."
    },

  {
    "id": "sub-pak-affairs",
    "subject": "Pakistan Affairs (CSS / PMS)",
    "title": "Constitutional Development & Federalism in Pakistan (1947–Present)",
    "summary": "Critical examination of the evolution of constitutional structures from the Government of India Act 1935, Objective Resolution 1949, through the 1956, 1962, and 1973 Constitutions up to the 18th, 25th, and 26th Amendments.",
    "coreThemes": [
      "Objective Resolution (1949): Bridge between Islamic jurisprudence and modern constitutional democracy.",
      "1973 Constitution: Parliamentary supremacy, bicameral legislature (Senate as federal guarantor), and fundamental rights safeguards.",
      "The 18th Amendment (2010): Devolution of 47 concurrent subjects, NFC Award non-reduction clause (Art 160-3B), and Council of Common Interests (CCI) empowerment.",
      "The 25th Amendment (2018): FATA-KP merger and the abolition of Frontier Crimes Regulation (FCR 1901)."
    ],
    "examinerTips": "Do not narrate historical chronologies blindly. Always contrast institutional power dynamics between the civil-military bureaucracy and elected parliaments. Use constitutional articles (e.g. Art 58-2(b), Art 8, Art 153, Art 160) to substantiate every point.",
    "recommendedDiagrams": "Diagram of Bicameral Federal Structure, 7th NFC Horizontal Sharing Formula (82% Population, 10.3% Poverty, 5% Revenue, 2.7% Land Area)."
  },
  {
    "id": "sub-current-affairs",
    "subject": "Current Affairs & Geopolitics",
    "title": "Great Power Rivalry in the Indo-Pacific & Pakistan's Strategic Equilibrium",
    "summary": "Analysis of the US 'Pivot to Asia' / Indo-Pacific Strategy, QUAD, AUKUS, and the Indian Ocean naval buildup vs. China's Belt and Road Initiative (BRI) and CPEC. Examines how Pakistan can maintain geoeconomic neutrality without being forced into an exclusive geopolitical camp.",
    "coreThemes": [
      "The Malacca Dilemma: China's vulnerability to maritime blockades and the strategic logic of Gwadar Port.",
      "US Strategic Partnerships: Indo-US Defense Pacts (LEMOA, COMCASA, BECA) and the militarization of the Indian Ocean.",
      "Geoeconomics over Geopolitics: National Security Policy (NSP) 2022-2026 principles—connectivity, development, and non-bloc diplomacy.",
      "Hedging Strategy: Diversifying partnerships with EU (GSP+ status), GCC investments (SIFC initiatives), and Central Asian Republics (TAPI, CASA-1000)."
    ],
    "examinerTips": "Avoid emotional or one-sided narratives. Present arguments through the analytical lenses of Structural Realism (Mearsheimer) and Liberal Institutionalism (Keohane). Always cite specific trade volumes, corridors, and treaty arrangements.",
    "recommendedDiagrams": "Map of Maritime Chokepoints (Malacca, Hormuz, Bab-el-Mandeb), Regional Interconnectivity Corridors."
  },
  {
    "id": "sub-gsa-science",
    "subject": "General Science & Ability",
    "title": "Climate Change Dynamics, Renewable Transition & Water Security",
    "summary": "Comprehensive analytical capsule on anthropogenic climate change, greenhouse gas mechanisms, IPCC AR6 projections, Pakistan's climate vulnerability (top 10 most affected despite <0.9% global emissions), and hydrological risks to the Indus Basin.",
    "coreThemes": [
      "Atmospheric Physics of Greenhouse Effect: Radiative forcing of CO2, CH4, and N2O; Global Warming Potential (GWP) metrics.",
      "Glacial Lake Outburst Floods (GLOFs): Third Pole cryosphere retreat in the Hindukush-Karakoram-Himalayan (HKH) belt.",
      "National Water Policy 2018: Storage capacity limitations (30 days vs 1000 days in Colorado Basin), water productivity, and canal lining.",
      "Renewable Energy Target (ARE Policy): Accelerating solar, wind, and run-of-river hydro to 60% of national energy mix by 2030."
    ],
    "examinerTips": "In Everyday Science questions, draw neat labelled diagrams for every 5-mark part (e.g. Greenhouse effect schematic, water filtration cycle). Label units precisely (PPM for carbon concentrations, BCM/MAF for water volumes).",
    "recommendedDiagrams": "Greenhouse effect radiative balance chart, Glacier retreat & GLOF formation cycle diagram."
  },
  {
    "id": "sub-ir-theory",
    "subject": "International Relations",
    "title": "Nuclear Deterrence, Strategic Stability & Hybrid Warfare in South Asia",
    "summary": "Theoretical appraisal of classical deterrence (Kenneth Waltz) vs deterrence instability (Scott Sagan) applied to the Indo-Pakistani nuclear dyad. Analyzes Cold Start Doctrine, Full Spectrum Deterrence (tactical nuclear weapons like Nasr), Ballistic Missile Defense (BMD), and the destabilizing rise of 5th Generation / Hybrid Warfare.",
    "coreThemes": [
      "Stability-Instability Paradox (Glenn Snyder): Strategic nuclear parity prevents total war but incentivizes low-intensity sub-conventional friction.",
      "Full Spectrum Deterrence: Countering sub-conventional and conventional operational doctrines along the short, medium, and long-range vectors.",
      "Cyber & Information Warfare: Disinformation campaigns (EU DisinfoLab revelations), kinetic drone warfare, and satellite reconnaissance.",
      "Arms Control Breakdown: Degradation of bilateral confidence-building measures (CBMs) and the weaponization of trade/water diplomacy."
    ],
    "examinerTips": "Never answer IR questions purely with news reporting. Frame the answer using academic IR frameworks: Security Dilemma (Jervis), Balance of Power (Morgenthau), and Offense-Defense Balance (Van Evera).",
    "recommendedDiagrams": "Escalation Ladder (Herman Kahn adapted to South Asia), Deterrence Matrix."
  },
  {
    "id": "sub-pub-gov",
    "subject": "Governance & Public Policies",
    "title": "Civil Service Reforms, Institutional Decay & Accountability Regimes",
    "summary": "In-depth diagnostic of Pakistan's bureaucratic governance, tenure insecurity, politicization, judicial overreach vs executive discretion, and anti-corruption machinery (NAB, FIA, Provincial Anti-Corruption Establishments).",
    "coreThemes": [
      "Structural Pathologies: Generalist hegemony vs domain specialization, outmoded Secretariat Instructions, and stagnation of the Central Superior Services structure.",
      "Dr. Ishrat Husain Reform Committee Recommendations: 4-tier recruitment, open competitive selection for specialized ministries, and performance-based compensation.",
      "Anti-Corruption Jurisprudence: Analysis of National Accountability Ordinance (NAO 1999) amendments, plea bargains, voluntary returns, and misuse of authority definitions.",
      "E-Governance & Digital Delivery: Citizen portals, digital land record management, automation of public procurement (E-Pak Acquisition and Disposal System - EPADS)."
    ],
    "examinerTips": "Distinguish between administrative accountability, financial accountability, and political accountability. Highlight institutional checks and balances under Articles 175-212 of the Constitution.",
    "recommendedDiagrams": "Accountability Triad (Auditor General, Public Accounts Committee, Investigating Agencies), Policy Formulation Cycle."
  }
]
};

// Normalize and enrich data items for universal multi-view compatibility
(function normalizeDigitalLibraryData() {
  const d = window.DIGITAL_LIBRARY_DATA;
  if (!d) return;

  if (Array.isArray(d.treaties)) {
    d.treaties.forEach(t => {
      t.title = t.title || t.name || '';
      t.name = t.name || t.title || '';
      t.year = t.year || (t.dateSigned ? (t.dateSigned.match(/\d{4}/) ? t.dateSigned.match(/\d{4}/)[0] : t.dateSigned) : '');
      t.summary = t.summary || t.significance || '';
      t.significance = t.significance || t.summary || '';
      t.type = t.type || 'International Accord';
      t.pakistanRelevance = t.pakistanRelevance || t.examRelevance || '';
      t.examRelevance = t.examRelevance || t.pakistanRelevance || '';
      if (!t.coreProvisions || !t.coreProvisions.length) {
        t.coreProvisions = [t.corePrinciple || 'Sovereignty & State Consensus'];
      }
      if (!t.tags || !t.tags.length) {
        t.tags = ['International Law', 'Treaty', 'Strategic Accord', 'Global Diplomacy'];
      }
    });
  }

  if (Array.isArray(d.mapsAndGeography)) {
    d.mapsAndGeography.forEach(m => {
      m.examinerTip = m.examinerTip || m.examTip || '';
      m.examTip = m.examTip || m.examinerTip || '';
      m.keyItems = m.keyItems || m.keyFeatures || [];
      m.keyFeatures = m.keyFeatures || m.keyItems || [];
      m.keyItems.forEach(item => {
        item.significance = item.significance || item.importance || '';
        item.importance = item.importance || item.significance || '';
      });
    });
  }

  if (Array.isArray(d.editorials)) {
    d.editorials.forEach(e => {
      e.coreArgument = e.coreArgument || e.quoteForEssay || e.summary || '';
      e.quoteForEssay = e.quoteForEssay || e.coreArgument || '';
      e.keyPillars = e.keyPillars || e.criticalArguments || [];
      e.criticalArguments = e.criticalArguments || e.keyPillars || [];
      e.examUtility = e.examUtility || e.theme || '';
      e.theme = e.theme || e.examUtility || '';
    });
  }

  if (Array.isArray(d.solvedQuestions)) {
    d.solvedQuestions.forEach(q => {
      q.structure = q.structure || [];
      q.keyArguments = q.keyArguments || [];
    });
  }
})();

