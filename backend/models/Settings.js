const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    defaultQuizTime: {
        type: Number,
        default: 15 // minutes
    },
    defaultQuestionCount: {
        type: Number,
        default: 20
    },
    timerEnabled: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Settings', settingsSchema);
