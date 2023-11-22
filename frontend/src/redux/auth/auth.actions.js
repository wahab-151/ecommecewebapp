import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkSessionApi, loginApi } from "./api";

export const login = createAsyncThunk("auth/login", async (payload) => {
  const res = await loginApi(payload);
  return res.data;
});

export const checkSession = createAsyncThunk(
  "auth/checkSession",
  async (payload) => {
    try {
      const res = await checkSessionApi(payload);

      return res.data;
    } catch (err) {
      throw err;
    }
  }
);
