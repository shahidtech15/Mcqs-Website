const API_URL = (typeof localStorage !== 'undefined' && localStorage.getItem('mcqs_custom_api_url'))
  || ((typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? 'http://localhost:5000/api'
    : 'https://mcqs-website-backend.vercel.app/api');

// Fast API fetch wrapper with 2s timeout & session circuit-breaker when DB is in standalone mode
async function apiFetch(url, options = {}) {
  const isGet = !options.method || options.method.toUpperCase() === 'GET';
  if (isGet && typeof window !== 'undefined' && window.__mcqsApiOffline) {
    throw new Error('API in standalone fallback mode');
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 2000);
  try {
    const res = await fetch(url, { ...options, signal: options.signal || controller.signal });
    if (res.status === 503 && typeof window !== 'undefined') {
      window.__mcqsApiOffline = true;
    }
    return res;
  } catch (err) {
    if (isGet && typeof window !== 'undefined') {
      window.__mcqsApiOffline = true;
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

// HTML Sanitization & Escaping Utility to prevent Stored & Reflected XSS
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
window.escapeHtml = escapeHtml;

// ============================================================
// DARK MODE
// ============================================================
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  // Sync toggle icon with current state (body class set by anti-FOUC script on <html>)
  const applyDark = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark-mode', isDark);
  };

  // Load saved preference
  const saved = localStorage.getItem('mcqs_dark_mode') === 'true';
  applyDark(saved);

  toggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyDark(isDark);
    localStorage.setItem('mcqs_dark_mode', isDark);
  });
}
window.initDarkMode = initDarkMode;

// ============================================================
// BOOKMARKS  (localStorage)
// ============================================================
const BOOKMARK_KEY = 'mcqs_bookmarks';

function getBookmarks() {
  try {
    const raw = JSON.parse(localStorage.getItem(BOOKMARK_KEY));
    return Array.isArray(raw) ? raw.map(String) : [];
  } catch {
    return [];
  }
}

function saveBookmarks(arr) {
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify(arr));
}

function isBookmarked(id) {
  return getBookmarks().includes(String(id));
}

function updateBookmarkCount() {
  const countEl = document.getElementById('bookmarkCount');
  if (countEl) countEl.textContent = getBookmarks().length;
}

window.toggleBookmark = function(questionId) {
  let bookmarks = getBookmarks();
  const id = String(questionId);
  const btn = document.getElementById(`bookmark-btn-${id}`);

  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(b => b !== id);
    if (btn) {
      btn.classList.remove('bookmarked');
      btn.title = 'Bookmark this question';
      btn.setAttribute('aria-label', 'Bookmark this question');
      btn.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
  } else {
    bookmarks.push(id);
    if (btn) {
      btn.classList.add('bookmarked');
      btn.title = 'Remove bookmark';
      btn.setAttribute('aria-label', 'Remove bookmark');
      btn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    }
  }
  saveBookmarks(bookmarks);
  updateBookmarkCount();

  // If currently in bookmarks view, remove card if un-bookmarked
  const toolbar = document.getElementById('showBookmarksBtn');
  if (toolbar && toolbar.classList.contains('active') && !bookmarks.includes(id)) {
    const card = btn ? btn.closest('.question-card') : null;
    if (card) {
      card.style.transition = 'opacity 0.3s, transform 0.3s';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.remove();
        // show empty state if no more cards
        const list = document.getElementById('latestMcqsList');
        if (list && list.querySelectorAll('.question-card').length === 0) {
          showBookmarksEmptyState();
        }
      }, 300);
    }
  }
};

function showBookmarksEmptyState() {
  const list = document.getElementById('latestMcqsList');
  if (!list) return;
  list.innerHTML = `
    <div class="bookmarks-empty">
      <i class="fa-regular fa-bookmark"></i>
      <h3>No bookmarks yet</h3>
      <p>Click the <i class="fa-regular fa-bookmark"></i> icon on any question card to save it here for quick revision.</p>
    </div>`;
}

window.showBookmarkedQuestions = function() {
  window.scrollToSection('.latest-mcqs');
  const ids = getBookmarks();
  const btn = document.getElementById('showBookmarksBtn');
  const backBtn = document.getElementById('showAllMcqsBtn');
  const paginationContainer = document.getElementById('paginationContainer');

  if (btn) btn.classList.add('active');
  if (backBtn) backBtn.classList.remove('hidden');
  if (paginationContainer) paginationContainer.innerHTML = '';

  const list = document.getElementById('latestMcqsList');
  if (!list) return;

  if (ids.length === 0) {
    showBookmarksEmptyState();
    return;
  }

  list.innerHTML = '<div class="loading">Loading bookmarks...</div>';

  // Try to fetch from backend; fall back to CIVIL_SERVANTS_ACT_MCQS if offline
  const fetches = ids.map(id =>
    apiFetch(`${API_URL}/questions/${id}`)
      .then(r => r.ok ? r.json() : null)
      .catch(() => null)
  );

  Promise.all(fetches).then(async results => {
    if (results.some(r => !r) && typeof window.ensureCategoryScripts === 'function') {
      await window.ensureCategoryScripts('', '', 'bookmarks');
      syncCoreFallbackGlobals();
    }
    // Filter nulls; also check fallback dataset for offline questions
    const found = results.map((q, i) => {
      if (q) return q;
      // Try local fallback
      return FIA_AD_INVESTIGATION_MCQS.find(fq => String(fq._id) === String(ids[i])) || FIA_AD_LEGAL_MCQS.find(fq => String(fq._id) === String(ids[i])) || US_GEOGRAPHY_MCQS.find(fq => String(fq._id) === String(ids[i])) || MATH_LIMITS_MCQS.find(fq => String(fq._id) === String(ids[i])) || MATH_SPECIALIZED_MCQS.find(fq => String(fq._id) === String(ids[i])) || CURRENT_AFFAIRS_2026_MCQS.find(fq => String(fq._id) === String(ids[i])) || CIVIL_SERVANTS_ACT_MCQS.find(fq => String(fq._id) === String(ids[i])) || null;
    }).filter(Boolean);

    list.innerHTML = '';
    if (found.length === 0) {
      showBookmarksEmptyState();
      return;
    }
    found.forEach((q, idx) => renderQuestionCard(q, idx));
    updateBookmarkCount();
  });
};

window.showAllMcqs = function() {
  window.scrollToSection('.latest-mcqs');
  const btn = document.getElementById('showBookmarksBtn');
  const backBtn = document.getElementById('showAllMcqsBtn');
  if (btn) btn.classList.remove('active');
  if (backBtn) backBtn.classList.add('hidden');
  fetchLatestMcqs();
};

// DOM Elements
const categoriesGrid = document.getElementById('categoriesGrid');
const latestMcqsList = document.getElementById('latestMcqsList');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

// Preloaded Fallback Categories Dataset for standalone/offline capability
const FALLBACK_CATEGORIES = [
  { _id: 'cat_synonyms', name: 'English Synonyms', description: '2,000 High-Yield Synonym MCQs with complete academic definitions, parts of speech, and contextual example sentences for CSS, PMS, FPSC, PPSC, NTS, and GRE exams.', icon: 'fa-spell-check', questionCount: 2000, subcategoriesCount: 4 },
  { _id: 'cat_antonyms', name: 'English Antonyms', description: '2,000 High-Yield Antonym MCQs with contrasting words, comprehensive explanations, and illustrative sentences targeting competitive examinations.', icon: 'fa-arrows-split-up-and-left', questionCount: 2000, subcategoriesCount: 4 },
  { _id: 'cat_fia_ad_sample', name: 'FIA Assistant Director Sample Papers', description: '20 Full-Length 100-Mark Sample Papers (2,000 MCQs) for FIA Assistant Director (Investigation): 10 Standard + 10 Advanced Hard Mocks covering English (20 Marks), Basic Maths, GK, Pak Affairs, Islamiat, Current Affairs (last 5 years), Everyday Science, and FIA Act 1974.', icon: 'fa-file-shield', questionCount: 2000, subcategoriesCount: 20 },

  { _id: 'cat_world_org', name: 'World Organizations', description: 'United Nations, Specialized Agencies, Regional Blocs (NATO, EU, SCO, BRICS, SAARC, OIC, ASEAN), Financial Institutions (IMF, World Bank, WTO) & Global Treaties.', icon: 'fa-earth-americas', questionCount: 100, subcategoriesCount: 4 },
  { _id: 'cat_ai', name: 'Artificial Intelligence', description: 'Recent breakthroughs in AI: Foundation Models, LLMs, GenAI, Neural Scaling, AI Hardware, Nobel Prizes & Safety.', icon: 'fa-microchip', questionCount: 200, subcategoriesCount: 5 },
  { _id: 'cat_aao', name: 'Assistant Audit Officer (BS-17)', description: 'FPSC Syllabus: Financial & Cost Accounting, Auditing & ISSAIs, AGP Constitutional Articles 168-171, PFM Act 2019, PPRA Rules, IPSAS & Public Accountability.', icon: 'fa-file-invoice-dollar', questionCount: 750, subcategoriesCount: 15 },
  { _id: 'cat_gk', name: 'General Knowledge', description: 'World history, international organizations, geography, famous personalities, sports, science & superlatives (4,000+ Verified Questions).', icon: 'fa-globe', questionCount: 4005, subcategoriesCount: 19 },
  { _id: 'cat_math', name: 'Mathematics', description: 'Algebra, Limits & Calculus, Train problems, Compound & Simple Interest, and Advanced Math', icon: 'fa-calculator', questionCount: 324, subcategoriesCount: 46 },
  { _id: 'cat_pak', name: 'Pakistan Affairs', description: 'History, politics, constitutional developments & national movement', icon: 'fa-landmark', questionCount: 284, subcategoriesCount: 6 },
  { _id: 'cat_css', name: 'CSS Past Papers', description: 'Compulsory & optional subjects past paper MCQs', icon: 'fa-graduation-cap', questionCount: 250, subcategoriesCount: 17 },
  { _id: 'cat_cs', name: 'Computer Science', description: 'Operating Systems, MS Word, MS Excel, PowerPoint, Hardware, Networking & Computer Fundamentals.', icon: 'fa-laptop-code', questionCount: 1418, subcategoriesCount: 12 },
  { _id: 'cat_fia_ad_legal', name: 'FIA Assistant Director Legal', description: 'FPSC Syllabus: English, CrPC 1898, Qanun-e-Shahadat 1984, PPC 1860, AMLA 2010, Cyber Security/PECA, and FIA Act 1974', icon: 'fa-shield-halved', questionCount: 210, subcategoriesCount: 7 },
  { _id: 'cat_fia_ad_inv', name: 'FIA Assistant Director Investigation', description: 'FPSC Syllabus: English, General Knowledge, Everyday Science, Basic Arithmetic, Current Affairs, Pakistan Affairs & Islamic Studies, and FIA Act 1974', icon: 'fa-user-secret', questionCount: 210, subcategoriesCount: 7 },
  { _id: 'cat_eng', name: 'English', description: 'Grammar, Spotting Errors, Sentence Improvement, One Word Substitution, Idioms & Phrases, Spelling & Sentence Formation.', icon: 'fa-book-open', questionCount: 1889, subcategoriesCount: 29 },
  { _id: 'cat_science', name: 'Everyday Science', description: 'Biology, Human Anatomy, Physics, Chemistry, Vitamins, Space & Astronomy, Scientific Instruments & Rapid Capsule.', icon: 'fa-flask', questionCount: 414, subcategoriesCount: 10 },
  { _id: 'cat_ca', name: 'Current Affairs', description: 'National & international events, summits, appointments & awards of 2018-2026', icon: 'fa-newspaper', questionCount: 579, subcategoriesCount: 6 },
  { _id: 'cat_geog', name: 'Geography', description: 'Physical, political & human geography of World, Pakistan & United States', icon: 'fa-map-location-dot', questionCount: 177, subcategoriesCount: 23 },
  { _id: 'cat_sindh', name: 'Sindh General Knowledge', description: 'Sindh history, archaeology (Mohenjo Daro, Kot Diji), Sufi heritage & geography', icon: 'fa-monument', questionCount: 117, subcategoriesCount: 5 },
  { _id: 'cat_islam', name: 'Islamiat', description: 'Holy Quran, Seerat-un-Nabi (PBUH), Battles, Caliphate & Islamic history', icon: 'fa-kaaba', questionCount: 1103, subcategoriesCount: 10 },
  { _id: 'cat_pedagogy', name: 'Pedagogy', description: '500 Progressive Easy-to-Hard Pedagogy MCQs across Teaching Methods, Educational Psychology, Curriculum, Assessment, Research & Leadership', icon: 'fa-chalkboard-user', questionCount: 500, subcategoriesCount: 10 },
  { _id: 'cat_chem', name: 'Chemistry', description: 'Organic, Inorganic, Physical & Analytical Chemistry', icon: 'fa-flask-vial', questionCount: 90, subcategoriesCount: 14 },
  { _id: 'cat_meta', name: 'Metallurgical Engineering', description: 'Physical, extractive, foundry & welding metallurgy', icon: 'fa-atom', questionCount: 85, subcategoriesCount: 20 },
  { _id: 'cat_iq', name: 'IQ & Analytical Reasoning', description: 'Word analogies, coding-decoding, logical puzzles and analytical reasoning', icon: 'fa-brain', questionCount: 77, subcategoriesCount: 5 },
  { _id: 'cat_csa', name: 'Civil Servants Act, 1973', description: 'Rules, terms of service, tenure, probation & retirement under Act LXXI of 1973', icon: 'fa-scale-balanced', questionCount: 20, subcategoriesCount: 5 }
];

