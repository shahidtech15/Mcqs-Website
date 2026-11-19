const fs = require('fs');
const path = require('path');

// 1. Read recruitment-prep.html
const recPrepPath = path.join(__dirname, '..', 'frontend', 'recruitment-prep.html');
let recHtml = fs.readFileSync(recPrepPath, 'utf-8');

// Check if latest jobs tab is already present
if (!recHtml.includes('id="tab-latest-jobs"')) {
  // Add CSS styles for Latest Jobs tab
  const latestJobsStyles = `
        /* Latest Jobs Tab Styles */
        .latest-jobs-hero {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            color: #ffffff;
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 28px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .latest-jobs-hero::after {
            content: '';
            position: absolute;
            top: -50px;
            right: -50px;
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, rgba(225, 29, 72, 0.25) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        .badge-live-alert {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #e11d48;
            color: #ffffff;
            font-size: 0.75rem;
            font-weight: 800;
            padding: 5px 12px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 12px;
        }

        .badge-pulse-dot {
            width: 8px;
            height: 8px;
            background: #ffffff;
            border-radius: 50%;
            animation: pulseDot 1.5s infinite;
        }

        @keyframes pulseDot {
            0% { transform: scale(0.9); opacity: 0.8; }
            50% { transform: scale(1.4); opacity: 1; }
            100% { transform: scale(0.9); opacity: 0.8; }
        }

        .jobs-hero-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.85rem;
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 12px;
            color: #ffffff;
        }

        .jobs-hero-title span {
            color: #fb7185;
        }

        .jobs-hero-desc {
            font-size: 1rem;
            color: #cbd5e1;
            max-width: 800px;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .official-reference-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 0.82rem;
            color: #e2e8f0;
            flex-wrap: wrap;
        }

        .jobs-summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 20px;
            margin-bottom: 28px;
        }

        .job-highlight-card {
            background: var(--rec-card-bg);
            border: 1px solid var(--rec-border);
            border-radius: 14px;
            padding: 24px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .job-highlight-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .job-card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 14px;
        }

        .job-scale-tag {
            font-size: 0.75rem;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 6px;
            text-transform: uppercase;
        }

        .scale-asi {
            background: #e0f2fe;
            color: #0369a1;
            border: 1px solid #bae6fd;
        }

        .scale-border {
            background: #fef3c7;
            color: #b45309;
            border: 1px solid #fde68a;
        }

        .scale-constable {
            background: #dcfce7;
            color: #15803d;
            border: 1px solid #bbf7d0;
        }

        .job-vacancy-count {
            font-family: 'Outfit', sans-serif;
            font-size: 1.75rem;
            font-weight: 900;
            color: var(--rec-text-main);
            margin-bottom: 4px;
        }

        .job-post-name {
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--rec-text-main);
            margin-bottom: 10px;
        }

        .job-meta-list {
            list-style: none;
            padding: 0;
            margin: 0 0 16px 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .job-meta-item {
            font-size: 0.88rem;
            color: var(--rec-text-muted);
            display: flex;
            align-items: flex-start;
            gap: 8px;
            line-height: 1.45;
        }

        .job-meta-item i {
            margin-top: 3px;
            color: #0f766e;
        }

        .testing-channel-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(15, 118, 110, 0.08);
            border: 1px solid rgba(15, 118, 110, 0.2);
            color: #0f766e;
            font-size: 0.82rem;
            font-weight: 700;
            padding: 6px 12px;
            border-radius: 6px;
            margin-top: 6px;
        }

        .minutes-box {
            background: var(--rec-card-bg);
            border-left: 4px solid #e11d48;
            border-top: 1px solid var(--rec-border);
            border-right: 1px solid var(--rec-border);
            border-bottom: 1px solid var(--rec-border);
            border-radius: 0 12px 12px 0;
            padding: 20px 24px;
            margin-bottom: 28px;
        }

        .minutes-title {
            font-weight: 800;
            color: #9f1239;
            font-size: 1.05rem;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .minutes-quote {
            font-size: 0.92rem;
            line-height: 1.6;
            color: var(--rec-text-main);
            font-style: italic;
            background: rgba(225, 29, 72, 0.04);
            padding: 12px 16px;
            border-radius: 8px;
            margin-top: 8px;
        }

        .table-responsive {
            overflow-x: auto;
            border-radius: 12px;
            border: 1px solid var(--rec-border);
            margin-bottom: 28px;
        }

        .jobs-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
            background: var(--rec-card-bg);
        }

        .jobs-table th {
            background: var(--rec-primary-light);
            color: #0f766e;
            font-weight: 700;
            padding: 14px 16px;
            text-align: left;
            border-bottom: 2px solid rgba(15, 118, 110, 0.2);
            white-space: nowrap;
        }

        .jobs-table td {
            padding: 14px 16px;
            border-bottom: 1px solid var(--rec-border);
            color: var(--rec-text-main);
            vertical-align: middle;
        }

        .jobs-table tr:hover {
            background: rgba(15, 118, 110, 0.03);
        }
  `;

  // Insert CSS before </style>
  recHtml = recHtml.replace('    </style>', latestJobsStyles + '\r\n    </style>');

  // Add Announcement Top Bar before <main class="rec-hub-container">
  const announcementBar = `
        <!-- Live Recruitment Alert Bar -->
        <div class="job-alert-banner" onclick="switchToLatestJobsTab()" style="cursor: pointer; background: linear-gradient(135deg, #fff1f2, #ffe4e6); border: 1px solid #fecdd3; border-radius: 12px; padding: 12px 20px; margin-bottom: 22px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; box-shadow: 0 4px 12px rgba(225, 29, 72, 0.08);">
            <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <span style="background: #e11d48; color: #fff; font-weight: 800; font-size: 0.72rem; padding: 5px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px; display: inline-flex; align-items: center; gap: 6px;">
                    <span class="badge-pulse-dot"></span> Mega Recruitment Alert
                </span>
                <span style="font-weight: 700; color: #9f1239; font-size: 0.95rem;">
                    Sindh Police Upcoming: 2,000 ASI Investigation & 15,500 Constables (Border Security & General) via SPSC, SJP & IBA
                </span>
            </div>
            <span style="font-size: 0.85rem; font-weight: 700; color: #e11d48; display: inline-flex; align-items: center; gap: 5px;">
                View Official Details <i class="fas fa-arrow-right"></i>
            </span>
        </div>
`;
  recHtml = recHtml.replace('<main class="rec-hub-container">', '<main class="rec-hub-container">' + announcementBar);

  // Add header navigation link
  recHtml = recHtml.replace(
    '<a href="recruitment-prep.html" class="active" style="font-weight: 800; color: #0f766e;">Recruitment Prep</a>',
    '<a href="recruitment-prep.html" class="active" style="font-weight: 800; color: #0f766e;">Recruitment Prep</a>\r\n                <a href="recruitment-prep.html#latest-jobs" style="color: #e11d48; font-weight: 700;"><i class="fas fa-bullhorn"></i> Latest Jobs <span style="background:#ef4444; color:#fff; font-size:0.65rem; padding:1px 6px; border-radius:10px;">17,500+</span></a>'
  );

  // Add Tab button in <nav class="rec-tabs-nav">
  const newTabBtn = `
            <button class="rec-tab-btn" data-tab="tab-latest-jobs" id="tabBtnLatestJobs" style="color: #b91c1c; font-weight: 800;">
                <i class="fas fa-bullhorn" style="color: #ef4444;"></i> 7. Latest Jobs <span style="background: #ef4444; color: #fff; font-size: 0.65rem; padding: 2px 7px; border-radius: 12px; margin-left: 4px; font-weight: 800;">17,500+</span>
            </button>`;
  recHtml = recHtml.replace('            <button class="rec-tab-btn" data-tab="tab-progress">', newTabBtn + '\r\n            <button class="rec-tab-btn" data-tab="tab-progress">');

  // Construct Tab 7 Content
  const tabContent = `
        <!-- Tab 7: Latest Jobs (Sindh Police Mega Recruitment) -->
        <div id="tab-latest-jobs" class="tab-pane">
            <!-- Hero Announcement Banner -->
            <div class="latest-jobs-hero">
                <div class="badge-live-alert">
                    <span class="badge-pulse-dot"></span> Official Proposal Received by Home Department Sindh
                </div>
                <h2 class="jobs-hero-title">
                    Upcoming <span>2,000 ASI Investigation</span> & <span>15,500 Constables</span> in Sindh Police
                </h2>
                <p class="jobs-hero-desc">
                    The Home Department, Government of Sindh has formally received a comprehensive recruitment proposal from the Office of the Inspector General of Police (IGP), Sindh. The mega recruitment drive comprises 2,000 Assistant Sub-Inspectors (Investigation) and 15,500 Police Constables (including 5,000 Border Security Police Constables and 10,500 General Police Constables). These positions will be advertised and conducted through the Sindh Public Service Commission (SPSC), Sindh Job Portal (SJP), and Sukkur IBA (STS).
                </p>
                <div class="official-reference-pill">
                    <span><i class="fas fa-file-shield"></i> <strong>Authority:</strong> Office of the IGP Sindh, Karachi</span>
                    <span>&bull;</span>
                    <span><i class="fas fa-barcode"></i> <strong>Letter No:</strong> AIGP/Admn/5454-90/2026</span>
                    <span>&bull;</span>
                    <span><i class="fas fa-calendar-check"></i> <strong>Meeting Date:</strong> 29-10-2026 (Issued: 03-11-2026)</span>
                    <span>&bull;</span>
                    <span><i class="fas fa-users-gear"></i> <strong>Chaired by:</strong> Worthy IGP Sindh</span>
                </div>
            </div>

            <!-- 3 Core Vacancy Highlight Cards -->
            <div class="section-label" style="margin-bottom: 16px;">
                <i class="fas fa-layer-group"></i> Key Post Categories & Sanctioned Vacancy Breakdown
            </div>
            <div class="jobs-summary-grid">
                <!-- Card 1: ASI Investigation -->
                <div class="job-highlight-card" style="border-top: 4px solid #0284c7;">
                    <div>
                        <div class="job-card-header">
                            <span class="job-scale-tag scale-asi">BPS-11 &bull; Officer Cadre</span>
                            <span style="font-size: 0.8rem; font-weight: 700; color: #0284c7; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;">SPSC Cadre</span>
                        </div>
                        <div class="job-vacancy-count" style="color: #0284c7;">2,000 Posts</div>
                        <h3 class="job-post-name">ASI (Investigation) &bull; Sindh Police</h3>
                        <ul class="job-meta-list">
                            <li class="job-meta-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span><strong>Qualification:</strong> Graduate / Bachelor's Degree (14-Year Education) from an HEC recognized university.</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-magnifying-glass-arrow-right"></i>
                                <span><strong>Role:</strong> Specialized criminal investigation, crime scene forensics, case dockets preparation, homicide & cyber investigation.</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-building-columns"></i>
                                <span><strong>Testing Body:</strong> <strong>Sindh Public Service Commission (SPSC)</strong> for written screening, physical endurance, and viva-voce.</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-arrows-to-dot"></i>
                                <span><strong>Status:</strong> Proposal sent to Home Department for onward transmission to SPSC.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="testing-channel-badge">
                            <i class="fas fa-landmark"></i> Advertised through SPSC
                        </div>
                        <button type="button" class="btn-launch-mock" style="width: 100%; margin-top: 12px; font-size: 0.85rem; padding: 10px; background: #0284c7;" onclick="selectJobById('sindh-police-asi')">
                            <i class="fas fa-crosshairs"></i> Select Post & View Syllabus
                        </button>
                    </div>
                </div>

                <!-- Card 2: Border Security Constables -->
                <div class="job-highlight-card" style="border-top: 4px solid #d97706;">
                    <div>
                        <div class="job-card-header">
                            <span class="job-scale-tag scale-border">BPS-07 &bull; Special Unit</span>
                            <span style="font-size: 0.8rem; font-weight: 700; color: #d97706; background: #fef3c7; padding: 2px 8px; border-radius: 4px;">Border Security</span>
                        </div>
                        <div class="job-vacancy-count" style="color: #d97706;">5,000 Posts</div>
                        <h3 class="job-post-name">Border Security Police Constables</h3>
                        <ul class="job-meta-list">
                            <li class="job-meta-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span><strong>Qualification:</strong> Matriculation (SSC) from a recognized Board of Secondary Education.</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-shield-halved"></i>
                                <span><strong>Role:</strong> Securing inter-provincial border corridors, anti-bandit/anti-dacoit operations in Kacha areas, and strategic transit checkpoints.</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-gauge-high"></i>
                                <span><strong>Priority Directive:</strong> Worthy IGP directed recruitment to be pushed forward on top priority with relaxation of certain conditions.</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-network-wired"></i>
                                <span><strong>Testing Body:</strong> <strong>Sindh Job Portal (SJP) / Sukkur IBA (STS)</strong>.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="testing-channel-badge" style="color: #b45309; border-color: rgba(217, 119, 6, 0.2); background: rgba(217, 119, 6, 0.08);">
                            <i class="fas fa-id-card"></i> Advertised through SJP & STS
                        </div>
                        <button type="button" class="btn-launch-mock" style="width: 100%; margin-top: 12px; font-size: 0.85rem; padding: 10px; background: #d97706;" onclick="selectJobById('sindh-police-constable')">
                            <i class="fas fa-crosshairs"></i> Select Post & View Syllabus
                        </button>
                    </div>
                </div>

                <!-- Card 3: General Police Constables -->
                <div class="job-highlight-card" style="border-top: 4px solid #16a34a;">
                    <div>
                        <div class="job-card-header">
                            <span class="job-scale-tag scale-constable">BPS-07 &bull; General Duty</span>
                            <span style="font-size: 0.8rem; font-weight: 700; color: #16a34a; background: #dcfce7; padding: 2px 8px; border-radius: 4px;">Sindh Ranges</span>
                        </div>
                        <div class="job-vacancy-count" style="color: #16a34a;">10,500 Posts</div>
                        <h3 class="job-post-name">Police Constables (General Duty)</h3>
                        <ul class="job-meta-list">
                            <li class="job-meta-item">
                                <i class="fas fa-calculator"></i>
                                <span><strong>Formula:</strong> 7,500 existing vacancies + 3,000 anticipated retirement vacancies added = <strong>10,500 Total Vacancies</strong>.</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span><strong>Qualification:</strong> Matriculation (SSC) from a recognized Board of Secondary Education.</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-map-location-dot"></i>
                                <span><strong>Deployment:</strong> Distributed across all 6 Ranges (Karachi, Hyderabad, Mirpurkhas, Shaheed Benazirabad, Sukkur, Larkana).</span>
                            </li>
                            <li class="job-meta-item">
                                <i class="fas fa-laptop-code"></i>
                                <span><strong>Testing Body:</strong> <strong>Sukkur IBA Testing Services (STS)</strong> & dedicated Sindh Police slot on SJP.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="testing-channel-badge" style="color: #15803d; border-color: rgba(22, 163, 74, 0.2); background: rgba(22, 163, 74, 0.08);">
                            <i class="fas fa-laptop-file"></i> Advertised through IBA (STS) & SJP
                        </div>
                        <button type="button" class="btn-launch-mock" style="width: 100%; margin-top: 12px; font-size: 0.85rem; padding: 10px; background: #16a34a;" onclick="selectJobById('sindh-police-constable')">
                            <i class="fas fa-crosshairs"></i> Select Post & View Syllabus
                        </button>
                    </div>
                </div>
            </div>

            <!-- Verbatim Excerpt from Official Staff Officers' Meeting Minutes -->
            <div class="minutes-box">
                <div class="minutes-title">
                    <i class="fas fa-stamp"></i> Verbatim Record from CPO Sindh Minutes of Staff Officers' Meeting (Item 8)
                </div>
                <div class="minutes-quote">
                    "<strong>Item 8: Future Recruitment of Police Constables, Border Security Police and ASIs Investigation:</strong><br>
                    The proposals for future recruitment were discussed. A proposal for the recruitment of <strong>2,000 ASIs Investigation</strong> has been sent to the Home Department for onward transmission to the <strong>Sindh Public Service Commission</strong>. A proposal for the recruitment of <strong>5,000 Police Constables in the Border Security Police</strong> has been sent to the Government of Sindh, seeking relaxation of certain conditions. The Chair directed that the recruitment of Police Constables in the Border Security Police be pushed forward on priority, and that the new recruitment be expedited.<br>
                    For general recruitment, <strong>7,500 vacancies of Police Constable</strong> are presently available. As the process takes about one year, <strong>3,000 anticipated vacancies</strong> have been added, bringing the total to <strong>10,500</strong>."
                </div>
                <div style="font-size: 0.82rem; color: var(--rec-text-muted); margin-top: 8px;">
                    <em>Source: Office of the Inspector General of Police, Sindh Karachi (Letter No. AIGP/Admn/5454-90/2026, Agenda Item No. 8, Page 5 of 16).</em>
                </div>
            </div>

            <!-- Testing Channels & Portals Overview -->
            <div class="section-label" style="margin-bottom: 16px;">
                <i class="fas fa-network-wired"></i> Testing Agencies & Application Portals Breakdown
            </div>
            <div class="jobs-summary-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                <div class="spec-item" style="background: var(--rec-card-bg); border: 1px solid var(--rec-border);">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <span style="background: #0284c7; color: #fff; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800;">SPSC</span>
                        <h4 style="margin: 0; font-size: 1rem; color: var(--rec-text-main);">Sindh Public Service Commission</h4>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--rec-text-muted); line-height: 1.5; margin: 0 0 10px 0;">
                        Authorized statutory body for BPS-11 and officer-cadre recruitment. SPSC will manage the comprehensive written screening examination, physical standards verification, and viva-voce for the <strong>2,000 ASI Investigation</strong> posts.
                    </p>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #0284c7;"><i class="fas fa-check-circle"></i> Official Portal: spsc.gov.pk</span>
                </div>

                <div class="spec-item" style="background: var(--rec-card-bg); border: 1px solid var(--rec-border);">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <span style="background: #10b981; color: #fff; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800;">SJP</span>
                        <h4 style="margin: 0; font-size: 1rem; color: var(--rec-text-main);">Sindh Job Portal</h4>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--rec-text-muted); line-height: 1.5; margin: 0 0 10px 0;">
                        Government of Sindh's centralized employment gateway. In accordance with Item 6 of the IGP meeting, a <strong>dedicated Sindh Police slot</strong> is being integrated on the Sindh Job Portal for swift online application submission and transparent tracking.
                    </p>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #059669;"><i class="fas fa-check-circle"></i> Official Portal: sindhjobs.gov.pk</span>
                </div>

                <div class="spec-item" style="background: var(--rec-card-bg); border: 1px solid var(--rec-border);">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <span style="background: #d97706; color: #fff; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800;">IBA</span>
                        <h4 style="margin: 0; font-size: 1rem; color: var(--rec-text-main);">Sukkur IBA Testing Services (STS)</h4>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--rec-text-muted); line-height: 1.5; margin: 0 0 10px 0;">
                        Premier third-party testing agency trusted by Sindh Police for transparent physical endurance trials (1.6 km running, chest & height measurement) and standardized MCQ screening tests for the <strong>15,500 Constables</strong>.
                    </p>
                    <span style="font-size: 0.78rem; font-weight: 700; color: #d97706;"><i class="fas fa-check-circle"></i> Official Portal: apply.sts.net.pk</span>
                </div>
            </div>

            <!-- Complete Post Specifications & Comparison Matrix -->
            <div class="section-label" style="margin-bottom: 16px;">
                <i class="fas fa-table-list"></i> Comprehensive Recruitment Specifications & Criteria Matrix
            </div>
            <div class="table-responsive">
                <table class="jobs-table">
                    <thead>
                        <tr>
                            <th>Post Title</th>
                            <th>Pay Scale</th>
                            <th>Sanctioned Vacancies</th>
                            <th>Conducting Agency</th>
                            <th>Minimum Education</th>
                            <th>Physical Standards</th>
                            <th>Expected Syllabus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>ASI (Investigation)</strong></td>
                            <td><span class="job-scale-tag scale-asi">BPS-11</span></td>
                            <td><strong style="color: #0284c7; font-size: 1.05rem;">2,000 Posts</strong></td>
                            <td><strong style="color: #0284c7;">SPSC</strong> (Sindh Public Service Commission)</td>
                            <td>Graduate / Bachelor's (14 Years)</td>
                            <td>Height: 5' 5" (Chest: 33"x34.5")<br>Running: 1600m in 8 mins</td>
                            <td>English (20%), GK & CA (20%), Pak Affairs & Islamiat (20%), Everyday Science & Maths (20%), Criminal Law/CrPC (20%)</td>
                        </tr>
                        <tr>
                            <td><strong>Border Security Constables</strong></td>
                            <td><span class="job-scale-tag scale-border">BPS-07</span></td>
                            <td><strong style="color: #d97706; font-size: 1.05rem;">5,000 Posts</strong></td>
                            <td><strong>SJP & Sukkur IBA (STS)</strong></td>
                            <td>Matriculation (SSC)</td>
                            <td>Height: 5' 5" (Relaxation requested)<br>Running: 1600m in 8 mins</td>
                            <td>General Knowledge, Everyday Science, Basic Arithmetic, English Grammar & Urdu/Sindhi Language (100 Marks MCQs)</td>
                        </tr>
                        <tr>
                            <td><strong>Police Constables (General)</strong></td>
                            <td><span class="job-scale-tag scale-constable">BPS-07</span></td>
                            <td><strong style="color: #16a34a; font-size: 1.05rem;">10,500 Posts</strong> (7,500 + 3,000)</td>
                            <td><strong>Sukkur IBA (STS) & SJP</strong></td>
                            <td>Matriculation (SSC)</td>
                            <td>Height: 5' 5" (Female: 5' 0")<br>Running: 1600m in 8 mins</td>
                            <td>Basic English, Arithmetic, Sindh & Pakistan Studies, General Knowledge & Ethics (100 Marks MCQs)</td>
                        </tr>
                        <tr>
                            <td><strong>Head Constables (Wireless)</strong></td>
                            <td><span class="job-scale-tag scale-border">BPS-09</span></td>
                            <td><strong>896 Posts</strong> (T&T Sindh)</td>
                            <td>SIBA Testing Service (STS)</td>
                            <td>Intermediate (F.Sc / DAE)</td>
                            <td>Technical Standards</td>
                            <td>Telecommunications, Basic Electronics, Computer Literacy & General Science</td>
                        </tr>
                        <tr>
                            <td><strong>Driver Constables</strong></td>
                            <td><span class="job-scale-tag scale-constable">BPS-07</span></td>
                            <td><strong>4,968 Posts</strong> (T&T Sindh)</td>
                            <td>SIBA Testing Service (STS)</td>
                            <td>Matriculation + LTV/HTV License</td>
                            <td>Driving Skill Test</td>
                            <td>Traffic Rules, Motor Vehicles Ordinance, Signboards & Basic Arithmetic</td>
                        </tr>
                        <tr>
                            <td><strong>Junior Clerks</strong></td>
                            <td><span class="job-scale-tag scale-asi">BPS-11</span></td>
                            <td><strong>455 Posts</strong> (Open + 30% Promo)</td>
                            <td>Departmental / SJP</td>
                            <td>Intermediate + 30 WPM Typing</td>
                            <td>N/A</td>
                            <td>English, MS Office, General Knowledge, Basic Mathematics & Office Procedures</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Preparation Action Banner -->
            <div style="background: linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(2, 132, 199, 0.08)); border: 1px solid rgba(15, 118, 110, 0.2); border-radius: 14px; padding: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
                <div>
                    <h3 style="margin: 0 0 6px 0; color: var(--rec-text-main); font-size: 1.2rem; font-weight: 800;">
                        Begin Your Sindh Police Preparation Early on CSS Prep Central
                    </h3>
                    <p style="margin: 0; font-size: 0.92rem; color: var(--rec-text-muted);">
                        Access curated study notes, SPSC CCE solved essays, STS general knowledge MCQs, and full-length timed mock tests.
                    </p>
                </div>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    <button type="button" class="btn-launch-mock" style="background: #0284c7;" onclick="selectJobById('sindh-police-asi')">
                        <i class="fas fa-book-open"></i> Study ASI Investigation
                    </button>
                    <a href="quiz.html?category=cat_current_affairs_sts_200" class="btn-launch-mock" style="background: #059669; text-decoration: none; color: white;">
                        <i class="fas fa-bolt"></i> Practice STS MCQs
                    </a>
                    <a href="cce-essays-2025.html" class="btn-launch-mock" style="background: #7c3aed; text-decoration: none; color: white;">
                        <i class="fas fa-landmark"></i> SPSC Solved Papers
                    </a>
                </div>
            </div>
        </div>
`;

  // Insert Tab 7 right before </main>
  recHtml = recHtml.replace('    </main>', tabContent + '\r\n    </main>');

  // Add JS helper for switching tabs by ID and hash handling
  const helperJs = `
        // Switch to Latest Jobs Tab
        window.switchToLatestJobsTab = function() {
            const latestJobsBtn = document.querySelector('.rec-tab-btn[data-tab="tab-latest-jobs"]');
            if (latestJobsBtn) {
                latestJobsBtn.click();
                const elem = document.getElementById('tab-latest-jobs');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Select Job by ID helper
        window.selectJobById = function(jobId) {
            const idx = window.RECRUITMENT_JOBS_DATA.findIndex(j => j.id === jobId);
            if (idx !== -1) {
                selectJob(idx);
                // switch to syllabus tab
                const syllabusBtn = document.querySelector('.rec-tab-btn[data-tab="tab-syllabus"]');
                if (syllabusBtn) syllabusBtn.click();
                const banner = document.getElementById('activeJobBanner');
                if (banner) banner.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Handle URL hash or param
        window.addEventListener('DOMContentLoaded', () => {
            if (window.location.hash === '#latest-jobs' || window.location.search.includes('tab=latest-jobs')) {
                setTimeout(switchToLatestJobsTab, 150);
            }
        });
  `;
  recHtml = recHtml.replace('    </script>\r\n</body>', helperJs + '\r\n    </script>\r\n</body>');

  fs.writeFileSync(recPrepPath, recHtml, 'utf-8');
  console.log('Successfully updated recruitment-prep.html with Latest Jobs tab.');
} else {
  console.log('Latest jobs tab already present in recruitment-prep.html.');
}
