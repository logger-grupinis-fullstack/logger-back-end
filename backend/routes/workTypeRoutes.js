const express = require("express");
const router = express.Router();

const {
  createWorkType,
  getWorkTypes,
  getAllWorkTypes,
  updateWorkType,
  deleteWorkType,
} = require("../controllers/workTypeController.js");
const protect = require("../middleware/authMiddleware.js");

// router.get("/:id/all", protect, getWorkTypes);
router.put("/:id", protect, updateWorkType);
router.delete("/:id", protect, deleteWorkType);

// router.get("/all", protect, getAllWorkTypes);
router.post("/", protect, createWorkType);

module.exports = router;
