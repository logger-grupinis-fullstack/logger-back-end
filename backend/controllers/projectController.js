const asyncHandler = require("express-async-handler");
const projectService = require("../services/projectService");


// create Project
// @route: POST /api/projects

const createProject = asyncHandler(async (req, res) => {
  const { name, description, projectManager, workHours } = req.body;
  const userId = req.user.id;

  try {
      const project = await projectService.createProject(name, description, projectManager, workHours, userId);
      res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
      res.status(400).json({ error: "Project creation failed: " + error.message });
  }
});

// get all projects
// @route: GET /api/projects

const getAllProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.status(200).json({ message: "Projects fetched successfully", projects });
  } catch (error) {
    res.status(400).json({ error: "Projects fetch failed: " + error.message });
  }
})


// Get projects by user id
// @route: GET /api/projects/user

const getProjectsByUserId = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  
  try {
    const projects = await projectService.getProjectsByUserId(userId);
    res.status(200).json({ message: "Projects fetched successfully", projects });
  } catch (error) {
    res.status(400).json({ error: "Projects fetch failed: " + error.message });
  }
});


// update project by id
// @route: PUT /api/projects/:id

const updateProjectById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedProject = await projectService.updateProjectById(id, updates);
    res.status(200).json({ message: "Project updated successfully", project: updatedProject });
  } catch (error) {
    res.status(400).json({ error: "Failed to update project: " + error.message });
  }
});

// delete project by project id
// @route: DELETE /api/projects/:id

const deleteProjectById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const result = await projectService.deleteProjectById(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete project: " + error.message });
  }
});

module.exports = { createProject, getAllProjects, getProjectsByUserId, updateProjectById, deleteProjectById };
