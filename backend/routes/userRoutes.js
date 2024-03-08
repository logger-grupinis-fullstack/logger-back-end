const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController.js");
const protect = require("../middleware/authMiddleware.js");

// /api/users/

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, (req, res) => {
    res.json(req.user);
});

module.exports = router;