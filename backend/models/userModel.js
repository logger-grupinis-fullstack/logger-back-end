const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please add first name"],
    },
    email: {
        type: String,
        unique: [true, "Email already used"],
        required: [true, "Please add email"],
    },
    password: {
        type: String,
        required: [true, "Please add password"],
    },
    confirmedPassword: {
        type: String,
        required: [true, "Please confirm password"],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Passwords do not match",
        },
    },
    role: {
        type: String,
        default: "simple",
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task'}]
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);
