const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:[true, "Please add first name"],
    },
    email:{
        type: String,
        unique: [true, "email already used"],
        required:[true, "Please add email"],
    },
    password:{
        type: String,
        required:[true, "Please add password"],
    },
    role: {
        type: String,
        default: "simple",
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);