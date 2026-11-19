const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection: Only connect if valid URI is supplied, never hang serverless execution
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.warn('MongoDB connection error:', err.message));
}

// API Routes
try {
    const apiRoutes = require('./routes/api');
    const authRoutes = require('./routes/auth');
    app.use('/api', apiRoutes);
    app.use('/api/auth', authRoutes);
} catch (e) {
    console.warn('API routes loading warning:', e.message);
}

// Serve Frontend Static Files
const frontendPath = path.join(__dirname, '../frontend');
if (fs.existsSync(frontendPath)) {
    app.use(express.static(frontendPath));

    app.get('/', (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });

    app.get('*', (req, res, next) => {
        if (req.path.startsWith('/api')) {
            return next();
        }
        const requestedFile = path.join(frontendPath, req.path);
        if (fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()) {
            return res.sendFile(requestedFile);
        }
        res.sendFile(path.join(frontendPath, 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('CSS Prep Central Backend API is running.');
    });
}

// Export for Vercel / Run locally
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
