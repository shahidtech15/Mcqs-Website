const fs = require('fs');

const VOCABULARY = {
  pakistan_affairs: [
    { answer: "DEVOLUTION", clue: "Transfer of governance powers to provincial and local authorities under the 18th Amendment.", examFact: "Article 140A requires each province to establish a local government system with administrative and financial authority." },
    { answer: "BICAMERAL", clue: "Two-chamber legislative system established in Pakistan under the 1973 Constitution (Senate & National Assembly).", examFact: "Replaced the unicameral systems of the 1956 and 1962 Constitutions to ensure provincial parity." },
    { answer: "DIARCHY", clue: "System of divided governance in British India introduced under the Montagu-Chelmsford Reforms 1919.", examFact: "Split provincial portfolios into 'transferred' subjects (given to ministers) and 'reserved' subjects (held by governors)." },
    { answer: "INDUS", clue: "Civilizational river of Pakistan regulating the 1960 water division treaty with India.", examFact: "The Indus Waters Treaty was brokered by the World Bank and signed on September 19, 1960." },
    { answer: "OBJECTIVES", clue: "Landmark 1949 resolution moving Pakistan towards Islamic constitutional foundations.", examFact: "Moved by Liaquat Ali Khan on March 7, 1949; made a substantive part of the Constitution via Article 2A." },
    { answer: "SENATE", clue: "Upper house of Pakistan's parliament providing equal provincial representation.", examFact: "Permanent legislative body with 6-year terms; half its members retire every 3 years." },
    { answer: "BARRAGE", clue: "Low weir structure across a river controlling irrigation channels (e.g., Sukkur, Guddu).", examFact: "Sukkur Barrage irrigates extensive agrarian belts of Sindh; completed under British administration in 1932." },
    { answer: "AUTONOMY", clue: "Provincial self-rule guaranteed under federalism and the 18th Amendment.", examFact: "Abolished the Concurrent Legislative List, granting exclusive provincial competence over 40+ subjects." },
    { answer: "FEDERATION", clue: "Constitutional union of four provinces governed under Article 1 of the 1973 Constitution.", examFact: "Federation of Pakistan comprises Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, and Islamabad Capital Territory." },
    { answer: "PLEBISCITE", clue: "Direct public referendum mandated by 1948 UN resolutions to resolve the Jammu & Kashmir dispute.", examFact: "UNSC Resolution 47 (April 1948) provided for a free and impartial plebiscite under UN supervision." },
    { answer: "KASHMIR", clue: "Core territorial dispute between Pakistan and India since partition in 1947.", examFact: "Subject of multiple wars (1947-48, 1965, 1999) and key UN Security Council resolutions." },
    { answer: "LAHORE", clue: "Historic city where the landmark 1940 Resolution demanding separate Muslim states was adopted.", examFact: "Passed at Minto Park (now Greater Iqbal Park) on March 23, 1940, presented by A.K. Fazlul Huq." },
    { answer: "AMENDMENT", clue: "Formal constitutional alteration passed by a two-thirds majority in both parliamentary houses.", examFact: "Article 239 governs the constitutional amendment process in Pakistan's 1973 Constitution." },
    { answer: "CABINET", clue: "Council of senior ministers headed by the Prime Minister exercising executive authority.", examFact: "Collectively responsible to the National Assembly under Article 91 of the 1973 Constitution." },
    { answer: "REFORMS", clue: "Constitutional or agrarian changes such as the 1909 Minto-Morley or 1919 Montagu-Chelmsford measures.", examFact: "Minto-Morley Reforms (1909) officially granted separate electorates to Indian Muslims." }
  ],
  international_relations: [
    { answer: "HEGEMONY", clue: "Dominant geopolitical influence or leadership exercised by one superpower over other states.", examFact: "Realist and Gramscian IR concepts analyzing post-Cold War US unipolar hegemony." },
    { answer: "DETERRENCE", clue: "Strategic military doctrine of preventing aggression by threatening unacceptable retaliatory damage.", examFact: "Pillar of South Asian strategic stability following Pakistan and India's May 1998 nuclear detonations." },
    { answer: "MULTIPOLAR", clue: "International order with three or more competing superpowers (e.g., US, China, Russia, EU).", examFact: "Core theme in contemporary IR examining the decline of unipolarity and rise of the Global South." },
    { answer: "DIPLOMACY", clue: "Art and practice of conducting official negotiations between sovereign states.", examFact: "Codified in the 1961 Vienna Convention on Diplomatic Relations providing diplomatic immunity." },
    { answer: "SANCTIONS", clue: "Economic or financial coercive penalties imposed to force compliance with international norms.", examFact: "Imposed by the UN Security Council under Article 41 of Chapter VII of the UN Charter." },
    { answer: "ALLIANCE", clue: "Formal treaty between nations pledging collective defense or political cooperation (e.g. NATO).", examFact: "NATO was established under the Washington Treaty on April 4, 1949, invoking Article 5 collective defense." },
    { answer: "SOVEREIGNTY", clue: "Supreme and independent political authority of a state over its territory and population.", examFact: "Principle of Westphalian sovereignty rooted in the 1648 Peace of Westphalia." },
    { answer: "CHOKEPOINT", clue: "Strategic narrow maritime passage vulnerable to blockade or military disruption (e.g. Hormuz).", examFact: "Strait of Hormuz conveys approximately 20-25% of global petroleum consumption daily." },
    { answer: "TREATY", clue: "Formally concluded and ratified agreement between sovereign states under international law.", examFact: "Governed by the 1969 Vienna Convention on the Law of Treaties (VCLT)." },
    { answer: "REALISM", clue: "Dominant IR theory viewing international politics as an anarchic struggle for power and survival.", examFact: "Championed by Hans Morgenthau, Kenneth Waltz, and John Mearsheimer." },
    { answer: "BILATERAL", clue: "Agreements, negotiations, or diplomatic actions conducted strictly between two nation-states.", examFact: "Simla Agreement (1972) established bilateral dispute resolution between Pakistan and India." },
    { answer: "SECURITY", clue: "Condition of protection against foreign military aggression or transnational threats.", examFact: "Central pursuit of states under the Realist concept of the 'Security Dilemma'." },
    { answer: "EMBARGO", clue: "Government order imposing an official ban on trade or commercial activity with a particular country.", examFact: "Frequently utilized as an economic coercive tool prior to or alongside kinetic conflict." }
  ],
  science: [
    { answer: "CHROMOSOME", clue: "Thread-like cellular structure carrying genetic DNA sequences in living cells.", examFact: "Normal human somatic cells contain 23 pairs (46 total chromosomes)." },
    { answer: "REFRACTION", clue: "Bending of light waves as they pass from one medium into another of different optical density.", examFact: "Governed by Snell's Law; causes optical phenomena such as mirages and rainbows." },
    { answer: "ECOSYSTEM", clue: "Dynamic community of interacting living organisms and their non-living physical environment.", examFact: "Encompasses biotic components (producers, consumers) and abiotic factors (soil, water, climate)." },
    { answer: "CATALYST", clue: "Chemical substance that accelerates the rate of a reaction without being consumed.", examFact: "Lowers the reaction's activation energy; biological catalysts in organisms are enzymes." },
    { answer: "ATMOSPHERE", clue: "Gaseous envelope surrounding Earth held in place by gravitational attraction.", examFact: "Composed of 78% Nitrogen, 21% Oxygen, 0.93% Argon, and trace greenhouse gases like CO2." },
    { answer: "OZONE", clue: "Triatomic oxygen molecule (O3) in the stratosphere protecting Earth from solar UV radiation.", examFact: "Protected under the landmark 1987 Montreal Protocol, phasing out chlorofluorocarbons (CFCs)." },
    { answer: "GRAVITY", clue: "Universal fundamental force of mutual attraction between masses formulated by Newton.", examFact: "Described as spacetime curvature in Einstein's 1915 General Theory of Relativity." },
    { answer: "GENETICS", clue: "Branch of biology studying heredity and the variation of inherited characteristics.", examFact: "Founded scientifically by Gregor Mendel in 1866 through his pea plant experiments." },
    { answer: "ISOTOPE", clue: "Variants of a chemical element having identical proton counts but differing neutron counts.", examFact: "Carbon-14 isotope is utilized for radiocarbon dating of biological historical artifacts." },
    { answer: "PRISM", clue: "Transparent optical element with flat polished surfaces that refracts light into a spectrum.", examFact: "Demonstrated by Isaac Newton in 1666 to prove white sunlight comprises multiple colors." },
    { answer: "ENERGY", clue: "Quantitative property that is transferred to a body or physical system, recognizable in work performed.", examFact: "Law of Conservation of Energy dictates energy cannot be created or destroyed, only transformed." },
    { answer: "PLASMA", clue: "Fourth fundamental state of matter consisting of high-temperature ionized gas.", examFact: "Constitutes over 99% of visible matter in the universe, including the Sun and stars." },
    { answer: "NEURON", clue: "Specialized excitable cell transmitting electrical nerve impulses in the nervous system.", examFact: "Comprises dendrites, an axon, and a soma; communicates across synapses using neurotransmitters." }
  ],
  law: [
    { answer: "CERTIORARI", clue: "Prerogative writ issued by superior courts to quash illegal orders of inferior courts or tribunals.", examFact: "Governed under Article 199(1)(a)(ii) of Pakistan's 1973 Constitution to correct jurisdictional errors." },
    { answer: "MANDAMUS", clue: "Constitutional writ commanding a public officer or statutory body to perform a legal duty.", examFact: "Issued under Article 199(1)(a)(i) of the 1973 Constitution to enforce public statutory duty compliance." },
    { answer: "INJUNCTION", clue: "Judicial remedy restraining a party from committing or continuing an injurious act.", examFact: "Granted under the Specific Relief Act 1877; categorized as temporary, permanent, or mandatory." },
    { answer: "ADJUDICATION", clue: "Formal legal judgment or determination delivered by a court in a contested dispute.", examFact: "Fundamental requirement of administrative law enforcing the principles of natural justice." },
    { answer: "SEDITION", clue: "Offense of inciting disaffection or rebellion against the lawfully established government.", examFact: "Codified under Section 124-A of the Pakistan Penal Code (PPC 1860); heavily debated in constitutional law." },
    { answer: "JURISPRUDENCE", clue: "Philosophy, theory, and structural science of positive law.", examFact: "Includes natural law, legal positivism (Austin, Hart), and historical and sociological schools." },
    { answer: "TORT", clue: "Civil wrong other than breach of contract that causes injury, entitling claimant to compensation.", examFact: "Common law doctrine encompassing negligence, libel, slander, nuisance, and strict liability." },
    { answer: "BAILMENT", clue: "Delivery of goods in trust from bailor to bailee for a specific legal purpose.", examFact: "Defined in Section 148 of the Contract Act 1872; requires return or disposal of goods upon completion." },
    { answer: "STATUTE", clue: "Formal written law enacted by a legislative authority such as parliament.", examFact: "Primary legislation taking precedence over subordinate or delegated rules and regulations." },
    { answer: "VERDICT", clue: "Formal finding of fact or decision made by a jury or judicial magistrate.", examFact: "Pronounced in criminal jurisprudence as either an acquittal or a conviction." },
    { answer: "EVIDENCE", clue: "Information, testimony, or physical documents admissible in court to prove legal facts.", examFact: "Codified in Pakistan under the Qanun-e-Shahadat Order 1984 (QSO)." }
  ],
  geography: [
    { answer: "ARCHIPELAGO", clue: "Extensive group or cluster of scattered islands in a sea or ocean (e.g. Indonesia).", examFact: "Indonesia is the world's largest archipelagic state, comprising over 17,500 islands." },
    { answer: "PENINSULA", clue: "Landform surrounded by water on three sides while connected to mainland on the fourth.", examFact: "The Arabian Peninsula is the largest peninsula in the world, spanning over 3.2 million sq km." },
    { answer: "ISTHMUS", clue: "Narrow neck of land connecting two larger land masses with water on both sides (e.g. Panama).", examFact: "The Isthmus of Panama links North and South America and was excavated for the canal in 1914." },
    { answer: "TRIBUTARY", clue: "Freshwater river or stream that flows into a larger stem river rather than directly into a sea.", examFact: "The Jhelum, Chenab, Ravi, and Sutlej are the principal eastern tributaries of the Indus." },
    { answer: "PLATEAU", clue: "Extensive elevated upland area characterized by a relatively flat summit and steep slopes.", examFact: "The Potohar Plateau and Balochistan Plateau form major physiographic regions of Pakistan." },
    { answer: "ESTUARY", clue: "Tidal river mouth where freshwater mixes with saline ocean water.", examFact: "Critical ecological ecotone serving as nutrient-rich nurseries for marine and estuarine species." },
    { answer: "STRAIT", clue: "Narrow natural maritime corridor connecting two large seas or oceans (e.g. Malacca).", examFact: "The Strait of Malacca connects the Indian and Pacific Oceans; conveys over 90,000 ships annually." },
    { answer: "GLACIER", clue: "Persistent dense mass of moving ice formed by snow accumulation over centuries.", examFact: "Pakistan contains over 7,200 glaciers, the highest volume outside the polar regions (Siachen, Baltoro)." },
    { answer: "DELTA", clue: "Triangular landform created by the deposition of river sediment as it enters slower water.", examFact: "The Indus River Delta in southern Sindh is the world's 5th largest delta, featuring mangrove forests." },
    { answer: "CANYON", clue: "Deep narrow gorge with steep rocky sides typically carved by prolonged river erosion.", examFact: "Grand Canyon carved by the Colorado River; Hingol National Park features canyons in Balochistan." },
    { answer: "EQUATOR", clue: "Great imaginary circle around Earth equidistant from the North and South poles (0° latitude).", examFact: "Passes through 13 countries including Ecuador, Colombia, Brazil, Kenya, and Indonesia." },
    { answer: "DESERT", clue: "Arid land biome receiving less than 250 millimeters of annual precipitation.", examFact: "Thar Desert is the world's 9th largest subtropical desert, spanning Sindh, Punjab, and Rajasthan." }
  ],
  current_affairs: [
    { answer: "INFLATION", clue: "Sustained increase in the overall price level eroding real currency purchasing power.", examFact: "Monitored through Consumer Price Index (CPI); central to State Bank of Pakistan interest rate policy." },
    { answer: "RENEWABLE", clue: "Energy from clean natural sources that replenish continually (solar, wind, hydel).", examFact: "Pakistan's Alternative and Renewable Energy (ARE) Policy targets 30% renewable capacity by 2030." },
    { answer: "RESILIENCE", clue: "Capacity of socio-economic systems to absorb climate disasters and recover rapidly.", examFact: "Core focus of Pakistan's Resilient Recovery, Rehabilitation, and Reconstruction Framework (4RF)." },
    { answer: "CORRIDOR", clue: "Designated linear infrastructure zone facilitating trade and energy flow (e.g. CPEC).", examFact: "The China-Pakistan Economic Corridor (CPEC) connects Gwadar with Kashgar, Xinjiang." },
    { answer: "CLIMATE", clue: "Long-term statistical pattern of atmospheric conditions and weather across decades.", examFact: "Pakistan ranks among the top 10 most climate-vulnerable nations according to Germanwatch CRI." },
    { answer: "DEFICIT", clue: "Condition where fiscal expenditures exceed fiscal revenues over a defined budgeting period.", examFact: "Fiscal deficit and current account deficit (CAD) are recurring macro-stabilization issues in Pakistan." },
    { answer: "SUMMIT", clue: "High-level diplomatic conference of heads of state or government (e.g. SCO, COP28).", examFact: "Pakistan successfully hosted the SCO Heads of Government Summit in Islamabad in October 2024." },
    { answer: "DIGITAL", clue: "Electronic technology utilizing binary computing systems transforming governance (e.g. Raast).", examFact: "The State Bank of Pakistan introduced 'Raast' as Pakistan's instant digital payments gateway." },
    { answer: "ENERGY", clue: "Crucial economic sector covering circular debt, thermal generation, and hydel projects.", examFact: "Circular debt in Pakistan's power sector remains a primary structural reform condition under the IMF." },
    { answer: "TARIFF", clue: "Customs duty or tax levied by a government on imports or exports.", examFact: "Import tariffs and regulatory duties form key fiscal instruments for trade balance regulation." },
    { answer: "POLLUTION", clue: "Introduction of contaminants into the natural environment causing adverse change (e.g. Smog).", examFact: "Lahore and Punjab face acute hazardous seasonal smog driven by vehicular emissions and stubble burning." },
    { answer: "CRISIS", clue: "Time of intense difficulty or danger requiring decisive governmental response.", examFact: "Covers balance of payments, food security, and climate adaptation crises in civil service analysis." }
  ]
};

