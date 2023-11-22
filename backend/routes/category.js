const express = require("express");
const createCategory = require("../controllers/category/createCategory");
const getAllCategories = require("../controllers/category/allCategory");

const categoryRouter = express.Router();
categoryRouter.post("/create-category", createCategory);
categoryRouter.get("/all-categories", getAllCategories);

module.exports = categoryRouter;
