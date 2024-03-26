const express = require("express");
const router = express.Router();

const {
  createWorkType,
  getAllWorkTypes,
  getWorkTypesByUserId,
  updateWorkTypeById,
  deleteWorkTypeById,
} = require("../controllers/workTypeController.js");
const protect = require("../middleware/authMiddleware.js");

// @ /api/workTypes

router.post("/", protect, createWorkType);
router.get("/", protect, getAllWorkTypes);
router.get("/user", protect, getWorkTypesByUserId);
router.put("/:id", protect, updateWorkTypeById);
router.delete("/:id", protect, deleteWorkTypeById);


module.exports = router;