const KNOWN_SUBCATEGORIES = {
  "English Synonyms": [
    "CSS / PMS High-Yield Synonyms",
    "FPSC / PPSC Exam Synonyms",
    "GRE & Advanced Synonyms",
    "Foundational & Everyday Synonyms"
  ],
  "English Antonyms": [
    "CSS / PMS High-Yield Antonyms",
    "FPSC / PPSC Exam Antonyms",
    "GRE & Advanced Antonyms",
    "Foundational & Everyday Antonyms"
  ],
  "World Organizations": [
    "United Nations & Specialized Agencies",
    "Regional Alliances & Political Blocs",
    "International Financial & Trade Institutions",
    "Global Treaties, Judicial, Security & Humanitarian Bodies"
  ],
  "Artificial Intelligence": [
    "Foundation Models & Generative AI",
    "Core Architecture & Training",
    "AI Hardware & Semiconductors",
    "Scientific AI & Biotechnology",
    "AI Agents, Robotics, Safety & Governance"
  ],
  "Assistant Audit Officer (BS-17)": [
    "English: Vocabulary, Grammar & Sentence Structuring",
    "Financial Accounting: Accounting Cycle, Ledger & Adjustments",
    "Partnership & Company Accounts, Goodwill & Shares",
    "Financial Statement Analysis & Ratio Analysis",
    "Cost & Management Accounting, Budgeting & Variance",
    "Auditing: Scope, Objectives, Types & Working Papers",
    "Verification of Assets & Liabilities; Auditor Rights & Duties",
    "Public Sector Auditing & ISSAIs",
    "Constitutional Provisions relating to AGP (Articles 168-171)",
    "Audit Planning, Conduct, Reporting & PAC Role",
    "Public Sector Accounting (Cash/Accrual) & IPSAS",
    "Public Finance Management Act, 2019 & PPRA Rules",
    "Internal Controls, Fraud Detection, IT Audit & CAATs",
    "Economy of Pakistan: Budget, Taxation & Fiscal Issues",
    "Public Sector Accountability & Transparency"
  ],
  "FIA Assistant Director Investigation": [
    "Vocabulary, Grammar Usage, Sentence Structuring",
    "General Knowledge",
    "Everyday Science",
    "Basic Arithmetic",
    "Current Affairs",
    "Pakistan Affairs & Islamic Studies",
    "FIA Act, 1974"
  ],
  "FIA Assistant Director Legal": [
    "Vocabulary, Grammar Usage, Sentence Structuring",
    "Criminal Procedure Code (CrPC), 1898",
    "Qanun-e-Shahadat Order, 1984",
    "Pakistan Penal Code (PPC), 1860",
    "Anti Money Laundering Act 2010",
    "Cyber Security",
    "FIA Act, 1974"
  ],
  "Civil Servants Act, 1973": [
    "Definitions", "Terms & Conditions", "Appointments & Probation", "Promotion & Seniority", "Termination & Retirement"
  ],
  "Mathematics": [
    "Algebra", "Ratio", "Percentage", "Train problems", "Profit and Loss",
    "Compound and Simple Interest", "Limits", "Logarithms", "Geometry", "Calculus", "Mensuration", "Work and Time",
    "Average", "Number System", "Progressions", "Speed, time and distance",
    "Permutation and Combination", "Alligation", "Triangles", "Partnership",
    "Height and Distance", "Problems on Ages", "Calendar", "Clock", "Area",
    "Volume and Surface Area", "Problems on Numbers", "Problems on H.C.F and L.C.M",
    "Decimal Fraction", "Simplification", "Square Root and Cube Root", "Surds and Indices",
    "Chain Rule", "Pipes and Cistern", "Boats and Streams", "Races and Games",
    "Stocks and Shares", "Probability", "True Discount", "Bankers Discount",
    "Trigonometry", "Circular Measurement of Angle", "Coordinate Geometry",
    "Mensuration 2D", "Mensuration 3D"
  ],
  "General Knowledge": [
    "Basic General Knowledge", "World Geography", "Pakistan Geography", "World Organisations", "Famous Personalities",
    "Days and Years", "Books and Authors", "Sports", "General Science", "Physics", "Chemistry", "Biology",
    "Environmental Science", "Technology", "Inventions", "General Assessment", "Sindh General Knowledge"
  ],
  "English": [
    "Grammar", "Tenses", "Articles", "Preposition", "Direct and Indirect Speech",
    "Voice", "Synonyms", "Antonyms", "One Word Substitution", "Idioms and Phrases",
    "Spelling Check", "Sentence Completion", "Error Detection", "Spotting Errors",
    "Sentence Correction", "Sentence Improvement", "Ordering of Sentences", "Sentence Formation",
    "Selecting Words", "Completing Statements", "Ordering of Words", "Verbal Analogies"
  ],
  "Chemistry": [
    "Atomic Structure", "Acid, Base and Salts", "State of Matter", "Periodic Classification of elements",
    "Chemical Bonding and Reactions", "Biomolecules and Polymers", "Environmental Chemistry",
    "Solutions and Surface Chemistry", "Thermochemistry", "Metal and its compounds",
    "Non Metal and Its Compounds", "Organic Chemistry", "Inorganic Chemistry",
    "Chemistry in Everyday Life"
  ],
  "Metallurgical Engineering": [
    "Main Metallurgy", "Introduction to Metallurgy", "Physical Metallurgy", "Extractive Metallurgy",
    "Mechanical Metallurgy", "Material Science in Metallurgy", "Iron Making in Metallurgy",
    "Steel Making in Metallurgy", "Foundry Metallurgy", "Welding Metallurgy",
    "Metallurgy of Nuclear Metals", "ElectroMetallurgy and Corrosion", "Metallurgical Analysis",
    "Metallurgical Testing and Inspection", "Metallurgical Thermodynalics and Kinetics",
    "Mineral Dressing in Metallurgy", "Powder Metallurgy", "Fuels, Furance and Refractories Technology",
    "Physics of Metals in Metallurgy", "Miscellaneous in Metallurgy"
  ],
  "Geography": [
    "United States Geography", "Main Geography", "Indian Geography", "Universe", "Earth", "Atmosphere", "Hydrosphere",
    "Lithosphere", "Political Geography of Pakistan", "Climate and Weather in Pakistan Geography",
    "Agriculture and Soil in Pakistan Geography", "Indian Rivers, Lakes and Water",
    "Natural Resources and Industries in Indian Geography", "Natural Resources and Industries in Pakistan Geography",
    "Pakistan Rivers, Lakes and Water", "Transportation System of Pakistan",
    "Environment and Ecology in Pakistan Geography", "Population and Tribes in Pakistan Geogaphy",
    "Miscellaneous Pakistan Geography", "World Climate and Weather",
    "World Agriculture, Minerals and Industries", "World Environment and Ecology",
    "Miscellaneous World Geography"
  ],
  "CSS Past Papers": [
    "English Essay", "English (Precis & Composition)", "General Science & Ability",
    "Current Affairs", "Pakistan Affairs", "Islamic Studies", "Political Science",
    "International Relations", "Public Administration", "History of USA",
    "History of Indo-Pak", "Geography", "Sociology", "Criminology",
    "Environmental Sciences", "Town Planning & Urban Management", "Gender Studies"
  ],
  "Computer Science": [
    "MS Word", "MS Excel", "MS PowerPoint", "Programming", "Computer Networks", "Database Systems", "Operating Systems"
  ],
  "Pakistan Affairs": [
    "Pre-Independence 712-1947", "Post-Independence 1947-Present", "Constitutions of Pakistan", "Foreign Policy of Pakistan"
  ],
  "Islamiat": [
    "Holy Quran & Quranic Sciences",
    "Seerat-un-Nabi (PBUH) - Makkan Era",
    "Seerat-un-Nabi (PBUH) - Madani Era",
    "Islamic Battles (Ghazwat & Saraya)",
    "Rightly Guided Caliphate (Khulafa-e-Rashideen)",
    "Pillars of Islam (Arkan-e-Islam & Worship)",
    "Hadith, Sunnah & Compilation",
    "Islamic Jurisprudence (Fiqh & Sharia)",
    "Prophets in Islam (Qisas al-Anbiya)",
    "Companions & Islamic Civilization"
  ],
    "Everyday Science": [
    "Human Biology & Anatomy", "Vitamins & Diseases", "Physics & Inventions", "Chemistry & Elements", "Space & Solar System"
  ],
  "Sindh General Knowledge": [
    "Sindh History & Heritage", "Archaeological Sites (Mohenjo Daro, Kot Diji)", "Sufi Saints & Poets", "Geography & Barrages of Sindh"
  ],
  "IQ & Analytical Reasoning": [
    "Analogies", "Series & Sequences", "Logical Deduction", "Coding & Decoding"
  ],
  "Current Affairs": [
    "Pakistan Current Affairs", "International Current Affairs", "Global Geopolitics & Summits", "Economy & Trade Updates", "Science, Tech & Space", "Sports Updates & Awards"
  ]
};

