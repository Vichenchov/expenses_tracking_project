const mongoose = require("mongoose")
var Schema = mongoose.Schema

const expenseSchema = mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'category'
    }],
    creditLastNums: [{
        type: Schema.Types.ObjectId,
        ref: 'CreditLastNum'
    }],
    currency: String,
    notes: String,
    expenseType: {
        type: String,
        enum: ['credit', 'cash', 'directDebit', 'payments', 'other']
    },
    date: Date
});

module.exports = mongoose.model("Expense", expenseSchema)