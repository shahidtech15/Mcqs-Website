// scratch/build_css_essays_html.js
const fs = require('fs');
const path = require('path');
const { essays, metadata } = require('../frontend/js/data_css_essays_2021.js');

function markdownToHtml(md) {
    if (!md) return '';
    return md
        // Headings
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        // Bold and Italic
        .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Blockquotes
        .replace(/^> (.*$)/gim, '<blockquote><p>$1</p></blockquote>')
        // Unordered lists
        .replace(/^\* (.*$)/gim, '<li>$1</li>')
        // Ordered lists
        .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
        // Paragraph breaks
        .split('\n\n')
        .map(p => {
            p = p.trim();
            if (!p) return '';
            if (p.startsWith('<h') || p.startsWith('<pre') || p.startsWith('<blockquote') || p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<li')) {
                return p;
            }
            if (p.startsWith('<li>')) {
                return '<ul>' + p + '</ul>';
            }
            return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
        })
        .join('\n');
}

let essaysCardsHtml = '';

essays.forEach((essay, idx) => {
    const wordCount = essay.essayText.trim().split(/\s+/).length;
    const outlineHtml = essay.outline.map(line => {
        const isHeading = line.startsWith('I.') || line.startsWith('II.') || line.startsWith('III.') || line.startsWith('IV.') || line.startsWith('V.') || line.startsWith('VI.') || line.startsWith('VII.') || line.startsWith('VIII.');
        const isSub = line.trim().startsWith('A.') || line.trim().startsWith('B.') || line.trim().startsWith('C.') || line.trim().startsWith('D.') || line.trim().startsWith('E.');
        let style = 'padding-left: 28px; color: var(--text-color, #334155); margin-bottom: 4px;';
        if (isHeading) {
            style = 'font-weight: 700; color: #002b66; margin-top: 10px; margin-bottom: 4px; font-size: 0.96rem;';
        } else if (isSub) {
            style = 'padding-left: 18px; font-weight: 500; color: #475569; margin-bottom: 4px;';
        }
        return `<div style="${style}">${line}</div>`;
    }).join('\n');

    const formattedEssayBody = markdownToHtml(essay.essayText);

    essaysCardsHtml += `
        <!-- Essay Card ${essay.topicNumber} -->
        <article class="essay-master-card" id="essay-topic-${essay.topicNumber}" data-category="${essay.category}">
            <div class="essay-card-header">
                <div class="essay-meta-top">
                    <span class="essay-topic-badge"><i class="fa-solid fa-file-pen"></i> Topic ${essay.topicNumber} of 10</span>
                    <span class="essay-cat-badge">${essay.category}</span>
                    <span class="essay-word-badge"><i class="fa-solid fa-pen-nib"></i> ${wordCount.toLocaleString()} Words</span>
                    <span class="essay-diff-badge">${essay.difficulty}</span>
                </div>
                <h2 class="essay-title-text">${essay.title}</h2>
            </div>

            <!-- Discourse Blueprint Box -->
            <div class="discourse-blueprint-box">
                <div class="discourse-title"><i class="fa-solid fa-cubes"></i> Pedagogical Discourse Architecture (Required by FPSC):</div>
                <div class="discourse-grid">
                    <div class="discourse-item">
                        <span class="disc-label disc-narration"><i class="fa-solid fa-book-open"></i> Narration:</span>
                        <p class="disc-desc">${essay.discoursesUsed.narration}</p>
                    </div>
                    <div class="discourse-item">
                        <span class="disc-label disc-exposition"><i class="fa-solid fa-chart-pie"></i> Exposition:</span>
                        <p class="disc-desc">${essay.discoursesUsed.exposition}</p>
                    </div>
                    <div class="discourse-item">
                        <span class="disc-label disc-argumentation"><i class="fa-solid fa-scale-balanced"></i> Argumentation:</span>
                        <p class="disc-desc">${essay.discoursesUsed.argumentation}</p>
                    </div>
                    <div class="discourse-item">
                        <span class="disc-label disc-description"><i class="fa-solid fa-eye"></i> Description:</span>
                        <p class="disc-desc">${essay.discoursesUsed.description}</p>
                    </div>
                </div>
            </div>

            <!-- Thesis Statement Box -->
            <div class="thesis-statement-box">
                <div class="thesis-title"><i class="fa-solid fa-compass"></i> Explicit Academic Thesis Statement:</div>
                <p class="thesis-text">"${essay.thesisStatement}"</p>
            </div>

            <!-- Collapsible Outline Box -->
            <details class="essay-outline-details" open>
                <summary class="outline-summary-btn">
                    <span><i class="fa-solid fa-list-ol"></i> Comprehensive Formal Outline (${essay.outline.length} Structured Nodes)</span>
                    <span class="toggle-icon"><i class="fa-solid fa-chevron-down"></i></span>
                </summary>
                <div class="outline-content-body">
                    ${outlineHtml}
                </div>
            </details>

            <!-- Complete Essay Text -->
            <div class="essay-full-body">
                <div class="essay-body-header">
                    <span><i class="fa-solid fa-scroll"></i> Complete 2,500–3,000 Word Essay Text</span>
                    <button type="button" class="btn-copy-essay" onclick="copyEssayText(${essay.topicNumber})" title="Copy Essay text">
                        <i class="fa-solid fa-copy"></i> Copy Text
                    </button>
                </div>
                <div class="essay-prose-content">
                    ${formattedEssayBody}
                </div>
            </div>

            <!-- Action Bar -->
            <div class="essay-card-footer">
                <a href="#essay-quick-nav" class="btn-footer-link"><i class="fa-solid fa-arrow-up"></i> Back to Top</a>
                <button type="button" class="btn-footer-link" onclick="window.print()"><i class="fa-solid fa-print"></i> Print This Essay</button>
            </div>
        </article>
    `;
});

const pageHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Complete, authoritative CSS Competitive Examination 2021 Solved Essays Hub. All 10 topics fully written (25,457 words, 2,500-3,000 words each) with comprehensive formal outlines, thesis statements, and integration of all four discourses: exposition, argumentation, description, and narration.">
    <meta name="keywords"
        content="CSS 2021 Essay Paper Solved, FPSC English Essay 2021, CSS Essay Outlines, Meaning Purposive Education Essay, Do Not Waste Water Even If At Running Stream Essay, COVID-19 Wake Up Call Pakistani Researchers Essay, Bureaucracy Doldrums CSS Essay, Gender Equality Popular Slogan Essay, Universal Human Equality is Utopic, Pros and Cons of Globalization CSS, Intercultural Communication 3rd World War, I Fall Upon Thorns of Life I Bleed CSS">
    <title>CSS 2021 Solved Essays — All 10 Topics Complete (25,457 Words) | FPSC Competitive Examination</title>
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
            --css-burgundy: #831843;
            --css-burgundy-dark: #500724;
            --css-burgundy-light: #fdf2f8;
            --css-navy: #002b66;
            --css-blue-subtle: #eff6ff;
            --css-gold: #d97706;
            --css-gold-subtle: #fef3c7;
        }

        .dark-mode {
            --css-burgundy: #f472b6;
            --css-burgundy-dark: #371020;
            --css-burgundy-light: #200a14;
            --css-navy: #60a5fa;
            --css-blue-subtle: #0f172a;
            --css-gold: #fbbf24;
            --css-gold-subtle: #291804;
        }

        .essays-hub-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 24px 20px 80px;
        }

        /* Hero Masthead */
        .essays-hero {
            background: linear-gradient(135deg, #4c0519 0%, #831843 55%, #1e1b4b 100%);
            color: #ffffff;
            border-radius: 20px;
            padding: 42px 36px;
            margin-bottom: 28px;
            box-shadow: 0 12px 35px rgba(131, 24, 67, 0.28);
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
            background: radial-gradient(circle, rgba(251, 191, 36, 0.18) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .essays-hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(251, 191, 36, 0.2);
            border: 1px solid rgba(251, 191, 36, 0.4);
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
            color: #fce7f3;
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
            color: #4c0519 !important;
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
            color: #22c55e;
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
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-muted, #64748b);
            background: var(--bg-surface-subtle, #f8fafc);
            border: 1px solid var(--border-color, #e2e8f0);
            text-decoration: none;
            white-space: nowrap;
            transition: all 0.2s ease;
        }

        .nav-pill:hover,
        .nav-pill.active {
            background: #831843;
            color: #ffffff;
            border-color: #831843;
        }

        /* Master Essay Card */
        .essay-master-card {
            background: var(--bg-surface, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 18px;
            padding: 36px 32px;
            margin-bottom: 40px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
            scroll-margin-top: 150px;
        }

        .essay-card-header {
            border-bottom: 2px solid var(--border-color, #e2e8f0);
            padding-bottom: 18px;
            margin-bottom: 24px;
        }

        .essay-meta-top {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 12px;
            align-items: center;
        }

        .essay-topic-badge {
            background: #831843;
            color: #ffffff;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 999px;
            text-transform: uppercase;
        }

        .essay-cat-badge {
            background: #eff6ff;
            color: #1e40af;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid rgba(30, 64, 175, 0.2);
        }

        .essay-word-badge {
            background: #f0fdf4;
            color: #15803d;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid rgba(21, 128, 61, 0.2);
        }

        .essay-diff-badge {
            background: #fef3c7;
            color: #b45309;
            font-size: 0.78rem;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid rgba(180, 83, 9, 0.2);
        }

        .essay-title-text {
            font-family: 'Outfit', 'Inter', sans-serif;
            font-size: 1.7rem;
            font-weight: 800;
            color: var(--text-color, #0f172a);
            margin: 0;
            line-height: 1.35;
        }

        /* Discourse Blueprint Box */
        .discourse-blueprint-box {
            background: var(--bg-surface-subtle, #f8fafc);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 12px;
            padding: 18px 20px;
            margin-bottom: 20px;
        }

        .discourse-title {
            font-size: 0.9rem;
            font-weight: 700;
            color: var(--text-color, #0f172a);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .discourse-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 12px;
        }

        .discourse-item {
            background: var(--bg-surface, #ffffff);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 8px;
            padding: 10px 14px;
        }

        .disc-label {
            font-size: 0.76rem;
            font-weight: 700;
            text-transform: uppercase;
            padding: 2px 8px;
            border-radius: 6px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            margin-bottom: 6px;
        }

        .disc-narration { background: #fdf2f8; color: #9d174d; }
        .disc-exposition { background: #eff6ff; color: #1e40af; }
        .disc-argumentation { background: #fef3c7; color: #92400e; }
        .disc-description { background: #f0fdf4; color: #166534; }

        .disc-desc {
            font-size: 0.85rem;
            color: var(--text-color, #475569);
            line-height: 1.5;
            margin: 0;
        }

        /* Thesis Statement Box */
        .thesis-statement-box {
            border-left: 4px solid #831843;
            background: rgba(131, 24, 67, 0.06);
            padding: 16px 20px;
            border-radius: 0 12px 12px 0;
            margin-bottom: 22px;
        }

        .thesis-title {
            font-size: 0.88rem;
            font-weight: 700;
            color: #831843;
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

        /* Collapsible Formal Outline */
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

        /* Essay Full Body */
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
            background: #831843;
            color: #ffffff;
            border-color: #831843;
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
            border-left: 4px solid #831843;
            padding-left: 12px;
        }

        .essay-prose-content h4 {
            font-size: 1.1rem;
            font-weight: 700;
            color: var(--text-color, #1e293b);
            margin: 22px 0 10px 0;
        }

        .essay-prose-content blockquote {
            border-left: 4px solid #d97706;
            background: rgba(217, 119, 6, 0.07);
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
            color: #38bdf8;
            padding: 16px;
            border-radius: 10px;
            overflow-x: auto;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.82rem;
            line-height: 1.45;
            margin: 22px 0;
            border: 1px solid #1e293b;
        }

        .essay-card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid var(--border-color, #e2e8f0);
            padding-top: 16px;
            margin-top: 28px;
        }

        .btn-footer-link {
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #831843;
            background: rgba(131, 24, 67, 0.08);
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .btn-footer-link:hover {
            background: #831843;
            color: #ffffff;
        }

        /* Print Media Styles */
        @media print {
            .main-header,
            .topic-quick-nav,
            .hero-btn-row,
            .btn-copy-essay,
            .essay-card-footer,
            .site-footer,
            .theme-toggle,
            .mobile-menu {
                display: none !important;
            }

            body {
                background: #ffffff !important;
                color: #000000 !important;
                font-size: 11pt;
            }

            .essays-hub-container {
                max-width: 100% !important;
                padding: 0 !important;
            }

            .essays-hero {
                background: none !important;
                color: #000000 !important;
                padding: 10px 0 !important;
                box-shadow: none !important;
                border-bottom: 2pt solid #000000;
            }

            .essays-hero-title {
                color: #000000 !important;
                font-size: 18pt !important;
            }

            .essay-master-card {
                box-shadow: none !important;
                border: 1pt solid #cbd5e1 !important;
                padding: 20px !important;
                margin-bottom: 30px !important;
                page-break-after: always;
            }

            .essay-outline-details {
                display: block !important;
            }

            .outline-content-body {
                display: block !important;
            }
        }

        @media (max-width: 768px) {
            .essays-hero {
                padding: 28px 20px;
            }

            .essays-hero-title {
                font-size: 1.8rem;
            }

            .essay-master-card {
                padding: 22px 16px;
            }

            .essay-title-text {
                font-size: 1.35rem;
            }
        }
    </style>
</head>

<body>
    <!-- Main Top Navigation -->
    <header class="main-header">
        <div class="header-container">
            <div class="logo">
                <a href="index.html">
                    <i class="fa-solid fa-graduation-cap"></i>
                    <span>MCQs<span class="logo-accent">Portal</span></span>
                </a>
            </div>
            <nav class="nav-links">
                <a href="index.html">Home</a>
                <a href="acts-rules.html">Acts &amp; Rules</a>
                <a href="articles.html">Articles</a>
                <a href="css-essays-2021.html" class="active" style="font-weight: 700; color: #831843;">CSS Essays 2021</a>
                <a href="topic-united-nations.html">One-Topic: UN</a>
                <a href="topic-european-union.html">One-Topic: EU</a>
                <a href="topic-nato.html">One-Topic: NATO</a>
                <a href="timeline.html">Timeline</a>
                <a href="written-prep.html">Written Prep</a>
                <a href="digital-library.html">Digital Library</a>
                <a href="quiz.html">Take a Quiz</a>
                <a href="admin.html" class="admin-link">Admin Panel</a>
            </nav>
            <div class="header-actions">
                <button type="button" class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
                    <i class="fa-solid fa-moon"></i>
                </button>
                <button type="button" class="mobile-menu" aria-label="Toggle navigation drawer">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>

    <main class="essays-hub-container">
        <!-- Breadcrumb -->
        <div style="font-size: 0.85rem; color: var(--text-muted, #64748b); margin-bottom: 16px;">
            <a href="index.html" style="color: inherit; text-decoration: none;">Home</a> &gt;
            <a href="written-prep.html" style="color: inherit; text-decoration: none;">Written Prep</a> &gt;
            <span style="color: #831843; font-weight: 600;">FPSC CSS 2021 Solved Essays Hub</span>
        </div>

        <!-- HERO BANNER -->
        <header class="essays-hero">
            <div class="essays-hero-badge">
                <i class="fa-solid fa-award"></i> Federal Public Service Commission — CSS 2021
            </div>
            <h1 class="essays-hero-title">
                FPSC CSS Competitive Examination 2021 — Solved English Essays
            </h1>
            <p class="essays-hero-subtitle">
                Comprehensive, authoritative model essays written on all 10 topics of the CSS 2021 English Essay paper strictly adhering to FPSC evaluation criteria. Each essay features a complete multi-tiered formal outline, an unambiguous academic thesis statement, comprehensive 2,500–3,000 word coverage (25,457 total words), and rigorous integration of all four mandated discourses: exposition, argumentation, description, and narration.
            </p>

            <div class="essays-hero-stats">
                <span class="stat-pill"><i class="fa-solid fa-clipboard-check"></i> All 10 Topics Solved</span>
                <span class="stat-pill"><i class="fa-solid fa-book-bookmark"></i> 25,457 Total Words</span>
                <span class="stat-pill"><i class="fa-solid fa-list-ol"></i> 10 Formal Outlines</span>
                <span class="stat-pill"><i class="fa-solid fa-compass"></i> 10 Thesis Statements</span>
                <span class="stat-pill"><i class="fa-solid fa-cubes"></i> 4 Discourses per Essay</span>
                <span class="stat-pill"><i class="fa-solid fa-stopwatch"></i> 3 Hours / 100 Marks Standard</span>
            </div>

            <div class="hero-btn-row">
                <a href="#essay-quick-nav" class="btn-hero btn-hero-primary">
                    <i class="fa-solid fa-book-open-reader"></i> Jump to Essay Topics
                </a>
                <button type="button" class="btn-hero btn-hero-secondary" onclick="window.print()">
                    <i class="fa-solid fa-file-pdf"></i> Print / Save Clean PDF
                </button>
                <a href="written-prep.html" class="btn-hero btn-hero-secondary">
                    <i class="fa-solid fa-pen-nib"></i> Essay Writing Strategy Guide
                </a>
            </div>
        </header>

        <!-- FPSC EXAM CRITERIA CARD -->
        <section class="exam-criteria-card">
            <div class="criteria-title">
                <i class="fa-solid fa-check-double" style="color: #831843;"></i> FPSC CSS Essay Examination Conditions &amp; Evaluation Rubric:
            </div>
            <div class="criteria-grid">
                <div class="criteria-item">
                    <i class="fa-solid fa-circle-check"></i>
                    <div><strong>Comprehensive Length:</strong> 2,500 to 3,000 words per essay demonstrating deep thematic endurance and intellectual mastery.</div>
                </div>
                <div class="criteria-item">
                    <i class="fa-solid fa-circle-check"></i>
                    <div><strong>Multi-Discourse Requirement:</strong> Deliberate synthesis of <em>Exposition</em> (facts/theories), <em>Argumentation</em> (persuasion), <em>Description</em> (imagery), and <em>Narration</em> (anecdotes).</div>
                </div>
                <div class="criteria-item">
                    <i class="fa-solid fa-circle-check"></i>
                    <div><strong>Structural Organization:</strong> Multi-tiered formal outline with Roman numerals, clear thesis statement, and balanced PEEL paragraph transitions.</div>
                </div>
                <div class="criteria-item">
                    <i class="fa-solid fa-circle-check"></i>
                    <div><strong>Relevance &amp; Clarity:</strong> Zero empty filler; authentic empirical citations, philosophical rigor, global case studies, and Pakistan-centric policy roadmaps.</div>
                </div>
            </div>
        </section>

        <!-- STICKY TOPIC JUMP NAVIGATOR -->
        <nav class="topic-quick-nav" id="essay-quick-nav" aria-label="Topic Jump Navigation">
            <div class="quick-nav-header">
                <span><i class="fa-solid fa-list"></i> Select Essay Topic to Read:</span>
                <span>10 Complete Model Essays</span>
            </div>
            <div class="quick-nav-pills">
                <a href="#essay-topic-1" class="nav-pill">Topic 1: Water Waste (Hadith)</a>
                <a href="#essay-topic-2" class="nav-pill">Topic 2: Purposive Education</a>
                <a href="#essay-topic-3" class="nav-pill">Topic 3: COVID-19 &amp; Research</a>
                <a href="#essay-topic-4" class="nav-pill">Topic 4: Inventions &amp; Regression</a>
                <a href="#essay-topic-5" class="nav-pill">Topic 5: Human Equality is Utopic</a>
                <a href="#essay-topic-6" class="nav-pill">Topic 6: Bureaucracy Doldrums</a>
                <a href="#essay-topic-7" class="nav-pill">Topic 7: Gender Equality: Slogan</a>
                <a href="#essay-topic-8" class="nav-pill">Topic 8: Globalization Pros &amp; Cons</a>
                <a href="#essay-topic-9" class="nav-pill">Topic 9: Intercultural Communication</a>
                <a href="#essay-topic-10" class="nav-pill">Topic 10: "Thorns of Life" (Shelley)</a>
            </div>
        </nav>

        <!-- MASTER ESSAYS CONTAINER -->
        <section id="essaysContainer">
            ${essaysCardsHtml}
        </section>
    </main>

    <!-- Site Footer -->
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="logo">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span>MCQs<span class="logo-accent">Portal</span></span>
                    </div>
                    <p>Pakistan's most comprehensive, high-yield digital learning and competitive examination preparation hub for CSS, PMS, FPSC, PPSC, and NTS aspirants.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="css-essays-2021.html">CSS 2021 Solved Essays</a></li>
                        <li><a href="written-prep.html">Essay Writing Strategy</a></li>
                        <li><a href="topic-united-nations.html">One Topic: United Nations</a></li>
                        <li><a href="topic-european-union.html">One Topic: European Union</a></li>
                        <li><a href="topic-nato.html">One Topic: NATO</a></li>
                        <li><a href="digital-library.html">Digital Library</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Specialized Modules</h4>
                    <ul>
                        <li><a href="timeline.html">Chronological History</a></li>
                        <li><a href="acts-rules.html">Statutory Acts &amp; Service Rules</a></li>
                        <li><a href="grammar-rules.html">English Grammar &amp; Vocabulary</a></li>
                        <li><a href="quiz.html">Timed Quiz Simulator</a></li>
                        <li><a href="admin.html">Admin Portal</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 MCQsPortal. All rights reserved. Built for competitive exam excellence.</p>
            </div>
        </div>
    </footer>

    <!-- Load Essays Data Module -->
    <script src="js/data_css_essays_2021.js"></script>

    <script>
        function copyEssayText(topicNum) {
            if (typeof window.CSS_ESSAYS_2021_DATA !== 'undefined' && Array.isArray(window.CSS_ESSAYS_2021_DATA.essays)) {
                const target = window.CSS_ESSAYS_2021_DATA.essays.find(e => e.topicNumber === topicNum);
                if (target) {
                    const textToCopy = '# CSS 2021 Essay: ' + target.title + '\\n\\n' +
                        '## Thesis Statement:\\n' + target.thesisStatement + '\\n\\n' +
                        '## Outline:\\n' + target.outline.join('\\n') + '\\n\\n' +
                        '## Essay Text:\\n' + target.essayText;
                    
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        alert('Essay Topic ' + topicNum + ' (Full outline & text) copied to clipboard!');
                    });
                }
            }
        }

        // Active pill on scroll
        window.addEventListener('scroll', () => {
            const articles = document.querySelectorAll('.essay-master-card');
            const pills = document.querySelectorAll('.nav-pill');
            let currentId = '';

            articles.forEach(art => {
                const top = art.offsetTop;
                if (window.pageYOffset >= top - 200) {
                    currentId = art.getAttribute('id');
                }
            });

            pills.forEach(pill => {
                pill.classList.remove('active');
                if (pill.getAttribute('href') === '#' + currentId) {
                    pill.classList.add('active');
                }
            });
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const isDark = document.documentElement.classList.toggle('dark-mode');
                localStorage.setItem('mcqs_dark_mode', isDark);
            });
        }

        // Mobile drawer toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('nav-open');
            });
        }
    </script>
</body>

</html>
`;

fs.writeFileSync(path.join(__dirname, '../frontend/css-essays-2021.html'), pageHtml, 'utf8');
console.log('Successfully wrote frontend/css-essays-2021.html! File size:', pageHtml.length);