// Core fallback arrays are lazy-loaded via js/data_core_fallback.js on demand
var CIVIL_SERVANTS_ACT_MCQS = window.CIVIL_SERVANTS_ACT_MCQS || [];
var CURRENT_AFFAIRS_2026_MCQS = window.CURRENT_AFFAIRS_2026_MCQS || [];
var MATH_SPECIALIZED_MCQS = window.MATH_SPECIALIZED_MCQS || [];
var MATH_LIMITS_MCQS = window.MATH_LIMITS_MCQS || [];
var US_GEOGRAPHY_MCQS = window.US_GEOGRAPHY_MCQS || [];
var FIA_AD_LEGAL_MCQS = window.FIA_AD_LEGAL_MCQS || [];
var FIA_AD_INVESTIGATION_MCQS = window.FIA_AD_INVESTIGATION_MCQS || [];

const INITIAL_LATEST_MCQS = [
  {
    "_id": "ca_2026_1",
    "questionText": "Which three nations are jointly hosting the 2026 FIFA World Cup, the first edition to feature 48 teams?",
    "options": {
      "A": "USA, Mexico, and Canada",
      "B": "Spain, Portugal, and Morocco",
      "C": "Argentina, Uruguay, and Paraguay",
      "D": "Australia, New Zealand, and Indonesia"
    },
    "correctAnswer": "A",
    "explanation": "The 2026 FIFA World Cup is hosted jointly by 16 cities across the United States, Canada, and Mexico, expanding the competition to 48 teams.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Sports Updates",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_2",
    "questionText": "Pakistan was overwhelmingly elected by the UN General Assembly to serve as a non-permanent member of the United Nations Security Council (UNSC) for which term?",
    "options": {
      "A": "2024–2025",
      "B": "2025–2026",
      "C": "2026–2027",
      "D": "2027–2028"
    },
    "correctAnswer": "B",
    "explanation": "Pakistan secured 182 votes in the UN General Assembly to win a two-year seat on the UN Security Council for the 2025–2026 term.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_3",
    "questionText": "The XXV Olympic Winter Games in February 2026 are scheduled to be hosted by which Italian host cities?",
    "options": {
      "A": "Rome and Naples",
      "B": "Turin and Genoa",
      "C": "Milan and Cortina d'Ampezzo",
      "D": "Florence and Venice"
    },
    "correctAnswer": "C",
    "explanation": "The 2026 Winter Olympic Games are officially hosted by Milan and Cortina d'Ampezzo in northern Italy.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Sports Updates",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_4",
    "questionText": "Which two countries are the official co-hosts of the 2026 ICC Men's T20 Cricket World Cup?",
    "options": {
      "A": "Australia and New Zealand",
      "B": "India and Sri Lanka",
      "C": "England and Ireland",
      "D": "South Africa and Zimbabwe"
    },
    "correctAnswer": "B",
    "explanation": "India and Sri Lanka are scheduled to co-host the 2026 ICC Men's T20 World Cup, featuring 20 international teams.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Sports Updates",
    "difficulty": "Easy"
  },
  {
    "_id": "ca_2026_5",
    "questionText": "What is the landmark mission profile of NASA's Artemis II lunar mission scheduled for 2025–2026?",
    "options": {
      "A": "First uncrewed lunar rover landing",
      "B": "First crewed lunar flyby test of the Orion spacecraft since 1972",
      "C": "Permanent establishment of a nuclear lunar base",
      "D": "Mining helium-3 deposits at the lunar south pole"
    },
    "correctAnswer": "B",
    "explanation": "Artemis II is NASA's first crewed mission of the Space Launch System (SLS) and Orion capsule, carrying four astronauts on a lunar flyby.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_6",
    "questionText": "Following the historic expansion of BRICS (adding Iran, UAE, Egypt, and Ethiopia), which country assumes the rotating BRICS presidency in 2026?",
    "options": {
      "A": "India",
      "B": "Russia",
      "C": "China",
      "D": "Brazil"
    },
    "correctAnswer": "A",
    "explanation": "India holds the rotating presidency of the expanded BRICS bloc for the year 2026, following Brazil's presidency in 2025.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "Global Leaders & Summits",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_7",
    "questionText": "Which city in the Brazilian Amazon was designated to host the landmark COP30 UN Climate Change Conference?",
    "options": {
      "A": "Rio de Janeiro",
      "B": "São Paulo",
      "C": "Belém",
      "D": "Brasília"
    },
    "correctAnswer": "C",
    "explanation": "Belém, the capital of the Amazonian state of Pará in Brazil, was chosen to host COP30, highlighting global tropical rainforest conservation.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "ca_2026_8",
    "questionText": "Which comprehensive regulatory framework entered full phased enforcement across Europe by 2026, categorizing AI applications by risk?",
    "options": {
      "A": "The Global AI Ban Treaty",
      "B": "The EU Artificial Intelligence Act (AI Act)",
      "C": "The Digital Millennium Intelligence Act",
      "D": "The Geneva AI Convention"
    },
    "correctAnswer": "B",
    "explanation": "The European Union's AI Act is the world's first comprehensive horizontal legal regime regulating artificial intelligence by risk tiers.",
    "category": {
      "_id": "cat_ca",
      "name": "Current Affairs"
    },
    "subCategory": "International Current Affairs",
    "difficulty": "Medium"
  },
  {
    "_id": "csa_1",
    "questionText": "Under Section 4 of the Civil Servants Act, 1973, every civil servant holds office during the pleasure of:",
    "options": {
      "A": "The Prime Minister",
      "B": "The President",
      "C": "The Federal Public Service Commission",
      "D": "The Chief Justice of Pakistan"
    },
    "correctAnswer": "B",
    "explanation": "According to Section 4 of the Civil Servants Act, 1973, every civil servant holds office during the pleasure of the President.",
    "category": {
      "_id": "cat_csa",
      "name": "Civil Servants Act, 1973"
    },
    "subCategory": "Terms & Conditions",
    "difficulty": "Easy"
  },
  {
    "_id": "csa_2",
    "questionText": "Which of the following is EXCLUDED from the definition of a 'civil servant' under Section 2(1)(b) of the Civil Servants Act, 1973?",
    "options": {
      "A": "A member of an All-Pakistan Service",
      "B": "A person holding a civil post in connection with affairs of the Federation",
      "C": "A person who is on deputation to the Federation from any Province",
      "D": "A post connected with defence"
    },
    "correctAnswer": "C",
    "explanation": "Under Section 2(1)(b)(i), a person on deputation to the Federation from any Province or other authority is explicitly excluded from being a civil servant.",
    "category": {
      "_id": "cat_csa",
      "name": "Civil Servants Act, 1973"
    },
    "subCategory": "Definitions",
    "difficulty": "Medium"
  },
  {
    "_id": "csa_3",
    "questionText": "According to Section 13(1)(ii) of the Civil Servants Act, 1973, a civil servant shall retire from service on completion of the:",
    "options": {
      "A": "58th year of age",
      "B": "60th year of age",
      "C": "62nd year of age",
      "D": "65th year of age"
    },
    "correctAnswer": "B",
    "explanation": "Under Section 13(1)(ii), a civil servant retires from service on the completion of the 60th year of his/her age.",
    "category": {
      "_id": "cat_csa",
      "name": "Civil Servants Act, 1973"
    },
    "subCategory": "Termination & Retirement",
    "difficulty": "Easy"
  },
  {
    "_id": "csa_4",
    "questionText": "Under Section 13(1)(i), a civil servant may be retired in public interest after completing how many years of qualifying service?",
    "options": {
      "A": "15 years",
      "B": "20 years",
      "C": "25 years",
      "D": "30 years"
    },
    "correctAnswer": "B",
    "explanation": "As per Section 13(1)(i) (amended), a civil servant may retire or be directed to retire after completing twenty (20) years of service qualifying for pension.",
    "category": {
      "_id": "cat_csa",
      "name": "Civil Servants Act, 1973"
    },
    "subCategory": "Termination & Retirement",
    "difficulty": "Medium"
  },
  {
    "_id": "csa_5",
    "questionText": "According to Section 2(1)(a) of the Civil Servants Act, 1973, an 'ad hoc appointment' means:",
    "options": {
      "A": "An appointment made for a permanent post without probation",
      "B": "Appointment of a qualified person made otherwise than in accordance with prescribed method pending regular recruitment",
      "C": "An appointment made by direct transfer from a Provincial government",
      "D": "An appointment made on contract for a fixed period of 5 years"
    },
    "correctAnswer": "B",
    "explanation": "Section 2(1)(a) defines ad hoc appointment as appointment of a duly qualified person made otherwise than in accordance with the prescribed method of recruitment, pending recruitment.",
    "category": {
      "_id": "cat_csa",
      "name": "Civil Servants Act, 1973"
    },
    "subCategory": "Definitions",
    "difficulty": "Medium"
  },
  {
    "_id": "csa_6",
    "questionText": "Under Section 9(3) of the Act, promotion to posts in Basic Pay Scale (BPS) 20 and 21 shall be made on the recommendations of a Selection Board headed by:",
    "options": {
      "A": "The Federal Law Minister",
      "B": "The Cabinet Secretary",
      "C": "The Chairman, Federal Public Service Commission (FPSC)",
      "D": "The Secretary Establishment Division"
    },
    "correctAnswer": "C",
    "explanation": "Under Section 9(3), promotion to posts in BPS 20 and 21 is made on recommendations of a Selection Board headed by the Chairman, FPSC.",
    "category": {
      "_id": "cat_csa",
      "name": "Civil Servants Act, 1973"
    },
    "subCategory": "Promotion & Seniority",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_1",
    "questionText": "Select the word that is most nearly SIMILAR in meaning to 'ABSTEMIOUS':",
    "options": {
      "A": "Temperate",
      "B": "Gluttonous",
      "C": "Indulgent",
      "D": "Voracious"
    },
    "correctAnswer": "A",
    "explanation": "'Abstemious' means indulging only very moderately in something, especially food and drink; synonymous with 'temperate' or self-restrained.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  },
  {
    "_id": "fia_inv_2",
    "questionText": "Choose the word most OPPOSITE in meaning to 'LACONIC':",
    "options": {
      "A": "Concise",
      "B": "Terse",
      "C": "Verbose",
      "D": "Succinct"
    },
    "correctAnswer": "C",
    "explanation": "'Laconic' means using very few words. Its antonym is 'verbose' (wordy or prolix).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_3",
    "questionText": "Select the correct option to fill in the blank: 'He was acquitted _____ all charges brought against him by the tribunal.'",
    "options": {
      "A": "from",
      "B": "of",
      "C": "with",
      "D": "against"
    },
    "correctAnswer": "B",
    "explanation": "The verb 'acquit' takes the preposition 'of' ('acquitted of all charges').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Easy"
  },
  {
    "_id": "fia_inv_4",
    "questionText": "Choose the correct sentence:",
    "options": {
      "A": "Neither the Director General nor his deputies has attended the press conference.",
      "B": "Neither the Director General nor his deputies have attended the press conference.",
      "C": "Neither the Director General or his deputies have attended the press conference.",
      "D": "Neither the Director General nor his deputies is attending the press conference."
    },
    "correctAnswer": "B",
    "explanation": "In subject-verb agreement with 'neither... nor', the verb agrees with the closer subject ('his deputies' is plural, so 'have attended' is correct).",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_5",
    "questionText": "Select the option that correctly converts to indirect speech: The inspector said to the witness, 'Did you see the suspect leaving the building?'",
    "options": {
      "A": "The inspector asked the witness whether he had seen the suspect leaving the building.",
      "B": "The inspector asked the witness if he saw the suspect leaving the building.",
      "C": "The inspector told the witness whether he has seen the suspect leaving the building.",
      "D": "The inspector enquired the witness if he was seeing the suspect leaving the building."
    },
    "correctAnswer": "A",
    "explanation": "In direct questions starting with auxiliary 'Did' (past simple), the indirect form uses 'if' or 'whether' followed by the past perfect ('had seen').",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Medium"
  },
  {
    "_id": "fia_inv_6",
    "questionText": "Identify the word closest in meaning to 'RECALCITRANT':",
    "options": {
      "A": "Compliant",
      "B": "Disobedient",
      "C": "Submissive",
      "D": "Tractable"
    },
    "correctAnswer": "B",
    "explanation": "'Recalcitrant' means having an obstinately uncooperative attitude toward authority or discipline; disobedient.",
    "category": {
      "_id": "cat_fia_ad_inv",
      "name": "FIA Assistant Director Investigation"
    },
    "subCategory": "Vocabulary, Grammar Usage, Sentence Structuring",
    "difficulty": "Hard"
  }
];

function syncCoreFallbackGlobals() {
  if (Array.isArray(window.CIVIL_SERVANTS_ACT_MCQS)) CIVIL_SERVANTS_ACT_MCQS = window.CIVIL_SERVANTS_ACT_MCQS;
  if (Array.isArray(window.CURRENT_AFFAIRS_2026_MCQS)) CURRENT_AFFAIRS_2026_MCQS = window.CURRENT_AFFAIRS_2026_MCQS;
  if (Array.isArray(window.MATH_SPECIALIZED_MCQS)) MATH_SPECIALIZED_MCQS = window.MATH_SPECIALIZED_MCQS;
  if (Array.isArray(window.MATH_LIMITS_MCQS)) MATH_LIMITS_MCQS = window.MATH_LIMITS_MCQS;
  if (Array.isArray(window.US_GEOGRAPHY_MCQS)) US_GEOGRAPHY_MCQS = window.US_GEOGRAPHY_MCQS;
  if (Array.isArray(window.FIA_AD_LEGAL_MCQS)) FIA_AD_LEGAL_MCQS = window.FIA_AD_LEGAL_MCQS;
  if (Array.isArray(window.FIA_AD_INVESTIGATION_MCQS)) FIA_AD_INVESTIGATION_MCQS = window.FIA_AD_INVESTIGATION_MCQS;
}

// Global Store of Categories loaded
let loadedCategories = [];
let activeCategoryId = null;
let activeCategoryName = null;

// Fetch and display Categories with question counts and badges
async function fetchCategories() {
  if (!categoriesGrid) return;

  try {
    const response = await apiFetch(`${API_URL}/categories/with-counts`);
    if (!response.ok) throw new Error('API request failed');
    loadedCategories = await response.json();
  } catch (error) {
    console.warn('Backend unavailable, using preloaded categories fallback.');
    loadedCategories = FALLBACK_CATEGORIES;
  }

  renderCategoriesGrid(loadedCategories);
}

function renderCategoriesGrid(categories) {
  if (!categoriesGrid) return;
  categoriesGrid.innerHTML = '';

  if (categories.length === 0) {
    categoriesGrid.innerHTML = '<p>No categories found.</p>';
    return;
  }

  const iconMap = {
    'Mathematics': 'fa-calculator',
    'Computer Science': 'fa-laptop-code',
    'English': 'fa-book-open',
    'General Knowledge': 'fa-globe',
    'FIA Assistant Director Sample Papers': 'fa-file-shield',
    'Chemistry': 'fa-flask',
    'Geography': 'fa-map-location-dot',
    'Pakistan Affairs': 'fa-landmark',
    'Islamiat': 'fa-kaaba',
    'Current Affairs': 'fa-newspaper',
    'CSS Past Papers': 'fa-graduation-cap',
    'FIA Assistant Director Legal': 'fa-shield-halved',
    'FIA Assistant Director Investigation': 'fa-user-secret',
    'Metallurgical Engineering': 'fa-atom'
  };



  const defaultIcons = ['fa-book', 'fa-globe', 'fa-laptop-code', 'fa-flask', 'fa-landmark'];

  categories.forEach((category, index) => {
    const icon = category.icon || iconMap[category.name] || defaultIcons[index % defaultIcons.length];
    const qCount = category.questionCount !== undefined ? `${category.questionCount}+ MCQs` : 'Practice MCQs';
    const subCount = category.subcategoriesCount || (KNOWN_SUBCATEGORIES[category.name] ? KNOWN_SUBCATEGORIES[category.name].length : 0);
    const topicBadge = subCount > 0 ? `<span><i class="fa-solid fa-layer-group"></i> ${subCount} Topics</span>` : '';

    const card = document.createElement('div');
    card.className = 'category-card';
    card.setAttribute('data-id', category._id);
    card.setAttribute('data-name', category.name);

    if (activeCategoryId === category._id || activeCategoryName === category.name) {
      card.classList.add('active');
    }

    card.innerHTML = `
      <div class="category-icon">
        <i class="fa-solid ${icon}"></i>
      </div>
      <h3>${category.name}</h3>
      <p>${category.description || 'Explore top MCQs & quizzes'}</p>
      <div class="category-stats-badge">
        <span><i class="fa-solid fa-circle-question"></i> ${qCount}</span>
        ${topicBadge}
      </div>
    `;

    card.onclick = () => launchCategory(category._id, category.name);
    categoriesGrid.appendChild(card);
  });
}

// High-precision smooth scroll with sticky navbar offset
window.scrollToSection = function (target, offset = 85) {
  const el = typeof target === 'string' ? (document.querySelector(target) || document.getElementById(target)) : target;
  if (!el) return;

  // Don't scroll to completely hidden elements
  if (el.offsetParent === null && window.getComputedStyle(el).display === 'none') {
    return;
  }

  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: 'smooth'
  });
};

