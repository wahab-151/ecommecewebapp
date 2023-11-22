const express = require("express");
const createProducts = require("../controllers/products/creatProducts");
const getAllproducts = require("../controllers/products/getAllProduct");
const getProductDetails = require("../controllers/products/getProductDetails");
const addToCart = require("../controllers/cart/addToCart");
const deleteProduct = require("../controllers/products/deleteProduct");
const getProductByCategory = require("../controllers/products/getProductByCategory");
const productRouter = express.Router();
productRouter.post("/create-product", createProducts);
productRouter.get("/all-products", getAllproducts);
productRouter.get("/productbycategory/:categoryName", getProductByCategory);
productRouter.get("/product-detail/:productId", getProductDetails);
productRouter.delete("/deleteProduct/:productId", deleteProduct);

module.exports = productRouter;
