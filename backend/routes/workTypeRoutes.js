const express = require("express");
const router = express.Router();

const {
  createWorkType,
  updateWorkType,
  deleteWorkType,
} = require("../controllers/workTypeController.js");
const protect = require("../middleware/authMiddleware.js");

router.put("/:id", protect, updateWorkType);
router.delete("/:id", protect, deleteWorkType);
router.post("/", protect, createWorkType);

module.exports = router;
