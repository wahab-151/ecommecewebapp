
import { createSlice } from "@reduxjs/toolkit";
import { addProductToCart, deleteCartItem, getCartItems } from "./cart.action";

const initialState={
    //add to cart product
  cartItems: [],
  cartLoading: false,
  cartLoaded: false,
  cartLoadedFailed: false,
  cartData:[]
}

const Cart = createSlice({
    name: "cart",
    initialState: initialState,
    extraReducers: {
         //Product add to cart
    [addProductToCart.pending]: (state) => {
        state.cartLoading = true;
      },
      [addProductToCart.fulfilled]: (state, action) => {
        state.cartLoading = false;
        state.cartLoaded = true;
        state.cartItems = action.payload;
      },
      [addProductToCart.rejected]: (state) => {
        state.cartLoading = false;
        state.cartLoadedFailed = true;
      },
           //get cart data
    [getCartItems.pending]: (state) => {
      state.cartLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.cartLoading = false;
      state.cartLoaded = true;
      state.cartData = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.cartLoading = false;
      state.cartLoadedFailed = true;
    },
    //delete cart item

    [deleteCartItem.pending]: (state) => {
      state.cartLoading = true;
    },
    [deleteCartItem.fulfilled]: (state, action) => {
      state.cartLoading = false;
      state.cartLoaded = true;
      state.cartData = action.payload;
    },
    [deleteCartItem.rejected]: (state) => {
      state.cartLoading = false;
      state.cartLoadedFailed = true;
    },


    }})
    export default Cart.reducer;