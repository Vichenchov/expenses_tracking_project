const categoryModel = require('../models/categories');
const express = require("express")
const router = express.Router();

router.get("/getCategories", async (req, res) => {
    const categoryList = await categoryModel.find();
    res.send(categoryList)
})

router.post("/addCategory", async (req, res) => {
	var newCategory = new categoryModel(req.body);
	await newCategory.save().then(() => {
		res.send('category saved successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

router.post("/updateCategory", async (req, res) => {
	//! update Category by id - need to check if the expense that is being updated has an id
	await categoryModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
		res.send('category updated successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

router.delete("/deleteCategory", async (req, res) => {
	await categoryModel.findByIdAndDelete(req.body.id).then(() => {
		res.send('category deleted successfully');
	}).catch(err => {
		res.status(err.statusCode).send(err.message);
	});
})

module.exports = router;