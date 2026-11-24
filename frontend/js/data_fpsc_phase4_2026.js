/**
 * Official FPSC Consolidated Advertisement (Phase-4/2026)
 * Reference: Federal Public Service Commission, Islamabad — Dated 6th November, 2026
 * Closing Date: Monday, 23rd November, 2026 | Tentative Written Test w.e.f. 2nd January, 2027
 * Official Source: https://www.fpsc.gov.pk
 */
(function (global) {
  'use strict';

  const FPSC_PHASE4_2026_META = {
    authority: 'Federal Public Service Commission (FPSC), Islamabad',
    advertisementTitle: 'Consolidated Advertisement (Phase-4/2026)',
    tagline: 'Join Pakistan\'s Federal Services — Build a Career that Shapes National Progress.',
    issueDate: '6th November, 2026',
    closingDate: 'Monday, 23rd November, 2026',
    testDate: 'Tentatively w.e.f. 2nd January, 2027 (Objective MCQs Paper)',
    signatory: 'Muhammad Shahid, Assistant Director, Federal Public Service Commission, Islamabad',
    officialUrl: 'https://www.fpsc.gov.pk',
    fees: [
      { scale: 'BS-16 & BS-17', fee: 'Rs. 600/-' },
      { scale: 'BS-18', fee: 'Rs. 1,500/-' },
      { scale: 'BS-19', fee: 'Rs. 2,500/-' },
      { scale: 'BS-20 & Above', fee: 'Rs. 3,000/-' }
    ]
  };

  const FPSC_PHASE4_2026_JOBS = [
    {
      sr: 1, caseNo: 'F.4-176/2026-R', post: 'Assistant Draftsman', scale: 'BS-18', nature: 'Permanent',
      ministry: 'Ministry of Law and Justice',
      qualification: 'Second Class or Grade "C" Bachelor\'s degree in Law (HEC recognized) + 5 years post-qualification experience in drafting legislative instruments or legal matters.',
      age: '25-35 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Sindh (Urban) (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 2, caseNo: 'F.4-152/2026-R (Re-adv)', post: 'Professor (6 Specialties: Cardiac Surgery, Dermatology, Emergency Medicine, Neonatology, Pediatric Surgery, Pulmonology)', scale: 'BS-20', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'PIMS, Islamabad (Ministry of National Health Services, Regulations & Coordination)',
      qualification: 'MBBS / M.Sc. (Basic Science) + D.Sc. / Ph.D. / FCPS / M.D. / M.S. / M.Phil (PMDC recognized) + 3 yrs as Associate Professor (total 8 yrs PG) or 9 yrs as Assistant Prof / 4 yrs as Associate Prof (total 12 yrs UG) + required research papers. Already applied candidates need not re-apply.',
      age: 'Max 52 yrs (+general relaxation up to 55 yrs)', vacancies: 6, quota: 'Sindh (Rural)=2, Sindh (Urban)=2, KP=2 (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 3, caseNo: 'F.4-177/2026-R', post: 'Associate Professor (Neonatology & Paeds Oncology)', scale: 'BS-19', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'PIMS, Islamabad (Ministry of National Health Services, Regulations & Coordination)',
      qualification: 'MBBS / M.Sc. (Basic Science) + D.Sc. / Ph.D. / FCPS / MD / M.S. / M.Phil (PMDC recognized) + 5 yrs PG or 8 yrs UG teaching experience as Assistant Professor + 3 (PG) or 5 (UG) research papers.',
      age: 'Max 48 yrs (+5 yrs general relaxation)', vacancies: 2, quota: 'Punjab=1, Sindh (Rural)=1 (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 4, caseNo: 'F.4-178/2026-R', post: 'Chief Psychologist', scale: 'BS-20', nature: 'Contract (1 yr, extendable)',
      ministry: 'Federal Public Service Commission (FPSC)',
      qualification: 'Ph.D. in Psychology + 11 yrs exp OR M.Phil Psychology + 15 yrs exp OR Master\'s in Psychology/Applied Psychology + 17 yrs exp in Schedule-II fields (Psychometrics, Test Construction, Selection, Clinical/Counseling). Up to 5 yrs adjustable via IF journal publications.',
      age: '37-45 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Merit', posting: 'Islamabad'
    },
    {
      sr: 5, caseNo: 'F.4-179/2026-R', post: 'Demonstrator', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Federal Medical College (Ministry of National Health Services, Regulations & Coordination)',
      qualification: 'MBBS or equivalent medical qualification recognized / registered by PM&DC.',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 25, quota: 'Merit=2, Punjab=12 (OM=11, W=1), Sindh (R)=3, Sindh (U)=1, KP=3 (OM=2, W=1), Balochistan=2 (OM=1, W=1), Ex-FATA=1, AJK=1', posting: 'Islamabad'
    },
    {
      sr: 6, caseNo: 'F.4-180/2026-R', post: 'Assistant Library', scale: 'BS-16', nature: 'Temporary, Likely to be Permanent',
      ministry: 'Federal Medical College (Ministry of National Health Services, Regulations & Coordination)',
      qualification: '2nd Class or Grade "C" Bachelor\'s degree in Library Sciences or equivalent (HEC recognized).',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 2, quota: 'Punjab=1, Sindh (Rural)=1 (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 7, caseNo: 'F.4-181/2026-R', post: 'Assistant Director', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Ministry of Religious Affairs and Interfaith Harmony',
      qualification: 'Second Class or Grade "C" Master\'s degree in Islamic History / Islamic Studies / Arabic / Islamic Jurisprudence / LLB (Shariah) or equivalent (HEC recognized).',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Balochistan (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 8, caseNo: 'F.4-182/2026-R', post: 'Scientific Officer', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Agriculture, Livestock & Fisheries Dept GB (Ministry of Kashmir Affairs & GB)',
      qualification: 'Second Class or Grade "C" B.Sc. (Hons.) Agriculture degree (HEC recognized).',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 5, quota: 'GB=5 (Open Merit=4, Women=1)', posting: 'Anywhere in Gilgit-Baltistan'
    },
    {
      sr: 9, caseNo: 'F.4-183/2026-R', post: 'Deputy Director', scale: 'BS-18', nature: 'Permanent',
      ministry: 'National Heritage and Culture Division',
      qualification: 'Second Class or Grade "C" Master\'s degree in any discipline of Social Science (HEC) + 5 years post-qualification experience in administration / finance in Public Sector Organization.',
      age: '25-35 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 10, caseNo: 'F.4-184/2026-R', post: 'Deputy Chief (Energy Finance & Economic Section)', scale: 'BS-19', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Energy Wing, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Master\'s / 4-yr Bachelor\'s in Economics / Finance / Energy Economics / Energy Policy / MBA / ACMA + 10 yrs experience in Energy Planning, Economics, Management or Appraisal (relaxable for Ph.D./M.Phil/FCMA/CA).',
      age: 'Max 40 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Merit', posting: 'Islamabad'
    },
    {
      sr: 11, caseNo: 'F.4-185/2026-R', post: 'Deputy Chief (Energy Information Systems & Computer)', scale: 'BS-19', nature: 'Temporary, Likely to be Permanent',
      ministry: 'Energy Wing, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Master\'s / 4-yr Bachelor\'s in CS / Electrical / IT / Software Engg (HEC) OR Bachelor\'s in Computer / Computer System Engg (PEC) + 10 yrs experience in Data Management, Data Mining, Analytics, Big Data or ML in Energy Sector.',
      age: 'Max 40 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 12, caseNo: 'F.4-186/2026-R', post: 'Assistant Chief (Fuel)', scale: 'BS-18', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Energy Appraisal & Plan Formulation Section, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Master\'s / 4-yr Bachelor\'s in Geology / Geophysics (Petroleum/Coal) OR B.E. in Petroleum / Chemical / Mechanical / Mining Engg (Coal, PEC) + 3 yrs experience in Hydrocarbon/Coal/Oil & Gas/Refinery.',
      age: 'Max 35 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Merit', posting: 'Islamabad'
    },
    {
      sr: 13, caseNo: 'F.4-187/2026-R', post: 'Assistant Chief (Power)', scale: 'BS-18', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Energy Appraisal & Plan Formulation Section, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Bachelor\'s degree in Electrical / Mechanical Engineering with major in Power (PEC) + 3 yrs experience in Power Generation, HVAC/HVDC Transmission or Electrical Distribution Systems.',
      age: 'Max 35 yrs (+5 yrs general relaxation)', vacancies: 2, quota: 'Punjab=1, Balochistan=1 (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 14, caseNo: 'F.4-188/2026-R', post: 'Assistant Chief (Health Section)', scale: 'BS-18', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Health Section, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Master\'s in Health Planning / Nutrition Planning OR MBBS + 3 yrs experience/research in medicine, surgery, public health or planning & development.',
      age: 'Max 35 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Women Quota)', posting: 'Islamabad'
    },
    {
      sr: 15, caseNo: 'F.4-189/2026-R', post: 'Research Officer (Nutrition Section)', scale: 'BS-17', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Nutrition Section, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Second Class or Grade "C" Master\'s degree in Human Nutrition / Food Technology / Bio-Chemistry (Nutrition) or Home Economics (Human Nutrition).',
      age: 'Max 32 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Sindh (Urban) (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 16, caseNo: 'F.4-190/2026-R', post: 'Research Officer (Physical Planning & Housing)', scale: 'BS-17', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Physical Planning & Housing Section, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Second Class or Grade "C" Bachelor\'s degree in Civil Engineering, Architecture, Town Planning, City and/or Regional Planning.',
      age: 'Max 32 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 17, caseNo: 'F.4-191/2026-R', post: 'Research Officer (Fuel)', scale: 'BS-17', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Energy Wing, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Master\'s / 4-yr Bachelor\'s in Geology / Geophysics (Petroleum/Coal, HEC) OR B.E. in Petroleum / Chemical / Chemical Tech / Mechanical / Mining Engg (Coal, PEC).',
      age: 'Max 28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 18, caseNo: 'F.4-192/2026-R', post: 'Research Officer (Science & Technology Section)', scale: 'BS-17', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Science & Technology Section, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Master\'s / 4-yr Bachelor\'s in Physics / Chemistry / Biology / Mathematics / Statistics / Economics / S&T Policy / Tech & Innovation Mgmt (HEC) OR BS/BE in Chemical / Mechanical / Material Engineering (PEC/HEC).',
      age: 'Max 32 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Merit', posting: 'Islamabad'
    },
    {
      sr: 19, caseNo: 'F.4-193/2026-R', post: 'Research Officer (Environment Section)', scale: 'BS-17', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Environment Section, Ministry of Planning, Development & Special Initiatives',
      qualification: 'Master\'s / 4-yr Bachelor\'s in Environmental & Resource Economics / Environmental Science / Environmental Planning & Management / NRM / Forestry (HEC) OR B.Sc. Environmental Engineering (PEC).',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 20, caseNo: 'F.4-194/2026-R', post: 'Budget Publication Officer', scale: 'BS-18', nature: 'Permanent',
      ministry: 'HRM Wing, Finance Division',
      qualification: 'Second Class or Grade "C" Master\'s degree in Urdu (HEC) + 5 years post-qualification experience of printing, compilation and translation from English to Urdu and vice versa.',
      age: '25-35 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 21, caseNo: 'F.4-195/2026-R', post: 'Assistant Audit Officer', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Office of the Auditor General of Pakistan',
      qualification: 'Master\'s in Business Administration (Finance/Accounting) / Economics / Mathematics / Commerce / Statistics (HEC) OR Master\'s with ICMA 1-yr PG Cert / CA (Foundation) / ACCA (knowledge level) OR Bachelor\'s with PIPFA (Public Sector)/SAS + 3 yrs service.',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 160, quota: 'Merit=12, Punjab=80 (OM=68, W=8, Min=4), Sindh (R)=18 (OM=16, W=1, Min=1), Sindh (U)=12 (OM=10, W=2), KP=18 (OM=16, W=1, Min=1), Balochistan=10 (OM=8, W=1, Min=1), Ex-FATA=5, GB=2, AJK=3', posting: 'Anywhere in Pakistan',
      prepLink: 'quiz.html?categoryId=cat_aao&categoryName=Assistant%20Audit%20Officer%20(BS-17)'
    },
    {
      sr: 22, caseNo: 'F.4-196/2026-R', post: 'Assistant Signal / Telecom. Engineer', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Signal & Telecommunication Department, Ministry of Railways',
      qualification: 'Bachelor of Engineering degree in Electrical / Electronics / Telecommunication.',
      age: '22-28 yrs (+5 yrs general relaxation)', vacancies: 3, quota: 'Punjab=2 (OM=1, W=1), Sindh (Rural)=1', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 23, caseNo: 'F.4-197/2026-R', post: 'Assistant Controller of Stores / Purchase', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Store and Purchase Department, Ministry of Railways',
      qualification: 'B.Sc. Engineering in Civil / Electrical / Electronics / Telecommunication / Mechanical Engineering + Registration with PEC required.',
      age: '22-28 yrs (+5 yrs general relaxation)', vacancies: 2, quota: 'Punjab (Open Merit)=1, KP (Women Quota)=1', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 24, caseNo: 'F.4-198/2026-R', post: 'Assistant Executive Engineer', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Civil Engineering Department, Ministry of Railways',
      qualification: 'Bachelor degree in Civil Engineering or equivalent + Registration with PEC required.',
      age: '22-28 yrs (+5 yrs general relaxation)', vacancies: 4, quota: 'Punjab=2, Sindh (Rural)=1, KP=1 (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 25, caseNo: 'F.4-199/2026-R', post: 'Assistant Mechanical Engineer', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Transportation Power & Mechanical Engineering Dept, Ministry of Railways',
      qualification: 'Bachelor\'s degree in Mechanical Engineering or equivalent + Registration with PEC required.',
      age: '22-28 yrs (+5 yrs general relaxation)', vacancies: 2, quota: 'Merit=1, Punjab (Open Merit)=1', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 26, caseNo: 'F.4-200/2026-R', post: 'Junior Scientific Officer', scale: 'BS-16', nature: 'Permanent',
      ministry: 'OS Directorate, GHQ, Ministry of Defence',
      qualification: 'Second Class or Grade "C" B.Tech (Textile / Mechanical) (HEC recognized). Note: Per PEC, B.E. is not equivalent to B.Tech and is not admissible.',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Merit', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 27, caseNo: 'F.4-201/2026-R', post: 'Junior Civilian Labour Officer', scale: 'BS-16', nature: 'Permanent',
      ministry: 'Ordnance Corps, GHQ, Ministry of Defence',
      qualification: 'Law Graduate (LLB).',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 28, caseNo: 'F.4-202/2026-R', post: 'Ordnance Management Officer (Grade-III)', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Ordnance Corps, GHQ, Ministry of Defence',
      qualification: 'Second Class or Grade "C" Master\'s degree in Business Administration (Banking/Finance/Accounts) / Commerce / ICMA or equivalent (HEC recognized).',
      age: '22-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 29, caseNo: 'F.4-203/2026-R', post: 'Civilian Medical Practitioner (Grade-III)', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Ordnance Corps, OS Directorate, GHQ, Ministry of Defence',
      qualification: 'MBBS or equivalent qualification recognized by PMDC + Valid registration with PMDC.',
      age: '22-28 yrs (+5 yrs general relaxation)', vacancies: 4, quota: 'Merit=1, Punjab=2, Sindh (Urban)=1 (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 30, caseNo: 'F.4-204/2026-R', post: 'Horticulturist / Garden Officer', scale: 'BS-16', nature: 'Temporary (Indefinite)',
      ministry: 'GHQ, Ministry of Defence',
      qualification: 'Second Class or Grade "C" Bachelor\'s Degree in Agriculture (Horticulture).',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Sindh (Rural) (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 31, caseNo: 'F.4-205/2026-R', post: 'Assistant Director (Web Development)', scale: 'BS-17', nature: 'Temporary',
      ministry: 'Estate Office Management, Ministry of Housing and Works',
      qualification: 'Second Class or Grade "C" Master\'s / 16-yr Bachelor\'s in CS / IT / Software Engineering (HEC) OR Bachelor\'s in Computer / Computer System Engineering (PEC).',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Sindh (Rural) (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 32, caseNo: 'F.4-206/2026-R', post: 'Research Officer / Planning Officer / Survey Officer', scale: 'BS-17', nature: 'Temporary, Likely to Become Permanent',
      ministry: 'Economists Group, Ministry of Planning, Development & Special Initiatives',
      qualification: 'First Class or Grade "B" Master\'s degree in Economics or equivalent with no 3rd Division in entire academic career.',
      age: 'Max 30 yrs (+5 yrs general relaxation; +10 yrs disabled)', vacancies: 12, quota: 'Merit=1, Punjab=6 (OM=5, Min=1), Sindh (R)=1, Sindh (U)=1, KP=1, GB (Women)=1, AJK=1', posting: 'Islamabad'
    },
    {
      sr: 33, caseNo: 'F.4-207/2026-R', post: 'Junior Scientific Officer', scale: 'BS-16', nature: 'Permanent',
      ministry: 'Armed Forces Institute of Pathology (AFIP), GHQ, Ministry of Defence',
      qualification: 'Second Class or Grade "C" Master\'s or BS / 16-yr Bachelor\'s in Molecular Biology / Bioinformatics / Biochemistry (HEC recognized).',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 2, quota: 'Punjab=1, Balochistan=1 (Open Merit)', posting: 'Rawalpindi'
    },
    {
      sr: 34, caseNo: 'F.4-208/2026-R', post: 'Research Officer', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Chief Minister Inspection Team Gilgit-Baltistan (Ministry of Kashmir Affairs & GB)',
      qualification: 'Second Class or Grade "C" Master\'s or 4-yr BS in Economics / Statistics / Sociology / Social Work / Business Administration / Public Administration (HEC).',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'GB (Open Merit)', posting: 'Gilgit'
    },
    {
      sr: 35, caseNo: 'F.4-209/2026-R', post: 'Planning Officer', scale: 'BS-18', nature: 'Permanent',
      ministry: 'Planning & Development Dept GB Secretariat (Ministry of Kashmir Affairs & GB)',
      qualification: 'Second Class or Grade "C" Master\'s in Economics + 5 yrs post-qualification experience in Economic Research, Development, Economics, International Economics or Planning.',
      age: '25-35 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'GB (Open Merit)', posting: 'Gilgit-Baltistan'
    },
    {
      sr: 36, caseNo: 'F.4-210/2026-R', post: 'Research Officer', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Planning & Development Dept GB (Ministry of Kashmir Affairs & GB)',
      qualification: 'Second Class or Grade "C" Master\'s degree in Business Administration / Management Science / Economics.',
      age: '22-28 yrs (+5 yrs general relaxation)', vacancies: 2, quota: 'GB (Open Merit)', posting: 'Gilgit-Baltistan'
    },
    {
      sr: 37, caseNo: 'F.4-211/2026-R', post: 'Architect', scale: 'BS-16', nature: 'Permanent',
      ministry: 'Communication & Works Dept GB (Ministry of Kashmir Affairs & GB)',
      qualification: 'Second Class or Grade "C" Bachelor\'s degree in Architecture / Architecture & Planning (HEC) + Registration with PCATP till closing date.',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'GB (Open Merit)', posting: 'Anywhere in Gilgit-Baltistan'
    },
    {
      sr: 38, caseNo: 'F.4-212/2026-R', post: 'Assistant Director', scale: 'BS-17', nature: 'Temporary, Likely to Continue',
      ministry: 'Federal Public Service Commission (FPSC)',
      qualification: 'Second Class or Grade "C" Master\'s Degree or equivalent qualification from a University recognized by HEC.',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 2, quota: 'Punjab (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 39, caseNo: 'F.4-213/2026-R', post: 'Psychologist', scale: 'BS-18', nature: 'Temporary, Likely to Continue',
      ministry: 'Federal Public Service Commission (FPSC)',
      qualification: 'Second Class or Grade "C" Master\'s in Psychology / Applied Psychology + 5 yrs experience in Schedule-II fields + qualify written test in test development, psychological assessment, stats & research reports.',
      age: '24-35 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Merit', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 40, caseNo: 'F.4-214/2026-R', post: 'Nurse', scale: 'BS-16', nature: 'Permanent',
      ministry: 'AFIRM, Ministry of Defence',
      qualification: 'Bachelor\'s degree in Nursing (PNC/HEC) OR 3-yr Diploma in General Nursing + 1-yr Midwifery Certificate + Valid PNC Registration.',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 10, quota: 'Merit=1, Punjab=5 (OM=4, W=1), Sindh (R)=1, Sindh (U)=1, KP=1, Balochistan=1', posting: 'Rawalpindi'
    },
    {
      sr: 41, caseNo: 'F.4-215/2026-R', post: 'Assistant Director Legal', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Directorate of Legal Affairs, Ministry of Railways',
      qualification: 'LLM or Barrister-at-Law + Computer literate (MS Word/Excel) OR Second Class LLB + 2 yrs legal experience + Computer literate.',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 42, caseNo: 'F.4-216/2026-R', post: 'Statistical Officer', scale: 'BS-17', nature: 'Temporary, Likely to be Permanent',
      ministry: 'Federal Medical College (Ministry of National Health Services, Regulations & Coordination)',
      qualification: '2nd Class or Grade "C" Master\'s degree in Bio-Statistics (HEC) + 2 yrs post-qualification experience in relevant field.',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 43, caseNo: 'F.4-217/2026-R', post: 'Assistant Warden Girls Hostel (Female)', scale: 'BS-16', nature: 'Temporary, Likely to be Permanent',
      ministry: 'Federal Medical College (Ministry of National Health Services, Regulations & Coordination)',
      qualification: '2nd Class or Grade "C" Bachelor\'s degree (HEC) + 2 yrs post-qualification experience managing School/College/University Hostel.',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Islamabad'
    },
    {
      sr: 44, caseNo: 'F.4-218/2026-R', post: 'Store Officer', scale: 'BS-16', nature: 'Temporary (Indefinite)',
      ministry: 'Geological Survey of Pakistan, Ministry of Energy',
      qualification: 'Second Class or Grade "C" Bachelor\'s degree (HEC) + 2 yrs experience in handling vehicle spare parts, stores, ledger, bin-card accounts & stock-taking.',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 45, caseNo: 'F.4-219/2026-R', post: 'Junior Ordnance Management Officer', scale: 'BS-16', nature: 'Permanent',
      ministry: 'OS Directorate, GHQ, Ministry of Defence',
      qualification: 'Second Class or Grade "C" Bachelor\'s degree (14 yrs schooling, HEC) + 2 yrs post-qualification experience in Store Management.',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 3, quota: 'Merit=1, Punjab=1, GB=1 (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 46, caseNo: 'F.4-220/2026-R', post: 'Junior Civilian Security Officer', scale: 'BS-16', nature: 'Permanent',
      ministry: 'OS Directorate, GHQ, Ministry of Defence',
      qualification: 'Retd. JCO or equivalent of Armed Forces OR Second Class Bachelor\'s (14 yrs) + 2 yrs experience as Security Supervisor.',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Balochistan (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 47, caseNo: 'F.4-221/2026-R', post: 'Junior Establishment and Finance Officer', scale: 'BS-16', nature: 'Permanent',
      ministry: 'Ordnance Corps, GHQ, Ministry of Defence',
      qualification: 'Second Class or Grade "C" Bachelor\'s degree in Commerce (HEC) + 2 yrs post-qualification experience in Administration and Finance.',
      age: '20-28 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'Punjab (Open Merit)', posting: 'Anywhere in Pakistan'
    },
    {
      sr: 48, caseNo: 'F.4-222/2026-R', post: 'Superintendent', scale: 'BS-17', nature: 'Permanent',
      ministry: 'Communication & Works Dept GB (Ministry of Kashmir Affairs & GB)',
      qualification: 'Second Class Master\'s or 4-yr Bachelor\'s in Business Admin / Public Admin / HRM (HEC) OR Bachelor\'s with 5 yrs experience in Administration / Establishment / Accounts.',
      age: '22-30 yrs (+5 yrs general relaxation)', vacancies: 1, quota: 'GB (Open Merit)', posting: 'Anywhere in Gilgit-Baltistan'
    }
  ];

  global.FPSC_PHASE4_2026_META = FPSC_PHASE4_2026_META;
  global.FPSC_PHASE4_2026_JOBS = FPSC_PHASE4_2026_JOBS;
})(typeof window !== 'undefined' ? window : globalThis);
