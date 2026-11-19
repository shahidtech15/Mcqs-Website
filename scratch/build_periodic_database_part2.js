const fs = require('fs');

// Elements 55 to 118
const elements_55_118 = [
  // 55-60
  { z: 55, s: "Cs", n: "Cesium", mass: 132.91, cat: "alkali-metal", catName: "Alkali Metal", grp: 1, per: 6, blk: "s",
    config: "[Xe] 6s¹", shells: [2, 8, 18, 18, 8, 1], phase: "Solid", melt: 28.5, boil: 671, dens: "1.93", eneg: 0.79, ion: 376, rad: 298,
    ox: "+1", disc: "Bunsen & Kirchhoff", year: "1860", loc: "Germany",
    etym: "Latin 'caesius' (sky blue, for its bright blue spectral lines)",
    uses: ["Cesium atomic clocks defining the official SI second (9,192,631,770 Hz)", "High-density cesium formate drilling brines in deep oil wells", "Infrared optical detectors & night vision photomultipliers", "Cesium-137 industrial gamma irradiators"],
    exam: "Most electropositive and least electronegative stable element (0.79 Pauling). Melts just above room temperature (28.5°C) and explodes violently in water even at -116°C.", radActive: false },

  { z: 56, s: "Ba", n: "Barium", mass: 137.33, cat: "alkaline-earth", catName: "Alkaline Earth Metal", grp: 2, per: 6, blk: "s",
    config: "[Xe] 6s²", shells: [2, 8, 18, 18, 8, 2], phase: "Solid", melt: 727, boil: 1897, dens: "3.51", eneg: 0.89, ion: 503, rad: 253,
    ox: "+2", disc: "Carl Wilhelm Scheele / Humphry Davy", year: "1808", loc: "UK",
    etym: "Greek 'barys' (heavy)",
    uses: ["Barium sulfate 'barium meal' radiopaque contrast agent for GI tract X-rays", "Green pyrotechnic fireworks and tracer ammunition", "Drilling mud weighting agent (baryte)", "High-temperature YBCO superconductors"],
    exam: "Soluble barium salts are highly poisonous, but barium sulfate (BaSO₄) is safely ingested because of its extreme insolubility (Ksp ≈ 1.1 × 10⁻¹⁰). Imparts brilliant green flame test.", radActive: false },

  { z: 57, s: "La", n: "Lanthanum", mass: 138.91, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "d",
    config: "[Xe] 5d¹ 6s²", shells: [2, 8, 18, 18, 9, 2], phase: "Solid", melt: 920, boil: 3464, dens: "6.162", eneg: 1.10, ion: 538, rad: 195,
    ox: "+3", disc: "Carl Gustaf Mosander", year: "1839", loc: "Sweden",
    etym: "Greek 'lanthanein' (to lie hidden)",
    uses: ["High refractive index glass for high-end camera & telescope lenses", "Lanthanum-nickel hydride hydrogen storage anodes in NiMH hybrid car batteries", "Mischmetal in lighter flints", "Carbon arc studio lighting"],
    exam: "Prototype of the Lanthanide series. Shows anomalous 5d¹ 6s² configuration instead of filling 4f directly. First of the 15 rare-earth lanthanides.", radActive: false },

  { z: 58, s: "Ce", n: "Cerium", mass: 140.12, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f¹ 5d¹ 6s²", shells: [2, 8, 18, 19, 9, 2], phase: "Solid", melt: 795, boil: 3443, dens: "6.77", eneg: 1.12, ion: 534, rad: 185,
    ox: "+3, +4", disc: "Klaproth, Berzelius & Hisinger", year: "1803", loc: "Sweden / Germany",
    etym: "Named after newly discovered asteroid Ceres (Roman goddess of agriculture)",
    uses: ["Catalytic converters in automobiles (CeO₂ stores and releases oxygen)", "Self-cleaning oven catalytic liners and glass polishing powder", "Mischmetal pyrophoric ferrocerium lighter flints (50% Ce)", "Carbon arc motion picture lighting"],
    exam: "Most abundant of all rare earth elements (~66 ppm, more common than copper). Unique among lanthanides for having a stable +4 oxidation state (Ce⁴⁺ is a powerful analytical oxidizing agent).", radActive: false },

  { z: 59, s: "Pr", n: "Praseodymium", mass: 140.91, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f³ 6s²", shells: [2, 8, 18, 21, 8, 2], phase: "Solid", melt: 935, boil: 3520, dens: "6.77", eneg: 1.13, ion: 527, rad: 247,
    ox: "+3, +4", disc: "Carl Auer von Welsbach", year: "1885", loc: "Austria",
    etym: "Greek 'prasios didymos' (green twin, referring to green salts and split from didymium)",
    uses: ["Didymium glass for welder's goggles that blocks yellow sodium D-line flare", "High-strength neodymium-praseodymium permanent magnets (NdFeB)", "Aircraft engine magnesium alloy strengthening", "Yellow-green glass and ceramic pigments"],
    exam: "Separated from didymium along with neodymium. Crucial alloying element in permanent magnets used in wind turbines and EV traction motors.", radActive: false },

  { z: 60, s: "Nd", n: "Neodymium", mass: 144.24, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f⁴ 6s²", shells: [2, 8, 18, 22, 8, 2], phase: "Solid", melt: 1024, boil: 3074, dens: "7.01", eneg: 1.14, ion: 533, rad: 206,
    ox: "+3", disc: "Carl Auer von Welsbach", year: "1885", loc: "Austria",
    etym: "Greek 'neos didymos' (new twin)",
    uses: ["World's strongest permanent magnets (Nd₂Fe₁₄B) in EVs, wind turbines, hard drives, MRI", "Nd:YAG lasers in laser eye surgery, dermatology & manufacturing", "Glass tinting (wine-red to purple under incandescent light)", "Welder's safety goggles (didymium glass)"],
    exam: "Critical strategic raw material for global renewable energy and electric vehicles. NdFeB magnets can hold over 1000 times their own weight. Nd:YAG emits at 1064 nm.", radActive: false },

  // 61-70
  { z: 61, s: "Pm", n: "Promethium", mass: 145, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f⁵ 6s²", shells: [2, 8, 18, 23, 8, 2], phase: "Solid", melt: 1042, boil: 3000, dens: "7.26", eneg: 1.13, ion: 540, rad: 205,
    ox: "+3", disc: "Marinsky, Glendenin & Coryell", year: "1945", loc: "USA (Oak Ridge)",
    etym: "Named after Prometheus, Titan who stole fire from Mount Olympus for mankind",
    uses: ["Nuclear beta-voltaic atomic batteries (pacemakers, space probes)", "Luminous paint for aircraft instrument dials without radiation hazards", "Radioisotope thickness gauges for sheet metal and plastics", "Portable X-ray sources"],
    exam: "Only radioactive lanthanide and only non-primordial element between H (1) and Bi (83) other than Technetium (43). All isotopes are unstable (Pm-145 half-life 17.7 yrs).", radActive: true },

  { z: 62, s: "Sm", n: "Samarium", mass: 150.36, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f⁶ 6s²", shells: [2, 8, 18, 24, 8, 2], phase: "Solid", melt: 1072, boil: 1794, dens: "7.52", eneg: 1.17, ion: 544, rad: 238,
    ox: "+3, +2", disc: "Paul-Émile Lecoq de Boisbaudran", year: "1879", loc: "France",
    etym: "Named after the mineral samarskite (honoring Russian mining engineer V. Samarsky-Bykhovets)",
    uses: ["Samarium-Cobalt (SmCo) high-temperature permanent magnets in jet engines & missiles", "Samarium-153 (Quadramet) targeted radiopharmaceutical for bone cancer pain relief", "Nuclear reactor control rod neutron absorbers", "Kagan's reagent (SmI₂) in organic synthesis"],
    exam: "SmCo magnets resist demagnetization at temperatures up to 800°C where NdFeB magnets fail. First chemical element ever named after a real human person (Samarsky).", radActive: false },

  { z: 63, s: "Eu", n: "Europium", mass: 151.96, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f⁷ 6s²", shells: [2, 8, 18, 25, 8, 2], phase: "Solid", melt: 826, boil: 1529, dens: "5.244", eneg: 1.20, ion: 547, rad: 231,
    ox: "+3, +2", disc: "Eugène-Anatole Demarçay", year: "1901", loc: "France",
    etym: "Named after the continent of Europe",
    uses: ["Anti-counterfeiting red/blue phosphors in Euro banknotes under UV light", "Red phosphors (Eu³⁺) in CRT, TV screens and LED displays", "Quantum memory crystals for quantum computing networks", "Neutron poison control rods in nuclear reactors"],
    exam: "Most chemically reactive lanthanide (tarnishes instantly in air, ignites at 150-180°C). Half-filled 4f⁷ subshell gives stable +2 oxidation state (Eu²⁺).", radActive: false },

  { z: 64, s: "Gd", n: "Gadolinium", mass: 157.25, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f⁷ 5d¹ 6s²", shells: [2, 8, 18, 25, 9, 2], phase: "Solid", melt: 1313, boil: 3273, dens: "7.90", eneg: 1.20, ion: 593, rad: 233,
    ox: "+3", disc: "Jean Charles Galissard de Marignac", year: "1880", loc: "Switzerland",
    etym: "Named after Johan Gadolin, Finnish chemist who discovered yttria",
    uses: ["Intravenous Gadolinium-based contrast agents (GBCA) for MRI brain/body scanning", "Magnetocaloric magnetic refrigeration (cools when magnetic field removed)", "Neutron capture therapy and nuclear reactor shutdown control rods", "Green phosphors for X-ray intensifying screens"],
    exam: "Possesses 7 unpaired electrons in 4f subshell giving Gd³⁺ the highest paramagnetic moment of any ion. Highest thermal neutron capture cross-section (49,000 barns) of any natural element.", radActive: false },

  { z: 65, s: "Tb", n: "Terbium", mass: 158.93, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f⁹ 6s²", shells: [2, 8, 18, 27, 8, 2], phase: "Solid", melt: 1356, boil: 3230, dens: "8.23", eneg: 1.20, ion: 565, rad: 225,
    ox: "+3, +4", disc: "Carl Gustaf Mosander", year: "1843", loc: "Sweden",
    etym: "Named after the village of Ytterby in Sweden",
    uses: ["Terfenol-D high-strain magnetostrictive alloy for sonar, sensors, and actuators", "Green phosphors in tricolor fluorescent lamps and flat panel screens", "Solid-state laser crystals (Tb³⁺)", "Fuel cell electrolyte stabilizer"],
    exam: "One of 4 elements named after the Swedish village of Ytterby (Y, Tb, Er, Yb). Terfenol-D expands/contracts significantly in a magnetic field (giant magnetostriction).", radActive: false },

  { z: 66, s: "Dy", n: "Dysprosium", mass: 162.50, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f¹⁰ 6s²", shells: [2, 8, 18, 28, 8, 2], phase: "Solid", melt: 1412, boil: 2567, dens: "8.54", eneg: 1.22, ion: 573, rad: 228,
    ox: "+3", disc: "Paul-Émile Lecoq de Boisbaudran", year: "1886", loc: "France",
    etym: "Greek 'dysprositos' (hard to get at)",
    uses: ["Additive in NdFeB electric vehicle magnets to resist high-temperature demagnetization", "Nuclear reactor control rods (cermet neutron absorbers)", "Terfenol-D naval transducer sonar transducers", "Infrared radiation source dosimeters"],
    exam: "Highest magnetic strength (magnetic susceptibility) of all elements at cryogenic temperatures. Essential critical mineral for heavy-duty electric vehicle drivetrain motors.", radActive: false },

  { z: 67, s: "Ho", n: "Holmium", mass: 164.93, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f¹¹ 6s²", shells: [2, 8, 18, 29, 8, 2], phase: "Solid", melt: 1474, boil: 2700, dens: "8.79", eneg: 1.23, ion: 581, rad: 226,
    ox: "+3", disc: "Marc Delafontaine, Jacques-Louis Soret & Per Teodor Cleve", year: "1878", loc: "Switzerland / Sweden",
    etym: "Latin 'Holmia' (ancient name for Stockholm)",
    uses: ["Holmium:YAG (Ho:YAG) medical lasers for kidney stone fragmentation (lithotripsy)", "Pole pieces for high-field magnetic resonance spectrometers", "Single-atom digital data storage bits (IBM research)", "Yellow-pink glass and optical calibration filters"],
    exam: "Has highest magnetic moment (10.6 µB) of any naturally occurring chemical element. Holmium lasers operate at 2.1 µm, absorbed strongly by water in biological tissues.", radActive: false },

  { z: 68, s: "Er", n: "Erbium", mass: 167.26, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f¹² 6s²", shells: [2, 8, 18, 30, 8, 2], phase: "Solid", melt: 1529, boil: 2868, dens: "9.066", eneg: 1.24, ion: 589, rad: 226,
    ox: "+3", disc: "Carl Gustaf Mosander", year: "1843", loc: "Sweden",
    etym: "Named after the village of Ytterby, Sweden",
    uses: ["Erbium-doped fiber amplifiers (EDFA) powering global transoceanic internet optical cables", "Er:YAG dermatology cosmetic lasers for skin resurfacing & dentistry", "Pink colorant for sunglasses, porcelain, and jewelry cubic zirconia", "Cryogenic cryocooler regenerator alloys"],
    exam: "Underpins the modern internet: EDFA optical amplifiers amplify 1550 nm signals directly in fiber-optic cables without converting photons to electricity.", radActive: false },

  { z: 69, s: "Tm", n: "Thulium", mass: 168.93, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f¹³ 6s²", shells: [2, 8, 18, 31, 8, 2], phase: "Solid", melt: 1545, boil: 1950, dens: "9.32", eneg: 1.25, ion: 597, rad: 222,
    ox: "+3, +2", disc: "Per Teodor Cleve", year: "1879", loc: "Sweden",
    etym: "Thule (ancient Greco-Roman mythical northern land, Scandinavia)",
    uses: ["Portable medical X-ray machines (activated Thulium-170)", "Thulium fiber lasers (TFL) for minimally invasive soft-tissue surgery", "Anti-counterfeiting blue fluorescent banknote security markers", "High-temperature arc metal halide lighting"],
    exam: "Second rarest naturally occurring lanthanide after promethium. Despite rarity, Tm-170 is favored for battery-free field X-ray devices because of low radiation shielding needs.", radActive: false },

  { z: 70, s: "Yb", n: "Ytterbium", mass: 173.05, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "f",
    config: "[Xe] 4f¹⁴ 6s²", shells: [2, 8, 18, 32, 8, 2], phase: "Solid", melt: 824, boil: 1196, dens: "6.90", eneg: 1.10, ion: 603, rad: 222,
    ox: "+3, +2", disc: "Jean Charles Galissard de Marignac", year: "1878", loc: "Switzerland",
    etym: "Named after Ytterby, Sweden",
    uses: ["Ultra-precise optical atomic clocks (accurate to 1 second in 15 billion years)", "High-power industrial Yb-fiber laser cutting and welding systems", "Stainless steel stress sensor (electrical resistance increases under stress)", "Yb-169 portable gamma radiography sources"],
    exam: "Completely filled 4f¹⁴ shell gives Yb anomalous low density and melting point among heavy lanthanides, behaving somewhat like alkaline earth calcium.", radActive: false },

  // 71-80
  { z: 71, s: "Lu", n: "Lutetium", mass: 174.97, cat: "lanthanide", catName: "Lanthanide", grp: 3, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d¹ 6s²", shells: [2, 8, 18, 32, 9, 2], phase: "Solid", melt: 1663, boil: 3402, dens: "9.841", eneg: 1.27, ion: 524, rad: 217,
    ox: "+3", disc: "Georges Urbain & Carl Auer von Welsbach", year: "1907", loc: "France / Austria",
    etym: "Latin 'Lutetia' (ancient Roman city that became Paris)",
    uses: ["Lutetium-177 targeted radionuclide therapy (Pluvicto) for prostate and neuroendocrine cancers", "LSO (Lutetium oxyorthosilicate) crystal detectors in medical PET scanners", "Petroleum catalytic cracking refinery catalysts", "Lutetium-hafnium dating in geochronology"],
    exam: "Last element of lanthanide series; hardest and densest lanthanide. Due to lanthanide contraction, Lu³⁺ has smallest ionic radius of all rare earths.", radActive: false },

  { z: 72, s: "Hf", n: "Hafnium", mass: 178.49, cat: "transition-metal", catName: "Transition Metal", grp: 4, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d² 6s²", shells: [2, 8, 18, 32, 10, 2], phase: "Solid", melt: 2233, boil: 4603, dens: "13.31", eneg: 1.30, ion: 659, rad: 208,
    ox: "+4", disc: "Dirk Coster & George de Hevesy", year: "1923", loc: "Denmark",
    etym: "Latin 'Hafnia' (Copenhagen)",
    uses: ["High-k dielectric gate insulator in Intel microprocessors (HfO₂)", "Nuclear submarine reactor control rods (exceptional neutron absorption)", "Plasma cutting torch electrodes", "Superalloys for jet engine turbine combustion chambers"],
    exam: "Chemically almost indistinguishable from Zirconium (Zr) due to Lanthanide Contraction, making separation historically one of chemistry's hardest tasks. Discovered via Bohr's quantum model predictions.", radActive: false },

  { z: 73, s: "Ta", n: "Tantalum", mass: 180.95, cat: "transition-metal", catName: "Transition Metal", grp: 5, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d³ 6s²", shells: [2, 8, 18, 32, 11, 2], phase: "Solid", melt: 3017, boil: 5458, dens: "16.69", eneg: 1.50, ion: 761, rad: 200,
    ox: "+5", disc: "Anders Gustaf Ekeberg", year: "1802", loc: "Sweden",
    etym: "Named after King Tantalus of Greek mythology (condemned to stand in water that recedes)",
    uses: ["Miniature high-capacitance electrolytic capacitors in smartphones and laptops", "Biocompatible surgical implants, cranial plates and bone screws", "Chemical plant acid-resistant heat exchangers", "Turbine blades in aerospace jet engines"],
    exam: "Extremely inert to corrosion (immune to aqua regia below 150°C). Critical conflict mineral (sourced from coltan ore in DRC). Fourth highest melting point of all elements.", radActive: false },

  { z: 74, s: "W", n: "Tungsten", mass: 183.84, cat: "transition-metal", catName: "Transition Metal", grp: 6, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d⁴ 6s²", shells: [2, 8, 18, 32, 12, 2], phase: "Solid", melt: 3422, boil: 5555, dens: "19.25", eneg: 2.36, ion: 770, rad: 193,
    ox: "+6, +5, +4, +3, +2", disc: "Fausto & Juan José Elhuyar", year: "1783", loc: "Spain",
    etym: "Swedish 'tung sten' (heavy stone); symbol W from German 'Wolfram'",
    uses: ["Tungsten carbide (WC) super-hard cutting tools, mining drill bits and armor-piercing munitions", "Incandescent lamp filaments and TIG welding electrodes", "X-ray tube rotating anodes", "Radiation shielding (density close to gold)"],
    exam: "Highest melting point of all metals (3422°C / 3695 K) and highest tensile strength at >1650°C. Symbol W comes from Wolframite mineral.", radActive: false },

  { z: 75, s: "Re", n: "Rhenium", mass: 186.21, cat: "transition-metal", catName: "Transition Metal", grp: 7, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d⁵ 6s²", shells: [2, 8, 18, 32, 13, 2], phase: "Solid", melt: 3186, boil: 5596, dens: "21.02", eneg: 1.90, ion: 760, rad: 188,
    ox: "+7, +6, +4, +2, -1", disc: "Walter Noddack, Ida Tacke & Otto Berg", year: "1925", loc: "Germany",
    etym: "Latin 'Rhenus' (Rhine River)",
    uses: ["Single-crystal nickel superalloys for high-stress jet engine turbine blades (70% of world supply)", "Platinum-rhenium bimetallic reforming catalysts for lead-free high-octane gasoline", "High-temperature thermocouples (up to 2200°C)", "Mass spectrometer electrical filaments"],
    exam: "Third highest melting point and highest boiling point of all elements (5596°C). Last stable naturally occurring element discovered (in 1925). Discovered by female physicist Ida Noddack-Tacke.", radActive: false },

  { z: 76, s: "Os", n: "Osmium", mass: 190.23, cat: "transition-metal", catName: "Transition Metal", grp: 8, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d⁶ 6s²", shells: [2, 8, 18, 32, 14, 2], phase: "Solid", melt: 3033, boil: 5012, dens: "22.59", eneg: 2.20, ion: 840, rad: 185,
    ox: "+8, +4, +3, +2", disc: "Smithson Tennant", year: "1803", loc: "UK",
    etym: "Greek 'osme' (odor, due to pungent, volatile osmium tetroxide OsO₄)",
    uses: ["Wear-resistant electrical contacts and instrument pivots", "Osmium tetroxide (OsO₄) lipid staining for electron microscopy", "High-stress fountain pen nib tipping alloys (osmiridium)", "Synchrotron X-ray optical mirror coating"],
    exam: "Densest naturally occurring element (22.59 g/cm³, slightly beating Iridium at 22.56 g/cm³). Forms toxic OsO₄ with highest common formal oxidation state of +8.", radActive: false },

  { z: 77, s: "Ir", n: "Iridium", mass: 192.22, cat: "transition-metal", catName: "Transition Metal", grp: 9, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d⁷ 6s²", shells: [2, 8, 18, 32, 15, 2], phase: "Solid", melt: 2446, boil: 4428, dens: "22.56", eneg: 2.20, ion: 880, rad: 180,
    ox: "+4, +3, +6, +1", disc: "Smithson Tennant", year: "1803", loc: "UK",
    etym: "Greek 'Iris' (goddess of rainbow, from its brightly multicolored salts)",
    uses: ["Proton Exchange Membrane (PEM) electrolyzers for green hydrogen production", "Crucibles for growing high-purity single crystal laser and semiconductor materials", "High-performance aviation spark plug electrodes", "Industrial radiography non-destructive testing (Iridium-192)"],
    exam: "Most corrosion-resistant metal known (unattacked by acids even at 2000°C). Alvarez Cretaceous-Paleogene (K-Pg) boundary asteroid impact hypothesis proved by iridium clay spike worldwide.", radActive: false },

  { z: 78, s: "Pt", n: "Platinum", mass: 195.08, cat: "transition-metal", catName: "Transition Metal", grp: 10, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", shells: [2, 8, 18, 32, 17, 1], phase: "Solid", melt: 1768.3, boil: 3825, dens: "21.45", eneg: 2.28, ion: 870, rad: 177,
    ox: "+4, +2", disc: "Antonio de Ulloa", year: "1735", loc: "Spain / Colombia",
    etym: "Spanish 'platina' (little silver)",
    uses: ["Automotive catalytic converters (neutralizes NOx, CO, and hydrocarbons)", "Cisplatin and carboplatin life-saving cancer chemotherapy drugs", "Fine jewelry and prestige bullion coins", "Standard Hydrogen Electrode (SHE) laboratory electrochemistry"],
    exam: "Extremely inert noble metal dissolved only by aqua regia. Cisplatin (cis-[Pt(NH₃)₂Cl₂]) crosslinks cancer cell DNA and revolutionized testicular cancer survival rates (>95%).", radActive: false },

  { z: 79, s: "Au", n: "Gold", mass: 196.97, cat: "transition-metal", catName: "Transition Metal", grp: 11, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", shells: [2, 8, 18, 32, 18, 1], phase: "Solid", melt: 1064.18, boil: 2970, dens: "19.30", eneg: 2.54, ion: 890, rad: 174,
    ox: "+3, +1", disc: "Prehistoric", year: "Ancient", loc: "Middle East / Worldwide",
    etym: "Old English 'geolu' (yellow); symbol Au from Latin 'Aurum' (shining dawn)",
    uses: ["Global central bank monetary reserves and investment bars", "Corrosion-proof micro-bonding wire in electronics and microchips", "Astronaut helmet visor and satellite reflective thermal gold foils", "Luxury jewelry and fine art gilding"],
    exam: "Most malleable and ductile metal known: 1 single gram can be beaten into a 1 m² sheet (gold leaf, 400 atoms thick) or drawn into 2.5 km of ultra-fine wire. Color caused by relativistic quantum effects.", radActive: false },

  { z: 80, s: "Hg", n: "Mercury", mass: 200.59, cat: "transition-metal", catName: "Transition Metal", grp: 12, per: 6, blk: "d",
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", shells: [2, 8, 18, 32, 18, 2], phase: "Liquid", melt: -38.83, boil: 356.73, dens: "13.534", eneg: 2.00, ion: 1007, rad: 171,
    ox: "+2, +1", disc: "Prehistoric", year: "Ancient", loc: "Egypt / China",
    etym: "Named after Roman god Mercury; symbol Hg from Greek 'hydrargyrum' (liquid silver / quicksilver)",
    uses: ["Traditional clinical thermometers, sphygmomanometers & barometers", "Dental amalgam fillings (alloy with Ag, Sn, Cu)", "Fluorescent lamps & vapor streetlights", "Artisanal gold mining amalgamation"],
    exam: "Only metallic element liquid at standard temperature and pressure (STP). Forms diatomic Hg₂²⁺ cation. Methylmercury causes severe neurological Minamata disease.", radActive: false },

  // 81-86
  { z: 81, s: "Tl", n: "Thallium", mass: 204.38, cat: "post-transition-metal", catName: "Post-Transition Metal", grp: 13, per: 6, blk: "p",
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", shells: [2, 8, 18, 32, 18, 3], phase: "Solid", melt: 304, boil: 1473, dens: "11.85", eneg: 1.62, ion: 589, rad: 156,
    ox: "+1, +3", disc: "William Crookes", year: "1861", loc: "UK",
    etym: "Greek 'thallos' (green twig/shoot, for its bright green spectral emission line)",
    uses: ["Myocardial cardiac perfusion stress testing (Thallium-201 chloride radiotracer)", "Specialized infrared optical transmitting lenses (KRS-5 glass)", "High-temperature thallium-barium-calcium cuprate (TBCCO) superconductors", "Historically in rat poisons (banned due to extreme human toxicity)"],
    exam: "Notorious poison ('the poisoner's poison' / 'inheritance powder') causing hair loss (alopecia) and peripheral neuropathy. Chemically mimics K⁺ ion, disrupting sodium-potassium pumps.", radActive: false },

  { z: 82, s: "Pb", n: "Lead", mass: 207.2, cat: "post-transition-metal", catName: "Post-Transition Metal", grp: 14, per: 6, blk: "p",
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", shells: [2, 8, 18, 32, 18, 4], phase: "Solid", melt: 327.46, boil: 1749, dens: "11.34", eneg: 2.33, ion: 716, rad: 154,
    ox: "+2, +4", disc: "Prehistoric", year: "Ancient", loc: "Near East",
    etym: "Old English 'lead'; symbol Pb from Latin 'Plumbum' (lead weight / water pipes, root of plumbing)",
    uses: ["Lead-acid vehicle SLI starter batteries and telecom backup power", "Radiation shielding for medical X-ray suites and nuclear facilities", "Ballast keels in marine sailing vessels and scuba diving weights", "Perovskite solar cell crystal development"],
    exam: "End product of natural radioactive decay series (U-238 decays to stable Pb-206; Th-232 to Pb-208). Potent cumulative neurotoxin (plumbism) causing cognitive decline, anemia (basophilic stippling), and hypertension.", radActive: false },

  { z: 83, s: "Bi", n: "Bismuth", mass: 208.98, cat: "post-transition-metal", catName: "Post-Transition Metal", grp: 15, per: 6, blk: "p",
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", shells: [2, 8, 18, 32, 18, 5], phase: "Solid", melt: 271.4, boil: 1564, dens: "9.78", eneg: 2.02, ion: 703, rad: 143,
    ox: "+3, +5", disc: "Claude François Geoffroy", year: "1753", loc: "France",
    etym: "German 'Wismut' / 'weisse Masse' (white mass)",
    uses: ["Bismuth subsalicylate (Pepto-Bismol) for heartburn, indigestion, and traveler's diarrhea", "Non-toxic lead substitute in plumbing solder and shotgun pellets", "Automatic fire sprinkler head low-melting fusible alloys (Wood's metal)", "Pearlescent cosmetic pigment (bismuth oxychloride BiOCl)"],
    exam: "Heaviest element historically considered stable; in 2003 proven to undergo alpha decay with an unimaginably long half-life of 2 × 10¹⁹ years (over a billion times the age of the universe). Expands upon freezing like water.", radActive: false },

  { z: 84, s: "Po", n: "Polonium", mass: 209, cat: "post-transition-metal", catName: "Post-Transition Metal", grp: 16, per: 6, blk: "p",
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", shells: [2, 8, 18, 32, 18, 6], phase: "Solid", melt: 254, boil: 962, dens: "9.196", eneg: 2.0, ion: 812, rad: 135,
    ox: "+4, +2", disc: "Marie & Pierre Curie", year: "1898", loc: "France",
    etym: "Named in honor of Marie Curie's native homeland, Poland (Polonia)",
    uses: ["Radioisotope thermoelectric generators (RTG) and heat sources for lunar rovers (Lunokhod)", "Static eliminator ionizer brushes in textile manufacturing and photographic processing", "Neutron trigger initiator in early fission nuclear weapons (Po-Be source)"],
    exam: "First element discovered by Marie Curie. Lethal alpha emitter (Po-210 is 250,000 times more toxic than hydrogen cyanide by weight; famously used to assassinate Alexander Litvinenko in London in 2006).", radActive: true },

  { z: 85, s: "At", n: "Astatine", mass: 210, cat: "reactive-nonmetal", catName: "Reactive Nonmetal (Halogen)", grp: 17, per: 6, blk: "p",
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", shells: [2, 8, 18, 32, 18, 7], phase: "Solid", melt: 302, boil: 337, dens: "6.35", eneg: 2.2, ion: 890, rad: 127,
    ox: "+7, +5, +3, +1, -1", disc: "Corson, MacKenzie & Segrè", year: "1940", loc: "USA (Berkeley)",
    etym: "Greek 'astatos' (unstable)",
    uses: ["Targeted alpha particle cancer therapy (TAT) investigational trials (Astatine-211)"],
    exam: "Rarest naturally occurring chemical element in Earth's crust (less than 1 gram present on entire planet at any moment). Heaviest halogen.", radActive: true },

  { z: 86, s: "Rn", n: "Radon", mass: 222, cat: "noble-gas", catName: "Noble Gas", grp: 18, per: 6, blk: "p",
    config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", shells: [2, 8, 18, 32, 18, 8], phase: "Gas", melt: -71, boil: -61.7, dens: "0.00973", eneg: 2.2, ion: 1037, rad: 120,
    ox: "+2, 0", disc: "Friedrich Ernst Dorn", year: "1900", loc: "Germany",
    etym: "Named as an emanation derived from Radium",
    uses: ["Historical cancer brachytherapy radon seeds", "Hydrological groundwater tracing and fault line seismic monitoring"],
    exam: "Heaviest known gas at room temperature and the only radioactive gas. Decay daughter of Radium-226 (in uranium series). Second leading cause of lung cancer worldwide after tobacco smoking.", radActive: true },

  // Period 7: 87-92
  { z: 87, s: "Fr", n: "Francium", mass: 223, cat: "alkali-metal", catName: "Alkali Metal", grp: 1, per: 7, blk: "s",
    config: "[Rn] 7s¹", shells: [2, 8, 18, 32, 18, 8, 1], phase: "Solid", melt: 27, boil: 677, dens: "1.87", eneg: 0.79, ion: 380, rad: 348,
    ox: "+1", disc: "Marguerite Perey", year: "1939", loc: "France (Curie Institute)",
    etym: "Named in honor of France",
    uses: ["Atomic parity violation spectroscopy in fundamental quantum physics research"],
    exam: "Second rarest natural element in Earth's crust (only ~20-30 grams globally). Longest-lived isotope Fr-223 has a half-life of only 22 minutes. Discovered by Marguerite Perey, student of Marie Curie.", radActive: true },

  { z: 88, s: "Ra", n: "Radium", mass: 226, cat: "alkaline-earth", catName: "Alkaline Earth Metal", grp: 2, per: 7, blk: "s",
    config: "[Rn] 7s²", shells: [2, 8, 18, 32, 18, 8, 2], phase: "Solid", melt: 700, boil: 1737, dens: "5.5", eneg: 0.9, ion: 509, rad: 283,
    ox: "+2", disc: "Marie & Pierre Curie", year: "1898", loc: "France",
    etym: "Latin 'radius' (ray, beam of radiation)",
    uses: ["Radium-223 dichloride (Xofigo) targeted alpha-therapy for metastatic castration-resistant prostate cancer", "Historically in self-luminous watch dials ('Radium Girls')", "Historical cancer radiotherapy sources"],
    exam: "Emits faint blue luminescence in air due to radioluminescence. The tragic poisoning of 1920s luminous dial painters ('Radium Girls') established modern occupational health safety laws worldwide.", radActive: true },

  { z: 89, s: "Ac", n: "Actinium", mass: 227, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "d",
    config: "[Rn] 6d¹ 7s²", shells: [2, 8, 18, 32, 18, 9, 2], phase: "Solid", melt: 1050, boil: 3198, dens: "10.07", eneg: 1.1, ion: 499, rad: 260,
    ox: "+3", disc: "André-Louis Debierne", year: "1899", loc: "France",
    etym: "Greek 'aktis' / 'aktinos' (beam or ray)",
    uses: ["Actinium-225 targeted alpha emitter therapy (TAT) in precision oncology", "Neutron source for beryllium-actinium laboratory sources", "Thermoelectric radioisotope generator development"],
    exam: "Namesake prototype of the 15 Actinide series. Highly radioactive; glows with an eerie pale blue light in the dark because it ionizes surrounding air molecules.", radActive: true },

  { z: 90, s: "Th", n: "Thorium", mass: 232.04, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 6d² 7s²", shells: [2, 8, 18, 32, 18, 10, 2], phase: "Solid", melt: 1750, boil: 4788, dens: "11.72", eneg: 1.3, ion: 587, rad: 237,
    ox: "+4", disc: "Jöns Jacob Berzelius", year: "1829", loc: "Sweden",
    etym: "Named after Thor, Norse god of thunder",
    uses: ["Fertile nuclear fuel in Thorium Molten Salt Reactors (TMSR) & CANDU reactors", "Welsbach incandescent camping lantern mantles (ThO₂ emits bright white incandescence)", "High-end optical camera glass with high refractive index", "Tungsten-thorium TIG welding electrodes"],
    exam: "Three to four times more abundant in Earth's crust than uranium (extracted from monazite sand). Thorium-232 absorbs a neutron to breed fissile Uranium-233, making it the premier future proliferation-resistant clean nuclear power source.", radActive: true },

  { z: 91, s: "Pa", n: "Protactinium", mass: 231.04, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f² 6d¹ 7s²", shells: [2, 8, 18, 32, 20, 9, 2], phase: "Solid", melt: 1568, boil: 4027, dens: "15.37", eneg: 1.5, ion: 568, rad: 243,
    ox: "+5, +4", disc: "Hahn, Meitner, Soddy & Cranston", year: "1917", loc: "Germany / UK",
    etym: "Greek 'protos' (first/parent) + Actinium (decays into actinium)",
    uses: ["Uranium-thorium-protactinium radiometric dating of ocean marine sediments", "Nuclear physics research on transuranic decay"],
    exam: "Intermediate decay step between Uranium-235 and Actinium-227. Co-discovered by brilliant female physicist Lise Meitner and Otto Hahn.", radActive: true },

  { z: 92, s: "U", n: "Uranium", mass: 238.03, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f³ 6d¹ 7s²", shells: [2, 8, 18, 32, 21, 9, 2], phase: "Solid", melt: 1132.2, boil: 4131, dens: "19.05", eneg: 1.38, ion: 598, rad: 240,
    ox: "+6, +5, +4, +3", disc: "Martin Heinrich Klaproth", year: "1789", loc: "Germany",
    etym: "Named after newly discovered planet Uranus (Greek god of sky Ouranos)",
    uses: ["Nuclear power reactors (fissile U-235 fuel generating ~10% of world electricity)", "Depleted uranium (DU) armor-piercing kinetic penetrators and tank armor plating", "Medical radioisotope production (Molybdenum-99 for Technetium-99m)", "Historical Vaseline / canary yellow uranium glass fluorescence"],
    exam: "Heaviest primordial element found in significant quantities in nature. Natural uranium consists of 99.27% U-238, 0.72% fissile U-235, and trace U-234. Commercial nuclear fuel is enriched to 3-5% U-235.", radActive: true },

  // 93-100 (Transuranic)
  { z: 93, s: "Np", n: "Neptunium", mass: 237, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f⁴ 6d¹ 7s²", shells: [2, 8, 18, 32, 22, 9, 2], phase: "Solid", melt: 644, boil: 3902, dens: "20.45", eneg: 1.36, ion: 605, rad: 221,
    ox: "+5, +4, +3, +6", disc: "Edwin McMillan & Philip Abelson", year: "1940", loc: "USA (Berkeley)",
    etym: "Named after planet Neptune (next planet after Uranus)",
    uses: ["Precursor in nuclear reactors for synthesizing Plutonium-238 space RTG fuel", "High-energy neutron detection detectors"],
    exam: "First synthetic transuranic element produced by human nuclear transmutation (bombardment of U-238 with slow neutrons at Berkeley Cyclotron).", radActive: true },

  { z: 94, s: "Pu", n: "Plutonium", mass: 244, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f⁶ 7s²", shells: [2, 8, 18, 32, 24, 8, 2], phase: "Solid", melt: 640, boil: 3228, dens: "19.84", eneg: 1.28, ion: 585, rad: 243,
    ox: "+4, +3, +5, +6", disc: "Seaborg, McMillan, Kennedy & Wahl", year: "1940", loc: "USA (Berkeley)",
    etym: "Named after dwarf planet Pluto (continuing Uranus, Neptune sequence)",
    uses: ["Nuclear weapons fissile pit cores (Pu-239, used in 'Fat Man' bomb in 1945)", "Radioisotope Thermoelectric Generators (RTG) powering NASA Voyager 1 & 2, Curiosity, and Perseverance Mars rovers (Pu-238)", "Mixed Oxide (MOX) fuel in commercial nuclear power plants"],
    exam: "Critical fissile isotope Pu-239 has a bare critical mass of only ~10 kg (sphere size of a grapefruit). Exhibits 6 allotropic crystal phases with dramatic density changes between them.", radActive: true },

  { z: 95, s: "Am", n: "Americium", mass: 243, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f⁷ 7s²", shells: [2, 8, 18, 32, 25, 8, 2], phase: "Solid", melt: 1176, boil: 2607, dens: "13.67", eneg: 1.3, ion: 578, rad: 244,
    ox: "+3, +4", disc: "Glenn Seaborg & team", year: "1944", loc: "USA (Chicago)",
    etym: "Named after the Americas (analogous to Europium for Europe)",
    uses: ["Residential ionization smoke detectors (Am-241 alpha emitter, ~0.29 micrograms per unit)", "Industrial thickness gauging of foil, glass, and plastics", "Neutron moisture probes in agriculture and road construction"],
    exam: "Only synthetic transuranic element found in millions of ordinary households. Am-241 alpha radiation ionizes air in chamber; smoke disrupts the ionization current triggering alarm.", radActive: true },

  { z: 96, s: "Cm", n: "Curium", mass: 247, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f⁷ 6d¹ 7s²", shells: [2, 8, 18, 32, 25, 9, 2], phase: "Solid", melt: 1345, boil: 3110, dens: "13.51", eneg: 1.3, ion: 581, rad: 245,
    ox: "+3, +4", disc: "Glenn Seaborg & team", year: "1944", loc: "USA (Berkeley)",
    etym: "Named in honor of Marie and Pierre Curie",
    uses: ["Alpha Particle X-ray Spectrometer (APXS) on NASA Mars rovers (Sojourner, Spirit, Opportunity, Curiosity) to analyze Martian rock chemistry", "Power source for cardiac pacemakers and remote space instruments"],
    exam: "Glows with a purple light in the dark due to intense alpha decay heat (produces ~3 watts/gram of thermal energy).", radActive: true },

  { z: 97, s: "Bk", n: "Berkelium", mass: 247, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f⁹ 7s²", shells: [2, 8, 18, 32, 27, 8, 2], phase: "Solid", melt: 986, boil: 2627, dens: "14.78", eneg: 1.3, ion: 601, rad: 244,
    ox: "+3, +4", disc: "Thompson, Ghiorso & Seaborg", year: "1949", loc: "USA (Berkeley)",
    etym: "Named after the city of Berkeley, California",
    uses: ["Target material for synthesizing heavier superheavy elements (notably Tennessine-294 synthesized by bombarding Bk-249 with Ca-48)"],
    exam: "Synthesized in high flux isotope reactors (HFIR at Oak Ridge); global annual production is only several milligrams.", radActive: true },

  { z: 98, s: "Cf", n: "Californium", mass: 251, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f¹⁰ 7s²", shells: [2, 8, 18, 32, 28, 8, 2], phase: "Solid", melt: 900, boil: 1470, dens: "15.1", eneg: 1.3, ion: 608, rad: 245,
    ox: "+3", disc: "Thompson, Street, Ghiorso & Seaborg", year: "1950", loc: "USA (Berkeley)",
    etym: "Named after the State of California and University of California, Berkeley",
    uses: ["Neutron startup source for commercial nuclear power reactors", "Prompt Gamma Neutron Activation Analysis (PGNAA) in cement, coal, and mineral exploration", "Neutron radiography for inspecting aircraft fuselages for corrosion and cracks", "Brachytherapy for cervical and brain cancers"],
    exam: "One of the most expensive materials on Earth (~$27 million per gram). Californium-252 is an extraordinary spontaneous neutron emitter: 1 microgram emits 2.3 million neutrons per second.", radActive: true },

  { z: 99, s: "Es", n: "Einsteinium", mass: 252, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f¹¹ 7s²", shells: [2, 8, 18, 32, 29, 8, 2], phase: "Solid", melt: 860, boil: 996, dens: "8.84", eneg: 1.3, ion: 619, rad: 245,
    ox: "+3", disc: "Albert Ghiorso & team", year: "1952", loc: "USA (Ivy Mike nuclear test)",
    etym: "Named in honor of Albert Einstein",
    uses: ["Target material in cyclotron physics to synthesize Mendelevium (Z=101)"],
    exam: "Discovered in the radioactive debris and fallout of 'Ivy Mike', the world's first thermonuclear hydrogen bomb test conducted at Enewetak Atoll in 1952.", radActive: true },

  { z: 100, s: "Fm", n: "Fermium", mass: 257, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f¹² 7s²", shells: [2, 8, 18, 32, 30, 8, 2], phase: "Solid", melt: 1527, boil: null, dens: null, eneg: 1.3, ion: 627, rad: null,
    ox: "+3", disc: "Albert Ghiorso & team", year: "1952", loc: "USA (Ivy Mike nuclear test)",
    etym: "Named in honor of Italian physicist Enrico Fermi, creator of the first nuclear reactor",
    uses: ["Fundamental heavy nuclear fission physics investigations"],
    exam: "Heaviest element that can be synthesized via successive neutron capture in a nuclear reactor; beyond Fermium, only particle accelerator heavy-ion fusion can create heavier elements.", radActive: true },

  // 101-110
  { z: 101, s: "Md", n: "Mendelevium", mass: 258, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f¹³ 7s²", shells: [2, 8, 18, 32, 31, 8, 2], phase: "Solid", melt: 827, boil: null, dens: null, eneg: 1.3, ion: 635, rad: null,
    ox: "+3, +2", disc: "Ghiorso, Harvey, Choppin, Thompson & Seaborg", year: "1955", loc: "USA (Berkeley)",
    etym: "Named in honor of Dmitri Mendeleev, father of the Periodic Table",
    uses: ["Scientific research on actinide chemistry and nuclear shell stability"],
    exam: "First element ever synthesized 'one atom at a time'. Seaborg and team produced just 17 atoms in their initial discovery experiment by bombarding Es-253 with alpha particles.", radActive: true },

  { z: 102, s: "No", n: "Nobelium", mass: 259, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "f",
    config: "[Rn] 5f¹⁴ 7s²", shells: [2, 8, 18, 32, 32, 8, 2], phase: "Solid", melt: 827, boil: null, dens: null, eneg: 1.3, ion: 642, rad: null,
    ox: "+2, +3", disc: "Joint Institute for Nuclear Research (Dubna) & Berkeley", year: "1966", loc: "USSR / USA",
    etym: "Named in honor of Alfred Nobel, inventor of dynamite and founder of Nobel Prizes",
    uses: ["Nuclear structure studies"],
    exam: "Uniquely, the divalent +2 oxidation state (No²⁺) is more stable in aqueous solution than the trivalent +3 state, due to the fully filled 5f¹⁴ subshell configuration.", radActive: true },

  { z: 103, s: "Lr", n: "Lawrencium", mass: 266, cat: "actinide", catName: "Actinide", grp: 3, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 7s² 7p¹", shells: [2, 8, 18, 32, 32, 8, 3], phase: "Solid", melt: 1627, boil: null, dens: null, eneg: 1.3, ion: 470, rad: null,
    ox: "+3", disc: "Ghiorso, Sikkeland, Larsh & Latimer", year: "1961", loc: "USA (Berkeley)",
    etym: "Named in honor of Ernest O. Lawrence, inventor of the cyclotron particle accelerator",
    uses: ["Fundamental research on heavy element electronic configurations"],
    exam: "Final element of the Actinide series. Uniquely has an anomalous 7p¹ valence configuration rather than 6d¹, confirmed by relativistic quantum chemistry calculations.", radActive: true },

  { z: 104, s: "Rf", n: "Rutherfordium", mass: 267, cat: "transition-metal", catName: "Transition Metal", grp: 4, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d² 7s²", shells: [2, 8, 18, 32, 32, 10, 2], phase: "Solid", melt: 2100, boil: 5500, dens: "23.2", eneg: null, ion: 580, rad: null,
    ox: "+4", disc: "JINR (Dubna) & Lawrence Berkeley Lab", year: "1969", loc: "USSR / USA",
    etym: "Named in honor of Ernest Rutherford, father of nuclear physics",
    uses: ["Nuclear physics research into transactinide chemical properties"],
    exam: "First transactinide superheavy element (Z > 103). Marks the start of the 6d transition series.", radActive: true },

  { z: 105, s: "Db", n: "Dubnium", mass: 268, cat: "transition-metal", catName: "Transition Metal", grp: 5, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d³ 7s²", shells: [2, 8, 18, 32, 32, 11, 2], phase: "Solid", melt: null, boil: null, dens: "29.3", eneg: null, ion: null, rad: null,
    ox: "+5", disc: "JINR (Dubna) & Lawrence Berkeley Lab", year: "1970", loc: "USSR / USA",
    etym: "Named after the Russian nuclear research town of Dubna",
    uses: ["Superheavy element relativistic gas chromatography experiments"],
    exam: "Subject of a 30-year naming controversy ('Transfermium Wars') between US and Soviet scientists before official IUPAC adoption in 1997.", radActive: true },

  { z: 106, s: "Sg", n: "Seaborgium", mass: 269, cat: "transition-metal", catName: "Transition Metal", grp: 6, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d⁴ 7s²", shells: [2, 8, 18, 32, 32, 12, 2], phase: "Solid", melt: null, boil: null, dens: "35.0", eneg: null, ion: null, rad: null,
    ox: "+6", disc: "Lawrence Berkeley Laboratory", year: "1974", loc: "USA",
    etym: "Named in honor of American nuclear chemist Glenn T. Seaborg",
    uses: ["Research on Group 6 superheavy carbonyl complexes"],
    exam: "First element named after a living person at the time of official naming approval. Seaborg quipped that it was a greater honor than winning the Nobel Prize.", radActive: true },

  { z: 107, s: "Bh", n: "Bohrium", mass: 270, cat: "transition-metal", catName: "Transition Metal", grp: 7, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d⁵ 7s²", shells: [2, 8, 18, 32, 32, 13, 2], phase: "Solid", melt: null, boil: null, dens: "37.1", eneg: null, ion: null, rad: null,
    ox: "+7", disc: "GSI Helmholtzzentrum für Schwerionenforschung", year: "1981", loc: "Germany (Darmstadt)",
    etym: "Named in honor of Danish quantum physicist Niels Bohr",
    uses: ["Fundamental gas-phase chemistry research (forms volatile BhO₃Cl)"],
    exam: "Produced by cold fusion of Bismuth-209 target bombarded with Chromium-54 projectile ions at GSI Darmstadt.", radActive: true },

  { z: 108, s: "Hs", n: "Hassium", mass: 269, cat: "transition-metal", catName: "Transition Metal", grp: 8, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d⁶ 7s²", shells: [2, 8, 18, 32, 32, 14, 2], phase: "Solid", melt: null, boil: null, dens: "41.0", eneg: null, ion: null, rad: null,
    ox: "+8", disc: "GSI Darmstadt (Peter Armbruster & Gottfried Münzenberg)", year: "1984", loc: "Germany",
    etym: "Latin 'Hassia' (the German state of Hesse)",
    uses: ["Chemical studies of volatile hassium tetroxide (HsO₄)"],
    exam: "Predicted to be the densest element in the periodic table (~41 g/cm³), nearly double the density of osmium. Forms volatile HsO₄ analogous to OsO₄.", radActive: true },

  { z: 109, s: "Mt", n: "Meitnerium", mass: 278, cat: "transition-metal", catName: "Transition Metal", grp: 9, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d⁷ 7s²", shells: [2, 8, 18, 32, 32, 15, 2], phase: "Solid", melt: null, boil: null, dens: "37.4", eneg: null, ion: null, rad: null,
    ox: "+9, +3, +1", disc: "GSI Darmstadt", year: "1982", loc: "Germany",
    etym: "Named in honor of Austrian-Swedish physicist Lise Meitner, co-discoverer of nuclear fission",
    uses: ["Quantum chemical investigations of relativistic electronic effects"],
    exam: "Named exclusively in honor of a non-mythological female scientist (Curium was named for both Marie and Pierre Curie). Meitner never received the Nobel Prize despite explaining nuclear fission.", radActive: true },

  { z: 110, s: "Ds", n: "Darmstadtium", mass: 281, cat: "transition-metal", catName: "Transition Metal", grp: 10, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d⁸ 7s²", shells: [2, 8, 18, 32, 32, 16, 2], phase: "Solid", melt: null, boil: null, dens: "34.8", eneg: null, ion: null, rad: null,
    ox: "+6, +4, +2", disc: "GSI Darmstadt (Sigurd Hofmann & team)", year: "1994", loc: "Germany",
    etym: "Named after the German city of Darmstadt, home of GSI",
    uses: ["Heavy ion fusion synthesis experiments"],
    exam: "Produced by bombarding a Lead-208 target with Nickel-62 ions; only a few individual atoms have ever been synthesized.", radActive: true },

  // 111-118 (Superheavy completion)
  { z: 111, s: "Rg", n: "Roentgenium", mass: 282, cat: "transition-metal", catName: "Transition Metal", grp: 11, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d⁹ 7s²", shells: [2, 8, 18, 32, 32, 17, 2], phase: "Solid", melt: null, boil: null, dens: "28.7", eneg: null, ion: null, rad: null,
    ox: "+5, +3, -1", disc: "GSI Darmstadt", year: "1994", loc: "Germany",
    etym: "Named in honor of Wilhelm Röntgen, discoverer of X-rays",
    uses: ["Studies of relativistic effects on coinage metal chemistry"],
    exam: "Heavy homologue of copper, silver, and gold. Relativistic quantum effects cause strong contraction of its 7s orbital.", radActive: true },

  { z: 112, s: "Cn", n: "Copernicium", mass: 285, cat: "transition-metal", catName: "Transition Metal", grp: 12, per: 7, blk: "d",
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", shells: [2, 8, 18, 32, 32, 18, 2], phase: "Liquid", melt: 10, boil: 67, dens: "14.0", eneg: null, ion: 1155, rad: null,
    ox: "+2, +4", disc: "GSI Darmstadt", year: "1996", loc: "Germany",
    etym: "Named in honor of astronomer Nicolaus Copernicus, founder of heliocentrism",
    uses: ["Adsorption thermochromatography experiments on noble metal surfaces"],
    exam: "Due to relativistic stabilization of the 7s² shell, Copernicium behaves chemically like a volatile noble-gas-like metal and is predicted to be a volatile liquid or gas at room temperature.", radActive: true },

  { z: 113, s: "Nh", n: "Nihonium", mass: 286, cat: "post-transition-metal", catName: "Post-Transition Metal", grp: 13, per: 7, blk: "p",
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", shells: [2, 8, 18, 32, 32, 18, 3], phase: "Solid", melt: 430, boil: 1130, dens: "16", eneg: null, ion: 705, rad: null,
    ox: "+1, +3", disc: "RIKEN (Kosuke Morita & team)", year: "2004", loc: "Japan",
    etym: "Japanese 'Nihon' (Japan, literally 'Land of the Rising Sun')",
    uses: ["First element discovered in an Asian country, used in nuclear structure physics"],
    exam: "First chemical element discovered in Asia. Synthesized at RIKEN accelerator by bombarding Bismuth-209 with Zinc-70 over 9 years of beam time.", radActive: true },

  { z: 114, s: "Fl", n: "Flerovium", mass: 289, cat: "post-transition-metal", catName: "Post-Transition Metal", grp: 14, per: 7, blk: "p",
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", shells: [2, 8, 18, 32, 32, 18, 4], phase: "Solid", melt: -73, boil: 107, dens: "9.928", eneg: null, ion: 824, rad: null,
    ox: "+2, +4", disc: "JINR (Dubna) & Lawrence Livermore National Lab", year: "1998", loc: "Russia / USA",
    etym: "Named in honor of Georgy Flyorov, founder of Dubna nuclear research lab",
    uses: ["Investigation of the predicted nuclear 'Island of Stability'"],
    exam: "Center of the predicted 'Island of Stability' around neutron magic number N=184. Relativistic effects close the 7p₁/₂ subshell, making Fl unusually volatile and chemically inert.", radActive: true },

  { z: 115, s: "Mc", n: "Moscovium", mass: 290, cat: "post-transition-metal", catName: "Post-Transition Metal", grp: 15, per: 7, blk: "p",
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", shells: [2, 8, 18, 32, 32, 18, 5], phase: "Solid", melt: 400, boil: 1100, dens: "13.5", eneg: null, ion: 538, rad: null,
    ox: "+1, +3", disc: "JINR (Dubna) & LLNL & Oak Ridge", year: "2003", loc: "Russia / USA",
    etym: "Named in honor of Moscow Oblast, ancient capital region of Russia",
    uses: ["Decay precursor for studying Nihonium and superheavy alpha cascades"],
    exam: "Synthesized by bombarding Americium-243 with Calcium-48 ions. Undergoes rapid alpha decay to Nihonium-286 in under a second.", radActive: true },

  { z: 116, s: "Lv", n: "Livermorium", mass: 293, cat: "post-transition-metal", catName: "Post-Transition Metal", grp: 16, per: 7, blk: "p",
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", shells: [2, 8, 18, 32, 32, 18, 6], phase: "Solid", melt: 435, boil: 800, dens: "12.9", eneg: null, ion: 664, rad: null,
    ox: "+2, +4", disc: "JINR (Dubna) & Lawrence Livermore National Lab", year: "2000", loc: "Russia / USA",
    etym: "Named in honor of the Lawrence Livermore National Laboratory in Livermore, California",
    uses: ["Superheavy nucleus alpha spectroscopy"],
    exam: "Synthesized by firing Calcium-48 ions at a Curium-248 target. Has a half-life of roughly 60 milliseconds.", radActive: true },

  { z: 117, s: "Ts", n: "Tennessine", mass: 294, cat: "reactive-nonmetal", catName: "Reactive Nonmetal (Halogen)", grp: 17, per: 7, blk: "p",
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", shells: [2, 8, 18, 32, 32, 18, 7], phase: "Solid", melt: 450, boil: 610, dens: "7.2", eneg: null, ion: 743, rad: null,
    ox: "+1, +3, +5, -1", disc: "JINR (Dubna), LLNL, Oak Ridge & Vanderbilt", year: "2010", loc: "Russia / USA",
    etym: "Named in honor of the State of Tennessee (Oak Ridge, Vanderbilt, UT Knoxville)",
    uses: ["Heavy element synthesis frontier research"],
    exam: "Second heaviest element known. Required a 22 milligram target of rare Berkelium-249 produced over 250 days at Oak Ridge High Flux Isotope Reactor.", radActive: true },

  { z: 118, s: "Og", n: "Oganesson", mass: 294, cat: "noble-gas", catName: "Noble Gas", grp: 18, per: 7, blk: "p",
    config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", shells: [2, 8, 18, 32, 32, 18, 8], phase: "Solid", melt: 50, boil: 80, dens: "5.0", eneg: null, ion: 860, rad: 152,
    ox: "+4, +2, 0", disc: "JINR (Dubna) & LLNL", year: "2002", loc: "Russia / USA",
    etym: "Named in honor of Russian-Armenian nuclear physicist Yuri Oganessian",
    uses: ["Theoretical exploration of the relativistic 'electron gas' and limits of the periodic table"],
    exam: "Heaviest chemical element currently known (Z=118, completing Period 7). Predicted to be a solid semiconductor rather than a gas due to relativistic electron smearing (spin-orbit splitting). Only living scientist with an element named after him in 2016.", radActive: true }
];

