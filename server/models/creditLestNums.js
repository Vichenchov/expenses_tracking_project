const mongoose = require("mongoose")

const schema = mongoose.Schema({
	Number: String,
	Name: String
})

module.exports = mongoose.model("CreditLastNum", schema)