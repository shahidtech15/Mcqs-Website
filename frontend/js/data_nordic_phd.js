/**
 * Nordic Funded PhD Positions Directory (Sweden, Norway, Denmark, Finland & Iceland)
 * Special Focus: Natural Sciences (Chemistry, Physics, Biology, Earth & Climate Sciences,
 * Marine Science & Oceanography, Materials Science, Molecular Biosciences, and Mathematics).
 * All Nordic doctoral positions listed follow the Salaried University Employee model (0% tuition).
 */
(function (global) {
  'use strict';

  const NORDIC_COUNTRY_SUMMARY = [
    {
      country: 'Sweden',
      flag: '🇸🇪',
      title: 'Doctoral Student (Doktorandtjänst)',
      duration: '4 Years (up to 5 years with 20% teaching)',
      grossSalary: 'SEK 32,700 – 38,500 / month (~$3,100 – $3,650 / mo)',
      tuitionFee: '0 SEK (100% Free for all nationalities)',
      centralPortalName: 'University Varbi / ReachMee Portals & EURAXESS Sweden',
      centralPortalUrl: 'https://euraxess.ec.europa.eu/jobs/search?f%5B0%5D=job_country%3A794',
      highlights: 'Stepwise salary ladder (increases at 50% and 80% milestones), full Swedish social security, healthcare, paid holiday, and parental leave.'
    },
    {
      country: 'Norway',
      flag: '🇳🇴',
      title: 'PhD Research Fellow (Stipendiat — State Code 1017)',
      duration: '3 Years (pure research) or 4 Years (with 25% teaching)',
      grossSalary: 'NOK 550,800 – 595,000 / year (~$50,000 – $55,000 / yr)',
      tuitionFee: '0 NOK (100% Free at all public universities)',
      centralPortalName: 'Jobbnorge.no (Official Norwegian Academic Job Portal)',
      centralPortalUrl: 'https://www.jobbnorge.no/en/available-jobs',
      highlights: 'All Norwegian public university PhDs are mandatorily posted on Jobbnorge. Includes Statens pensjonskasse (SPK) pension, 5 weeks paid vacation, and family residence permit.'
    },
    {
      country: 'Denmark',
      flag: '🇩🇰',
      title: 'Salaried PhD Fellow (Overenskomst for Akademikere i Staten)',
      duration: '3 Years (5+3 scheme after MS) or 4–5 Years (4+4 / 3+5 integrated track)',
      grossSalary: 'DKK 28,900 – 36,000 / month (~$4,200 – $5,200 / mo) + 17.1% Pension',
      tuitionFee: 'Covered by host faculty / project grant',
      centralPortalName: 'UCPH SCIENCE, Aarhus GSNS (4 fixed calls/yr) & DTU Careers',
      centralPortalUrl: 'https://employment.ku.dk/phd/',
      highlights: 'Highest starting PhD salary in the EU/Nordics under collective union agreement, plus 17.1% employer-paid pension and 6 weeks paid annual vacation.'
    },
    {
      country: 'Finland',
      flag: '🇫🇮',
      title: 'Salaried Doctoral Researcher (Väitöskirjatutkija)',
      duration: '4 Years full-time research employment',
      grossSalary: '€2,450 – €3,450 / month (Job Demand Levels 2–4 + performance bonus)',
      tuitionFee: '0 EUR (No tuition fees for PhD/Doctoral level in Finland)',
      centralPortalName: 'University Open Positions & Studyinfo.fi',
      centralPortalUrl: 'https://www.helsinki.fi/en/about-us/careers/open-positions',
      highlights: 'Dual pathway: university-funded salaried positions (annual calls) and PI project-funded positions (Academy of Finland / ERC / Foundations), with full occupational healthcare.'
    },
    {
      country: 'Iceland',
      flag: '🇮🇸',
      title: 'Salaried Doctoral Fellow (Doktorsnemi / Rannís Fellow)',
      duration: '3 to 4 Years full-time research',
      grossSalary: 'ISK 480,000 – 620,000 / month (~$3,500 – $4,500 / mo)',
      tuitionFee: '0 ISK Tuition (only ISK 75,000/yr registration fee)',
      centralPortalName: 'University of Iceland SENS Vacancies & Rannís IRF',
      centralPortalUrl: 'https://english.hi.is/university/vacancies',
      highlights: 'World-leading natural science fieldwork in Volcanology, Glaciology, Geothermal Chemistry, Marine Biology, and Sub-Arctic Ecology funded by Rannís and UI Doctoral Fund.'
    }
  ];

  const NORDIC_PHD_POSITIONS = [
    // ==================== SWEDEN (8) ====================
    {
      id: 'se-su-science',
      country: 'Sweden',
      flag: '🇸🇪',
      university: 'Stockholm University',
      faculty: 'Faculty of Science (Naturvetenskapliga fakulteten)',
      city: 'Stockholm',
      disciplines: ['Chemistry & Materials', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science', 'Physics, Quantum & Astronomy', 'Marine Science & Oceanography', 'Mathematics & Computational Science'],
      keyDepartments: 'Department of Chemistry (MMK, Organic, Biochemistry), Department of Environmental Science (ACES), Bolin Centre for Climate Research, Department of Physics, Department of Geological Sciences, Baltic Sea Centre, Department of Biology Education & MBW.',
      salary: 'SEK 32,900 – 36,500 / month (4-year Doktorand ladder + social benefits)',
      contractType: '4-Year Salaried University Employment (up to 5 years with 20% teaching)',
      applicationCycle: '4 Fixed Faculty Calls per year (April, October, and rolling project calls)',
      languageReq: 'English proficiency (IELTS 6.5 / TOEFL 90 or English-medium Master\'s degree; no Swedish required)',
      eligibility: '18 years of education (Master\'s degree / 240 ECTS with at least 60 ECTS at second-cycle including an independent 30 ECTS Master\'s thesis in relevant Natural Science).',
      vacancyUrl: 'https://www.su.se/english/about-the-university/work-at-su/available-jobs/phd-student-positions-1.507588',
      highlights: [
        'One of Europe\'s largest Natural Science faculties with Nobel Prize committee links',
        'Home to the Bolin Centre for Climate Research and SciLifeLab molecular biosciences',
        'Centralized Varbi application portal — no application fee, direct project applications'
      ]
    },
    {
      id: 'se-uu-teknat',
      country: 'Sweden',
      flag: '🇸🇪',
      university: 'Uppsala University',
      faculty: 'Faculty of Science and Technology (TekNat)',
      city: 'Uppsala',
      disciplines: ['Chemistry & Materials', 'Biology & Life Sciences', 'Physics, Quantum & Astronomy', 'Earth, Climate & Environmental Science', 'Mathematics & Computational Science'],
      keyDepartments: 'Department of Chemistry – Ångström Laboratory & BMC, Department of Organismal Biology, Ecology and Genetics (IEG), Cell and Molecular Biology (ICM), Department of Earth Sciences (Geophysics, Hydrology, Palaeobiology), Physics and Astronomy.',
      salary: 'SEK 33,000 – 37,200 / month (stepwise collective agreement increases)',
      contractType: '4-Year Full-Time Salaried Doctoral Employment (extendable to 5 years with 20% teaching)',
      applicationCycle: 'Rolling year-round advertisements (peak postings in February–May and September–November)',
      languageReq: 'Strong written and spoken English (no Swedish language requirement for Natural Sciences)',
      eligibility: 'Master\'s degree (240 ECTS) in Chemistry, Biology, Physics, Earth Science, or Mathematics with an experimental or theoretical thesis.',
      vacancyUrl: 'https://www.uu.se/en/about-uu/join-us/jobs',
      highlights: [
        'Scandinavia\'s oldest university (founded 1477) with world-renowned Ångström Laboratory',
        'Strong funding in battery materials, structural biology, evolutionary genetics, and glaciology',
        'Full employee benefits: occupational healthcare, paid vacation, and parental insurance'
      ]
    },
    {
      id: 'se-lu-science',
      country: 'Sweden',
      flag: '🇸🇪',
      university: 'Lund University',
      faculty: 'Faculty of Science (Naturvetenskapliga fakulteten)',
      city: 'Lund',
      disciplines: ['Physics, Quantum & Astronomy', 'Chemistry & Materials', 'Earth, Climate & Environmental Science', 'Biology & Life Sciences', 'Mathematics & Computational Science'],
      keyDepartments: 'Centre for Environmental and Climate Science (CEC), Department of Chemistry (Kemicentrum), Department of Biology, Department of Geology, Physical Geography and Ecosystem Science (INES), Department of Physics & MAX IV Synchrotron Laboratory.',
      salary: 'SEK 33,000 – 37,000 / month + Swedish state employee pension & holiday pay',
      contractType: '4-Year Salaried Doktorand Position',
      applicationCycle: 'Rolling project vacancies via Lund University Varbi portal',
      languageReq: 'English proficiency (documented via degree transcript or IELTS/TOEFL)',
      eligibility: 'Second-cycle Master\'s degree in a Natural Science discipline with at least 30 ECTS independent thesis research.',
      vacancyUrl: 'https://www.lunduniversity.lu.se/vacancies',
      highlights: [
        'Adjacent to MAX IV (world-leading synchrotron X-ray facility) and European Spallation Source (ESS)',
        'Premier European hub for ecosystem modeling, remote sensing, spectroscopy, and Biodiversity',
        'Top-100 global university with active international doctoral researcher community'
      ]
    },
    {
      id: 'se-slu-natural',
      country: 'Sweden',
      flag: '🇸🇪',
      university: 'Swedish University of Agricultural Sciences (SLU)',
      faculty: 'Faculties of Natural Resources, Forest Sciences & Landscape/Env. Sciences',
      city: 'Uppsala, Alnarp & Umeå',
      disciplines: ['Earth, Climate & Environmental Science', 'Biology & Life Sciences', 'Chemistry & Materials', 'Marine Science & Oceanography'],
      keyDepartments: 'Department of Soil and Environment, Department of Aquatic Sciences and Assessment, Department of Ecology, Department of Molecular Sciences, Forest Mycology and Plant Pathology, Department of Aquatic Resources (SLU Aqua).',
      salary: 'SEK 33,000 (Entry) → SEK 35,000 (50% milestone) → SEK 38,000+ (80% milestone) / month',
      contractType: '4-Year Salaried Doctoral Employment',
      applicationCycle: 'Rolling calls year-round on SLU ReachMee vacancy portal',
      languageReq: 'Fluent English (official working language of all SLU research schools)',
      eligibility: 'Master\'s degree in Environmental Science, Biology, Soil Chemistry, Ecology, Microbiology, Forestry, or Biogeochemistry.',
      vacancyUrl: 'https://www.slu.se/en/about-slu/work-at-slu/jobs-vacancies/',
      highlights: [
        'Ranked among the world\'s top 5 universities in Environmental, Ecological, and Agricultural Sciences',
        'Transparent published doctoral salary ladder rising up to SEK 38,000+/month',
        'Extensive fieldwork networks across boreal forests, Baltic waters, and sub-Arctic ecosystems'
      ]
    },
    {
      id: 'se-gu-marine-sci',
      country: 'Sweden',
      flag: '🇸🇪',
      university: 'University of Gothenburg',
      faculty: 'Faculty of Science',
      city: 'Gothenburg (plus Tjärnö & Kristineberg Marine Stations)',
      disciplines: ['Marine Science & Oceanography', 'Chemistry & Materials', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science', 'Physics, Quantum & Astronomy'],
      keyDepartments: 'Department of Marine Sciences, Department of Chemistry and Molecular Biology, Department of Biological and Environmental Sciences (BioEnv), Department of Earth Sciences, Department of Physics.',
      salary: 'SEK 32,800 – 36,800 / month + union-negotiated benefits',
      contractType: '4-Year Salaried Doctoral Studentship',
      applicationCycle: 'Spring (February–April) and Autumn (August–October) main waves + project calls',
      languageReq: 'English proficiency (no Swedish needed)',
      eligibility: '240 ECTS including a Master\'s degree (60 ECTS second-cycle) in Marine Science, Chemistry, Biology, Earth Science, or Physics.',
      vacancyUrl: 'https://www.gu.se/en/work-at-the-university-of-gothenburg/vacancies',
      highlights: [
        'Sweden\'s premier center for Marine Biology, Chemical/Physical Oceanography, and R/V Skagerak research vessel cruises',
        'Strong atmospheric chemistry, biodiversity genomics, and ecotoxicology research clusters',
        'Direct online application through the University of Gothenburg ReachMee portal'
      ]
    },
    {
      id: 'se-kth-cbh-sci',
      country: 'Sweden',
      flag: '🇸🇪',
      university: 'KTH Royal Institute of Technology',
      faculty: 'School of Engineering Sciences (SCI) & School of Chemistry, Biotechnology and Health (CBH)',
      city: 'Stockholm',
      disciplines: ['Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Biology & Life Sciences', 'Mathematics & Computational Science'],
      keyDepartments: 'Department of Chemistry (Organic, Surface, Materials & Green Chemistry), Department of Applied Physics, Department of Physics, Protein Science, Industrial Biotechnology, Fibre and Polymer Technology, Mathematics.',
      salary: 'SEK 33,600 – 38,500 / month',
      contractType: '4 to 5-Year Salaried Doctoral Contract',
      applicationCycle: 'Continuous weekly postings on KTH PhD Vacancies page',
      languageReq: 'English (IELTS 6.5 / TOEFL 90 or exempt via recognized degree)',
      eligibility: 'Master of Science (MSc / MS / MPhil) in Chemistry, Physics, Materials Science, Biotechnology, or Applied Mathematics.',
      vacancyUrl: 'https://www.kth.se/en/om/work-at-kth/lediga-jobb-what:job/jobCategories:phd/',
      highlights: [
        'Dedicated PhD filter on KTH\'s official job board listing 30–60 open funded doctoral positions year-round',
        'Co-founder of SciLifeLab (National Center for Molecular Biosciences) with access to cryo-EM and genomics platforms',
        'High acceptance of international natural science graduates with strong lab/computational skills'
      ]
    },
    {
      id: 'se-umu-kbc',
      country: 'Sweden',
      flag: '🇸🇪',
      university: 'Umeå University',
      faculty: 'Faculty of Science and Technology (KBC & UPSC)',
      city: 'Umeå (plus Abisko Circumpolar Research Station)',
      disciplines: ['Biology & Life Sciences', 'Chemistry & Materials', 'Earth, Climate & Environmental Science', 'Physics, Quantum & Astronomy'],
      keyDepartments: 'Umeå Plant Science Centre (UPSC), Chemical Biological Centre (KBC), Department of Chemistry, Department of Ecology and Environmental Science (EMG), Department of Molecular Biology (home of CRISPR-Cas9 discovery), Department of Physics.',
      salary: 'SEK 32,700 – 36,600 / month',
      contractType: '4-Year Salaried Doctoral Employment',
      applicationCycle: 'Rolling project calls throughout the year',
      languageReq: 'English working environment',
      eligibility: 'Master\'s degree in Molecular Biology, Plant Biology, Chemistry, Ecology, Geoscience, or Physics.',
      vacancyUrl: 'https://www.umu.se/en/work-with-us/open-positions/',
      highlights: [
        'Birthplace of the Nobel Prize-winning CRISPR-Cas9 gene-editing discovery (Emmanuelle Charpentier lab at MIMS/Umeå)',
        'Operates the Climate Impacts Research Centre (CIRC) in Abisko for Arctic permafrost, limnology, and climate change',
        'Interdisciplinary KBC hub uniting chemists, physicists, and molecular biologists under one roof'
      ]
    },
    {
      id: 'se-chalmers-nat',
      country: 'Sweden',
      flag: '🇸🇪',
      university: 'Chalmers University of Technology',
      faculty: 'Departments of Chemistry & Chemical Engineering, Physics, and Life Sciences',
      city: 'Gothenburg',
      disciplines: ['Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science'],
      keyDepartments: 'Department of Chemistry and Chemical Engineering, Department of Physics, Department of Life Sciences (Systems & Synthetic Biology, Food & Biomaterials), Department of Space, Earth and Environment (SEE).',
      salary: 'SEK 34,000 – 38,500 / month',
      contractType: '4 to 5-Year Salaried PhD Position',
      applicationCycle: 'Rolling project vacancies year-round',
      languageReq: 'Fluent English',
      eligibility: 'MSc in Chemistry, Physics, Materials Science, Chemical Biology, or Environmental/Earth Science.',
      vacancyUrl: 'https://www.chalmers.se/en/about-chalmers/working-at-chalmers/vacancies/',
      highlights: [
        'Hosts the Wallenberg Centre for Quantum Technology (WACQT) and Onsala Space Observatory',
        'Strong catalysis, battery electrochemistry, atmospheric remote sensing, and synthetic biology fellowships',
        'Competitive starting salaries and direct industry/academic research collaborations'
      ]
    },

    // ==================== NORWAY (7) ====================
    {
      id: 'no-jobbnorge-all',
      country: 'Norway',
      flag: '🇳🇴',
      university: 'Jobbnorge — National Norwegian PhD Portal (All Universities)',
      faculty: 'All Norwegian Faculties of Natural Sciences, Biosciences, Physics, Chemistry & Geosciences',
      city: 'Oslo, Bergen, Trondheim, Tromsø, Ås & Stavanger',
      disciplines: ['Chemistry & Materials', 'Biology & Life Sciences', 'Physics, Quantum & Astronomy', 'Earth, Climate & Environmental Science', 'Marine Science & Oceanography', 'Mathematics & Computational Science'],
      keyDepartments: 'Aggregates all State Position Code 1017 (PhD Research Fellow / Stipendiat) openings across UiO, NTNU, UiB, UiT, NMBU, UiS, UiA, Nord University, and independent institutes (NIVA, NILU, NINA, Simula).',
      salary: 'NOK 550,800 – 595,000 / year (~$50,000 – $55,000 / yr gross)',
      contractType: '3-Year Pure Research OR 4-Year Contract (with 25% teaching)',
      applicationCycle: 'Daily new postings year-round (filter by "Research fellow / PhD candidate")',
      languageReq: 'English (IELTS/TOEFL or English-taught Master\'s; Norwegian not required for Natural Sciences)',
      eligibility: '5-year Master\'s degree (or 3+2 BSc+MSc totaling 300 ECTS / 18 years education) with grade B or better on the ECTS scale.',
      vacancyUrl: 'https://www.jobbnorge.no/en/available-jobs',
      highlights: [
        'Single centralized portal where ~95% of all funded Norwegian PhD vacancies are legally advertised',
        'Create one Jobbnorge CV profile and apply directly to multiple natural science PhD fellowships with zero fee',
        'Full Norwegian state employee status with SPK pension, 5 weeks holiday, and family immigration eligibility'
      ]
    },
    {
      id: 'no-uio-mn',
      country: 'Norway',
      flag: '🇳🇴',
      university: 'University of Oslo (UiO)',
      faculty: 'Faculty of Mathematics and Natural Sciences (Det matematisk-naturvitenskapelige fakultet)',
      city: 'Oslo',
      disciplines: ['Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science', 'Mathematics & Computational Science'],
      keyDepartments: 'Department of Chemistry & Hylleraas Centre for Quantum Molecular Sciences, Department of Biosciences (IBV), Department of Geosciences, Department of Physics, Centre for Materials Science and Nanotechnology (SMN), Institute of Theoretical Astrophysics.',
      salary: 'NOK 550,800 – 595,000 / year + Norwegian Public Service Pension Fund (SPK)',
      contractType: '3 to 4-Year Salaried PhD Research Fellowship (Code 1017)',
      applicationCycle: 'Rolling calls throughout the year on UiO MN Vacancies page',
      languageReq: 'English (IELTS 6.5 / TOEFL 90 or exempt criteria; exemptions common for CompSci/Physics/Chem project calls)',
      eligibility: 'Master\'s degree equivalent to a Norwegian 2-year Master\'s (120 ECTS) following a 3-year Bachelor\'s (180 ECTS) with strong thesis grade.',
      vacancyUrl: 'https://www.mn.uio.no/english/about/vacancies/',
      highlights: [
        'Norway\'s highest-ranked university with 9 Centres of Excellence in Natural Sciences',
        'CompSci and several natural science departments frequently waive formal IELTS if English competence is demonstrated in interview/thesis',
        'Generous research travel and laboratory operating budgets included with every fellowship'
      ]
    },
    {
      id: 'no-uib-climate-marine',
      country: 'Norway',
      flag: '🇳🇴',
      university: 'University of Bergen (UiB)',
      faculty: 'Faculty of Mathematics and Natural Sciences & Bjerknes Centre for Climate Research',
      city: 'Bergen',
      disciplines: ['Marine Science & Oceanography', 'Earth, Climate & Environmental Science', 'Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy'],
      keyDepartments: 'Department of Biological Sciences (BIO), Geophysical Institute, Department of Earth Science, Center for Deep Sea Research, Department of Chemistry, Department of Physics and Technology, Molecular Biology.',
      salary: 'NOK 550,800 – 590,000 / year',
      contractType: '3 or 4-Year Salaried PhD Research Fellow Contract',
      applicationCycle: 'Continuous postings via UiB Vacancies & Jobbnorge',
      languageReq: 'Fluent English',
      eligibility: 'Master\'s degree in Oceanography, Meteorology, Geology, Marine Biology, Chemistry, Molecular Biology, or Physics.',
      vacancyUrl: 'https://www.uib.no/en/about/84777/vacant-positions-uib',
      highlights: [
        'Home to the Bjerknes Centre for Climate Research — Europe\'s premier polar and ocean-climate research center',
        'World leader in Deep-Sea Hydrothermal Vents, Marine Biodiversity, Fjord Ecology, and Paleoclimatology',
        'Access to ocean-going research vessels (R/V Kronprins Haakon & G.O. Sars)'
      ]
    },
    {
      id: 'no-ntnu-nv',
      country: 'Norway',
      flag: '🇳🇴',
      university: 'Norwegian University of Science and Technology (NTNU)',
      faculty: 'Faculty of Natural Sciences (Fakultet for naturvitenskap - NV)',
      city: 'Trondheim',
      disciplines: ['Chemistry & Materials', 'Biology & Life Sciences', 'Physics, Quantum & Astronomy', 'Earth, Climate & Environmental Science', 'Marine Science & Oceanography'],
      keyDepartments: 'Department of Chemistry, Department of Biology, Department of Biotechnology and Food Science, Department of Physics, Department of Materials Science and Engineering, NTNU University Museum (Natural History & Biodiversity).',
      salary: 'NOK 550,800 – 595,000 / year',
      contractType: '3 or 4-Year Salaried PhD Fellowship',
      applicationCycle: 'Rolling year-round calls on NTNU Vacancies portal',
      languageReq: 'English proficiency',
      eligibility: 'Master\'s degree in Natural Sciences or Chemical/Materials Engineering with average grade B or equivalent.',
      vacancyUrl: 'https://www.ntnu.edu/vacancies',
      highlights: [
        'Norway\'s largest technical and natural science university with state-of-the-art NanoLab and coastal marine labs',
        'High volume of Research Council of Norway (RCN) and EU Horizon Europe funded PhD openings',
        'Strong focus on green chemistry, catalysis, environmental toxicology, and quantum physics'
      ]
    },
    {
      id: 'no-uit-arctic',
      country: 'Norway',
      flag: '🇳🇴',
      university: 'UiT The Arctic University of Norway',
      faculty: 'Faculty of Science and Technology & Faculty of Biosciences, Fisheries and Economics (BFE)',
      city: 'Tromsø',
      disciplines: ['Earth, Climate & Environmental Science', 'Marine Science & Oceanography', 'Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy'],
      keyDepartments: 'Department of Arctic and Marine Biology (AMB), Department of Geosciences (iC3 Centre for Ice, Cryosphere, Carbon and Climate), Department of Chemistry (Marbio Marine Bioprospecting), Department of Physics and Technology (Space & Aurora Physics).',
      salary: 'NOK 550,800 – 590,000 / year (plus Northern Norway tax incentives in select municipalities)',
      contractType: '3 to 4-Year Salaried PhD Research Fellow',
      applicationCycle: 'Rolling project vacancies via UiT / Jobbnorge',
      languageReq: 'English',
      eligibility: 'Master\'s degree in Biology, Marine Science, Geology, Glaciology, Chemistry, or Atmospheric/Space Physics.',
      vacancyUrl: 'https://en.uit.no/om/enhet/artikkel?p_document_id=343536&p_dimension_id=210121',
      highlights: [
        'World\'s northernmost university, specializing in Arctic Ecology, Glaciology, Methane Hydrates, and Marine Natural Products Chemistry',
        'Hosts the iC3 Centre of Excellence studying polar ice sheets, carbon cycles, and microbial biogeochemistry',
        'Regular Arctic scientific expeditions aboard polar icebreaker R/V Kronprins Haakon'
      ]
    },
    {
      id: 'no-nmbu-mina-kbm',
      country: 'Norway',
      flag: '🇳🇴',
      university: 'Norwegian University of Life Sciences (NMBU)',
      faculty: 'Faculty of Environmental Sciences & Natural Resource Management (MINA) and Faculty of Chemistry, Biotechnology & Food Science (KBM)',
      city: 'Ås (Greater Oslo Region)',
      disciplines: ['Earth, Climate & Environmental Science', 'Biology & Life Sciences', 'Chemistry & Materials'],
      keyDepartments: 'Environmental Chemistry, Radioecology (CERAD), Ecology & Natural Resource Management, Soil & Water Science, Enzymology & Protein Chemistry, Microbial Biotechnology, Plant Genetics.',
      salary: 'NOK 550,800 – 585,000 / year',
      contractType: '3 to 4-Year Salaried PhD Fellowship',
      applicationCycle: 'Rolling calls year-round on NMBU Vacancies & Jobbnorge',
      languageReq: 'English',
      eligibility: 'Master\'s degree (120 ECTS) in Environmental Science, Chemistry, Ecology, Biochemistry, Microbiology, or Soil/Water Science.',
      vacancyUrl: 'https://www.nmbu.no/en/about/vacancies',
      highlights: [
        'Norway\'s premier campus for Environmental Chemistry, Radioecology, Biodiversity Conservation, and Biorefinery Enzymology',
        '30 minutes by train from central Oslo with modern bioscience and isotope laboratories',
        'Welcoming international doctoral environment where all PhD coursework is delivered in English'
      ]
    },
    {
      id: 'no-uis-nat',
      country: 'Norway',
      flag: '🇳🇴',
      university: 'University of Stavanger (UiS)',
      faculty: 'Faculty of Science and Technology',
      city: 'Stavanger',
      disciplines: ['Chemistry & Materials', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science', 'Physics, Quantum & Astronomy'],
      keyDepartments: 'Department of Chemistry, Bioscience and Environmental Engineering (KBMP), Department of Mathematics and Physics, Department of Energy and Petroleum/Subsurface Geosciences.',
      salary: 'NOK 550,800 – 585,000 / year',
      contractType: '3-Year Salaried PhD Research Fellowship',
      applicationCycle: 'Rolling calls throughout the year',
      languageReq: 'English (IELTS 6.5 / TOEFL 90 or exempt degree)',
      eligibility: '5-year integrated or 3+2 Master\'s degree in Chemistry, Molecular Biology, Environmental Science, Geosciences, or Physics.',
      vacancyUrl: 'https://www.uis.no/en/about-uis/vacant-positions',
      highlights: [
        'Rapidly growing research groups in Environmental Water Chemistry, Biological Chemistry, and Cosmology/Particle Physics',
        'Strong funding for green energy transition, carbon capture geosciences, and ecotoxicology'
      ]
    },

    // ==================== DENMARK (7) ====================
    {
      id: 'dk-ucph-science',
      country: 'Denmark',
      flag: '🇩🇰',
      university: 'University of Copenhagen (UCPH / Københavns Universitet)',
      faculty: 'Faculty of SCIENCE (Det Natur- og Biovidenskabelige Fakultet)',
      city: 'Copenhagen',
      disciplines: ['Physics, Quantum & Astronomy', 'Chemistry & Materials', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science', 'Marine Science & Oceanography', 'Mathematics & Computational Science'],
      keyDepartments: 'Niels Bohr Institute (Physics, Quantum, Ice & Climate), Department of Chemistry, Department of Biology, Department of Plant and Environmental Sciences (PLEN), Department of Geosciences and Natural Resource Management (IGN), Globe Institute, Mathematical Sciences.',
      salary: 'DKK 28,900 – 35,500 / month (~$4,200 – $5,100 / mo) + 17.1% employer pension',
      contractType: '3-Year Salaried PhD Employment (5+3 scheme) or 4–5 Year Integrated PhD (3+5 / 4+4 scheme for BSc+MSc applicants)',
      applicationCycle: 'Continuous daily project calls on UCPH Job Portal',
      languageReq: 'English proficiency (IELTS/TOEFL or waiver based on English-medium instruction and interview)',
      eligibility: 'For 5+3: 18-year Master\'s degree. For 3+5 / 4+4 Integrated PhD: Strong 4-year BSc (Hons) or 16-year degree holders can also apply!',
      vacancyUrl: 'https://employment.ku.dk/phd/',
      highlights: [
        'Scandinavia\'s largest natural science research faculty, including the historic Niels Bohr Institute',
        'Offers the unique "Integrated PhD (3+5 / 4+4)" scheme allowing outstanding 4-year BS graduates to enter directly before finishing a full 2-year MSc',
        'Top European salary scale plus 17.1% pension and free Danish public healthcare (Yellow Card)'
      ]
    },
    {
      id: 'dk-au-gsns',
      country: 'Denmark',
      flag: '🇩🇰',
      university: 'Aarhus University',
      faculty: 'Graduate School of Natural Sciences (GSNS)',
      city: 'Aarhus',
      disciplines: ['Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Earth, Climate & Environmental Science', 'Mathematics & Computational Science'],
      keyDepartments: 'Biology, Chemistry, Computer Science, Geoscience, Mathematics, Molecular Biology and Genetics (MBG), Nanoscience (iNANO), Physics and Astronomy.',
      salary: 'DKK 29,000 – 35,000 / month + 17.1% Pension',
      contractType: '3-Year (5+3) or 4/5-Year (4+4 / 3+5) Salaried PhD Fellowship',
      applicationCycle: '4 Fixed Annual Deadlines: 1 February, 1 May, 1 August, and 1 November',
      languageReq: 'English (TOEFL 83 / IELTS 6.5 or exempt criteria)',
      eligibility: 'Open to both Master\'s graduates (3-year track) and top Bachelor\'s/first-year Master\'s students (4-year/5-year track).',
      vacancyUrl: 'https://phd.nat.au.dk/for-applicants/open-And-specific-calls',
      highlights: [
        'Predictable 4-times-a-year application deadlines (Feb 1, May 1, Aug 1, Nov 1) combining Open Calls and Specific Project Calls',
        'Accepts candidates with a 4-year Bachelor\'s degree into the 4+4 / 3+5 track (first phase on SU PhD grant, second phase on full salaried employment)',
        'Home to the Interdisciplinary Nanoscience Center (iNANO) and Aarhus Institute of Advanced Studies'
      ]
    },
    {
      id: 'dk-dtu-nat',
      country: 'Denmark',
      flag: '🇩🇰',
      university: 'Technical University of Denmark (DTU)',
      faculty: 'DTU Chemistry, DTU Physics, DTU Aqua, DTU Sustain & DTU Bioengineering',
      city: 'Kongens Lyngby (Greater Copenhagen)',
      disciplines: ['Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Marine Science & Oceanography', 'Earth, Climate & Environmental Science', 'Biology & Life Sciences'],
      keyDepartments: 'DTU Chemistry (Organic, Inorganic & Physical Chemistry), DTU Physics (Quantum & Catalysis), DTU Aqua (National Institute of Aquatic Resources & Oceanography), DTU Sustain (Environmental Science), DTU Bioengineering.',
      salary: 'DKK 30,000 – 36,000 / month + 17.1% Pension',
      contractType: '3-Year Salaried PhD Employment',
      applicationCycle: 'Continuous weekly vacancies on DTU Career Portal',
      languageReq: 'Fluent English',
      eligibility: '2-year Master\'s degree (120 ECTS) following a 3-year Bachelor\'s (180 ECTS) in Natural Sciences or Engineering.',
      vacancyUrl: 'https://www.dtu.dk/english/about/job-and-career/vacant-positions',
      highlights: [
        'Leading European hub for Green Catalysis, Quantum Sensing, Marine/Fisheries Science (DTU Aqua), and Environmental Biotechnology',
        'Generous funding for international research stays (external 3–6 month global lab exchange encouraged for all DTU PhDs)'
      ]
    },
    {
      id: 'dk-sdu-nat',
      country: 'Denmark',
      flag: '🇩🇰',
      university: 'University of Southern Denmark (SDU)',
      faculty: 'Faculty of Science (Det Naturvidenskabelige Fakultet - NAT)',
      city: 'Odense',
      disciplines: ['Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Marine Science & Oceanography', 'Earth, Climate & Environmental Science'],
      keyDepartments: 'Department of Biology (Nordcee Biogeochemistry & Marine Ecology), Department of Physics, Chemistry and Pharmacy (FKF), Department of Biochemistry and Molecular Biology (BMB), SDU Climate Cluster.',
      salary: 'DKK 29,000 – 34,800 / month + Pension',
      contractType: '3-Year (5+3) or 4-Year (4+4) Salaried PhD Position',
      applicationCycle: 'Rolling project calls year-round',
      languageReq: 'English',
      eligibility: 'Master\'s degree in Biology, Biogeochemistry, Chemistry, Biochemistry, Physics, or Mathematics.',
      vacancyUrl: 'https://www.sdu.dk/en/om_sdu/fakulteterne/naturvidenskab/phd',
      highlights: [
        'Home to Nordcee (Nordic Center for Earth Evolution), a global leader in geomicrobiology, ocean oxygenation, and biogeochemical cycles',
        'World-class mass spectrometry and proteomics infrastructure in the Department of Biochemistry and Molecular Biology'
      ]
    },
    {
      id: 'dk-aau-bio-chem',
      country: 'Denmark',
      flag: '🇩🇰',
      university: 'Aalborg University (AAU)',
      faculty: 'Doctoral School of Engineering and Science',
      city: 'Aalborg',
      disciplines: ['Chemistry & Materials', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science', 'Physics, Quantum & Astronomy'],
      keyDepartments: 'Department of Chemistry and Bioscience (Center for Microbial Communities), Department of Materials and Production (Glass & Ceramic Chemistry, Nanomaterials), Department of Sustainability and Planning.',
      salary: 'DKK 29,000 – 35,000 / month + Pension',
      contractType: '3-Year Salaried PhD Stipend / Employment',
      applicationCycle: 'Rolling vacancies on AAU PhD job portal',
      languageReq: 'English',
      eligibility: 'Master\'s degree (18 years education) in Chemistry, Environmental Biology, Microbiology, Biotechnology, or Materials Physics.',
      vacancyUrl: 'https://www.stillinger.aau.dk/phd-positions',
      highlights: [
        'Global pioneer in Environmental Microbiology, Metagenomics, and Water/Wastewater Biogeochemistry',
        'Problem-based collaborative research culture with high international doctoral recruitment'
      ]
    },
    {
      id: 'dk-ruc-inm',
      country: 'Denmark',
      flag: '🇩🇰',
      university: 'Roskilde University (RUC)',
      faculty: 'Department of Science and Environment (Institut for Naturvidenskab og Miljø - INM)',
      city: 'Roskilde (25 mins from Copenhagen)',
      disciplines: ['Earth, Climate & Environmental Science', 'Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy'],
      keyDepartments: 'Environmental Dynamics & Ecotoxicology, Molecular and Medical Biology, Chemistry, Physics and Mathematics (Glass & Soft Matter Physics).',
      salary: 'DKK 28,900 – 34,500 / month + Pension',
      contractType: '3-Year Salaried PhD Position',
      applicationCycle: 'Periodic project calls',
      languageReq: 'English',
      eligibility: 'Master\'s degree in Environmental Biology, Chemistry, Physics, Ecotoxicology, or Molecular Biology.',
      vacancyUrl: 'https://ruc.dk/en/vacant-positions-roskilde-university',
      highlights: [
        'Renowned for microplastics/ecotoxicology research, soft-matter physics ("Glass and Time" center), and medicinal chemistry'
      ]
    },
    {
      id: 'dk-nnf-copenhagen-biosustain',
      country: 'Denmark',
      flag: '🇩🇰',
      university: 'Novo Nordisk Foundation Research Centers (DTU Biosustain & UCPH CPR/CBMR)',
      faculty: 'Copenhagen Bioscience & Natural Science Centers',
      city: 'Copenhagen & Lyngby',
      disciplines: ['Biology & Life Sciences', 'Chemistry & Materials', 'Mathematics & Computational Science'],
      keyDepartments: 'Novo Nordisk Foundation Center for Biosustainability (Natural Products, Microbial Foods, Sustainable Chemicals), Center for Protein Research (CPR), Center for Stem Cell Medicine (reNEW), Quantum Foundry.',
      salary: 'DKK 30,000 – 36,000 / month + Pension & full research consumables grant',
      contractType: '3 to 4-Year Fully-Funded Salaried PhD Fellowship',
      applicationCycle: 'Annual & rolling project fellowships',
      languageReq: 'Fluent English',
      eligibility: 'Master\'s degree in Biochemistry, Organic/Analytical Chemistry, Molecular Biology, Bioinformatics, or Physics.',
      vacancyUrl: 'https://www.biosustain.dtu.dk/job-and-career/open-positions',
      highlights: [
        'Backed by the Novo Nordisk Foundation (world\'s largest charitable scientific foundation)',
        'Cutting-edge facilities in green biomanufacturing, natural product discovery, protein chemistry, and quantum computing'
      ]
    },

    // ==================== FINLAND (7) ====================
    {
      id: 'fi-uh-science',
      country: 'Finland',
      flag: '🇫🇮',
      university: 'University of Helsinki',
      faculty: 'Faculty of Science & Faculty of Biological and Environmental Sciences (UHDS)',
      city: 'Helsinki',
      disciplines: ['Earth, Climate & Environmental Science', 'Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Biology & Life Sciences', 'Marine Science & Oceanography', 'Mathematics & Computational Science'],
      keyDepartments: 'Institute for Atmospheric and Earth System Research (INAR), Department of Chemistry, Department of Physics, Department of Geosciences and Geography, Organismal and Evolutionary Biology, Ecosystems and Environment, Tvärminne Zoological Station.',
      salary: '€2,450 – €3,300 / month (4-year salaried Doctoral Researcher contract)',
      contractType: '4-Year Salaried Employment (University-funded annual call + PI project calls)',
      applicationCycle: 'Main University-Funded Salaried Call: August–September annually + year-round PI grant calls',
      languageReq: 'English (IELTS 6.5 / TOEFL 92 or exempt degree)',
      eligibility: 'Second-cycle Master\'s degree in a relevant Natural Science discipline.',
      vacancyUrl: 'https://www.helsinki.fi/en/about-us/careers/open-positions',
      highlights: [
        'Finland\'s #1 university and home to INAR (world leader in Atmospheric Physics, Aerosols, Boreal Forest Carbon Fluxes & Climate Change)',
        'Doctoral Programmes include ATM-DP (Atmospheric Sciences), CHEMS (Chemistry & Molecular Sciences), MATRENA (Materials & Physics), and LUOVA (Wildlife Biology)',
        'Zero tuition fees and full Finnish occupational healthcare (Mehiläinen/Terveystalo)'
      ]
    },
    {
      id: 'fi-aalto-sci-chem',
      country: 'Finland',
      flag: '🇫🇮',
      university: 'Aalto University',
      faculty: 'School of Science (SCI) & School of Chemical Engineering (CHEM)',
      city: 'Espoo (Greater Helsinki)',
      disciplines: ['Physics, Quantum & Astronomy', 'Chemistry & Materials', 'Biology & Life Sciences', 'Mathematics & Computational Science'],
      keyDepartments: 'Department of Applied Physics (Quantum Technology Finland, Low-Temperature Lab, Nanomaterials), Department of Chemistry and Materials Science, Department of Bioproducts and Biosystems, Department of Mathematics and Systems Analysis.',
      salary: '€2,600 – €3,450 / month',
      contractType: '4-Year Salaried Doctoral Researcher Contract (2+2 structure)',
      applicationCycle: 'Continuous open positions + joint Physics/Chemistry winter & spring calls',
      languageReq: 'English',
      eligibility: 'Master\'s degree (MSc) in Physics, Chemistry, Materials Science, Bioproducts, or Applied Mathematics with strong grades.',
      vacancyUrl: 'https://www.aalto.fi/en/open-positions',
      highlights: [
        'Hosts OtaNano and the world-record Low Temperature Laboratory (quantum phenomena, superconductors, 2D materials)',
        'Pioneering green biomaterial chemistry (cellulose/lignin valorization, battery recycling, and electrocatalysis)',
        'Fast-track 4-year salaried doctoral employment without separate GRE requirements'
      ]
    },
    {
      id: 'fi-utu-science',
      country: 'Finland',
      flag: '🇫🇮',
      university: 'University of Turku (UTU)',
      faculty: 'Faculty of Science (UTUGS Doctoral Programmes EXACTS & BGG)',
      city: 'Turku (plus Archipelago Sea & Kevo Subarctic Stations)',
      disciplines: ['Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Earth, Climate & Environmental Science', 'Marine Science & Oceanography'],
      keyDepartments: 'Department of Biology (Ecology, Evolutionary Biology, Molecular Plant Biology/Photosynthesis), Department of Chemistry (Natural Compound Chemistry, Materials Chemistry), Department of Physics and Astronomy, Department of Geography and Geology, Biodiversity Unit.',
      salary: '€2,450 – €3,250 / month',
      contractType: 'Up to 4-Year Salaried Doctoral Researcher Position / Foundation Grant',
      applicationCycle: 'UTUGS Salaried Positions Call in August–September + rolling PI vacancies',
      languageReq: 'English',
      eligibility: 'Master\'s degree in Biology, Plant Biochemistry, Chemistry, Physics, Astronomy, Geology, or Geography.',
      vacancyUrl: 'https://www.utu.fi/en/university/come-work-for-us/open-vacancies',
      highlights: [
        'Internationally renowned for Photosynthesis & Bioenergy research (Molecular Plant Biology) and Polyphenol/Natural Products Chemistry',
        'Operates Kevo Subarctic Research Institute in Lapland and Archipelago Research Institute on the Baltic Sea'
      ]
    },
    {
      id: 'fi-oulu-uniogs',
      country: 'Finland',
      flag: '🇫🇮',
      university: 'University of Oulu',
      faculty: 'University of Oulu Graduate School (UniOGS) — Technology and Natural Sciences',
      city: 'Oulu',
      disciplines: ['Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Earth, Climate & Environmental Science'],
      keyDepartments: 'Ecology and Genetics Research Unit, Sustainable Chemistry Research Unit, Space Physics and Astronomy (Sodankylä Geophysical Observatory), Oulu Mining School & Geosciences, Biochemistry and Molecular Medicine.',
      salary: '€2,450 – €3,250 / month',
      contractType: '4-Year Salaried Doctoral Researcher Position',
      applicationCycle: 'Rolling calls year-round on University of Oulu Open Positions portal',
      languageReq: 'English',
      eligibility: 'Master\'s degree in Ecology, Genetics, Biochemistry, Chemistry, Physics, Geosciences, or Environmental Science.',
      vacancyUrl: 'https://www.oulu.fi/en/university/as-an-employer/open-positions',
      highlights: [
        'Major recruiter of international doctoral researchers under Finland\'s national doctoral pilot and EU Horizon calls',
        'Strong research in Arctic space physics, green catalysis, water/peatland hydrology, and conservation genomics'
      ]
    },
    {
      id: 'fi-jyu-science',
      country: 'Finland',
      flag: '🇫🇮',
      university: 'University of Jyväskylä (JYU)',
      faculty: 'Faculty of Mathematics and Science',
      city: 'Jyväskylä',
      disciplines: ['Physics, Quantum & Astronomy', 'Chemistry & Materials', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science', 'Mathematics & Computational Science'],
      keyDepartments: 'Department of Physics (Accelerator Laboratory JYFL), Department of Chemistry (Supramolecular & Circular Economy Chemistry), Department of Biological and Environmental Science (Aquatic Sciences, Evolutionary Ecology, Cell & Molecular Biology), Nanoscience Center (NSC).',
      salary: '€2,450 – €3,250 / month',
      contractType: '4-Year Salaried Doctoral Researcher Position',
      applicationCycle: 'Spring and Autumn faculty calls + rolling project positions',
      languageReq: 'English',
      eligibility: 'Master\'s degree in Physics, Chemistry, Nanoscience, Ecology, Aquatic Science, or Molecular Biology.',
      vacancyUrl: 'https://www.jyu.fi/en/work-with-us',
      highlights: [
        'Home to the JYFL Accelerator Laboratory (international user facility for nuclear physics and ion-beam materials science)',
        'Interdisciplinary Nanoscience Center (NSC) integrating physicists, chemists, and structural biologists'
      ]
    },
    {
      id: 'fi-uef-lumeto',
      country: 'Finland',
      flag: '🇫🇮',
      university: 'University of Eastern Finland (UEF)',
      faculty: 'Faculty of Science, Forestry and Technology (LUMETO)',
      city: 'Joensuu & Kuopio',
      disciplines: ['Earth, Climate & Environmental Science', 'Biology & Life Sciences', 'Physics, Quantum & Astronomy', 'Chemistry & Materials'],
      keyDepartments: 'Department of Environmental and Biological Sciences (Aerosol Physics, Climate Change, Ecotoxicology, Aquatic Biology), School of Forest Sciences, Department of Chemistry, Department of Technical Physics & Institute of Photonics.',
      salary: '€2,450 – €3,200 / month',
      contractType: 'Salaried Early-Stage / Doctoral Researcher Contract',
      applicationCycle: 'Rolling vacancies via UEF Laura recruitment portal',
      languageReq: 'English',
      eligibility: 'Master\'s degree in Environmental Science, Biology, Forestry, Atmospheric Physics, Photonics, or Chemistry.',
      vacancyUrl: 'https://www.uef.fi/en/open-positions',
      highlights: [
        'Global hub for Boreal Forest Ecology, Atmospheric Aerosols, Photonics, and Environmental Health',
        'Affordable living cost in Joensuu/Kuopio paired with full national university salary scale'
      ]
    },
    {
      id: 'fi-abo-fnt',
      country: 'Finland',
      flag: '🇫🇮',
      university: 'Åbo Akademi University',
      faculty: 'Faculty of Science and Engineering (FNT)',
      city: 'Turku & Vaasa',
      disciplines: ['Chemistry & Materials', 'Biology & Life Sciences', 'Marine Science & Oceanography', 'Earth, Climate & Environmental Science'],
      keyDepartments: 'Environmental and Marine Biology, Analytical Chemistry (Sensor Technology), Organic & Wood/Biomass Chemistry, Cell Biology, Geology and Mineralogy, Physics.',
      salary: '€2,400 – €3,200 / month',
      contractType: 'Salaried Doctoral Researcher / Foundation-Funded Fellowship',
      applicationCycle: 'Rolling calls + annual winter graduate school calls',
      languageReq: 'English (research and PhD supervision conducted fully in English)',
      eligibility: 'Master\'s degree in Chemistry, Marine Biology, Geology, Biosciences, or Physics.',
      vacancyUrl: 'https://www.abo.fi/en/about-abo-akademi-university/come-work-with-us/',
      highlights: [
        'Leading Nordic center for Chemical Sensors, Biomass/Lignin Chemistry, and Baltic Sea Marine Biology'
      ]
    },

    // ==================== ICELAND (6) ====================
    {
      id: 'is-hi-sens',
      country: 'Iceland',
      flag: '🇮🇸',
      university: 'University of Iceland (Háskóli Íslands)',
      faculty: 'School of Engineering and Natural Sciences (SENS / Verkfræði- og náttúruvísindasvið)',
      city: 'Reykjavík',
      disciplines: ['Earth, Climate & Environmental Science', 'Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Marine Science & Oceanography'],
      keyDepartments: 'Faculty of Earth Sciences (Volcanology, Geophysics, Glaciology, Geochemistry), Faculty of Life and Environmental Sciences (Marine & Freshwater Biology, Ecology, Genetics), Faculty of Physical Sciences (Chemistry, Physics, Biochemistry, Mathematics).',
      salary: 'ISK 480,000 – 620,000 / month (~$3,500 – $4,500 / mo)',
      contractType: '3 to 4-Year Salaried PhD Student / Research Fellow Position',
      applicationCycle: 'Rolling vacancies year-round on University of Iceland Careers page',
      languageReq: 'Fluent English (all Natural Science PhD theses and courses are in English)',
      eligibility: 'Master\'s degree (120 ECTS MSc) in Geology, Geophysics, Environmental Science, Biology, Chemistry, Biochemistry, or Physics.',
      vacancyUrl: 'https://english.hi.is/university/vacancies',
      highlights: [
        'Unrivaled natural laboratory on the Mid-Atlantic Ridge for active Volcanology, Glaciology, Basalt Carbon Mineralization (CarbFix), and Geothermal Geochemistry',
        'No tuition fees at the University of Iceland (only an annual registration fee of ISK 75,000 / ~$540)',
        'Direct collaboration with the Institute of Earth Sciences and deCODE Genetics'
      ]
    },
    {
      id: 'is-rannis-irf',
      country: 'Iceland',
      flag: '🇮🇸',
      university: 'Rannís — The Icelandic Research Fund (IRF) Doctoral Grants',
      faculty: 'All Icelandic Universities & Natural Science Research Institutes',
      city: 'Reykjavík, Akureyri & Nationwide',
      disciplines: ['Earth, Climate & Environmental Science', 'Marine Science & Oceanography', 'Biology & Life Sciences', 'Chemistry & Materials', 'Physics, Quantum & Astronomy'],
      keyDepartments: 'Funds 3-year PhD fellowships embedded in PI grants across University of Iceland, Reykjavik University, Agricultural University of Iceland, University of Akureyri, and Marine & Freshwater Research Institute.',
      salary: 'ISK 490,000 – 580,000 / month + research travel & lab consumables',
      contractType: '3-Year Rannís Doctoral Student Grant / Salaried Contract',
      applicationCycle: 'PI grants awarded early spring → PhD positions advertised March–June & rolling',
      languageReq: 'English',
      eligibility: 'Master\'s degree in a Natural Science field; applicants either apply to advertised IRF-funded PI openings or co-develop a Doctoral Student Grant with an Icelandic supervisor.',
      vacancyUrl: 'https://en.rannis.is/funding/research/icelandic-research-fund/',
      highlights: [
        'Primary funding engine for Natural Science PhDs in Iceland',
        'Proactive tip: Check Rannís\'s newly awarded "Project Grants" list each spring and email winning Natural Science PIs before positions are widely advertised!'
      ]
    },
    {
      id: 'is-hi-eimskip-fund',
      country: 'Iceland',
      flag: '🇮🇸',
      university: 'University of Iceland Doctoral Grants Fund (Eimskip University Fund)',
      faculty: 'School of Engineering and Natural Sciences (SENS)',
      city: 'Reykjavík',
      disciplines: ['Chemistry & Materials', 'Physics, Quantum & Astronomy', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science', 'Mathematics & Computational Science'],
      keyDepartments: 'Science Institute (Raunvísindastofnun — Chemistry, Physics, Mathematics), Institute of Earth Sciences, Institute of Life and Environmental Sciences.',
      salary: 'Full 36-Month University of Iceland Doctoral Salary Scale + research grant',
      contractType: '3-Year Funded Doctoral Fellowship',
      applicationCycle: 'Annual spring cycle (typically January–March via prospective UI supervisor)',
      languageReq: 'English',
      eligibility: 'Outstanding Master\'s degree holders with a confirmed University of Iceland Natural Science supervisor.',
      vacancyUrl: 'https://english.hi.is/school_of_engineering_and_natural_sciences/phd_studies',
      highlights: [
        'Dedicated internal university fund supporting top international and domestic PhD projects across Chemistry, Physics, Biology, and Earth Sciences'
      ]
    },
    {
      id: 'is-lbhi-env',
      country: 'Iceland',
      flag: '🇮🇸',
      university: 'Agricultural University of Iceland (LBHÍ / Landbúnaðarháskóli Íslands)',
      faculty: 'Faculty of Environmental and Forest Sciences & Faculty of Agricultural Sciences',
      city: 'Hvanneyri & Reykjavík (Keldnaholt)',
      disciplines: ['Earth, Climate & Environmental Science', 'Biology & Life Sciences', 'Chemistry & Materials'],
      keyDepartments: 'Soil Conservation & Volcanic Soil Geochemistry (Andosols), Ecosystem Restoration, Sub-Arctic Ecology, Plant Genetics, Greenhouse Gas Fluxes from Peatlands & Wetlands.',
      salary: 'ISK 480,000 – 570,000 / month (Rannís / EU Horizon project salary)',
      contractType: '3-Year Funded PhD Position',
      applicationCycle: 'Project-based calls year-round',
      languageReq: 'English',
      eligibility: 'MSc in Environmental Science, Soil Science, Ecology, Botany, Forestry, or Biogeochemistry.',
      vacancyUrl: 'https://www.lbhi.is/en/research/graduate-studies',
      highlights: [
        'Specializes in volcanic soil geochemistry, carbon sequestration, wetland restoration, and sub-Arctic biodiversity'
      ]
    },
    {
      id: 'is-unak-marine',
      country: 'Iceland',
      flag: '🇮🇸',
      university: 'University of Akureyri (UNAK) & Marine and Freshwater Research Institute (MFRI)',
      faculty: 'School of Business and Science — Natural Resource Sciences & Marine Biology',
      city: 'Akureyri & Reykjavík',
      disciplines: ['Marine Science & Oceanography', 'Biology & Life Sciences', 'Earth, Climate & Environmental Science'],
      keyDepartments: 'Department of Natural Resource Sciences (Marine Biotechnology, Arctic Marine Ecology, Fisheries Science, Chemical Oceanography, Microbial Diversity in Cold Waters).',
      salary: 'ISK 480,000 – 580,000 / month',
      contractType: '3-Year Salaried Doctoral Fellowship',
      applicationCycle: 'Periodic project openings',
      languageReq: 'English',
      eligibility: 'MSc in Marine Biology, Oceanography, Biotechnology, Microbiology, or Environmental Science.',
      vacancyUrl: 'https://www.unak.is/english/university/vacancies',
      highlights: [
        'Located on the Eyjafjörður fjord in Northern Iceland — famous for hydrothermal chimney vents and cold-water marine bioprospecting'
      ]
    },
    {
      id: 'nordic-euraxess-hub',
      country: 'Iceland',
      flag: '🇪🇺',
      university: 'EURAXESS Nordic Natural Sciences Live Feed (All 5 Nordic Nations)',
      faculty: 'European Commission Research Job Portal (First-Stage Researcher R1 = PhD)',
      city: 'Sweden, Norway, Denmark, Finland & Iceland',
      disciplines: ['Chemistry & Materials', 'Biology & Life Sciences', 'Physics, Quantum & Astronomy', 'Earth, Climate & Environmental Science', 'Marine Science & Oceanography', 'Mathematics & Computational Science'],
      keyDepartments: 'Real-time aggregator of MSCA Doctoral Networks (Marie Skłodowska-Curie Actions), ERC-funded PhD positions, and national research council openings across all Nordic universities.',
      salary: '€3,400 – €4,500+ / month (MSCA Doctoral Networks scale + mobility & family allowance)',
      contractType: '3 to 4-Year Salaried MSCA / University Employment Contract',
      applicationCycle: 'Updated daily year-round (Filter by Research Profile: "First Stage Researcher (R1)")',
      languageReq: 'English',
      eligibility: 'Master\'s degree in Natural Sciences; for MSCA Doctoral Networks, the mobility rule requires that you have not lived in the host country for more than 12 months in the past 3 years.',
      vacancyUrl: 'https://euraxess.ec.europa.eu/jobs/search',
      highlights: [
        'Best single live feed for Marie Skłodowska-Curie Actions (MSCA) Doctoral Networks in the Nordics',
        'MSCA PhD positions pay an additional €600/month Mobility Allowance and €660/month Family Allowance (if married) on top of base salary'
      ]
    }
  ];

  global.NORDIC_COUNTRY_SUMMARY = NORDIC_COUNTRY_SUMMARY;
  global.NORDIC_PHD_POSITIONS = NORDIC_PHD_POSITIONS;
})(typeof window !== 'undefined' ? window : globalThis);
