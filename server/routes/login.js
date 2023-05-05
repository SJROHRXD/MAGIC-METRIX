import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';


// Login route with JWT, bcrypt, and sequelize

// This route takes in an email and password, and returns a JWT token if the email and password are valid
// Sequelize is used to query the database for the user with the given email
// If the user is found, bcrypt is used to compare the password from the request body with the hashed password in the database
// If the passwords match, a JWT token is created and returned to the client
// The token is signed with the user's id and email, and expires in 6 hours
// If the email or password are invalid, a 400 status code is returned to the client

const router = express.Router();

router.post ('/login', async (req, res) => {
    
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if(!user) {
        return res.status(400).json({ message: 'Invalid email address or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email address or password' });
    }

    // token expires in 6 hours
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '6h'
    });

    res.json({ message: 'Welcome Back!', token: token });
});

export default router;