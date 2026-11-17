const fs = require('fs');
const path = require('path');
const vm = require('vm');

const jsPath = path.join(__dirname, '../frontend/js/data_digital_library.js');
const jsCode = fs.readFileSync(jsPath, 'utf8');

const sandbox = { window: {} };
vm.runInNewContext(jsCode, sandbox);
const data = sandbox.window.DIGITAL_LIBRARY_DATA;

function renderReports(items) {
    return items.map(r => `
        <article class="lib-card">
            <div class="lib-card-header">
                <span class="lib-badge badge-green">${r.category || 'Report'}</span>
                <h3 class="lib-card-title">${r.title || ''}</h3>
                <div class="lib-card-meta">
                    <span><i class="fa-solid fa-building-columns"></i> ${r.issuingBody || ''}</span>
                    <span><i class="fa-regular fa-calendar"></i> ${r.year || ''}</span>
                </div>
            </div>
            <p class="lib-card-desc">${r.summary || ''}</p>
            <div class="lib-key-points">
                <h4><i class="fa-solid fa-chart-simple"></i> Key Statistical Takeaways</h4>
                <ul>
                    ${(r.keyStats || []).map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            <div style="background:rgba(2,132,199,0.06); border-radius:8px; padding:10px 14px; margin-bottom:16px;">
                <strong style="font-size:0.85rem; color:#0369a1;"><i class="fa-solid fa-graduation-cap"></i> Exam Application:</strong>
                <p style="font-size:0.85rem; color:var(--text-dark); margin:4px 0 0; line-height:1.45;">${r.examRelevance || ''}</p>
            </div>
            <div class="lib-card-footer">
                <div class="lib-tags">
                    ${(r.tags || []).map(t => `<span class="lib-tag">#${t}</span>`).join('')}
                </div>
                <a href="${r.downloadLink || '#'}" target="_blank" rel="noopener noreferrer" class="lib-action-btn">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Official Portal
                </a>
            </div>
        </article>
    `).join('');
}

function renderEditorials(items) {
    return items.map(e => `
        <article class="lib-card">
            <div class="lib-card-header">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                    <span class="lib-badge badge-blue">${e.source || 'Editorial'} • ${e.date || ''}</span>
                    <span style="font-size:0.85rem; color:var(--text-light);"><i class="fa-solid fa-user-pen"></i> ${e.author || ''}</span>
                </div>
                <h3 class="lib-card-title" style="margin-top:8px;">${e.title || ''}</h3>
            </div>
            <p class="lib-card-desc" style="margin-bottom:14px;">${e.summary || ''}</p>
            ${(e.quoteForEssay || e.coreArgument) ? `
            <div style="background:rgba(5,150,105,0.08); border-left:4px solid #059669; padding:12px 16px; border-radius:0 8px 8px 0; margin-bottom:16px;">
                <strong style="color:#065f46; font-size:0.9rem;"><i class="fa-solid fa-quote-left"></i> Quotable Essay Hook / Core Thesis:</strong>
                <p style="font-size:0.92rem; color:var(--text-dark); margin:4px 0 0; font-family:'Merriweather',serif; line-height:1.5;">${e.quoteForEssay || e.coreArgument}</p>
            </div>` : ''}
            <div class="lib-key-points">
                <h4><i class="fa-solid fa-list-check"></i> Key Analytical Pillars &amp; Arguments</h4>
                <ul>
                    ${(e.criticalArguments || e.keyPillars || []).map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
            ${(e.theme || e.examUtility) ? `
            <div style="background:var(--bg-color); border-radius:8px; padding:12px 16px; margin-bottom:16px;">
                <strong style="font-size:0.86rem; color:#b45309;"><i class="fa-solid fa-pen-nib"></i> Civil Services Exam Relevance:</strong>
                <p style="font-size:0.86rem; color:var(--text-dark); margin:4px 0 0; line-height:1.45;">${e.theme || e.examUtility}</p>
            </div>` : ''}
            <div class="lib-card-footer">
                <div class="lib-tags">
                    ${(e.tags || []).map(t => `<span class="lib-tag">#${t}</span>`).join('')}
                </div>
                <span style="font-size:0.85rem; color:#059669; font-weight:600;"><i class="fa-solid fa-circle-check"></i> High-Yield Synthesis</span>
            </div>
        </article>
    `).join('');
}

function renderTreaties(items) {
    return items.map(t => `
        <article class="lib-card">
            <div>
                <div class="lib-card-header">
                    <span class="lib-badge badge-purple">${t.type || 'International Treaty'} • ${t.dateSigned || t.year || ''}</span>
                    <h3 class="lib-card-title">${t.name || t.title || ''}</h3>
                    <div class="lib-card-meta">
                        <span><i class="fa-solid fa-users"></i> ${t.signatories || ''}</span>
                    </div>
                </div>
                ${t.corePrinciple ? `
                <div style="background:rgba(126,34,206,0.08); border-left:4px solid #7e22ce; padding:10px 14px; border-radius:0 8px 8px 0; margin-bottom:14px;">
                    <strong style="color:#6b21a8; font-size:0.85rem;"><i class="fa-solid fa-scale-balanced"></i> Core Principle:</strong>
                    <p style="font-size:0.9rem; color:var(--text-dark); margin:2px 0 0; font-weight:600;">${t.corePrinciple}</p>
                </div>` : ''}
                <p class="lib-card-desc">${t.significance || t.summary || ''}</p>
                ${(t.coreProvisions || t.keyProvisions) ? `
                <div class="lib-key-points">
                    <h4><i class="fa-solid fa-gavel"></i> Landmark Clauses &amp; Provisions</h4>
                    <ul>
                        ${(t.coreProvisions || t.keyProvisions || []).map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>` : ''}
                ${(t.examRelevance || t.pakistanRelevance) ? `
                <div style="background:rgba(126,34,206,0.06); border-radius:8px; padding:10px 14px; margin-bottom:16px;">
                    <strong style="font-size:0.85rem; color:#6b21a8;"><i class="fa-solid fa-scale-balanced"></i> Strategic &amp; Pakistan Context:</strong>
                    <p style="font-size:0.85rem; color:var(--text-dark); margin:4px 0 0; line-height:1.45;">${t.examRelevance || t.pakistanRelevance}</p>
                </div>` : ''}
            </div>
            <div class="lib-card-footer">
                <div class="lib-tags">
                    ${(t.tags || ['International Law', 'Treaty', 'Strategic Accord']).map(tag => `<span class="lib-tag">#${tag}</span>`).join('')}
                </div>
                <span style="font-size:0.85rem; font-weight:600; color:#7e22ce;"><i class="fa-solid fa-landmark"></i> International Law</span>
            </div>
        </article>
    `).join('');
}

function renderMaps(items) {
    return items.map(m => `
        <article class="geo-card">
            <div class="geo-header">
                <div>
                    <span class="lib-badge badge-amber">${m.category || 'Geography'}</span>
                    <h3 style="font-size:1.35rem; font-weight:700; margin:6px 0 0; color:var(--text-dark);">${m.title || ''}</h3>
                </div>
                <span style="font-size:0.88rem; font-weight:600; color:#0f766e;"><i class="fa-solid fa-compass"></i> Cartographic Reference</span>
            </div>
            <p style="font-size:0.95rem; color:var(--text-dark); line-height:1.6; margin-bottom:14px;">${m.description || ''}</p>
            ${(m.examTip || m.examinerTip) ? `
            <div style="background:rgba(245,158,11,0.08); border-left:4px solid #f59e0b; padding:12px 16px; border-radius:0 8px 8px 0; margin-bottom:16px;">
                <strong style="color:#b45309; font-size:0.88rem;"><i class="fa-solid fa-circle-exclamation"></i> Examiner Note &amp; Sketching Tips:</strong>
                <p style="font-size:0.88rem; color:var(--text-dark); margin:4px 0 0; line-height:1.45;">${m.examTip || m.examinerTip}</p>
            </div>` : ''}
            <h4 style="font-size:0.92rem; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-light); margin-bottom:10px;">Strategic Geographic Nodes:</h4>
            <div class="geo-items-grid">
                ${(m.keyFeatures || m.keyItems || []).map(item => `
                    <div class="geo-item-card">
                        <h5>${item.name || ''}</h5>
                        <p><strong>Location:</strong> ${item.location || ''}</p>
                        <p><strong>Significance:</strong> ${item.importance || item.significance || ''}</p>
                        ${item.hotspot ? `<div style="font-size:0.8rem; color:#0f766e; font-weight:600; margin-top:4px;"><i class="fa-solid fa-crosshairs"></i> Hotspot: ${item.hotspot}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        </article>
    `).join('');
}

function renderNotes(items) {
    return items.map(n => `
        <article class="lib-card">
            <div class="lib-card-header">
                <span class="lib-badge badge-green">${n.subject || 'General'}</span>
                <h3 class="lib-card-title">${n.title || ''}</h3>
            </div>
            <p class="lib-card-desc">${n.summary || ''}</p>
            <div class="lib-key-points">
                <h4><i class="fa-solid fa-sitemap"></i> Core Syllabus Pillars</h4>
                <ul>
                    ${(n.coreThemes || []).map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:12px; margin-bottom:16px;">
                <div style="background:var(--bg-color); border:1px solid var(--border-color); border-radius:8px; padding:12px;">
                    <strong style="font-size:0.85rem; color:#059669;"><i class="fa-solid fa-pen"></i> High-Scoring Examiner Advice:</strong>
                    <p style="font-size:0.84rem; color:var(--text-dark); margin:4px 0 0; line-height:1.45;">${n.examinerTips || ''}</p>
                </div>
                <div style="background:var(--bg-color); border:1px solid var(--border-color); border-radius:8px; padding:12px;">
                    <strong style="font-size:0.85rem; color:#2563eb;"><i class="fa-solid fa-diagram-project"></i> Recommended Diagrams &amp; Data:</strong>
                    <p style="font-size:0.84rem; color:var(--text-dark); margin:4px 0 0; line-height:1.45;">${n.recommendedDiagrams || ''}</p>
                </div>
            </div>
            <div class="lib-card-footer">
                <span style="font-size:0.85rem; color:var(--text-light);"><i class="fa-solid fa-book-bookmark"></i> CSS &amp; PMS Compulsory Syllabus</span>
                <a href="written-prep.html" class="lib-action-btn secondary"><i class="fa-solid fa-pen-nib"></i> Practice Written Questions</a>
            </div>
        </article>
    `).join('');
}

function renderSolved(items) {
    return items.map(q => `
        <article class="solved-q-card">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
                <span class="lib-badge badge-blue">${q.subject || ''}</span>
                <span style="font-size:0.88rem; font-weight:700; color:#b91c1c; background:#fee2e2; padding:3px 10px; border-radius:6px;">${q.marks || 20} Marks Standard</span>
            </div>
            <h3 class="solved-q-title">${q.question || ''}</h3>
            <div class="solved-outline-box">
                <h4 style="font-size:0.9rem; text-transform:uppercase; color:#0f766e; margin-bottom:8px;"><i class="fa-solid fa-list-ol"></i> Model Examination Outline:</h4>
                <ol>
                    ${(q.structure || []).map(s => `<li>${s}</li>`).join('')}
                </ol>
            </div>
            <div class="solved-opening">
                <strong style="display:block; font-family:'Poppins',sans-serif; font-size:0.85rem; color:#065f46; margin-bottom:6px; text-transform:uppercase;"><i class="fa-solid fa-quote-left"></i> High-Scoring Introductory Paragraph:</strong>
                ${q.sampleOpening || ''}
            </div>
            <div class="lib-key-points">
                <h4><i class="fa-solid fa-brain"></i> Key Substantiating Arguments &amp; Stats:</h4>
                <ul>
                    ${(q.keyArguments || []).map(arg => `<li>${arg}</li>`).join('')}
                </ul>
            </div>
        </article>
    `).join('');
}

function renderVocab(items) {
    return items.map(v => `
        <div class="vocab-card">
            <div class="vocab-header">
                <span class="vocab-word">${v.word || ''}</span>
                <span class="vocab-pos">${v.pos || ''}</span>
            </div>
            <p class="vocab-def">${v.def || ''}</p>
            <div class="vocab-meta"><strong>Synonyms:</strong> ${v.syn || ''}</div>
            <div class="vocab-meta"><strong>Antonyms:</strong> ${v.ant || ''}</div>
            <div class="vocab-example">"${v.example || ''}"</div>
        </div>
    `).join('');
}

function renderPdfs(items) {
    return items.map(p => `
        <article class="pdf-card">
            <div>
                <div class="pdf-icon-row">
                    <div class="pdf-icon"><i class="fa-solid fa-file-pdf"></i></div>
                    <div>
                        <span class="lib-badge badge-red">${p.category || 'PDF'}</span>
                        <div class="pdf-meta-box">
                            <span><i class="fa-solid fa-hard-drive"></i> ${p.fileSize || ''}</span>
                            <span><i class="fa-regular fa-file-lines"></i> ${p.pages || ''}</span>
                        </div>
                    </div>
                </div>
                <h4 style="font-size:1.05rem; font-weight:700; color:var(--text-dark); margin-bottom:8px; line-height:1.4;">${p.title || ''}</h4>
                <p style="font-size:0.86rem; color:var(--text-light); line-height:1.45; margin-bottom:14px;">${p.description || ''}</p>
            </div>
            <div class="lib-card-footer">
                <div class="lib-tags">
                    ${(p.tags || []).map(t => `<span class="lib-tag">#${t}</span>`).join('')}
                </div>
                <a href="${p.filePath || '#'}" download class="lib-action-btn" style="background:#b91c1c;">
                    <i class="fa-solid fa-download"></i> Download PDF
                </a>
            </div>
        </article>
    `).join('');
}

console.log('Testing renderReports:', renderReports(data.reports).length, 'chars');
console.log('Testing renderEditorials:', renderEditorials(data.editorials).length, 'chars');
console.log('Testing renderTreaties:', renderTreaties(data.treaties).length, 'chars');
console.log('Testing renderMaps:', renderMaps(data.mapsAndGeography).length, 'chars');
console.log('Testing renderNotes:', renderNotes(data.subjectNotes).length, 'chars');
console.log('Testing renderSolved:', renderSolved(data.solvedQuestions).length, 'chars');
console.log('Testing renderVocab:', renderVocab(data.vocabularyList).length, 'chars');
console.log('Testing renderPdfs:', renderPdfs(data.downloadablePdfs).length, 'chars');
console.log('ALL RENDER FUNCTIONS EXECUTED WITH ZERO ERRORS!');
