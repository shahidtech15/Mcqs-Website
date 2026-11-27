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

// ---- Shared Dark Mode (duplicated from app.js; quiz.js is standalone) ----
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;
  const applyDark = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark-mode', isDark);
  };
  applyDark(localStorage.getItem('mcqs_dark_mode') === 'true');
  toggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyDark(isDark);
    localStorage.setItem('mcqs_dark_mode', isDark);
  });
}

// DOM Elements - Setup
const sectionSetup = document.getElementById('quizSetup');
const setupCategory = document.getElementById('setupCategory');
const setupSubCategoryGroup = document.getElementById('setupSubCategoryGroup');
const setupSubCategory = document.getElementById('setupSubCategory');
const setupLimit = document.getElementById('setupLimit');
const setupDifficulty = document.getElementById('setupDifficulty');
const setupNegativeMarking = document.getElementById('setupNegativeMarking');
const startQuizBtn = document.getElementById('startQuizBtn');

// DOM Elements - Active Quiz
const sectionEngine = document.getElementById('quizEngine');
const activeQuizTitle = document.getElementById('activeQuizTitle');
const activeQuizDiff = document.getElementById('activeQuizDiff');
const activeQuizNegMarking = document.getElementById('activeQuizNegMarking');
const quizTimer = document.getElementById('quizTimer');
const progressText = document.getElementById('progressText');
const progressBarFill = document.getElementById('progressBarFill');
const questionCard = document.getElementById('questionCard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitTestBtn = document.getElementById('submitTestBtn');

// DOM Elements - Palette & Actions
const markReviewBtn = document.getElementById('markReviewBtn');
const markReviewText = document.getElementById('markReviewText');
const clearResponseBtn = document.getElementById('clearResponseBtn');
const paletteMobileToggle = document.getElementById('paletteMobileToggle');
const quizPalettePanel = document.getElementById('quizPalettePanel');
const paletteGrid = document.getElementById('paletteGrid');
const palStatAnswered = document.getElementById('palStatAnswered');
const palStatUnanswered = document.getElementById('palStatUnanswered');
const palStatReview = document.getElementById('palStatReview');
const palStatNotVisited = document.getElementById('palStatNotVisited');
const mobileAnsweredCount = document.getElementById('mobileAnsweredCount');
const mobileTotalCount = document.getElementById('mobileTotalCount');

// DOM Elements - Results
const sectionResults = document.getElementById('quizResults');

// State Variables
let categoriesData = [];
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // { questionId: "A" }
let visitedQuestions = new Set(); // Indices of visited questions
let markedForReview = new Set(); // Question IDs marked for review
let negativeMarkingValue = 0; // Value per wrong answer, e.g. 0.25
let timerInterval;
let timeRemaining = 0;
let totalTimeTaken = 0;
let isSubmitting = false;

// Known subcategories mapping for fallback
const KNOWN_SUBCATEGORIES = {
  "FIA Assistant Director Sample Papers": [
    "Sample Paper 1", "Sample Paper 2", "Sample Paper 3", "Sample Paper 4", "Sample Paper 5",
    "Sample Paper 6", "Sample Paper 7", "Sample Paper 8", "Sample Paper 9", "Sample Paper 10",
    "Sample Paper 11", "Sample Paper 12", "Sample Paper 13", "Sample Paper 14", "Sample Paper 15",
    "Sample Paper 16", "Sample Paper 17", "Sample Paper 18", "Sample Paper 19", "Sample Paper 20"
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
    "Current Affairs": [
        "Pakistan Current Affairs", "International Current Affairs", "Global Geopolitics & Summits", "Economy & Trade Updates", "Science, Tech & Space", "Sports Updates & Awards"
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
    "Civil Servants Act, 1973": ["Definitions", "Terms & Conditions", "Appointments & Probation", "Promotion & Seniority", "Termination & Retirement"],
    "Mathematics": ["Algebra", "Limits", "Calculus", "Train problems", "Compound and Simple Interest", "Ratio", "Percentage", "Geometry", "Probability", "Trigonometry"],
    "Computer Science": ["Computer Fundamentals", "Operating System", "MS Word", "MS Excel", "MS PowerPoint", "Programming", "Networks", "Databases"],
    "English": ["Grammar", "Tenses", "Synonyms", "Antonyms", "Direct and Indirect Speech", "Preposition"],
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
    "Chemistry": ["Atomic Structure", "Acid, Base and Salts", "Organic Chemistry", "Inorganic Chemistry"],
    "Geography": ["United States Geography", "Main Geography", "Universe", "Earth", "Atmosphere", "Climate"],
    "General Knowledge": ["World Geography", "Pakistan Geography", "Famous Personalities"],
    "CSS Past Papers": ["English Essay", "Current Affairs", "Pakistan Affairs", "Islamic Studies"],
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
    "Pedagogy": [
      "Foundations & Philosophy of Education",
      "Educational Psychology & Human Development",
      "Learning Theories & Motivation",
      "Teaching Methods & Instructional Strategies",
      "Curriculum Development & Design",
      "Classroom Management & Lesson Planning",
      "Educational Assessment, Measurement & Evaluation",
      "Educational Research & Statistics",
      "Educational Leadership, Administration & Supervision",
      "Pakistan Education System, Policies, Inclusive Ed & EdTech"
    ]
};

// Default Fallback Categories
const FALLBACK_CATEGORIES = [
  { _id: 'cat_mistakes', name: '🎯 Mistake Notebook (Spaced Repetition Retry)', description: 'Practice questions you previously missed across mock tests. Answering correctly graduates them from your Mistake Notebook.', icon: 'fa-bullseye', questionCount: 50, subcategoriesCount: 0 },
  { _id: 'cat_css_mpt', name: '🏛️ CSS MPT 200-Mark Official Screening Mock', description: 'Official FPSC CSS MPT 200-MCQ Screening Paper: Islamic Studies (20), English Vocabulary & Grammar (50), General Abilities/Math/IQ (60), and GK/Pak Affairs/Current Affairs/Everyday Science (70).', icon: 'fa-award', questionCount: 200, subcategoriesCount: 0 },
  { _id: 'cat_synonyms', name: 'English Synonyms', description: '2,000 High-Yield Synonym MCQs with complete academic definitions, parts of speech, and contextual example sentences for CSS, PMS, FPSC, PPSC, NTS, and GRE exams.', icon: 'fa-spell-check', questionCount: 2000, subcategoriesCount: 4 },
  { _id: 'cat_antonyms', name: 'English Antonyms', description: '2,000 High-Yield Antonym MCQs with contrasting words, comprehensive explanations, and illustrative sentences targeting competitive examinations.', icon: 'fa-arrows-split-up-and-left', questionCount: 2000, subcategoriesCount: 4 },
  { _id: 'cat_fia_ad_sample', name: 'FIA Assistant Director Sample Papers', description: '20 Full-Length 100-Mark Sample Papers (2,000 MCQs) for FIA Assistant Director (Investigation): 10 Standard + 10 Advanced Hard Mocks covering English (20 Marks), Basic Maths, GK, Pak Affairs, Islamiat, Current Affairs (last 5 years), Everyday Science, and FIA Act 1974.', icon: 'fa-file-shield', questionCount: 2000, subcategoriesCount: 20 },

  { _id: 'cat_world_org', name: 'World Organizations', description: 'United Nations, Specialized Agencies, Regional Blocs (NATO, EU, SCO, BRICS, SAARC, OIC, ASEAN), Financial Institutions (IMF, World Bank, WTO) & Global Treaties.', icon: 'fa-earth-americas', questionCount: 100, subcategoriesCount: 4 },
  { _id: 'cat_ai', name: 'Artificial Intelligence', description: 'Recent breakthroughs in AI: Foundation Models, LLMs, GenAI, Neural Scaling, AI Hardware, Nobel Prizes & Safety.', icon: 'fa-microchip', questionCount: 200, subcategoriesCount: 5 },
  { _id: 'cat_aao', name: 'Assistant Audit Officer (BS-17)', description: 'FPSC Syllabus: Financial & Cost Accounting, Auditing & ISSAIs, AGP Constitutional Articles 168-171, PFM Act 2019, PPRA Rules, IPSAS & Public Accountability.', icon: 'fa-file-invoice-dollar', questionCount: 750, subcategoriesCount: 15 },
  { _id: 'cat_gk', name: 'General Knowledge', description: 'World history, international organizations, capitals, currencies, global landmarks and superlatives.', icon: 'fa-globe', questionCount: 1108, subcategoriesCount: 5 },
  { _id: 'cat_math', name: 'Mathematics', description: 'Algebra, Limits & Calculus, Train problems, Compound & Simple Interest, and Advanced Math', icon: 'fa-calculator', questionCount: 324, subcategoriesCount: 46 },
  { _id: 'cat_pak', name: 'Pakistan Affairs', description: 'History, politics, constitutional developments & national movement', icon: 'fa-landmark', questionCount: 284, subcategoriesCount: 6 },
  { _id: 'cat_css', name: 'CSS Past Papers', description: 'Compulsory & optional subjects past paper MCQs', icon: 'fa-graduation-cap', questionCount: 250, subcategoriesCount: 17 },
  { _id: 'cat_cs', name: 'Computer Science', description: 'MS Office (Word, Excel, PowerPoint), Programming, Hardware & Networking', icon: 'fa-laptop-code', questionCount: 228, subcategoriesCount: 7 },
  { _id: 'cat_fia_ad_legal', name: 'FIA Assistant Director Legal', description: 'FPSC Syllabus: English, CrPC 1898, Qanun-e-Shahadat 1984, PPC 1860, AMLA 2010, Cyber Security/PECA, and FIA Act 1974', icon: 'fa-shield-halved', questionCount: 210, subcategoriesCount: 7 },
  { _id: 'cat_fia_ad_inv', name: 'FIA Assistant Director Investigation', description: 'FPSC Syllabus: English, General Knowledge, Everyday Science, Basic Arithmetic, Current Affairs, Pakistan Affairs & Islamic Studies, and FIA Act 1974', icon: 'fa-user-secret', questionCount: 210, subcategoriesCount: 7 },
  { _id: 'cat_eng', name: 'English', description: 'Grammar, Sentence Correction, Vocabulary, Synonyms, Antonyms & Tenses', icon: 'fa-book-open', questionCount: 206, subcategoriesCount: 21 },
  { _id: 'cat_science', name: 'Everyday Science', description: 'Biology, Human Anatomy, Physics, Chemistry, Vitamins, Space & Astronomy', icon: 'fa-flask', questionCount: 186, subcategoriesCount: 6 },
  { _id: 'cat_ca', name: 'Current Affairs', description: 'Pakistan, Regional & International developments, summits, treaties, appointments & awards (2018–2026)', icon: 'fa-newspaper', questionCount: 779, subcategoriesCount: 7 },
  { _id: 'cat_geog', name: 'Geography', description: 'Physical, political & human geography of World, Pakistan & United States', icon: 'fa-map-location-dot', questionCount: 177, subcategoriesCount: 23 },
  { _id: 'cat_sindh', name: 'Sindh General Knowledge', description: 'Sindh history, archaeology (Mohenjo Daro, Kot Diji), Sufi heritage & geography', icon: 'fa-monument', questionCount: 117, subcategoriesCount: 5 },
  { _id: 'cat_islam', name: 'Islamiat', description: 'Holy Quran, Seerat-un-Nabi (PBUH), Battles, Caliphate & Islamic history', icon: 'fa-kaaba', questionCount: 1103, subcategoriesCount: 10 },
  { _id: 'cat_pedagogy', name: 'Pedagogy', description: '500 Progressive Easy-to-Hard Pedagogy MCQs across Philosophy, Educational Psychology, Learning Theories, Teaching Methods, Curriculum, Assessment, Research, Leadership & Pakistan Education Policies', icon: 'fa-chalkboard-user', questionCount: 500, subcategoriesCount: 10 },
  { _id: 'cat_chem', name: 'Chemistry', description: 'Organic, Inorganic, Physical & Analytical Chemistry', icon: 'fa-flask-vial', questionCount: 90, subcategoriesCount: 14 },
  { _id: 'cat_meta', name: 'Metallurgical Engineering', description: 'Physical, extractive, foundry & welding metallurgy', icon: 'fa-atom', questionCount: 85, subcategoriesCount: 20 },
  { _id: 'cat_iq', name: 'IQ & Analytical Reasoning', description: 'Word analogies, coding-decoding, logical puzzles and analytical reasoning', icon: 'fa-brain', questionCount: 77, subcategoriesCount: 5 },
  { _id: 'cat_csa', name: 'Civil Servants Act, 1973', description: 'Rules, terms of service, tenure, probation & retirement under Act LXXI of 1973', icon: 'fa-scale-balanced', questionCount: 20, subcategoriesCount: 5 }
];

// Core fallback arrays are lazy-loaded via js/data_core_fallback.js on demand
var CIVIL_SERVANTS_ACT_MCQS = window.CIVIL_SERVANTS_ACT_MCQS || [];
var CURRENT_AFFAIRS_2026_MCQS = window.CURRENT_AFFAIRS_2026_MCQS || [];
var MATH_SPECIALIZED_MCQS = window.MATH_SPECIALIZED_MCQS || [];
var MATH_LIMITS_MCQS = window.MATH_LIMITS_MCQS || [];
var US_GEOGRAPHY_MCQS = window.US_GEOGRAPHY_MCQS || [];
var FIA_AD_LEGAL_MCQS = window.FIA_AD_LEGAL_MCQS || [];
var FIA_AD_INVESTIGATION_MCQS = window.FIA_AD_INVESTIGATION_MCQS || [];

function syncQuizCoreFallbackGlobals() {
    if (Array.isArray(window.CIVIL_SERVANTS_ACT_MCQS)) CIVIL_SERVANTS_ACT_MCQS = window.CIVIL_SERVANTS_ACT_MCQS;
    if (Array.isArray(window.CURRENT_AFFAIRS_2026_MCQS)) CURRENT_AFFAIRS_2026_MCQS = window.CURRENT_AFFAIRS_2026_MCQS;
    if (Array.isArray(window.MATH_SPECIALIZED_MCQS)) MATH_SPECIALIZED_MCQS = window.MATH_SPECIALIZED_MCQS;
    if (Array.isArray(window.MATH_LIMITS_MCQS)) MATH_LIMITS_MCQS = window.MATH_LIMITS_MCQS;
    if (Array.isArray(window.US_GEOGRAPHY_MCQS)) US_GEOGRAPHY_MCQS = window.US_GEOGRAPHY_MCQS;
    if (Array.isArray(window.FIA_AD_LEGAL_MCQS)) FIA_AD_LEGAL_MCQS = window.FIA_AD_LEGAL_MCQS;
    if (Array.isArray(window.FIA_AD_INVESTIGATION_MCQS)) FIA_AD_INVESTIGATION_MCQS = window.FIA_AD_INVESTIGATION_MCQS;
}

function populateCategoryDropdown(list) {
    const specialIds = new Set(['cat_mistakes', 'cat_css_mpt']);
    const specialCats = FALLBACK_CATEGORIES.filter(c => specialIds.has(c._id));
    const restCats = (Array.isArray(list) && list.length ? list : FALLBACK_CATEGORIES).filter(c => !specialIds.has(c._id));
    categoriesData = [...specialCats, ...restCats];

    const previousVal = setupCategory ? setupCategory.value : '';
    setupCategory.innerHTML = '<option value="">Select a Category</option>';
    categoriesData.forEach(cat => {
        setupCategory.innerHTML += `<option value="${cat._id}">${cat.name}</option>`;
    });
    if (previousVal && Array.from(setupCategory.options).some(o => o.value === previousVal)) {
        setupCategory.value = previousVal;
    }
}

// 1. INIT: Load Categories into Dropdown Instantly & Handle URL Parameters
async function loadCategoriesForSetup() {
    // Render fallback categories IMMEDIATELY (0ms) so the simulator is never stuck on "Loading..."
    populateCategoryDropdown(FALLBACK_CATEGORIES);

    if (window.LEARNING_DASHBOARD && typeof window.LEARNING_DASHBOARD.getMistakes === 'function') {
        const mCount = window.LEARNING_DASHBOARD.getMistakes().length;
        const badgeEl = document.getElementById('mistakeBannerCount');
        if (badgeEl) badgeEl.textContent = String(mCount);
    }

    // Apply URL parameters immediately
    parseUrlParameters();

    // Optionally refresh from live backend in background (only if user hasn't picked a category yet)
    try {
        const res = await apiFetch(`${API_URL}/categories`);
        if (!res.ok) throw new Error("Backend offline");
        const liveCats = await res.json();
        if (Array.isArray(liveCats) && liveCats.length > 0 && !setupCategory.value) {
            populateCategoryDropdown(liveCats);
            parseUrlParameters();
        }
    } catch (err) {
        console.warn("Using built-in fallback categories for quiz setup.");
    }
}

function parseUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const paramCatId = urlParams.get('categoryId') || urlParams.get('category');
    const paramCatName = urlParams.get('categoryName');
    const paramSubCat = urlParams.get('subCategory');
    const paramLimit = urlParams.get('limit');
    const paramDiff = urlParams.get('diff') || urlParams.get('difficulty');

    if (paramLimit && setupLimit && Array.from(setupLimit.options).some(o => o.value === paramLimit)) {
        setupLimit.value = paramLimit;
    }
    if (paramDiff && setupDifficulty && Array.from(setupDifficulty.options).some(o => o.value.toLowerCase() === paramDiff.toLowerCase())) {
        const matched = Array.from(setupDifficulty.options).find(o => o.value.toLowerCase() === paramDiff.toLowerCase());
        if (matched) setupDifficulty.value = matched.value;
    }

    if (!paramCatId && !paramCatName) return;

    let targetOption = null;

    // Search by ID first, then by name
    Array.from(setupCategory.options).forEach(opt => {
        if (paramCatId && opt.value === paramCatId) {
            targetOption = opt;
        } else if (paramCatName && opt.text.toLowerCase() === paramCatName.toLowerCase()) {
            targetOption = opt;
        }
    });

    if (targetOption) {
        setupCategory.value = targetOption.value;
        updateSubcategoryDropdown(targetOption.text, paramSubCat);
    }
}

function updateSubcategoryDropdown(catName, preselectSubCat = '') {
    const subs = KNOWN_SUBCATEGORIES[catName] || [];

    if (subs.length > 0) {
        setupSubCategoryGroup.style.display = 'block';
        setupSubCategory.innerHTML = '<option value="">All Topics</option>';
        subs.forEach(sub => {
            const isSel = preselectSubCat && preselectSubCat.toLowerCase() === sub.toLowerCase() ? 'selected' : '';
            setupSubCategory.innerHTML += `<option value="${sub}" ${isSel}>${sub}</option>`;
        });
        if (preselectSubCat) setupSubCategory.value = preselectSubCat;
    } else {
        setupSubCategoryGroup.style.display = 'none';
        setupSubCategory.value = '';
    }
}

// 2. Handle Subcategory Dropdown visibility
setupCategory.addEventListener('change', (e) => {
    const catName = e.target.options[e.target.selectedIndex] ? e.target.options[e.target.selectedIndex].text : '';
    updateSubcategoryDropdown(catName);
});

window.quickStartSpecialMode = function (modeId) {
    if (!setupCategory) return;
    setupCategory.value = modeId;
    if (modeId === 'cat_css_mpt' && setupLimit) {
        setupLimit.value = '200';
    } else if (modeId === 'cat_mistakes' && setupLimit) {
        setupLimit.value = '20';
    }
    updateSubcategoryDropdown('');
    startQuizBtn.click();
};

// 3. Start Quiz Procedure
startQuizBtn.addEventListener('click', async () => {
    const catId = setupCategory.value;
    const catName = setupCategory.options[setupCategory.selectedIndex] ? setupCategory.options[setupCategory.selectedIndex].text : 'Category';
    const subCat = setupSubCategory.value;
    const limit = parseInt(setupLimit.value) || 10;
    const diff = setupDifficulty.value;

    if (!catId) {
        alert("Please select a target category first.");
        return;
    }

    startQuizBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
    startQuizBtn.disabled = true;

    try {
        let url = `${API_URL}/quiz/generate?categoryId=${encodeURIComponent(catId)}&limit=${limit}&difficulty=${diff}`;
        if (subCat) url += `&subCategory=${encodeURIComponent(subCat)}`;

        const res = await apiFetch(url);
        if (!res.ok) throw new Error("No backend quiz response.");

        quizQuestions = await res.json();
        if (!Array.isArray(quizQuestions) || quizQuestions.length === 0) {
            throw new Error("No questions found.");
        }
    } catch (err) {
        console.warn("Backend quiz generation failed. Generating offline simulation set:", err);
        if (typeof window.ensureCategoryScripts === 'function') {
            await window.ensureCategoryScripts(catName || catId, subCat, 'quiz');
        }
        syncQuizCoreFallbackGlobals();
        quizQuestions = generateFallbackQuiz(catName, subCat, limit, diff);
    }

    // Ensure every question has a stable unique _id
    quizQuestions = (Array.isArray(quizQuestions) ? quizQuestions : []).map((q, idx) => ({
        ...q,
        _id: String(q._id || q.id || q.questionId || `quiz_q_${idx + 1}`)
    }));

    if (quizQuestions.length === 0) {
        startQuizBtn.innerHTML = '<i class="fa-solid fa-play"></i> Start Quiz Simulation';
        startQuizBtn.disabled = false;
        alert('No questions were found for this filter. Please try "All Topics" or another category.');
        return;
    }

    startQuizBtn.innerHTML = '<i class="fa-solid fa-play"></i> Start Quiz Simulation';
    startQuizBtn.disabled = false;

    // Initialize state
    userAnswers = {};
    visitedQuestions.clear();
    markedForReview.clear();
    currentIndex = 0;
    totalTimeTaken = 0;
    isSubmitting = false;

    // Read negative marking setting
    negativeMarkingValue = setupNegativeMarking ? (parseFloat(setupNegativeMarking.value) || 0) : 0;

    // Visual Transition
    sectionSetup.classList.add('hidden');
    sectionEngine.classList.remove('hidden');

    activeQuizTitle.innerText = subCat ? `${catName} - ${subCat}` : catName;
    activeQuizDiff.innerText = diff;

    if (activeQuizNegMarking) {
        if (negativeMarkingValue > 0) {
            activeQuizNegMarking.innerHTML = `<i class="fa-solid fa-scale-unbalanced"></i> Neg: -${negativeMarkingValue}`;
            activeQuizNegMarking.style.background = '#fef2f2';
            activeQuizNegMarking.style.color = '#b91c1c';
            activeQuizNegMarking.style.borderColor = '#fecaca';
        } else {
            activeQuizNegMarking.innerHTML = `<i class="fa-solid fa-shield-halved"></i> No Neg. Marking`;
            activeQuizNegMarking.style.background = '#f0fdf4';
            activeQuizNegMarking.style.color = '#15803d';
            activeQuizNegMarking.style.borderColor = '#bbf7d0';
        }
    }

    // Setup Timer Configuration (1 min per question)
    timeRemaining = quizQuestions.length * 60;
    startTimer();

    // Render First Question
    renderQuestion(0);

    // Anti-Cheat (Warn before reload)
    window.addEventListener('beforeunload', antiCheatWarning);
});

function filterBySubCategory(pool, subCat) {
    if (!subCat || !Array.isArray(pool) || pool.length === 0) return pool;
    const normSub = subCat.toLowerCase().trim();

    // 1. Exact match on subCategory / paperSubCategory / subtopic
    const exact = pool.filter(q =>
        (q.paperSubCategory && q.paperSubCategory.toLowerCase() === normSub) ||
        (q.subCategory && q.subCategory.toLowerCase() === normSub) ||
        (q.subtopic && q.subtopic.toLowerCase() === normSub)
    );
    if (exact.length > 0) return exact;

    // 2. Synonyms / Antonyms difficulty-tier mapping
    if (normSub.includes('synonym') || normSub.includes('antonym')) {
        let targetDiff = null;
        if (normSub.includes('css') || normSub.includes('gre') || normSub.includes('advanced')) targetDiff = 'hard';
        else if (normSub.includes('fpsc') || normSub.includes('ppsc')) targetDiff = 'medium';
        else if (normSub.includes('foundational') || normSub.includes('everyday')) targetDiff = 'easy';
        if (targetDiff) {
            const byDiff = pool.filter(q => (q.difficulty || 'medium').toLowerCase() === targetDiff);
            if (byDiff.length > 0) return byDiff;
        }
        return pool;
    }

    // 3. Smart keyword match across subCategory, questionText, and explanation
    const stopWords = new Set(['and', 'the', 'for', 'with', 'main', 'updates', 'basic', 'high', 'yield']);
    const keywords = normSub.split(/[\s,&/\-()]+/).filter(w => w.length >= 3 && !stopWords.has(w));
    if (keywords.length > 0) {
        const kwMatches = pool.filter(q => {
            const hay = `${q.subCategory || ''} ${q.questionText || ''} ${q.explanation || ''}`.toLowerCase();
            return keywords.some(kw => hay.includes(kw));
        });
        if (kwMatches.length > 0) return kwMatches;
    }

    // 4. Graceful fallback to full parent category pool (never return 0 MCQs)
    return pool;
}

function generateFallbackQuiz(catName, subCat, count, difficulty) {
    const all2200 = (typeof window !== 'undefined' && Array.isArray(window.ALL_2200_MCQS)) ? window.ALL_2200_MCQS : [];
    const islamiat1000 = (typeof window !== 'undefined' && Array.isArray(window.ISLAMIAT_1000_MCQS)) ? window.ISLAMIAT_1000_MCQS : [];
    const pedagogy500 = (typeof window !== 'undefined' && Array.isArray(window.PEDAGOGY_500_MCQS)) ? window.PEDAGOGY_500_MCQS : [];
    const compFundMcqs = (typeof window !== 'undefined' && Array.isArray(window.COMPUTER_FUNDAMENTALS_MCQS)) ? window.COMPUTER_FUNDAMENTALS_MCQS : [];
    const sciInst = (typeof window !== 'undefined' && Array.isArray(window.SCIENCE_INSTRUMENTS_MCQS)) ? window.SCIENCE_INSTRUMENTS_MCQS : [];
    const examveda = (typeof window !== 'undefined' && Array.isArray(window.EXAMVEDA_MCQS)) ? window.EXAMVEDA_MCQS : [];
    const sciCapsule = (typeof window !== 'undefined' && Array.isArray(window.SCIENCE_CAPSULE_MCQS)) ? window.SCIENCE_CAPSULE_MCQS : [];
    const factsMcqs = (typeof window !== 'undefined' && Array.isArray(window.FACTS_MCQS)) ? window.FACTS_MCQS : [];
    const aaoMcqs = (typeof window !== 'undefined' && Array.isArray(window.AAO_MCQS)) ? window.AAO_MCQS : [];
    const extraChem = (typeof window !== 'undefined' && Array.isArray(window.EXTRA_CHEMISTRY_MCQS)) ? window.EXTRA_CHEMISTRY_MCQS : [];
    const extraMeta = (typeof window !== 'undefined' && Array.isArray(window.EXTRA_METALLURGY_MCQS)) ? window.EXTRA_METALLURGY_MCQS : [];
    const extraCssPP = (typeof window !== 'undefined' && Array.isArray(window.EXTRA_CSS_PAST_PAPERS_MCQS)) ? window.EXTRA_CSS_PAST_PAPERS_MCQS : [];
    const ca200 = (typeof window !== 'undefined' && Array.isArray(window.CURRENT_AFFAIRS_200_MCQS)) ? window.CURRENT_AFFAIRS_200_MCQS : [];
    const caSts = (typeof window !== 'undefined' && Array.isArray(window.CURRENT_AFFAIRS_STS_200_MCQS)) ? window.CURRENT_AFFAIRS_STS_200_MCQS : [];
    const aiMcqs = (typeof window !== 'undefined' && Array.isArray(window.AI_MCQS)) ? window.AI_MCQS : [];
    const worldOrgMcqs = (typeof window !== 'undefined' && Array.isArray(window.WORLD_ORG_MCQS)) ? window.WORLD_ORG_MCQS : [];
    const unTopicMcqs = (typeof window !== 'undefined' && window.UN_TOPIC_DATA && Array.isArray(window.UN_TOPIC_DATA.PRACTICE_50_MCQS)) ? window.UN_TOPIC_DATA.PRACTICE_50_MCQS : [];
    const euTopicMcqs = (typeof window !== 'undefined' && window.EU_TOPIC_DATA && Array.isArray(window.EU_TOPIC_DATA.PRACTICE_50_MCQS)) ? window.EU_TOPIC_DATA.PRACTICE_50_MCQS : [];
    const natoTopicMcqs = (typeof window !== 'undefined' && window.NATO_TOPIC_DATA && Array.isArray(window.NATO_TOPIC_DATA.PRACTICE_50_MCQS)) ? window.NATO_TOPIC_DATA.PRACTICE_50_MCQS : [];
    const fiaSampleMcqs = (typeof window !== 'undefined' && Array.isArray(window.FIA_SAMPLE_PAPERS_MCQS)) ? window.FIA_SAMPLE_PAPERS_MCQS : [];
    const fiaPastMcqs = (typeof window !== 'undefined' && Array.isArray(window.FPSC_FIA_2021_BATCH1_MCQS)) ? window.FPSC_FIA_2021_BATCH1_MCQS : [];
    const synMcqs = (typeof window !== 'undefined' && Array.isArray(window.SYNONYMS_MCQS)) ? window.SYNONYMS_MCQS : [];
    const antMcqs = (typeof window !== 'undefined' && Array.isArray(window.ANTONYMS_MCQS)) ? window.ANTONYMS_MCQS : [];
    let pool = [];

    const normCat = (catName || '').toLowerCase();

    if (normCat.includes('mistake') || normCat.includes('cat_mistakes')) {
        const savedMistakes = (window.LEARNING_DASHBOARD && typeof window.LEARNING_DASHBOARD.getMistakes === 'function')
            ? window.LEARNING_DASHBOARD.getMistakes()
            : [];
        if (savedMistakes.length > 0) {
            return savedMistakes.slice(0, count);
        }
    }
    if (normCat.includes('css mpt') || normCat.includes('cat_css_mpt') || normCat.includes('mpt 200')) {
        const pick = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);
        const ratio = count / 200;
        const islamPool = [...islamiat1000, ...all2200.filter(q => q.category && q.category.name === 'Islamiat')];
        const engPool = all2200.filter(q => q.category && q.category.name === 'English');
        const mathPool = [
            ...MATH_SPECIALIZED_MCQS,
            ...MATH_LIMITS_MCQS,
            ...all2200.filter(q => q.category && (q.category.name === 'Mathematics' || q.category.name === 'IQ & Analytical Reasoning'))
        ];
        const gkPool = [
            ...CURRENT_AFFAIRS_2026_MCQS,
            ...ca200,
            ...all2200.filter(q => q.category && ['General Knowledge', 'Pakistan Affairs', 'Everyday Science', 'Current Affairs'].includes(q.category.name))
        ];
        const mptSet = [
            ...pick(islamPool, Math.max(2, Math.round(20 * ratio))),
            ...pick(engPool, Math.max(5, Math.round(50 * ratio))),
            ...pick(mathPool, Math.max(6, Math.round(60 * ratio))),
            ...pick(gkPool, Math.max(7, Math.round(70 * ratio)))
        ];
        return mptSet.slice(0, count);
    }
    if (normCat.includes('synonym') || normCat.includes('cat_synonyms')) {
        pool = filterBySubCategory([...synMcqs], subCat);
    } else if (normCat.includes('antonym') || normCat.includes('cat_antonyms')) {
        pool = filterBySubCategory([...antMcqs], subCat);
    } else if (normCat.includes('fia assistant director sample') || normCat.includes('sample paper') || normCat.includes('cat_fia_ad_sample') || normCat.includes('fia sample')) {
        pool = filterBySubCategory([...fiaSampleMcqs], subCat);
        if (subCat && subCat.toLowerCase().startsWith('sample paper')) {
            return pool.slice(0, count);
        }
    } else if (normCat.includes('world organization') || normCat.includes('international organization') || normCat.includes('cat_world_org') || normCat === 'world organizations' || normCat.includes('united nations') || normCat.includes('un master') || normCat.includes('european union') || normCat.includes('eu master') || normCat.includes('nato') || normCat.includes('north atlantic')) {
        pool = filterBySubCategory([...unTopicMcqs, ...euTopicMcqs, ...natoTopicMcqs, ...worldOrgMcqs], subCat);
    } else if (normCat.includes('artificial intelligence') || normCat === 'ai' || normCat.includes('ai &') || normCat.includes('ai development')) {
        pool = filterBySubCategory([...aiMcqs], subCat);
    } else if (normCat.includes('audit') || normCat.includes('aao')) {
        pool = filterBySubCategory([...aaoMcqs], subCat);
    } else if (normCat.includes('chemistry') || normCat.includes('cat_chem')) {
        const sciChem = all2200.filter(q => q.category && q.category.name === 'Everyday Science' && /acid|atom|chemical|element|gas|pH|oxide|carbon|hydrogen|oxygen|salt|alkali/i.test(q.questionText || ''));
        pool = filterBySubCategory([...extraChem, ...sciChem], subCat);
    } else if (normCat.includes('metallurg') || normCat.includes('cat_meta')) {
        pool = filterBySubCategory([...extraMeta], subCat);
    } else if (normCat.includes('css past') || normCat.includes('cat_css')) {
        const cssPak = all2200.filter(q => q.category && q.category.name === 'Pakistan Affairs').slice(0, 40);
        pool = filterBySubCategory([...extraCssPP, ...cssPak, ...ca200.slice(0, 40), ...islamiat1000.slice(0, 40)], subCat);
    } else if (normCat.includes('civil servant') || normCat.includes('csa')) {
        pool = filterBySubCategory([...CIVIL_SERVANTS_ACT_MCQS], subCat);
    } else if (normCat.includes('current affairs')) {
        const suhag = all2200.filter(q => q.category && q.category.name === 'Current Affairs');
        pool = filterBySubCategory([...CURRENT_AFFAIRS_2026_MCQS, ...ca200, ...caSts, ...suhag], subCat);
    } else if (normCat.includes('mathematics') || normCat.includes('math')) {
        const suhag = all2200.filter(q => q.category && q.category.name === 'Mathematics');
        pool = filterBySubCategory([...MATH_LIMITS_MCQS, ...MATH_SPECIALIZED_MCQS, ...suhag], subCat);
    } else if (normCat.includes('investigation') || normCat.includes('inv')) {
        pool = filterBySubCategory([...FIA_AD_INVESTIGATION_MCQS], subCat);
    } else if (normCat.includes('fia') || normCat.includes('legal')) {
        pool = filterBySubCategory([...FIA_AD_LEGAL_MCQS], subCat);
    } else if (normCat.includes('geography')) {
        const suhag = all2200.filter(q => q.category && q.category.name === 'Geography');
        pool = filterBySubCategory([...suhag, ...US_GEOGRAPHY_MCQS], subCat);
    } else if (normCat.includes('everyday science') || (normCat.includes('science') && !normCat.includes('computer'))) {
        const suhagSci = all2200.filter(q => q.category && q.category.name === 'Everyday Science');
        const evSci = examveda.filter(q => q.subCategory && ['General Science', 'Physics', 'Chemistry', 'Biology', 'Environmental Science'].includes(q.subCategory));
        pool = filterBySubCategory([...suhagSci, ...sciInst, ...sciCapsule, ...factsMcqs.filter(q => q.category && q.category.name === 'Everyday Science'), ...evSci], subCat);
    } else if (normCat.includes('sindh')) {
        pool = filterBySubCategory(all2200.filter(q => q.category && q.category.name === 'Sindh General Knowledge'), subCat);
    } else if (normCat.includes('islam')) {
        const suhagIslam = all2200.filter(q => q.category && q.category.name === 'Islamiat');
        pool = filterBySubCategory([...islamiat1000, ...suhagIslam], subCat);
    } else if (normCat.includes('pedagog') || normCat.includes('cat_pedagogy')) {
        pool = filterBySubCategory([...pedagogy500], subCat);
    } else if (normCat.includes('iq') || normCat.includes('reasoning')) {
        pool = filterBySubCategory(all2200.filter(q => q.category && q.category.name === 'IQ & Analytical Reasoning'), subCat);
    } else if (normCat.includes('english')) {
        if (subCat && subCat.toLowerCase().includes('synonym')) {
            pool = [...synMcqs];
        } else if (subCat && subCat.toLowerCase().includes('antonym')) {
            pool = [...antMcqs];
        } else {
            const suhagEng = all2200.filter(q => q.category && q.category.name === 'English');
            const evEng = examveda.filter(q => q.category && q.category.name === 'English');
            pool = filterBySubCategory([...suhagEng, ...evEng, ...synMcqs, ...antMcqs], subCat);
        }
    } else if (normCat.includes('computer')) {
        const suhagCS = all2200.filter(q => q.category && q.category.name === 'Computer Science');
        const evCS = examveda.filter(q => q.category && q.category.name === 'Computer Science');
        pool = filterBySubCategory([...compFundMcqs, ...suhagCS, ...evCS], subCat);
    } else if (normCat.includes('pakistan affairs')) {
        pool = filterBySubCategory(all2200.filter(q => q.category && q.category.name === 'Pakistan Affairs'), subCat);
    } else if (normCat.includes('general knowledge') || normCat === 'gk') {
        const suhagGK = all2200.filter(q => q.category && q.category.name === 'General Knowledge');
        const evGK = examveda.filter(q => q.category && q.category.name === 'General Knowledge');
        pool = filterBySubCategory([...suhagGK, ...evGK, ...factsMcqs.filter(q => q.category && q.category.name === 'General Knowledge')], subCat);
    } else {
        // Fallback: match any from all2200 or general pool
        const match = all2200.filter(q => q.category && q.category.name.toLowerCase().includes(normCat));
        if (match.length > 0) pool = filterBySubCategory(match, subCat);
        else pool = [...all2200, ...CURRENT_AFFAIRS_2026_MCQS, ...ca200, ...caSts, ...aiMcqs, ...CIVIL_SERVANTS_ACT_MCQS];
    }

    if (difficulty && difficulty.toLowerCase() !== 'mixed') {
        const diffFiltered = pool.filter(q => (q.difficulty || 'medium').toLowerCase() === difficulty.toLowerCase());
        if (diffFiltered.length > 0) pool = diffFiltered;
    }

    // Shuffle
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function antiCheatWarning(e) {
    if (!isSubmitting) {
        e.preventDefault();
        e.returnValue = '';
    }
}

// 4. Timer Logic
function startTimer() {
    quizTimer.innerText = formatTime(timeRemaining);

    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            autoSubmit();
        } else {
            timeRemaining--;
            totalTimeTaken++;
            quizTimer.innerText = formatTime(timeRemaining);

            if (timeRemaining < 60) {
                quizTimer.style.background = '#ef4444';
            }
        }
    }, 1000);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// 5. Render Question Card
