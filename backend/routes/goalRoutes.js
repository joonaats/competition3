const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController');

router.use(protect)
// Route for getting goals (GET /api/goals)
router.get('/', getGoals)


// Route for creating a new goal (POST /api/goals)


// Route for updating a goal by ID (PUT /api/goals/:id)


// Route for deleting a goal by ID (DELETE /api/goals/:id)


module.exports = router;
