const fs = require('fs');

console.log('--- 1. Updating frontend/js/app.js ---');
let appJs = fs.readFileSync('frontend/js/app.js', 'utf8');

// Ensure initInterestingFacts() and initExamGuideSection() are called on DOMContentLoaded
if (!appJs.includes('initExamGuideSection();')) {
  appJs = appJs.replace(
    'checkDeepLinkParams();',
    'checkDeepLinkParams();\n  initInterestingFacts();\n  initExamGuideSection();'
  );
}

// Append initExamGuideSection definition if not present
if (!appJs.includes('function initExamGuideSection()')) {
  const guideFunction = `

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
    tabsContainer.innerHTML = guides.map(g => \`
      <button type="button" class="exam-tab-pill \${g.id === activeExamId ? 'active' : ''}" data-exam="\${g.id}">
        <i class="fa-solid \${g.icon}"></i> \${g.name}
      </button>
    \`).join('');

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
    cardContainer.innerHTML = \`
      <div class="exam-card-wrapper fade-in">
        <div class="exam-header">
          <div class="exam-title-group">
            <h3><i class="fa-solid \${exam.icon}" style="color: \${exam.color};"></i> \${exam.fullName}</h3>
            <p><i class="fa-solid fa-briefcase"></i> <strong>Target Posts:</strong> \${exam.targetPosts}</p>
          </div>
          <div class="exam-badges-row">
            <span class="exam-badge badge-fpsc"><i class="fa-solid fa-building"></i> \${exam.agency}</span>
            <span class="exam-badge badge-bs17"><i class="fa-solid fa-award"></i> \${exam.scale}</span>
            <span class="exam-badge badge-bs16"><i class="fa-solid fa-clock"></i> \${exam.testPattern.totalTime}</span>
            <span class="exam-badge badge-negative"><i class="fa-solid fa-circle-info"></i> \${exam.testPattern.negativeMarking}</span>
          </div>
        </div>

        <div style="margin-bottom: 24px; line-height: 1.6; color: var(--text-dark); background: rgba(37,99,235,0.03); border-left: 4px solid \${exam.color}; padding: 14px 18px; border-radius: 4px;">
          <p>\${exam.overview}</p>
        </div>

        <div class="exam-details-grid">
          <div class="exam-box">
            <h4><i class="fa-solid fa-list-check" style="color: \${exam.color};"></i> Syllabus Breakdown</h4>
            \${exam.sections.map(s => \`
              <p style="font-weight: 700; margin-top: 10px; margin-bottom: 4px; font-size: 0.92rem; color: var(--text-dark);">\${s.name}</p>
              <ul>
                \${s.topics.map(t => \`<li>\${t}</li>\`).join('')}
              </ul>
            \`).join('')}
          </div>

          <div class="exam-box">
            <h4><i class="fa-solid fa-gavel" style="color: \${exam.color};"></i> Key Bare Acts & Core Sections</h4>
            \${exam.keyActs.map(a => \`
              <div style="margin-bottom: 12px;">
                <strong style="color: var(--text-dark); font-size: 0.92rem;">\${a.actName}</strong>
                <p style="font-size: 0.88rem; color: var(--text-light); margin-top: 4px; line-height: 1.5;">\${a.keySections}</p>
              </div>
            \`).join('')}
          </div>

          <div class="exam-box tactics">
            <h4><i class="fa-solid fa-lightbulb" style="color: var(--warning);"></i> High-Yield Scoring Tactics</h4>
            <ul>
              \${exam.highYieldTactics.map(t => \`<li>\${t}</li>\`).join('')}
            </ul>
          </div>

          <div class="exam-box books">
            <h4><i class="fa-solid fa-book-bookmark" style="color: var(--success);"></i> Recommended Resources</h4>
            <ul>
              \${exam.recommendedSources.map(b => \`<li>\${b}</li>\`).join('')}
            </ul>
          </div>
        </div>

        <div class="exam-action-bar">
          <div class="exam-links-group">
            <a href="\${exam.quizUrl}" class="btn-exam-practice">
              <i class="fa-solid fa-play"></i> Practice \${exam.name} Quiz
            </a>
            \${exam.quizAltUrl ? \`
              <a href="\${exam.quizAltUrl}" class="btn-exam-outline">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Related Test Module
              </a>
            \` : ''}
          </div>
          <div>
            <a href="exam-guide.html#guide-\${exam.id}" style="color: var(--secondary-color); font-weight: 600; text-decoration: none; font-size: 0.92rem;">
              View Complete In-Depth Guide <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    \`;
  }

  renderTabs();
  renderCard();
}
`;
  appJs += guideFunction;
}