// Universal Category Launcher
window.launchCategory = async function (categoryId, categoryName) {
  activeCategoryId = categoryId;
  activeCategoryName = categoryName;

  // Highlight selected category card in grid
  document.querySelectorAll('.category-card').forEach(card => {
    if (card.getAttribute('data-id') === categoryId || card.getAttribute('data-name') === categoryName) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  // Discover subcategories from known subcategories immediately
  let subCategories = KNOWN_SUBCATEGORIES[categoryName] || [];

  if (subCategories.length > 0) {
    showSubcategories(categoryId, categoryName, subCategories);
    // Instant smooth scroll so user lands right at the topics/modules
    window.scrollToSection('#subcategoriesSection');
  } else {
    hideSubcategories();
    fetchCategoryMcqs(categoryId, categoryName, '');
    // Instant smooth scroll down to the MCQs section
    window.scrollToSection('.latest-mcqs');
  }

  // Asynchronously check for any dynamic subcategories from API in background without blocking
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${API_URL}/categories/${categoryId}/subcategories`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const fetchedSubs = await res.json();
      if (Array.isArray(fetchedSubs) && fetchedSubs.length > 0) {
        const merged = Array.from(new Set([...fetchedSubs, ...subCategories]));
        if (merged.length !== subCategories.length) {
          subCategories = merged;
          showSubcategories(categoryId, categoryName, subCategories);
        }
      }
    }
  } catch (err) {
    // Continue with KNOWN_SUBCATEGORIES
  }
};



// Launch category by name (for secondary navbar & header links)
window.launchCategoryByName = function (categoryName) {
  const match = loadedCategories.find(c => c.name.toLowerCase() === categoryName.toLowerCase());
  if (match) {
    launchCategory(match._id, match.name);
  } else {
    // If categories not yet loaded, find in fallback dataset or trigger with string
    const fallbackMatch = FALLBACK_CATEGORIES.find(c => c.name.toLowerCase() === categoryName.toLowerCase());
    const catId = fallbackMatch ? fallbackMatch._id : categoryName;
    launchCategory(catId, categoryName);
  }
};



// Show Subcategories dynamically
function showSubcategories(categoryId, categoryName, subCategories) {
  const subSection = document.getElementById('subcategoriesSection');
  const chipsContainer = document.getElementById('subcategoriesChips');
  const subHeader = document.getElementById('subcategoriesHeader');
  const topicSearch = document.getElementById('topicSearchInput');

  if (!subSection || !chipsContainer) return;

  subSection.classList.remove('hidden');
  if (subHeader) {
    subHeader.innerText = `${categoryName} Topics & Modules`;
  }

  if (topicSearch) {
    if (subCategories.length > 8) {
      topicSearch.style.display = 'block';
      topicSearch.value = '';
    } else {
      topicSearch.style.display = 'none';
    }
  }

  chipsContainer.innerHTML = '';

  const vibrantColors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
    '#ec4899', '#06b6d4', '#14b8a6', '#f43f5e', '#6366f1',
    '#d946ef', '#0ea5e9', '#84cc16', '#f97316', '#1e40af'
  ];

  // "All Topics" button
  const allChip = document.createElement('button');
  allChip.className = 'subcategory-chip active';
  allChip.innerText = `All ${categoryName} MCQs`;
  allChip.style.backgroundColor = '#1e293b';
  allChip.onclick = (e) => handleSubcategoryClick(categoryId, categoryName, '', e.currentTarget);
  chipsContainer.appendChild(allChip);

  // Subcategory buttons
  subCategories.forEach((sub, index) => {
    const chip = document.createElement('button');
    chip.className = 'subcategory-chip';
    const color = vibrantColors[index % vibrantColors.length];
    chip.style.backgroundColor = color;
    chip.dataset.baseColor = color;
    chip.innerText = sub;
    chip.onclick = (e) => handleSubcategoryClick(categoryId, categoryName, sub, e.currentTarget);
    chipsContainer.appendChild(chip);
  });

  // Inject dynamic "Take Quiz" Button with explicit category & topic URL params
  let existingQuizBtn = document.getElementById('categoryQuizActionBtn');
  if (existingQuizBtn) existingQuizBtn.remove();

  const quizActionDiv = document.createElement('div');
  quizActionDiv.id = 'categoryQuizActionBtn';
  const encodedCatId = encodeURIComponent(categoryId);
  const encodedCatName = encodeURIComponent(categoryName);

  quizActionDiv.innerHTML = `
    <button onclick="window.location.href='quiz.html?categoryId=${encodedCatId}&categoryName=${encodedCatName}'" 
            class="btn-primary" 
            style="margin-top: 20px; width: 100%; border-radius: 8px; font-size: 1.1rem; padding: 14px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); box-shadow: 0 4px 12px rgba(37,99,235,0.3);">
        <i class="fa-solid fa-play"></i> Start Quiz Simulation (${categoryName})
    </button>
  `;
  chipsContainer.appendChild(quizActionDiv);

  // Fetch all questions for this category by default
  fetchCategoryMcqs(categoryId, categoryName, '');
}

// Filter subcategory chips based on search input
window.filterSubcategoryChips = function () {
  const input = document.getElementById('topicSearchInput');
  if (!input) return;
  const filter = input.value.toLowerCase();
  const chips = document.querySelectorAll('#subcategoriesChips .subcategory-chip');

  chips.forEach(chip => {
    const text = chip.innerText.toLowerCase();
    if (text.includes('all ') || text.includes(filter)) {
      chip.style.display = 'flex';
    } else {
      chip.style.display = 'none';
    }
  });
};



// Hide Subcategories section
function hideSubcategories() {
  const subSection = document.getElementById('subcategoriesSection');
  if (subSection) subSection.classList.add('hidden');
}

// Handle clicking a specific subcategory
function handleSubcategoryClick(categoryId, categoryName, subCategory, clickedElement) {
  document.querySelectorAll('.subcategory-chip').forEach(chip => chip.classList.remove('active'));
  if (clickedElement) clickedElement.classList.add('active');

  // Update quiz redirect button to include subcategory parameter
  const quizBtnContainer = document.getElementById('categoryQuizActionBtn');
  if (quizBtnContainer) {
    const encodedCatId = encodeURIComponent(categoryId);
    const encodedCatName = encodeURIComponent(categoryName);
    const encodedSubCat = encodeURIComponent(subCategory);
    const subLabel = subCategory ? ` - ${subCategory}` : '';

    quizBtnContainer.innerHTML = `
      <button onclick="window.location.href='quiz.html?categoryId=${encodedCatId}&categoryName=${encodedCatName}&subCategory=${encodedSubCat}'" 
              class="btn-primary" 
              style="margin-top: 20px; width: 100%; border-radius: 8px; font-size: 1.1rem; padding: 14px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); box-shadow: 0 4px 12px rgba(37,99,235,0.3);">
          <i class="fa-solid fa-play"></i> Start Quiz Simulation (${categoryName}${subLabel})
      </button>
    `;
  }

  fetchCategoryMcqs(categoryId, categoryName, subCategory);
  window.scrollToSection('.latest-mcqs');
}

// Global State for Pagination
let currentFetchOptions = { type: 'latest' };


let currentPage = 1;

// Unified MCQ fetcher with pagination and offline support
async function loadMcqs(page = 1) {
  if (!latestMcqsList) return;
  currentPage = page;
  let url = `${API_URL}/questions?page=${page}&limit=10`;
  let heading = 'Latest MCQs';

  if (currentFetchOptions.type === 'search') {
    url += `&search=${encodeURIComponent(currentFetchOptions.query)}`;
    heading = `Search Results for "${currentFetchOptions.query}"`;
  } else if (currentFetchOptions.type === 'category') {
    url += `&category=${encodeURIComponent(currentFetchOptions.categoryId)}`;
    if (currentFetchOptions.subCategory) {
      url += `&subCategory=${encodeURIComponent(currentFetchOptions.subCategory)}`;
    }
    heading = currentFetchOptions.subCategory
      ? `${currentFetchOptions.categoryName} - ${currentFetchOptions.subCategory} MCQs`
      : `${currentFetchOptions.categoryName} MCQs`;
  }

  try {
    latestMcqsList.innerHTML = '<div class="loading">Loading questions...</div>';
    const sectionTitle = document.querySelector('.latest-mcqs .section-title h2');
    if (sectionTitle) sectionTitle.innerText = heading;

    const response = await apiFetch(url);
    if (!response.ok) throw new Error('Failed to load questions from backend');
    const data = await response.json();

    const questions = Array.isArray(data) ? data : data.questions;
    const totalPages = data.totalPages || 1;

    latestMcqsList.innerHTML = '';

    if (!questions || questions.length === 0) {
      latestMcqsList.innerHTML = '<p class="text-center" style="padding:20px; color:var(--text-light);">No questions found for this topic yet. Check back soon!</p>';
      renderPagination(1, 1);
      return;
    }

    questions.forEach((q, index) => {
      renderQuestionCard(q, index);
    });

    renderPagination(currentPage, totalPages);

  } catch (error) {
    console.warn('Error or backend down, loading sample question view:', error);
    await renderSampleQuestionsFallback();
  }
}

async function renderSampleQuestionsFallback() {
  if (!latestMcqsList) return;
  const _catName = currentFetchOptions.categoryName || '';
  const _subCat = currentFetchOptions.subCategory || '';
  const _catId = currentFetchOptions.categoryId || '';
  if (typeof window.ensureCategoryScripts === 'function') {
    if (currentFetchOptions.type === 'search') {
      latestMcqsList.innerHTML = '<div class="loading">Searching question banks...</div>';
      await window.ensureCategoryScripts('', '', 'search');
    } else if (currentFetchOptions.type === 'category') {
      latestMcqsList.innerHTML = '<div class="loading">Loading category question bank...</div>';
      await window.ensureCategoryScripts(_catName || _catId, _subCat, 'category');
    } else if (currentPage > 1) {
      await window.ensureCategoryScripts('', '', 'latest-more');
    }
  }
  syncCoreFallbackGlobals();
  if (!latestMcqsList) return;
  const categoryName = currentFetchOptions.categoryName || '';
  const subCategory = currentFetchOptions.subCategory || '';
  const catId = currentFetchOptions.categoryId || '';
  const all2200 = (typeof window !== 'undefined' && Array.isArray(window.ALL_2200_MCQS)) ? window.ALL_2200_MCQS : [];
  const islamiat1000 = (typeof window !== 'undefined' && Array.isArray(window.ISLAMIAT_1000_MCQS)) ? window.ISLAMIAT_1000_MCQS : [];
  const pedagogy500 = (typeof window !== 'undefined' && Array.isArray(window.PEDAGOGY_500_MCQS)) ? window.PEDAGOGY_500_MCQS : [];
  const sciInst = (typeof window !== 'undefined' && Array.isArray(window.SCIENCE_INSTRUMENTS_MCQS)) ? window.SCIENCE_INSTRUMENTS_MCQS : [];
  const examveda = (typeof window !== 'undefined' && Array.isArray(window.EXAMVEDA_MCQS)) ? window.EXAMVEDA_MCQS : [];
  const sciCapsule = (typeof window !== 'undefined' && Array.isArray(window.SCIENCE_CAPSULE_MCQS)) ? window.SCIENCE_CAPSULE_MCQS : [];
  const aao = (typeof window !== 'undefined' && Array.isArray(window.AAO_MCQS)) ? window.AAO_MCQS : [];
  const ca200 = (typeof window !== 'undefined' && Array.isArray(window.CURRENT_AFFAIRS_200_MCQS)) ? window.CURRENT_AFFAIRS_200_MCQS : [];
  const caSts = (typeof window !== 'undefined' && Array.isArray(window.CURRENT_AFFAIRS_STS_200_MCQS)) ? window.CURRENT_AFFAIRS_STS_200_MCQS : [];
  const aiMcqs = (typeof window !== 'undefined' && Array.isArray(window.AI_MCQS)) ? window.AI_MCQS : [];
  const worldOrgMcqs = (typeof window !== 'undefined' && Array.isArray(window.WORLD_ORG_MCQS)) ? window.WORLD_ORG_MCQS : [];
  const synMcqs = (typeof window !== 'undefined' && Array.isArray(window.SYNONYMS_MCQS)) ? window.SYNONYMS_MCQS : [];
  const antMcqs = (typeof window !== 'undefined' && Array.isArray(window.ANTONYMS_MCQS)) ? window.ANTONYMS_MCQS : [];
  const isSynonyms = categoryName.toLowerCase().includes('synonym') || catId.toLowerCase().includes('cat_synonyms');
  const isAntonyms = categoryName.toLowerCase().includes('antonym') || catId.toLowerCase().includes('cat_antonyms');

  let pool = [];

  
  
  const isFiaSample = categoryName.toLowerCase().includes('sample paper') ||
                       categoryName.toLowerCase().includes('fia assistant director sample') ||
                       catId.toLowerCase().includes('cat_fia_ad_sample');
  if (isFiaSample) {
    window.location.href = 'fia-sample-papers.html';
    return;
  }

  const isWorldOrg = categoryName.toLowerCase().includes('world organization') || 
               categoryName.toLowerCase().includes('international organization') || 
               catId.toLowerCase().includes('cat_world_org') || 
               catId === 'World Organizations';
  const isAI = categoryName.toLowerCase().includes('artificial intelligence') || 
               categoryName.toLowerCase().includes('artificial') || 
               catId.toLowerCase().includes('cat_ai') || 
               catId === 'Artificial Intelligence';
  const isAAO = categoryName.toLowerCase().includes('audit officer') || 
                categoryName.toLowerCase().includes('assistant audit') || 
                catId.toLowerCase().includes('cat_aao') || 
                catId === 'Assistant Audit Officer (BS-17)';
  const isCivilServants = categoryName.toLowerCase().includes('civil servant') || 
                          catId.toLowerCase().includes('csa') || 
                          catId === 'Civil Servants Act, 1973';

  const isCurrentAffairs = categoryName.toLowerCase().includes('current affairs') || 
                           catId.toLowerCase().includes('cat_ca') || 
                           catId === 'Current Affairs';

  const isMath = categoryName.toLowerCase().includes('mathematics') || 
                 categoryName.toLowerCase().includes('math') || 
                 catId.toLowerCase().includes('cat_math') || 
                 catId === 'Mathematics';

  const isScience = (categoryName.toLowerCase().includes('everyday science') || 
                    (categoryName.toLowerCase().includes('science') && !categoryName.toLowerCase().includes('computer'))) && 
                    !catId.toLowerCase().includes('cat_cs');

  const isSindh = categoryName.toLowerCase().includes('sindh') || 
                  catId.toLowerCase().includes('sindh');

  const isIslamiat = categoryName.toLowerCase().includes('islam') || 
                     catId.toLowerCase().includes('islam');

  const isPedagogy = categoryName.toLowerCase().includes('pedagog') ||
                     catId.toLowerCase().includes('pedagog');

  const isIQ = categoryName.toLowerCase().includes('iq') || 
               categoryName.toLowerCase().includes('reasoning') || 
               catId.toLowerCase().includes('cat_iq');

  const isEnglish = categoryName.toLowerCase().includes('english') || 
                    catId.toLowerCase().includes('cat_eng');

  const isGK = categoryName.toLowerCase().includes('general knowledge') || 
               catId === 'cat_gk' || 
               catId === 'General Knowledge';

  const isPakAffairs = categoryName.toLowerCase().includes('pakistan affairs') || 
                       catId.toLowerCase().includes('cat_pak') || 
                       catId === 'Pakistan Affairs';

  const isGeography = categoryName.toLowerCase().includes('geography') || 
                      catId.toLowerCase().includes('cat_geog') || 
                      catId === 'Geography';

  const isCS = categoryName.toLowerCase().includes('computer') || 
               catId.toLowerCase().includes('cat_cs') || 
               catId === 'Computer Science';

  if (isPedagogy) {
    pool = [...pedagogy500];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isSynonyms) {
    pool = [...synMcqs];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isAntonyms) {
    pool = [...antMcqs];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isWorldOrg) {
    pool = [...worldOrgMcqs];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isAI) {
    pool = [...aiMcqs];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isAAO) {
    pool = [...aao];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isCivilServants) {
    pool = [...CIVIL_SERVANTS_ACT_MCQS];
    if (subCategory) {
      pool = pool.filter(q => q.subCategory.toLowerCase() === subCategory.toLowerCase());
    }
  } else if (isCurrentAffairs) {
    const suhagCA = all2200.filter(q => q.category && q.category.name === 'Current Affairs');
    pool = [...CURRENT_AFFAIRS_2026_MCQS, ...ca200, ...caSts, ...suhagCA];
    if (subCategory) {
      pool = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
    }
  } else if (isMath) {
    const suhagMath = all2200.filter(q => q.category && q.category.name === 'Mathematics');
    pool = [...MATH_LIMITS_MCQS, ...MATH_SPECIALIZED_MCQS, ...suhagMath];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isScience) {
    const suhagSci = all2200.filter(q => q.category && q.category.name === 'Everyday Science');
    const evSci = examveda.filter(q => q.subCategory && ['General Science', 'Physics', 'Chemistry', 'Biology', 'Environmental Science'].includes(q.subCategory));
    pool = [...suhagSci, ...sciInst, ...sciCapsule, ...evSci];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isSindh) {
    pool = all2200.filter(q => q.category && q.category.name === 'Sindh General Knowledge');
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isIslamiat) {
    const suhagIslam = all2200.filter(q => q.category && q.category.name === 'Islamiat');
    pool = [...islamiat1000, ...suhagIslam];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isIQ) {
    pool = all2200.filter(q => q.category && q.category.name === 'IQ & Analytical Reasoning');
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isEnglish) {
    const suhagEng = all2200.filter(q => q.category && q.category.name === 'English');
    const evEng = examveda.filter(q => q.category && q.category.name === 'English');
    pool = [...suhagEng, ...evEng];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isCS) {
    const suhagCS = all2200.filter(q => q.category && q.category.name === 'Computer Science');
    const evCS = examveda.filter(q => q.category && q.category.name === 'Computer Science');
    pool = [...suhagCS, ...evCS];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isPakAffairs) {
    pool = all2200.filter(q => q.category && q.category.name === 'Pakistan Affairs');
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isGeography) {
    const suhagGeog = all2200.filter(q => q.category && q.category.name === 'Geography');
    pool = [...suhagGeog, ...US_GEOGRAPHY_MCQS];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (isGK) {
    pool = all2200.filter(q => q.category && q.category.name === 'General Knowledge');
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory && q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (categoryName.toLowerCase().includes('investigation') || catId.toLowerCase().includes('inv') || catId === 'cat_fia_ad_inv') {
    pool = [...FIA_AD_INVESTIGATION_MCQS];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (categoryName.toLowerCase().includes('fia') || catId.toLowerCase().includes('fia') || catId === 'cat_fia_ad_legal') {
    pool = [...FIA_AD_LEGAL_MCQS];
    if (subCategory) {
      const filtered = pool.filter(q => q.subCategory.toLowerCase() === subCategory.toLowerCase());
      if (filtered.length > 0) pool = filtered;
    }
  } else if (currentFetchOptions.type === 'category') {
    // Check if any category match in all2200
    const matched = all2200.filter(q => q.category && (
      q.category.name.toLowerCase().includes(categoryName.toLowerCase()) || 
      categoryName.toLowerCase().includes(q.category.name.toLowerCase())
    ));
    if (matched.length > 0) {
      pool = matched;
    } else {
      pool = [
        {
          _id: 'q_sample_1',
          questionText: `What is the primary objective of studying ${categoryName}${subCategory ? ' (' + subCategory + ')' : ''}?`,
          options: { A: 'Conceptual understanding and practical problem solving', B: 'Rote memorization only', C: 'Historical documentation only', D: 'None of the above' },
          correctAnswer: 'A',
          explanation: `${categoryName} requires building strong fundamental concepts and practical application skills.`,
          category: { name: categoryName },
          subCategory: subCategory,
          difficulty: 'Medium'
        }
      ];
    }
  } else if (currentFetchOptions.type === 'search') {
    const q = (currentFetchOptions.query || '').toLowerCase();
    const combinedPool = [
      ...all2200,
      ...FIA_AD_INVESTIGATION_MCQS,
      ...FIA_AD_LEGAL_MCQS,
      ...US_GEOGRAPHY_MCQS,
      ...MATH_LIMITS_MCQS,
      ...MATH_SPECIALIZED_MCQS,
      ...CURRENT_AFFAIRS_2026_MCQS,
      ...ca200,
      ...caSts,
      ...aiMcqs,
      ...worldOrgMcqs,
      ...CIVIL_SERVANTS_ACT_MCQS,
      ...aao
    ];
    pool = combinedPool.filter(m => 
      m.questionText.toLowerCase().includes(q) || 
      (m.subCategory && m.subCategory.toLowerCase().includes(q)) ||
      (m.category && m.category.name && m.category.name.toLowerCase().includes(q)) ||
      (m.options && Object.values(m.options).some(opt => opt && opt.toLowerCase().includes(q)))
    );
  } else {
    // Latest MCQs feed: include representative sample across subjects
    pool = all2200.length > 0
      ? [
          ...all2200.slice(0, 150),
          ...CURRENT_AFFAIRS_2026_MCQS,
          ...CIVIL_SERVANTS_ACT_MCQS,
          ...FIA_AD_INVESTIGATION_MCQS.slice(0, 30)
        ]
      : [...INITIAL_LATEST_MCQS];
  }

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(pool.length / pageSize));
  const page = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (page - 1) * pageSize;
  const pagedQuestions = pool.slice(startIndex, startIndex + pageSize);

  latestMcqsList.innerHTML = '';
  if (pagedQuestions.length === 0) {
    latestMcqsList.innerHTML = '<p class="text-center" style="padding:20px; color:var(--text-light);">No questions found for this topic yet.</p>';
  } else {
    pagedQuestions.forEach((q, index) => renderQuestionCard(q, index));
  }

  renderPagination(page, totalPages);
}

function renderQuestionCard(q, index) {
  const card = document.createElement('div');
  card.className = 'question-card fade-in';
  card.style.animationDelay = `${index * 0.05}s`;

  const categoryName = q.category ? (q.category.name || q.category) : 'General';
  const subCatBadge = q.subCategory ? `<span class="category-badge" style="background:var(--primary-color);color:#fff;">${q.subCategory}</span>` : '';

  const commentsHtml = (q.comments || []).map(c => `
        <div class="comment-item">
            <div class="comment-date">${escapeHtml(new Date(c.date || Date.now()).toLocaleDateString())}</div>
            <div class="comment-text">${escapeHtml(c.text)}</div>
        </div>
      `).join('');

  card.innerHTML = `
        <div class="card-header">
          <div>
            <span class="category-badge">${categoryName}</span>
            ${subCatBadge}
          </div>
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="difficulty-badge difficulty-${q.difficulty || 'Medium'}">${q.difficulty || 'Medium'}</span>
            <button class="bookmark-btn${isBookmarked(q._id) ? ' bookmarked' : ''}"
                    id="bookmark-btn-${q._id}"
                    onclick="toggleBookmark('${q._id}')"
                    title="${isBookmarked(q._id) ? 'Remove bookmark' : 'Bookmark this question'}"
                    aria-label="${isBookmarked(q._id) ? 'Remove bookmark' : 'Bookmark this question'}">
              <i class="fa-${isBookmarked(q._id) ? 'solid' : 'regular'} fa-bookmark"></i>
            </button>
          </div>
        </div>
        <div class="question-text">
          ${q.questionText}
        </div>
        <div class="options-list" id="options-${q._id}">
          <div class="option-item" onclick="checkAnswer(this, 'A', '${q.correctAnswer}', '${q._id}')">
            <div class="option-letter">A</div>
            <div class="option-text">${q.options.A}</div>
          </div>
          <div class="option-item" onclick="checkAnswer(this, 'B', '${q.correctAnswer}', '${q._id}')">
            <div class="option-letter">B</div>
            <div class="option-text">${q.options.B}</div>
          </div>
          <div class="option-item" onclick="checkAnswer(this, 'C', '${q.correctAnswer}', '${q._id}')">
            <div class="option-letter">C</div>
            <div class="option-text">${q.options.C}</div>
          </div>
          <div class="option-item" onclick="checkAnswer(this, 'D', '${q.correctAnswer}', '${q._id}')">
            <div class="option-letter">D</div>
            <div class="option-text">${q.options.D}</div>
          </div>
        </div>
        <div class="action-buttons">
          <button class="btn-show-answer" onclick="toggleAnswer('${q._id}')">Show Answer & Explanation</button>
        </div>
        <div class="answer-section" id="answer-${q._id}">
          <div class="correct-answer-text">Correct Answer: <strong>${q.correctAnswer} - ${q.options[q.correctAnswer]}</strong></div>
          <div class="explanation-text" style="margin-top: 5px;"><strong>Explanation:</strong><br/> ${q.explanation || 'No detailed explanation provided.'}</div>
          
          <div class="comments-section mt-4">
            <h4 style="margin-top: 15px; margin-bottom: 10px; border-top: 1px solid var(--border-color); padding-top: 10px; color: var(--text-dark);">Visitor Comments & Corrections</h4>
            <div class="comments-list" id="comments-list-${q._id}">
                ${commentsHtml || '<p class="no-comments" style="font-size:0.9rem; color: var(--text-light);">No comments yet. Be the first to point out a mistake or note!</p>'}
            </div>
            <div class="comment-form mt-2" style="display:flex; gap: 10px; margin-top: 15px;">
                <input type="text" id="comment-input-${q._id}" maxlength="500" placeholder="Point out a mistake or add a note..." style="flex:1; padding: 10px; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.9rem;" onkeydown="if(event.key==='Enter'){ event.preventDefault(); submitComment('${q._id}'); }">
                <button id="comment-btn-${q._id}" onclick="submitComment('${q._id}')" class="btn-primary" style="width: auto; padding: 10px 20px;">Post</button>
            </div>
          </div>
        </div>
      `;
  latestMcqsList.appendChild(card);
}

// Comments Submission with Sanitization & Validation
window.submitComment = async function (questionId) {
  const inputField = document.getElementById(`comment-input-${questionId}`);
  const postBtn = document.getElementById(`comment-btn-${questionId}`);
  if (!inputField) return;

  const text = inputField.value.trim();
  if (!text) {
    inputField.focus();
    return;
  }

  if (text.length < 2) {
    alert('Comment must be at least 2 characters long.');
    inputField.focus();
    return;
  }

  if (text.length > 500) {
    alert('Comment cannot exceed 500 characters.');
    return;
  }

  if (postBtn) {
    postBtn.disabled = true;
    postBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
  }

  try {
    const response = await fetch(`${API_URL}/questions/${questionId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    if (response.ok) {
      const updatedComments = await response.json();
      const listContainer = document.getElementById(`comments-list-${questionId}`);

      const commentsHtml = updatedComments.map(c => `
                <div class="comment-item">
                    <div class="comment-date">${escapeHtml(new Date(c.date || Date.now()).toLocaleDateString())}</div>
                    <div class="comment-text">${escapeHtml(c.text)}</div>
                </div>
            `).join('');

      if (listContainer) {
        listContainer.innerHTML = commentsHtml;
      }
      inputField.value = '';
    } else {
      const errData = await response.json().catch(() => ({}));
      alert(errData.message || 'Failed to post comment. Please try again.');
    }
  } catch (err) {
    console.error('Failed to post comment:', err);
    alert('Failed to post comment. Please check your network connection.');
  } finally {
    if (postBtn) {
      postBtn.disabled = false;
      postBtn.innerText = 'Post';
    }
  }
};



// Pagination Rendering
function renderPagination(current, total) {
  const container = document.getElementById('paginationContainer');
  if (!container) return;

  if (total <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = '';
  if (current > 1) {
    html += `<button class="page-btn" onclick="goToPage(${current - 1})"><i class="fa-solid fa-chevron-left"></i> Prev</button>`;
  } else {
    html += `<button class="page-btn disabled" disabled><i class="fa-solid fa-chevron-left"></i> Prev</button>`;
  }

  html += `<span class="page-info">Page ${current} of ${total}</span>`;

  if (current < total) {
    html += `<button class="page-btn" onclick="goToPage(${current + 1})">Next <i class="fa-solid fa-chevron-right"></i></button>`;
  } else {
    html += `<button class="page-btn disabled" disabled>Next <i class="fa-solid fa-chevron-right"></i></button>`;
  }

  container.innerHTML = html;
}

window.goToPage = function (page) {
  loadMcqs(page);
  window.scrollToSection('.latest-mcqs');
};



window.fetchLatestMcqs = function () {
  currentFetchOptions = { type: 'latest' };


  loadMcqs(1);
};



window.fetchSearchedMcqs = function (query) {
  currentFetchOptions = { type: 'search', query };
  loadMcqs(1);
  window.scrollToSection('.latest-mcqs');
};



window.fetchCategoryMcqs = function (categoryId, categoryName, subCategory = '') {
  currentFetchOptions = { type: 'category', categoryId, categoryName, subCategory };


  loadMcqs(1);
};



window.toggleAnswer = function (id) {
  const answerSection = document.getElementById(`answer-${id}`);
  if (!answerSection) return;
  if (answerSection.classList.contains('show')) {
    answerSection.classList.remove('show');
  } else {
    answerSection.classList.add('show');
  }
};



window.checkAnswer = function (element, selectedLetter, correctLetter, questionId) {
  const optionsContainer = document.getElementById(`options-${questionId}`);
  if (!optionsContainer || optionsContainer.classList.contains('answered')) return;

  optionsContainer.classList.add('answered');
  const options = optionsContainer.children;

  if (selectedLetter === correctLetter) {
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
    Array.from(options).forEach(opt => {
      const letterSpan = opt.querySelector('.option-letter').innerText;
      if (letterSpan === correctLetter) {
        opt.classList.add('correct');
      }
    });
  }

  const answerSection = document.getElementById(`answer-${questionId}`);
  if (answerSection) answerSection.classList.add('show');
};



// Setup Search Functionality
function setupSearch() {
  const searchInputEl = document.getElementById('searchInput');
  const searchBtnEl = document.getElementById('searchBtn');
  const clearSearchBtnEl = document.getElementById('clearSearchBtn');
  const searchFormEl = document.getElementById('searchForm');

  if (!searchInputEl || !searchBtnEl) return;

  const handleSearch = () => {
    const query = searchInputEl.value.trim();
    if (query) {
      if (clearSearchBtnEl) clearSearchBtnEl.classList.remove('hidden');
      fetchSearchedMcqs(query);
    } else {
      if (clearSearchBtnEl) clearSearchBtnEl.classList.add('hidden');
      fetchLatestMcqs();
    }
  };

  searchBtnEl.addEventListener('click', handleSearch);

  searchInputEl.addEventListener('input', () => {
    if (clearSearchBtnEl) {
      if (searchInputEl.value.trim().length > 0) {
        clearSearchBtnEl.classList.remove('hidden');
      } else {
        clearSearchBtnEl.classList.add('hidden');
      }
    }
  });

  searchInputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  });

  if (searchFormEl) {
    searchFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSearch();
    });
  }

  if (clearSearchBtnEl) {
    clearSearchBtnEl.addEventListener('click', () => {
      searchInputEl.value = '';
      clearSearchBtnEl.classList.add('hidden');
      searchInputEl.focus();
      fetchLatestMcqs();
    });
  }
}

