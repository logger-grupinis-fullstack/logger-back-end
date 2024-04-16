const mongoose = require('mongoose');

const workDoneSchema = new mongoose.Schema(
  {
    workType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'WorkType',
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('WorkDone', workDoneSchema);
