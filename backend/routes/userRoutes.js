const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController.js");
const protect = require("../middleware/authMiddleware.js");
// /api/users/

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.get("/user", protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;
