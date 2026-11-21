/**
 * Personalized Learning Dashboard & Spaced-Repetition Mistake Notebook Engine
 * Manages completed tests, subject mastery, weak areas, accuracy, study hours,
 * performance trends, and persistent mistake notebook using localStorage.
 */

window.LEARNING_DASHBOARD = (function () {
    const STORAGE_KEY = 'mcqs_user_learning_profile';
    const MISTAKE_KEY = 'mcqs_mistake_notebook';

    // Default Seeded Mistakes for Spaced Repetition Notebook
    const defaultMistakes = [
        {
            _id: "mistake_seed_1",
            questionText: "If A can complete a piece of work in 12 days and B in 15 days, how many days will they take to complete it working together?",
            options: {
                A: "6.0 days",
                B: "6.67 days (6 2/3 days)",
                C: "7.25 days",
                D: "8.5 days"
            },
            correctAnswer: "B",
            selectedAnswer: "C",
            explanation: "Combined 1-day work = 1/12 + 1/15 = (5 + 4)/60 = 9/60 = 3/20. Total time = 20/3 = 6.67 days (6 2/3 days).",
            categoryName: "Mathematics",
            subCategory: "Work & Time",
            mistakeCount: 2,
            lastMissedAt: "2026-11-19"
        },
        {
            _id: "mistake_seed_2",
            questionText: "Under Section 5(5) of the FIA Act, 1974, an officer of the Agency not below the rank of Sub-Inspector may freeze property for a maximum initial period of:",
            options: {
                A: "30 days",
                B: "60 days",
                C: "90 days",
                D: "14 days"
            },
            correctAnswer: "C",
            selectedAnswer: "A",
            explanation: "Under Section 5(5) of the FIA Act, 1974, property connected with a scheduled offence can be frozen by order in writing for a period up to 90 days.",
            categoryName: "FIA Assistant Director Investigation",
            subCategory: "FIA Act, 1974",
            mistakeCount: 2,
            lastMissedAt: "2026-11-18"
        },
        {
            _id: "mistake_seed_3",
            questionText: "Choose the correct preposition: 'The accused was acquitted ____ all charges by the High Court.'",
            options: {
                A: "from",
                B: "of",
                C: "by",
                D: "off"
            },
            correctAnswer: "B",
            selectedAnswer: "A",
            explanation: "The verb 'acquit' always takes the fixed dependent preposition 'of' (acquitted of a crime/charge).",
            categoryName: "English",
            subCategory: "Prepositions",
            mistakeCount: 1,
            lastMissedAt: "2026-11-18"
        },
        {
            _id: "mistake_seed_4",
            questionText: "Which Constitutional Amendment introduced Article 191A establishing Constitutional Benches in the Supreme Court of Pakistan?",
            options: {
                A: "24th Amendment",
                B: "25th Amendment",
                C: "26th Amendment (2024)",
                D: "19th Amendment"
            },
            correctAnswer: "C",
            selectedAnswer: "D",
            explanation: "The 26th Constitutional Amendment Act, 2024 inserted Article 191A creating Constitutional Benches in the Supreme Court and reformed the Judicial Commission of Pakistan.",
            categoryName: "Pakistan Affairs",
            subCategory: "Constitutional History",
            mistakeCount: 1,
            lastMissedAt: "2026-11-17"
        },
        {
            _id: "mistake_seed_5",
            questionText: "Deficiency of which vitamin causes Pernicious Anemia and neurological degeneration?",
            options: {
                A: "Vitamin B1 (Thiamine)",
                B: "Vitamin B6 (Pyridoxine)",
                C: "Vitamin B12 (Cyanocobalamin)",
                D: "Vitamin C (Ascorbic Acid)"
            },
            correctAnswer: "C",
            selectedAnswer: "B",
            explanation: "Vitamin B12 (Cyanocobalamin) is essential for red blood cell maturation and myelin synthesis; its deficiency causes pernicious anemia.",
            categoryName: "Everyday Science",
            subCategory: "Biology & Vitamins",
            mistakeCount: 1,
            lastMissedAt: "2026-11-16"
        },
        {
            _id: "mistake_seed_6",
            questionText: "Under the Civil Servants Act, 1973, what is the maximum initial probation period (including extension) prescribed under Section 6?",
            options: {
                A: "1 year",
                B: "2 years",
                C: "As prescribed by rules for the service/post",
                D: "6 months fixed"
            },
            correctAnswer: "C",
            selectedAnswer: "B",
            explanation: "Section 6 of the Civil Servants Act, 1973 provides that an initial appointment shall be on probation for such period as may be prescribed by rules.",
            categoryName: "Civil Servants Act, 1973",
            subCategory: "Appointments & Probation",
            mistakeCount: 1,
            lastMissedAt: "2026-11-15"
        }
    ];

    // Default Seeded Civil Services Benchmark Profile
    const defaultProfile = {
        studentName: "Civil Services Aspirant",
        targetExams: ["FIA Assistant Director (BS-17)", "CSS 2025/2026", "PMS"],
        studyStreakDays: 14,
        totalStudyHours: 54.5,
        weeklyGoalHours: 25.0,
        currentWeekHours: 21.8,
        dailyHours: [
            { day: "Mon", hours: 3.5 },
            { day: "Tue", hours: 4.2 },
            { day: "Wed", hours: 3.0 },
            { day: "Thu", hours: 4.8 },
            { day: "Fri", hours: 3.8 },
            { day: "Sat", hours: 5.5 },
            { day: "Sun", hours: 4.2 }
        ],
        overallStats: {
            testsCompleted: 16,
            questionsAttempted: 1250,
            correctAnswers: 928,
            wrongAnswers: 262,
            unattempted: 60,
            overallAccuracy: 74.2,
            averageScore: 72.8,
            examReadinessIndex: 78
        },
        subjectMastery: [
            {
                subject: "Pakistan Affairs",
                categoryKey: "cat_pak_affairs",
                attempted: 220,
                correct: 182,
                accuracy: 82.7,
                status: "Strong",
                color: "#10b981",
                icon: "fa-flag"
            },
            {
                subject: "Everyday Science & Ability",
                categoryKey: "cat_science",
                attempted: 240,
                correct: 204,
                accuracy: 85.0,
                status: "Mastered",
                color: "#059669",
                icon: "fa-flask"
            },
            {
                subject: "Islamic Studies",
                categoryKey: "cat_islamiat",
                attempted: 150,
                correct: 132,
                accuracy: 88.0,
                status: "Mastered",
                color: "#10b981",
                icon: "fa-mosque"
            },
            {
                subject: "Current Affairs & Geopolitics",
                categoryKey: "cat_current_affairs",
                attempted: 200,
                correct: 154,
                accuracy: 77.0,
                status: "Strong",
                color: "#0284c7",
                icon: "fa-earth-americas"
            },
            {
                subject: "English Précis & Grammar",
                categoryKey: "cat_english",
                attempted: 180,
                correct: 122,
                accuracy: 67.8,
                status: "Moderate",
                color: "#f59e0b",
                icon: "fa-spell-check"
            },
            {
                subject: "FIA Act 1974 & Statutory Laws",
                categoryKey: "cat_fia_act",
                attempted: 130,
                correct: 71,
                accuracy: 54.6,
                status: "Weak Area",
                color: "#ef4444",
                icon: "fa-scale-balanced"
            },
            {
                subject: "Basic Mathematics & Quantitative",
                categoryKey: "cat_math",
                attempted: 130,
                correct: 63,
                accuracy: 48.5,
                status: "Critical Weak Area",
                color: "#b91c1c",
                icon: "fa-calculator"
            }
        ],
        weakTopicsPrescription: [
            {
                id: "weak-math-work",
                topic: "Basic Mathematics: Work, Time & Ratio Problems",
                subject: "Mathematics",
                accuracy: 42,
                diagnosis: "Frequent errors in inverted ratio equations and composite work formulas.",
                actionPlan: "Review fundamental algebraic reciprocal equations and practice 20 dedicated questions.",
                practiceLink: "quiz.html?category=Mathematics&diff=Hard"
            },
            {
                id: "weak-fia-sections",
                topic: "FIA Act 1974: Sections 5A & 10 Jurisdictional Powers",
                subject: "Statutory Laws",
                accuracy: 51,
                diagnosis: "Confusion between Section 5(1) general police powers vs Section 5A bank freezing thresholds.",
                actionPlan: "Study bare act statutory provisions in AI Study Assistant and review 10 sample papers.",
                practiceLink: "ai-assistant.html"
            },
            {
                id: "weak-eng-prepositions",
                topic: "English: Prepositional Idioms & Subjunctive Mood",
                subject: "English Grammar",
                accuracy: 58,
                diagnosis: "Errors in tricky dependent prepositions ('abide by', 'comply with', 'acquitted of').",
                actionPlan: "Download English Grammar PDF from Digital Library and review Grammar Rules section.",
                practiceLink: "grammar-rules.html"
            }
        ],
        improvementTimeline: [
            { period: "Week 1 (Baseline)", accuracy: 58.4, score: 56.5, tests: 3 },
            { period: "Week 2", accuracy: 63.8, score: 62.0, tests: 4 },
            { period: "Week 3", accuracy: 69.2, score: 68.5, tests: 4 },
            { period: "Week 4", accuracy: 74.2, score: 72.8, tests: 5 }
        ],
        testHistory: [
            {
                id: "test-fia-ad-1",
                testName: "FIA Assistant Director Full Paper 1",
                category: "FIA AD Sample Papers",
                date: "2024-11-14",
                score: 78.5,
                total: 100,
                accuracy: 78.5,
                timeSpent: "76 mins",
                status: "Passed (FPSC Merit Tier)"
            },
            {
                id: "test-pak-affairs-mock",
                testName: "Pakistan Affairs Constitutional History Mock",
                category: "Pakistan Affairs",
                date: "2024-11-13",
                score: 42.0,
                total: 50,
                accuracy: 84.0,
                timeSpent: "34 mins",
                status: "Passed (Top 5%)"
            },
            {
                id: "test-math-quant",
                testName: "Basic Mathematics & Algebra Diagnostic",
                category: "Mathematics",
                date: "2024-11-11",
                score: 24.5,
                total: 50,
                accuracy: 49.0,
                timeSpent: "45 mins",
                status: "Review Required (<50%)"
            },
            {
                id: "test-current-affairs-2024",
                testName: "International Current Affairs & Treaties",
                category: "Current Affairs",
                date: "2024-11-09",
                score: 39.0,
                total: 50,
                accuracy: 78.0,
                timeSpent: "29 mins",
                status: "Passed"
            },
            {
                id: "test-science-capsule",
                testName: "General Science & Scientific Instruments",
                category: "Everyday Science",
                date: "2024-11-07",
                score: 44.0,
                total: 50,
                accuracy: 88.0,
                timeSpent: "26 mins",
                status: "Distinction (>85%)"
            }
        ]
    };

    function loadProfile() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            console.warn('Could not read from localStorage, using default profile.');
        }
        saveProfile(defaultProfile);
        return JSON.parse(JSON.stringify(defaultProfile));
    }

    function saveProfile(profile) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    }

    // ── Mistake Notebook Storage ──
    function getMistakes() {
        try {
            const raw = localStorage.getItem(MISTAKE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) return parsed;
            }
        } catch (e) {}
        saveMistakes(defaultMistakes);
        return JSON.parse(JSON.stringify(defaultMistakes));
    }

    function saveMistakes(list) {
        try {
            localStorage.setItem(MISTAKE_KEY, JSON.stringify(list));
        } catch (e) {}
    }

    function recordMistakes(wrongItems, categoryName) {
        if (!Array.isArray(wrongItems) || wrongItems.length === 0) return getMistakes();
        const list = getMistakes();
        const today = new Date().toISOString().split('T')[0];

        wrongItems.forEach(item => {
            const qId = String(item.questionId || item._id || ('m_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6)));
            const existingIdx = list.findIndex(m => String(m._id) === qId || m.questionText === item.questionText);
            if (existingIdx !== -1) {
                list[existingIdx].mistakeCount = (list[existingIdx].mistakeCount || 1) + 1;
                list[existingIdx].selectedAnswer = item.selectedAnswer || list[existingIdx].selectedAnswer;
                list[existingIdx].lastMissedAt = today;
            } else {
                list.unshift({
                    _id: qId,
                    questionText: item.questionText,
                    options: item.options || { A: 'Option A', B: 'Option B', C: 'Option C', D: 'Option D' },
                    correctAnswer: item.correctAnswer || 'A',
                    selectedAnswer: item.selectedAnswer || 'None',
                    explanation: item.explanation || 'Review core concept in the study portal.',
                    categoryName: item.categoryName || categoryName || 'General Exam',
                    subCategory: item.subCategory || '',
                    mistakeCount: 1,
                    lastMissedAt: today
                });
            }
        });

        // Keep top 100 recent mistakes
        const trimmed = list.slice(0, 100);
        saveMistakes(trimmed);
        return trimmed;
    }

    function resolveMistake(questionId) {
        const list = getMistakes().filter(m => String(m._id) !== String(questionId));
        saveMistakes(list);
        return list;
    }

    function recordQuizResult(quizData) {
        const profile = loadProfile();
        const total = quizData.totalQuestions || 50;
        const score = quizData.score || 0;
        const correct = quizData.correctCount || 0;
        const wrong = quizData.wrongCount || 0;
        const unattempted = quizData.unattemptedCount || (total - correct - wrong);
        const accuracy = total > 0 ? +((correct / total) * 100).toFixed(1) : 0;
        const catName = quizData.categoryName || "General Quiz";

        profile.testHistory.unshift({
            id: 'test_' + Date.now(),
            testName: quizData.testName || (catName + ' Mock Test'),
            category: catName,
            date: new Date().toISOString().split('T')[0],
            score: score,
            total: total,
            accuracy: accuracy,
            timeSpent: quizData.timeSpent || '30 mins',
            status: accuracy >= 70 ? 'Passed (FPSC Merit Tier)' : (accuracy >= 50 ? 'Average' : 'Review Required')
        });

        if (profile.testHistory.length > 25) {
            profile.testHistory = profile.testHistory.slice(0, 25);
        }

        profile.overallStats.testsCompleted += 1;
        profile.overallStats.questionsAttempted += total;
        profile.overallStats.correctAnswers += correct;
        profile.overallStats.wrongAnswers += wrong;
        profile.overallStats.unattempted += unattempted;

        const totalAtt = profile.overallStats.questionsAttempted;
        const totalCorr = profile.overallStats.correctAnswers;
        profile.overallStats.overallAccuracy = totalAtt > 0 ? +((totalCorr / totalAtt) * 100).toFixed(1) : 0;

        profile.overallStats.examReadinessIndex = Math.min(
            98,
            Math.round((profile.overallStats.overallAccuracy * 0.7) + (Math.min(profile.overallStats.testsCompleted, 30) * 0.6) + 12)
        );

        const subIndex = profile.subjectMastery.findIndex(s =>
            catName.toLowerCase().includes(s.subject.toLowerCase()) ||
            s.subject.toLowerCase().includes(catName.toLowerCase())
        );

        if (subIndex !== -1) {
            const sub = profile.subjectMastery[subIndex];
            sub.attempted += total;
            sub.correct += correct;
            sub.accuracy = +((sub.correct / sub.attempted) * 100).toFixed(1);
            if (sub.accuracy >= 80) sub.status = "Mastered";
            else if (sub.accuracy >= 70) sub.status = "Strong";
            else if (sub.accuracy >= 60) sub.status = "Moderate";
            else sub.status = "Weak Area";
        }

        saveProfile(profile);
        return profile;
    }

    function addStudyTime(minutes) {
        const profile = loadProfile();
        const hours = +(minutes / 60).toFixed(2);
        profile.totalStudyHours = +(profile.totalStudyHours + hours).toFixed(1);
        profile.currentWeekHours = +(profile.currentWeekHours + hours).toFixed(1);

        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const todayName = dayNames[new Date().getDay()];
        const todayObj = profile.dailyHours.find(d => d.day === todayName);
        if (todayObj) {
            todayObj.hours = +(todayObj.hours + hours).toFixed(1);
        }

        saveProfile(profile);
        return profile;
    }

    function resetToDefault() {
        saveProfile(defaultProfile);
        saveMistakes(defaultMistakes);
        return JSON.parse(JSON.stringify(defaultProfile));
    }

    return {
        getProfile: loadProfile,
        saveProfile: saveProfile,
        recordQuizResult: recordQuizResult,
        addStudyTime: addStudyTime,
        resetProfile: resetToDefault,
        getMistakes: getMistakes,
        recordMistakes: recordMistakes,
        resolveMistake: resolveMistake
    };
})();
