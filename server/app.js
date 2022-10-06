const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const expensesRoutes = require('./routes/expenses');
const categoriesRoutes = require('./routes/categories');
const creditsRoutes = require('./routes/creditLestNums');
const settingsRoutes = require('./routes/settings');
require('dotenv').config();
const port = '5000'

const url = process.env.CONNECTION_STRING_MONGODB_ATLAS;

mongoose
	.connect(url)
	.then(() => {
		const app = express()
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({
			extended: true
		}));
		app.use("/expenses", expensesRoutes)
		app.use("/categories", categoriesRoutes)
		app.use("/credits", creditsRoutes)
		app.use("/settings", settingsRoutes)
		app.listen(port, () => {
			console.log(`Server has started on port: ${port}`)
		})
	}).catch((err) => {
		console.error(`Error connecting to the database. ${err}`);
	})