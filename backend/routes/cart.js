const express = require("express");
const addToCart = require("../controllers/cart/addToCart");
const getCartItems  = require("../controllers/cart/getCartItems");
const productIdToDelete  = require("../controllers/cart/deleteCartItem");


const cartRouter = express.Router();
cartRouter.post('/add-to-cart', addToCart);
cartRouter.get('/get-cart-items/:userId', getCartItems);
cartRouter.delete('/delete-from-cart/', productIdToDelete);
module.exports = cartRouter