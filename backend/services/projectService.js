const Project = require("../models/projectModel.js");

class ProjectService {
  async createProject(name, description, projectManager, workHours, userId) {
    if (!name || !description || !projectManager || !workHours) {
      throw new Error("Please fill all fields");
    }

    const project = await Project.create({
      name: name,
      description: description,
      projectManager: projectManager,
      workHours: workHours,
      user: userId,
    });

    return project;
  }

  async getProjectsByUserId(userId) {
    const projects = await Project.find({ user: userId });
    return projects;
  }

  async getAllProjects() {
    const projects = await Project.find();
    return projects;
  }

  async updateProjectById(id, updates) {
    const project = await Project.findById(id);
    if (!project) {
      throw new Error("Project was not found");
    }

    if (updates.name) {
      project.name = updates.name;
    }

    if (updates.description) {
      project.description = updates.description;
    }

    if (updates.projectManager) {
      project.projectManager = updates.projectManager;
    }

    if (updates.workHours) {
      project.workHours = updates.workHours;
    }

    const result = await project.save();
    return result;
  }

  async deleteProjectById(id) {
    const result = await Project.deleteOne({ _id: id });
    return result;
  }
}

module.exports = new ProjectService();
