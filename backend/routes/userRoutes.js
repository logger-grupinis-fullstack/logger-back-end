const express = require("express");
const router = express.Router();
const {registerUser, loginUser, getUser} = require("../controllers/userController.js");
const protect = require("../middleware/authMiddleware.js")


// /api/users/

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getUser);

module.exports = router;