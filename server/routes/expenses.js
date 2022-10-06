const express = require("express");
const expensesModel = require('../models/expense');
const currencyApi = require('.././API/convert_currency_api/currency_api')
const statistics = require('./../services/statistics');

const router = express.Router();

router.get("/getExpenses", async (req, res) => {
	const expensesList = await expensesModel.find().populate('category creditLastNums');
	res.send(expensesList)
})

router.post("/addExpenses", async (req, res) => {
	var newExpense = new expensesModel(req.body);
	if (newExpense.currency != 'ILS') {
		var convertedCurrency = await currencyApi.convertCurrenciesToILS(newExpense.currency, newExpense.price);
		newExpense.currency = convertedCurrency;
	}
	await newExpense.save().then(() => {
		res.send('expense saved successfully');
	}).catch(err => {
		res.status(200).send(err.message);
	});
})

router.post("/updateExpense", async (req, res) => {
	//! update expense by id - need to check if the expense that is being updated has an id
	await expensesModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
		res.send('expense updated successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

router.delete("/deleteExpense", async (req, res) => {
	await expensesModel.findByIdAndDelete(req.body.id).then(() => {
		res.send('expense deleted successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

router.get("/getExpensesByDate", async (req, res) => {
	let datesObj = {
		start: req.body.start,
		end: req.body.end
	}
	var expensesList = await statistics.getExpensesByDate(datesObj);
	res.send(expensesList);
});

router.get("/getExpensesByRange", async (req, res) => {
	let range = req.body.range;
	var datesObj = await statistics.getDateRange(range);
	var expensesList = await statistics.getExpensesByDate(datesObj);
	res.send(expensesList);
});

router.get("/getWhatLeftToSpent", async (req, res) => {
	const date = new Date();
	const firstDayOfTheMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	const currentDayOfTheMonth = date;
	let datesObj = {
		start: firstDayOfTheMonth,
		end: currentDayOfTheMonth
	};
	var expensesList = await statistics.getExpensesByDate(datesObj);
	var sumOfExpenses = await statistics.sumOfExpenses(expensesList);
	var defultMonthlyExpensesSum = await statistics.getMonthlyExpensesSum();
	var leftToSpent = defultMonthlyExpensesSum - sumOfExpenses;
	res.send(leftToSpent.toString());
});

module.exports = router;