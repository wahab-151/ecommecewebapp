import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./theme/theme.slicer";
import Products from "./products/product.slicer";
import authSlicer from "./auth/auth.slicer";
import cartSlicer from "./cart/cart.slicer";
const rootReducer = combineReducers({
  Products: Products,
  auth: authSlicer,
  themeSlice,
  Cart:cartSlicer
});
export default rootReducer;
