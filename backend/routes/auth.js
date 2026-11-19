const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

// Register a new admin (SECURED: requires existing admin JWT, master registration key, or first-time bootstrap)
router.post('/register', async (req, res) => {
    try {
        const { username, password, adminKey } = req.body;

        // Security check: Must provide valid master admin registration key OR an existing admin's JWT token
        const configuredSecret = process.env.ADMIN_REGISTER_KEY || 'mcqs_portal_admin_secret_key_2026';
        const providedKey = adminKey || req.header('x-admin-key');

        let isAuthorized = false;

        // 1. Authorized via master secret registration key
        if (providedKey && providedKey === configuredSecret) {
            isAuthorized = true;
        }

        // 2. Authorized via existing logged-in admin token
        if (!isAuthorized) {
            let token = req.header('auth-token');
            if (!token && req.header('authorization')) {
                const parts = req.header('authorization').split(' ');
                if (parts.length === 2 && parts[0].toLowerCase() === 'bearer') {
                    token = parts[1];
                } else if (parts.length === 1) {
                    token = parts[0];
                }
            }

            if (token) {
                try {
                    const verified = jwt.verify(token, process.env.JWT_SECRET || 'super_secret_jwt_key_12345');
                    if (verified && verified.isAdmin) {
                        isAuthorized = true;
                    }
                } catch (e) {
                    // Token invalid or expired
                }
            }
        }

        // 3. First-time system bootstrap: allow initial admin if zero users exist in the database
        if (!isAuthorized) {
            const userCount = await User.countDocuments();
            if (userCount === 0) {
                isAuthorized = true;
            }
        }

        if (!isAuthorized) {
            return res.status(403).json({
                message: 'Access Denied: Admin registration is protected. An authorized admin session or valid adminKey is required.'
            });
        }

        // Validate payload fields
        if (!username || typeof username !== 'string' || username.trim().length < 3) {
            return res.status(400).json({ message: 'Username must be at least 3 characters long.' });
        }
        if (!password || typeof password !== 'string' || password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
        }

        // Check if username already exists
        const trimmedUsername = username.trim();
        const existingUser = await User.findOne({ username: new RegExp('^' + trimmedUsername + '$', 'i') });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken.' });
        }

        // Hash password securely
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username: trimmedUsername,
            password: hashedPassword,
            isAdmin: true
        });

        await user.save();
        res.status(201).json({
            message: 'Admin user created successfully',
            user: {
                id: user._id,
                username: user.username,
                isAdmin: user.isAdmin
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        // Check if user exists (case-insensitive lookup for convenience)
        const user = await User.findOne({ username: new RegExp('^' + username.trim() + '$', 'i') });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Validate password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create and assign token
        const token = jwt.sign(
            { _id: user._id, username: user.username, isAdmin: user.isAdmin },
            process.env.JWT_SECRET || 'super_secret_jwt_key_12345',
            { expiresIn: '1d' }
        );

        res.json({ token, username: user.username, isAdmin: user.isAdmin });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Verify token route
router.get('/verify', verifyToken, (req, res) => {
    res.json({ message: 'Valid token', user: req.user });
});

// Export router (with verifyToken helper attached for backwards-compatibility)
router.verifyToken = verifyToken;
router.verifyAdmin = verifyAdmin;
module.exports = router;
