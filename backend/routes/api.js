const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Question = require('../models/Question');
const verifyToken = require('../middleware/auth');

// Get all categories with question counts and subcategory stats (Optimized aggregation: eliminates N+1 queries)
router.get('/categories/with-counts', async (req, res) => {
    try {
        const [categories, stats] = await Promise.all([
            Category.find().sort({ name: 1 }).lean(),
            Question.aggregate([
                {
                    $group: {
                        _id: "$category",
                        questionCount: { $sum: 1 },
                        subcategories: {
                            $addToSet: {
                                $cond: [
                                    {
                                        $and: [
                                            { $ne: ["$subCategory", null] },
                                            { $ne: ["$subCategory", ""] }
                                        ]
                                    },
                                    "$subCategory",
                                    "$$REMOVE"
                                ]
                            }
                        }
                    }
                }
            ])
        ]);

        const statsMap = new Map();
        stats.forEach(s => {
            if (s._id) {
                statsMap.set(s._id.toString(), s);
            }
        });

        const categoriesWithStats = categories.map(cat => {
            const stat = statsMap.get(cat._id.toString());
            const subcats = (stat && Array.isArray(stat.subcategories)) ? stat.subcategories : [];
            return {
                ...cat,
                questionCount: stat ? stat.questionCount : 0,
                subcategoriesCount: subcats.length,
                subcategories: subcats
            };
        });

        res.json(categoriesWithStats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get subcategories for a specific category ID or Name
router.get('/categories/:id/subcategories', async (req, res) => {
    try {
        let catId = req.params.id;
        // Check if ID is not a valid ObjectId, try finding by name
        const mongoose = require('mongoose');
        if (!mongoose.Types.ObjectId.isValid(catId)) {
            const foundCat = await Category.findOne({ name: new RegExp('^' + catId + '$', 'i') });
            if (foundCat) catId = foundCat._id;
            else return res.json([]);
        }
        
        const subcategories = await Question.distinct('subCategory', { 
            category: catId, 
            subCategory: { $ne: '', $exists: true } 
        });
        
        res.json(subcategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find().sort({ name: 1 });
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a category (Admin only)
router.post('/categories', verifyToken, async (req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description
    });
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all questions (with optional filters and pagination)
router.get('/questions', async (req, res) => {
    try {
        let query = {};
        if (req.query.category) {
            const mongoose = require('mongoose');
            if (mongoose.Types.ObjectId.isValid(req.query.category)) {
                query.category = req.query.category;
            } else {
                // Find category by name
                const catObj = await Category.findOne({ name: new RegExp('^' + req.query.category + '$', 'i') });
                if (catObj) {
                    query.category = catObj._id;
                }
            }
        }
        if (req.query.difficulty) {
            query.difficulty = req.query.difficulty;
        }
        if (req.query.subCategory) {
            query.subCategory = { $regex: new RegExp('^' + req.query.subCategory.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '$', 'i') };
        }
        if (req.query.search && req.query.search.trim()) {
            const safeSearch = req.query.search.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const searchRegex = new RegExp(safeSearch, 'i');
            query.$or = [
                { questionText: searchRegex },
                { 'options.A': searchRegex },
                { 'options.B': searchRegex },
                { 'options.C': searchRegex },
                { 'options.D': searchRegex },
                { explanation: searchRegex }
            ];
        }

        console.log("FINAL QUERY:", query);

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalQuestions = await Question.countDocuments(query);
        const totalPages = Math.ceil(totalQuestions / limit);

        const questions = await Question.find(query)
            .populate('category', 'name')
            .skip(skip)
            .limit(limit);

        res.json({
            questions,
            currentPage: page,
            totalPages,
            totalQuestions
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single question
router.get('/questions/:id', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id).populate('category', 'name');
        if (!question) return res.status(404).json({ message: 'Question not found' });
        res.json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a question (Admin only)
router.post('/questions', verifyToken, async (req, res) => {
    const question = new Question({
        questionText: req.body.questionText,
        options: req.body.options,
        correctAnswer: req.body.correctAnswer,
        explanation: req.body.explanation,
        category: req.body.category,
        subCategory: req.body.subCategory || '',
        difficulty: req.body.difficulty
    });
    try {
        const newQuestion = await question.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a question (Admin only)
router.delete('/questions/:id', verifyToken, async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: 'Question not found' });
        await question.deleteOne();
        res.json({ message: 'Question deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a category (Admin only)
router.delete('/categories/:id', verifyToken, async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        await category.deleteOne();
        // Also delete all questions in this category
        await Question.deleteMany({ category: req.params.id });
        res.json({ message: 'Category and its questions deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Dashboard stats
router.get('/stats', async (req, res) => {
    try {
        const categoriesCount = await Category.countDocuments();
        const questionsCount = await Question.countDocuments();
        res.json({ categories: categoriesCount, questions: questionsCount });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Utility: Sanitize text and escape HTML characters to prevent XSS attacks
function sanitizeCommentText(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Add a comment to a question (Sanitized & Validated)
router.post('/questions/:id/comments', async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) return res.status(404).json({ message: 'Question not found' });

        if (!req.body || typeof req.body.text !== 'string') {
            return res.status(400).json({ message: 'Comment text is required and must be a string.' });
        }

        const rawText = req.body.text.trim();
        if (rawText.length < 2) {
            return res.status(400).json({ message: 'Comment must be at least 2 characters long.' });
        }
        if (rawText.length > 500) {
            return res.status(400).json({ message: 'Comment cannot exceed 500 characters.' });
        }

        // Sanitize text against HTML/script injection
        const cleanText = sanitizeCommentText(rawText);

        // Limit maximum comments per question to prevent database spam
        if (!question.comments) question.comments = [];
        if (question.comments.length >= 100) {
            return res.status(400).json({ message: 'Maximum comment limit reached for this question.' });
        }

        question.comments.push({ text: cleanText, date: new Date() });
        await question.save();
        res.status(201).json(question.comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// --- QUIZ SYSTEM ROUTES ---

const QuizAttempt = require('../models/QuizAttempt');

// Generate Quiz Questions (omitting exact correct answers to prevent cheating)
router.get('/quiz/generate', async (req, res) => {
    try {
        let query = {};

        // Match specific category or subcategory
        if (req.query.categoryId) {
            const mongoose = require('mongoose');
            query.category = new mongoose.Types.ObjectId(req.query.categoryId);
        }
        if (req.query.subCategory) {
            query.subCategory = req.query.subCategory;
        }

        // Handle Difficulty (Easy, Medium, Hard, or Mixed i.e., no filter)
        if (req.query.difficulty && req.query.difficulty !== 'Mixed') {
            query.difficulty = req.query.difficulty;
        }

        const limit = parseInt(req.query.limit) || 10;

        // Fetch randomly using MongoDB aggregation pipeline
        const questions = await Question.aggregate([
            { $match: query },
            { $sample: { size: limit } } // This pulls randomly
        ]);

        if (!questions || questions.length === 0) {
            return res.status(404).json({ message: 'No questions found for the selected criteria.' });
        }

        // Populate category manually since we used aggregate
        await Category.populate(questions, { path: 'category', select: 'name' });

        // Strip correct answers to prevent cheating and randomize options
        const sanitizedQuestions = questions.map(q => {
            return {
                _id: q._id,
                questionText: q.questionText,
                options: q.options, // We could randomize the A,B,C,D object keys natively, but keeping standard layout is easier for frontend
                category: q.category,
                subCategory: q.subCategory,
                difficulty: q.difficulty
                // explicitly omitting correctAnswer and explanation
            };
        });

        res.json(sanitizedQuestions);

    } catch (err) {
        console.error('Error generating quiz:', err);
        res.status(500).json({ message: err.message });
    }
});

// Submit Quiz and Grade
router.post('/quiz/submit', async (req, res) => {
    try {
        const { categoryName, subCategory, answers, timeTaken, negativeMarking = 0 } = req.body;

        if (!answers || !Array.isArray(answers)) {
            return res.status(400).json({ message: 'Invalid submission format.' });
        }

        const negMarkVal = Math.max(0, parseFloat(negativeMarking) || 0);
        let correctCount = 0;
        let wrongCount = 0;
        let unattemptedCount = 0;
        let gradedResults = [];

        // Grade each question
        for (let ans of answers) {
            const question = await Question.findById(ans.questionId);
            if (question) {
                const isAttempted = ans.selectedAnswer !== null && ans.selectedAnswer !== undefined && ans.selectedAnswer !== '' && ans.selectedAnswer !== 'None';
                const isCorrect = isAttempted && question.correctAnswer === ans.selectedAnswer;

                if (isCorrect) {
                    correctCount++;
                } else if (isAttempted) {
                    wrongCount++;
                } else {
                    unattemptedCount++;
                }

                gradedResults.push({
                    questionId: question._id,
                    questionText: question.questionText,
                    options: question.options,
                    selectedAnswer: ans.selectedAnswer || null,
                    correctAnswer: question.correctAnswer,
                    isCorrect: isCorrect,
                    isAttempted: isAttempted,
                    explanation: question.explanation
                });
            }
        }

        const totalQuestions = answers.length;
        const penaltyDeducted = +(wrongCount * negMarkVal).toFixed(2);
        const rawScore = +(correctCount - penaltyDeducted).toFixed(2);
        const finalScore = Math.max(0, rawScore);
        const percentage = totalQuestions > 0 ? +((finalScore / totalQuestions) * 100).toFixed(2) : 0;

        // Save Attempt to DB
        const quizAttempt = new QuizAttempt({
            categoryName: categoryName || 'Mixed',
            subCategory: subCategory || 'All',
            score: finalScore,
            totalQuestions: totalQuestions,
            percentage: percentage,
            timeTaken: timeTaken || 0,
            negativeMarking: negMarkVal,
            penaltyDeducted: penaltyDeducted,
            correctCount: correctCount,
            wrongCount: wrongCount,
            unattemptedCount: unattemptedCount
        });

        await quizAttempt.save();

        // Send back final grading and detailed answers
        res.status(200).json({
            score: finalScore,
            rawScore,
            correctCount,
            wrongCount,
            unattemptedCount,
            negativeMarking: negMarkVal,
            penaltyDeducted,
            totalQuestions,
            percentage,
            timeTaken,
            gradedResults,
            attemptId: quizAttempt._id
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Recent Quiz Attempts for Admin (Admin only)
router.get('/quiz/attempts', verifyToken, async (req, res) => {
    try {
        const attempts = await QuizAttempt.find().sort({ date: -1 }).limit(50);
        res.json(attempts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


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
            message: `Successfully processed bulk upload. Inserted ${insertedCount} of ${questions.length} MCQs.`,
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

module.exports = router;