// Quick Search from Popular Chips
window.quickSearch = function (term) {
  const searchInputEl = document.getElementById('searchInput');
  const clearSearchBtnEl = document.getElementById('clearSearchBtn');
  if (searchInputEl) {
    searchInputEl.value = term;
  }
  if (clearSearchBtnEl) {
    clearSearchBtnEl.classList.remove('hidden');
  }
  fetchSearchedMcqs(term);
  window.scrollToSection('.latest-mcqs');
};

// Deep Linking Check on load (categories, subcategories, or search queries)
function checkDeepLinkParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category') || urlParams.get('categoryName');
  const searchQuery = urlParams.get('search') || urlParams.get('q');
  const hashParam = window.location.hash ? window.location.hash.substring(1) : null;

  if (searchQuery) {
    const searchInputEl = document.getElementById('searchInput');
    const clearSearchBtnEl = document.getElementById('clearSearchBtn');
    if (searchInputEl) searchInputEl.value = searchQuery;
    if (clearSearchBtnEl) clearSearchBtnEl.classList.remove('hidden');
    setTimeout(() => {
      fetchSearchedMcqs(searchQuery);
    }, 200);
    return;
  }

  const targetCategory = catParam || (hashParam && hashParam !== 'categories' ? decodeURIComponent(hashParam) : null);

  if (targetCategory) {
    setTimeout(() => {
      launchCategoryByName(targetCategory);
    }, 300);
  }
}

