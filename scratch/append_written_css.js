const fs = require('fs');
const cssPath = 'frontend/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCss = `

/* ========================================================
   Written Examination & Essay Preparation Styles
   ======================================================== */
.written-prep-section {
  padding: 60px 0;
  background-color: var(--white);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  scroll-margin-top: 85px;
}

.written-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%);
  color: #ffffff;
  padding: 65px 0 45px;
  text-align: center;
  position: relative;
}

.written-hero h1 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 14px;
  line-height: 1.25;
}

.written-hero p {
  font-size: 1.15rem;
  max-width: 840px;
  margin: 0 auto 26px;
  opacity: 0.92;
  line-height: 1.6;
}

.written-tabs-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 30px 0 25px;
}

.written-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-dark);
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: var(--card-shadow);
}

.written-tab-btn:hover {
  color: var(--secondary-color);
  border-color: var(--secondary-color);
  transform: translateY(-2px);
}

.written-tab-btn.active {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
}

/* Thesis Callout Block */
.thesis-box {
  background: rgba(37, 99, 235, 0.06);
  border-left: 5px solid var(--secondary-color);
  border-radius: 8px;
  padding: 18px 22px;
  margin: 18px 0;
}

.thesis-box strong {
  color: var(--primary-color);
  font-size: 1.05rem;
  display: block;
  margin-bottom: 6px;
}

.thesis-box p {
  margin: 0;
  font-size: 0.96rem;
  line-height: 1.6;
  color: var(--text-dark);
  font-style: italic;
}

/* Essay Outline Styling */
.essay-outline-wrapper {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 26px;
  margin: 20px 0;
  font-family: inherit;
}

.outline-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.outline-roman {
  font-weight: 700;
  color: var(--primary-color);
  margin-top: 14px;
  margin-bottom: 6px;
  font-size: 1rem;
}

.outline-alpha {
  padding-left: 22px;
  margin: 6px 0;
  color: var(--text-dark);
  font-size: 0.93rem;
  line-height: 1.5;
}

.outline-numeric {
  padding-left: 44px;
  margin: 4px 0;
  color: var(--text-light);
  font-size: 0.88rem;
}

/* PEEL Argument Formula Cards */
.peel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin: 20px 0;
}

.peel-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 18px;
  border-top: 4px solid var(--secondary-color);
}

.peel-card h4 {
  font-size: 1.05rem;
  color: var(--secondary-color);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.peel-card p {
  font-size: 0.9rem;
  color: var(--text-dark);
  line-height: 1.5;
  margin: 0;
}

/* Do's and Don'ts Grid */
.dos-donts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 22px;
  margin: 24px 0;
}

.do-card {
  background: rgba(16, 185, 129, 0.04);
  border: 1.5px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 24px;
}

.do-card h3 {
  color: var(--success);
  font-size: 1.2rem;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.dont-card {
  background: rgba(239, 68, 68, 0.04);
  border: 1.5px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  padding: 24px;
}

.dont-card h3 {
  color: var(--danger);
  font-size: 1.2rem;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.do-card ul, .dont-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.do-card ul li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 10px;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--text-dark);
}

.do-card ul li::before {
  content: "✔";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--success);
  font-weight: bold;
}

.dont-card ul li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 10px;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--text-dark);
}

.dont-card ul li::before {
  content: "✖";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--danger);
  font-weight: bold;
}

/* Précis & Comprehension Box */
.precis-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.precis-original {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 20px;
  font-size: 0.93rem;
  line-height: 1.65;
  color: var(--text-dark);
}

.precis-solution {
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 10px;
  padding: 20px;
  font-size: 0.93rem;
  line-height: 1.65;
  color: var(--text-dark);
}

.precis-meta-badge {
  display: inline-block;
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(37, 99, 235, 0.1);
  color: var(--secondary-color);
  font-weight: 600;
  margin-bottom: 10px;
}

/* Interactive Checklist Styles */
.eval-checklist-box {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 26px;
  margin: 24px 0;
}

.eval-category-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 16px 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.eval-check-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 14px;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: var(--transition);
}

.eval-check-item:hover {
  background: rgba(37, 99, 235, 0.03);
  border-color: var(--secondary-color);
}

.eval-check-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  margin-top: 3px;
  cursor: pointer;
  accent-color: var(--secondary-color);
}

.eval-check-item label {
  font-size: 0.92rem;
  color: var(--text-dark);
  line-height: 1.45;
  cursor: pointer;
  flex: 1;
}

/* Descriptive Model Answer Blocks */
.model-answer-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 30px;
  margin: 24px 0;
  box-shadow: var(--card-shadow);
}

.model-question-header {
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 14px;
  margin-bottom: 18px;
}

.model-question-header h3 {
  font-size: 1.35rem;
  color: var(--text-dark);
  line-height: 1.4;
  margin-bottom: 8px;
}

.model-answer-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.85rem;
}

.model-answer-content h4 {
  color: var(--primary-color);
  font-size: 1.1rem;
  margin: 20px 0 8px;
}

.model-answer-content p {
  font-size: 0.94rem;
  line-height: 1.7;
  color: var(--text-dark);
  margin-bottom: 14px;
}

/* Dark mode overrides for written prep */
body.dark-mode .written-prep-section {
  background-color: var(--bg-color);
  border-color: #334155;
}

body.dark-mode .written-tab-btn {
  background: #1e293b;
  border-color: #334155;
  color: #cbd5e1;
}

body.dark-mode .written-tab-btn.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #ffffff;
}

body.dark-mode .essay-outline-wrapper,
body.dark-mode .peel-card,
body.dark-mode .precis-original,
body.dark-mode .eval-checklist-box,
body.dark-mode .model-answer-card {
  background: #1e293b;
  border-color: #334155;
}

body.dark-mode .thesis-box {
  background: rgba(56, 189, 248, 0.08);
}

body.dark-mode .thesis-box strong {
  color: #38bdf8;
}

body.dark-mode .outline-roman {
  color: #38bdf8;
}

body.dark-mode .precis-solution {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.4);
}

body.dark-mode .eval-check-item {
  background: #0f172a;
  border-color: #334155;
}

body.dark-mode .model-answer-content h4 {
  color: #38bdf8;
}
`;

if (!css.includes('Written Examination & Essay Preparation Styles')) {
  fs.appendFileSync(cssPath, additionalCss, 'utf8');
  console.log('Appended Written Preparation styles to style.css');
} else {
  console.log('Styles already present in style.css');
}
