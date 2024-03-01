const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  const {username, email, password, date_of_birth, phone_number} = req.body

  try {
    const user = await User.signup(username, email, password, date_of_birth, phone_number)

    // create a token
    const token = createToken(user._id)

    res.status(201).json({_id: user._id, username, email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  const {username, password} = req.body

  try {
    const user = await User.login(username, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({_id: user._id, username, email: user.email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
  try {
    // User information is available in req.user (set by the protect middleware)
    const user = req.user;

    // Send the user information in the response
    res.status(200).json({ _id: user._id, username: user.username, email: user.email});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  registerUser,
  loginUser,
  getMe,
};