function renderQuestion(index) {
    if (index < 0 || index >= quizQuestions.length) return;
    currentIndex = index;
    const q = quizQuestions[index];

    // Mark as visited
    visitedQuestions.add(index);

    // Update Progress
    progressText.innerText = `${index + 1} / ${quizQuestions.length}`;
    progressBarFill.style.width = `${((index + 1) / quizQuestions.length) * 100}%`;

    // Map Options
    let optsHtml = '';
    const letters = ['A', 'B', 'C', 'D'];
    const selected = userAnswers[q._id];

    letters.forEach(letter => {
        if (q.options && q.options[letter]) {
            const isSelected = selected === letter ? 'selected' : '';
            const safeId = String(q._id).replace(/'/g, "\\'");
            optsHtml += `
            <div class="quiz-option ${isSelected}" data-letter="${letter}" onclick="selectOption('${safeId}', '${letter}', this)">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${q.options[letter]}</div>
            </div>`;
        }
    });

    questionCard.innerHTML = `
        <h2 class="fade-in">Q${index + 1}. ${q.questionText}</h2>
        <div class="quiz-options fade-in">${optsHtml}</div>
    `;

    // Button States
    prevBtn.disabled = index === 0;

    if (index === quizQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        submitTestBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitTestBtn.classList.add('hidden');
    }

    updateReviewButtonState();
    renderPalette();
}

// 6. Question Palette & Navigation
window.jumpToQuestion = function (index) {
    renderQuestion(index);
    // On mobile screens, close the palette drawer after jumping
    if (window.innerWidth <= 900 && quizPalettePanel) {
        quizPalettePanel.classList.remove('palette-open');
    }
};

function updateReviewButtonState() {
    const currentQ = quizQuestions[currentIndex];
    if (!currentQ || !markReviewBtn) return;

    const isReview = markedForReview.has(currentQ._id);
    if (isReview) {
        markReviewBtn.classList.add('active-review');
        markReviewBtn.innerHTML = '<i class="fa-solid fa-flag"></i> <span id="markReviewText">Unmark Review</span>';
    } else {
        markReviewBtn.classList.remove('active-review');
        markReviewBtn.innerHTML = '<i class="fa-regular fa-flag"></i> <span id="markReviewText">Mark for Review</span>';
    }
}

function renderPalette() {
    if (!paletteGrid) return;

    let answeredCount = 0;
    let reviewCount = 0;
    let unansweredCount = 0;
    let notVisitedCount = 0;

    let gridHtml = '';

    quizQuestions.forEach((q, idx) => {
        const isAnswered = Boolean(userAnswers[q._id]);
        const isReview = markedForReview.has(q._id);
        const isVisited = visitedQuestions.has(idx);
        const isCurrent = idx === currentIndex;

        let statusClass = 'status-not-visited';
        if (isAnswered && isReview) {
            statusClass = 'status-review-answered';
            answeredCount++;
            reviewCount++;
        } else if (isAnswered) {
            statusClass = 'status-answered';
            answeredCount++;
        } else if (isReview) {
            statusClass = 'status-review';
            reviewCount++;
        } else if (isVisited) {
            statusClass = 'status-unanswered';
            unansweredCount++;
        } else {
            statusClass = 'status-not-visited';
            notVisitedCount++;
        }

        const currentClass = isCurrent ? 'status-current' : '';
        const statusLabel = isAnswered ? 'Answered' : (isVisited ? 'Unanswered' : 'Not Visited');
        const reviewLabel = isReview ? ' (Marked for Review)' : '';
        const titleText = `Q${idx + 1}: ${statusLabel}${reviewLabel}`;

        gridHtml += `
            <button type="button" 
                    class="palette-btn ${statusClass} ${currentClass}" 
                    onclick="jumpToQuestion(${idx})" 
                    title="${titleText}"
                    aria-label="${titleText}">
                ${idx + 1}
            </button>
        `;
    });

    paletteGrid.innerHTML = gridHtml;

    // Update palette legend counts
    if (palStatAnswered) palStatAnswered.innerText = answeredCount;
    if (palStatUnanswered) palStatUnanswered.innerText = unansweredCount;
    if (palStatReview) palStatReview.innerText = reviewCount;
    if (palStatNotVisited) palStatNotVisited.innerText = notVisitedCount;

    // Update mobile toggle button text
    if (mobileAnsweredCount) mobileAnsweredCount.innerText = answeredCount;
    if (mobileTotalCount) mobileTotalCount.innerText = quizQuestions.length;
}

// 7. Interaction Handlers
window.selectOption = function (questionId, letter, el) {
    userAnswers[questionId] = letter;
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => {
        opt.classList.remove('selected');
        if (!el && opt.getAttribute('data-letter') === letter) {
            opt.classList.add('selected');
        }
    });
    if (el) {
        el.classList.add('selected');
    }
    renderPalette();
};

