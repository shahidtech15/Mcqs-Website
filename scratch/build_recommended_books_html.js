const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../frontend/recommended-books.html');

const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Recommended Books by Examination for CSS, PMS, FIA Assistant Director, NAB, Assistant Audit Officer (BS-17) and Judicial Services. Authoritative textbooks, statutory bare acts, reading methodologies, and FPSC examiner advice.">
    <title>Recommended Books by Examination — CSS, PMS, FIA, NAB &amp; Judiciary Portal</title>
    <!-- Anti-FOUC: apply dark mode before stylesheets paint -->
    <script>if(localStorage.getItem('mcqs_dark_mode')==='true')document.documentElement.classList.add('dark-mode');</script>
    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .books-container {
            max-width: 1240px;
            margin: 0 auto;
            padding: 30px 20px 60px;
        }

        .books-hero {
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
            color: #ffffff;
            padding: 55px 0 45px;
            text-align: center;
            position: relative;
        }

        .books-hero h1 {
            font-size: 2.3rem;
            font-weight: 800;
            margin-bottom: 12px;
            line-height: 1.25;
        }

        .books-hero p {
            font-size: 1.08rem;
            max-width: 900px;
            margin: 0 auto 24px;
            opacity: 0.94;
            line-height: 1.6;
        }

        .books-hero-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-bottom: 24px;
        }

        .books-hero-chip {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.88rem;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 7px;
        }

        /* Filter Controls */
        .filter-section-card {
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 22px 26px;
            margin: -25px auto 30px;
            box-shadow: var(--card-shadow);
            position: relative;
            z-index: 2;
        }

        .filter-section-title {
            font-size: 0.92rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            color: var(--text-light);
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .exam-pills-row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .exam-pill-btn {
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            padding: 10px 18px;
            border-radius: 25px;
            font-weight: 600;
            font-size: 0.92rem;
            color: var(--text-dark);
            cursor: pointer;
            transition: var(--transition);
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .exam-pill-btn:hover {
            border-color: #4338ca;
            color: #4338ca;
            transform: translateY(-1px);
        }

        .exam-pill-btn.active {
            background: #4338ca;
            border-color: #4338ca;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(67, 56, 202, 0.35);
        }

        /* Search input */
        .book-search-row {
            margin-top: 16px;
            padding-top: 14px;
            border-top: 1px solid var(--border-color);
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .book-search-input {
            flex: 1;
            padding: 10px 16px 10px 38px;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            background: var(--bg-color);
            color: var(--text-dark);
            font-size: 0.94rem;
            outline: none;
            transition: var(--transition);
        }

        .book-search-input:focus {
            border-color: #4338ca;
            box-shadow: 0 0 0 3px rgba(67, 56, 202, 0.15);
        }

        /* Books Grid */
        .books-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            gap: 24px;
            margin-bottom: 50px;
        }

        .book-card {
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 24px;
            box-shadow: var(--card-shadow);
            transition: var(--transition);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .book-card:hover {
            transform: translateY(-3px);
            box-shadow: var(--hover-shadow);
            border-color: #6366f1;
        }

        .book-card-top {
            margin-bottom: 14px;
        }

        .book-badges-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 12px;
        }

        .book-exam-badge {
            background: #e0e7ff;
            color: #3730a3;
            font-size: 0.8rem;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 6px;
        }

        .book-status-badge {
            font-size: 0.78rem;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 6px;
        }

        .status-essential { background: #dcfce7; color: #166534; }
        .status-secondary { background: #fef3c7; color: #92400e; }
        .status-bare-act { background: #fee2e2; color: #991b1b; }

        .book-subject {
            font-size: 0.88rem;
            font-weight: 700;
            color: #4f46e5;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }

        .book-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-dark);
            line-height: 1.4;
            margin-bottom: 8px;
        }

        .book-author {
            font-size: 0.9rem;
            color: var(--text-light);
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .book-topics-box {
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 12px 14px;
            font-size: 0.88rem;
            color: var(--text-dark);
            line-height: 1.5;
            margin-bottom: 14px;
        }

        .book-note-box {
            background: rgba(99, 102, 241, 0.06);
            border-left: 3px solid #4f46e5;
            padding: 12px 14px;
            border-radius: 0 8px 8px 0;
            font-size: 0.86rem;
            color: var(--text-dark);
            line-height: 1.5;
            margin-bottom: 14px;
        }

        .book-strategy-box {
            background: rgba(16, 185, 129, 0.06);
            border-left: 3px solid #10b981;
            padding: 12px 14px;
            border-radius: 0 8px 8px 0;
            font-size: 0.86rem;
            color: var(--text-dark);
            line-height: 1.5;
        }

        /* Reading Methodology Guide */
        .guide-section {
            background: var(--white);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 35px;
            box-shadow: var(--card-shadow);
            margin-top: 40px;
        }

        .guide-section h2 {
            font-size: 1.6rem;
            font-weight: 800;
            color: var(--text-dark);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .guide-steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 20px;
            margin-top: 24px;
        }

        .guide-step-card {
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 10px;
            padding: 20px;
            border-top: 4px solid #4338ca;
        }

        .guide-step-card h4 {
            font-size: 1.05rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 8px;
        }

        .guide-step-card p {
            font-size: 0.88rem;
            color: var(--text-light);
            line-height: 1.55;
            margin: 0;
        }

        @media (max-width: 768px) {
            .books-hero h1 { font-size: 1.75rem; }
            .books-grid { grid-template-columns: 1fr; }
            .guide-section { padding: 22px; }
        }
    </style>
</head>

<body>
    <!-- Navbar -->
    <header class="navbar">
        <div class="container">
            <div class="logo">
                <a href="index.html">
                    <img src="img/logo.png" alt="MCQs Portal Logo" class="site-logo">
                    <span>MCQs<span class="highlight">Portal</span></span>
                </a>
            </div>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="index.html#categories">Categories</a>
                <a href="quiz.html">Take a Quiz</a>
                <a href="digital-library.html">Digital Library</a>
                <a href="recommended-books.html" class="active">Recommended Books</a>
                <a href="fia-sample-papers.html">FIA Papers</a>
                <a href="grammar-rules.html">Grammar Rules</a>
                <a href="written-prep.html">Written Prep</a>
                <a href="exam-guide.html">Exam Guide</a>
                <a href="science-notes.html">Science Notes</a>
                <a href="admin.html" class="admin-link">Admin Panel</a>
            </nav>
            <button id="darkModeToggle" class="dark-mode-toggle" title="Toggle dark mode" aria-label="Toggle dark mode">
                <i class="fa-solid fa-moon"></i>
            </button>
            <div class="mobile-menu">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- Secondary Navbar -->
    <nav class="secondary-navbar" aria-label="Secondary Navigation">
        <div class="container">
            <ul class="secondary-nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="recommended-books.html" class="active" style="font-weight: 700; color: #4338ca;"><i class="fa-solid fa-book"></i> Recommended Books by Exam</a></li>
                <li><a href="digital-library.html"><i class="fa-solid fa-book-bookmark"></i> Digital Library &amp; Reports</a></li>
                <li><a href="fia-sample-papers.html"><i class="fa-solid fa-file-shield"></i> FIA AD 20 Sample Papers</a></li>
                <li><a href="grammar-rules.html"><i class="fa-solid fa-spell-check"></i> Grammar Rules</a></li>
                <li><a href="written-prep.html"><i class="fa-solid fa-pen-nib"></i> Essay &amp; Written Prep</a></li>
                <li><a href="exam-guide.html"><i class="fa-solid fa-book-open-reader"></i> Exam Guide (CSS/PMS)</a></li>
                <li><a href="science-notes.html">Science Capsule</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Header -->
    <section class="books-hero">
        <div class="container">
            <h1>📖 Recommended Books by Examination</h1>
            <p>Curated syllabus-aligned reading roadmap for CSS, PMS, FIA, NAB, Assistant Audit Officer (BS-17) and Judicial Services. Essential primary texts, authoritative commentaries, statutory bare acts, and examiner guidance.</p>

            <div class="books-hero-chips">
                <span class="books-hero-chip"><i class="fa-solid fa-graduation-cap"></i> 22 Authoritative Works</span>
                <span class="books-hero-chip"><i class="fa-solid fa-layer-group"></i> 6 Competitive Exam Streams</span>
                <span class="books-hero-chip"><i class="fa-solid fa-star"></i> Core Essential vs. Secondary Treatises</span>
                <span class="books-hero-chip"><i class="fa-solid fa-triangle-exclamation"></i> Examiner Penalties &amp; Common Pitfalls</span>
                <span class="books-hero-chip"><i class="fa-solid fa-book-open-reader"></i> The 3-Pass Reading Strategy</span>
            </div>
        </div>
    </section>

    <!-- Main Container -->
    <div class="books-container">
        <!-- Filter Card -->
        <div class="filter-section-card">
            <div class="filter-section-title">
                <span><i class="fa-solid fa-filter"></i> Select Examination Stream:</span>
                <span id="activeExamCount" style="color:#4338ca;">Showing All 22 Books</span>
            </div>
            <div class="exam-pills-row" id="examPillsRow">
                <button class="exam-pill-btn active" data-exam="all"><i class="fa-solid fa-globe"></i> All Examinations (22)</button>
                <button class="exam-pill-btn" data-exam="CSS"><i class="fa-solid fa-award"></i> CSS (FPSC) (10)</button>
                <button class="exam-pill-btn" data-exam="PMS"><i class="fa-solid fa-building-columns"></i> PMS (Provincial) (3)</button>
                <button class="exam-pill-btn" data-exam="FIA"><i class="fa-solid fa-shield-halved"></i> FIA Assistant Director (3)</button>
                <button class="exam-pill-btn" data-exam="NAB"><i class="fa-solid fa-scale-unbalanced"></i> NAB Investigation (1)</button>
                <button class="exam-pill-btn" data-exam="Assistant Audit Officer (BS-17)"><i class="fa-solid fa-calculator"></i> Assistant Audit Officer (3)</button>
                <button class="exam-pill-btn" data-exam="Judicial Services"><i class="fa-solid fa-gavel"></i> Judicial Services (2)</button>
            </div>
            <div class="book-search-row">
                <i class="fa-solid fa-magnifying-glass" style="color:var(--text-light); position:absolute; margin-left:14px;"></i>
                <input type="text" id="bookSearchInput" class="book-search-input" placeholder="Search book by title, author, subject, or topic (e.g. Pinker, Constitution, CrPC, Auditing, Realism)...">
            </div>
        </div>

        <!-- Books Grid -->
        <div class="books-grid" id="booksGrid"></div>

        <!-- Reading Strategy Masterclass Section -->
        <section class="guide-section">
            <h2><i class="fa-solid fa-lightbulb" style="color:#f59e0b;"></i> How to Read Books for Competitive Exams Without Information Overload</h2>
            <p style="font-size:0.95rem; color:var(--text-light); line-height:1.6;">Most civil service aspirants fail not because they lack books, but because they suffer from <em>"Book Hoarding Syndrome"</em>—reading hundreds of pages passively without extracting exam-grade points. Follow this 4-step framework used by top scorers:</p>

            <div class="guide-steps-grid">
                <div class="guide-step-card">
                    <h4>1. The 3-Pass Method</h4>
                    <p><strong>Pass 1:</strong> Skim the table of contents, preface, and concluding chapter summaries in 90 minutes. <strong>Pass 2:</strong> Read core analytical chapters highlighting only thesis claims and data points. <strong>Pass 3:</strong> Syntopical review—cross-compare author stances with past-paper questions.</p>
                </div>
                <div class="guide-step-card">
                    <h4>2. The 10% Marginal Gloss</h4>
                    <p>Never highlight more than 10% of a page. In the right-hand margin, write a 3-word shorthand summarizing the paragraph's argumentative purpose (e.g. <em>"Fed-Prov deficit"</em>, <em>"Deterrence flaw"</em>). Your margin gloss becomes your final revision guide.</p>
                </div>
                <div class="guide-step-card">
                    <h4>3. Thesis &amp; Quote Conversion</h4>
                    <p>Maintain an index card register of author quotes and theoretical concepts (e.g. Mearsheimer's <em>"Offensive Realism"</em>, Pinker's <em>"Curse of Knowledge"</em>). Learn to deploy them organically to anchor 20-mark descriptive question arguments.</p>
                </div>
                <div class="guide-step-card">
                    <h4>4. Statutory Bare Acts Rule</h4>
                    <p>For law-based exams (FIA Act, NAO 1999, CrPC, CPC), commentaries are secondary. Master the <strong>exact statutory wording</strong> of sections, definitions, jurisdictional clauses, and schedules before reading case law treatises.</p>
                </div>
            </div>
        </section>
    </div>

    <!-- Universal Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo">
                        <img src="img/logo.png" alt="MCQs Portal Logo" class="site-logo">
                        <span>MCQs<span class="highlight">Portal</span></span>
                    </div>
                    <p>Pakistan's premier digital resource portal for civil service and recruitment examinations: CSS, PMS, FIA, NAB, AAO, Judiciary, and one-paper MCQs.</p>
                </div>
                <div class="footer-col">
                    <h4>Academic Resources</h4>
                    <ul>
                        <li><a href="recommended-books.html">Recommended Books by Exam</a></li>
                        <li><a href="digital-library.html">Digital Library &amp; Reports</a></li>
                        <li><a href="written-prep.html">Essay &amp; Written Preparation</a></li>
                        <li><a href="grammar-rules.html">Grammar &amp; Sentence Rules</a></li>
                        <li><a href="exam-guide.html">Exam Preparation Guides</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Practice Portals</h4>
                    <ul>
                        <li><a href="fia-sample-papers.html">FIA AD 20 Sample Papers</a></li>
                        <li><a href="quiz.html">Interactive Online Mock Quizzes</a></li>
                        <li><a href="science-notes.html">General Science Capsule</a></li>
                        <li><a href="index.html#categories">Subject-Wise MCQs</a></li>
                        <li><a href="about.html">About &amp; Editorial Standards</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 MCQs Portal Pakistan. All rights reserved. Built for competitive exam aspirants.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/data_recommended_books.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const books = window.RECOMMENDED_BOOKS_DATA || [];
            let currentExamFilter = 'all';
            let currentSearchQuery = '';

            function getStatusClass(status) {
                if (!status) return 'status-secondary';
                if (status.includes('Primary') || status.includes('Essential')) return 'status-essential';
                if (status.includes('Bare Act') || status.includes('Statutory')) return 'status-bare-act';
                return 'status-secondary';
            }

            function renderBooks() {
                const container = document.getElementById('booksGrid');
                const countLabel = document.getElementById('activeExamCount');
                if (!container) return;

                let filtered = books.filter(b => {
                    const matchesExam = (currentExamFilter === 'all') || (b.exam === currentExamFilter);
                    if (!matchesExam) return false;

                    if (!currentSearchQuery) return true;
                    const q = currentSearchQuery.toLowerCase();
                    return (
                        (b.title && b.title.toLowerCase().includes(q)) ||
                        (b.author && b.author.toLowerCase().includes(q)) ||
                        (b.subject && b.subject.toLowerCase().includes(q)) ||
                        (b.keyTopics && b.keyTopics.toLowerCase().includes(q)) ||
                        (b.exam && b.exam.toLowerCase().includes(q))
                    );
                });

                if (countLabel) {
                    countLabel.textContent = \`Showing \${filtered.length} of \${books.length} Books\`;
                }

                if (filtered.length === 0) {
                    container.innerHTML = '<p style="color:var(--text-light); padding:30px; grid-column:1/-1; text-align:center;">No books match your selected examination or search criteria.</p>';
                    return;
                }

                container.innerHTML = filtered.map(b => \`
                    <article class="book-card">
                        <div class="book-card-top">
                            <div class="book-badges-row">
                                <span class="book-exam-badge">\${b.exam} \${b.tier ? '• ' + b.tier : ''}</span>
                                <span class="book-status-badge \${getStatusClass(b.status)}">\${b.status}</span>
                            </div>
                            <div class="book-subject">\${b.subject}</div>
                            <h3 class="book-title">\${b.title}</h3>
                            <div class="book-author">
                                <i class="fa-solid fa-pen-nib"></i>
                                <span>\${b.author} (\${b.publisher})</span>
                            </div>
                            <div class="book-topics-box">
                                <strong style="color:var(--text-dark); display:block; margin-bottom:4px;"><i class="fa-solid fa-bookmark" style="color:#4338ca;"></i> Key Syllabus Topics:</strong>
                                \${b.keyTopics}
                            </div>
                            <div class="book-note-box">
                                <strong style="color:#3730a3; display:block; margin-bottom:4px;"><i class="fa-solid fa-award"></i> Examiner Note:</strong>
                                \${b.examinerNote}
                            </div>
                        </div>
                        <div class="book-strategy-box">
                            <strong style="color:#065f46; display:block; margin-bottom:4px;"><i class="fa-solid fa-route"></i> Strategic Reading Method:</strong>
                            \${b.readingStrategy}
                        </div>
                    </article>
                \`).join('');
            }

            // Hook Exam Filter Pills
            const pills = document.querySelectorAll('.exam-pill-btn');
            pills.forEach(btn => {
                btn.addEventListener('click', () => {
                    pills.forEach(p => p.classList.remove('active'));
                    btn.classList.add('active');
                    currentExamFilter = btn.getAttribute('data-exam');
                    renderBooks();
                });
            });

            // Hook Search Input
            const searchInput = document.getElementById('bookSearchInput');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    currentSearchQuery = e.target.value.trim();
                    renderBooks();
                });
            }

            // Dark Mode toggle
            const darkModeToggle = document.getElementById('darkModeToggle');
            if (darkModeToggle) {
                darkModeToggle.addEventListener('click', () => {
                    const isDark = document.body.classList.toggle('dark-mode');
                    document.documentElement.classList.toggle('dark-mode', isDark);
                    localStorage.setItem('mcqs_dark_mode', isDark ? 'true' : 'false');
                });
            }

            if (localStorage.getItem('mcqs_dark_mode') === 'true') {
                document.body.classList.add('dark-mode');
            }

            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu');
            const navLinks = document.querySelector('.nav-links');
            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }

            // Initial render
            renderBooks();
        });
    </script>
</body>

</html>
`;

fs.writeFileSync(targetPath, htmlContent, 'utf8');
console.log('Successfully generated frontend/recommended-books.html!');
