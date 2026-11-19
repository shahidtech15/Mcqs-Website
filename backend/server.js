const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection: Only connect if valid URI is supplied; fail gracefully without crashing
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('MongoDB Connected successfully'))
        .catch(err => console.warn('MongoDB connection warning:', err.message));
} else {
    console.log('No MONGODB_URI provided in environment. Running in standalone API mode.');
}

// Root Route: API Health and Information
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'online',
        service: 'CSS Prep Central & MCQs Portal Backend API',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        endpoints: {
            categories: '/api/categories/with-counts',
            authLogin: '/api/auth/login',
            authRegister: '/api/auth/register',
            health: '/health'
        }
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        uptime: process.uptime(),
        mongoStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Mount API Routes safely
try {
    const apiRoutes = require('./routes/api');
    const authRoutes = require('./routes/auth');
    app.use('/api', apiRoutes);
    app.use('/api/auth', authRoutes);
} catch (err) {
    console.error('Error mounting API routes:', err.message);
}

// 404 Handler for undefined API routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Endpoint not found',
        path: req.originalUrl
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled server error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message || 'An unexpected error occurred'
    });
});

// ALWAYS listen on PORT when run directly (Vercel Node runtime uses process.env.PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
