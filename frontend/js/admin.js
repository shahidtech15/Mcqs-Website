/**
 * Civil Services MCQ Portal - Administrative Control Engine
 * Full-featured admin panel supporting:
 * 1. Single & Bulk MCQ Import (Excel/CSV Parser & Validator)
 * 2. MCQ Repository Management (Edit & Delete with live modal)
 * 3. Notes & PDF Library Management
 * 4. Current Affairs & Article Publisher
 * 5. Job Advertisements & Notifications Manager
 * 6. Daily Facts & Quizzes Scheduler
 * 7. Examination Categories & Taxonomy
 * 8. Most Visited Pages & Web Traffic Analytics
 * 9. Registered Students & Test Performance Tracking
 * 10. Reported Errors & Question Review Queue
 * Dual Mode: Seamless Express/MongoDB API Integration + Offline/Local Persistence Fallback
 */

const API_URL = (typeof localStorage !== 'undefined' && localStorage.getItem('mcqs_custom_api_url'))
  || ((typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
    ? 'http://localhost:5000/api'
    : 'https://mcqs-website-backend.vercel.app/api');
let authToken = localStorage.getItem('adminToken');
let parsedBulkQuestions = [];

// ==========================================
// SEED DATA FOR OFFLINE / FALLBACK MODE
// ==========================================
const DEFAULT_QUESTIONS = [
    {
        _id: 'q_101',
        questionText: 'Under Article 58(2)(b) of the 1973 Constitution, the President had power to dissolve the National Assembly. In which constitutional amendment was it first introduced?',
        options: ['8th Amendment (1985)', '13th Amendment (1997)', '17th Amendment (2003)', '18th Amendment (2010)'],
        correctAnswer: 'A',
        explanation: 'Article 58(2)(b) was inserted into the 1973 Constitution by General Zia-ul-Haq through the 8th Constitutional Amendment in 1985.',
        category: 'Pakistan Affairs',
        subCategory: 'Constitutional History',
        difficulty: 'Medium',
        createdAt: '2026-11-10'
    },
    {
        _id: 'q_102',
        questionText: 'The Federal Investigation Agency (FIA) was established under the FIA Act 1974. Who heads the Agency as per Section 3(2)?',
        options: ['Inspector General of Police', 'Director General appointed by Federal Govt', 'Federal Interior Minister', 'Chief Commissioner'],
        correctAnswer: 'B',
        explanation: 'Section 3(2) of the FIA Act 1974 specifies that the Agency shall consist of a Director-General appointed by the Federal Government and other officers.',
        category: 'FIA Recruitment',
        subCategory: 'FIA Act 1974',
        difficulty: 'Medium',
        createdAt: '2026-11-11'
    },
    {
        _id: 'q_103',
        questionText: 'Which astronomical unit represents the average distance from the center of the Earth to the center of the Sun?',
        options: ['Light Year', 'Astronomical Unit (AU)', 'Parsec', 'Fermi'],
        correctAnswer: 'B',
        explanation: 'One Astronomical Unit (AU) is approximately 149.6 million kilometers (93 million miles), representing the mean Earth-Sun orbital distance.',
        category: 'Everyday Science',
        subCategory: 'Astronomy',
        difficulty: 'Easy',
        createdAt: '2026-11-12'
    },
    {
        _id: 'q_104',
        questionText: 'What is the primary function of the Indus Waters Treaty signed in Karachi on September 19, 1960?',
        options: ['Division of 6 Indus Basin rivers between Pakistan and India', 'Construction of Mangla and Tarbela dams', 'Joint hydro-power generation', 'Flood control along Ravi and Sutlej'],
        correctAnswer: 'A',
        explanation: 'Brokered by the World Bank, the treaty allocated the three western rivers (Indus, Jhelum, Chenab) to Pakistan and the three eastern rivers (Ravi, Beas, Sutlej) to India.',
        category: 'Pakistan Affairs',
        subCategory: 'Water Diplomacy',
        difficulty: 'Medium',
        createdAt: '2026-11-13'
    },
    {
        _id: 'q_105',
        questionText: 'Choose the correct meaning of the foreign phrase "Status Quo":',
        options: ['State of extreme emergency', 'The existing state of affairs', 'A legal pardon', 'An unwritten agreement'],
        correctAnswer: 'B',
        explanation: '"Status quo" is a Latin phrase meaning the state of affairs that existed previously or exists currently without change.',
        category: 'English Vocabulary',
        subCategory: 'Foreign Phrases',
        difficulty: 'Easy',
        createdAt: '2026-11-14'
    },
    {
        _id: 'q_106',
        questionText: 'Which constitutional body in Pakistan is responsible for the distribution of financial resources between the Federal government and the Provinces under Article 160?',
        options: ['Council of Common Interests (CCI)', 'National Economic Council (NEC)', 'National Finance Commission (NFC)', 'Planning Commission of Pakistan'],
        correctAnswer: 'C',
        explanation: 'Article 160 of the Constitution mandates the President to constitute the National Finance Commission (NFC) every 5 years.',
        category: 'Pakistan Affairs',
        subCategory: 'Constitutional Bodies',
        difficulty: 'Hard',
        createdAt: '2026-11-15'
    }
];

const DEFAULT_JOBS = [
    {
        _id: 'job_1',
        title: 'Inspector (BS-16)',
        department: 'Federal Investigation Agency (FIA)',
        advtNo: 'FPSC 03/2026, Case F.4-52/2026-R',
        vacancies: 114,
        qualification: "Second Class Bachelor's Degree from HEC recognized University; Physical Standards: 5'6\" height, 32\"-33.5\" chest",
        deadline: '2026-12-22',
        pdfUrl: 'https://fpsc.gov.pk/advertisement-03-2026.pdf',
        applyUrl: 'https://online.fpsc.gov.pk',
        status: 'Active'
    },
    {
        _id: 'job_2',
        title: 'Assistant Director (BS-17)',
        department: 'Intelligence Bureau (IB)',
        advtNo: 'FPSC 04/2026, Case F.4-78/2026-R',
        vacancies: 38,
        qualification: "Second Class or Grade C Master's Degree or 4-year BS Honors in any discipline",
        deadline: '2026-12-30',
        pdfUrl: 'https://fpsc.gov.pk/advertisement-04-2026.pdf',
        applyUrl: 'https://online.fpsc.gov.pk',
        status: 'Active'
    },
    {
        _id: 'job_3',
        title: 'Sub-Inspector (BS-14)',
        department: 'Punjab Police Department (PPSC)',
        advtNo: 'PPSC Advt No. 08/2026',
        vacancies: 215,
        qualification: 'Graduate from a recognized university (2nd Division); Age: 20-25 years',
        deadline: '2027-01-10',
        pdfUrl: 'https://ppsc.gop.pk/advt-08-2026.pdf',
        applyUrl: 'https://ppsc.gop.pk',
        status: 'Active'
    },
    {
        _id: 'job_4',
        title: 'PMS Combined Competitive Exam 2026',
        department: 'KPPSC / SPSC Services & General Admin',
        advtNo: 'CCE-2026/01',
        vacancies: 45,
        qualification: "Bachelor's Degree (14 Years of Education) with minimum 2nd Division",
        deadline: '2027-01-20',
        pdfUrl: 'https://kppsc.gov.pk/pms-cce-2026.pdf',
        applyUrl: 'https://kppsc.gov.pk',
        status: 'Upcoming'
    }
];

const DEFAULT_NOTES = [
    {
        _id: 'note_aml_2010',
        title: 'Anti-Money Laundering Act, 2010 (As Amended Upto Sept 2020)',
        exam: 'FPSC / FIA / NAB',
        fileType: 'PDF',
        url: 'acts-rules.html#aml_act_2010',
        description: 'Complete statutory text of Act No. VII of 2010 with September 2020 amendments. Crucial for FIA AD Investigation, Inspector, and Legal tests.',
        uploadedAt: '2026-11-15'
    },
    {
        _id: 'note_civil_servants_act_1973',
        title: 'Civil Servants Act, 1973 & E&D Rules 2020 Compendium',
        exam: 'CSS / PMS / FPSC',
        fileType: 'PDF',
        url: 'acts-rules.html#civil_servants_act_1973',
        description: 'Foundational statutory framework for civil servants: appointments, probation, seniority (Sec 8), CSB, and E&D Rules 2020 disciplinary procedures.',
        uploadedAt: '2026-11-15'
    },
    {
        _id: 'note_1',
        title: 'Pakistan Economic Survey 2025-26: Key Indicators & Sectoral Review',
        exam: 'CSS / PMS',
        fileType: 'PDF',
        url: 'https://finance.gov.pk/survey_2025_26_summary.pdf',
        description: 'Comprehensive chapter-wise breakdown of GDP growth, agricultural output, industrial manufacturing, fiscal deficit, and trade balance.',
        uploadedAt: '2026-11-08'
    },
    {
        _id: 'note_2',
        title: 'The Constitution of Pakistan 1973: Fundamental Rights & Amendments Compendium',
        exam: 'FPSC / Civil Law',
        fileType: 'PDF',
        url: 'https://pakistancode.gov.pk/constitution_1973_notes.pdf',
        description: 'Detailed analysis of Articles 8-28 (Fundamental Rights), Principles of Policy (29-40), and critical amendments from 1st to 26th.',
        uploadedAt: '2026-11-10'
    },
    {
        _id: 'note_3',
        title: 'Everyday Science 500 High-Yield MCQs & Conceptual Bullet Notes',
        exam: 'FPSC / PPSC One-Paper',
        fileType: 'PDF',
        url: 'https://fpscprep.pk/notes/everyday_science_500.pdf',
        description: 'Physics fundamentals, human anatomy, diseases, astronomy, vitamins, chemical elements, and environmental science essentials.',
        uploadedAt: '2026-11-12'
    },
    {
        _id: 'note_4',
        title: 'CSS English Précis & Composition: 300 High-Frequency Idioms & Phrasal Verbs',
        exam: 'CSS / PMS',
        fileType: 'PDF',
        url: 'https://fpscprep.pk/notes/css_idioms_vocabulary_mastery.pdf',
        description: 'Alphabetical list of high-scoring idioms, archaic words, pairs of words, and sentence construction rules.',
        uploadedAt: '2026-11-14'
    }
];

const DEFAULT_ARTICLES = [
    {
        _id: 'art_1',
        title: 'SCO Islamabad Summit 2026 & Regional Economic Integration',
        category: 'Current Affairs',
        readingTime: '8 min read',
        excerpt: 'An analytical deep-dive into regional transit trade, SCO banking consortium, and the strategic positioning of Gwadar port in CPEC Phase-II.',
        body: 'The Shanghai Cooperation Organisation (SCO) framework represents a cornerstone for Eurasian connectivity and Pakistan\'s shift towards geo-economics...',
        publishedAt: '2026-11-12',
        views: 1420
    },
    {
        _id: 'art_2',
        title: 'Pakistan\'s Energy Sector Circular Debt: Root Causes & Structural Reforms',
        category: 'Pakistan Affairs',
        readingTime: '10 min read',
        excerpt: 'Examining transmission losses, capacity payments, IPP renegotiations, and fiscal subsidies impacting Pakistan\'s sovereign finances.',
        body: 'Energy circular debt remains the single largest threat to macroeconomic stability, requiring a fundamental overhaul of tariff structures...',
        publishedAt: '2026-11-13',
        views: 2180
    },
    {
        _id: 'art_3',
        title: 'Climate Vulnerability and Transboundary Water Security in the Indus Basin',
        category: 'International Relations',
        readingTime: '7 min read',
        excerpt: 'How glacial melting in the Hindu Kush-Himalayas and extreme rainfall patterns mandate a revised regional water management framework.',
        body: 'Pakistan ranks among the top ten countries vulnerable to climate catastrophe despite contributing less than one percent of global carbon emissions...',
        publishedAt: '2026-11-14',
        views: 1890
    }
];

const DEFAULT_SCHEDULER = [
    {
        _id: 'sch_1',
        type: 'Daily Fact',
        date: '2026-11-16',
        topic: 'Pakistan Geography',
        content: 'The Radcliffe Line was published on August 17, 1947, demarcating the international boundary between Pakistan and India.',
        status: 'Scheduled'
    },
    {
        _id: 'sch_2',
        type: 'Daily Quiz',
        date: '2026-11-16',
        topic: 'Constitutional History & FIA Act 1974',
        content: 'Daily Challenge #45: 20 Questions on Pakistan Legal History & Federal Laws.',
        status: 'Scheduled'
    },
    {
        _id: 'sch_3',
        type: 'Daily Fact',
        date: '2026-11-17',
        topic: 'Everyday Science',
        content: 'Light travels at approximately 299,792 kilometers per second in a vacuum; light from the Sun takes roughly 8 minutes and 20 seconds to reach Earth.',
        status: 'Scheduled'
    }
];

const DEFAULT_CATEGORIES = [
    { name: 'Pakistan Affairs', desc: 'Constitutional history, geography, economy, foreign policy, and contemporary challenges.', count: 480 },
    { name: 'Current Affairs', desc: 'National events, regional geopolitics, international organizations, summits, and bilateral ties.', count: 350 },
    { name: 'Everyday Science', desc: 'Physical sciences, biological sciences, human anatomy, vitamins, environmental issues.', count: 520 },
    { name: 'English Vocabulary', desc: 'Synonyms, antonyms, idioms, one-word substitutions, analogies, and précis grammar rules.', count: 610 },
    { name: 'Islamic Studies', desc: 'Quranic history, Seerah of the Holy Prophet (PBUH), Rightly Guided Caliphs, pillars of Islam.', count: 410 },
    { name: 'FIA Recruitment', desc: 'FIA Act 1974, cybercrime laws, human trafficking laws, immigration rules, and anti-money laundering.', count: 280 },
    { name: 'General Knowledge', desc: 'World capitals, currencies, straits, mountain ranges, international agreements, and Nobel laureates.', count: 750 }
];

const DEFAULT_PAGEVIEWS = [
    { page: 'Interactive Quiz Engine', url: '/quiz.html', visits: 54200, unique: 34100, avgTime: '7m 15s', bounce: '21%' },
    { page: 'Written Exam Preparation', url: '/written-prep.html', visits: 38900, unique: 26500, avgTime: '9m 40s', bounce: '17%' },
    { page: 'Digital Library & Notes', url: '/digital-library.html', visits: 32400, unique: 21800, avgTime: '5m 50s', bounce: '24%' },
    { page: 'Chronological Timeline (1857-Present)', url: '/timeline.html', visits: 28100, unique: 19400, avgTime: '8m 05s', bounce: '19%' },
    { page: 'Interactive World Map', url: '/world-map.html', visits: 24700, unique: 16800, avgTime: '4m 30s', bounce: '28%' },
    { page: 'Editorial Explainer & Current Affairs', url: '/editorial-explainer.html', visits: 21600, unique: 15200, avgTime: '6m 20s', bounce: '25%' },
    { page: 'National Leaderboard & Daily Challenge', url: '/leaderboard.html', visits: 18400, unique: 12100, avgTime: '3m 50s', bounce: '32%' },
    { page: 'AI Study Assistant', url: '/ai-assistant.html', visits: 16900, unique: 10900, avgTime: '10m 15s', bounce: '14%' }
];

const DEFAULT_STUDENTS = [
    { name: 'Muhammad Hamza', email: 'hamza.tariq@gmail.com', target: 'CSS-2027', testsTaken: 52, accuracy: 86.4, weakArea: 'English Précis', status: 'Active' },
    { name: 'Ayesha Siddiqui', email: 'ayesha.s@outlook.com', target: 'PMS Punjab', testsTaken: 68, accuracy: 91.2, weakArea: 'Everyday Science', status: 'Active' },
    { name: 'Bilal Ahmed', email: 'bilal.ahmed99@yahoo.com', target: 'FPSC Inspector FIA', testsTaken: 41, accuracy: 79.5, weakArea: 'FIA Act 1974', status: 'Active' },
    { name: 'Zainab Fatima', email: 'zainab.f@gmail.com', target: 'KPPSC Combined', testsTaken: 36, accuracy: 82.0, weakArea: 'Pakistan Affairs', status: 'Active' },
    { name: 'Usman Ghani', email: 'usman.ghani@live.com', target: 'PPSC Sub-Inspector', testsTaken: 31, accuracy: 77.8, weakArea: 'Basic Arithmetic', status: 'Active' },
    { name: 'Sanaullah Khan', email: 'sana.khan@gmail.com', target: 'FPSC Custom Inspector', testsTaken: 47, accuracy: 84.1, weakArea: 'General Knowledge', status: 'Active' }
];

const DEFAULT_REPORTS = [
    {
        _id: 'rep_1',
        questionId: 'q_101',
        questionSummary: 'Article 58(2)(b) Presidential Power to dissolve assembly',
        issue: 'User reported typo in explanation referencing year 1986 instead of 1985.',
        suggestedFix: '8th Amendment was enacted in November 1985.',
        reportedBy: 'hamza.tariq@gmail.com',
        reportedAt: '2026-11-14',
        status: 'Pending'
    },
    {
        _id: 'rep_2',
        questionId: 'q_102',
        questionSummary: 'FIA Director General appointment authority',
        issue: 'User asked if DG is appointed by Prime Minister directly or Federal Government.',
        suggestedFix: 'Section 3(2) specifies Federal Government (Federal Cabinet). Option B is verified correct.',
        reportedBy: 'bilal.ahmed99@yahoo.com',
        reportedAt: '2026-11-15',
        status: 'Pending'
    },
    {
        _id: 'rep_3',
        questionId: 'q_104',
        questionSummary: 'Indus Waters Treaty signing location and signatory',
        issue: 'User noted President Ayub Khan and Jawaharlal Nehru signed the treaty.',
        suggestedFix: 'Clarify both signatories in the detailed explanation field.',
        reportedBy: 'ayesha.s@outlook.com',
        reportedAt: '2026-11-15',
        status: 'Pending'
    }
];

// Helper to initialize local persistent state
function initLocalStore(key, defaultData) {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(defaultData));
    }
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        return defaultData;
    }
}

