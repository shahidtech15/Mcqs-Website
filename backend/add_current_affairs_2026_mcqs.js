const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Category = require('./models/Category');
const Question = require('./models/Question');

dotenv.config();

const CURRENT_AFFAIRS_2026_QUESTIONS = [
  {
    q: "Which three nations are jointly hosting the 2026 FIFA World Cup, the first edition to feature 48 teams?",
    opts: ["USA, Mexico, and Canada", "Spain, Portugal, and Morocco", "Argentina, Uruguay, and Paraguay", "Australia, New Zealand, and Indonesia"],
    ans: "A",
    diff: "Easy",
    subCat: "Sports Updates",
    exp: "The 2026 FIFA World Cup is hosted jointly by 16 cities across the United States, Canada, and Mexico, expanding the competition to 48 teams."
  },
  {
    q: "Pakistan was overwhelmingly elected by the UN General Assembly to serve as a non-permanent member of the United Nations Security Council (UNSC) for which term?",
    opts: ["2024–2025", "2025–2026", "2026–2027", "2027–2028"],
    ans: "B",
    diff: "Medium",
    subCat: "Global Leaders & Summits",
    exp: "Pakistan secured 182 votes in the UN General Assembly to win a two-year seat on the UN Security Council for the 2025–2026 term."
  },
  {
    q: "The XXV Olympic Winter Games in February 2026 are scheduled to be hosted by which Italian host cities?",
    opts: ["Rome and Naples", "Turin and Genoa", "Milan and Cortina d'Ampezzo", "Florence and Venice"],
    ans: "C",
    diff: "Medium",
    subCat: "Sports Updates",
    exp: "The 2026 Winter Olympic Games are officially hosted by Milan and Cortina d'Ampezzo in northern Italy."
  },
  {
    q: "Which two countries are the official co-hosts of the 2026 ICC Men's T20 Cricket World Cup?",
    opts: ["Australia and New Zealand", "India and Sri Lanka", "England and Ireland", "South Africa and Zimbabwe"],
    ans: "B",
    diff: "Easy",
    subCat: "Sports Updates",
    exp: "India and Sri Lanka are scheduled to co-host the 2026 ICC Men's T20 World Cup, featuring 20 international teams."
  },
  {
    q: "What is the landmark mission profile of NASA's Artemis II lunar mission scheduled for 2025–2026?",
    opts: ["First uncrewed lunar rover landing", "First crewed lunar flyby test of the Orion spacecraft since 1972", "Permanent establishment of a nuclear lunar base", "Mining helium-3 deposits at the lunar south pole"],
    ans: "B",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "Artemis II is NASA's first crewed mission of the Space Launch System (SLS) and Orion capsule, carrying four astronauts on a lunar flyby."
  },
  {
    q: "Following the historic expansion of BRICS (adding Iran, UAE, Egypt, and Ethiopia), which country assumes the rotating BRICS presidency in 2026?",
    opts: ["India", "Russia", "China", "Brazil"],
    ans: "A",
    diff: "Medium",
    subCat: "Global Leaders & Summits",
    exp: "India holds the rotating presidency of the expanded BRICS bloc for the year 2026, following Brazil's presidency in 2025."
  },
  {
    q: "Which city in the Brazilian Amazon was designated to host the landmark COP30 UN Climate Change Conference?",
    opts: ["Rio de Janeiro", "São Paulo", "Belém", "Brasília"],
    ans: "C",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "Belém, the capital of the Amazonian state of Pará in Brazil, was chosen to host COP30, highlighting global tropical rainforest conservation."
  },
  {
    q: "Which comprehensive regulatory framework entered full phased enforcement across Europe by 2026, categorizing AI applications by risk?",
    opts: ["The Global AI Ban Treaty", "The EU Artificial Intelligence Act (AI Act)", "The Digital Millennium Intelligence Act", "The Geneva AI Convention"],
    ans: "B",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "The European Union's AI Act is the world's first comprehensive horizontal legal regime regulating artificial intelligence by risk tiers."
  },
  {
    q: "Who was sworn in as the 24th Prime Minister of Pakistan in 2024, leading the coalition government into 2026?",
    opts: ["Shehbaz Sharif", "Anwar-ul-Haq Kakar", "Shahid Khaqan Abbasi", "Bilawal Bhutto Zardari"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Current Affairs",
    exp: "Mian Muhammad Shehbaz Sharif was elected and sworn in as the 24th Prime Minister of the Islamic Republic of Pakistan."
  },
  {
    q: "Who was elected as the 14th President of Pakistan in March 2024 for a historic second term in office?",
    opts: ["Dr. Arif Alvi", "Asif Ali Zardari", "Yousaf Raza Gillani", "Raja Pervaiz Ashraf"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Current Affairs",
    exp: "Asif Ali Zardari was elected as the 14th President of Pakistan, having previously served as President from 2008 to 2013."
  },
  {
    q: "Under the provisions of the 26th Constitutional Amendment, who was appointed as the 30th Chief Justice of Pakistan in October 2024?",
    opts: ["Justice Mansoor Ali Shah", "Justice Yahya Afridi", "Justice Munib Akhtar", "Justice Amin-ud-Din Khan"],
    ans: "B",
    diff: "Medium",
    subCat: "Pakistan Current Affairs",
    exp: "Justice Yahya Afridi was nominated by the newly constituted Special Parliamentary Committee and appointed as the 30th Chief Justice of Pakistan."
  },
  {
    q: "What was the core structural reform introduced by the 26th Constitutional Amendment passed by Pakistan's parliament in October 2024?",
    opts: ["Establishing dedicated Constitutional Benches in the Supreme Court and setting a 3-year term for the CJP", "Abolishing the National Accountability Bureau (NAB)", "Merging provincial assemblies into a unicameral parliament", "Privatizing state-owned television broadcasting"],
    ans: "A",
    diff: "Hard",
    subCat: "Pakistan Current Affairs",
    exp: "The 26th Amendment reformed judicial appointments, set a fixed 3-year tenure for the Chief Justice of Pakistan, and instituted Constitutional Benches."
  },
  {
    q: "What is the primary objective of the legally binding international treaty finalized under the auspices of the UN Environment Programme (UNEP) by 2025–2026?",
    opts: ["Regulating space satellites in low earth orbit", "Ending plastic pollution across the full life cycle of plastics", "Restricting commercial maritime shipping routes", "Banning international air travel over polar caps"],
    ans: "B",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "The Intergovernmental Negotiating Committee (INC) developed a historic, legally binding treaty addressing plastic pollution in marine and terrestrial environments."
  },
  {
    q: "Who assumed office as the Secretary General of NATO on October 1, 2024, succeeding Jens Stoltenberg?",
    opts: ["Mark Rutte", "Kaja Kallas", "Ursula von der Leyen", "Alexander Stubb"],
    ans: "A",
    diff: "Medium",
    subCat: "Global Leaders & Summits",
    exp: "Former long-serving Prime Minister of the Netherlands Mark Rutte became the Secretary General of the North Atlantic Treaty Organization (NATO)."
  },
  {
    q: "Sir Keir Starmer became the Prime Minister of the United Kingdom in July 2024, ending 14 years of rule by which party?",
    opts: ["The Liberal Democratic Party", "The Conservative (Tory) Party", "The Scottish National Party", "The Green Party"],
    ans: "B",
    diff: "Easy",
    subCat: "Global Leaders & Summits",
    exp: "Keir Starmer led the Labour Party to a sweeping parliamentary majority, ending 14 consecutive years of Conservative Party government."
  },
  {
    q: "Which nation holds the Presidency of the G20 in 2026, coinciding with the 250th anniversary of its Declaration of Independence?",
    opts: ["United States", "Saudi Arabia", "Australia", "Japan"],
    ans: "A",
    diff: "Medium",
    subCat: "Global Leaders & Summits",
    exp: "The United States hosts the G20 Summit in 2026, completing the rotational cycle after South Africa's presidency in 2025."
  },
  {
    q: "South Africa made diplomatic history in 2025 as:",
    opts: ["The first nation to resign from the G20", "The first African nation to hold the presidency of the G20", "The first nation to introduce a gold-backed global currency", "The sole representative of BRICS in the UN Security Council"],
    ans: "B",
    diff: "Easy",
    subCat: "Global Leaders & Summits",
    exp: "South Africa assumed the G20 presidency on December 1, 2024, becoming the very first African country to lead the premier forum for international economic cooperation."
  },
  {
    q: "What is the strategic emphasis of Phase-II of the China-Pakistan Economic Corridor (CPEC) extending into 2026?",
    opts: ["Laying primary asphalt highways only", "Industrialization, B2B joint ventures, agriculture modernization, IT corridors, and mining", "Constructing nuclear submarines at Gwadar", "Establishing cross-border oil rail lines to Europe"],
    ans: "B",
    diff: "Medium",
    subCat: "Pakistan Current Affairs",
    exp: "CPEC Phase-II transitions from basic infrastructure to high-yield industrial collaboration, agricultural modernization, B2B joint ventures, and Special Economic Zones (SEZs)."
  },
  {
    q: "In October 2024, Pakistan hosted which high-profile multilateral summit in Islamabad, welcoming regional prime ministers and delegations?",
    opts: ["The 23rd Meeting of the SCO Council of Heads of Government (CHG)", "The SAARC Annual Leaders Summit", "The OIC Extraordinary Foreign Ministers Conference", "The Non-Aligned Movement (NAM) Triennial Summit"],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Current Affairs",
    exp: "Pakistan successfully hosted the 23rd Council of Heads of Government of the Shanghai Cooperation Organisation (SCO) in Islamabad."
  },
  {
    q: "The 2024 Nobel Peace Prize was awarded to Nihon Hidankyo, a grassroots movement representing atomic bomb survivors (Hibakusha) from:",
    opts: ["Hiroshima and Nagasaki, Japan", "Chernobyl, Ukraine", "Fukushima, Japan", "Bikini Atoll, Marshall Islands"],
    ans: "A",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "Nihon Hidankyo was awarded the 2024 Nobel Peace Prize for demonstrating through witness testimony that nuclear weapons must never be used again."
  },
  {
    q: "The 2024 Nobel Prize in Chemistry was awarded to Demis Hassabis, John Jumper, and David Baker primarily for breakthroughs in:",
    opts: ["Computational protein design and AI-driven protein structure prediction (AlphaFold)", "Lithium-air super-density battery cells", "Carbon nanotube water purification filters", "Room-temperature superconducting polymers"],
    ans: "A",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "The prize recognized David Baker for computational protein design, and Demis Hassabis and John M. Jumper of Google DeepMind for predicting protein structures with AlphaFold."
  },
  {
    q: "John J. Hopfield and Geoffrey E. Hinton were awarded the 2024 Nobel Prize in Physics for foundational discoveries that enabled:",
    opts: ["Commercial nuclear fusion energy", "Artificial neural networks and modern machine learning", "Quantum teleportation across optical fibers", "Gravitational wave detection from black hole mergers"],
    ans: "A",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "The Nobel Committee awarded the 2024 Physics Prize to Hopfield and Hinton for foundational discoveries and inventions enabling machine learning with artificial neural networks."
  },
  {
    q: "What is the primary role of the Special Investment Facilitation Council (SIFC) established in Pakistan?",
    opts: ["Serving as a single-window hybrid platform to attract and expedite foreign investments in mining, agriculture, IT, and energy", "Supervising civilian passports and immigration control", "Managing national flood relief distribution only", "Regulating stock market short selling"],
    ans: "A",
    diff: "Easy",
    subCat: "Pakistan Current Affairs",
    exp: "SIFC acts as a 'single-window' facilitator to eliminate bureaucratic bottlenecks and attract foreign direct investment into key economic sectors."
  },
  {
    q: "In September 2024, the International Monetary Fund (IMF) approved a $7 billion, 37-month loan package for Pakistan under the:",
    opts: ["Stand-By Arrangement (SBA)", "Extended Fund Facility (EFF)", "Rapid Financing Instrument (RFI)", "Flexible Credit Line (FCL)"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Current Affairs",
    exp: "The IMF Executive Board approved a 37-month Extended Fund Facility (EFF) totaling approximately $7 billion to anchor economic stability and structural reforms."
  },
  {
    q: "The 20th Asian Games (Aichi-Nagoya 2026) are scheduled to be staged in which Asian nation?",
    opts: ["South Korea", "Japan", "Qatar", "Thailand"],
    ans: "B",
    diff: "Medium",
    subCat: "Sports Updates",
    exp: "The 2026 Asian Games will be held in Aichi Prefecture and its capital Nagoya, Japan, from September to October 2026."
  },
  {
    q: "Which island territory accounts for over 60% of the world's total semiconductor foundry capacity and over 90% of advanced logic chips?",
    opts: ["Taiwan", "South Korea", "Singapore", "Ireland"],
    ans: "A",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "Taiwan, spearheaded by TSMC, produces the overwhelming majority of the world's most sophisticated sub-7nm microchips."
  },
  {
    q: "Which major astronomical discovery from the James Webb Space Telescope (JWST) challenged traditional cosmological timeline models?",
    opts: ["The discovery of unexpectedly massive, luminous galaxies formed just 300–400 million years after the Big Bang", "Evidence that stars do not undergo thermonuclear fusion", "The sudden deceleration of cosmic expansion", "The disappearance of dark matter from the Virgo cluster"],
    ans: "A",
    diff: "Hard",
    subCat: "International Current Affairs",
    exp: "JWST discovered highly mature, bright galaxies in the early cosmic dawn, suggesting stars and black holes formed much faster than previously hypothesized."
  },
  {
    q: "The multi-billion dollar Reko Diq copper-gold project being developed jointly with Barrick Gold is situated in which district of Balochistan?",
    opts: ["Gwadar", "Chagai", "Kech", "Lasbela"],
    ans: "B",
    diff: "Easy",
    subCat: "Pakistan Current Affairs",
    exp: "Reko Diq is one of the world's largest undeveloped copper-gold deposits, situated in the Chagai district of Balochistan."
  },
  {
    q: "At the Astana Summit in July 2024, which sovereign nation was officially admitted as the 10th full member state of the Shanghai Cooperation Organisation (SCO)?",
    opts: ["Belarus", "Armenia", "Mongolia", "Azerbaijan"],
    ans: "A",
    diff: "Medium",
    subCat: "Global Leaders & Summits",
    exp: "The Republic of Belarus was officially admitted as the 10th full member state of the SCO at the 24th Meeting of the Council of Heads of State in Astana."
  },
  {
    q: "Ursula von der Leyen was confirmed in July 2024 to serve a second 5-year term as President of which European institution?",
    opts: ["European Commission", "European Central Bank", "European Council", "European Court of Human Rights"],
    ans: "A",
    diff: "Medium",
    subCat: "Global Leaders & Summits",
    exp: "Ursula von der Leyen was re-elected by the European Parliament to serve as the President of the European Commission through 2029."
  },
  {
    q: "Which international regional bloc comprising 55 member states became a permanent member of the G20 at the New Delhi Summit?",
    opts: ["The African Union (AU)", "The Arab League", "ASEAN", "The Gulf Cooperation Council (GCC)"],
    ans: "A",
    diff: "Easy",
    subCat: "Global Leaders & Summits",
    exp: "The African Union was granted permanent member status in the G20, giving developing African economies equal representation alongside the European Union."
  },
  {
    q: "What is the primary mission objective of the WHO Pandemic Agreement finalized by world health leaders by 2025–2026?",
    opts: ["Establishing equitable global pathogen access, early genomic surveillance, and fair distribution of vaccines during pandemics", "Banning international travel whenever seasonal flu peaks", "Mandating universal health insurance cards for all tourists", "Privatizing global pharmaceutical manufacturing"],
    ans: "B",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "The WHO Pandemic Agreement aims to guarantee equitable access to diagnostics, therapeutics, and vaccines while strengthening global outbreak alert mechanisms."
  },
  {
    q: "In October 2024, SpaceX achieved a historic aerospace milestone during Starship Flight 5 by:",
    opts: ["Catching the Super Heavy rocket booster out of mid-air using mechanical launch tower arms ('chopsticks')", "Landing a crewed capsule on Mars", "Deploying the first permanent laser solar sail", "Docking with the Chinese Tiangong space station"],
    ans: "A",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "SpaceX successfully caught the 232-foot-tall Super Heavy booster back at the Starbase launch tower using massive robotic 'chopstick' arms."
  },
  {
    q: "Under Pakistan's Alternative and Renewable Energy (ARE) Policy, what percentage of national electricity generation is targeted from clean and renewable sources by 2030?",
    opts: ["20%", "40%", "60%", "85%"],
    ans: "C",
    diff: "Medium",
    subCat: "Pakistan Current Affairs",
    exp: "Pakistan aims to achieve 60% of its total generation capacity from renewable and clean energy sources (hydro, solar, wind) by 2030."
  },
  {
    q: "The Diamer-Bhasha Dam currently under construction on the Indus River is geostrategically located between:",
    opts: ["Khyber Pakhtunkhwa (Kohistan) and Gilgit-Baltistan (Diamer)", "Punjab (Attock) and Khyber Pakhtunkhwa (Nowshera)", "Sindh (Thatta) and Balochistan (Hub)", "Gilgit-Baltistan (Hunza) and Azad Jammu & Kashmir (Muzaffarabad)"],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Current Affairs",
    exp: "The Diamer-Bhasha Dam site spans the Indus River between the Kohistan district of KP and the Diamer district of Gilgit-Baltistan."
  },
  {
    q: "Which major international cricket championship was officially awarded to Pakistan by the ICC as host nation?",
    opts: ["ICC Men's Champions Trophy", "ICC Under-19 Men's Cricket World Cup", "ICC World Test Championship Final", "ICC Men's T20 World Cup"],
    ans: "A",
    diff: "Easy",
    subCat: "Sports Updates",
    exp: "Pakistan was designated as the defending host for the prestigious ICC Men's Champions Trophy tournament."
  },
  {
    q: "Which exascale supercomputer located at the Oak Ridge National Laboratory (ORNL) in Tennessee has ranked among the world's most powerful computers?",
    opts: ["Frontier", "Fugaku", "LUMI", "Sunway TaihuLight"],
    ans: "A",
    diff: "Hard",
    subCat: "International Current Affairs",
    exp: "Frontier at Oak Ridge National Laboratory achieved 1.194 exaflops on the High-Performance Linpack benchmark, leading global supercomputing."
  },
  {
    q: "What is the official diplomatic and public designation of the proposed 1,146 km gas pipeline connecting Iran's South Pars to Pakistan?",
    opts: ["The Peace Pipeline", "The CPEC Energy Link", "The Trans-Balochistan Gas Corridor", "The Asian Friendship Pipeline"],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Current Affairs",
    exp: "The Iran-Pakistan (IP) gas project was originally branded the 'Peace Pipeline' when conceived to foster regional energy cooperation."
  },
  {
    q: "Which four nations comprise the TAPI natural gas pipeline consortium engineered to transport gas from Turkmenistan's Galkynysh field?",
    opts: ["Turkmenistan, Afghanistan, Pakistan, and India", "Turkey, Azerbaijan, Pakistan, and Iran", "Tajikistan, Afghanistan, Pakistan, and Iraq", "Turkmenistan, Armenia, Pakistan, and Indonesia"],
    ans: "A",
    diff: "Easy",
    subCat: "International Current Affairs",
    exp: "TAPI is the trans-regional gas pipeline designed to pump natural gas from Turkmenistan through Afghanistan into Pakistan and India."
  },
  {
    q: "Unit 5 (C-5) of the Chashma Nuclear Power Plant, being constructed with Chinese assistance in Mianwali, utilizes which third-generation reactor model?",
    opts: ["Hualong One (HPR1000)", "Westinghouse AP1000", "EPR-1600", "VVER-1200"],
    ans: "A",
    diff: "Hard",
    subCat: "Pakistan Current Affairs",
    exp: "Chashma-5 utilizes China's advanced third-generation Hualong One (HPR1000) pressurized water nuclear reactor technology."
  },
  {
    q: "The 60th quadrennial United States Presidential Election, which significantly shaped international trade, tariffs, and defense pacts into 2026, was held on:",
    opts: ["November 5, 2024", "October 12, 2024", "December 1, 2024", "January 20, 2025"],
    ans: "A",
    diff: "Easy",
    subCat: "Global Leaders & Summits",
    exp: "The 2024 US Presidential election occurred on Tuesday, November 5, 2024."
  },
  {
    q: "Which Lebanese diplomat and jurist was elected President of the International Court of Justice (ICJ) in February 2024 for a 3-year term?",
    opts: ["Nawaf Salam", "Joan Donoghue", "Dalveer Bhandari", "Ronny Abraham"],
    ans: "A",
    diff: "Hard",
    subCat: "Global Leaders & Summits",
    exp: "Judge Nawaf Salam of Lebanon was elected President of the International Court of Justice (ICJ) at The Hague."
  },
  {
    q: "Where is the permanent headquarters of the Green Climate Fund (GCF), the world's largest dedicated climate fund?",
    opts: ["Songdo, Incheon (South Korea)", "Geneva, Switzerland", "Nairobi, Kenya", "Bonn, Germany"],
    ans: "A",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "The Green Climate Fund (GCF), established under the UNFCCC framework, has its global headquarters in Songdo, Incheon, Republic of Korea."
  },
  {
    q: "In international oil economics, what does the 'OPEC+' alliance represent?",
    opts: ["OPEC member nations combined with 10 non-OPEC oil exporting allies including Russia", "OPEC members who have eliminated domestic fuel subsidies", "Countries that consume over 10 million barrels per day", "Nations planning 100% transition to green hydrogen by 2030"],
    ans: "A",
    diff: "Medium",
    subCat: "International Current Affairs",
    exp: "OPEC+ encompasses the 12 core OPEC member countries plus 10 allied non-OPEC crude petroleum exporting nations led by Russia."
  },
  {
    q: "The modern New Gwadar International Airport (NGIA), constructed under Chinese grant financing as a flagship CPEC asset, was officially inaugurated in:",
    opts: ["October 2024", "January 2021", "June 2019", "March 2017"],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Current Affairs",
    exp: "The New Gwadar International Airport (NGIA) was formally inaugurated virtually in October 2024 during the official visit of Chinese Premier Li Qiang."
  },
  {
    q: "Under the United Nations Convention on the Law of the Sea (UNCLOS), an Exclusive Economic Zone (EEZ) gives a coastal state sovereign rights over marine resources up to:",
    opts: ["12 nautical miles", "24 nautical miles", "200 nautical miles", "350 nautical miles"],
    ans: "C",
    diff: "Easy",
    subCat: "International Current Affairs",
    exp: "An Exclusive Economic Zone (EEZ) extends seaward up to 200 nautical miles from a coastal state's baseline."
  },
  {
    q: "What strategic milestone target has Pakistan's Ministry of IT & Telecom set for annual IT and freelance software service exports?",
    opts: ["$10 Billion", "$1 Billion", "$25 Billion", "$500 Million"],
    ans: "A",
    diff: "Medium",
    subCat: "Pakistan Current Affairs",
    exp: "Pakistan has implemented special tech zones, PayPal alternative gateways, and tax incentives targeting $10 billion in national IT service exports."
  },
  {
    q: "In digital banking and modern sovereign financial systems, what does the acronym 'CBDC' represent?",
    opts: ["Central Bank Digital Currency", "Commercial Banking Data Certificate", "Crypto Blockchain Distributed Coin", "Consumer Borrowing Digital Credit"],
    ans: "A",
    diff: "Easy",
    subCat: "International Current Affairs",
    exp: "CBDC stands for Central Bank Digital Currency—a digital form of a country's sovereign fiat currency issued and regulated directly by its central bank."
  },
  {
    q: "Which international non-governmental organization compiles and publishes the widely cited annual Global Gender Gap Report?",
    opts: ["World Economic Forum (WEF)", "United Nations Development Programme (UNDP)", "International Labour Organization (ILO)", "Amnesty International"],
    ans: "A",
    diff: "Medium",
    subCat: "Global Leaders & Summits",
    exp: "The World Economic Forum (WEF) annually evaluates gender parity across Economic Participation, Educational Attainment, Health, and Political Empowerment."
  },
  {
    q: "Which nation in early 2024 became the 32nd formal member of NATO, ending over two centuries of military non-alignment?",
    opts: ["Sweden", "Finland", "Austria", "Switzerland"],
    ans: "A",
    diff: "Easy",
    subCat: "Global Leaders & Summits",
    exp: "Sweden officially deposited its instrument of accession in Washington, D.C., becoming the 32nd member of NATO following Finland's entry in 2023."
  }
];

const seedCurrentAffairs2026 = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mcqs_db');
    console.log('MongoDB Connected successfully.');

    // 1. Locate or create Current Affairs category
    let caCategory = await Category.findOne({ name: 'Current Affairs' });
    if (!caCategory) {
      caCategory = await Category.create({
        name: 'Current Affairs',
        description: 'National & international events, awards & updates of 2026'
      });
      console.log('Created Current Affairs category.');
    }

    const caId = caCategory._id;

    // 2. Format questions for insertion
    const formattedQuestions = CURRENT_AFFAIRS_2026_QUESTIONS.map(item => ({
      questionText: item.q,
      options: {
        A: item.opts[0],
        B: item.opts[1],
        C: item.opts[2],
        D: item.opts[3]
      },
      correctAnswer: item.ans,
      explanation: item.exp,
      category: caId,
      subCategory: item.subCat,
      difficulty: item.diff
    }));

    // Check for existing questions to avoid duplicates
    let addedCount = 0;
    for (const qData of formattedQuestions) {
      const existing = await Question.findOne({ questionText: qData.questionText });
      if (!existing) {
        await Question.create(qData);
        addedCount++;
      }
    }

    console.log(`Successfully added ${addedCount} new Current Affairs 2026 MCQs (Total pool: ${formattedQuestions.length})!`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding Current Affairs 2026 MCQs:', err);
    process.exit(1);
  }
};

if (require.main === module) {
  seedCurrentAffairs2026();
}

module.exports = CURRENT_AFFAIRS_2026_QUESTIONS;

