/**
 * Technology Explorer Academic Dataset
 * Comprehensive Interactive Explainers for AI, Robotics, Nanotechnology,
 * Quantum Computing, Satellites & Space Tech, and Biotechnology.
 * Tailored for CSS, PMS, FPSC, PPSC General Science & Technology Preparation.
 */

const TECHNOLOGY_EXPLORER_DATA = {
  "kpis": {
    "domainsCount": "6 Pillars",
    "domainsDesc": "AI, Robotics, Nanotechnology, Quantum Computing, Satellites, Biotechnology",
    "aiComputeGrowth": "10x every 18 mos",
    "aiComputeDesc": "Growth in computational scale for training frontier AI models (transformer architectures)",
    "quantumAdvantage": "10,000x - 100,000x",
    "quantumDesc": "Theoretical exponential speedup for specialized polynomial algorithms (e.g. Shor's)",
    "nanoscaleRange": "1 to 100 nm",
    "nanoscaleDesc": "Dimension where quantum confinement effects dominate classical bulk material behavior",
    "orbitAltitudes": "160 to 35,786 km",
    "orbitDesc": "Altitude range from Low Earth Orbit (LEO) to Geostationary Earth Orbit (GEO)",
    "geneEditingPrecision": "Single Base",
    "geneEditingDesc": "Precision attained by modern CRISPR base and prime editing without double-strand breaks"
  },
  "domains": {
    "ai": {
      "id": "ai",
      "name": "Artificial Intelligence (AI)",
      "tagline": "Machine Learning, Deep Neural Networks, Generative AI & Autonomous Cognition",
      "icon": "fa-brain",
      "color": "#8b5cf6",
      "bgLight": "#ede9fe",
      "badge": "Cognitive Computing",
      "foundation": "Artificial Intelligence is the branch of computer science dedicated to developing systems capable of performing tasks that traditionally require human intelligence—such as visual perception, natural language understanding, reasoning, decision-making, and translation.",
      "taxonomies": [
        {
          "term": "Machine Learning (ML)",
          "desc": "Algorithms that learn patterns directly from empirical data without being explicitly rule-programmed. Subdivided into Supervised Learning (labeled data), Unsupervised Learning (clustering unlabeled data), and Reinforcement Learning (reward-penalty optimization via trial and error)."
        },
        {
          "term": "Deep Learning & Artificial Neural Networks (ANN)",
          "desc": "Multi-layered neural architectures inspired by the human biological brain. Key architectures include Convolutional Neural Networks (CNNs for computer vision), Recurrent Neural Networks (RNNs/LSTMs for sequential data), and Transformer Self-Attention models."
        },
        {
          "term": "Generative AI & Large Language Models (LLMs)",
          "desc": "Foundation models trained on massive multimodal datasets using transformer architectures (e.g., GPT-4, Gemini, Claude, LLaMA). Capable of synthesizing text, photorealistic imagery, audio, and functional software code from natural language prompts."
        },
        {
          "term": "Computer Vision & Natural Language Processing (NLP)",
          "desc": "Enables machines to extract semantic meaning from visual inputs (object detection, facial recognition, autonomous driving LiDAR/camera fusion) and human speech/text (machine translation, sentiment analysis, syntactic parsing)."
        },
        {
          "term": "Artificial General Intelligence (AGI)",
          "desc": "Theoretical threshold where an artificial system possesses cross-domain cognitive capability equal to or exceeding human intellect across all economically valuable tasks."
        }
      ],
      "milestones": [
        {
          "year": "1950",
          "event": "Alan Turing proposes the 'Turing Test' for machine intelligence in Computing Machinery and Intelligence."
        },
        {
          "year": "1956",
          "event": "Dartmouth Workshop coins the term 'Artificial Intelligence' (John McCarthy, Marvin Minsky, Claude Shannon)."
        },
        {
          "year": "1997",
          "event": "IBM Deep Blue defeats world chess champion Garry Kasparov, proving symbolic heuristic search capability."
        },
        {
          "year": "2012",
          "event": "AlexNet achieves breakthrough accuracy in ImageNet competition, initiating the modern Deep Learning revolution."
        },
        {
          "year": "2016",
          "event": "Google DeepMind's AlphaGo defeats 18-time world Go champion Lee Sedol using deep reinforcement learning."
        },
        {
          "year": "2017",
          "event": "Vaswani et al. publish 'Attention Is All You Need', introducing the Transformer architecture."
        },
        {
          "year": "2020",
          "event": "DeepMind AlphaFold 2 solves the 50-year-old protein folding problem, predicting 3D structures for 200M+ proteins."
        },
        {
          "year": "2022–2024",
          "event": "Generative AI explosion (ChatGPT, Gemini) and frontier multimodal models integrating vision, audio, and reasoning."
        }
      ],
      "applications": [
        "Healthcare: Automated radiological tumor detection, protein structure prediction for de novo drug discovery",
        "Autonomous Mobility: Level 4 autonomous vehicles (Waymo, Tesla FSD), intelligent traffic management",
        "Finance & FinTech: Algorithmic high-frequency trading, real-time credit scoring, fraud detection networks",
        "National Defense: Autonomous drone swarm coordination, satellite intelligence image parsing, predictive maintenance"
      ],
      "challenges": [
        "Hallucination & Explainability: 'Black box' problem where deep neural networks cannot provide verifiable mathematical causal reasoning",
        "Algorithmic Bias: Perpetuation and amplification of societal and demographic prejudices encoded in training corpora",
        "AI Safety & Alignment: Ensuring superintelligent systems act in concordance with human values and intentional constraints",
        "Labor Disruption & Deepfakes: Massive white-collar labor substitution and automated audiovisual disinformation undermining democratic processes"
      ],
      "examHotspot": "Frequently examined in CSS General Science & Technology and Current Affairs. High-yield topics: Differences between Supervised, Unsupervised, and Reinforcement Learning; Transformer Self-Attention mechanics; AI in national defense and cyberwarfare; Ethics of lethal autonomous weapons systems (LAWS); National AI Policy of Pakistan."
    },
    "robotics": {
      "id": "robotics",
      "name": "Robotics & Autonomous Systems",
      "tagline": "Kinematics, Humanoids, Surgical Robotics, UAV Drones & Cyber-Physical Automation",
      "icon": "fa-robot",
      "color": "#0284c7",
      "bgLight": "#e0f2fe",
      "badge": "Cyber-Physical Systems",
      "foundation": "Robotics is an interdisciplinary field integrating mechanical engineering, electrical engineering, computer science, and control theory to design, construct, and operate automated mechanical machines capable of sensing, actuating, and interacting with the physical environment.",
      "taxonomies": [
        {
          "term": "Sensors & Perception Subsystems",
          "desc": "Input devices converting physical stimuli into digital signals: Optical cameras, Light Detection and Ranging (LiDAR), Ultrasonic rangefinders, Inertial Measurement Units (IMUs), and tactile haptic force-torque sensors."
        },
        {
          "term": "Actuators & Kinematic Mechanisms",
          "desc": "Mechanical muscles delivering motion: Brushless DC electric motors, pneumatic air muscles, hydraulic piston cylinders (for extreme load capacity, e.g. Boston Dynamics Atlas), and shape memory alloy (SMA) soft robotics."
        },
        {
          "term": "Autonomous Unmanned Aerial Vehicles (UAVs / Drones)",
          "desc": "Fixed-wing and multirotor unmanned aircraft capable of autonomous waypoint navigation, real-time geospatial reconnaissance, precision agricultural spraying, and loitering munition delivery."
        },
        {
          "term": "Medical & Surgical Robotics",
          "desc": "Tele-operated master-slave surgical platforms (e.g., da Vinci Surgical System) featuring 7 degrees of freedom, tremor filtration, stereoscopic 3D magnification, and minimally invasive robotic laparoscopy."
        },
        {
          "term": "Humanoid Bipedal Robotics",
          "desc": "Robots engineered with human morphology (torso, arms, legs, dexterous five-fingered hands) designed to operate in human environments (e.g., Tesla Optimus, Boston Dynamics Atlas, Figure 01)."
        }
      ],
      "milestones": [
        {
          "year": "1920",
          "event": "Czech playwright Karel Čapek introduces the word 'Robot' (from Slavic 'robota' meaning forced labor) in R.U.R."
        },
        {
          "year": "1961",
          "event": "Unimate, the first industrial robot, deployed at a General Motors factory assembly line for die-casting."
        },
        {
          "year": "1997",
          "event": "NASA Sojourner rover successfully deploys on Mars, marking the dawn of extraterrestrial mobile planetary robotics."
        },
        {
          "year": "2000",
          "event": "Intuitive Surgical launches the da Vinci Surgical System, pioneering robotic-assisted minimally invasive surgery."
        },
        {
          "year": "2013",
          "event": "Boston Dynamics demonstrates Atlas, a bipedal humanoid achieving dynamic balance and parkour mobility."
        },
        {
          "year": "2020–2024",
          "event": "Commercialization of humanoid factory workers (Optimus, Agility Digit) and consumer delivery drone networks."
        }
      ],
      "applications": [
        "Advanced Manufacturing: Automotive welding, precision electronics pick-and-place, automated warehouse sorting (Amazon Kiva)",
        "Surgical Care: Robotic prostatectomy, orthopedic knee replacements, cardiothoracic micro-suturing",
        "Search & Rescue: Hazardous disaster exploration (Fukushima nuclear plant inspection, mine collapse rescue)",
        "Military & Security: Reconnaissance and strike UAVs (Bayraktar TB2, MQ-9 Reaper), bomb-disposal tracked EOD robots"
      ],
      "challenges": [
        "Battery Energy Density: Bipedal humanoids constrained to 2–4 hours of continuous operation due to high actuator electrical draw",
        "Dexterous Manipulation: Replicating the nuanced tactile sensitivity and non-rigid compliance of the human hand remains difficult",
        "Safety in Shared Human Workspaces: Risk of mechanical collision requiring force-limiting collaborative robots (Cobots)",
        "Legal & Civil Liability: Legal accountability attribution in fatal autonomous vehicular or robotic surgical accidents"
      ],
      "examHotspot": "High-yield examination topics: Degrees of Freedom (DoF) in robotic arms; Actuators vs Sensors; Role of Drones (UAVs) in modern hybrid warfare and precision agriculture; Drone regulations in Pakistan; Industrial automation impact on developing economies."
    },
    "nanotech": {
      "id": "nanotech",
      "name": "Nanotechnology & Advanced Materials",
      "tagline": "Quantum Confinement, Carbon Nanotubes, Graphene, Nanomedicine & Molecular Engineering",
      "icon": "fa-atom",
      "color": "#059669",
      "bgLight": "#d1fae5",
      "badge": "Molecular Engineering",
      "foundation": "Nanotechnology is the understanding, manipulation, and control of matter at dimensions between approximately 1 and 100 nanometers (nm). At this nanoscale, materials exhibit radically altered physical, chemical, optical, and electronic properties due to massive surface-area-to-volume ratios and quantum confinement effects.",
      "taxonomies": [
        {
          "term": "Quantum Confinement & Scale",
          "desc": "1 nanometer is one-billionth of a meter (10⁻⁹ m), roughly the width of 3 to 5 atoms or half the diameter of a DNA helix. Quantum confinement restricts electron motion, causing discrete energy levels and changing optical properties (e.g., gold nanoparticles appear red/ruby instead of yellow)."
        },
        {
          "term": "Fullerenes (Buckyballs, C₆₀)",
          "desc": "Spherical hollow carbon cages composed of 60 carbon atoms arranged in 12 pentagons and 20 hexagons (resembling a soccer ball). Discovered by Kroto, Smalley, and Curl (1996 Nobel Prize). Exceptional free-radical scavengers and lubricant additives."
        },
        {
          "term": "Carbon Nanotubes (CNTs)",
          "desc": "Cylindrical rolled tubes of graphene sheets (single-walled SWCNTs or multi-walled MWCNTs). Tensile strength is 100 times stronger than structural steel at one-sixth the weight, with extraordinary thermal and electrical conductivity."
        },
        {
          "term": "Graphene (2D Supermaterial)",
          "desc": "A single atom-thick planar sheet of carbon atoms bonded in a honeycomb crystal lattice. Isolated in 2004 by Geim and Novoselov (2010 Nobel Prize). 200 times stronger than steel, nearly 100% optically transparent, and the best conductor of electricity known."
        },
        {
          "term": "Nanomedicine & Targeted Drug Delivery",
          "desc": "Nanoparticles engineered to encapsulate cytotoxic cancer chemotherapy agents (e.g., liposomes, albumin-bound paclitaxel Abraxane), exploiting the Enhanced Permeability and Retention (EPR) effect to deliver drugs directly into tumor cells while sparing healthy tissue."
        }
      ],
      "milestones": [
        {
          "year": "1959",
          "event": "Richard Feynman delivers his prophetic lecture 'There's Plenty of Room at the Bottom' at Caltech, launching the theoretical foundation."
        },
        {
          "year": "1974",
          "event": "Norio Taniguchi coins the term 'Nanotechnology' to describe precision machining at the sub-micron scale."
        },
        {
          "year": "1981",
          "event": "Binnig and Rohrer invent the Scanning Tunneling Microscope (STM) at IBM Zurich, allowing scientists to 'see' and manipulate individual atoms."
        },
        {
          "year": "1985",
          "event": "Discovery of Buckminsterfullerene (Buckyball C₆₀) by Kroto, Curl, and Smalley."
        },
        {
          "year": "1991",
          "event": "Sumio Iijima synthesizes and characterizes Carbon Nanotubes (CNTs)."
        },
        {
          "year": "2004",
          "event": "Andre Geim and Konstantin Novoselov isolate single-layer Graphene using Scotch tape at the University of Manchester."
        },
        {
          "year": "2020",
          "event": "Lipid Nanoparticles (LNPs) prove pivotal to human survival as the protective delivery vehicle for mRNA COVID-19 vaccines (Pfizer/BioNTech, Moderna)."
        }
      ],
      "applications": [
        "Semiconductor Microchips: Extreme Ultraviolet (EUV) photolithography fabricating 3nm and 2nm transistor gate nodes (FinFET, Gate-All-Around GAA)",
        "Targeted Oncology: Magnetic hyperthermia (iron oxide nanoparticles heated by magnetic fields to kill cancer cells), liposomal drug delivery",
        "Water Desalination & Purification: Graphene oxide nanoporous membranes filtering salt ions and chemical toxins with near-zero hydraulic friction",
        "Aerospace & Energy: Carbon-fiber nanotube composite airframes (Boeing 787), silicon-graphene battery anodes expanding EV storage capacity by 40%"
      ],
      "challenges": [
        "Nanotoxicity & Bioaccumulation: Ultrafine nanoparticles easily cross the human blood-brain barrier and pulmonary alveoli with unknown long-term cytotoxic effects",
        "Scalable Manufacturing: High cost and technical difficulty of synthesizing defect-free single-crystal graphene at commercial square-kilometer scales",
        "Environmental Dispersal: Nanoparticles washing into aquatic ecosystems disrupting microbial nitrogen fixation and marine food chains",
        "Molecular Assembler Hazards: Sci-fi 'grey goo' runaway self-replication scenario, though physically improbable due to thermal Brownian motion"
      ],
      "examHotspot": "Consistently asked in CSS General Science: Definition of Nanotechnology (1-100 nm); Differences between Fullerenes, CNTs, and Graphene; Applications of Nanotechnology in Medicine and Water Purification; Richard Feynman's role; Enhanced Permeability and Retention (EPR) effect."
    },
    "quantum": {
      "id": "quantum",
      "name": "Quantum Computing & Information",
      "tagline": "Qubits, Superposition, Quantum Entanglement, Cryptographic Disruption & Supremacy",
      "icon": "fa-microchip",
      "color": "#f59e0b",
      "bgLight": "#fef3c7",
      "badge": "Quantum Mechanics",
      "foundation": "Quantum Computing leverages the counter-intuitive principles of quantum mechanics—namely Superposition, Entanglement, and Quantum Interference—to process information exponentially faster than classical Turing machines for specific mathematical problem spaces.",
      "taxonomies": [
        {
          "term": "Classical Bit vs Quantum Bit (Qubit)",
          "desc": "A classical bit can exist only as a deterministic 0 or 1. A qubit can exist simultaneously in a continuous linear combination of both states (|ψ⟩ = α|0⟩ + β|1⟩, where |α|² + |β|² = 1) until measured, represented geometrically on a spherical Bloch Sphere."
        },
        {
          "term": "Quantum Superposition",
          "desc": "The ability of a quantum state to exist simultaneously across multiple configurations. While n classical bits can represent only 1 of 2ⁿ numbers at a time, n qubits in superposition can evaluate all 2ⁿ states simultaneously."
        },
        {
          "term": "Quantum Entanglement ('Spooky Action at a Distance')",
          "desc": "A phenomenon where two or more quantum particles become intrinsically interconnected such that measuring the quantum state of one instantly dictates the state of the other, regardless of spatial distance (Einstein-Podolsky-Rosen paradox)."
        },
        {
          "term": "Quantum Algorithms: Shor's & Grover's",
          "desc": "Shor's Algorithm (1994) factors large prime integers in polynomial time O((log N)³), capable of shattering RSA, Diffie-Hellman, and ECC public-key cryptography. Grover's Algorithm provides quadratic speedup O(√N) for unstructured database searches."
        },
        {
          "term": "Physical Qubit Modalities",
          "desc": "Approaches to building physical qubits: Superconducting circuits with Josephson junctions (IBM, Google), Trapped Ion qubits (IonQ), Neutral Atom optical tweezers, Photonic qubits, and Topological Majorana fermions (Microsoft)."
        }
      ],
      "milestones": [
        {
          "year": "1981",
          "event": "Richard Feynman proposes that simulating quantum physics requires computers that operate on quantum mechanical principles."
        },
        {
          "year": "1994",
          "event": "Peter Shor formulates Shor's Algorithm, demonstrating that a quantum computer could break RSA encryption."
        },
        {
          "year": "1996",
          "event": "Lov Grover invents the quantum database search algorithm providing quadratic speedup."
        },
        {
          "year": "2019",
          "event": "Google claims 'Quantum Supremacy' with its 53-qubit Sycamore superconducting processor, solving a benchmark task in 200 seconds that would take supercomputers 10,000 years."
        },
        {
          "year": "2020",
          "event": "USTC (China) achieves photonic quantum advantage with Jiuzhang executing Gaussian boson sampling."
        },
        {
          "year": "2023–2024",
          "event": "Transition from Noisy Intermediate-Scale Quantum (NISQ) era toward fault-tolerant Quantum Error Correction (QEC) with logical qubits."
        }
      ],
      "applications": [
        "Cryptanalysis & Quantum Key Distribution (QKD): Intercept-proof quantum encrypted communication (BB84 protocol, Chinese Micius satellite)",
        "Molecular Drug Discovery: Exact quantum mechanical simulation of enzyme active sites and catalytic reactions that classical supercomputers cannot calculate",
        "Materials Science: Simulating room-temperature superconductors and Haber-Bosch nitrogenase catalysts to reduce fertilizer energy consumption",
        "Financial Portfolio Optimization: Quantum annealing for complex multi-variable combinatorial risk and logistics routing"
      ],
      "challenges": [
        "Quantum Decoherence: Delicate quantum states are easily destroyed by thermal fluctuations, electromagnetic noise, and vibrations within microseconds",
        "Cryogenic Infrastructure: Superconducting qubits require dilution refrigerators operating at ~15 millikelvin (-273.135°C), colder than deep space",
        "Post-Quantum Cryptography (PQC): Need for global migration to lattice-based and hash-based cryptography (NIST PQC standards) before 'Q-Day'",
        "Error Rates & Physical-to-Logical Ratio: Today's NISQ machines require 1,000+ noisy physical qubits to construct a single fault-tolerant logical qubit"
      ],
      "examHotspot": "Crucial for CSS/PMS General Science: Classical bit vs Qubit; Principles of Superposition and Entanglement; Shor's algorithm and threat to cybersecurity; Quantum Supremacy definition; Applications in medicine and defense; Difference between quantum computers and supercomputers."
    },
    "satellites": {
      "id": "satellites",
      "name": "Satellites, Space Tech & Orbital Mechanics",
      "tagline": "LEO, MEO, Geostationary Orbit, Remote Sensing, GPS GNSS, Starlink & Pakistan Space Program",
      "icon": "fa-satellite",
      "color": "#3b82f6",
      "bgLight": "#dbeafe",
      "badge": "Astrodynamics",
      "foundation": "Satellite technology involves placing artificial payloads into specific orbits around celestial bodies (predominantly Earth) to execute communication, scientific Earth observation, navigation, surveillance, and deep space exploration.",
      "taxonomies": [
        {
          "term": "Low Earth Orbit (LEO, 160 – 2,000 km)",
          "desc": "Orbital period is roughly 90 to 120 minutes with high orbital velocity (~7.8 km/s). Ideal for high-resolution Earth observation, human spaceflight (ISS, Tiangong), and low-latency broadband internet mega-constellations (Starlink, OneWeb)."
        },
        {
          "term": "Medium Earth Orbit (MEO, 2,000 – 35,786 km)",
          "desc": "Orbital periods range from 2 to 24 hours (commonly 12 hours). Primary home of Global Navigation Satellite Systems (GNSS): US GPS (~20,200 km), Russian GLONASS (~19,100 km), European Galileo (~23,222 km), and Chinese BeiDou."
        },
        {
          "term": "Geostationary Orbit (GEO, Exactly 35,786 km)",
          "desc": "Located over the Earth's equator. Orbital period matches Earth's sidereal rotation exactly (23 hours, 56 minutes, 4 seconds). The satellite appears stationary relative to a fixed ground station. Ideal for telecommunications, direct-to-home TV, and weather monitoring."
        },
        {
          "term": "Earth Observation & Payloads (Optical vs SAR)",
          "desc": "Optical sensors capture visible and infrared electromagnetic waves (limited by clouds and nighttime). Synthetic Aperture Radar (SAR) transmits microwave pulses and records echoes, penetrating clouds, smoke, and darkness to produce 24/7 radar imaging."
        },
        {
          "term": "Space Debris & Kessler Syndrome",
          "desc": "Millions of pieces of orbital debris traveling at orbital velocities (~28,000 km/h). Theoretical Kessler Syndrome: cascade collisions generating uncontrollable clouds of debris, permanently rendering specific orbital altitudes unusable."
        }
      ],
      "milestones": [
        {
          "year": "1957",
          "event": "USSR launches Sputnik 1, the world's first artificial satellite, inaugurating the Space Age."
        },
        {
          "year": "1969",
          "event": "Apollo 11 lands Neil Armstrong and Buzz Aldrin on the Moon."
        },
        {
          "year": "1990",
          "event": "Launch of the Hubble Space Telescope; Pakistan launches its first satellite, Badr-1, becoming the first Muslim nation with an orbital satellite."
        },
        {
          "year": "1998",
          "event": "Assembly of the International Space Station (ISS) begins."
        },
        {
          "year": "2018",
          "event": "Pakistan launches PRSS-1 (Pakistan Remote Sensing Satellite) and PakTES-1A on Chinese Long March 2C rocket."
        },
        {
          "year": "2024",
          "event": "Pakistan achieves historic space milestones: ICUBE-Q lunar orbiter launched aboard China's Chang'e-6 mission, and PakSAT-MM1 launched."
        }
      ],
      "applications": [
        "Global Positioning & Timing: Global Navigation Satellite Systems (GNSS) synchronizing cellular networks, financial transactions, and guided munitions",
        "Disaster Management & Agriculture: Remote sensing tracking agricultural crop yields, flood inundation mapping (vital during Pakistan 2022 floods), and forest fires",
        "Meteorological Forecasting: Continuous monitoring of cyclone tracks, atmospheric water vapor, and El Niño weather oscillations",
        "Global Broadband Connectivity: Low-latency LEO mega-constellations bridging the digital divide in remote deserts, mountains, and oceans"
      ],
      "challenges": [
        "Space Debris Mitigation: Over 36,000 tracked objects >10cm; need for active debris removal (harpoons, lasers, deorbit tether sails)",
        "Orbital Congestion & Frequency Spectrum: Scarcity of orbital slots in the GEO geostationary belt managed by the International Telecommunication Union (ITU)",
        "Weaponization of Space (ASATs): Kinetic anti-satellite missile tests creating massive fragmentation debris clouds and violating outer space peace",
        "Solar Superstorms: Coronal Mass Ejections (CMEs) inducing geomagnetic geomagnetically induced currents (GICs) that destroy satellite electronics and expand atmospheric drag"
      ],
      "examHotspot": "Extremely high yield for CSS General Science: Orbital classifications (LEO, MEO, GEO, Sun-Synchronous); Geostationary orbit altitude (35,786 km) and derivation; Remote sensing applications in flood management and agriculture; Pakistan Space Program (SUPARCO history, Badr-1, PRSS-1, PakSAT-1R, ICUBE-Q 2024 lunar mission, PakSAT-MM1); GPS working principles (trilateration)."
    },
    "biotech": {
      "id": "biotech",
      "name": "Biotechnology & Genetic Engineering",
      "tagline": "CRISPR-Cas9 Gene Editing, Recombinant DNA, mRNA Vaccines, Stem Cells & Cloning",
      "icon": "fa-dna",
      "color": "#ec4899",
      "bgLight": "#fce7f3",
      "badge": "Life Sciences",
      "foundation": "Biotechnology is the application of biological organisms, cells, or cellular components to develop technologies and therapeutics that improve human health, agricultural productivity, industrial processes, and environmental remediation.",
      "taxonomies": [
        {
          "term": "Recombinant DNA Technology (rDNA)",
          "desc": "Joining together DNA molecules from different biological species using restriction endonucleases ('molecular scissors') to cut DNA and DNA ligase ('molecular glue') to seal fragments into plasmid vectors, producing recombinant organisms (e.g., genetically modified E. coli producing human insulin since 1978)."
        },
        {
          "term": "CRISPR-Cas9 Gene Editing",
          "desc": "Adaptive bacterial immune mechanism adapted into a precision gene-editing tool by Emmanuelle Charpentier and Jennifer Doudna (2020 Nobel Prize). Uses a synthetic single-guide RNA (sgRNA) complementary to a target genomic sequence to direct the Cas9 endonuclease enzyme to make targeted double-strand breaks."
        },
        {
          "term": "Polymerase Chain Reaction (PCR)",
          "desc": "Invented by Kary Mullis in 1983 (1993 Nobel Prize). An in vitro molecular technique capable of amplifying a single copy of a specific DNA segment into millions of copies within hours using thermal cycling (Denaturation ~95°C, Primer Annealing ~55°C, Taq Polymerase Extension ~72°C)."
        },
        {
          "term": "mRNA Vaccine Technology",
          "desc": "Delivers synthetic messenger RNA encapsulated in lipid nanoparticles (LNPs) instructing host ribosomes to translate harmless viral antigen proteins (e.g. SARS-CoV-2 spike protein), triggering robust cellular and humoral immunity. Developed by Katalin Karikó and Drew Weissman (2023 Nobel Prize in Medicine)."
        },
        {
          "term": "Stem Cell Biology & Regenerative Medicine",
          "desc": "Undifferentiated cells characterized by self-renewal and potency: Totipotent (zygote), Pluripotent (embryonic stem cells), and Induced Pluripotent Stem Cells (iPSCs - adult somatic cells reprogrammed into an embryonic-like state using Yamanaka transcription factors Oct4, Sox2, Klf4, c-Myc - 2012 Nobel Prize)."
        }
      ],
      "milestones": [
        {
          "year": "1953",
          "event": "James Watson and Francis Crick decipher the double-helix structure of DNA using Rosalind Franklin's Photo 51"
        },
        {
          "year": "1972",
          "event": "Paul Berg creates the first recombinant DNA molecule; Herbert Boyer and Stanley Cohen clone genes in 1973."
        },
        {
          "year": "1978",
          "event": "Genentech synthesizes recombinant human insulin in E. coli bacteria, freeing diabetics from animal insulin."
        },
        {
          "year": "1983",
          "event": "Kary Mullis invents the Polymerase Chain Reaction (PCR), revolutionizing genetics, diagnostics, and forensics."
        },
        {
          "year": "1996",
          "event": "Dolly the Sheep is cloned at the Roslin Institute in Scotland via Somatic Cell Nuclear Transfer (SCNT)."
        },
        {
          "year": "2003",
          "event": "Human Genome Project (HGP) completes sequencing of the 3 billion base pairs of the human genome."
        },
        {
          "year": "2012",
          "event": "Charpentier and Doudna publish the CRISPR-Cas9 genome editing mechanism."
        },
        {
          "year": "2020–2023",
          "event": "Deployment of mRNA COVID-19 vaccines and first FDA approval of a CRISPR gene-editing medicine (Casgevy for sickle cell disease)."
        }
      ],
      "applications": [
        "Therapeutics & Gene Therapy: Casgevy CRISPR therapy curing sickle cell anemia and beta-thalassemia, CAR-T cell immunotherapy for leukemia",
        "Agricultural Biotechnology: Genetically Modified Organisms (GMOs): Bt Cotton producing endotoxins against bollworms, Golden Rice biofortified with beta-carotene (provitamin A)",
        "Bioremediation: Engineered bacteria degrading polycyclic aromatic hydrocarbons (oil spills) and digesting microplastics (PETase)",
        "Forensic Science: Short Tandem Repeat (STR) DNA fingerprinting resolving criminal identification and paternity determination"
      ],
      "challenges": [
        "Human Germline Editing: Ethical controversy surrounding inheritable genetic alterations in human embryos ('designer babies', 2018 He Jiankui twin scandal)",
        "Off-Target Cleavage Mutations: Unintended Cas9 cutting at non-target genomic sites causing dangerous oncogenic mutations",
        "Biosecurity & Gain-of-Function: Synthetic biology enabling de novo synthesis of eradicated or weaponized biological pathogens (smallpox, modified avian influenza)",
        "GMO Monopolization: Intellectual property patents over crop seeds creating economic dependency for smallholder farming communities in the Global South"
      ],
      "examHotspot": "Consistently asked across CSS/PMS General Science papers: Principle and steps of Recombinant DNA technology; Working mechanism of CRISPR-Cas9; PCR technique steps and role in molecular diagnostics; Differences between Totipotent, Pluripotent, and Induced Pluripotent Stem Cells; Dolly the Sheep cloning methodology (SCNT); Genetically modified crops in Pakistan (Bt Cotton)."
    }
  },
  "matrix": [
    {
      "tech": "Artificial Intelligence (AI)",
      "frontier": "Reasoning Models, AGI, Foundation Transformers",
      "hardware": "GPU/TPU clusters, High-Bandwidth Memory (HBM)",
      "leaders": "USA, China, UK, EU",
      "defenseImpact": "Autonomous drone swarms, algorithmic cyber warfare",
      "ethicalIssue": "Bias, white-collar labor displacement, AGI alignment",
      "color": "#8b5cf6"
    },
    {
      "tech": "Robotics & Autonomous Systems",
      "frontier": "General-Purpose Bipedal Humanoids, Cobots",
      "hardware": "Brushless motors, high-torque actuators, LiDAR",
      "leaders": "USA, Japan, Germany, China, South Korea",
      "defenseImpact": "Unmanned combat aerial vehicles (UCAVs), EOD robots",
      "ethicalIssue": "Lethal Autonomous Weapons Systems (LAWS) accountability",
      "color": "#0284c7"
    },
    {
      "tech": "Nanotechnology",
      "frontier": "2D Materials, Nanomedicine, Molecular Machines",
      "hardware": "Scanning Tunneling Microscopes (STM), EUV Photolithography",
      "leaders": "USA, China, South Korea, Japan, Germany",
      "defenseImpact": "Stealth coatings, ultra-light armor, nanoscale sensors",
      "ethicalIssue": "Nanotoxicity, bioaccumulation, cellular translocation",
      "color": "#059669"
    },
    {
      "tech": "Quantum Computing",
      "frontier": "Fault-Tolerant Logical Qubits, Quantum Advantage",
      "hardware": "Dilution refrigerators (15 mK), Superconducting junctions",
      "leaders": "USA, China, EU, Canada",
      "defenseImpact": "Cryptographic decryption of RSA/ECC, unhackable QKD",
      "ethicalIssue": "Collapse of global digital banking security (Q-Day)",
      "color": "#f59e0b"
    },
    {
      "tech": "Satellites & Space Tech",
      "frontier": "LEO Mega-Constellations, Lunar Exploration, Reusable Rockets",
      "hardware": "SAR transceivers, Hall-effect ion thrusters, reaction wheels",
      "leaders": "USA, China, Russia, EU, India, Japan",
      "defenseImpact": "Global C4ISR, ASAT space warfare, missile early warning",
      "ethicalIssue": "Space debris orbital crowding, weaponization of space",
      "color": "#3b82f6"
    },
    {
      "tech": "Biotechnology & Gene Editing",
      "frontier": "Base & Prime Editing, mRNA Therapeutics, Synthetic Biology",
      "hardware": "Next-Gen DNA sequencers (Illumina/PacBio), automated synthesizers",
      "leaders": "USA, China, UK, Switzerland, Germany",
      "defenseImpact": "Engineered biological weapons, biodefense surveillance",
      "ethicalIssue": "Germline inheritable mutations, designer babies, GMO patents",
      "color": "#ec4899"
    }
  ],
  "mcqs": [
    {
      "id": 1,
      "q": "What is the primary physical reason why nanomaterials exhibit drastically different properties from bulk materials?",
      "opts": [
        "They have a much higher melting point than any pure chemical element",
        "They possess a high surface-area-to-volume ratio and quantum confinement effects",
        "They are completely immune to gravitational forces and oxidation",
        "They consist exclusively of radioactive isotopes"
      ],
      "ans": 1,
      "exp": "At the nanoscale (1–100 nm), the surface-area-to-volume ratio increases exponentially, exposing a vast percentage of atoms on the surface. Furthermore, quantum confinement restricts electron wavefunctions, altering electrical, optical, and catalytic properties."
    },
    {
      "id": 2,
      "q": "What is the exact theoretical altitude of a Geostationary Earth Orbit (GEO) above Earth's equator?",
      "opts": [
        "Approx. 2,000 km",
        "Approx. 12,500 km",
        "Approx. 35,786 km",
        "Approx. 150,000 km"
      ],
      "ans": 2,
      "exp": "A Geostationary Orbit (GEO) is located at an altitude of exactly 35,786 km (22,236 miles) above Earth's equator. At this altitude, the satellite's orbital period matches Earth's sidereal rotation period (23 hours, 56 minutes, 4 seconds), appearing stationary."
    },
    {
      "id": 3,
      "q": "Which Nobel Prize-winning gene-editing tool utilizes a synthetic single-guide RNA (sgRNA) to direct a bacterial endonuclease enzyme to make targeted double-strand DNA cuts?",
      "opts": [
        "Polymerase Chain Reaction (PCR)",
        "CRISPR-Cas9",
        "Western Blotting",
        "Sanger Sequencing"
      ],
      "ans": 1,
      "exp": "CRISPR-Cas9, adapted from bacterial adaptive immunity by Emmanuelle Charpentier and Jennifer Doudna (2020 Nobel Prize in Chemistry), uses a guide RNA to direct the Cas9 enzyme to cut specific target DNA sequences."
    },
    {
      "id": 4,
      "q": "In quantum computing, what is the geometric sphere used to visualize the state of a single two-level quantum system (qubit) called?",
      "opts": [
        "Poincaré Sphere",
        "Bloch Sphere",
        "Fermi Sphere",
        "Kepler Sphere"
      ],
      "ans": 1,
      "exp": "The Bloch Sphere is a geometrical representation of the pure state space of a two-level quantum mechanical system (qubit). The north and south poles correspond to the computational basis states |0⟩ and |1⟩."
    },
    {
      "id": 5,
      "q": "Which algorithm discovered by Peter Shor in 1994 poses an existential threat to modern public-key cryptography (such as RSA and Diffie-Hellman)?",
      "opts": [
        "Grover's Algorithm",
        "Shor's Algorithm for Prime Factorization",
        "Dijkstra's Algorithm",
        "Monte Carlo Tree Search"
      ],
      "ans": 1,
      "exp": "Shor's Algorithm runs in polynomial time on a quantum computer to factor large composite integers and solve discrete logarithms, effectively compromising current RSA and elliptic curve public-key cryptographic protocols."
    },
    {
      "id": 6,
      "q": "What was the name of Pakistan's first indigenous satellite, launched into low Earth orbit in July 1990?",
      "opts": [
        "PakSAT-1R",
        "Badr-1",
        "PRSS-1",
        "PakTES-1A"
      ],
      "ans": 1,
      "exp": "Badr-1 (from the Arabic for 'Full Moon') was Pakistan's first artificial satellite, launched on July 16, 1990, on a Chinese Long March 2E rocket. It made Pakistan the first Muslim country and second South Asian nation to orbit an indigenous satellite."
    },
    {
      "id": 7,
      "q": "Which 2D nanomaterial, discovered in 2004 by Andre Geim and Konstantin Novoselov using Scotch tape, consists of a single atom-thick sheet of sp²-bonded carbon in a honeycomb lattice?",
      "opts": [
        "Diamondoid",
        "Buckyball (C₆₀)",
        "Graphene",
        "Aerogel"
      ],
      "ans": 2,
      "exp": "Graphene is a single atom-thick planar sheet of carbon atoms densely packed in a honeycomb crystal lattice. It is 200 times stronger than steel, highly transparent, and has extraordinary electrical and thermal conductivities."
    },
    {
      "id": 8,
      "q": "In biotechnology, what are the three sequential thermal steps in a standard cycle of Polymerase Chain Reaction (PCR)?",
      "opts": [
        "Denaturation, Annealing, Extension",
        "Transcription, Translation, Replication",
        "Conjugation, Transformation, Transduction",
        "Ligation, Digestion, Electrophoresis"
      ],
      "ans": 0,
      "exp": "A standard PCR thermal cycle consists of: 1) Denaturation (~94-96°C) to split double-stranded DNA; 2) Primer Annealing (~50-65°C) to bind primers to target strands; and 3) Extension (~72°C) where Taq polymerase synthesizes complementary strands."
    },
    {
      "id": 9,
      "q": "What historic space milestone did Pakistan achieve in May 2024 as part of the Chang'e-6 lunar exploration mission?",
      "opts": [
        "Crewed orbital spaceflight",
        "Launch of the ICUBE-Q miniature satellite to orbit the Moon",
        "Construction of a lunar rover",
        "Deep space laser communication array"
      ],
      "ans": 1,
      "exp": "On May 3, 2024, Pakistan's Institute of Space Technology (IST) in collaboration with SUPARCO and Shanghai Jiao Tong University launched the ICUBE-Q CubeSat aboard China's Chang'e-6 lunar probe, marking Pakistan's first historic lunar orbit mission."
    },
    {
      "id": 10,
      "q": "What is the phenomenon where a cascading chain reaction of satellite collisions generates an exponential cloud of space debris that renders low Earth orbit unusable?",
      "opts": [
        "Kessler Syndrome",
        "Oort Catastrophe",
        "Chandrasekhar Collapse",
        "Van Allen Overload"
      ],
      "ans": 0,
      "exp": "Proposed by NASA scientist Donald J. Kessler in 1978, the Kessler Syndrome describes a scenario where the density of objects in LEO reaches a critical threshold where collisions produce debris fragments that trigger further collisions in a self-sustaining cascade."
    },
    {
      "id": 11,
      "q": "Which pioneering Nobel Prize-winning scientist proposed the theoretical foundation of nanotechnology in his famous 1959 lecture 'There's Plenty of Room at the Bottom'?",
      "opts": [
        "Albert Einstein",
        "Richard Feynman",
        "Niels Bohr",
        "Enrico Fermi"
      ],
      "ans": 1,
      "exp": "Physicist Richard Feynman delivered his landmark lecture 'There's Plenty of Room at the Bottom' to the American Physical Society at Caltech on December 29, 1959, introducing the concept of directly manipulating individual atoms and molecules."
    },
    {
      "id": 12,
      "q": "What cellular delivery vehicle was essential to protect synthetic messenger RNA molecules from enzymatic degradation in COVID-19 mRNA vaccines (Pfizer/BioNTech, Moderna)?",
      "opts": [
        "Attenuated adenoviruses",
        "Lipid Nanoparticles (LNPs)",
        "Carbon Nanotubes",
        "Gold colloids"
      ],
      "ans": 1,
      "exp": "Unprotected mRNA is rapidly degraded by endogenous ribonucleases (RNase) in human extracellular fluid. Lipid Nanoparticles (LNPs) encapsulate and protect the fragile mRNA, enabling endocytosis across host cell membranes."
    }
  ]
};

// Safe browser and Node export
if (typeof window !== 'undefined') {
  window.TECHNOLOGY_EXPLORER_DATA = TECHNOLOGY_EXPLORER_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TECHNOLOGY_EXPLORER_DATA;
}
