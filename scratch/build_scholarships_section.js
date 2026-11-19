const fs = require('fs');
const path = require('path');

console.log('--- Starting Scholarships Section Builder ---');

// 1. Update recruitment-prep.html
const recPrepPath = path.join(__dirname, '..', 'frontend', 'recruitment-prep.html');
let recHtml = fs.readFileSync(recPrepPath, 'utf-8');

// Check if tab-scholarships already exists
if (!recHtml.includes('id="tab-scholarships"')) {
  // CSS styles for Scholarships
  const scholarshipsStyles = `
        /* Scholarships Tab Styles */
        .scholarships-hero {
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
            color: #ffffff;
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 28px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 25px -5px rgba(49, 46, 129, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .scholarships-hero::after {
            content: '';
            position: absolute;
            top: -60px;
            right: -60px;
            width: 260px;
            height: 260px;
            background: radial-gradient(circle, rgba(129, 140, 248, 0.25) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .badge-scholarship-tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #4f46e5;
            color: #ffffff;
            font-size: 0.75rem;
            font-weight: 800;
            padding: 5px 12px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 12px;
        }

        .scholarship-filter-bar {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 22px;
            align-items: center;
        }

        .sch-filter-btn {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            color: var(--rec-text-muted);
            font-size: 0.86rem;
            font-weight: 700;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .sch-filter-btn:hover {
            border-color: #4f46e5;
            color: #4f46e5;
        }

        .sch-filter-btn.active {
            background: #4f46e5;
            border-color: #4f46e5;
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);
        }

        .sch-search-input-wrap {
            position: relative;
            margin-bottom: 24px;
        }

        .sch-search-input {
            width: 100%;
            padding: 14px 20px 14px 46px;
            border-radius: 12px;
            border: 1px solid var(--rec-border);
            background: var(--rec-card-bg);
            color: var(--rec-text-main);
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            box-sizing: border-box;
        }

        .sch-search-input:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
        }

        .sch-search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--rec-text-muted);
            font-size: 1rem;
        }

        .scholarships-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 22px;
            margin-bottom: 32px;
        }

        .sch-card {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 14px;
            padding: 24px;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            position: relative;
        }

        .sch-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            border-color: rgba(79, 70, 229, 0.3);
        }

        .sch-card-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
        }

        .sch-country-tag {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--rec-text-muted);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .sch-badge-group {
            display: flex;
            gap: 5px;
            flex-wrap: wrap;
        }

        .sch-badge-level {
            font-size: 0.72rem;
            font-weight: 800;
            padding: 3px 8px;
            border-radius: 6px;
            background: #ede9fe;
            color: #5b21b6;
            text-transform: uppercase;
        }

        .sch-badge-funded {
            font-size: 0.72rem;
            font-weight: 800;
            padding: 3px 8px;
            border-radius: 6px;
            background: #dcfce7;
            color: #166534;
            text-transform: uppercase;
        }

        .sch-title {
            font-size: 1.25rem;
            font-weight: 800;
            color: var(--rec-text-main);
            margin-bottom: 8px;
            line-height: 1.35;
        }

        .sch-stipend-box {
            background: rgba(79, 70, 229, 0.05);
            border: 1px solid rgba(79, 70, 229, 0.15);
            padding: 8px 12px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 700;
            color: #4f46e5;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .sch-coverage-list {
            list-style: none;
            padding: 0;
            margin: 0 0 16px 0;
            display: flex;
            flex-direction: column;
            gap: 7px;
        }

        .sch-coverage-item {
            font-size: 0.86rem;
            color: var(--rec-text-muted);
            display: flex;
            align-items: flex-start;
            gap: 8px;
            line-height: 1.45;
        }

        .sch-coverage-item i {
            color: #10b981;
            margin-top: 3px;
            font-size: 0.8rem;
        }

        .sch-meta-table {
            background: var(--rec-primary-light);
            border-radius: 8px;
            padding: 10px 12px;
            margin-bottom: 16px;
            font-size: 0.82rem;
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .sch-meta-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
        }

        .sch-meta-key {
            font-weight: 700;
            color: var(--rec-text-muted);
        }

        .sch-meta-val {
            font-weight: 700;
            color: var(--rec-text-main);
            text-align: right;
        }

        .sch-details-collapsible {
            display: none;
            margin-top: 14px;
            padding-top: 14px;
            border-top: 1px dashed var(--rec-border);
            font-size: 0.86rem;
            color: var(--rec-text-main);
            animation: fadeIn 0.25s ease;
        }

        .roadmap-card {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 14px;
            padding: 24px;
            margin-bottom: 28px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .step-row {
            display: flex;
            gap: 16px;
            margin-bottom: 20px;
            align-items: flex-start;
        }

        .step-num-badge {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #4f46e5;
            color: #ffffff;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 0.95rem;
        }

        .step-content h4 {
            margin: 0 0 6px 0;
            font-size: 1.05rem;
            color: var(--rec-text-main);
            font-weight: 800;
        }

        .step-content p {
            margin: 0;
            font-size: 0.9rem;
            color: var(--rec-text-muted);
            line-height: 1.55;
        }
  `;

  // Insert styles
  recHtml = recHtml.replace('    </style>', scholarshipsStyles + '\r\n    </style>');

  // Add Scholarships script reference at bottom
  recHtml = recHtml.replace(
    '<script src="js/data_fia_past_paper_2021_batch1.js"></script>',
    '<script src="js/data_fia_past_paper_2021_batch1.js"></script>\r\n    <script src="js/data_scholarships.js"></script>'
  );

  // Add nav-link in site-header
  recHtml = recHtml.replace(
    '<a href="recruitment-prep.html#latest-jobs" style="color: #e11d48; font-weight: 700;"><i class="fas fa-bullhorn"></i> Latest Jobs <span style="background:#ef4444; color:#fff; font-size:0.65rem; padding:1px 6px; border-radius:10px;">17,500+</span></a>',
    '<a href="recruitment-prep.html#latest-jobs" style="color: #e11d48; font-weight: 700;"><i class="fas fa-bullhorn"></i> Latest Jobs <span style="background:#ef4444; color:#fff; font-size:0.65rem; padding:1px 6px; border-radius:10px;">17,500+</span></a>\r\n                <a href="recruitment-prep.html#scholarships" style="color: #4f46e5; font-weight: 700;"><i class="fas fa-graduation-cap"></i> Scholarships <span style="background:#4f46e5; color:#fff; font-size:0.65rem; padding:1px 6px; border-radius:10px;">MS/PhD</span></a>'
  );

  // Add Tab Button in <nav class="rec-tabs-nav">
  const schTabBtn = `
            <button class="rec-tab-btn" data-tab="tab-scholarships" id="tabBtnScholarships" style="color: #4338ca; font-weight: 700;">
                <i class="fas fa-graduation-cap" style="color: #6366f1;"></i> 8. Scholarships <span style="background: #4338ca; color: #fff; font-size: 0.65rem; padding: 2px 7px; border-radius: 12px; margin-left: 4px; font-weight: 800;">MS / PhD</span>
            </button>`;
  recHtml = recHtml.replace('        </nav>', schTabBtn + '\r\n        </nav>');

  // Tab 8 Content
  const schTabContent = `
        <!-- Tab 8: Master's & PhD Scholarships Portal -->
        <div id="tab-scholarships" class="tab-pane">
            <!-- Hero Banner -->
            <div class="scholarships-hero">
                <div class="badge-scholarship-tag">
                    <i class="fas fa-award"></i> Fully Funded International & National Fellowships
                </div>
                <h2 class="jobs-hero-title" style="margin-bottom: 12px;">
                    Global <span>Master's (MS/MPhil)</span> & <span>PhD</span> Scholarships Portal
                </h2>
                <p class="jobs-hero-desc">
                    Explore prestigious, fully funded government scholarships, international bilateral exchange programs, and HEC fellowships. Covers 100% tuition waivers, monthly living stipends, health insurance, return airfare, and comprehensive application guidance for Pakistani and global graduates.
                </p>
                <div class="official-reference-pill">
                    <span><i class="fas fa-globe"></i> <strong>Destinations:</strong> USA, UK, Germany, EU, Japan, China, Korea, Turkey, Hungary & Australia</span>
                    <span>&bull;</span>
                    <span><i class="fas fa-coins"></i> <strong>Coverage:</strong> 100% Tuition + Living Stipends ($1,000 – $2,500/mo)</span>
                    <span>&bull;</span>
                    <span><i class="fas fa-graduation-cap"></i> <strong>Levels:</strong> Master's (MS / MPhil / MSc) & Doctoral (PhD)</span>
                </div>
            </div>

            <!-- Degree Level Filter Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 18px;">
                <div class="scholarship-filter-bar" style="margin-bottom: 0;">
                    <span style="font-size: 0.88rem; font-weight: 800; color: var(--rec-text-main);"><i class="fas fa-filter"></i> Degree:</span>
                    <button type="button" class="sch-filter-btn active" data-level="all" onclick="filterScholarshipsByLevel('all')">All Programs</button>
                    <button type="button" class="sch-filter-btn" data-level="Master's" onclick="filterScholarshipsByLevel('Master\\'s')"><i class="fas fa-user-graduate"></i> Master's (MS/MPhil)</button>
                    <button type="button" class="sch-filter-btn" data-level="PhD" onclick="filterScholarshipsByLevel('PhD')"><i class="fas fa-microscope"></i> PhD / Doctoral</button>
                </div>
                <div class="scholarship-filter-bar" style="margin-bottom: 0;">
                    <span style="font-size: 0.88rem; font-weight: 800; color: var(--rec-text-main);"><i class="fas fa-earth-americas"></i> Region:</span>
                    <button type="button" class="sch-filter-btn active" data-region="all" onclick="filterScholarshipsByRegion('all')">All Regions</button>
                    <button type="button" class="sch-filter-btn" data-region="North America" onclick="filterScholarshipsByRegion('North America')">USA</button>
                    <button type="button" class="sch-filter-btn" data-region="United Kingdom" onclick="filterScholarshipsByRegion('United Kingdom')">UK</button>
                    <button type="button" class="sch-filter-btn" data-region="Europe" onclick="filterScholarshipsByRegion('Europe')">Europe</button>
                    <button type="button" class="sch-filter-btn" data-region="Asia & Far East" onclick="filterScholarshipsByRegion('Asia & Far East')">Asia (Japan/China/Korea)</button>
                    <button type="button" class="sch-filter-btn" data-region="HEC Pakistan" onclick="filterScholarshipsByRegion('HEC Pakistan')">HEC Fellowships</button>
                </div>
            </div>

            <!-- Instant Search Input -->
            <div class="sch-search-input-wrap">
                <i class="fas fa-magnifying-glass sch-search-icon"></i>
                <input type="text" id="schSearchInput" class="sch-search-input" placeholder="Search scholarships by name, country, funding body, or keyword (e.g. Fulbright, Chevening, DAAD, MEXT, HEC, China)..." oninput="handleScholarshipSearch(this.value)">
            </div>

            <!-- Dynamic Scholarships Grid -->
            <div id="scholarshipsCardsContainer" class="scholarships-grid">
                <!-- Dynamically populated via JS -->
            </div>

            <!-- Master Scholarships Comparison Matrix Table -->
            <div class="section-label" style="margin-bottom: 16px;">
                <i class="fas fa-table-list"></i> Master Comparison Matrix: International & HEC Postgraduate Scholarships
            </div>
            <div class="table-responsive">
                <table class="jobs-table">
                    <thead>
                        <tr>
                            <th>Scholarship Program</th>
                            <th>Host Country / Body</th>
                            <th>Degree Levels</th>
                            <th>Monthly Stipend</th>
                            <th>English Requirement</th>
                            <th>Standardized Tests</th>
                            <th>Application Deadline</th>
                            <th>Official Portal</th>
                        </tr>
                    </thead>
                    <tbody id="schTableBody">
                        <!-- Populated by JS -->
                    </tbody>
                </table>
            </div>

            <!-- Comprehensive 7-Step Roadmap to Winning Master's & PhD Scholarships -->
            <div class="roadmap-card">
                <div class="section-label" style="margin-bottom: 20px;">
                    <i class="fas fa-map-location-dot"></i> Step-by-Step Strategic Roadmap: How to Win Fully-Funded MS & PhD Scholarships
                </div>

                <div class="step-row">
                    <div class="step-num-badge">1</div>
                    <div class="step-content">
                        <h4>Profile Building & Academic Groundwork (12 - 18 Months Prior)</h4>
                        <p>Maintain a strong CGPA (ideally 3.2+ on 4.0 scale). Engage in undergraduate research, finalize an impactful final year project (FYP), and publish conference or journal papers if aiming for doctoral studies. Active extracurricular leadership significantly boosts Chevening and Gates Cambridge selection.</p>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num-badge">2</div>
                    <div class="step-content">
                        <h4>Clear Standardized Examinations Early (IELTS / TOEFL / GRE / HAT)</h4>
                        <p>For US scholarships (Fulbright), take the GRE General Test early (aim for 310+). For UK, Europe, Australia, and East Asia, take IELTS Academic (target 6.5–7.5 overall with no band below 6.0). For HEC overseas and Hungarian programs, register for the HEC Higher Education Aptitude Test (HAT).</p>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num-badge">3</div>
                    <div class="step-content">
                        <h4>Craft a Winning Statement of Purpose (SOP) & Personal Statement</h4>
                        <p>Differentiate your SOP from a resume summary. Structure it with: (1) Origin of intellectual curiosity, (2) Academic & professional milestones, (3) Why this specific course and host country, and (4) Concrete long-term career goals addressing socio-economic development in Pakistan. Use specific evidence and the STAR method.</p>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num-badge">4</div>
                    <div class="step-content">
                        <h4>Formulate a Rigorous PhD Research Proposal (For Doctoral Applicants)</h4>
                        <p>A compelling doctoral proposal should be 3–5 pages: Title, Abstract, Background & Research Problem, Aims & Objectives, Literature Review & Gap Identification, Proposed Methodology, Feasibility & Resources, and Expected Impact. Align it directly with prospective supervisors' active research grants.</p>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num-badge">5</div>
                    <div class="step-content">
                        <h4>Cold Emailing & Contacting Potential Supervisors (With High Conversion)</h4>
                        <p>Read 2-3 recent peer-reviewed publications of the target professor. Email from a professional address with a concise subject line (e.g. <em>"Prospective PhD Applicant [Fall 2027]: [Your Name] – Inquiry regarding research in [Specific Topic]"</em>). Include a 3-paragraph email body explaining your background, shared research synergy, and attach your 2-page Academic CV and 1-page Research Summary.</p>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num-badge">6</div>
                    <div class="step-content">
                        <h4>Secure High-Impact Letters of Recommendation (LORs)</h4>
                        <p>Approach professors who know your academic and analytical work deeply, not just famous department heads. Provide them with your updated CV, draft SOP, and bullet points of projects you completed under their supervision to help them write detailed, personalized recommendation letters.</p>
                    </div>
                </div>

                <div class="step-row">
                    <div class="step-num-badge">7</div>
                    <div class="step-content">
                        <h4>Degree Attestation & Document Preparation</h4>
                        <p>Get all degrees and transcripts attested by the Higher Education Commission (HEC) and Inter Board Coordination Commission (IBCC) for metric/intermediate certificates. Ensure passport validity has at least 2 years remaining and obtain police character certificates where mandated.</p>
                    </div>
                </div>
            </div>
        </div>
`;

  // Insert Tab 8 right before </main>
  recHtml = recHtml.replace('    </main>', schTabContent + '\r\n    </main>');

  // Add JS functions for rendering and filtering scholarships
  const schJsFunctions = `
        // Scholarships State & Logic
        let activeSchLevel = 'all';
        let activeSchRegion = 'all';
        let activeSchSearch = '';

        function renderScholarships() {
            const container = document.getElementById('scholarshipsCardsContainer');
            const tableBody = document.getElementById('schTableBody');
            if (!container) return;

            const list = window.GLOBAL_SCHOLARSHIPS_DATA || [];
            const filtered = list.filter(item => {
                const matchLevel = (activeSchLevel === 'all') || item.levels.includes(activeSchLevel);
                const matchRegion = (activeSchRegion === 'all') || (item.region.toLowerCase() === activeSchRegion.toLowerCase());
                const q = activeSchSearch.toLowerCase();
                const matchSearch = !q || item.name.toLowerCase().includes(q) || item.country.toLowerCase().includes(q) || item.managingBody.toLowerCase().includes(q) || item.hostInstitutions.toLowerCase().includes(q);
                return matchLevel && matchRegion && matchSearch;
            });

            if (filtered.length === 0) {
                container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--rec-text-muted);"><i class="fas fa-folder-open" style="font-size: 2rem; margin-bottom: 10px; display: block;"></i>No scholarships found matching your filter criteria. Try clearing filters or searching for another country.</div>';
                if (tableBody) tableBody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:20px; color:var(--rec-text-muted);">No scholarships match current filters.</td></tr>';
                return;
            }

            container.innerHTML = filtered.map(sch => {
                const levelBadges = sch.levels.map(lvl => \`<span class="sch-badge-level">\${lvl}</span>\`).join(' ');
                return \`
                    <div class="sch-card" id="sch_card_\${sch.id}">
                        <div>
                            <div class="sch-card-top">
                                <span class="sch-country-tag">\${sch.flag} \${sch.country} &bull; \${sch.region}</span>
                                <div class="sch-badge-group">
                                    \${levelBadges}
                                    <span class="sch-badge-funded">\${sch.funding}</span>
                                </div>
                            </div>
                            <h3 class="sch-title">\${sch.name}</h3>
                            <div class="sch-stipend-box">
                                <i class="fas fa-hand-holding-dollar"></i> \${sch.stipendAmount}
                            </div>
                            <ul class="sch-coverage-list">
                                \${sch.benefits.slice(0, 4).map(b => \`<li class="sch-coverage-item"><i class="fas fa-check-circle"></i> <span>\${b}</span></li>\`).join('')}
                            </ul>
                            <div class="sch-meta-table">
                                <div class="sch-meta-row">
                                    <span class="sch-meta-key">Institutions:</span>
                                    <span class="sch-meta-val" title="\${sch.hostInstitutions}">\${sch.hostInstitutions.substring(0, 32)}...</span>
                                </div>
                                <div class="sch-meta-row">
                                    <span class="sch-meta-key">English Test:</span>
                                    <span class="sch-meta-val">\${sch.languageRequirements.substring(0, 26)}...</span>
                                </div>
                                <div class="sch-meta-row">
                                    <span class="sch-meta-key">Standardized:</span>
                                    <span class="sch-meta-val">\${sch.standardizedTests.substring(0, 26)}</span>
                                </div>
                                <div class="sch-meta-row">
                                    <span class="sch-meta-key">Deadline Window:</span>
                                    <span class="sch-meta-val" style="color: #b91c1c;">\${sch.applicationWindow}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Collapsible Detailed View -->
                        <div id="details_\${sch.id}" class="sch-details-collapsible">
                            <h4 style="margin: 0 0 6px 0; font-size: 0.95rem; color: #4338ca;"><i class="fas fa-user-check"></i> Eligibility & Requirements</h4>
                            <p style="margin: 0 0 10px 0; font-size: 0.85rem; color: var(--rec-text-muted); line-height: 1.45;">\${sch.targetAudience}</p>

                            <h4 style="margin: 0 0 6px 0; font-size: 0.95rem; color: #4338ca;"><i class="fas fa-list-ol"></i> Step-by-Step Application</h4>
                            <ol style="margin: 0 0 12px 18px; padding: 0; font-size: 0.84rem; color: var(--rec-text-muted); line-height: 1.45;">
                                \${sch.applicationProcess.map(st => \`<li>\${st}</li>\`).join('')}
                            </ol>

                            <h4 style="margin: 0 0 6px 0; font-size: 0.95rem; color: #4338ca;"><i class="fas fa-lightbulb"></i> Alumni & Evaluator Strategic Tip</h4>
                            <p style="margin: 0 0 12px 0; font-size: 0.84rem; color: var(--rec-text-main); background: rgba(79, 70, 229, 0.06); padding: 8px 12px; border-radius: 6px; line-height: 1.45;">\${sch.expertTips}</p>
                        </div>

                        <div style="display: flex; gap: 8px; margin-top: 14px;">
                            <button type="button" class="sch-filter-btn" style="flex: 1; justify-content: center; font-size: 0.82rem;" onclick="toggleScholarshipDetails('\${sch.id}', this)">
                                <i class="fas fa-chevron-down"></i> View Full Details
                            </button>
                            <a href="\${sch.officialUrl}" target="_blank" rel="noopener noreferrer" class="sch-filter-btn active" style="text-decoration: none; font-size: 0.82rem;">
                                Apply <i class="fas fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                \`;
            }).join('');

            // Render Table
            if (tableBody) {
                tableBody.innerHTML = filtered.map(sch => {
                    return \`
                        <tr>
                            <td><strong>\${sch.name}</strong></td>
                            <td>\${sch.flag} \${sch.country}</td>
                            <td>\${sch.levels.join(', ')}</td>
                            <td><strong style="color: #4f46e5;">\${sch.stipendAmount.split('(')[0]}</strong></td>
                            <td>\${sch.languageRequirements.substring(0, 30)}...</td>
                            <td>\${sch.standardizedTests}</td>
                            <td><span style="color:#b91c1c; font-weight:700;">\${sch.applicationWindow.split('&bull;')[1] || sch.applicationWindow}</span></td>
                            <td><a href="\${sch.officialUrl}" target="_blank" rel="noopener noreferrer" style="color:#4f46e5; font-weight:700; text-decoration:none;">Apply <i class="fas fa-external-link-alt"></i></a></td>
                        </tr>
                    \`;
                }).join('');
            }
        }

        window.filterScholarshipsByLevel = function(lvl) {
            activeSchLevel = lvl;
            document.querySelectorAll('[data-level]').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-level') === lvl);
            });
            renderScholarships();
        };

        window.filterScholarshipsByRegion = function(reg) {
            activeSchRegion = reg;
            document.querySelectorAll('[data-region]').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-region') === reg);
            });
            renderScholarships();
        };

        window.handleScholarshipSearch = function(query) {
            activeSchSearch = query || '';
            renderScholarships();
        };

        window.toggleScholarshipDetails = function(schId, btn) {
            const pane = document.getElementById('details_' + schId);
            if (!pane) return;
            const isVisible = pane.style.display === 'block';
            pane.style.display = isVisible ? 'none' : 'block';
            btn.innerHTML = isVisible 
                ? '<i class="fas fa-chevron-down"></i> View Full Details'
                : '<i class="fas fa-chevron-up"></i> Hide Details';
        };

        window.switchToScholarshipsTab = function() {
            const btn = document.querySelector('.rec-tab-btn[data-tab="tab-scholarships"]');
            if (btn) btn.click();
            const elem = document.getElementById('tab-scholarships');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        };
  `;

  // Insert before DOMContentLoaded handler
  recHtml = recHtml.replace('// Handle URL hash or param', schJsFunctions + '\r\n        // Handle URL hash or param');

  // Handle #scholarships in hash check
  recHtml = recHtml.replace(
    "if (window.location.hash === '#latest-jobs' || window.location.search.includes('tab=latest-jobs')) {\r\n                setTimeout(switchToLatestJobsTab, 150);\r\n            }",
    "if (window.location.hash === '#latest-jobs' || window.location.search.includes('tab=latest-jobs')) {\r\n                setTimeout(switchToLatestJobsTab, 150);\r\n            } else if (window.location.hash === '#scholarships' || window.location.search.includes('tab=scholarships')) {\r\n                setTimeout(switchToScholarshipsTab, 150);\r\n            }\r\n            if (typeof renderScholarships === 'function') renderScholarships();"
  );

  fs.writeFileSync(recPrepPath, recHtml, 'utf-8');
  console.log('Successfully added Scholarships Tab to recruitment-prep.html.');
} else {
  console.log('Scholarships tab already present in recruitment-prep.html.');
}
