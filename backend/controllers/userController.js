const userService = require("../services/userService")
const asyncHandler = require("express-async-handler")

// user register

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, email, password, confirmedPassword } = req.body;

    const user = await userService.registerUser(firstName, email, password, confirmedPassword)
    res.status(201).json(user);
});

// user login

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await userService.loginUser(email, password)
    res.json(user)
})

// user logout

const logoutUser = asyncHandler(async(req, res) => {
    const userId = req.user._id;

    const result = await userService.logoutUser(userId);

    res.status(200).json(result)
})


module.exports = { registerUser, loginUser, logoutUser }