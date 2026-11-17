const fs = require('fs');
const cssPath = 'frontend/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCss = `

/* ========================================================
   Exam Preparation Guide Styles (FIA, NAB, CSS, PMS, Customs, etc.)
   ======================================================== */
.exam-guide-section {
  padding: 60px 0;
  background-color: var(--bg-color);
  scroll-margin-top: 85px;
}

.exam-tabs-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
}

.exam-tab-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
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

.exam-tab-pill:hover {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  transform: translateY(-2px);
}

.exam-tab-pill.active {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
}

.exam-card-wrapper {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--hover-shadow);
  transition: var(--transition);
}

.exam-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 24px;
}

.exam-title-group h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 6px;
}

.exam-title-group p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.exam-badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.exam-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
}

.badge-fpsc { background: rgba(37, 99, 235, 0.12); color: #2563eb; }
.badge-bs17 { background: rgba(16, 185, 129, 0.12); color: #10b981; }
.badge-bs16 { background: rgba(245, 158, 11, 0.12); color: #f59e0b; }
.badge-ppsc { background: rgba(168, 85, 247, 0.12); color: #a855f7; }
.badge-negative { background: rgba(239, 68, 68, 0.12); color: #ef4444; }

.exam-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 28px;
}

.exam-box {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
}

.exam-box h4 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  gap: 8px;
}

.exam-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.exam-box ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-dark);
}

.exam-box ul li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--success);
  font-weight: bold;
}

.exam-box.tactics li::before {
  content: "★";
  color: var(--warning);
}

.exam-box.books li::before {
  content: "📖";
}

.exam-action-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
}

.exam-links-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.btn-exam-practice {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--secondary-color);
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  transition: var(--transition);
}

.btn-exam-practice:hover {
  background: var(--primary-color);
  transform: translateY(-2px);
}

.btn-exam-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--secondary-color);
  border: 1.5px solid var(--secondary-color);
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  transition: var(--transition);
}

.btn-exam-outline:hover {
  background: rgba(37, 99, 235, 0.08);
}

/* Master Guide Page Specific Styles */
.guide-hero {
  background: linear-gradient(135deg, #1e3a8a, #1e1b4b);
  color: #ffffff;
  padding: 60px 0 40px;
  text-align: center;
}

.guide-hero h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.guide-hero p {
  font-size: 1.15rem;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto 24px;
}

.guide-search-container {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.guide-search-input {
  width: 100%;
  padding: 14px 20px 14px 45px;
  border-radius: 50px;
  border: none;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.guide-search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 1.1rem;
}

.comparison-table-wrapper {
  overflow-x: auto;
  margin: 24px 0;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--white);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.9rem;
}

.comparison-table th {
  background: var(--primary-color);
  color: #ffffff;
  padding: 14px 16px;
  font-weight: 600;
}

.comparison-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-dark);
}

.comparison-table tr:hover td {
  background: rgba(37, 99, 235, 0.04);
}

/* Dark mode overrides for exam guide */
body.dark-mode .exam-tab-pill {
  background: #1e293b;
  border-color: #334155;
  color: #cbd5e1;
}

body.dark-mode .exam-tab-pill.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: #ffffff;
}

body.dark-mode .exam-card-wrapper {
  background: #1e293b;
  border-color: #334155;
}

body.dark-mode .exam-box {
  background: #0f172a;
  border-color: #334155;
}

body.dark-mode .btn-exam-outline {
  color: #38bdf8;
  border-color: #38bdf8;
}

body.dark-mode .btn-exam-outline:hover {
  background: rgba(56, 189, 248, 0.1);
}

body.dark-mode .comparison-table-wrapper {
  background: #1e293b;
  border-color: #334155;
}

body.dark-mode .comparison-table th {
  background: #0f172a;
}

body.dark-mode .comparison-table td {
  border-color: #334155;
  color: #cbd5e1;
}

body.dark-mode .comparison-table tr:hover td {
  background: rgba(255, 255, 255, 0.03);
}
`;

if (!css.includes('Exam Preparation Guide Styles')) {
  fs.appendFileSync(cssPath, additionalCss, 'utf8');
  console.log('Appended Exam Preparation Guide styles to style.css');
} else {
  console.log('Styles already present in style.css');
}