// Mobile Navigation Drawer Toggle Handler
function initMobileNav() {
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (!mobileMenuBtn || !navLinks) return;

  const menuIcon = mobileMenuBtn.querySelector('i');

  const toggleNav = (e) => {
    if (e) e.stopPropagation();
    const isOpen = navLinks.classList.toggle('nav-open');
    mobileMenuBtn.classList.toggle('active', isOpen);
    mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (menuIcon) {
      if (isOpen) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    }
  };

  const closeNav = () => {
    if (navLinks.classList.contains('nav-open')) {
      navLinks.classList.remove('nav-open');
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      if (menuIcon) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    }
  };

  mobileMenuBtn.setAttribute('role', 'button');
  mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
  mobileMenuBtn.setAttribute('aria-expanded', 'false');

  mobileMenuBtn.addEventListener('click', toggleNav);

  // Close drawer when clicking any nav link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      closeNav();
    }
  });

  // Close drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNav();
    }
  });

  // Automatically reset drawer on window resize above mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeNav();
    }
  });
}
window.initMobileNav = initMobileNav;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', async () => {
  initDarkMode();
  initMobileNav();
  setupSearch();
  updateBookmarkCount();

  // Bookmarks toolbar wiring (only on index.html)
  const showBookmarksBtn = document.getElementById('showBookmarksBtn');
  if (showBookmarksBtn) {
    showBookmarksBtn.addEventListener('click', () => {
      if (showBookmarksBtn.classList.contains('active')) {
        window.showAllMcqs();
      } else {
        window.showBookmarkedQuestions();
      }
    });
  }

  const showAllMcqsBtn = document.getElementById('showAllMcqsBtn');
  if (showAllMcqsBtn) {
    showAllMcqsBtn.addEventListener('click', window.showAllMcqs);
  }

  await fetchCategories();
  fetchLatestMcqs();
  checkDeepLinkParams();
  initInterestingFacts();
  initExamGuideSection();
});


