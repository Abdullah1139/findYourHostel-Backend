const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Hosteller', 'Hostellite', 'Admin'],
    required: true,
  },
});

// Compound index
userSchema.index({ email: 1, role: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
