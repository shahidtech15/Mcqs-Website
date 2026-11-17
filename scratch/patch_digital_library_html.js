const fs = require('fs');
let html = fs.readFileSync('frontend/digital-library.html', 'utf8');

// 1. Add script tag if not present
if (!html.includes('data_synonyms_antonyms.js')) {
  const targetScript = '<script src="js/data_digital_library.js"></script>';
  const replacementScript = '<script src="js/data_digital_library.js"></script>\r\n    <script src="js/data_synonyms_antonyms.js"></script>';
  html = html.replace(targetScript, replacementScript);
  console.log('Added data_synonyms_antonyms.js script to digital-library.html');
}

// 2. Enhance tab-vocab header with quick quiz buttons and badges
const oldVocabHeader = `<div style="background: var(--white); border: 1px solid var(--border-color); border-radius: 12px; padding: 18px 24px; margin-bottom: 22px;">
                <h3 style="margin-bottom: 6px; color: var(--text-dark);"><i class="fa-solid fa-lightbulb" style="color: #059669;"></i> CSS &amp; GRE Analytical Vocabulary Bank</h3>
                <p style="font-size: 0.9rem; color: var(--text-light); margin: 0;">Master precision adjectives, formal verbs, and rhetorical terms required to elevate your written expression in CSS English Essay, Précis &amp; Current Affairs papers.</p>
            </div>`;

const newVocabHeader = `<div style="background: var(--white); border: 1px solid var(--border-color); border-radius: 12px; padding: 20px 24px; margin-bottom: 22px;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
                    <div>
                        <h3 style="margin-bottom: 6px; color: var(--text-dark); font-size: 1.25rem;"><i class="fa-solid fa-lightbulb" style="color: #059669;"></i> 2,000 High-Yield CSS &amp; GRE Vocabulary Bank</h3>
                        <p style="font-size: 0.9rem; color: var(--text-light); margin: 0;">Complete master vocabulary: 2,000 authentic academic headwords with parts of speech, dictionary definitions, synonym clusters, antonyms, and contextual examples for CSS, PMS, FPSC, PPSC, and NTS examinations.</p>
                    </div>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span class="lib-badge badge-green" style="font-size: 0.85rem; padding: 6px 12px;"><i class="fa-solid fa-circle-check"></i> 2,000 Headwords</span>
                        <span class="lib-badge badge-blue" style="font-size: 0.85rem; padding: 6px 12px;"><i class="fa-solid fa-list-check"></i> 4,000 MCQs</span>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; padding-top: 10px; border-top: 1px dashed var(--border-color);">
                    <a href="quiz.html?category=English%20Synonyms&limit=20&diff=Mixed" class="resource-btn" style="background: #10b981; color: #ffffff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.88rem; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;"><i class="fa-solid fa-spell-check"></i> Practice Synonyms Quiz (2,000 MCQs)</a>
                    <a href="quiz.html?category=English%20Antonyms&limit=20&diff=Mixed" class="resource-btn" style="background: #8b5cf6; color: #ffffff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.88rem; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;"><i class="fa-solid fa-arrows-split-up-and-left"></i> Practice Antonyms Quiz (2,000 MCQs)</a>
                    <a href="quiz.html?category=English%20Synonyms&limit=100&diff=Mixed" class="resource-btn" style="background: #059669; color: #ffffff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 0.88rem; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;"><i class="fa-solid fa-stopwatch"></i> Full 100-Question Exam Mock</a>
                </div>
            </div>`;

if (html.includes(oldVocabHeader)) {
  html = html.replace(oldVocabHeader, newVocabHeader);
  console.log('Updated tab-vocab header');
}

// 3. Update master vocabulary list mapping and renderVocab
const oldRenderVocab = `            function renderVocab(items) {
                const container = document.getElementById('vocabGrid');
                if (!container) return;
                if (!items || items.length === 0) {
                    container.innerHTML = '<p style="color:var(--text-light); padding:20px;">No vocabulary words match your search criteria.</p>';
                    return;
                }
                container.innerHTML = items.map(v => \`
                    <div class="vocab-card">
                        <div class="vocab-header">
                            <span class="vocab-word">\${v.word}</span>
                            <span class="vocab-pos">\${v.pos}</span>
                        </div>
                        <p class="vocab-def">\${v.def}</p>
                        <div class="vocab-meta"><strong>Synonyms:</strong> \${v.syn}</div>
                        <div class="vocab-meta"><strong>Antonyms:</strong> \${v.ant}</div>
                        <div class="vocab-example">"\${v.example}"</div>
                    </div>
                \`).join('');
            }`;

