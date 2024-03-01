const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
      },
      dueDate: {
        type: Date,
        required: true,
      },
      priority: {
        type: String,
        required: true,
      },
    }
)

module.exports = mongoose.model('Goal', goalSchema)
