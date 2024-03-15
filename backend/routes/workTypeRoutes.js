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

router.post("/", createWorkType);
router.get("/:id/all", getWorkTypes);
router.get("/all", getAllWorkTypes);
router.put("/:id", updateWorkType);
router.delete("/:id", deleteWorkType);

module.exports = router;