if (markReviewBtn) {
    markReviewBtn.addEventListener('click', () => {
        const currentQ = quizQuestions[currentIndex];
        if (!currentQ) return;

        if (markedForReview.has(currentQ._id)) {
            markedForReview.delete(currentQ._id);
        } else {
            markedForReview.add(currentQ._id);
        }
        updateReviewButtonState();
        renderPalette();
    });
}

if (clearResponseBtn) {
    clearResponseBtn.addEventListener('click', () => {
        const currentQ = quizQuestions[currentIndex];
        if (!currentQ) return;

        delete userAnswers[currentQ._id];
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(opt => opt.classList.remove('selected'));
        renderPalette();
    });
}

if (paletteMobileToggle && quizPalettePanel) {
    paletteMobileToggle.addEventListener('click', () => {
        quizPalettePanel.classList.toggle('palette-open');
    });
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion(currentIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        renderQuestion(currentIndex);
    }
});

// 8. Submission Phase
submitTestBtn.addEventListener('click', () => {
    const answeredTotal = Object.keys(userAnswers).length;
    if (answeredTotal < quizQuestions.length) {
        const unattempted = quizQuestions.length - answeredTotal;
        if (!confirm(`You haven't answered ${unattempted} of ${quizQuestions.length} questions. Are you sure you want to submit?`)) {
            return;
        }
    }
    submitQuiz();
});

