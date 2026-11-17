document.addEventListener('DOMContentLoaded', () => {

    // --- Tab Switching Logic ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active-tab'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active-tab');
        });
    });

    // --- Helper for Copying ---
    window.copyText = function(elementId, btn) {
        const text = document.getElementById(elementId).innerText;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = btn.innerText;
            btn.innerText = 'Copied!';
            setTimeout(() => { btn.innerText = originalText; }, 2000);
        });
    };

    // ==============================================
    // TAB 1: PROCEDURE NAVIGATOR LOGIC
    // ==============================================
    const navForm = document.getElementById('navigator-form');
    
    navForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const goal = document.getElementById('legal-goal').value;
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const incidentDate = document.getElementById('incident-date').value;
        const fileUpload = document.getElementById('document-upload');
        const filesCount = fileUpload.files.length;
        const legalContext = document.getElementById('legal-context').value;

        document.getElementById('nav-empty-state').classList.add('hidden');
        document.getElementById('nav-results-state').classList.add('hidden');
        document.getElementById('nav-loading-state').classList.remove('hidden');

        if (window.innerWidth < 900) {
            document.getElementById('procedure-navigator').scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
            generateNavResponse(goal, country, state, city, incidentDate, filesCount, legalContext);
            document.getElementById('nav-loading-state').classList.add('hidden');
            document.getElementById('nav-results-state').classList.remove('hidden');
        }, 2000);
    });

    function generateNavResponse(goal, country, state, city, date, filesCount, legalContext) {
        let docsInfo = filesCount > 0 ? `<br><strong>Documents Provided:</strong> ${filesCount} file(s) attached` : '';
        let contextInfo = legalContext.trim() !== '' ? `<br><br><strong>Provided Legal Context:</strong><br> <span style="color: var(--text-secondary);">${legalContext}</span>` : '';
        
        document.getElementById('res-goal-jurisdiction').innerHTML = 
            `<strong>Goal:</strong> ${goal}<br>
             <strong>Jurisdiction:</strong> ${city}, ${state}, ${country}${docsInfo}${contextInfo}`;

        const incidentDateObj = new Date(date);
        const deadlineDateObj = new Date(incidentDateObj);
        deadlineDateObj.setFullYear(deadlineDateObj.getFullYear() + 2);
        
        const today = new Date();
        const diffTime = Math.abs(deadlineDateObj - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        let deadlineHtml = `
            <p><strong>Incident Date:</strong> ${incidentDateObj.toLocaleDateString()}</p>
            <p><strong>Estimated Statute of Limitations:</strong> 2 Years</p>
            <p style="margin-top: 0.5rem; font-size: 1.1rem; color: var(--warning-color);">
                <strong>Filing Deadline:</strong> ${deadlineDateObj.toLocaleDateString()}
            </p>
        `;

        if (deadlineDateObj < today) {
            deadlineHtml += `<p style="color: #ef4444; font-weight: bold; margin-top: 0.5rem;">WARNING: The estimated deadline has passed.</p>`;
        } else if (diffDays <= 30) {
            deadlineHtml += `<p style="color: #ef4444; font-weight: bold; margin-top: 0.5rem;">URGENT: Deadline is approaching within ${diffDays} days!</p>`;
        }
        document.getElementById('res-deadlines').innerHTML = deadlineHtml;

        document.getElementById('res-flowchart').innerHTML = `
            <div class="flowchart-step">
                <h4>Step 1: Document Preservation</h4>
                <p>Gather and securely store all communications, logs, and evidence dated on or around ${incidentDateObj.toLocaleDateString()} relevant to this matter.</p>
            </div>
            <div class="flowchart-step">
                <h4>Step 2: Draft Demand Letter</h4>
                <p>Prepare a formal letter outlining your goal ("${goal}") and serve it to the opposing party according to local rules of ${state}.</p>
            </div>
            <div class="flowchart-step">
                <h4>Step 3: Formal Filing</h4>
                <p>Submit required forms along with applicable filing fees to the governing body in ${city} prior to ${deadlineDateObj.toLocaleDateString()}.</p>
            </div>
        `;

        const templateHtml = `[COURT OR GOVERNING BODY NAME]
[JURISDICTION OF ${city.toUpperCase()}, ${state.toUpperCase()}]

IN RE: [YOUR NAME], Plaintiff/Petitioner,
v.
[OPPOSING PARTY], Defendant/Respondent.

NATURE OF ACTION: ${goal.toUpperCase()}
DATE OF INCIDENT: ${incidentDateObj.toLocaleDateString()}

STATEMENT OF FACTS:
1. The incident giving rise to this action occurred on or about the DATE OF INCIDENT in the jurisdiction of ${city}, ${state}.
${legalContext ? `2. This action is brought pursuant to: ${legalContext}` : ''}
3. [Insert detailed factual description here].

WHEREFORE, the undersigned respectfully requests [State desired outcome].`;

        let formattedTemplate = templateHtml.replace(/\[([^\]]+)\]/g, '<span class="template-placeholder">[$1]</span>');
        document.getElementById('res-template').innerHTML = formattedTemplate;
    }

    // ==============================================
    // TAB 2: CHARGE SHEET DRAFTER LOGIC
    // ==============================================
    
    // --- Penal Sections Tag Input Logic ---
    const tagInputContainer = document.getElementById('penal-tags-container');
    const tagInput = document.getElementById('penal-section-input');
    const tagsWrapper = document.getElementById('tags-wrapper');
    const hiddenPenalInput = document.getElementById('hidden-penal-sections');
    let penalTags = [];

    function renderTags() {
        tagsWrapper.innerHTML = '';
        penalTags.forEach((tag, index) => {
            const chip = document.createElement('div');
            chip.className = 'tag-chip';
            chip.innerHTML = `
                ${tag}
                <span class="tag-remove" data-index="${index}">&times;</span>
            `;
            tagsWrapper.appendChild(chip);
        });
        hiddenPenalInput.value = penalTags.join(', ');

        // Add event listeners to remove buttons
        document.querySelectorAll('.tag-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.target.getAttribute('data-index');
                penalTags.splice(idx, 1);
                renderTags();
            });
        });
    }

    tagInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const val = tagInput.value.trim();
            if (val && !penalTags.includes(val)) {
                penalTags.push(val);
                tagInput.value = '';
                renderTags();
            }
        } else if (e.key === 'Backspace' && tagInput.value === '' && penalTags.length > 0) {
            penalTags.pop();
            renderTags();
        }
    });

    tagInputContainer.addEventListener('click', () => {
        tagInput.focus();
    });

    // --- Dynamic Entry Logic (Accused, Witnesses, Evidence) ---
    function attachRemoveEvent(containerId) {
        document.getElementById(containerId).addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) {
                e.target.parentElement.remove();
            }
        });
    }
    attachRemoveEvent('accused-list');
    attachRemoveEvent('witness-list');
    attachRemoveEvent('evidence-list');

    document.getElementById('add-accused-btn').addEventListener('click', () => {
        const entry = document.createElement('div');
        entry.className = 'form-row dynamic-entry accused-entry';
        entry.innerHTML = `
            <button type="button" class="remove-btn">&times; Remove</button>
            <div class="form-group">
                <label>Accused Name & Details</label>
                <input type="text" class="accused-name" placeholder="Name, s/o, address" required>
            </div>
            <div class="form-group">
                <label>Custodial Status</label>
                <select class="accused-status" required>
                    <option value="in_custody">In Custody</option>
                    <option value="on_bail">Released on Bail</option>
                    <option value="absconding">Absconding (Proclaimed Offender)</option>
                    <option value="insufficient_evidence">Not sent up (Insufficient Evidence)</option>
                </select>
            </div>
        `;
        document.getElementById('accused-list').appendChild(entry);
    });

    document.getElementById('add-witness-btn').addEventListener('click', () => {
        const entry = document.createElement('div');
        entry.className = 'dynamic-entry witness-entry';
        entry.innerHTML = `
            <button type="button" class="remove-btn">&times; Remove</button>
            <div class="form-group">
                <label>Witness Name</label>
                <input type="text" class="witness-name" placeholder="e.g., John Doe" required>
            </div>
            <div class="form-group">
                <label>Statement Brief (161 CrPC)</label>
                <textarea class="witness-statement" rows="2" placeholder="Summary of testimony..." required></textarea>
            </div>
        `;
        document.getElementById('witness-list').appendChild(entry);
    });

    document.getElementById('add-evidence-btn').addEventListener('click', () => {
        const entry = document.createElement('div');
        entry.className = 'dynamic-entry evidence-entry';
        entry.innerHTML = `
            <button type="button" class="remove-btn">&times; Remove</button>
            <div class="form-group">
                <label>Item Description</label>
                <input type="text" class="evidence-item" placeholder="e.g., 1x Apple iPhone 13" required>
            </div>
            <div class="form-group">
                <label>Investigator Notes</label>
                <textarea class="evidence-notes" rows="2" placeholder="e.g., PFSA digital forensics report attached." required></textarea>
            </div>
        `;
        document.getElementById('evidence-list').appendChild(entry);
    });

    // --- Form Submission Logic ---
    const csForm = document.getElementById('charge-sheet-form');

    csForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Gather FIR Details
        const firNum = document.getElementById('fir-number').value;
        const firDate = document.getElementById('fir-date').value;
        const ps = document.getElementById('police-station').value;
        const sectionsArray = [...penalTags];

        // 2. Gather Accused Array
        const accusedRoster = [];
        document.querySelectorAll('.accused-entry').forEach(node => {
            accusedRoster.push({
                name: node.querySelector('.accused-name').value,
                status: node.querySelector('.accused-status').value
            });
        });

        // 3. Gather Witness Array
        const witnessLog = [];
        document.querySelectorAll('.witness-entry').forEach(node => {
            witnessLog.push({
                name: node.querySelector('.witness-name').value,
                statement: node.querySelector('.witness-statement').value
            });
        });

        // 4. Gather Evidence Array
        const evidenceLog = [];
        document.querySelectorAll('.evidence-entry').forEach(node => {
            evidenceLog.push({
                item: node.querySelector('.evidence-item').value,
                notes: node.querySelector('.evidence-notes').value
            });
        });

        document.getElementById('cs-empty-state').classList.add('hidden');
        document.getElementById('cs-results-state').classList.add('hidden');
        document.getElementById('cs-loading-state').classList.remove('hidden');

        if (window.innerWidth < 900) {
            document.getElementById('charge-sheet-drafter').scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
            generateChargeSheetResponse(firNum, firDate, ps, sectionsArray, accusedRoster, witnessLog, evidenceLog);
            document.getElementById('cs-loading-state').classList.add('hidden');
            document.getElementById('cs-results-state').classList.remove('hidden');
        }, 2500);
    });

    function generateChargeSheetResponse(firNum, firDate, ps, sectionsArray, accusedRoster, witnessLog, evidenceLog) {
        
        const flagsContainer = document.getElementById('cs-flags-container');
        const alertsContainer = document.getElementById('cs-alerts-container');
        flagsContainer.innerHTML = '';
        alertsContainer.innerHTML = '';

        const sectionsStr = sectionsArray.join(', ');

        // 1. Missing Data Flags
        let missingData = [];
        if (evidenceLog.length === 0) missingData.push("Physical/Forensic Evidence details are empty.");
        if (witnessLog.length === 0) missingData.push("Witness statements are empty.");
        if (accusedRoster.length === 0) missingData.push("No accused persons listed.");

        if (missingData.length > 0) {
            flagsContainer.innerHTML = `
                <div class="flag-alert missing">
                    <strong>Missing Information Flag:</strong>
                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                        ${missingData.map(m => `<li>${m}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // 2. Evidentiary Alerts
        let alerts = [];
        const secLower = sectionsStr.toLowerCase();
        
        // Combine evidence items and notes into one string for checking
        let evLower = evidenceLog.map(e => (e.item + " " + e.notes).toLowerCase()).join(" ");

        if ((secLower.includes('420') || secLower.includes('fraud')) && !evLower.includes('document') && !evLower.includes('money') && !evLower.includes('transaction') && !evLower.includes('cheque')) {
            alerts.push(`Section(s) [${sectionsStr}] invoked, but evidence log lacks explicit mention of forged documents or illicit financial transactions.`);
        }
        if ((secLower.includes('302') || secLower.includes('murder')) && !evLower.includes('weapon') && !evLower.includes('medical') && !evLower.includes('post') && !evLower.includes('pistol')) {
            alerts.push(`Homicide section invoked without mention of a recovered weapon or post-mortem medical report.`);
        }

        if (alerts.length > 0) {
            alertsContainer.innerHTML = `
                <div class="flag-alert evidentiary">
                    <strong>Evidentiary Alert:</strong>
                    <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
                        ${alerts.map(a => `<li>${a}</li>`).join('')}
                    </ul>
                    <small style="display:block; margin-top:0.5rem;">Ensure the narrative in Column 7 explicitly fulfills the legal ingredients of these sections.</small>
                </div>
            `;
        }

        // 3. Draft Charge Sheet (Columns 1-7)
        let col2 = [], col3 = [], col4 = [], col5 = [];
        accusedRoster.forEach((acc, idx) => {
            const entry = `${idx+1}. ${acc.name}`;
            if (acc.status === 'insufficient_evidence') col2.push(entry);
            else if (acc.status === 'in_custody') col3.push(entry);
            else if (acc.status === 'on_bail') col4.push(entry);
            else if (acc.status === 'absconding') col5.push(entry);
        });

        // Format Witnesses
        let parsedWitnesses = witnessLog.map((w, i) => `${i+1}. ${w.name}\n   Statement: ${w.statement}`).join('\n\n');
        
        // Format Evidence
        let parsedEvidence = evidenceLog.map((e, i) => `${i+1}. ${e.item}\n   Notes: ${e.notes}`).join('\n\n');

        const chargeSheetText = `REPORT UNDER SECTION 173 CrPC (CHALLAN)

FIR No: ${firNum}
Date of FIR: ${firDate}
Police Station/Agency: ${ps}
Offences/Sections: ${sectionsStr}

-------------------------------------------------------------------------
COLUMN 1: Complainant/Informant Details
[Insert Name/Address of Complainant based on FIR details]

-------------------------------------------------------------------------
COLUMN 2: Accused NOT sent up for trial (Insufficient Evidence)
${col2.length > 0 ? col2.join('\n') : 'NIL'}

-------------------------------------------------------------------------
COLUMN 3: Accused sent up for trial (Under Arrest / In Custody)
${col3.length > 0 ? col3.join('\n') : 'NIL'}

-------------------------------------------------------------------------
COLUMN 4: Accused sent up for trial (Released on Bail)
${col4.length > 0 ? col4.join('\n') : 'NIL'}

-------------------------------------------------------------------------
COLUMN 5: Absconding Accused (Proclaimed Offenders)
${col5.length > 0 ? col5.join('\n') : 'NIL'}

-------------------------------------------------------------------------
COLUMN 6: Prosecution Witnesses & Facts Proved
${parsedWitnesses || 'NIL'}

-------------------------------------------------------------------------
COLUMN 7: Brief of Facts (Mufassal Report)
On ${firDate}, an FIR was registered at ${ps} under sections [${sectionsStr}]. 

During the course of the investigation, the following physical/forensic evidence was recovered: 
${parsedEvidence || 'No physical evidence listed.'}

Based on the statements recorded under Section 161 CrPC (detailed in Column 6) and the evidentiary record corroborated by the physical recoveries (detailed above), it is established that the accused persons sent up in Columns 3 and 4 have prima facie committed offences under ${sectionsStr}. 

The Investigating Officer respectfully submits this report to the competent Magistrate for commencement of trial.
`;

        let formattedTemplate = chargeSheetText.replace(/\[([^\]]+)\]/g, '<span class="template-placeholder">[$1]</span>');
        document.getElementById('res-cs-template').innerHTML = formattedTemplate;

        // 4. Procedural Compliance Checklist
        const firDateObj = new Date(firDate);
        const today = new Date();
        const daysElapsed = Math.floor((today - firDateObj) / (1000 * 60 * 60 * 24));
        let timeFlag = '';
        if (daysElapsed > 14) {
            timeFlag = `<span style="color: #ef4444; font-weight: bold;">(Warning: Statutory 14-day limit exceeded by ${daysElapsed - 14} days)</span>`;
        } else {
            timeFlag = `<span style="color: #10b981; font-weight: bold;">(Within 14-day limit)</span>`;
        }

        const isComplete = evidenceLog.length > 0 && witnessLog.length > 0 && (col3.length > 0 || col4.length > 0);
        
        document.getElementById('res-compliance').innerHTML = `
            <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 0.5rem;">✓ <strong>Challan Status:</strong> ${isComplete ? 'Complete Challan' : 'Incomplete/Interim Challan'}</li>
                <li style="margin-bottom: 0.5rem;">✓ <strong>Time Elapsed since FIR:</strong> ${daysElapsed} Days ${timeFlag}</li>
                <li style="margin-bottom: 0.5rem;">✓ <strong>Witness Statements (161 CrPC):</strong> ${witnessLog.length} Recorded</li>
                <li>✓ <strong>Evidentiary Alignment:</strong> ${alerts.length === 0 ? 'Verified' : `<span style="color: #f59e0b;">${alerts.length} Alert(s) Generated</span>`}</li>
            </ul>
        `;
    }
});