// Crossword Placement Engine
function buildCrossword(vocabList, gridSize = 12, targetCount = 6) {
  const words = [...vocabList].sort((a, b) => b.answer.length - a.answer.length);

  function solve(index, currentPlacements, grid) {
    if (currentPlacements.length >= targetCount) return currentPlacements;
    if (index >= words.length) return currentPlacements.length >= 5 ? currentPlacements : null;

    const wordObj = words[index];
    const word = wordObj.answer;

    if (currentPlacements.length === 0) {
      const r = Math.floor(gridSize / 3);
      const c = Math.floor((gridSize - word.length) / 2);
      if (c >= 0 && c + word.length <= gridSize) {
        const nextGrid = { ...grid };
        for (let i = 0; i < word.length; i++) nextGrid[`${r},${c + i}`] = word[i];
        const placement = { ...wordObj, row: r, col: c, direction: 'across' };
        const res = solve(index + 1, [placement], nextGrid);
        if (res) return res;
      }
    } else {
      const dirs = ['down', 'across'];
      for (const dir of dirs) {
        for (let r = 0; r < gridSize; r++) {
          for (let c = 0; c < gridSize; c++) {
            if (dir === 'across' && c + word.length > gridSize) continue;
            if (dir === 'down' && r + word.length > gridSize) continue;

            let intersections = 0;
            let valid = true;

            for (let i = 0; i < word.length; i++) {
              const cr = dir === 'across' ? r : r + i;
              const cc = dir === 'across' ? c + i : c;
              const existing = grid[`${cr},${cc}`];

              if (existing) {
                if (existing === word[i]) {
                  intersections++;
                } else {
                  valid = false;
                  break;
                }
              } else {
                const checkAdjacent = (ar, ac) => {
                  if (ar >= 0 && ar < gridSize && ac >= 0 && ac < gridSize) {
                    if (grid[`${ar},${ac}`]) return true;
                  }
                  return false;
                };
                if (dir === 'across') {
                  if (checkAdjacent(cr - 1, cc) || checkAdjacent(cr + 1, cc)) {
                    valid = false;
                    break;
                  }
                } else {
                  if (checkAdjacent(cr, cc - 1) || checkAdjacent(cr, cc + 1)) {
                    valid = false;
                    break;
                  }
                }
              }
            }

            if (dir === 'across') {
              if (c > 0 && grid[`${r},${c - 1}`]) valid = false;
              if (c + word.length < gridSize && grid[`${r},${c + word.length}`]) valid = false;
            } else {
              if (r > 0 && grid[`${r - 1},${c}`]) valid = false;
              if (r + word.length < gridSize && grid[`${r + word.length},${c}`]) valid = false;
            }

            if (valid && intersections >= 1) {
              const nextGrid = { ...grid };
              for (let i = 0; i < word.length; i++) {
                const cr = dir === 'across' ? r : r + i;
                const cc = dir === 'across' ? c + i : c;
                nextGrid[`${cr},${cc}`] = word[i];
              }
              const placement = { ...wordObj, row: r, col: c, direction: dir };
              const res = solve(index + 1, [...currentPlacements, placement], nextGrid);
              if (res) return res;
            }
          }
        }
      }

      const resSkip = solve(index + 1, currentPlacements, grid);
      if (resSkip) return resSkip;
    }

    return null;
  }

  for (let startIdx = 0; startIdx < Math.min(5, words.length); startIdx++) {
    const rotated = [...words.slice(startIdx), ...words.slice(0, startIdx)];
    const result = solve(0, [], {});
    if (result && result.length >= 5) return result;
  }

  return null;
}