fs.writeFileSync('frontend/js/app.js', appJs, 'utf8');
console.log('app.js updated successfully.');

console.log('--- 2. Updating frontend/index.html ---');
let indexHtml = fs.readFileSync('frontend/index.html', 'utf8');

// Include data_exam_guides.js
if (!indexHtml.includes('js/data_exam_guides.js')) {
  indexHtml = indexHtml.replace(
    '<script src="js/data_world_org.js"></script>',
    '<script src="js/data_world_org.js"></script>\n    <script src="js/data_exam_guides.js"></script>'
  );
}

// Add Exam Guide to primary nav
if (!indexHtml.includes('href="exam-guide.html"')) {
  indexHtml = indexHtml.replace(
    '<a href="quiz.html">Take a Quiz</a>',
    '<a href="quiz.html">Take a Quiz</a>\n                <a href="exam-guide.html">Exam Guide</a>'
  );
}

// Add Exam Guide & How to Prepare to secondary nav
if (!indexHtml.includes('href="exam-guide.html"')) {
  indexHtml = indexHtml.replace(
    '<li><a href="science-notes.html">🔬 Science Capsule Notes</a></li>',
    '<li><a href="exam-guide.html" style="font-weight: 700; color: #f59e0b;"><i class="fa-solid fa-book-open-reader"></i> Exam Guide</a></li>\n                <li><a href="#exam-preparation-guide" style="font-weight: 600; color: #10b981;"><i class="fa-solid fa-bullseye"></i> How to Prepare (FIA/NAB/CSS)</a></li>\n                <li><a href="science-notes.html">🔬 Science Capsule Notes</a></li>'
  );
}

// Add search chip in hero
if (!indexHtml.includes('#exam-preparation-guide')) {
  indexHtml = indexHtml.replace(
    '<button type="button" class="search-chip" onclick="quickSearch(\'World Organizations\')"',
    '<button type="button" class="search-chip" onclick="window.location.href=\'#exam-preparation-guide\'" style="font-weight:600; border-color:#f59e0b; color:#f59e0b;"><i class="fa-solid fa-graduation-cap"></i> How to Prepare (FIA/NAB/CSS/PMS)</button>\n                    <button type="button" class="search-chip" onclick="quickSearch(\'World Organizations\')"'
  );
}

// Add the Exam Preparation Guide Section before study-resources
if (!indexHtml.includes('id="exam-preparation-guide"')) {
  const targetSection = '    <!-- Study Resources Section -->';
  const newSection = `    <!-- Exam Preparation Guide Section (FIA, NAB, CSS, PMS, Customs, etc.) -->
    <section id="exam-preparation-guide" class="exam-guide-section">
        <div class="container">
            <div class="section-title">
                <h2>🎯 How to Prepare for Competitive Exams</h2>
                <div class="underline"></div>
                <p class="section-subtitle">
                    Step-by-step preparation roadmaps, official bare acts, syllabus blueprints, negative marking tactics, and practice tests for FIA, NAB, CSS, PMS, Customs &amp; FBR.
                </p>
            </div>

            <!-- Exam Selector Tab Nav -->
            <div class="exam-tabs-nav" id="examTabsNav">
                <!-- Dynamically populated via data_exam_guides.js -->
            </div>

            <!-- Active Exam Card Container -->
            <div id="examCardContainer">
                <!-- Rendered dynamically -->
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <a href="exam-guide.html" class="facts-cta-btn" style="background: linear-gradient(135deg, #1e3a8a, #2563eb);">
                    <i class="fa-solid fa-book-open-reader"></i> Explore Full Exam Preparation Master Guide (Deep Dive)
                </a>
            </div>
        </div>
    </section>

    <!-- Study Resources Section -->`;

  indexHtml = indexHtml.replace(targetSection, newSection);
}

fs.writeFileSync('frontend/index.html', indexHtml, 'utf8');
console.log('index.html updated successfully.');
