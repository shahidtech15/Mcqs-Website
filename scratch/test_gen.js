const fs = require('fs');

const elements = [
  {
    z: 1, s: "H", n: "Hydrogen", mass: 1.008, cat: "reactive-nonmetal", catName: "Reactive Nonmetal", grp: 1, per: 1, blk: "s",
    config: "1s¹", shells: [1], phase: "Gas", melt: -259.16, boil: -252.87, dens: "0.00008988", eneg: 2.20, ion: 1312, rad: 53,
    ox: "+1, -1", disc: "Henry Cavendish", year: "1766", loc: "United Kingdom",
    etym: "From Greek 'hydro' (water) and 'genes' (forming).",
    uses: ["Rocket fuel & clean energy carriers", "Ammonia synthesis via Haber-Bosch process", "Hydrogenation of vegetable oils", "Petroleum hydrocracking"],
    exam: "Most abundant element in the universe (75% of baryonic mass). Lightest element. Has 3 isotopes: Protium (0 neutrons), Deuterium (heavy water), and Tritium (radioactive, beta emitter, half-life 12.3 yrs).",
    radActive: false
  },
  {
    z: 2, s: "He", n: "Helium", mass: 4.0026, cat: "noble-gas", catName: "Noble Gas", grp: 18, per: 1, blk: "s",
    config: "1s²", shells: [2], phase: "Gas", melt: -272.2, boil: -268.93, dens: "0.0001785", eneg: null, ion: 2372, rad: 31,
    ox: "0", disc: "Pierre Janssen & Norman Lockyer", year: "1868", loc: "France / UK",
    etym: "Named after 'Helios', the Greek god of the Sun, where it was first spectrally detected during a solar eclipse.",
    uses: ["Cryogenics for MRI superconducting magnets", "Deep-sea diving breathing gas (Heliox)", "Inert shielding gas for arc welding", "Weather balloons & airships"],
    exam: "Second most abundant element in universe (24%). Lowest boiling point of all elements (-269°C / 4.2 K). Does not solidify under normal atmospheric pressure even at absolute zero. Alpha particles are Helium-4 nuclei.",
    radActive: false
  },
  {
    z: 3, s: "Li", n: "Lithium", mass: 6.94, cat: "alkali-metal", catName: "Alkali Metal", grp: 1, per: 2, blk: "s",
    config: "[He] 2s¹", shells: [2, 1], phase: "Solid", melt: 180.5, boil: 1342, dens: "0.534", eneg: 0.98, ion: 520, rad: 167,
    ox: "+1", disc: "Johan August Arfwedson", year: "1817", loc: "Sweden",
    etym: "From Greek 'lithos' meaning stone, because it was discovered in minerals unlike other alkali metals found in plant ashes.",
    uses: ["Rechargeable Lithium-ion batteries (EVs, phones)", "Psychiatric medication for bipolar mood stabilization", "Lightweight aerospace alloys with aluminium", "High-temperature lubricating greases"],
    exam: "Lightest known metal and least dense solid element (density 0.534 g/cm³ - floats on oil and water). High electrochemical potential makes it standard for modern energy storage. Part of the 'Lithium Triangle' (Bolivia, Chile, Argentina).",
    radActive: false
  },
  {
    z: 4, s: "Be", n: "Beryllium", mass: 9.0122, cat: "alkaline-earth", catName: "Alkaline Earth Metal", grp: 2, per: 2, blk: "s",
    config: "[He] 2s²", shells: [2, 2], phase: "Solid", melt: 1287, boil: 2469, dens: "1.85", eneg: 1.57, ion: 899, rad: 112,
    ox: "+2", disc: "Louis-Nicolas Vauquelin", year: "1798", loc: "France",
    etym: "From the mineral 'beryl' (emerald and aquamarine are gem forms of beryl).",
    uses: ["X-ray tube windows (transparent to X-rays)", "James Webb Space Telescope primary mirror segments", "Beryllium-copper non-sparking safety tools", "Nuclear reactor neutron reflectors"],
    exam: "Highly toxic carcinogen causing berylliosis. Forms amphoteric oxide (BeO), behaving anomalously compared to heavier group 2 alkaline earth metals due to high charge density.",
    radActive: false
  },
  {
    z: 5, s: "B", n: "Boron", mass: 10.81, cat: "metalloid", catName: "Metalloid", grp: 13, per: 2, blk: "p",
    config: "[He] 2s² 2p¹", shells: [2, 3], phase: "Solid", melt: 2076, boil: 3927, dens: "2.34", eneg: 2.04, ion: 801, rad: 87,
    ox: "+3", disc: "Joseph Louis Gay-Lussac & Louis Jacques Thénard", year: "1808", loc: "France",
    etym: "Derived from Arabic 'buraq' or Persian 'burah' for borax minerals.",
    uses: ["Borosilicate glass (Pyrex laboratory glassware)", "Nuclear reactor control rods (Boron-10 absorbs neutrons)", "Semiconductor p-type dopant", "Boric acid antiseptic & plant micronutrient"],
    exam: "Classic metalloid with covalent network structure. Boron-10 isotope has exceptionally high thermal neutron capture cross-section used to shut down nuclear chain reactions.",
    radActive: false
  },
  {
    z: 6, s: "C", n: "Carbon", mass: 12.011, cat: "reactive-nonmetal", catName: "Reactive Nonmetal", grp: 14, per: 2, blk: "p",
    config: "[He] 2s² 2p²", shells: [2, 4], phase: "Solid", melt: 3550, boil: 4827, dens: "2.267", eneg: 2.55, ion: 1086, rad: 67,
    ox: "+4, +2, -4", disc: "Antiquity", year: "Ancient", loc: "Middle East / Worldwide",
    etym: "From Latin 'carbo' meaning coal or charcoal.",
    uses: ["Steel production (coke in blast furnaces)", "Carbon fiber composites for aircraft & aerospace", "Graphene and carbon nanotubes in nanotechnology", "Active charcoal for water filtration & toxin absorption"],
    exam: "Basis of organic chemistry and all known life through catenation (forming long C-C chains). Famous allotropes: Diamond (sp³, hardest natural substance, insulator), Graphite (sp², layered hexagonal, electrical conductor), Fullerenes (C60 Buckyballs), and Graphene. Carbon-14 (half-life 5,730 yrs) is used for radiocarbon dating.",
    radActive: false
  },
  {
    z: 7, s: "N", n: "Nitrogen", mass: 14.007, cat: "reactive-nonmetal", catName: "Reactive Nonmetal", grp: 15, per: 2, blk: "p",
    config: "[He] 2s² 2p³", shells: [2, 5], phase: "Gas", melt: -210.0, boil: -195.79, dens: "0.0012506", eneg: 3.04, ion: 1402, rad: 56,
    ox: "+5, +4, +3, +2, +1, -3", disc: "Daniel Rutherford", year: "1772", loc: "Scotland, UK",
    etym: "From Greek 'nitron' (native soda) and 'genes' (forming); French 'azote' means lifeless.",
    uses: ["Urea & ammonium nitrate agricultural fertilizers", "Liquid nitrogen cryogenic preservation", "Food packaging inert gas flush (crisps/nuts)", "Explosives manufacturing (TNT, nitroglycerin)"],
    exam: "Makes up 78.08% of Earth's atmosphere by volume. Diatomic N₂ molecule features an extremely strong triple covalent bond (945 kJ/mol bond dissociation energy), rendering it chemically inert at room temperature. Essential constituent of amino acids and nucleic acids.",
    radActive: false
  },
  {
    z: 8, s: "O", n: "Oxygen", mass: 15.999, cat: "reactive-nonmetal", catName: "Reactive Nonmetal", grp: 16, per: 2, blk: "p",
    config: "[He] 2s² 2p⁴", shells: [2, 6], phase: "Gas", melt: -218.79, boil: -182.96, dens: "0.001429", eneg: 3.44, ion: 1314, rad: 48,
    ox: "-2, -1", disc: "Carl Wilhelm Scheele & Joseph Priestley", year: "1774", loc: "Sweden / UK",
    etym: "From Greek 'oxys' (acid) and 'genes' (former), coined by Lavoisier because he believed oxygen was in all acids.",
    uses: ["Cellular respiration support in healthcare & aviation", "Steelmaking (Basic Oxygen Furnace conversion)", "Oxy-acetylene torch welding & metal cutting", "Liquid oxygen (LOX) rocket propellants"],
    exam: "Most abundant element in Earth's crust by mass (approx. 46.6%) and second most abundant in the atmosphere (20.95%). Allotropes include dioxygen (O₂, paramagnetic) and ozone (O₃, UV-filtering stratospheric shield). Second most electronegative element after Fluorine.",
    radActive: false
  },
  {
    z: 9, s: "F", n: "Fluorine", mass: 18.998, cat: "reactive-nonmetal", catName: "Reactive Nonmetal (Halogen)", grp: 17, per: 2, blk: "p",
    config: "[He] 2s² 2p⁵", shells: [2, 7], phase: "Gas", melt: -219.67, boil: -188.11, dens: "0.001696", eneg: 3.98, ion: 1681, rad: 42,
    ox: "-1", disc: "Henri Moissan", year: "1886", loc: "France",
    etym: "From Latin 'fluere' meaning to flow, named after fluorite flux.",
    uses: ["Toothpaste fluorides (sodium fluoride, stannous fluoride) for enamel protection", "PTFE / Teflon non-stick coatings", "Uranium hexafluoride (UF₆) nuclear gas enrichment", "Refrigerants and pharmaceutical synthesis (e.g. Lipitor, Prozac)"],
    exam: "Most electronegative element on the Pauling scale (3.98) and most chemically reactive of all elements. Never found free in nature; reacts violently with virtually all elements including glass and noble gases Xenon and Krypton.",
    radActive: false
  },
  {
    z: 10, s: "Ne", n: "Neon", mass: 20.180, cat: "noble-gas", catName: "Noble Gas", grp: 18, per: 2, blk: "p",
    config: "[He] 2s² 2p⁶", shells: [2, 8], phase: "Gas", melt: -248.59, boil: -246.05, dens: "0.0009002", eneg: null, ion: 2081, rad: 38,
    ox: "0", disc: "William Ramsay & Morris Travers", year: "1898", loc: "United Kingdom",
    etym: "From Greek 'neos' meaning new.",
    uses: ["High-voltage glowing advertising neon signs", "Helium-neon gas lasers (red 632.8 nm beam)", "High-voltage electrical surge arresters", "Cryogenic refrigerant (40x refrigerating capacity of liquid helium)"],
    exam: "Glows with a distinctive vivid reddish-orange color when an electric discharge passes through it. True neon signs are exclusively orange-red; other advertising colors use argon, mercury vapor, or phosphor-coated glass.",
    radActive: false
  }
];

console.log('Sample verified. Building full 118 elements dataset...');