// Load elements 1-54 from build_periodic_database.js
const codePart1 = fs.readFileSync('scratch/build_periodic_database.js', 'utf8');
// Evaluate or parse elements array from codePart1
const elements1_54_match = codePart1.match(/const elements = \[([\s\S]*?)\];\s*console\.log/);
if (!elements1_54_match) {
  console.error("Failed to extract elements 1-54 from part 1");
  process.exit(1);
}

// Evaluate elements 1-54 safely
const elements1_54 = eval(`[${elements1_54_match[1]}]`);
console.log(`Loaded ${elements1_54.length} elements from part 1 (Z=1 to Z=${elements1_54[elements1_54.length - 1].z}).`);
console.log(`Have ${elements_55_118.length} elements in part 2 (Z=55 to Z=${elements_55_118[elements_55_118.length - 1].z}).`);

const allElements = [...elements1_54, ...elements_55_118];
console.log(`Total elements: ${allElements.length}`);

// Verify all 118 exist in sequence
for (let i = 1; i <= 118; i++) {
  const el = allElements.find(e => e.z === i);
  if (!el) {
    console.error(`Missing element Z=${i}`);
    process.exit(1);
  }
}
console.log("All 118 elements successfully verified!");

// Categories metadata with colors, light & dark text colors, descriptions
const CATEGORIES = {
  "alkali-metal": {
    name: "Alkali Metals",
    color: "#e11d48", // Rose / Red
    bgLight: "#ffe4e6",
    border: "#f43f5e",
    desc: "Group 1 highly reactive, soft, silvery metals with 1 valence electron. React violently with water to form alkaline hydroxides and hydrogen gas."
  },
  "alkaline-earth": {
    name: "Alkaline Earth Metals",
    color: "#ea580c", // Orange
    bgLight: "#ffedd5",
    border: "#f97316",
    desc: "Group 2 shiny, silvery-white reactive metals with 2 valence electrons. Form basic oxides and alkaline solutions with water."
  },
  "transition-metal": {
    name: "Transition Metals",
    color: "#2563eb", // Blue
    bgLight: "#dbeafe",
    border: "#3b82f6",
    desc: "Groups 3-12 d-block metals characterized by high tensile strength, high melting points, variable oxidation states, and colored catalytic coordination complexes."
  },
  "post-transition-metal": {
    name: "Post-Transition Metals",
    color: "#0891b2", // Cyan / Teal
    bgLight: "#cffafe",
    border: "#06b6d4",
    desc: "Metals located between transition metals and metalloids in the p-block. Softer with lower melting points and higher electronegativities than transition metals."
  },
  "metalloid": {
    name: "Metalloids (Semimetals)",
    color: "#059669", // Emerald
    bgLight: "#d1fae5",
    border: "#10b981",
    desc: "Elements along the dividing line between metals and nonmetals with intermediate properties. Crucial semiconductors in modern microelectronics."
  },
  "reactive-nonmetal": {
    name: "Reactive Nonmetals",
    color: "#7c3aed", // Violet / Purple
    bgLight: "#ede9fe",
    border: "#8b5cf6",
    desc: "Highly electronegative nonmetals (including halogens, oxygen, nitrogen, carbon) that readily gain electrons or share them in covalent bonds."
  },
  "noble-gas": {
    name: "Noble Gases",
    color: "#4f46e5", // Indigo
    bgLight: "#e0e7ff",
    border: "#6366f1",
    desc: "Group 18 odorless, colorless, monatomic gases with completely filled valence electron shells (octet/duplet). Extremely low chemical reactivity."
  },
  "lanthanide": {
    name: "Lanthanides (Rare Earths)",
    color: "#d97706", // Amber
    bgLight: "#fef3c7",
    border: "#f59e0b",
    desc: "15 f-block elements (Z=57-71) characterized by filling the 4f subshell. Essential for high-power permanent magnets, lasers, and optical electronics."
  },
  "actinide": {
    name: "Actinides",
    color: "#db2777", // Pink / Magenta
    bgLight: "#fce7f3",
    border: "#ec4899",
    desc: "15 f-block radioactive elements (Z=89-103) characterized by filling the 5f subshell. Includes uranium and plutonium, key to nuclear power and atomic medicine."
  }
};