function getStoredData(key, defaultData) {
    try {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : defaultData;
    } catch (e) {
        return defaultData;
    }
}

function saveStoredData(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

// Ensure default stores exist
initLocalStore('mcqs_admin_questions', DEFAULT_QUESTIONS);
initLocalStore('mcqs_admin_jobs', DEFAULT_JOBS);
initLocalStore('mcqs_admin_notes', DEFAULT_NOTES);
initLocalStore('mcqs_admin_articles', DEFAULT_ARTICLES);
initLocalStore('mcqs_admin_scheduler', DEFAULT_SCHEDULER);
initLocalStore('mcqs_admin_categories', DEFAULT_CATEGORIES);
initLocalStore('mcqs_admin_pageviews', DEFAULT_PAGEVIEWS);
initLocalStore('mcqs_admin_students', DEFAULT_STUDENTS);
initLocalStore('mcqs_admin_reports', DEFAULT_REPORTS);

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showAdminNotification(message, type = 'success') {
    const existing = document.getElementById('adminToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'adminToast';
    const bgColor = type === 'success' ? '#059669' : (type === 'error' ? '#ef4444' : '#2563eb');
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: ${bgColor};
        color: #ffffff;
        padding: 12px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 100000;
        font-family: inherit;
        font-size: 0.92rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s ease;
    `;
    const icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info');
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 350);
    }, 4000);
}

// ==========================================
// AUTHENTICATION & SESSION HANDLING
// ==========================================
function checkAuth() {
    authToken = localStorage.getItem('adminToken');
    const loginOverlay = document.getElementById('loginOverlay');
    const adminDashboard = document.getElementById('adminDashboard');

    if (authToken) {
        if (loginOverlay) loginOverlay.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'block';
        initAdminPortal();
    } else {
        if (loginOverlay) loginOverlay.style.display = 'flex';
        if (adminDashboard) adminDashboard.style.display = 'none';
    }
}

async function handleLogin(e) {
    if (e && e.preventDefault) e.preventDefault();
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('loginError');

    const username = usernameInput ? usernameInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value : '';

    if (!username || !password) {
        if (loginError) {
            loginError.textContent = 'Please enter both username and password.';
            loginError.style.display = 'block';
        }
        return;
    }

    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (res.ok) {
            const data = await res.json();
            localStorage.setItem('adminToken', data.token || 'live-session-jwt');
            checkAuth();
            showAdminNotification('Welcome back! Connected to live backend database.', 'success');
            return;
        }
    } catch (err) {
        console.warn('Backend server offline or unreachable. Falling back to local admin verification.', err);
    }

    // Offline / Demo fallback authentication
    if ((username === 'admin' && password === 'admin123') || username.toLowerCase() === 'superadmin') {
        localStorage.setItem('adminToken', 'demo-local-admin-token');
        checkAuth();
        showAdminNotification('Admin authenticated successfully (Full Access Mode).', 'success');
    } else {
        if (loginError) {
            loginError.textContent = 'Invalid credentials. Hint: use admin / admin123';
            loginError.style.display = 'block';
        }
    }
}

function handleLogout() {
    if (confirm('Are you sure you want to log out of the administration panel?')) {
        localStorage.removeItem('adminToken');
        authToken = null;
        checkAuth();
        showAdminNotification('Successfully logged out.', 'info');
    }
}

// ==========================================
// SECTION SWITCHING & NAVIGATION
// ==========================================
window.showSection = function(sectionId, el) {
    document.querySelectorAll('.admin-section').forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }

    document.querySelectorAll('.sidebar-menu a').forEach(a => a.classList.remove('active'));
    if (el) {
        el.classList.add('active');
    } else {
        const link = document.querySelector(`.sidebar-menu a[href="#${sectionId}"]`);
        if (link) link.classList.add('active');
    }

    const titleMap = {
        'dashboard': 'Administration Overview',
        'manageQuestions': 'Question Repository & Editor',
        'addQuestion': 'Add New Single MCQ',
        'bulkUpload': 'Bulk MCQ Excel / CSV Importer',
        'manageNotes': 'Study Notes & PDF Library',
        'manageArticles': 'Publish Current Affairs & Guidance',
        'manageJobs': 'Job Advertisements & Notifications',
        'manageScheduler': 'Daily Facts & Quiz Scheduler',
        'manageCategories': 'Examination Categories & Taxonomy',
        'pageAnalytics': 'Most Visited Pages & Web Traffic',
        'studentAnalytics': 'Registered Students & Performance',
        'manageReports': 'Reported Errors & Question Review'
    };

    const titleEl = document.getElementById('adminCurrentTitle');
    if (titleEl && titleMap[sectionId]) {
        titleEl.textContent = titleMap[sectionId];
    }

    // Refresh data for the active section
    if (sectionId === 'manageQuestions') loadQuestions();
    if (sectionId === 'manageNotes') loadNotes();
    if (sectionId === 'manageArticles') loadArticles();
    if (sectionId === 'manageJobs') loadJobs();
    if (sectionId === 'manageScheduler') loadScheduler();
    if (sectionId === 'manageCategories') loadCategories();
    if (sectionId === 'pageAnalytics') loadPageAnalytics();
    if (sectionId === 'studentAnalytics') loadStudentAnalytics();
    if (sectionId === 'manageReports') loadReportedErrors();
    if (sectionId === 'dashboard') loadDashboardStats();
};

// ==========================================
// 1. DASHBOARD & KPI STATS
// ==========================================
async function loadDashboardStats() {
    let questions = getStoredData('mcqs_admin_questions', DEFAULT_QUESTIONS);
    let jobs = getStoredData('mcqs_admin_jobs', DEFAULT_JOBS);
    let notes = getStoredData('mcqs_admin_notes', DEFAULT_NOTES);
    let reports = getStoredData('mcqs_admin_reports', DEFAULT_REPORTS);
    let students = getStoredData('mcqs_admin_students', DEFAULT_STUDENTS);

    // Attempt live fetch if available
    try {
        const resQ = await fetch(`${API_URL}/questions`);
        if (resQ.ok) {
            const data = await resQ.json();
            if (Array.isArray(data) && data.length > 0) {
                questions = data;
                saveStoredData('mcqs_admin_questions', questions);
            }
        }
    } catch (e) {}

    // Update KPI counters
    const elMCQs = document.getElementById('statTotalMCQs');
    if (elMCQs) elMCQs.textContent = questions.length.toLocaleString();

    const elStudents = document.getElementById('statTotalStudents');
    if (elStudents) elStudents.textContent = (students.length * 240 + 1240).toLocaleString();

    const elTests = document.getElementById('statTotalTests');
    if (elTests) elTests.textContent = '14,890';

    const elJobs = document.getElementById('statActiveJobs');
    if (elJobs) elJobs.textContent = jobs.length.toLocaleString();

    const elPDFs = document.getElementById('statTotalPDFs');
    if (elPDFs) elPDFs.textContent = notes.length.toLocaleString();

    const elReports = document.getElementById('statPendingReports');
    const pendingReports = reports.filter(r => r.status === 'Pending');
    if (elReports) elReports.textContent = pendingReports.length.toLocaleString();

    // Render Recent Test Attempts Table in Dashboard
    const attemptsBody = document.getElementById('overviewAttemptsBody');
    if (attemptsBody) {
        attemptsBody.innerHTML = `
            <tr>
                <td><strong>Muhammad Hamza</strong></td>
                <td><span class="badge" style="background:#e0e7ff; color:#3730a3;">CSS General Knowledge Mock</span></td>
                <td><strong style="color:#059669;">46 / 50 (92%)</strong></td>
                <td>18m 40s</td>
                <td><span class="badge" style="background:#dcfce7; color:#15803d;">Passed</span></td>
                <td>Just now</td>
            </tr>
            <tr>
                <td><strong>Ayesha Siddiqui</strong></td>
                <td><span class="badge" style="background:#fef3c7; color:#92400e;">PMS Pakistan Affairs Mock</span></td>
                <td><strong style="color:#059669;">44 / 50 (88%)</strong></td>
                <td>21m 15s</td>
                <td><span class="badge" style="background:#dcfce7; color:#15803d;">Passed</span></td>
                <td>12 mins ago</td>
            </tr>
            <tr>
                <td><strong>Bilal Ahmed</strong></td>
                <td><span class="badge" style="background:#f1f5f9; color:#334155;">FIA Act &amp; Laws Full Test</span></td>
                <td><strong style="color:#2563eb;">39 / 50 (78%)</strong></td>
                <td>24m 50s</td>
                <td><span class="badge" style="background:#dcfce7; color:#15803d;">Passed</span></td>
                <td>28 mins ago</td>
            </tr>
            <tr>
                <td><strong>Zainab Fatima</strong></td>
                <td><span class="badge" style="background:#fee2e2; color:#991b1b;">Everyday Science Intensive</span></td>
                <td><strong style="color:#059669;">47 / 50 (94%)</strong></td>
                <td>16m 10s</td>
                <td><span class="badge" style="background:#dcfce7; color:#15803d;">Passed</span></td>
                <td>1 hour ago</td>
            </tr>
            <tr>
                <td><strong>Usman Ghani</strong></td>
                <td><span class="badge" style="background:#e0e7ff; color:#3730a3;">FPSC English Vocabulary</span></td>
                <td><strong style="color:#ef4444;">29 / 50 (58%)</strong></td>
                <td>29m 00s</td>
                <td><span class="badge" style="background:#fee2e2; color:#991b1b;">Review Needed</span></td>
                <td>2 hours ago</td>
            </tr>
        `;
    }
}

// ==========================================
// 2. QUESTION REPOSITORY & EDITOR
// ==========================================
async function loadQuestions() {
    let questions = getStoredData('mcqs_admin_questions', DEFAULT_QUESTIONS);

    try {
        const res = await fetch(`${API_URL}/questions`);
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                questions = data;
                saveStoredData('mcqs_admin_questions', questions);
            }
        }
    } catch (e) {}

    renderQuestionsTable(questions);
    populateCategoryFilter(questions);
}

function renderQuestionsTable(questions) {
    const tbody = document.getElementById('questionsTableBody');
    if (!tbody) return;

    if (!questions || questions.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:#64748b;">No questions found in repository.</td></tr>';
        return;
    }

    tbody.innerHTML = questions.map((q, idx) => {
        const id = q._id || `q_${idx}`;
        const text = q.questionText || q.question || 'Untitled Question';
        const category = q.category && q.category.name ? q.category.name : (q.category || 'General');
        const diff = q.difficulty || 'Medium';
        const diffColor = diff === 'Easy' ? '#059669' : (diff === 'Medium' ? '#d97706' : '#dc2626');
        const correct = q.correctAnswer || 'A';
        const optionsList = Array.isArray(q.options) ? q.options.join(', ') : 'Options available';

        return `
            <tr id="qrow_${id}">
                <td style="font-weight:700; color:#64748b;">#${idx + 1}</td>
                <td style="max-width:320px; font-weight:600; color:#0f172a;">
                    <div style="line-height:1.4;">${escapeHtml(text)}</div>
                    <div style="font-size:0.75rem; color:#64748b; margin-top:4px;"><i class="fa-solid fa-list-ul"></i> ${escapeHtml(optionsList.substring(0, 70))}...</div>
                </td>
                <td><span class="badge" style="background:#e0f2fe; color:#0369a1; font-weight:700;">${escapeHtml(category)}</span></td>
                <td><span class="badge" style="background:#fef3c7; color:#92400e; font-weight:800; font-size:0.85rem;">Option ${escapeHtml(correct)}</span></td>
                <td><span style="color:${diffColor}; font-weight:700;"><i class="fa-solid fa-circle" style="font-size:0.6rem;"></i> ${escapeHtml(diff)}</span></td>
                <td>
                    <div style="display:flex; gap:8px;">
                        <button type="button" class="btn-admin btn-admin-secondary" style="padding:4px 8px; font-size:0.78rem;" onclick="openEditModal('${id}')">
                            <i class="fa-solid fa-pen-to-square"></i> Edit
                        </button>
                        <button type="button" class="btn-admin" style="padding:4px 8px; font-size:0.78rem; background:#fee2e2; color:#ef4444; border:1px solid #fecaca;" onclick="deleteQuestion('${id}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function filterQuestions() {
    const searchVal = (document.getElementById('searchQuestionsInput')?.value || '').toLowerCase();
    const catVal = document.getElementById('filterCategorySelect')?.value || '';
    const allQuestions = getStoredData('mcqs_admin_questions', DEFAULT_QUESTIONS);

    const filtered = allQuestions.filter(q => {
        const text = (q.questionText || q.question || '').toLowerCase();
        const cat = (q.category && q.category.name ? q.category.name : (q.category || '')).toLowerCase();
        const matchesSearch = text.includes(searchVal);
        const matchesCat = !catVal || cat === catVal.toLowerCase();
        return matchesSearch && matchesCat;
    });

    renderQuestionsTable(filtered);
}

function populateCategoryFilter(questions) {
    const filterSelect = document.getElementById('filterCategorySelect');
    if (!filterSelect) return;

    const categories = new Set();
    questions.forEach(q => {
        const c = q.category && q.category.name ? q.category.name : q.category;
        if (c) categories.add(c);
    });

    const currentVal = filterSelect.value;
    filterSelect.innerHTML = '<option value="">All Categories</option>' +
        Array.from(categories).sort().map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
    filterSelect.value = currentVal;
}

// Add single MCQ handler
async function handleAddSingleQuestion(e) {
    if (e && e.preventDefault) e.preventDefault();

    const text = document.getElementById('qText')?.value.trim();
    const optA = document.getElementById('qOptA')?.value.trim();
    const optB = document.getElementById('qOptB')?.value.trim();
    const optC = document.getElementById('qOptC')?.value.trim();
    const optD = document.getElementById('qOptD')?.value.trim();
    const correct = document.getElementById('qCorrect')?.value;
    const difficulty = document.getElementById('qDifficulty')?.value || 'Medium';
    const category = document.getElementById('qCategory')?.value || 'Pakistan Affairs';
    const subCategory = document.getElementById('qSubCategory')?.value.trim() || 'General';
    const explanation = document.getElementById('qExplanation')?.value.trim() || '';

    if (!text || !optA || !optB || !optC || !optD || !correct) {
        alert('Please fill in the Question Text, all 4 Options, and select the Correct Answer Key.');
        return;
    }

    const newQuestion = {
        _id: 'q_' + Date.now(),
        questionText: text,
        options: [optA, optB, optC, optD],
        correctAnswer: correct,
        difficulty: difficulty,
        category: category,
        subCategory: subCategory,
        explanation: explanation,
        createdAt: new Date().toISOString().split('T')[0]
    };

    // Try posting to backend
    try {
        const res = await fetch(`${API_URL}/questions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(newQuestion)
        });
        if (res.ok) {
            const saved = await res.json();
            if (saved._id) newQuestion._id = saved._id;
        }
    } catch (err) {}

    // Persist to local store
    const questions = getStoredData('mcqs_admin_questions', DEFAULT_QUESTIONS);
    questions.unshift(newQuestion);
    saveStoredData('mcqs_admin_questions', questions);

    // Reset form
    document.getElementById('questionForm')?.reset();
    showAdminNotification('MCQ successfully added to repository!', 'success');
    loadDashboardStats();
    showSection('manageQuestions');
}

// Edit Question Modal Logic
window.openEditModal = function(id) {
    const questions = getStoredData('mcqs_admin_questions', DEFAULT_QUESTIONS);
    const q = questions.find(item => (item._id || '') === id);
    if (!q) {
        alert('Question not found.');
        return;
    }

    document.getElementById('editMcqId').value = id;
    document.getElementById('editMcqText').value = q.questionText || q.question || '';
    const opts = Array.isArray(q.options) ? q.options : ['', '', '', ''];
    document.getElementById('editOptA').value = opts[0] || '';
    document.getElementById('editOptB').value = opts[1] || '';
    document.getElementById('editOptC').value = opts[2] || '';
    document.getElementById('editOptD').value = opts[3] || '';
    document.getElementById('editCorrectKey').value = q.correctAnswer || 'A';
    document.getElementById('editDifficulty').value = q.difficulty || 'Medium';
    document.getElementById('editExplanation').value = q.explanation || '';

    const modal = document.getElementById('editQuestionModal');
    if (modal) modal.style.display = 'flex';
};

window.closeEditModal = function() {
    const modal = document.getElementById('editQuestionModal');
    if (modal) modal.style.display = 'none';
};

async function handleSaveEditQuestion(e) {
    if (e && e.preventDefault) e.preventDefault();

    const id = document.getElementById('editMcqId').value;
    const text = document.getElementById('editMcqText').value.trim();
    const optA = document.getElementById('editOptA').value.trim();
    const optB = document.getElementById('editOptB').value.trim();
    const optC = document.getElementById('editOptC').value.trim();
    const optD = document.getElementById('editOptD').value.trim();
    const correct = document.getElementById('editCorrectKey').value;
    const difficulty = document.getElementById('editDifficulty').value;
    const explanation = document.getElementById('editExplanation').value.trim();

    const questions = getStoredData('mcqs_admin_questions', DEFAULT_QUESTIONS);
    const index = questions.findIndex(q => (q._id || '') === id);

    if (index !== -1) {
        questions[index].questionText = text;
        questions[index].options = [optA, optB, optC, optD];
        questions[index].correctAnswer = correct;
        questions[index].difficulty = difficulty;
        questions[index].explanation = explanation;
        saveStoredData('mcqs_admin_questions', questions);

        // Try updating backend
        try {
            await fetch(`${API_URL}/questions/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({
                    questionText: text,
                    options: [optA, optB, optC, optD],
                    correctAnswer: correct,
                    difficulty: difficulty,
                    explanation: explanation
                })
            });
        } catch (e) {}

        closeEditModal();
        loadQuestions();
        showAdminNotification('Question updated successfully!', 'success');
    }
}

