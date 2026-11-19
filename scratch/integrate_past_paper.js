const fs = require('fs');
const path = require('path');

// 1. Update quiz.html
const quizHtmlPath = path.join(__dirname, '..', 'frontend', 'quiz.html');
let quizHtml = fs.readFileSync(quizHtmlPath, 'utf-8');
if (!quizHtml.includes('data_fia_past_paper_2021_batch1.js')) {
  quizHtml = quizHtml.replace(
    '<script src="js/data_fia_sample_papers.js"></script>',
    '<script src="js/data_fia_sample_papers.js"></script>\r\n    <script src="js/data_fia_past_paper_2021_batch1.js"></script>'
  );
  fs.writeFileSync(quizHtmlPath, quizHtml, 'utf-8');
  console.log('Updated quiz.html with data_fia_past_paper_2021_batch1.js');
}

// 2. Update quiz.js
const quizJsPath = path.join(__dirname, '..', 'frontend', 'js', 'quiz.js');
let quizJs = fs.readFileSync(quizJsPath, 'utf-8');
if (!quizJs.includes('FPSC_FIA_2021_BATCH1_MCQS')) {
  quizJs = quizJs.replace(
    'const fiaSampleMcqs = (typeof window !== \'undefined\' && Array.isArray(window.FIA_SAMPLE_PAPERS_MCQS)) ? window.FIA_SAMPLE_PAPERS_MCQS : [];',
    'const fiaSampleMcqs = (typeof window !== \'undefined\' && Array.isArray(window.FIA_SAMPLE_PAPERS_MCQS)) ? window.FIA_SAMPLE_PAPERS_MCQS : [];\r\n    const fiaPastMcqs = (typeof window !== \'undefined\' && Array.isArray(window.FPSC_FIA_2021_BATCH1_MCQS)) ? window.FPSC_FIA_2021_BATCH1_MCQS : [];'
  );

  quizJs = quizJs.replace(
    "} else if (normCat.includes('fia assistant director sample') || normCat.includes('sample paper') || normCat.includes('cat_fia_ad_sample') || normCat.includes('fia sample')) {\r\n        pool = [...fiaSampleMcqs];\r\n        if (subCat) {\r\n            pool = pool.filter(q => (q.paperSubCategory && q.paperSubCategory.toLowerCase() === subCat.toLowerCase()) || (q.subCategory && q.subCategory.toLowerCase() === subCat.toLowerCase()));\r\n        }\r\n        if (subCat && subCat.toLowerCase().startsWith('sample paper')) {\r\n            return pool.slice(0, count);\r\n        }\r\n    }",
    "} else if (normCat.includes('fia assistant director sample') || normCat.includes('sample paper') || normCat.includes('cat_fia_ad_sample') || normCat.includes('fia sample') || normCat.includes('past paper')) {\r\n        pool = [...fiaPastMcqs, ...fiaSampleMcqs];\r\n        if (subCat) {\r\n            pool = pool.filter(q => (q.paperSubCategory && q.paperSubCategory.toLowerCase() === subCat.toLowerCase()) || (q.subCategory && q.subCategory.toLowerCase() === subCat.toLowerCase()) || (q.paperId && q.paperId.toLowerCase() === subCat.toLowerCase()));\r\n        }\r\n        if (subCat && (subCat.toLowerCase().startsWith('sample paper') || subCat.toLowerCase().includes('past paper'))) {\r\n            return pool.slice(0, count);\r\n        }\r\n    }"
  );
  fs.writeFileSync(quizJsPath, quizJs, 'utf-8');
  console.log('Updated quiz.js to support FPSC_FIA_2021_BATCH1_MCQS in pool.');
}

// 3. Update fia-sample-papers.html
const fiaHtmlPath = path.join(__dirname, '..', 'frontend', 'fia-sample-papers.html');
let fiaHtml = fs.readFileSync(fiaHtmlPath, 'utf-8');

// Include script if not already present
if (!fiaHtml.includes('data_fia_past_paper_2021_batch1.js')) {
  fiaHtml = fiaHtml.replace(
    '<script src="js/data_fia_sample_papers.js"></script>',
    '<script src="js/data_fia_sample_papers.js"></script>\r\n    <script src="js/data_fia_past_paper_2021_batch1.js"></script>'
  );
  console.log('Included data_fia_past_paper_2021_batch1.js in fia-sample-papers.html');
}

// Add Past Paper Tier Button if not present
if (!fiaHtml.includes('tierPastBtn')) {
  fiaHtml = fiaHtml.replace(
    '<button type="button" class="filter-pill" id="tierHardBtn" onclick="filterPaperTabs(\'hard\')" style="border-color: #ef4444; color: #ef4444; font-weight: 700;">🔥 Papers 11–20 (Hard / Analytical)</button>',
    '<button type="button" class="filter-pill" id="tierHardBtn" onclick="filterPaperTabs(\'hard\')" style="border-color: #ef4444; color: #ef4444; font-weight: 700;">🔥 Papers 11–20 (Hard / Analytical)</button>\r\n            <button type="button" class="filter-pill" id="tierPastBtn" onclick="filterPaperTabs(\'past\')" style="border-color: #10b981; color: #047857; font-weight: 700;"><i class="fa-solid fa-certificate"></i> ⭐ Real Past Paper (2021 Batch-1)</button>'
  );
  console.log('Added tierPastBtn in fia-sample-papers.html');
}