// Periodic Trends Metadata
const PERIODIC_TRENDS = {
  eneg: {
    name: "Electronegativity (Pauling)",
    unit: "Pauling Scale",
    desc: "The tendency of an atom to attract shared electrons in a chemical bond. Increases across a period (left to right) and decreases down a group.",
    min: 0.7,
    max: 4.0,
    minColor: "#3b82f6",
    maxColor: "#ef4444"
  },
  rad: {
    name: "Atomic Radius",
    unit: "pm (Picometers)",
    desc: "The typical distance from the nucleus to the boundary of the surrounding cloud of electrons. Decreases across a period (due to increasing nuclear charge) and increases down a group.",
    min: 30,
    max: 300,
    minColor: "#10b981",
    maxColor: "#f59e0b"
  },
  ion: {
    name: "First Ionization Energy",
    unit: "kJ/mol",
    desc: "The energy required to remove the most loosely held electron from a gaseous atom. Increases across a period and decreases down a group.",
    min: 370,
    max: 2372,
    minColor: "#8b5cf6",
    maxColor: "#ec4899"
  },
  melt: {
    name: "Melting Point",
    unit: "°C (Celsius)",
    desc: "Temperature at which solid transitions to liquid at 1 atm. Peaks in d-block middle (Tungsten at 3422°C) due to maximum unpaired d-electrons.",
    min: -272,
    max: 3422,
    minColor: "#06b6d4",
    maxColor: "#dc2626"
  },
  dens: {
    name: "Density at STP",
    unit: "g/cm³",
    desc: "Mass per unit volume. Peaks in Period 6 platinum group metals (Osmium at 22.59 g/cm³, Iridium at 22.56 g/cm³).",
    min: 0.0001,
    max: 22.6,
    minColor: "#64748b",
    maxColor: "#d97706"
  }
};

