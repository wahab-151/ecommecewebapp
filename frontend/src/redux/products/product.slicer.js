import { createSlice } from "@reduxjs/toolkit";
import {
  getAllproducts,
  getProductDetail,
  getProductByCategory,
} from "./products.action";

const initialState = {
  //all products
  areallproductLoading: false,
  areallproductLoaded: false,
  areallproductLoadingError: false,
  getproducts: [],
  /// MENS
  categoryProductsLoading: false,
  categoryProductsLoaded: false,
  categoryProductsLoadedFailed: false,
  categoryProducts: [],

  //Product Detail
  productdetailLoading: false,
  productdetailLoaded: false,
  productdetailLoadedFailed: false,
  productdetail: [],
};

const Products = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: {
    //allProduct
    [getAllproducts.pending]: (state) => {
      state.areallproductLoading = true;
    },
    [getAllproducts.fulfilled]: (state, action) => {
      state.areallproductLoading = false;
      state.areallproductLoaded = true;
      state.getproducts = action.payload;
    },
    [getAllproducts.rejected]: (state) => {
      state.areallproductLoading = false;
      state.areallproductLoadingError = true;
    },
    //getProductByCategory
    [getProductByCategory.pending]: (state) => {
      state.categoryProductsLoading = true;
    },
    [getProductByCategory.fulfilled]: (state, action) => {
      state.categoryProductsLoading = false;
      state.categoryProductsLoaded = true;
      state.categoryProducts = action.payload;
    },
    [getProductByCategory.rejected]: (state) => {
      state.categoryProductsLoading = false;
      state.categoryProductsLoadedFailed = true;
    },
    //Product details
    [getProductDetail.pending]: (state) => {
      state.productdetailLoading = true;
    },
    [getProductDetail.fulfilled]: (state, action) => {
      state.productdetailLoading = false;
      state.productdetailLoaded = true;
      state.productdetail = action.payload;
    },
    [getProductDetail.rejected]: (state) => {
      state.productdetailLoading = false;
      state.productdetailLoadedFailed = true;
    },
  },
});

export default Products.reducer;
