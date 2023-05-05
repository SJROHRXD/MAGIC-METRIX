import jwt from "jsonwebtoken";
import express from "express";
import User from "../models/User";
import bcrypt from "bcrypt";



// LOGIN ROUTE W JWT LOGIC 🌷🌼

// require user model 🌼
// require jwt

router = express.Router();

router.post ("/login", async (req, res) => {
    
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if(!user) {
        return res.status(400).json({ message: 'Invalid email address or password' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email address or password' })
    }

    // token expires in 6 hours
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET {
        expiresIn: '6h'
    });

    res.json({ message: "Welcome Back!", token: token });
});