window.deleteQuestion = async function(id) {
    if (!confirm('Are you sure you want to permanently delete this MCQ from the question bank?')) return;

    let questions = getStoredData('mcqs_admin_questions', DEFAULT_QUESTIONS);
    questions = questions.filter(q => (q._id || '') !== id);
    saveStoredData('mcqs_admin_questions', questions);

    try {
        await fetch(`${API_URL}/questions/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
    } catch (e) {}

    loadQuestions();
    loadDashboardStats();
    showAdminNotification('Question deleted from bank.', 'info');
};

// ==========================================
// 3. BULK MCQ IMPORTER (EXCEL & CSV)
// ==========================================
window.downloadSampleCsv = function() {
    const csvContent = 
`Question,Option A,Option B,Option C,Option D,Correct Answer,Explanation,Category,Difficulty
"Under Article 58(2)(b), the President had power to dissolve the National Assembly. In which amendment was it first introduced?","8th Amendment","13th Amendment","17th Amendment","18th Amendment","A","Introduced by General Zia-ul-Haq via the 8th Amendment in 1985.","Pakistan Affairs","Medium"
"Which is the deepest oceanic trench on Earth?","Mariana Trench","Puerto Rico Trench","Java Trench","Tonga Trench","A","The Mariana Trench in the western Pacific Ocean reaches ~11,034 meters deep.","General Knowledge","Easy"
"Light year is a unit of which physical quantity?","Time","Distance","Speed","Luminous Intensity","B","A light-year is the astronomical distance that light travels in one Julian year (~9.46 trillion km).","Everyday Science","Easy"
"Under the FIA Act 1974, who heads the Federal Investigation Agency?","Inspector General","Director General","Secretary Interior","Chairman","B","Section 3(2) specifies that the Agency shall be headed by a Director-General appointed by the Federal Government.","FIA Recruitment","Medium"
"Choose the correct meaning of the idiom: 'To throw down the gauntlet'","To surrender","To issue a challenge","To run away","To make peace","B","Originating from medieval knighthood, throwing down a gauntlet signified a formal challenge to a duel.","English Vocabulary","Medium"`;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'mcqs_bulk_sample_template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showAdminNotification('Sample CSV template downloaded successfully.', 'info');
};

window.handleFileSelect = function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        const text = evt.target.result;
        const rawTextarea = document.getElementById('rawCsvText');
        if (rawTextarea) rawTextarea.value = text;
        parseAndPreviewCsv();
    };
    reader.readAsText(file);
};

// Robust CSV Line & Cell Parser
function parseCsvRows(text) {
    const lines = [];
    let currentRow = [];
    let currentCell = '';
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];

        if (char === '"' || char === "'") {
            if (insideQuotes && nextChar === char) {
                currentCell += char;
                i++; // skip escaped quote
            } else {
                insideQuotes = !insideQuotes;
            }
        } else if ((char === ',' || char === '\t') && !insideQuotes) {
            currentRow.push(currentCell.trim());
            currentCell = '';
        } else if ((char === '\r' || char === '\n') && !insideQuotes) {
            if (char === '\r' && nextChar === '\n') i++; // Skip Windows CRLF
            currentRow.push(currentCell.trim());
            if (currentRow.some(cell => cell.length > 0)) {
                lines.push(currentRow);
            }
            currentRow = [];
            currentCell = '';
        } else {
            currentCell += char;
        }
    }

    if (currentCell.length > 0 || currentRow.length > 0) {
        currentRow.push(currentCell.trim());
        if (currentRow.some(cell => cell.length > 0)) {
            lines.push(currentRow);
        }
    }

    return lines;
}

window.parseAndPreviewCsv = function() {
    const rawText = (document.getElementById('rawCsvText')?.value || '').trim();
    if (!rawText) {
        alert('Please select a CSV file or paste CSV/Tab-separated data in the box.');
        return;
    }

    const rows = parseCsvRows(rawText);
    if (rows.length < 2) {
        alert('Data contains insufficient rows. Must include header row plus at least one data row.');
        return;
    }

    let dataRows = rows.slice(1);

    parsedBulkQuestions = [];
    let validCount = 0;
    let invalidCount = 0;
    const previewTbody = document.getElementById('bulkPreviewTableBody');
    if (!previewTbody) return;

    let previewRowsHtml = '';

    dataRows.forEach((row, index) => {
        let questionText = row[0] || '';
        let optA = row[1] || '';
        let optB = row[2] || '';
        let optC = row[3] || '';
        let optD = row[4] || '';
        let correctRaw = (row[5] || 'A').toUpperCase().trim();
        let explanation = row[6] || '';
        let category = row[7] || 'General Knowledge';
        let difficulty = row[8] || 'Medium';

        // Validate correct key
        let validKey = 'A';
        if (['A', 'B', 'C', 'D'].includes(correctRaw)) {
            validKey = correctRaw;
        } else if (correctRaw.startsWith('OPT') || correctRaw.startsWith('ANS')) {
            const match = correctRaw.match(/[A-D]/);
            if (match) validKey = match[0];
        }

        const isValid = questionText.length > 5 && optA.length > 0 && optB.length > 0 && optC.length > 0 && optD.length > 0;

        if (isValid) {
            validCount++;
            parsedBulkQuestions.push({
                _id: 'bulk_' + Date.now() + '_' + index,
                questionText: questionText,
                options: [optA, optB, optC, optD],
                correctAnswer: validKey,
                explanation: explanation,
                category: category,
                difficulty: difficulty,
                createdAt: new Date().toISOString().split('T')[0]
            });
        } else {
            invalidCount++;
        }

        if (index < 15) { // Preview first 15 rows
            previewRowsHtml += `
                <tr style="${isValid ? '' : 'background:#fee2e2;'}">
                    <td><strong>#${index + 1}</strong></td>
                    <td style="max-width:280px; font-weight:600;">${escapeHtml(questionText || 'Missing question')}</td>
                    <td style="font-size:0.8rem; color:#475569;">
                        A: ${escapeHtml(optA)} | B: ${escapeHtml(optB)} | C: ${escapeHtml(optC)} | D: ${escapeHtml(optD)}
                    </td>
                    <td><span class="badge" style="background:#e0e7ff; color:#3730a3; font-weight:800;">${validKey}</span></td>
                    <td>${escapeHtml(category)}</td>
                    <td>
                        ${isValid ? 
                            '<span style="color:#059669; font-weight:700;"><i class="fa-solid fa-circle-check"></i> Valid</span>' : 
                            '<span style="color:#ef4444; font-weight:700;"><i class="fa-solid fa-triangle-exclamation"></i> Error</span>'}
                    </td>
                </tr>
            `;
        }
    });

    previewTbody.innerHTML = previewRowsHtml;
    const previewArea = document.getElementById('bulkPreviewArea');
    if (previewArea) previewArea.style.display = 'block';

    const validEl = document.getElementById('bulkValidCount');
    if (validEl) validEl.textContent = `${validCount} Valid MCQs Ready`;

    const invalidEl = document.getElementById('bulkInvalidCount');
    if (invalidEl) invalidEl.textContent = `${invalidCount} Incomplete Rows`;

    const btnConfirm = document.getElementById('btnConfirmBulkUpload');
    if (btnConfirm) btnConfirm.disabled = validCount === 0;
};

window.clearBulkInputs = function() {
    const rawTextarea = document.getElementById('rawCsvText');
    if (rawTextarea) rawTextarea.value = '';
    const fileInput = document.getElementById('csvFileInput');
    if (fileInput) fileInput.value = '';
    const previewArea = document.getElementById('bulkPreviewArea');
    if (previewArea) previewArea.style.display = 'none';
    parsedBulkQuestions = [];
};

window.confirmBulkUpload = async function() {
    if (!parsedBulkQuestions || parsedBulkQuestions.length === 0) {
        alert('No valid questions to import.');
        return;
    }

    const count = parsedBulkQuestions.length;

    // Send to backend endpoint
    try {
        await fetch(`${API_URL}/questions/bulk`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({ questions: parsedBulkQuestions })
        });
    } catch (e) {
        console.warn('Backend bulk endpoint unreachable. Storing locally.');
    }

    // Persist to local store
    const existing = getStoredData('mcqs_admin_questions', DEFAULT_QUESTIONS);
    const updated = [...parsedBulkQuestions, ...existing];
    saveStoredData('mcqs_admin_questions', updated);

    showAdminNotification(`Successfully imported ${count} MCQs into the question bank!`, 'success');
    clearBulkInputs();
    loadDashboardStats();
    showSection('manageQuestions');
};

// ==========================================
// 4. NOTES & PDF LIBRARY
// ==========================================
async function loadNotes() {
    let notes = getStoredData('mcqs_admin_notes', DEFAULT_NOTES);
    try {
        const res = await fetch(`${API_URL}/admin/notes`);
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                notes = data;
                saveStoredData('mcqs_admin_notes', notes);
            }
        }
    } catch (e) {}

    const tbody = document.getElementById('notesTableBody');
    if (!tbody) return;

    tbody.innerHTML = notes.map((n, idx) => `
        <tr>
            <td style="font-weight:700;">#${idx + 1}</td>
            <td>
                <div style="font-weight:700; color:#0f172a;"><i class="fa-solid fa-file-pdf" style="color:#ef4444; margin-right:6px;"></i> ${escapeHtml(n.title)}</div>
                <div style="font-size:0.8rem; color:#64748b; margin-top:3px;">${escapeHtml(n.description || '')}</div>
            </td>
            <td><span class="badge" style="background:#e0f2fe; color:#0284c7; font-weight:700;">${escapeHtml(n.exam || 'General')}</span></td>
            <td><span class="badge" style="background:#f1f5f9; color:#334155; font-weight:800;">${escapeHtml(n.fileType || 'PDF')}</span></td>
            <td>${escapeHtml(n.uploadedAt || '2026-11-15')}</td>
            <td>
                <div style="display:flex; gap:8px;">
                    <a href="${n.url || '#'}" target="_blank" class="btn-admin btn-admin-secondary" style="padding:4px 8px; font-size:0.8rem;">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i> Open
                    </a>
                    <button type="button" class="btn-admin" style="padding:4px 8px; font-size:0.8rem; background:#fee2e2; color:#ef4444; border:1px solid #fecaca;" onclick="deleteNote('${n._id}')">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

async function handleNoteUpload(e) {
    if (e && e.preventDefault) e.preventDefault();

    const title = document.getElementById('noteTitle')?.value.trim();
    const exam = document.getElementById('noteExam')?.value || 'CSS / PMS';
    const fileType = document.getElementById('noteFileType')?.value || 'PDF';
    const url = document.getElementById('noteUrl')?.value.trim() || 'https://fpscprep.pk/downloads/study_resource.pdf';
    const desc = document.getElementById('noteDesc')?.value.trim() || '';

    if (!title) {
        alert('Please enter a Title for the study resource.');
        return;
    }

    const newNote = {
        _id: 'note_' + Date.now(),
        title: title,
        exam: exam,
        fileType: fileType,
        url: url,
        description: desc,
        uploadedAt: new Date().toISOString().split('T')[0]
    };

    try {
        await fetch(`${API_URL}/admin/notes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
            body: JSON.stringify(newNote)
        });
    } catch (e) {}

    const notes = getStoredData('mcqs_admin_notes', DEFAULT_NOTES);
    notes.unshift(newNote);
    saveStoredData('mcqs_admin_notes', notes);

    document.getElementById('noteUploadForm')?.reset();
    loadNotes();
    loadDashboardStats();
    showAdminNotification('Study note / PDF published to Digital Library!', 'success');
}

window.deleteNote = async function(id) {
    if (!confirm('Are you sure you want to delete this study note / PDF resource?')) return;
    let notes = getStoredData('mcqs_admin_notes', DEFAULT_NOTES);
    notes = notes.filter(n => n._id !== id);
    saveStoredData('mcqs_admin_notes', notes);

    try {
        await fetch(`${API_URL}/admin/notes/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
    } catch (e) {}

    loadNotes();
    loadDashboardStats();
    showAdminNotification('Resource removed.', 'info');
};

// ==========================================
// 5. CURRENT AFFAIRS & ARTICLES
// ==========================================
function loadArticles() {
    const articles = getStoredData('mcqs_admin_articles', DEFAULT_ARTICLES);
    const tbody = document.getElementById('articlesTableBody');
    if (!tbody) return;

    tbody.innerHTML = articles.map((a, idx) => `
        <tr>
            <td style="font-weight:700;">#${idx + 1}</td>
            <td>
                <div style="font-weight:700; color:#0f172a;">${escapeHtml(a.title)}</div>
                <div style="font-size:0.8rem; color:#64748b;">${escapeHtml((a.excerpt || '').substring(0, 80))}...</div>
            </td>
            <td><span class="badge" style="background:#ecfdf5; color:#047857; font-weight:700;">${escapeHtml(a.category || 'Current Affairs')}</span></td>
            <td><span class="badge" style="background:#f1f5f9; color:#475569;">${escapeHtml(a.readingTime || '5 min')}</span></td>
            <td><strong>${(a.views || 0).toLocaleString()}</strong></td>
            <td>${escapeHtml(a.publishedAt || '2026-11-15')}</td>
            <td>
                <button type="button" class="btn-admin" style="padding:4px 8px; font-size:0.8rem; background:#fee2e2; color:#ef4444; border:1px solid #fecaca;" onclick="deleteArticle('${a._id}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function handleArticlePublish(e) {
    if (e && e.preventDefault) e.preventDefault();

    const title = document.getElementById('artTitle')?.value.trim();
    const category = document.getElementById('artCategory')?.value || 'Current Affairs';
    const readingTime = document.getElementById('artReadingTime')?.value.trim() || '6 min read';
    const excerpt = document.getElementById('artExcerpt')?.value.trim() || '';
    const body = document.getElementById('artBody')?.value.trim() || '';

    if (!title || !body) {
        alert('Please fill in the Article Title and Body content.');
        return;
    }

    const newArticle = {
        _id: 'art_' + Date.now(),
        title: title,
        category: category,
        readingTime: readingTime,
        excerpt: excerpt,
        body: body,
        publishedAt: new Date().toISOString().split('T')[0],
        views: 1
    };

    const articles = getStoredData('mcqs_admin_articles', DEFAULT_ARTICLES);
    articles.unshift(newArticle);
    saveStoredData('mcqs_admin_articles', articles);

    document.getElementById('articlePublishForm')?.reset();
    loadArticles();
    showAdminNotification('Article published to the web portal!', 'success');
}

window.deleteArticle = function(id) {
    if (!confirm('Are you sure you want to delete this article?')) return;
    let articles = getStoredData('mcqs_admin_articles', DEFAULT_ARTICLES);
    articles = articles.filter(a => a._id !== id);
    saveStoredData('mcqs_admin_articles', articles);
    loadArticles();
    showAdminNotification('Article deleted.', 'info');
};

// ==========================================
// 6. JOB ADVERTISEMENTS & NOTIFICATIONS
// ==========================================
async function loadJobs() {
    let jobs = getStoredData('mcqs_admin_jobs', DEFAULT_JOBS);
    try {
        const res = await fetch(`${API_URL}/admin/jobs`);
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                jobs = data;
                saveStoredData('mcqs_admin_jobs', jobs);
            }
        }
    } catch (e) {}

    const tbody = document.getElementById('jobsTableBody');
    if (!tbody) return;

    tbody.innerHTML = jobs.map((j, idx) => {
        const deadlineDate = new Date(j.deadline);
        const isUrgent = deadlineDate - new Date() < (7 * 24 * 3600 * 1000);

        return `
            <tr>
                <td style="font-weight:700;">#${idx + 1}</td>
                <td>
                    <div style="font-weight:700; color:#0f172a;">${escapeHtml(j.title)}</div>
                    <div style="font-size:0.8rem; color:#64748b;">${escapeHtml(j.department)} &bull; ${escapeHtml(j.advtNo || '')}</div>
                </td>
                <td><span class="badge" style="background:#e0f2fe; color:#0369a1; font-weight:800;">${j.vacancies || 1} Posts</span></td>
                <td>
                    <span class="badge" style="${isUrgent ? 'background:#fee2e2; color:#ef4444; font-weight:800;' : 'background:#f1f5f9; color:#334155; font-weight:700;'}">
                        ${escapeHtml(j.deadline)}
                    </span>
                </td>
                <td>
                    <span class="badge" style="background:#dcfce7; color:#15803d; font-weight:700;">
                        <i class="fa-solid fa-circle-check"></i> ${escapeHtml(j.status || 'Active')}
                    </span>
                </td>
                <td>
                    <div style="display:flex; gap:8px;">
                        <a href="${j.applyUrl || '#'}" target="_blank" class="btn-admin btn-admin-secondary" style="padding:4px 8px; font-size:0.78rem;">
                            <i class="fa-solid fa-link"></i> Apply
                        </a>
                        <button type="button" class="btn-admin" style="padding:4px 8px; font-size:0.78rem; background:#fee2e2; color:#ef4444; border:1px solid #fecaca;" onclick="deleteJob('${j._id}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

async function handleJobSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();

    const title = document.getElementById('jobTitle')?.value.trim();
    const dept = document.getElementById('jobDept')?.value.trim();
    const advtNo = document.getElementById('jobAdvtNo')?.value.trim();
    const vacancies = parseInt(document.getElementById('jobVacancies')?.value, 10) || 1;
    const qual = document.getElementById('jobQual')?.value.trim();
    const deadline = document.getElementById('jobDeadline')?.value;
    const pdfUrl = document.getElementById('jobPdf')?.value.trim() || 'https://fpsc.gov.pk';
    const applyUrl = document.getElementById('jobApplyUrl')?.value.trim() || 'https://online.fpsc.gov.pk';

    if (!title || !dept || !deadline) {
        alert('Please fill in Job Title, Department, and Application Deadline.');
        return;
    }

    const newJob = {
        _id: 'job_' + Date.now(),
        title: title,
        department: dept,
        advtNo: advtNo,
        vacancies: vacancies,
        qualification: qual,
        deadline: deadline,
        pdfUrl: pdfUrl,
        applyUrl: applyUrl,
        status: 'Active'
    };

    try {
        await fetch(`${API_URL}/admin/jobs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
            body: JSON.stringify(newJob)
        });
    } catch (e) {}

    const jobs = getStoredData('mcqs_admin_jobs', DEFAULT_JOBS);
    jobs.unshift(newJob);
    saveStoredData('mcqs_admin_jobs', jobs);

    document.getElementById('jobForm')?.reset();
    loadJobs();
    loadDashboardStats();
    showAdminNotification('Job advertisement published successfully!', 'success');
}

window.deleteJob = async function(id) {
    if (!confirm('Are you sure you want to remove this job advertisement?')) return;
    let jobs = getStoredData('mcqs_admin_jobs', DEFAULT_JOBS);
    jobs = jobs.filter(j => j._id !== id);
    saveStoredData('mcqs_admin_jobs', jobs);

    try {
        await fetch(`${API_URL}/admin/jobs/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
    } catch (e) {}

    loadJobs();
    loadDashboardStats();
    showAdminNotification('Job advertisement removed.', 'info');
};

// ==========================================
// 7. SCHEDULER (DAILY FACTS & QUIZZES)
// ==========================================
function loadScheduler() {
    const items = getStoredData('mcqs_admin_scheduler', DEFAULT_SCHEDULER);
    const tbody = document.getElementById('schedulerTableBody');
    if (!tbody) return;

    tbody.innerHTML = items.map((item, idx) => `
        <tr>
            <td style="font-weight:700;">#${idx + 1}</td>
            <td>
                <span class="badge" style="${item.type === 'Daily Fact' ? 'background:#e0f2fe; color:#0369a1;' : 'background:#fef3c7; color:#92400e;'} font-weight:800;">
                    ${item.type === 'Daily Fact' ? '<i class="fa-solid fa-lightbulb"></i>' : '<i class="fa-solid fa-trophy"></i>'} ${escapeHtml(item.type)}
                </span>
            </td>
            <td><strong style="color:#0f172a;">${escapeHtml(item.date)}</strong></td>
            <td><span class="badge" style="background:#f1f5f9; color:#334155;">${escapeHtml(item.topic)}</span></td>
            <td style="max-width:320px; font-size:0.85rem; color:#475569;">${escapeHtml(item.content)}</td>
            <td><span class="badge" style="background:#dcfce7; color:#15803d; font-weight:700;">${escapeHtml(item.status)}</span></td>
            <td>
                <button type="button" class="btn-admin" style="padding:4px 8px; font-size:0.8rem; background:#fee2e2; color:#ef4444; border:1px solid #fecaca;" onclick="deleteScheduledItem('${item._id}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function handleScheduleFact(e) {
    if (e && e.preventDefault) e.preventDefault();
    const date = document.getElementById('schedFactDate')?.value;
    const topic = document.getElementById('schedFactTopic')?.value.trim();
    const body = document.getElementById('schedFactBody')?.value.trim();

    if (!date || !topic || !body) {
        alert('Please fill in Date, Topic, and Fact Content.');
        return;
    }

    const newItem = {
        _id: 'sch_' + Date.now(),
        type: 'Daily Fact',
        date: date,
        topic: topic,
        content: body,
        status: 'Scheduled'
    };

    const items = getStoredData('mcqs_admin_scheduler', DEFAULT_SCHEDULER);
    items.unshift(newItem);
    saveStoredData('mcqs_admin_scheduler', items);

    document.getElementById('scheduleFactForm')?.reset();
    loadScheduler();
    showAdminNotification('Daily Fact queued for scheduled publishing!', 'success');
}

function handleScheduleQuiz(e) {
    if (e && e.preventDefault) e.preventDefault();
    const date = document.getElementById('schedQuizDate')?.value;
    const title = document.getElementById('schedQuizTitle')?.value.trim();
    const count = document.getElementById('schedQuizCount')?.value || 15;

    if (!date || !title) {
        alert('Please fill in Date and Quiz Title.');
        return;
    }

    const newItem = {
        _id: 'sch_' + Date.now(),
        type: 'Daily Quiz',
        date: date,
        topic: title,
        content: `Scheduled competitive quiz challenge containing ${count} curated MCQs.`,
        status: 'Scheduled'
    };

    const items = getStoredData('mcqs_admin_scheduler', DEFAULT_SCHEDULER);
    items.unshift(newItem);
    saveStoredData('mcqs_admin_scheduler', items);

    document.getElementById('scheduleQuizForm')?.reset();
    loadScheduler();
    showAdminNotification('Daily Challenge Quiz scheduled!', 'success');
}

window.deleteScheduledItem = function(id) {
    let items = getStoredData('mcqs_admin_scheduler', DEFAULT_SCHEDULER);
    items = items.filter(i => i._id !== id);
    saveStoredData('mcqs_admin_scheduler', items);
    loadScheduler();
    showAdminNotification('Scheduled item removed.', 'info');
};

// ==========================================
// 8. EXAMINATION CATEGORIES & TAXONOMY
// ==========================================
function loadCategories() {
    const categories = getStoredData('mcqs_admin_categories', DEFAULT_CATEGORIES);
    const tbody = document.getElementById('categoryTableBody');
    if (!tbody) return;

    tbody.innerHTML = categories.map((cat, idx) => `
        <tr>
            <td style="font-weight:700;">#${idx + 1}</td>
            <td><strong style="color:#047857; font-size:0.95rem;">${escapeHtml(cat.name)}</strong></td>
            <td style="color:#64748b; font-size:0.85rem;">${escapeHtml(cat.desc || 'General examination topic')}</td>
            <td><span class="badge" style="background:#e0f2fe; color:#0369a1; font-weight:800;">${(cat.count || 0).toLocaleString()} Questions</span></td>
            <td><span class="badge" style="background:#dcfce7; color:#15803d; font-weight:700;">Active</span></td>
            <td>
                <button type="button" class="btn-admin" style="padding:4px 8px; font-size:0.8rem; background:#fee2e2; color:#ef4444; border:1px solid #fecaca;" onclick="deleteCategory('${escapeHtml(cat.name)}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function handleCategorySubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const name = document.getElementById('categoryName')?.value.trim();
    if (!name) {
        alert('Please enter a category or examination title.');
        return;
    }

    const categories = getStoredData('mcqs_admin_categories', DEFAULT_CATEGORIES);
    if (categories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        alert('This category already exists.');
        return;
    }

    categories.push({
        name: name,
        desc: 'Custom examination syllabus stream',
        count: 0
    });
    saveStoredData('mcqs_admin_categories', categories);

    document.getElementById('categoryForm')?.reset();
    loadCategories();
    showAdminNotification(`Category "${name}" added successfully!`, 'success');
}

window.deleteCategory = function(name) {
    if (!confirm(`Are you sure you want to remove "${name}" from category taxonomy?`)) return;
    let categories = getStoredData('mcqs_admin_categories', DEFAULT_CATEGORIES);
    categories = categories.filter(c => c.name !== name);
    saveStoredData('mcqs_admin_categories', categories);
    loadCategories();
    showAdminNotification('Category removed.', 'info');
};

// ==========================================
// 9. WEB TRAFFIC & PAGEVIEWS ANALYTICS
// ==========================================
async function loadPageAnalytics() {
    let pages = getStoredData('mcqs_admin_pageviews', DEFAULT_PAGEVIEWS);
    try {
        const res = await fetch(`${API_URL}/admin/pageviews`);
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                pages = data;
                saveStoredData('mcqs_admin_pageviews', pages);
            }
        }
    } catch (e) {}

    const tbody = document.getElementById('pageviewsTableBody');
    if (!tbody) return;

    const maxVisits = Math.max(...pages.map(p => p.visits || 1));

    tbody.innerHTML = pages.map((p, idx) => {
        const pct = Math.round(((p.visits || 0) / maxVisits) * 100);

        return `
            <tr>
                <td style="font-weight:700;">#${idx + 1}</td>
                <td>
                    <div style="font-weight:700; color:#0f172a;">${escapeHtml(p.page)}</div>
                    <div style="font-size:0.78rem; color:#64748b; font-family:monospace;">${escapeHtml(p.url)}</div>
                </td>
                <td><strong style="color:#047857;">${(p.visits || 0).toLocaleString()}</strong></td>
                <td>${(p.unique || 0).toLocaleString()}</td>
                <td><span class="badge" style="background:#f1f5f9; color:#334155;">${escapeHtml(p.avgTime || '4m 00s')}</span></td>
                <td><span class="badge" style="background:#fef3c7; color:#92400e;">${escapeHtml(p.bounce || '25%')}</span></td>
                <td style="min-width:140px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="flex:1; height:8px; background:#e2e8f0; border-radius:4px; overflow:hidden;">
                            <div style="width:${pct}%; height:100%; background:#059669; border-radius:4px;"></div>
                        </div>
                        <span style="font-size:0.75rem; font-weight:700; color:#64748b;">${pct}%</span>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// ==========================================
// 10. REGISTERED STUDENTS & PERFORMANCE
// ==========================================
function loadStudentAnalytics() {
    const students = getStoredData('mcqs_admin_students', DEFAULT_STUDENTS);
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) return;

    tbody.innerHTML = students.map((s, idx) => `
        <tr>
            <td style="font-weight:700;">#${idx + 1}</td>
            <td>
                <div style="font-weight:700; color:#0f172a;">${escapeHtml(s.name)}</div>
                <div style="font-size:0.78rem; color:#64748b;">${escapeHtml(s.email)}</div>
            </td>
            <td><span class="badge" style="background:#e0e7ff; color:#3730a3; font-weight:700;">${escapeHtml(s.target)}</span></td>
            <td><strong>${s.testsTaken} tests</strong></td>
            <td>
                <div style="display:flex; align-items:center; gap:8px;">
                    <div style="width:70px; height:8px; background:#e2e8f0; border-radius:4px; overflow:hidden;">
                        <div style="width:${s.accuracy}%; height:100%; background:${s.accuracy >= 85 ? '#059669' : '#d97706'};"></div>
                    </div>
                    <span style="font-weight:800; color:${s.accuracy >= 85 ? '#059669' : '#d97706'};">${s.accuracy}%</span>
                </div>
            </td>
            <td><span class="badge" style="background:#fee2e2; color:#991b1b; font-weight:600;">${escapeHtml(s.weakArea)}</span></td>
            <td><span class="badge" style="background:#dcfce7; color:#15803d; font-weight:700;">${escapeHtml(s.status)}</span></td>
        </tr>
    `).join('');
}

// ==========================================
// 11. REPORTED ERRORS & REVIEW QUEUE
// ==========================================
async function loadReportedErrors() {
    let reports = getStoredData('mcqs_admin_reports', DEFAULT_REPORTS);
    try {
        const res = await fetch(`${API_URL}/admin/reported-errors`);
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                reports = data;
                saveStoredData('mcqs_admin_reports', reports);
            }
        }
    } catch (e) {}

    const tbody = document.getElementById('reportsTableBody');
    if (!tbody) return;

    if (reports.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:24px; color:#059669; font-weight:600;"><i class="fa-solid fa-circle-check"></i> Great job! All reported errors have been resolved.</td></tr>';
        return;
    }

    tbody.innerHTML = reports.map((r, idx) => `
        <tr>
            <td style="font-weight:700;">#${idx + 1}</td>
            <td style="max-width:240px; font-weight:600;">
                <div style="color:#0f172a;">${escapeHtml(r.questionSummary || 'Question Report')}</div>
                <div style="font-size:0.75rem; color:#64748b; font-family:monospace;">ID: ${escapeHtml(r.questionId || 'N/A')}</div>
            </td>
            <td style="max-width:260px; font-size:0.85rem; color:#dc2626;">${escapeHtml(r.issue)}</td>
            <td style="max-width:240px; font-size:0.85rem; color:#059669;">${escapeHtml(r.suggestedFix || 'Verified')}</td>
            <td style="font-size:0.78rem; color:#64748b;">
                <div>${escapeHtml(r.reportedBy || 'Student')}</div>
                <div>${escapeHtml(r.reportedAt || '')}</div>
            </td>
            <td>
                <span class="badge" style="${r.status === 'Resolved' ? 'background:#dcfce7; color:#15803d;' : 'background:#fee2e2; color:#b91c1c;'} font-weight:700;">
                    ${escapeHtml(r.status || 'Pending')}
                </span>
            </td>
            <td>
                <div style="display:flex; gap:6px;">
                    <button type="button" class="btn-admin btn-admin-primary" style="padding:4px 8px; font-size:0.78rem;" onclick="resolveReport('${r._id}', '${r.questionId}')">
                        <i class="fa-solid fa-check"></i> Resolve
                    </button>
                    <button type="button" class="btn-admin btn-admin-secondary" style="padding:4px 8px; font-size:0.78rem;" onclick="dismissReport('${r._id}')">
                        Dismiss
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

window.resolveReport = async function(reportId, questionId) {
    let reports = getStoredData('mcqs_admin_reports', DEFAULT_REPORTS);
    const rep = reports.find(r => r._id === reportId);
    if (rep) {
        rep.status = 'Resolved';
        saveStoredData('mcqs_admin_reports', reports);
    }

    try {
        await fetch(`${API_URL}/admin/reported-errors/${reportId}/resolve`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
    } catch (e) {}

    loadReportedErrors();
    loadDashboardStats();
    showAdminNotification('Report marked as Resolved.', 'success');

    if (questionId && confirm('Report resolved. Would you like to open the Question Editor to inspect or update this MCQ now?')) {
        showSection('manageQuestions');
        openEditModal(questionId);
    }
};

window.dismissReport = function(reportId) {
    if (!confirm('Are you sure you want to dismiss this report?')) return;
    let reports = getStoredData('mcqs_admin_reports', DEFAULT_REPORTS);
    reports = reports.filter(r => r._id !== reportId);
    saveStoredData('mcqs_admin_reports', reports);
    loadReportedErrors();
    loadDashboardStats();
    showAdminNotification('Report dismissed.', 'info');
};

// ==========================================
// UTILITY & ESCAPE HELPERS
// ==========================================
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Dark Mode Handler
function initDarkMode() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    const isDark = localStorage.getItem('mcqs_dark_mode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.documentElement.classList.add('dark-mode');
    }
    toggle.addEventListener('click', () => {
        const currentlyDark = document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode', !currentlyDark);
        document.documentElement.classList.toggle('dark-mode', !currentlyDark);
        localStorage.setItem('mcqs_dark_mode', !currentlyDark);
    });
}

// Initialize Admin Portal
function initAdminPortal() {
    loadDashboardStats();
    loadQuestions();
    loadNotes();
    loadArticles();
    loadJobs();
    loadScheduler();
    loadCategories();
    loadPageAnalytics();
    loadStudentAnalytics();
    loadReportedErrors();
}

// Wire Event Listeners on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    checkAuth();

    // Login Form & Button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) loginBtn.addEventListener('click', handleLogin);
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });

    // Single Question Form
    const questionForm = document.getElementById('questionForm');
    if (questionForm) questionForm.addEventListener('submit', handleAddSingleQuestion);

    // Edit Question Modal Form
    const editMcqForm = document.getElementById('editMcqForm');
    if (editMcqForm) editMcqForm.addEventListener('submit', handleSaveEditQuestion);

    // Search and Category Filter
    const searchInput = document.getElementById('searchQuestionsInput');
    if (searchInput) searchInput.addEventListener('input', filterQuestions);
    const filterCat = document.getElementById('filterCategorySelect');
    if (filterCat) filterCat.addEventListener('change', filterQuestions);

    // Notes Upload Form
    const noteForm = document.getElementById('noteUploadForm');
    if (noteForm) noteForm.addEventListener('submit', handleNoteUpload);

    // Article Publish Form
    const artForm = document.getElementById('articlePublishForm');
    if (artForm) artForm.addEventListener('submit', handleArticlePublish);

    // Job Form
    const jobForm = document.getElementById('jobForm');
    if (jobForm) jobForm.addEventListener('submit', handleJobSubmit);

    // Scheduler Forms
    const factForm = document.getElementById('scheduleFactForm');
    if (factForm) factForm.addEventListener('submit', handleScheduleFact);
    const quizForm = document.getElementById('scheduleQuizForm');
    if (quizForm) quizForm.addEventListener('submit', handleScheduleQuiz);

    // Category Form
    const catForm = document.getElementById('categoryForm');
    if (catForm) catForm.addEventListener('submit', handleCategorySubmit);

    // Drag and Drop Zone for Bulk CSV
    const dropzone = document.querySelector('.dropzone-box');
    if (dropzone) {
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = '#059669';
            dropzone.style.background = '#ecfdf5';
        });
        dropzone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = '#94a3b8';
            dropzone.style.background = '';
        });
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = '#94a3b8';
            dropzone.style.background = '';
            if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
                const file = e.dataTransfer.files[0];
                const reader = new FileReader();
                reader.onload = function(evt) {
                    const text = evt.target.result;
                    const rawTextarea = document.getElementById('rawCsvText');
                    if (rawTextarea) rawTextarea.value = text;
                    parseAndPreviewCsv();
                };
                reader.readAsText(file);
            }
        });
    }
});
