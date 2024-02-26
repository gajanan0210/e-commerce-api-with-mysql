const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30m' });
};

const authController = {
  register: async (req, res) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      const existingUser = await User.getByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.register(email, hashedPassword, firstName, lastName);
      const token = generateToken(newUser.id);
      res.status(201).json({ message: 'User created successfully', token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.getByEmail(email);
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      const token = generateToken(user.id);
      res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = authController;
