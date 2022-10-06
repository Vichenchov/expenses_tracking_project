const mongoose = require("mongoose")
var Schema = mongoose.Schema

const schema = mongoose.Schema({
    theme: ['Light', 'dark'],
    monthlyExpensesSum: Number,
    name: String,
    defaultCurrency: String,
    creditLastNums: {
        type: Schema.Types.ObjectId,
        ref: 'CreditLastNum'
    }
});

module.exports = mongoose.model("settings", schema)

// דוגמא לאיך לשמור דוקומנט בקולקשן הזה
// בעצם את המספר כרטיס האשראי המקושר לטבלה של מספרי אשראי צריך לשמור לפי הID
// כדי לראות את המידע מאחורי הערטיס אשראי צריך להשתמש בפעולה find.().populate('creditLastNums')
// ככה נראה את המידע הרלוונטי ב json
// var c1 = new c({
// 	theme: 'dark',
//     monthlyExpensesSum: 2500,
//     name: 'מקס ויבנצוב',
//     defaultCurrency: 'NIS',
//     creditLastNums: '63065c25d65c8a8cff1ec985'
// })