// ==========================================
// INTERESTING FACTS RENDERING & FILTERING
// ==========================================
function initInterestingFacts() {
  const container = document.getElementById('factsGridContainer');
  const searchInput = document.getElementById('factsSearchInput');
  const filterPills = document.querySelectorAll('.fact-pill-btn');
  const countSpan = document.getElementById('totalFactsCount');

  if (!container) return;

  const factsList = (typeof window !== 'undefined' && Array.isArray(window.INTERESTING_FACTS)) 
    ? window.INTERESTING_FACTS 
    : [];

  if (countSpan) countSpan.innerText = factsList.length;

  let currentCategory = 'All';
  let currentSearchQuery = '';

  function renderFacts() {
    let filtered = factsList;

    if (currentCategory !== 'All') {
      filtered = filtered.filter(f => f.category === currentCategory);
    }

    if (currentSearchQuery) {
      filtered = filtered.filter(f => {
        const str = (f.title + ' ' + f.fact + ' ' + f.highlight + ' ' + f.tag + ' ' + f.category).toLowerCase();
        return str.includes(currentSearchQuery);
      });
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-light);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 36px; margin-bottom: 12px; opacity: 0.5;"></i>
          <h3 style="color: var(--text-dark); margin-bottom: 6px;">No facts matched your search</h3>
          <p>Try searching for "Pacific", "K2", "Venus", "honey", or "ice".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => `
      <div class="fact-card">
        <div>
          <div class="fact-card-top">
            <div class="fact-card-icon-wrap">
              <i class="fa-solid ${item.icon || 'fa-lightbulb'}"></i>
            </div>
            <span class="fact-card-badge">${item.tag || item.category}</span>
          </div>
          <h3 class="fact-card-title">${item.title}</h3>
          <p class="fact-card-body">${item.fact}</p>
        </div>
        <div>
          <div class="fact-card-highlight">
            <i class="fa-solid fa-lightbulb"></i> ${item.highlight}
          </div>
          ${item.examRelevance ? `<div style="margin-top: 10px; font-size: 12px; color: var(--text-light);"><i class="fa-solid fa-graduation-cap"></i> Target: <strong>${item.examRelevance}</strong></div>` : ''}
        </div>
      </div>
    `).join('');
  }

  // Filter Pills event listeners
  filterPills.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'All';
      renderFacts();
    });
  });

  // Search Input listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      renderFacts();
    });
  }

  // Initial render
  renderFacts();
}


