const express = require('express');
const router = express.Router();
const Cart = require('../../models/cart/index');
const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    
    let cart = await Cart.findOne({ userId });

    if (cart) {
        // Cart exists for user
        let itemIndex = cart.items.findIndex(p => p.productId == productId);

        if (itemIndex > -1) {
            // Product exists in the cart, update the quantity
            console.log(itemIndex.quantity );
            let item = cart.items[itemIndex];
            item.quantity = item.quantity + quantity;
            cart.items[itemIndex] = item;
        } else {
            // Product does not exists in cart, add new item
            cart.items.push({ productId, quantity });
        }
        cart = await cart.save();
        return res.status(201).send(cart);
    } else {
        // No cart for user, create new cart
        const newCart = await Cart.create({
            userId,
            items: [{ productId, quantity }]
        });

        return res.status(201).send(newCart);
    }
} catch (error) {
    console.error(error);
    res.status(500).send("Error adding to cart");
}
}

module.exports = addToCart