const newRenderVocab = `            let vocabDisplayLimit = 60;
            let currentVocabItems = [];

            function renderVocab(items) {
                const container = document.getElementById('vocabGrid');
                if (!container) return;
                currentVocabItems = items || [];
                if (!currentVocabItems || currentVocabItems.length === 0) {
                    container.innerHTML = '<p style="color:var(--text-light); padding:20px;">No vocabulary words match your search criteria.</p>';
                    return;
                }

                // If user is actively searching, render all matches; otherwise render slice with load more
                const isSearching = document.getElementById('libSearchInput') && document.getElementById('libSearchInput').value.trim().length > 0;
                const visibleItems = isSearching ? currentVocabItems : currentVocabItems.slice(0, vocabDisplayLimit);

                let cardsHtml = visibleItems.map(v => \`
                    <div class="vocab-card">
                        <div class="vocab-header">
                            <span class="vocab-word">\${v.word}</span>
                            <span class="vocab-pos">\${v.pos}</span>
                        </div>
                        <p class="vocab-def">\${v.def}</p>
                        <div class="vocab-meta"><strong>Synonyms:</strong> \${v.syn}</div>
                        <div class="vocab-meta"><strong>Antonyms:</strong> \${v.ant}</div>
                        <div class="vocab-example">"\${v.example}"</div>
                        <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.75rem; color: var(--text-light);"><i class="fa-solid fa-gauge-high"></i> \${v.difficulty || 'Medium'}</span>
                            <a href="quiz.html?category=English%20Synonyms&search=\${encodeURIComponent(v.word)}" style="font-size: 0.78rem; color: var(--primary); text-decoration: none; font-weight: 600;"><i class="fa-solid fa-circle-question"></i> Practice MCQ &rarr;</a>
                        </div>
                    </div>
                \`).join('');

                if (!isSearching && currentVocabItems.length > vocabDisplayLimit) {
                    cardsHtml += \`
                    <div style="grid-column: 1 / -1; text-align: center; padding: 20px;">
                        <button id="loadMoreVocabBtn" style="background: var(--primary); color: #ffffff; border: none; padding: 10px 24px; border-radius: 8px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-arrow-down"></i> Load More Words (Showing \${vocabDisplayLimit} of \${currentVocabItems.length})
                        </button>
                    </div>\`;
                }

                container.innerHTML = cardsHtml;

                const loadMoreBtn = document.getElementById('loadMoreVocabBtn');
                if (loadMoreBtn) {
                    loadMoreBtn.addEventListener('click', () => {
                        vocabDisplayLimit += 60;
                        renderVocab(currentVocabItems);
                    });
                }
            }`;

if (html.includes(oldRenderVocab)) {
  html = html.replace(oldRenderVocab, newRenderVocab);
  console.log('Updated renderVocab function');
}

// 4. Update initial vocabulary dataset resolution to use VOCABULARY_2000
const oldInitVocab = 'renderVocab(data.vocabularyList || []);';
const newInitVocab = `const fullVocab = (typeof window !== 'undefined' && Array.isArray(window.VOCABULARY_2000) && window.VOCABULARY_2000.length > 0)
                ? window.VOCABULARY_2000.map(v => ({
                    word: v.word,
                    pos: v.pos,
                    def: v.meaning,
                    syn: Array.isArray(v.synonyms) ? v.synonyms.join(', ') : (v.synonyms || ''),
                    ant: Array.isArray(v.antonyms) ? v.antonyms.join(', ') : (v.antonyms || ''),
                    example: v.example,
                    difficulty: v.difficulty
                }))
                : (data.vocabularyList || []);
            renderVocab(fullVocab);`;

if (html.includes(oldInitVocab)) {
  html = html.replace(oldInitVocab, newInitVocab);
  console.log('Updated initial vocabulary load');
}

// 5. Update live search to use fullVocab
const oldSearchVocab = `const filteredVocab = (data.vocabularyList || []).filter(v => filterItem(v, ['word', 'def', 'syn', 'ant', 'example']));`;
const newSearchVocab = `const filteredVocab = fullVocab.filter(v => filterItem(v, ['word', 'def', 'syn', 'ant', 'example']));`;

if (html.includes(oldSearchVocab)) {
  html = html.replace(oldSearchVocab, newSearchVocab);
  console.log('Updated search filter for fullVocab');
}

fs.writeFileSync('frontend/digital-library.html', html, 'utf8');
console.log('frontend/digital-library.html updated successfully!');