// ==========================================
// EXAM PREPARATION GUIDE SECTION (FIA, NAB, CSS, PMS, Customs, etc.)
// ==========================================
function initExamGuideSection() {
  const tabsContainer = document.getElementById('examTabsNav');
  const cardContainer = document.getElementById('examCardContainer');
  if (!tabsContainer || !cardContainer) return;

  const guides = (typeof window !== 'undefined' && Array.isArray(window.EXAM_GUIDES)) 
    ? window.EXAM_GUIDES 
    : [];
  if (!guides.length) return;

  let activeExamId = guides[0].id;

  function renderTabs() {
    tabsContainer.innerHTML = guides.map(g => `
      <button type="button" class="exam-tab-pill ${g.id === activeExamId ? 'active' : ''}" data-exam="${g.id}">
        <i class="fa-solid ${g.icon}"></i> ${g.name}
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.exam-tab-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        activeExamId = btn.getAttribute('data-exam');
        renderTabs();
        renderCard();
      });
    });
  }

  function renderCard() {
    const exam = guides.find(g => g.id === activeExamId) || guides[0];
    cardContainer.innerHTML = `
      <div class="exam-card-wrapper fade-in">
        <div class="exam-header">
          <div class="exam-title-group">
            <h3><i class="fa-solid ${exam.icon}" style="color: ${exam.color};"></i> ${exam.fullName}</h3>
            <p><i class="fa-solid fa-briefcase"></i> <strong>Target Posts:</strong> ${exam.targetPosts}</p>
          </div>
          <div class="exam-badges-row">
            <span class="exam-badge badge-fpsc"><i class="fa-solid fa-building"></i> ${exam.agency}</span>
            <span class="exam-badge badge-bs17"><i class="fa-solid fa-award"></i> ${exam.scale}</span>
            <span class="exam-badge badge-bs16"><i class="fa-solid fa-clock"></i> ${exam.testPattern.totalTime}</span>
            <span class="exam-badge badge-negative"><i class="fa-solid fa-circle-info"></i> ${exam.testPattern.negativeMarking}</span>
          </div>
        </div>

        <div style="margin-bottom: 24px; line-height: 1.6; color: var(--text-dark); background: rgba(37,99,235,0.03); border-left: 4px solid ${exam.color}; padding: 14px 18px; border-radius: 4px;">
          <p>${exam.overview}</p>
        </div>

        <div class="exam-details-grid">
          <div class="exam-box">
            <h4><i class="fa-solid fa-list-check" style="color: ${exam.color};"></i> Syllabus Breakdown</h4>
            ${exam.sections.map(s => `
              <p style="font-weight: 700; margin-top: 10px; margin-bottom: 4px; font-size: 0.92rem; color: var(--text-dark);">${s.name}</p>
              <ul>
                ${s.topics.map(t => `<li>${t}</li>`).join('')}
              </ul>
            `).join('')}
          </div>

          <div class="exam-box">
            <h4><i class="fa-solid fa-gavel" style="color: ${exam.color};"></i> Key Bare Acts & Core Sections</h4>
            ${exam.keyActs.map(a => `
              <div style="margin-bottom: 12px;">
                <strong style="color: var(--text-dark); font-size: 0.92rem;">${a.actName}</strong>
                <p style="font-size: 0.88rem; color: var(--text-light); margin-top: 4px; line-height: 1.5;">${a.keySections}</p>
              </div>
            `).join('')}
          </div>

          <div class="exam-box tactics">
            <h4><i class="fa-solid fa-lightbulb" style="color: var(--warning);"></i> High-Yield Scoring Tactics</h4>
            <ul>
              ${exam.highYieldTactics.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>

          <div class="exam-box books">
            <h4><i class="fa-solid fa-book-bookmark" style="color: var(--success);"></i> Recommended Resources</h4>
            <ul>
              ${exam.recommendedSources.map(b => `<li>${b}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="exam-action-bar">
          <div class="exam-links-group">
            <a href="${exam.quizUrl}" class="btn-exam-practice">
              <i class="fa-solid fa-play"></i> Practice ${exam.name} Quiz
            </a>
            ${exam.quizAltUrl ? `
              <a href="${exam.quizAltUrl}" class="btn-exam-outline">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Related Test Module
              </a>
            ` : ''}
          </div>
          <div>
            <a href="exam-guide.html#guide-${exam.id}" style="color: var(--secondary-color); font-weight: 600; text-decoration: none; font-size: 0.92rem;">
              View Complete In-Depth Guide <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  renderTabs();
  renderCard();
}