// Update script in fia-sample-papers.html to render past paper tabs and labels
if (!fiaHtml.includes("pm.paperNumber === 2021")) {
  fiaHtml = fiaHtml.replace(
    "if (window.activeTier === 'hard') return pm.paperNumber > 10;\r\n                    return true;",
    "if (window.activeTier === 'hard') return pm.paperNumber > 10 && pm.paperNumber <= 20;\r\n                    if (window.activeTier === 'past') return pm.paperNumber === 2021 || pm.isPastPaper;\r\n                    return true;"
  );

  fiaHtml = fiaHtml.replace(
    "const isHard = pm.paperNumber > 10;\r\n                    const isActive = pm.paperNumber === currentPaper;\r\n                    return `\r\n                        <button type=\"button\" class=\"paper-tab-btn ${isActive ? 'active' : ''}\" data-paper=\"${pm.paperNumber}\" style=\"${isHard ? 'border-color: rgba(239, 68, 68, 0.4);' : ''}\">\r\n                            <i class=\"fa-solid ${isHard ? 'fa-fire' : 'fa-file-lines'}\" style=\"${isHard ? 'color: #ef4444;' : ''}\"></i> \r\n                            Paper ${pm.paperNumber} ${isHard ? '<span style=\"font-size:0.7rem; background:#fee2e2; color:#b91c1c; padding:2px 6px; border-radius:10px; margin-left:4px; font-weight:700;\">HARD</span>' : ''}\r\n                        </button>\r\n                    `;",
    "const isPast = pm.paperNumber === 2021 || pm.isPastPaper;\r\n                    const isHard = !isPast && pm.paperNumber > 10;\r\n                    const isActive = pm.paperNumber === currentPaper;\r\n                    const label = isPast ? '⭐ 2021 Batch-1 (Real FPSC)' : `Paper ${pm.paperNumber}`;\r\n                    return `\r\n                        <button type=\"button\" class=\"paper-tab-btn ${isActive ? 'active' : ''}\" data-paper=\"${pm.paperNumber}\" style=\"${isPast ? 'border-color: #10b981; background: rgba(16, 185, 129, 0.08); font-weight: 700;' : (isHard ? 'border-color: rgba(239, 68, 68, 0.4);' : '')}\">\r\n                            <i class=\"fa-solid ${isPast ? 'fa-certificate' : (isHard ? 'fa-fire' : 'fa-file-lines')}\" style=\"${isPast ? 'color: #059669;' : (isHard ? 'color: #ef4444;' : '')}\"></i> \r\n                            ${label} ${isPast ? '<span style=\"font-size:0.7rem; background:#d1fae5; color:#065f46; padding:2px 6px; border-radius:10px; margin-left:4px; font-weight:700;\">OFFICIAL</span>' : (isHard ? '<span style=\"font-size:0.7rem; background:#fee2e2; color:#b91c1c; padding:2px 6px; border-radius:10px; margin-left:4px; font-weight:700;\">HARD</span>' : '')}\r\n                        </button>\r\n                    `;"
  );

  fiaHtml = fiaHtml.replace(
    "document.getElementById('tierHardBtn').classList.toggle('active', tier === 'hard');",
    "document.getElementById('tierHardBtn').classList.toggle('active', tier === 'hard');\r\n                const pastBtn = document.getElementById('tierPastBtn');\r\n                if (pastBtn) pastBtn.classList.toggle('active', tier === 'past');"
  );

  fiaHtml = fiaHtml.replace(
    "} else if (tier === 'hard' && currentPaper <= 10) {\r\n                    currentPaper = 11;\r\n                    renderPaper(11);\r\n                }",
    "} else if (tier === 'hard' && (currentPaper <= 10 || currentPaper === 2021)) {\r\n                    currentPaper = 11;\r\n                    renderPaper(11);\r\n                } else if (tier === 'past') {\r\n                    currentPaper = 2021;\r\n                    renderPaper(2021);\r\n                }"
  );

  fiaHtml = fiaHtml.replace(
    "if (launchBtn) {\r\n                    launchBtn.href = `quiz.html?category=cat_fia_ad_sample&subCategory=Sample%20Paper%20${paperNum}&limit=100&diff=Mixed`;\r\n                }",
    "if (launchBtn) {\r\n                    if (paperNum === 2021) {\r\n                        launchBtn.href = `quiz.html?category=cat_fia_ad_sample&subCategory=Past%20Paper%202021%20Batch-1&limit=100&diff=Mixed`;\r\n                    } else {\r\n                        launchBtn.href = `quiz.html?category=cat_fia_ad_sample&subCategory=Sample%20Paper%20${paperNum}&limit=100&diff=Mixed`;\r\n                    }\r\n                }"
  );
  console.log('Updated renderPaperTabs and renderPaper in fia-sample-papers.html');
}

fs.writeFileSync(fiaHtmlPath, fiaHtml, 'utf-8');
console.log('Completed integration across frontend files.');
