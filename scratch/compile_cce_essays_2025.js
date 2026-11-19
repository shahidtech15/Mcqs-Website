const fs = require('fs');
const path = require('path');

const cceDir = path.join(__dirname, 'cce_2025');

function parseMarkdownTopic(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parts = raw.split('---');
  if (parts.length < 3) {
    throw new Error('Invalid frontmatter in ' + filePath);
  }
  const frontmatter = parts[1];
  const essayText = parts.slice(2).join('---').trim();

  // Parse frontmatter line by line
  const lines = frontmatter.split('\n');
  let topicNumber = 0;
  let title = '';
  let category = '';
  let difficulty = '';
  let thesisStatement = '';
  let outline = [];

  let currentKey = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('topicNumber:')) {
      topicNumber = parseInt(line.replace('topicNumber:', '').trim(), 10);
      currentKey = 'topicNumber';
    } else if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'title';
    } else if (line.startsWith('category:')) {
      category = line.replace('category:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'category';
    } else if (line.startsWith('difficulty:')) {
      difficulty = line.replace('difficulty:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'difficulty';
    } else if (line.startsWith('thesisStatement:')) {
      thesisStatement = line.replace('thesisStatement:', '').trim().replace(/^["']|["']$/g, '');
      currentKey = 'thesisStatement';
    } else if (line.startsWith('outline:')) {
      currentKey = 'outline';
    } else if (currentKey === 'outline' && line.trim().startsWith('-')) {
      const item = line.trim().replace(/^-\s*["']?|["']?$/g, '');
      outline.push(item);
    }
  }

  return {
    topicNumber,
    title,
    category,
    difficulty,
    thesisStatement,
    outline,
    essayText
  };
}

const allEssays = [];
for (let q = 1; q <= 8; q++) {
  const filePath = path.join(cceDir, `topic_${q}.md`);
  const data = parseMarkdownTopic(filePath);
  allEssays.push(data);
}

console.log('Total CCE 2025 compiled essays:', allEssays.length);
let totalWords = 0;
allEssays.forEach(e => {
  const wc = e.essayText.split(/\s+/).filter(Boolean).length;
  totalWords += wc;
  console.log(`Q${e.topicNumber}: "${e.title.substring(0, 50)}..." | Words: ${wc} | Outline: ${e.outline.length} pts`);
});
console.log('Grand total words:', totalWords);

// 1. Write JavaScript data file
const outJsPath = path.join(__dirname, '..', 'frontend', 'js', 'data_cce_essays_2025.js');
const jsContent = `/**
 * SPSC Combined Competitive Examination (CCE) 2025 - Master Solved Essays Data File
 * Sindh Public Service Commission, Hyderabad
 * Complete Solved Model Essays for All 8 Topics (1,900 - 2,400 words each)
 * Formats: Outline, Thesis Statement, Topic Sentences, Tangible & Coherent Arguments
 */

const CCE_ESSAYS_2025_DATA = ${JSON.stringify(allEssays, null, 2)};

if (typeof window !== 'undefined') {
  window.CCE_ESSAYS_2025_DATA = CCE_ESSAYS_2025_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CCE_ESSAYS_2025_DATA;
}
`;

fs.writeFileSync(outJsPath, jsContent, 'utf8');
console.log('Saved frontend/js/data_cce_essays_2025.js! File size:', fs.statSync(outJsPath).size);

// 2. Build HTML
function markdownToHtml(md) {
  let html = md;

  html = html.replace(/```([\s\S]*?)```/g, (match, p1) => {
    return `<pre class="ascii-diagram">${p1.trim()}</pre>`;
  });

  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');

  html = html.replace(/^\> (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

  html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  html = html.replace(/^---$/gim, '<hr class="essay-divider">');

  const blocks = html.split(/\n\s*\n/);
  const formattedBlocks = blocks.map(b => {
    b = b.trim();
    if (!b) return '';
    if (b.startsWith('<h') || b.startsWith('<pre') || b.startsWith('<blockquote') || b.startsWith('<hr')) {
      return b;
    }
    if (b.match(/^[0-9]+\.\s/) || b.match(/^[\-\*]\s/)) {
      const lines = b.split('\n');
      const isOrdered = lines[0].match(/^[0-9]+\.\s/);
      const tag = isOrdered ? 'ol' : 'ul';
      const items = lines.map(l => {
        const cleaned = l.replace(/^[0-9]+\.\s*|^[\-\*]\s*/, '').trim();
        return `<li>${cleaned}</li>`;
      }).join('\n');
      return `<${tag} class="essay-list">\n${items}\n</${tag}>`;
    }
    return `<p>${b.replace(/\n/g, ' ')}</p>`;
  });

  return formattedBlocks.join('\n\n');
}

let essaysCardsHtml = '';
let tocCardsHtml = '';
let quickNavPillsHtml = '';

allEssays.forEach((essay) => {
  const wordCount = essay.essayText.split(/\s+/).filter(Boolean).length;
  const qId = `topic-${essay.topicNumber}`;

  quickNavPillsHtml += `
    <a href="#${qId}" class="nav-pill">
      <span class="nav-pill-q">Q${essay.topicNumber}</span>
      <span class="nav-pill-title">${essay.title.substring(0, 24)}...</span>
    </a>
  `;

  tocCardsHtml += `
    <div class="toc-card">
      <div class="toc-card-header">
        <span class="toc-q-badge">Question ${essay.topicNumber}</span>
        <span class="toc-word-badge"><i class="fas fa-file-alt"></i> ${wordCount.toLocaleString()} words</span>
      </div>
      <h3 class="toc-card-title"><a href="#${qId}">${essay.title}</a></h3>
      <div class="toc-meta">
        <span class="toc-category"><i class="fas fa-tag"></i> ${essay.category}</span>
        <span class="toc-difficulty"><i class="fas fa-layer-group"></i> ${essay.difficulty}</span>
      </div>
      <p class="toc-thesis-preview">"${essay.thesisStatement.substring(0, 160)}..."</p>
      <a href="#${qId}" class="toc-read-btn">Read Full Essay <i class="fas fa-arrow-right"></i></a>
    </div>
  `;

  const outlineItemsHtml = essay.outline.map(line => {
    const isMain = line.match(/^[IVXLCDM]+\./);
    const isSub = line.match(/^\s+[A-Z]\./);
    const indentClass = isMain ? 'outline-main-tier' : (isSub ? 'outline-sub-tier' : 'outline-sub-sub-tier');
    return `<div class="outline-line ${indentClass}">${line}</div>`;
  }).join('\n');

  const proseHtml = markdownToHtml(essay.essayText);

  essaysCardsHtml += `
    <article id="${qId}" class="essay-master-card">
      <header class="essay-card-header">
        <div class="essay-header-top">
          <div class="essay-q-tag">
            <span class="q-number-pill">QUESTION NO. 0${essay.topicNumber}</span>
            <span class="exam-tag">SPSC CCE 2025</span>
          </div>
          <div class="essay-meta-pills">
            <span class="meta-pill category-pill"><i class="fas fa-folder"></i> ${essay.category}</span>
            <span class="meta-pill diff-pill"><i class="fas fa-chart-line"></i> ${essay.difficulty}</span>
            <span class="meta-pill words-pill"><i class="fas fa-pen-nib"></i> ${wordCount.toLocaleString()} Words</span>
          </div>
        </div>
        <h2 class="essay-topic-heading">${essay.title}</h2>
      </header>

      <!-- Formal Thesis Statement -->
      <div class="essay-thesis-box">
        <div class="thesis-title"><i class="fas fa-bullseye"></i> Articulated Thesis Statement (Introductory Paragraph)</div>
        <p class="thesis-text">"${essay.thesisStatement}"</p>
      </div>

      <!-- Formal Outline (Collapsible) -->
      <details class="essay-outline-details" open>
        <summary class="outline-summary-btn">
          <span><i class="fas fa-sitemap"></i> Formal Sketch Outline (${essay.outline.length} Structured Points)</span>
          <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
        </summary>
        <div class="outline-content-body">
          ${outlineItemsHtml}
        </div>
      </details>

      <!-- Full Essay Text -->
      <div class="essay-full-body">
        <div class="essay-body-header">
          <span><i class="fas fa-scroll"></i> Complete Essay Text (${wordCount.toLocaleString()} words • Strong Topic Sentences)</span>
          <button class="btn-copy-essay" onclick="copyEssayText('${qId}')">
            <i class="fas fa-copy"></i> Copy Full Essay
          </button>
        </div>
        <div class="essay-prose-content">
          ${proseHtml}
        </div>
      </div>

      <footer class="essay-card-footer">
        <div class="footer-left">
          <span>Sindh Public Service Commission • Combined Competitive Examination (CCE) 2025</span>
        </div>
        <div class="footer-right">
          <a href="#quick-nav" class="btn-back-nav"><i class="fas fa-arrow-up"></i> Top Navigator</a>
          <button class="btn-print-single" onclick="printSingleEssay('${qId}')"><i class="fas fa-print"></i> Print This Essay</button>
        </div>
      </footer>
    </article>
  `;
});

const fullHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Complete, authoritative SPSC Combined Competitive Examination (CCE) 2025 Solved Essays Hub. All 8 topics fully solved (${totalWords.toLocaleString()} words total, 1,900-2,400 words each) with structured outlines, clear thesis statements, strong topic sentences, and tangible arguments.">
    <meta name="keywords"
        content="SPSC CCE 2025 Essay Solved, Sindh Public Service Commission Essay 2025, Youth Bulge Brain Drain Brain Gain, Pakistan weak tax collection system FBR reforms, Forest depletion biodiversity loss Pakistan, Standardized examinations cognitive abilities test taking skills, Pakistan curriculum skills mismatch graduate employability, Pakistan multidimensional security environment peripheral governance, Public opinions indispensable not infallible, Security and liberty competing ideals">
    <title>SPSC CCE 2025 Solved Essays — All 8 Topics Complete (${totalWords.toLocaleString()} Words) | Sindh Public Service Commission</title>
    <!-- Anti-FOUC: apply dark mode before stylesheets paint -->
    <script>if(localStorage.getItem('mcqs_dark_mode')==='true')document.documentElement.classList.add('dark-mode');</script>
    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --spsc-teal: #0d9488;
            --spsc-teal-dark: #115e59;
            --spsc-teal-light: #f0fdfa;
            --spsc-navy: #0f172a;
            --spsc-gold: #f59e0b;
        }

        .dark-mode {
            --spsc-teal: #2dd4bf;
            --spsc-teal-dark: #134e4a;
            --spsc-teal-light: #042f2e;
            --spsc-navy: #38bdf8;
            --spsc-gold: #fbbf24;
        }

        .essays-hub-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 24px 20px 80px;
        }

        /* Hero Masthead */
        .essays-hero {
            background: linear-gradient(135deg, #115e59 0%, #0f766e 50%, #0f172a 100%);
            color: #ffffff;
            border-radius: 20px;
            padding: 42px 36px;
            margin-bottom: 28px;
            box-shadow: 0 12px 35px rgba(13, 148, 136, 0.28);
            position: relative;
            overflow: hidden;
        }

        .essays-hero::after {
            content: '';
            position: absolute;
            top: -40%;
            right: -10%;
            width: 440px;
            height: 440px;
            background: radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .essays-hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(245, 158, 11, 0.2);
            border: 1px solid rgba(245, 158, 11, 0.4);
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 0.82rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #fef08a;
            margin-bottom: 16px;
        }

        .essays-hero-title {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 2.3rem;
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 14px;
        }

        .essays-hero-subtitle {
            font-size: 1.05rem;
            color: #ccfbf1;
            max-width: 950px;
            line-height: 1.65;
            margin: 0 0 24px 0;
        }

        .essays-hero-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 28px;
        }

        .stat-pill {
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(8px);
            padding: 8px 16px;
            border-radius: 999px;
            font-size: 0.88rem;
            font-weight: 600;
            color: #ffffff;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .stat-pill i {
            color: #fde047;
        }

        .hero-btn-row {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }

        .btn-hero {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 22px;
            border-radius: 10px;
            font-size: 0.92rem;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
        }

        .btn-hero-primary {
            background: #fde047;
            color: #115e59 !important;
            box-shadow: 0 4px 14px rgba(253, 224, 71, 0.35);
        }

        .btn-hero-primary:hover {
            background: #fef08a;
            transform: translateY(-2px);
        }

        .btn-hero-secondary {
            background: rgba(255, 255, 255, 0.15);
            color: #ffffff !important;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-hero-secondary:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-2px);
        }

        /* Criteria & Evaluation Banner */
        .exam-criteria-card {
            background: var(--bg-surface, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 14px;
            padding: 24px;
            margin-bottom: 28px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .criteria-title {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--text-color, #0f172a);
            margin: 0 0 14px 0;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .criteria-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 12px;
        }

        .criteria-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 0.9rem;
            color: var(--text-color, #334155);
            line-height: 1.5;
        }

        .criteria-item i {
            color: #0d9488;
            margin-top: 3px;
            flex-shrink: 0;
        }

        /* Quick Navigator & Filter Pills */
        .topic-quick-nav {
            position: sticky;
            top: 72px;
            z-index: 90;
            background: var(--bg-surface, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 12px;
            padding: 12px 16px;
            margin-bottom: 32px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .quick-nav-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--text-muted, #64748b);
            text-transform: uppercase;
        }

        .quick-nav-pills {
            display: flex;
            align-items: center;
            gap: 8px;
            overflow-x: auto;
            scrollbar-width: thin;
            padding-bottom: 4px;
        }

        .nav-pill {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 14px;
            background: var(--bg-surface-subtle, #f8fafc);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 8px;
            font-size: 0.82rem;
            font-weight: 600;
            color: var(--text-color, #334155);
            text-decoration: none;
            white-space: nowrap;
            transition: all 0.2s ease;
        }

        .nav-pill:hover {
            background: #0f766e;
            color: #ffffff;
            border-color: #0f766e;
        }

        .nav-pill-q {
            background: #0f766e;
            color: #ffffff;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.72rem;
            font-weight: 700;
        }

        .nav-pill:hover .nav-pill-q {
            background: #fde047;
            color: #115e59;
        }

        /* TOC Grid */
        .toc-section-heading {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 1.4rem;
            font-weight: 700;
            color: var(--text-color, #0f172a);
            margin: 0 0 16px 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .toc-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
            gap: 18px;
            margin-bottom: 48px;
        }

        .toc-card {
            background: var(--bg-surface, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 14px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            transition: all 0.25s ease;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }

        .toc-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(13, 148, 136, 0.15);
            border-color: #0d9488;
        }

        .toc-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .toc-q-badge {
            background: #0f766e;
            color: #ffffff;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
        }

        .toc-word-badge {
            font-size: 0.78rem;
            font-weight: 600;
            color: #059669;
            background: #ecfdf5;
            padding: 3px 8px;
            border-radius: 6px;
        }

        .toc-card-title {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 1.05rem;
            font-weight: 700;
            line-height: 1.4;
            margin: 0 0 10px 0;
        }

        .toc-card-title a {
            color: var(--text-color, #0f172a);
            text-decoration: none;
            transition: color 0.2s;
        }

        .toc-card-title a:hover {
            color: #0f766e;
        }

        .toc-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            font-size: 0.78rem;
            color: var(--text-muted, #64748b);
            margin-bottom: 12px;
        }

        .toc-thesis-preview {
            font-size: 0.85rem;
            color: var(--text-color, #475569);
            line-height: 1.5;
            font-style: italic;
            margin: 0 0 16px 0;
            flex-grow: 1;
        }

        .toc-read-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            background: var(--bg-surface-subtle, #f1f5f9);
            color: #0f766e;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.2s;
        }

        .toc-read-btn:hover {
            background: #0f766e;
            color: #ffffff;
        }

        /* Master Essay Card */
        .essay-master-card {
            background: var(--bg-surface, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 18px;
            padding: 36px 32px;
            margin-bottom: 48px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
            scroll-margin-top: 130px;
        }

        .essay-card-header {
            margin-bottom: 22px;
        }

        .essay-header-top {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
        }

        .essay-q-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .q-number-pill {
            background: #0f766e;
            color: #ffffff;
            font-size: 0.82rem;
            font-weight: 800;
            padding: 5px 12px;
            border-radius: 6px;
            letter-spacing: 0.04em;
        }

        .exam-tag {
            background: #fde047;
            color: #115e59;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 6px;
        }

        .essay-meta-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .meta-pill {
            font-size: 0.78rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 6px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .category-pill {
            background: #f1f5f9;
            color: #475569;
        }

        .diff-pill {
            background: #f0fdfa;
            color: #0f766e;
        }

        .words-pill {
            background: #ecfdf5;
            color: #059669;
        }

        .essay-topic-heading {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 1.7rem;
            font-weight: 800;
            color: var(--text-color, #0f172a);
            line-height: 1.35;
            margin: 0;
        }

        /* Thesis Statement Box */
        .essay-thesis-box {
            border-left: 4px solid #0f766e;
            background: rgba(13, 148, 136, 0.06);
            padding: 16px 20px;
            border-radius: 0 12px 12px 0;
            margin-bottom: 22px;
        }

        .thesis-title {
            font-size: 0.88rem;
            font-weight: 700;
            color: #0f766e;
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 6px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .thesis-text {
            font-size: 0.98rem;
            font-weight: 600;
            font-style: italic;
            color: var(--text-color, #0f172a);
            margin: 0;
            line-height: 1.6;
        }

        /* Collapsible Outline */
        .essay-outline-details {
            background: var(--bg-surface-subtle, #f8fafc);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 12px;
            margin-bottom: 24px;
            overflow: hidden;
        }

        .outline-summary-btn {
            padding: 14px 20px;
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-color, #0f172a);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            user-select: none;
            background: var(--bg-surface-subtle, #f8fafc);
        }

        .outline-summary-btn:hover {
            background: #f1f5f9;
        }

        .outline-content-body {
            padding: 16px 24px 22px;
            border-top: 1px solid var(--border-color, #e2e8f0);
            background: var(--bg-surface, #ffffff);
            font-size: 0.92rem;
            line-height: 1.65;
        }

        .outline-line {
            margin-bottom: 4px;
        }

        .outline-main-tier {
            font-weight: 800;
            color: var(--text-color, #0f172a);
            margin-top: 10px;
        }

        .outline-sub-tier {
            font-weight: 600;
            color: #0f766e;
            padding-left: 20px;
        }

        .outline-sub-sub-tier {
            color: var(--text-muted, #64748b);
            padding-left: 36px;
        }

        /* Essay Prose Body */
        .essay-full-body {
            background: var(--bg-surface, #ffffff);
            border-top: 2px solid var(--border-color, #e2e8f0);
            padding-top: 24px;
        }

        .essay-body-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-color, #0f172a);
        }

        .btn-copy-essay {
            background: var(--bg-surface-subtle, #f8fafc);
            border: 1px solid var(--border-color, #cbd5e1);
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-color, #475569);
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .btn-copy-essay:hover {
            background: #0f766e;
            color: #ffffff;
            border-color: #0f766e;
        }

        .essay-prose-content {
            font-size: 1.02rem;
            line-height: 1.82;
            color: var(--text-color, #334155);
        }

        .essay-prose-content p {
            margin-bottom: 20px;
        }

        .essay-prose-content h3 {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 1.3rem;
            font-weight: 800;
            color: var(--text-color, #0f172a);
            margin: 32px 0 14px 0;
            border-left: 4px solid #0f766e;
            padding-left: 12px;
        }

        .essay-prose-content h4 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-color, #1e293b);
            margin: 22px 0 10px 0;
        }

        .essay-prose-content blockquote {
            border-left: 4px solid #f59e0b;
            background: rgba(245, 158, 11, 0.07);
            padding: 14px 20px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
            font-style: italic;
        }

        .essay-prose-content blockquote p {
            margin: 0;
        }

        .essay-prose-content pre.ascii-diagram {
            background: #0f172a;
            color: #2dd4bf;
            padding: 16px;
            border-radius: 10px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.82rem;
            line-height: 1.45;
            margin: 22px 0;
            border: 1px solid #134e4a;
        }

        .essay-card-footer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            margin-top: 36px;
            padding-top: 20px;
            border-top: 1px solid var(--border-color, #e2e8f0);
            font-size: 0.85rem;
            color: var(--text-muted, #64748b);
        }

        .footer-right {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .btn-back-nav, .btn-print-single {
            background: var(--bg-surface-subtle, #f1f5f9);
            border: 1px solid var(--border-color, #cbd5e1);
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-color, #334155);
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s;
        }

        .btn-back-nav:hover, .btn-print-single:hover {
            background: #0f766e;
            color: #ffffff;
            border-color: #0f766e;
        }

        /* Print Media Styles */
        @media print {
            .site-header, .topic-quick-nav, .btn-copy-essay, .btn-print-single, .btn-back-nav, .site-footer, .hero-btn-row {
                display: none !important;
            }
            .essay-master-card {
                page-break-after: always;
                box-shadow: none;
                border: none;
                padding: 0;
            }
            body {
                background: #ffffff !important;
                color: #000000 !important;
            }
        }
    </style>
</head>

<body>
    <!-- Site Navigation -->
    <header class="site-header">
        <div class="header-container">
            <a href="index.html" class="logo">
                <i class="fas fa-graduation-cap"></i>
                <span>CSS Prep Central</span>
            </a>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="written-prep.html">Written Prep</a>
                <a href="cce-essays-2025.html" class="active">CCE Essays 2025</a>
                <a href="css-essays-2026.html">CSS Essays 2026</a>
                <a href="css-essays-2021.html">CSS Essays 2021</a>
                <a href="articles.html">Current Affairs</a>
                <a href="digital-library.html">Digital Library</a>
                <a href="admin.html">Admin</a>
            </nav>
            <div class="header-actions">
                <button id="themeToggleBtn" class="theme-toggle-btn" title="Toggle Dark/Light Mode">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>
    </header>

    <main class="essays-hub-container">
        <!-- Hero Masthead -->
        <section class="essays-hero">
            <div class="essays-hero-badge">
                <i class="fas fa-landmark"></i> SINDH PUBLIC SERVICE COMMISSION, HYDERABAD • COMBINED COMPETITIVE EXAMINATION – 2025
            </div>
            <h1 class="essays-hero-title">SPSC CCE 2025 Solved Essays — All 8 Topics Complete</h1>
            <p class="essays-hero-subtitle">
                Official solved model essays for all 8 topics from the Sindh Public Service Commission CCE-2025 English Essay Paper (${totalWords.toLocaleString()} words total, 1,900 – 2,400 words each). Fully conforming to examination instructions: formal outline sketches, articulated thesis statements in introductory paragraphs, strong topic sentences leading body paragraphs, and tangible, coherent arguments.
            </p>
            <div class="essays-hero-stats">
                <div class="stat-pill"><i class="fas fa-layer-group"></i> 8 Complete Model Essays</div>
                <div class="stat-pill"><i class="fas fa-file-word"></i> ${totalWords.toLocaleString()} Total Words</div>
                <div class="stat-pill"><i class="fas fa-check-circle"></i> SPSC Examination Format</div>
                <div class="stat-pill"><i class="fas fa-book-reader"></i> Avg ~2,190 Words / Topic</div>
                <div class="stat-pill"><i class="fas fa-print"></i> Clean PDF & Print Ready</div>
            </div>
            <div class="hero-btn-row">
                <a href="#quick-nav" class="btn-hero btn-hero-primary"><i class="fas fa-list-ul"></i> Jump to Topics</a>
                <button class="btn-hero btn-hero-secondary" onclick="window.print()"><i class="fas fa-file-pdf"></i> Print / Save as PDF</button>
                <a href="css-essays-2026.html" class="btn-hero btn-hero-secondary"><i class="fas fa-graduation-cap"></i> View CSS 2026 Solved Essays</a>
            </div>
        </section>

        <!-- Official Examination Note & Requirements -->
        <section class="exam-criteria-card">
            <h2 class="criteria-title"><i class="fas fa-clipboard-list"></i> SPSC Official Examination Instructions & Evaluation Rubric</h2>
            <div class="criteria-grid">
                <div class="criteria-item">
                    <i class="fas fa-check-circle"></i>
                    <div><strong>Word Count:</strong> At least 1,500 words per topic (our model solutions deliver 1,900 – 2,400 words each).</div>
                </div>
                <div class="criteria-item">
                    <i class="fas fa-check-circle"></i>
                    <div><strong>Outline Requirement:</strong> Sketch an outline of the essay preceding the prose text.</div>
                </div>
                <div class="criteria-item">
                    <i class="fas fa-check-circle"></i>
                    <div><strong>Thesis Statement:</strong> Clear and articulated thesis statement explicitly stated in the introductory paragraph.</div>
                </div>
                <div class="criteria-item">
                    <i class="fas fa-check-circle"></i>
                    <div><strong>Topic Sentences:</strong> Explicit, strong topic sentences leading every single body paragraph with tangible arguments.</div>
                </div>
            </div>
        </section>

        <!-- Sticky Quick Navigator -->
        <nav id="quick-nav" class="topic-quick-nav">
            <div class="quick-nav-header">
                <span><i class="fas fa-compass"></i> Quick Topic Navigator</span>
                <span>8 CCE-2025 Examination Topics</span>
            </div>
            <div class="quick-nav-pills">
                ${quickNavPillsHtml}
            </div>
        </nav>

        <!-- Table of Contents Section -->
        <section class="toc-section">
            <h2 class="toc-section-heading"><i class="fas fa-th-large"></i> Examination Question Directory (Questions 1 – 8)</h2>
            <div class="toc-grid">
                ${tocCardsHtml}
            </div>
        </section>

        <!-- Master Essays Articles -->
        <section class="master-essays-section">
            ${essaysCardsHtml}
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-col">
                <h3>CSS Prep Central</h3>
                <p>The premier competitive examination portal for CSS, PMS, and CCE candidates in Pakistan.</p>
            </div>
            <div class="footer-col">
                <h4>Examination Hubs</h4>
                <ul>
                    <li><a href="cce-essays-2025.html">SPSC CCE 2025 Solved Essays</a></li>
                    <li><a href="css-essays-2026.html">CSS 2026 Solved Essays</a></li>
                    <li><a href="css-essays-2021.html">CSS 2021 Solved Essays</a></li>
                    <li><a href="written-prep.html">Written Examination Hub</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Resources</h4>
                <ul>
                    <li><a href="digital-library.html">Digital Library</a></li>
                    <li><a href="articles.html">Current Affairs</a></li>
                    <li><a href="mcqs.html">MCQ Bank</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 CSS Prep Central. Solved model papers for Sindh Public Service Commission (SPSC) Combined Competitive Examination (CCE).</p>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/data_cce_essays_2025.js"></script>
    <script>
        // Dark Mode Toggle
        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark-mode');
                const isDark = document.documentElement.classList.contains('dark-mode');
                localStorage.setItem('mcqs_dark_mode', isDark);
                themeBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            });
        }

        // Copy Essay Function
        function copyEssayText(elementId) {
            const article = document.getElementById(elementId);
            if (!article) return;
            const title = article.querySelector('.essay-topic-heading').innerText;
            const outline = article.querySelector('.outline-content-body').innerText;
            const body = article.querySelector('.essay-prose-content').innerText;
            const fullText = \`\${title}\\n\\nOUTLINE:\\n\${outline}\\n\\nESSAY:\\n\${body}\`;
            
            navigator.clipboard.writeText(fullText).then(() => {
                alert('Full CCE essay copied to clipboard successfully!');
            }).catch(err => {
                console.error('Failed to copy essay: ', err);
            });
        }

        // Single Essay Print
        function printSingleEssay(elementId) {
            const element = document.getElementById(elementId);
            if (!element) return;
            window.print();
        }
    </script>
</body>

</html>
`;

const outHtmlPath = path.join(__dirname, '..', 'frontend', 'cce-essays-2025.html');
fs.writeFileSync(outHtmlPath, fullHtml, 'utf8');
console.log('Successfully generated frontend/cce-essays-2025.html! File size:', fs.statSync(outHtmlPath).size, 'bytes');
