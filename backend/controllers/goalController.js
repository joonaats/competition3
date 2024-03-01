const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = async (req, res, next) => {
  try {
    // Assuming you have the user information in the request, like user ID
    const userId = req.user.id; // Adjust this based on your authentication setup

    // Find the user by ID to get associated goals
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Retrieve goals associated with the user
    const goals = await Goal.find({ user: userId });

    res.json(goals);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = async (req, res, next) => {
};

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = async (req, res, next) => {
 
};

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = async (req, res, next) => {

};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
