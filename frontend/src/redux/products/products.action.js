import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllproductsApi,
  getProductdetailApi,
  getProductByCategoryApi,
} from "./api";

export const getAllproducts = createAsyncThunk(
  "getAllproductsApi/ AllproductsApi",
  async () => {
    const res = await getAllproductsApi();

    return res;
  }
);
export const getProductByCategory = createAsyncThunk(
  "getProductByCategoryApi/ getProductByCategoryApi",
  async (payload) => {
    const res = await getProductByCategoryApi(payload);

    return res;
  }
);
// export const getWomenproducts = createAsyncThunk(
//   "getWomenproductsApi/ WomenproductsApi",
//   async () => {
//     const res = await getWomenApi();
//     console.log(res, "wwww");
//     return res;
//   }
// );
export const getProductDetail = createAsyncThunk(
  "getProductdetailApi/ ProductdetailAp",
  async (id) => {
    const res = await getProductdetailApi(id);
    console.log(res, "PRODUCT DETAILLL");
    return res;
  }
);
