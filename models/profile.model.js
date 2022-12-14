const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Profile', profileSchema)
