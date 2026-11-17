const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'frontend', 'js', 'data_recruitment_prep.js');
let content = fs.readFileSync(dataPath, 'utf-8');

if (!content.includes('sindh-police-asi')) {
  const newJobs = `  },
  {
    "id": "sindh-police-asi",
    "title": "Sindh Police ASI (Investigation)",
    "scale": "BPS-11",
    "department": "Sindh Police / Home Department Sindh (Investigation Cadre)",
    "cadre": "Investigation & Specialized Crime Detection Cadre",
    "qualification": "Second Class Bachelor's Degree / Graduate (14 years education) from an HEC recognized university.",
    "ageLimit": "18 - 28 years (+ General Age Relaxation as per Sindh Govt Notification = up to 33/43 years as applicable)",
    "shortDescription": "Upcoming recruitment of 2,000 Assistant Sub-Inspectors (Investigation) via Sindh Public Service Commission (SPSC). Key responsibilities include investigation of heinous crimes, forensic evidence collection, case diaries (Zimniyan) maintenance, and prosecution coordination.",
    "icon": "fa-fingerprint",
    "accentColor": "#0284c7",
    "syllabus": {
      "totalMarks": 100,
      "totalQuestions": 100,
      "timeAllowed": "100 Minutes",
      "testType": "Objective Type (MCQs) Conducted by SPSC",
      "negativeMarking": "0.25 Marks Negative Marking (SPSC Standard)",
      "passingThreshold": "50% (Merit cutoff typically 65 - 75)",
      "sections": [
        {
          "name": "Part-I: English Composition & Grammar",
          "marks": 20,
          "percentage": "20%",
          "description": "Sentence correction, prepositions, active/passive voice, vocabulary (synonyms & antonyms), and comprehension.",
          "topics": [
            "Tenses & Subject-Verb Agreement",
            "Prepositions & Phrasal Verbs",
            "Active and Passive Voice",
            "Synonyms & Antonyms",
            "Sentence Correction & Punctuation"
          ]
        },
        {
          "name": "Part-II: General Knowledge & Current Affairs",
          "marks": 20,
          "percentage": "20%",
          "description": "National and international affairs, Sindh geography, rivers, barrages, administrative divisions, and international organizations.",
          "topics": [
            "Sindh Geography, Culture & Heritage",
            "Pakistan National Current Affairs (2024-2026)",
            "International Organizations (UN, OIC, SCO)",
            "Global Geopolitics & Regional Developments"
          ]
        },
        {
          "name": "Part-III: Pakistan Affairs & Islamic Studies / Ethics",
          "marks": 20,
          "percentage": "20%",
          "description": "Constitutional history of Pakistan, 1973 Constitution fundamental rights, Pakistan Movement, and basic Islamic tenets/ethics.",
          "topics": [
            "Pakistan Movement (1906 - 1947)",
            "1973 Constitution: Fundamental Rights & Judiciary",
            "Islamic History & Caliphate Administration",
            "Moral Values & Professional Ethics"
          ]
        },
        {
          "name": "Part-IV: Everyday Science & Basic Arithmetic",
          "marks": 20,
          "percentage": "20%",
          "description": "Scientific discoveries, human anatomy, vitamins, environmental issues, percentages, ratios, and averages.",
          "topics": [
            "Human Body, Vitamins & Common Diseases",
            "Solar System & Atmospheric Layers",
            "Basic Arithmetic (Percentages, Ratios, Averages)",
            "Work, Time & Speed Math Problems"
          ]
        },
        {
          "name": "Part-V: Basic Criminal Law & General Intelligence",
          "marks": 20,
          "percentage": "20%",
          "description": "Basic concepts of Pakistan Penal Code (PPC), Code of Criminal Procedure (CrPC), FIR registration, remand, police powers, and analytical logic.",
          "topics": [
            "CrPC: Cognizable vs Non-Cognizable Offences",
            "CrPC Section 154 (FIR) & Section 161 (Witness Statements)",
            "CrPC Section 167 (Physical Remand & Judicial Custody)",
            "PPC: Hurt, Theft, Homicide & Extortion Definitions",
            "Analytical Reasoning & Deductive Logic"
          ]
        }
      ]
    },
    "prepModules": [
      {
        "id": "sindh-asi-crpc-core",
        "title": "Criminal Procedure Code (CrPC) for Police Officers",
        "subject": "Criminal Law",
        "readTime": "15 min read",
        "contentSummary": "Detailed guide on Section 154 (Registration of FIR), Section 156 (Investigation of cognizable cases), Section 161 (Examination of witnesses by police), Section 167 (Procedure when investigation cannot be completed in 24 hours / remand), and Section 173 (Challan / police report).",
        "bulletPoints": [
          "Cognizable offence empowers police to arrest without warrant under CrPC Section 4(1)(f)",
          "Section 154 CrPC mandates prompt recording of First Information Report (FIR)",
          "Section 161 statements are not signed by the witness under criminal law",
          "Magistrate can grant maximum 15 days physical remand under Section 167 CrPC",
          "Final Investigation Report (Challan) submitted to Magistrate under Section 173 CrPC"
        ]
      },
      {
        "id": "sindh-asi-police-rules",
        "title": "Sindh Police Rules & Forensic Investigation Basics",
        "subject": "Police Administration",
        "readTime": "12 min read",
        "contentSummary": "Core operational regulations under Police Rules 1934 and Sindh Police (Investigation) branch operations. Crime scene protection, chain of custody of physical evidence, and forensic sample preservation.",
        "bulletPoints": [
          "Golden rule of crime scene: Cordon off and preserve physical evidence before anything is disturbed",
          "Case Diary (Zimni) under Section 172 CrPC records day-to-day progress of investigation",
          "Fingerprint classification (Henry System) and latent print lifting techniques",
          "Chain of custody documentation ensures admissibility of forensic evidence in court",
          "Medico-legal report (MLR) and post-mortem examination procedure"
        ]
      },
      {
        "id": "sindh-asi-sindh-affairs",
        "title": "Comprehensive Sindh General Knowledge Capsule",
        "subject": "Sindh Affairs",
        "readTime": "10 min read",
        "contentSummary": "Geography, heritage, economy, and administrative setup of Sindh. Barrages (Sukkur, Kotri, Guddu), districts, mountain ranges (Kirthar), and key archaeological sites.",
        "bulletPoints": [
          "Sindh is divided into 6 Administrative Divisions and 30 Districts",
          "Sukkur Barrage (Lloyd Barrage) was commissioned in 1932 on Indus River",
          "Gorakh Hill Station (elevation 5,688 ft) is situated in the Kirthar Mountains, Dadu",
          "Mohenjo-daro (discovered by Rakhaldas Bandyopadhyay in 1922) is a UNESCO World Heritage site",
          "Karachi Port Trust (KPT) and Port Qasim manage over 90% of Pakistan's seaborne foreign trade"
        ]
      }
    ],
    "recommendedResources": [
      {
        "type": "Official Statute",
        "title": "Code of Criminal Procedure, 1898 (CrPC) - Key Sections 154 to 174",
        "author": "Government of Pakistan / Law & Justice Commission",
        "edition": "Updated Statutory Text",
        "freeAccess": "Digital Library / acts-rules.html",
        "notes": "Essential for Part-V: Memorize FIR, arrest without warrant, witness statements, and remand procedures."
      },
      {
        "type": "Past Papers",
        "title": "SPSC Combined Competitive Examination & Police Screening Past Papers",
        "author": "Sindh Public Service Commission",
        "edition": "2020 - 2026 Edition",
        "freeAccess": "cce-essays-2025.html / quiz.html",
        "notes": "Study authentic SPSC question framing and negative marking strategy."
      }
    ],
    "practiceQuizzes": [
      {
        "title": "Criminal Law & CrPC Investigation Screening Quiz",
        "category": "cat_acts_rules",
        "subCategory": "Criminal Law & CrPC",
        "count": 25,
        "difficulty": "Medium",
        "description": "High-yield MCQs covering FIR, remand, arrest, bail, and investigation stages."
      },
      {
        "title": "SPSC General Knowledge & Sindh Affairs Quiz",
        "category": "cat_current_affairs_sts_200",
        "subCategory": "Sindh GK & Current Affairs",
        "count": 30,
        "difficulty": "Mixed",
        "description": "Targeted questions on Sindh geography, national events, and international organizations."
      }
    ],
    "mockExam": {
      "title": "Sindh Police ASI (Investigation) 100-Mark SPSC Mock Exam",
      "category": "cat_fia_ad_sample",
      "subCategory": "Past Paper 2021 Batch-1",
      "timeMinutes": 100,
      "totalMarks": 100,
      "description": "Full-length 100-mark mock screening test strictly adhering to SPSC testing patterns with negative marking."
    },
    "checklist": [
      {
        "id": "sindh-asi-chk-crpc",
        "text": "Criminal Law: CrPC Sections 154 (FIR), 161 (Statements), 167 (Remand) & 173 (Challan)"
      },
      {
        "id": "sindh-asi-chk-ppc",
        "text": "Pakistan Penal Code: Definitions of Theft, Extortion, Dacoity, Robbery & Homicide"
      },
      {
        "id": "sindh-asi-chk-forensics",
        "text": "Forensic Basics: Crime Scene Cordoning, Fingerprints & Chain of Custody"
      },
      {
        "id": "sindh-asi-chk-sindh-gk",
        "text": "Sindh Geography: Barrages, Rivers, Kirthar Range & Administrative Divisions"
      },
      {
        "id": "sindh-asi-chk-eng-grammar",
        "text": "English: Prepositions, Active/Passive Voice, Sentence Correction & Vocabulary"
      },
      {
        "id": "sindh-asi-chk-eds",
        "text": "Everyday Science: Human Anatomy, Vitamins, Solar System & Diseases"
      },
      {
        "id": "sindh-asi-chk-math",
        "text": "Basic Arithmetic: Percentages, Ratios, Speed-Time & Profit-Loss"
      },
      {
        "id": "sindh-asi-chk-constitution",
        "text": "Constitution 1973: Fundamental Rights (Articles 8-28) & High Court Jurisdiction"
      }
    ]
  },
  {
    "id": "sindh-police-constable",
    "title": "Sindh Police Constable & Border Security",
    "scale": "BPS-07",
    "department": "Sindh Police (Ranges & Border Security Unit)",
    "cadre": "Executive Constabulary & Border Security Force",
    "qualification": "Matriculation (SSC) from a recognized Board of Secondary Education.",
    "ageLimit": "18 - 28 years (Relaxations as per Sindh Govt Rules)",
    "shortDescription": "Upcoming mega recruitment of 15,500 Police Constables (5,000 Border Security Police Constables + 10,500 General Police Constables) through Sukkur IBA (STS) and Sindh Job Portal (SJP).",
    "icon": "fa-person-military-rifle",
    "accentColor": "#16a34a",
    "syllabus": {
      "totalMarks": 100,
      "totalQuestions": 100,
      "timeAllowed": "100 Minutes",
      "testType": "Objective Type (MCQs) via Sukkur IBA (STS) / SJP",
      "negativeMarking": "None",
      "passingThreshold": "40% (Merit ranking determines appointment)",
      "sections": [
        {
          "name": "Part-I: English Comprehension & Basic Grammar",
          "marks": 20,
          "percentage": "20%",
          "description": "Spelling correction, basic prepositions, vocabulary, singular-plural, and simple sentence completion.",
          "topics": [
            "Basic English Grammar & Spellings",
            "Prepositions (in, on, at, to, for)",
            "Everyday Vocabulary & Opposites",
            "Sentence Completion"
          ]
        },
        {
          "name": "Part-II: General Knowledge & Sindh Affairs",
          "marks": 25,
          "percentage": "25%",
          "description": "Prominent cities of Sindh, historical landmarks, national symbols of Pakistan, and basic current affairs.",
          "topics": [
            "Districts & Headquarter Cities of Sindh",
            "Indus River & National Monuments",
            "Basic Pakistan Current Affairs",
            "Famous Personalities & Historical Events"
          ]
        },
        {
          "name": "Part-III: Everyday Science & Basic Mathematics",
          "marks": 25,
          "percentage": "25%",
          "description": "Elementary arithmetic (fractions, decimals, percentages) and everyday science facts.",
          "topics": [
            "Basic Operations (+, -, ×, ÷), Fractions & Decimals",
            "Percentages, Averages & Unitary Method",
            "Human Senses, Vitamins & Simple Machines",
            "Weather, Water Cycle & Solar System Basics"
          ]
        },
        {
          "name": "Part-IV: Urdu / Sindhi Regional Language",
          "marks": 15,
          "percentage": "15%",
          "description": "Grammar, idioms, reading comprehension in Urdu or Sindhi language.",
          "topics": [
            "Basic Grammar & Word Meanings",
            "Proverbs & Common Idioms",
            "Short Paragraph Reading Comprehension"
          ]
        },
        {
          "name": "Part-V: Ethics & Islamic Studies",
          "marks": 15,
          "percentage": "15%",
          "description": "Fundamental beliefs, pillars of Islam, moral values, and public service ethics.",
          "topics": [
            "Pillars of Islam (Tawheed, Salah, Zakat, Fasting, Hajj)",
            "Honesty, Public Service & Ethical Conduct",
            "Non-Muslim Ethics Curriculum"
          ]
        }
      ]
    },
    "prepModules": [
      {
        "id": "constable-math-basics",
        "title": "Elementary Arithmetic & Word Problems for STS Constable Test",
        "subject": "Basic Mathematics",
        "readTime": "10 min read",
        "contentSummary": "Core math concepts frequently tested by Sukkur IBA: Unitary method, percentages, simple averages, speed calculations, and basic geometry.",
        "bulletPoints": [
          "Unitary method: Finding the cost of one item to determine the cost of multiple items",
          "Percentage calculations: Converting fractions to percentages and calculating profit/loss",
          "Speed = Distance / Time; Conversion between km/h and m/s",
          "Perimeter and area of rectangle and square"
        ]
      },
      {
        "id": "constable-gk-sindh",
        "title": "Essential Sindh & Pakistan Facts for Screening",
        "subject": "General Knowledge",
        "readTime": "8 min read",
        "contentSummary": "Must-know facts on Sindh geography, provincial symbols, administrative divisions, and border security checkpoints.",
        "bulletPoints": [
          "Sindh shares its eastern border with India (Rajasthan) and northern borders with Punjab & Balochistan",
          "Provincial animal of Sindh is Sindh Ibex; Provincial flower is Sindhi Rose",
          "Sukkur IBA conducts computerized physical and written screening tests",
          "Physical test standard: 1.6 km (1 mile) running within 8 minutes"
        ]
      }
    ],
    "recommendedResources": [
      {
        "type": "Preparation Book",
        "title": "Sukkur IBA STS Police Constable Screening Guide",
        "author": "Dogar / Caravan Publishers",
        "edition": "Latest Edition",
        "freeAccess": "Digital Library / recommended-books.html",
        "notes": "Covers past STS Constable papers, Urdu/Sindhi grammar, and elementary math."
      }
    ],
    "practiceQuizzes": [
      {
        "title": "STS Police Constable 50-MCQ General Screening Quiz",
        "category": "cat_current_affairs_sts_200",
        "subCategory": "STS Screening MCQs",
        "count": 50,
        "difficulty": "Easy",
        "description": "Standard Sukkur IBA pattern test covering English, Math, General Knowledge, and Science."
      }
    ],
    "mockExam": {
      "title": "Sindh Police Constable 100-Mark STS Full Mock",
      "category": "cat_current_affairs_sts_200",
      "subCategory": "STS Screening MCQs",
      "timeMinutes": 100,
      "totalMarks": 100,
      "description": "Complete 100-question mock exam patterned after official Sukkur IBA screening tests."
    },
    "checklist": [
      {
        "id": "chk-constable-running",
        "text": "Physical Readiness: 1.6 km (1 Mile) running practice within 8 minutes"
      },
      {
        "id": "chk-constable-measurements",
        "text": "Physical Measurement: Height (5' 5\" male / 5' 0\" female) and Chest (33\" x 34.5\")"
      },
      {
        "id": "chk-constable-math",
        "text": "Basic Math: Fractions, Decimals, Percentages & Unitary Method"
      },
      {
        "id": "chk-constable-english",
        "text": "English: Common Spellings, Prepositions & Simple Vocabulary"
      },
      {
        "id": "chk-constable-sindh-gk",
        "text": "Sindh GK: Rivers, Barrages, Historic Sites & 30 Districts"
      },
      {
        "id": "chk-constable-science",
        "text": "Everyday Science: Human Body, Vitamins, Diseases & Solar System"
      },
      {
        "id": "chk-constable-language",
        "text": "Regional Language: Urdu or Sindhi basic grammar & proverbs"
      },
      {
        "id": "chk-constable-ethics",
        "text": "Ethics / Islamiat: Five Pillars of Islam & Civic Duties"
      }
    ]
  }`;

  // Find the last item before closing ];
  const lastIndex = content.lastIndexOf('  }\r\n];');
  if (lastIndex !== -1) {
    content = content.substring(0, lastIndex) + newJobs + '\r\n];' + content.substring(lastIndex + '  }\r\n];'.length);
  } else {
    const fallbackIndex = content.lastIndexOf('  }\n];');
    if (fallbackIndex !== -1) {
      content = content.substring(0, fallbackIndex) + newJobs + '\n];' + content.substring(fallbackIndex + '  }\n];'.length);
    }
  }

  fs.writeFileSync(dataPath, content, 'utf-8');
  console.log('Successfully appended sindh-police-asi and sindh-police-constable to data_recruitment_prep.js');
} else {
  console.log('Sindh police jobs already present in data_recruitment_prep.js');
}
