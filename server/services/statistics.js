const express = require("express");
const expensesModel = require('../models/expense');
const settingsModel = require('../models/settings');

module.exports.getDateRange = function (range) {
    var date = new Date();
    datesRange = {
        start: new Date(),
        end: new Date(),
    };
    switch (range) {
        case '7': //last 7 days
            datesRange.start.setDate(date.getDate() - 7);
            break;
        case '30': //last 30 days
            datesRange.start.setDate(date.getDate() - 30);
            break;
        case '182': //last half year
            datesRange.start.setDate(date.getDate() - 182);
            break;
        case '365': //last year
            datesRange.start.setDate(date.getDate() - 365);
            break;
        default: //default case is last day
            datesRange.start.setDate(date.getDate());
            datesRange.end.setDate(date.getDate());
            break;
    }
    return datesRange;
}

module.exports.getExpensesByDate = async (datesObj) => {
    let {
        start,
        end
    } = datesObj;
    let expensesListByDate = await expensesModel.find({
        date: {
            $gte: (start),
            $lte: (end)
        }
    }).then((expensesList) => {
        return expensesList;
    })
    return expensesListByDate;
};

module.exports.sumOfExpenses = async (expenses) => {
    var sumOfExpenses = 0;
    expenses.forEach(expense => {
        sumOfExpenses += expense.price;
    });
    return sumOfExpenses;
}

module.exports.getMonthlyExpensesSum = async (req, res) => {
    var sum = await settingsModel.find().then(sum => {
        return sum[0].monthlyExpensesSum;
    });
    return sum;
};