const finalCrosswords = {};
for (const [catKey, list] of Object.entries(VOCABULARY)) {
  console.log(`Generating layout for ${catKey}...`);
  const placements = buildCrossword(list, 13, 6);
  if (placements) {
    console.log(`✓ ${catKey} succeeded with ${placements.length} words!`);
    
    const cellNumbers = {};
    let currentNumber = 1;

    const sorted = [...placements].sort((a, b) => {
      if (a.row !== b.row) return a.row - b.row;
      return a.col - b.col;
    });

    sorted.forEach(w => {
      const key = `${w.row},${w.col}`;
      if (!cellNumbers[key]) {
        cellNumbers[key] = currentNumber++;
      }
      w.number = cellNumbers[key];
    });

    finalCrosswords[catKey] = {
      size: 13,
      words: sorted
    };
  } else {
    console.error(`X ${catKey} failed!`);
  }
}

// Generate Grand Civil Service Crossword (All categories mixed)
console.log("Generating Grand Civil Service Crossword...");
const mixedList = [
  ...VOCABULARY.pakistan_affairs.slice(0, 3),
  ...VOCABULARY.international_relations.slice(0, 3),
  ...VOCABULARY.science.slice(0, 3),
  ...VOCABULARY.law.slice(0, 3),
  ...VOCABULARY.geography.slice(0, 3),
  ...VOCABULARY.current_affairs.slice(0, 3)
];
const grandPlacements = buildCrossword(mixedList, 15, 7);
if (grandPlacements) {
  console.log(`✓ Grand Crossword succeeded with ${grandPlacements.length} words!`);
  const cellNumbers = {};
  let currentNumber = 1;
  const sorted = [...grandPlacements].sort((a, b) => {
    if (a.row !== b.row) return a.row - b.row;
    return a.col - b.col;
  });
  sorted.forEach(w => {
    const key = `${w.row},${w.col}`;
    if (!cellNumbers[key]) {
      cellNumbers[key] = currentNumber++;
    }
    w.number = cellNumbers[key];
  });
  finalCrosswords['grand'] = {
    size: 15,
    words: sorted
  };
} else {
  console.error("X Grand Crossword failed");
}

fs.writeFileSync('scratch/final_crosswords.json', JSON.stringify({
  vocabulary: VOCABULARY,
  crosswords: finalCrosswords
}, null, 2));

console.log("Exported data to scratch/final_crosswords.json");
