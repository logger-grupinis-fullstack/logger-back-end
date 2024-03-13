const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");



const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};


// User register
// @route POST /api/users
// @access PUBLIC

const registerUser = asyncHandler(async(req, res) => {
    const {firstName, email, password} = req.body;

    if(!firstName || !email || !password) {
        res.status(400);
        throw new Error("Please fill all fields");
    };

    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        firstName: firstName,
        email: email,
        password: hashedPassword,
    });

    if(user){
        res.status(201).json({
            _id:user.id,
            firstName: user.firstName,
            email: user.email,
            token: generateToken(user._id),
            role: user.role,
        });
    }
    else {
        res.status(400);
        throw new Error("Invalid user data")
    };
});

// login user
// @ /api/users/login

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

   if(!user){
    res.status(404);
    throw new Error('User not found')
   }

   const isPasswordValid = await bcrypt.compare(password, user.password)
   if(!isPasswordValid) {
    res.status(400);
    throw new Error("Invalid credentials")
   }

   res.json({
    _id: user.id,
    firstName: user.firstName,
    email: user.email,
    token: generateToken(user._id)
   })
})


module.exports = {registerUser, loginUser};