// 12 High-Yield General Science / CSS / PMS MCQs
const PERIODIC_MCQS = [
  {
    id: 1,
    q: "Which chemical element has the highest electronegativity on the Pauling scale?",
    opts: ["Fluorine (F)", "Oxygen (O)", "Chlorine (Cl)", "Cesium (Cs)"],
    ans: 0,
    exp: "Fluorine (F, atomic number 9) has the highest electronegativity of all elements (3.98 ≈ 4.0 on the Pauling scale) due to its small atomic radius and high effective nuclear charge."
  },
  {
    id: 2,
    q: "Which metal is the densest naturally occurring element on Earth?",
    opts: ["Platinum (Pt)", "Gold (Au)", "Osmium (Os)", "Lead (Pb)"],
    ans: 2,
    exp: "Osmium (Os, Z=76) is the densest natural element with a density of 22.59 g/cm³, marginally exceeding Iridium (22.56 g/cm³). Gold is 19.3 g/cm³ and Lead is 11.34 g/cm³."
  },
  {
    id: 3,
    q: "Which two elements in the periodic table are liquids at standard temperature and pressure (25°C and 1 atm)?",
    opts: ["Mercury and Gallium", "Mercury and Bromine", "Bromine and Cesium", "Gallium and Francium"],
    ans: 1,
    exp: "Only two elements are liquids at STP (25°C): Mercury (Hg, metal) and Bromine (Br, nonmetal). Gallium and Cesium melt just above room temperature (29.8°C and 28.5°C respectively)."
  },
  {
    id: 4,
    q: "Which metal has the highest melting point of all metallic elements?",
    opts: ["Tantalum (Ta)", "Rhenium (Re)", "Tungsten (W)", "Osmium (Os)"],
    ans: 2,
    exp: "Tungsten (W, Wolfram, Z=74) has the highest melting point of all metals at 3,422°C (3,695 K), making it ideal for high-temperature incandescent filaments, rocket nozzles, and welding electrodes."
  },
  {
    id: 5,
    q: "Which element is the most abundant by mass in the Earth's crust?",
    opts: ["Silicon (Si)", "Aluminium (Al)", "Oxygen (O)", "Iron (Fe)"],
    ans: 2,
    exp: "Oxygen is the most abundant element in the Earth's crust (~46.6% by mass), followed by Silicon (~27.7%), Aluminium (~8.1%), and Iron (~5.0%). (Note: Iron is the most abundant element in the entire Earth by mass)."
  },
  {
    id: 6,
    q: "Which of the following is the lightest metal and has the lowest density among all solid elements?",
    opts: ["Lithium (Li)", "Sodium (Na)", "Potassium (K)", "Beryllium (Be)"],
    ans: 0,
    exp: "Lithium (Li, Z=3) has a density of only 0.534 g/cm³, roughly half that of water. It is the lightest metal and the least dense solid element at room temperature."
  },
  {
    id: 7,
    q: "Why is Helium preferred over Hydrogen in airships, blimps, and weather balloons despite having less lifting capacity?",
    opts: ["Helium is lighter than hydrogen", "Helium is non-flammable and chemically inert", "Helium is cheaper to manufacture", "Helium diffuses more slowly through fabrics"],
    ans: 1,
    exp: "Although hydrogen has roughly 8% greater lifting power, helium is an inert noble gas and completely non-flammable, avoiding catastrophic explosion hazards like the 1937 Hindenburg disaster."
  },
  {
    id: 8,
    q: "Which noble gas was the first to be synthesized into a true chemical compound (by Neil Bartlett in 1962)?",
    opts: ["Helium (He)", "Neon (Ne)", "Argon (Ar)", "Xenon (Xe)"],
    ans: 3,
    exp: "In 1962, British chemist Neil Bartlett synthesized xenon hexafluoroplatinate [XePtF₆], shattering the 60-year scientific dogma that noble gases were completely incapable of forming chemical bonds."
  },
  {
    id: 9,
    q: "Which radioisotope is used in household ionization smoke detectors?",
    opts: ["Cobalt-60", "Americium-241", "Carbon-14", "Cesium-137"],
    ans: 1,
    exp: "Americium-241 (Am-241) is an alpha emitter used in ionization smoke alarms. Alpha particles ionize air inside an ionization chamber; smoke entering the chamber absorbs alpha particles, dropping the current and sounding the alarm."
  },
  {
    id: 10,
    q: "What causes the 'Lanthanide Contraction' in the 6th period transition metals?",
    opts: ["Increase in principal quantum number", "Poor shielding of the nuclear charge by 4f electrons", "Relativistic mass increase of core electrons", "Excessive electron repulsion in 5d subshells"],
    ans: 1,
    exp: "The 4f electrons have poor nuclear shielding ability. As atomic number increases across the lanthanide series, the effective nuclear charge increases steadily, pulling outer electrons closer and making elements like Hafnium almost identical in atomic radius to Zirconium."
  },
  {
    id: 11,
    q: "Which element is named in honor of the father of the modern Periodic Table?",
    opts: ["Rutherfordium (Rf)", "Mendelevium (Md)", "Seaborgium (Sg)", "Bohrium (Bh)"],
    ans: 1,
    exp: "Element 101, Mendelevium (Md), was named by Glenn Seaborg and his team in 1955 in honor of Russian chemist Dmitri Mendeleev, who published the first recognized periodic table in 1869."
  },
  {
    id: 12,
    q: "Which element is the most electropositive (least electronegative) stable element in the periodic table?",
    opts: ["Francium (Fr)", "Cesium (Cs)", "Rubidium (Rb)", "Potassium (K)"],
    ans: 1,
    exp: "Cesium (Cs, Z=55) is the most electropositive and least electronegative stable element (0.79 Pauling). While Francium (Fr, Z=87) is theoretically lower, it is intensely radioactive and unstable."
  }
];

// Write the complete frontend/js/data_periodic_table.js file
const finalContent = `/**
 * Interactive Periodic Table of Elements Dataset
 * All 118 IUPAC Elements (Z = 1 to 118) + Periodic Trends + Category Metadata + 12 High-Yield MCQs
 * CSS / PMS / FPSC / PPSC / General Science & Technology Preparation Suite
 */

const PERIODIC_TABLE_DATA = {
  categories: ${JSON.stringify(CATEGORIES, null, 2)},
  trends: ${JSON.stringify(PERIODIC_TRENDS, null, 2)},
  mcqs: ${JSON.stringify(PERIODIC_MCQS, null, 2)},
  elements: ${JSON.stringify(allElements, null, 2)}
};

// Safe browser & Node.js export
if (typeof window !== 'undefined') {
  window.PERIODIC_TABLE_DATA = PERIODIC_TABLE_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PERIODIC_TABLE_DATA;
}
`;

fs.writeFileSync('frontend/js/data_periodic_table.js', finalContent, 'utf8');
console.log(`Successfully generated frontend/js/data_periodic_table.js! Size: ${(finalContent.length / 1024).toFixed(1)} KB`);
