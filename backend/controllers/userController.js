const userService = require("../services/userService")
const asyncHandler = require("express-async-handler")

// user register

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, email, password } = req.body;

    try {
        const user = await userService.registerUser(firstName, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// user login

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userService.loginUser(email, password);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// user logout

const logoutUser = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    try {
        const result = await userService.logoutUser(userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


module.exports = { registerUser, loginUser, logoutUser }