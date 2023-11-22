import { createSlice } from "@reduxjs/toolkit";
import { checkSession, login } from "./auth.actions";

const initialState = {
  isAuthenticated: false,
  isAuthenticationLoading: false,
  isAuthenticationFailed: false,
  user: {},
  //////////
  isLoginCalled: false,
};
const setLogin = (state, { payload: { accessToken, ...payload } }) => {
  localStorage.setItem("g9Token", accessToken);
  state.user = payload;
};

const auth = createSlice({
  name: "Auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isAuthenticationLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticationLoading = false;
      state.isAuthenticated = true;

      setLogin(state, action);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isAuthenticationLoading = false;
      state.isAuthenticationFailed = true;
      state.isLoginCalled = true;
    });
  },

  reducers: {
    logout: (state) => {
      state.isAuthenticationLoading = false;
      state.isAuthenticationFailed = false;
      state.isAuthenticated = false;
      localStorage.removeItem("g9Token");
    },
  },
});

export default auth.reducer;
export const { logout } = auth.actions;
