import express from 'express';
import setRoutes from './routes/index.js';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// JWT Auth Middleware
function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: 'Authorization header missing or malformed' });
    }
}

// Example: Protect all routes except /login
app.use((req, res, next) => {
    if (req.path === '/login') return next();
    authenticateJWT(req, res, next);
});

// Example login route for issuing JWTs
app.post('/login', (req, res) => {
    const { username } = req.body;
    // TODO: validate an actual username/password!
    const user = { username };
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Initialize routes
setRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});