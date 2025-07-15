import User from '../models/authModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import tokenGenerator from '../helper/verifiedToken.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isValidatePassword = await bcrypt.compare(password, user.password);
    if (!isValidatePassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);

    console.log("jwt_token:", token);

    // Set token as cookie
  res.cookie('token', token, {
    httpOnly: true, // JS can't access it – protects from XSS
    secure: process.env.NODE_ENV === 'production', // only over HTTPS
    sameSite: 'Strict', // or 'Lax' for limited cross-site
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
  

export const register = async (req, res) => {
    // Logic for user registration
    const { email, username, password, role } = req.body;
    if (!email || !username || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if(user){
      return res.status(400).json({ message: "Email already exists" });
    }
  
    const hashedPassword = await bcrypt.hash(password,10);
 
    const newUser = await User.create({ 
      email,
      username,
      password: hashedPassword,
      role
     })
     res.status(201).json({message: "User created successfully!",newUser});
    //  newUser.save();
}

export const logout = (req, res) => {
    // Logic for user logout
    res.status(200).json({ message: "Logout successful" });
}

export const resetPassword = async (req, res) => {
    const token = tokenGenerator();
    console.log(token);
    res.status(200).json({ message: "Reset password" });
}

