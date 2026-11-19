const jwt = require('jsonwebtoken');

/**
 * Middleware to verify JWT authentication token
 * Accepts token via:
 * 1. 'auth-token' header (custom header used by frontend)
 * 2. 'Authorization: Bearer <token>' header (standard HTTP header)
 */
const verifyToken = (req, res, next) => {
    let token = req.header('auth-token');

    if (!token && req.header('authorization')) {
        const parts = req.header('authorization').split(' ');
        if (parts.length === 2 && parts[0].toLowerCase() === 'bearer') {
            token = parts[1];
        } else if (parts.length === 1) {
            token = parts[0];
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Access Denied: No authentication token provided' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET || 'super_secret_jwt_key_12345');
        req.user = verified;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid or expired authentication token' });
    }
};

/**
 * Middleware to verify token AND ensure the user has admin role
 */
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (!req.user || !req.user.isAdmin) {
            return res.status(403).json({ message: 'Access Denied: Admin privileges required' });
        }
        next();
    });
};

// Export as both default function and named properties for flexibility
module.exports = verifyToken;
module.exports.verifyToken = verifyToken;
module.exports.verifyAdmin = verifyAdmin;

