/**
 * Scrabble Dictionary & Academic Vocabulary Definitions
 * Includes official 2-letter & 3-letter Scrabble words, ~4,000+ common English words,
 * and CSS/PMS/GRE high-yield academic vocabulary with concise definitions.
 */
(function (global) {
  'use strict';

  // High-yield CSS/PMS/GRE Academic & Competitive Exam Words with definitions
  const ACADEMIC_WORDS = {
    ACT: 'A formal statute or law passed by a legislative body.',
    ALLY: 'A state formally cooperating with another for military or strategic purposes.',
    AMEND: 'To formally alter or add to a constitution, statute, or bill.',
    APEX: 'The highest point or peak, such as the apex court (Supreme Court).',
    ARID: 'Having little or no rain; dry climate zone.',
    ARMS: 'Weapons and ammunition; armaments in defense policy.',
    ATOM: 'The basic unit of a chemical element.',
    AUDIT: 'An official inspection of an organization’s financial accounts.',
    BAIL: 'Temporary release of an accused person awaiting trial on security.',
    BANK: 'A financial institution licensed to receive deposits and make loans.',
    BASE: 'A military station, or a substance with pH greater than 7.',
    BILL: 'A draft of a proposed law presented to parliament for discussion.',
    BLOC: 'A group of countries or political parties with a common strategic interest.',
    BOND: 'A fixed-income financial instrument representing a loan to a government or firm.',
    BOOM: 'A period of rapid economic expansion.',
    CELL: 'The smallest structural and functional unit of an organism.',
    CENSUS: 'An official count or survey of a population.',
    CHARTER: 'A written grant or foundational treaty establishing an institution like the UN.',
    CIVIC: 'Relating to a city, citizenship, or civil duties.',
    CIVIL: 'Relating to ordinary citizens and non-military law.',
    CLAN: 'A group of close-knit families or tribal lineage.',
    CLIMATE: 'Long-term prevailing weather conditions in a region.',
    COAL: 'A combustible sedimentary rock used as a fossil fuel.',
    CODE: 'A systematic collection of laws or statutes (e.g., Penal Code).',
    COIN: 'Stamped metal currency issued by a sovereign authority.',
    CORE: 'The central innermost part of the Earth or a policy.',
    COUP: 'A sudden, violent, or illegal seizure of state power.',
    COURT: 'A tribunal presided over by a judge to administer justice.',
    CREDIT: 'Ability to obtain goods or funds before payment based on trust.',
    CRIME: 'An action or omission punishable by criminal law.',
    CRISIS: 'A time of intense difficulty, instability, or strategic danger.',
    CROP: 'A cultivated plant grown on a large scale for food or fiber.',
    CROWN: 'The sovereign authority in a constitutional monarchy.',
    CRUDE: 'Unrefined petroleum oil extracted from the earth.',
    CULTURE: 'The arts, customs, and social institutions of a nation or group.',
    CUSTOMS: 'Duties levied on imported goods; also traditional practices.',
    CYBER: 'Relating to computers, information networks, and digital security.',
    DAM: 'A barrier constructed to hold back water for irrigation or hydroelectricity.',
    DATA: 'Facts and statistics collected together for reference or analysis.',
    DEBT: 'Money owed by a state, firm, or individual to creditors.',
    DECREE: 'An official order issued by a legal authority or head of state.',
    DEFENSE: 'Protection of a nation’s sovereignty and territory.',
    DEFICIT: 'The amount by which government spending exceeds revenue.',
    DELTA: 'A triangular tract of sediment deposited at the mouth of a river.',
    DEMO: 'Short for demographic or public demonstration.',
    DIET: 'A legislative assembly (e.g., Japan’s National Diet) or daily nutrition.',
    DIPLOMA: 'An academic certificate awarded by an educational institution.',
    DNA: 'Deoxyribonucleic acid, the molecule carrying genetic instructions.',
    DOCTRINE: 'A stated principle of government policy in foreign or military affairs.',
    DOLLAR: 'The primary reserve currency of the international monetary system.',
    DRONE: 'An unmanned aerial vehicle used in surveillance or warfare.',
    DROUGHT: 'A prolonged period of abnormally low rainfall causing water shortage.',
    DUTY: 'A tax levied on imports/exports, or a moral/legal obligation.',
    EARTH: 'The third planet from the Sun; the terrestrial globe.',
    ECOLOGY: 'The branch of biology studying relations between organisms and environment.',
    ECONOMY: 'The system of production, distribution, and consumption of wealth.',
    EDICT: 'An official proclamation or order issued by a ruler.',
    ELECT: 'To choose a representative or official by voting.',
    ELITE: 'A select group superior in power, wealth, or influence.',
    EMBARGO: 'An official ban on trade or commercial activity with a country.',
    EMPIRE: 'An extensive group of states or territories under a single supreme authority.',
    ENERGY: 'Power derived from physical or chemical resources to do work.',
    ENVOY: 'A diplomatic representative or messenger sent by a government.',
    ENZYME: 'A biological protein that acts as a catalyst in biochemical reactions.',
    EPOCH: 'A distinct period of time in history or geology.',
    EQUITY: 'Fairness and impartiality in law, or ownership value in finance.',
    ERA: 'A long and distinct period of history.',
    ETHICS: 'Moral principles governing human conduct and public service.',
    EURO: 'The official single currency of the Eurozone member states.',
    EXILE: 'Being barred from one’s native country for political or punitive reasons.',
    EXPORT: 'Goods or services sold to another country.',
    FACT: 'A thing proved or known to be true.',
    FAITH: 'Strong belief or religious conviction.',
    FAMINE: 'Extreme scarcity of food across a region.',
    FAULT: 'A fracture in the Earth’s crust where earthquakes occur.',
    FEDERAL: 'A system of government dividing power between central and provincial tiers.',
    FEUDAL: 'A medieval social system based on land tenure and vassalage.',
    FIAT: 'Currency established as money by government decree without commodity backing.',
    FINE: 'A sum of money exacted as a legal penalty.',
    FIR: 'First Information Report — initial police record of a cognizable offence.',
    FIRM: 'A commercial business organization.',
    FISCAL: 'Relating to government revenue, taxation, and public expenditure.',
    FLAG: 'A national emblem representing a sovereign state.',
    FLEET: 'A group of naval vessels sailing together.',
    FLOOD: 'An overflow of water submerging normally dry land.',
    FLORA: 'The plant life of a particular region or geological period.',
    FORCE: 'Coercive military or physical strength in international relations.',
    FORUM: 'A place or assembly for public discussion or judicial hearing.',
    FOSSIL: 'Preserved remains or trace of ancient life in rock.',
    FRAUD: 'Wrongful or criminal deception intended for financial or personal gain.',
    FREE: 'Not under the control or power of another; liberty.',
    FRONT: 'The forward line of military engagement or a political coalition.',
    FUEL: 'Material burned or processed to produce heat or power.',
    FUND: 'A reserve of money set aside for a specific purpose (e.g., IMF).',
    GAS: 'A state of matter; also natural gas used for energy.',
    GDP: 'Gross Domestic Product — total monetary value of goods and services produced.',
    GENE: 'A unit of heredity transferred from parent to offspring.',
    GENOME: 'The complete set of genetic material in an organism.',
    GLACIER: 'A slowly moving mass of ice formed by compacted snow.',
    GLOBAL: 'Relating to the whole world; international in scope.',
    GOLD: 'A precious yellow metal historically backing monetary standards.',
    GRAIN: 'Cereal crops such as wheat, rice, and maize.',
    GRANT: 'A sum of money given by a government or body without repayment.',
    GRAPH: 'A visual diagram showing relationships between variable quantities.',
    GRAVITY: 'The fundamental force attracting physical bodies toward one another.',
    GULF: 'A deep inlet of the sea almost surrounded by land.',
    HABEAS: 'From Habeas Corpus — a writ protecting against unlawful detention.',
    HAZARD: 'A source of potential danger or environmental risk.',
    HEALTH: 'The state of physical, mental, and social well-being.',
    HEAT: 'Thermal energy transferred between systems.',
    HEGEMON: 'A dominant state exercising political or economic leadership over others.',
    HERB: 'A plant valued for medicinal or culinary properties.',
    HIGH: 'Elevated, as in High Court or high-pressure weather system.',
    HISTORY: 'The study of past events, particularly human affairs.',
    HOUSE: 'A legislative chamber such as the Lower or Upper House.',
    HUMAN: 'Relating to humankind and universal human rights.',
    HYDRO: 'Relating to water or hydroelectric power generation.',
    IDEAL: 'A principle or standard of perfection in political philosophy.',
    IMPORT: 'Goods or services brought into a country from abroad.',
    INCOME: 'Money received on a regular basis from work or investments.',
    INDEX: 'A statistical measure tracking economic or social performance.',
    INDUS: 'Major river system of Pakistan and cradle of the Indus Valley Civilization.',
    INERT: 'Chemically unreactive, such as noble gases.',
    INFLOW: 'Movement of capital, migrants, or water into a region.',
    ION: 'An atom or molecule with a net electric charge.',
    IRON: 'A key metallic element used in steel production and hemoglobin.',
    ISLAM: 'Monotheistic religion founded on the teachings of the Quran and Sunnah.',
    ISLAND: 'A piece of land completely surrounded by water.',
    ISSUE: 'An important topic or problem for debate or policy.',
    JAIL: 'A place for the confinement of people accused or convicted of crimes.',
    JET: 'A high-speed aircraft or high-altitude atmospheric wind stream.',
    JIHAD: 'Struggle or striving in Islamic jurisprudence and ethics.',
    JOB: 'Paid employment or public service post.',
    JOINT: 'Shared or combined, as in a Joint Parliamentary Session.',
    JUDGE: 'A public officer appointed to decide cases in a court of law.',
    JUNTA: 'A military or political group ruling a country after taking power.',
    JURY: 'A body of citizens sworn to give a verdict in a legal case.',
    JUST: 'Based on or behaving according to what is morally right and fair.',
    JUSTICE: 'Fair administration of law and equitable treatment.',
    KASHMIR: 'Disputed Himalayan region in South Asia of key geopolitical importance.',
    KING: 'A male monarch ruling a kingdom.',
    LABOR: 'Human effort used in the production of goods and services.',
    LAKE: 'A large body of water surrounded by land.',
    LAND: 'The solid surface of the earth; a primary factor of production.',
    LASER: 'A device emitting a focused beam of coherent light.',
    LAW: 'The system of rules recognized by a state to regulate conduct.',
    LEAGUE: 'An association of nations or groups for mutual aid.',
    LEGAL: 'Permitted by or relating to the law.',
    LEND: 'To grant temporary use of money or assets on condition of return.',
    LEVY: 'To impose a tax, fee, or fine by legal authority.',
    LIBEL: 'A published false statement damaging a person’s reputation.',
    LIBERTY: 'Freedom from oppressive restrictions imposed by authority.',
    LIMIT: 'A point or level beyond which something may not extend.',
    LIQUID: 'A fluid state of matter, or assets easily converted to cash.',
    LOAN: 'A sum of money borrowed and expected to be repaid with interest.',
    LOBBY: 'An organized group seeking to influence legislators.',
    LOCAL: 'Relating to a particular area or municipal government.',
    LOGIC: 'Reasoning conducted according to strict principles of validity.',
    MACRO: 'Large-scale, as in macroeconomics studying national aggregates.',
    MAGMA: 'Molten rock beneath the Earth’s surface.',
    MAJOR: 'Important or senior, as in a major power or military rank.',
    MANDATE: 'Official authority given by voters or an international body.',
    MAP: 'A diagrammatic representation of an area of land or sea.',
    MARINE: 'Relating to the sea, oceanography, or naval forces.',
    MARKET: 'A mechanism where buyers and sellers exchange goods and services.',
    MARS: 'The fourth planet from the Sun, known as the Red Planet.',
    MASS: 'The quantity of matter in a physical body.',
    MEDIA: 'Channels of mass communication including press and broadcast.',
    MEMO: 'A written message or diplomatic memorandum.',
    MERIT: 'The quality of being deserving based on ability and competence.',
    METAL: 'A solid material typically hard, shiny, and conductive.',
    METEOR: 'A small celestial body burning up upon entering Earth’s atmosphere.',
    METER: 'The SI base unit of length.',
    MICRO: 'Small-scale, as in microeconomics or microbiology.',
    MINE: 'An excavation for extracting minerals, or an explosive device.',
    MINT: 'An official facility where national coins are manufactured.',
    MISSILE: 'A guided weapon propelled toward a target.',
    MODEL: 'A theoretical representation of an economic or scientific system.',
    MONARCH: 'A sovereign head of state in a monarchy.',
    MONEY: 'A medium of exchange, unit of account, and store of value.',
    MONSOON: 'A seasonal prevailing wind bringing heavy rain to South Asia.',
    MOON: 'Earth’s natural satellite orbiting the planet.',
    MORAL: 'Concerned with principles of right and wrong behavior.',
    MOTION: 'A formal proposal put to a legislature for debate and vote.',
    MYTH: 'A traditional story explaining historical or natural phenomena.',
    NATION: 'A large body of people united by common history, culture, or statehood.',
    NATO: 'North Atlantic Treaty Organization — collective defense alliance.',
    NAVY: 'The branch of a nation’s armed forces operating at sea.',
    NEBULA: 'A giant interstellar cloud of dust and gas.',
    NERVE: 'A bundle of fibers transmitting impulses in the nervous system.',
    NET: 'Remaining after all deductions, as in net exports or net income.',
    NEUTRON: 'A subatomic particle with no electric charge.',
    NEWTON: 'The SI unit of force, named after Sir Isaac Newton.',
    NGO: 'Non-Governmental Organization working in civil society.',
    NOBLE: 'Belonging to a hereditary class, or chemically inert gases.',
    NORM: 'An accepted standard or rule of behavior in international society.',
    NORTH: 'A cardinal direction; also the developed Global North.',
    NOTE: 'A formal diplomatic communication or promissory banknote.',
    NUCLEAR: 'Relating to atomic nuclei, energy, or strategic deterrence.',
    OATH: 'A solemn promise made upon taking public office.',
    OCEAN: 'A vast expanse of salt water covering most of Earth’s surface.',
    OFFICE: 'A position of public authority or administrative duty.',
    OIL: 'Petroleum — a critical global energy commodity.',
    OPEC: 'Organization of the Petroleum Exporting Countries.',
    OPTIC: 'Relating to vision, light, or fiber-optic communications.',
    ORBIT: 'The curved gravitational path of a celestial object or satellite.',
    ORDER: 'An authoritative command, social stability, or world order.',
    ORE: 'A naturally occurring rock from which valuable metal can be extracted.',
    ORGAN: 'A part of an organism or a principal body of the UN.',
    OZONE: 'A triatomic oxygen layer protecting Earth from UV radiation.',
    PACT: 'A formal agreement or treaty between states.',
    PANEL: 'A group of experts or judges convened to examine an issue.',
    PAPER: 'An academic essay, policy white paper, or exam sheet.',
    PARITY: 'The state of being equal, especially in currency or nuclear arms.',
    PARTY: 'A political organization contesting elections, or a litigant.',
    PASS: 'A navigable route through mountains, or legislative approval.',
    PATENT: 'An exclusive legal right granted for an invention.',
    PEACE: 'Freedom from war and armed conflict.',
    PEAK: 'The pointed summit of a mountain.',
    PENAL: 'Relating to punishment prescribed by criminal law.',
    PERIL: 'Serious and immediate danger.',
    PHASE: 'A distinct stage in a process or lunar cycle.',
    PHOTON: 'A quantum particle of electromagnetic light.',
    PLAN: 'A structured strategy such as a Five-Year Development Plan.',
    PLANET: 'A celestial body orbiting a star.',
    PLASMA: 'The fourth state of matter consisting of ionized gas.',
    PLATE: 'A massive slab of Earth’s lithosphere in plate tectonics.',
    PLEA: 'A formal statement by or on behalf of a defendant in court.',
    PLOT: 'A secret plan or a measured piece of land.',
    POLAR: 'Relating to the North or South Pole, or polarity in IR.',
    POLE: 'An extremity of Earth’s rotational axis or a center of global power.',
    POLICE: 'The civil force responsible for law enforcement and public order.',
    POLICY: 'A deliberate course of action adopted by a government.',
    POLL: 'The process of voting in an election or surveying public opinion.',
    PORT: 'A harbor town or city where ships load and unload cargo.',
    POST: 'A public appointment, diplomatic mission, or mail service.',
    POWER: 'The capacity of a state or actor to influence outcomes.',
    PRESS: 'Newspapers, journalists, and news media collectively.',
    PRICE: 'The monetary value required to purchase a good or service.',
    PRIME: 'First in rank, as in Prime Minister or prime number.',
    PRISON: 'A facility for incarcerating convicted offenders.',
    PROBE: 'A formal investigation or an unmanned space explorer.',
    PROFIT: 'Financial gain — revenue minus total costs.',
    PROOF: 'Evidence establishing a fact in law or mathematics.',
    PROTON: 'A positively charged subatomic particle in an atomic nucleus.',
    PROXY: 'An actor or state acting on behalf of another in conflict.',
    PUBLIC: 'Concerning the people as a whole; state-owned.',
    PULSE: 'Rhythmic arterial beat or electromagnetic burst.',
    QUANTA: 'Discrete packets of energy in quantum physics.',
    QUARK: 'An elementary subatomic particle forming protons and neutrons.',
    QUEEN: 'A female sovereign monarch.',
    QUORUM: 'The minimum number of members required to conduct parliamentary business.',
    QUOTA: 'A fixed trade limit or reserved share in representation.',
    RACE: 'Competition (e.g., arms race) or demographic grouping.',
    RADAR: 'System detecting objects using radio waves.',
    RADIO: 'Electromagnetic waves used for wireless communication.',
    RAID: 'A sudden military or law-enforcement strike.',
    RAIL: 'Railway transport infrastructure.',
    RAIN: 'Precipitation falling from clouds.',
    RANK: 'A position in an administrative or military hierarchy.',
    RATE: 'A measure or ratio, such as interest rate or inflation rate.',
    RATIO: 'The quantitative relation between two amounts.',
    REALM: 'A kingdom or domain of activity.',
    REBEL: 'A person who rises in armed opposition against a government.',
    REFORM: 'Improvement or amendment of institutions, laws, or policies.',
    REGIME: 'A system of government or an international set of rules.',
    REGION: 'A geographic area with shared physical or political traits.',
    REIGN: 'The period of rule of a monarch.',
    RENT: 'Payment for use of land or property; economic rent.',
    REPORT: 'An official account or findings of a commission.',
    RIFT: 'A geological crack or a diplomatic split between allies.',
    RIGHT: 'A legal or moral entitlement protected by law.',
    RIOT: 'A violent disturbance of the peace by a crowd.',
    RISK: 'Exposure to danger, financial loss, or strategic uncertainty.',
    RIVER: 'A large natural stream of water flowing toward a sea or lake.',
    RNA: 'Ribonucleic acid — essential molecule in protein synthesis.',
    ROCK: 'Solid mineral material forming part of Earth’s crust.',
    ROCKET: 'A vehicle propelled by jet exhaust into space or flight.',
    ROLE: 'The function assumed by a state or institution.',
    RULE: 'An authoritative regulation or principle of governance.',
    RULER: 'A sovereign or head of government.',
    RURAL: 'Relating to the countryside rather than cities.',
    SAARC: 'South Asian Association for Regional Cooperation.',
    SALT: 'An ionic compound, or Strategic Arms Limitation Talks.',
    SCALE: 'A system of measurement or map proportion.',
    SCHEME: 'A systematic government plan or program.',
    SCHOOL: 'An institution for education or a tradition of thought.',
    SCIENCE: 'Systematic study of the physical and natural world.',
    SCOPE: 'The extent of jurisdiction or subject matter.',
    SEA: 'A large body of saltwater connected to an ocean.',
    SEAL: 'An official stamp authenticating a state document.',
    SEAT: 'A constituency or membership position in parliament.',
    SECT: 'A subgroup within a religious or philosophical tradition.',
    SECTOR: 'A distinct part of an economy (agriculture, industry, services).',
    SEED: 'A plant’s unit of reproduction; also initial startup capital.',
    SENATE: 'The upper legislative chamber in bicameral parliaments like Pakistan and the US.',
    SERF: 'An agricultural laborer bound under the feudal system.',
    SESSION: 'A formal sitting of a parliament or court.',
    SHARE: 'A unit of equity ownership in a corporation.',
    SHARIA: 'Islamic canonical law derived from the Quran and Sunnah.',
    SHELL: 'An artillery projectile or an electron orbital layer.',
    SHIFT: 'A change in geopolitical alignment or economic structure.',
    SHIP: 'A large seagoing vessel for trade or naval defense.',
    SHOCK: 'A sudden external disruption to an economy (e.g., oil shock).',
    SHORE: 'The land along the edge of a sea or lake.',
    SIEGE: 'A military blockade surrounding a fortified place.',
    SIGNAL: 'A transmitted electromagnetic wave or diplomatic indicator.',
    SINDH: 'Southeastern province of Pakistan, home to Karachi and Mohenjo-daro.',
    SITE: 'A geographic location or archaeological heritage spot.',
    SLAVE: 'A person held in forced servitude, abolished under international law.',
    SMOG: 'Air pollution combining smoke and fog.',
    SOCIAL: 'Relating to human society and public welfare.',
    SOIL: 'The upper layer of earth in which plants grow.',
    SOLAR: 'Relating to the Sun or renewable solar energy.',
    SOLID: 'Firm and stable in shape; a fundamental state of matter.',
    SONAR: 'Sound navigation and ranging used underwater.',
    SOUND: 'Mechanical vibrations traveling through a medium.',
    SOUTH: 'A cardinal direction; also the developing Global South.',
    SPACE: 'The expanse beyond Earth’s atmosphere.',
    SPECIES: 'A biological group of organisms capable of interbreeding.',
    SPEECH: 'Formal public address or freedom of expression.',
    SPHERE: 'A round geometric body or a sphere of geopolitical influence.',
    SPIN: 'Intrinsic angular momentum of particles, or media framing.',
    SPLIT: 'A division within a political party or alliance.',
    SPY: 'An intelligence agent collecting covert information.',
    SQUAD: 'A small organized military or police unit.',
    STAGE: 'A phase in development or diplomatic negotiation.',
    STAKE: 'A vested interest or share in an enterprise.',
    STAR: 'A luminous astronomical sphere of plasma.',
    STATE: 'A sovereign political entity with territory, population, and government.',
    STATUS: 'Legal or diplomatic standing in international law.',
    STATUTE: 'A written law passed by a legislative body.',
    STEAM: 'Water vapor used historically to power industrial engines.',
    STEEL: 'An alloy of iron and carbon vital to heavy industry.',
    STOCK: 'Capital raised by a corporation through issuing shares.',
    STORM: 'A violent atmospheric disturbance with strong winds and rain.',
    STRAIT: 'A narrow maritime passage connecting two seas (e.g., Strait of Hormuz).',
    STRATA: 'Layers of sedimentary rock or social classes.',
    STRIKE: 'A work stoppage by labor or a targeted military attack.',
    STUDY: 'Detailed academic investigation and analysis.',
    STYLE: 'A manner of governance, writing, or architecture.',
    SUB: 'Short for submarine or subsidiary.',
    SUEZ: 'Strategic artificial sea-level canal in Egypt linking Mediterranean and Red Sea.',
    SUIT: 'A legal proceeding brought in a civil court.',
    SUMMIT: 'A high-level meeting of heads of state or government.',
    SUN: 'The star at the center of our Solar System.',
    SUPPLY: 'The total amount of a good or service available to consumers.',
    SURGE: 'A sudden powerful increase in prices, troops, or energy.',
    SURPLUS: 'An excess of revenue over expenditure or exports over imports.',
    SURVEY: 'A systematic collection of data or land measurement.',
    SYNOD: 'An assembly of clergy or religious council.',
    SYSTEM: 'An interconnected set of institutions, organs, or states.',
    TACTIC: 'A carefully planned short-term action in warfare or politics.',
    TARIFF: 'A tax or duty imposed on imported or exported goods.',
    TASK: 'A specific assignment or mission.',
    TAX: 'A compulsory financial charge levied by a government.',
    TEAM: 'A group working jointly toward a shared objective.',
    TECH: 'Technology — application of scientific knowledge for practical purposes.',
    TENSE: 'Marked by geopolitical strain or grammatical time.',
    TERM: 'A fixed period of office or a specialized concept.',
    TEST: 'An examination, trial, or scientific experiment.',
    TEXT: 'The official wording of a treaty, statute, or book.',
    THEORY: 'A coherent framework of principles explaining phenomena.',
    THESIS: 'A central argument supported by evidence in an academic essay.',
    THRONE: 'The ceremonial seat of a sovereign monarch.',
    TIDE: 'Periodic rise and fall of ocean levels caused by lunar gravity.',
    TIER: 'A level in an administrative or judicial hierarchy.',
    TIME: 'The continuous progression of existence and historical chronology.',
    TITHE: 'Historically a tenth part of produce paid as tax or charity.',
    TITLE: 'Legal right to ownership, or an official rank.',
    TOLL: 'A charge payable for road/bridge use, or casualty count.',
    TON: 'A unit of weight used in shipping and commodity trade.',
    TOPIC: 'A subject of academic discussion or examination.',
    TORT: 'A civil wrongful act leading to legal liability.',
    TOTAL: 'Complete or absolute, as in total war or total fertility rate.',
    TOWN: 'An urban settlement smaller than a city.',
    TOXIN: 'A poisonous substance produced by living organisms.',
    TRACE: 'A tiny quantity of a chemical element or historical evidence.',
    TRACK: 'A railway line or diplomatic channel (e.g., Track II diplomacy).',
    TRADE: 'The commercial exchange of goods and services between nations.',
    TRAIT: 'A distinguishing genetic or behavioral characteristic.',
    TRUCE: 'A temporary agreement between enemies to stop fighting.',
    TRUST: 'A fiduciary legal arrangement or strategic confidence.',
    TRUTH: 'Accordance with fact or reality.',
    TUBE: 'A hollow cylinder used in anatomy or laboratory apparatus.',
    TUNDRA: 'A vast, flat, treeless Arctic biome with permafrost.',
    TURF: 'Territory or sphere of administrative jurisdiction.',
    TYPE: 'A category of things sharing common traits.',
    ULTRA: 'Extreme or beyond normal limits, as in ultraviolet radiation.',
    UN: 'United Nations — intergovernmental organization for international peace.',
    UNION: 'A federation of states or an organized association of workers.',
    UNIT: 'A standard quantity of measurement or a military subdivision.',
    UNITE: 'To join together for a common political or strategic goal.',
    UNITY: 'The state of being united as a cohesive nation.',
    URBAN: 'Relating to cities and towns.',
    USAGE: 'Customary practice in law or language.',
    USURY: 'The practice of lending money at unreasonably high interest rates.',
    VALID: 'Legally binding or logically sound.',
    VALLEY: 'A low area of land between hills or mountains.',
    VALUE: 'Economic worth or a guiding ethical principle.',
    VAPOR: 'A substance diffused in gaseous form.',
    VAULT: 'A secure room for storing reserves or state archives.',
    VECTOR: 'A quantity having magnitude and direction, or a disease carrier.',
    VEIN: 'A blood vessel carrying blood back to the heart, or a mineral deposit.',
    VENUE: 'The legally proper place for a trial or diplomatic summit.',
    VERB: 'A word describing an action, state, or occurrence.',
    VERDICT: 'A formal decision on a disputed issue in a court of law.',
    VERSE: 'A line of poetry or a numbered passage of scripture.',
    VESSEL: 'A ship, boat, or blood-carrying duct.',
    VETO: 'A constitutional or UNSC P5 power to reject a decision or resolution.',
    VICE: 'Immoral conduct, or a deputy official (e.g., Vice President).',
    VIEW: 'An opinion, perspective, or judicial observation.',
    VIGIL: 'A period of watchful attention or peaceful demonstration.',
    VILLA: 'A residence or historic diplomatic venue.',
    VIRAL: 'Relating to a virus or rapid spread of information.',
    VIRTUE: 'Behavior showing high moral standards.',
    VIRUS: 'A microscopic infectious agent replicating inside living cells.',
    VISA: 'An official endorsement on a passport permitting entry to a country.',
    VISION: 'Strategic foresight in national planning.',
    VITAL: 'Essential for life or national security.',
    VOCAL: 'Expressed openly in public debate.',
    VOICE: 'Political representation or grammatical form.',
    VOID: 'Having no legal force or binding effect.',
    VOLT: 'The SI unit of electric potential.',
    VOLUME: 'The amount of space occupied, or total trade quantity.',
    VOTE: 'A formal expression of choice in an election or legislature.',
    VOW: 'A solemn promise or pledge.',
    WAGE: 'A fixed regular payment earned for labor.',
    WAIVER: 'Voluntary relinquishment of a legal right or trade restriction.',
    WALL: 'A defensive fortification or economic barrier.',
    WAR: 'Armed conflict between states or organized groups.',
    WARD: 'An electoral district or a minor under legal guardianship.',
    WASTE: 'Unwanted byproduct of industry or consumption.',
    WATCH: 'Surveillance, monitoring, or a naval duty shift.',
    WATER: 'H2O — vital natural resource essential for life and agriculture.',
    WATT: 'The SI unit of power.',
    WAVE: 'A disturbance transferring energy through space or matter.',
    WAX: 'A natural lipid, or to increase in lunar illumination.',
    WAY: 'A route, method, or legal right of way.',
    WEAK: 'Lacking strength, as in a weak currency or fragile state.',
    WEALTH: 'An abundance of valuable economic resources or assets.',
    WEAPON: 'An instrument designed for combat or deterrence.',
    WEIGH: 'To measure mass or carefully consider judicial evidence.',
    WEST: 'A cardinal direction; geopolitically, Western nations.',
    WHARF: 'A dockside structure where ships moor to load cargo.',
    WHEAT: 'A staple cereal crop critical to food security.',
    WHIP: 'A parliamentary official ensuring party discipline during votes.',
    WHO: 'World Health Organization — specialized UN agency for public health.',
    WIDE: 'Broad in extent or scope.',
    WILL: 'A legal declaration of how a person’s estate is distributed.',
    WIN: 'Victory in an election, court case, or competition.',
    WIND: 'Moving air harnessed for renewable wind energy.',
    WING: 'A political faction (left/right) or an air force unit.',
    WIRE: 'A metallic conductor or electronic funds transfer.',
    WISE: 'Showing sound judgment and experience.',
    WIT: 'Keen intelligence or sharp verbal humor.',
    WOLF: 'A wild canine predator.',
    WOMAN: 'An adult female human; central to gender equality studies.',
    WOOD: 'Timber resource derived from forests.',
    WORD: 'A single distinct meaningful element of speech or writing.',
    WORK: 'Physical or mental effort; force times distance in physics.',
    WORLD: 'The Earth and all its nations and peoples.',
    WORTH: 'Economic or moral value.',
    WRIT: 'A formal written order issued by a constitutional court (e.g., Mandamus).',
    WTO: 'World Trade Organization — global body regulating international trade.',
    XRAY: 'High-energy electromagnetic radiation used in medical imaging.',
    YARD: 'A unit of length equal to 3 feet.',
    YEAR: 'The orbital period of Earth around the Sun (365.25 days).',
    YIELD: 'Agricultural output per acre, or return on a financial bond.',
    YOUTH: 'Young people — a key demographic dividend in developing nations.',
    ZEAL: 'Great energy or enthusiasm in pursuit of a cause.',
    ZENITH: 'The highest point reached in the sky or in power.',
    ZERO: 'Numerical value 0; as in net-zero carbon emissions.',
    ZINC: 'An essential metallic trace element (Zn).',
    ZONE: 'An area designated for a particular purpose (e.g., SEZ, EEZ).'
  };

  // Comprehensive General English Scrabble Word Bank (2 to 8 letters)
  const RAW_WORD_STRING = `
AA AB AD AE AG AH AI AL AM AN AR AS AT AW AX AY BA BE BI BO BY DA DE DO ED EF EH EL EM EN ER ES ET EX
FA FE GI GO HA HE HI HM HO ID IF IN IS IT JO KA KI LA LI LO MA ME MI MM MO MU MY NA NE NO NU OD OE OF
OH OI OK OM ON OP OR OS OW OX OY PA PE PI PO QI RE SH SI SO TA TI TO UH UM UN UP US UT WE WO XI XU YA
YE YO ZA
ACE ACT ADD ADO ADS AGE AGO AID AIL AIM AIR ALE ALL ALP AMP AND ANT ANY APE APT ARC ARE ARK ARM ART ASH
ASK ASP ATE AWE AWL AXE AYE BAD BAG BAH BAN BAR BAT BAY BED BEE BEG BET BIB BID BIG BIN BIO BIT BOA BOB
BOD BOG BOO BOP BOW BOX BOY BRA BUD BUG BUM BUN BUS BUT BUY BYE CAB CAD CAM CAN CAP CAR CAT CAW COB COD
COG CON COO COP COT COW COX COY CRY CUB CUD CUE CUP CUR CUT DAB DAD DAM DAN DAY DEB DEN DEW DIB DID DIE
DIG DIM DIN DIP DOC DOE DOG DON DOT DRY DUB DUD DUE DUG DUN DUO DYE EAR EAT EBB EEL EGG EGO EKE ELD ELF
ELK ELM EMU END EON ERA ERE ERG ERR EVE EWE EYE FAB FAD FAN FAR FAT FAX FED FEE FEN FEW FEY FEZ FIB FIG
FIN FIR FIT FIX FLU FLY FOB FOE FOG FOP FOR FOX FRY FUB FUD FUG FUN FUR GAB GAD GAG GAL GAM GAP GAR GAS
GAT GAY GED GEE GEL GEM GEN GET GIG GIN GIT GNU GOB GOD GOO GOT GUM GUN GUT GUY GYM GYP HAD HAG HAH HAM
HAP HAS HAT HAW HAY HEM HEN HEP HER HEW HEX HEY HIC HID HIE HIM HIP HIS HIT HOB HOD HOE HOG HON HOP HOT
HOW HOY HUB HUE HUG HUH HUM HUN HUP HUT ICE ICY IDS IFF IFS ILK ILL IMP INK INN ION IRE IRK ISM ITS IVY
JAB JAG JAM JAR JAW JAY JET JEU JEW JIB JIG JIN JOB JOE JOG JOT JOW JOY JUG JUN JUS JUT KAB KAE KAF KAS
KAT KAY KEA KEF KEG KEN KEP KEX KEY KHI KID KIF KIN KIP KIR KIS KIT KOA KOB KOI KOP KOR KOS KUE KYE LAB
LAC LAD LAG LAM LAP LAR LAS LAT LAV LAW LAX LAY LEA LED LEE LEG LEI LEK LET LEU LEV LEX LEY LEZ LIB LID
LIE LIN LIP LIS LIT LOB LOG LOO LOP LOT LOW LOX LUG LUM LUV LUX LYE MAC MAD MAE MAG MAN MAP MAR MAS MAT
MAW MAX MAY MED MEG MEL MEM MEN MET MEW MHO MIB MIC MID MIG MIL MIM MIR MIS MIX MOA MOB MOC MOD MOG MOL
MOM MON MOO MOP MOR MOS MOT MOW MUD MUG MUM MUN MUS MUT MYC NAB NAE NAG NAH NAM NAN NAP NAW NAY NEB NEE
NET NEW NIB NIL NIM NIP NIT NIX NOB NOD NOG NOH NOM NOO NOR NOS NOT NOW NTH NUB NUN NUS NUT OAF OAK OAR
OAT OBA OBE OBI OCA ODA ODD ODE ODS OES OFF OFT OHM OHO OHS OIL OKA OKE OLD OLE OMS ONE ONO ONS OOH OOT
OPE OPS OPT ORA ORB ORC ORE ORS ORT OSE OUD OUR OUT OVA OWE OWL OWN OXO OXY PAC PAD PAH PAL PAM PAN PAP
PAR PAS PAT PAW PAX PAY PEA PEC PED PEE PEG PEH PEN PEP PER PES PET PEW PHI PHT PIA PIC PIE PIG PIN PIP
PIS PIT PIU PIX PLY POD POH POI POL POM POO POP POT POW POX PRO PRY PSI PUB PUD PUG PUL PUN PUP PUR PUS
PUT PYA PYE PYX QAT QIS QUA RAD RAG RAH RAI RAJ RAM RAN RAP RAS RAT RAW RAX RAY REB REC RED REE REF REG
REI REM REP RES RET REV REX RHO RIA RIB RID RIF RIG RIM RIN RIP ROB ROC ROD ROE ROM ROO ROT ROW RUB RUE
RUG RUM RUN RUT RYA RYE SAB SAC SAD SAE SAG SAL SAP SAT SAU SAW SAX SAY SEA SEC SEE SEG SEI SEL SEN SER
SET SEW SEX SHA SHE SHH SHY SIB SIC SIM SIN SIP SIR SIS SIT SIX SKA SKI SKY SLY SOB SOD SOL SOM SON SOP
SOS SOT SOU SOW SOX SOY SPA SPY SRI STY SUB SUD SUE SUK SUM SUN SUP SUQ SYN TAB TAD TAE TAG TAJ TAM TAN
TAO TAP TAR TAS TAT TAU TAV TAW TAX TEA TED TEE TEG TEL TEN TET TEW THE THO THY TIC TIE TIL TIN TIP TIS
TIT TOD TOE TOG TOM TON TOO TOP TOR TOT TOW TOY TRY TSK TUB TUG TUI TUN TUP TUT TUX TWA TWO TYE UDO UGH
UKE ULU UMM UMP UNS UPO UPS URB URD URN URP USE UTA UTE UTS VAC VAN VAR VAS VAT VAU VAV VAW VEE VEG VET
VEX VIA VID VIE VIG VIM VIS VOE VOW VOX VUG VUM WAB WAD WAE WAG WAN WAP WAR WAS WAT WAW WAX WAY WEB WED
WEE WEN WET WHA WHO WHY WIG WIN WIS WIT WIZ WOE WOG WOK WON WOO WOP WOS WOT WOW WRY WUD WYE WYN XIS YAG
YAH YAK YAM YAP YAR YAW YAY YEA YEH YEN YEP YES YET YEW YID YIN YIP YOB YOD YOK YOM YON YOU YOW YUK YUM
YUP ZAG ZAP ZAS ZAX ZED ZEE ZEK ZEP ZIG ZIN ZIP ZIT ZOA ZOO ZUZ ZZZ
ABLE ACHE ACID ACME ACRE AGED AIDE AJAR AKIN ALAS ALLY ALMS ALOE ALSO ALTO AMID AMMO ANEW ANKH ANTE ANTI
APEX ARCH AREA ARIA ARMY ARTS ARTY ASHY ATOM AUNT AURA AUTO AVID AVOW AWAY AWED AWRY AXES AXIS AXLE BABE
BABY BACK BADE BAIL BAIT BAKE BALD BALE BALL BALM BAND BANE BANG BANK BARE BARK BARN BARS BASE BASH BASK
BASS BATH BAWL BEAD BEAK BEAM BEAN BEAR BEAT BEAU BECK BEEF BEEN BEEP BEER BEET BELL BELT BEND BENT BERG
BERM BEST BETA BIAS BIDE BILE BILL BIND BIRD BITE BLAB BLEW BLIP BLOB BLOC BLOT BLOW BLUE BLUR BOAR BOAT
BODE BODY BOGY BOIL BOLD BOLE BOLL BOLT BOMB BOND BONE BONG BONY BOOK BOOM BOON BOOR BOOT BORE BORN BOSS
BOTH BOUT BOWL BOXY BRAD BRAG BRAN BRAT BRAY BRED BREW BRIE BRIG BRIM BROW BUCK BUFF BULB BULK BULL BUMP
BUNG BUNK BUNT BUOY BURN BURP BURR BURY BUSH BUSK BUSS BUST BUSY BUTT BUZZ BYTE CAFE CAGE CAGY CAKE CALF
CALL CALM CAME CAMP CANE CANT CAPE CARD CARE CARP CART CASE CASH CASK CAST CAVE CEIL CELL CENT CHAD CHAI
CHAP CHAR CHAT CHEF CHEW CHIC CHIN CHIP CHIT CHOP CHOW CHUG CHUM CITE CITY CLAD CLAM CLAN CLAP CLAW CLAY
CLEF CLEW CLIP CLOD CLOG CLOP CLOT CLUB CLUE COAL COAT COAX COCK CODA CODE COED COIF COIL COIN COKE COLD
COLE COLT COMA COMB COME CONE CONK CONN COOK COOL COOP COOT COPE COPY CORD CORE CORK CORM CORN CORP COST
COSY COTE COUP COVE COWL COZY CRAB CRAG CRAM CRAN CRAP CRAW CREW CRIB CRIM CROP CROW CRUD CRUX CUBE CUFF
CULL CULT CURB CURD CURE CURL CURT CUSP CUSS CUTE CYAN CYST DACE DADA DADO DAFT DALE DAME DAMP DANK DARE
DARK DARN DART DASH DATA DATE DAUB DAWN DAYS DAZE DEAD DEAF DEAL DEAN DEAR DEBT DECK DEED DEEM DEEP DEER
DEFT DEFY DELI DELL DEMO DENS DENT DENY DESK DEWY DIAL DICE DIED DIET DIME DINE DING DINT DIRE DIRK DIRT
DISC DISH DISK DIVE DOCK DODO DOER DOES DOGE DOLE DOLL DOLT DOME DONE DONG DOOM DOOR DOPE DOPY DORK DORM
DOSE DOTE DOTH DOUR DOVE DOWN DOZE DRAB DRAG DRAM DRAW DRAY DREG DREW DRIP DROP DRUG DRUM DUAL DUBS DUCK
DUCT DUDE DUEL DUET DUKE DULL DULY DUMB DUMP DUNE DUNG DUNK DUSK DUST DUTY DYAD DYED DYER EACH EARL EARN
EASE EAST EASY EAVE ECHO ECRU EDDY EDGE EDGY EDIT EELS EGAD EGGS EGOS EKED ELAN ELKS ELMS ELSE EMIR EMIT
EMUS ENDS ENVY EONS EPIC ERAS ERGO ERGS ERRS ETCH EURO EVEN EVER EVES EVIL EWER EWES EXAM EXEC EXES EXIT
EXPO EYED EYES FACE FACT FADE FADS FAIL FAIN FAIR FAKE FALL FAME FANG FANS FARE FARM FARO FAST FATE FATS
FAUN FAUX FAVE FAWN FAZE FEAR FEAT FEED FEEL FEES FEET FELL FELT FEND FERN FEST FETE FEUD FIAT FIBS FIEF
FIFE FIGS FILE FILL FILM FIND FINE FINK FINO FINS FIRE FIRM FIRS FISH FIST FITS FIVE FIZZ FLAB FLAG FLAK
FLAM FLAN FLAP FLAT FLAW FLAX FLAY FLEA FLED FLEE FLEW FLEX FLIP FLIT FLOE FLOG FLOP FLOW FLUB FLUE FLUX
FOAL FOAM FOBS FOCI FOES FOGS FOGY FOIL FOLD FOLK FOND FONT FOOD FOOL FOOT FORD FORE FORK FORM FORT FOUL
FOUR FOWL FRAY FREE FRET FRIG FRIT FROG FROM FROW FRUG FUEL FULL FUME FUMY FUND FUNK FURL FURS FURY FUSE
FUSS FUZE FUZZ GAFF GAGE GAIN GAIT GALA GALE GALL GAME GAMP GAMS GAMY GANG GAPE GAPS GARB GASH GASP GATE
GAVE GAWK GAWP GAZE GEAR GEEK GEES GELD GELS GELT GEMS GENE GENS GENT GERM GETS GHEE GIBE GIFT GILD GILL
GILT GIMP GINS GIRD GIRL GIRN GIRT GIST GIVE GLAD GLEE GLEN GLIB GLIM GLOB GLOM GLOP GLOW GLUE GLUG GLUM
GLUT GNAR GNAT GNAW GNUS GOAD GOAL GOAT GOBS GODS GOER GOES GOLD GOLF GONE GONG GOOD GOOF GOOK GOON GOOP
GORE GORY GOSH GOTH GOUT GOWN GRAB GRAD GRAM GRAN GRAY GREW GREY GRID GRIG GRIM GRIN GRIP GRIT GROG GROK
GROW GRUB GRUE GUAN GUAR GUCK GUFF GUID GULF GULL GULP GUMS GUNK GUNS GURU GUSH GUST GUTS GUYS GYMS GYPS
GYRE GYRO GYVE HACK HADE HADJ HADS HAED HAEM HAEN HAES HAET HAFF HAFT HAGS HAHA HAHS HAIK HAIL HAIN HAIR
HAJI HAJJ HAKE HALE HALF HALL HALM HALO HALT HAME HAMS HAND HANG HANK HANT HAPS HARD HARE HARK HARL HARM
HARP HART HASH HASP HAST HATE HATH HATS HAUL HAUT HAVE HAWK HAWS HAYS HAZE HAZY HEAD HEAL HEAP HEAR HEAT
HEBE HECK HEED HEEL HEFT HEHS HEIL HEIR HELD HELL HELM HELP HEME HEMP HEMS HENS HENT HERB HERD HERE HERL
HERM HERN HERO HERS HEST HETH HEWN HEWS HICK HIDE HIED HIES HIGH HIKE HILA HILI HILL HILT HIMS HIND HINS
HINT HIPS HIRE HISN HISS HIST HITS HIVE HOAR HOAX HOBS HOCK HODS HOED HOER HOES HOGG HOGS HOKE HOLD HOLE
HOLK HOLM HOLP HOLS HOLT HOLY HOME HOMO HOMY HONE HONG HONK HONS HOOD HOOF HOOK HOOP HOOT HOPE HOPS HORA
HORN HOSE HOST HOTS HOUR HOVE HOWE HOWF HOWK HOWL HOWS HOYA HOYS HUBS HUCK HUED HUES HUFF HUGE HUGS HUIC
HULA HULK HULL HUMP HUMS HUNG HUNH HUNK HUNS HUNT HURL HURT HUSH HUSK HUTS HWAN HYLA HYMN HYPE HYPO HYPS
HYTE IAMB IBEX IBIS ICED ICES ICKY ICON IDEA IDEM IDES IDLE IDLY IDOL IDYL IFFY IGGS IGLU IKAT IKON ILEA
ILEX ILIA ILKA ILKS ILLS ILLY IMAM IMID IMMY IMPI IMPS INBY INCH INFO INIA INKS INKY INLY INNS INRO INTI
INTO IONS IOTA IRED IRES IRID IRIS IRKS IRON ISBA ISLE ISMS ITCH ITEM IWIs IXIA IZAR JABS JACK JADE JAGG
JAGS JAIL JAKE JAMB JAMS JANE JAPE JARS JATO JAUK JAUP JAWS JAYS JAZZ JEAN JEEP JEER JEES JEEZ JEFE JEHU
JELL JERK JEST JETE JETS JEUX JEWS JIAO JIBB JIBE JIBS JIFF JIGS JILT JINK JINN JINS JINX JIVE JIVY JOBS
JOCK JOES JOEY JOGS JOHN JOIN JOKE JOKY JOLE JOLT JOSH JOSS JOTA JOTS JOUK JOWL JOWS JOYS JUBA JUBE JUCO
JUDO JUGA JUGS JUJU JUKE JUKU JUMP JUNK JUPE JURA JURY JUST JUTE JUTS KAAS KABS KADI KAES KAFS KAGU KAIF
KAIL KAIN KAKA KAKI KALE KAME KAMI KANA KANE KAON KAPA KAPH KARN KART KATA KATS KAVA KAYO KAYS KBAR KEAS
KEBS KECK KEDS KEEF KEEK KEEL KEEN KEEP KEET KEFS KEGS KELP KELT KEMP KENO KENS KENT KEPI KEPS KEPT KERB
KERF KERN KETO KEYS KHAF KHAN KHAT KHET KHIS KIBE KICK KIDS KIEF KIER KIFS KIKE KILL KILN KILO KILT KINA
KIND KINE KING KINK KINO KINS KIPS KIRK KIRN KIRS KISS KIST KITE KITH KITS KIWI KNAP KNAR KNEE KNEW KNIT
KNOB KNOP KNOT KNOW KNUR KOAN KOAS KOBO KOBS KOEL KOHL KOIS KOJI KOLA KOLO KONK KOOK KOPH KOPS KORA KORE
KORS KOTO KRIS KUDO KUDU KUES KUFI KUNA KUNE KURU KVAS KYAK KYAR KYAT KYES KYTE LABS LACE LACK LACS LACY
LADE LADS LADY LAGS LAIC LAID LAIN LAIR LAKE LAKH LAKS LAMA LAMB LAME LAMP LAMS LAND LANE LANG LANK LAPS
LARD LARI LARK LARS LASE LASH LASS LAST LATE LATH LATI LATS LATU LAUD LAVA LAVE LAWS LAYS LAZE LAZY LEAD
LEAF LEAK LEAL LEAN LEAP LEAR LEAS LECH LEED LEEK LEER LEES LEET LEFT LEGS LEHR LEIS LEKE LEKS LEKU LEND
LENO LENS LENT LEPT LESS LEST LETS LEUD LEVA LEVO LEVY LEWD LEYS LIAR LIAS LIBS LICE LICH LICK LIDO LIDS
LIED LIEN LIER LIES LIEU LIFE LIFT LIKE LILT LILY LIMA LIMB LIME LIMN LIMO LIMP LIMY LINE LING LINK LINN
LINO LINS LINT LINY LION LIPA LIPE LIPS LIRE LIRI LISP LIST LITE LITS LITU LIVE LOAD LOAF LOAM LOAN LOBE
LOBO LOBS LOCA LOCH LOCI LOCK LOCO LODE LOFT LOGE LOGO LOGS LOGY LOID LOIN LOLL LONE LONG LOOK LOOM LOON
LOOP LOOR LOOS LOOT LOPE LOPS LORD LORE LORN LORY LOSE LOSS LOST LOTA LOTE LOTH LOTS LOUD LOUP LOUR LOUT
LOVE LOWE LOWS LUAU LUBE LUCE LUCK LUDE LUES LUFF LUGE LUGS LULL LULU LUMP LUMS LUNA LUNE LUNG LUNK LUNT
LUNY LURE LURK LUSH LUST LUTE LUTZ LUXE LWEI LYCH LYES LYNX LYRE LYSE MAAR MABE MACE MACH MACK MACS MADE
MADS MAGE MAGI MAGS MAID MAIL MAIM MAIN MAIR MAKE MAKO MALE MALL MALM MALT MAMA MANA MANE MANO MANS MANY
MAPS MARA MARC MARE MARK MARL MARS MART MASH MASK MASS MAST MATE MATH MATS MATT MAUD MAUL MAUN MAUT MAWN
MAWS MAXI MAYA MAYO MAYS MAZE MAZY MEAD MEAL MEAN MEAT MEDS MEED MEEK MEET MEGA MEGS MELA MELD MELL MELO
MELT MEME MEMO MEMS MEND MENO MENU MEOW MERC MERE MERK MERL MESA MESH MESS META METE METH METS MEWL MEWS
MEZE MHOS MIBS MICA MICE MICK MICS MIDI MIDS MIEN MIFF MIGG MIGS MIKE MILD MILE MILK MILL MILO MILS MILT
MIME MINA MIND MINE MING MINI MINK MINO MINT MINX MIRE MIRI MIRK MIRS MIRY MISE MISO MISS MIST MITE MITT
MITY MIXT MOAN MOAS MOAT MOBS MOCK MOCS MODE MODI MODS MOGS MOIL MOJO MOKE MOLA MOLD MOLE MOLL MOLS MOLT
MOLY MOME MOMI MOMS MONK MONO MONS MONY MOOD MOOL MOON MOOR MOOS MOOT MOPE MOPS MOPY MORA MORE MORN MORS
MORT MOSH MOSK MOSS MOST MOTE MOTH MOTS MOTT MOUE MOVE MOWN MOWS MOXA MOZO MUCH MUCK MUDS MUFF MUGG MUGS
MULE MULL MUMM MUMP MUMS MUMU MUNG MUNI MUNS MUON MURA MURE MURK MURR MUSE MUSH MUSK MUSS MUST MUTE MUTS
MUTT MYCS MYNA MYTH NAAN NABE NABS NADA NAFF NAGS NAIF NAIL NALA NAME NANA NANS NAOI NAOS NAPA NAPE NAPS
NARC NARD NARK NARY NAVE NAVY NAYS NEAP NEAR NEAT NEBS NECK NEED NEEM NEEP NEGS NEIF NEMA NENE NEON NERD
NESS NEST NETS NETT NEUK NEUM NEVE NEVI NEWS NEWT NEXT NIBS NICE NICK NIDE NIDI NIGH NILL NILS NIMS NINE
NIPA NIPS NISI NITE NITS NIXE NIXY NOBS NOCK NODE NODI NODS NOEL NOES NOGG NOGS NOIL NOIR NOLO NOMA NOME
NOMS NONA NONE NONG NOOK NOON NOPE NORI NORK NORM NOSE NOSY NOTA NOTE NOUN NOUP NOUS NOVA NOWS NOWT NUBS
NUDE NUKE NULL NUMB NUNS NURD NURL NUTS OAFS OAKS OAKY OARS OAST OATH OATS OBAS OBES OBEY OBIA OBIS OBIT
OBOE OBOL OCAS ODAS ODDS ODEA ODES ODIC ODOR ODYL OFAY OFFS OGAM OGEE OGLE OGRE OHED OHIA OHMS OILS OILY
OINK OKAS OKAY OKEH OKES OKRA OLDS OLDY OLEA OLEO OLES OLIO OLLA OMEN OMER OMIT ONCE ONER ONES ONLY ONOS
ONTO ONUS ONYX OOHS OOMS OONS OONT OOPS OOSE OOSY OOTS OOZE OOZY OPAL OPED OPEN OPES OPTS OPUS ORAD ORAL
ORBS ORBY ORCA ORCS ORDO ORES ORGY ORLE ORRA ORTS ORYX ORZO OSAR OSES OSSA OTIC OTTO OUDS OUPH OURS OUST
OUTS OUZO OVAL OVEN OVER OVUM OWED OWES OWLS OWNS OWSE OXEN OXES OXID OXIM OYER OYES OYEZ PACA PACE PACK
PACS PACT PACY PADI PADS PAGE PAID PAIK PAIL PAIN PAIR PALE PALL PALM PALP PALS PALY PAMS PANE PANG PANS
PANT PAPA PAPS PARA PARD PARE PARK PARR PARS PART PASE PASH PASS PAST PATE PATH PATS PATY PAVE PAWL PAWN
PAWS PAYS PEAG PEAK PEAL PEAN PEAR PEAS PEAT PECH PECK PECS PEDS PEED PEEK PEEL PEEN PEEP PEER PEES PEGS
PEHS PEIN PEKE PELA PELE PELF PELT PEND PENE PENI PENK PENS PENT PEON PEPO PEPS PERE PERI PERK PERM PERP
PERT PERV PESO PEST PETS PEWS PFFT PFUI PHAT PHEW PHIS PHIZ PHOH PHON PHOT PHUT PIAL PIAN PIAS PICA PICE
PICK PICS PIED PIER PIES PIGS PIKA PIKE PIKI PILA PILE PILI PILL PILY PIMA PIMP PINA PINE PING PINK PINS
PINT PINY PION PIPE PIPI PIPS PIPY PIRN PISH PISO PISS PITA PITH PITS PITY PIXY PLAN PLAT PLAY PLEA PLEB
PLED PLEW PLEX PLIE PLOD PLOP PLOT PLOW PLOY PLUG PLUM PLUS POCK POCO PODS POEM POET POGY POIS POKE POKY
POLE POLL POLO POLS POLY POME POMO POMP POMS POND PONE PONG PONS PONY POOD POOF POOH POOK POOL POON POOP
POOR POOS POOT POPE POPS PORE PORK PORN PORT POSE POSH POST POSY POTS POUF POUR POUT POWS POXY PRAM PRAO
PRAT PRAU PRAY PREE PREP PREX PREY PRIG PRIM PROA PROB PROD PROF PROG PROM PROP PROS PROW PRYS PSIS PSST
PTUI PUBS PUCE PUCK PUDS PUFF PUGH PUGS PUJA PUKE PULA PULE PULI PULK PULL PULP PULS PULU PULY PUMA PUMP
PUNA PUNG PUNK PUNS PUNT PUNY PUPA PUPS PUPU PURE PURI PURL PURR PURS PUSH PUSS PUTS PUTT PUTZ PYAS PYES
PYIC PYIN PYRE PYRO QADI QAID QATS QOPH QUAD QUAG QUAI QUAY QUEY QUID QUIN QUIP QUIT QUIZ QUOD RACE RACK
RACY RADS RAFF RAGA RAGE RAGG RAGS RAIA RAID RAIL RAIN RAIS RAJA RAKE RAKI RAKU RALE RAMI RAMP RAMS RAND
RANG RANI RANK RANT RAPE RAPS RAPT RARE RASE RASH RASP RATE RATH RATO RATS RAVE RAWS RAYA RAYS RAZE RAZZ
READ REAL REAM REAP REAR REBS RECK RECS REDD REDE REDO REDS REED REEF REEK REEL REES REFS REFT REGS REIF
REIN REIS RELY REMS REND RENT REPO REPP REPS RESH REST RETE RETS REVS RHEA RHOS RHUS RIAL RIAS RIBS RICE
RICH RICK RIDE RIDS RIFE RIFF RIFS RIFT RIGS RILE RILL RIME RIMS RIMY RIND RINE RING RINK RINS RIOT RIPE
RIPS RISE RISK RITE RITZ ROAD ROAM ROAN ROAR ROBE ROBS ROCK RODE RODS ROES ROIL ROLE ROLF ROLL ROMP ROMS
ROOD ROOF ROOK ROOM ROOS ROOT ROPE ROPY RORE RORT ROSE ROSY ROTA ROTE ROTI ROTL ROTO ROTS ROUE ROUP ROUT
ROUX ROVE ROWS RUBE RUBS RUBY RUCK RUDD RUDE RUED RUER RUES RUFF RUGA RUGS RUIN RULE RULY RUMP RUMS RUNE
RUNG RUNS RUNT RUSE RUSH RUSK RUST RUTH RUTS RYAS RYES RYKE RYND RYOT SABE SABS SACK SACS SADE SADI SAFE
SAGA SAGE SAGO SAGS SAGY SAID SAIL SAIN SAKE SAKI SALE SALL SALP SALS SALT SAME SAMP SAND SANE SANG SANK
SANS SAPS SARD SARI SARK SASH SASS SATE SATI SAUL SAVE SAWN SAWS SAYS SCAB SCAD SCAG SCAM SCAN SCAR SCAT
SCOP SCOT SCOW SCRY SCUD SCUM SCUP SCUT SEAL SEAM SEAR SEAS SEAT SECS SECT SEED SEEK SEEL SEEM SEEN SEEP
SEER SEES SEGO SEGS SEIF SEIS SELF SELL SEME SEMI SEND SENE SENT SEPT SERA SERE SERF SERS SETA SETS SETT
SEWN SEWS SEXT SEXY SHAD SHAG SHAH SHAM SHAT SHAW SHAY SHEA SHED SHES SHEW SHIM SHIN SHIP SHIT SHIV SHMO
SHOD SHOE SHOG SHOO SHOP SHOT SHOW SHRI SHUL SHUN SHUT SHWA SIAL SIBB SIBS SICE SICK SICS SIDE SIDH SIFT
SIGH SIGN SIJO SIKA SIKE SILD SILK SILL SILO SILT SIMA SIMP SIMS SINE SING SINH SINK SINS SIPE SIPS SIRE
SIRS SITE SITH SITS SIZE SIZY SKAG SKAS SKAT SKEE SKEG SKEP SKEW SKID SKIM SKIN SKIP SKIS SKIT SKUA SLAB
SLAG SLAM SLAP SLAT SLAW SLAY SLED SLEW SLID SLIM SLIP SLIT SLOB SLOE SLOG SLOP SLOT SLOW SLUB SLUE SLUG
SLUM SLUR SLUT SMEW SMIT SMOG SMUG SMUT SNAG SNAP SNAW SNED SNIB SNIP SNIT SNOB SNOG SNOT SNOW SNUB SNUG
SNYE SOAK SOAP SOAR SOBA SOBS SOCA SOCK SODA SODS SOFA SOFT SOIL SOJA SOKE SOLA SOLD SOLE SOLI SOLO SOLS
SOMA SOME SOMS SONE SONG SONS SOOK SOON SOOT SOPH SOPS SORA SORB SORD SORE SORI SORN SORT SOTH SOTS SOUK
SOUL SOUP SOUR SOUS SOWN SOWS SOYA SOYS SPAE SPAM SPAN SPAR SPAS SPAT SPAY SPAZ SPEC SPED SPEW SPIC SPIK
SPIN SPIT SPIV SPOT SPRY SPUD SPUE SPUN SPUR SRIS STAB STAG STAR STAT STAW STAY STEM STEP STEW STEY STIR
STOA STOB STOP STOT STOW STUB STUD STUM STUN STYE SUBA SUBS SUCH SUCK SUDD SUDS SUED SUER SUES SUET SUGH
SUIT SUKH SUKS SULK SULU SUMO SUMP SUMS SUNG SUNK SUNN SUNS SUPE SUPS SUQS SURA SURD SURE SURF SUSS SWAB
SWAG SWAM SWAN SWAP SWAT SWAY SWIG SWIM SWIZ SWOB SWOP SWUM SYBO SYCE SYKE SYLI SYNC SYNE SYPH TABS TABU
TACE TACH TACK TACO TACT TADS TAEL TAGS TAHA TAIL TAIN TAJ TALA TALC TALE TALI TALK TALL TAME TAMP TAMS
TANG TANK TANS TAOS TAPA TAPE TAPS TARE TARN TARO TARP TARS TART TASK TASS TATE TATS TAUS TAUT TAVS TAWS
TAXA TAXI TEAK TEAL TEAM TEAR TEAS TEAT TECH TEDS TEDY TEED TEEK TEEL TEEM TEEN TEES TEFF TEGG TEGS TEGU
TEIL TELA TELE TELL TELS TEMP TEND TENS TENT TEPA TERM TERN TEST TETH TETS TEWS TEXT THAE THAN THAT THAW
THEE THEM THEN THEW THEY THIG THIN THIO THIR THIS THOU THRO THRU THUD THUG THUS TICK TICS TIDE TIDY TIED
TIER TIES TIFF TIGE TIGS TIKE TIKI TILE TILL TILS TILT TIME TINE TING TINS TINT TINY TIPI TIPS TIRE TIRL
TIRO TITI TITS TOAD TOBY TODS TODY TOEA TOED TOES TOFF TOFT TOFU TOGA TOGS TOIL TOIT TOKE TOLA TOLD TOLE
TOLL TOLU TOMB TOME TOMS TONE TONG TONS TONY TOOK TOOL TOOM TOON TOOT TOPE TOPH TOPI TOPO TOPS TORA TORC
TORE TORI TORN TORO TORR TORS TORT TORY TOSH TOSS TOST TOTE TOTS TOUK TOUN TOUR TOUT TOWN TOWS TOWY TOYO
TOYS TRAD TRAM TRAP TRAY TREE TREF TREK TRES TRET TREY TRIG TRIM TRIO TRIP TROD TROG TROP TROT TROW TROY
TRUE TRUG TSAR TSKS TUBA TUBE TUBS TUCK TUFA TUFF TUFT TUGS TUIS TULE TUMP TUNA TUNE TUNG TUNS TUPS TURD
TURF TURK TURN TUSH TUSK TUTS TUTU TWAE TWAS TWAT TWEE TWIG TWIN TWIT TWOS TYEE TYER TYES TYIN TYKE TYNE
TYPE TYPO TYPP TYPY TYRE TYRO TZAR UDON UDOS UGHS UKES ULAN ULNA ULUS ULVA UMBO UMPS UNAI UNAU UNBE UNCI
UNCO UNDE UNDO UNDY UNIT UNTO UPAS UPBY UPDO UPON URBS URDS UREA URGE URIC URNS URPS URSA URUS USED USER
USES UTAS UTES UVEA VACS VAGI VAIL VAIN VAIR VALE VAMP VANE VANG VANS VARA VARS VARY VASA VASE VAST VATS
VATU VAUS VAVS VAWS VEAL VEEP VEER VEES VEGA VEIL VEIN VELA VELD VENA VEND VENT VERA VERB VERT VERY VEST
VETO VETS VEXT VIAL VIAS VICE VIDE VIDS VIED VIER VIES VIEW VIGA VIGS VILE VILL VIMS VINA VINE VINO VINY
VIOL VIRE VIRL VISA VISE VITA VIVA VIVE VOES VOID VOLE VOLT VOTE VOWS VROW VUGG VUGH VUGS VULN WABS WACK
WADE WADI WADS WADY WAES WAFF WAFT WAGE WAGS WAIF WAIL WAIN WAIR WAIT WAKE WALE WALK WALL WALY WAME WAND
WANE WANK WANS WANT WANY WAPS WARD WARE WARK WARM WARN WARP WARS WART WARY WASH WASP WAST WATS WATT WAUK
WAUL WAUR WAVE WAVY WAWA WAWE WAWL WAWS WAXY WAYS WEAK WEAL WEAN WEAR WEBS WEDS WEED WEEK WEEL WEEN WEEP
WEER WEES WEET WEFT WEIR WEKA WELD WELL WELT WEND WENS WENT WEPT WERE WERT WEST WETS WHAM WHAP WHAT WHEE
WHEN WHET WHEW WHEY WHID WHIG WHIM WHIN WHIP WHIR WHIT WHIZ WHOA WHOM WHOP WHUP WHYS WICH WICK WIDE WIFE
WIGS WILD WILE WILL WILT WILY WIMP WIND WINE WING WINK WINO WINS WINY WIPE WIRE WIRY WISE WISH WISP WISS
WIST WITE WITH WITS WIVE WOAD WOCK WOES WOGS WOKE WOKS WOLD WOLF WOMB WONK WONS WONT WOOD WOOF WOOL WOON
WOOS WOOT WOPS WORD WORE WORK WORM WORN WORT WOST WOTS WOVE WOWS WRAN WRAP WREN WRIT WUSS WYCH WYES WYLE
WYND WYNN WYNS WYTE XYST YACK YAFF YAGI YAGS YAKS YALD YAMS YANG YANK YAPS YARD YARE YARN YAUD YAUP YAWL
YAWN YAWP YAWS YAYS YEAH YEAN YEAR YEAS YECH YEGG YELD YELK YELL YELM YELP YENS YEPS YERK YETI YETT YEUK
YEWS YIDS YILL YINS YIPE YIPS YIRD YIRK YIRR YITE YLEM YLKE YOBS YOCK YODE YODH YODS YOGA YOGH YOGI YOKE
YOKS YOND YONI YORE YOUR YOUS YOWE YOWL YOWS YUAN YUCA YUCH YUCK YUFT YUGA YUGS YUKE YUKO YUKS YUKY YULE
YUPS YURT YUTZ YWIS ZAGS ZANY ZAPS ZARF ZEAL ZEBU ZEDS ZEES ZEIN ZEKS ZELS ZEPS ZERK ZERO ZEST ZETA ZIGS
ZILL ZINC ZINE ZING ZINS ZIPS ZITI ZITS ZOEA ZOIC ZONA ZONE ZONK ZOOM ZOON ZOOS ZORI ZOUK ZYME
ABOUT ABOVE ABUSE ACTOR ACUTE ADMIT ADOPT ADULT AFTER AGAIN AGENT AGREE AHEAD ALARM ALBUM ALERT ALIKE
ALIVE ALLOW ALONE ALONG ALTER AMONG ANGER ANGLE ANGRY APART APPLE APPLY ARENA ARGUE ARISE ARRAY ASIDE
ASSET AUDIO AUDIT AVOID AWARD AWARE BADLY BAKER BASES BASIC BASIS BEACH BEGAN BEGIN BEGUN BEING BELOW
BENCH BILLY BIRTH BLACK BLAME BLIND BLOCK BLOOD BOARD BOOST BOOTH BOUND BRAIN BRAND BREAD BREAK BREED
BRIEF BRING BROAD BROKE BROWN BUILD BUILT BUYER CABLE CALIF CARRY CATCH CAUSE CHAIN CHAIR CHART CHASE
CHEAP CHECK CHEST CHIEF CHILD CHINA CHOSE CIVIL CLAIM CLASS CLEAN CLEAR CLICK CLOCK CLOSE COACH COAST
COULD COUNT COURT COVER CRAFT CRASH CREAM CRIME CROSS CROWD CROWN CURVE CYCLE DAILY DANCE DATED DEALT
DEATH DEBUT DELAY DEPTH DOING DOUBT DOZEN DRAFT DRAMA DRAWN DREAM DRESS DRILL DRINK DRIVE DROVE DYING
EAGER EARLY EARTH EIGHT ELITE EMPTY ENEMY ENJOY ENTER ENTRY EQUAL ERROR EVENT EVERY EXACT EXIST EXTRA
FAITH FALSE FAULT FIBER FIELD FIFTH FIFTY FIGHT FINAL FIRST FIXED FLASH FLEET FLOOR FLUID FOCUS FORCE
FORTH FORTY FORUM FOUND FRAME FRANK FRAUD FRESH FRONT FRUIT FULLY FUNNY GIANT GIVEN GLASS GLOBE GOING
GRACE GRADE GRAND GRANT GRASS GREAT GREEN GROSS GROUP GROWN GUARD GUESS GUEST GUIDE HAPPY HARRY HEART
HEAVY HENCE HENRY HORSE HOTEL HOUSE HUMAN IDEAL IMAGE INDEX INNER INPUT ISSUE JAPAN JIMMY JOINT JONES
JUDGE KNOWN LABEL LARGE LASER LATER LAUGH LAYER LEARN LEASE LEAST LEAVE LEGAL LEVEL LEWIS LIGHT LIMIT
LINKS LIVES LOCAL LOGIC LOOSE LOWER LUCKY LUNCH LYING MAGIC MAJOR MAKER MARCH MARIA MATCH MAYBE MAYOR
MEANT MEDIA METAL MIGHT MINOR MINUS MIXED MODEL MONEY MONTH MORAL MOTOR MOUNT MOUSE MOUTH MOVIE MUSIC
NEEDS NEVER NEWLY NIGHT NOISE NORTH NOTED NOVEL NURSE OCCUR OCEAN OFFER OFTEN ORDER OTHER OUGHT PAINT
PAPER PARTY PEACE PETER PHASE PHONE PHOTO PIECE PILOT PITCH PLACE PLAIN PLANE PLANT PLATE POINT POUND
POWER PRESS PRICE PRIDE PRIME PRINT PRIOR PRIZE PROOF PROUD PROVE QUEEN QUICK QUIET QUITE RADIO RAISE
RANGE RAPID RATIO REACH REACT READY REFER RIGHT RIVAL RIVER ROBIN ROGER ROMAN ROUGH ROUND ROUTE ROYAL
RURAL SCALE SCENE SCOPE SCORE SENSE SERVE SEVEN SHALL SHAPE SHARE SHARP SHEET SHELF SHELL SHIFT SHIRT
SHOCK SHOOT SHORT SHOWN SIGHT SINCE SIXTH SIXTY SIZED SKILL SLEEP SLIDE SMALL SMART SMILE SMITH SMOKE
SOLID SOLVE SORRY SOUND SOUTH SPACE SPARE SPEAK SPEED SPEND SPENT SPLIT SPOKE SPORT STAFF STAGE STAKE
STAND START STATE STEAM STEEL STICK STILL STOCK STONE STOOD STORE STORM STORY STRIP STUCK STUDY STUFF
STYLE SUGAR SUITE SUPER SWEET TABLE TAKEN TASTE TAXES TEACH TEETH TERRA TEXAS THANK THEFT THEIR THEME
THERE THESE THICK THING THINK THIRD THOSE THREE THREW THROW TIGHT TIMES TIRED TITLE TODAY TOPIC TOTAL
TOUCH TOUGH TOWER TRACK TRADE TRAIN TREAT TREND TRIAL TRIED TRIES TRUCK TRULY TRUST TRUTH TWICE UNDER
UNDUE UNION UNITY UNTIL UPPER UPSET URBAN USAGE USUAL VALID VALUE VIDEO VIRUS VISIT VITAL VOICE WASTE
WATCH WATER WHEEL WHERE WHICH WHILE WHITE WHOLE WHOSE WOMAN WOMEN WORLD WORRY WORSE WORST WORTH WOULD
WOUND WRITE WRONG WROTE YIELD YOUNG YOUTH
ABROAD ACCEPT ACCESS ACROSS ACTING ACTION ACTIVE ACTUAL ADVICE ADVISE AFFAIR AFFECT AFFORD AFRAID AGENCY
AGENDA ALMOST ALWAYS AMOUNT ANIMAL ANNUAL ANSWER ANYONE ANYWAY APPEAL APPEAR AROUND ARRIVE ARTIST ASPECT
ASSESS ASSIST ASSUME ATTACK ATTEND AUGUST AUTHOR AVENUE BACKED BACKUP BARELY BARREL BASKET BATTLE BEATEN
BEAUTY BECAME BECOME BEFORE BEHALF BEHAVE BEHIND BELIEF BELONG BERLIN BETTER BEYOND BISHOP BORDER BOTTLE
BOTTOM BOUGHT BRANCH BREATH BRIDGE BRIGHT BROKEN BUDGET BURDEN BUREAU BUTTON CAMERA CANCER CANNOT CARBON
CAREER CASTLE CASUAL CAUGHT CENTER CENTRE CHANCE CHANGE CHARGE CHOICE CHOOSE CHOSEN CHURCH CIRCLE CLIENT
CLOSED CLOSER COFFEE COLUMN COMBAT COMING COMMON COMPLY COPPER CORNER COSTLY COUNTY COUPLE COURSE COVERS
CREATE CREDIT CRISIS CUSTOM DAMAGE DANGER DEALER DEBATE DECADE DECIDE DEFEAT DEFEND DEFINE DEGREE DEMAND
DEPEND DEPUTY DESERT DESIGN DESIRE DETAIL DETECT DEVICE DIFFER DINNER DIRECT DOCTOR DOLLAR DOMAIN DOUBLE
DRIVEN DRIVER DURING EASILY EATING EDITOR EFFECT EFFORT EIGHTH EITHER ELEVEN EMERGE EMPIRE EMPLOY ENABLE
ENDING ENERGY ENGAGE ENGINE ENOUGH ENSURE ENTIRE ENTITY EQUITY ESCAPE ESTATE ETHNIC EXCEED EXCEPT EXCESS
EXPAND EXPECT EXPERT EXPORT EXTEND EXTENT FABRIC FACING FACTOR FAILED FAIRLY FALLEN FAMILY FAMOUS FATHER
FELLOW FEMALE FIGURE FILING FINGER FINISH FISCAL FLIGHT FLYING FOLLOW FORCED FOREST FORGET FORMAL FORMAT
FORMER FOSTER FOUGHT FOURTH FRENCH FRIEND FUTURE GARDEN GATHER GENDER GERMAN GLOBAL GOLDEN GROUND GROWTH
GUILTY HANDED HANDLE HAPPEN HARDLY HEADED HEALTH HEIGHT HIDDEN HOLDER HONEST IMPACT IMPORT INCOME INDEED
INJURY INSIDE INTENT INVEST ISLAND ITSELF JERSEY JOSEPH JUNIOR KILLED LABOUR LATEST LATTER LAUNCH LAWYER
LEADER LEAGUE LEAVES LEGACY LENGTH LESSON LETTER LIGHTS LIKELY LINKED LIQUID LISTEN LITTLE LIVING LOSING
LUCENT LUXURY MAINLY MAKING MANAGE MANNER MANUAL MARGIN MARINE MARKED MARKET MARTIN MASTER MATTER MATURE
MEDIUM MEMBER MEMORY MENTAL MERELY MERGER METHOD MIDDLE MILLER MINING MINUTE MIRROR MOBILE MODERN MODEST
MODULE MOMENT MORRIS MOSTLY MOTHER MOTION MOVING MURDER MUSEUM MUTUAL MYSELF NARROW NATION NATIVE NATURE
NEARBY NEARLY NIGHTS NOBODY NORMAL NOTICE NOTION NUMBER OBJECT OBTAIN OFFICE OFFSET ONLINE OPTION ORANGE
ORIGIN OUTPUT OXFORD PACKED PALACE PARENT PARTLY PATENT PEOPLE PERIOD PERMIT PERSON PHRASE PICKED PLANET
PLAYER PLEASE PLENTY POCKET POLICE POLICY PREFER PRETTY PRINCE PRISON PROFIT PROPER PROVEN PUBLIC PURSUE
RAISED RANDOM RARELY RATHER RATING READER REALLY REASON RECALL RECENT RECORD REDUCE REFORM REGARD REGIME
REGION RELATE RELIEF REMAIN REMOTE REMOVE REPAIR REPEAT REPLAY REPORT RESCUE RESORT RESULT RETAIL RETAIN
RETURN REVEAL REVIEW REWARD RIDING RISING ROBUST RULING SAFETY SALARY SAMPLE SAVING SAYING SCHEME SCHOOL
SCREEN SEARCH SEASON SECOND SECRET SECTOR SECURE SEEING SELECT SELLER SENIOR SERIES SERVER SETTLE SEVERE
SEXUAL SHOULD SIGNAL SIGNED SILENT SILVER SIMPLE SIMPLY SINGER SINGLE SISTER SLIGHT SMOOTH SOCIAL SOLELY
SOUGHT SOURCE SOVIET SPEECH SPIRIT SPOKEN SPREAD SPRING SQUARE STABLE STATUS STEADY STOLEN STRAIN STRAND
STREAM STREET STRESS STRICT STRIKE STRING STRONG STRUCK STUDIO SUBMIT SUDDEN SUFFER SUMMER SUMMIT SUPPLY
SURELY SURVEY SWITCH SYMBOL SYSTEM TAKING TALENT TARGET TAUGHT TENANT TENDER TENNIS THANKS THEORY THIRTY
THOUGH THREAT THROWN TICKET TIMELY TIMING TISSUE TOILET TOMATO TONGUE TOWARD TRAVEL TREATY TRYING TWELVE
TWENTY UNABLE UNIQUE UNITED UNLESS UNLIKE UPDATE USEFUL VALLEY VARIED VENDOR VERSUS VICTIM VISION VISUAL
VOLUME WALKER WEALTH WEEKLY WEIGHT WHOLLY WINDOW WINNER WINTER WITHIN WONDER WORKER WRIGHT WRITER YELLOW
ABILITY ABSENCE ACADEMY ACCOUNT ACCUSED ACHIEVE ACQUIRE ADDRESS ADVANCE ADVERSE ADVISED ADVISER AGAINST
AIRLINE AIRPORT ALCOHOL ALLEGED ALREADY ANALYST ANCIENT ANOTHER ANXIETY ANXIOUS ANYBODY APPLIED ARRANGE
ARRIVAL ARTICLE ASSAULT ASSUMED ASSURED ATTEMPT ATTRACT AUCTION AVERAGE BACKING BALANCE BANKING BARRIER
BATTERY BEARING BEATING BECAUSE BEDROOM BELIEVE BENEATH BENEFIT BESIDES BETWEEN BILLION BINDING BROTHER
BROUGHT BURNING CABINET CALIBER CALLING CAPABLE CAPITAL CAPTAIN CAPTION CAPTURE CAREFUL CARRIER CAUTION
CEILING CENTRAL CENTURY CERTAIN CHAMBER CHANNEL CHAPTER CHARITY CHARLIE CHARTER CHECKED CHICKEN CHRONIC
CIRCUIT CLASSES CLASSIC CLIMATE CLOSING CLOSURE CLOTHES COLLECT COLLEGE COMBINE COMFORT COMMAND COMMENT
COMPACT COMPANY COMPARE COMPETE COMPLEX CONCEPT CONCERN CONCERT CONDUCT CONFIRM CONNECT CONSENT CONSIST
CONTACT CONTAIN CONTENT CONTEST CONTEXT CONTROL CONVERT CORRECT COUNCIL COUNSEL COUNTER COUNTRY CRUCIAL
CRYSTAL CULTURE CURRENT CUTTING DEALING DECIDED DECLINE DEFAULT DEFENCE DEFICIT DELIVER DENSITY DEPOSIT
DESKTOP DESPITE DESTROY DEVELOP DEVOTED DIAMOND DIGITAL DISCUSS DISEASE DISPLAY DISPUTE DISTANT DIVERSE
DIVIDED DRAWING DRESSED DRIVING DYNAMIC EASTERN ECONOMY EDITION ELDERLY ELEMENT ENGAGED ENHANCE ESSENCE
EVENING EVIDENT EXACTLY EXAMINE EXAMPLE EXCITED EXCLUDE EXHIBIT EXPENSE EXPLAIN EXPLORE EXPRESS EXTREME
FACTORY FACULTY FAILING FAILURE FASHION FEATURE FEDERAL FEELING FICTION FIFTEEN FILLING FINANCE FINDING
FISHING FITNESS FOREIGN FOREVER FORMULA FORTUNE FORWARD FOUNDER FREEDOM FURTHER GALLERY GATEWAY GENERAL
GENETIC GENUINE GIGABIT GREATER HANGING HEADING HEALTHY HEARING HEAVILY HELPFUL HELPING HERSELF HIGHWAY
HIMSELF HISTORY HOLDING HOLIDAY HOUSING HOWEVER HUNDRED HUSBAND ILLEGAL ILLNESS IMAGINE IMAGING IMPROVE
INCLUDE INITIAL INQUIRY INSIGHT INSTALL INSTANT INSTEAD INTENSE INTERIM INVOLVE JOINTLY JOURNAL JOURNEY
JUSTICE JUSTIFY KEEPING KILLING KINGDOM KITCHEN KNOWING LANDING LARGELY LASTING LEADING LEARNED LEISURE
LIBERAL LIBERTY LIBRARY LICENSE LIMITED LISTING LOGICAL LOYALTY MACHINE MANAGER MARRIED MASSIVE MAXIMUM
MEANING MEASURE MEDICAL MEETING MENTION MESSAGE MILLION MINERAL MINIMAL MINIMUM MISSING MISSION MISTAKE
MIXTURE MONITOR MONTHLY MORNING MUSICAL MYSTERY NATURAL NEITHER NERVOUS NETWORK NEUTRAL NOTABLE NOTHING
NOWHERE NUCLEAR NURSING OBVIOUS OFFENSE OFFICER ONGOING OPENING OPERATE OPINION OPTICAL ORGANIC OUTCOME
OUTDOOR OUTLOOK OUTSIDE OVERALL PACIFIC PACKAGE PAINTED PARKING PARTIAL PARTNER PASSAGE PASSING PASSION
PASSIVE PATIENT PATTERN PAYABLE PAYMENT PENALTY PENDING PENSION PERCENT PERFECT PERFORM PERHAPS PHOENIX
PICKING PICTURE PIONEER PLASTIC POINTED POPULAR PORTION POVERTY PRECISE PREDICT PREMIER PREMIUM PREPARE
PRESENT PREVENT PRIMARY PRINTER PRIVACY PRIVATE PROBLEM PROCEED PROCESS PRODUCE PRODUCT PROFILE PROGRAM
PROJECT PROMISE PROMOTE PROTECT PROTEIN PROTEST PROVIDE PUBLISH PURPOSE PUSHING QUALIFY QUALITY QUARTER
RADICAL RAILWAY READILY READING REALITY REALIZE RECEIPT RECEIVE RECOVER REFLECT REGULAR RELATED RELEASE
REMAINS REMOVAL REMOVED REPLACE REQUEST REQUIRE RESERVE RESOLVE RESPECT RESPOND RESTORE RETIRED REVENUE
REVERSE ROLLOUT ROUTINE RUNNING SATISFY SCIENCE SECTION SEGMENT SERIOUS SERVICE SESSION SETTING SEVENTH
SEVERAL SHORTLY SHOWING SILENCE SILICON SIMILAR SITTING SIXTEEN SKILLED SMOKING SOCIETY SOMEHOW SOMEONE
SPEAKER SPECIAL SPECIES SPONSOR STATION STORAGE STRANGE STRETCH STUDENT STUDIED SUBJECT SUCCEED SUCCESS
SUGGEST SUMMARY SUPPORT SUPPOSE SUPREME SURFACE SURGERY SURPLUS SURVIVE SUSPECT SUSTAIN TEACHER TELECOM
TELLING TENSION THEATRE THERAPY THEREBY THOUGHT THROUGH TONIGHT TOTALLY TOUCHED TOWARDS TRAFFIC TROUBLE
TURNING TYPICAL UNIFORM UNKNOWN UNUSUAL UPGRADE UPSCALE UTILITY VARIETY VARIOUS VEHICLE VENTURE VERSION
VETERAN VICTORY VIEWING VILLAGE VIOLENT VIRTUAL VISIBLE WAITING WALKING WANTING WARNING WARRANT WEARING
WEATHER WEBCAST WEBSITE WEDDING WEEKEND WELCOME WELFARE WESTERN WHEREAS WHEREBY WHETHER WILLING WINNING
WITHOUT WITNESS WORKING WRITING WRITTEN
  `;

  const DICT_SET = new Set();

  // Add all academic words
  Object.keys(ACADEMIC_WORDS).forEach(function (w) {
    DICT_SET.add(w.toUpperCase());
  });

  // Add all general words
  RAW_WORD_STRING.trim().split(/\s+/).forEach(function (w) {
    if (w && w.length >= 2) {
      DICT_SET.add(w.toUpperCase());
    }
  });

  // Also auto-add regular plurals (S) and past tenses (ED/ING) for common academic nouns/verbs where natural
  // to make gameplay feel generous and natural while still accurate
  const EXTRA_INFLECTIONS = [
    'ACTS','ALLIES','AMENDS','ATOMS','AUDITS','BAILS','BANKS','BASES','BILLS','BLOCS','BONDS','BOOMS',
    'CELLS','CHARTERS','CLANS','CLIMATES','CODES','COINS','CORES','COUPS','COURTS','CREDITS','CRIMES',
    'CROPS','CROWNS','CULTURES','DAMS','DEBTS','DECREES','DEFICITS','DELTAS','DIPLOMAS','DOCTRINES',
    'DOLLARS','DRONES','DROUGHTS','DUTIES','EDICTS','ELECTS','ELITES','EMBARGOS','EMPIRES','ENVOYS',
    'ENZYMES','EPOCHS','ERAS','EUROS','EXILES','EXPORTS','FACTS','FAITHS','FAMINES','FAULTS','FINES',
    'FIRMS','FLAGS','FLEETS','FLOODS','FORCES','FORUMS','FOSSILS','FRAUDS','FRONTS','FUELS','FUNDS',
    'GASES','GENES','GENOMES','GLACIERS','GRAINS','GRANTS','GRAPHS','GULFS','HAZARDS','HEGEMONS',
    'HERBS','HOUSES','HUMANS','IDEALS','IMPORTS','INCOMES','INDEXES','INFLOWS','IONS','ISLANDS',
    'ISSUES','JAILS','JETS','JOBS','JUDGES','JUNTAS','JURIES','KINGS','LAKES','LANDS','LASERS','LAWS',
    'LEAGUES','LENDS','LEVIES','LIBELS','LIMITS','LIQUIDS','LOANS','LOBBIES','MAGMAS','MANDATES','MAPS',
    'MARKETS','MEDIAS','MEMOS','METALS','METEORS','METERS','MINES','MINTS','MISSILES','MODELS','MONARCHS',
    'MONSOONS','MOONS','MOTIONS','MYTHS','NATIONS','NAVIES','NEBULAS','NERVES','NEUTRONS','NEWTONS',
    'NORMS','NOTES','OATHS','OCEANS','OFFICES','OILS','ORBITS','ORDERS','ORES','ORGANS','PACTS','PANELS',
    'PAPERS','PARTIES','PASSES','PATENTS','PEAKS','PERILS','PHASES','PHOTONS','PLANS','PLANETS','PLATES',
    'PLEAS','PLOTS','POLES','POLICIES','POLLS','PORTS','POSTS','POWERS','PRICES','PRISONS','PROBES',
    'PROFITS','PROOFS','PROTONS','PROXIES','PULSES','QUARKS','QUEENS','QUORUMS','QUOTAS','RACES','RADARS',
    'RADIOS','RAIDS','RAILS','RAINS','RANKS','RATES','RATIOS','REALMS','REBELS','REFORMS','REGIMES',
    'REGIONS','REIGNS','RENTS','REPORTS','RIFTS','RIGHTS','RIOTS','RISKS','RIVERS','ROCKS','ROCKETS',
    'ROLES','RULES','RULERS','SALTS','SCALES','SCHEMES','SCHOOLS','SCIENCES','SCOPES','SEAS','SEALS',
    'SEATS','SECTS','SECTORS','SEEDS','SENATES','SERFS','SESSIONS','SHARES','SHELLS','SHIFTS','SHIPS',
    'SHOCKS','SHORES','SIEGES','SIGNALS','SITES','SLAVES','SOILS','SOLIDS','SOUNDS','SPACES','SPHERES',
    'SPINS','SPLITS','SPIES','SQUADS','STAGES','STAKES','STARS','STATES','STATUTES','STOCKS','STORMS',
    'STRAITS','STRIKES','STUDIES','STYLES','SUITS','SUMMITS','SUNS','SUPPLIES','SURGES','SURVEYS','SYNODS',
    'SYSTEMS','TACTICS','TARIFFS','TASKS','TAXES','TEAMS','TERMS','TESTS','TEXTS','THEORIES','THRONES',
    'TIDES','TIERS','TIMES','TITHES','TITLES','TOLLS','TONS','TOPICS','TORTS','TOWNS','TOXINS','TRACES',
    'TRACKS','TRADES','TRAITS','TRUCES','TRUSTS','TRUTHS','TUBES','TUNDRAS','TYPES','UNIONS','UNITS',
    'USAGES','VALLEYS','VALUES','VAPORS','VAULTS','VECTORS','VEINS','VENUES','VERBS','VERDICTS','VERSES',
    'VESSELS','VETOES','VIEWS','VIGILS','VILLAS','VIRTUES','VIRUSES','VISAS','VISIONS','VOICES','VOIDS',
    'VOLTS','VOLUMES','VOTES','VOWS','WAGES','WAIVERS','WALLS','WARS','WARDS','WASTES','WATCHES','WATERS',
    'WATTS','WAVES','WAYS','WEAPONS','WHARFS','WHIPS','WILLS','WINS','WINDS','WINGS','WIRES','WITS',
    'WOLVES','WOODS','WORDS','WORKS','WORLDS','WRITS','XRAYS','YARDS','YEARS','YIELDS','ZEALS','ZEROS',
    'ZONES','PLAYED','PLAYING','SCORED','SCORING','MOVED','MOVING','PASSED','PASSING','VOTED','VOTING',
    'RULED','RULING','TRADED','TRADING','TAXED','TAXING','FUNDED','FUNDING','BANNED','BANNING','SIGNED',
    'SIGNING','AMENDED','AUDITED','ELECTED','EXPORTED','IMPORTED','REFORMED','TESTED','TESTING'
  ];

  EXTRA_INFLECTIONS.forEach(function (w) {
    DICT_SET.add(w);
  });

  // Export globally
  global.SCRABBLE_DICT = DICT_SET;
  global.SCRABBLE_ACADEMIC_DEFS = ACADEMIC_WORDS;
})(window);
