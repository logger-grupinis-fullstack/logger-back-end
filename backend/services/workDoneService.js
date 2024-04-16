const WorkDone = require('../models/WorkDone');

class WorkDoneService {
  async createWorkType(
    workTypeId,
    projectId,
    description,
    startTime,
    endTime,
    userId
  ) {
    if (!startTime || !endTime || !description) {
      throw new Error('Please fill all fields');
    }

    const workDone = await WorkDone.create({
      workType: workTypeId,
      project: projectId,
      description: description,
      startTime: startTime,
      endTime: endTime,
      user: userId,
    });

    return workDone;
  }

  async getWorkDoneByUserId(userId) {
    const workDone = await WorkDone.find({ user: userId });
    return workDone;
  }

  async getAllWorkDone() {
    const workDone = await WorkDone.find();
    return workDone;
  }

  async updateWorkDoneById(id, updates) {
    const workDone = await WorkDone.findById(id);
    if (!workDone) {
      throw new Error('Work was not found');
    }

    if (updates.description) {
      workDone.description = updates.description;
    }

    if (updates.startTime) {
      workDone.startTime = updates.startTime;
    }

    if (updates.endTime) {
      workDone.endTime = updates.endTime;
    }

    const result = await workDone.save();
    return result;
  }

  async deleteWorkDoneById(id) {
    const result = await WorkDone.deleteOne({ _id: id });
    return result;
  }
}

module.exports = new WorkDoneService();
