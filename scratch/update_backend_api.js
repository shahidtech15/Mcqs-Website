const fs = require('fs');
const path = require('path');

const apiPath = path.join(__dirname, '../backend/routes/api.js');
let apiCode = fs.readFileSync(apiPath, 'utf8');

// In-memory persistent stores for admin extra modules (jobs, notes, errors, pageviews)
const extraRoutes = `
// =========================================================================
// ENHANCED ADMIN MODULES (Bulk Upload, Job Ads, Notes, Error Reports, Pageviews)
// =========================================================================

// In-memory stores with realistic civil services seed data
let adminJobsStore = [
    {
        id: 'job_1',
        title: 'Assistant Director (Investigation) BS-17',
        department: 'Federal Investigation Agency (FIA)',
        advtNo: 'FPSC Consolidated Advt No. 10/2024',
        vacancies: 45,
        qualification: 'Second Class or Grade C Master’s degree or 16 years education in any discipline',
        ageLimit: '22-28 years + 5 years general relaxation',
        deadline: '2024-12-16',
        status: 'Active',
        pdfUrl: 'resources/fia_ad_syllabus.pdf',
        applyUrl: 'https://www.fpsc.gov.pk'
    },
    {
        id: 'job_2',
        title: 'Inspector Investigation (BS-16)',
        department: 'Federal Investigation Agency (FIA)',
        advtNo: 'FPSC Advt No. 10/2024',
        vacancies: 112,
        qualification: 'Bachelor’s degree (14 years education) with minimum 2nd Division',
        ageLimit: '20-28 years + 5 years relaxation',
        deadline: '2024-12-16',
        status: 'Active',
        pdfUrl: 'resources/fia_inspector_syllabus.pdf',
        applyUrl: 'https://www.fpsc.gov.pk'
    },
    {
        id: 'job_3',
        title: 'Provincial Management Service (PMS) Officer (BS-17)',
        department: 'Punjab Public Service Commission (PPSC)',
        advtNo: 'PPSC Advt No. 34/2024',
        vacancies: 68,
        qualification: 'Graduation (14 years education) in any subject from an HEC recognized university',
        ageLimit: '21-30 years',
        deadline: '2024-12-30',
        status: 'Active',
        pdfUrl: 'resources/pms_punjab_syllabus.pdf',
        applyUrl: 'https://www.ppsc.gop.pk'
    },
    {
        id: 'job_4',
        title: 'Assistant Director (BS-17)',
        department: 'National Accountability Bureau (NAB)',
        advtNo: 'NAB HQ Recruitment 2024/02',
        vacancies: 28,
        qualification: 'Master’s degree or 16-year education in Law, Criminology, Finance, or Computer Science',
        ageLimit: '22-30 years',
        deadline: '2024-11-25',
        status: 'Expiring Soon',
        pdfUrl: 'resources/nab_ad_syllabus.pdf',
        applyUrl: 'https://nab.gov.pk'
    }
];

let adminNotesStore = [
    {
        id: 'note_1',
        title: 'Complete Constitution of Pakistan 1973 (Articles 1-280 Compendium)',
        exam: 'CSS, PMS, Law',
        fileType: 'PDF Document',
        fileSize: '4.8 MB',
        downloads: 1420,
        uploadedAt: '2024-11-01',
        url: 'resources/constitution_1973_compendium.pdf',
        description: 'Annotated full text with landmark case laws for Paper-I & Paper-II.'
    },
    {
        id: 'note_2',
        title: 'Federal Investigation Agency Act 1974 & PECA 2016 Study Guide',
        exam: 'FIA Assistant Director & Inspector',
        fileType: 'PDF Document',
        fileSize: '2.4 MB',
        downloads: 2890,
        uploadedAt: '2024-11-05',
        url: 'resources/fia_act_guide.pdf',
        description: 'Complete statutory provisions, schedule of offences, and previous past paper solutions.'
    },
    {
        id: 'note_3',
        title: 'Economic Survey of Pakistan 2023-24 Summary & Key Statistical Tables',
        exam: 'CSS, PMS, Current Affairs',
        fileType: 'PDF Document',
        fileSize: '6.2 MB',
        downloads: 3650,
        uploadedAt: '2024-10-20',
        url: 'resources/economic_survey_summary.pdf',
        description: 'Official sector-wise GDP, debt, trade deficit, inflation, and fiscal deficit analysis.'
    },
    {
        id: 'note_4',
        title: 'Everyday Science: Physics, Chemistry & Biology 500 Concept Capsule',
        exam: 'CSS General Science & Ability, FIA, PMS',
        fileType: 'PDF Document',
        fileSize: '3.1 MB',
        downloads: 1980,
        uploadedAt: '2024-11-08',
        url: 'resources/everyday_science_capsule.pdf',
        description: 'High-yield revision capsule covering optics, atmospheric physics, vitamins, and human anatomy.'
    }
];

let adminReportedErrorsStore = [
    {
        id: 'rep_1',
        questionId: 'q_fia_14',
        questionText: 'Under Section 5A of the FIA Act 1974, which rank of officers may carry arms?',
        reportedBy: 'candidate_bilal@gmail.com',
        reportType: 'Incorrect Answer Key',
        userComment: 'The system marked Option B (Inspector) as correct, but the statute Section 5A explicitly allows Sub-Inspectors and above.',
        status: 'Pending',
        reportedDate: '2024-11-14'
    },
    {
        id: 'rep_2',
        questionId: 'q_pak_affairs_89',
        questionText: 'In which year was the Indus Waters Treaty brokered by the World Bank?',
        reportedBy: 'ahmed_css2025@yahoo.com',
        reportType: 'Typo in Explanation',
        userComment: 'Explanation mentions Nehru signed with Ayub Khan in 1961, but the signing date was September 19, 1960.',
        status: 'Pending',
        reportedDate: '2024-11-13'
    },
    {
        id: 'rep_3',
        questionId: 'q_sci_optics_03',
        questionText: 'Total Internal Reflection occurs when angle of incidence is greater than critical angle.',
        reportedBy: 'fatima_noor@gmail.com',
        reportType: 'Clarification Needed',
        userComment: 'Please specify in the question that light must travel from denser to rarer medium.',
        status: 'Resolved',
        reportedDate: '2024-11-10'
    }
];

let adminPageviewsStore = [
    { path: '/index.html', title: 'Home — Portal Landing & Search', pageviews: 18450, uniqueVisitors: 12200, avgTime: '4m 12s', bounceRate: '24.2%' },
    { path: '/quiz.html', title: 'Take a Quiz — Screening Practice Engine', pageviews: 15600, uniqueVisitors: 9800, avgTime: '12m 45s', bounceRate: '14.8%' },
    { path: '/fia-sample-papers.html', title: 'FIA Assistant Director 20 Sample Papers', pageviews: 12890, uniqueVisitors: 8400, avgTime: '18m 30s', bounceRate: '11.5%' },
    { path: '/timeline.html', title: 'Interactive Historical Timeline & One-Liners', pageviews: 11200, uniqueVisitors: 7600, avgTime: '9m 15s', bounceRate: '19.4%' },
    { path: '/articles.html', title: 'In-Depth Civil Services Study Guides & SEO Articles', pageviews: 9850, uniqueVisitors: 6900, avgTime: '8m 40s', bounceRate: '21.0%' },
    { path: '/leaderboard.html', title: 'All-Pakistan Leaderboard & Daily Challenge', pageviews: 9420, uniqueVisitors: 6400, avgTime: '7m 10s', bounceRate: '16.5%' },
    { path: '/dashboard.html', title: 'Personalized Learning Dashboard & Analytics', pageviews: 8900, uniqueVisitors: 5800, avgTime: '6m 20s', bounceRate: '18.0%' },
    { path: '/digital-library.html', title: 'Digital Library & PDF Resources', pageviews: 7800, uniqueVisitors: 5100, avgTime: '5m 50s', bounceRate: '22.8%' },
    { path: '/world-map.html', title: 'Interactive World Map & Country Profiles', pageviews: 6950, uniqueVisitors: 4700, avgTime: '6m 05s', bounceRate: '25.3%' },
    { path: '/editorial-explainer.html', title: 'Dawn & Tribune Editorial Explainer', pageviews: 5400, uniqueVisitors: 3600, avgTime: '7m 35s', bounceRate: '20.1%' }
];

// 1. Update / Edit a Question (Admin only)
router.put('/questions/:id', verifyToken, async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: 'Question not found' });

        if (req.body.questionText) question.questionText = req.body.questionText;
        if (req.body.options) question.options = req.body.options;
        if (req.body.correctAnswer) question.correctAnswer = req.body.correctAnswer;
        if (req.body.explanation !== undefined) question.explanation = req.body.explanation;
        if (req.body.category) question.category = req.body.category;
        if (req.body.subCategory !== undefined) question.subCategory = req.body.subCategory;
        if (req.body.difficulty) question.difficulty = req.body.difficulty;

        const updated = await question.save();
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 2. Bulk MCQ Upload Endpoint (Admin only)
router.post('/questions/bulk', verifyToken, async (req, res) => {
    try {
        const { questions } = req.body;
        if (!Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: 'Questions array is required.' });
        }

        let insertedCount = 0;
        let errors = [];

        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            if (!q.questionText || !q.options || !q.correctAnswer) {
                errors.push({ index: i, error: 'Missing mandatory fields (questionText, options, correctAnswer)' });
                continue;
            }

            try {
                const newQ = new Question({
                    questionText: q.questionText,
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                    explanation: q.explanation || 'Verified conceptual standard.',
                    category: q.category || 'General Knowledge',
                    subCategory: q.subCategory || '',
                    difficulty: q.difficulty || 'Medium'
                });
                await newQ.save();
                insertedCount++;
            } catch (saveErr) {
                errors.push({ index: i, error: saveErr.message });
            }
        }

        res.status(200).json({
            message: \`Successfully processed bulk upload. Inserted \${insertedCount} of \${questions.length} MCQs.\`,
            insertedCount,
            totalRequested: questions.length,
            errors
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 3. Job Advertisements Routes
router.get('/admin/jobs', (req, res) => {
    res.json(adminJobsStore);
});

router.post('/admin/jobs', verifyToken, (req, res) => {
    const newJob = {
        id: 'job_' + Date.now(),
        title: req.body.title || 'Untitled Post',
        department: req.body.department || 'Federal Department',
        advtNo: req.body.advtNo || 'Advt 2024',
        vacancies: req.body.vacancies || 1,
        qualification: req.body.qualification || 'Graduation',
        ageLimit: req.body.ageLimit || '21-28 years',
        deadline: req.body.deadline || new Date().toISOString().split('T')[0],
        status: req.body.status || 'Active',
        pdfUrl: req.body.pdfUrl || '',
        applyUrl: req.body.applyUrl || ''
    };
    adminJobsStore.unshift(newJob);
    res.status(201).json(newJob);
});

router.delete('/admin/jobs/:id', verifyToken, (req, res) => {
    adminJobsStore = adminJobsStore.filter(j => j.id !== req.params.id);
    res.json({ message: 'Job advertisement deleted.' });
});

// 4. Notes and PDFs Routes
router.get('/admin/notes', (req, res) => {
    res.json(adminNotesStore);
});

router.post('/admin/notes', verifyToken, (req, res) => {
    const newNote = {
        id: 'note_' + Date.now(),
        title: req.body.title || 'Untitled Study Resource',
        exam: req.body.exam || 'CSS & PMS',
        fileType: req.body.fileType || 'PDF Document',
        fileSize: req.body.fileSize || '2.0 MB',
        downloads: 0,
        uploadedAt: new Date().toISOString().split('T')[0],
        url: req.body.url || 'resources/sample.pdf',
        description: req.body.description || ''
    };
    adminNotesStore.unshift(newNote);
    res.status(201).json(newNote);
});

router.delete('/admin/notes/:id', verifyToken, (req, res) => {
    adminNotesStore = adminNotesStore.filter(n => n.id !== req.params.id);
    res.json({ message: 'Study resource deleted.' });
});

// 5. Reported Errors & Question Bugs Routes
router.get('/admin/reported-errors', verifyToken, (req, res) => {
    res.json(adminReportedErrorsStore);
});

router.post('/admin/reported-errors/:id/resolve', verifyToken, (req, res) => {
    const item = adminReportedErrorsStore.find(r => r.id === req.params.id);
    if (!item) return res.status(404).json({ message: 'Reported issue not found.' });
    item.status = req.body.status || 'Resolved';
    res.json({ message: 'Report status updated.', report: item });
});

// 6. Pageviews & Traffic Analytics Route
router.get('/admin/pageviews', (req, res) => {
    res.json(adminPageviewsStore);
});
`;

if (!apiCode.includes('ENHANCED ADMIN MODULES')) {
    // Insert before module.exports = router;
    const exportTarget = 'module.exports = router;';
    apiCode = apiCode.replace(exportTarget, extraRoutes + '\n' + exportTarget);
    fs.writeFileSync(apiPath, apiCode, 'utf8');
    console.log('Successfully enhanced backend/routes/api.js with bulk upload, jobs, notes, and analytics routes!');
} else {
    console.log('Extra admin routes already exist in backend/routes/api.js');
}
