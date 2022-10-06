const creditLastNumsModel = require('../models/creditLestNums');
const express = require("express")
const router = express.Router();

router.get("/getCredits", async (req, res) => {
	const creditLestNumsList = await creditLastNumsModel.find();
	res.send(creditLestNumsList)
})

router.post("/addCredits", async (req, res) => {
	var newCredit = new creditLastNumsModel(req.body);
	await newCredit.save().then(() => {
		res.send('credit saved successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

router.post("/updateCredit", async (req, res) => {
	//! update credit by id - need to check if the expense that is being updated has an id
	await creditLastNumsModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
		res.send('credit updated successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

router.delete("/deleteCredit", async (req, res) => {
	await creditLastNumsModel.findByIdAndDelete(req.body.id).then(() => {
		res.send('credit deleted successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

module.exports = router;