const express = require("express");
const router = express.Router();

const {
    createProject,
    getAllProjects,
    getProjectsByUserId,
    updateProjectById,
    deleteProjectById,
} = require("../controllers/projectController.js");
const protect = require("../middleware/authMiddleware.js");

// @ /api/projects

router.post("/", protect, createProject);
router.get("/", protect, getAllProjects);
router.get("/user", protect, getProjectsByUserId);
router.put("/:id", protect, updateProjectById);
router.delete("/:id", protect, deleteProjectById);


module.exports = router;
