/**
 * Official FPSC Schemes & Syllabi for Consolidated Advertisement No. 04/2026 (Phase-4/2026)
 * Source: Federal Public Service Commission (Curriculum & Research Wing), Official Website Document (11/11/2026)
 * Reference: https://www.fpsc.gov.pk
 */
(function (global) {
  'use strict';

  const STD_PART1_100 = {
    label: 'Part-I: English (20 Marks)',
    topics: ['Vocabulary', 'Grammar Usage', 'Sentence Structuring']
  };

  const STD_PART1_200 = {
    label: 'Part-I: English (40 Marks) & General Intelligence/Ability (60 Marks) — 100 Marks',
    topics: [
      'English (40 Marks): Comprehension, Grammar Usage, Vocabulary, Sentence Structuring, Sentence Correction, Idiomatic Phrases, Synonyms and Antonyms, Translation',
      'General Intelligence/Ability (60 Marks): Basic Arithmetic & Quantitative Ability (Algebra, Ratios, Percentages, Arithmetic Means); Logical Reasoning & Analytical Ability; Current Affairs (last 2 years); Pakistan Affairs; Everyday Science; Basic IT (Hardware & Software)'
    ]
  };

  const MBBS_PART1_200 = {
    label: 'Part-I: Core Courses of MBBS — Common to All Categories (100 Marks)',
    topics: [
      'Core concepts of the basic and clinical sciences of MBBS',
      'Research methodology, biostatistics, evidence-based medicine and medical writing',
      'Postgraduate medical education: residency curriculum, supervision, workplace-based assessment and feedback',
      'Clinical governance, quality improvement, patient safety and medical ethics',
      'Departmental administration and academic leadership',
      'Public health priorities and disease burden in Pakistan',
      'Artificial Intelligence and digital technologies in clinical practice and medical education'
    ]
  };

  const GI_COMMON_TOPICS = [
    'Basic Arithmetic and Quantitative Ability (Algebra, Ratios, Percentages, Arithmetic Means)',
    'Logical Reasoning and Analytical Ability',
    'Current Affairs: national and international developments during the last two years',
    'Pakistan Affairs',
    'Everyday Science',
    'Basic IT (Hardware and Software)'
  ];

  const FPSC_PHASE4_2026_SYLLABI = {
    // PART-A: BS-16 & BS-17 (100 Marks Objective MCQ)
    'F.4-179/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Core courses of MBBS with emphasis on basic medical sciences: Anatomy (Histology & Embryology), Physiology, Biochemistry, Pharmacology & Therapeutics, General & Special Pathology, Forensic Medicine & Toxicology, Community Medicine',
        'Conduct of practicals, laboratory demonstrations, dissection hall work and laboratory safety',
        'Basics of medical education: lectures, small group teaching, tutorials and skills laboratory teaching',
        'Student assessment: MCQ, SEQ, OSPE, OSCE and viva voce; maintenance of academic record and progress reports',
        'National health policy and major challenges of the health sector in Pakistan',
        'Use of technology and Artificial Intelligence in medical education',
        'Medical ethics and professionalism'
      ]
    },
    'F.4-180/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Introduction to Library and Information Science',
        'Classification: theory and practice (Dewey Decimal Classification, Library of Congress Classification)',
        'Cataloguing: theory and practice (AACR2, RDA, MARC 21, subject headings)',
        'Collection development: selection, acquisition, weeding and stock verification',
        'Circulation control: lending, reservation, overdue management and user records',
        'Reference and information services, including medical and health information sources and online databases',
        'Library automation, integrated library management systems and information storage and retrieval',
        'Management of serial publications; preservation and conservation of library material, public records and rare material',
        'Rules and procedure for write off of library losses; library rules, policies, user discipline and premises management',
        'Digital libraries, online medical information resources and Basic IT knowledge'
      ]
    },
    'F.4-181/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Uloom ul Quran: revelation, compilation, principles of Tafseer and major Tafaseer',
        'Uloom ul Hadith: compilation, classification and major collections of Hadith; Study of Seerah',
        'Usool ul Fiqh: sources of Islamic law, Ijma, Qiyas, Ijtihad and Fatwa; major schools of Fiqh',
        'Islamic Jurisprudence: Muamilat (transactions), Siyasat (Islamic political system) and Jinayat (Hudood, Qisas and Tazeer)',
        'Aqeedah of Khatm-e-Nabuwat: Quranic and Sunnah basis and relevant provisions of the Constitution of Pakistan',
        'Islamic provisions of the Constitution of Pakistan; Council of Islamic Ideology; Federal Shariat Court judgments',
        'Arabic language: grammar, comprehension and translation',
        'Islamic system of education and training; Islamic moral and social reform',
        'Extremism, terrorism and sectarianism: causes, Islamic teachings and the national counter narrative',
        'Ruet-e-Hilal: Shariah rulings on moon sighting and basics of the lunar calendar',
        'Islamic Code of Life; Islamic civilization and culture; interfaith & sectarian harmony; response to Islamophobia',
        'Contemporary challenges of the Muslim world; Islamic perspective on environment, technology and human rights'
      ]
    },
    'F.4-182/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Agronomy: crop production, cropping systems and crop management in mountain and cold arid regions',
        'Plant breeding and genetics; seed production, certification and varietal improvement',
        'Soil science: soil fertility, plant nutrition, fertilizers and soil conservation',
        'Horticulture: temperate fruits, vegetables, nursery production and post-harvest handling',
        'Plant protection: entomology, plant pathology, weed science and integrated pest management',
        'Irrigation, water management and watershed management',
        'Integrated farming systems: basics of livestock and fisheries; agricultural extension and transfer of technology',
        'Agricultural economics and marketing; research methodology (experimental design, field trials, statistical analysis)',
        'Biosafety, research ethics and regulatory standards; climate change impact on mountain agriculture; food security in Pakistan'
      ]
    },
    'F.4-189/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Human nutrition: macronutrients and micronutrients, functions, food sources and deficiency disorders',
        'Nutrition through the life cycle: maternal, infant, child and adolescent nutrition',
        'Assessment of nutritional status: anthropometric, biochemical, clinical and dietary methods',
        'Malnutrition in Pakistan: stunting, wasting, micronutrient deficiencies and double burden of malnutrition',
        'National nutrition surveys and nutrition indicators; food security, food fortification and food safety standards',
        'Nutrition policies, strategies and multisectoral nutrition programmes in Pakistan; nutrition-specific & sensitive interventions',
        'Planning, appraisal and monitoring of development projects in nutrition & health sectors (PC-I to PC-V)',
        'Data collection & compilation, data analysis, research methodology and report writing',
        'Food security and climate change; SDG 2 (Zero Hunger) and global nutrition targets'
      ]
    },
    'F.4-190/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Principles, goals and objectives of town and regional planning; theories of urban growth',
        'Urbanization in Pakistan, urban-rural linkages and hierarchy of settlements',
        'Land use planning, zoning, land use classification, master plans, building and development control',
        'Housing: demand and supply, affordable and low-cost housing, slum upgrading and community development',
        'Urban infrastructure and services: water supply, sanitation, solid waste management and urban transport',
        'Public policy and urban design management; planning, appraisal, M&E of development projects (PC-I to PC-V)',
        'Methods of data collection and analysis; GIS and remote sensing in planning; report writing',
        'Climate-resilient cities, disaster risk reduction and SDG 11 (Sustainable Cities and Communities)'
      ]
    },
    'F.4-191/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Petroleum geology: origin, migration and accumulation of hydrocarbons; source, reservoir and seal rocks',
        'Exploration methods: geological and geophysical surveys (seismic, gravity, magnetic) and well logging',
        'Basics of drilling, reservoir and production engineering; mineralogy and petrology',
        'Coal geology: formation, rank, classification and coal resources of Pakistan; coal mining, gasification and power generation',
        'Oil refining, natural gas processing, LNG, LPG, pipelines and storage',
        'Energy mix of Pakistan (oil, gas, coal, renewable, nuclear); national energy & petroleum policies and pricing',
        'Development planning and appraisal of energy projects (PC-I to PC-V); data analysis and report writing',
        'Energy security, energy transition and current issues of the energy sector of Pakistan'
      ]
    },
    'F.4-192/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Science, technology and innovation policy: national innovation system and university-industry-government linkages',
        'Institutional framework of science, technology and higher education in Pakistan',
        'R&D indicators: R&D expenditure, researchers, publications, patents and global innovation rankings',
        'Technology transfer, commercialization, intellectual property rights and industry-academia linkages',
        'Emerging technologies: Artificial Intelligence, biotechnology, nanotechnology, space and quantum technologies',
        'Development planning in Pakistan: Five Year Plan, Annual Plan, PSDP, project cycle (PC-I to PC-V) and approval forums',
        'Project appraisal (NPV, IRR, cost-benefit analysis); M&E; data analysis and preparation of briefs',
        'National priorities in Artificial Intelligence and SDG 9 (Industry, Innovation and Infrastructure)'
      ]
    },
    'F.4-193/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Environmental science: ecosystems, biodiversity and natural resources',
        'Environmental pollution: air, water, soil and noise; solid and hazardous waste management',
        'Environmental protection laws and National Environmental Quality Standards (NEQS)',
        'Environmental Impact Assessment (IEE and EIA) and Strategic Environmental Assessment',
        'Climate change science, mitigation and adaptation; National Climate Change Policy, NDCs and international agreements (UNFCCC, Paris Agreement, CBD)',
        'Environmental and natural resource economics: valuation, externalities, carbon pricing and green financing',
        'Forestry, watershed and NRM; disaster risk reduction and climate-resilient development',
        'Planning & appraisal of environment/climate projects (PC-I to PC-V); climate finance, carbon markets & budget tagging; remote sensing & digital monitoring'
      ]
    },
    'F.4-195/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Financial accounting: accounting cycle, journal, ledger, trial balance, adjustments and final accounts',
        'Partnership and company accounts; valuation of goodwill and shares; financial statement & ratio analysis',
        'Cost and management accounting: costing methods, budgeting, budgetary control and variance analysis',
        'Auditing: scope and objectives, types of audit, audit programme, audit evidence and working papers',
        'Verification of assets and liabilities; rights, powers, duties and liabilities of the auditor',
        'Public sector auditing: financial attest, compliance and performance audit; ISSAIs',
        'Constitutional provisions relating to the Auditor General of Pakistan (Articles 168 to 171)',
        'Planning, conduct and reporting of audit; role of Public Accounts Committees (PAC) in public accountability',
        'Public sector accounting: cash & accrual basis and International Public Sector Accounting Standards (IPSAS)',
        'Public Finance Management Act, 2019 and Public Procurement Rules, 2026',
        'Internal controls, investigation of accounts and fraud detection; IT audit and CAATs',
        'Economy of Pakistan: budget, taxation and fiscal issues; public sector accountability and transparency'
      ]
    },
    'F.4-196/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Circuit analysis: Ohm\'s law, Kirchhoff\'s laws, network theorems, DC and AC circuits',
        'Electronic devices and circuits: diodes, transistors, amplifiers and power supplies',
        'Digital logic design, microprocessors, microcontrollers and PLCs; electrical machines, power electronics & battery backup',
        'Communication systems: analog/digital modulation, multiplexing, telephony and switching; optical fibre networks',
        'Wireless & mobile communication; antennas, wave propagation, microwave and satellite communication',
        'Data communication and computer networks; SCADA and network security; cyber security of communication & control systems',
        'Control systems and safety-critical systems: feedback control, relay logic, interlocking principles, sensors and fail-safe design',
        'Earthing, lightning protection and electromagnetic compatibility; inspection, maintenance, estimation, costing & PC-I'
      ]
    },
    'F.4-197/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Materials management: classification, codification and standardization of materials',
        'Inventory control: EOQ, ABC and VED analysis, safety stock, reorder level and lead time',
        'Stores management: receipt, inspection, custody, issue, accounting of stores and stock taking',
        'Care and preservation of engineering stores; return and disposal of surplus, obsolete and scrap material',
        'Supply chain management, logistics, vendor development and vendor evaluation',
        'Public Procurement Rules, 2026: procurement planning, methods, bidding documents, evaluation, grievance redressal and e-procurement',
        'Contract management: purchase orders, warranties, performance guarantees and liquidated damages',
        'Engineering materials, QA/testing, engineering economics & costing, computerized inventory/ERP, GFR 2025, transparency & Basic IT'
      ]
    },
    'F.4-198/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Transportation engineering: railway engineering (permanent way components, track geometry, points & crossings, track maintenance) and highway engineering',
        'Bridge engineering: types of bridges and culverts; inspection, maintenance and rehabilitation',
        'Structural analysis and design applications; steel structures; concrete technology and RCC design',
        'Soil mechanics and foundation engineering; retaining walls and earthworks; surveying and levelling',
        'Building materials and construction; hydraulics, hydrology and drainage of embankments and formations',
        'Costing and estimation; preparation of PC-I; construction management, supervision, QC and site safety',
        'Public Procurement Rules, 2026 and construction contracts; safety/environmental standards; climate-resilient infrastructure & flood protection'
      ]
    },
    'F.4-199/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Thermodynamics and heat transfer; internal combustion engines (diesel engines, fuel injection, turbocharging, lubrication & cooling)',
        'Power transmission and traction: mechanical, hydraulic and electric transmission systems',
        'Heavy vehicle systems: suspension, wheels and axles, vehicle dynamics and braking systems (hydraulic, air, vacuum)',
        'Fluid mechanics and hydraulic machines; mechanics of machines, machine design and drawing',
        'Mechanics and strength of materials; industrial materials and metallurgy; refrigeration and air conditioning',
        'Workshop technology and manufacturing processes: casting, forging, machining, welding and fabrication',
        'Maintenance engineering (preventive, predictive, condition-based; reliability & failure analysis)',
        'Production management, QC, industrial safety, project management/PC-I, energy efficiency & diesel emission control'
      ]
    },
    'F.4-200/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Common: workshop organization & management; repair & manufacture of stores; scrutiny of work orders, authorization & financial sanction; job planning, production control, QC & industrial safety',
        'Computerized maintenance and production management systems',
        'Textile: textile fibres, spinning, weaving/knitting/nonwovens, dyeing/printing/finishing, fabric design, textile testing & QC, technical/protective textiles, garment manufacture & repair',
        'Mechanical: thermodynamics & heat transfer, industrial materials, machine design & drawing, mechanics of machines, workshop technology, hydraulic machines, maintenance & repair engineering'
      ]
    },
    'F.4-201/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Laws relating to industrial relations: trade unions, collective bargaining, industrial disputes, conciliation and arbitration',
        'Payment of Wages Act, 1936 & minimum wages laws; Workmen\'s Compensation Act, 1923',
        'Factories Act, 1934: hours of work, health, safety and welfare of workers',
        'Standing Orders (terms of employment) and social security (old age benefits and employees\' social security)',
        'Labour Policy of Pakistan and ILO Conventions ratified by Pakistan; labour welfare & occupational health/safety',
        'Grievance handling, employee relations and HRM; Constitution of Pakistan 1973 (fundamental rights & policy principles on labour)',
        'Core LL.B courses: Law of Contract, CPC, PPC and CrPC (general principles); recent labour legislation, superior court judgments & international labour standards'
      ]
    },
    'F.4-202/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Inventory management and control techniques; stock control, verification and reporting',
        'Supply chain and logistics management; warehouse layout, storage and preservation of hazardous/sensitive/high-value stores',
        'Accounting principles & procedures: journal, ledger, cash book, final accounts, adjustment and depreciation',
        'Cost accounting and financial planning; budgeting, re-appropriation, supplementary grants and settlement of audit objections',
        'Financial Management & Powers of PAOs Regulations 2021; General Financial Rules 2025; Public Procurement Rules 2026',
        'Principles of management; quantitative techniques for decision making; fire prevention and fire fighting',
        'MS Excel, spreadsheets, computerized inventory/logistics systems and Economy of Pakistan (budget & fiscal issues)'
      ]
    },
    'F.4-203/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Core courses of MBBS: Medicine & allied, Surgery & allied, Paediatrics, and Obstetrics & Gynaecology',
        'Primary health care and family medicine; management of medical & surgical emergencies, BLS and first aid',
        'Occupational health: occupational diseases, workplace hazards and pre-employment medical examination',
        'Child health (growth monitoring, immunization, nutrition) and maternal health & family planning',
        'Communicable and non-communicable diseases in Pakistan; rational use of medicines & essential medicines list',
        'Medical record keeping, certification and basic medico-legal procedures; national health policies, public health priorities, medical ethics & patient safety'
      ]
    },
    'F.4-204/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Modern concept of the horticultural industry; landscape design, planning and landscape plants',
        'Turf grass establishment and management for lawns, parks and golf courses',
        'Ornamental horticulture and floriculture; flower production; floral design and decoration for functions',
        'Plant propagation and nursery management; fruit & vegetable production; orchards, kitchen gardens & seed production',
        'Soil, fertilizers, irrigation & water management in horticulture; plant protection & IPM; medicinal & aromatic plants',
        'Harvest & post-harvest handling; supervision of garden staff; climate change impact on horticulture; urban forestry & green spaces'
      ]
    },
    'F.4-205/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Web technologies: HTML5, CSS3, JavaScript and responsive web design; front-end frameworks and libraries',
        'Server-side programming and frameworks; RESTful web services and APIs; Content Management Systems (CMS)',
        'DBMS: relational databases, SQL, normalization and basics of NoSQL',
        'Software engineering: SDLC, system analysis & design, coding, testing, debugging, version control, integration & maintenance',
        'Web server administration: hosting, DNS, SSL/TLS certificates and cloud deployment',
        'Web application security: OWASP Top 10, authentication, encryption, secure coding and backup',
        'Computer networks & internet protocols (TCP/IP, HTTP/HTTPS), operating systems, web accessibility/UI design, IT audit, cyber security & e-governance'
      ]
    },
    'F.4-206/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Microeconomics: demand, supply, consumer & producer behavior, market structures and welfare',
        'Macroeconomics: national income accounting, inflation, unemployment and economic growth',
        'Monetary economics & Monetary Policy of Pakistan; Public Finance & Fiscal Policy of Pakistan',
        'International economics: trade, balance of payments, exchange rate, foreign aid and external debt',
        'Development economics: growth theories, poverty and inequality; econometrics & quantitative methods (regression, time series)',
        'Economy of Pakistan (agriculture, industry, services, energy, social sectors); development planning (Five Year Plan, Annual Plan, PSDP, PC-I to PC-V)',
        'Project appraisal (cost-benefit analysis, NPV, IRR); research methodology & national surveys',
        'CPEC & regional economic integration; current economic issues (inflation, fiscal deficit, external debt, BoP) and climate change economic implications'
      ]
    },
    'F.4-207/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Biochemistry: carbohydrates, proteins, lipids, nucleic acids; enzymes & kinetics; metabolism & bioenergetics; clinical biochemistry',
        'Molecular Biology: DNA/RNA structure, chromosomes, replication, repair, transcription, translation & gene regulation',
        'Molecular techniques & diagnostics: nucleic acid extraction, PCR, real-time PCR, electrophoresis, blotting, cloning, Sanger/NGS sequencing, infectious/genetic/cancer markers',
        'Bioinformatics: biological databases, sequence alignment, phylogeny, genomic/transcriptomic/proteomic/NGS analysis, protein structure prediction, docking, Python/R',
        'Experimental design, method validation (accuracy, precision, sensitivity, specificity, LoD), biostatistics & troubleshooting',
        'Project management, scientific documentation/SOPs, GLP/biosafety/biosecurity/research ethics, and AI in biological research & diagnostics'
      ],
      note: 'Part-II is common for candidates of Molecular Biology, Bioinformatics and Biochemistry with balanced weightage.'
    },
    'F.4-208/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Research methodology: qualitative & quantitative methods; surveys, sampling, questionnaires, interviews & field inspection',
        'Data analysis & interpretation: descriptive statistics, index numbers and basic inferential statistics',
        'Monitoring & evaluation: logical framework, KPIs and results-based monitoring; project cycle (PC-I to PC-V)',
        'Financial analysis of projects: budget utilization, cost overruns and cost-benefit analysis',
        'Inspection and enquiry procedures: fact finding, examination of records, evidence and inspection reports',
        'Public administration, good governance, accountability, transparency and public financial management (budgeting & procurement)',
        'Socio-economic development of Gilgit-Baltistan (tourism, hydropower, agriculture, connectivity); PSDP; report writing; climate change & mountain disaster risks'
      ]
    },
    'F.4-210/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Economy of Pakistan: growth, inflation, fiscal policy and monetary policy; current economic issues',
        'Development planning: planning cycle, Annual Development Program (ADP), PSDP and sectoral investment programmes',
        'Project management cycle & planning documents (PC-I to PC-V); project appraisal (NPV, IRR, BCR, feasibility studies)',
        'Monitoring and evaluation of development projects; public finance and budgeting',
        'Principles of management and strategic planning; research methodology, case study method, data analysis & report writing',
        'Socio-economic development of Gilgit-Baltistan (tourism, hydropower, agriculture, CPEC & connectivity)',
        'Sustainable Development Goals (SDGs) localization; climate change and disaster risks in mountain regions'
      ]
    },
    'F.4-211/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Theory and history of architecture; architectural design (functionality, aesthetics, space, light, materials)',
        'Building materials & construction technology; structures for architects & earthquake-resistant design',
        'Building services: water supply, drainage, electrical, HVAC and fire safety',
        'Climate-responsive & sustainable architecture; energy-efficient buildings for hilly and cold regions',
        'Urban design, site planning, landscape architecture; building codes & bylaws; CAD, 3D modelling and BIM',
        'Working drawings, specifications, quantity estimation; construction supervision, contract management & project coordination',
        'Conservation of historic & vernacular architecture; professional ethics; safety/quality/environmental standards & disaster risk reduction'
      ]
    },
    'F.4-212/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: General Intelligence & Professional Test (80 Marks)',
      part2Topics: [
        ...GI_COMMON_TOPICS,
        'Post Topics: Constitutional & legal framework of public service recruitment (Articles 240–242; Civil Servants Act, 1973)',
        'Principles & methods of recruitment and selection; APT Rules 1973; Seniority Rules 1993; Conduct Rules 2026; E&D Rules 2020',
        'Framing of rules & delegated legislation; Office Procedure (Secretariat Instructions, noting, drafting, summaries, records)',
        'Planning & management of examinations and interviews (logistics, security, confidentiality); PPR 2026 & GFR 2025',
        'Legal matters (writ petitions, appeals, parawise comments, natural justice); AI & digital transformation in public sector recruitment'
      ]
    },
    'F.4-214/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Fundamentals of nursing: nursing process, vital signs, administration of medicines and nursing procedures',
        'Basic anatomy, physiology and pharmacology for nurses; medical and surgical nursing',
        'Emergency and critical care nursing: triage, basic life support and wound care',
        'Rehabilitation nursing: care of patients with spinal cord injury, amputation, stroke, traumatic brain injury and disabilities',
        'Prevention of pressure ulcers; positioning, transfer, mobility aids and assistive devices; orthopaedic & neurological nursing',
        'Infection prevention and control; ward management, nursing records and documentation',
        'Community health nursing; maternal/child health & midwifery; mental health & psychosocial support; nursing leadership, disability rights & digital health records'
      ]
    },
    'F.4-215/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Constitution of Pakistan, 1973: fundamental rights, writ jurisdiction (Article 199) and service matters (Article 212)',
        'Code of Civil Procedure, 1908: suits, pleadings, injunctions, appeals, revision and execution',
        'Law of Contract, 1872 and Specific Relief Act, 1877; Limitation Act, 1908 and Qanun-e-Shahadat Order, 1984',
        'Pakistan Penal Code, 1860 and Code of Criminal Procedure, 1898 (general principles)',
        'Civil Servants Act, 1973 and Service Tribunals Act, 1973; Property laws (Transfer of Property Act 1882, Land Acquisition Act 1894, encroachments)',
        'Arbitration & ADR; interpretation of statutes; drafting & vetting of contracts, MoUs, plaints, written statements, writs & parawise comments',
        'Legal opinions, case management, Secretariat Instructions, Basic MS Office (Word/Excel), recent judgments & legal tech'
      ]
    },
    'F.4-216/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Descriptive statistics & presentation of data; probability and probability distributions (Binomial, Poisson, Normal)',
        'Sampling theory & techniques; determination of sample size; estimation and hypothesis testing (parametric & non-parametric)',
        'Correlation and regression (simple, multiple, logistic); analysis of variance (ANOVA) and design of experiments',
        'Biostatistics: rates, ratios, proportions, vital statistics, disease frequency measures and survival analysis',
        'Epidemiological study designs: cross-sectional, case-control, cohort and clinical trials',
        'Index numbers, time series analysis & forecasting; research methodology, questionnaire design & data management',
        'Statistical software (SPSS, R, Stata, MS Excel), Data Science & AI in health statistics, research ethics & data protection'
      ]
    },
    'F.4-217/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: General Intelligence & Professional Test (80 Marks)',
      part2Topics: [
        ...GI_COMMON_TOPICS,
        'Post Topics: Duties of a hostel warden (especially female hostels); admission, room allotment, hostel rules, record keeping & resident welfare',
        'Mess management: food hygiene, balanced diet, menu planning, purchase and mess accounts',
        'Discipline, anti-ragging measures, grievance redressal; hostel safety & security (access control, fire safety, emergency response)',
        'Health, hygiene, first aid & psychological wellbeing; Protection against Harassment of Women at the Workplace Act, 2010; hostel maintenance & safeguarding'
      ]
    },
    'F.4-218/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Stores management: receipt, inspection, custody and issue of stores',
        'Inventory records: stock ledgers, bin cards, receipt/issue vouchers, indents and demands; stock taking & physical verification',
        'Inventory control techniques: ABC analysis, EOQ, reorder level, FIFO and LIFO',
        'Warehouse management: layout, storage, care & preservation of stores, spare parts & equipment',
        'Loss statements, write-off of losses, condemnation and disposal of unserviceable stores',
        'Public Procurement Rules, 2026 (procurement methods, local & e-procurement); General Financial Rules, 2025 relating to stores',
        'Computerized inventory management systems; basic arithmetic of store accounts (ratios, percentages, means); Basic IT (MS Office)'
      ]
    },
    'F.4-219/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: General Intelligence & Professional Test (80 Marks)',
      part2Topics: [
        ...GI_COMMON_TOPICS,
        'Post Topics: Procedures for receipt, issue and accounting of stores; stock taking; inventory tracking, auditing & reporting',
        'Inventory & supply chain management in a warehouse; warehouse layout; care & preservation of hazardous/sensitive/high-value stores',
        'Security of stores, documents & storehouses; staff supervision; basic accounting',
        'Fire prevention and fire fighting (classification of fires, heat transmission, causes & consequences); MS Excel & computerized logistics systems'
      ]
    },
    'F.4-220/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: General Intelligence & Professional Test (80 Marks)',
      part2Topics: [
        ...GI_COMMON_TOPICS,
        'Post Topics: Physical security of installations (perimeter security, access control, guarding, mustering, searching)',
        'Protective security (information, documents, personnel, material); security threats (espionage, sabotage, subversion, leakage)',
        'Modern law enforcement & crime prevention; maintaining law & order; counter-terrorism & radicalism',
        'Criminal law & procedure (cognizable/non-cognizable offences, FIR, arrest, search & seizure, offences against property, evidence); Official Secrets Act, 1923',
        'Preliminary & departmental enquiries and report writing; fire safety & emergency response; CCTV/alarm/access control tech; cybercrime & info security'
      ]
    },
    'F.4-221/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Civil Servants Act, 1973; APT Rules 1973; Conduct Rules 2026; E&D Rules 2020; Appeal Rules 1977',
        'Fundamental Rules & Supplementary Rules (pay, honoraria, joining time, deputation, suspension); Revised Leave Rules, 1980',
        'Basic Pay Scales, allowances, pay fixation, TA/DA rules; Pension and General Provident Fund (GPF) rules',
        'General Financial Rules, 2025; Treasury Rules & Federal Government Receipts and Payment Rules, 2025',
        'Budget estimates, re-appropriation, supplementary grants; Financial Management & Powers of PAOs Regulations 2021; Public Procurement Rules 2026',
        'Accounting principles (books of accounts, payroll, reconciliation); time keeping, service records, HRM, MS Excel & Economy of Pakistan'
      ]
    },
    'F.4-222/2026-R': {
      part: 'Part-A (BS-16 & BS-17)', totalMarks: 100, duration: '100 Minutes', negativeMarking: 'None',
      part1: STD_PART1_100,
      part2Label: 'Part-II: Professional Test (80 Marks)',
      part2Topics: [
        'Principles of management and public administration (planning, organizing, coordination, supervision); HRM & staff performance',
        'Office procedure: noting, drafting, filing, indexing, movement of files & record management; meeting agendas & minutes',
        'Safe custody of confidential & classified documents; Civil Servants laws & rules (appointment, promotion, conduct, E&D)',
        'Rules relating to pay, allowances, leave, pension and GPF; financial management (budgeting, expenditure control, financial propriety)',
        'Management of office resources (stores, supplies, equipment); Public Procurement Rules; official letters, OMs & notifications',
        'Use of MS Office, e-office & digital record management; Pakistan Affairs (current political, economic & social developments)'
      ]
    },

    // PART-B: BS-18, BS-19 & BS-20 (200 Marks, 200 Minutes, -0.25 Negative Marking)
    'F.4-176/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Constitution of Pakistan, 1973: distribution of legislative powers, Federal Legislative List, Ordinance-making power & fundamental rights limits',
        'Legislative process: stages of a Bill, Money Bills, joint sittings, assent & legislation for ICT',
        'Principles & techniques of legislative drafting: plain language, structure of a Bill, preamble, definitions, provisos, savings, repeals & commencement',
        'Drafting of amending legislation, rules, regulations, notifications and SROs; delegated legislation (parliamentary & judicial control)',
        'Interpretation of Statutes and General Clauses Act, 1897; Jurisprudence; Administrative Law (natural justice & judicial review)',
        'Vetting of contracts, agreements & MoUs; Contract Act 1872 & Specific Relief Act 1877; international treaties domestic implementation',
        'General principles of CPC 1908, CrPC 1898, PPC 1860 & QSO 1984; superior court judgments, recent constitutional amendments & modern drafting best practices'
      ]
    },
    'F.4-152/2026-R (Re-adv)': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: MBBS_PART1_200,
      part2Label: 'Part-II: Category-Wise Specialization (100 Marks)',
      part2Topics: [
        '(A) Cardiac Surgery: Applied cardiac anatomy/physiology/pathology, cardiopulmonary bypass, CAD, valvular/congenital/thoracic aorta surgery, heart failure/transplant, cardiac imaging, ICU & complications',
        '(B) Dermatology: Skin structure/function, immunodermatology, cutaneous infections (leishmaniasis, leprosy), eczema/urticaria, psoriasis/lichen planus, connective tissue diseases, pigmentation/hair/nails, skin cancers, STIs, dermatopathology & lasers',
        '(C) Emergency Medicine: Adult/paediatric/neonatal resuscitation, ED triage, trauma/polytrauma/burns, systemic emergencies, toxicology/envenomation, environmental/OBGYN/paeds emergencies, airway/POCUS, disaster medicine & medico-legal care',
        '(D) Neonatology: Fetal/neonatal transition, resuscitation, preterm/LBW care, respiratory support (CPAP/ventilation/surfactant), jaundice, sepsis, nutrition, HIE/seizures/IVH, congenital/metabolic disorders, NICU & perinatal epidemiology',
        '(E) Paediatric Surgery: Neonatal surgical emergencies (OA/TOF, atresia, malrotation, Hirschsprung, ARM), abdominal wall/CDH, GI/hepatobiliary, paediatric urology, surgical oncology (Wilms, neuroblastoma), trauma/burns, MIS & thoracic/neuro',
        '(F) Pulmonology: Respiratory physiology/PFTs, asthma/COPD, TB/DR-TB, pneumonia, ILD/occupational lung diseases, PE/PH, pleural diseases, lung cancer, sleep disorders, NIV/ventilation, bronchoscopy & air pollution/tobacco control'
      ],
      note: 'Part-I (Common MBBS & Medical Education) is common to all 6 categories; Part-II is set category-wise.'
    },
    'F.4-177/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: MBBS_PART1_200,
      part2Label: 'Part-II: Category-Wise Specialization (100 Marks)',
      part2Topics: [
        '(A) Neonatology: Fetal/neonatal physiology & transition, neonatal resuscitation, preterm/LBW care, CPAP/mechanical ventilation/surfactant, jaundice, sepsis, breastfeeding/parenteral nutrition, HIE/seizures/IVH, congenital anomalies/inborn errors, fluid/electrolyte disorders, NICU organization & perinatal epidemiology in Pakistan',
        '(B) Paeds Oncology / Paediatric Hematology Oncology: Epidemiology & biology of childhood cancers, leukaemias & lymphomas, solid tumours (CNS, neuroblastoma, Wilms, retinoblastoma, sarcomas), staging & risk stratification, chemotherapy/radiotherapy/surgery, supportive care (febrile neutropenia, TLS), oncological emergencies, HSCT, palliative care, survivorship & benign haematology (anaemias, thalassaemia, haemophilia)'
      ],
      note: 'Part-I (Common MBBS & Medical Education) is common to both categories; Part-II is set category-wise.'
    },
    'F.4-178/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Psychometrics: classical test theory and item response theory; reliability, validity, norms and standardization',
        'Test construction: test specification, item writing, item analysis, test equating, computer-based and adaptive testing',
        'Assessment of intelligence, aptitude & abilities; personality theories, objective & projective assessment techniques',
        'Personnel selection: job analysis, competency frameworks, structured interviews, SJTs, group tasks & assessment centres',
        'Industrial & organizational psychology; social psychology (attitudes, group dynamics, bias & fairness in assessment)',
        'Abnormal, clinical & developmental psychology across the life span; research methodology, experimental design & SPSS/R',
        'Ethical & legal issues in psychological testing; AI & digital technologies in psychological assessment & public sector recruitment'
      ]
    },
    'F.4-183/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Development planning in Pakistan: planning machinery, Five Year Plan, Annual Plan and PSDP; project cycle (PC-I to PC-V) & approval forums',
        'Project appraisal (technical, financial, economic, social analysis & feasibility studies); monitoring & evaluation',
        'Public financial management: budget preparation, release/utilization, PFM Act 2019, GFR 2025 & Public Procurement Rules 2026',
        'Principles of management & HRM; public administration, governance, accountability, transparency & service delivery',
        'Cultural heritage management: tangible & intangible heritage, museums, archives, libraries and performing arts',
        'UNESCO World Heritage Convention 1972 & Intangible Cultural Heritage Convention 2003; World Heritage Sites of Pakistan',
        'Cultural policy, cultural tourism & creative industries; research methodology; climate change impact on heritage & digitization of heritage collections'
      ]
    },
    'F.4-184/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Energy economics: demand & supply, demand forecasting, pricing, tariffs and subsidies; structure & regulation of power/petroleum sectors',
        'Power sector finance: tariff determination, capacity payments, circular debt, PPAs and competitive electricity markets',
        'Financial analysis: financial statements, ratio analysis, cost of capital, DCF, NPV, IRR, LCOE and risk analysis',
        'Project finance, PPPs in energy projects, loan agreements, development finance & debt sustainability',
        'Economic appraisal (cost-benefit analysis, shadow pricing, sensitivity analysis); Pakistan energy policies & SDG 7',
        'Development planning (PSDP, PC-I to PC-V); Federal decision forums (ECC, Cabinet, CCI) & summary preparation',
        'Macroeconomic/fiscal implications of energy sector; energy transition, NDCs, carbon markets & regional energy cooperation'
      ]
    },
    'F.4-185/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Data management: database design, data warehousing, data governance and data quality',
        'Data mining & analytics: statistical analysis, data visualization & dashboards; Big Data (distributed storage/processing, cloud computing)',
        'Machine learning & Artificial Intelligence: supervised/unsupervised learning, forecasting models, deep learning & model evaluation',
        'Energy information systems: energy data collection, energy balance, statistics & demand forecasting',
        'SCADA, smart grids, advanced metering infrastructure (AMI) and IoT in the energy sector; MIS, DSS & GIS in energy planning',
        'Cyber security, data protection & info security standards; IT project management, SDLC & appraisal of IT projects (PC-I)',
        'Overview of Pakistan\'s energy sector; e-governance, national digital policies & AI ethics / responsible data use'
      ]
    },
    'F.4-186/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Petroleum geology & exploration: source, reservoir, trap, geological/geophysical methods & well logging',
        'Drilling, reservoir & production engineering; natural gas processing, LNG, LPG, pipelines & storage; refining & petrochemicals',
        'Coal geology, mining, conversion technologies & coal-based power generation; hydrocarbon & coal resources of Pakistan',
        'Fuel sector policies & pricing (petroleum, natural gas, LNG, coal); energy security & integrated energy planning',
        'Appraisal of fuel sector projects (technical, financial, economic feasibility); project cycle (PC-I to PC-V) & M&E',
        'Environmental & social impact of fuel projects; energy transition, clean fuels & regional/transnational energy projects'
      ]
    },
    'F.4-187/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Power system analysis: load flow, fault analysis and stability; power generation (thermal, hydel, nuclear, solar, wind) & economics',
        'Transmission systems: HVAC and HVDC, substations, grid code and transmission losses',
        'Distribution systems: network design, technical & commercial losses, and metering; power system protection, control & SCADA',
        'Electrical machines & power electronics; power system planning (demand forecasting, generation & transmission expansion)',
        'Structure & regulation of Pakistan\'s power sector; electricity tariff and circular debt',
        'Integration of renewable energy, energy storage & distributed generation; energy efficiency & conservation',
        'Appraisal & M&E of power sector projects (PC-I to PC-V); power sector decarbonization & regional power trade'
      ]
    },
    'F.4-188/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Health systems: building blocks of a health system; federal and provincial health systems of Pakistan',
        'Health planning & management: situation analysis, needs assessment, prioritization & planning cycle; national health policies, UHC & SDG 3',
        'Health economics & financing: health expenditure, social health protection and cost-effectiveness analysis',
        'Epidemiology & biostatistics: disease frequency measures, study designs & surveillance; communicable & NCD burden in Pakistan',
        'Maternal, newborn & child health, immunization, nutrition, population & family planning; primary health care & hospital management',
        'Health information systems & indicators; planning, appraisal & M&E of health projects (PC-I to PC-V)',
        'Regulation of medicines & healthcare providers; climate change & public health; digital health'
      ]
    },
    'F.4-194/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Urdu language: grammar (Qawaid), usage, idioms, vocabulary; official (Dafatri) Urdu and terminology',
        'Translation: principles & techniques; translation of official, financial & legal texts (English ↔ Urdu); Urdu public finance/budget terminology',
        'Urdu as national language (Article 251 of the Constitution); Federal budget constitutional provisions (Articles 78–86) & budget documents',
        'Basic concepts of public finance (revenue, expenditure, fiscal deficit, public debt); budget transparency & citizens\' budgets',
        'Editing, proofreading, typography, layout & DTP; Urdu fonts & Unicode; print production, QC & security of printed material',
        'Statistical/financial tables & charts; library/record archiving; speeches & official communication; PPR 2026 (printing); machine translation & digital publishing'
      ]
    },
    'F.4-209/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Microeconomics & macroeconomics (core concepts & policy); development economics (growth models, poverty, inequality, regional development)',
        'Economy of Pakistan & fiscal federalism; development planning (ADP, PSDP, sectoral investment programmes)',
        'Project cycle & planning documents (PC-I to PC-V); project appraisal (financial/economic analysis, feasibility, sensitivity); M&E (logframe, RBM, third-party)',
        'Public finance & budgeting; econometrics, research methodology and case studies',
        'Socio-economic development of Gilgit-Baltistan: tourism, hydropower, agriculture/livestock, minerals, CPEC & connectivity',
        'Disaster risk reduction, climate-resilient mountain development, SDGs localization, glacier melt/GLOFs & public investment management'
      ]
    },
    'F.4-213/2026-R': {
      part: 'Part-B (BS-18 & Above)', totalMarks: 200, duration: '200 Minutes', negativeMarking: '0.25 per wrong answer',
      part1: STD_PART1_200,
      part2Label: 'Part-II: Professional Test (100 Marks)',
      part2Topics: [
        'Test development & construction: test specification, item writing, item analysis, reliability, validity, norms & standardization',
        'Classical test theory and item response theory (IRT); ability/personality test development & problem-solving exercises',
        'Cross-cultural adaptation of psychological tests (translation, back-translation, validation); interpretation in personnel selection & clinical settings',
        'Assessment of intelligence, aptitude & personality (theories, objective & projective techniques)',
        'Personnel selection: job analysis, competency frameworks, structured interviews, group tasks, assessment centres & test battery supervision',
        'Statistical methods in psychology (descriptive/inferential, correlation, regression, ANOVA, factor analysis; SPSS & R); experimental designs & research reports',
        'Ethics in psychological testing (fairness, confidentiality, test security); AI & computer-based testing; recent trends in personnel selection'
      ]
    }
  };

  global.FPSC_PHASE4_2026_SYLLABI = FPSC_PHASE4_2026_SYLLABI;
})(typeof window !== 'undefined' ? window : globalThis);
