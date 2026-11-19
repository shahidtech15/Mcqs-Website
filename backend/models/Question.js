const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true
    },
    options: {
        A: { type: String, required: true },
        B: { type: String, required: true },
        C: { type: String, required: true },
        D: { type: String, required: true }
    },
    correctAnswer: {
        type: String,
        required: true,
        enum: ['A', 'B', 'C', 'D']
    },
    explanation: {
        type: String,
        default: ''
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subCategory: {
        type: String,
        default: ''
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        default: 'Medium'
    },
    comments: [{
        text: String,
        date: { type: Date, default: Date.now }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Database Indexes for Performance & Scalability
// 1. Index for aggregation by category & subcategory lookups (speeds up /categories/with-counts)
QuestionSchema.index({ category: 1, subCategory: 1 });

// 2. Compound index for filtered queries (category + subCategory + difficulty + pagination/sorting)
QuestionSchema.index({ category: 1, subCategory: 1, difficulty: 1, createdAt: -1 });

// 3. Single index for difficulty filtering
QuestionSchema.index({ difficulty: 1 });

// 4. Index for sorting latest questions feed
QuestionSchema.index({ createdAt: -1 });

// 5. Full-text search index across question content and explanations
QuestionSchema.index({ questionText: 'text', explanation: 'text' });

module.exports = mongoose.model('Question', QuestionSchema);
