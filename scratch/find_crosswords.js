// Systematic Crossword Layout Generator & Validator
const fs = require('fs');

function checkCollision(grid, word, r, c, dir, size) {
  const len = word.length;
  for (let i = 0; i < len; i++) {
    const cr = dir === 'across' ? r : r + i;
    const cc = dir === 'across' ? c + i : c;
    if (cr < 0 || cr >= size || cc < 0 || cc >= size) return false;
    const key = `${cr},${cc}`;
    if (grid[key] && grid[key] !== word[i]) return false;
  }
  return true;
}

function placeWord(grid, word, r, c, dir) {
  const len = word.length;
  for (let i = 0; i < len; i++) {
    const cr = dir === 'across' ? r : r + i;
    const cc = dir === 'across' ? c + i : c;
    grid[`${cr},${cc}`] = word[i];
  }
}

// Let's test curated layouts for each category:
const layouts = {
  pakistan_affairs: {
    id: "cw_pakistan",
    title: "Pakistan Affairs & Constitutional History",
    size: 11,
    words: [
      { number: 1, direction: "across", row: 1, col: 0, answer: "FEDERATION", clue: "Union of partially self-governing provinces united under a central federal government (Article 1).", examFact: "Defined in Article 1 of the 1973 Constitution; guarantees provincial representation in the Senate." },
      { number: 2, direction: "down", row: 1, col: 2, answer: "DIARCHY", clue: "System of double government in British India introduced by the Montagu-Chelmsford Reforms (1919).", examFact: "Introduced provincial executive division between 'transferred' and 'reserved' subjects in 1919." },
      { number: 3, direction: "down", row: 1, col: 5, answer: "AUTONOMY", clue: "Constitutional principle enhanced by the 18th Amendment abolishing the Concurrent Legislative List.", examFact: "Passed in April 2010, the 18th Amendment devolved 17 federal ministries to the four provinces." },
      { number: 4, direction: "across", row: 3, col: 2, answer: "ACT", clue: "Statutory enactment by parliament, such as the Government of India Act 1935.", examFact: "The Government of India Act 1935 served as Pakistan's interim constitution until 1956." },
      { number: 5, direction: "across", row: 6, col: 1, answer: "INDUS", clue: "The civilizational river and economic lifeline of Pakistan regulated by the 1960 treaty with India.", examFact: "Signed on Sept 19, 1960 in Karachi, brokered by the World Bank, allocating western rivers to Pakistan." },
      { number: 6, direction: "down", row: 4, col: 7, answer: "COUNCIL", clue: "Constitutional inter-provincial forum chaired by the Prime Minister (Council of Common Interests).", examFact: "Formed under Article 153 of the 1973 Constitution to settle resource disputes among provinces." },
      { number: 7, direction: "across", row: 8, col: 4, answer: "SENATE", clue: "The permanent upper house of Pakistan's Parliament representing provincial equality.", examFact: "Created by the 1973 Constitution with equal provincial seats (currently 96 members post-25th Amendment)." },
      { number: 8, direction: "down", row: 4, col: 9, answer: "BARRAGE", clue: "A low weir or dam built across a river to divert irrigation flow (e.g. Sukkur, Guddu).", examFact: "Sukkur Barrage (Lloyd Barrage), completed in 1932, irrigates over 7 million acres of Sindh." }
    ]
  },

  international_relations: {
    id: "cw_ir",
    title: "International Relations & Strategic Geopolitics",
    size: 11,
    words: [
      { number: 1, direction: "across", row: 1, col: 1, answer: "HEGEMONY", clue: "Predominant influence or political and military ascendancy exercised by one superpower over others.", examFact: "Gramscian and Realist IR concept analyzing systemic dominance and unipolar hegemony." },
      { number: 2, direction: "down", row: 1, col: 1, answer: "HOLISM", clue: "Philosophical and IR approach that social structures cannot be explained solely by component parts.", examFact: "Key premise of Constructivist IR theory championed by Alexander Wendt." },
      { number: 3, direction: "down", row: 1, col: 6, answer: "MULTIPOLAR", clue: "An international system characterized by three or more dominant power poles (e.g. US, China, Russia).", examFact: "Major theme in contemporary CSS IR essays on the transition away from post-Cold War unipolarity." },
      { number: 4, direction: "across", row: 4, col: 1, answer: "SANCTIONS", clue: "Economic penalties, trade embargos, or financial restrictions levied to force international law compliance.", examFact: "Enforced via UN Security Council resolutions under Chapter VII (Article 41) of the UN Charter." },
      { number: 5, direction: "down", row: 3, col: 3, answer: "ALLIANCE", clue: "A formal military pact formed between nations for mutual defense (e.g. NATO, ANZUS).", examFact: "NATO was established under the North Atlantic Treaty on April 4, 1949, invoking Article 5." },
      { number: 6, direction: "across", row: 7, col: 0, answer: "DIPLOMACY", clue: "The established method and art of managing international relations through accredited representatives.", examFact: "Codified in the 1961 Vienna Convention on Diplomatic Relations providing diplomatic immunity." },
      { number: 7, direction: "down", row: 5, col: 8, answer: "PACT", clue: "A formal treaty, compact, or alliance between sovereign powers (e.g. Warsaw Pact).", examFact: "The Warsaw Pact was established in 1955 as the Soviet counterbalance to NATO; dissolved in 1991." }
    ]
  },

  science: {
    id: "cw_science",
    title: "Everyday Science & Scientific Discoveries",
    size: 12,
    words: [
      { number: 1, direction: "across", row: 1, col: 0, answer: "CHROMOSOME", clue: "Thread-like structure of nucleic acids and protein found in the nucleus carrying genetic instructions.", examFact: "Humans have 23 pairs (46 chromosomes) containing approximately 20,000 to 25,000 genes." },
      { number: 2, direction: "down", row: 1, col: 2, answer: "REFRACTION", clue: "The bending of a wave or light beam as it passes between media of differing optical density.", examFact: "Governed by Snell's Law (n1 * sin(theta1) = n2 * sin(theta2)); explains mirages and lenses." },
      { number: 3, direction: "down", row: 1, col: 6, answer: "OPTICS", clue: "Branch of physics studying the properties, behavior, and wave-particle interactions of light.", examFact: "Pioneered scientifically by Ibn al-Haytham (Alhazen) in his 11th-century 'Book of Optics'." },
      { number: 4, direction: "across", row: 4, col: 1, answer: "ECOSYSTEM", clue: "A biological community of interacting organisms and their physical abiotic environment.", examFact: "Term coined by Arthur Tansley in 1935; encompasses biotic producers, consumers, and decomposers." },
      { number: 5, direction: "down", row: 3, col: 8, answer: "CATALYST", clue: "A substance that speeds up a chemical reaction without undergoing permanent chemical alteration.", examFact: "Lowers the reaction's activation energy; biological catalysts are termed enzymes." },
      { number: 6, direction: "across", row: 7, col: 2, answer: "ATMOSPHERE", clue: "The envelope of gases surrounding Earth, retained by gravitational force.", examFact: "Composed of 78% Nitrogen, 21% Oxygen, 0.93% Argon, and trace greenhouse gases like CO2." },
      { number: 7, direction: "down", row: 6, col: 4, answer: "OZONE", clue: "Triatomic oxygen molecule (O3) concentrated in the stratosphere absorbing harmful UV rays.", examFact: "Protected under the 1987 Montreal Protocol, the most universally ratified environmental treaty." }
    ]
  },

  law: {
    id: "cw_law",
    title: "Constitutional, Criminal & Civil Law",
    size: 11,
    words: [
      { number: 1, direction: "across", row: 1, col: 1, answer: "CERTIORARI", clue: "High prerogative constitutional writ issued by a superior court to quash illegal lower court orders.", examFact: "Invoked under Article 199(1)(a)(ii) of Pakistan's 1973 Constitution against unlawful jurisdictional acts." },
      { number: 2, direction: "down", row: 1, col: 1, answer: "CONSTITUTION", clue: "The fundamental organic supreme legal document defining organs of state and citizens' basic rights.", examFact: "Pakistan's 1973 Constitution was passed on April 10, 1973 and enacted on August 14, 1973." },
      { number: 3, direction: "down", row: 1, col: 7, answer: "INJUNCTION", clue: "Equitable judicial order requiring a person to do or cease doing a specific injurious act.", examFact: "Governed by the Specific Relief Act 1877; issued as temporary, permanent, or mandatory injunctions." },
      { number: 4, direction: "across", row: 4, col: 0, answer: "MANDAMUS", clue: "Judicial writ commanding a public official to discharge a mandatory statutory duty.", examFact: "Issued under Article 199(1)(a)(i) of Pakistan's 1973 Constitution to enforce public duty compliance." },
      { number: 5, direction: "down", row: 3, col: 4, answer: "ADJUDICATION", clue: "The legal process by which an arbiter or court examines evidence to resolve a judicial dispute.", examFact: "Central to administrative law, ensuring adherence to the principles of natural justice." },
      { number: 6, direction: "across", row: 7, col: 2, answer: "SEDITION", clue: "Conduct or speech inciting rebellion against the authority of a established constitutional government.", examFact: "Codified under Section 124-A of the Pakistan Penal Code (PPC); subject to landmark judicial reviews." },
      { number: 7, direction: "down", row: 5, col: 9, answer: "TORT", clue: "A civil wrong other than breach of contract that causes injury or harm for which courts impose liability.", examFact: "Common law principle covering negligence, defamation, trespass, nuisance, and vicarious liability." }
    ]
  },

  geography: {
    id: "cw_geography",
    title: "Physical Geography & Earth Sciences",
    size: 11,
    words: [
      { number: 1, direction: "across", row: 1, col: 0, answer: "ARCHIPELAGO", clue: "An extensive group, cluster, or chain of islands situated within a body of water.", examFact: "Indonesia is the world's largest archipelago state with over 17,500 islands." },
      { number: 2, direction: "down", row: 1, col: 1, answer: "REST", clue: "State of an object when it does not change its position relative to a reference frame.", examFact: "Physical concept tied to Newton's First Law of Motion." },
      { number: 3, direction: "down", row: 1, col: 4, answer: "PENINSULA", clue: "A tract of land almost completely surrounded by water and projecting out into a body of water.", examFact: "The Arabian Peninsula is the world's largest peninsula, covering 3.2 million sq km." },
      { number: 4, direction: "across", row: 3, col: 3, answer: "ISTHMUS", clue: "A narrow strip of land linking two larger landmasses and bordered by water on two sides.", examFact: "The Isthmus of Panama links North and South America and was pierced by the Panama Canal in 1914." },
      { number: 5, direction: "down", row: 2, col: 8, answer: "TRIBUTARY", clue: "A freshwater stream or river that flows into a larger main stem river rather than an ocean.", examFact: "The Jhelum, Chenab, Ravi, and Sutlej are the primary eastern tributaries of the Indus River." },
      { number: 6, direction: "across", row: 6, col: 1, answer: "PLATEAU", clue: "An extensive area of relatively elevated flat land rising sharply above adjacent terrain.", examFact: "The Tibetan Plateau is the highest and largest plateau on Earth, termed the 'Roof of the World'." },
      { number: 7, direction: "down", row: 5, col: 6, answer: "ESTUARY", clue: "The tidal mouth of a large river where the freshwater tide meets and mixes with the ocean.", examFact: "Estuaries are biologically productive ecotones providing critical fish breeding nurseries." }
    ]
  },

  current_affairs: {
    id: "cw_current_affairs",
    title: "Current Affairs & 21st-Century Dynamics",
    size: 11,
    words: [
      { number: 1, direction: "across", row: 1, col: 0, answer: "INFLATION", clue: "A sustained general increase in price levels leading to a fall in currency purchasing power.", examFact: "Monitored via Consumer Price Index (CPI); Pakistan faced record high headline inflation in 2023." },
      { number: 2, direction: "down", row: 1, col: 1, answer: "NUCLEAR", clue: "Pertaining to atomic energy or weapons capability governed globally by the IAEA.", examFact: "Pakistan became a declared nuclear power in May 1998 with tests at Chagai, Balochistan." },
      { number: 3, direction: "down", row: 1, col: 5, answer: "ALLIANCE", clue: "A formal defense pact or economic coalition among nations (e.g. Quad, BRICS+, AUKUS).", examFact: "BRICS officially expanded into BRICS+ in January 2024, inducting Egypt, Ethiopia, Iran, UAE." },
      { number: 4, direction: "across", row: 4, col: 1, answer: "RENEWABLE", clue: "Energy from clean natural resources that are replenished naturally (solar, wind, hydel).", examFact: "Pakistan's Alternative and Renewable Energy (ARE) Policy targets 30% clean energy by 2030." },
      { number: 5, direction: "down", row: 3, col: 8, answer: "BLOCKCHAIN", clue: "Decentralized digital distributed ledger technology underpinning modern digital finance.", examFact: "Key subject in State Bank of Pakistan's Central Bank Digital Currency (CBDC) feasibility studies." },
      { number: 6, direction: "across", row: 7, col: 2, answer: "RESILIENCE", clue: "The systemic capacity of states, economies, or infrastructures to withstand and recover from shocks.", examFact: "Core tenet of Pakistan's post-2022 Floods 4RF Framework (Resilient Recovery, Rehabilitation & Reconstruction)." }
    ]
  }
};

let allOk = true;
for (const [key, pz] of Object.entries(layouts)) {
  const result = validate(pz);
  if (!result.valid) {
    console.error(`Layout ERROR in ${key}:`, result.errors);
    allOk = false;
  } else {
    console.log(`✓ ${key} (${pz.title}): ${pz.words.length} words, size ${pz.size}x${pz.size}, valid!`);
  }
}

function validate(pz) {
  const grid = {};
  const errors = [];
  pz.words.forEach(w => {
    const { answer, row, col, direction } = w;
    for (let i = 0; i < answer.length; i++) {
      const r = direction === 'across' ? row : row + i;
      const c = direction === 'across' ? col + i : col;
      if (r < 0 || r >= pz.size || c < 0 || c >= pz.size) {
        errors.push(`Word ${answer} out of bounds at (${r},${c})`);
      }
      const k = `${r},${c}`;
      if (grid[k] && grid[k] !== answer[i]) {
        errors.push(`Collision at (${r},${c}) between '${grid[k]}' and '${answer[i]}' from word ${answer}`);
      } else {
        grid[k] = answer[i];
      }
    }
  });
  return { valid: errors.length === 0, errors };
}
