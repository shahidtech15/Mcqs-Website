const fs = require('fs');
const cssPath = 'frontend/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const additionalCss = `

/* ========================================================
   English Grammar Rules & Handbook Styles
   ======================================================== */
.grammar-section {
  padding: 60px 0;
  background-color: var(--bg-color);
  scroll-margin-top: 85px;
}

.grammar-hero {
  background: linear-gradient(135deg, #042f2e 0%, #115e59 50%, #0f766e 100%);
  color: #ffffff;
  padding: 65px 0 45px;
  text-align: center;
  position: relative;
}

.grammar-hero h1 {
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 14px;
  line-height: 1.25;
}

.grammar-hero p {
  font-size: 1.15rem;
  max-width: 860px;
  margin: 0 auto 26px;
  opacity: 0.92;
  line-height: 1.6;
}

.grammar-tabs-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 25px 0 35px;
}

.grammar-tab-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
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

.grammar-tab-pill:hover {
  color: #0f766e;
  border-color: #0f766e;
  transform: translateY(-2px);
}

.grammar-tab-pill.active {
  background: #0f766e;
  border-color: #0f766e;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(15, 118, 110, 0.35);
}

.grammar-rule-card {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 28px;
  margin-bottom: 25px;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
}

.grammar-rule-card:hover {
  box-shadow: var(--hover-shadow);
}

.rule-header {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 14px;
  margin-bottom: 18px;
}

.rule-header h3 {
  font-size: 1.35rem;
  color: var(--text-dark);
  margin: 0;
}

.rule-formula-box {
  background: rgba(15, 118, 110, 0.06);
  border-left: 4px solid #0f766e;
  border-radius: 6px;
  padding: 14px 18px;
  margin: 14px 0;
  font-family: inherit;
  font-size: 0.96rem;
  color: var(--text-dark);
}

.rule-formula-box strong {
  color: #0f766e;
  display: block;
  margin-bottom: 4px;
}

/* Grammar Table */
.grammar-table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin: 18px 0;
  background: var(--white);
}

.grammar-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
  text-align: left;
}

.grammar-table th {
  background: #0f766e;
  color: #ffffff;
  padding: 12px 16px;
  font-weight: 600;
}

.grammar-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-dark);
}

.grammar-table tr:hover td {
  background: rgba(15, 118, 110, 0.04);
}

/* Linguistic Sentence Breakdown Tokenizer Widget */
.sentence-breakdown-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
}

.sentence-full-text {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px dashed var(--border-color);
}

.token-stream {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 14px 0;
}

.word-token-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: var(--card-shadow);
}

.token-word {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.token-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-noun { background: #dbeafe; color: #1e40af; }
.badge-verb { background: #fee2e2; color: #b91c1c; }
.badge-adj { background: #fef3c7; color: #b45309; }
.badge-adv { background: #e0e7ff; color: #4338ca; }
.badge-prep { background: #dcfce7; color: #15803d; }
.badge-pron { background: #f3e8ff; color: #6b21a8; }
.badge-conj { background: #ffedd5; color: #c2410c; }
.badge-art { background: #f1f5f9; color: #475569; }

/* Fixed Prepositions Grid */
.fixed-prep-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
  margin: 18px 0;
}

.fixed-prep-item {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.9rem;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
}

.fixed-prep-item:hover {
  border-color: #0f766e;
  transform: translateY(-2px);
  box-shadow: var(--card-shadow);
}

.fixed-prep-bold {
  font-weight: 700;
  color: #0f766e;
}

/* Practice Drills Accordion */
.grammar-drill-item {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 18px;
  margin-bottom: 14px;
}

.drill-question {
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.drill-reveal-btn {
  background: transparent;
  border: 1px solid #0f766e;
  color: #0f766e;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.drill-reveal-btn:hover {
  background: #0f766e;
  color: #ffffff;
}

.drill-solution {
  margin-top: 12px;
  padding: 12px;
  background: rgba(16, 185, 129, 0.08);
  border-left: 3px solid var(--success);
  border-radius: 4px;
  font-size: 0.92rem;
  color: var(--text-dark);
  display: none;
}

/* Dark mode overrides for grammar handbook */
body.dark-mode .grammar-section {
  background-color: var(--bg-color);
}

body.dark-mode .grammar-tab-pill {
  background: #1e293b;
  border-color: #334155;
  color: #cbd5e1;
}

body.dark-mode .grammar-tab-pill.active {
  background: #0f766e;
  border-color: #0f766e;
  color: #ffffff;
}

body.dark-mode .grammar-rule-card,
body.dark-mode .sentence-breakdown-card,
body.dark-mode .grammar-table-wrapper,
body.dark-mode .grammar-drill-item {
  background: #1e293b;
  border-color: #334155;
}

body.dark-mode .grammar-table th {
  background: #042f2e;
}

body.dark-mode .grammar-table td {
  border-color: #334155;
  color: #cbd5e1;
}

body.dark-mode .rule-formula-box {
  background: rgba(15, 118, 110, 0.12);
  color: #cbd5e1;
}

body.dark-mode .rule-formula-box strong {
  color: #2dd4bf;
}

body.dark-mode .word-token-unit,
body.dark-mode .fixed-prep-item {
  background: #0f172a;
  border-color: #334155;
  color: #cbd5e1;
}

body.dark-mode .fixed-prep-bold {
  color: #2dd4bf;
}

body.dark-mode .token-word {
  color: #e2e8f0;
}

body.dark-mode .drill-reveal-btn {
  color: #2dd4bf;
  border-color: #2dd4bf;
}

body.dark-mode .drill-reveal-btn:hover {
  background: #0f766e;
  color: #ffffff;
}
`;

if (!css.includes('English Grammar Rules & Handbook Styles')) {
  fs.appendFileSync(cssPath, additionalCss, 'utf8');
  console.log('Appended English Grammar Rules styles to style.css');
} else {
  console.log('Styles already present in style.css');
}
