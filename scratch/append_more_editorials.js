const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/js/data_editorial_explainers.js');
global.window = {};
require(targetPath);
const editorials = window.EDITORIAL_EXPLAINERS_DATA;

const extraEditorials = [
  {
    id: "ed-climate-loss-damage-2024",
    title: "Climate Reparations & Sovereign Vulnerability: Operationalizing the Loss and Damage Fund",
    newspaper: "Dawn",
    author: "Malik Amin Aslam & Dr. Adil Najam",
    date: "July 19, 2024",
    subject: "Environmental Science & Current Affairs",
    category: "Climate Diplomacy",
    readTime: "7 min read",
    tags: ["Climate Change", "COP28", "Loss and Damage", "Indus Basin", "GLOF", "Climate Finance"],
    background: "Pakistan emits less than 0.9% of global greenhouse gases, yet ranks consistently among the top ten countries most severely affected by extreme climate catastrophes on the Global Climate Risk Index. The catastrophic 2022 super-floods submerged one-third of the country, affected 33 million citizens, and inflicted over $30 billion in economic loss and reconstruction needs. At COP27 in Sharm El-Sheikh, Pakistan led the G-77 plus China coalition to secure a historic breakthrough: the formal agreement to establish a 'Loss and Damage Fund'. At COP28 in Dubai (2023) and throughout 2024, the fund was officially operationalized under interim World Bank hosting, but pledges remain meager (~$700 million) compared to the hundreds of billions required annually by climate-vulnerable developing states.",
    keyArguments: [
      "The Moral & Legal Asymmetry of Global Emissions: Historical emissions by industrialized nations (G7 accounts for ~50% of cumulative CO2 since 1750) drive current atmospheric warming, while low-emitting developing nations bear the brunt of climate devastation.",
      "The Pledging Deficit: Global pledges of ~$700 million to the Loss and Damage Fund represent less than 0.2% of the estimated $400 billion in annual climate damages incurred by developing nations.",
      "The Cryosphere Emergency in Pakistan: The Hindu Kush-Karakoram-Himalayan (HKH) range—known as the 'Third Pole' containing over 7,200 glaciers—is melting at accelerating rates, creating over 3,000 glacial lakes, with 33 identified as posing imminent Glacial Lake Outburst Flood (GLOF) risks.",
      "Loss and Damage vs. Adaptation: Loss and damage represents permanent irreversible harm (lost lives, salinized agricultural land, submerged coastlines) that occurs when mitigation and adaptation limits have been exceeded.",
      "Innovative Climate Financing Mechanisms: Debt-for-Climate Swaps, sovereign catastrophe bonds, and international maritime and aviation bunker fuel carbon levies must replace slow bilateral grant handouts."
    ],
    vocabulary: [
      {
        word: "INEXORABLE",
        pos: "Adjective",
        def: "Impossible to stop or prevent; relentless.",
        syn: "Relentless, unstoppable, inevitable",
        ant: "Preventable, flexible, halting",
        example: "The inexorable retreat of Himalayan glaciers threatens long-term agricultural water availability across the Indus Basin."
      },
      {
        word: "PARSIMONIOUS",
        pos: "Adjective",
        def: "Unwilling to spend money or use resources; stingy or frugal to an extreme degree.",
        syn: "Miserly, stingy, tightfisted",
        ant: "Generous, munificent, lavish",
        example: "Developing nations condemned the parsimonious climate finance pledges offered by wealthy historical emitters."
      },
      {
        word: "REPARATION",
        pos: "Noun",
        def: "The making of amends for a wrong one has done, by paying money to or otherwise helping those who have been wronged.",
        syn: "Compensation, restitution, redress",
        ant: "Penalty, deprivation, expropriation",
        example: "Civil society advocates framed the Loss and Damage Fund as climate reparations rather than benevolent foreign charity."
      },
      {
        word: "CATASTROPHIC",
        pos: "Adjective",
        def: "Involving or causing sudden great damage or suffering; disastrous.",
        syn: "Disastrous, calamitous, cataclysmic",
        ant: "Beneficial, fortunate, salutary",
        example: "The 2022 super-floods presented a catastrophic demonstration of human vulnerability in an overheating biosphere."
      }
    ],
    analyticalPoints: {
      theoreticalLens: "Common But Differentiated Responsibilities and Respective Capabilities (CBDR-RC): Codified in the 1992 UNFCCC and 2015 Paris Agreement (Article 8), CBDR-RC affirms that while all nations must act on climate change, developed countries bear primary historical responsibility to provide finance and technology transfer.",
      counterPerspective: "Developed countries (led by the US) fiercely resist liability and legal compensation frameworks, fearing open-ended sovereign litigation in international tribunals (e.g. ICJ advisory opinion proceedings initiated by Vanuatu).",
      examRecommendations: "In competitive exam essays on climate change, structure the answer around the three pillars: (1) Mitigation (emissions reduction); (2) Adaptation (resilient infrastructure, sea-walls, drought-resistant seeds); (3) Loss & Damage (restitution for residual unavoidable harm)."
    },
    relatedMcqs: [
      {
        question: "At which UN Climate Change Conference (COP) was the historic breakthrough decision to establish a dedicated 'Loss and Damage Fund' formally agreed?",
        options: ["COP26 in Glasgow (2021)", "COP27 in Sharm El-Sheikh (2022)", "COP28 in Dubai (2023)", "COP21 in Paris (2015)"],
        correct: 1,
        explanation: "The historic decision to establish the Loss and Damage Fund was spearheaded by Pakistan (chairing G-77+China) and adopted at COP27 in Sharm El-Sheikh, Egypt, in November 2022."
      },
      {
        question: "Which international financial institution was selected at COP28 to serve as the interim trustee and host of the Loss and Damage Fund for a four-year period?",
        options: ["International Monetary Fund (IMF)", "World Bank", "Asian Development Bank (ADB)", "Green Climate Fund (GCF)"],
        correct: 1,
        explanation: "At COP28 in Dubai, it was agreed that the World Bank would serve as the interim host and trustee of the Loss and Damage Fund for its initial four years."
      },
      {
        question: "How many glaciers are estimated to be present within Pakistan's northern mountain territories (HKH region), representing the largest reservoir of ice outside polar regions?",
        options: ["Approx. 700", "Approx. 2,500", "Over 7,200", "Over 15,000"],
        correct: 2,
        explanation: "Pakistan contains more than 7,200 known glaciers in the Himalayas, Karakoram, and Hindu Kush ranges—more than any other country outside the polar cryosphere."
      },
      {
        question: "What percentage of cumulative global carbon dioxide emissions since the Industrial Revolution (1750) has Pakistan contributed?",
        options: ["Less than 0.9%", "Approx. 3.5%", "Approx. 6.2%", "Approx. 12%"],
        correct: 0,
        explanation: "Pakistan's historical contribution to cumulative global greenhouse gas emissions is less than 0.9%, despite suffering tens of billions of dollars in climate disasters."
      }
    ]
  },
  {
    id: "ed-firewall-cyber-2024",
    title: "Digital Authoritarianism vs. National Security: The Great Firewall Controversy in Pakistan",
    newspaper: "The News International",
    author: "Zarrar Khuhro & Ramsha Jahangir",
    date: "August 28, 2024",
    subject: "Current Affairs & Governance",
    category: "Cybersecurity & Civil Liberties",
    readTime: "6 min read",
    tags: ["Firewall", "Cybersecurity", "PECA 2016", "Digital Economy", "Free Speech", "IT Exports"],
    background: "During the summer of 2024, widespread internet throttling, latency spikes, and disruptions to messaging applications (WhatsApp media downloads, VPN restrictions, and prolonged blockages of platform X / Twitter) gripped Pakistan. The disruptions coincided with reports that the state was deploying a sophisticated national internet firewall equipped with Deep Packet Inspection (DPI) technology to filter digital traffic, surveil encrypted metadata, and counter state-sponsored disinformation and hybrid warfare. However, the measures triggered severe backlash from the domestic IT export industry, freelancer associations, civil liberties advocates, and international chambers of commerce.",
    keyArguments: [
      "Economic Fallout on IT Exports: Pakistan's burgeoning IT services and software exports (which surged past $3.2 billion in FY24) depend fundamentally on uninterrupted, high-speed, 24/7 internet connectivity. Internet throttling damaged freelancer reputations on global gig platforms (Upwork, Fiverr) and deterred multinational tech investments.",
      "The Constitutional Free Speech Dilemma: Blanket throttling and arbitrary social media bans without transparent judicial oversight violate Article 19 (Freedom of Speech) and Article 19A (Right to Information) of the Constitution of Pakistan.",
      "The National Security Imperative: State authorities argue that hostile intelligence agencies, terrorist networks, and coordinated digital influence operations utilize foreign-hosted platforms to incite ethnic friction, spread sectarian disinformation, and destabilize state institutions through 5th Generation Warfare.",
      "Inefficacy of Digital Blockades: Technical experts highlight that blanket firewalls and IP blocking are routinely bypassed via Virtual Private Networks (VPNs), while harming ordinary businesses and digital startups far more than malicious state actors.",
      "Need for Transparent Digital Governance: The country requires a modern, independent Privacy Commission, enforceable Data Protection Legislation (Personal Data Protection Bill), and clear statutory definitions rather than arbitrary executive decrees under the controversial Prevention of Electronic Crimes Act (PECA) 2016."
    ],
    vocabulary: [
      {
        word: "SURREPTITIOUS",
        pos: "Adjective",
        def: "Kept secret, especially because it would not be approved of; stealthy.",
        syn: "Clandestine, covert, furtive",
        ant: "Blatant, transparent, overt",
        example: "The surreptitious deployment of deep packet inspection software drew fierce condemnation from rights organizations."
      },
      {
        word: "ARBITRARY",
        pos: "Adjective",
        def: "Based on random choice or personal whim, rather than any reason, rule, or system of law.",
        syn: "Capricious, erratic, despotic",
        ant: "Reasoned, statutory, methodical",
        example: "Arbitrary executive bans on digital platforms damage Pakistan's reputation as an attractive IT outsourcing destination."
      },
      {
        word: "EFFICACY",
        pos: "Noun",
        def: "The ability to produce a desired or intended result.",
        syn: "Effectiveness, potency, utility",
        ant: "Inefficacy, futility, impotence",
        example: "Cybersecurity specialists questioned the technical efficacy of network firewalls against decentralized VPN protocols."
      },
      {
        word: "CHILLING EFFECT",
        pos: "Noun phrase",
        def: "The discouragement of the legitimate exercise of natural and legal rights by the threat of legal or digital sanction.",
        syn: "Intimidation, deterrence, self-censorship",
        ant: "Encouragement, empowerment, liberation",
        example: "Vague defamation clauses under cybercrime statutes create a chilling effect on journalistic investigation."
      }
    ],
    analyticalPoints: {
      theoreticalLens: "Securitization Theory (Copenhagen School): Developed by Barry Buzan and Ole Wæver, securitization occurs when a political actor designates an issue as an existential security threat, justifying extraordinary measures outside standard democratic procedures. In Pakistan, the cyberspace domain has transitioned from a commercial sphere into an existential national security theater.",
      counterPerspective: "Security officials point to weaponized digital propaganda, deepfakes, and coordinate bot farms (such as those unmasked by EU DisinfoLab) that deliberately incite riots, defame armed forces, and disrupt civil harmony, arguing that no sovereign state can leave its digital borders completely unmonitored.",
      examRecommendations: "When analyzing digital rights in Pakistan Affairs or Governance papers, recommend a balanced regulatory paradigm: (1) Adopting an open, predictable regulatory framework modeled on Singapore's Protection from Online Falsehoods and Manipulation Act (POFMA) with judicial appeal mechanisms; (2) Safeguarding digital infrastructure and fiber-optic landing cables to achieve the national target of $10B in IT exports."
    },
    relatedMcqs: [
      {
        question: "Which primary legislation enacted in 2016 currently governs the investigation and prosecution of cybercrimes in Pakistan?",
        options: ["Electronic Transactions Ordinance (ETO) 2002", "Prevention of Electronic Crimes Act (PECA) 2016", "National Cyber Security Policy 2021", "Data Protection Act 2023"],
        correct: 1,
        explanation: "The Prevention of Electronic Crimes Act (PECA) 2016, enacted by Parliament in August 2016, is the primary statutory framework governing cyber offences in Pakistan."
      },
      {
        question: "Which specialized federal law enforcement agency is statutorily mandated to investigate cybercrime offenses under PECA 2016 in Pakistan?",
        options: ["National Accountability Bureau (NAB)", "Federal Investigation Agency (FIA - Cyber Crime Wing)", "Intelligence Bureau (IB)", "Provincial Anti-Corruption Establishment"],
        correct: 1,
        explanation: "The Federal Investigation Agency (FIA), through its specialized Cyber Crime Wing (CCW), is the designated investigating agency under PECA 2016."
      },
      {
        question: "Which constitutional article in the 1973 Constitution of Pakistan guarantees the Fundamental Right to Freedom of Speech and Expression?",
        options: ["Article 9", "Article 14", "Article 19", "Article 25"],
        correct: 2,
        explanation: "Article 19 guarantees Freedom of Speech, Expression, and Freedom of the Press, subject to reasonable restrictions imposed by law."
      },
      {
        question: "What network inspection technology enables internet firewalls to examine data payloads in real time rather than just checking packet headers?",
        options: ["Domain Name System (DNS) Lookup", "Deep Packet Inspection (DPI)", "Static IP Routing", "Simple Mail Transfer Protocol (SMTP)"],
        correct: 1,
        explanation: "Deep Packet Inspection (DPI) is an advanced packet processing method that evaluates the actual data content/payload of a packet as it passes an inspection point, allowing granular content filtering and protocol analysis."
      }
    ]
  },
  {
    id: "ed-middle-east-realignment-2024",
    title: "The Post-Gaza Regional Architecture: Deterrence Collapse and the Arab-Israeli Impasse",
    newspaper: "Foreign Affairs",
    author: "Vali Nasr & Martin Indyk Analysis",
    date: "October 02, 2024",
    subject: "International Relations & Geopolitics",
    category: "Middle Eastern Security",
    readTime: "8 min read",
    tags: ["Middle East", "Gaza", "Iran-Israel", "Abraham Accords", "Two-State Solution", "Saudi Arabia"],
    background: "The devastating war triggered on October 7, 2023, shattered the core assumptions of Middle Eastern diplomacy. Prior to the conflict, the prevailing regional trajectory was the expansion of the Abraham Accords—normalizing ties between Israel and Arab monarchies (UAE, Bahrain, Morocco, Sudan) while sidelining the Palestinian national question as an obsolete impediment. Washington was actively negotiating a landmark trilateral grand bargain involving Saudi-Israeli normalization, a formal US-Saudi mutual defense treaty, and civilian nuclear cooperation. The war, civilian casualties in Gaza and Lebanon, and direct missile and drone exchanges between Iran and Israel demolished the illusion of regional integration without Palestinian statehood.",
    keyArguments: [
      "The Death of the 'Bypass Strategy': The doctrine that Israel could integrate into the broader Middle East while maintaining permanent military occupation of Palestinian territories has irrevocably collapsed.",
      "The Resurgence of the Arab Peace Initiative: Saudi Arabia and the Arab League have made explicit that diplomatic normalization is contingent upon an irreversible, time-bound pathway toward a sovereign Palestinian State along 1967 borders with East Jerusalem as its capital.",
      "Direct Escalation Cycle: The era of shadow and proxy warfare has ended. Direct exchanges of ballistic missiles and airstrikes between Israel and Iran have shattered strategic deterrence, making future miscalculation and regional escalation far more probable.",
      "The 'Axis of Resistance' Resilience: Despite severe leadership assassinations and kinetic degradation, regional non-state networks (Hezbollah, Houthis, Iraqi factions) continue to demonstrate asymmetric geographic reach, disrupting international shipping and regional air traffic.",
      "Geopolitical Inroads by China & Russia: The United States' diplomatic isolation in UN votes has enabled China (which brokered the Saudi-Iran rapprochement in March 2023) and Russia to present themselves to the Global South as defenders of international humanitarian law."
    ],
    vocabulary: [
      {
        word: "CALCULUS",
        pos: "Noun",
        def: "A particular method or process of calculating, reasoning, or estimating political and strategic risks.",
        syn: "Strategy, computation, assessment",
        ant: "Impulse, whim, carelessness",
        example: "The outbreak of direct regional war fundamentally altered Saudi Arabia's diplomatic calculus regarding normalisation."
      },
      {
        word: "UNILATERAL",
        pos: "Adjective",
        def: "Performed by or affecting only one person, group, or country involved in a situation, without the agreement of others.",
        syn: "One-sided, solitary, independent",
        ant: "Multilateral, bilateral, reciprocal",
        example: "Unilateral military strikes without international mandate risk plunging the entire Levant into an uncontrollable firestorm."
      },
      {
        word: "RAPPROCHEMENT",
        pos: "Noun",
        def: "An establishment or resumption of harmonious relations between two countries previously hostile.",
        syn: "Reconciliation, detente, accord",
        ant: "Estrangement, alienation, hostility",
        example: "The Beijing-brokered diplomatic rapprochement between Saudi Arabia and Iran demonstrated China's expanding Middle Eastern clout."
      },
      {
        word: "INTRACTABLE",
        pos: "Adjective",
        def: "Hard to control, manage, or deal with; stubborn or difficult to solve.",
        syn: "Insoluble, unmanageable, stubborn",
        ant: "Tractable, manageable, amenable",
        example: "The status of East Jerusalem and refugee return rights remain the most intractable core disputes in the conflict."
      }
    ],
    analyticalPoints: {
      theoreticalLens: "Offense-Defense Balance & The Security Dilemma: In an environment where offensive military weapons (ballistic missiles, precision strike drones, bunker-busting bombs) possess decisive advantages over defensive shields, states face heightened incentives for pre-emptive escalation, severely undermining crisis stability.",
      counterPerspective: "Realpolitik analysts argue that once active hostilities subside, the fundamental structural incentives for Arab-Israeli economic, technological, and air-defense cooperation against shared regional adversaries will inevitably re-emerge.",
      examRecommendations: "In competitive exam essays on the Middle East, contrast the Abraham Accords framework (transactional, security-first) against the 2002 Arab Peace Initiative (comprehensive, land-for-peace). Highlight Pakistan's consistent stance refusing normalization absent a sovereign Palestinian state based on pre-1967 borders."
    },
    relatedMcqs: [
      {
        question: "Which historic initiative proposed by Saudi Arabia and adopted by the Arab League in 2002 offered full normalization with Israel in exchange for full withdrawal to 1967 borders?",
        options: ["Camp David Accords", "Oslo Accords", "Arab Peace Initiative", "Abraham Accords"],
        correct: 2,
        explanation: "The Arab Peace Initiative, proposed by then-Crown Prince Abdullah of Saudi Arabia at the 2002 Beirut Arab League Summit, offered normalized relations in exchange for an independent Palestinian state along 1967 borders with East Jerusalem as capital."
      },
      {
        question: "Which diplomatic accords signed in 2020 normalized relations between Israel and the UAE, Bahrain, Sudan, and Morocco?",
        options: ["Camp David Accords", "Abraham Accords", "Madrid Accords", "Balfour Accords"],
        correct: 1,
        explanation: "The Abraham Accords, brokered by the United States and signed in late 2020, established diplomatic ties between Israel and four Arab states (UAE, Bahrain, Sudan, and Morocco)."
      },
      {
        question: "In March 2023, which global power successfully brokered a breakthrough diplomatic rapprochement agreement between Saudi Arabia and Iran?",
        options: ["United States", "European Union", "China", "Russia"],
        correct: 2,
        explanation: "China mediated the landmark trilateral agreement in Beijing in March 2023 between Saudi Arabia and Iran to restore diplomatic relations and reopen embassies after a seven-year rift."
      },
      {
        question: "What is the official status of the Palestinian territories according to UN Security Council Resolution 242 (1967) and the International Court of Justice (ICJ)?",
        options: ["Disputed Terra Nullius", "Occupied Palestinian Territory (OPT)", "Integrated Protectorate", "Trust Territory"],
        correct: 1,
        explanation: "Under international law (UNSC Res 242 and the ICJ 2004 & 2024 rulings), the West Bank, East Jerusalem, and Gaza are designated as 'Occupied Palestinian Territory' (OPT)."
      }
    ]
  },
  {
    id: "ed-brics-dedollarization-2024",
    title: "BRICS Expansion & De-Dollarization: The Rise of Alternative Cross-Border Settlement",
    newspaper: "The Express Tribune",
    author: "Dr. Kamal Monnoo & Dr. Muhammad Zubair",
    date: "November 08, 2024",
    subject: "International Relations & Economics",
    category: "Global Geoeconomics",
    readTime: "7 min read",
    tags: ["BRICS", "De-Dollarization", "US Dollar", "mBridge", "SWIFT", "Reserve Currency"],
    background: "At the 16th BRICS Summit held in Kazan, Russia (October 2024), the expanded bloc—now encompassing Brazil, Russia, India, China, South Africa, Egypt, Ethiopia, Iran, and the UAE (with Saudi Arabia participating)—deliberated on constructing an alternative global financial infrastructure. The catalyst was the unprecedented weaponization of the US dollar following the Ukraine war: the freezing of over $300 billion in Russian sovereign central bank reserves and the expulsion of major Russian banks from the SWIFT messaging network. In response, BRICS nations have accelerated bilateral local currency settlements, developed the 'BRICS Pay' decentralized messaging architecture, and expanded the Bank for International Settlements' multi-CBDC project (mBridge).",
    keyArguments: [
      "The Weaponization of the Dollar: For eight decades, the US dollar served as a global public good. By freezing sovereign foreign exchange reserves and deploying secondary sanctions, the US has prompted central banks across the Global South to diversify their reserve holdings into gold and non-dollar assets.",
      "The Rise of Local Currency Settlement: Bilateral trade between Russia and China is now conducted almost entirely (>90%) in Rubles and Yuan. China settles major crude purchases in Petroyuan, and India settles Russian oil imports in Dirhams and Rupees.",
      "The Structural Hegemony of the Dollar: While de-dollarization in bilateral trade is expanding, the US dollar still accounts for ~58% of allocated global foreign exchange reserves and over 85% of international foreign exchange transactions, underpinned by the depth and liquidity of the US Treasury market.",
      "BRICS Pay and mBridge Project: Project mBridge (utilizing a multi-currency central bank digital currency platform developed with Thailand, UAE, China, and Hong Kong) enables instantaneous, low-cost cross-border payments that completely bypass Western correspondent banks and the SWIFT network.",
      "Implications for Pakistan: Pakistan has formally submitted an application to join BRICS. Membership would provide access to the New Development Bank (NDB) for non-conditional infrastructure financing, reduce reliance on scarce US dollar reserves through bilateral currency swap agreements, and expand export markets across emerging economies."
    ],
    vocabulary: [
      {
        word: "DE-DOLLARIZATION",
        pos: "Noun",
        def: "The process of substituting the US dollar as the primary currency used for trading commodities, bilateral exchanges, and central bank foreign exchange reserves.",
        syn: "Currency diversification, monetary autonomy",
        ant: "Dollarization, greenback hegemony",
        example: "The acceleration of de-dollarization represents an institutional effort by emerging powers to insulate their economies from unilateral Western sanctions."
      },
      {
        word: "EXORBITANT",
        pos: "Adjective",
        def: "Unreasonably high or excessive; famously used to describe the US dollar's global reserve advantage ('exorbitant privilege').",
        syn: "Extravagant, inordinate, outsized",
        ant: "Modest, reasonable, frugal",
        example: "French finance minister Valéry Giscard d'Estaing coined the phrase 'exorbitant privilege' to describe America's unique ability to print the world's reserve currency."
      },
      {
        word: "LIQUIDITY",
        pos: "Noun",
        def: "The availability of liquid assets to a market or company; the ease with which an asset can be converted into ready cash without affecting its market price.",
        syn: "Solvency, fluid capital, cash availability",
        ant: "Illiquidity, insolvency, immobility",
        example: "No sovereign bond market currently matches the immense depth and liquidity of the United States Treasury market."
      },
      {
        word: "SOVEREIGN",
        pos: "Adjective",
        def: "Possessing supreme or ultimate power; independent and not subject to outside authority.",
        syn: "Autonomous, independent, self-governing",
        ant: "Dependent, vassal, colonial",
        example: "The confiscation of sovereign central bank assets set a dangerous precedent in international financial jurisprudence."
      }
    ],
    analyticalPoints: {
      theoreticalLens: "Hegemonic Stability Theory (Kindleberger & Keohane): Hegemonic stability theory argues that an open, stable global economic system requires a single dominant superpower willing to provide global public goods (reserve currency, security of sea lanes, lender of last resort). As American hegemony becomes contested, the financial system fragments into competing regional monetary spheres.",
      counterPerspective: "Skeptics emphasize that BRICS lacks the deep institutional coherence of the G7: severe border disputes between China and India, conflicting economic models, and closed capital accounts (inconvertibility of the Chinese Yuan) prevent the emergence of a single unified BRICS currency.",
      examRecommendations: "When discussing global economic governance in CSS Current Affairs, distinguish between the 'Medium of Exchange' (where local currencies are rising fast) and the 'Store of Value' (where the US dollar and gold still dominate global central bank vaults)."
    },
    relatedMcqs: [
      {
        question: "Which multilateral development bank was established by the BRICS nations in 2014 as an alternative to the World Bank and IMF?",
        options: ["Asian Infrastructure Investment Bank (AIIB)", "New Development Bank (NDB)", "Islamic Development Bank (IsDB)", "Eurasian Development Bank (EDB)"],
        correct: 1,
        explanation: "The New Development Bank (NDB), formerly known as the BRICS Development Bank, was established by the 2014 Fortaleza Agreement with its headquarters in Shanghai, China."
      },
      {
        question: "Roughly what percentage of global allocated central bank foreign exchange reserves is currently denominated in US dollars?",
        options: ["Approx. 25%", "Approx. 40%", "Approx. 58%", "Approx. 85%"],
        correct: 2,
        explanation: "According to the IMF's Currency Composition of Official Foreign Exchange Reserves (COFER), the US dollar accounts for approximately 58% of global central bank foreign exchange reserves, down from over 71% in 2000."
      },
      {
        question: "What is the primary global financial messaging network connecting over 11,000 banks across 200+ countries, headquartered in Belgium?",
        options: ["CHIPS", "SWIFT", "Fedwire", "CIPS"],
        correct: 1,
        explanation: "The Society for Worldwide Interbank Financial Telecommunication (SWIFT), headquartered in La Hulpe, Belgium, is the dominant global financial messaging service for executing cross-border payments."
      },
      {
        question: "What famous term did French leaders coin in the 1960s to describe the asymmetric economic advantages the United States enjoys by issuing the world's primary reserve currency?",
        options: ["Dollar Diplomacy", "Exorbitant Privilege", "Washington Consensus", "Monroe Doctrine"],
        correct: 1,
        explanation: "The term 'exorbitant privilege' (privilège exorbitant) was coined by Valéry Giscard d'Estaing in the 1960s to describe how the US can run perpetual balance-of-payments deficits by printing the global reserve currency."
      }
    ]
  }
];

extraEditorials.forEach(e => editorials.push(e));

const updatedContent = `/**
 * Master Dataset for Editorial Explainers
 * Comprehensive civil services editorial intelligence:
 * Background, Key Arguments, High-Yield Vocabulary, Analytical Points & Related MCQs.
 */

window.EDITORIAL_EXPLAINERS_DATA = ${JSON.stringify(editorials, null, 2)};
`;

fs.writeFileSync(targetPath, updatedContent, 'utf8');
console.log('Successfully updated data_editorial_explainers.js with all 10 comprehensive editorials!');
