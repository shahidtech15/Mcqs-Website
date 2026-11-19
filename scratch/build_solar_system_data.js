const fs = require('fs');
const path = require('path');

const code = `/**
 * CSS PREP CENTRAL - EXPLORE THE SOLAR SYSTEM DATASET
 * Authoritative Astronomical & Planetary Science Repository
 * Sourced from NASA Planetary Fact Sheets, JPL Solar System Dynamics, ESA, and IAU Standards.
 * Specially curated for CSS/PMS General Science & Ability (Physical Sciences / Astronomy).
 */

(function (global) {
  'use strict';

  const CELESTIAL_BODIES = [
    {
      id: "sun",
      name: "The Sun",
      designation: "Sol (G-Type Main-Sequence Yellow Dwarf)",
      type: "Star",
      category: "star",
      orderFromSun: 0,
      symbol: "☉",
      color: "#f59e0b",
      glowColor: "rgba(245, 158, 11, 0.4)",
      
      // Dimensions & Physical Metrics
      diameterKm: 1392700,
      diameterEarthRatio: 109.2,
      massKg: "1.989 × 10³⁰ kg",
      massEarthRatio: 333000,
      densityGcm3: 1.41,
      gravityMs2: 274.0,
      gravityEarthRatio: 27.94, // 70 kg on Earth = 1,956 kg on Sun!
      escapeVelocityKms: 617.7,
      
      // Distance & Timing
      distFromSunAu: 0,
      distFromSunKm: 0,
      lightTimeToSun: "0 sec",
      rotationPeriod: "25.05 days (equator) to 34.4 days (poles)", // Differential rotation
      orbitalPeriodDays: 0,
      orbitalPeriodYears: "230 Million Years (Galactic Year around Milky Way)",
      axialTiltDeg: 7.25,
      
      // Atmosphere & Temperature
      atmosphereSummary: "Gaseous plasma: 73.4% Hydrogen (H₂), 25.0% Helium (He), 0.9% Oxygen, 0.3% Carbon, Neon, Iron.",
      surfacePressure: "Photosphere ~0.001 bar; Core exceeds 250 billion bar",
      meanTempC: 5500, // Photosphere
      tempRangeC: "5,500°C (Surface) to 15,000,000°C (Core); Corona up to 2,000,000°C",
      
      // Moons & Rings
      moonsCount: 8, // 8 major planets + dwarf planets
      majorMoonsList: "Gravitational host to 8 planets, 5 recognized dwarf planets, hundreds of thousands of asteroids, and trillions of comets.",
      rings: "None (Zodiacal dust cloud in ecliptic plane)",
      
      // Distinctive Features
      keyFeatures: [
        "Contains 99.86% of the entire Solar System's total mass.",
        "Generates energy via thermonuclear proton-proton chain fusion in its core, converting 600 million tons of hydrogen into helium every second.",
        "Experiences an 11-year solar magnetic cycle causing sunspot peaks, solar flares, and Coronal Mass Ejections (CMEs).",
        "Solar wind creates the heliosphere, shielding the solar system from high-energy galactic cosmic rays."
      ],
      
      // Key Space Missions
      spaceMissions: [
        { name: "Parker Solar Probe", agency: "NASA", year: 2018, status: "Active", desc: "First spacecraft to 'touch the Sun', flying through the solar corona at speeds exceeding 690,000 km/h." },
        { name: "SOHO", agency: "ESA / NASA", year: 1995, status: "Active", desc: "Solar and Heliospheric Observatory, continuously monitoring solar flares, space weather, and discovering over 4,000 sungrazing comets." },
        { name: "Solar Orbiter", agency: "ESA", year: 2020, status: "Active", desc: "Captures the closest images ever taken of the Sun's polar regions and solar 'campfires'." },
        { name: "Aditya-L1", agency: "ISRO", year: 2023, status: "Active", desc: "India's first dedicated solar observatory stationed at Sun-Earth Lagrange Point 1 (L1)." }
      ],
      
      examRelevance: "CSS General Science syllabus covers the Sun's core, radiative zone, convection zone, photosphere, chromosphere, and corona, plus the 11-year sunspot cycle and solar wind."
    },
    {
      id: "mercury",
      name: "Mercury",
      designation: "Hermes (Smallest Planet & Innermost)",
      type: "Terrestrial Planet",
      category: "terrestrial",
      orderFromSun: 1,
      symbol: "☿",
      color: "#94a3b8",
      glowColor: "rgba(148, 163, 184, 0.4)",
      
      diameterKm: 4879,
      diameterEarthRatio: 0.383,
      massKg: "3.301 × 10²³ kg",
      massEarthRatio: 0.055,
      densityGcm3: 5.43, // Second densest planet
      gravityMs2: 3.7,
      gravityEarthRatio: 0.38, // 70 kg = 26.6 kg
      escapeVelocityKms: 4.25,
      
      distFromSunAu: 0.387,
      distFromSunKm: 57900000,
      lightTimeToSun: "3.2 minutes",
      rotationPeriod: "58.65 Earth days",
      orbitalPeriodDays: 87.97,
      orbitalPeriodYears: "0.24 Earth years",
      axialTiltDeg: 0.034, // Smallest tilt in solar system
      
      atmosphereSummary: "Extremely thin exosphere created by solar wind: 42% Molecular Oxygen, 29% Sodium, 22% Hydrogen, 6% Helium, 0.5% Potassium.",
      surfacePressure: "Negligible (~10⁻¹⁴ bar, virtually a vacuum)",
      meanTempC: 167,
      tempRangeC: "-180°C (Night) to +430°C (Day) — greatest thermal swing in the Solar System",
      
      moonsCount: 0,
      majorMoonsList: "None. Mercury and Venus are the only two planets in the Solar System with zero natural satellites.",
      rings: "None",
      
      keyFeatures: [
        "Smallest planet in the solar system (only slightly larger than Earth's Moon).",
        "Caloris Basin is one of the largest impact basins in the solar system (1,550 km diameter).",
        "Locked in a unique 3:2 spin-orbit resonance: rotates three times on its axis for every two orbits around the Sun.",
        "Possesses a surprisingly large metallic iron core comprising about 85% of the planet's radius, generating a global magnetic field (~1% of Earth's)."
      ],
      
      spaceMissions: [
        { name: "Mariner 10", agency: "NASA", year: 1974, status: "Completed", desc: "First spacecraft to visit Mercury, performing 3 flybys and photographing ~45% of its cratered surface." },
        { name: "MESSENGER", agency: "NASA", year: 2004, status: "Completed (2011–2015)", desc: "First probe to orbit Mercury; discovered extensive water ice inside permanently shadowed polar craters." },
        { name: "BepiColombo", agency: "ESA / JAXA", year: 2018, status: "En Route (Arrival 2026)", desc: "Dual orbiter mission (Mercury Planetary Orbiter + Mercury Magnetospheric Orbiter) to map surface composition and magnetic field." }
      ],
      
      examRelevance: "High-yield FPSC/CSS question: Why Mercury has no atmosphere, its 3:2 spin-orbit resonance, extreme temperature fluctuations, and absence of moons."
    },
    {
      id: "venus",
      name: "Venus",
      designation: "Aphrodite (Earth's Toxic Twin)",
      type: "Terrestrial Planet",
      category: "terrestrial",
      orderFromSun: 2,
      symbol: "♀",
      color: "#eab308",
      glowColor: "rgba(234, 179, 8, 0.4)",
      
      diameterKm: 12104,
      diameterEarthRatio: 0.949,
      massKg: "4.867 × 10²⁴ kg",
      massEarthRatio: 0.815,
      densityGcm3: 5.24,
      gravityMs2: 8.87,
      gravityEarthRatio: 0.904, // 70 kg = 63.3 kg
      escapeVelocityKms: 10.36,
      
      distFromSunAu: 0.723,
      distFromSunKm: 108200000,
      lightTimeToSun: "6.0 minutes",
      rotationPeriod: "243.02 Earth days (Retrograde - spins clockwise!)",
      orbitalPeriodDays: 224.7,
      orbitalPeriodYears: "0.615 Earth years",
      axialTiltDeg: 177.36, // Inverted axis
      
      atmosphereSummary: "Dense, hyper-greenhouse atmosphere: 96.5% Carbon Dioxide (CO₂), 3.5% Nitrogen (N₂), with opaque clouds of concentrated Sulfuric Acid (H₂SO₄).",
      surfacePressure: "92 bar (92 times Earth sea level pressure, equivalent to 900 meters underwater)",
      meanTempC: 464,
      tempRangeC: "460°C to 475°C (Uniformly roasting day and night due to global atmospheric heat circulation)",
      
      moonsCount: 0,
      majorMoonsList: "None.",
      rings: "None",
      
      keyFeatures: [
        "Hottest planet in the Solar System, hotter even than Mercury despite being twice as far from the Sun.",
        "Day is longer than its year: takes 243 Earth days to rotate once, but only 224.7 Earth days to orbit the Sun.",
        "Retrograde rotation: rotates from east to west; the Sun rises in the west and sets in the east.",
        "Super-rotating upper atmosphere: sulfuric acid clouds encircle the planet every 4 Earth days at speeds over 360 km/h.",
        "Surface is covered in volcanic plains, rift valleys, and thousands of volcanoes (Maxwell Montes rises 11 km high)."
      ],
      
      spaceMissions: [
        { name: "Venera 7", agency: "Soviet Union", year: 1970, status: "Completed", desc: "First successful soft landing of a human spacecraft on another planet, surviving for 23 minutes on the scorching surface." },
        { name: "Magellan", agency: "NASA", year: 1989, status: "Completed (1990–1994)", desc: "Used Synthetic Aperture Radar (SAR) to map 98% of Venus's surface through its thick clouds at 100m resolution." },
        { name: "Akatsuki", agency: "JAXA", year: 2010, status: "Active", desc: "Japanese climate orbiter studying Venusian weather patterns and cloud super-rotation." },
        { name: "DAVINCI & VERITAS", agency: "NASA", year: 2029, status: "In Development", desc: "Twin future missions to probe atmospheric chemistry, noble gases, and high-resolution geophysical topography." }
      ],
      
      examRelevance: "Classic CSS General Science question: The Runaway Greenhouse Effect, Venus's retrograde rotation, atmospheric pressure, and why it is nicknamed the 'Morning Star' and 'Evening Star'."
    },
    {
      id: "earth",
      name: "Earth",
      designation: "Terra / Gaia (The Living Blue Planet)",
      type: "Terrestrial Planet",
      category: "terrestrial",
      orderFromSun: 3,
      symbol: "♁",
      color: "#0284c7",
      glowColor: "rgba(2, 132, 199, 0.4)",
      
      diameterKm: 12742,
      diameterEarthRatio: 1.0,
      massKg: "5.972 × 10²⁴ kg",
      massEarthRatio: 1.0,
      densityGcm3: 5.514, // Densest planet in the solar system
      gravityMs2: 9.807,
      gravityEarthRatio: 1.0, // Baseline: 70 kg = 70 kg
      escapeVelocityKms: 11.19,
      
      distFromSunAu: 1.0,
      distFromSunKm: 149600000,
      lightTimeToSun: "8 minutes 20 seconds",
      rotationPeriod: "23 hours 56 minutes 4 seconds (Sidereal Day)",
      orbitalPeriodDays: 365.256,
      orbitalPeriodYears: "1.0 Earth year",
      axialTiltDeg: 23.44, // Responsible for the four seasons
      
      atmosphereSummary: "Life-supporting atmosphere: 78.08% Nitrogen (N₂), 20.95% Oxygen (O₂), 0.93% Argon (Ar), 0.04% Carbon Dioxide (CO₂), with variable water vapor.",
      surfacePressure: "1.013 bar (1 atmosphere / 101.3 kPa at sea level)",
      meanTempC: 15,
      tempRangeC: "-89.2°C (Vostok Station, Antarctica) to +56.7°C (Furnace Creek, Death Valley)",
      
      moonsCount: 1,
      majorMoonsList: "The Moon (Luna): Diameter 3,474 km (1/4 Earth diameter, 5th largest moon in solar system). Causes ocean tides and stabilizes Earth's axial tilt.",
      rings: "None",
      
      keyFeatures: [
        "Only known planet with liquid water oceans covering 71% of its surface and confirmed biological life.",
        "Geologically active with dynamic plate tectonics, recycling carbon and generating geological landforms.",
        "Powerful magnetosphere generated by the geodynamo effect in the liquid iron-nickel outer core, shielding life from harmful cosmic rays.",
        "Atmospheric layers: Troposphere (weather), Stratosphere (ozone layer), Mesosphere (burns meteors), Thermosphere (auroras), and Exosphere."
      ],
      
      spaceMissions: [
        { name: "Apollo 11", agency: "NASA", year: 1969, status: "Completed", desc: "First crewed lunar landing; Neil Armstrong and Buzz Aldrin stepped onto the Moon on July 20, 1969." },
        { name: "Hubble Space Telescope", agency: "NASA / ESA", year: 1990, status: "Active", desc: "Over 34 years in low-Earth orbit, determining the expansion rate of the universe and photographing deep cosmos." },
        { name: "International Space Station (ISS)", agency: "NASA / Roscosmos / ESA / JAXA / CSA", year: 1998, status: "Active", desc: "Continuously inhabited microgravity laboratory in low Earth orbit since November 2000." },
        { name: "James Webb Space Telescope (JWST)", agency: "NASA / ESA / CSA", year: 2021, status: "Active", desc: "Premier deep-space infrared observatory stationed at Sun-Earth L2 point, imaging first galaxies." }
      ],
      
      examRelevance: "Fundamental CSS General Science syllabus: Earth's atmospheric layers, geomagnetic field, seasons (solstices and equinoxes), plate tectonics, and greenhouse effect."
    },
    {
      id: "mars",
      name: "Mars",
      designation: "Ares (The Red Planet)",
      type: "Terrestrial Planet",
      category: "terrestrial",
      orderFromSun: 4,
      symbol: "♂",
      color: "#ef4444",
      glowColor: "rgba(239, 68, 68, 0.4)",
      
      diameterKm: 6779,
      diameterEarthRatio: 0.532,
      massKg: "6.417 × 10²³ kg",
      massEarthRatio: 0.107,
      densityGcm3: 3.93,
      gravityMs2: 3.72,
      gravityEarthRatio: 0.379, // 70 kg = 26.5 kg
      escapeVelocityKms: 5.03,
      
      distFromSunAu: 1.524,
      distFromSunKm: 227900000,
      lightTimeToSun: "12.6 minutes",
      rotationPeriod: "24 hours 37 minutes 22 seconds (1 Martian Sol)",
      orbitalPeriodDays: 686.98,
      orbitalPeriodYears: "1.88 Earth years",
      axialTiltDeg: 25.19, // Very similar to Earth's 23.44°
      
      atmosphereSummary: "Thin, unbreathable atmosphere: 95.3% Carbon Dioxide (CO₂), 2.6% Nitrogen (N₂), 1.9% Argon (Ar), 0.16% Oxygen (O₂), and trace water vapor.",
      surfacePressure: "0.006 bar (0.6% of Earth's sea-level pressure; water boils at body temperature!)",
      meanTempC: -63,
      tempRangeC: "-140°C (Polar winter) to +20°C (Equatorial summer midday)",
      
      moonsCount: 2,
      majorMoonsList: "Phobos ('Fear', 22 km wide) & Deimos ('Panic', 12 km wide) — heavily cratered, irregularly shaped captured asteroids. Phobos orbits closer to Mars than any other moon in the solar system and will crash into Mars or form a ring in ~50 million years.",
      rings: "None",
      
      keyFeatures: [
        "Olympus Mons: Largest volcano in the Solar System (21.9 km high, nearly 3 times higher than Mount Everest, base spans the size of Arizona).",
        "Valles Marineris: Grand canyon system stretching over 4,000 km long, 200 km wide, and up to 7 km deep.",
        "Red coloration comes from pervasive ferric oxide (rust) covering the soil and rocks.",
        "Polar ice caps consist of water ice topped by seasonal frozen carbon dioxide (dry ice).",
        "Past liquid water confirmed: dry river valleys, deltas (Jezero Crater), and hematite blueberries."
      ],
      
      spaceMissions: [
        { name: "Viking 1 & 2", agency: "NASA", year: 1975, status: "Completed (1976)", desc: "First spacecraft to successfully land on Mars and operate for years, conducting initial life-detection experiments." },
        { name: "Curiosity Rover", agency: "NASA", year: 2011, status: "Active (2012–Present)", desc: "Explored Gale Crater and Mount Sharp, proving Mars once had habitable ancient freshwater lake environments." },
        { name: "Perseverance & Ingenuity", agency: "NASA", year: 2020, status: "Active (2021–Present)", desc: "Exploring Jezero Crater delta for biosignatures; Ingenuity performed 72 powered atmospheric flights on another planet." },
        { name: "Hope Probe", agency: "UAE", year: 2020, status: "Active", desc: "First Arab planetary mission, providing comprehensive data on Martian atmospheric dynamics and weather loss." },
        { name: "Tianwen-1 & Zhurong", agency: "CNSA (China)", year: 2020, status: "Active/Completed", desc: "First mission by any nation to successfully orbit, land, and deploy a rover on Mars on its maiden attempt." }
      ],
      
      examRelevance: "High-yield CSS/PMS topic: Geological features of Mars (Olympus Mons, Valles Marineris), biosignature search, atmosphere composition, and space exploration races."
    },
    {
      id: "jupiter",
      name: "Jupiter",
      designation: "Zeus (King of the Planets & Gas Giant Titan)",
      type: "Gas Giant",
      category: "gas_giant",
      orderFromSun: 5,
      symbol: "♃",
      color: "#d97706",
      glowColor: "rgba(217, 119, 6, 0.4)",
      
      diameterKm: 139820,
      diameterEarthRatio: 10.97, // 11x Earth diameter (1,300 Earths fit inside)
      massKg: "1.898 × 10²⁷ kg",
      massEarthRatio: 317.8, // 2.5 times the mass of all other planets combined!
      densityGcm3: 1.33,
      gravityMs2: 24.79,
      gravityEarthRatio: 2.53, // 70 kg = 177 kg
      escapeVelocityKms: 59.5,
      
      distFromSunAu: 5.204,
      distFromSunKm: 778500000,
      lightTimeToSun: "43.2 minutes",
      rotationPeriod: "9 hours 55 minutes 30 seconds (Shortest day in the Solar System!)",
      orbitalPeriodDays: 4332.6,
      orbitalPeriodYears: "11.86 Earth years",
      axialTiltDeg: 3.13, // Minimal tilt, no seasonal variation
      
      atmosphereSummary: "Thick reducing atmosphere: 89.8% Molecular Hydrogen (H₂), 10.2% Helium (He), with trace methane, ammonia, and water vapor crystals.",
      surfacePressure: "No solid surface! Pressure increases smoothly into metallic liquid hydrogen (exceeding millions of bars).",
      meanTempC: -110,
      tempRangeC: "-145°C (Upper cloud tops) to +24,000°C (Deep core)",
      
      moonsCount: 95, // 95 recognized moons
      majorMoonsList: "The 4 Galilean Moons (Discovered by Galileo in 1610): Ganymede (Largest moon in solar system, bigger than Mercury), Callisto (Heavily cratered), Io (Over 400 active volcanoes fueled by tidal flexing), and Europa (Subsurface saltwater ocean harboring more water than all of Earth's oceans combined).",
      rings: "Faint, dark ring system discovered by Voyager 1 in 1979, composed of dust grains kicked off inner moons (Metis, Adrastea).",
      
      keyFeatures: [
        "The Great Red Spot: Gigantic anticyclonic storm larger than Earth, spinning counter-clockwise with winds over 430 km/h, observed for over 350 years.",
        "Shortest planetary day in the solar system (under 10 hours), creating significant equatorial bulge and banded jet streams.",
        "Colossal magnetic field: 20,000 times stronger than Earth's, trapping intense radiation belts.",
        "Acts as a 'cosmic vacuum cleaner' / gravitational shield, deflecting or capturing many incoming comets (e.g., Comet Shoemaker-Levy 9 impact in 1994)."
      ],
      
      spaceMissions: [
        { name: "Voyager 1 & 2", agency: "NASA", year: 1977, status: "Interstellar", desc: "Provided historic close-up flybys in 1979, discovering Jupiter's rings, active volcanism on Io, and cracks on Europa." },
        { name: "Galileo", agency: "NASA", year: 1989, status: "Completed (1995–2003)", desc: "First spacecraft to orbit Jupiter; dropped an atmospheric entry probe and provided evidence of Europa's subsurface ocean." },
        { name: "Juno", agency: "NASA", year: 2011, status: "Active (2016–Present)", desc: "Polar orbiter studying Jupiter's gravitational field, magnetic dynamo, atmospheric water content, and deep core." },
        { name: "JUICE", agency: "ESA", year: 2023, status: "En Route (Arrival 2031)", desc: "Jupiter Icy Moons Explorer, dedicated to in-depth studies of Ganymede, Callisto, and Europa." },
        { name: "Europa Clipper", agency: "NASA", year: 2024, status: "En Route (Arrival 2030)", desc: "Flagship mission launched October 2024 with 49 flybys to investigate whether Europa's subsurface ocean could support life." }
      ],
      
      examRelevance: "Essential CSS Astronomy concept: Galilean moons (especially Europa's ocean and Io's vulcanism), Great Red Spot, Jovian planetary structure, and Shoemaker-Levy 9 impact."
    },
    {
      id: "saturn",
      name: "Saturn",
      designation: "Cronus (The Ringed Jewel of the Solar System)",
      type: "Gas Giant",
      category: "gas_giant",
      orderFromSun: 6,
      symbol: "♄",
      color: "#eab308",
      glowColor: "rgba(234, 179, 8, 0.4)",
      
      diameterKm: 116460,
      diameterEarthRatio: 9.14,
      massKg: "5.683 × 10²⁶ kg",
      massEarthRatio: 95.16,
      densityGcm3: 0.687, // Less dense than water! Would float in an immense bathtub
      gravityMs2: 10.44,
      gravityEarthRatio: 1.065, // 70 kg = 74.5 kg
      escapeVelocityKms: 35.5,
      
      distFromSunAu: 9.582,
      distFromSunKm: 1434000000,
      lightTimeToSun: "1 hour 19 minutes",
      rotationPeriod: "10 hours 33 minutes",
      orbitalPeriodDays: 10759,
      orbitalPeriodYears: "29.45 Earth years",
      axialTiltDeg: 26.73,
      
      atmosphereSummary: "Reducing gas envelope: 96.3% Molecular Hydrogen (H₂), 3.25% Helium (He), with trace methane, ammonia, and ethane clouds.",
      surfacePressure: "No solid surface; transitions into supercritical fluid and liquid metallic hydrogen.",
      meanTempC: -140,
      tempRangeC: "-178°C (Cloud tops) to +11,700°C (Core)",
      
      moonsCount: 146, // Crowned planet with the most moons in the solar system!
      majorMoonsList: "Titan: 2nd largest moon in solar system, only moon with a dense nitrogen atmosphere and liquid methane/ethane lakes. Enceladus: Cryovolcanic icy moon with active geysers spraying water vapor from a global subsurface ocean into space. Mimas: 'Death Star' moon with huge Herschel crater. Iapetus: Distinct two-tone yin-yang coloration.",
      rings: "Spectacular ring system spanning up to 282,000 km across, yet astonishingly thin (only 10 to 30 meters thick on average). Composed of 99% pure water-ice particles ranging from micrometers to meters in size.",
      
      keyFeatures: [
        "Lowest density of any planet in the solar system (0.687 g/cm³); it is the only planet that would float in water.",
        "Most prominent and complex ring system in the solar system, with major divisions (Cassini Division, Encke Gap) maintained by shepherd moons.",
        "North Polar Hexagon: A persistent, geometric six-sided atmospheric jet stream pattern discovered by Voyager and imaged in detail by Cassini.",
        "Titan is the only body other than Earth with liquid lakes and rain on its surface (liquid methane and ethane)."
      ],
      
      spaceMissions: [
        { name: "Pioneer 11", agency: "NASA", year: 1979, status: "Completed", desc: "First spacecraft to fly past Saturn, passing within 21,000 km of the cloud tops and discovering the F ring." },
        { name: "Voyager 1 & 2", agency: "NASA", year: 1980, status: "Interstellar", desc: "Mapped complex ring structure, measured Titan's nitrogen atmosphere, and imaged dozens of new moons." },
        { name: "Cassini-Huygens", agency: "NASA / ESA / ASI", year: 1997, status: "Completed (2004–2017)", desc: "Flagship 13-year mission; deployed ESA's Huygens probe to land on Titan (2005); discovered Enceladus's cryovolcanic water plumes; concluded with 'Grand Finale' dive into Saturn." },
        { name: "Dragonfly", agency: "NASA", year: 2028, status: "In Development", desc: "Rotorcraft lander mission to fly across dozens of sites on Titan to sample prebiotic organic chemistry." }
      ],
      
      examRelevance: "CSS General Science questions: Density of Saturn vs water, composition of Saturn's rings, Cassini-Huygens mission discoveries, Titan's methane lakes, and Enceladus's geysers."
    },
    {
      id: "uranus",
      name: "Uranus",
      designation: "Ouranos (The Sideways Ice Giant)",
      type: "Ice Giant",
      category: "ice_giant",
      orderFromSun: 7,
      symbol: "♅",
      color: "#38bdf8",
      glowColor: "rgba(56, 189, 248, 0.4)",
      
      diameterKm: 50724,
      diameterEarthRatio: 3.98,
      massKg: "8.681 × 10²⁵ kg",
      massEarthRatio: 14.54,
      densityGcm3: 1.27,
      gravityMs2: 8.69,
      gravityEarthRatio: 0.886, // 70 kg = 62.0 kg
      escapeVelocityKms: 21.3,
      
      distFromSunAu: 19.218,
      distFromSunKm: 2871000000,
      lightTimeToSun: "2 hours 40 minutes",
      rotationPeriod: "17 hours 14 minutes (Retrograde)",
      orbitalPeriodDays: 30687,
      orbitalPeriodYears: "84.02 Earth years",
      axialTiltDeg: 97.77, // Rotates on its side!
      
      atmosphereSummary: "Icy atmosphere: 82.5% Molecular Hydrogen (H₂), 15.2% Helium (He), 2.3% Methane (CH₄). Methane absorbs red wavelengths, giving Uranus its distinctive cyan/aquamarine color.",
      surfacePressure: "No solid surface; transitions into a hot, dense slush of water, ammonia, and methane ices over a small rocky core.",
      meanTempC: -195,
      tempRangeC: "Down to -224°C (49 Kelvin) — holds the record for the coldest planetary atmosphere in the Solar System",
      
      moonsCount: 28, // 28 known moons
      majorMoonsList: "Named after characters from Shakespeare and Alexander Pope: Titania (largest, 1,578 km), Oberon, Umbriel, Ariel, and Miranda (home to Verona Rupes, the tallest cliff in the solar system at 20 km vertical drop).",
      rings: "System of 13 narrow, faint dark rings composed of boulder-sized dark organic particles.",
      
      keyFeatures: [
        "Rotates on its side with an axial tilt of 97.8°: rolls along its orbital path like a ball, likely caused by a cataclysmic collision with an Earth-sized protoplanet billions of years ago.",
        "Extreme seasons: Each pole receives 42 years of continuous sunlight, followed by 42 years of unbroken darkness.",
        "Coldest planetary atmosphere recorded in the solar system (-224°C / 49 K), emitting almost no internal heat compared to other giants.",
        "First planet discovered using a telescope (Sir William Herschel on March 13, 1781)."
      ],
      
      spaceMissions: [
        { name: "Voyager 2", agency: "NASA", year: 1977, status: "Completed (Jan 1986 flyby)", desc: "The ONLY spacecraft ever to visit Uranus, flying within 81,500 km of cloud tops, discovering 10 new moons, 2 new rings, and measuring its tilted, offset magnetic field." },
        { name: "Uranus Orbiter and Probe (UOP)", agency: "NASA", year: 2031, status: "Proposed Flagship", desc: "Ranked as the #1 priority in the 2023–2032 Planetary Science Decadal Survey to send a dedicated orbiter and atmospheric probe." }
      ],
      
      examRelevance: "Frequent MCQs topic: William Herschel's discovery in 1781, why Uranus is tilted at 98°, reasons for its cyan color (methane absorption), and coldest planetary temperature."
    },
    {
      id: "neptune",
      name: "Neptune",
      designation: "Poseidon (The Windy Blue Ice Giant)",
      type: "Ice Giant",
      category: "ice_giant",
      orderFromSun: 8,
      symbol: "♆",
      color: "#2563eb",
      glowColor: "rgba(37, 99, 235, 0.4)",
      
      diameterKm: 49244,
      diameterEarthRatio: 3.86,
      massKg: "1.024 × 10²⁶ kg",
      massEarthRatio: 17.15, // More massive than Uranus despite slightly smaller diameter
      densityGcm3: 1.638,
      gravityMs2: 11.15,
      gravityEarthRatio: 1.14, // 70 kg = 79.8 kg
      escapeVelocityKms: 23.5,
      
      distFromSunAu: 30.07,
      distFromSunKm: 4495000000,
      lightTimeToSun: "4 hours 10 minutes",
      rotationPeriod: "16 hours 6 minutes",
      orbitalPeriodDays: 60190,
      orbitalPeriodYears: "164.79 Earth years (Completed 1 full orbit since discovery in 2011)",
      axialTiltDeg: 28.32,
      
      atmosphereSummary: "Dynamic blue atmosphere: 80% Molecular Hydrogen (H₂), 19% Helium (He), 1.5% Methane (CH₄). An unidentified atmospheric trace component gives Neptune a more vivid, deeper cobalt blue than Uranus.",
      surfacePressure: "No solid surface; transitions into supercritical mantle of water, ammonia, and methane ices ('hot ice').",
      meanTempC: -201,
      tempRangeC: "-218°C (Cloud tops) to +7,000°C (Core)",
      
      moonsCount: 16,
      majorMoonsList: "Triton: 7th largest moon in solar system (2,707 km). Only large moon with a retrograde orbit (orbits opposite to Neptune's rotation, proving it was a captured Kuiper Belt dwarf planet). Has active cryovolcanic geysers erupting liquid nitrogen and nitrogen ice plains. Other moons: Proteus, Nereid.",
      rings: "System of 5 dark rings named Galle, Le Verrier, Lassell, Arago, and Adams, containing distinctive bright clumps known as the Liberté, Égalité, and Fraternité arcs.",
      
      keyFeatures: [
        "Fastest winds in the entire Solar System, clocked at supersonic speeds up to 2,100 km/h (1,300 mph).",
        "Discovered mathematically before it was seen: Urbain Le Verrier and John Couch Adams calculated its position based on gravitational perturbations in the orbit of Uranus; Johann Galle spotted it at Berlin Observatory in 1846.",
        "Featured the Great Dark Spot observed by Voyager 2, an Earth-sized anticyclonic storm that dissipated and reappeared elsewhere.",
        "Radiates 2.6 times more internal heat than it receives from the distant Sun, driving its violent atmospheric storms."
      ],
      
      spaceMissions: [
        { name: "Voyager 2", agency: "NASA", year: 1977, status: "Completed (Aug 1989 flyby)", desc: "The ONLY spacecraft to visit Neptune, skimming 4,950 km above its north pole, discovering 6 moons, 5 rings, and geysers on Triton." }
      ],
      
      examRelevance: "Classic FPSC/CSS exam questions: Mathematical discovery of Neptune (Le Verrier & Galle), Triton's retrograde orbit, fastest winds in the solar system, and internal heat generation."
    },
    {
      id: "pluto",
      name: "Pluto",
      designation: "134340 Pluto (Dwarf Planet of the Kuiper Belt)",
      type: "Dwarf Planet",
      category: "dwarf",
      orderFromSun: 9,
      symbol: "♇",
      color: "#ca8a04",
      glowColor: "rgba(202, 138, 4, 0.4)",
      
      diameterKm: 2376,
      diameterEarthRatio: 0.186, // Smaller than Earth's Moon (3,474 km)
      massKg: "1.303 × 10²² kg",
      massEarthRatio: 0.0022,
      densityGcm3: 1.85,
      gravityMs2: 0.62,
      gravityEarthRatio: 0.063, // 70 kg = 4.4 kg!
      escapeVelocityKms: 1.21,
      
      distFromSunAu: 39.48, // Elliptical: 29.7 AU (perihelion) to 49.3 AU (aphelion)
      distFromSunKm: 5906000000,
      lightTimeToSun: "5 hours 30 minutes",
      rotationPeriod: "6.39 Earth days (Retrograde, tidally locked to Charon)",
      orbitalPeriodDays: 90560,
      orbitalPeriodYears: "248.0 Earth years",
      axialTiltDeg: 122.53,
      
      atmosphereSummary: "Tenuous seasonal atmosphere: Nitrogen (N₂) with traces of Methane (CH₄) and Carbon Monoxide (CO). Freezes and collapses onto the surface as it moves away from the Sun.",
      surfacePressure: "1 Pa (10⁻⁵ bar / 100,000 times less than Earth)",
      meanTempC: -229,
      tempRangeC: "-240°C to -218°C",
      
      moonsCount: 5,
      majorMoonsList: "Charon: Massive moon (1,212 km diameter, more than half Pluto's size); Pluto and Charon form a binary dwarf planet system tidally locked face-to-face. Smaller moons: Styx, Nix, Kerberos, Hydra.",
      rings: "None detected",
      
      keyFeatures: [
        "Discovered by Clyde Tombaugh on February 18, 1930; considered the 9th planet until 2006.",
        "Reclassified by the International Astronomical Union (IAU) in Prague in August 2006 because it failed the 3rd criterion: it has not 'cleared the neighborhood around its orbit'.",
        "Tombaugh Regio: A prominent bright heart-shaped nitrogen and carbon monoxide ice glacier spanning 1,000 km (Sputnik Planitia).",
        "Water-ice mountains rising 3,500 meters high that do not deform under Pluto's deep freeze."
      ],
      
      spaceMissions: [
        { name: "New Horizons", agency: "NASA", year: 2006, status: "Active (Kuiper Belt)", desc: "Historic flyby on July 14, 2015, capturing the first high-resolution images of Pluto and Charon, then flew past Kuiper Belt object Arrokoth in 2019." }
      ],
      
      examRelevance: "High-yield CSS/PMS question: Why the IAU demoted Pluto to a Dwarf Planet in 2006 (the three planetary criteria) and New Horizons findings."
    },
    {
      id: "ceres",
      name: "Ceres",
      designation: "1 Ceres (Queen of the Asteroid Belt)",
      type: "Dwarf Planet",
      category: "dwarf",
      orderFromSun: 4.5,
      symbol: "⚳",
      color: "#78716c",
      glowColor: "rgba(120, 113, 108, 0.4)",
      
      diameterKm: 940,
      diameterEarthRatio: 0.074,
      massKg: "9.38 × 10²⁰ kg",
      massEarthRatio: 0.00015,
      densityGcm3: 2.16,
      gravityMs2: 0.28,
      gravityEarthRatio: 0.029, // 70 kg = 2.0 kg!
      escapeVelocityKms: 0.51,
      
      distFromSunAu: 2.77,
      distFromSunKm: 414000000,
      lightTimeToSun: "23 minutes",
      rotationPeriod: "9 hours 4 minutes",
      orbitalPeriodDays: 1682,
      orbitalPeriodYears: "4.6 Earth years",
      axialTiltDeg: 4.0,
      
      atmosphereSummary: "Transient, very weak water vapor exosphere produced by sublimating ice when exposed to solar radiation.",
      surfacePressure: "Practically zero",
      meanTempC: -105,
      tempRangeC: "-143°C to -38°C",
      
      moonsCount: 0,
      majorMoonsList: "None.",
      rings: "None",
      
      keyFeatures: [
        "Largest object in the Asteroid Belt between Mars and Jupiter, containing approximately 1/3 of the entire belt's mass.",
        "First asteroid ever discovered (by Italian astronomer Giuseppe Piazzi on January 1, 1801).",
        "Reclassified as a Dwarf Planet by the IAU in 2006 (only dwarf planet located inside the inner solar system).",
        "Occator Crater features mysterious bright spots (Cerealia Facula) composed of sodium carbonate salts left behind by evaporated briny water."
      ],
      
      spaceMissions: [
        { name: "Dawn", agency: "NASA", year: 2007, status: "Completed (2015–2018)", desc: "First spacecraft to orbit two separate extraterrestrial bodies (protoplanet Vesta and dwarf planet Ceres), discovering briny cryomagma deposits." }
      ],
      
      examRelevance: "FPSC/CSS astronomy questions regarding the Asteroid Belt location, Giuseppe Piazzi's discovery, and the Dawn mission."
    }
  ];

  // High-Yield General Science Astronomy Syllabus Concepts for CSS/PMS
  const ASTRONOMY_CONCEPTS = [
    {
      id: "kepler_laws",
      title: "Kepler's Three Laws of Planetary Motion",
      historicalContext: "Formulated by Johannes Kepler between 1609 and 1619 using Tycho Brahe's precision observational data, shattering the ancient Greek circular orbit dogma.",
      laws: [
        {
          name: "First Law: Law of Ellipses",
          statement: "The orbit of every planet is an ellipse with the Sun located at one of the two foci.",
          formula: "r = p / (1 + e · cos θ)",
          significance: "Planets do not move in perfect circles; eccentricity (e) defines how stretched the ellipse is (Earth e=0.0167, Mercury e=0.2056)."
        },
        {
          name: "Second Law: Law of Equal Areas",
          statement: "A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.",
          formula: "dA / dt = constant",
          significance: "Planets travel fastest at perihelion (closest to Sun) and slowest at aphelion (farthest from Sun), conserving angular momentum."
        },
        {
          name: "Third Law: Law of Harmonies",
          statement: "The square of the orbital period (T) of a planet is directly proportional to the cube of the semi-major axis (a) of its orbit.",
          formula: "T² = a³ (where T is in Earth years and a is in Astronomical Units AU)",
          significance: "Allows astronomers to calculate the exact distance of any planet from the Sun simply by observing its orbital time period."
        }
      ],
      examRelevance: "Core question in CSS General Science & Ability: Definition and mathematical derivation/statements of Kepler's 1st, 2nd, and 3rd laws."
    },
    {
      id: "sun_layers",
      title: "Structure and Anatomy of the Sun",
      historicalContext: "The Sun is a dynamic ball of glowing plasma driven by gravitational equilibrium and nuclear fusion.",
      laws: [
        {
          name: "The Core (0 to 0.25 R☉)",
          statement: "Temperature ~15,000,000°C. Density is 150 times that of water. Thermonuclear proton-proton fusion converts hydrogen into helium, releasing gamma rays and neutrinos.",
          formula: "4 ¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV",
          significance: "Source of all solar energy powering the solar system."
        },
        {
          name: "Radiative Zone & Convection Zone",
          statement: "Radiative Zone: Photons take 100,000+ years to randomly walk through dense plasma. Convection Zone: Boiling plasma bubbles up toward the surface in gigantic granules.",
          formula: "R = 0.25 R☉ to 1.0 R☉",
          significance: "Transports energy from core out to the observable surface."
        },
        {
          name: "Atmosphere: Photosphere, Chromosphere, Corona",
          statement: "Photosphere: Visible 5,500°C surface. Chromosphere: 400 km red layer visible during eclipses. Corona: Ultra-hot outer halo (1–3 million °C) transitioning into the solar wind.",
          formula: "T_corona >> T_photosphere (Coronal heating problem)",
          significance: "Explains auroras, solar storms, geomagnetic blackouts on Earth."
        }
      ],
      examRelevance: "Directly asked in CSS 2018, 2020, and 2023 General Science papers: 'Describe the interior and atmospheric layers of the Sun with diagrams'."
    },
    {
      id: "planetary_classification",
      title: "IAU Planetary Definition & Classification Criteria",
      historicalContext: "Adopted by the International Astronomical Union (IAU) Resolution 5A in Prague (August 2006) to define what constitutes a planet.",
      laws: [
        {
          name: "Criterion 1: Orbit the Sun",
          statement: "The celestial body must be in direct orbit around the Sun (not a moon orbiting another planet).",
          formula: "Direct heliocentric orbit",
          significance: "Excludes moons like Ganymede and Titan even though they are larger than Mercury."
        },
        {
          name: "Criterion 2: Hydrostatic Equilibrium (Round Shape)",
          statement: "The body must have sufficient mass for its self-gravity to overcome rigid body forces, pulling it into a nearly spherical shape.",
          formula: "M > ~10²⁰ kg (Rough threshold for roundness)",
          significance: "Distinguishes round planets/dwarf planets from potato-shaped asteroids like Eros."
        },
        {
          name: "Criterion 3: Cleared the Neighborhood",
          statement: "The body must have gravitationally cleared the neighborhood around its orbit, consuming or flinging away other large bodies.",
          formula: "Planetary Discriminant (µ >> 1)",
          significance: "Why Pluto was reclassified! Pluto shares its Kuiper Belt orbital region with thousands of other trans-Neptunian objects."
        }
      ],
      examRelevance: "High-yield CSS/PMS question: 'Explain the three criteria set by IAU for a celestial body to be called a planet and discuss why Pluto lost its planetary status'."
    }
  ];

  // High-Yield Practice Multiple Choice Questions
  const SOLAR_SYSTEM_MCQS = [
    {
      id: 1,
      question: "Which planet in the Solar System possesses the highest mean surface temperature, and why?",
      options: [
        "Mercury, because it is closest to the Sun",
        "Venus, due to a runaway greenhouse effect from a dense CO₂ atmosphere",
        "Mars, because of iron oxide heat absorption",
        "Jupiter, due to gravitational compression at its core"
      ],
      answer: 1,
      explanation: "Although Mercury is closer to the Sun, Venus is the hottest planet (~465°C) because its dense atmosphere of 96.5% Carbon Dioxide traps solar radiation in an extreme runaway greenhouse effect."
    },
    {
      id: 2,
      question: "According to Kepler's Second Law of Planetary Motion (Law of Equal Areas), when does a planet move at its maximum orbital velocity?",
      options: [
        "At Aphelion (farthest from the Sun)",
        "At Perihelion (closest to the Sun)",
        "During the vernal equinox",
        "Its speed remains perfectly constant along the orbit"
      ],
      answer: 1,
      explanation: "Kepler's Second Law dictates that the line connecting a planet to the Sun sweeps out equal areas in equal time intervals. To sweep an equal area near perihelion (short radius), the planet must travel faster."
    },
    {
      id: 3,
      question: "Which moon in the Solar System is the ONLY natural satellite known to possess a dense, substantial atmosphere and surface liquid lakes of methane?",
      options: [
        "Europa (Jupiter)",
        "Triton (Neptune)",
        "Titan (Saturn)",
        "Ganymede (Jupiter)"
      ],
      answer: 2,
      explanation: "Titan, Saturn's largest moon, has a nitrogen-rich atmosphere 1.5 times denser than Earth's sea-level pressure, and features lakes, rivers, and rain made of liquid methane and ethane."
    },
    {
      id: 4,
      question: "Why does Uranus have an unusual seasonal cycle where each pole experiences 42 years of continuous sunlight followed by 42 years of darkness?",
      options: [
        "Because of its 84-year elliptical orbit",
        "Because its rotational axis is tilted at approximately 97.8 degrees (rotating on its side)",
        "Because it has no internal heat source",
        "Because of tidal locking with its moon Titania"
      ],
      answer: 1,
      explanation: "Uranus has an extreme axial tilt of 97.77°, meaning it rotates virtually on its side. As it takes 84 Earth years to complete one orbit around the Sun, each pole points toward the Sun for half its orbit (42 years)."
    },
    {
      id: 5,
      question: "What was the definitive reason why the International Astronomical Union (IAU) reclassified Pluto as a Dwarf Planet in 2006?",
      options: [
        "It was discovered to have no natural moons",
        "It stopped orbiting the Sun",
        "It failed the third criterion: it has not cleared the neighborhood around its orbit",
        "Its surface is made mostly of nitrogen ice rather than rock"
      ],
      answer: 2,
      explanation: "Pluto satisfies the first two IAU criteria (orbits the Sun and is round due to hydrostatic equilibrium), but fails the third because its mass is far too small to have cleared other Kuiper Belt objects from its orbital zone."
    },
    {
      id: 6,
      question: "Which of the following planets has a density less than that of liquid water (0.687 g/cm³), meaning it would float if placed in a large enough ocean?",
      options: [
        "Jupiter",
        "Uranus",
        "Saturn",
        "Neptune"
      ],
      answer: 2,
      explanation: "Saturn is composed almost entirely of hydrogen and helium gas, giving it a mean density of only 0.687 g/cm³, which is lower than the density of water (1.0 g/cm³)."
    },
    {
      id: 7,
      question: "Which spacecraft became the FIRST human probe to successfully perform powered, controlled atmospheric flight on another planet in 2021?",
      options: [
        "Curiosity Rover",
        "Ingenuity Mars Helicopter",
        "Huygens Probe",
        "Viking 1 Lander"
      ],
      answer: 1,
      explanation: "NASA's Ingenuity Mars Helicopter, deployed alongside the Perseverance rover, performed the historic first powered flight in the thin atmosphere of Mars on April 19, 2021, completing 72 total flights."
    },
    {
      id: 8,
      question: "Which two planets in the Solar System exhibit Retrograde Rotation (spinning clockwise on their axis from east to west)?",
      options: [
        "Mercury and Mars",
        "Venus and Uranus",
        "Jupiter and Saturn",
        "Earth and Neptune"
      ],
      answer: 1,
      explanation: "While most planets rotate counter-clockwise (prograde), Venus (tilt 177°) and Uranus (tilt 98°) rotate clockwise in retrograde direction, so the Sun rises in the west and sets in the east on Venus."
    },
    {
      id: 9,
      question: "What is the name of the tallest known volcano and mountain in the Solar System, situated on Mars?",
      options: [
        "Mauna Kea",
        "Maxwell Montes",
        "Olympus Mons",
        "Verona Rupes"
      ],
      answer: 2,
      explanation: "Olympus Mons on Mars is a massive shield volcano standing approximately 21.9 km (72,000 ft) high, which is nearly three times the height of Mount Everest above sea level."
    },
    {
      id: 10,
      question: "How long does it take for sunlight traveling at the speed of light (~300,000 km/s) to reach the Earth?",
      options: [
        "3.2 minutes",
        "8 minutes and 20 seconds",
        "43 minutes",
        "Instantaneously"
      ],
      answer: 1,
      explanation: "The average distance from the Earth to the Sun is 1 Astronomical Unit (~149.6 million km). Dividing by the speed of light (299,792 km/s) yields ~499 seconds, or approximately 8 minutes and 20 seconds."
    }
  ];

  // Guess the Planet Riddles
  const PLANET_RIDDLES = [
    {
      id: "riddle_venus",
      planetId: "venus",
      clues: [
        "I am often called Earth's twin because our size and mass are nearly identical.",
        "My thick atmosphere of carbon dioxide and sulfuric acid causes an extreme runaway greenhouse effect.",
        "I am the hottest world in the solar system, and my day is longer than my year!",
        "Who am I?"
      ],
      hint: "Look for the brightest natural object in the night sky after the Moon, also known as the Morning Star."
    },
    {
      id: "riddle_saturn",
      planetId: "saturn",
      clues: [
        "I am the second largest planet, yet my density is lower than water.",
        "I have over 140 confirmed moons, including one with rivers of liquid methane.",
        "My brilliant, razor-thin rings of water ice span 280,000 km across.",
        "Who am I?"
      ],
      hint: "Known as the Jewel of the Solar System."
    },
    {
      id: "riddle_uranus",
      planetId: "uranus",
      clues: [
        "I was the first planet discovered using a modern telescope (by William Herschel in 1781).",
        "My atmospheric methane absorbs red light, giving me a serene cyan color.",
        "I roll along my orbit on my side at an extreme 98-degree axial tilt.",
        "Who am I?"
      ],
      hint: "Holds the record for the coldest recorded planetary atmosphere in the Solar System (-224°C)."
    },
    {
      id: "riddle_mercury",
      planetId: "mercury",
      clues: [
        "I am the smallest planet and speed through my year in just 88 Earth days.",
        "I have no moons and virtually no atmosphere to trap heat.",
        "My temperature swings from -180°C in the dark to +430°C in the blazing daylight.",
        "Who am I?"
      ],
      hint: "Named after the swift-footed Roman messenger god."
    },
    {
      id: "riddle_jupiter",
      planetId: "jupiter",
      clues: [
        "I am more massive than all the other planets in the Solar System combined.",
        "I spin so fast that my day lasts under 10 hours, creating a massive equatorial bulge.",
        "My Great Red Spot has been raging as a giant anticyclone for hundreds of years.",
        "Who am I?"
      ],
      hint: "King of the planets, orbited by Ganymede and Europa."
    }
  ];

  const SOLAR_SYSTEM_API = {
    getAllBodies: function () {
      return JSON.parse(JSON.stringify(CELESTIAL_BODIES));
    },
    getBodyById: function (id) {
      return CELESTIAL_BODIES.find(b => b.id === id) || null;
    },
    getPlanetsOnly: function () {
      return CELESTIAL_BODIES.filter(b => b.category === 'terrestrial' || b.category === 'gas_giant' || b.category === 'ice_giant');
    },
    getConcepts: function () {
      return JSON.parse(JSON.stringify(ASTRONOMY_CONCEPTS));
    },
    getMCQs: function () {
      return JSON.parse(JSON.stringify(SOLAR_SYSTEM_MCQS));
    },
    getRiddles: function () {
      return JSON.parse(JSON.stringify(PLANET_RIDDLES));
    },
    calculateWeight: function (weightOnEarthKg, bodyId) {
      const body = CELESTIAL_BODIES.find(b => b.id === bodyId);
      if (!body) return weightOnEarthKg;
      return (weightOnEarthKg * body.gravityEarthRatio).toFixed(1);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SOLAR_SYSTEM_API;
  }
  if (typeof window !== 'undefined') {
    window.SOLAR_SYSTEM_DATA = SOLAR_SYSTEM_API;
  }

})(typeof window !== 'undefined' ? window : this);
`;

const outputPath = path.join(__dirname, '..', 'frontend', 'js', 'data_solar_system.js');
fs.writeFileSync(outputPath, code.trim(), 'utf8');
console.log('Successfully wrote data_solar_system.js. Size:', fs.statSync(outputPath).size, 'bytes');
