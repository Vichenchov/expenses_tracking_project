const mongoose = require("mongoose")

const schema = mongoose.Schema({
	Name: String
})

module.exports = mongoose.model("category", schema)