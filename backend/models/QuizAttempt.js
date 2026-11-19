const mongoose = require('mongoose');

const quizAttemptSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    },
    subCategory: {
        type: String
    },
    score: {
        type: Number,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number,
        required: true
    },
    timeTaken: {
        type: Number, // In seconds
        required: true
    },
    negativeMarking: {
        type: Number,
        default: 0
    },
    penaltyDeducted: {
        type: Number,
        default: 0
    },
    correctCount: {
        type: Number,
        default: 0
    },
    wrongCount: {
        type: Number,
        default: 0
    },
    unattemptedCount: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Database Indexes for Performance
// 1. Index for sorting attempts by date in admin analytics
quizAttemptSchema.index({ date: -1 });

// 2. Compound index for category-level analytics filtering
quizAttemptSchema.index({ categoryName: 1, date: -1 });

module.exports = mongoose.model('QuizAttempt', quizAttemptSchema);
