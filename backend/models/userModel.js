const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add name'],
    },
    email: {
      type: String,
      unique: [true, 'email already used'],
      required: [true, 'Please add email'],
    },
    password: {
      type: String,
      required: [true, 'Please add password'],
    },
    role: {
      type: String,
      default: 'simple',
    },
    workTypes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkType' }],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    workDone: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkDone' }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
