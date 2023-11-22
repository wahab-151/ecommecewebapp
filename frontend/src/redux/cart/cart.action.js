import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProductToCartApi, deleteCartItemApi, getCartItemsApi } from "./api";

export const addProductToCart = createAsyncThunk(
    'cart/addProduct',
    async ({ userId, quantity, productId }) => {
      const response = await addProductToCartApi({ userId, quantity, productId });
      return response;
    }
  );
 
  export const getCartItems = createAsyncThunk(
    "getCartItemsApi / CartItemsApi",
    async (userId) => {
      const res = await getCartItemsApi(userId);
      console.log(res, "Cartitemssss");
      return res;
    }
  );

  export const deleteCartItem = createAsyncThunk(
    "getCartItemsApi / CartItemsApi",
    async ({ userId, productId ,dispatch=null}) => {
      const res = await deleteCartItemApi({ userId, productId });
      dispatch !==null && dispatch(getCartItems(userId))
      return res;
    }
  );
  