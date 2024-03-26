const WorkType = require("../models/WorkType");

class WorkTypeService {
  async createWorkType(name, description, userId) {
    if (!name || !description) {
      throw new Error("Please fill all fields");
    }

    const workType = await WorkType.create({
      name: name,
      description: description,
      user: userId,
    });

    return workType;
  }

  async getWorkTypesByUserId(userId) {
    const workTypes = await WorkType.find({ user: userId });
    return workTypes;
  }

  async getAllWorkTypes() {
    const workTypes = await WorkType.find();
    return workTypes;
  }

  async updateWorkTypeById(id, updates) {
    const workType = await WorkType.findById(id);
    if (!workType) {
      throw new Error("Work type was not found");
    }

    if (updates.name) {
      workType.name = updates.name;
    }

    if (updates.description) {
      workType.description = updates.description;
    }

    const result = await workType.save();
    return result;
  }

  async deleteWorkTypeById(id) {
    const result = await WorkType.deleteOne({ _id: id });
    return result;
  }
}

module.exports = new WorkTypeService();
