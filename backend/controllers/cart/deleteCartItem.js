const express = require("express");
const router = express.Router();
const Cart = require("../../models/cart/index");
const deleteCartItem = async (req, res) => {
    const { userId, productId } = req.body;
    console.log({userId, productId});
  try {
    // Find the cart based on the user ID
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    // Remove the item from the cart's items array
    cart.items = cart.items.filter(item =>{
        // console.log({item:item.productId.toString()});
        return item._id.toString() !== productId});
    // Save the updated cart
    console.log({cart:cart.items});
    await cart.save();
    return res.json({ success: true, cart });
  } catch (error) {
    console.error('Error deleting item from cart:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = deleteCartItem;
