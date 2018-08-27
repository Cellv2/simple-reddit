const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    name: String,
    age: Number,
    number: String
});

module.exports = mongoose.model("Test", testSchema);
