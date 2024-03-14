const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, enum: ["coding", "designing", "testing", "bugfixing", "organizing"], required: true}
})

module.exports = mongoose.model('Task', taskSchema)
