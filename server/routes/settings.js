const settingsModel = require('../models/settings');
const express = require("express")
const router = express.Router();
const currencyApi = require('.././API/convert_currency_api/currency_api')


router.get("/getSettings", async (req, res) => {
	const settingsList = await settingsModel.find().populate('creditLastNums');
	res.send(settingsList)
})

router.post("/updateSettings", async (req, res) => {
	await settingsModel.updateOne({}, req.body).then(() => {
		res.send('settings updated successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

router.get("/getCurrencyList", async (req, res) => {
	await currencyApi.getCurrencyList().then(currencyList => {
		res.send(currencyList);
	});
})

module.exports = router;