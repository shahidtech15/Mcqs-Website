/**
 * Shared Categorized Navigation Controller & Global Ctrl+K Command Palette
 * 1. Mega-menu dropdowns & mobile accordion drawer
 * 2. Homepage #tools-hub filtering & ?cat= deep-linking
 * 3. Universal Ctrl+K / Cmd+K Instant Search Command Palette across all 74 pages
 */
(function () {
  if (window.__mcqsNavInitialized) return;
  window.__mcqsNavInitialized = true;

  function closeAllMenus() {
    document.querySelectorAll('.nav-dropdown-btn').forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
      var menu = btn.parentElement ? btn.parentElement.querySelector('.mega-menu') : null;
      if (menu) menu.style.display = '';
    });
  }

  // 1. Mega-menu hover (desktop) & click (mobile/keyboard)
  document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
    var btn = dd.querySelector('.nav-dropdown-btn');
    var menu = dd.querySelector('.mega-menu');
    if (!btn || !menu) return;

    dd.addEventListener('mouseenter', function () {
      if (window.innerWidth <= 768) return;
      closeAllMenus();
      btn.setAttribute('aria-expanded', 'true');
      menu.style.display = 'grid';
    });

    dd.addEventListener('mouseleave', function () {
      if (window.innerWidth <= 768) return;
      btn.setAttribute('aria-expanded', 'false');
      menu.style.display = '';
    });

    btn.addEventListener('click', function (e) {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      closeAllMenus();
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        menu.style.display = 'grid';
      }
      e.stopPropagation();
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('.nav-dropdown')) {
      closeAllMenus();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllMenus();
  });

  // 2. Mobile drawer toggle
  var mobileBtn = document.querySelector('.mobile-menu');
  var navLinks = document.getElementById('mainNav') || document.querySelector('.nav-links');
  if (mobileBtn && navLinks && !mobileBtn.dataset.navBound) {
    mobileBtn.dataset.navBound = 'true';
    mobileBtn.addEventListener('click', function (e) {
      if (typeof window.__appMobileMenuBound === 'undefined') {
        navLinks.classList.toggle('nav-open');
        mobileBtn.classList.toggle('active');
      }
      setTimeout(function () {
        var open = navLinks.classList.contains('nav-open');
        navLinks.querySelectorAll('.nav-dropdown').forEach(function (dd) {
          dd.style.display = open ? 'block' : '';
        });
      }, 0);
      e.stopPropagation();
    });
  }

  // 3. Homepage #tools-hub filter pills
  var pills = document.querySelectorAll('.hub-pill');
  var cards = document.querySelectorAll('.hub-category-card');
  if (pills.length && cards.length) {
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var filter = pill.getAttribute('data-filter');
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');
        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // 4. Category Quick-Nav Strip active highlight
  document.querySelectorAll('.cat-strip-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.cat-strip-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });

  // 5. Global helper called by category strip on index.html
  window.filterCategorySection = function (cat) {
    var map = {
      all: 'all', maps: 'maps', science: 'science', law: 'law',
      economy: 'economy', history: 'history', intl: 'intl',
      games: 'games', essays: 'essays', exam: 'exam', career: 'career'
    };
    var filter = map[cat] || 'all';
    var matchedPill = document.querySelector('.hub-pill[data-filter="' + filter + '"]');
    if (matchedPill) {
      matchedPill.click();
      var hub = document.getElementById('tools-hub');
      if (hub) {
        setTimeout(function () { hub.scrollIntoView({ behavior: 'smooth' }); }, 50);
      }
    } else {
      window.location.href = 'index.html?cat=' + encodeURIComponent(filter) + '#tools-hub';
    }
  };

  // 6. Auto-apply ?cat= query param on index.html
  try {
    var params = new URLSearchParams(window.location.search);
    var initialCat = params.get('cat');
    if (initialCat && document.querySelector('.hub-pill[data-filter="' + initialCat + '"]')) {
      window.filterCategorySection(initialCat);
    }
  } catch (err) {}

  // =========================================================================
  // 7. GLOBAL CTRL+K / CMD+K INSTANT SEARCH COMMAND PALETTE
  // =========================================================================
  var SEARCH_INDEX = [
    // Maps & Geography
    { title: 'Pakistan Geography Map', sub: 'Provinces, Rivers, Dams, Mountain Passes & Heritage', url: 'pakistan-map.html', cat: 'Tools & Maps', icon: 'fa-flag', kw: 'indus tarbela mangla k2 gilgit balochistan punjab kpk' },
    { title: 'Dedicated Sindh Districts Map', sub: 'All 30 Districts, 7 Divisions, Barrages, Lakes & SPSC CCE', url: 'sindh-map.html', cat: 'Tools & Maps', icon: 'fa-map-marked-alt', kw: 'karachi hyderabad sukkur larkana manchar keenjhar guddu kotri' },
    { title: 'Interactive World Political Map', sub: '195+ Countries, Capitals, Currencies & Strategic Profiles', url: 'world-map.html', cat: 'Tools & Maps', icon: 'fa-earth-americas', kw: 'continents capitals borders countries atlas' },
    { title: 'Physical Geography Map', sub: 'Mountains, Rivers, Lakes, Deserts, Oceans, Plateaus & Straits', url: 'physical-geography-map.html', cat: 'Tools & Maps', icon: 'fa-mountain-sun', kw: 'himalayas andes nile amazon saharabaikal topography' },
    { title: 'Geopolitical Hotspots Map', sub: 'Global Conflicts, Disputed Borders & Strategic Flashpoints', url: 'geopolitical-hotspots-map.html', cat: 'Tools & Maps', icon: 'fa-satellite-dish', kw: 'kashmir taiwan ukraine gaza south china sea arctic' },
    { title: 'International Trade Routes Map', sub: 'Strait of Hormuz, Suez, Malacca, Panama, Bab el-Mandeb & CPEC', url: 'international-trade-routes-map.html', cat: 'Tools & Maps', icon: 'fa-ship', kw: 'chokepoints shipping lanes maritime belt and road' },

    // Science & Technology
    { title: 'Interactive Periodic Table (118 Elements)', sub: 'Electron Configurations, Bohr Orbitals, Trends & Quizzes', url: 'periodic-table.html', cat: 'Tools & Maps', icon: 'fa-atom', kw: 'chemistry atomic number noble gases alkali lanthanides' },
    { title: 'Solar System Explorer', sub: 'Planets, Moons, Atmospheres, Kepler Laws & Space Missions', url: 'solar-system-explorer.html', cat: 'Tools & Maps', icon: 'fa-sun', kw: 'astronomy mars jupiter saturn james webb nasa' },
    { title: 'Human Body Explorer', sub: '11 Physiological Systems, Major Organs, Records & Anatomy MCQs', url: 'human-body-explorer.html', cat: 'Tools & Maps', icon: 'fa-heart-pulse', kw: 'biology brain heart liver kidney nervous circulatory' },
    { title: 'Climate Change Explorer', sub: 'Emissions, Glaciers, Sea-Level Rise & COP Treaties (Paris, Kyoto)', url: 'climate-change-explorer.html', cat: 'Tools & Maps', icon: 'fa-temperature-high', kw: 'environment global warming greenhouse carbon cop28 cop29' },
    { title: 'Emerging Technology Explorer', sub: 'AI, Quantum Computing, Semiconductors, Biotech & Space Tech', url: 'technology-explorer.html', cat: 'Tools & Maps', icon: 'fa-microchip', kw: 'crispr robotics 5g blockchain cybersecurity' },
    { title: 'Everyday Science Capsule Notes', sub: 'Vitamins, Diseases, Instruments, Units, Inventions & Discoveries', url: 'science-notes.html', cat: 'MCQs & Quizzes', icon: 'fa-flask', kw: 'physics chemistry biology general science formulas' },

    // Law & Governance
    { title: 'Constitution of Pakistan 1973 Explorer', sub: '35 High-Yield Articles (Arts 8–28, 184, 199), 26 Amendments & Case Law', url: 'constitution-explorer.html', cat: 'Law & Acts', icon: 'fa-scale-balanced', kw: 'fundamental rights article 25 18th amendment 26th amendment parliament' },
    { title: 'Pakistan Penal Code (PPC 1860) Section Finder', sub: '47 Core Offences, Section 302 Qatl, Theft, Hurt, Defamation & Punishments', url: 'ppc-section-finder.html', cat: 'Law & Acts', icon: 'fa-gavel', kw: 'criminal law qisas diyat 302 379 420 499' },
    { title: 'CrPC 1898 Criminal Procedure Flowchart', sub: 'FIR (Sec 154), Arrest, Remand (167), Challan (173), Bail (497) & Trial', url: 'crpc-procedure-flowchart.html', cat: 'Law & Acts', icon: 'fa-diagram-project', kw: 'criminal procedure magistrate investigation charge appeal' },
    { title: 'Identify the Legal Provision (Case Solver)', sub: '25 Courtroom Scenarios across PPC, CrPC, Constitution & Qanun-e-Shahadat', url: 'identify-legal-provision.html', cat: 'Law & Acts', icon: 'fa-scale-unbalanced-flip', kw: 'qso evidence law quiz scenarios precedent' },
    { title: 'Court Structure & Judicial Hierarchy Explorer', sub: 'Supreme Court, Constitutional Benches, High Courts, Tribunals & Appeals', url: 'court-structure-explorer.html', cat: 'Law & Acts', icon: 'fa-landmark', kw: 'judiciary federal shariat court sessions court civil court' },
    { title: 'FIA Laws Explorer (FIA Act 1974, PECA, AMLA)', sub: 'FIA Act 1974, PECA 2016 Cybercrime, AMLA 2010, Emigration & 37 Scheduled Acts', url: 'fia-laws-explorer.html', cat: 'Law & Acts', icon: 'fa-building-shield', kw: 'federal investigation agency money laundering cybercrime' },
    { title: 'Civil Servants Acts & Service Rules', sub: 'Civil Servants Act 1973, E&D Rules, Conduct Rules & Leave Rules', url: 'acts-rules.html', cat: 'Law & Acts', icon: 'fa-scroll', kw: 'esta code seniority promotion disciplinary' },

    // Economy, History & Global Affairs
    { title: 'World Economy Dashboard', sub: 'GDP, Inflation, Debt, Trade Balances & Macroeconomic Indicators', url: 'world-economy-dashboard.html', cat: 'Tools & Maps', icon: 'fa-chart-line', kw: 'imf world bank purchasing power parity economics' },
    { title: 'Currency & Exchange Explorer', sub: 'World Currencies, Central Banks, Exchange Regimes & FX Calculator', url: 'currency-exchange-explorer.html', cat: 'Tools & Maps', icon: 'fa-coins', kw: 'state bank sbp federal reserve dollar euro yuan' },
    { title: 'Who Trades What? Global Trade Matrix', sub: '36 Trading Nations, Top Exports/Imports, Bilateral Matcher & Trade Blocs', url: 'who-trades-what.html', cat: 'Tools & Maps', icon: 'fa-ship', kw: 'wto exports imports commodities tariffs' },
    { title: 'World History Timeline (3500 BCE – 2026)', sub: 'Ancient Civilizations, Empires, Wars, Revolutions & Treaties', url: 'world-history-timeline.html', cat: 'Tools & Maps', icon: 'fa-timeline', kw: 'ww1 ww2 cold war french revolution industrial' },
    { title: 'Pakistan History & Constitutional Timeline', sub: '712 AD to 2026: Freedom Movement, Constitutions, Wars & Milestones', url: 'timeline.html', cat: 'Tools & Maps', icon: 'fa-clock-rotate-left', kw: '1947 jinnah allama iqbal lahore resolution' },
    { title: 'Global Power Comparison (25 Nations)', sub: 'Military Strength, Nuclear Triads, GDP, Defense Budgets & Energy', url: 'global-power-comparison.html', cat: 'Tools & Maps', icon: 'fa-shield-halved', kw: 'usa china russia pakistan india military index' },
    { title: 'International Organizations Explorer', sub: 'UN, NATO, EU, OIC, SCO, SAARC, ASEAN, BRICS, IMF & World Bank', url: 'international-organizations-explorer.html', cat: 'Tools & Maps', icon: 'fa-sitemap', kw: 'headquarters members treaties diplomacy' },
    { title: 'UN Security Council Simulator & Veto Engine', sub: 'Simulate 15-Member Roll-Call Voting & P5 Veto Power under Article 27', url: 'unsc-simulator.html', cat: 'Games & Career', icon: 'fa-scale-balanced', kw: 'united nations resolutions p5 diplomacy game' },
    { title: 'One-Topic Master Guide: United Nations (UN)', sub: 'UN Charter, 6 Principal Organs, Specialized Agencies & 50 MCQs', url: 'topic-united-nations.html', cat: 'MCQs & Quizzes', icon: 'fa-flag', kw: 'unga unesco unicef who icj' },
    { title: 'One-Topic Master Guide: European Union (EU)', sub: 'Maastricht, Lisbon, Eurozone, Schengen, Institutions & 50 MCQs', url: 'topic-european-union.html', cat: 'MCQs & Quizzes', icon: 'fa-shield-halved', kw: 'brussels brexit european commission' },
    { title: 'One-Topic Master Guide: NATO Alliance', sub: 'Article 5 Collective Defense, Enlargement Rounds & 50 MCQs', url: 'topic-nato.html', cat: 'MCQs & Quizzes', icon: 'fa-jet-fighter', kw: 'north atlantic treaty organization finland sweden' },

    // Games & Daily Challenges
    { title: 'Academic Scrabble Word Game', sub: 'Official 15x15 Scrabble Board vs AI Opponent with CSS/GRE Definitions', url: 'scrabble.html', cat: 'Games & Career', icon: 'fa-font', kw: 'vocabulary game word tiles bingo crossword' },
    { title: 'Daily Interactive Challenges (5 Modes)', sub: 'Question of the Day, Identify Personality, Fact/Fiction, Daily 5 & Championship', url: 'daily-challenges.html', cat: 'Games & Career', icon: 'fa-bolt', kw: 'streak daily quiz trivia leaderboard' },
    { title: 'Daily Fact Explorer', sub: 'This Day in History, Science, Technology, Culture & Pakistan Milestones', url: 'daily-fact.html', cat: 'Games & Career', icon: 'fa-calendar-day', kw: 'did you know facts today history' },
    { title: 'Civil Service Crossword Puzzle', sub: 'Interactive Crossword across Pak Affairs, IR, Science, Law & Geography', url: 'crossword.html', cat: 'Games & Career', icon: 'fa-chess-board', kw: 'word puzzle clues vocabulary' },
    { title: 'Civil Service Word Search Challenge', sub: '8-Direction Vocabulary Matrix with Timer & Exam Clues', url: 'word-search.html', cat: 'Games & Career', icon: 'fa-magnifying-glass', kw: 'word puzzle grid game' },
    { title: 'Guess the Country Geography Game', sub: 'Identify Nations from Flags, Map Outlines, Landmarks & Clues', url: 'guess-the-country.html', cat: 'Games & Career', icon: 'fa-gamepad', kw: 'flags capitals geography quiz' },
    { title: 'Locate It on the Map Challenge', sub: 'Pin Countries, Capitals, Mountains, Rivers & Straits on a Blank Map', url: 'locate-on-map.html', cat: 'Games & Career', icon: 'fa-crosshairs', kw: 'map pin game coordinates' },
    { title: 'Match the Following Associative Game', sub: 'Match Countries, Treaties, Books, Leaders, Inventions & Capitals', url: 'match-the-following.html', cat: 'Games & Career', icon: 'fa-puzzle-piece', kw: 'pairs matching game memory' },
    { title: 'Arrange Events Chronologically', sub: 'Order Historical Events, Constitutional Amendments, Wars & Treaties', url: 'arrange-chronologically.html', cat: 'Games & Career', icon: 'fa-arrow-down-1-9', kw: 'timeline order history game' },

    // Essays & Writing
    { title: 'CSS 2026 Solved Model Essays (10 Complete)', sub: 'Outlines, Thesis Statements & Full 3,000-Word Solved CSS Essays', url: 'css-essays-2026.html', cat: 'Essays', icon: 'fa-award', kw: 'english essay fpsc civil services 2026' },
    { title: 'CSS 2021 Solved Past Paper Essays (10 Complete)', sub: 'Complete Solved CSS 2021 Essay Paper with Outlines & Arguments', url: 'css-essays-2021.html', cat: 'Essays', icon: 'fa-pen-nib', kw: 'past papers css essay 2021' },
    { title: 'SPSC CCE 2025 Solved Essays (All 8 Topics)', sub: 'Complete Solved Combined Competitive Exam Essays for Sindh', url: 'cce-essays-2025.html', cat: 'Essays', icon: 'fa-landmark', kw: 'pms sindh spsc essay 2025' },
    { title: 'UPSC CSE 2023 Solved Essays (All 8 Philosophical & Policy)', sub: 'In-Depth Philosophical & Analytical Solved UPSC Essays', url: 'upsc-essays-2023.html', cat: 'Essays', icon: 'fa-feather-pointed', kw: 'ias civil services philosophical essays' },
    { title: '12 International Relations & Geopolitics Master Essays', sub: 'Multipolarity, US-China Rivalry, CPEC, Middle East, UN Reform & Hybrid War', url: 'international-relations-essays.html', cat: 'Essays', icon: 'fa-globe', kw: 'ir foreign policy diplomacy cold war' },
    { title: '12 Global Security & Modern Warfare Master Essays', sub: 'Cyber Warfare, Nuclear Deterrence, AI in Warfare, Terrorism & Maritime Security', url: 'global-security-conflict-essays.html', cat: 'Essays', icon: 'fa-shield-halved', kw: 'fifth generation war strategic stability' },
    { title: '12 Geoeconomics, IMF & Finance Master Essays', sub: 'Pakistan Economic Crisis, IMF Programs, Debt Trap, De-Dollarization & Trade', url: 'geoeconomics-finance-essays.html', cat: 'Essays', icon: 'fa-chart-line', kw: 'taxation circular debt inflation economy essay' },
    { title: 'Master Essay: Pakistan Education Crisis', sub: '3,500+ Words Solved Essay with Comprehensive Outline & Data', url: 'essay-pakistan-education-crisis.html', cat: 'Essays', icon: 'fa-graduation-cap', kw: 'out of school children literacy higher education hec' },
    { title: 'Master Essay: Russia-Ukraine War & Global Order', sub: '3,000+ Words Geopolitical Analysis, Energy Shock & NATO Expansion', url: 'essay-russia-ukraine-war.html', cat: 'Essays', icon: 'fa-feather-pointed', kw: 'putin zelensky europe conflict essay' },
    { title: 'Written Examination & Precis Prep Hub', sub: 'Essay Structuring, Precis Rules, Comprehension & Paper Presentation', url: 'written-prep.html', cat: 'Essays', icon: 'fa-pen-to-square', kw: 'english composition precis writing tips' },
    { title: 'Editorial Explainer & Current Affairs Analysis', sub: 'Paragraph-by-Paragraph Breakdown of Dawn/Economist Editorials & Vocab', url: 'editorial-explainer.html', cat: 'Essays', icon: 'fa-newspaper', kw: 'opinion reading comprehension vocabulary' },
    { title: 'In-Depth Study Articles & Notes', sub: 'Comprehensive Long-Form Guides on Constitutional, Historical & IR Topics', url: 'articles.html', cat: 'Essays', icon: 'fa-book-open', kw: 'notes lectures reading' },
    { title: 'English Grammar & Composition Rules', sub: 'Tenses, Active/Passive Voice, Direct/Indirect, Prepositions & Sentence Correction', url: 'grammar-rules.html', cat: 'MCQs & Quizzes', icon: 'fa-spell-check', kw: 'parts of speech punctuation syntax' },

    // MCQs, Quizzes & Exam Prep
    { title: 'Interactive Mock Quiz Engine (Timed + Negative Marking)', sub: 'Customizable 10–100 Question Mock Tests with FPSC -0.25 Option & Review', url: 'quiz.html', cat: 'MCQs & Quizzes', icon: 'fa-brain', kw: 'practice test simulator timer mpt' },
    { title: 'FIA Assistant Director 20 Sample Papers (2,000 MCQs)', sub: '10 Standard + 10 Hard 100-Mark Full Mock Papers with Explanations', url: 'fia-sample-papers.html', cat: 'MCQs & Quizzes', icon: 'fa-file-shield', kw: 'fia ad investigation inspector past papers' },
    { title: 'Islamiat 1,000+ Solved MCQs Bank', sub: 'Quran, Hadith, Seerat-un-Nabi, Ghazwat, Khulafa-e-Rashideen & Fiqh', url: 'islamiat-mcqs.html', cat: 'MCQs & Quizzes', icon: 'fa-kaaba', kw: 'islamic studies prophets pillarszakat hajj' },
    { title: 'Mathematics 300+ Solved Past Paper MCQs', sub: 'Percentages, Ratios, Averages, Algebra, Geometry, Work/Time & Series', url: 'math-mcqs.html', cat: 'MCQs & Quizzes', icon: 'fa-calculator', kw: 'quantitative arithmetic basic math ability' },
    { title: 'Quantitative Math Shortcut Tricks & Formulas', sub: 'Fast Mental Math Formulas for FPSC, PPSC, NTS, GAT & CSS MPT', url: 'math-tricks.html', cat: 'MCQs & Quizzes', icon: 'fa-wand-magic-sparkles', kw: 'speed math equations percentages profit loss' },
    { title: 'English Synonyms 2,000 MCQs Bank', sub: 'High-Yield CSS, PMS, FPSC & GRE Synonyms with Definitions & Sentences', url: 'quiz.html?categoryName=English%20Synonyms', cat: 'MCQs & Quizzes', icon: 'fa-spell-check', kw: 'vocabulary words meanings gre' },
    { title: 'English Antonyms 2,000 MCQs Bank', sub: 'High-Yield Opposite Words with Contextual Explanations', url: 'quiz.html?categoryName=English%20Antonyms', cat: 'MCQs & Quizzes', icon: 'fa-arrows-split-up-and-left', kw: 'vocabulary opposites gre' },
    { title: 'General Knowledge 4,000+ MCQs Quiz', sub: 'World Geography, History, Superlatives, Currencies, Capitals & Sports', url: 'quiz.html?categoryName=General%20Knowledge', cat: 'MCQs & Quizzes', icon: 'fa-globe', kw: 'gk trivia world facts' },
    { title: 'Pakistan Affairs MCQs Quiz', sub: 'Indo-Pak History, Freedom Movement, Geography, Economy & Constitution', url: 'quiz.html?categoryName=Pakistan%20Affairs', cat: 'MCQs & Quizzes', icon: 'fa-flag', kw: 'pak studies 1857 1947' },
    { title: 'Current Affairs 2025–2026 MCQs Quiz', sub: 'Pakistan & International Current Affairs, Summits, Appointments & Sports', url: 'quiz.html?categoryName=Current%20Affairs', cat: 'MCQs & Quizzes', icon: 'fa-newspaper', kw: 'latest news updates 2026' },
    { title: 'Assistant Audit Officer (BS-17) MCQs Quiz', sub: 'Accounting, Auditing, Financial Management, Public Finance & GFR', url: 'quiz.html?categoryName=Assistant%20Audit%20Officer%20(BS-17)', cat: 'MCQs & Quizzes', icon: 'fa-file-invoice-dollar', kw: 'aao commerce cost tax' },
    { title: 'Computer Science & IT MCQs Quiz', sub: 'MS Office, Operating Systems, Networking, Databases & Programming', url: 'quiz.html?categoryName=Computer%20Science', cat: 'MCQs & Quizzes', icon: 'fa-laptop-code', kw: 'excel word powerpoint shortcuts' },

    // Career, Scholarships & Resources
    { title: 'Latest Government Jobs Portal (17,500+ Posts)', sub: 'Sindh Police ASI & Constables, FPSC, PPSC, SPSC, FIA & Departmental Jobs', url: 'latest-jobs.html', cat: 'Games & Career', icon: 'fa-bullhorn', kw: 'vacancies recruitment apply online advertisements' },
    { title: 'Master’s & PhD International Scholarships', sub: 'Fulbright, Chevening, Erasmus Mundus, DAAD, MEXT, CSC & Commonwealth', url: 'scholarships.html', cat: 'Games & Career', icon: 'fa-graduation-cap', kw: 'study abroad fully funded stipend fellowships' },
    { title: 'Complete Recruitment Test Prep Hub', sub: 'Syllabi & Roadmaps for FIA, Sindh Police, Customs Inspector, NAB & MOD', url: 'recruitment-prep.html', cat: 'Games & Career', icon: 'fa-briefcase', kw: 'one paper mcqs test preparation' },
    { title: 'Competitive Exam Preparation Master Guide', sub: 'Step-by-Step Roadmaps, Bare Acts, Negative Marking Tactics & Blueprints', url: 'exam-guide.html', cat: 'Games & Career', icon: 'fa-map-signs', kw: 'how to prepare css pms fpsc' },
    { title: 'Digital Library & Policy Reports', sub: 'Economic Survey, SBP Reports, Constitutional Texts & Vocabulary Decks', url: 'digital-library.html', cat: 'Games & Career', icon: 'fa-book-bookmark', kw: 'pdfs downloads reference documents' },
    { title: 'Recommended Books by Subject & Exam', sub: 'Curated Compulsory & Optional Subject Booklists for CSS, PMS & FPSC', url: 'recommended-books.html', cat: 'Games & Career', icon: 'fa-book', kw: 'reading list authors syllabus books' },
    { title: 'AI Study Assistant & Quiz Generator', sub: 'Interactive Concept Explainer, Essay Outline Builder & Topic Summarizer', url: 'ai-assistant.html', cat: 'Tools & Maps', icon: 'fa-robot', kw: 'chatbot tutor help' },
    { title: 'My Learning Dashboard & Analytics', sub: 'Track Quiz Accuracy, Subject Mastery, Bookmarks & Study Progress', url: 'dashboard.html', cat: 'Games & Career', icon: 'fa-chart-pie', kw: 'profile stats scores performance' },
    { title: 'Global Leaderboard & Rankings', sub: 'Top Performers & Daily Challenge Champions', url: 'leaderboard.html', cat: 'Games & Career', icon: 'fa-trophy', kw: 'high scores rank' }
  ];

  function injectCommandPalette() {
    if (document.getElementById('cmdPaletteBackdrop')) return;

    // 1. Inject Scoped CSS
    var style = document.createElement('style');
    style.id = 'cmd-palette-styles';
    style.textContent = `
      .cmd-trigger-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-radius: 8px;
        border: 1px solid rgba(148, 163, 184, 0.35);
        background: rgba(241, 245, 249, 0.85);
        color: #334155;
        font-size: 0.8rem;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
        cursor: pointer;
        transition: all 0.18s ease;
        white-space: nowrap;
      }
      .cmd-trigger-btn:hover {
        border-color: #2563eb;
        color: #1d4ed8;
        background: rgba(37, 99, 235, 0.08);
      }
      .cmd-trigger-kbd {
        font-size: 0.68rem;
        font-weight: 700;
        padding: 1px 6px;
        border-radius: 4px;
        background: rgba(15, 23, 42, 0.08);
        color: #475569;
        border: 1px solid rgba(148, 163, 184, 0.3);
      }
      html.dark-mode .cmd-trigger-btn,
      body.dark-mode .cmd-trigger-btn,
      .site-switcher-bar .cmd-trigger-btn {
        background: rgba(30, 41, 59, 0.9);
        color: #e2e8f0;
        border-color: #334155;
      }
      html.dark-mode .cmd-trigger-kbd,
      body.dark-mode .cmd-trigger-kbd,
      .site-switcher-bar .cmd-trigger-kbd {
        background: #0f172a;
        color: #94a3b8;
        border-color: #334155;
      }
      #cmdPaletteBackdrop {
        position: fixed;
        inset: 0;
        z-index: 999998;
        background: rgba(15, 23, 42, 0.65);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        display: none;
        align-items: flex-start;
        justify-content: center;
        padding: 8vh 16px 20px;
        font-family: 'Inter', sans-serif;
      }
      #cmdPaletteBackdrop.open { display: flex; }
      .cmd-modal {
        width: 100%;
        max-width: 650px;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.35);
        overflow: hidden;
        animation: cmdPopIn 0.16s ease-out;
      }
      @keyframes cmdPopIn {
        from { opacity: 0; transform: translateY(-10px) scale(0.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .cmd-input-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 18px;
        border-bottom: 1px solid #e2e8f0;
      }
      .cmd-input-row i {
        color: #2563eb;
        font-size: 1.05rem;
      }
      #cmdSearchInput {
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
        font-size: 1rem;
        font-weight: 500;
        color: #0f172a;
        font-family: inherit;
      }
      .cmd-esc-badge {
        font-size: 0.72rem;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 6px;
        background: #f1f5f9;
        color: #64748b;
        border: 1px solid #cbd5e1;
        cursor: pointer;
      }
      .cmd-tabs {
        display: flex;
        gap: 6px;
        padding: 8px 16px;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .cmd-tabs::-webkit-scrollbar { display: none; }
      .cmd-tab {
        padding: 4px 11px;
        border-radius: 14px;
        border: 1px solid #cbd5e1;
        background: #ffffff;
        color: #475569;
        font-size: 0.74rem;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        font-family: inherit;
      }
      .cmd-tab.active {
        background: #2563eb;
        color: #ffffff;
        border-color: #2563eb;
      }
      .cmd-results {
        max-height: 390px;
        overflow-y: auto;
        padding: 8px;
      }
      .cmd-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 10px;
        text-decoration: none;
        color: #0f172a;
        cursor: pointer;
        transition: background 0.12s;
      }
      .cmd-item:hover,
      .cmd-item.active {
        background: rgba(37, 99, 235, 0.09);
      }
      .cmd-item-icon {
        width: 36px;
        height: 36px;
        border-radius: 9px;
        background: rgba(37, 99, 235, 0.1);
        color: #2563eb;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.95rem;
        flex-shrink: 0;
      }
      .cmd-item-body {
        flex: 1;
        min-width: 0;
      }
      .cmd-item-title {
        font-size: 0.88rem;
        font-weight: 700;
        color: #0f172a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .cmd-item-sub {
        font-size: 0.76rem;
        color: #64748b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .cmd-item-badge {
        font-size: 0.66rem;
        font-weight: 700;
        padding: 2px 8px;
        border-radius: 12px;
        background: #f1f5f9;
        color: #475569;
        white-space: nowrap;
      }
      .cmd-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 16px;
        background: #f8fafc;
        border-top: 1px solid #e2e8f0;
        font-size: 0.73rem;
        color: #64748b;
      }
      html.dark-mode .cmd-modal,
      body.dark-mode .cmd-modal {
        background: #1e293b;
        border-color: #334155;
      }
      html.dark-mode .cmd-input-row,
      body.dark-mode .cmd-input-row {
        border-color: #334155;
      }
      html.dark-mode #cmdSearchInput,
      body.dark-mode #cmdSearchInput {
        color: #f8fafc;
      }
      html.dark-mode .cmd-tabs,
      body.dark-mode .cmd-tabs,
      html.dark-mode .cmd-footer,
      body.dark-mode .cmd-footer {
        background: #0f172a;
        border-color: #334155;
      }
      html.dark-mode .cmd-tab,
      body.dark-mode .cmd-tab {
        background: #1e293b;
        border-color: #334155;
        color: #cbd5e1;
      }
      html.dark-mode .cmd-tab.active,
      body.dark-mode .cmd-tab.active {
        background: #2563eb;
        color: #fff;
      }
      html.dark-mode .cmd-item-title,
      body.dark-mode .cmd-item-title {
        color: #f8fafc;
      }
      html.dark-mode .cmd-item-sub,
      body.dark-mode .cmd-item-sub {
        color: #94a3b8;
      }
      html.dark-mode .cmd-item:hover,
      html.dark-mode .cmd-item.active,
      body.dark-mode .cmd-item:hover,
      body.dark-mode .cmd-item.active {
        background: rgba(59, 130, 246, 0.16);
      }
      html.dark-mode .cmd-item-badge,
      body.dark-mode .cmd-item-badge,
      html.dark-mode .cmd-esc-badge,
      body.dark-mode .cmd-esc-badge {
        background: #0f172a;
        color: #94a3b8;
        border-color: #334155;
      }
      @media (max-width: 640px) {
        .cmd-trigger-kbd { display: none; }
        .cmd-trigger-text { display: none; }
      }
    `;
    document.head.appendChild(style);

    // 2. Inject Trigger Button in Header / Navbar
    var triggerBtn = document.createElement('button');
    triggerBtn.type = 'button';
    triggerBtn.className = 'cmd-trigger-btn';
    triggerBtn.title = 'Quick Search (Ctrl+K)';
    triggerBtn.setAttribute('aria-label', 'Quick Search (Ctrl+K)');
    triggerBtn.innerHTML = '<i class="fas fa-magnifying-glass"></i> <span class="cmd-trigger-text">Search</span> <span class="cmd-trigger-kbd">Ctrl K</span>';
    triggerBtn.addEventListener('click', openPalette);

    var darkToggle = document.getElementById('darkModeToggle');
    var headerActions = document.querySelector('.header-actions') || document.querySelector('.nav-actions');
    var switcherInner = document.querySelector('.site-switcher-bar .switcher-inner');

    if (darkToggle && darkToggle.parentElement) {
      darkToggle.parentElement.insertBefore(triggerBtn, darkToggle);
    } else if (headerActions) {
      headerActions.insertBefore(triggerBtn, headerActions.firstChild);
    } else if (switcherInner) {
      switcherInner.insertBefore(triggerBtn, switcherInner.firstChild);
    }

    // 3. Build Modal DOM
    var backdrop = document.createElement('div');
    backdrop.id = 'cmdPaletteBackdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-label', 'Site-Wide Command Search');
    backdrop.innerHTML = `
      <div class="cmd-modal" onclick="event.stopPropagation()">
        <div class="cmd-input-row">
          <i class="fas fa-magnifying-glass"></i>
          <input type="text" id="cmdSearchInput" placeholder="Search 74 tools, maps, laws, essays, games or 15,000+ MCQs..." autocomplete="off" />
          <span class="cmd-esc-badge" id="cmdCloseBtn">ESC</span>
        </div>
        <div class="cmd-tabs" id="cmdTabs">
          <button type="button" class="cmd-tab active" data-cat="All">All (74+)</button>
          <button type="button" class="cmd-tab" data-cat="Tools & Maps">🗺️ Tools & Maps</button>
          <button type="button" class="cmd-tab" data-cat="MCQs & Quizzes">🧠 MCQs & Quizzes</button>
          <button type="button" class="cmd-tab" data-cat="Essays">✍️ Essays</button>
          <button type="button" class="cmd-tab" data-cat="Law & Acts">⚖️ Law & Acts</button>
          <button type="button" class="cmd-tab" data-cat="Games & Career">🎮 Games & Career</button>
        </div>
        <div class="cmd-results" id="cmdResultsList"></div>
        <div class="cmd-footer">
          <span><strong>↑↓</strong> Navigate &nbsp;&bull;&nbsp; <strong>Enter</strong> Open &nbsp;&bull;&nbsp; <strong>Esc</strong> Close</span>
          <span><strong>Ctrl + K</strong> anywhere</span>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

    var inputEl = document.getElementById('cmdSearchInput');
    var resultsEl = document.getElementById('cmdResultsList');
    var tabsEl = document.getElementById('cmdTabs');
    var activeCat = 'All';
    var activeIdx = 0;
    var currentItems = [];

    function renderResults() {
      var q = (inputEl.value || '').trim().toLowerCase();
      var tokens = q ? q.split(/\s+/) : [];

      var matched = SEARCH_INDEX.filter(function (item) {
        if (activeCat !== 'All' && item.cat !== activeCat) return false;
        if (!tokens.length) return true;
        var hay = (item.title + ' ' + item.sub + ' ' + item.cat + ' ' + (item.kw || '')).toLowerCase();
        return tokens.every(function (t) { return hay.indexOf(t) !== -1; });
      });

      currentItems = matched.slice(0, 25);

      // Always append a "Search all 15,000+ MCQs for <query>" deep action when user types a query
      if (q.length >= 2) {
        currentItems.push({
          title: 'Search all 15,000+ MCQs for "' + inputEl.value.trim() + '"',
          sub: 'Deep-search every subject question bank on the homepage',
          url: 'index.html?search=' + encodeURIComponent(inputEl.value.trim()) + '#latestMcqsList',
          cat: 'Deep MCQ Search',
          icon: 'fa-magnifying-glass-plus',
          isDeepSearch: true,
          rawQuery: inputEl.value.trim()
        });
      }

      if (activeIdx >= currentItems.length) activeIdx = 0;

      if (currentItems.length === 0) {
        resultsEl.innerHTML = '<div style="text-align:center; padding:28px 16px; color:#64748b; font-size:0.86rem;">No matching tools found. Press Enter to search all MCQs.</div>';
        return;
      }

      resultsEl.innerHTML = currentItems.map(function (item, idx) {
        return `
          <a href="${item.url}" class="cmd-item${idx === activeIdx ? ' active' : ''}" data-idx="${idx}">
            <div class="cmd-item-icon"><i class="fas ${item.icon}"></i></div>
            <div class="cmd-item-body">
              <div class="cmd-item-title">${item.title}</div>
              <div class="cmd-item-sub">${item.sub}</div>
            </div>
            <span class="cmd-item-badge">${item.cat}</span>
          </a>
        `;
      }).join('');

      resultsEl.querySelectorAll('.cmd-item').forEach(function (el) {
        el.addEventListener('click', function (e) {
          var idx = parseInt(el.getAttribute('data-idx'), 10);
          var chosen = currentItems[idx];
          if (chosen && chosen.isDeepSearch && typeof window.quickSearch === 'function' && document.getElementById('latestMcqsList')) {
            e.preventDefault();
            closePalette();
            window.quickSearch(chosen.rawQuery);
          } else {
            closePalette();
          }
        });
      });
    }

    function openPalette() {
      backdrop.classList.add('open');
      activeIdx = 0;
      renderResults();
      setTimeout(function () { inputEl.focus(); inputEl.select(); }, 20);
    }

    function closePalette() {
      backdrop.classList.remove('open');
    }

    window.openCommandPalette = openPalette;

    backdrop.addEventListener('click', closePalette);
    document.getElementById('cmdCloseBtn').addEventListener('click', closePalette);

    inputEl.addEventListener('input', function () {
      activeIdx = 0;
      renderResults();
    });

    tabsEl.querySelectorAll('.cmd-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabsEl.querySelectorAll('.cmd-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        activeCat = tab.getAttribute('data-cat') || 'All';
        activeIdx = 0;
        renderResults();
        inputEl.focus();
      });
    });

    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        if (backdrop.classList.contains('open')) closePalette();
        else openPalette();
        return;
      }
      if (!backdrop.classList.contains('open')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closePalette();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentItems.length) {
          activeIdx = (activeIdx + 1) % currentItems.length;
          renderResults();
          var actEl = resultsEl.querySelector('.cmd-item.active');
          if (actEl) actEl.scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentItems.length) {
          activeIdx = (activeIdx - 1 + currentItems.length) % currentItems.length;
          renderResults();
          var actElUp = resultsEl.querySelector('.cmd-item.active');
          if (actElUp) actElUp.scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'Enter') {
        var activeLink = resultsEl.querySelector('.cmd-item.active');
        if (activeLink) {
          e.preventDefault();
          activeLink.click();
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCommandPalette);
  } else {
    injectCommandPalette();
  }
})();