function autoSubmit() {
    alert("Time is up! Submitting your answers automatically.");
    submitQuiz();
}

async function submitQuiz() {
    isSubmitting = true;
    clearInterval(timerInterval);
    window.removeEventListener('beforeunload', antiCheatWarning);

    submitTestBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Grading...';
    submitTestBtn.disabled = true;

    // Send every question in payload so unattempted questions are tracked
    const answersPayload = quizQuestions.map(q => {
        return { questionId: q._id, selectedAnswer: userAnswers[q._id] || null };
    });

    const payload = {
        categoryName: activeQuizTitle.innerText.split(' - ')[0],
        subCategory: activeQuizTitle.innerText.split(' - ')[1] || 'Mixed',
        answers: answersPayload,
        timeTaken: totalTimeTaken,
        negativeMarking: negativeMarkingValue
    };

    try {
        if (typeof window !== 'undefined' && window.__mcqsApiOffline) {
            throw new Error("Standalone mode: grading client-side");
        }
        const res = await apiFetch(`${API_URL}/quiz/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error("Server grading failed");
        const resultData = await res.json();
        renderResultsDashboard(resultData);

    } catch (err) {
        console.warn("Backend grading offline, conducting client-side evaluation.");
        renderFallbackResults(payload);
    }
}

function renderFallbackResults(payload) {
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    const gradedResults = quizQuestions.map(q => {
        const selected = userAnswers[q._id] || null;
        const correct = q.correctAnswer || 'A';
        const isAttempted = selected !== null && selected !== undefined && selected !== '' && selected !== 'None';
        const isCorrect = isAttempted && selected === correct;

        if (isCorrect) {
            correctCount++;
        } else if (isAttempted) {
            wrongCount++;
        } else {
            unattemptedCount++;
        }

        return {
            questionId: q._id,
            questionText: q.questionText,
            options: q.options,
            selectedAnswer: selected,
            correctAnswer: correct,
            isCorrect: isCorrect,
            isAttempted: isAttempted,
            explanation: q.explanation || "Core concepts are systematically verified for this topic."
        };
    });

    const total = quizQuestions.length;
    const penaltyDeducted = +(wrongCount * negativeMarkingValue).toFixed(2);
    const rawScore = +(correctCount - penaltyDeducted).toFixed(2);
    const finalScore = Math.max(0, rawScore);
    const pct = total > 0 ? ((finalScore / total) * 100).toFixed(2) : 0;

    renderResultsDashboard({
        score: finalScore,
        rawScore: rawScore,
        correctCount: correctCount,
        wrongCount: wrongCount,
        unattemptedCount: unattemptedCount,
        penaltyDeducted: penaltyDeducted,
        negativeMarking: negativeMarkingValue,
        totalQuestions: total,
        percentage: pct,
        timeTaken: totalTimeTaken,
        gradedResults
    });
}

// 9. Results View
function renderResultsDashboard(data) {
    sectionEngine.classList.add('hidden');
    sectionResults.classList.remove('hidden');

    document.getElementById('resScore').innerText = `${data.score} / ${data.totalQuestions}`;
    document.getElementById('resPercentage').innerText = `${data.percentage}%`;
    document.getElementById('resTime').innerText = formatTime(data.timeTaken);

    // Auto-record result into Personalized Learning Dashboard
    if (window.LEARNING_DASHBOARD && typeof window.LEARNING_DASHBOARD.recordQuizResult === 'function') {
        try {
            const activeTitleEl = document.getElementById('activeQuizTitle');
            const testTitle = (activeTitleEl && activeTitleEl.innerText.trim()) ? activeTitleEl.innerText.trim() : 'Competitive Exam Mock Test';
            const catName = testTitle.includes('-') ? testTitle.split('-')[0].trim() : testTitle;
            window.LEARNING_DASHBOARD.recordQuizResult({
                testName: testTitle,
                categoryName: catName,
                totalQuestions: data.totalQuestions || (data.gradedResults ? data.gradedResults.length : 50),
                score: data.score,
                correctCount: data.correctCount,
                wrongCount: data.wrongCount,
                unattemptedCount: data.unattemptedCount,
                timeSpent: typeof formatTime === 'function' ? formatTime(data.timeTaken) : '25 mins'
            });
            // Record new mistakes & graduate solved mistakes into Mistake Notebook
            if (Array.isArray(data.gradedResults)) {
                const wrongOnes = data.gradedResults
                    .filter(r => !r.isCorrect)
                    .map(r => ({
                        questionId: r.questionId,
                        questionText: r.questionText,
                        options: r.options,
                        correctAnswer: r.correctAnswer,
                        selectedAnswer: r.selectedAnswer || 'Unattempted',
                        explanation: r.explanation,
                        categoryName: catName
                    }));
                if (wrongOnes.length > 0 && typeof window.LEARNING_DASHBOARD.recordMistakes === 'function') {
                    window.LEARNING_DASHBOARD.recordMistakes(wrongOnes, catName);
                }
                if (catName.toLowerCase().includes('mistake') && typeof window.LEARNING_DASHBOARD.resolveMistake === 'function') {
                    data.gradedResults.filter(r => r.isCorrect).forEach(r => {
                        window.LEARNING_DASHBOARD.resolveMistake(r.questionId);
                    });
                }
            }
            console.log('Quiz result and Mistake Notebook synced to Learning Dashboard.');
        } catch (e) {
            console.warn('Could not record quiz result to Learning Dashboard:', e);
        }
    }

    // Scorecard Breakdown Cards
    const resCorrect = document.getElementById('resCorrect');
    const resWrong = document.getElementById('resWrong');
    const resPenalty = document.getElementById('resPenalty');
    const resUnattempted = document.getElementById('resUnattempted');

    if (resCorrect) resCorrect.innerText = data.correctCount !== undefined ? data.correctCount : '-';
    if (resWrong) resWrong.innerText = data.wrongCount !== undefined ? data.wrongCount : '-';
    if (resPenalty) {
        const pen = data.penaltyDeducted || 0;
        resPenalty.innerText = pen > 0 ? `-${pen.toFixed(2)}` : '0.00';
    }
    if (resUnattempted) resUnattempted.innerText = data.unattemptedCount !== undefined ? data.unattemptedCount : '-';

    const statusEl = document.getElementById('resStatus');
    if (data.percentage >= 80) { statusEl.innerText = 'Excellent'; statusEl.parentElement.className = 'score-metric primary'; }
    else if (data.percentage >= 50) { statusEl.innerText = 'Average'; statusEl.parentElement.className = 'score-metric info'; }
    else { statusEl.innerText = 'Needs Work'; statusEl.parentElement.className = 'score-metric warning'; }

    const retryBtn = document.getElementById('retryMistakesBtn');
    if (retryBtn && Array.isArray(data.gradedResults)) {
        const missedInThisQuiz = data.gradedResults.filter(r => !r.isCorrect);
        if (missedInThisQuiz.length > 0) {
            retryBtn.classList.remove('hidden');
            retryBtn.innerHTML = `<i class="fa-solid fa-bullseye"></i> Retry ${missedInThisQuiz.length} Missed Question${missedInThisQuiz.length === 1 ? '' : 's'} Now`;
            retryBtn.onclick = () => {
                quizQuestions = missedInThisQuiz.map(r => ({
                    _id: r.questionId,
                    questionText: r.questionText,
                    options: r.options,
                    correctAnswer: r.correctAnswer,
                    explanation: r.explanation
                }));
                userAnswers = {};
                visitedQuestions.clear();
                markedForReview.clear();
                currentIndex = 0;
                totalTimeTaken = 0;
                isSubmitting = false;
                sectionResults.classList.add('hidden');
                sectionEngine.classList.remove('hidden');
                activeQuizTitle.innerText = '🎯 Mistake Notebook - Instant Retry';
                timeRemaining = quizQuestions.length * 60;
                startTimer();
                renderQuestion(0);
            };
        } else {
            retryBtn.classList.add('hidden');
        }
    }

    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';

    data.gradedResults.forEach((res, idx) => {
        const isCorrect = res.isCorrect;
        const isAttempted = res.selectedAnswer !== null && res.selectedAnswer !== undefined && res.selectedAnswer !== '' && res.selectedAnswer !== 'None';
        
        let bgClass = 'wrong-bg';
        let statusBadge = '<span style="color:#ef4444;font-size:0.85rem;font-weight:600;"><i class="fa-solid fa-xmark"></i> Incorrect</span>';
        
        if (isCorrect) {
            bgClass = 'correct-bg';
            statusBadge = '<span style="color:#10b981;font-size:0.85rem;font-weight:600;"><i class="fa-solid fa-check"></i> Correct (+1)</span>';
        } else if (!isAttempted) {
            bgClass = '';
            statusBadge = '<span style="color:#64748b;font-size:0.85rem;font-weight:600;"><i class="fa-regular fa-circle"></i> Unattempted (0)</span>';
        } else if (data.negativeMarking > 0) {
            statusBadge = `<span style="color:#ef4444;font-size:0.85rem;font-weight:600;"><i class="fa-solid fa-xmark"></i> Incorrect (-${data.negativeMarking})</span>`;
        }

        let optionsHtml = '';
        ['A', 'B', 'C', 'D'].forEach(ltr => {
            if (res.options[ltr]) {
                let optClass = '';
                if (ltr === res.correctAnswer) {
                    optClass = 'review-opt-correct';
                } else if (ltr === res.selectedAnswer && !isCorrect) {
                    optClass = 'review-opt-wrong';
                }

                optionsHtml += `
                    <div class="${optClass}">
                        <strong>${ltr}.</strong> ${res.options[ltr]} 
                        ${ltr === res.selectedAnswer ? '(Your answer)' : ''}
                        ${ltr === res.correctAnswer ? '<i class="fa-solid fa-check"></i>' : ''}
                    </div>
                `;
            }
        });

        reviewList.innerHTML += `
            <div class="review-item ${bgClass}">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                    <div class="review-question" style="margin-bottom:0;">Q${idx + 1}. ${res.questionText}</div>
                    <div>${statusBadge}</div>
                </div>
                <div class="review-options">
                    ${optionsHtml}
                </div>
                <div class="review-explanation">
                    <strong>Explanation:</strong><br/>
                    ${res.explanation || 'No detailed explanation provided.'}
                </div>
            </div>
        `;
    });
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

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeNav();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNav();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeNav();
        }
    });
}

// Boot immediately on DOMContentLoaded (don't wait for slow external assets in window.onload)
window.generateFallbackQuiz = generateFallbackQuiz;
function bootQuizSimulator() {
    initMobileNav();
    initDarkMode();
    loadCategoriesForSetup();
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootQuizSimulator);
} else {
    bootQuizSimulator();
}
